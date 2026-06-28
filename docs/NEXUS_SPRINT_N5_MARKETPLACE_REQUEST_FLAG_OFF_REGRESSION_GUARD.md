# Sprint N5 - Flag-Off Marketplace Request Regression Guard

Sprint N5 defines the default-off guard for any future marketplace request preview surface. The guard allows test-safe eligibility checks while proving the Standard User runtime remains unchanged.

## Flag Contract

- flag name: `NEXUS_MARKETPLACE_REQUEST_PREVIEW_ENABLED`
- default state: `false`
- Standard User state: `false`, even if a caller passes a flag without the approved local-safe fixture context
- local-safe fixture state: may return preview eligibility for non-restricted fixtures only
- execution authority: always `false`

## Required No-Execution Boundary

The flag guard does not process payments, start checkout, move money, place orders, dispatch sellers, contact sellers, call, message, email, open WhatsApp, open Telegram, request location, open camera, execute medical/pharmacy workflows, dispatch emergency help, write backend state, write browser storage, navigate externally, or create pending real-world actions.

## Standard User Protection

`public/index.html`, `public/app.js`, and `server.js` must not load this guard or enable the preview flag. Low-risk prompts and high-risk prompts must not produce marketplace request preview UI in Standard User until a later approved runtime wiring phase completes browser validation.

## Future Use

A later phase may consume this guard from an inert preview builder. That future builder must still require a valid Sprint N2 request, Sprint N4 evidence mapping, explicit local/test-safe enablement, non-restricted risk, and no execution authority.
