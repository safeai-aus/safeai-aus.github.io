---
icon: lucide/sliders-horizontal
tags:
  - Government
  - Policy
  - Containment
  - Safety
  - International
---

# AI Safety Policy Approaches

## Overview

This page examines **six policy levers** used by different jurisdictions to address AI safety, based on international practice and research. These levers work together as part of coherent strategies aligned with the [C·A·G·R framework](../framework/index.md).

!!! tip "Key insight: No single policy lever is sufficient"

    Different jurisdictions combine these levers in different ways depending on their regulatory traditions, resource constraints, and institutional strengths. Licensing can be circumvented. Evaluations can miss risks. International agreements can break down.

    Effective strategies layer multiple instruments using **defence in depth** — when one fails, others provide backup protection.

**What this page provides:**

Rather than prescribing what Australia should do, this page offers:

- **International comparison** — how UK, US, EU, Singapore and others use different policy instruments
- **Design considerations** — questions and trade-offs each approach involves
- **Implementation examples** — what these levers look like in practice

**Who this is useful for:**

- **Policy development** — understanding options, trade-offs, and what other jurisdictions have learned
- **Comparative analysis** — seeing how different approaches address similar challenges
- **Public discourse** — informed discussion about AI safety policy choices

---

!!! info "Australia's foundation"

    **Australian AI Safety Institute (AISI)** — Announced November 2025, operational early 2026. Establishes evaluation capability, safety standards development, and participation in the International Network of AI Safety Institutes.

    **National AI Plan** — Released December 2025 with three pillars: Capture opportunity, Spread benefits, Keep Australians safe.

    **How this relates to the levers below:**

    Australia's approach combines mandatory evaluations (AISI capability), transparency (Voluntary Safety Standard), and international coordination (AI Safety Institutes Network). The AISI provides foundation for implementing multiple policy levers as frameworks mature. Different jurisdictions emphasize different levers based on their contexts—the examples below show the range of approaches internationally.

---

## Quick reference: Six policy levers

| **Lever** | **Primary C·A·G·R pillar** | **What it addresses** | **International examples** |
|-----------|---------------------------|------------------------|---------------------------|
| **Licensing & registration** | Containment, Governance | Gate deployment of high-risk systems | EU AI Act, UK proposals, Singapore |
| **Mandatory evaluations** | Containment, Alignment | Test systems for dangerous capabilities | UK AISI, US AISI, Anthropic RSP |
| **Transparency & reporting** | Governance, Resilience | Enable oversight and learning | EU AI Act, Biden Executive Order |
| **Compute governance** | Containment | Track and restrict dangerous training | US export controls, UK proposals |
| **International coordination** | All pillars | Address cross-border risks | AI Safety Institutes Network |
| **Public funding** | All pillars | Build capability and research | UK AISI, US NIST, Singapore AISG |

---

## :lucide-file-check: 1. Licensing and registration of high-risk systems

Requiring providers or deployers of certain AI systems to obtain approval, register, or meet baseline requirements before operation.

??? abstract "How it supports C·A·G·R"

    **Containment:** Prevents inadequately-evaluated systems from deployment; creates checkpoint for assessing dangerous capabilities

    **Governance:** Establishes clear rules about what can be deployed where; enables oversight and enforcement

    **Alignment:** Licensing conditions can require evidence of safety properties and alignment testing

### International practice

**Risk-based tiers:**

- **Low risk:** General-purpose tools, low-stakes uses — minimal or no licensing
- **High risk:** Systems in critical infrastructure, public services, justice, health — registration and baseline requirements
- **Frontier systems:** Potentially dangerous capabilities — stringent pre-deployment approval, ongoing monitoring

**What triggers licensing:**

- Capability thresholds (compute used in training, benchmark performance)
- Use-case (deployment in critical domains)
- Potential impact (scale, autonomy, irreversibility of decisions)

**What licensing typically requires:**

!!! info "Typical licensing requirements for high-risk AI systems"

    - Evidence of safety evaluations and red-teaming
    - Appropriate AI control methods (monitoring, restrictions, shutdown capability)
    - Documentation of capabilities, limitations, failure modes
    - Incident reporting and transparency obligations
    - Ongoing monitoring and re-evaluation triggers

