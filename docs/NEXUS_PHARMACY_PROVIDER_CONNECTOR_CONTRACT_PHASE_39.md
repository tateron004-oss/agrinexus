# Nexus Pharmacy Provider Connector Contract Phase 39

Phase: 39 - Pharmacy providers
Roadmap row: "Onboard pharmacies"
Status: inert pharmacy provider directory connector, no refill execution, no pharmacy contact

## Purpose

Phase 39 defines how Nexus should model future pharmacy provider connectors. Pharmacy connectors can eventually support verified pharmacy profiles, public or partner directory feeds, service/hour context, language coverage, medication access guidance, refill-readiness review, and consent-controlled pharmacy handoff, but they must remain disabled until pharmacy source verification, terms review, regulated workflow review, patient consent, provider confirmation, and audit controls are complete.

This phase does not contact pharmacies, submit refills, send prescriptions, access medical records, request or share patient data, process payments, open external pharmacy portals, navigate externally, request location, dispatch delivery, or activate a live pharmacy adapter.

## Contract Module

The inert contract module is:

- `public/nexus-pharmacy-provider-connector-contract.js`

The module defines:

- pharmacy provider connector statuses;
- pharmacy service categories;
- required connector fields;
- pharmacy contact/refill gate fields;
- patient consent gate fields;
- audit event fields;
- no-execution defaults;
- a local helper for creating a frozen pharmacy provider connector record.

The module is not loaded by `public/index.html`, `public/app.js`, or `server.js`.

## Pharmacy Provider Statuses

Allowed pharmacy provider connector statuses:

- `not_configured`;
- `pharmacy_verification_required`;
- `directory_source_required`;
- `terms_review_required`;
- `regulated_workflow_review_required`;
- `refill_gate_required`;
- `patient_consent_review_required`;
- `payment_review_required`;
- `sandbox_testing_required`;
- `approved_not_live`;
- `active_directory_only`;
- `rejected_or_blocked`;
- `inactive`.

Status rules:

- `not_configured` must not support live pharmacy claims.
- `pharmacy_verification_required` must wait for pharmacy identity/source verification.
- `directory_source_required` must wait for directory source and freshness rules.
- `terms_review_required` must wait for source/provider terms approval.
- `regulated_workflow_review_required` must wait for prescription/refill governance.
- `refill_gate_required` must wait for explicit refill and prescriber/pharmacy gates.
- `patient_consent_review_required` must wait for consent language.
- `payment_review_required` must wait for payment/compliance review.
- `sandbox_testing_required` must remain non-live.
- `approved_not_live` may show readiness but must not contact pharmacies or submit refills.
- `active_directory_only` may support future source-backed pharmacy directory context but must not create refill, prescription, payment, or contact actions.
- `rejected_or_blocked` and `inactive` must not be used for pharmacy-backed answers.

## Pharmacy Service Categories

Allowed pharmacy service categories:

- `pharmacy_directory`;
- `medicine_access_guidance`;
- `refill_readiness_review`;
- `pharmacist_consult_boundary`;
- `mobile_clinic_pharmacy_support`;
- `inventory_context`;
- `pickup_hours_context`;
- `delivery_option_context`;
- `insurance_payment_boundary`;
- `language_supported_pharmacy_access`.

These categories are descriptive. They must not imply prescription submission, refill execution, medical advice, live inventory guarantees, payment processing, delivery dispatch, provider contact, or medical record access.

## Pharmacy Provider Connector Fields

Each future pharmacy provider connector record should include:

- `connectorId`;
- `pharmacyName`;
- `sourceOwner`;
- `connectorStatus`;
- `serviceCategories`;
- `serviceRegions`;
- `supportedLanguages`;
- `pharmacyVerificationStatus`;
- `directorySourceStatus`;
- `termsReviewStatus`;
- `regulatedWorkflowReviewStatus`;
- `refillGateStatus`;
- `patientConsentReviewStatus`;
- `paymentReviewStatus`;
- `freshnessModel`;
- `regionalScope`;
- `languageScope`;
- `allowedResponseStates`;
- `pharmacyActionGate`;
- `patientConsentGate`;
- `auditRequirements`;
- `auditEvent`;
- `directoryContextAllowed`;
- `liveInventoryAllowed`;
- `pharmacyContactEnabled`;
- `refillExecutionEnabled`;
- `prescriptionSubmissionEnabled`;
- `paymentEnabled`;
- `liveActionEnabled`;
- `noExecution`.

## Pharmacy Action Gate

Each future pharmacy action gate should include:

