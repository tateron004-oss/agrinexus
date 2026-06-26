# Nexus Telehealth Provider Connector Contract Phase 37

Phase: 37 - Telehealth providers
Roadmap row: "Onboard telehealth connectors"
Status: inert telehealth provider connector contract, no live room until configured, no provider action

## Purpose

Phase 37 defines how Nexus should model future telehealth provider connectors. Telehealth connectors can eventually support verified telehealth partner directories, service scope, availability context, language coverage, appointment-readiness review, provider-confirmed session setup, and consent-controlled handoff, but they must remain disabled until telehealth partner verification, regulated health review, patient consent, provider confirmation, live-room configuration, privacy review, and audit controls are complete.

This phase does not contact telehealth providers, create live video rooms, request camera or microphone permission, schedule appointments, open provider portals, access medical records, submit prescriptions, process payments, request or share location, dispatch emergency services, or activate a live telehealth adapter.

## Contract Module

The inert contract module is:

- `public/nexus-telehealth-provider-connector-contract.js`

The module defines:

- telehealth provider connector statuses;
- telehealth service categories;
- required connector fields;
- live-room readiness gate fields;
- patient consent gate fields;
- audit event fields;
- no-execution defaults;
- a local helper for creating a frozen telehealth provider connector record.

The module is not loaded by `public/index.html`, `public/app.js`, or `server.js`.

## Telehealth Provider Statuses

Allowed telehealth provider connector statuses:

- `not_configured`;
- `provider_verification_required`;
- `clinical_governance_review_required`;
- `terms_review_required`;
- `availability_source_required`;
- `live_room_configuration_required`;
- `consent_review_required`;
- `privacy_security_review_required`;
- `sandbox_testing_required`;
- `approved_not_live`;
- `active_directory_only`;
- `rejected_or_blocked`;
- `inactive`.

Status rules:

- `not_configured` must not support live telehealth/provider claims.
- `provider_verification_required` must wait for telehealth partner identity and source verification.
- `clinical_governance_review_required` must wait for regulated health review.
- `terms_review_required` must wait for partner terms approval.
- `availability_source_required` must wait for availability source and freshness rules.
- `live_room_configuration_required` must wait for approved room/session configuration.
- `consent_review_required` must wait for patient consent language.
- `privacy_security_review_required` must wait for privacy/security review.
- `sandbox_testing_required` must remain non-live.
- `approved_not_live` may show readiness but must not create sessions or contact providers.
- `active_directory_only` may support future source-backed telehealth directory context but must not create live rooms, calls, or handoffs.
- `rejected_or_blocked` and `inactive` must not be used for provider-backed answers.

## Telehealth Service Categories

Allowed telehealth service categories:

- `primary_care_virtual_visit`;
- `urgent_care_triage`;
- `maternal_child_health_virtual_support`;
- `pharmacy_consultation`;
- `behavioral_health_referral`;
- `chronic_care_follow_up`;
- `specialist_referral`;
- `rural_health_navigation`;
- `language_supported_virtual_care`;
- `care_coordination`.

These categories are descriptive. They must not imply clinical diagnosis, live availability, provider contact, scheduling, treatment, prescription, camera or microphone activation, payment, or emergency dispatch.

## Telehealth Provider Connector Fields

Each future telehealth provider connector record should include:

- `connectorId`;
- `providerName`;
- `sourceOwner`;
- `connectorStatus`;
- `serviceCategories`;
- `serviceRegions`;
- `supportedLanguages`;
- `providerVerificationStatus`;
- `clinicalGovernanceStatus`;
- `termsReviewStatus`;
- `availabilitySourceStatus`;
- `liveRoomConfigurationStatus`;
- `privacySecurityReviewStatus`;
- `freshnessModel`;
- `regionalScope`;
- `languageScope`;
- `allowedResponseStates`;
- `liveRoomReadinessGate`;
- `patientConsentGate`;
- `auditRequirements`;
- `auditEvent`;
- `directoryContextAllowed`;
- `liveAvailabilityAllowed`;
- `providerContactEnabled`;
- `appointmentSchedulingEnabled`;
- `telehealthRoomEnabled`;
- `cameraPermissionEnabled`;
- `microphonePermissionEnabled`;
- `paymentEnabled`;
- `liveActionEnabled`;
- `noExecution`.

## Live Room Readiness Gate

Each future live-room readiness gate should include:

