# Nexus Planner Safety Hardening

Phase: 11F4

## Purpose

Phase 11F4 hardens the Nexus planner and plan observation layer so future implementation work cannot accidentally turn plan metadata into execution authority.

The planner can describe what Nexus would do. It cannot do it.

## Planner Safety Guarantees

The planner must remain non-executing:

- `nexusPlan.canExecute` is always `false`.
- Every `nexusPlan.steps[].canExecute` is always `false`.
- `nexusPlan.executionMode` is `plan_only`.
- `plannerObservation.observationOnly` is `true`.
- `plannerObservation.executionAuthority` is `none`.
- Existing routers remain authoritative.

Planner metadata may describe:

- classified intent
- matched tool metadata
- policy status
- plan steps
- required inputs
- permission gates
- confirmation gates
- blocked actions
- safe alternatives
- the next safe step

Planner metadata must not cause:

- routing
- modal opening
- permission prompts
- confirmation prompts
- pending-action creation
- provider handoff
- call/message sending
- payment processing
- marketplace transaction behavior
- camera or location activation
- medical diagnosis or dispatch
- state mutation

## Plans Are Not Execution Authority

Planning is not permission. Planning is not confirmation. Planning is not execution.

A future execution system must use a separate action lifecycle with:

1. explicit user intent
2. risk classification
3. permission checks
4. confirmation gates
5. role authorization
6. audit logging
7. provider adapter boundaries
8. cancellation or rollback where practical

Until those systems exist, the planner remains advisory metadata only.

## Dangerous Fields Prohibited From Plan Metadata

Plan metadata must not include executable fields or action-launch hints. Phase 11F4 QA treats the following keys as prohibited inside `nexusPlan` or its steps:

- `handler`
- `callback`
- `execute`
- `executor`
- `adapter`
- `openUrl`
- `deepLink`
- `routeTo`
- `modalId`
- `permissionRequest`
- `paymentIntent`
- `phoneNumberToDial`
- `messageToSend`
- `providerHandoff`

The planner may still include explicit safety fields such as `canExecute: false`, `executionMode: "plan_only"`, and textual notes explaining why execution is not allowed.

## Policy And Planner Relationship

The policy engine remains the safety boundary before planning:

- low-risk prompts may produce preview/informational plans;
- sensitive prompts must remain permission-gated;
- high-risk prompts must remain confirmation-gated, permission-gated, blocked, not implemented, or clarification-required;
- unknown prompts must remain clarification/unsupported.

The planner consumes the policy decision. It does not override it.

## Observation Metadata

Plan observation metadata is attached additively:

- `metadata.nexusPlan`
- `metadata.plannerObservation`
- `metadata.agentAction.nexusPlan`
- `metadata.agentAction.plannerObservation`
- frontend `latestObservedAgentActionMetadata.nexusPlan`
- frontend `latestObservedAgentActionMetadata.plannerObservation`

These fields are for QA and developer inspection. They are not normal user UI and must not trigger visible behavior by themselves.

## What QA Protects

`scripts/nexus-planner-safety-hardening-qa.js` validates:

- planner exports only planner APIs, not execution APIs;
- planner source does not call route, permission, provider, camera, location, confirmation, pending-action, or mutation functions;
- representative low-risk prompts stay informational or preview-only;
- representative sensitive/high-risk prompts stay gated, blocked, not implemented, or clarification-required;
- unknown prompts remain clarification/unsupported;
- plan and step `canExecute` values are always false;
- no plan or step contains dangerous executable keys;
- frontend observation does not execute or route from `nexusPlan` or `plannerObservation`;
- docs preserve the non-execution boundary.

Existing QA also continues to protect:

- intent classification;
- runtime tool registry metadata;
- policy decisions;
- policy observation;
- planner schema;
- plan observation;
- selected tool ID alignment;
- low-risk suggestion labels;
- controlled action previews;
- contact/call permission boundaries;
- provider handoff boundaries;
- confirmation UI boundaries;
- audit logging architecture.

## Future Phases Must Not Skip Gates

Future phases must not:

- use `nexusPlan` as a direct router;
- use `nexusPlan` to auto-open UI;
- use `nexusPlan` to create pending actions;
- use `nexusPlan` to request permissions;
- use `nexusPlan` to accept confirmations;
- call provider adapters from planner output;
- add executable handlers to plan steps;
- store raw provider URLs, phone numbers to dial, payment intents, or message payloads in plan metadata without separate reviewed privacy and safety design.

Any transition from plan metadata to action staging must be a separate reviewed phase with confirmation, audit logging, and role/permission checks.

## Phase 11G Readiness Criteria

Before Phase 11G begins, the repo should satisfy:

- planner safety hardening QA passes;
- plan observation QA passes;
- policy observation QA passes;
- Nexus Workforce suite passes;
- local-safe all-safe suite passes;
- no normal user-visible UI is introduced by plan metadata;
- no execution, staging, routing, permission, provider, camera, location, payment, marketplace, call, message, health, emergency, or account behavior is driven by plans.

Phase 11G should remain non-executing unless it explicitly implements a reviewed, gated, auditable action staging layer.
