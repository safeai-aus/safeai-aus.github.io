# SafeAI-Aus  

**Safe AI. Strong Australia.**  
An open-source Australian knowledge hub for safe, responsible, and growth-focused AI adoption.  

- Live site: [safeaiaus.org](https://safeaiaus.org/)  
- About: [`docs/about.md`](docs/about.md)  

---

## Purpose  
SafeAI-Aus provides practical resources, frameworks, and insights to help Australian businesses, policymakers, and communities adopt AI in a way that is:  
- **Safe** — aligned with ethical and regulatory standards  
- **Responsible** — transparent, fair, and accountable  
- **Growth-focused** — unlocking productivity and innovation for Australia’s future  

This repository powers the SafeAI-Aus knowledge hub, built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).  

---

## What’s inside  
- **`mkdocs.yml`** — site configuration (theme, navigation, metadata, search, sitemap)  
- **`docs/`** — all content in Markdown (flattened for clean URLs)  
- **`.github/workflows/deploy.yml`** — GitHub Actions workflow to build & publish the site  
- **`requirements.txt`** — Python dependencies for local preview and CI  

---

## Contributing & Editing  
Contributions are welcome — from fixing typos to adding new resources.  

- Add or edit pages in `docs/` (Markdown format).  
- Sidebar structure is defined in `mkdocs.yml` under `nav:`.  
- Page titles come from the first `# Heading` in each file.  

👉 Please keep content aligned with the project’s mission: *safe, responsible, and growth-focused AI for Australia.*  

---

## How to use this site  
- **Browse**: Visit [safeaiaus.org](https://safeaiaus.org/) to explore articles, frameworks, and tools.  
- **Search**: Use the search bar (top right) to find topics quickly.  
- **Learn**: Each section is written in plain English, with references and practical resources for Australian organisations.  
- **Contribute**: If you spot gaps, errors, or opportunities, you can suggest edits through GitHub (see below).  

---

## Local development (optional)  
To preview changes before pushing:  

```bash
python3 -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
mkdocs serve
```

Then open [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your browser.  

---

## Deployment  
- Pushing to `main` automatically triggers a GitHub Actions build.  
- The site is published to the `gh-pages` branch.  
- GitHub Pages is configured to serve from `gh-pages`.  

---

## Licence  
This project is licensed under the **Creative Commons Attribution 4.0 International Licence (CC BY 4.0)**.  
You are free to share and adapt the material with appropriate credit.  
