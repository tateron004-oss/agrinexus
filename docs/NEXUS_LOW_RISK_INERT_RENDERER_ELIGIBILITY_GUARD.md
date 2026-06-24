# Nexus Low-Risk Inert Renderer Eligibility Guard

## 1. Purpose and Scope

This phase adds a pure Low-Risk Inert Renderer Eligibility Guard for future low-risk inert renderer display. It does not implement visible UI.

The eligibility guard answers whether an actionDecision, stagedActionState, and inertRenderModel are eligible for a future low-risk inert display after the disabled-by-default flag guard is explicitly enabled in a safe local/test context. It adds no visible runtime UI, no DOM rendering, no click handlers, no live execution, no provider handoff, no browser permissions, no navigation, no call execution, no message execution, no camera opening, no location sharing, no transaction, and no emergency dispatch claim.

The guard is not ready for real execution. Planner metadata is not execution authority, selectedToolId must not directly execute, agentAction must not directly execute, missingInputs must block execution, restricted actions must not execute, provider_handoff_only must not mean execution happened, and confirmationRequired must be honored.

## 2. Relationship to Phase 12L

Phase 12L added the disabled-by-default flag guard. Phase 12M adds low-risk eligibility checks.

Flag enabled is not enough. Eligibility requires a safe actionDecision, stagedActionState, and inertRenderModel. The flag only opens the first gate; the eligibility helper enforces low risk only, allowed domains, allowed boundaries, allowed UI states, allowed render modes, and inert/non-executing model fields.

## 3. Eligibility Function

File location:

```text
public/nexus-low-risk-inert-renderer-eligibility.js
```

Primary functions:

- `getNexusLowRiskInertRendererEligibility(actionDecision, stagedActionState, inertRenderModel, context)`
- `isNexusLowRiskInertRendererEligible(actionDecision, stagedActionState, inertRenderModel, context)`

Input shape:

- actionDecision metadata from the future planner/action mapper chain
- stagedActionState metadata from the inert staged state derivation
- inertRenderModel metadata from the inert renderer derivation
- context containing the future local/test-safe flag context

Output shape:

```js
{
  eligible: false,
  reason: "flag_disabled",
  allowedDomain: false,
  allowedRisk: false,
  allowedBoundary: false,
  allowedUiState: false,
  allowedRenderMode: false,
  inertRendererSafe: false,
  executionBlocked: true,
  providerBlocked: true,
  permissionBlocked: true,
  highRiskBlocked: true,
  visibleRenderingAuthorized: false
}
```

Default behavior is default eligible false. Failure reasons include `flag_disabled`, `missing_action_decision`, `missing_staged_action_state`, `missing_inert_render_model`, `disallowed_risk`, `disallowed_domain`, `disallowed_boundary`, `disallowed_ui_state`, `disallowed_render_mode`, `execution_not_blocked`, `provider_not_blocked`, `permission_not_blocked`, `dom_rendering_not_blocked`, `click_handlers_not_blocked`, `excluded_intent`, and `unknown_error`.

## 4. Eligibility Requirements

Every future eligible case must satisfy all requirements:

- flag enabled through the Phase 12L guard
- low risk only
- allowed domain
- allowed executionBoundary
- allowed uiState
- allowed renderMode
- inert safety checks pass
- no execution
- no provider handoff
- no browser permissions
- no click handlers
- no DOM rendering in this phase

The helper must return ineligible if any condition fails. It must not make planner output authoritative.

## 5. Allowed Scope

Allowed domains:

- learning
- jobs
- marketplace browse/review only
- agriculture support review only

Allowed executionBoundary values:

- `suggestion_only`
- `navigation_only`

Allowed stagedActionState.uiState values:

- `suggestion_preview`
- `review_option`
- `informational_response`

Allowed inertRenderModel.renderMode values:

- `inert_preview`
- `inert_review`
- `inert_review_option`
- `inert_information`

Allowed examples remain limited to learning, training, farm jobs review, AgriTrade browse/review, and agriculture support review only.

## 6. Excluded Scope

Always excluded:

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
- medium
- high
- restricted

The excluded scope remains blocked even if the flag is enabled in a future local/test-safe context.

## 7. Failure Reason Model

Failure reasons:

- `flag_disabled`
- `missing_action_decision`
- `missing_staged_action_state`
- `missing_inert_render_model`
- `disallowed_risk`
- `disallowed_domain`
- `disallowed_boundary`
- `disallowed_ui_state`
- `disallowed_render_mode`
- `execution_not_blocked`
- `provider_not_blocked`
- `permission_not_blocked`
- `dom_rendering_not_blocked`
- `click_handlers_not_blocked`
- `excluded_intent`
- `unknown_error`

The first failing reason should be precise enough for static QA and future browser validation to identify why a prompt cannot render.

## 8. Standard User Behavior Preservation

Current phase requirements:

- `public/app.js` must not load eligibility helper in this phase
- `public/index.html` must not load eligibility helper in this phase
- no visible behavior changes
- no session memory UI changes
- no preview card regressions
- no high-risk response regressions
- Standard User visible behavior remains unchanged

This helper remains a standalone pure module and is not wired into Standard User runtime.

## 9. Future Integration Requirements

Future renderer implementation must:

- check flag
- check eligibility
- confirm low-risk-only scope
- keep executionAllowed false
- never render high-risk controls
- never attach execution click handlers
- never request permissions
- never call providers
- preserve Standard User behavior when flag off

The future visible renderer must still pass dedicated browser validation. Eligibility true is not execution authority and is not sufficient by itself to render DOM in this phase.

## 10. QA Coverage

Static and behavior QA must verify:

- the documentation exists
- the helper exists and passes syntax checks
- default eligible false
- flag disabled returns eligible false
- flag enabled is not enough when data is missing
- learning, jobs, marketplace browse/review only, and agriculture support review only fixtures can become eligible only when all inert conditions are safe
- communications/call, message, location, camera, health/telehealth, emergency, marketplace transaction, purchase, provider handoff, browser permission, medium, high, and restricted fixtures are ineligible
- unsafe inertRenderModel fields block eligibility
- `public/app.js` and `public/index.html` do not load the eligibility helper
- no visible runtime UI is introduced
- no low-risk runtime renderer is introduced
- all-safe passes

## 11. Non-Goals

This phase does not:

- implement visible runtime UI
- load renderer into Standard User UI
- render DOM
- attach click handlers
- open modals
- request permissions
- navigate
- place calls
- send messages
- open camera
- share location
- buy/sell/pay
- submit forms
- mutate health workflows
- claim emergency dispatch
- add provider adapters
- enable execution

This phase remains not ready for real execution.

## 12. Recommended Next Phase

Recommended next phase:

Phase 12N - Low-Risk Inert Renderer Flag-Off Regression QA

That phase should prove that with the flag disabled/default, even if the mapper/state/render/eligibility modules exist, Standard User behavior remains unchanged and no visible UI or execution path appears.

