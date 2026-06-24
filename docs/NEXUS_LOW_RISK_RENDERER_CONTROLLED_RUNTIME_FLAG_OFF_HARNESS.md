# Nexus Low-Risk Renderer Controlled Runtime Flag-Off Harness

## 1. Purpose and Scope

Phase 12T adds a **Controlled Runtime Wiring Flag-Off Harness** boundary for the dormant low-risk inert renderer work. The goal is to prove that app-level runtime code can safely evaluate a future renderer path while the renderer remains **disabled by default** and while Standard User behavior remains unchanged.

This phase does not enable visible renderer UI. It adds a narrow, local, inactive harness function that returns no-op state by default. The harness exists so future QA can verify that `flag disabled means render nothing`, `eligibility false means render nothing`, and `flag enabled alone is not enough`.

## 2. Relationship to Phases 12O through 12S

- Phase 12O added the dormant low-risk inert renderer prototype.
- Phase 12P browser-validated that the Standard User build showed no renderer UI by default.
- Phase 12Q documented the controlled runtime wiring plan.
- Phase 12R added static QA to prevent premature runtime wiring.
- Phase 12S completed the readiness review and recommended a flag-off harness.
- Phase 12T adds the disabled-by-default harness boundary without loading the renderer.

The renderer remains low risk only and limited to `suggestion_only` or `navigation_only` metadata for future planning. It is not ready for real execution.

## 3. Harness Location and API

File changed:

- `public/app.js`

Harness function:

- `evaluateNexusLowRiskRendererRuntimeHarness(context = {})`

Inputs:

- `flagState`
- `eligibilityState`
- `actionDecision`

Outputs:

- `activated: false`
- `rendererInvoked: false`
- `visibleRuntimeUi: false`
- `domRenderingAllowed: false`
- `clickHandlersAllowed: false`
- `executionAllowed: false`
- `providerHandoffAllowed: false`
- `permissionRequestAllowed: false`
- `navigationAllowed: false`
- `standardUserBehaviorChange: false`
- authority fields set to `"none"`
- reason codes such as `flag_disabled`, `eligibility_false`, `restricted_or_non_low_risk`, `unsupported_boundary`, or `not_configured`

The harness does not import the renderer module. It does not load a script. It does not invoke the renderer. It does not create DOM. It does not attach handlers. It only returns inactive metadata.

## 4. Flag-Off Behavior

The harness is **disabled by default**. When the flag is missing, false, or unavailable, `flag disabled means render nothing`.

Flag-off guarantees:

- no visible runtime UI when flag off
- no DOM rendering when flag off
- no renderer invocation when flag off
- no click handlers that execute
- no navigation
- no provider handoff
- no browser permissions
- no live execution
- Standard User visible behavior remains unchanged when flag off

## 5. Eligibility Behavior

The harness treats `eligibility false means render nothing`.

Eligibility guarantees:

- flag enabled alone is not enough
- low risk only
- `suggestion_only`
- `navigation_only`
- no medium/high/restricted rendering
- restricted actions must not execute
- missingInputs must block execution
- confirmationRequired must be honored

Even when the supplied flag state is enabled and eligibility is true, Phase 12T still returns inactive `not_configured` state because visible runtime rendering is intentionally not enabled in this phase.

## 6. Safety Boundaries

Phase 12T preserves these boundaries:

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
- provider_handoff_only must not mean execution happened
- confirmationRequired must be honored

The harness cannot place calls, send messages, open camera, share location, create transactions, submit forms, mutate health workflows, or claim emergency dispatch.

## 7. Runtime Non-Goals

This phase does not:

- show renderer UI
- render DOM cards
- wire visible cards into the assistant chat
- add buttons
- add click handlers
- navigate
- execute
- request permissions
- add provider handoff
- add confirmation modals
- call, message, camera, location, transact, submit forms, mutate health, or claim emergency dispatch

## 8. Standard User Preservation

Standard User default visible behavior remains unchanged when flag off.

Preserved behavior:

- Phase 11J assistant behavior remains intact
- existing low-risk preview/review behavior remains intact
- existing excluded/high-risk safety responses remain intact
- Review options behavior remains unchanged
- no visible runtime UI when flag off
- no hidden execution authority is introduced

## 9. QA Coverage

Static and behavior QA now covers:

- Phase 12T documentation exists and contains required safety language.
- `public/index.html` does not load the dormant renderer module.
- No renderer script tag exists.
- No visible UI container for the renderer was introduced.
- The harness exists in `public/app.js` and returns no-op state by default.
- Flag-off fixture returns inactive `flag_disabled`.
- Eligibility-false fixture returns inactive `eligibility_false`.
- Flag-enabled-alone fixture remains inactive.
- Excluded/high-risk fixture remains inactive.
- Existing Phase 12O through 12S QA remains green.
- `nexus-workforce` and `all-safe` suites remain green.

## 10. Future Phase Recommendation

Recommended next phase:

**Phase 12U - Flag-Off Harness Browser Regression Validation**

Phase 12U should manually validate the Standard User browser path after the harness exists. It should confirm that the app still has no visible renderer, no console errors, no DOM cards, no unsafe controls, no provider handoff, no browser permissions, no navigation, and no execution when the flag remains off.

