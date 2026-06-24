# Nexus Staged Action Inert Renderer Observation QA

## 1. Purpose And Scope

Phase 12I validates the complete safe metadata chain from a Standard User-style prompt through `actionDecision`, `stagedActionState`, and `inertRenderModel` into a hidden/debug-only QA observation object.

This is inert render observation metadata only. It is hidden/debug-only and QA-only. It does not render visible UI, create DOM, attach click handlers, execute actions, invoke providers, request browser permissions, navigate, place calls, send messages, share location, open camera, make purchases, submit forms, mutate health workflows, or claim emergency dispatch.

## 2. Relationship To Phase 12C, 12F, And 12H

Phase 12C maps user prompts with `mapNexusPromptToActionDecision(...)`.
Phase 12F derives inert staged UI state with `deriveNexusStagedActionState(...)`.
Phase 12H derives inert render metadata with `deriveNexusStagedActionRenderModel(...)`.

Phase 12I proves the three helpers compose safely in QA without runtime wiring.

## 3. Full Observation Chain

The full chain is:

```text
prompt
-> actionDecision
-> stagedActionState
-> inertRenderModel
-> hidden/debug-only QA observation object
```

Each step is metadata-only. Planner metadata is not execution authority. selectedToolId must not directly execute. agentAction must not directly execute.

## 4. QA-Only Observation Object Shape

The QA harness builds objects shaped like:

```js
{
  prompt: "Nexus, show me farm jobs",
  actionDecision: { /* prompt metadata */ },
  stagedActionState: { /* derived inert state */ },
  inertRenderModel: { /* inert render metadata */ },
  observationOnly: true,
  hidden: true,
  debugOnly: true,
  qaOnly: true,
  visibleUiRendered: false,
  domRendered: false,
  clickHandlersAttached: false,
  executionAttempted: false,
  providerHandoffAttempted: false,
  permissionRequested: false,
  navigationAttempted: false
}
```

The observation object is not persisted, rendered, routed, or sent to providers.

## 5. Representative Prompt Coverage

The QA covers:

- `Nexus, teach me how irrigation works`
- `Nexus, help me find agriculture training`
- `Nexus, show me farm jobs`
- `Nexus, browse AgriTrade`
- `Nexus, I need help with crop issues`
- `Nexus, call someone`
- `Nexus, send a message`
- `Nexus, find my location`
- `Nexus, use my camera`
- `Nexus, buy this item`
- `Nexus, I have an emergency`
- a cancelled staged action fixture

Low-risk prompts may derive preview or review metadata. High-risk, restricted, permission, communication, transaction, and emergency prompts must remain non-executing and non-rendering.

## 6. Inert Render Safety Invariants

Every observation must preserve:

- `observationOnly: true`
- `hidden: true`
- `debugOnly: true`
- `qaOnly: true`
- `visibleUiRendered: false`
- `domRendered: false`
- `clickHandlersAttached: false`
- `executionAttempted: false`
- `providerHandoffAttempted: false`
- `permissionRequested: false`
- `navigationAttempted: false`
- `stagedActionState.executionAllowed: false`
- `inertRenderModel.executionAllowed: false`
- `inertRenderModel.domRenderingAllowed: false`
- `inertRenderModel.clickHandlersAllowed: false`
- `inertRenderModel.permissionRequestAllowed: false`

There is no visible UI rendered, no DOM rendering, no click handlers, no live execution, no provider handoff, no browser permissions, no navigation, no call execution, no message execution, no camera opening, no location sharing, no transaction, and no emergency dispatch claim.

## 7. Why This Is Not Runtime UI

The harness exists only in `scripts/nexus-staged-action-inert-renderer-observation-qa.js`. It is not loaded by `public/index.html`, `public/app.js`, or `server.js`. It does not create DOM nodes, add event listeners, mount panels, open modals, or show Standard User UI.

## 8. Why This Is Not Execution Authority

The observation object is a QA artifact. It does not authorize execution, confirmation, provider handoff, permission request, navigation, contact, payment, account change, health workflow mutation, or emergency dispatch.

`missingInputs` must block execution. `restricted actions must not execute`. `provider_handoff_only` must not mean execution happened. `confirmationRequired` must be honored.

## 9. Standard User Behavior Preservation

Standard User visible behavior remains unchanged. Existing preview card behavior, low-risk suggestion UI, Review options behavior, confirmation UI contract patterns, provider handoff boundaries, call/contact permission UI, map/location permission UI, marketplace/AgriTrade browse safety, health/telehealth modal safety, and session memory UI boundaries remain intact.

## 10. Future Connection To Renderer Readiness

A future phase may audit whether an inert renderer can be safely connected to runtime UI. That phase must separately prove visible rendering, focus behavior, wording, keyboard behavior, permission gating, and confirmation gating. Phase 12I does not do that.

## 11. Non-Goals

Phase 12I does not enable live execution, wire render model into visible Standard User UI, render visible staged-action UI, create execution buttons, attach click handlers, open confirmation modals, request browser permissions, navigate, place calls, send messages, share location, open camera, make purchases, submit forms, alter health workflow state, claim emergency dispatch, add provider credentials, weaken existing confirmation or provider handoff protections, make planner output authoritative, or allow selectedToolId or agentAction to directly execute anything.
