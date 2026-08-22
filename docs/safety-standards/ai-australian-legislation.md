---
icon: lucide/flag
title: "Current Legal Landscape for AI in Australia"
description: "Australian laws and current proposals relevant to AI adoption, including privacy, consumer protection, discrimination, safety and intellectual property."
keywords: "AI legislation Australia, Australian AI law, AI privacy law, AI consumer law, AI discrimination law, AI intellectual property, Australian AI regulation"
last-reviewed: "2026-08-22"
review-cycle: "quarterly"
og_description: "Current Australian laws and proposals relevant to AI adoption"
og_type: "article"
---

# Current Legal Landscape for AI in Australia

> **Purpose:** Distinguish laws that apply now from proposed AI reforms and inquiries
> **Audience:** Legal, compliance, risk and governance teams | **Time:** 30-45 minutes

*This page is general information, not legal advice. It was checked against the linked official sources on 22 August 2026.*

Australia does not have a single cross-sector federal AI Act. AI use is nevertheless subject to technology-neutral privacy, consumer, anti-discrimination, employment, work health and safety, intellectual-property and sector laws. AI-specific rules can also exist at state level; New South Wales has enacted digital-work-system amendments, although the principal new duties have not commenced.

!!! warning "Separate current duties from announced policy"
    The Australian Government announced proposed **Australian Standards for AI** on 15 July 2026. The announcement is not legislation. At 22 August 2026, the latest official material located by SafeAI-Aus still said National Cabinet would consider the approach in August and legislation was expected in early 2027; no published National Cabinet outcome or bill was identified.

    <!-- TODO: Human-verify the national standards' status, scope and timetable against the latest PM&C, National Cabinet and parliamentary material before publication. -->

## Laws that apply now

### Privacy Act 1988 and Australian Privacy Principles

The **Privacy Act 1988** and Australian Privacy Principles regulate personal information handled by covered organisations and agencies. Whether a particular organisation, data item or activity is covered depends on the Act's definitions, exemptions and circumstances.

For AI projects, organisations should determine:

- whether inputs, inferred information and outputs are personal or sensitive information
- the lawful basis and notice for collection, use and disclosure
- whether an overseas provider or disclosure is involved
- how data quality, security, retention, access and correction duties will be met
- whether a privacy impact assessment is appropriate

From **10 December 2026**, APP 1.7–1.9 require covered entities to include specified information in their privacy policy where personal information is used in computer programs that make, or do something substantially and directly related to making, decisions that could reasonably be expected to significantly affect a person's rights or interests.

The **Children's Online Privacy Code** remained an exposure draft at 22 August 2026. The OAIC is required to prepare the final code by 10 December 2026. Draft requirements should not be described as current legal duties until the code is registered and commences.