- `requiresPharmacyVerification`;
- `requiresDirectoryFreshness`;
- `requiresRegulatedWorkflowReview`;
- `requiresUserApproval`;
- `requiresPharmacyConfirmation`;
- `requiresPrescriberAuthorization`;
- `requiresAuditLogging`;
- `allowsDirectoryContext`;
- `allowsPharmacyContact`;
- `allowsRefillPreparation`;
- `allowsRefillExecution`;
- `allowsPrescriptionSubmission`;
- `allowsPaymentProcessing`;
- `allowsExternalNavigation`.

Defaults must keep every `allows*` field false.

## Patient Consent Gate

Each future patient consent gate should include:

- `requiresPurposeDisclosure`;
- `requiresUserConsent`;
- `requiresMinimumNecessaryData`;
- `requiresMedicationContextConsent`;
- `requiresHealthContextConsent`;
- `requiresIdentityVerification`;
- `requiresPaymentConsent`;
- `allowsPatientDataSharing`;
- `allowsMedicationDataSharing`;
- `allowsMedicalRecordAccess`;
- `allowsPrescriptionSubmission`;
- `allowsPaymentProcessing`;
- `allowsLocationSharing`.

Defaults must keep every `allows*` field false.

## Audit Event Fields

Each future pharmacy provider audit event should include:

- `eventType`;
- `connectorId`;
- `connectorStatus`;
- `serviceCategories`;
- `directoryContextAllowed`;
- `liveInventoryAllowed`;
- `pharmacyContactEnabled`;
- `refillExecutionEnabled`;
- `prescriptionSubmissionEnabled`;
- `paymentEnabled`;
- `noExecution`;
- `createdAt`.

Audit events must not include medication names, prescriptions, diagnosis details, medical records, patient identifiers, precise location, payment details, provider credentials, refill tokens, pharmacy account data, or executable provider payloads.

## No-Execution Defaults

Pharmacy provider connector records are source/directory context, not pharmacy action authority. They must default to:

- `noExecution: true`;
- `directoryContextAllowed: false`;
- `liveInventoryAllowed: false`;
- `pharmacyContactEnabled: false`;
- `refillPreparationEnabled: false`;
- `refillExecutionEnabled: false`;
- `prescriptionSubmissionEnabled: false`;
- `medicalRecordAccessEnabled: false`;
- `medicationDataSharingEnabled: false`;
- `paymentEnabled: false`;
- `locationSharingEnabled: false`;
- `deliveryDispatchEnabled: false`;
- `emergencyDispatchEnabled: false`;
- `liveActionEnabled: false`;
- `pharmacyContacted: false`;
- `refillPrepared: false`;
- `refillSubmitted: false`;
- `prescriptionSubmitted: false`;
- `patientDataShared: false`;
- `medicationDataShared: false`;
- `paymentExecuted: false`;
- `locationShared: false`;
- `deliveryDispatched: false`;
- `emergencyDispatched: false`;
- `externalActionExecuted: false`;
- `callOrMessageSent: false`.

## User-Facing Boundary

Future user-facing copy should say:

- "pharmacy connector not connected yet";
- "requires a verified pharmacy source";
- "requires your approval before sharing pharmacy or medication context";
- "requires pharmacy/prescriber confirmation before any refill workflow";
- "I can prepare pharmacy questions and next steps, but I cannot contact a pharmacy, submit a refill, or process payment until the required connector and approvals are active."

Nexus must not say a pharmacy was contacted, a refill was submitted, a prescription was sent, medicine availability is guaranteed, payment was processed, delivery was dispatched, records were accessed, or location was shared unless later approved execution phases enable that behavior.

## QA Expectations

QA must verify:

- required pharmacy provider statuses are defined;
- required service categories are defined;
- required connector fields exist;
- required pharmacy action gate fields exist;
- required patient consent gate fields exist;
- audit event fields exist;
- defaults block directory context, live inventory, pharmacy contact, refill preparation, refill execution, prescription submission, medical record access, medication data sharing, payment, location sharing, delivery dispatch, emergency dispatch, and live action;
- no-execution and dangerous action flags default safely;
- no pharmacy API, contact path, refill path, prescription path, payment path, storage write, permission prompt, navigation, location use, medical record, emergency dispatch, or execution behavior exists;
- Standard User runtime files do not import or load the module;
- existing public pharmacy directory source contracts remain execution-disabled.

## Future Work

Later phases may add pharmacy onboarding, public directory import, partner directory import, refill-readiness planning, consent UX, audit logging, and provider handoff planning. Those phases must remain confirmation-gated and audit-controlled. Pharmacy contact, refill execution, prescription submission, payment, delivery dispatch, location sharing, and medical record access must remain disabled until explicitly configured and approved.
