# Nexus RT6 - Standard User Controlled Read-Only Preview Gate

RT6 defines a dormant Standard User live-source preview gate. The gate is a contract module only; it is not loaded by `public/index.html`, `public/app.js`, or `server.js`.

## Required Flags

All three flags must be explicitly enabled before any future Standard User live-source preview is eligible:

- `NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED`
- `NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED`
- `NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED`

Default behavior with flags off is no visible behavior change, no provider calls, no preview cards, no network calls, no user actions, and no Standard User runtime activation.

## Allowed Preview Categories

- weather
- agriculture context
- current news/security awareness
- job information
- shipment information with explicit tracking/reference text only
- music/media information

## Blocked Preview Categories

- emergency dispatch
- medical/pharmacy
- purchases/payments
- application submission
- provider contact
- calls/messages
- booking/scheduling
- location sharing or browser geolocation
- account login/account creation

## Safety Contract

The gate grants preview eligibility only. It grants no execution controls, provider handoff, permission prompts, location permission, browser geolocation, backend writes, pending actions, auto-navigation, calls, messages, payments, purchases, booking, emergency dispatch, marketplace transaction, medical/pharmacy action, camera, microphone, or account behavior.
