# Nexus Sprint D3 - Fixture-Only Staged Action Harness

## Purpose

Sprint D3 adds fixture-only staged action examples and a deterministic local harness that validates them against the Sprint D2 inert staged action contract.

D3 remains non-runtime and non-executing. It does not import staged actions into `public/app.js`, `public/index.html`, or `server.js`. It does not mutate files, write storage, touch `db.json`, use the DOM, perform network requests, create backend state, open providers, or execute any staged action.

## Files

- Fixture file: `fixtures/nexus/staged-actions.json`
- Harness: `scripts/nexus-sprint-d3-staged-action-harness.js`
- QA guard: `scripts/nexus-sprint-d3-staged-action-harness-qa.js`

## Fixture Examples

The D3 fixture set contains six examples:

1. Agriculture training review action.
2. Irrigation learning review action.
3. Farm jobs review action.
4. AgriTrade browse review action.
5. Blocked call request review note.
6. Blocked payment request review note.

Every fixture is review-only, approval-required, and non-executing.

## Required Fixture Invariants

Every fixture must satisfy the D2 contract:

- `reviewOnly: true`
- `requiresUserApproval: true`
- `executionAuthority: false`
- all required staged action fields are present;
- all required blocked execution channels are present;
- allowed `stagedActionType`;
- non-empty title, summary, evidence requirement, source packet requirement, safe use notes, and limitations.

## Harness Behavior

The D3 harness:

- reads `fixtures/nexus/staged-actions.json`;
- validates each fixture through `isSafeReviewOnlyStagedAction(action)`;
- reports deterministic pass/fail output;
- does not mutate fixture files;
- does not write output files;
- does not access network;
- does not access DOM;
- does not touch `db.json`;
- does not create pending actions;
- does not execute any staged action.

## Runtime Boundary

The fixture file is for QA and contract hardening only. It is not a Standard User runtime data source. Future runtime work must pass separate flag, browser, safety, and approval gates before any staged action preview becomes visible.

## QA Guard

The QA guard verifies:

- documentation exists;
- fixture file exists and contains six staged actions;
- each required fixture example exists;
- harness source is read-only and deterministic;
- each fixture passes the D2 validator;
- no fixture grants execution authority;
- all fixtures include blocked call, message, payment, location, camera, provider, emergency, medical, pharmacy, backend-write, and pending-action channels;
- package alias and safe-suite wiring exist.

## Conclusion

Sprint D3 proves staged actions can be represented as local review-only fixtures without creating runtime authority. Sprint D4 can build evidence and accountability mapping on top of the same non-executing contract.
