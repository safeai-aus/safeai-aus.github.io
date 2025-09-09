---
layout: page
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
canonical_url: "https://safeaiaus.org/governance-templates/ai-risk-assessment-checklist/"
---

# AI Risk Assessment Checklist

This checklist helps Australian businesses consider key risks when planning, developing, or using AI systems. It aligns with national guardrails, ethical principles, and relevant international standards.  

It can be used both as a **project planning tool** (to assess risks before deployment) and as part of an organisation’s **risk management framework** (for routine compliance checks and ongoing oversight).  

---

## How to Use This Checklist
**When to use:**  

  - Before starting an AI project (planning and design stage).  
  - Before deploying a new AI system into live use.  
  - During regular reviews of an existing AI system.  
  - As part of routine compliance checks within your organisation’s risk management framework.  

**How to use:**  

  - Work through each section and record your responses.  
  - Treat the depth of responses as proportional to the impact: higher-risk projects need more detailed consideration.  
  - Use plain language—responses don’t need to be long, but they should show how the risk has been thought about and addressed.  
  - Keep the completed checklist as part of your project records.  

---

## 1. Project Overview & Purpose
- [ ] Have you clearly described what the AI system will do?  
- [ ] Does it provide a clear benefit (e.g. efficiency, customer service, staff support)?  
- [ ] Is the benefit aligned with your organisation’s goals?  

*Sources: Guardrail 1; Australian AI Ethics Principle: Beneficence*  

---

## 2. Risk Classification
- [ ] If the AI fails or gives wrong results, could it cause harm (e.g. financial, reputational, safety)?  
- [ ] Based on that, is the **project or system** **Low / Medium / High** impact?  
*(For example: website chatbot = low risk; staff rostering = medium risk; automated loan approvals = high risk)*  

Additional considerations for risk level:  
- [ ] Number of users potentially affected: ___  
- [ ] Financial exposure if system fails: $___  
- [ ] Regulatory compliance implications assessed  
- [ ] Reputational impact evaluated  

*Sources: Guardrail 3; EU AI Act classification (adapted)*  

---

## 3. Data Governance & Privacy/IP
- [ ] Does the system use personal data? If so, are you complying with the **Privacy Act 1988 (APPs)**?  
- [ ] Do you know who owns the training data and outputs (IP rights)?  
- [ ] Are you keeping only the data you really need (data minimisation)?  
- [ ] Can you track where the data came from (provenance)?  

*Sources: Privacy Act 1988 (APPs); Guardrails 4 & 7; ISO/IEC 23894*  

---

## 4. Security & Reliability
- [ ] Have you taken basic cybersecurity steps (e.g. strong passwords, access controls, software updates)?  
- [ ] Is the system resilient (will it keep working under normal load)?  
- [ ] Do you have a backup or manual process if the AI goes offline or makes repeated mistakes?  

*Sources: Guardrail 5; ACSC Essential Eight*  

---

## 5. Human Oversight & Accountability
- [ ] Is a specific person responsible for this AI system?  
- [ ] Have you identified **human-in-the-loop checkpoints** where oversight is required?  
- [ ] Can staff override or contest AI decisions if needed?  
- [ ] Can customers and staff raise concerns easily?  

*Sources: Guardrail 8; Australian AI Ethics Principle: Accountability*  

---

## 6. Testing & Evaluation
- [ ] Have you tested the AI on real-world examples before going live?  
- [ ] Have you checked for bias, errors, or poor accuracy?  
- [ ] Have you recorded your testing results (even in a simple log or spreadsheet)?  

*Sources: Guardrail 6; NIST AI Risk Management Framework*  

---

## 7. Transparency & Explainability
- [ ] Can you explain in plain English how the system works and why it produces certain results?  
- [ ] Have you told staff or customers when they are interacting with AI (not a human)?  
- [ ] Are user instructions or limitations clearly documented?  

*Sources: Guardrail 9; OECD AI Principles*  

---

## 8. Ongoing Monitoring & Review
- [ ] How often will you review the system? (e.g., monthly, quarterly)  
- [ ] Do you have a way to track problems or incidents?  
- [ ] Will you retrain or update the system when data or business needs change?  

