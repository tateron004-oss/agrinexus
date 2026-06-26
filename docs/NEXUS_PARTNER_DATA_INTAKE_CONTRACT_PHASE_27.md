# Nexus Partner Data Intake Contract Phase 27

Phase: 27 - Partner data intake
Roadmap row: "Accept partner operational feeds safely"
Status: inert intake schema and sandbox contract, no partner feed ingestion, no live connector

## Purpose

Phase 27 defines how Nexus should receive partner-provided operational data in future phases without trusting it blindly or using it for live action before review. Partner data can eventually support provider directories, clinic availability, mobile clinic schedules, pharmacy resources, transportation resources, workforce programs, agriculture resources, and community services, but it must enter through a controlled intake contract.

This phase does not create upload endpoints, ingest files, call partner APIs, store partner data, validate credentials, contact providers, update directories, share user data, request permissions, or execute actions.

## Contract Module

The inert contract module is:

- `public/nexus-partner-data-intake-contract.js`

The module defines:

- partner intake statuses;
- allowed partner feed types;
- required intake record fields;
- sandbox review requirements;
- approval gate requirements;
- no-execution defaults;
- a local helper for creating a frozen partner intake record.

The module is not loaded by `public/index.html`, `public/app.js`, or `server.js`.

## Partner Intake Statuses

Allowed intake statuses:

- `draft`;
- `received_not_processed`;
- `schema_review_required`;
- `terms_review_required`;
- `source_verification_required`;
- `sandbox_only`;
- `approved_for_source_backed_guidance`;
- `rejected_or_blocked`;
- `inactive`.

Status rules:

- `draft` and `received_not_processed` must not be used for answers.
- `schema_review_required` must remain sandbox-only until required fields are checked.
- `terms_review_required` must remain sandbox-only until data rights are reviewed.
- `source_verification_required` must remain sandbox-only until the partner/source owner is verified.
- `sandbox_only` may support internal review but not user-facing source-backed claims.
- `approved_for_source_backed_guidance` may support future source-backed answers only after freshness, terms, and audit requirements are present.
- `rejected_or_blocked` and `inactive` must not support user-facing source-backed answers.

## Partner Feed Types

Allowed partner feed types:

- `provider_directory`;
- `clinic_availability`;
- `telehealth_availability`;
- `mobile_clinic_schedule`;
- `pharmacy_directory`;
- `prescription_workflow_metadata`;
- `transportation_resource`;
- `workforce_program`;
- `agriculture_resource`;
- `community_service_resource`;
- `marketplace_partner_catalog`;
- `education_content`;
- `medical_records_metadata`;
- `payment_provider_metadata`;
- `emergency_resource_directory`.

Partner feeds that include regulated, medical, payment, identity, location, contact, or emergency data must remain disabled for execution until compliance, consent, provider confirmation, and audit logging are approved.

## Partner Intake Record Fields

Each future partner intake record should include:

- `intakeId`;
- `partnerName`;
- `partnerType`;
- `feedType`;
- `intakeStatus`;
- `sourceOwner`;
- `sourceType`;
- `integrationMethod`;
- `schemaVersion`;
- `expectedFields`;
- `providedFields`;
- `missingFields`;
- `termsStatus`;
- `dataRightsStatus`;
- `authenticationRequirements`;
- `consentRequirements`;
- `permissionRequirements`;
- `complianceRequirements`;
- `freshnessModel`;
- `sandboxReview`;
- `approvalGate`;
- `auditRequirements`;
- `liveActionEnabled`;
- `userApprovalRequired`;
- `providerConfirmationRequired`;
- `noExecution`.

## Sandbox Review Requirements

Every partner feed must enter a sandbox review state before it can support source-backed answers. Sandbox review should capture:

- `schemaValidationStatus`;
- `requiredFieldCoverage`;
- `sourceOwnerVerification`;
- `termsReview`;
- `freshnessRuleReview`;
- `privacyReview`;
- `complianceReview`;
- `regulatedDataClassification`;
- `auditReadiness`;
- `approvalDecision`.

Sandbox review must not ingest live data into user-facing answers, trigger provider contact, schedule care, send messages, process payment, access records, share location, dispatch emergency services, or execute marketplace behavior.

## Approval Gate Requirements

Each future approval gate should include:

- `requiresAdminApproval`;
- `requiresPartnerAgreement`;
- `requiresComplianceReview`;
- `requiresSecurityReview`;
- `requiresAuditReadiness`;
- `allowsSourceBackedGuidance`;
- `allowsLiveAction`;
- `approvedBy`;
- `approvedAt`.

The default approval gate must keep `allowsSourceBackedGuidance: false` and `allowsLiveAction: false`.

## No-Execution Defaults

Partner intake records are source onboarding context, not execution authority. They must default to:

- `noExecution: true`;
- `liveActionEnabled: false`;
- `providerContacted: false`;
- `userDataShared: false`;
- `externalActionExecuted: false`;
- `paymentExecuted: false`;
- `marketplaceTransactionExecuted: false`;
- `medicalRecordAccessed: false`;
- `prescriptionSubmitted: false`;
- `emergencyDispatched: false`;
- `locationShared: false`;
- `callOrMessageSent: false`.

## User-Facing Boundary

Future responses based on partner data should say:

- "requires partner approval";
- "source is in sandbox review";
- "not connected yet";
- "requires verified partner data";
- "requires consent and audit logging";
- "I cannot execute that action until the required connector and approval are active."

Nexus must not claim partner data is live, verified, approved, current, or action-enabled unless the intake record has passed the appropriate review gates.

## QA Expectations

QA must verify:

- required intake statuses are defined;
- required feed types are defined;
- required intake record fields exist;
- sandbox review requirements exist;
- approval gate defaults disable source-backed guidance and live action;
- no-execution and dangerous action flags default safely;
- no upload endpoint, network call, partner API call, storage write, provider adapter, permission prompt, navigation, or execution behavior exists;
- Standard User runtime files do not import or load the module;
- Phase 24, Phase 25, and Phase 26 contracts remain present.

## Future Work

Later phases may add a sandbox-only intake validator or admin review workflow after source ownership, data rights, authentication, consent, compliance, audit, and security requirements are reviewed. Partner data must not unlock provider contact, regulated action, payment, location sharing, medical access, emergency dispatch, marketplace execution, call, or message behavior by itself.
