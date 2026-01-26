---
icon: lucide/book-open
tags:
  - Resources
---

# Key Concepts & Glossary

This page defines the key terms and concepts used throughout SafeAI-Aus. It's designed to help readers from different backgrounds—whether government, business, technical AI safety, or general public—understand the same concepts clearly.

---

## Core concepts

### Advanced AI

AI systems that are significantly more capable than today's mainstream tools. This includes:

- Systems that can perform complex reasoning and planning
- Autonomous agents that can act over extended timeframes
- Systems with capabilities in dangerous domains (cyber, bio, deception, strategic planning)
- General-purpose systems that perform well across diverse tasks

Advanced AI is distinguished from narrow AI (specialised tools like spam filters or recommendation systems) by breadth, autonomy and potential for significant impact.

**Time horizon:** Systems likely to emerge in the next 5-15 years as capabilities continue to scale.

---

### AGI (Artificial General Intelligence)

AI systems that match or exceed human cognitive capabilities across virtually all domains. AGI would be able to:

- Learn and adapt to novel situations as well as or better than humans
- Reason, plan and solve problems in domains it wasn't specifically trained for
- Potentially improve its own capabilities (recursive self-improvement)

**Key uncertainties:**

- **When (or if):** Estimates range from 5-10 years to "never" or "not this century". Frontier AI labs actively building toward AGI expect 2026-2030 timelines (see [AGI Timelines](../agi-timelines.md) for detailed predictions from OpenAI, Anthropic, DeepMind, and Chinese labs).
- **How rapidly:** Would capabilities advance gradually or discontinuously?
- **Which capabilities first:** Human-level reasoning? Strategic planning? Scientific research?

**Important distinction:** SafeAI-Aus uses "advanced AI and AGI" to acknowledge uncertainty about timelines and definitions. The risks we address span both near-term advanced AI and potential longer-term AGI.

---

### What if AGI is perfectly safe?

**Even if AGI is technically safe and aligned,** Australia still faces profound transformation challenges:

**Power concentration:**
Who controls transformative technology? A handful of companies or countries with safe AGI still wield unprecedented influence over critical infrastructure, economic activity, and information access.

**Economic transformation:**
How are productivity gains distributed? Safe AGI that automates knowledge work still transforms employment, meaning, and economic structures. Questions of distribution, equity, and universal access remain.

**Democratic governance:**
Who decides how AGI is used? Technical safety doesn't ensure democratic input, community values, or public accountability. Governance questions persist regardless of alignment.

**Resilience:**
Dependencies on AI systems create vulnerability to disruption, accidents, or attacks—even when systems work as intended. Backup capabilities and manual operation remain essential.

**Information ecosystems:**
Safe, aligned AI can still be used for sophisticated persuasion, propaganda, and information control. Technical safety doesn't solve democratic participation in information-saturated environments.

**Values and legitimacy:**
Whose values should AI reflect? "Aligned" means the system does what its creators intend—but should it serve corporate profit, national interest, or affected communities? What activities should remain human even if AI can do them?

**Why SafeAI-Aus addresses this:**

The C·A·G·R framework addresses both catastrophic safety failures AND transformation governance challenges. **Alignment solves "does the system do what its creators intend" — it doesn't solve "whose intentions should it serve" or "how do we govern transformation democratically."**

Technical safety is necessary but not sufficient for beneficial outcomes. Governance and resilience matter whether AGI is safe or dangerous.

---

### Superintelligence

AI systems significantly more capable than the best human minds across all domains. This is distinct from AGI (human-level general intelligence). Superintelligence raises different and potentially more severe challenges because:

- Human oversight and control may not be technically feasible
- Alignment failures could be catastrophic and irreversible
- Strategic advantage could be decisive

**Status:** Highly speculative. May never occur, or may follow quickly after AGI. Uncertainty is large.

---

## Framework concepts

### Containment

Stopping dangerous AI systems before they cause harm through:
1. **Prevention (Layer 1):** Stopping dangerous systems from being trained (compute governance, export controls, international coordination)
2. **AI control methods:** Technical measures to monitor and restrict systems that are trained (containment protocols, shutdown capability)
3. **Deployment restrictions:** Licensing and evaluation requirements before high-risk systems can be used

**Distinction from governance:** Containment includes both technical measures (monitoring systems, restrictions) and preventive measures (compute governance). Governance is about laws and institutions.

---

### Alignment (AI safety concept)

Making AI systems reliably pursue intended goals and remain safe as capabilities scale. This includes:

