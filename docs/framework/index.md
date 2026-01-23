---
icon: lucide/shield-alert
tags:
  - Framework
  - Containment
  - Alignment
  - Governance
  - Resilience
---

# Containment · Alignment · Governance · Resilience Framework

## What this page is for

The **Containment · Alignment · Governance · Resilience (C·A·G·R)** framework helps Australian organisations manage advanced AI and AGI risks using familiar risk management principles.

If you work in government, business or community organisations and need a practical way to think about AI safety, this framework translates technical AI safety concepts into language and structures you already use.

After reading this page, you'll understand:

- how C·A·G·R maps AI risks onto standard risk management
- what each of the four pillars means in practice
- how the layers of defence-in-depth work
- where to go for detailed guidance on each pillar

---

## Why this framework matters even if AGI is perfectly safe

!!! tip "Governance challenges exist regardless of safety outcomes"

    **Even if AGI is perfectly aligned and technically safe**, Australia still faces profound challenges:

    - **Power concentration:** Who controls transformative technology? A handful of companies or countries with safe AGI still wield unprecedented influence
    - **Economic transformation:** How are productivity gains distributed? Safe AGI that automates knowledge work still transforms employment and meaning
    - **Democratic governance:** Who decides how AGI is used? Technical safety doesn't ensure democratic input or community values
    - **Resilience:** Dependencies on AI systems create vulnerability to disruption, even when systems work as intended
    - **Information ecosystems:** Safe, aligned AI can still be used for sophisticated persuasion, propaganda, and information control

    **The C·A·G·R framework addresses both catastrophic safety failures AND transformation governance challenges.** Containment and Alignment prevent dangerous systems. Governance and Resilience shape beneficial transformation whether systems are safe or not.

    Technical safety is necessary but not sufficient for beneficial outcomes.

---

## Time as a Strategic Resource

Strategies for AGI are often evaluated on technical merit, but they should also be evaluated on how they manage **time**.

We are in a race between the pace of capability development and the pace of safety research/governance.

*   **Buying Time:** Containment measures (like compute thresholds) slow down dangerous deployments, buying time for alignment research to catch up.
*   **Using Time:** Resilience measures (like manual fallbacks) allow society to withstand failures, giving us time to recover and fix systems without total collapse.
*   **Shaping Time:** Governance accelerates safety adoption (through standards) while braking reckless acceleration.

**Strategic principle:** Any policy that does not explicitly "buy," "use," or "shape" time in our favour is likely insufficient for handling exponential technologies.

---

## C·A·G·R in action: a worked example

**Consider an AI system used in public hospital triage:**

**Containment:** Was this system properly evaluated before deployment? Are there licensing requirements for high-risk medical AI? Can the system be monitored in real-time for dangerous behaviours? Are there technical controls preventing the system from making unsupervised critical decisions?

**Alignment:** Is the system actually optimising for patient outcomes, or for bed occupancy rates? Does it treat different patient groups fairly? Has it been tested under realistic conditions, including edge cases? Can clinicians understand why it makes particular recommendations?

**Governance:** What regulatory requirements exist for this deployment? Who approved it? Who can audit the system's decisions? What happens when it makes errors — is there clear liability? Are there mandatory incident reports? Can patients appeal AI-influenced decisions?

**Resilience:** If the system fails or is compromised, can hospitals revert to manual triage immediately? Are staff trained and practiced in manual triage? Are contingencies tested regularly? Do emergency plans account for AI system failures during crises like pandemics or mass casualty events?

This is C·A·G·R applied to a real Australian context. The same questions apply across domains — from critical infrastructure to financial services to public administration.

---

## How C·A·G·R relates to risk management you already know

Australia already knows how to manage risk. C·A·G·R maps AI safety onto that familiar territory.

**Standard risk management asks:**

- How do we prevent dangerous things from happening? (prevention)
- How do we design things to work safely? (safety by design)
- How do we regulate to prevent harm? (safety by compliance)
- How do we cope when things fail anyway? (safety by resilience)

**C·A·G·R asks the same questions for AI:**

- **Containment** = prevention: can we stop dangerous systems from being built or deployed?
- **Alignment** = safety by design: are systems behaving as intended?
- **Governance** = safety by compliance: do we have rules and oversight that work?
- **Resilience** = safety by resilience: can we withstand failures and recover?

**What makes AI different:**

C·A·G·R isn't just standard risk management with new labels. AI systems have some properties that stretch traditional approaches:

