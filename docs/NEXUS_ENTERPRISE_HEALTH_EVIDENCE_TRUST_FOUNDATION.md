# Nexus Enterprise Health Evidence Trust Foundation

## Purpose

Nexus now has a shared `HealthEvidenceTrustService` foundation for medical, behavioral-health, chronic-care, public-health, provider, pharmacy, telehealth, RPM/RTM, laboratory, medication, and social-care workflows.

This foundation is not a clinical endorsement system. It is an inspectable governance layer that shows which sources, evidence tiers, jurisdiction limits, predictive-model gates, and professional-review requirements must be satisfied before Nexus presents source-backed medical guidance or predictive health support.

## Runtime Components

- Browser/server runtime: `public/nexus-enterprise-health-evidence-trust.js`
- Status endpoint: `GET /api/nexus/health-evidence/status`
- Source registry endpoint: `GET /api/nexus/health-evidence/sources`
- Evidence inspector endpoint: `POST /api/nexus/health-evidence/inspect`
- Source verification endpoint: `POST /api/nexus/health-evidence/source/verify`
- Governance feedback endpoint: `POST /api/nexus/health-evidence/feedback`
- Predictive governance endpoint: `POST /api/nexus/health-evidence/predictive-governance`
- Standard User command routing: evidence, guideline, source trust, medication evidence, lab evidence, diabetes evidence, hypertension evidence, obesity evidence, RPM/RTM evidence, predictive health governance, calculator, model-validation, and risk-score commands.

## Evidence Hierarchy

The service implements seven evidence tiers:

1. Tier 1A: controlling jurisdictional authority.
2. Tier 1B: international public-health authority.
3. Tier 2: formal clinical-practice guideline.
4. Tier 3: systematic evidence synthesis.
5. Tier 4: peer-reviewed primary evidence.
6. Tier 5: professional implementation resource.
7. Tier 6: patient/caregiver education.
8. Tier 7: provider/service directory.

Provider and service directories are explicitly labeled as directory records only. Directory inclusion does not prove quality, suitability, availability, licensure, or successful booking.

## Seeded Source Records

The first source registry includes WHO, CDC, NIH, FDA, CMS, AHRQ, NICE, NHS, EMA, Cochrane, SAMHSA, and NPI.

Each source record includes:

- source id
- organization name
- evidence tier
- jurisdiction
- applicable domains
- canonical URL
- version monitoring requirement
- licensing review requirement
- governance approval requirement

The service does not claim a source is current, clinically activated, or locally controlling until version, jurisdiction, and governance review are completed.

## Live Source Verification And Evidence Inspector

Nexus now carries a source verification contract for canonical URL checks, trusted-domain validation, redirect review, aging review, supersession, withdrawal, licensing limits, jurisdiction limits, population limits, translation status, and provider-directory freshness. Live network verification is default-off and only runs when `NEXUS_HEALTH_SOURCE_LIVE_VERIFICATION_ENABLED=true` and the verification request explicitly asks for live checking.

Verification states include `verified_current`, `verified_current_local_adaptation`, `verified_aging`, `review_due`, `pending_professional_review`, `superseded`, `withdrawn`, `unavailable`, `redirected`, `redirect_changed`, `jurisdiction_mismatch`, `population_mismatch`, `license_restricted`, `translation_unverified`, `content_changed`, `provider_verification_expired`, and `provider_status_unknown`.

Nexus must not silently use sources that are withdrawn, superseded, redirected to an untrusted destination, unavailable, out of jurisdiction, out of population, license restricted, translation unverified, content changed without review, or provider verification expired. Those states require explicit review before the source can support user-facing health guidance.

The evidence inspector has two roles:

- Standard User view: publisher, source title, currentness status, limitations, professional-review reminder, and patient-safe explanation.
- Professional view: complete citation fields, version/currentness checks, recommendation-strength placeholders, conflict review, governance requirements, and explicit note that Nexus does not claim qualified professional review.

Feedback types such as incorrect citation, outdated source, wrong jurisdiction, conflicting guideline, translation concern, accessibility issue, provider data issue, laboratory concern, medication concern, model concern, and safety concern are queued for governance review. Feedback records do not claim professional review, do not contact providers, and do not authorize external execution.

## Domain Evidence Maps

The foundation includes seeded evidence maps for:

- diabetes
- hypertension
- obesity
- RPM/RTM
- mental health
- medication
- laboratory
- telehealth
- pharmacy
- social care

Each map defines supported uses, prohibited uses, professional boundaries, emergency override requirements, and activation status.

## Predictive Health Governance

The predictive model registry currently supports governance records for:

- descriptive chronic-care trend review
- crisis/emergency language override
- cardiovascular risk-score placeholder
- medication evidence safety review

