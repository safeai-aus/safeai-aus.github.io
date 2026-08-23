#!/usr/bin/env python3
"""Validate rendered contracts that help automated agents recover and orient."""

from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass, field
from html.parser import HTMLParser
from pathlib import Path


ORG_ID = "https://safeaiaus.org/#organization"
MIN_HOME_TEXT = 500
MIN_PRIVACY_TEXT = 500
RECOVERY_LINKS = {
    "https://safeaiaus.org/",
    "https://safeaiaus.org/sitemap.xml",
    "https://safeaiaus.org/llms.txt",
}
MACHINE_FILES = ("sitemap.xml", "robots.txt", "llms.txt", "llms-full.txt", "updates.json")


@dataclass
class AgentReadinessResult:
    errors: list[str] = field(default_factory=list)


@dataclass
class HtmlSignals:
    text: str
    headings: list[tuple[int, str]]
    links: set[str]
    general_schema: dict[str, object] | None


class AgentHtmlParser(HTMLParser):
    """Extract visible article text, headings, links and the general JSON-LD graph."""

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.article_depth = 0
        self.suppressed_depth = 0
        self.text_parts: list[str] = []
        self.headings: list[tuple[int, str]] = []
        self.links: set[str] = set()
        self._heading_level: int | None = None
        self._heading_parts: list[str] = []
        self._schema = False
        self._schema_parts: list[str] = []
        self.general_schema: dict[str, object] | None = None

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = {name.lower(): value for name, value in attrs}
        tag = tag.lower()
        if tag == "article":
            self.article_depth += 1
        if tag in {"script", "style", "template", "svg"}:
            self.suppressed_depth += 1
        if tag == "script" and attributes.get("id") == "safeai-general-schema":
            self._schema = True
            self._schema_parts = []
        if not self.article_depth or self.suppressed_depth:
            return
        if tag == "a" and attributes.get("href"):
            self.links.add(attributes["href"] or "")
        if re.fullmatch(r"h[1-6]", tag):
            self._heading_level = int(tag[1])
            self._heading_parts = []

    def handle_data(self, data: str) -> None:
        if self._schema:
            self._schema_parts.append(data)
        if not self.article_depth or self.suppressed_depth or not data.strip():
            return
        self.text_parts.append(data)
        if self._heading_level is not None:
            self._heading_parts.append(data)

    def handle_endtag(self, tag: str) -> None:
        tag = tag.lower()
        if self._schema and tag == "script":
            try:
                value = json.loads("".join(self._schema_parts))
            except json.JSONDecodeError:
                value = None
            if isinstance(value, dict):
                self.general_schema = value
            self._schema = False
        if self._heading_level is not None and tag == f"h{self._heading_level}":
            heading = " ".join("".join(self._heading_parts).split())
            self.headings.append((self._heading_level, heading))
            self._heading_level = None
        if tag in {"script", "style", "template", "svg"} and self.suppressed_depth:
            self.suppressed_depth -= 1
        if tag == "article" and self.article_depth:
            self.article_depth -= 1

    def signals(self) -> HtmlSignals:
        return HtmlSignals(
            text=" ".join("".join(self.text_parts).split()),
            headings=self.headings,
            links=self.links,
            general_schema=self.general_schema,
        )


def _read_html(path: Path, result: AgentReadinessResult) -> HtmlSignals | None:
    if not path.is_file():
        result.errors.append(f"missing rendered endpoint: {path}")
        return None
    parser = AgentHtmlParser()
    parser.feed(path.read_text(encoding="utf-8"))
    parser.close()
    return parser.signals()


def _validate_home(site: Path, result: AgentReadinessResult) -> None:
    signals = _read_html(site / "index.html", result)
    if not signals:
        return
    if len(signals.text) < MIN_HOME_TEXT:
        result.errors.append(
            f"homepage raw HTML has {len(signals.text)} visible article characters; expected at least {MIN_HOME_TEXT}"
        )
    levels = [level for level, _ in signals.headings]
    if levels.count(1) != 1:
        result.errors.append("homepage raw HTML must contain exactly one article H1")
    if not {2, 3}.issubset(levels):
        result.errors.append("homepage raw HTML must expose a structured H1/H2/H3 hierarchy")
    if levels and levels[0] != 1:
        result.errors.append("homepage article must start with H1")
    for previous, current in zip(levels, levels[1:]):
        if current - previous > 1:
            result.errors.append(f"homepage heading hierarchy jumps from H{previous} to H{current}")
    if "SafeAI-Aus" not in signals.text or "safeaiaus.org" not in signals.text:
        result.errors.append("homepage must identify both the SafeAI-Aus brand and canonical domain")
    _validate_organisation_schema(signals, result)


