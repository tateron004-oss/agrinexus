# Nexus Sprint L6 - Flag-Gated Call/Message Preview

Sprint L6 adds an inert, flag-gated call/message preview model for local-safe fixtures.

This phase does not add Standard User runtime UI, live contact lookup, live provider lookup, provider dispatch, provider handoff, external navigation, calls, messages, WhatsApp, Telegram, SMS, email, scheduling, payments, purchases, location sharing, camera or microphone access, medical/pharmacy behavior, emergency routing, marketplace transactions, backend writes, storage writes, network calls, or pending real-world actions.

## Preview Purpose

The preview model can describe a future review-only card for a call/message intent. It is not rendered into the app, does not create DOM, does not add buttons or links, and does not create event handlers. It exists so QA can prove the safe shape of a future preview before any runtime wiring.

## Activation Rules

Preview metadata is returned only when:

- L5 flag resolution is enabled in `local-safe-fixture` context
- L4 risk/evidence mapping validates the intent
- `executionAuthority` remains `false`
- `executionAllowed` remains `false`
- no provider handoff, external navigation, native bridge, network, storage, or backend write is allowed

Standard User context always returns hidden preview state.

## Preview Model Fields

- `visible`
- `reviewOnly`
- `title`
- `recipientDisplayName`
- `recipientChannelType`
- `messageDraft`
- `callPurpose`
- `riskTier`
- `evidenceSummary`
- `requiredUserAction`
- `safeUseNotes`
- `limitations`
- `controls`
- `links`
- `eventHandlers`
- `executionAllowed`

## Runtime Boundary

The preview module is not imported by:

- `public/index.html`
- `public/app.js`
- `server.js`

It is local-safe source and QA scaffolding only.