- **Opacity:** Even experts often can't fully explain why systems make particular decisions
- **Emergent behaviour:** Capabilities and failures can appear that weren't present during testing
- **Speed and scale:** AI-enabled actions can outpace human oversight and decision-making
- **Compounding effects:** AI systems interact with each other in ways that are hard to predict
- **Power concentration:** A small number of global actors control key capabilities
- **Dual-use:** The same capabilities that enable beneficial uses also enable harmful ones

These properties mean we need all four pillars working together, not just one or two.

---

## The four pillars of C·A·G·R

### Containment: Can we prevent dangerous systems from being built or deployed?

Containment is about stopping dangerous AI systems before they cause harm. This includes preventing dangerous training runs, restricting deployment of high-risk systems, and maintaining technical controls over powerful AI.

Containment includes:

- Compute governance: oversight of chips, data centres and large training runs
- Export controls and supply chain security for advanced hardware
- AI control methods: monitoring, restrictions and containment protocols
- Licensing and safety evaluations before deployment

**For Australia:** We have limited leverage over frontier AI training (mostly happening overseas), but significant influence through compute governance, deployment licensing, and procurement requirements.

[Read more: Containment in depth](containment.md)

### Alignment: Are systems trying to do the right thing?

Alignment is about the behaviour and objectives of AI systems. We care that systems:

- Behave predictably and safely across a wide range of conditions
- Don't pursue goals that diverge from human intent, law or public interest
- Resist being repurposed or "jailbroken" for harm
- Remain safe and controllable as capabilities scale

**For Australia:** We mostly import advanced models, so alignment means being able to evaluate and constrain their behaviour in our context, not just trusting provider claims.

[Read more: Alignment in depth](alignment.md)

### Governance: Do we have rules and institutions that work?

Governance is about laws, institutions and coordination that shape how AI is developed and deployed. Even well-aligned systems can cause harm if used at inappropriate scale or in contexts where errors are unacceptable.

Governance includes:

- Regulatory frameworks and standards appropriate to risk levels
- Clear responsibilities across regulators and public bodies
- International coordination to avoid dangerous capability races
- Transparency, reporting and accountability mechanisms

**For Australia:** Governance is where we have real sovereignty — our laws apply to systems deployed here, even if trained overseas. We can also influence international coordination through strategic partnerships.

[Read more: Governance in depth](governance.md)

### Resilience: Can we cope when things go wrong?

Resilience is the capability to detect, respond to, and recover from AI-related harms while maintaining essential functions and social cohesion.

Even with good containment, alignment and governance, systems can fail in unexpected ways, malicious actors can exploit capabilities, and compounding events can overwhelm normal safeguards.

Resilience spans:

- National and institutional continuity planning
- Biosecurity and cybersecurity hardening
- Detection, response and recovery capabilities
- Community and household resilience
- Social cohesion and trusted communication

**For Australia:** Resilience is what we must be able to do regardless of what happens overseas or in systems we don't control.

[Read more: Resilience in depth](resilience.md)

---

## Why all four pillars matter

**Good alignment without containment or governance** invites risky deployments. If systems behave well in testing but there are no restrictions on dangerous capabilities and no rules about deployment, they will be used in unsafe ways.

**Strong governance without containment** means you're regulating systems whose dangerous capabilities have already been created and may escape control.

**Containment and governance without resilience** leaves society brittle. If we depend entirely on preventing all failures, we're unprepared when things go wrong anyway — and they will.

**Resilience without containment, alignment or governance** means constantly fighting fires that better prevention and design could have avoided.

Effective strategy requires all four pillars, calibrated to Australia's actual position and capabilities.

---

## Defence in depth: three layers

C·A·G·R implements a **defence-in-depth model** with three layers. Each layer assumes the ones above it may fail. All four pillars span across these layers.

### Layer 1: Prevent dangerous AI training
*Stopping dangerous systems from being created in the first place*

This is primarily the domain of **Containment**, but involves all pillars:

- Compute governance: oversight of chips, data centres and training runs
- Export controls and supply chain security
- International cooperation on frontier model safety standards
- Research capacity for evaluating training risks

**Australia's role:** Limited direct leverage over overseas AI labs, but significant influence through compute supply chains, international partnerships, and setting expectations for systems deployed here.

### Layer 2: Constrain dangerous capabilities and deployments
*If systems are trained, ensure they're safe and properly controlled*

This layer integrates **Containment**, **Alignment**, and **Governance**:

