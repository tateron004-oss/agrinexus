# Nexus Sprint E2 - Staged Action Approval Record Contract

Current base: `56186ef56747adce015ba57b13db67ed63f0666e`

Sprint E2 follows Sprint E1 by defining an inert approval record contract for future staged action approval review. This phase adds a standalone contract module and deterministic QA only. It does not add runtime UI, approval buttons, confirmation behavior, backend persistence, provider execution, storage writes, network calls, route changes, or live actions.

## Purpose

Define the minimum approval record shape required before a future staged action can be reviewed for explicit user approval.

An approval record is not an execution record. It is a review artifact that describes what Nexus may prepare, what the user would be approving, what remains blocked, and what audit metadata would be required before any later execution lane can be considered.

## Contract Module

Sprint E2 adds:

`public/nexus-staged-action-approval-record.js`

The module is intentionally standalone and inert:

- it can be loaded by deterministic QA;
- it exports constants and validators;
- it has no DOM access;
- it has no fetch or network calls;
- it has no localStorage or sessionStorage writes;
- it has no backend writes;
- it has no route changes;
- it has no native bridge calls;
- it has no provider handoff;
- it has no call, message, payment, marketplace, camera, location, health, pharmacy, transportation, or emergency execution.

The module must not be imported by `public/index.html`, `public/app.js`, or `server.js` during Sprint E2.

## Required Approval Record Fields

Every approval record must include:

- approvalRecordId
- stagedActionId
- stagedActionType
- approvalState
- riskTier
- sourceSurface
- userVisibleTitle
- userVisibleTarget
- userVisibleConsequence
- limitationSummary
- noActionDisclosure
- cancellationPath
- consentState
- permissionState
- auditRequired
- auditEventType
- blockedExecutionChannels
- allowedApprovalTerms
- blockedApprovalTerms
- evidencePacketRef
- providerSummary
- expiresAt
- createdAt
- redactedPayload

## Approval States

Allowed approval states are:

- `notApprovalReady`
- `approvalPreviewOnly`
- `awaitingExplicitApproval`
- `approvalAccepted`
- `approvalRejected`
- `approvalCancelled`
- `approvalExpired`
- `approvalBlocked`

Sprint E2 validators may accept these states as data, but accepting `approvalAccepted` must not imply execution. Execution remains disabled.

## Required Invariants

Every valid approval record must satisfy these invariants:

- `executionAuthority` must be `false`;
- `providerHandoffAllowed` must be `false`;
- `backendWriteAllowed` must be `false`;
- `storageWriteAllowed` must be `false`;
- `networkAllowed` must be `false`;
- `runtimeUiAllowed` must be `false`;
- `auditRequired` must be `true`;
- `noActionDisclosure` must state that no action has been taken;
- cancellation must be available;
- vague acknowledgments must be blocked;
- all required blocked execution channels must remain blocked.

## Required Blocked Execution Channels

The required blocked channels are:

- provider
- call
- message
- whatsapp
- telegram
- sms
- email
- payment
- marketplace
- location
- camera
- microphone
- health
- medical
- pharmacy
- prescription
- fhir
- appointment
- transportation
- emergency
- backend-write
- storage-write
- native-bridge

## Allowed Approval Terms

Allowed approval terms are intentionally narrow:

- `yes`
- `confirm`
- `do it`
- `approve`

Allowed approval terms are only data in Sprint E2. They must not create runtime confirmation behavior.

## Blocked Approval Terms

Blocked vague terms must include:

- `okay`
- `ok`
- `sure`
- `sounds good`
- `fine`
- `go ahead maybe`

These phrases must not approve high-risk staged actions or trigger provider execution.

## Unsafe Copy

Approval records must not include user-visible copy that implies completion:

- "I already did it"
- "I contacted them"
- "I sent it"
- "I called"
- "Payment complete"
- "Location shared"
- "Camera activated"
- "Appointment booked"
- "Prescription refilled"
- "Emergency dispatched"

## Validator Behavior

The validator should:

- confirm all required fields exist;
- confirm approved states are from the allowed list;
- require no-execution flags to remain false;
- require audit readiness;
- require cancellation;
- require no-action disclosure;
- require blocked execution channels;
- reject unsafe copy;
- reject vague-only approval terms;
- return deterministic errors without throwing for invalid records.

The factory helper may normalize a record into safe defaults, but it must force no-execution invariants.

## Sprint E2 Boundary

Sprint E2 does not:

- render approval UI;
- add approval buttons;
- listen for user approval;
- interpret typed or spoken confirmation;
- persist approval records;
- create audit records;
- call providers;
- open communication channels;
- request permissions;
- execute staged actions.

## Future Sprint E3 Recommendation

The safest next sprint is:

`Sprint E3 - Staged Action Approval Record Harness`

Sprint E3 should add deterministic fixture tests around representative approval records for low-risk, medium-risk, and high-risk prompt families. It should remain non-runtime and no-execution.

## Sprint E2 Conclusion

Sprint E2 defines the approval record contract only. Nexus remains review-only and no-execution by default. Approval records are inert data and do not grant runtime authority.