- `requiresUserApproval`;
- `requiresProviderConfirmation`;
- `requiresClinicalGovernanceReview`;
- `requiresAuditLogging`;
- `requiresAvailabilityFreshness`;
- `requiresLiveRoomConfiguration`;
- `requiresPrivacySecurityReview`;
- `allowsProviderContact`;
- `allowsAppointmentScheduling`;
- `allowsTelehealthRoomCreation`;
- `allowsCameraActivation`;
- `allowsMicrophoneActivation`;
- `allowsExternalRoomNavigation`.

Defaults must keep every `allows*` field false.

## Patient Consent Gate

Each future patient consent gate should include:

- `requiresPurposeDisclosure`;
- `requiresUserConsent`;
- `requiresMinimumNecessaryData`;
- `requiresHealthContextConsent`;
- `requiresIdentityVerification`;
- `requiresProviderPrivacyTerms`;
- `requiresCameraConsent`;
- `requiresMicrophoneConsent`;
- `allowsPatientDataSharing`;
- `allowsMedicalRecordAccess`;
- `allowsPrescriptionSubmission`;
- `allowsPreciseLocationSharing`;
- `allowsPaymentProcessing`.

Defaults must keep every `allows*` field false.

## Audit Event Fields

Each future telehealth provider audit event should include:

- `eventType`;
- `connectorId`;
- `connectorStatus`;
- `serviceCategories`;
- `directoryContextAllowed`;
- `liveAvailabilityAllowed`;
- `providerContactEnabled`;
- `appointmentSchedulingEnabled`;
- `telehealthRoomEnabled`;
- `cameraPermissionEnabled`;
- `microphonePermissionEnabled`;
- `paymentEnabled`;
- `noExecution`;
- `createdAt`.

Audit events must not include private health details, precise location, medical records, prescriptions, identity secrets, payment details, emergency contact details, provider credentials, room tokens, meeting URLs, or executable provider payloads.

## No-Execution Defaults

Telehealth provider connector records are provider/source context, not clinical or room-creation authority. They must default to:

- `noExecution: true`;
- `directoryContextAllowed: false`;
- `liveAvailabilityAllowed: false`;
- `providerContactEnabled: false`;
- `appointmentSchedulingEnabled: false`;
- `telehealthRoomEnabled: false`;
- `cameraPermissionEnabled: false`;
- `microphonePermissionEnabled: false`;
- `externalRoomNavigationEnabled: false`;
- `medicalRecordAccessEnabled: false`;
- `prescriptionRefillEnabled: false`;
- `paymentEnabled: false`;
- `locationSharingEnabled: false`;
- `emergencyDispatchEnabled: false`;
- `liveActionEnabled: false`;
- `providerContacted: false`;
- `appointmentScheduled: false`;
- `telehealthRoomOpened: false`;
- `cameraActivated: false`;
- `microphoneActivated: false`;
- `externalRoomNavigated: false`;
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

- "telehealth provider connector not connected yet";
- "requires a verified telehealth provider source";
- "requires your approval and provider confirmation before any telehealth session";
- "requires consent before sharing health context or using camera/microphone";
- "I can prepare telehealth questions and next steps, but I cannot open a live room or contact a provider until the required connector and approvals are active."

Nexus must not say a telehealth provider was contacted, an appointment was scheduled, a provider is live, a telehealth room was opened, camera or microphone was activated, medical records were accessed, prescriptions were submitted, payment was processed, emergency help was dispatched, or location was shared unless later approved execution phases enable that behavior.

## QA Expectations

QA must verify:

- required telehealth provider statuses are defined;
- required service categories are defined;
- required connector fields exist;
- required live-room readiness gate fields exist;
- required patient consent gate fields exist;
- audit event fields exist;
- defaults block directory context, live availability, provider contact, appointment scheduling, telehealth room creation, camera/microphone activation, external room navigation, medical record access, prescription/refill, payment, location sharing, emergency dispatch, and live action;
- no-execution and dangerous action flags default safely;
- no provider API, contact path, scheduling path, room creation path, storage write, permission prompt, camera/microphone use, navigation, location use, payment, medical record, prescription, emergency dispatch, or execution behavior exists;
- Standard User runtime files do not import or load the module;
- existing telehealth camera/video QA remains present and unchanged.

## Future Work

Later phases may add provider onboarding, sandbox test fixtures, live-room configuration validation, consent UX, audit logging, and provider adapter planning. Those phases must remain confirmation-gated and audit-controlled. Live telehealth rooms, provider contact, camera/microphone activation, medical data sharing, payments, and emergency actions must remain disabled until explicitly configured and approved.