- Safety evaluations and licensing before deployment
- AI control methods: monitoring, restrictions, containment protocols
- Regulatory requirements appropriate to risk levels
- Access controls and use policies
- Ongoing monitoring and incident reporting

**Australia's role:** Strong sovereignty here. Our laws govern deployment, procurement sets standards, and we can require evidence of safety properties.

### Layer 3: Withstand dangerous AI actions and failures
*If dangerous systems exist and escape control, maintain essential functions*

This is the domain of **Resilience**, supported by **Governance**:

- National and sectoral continuity plans for AI-related threats
- Manual fallbacks and "safe modes" for critical services
- Biosecurity and cybersecurity hardening
- Community preparedness and mutual aid networks
- Capability to function during disruptions to AI-mediated services

**Australia's role:** This is core sovereignty. We must build this capability regardless of what happens overseas.

**Note on ordering:** We present these layers top-down (1→2→3) to reflect the logic of defence-in-depth: prevent first, constrain if prevention fails, withstand if containment fails. However, Australia should prioritise bottom-up: ensure Layer 3 capability first (what we must be able to do), build strong Layer 2 (where we have sovereignty), then contribute to Layer 1 (where we have influence).

---

## How pillars and layers interact

The four pillars span all three layers in different ways:

|  | Layer 1: Prevent | Layer 2: Constrain | Layer 3: Withstand |
|---|---|---|---|
| **Containment** | Compute governance; export controls; oversight of training runs | AI control methods; monitoring; containment protocols | Rapid containment of escaped systems; shutdown procedures |
| **Alignment** | Research on safe training methods; evaluation standards | Evaluate alignment before deployment; ongoing behavioural monitoring | Detect when deployed systems misalign; rapid response |
| **Governance** | International coordination; compute governance treaties | Licensing, audits, use restrictions; mandatory reporting | Legal liability and enforcement after harms; learning from incidents |
| **Resilience** | Reduce dangerous capability development through coordination | Limit exposure; maintain alternatives; reduce single points of failure | Continuity, recovery, community resilience; social cohesion |

This table shows why we need all four pillars at all three layers. A strategy that focuses only on, say, Governance at Layer 2 (regulation of deployments) leaves you exposed everywhere else.

---

## Where this framework applies

This framework is designed for **advanced AI systems** that are highly capable but where meaningful human oversight, containment and governance remain possible—the systems most likely over the next 5–15 years.

### For advanced AI (high confidence)

C·A·G·R works well when:

- AI systems are powerful enough to cause significant harm but not yet superintelligent
- Technical containment measures (monitoring, restrictions, shutdown) are feasible
- Governance and regulatory frameworks can meaningfully constrain deployment
- Resilience measures can provide meaningful protection against failures

This describes most plausible near-to-medium term scenarios, including highly autonomous systems in critical infrastructure, powerful cyber and bio capabilities, and widespread AI-mediated decision-making.

### For extreme AGI scenarios (lower confidence)

For scenarios involving **loss of control over superintelligent systems**, the framework's effectiveness changes:

**Containment becomes critical:** If dangerous superintelligent systems are created, containment likely fails. Prevention (Layer 1) becomes paramount—dangerous systems must not be built in the first place.

**Alignment becomes load-bearing:** If alignment fails catastrophically with a superintelligent system that can outthink and outmaneuver humans, governance and resilience may not help. Technical alignment becomes the most critical pillar.

**Resilience has limits:** Local continuity planning and community preparedness cannot address global, systemic loss of control to superintelligent AI. Resilience works for narrow failures and bounded disruptions, not for scenarios where humanity loses the ability to shape outcomes.

**Governance remains important but may be insufficient:** International coordination to prevent dangerous development becomes essential, but enforcement becomes harder if any actor can achieve decisive advantage.

### Using C·A·G·R appropriately

The framework helps Australia prepare for:

- **Likely scenarios** (advanced AI with significant but bounded risks) — where all four pillars are effective
- **Tail risks** (loss of control over superintelligent AI) — by emphasizing containment and alignment as critical, while being honest that resilience has limits

For extreme scenarios, prevention and alignment are paramount. For likely scenarios, defence-in-depth across all four pillars provides robust protection.

Australia's strategy should address both—building capability across all pillars while recognising that for the worst scenarios, preventing dangerous systems from being built (Containment, Layer 1) and ensuring technical alignment are most important.

---

## Who does what: roles across actors

Different actors have different responsibilities:

**Government & public institutions** ([detailed guidance](../government-policy/index.md))

