---
icon: lucide/graduation-cap
tags:
  - Resources
  - Research
  - Safety
---

# For AI Safety Researchers

This page bridges between SafeAI-Aus's policy-oriented C·A·G·R framework and the technical AI safety research literature. It's designed for researchers, students, and technical practitioners who want to understand how our framework maps to existing work in the field.

---

## How C·A·G·R maps to AI safety literature

SafeAI-Aus adapts concepts from technical AI safety for an Australian policy audience. Here's how our framework relates to established technical work:

### Containment

**C·A·G·R Containment** combines two distinct technical concepts:

**1. AI Control ([Redwood Research](https://www.redwoodresearch.org/), Buck Shlegeris, Ryan Greenblatt)**
Technical methods to maintain safety even with potentially misaligned systems:

- Monitoring and oversight protocols
- Usage restrictions and containment
- Shutdown mechanisms
- Red-teaming and adversarial evaluation

**Key papers:**

- ["AI Control: Improving Safety Despite Intentional Subversion"](https://arxiv.org/abs/2312.06942) (Greenblatt et al., 2024)
- [Redwood Research's work on control protocols](https://www.redwoodresearch.org/)
- [Apollo Research on deceptive alignment detection](https://www.apolloresearch.ai/research)

**2. Compute Governance ([CSET](https://cset.georgetown.edu/), [Epoch AI](https://epochai.org/))**
Physical infrastructure oversight as a tractable intervention point:

- Chip export controls
- Data centre registration and oversight
- Tracking large training runs

**Key resources:**

- [CSET](https://cset.georgetown.edu/) reports on semiconductor supply chains and AI governance
- [Epoch AI](https://epochai.org/) compute trends analysis
- [US Department of Commerce AI chip export controls](https://www.bis.doc.gov/)

### Alignment

**C·A·G·R Alignment** corresponds closely to the technical AI safety concept of alignment, including:

**Inner and outer alignment ([Stuart Russell](https://people.eecs.berkeley.edu/~russell/), [Paul Christiano](https://paulfchristiano.com/), others)**
- Outer: specifying correct objectives
- Inner: ensuring systems pursue those objectives (not deceptive or mesa-optimisation)

**Key problems:**

- Reward hacking / specification gaming
- Goal misgeneralization
- Deceptive alignment / treacherous turn (Hubinger et al.)

**Scalable oversight ([Anthropic](https://anthropic.com/), [OpenAI](https://openai.com/))**
- Debate (Irving et al.)
- Amplification and iterated distillation
- Constitutional AI
- Process supervision vs. outcome supervision

**Interpretability and transparency ([Anthropic](https://anthropic.com/), others)**
- Mechanistic interpretability
- Circuit analysis
- Feature visualization

**Key papers and resources:**

- ["Superintelligence"](https://www.goodreads.com/book/show/20527133-superintelligence) (Nick Bostrom, 2014) — foundational
- ["Concrete Problems in AI Safety"](https://arxiv.org/abs/1606.06565) (Amodei et al., 2016)
- ["Risks from Learned Optimization"](https://arxiv.org/abs/1906.01820) (Hubinger et al., 2019)
- [Anthropic's research](https://anthropic.com/research) on Constitutional AI, interpretability
- [Paul Christiano's work](https://paulfchristiano.com/) on alignment, ELK problem
- [AI Safety Fundamentals](https://aisafetyfundamentals.com/) course materials

### Governance

**C·A·G·R Governance** draws from:

**AI governance research ([GovAI](https://www.governance.ai/), [CSET](https://cset.georgetown.edu/), others)**
- Regulatory frameworks and institutional design
- International coordination
- Standards and evaluation

**Existing models:**

- [EU AI Act](https://artificialintelligenceact.eu/) (risk-based regulation)
- UK approach (pro-innovation, sectoral)
- US state-level efforts ([California SB 1047](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240SB1047))

**Key organisations and resources:**

- [Centre for the Governance of AI (GovAI)](https://www.governance.ai/)
- [Centre for Security and Emerging Technology (CSET)](https://cset.georgetown.edu/)
- [AI Now Institute](https://ainowinstitute.org/)
- [Future of Humanity Institute](https://www.fhi.ox.ac.uk/) archives (AI governance work)

### Resilience

**C·A·G·R Resilience** is less represented in technical AI safety literature (which focuses heavily on prevention and alignment) but draws from:

**Cybersecurity and infrastructure resilience**
- Defense in depth strategies
- Continuity planning under AI threats
- Hardening against AI-enabled attacks

**Differential technological development (Bostrom)**
- Ensuring defensive capabilities keep pace with offensive
- Building robustness to various threat scenarios

**Related work:**

- "Defense in Depth Against Human Extinction" (various authors)
- Cybersecurity resilience literature applied to AI threats
- Critical infrastructure protection frameworks

---

## Defense in depth

Our three-layer model is inspired by:

**[BlueDot Impact's AGI Safety Fundamentals](https://aisafetyfundamentals.com/)**
- Layer 1: Prevent dangerous training
- Layer 2: Constrain dangerous capabilities
- Layer 3: Withstand dangerous actions

**Classical defence in depth (cybersecurity)**
- Multiple layers of protection
- Each layer assumes others may fail
- Reduces single points of failure

**Related concepts:**

- Swiss cheese model (multiple imperfect barriers)
- Safety culture in high-reliability organisations

---

## Organisations and communities

### Research institutions

**Technical AI safety:**

- [Anthropic](https://anthropic.com/)
- [OpenAI](https://openai.com/) (Superalignment team)
- [DeepMind](https://deepmind.google/) (AI Safety team)
- [Redwood Research](https://www.redwoodresearch.org/)
- [Apollo Research](https://www.apolloresearch.ai/)
- [METR](https://metr.org/) (Model Evaluation & Threat Research)
- [FAR AI](https://far.ai/)

**Governance and policy:**

- [Centre for the Governance of AI (GovAI)](https://www.governance.ai/)
- [Centre for Security and Emerging Technology (CSET)](https://cset.georgetown.edu/)
- [AI Now Institute](https://ainowinstitute.org/)
- [Partnership on AI](https://partnershiponai.org/)

**Academia:**

- [UC Berkeley CHAI](https://humancompatible.ai/) (Centre for Human-Compatible AI)
- [MIT FutureTech](https://futuretech.mit.edu/)
- [Cambridge Centre for the Study of Existential Risk (CSER)](https://www.cser.ac.uk/)
- [Oxford Future of Humanity Institute](https://www.fhi.ox.ac.uk/) (archived, but work remains influential)

**Australia-specific:**

- Australian AI Safety Institute (emerging)
- [CSIRO's AI work](https://www.csiro.au/en/research/technology-space/ai)
- Various university AI research groups

### Educational resources

**Courses:**

- [AI Safety Fundamentals](https://aisafetyfundamentals.com/) (BlueDot Impact) — excellent intro
- [AGI Safety Fundamentals](https://aisafetyfundamentals.com/blog/agi-safety-fundamentals/) (BlueDot Impact) — more advanced
- [ML Safety Course](https://course.mlsafety.org/) (Dan Hendrycks)
- [Richard Ngo's AGI Safety Fundamentals reading list](https://www.alignmentforum.org/s/mzgtmmTKKn5MuCzFJ)

**Forums and communities:**

- [AI Alignment Forum](https://alignmentforum.org/)
- [LessWrong](https://lesswrong.com/) (AI safety content)
- [Effective Altruism Forum](https://forum.effectivealtruism.org/) (AI safety cause area)
- [Apart Research](https://apartresearch.com/)
- [AI Safety Camp](https://aisafety.camp/)

**Podcasts and media:**

- [80,000 Hours podcast](https://80000hours.org/podcast/) (AI episodes)
- [AXRP](https://axrp.net/) (AI X-Risk Research Podcast)
- [FLI podcast](https://futureoflife.org/project/future-of-life-institute-podcast/)
- [Alignment Newsletter](https://rohinshah.com/alignment-newsletter/) (Rohin Shah, archived but valuable)

---

## Differences between SafeAI-Aus and mainstream AI safety

Our framework differs in emphasis from much technical AI safety work:

**1. More emphasis on resilience**
Technical AI safety focuses heavily on prevention (don't build dangerous systems) and alignment (make systems safe). We add significant emphasis on resilience (cope when things go wrong) because:

- Australia can't prevent all dangerous development (it happens overseas)
- Perfect alignment is unlikely
- Practical preparedness is tractable and valuable

**2. Four pillars instead of three**
Many frameworks use "alignment, governance, safety" or similar. We split containment (preventing and restricting dangerous capabilities) from governance (laws and institutions) because:

- Containment includes technical measures (AI control) and physical measures (compute governance)
- The distinction matters for understanding Australia's leverage

**3. More policy-oriented**
We translate technical concepts for government, business and community audiences. This means:

- Less technical depth on some topics
- More emphasis on institutional design and practical implementation
- Australian context throughout

**4. Explicit scope limitations**
We're clear that C·A·G·R works best for advanced AI (next 5-15 years) where human oversight remains meaningful. For superintelligence scenarios, we acknowledge containment and resilience have limits, and prevention+alignment become paramount.

---

## How to engage

**Researchers interested in Australian AI safety contexts:**

This site provides the C·A·G·R framework and Australian-specific analysis. For practical pathways to contribute—whether through research, policy work, or community building—see [Getting Involved](getting-involved.md#technical-contributions).

**Key Australian connections:**

- [AI Safety Australia](https://aisafety.com.au/) — community hub for Australian AI safety practitioners
- University AI safety groups — growing presence at ANU, Melbourne, UNSW, Sydney
- [EA Australia](https://www.eaaustralia.org/) — includes AI safety focus groups

**Feedback:** *Contact details to be added as project develops*

---

## Research Priorities for Decentralised AI

While much AI safety research focuses on centralised development by major labs, decentralised alternatives raise distinct research questions. How do we enable safe, capable AI systems that communities can actually run, govern, and own?

!!! tip "Underexplored research area"

    Research on decentralised AI governance, cooperative ownership models, and community deployment is significantly underrepresented relative to frontier model development.

### Key research gaps

**Technical priorities:**

- Efficient inference on commodity hardware (resource-constrained deployment)
- Privacy-preserving methods (federated learning, differential privacy, secure computation)
- Safety evaluation protocols for community-deployed open models
- Fine-tuning methods that preserve alignment

**Governance priorities:**

- Democratic decision-making mechanisms for AI systems
- Cooperative organisational design (scaling from 100 to 10,000+ members)
- Exit rights and data portability (preventing lock-in)
- Multi-stakeholder accountability in distributed systems

**Economic priorities:**

- Sustainable business models for cooperative AI
- Value distribution mechanisms (who captures productivity gains?)
- Transition pathways from centralised to decentralised systems
- Regional cooperation for scale economies

**Australian context:**

- Procurement strategies supporting cooperatives
- Regulatory barriers and enablers
- Regional coordination (Pacific, Southeast Asia)
- Indigenous governance models applied to AI

### Interdisciplinary work required

Effective decentralised AI research requires collaboration: computer science + cooperative economics, AI safety + democratic governance, public policy + community organising. Technical solutions alone don't create democratic control; governance models alone don't ensure safety.

### Further reading

- [Decentralisation & Democratic Control](decentralisation-and-democratic-control.md) — philosophical foundation
- [Supporting Alternatives](government-policy/supporting-alternatives.md) — policy mechanisms
- [Community AI Infrastructure](communities-households/community-ai-infrastructure.md) — practical deployment

---

