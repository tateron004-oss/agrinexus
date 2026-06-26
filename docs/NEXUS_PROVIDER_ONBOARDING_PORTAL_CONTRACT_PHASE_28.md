# Nexus Provider Onboarding Portal Contract Phase 28

Phase: 28 - Provider onboarding portal
Roadmap row: "Let providers submit source/connectors"
Status: inert provider submission contract, no portal route, no upload, no live connector

## Purpose

Phase 28 defines how a future provider onboarding portal should represent provider identity, source ownership, connector proposals, admin review, and go-live approval without making a provider live by default.

This phase does not create a portal screen, upload form, endpoint, login flow, partner API call, provider contact path, directory update, scheduling action, payment action, medical record access, emergency dispatch, location sharing, call, message, or live connector.

## Contract Module

The inert contract module is:

- `public/nexus-provider-onboarding-portal-contract.js`

The module defines:

- provider onboarding statuses;
- provider identity review states;
- connector proposal types;
- required provider submission fields;
- admin approval gate fields;
- go-live checklist fields;
- no-execution defaults;
- a local helper for creating a frozen provider onboarding submission.

The module is not loaded by `public/index.html`, `public/app.js`, or `server.js`.

## Provider Onboarding Statuses

Allowed provider onboarding statuses:

- `draft`;
- `submitted_not_reviewed`;
- `identity_review_required`;
- `source_ownership_review_required`;
- `connector_review_required`;
- `sandbox_testing_required`;
- `admin_approval_required`;
- `approved_not_live`;
- `rejected_or_blocked`;
- `inactive`.

Status rules:

- `draft` and `submitted_not_reviewed` must not affect user-facing data.
- `identity_review_required` must remain blocked until organization identity is verified.
- `source_ownership_review_required` must remain blocked until the provider/source owner is verified.
- `connector_review_required` must remain blocked until technical and data rights review is complete.
- `sandbox_testing_required` must not expose live provider actions.
- `admin_approval_required` must wait for authorized admin approval.
- `approved_not_live` may represent readiness but must still keep live action disabled until go-live is explicitly configured in a later phase.
- `rejected_or_blocked` and `inactive` must not be used for source-backed answers or actions.

## Provider Identity Review States

Allowed identity review states:

- `not_started`;
- `documents_required`;
- `organization_verification_pending`;
- `technical_contact_required`;
- `compliance_contact_required`;
- `verified`;
- `rejected`.

Identity review is not user identity verification. It verifies the provider organization and technical contacts before any provider connector can become source-ready.

## Connector Proposal Types

Allowed connector proposal types:

- `provider_directory`;
- `clinic_availability`;
- `telehealth_provider`;
- `mobile_clinic_operator`;
- `pharmacy_provider`;
- `prescription_workflow`;
- `transportation_provider`;
- `workforce_program`;
- `agriculture_extension_provider`;
- `marketplace_partner`;
- `education_content_provider`;
- `community_service_provider`;
- `payment_provider`;
- `medical_records_fhir_provider`;
- `emergency_response_partner`;
- `communications_provider`.

High-risk and regulated connector proposals must remain disabled until consent, compliance, provider confirmation, audit logging, and approval gates are complete.

## Provider Submission Fields

Each future provider onboarding submission should include:

- `submissionId`;
- `providerName`;
- `providerType`;
- `onboardingStatus`;
- `identityReviewState`;
- `connectorProposalType`;
- `sourceOwner`;
- `serviceRegions`;
- `serviceCategories`;
- `technicalContactRequired`;
- `complianceContactRequired`;
- `legalAgreementStatus`;
- `dataRightsStatus`;
- `authenticationRequirements`;
- `consentRequirements`;
- `permissionRequirements`;
- `complianceRequirements`;
- `connectorProposal`;
- `sandboxTestPlan`;
- `adminApprovalGate`;
- `goLiveChecklist`;
- `auditRequirements`;
- `sourceBackedGuidanceAllowed`;
- `liveActionEnabled`;
- `providerVisibleToUsers`;
- `userApprovalRequired`;
- `providerConfirmationRequired`;
- `noExecution`.

## Admin Approval Gate

The future admin approval gate should include:

- `requiresAdminApproval`;
- `requiresIdentityVerification`;
- `requiresSourceOwnershipVerification`;
- `requiresLegalAgreement`;
- `requiresComplianceReview`;
- `requiresSecurityReview`;
- `requiresSandboxTesting`;
- `requiresAuditReadiness`;
- `allowsProviderVisibility`;
- `allowsSourceBackedGuidance`;
- `allowsLiveAction`;
- `approvedBy`;
- `approvedAt`.

Defaults must keep:

- `allowsProviderVisibility: false`;
- `allowsSourceBackedGuidance: false`;
- `allowsLiveAction: false`.

## Go-Live Checklist

The future go-live checklist should include:

- `identityVerified`;
- `sourceOwnershipVerified`;
- `legalAgreementComplete`;
- `dataRightsApproved`;
- `securityReviewComplete`;
- `complianceReviewComplete`;
- `sandboxTestPassed`;
- `auditLoggingReady`;
- `rollbackPlanReady`;
- `adminApproved`.

No provider is live until every required item is true and a later phase explicitly enables the connector.

## No-Execution Defaults

Provider onboarding submissions are review context, not authority. They must default to:

- `noExecution: true`;
- `sourceBackedGuidanceAllowed: false`;
- `liveActionEnabled: false`;
- `providerVisibleToUsers: false`;
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

Future user-facing copy should avoid saying a provider is live, verified, available, connected, scheduled, contacted, paid, messaged, dispatched, or ready for regulated action unless the required connector and approval gates are active.

Safer wording:

- "provider onboarding is in review";
- "provider not live yet";
- "requires organization verification";
- "requires admin approval";
- "requires sandbox testing";
- "requires consent and audit logging before live action."

## QA Expectations

QA must verify:

- required onboarding statuses are defined;
- required identity review states are defined;
- required connector proposal types are defined;
- required provider submission fields exist;
- admin approval defaults block provider visibility, source-backed guidance, and live action;
- go-live checklist defaults remain false;
- no-execution and dangerous action flags default safely;
- no portal UI, upload endpoint, provider API, storage write, permission prompt, navigation, or execution behavior exists;
- Standard User runtime files do not import or load the module;
- existing provider onboarding model remains disabled by default;
- Phase 24 through Phase 27 contracts remain present.

## Future Work

Later phases may add a disabled-by-default admin-only onboarding review fixture or sandbox validator. A real provider onboarding portal must wait until authentication, role-based authorization, legal agreement tracking, compliance review, audit logging, security review, and rollback policy are implemented.
