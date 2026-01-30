# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SafeAI-Aus is a knowledge hub website providing practical resources, frameworks, and guidance for safe and responsible AI adoption in Australia. The site is built using **Zensical** (a Rust-based static site generator, formerly MkDocs Material) and deployed to GitHub Pages.

**Live site:** https://safeaiaus.org/

## Development Commands

### Local Development

**IMPORTANT:** Use the `.venv-py312` virtual environment (Python 3.12) for local development.

```bash
# Create/activate the Python 3.12 virtual environment
python3.12 -m venv .venv-py312
source .venv-py312/bin/activate   # Windows: .venv-py312\Scripts\activate

# Install/upgrade dependencies (if needed)
pip install -r requirements.txt

# Serve site locally (with live reload)
zensical serve
# Opens at http://localhost:8000/

# Build static site
zensical build
# Output goes to site/ directory
```

**Note:** Zensical is a Rust-based binary distributed as a Python wheel. The binary requires Python 3.10+ to install properly from the wheel.

### Content Management

All content is in Markdown format within the `docs/` directory. The site has these main content areas:

1. **AI Safety & Standards** (`docs/safety-standards/`)
   - Australian legislation and voluntary safety standards
   - International legal overview

2. **Governance Templates** (`docs/governance-templates/`)
   - Ready-to-use policy templates, checklists, risk registers, forms
   - 11 total templates aligned with VAISS (Voluntary AI Safety Standard)

3. **Business Resources** (`docs/business-resources/`)
   - Grants and funding opportunities
   - Tools, frameworks, state/territory resources
   - Learning and development directory

4. **Resources** (`docs/resources/`)
   - Glossary
   - Australian AI Community page

## Architecture and Key Files

### Configuration

**`zensical.toml`** - Main site configuration
- Site metadata (name, description, URLs)
- Navigation structure (the `nav` array defines sidebar hierarchy)
- Theme settings (color schemes, features, icons)
- Custom CSS/JS paths
- Repository and social media links

**Important:** Navigation structure is defined in `zensical.toml` under `nav`, NOT in file structure. To add/remove/reorganize sidebar items, edit this file.

### Custom Templates and Assets

**`overrides/main.html`** - Custom Jinja2 template extending Zensical's base
- Enhanced SEO metadata (OpenGraph, Twitter cards)
- Structured data (JSON-LD) for search engines
- Custom favicon handling
- Canonical URL management
- Frontmatter-driven metadata (title, description, keywords, og_image, etc.)

