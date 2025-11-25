"""MkDocs hook module to generate a sitemap.xml during builds."""
from __future__ import annotations

from datetime import datetime, timezone
from pathlib import Path
from typing import Iterable, List, Optional, Tuple
from urllib.parse import urljoin
import xml.etree.ElementTree as ET

try:
    from mkdocs.structure.files import Files, File
except ImportError:  # pragma: no cover - MkDocs always provides this during builds.
    Files = None  # type: ignore
    File = None  # type: ignore

_DOCUMENT_PAGES: List[Tuple[str, Optional[Path], Optional[str], Optional[str]]] = []


# Mapping of relative paths (from docs_dir) to changefreq/priority hints.
# Keys can be full file names or directory prefixes; the first match wins.
_SITEMAP_HINTS: List[Tuple[str, Tuple[str, str]]] = [
    ("index.md", ("weekly", "1.0")),
    ("governance-templates", ("weekly", "0.8")),
]


def _iter_document_pages(files: "Files") -> Iterable["File"]:
    """Return the documentation pages from the current build."""
    return getattr(files, "documentation_pages", lambda: [])()


def _sitemap_metadata(relative_path: Optional[Path]) -> Tuple[Optional[str], Optional[str]]:
    """Return changefreq and priority hints for a docs-relative path."""

    if not relative_path:
        return None, None

    posix_path = relative_path.as_posix()
    for prefix, values in _SITEMAP_HINTS:
        if posix_path == prefix or posix_path.startswith(prefix + "/"):
            return values

    return None, None


def on_files(files: "Files", config):
    """Capture documentation page URLs so we can emit them after the build."""
    base_url = (config or {}).get("site_url")
    _DOCUMENT_PAGES.clear()
    if not base_url:
        return files

    base_url = base_url.rstrip("/") + "/"
    docs_dir = Path(config.get("docs_dir", "docs")).resolve()
    for file in _iter_document_pages(files):
        url = urljoin(base_url, file.url)
        src_path = Path(file.abs_src_path) if file.abs_src_path else None
        try:
            rel_path = src_path.resolve().relative_to(docs_dir) if src_path else None
        except ValueError:
            rel_path = src_path
        changefreq, priority = _sitemap_metadata(rel_path)
        _DOCUMENT_PAGES.append((url, src_path, changefreq, priority))
    return files


def on_post_build(config):
    """Write the sitemap.xml file into the built site directory."""
    if not _DOCUMENT_PAGES:
        return

    site_dir = Path(config["site_dir"])
    site_dir.mkdir(parents=True, exist_ok=True)

    urlset = ET.Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")

    for url, src_path, changefreq, priority in sorted(_DOCUMENT_PAGES, key=lambda item: item[0]):
        url_el = ET.SubElement(urlset, "url")
        loc_el = ET.SubElement(url_el, "loc")
        loc_el.text = url

        if src_path and src_path.exists():
            lastmod = datetime.fromtimestamp(src_path.stat().st_mtime, tz=timezone.utc)
            lastmod_el = ET.SubElement(url_el, "lastmod")
            lastmod_el.text = lastmod.astimezone(timezone.utc).isoformat().replace("+00:00", "Z")

        if changefreq:
            changefreq_el = ET.SubElement(url_el, "changefreq")
            changefreq_el.text = changefreq

        if priority:
            priority_el = ET.SubElement(url_el, "priority")
            priority_el.text = priority

    tree = ET.ElementTree(urlset)
    tree.write(site_dir / "sitemap.xml", encoding="utf-8", xml_declaration=True)

    # Clear cached pages so subsequent builds start fresh (important for `mkdocs serve`).
    _DOCUMENT_PAGES.clear()
