# Nexus Sprint L5 - Flag-Off Calls/Messaging Regression Guard

Sprint L5 adds a default-off guard for future call/message previews.

This phase does not add runtime UI, live contact lookup, live provider lookup, provider dispatch, provider handoff, external navigation, calls, messages, WhatsApp, Telegram, SMS, email, scheduling, payments, purchases, location sharing, camera or microphone access, medical/pharmacy behavior, emergency routing, marketplace transactions, backend writes, storage writes, network calls, or pending real-world actions.

## Guard Purpose

The guard proves that call/message preview behavior remains unavailable unless a future local/test-safe context explicitly enables it. Standard User runtime remains flag-off and cannot activate communication preview, provider handoff, navigation, native bridge, network, storage, backend writes, or execution.

## Default-Off Rules

- `NEXUS_CALL_MESSAGE_PREVIEW_ENABLED` defaults to `false`.
- Standard User context resolves to disabled.
- Missing context resolves to disabled.
- A flag alone is not execution authority.
- A flag alone is not provider handoff authority.
- A flag alone is not native bridge authority.
- A flag alone is not network, storage, backend, navigation, or communication authority.

## Allowed Test-Safe Context

A future fixture may request preview only when:

- context is `local-safe-fixture`
- flag is explicitly `true`
- the mapped intent validation is valid
- `executionAuthority` remains `false`
- `executionAllowed` remains `false`

## Runtime Boundary

The guard module is not imported by:

- `public/index.html`
- `public/app.js`
- `server.js`

It is local-safe source and QA scaffolding only.
