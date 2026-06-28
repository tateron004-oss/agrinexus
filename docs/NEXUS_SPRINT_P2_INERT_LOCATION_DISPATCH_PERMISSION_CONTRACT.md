# Sprint P2 - Inert Location/Dispatch Permission Contract

Sprint P2 adds an inert location/dispatch permission contract for future location sharing, field dispatch, transportation pickup, mobile clinic visit, provider service area, and map route review data. The contract validates location/dispatch-shaped data without accessing live geolocation, sharing location, executing maps, dispatching services, contacting providers, writing backend state, or creating real pending actions.

## Supported Location/Dispatch Intent Types

- location-intent
- dispatch-intent
- field-agent-dispatch-intent
- transportation-pickup-intent
- mobile-clinic-visit-intent
- service-area-review
- route-review
- clarification-required
- blocked-location-dispatch-request
- unknown

## Supported Dispatch Categories

- farm-location-sharing-review
- care-access-location-review
- transportation-pickup-review
- field-agent-dispatch-review
- mobile-clinic-visit-review
- provider-service-area-review
- map-route-review
- ambiguous-location-dispatch-review
- blocked-live-location-dispatch

## Required Safety State

Every valid location/dispatch intent must include:

- `locationSharingConsentRequired: true`
- `providerConfirmationRequired: true`
- `userApprovalRequired: true`
- `finalExecutionGateRequired: true`
- `executionAuthority: false`

The contract also requires target identity fields, requested location display, location precision requirement, dispatch category, dispatch purpose, provider or service requirement, consent requirement, dry-run packet, evidence requirements, source packet requirements, blocked execution channels, safe use notes, and limitations.

## Blocked Execution Channels

Blocked channels must include geolocation, location-sharing, precise-location, map-execution, navigation, dispatch, provider-dispatch, field-agent-dispatch, transportation-dispatch, mobile-clinic-dispatch, provider-handoff, call, message, SMS, WhatsApp, Telegram, email, payment, checkout, marketplace-transaction, camera, image-capture, medical, pharmacy, emergency, backend-write, storage-write, network-call, and pending-action.

## Runtime Boundary

This module is inert. It must not mutate DOM, add event listeners, fetch network resources, write storage, write backend state, request geolocation, share location, open maps, navigate externally, dispatch services, contact providers, send messages, make calls, create pending real-world actions, or execute location/dispatch intents.

The module is not loaded by `public/index.html`, `public/app.js`, or `server.js`.
