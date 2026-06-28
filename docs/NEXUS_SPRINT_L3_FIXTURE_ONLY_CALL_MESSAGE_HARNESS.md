# Nexus Sprint L3 - Fixture-Only Call/Message Harness

Sprint L3 adds a fixture-only harness for the inert Sprint L2 call/message intent contract.

This phase does not add runtime UI, live contact lookup, live provider lookup, provider dispatch, provider handoff, external navigation, calls, messages, WhatsApp, Telegram, SMS, email, scheduling, payments, purchases, location sharing, camera or microphone access, medical/pharmacy behavior, emergency routing, marketplace transactions, backend writes, storage writes, network calls, or pending real-world actions.

## Harness Purpose

The harness proves that Nexus can represent communication intent safely before any future provider behavior exists. It reads local fixture records, validates them against the L2 contract, and confirms they remain preview-only with `executionAuthority: false` and `executionAllowed: false`.

## Fixture Coverage

The fixture set covers:

- call saved contact intent
- SMS user-provided contact intent
- WhatsApp agriculture provider message intent
- Telegram training provider message intent
- email workforce provider intent
- blocked emergency call attempt
- blocked payment message attempt
- ambiguous recipient requiring clarification

## Safety Guarantees

Every fixture preserves:

- `channelConfirmationRequired: true`
- `userApprovalRequired: true`
- `finalExecutionGateRequired: true`
- `executionAuthority: false`
- `providerHandoffAllowed: false`
- `externalNavigationAllowed: false`
- `nativeBridgeAllowed: false`
- `networkAllowed: false`
- `storageWriteAllowed: false`
- `backendWriteAllowed: false`
- `executionAllowed: false`

The harness also keeps all blocked execution channels required by Sprint L2, including call, message, SMS, WhatsApp, Telegram, email, provider dispatch, provider handoff, external navigation, native bridge, appointment, payment, purchase, marketplace transaction, location, camera, medical, pharmacy, emergency, backend write, storage write, network call, and pending action.

## Runtime Boundary

The fixture harness is not imported by:

- `public/index.html`
- `public/app.js`
- `server.js`

It is local-safe QA scaffolding only.
