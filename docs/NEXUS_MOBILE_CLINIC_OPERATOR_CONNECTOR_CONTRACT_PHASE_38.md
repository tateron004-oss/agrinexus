# Nexus Mobile Clinic Operator Connector Contract Phase 38

Phase: 38 - Mobile clinic operators
Roadmap row: "Onboard mobile clinic operators"
Status: inert mobile clinic operator schedule connector, dispatch disabled, no live action

## Purpose

Phase 38 defines how Nexus should model future mobile clinic operator connectors. Mobile clinic operator connectors can eventually support verified operator profiles, public or partner schedule feeds, route/service-window context, language coverage, service-region boundaries, and consent-controlled next-step preparation, but they must remain disabled until operator verification, schedule source verification, location consent, provider/partner approval, dispatch governance, and audit controls are complete.

This phase does not dispatch mobile clinics, contact operators, book visits, request or share precise location, create clinic supply dispatches, create payments, open provider portals, access medical records, submit prescriptions, activate camera or microphone permissions, or activate a live mobile clinic adapter.

## Contract Module

The inert contract module is:

- `public/nexus-mobile-clinic-operator-connector-contract.js`

The module defines:

- mobile clinic operator connector statuses;
- mobile clinic service categories;
- required connector fields;
- schedule readiness gate fields;
- location consent gate fields;
- audit event fields;
- no-execution defaults;
- a local helper for creating a frozen mobile clinic operator connector record.

The module is not loaded by `public/index.html`, `public/app.js`, or `server.js`.

## Mobile Clinic Operator Statuses

Allowed mobile clinic operator connector statuses:

- `not_configured`;
- `operator_verification_required`;
- `schedule_source_required`;
- `service_scope_review_required`;
- `terms_review_required`;
- `location_consent_review_required`;
- `dispatch_governance_required`;
- `sandbox_testing_required`;
- `approved_not_live`;
- `active_schedule_directory_only`;
- `rejected_or_blocked`;
- `inactive`.

Status rules:

- `not_configured` must not support live mobile clinic claims.
- `operator_verification_required` must wait for operator identity and source verification.
- `schedule_source_required` must wait for schedule source and freshness rules.
- `service_scope_review_required` must wait for reviewed service boundaries.
- `terms_review_required` must wait for operator/partner terms approval.
- `location_consent_review_required` must wait for location consent language.
- `dispatch_governance_required` must wait for dispatch/field operations governance.
- `sandbox_testing_required` must remain non-live.
- `approved_not_live` may show readiness but must not dispatch, contact, or book.
- `active_schedule_directory_only` may support future source-backed schedule context but must not create requests or dispatches.
- `rejected_or_blocked` and `inactive` must not be used for operator-backed answers.

## Mobile Clinic Service Categories

Allowed mobile clinic service categories:

- `rural_health_outreach`;
- `maternal_child_health_outreach`;
- `vaccination_outreach`;
- `pharmacy_access_support`;
- `screening_event`;
- `community_health_navigation`;
- `mobile_lab_referral`;
- `transportation_to_care_support`;
- `health_education_event`;
- `care_coordination_event`.

These categories are descriptive. They must not imply diagnosis, live availability, operator contact, appointment booking, dispatch, treatment, prescription, payment, location sharing, or emergency response.

## Mobile Clinic Operator Connector Fields

Each future mobile clinic operator connector record should include:

- `connectorId`;
- `operatorName`;
- `sourceOwner`;
- `connectorStatus`;
- `serviceCategories`;
- `serviceRegions`;
- `supportedLanguages`;
- `operatorVerificationStatus`;
- `scheduleSourceStatus`;
- `serviceScopeReviewStatus`;
- `termsReviewStatus`;
- `locationConsentReviewStatus`;
- `dispatchGovernanceStatus`;
- `freshnessModel`;
- `regionalScope`;
- `languageScope`;
- `allowedResponseStates`;
- `scheduleReadinessGate`;
- `locationConsentGate`;
- `auditRequirements`;
- `auditEvent`;
- `scheduleContextAllowed`;
- `liveAvailabilityAllowed`;
- `operatorContactEnabled`;
- `visitBookingEnabled`;
- `mobileClinicDispatchEnabled`;
- `locationSharingEnabled`;
- `paymentEnabled`;
- `liveActionEnabled`;
- `noExecution`.

## Schedule Readiness Gate

Each future schedule readiness gate should include:

