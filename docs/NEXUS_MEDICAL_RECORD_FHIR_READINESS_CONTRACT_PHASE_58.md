# Nexus Medical Record/FHIR Readiness Contract

Phase: 58 - Medical record/FHIR workflow
Status: inert readiness contract and deterministic QA only
Related roadmap row: `| Phase 58 | Medical record/FHIR workflow | Access records with authorization | FHIR connector | future | restricted | FHIR/EHR provider | identity/scoped consent | FHIR QA | redacted access only |`

## Scope Decision

Phase 58 does not access, fetch, store, translate, summarize, share, export, or transmit medical records. It does not create SMART-on-FHIR authorization, OAuth token exchange, EHR integration, patient portal login, provider record request, record-sharing packet, or clinical data viewer.

This phase creates the readiness contract that must be satisfied before Nexus may support future medical record or FHIR workflows.

This phase does not activate:

- live FHIR connector behavior
- EHR or patient portal access
- SMART-on-FHIR authorization
- OAuth token exchange
- medical record retrieval
- medical record storage
- medical record sharing
- clinical note summarization
- diagnostic interpretation
- prescription action
- provider contact
- payment
- emergency dispatch
- Standard User runtime medical record access
- storage or network side effects
- backend behavior changes

## Contract Artifact

The inert contract lives in:

- `public/nexus-medical-record-fhir-readiness-contract.js`

It is intentionally not loaded by `public/index.html`, not consumed by `public/app.js`, and not wired by `server.js`.

## Default Readiness Posture

The default contract keeps medical record and FHIR access disabled:

- `phase: "58"`
- `riskTier: "restricted"`
- `readinessStatus: "blocked"`
- `fhirConnectorEnabled: false`
- `ehrAccessEnabled: false`
- `smartOnFhirEnabled: false`
- `oauthTokenExchangeEnabled: false`
- `medicalRecordRetrievalEnabled: false`
- `medicalRecordStorageEnabled: false`
- `medicalRecordSharingEnabled: false`
- `clinicalSummarizationEnabled: false`
- `diagnosticInterpretationEnabled: false`
- `standardUserRecordAccessAllowed: false`
- `executionAllowed: false`
- `liveActionEnabled: false`

Nexus may explain what would be required for future record access, but it must not claim that records were accessed or shared.

## Required Preconditions Before Record Access

Before any future medical record or FHIR access can be enabled, Nexus must verify and visibly present:

- `verifiedPatientIdentity`
- `resolvedRecordSubject`
- `authorizedRequestingRole`
- `visibleRecordScope`
- `visibleRecordSource`
- `visibleDataCategories`
- `minimumNecessaryPurpose`
- `scopedPatientConsent`
- `providerAuthorization`
- `fhirServerTrust`
- `oauthScopeReview`
- `permissionState`
- `complianceState`
- `redactionPolicy`
- `retentionPolicy`
- `auditEvent`
- `explicitFinalUserApproval`
- `cancellationPath`
- `noSilentRecordAccess`
- `noHiddenRecordSharing`

## Redacted Access Boundary

Future access must be scoped, redacted, and purpose-limited. Full raw records, diagnosis details, medication lists, identifiers, notes, lab results, images, and provider messages must not be displayed or transmitted unless the specific connector, consent, role, scope, compliance review, and audit event allow it.

## Restricted Domain Rules

Additional restrictions apply to:

- `medical_records`
- `fhir`
- `ehr`
- `patient_identity`
- `healthcare`
- `pharmacy`
- `provider_contact`
- `emergency`
- `payments`
- `minors_family_support`

## Standard User Expectations

The Standard User build may explain readiness requirements for medical record access, but it must not:

- access a patient portal;
- authenticate to a FHIR server;
- fetch medical records;
- display protected health information;
- share records with a provider;
- infer diagnosis from records;
- change medication or prescriptions;
- contact a provider;
- request payment;
- dispatch emergency help;
- bypass identity, consent, approval, or audit logging.

## Safe Future Copy

Approved posture:

- "Medical record access requires a verified FHIR connector, identity confirmation, scoped consent, provider authorization, and audit logging."
- "I can prepare the record-access requirements, but I cannot access or share records until the approved connector and consent are active."
- "No medical record has been accessed or shared."

Avoid:

- "I opened your chart."
- "I fetched your medical records."
- "I sent your records to the provider."
- "I reviewed your diagnosis."
- "I changed your prescription."

## QA Expectations

Phase 58 QA must verify:

- this readiness contract is present;
- FHIR and EHR access remain disabled by default;
- identity, scope, consent, provider authorization, redaction, retention, approval, and audit requirements are enumerated;
- restricted domains are documented;
- Standard User medical record access remains blocked;
- no app, server, route, FHIR, OAuth, EHR, provider, storage, network, or external-link hook was added.

Phase 58 itself remains a readiness boundary only.
