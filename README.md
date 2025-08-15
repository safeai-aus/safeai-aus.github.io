# SafeAI-Aus

**Safe AI. Strong Australia.**  
Open-source Australian knowledge hub for safe, responsible, and growth-focused AI adoption.

- Live site: https://safeai-aus.github.io/
- About: [`docs/about.md`](docs/about.md)

## 🚀 What this repo contains
- `mkdocs.yml` — site configuration (Material theme, sidebar nav, search, sitemap)
- `docs/` — all site content (flattened for clean URLs)
- `.github/workflows/deploy.yml` — GitHub Actions to build & publish to `gh-pages`
- `requirements.txt` — dependencies for local preview and CI

## 🧭 Editing content
- Add or update pages in `docs/` (Markdown).  
- The sidebar is defined in `mkdocs.yml` under `nav:`.  
- Page titles come from the first `# Heading` in each file.

## 🛠️ Local preview (optional)
```bash
python3 -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
mkdocs serve
```
Then browse http://127.0.0.1:8000/

## 🚢 Deploys
Push to `main` triggers the GitHub Actions workflow which builds the site and publishes it to the `gh-pages` branch.  
GitHub Pages is configured to serve from `gh-pages`.

## 📄 Licence
This work is licensed under the Creative Commons Attribution 4.0 International License (CC BY 4.0).