!!! question "Key design considerations"

    - Which systems or uses are high-risk enough to justify licensing?
    - Should licensing be at provider level, deployer level, or both?
    - How can licensing remain flexible enough to keep pace with technology?
    - How to avoid regulatory arbitrage (systems deployed from overseas with no local presence)?
    - How to ensure licensing doesn't become barrier for legitimate research and low-risk innovation?

!!! example "International examples"

    **EU AI Act:** Risk-based tiered approach with prohibitions, high-risk requirements, transparency obligations

    **Singapore:** Model AI Governance Framework—voluntary but increasingly referenced in procurement

    **UK:** Licensing considered for frontier AI models above certain capability thresholds

---

## :lucide-shield-check: 2. Mandatory evaluations and red-teaming

Requiring structured safety evaluations and adversarial testing for AI systems before deployment in critical domains or above certain capability thresholds.

??? abstract "How it supports C·A·G·R"

    **Containment:** Identifies dangerous capabilities before deployment; tests whether AI control methods work

    **Alignment:** Verifies systems behave safely under realistic and adversarial conditions

    **Governance:** Creates evidence base for regulatory decisions; enables accountability

    **Resilience:** Identifies failure modes so institutions can prepare

### International practice

**When evaluations are conducted:**

- Before deployment in designated critical domains (health, energy, finance, justice, national security)
- For frontier systems above compute or capability thresholds
- After significant fine-tuning or modification of already-deployed systems
- Triggered by incidents or near-misses

**What evaluations test:**

- **Dangerous capabilities:** Cyber offence, biological knowledge, deception, autonomous operation, strategic planning
- **Alignment properties:** Refusal of harmful requests, robustness to jailbreaking, behaviour under distributional shift
- **AI control efficacy:** Can the system be monitored effectively? Do usage restrictions work? Can it be shut down?
- **Context-specific performance:** Performance on local data, compliance with local law, cultural appropriateness

**Who conducts evaluations:**

!!! info "Evaluation independence is critical"

    - Independent third parties (not just provider self-assessment)
    - Government evaluation facilities (AI Safety Institutes)
    - Accredited university research groups
    - Mix of approaches depending on sensitivity and capability required

    Self-assessment alone is insufficient for high-stakes systems. Independent evaluation builds trust and catches risks providers may miss or minimize.

!!! question "Key design considerations"

    - In which sectors should mandatory evaluations be introduced first?
    - How to build or access the expertise needed to run credible evaluations?
    - Should evaluation methodologies be public or confidential?
    - How should evaluation results be shared (regulators, public, international partners)?
    - What happens if a system fails evaluation?


!!! example "International examples"

    **UK AI Safety Institute:** World-leading government evaluation capability for frontier models
    **US AI Safety Institute:** Evaluation frameworks and testing within NIST
    **Anthropic's Responsible Scaling Policy:** Company-led approach to evaluating dangerous capabilities
    **OpenAI's Preparedness Framework:** Internal evaluation and safety buffer approach


---

## :lucide-eye: 3. Transparency and reporting requirements

### What it is

Requiring providers and deployers of high-risk AI systems to disclose capabilities, limitations, incidents, and safety practices.

??? abstract "How it supports C·A·G·R"

    **Containment:** Makes dangerous capabilities visible; enables tracking of model weights and compute

    **Alignment:** Creates feedback loops from deployment back to safety research

    **Governance:** Enables regulatory oversight and public accountability

    **Resilience:** Helps institutions understand dependencies and plan for failures


### International practice

**Documentation requirements:**

- System capabilities and intended uses
- Known limitations and failure modes
- High-level description of training data and methods (within commercial and security constraints)
- Safety evaluations conducted and results
- AI control methods in place (monitoring, restrictions)

**Incident reporting:**

!!! example "Learning from aviation: Protected incident reporting"

    - Mandatory reporting of significant failures, harms or near-misses
    - Timely reporting (within hours or days, not months)
    - **Protected reporting** (like aviation safety) to encourage honesty
    - Analysis of why failures occurred, not just what happened
    - Public incident database (where appropriate) for learning

    Aviation's safety culture shows that protected reporting — where honest disclosure isn't punished — enables system-wide learning and prevents repeated failures.