Predictive outputs remain descriptive unless model validation, intended population, formula/source version, bias/performance review, human professional review, and regulatory classification gates are satisfied.

## Enterprise Health Governance Registries

Nexus now exposes an implementation-grade governance registry packet at `GET /api/nexus/health-evidence/registries`. The packet expands the health evidence foundation beyond source inspection into the registries required for a professional health, social-care, and provider-trust workspace.

The canonical source registry now includes medical, public-health, medication, laboratory, terminology, crisis, provider-directory, health-center, and social-care authorities such as USPSTF, ADA, AHA, ACOG, AAP, APA, KDIGO, GOLD, GINA, 988, Findhelp, HRSA, LOINC, SNOMED, RxNorm, and HL7/FHIR references. These records are source-ready only; live freshness and local jurisdiction authority still require verification.

Domain evidence maps now cover chronic care, diabetes, hypertension, obesity, cardiometabolic support, kidney, respiratory, RPM/RTM, mental health, behavioral wellness, crisis safety, medication, medication safety, laboratory, diagnostic imaging, screening, maternal/child health, youth/vulnerable populations, telehealth, mobile clinic, pharmacy, provider directory, health center, FHIR records, social care, and transportation-to-care. Each map includes supported uses, prohibited uses, professional boundaries, emergency override requirements, and activation status.

The clinical calculator registry governs BMI, blood-pressure category support, A1C context support, eGFR context support, ASCVD risk readiness, PHQ-9, GAD-7, C-SSRS style suicide-risk screening governance, and pregnancy danger-sign checklist support. These calculators are not execution-authorized in Standard User runtime. They may only organize inputs, explain missing data, and prepare professional-review packets until formula version, intended population, clinical approval, and audit controls are satisfied.

The verified provider trust registry defines verification requirements for physician/clinic, telehealth, pharmacy, mobile clinic, crisis resource, and social-service organization categories. Provider contact, appointment/referral requests, pharmacy handoffs, mobile clinic dispatch, and social-care sharing remain blocked until identity, license/source checks, user approval, provider confirmation where required, and audit logging are present.

The FHIR and clinical terminology contract lists Patient, Observation, Condition, MedicationStatement, MedicationRequest, ServiceRequest, Encounter, CarePlan, DocumentReference, Consent, and Provenance as governed resource categories. Nexus does not access, write, or export medical records through this registry unless a configured connector, identity proofing, role authorization, consent, and audit receipt are active.

Consent and privacy governance requires explicit approval before provider sharing, FHIR access, pharmacy handoff, appointment/referral request, social-care sharing, messages/calls, or export. User rights include view, correction, export, revocation, deletion of local copies where permitted, and audit-trail visibility.

Accessibility and localization governance covers plain language, low literacy, multilingual labels, voice fallback, caption fallback, low-bandwidth behavior, offline packets, and cultural adaptation review. Nexus does not claim certified clinical interpretation or live source freshness while offline.

## Professional Workspace And Human Review Controls

Nexus now exposes human-review control packets through `POST /api/nexus/health-evidence/human-review` and Standard User commands such as "show human review controls for pharmacy." The packet selects a review queue, professional role boundary, required checks, decision states, and blocked execution states.

Governed professional workspace roles include physician, pharmacist, behavioral-health professional, nurse/CHW, social-care reviewer, and governance administrator. Each role has explicit review authority and prohibited authority. No role can bypass user consent or audit requirements.

Governed review queues include clinical evidence, medication/pharmacy, laboratory/diagnostic, behavioral/crisis, social-care, and FHIR record review. Review can approve education packets or provider-ready summaries, but it cannot authorize diagnosis, prescribing, medication change, provider submission, medical-record access, emergency dispatch, or consent bypass without the required connector, human approval, and audit gates.

## Standard User Behavior

When a user asks for health evidence, source trust, guideline inspection, or predictive health governance, Nexus creates a visible professional evidence inspector packet.

Nexus may show:

- domain
- mapped sources
- evidence tiers
- predictive governance records
- professional review requirement
- audit receipt
- limitations

Nexus must not show:

- diagnosis
- prescribing
- medication changes
- provider contact claims
- emergency dispatch claims
- fake citations
- fake model validation
- fake regulatory approval
- fake clinical endorsement

## Safety Boundary

The service is read-only and preparation-only in this phase. It does not execute live provider actions, contact providers, dispatch emergency services, alter medication, or store sensitive health data by itself.

Nexus does not diagnose, prescribe, treat, change medication, replace clinical judgment, or certify emergency status through this service.

All professional action remains attributable to qualified humans. Nexus can prepare evidence packets and governance receipts; it does not become the final medical authority.
