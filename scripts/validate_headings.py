#!/usr/bin/env python3
"""Validate Markdown heading hierarchy.

This script ensures that each Markdown file under ``docs/`` contains
exactly one level-1 heading (``#``) and that it appears before any lower
level headings. Front matter blocks and fenced code blocks are ignored
when scanning for headings.
"""
from __future__ import annotations

import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable, List

HEADING_PATTERN = re.compile(r"^(#{1,6})\s+.+$")


@dataclass
class HeadingIssue:
    path: Path
    message: str

    def __str__(self) -> str:  # pragma: no cover - trivial formatting helper
        return f"{self.path}: {self.message}"


def iter_markdown_files(root: Path) -> Iterable[Path]:
    for path in sorted(root.rglob("*.md")):
        if path.name.startswith('.'):
            continue
        yield path


def scan_file(path: Path) -> List[HeadingIssue]:
    issues: List[HeadingIssue] = []
    lines = path.read_text(encoding="utf-8").splitlines()

    idx = 0
    if lines and lines[0].strip() == "---":
        idx = 1
        while idx < len(lines) and lines[idx].strip() != "---":
            idx += 1
        if idx >= len(lines):
            issues.append(HeadingIssue(path, "Front matter not terminated"))
            return issues
        idx += 1  # skip closing --- line

    in_code_fence = False
    first_heading_level: int | None = None
    previous_heading_level: int | None = None
    h1_count = 0

    for line in lines[idx:]:
        stripped = line.strip()
        if stripped.startswith("```"):
            in_code_fence = not in_code_fence
            continue
        if in_code_fence or not stripped:
            continue

        match = HEADING_PATTERN.match(line)
        if not match:
            continue

        level = len(match.group(1))
        if first_heading_level is None:
            first_heading_level = level
            if level != 1:
                issues.append(HeadingIssue(path, "First heading is not level 1"))
        if level == 1:
            h1_count += 1
        if previous_heading_level is not None and level - previous_heading_level > 1:
            issues.append(
                HeadingIssue(
                    path,
                    f"Heading level jumps from H{previous_heading_level} to H{level}",
                )
            )
        previous_heading_level = level

    if h1_count == 0:
        issues.append(HeadingIssue(path, "No level-1 heading found"))
    elif h1_count > 1:
        issues.append(HeadingIssue(path, f"Multiple level-1 headings found ({h1_count})"))

    return issues


def main() -> int:
    docs_root = Path("docs")
    if not docs_root.exists():
        print("docs/ directory not found", file=sys.stderr)
        return 2

    issues: List[HeadingIssue] = []
    for path in iter_markdown_files(docs_root):
        issues.extend(scan_file(path))

    if issues:
        for issue in issues:
            print(issue, file=sys.stderr)
        return 1

    print("All Markdown headings are valid.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
