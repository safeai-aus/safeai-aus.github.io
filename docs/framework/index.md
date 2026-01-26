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

> **Purpose:** Practical framework for managing advanced AI risks using familiar risk management principles
> **Audience:** Government, business, and community organisations | **Time:** 30-45 minutes

## What this page is for

The **Containment · Alignment · Governance · Resilience (C·A·G·R)** framework helps Australian organisations manage advanced AI and AGI risks using familiar risk management principles.

If you work in government, business or community organisations and need a practical way to think about AI safety, this framework translates technical AI safety concepts into language and structures you already use.

After reading this page, you'll understand:

- how C·A·G·R maps AI risks onto standard risk management
- what each of the four pillars means in practice
- how the layers of defence-in-depth work
- where to go for detailed guidance on each pillar

---

## The Strategic Challenge Australia Faces

**Australia is in a unique position:** we will deploy advanced AI systems we didn't build and cannot fully verify.

We're a small, advanced economy that imports frontier AI from the US and China. Unlike jurisdictions with domestic AI labs, we can't inspect training processes, verify alignment claims, or understand model internals. Yet we experience full impact when these systems are deployed in our critical infrastructure, government services, and essential systems.

This creates three interconnected strategic problems:

### The Information Problem: We Can't Verify What We Import

**The core challenge:** Australia must make high-stakes decisions about AI system safety based on claims we cannot independently verify.

Frontier AI providers assure us their systems are safe and aligned. But we face fundamental information asymmetries:

