# Nexus Sprint G1 - Approval Audit Persistence Readiness Gate

Current base: `941a8594ab388f563b01e132f01e3de54410efc8`

Sprint G1 defines the readiness gate for future Approval Center audit persistence. This phase is documentation and deterministic QA only. It does not write audit records, create an audit backend, persist approval state, add storage, add network calls, change server behavior, render UI, or grant execution authority.

## Purpose

Sprint G1 answers one narrow question:

What must be true before Nexus may safely persist approval-related audit records?

The answer is not "because an approval center exists." Approval audit persistence requires a reviewed audit backend, retention policy, redaction policy, consent policy, role projection policy, provider policy, browser validation, rollback plan, and explicit product approval.

## Prior Lane Dependencies

Sprint G1 depends on:

- Phase 48 Audit Log Runtime Contract;
- Phase 49 Approval Center Contract;
- Sprint E approval record and audit event contracts;
- Sprint F Approval Center readiness lane;
- confirmation UI contract;
- provider handoff boundary contract.

## Required Preconditions Before Audit Persistence

Approval audit persistence must remain blocked until all of these are true:

- audit backend reviewed and approved;
- retention policy defined;
- redaction policy defined;
- role projection policy defined;
- consent policy defined;
- provider policy defined;
- approval record schema reviewed;
- approval event schema reviewed;
- source surface captured;
- risk tier captured;
- action type captured;
- target summary minimized;
- provider summary minimized when relevant;
- confirmation state captured;
- permission state captured;
- consent state captured;
- result status captured;
- redacted payload only;
- expiry or retention class captured;
- explicit user approval captured for high-risk actions;
- cancellation path preserved;
- rollback plan documented;
- browser validation completed if visible runtime behavior changes.

## What Remains Blocked

Sprint G1 does not allow:

- `runtimeAuditWriteEnabled: true`;
- `auditPersistenceEnabled: true`;
- `auditBackendEnabled: true`;
- `auditExportEnabled: true`;
- backend writes;
- localStorage or sessionStorage writes;
- network calls;
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
- real pending action creation;
- execution authority.

## Approval Center Relationship

The Approval Center can prepare future review states, but it must not persist audit records until this gate is satisfied. Sprint F feature flags remain no-execution defaults:

- `approvalPersistenceAllowed: false`;
- `auditWriteAllowed: false`;
- `backendWriteAllowed: false`;
- `storageWriteAllowed: false`;
- `networkAllowed: false`;
- `executionAuthority: false`;
- `noExecution: true`.

## Audit Runtime Relationship

The Phase 48 audit runtime contract remains not configured by default:

- `auditBackendEnabled: false`;
- `auditPersistenceEnabled: false`;
- `runtimeAuditWriteEnabled: false`;
- `auditExportEnabled: false`;
- `liveActionEnabled: false`;
- `noExecution: true`.

The audit runtime contract may describe future schema readiness, but it is not an audit service and is not a persistence adapter.

## Redaction And Retention Requirements

Before persistence may be enabled, the future implementation must prove:

- phone numbers are redacted;
- email addresses are redacted;
- names are minimized;
- health context is redacted;
- payment context is redacted;
- location context is minimized;
- identity secrets are excluded;
- provider credentials are excluded;
- raw phone storage is blocked unless explicitly approved;
- raw health storage is blocked unless explicitly approved;
- raw payment storage is blocked unless explicitly approved;
- precise location storage is blocked unless explicitly approved;
- provider credential storage is blocked.

Retention must define:

- retention class;
- expiry field;
- default retention duration;
- deletion or expiry behavior;
- export rules;
- admin review rules;
- regional compliance constraints.

## Standard User Safety Posture

The Standard User runtime must remain unchanged:

- no audit persistence UI appears;
- no Approval Center audit queue appears;
- no approval record is stored;
- no audit event is stored;
- no audit export is available;
- no runtime source imports `public/nexus-audit-log-runtime-contract.js`;
- no runtime source imports `public/nexus-approval-center-feature-flag.js`;
- no runtime source imports approval/audit harnesses or fixtures.

## Browser Validation Implication

Sprint G1 does not require browser validation because it changes only documentation, package aliases, and deterministic QA. Any future phase that writes audit records, persists approval state, renders audit UI, exports logs, or changes Standard User visible behavior must run browser validation with:

- `node server.js`;
- `http://127.0.0.1:4182/`;
- `Start as User`;
- low-risk prompt checks;
- high-risk prompt checks;
- console warning/error checks;
- runtime mutation restoration.

## Rollback Strategy

If a future sprint accidentally enables audit persistence:

1. Revert runtime audit write wiring first.
2. Restore `runtimeAuditWriteEnabled: false`.
3. Restore `auditPersistenceEnabled: false`.
4. Restore `approvalPersistenceAllowed: false`.
5. Restore `auditWriteAllowed: false`.
6. Re-run Phase 48 audit runtime QA.
7. Re-run Sprint F4 and F5 QA.
8. Re-run Sprint G1 QA.
9. Re-run `node scripts/qa-suite.js nexus-workforce`.
10. Re-run `node scripts/qa-suite.js all-safe`.
11. Browser validate if visible behavior changed.

## Next Safe Sprint Recommendation

Recommended next sprint:

`Sprint G2 - Approval Audit Persistence Contract`

Sprint G2 should remain inert. It may define a no-execution persistence record shape and fixture harness, but it must not write to storage, send network requests, create backend endpoints, or persist runtime audit events.