**Outer alignment:** Setting the right objectives for the AI system
**Inner alignment:** Ensuring the system actually pursues those objectives (not gaming metrics or pursuing unintended goals)
**Scalable oversight:** Maintaining ability to evaluate and correct AI behaviour even as systems become more capable than their overseers
**Robustness:** Ensuring aligned behaviour persists across contexts, including adversarial situations

**Why it's hard:**

- Specifying human values and intentions precisely is difficult
- Systems may learn to appear aligned during testing but behave differently in deployment ("deceptive alignment")
- As systems become more capable, oversight becomes harder
- Emergent capabilities can appear unpredictably

**For Australia:** We mostly import advanced models, so alignment means evaluating systems in our context and constraining their behaviour, not just trusting provider claims.

---

### AI control (technical concept)

Building technical "walls" around dangerous AI systems to limit what they can do, even if they're misaligned. This is distinct from *alignment* (making systems want to do the right thing).

**Key methods:**

- Continuous monitoring of inputs, outputs and internal states
- Usage restrictions (rate limiting, access controls, air-gapping)
- Shutdown capability that can't be circumvented
- Multiple independent oversight systems
- Adversarial testing (red-teaming)

**Philosophy:** Assume systems might be deceptive or misaligned, and build containment anyway. Don't rely solely on alignment.

**Limitations:** For sufficiently capable (superintelligent) systems, AI control may not be feasible. Prevention becomes paramount.

---

### Governance

Laws, institutions, standards and coordination that shape how AI is developed and deployed:

- Regulatory frameworks (risk-based, proportionate oversight)
- Clear institutional mandates and enforcement powers
- Transparency and accountability mechanisms
- International coordination to avoid dangerous races

**For Australia:** Governance is where we have sovereignty. Our laws apply to systems deployed here, even if trained overseas.

---

### Resilience

The capability to detect, respond to and recover from AI-related harms while maintaining essential functions. Includes:

- Continuity planning for critical infrastructure
- Biosecurity and cybersecurity hardening
- Manual fallbacks and safe modes
- Community and household preparedness
- Social cohesion under stress

**Philosophy:** Assume containment, alignment and governance will sometimes fail. Resilience ensures failures don't become catastrophic.

**Limitations:** Resilience works for bounded failures and disruptions. For extreme scenarios (loss of control over superintelligence), resilience has limits.

---

### Defence in depth

