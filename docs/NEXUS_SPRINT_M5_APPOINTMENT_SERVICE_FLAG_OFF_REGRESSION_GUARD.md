# Sprint M5 - Flag-Off Appointment/Service Regression Guard

Sprint M5 defines the default-off guard for any future appointment/service request preview surface. The guard allows test-safe eligibility checks while proving the Standard User runtime remains unchanged.

## Flag Contract

- flag name: `NEXUS_APPOINTMENT_SERVICE_REQUEST_PREVIEW_ENABLED`
- default state: `false`
- Standard User state: `false`, even if a caller passes a flag without the approved local-safe fixture context
- local-safe fixture state: may return preview eligibility for non-restricted fixtures only
- execution authority: always `false`

## Required No-Execution Boundary

The flag guard does not book appointments, dispatch providers, contact providers, call, message, email, open WhatsApp, open Telegram, request location, open camera, process payment, perform marketplace transactions, execute medical/pharmacy workflows, dispatch emergency help, write backend state, write browser storage, navigate externally, or create pending real-world actions.

## Standard User Protection

`public/index.html`, `public/app.js`, and `server.js` must not load this guard or enable the preview flag. Low-risk prompts and high-risk prompts must not produce appointment/service preview UI in Standard User until a later approved runtime wiring phase completes browser validation.

## Future Use

A later phase may consume this guard from an inert preview builder. That future builder must still require a valid Sprint M2 request, Sprint M4 evidence mapping, explicit local/test-safe enablement, non-restricted risk, and no execution authority.