**Ongoing transparency:**

- Regular reporting on deployed system performance
- Updates when systems are significantly modified
- Notification of capability changes or emergent behaviours
- Information sharing with regulators and (where appropriate) research community

!!! question "Key design considerations"

    - What minimum information does each regulator need to do its job?
    - How to balance transparency with commercial confidentiality and security concerns?
    - Should incident reports be public, confidential to regulators, or tiered based on sensitivity?
    - What mechanisms exist for non-compliance?
    - How to handle systems deployed from overseas with no local legal presence?


!!! example "International examples"

    **EU AI Act:** Comprehensive transparency requirements for high-risk systems
    **Biden Executive Order:** Reporting requirements for large training runs
    **Aviation safety reporting:** Protected incident reporting that enables learning without punishment
    **NIST AI Risk Management Framework:** Transparency and documentation guidance


---

## :lucide-cpu: 4. Compute and model weight governance

### What it is

Oversight of the physical infrastructure (advanced AI chips, data centres) and digital assets (trained model weights) used to create and run powerful AI systems.

??? abstract "How it supports C·A·G·R"

    **Containment (primary):** Compute and model weights are tractable intervention points—harder to hide than software

    **Governance:** International coordination on compute enables verification and enforcement

    **Alignment:** Tracking large training runs enables evaluation before deployment


### International practice

**Compute governance:**

- Registration requirements for facilities above certain compute thresholds
- Reporting requirements for very large training runs
- Know-your-customer obligations for compute providers
- International export controls on advanced AI chips
- Monitoring of chip supply chains

**Model weight security:**

!!! warning "Model weight leaks are irreversible"

    - Treat frontier model weights as sensitive assets
    - Requirements for security measures to prevent theft or leaks
    - Incident reporting when weights are compromised
    - **Critical insight:** Once weights leak, containment becomes extremely difficult or impossible

    Unlike software vulnerabilities that can be patched, leaked model weights can't be "unleaked." Prevention is the only effective control.

**Data governance:**

- Safeguards around sensitive datasets used in training or fine-tuning
- Transparency about data sources for high-risk systems
- Restrictions on use of certain data types (e.g., for training dangerous capabilities)

!!! question "Key design considerations"

    - Which compute or data thresholds should trigger additional oversight?
    - How can smaller nations contribute to international compute governance efforts?
    - Should model weight security be mandatory for certain capability levels?
    - What mechanisms exist for detecting or responding to model weight leaks?
    - How to balance security with legitimate research and commercial use?


!!! example "International examples"

    **US export controls:** Restrictions on advanced AI chip exports to certain countries
    **Biden Executive Order:** Reporting requirements for training runs above compute thresholds
    **UK compute governance research:** Centre for the Governance of AI work on verification and monitoring
    **Model weight security incidents:** Leaked weights of various models demonstrating difficulty of containment


---

## :lucide-globe: 5. International coordination and partnerships

### What it is

Working with allies and international bodies to address AI risks that cross borders.

??? abstract "How it supports C·A·G·R"

    **Containment (critical):** Unilateral containment doesn't work—dangerous capabilities flow across borders

    **Governance (critical):** Prevents regulatory race to the bottom; enables verification

    **Alignment:** Sharing evaluation methodologies and research accelerates progress

    **Resilience:** Coordinated incident response; intelligence sharing on threats


### International practice

**Strategic partnerships:**

- Deep cooperation with key allies
- Participation in International Network of AI Safety Institutes
- Bilateral agreements on standards, information sharing, mutual recognition
- Regular engagement at official and technical levels

**Avoiding dangerous capability races:**

!!! warning "Capability races undermine safety"

    - International efforts to prevent racing toward dangerous capabilities
    - Advocacy for safety taking precedence over speed
    - Coordination on compute governance and export controls
    - Monitoring and verification mechanisms

    When countries or companies compete to build more powerful AI first, safety evaluations get rushed or skipped. International coordination helps reduce race dynamics.

**Harmonising standards:**

- Mutual recognition of evaluations and certifications
- Common approaches to risk classification
- Interoperable incident reporting
- Reduced compliance burden for multi-national deployment