Official sources: [Attorney-General's Department privacy overview](https://www.ag.gov.au/rights-and-protections/privacy), [OAIC APP 1 guidance](https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-1-app-1-open-and-transparent-management-of-personal-information), [OAIC Children's Online Privacy Code](https://www.oaic.gov.au/privacy/privacy-for-kids/privacy-for-kids-childrens-online-privacy-code).

<!-- TODO: Human-verify commencement and final OAIC guidance for APP 1.7–1.9 and the Children's Online Privacy Code before publication. -->

### Australian Consumer Law

The **Australian Consumer Law (ACL)** prohibits misleading or deceptive conduct and false or misleading representations and provides consumer guarantees. These rules can apply to claims about an AI product, AI-generated marketing, chatbot representations, recommendations and automated pricing.

The **Competition and Consumer Amendment (Unfair Trading Practices) Act 2026** received assent on 6 July 2026 but the whole Act commences on **1 July 2027**. It will prohibit conduct that manipulates a consumer or unreasonably distorts the consumer's decision environment and causes, or is likely to cause, detriment. The test is technology-neutral and may apply to AI-enabled interfaces where its elements are met.

Official sources: [Australian Consumer Law](https://treasury.gov.au/website/australian-consumer-law), [Unfair Trading Practices Act 2026](https://www.legislation.gov.au/C2026A00064/asmade).

<!-- TODO: Human-verify commencement, regulations and ACCC guidance for the unfair-trading reforms before publication. -->

### Anti-discrimination and employment laws

Federal, state and territory anti-discrimination laws apply to protected attributes and covered areas of public life. AI does not remove an employer, service provider or decision-maker's responsibility for discriminatory conduct. Recruitment, promotion, rostering, credit, insurance, education and healthcare systems warrant particular review because system design or data can produce unequal outcomes.

Controls should include testing across relevant groups, accessible alternatives, documented human review and a process for correction and challenge. The applicable protected attributes, exceptions, evidentiary rules and remedies vary by jurisdiction.

Official source: [Attorney-General's Department, Australia's anti-discrimination law](https://www.ag.gov.au/rights-and-protections/human-rights-and-anti-discrimination/australias-anti-discrimination-law).

<!-- TODO: Human-verify the federal, state and territory laws applicable to each proposed use case before publication. -->

### Work health and safety and digital work systems

Existing work health and safety duties can apply where AI or automated systems create or contribute to physical or psychosocial risks.

New South Wales enacted the **Work Health and Safety Amendment (Digital Work Systems) Act 2026**, assented to on **18 February 2026**. The principal amendments concerning duties for digital work systems were still recorded as **not in force** at 22 August 2026; selected supporting amendments commenced on assent. Organisations should not describe the principal duties as operational until a commencement proclamation is made.

Official sources: [NSW Work Health and Safety Act history and commencement notes](https://legislation.nsw.gov.au/view/html/inforce/current/act-2011-010/lh), [NSW Parliament bill page](https://www.parliament.nsw.gov.au/bills/Pages/bill-details.aspx?pk=18847).

<!-- TODO: Human-verify proclamation, commencement and regulator guidance for the NSW amendments before publication. -->

### Intellectual property and confidential information

AI development and use can engage copyright, trade marks, patents, designs, confidential information and contractual rights. Organisations should document the source and licence of training, retrieval and prompt material; review provider terms; protect client information; and define ownership and permitted reuse of outputs.

The **Copyright Amendment (Orphan Works and Other Measures) Act 2026** created an orphan-works scheme. It did **not** create a general text-and-data-mining exception for AI training. The Government's 15 July 2026 AI standards announcement stated a policy intention to protect Australian creators, but did not itself amend copyright law or specify the eventual mechanism.

Official sources: [Attorney-General's Department copyright reform announcement](https://ministers.ag.gov.au/media-centre/important-reforms-australias-copyright-framework-pass-parliament-01-04-2026), [Prime Minister's AI standards announcement](https://www.pm.gov.au/media/ai-australias-interests).

<!-- TODO: Human-verify current copyright legislation, consultations and any AI-training reforms before publication. -->

### Sector regulation

Sector rules continue to apply in addition to the general laws above. Relevant bodies can include:

- **ASIC** and **APRA** for financial services and prudentially regulated entities
- the **TGA** for software and AI that is a therapeutic good or medical device
- the **eSafety Commissioner** for regulated online services
- work health and safety regulators and employment bodies
- privacy, consumer, competition, human-rights and professional regulators

The correct regulator depends on the system, user, decision, harm and sector. A model or vendor being described as “AI” does not determine jurisdiction.

## Government policy applying to Commonwealth entities

The **Policy for the responsible use of AI in government, version 2.0**, took effect on **15 December 2025** and is mandatory for non-corporate Commonwealth entities, subject to stated exclusions. It includes requirements for accountability, transparency, strategy, operational controls, staff training, use-case registers and impact assessment.

The policy uses staged implementation rather than a single 15 June 2026 commencement. Agencies must begin new-use-case assessments and implement specified operational and training requirements within 12 months of the policy taking effect; existing use cases must be assessed and treated as required by 30 April 2027. This policy is binding within its stated government scope but is not legislation applying to Australian businesses generally.

Official sources: [DTA policy version 2.0](https://www.digital.gov.au/ai/ai-in-government-policy), [implementation timeframes](https://www.digital.gov.au/ai/AI-in-government-policy/implementation), [AI use-case impact assessment](https://www.digital.gov.au/ai/ai-in-government-policy/ai-use-case-impact-assessment).

<!-- TODO: Human-verify current DTA policy version, implementation dates and agency scope before publication. -->

## Current proposals and inquiries

### Proposed Australian Standards for AI

On **15 July 2026**, the Australian Government announced plans for a legislated framework initially described in terms of large data centres and AI training. The proposal includes energy, connection-cost, grid-support and water-efficiency expectations for large data centres. The Office of AI was established in the Department of the Prime Minister and Cabinet to coordinate work.

At 22 August 2026, no bill, exposure draft, threshold for “large” facilities, final regulator model or published National Cabinet outcome was identified. Existing laws continue to apply.

Official sources: [Prime Minister's announcement](https://www.pm.gov.au/media/ai-australias-interests), [PM&C Office of AI](https://www.pmc.gov.au/domestic-policy/office-ai).

<!-- TODO: Human-verify whether National Cabinet has considered the proposal and whether draft legislation or consultation material has been published before publication. -->

### Senate inquiry into Artificial Intelligence and Data Centres

The Senate Environment and Communications References Committee inquiry was referred on **13 May 2026**. Submissions close on **1 September 2026** and the committee is due to report on **16 November 2026**. An inquiry does not itself create legal duties.

Official source: [Parliament of Australia inquiry page](https://www.aph.gov.au/search/url/Inquiry/27377_34_).

<!-- TODO: Human-verify the submission and reporting dates and add any report or government response published after 22 August 2026 before publication. -->

### Victorian workplace-surveillance proposal

On **20 July 2026**, the Victorian Government announced that Labor would introduce workplace-surveillance protections concerning notice and consultation, legitimate purpose, biometrics, discrimination, access to data and human review of significant automated decisions. The announcement uses prospective language. No corresponding bill was identified on the Victorian legislation register at 22 August 2026.

This is separate from the Australian Government's **AI consumer safety priorities** announced the same day. The federal item identifies workplace AI safety as a forum priority; it does not announce a joint Commonwealth–Victoria workplace-surveillance bill.

Official sources: [Victorian workplace-surveillance announcement](https://www.premier.vic.gov.au/big-tech-must-stop-spying-workers-work), [Victorian Government workplace-surveillance response](https://www.vic.gov.au/workplace-surveillance), [Australian Government AI consumer safety priorities](https://ministers.ag.gov.au/media-centre/ai-consumer-safety-priorities-20-07-2026).

<!-- TODO: Human-verify whether a Victorian bill has been introduced and whether the proposal changed after 22 August 2026 before publication. -->

### Victorian online-platform proposal

On **19 July 2026**, the Victorian Government announced proposed VCAT powers to identify anonymous accounts in vilification matters and proposed removal of the 10% permanent psychiatric-impairment threshold for claims by minors against social-media or AI platforms. The announcement said targeted consultation would occur. No corresponding bill was identified on the Victorian legislation register at 22 August 2026.

Official source: [Victorian online-platform announcement](https://www.premier.vic.gov.au/big-tech-must-prevent-hate-and-keep-kids-safe).

<!-- TODO: Human-verify bill status, consultation and final legal scope before publication. -->

### South Australian Royal Commission into Artificial Intelligence

On **11 August 2026**, the South Australian Government announced that it would establish a Royal Commission into Artificial Intelligence. The announcement says a panel of commissioners is intended, the commission is intended to commence on **1 October 2026**, and a final report is intended no later than **1 July 2027**. Terms of reference were still to be developed.

The official announcement does not state that exactly three commissioners will be appointed and does not specify a $3 million cost. Those secondary-source details have therefore not been included.

Official source: [South Australian Department of the Premier and Cabinet](https://www.dpc.sa.gov.au/news/royal-commission-into-artificial-intelligence-announced).

<!-- TODO: Human-verify the final terms of reference, appointments, commencement and submission process before publication. -->

## Practical legal-governance checklist

1. Record the system, purpose, users, affected people, decisions, data and jurisdictions.
2. Identify current laws and regulators before considering voluntary AI frameworks.
3. Distinguish enacted, commenced law from bills, exposure drafts, announcements and inquiries.
4. Test for privacy, consumer, discrimination, safety, IP and sector risks at design and deployment.
5. Require supplier evidence, human accountability, incident handling, monitoring, challenge and correction.
6. Recheck official sources before launch and on each material system or legal change.

!!! info "Related guidance"
    See [Australian Government AI Policy and Frameworks](ai-government-policy-frameworks.md), [AI Data Centres and Compute Governance](ai-data-centres-compute-governance.md), [Guidance for AI Adoption (AI6)](guidance-for-ai-adoption-ai6.md) and [State and Territory AI Resources](/business-resources/state-territory-ai-resources/).

??? note "Disclaimer & Licence"
    **Disclaimer:** This page provides general information, not legal advice. Verify current legislation, commencement information and regulator guidance and obtain qualified advice for your circumstances.

    **Licence:** Licensed under [Creative Commons Attribution 4.0 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). You are free to copy, adapt and redistribute with attribution: *"Source: SafeAI-Aus (safeaiaus.org)"*
