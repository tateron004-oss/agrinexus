# Nexus Clinic Provider Connector Contract Phase 36

Phase: 36 - Clinic providers
Roadmap row: "Onboard clinic connectors"
Status: inert clinic provider connector contract, scheduling disabled until approved, no live provider action

## Purpose

Phase 36 defines how Nexus should model future clinic provider connectors. Clinic connectors can eventually support verified clinic profiles, service catalogs, availability context, referral preparation, appointment-readiness review, and provider-confirmed scheduling, but they must remain disabled until clinic partner verification, regulated health review, patient consent, provider confirmation, scheduling approval, and audit controls are complete.

This phase does not contact clinics, schedule appointments, open telehealth rooms, request camera or microphone permission, access medical records, submit prescriptions, process payments, request or share location, dispatch emergency services, or activate a live clinic adapter.

## Contract Module

The inert contract module is:

- `public/nexus-clinic-provider-connector-contract.js`

The module defines:

- clinic provider connector statuses;
- clinic service categories;
- required connector fields;
- provider contact and scheduling gate fields;
- patient data consent gate fields;
- audit event fields;
- no-execution defaults;
- a local helper for creating a frozen clinic provider connector record.

The module is not loaded by `public/index.html`, `public/app.js`, or `server.js`.

## Clinic Provider Statuses

Allowed clinic provider connector statuses:

- `not_configured`;
- `provider_verification_required`;
- `clinical_governance_review_required`;
- `terms_review_required`;
- `availability_source_required`;
- `scheduling_gate_required`;
- `consent_review_required`;
- `sandbox_testing_required`;
- `approved_not_live`;
- `active_directory_only`;
- `rejected_or_blocked`;
- `inactive`.

Status rules:

- `not_configured` must not support live clinic/provider claims.
- `provider_verification_required` must wait for clinic identity and source verification.
- `clinical_governance_review_required` must wait for regulated health review.
- `terms_review_required` must wait for provider terms approval.
- `availability_source_required` must wait for availability source and freshness rules.
- `scheduling_gate_required` must wait for user and provider confirmation gates.
- `consent_review_required` must wait for patient consent language.
- `sandbox_testing_required` must remain non-live.
- `approved_not_live` may show readiness but must not contact or schedule.
- `active_directory_only` may support future source-backed clinic directory context but must not create appointments or handoffs.
- `rejected_or_blocked` and `inactive` must not be used for provider-backed answers.

## Clinic Service Categories

Allowed clinic service categories:

- `primary_care`;
- `urgent_care_guidance`;
- `maternal_child_health`;
- `pharmacy_access`;
- `telehealth_referral`;
- `mobile_clinic_referral`;
- `lab_referral`;
- `vaccination_service`;
- `transportation_to_care`;
- `community_health_support`.

These categories are descriptive. They must not imply clinical diagnosis, live availability, provider contact, scheduling, treatment, prescription, telehealth session, payment, or emergency dispatch.

## Clinic Provider Connector Fields

Each future clinic provider connector record should include:

- `connectorId`;
- `clinicName`;
- `sourceOwner`;
- `connectorStatus`;
- `serviceCategories`;
- `serviceRegions`;
- `supportedLanguages`;
- `providerVerificationStatus`;
- `clinicalGovernanceStatus`;
- `termsReviewStatus`;
- `availabilitySourceStatus`;
- `freshnessModel`;
- `regionalScope`;
- `languageScope`;
- `allowedResponseStates`;
- `providerSchedulingGate`;
- `patientDataConsentGate`;
- `auditRequirements`;
- `auditEvent`;
- `directoryContextAllowed`;
- `liveAvailabilityAllowed`;
- `providerContactEnabled`;
- `appointmentSchedulingEnabled`;
- `telehealthRoomEnabled`;
- `paymentEnabled`;
- `liveActionEnabled`;
- `noExecution`.

## Provider Scheduling Gate

Each future provider scheduling gate should include:

- `requiresUserApproval`;
- `requiresProviderConfirmation`;
- `requiresClinicalGovernanceReview`;
- `requiresAuditLogging`;
- `requiresAvailabilityFreshness`;
- `allowsProviderContact`;
- `allowsAppointmentScheduling`;
- `allowsReferralHandoff`;
- `allowsTelehealthRoomCreation`;

