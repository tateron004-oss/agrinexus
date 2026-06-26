# Nexus Location Sharing Readiness Contract

Phase: 56 - Location-sharing workflow
Status: inert readiness contract and deterministic QA only
Related roadmap row: `| Phase 56 | Location-sharing workflow | Share location by consent | location adapter | future | sensitive | browser/device provider | purpose consent/audit | location QA | no background tracking |`

## Scope Decision

Phase 56 does not request, read, share, store, transmit, or track location. Location sharing is sensitive because it can expose a user's whereabouts, safety context, care access, marketplace movement, or family details.

This phase creates the readiness contract that must be satisfied before Nexus may share location through any browser, device, provider, map, transportation, healthcare, marketplace, or emergency workflow.

This phase does not activate:

- browser geolocation
- device location APIs
- location sharing
- background tracking
- live tracking
- map-provider location transmission
- transportation location handoff
- healthcare location handoff
- emergency dispatch location handoff
- marketplace location sharing
- external navigation
- Standard User runtime location-sharing behavior
- storage or network side effects
- backend behavior changes

## Contract Artifact

The inert contract lives in:

- `public/nexus-location-sharing-readiness-contract.js`

It is intentionally not loaded by `public/index.html`, not consumed by `public/app.js`, and not wired by `server.js`.

## Default Readiness Posture

The default contract keeps location sharing disabled:

- `phase: "56"`
- `riskTier: "sensitive"`
- `readinessStatus: "blocked"`
- `locationRequestEnabled: false`
- `locationSharingEnabled: false`
- `backgroundTrackingEnabled: false`
- `liveTrackingEnabled: false`
- `browserGeolocationEnabled: false`
- `deviceLocationEnabled: false`
- `providerLocationHandoffEnabled: false`
- `externalNavigationAllowed: false`
- `standardUserLocationSharingAllowed: false`
- `executionAllowed: false`
- `liveActionEnabled: false`

Nexus may explain what location sharing would require, but it must not request or transmit location until a purpose-specific consent, permission, destination, audit path, and configured provider pathway exist.

## Required Preconditions Before Location Sharing

Before any future location sharing can be enabled, Nexus must verify and visibly present:

- `resolvedRequester`
- `locationPurpose`
- `locationRecipientOrDestination`
- `locationPrecision`
- `sharingDuration`
- `providerOrSurfaceDisplay`
- `permissionState`
- `purposeConsent`
- `auditEvent`
- `explicitUserApproval`
- `cancellationPath`
- `revocationPath`
- `noBackgroundTracking`
- `noSilentLocationRequest`
- `noHiddenLocationTransmission`

## Purpose Consent Boundary

Location permission is not universal permission. Nexus must ask for the purpose and destination before any future sharing step. Examples:

- transportation pickup support;
- nearby public resource lookup;
- provider handoff;
- emergency support;
- marketplace meetup context.

Each purpose requires separate consent and audit coverage.

## Restricted Domain Rules

Additional restrictions apply to:

- `healthcare`
- `emergency`
- `transportation_dispatch`
- `marketplace_transactions`
- `minors_family_support`
- `regulated_records`
- `payments`
- `account_identity`

These domains may require identity, consent, role-based permission, provider authorization, safety disclosure, and audit logging before live location sharing can be enabled.

## Standard User Expectations

The Standard User build may explain why location is needed or ask the user to review permission requirements, but it must not:

- request browser/device location automatically;
- share location silently;
- track in the background;
- transmit location to a provider;
- open external navigation silently;
- claim a location was shared;
- bypass explicit approval;
- bypass audit logging.

## Safe Future Copy

Approved posture:

- “I can prepare the location-sharing step, but I cannot share your location until you approve the purpose and destination.”
- “Location sharing requires your browser or device permission.”
- “No location has been shared.”
- “Background tracking is not enabled.”

Avoid:

- “I shared your location.”
- “I am tracking you.”
- “The provider can see where you are.”
- “Your location has been sent.”
- “I dispatched help using your location.”

## QA Expectations

Phase 56 QA must verify:

- this readiness contract is present;
- location sharing remains disabled by default;
- purpose consent, permission, explicit approval, cancellation, revocation, and audit requirements are enumerated;
- no background tracking is allowed;
- restricted domains are documented;
- Standard User location-sharing execution remains blocked;
- no app, server, route, browser geolocation, device location, provider, map, storage, network, or external-navigation hook was added.

Phase 56 itself remains a readiness boundary only.
