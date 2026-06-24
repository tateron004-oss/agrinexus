# Nexus Low-Risk Inert Renderer Flag Guard

## 1. Purpose and Scope

This phase adds a disabled-by-default Low-Risk Inert Renderer Flag Guard for a future low-risk-only inert renderer prototype. It does not implement visible UI.

The guard exists so a later phase can make an explicit, testable decision before any future display work begins. This phase adds no visible runtime UI, no DOM rendering, no click handlers, no live execution, no provider handoff, no browser permissions, no navigation, no call execution, no message execution, no camera opening, no location sharing, no transaction, and no emergency dispatch claim.

The guard is not ready for real execution. Planner metadata is not execution authority, selectedToolId must not directly execute, agentAction must not directly execute, missingInputs must block execution, restricted actions must not execute, provider_handoff_only must not mean execution happened, and confirmationRequired must be honored.

## 2. Relationship to Phase 12K

Phase 12K planned a future gated, disabled-by-default, low-risk-only inert renderer prototype. Phase 12L creates the flag guard that future implementation must pass through before any eligible low-risk display is considered.

This phase preserves Phase 11J and Phase 12A through Phase 12K behavior. It does not wire the flag into Standard User UI, does not load a visible renderer, and does not change the current preview card, Review options, high-risk safety copy, session memory, provider handoff, confirmation, health, telehealth, camera, call, message, marketplace, map, or emergency behavior.

## 3. Flag Definition

The canonical flag is:

```text
NEXUS_LOW_RISK_INERT_RENDERER_ENABLED=false
```

Default behavior:

- default false
- disabled by default
- no production accidental enablement
- no Standard User behavior change when false
- no execution authority
- no high-risk rendering authority
- no permission authority
- no provider handoff authority

The current guard is a pure helper. It must not read provider credentials, request permissions, render UI, import renderer code, import `app.js`, call `mapNexusPromptToActionDecision`, call `deriveNexusStagedActionState`, call `deriveNexusStagedActionRenderModel`, alter Standard User behavior, or expose execution authority.

## 4. Guard Semantics

The flag may authorize in a future phase:

- low-risk-only inert display eligibility
- `suggestion_preview` display eligibility
- `review_option` display eligibility
- `informational_response` display eligibility
- learning review only
- jobs review only
- marketplace browse/review only
- agriculture support review only

The flag must never authorize:

- execution
- provider handoff
- browser permissions
- navigation
- click handlers that execute
- calls
- messages
- camera
- location sharing
- transactions
- forms
- health mutations
- emergency dispatch claims
- medium rendering controls
- high rendering controls
- restricted rendering controls

The flag is an eligibility guard only. It is not a renderer, executor, confirmation modal, permission request, provider adapter, planner, or router.

## 5. Eligible Scope

Future low-risk inert display is eligible only when all of these are true:

- flag enabled in a future local/test-safe path
- riskLevel is low
- executionBoundary is `suggestion_only` or `navigation_only`
- uiState is `suggestion_preview`, `review_option`, or `informational_response`
- inertRenderModel.executionAllowed is false
- inertRenderModel.domRenderingAllowed is explicitly controlled by future implementation, not this flag
- actionDecision domain is learning, jobs, marketplace browse/review only, or agriculture support review only

Eligible examples remain narrow:

- `Nexus, teach me how irrigation works`
- `Nexus, help me find agriculture training`
- `Nexus, show me farm jobs`
- `Nexus, browse AgriTrade`
- `Nexus, I need help with crop issues`

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
- job application submission
- form submission
- provider handoff
- browser permission
- medium
- high
- restricted

Excluded prompts must not receive low-risk inert renderer controls, even if a future local flag is enabled.

## 7. Future Integration Requirements

Future renderer implementation must:

- import the flag guard explicitly
- check low-risk eligibility separately
- check executionAllowed false
- avoid high-risk controls
- avoid provider handoff
- avoid browser permissions
- avoid execution
- preserve Standard User behavior when flag false
- pass browser validation

The future implementation must not treat this flag as permission to render by itself. The flag only gates entry to a later eligibility helper and renderer contract.

## 8. Standard User Behavior Preservation

Current phase requirements:

- `public/app.js` must not load a visible low-risk renderer in this phase
- no Standard User visible behavior change
- no session memory UI change
- no preview card regression
- no high-risk response regression
- no modal/provider/permission behavior change
- Standard User visible behavior remains unchanged

The Standard User demo remains on the existing safe behavior: low-risk prompts can preview or review options through existing app behavior, while sensitive prompts remain blocked, permission-gated, confirmation-gated, or no-action.

## 9. QA Coverage

Static QA must verify:

- flag default false
- public/app.js does not load future renderer
- no visible renderer file is loaded
- no DOM rendering introduced
- no click handlers introduced
- no execution terms used as authority
- high-risk domains excluded
- all-safe passes

The QA must also verify these safety terms remain explicit:

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

## 10. Future Browser Validation Plan

Flag off:

- Standard User behavior identical to Phase 11J and Phase 12K
- no visible low-risk inert renderer
- no new console warnings or errors

Future flag on:

- only low-risk inert preview/review may appear
- high-risk prompts remain no-action
- no modals
- no permissions
- no provider handoff
- no execution
- clean console

Future browser prompts should include:

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

This phase is not ready for real execution.

## 12. Recommended Next Phase

Recommended next phase:

Phase 12M - Low-Risk Inert Renderer Eligibility Guard

That phase should add a pure eligibility helper that determines whether a given actionDecision, stagedActionState, and inertRenderModel are eligible for future low-risk inert display. It should still not render UI.

