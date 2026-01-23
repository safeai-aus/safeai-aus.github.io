---
icon: lucide/shield-check
tags:
  - Business
  - Guidance
  - Resilience
  - Governance
---

# AGI Preparedness Strategy for Business

---

## Overview

This page addresses **strategic positioning** for advanced and potentially AGI-level AI systems—not routine AI governance (see [SafeAI-Aus](https://www.safeaiaus.org) for operational templates).

**Key question:** As AI systems become more capable and autonomous, how do you capture benefits while avoiding catastrophic dependencies or systemic failures?

---

## Five critical decisions

### 1. Where do you draw red lines?

**Define capability thresholds that trigger different controls:**

!!! warning "Red line indicators"
    - **Autonomous operation** — system makes consequential decisions without human oversight
    - **Critical path deployment** — failure would halt core business functions
    - **Opaque reasoning** — you can't explain why the system decided what it did
    - **Irreversible actions** — system can commit resources, sign contracts, or take actions you can't easily undo
    - **Cross-sector dependencies** — same vendor/model family deployed across your entire industry

**Action:** For each red line, define **required controls** before deployment:
- Independent evaluation by someone not incentivized to deploy quickly
- Demonstrated shutdown and rollback capability
- Manual fallback procedures tested regularly
- Board-level approval for high-risk deployments

**Example thresholds:**

| Capability level | Approval required | Controls mandatory |
|-----------------|-------------------|-------------------|
| Productivity assistant | Manager | Basic logging |
| Customer-facing decisions | Executive + legal review | Human review, audit trail |
| Critical infrastructure control | Board + independent evaluation | Shutdown capability, manual fallback, quarterly testing |
| Autonomous strategic decisions | **Don't deploy** | No adequate controls exist yet |

---

### 2. How dependent are you on vendors you can't replace?

**Map your dependencies:**

- Which AI systems are critical to operations?
- Can you switch vendors within 90 days? 30 days? Ever?
- If your primary vendor changed terms, raised prices 10x, or was sanctioned—what happens?
- Are you and your competitors all using the same model family? (correlated failure risk)

!!! danger "Dependency warning signs"
    - Only one vendor can meet your requirements
    - Switching costs exceed 12 months of revenue
    - Your data/workflows are locked into vendor's ecosystem
    - Competitors use the same vendor (sector-wide single point of failure)
    - Vendor is subject to foreign government influence or export controls

**Strategies to reduce dependency:**

=== "Vendor diversification"
    - Use multiple vendors for redundancy in critical functions
    - Avoid architectural lock-in (standardise interfaces)
    - Maintain evaluation capability for alternatives

=== "Local deployment options"
    - Open-source models you can run internally
    - On-premise deployment for sensitive/critical functions
    - See [Open-Source Alternatives](open-source-alternatives.md)

=== "Manual fallback capability"
    - Maintain ability to operate without AI
    - Train staff on manual procedures
    - Test fallback quarterly, not just when systems fail

---

### 3. Can you maintain operations if AI fails?

**Scenario: Your primary AI vendor has a global outage, security breach, or regulatory ban. How long until critical operations halt?**

**Resilience checklist:**

- [ ] **Manual procedures documented** for all AI-dependent critical functions
- [ ] **Staff trained and practiced** on manual operations (not just documented)
- [ ] **Tested within last quarter** — actual drill, not just tabletop
- [ ] **Fallback systems available** — older tools, alternative vendors, manual processes
- [ ] **Data accessible** — not locked in vendor's format or infrastructure
- [ ] **Decision authority clear** — who can authorize emergency procedures?

**Testing your resilience:**

!!! tip "Quarterly resilience drill"
    1. Pick one AI-dependent critical function
    2. Simulate total AI system failure (turn it off)
    3. Operate manually for 4 hours
    4. Document: What broke? What took longer? What couldn't be done?
    5. Update procedures and training based on learnings

---

### 4. What happens when failures cascade across your sector?

**Advanced AI creates correlated failure risk:**

- Many organisations use the same model families (GPT-4, Claude, Gemini)
- Similar architectures trained on similar data can fail in similar ways
- A single vulnerability, regulatory action, or geopolitical event can affect entire sectors simultaneously

**Scenario planning questions:**

| Scenario | Your response |
|----------|---------------|
| **Alignment failure** — a widely-deployed model exhibits unexpected harmful behaviour under novel conditions | Can you shut down immediately? Do you know which systems use it? |
| **Vendor exit** — primary AI vendor faces sanctions, security breach, or exits Australian market | Can you switch vendors in <30 days? Are alternatives available? |
| **Regulatory intervention** — government bans or restricts certain AI capabilities | Are you compliant with restrictions? Can you operate without those capabilities? |
| **Supply chain disruption** — export controls or geopolitical tensions cut off access to compute/models | Do you have local compute? Can you run models on-premise? |

**Industry coordination:**

- Share threat intelligence with industry bodies (anonymized failure data)
- Coordinate on vendor diversification to avoid sector-wide single points of failure
- Participate in sector-wide resilience exercises
- Support development of local alternatives for critical functions

---

### 5. How do you position for different AGI futures?

**You're making strategic bets whether you realise it or not.**

??? abstract "Four futures, four strategies"

    **Future 1: Gradual capability growth, strong governance**

    AI capabilities improve steadily, effective regulations emerge, alignment remains manageable.

    *Strategy:* Adopt early but carefully. Build evaluation capability. Engage with regulators. Benefit from productivity gains while maintaining safety standards.

    **Future 2: Rapid capability growth, weak governance**

    AI capabilities advance faster than governance. First-movers gain decisive advantages. Safety takes backseat to competition.

    *Strategy:* Don't get locked into unsafe systems even under competitive pressure. Maintain manual capabilities. Prepare for regulatory catch-up and potential forced rollbacks.

    **Future 3: Concentrated power, vendor dominance**

    2-3 vendors control frontier AI. They set terms. Regulators struggle to oversee them. Lock-in is severe.

    *Strategy:* Minimize dependencies now. Invest in local alternatives. Coordinate with peers. Maintain sovereignty over critical functions.

    **Future 4: Widespread disruption or failure**

    Major AI incidents cause harm. Public backlash. Heavy regulation or bans. Economic disruption from rapid automation.

    *Strategy:* Resilience. Manual fallbacks. Don't become dependent on systems that might be banned or fail catastrophically.

**Hedging across futures:**

Build capabilities that work across multiple scenarios:
- **Evaluation capability** — useful in all futures
- **Vendor independence** — protects against concentration and failures
- **Manual fallbacks** — essential if systems fail or are banned
- **Local deployment options** — maintains sovereignty regardless of geopolitical shifts

---

## Integration with C·A·G·R

These strategic decisions map to the framework:

**:lucide-shield-ban: Containment** — Red lines prevent deploying inadequately-evaluated systems in critical roles

**:lucide-target: Alignment** — Testing and monitoring catch misaligned behaviour before catastrophic harm

**:lucide-scale: Governance** — Clear approval processes, vendor management, regulatory engagement

**:lucide-shield: Resilience** — Manual fallbacks, vendor diversification, sector coordination

[See full framework →](../framework/index.md)

---

## What to do now

**This month:**

- Identify one senior executive accountable for AGI risk (not just "AI" generally)
- List all AI systems in critical functions: vendor, capability level, failure impact
- For your highest-risk system: can you shut it down and operate manually?

**This quarter:**

- Define your red lines — what capabilities/autonomy require board approval?
- Run one resilience drill — simulate AI system failure, operate manually
- Review vendor dependencies — where are you locked in? Where can you diversify?

**This year:**

- Conduct tabletop exercises using [AGI scenarios](../agi-scenarios/index.md) relevant to your sector
- Build or acquire independent evaluation capability (don't just trust vendor claims)
- Develop local deployment options for at least one critical AI function
- Engage with industry bodies and peers on shared AI risk concerns

---

## Related resources

**On this site:**

- [Open-Source Alternatives](open-source-alternatives.md) — reducing vendor lock-in
- [AGI Scenarios](../agi-scenarios/index.md) — use for strategic planning exercises

**Operational AI governance:**

- [SafeAI-Aus](https://www.safeaiaus.org) — policies, risk registers, vendor evaluation checklists
- [Australian Voluntary AI Safety Standard](https://www.industry.gov.au/publications/voluntary-ai-safety-standard) — baseline requirements

---
