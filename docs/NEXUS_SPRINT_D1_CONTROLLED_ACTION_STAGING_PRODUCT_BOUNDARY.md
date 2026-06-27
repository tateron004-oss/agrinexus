# Nexus Sprint D1 - Controlled Action Staging Product Boundary

## Current Checkpoint

Current HEAD at Sprint D1 start: `380b85895be41fd573c64d45945b39e115f35bcd`.

Sprint D begins after Sprint C44 closed the controlled agriculture preview activation lane. The repository was clean, `main` was aligned with `origin/main`, and the Standard User build remained protected by default-off controlled preview behavior.

## Continuity Audit: C39-C44

| Sprint | Commit | Continuity result |
| --- | --- | --- |
| C39 | `8673f09aa22651dc5cf2fb44d612fce208198729` | Product-owner approval record for controlled agriculture runtime activation was documented. |
| C40 | `6372c83c2c72f0b42290f410f8f30022c08f98d9` | Flag-gated source-backed agriculture runtime activation plan was documented. |
| C41 | `283ac7e4d67bf6b6dd6454c561bd23da0ec3ce01` | Flag-off regression guard protected Standard User behavior. |
| C42 | `7371d200a798421a0a17b085d6c918d6b9b5e6b5` | Flag-on controlled agriculture preview implementation was added behind explicit validation-only enablement. |
| C43 | `b4dbc475a191fc7c9b173fc168d4ffbe27740f92` | Standard User browser validation confirmed flag-off safety and documented the main-world flag-on validation limitation. |
| C44 | `380b85895be41fd573c64d45945b39e115f35bcd` | Controlled agriculture preview lane was closed and Sprint D readiness was recorded. |

Continuity result: C39-C44 preserved Standard User default behavior, kept source-backed agriculture preview review-only, and did not add execution authority, provider handoff, storage writes, backend writes, permissions, external navigation, or live lookups.

## Sprint D Purpose

Sprint D defines and progressively validates controlled action staging. The lane prepares review-only action metadata and, in later phases, may allow safe visible preview surfaces. Sprint D does not authorize execution.

The product goal is to let Nexus describe a possible next step in a structured, auditable way while keeping the user in control and making clear that no real-world action has happened.

## Controlled Action Staging Definition

A controlled staged action is a structured, review-only representation of a possible next step. It may summarize what Nexus could prepare, what evidence is needed, what sources support the suggestion, and which execution channels are blocked.

A staged action is not an executed action. It is not a pending real-world action. It does not contact a provider, send a message, place a call, start a payment, request location, activate camera, open a marketplace transaction, schedule care, refill medication, dispatch services, or write backend state.

## Staged Action vs Executed Action

| Staged action | Executed action |
| --- | --- |
| Review-only metadata. | Real-world side effect. |
| Requires user approval before any future execution path. | Has already performed or initiated a task. |
| `executionAuthority: false`. | Execution authority granted through a completed future gate. |
| No provider handoff. | May open or call a provider adapter after approval in a future phase. |
| No backend write or pending real-world action. | May create backend state, records, orders, calls, messages, appointments, or payments. |

## Allowed Staged Action Categories

Sprint D may define review-only staged actions for:

- agriculture training review;
- irrigation learning review;
- farm jobs review;
- AgriTrade browse review;
- crop issue observation support review;
- field support review;
- source-backed agriculture guidance review;
- blocked high-risk request review notes that explain why execution is not available.

These categories must remain review-only and must not become live execution paths during D1.

## Disallowed Execution Categories

Sprint D1 explicitly disallows execution for:

- provider handoff;
- calls;
- messages;
- WhatsApp;
- Telegram;
- SMS;
- email;
- payments;
- purchases;
- marketplace transactions;
- location or geolocation;
- camera, image upload, microphone, or media capture;
- appointment booking;
- emergency routing or dispatch;
- medical diagnosis, treatment, prescription, pharmacy refill, or clinical action;
- backend writes;
- real pending actions;
- storage side effects;
- live lookup;
- external navigation.

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
- staged action metadata must clearly distinguish review from execution.

## No-Execution Authority

Sprint D1 grants no execution authority. Any future staged action must remain non-authoritative and non-executing until a later product-approved, QA-protected, browser-validated execution gate exists.

Required invariant: `executionAuthority: false`.

## No-Provider-Handoff Boundary

Sprint D1 does not allow provider handoff. A staged action must not open WhatsApp, Telegram, phone, SMS, email, telehealth, provider directory, transportation, pharmacy, payment, clinic, emergency, or marketplace provider channels.

Provider-related staged actions may only describe that a verified provider integration would be required later.

## No-Call/Message/Payment/Location/Camera Boundary

Sprint D1 forbids:

- silent calls;
- visible call launch;
- message sending;
- WhatsApp, Telegram, SMS, or email launch;
- payment or checkout;
- location sharing or geolocation request;
- camera, microphone, image, or file capture.

These channels must appear in `blockedExecutionChannels` for any staged action that might otherwise be confused with execution.

## No-Medical/Pharmacy/Emergency Boundary

Sprint D1 forbids:

- medical diagnosis;
- treatment decisions;
- clinical triage;
- prescription or refill execution;
- pharmacy order or pickup execution;
- emergency dispatch;
- provider contact for urgent care.

Health, pharmacy, and emergency prompts must remain blocked, permission-gated, or routed through existing safe guidance, never through staged execution.

## No-Backend-Write / No-Real-Pending-Action Boundary

Sprint D1 does not create backend state. It does not create a durable pending action, order, appointment, communication, provider handoff, payment, marketplace transaction, location share, or medical/pharmacy/emergency event.

Any future staged action preview must be local, review-only, and reversible by clearing the preview.

## Browser Validation Requirements

Browser validation is required for any Sprint D phase that changes runtime-visible Standard User behavior. Validation must use the normal Standard User build unless the phase explicitly creates a separate fixture.

Required browser checks for runtime-visible changes:

- Standard User path loads normally;
- low-risk prompts preserve review-only behavior;
- high-risk prompts do not execute;
- no provider, call, message, payment, location, camera, health, pharmacy, emergency, or marketplace action fires;
- no hidden debug-only metadata becomes visible;
- no console warning or error is introduced;
- any feature flag defaults off and can be safely reset.

## Rollback Strategy

If a Sprint D phase introduces unsafe behavior:

1. Disable or remove the staged action feature flag.
2. Restore the previous Standard User behavior.
3. Remove any runtime wiring that renders staged action previews.
4. Restore `db.json` or runtime artifacts if mutated.
5. Re-run focused QA and `all-safe`.
6. Commit only the rollback or fix needed to re-establish safety.

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

Sprint D2 should define the allowed types, blocked channels, required fields, and a validator such as `isSafeReviewOnlyStagedAction(action)`.

## D1 Conclusion

Sprint D1 approves only the product boundary for controlled action staging. The lane can continue into inert contracts and fixtures, but execution remains blocked until a future explicit product, safety, approval, browser, audit, and QA gate is completed.
