# Nexus Transportation Provider Connector Contract Phase 40

Phase: 40 - Transportation providers
Roadmap row: "Onboard care transport partners"
Status: inert transportation provider connector contract, booking disabled, no live dispatch

## Purpose

Phase 40 defines how Nexus should model future transportation-to-care partner connectors. Transportation connectors can eventually support verified care transport partners, public or partner route resources, eligibility context, service-area boundaries, accessibility metadata, ride/route readiness review, and consent-controlled booking handoff, but they must remain disabled until provider verification, route source verification, location consent, booking approval, partner confirmation, and audit controls are complete.

This phase does not book rides, dispatch transportation, contact drivers or partners, share precise location, open external ride services, process payments, create care appointments, contact clinics, request camera or microphone permission, or activate a live transportation adapter.

## Contract Module

The inert contract module is:

- `public/nexus-transportation-provider-connector-contract.js`

The module defines:

- transportation provider connector statuses;
- transportation service categories;
- required connector fields;
- booking readiness gate fields;
- location consent gate fields;
- audit event fields;
- no-execution defaults;
- a local helper for creating a frozen transportation provider connector record.

The module is not loaded by `public/index.html`, `public/app.js`, or `server.js`.

## Transportation Provider Statuses

Allowed transportation provider connector statuses:

- `not_configured`;
- `transport_partner_verification_required`;
- `route_source_required`;
- `service_area_review_required`;
- `terms_review_required`;
- `location_consent_review_required`;
- `booking_gate_required`;
- `payment_review_required`;
- `sandbox_testing_required`;
- `approved_not_live`;
- `active_resource_directory_only`;
- `rejected_or_blocked`;
- `inactive`.

Status rules:

- `not_configured` must not support live transportation claims.
- `transport_partner_verification_required` must wait for partner identity/source verification.
- `route_source_required` must wait for route/resource source and freshness rules.
- `service_area_review_required` must wait for reviewed coverage and eligibility boundaries.
- `terms_review_required` must wait for partner terms approval.
- `location_consent_review_required` must wait for location consent language.
- `booking_gate_required` must wait for explicit user approval and partner confirmation.
- `payment_review_required` must wait for fare/payment/compliance review.
- `sandbox_testing_required` must remain non-live.
- `approved_not_live` may show readiness but must not book, dispatch, or contact.
- `active_resource_directory_only` may support future source-backed transportation directory context but must not create ride requests.
- `rejected_or_blocked` and `inactive` must not be used for transport-backed answers.

## Transportation Service Categories

Allowed transportation service categories:

- `transportation_to_care`;
- `community_transport_resource`;
- `accessible_transport_resource`;
- `clinic_shuttle_resource`;
- `mobile_clinic_route_support`;
- `rural_transport_resource`;
- `paratransit_resource`;
- `public_transit_guidance`;
- `care_partner_pickup_boundary`;
- `transportation_eligibility_review`.

These categories are descriptive. They must not imply live route availability, ride booking, dispatch, driver contact, payment, location sharing, emergency transport, or clinical service.

## Transportation Provider Connector Fields

Each future transportation provider connector record should include:

- `connectorId`;
- `providerName`;
- `sourceOwner`;
- `connectorStatus`;
- `serviceCategories`;
- `serviceRegions`;
- `supportedLanguages`;
- `partnerVerificationStatus`;
- `routeSourceStatus`;
- `serviceAreaReviewStatus`;
- `termsReviewStatus`;
- `locationConsentReviewStatus`;
- `bookingGateStatus`;
- `paymentReviewStatus`;
- `freshnessModel`;
- `regionalScope`;
- `languageScope`;
- `allowedResponseStates`;
- `bookingReadinessGate`;
- `locationConsentGate`;
- `auditRequirements`;
- `auditEvent`;
- `resourceContextAllowed`;
- `liveAvailabilityAllowed`;
- `partnerContactEnabled`;
- `rideBookingEnabled`;
- `transportDispatchEnabled`;
- `locationSharingEnabled`;
- `paymentEnabled`;
- `liveActionEnabled`;
- `noExecution`.

## Booking Readiness Gate

Each future booking readiness gate should include:

