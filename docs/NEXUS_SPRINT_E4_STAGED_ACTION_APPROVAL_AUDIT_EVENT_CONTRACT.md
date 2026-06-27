# Nexus Sprint E4 - Staged Action Approval Audit Event Contract

Current base: `33ad581f4811c4336cae830955528ece7ff56908`

Sprint E4 defines an inert audit event contract for staged action approval lifecycle transitions. This phase adds a standalone contract module and deterministic QA only. It does not write audit events to storage or backend systems, render UI, create approval buttons, contact providers, execute actions, or change Standard User runtime behavior.

## Purpose

Define the minimum audit event shape needed to describe future staged action approval lifecycle transitions without creating persistence or execution authority.

An approval audit event is not an execution event. It records what would need to be logged when a future user reviews, accepts, rejects, cancels, expires, or blocks an approval record.

## Contract Module

Sprint E4 adds:

`public/nexus-staged-action-approval-audit-event.js`

The module is standalone and inert:

- it can be loaded by deterministic QA;
- it exports constants, validators, and a safe factory;
- it has no DOM access;
- it has no fetch or network calls;
- it has no localStorage or sessionStorage writes;
- it has no backend writes;
- it has no route changes;
- it has no native bridge calls;
- it has no provider handoff;
- it has no call, message, payment, marketplace, camera, location, health, pharmacy, transportation, or emergency execution.

The module must not be imported by `public/index.html`, `public/app.js`, or `server.js` during Sprint E4.

## Required Audit Event Fields

Every approval audit event must include:

- auditEventId
- approvalRecordId
- stagedActionId
- stagedActionType
- eventType
- approvalState
- previousApprovalState
- nextApprovalState
- riskTier
- sourceSurface
- actorRole
- actorRef
- sessionRef
- targetSummary
- providerSummary
- evidencePacketRef
- consentState
- permissionState
- auditRequired
- resultStatus
- blockedReason
- cancellationReason
- redactedPayload
- retentionPolicy
- createdAt

## Allowed Event Types

Allowed event types are:

- `approval.preview.created`
- `approval.review.opened`
- `approval.awaiting_explicit_confirmation`
- `approval.accepted.inert`
- `approval.rejected`
- `approval.cancelled`
- `approval.expired`
- `approval.blocked`
- `approval.validation.failed`

The `approval.accepted.inert` event type is intentionally named to show that acceptance is data only in this phase and does not execute anything.

## Required Invariants

Every valid audit event must satisfy these invariants:

- `executionRecorded` must be `false`;
- `providerHandoffRecorded` must be `false`;
- `backendWriteOccurred` must be `false`;
- `storageWriteOccurred` must be `false`;
- `networkOccurred` must be `false`;
- `runtimeUiOccurred` must be `false`;
- `auditRequired` must be `true`;
- `redactedPayload` must be present;
- sensitive raw data must not be logged;
- result status must describe audit/event state, not real-world execution;
- cancellation and blocked reasons must be explicit when applicable.

## Sensitive Data Exclusions

Audit events must not include raw:

- phone numbers;
- email addresses;
- full names;
- precise location;
- addresses;
- payment details;
- account secrets;
- medical records;
- prescription details;
- emergency contact details;
- provider credentials;
- native bridge payloads.

## Result Statuses

Allowed result statuses are:

- `recorded_for_review`
- `accepted_without_execution`
- `rejected_without_execution`
- `cancelled_without_execution`
- `expired_without_execution`
- `blocked_without_execution`
- `validation_failed_without_execution`

## Runtime Boundary

Sprint E4 does not:

- persist audit events;
- send audit events to the backend;
- create audit queues;
- create approval UI;
- interpret user confirmation;
- execute staged actions;
- open providers;
- request browser permissions;
- call, message, pay, schedule, dispatch, or share data.

## Future Sprint E5 Recommendation

The safest next sprint is:

`Sprint E5 - Staged Action Approval Lifecycle Harness`

Sprint E5 should add deterministic lifecycle fixtures from approval record to audit event across preview, awaiting, rejected, cancelled, expired, blocked, and accepted-inert states. It should remain no-execution and should not persist audit events.

## Sprint E4 Conclusion

Sprint E4 defines the approval audit event contract only. Nexus remains review-only and no-execution by default, and audit event data remains inert unless a future approved runtime logging phase is created.
