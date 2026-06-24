# Nexus Low-Risk Renderer Controlled Runtime Flag-On Static QA

## 1. Purpose and Scope

Phase 12W adds **Controlled Runtime Flag-On Harness Static QA** for a future local/test-only flag-on harness. This phase does not implement the flag-on harness.

The purpose is to create static gates before any future implementation can attempt local/test-only flag-on behavior. The renderer remains disabled by default, and the Standard User build remains unchanged.

## 2. Current Default Flag-Off Posture

Current default posture:

- renderer remains disabled by default
- flag disabled means render nothing
- Standard User visible behavior remains unchanged when flag off
- `public/index.html` does not load the renderer script
- no visible runtime UI exists
- no DOM rendering exists
- no execution/provider/permission/navigation path exists
- no renderer invocation when flag off
- no live execution

The system remains not ready for real execution.

## 3. Relationship to Phases 12T through 12V

- Phase 12T added the inactive flag-off harness.
- Phase 12U browser-validated flag-off behavior.
- Phase 12V planned a future local/test-only flag-on harness.
- Phase 12W adds static QA gates before any flag-on implementation.

These gates preserve the earlier guarantees: disabled by default, eligibility false means render nothing, flag enabled alone is not enough, low risk only, and no visible runtime UI when flag off.

## 4. Static Guard Categories

Static guard categories:

- default-off preservation
- local/test-only activation
- index script prevention
- visible UI prevention
- DOM rendering prevention
- unsafe API prevention
- click-handler prevention
- execution-language prevention
- provider/permission/navigation prevention
- eligibility enforcement
- excluded fixture protection
- required safety language preservation

## 5. Local/Test-Only Activation Guard Rules

Static QA should fail future implementation if:

- flag-on activation can happen by default
- flag-on activation can happen in production/default mode
- flag-on activation can happen from raw prompt text alone
- flag-on activation can happen from selectedToolId alone
- flag-on activation can happen from agentAction alone
- flag-on activation can happen during app startup
- flag-on activation bypasses eligibility guard
- flag enabled alone is enough to render
- medium/high/restricted fixtures can render

Future activation must be local/test-only and must never make planner metadata execution authority. `selectedToolId must not directly execute` and `agentAction must not directly execute`.

## 6. Runtime File Guard Rules

Static QA should verify:

- `public/index.html` does not load `nexus-low-risk-inert-renderer.js`
- no renderer script tag exists
- no visible UI container for the renderer exists
- no DOM insertion code for renderer cards exists
- no unsafe runtime API path was introduced

The guard should also ensure that no DOM rendering when flag off and no renderer invocation when flag off remain true.

## 7. Harness Safety Rules

Future flag-on harness must:

- remain disabled by default
- be local/test-only
- require eligibility true
- require low risk only
- require `suggestion_only` or `navigation_only`
- allow only `suggestion_preview`, `review_option`, or `informational_response`
- return inert metadata/model only
- not insert DOM by default
- not execute
- not navigate
- not request permissions
- not call providers
- not open modals

It must preserve: no click handlers that execute, no provider handoff, no browser permissions, no navigation, no call execution, no message execution, no camera opening, no location sharing, no transaction, and no emergency dispatch claim.

## 8. Eligible Fixture Scope

Eligible future fixtures:

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

Eligible fixtures must return inert metadata/model only.

## 9. Excluded Fixture Scope

Excluded fixtures:

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

Restricted actions must not execute. `missingInputs must block execution`, `provider_handoff_only must not mean execution happened`, and `confirmationRequired must be honored`.

## 10. Unsafe API and Language Guards

Static QA must fail on unsafe API or unsafe language patterns in future flag-on harness code:

- `window.open`
- `location.href`
- `navigator.geolocation`
- `getUserMedia`
- `fetch(`
- `XMLHttpRequest`
- `tel:`
- `whatsapp`
- `telegram`
- `payment`
- `dispatch`
- `emergency dispatch`
- `addEventListener`
- `onclick`
- sent
- called
- purchased
- paid
- dispatched
- completed

Unsafe language must not imply an action happened, because the renderer is only a static, inert planning surface.

## 11. Required Fixture Behavior for Future Implementation

Static/test QA must require:

- flag off returns inactive/no-op
- eligibility false returns inactive/no-op
- flag enabled alone is not enough
- eligible low-risk fixtures return inert metadata only
- excluded/high-risk fixtures return inactive/no-op
- unsafe inert model fields return inactive/no-op

The fixture tests must continue to prove no live execution, no provider handoff, no browser permissions, and no navigation.

## 12. Acceptance Criteria

Acceptance criteria:

- all static QA passes
- all-safe remains green
- no visible runtime UI added
- no DOM rendering added
- no script tag added
- no execution path added
- no provider/permission/navigation path added
- Standard User behavior unchanged by default

## 13. Non-Goals

Phase 12W does not:

- implement flag-on harness
- enable renderer UI
- add DOM cards
- add buttons
- add click handlers
- navigate
- execute
- request permissions
- add provider handoff
- add confirmation modals
- call, message, camera, location, transact, submit forms, mutate health, or claim emergency dispatch

## 14. Recommended Next Phase

Recommended next phase:

**Phase 12X - Controlled Runtime Flag-On Harness Readiness Review**

Phase 12X should decide whether the project is ready to implement a local/test-only flag-on harness or whether another guard is needed. The conservative recommendation is to review these static gates before adding any implementation.

Required safety-language checklist:

- Controlled Runtime Flag-On Harness Static QA
- disabled by default
- flag disabled means render nothing
- eligibility false means render nothing
- flag enabled alone is not enough
- local/test-only
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
- Phase 12X