- Set regulatory frameworks and standards
- Fund safety research and evaluation capability
- Coordinate national resilience and emergency response
- Lead international engagement

**Business & industry** ([detailed guidance](../business-industry/index.md))

- Choose and deploy systems with appropriate safety properties
- Comply with regulations and sectoral rules
- Maintain manual fallbacks and continuity plans
- Participate in standards development

**Communities & households** ([detailed guidance](../communities-households/index.md))

- Provide democratic input on acceptable uses
- Build local preparedness and mutual aid
- Maintain trusted communication networks
- Advocate for better protections

---

## Common misunderstandings

**"Is alignment enough?"**
No. Even perfectly aligned systems need containment (to prevent dangerous capabilities from being created), governance (to ensure appropriate use) and resilience (because perfect alignment is unlikely).

**"Can't we just regulate our way to safety?"**
No. Governance without resilience leaves you brittle. Governance without containment and alignment means you're regulating systems whose dangerous capabilities already exist and which you don't fully understand.

**"Isn't containment the same as governance?"**
No. Containment includes both technical measures (AI control methods, monitoring systems) and preventive measures (compute governance, export controls). Governance is about laws, institutions and coordination. Both are needed.

**"Isn't this just AI ethics?"**
No. C·A·G·R is about practical risk management across technical, regulatory and resilience domains. Ethics informs it but doesn't replace it.

**"Is this only about AGI?"**
No. C·A·G·R applies to advanced AI systems we already have, not just hypothetical future AGI.

**"Do we need all four pillars equally?"**
Not necessarily. Your priorities depend on your role and context. But you need to address all four — neglecting any pillar creates unacceptable vulnerabilities.

---

## How to use this framework

### For risk assessment
- Map your current AI dependencies against all four pillars
- Use the defence-in-depth layers to identify where you're exposed
- Check: are you neglecting any pillar? Over-relying on one?

### For strategy and planning
- Ensure your strategy addresses containment, alignment, governance and resilience
- Use the layer model to prioritise: start with Layer 3 (what you must be able to do), build Layer 2 (where you have control), contribute to Layer 1 (where you have influence)

### For tabletop exercises
- Combine this framework with scenarios from [AGI Scenarios for Australia](../agi-scenarios/index.md)
- For each scenario, ask: what would containment, alignment, governance and resilience look like?
- Test whether your current capabilities would actually work under stress

### For policy development
- Use C·A·G·R to structure policy proposals: which pillar(s) does this address?
- Use defence-in-depth to check coverage: which layer(s) does this target?
- Identify gaps and overlaps with other policies

---

## Trade-offs and hard choices

In practice, you'll face choices:

- Invest in containment or resilience?
- Focus on preventing dangerous training or hardening against failures?
- Prioritise technical robustness or social cohesion?
- Strengthen domestic governance or invest in international coordination?

The C·A·G·R framework doesn't make these choices for you. But it ensures you're asking the right questions and understanding what you're trading off.

Some tensions to expect:

- Stronger containment and governance might slow innovation or drive activity offshore
- Better resilience might enable complacency about containment and alignment
- Focusing on Layer 1 (prevention) might distract from Layer 3 (resilience we control)
- International coordination on containment might require compromises on sovereignty

These tensions are real. Part of using C·A·G·R well is being explicit about trade-offs and making considered choices, not pretending tensions don't exist.

---

## Next steps

**Understand the pillars in depth:**

- [Containment](containment.md) — preventing dangerous AI systems from being built or deployed
- [Alignment](alignment.md) — making AI systems reliably safe and aligned with human values
- [Governance](governance.md) — laws, institutions and international coordination
- [Resilience](resilience.md) — withstanding and recovering from AI-related disruptions

**Understand key concepts:**

- [Concepts & Glossary](../concepts.md) — definitions of key terms like AGI, alignment, AI control, and defence in depth
- [For Researchers](../for-researchers.md) — how this framework maps to technical AI safety literature, plus pathways for getting involved in AI safety research and practice

**Apply to scenarios:**

- [AGI Scenarios for Australia](../agi-scenarios/index.md) — use C·A·G·R to work through concrete scenarios

**Sector-specific guidance:**

- [Government & Policy](../government-policy/)
- [Business & Industry](../business-industry/)
- [Communities & Households](../communities-households/)

**Understand the risks:**

- [Scenarios for Australia](../agi-scenarios/index.md) — scenarios showing how AGI risks could impact Australia
