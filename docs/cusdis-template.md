# Cusdis Comments Template

If you need to manually add Cusdis comments to a specific page, you can use this template:

```html
<div id="cusdis_thread"
  data-host="https://cusdis.com"
  data-app-id="ba73617f-2ff4-4c7e-95cd-c27d72c41e8e"
  data-page-id="your-custom-page-id"
  data-page-url="{{ PAGE_URL }}"
  data-page-title="{{ PAGE_TITLE }}"
></div>
<script async defer src="https://cusdis.com/js/cusdis.es.js"></script>
```

## Usage Instructions

1. **Replace `your-custom-page-id`** with a unique identifier for the page
2. **Place the code** at the bottom of your markdown file
3. **The script will automatically** handle the rest

## Automatic Integration

**Note:** Most pages will automatically have comments enabled through our `cusdis.js` script. This template is only needed if you want to override the automatic behavior or add comments to pages that don't follow the standard structure.

## Page ID Examples

- Home page: `home`
- About page: `about`
- AI Safety Standards: `safety-standards_ai-australian-legislation`
- Governance Templates: `governance-templates_policy-template-library`

The automatic system generates these IDs based on the page URL structure.
