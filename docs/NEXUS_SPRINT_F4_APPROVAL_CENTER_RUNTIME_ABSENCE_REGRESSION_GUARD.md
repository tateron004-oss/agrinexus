# Nexus Sprint F4 - Approval Center Runtime Absence Regression Guard

Current base: `87b6480ca30d774343090c70d2a3773fa3be9e86`

Sprint F4 adds a static regression guard proving the Sprint F Approval Center artifacts remain absent from Standard User runtime. This phase is documentation and deterministic QA only. It does not add runtime imports, script tags, UI, approval buttons, persistence, audit writes, provider handoff, network calls, storage writes, backend writes, permission prompts, or execution behavior.

## Purpose

Prevent accidental drift where Approval Center readiness artifacts become runtime activation.

Sprint F4 protects:

- F1 Approval Center runtime activation readiness gate;
- F2 Approval Center feature flag contract;
- F3 Approval Center flag contract harness;
- Phase 49 Approval Center contract.

## Runtime Absence Requirements

The following artifacts must not be loaded by `public/index.html`, `public/app.js`, or `server.js`:

- `public/nexus-approval-center-contract.js`;
- `public/nexus-approval-center-feature-flag.js`;
- `scripts/nexus-sprint-f3-approval-center-flag-contract-harness.js`;
- `fixtures/nexus/approval-center-feature-flags.json`;
- Sprint F QA scripts.

## Blocked Runtime Behavior

Sprint F artifacts must not introduce:

- visible Approval Center UI;
- Approval Center buttons;
- event handlers;
- confirmation bypasses;
- approval persistence;
- audit writes;
- provider handoff;
- native bridge dispatch;
- calls;
- messages;
- WhatsApp, Telegram, SMS, or email sending;
- payment execution;
- marketplace transactions;
- location sharing;
- camera or microphone activation;
- health, medical, pharmacy, prescription, or FHIR execution;
- appointment scheduling;
- transportation dispatch;
- emergency dispatch;
- account or identity mutation;
- external navigation;
- fetch or network calls;
- localStorage or sessionStorage writes;
- backend writes;
- real pending action creation;
- execution authority.

## Required Contract Invariants

The guard confirms the F2 feature flag contract still preserves:

- `enabled: false` by default;
- `visibleUiAllowed: false` by default;
- `approvalPersistenceAllowed: false`;
- `auditWriteAllowed: false`;
- `providerHandoffAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

The guard confirms the F3 fixture harness still proves unsafe authority attempts normalize back to no-execution values.

## Standard User Safety Posture

In the current Standard User build:

- no Approval Center runtime is active;
- no Approval Center visible surface appears;
- no approval state is persisted;
- no audit event is written;
- no provider or regulated action can be executed by Approval Center artifacts;
- existing confirmation and permission gates remain untouched.

## Browser Validation Implication

Sprint F4 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that imports Approval Center artifacts, renders Approval Center UI, writes approval records, writes audit events, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk prompt checks;
- high-risk prompt checks;
- console warning/error checks;
- runtime mutation restoration.

## QA Expectations

Sprint F4 QA must verify:

- this regression guard exists;
- F1, F2, F3, and Phase 49 artifacts exist;
- runtime files do not load Approval Center contracts, feature flags, fixtures, or harnesses;
- F2 default and unsafe-attempt behavior remains no-execution;
- F3 fixtures remain deterministic;
- package alias and safe-suite wiring exist.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint F5 - Approval Center Lane Closeout`

Sprint F5 should close the Approval Center readiness lane, summarize F1-F4, and recommend the next safe lane without activating runtime behavior.
