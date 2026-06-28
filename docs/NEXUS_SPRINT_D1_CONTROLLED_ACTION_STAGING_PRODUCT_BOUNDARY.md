# Nexus Sprint D1 - Controlled Action Staging Product Boundary

## Current Checkpoint

Current HEAD after AO4 cleanup: `ab9ea33f250e7e9f6b42ec3d12f7b95ed2ae83d7`.

The final approved audit checkpoint is Sprint AO3:

- Commit: `ab9ea33f250e7e9f6b42ec3d12f7b95ed2ae83d7`
- Message: `Add Stale Data Alerts flag contract harness`
- Posture: documentation, fixtures, deterministic QA, package alias, and safe-suite wiring only.

Ron/product owner explicitly ended the audit train at AO3. The audit train ended at AO3. AO4, AO5, and additional audit phases are not approved in this lane. Sprint D now begins controlled user-approved action staging.

## Sprint D Purpose

Sprint D is the first controlled-action staging lane. It prepares Nexus to describe proposed next steps as structured, review-only objects while preserving the Standard User build and keeping the user in control.

Sprint D does not authorize autonomous execution. It does not create provider handoff, call, message, payment, location, camera, medical, pharmacy, emergency, marketplace, account, backend-write, storage-write, or real pending-action behavior.

## Controlled Action Staging Definition

Controlled action staging means Nexus may prepare an inert review object that describes a possible action the user could review later. A staged action may include a title, summary, evidence needs, source packet needs, blocked channels, safe-use notes, and limitations.

A controlled staged action is:

- review-only;
- approval-required;
- non-executing;
- non-authoritative;
- local and reversible unless a later approved phase says otherwise;
- unable to contact providers, open external services, or create real-world side effects.

## Staged Action vs Executed Action

| Staged action | Executed action |
| --- | --- |
| Review-only metadata. | Real-world side effect. |
| `reviewOnly: true`. | An action has been performed or initiated. |
| `requiresUserApproval: true`. | Approval gate has already been completed. |
| `executionAuthority: false`. | Execution authority has been granted by a future safety gate. |
| No provider handoff. | May hand off to a provider adapter in a future approved lane. |
| No backend write or real pending action. | May create records, orders, messages, calls, appointments, payments, or dispatch events. |

Sprint D1 only permits the staged-action side of this table.

## Allowed Staged Action Categories

Sprint D may define review-only staged actions for:

- agriculture training review;
- irrigation learning review;
- farm jobs review;
- AgriTrade browse review;
- crop issue observation support review;
- field support review;
- source-backed agriculture guidance review;
- workforce resource review;
- learning or education review;
- blocked high-risk request review notes that explain why execution is not available.

These categories must remain review-only and must not become live execution paths during Sprint D1.

## Disallowed Execution Categories

Sprint D1 explicitly disallows execution for:

- provider handoff;
- calls;
- messages;
- WhatsApp;
- Telegram;
- SMS;
- email sending;
- payments;
- purchases;
- marketplace transactions;
- checkout behavior;
- money movement;
- location or geolocation;
- location sharing;
- geolocation execution;
- camera activation;
- microphone activation;
- image capture;
- image diagnosis execution;
- appointment booking;
- emergency routing or dispatch;
- emergency routing;
- emergency dispatch;
- medical diagnosis;
- treatment decisions;
- clinical triage;
- pharmacy workflow execution;
- pharmacy refill;
- prescription or refill execution;
- backend writes;
- real pending actions;
- storage side effects;
- live lookup;
- external navigation;
- autonomous execution.

## Required Staged Action Fields

Every future staged action must include:

- `stagedActionId`
- `stagedActionType`
- `title`
- `summary`
- `reviewOnly`
- `requiresUserApproval`
- `executionAuthority`
- `riskTier`
- `blockedExecutionChannels`
- `evidenceRequirement`
- `sourcePacketRequirement`
- `createdFromPromptFamily`
- `safeUseNotes`
- `limitations`

Every future staged action must set:

- `reviewOnly: true`
- `requiresUserApproval: true`
- `executionAuthority: false`

## Standard User Safety Expectations

The Standard User build must remain stable and understandable:

- staged action metadata must never imply an action was completed;
- staged action metadata must never claim provider connection is live;
- staged action metadata must never show hidden debug-only metadata;
- staged action metadata must never bypass existing low-risk preview, confirmation, permission, telehealth, call, music, learning, map, marketplace, health, or Admin/full modal protections;
- staged action metadata must clearly distinguish review from execution;
- high-risk prompts must remain blocked, permission-gated, or confirmation-gated by the existing safety posture.

## No-Execution Authority

Sprint D1 grants no execution authority. Any future staged action must remain non-authoritative and non-executing until a later product-approved, QA-protected, browser-validated execution gate exists.

Required invariant: `executionAuthority: false`.

## No-Provider-Handoff Boundary

Sprint D1 does not allow provider handoff. A staged action must not open WhatsApp, Telegram, phone, SMS, email, telehealth, provider directory, transportation, pharmacy, payment, clinic, emergency, marketplace, or native bridge provider channels.

Provider-related staged actions may only describe that a verified provider integration would be required later.

## No-Call/Message/Payment/Location/Camera Boundary

Sprint D1 forbids:

- silent calls;
- visible call launch;
- message sending;
- WhatsApp, Telegram, SMS, or email sending;
- payment, purchase, checkout, or money movement;
- location sharing or geolocation execution;
- camera, microphone, image, or file capture;
- image diagnosis execution.

These channels must appear in `blockedExecutionChannels` for any staged action that might otherwise be confused with execution.

## No-Medical/Pharmacy/Emergency Boundary

Sprint D1 forbids:

- medical diagnosis;
- treatment decisions;
- clinical triage;
- prescription or refill execution;
- pharmacy order or pickup execution;
- emergency routing;
- emergency dispatch;
- provider contact for urgent care.

Health, pharmacy, and emergency prompts must remain blocked, permission-gated, or routed through existing safe guidance, never through staged execution.

## No-Backend-Write / No-Real-Pending-Action Boundary

Sprint D1 does not create backend state. It does not create a durable pending action, order, appointment, communication, provider handoff, payment, marketplace transaction, location share, medical event, pharmacy event, emergency event, or account/profile mutation.

Any future staged action preview must be local, review-only, and reversible by clearing the preview.

## Browser Validation Requirements

Browser validation is required for any Sprint D phase that changes runtime-visible Standard User behavior. Validation must use the normal Standard User build unless the phase explicitly creates a separate fixture.

Required browser checks for runtime-visible changes:

- Standard User path loads normally;
- low-risk prompts preserve review-only behavior;
- high-risk prompts do not execute;
- no provider, call, message, WhatsApp, Telegram, SMS, email, payment, purchase, marketplace, location, camera, image, medical, pharmacy, emergency, or account action fires;
- no backend write or real pending action is created;
- no hidden debug-only metadata becomes visible;
- no console warning or error is introduced;
- any feature flag defaults off and can be safely reset;
- `db.json` and runtime artifacts are restored if mutated.

## Rollback Strategy

If a Sprint D phase introduces unsafe behavior:

1. Disable or remove the staged action feature flag.
2. Restore the previous Standard User behavior.
3. Remove any runtime wiring that renders staged action previews.
4. Remove any provider, call, message, payment, location, camera, health, pharmacy, emergency, or marketplace integration path introduced by mistake.
5. Restore `db.json` or runtime artifacts if mutated.
6. Re-run focused QA, `nexus-workforce`, and `all-safe`.
7. Commit only the rollback or fix needed to re-establish safety.

## Sprint D2 Readiness Recommendation

Sprint D2 may add an inert staged action contract module if it remains:

- deterministic;
- local-only;
- import-safe;
- no DOM mutation;
- no event listeners;
- no fetch/network;
- no storage writes;
- no backend writes;
- no provider handoff;
- no pending real-world actions;
- no execution path.

Sprint D2 should define the allowed staged action types, blocked execution channels, required fields, and a validator such as `isSafeReviewOnlyStagedAction(action)`.

## D1 Conclusion

Sprint D1 approves only the product boundary for controlled action staging. The lane can continue into inert contracts and fixtures, but execution remains blocked until a future explicit product, safety, approval, browser, audit, and QA gate is completed.
