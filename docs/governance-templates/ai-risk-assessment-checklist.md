---
title: "AI Risk Assessment Checklist"
description: "Download our free AI risk assessment checklist for Australian businesses. Step-by-step guide to identify, evaluate, and mitigate AI risks before deployment. Ensure compliance with safety standards and reduce legal risks."
keywords: "AI risk assessment, AI risk checklist, AI risk management, AI safety assessment, AI risk mitigation, Australian AI safety, AI risk evaluation"
author: "SafeAI-Aus"
robots: "index, follow"
og_title: "AI Risk Assessment Checklist"
og_description: "Download our free AI risk assessment checklist for Australian businesses. Step-by-step guide to identify, evaluate, and mitigate AI risks before deployment."
og_type: "article"
og_url: "https://safeaiaus.org/governance-templates/ai-risk-assessment-checklist/"
og_image: "assets/safeaiaus-logo-600px.png"
twitter_card: "summary_large_image"
twitter_title: "AI Risk Assessment Checklist"
twitter_description: "Download our free AI risk assessment checklist for Australian businesses. Step-by-step guide to identify, evaluate, and mitigate AI risks before deployment."
---

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

This checklist aligns with **Australian AI Safety Standard (VAISS)**, **ISO/IEC 42001:2023**, and **NIST AI Risk Management Framework**.

!!! info "When to Use This Checklist"
    - ✅ **Before starting** an AI project (planning and design stage)
    - ✅ **Before deploying** a new AI system into live use
    - ✅ **During regular reviews** of existing AI systems
    - ✅ **As part of compliance checks** within your risk management framework

---

## 1️⃣ Project Overview & Purpose

- [ ] Have you clearly described what the AI system will do?
- [ ] Does it provide a clear benefit (e.g. efficiency, customer service, staff support)?
- [ ] Is the benefit aligned with your organisation's goals?

*Aligns with: Guardrail 1; Australian AI Ethics Principle: Beneficence*

---

## 2️⃣ Risk Classification

- [ ] If the AI fails or gives wrong results, could it cause harm (e.g. financial, reputational, safety)?
- [ ] Based on that, is the **project or system** **Low / Medium / High** impact?

**Examples by risk level:**

| Risk Level | Example Use Cases |
|------------|-------------------|
| 🟢 **Low** | Website chatbot, content summarization, internal research |
| 🟡 **Medium** | Staff rostering, marketing automation, customer support triage |
| 🔴 **High** | Automated loan approvals, hiring decisions, medical diagnosis |

**Additional considerations for risk level:**

- [ ] Number of users potentially affected: ___
- [ ] Financial exposure if system fails: $ ___
- [ ] Regulatory compliance implications assessed
- [ ] Reputational impact evaluated

*Aligns with: Guardrail 3; EU AI Act classification (adapted)*

---

## 3️⃣ Data Governance & Privacy/IP

- [ ] Does the system use personal data? If so, are you complying with the **Privacy Act 1988 (APPs)**?
- [ ] Do you know who owns the training data and outputs (IP rights)?
- [ ] Are you keeping only the data you really need (data minimisation)?
- [ ] Can you track where the data came from (provenance)?

*Aligns with: Privacy Act 1988 (APPs); Guardrails 4 & 7; ISO/IEC 23894*

---

## 4️⃣ Security & Reliability

- [ ] Have you taken basic cybersecurity steps (e.g. strong passwords, access controls, software updates)?
- [ ] Is the system resilient (will it keep working under normal load)?
- [ ] Do you have a backup or manual process if the AI goes offline or makes repeated mistakes?

*Aligns with: Guardrail 5; ACSC Essential Eight*

---

## 5️⃣ Human Oversight & Accountability

- [ ] Is a specific person responsible for this AI system?
- [ ] Have you identified **human-in-the-loop checkpoints** where oversight is required?
- [ ] Can staff override or contest AI decisions if needed?
- [ ] Can customers and staff raise concerns easily?

*Aligns with: Guardrail 8; Australian AI Ethics Principle: Accountability*

---

## 6️⃣ Testing & Evaluation