- `requiresPartnerVerification`;
- `requiresRouteFreshness`;
- `requiresServiceAreaReview`;
- `requiresUserApproval`;
- `requiresPartnerConfirmation`;
- `requiresBookingPolicyReview`;
- `requiresPaymentReview`;
- `requiresAuditLogging`;
- `allowsResourceContext`;
- `allowsPartnerContact`;
- `allowsRideBooking`;
- `allowsTransportDispatch`;
- `allowsPaymentProcessing`;
- `allowsExternalNavigation`.

Defaults must keep every `allows*` field false.

## Location Consent Gate

Each future location consent gate should include:

- `requiresPurposeDisclosure`;
- `requiresUserConsent`;
- `requiresApproximateLocationOnlyByDefault`;
- `requiresPreciseLocationConsent`;
- `requiresMinimumNecessaryLocation`;
- `requiresCareContextConsent`;
- `allowsApproximateLocationUse`;
- `allowsPreciseLocationSharing`;
- `allowsRouteOptimization`;
- `allowsPickupDropoffSharing`;
- `allowsCarePartnerDataSharing`.

Defaults must keep every `allows*` field false.

## Audit Event Fields

Each future transportation provider audit event should include:

- `eventType`;
- `connectorId`;
- `connectorStatus`;
- `serviceCategories`;
- `resourceContextAllowed`;
- `liveAvailabilityAllowed`;
- `partnerContactEnabled`;
- `rideBookingEnabled`;
- `transportDispatchEnabled`;
- `locationSharingEnabled`;
- `paymentEnabled`;
- `noExecution`;
- `createdAt`.

Audit events must not include precise location, pickup/dropoff addresses, medical details, identity secrets, payment details, driver contact details, emergency contact details, provider credentials, booking tokens, or executable provider payloads.

## No-Execution Defaults

Transportation provider connector records are resource/source context, not booking or dispatch authority. They must default to:

- `noExecution: true`;
- `resourceContextAllowed: false`;
- `liveAvailabilityAllowed: false`;
- `partnerContactEnabled: false`;
- `rideBookingEnabled: false`;
- `transportDispatchEnabled: false`;
- `routeOptimizationEnabled: false`;
- `locationSharingEnabled: false`;
- `preciseLocationEnabled: false`;
- `paymentEnabled: false`;
- `medicalDataSharingEnabled: false`;
- `emergencyDispatchEnabled: false`;
- `liveActionEnabled: false`;
- `partnerContacted: false`;
- `rideBooked: false`;
- `transportDispatched: false`;
- `routeOptimized: false`;
- `locationShared: false`;
- `preciseLocationShared: false`;
- `paymentExecuted: false`;
- `medicalDataShared: false`;
- `emergencyDispatched: false`;
- `externalActionExecuted: false`;
- `callOrMessageSent: false`.

## User-Facing Boundary

Future user-facing copy should say:

- "transportation provider connector not connected yet";
- "requires a verified transportation source";
- "requires your approval before using or sharing location";
- "requires partner confirmation before any ride booking";
- "I can prepare transportation options and questions, but I cannot book, dispatch, or contact a transportation partner until the required connector and approvals are active."

Nexus must not say a ride was booked, transportation was dispatched, a partner was contacted, location was shared, payment was processed, an emergency vehicle was sent, or a care appointment was created unless later approved execution phases enable that behavior.

## QA Expectations

QA must verify:

- required transportation provider statuses are defined;
- required service categories are defined;
- required connector fields exist;
- required booking readiness gate fields exist;
- required location consent gate fields exist;
- audit event fields exist;
- defaults block resource context, live availability, partner contact, ride booking, transportation dispatch, route optimization, location sharing, payment, medical data sharing, emergency dispatch, and live action;
- no-execution and dangerous action flags default safely;
- no provider API, contact path, booking path, dispatch path, storage write, permission prompt, navigation, location use, payment, medical data sharing, emergency dispatch, or execution behavior exists;
- Standard User runtime files do not import or load the module;
- existing public transportation resource source contracts remain execution-disabled.

## Future Work

Later phases may add public transportation source import, partner route import, accessibility metadata review, approximate-location matching, consent UX, audit logging, and partner handoff planning. Those phases must remain confirmation-gated and audit-controlled. Ride booking, dispatch, partner contact, location sharing, payments, and emergency actions must remain disabled until explicitly configured and approved.
