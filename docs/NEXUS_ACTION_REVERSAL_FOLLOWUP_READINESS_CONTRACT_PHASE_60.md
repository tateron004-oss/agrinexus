# Nexus Action Reversal and Follow-Up Readiness Contract

Phase: 60 - Action reversal/follow-up
Status: inert readiness contract and deterministic QA only
Related roadmap row: `| Phase 60 | Action reversal/follow-up | Track result/cancel/undo where possible | result lifecycle | future | high | action logs | audit result state | lifecycle QA | user sees outcome |`

## Scope Decision

Phase 60 does not add runtime undo, cancel, retry, follow-up scheduling, provider recall, message deletion, payment refund, marketplace rollback, location-sharing revocation, medical record recall, emergency cancellation, or backend action result mutation.

This phase creates the lifecycle contract that must be satisfied before Nexus may support future result tracking, cancellation, reversal, retry, or follow-up behavior for approved actions.

This phase does not activate:

- runtime action reversal
- live undo or rollback
- provider cancellation
- message recall
- call cancellation
- payment refund
- marketplace transaction reversal
- appointment cancellation
- pharmacy refill cancellation
- transportation cancellation
- emergency dispatch cancellation
- location sharing revocation
- medical record sharing recall
- follow-up scheduling
- storage or network side effects
- backend behavior changes

## Contract Artifact

The inert contract lives in:

- `public/nexus-action-reversal-followup-readiness-contract.js`

It is intentionally not loaded by `public/index.html`, not consumed by `public/app.js`, and not wired by `server.js`.

## Default Readiness Posture

The default contract keeps reversal and follow-up execution disabled:

- `phase: "60"`
- `riskTier: "high"`
- `readinessStatus: "blocked"`
- `resultLifecycleEnabled: false`
- `cancelActionEnabled: false`
- `undoActionEnabled: false`
- `rollbackEnabled: false`
- `retryEnabled: false`
- `followUpSchedulingEnabled: false`
- `providerCancellationEnabled: false`
- `paymentRefundEnabled: false`
- `externalStateMutationEnabled: false`
- `standardUserReversalExecutionAllowed: false`
- `executionAllowed: false`
- `liveActionEnabled: false`

Nexus may explain that future actions need visible result states and cancellation paths, but it must not claim that an external action was undone unless an approved connector confirms it.

## Required Preconditions Before Reversal or Follow-Up

Before any future reversal, cancellation, retry, or follow-up behavior can be enabled, Nexus must verify and visibly present:

- `originalActionId`
- `originalActionType`
- `originalActionResult`
- `originalProvider`
- `visibleCurrentStatus`
- `reversalCapability`
- `reversalWindow`
- `reversalConsequence`
- `userVisibleOutcome`
- `auditEvent`
- `permissionState`
- `providerAvailabilityState`
- `explicitUserApproval`
- `providerConfirmationWhenRequired`
- `cancellationPath`
- `failureFallback`
- `noSilentRollback`
- `noHiddenExternalMutation`
- `noUnsupportedUndoClaim`

## Result Lifecycle Boundary

Future actions must have visible states such as `prepared`, `staged`, `confirmed`, `sent`, `opened`, `completed`, `cancelled`, `failed`, `expired`, `blocked`, or `unsupported`. Nexus must distinguish local UI cancellation from external provider cancellation.

## Restricted Domain Rules

Additional restrictions apply to:

- `communications`
- `payments`
- `marketplace_transactions`
- `appointments`
- `pharmacy`
- `transportation_dispatch`
- `emergency_dispatch`
- `location`
- `medical_records`
- `provider_contact`
- `account_identity`

## Standard User Expectations

The Standard User build may explain cancellation or follow-up requirements, but it must not:

- undo external actions;
- cancel provider-side actions;
- recall sent messages;
- cancel calls;
- issue refunds;
- reverse marketplace transactions;
- cancel appointments or refills;
- stop transportation or emergency dispatch;
- revoke shared location or records;
- schedule follow-ups;
- mutate account state;
- bypass explicit approval, provider confirmation, or audit logging.

## Safe Future Copy

Approved posture:

- "I can show the action status and explain cancellation options, but I cannot undo an external action unless the provider supports it and you approve."
- "No external action has been reversed by Nexus."
- "Cancellation and follow-up require an audit event and visible outcome."

Avoid:

- "I undid it."
- "The payment was refunded."
- "The appointment was cancelled."
- "I recalled the message."
- "I cancelled emergency dispatch."

## QA Expectations

Phase 60 QA must verify:

- this readiness contract is present;
- reversal, rollback, follow-up, and external mutation remain disabled by default;
- result lifecycle, visible outcome, cancellation path, approval, provider confirmation, fallback, and audit requirements are enumerated;
- restricted domains are documented;
- Standard User reversal/follow-up execution remains blocked;
- no app, server, route, provider, payment, appointment, pharmacy, transportation, emergency, location, medical record, storage, network, or external-link hook was added.

Phase 60 itself remains a readiness boundary only.