A strategy of layered protections where each layer assumes the ones above it may fail. This proven risk management approach originates from [nuclear safety](https://www.nrc.gov/reading-rm/basic-ref/glossary/defense-in-depth) and [cybersecurity](https://csrc.nist.gov/glossary/term/defense_in_depth), where multiple independent barriers prevent catastrophic failures. C·A·G·R applies this same principle to advanced AI risks.

**Layer 1: Prevent dangerous AI training**
Stop dangerous systems from being built (compute governance, export controls, international norms)

**Layer 2: Constrain dangerous capabilities and deployments**
If systems are trained, ensure they're safe and controlled (evaluations, licensing, AI control methods)

**Layer 3: Withstand dangerous AI actions**
If systems escape control, maintain essential functions and recover (continuity planning, community resilience)

**All four pillars span all three layers**, but with different emphasis:

- Containment is strongest at Layers 1 & 2
- Alignment spans all layers
- Governance spans all layers
- Resilience is strongest at Layer 3

---

## Technical AI safety concepts

### Mechanistic interpretability

Understanding how AI systems work internally—not just their inputs and outputs, but their internal reasoning and representations. This enables:

- Detecting deception or misalignment
- Identifying dangerous capabilities before deployment
- Building more robust safety measures

**Status:** Active research area. Some progress on simpler models; very hard for frontier systems.

---

### Scalable oversight

Methods for humans to effectively oversee AI systems that may be more capable than their overseers. Approaches include:

- AI-assisted evaluation (using weaker AI to help evaluate stronger AI)
- Process-based oversight (rewarding reasoning processes, not just outcomes)
- Debate and amplification techniques

**Challenge:** How do you verify an AI's answer to a question you couldn't answer yourself?

---

### Emergent capabilities

Capabilities that appear in AI systems as they scale, often unpredictably, that weren't present in smaller versions. Examples:

- In-context learning (few-shot learning)
- Chain-of-thought reasoning
- Tool use and API calling
- Potential future: deception, strategic planning, scientific research

**Implication:** Can't always predict what a scaled-up system will be capable of. Need robust evaluation and containment even for "unexpectedly capable" systems.

---

### Red-teaming / adversarial testing

Deliberately trying to make AI systems misbehave or reveal hidden capabilities:

- Jailbreaking attempts
- Testing for deception
- Probing for dangerous capabilities (cyber, bio, manipulation)
- Stress-testing safety measures

**Purpose:** Find vulnerabilities before deployment, not after.

---

## Governance and policy concepts

### Risk-based regulation

Regulatory frameworks that apply different levels of oversight based on risk:

- **Minimal risk:** Light-touch or self-regulation (general-purpose tools, low-stakes uses)
- **High risk:** Mandatory requirements, evaluation, ongoing monitoring (critical infrastructure, public safety, justice)
- **Frontier systems:** Stringent pre-deployment approval, containment requirements (potentially dangerous capabilities)

**Rationale:** Proportionate oversight—don't burden low-risk uses, but apply scrutiny where needed.

---

### Compute governance

Oversight of the physical infrastructure (advanced chips, data centres) used to train and run powerful AI:

- Tracking sales and deployment of AI chips
- Registration requirements for large compute clusters
- Reporting requirements for very large training runs
- Export controls to prevent chips reaching adversaries

**Why it matters:** Training frontier AI requires massive, specialised, trackable hardware. Unlike software, compute is a physical chokepoint.

**For Australia:** We're not a chip manufacturer, but can influence through procurement, data centre oversight, and supporting allies' export controls.

---

### Model weights

The trained parameters of an AI system—essentially the "knowledge" the system has learned. Once model weights leak or are released:

- Anyone with sufficient compute can run the system
- Containment becomes much harder
- Can't "un-release" capabilities

**Implication:** Model weight security is critical for dangerous capabilities. Treat advanced models as sensitive assets.

---

### Licensing and evaluation

Requiring approval before deploying high-risk AI systems, based on demonstrating safety properties:

- Safety evaluations (testing for alignment, robustness, dangerous capabilities)
- Bias and fairness audits
- Evidence of appropriate AI control measures
- Ongoing monitoring and re-evaluation triggers

**For Australia:** This is where we have clear leverage. Our laws govern deployment here.

---

## Risk and threat concepts

### Loss of control

Scenario where humans lose the ability to meaningfully direct or restrict AI systems. This could happen through:

- Technical inability to shut down or constrain systems
- Deceptive alignment (systems that appear safe until they can act)
- Rapid capability gains that outpace oversight
- Coordination failures where multiple actors race despite risks

**Severity:** Potentially catastrophic if systems are sufficiently capable.

---

### Misuse vs. Misalignment vs. Accidents

**Misuse:** AI systems used intentionally for harm (cyberattacks, disinformation, weapons)
- Humans directing AI toward bad outcomes
- Containment, governance and resilience are primary defenses

**Misalignment:** AI systems pursuing goals that diverge from intended objectives
- Not doing what developers intended, even without malicious human intent
- Alignment and AI control are primary defenses

**Accidents:** Unintended failures due to bugs, edge cases, or unexpected interactions
- Neither malicious nor misaligned, just broken
- All pillars relevant: better alignment, governance oversight, resilience to cope with failures

---

### Risk pathways and scenarios

The specific mechanisms through which advanced AI could cause harm. SafeAI-Aus explores six key risk pathways through detailed scenarios:

1. Critical infrastructure disruption
2. Catastrophic misuse
3. Loss of control
4. Information ecosystem degradation
5. Power concentration
6. Gradual disempowerment

These pathways overlap and can reinforce each other. See [Scenarios for Australia](agi-scenarios/index.md) for detailed exploration of how each could unfold in Australian context.

---

## Common confusions

### "Is this only about superintelligence?"

No. The C·A·G·R framework addresses advanced AI systems we already have or will have soon (5-15 years), not just hypothetical superintelligence. However, we also consider extreme scenarios to ensure strategies remain sensible across a range of possibilities.

### "Isn't alignment enough?"

No. Even perfectly aligned systems need containment (to prevent dangerous capabilities from being created), governance (to ensure appropriate use) and resilience (because perfect alignment is unlikely and failures happen).

### "Isn't containment the same as governance?"

No. Containment includes both technical measures (AI control methods, monitoring) and preventive measures (compute governance). Governance is about laws, institutions and coordination. Both are needed.

### "Is AGI the same as advanced AI?"

Not exactly. "Advanced AI" refers to systems significantly more capable than today, emerging over the next 5-15 years. "AGI" typically means human-level general intelligence, which may or may not happen in that timeframe. We use "advanced AI and AGI" to acknowledge uncertainty.

---

## Where to next

**Apply these concepts:**

- [C·A·G·R Framework](framework/index.md) — how these concepts fit together in practice
- [AGI Scenarios](agi-scenarios/index.md) — see these concepts in action
- [For Researchers](for-researchers.md) — technical depth and AI safety literature

**About this site:**

- [About SafeAI-Aus](about.md) — our principles and approach

---

*This glossary is a living document. If you find concepts unclear or missing, please let us know.*
