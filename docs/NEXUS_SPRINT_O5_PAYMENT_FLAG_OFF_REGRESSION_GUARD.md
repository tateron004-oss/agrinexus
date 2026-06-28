# Sprint O5 - Flag-Off Payment Regression Guard

Sprint O5 defines the default-off guard for any future payment safety preview surface. The guard allows test-safe dry-run eligibility checks while proving the Standard User runtime remains unchanged.

## Flag Contract

- flag name: `NEXUS_PAYMENT_PREVIEW_ENABLED`
- default state: `false`
- Standard User state: `false`, even if a caller passes a flag without the approved local-safe fixture context
- local-safe fixture state: may return dry-run preview eligibility for valid payment fixtures only
- execution authority: always `false`

## Required No-Execution Boundary

The flag guard does not move money, process payments, submit wallet transfers, start checkout, store credentials, call payment APIs, create provider payment intents, contact payees, call, message, email, open WhatsApp, open Telegram, request location, open camera, execute medical/pharmacy workflows, dispatch emergency help, write backend state, write browser storage, navigate externally, or create pending real-world actions.

## Standard User Protection

`public/index.html`, `public/app.js`, and `server.js` must not load this guard or enable the preview flag. Low-risk prompts and high-risk prompts must not produce payment preview UI in Standard User until a later approved runtime wiring phase completes browser validation.

## Future Use

A later phase may consume this guard from an inert preview builder. That future builder must still require a valid Sprint O2 payment intent, Sprint O4 evidence mapping, explicit local/test-safe enablement, dry-run-only state, and no execution authority.
