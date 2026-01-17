# Visual Enhancements Guide for SafeAI-Aus

Quick reference for consistent markdown formatting across the site.

---

## 1. License Footer (Standardized)

**Usage:** Copy this to the bottom of every template page.

### Recommended: Collapsible Admonition

```markdown
??? note "Disclaimer & Licence"
    **Disclaimer:** This template provides best practice guidance for Australian organisations. SafeAI-Aus has exercised care in preparation but does not guarantee accuracy, reliability, or completeness. Organisations should adapt to their specific context and may wish to seek advice from legal, governance, or compliance professionals before formal adoption.

    **Licence:** Licensed under [Creative Commons Attribution 4.0 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). You may copy, adapt, and redistribute with attribution: *"Source: SafeAI-Aus (safeaiaus.org)"*
```

### Alternative: Inline Small Text

```html
<div style="font-size: 0.8em; color: #666; margin-top: 3em; padding-top: 1em; border-top: 1px solid #e0e0e0;">

**Disclaimer & Licence:** This template provides best practice guidance. SafeAI-Aus has exercised care in preparation but does not guarantee accuracy. Organisations should adapt to their context. Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — you may copy and adapt with attribution.

</div>
```

---

## 2. Page Headers (Context & Metadata)

Add this below the H1 title to provide quick context:

```markdown
# Page Title

> **Purpose:** [One-line description of what this page does]
> **Audience:** [Who should read this] | **Time:** [How long it takes]

!!! tip "Quick Start"
    [3-5 bullet points of key actions or takeaways]
```

**Example:**
```markdown
# AI Readiness Checklist

> **Purpose:** Assess your organisation's preparedness for safe AI adoption
> **Audience:** Leadership, governance, tech teams | **Time:** 15-30 minutes

!!! tip "How to Use"
    Complete each section and tally your score. 80%+ indicates readiness to proceed.
```

---

## 3. Tabs for Multi-Audience Content

Use tabs when content has different perspectives:

```markdown
=== "For Executives"
    High-level summary focused on business impact and ROI

=== "For Tech Teams"
    Technical implementation details and best practices

=== "For Compliance"
    Regulatory requirements and audit considerations
```

**Example:**
```markdown
!!! tip "Getting Started"
    === "Quick Start (15 min)"
        1. Download the template
        2. Customize key sections
        3. Review with stakeholders

    === "Thorough Implementation (2-4 hours)"
        - Complete readiness assessment
        - Workshop with teams
        - Obtain executive sign-off
```

---

## 4. Call-to-Action Buttons

Make downloads and next steps more prominent:

```markdown
**Ready to get started?**

[Download Template (.docx) :material-download:](#){ .md-button .md-button--primary }
[View Example :material-eye:](#){ .md-button }
```

---

## 5. Icon-Enhanced Lists

Add visual interest to lists:

```markdown
**What's included:**

- ✅ Governance framework
- ✅ Risk assessment process
- ✅ Privacy compliance checklist
- ✅ Incident response plan

**Next steps:**

1. 📋 Complete readiness assessment
2. 📊 Set up project register
3. 🎯 Plan implementation roadmap
```

---

## 6. Tables with Visual Status

Use emojis and icons for quick scanning:

```markdown
| Step | Action | Owner | Status |
|:----:|--------|-------|:------:|
| 1 | Complete readiness assessment | Leadership | ✅ Done |
| 2 | Draft AI Use Policy | Governance | 🔄 In Progress |
| 3 | Conduct risk assessment | Risk Team | ⏳ Pending |
```

**Scenario tables:**

```markdown
| Scenario | Allowed? | Requirements |
|----------|:--------:|--------------|
| ChatGPT for drafts | ✅ Yes | Review before sending |
| Customer data in AI | ❌ No | Privacy breach risk |
| Code suggestions | ✅ Yes | Security testing required |
```

---

## 7. Admonition Types

Use these consistently for different message types:

### Success / Key Takeaways
```markdown
!!! success "Key Takeaway"
    Start with governance and processes before deploying AI systems.
```

### Tips / Best Practices
```markdown
!!! tip "Pro Tip"
    Complete the readiness checklist before drafting your AI policy.
```

### Warnings / Important Info
```markdown
!!! warning "Customisation Required"
    Replace **[Organisation Name]** throughout this template.
```

### Info / Context
```markdown
!!! info "Did You Know?"
    80% of AI projects fail due to poor governance, not technology.
```

### Collapsible Details
```markdown
??? question "Frequently Asked Questions"
    **Q: How long does implementation take?**
    A: Typically 3-6 months from assessment to production.
```

---

## 8. Visual Section Breaks

Use horizontal rules with context:

```markdown
---

## Next Steps

**Where to go from here:**

- ✅ [AI Readiness Checklist](link)
- 📋 [AI Use Policy Template](link)
- 🎯 [Implementation Roadmap](link)

---
```

---

## 9. Standards Compliance Sections

Show alignment with Australian frameworks:

```markdown
## Alignment with Australian Standards

!!! success "Standards Compliance"
    === "AI6 Essential Practices"
        ✓ **Decide who is accountable** — Section 9 assigns clear responsibility
        ✓ **Maintain human control** — Sections 5-6 mandate oversight
        ✓ **Share essential information** — Sections 1, 4 communicate commitments

    === "Voluntary AI Safety Standard (10 Guardrails)"
        ✓ **Guardrail 1:** Accountability established
        ✓ **Guardrail 5:** Human control required
        ✓ **Guardrail 4:** Transparency committed
        ✓ **Guardrail 3:** Data protection mandated
```

---

## 10. Blockquotes for Highlights

Use for important statements or quotes:

```markdown
> **Important:** All high-risk AI systems require executive approval before deployment.

> "AI governance is not a technical problem—it's an organisational design challenge."
```

---

## Quick Reference: Common Icons

| Icon | Usage | Example |
|------|-------|---------|
| ✅ | Completed, yes, approved | Task done |
| ❌ | Not allowed, no, failed | Prohibited action |
| ⚠️ | Warning, high priority | Critical risk |
| 🔄 | In progress | Work underway |
| ⏳ | Pending, waiting | Not started |
| 📋 | Checklist, template | Download form |
| 📊 | Data, analytics | View dashboard |
| 🎯 | Goal, target | Implementation plan |
| 🟢 | Low risk, safe | Low severity |
| 🟡 | Medium risk | Moderate severity |
| 🔴 | High risk, critical | High severity |

---

## Example: Before & After

### Before (Plain)
```markdown
## Template Disclaimer & Licence

### Disclaimer
The purpose of this template is to provide best practice guidance on implementing
safe and responsible AI governance in Australian organisations...
[300 words of legal text]

### Licence
This work is licensed under CC BY 4.0...
```

### After (Enhanced)
```markdown
??? note "Disclaimer & Licence"
    **Disclaimer:** This template provides best practice guidance. SafeAI-Aus has
    exercised care in preparation but does not guarantee accuracy. Adapt to your context.

    **Licence:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) —
    Free to use with attribution.
```

**Result:** Reduces visual clutter, keeps page focused, legal text still accessible.

---

## Implementation Checklist

- [ ] Replace all license sections with collapsible admonition
- [ ] Add page headers (purpose, audience, time) to all templates
- [ ] Convert key links to button style for CTAs
- [ ] Add tabs to multi-audience content (executive/tech/compliance views)
- [ ] Enhance tables with status icons
- [ ] Add "Next Steps" sections with icon lists
- [ ] Use success admonitions for standards compliance sections

---

*This guide is a living document. Update as new patterns emerge.*
