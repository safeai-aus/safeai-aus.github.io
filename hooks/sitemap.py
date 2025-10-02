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

_DOCUMENT_PAGES: List[Tuple[str, Optional[Path]]] = []


def _iter_document_pages(files: "Files") -> Iterable["File"]:
    """Return the documentation pages from the current build."""
    return getattr(files, "documentation_pages", lambda: [])()


def on_files(files: "Files", config):
    """Capture documentation page URLs so we can emit them after the build."""
    base_url = (config or {}).get("site_url")
    _DOCUMENT_PAGES.clear()
    if not base_url:
        return files

    base_url = base_url.rstrip("/") + "/"
    for file in _iter_document_pages(files):
        url = urljoin(base_url, file.url)
        src_path = Path(file.abs_src_path) if file.abs_src_path else None
        _DOCUMENT_PAGES.append((url, src_path))
    return files


def on_post_build(config):
    """Write the sitemap.xml file into the built site directory."""
    if not _DOCUMENT_PAGES:
        return

    site_dir = Path(config["site_dir"])
    site_dir.mkdir(parents=True, exist_ok=True)

    urlset = ET.Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")

    for url, src_path in sorted(_DOCUMENT_PAGES, key=lambda item: item[0]):
        url_el = ET.SubElement(urlset, "url")
        loc_el = ET.SubElement(url_el, "loc")
        loc_el.text = url

        if src_path and src_path.exists():
            lastmod = datetime.fromtimestamp(src_path.stat().st_mtime, tz=timezone.utc)
            lastmod_el = ET.SubElement(url_el, "lastmod")
            lastmod_el.text = lastmod.astimezone(timezone.utc).isoformat().replace("+00:00", "Z")

    tree = ET.ElementTree(urlset)
    tree.write(site_dir / "sitemap.xml", encoding="utf-8", xml_declaration=True)

    # Clear cached pages so subsequent builds start fresh (important for `mkdocs serve`).
    _DOCUMENT_PAGES.clear()
