# Nexus Transportation Request Readiness Contract

Phase: 55 - Transportation request workflow
Status: inert readiness contract and deterministic QA only
Related roadmap row: `| Phase 55 | Transportation request workflow | Request ride/transport | transport request adapter | future | high | transport provider | location/booking consent | transport action QA | request confirmed |`

## Scope Decision

Phase 55 does not request rides, dispatch transportation, share live location, book trips, contact drivers, or open transportation provider APIs. Transportation requests are high-risk because they can expose location, affect care access, create cost obligations, and dispatch real-world services.

This phase creates the readiness contract that must be satisfied before Nexus may prepare or submit any transportation request.

This phase does not activate:

- live ride requests
- transportation dispatch
- driver contact
- provider booking APIs
- location sharing
- background tracking
- fare/payment processing
- external transportation links
- emergency transport dispatch
- Standard User runtime transportation execution behavior
- storage or network side effects
- backend behavior changes

## Contract Artifact

The inert contract lives in:

- `public/nexus-transportation-request-readiness-contract.js`

It is intentionally not loaded by `public/index.html`, not consumed by `public/app.js`, and not wired by `server.js`.

## Default Readiness Posture

The default contract keeps transportation execution disabled:

- `phase: "55"`
- `riskTier: "high"`
- `readinessStatus: "blocked"`
- `transportRequestEnabled: false`
- `providerBookingApiEnabled: false`
- `dispatchEnabled: false`
- `driverContactAllowed: false`
- `locationSharingAllowed: false`
- `backgroundTrackingAllowed: false`
- `farePaymentAllowed: false`
- `externalLinkOpenAllowed: false`
- `standardUserTransportExecutionAllowed: false`
- `executionAllowed: false`
- `liveActionEnabled: false`

Nexus may eventually prepare a ride/transport checklist, but it must not claim transportation was requested or confirmed until a configured provider connector, location/booking consent, provider confirmation, and audit path exist.

## Required Preconditions Before Transport Request

Before any future transportation request can be enabled, Nexus must verify and visibly present:

- `resolvedRequester`
- `visibleRiderDisplay`
- `pickupLocation`
- `dropoffLocation`
- `transportPurposePreview`
- `providerDisplay`
- `providerAvailabilityState`
- `bookingWindow`
- `fareOrCostDisclosure`
- `locationConsent`
- `bookingConsent`
- `permissionState`
- `auditEvent`
- `explicitUserApproval`
- `providerConfirmationState`
- `cancellationPath`
- `noBackgroundTracking`
- `noSilentDispatch`
- `noHiddenLocationSharing`

## Location and Booking Consent

Transportation workflows require purpose-specific location consent and booking consent. Nexus must distinguish:

- explaining transportation options;
- preparing a request;
- asking permission to use a location;
- submitting a request to a configured provider;
- receiving provider confirmation.

Location permission alone does not authorize booking or dispatch.

## Restricted Domain Rules

Additional restrictions apply to:

- `healthcare_transport`
- `emergency`
- `payments`
- `location`
- `minors_family_support`
- `marketplace_transactions`
- `regulated_records`

These domains may require identity, consent, role-based permission, provider authorization, cost disclosure, and audit logging before live action can be enabled.

## Standard User Expectations

The Standard User build may explain transportation requirements or prepare a non-executing checklist, but it must not:

- request a ride;
- dispatch a driver;
- contact a transportation provider;
- share location silently;
- track the user in the background;
- process fare or payment;
- open provider links silently;
- claim a ride was confirmed;
- bypass explicit approval;
- bypass audit logging.

## Safe Future Copy

Approved posture:

- “I can prepare the transportation request, but I cannot submit it until the provider connector is active and you approve.”
- “Location sharing requires your permission and a clear purpose.”
- “No ride has been requested.”
- “Provider confirmation is required before this can be treated as booked.”

Avoid:

- “Your ride is booked.”
- “I dispatched a driver.”
- “I shared your location.”
- “The provider is on the way.”
- “Payment has been processed.”

## QA Expectations

Phase 55 QA must verify:

- this readiness contract is present;
- transportation execution remains disabled by default;
- location consent, booking consent, explicit approval, provider confirmation, and audit requirements are enumerated;
- restricted domains are documented;
- Standard User transportation execution remains blocked;
- no app, server, route, provider, dispatch, location, payment, storage, network, or external-link hook was added.

Phase 55 itself remains a readiness boundary only.
