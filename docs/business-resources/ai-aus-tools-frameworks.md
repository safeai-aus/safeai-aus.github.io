---
layout: page
title: "Tools & Frameworks"
description: Overview of the AI related tools and frameworks to assist in safe and scaleable AI implementations for Australian business.
---

# Tools & Frameworks

A curated list of practical tools, frameworks, and resources to help Australian businesses implement AI safely and responsibly.

Scope: Non-commercial resources only (government, standards bodies, nonprofits, and open-source). How to use: Start with frameworks, set governance, then implement technical controls and monitoring.

Last updated: 2025-08-16 · Owner: SafeAI Aus

---

## 1) AI Risk & Ethics Frameworks
- **Australian Government AI Ethics Principles** – 8 principles guiding ethical AI use. ([industry.gov.au](https://industry.gov.au/ai-ethics))
- **Voluntary AI Safety Standard (10 Guardrails)** – published 2024, aligns with ISO/IEC 42001 and NIST AI RMF. ([industry.gov.au](https://www.industry.gov.au/publications/voluntary-ai-safety-standard))
  - Note: The Guardrails explicitly align with ISO/IEC 42001:2023 and the NIST AI Risk Management Framework 1.0.
- **National framework for the assurance of AI in government (DTA)** – how agencies assure AI systems. ([dta.gov.au](https://www.dta.gov.au/guidance-and-tools/assurance/national-framework-assurance-ai-government))
- **NIST AI Risk Management Framework (AI RMF 1.0)** – comprehensive, sector-agnostic guidance. ([nist.gov](https://www.nist.gov/itl/ai-risk-management-framework))
- **NIST Generative AI Risk Management Profile** – profile for GenAI use cases. ([nist.gov](https://www.nist.gov/itl/ai-risk-management-framework/generative-ai-profile))
- **ISO/IEC 23894** – AI risk management guidance. ([iso.org](https://www.iso.org/standard/77304.html))
- **ISO/IEC 42001** – AI management system (AIMS) requirements. ([iso.org](https://www.iso.org/standard/81230.html))
- **OECD AI Principles** – intergovernmental principles for trustworthy AI. ([oecd.ai](https://oecd.ai/en/ai-principles))
- **Singapore Model AI Governance Framework** – practical implementation guidance. ([pdpc.gov.sg](https://www.pdpc.gov.sg/help-and-resources/2020/01/model-ai-governance-framework))

## 2) Governance & Policy Tools
- **Privacy Impact Assessments (PIAs)** – OAIC guidance on conducting PIAs. ([oaic.gov.au](https://www.oaic.gov.au/privacy/privacy-guidance-and-resources/privacy-impact-assessments))
- **NSW Artificial Intelligence Assessment Framework** – NSW's method for assessing AI; assurance is now embedded in the Digital Assurance Framework. ([digital.nsw.gov.au](https://www.digital.nsw.gov.au/policy/artificial-intelligence/ai-assessment-framework))
- **ASD Essential Eight** – baseline mitigation strategies. ([cyber.gov.au](https://www.cyber.gov.au/resources-business-and-government/essential-eight))
- **Notifiable Data Breaches (NDB) Scheme** – reporting obligations. ([oaic.gov.au](https://www.oaic.gov.au/privacy/notifiable-data-breaches))
- **Australian Privacy Principles (APPs)** – core privacy obligations. ([oaic.gov.au](https://www.oaic.gov.au/privacy/australian-privacy-principles))

## 3) Technical Testing & Monitoring
- **Model Cards** – documentation standard for AI models. ([arXiv](https://arxiv.org/abs/1810.03993))
- **Datasheets for Datasets** – dataset transparency and quality control. ([arXiv](https://arxiv.org/abs/1803.09010))
- **Aequitas** – open-source bias/fairness audit toolkit. ([github.com](https://github.com/dssg/aequitas))
- **Fairlearn** – open-source fairness assessment and mitigation. ([fairlearn.org](https://fairlearn.org/))
- **NIST AI RMF Playbook (TEVV)** – testing, evaluation, verification, and validation resources. ([airc.nist.gov](https://airc.nist.gov/Playbook))

## 4) Privacy & Security
- **Differential Privacy** – OpenDP, OpenMined community resources. ([opendp.org](https://opendp.org/), [OpenMined](https://github.com/OpenMined))
- **Homomorphic Encryption** – OpenFHE library and docs. ([openfhe.org](https://openfhe.org/))
- **Confidential Computing** – architecture patterns and use cases (Consortium). ([confidentialcomputing.io](https://confidentialcomputing.io/))
- **Data anonymisation** – ARX, Amnesia, sdcMicro (open-source). ([arx.deidentifier.org](https://arx.deidentifier.org/), [amnesia.openaire.eu](https://amnesia.openaire.eu/), [github.com/sdcTools/sdcMicro](https://github.com/sdcTools/sdcMicro))

## 5) Explainability & Transparency
- **LIME** – local interpretable model-agnostic explanations. ([github.com](https://github.com/marcotcr/lime))
- **SHAP** – Shapley value–based feature importance. ([github.com](https://github.com/shap/shap))
- **DALEX** – model exploration and explanations. ([github.com](https://github.com/ModelOriented/DALEX))

## 6) Continuous Monitoring & Ops
- **MLflow** – experiment tracking and model registry. ([mlflow.org](https://mlflow.org/))
- **Prometheus** – metrics collection for model/service health. ([prometheus.io](https://prometheus.io/))
- **Kubeflow** – open-source MLOps on Kubernetes. ([kubeflow.org](https://www.kubeflow.org/))

## 7) LLM Application Safety & Secure Development
- **OWASP Top 10 for LLM Applications** – common risks and mitigations. ([owasp.org](https://owasp.org/www-project-top-10-for-large-language-model-applications/))
- **OWASP AI Security & Privacy Guide** – secure AI development guidance. ([owasp.org](https://owasp.org/www-project-ai-security-and-privacy-guide/))
- **MITRE ATLAS** – adversary tactics/techniques/mitigations for ML systems. ([atlas.mitre.org](https://atlas.mitre.org/))
- **Guidelines for Secure AI System Development** – joint guidance (UK NCSC, CISA and partners). ([ncsc.gov.uk](https://www.ncsc.gov.uk/guidance/guidelines-for-secure-ai-system-development))

## 8) RAG Evaluation & QA (Open-source)
- **ragas** – evaluation for retrieval-augmented generation. ([github.com](https://github.com/explodinggradients/ragas))

## 9) Serving & Data Infrastructure (Open-source)
- **KServe** – model serving on Kubernetes. ([kserve.github.io](https://kserve.github.io/))
- **Feast** – feature store. ([docs.feast.dev](https://docs.feast.dev/))

## 10) Procurement & Vendor Risk (Checklist)
- **Data**: classification, residency, retention, cross-border flows, deletion lifecycle.
- **Privacy**: APPs alignment, DPIAs/PIAs, purpose limitation, de-identification controls.
- **Security**: ASD Essential Eight maturity, vulnerability management, incident response, logging.
- **Governance**: model documentation (Model Card), dataset documentation (Datasheet), access controls.
- **Evaluation**: fairness, robustness, performance evidence; TEVV plan and metrics.
- **Compliance**: ISO/IEC 42001 readiness; ISO/IEC 27001 controls. ([iso.org](https://www.iso.org/isoiec-27001-information-security.html))
- **Contracts**: DPAs, IP/licensing, data ownership, third-party subprocessor transparency, exit plan.

### 📚 Further Reading
- [Voluntary AI Safety Standard – 10 Guardrails](https://www.industry.gov.au/publications/voluntary-ai-safety-standard)
- [Australian AI Ethics Principles](https://industry.gov.au/ai-ethics)
- [OAIC – AI and Privacy guidance](https://www.oaic.gov.au)
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [NIST SP 1270 – Identifying and Managing Bias in AI](https://doi.org/10.6028/NIST.SP.1270)
- [OECD AI Principles](https://oecd.ai/en/ai-principles)
- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [ASD Essential Eight](https://www.cyber.gov.au/resources-business-and-government/essential-eight)
