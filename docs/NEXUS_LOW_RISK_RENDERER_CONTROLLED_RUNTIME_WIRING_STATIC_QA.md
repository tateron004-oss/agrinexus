# Nexus Low-Risk Renderer Controlled Runtime Wiring Static QA

Phase: 12R - Controlled Runtime Wiring Static QA Scaffold

Status: QA/scaffold/documentation only

Baseline: `8fd2f4649b63c2d0941a38f38c1c018ad77b30ae`

## 1. Purpose and Scope

Phase 12R adds a Controlled Runtime Wiring Static QA Scaffold to protect the low-risk renderer controlled runtime wiring boundary before implementation. The goal is to make premature wiring visible to local-safe QA before any future phase loads or calls the dormant renderer from Standard User runtime.

This phase does not wire runtime UI, does not enable renderer visibility, does not add DOM rendering, does not add buttons, does not add click handlers, does not navigate, does not execute, does not request permissions, does not add provider handoff, and does not add confirmation modals.

## 2. Current No-Wiring Posture

The current posture remains:

- renderer exists but remains dormant
- `public/app.js` does not load/call it
- `public/index.html` does not load it
- Standard User runtime remains unchanged
- no visible runtime UI appears with flag off
- no DOM rendering occurs with flag off
- disabled by default
- flag disabled means render nothing
- no visible runtime UI when flag off
- no DOM rendering when flag off
- Standard User visible behavior remains unchanged when flag off

## 3. Relationship to Phases 12O through 12Q

Phase 12O added the dormant metadata-only renderer prototype at `public/nexus-low-risk-inert-renderer.js`.

Phase 12P browser-validated Standard User flag-off behavior and confirmed no visible runtime renderer, no debug metadata exposure, no auto-execution, and no browser console warnings or errors.

Phase 12Q planned future controlled runtime wiring and documented the gate sequence required before any local/test-only visible inert preview can be considered.

Phase 12R adds static QA gates to prevent premature wiring. It protects the boundary before any implementation phase touches active Standard User rendering.

## 4. Static Guard Categories

The static scaffold covers these guard categories:

- runtime load prevention
- index script prevention
- app import/call prevention
- unsafe API prevention
- click-handler prevention
- provider/permission/navigation prevention
- execution-language prevention
- eligible/ineligible fixture behavior
- documentation safety-language preservation

These guards are local-safe and do not require browser launch, network access, db mutation, provider credentials, native bridge execution, or Standard User runtime activation.

## 5. Runtime Load Prevention Rules

Runtime load prevention rules:

- `public/index.html` must not include `nexus-low-risk-inert-renderer.js`
- `public/app.js` must not import, require, dynamically import, fetch, inject, or call the renderer
- the renderer must not be reachable during app startup
- no default Standard User runtime activation is allowed
- flag enabled alone is not enough
- eligibility false means render nothing
- flag disabled means render nothing

The renderer may remain available to isolated Node QA harnesses only.

## 6. Unsafe API Rules

Static QA must fail if the renderer or newly touched runtime wiring uses unsafe APIs or execution hooks, including:

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

The renderer must remain metadata-only and must not introduce browser, provider, permission, navigation, or execution behavior.

## 7. Future Wiring Guard Readiness

Before any future wiring phase, static QA must prove:

- flag disabled means render nothing
- eligibility false means render nothing
- flag enabled alone is not enough
- low risk only
- `suggestion_only`
- `navigation_only`
- no medium/high/restricted rendering
- planner metadata is not execution authority
- selectedToolId must not directly execute
- agentAction must not directly execute
- missingInputs must block execution
- restricted actions must not execute
- confirmationRequired must be honored
- provider_handoff_only must not mean execution happened
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
- not ready for real execution

## 8. Required QA Behavior

The new QA script verifies:

- plan doc exists
- browser validation doc exists
- prototype implementation doc exists
- static QA doc exists
- renderer file exists
- renderer module exposes expected safe API
- `public/app.js` does not load/call/import the renderer
- `public/index.html` does not load the renderer
- renderer does not use unsafe APIs
- renderer does not attach execution click handlers
- renderer returns nothing with flag disabled
- renderer returns nothing when eligibility is false
- flag enabled alone is not enough
- eligible low-risk fixtures return inert metadata only in test isolation
- excluded/high-risk fixtures return nothing
- required safety language appears in this document
- package script exists
- `scripts/qa-suite.js` includes this guard

## 9. Acceptance Criteria

Acceptance criteria for Phase 12R:

- all static QA passes
- all-safe remains green
- no runtime files load the renderer
- no visible UI added
- no execution path added
- no permission/provider/navigation path added
- no Standard User behavior changed
- no default flag behavior changed
- no app startup rendering added

## 10. Non-Goals

Phase 12R does not:

- wire runtime UI
- enable renderer visibility
- add DOM rendering
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

Phase 12S - Controlled Runtime Wiring Readiness Review

Phase 12S should review whether the project is ready for a very limited flag-gated runtime wiring implementation, or whether more QA is needed first. It should not automatically assume runtime wiring is approved.

## 12. Safety Language Checklist

The Phase 12R static guard preserves these exact safety terms:

- Controlled Runtime Wiring Static QA Scaffold
- disabled by default
- flag disabled means render nothing
- eligibility false means render nothing
- flag enabled alone is not enough
- low risk only
- suggestion_only
- navigation_only
- no visible runtime UI when flag off
- no DOM rendering when flag off
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
- Phase 12S