**Information sharing:**

- Threat intelligence and vulnerability information
- Learning from each other's regulatory approaches
- Coordinated incident response for cross-border harms
- Balance openness with security (not all safety information should be public)

!!! question "Key design considerations"

    - In which international forums can middle powers have most influence?
    - How to ensure international commitments are implemented domestically?
    - What happens if major powers don't cooperate on safety standards?
    - How to balance international coordination with maintaining regulatory sovereignty?
    - What role for smaller nations and regions in global AI governance?


!!! example "International examples"

    **International Network of AI Safety Institutes:** UK, US, Australia, Singapore and others coordinating on evaluations and standards
    **Bletchley Declaration / Seoul Declaration:** International commitments on frontier AI safety
    **OECD AI Principles:** International standards for responsible AI
    **Five Eyes intelligence sharing:** Model for sharing sensitive AI threat intelligence


---

## :lucide-coins: 6. Public funding and incentives

### What it is

Using government funding and incentives to shape AI development and deployment toward safety and public benefit.

??? abstract "How it supports C·A·G·R"

    **Containment:** Fund development and testing of AI control methods

    **Alignment:** Support safety research, evaluation capacity, interpretability

    **Governance:** Build institutional capability for oversight

    **Resilience:** Fund continuity planning, community preparedness, emergency management


### International practice

**Research funding:**

- Fund technical AI safety research at universities
- Support work on evaluation methodologies and alignment verification
- Encourage interdisciplinary work (technical + social + policy)
- Focus effort on problems specific contexts uniquely enable addressing

**Infrastructure and capability:**

- Fund evaluation facilities and testbeds
- Build compute infrastructure for safety research
- Support centres of excellence in AI safety and governance
- Ensure capability is accessible to government and regulators, not just researchers

**Incentives for industry:**

- Tax incentives or grants for companies meeting high safety standards
- Fast-track approvals for systems that exceed baseline requirements
- Public recognition of safety leaders
- Structures that make safety economically rational

**International collaboration:**

- Fund partnerships between domestic and international researchers
- Support secondments and exchanges
- Participate in international research initiatives
- Share findings openly (where security allows)

!!! question "Key design considerations"

    - Where are the biggest capability gaps today?
    - How can funding be structured to encourage genuinely independent work?
    - Should government fund defensive capabilities (e.g., AI for cybersecurity)?
    - How to ensure research translates into practical policy and institutional capability?
    - What's the right balance between funding university research vs. building in-house government capability?


!!! example "International examples"

    **UK AI Safety Institute:** £100 million+ investment in evaluation capability and research
    **US NIST AI Safety Institute:** Funded evaluation frameworks and testing
    **Singapore AI Verify Foundation:** Government-funded testing tools and governance frameworks
    **EU AI research funding:** Horizon Europe programmes funding AI safety research


---

## How jurisdictions combine policy levers

!!! tip "Key insight: Defence in depth across policy levers"
    No single lever is sufficient. Licensing can be circumvented. Evaluations can miss risks. International agreements can break down. Effective strategies layer multiple instruments so that if one fails, others provide backup protection.

Different jurisdictions combine these levers differently, reflecting their regulatory traditions and institutional strengths:

### Comparative approaches

**UK approach:**

- Strong evaluation capability (UK AISI) without formal licensing framework
- Sectoral regulators use existing authority
- Emphasis on international coordination and standards development

**EU approach:**

- Comprehensive regulatory framework (AI Act) with risk-based tiers
- Mandatory requirements for high-risk systems
- Centralized coordination (AI Office) with distributed enforcement

**US approach:**

- Sector-specific regulation through existing agencies
- Executive order-based transparency requirements
- Federal research funding and standards development (NIST)

**Singapore approach:**

- Voluntary frameworks with strong procurement leverage
- Government-funded testing and governance tools
- Emphasis on industry cooperation and international standards

!!! success "Common elements across successful approaches"

    Despite different emphases, effective jurisdictional approaches share:

    - **Evaluation capability** (whether mandatory or voluntary)
    - **Coordination mechanisms** (avoiding gaps and duplication)
    - **International engagement** (preventing arbitrage)
    - **Flexibility** to adapt as capabilities evolve
    - **Balance** between safety and enabling beneficial innovation

