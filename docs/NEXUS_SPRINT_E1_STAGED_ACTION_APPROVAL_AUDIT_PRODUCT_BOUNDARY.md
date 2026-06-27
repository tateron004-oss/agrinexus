# Nexus Sprint E1 - Staged Action Approval Audit Product Boundary

Current base: `000508d5110c75cc3ac4cc66b027a2998058a96e`

Sprint E1 begins the approval and audit readiness lane after Sprint D closed the controlled staged-action preview lane. E1 is documentation and deterministic QA only. It does not add runtime UI, confirmation behavior, provider execution, backend state, storage writes, network calls, route changes, or live actions.

## Purpose

Define the product boundary for how a future review-only staged action may eventually become approval-ready and audit-ready without becoming executable.

Sprint E1 does not approve execution. It only defines the records, states, and safety checks that must exist before any later phase may prototype user approval around staged actions.

## Approval Readiness Model

A staged action may be considered approval-ready only when it has:

- a stable `stagedActionId`;
- a safe `stagedActionType`;
- a visible user-facing title;
- a visible target summary;
- a visible consequence summary;
- a visible source or evidence packet requirement;
- a visible limitation statement;
- a visible no-action disclosure;
- a risk tier;
- blocked execution channels;
- required consent state;
- required permission state;
- cancellation path;
- audit requirement;
- expiration or freshness boundary.

Approval readiness is not execution readiness. Approval readiness means Nexus may ask the user to review or approve a future preparation step. It does not mean Nexus may execute a call, message, payment, provider handoff, location share, camera activation, marketplace transaction, medical/pharmacy workflow, transportation dispatch, emergency dispatch, or backend write.

## Approval States

Future staged action approval objects should use deterministic states:

- `notApprovalReady`
- `approvalPreviewOnly`
- `awaitingExplicitApproval`
- `approvalAccepted`
- `approvalRejected`
- `approvalCancelled`
- `approvalExpired`
- `approvalBlocked`

Only a future product-approved phase may create visible approval controls. Sprint E1 creates no controls.

## Required User-Facing Copy

Any future approval request must clearly show:

- what Nexus is preparing;
- who or what the action affects;
- what data or source packet supports the request;
- what limitations apply;
- what will not happen automatically;
- how to cancel;
- that no action has been taken yet.

Unsafe copy is prohibited:

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

## Audit Boundary

Every future approval event must be audit-ready before any future execution lane can use it.

Required audit fields:

- auditId
- stagedActionId
- approvalEventId
- eventType
- user/session identifier
- role
- source surface
- risk tier
- action type
- target summary
- provider summary if applicable
- evidence packet reference if applicable
- consent state
- permission state
- approval state
- cancellation state
- result status
- redacted payload
- createdAt
- expiresAt or retention policy

Audit readiness does not create backend audit records in Sprint E1. It defines the required contract only.

## High-Risk Boundaries

The following remain blocked from approval-as-execution:

- provider communication;
- calls and messages;
- WhatsApp, Telegram, SMS, email, or phone handoff;
- payments and checkout;
- marketplace buy/sell/order/listing actions;
- account creation or identity verification;
- location sharing;
- camera or microphone activation;
- health, medical, pharmacy, prescription, or FHIR actions;
- appointment scheduling;
- transportation dispatch;
- emergency dispatch;
- backend writes.

These actions may require future approval and audit models, but approval alone must never bypass provider availability, consent, permission, role, compliance, audit, or final execution gates.

## Standard User Boundary

In Standard User:

- staged action previews may remain review-only;
- future approval surfaces must be explicit and cancellable;
- approval controls must not appear for high-risk actions until product-approved safety gates exist;
- no hidden approval may be inferred from prompt wording;
- no approval may be inferred from vague acknowledgments such as `okay`, `sure`, or `sounds good`;
- no execution may occur from approval metadata.

## Admin/Full Boundary

Admin/full modes may later receive stronger approval review tooling, but they still must not bypass:

- consent;
- permission;
- role authorization;
- provider availability;
- compliance;
- audit logging;
- final execution gate;
- cancellation.

## Future Sprint E2 Recommendation

The safest next sprint is:

`Sprint E2 - Staged Action Approval Record Contract`

Sprint E2 should add an inert contract module and local QA for approval record shape validation. It should not render UI, store records, call providers, write backend state, or execute anything.

## Sprint E1 Conclusion

Sprint E1 defines the approval/audit boundary only. Nexus remains review-only and no-execution by default. Sprint D staged previews remain controlled, flag-gated, and non-authoritative, and Sprint E does not grant execution authority.
