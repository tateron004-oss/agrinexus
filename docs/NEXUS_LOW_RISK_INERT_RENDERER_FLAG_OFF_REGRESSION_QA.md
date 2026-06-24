# Nexus Low-Risk Inert Renderer Flag-Off Regression QA

## 1. Purpose and Scope

This document defines Low-Risk Inert Renderer Flag-Off Regression QA. Its purpose is to prove that with the low-risk inert renderer flag disabled by default, the mapper, staged state helper, inert render model helper, flag guard, and eligibility guard do not change Standard User behavior.

This phase is regression QA and documentation only. It adds no visible runtime UI, no DOM rendering, no click handlers, no live execution, no provider handoff, no browser permissions, no navigation, no call execution, no message execution, no camera opening, no location sharing, no transaction, and no emergency dispatch claim.

## 2. Relationship to Phase 12L and 12M

Phase 12L added the disabled-by-default flag guard:

```text
NEXUS_LOW_RISK_INERT_RENDERER_ENABLED=false
```

Phase 12M added the eligibility guard. Phase 12N proves the flag-off posture remains inert:

- flag disabled by default
- eligibility defaults false
- flag disabled makes eligible false
- no visible renderer exists
- no live module loading

## 3. Flag-Off Regression Principle

Flag-off means no Standard User behavior change. Even when a representative prompt can produce an actionDecision, stagedActionState, and inertRenderModel, eligibility remains false because the flag is disabled by default.

The flag-off chain must prove:

- mapper metadata is not execution authority
- staged state metadata is not execution authority
- inert render model metadata is not rendering authority
- eligibility false means no visible rendering authorized
- planner metadata is not execution authority
- selectedToolId must not directly execute
- agentAction must not directly execute

## 4. What Must Remain Unchanged

These behaviors must remain unchanged:

- low-risk prompts remain existing preview-first behavior only
- high-risk prompts remain no-action, blocked, permission-gated, or confirmation-gated
- Review options behavior remains the existing safe behavior
- provider handoff boundaries remain intact
- call/contact permissions remain intact
- map/location permissions remain intact
- marketplace/AgriTrade remains browse/review safe
- health/telehealth modal safety remains intact
- session memory UI remains absent
- Standard User visible behavior remains unchanged

## 5. Static Loading Checks

Static QA must verify `public/app.js` and `public/index.html` do not load:

- `nexus-low-risk-inert-renderer-flag.js`
- `nexus-low-risk-inert-renderer-eligibility.js`
- `public/nexus-low-risk-inert-renderer.js`

Static QA must also verify:

- `renderNexusLowRiskInertPreview` is not referenced
- no visible low-risk inert renderer runtime file is present
- no live module loading is introduced

## 6. Eligibility Default Checks

QA must verify:

- `NEXUS_LOW_RISK_INERT_RENDERER_ENABLED=false`
- flag helper returns false by default
- eligibility defaults false
- flag disabled makes eligible false for safe low-risk fixtures
- flag disabled makes eligible false for excluded fixtures
- visibleRenderingAuthorized remains false

## 7. Representative Prompt Coverage

Representative low-risk prompts:

- `Nexus, teach me how irrigation works`
- `Nexus, help me find agriculture training`
- `Nexus, show me farm jobs`
- `Nexus, browse AgriTrade`
- `Nexus, I need help with crop issues`

Representative excluded prompts:

- `Nexus, call someone`
- `Nexus, send a message`
- `Nexus, find my location`
- `Nexus, use my camera`
- `Nexus, buy this item`
- `Nexus, I have an emergency`

For each prompt, QA should be able to build the metadata chain in isolation and prove that flag-off eligibility remains false.

## 8. Standard User Behavior Preservation

Standard User behavior preservation requires:

- `public/app.js` does not reference the flag helper
- `public/app.js` does not reference the eligibility helper
- `public/app.js` does not reference `renderNexusLowRiskInertPreview`
- `public/index.html` does not reference these modules
- no live renderer file is loaded
- no hidden flag path changes visible copy
- no preview card regression
- no high-risk response regression

## 9. Safety Invariants

The flag-off regression guard must preserve these invariants:

- no visible runtime UI
- no DOM rendering
- no click handlers
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
- missingInputs must block execution
- restricted actions must not execute
- provider_handoff_only must not mean execution happened
- confirmationRequired must be honored
- not ready for real execution

Static QA should reject dangerous runtime surfaces such as:

- `document.createElement`
- `addEventListener`
- `onclick`
- `location.href`
- `window.open`
- `navigator.geolocation`
- `getUserMedia`
- `tel:`
- `whatsapp`
- `telegram`
- `payment`
- `dispatch`
- `emergency dispatch`

## 10. Future Flag-On Testing Boundary

Flag-on testing belongs to a later implementation phase. Future flag-on work must still prove:

- only low-risk inert display may appear
- high-risk prompts remain no-action
- no modals
- no permissions
- no provider handoff
- no execution
- clean console

Phase 12N does not validate a visible flag-on renderer because no visible renderer exists.

## 11. Non-Goals

This phase does not:

- implement visible runtime UI
- wire eligibility helper into Standard User UI
- wire flag helper into Standard User UI
- add `public/nexus-low-risk-inert-renderer.js`
- render DOM
- create execution buttons
- attach click handlers
- open confirmation modals
- request browser permissions
- navigate
- place calls
- send messages
- share location
- open camera
- make purchases
- submit forms
- alter health workflow state
- claim emergency dispatch
- add provider credentials
- weaken existing confirmation or provider handoff protections
- make planner output authoritative
- allow selectedToolId or agentAction to directly execute anything

Recommended next phase:

Phase 12O - Low-Risk Inert Renderer Prototype Implementation

That phase may implement the first gated, disabled-by-default, low-risk-only inert renderer runtime path if and only if this flag-off regression QA remains green and the implementation is strictly inert.

