# Nexus Low-Risk Renderer Controlled Runtime Flag-On Test Harness Implementation

## 1. Purpose and Scope

Phase 12Y is the **Controlled Runtime Flag-On Test Harness Implementation**. It implements a local/test-only metadata/no-op flag-on harness path for the low-risk inert renderer.

This phase is not visible runtime UI. It does not enable renderer UI, DOM cards, buttons, click handlers, navigation, provider handoff, browser permissions, confirmation modals, call execution, message execution, camera opening, location sharing, transaction behavior, form submission, health mutation, emergency dispatch claim, or real execution.

## 2. Relationship to Phases 12T through 12X

- Phase 12T added the inactive flag-off harness.
- Phase 12U browser-validated flag-off behavior.
- Phase 12V planned the future flag-on harness.
- Phase 12W added flag-on static QA.
- Phase 12X approved only local/test-only metadata/no-op implementation.
- Phase 12Y implements that limited harness.

The sequence preserves the core guardrails: disabled by default, flag disabled means render nothing, eligibility false means render nothing, flag enabled alone is not enough, low risk only, suggestion_only, navigation_only, and Standard User visible behavior remains unchanged when flag off.

## 3. Harness Location and API

Harness location:

- file changed: `public/app.js`
- function name: `evaluateNexusLowRiskRendererRuntimeHarness(...)`

Inputs:

- `flagState`
- `localTestFlagOn`
- `eligibilityState`
- `actionDecision`
- `stagedActionState`
- `inertRenderModel`

Outputs:

- inactive/no-op state for default, unsafe, unsupported, missing, or excluded inputs
- local/test-only inert metadata when all gates pass

Default behavior remains inactive. The local/test-only activation field is `localTestFlagOn: true`, and it is not enough unless `flagState.enabled === true`, `eligibilityState.eligible === true`, the risk is low, the boundary is allowed, and sanitized inert data is present.

The harness adds no DOM rendering and no visible UI.

## 4. Default Flag-Off Behavior

Default flag-off behavior:

- disabled by default
- flag disabled means render nothing
- no visible runtime UI when flag off
- no DOM rendering when flag off
- no renderer invocation when flag off
- Standard User visible behavior remains unchanged when flag off
- no click handlers that execute
- no live execution

`public/index.html` remains unwired and does not load `nexus-low-risk-inert-renderer.js`.

## 5. Local/Test-Only Flag-On Behavior

Local/test-only flag-on behavior:

- local/test-only
- metadata/no-op only
- flag enabled alone is not enough
- eligibility false means render nothing
- low risk only
- suggestion_only
- navigation_only
- not production/default active
- no raw prompt-only activation
- no selectedToolId-only activation
- no agentAction-only activation
- no app startup activation

Successful local/test-only output may include inert title, body, badge, risk label, safety copy, disabled control labels, and metadata-only status. It must not contain executable action payloads, provider payloads, permission payloads, route commands, transaction payloads, contact/call/message payloads, DOM nodes, or click handlers.

## 6. Safety Boundaries

Safety boundaries:

- no click handlers that execute
- no live execution
- no provider handoff
- no browser permissions
- no navigation
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

The harness cannot grant execution authority. It can only return inert local/test-only metadata.

## 7. Eligible Harness Scope

Eligible harness scope:

- learning
- jobs
- marketplace browse/review only
- agriculture support review only
- low risk only
- suggestion_only
- navigation_only
- suggestion_preview
- review_option
- informational_response

Eligible output remains metadata/no-op only.

## 8. Excluded Harness Scope

Excluded harness scope:

- communications/call
- message
- location
- camera
- health/telehealth
- emergency
- marketplace transaction
- purchase
- seller contact
- provider handoff
- browser permission
- form submission
- job application submission
- account changes
- payment
- medium risk
- high risk
- restricted risk

Excluded scope must return inactive/no-op.

## 9. QA Coverage

QA coverage includes:

- static safety language checks
- default flag-off behavior
- local test flag disabled behavior
- flag enabled alone is not enough
- eligibility false behavior
- eligible low-risk metadata/no-op fixtures
- excluded and high-risk fixture no-op behavior
- no renderer script tag
- no visible renderer container
- no DOM rendering calls
- no unsafe APIs
- no executable/provider/permission/navigation payloads
- continued Nexus Workforce and all-safe suite coverage

## 10. Non-Goals

Phase 12Y does not:

- enable visible renderer UI
- add DOM cards
- add buttons
- add click handlers
- navigate
- execute
- request permissions
- add provider handoff
- add confirmation modals
- call, message, camera, location, transact, submit forms, mutate health, or claim emergency dispatch

## 11. Recommended Next Phase

Recommended next phase:

**Phase 12Z - Controlled Runtime Flag-On Harness Browser Regression Validation**

Required safety-language checklist:

- Controlled Runtime Flag-On Test Harness Implementation
- disabled by default
- flag disabled means render nothing
- eligibility false means render nothing
- flag enabled alone is not enough
- local/test-only
- metadata/no-op only
- low risk only
- suggestion_only
- navigation_only
- no visible runtime UI when flag off
- no DOM rendering when flag off
- no renderer invocation when flag off
- no click handlers that execute
- no live execution
- no provider handoff
- no browser permissions
- no navigation
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
- Standard User visible behavior remains unchanged when flag off
- not ready for real execution
- Phase 12Z