def _validate_organisation_schema(signals: HtmlSignals, result: AgentReadinessResult) -> None:
    schema = signals.general_schema or {}
    graph = schema.get("@graph")
    nodes = graph if isinstance(graph, list) else []
    organisation = next(
        (node for node in nodes if isinstance(node, dict) and node.get("@id") == ORG_ID),
        None,
    )
    if not isinstance(organisation, dict):
        result.errors.append("homepage is missing the SafeAI-Aus Organization schema node")
        return
    contact = organisation.get("contactPoint")
    if not isinstance(contact, dict) or not contact.get("email") or not contact.get("contactType"):
        result.errors.append("Organization schema contactPoint must include email and contactType")
    address = organisation.get("address")
    if not isinstance(address, dict) or address.get("@type") != "PostalAddress" or not address.get("addressCountry"):
        result.errors.append("Organization schema address must be a PostalAddress with addressCountry")


def _validate_404(site: Path, result: AgentReadinessResult) -> None:
    signals = _read_html(site / "404.html", result)
    if not signals:
        return
    if not signals.headings or signals.headings[0][0] != 1:
        result.errors.append("404 response body must start with an H1")
    missing = sorted(RECOVERY_LINKS - signals.links)
    if missing:
        result.errors.append(f"404 response is missing recovery link(s): {', '.join(missing)}")


def _validate_privacy(site: Path, result: AgentReadinessResult) -> None:
    signals = _read_html(site / "privacy" / "index.html", result)
    if not signals:
        return
    if len(signals.text) < MIN_PRIVACY_TEXT:
        result.errors.append(
            f"privacy page has {len(signals.text)} visible article characters; expected at least {MIN_PRIVACY_TEXT}"
        )
    required_topics = ("analytics", "newsletter", "correction", "contact@safeaiaus.org")
    lower_text = signals.text.lower()
    missing = [topic for topic in required_topics if topic.lower() not in lower_text]
    if missing:
        result.errors.append(f"privacy page is missing topic(s): {', '.join(missing)}")


def _validate_llms(path: Path, result: AgentReadinessResult) -> None:
    if not path.is_file():
        result.errors.append(f"missing llms.txt: {path}")
        return
    text = path.read_text(encoding="utf-8")
    non_empty = [line for line in text.splitlines() if line.strip()]
    if not non_empty or not non_empty[0].startswith("# "):
        result.errors.append("llms.txt must start with a single H1 project name")
    if len(non_empty) < 2 or not non_empty[1].startswith("> "):
        result.errors.append("llms.txt must place a project summary blockquote after its H1")
    if "## When to use SafeAI-Aus" not in text:
        result.errors.append("llms.txt is missing an explicit when-to-use section")
    for instruction in ("llms-full.txt", "updates.json", "verify", "Do not use SafeAI-Aus"):
        if instruction not in text:
            result.errors.append(f"llms.txt when-to-use guidance is missing {instruction!r}")


def validate_agent_readiness(site: Path, llms: Path) -> AgentReadinessResult:
    result = AgentReadinessResult()
    _validate_home(site, result)
    _validate_404(site, result)
    _validate_privacy(site, result)
    _validate_llms(llms, result)
    for relative in MACHINE_FILES:
        if not (site / relative).is_file():
            result.errors.append(f"missing public machine-readable file: {site / relative}")
    return result


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--site", type=Path, default=Path("site"))
    parser.add_argument("--llms", type=Path, default=Path("llms.txt"))
    args = parser.parse_args()
    result = validate_agent_readiness(args.site, args.llms)
    for error in result.errors:
        print(f"ERROR: {error}", file=sys.stderr)
    if result.errors:
        print(f"Agent-readiness validation failed with {len(result.errors)} error(s).", file=sys.stderr)
        return 1
    print("Agent-readiness validation passed for homepage, 404, privacy, schema and machine-readable files.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