- **Opacity of training:** We don't observe training processes, data selection, or objective functions
- **Black-box systems:** Even with model access, current techniques cannot reliably determine what systems are optimising for
- **Evaluation gaps:** Systems may appear aligned in testing but pursue different goals in deployment ([deceptive alignment](../resources/concepts.md#alignment-ai-safety-concept))
- **Proprietary methods:** Safety techniques are often trade secrets; we can't verify they were applied correctly
- **Scale barriers:** Evaluation at the frontier requires compute and expertise that exceed most nations' capacity

**This isn't a solvable problem through trust or contracts.** Even well-intentioned providers cannot guarantee their own systems are safe—the technical challenges of alignment verification remain unsolved. Australia must operate under irreducible uncertainty about systems we're being asked to deploy.

!!! info "Australia's AI Safety Institute: Building evaluation capability"

    The Australian Government announced a new [**AI Safety Institute**](../safety-standards/ai-australian-legislation.md#national-ai-plan-and-ai-safety-institute) (rolling out from early 2026) to monitor, test and advise on emerging AI capabilities, risks and harms. This institute is anticipated to help build domestic capability to independently evaluate advanced AI systems—addressing the information asymmetry challenge at the core of Australia's strategic position.

### The Coordination Problem: Understanding the Landscape

**Why international coordination matters—and why it's hard:**

Many protective measures work best with international cooperation. Compute governance is more effective when chip restrictions are coordinated. Export controls have teeth when major jurisdictions align. Safety standards create a floor when adopted broadly.

But coordination faces structural barriers:

- **Competitive dynamics:** First-mover advantages create pressure to deploy before safety validation. If competitors don't wait, waiting alone means falling behind economically or strategically.
- **Asymmetric interests:** Nations with frontier AI industries have different incentives than nations that primarily import and deploy.
- **Sovereignty tensions:** No nation wants external control over technology critical to defence, economy, or national security.
- **Verification challenges:** Even with agreements, how do you verify compliance for systems trained in secret facilities?
- **Speed of development:** AI capabilities advance faster than international treaty processes. By the time frameworks are negotiated, the technology has moved on.

Australia can influence coordination through Five Eyes partnerships, participation in multilateral forums, and setting deployment standards that others may adopt. But we cannot assume coordination will emerge in time.

### Time as a Constraint: The Race We're In

**The fundamental timing challenge:** AI capabilities are advancing faster than our ability to ensure they're safe.

This isn't just about [AGI timelines](../agi-timelines.md)—it's about the gap between:

- How quickly systems become more capable vs how quickly we learn to align them
- How fast deployment pressures build vs how fast governance can adapt
- How rapidly dependencies form vs how long building resilience takes

Each passing year narrows the window for preventive action. Dependencies harden. Economic pressures to deploy intensify. Reversal becomes costlier.

**This framework exists because these three problems demand urgent attention—and Australia cannot solve any of them alone.**

---

## The C·A·G·R Framework: Defence-in-Depth as Strategy

Given the strategic challenges above, **our guiding policy is defence-in-depth**—and the **C·A·G·R framework operationalises this across four interconnected pillars:**

**The gap we're filling:** Technical AI safety research uses specialised terminology that doesn't map to operational risk management. International frameworks assume direct oversight of frontier AI labs. Australian guidance focuses on current AI risks rather than advanced AI preparedness.

**What makes C·A·G·R different:**

- **Familiar foundations:** Maps directly onto prevention, safety by design, compliance, and resilience—risk management you already do
- **Honest about Australia's position:** We don't control frontier AI development overseas, so we focus on what we can control: deployment standards, procurement, governance, and national resilience
- **Defence-in-depth:** Assumes any single measure will fail, requiring multiple overlapping protections
- **Addresses information asymmetry:** Focuses on what Australia can verify and control (deployment, procurement, resilience) rather than what we can't (training processes overseas)
- **Action-oriented:** Each pillar connects to concrete guidance for government, business, and communities

**Why now:** AI capabilities are advancing faster than safety research or governance. Australia has a narrow window to set deployment standards before dangerous dependencies lock in. Advanced AI risks cross organisational boundaries—we need a shared framework. Expert consensus supports this focus: [88.8% of AI safety professionals](https://www.goodancestors.org.au/our-work/ai-safety/aisi-expert-survey) surveyed by Good Ancestors believe Australia's AI Safety Institute should prioritise catastrophic risks or take a balanced approach.

**How it was developed:** C·A·G·R synthesises international AI safety research ([Anthropic](https://www.anthropic.com/research), [Google DeepMind](https://www.deepmind.com/safety-and-ethics), [OpenAI](https://openai.com/safety), [UK AI Safety Institute](https://www.aisi.gov.uk/)), Australian risk management standards ([ISO 31000](https://www.iso.org/iso-31000-risk-management.html)), defence-in-depth principles from [nuclear safety](https://www.nrc.gov/reading-rm/basic-ref/glossary/defense-in-depth) and [cybersecurity](https://csrc.nist.gov/glossary/term/defense_in_depth), lessons from biosecurity, and expert consultation with researchers and practitioners.

---

## Current Limitations

!!! warning "What we don't yet know"

    **The C·A·G·R framework reflects current best practice, not complete solutions.** Key limitations include:

    **Alignment verification:** We cannot yet reliably verify that advanced AI systems are truly aligned with stated goals. Systems may appear safe during evaluation but pursue different objectives in deployment ([deceptive alignment](../resources/concepts.md#alignment-ai-safety-concept)). Current evaluation methods don't scale to superhuman capabilities — the [UK AI Safety Institute](https://www.aisi.gov.uk/) and [Anthropic's Responsible Scaling Policy](https://www.anthropic.com/news/anthropics-responsible-scaling-policy) acknowledge these gaps.

    **Capability thresholds:** This framework becomes critical when AI systems can autonomously pursue goals, adapt strategies, or operate across domains. The transition zone is unclear, but consider:

    - **Low-risk (standard IT risk management):** Image classifiers, spell checkers, basic chatbots without internet access
    - **Medium-risk (enhanced oversight needed):** AI agents with tool use, systems making consequential decisions, multi-step autonomous workflows
    - **High-risk (C·A·G·R applies):** Systems that can develop novel strategies, autonomous cyber/bio capabilities, persuasive models deployed at scale, critical infrastructure automation

    We cannot specify exact compute or capability thresholds — capabilities emerge unpredictably. Organisations should evaluate based on autonomy, scope of action, and consequences of failure.

    **Coordination challenges:** Many protections require international cooperation we don't yet have. Containment measures work best with global [compute governance](../resources/concepts.md#compute-governance) and [model weight](../resources/concepts.md#model-weights) security — currently fragmented across jurisdictions.

    We present C·A·G·R as a defence-in-depth approach precisely because no single measure is sufficient.

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

## How C·A·G·R Manages Time as a Strategic Resource

Given the timing constraint identified above, C·A·G·R explicitly uses each pillar to buy, use, or shape time in Australia's favour:

*   **Containment buys time:** Deployment restrictions and safety evaluations slow adoption of dangerous systems, buying time for alignment research and governance to catch up.
*   **Resilience uses time:** Manual fallbacks and continuity planning allow Australia to withstand failures, giving us time to recover and fix systems without total collapse.
*   **Governance shapes time:** Standards and regulations accelerate safety adoption while braking reckless deployment.
*   **Alignment addresses the root cause:** Better aligned systems reduce the pressure of the capability-safety gap.

**Strategic principle:** Any policy that does not explicitly address the timing challenge—buying time, using time effectively, or shaping the pace of deployment—is likely insufficient for managing advanced AI risks.

!!! info "Coordination constraints"

    **These strategies work best with international coordination.** Australia acting alone can buy some time (through deployment restrictions) but cannot slow global capability development. If frontier AI labs compete in a race to deploy first, individual nations' containment measures have limited effect.

    This is why C·A·G·R emphasises defence-in-depth rather than relying on any single layer—including time-buying strategies that require global coordination we don't yet have.

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

C·A·G·R implements a **[defence-in-depth](https://www.nrc.gov/reading-rm/basic-ref/glossary/defense-in-depth) model** with three layers. Each layer assumes the ones above it may fail. All four pillars span across these layers.

Defence-in-depth is an established risk management strategy from nuclear safety and cybersecurity that uses multiple independent layers of protection. The principle: no single protective measure is exclusively relied upon, so that if one layer fails, subsequent layers provide backup protection. C·A·G·R applies this proven approach to advanced AI risks.

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

## Common misunderstandings

**"Is alignment enough?"** No. Even perfectly aligned systems need containment (prevent dangerous capabilities), governance (ensure appropriate use), and resilience (handle failures).

**"Can't we just regulate our way to safety?"** No. Governance without resilience is brittle. Governance without containment means regulating systems you don't control or understand.

**"Isn't containment the same as governance?"** No. Containment includes technical measures ([AI control](../resources/concepts.md#ai-control-technical-concept), monitoring) and prevention ([compute governance](../resources/concepts.md#compute-governance), export controls). Governance is laws, institutions, coordination.

**"Is this only about AGI?"** No. C·A·G·R applies to advanced AI systems deployed today, not just hypothetical AGI.

**"Do we need all four pillars equally?"** Priorities depend on your role and context. But address all four — neglecting any pillar creates unacceptable vulnerabilities.

---

## How to use this framework

**For risk assessment:** Map current AI dependencies against all four pillars and three layers. Are you neglecting any pillar? Over-relying on one?

**For strategy:** Ensure your approach addresses all four pillars. Prioritise bottom-up: Layer 3 first (what you must be able to do), Layer 2 (where you have control), then Layer 1 (where you have influence).

**For exercises:** Combine with [AGI scenarios](../agi-scenarios/index.md). For each scenario, ask what containment, alignment, governance and resilience look like. Test whether current capabilities work under stress.

**For policy:** Use C·A·G·R to structure proposals—which pillar(s) and layer(s) does this address? Identify gaps and overlaps.

---

## Next steps

**Explore each pillar:**

- [Containment](containment.md) — preventing dangerous AI systems from being built or deployed
- [Alignment](alignment.md) — making AI systems reliably safe and aligned with human values
- [Governance](governance.md) — laws, institutions and international coordination
- [Resilience](resilience.md) — withstanding and recovering from AI-related disruptions

**Apply to scenarios:**

- [AGI Scenarios for Australia](../agi-scenarios/index.md) — work through concrete scenarios using C·A·G·R

**For researchers:**

- [For AI Safety Researchers](../resources/for-researchers.md) — how this maps to technical AI safety literature
