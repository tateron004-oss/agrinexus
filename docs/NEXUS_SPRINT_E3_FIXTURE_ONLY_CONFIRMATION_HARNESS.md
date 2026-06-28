# Nexus Sprint E3 - Fixture-Only Confirmation Harness

## Purpose

Sprint E3 adds fixture-only confirmation examples and a deterministic local harness that validates them against the Sprint E2 inert confirmation contract.

Current base after E2: `34df1a38fc31e771e0a588cc7ded95d5d77acfbf`.

Sprint E3 continues the User Confirmation and Approval Framework. It remains fixture-only and does not change Standard User runtime behavior.

E3 remains non-runtime and non-executing. It does not import confirmations into `public/app.js`, `public/index.html`, or `server.js`. It does not mutate files, write storage, touch `db.json`, use the DOM, perform network requests, create backend state, open providers, create pending actions, or execute any confirmation.

## Files

- Fixture file: `fixtures/nexus/confirmations.json`
- Harness: `scripts/nexus-sprint-e3-confirmation-harness.js`
- QA guard: `scripts/nexus-sprint-e3-confirmation-harness-qa.js`

## Fixture Examples

The E3 fixture set contains six examples:

1. Approve agriculture training review intent.
2. Approve irrigation learning review intent.
3. Approve farm jobs review intent.
4. Approve AgriTrade browse review intent.
5. Blocked call confirmation attempt.
6. Blocked payment confirmation attempt.

Every fixture is approval-intent-only, final-execution-gate-required, and non-executing.

## Required Fixture Invariants

Every fixture must satisfy the E2 contract:

- `approvalIntentOnly: true`
- `requiresFinalExecutionGate: true`
- `executionAuthority: false`
- all required confirmation fields are present;
- all required blocked execution channels are present;
- allowed `confirmationType`;
- non-empty title, summary, risk disclosure, evidence requirement, source packet requirement, user-facing language, safe use notes, and limitations.

## Harness Behavior

The E3 harness:

- reads `fixtures/nexus/confirmations.json`;
- validates each fixture through `isSafeApprovalIntentConfirmation(confirmation)`;
- reports deterministic pass/fail output;
- does not mutate fixture files;
- does not write output files;
- does not access network;
- does not access DOM;
- does not touch `db.json`;
- does not create pending actions;
- does not execute any confirmation.

## Runtime Boundary

The fixture file is for QA and contract hardening only. It is not a Standard User runtime data source. Future runtime work must pass separate flag, browser, safety, and approval gates before any confirmation preview becomes visible.

## QA Guard

The QA guard verifies:

- documentation exists;
- fixture file exists and contains six confirmations;
- each required fixture example exists;
- harness source is read-only and deterministic;
- each fixture passes the E2 validator;
- no fixture grants execution authority;
- all fixtures include blocked provider, call, message, payment, location, camera, emergency, medical, pharmacy, backend-write, and pending-action channels;
- package alias and safe-suite wiring exist.

## Conclusion

Sprint E3 proves confirmations can be represented as local approval-intent-only fixtures without creating runtime authority. Sprint E4 can build evidence and risk mapping on top of the same non-executing contract.
