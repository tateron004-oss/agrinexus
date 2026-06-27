# Nexus Sprint E5 - Staged Action Approval Lifecycle Harness

Current base: `c8796099f8981abf6a6aa2307f16b49e00bfb7bb`

Sprint E5 adds deterministic lifecycle fixture coverage across the Sprint E2 approval record contract and the Sprint E4 approval audit event contract. This phase is documentation and QA only. It does not add runtime UI, user approval handling, storage writes, backend audit logging, provider handoff, network calls, or execution.

## Purpose

Prove that future approval lifecycle transitions can be represented as inert records and inert audit events without creating runtime authority.

The lifecycle harness validates:

- preview created;
- review opened;
- awaiting explicit confirmation;
- accepted inert;
- rejected;
- cancelled;
- expired;
- blocked;
- validation failed.

## Lifecycle Pair Contract

Each lifecycle fixture pairs:

- one staged action approval record;
- one staged action approval audit event;
- one expected previous approval state;
- one expected next approval state;
- one expected no-execution result status.

The pair is valid only if both the record and the audit event validate under their own contracts and all no-execution invariants remain intact.

## Required Pair Invariants

Every lifecycle pair must preserve:

- approval record `executionAuthority: false`;
- approval record `providerHandoffAllowed: false`;
- approval record `backendWriteAllowed: false`;
- approval record `storageWriteAllowed: false`;
- approval record `networkAllowed: false`;
- approval record `runtimeUiAllowed: false`;
- approval event `executionRecorded: false`;
- approval event `providerHandoffRecorded: false`;
- approval event `backendWriteOccurred: false`;
- approval event `storageWriteOccurred: false`;
- approval event `networkOccurred: false`;
- approval event `runtimeUiOccurred: false`;
- audit-required state;
- visible cancellation path where applicable;
- no-action disclosure;
- redacted payload only.

## Accepted-Inert Boundary

The lifecycle harness may represent `approvalAccepted` only as:

`approval.accepted.inert`

with result status:

`accepted_without_execution`

This does not mean an action was executed. It means a future approval review was accepted as data and would still require later product-approved execution gates, provider availability, consent, permissions, audit persistence, and final handoff controls before any real action could occur.

## Invalid Lifecycle Families

Lifecycle fixtures must fail when:

- the approval record enables execution;
- the approval event records execution;
- provider handoff is allowed or recorded;
- backend, storage, network, or runtime UI flags are enabled;
- the record and event refer to different approvalRecordId or stagedActionId values;
- the event nextApprovalState disagrees with the record approvalState;
- accepted lifecycle uses a non-inert event type;
- accepted lifecycle uses an execution result status;
- cancelled lifecycle lacks a cancellation reason;
- blocked lifecycle lacks a blocked reason;
- redacted payload contains sensitive raw data.

## Runtime Boundary

Sprint E5 does not import or load lifecycle helpers from:

- `public/index.html`
- `public/app.js`
- `server.js`

The lifecycle harness exists only in deterministic QA.

## Future Sprint E6 Recommendation

The safest next sprint is:

`Sprint E6 - Staged Action Approval No-Execution Regression Guard`

Sprint E6 should add a static regression guard that inspects the Sprint E approval lane and prevents accidental runtime wiring, persistence, provider handoff, or execution from approval records or audit event metadata.

## Sprint E5 Conclusion

Sprint E5 proves lifecycle-shaped approval data without runtime behavior. Nexus remains review-only and no-execution by default.
