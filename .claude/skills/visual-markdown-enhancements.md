# Visual Markdown Enhancements Skill

Apply consistent visual enhancements to SafeAI-Aus markdown pages using Zensical/Material-compatible markdown syntax.

## When to Use This Skill

- Enhancing existing content pages for better readability
- Adding visual structure to template pages
- Standardizing formatting across the site
- Converting plain markdown to visually enhanced pages

## Enhancement Patterns

Refer to `VISUAL-ENHANCEMENTS.md` in the repository root for complete pattern library.

### 1. Page Headers

Add context metadata at the top of content pages:

```markdown
> **Purpose:** Brief description of page purpose
> **Audience:** Target readers | **Time:** Estimated reading/completion time
```

**Example:**
```markdown
> **Purpose:** Assess your organisation's preparedness for safe AI adoption
> **Audience:** Leadership, governance, and technical teams | **Time:** 15-30 minutes
```

### 2. "How to Use" Sections

**Rule:** Always use single unified approach, never tabs!

✅ **Correct (Unified):**
```markdown
!!! tip "How to Use This Template"
    1. Step one
    2. Step two
    3. Step three
```

❌ **Incorrect (Tabbed):**
```markdown
!!! tip "How to Use This Template"
    === "Quick Start"
        1. Steps...
    === "Thorough"
        1. More steps...
```

**Guidelines:**
- Combine best practices from all approaches into 5-10 steps
- Order steps logically (prepare → execute → verify)
- Be specific about actions (not vague like "review carefully")

### 3. Admonitions

Use admonitions for callouts and important information:

**Admonition Types:**
- `!!! tip` - Best practices, recommendations, how-to guidance
- `!!! info` - Additional context, explanations, background
- `!!! success` - Positive outcomes, achievements, standards compliance
- `!!! warning` - Important considerations, cautions
- `!!! danger` - Critical warnings, blockers
- `??? note` - Collapsible sections (disclaimers, licenses, FAQs)

**Formatting Rules:**
- **CRITICAL:** Add blank lines before list items inside admonitions for proper rendering
- **CRITICAL:** Use 4-space indentation for sub-bullets (not 2-space) in Zensical
- **CRITICAL:** Add blank line after bold headers before bullet lists
- Use meaningful titles: `!!! tip "How to Use"` not `!!! tip`
- Keep content indented (4 spaces)

**Example (correct formatting):**
```markdown
!!! success "Standards Compliance"
    === "AI6 Essential Practices"
        ✓ **Practice one** — Description

        ✓ **Practice two** — Description

        ✓ **Practice three** — Description
```

### 4. Icons in Lists

Enhance lists with relevant icons:

