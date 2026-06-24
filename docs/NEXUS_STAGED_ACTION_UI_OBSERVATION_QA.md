# Nexus Staged Action UI Observation QA

## 1. Purpose And Scope

Phase 12G adds a QA-only observation layer for the staged action metadata chain. It proves that Nexus can safely map a user prompt into an `actionDecision`, derive a `stagedActionState`, and wrap both in observation metadata only.

This is hidden/debug-only, QA-only validation. It does not render visible UI, stage real execution, open modals, invoke providers, request permissions, place calls, send messages, open camera, share location, transact, submit forms, mutate health workflows, or claim emergency dispatch.

## 2. Relationship To Phase 12C And 12F

Phase 12C introduced `mapNexusPromptToActionDecision(...)` in `public/nexus-action-decision-mapper.js`. That helper creates planner-style metadata such as `selectedToolId`, `riskLevel`, `domain`, `missingInputs`, `requiredPermissions`, `confirmationRequired`, `executionBoundary`, and `resultState`.

Phase 12F introduced `deriveNexusStagedActionState(...)` in `public/nexus-staged-action-state.js`. That helper converts an `actionDecision` into an inert UI state such as `suggestion_preview`, `review_option`, `missing_input_required`, `confirmation_required`, `provider_handoff_ready`, `blocked_restricted`, or `cancelled`.

Phase 12G validates the combined chain:

```text
prompt
-> actionDecision
-> stagedActionState
-> hidden/debug-only QA observation object
```

The observation layer is not runtime UI and is not execution authority.

## 3. Observation Chain

The QA harness starts with representative Standard User prompts and performs three read-only steps:

1. Call `mapNexusPromptToActionDecision(prompt)`.
2. Call `deriveNexusStagedActionState(actionDecision)`.
3. Create an observation object that contains the prompt, `actionDecision`, `stagedActionState`, and safety flags.

The observation object exists only inside `scripts/nexus-staged-action-ui-observation-qa.js`. It is not loaded by `public/index.html`, `public/app.js`, or `server.js`.

## 4. QA-Only Observation Object Shape

The expected observation object shape is:

```js
{
  prompt: "Nexus, show me farm jobs",
  actionDecision: { /* metadata only */ },
  stagedActionState: { /* inert derived state */ },
  observationOnly: true,
  hidden: true,
  debugOnly: true,
  qaOnly: true,
  executionAttempted: false,
  providerHandoffAttempted: false,
  permissionRequested: false,
  visibleUiRendered: false
}
```

Required flags:

- `observationOnly: true`
- `hidden: true`
- `debugOnly: true`
- `qaOnly: true`
- `executionAttempted: false`
- `providerHandoffAttempted: false`
- `permissionRequested: false`
- `visibleUiRendered: false`
- `stagedActionState.executionAllowed: false`
- `stagedActionState.providerHandoffAllowed: false`

## 5. Representative Prompt Coverage

The QA harness covers these prompts:

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

Low-risk learning, jobs, marketplace browse, and agriculture support prompts may derive `suggestion_preview` or `review_option`, but they remain preview/review only.

Communication prompts must preserve missing input and confirmation boundaries. Location and camera prompts must preserve permission boundaries. Marketplace purchase and emergency prompts must stay blocked, restricted, or confirmation-gated without claiming action.

## 6. Safety Invariants

Phase 12G protects these invariants:

- observation metadata only
- hidden/debug-only
- QA-only
- no visible UI rendered
- no live execution
- no provider handoff
- no browser permissions
- no call execution
- no message execution
- no camera opening
- no location sharing
- no transaction
- no emergency dispatch claim
- planner metadata is not execution authority
- selectedToolId must not directly execute
- agentAction must not directly execute
- missingInputs must block execution
- restricted actions must not execute
- provider_handoff_only must not mean execution happened
- confirmationRequired must be honored
- Standard User visible behavior remains unchanged

## 7. Why This Is Not Runtime UI

The observation object is created only inside the QA script. It is not a component, modal, card, control, button, router input, or browser-rendered panel.

The Standard User page must not load `nexus-staged-action-ui-observation.js` or any equivalent runtime observation renderer. The QA checks also ensure `public/index.html` does not load `nexus-action-decision-mapper.js`, `nexus-staged-action-state.js`, or a staged action observation runtime file.

## 8. Why This Is Not Execution Authority

Neither `actionDecision` nor `stagedActionState` is allowed to execute. The state helper always returns `executionAllowed: false` and `providerHandoffAllowed: false` in this phase.

The QA harness treats `selectedToolId`, `agentAction`, `executionBoundary`, `providerCandidates`, and `resultState` as descriptive metadata only. They cannot open workflows, call providers, request camera or location permissions, send messages, submit forms, create purchases, or dispatch emergency help.

## 9. Standard User Behavior Preservation

Phase 12G does not change the Standard User visible assistant experience from Phase 11J. Existing preview cards, low-risk suggestion labels, Review options behavior, confirmation boundaries, provider handoff boundaries, call/contact permission behavior, map/location permission behavior, marketplace/AgriTrade browse safety, health/telehealth modal safety, and session memory UI boundaries remain unchanged.

## 10. Future Connection To Inert Renderer Contract

A future inert renderer may read a `stagedActionState` only after another reviewed phase. That renderer must preserve:

- visible preview-only copy
- explicit missing-input prompts
- confirmation-required language
- non-clickable or safe review-only controls
- no provider handoff until a later confirmed provider adapter phase
- no permission request until a user-visible permission flow is approved
- no execution from metadata alone

Phase 12G is the observation checkpoint before that renderer exists.

## 11. Non-Goals

Phase 12G does not:

- wire staged state into Standard User UI
- create a visible staged action panel
- create execution buttons
- open confirmation modals
- request browser permissions
- place calls
- send messages
- share location
- open camera
- make purchases
- submit forms
- alter health workflow state
- claim emergency dispatch
- add provider credentials
- weaken confirmation gates
- make planner output authoritative
- make `selectedToolId` or `agentAction` executable