Defaults must keep every `allows*` field false.

## Patient Data Consent Gate

Each future patient data consent gate should include:

- `requiresPurposeDisclosure`;
- `requiresUserConsent`;
- `requiresMinimumNecessaryData`;
- `requiresLocationConsent`;
- `requiresHealthContextConsent`;
- `requiresIdentityVerification`;
- `allowsPatientDataSharing`;
- `allowsPreciseLocationSharing`;
- `allowsMedicalRecordAccess`;
- `allowsPrescriptionSubmission`;
- `allowsPaymentProcessing`.

Defaults must keep every `allows*` field false.

## Audit Event Fields

Each future clinic provider audit event should include:

- `eventType`;
- `connectorId`;
- `connectorStatus`;
- `serviceCategories`;
- `directoryContextAllowed`;
- `liveAvailabilityAllowed`;
- `providerContactEnabled`;
- `appointmentSchedulingEnabled`;
- `telehealthRoomEnabled`;
- `paymentEnabled`;
- `noExecution`;
- `createdAt`.

Audit events must not include private health details, precise location, medical records, prescriptions, identity secrets, payment details, emergency contact details, provider credentials, or executable provider payloads.

## No-Execution Defaults

Clinic provider connector records are provider/source context, not clinical or scheduling authority. They must default to:

- `noExecution: true`;
- `directoryContextAllowed: false`;
- `liveAvailabilityAllowed: false`;
- `providerContactEnabled: false`;
- `appointmentSchedulingEnabled: false`;
- `telehealthRoomEnabled: false`;
- `cameraPermissionEnabled: false`;
- `microphonePermissionEnabled: false`;
- `medicalRecordAccessEnabled: false`;
- `prescriptionRefillEnabled: false`;
- `paymentEnabled: false`;
- `locationSharingEnabled: false`;
- `emergencyDispatchEnabled: false`;
- `liveActionEnabled: false`;
- `providerContacted: false`;
- `appointmentScheduled: false`;
- `telehealthRoomOpened: false`;
- `userDataShared: false`;
- `externalActionExecuted: false`;
- `paymentExecuted: false`;
- `medicalRecordAccessed: false`;
- `prescriptionSubmitted: false`;
- `emergencyDispatched: false`;
- `locationShared: false`;
- `callOrMessageSent: false`.

## User-Facing Boundary

Future user-facing copy should say:

- "clinic provider connector not connected yet";
- "requires verified clinic source";
- "requires your approval and provider confirmation before scheduling";
- "requires consent before sharing health context or location";
- "I can prepare clinic questions and next steps, but I cannot contact a clinic or schedule care until the required connector and approvals are active."

Nexus must not say a clinic was contacted, an appointment was scheduled, a provider is live, a telehealth room was opened, medical records were accessed, prescriptions were submitted, payment was processed, emergency help was dispatched, or location was shared unless later approved execution phases enable that behavior.

## QA Expectations

QA must verify:

- required clinic provider statuses are defined;
- required service categories are defined;
- required connector fields exist;
- required provider scheduling gate fields exist;
- required patient data consent gate fields exist;
- audit event fields exist;
- defaults block directory context, live availability, provider contact, appointment scheduling, telehealth room creation, medical record access, prescription/refill, payment, location sharing, emergency dispatch, and live action;
- no-execution and dangerous action flags default safely;
- no provider API, contact path, scheduling path, storage write, permission prompt, camera/microphone use, navigation, location use, payment, medical record, prescription, emergency dispatch, or execution behavior exists;
- Standard User runtime files do not import or load the module;
- Phase 21 public clinic directory contracts and existing call/confirmation boundaries remain present.

## Future Work

Later phases may add clinic connectors after provider verification, governance review, terms review, availability source verification, consent language, provider confirmation, scheduling approval, and audit logging are complete. Clinic provider connectors must remain separate from automatic contact, appointment scheduling, telehealth session creation, medical records, prescription/refill, payment, location sharing, emergency dispatch, call, and message behavior.