**`docs/stylesheets/extra.css`** - Custom CSS
- Header styling to match logo background (#F6F3EF light mode, #2d2d2d dark mode)
- Navigation tabs styling
- Improved heading hierarchy and readability
- Listmonk newsletter form styling (centered, responsive)
- Dark mode overrides

**`docs/assets/extra.js`** - Custom JavaScript
- Umami analytics integration (website ID: f228fe92-e13d-456d-92f8-018fac9d587c)
- Canonical URL helpers
- Prevents multiple analytics script injections

**`docs/assets/performance-safe.js`** - Performance optimizations

### Airia AI Chatbot Integration

**SafeAI-Aus Knowledge Assistant**

The site includes an AI-powered chat widget using [Airia](https://airia.ai/) to help visitors find resources and answer questions about Australian AI governance. The integration is configured in `overrides/main.html` (content block):

- **API URL:** `https://prodaus.embed-api.airia.ai`
- **Pipeline ID:** `082a8566-0662-4ce1-83fb-42503ac7fb64`
- **API Key:** `ak-MTk2NTI1MjYwNnwxNzY3MzUxOTcwNzczfHRpLWMybHRjR3hsWm5rdVlXa3R8MXw5MTE4ODgyMTQg`
- **Root Element:** `<div id="airia-chat-root"></div>`
- **Module Import:** `https://prodaus.embed-api.airia.ai/get-chat-embed.js`

Chat widget configuration:
- **Greeting:** "Hi! I can help you find AI safety resources and answer questions about Australian AI governance. What would you like to know?"
- **Logo:** Uses compressed SafeAI-Aus chat logo (`assets/safeai-aus-chat-logo-compressed.png`)
  - Optimized to 200x200px, 58KB (compressed from original 2048x2048px, 5.9MB)
  - **Important:** Chat widget logos should be small (under 100KB) for performance
- **Image Settings:** Medium size, white background, green border (#0b6428, 3px)
- **Auto Open:** `false` (widget appears as a button, opens on click)

The chatbot is powered by Airia's pipeline system and provides context-aware responses based on the site's content.

**Do not modify** the pipeline ID, API key, or API URL without coordination with the Airia administrator.

**Image Optimization Note:** When adding new logos or images for the chat widget, always compress them significantly. Use Python Pillow to resize and optimize:
```python
from PIL import Image
img = Image.open("original.png")
img_resized = img.resize((200, 200), Image.Resampling.LANCZOS)
img_resized.save("compressed.png", "PNG", optimize=True, quality=85)
```

### Newsletter Integration

**Listmonk Newsletter Form**

The site uses a self-hosted [Listmonk](https://listmonk.app/) instance for newsletter management:

- **Form Action:** `https://lists.safeaiaus.org/subscription/form`
- **List ID:** `48a923d4-0865-49f1-9c94-67a234cbcae3` (SafeAI-Aus list)
- **Form Class:** `.listmonk-form` (styled in `extra.css`)

Newsletter form appears on:
- `docs/newsletter.md` (dedicated newsletter page)
- `docs/index.md` (homepage footer section)

The form includes:
- Email field (required)
- Name field (optional)
- List checkbox (pre-checked for SafeAI-Aus list)
- Privacy-focused (no third-party sharing)

**Do not modify** the form action URL or list ID without coordination with the newsletter administrator.

### Frontmatter Convention

Each Markdown page can include YAML frontmatter for SEO and metadata:

```yaml
---
title: "Page Title"
description: "Page description for meta tags"
keywords: "comma, separated, keywords"
author: "SafeAI-Aus"
robots: "index, follow"
og_title: "OpenGraph title"
og_description: "OpenGraph description"
og_type: "article"
og_url: "https://safeaiaus.org/page-url/"
og_image: "assets/custom-image.png"
twitter_card: "summary_large_image"
twitter_title: "Twitter card title"
twitter_description: "Twitter card description"
---
```

The custom template in `overrides/main.html` reads these frontmatter values to generate proper SEO tags.

## Deployment

**GitHub Actions Workflow:** `.github/workflows/deploy.yml`

- Triggers on push to `main` branch or manual workflow dispatch
- Installs Python 3.10 and dependencies from `requirements.txt`
- Runs `zensical build` to generate static site
- Generates `sitemap.xml` using Python script (inline in workflow)
- Uploads to GitHub Pages via Actions artifact
- GitHub Pages configured to deploy from GitHub Actions (not branch)

**No manual deployment needed** - pushing to `main` triggers automatic build and deploy.

## Content Guidelines

### Structure

- Page titles come from the first `# Heading` in each Markdown file
- Use proper heading hierarchy (h1 → h2 → h3)
- Include frontmatter for important pages (especially landing pages and governance templates)

### Style

- Written in plain English for Australian audiences
- Focus on practical, actionable guidance
- Align with project mission: safe, responsible, and growth-focused AI for Australia
- Professional tone for governance templates (minimal emoji use)
- More approachable tone for business resources

### Templates License Footer

Governance templates include a standardized disclaimer and CC BY 4.0 license footer. Use collapsible admonition format:

```markdown
??? info "Disclaimer & Licence - Click to expand"
    **Disclaimer:** This template provides best practice guidance for Australian organisations. SafeAI-Aus has exercised care in preparation but does not guarantee accuracy. Organisations should adapt to their context and may wish to seek professional advice.

    **Licence:** Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). You may copy, adapt, and redistribute with attribution: *"Source: SafeAI-Aus (safeaiaus.org)"*
```

## Common Patterns

### Adding New Content

1. Create Markdown file in appropriate `docs/` subdirectory
2. Add frontmatter (copy from similar page)
3. Update `zensical.toml` navigation structure if needed
4. Include proper heading hierarchy
5. Add disclaimer/license footer for templates

### Testing Changes

```bash
# ALWAYS activate the Python 3.12 venv
source .venv-py312/bin/activate

# Serve locally and check changes
zensical serve

# Build to verify no errors
zensical build
```

### Editing Navigation

Edit the `nav` array in `zensical.toml`. Structure:

```toml
nav = [
  { "Section Name" = [
    { "Page Name" = "path/to/file.md" },
    { "Subsection" = [
      { "Nested Page" = "path/to/nested.md" },
    ]},
  ]},
]
```

## Important Notes

- **Python Environment:**
  - **CRITICAL:** ALWAYS use `.venv-py312` (Python 3.12), NOT `.venv` (Python 3.9)
  - Zensical binary requires Python 3.10+ to install from wheel
  - If `zensical: command not found` error occurs, you're using the wrong venv or need to run `pip install -r requirements.txt`

- **Zensical Setup:**
  - Zensical is a Rust-based binary distributed as a Python wheel (cp310-abi3)
  - The PyPI package (`pip install zensical`) installs the binary automatically on Python 3.10+
  - Site was migrated from MkDocs Material to Zensical - some MkDocs features may not work

- **Development Workflow:**
  - Local server runs on `http://localhost:8000`
  - Site auto-rebuilds on file changes when using `zensical serve`
  - Build output goes to `site/` directory (gitignored)
  - GitHub Actions uses Python 3.10 for CI/CD builds

- **Asset Management:**
  - Custom CSS in `docs/stylesheets/`
  - Custom JS in `docs/assets/`
  - Images in `docs/assets/`
  - **Image Optimization:** Chat widget logos and icons should be compressed to <100KB
  - Use Python Pillow for image resizing/compression

- **Critical Integrations (Do Not Modify Without Authorization):**
  - **Analytics:** Umami Cloud (website ID: f228fe92-e13d-456d-92f8-018fac9d587c)
  - **Newsletter:** Listmonk self-hosted (lists.safeaiaus.org)
  - **AI Chat Widget:** Airia chatbot (pipeline ID, API key, API URL are fixed)

- **SEO & Content:**
  - OpenGraph images MUST use absolute URLs: `https://safeaiaus.org/assets/image.png`
  - Pages with time-sensitive info (grants, legislation) need periodic review
  - Navigation structure is in `zensical.toml`, not file structure
