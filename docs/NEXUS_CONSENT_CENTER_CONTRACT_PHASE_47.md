# Nexus Consent Center Contract - Phase 47

Status: inert consent record contract; no consent store, no live consent UI, no execution authority.

Phase 47 defines how Nexus should model future purpose-scoped consent records before any durable consent center, live provider handoff, regulated workflow, or high-risk action can rely on consent. It is a contract and QA phase only.

This phase does not create a consent store, persist consent records, display a live consent center, record runtime consent, revoke external provider consent, contact providers, access medical records, share location, process payments, dispatch emergency help, mutate accounts, or change backend behavior.

## Roadmap Alignment

Roadmap row:

`Phase 47 | Consent center | Manage consent by purpose | consent records | future | high | consent store | scoped consent audit | consent QA | consent revocable`

Phase 47 prepares the record model and QA boundaries that a future consent center must satisfy.

## Consent Record Statuses

- `not_configured`
- `notice_required`
- `explicit_consent_required`
- `scoped_consent_required`
- `audit_policy_required`
- `revocation_path_required`
- `retention_policy_required`
- `provider_policy_required`
- `approved_not_live`
- `revoked`
- `expired`
- `rejected_or_blocked`
- `inactive`

`approved_not_live` means consent policy may be reviewed, but runtime consent authority and live actions remain disabled until a later phase explicitly adds a reviewed consent store and execution gates.

## Consent Purpose Categories

- `temporary_session_context`
- `profile_personalization`
- `provider_contact`
- `health_access`
- `telehealth_handoff`
- `pharmacy_refill_handoff`
- `medical_records_access`
- `location_sharing`
- `transportation_request`
- `payment_authorization`
- `marketplace_contact`
- `workforce_application`
- `emergency_partner_handoff`
- `restricted_consent_boundary`

These categories are descriptive. They must not imply consent was recorded, a provider was contacted, data was shared, payment was authorized, location was shared, or emergency help was dispatched.

## Contract Fields

- `consentRecordId`
- `subjectRef`
- `purposeCategory`
- `consentStatus`
- `scope`
- `sourceSurface`
- `supportedLanguages`
- `noticeStatus`
- `auditPolicyStatus`
- `revocationPathStatus`
- `retentionPolicyStatus`
- `providerPolicyStatus`
- `freshnessModel`
- `allowedResponseStates`
- `scopedConsentGate`
- `revocationGate`
- `auditRequirements`
- `auditEvent`
- `consentStoreEnabled`
- `consentPersistenceEnabled`
- `runtimeConsentAuthorityEnabled`
- `providerContactEnabled`
- `paymentExecutionEnabled`
- `emergencyDispatchEnabled`
- `liveActionEnabled`
- `noExecution`

## Scoped Consent Gate

The `scopedConsentGate` must require:

- `requiresPlainLanguageNotice`
- `requiresPurposeSpecificScope`
- `requiresExplicitUserApproval`
- `requiresMinimumNecessaryData`
- `requiresSensitiveDataReview`
- `requiresProviderPolicyReview`
- `requiresAuditLogging`
- `requiresRevocationPath`
- `requiresNoFirstTurnExecution`

The scoped consent gate must keep these false by default:

- `allowsProviderContact`
- `allowsHealthAction`
- `allowsMedicalRecordAccess`
- `allowsLocationSharing`
- `allowsPaymentExecution`
- `allowsEmergencyDispatch`
- `allowsExternalNavigation`

## Revocation Gate

The `revocationGate` must require:

- `requiresUserVisibleControl`
- `requiresRevocationAudit`
- `requiresProviderRevocationBoundary`
- `requiresRetentionPolicy`
- `requiresNoExecutionOnRevoke`

The revocation gate must keep these false by default:

- `allowsProviderCancellation`
- `allowsExternalDeletion`
- `allowsAccountMutation`
- `allowsPaymentReversal`
- `allowsEmergencyCancellation`

## No-Execution Defaults

The contract must keep:

- `consentStoreEnabled: false`
- `consentPersistenceEnabled: false`
- `consentUiEnabled: false`
- `runtimeConsentAuthorityEnabled: false`
- `providerContactEnabled: false`
- `healthActionEnabled: false`
- `telehealthActionEnabled: false`
- `pharmacyActionEnabled: false`
- `medicalRecordAccessEnabled: false`
- `locationSharingEnabled: false`
- `transportationDispatchEnabled: false`
- `paymentExecutionEnabled: false`
- `marketplaceTransactionEnabled: false`
- `workforceSubmissionEnabled: false`
- `emergencyDispatchEnabled: false`
- `accountMutationEnabled: false`
- `externalNavigationEnabled: false`
- `liveActionEnabled: false`
- `consentRecorded: false`
- `consentRevoked: false`
- `providerContacted: false`
- `healthActionPerformed: false`
- `telehealthActionPerformed: false`
- `pharmacyActionPerformed: false`
- `medicalRecordAccessed: false`
- `locationShared: false`
- `transportationDispatched: false`
- `paymentExecuted: false`
- `marketplaceTransactionCompleted: false`
- `workforceApplicationSubmitted: false`
- `emergencyDispatched: false`
- `accountMutated: false`
- `externalActionExecuted: false`
- `noExecution: true`

## Audit Event Fields

- `eventType`
- `consentRecordId`
- `purposeCategory`
- `consentStatus`
- `scope`
- `sourceSurface`
- `consentStoreEnabled`
- `consentPersistenceEnabled`
- `runtimeConsentAuthorityEnabled`
- `providerContactEnabled`
- `paymentExecutionEnabled`
- `emergencyDispatchEnabled`
- `noExecution`
- `createdAt`

Audit events must not include passwords, tokens, full identity documents, medical records, prescriptions, raw health details, full phone numbers, precise location, payment details, emergency contact details, marketplace party details, provider credentials, or executable provider payloads.

## Existing Runtime Alignment

The current session-memory reset/consent plan already states that memory consent is not consent to execute. Existing health consent workflow behavior remains separate and unchanged. Phase 47 does not replace or authorize those workflows.

## Runtime Boundary

The Phase 47 module must not be loaded by `public/index.html`, consumed by `public/app.js`, or consumed by `server.js`. Normal static-file availability is acceptable, but no runtime hook, dynamic import, route handler, consent store, storage write, consent UI, provider adapter, permission prompt, provider contact, payment path, health action, location sharing, transportation dispatch, emergency dispatch, account mutation, external navigation, or execution behavior may be introduced.

## User-Facing Language Boundary

Nexus may say an action requires purpose-specific consent, a reviewed consent store, audit logging, revocation controls, provider policy review, or explicit approval. Nexus must not say consent was recorded, revoked, persisted, shared, or used to execute a real action unless a later approved consent runtime phase enables that behavior.

## QA Expectations

`scripts/nexus-consent-center-contract-qa.js` verifies:

- the Phase 47 roadmap row remains present;
- existing memory consent docs still separate consent from execution authority;
- the contract exports required statuses, purpose categories, fields, gates, audit fields, and no-execution defaults;
- created consent records are frozen and force unsafe overrides back to disabled;
- no consent store, persistence, consent UI, provider API, permission prompt, storage write, external navigation, or execution behavior exists;
- the module is not wired into `index.html`, `app.js`, or `server.js`;
- package and QA suite entries include the new local-safe QA guard.

## Future Work

Later phases may add a reviewed consent center only after consent language, purpose scoping, revocation behavior, retention policy, privacy review, audit logging, role policy, provider policy, and explicit user approval are complete. Consent records must remain separate from execution authority.
