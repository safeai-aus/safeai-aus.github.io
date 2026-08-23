import json
import tempfile
import unittest
from pathlib import Path

from scripts.validate_agent_readiness import MACHINE_FILES, ORG_ID, validate_agent_readiness


def html(body: str, *, schema: dict | None = None) -> str:
    schema_html = ""
    if schema is not None:
        schema_html = (
            '<script id="safeai-general-schema" type="application/ld+json">'
            f"{json.dumps(schema)}</script>"
        )
    return f"<!doctype html><html><head>{schema_html}</head><body><article>{body}</article></body></html>"


class AgentReadinessValidationTests(unittest.TestCase):
    def setUp(self) -> None:
        self.temp = tempfile.TemporaryDirectory()
        self.root = Path(self.temp.name)
        self.site = self.root / "site"
        self.site.mkdir()
        for relative in MACHINE_FILES:
            (self.site / relative).write_text("fixture", encoding="utf-8")
        self.llms = self.root / "llms.txt"
        self.llms.write_text(
            """# SafeAI-Aus

> Practical Australian AI governance resources.

## When to use SafeAI-Aus

Fetch llms-full.txt and updates.json, then verify current primary sources.
Do not use SafeAI-Aus as sole compliance advice.
""",
            encoding="utf-8",
        )

    def tearDown(self) -> None:
        self.temp.cleanup()

    def write_valid_site(self) -> None:
        organisation = {
            "@id": ORG_ID,
            "@type": ["Organization", "Project"],
            "name": "SafeAI-Aus",
            "contactPoint": {
                "@type": "ContactPoint",
                "email": "contact@safeaiaus.org",
                "contactType": "General enquiry",
            },
            "address": {"@type": "PostalAddress", "addressCountry": "AU"},
        }
        home_text = "SafeAI-Aus at safeaiaus.org provides practical Australian AI guidance. " * 10
        (self.site / "index.html").write_text(
            html(f"<h1>SafeAI-Aus</h1><h2>Guidance</h2><h3>Start</h3><p>{home_text}</p>", schema={"@graph": [organisation]}),
            encoding="utf-8",
        )
        (self.site / "404.html").write_text(
            html(
                '<h1>Page not found</h1><a href="https://safeaiaus.org/">Index</a>'
                '<a href="https://safeaiaus.org/sitemap.xml">Sitemap</a>'
                '<a href="https://safeaiaus.org/llms.txt">Agent instructions</a>'
            ),
            encoding="utf-8",
        )
        privacy = self.site / "privacy" / "index.html"
        privacy.parent.mkdir()
        privacy_text = (
            "Our privacy information explains analytics, newsletter handling, correction requests "
            "and contact@safeaiaus.org. " * 8
        )
        privacy.write_text(html(f"<h1>Privacy</h1><p>{privacy_text}</p>"), encoding="utf-8")

    def test_accepts_complete_rendered_agent_contract(self) -> None:
        self.write_valid_site()

        result = validate_agent_readiness(self.site, self.llms)

        self.assertEqual(result.errors, [])

    def test_rejects_flat_home_incomplete_schema_and_unhelpful_404(self) -> None:
        self.write_valid_site()
        (self.site / "index.html").write_text(
            html(
                f"<h1>SafeAI-Aus at safeaiaus.org</h1><p>{'content ' * 100}</p>",
                schema={"@graph": [{"@id": ORG_ID, "contactPoint": {"email": "contact@safeaiaus.org"}}]},
            ),
            encoding="utf-8",
        )
        (self.site / "404.html").write_text(html("<h1>Not found</h1>"), encoding="utf-8")

        result = validate_agent_readiness(self.site, self.llms)

        self.assertTrue(any("H1/H2/H3" in error for error in result.errors))
        self.assertTrue(any("contactPoint" in error for error in result.errors))
        self.assertTrue(any("PostalAddress" in error for error in result.errors))
        self.assertTrue(any("recovery link" in error for error in result.errors))

    def test_rejects_missing_when_to_use_and_thin_privacy_page(self) -> None:
        self.write_valid_site()
        self.llms.write_text("# SafeAI-Aus\n\n> Summary.\n", encoding="utf-8")
        (self.site / "privacy" / "index.html").write_text(
            html("<h1>Privacy</h1><p>Contact us.</p>"),
            encoding="utf-8",
        )

        result = validate_agent_readiness(self.site, self.llms)

        self.assertTrue(any("when-to-use" in error for error in result.errors))
        self.assertTrue(any("at least 500" in error for error in result.errors))


if __name__ == "__main__":
    unittest.main()