**Common icons:**
- ✅ ❌ (do/don't, allowed/prohibited)
- 📋 📊 📝 📈 (documents, data, templates)
- ⚠️ 🔴 🟡 🟢 (risk levels)
- ✓ (checkmarks in compliance sections)
- 🎯 🗺️ 🔄 ⏳ (goals, roadmaps, processes, pending)
- 🌱 (sustainability)

**Example:**
```markdown
- ✅ **Consistency** — Common set of documents reduces gaps
- ✅ **Risk reduction** — Guardrail alignment ensures risks are addressed
- ✅ **Efficiency** — Use without building from scratch
```

### 5. Content Tabs (Use Sparingly)

Use tabs only for genuinely different perspectives or contexts (e.g., comparing standards):

```markdown
!!! success "Standards Compliance"
    === "AI6 Essential Practices"
        Content for AI6...

    === "Voluntary AI Safety Standard (10 Guardrails)"
        Content for VAISS...
```

**Don't use tabs for:**
- Quick vs thorough approaches (consolidate instead)
- Beginner vs advanced (write for all levels)
- Different durations (pick one recommended approach)

### 6. License Footer (Standard Format)

Always use collapsible note admonition:

```markdown
??? note "Disclaimer & Licence"
    **Disclaimer:** This template provides best practice guidance for Australian organisations. SafeAI-Aus has exercised care in preparation but does not guarantee accuracy, reliability, or completeness. Organisations should adapt to their specific context and may wish to seek advice from legal, governance, or compliance professionals before formal adoption.

    **Licence:** Licensed under [Creative Commons Attribution 4.0 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). You are free to copy, adapt, and redistribute with attribution: *"Source: SafeAI-Aus (safeaiaus.org)"*
```

### 7. Section Numbering with Emojis

For checklists and step-by-step content:

```markdown
## 1️⃣ Strategy & Governance
## 2️⃣ Data & Privacy
## 3️⃣ Risk & Impact
```

### 8. Risk Level Tables

Use color-coded icons for risk levels:

```markdown
| Risk Level | Example Use Cases |
|------------|-------------------|
| 🟢 **Low** | Website chatbot, content summarization |
| 🟡 **Medium** | Staff rostering, marketing automation |
| 🔴 **High** | Automated loan approvals, hiring decisions |
```

## Australian English Requirements

**Always convert American to Australian English:**

| American | Australian |
|----------|------------|
| customize | customise |
| organize | organise |
| organization | organisation |
| organizational | organisational |
| optimize | optimise |
| analyze | analyse |
| center | centre |

**Exception:** Leave schema.org vocabulary unchanged (`"@type": "Organization"`)

## Enhancement Workflow

### Step 1: Read and Analyze
```bash
# Read the target file
Read the markdown file

# Review existing structure
- Check for plain lists that could use admonitions
- Identify American English spellings
- Look for duplicate content
- Check for tabbed sections that should be consolidated
```

### Step 2: Apply Enhancements

**Priority order:**
1. Add page header (Purpose/Audience/Time)
2. Convert/consolidate any tabbed "How to Use" sections to unified approach
3. Add admonitions for important sections
4. Add icons to lists
5. Ensure proper blank lines before list items in admonitions
6. Convert to Australian English
7. Add/fix license footer
8. Add Standards Compliance tabs (if applicable)

### Step 3: Verify Formatting

**MANDATORY automated check before committing:**
```bash
# Run this script to catch formatting issues
cat > /tmp/check_formatting.sh <<'SCRIPT'
#!/bin/bash
file="$1"
errors=0

echo "Checking $file for formatting issues..."

# Check for bold headers without blank line before lists
bold_without_blank=$(awk '
  /^\*\*[^*]+:\*\*$/ {
    bold_line = NR
    bold_text = $0
    getline
    if (/^-/) {
      print "Line " bold_line ": Missing blank line after bold header"
      errors++
    }
  }
  END { print errors }
' "$file")

if [ "$bold_without_blank" -gt 0 ]; then
  echo "❌ Found bold headers without blank lines before lists"
  errors=$((errors + bold_without_blank))
fi

exit $errors
SCRIPT

chmod +x /tmp/check_formatting.sh
/tmp/check_formatting.sh "docs/path/to/file.md"
```

**Critical manual checks:**
- [ ] RAN automated formatting check (see above) - NO ERRORS
- [ ] Blank lines before list items inside admonitions
- [ ] Blank lines after ALL bold headers before bullet lists
- [ ] Proper indentation (4 spaces in admonitions)
- [ ] No tabs in "How to Use" sections
- [ ] Australian English throughout
- [ ] Icons are relevant and not excessive
- [ ] Collapsible `???` used only for license/disclaimer/FAQs

### Step 4: Build and Test
```bash
# Build with Zensical
zensical build

# Verify no errors
# Check build time (should be ~0.04-0.06s)
```

### Step 5: Commit Changes
```bash
git add <files>
git commit -m "Apply visual enhancements to <section>

- Add page header with purpose/audience/time
- Consolidate 'How to Use' instructions to unified approach
- Add admonitions for key sections
- Enhance lists with icons
- Convert to Australian English
- Fix formatting in admonition sections"
```

## Common Formatting Issues in Zensical

### Issue 1: Sub-bullets Rendering as Main Bullets

**Problem:** Sub-bullets with 2-space indentation render as top-level bullets instead of nested bullets.

**Example (incorrect - renders flat):**
```markdown
- **Main point:**
  - Sub-point (2 spaces)
  - Sub-point (2 spaces)
```

**Solution:** Use 4-space indentation for all sub-bullets.

**Example (correct - renders nested):**
```markdown
- **Main point:**
    - Sub-point (4 spaces)
    - Sub-point (4 spaces)
```

**Fix command:** `perl -i -pe 's/^  - /    - /' filename.md`

### Issue 2: Lists After Bold Headers Not Rendering

**Problem:** Bullet lists immediately after bold text headers render as part of the header instead of as a list.

**Example (incorrect):**
```markdown
**Common reasons:**
- Point one
- Point two
```

**Solution:** Add blank line after bold header.

**Example (correct):**
```markdown
**Common reasons:**

- Point one
- Point two
```

### Issue 3: List Items in Admonitions Not Spacing

**Problem:** List items inside admonitions run together without proper spacing.

**Solution:** Add blank lines between list items in admonitions (especially for tick marks).

**Example (correct):**
```markdown
!!! success "Standards"
    ✓ **First standard** — Description

    ✓ **Second standard** — Description

    ✓ **Third standard** — Description
```

## Common Mistakes to Avoid

❌ **Don't:**
- Use tabs for quick vs thorough approaches (consolidate instead)
- Use 2-space indentation for sub-bullets (use 4-space)
- Forget blank lines after bold headers before lists
- Forget blank lines before list items in admonitions
- Over-use emojis (keep professional)
- Create confusing navigation (duplicate section names)
- Mention guardrails in both description AND "Supports:" bullet (pick one)
- Use American English

✅ **Do:**
- Consolidate multiple approaches into single best practice
- Use 4-space indentation for all sub-bullets
- Add blank lines after bold headers
- Test build after changes
- Keep visual enhancements consistent across similar pages
- Use Australian English
- Add blank lines for proper markdown rendering

## Example Transformations

### Before (Plain):
```markdown
# AI Risk Assessment Checklist

This checklist helps you assess risks.

How to use:
- Read each section
- Check boxes that apply
- Calculate your score

## 1. Project Overview
- [ ] Have you described what the AI does?
```

### After (Enhanced):
```markdown
# AI Risk Assessment Checklist

> **Purpose:** Systematically identify and evaluate AI risks before deployment
> **Audience:** Project owners, risk teams, governance leads | **Time:** 1-2 hours per system

!!! tip "How to Use This Checklist"
    1. Assemble cross-functional team (tech, legal, compliance) for medium to high-risk systems
    2. Work through Sections 1-8 sequentially
    3. Record responses to each checkbox with detailed documentation
    4. Complete quantitative risk scoring (Section 9)
    5. Develop mitigation plan for high-risk items
    6. Obtain sign-off before deployment
    7. Keep completed checklist in project records
    8. Schedule regular review cadence

## 1️⃣ Project Overview & Purpose

- [ ] Have you clearly described what the AI system will do?
- [ ] Does it provide a clear benefit (e.g. efficiency, customer service, staff support)?
```

## Files Enhanced So Far

✅ **Governance Templates (4/12):**
- policy-template-library.md
- ai-use-policy.md
- ai-readiness-checklist.md
- ai-risk-assessment-checklist.md

⏳ **Remaining Governance Templates (8):**
- ai-change-management.md
- ai-implementation-roadmap.md
- ai-risk-register.md
- ai-risks-by-industry.md
- ai-assurance-transparency-auditing-reporting.md
- ai-project-register.md
- ai-vendor-evaluation-checklist.md
- ai-incident-report-form.md

⏳ **Business Resources (7):**
- index.md
- safe-ai-adoption-getting-started.md
- ai-grants-funding-australia.md
- ai-aus-tools-frameworks.md
- state-territory-ai-resources.md
- ai-learning-development-directory.md

⏳ **Safety Standards (5):**
- index.md
- voluntary-ai-safety-standard-10-guardrails.md
- guidance-for-ai-adoption-ai6.md
- ai-australian-legislation.md
- international-ai-legal-overview.md

⏳ **Core Pages:**
- index.md (homepage)
- about.md
- contact.md
- glossary.md

## Next Steps

After running this skill on a file:
1. Review the enhanced markdown
2. Build and verify no errors
3. Commit with descriptive message
4. Move to next file in priority order