- [ ] Have you tested the AI on real-world examples before going live?
- [ ] Have you checked for bias, errors, or poor accuracy?
- [ ] Have you recorded your testing results (even in a simple log or spreadsheet)?

*Aligns with: Guardrail 6; NIST AI Risk Management Framework*

---

## 7️⃣ Transparency & Explainability

- [ ] Can you explain in plain English how the system works and why it produces certain results?
- [ ] Have you told staff or customers when they are interacting with AI (not a human)?
- [ ] Are user instructions or limitations clearly documented?

*Aligns with: Guardrail 9; OECD AI Principles*

---

## 8️⃣ Ongoing Monitoring & Review

- [ ] How often will you review the system? (e.g., monthly, quarterly)
- [ ] Do you have a way to track problems or incidents?
- [ ] Will you retrain or update the system when data or business needs change?

*Aligns with: Guardrail 10; ISO/IEC 42001*

---

## 9️⃣ Quantitative Risk Scoring

**Calculate your risk score:**

- [ ] **Probability** of risk occurring (1–5 scale): ___
- [ ] **Impact** if risk occurs (1–5 scale): ___
- [ ] **Risk Score** (Probability × Impact): ___
- [ ] Risk tolerance threshold defined: ___
- [ ] Mitigation reduces score to acceptable level: Yes/No

---

## 🔟 Dependencies & Supply Chain

- [ ] Third-party dependencies identified and documented
- [ ] Vendor risk assessments completed
- [ ] Fallback options available if vendor fails
- [ ] Model degradation monitoring plan in place
- [ ] Update and patching schedule defined

---

## Risk Assessment Framework

### Impact Levels

| Level | Score | Description | Example |
|-------|:-----:|-------------|---------|
| 🟢 Low | 1 | Minimal impact on operations | Typo in draft email |
| 🟡 Medium | 2 | Moderate impact, manageable consequences | Delayed customer response |
| 🟠 High | 3 | Significant impact, requires immediate attention | Incorrect pricing |
| 🔴 Critical | 4 | Major impact, business disruption | Service outage |
| ⚫ Severe | 5 | Catastrophic impact, severe consequences | Data breach, safety incident |

### Likelihood Levels

| Level | Score | Description |
|-------|:-----:|-------------|
| Rare | 1 | Very unlikely to occur |
| Unlikely | 2 | Low probability |
| Possible | 3 | Moderate probability |
| Likely | 4 | High probability |
| Almost Certain | 5 | Very high probability |

### Risk Score Matrix

| Impact → | Low (1) | Medium (2) | High (3) | Critical (4) | Severe (5) |
|----------|:-------:|:----------:|:--------:|:------------:|:----------:|
| **Likelihood ↓** | | | | | |
| Almost Certain (5) | 5 | 10 | 15 | 20 | 25 |
| Likely (4) | 4 | 8 | 12 | 16 | 20 |
| Possible (3) | 3 | 6 | 9 | 12 | 15 |
| Unlikely (2) | 2 | 4 | 6 | 8 | 10 |
| Rare (1) | 1 | 2 | 3 | 4 | 5 |

### Risk Score Interpretation

!!! success "Low Risk (1–5)"
    **Status:** Acceptable risk level
    **Action:** Document and proceed with standard monitoring

!!! info "Medium Risk (6–10)"
    **Status:** Monitor and manage
    **Action:** Implement controls, regular reviews

!!! warning "High Risk (11–15)"
    **Status:** Requires mitigation
    **Action:** Develop mitigation plan, obtain approval before proceeding

!!! danger "Critical Risk (16–25)"
    **Status:** Immediate action required
    **Action:** Do not proceed until risk is reduced, executive sign-off required

---

## Alignment with Australian Standards

This checklist implements key requirements from Australian AI frameworks:

!!! success "Standards Compliance"
    === "AI6 Essential Practices"
        ✓ **Measure and manage risks** — Entire checklist provides structured risk measurement (Section 9)

        ✓ **Understand impacts and plan accordingly** — Section 2 (Risk Classification) evaluates potential severity

        ✓ **Maintain human control** — Section 5 checks for human-in-the-loop mechanisms

    === "Voluntary AI Safety Standard (10 Guardrails)"
        ✓ **Guardrail 2 – Risk management** — Primary implementation tool for identifying, assessing, and mitigating risks

        ✓ **Guardrail 5 – Human control** — Section 5 addresses oversight and intervention requirements

        ✓ **Guardrail 6 – Testing & assurance** — Section 6 prompts for bias testing and real-world validation

        ✓ **Guardrail 3 – Data protection** — Sections 3-4 ensure privacy and security safeguards

---

## References & Standards

This checklist is guided by:

- **Australian AI Ethics Principles** (Department of Industry, Science & Resources)
- **Australian Voluntary AI Safety Standard (2024)** – 10 Guardrails
- **Privacy Act 1988 (Cth)** – Australian Privacy Principles (APPs)
- **ACSC Essential Eight** – Cybersecurity baseline
- **ISO/IEC 42001:2023** – AI Management System standard
- **ISO/IEC 23894:2023** – AI Risk Management
- **NIST AI Risk Management Framework 1.0**

---

## Next Steps

**Where to go from here:**

- 📊 **Track ongoing risks:** [AI Risk Register](ai-risk-register.md)
- 🏭 **Industry-specific examples:** [AI Industry-Specific Risks](ai-risks-by-industry.md)
- 🚨 **Prepare for incidents:** [AI Incident Report Form](ai-incident-report-form.md)

**Related templates:**

- 📋 [AI Readiness Checklist](ai-readiness-checklist.md) — Assess organisational preparedness
- 📝 [AI Use Policy](ai-use-policy.md) — Establish governance framework
- 🗺️ [AI Implementation Roadmap](ai-implementation-roadmap.md) — Plan deployment

---

??? note "Disclaimer & Licence"
    **Disclaimer:** This template provides best practice guidance for Australian organisations. SafeAI-Aus has exercised care in preparation but does not guarantee accuracy, reliability, or completeness. Organisations should adapt to their specific context and may wish to seek advice from legal, governance, or compliance professionals before formal adoption.

    **Licence:** Licensed under [Creative Commons Attribution 4.0 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). You are free to copy, adapt, and redistribute with attribution: *"Source: SafeAI-Aus (safeaiaus.org)"*

---

<!-- JSON-LD: Article schema for crawlers and LLMs -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AI Risk Assessment Checklist for Australian Businesses",
  "description": "Download our free AI risk assessment checklist for Australian businesses. Step-by-step guide to identify, evaluate, and mitigate AI risks before deployment. Ensure compliance with safety standards and reduce legal risks.",
  "author": {
    "@type": "Organization",
    "name": "SafeAI-Aus",
    "url": "https://safeaiaus.org"
  },
  "publisher": {
    "@type": "Organization",
    "name": "SafeAI-Aus",
    "url": "https://safeaiaus.org",
    "logo": {
      "@type": "ImageObject",
      "url": "https://safeaiaus.org/assets/safeaiaus-logo-600px.png"
    }
  },
  "datePublished": "2025-01-27",
  "dateModified": "2025-01-27",
  "inLanguage": "en-AU",
  "url": "https://safeaiaus.org/governance-templates/ai-risk-assessment-checklist/",
  "mainEntityOfPage": "https://safeaiaus.org/governance-templates/ai-risk-assessment-checklist/",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "isPartOf": {
    "@type": "WebSite",
    "name": "SafeAI-Aus",
    "url": "https://safeaiaus.org"
  },
  "about": [
    {
      "@type": "Thing",
      "name": "AI Risk Assessment",
      "description": "Systematic evaluation of risks associated with AI system deployment"
    },
    {
      "@type": "Thing",
      "name": "AI Safety",
      "description": "Practices and standards for safe AI implementation"
    },
    {
      "@type": "Thing",
      "name": "Australian AI Standards",
      "description": "Compliance with Australian AI safety and governance requirements"
    }
  ],
  "keywords": "AI risk assessment, AI risk checklist, AI risk management, AI safety assessment, AI risk mitigation, Australian AI safety, AI risk evaluation",
  "articleSection": "Governance Templates",
  "wordCount": "2200"
}
</script>
