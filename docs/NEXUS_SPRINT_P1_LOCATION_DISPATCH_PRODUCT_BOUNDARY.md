# Sprint P1 - Location/Dispatch Product Boundary

Sprint P prepares location sharing and field dispatch workflows for future permission-gated review, consent, dry-run, and final-gated execution. P1 is a product boundary only. It does not access live geolocation, share location, execute map actions, dispatch services, contact providers, write backend state, or create real pending actions.

## Scope

Nexus may eventually help users prepare location-sharing requests, review dispatch needs, explain consent requirements, and prepare non-executing dispatch packets. In Sprint P, all location and dispatch behavior remains inert and non-executing.

## Boundary Terms

- Location intent: a review-only statement that the user may want to share or use a location later.
- Dispatch intent: a review-only statement that the user may want a field agent, transport, clinic, provider, or service dispatched later.
- Location target: a farm, home, clinic, meeting point, route, region, or user-provided place that must be visible and confirmed.
- Consent packet: the future proof that the user approved the location or dispatch step.
- Dry-run dispatch packet: a non-executing simulation packet with no provider or field-service action.

## Supported Future Categories

- farm location sharing review
- care access location review
- transportation pickup review
- field agent dispatch review
- mobile clinic visit review
- provider service area review
- map route review
- ambiguous location or dispatch request
- blocked live location/dispatch request

## Required Future Fields

Any future location/dispatch contract must include:

- locationDispatchIntentId
- locationDispatchIntentType
- targetIdentityResolutionId
- targetDisplayName
- requestedLocationDisplay
- locationPrecisionRequirement
- dispatchCategory
- dispatchPurpose
- providerOrServiceRequirement
- consentRequirement
- dryRunPacket
- locationSharingConsentRequired
- providerConfirmationRequired
- userApprovalRequired
- finalExecutionGateRequired
- executionAuthority
- riskTier
- evidenceRequirement
- sourcePacketRequirement
- blockedExecutionChannels
- safeUseNotes
- limitations

## Required Safety Defaults

Every valid location/dispatch intent must require:

- `locationSharingConsentRequired: true`
- `providerConfirmationRequired: true`
- `userApprovalRequired: true`
- `finalExecutionGateRequired: true`
- `executionAuthority: false`

## Blocked in Sprint P

Sprint P must not:

- access live geolocation
- share location
- execute map actions
- dispatch providers, field agents, transport, mobile clinics, or services
- contact providers or drivers
- open external maps or navigation
- send calls, SMS, WhatsApp, Telegram, email, or in-app messages
- request camera or microphone
- process payments
- execute marketplace, medical, pharmacy, or emergency workflows
- write backend state
- write browser storage
- create real pending actions

## Standard User Protection

The Standard User build must remain safe. Location or dispatch requests may be explained or blocked by existing safe behavior, but Sprint P must not add visible location-sharing controls, dispatch previews, map execution controls, provider handoff, or hidden execution metadata until later flag-gated phases are validated.

## Browser Validation Requirements

Before any runtime-visible location/dispatch preview appears, browser validation must confirm:

- no browser geolocation permission is requested automatically.
- no location is shared automatically.
- no map, navigation, or dispatch action executes.
- no provider, driver, field agent, clinic, or service is contacted.
- no hidden/debug-only location or dispatch metadata is visible.
- all location/dispatch language is review-only and final-gated.
- high-risk location and dispatch prompts remain blocked or safely explained.
- console warnings/errors are zero.

## Sprint P2 Readiness

Sprint P2 may add an inert location/dispatch permission contract only if it preserves the required fields, safety defaults, blocked channels, and no-execution boundary in this document.