- `requiresOperatorVerification`;
- `requiresScheduleFreshness`;
- `requiresServiceScopeReview`;
- `requiresUserApproval`;
- `requiresPartnerConfirmation`;
- `requiresDispatchGovernance`;
- `requiresAuditLogging`;
- `allowsScheduleContext`;
- `allowsOperatorContact`;
- `allowsVisitBooking`;
- `allowsMobileClinicDispatch`;
- `allowsSupplyDispatch`;
- `allowsExternalNavigation`.

Defaults must keep every `allows*` field false.

## Location Consent Gate

Each future location consent gate should include:

- `requiresPurposeDisclosure`;
- `requiresUserConsent`;
- `requiresApproximateLocationOnlyByDefault`;
- `requiresPreciseLocationConsent`;
- `requiresMinimumNecessaryLocation`;
- `requiresHealthContextConsent`;
- `allowsApproximateLocationUse`;
- `allowsPreciseLocationSharing`;
- `allowsRouteOptimization`;
- `allowsDispatchLocationSharing`;
- `allowsPatientDataSharing`.

Defaults must keep every `allows*` field false.

## Audit Event Fields

Each future mobile clinic operator audit event should include:

- `eventType`;
- `connectorId`;
- `connectorStatus`;
- `serviceCategories`;
- `scheduleContextAllowed`;
- `liveAvailabilityAllowed`;
- `operatorContactEnabled`;
- `visitBookingEnabled`;
- `mobileClinicDispatchEnabled`;
- `locationSharingEnabled`;
- `paymentEnabled`;
- `noExecution`;
- `createdAt`.

Audit events must not include private health details, precise location, medical records, prescriptions, identity secrets, payment details, emergency contact details, operator credentials, dispatch route tokens, or executable provider payloads.

## No-Execution Defaults

Mobile clinic operator connector records are schedule/source context, not dispatch authority. They must default to:

- `noExecution: true`;
- `scheduleContextAllowed: false`;
- `liveAvailabilityAllowed: false`;
- `operatorContactEnabled: false`;
- `visitBookingEnabled: false`;
- `mobileClinicDispatchEnabled: false`;
- `supplyDispatchEnabled: false`;
- `locationSharingEnabled: false`;
- `preciseLocationEnabled: false`;
- `routeOptimizationEnabled: false`;
- `medicalRecordAccessEnabled: false`;
- `prescriptionRefillEnabled: false`;
- `paymentEnabled: false`;
- `emergencyDispatchEnabled: false`;
- `liveActionEnabled: false`;
- `operatorContacted: false`;
- `visitBooked: false`;
- `mobileClinicDispatched: false`;
- `supplyDispatched: false`;
- `locationShared: false`;
- `preciseLocationShared: false`;
- `userDataShared: false`;
- `externalActionExecuted: false`;
- `paymentExecuted: false`;
- `medicalRecordAccessed: false`;
- `prescriptionSubmitted: false`;
- `emergencyDispatched: false`;
- `callOrMessageSent: false`.

## User-Facing Boundary

Future user-facing copy should say:

- "mobile clinic operator connector not connected yet";
- "requires a verified schedule source";
- "requires your approval before using or sharing location";
- "requires operator/partner confirmation before any visit request";
- "I can prepare mobile clinic questions and route context, but I cannot dispatch or book a mobile clinic until the required connector and approvals are active."

Nexus must not say a mobile clinic was dispatched, a visit was booked, an operator was contacted, location was shared, supply delivery was started, payment was processed, medical records were accessed, prescriptions were submitted, or emergency help was dispatched unless later approved execution phases enable that behavior.

## QA Expectations

QA must verify:

- required mobile clinic operator statuses are defined;
- required service categories are defined;
- required connector fields exist;
- required schedule readiness gate fields exist;
- required location consent gate fields exist;
- audit event fields exist;
- defaults block schedule context, live availability, operator contact, visit booking, mobile clinic dispatch, supply dispatch, location sharing, route optimization, medical record access, prescription/refill, payment, emergency dispatch, and live action;
- no-execution and dangerous action flags default safely;
- no provider API, contact path, booking path, dispatch path, storage write, permission prompt, camera/microphone use, navigation, location use, payment, medical record, prescription, emergency dispatch, or execution behavior exists;
- Standard User runtime files do not import or load the module;
- existing mobile clinic public schedule source contracts remain execution-disabled.

## Future Work

Later phases may add operator onboarding, public schedule import, partner schedule import, route freshness checks, approximate-location matching, consent UX, audit logging, and provider/partner handoff planning. Those phases must remain confirmation-gated and audit-controlled. Live dispatch, visit booking, operator contact, location sharing, payments, and emergency actions must remain disabled until explicitly configured and approved.
