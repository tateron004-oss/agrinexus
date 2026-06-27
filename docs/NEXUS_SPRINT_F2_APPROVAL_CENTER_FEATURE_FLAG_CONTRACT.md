# Nexus Sprint F2 - Approval Center Feature Flag Contract

Current base: `268842055e2cbda6e6449b1fb72e0318677b87c4`

Sprint F2 defines a default-off Approval Center feature flag contract. This phase adds a standalone inert contract module and deterministic QA only. It does not import the module into Standard User runtime, render Approval Center UI, persist approval state, write audit events, contact providers, call, message, pay, navigate externally, request permissions, or execute actions.

## Purpose

Sprint F2 turns the Sprint F1 readiness gate into a concrete default-off flag vocabulary for future work.

The flag exists so a later approved sprint can reason about a visible Approval Center surface without confusing:

- feature flag readiness;
- visible UI permission;
- approval persistence;
- audit writing;
- provider handoff;
- execution authority.

## Feature Flag Name

`NEXUS_APPROVAL_CENTER_VISIBLE_ENABLED`

## Default State

The default state must be:

- `enabled: false`;
- `visibleUiAllowed: false`;
- `approvalPersistenceAllowed: false`;
- `auditWriteAllowed: false`;
- `providerHandoffAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

## Contract Module

The inert contract module is:

`public/nexus-approval-center-feature-flag.js`

It may be loaded by deterministic QA, but it must not be loaded by:

- `public/index.html`;
- `public/app.js`;
- `server.js`.

## Important Boundary

An enabled feature flag is not enough to activate execution.

Even if a future local/test-safe caller passes `enabled: true`, the contract keeps:

- `approvalPersistenceAllowed: false`;
- `auditWriteAllowed: false`;
- `providerHandoffAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

This means flag-on visibility can only ever mean review-only UI readiness until a separate approved sprint changes the persistence and audit boundaries.

## Prohibited Behavior

Sprint F2 must not add:

- runtime imports;
- script tags;
- event handlers;
- Approval Center buttons;
- approval persistence;
- audit writes;
- backend writes;
- localStorage or sessionStorage writes;
- fetch or network calls;
- provider handoff;
- native bridge calls;
- calls;
- messages;
- WhatsApp, Telegram, SMS, or email sending;
- payments;
- marketplace transactions;
- location sharing;
- camera or microphone activation;
- health, medical, pharmacy, prescription, or FHIR execution;
- appointment scheduling;
- transportation dispatch;
- emergency dispatch;
- account or identity mutation;
- external navigation;
- execution authority.

## Relationship To Sprint F1

Sprint F1 remains the activation gate. Sprint F2 only defines the default-off flag contract. Future visible Approval Center work still requires every Sprint F1 precondition:

- product approval;
- safety approval;
- browser validation plan and evidence;
- rollback plan;
- import boundary review;
- visible copy review;
- audit persistence design;
- approval record persistence design;
- role, consent, confirmation, and cancellation policies;
- no-execution regression QA.

## QA Expectations

Sprint F2 QA must verify:

- the flag contract doc exists;
- the feature flag module exists;
- the flag defaults off;
- flag-on test input cannot grant execution authority;
- persistence, audit write, provider handoff, backend write, storage write, and network authority remain false;
- runtime files do not load the module;
- no unsafe API or execution hook is introduced;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint F3 - Approval Center Flag Contract Harness`

Sprint F3 should add deterministic fixtures for flag-off, flag-on-review-only, and unsafe attempted authority states. It should remain local-safe and non-runtime.
