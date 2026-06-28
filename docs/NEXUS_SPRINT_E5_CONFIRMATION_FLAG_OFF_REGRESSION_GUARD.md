# Nexus Sprint E5 - Confirmation Flag-Off Regression Guard

## Purpose

Sprint E5 prepares a default-disabled confirmation preview flag contract and proves confirmation preview behavior is not runtime-visible while disabled.

Current base after E4: `9d9afb6031d72cdaa6bd0c0a10536d021eb7a08f`.

Sprint E5 remains inert. It does not add visible UI, runtime confirmation rendering, provider handoff, calls, messages, payments, location sharing, camera access, medical/pharmacy workflows, emergency routing, backend writes, storage writes, or pending real-world actions.

## Feature Flag

Flag name:

- `NEXUS_USER_CONFIRMATION_PREVIEW_ENABLED`

Default:

- `false`

The default-off flag means no confirmation preview may appear in Standard User runtime unless a future phase explicitly wires a gated preview path and passes browser validation.

## Flag Contract

Module: `public/nexus-confirmation-preview-flag.js`

The module defines:

- `FLAG_NAME`
- `DEFAULT_CONFIRMATION_PREVIEW_ENABLED`
- `isConfirmationPreviewEnabled(config)`
- `describeConfirmationPreviewFlag(config)`

The module is deterministic and local. It may be used by QA or a later gated runtime phase, but E5 itself does not import it into `public/app.js`, `public/index.html`, or `server.js`.

## Flag-Off Runtime Expectations

While `NEXUS_USER_CONFIRMATION_PREVIEW_ENABLED` is false:

- no confirmation preview is visible;
- no confirmation card is rendered;
- no approval button is rendered;
- no final execution gate UI is rendered;
- no provider handoff is prepared;
- no pending real-world action is created;
- no backend write occurs;
- no storage write occurs;
- no call, message, payment, location, camera, medical, pharmacy, emergency, marketplace, or account action is started.

## Standard User Boundary

The Standard User build remains unchanged in E5. `public/index.html`, `public/app.js`, and `server.js` do not load, import, inject, enable, or route through the confirmation preview flag.

Standard User runtime does not load, import, inject, enable, or route through the confirmation preview flag.

Future runtime-visible confirmation preview work must remain default-off, low-risk-only, evidence-aware, cancellable, and browser-validated.

## Regression Guard

QA script: `scripts/nexus-sprint-e5-confirmation-flag-off-regression-guard-qa.js`

The QA guard verifies:

- documentation exists;
- flag module exists;
- flag name is `NEXUS_USER_CONFIRMATION_PREVIEW_ENABLED`;
- default is false;
- helper returns false by default;
- helper returns true only for explicit true config;
- Standard User runtime does not load the flag module;
- `public/index.html`, `public/app.js`, and `server.js` do not enable confirmation preview behavior;
- no unsafe DOM, event, network, storage, navigation, provider, permission, backend write, or execution behavior is introduced;
- package alias and safe-suite wiring exist.

## Rollback

If a future confirmation preview appears unexpectedly while the flag is false:

1. disable or remove the preview wiring;
2. confirm the flag helper returns false by default;
3. restore runtime data such as `db.json`;
4. rerun focused Sprint E QA;
5. rerun `node scripts/qa-suite.js nexus-workforce`;
6. rerun `node scripts/qa-suite.js all-safe`.

## Conclusion

Sprint E5 establishes the flag-off guard only. Sprint E6 may implement a first controlled confirmation UI preview only behind an explicit default-off flag and only with browser validation.