*Sources: Guardrail 10; ISO/IEC 42001*  

---

## 9. Quantitative Risk Scoring
- [ ] Probability of risk occurring (1–5 scale): ___  
- [ ] Impact if risk occurs (1–5 scale): ___  
- [ ] Risk Score (Probability × Impact): ___  
- [ ] Risk tolerance threshold defined: ___  
- [ ] Mitigation reduces score to acceptable level: Yes/No  

---

## 10. Dependencies & Supply Chain
- [ ] Third-party dependencies identified and documented  
- [ ] Vendor risk assessments completed  
- [ ] Fallback options available if vendor fails  
- [ ] Model degradation monitoring plan in place  
- [ ] Update and patching schedule defined  

---

## Risk Assessment Framework

### Risk Matrix Guide
#### Impact Levels
- **Low (1)**: Minimal impact on operations
- **Medium (2)**: Moderate impact, manageable consequences  
- **High (3)**: Significant impact, requires immediate attention
- **Critical (4)**: Major impact, business disruption
- **Severe (5)**: Catastrophic impact, severe consequences

#### Likelihood Levels
- **Rare (1)**: Very unlikely to occur
- **Unlikely (2)**: Low probability
- **Possible (3)**: Moderate probability
- **Likely (4)**: High probability
- **Almost Certain (5)**: Very high probability

#### Risk Score Calculation
| Impact → | Low (1) | Medium (2) | High (3) | Critical (4) | Severe (5) |
|----------|---------|------------|----------|--------------|------------|
| **Likelihood ↓** | | | | | |
| Almost Certain (5) | 5 | 10 | 15 | 20 | 25 |
| Likely (4) | 4 | 8 | 12 | 16 | 20 |
| Possible (3) | 3 | 6 | 9 | 12 | 15 |
| Unlikely (2) | 2 | 4 | 6 | 8 | 10 |
| Rare (1) | 1 | 2 | 3 | 4 | 5 |

#### Risk Score Interpretation
- **1–5 (Low)**: Acceptable risk level
- **6–10 (Medium)**: Monitor and manage
- **11–15 (High)**: Requires mitigation
- **16–25 (Critical)**: Immediate action required  

---

## References & Notes
- **Australian AI Ethics Principles** (Department of Industry, Science & Resources)  
- **Australian AI Guardrails (2023, updated 2024)**  
- **Privacy Act 1988 (Cth)**  
- **ACSC Essential Eight** (cybersecurity baseline)  
- **ISO/IEC 42001:2023** – AI Management System standard  
- **NIST AI Risk Management Framework**  

---
## Next Steps
**Need to prepare for AI incidents?** → [AI Incident Report Form](ai-incident-report-form.md)

---

# Template Disclaimer & Licence

## Disclaimer
The purpose of this template is to provide best practice guidance on implementing safe and responsible AI governance in Australian organisations.   

SafeAI-Aus has exercised care and skill in the preparation of this material. However, SafeAI-Aus does not guarantee the accuracy, reliability, or completeness of the information contained. 

The content reflects best practice principles but is intended as a starting point only.  Organisations should adapt this template to their specific context and may wish to seek advice from legal counsel, governance, risk, or compliance officers before formal adoption.  

This publication does not indicate any commitment by SafeAI-Aus to a particular course of action. SafeAI-Aus accepts no responsibility or liability for any loss, damage, or costs incurred as a result of the information contained in this template.  

---

## Licence
This template is made available under the **Creative Commons Attribution 4.0 International (CC BY 4.0)** licence.  

You are free to:  

- **Share** — copy and redistribute the material in any medium or format.  
- **Adapt** — remix, transform, and build upon the material for any purpose, even commercially.  

Under the following terms:  

- **Attribution** — You must give appropriate credit, provide a link to the licence, and indicate if changes were made.  

**Attribution statement for reuse:**  
“This template was developed by SafeAI-Aus and is licensed under CC BY 4.0. Source: [SafeAI-Aus](https://safeaiaus.org/).”  

Full licence text: [https://creativecommons.org/licenses/by/4.0/](https://creativecommons.org/licenses/by/4.0/)  

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
