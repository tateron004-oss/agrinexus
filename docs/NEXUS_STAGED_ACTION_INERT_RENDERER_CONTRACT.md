# Nexus Staged Action Inert Renderer Contract

## 1. Purpose And Scope

Phase 12H defines an inert renderer contract for future Nexus `stagedActionState` display. The contract describes how staged action metadata may become safe render metadata such as `title`, `body`, `badge`, `riskLabel`, label-only controls, warning copy, provider copy, missing-input copy, and safety copy.

This phase is inert render metadata only. It adds no DOM rendering, no visible runtime UI, no click handlers, no live execution, no provider handoff, no browser permissions, no navigation, no call execution, no message execution, no camera opening, no location sharing, no transaction, and no emergency dispatch claim.

## 2. Relationship To Phase 12E, 12F, And 12G

Phase 12E documented the staged action UI contract. Phase 12F added `deriveNexusStagedActionState(...)`. Phase 12G proved the prompt -> `actionDecision` -> `stagedActionState` observation chain remains hidden/debug-only and QA-only.

Phase 12H adds `deriveNexusStagedActionRenderModel(...)` as a pure model helper. It converts `stagedActionState` plus optional `actionDecision` context into render metadata, but it does not render, route, navigate, request permissions, confirm, or execute.

## 3. Why This Is An Inert Renderer Contract

The helper returns an object. It does not create elements, attach listeners, mutate app state, call browser APIs, invoke providers, or open modals. The Standard User visible behavior remains unchanged.

planner metadata is not execution authority. selectedToolId must not directly execute. agentAction must not directly execute. missingInputs must block execution. restricted actions must not execute. provider_handoff_only must not mean execution happened. confirmationRequired must be honored.

## 4. Render Model Object Shape

The render model shape is:

```js
{
  renderMode: "inert_preview",
  visible: false,
  title: "Review farm jobs",
  body: "Nexus can help you review farm job options.",
  badge: "Review only",
  riskLabel: "Low risk",
  primaryControlLabel: "Review options",
  secondaryControlLabel: "Cancel",
  disabledControls: ["execute", "provider_handoff", "request_permission"],
  warningText: "",
  confirmationCopy: "",
  providerCopy: "",
  missingInputCopy: "",
  safetyCopy: "No action has been taken.",
  executionAllowed: false,
  providerHandoffAllowed: false,
  permissionRequestAllowed: false,
  domRenderingAllowed: false,
  clickHandlersAllowed: false
}
```

## 5. Supported stagedActionState.uiState Values

The contract covers:

- `hidden_metadata_only`
- `informational_response`
- `suggestion_preview`
- `review_option`
- `staged_action`
- `missing_input_required`
- `confirmation_required`
- `provider_handoff_ready`
- `blocked_restricted`
- `cancelled`

## 6. State-By-State Rendering Rules

### hidden_metadata_only

`visible` must be false. There are no controls, no DOM rendering, and no click handlers.

### informational_response

May have informational copy. It has no execution controls and no provider controls.

### suggestion_preview

May describe a low-risk suggestion. Controls are label-only/inert in this phase. `executionAllowed` remains false.

### review_option

May describe a future review option. Controls are label-only/inert in this phase. Navigation is not performed by renderer.

### staged_action

Must show prepared, not executed copy. `executionAllowed` remains false. It must preserve cancel guidance.

### missing_input_required

Must identify missing information generically. It must not collect input in this phase. `executionAllowed` remains false.

### confirmation_required

Must state explicit confirmation is required. It must not treat confirmation as already granted. `executionAllowed` remains false.

### provider_handoff_ready

Must state provider handoff is prepared only. It must not claim provider opened. `executionAllowed` remains false. `providerHandoffAllowed` remains false in this phase unless a future reviewed phase changes metadata only semantics.

### blocked_restricted

Must show blocked-for-safety copy. It has no execution controls and no provider controls.

### cancelled

Must show cancelled or inactive copy. It has no execution controls and no provider controls.

## 7. Control Label Rules

`primaryControlLabel` and `secondaryControlLabel` are future label guidance only. They must not become buttons in this phase. They must not imply a confirmed action, background execution, or provider launch.

Acceptable labels include:

- `Review options`
- `Not now`
- `Cancel`
- `Review before action`
- `Continue to confirmation`
- `Review provider`

Unsafe labels such as Do it all, Continue automatically, Submit everything, and Yes always remain outside this contract.

## 8. Disabled Control Rules

Every render model must include `disabledControls`. It must block:

- `execute`
- `provider_handoff`
- `request_permission`
- `place_call`
- `send_message`
- `open_camera`
- `share_location`
- `transaction`
- `emergency_dispatch`

## 9. Risk-Based Copy Rules

Low-risk render models may use preview or review language. Medium-risk render models must use prepared, not executed language. High-risk render models must use confirmation-required language. Restricted render models must use blocked-for-safety copy.

## 10. Missing-Input Copy Rules

`missingInputCopy` may identify missing information generically. It must not collect input, validate identity, infer contacts, open forms, request sensitive data, or stage execution.

## 11. Confirmation Copy Rules

`confirmationCopy` must say explicit confirmation is required before any future action. It must not say confirmation was granted. It must not convert vague acknowledgments into execution.

## 12. Provider Handoff Copy Rules

`providerCopy` must say provider handoff is prepared only. It must not claim provider opened, call placed, message sent, camera opened, location shared, payment started, marketplace transaction completed, health workflow mutated, or emergency dispatched.

## 13. Blocked/Restricted Copy Rules

Blocked or restricted render models must explain the safety block and may point toward safer alternatives in a future phase. They must not provide execution controls, provider controls, or permission controls.

## 14. Standard User Behavior Preservation

The helper is not loaded by the Standard User UI. Existing preview cards, low-risk suggestion UI, Review options behavior, confirmation UI contract patterns, provider handoff boundary patterns, call/contact permission UI patterns, map/location permission UI patterns, marketplace/AgriTrade browse safety patterns, health/telehealth modal safety patterns, and session memory UI boundaries remain unchanged.

## 15. Future Runtime Renderer Guidance

A future renderer may consume this model only after a separate reviewed phase. That future phase must keep render metadata separate from execution authority, confirmation authority, provider authority, permission authority, and route authority.

## 16. QA Coverage

`scripts/nexus-staged-action-inert-renderer-qa.js` verifies:

- required sections and safety language are present
- `deriveNexusStagedActionRenderModel(...)` loads in Node
- representative staged states produce inert render models
- `executionAllowed`, `providerHandoffAllowed`, `permissionRequestAllowed`, `domRenderingAllowed`, and `clickHandlersAllowed` remain false
- high/restricted cases do not produce execution/provider controls
- `provider_handoff_ready` does not claim provider opened
- `confirmation_required` does not claim confirmation granted
- `missing_input_required` does not collect input
- `blocked_restricted` does not provide execution controls
- Standard User visible behavior remains unchanged

## 17. Non-Goals

Phase 12H does not enable live execution, wire the render model into visible Standard User UI, render visible staged-action UI, create execution buttons, attach click handlers, open confirmation modals, request browser permissions, navigate, place calls, send messages, share location, open camera, make purchases, submit forms, alter health workflow state, claim emergency dispatch, add provider credentials, weaken confirmation gates, weaken provider handoff protections, make planner output authoritative, or allow `selectedToolId` or `agentAction` to directly execute anything.