---

## Detailed design considerations

For detailed analysis of design trade-offs, implementation questions, and technical considerations for each policy lever, see the [For Researchers](../for-researchers.md#policy-design-considerations) section.

---

## Sources & Further Reading

??? note "International policy examples and frameworks"

    **UK approach:**

    - [UK AI Safety Institute](https://www.gov.uk/government/organisations/ai-safety-institute) (world-leading evaluation capability)
    - [UK Government AI regulation white paper](https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach) (2023)
    - [Foundation Model Taskforce report](https://www.gov.uk/government/publications/foundation-models-taskforce-report) (2023)

    **US approach:**

    - [Executive Order on Safe, Secure, and Trustworthy AI](https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/) (October 2023)
    - [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
    - [US AI Safety Institute](https://www.nist.gov/aisi)

    **EU approach:**

    - [EU AI Act](https://artificialintelligenceact.eu/) (adopted 2024, risk-based tiered approach)
    - [EU AI Office](https://digital-strategy.ec.europa.eu/en/policies/ai-office)

    **International coordination:**

    - [International Network of AI Safety Institutes](https://www.aisafetyinstitutesnetwork.org/)
    - [OECD AI Principles](https://oecd.ai/en/ai-principles)
    - [Bletchley Declaration](https://www.gov.uk/government/publications/ai-safety-summit-2023-the-bletchley-declaration) (AI Safety Summit 2023)
    - [Seoul Declaration](https://www.gov.uk/government/publications/ai-seoul-summit-2024-joint-leaders-statement) (AI Seoul Summit 2024)

??? note "Technical resources on evaluations and compute governance"

    **Evaluation methodologies:**

    - Shevlane et al. (2023) ["Model evaluation for extreme risks"](https://arxiv.org/abs/2305.15324)
    - UK AISI [Inspect evaluation framework](https://ukgovernmentbeis.github.io/inspect_ai/)
    - Anthropic's [Responsible Scaling Policy](https://www.anthropic.com/index/anthropics-responsible-scaling-policy)
    - OpenAI's [Preparedness Framework](https://openai.com/preparedness/)

    **Compute governance:**

    - Heim (2024) ["Governing Compute: Policy Options"](https://www.governance.ai/research-paper/governing-compute)
    - Shavit (2023) ["What does it take to catch a Chinchilla? Verifying Rules on Large-Scale Neural Network Training via Compute Monitoring"](https://arxiv.org/abs/2303.11341)
    - [Centre for the Governance of AI compute governance research](https://www.governance.ai/research/compute-governance)

    **Red-teaming and adversarial testing:**

    - Ganguli et al. (2022) ["Red Teaming Language Models to Reduce Harms"](https://arxiv.org/abs/2209.07858)
    - Perez et al. (2022) ["Red Teaming Language Models with Language Models"](https://arxiv.org/abs/2202.03286)

??? note "Australian policy context"

    **Current Australian initiatives:**

    - [Australian AI Safety Institute](https://www.industry.gov.au/) (announced November 2025)
    - [National AI Plan](https://www.industry.gov.au/sites/default/files/2025-12/national-ai-plan.pdf) (December 2025)
    - [Australia's AI Ethics Principles](https://www.industry.gov.au/publications/australias-artificial-intelligence-ethics-framework)
    - [Voluntary AI Safety Standard](https://www.industry.gov.au/publications/voluntary-ai-safety-standard) (2024)
    - [ASPI Critical Technology Tracker](https://www.aspi.org.au/report/critical-technology-tracker)

    **Relevant Australian regulatory models:**

    - Australian Prudential Regulation Authority (APRA) operational risk framework
    - Therapeutic Goods Administration (TGA) software as medical device framework
    - Critical Infrastructure Centre's security obligations
    - Australian Cyber Security Centre threat intelligence sharing

    **Regional considerations:**

    - [ASEAN Guide on AI Governance and Ethics](https://asean.org/asean-guide-on-ai-governance-and-ethics/)
    - Pacific Islands Forum digital transformation initiatives

---

