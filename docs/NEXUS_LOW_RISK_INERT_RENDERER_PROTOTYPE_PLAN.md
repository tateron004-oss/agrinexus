# Nexus Low-Risk Inert Renderer Prototype Plan

## 1. Purpose and Scope

This is a low-risk-only inert renderer prototype plan. It is plan only and does not implement runtime UI.

The future prototype would explore showing inert preview/review copy for a narrow set of low-risk Nexus prompts. This phase does not load a renderer into Standard User UI, create DOM elements, attach click handlers, open modals, request permissions, navigate, place calls, send messages, open camera, share location, buy/sell/pay, submit forms, mutate health workflows, claim emergency dispatch, add provider adapters, or enable execution.

The future renderer must remain disabled by default and not ready for real execution.

## 2. Relationship to Phase 12J

Phase 12J found that Nexus is ready to plan a future low-risk-only inert visible renderer prototype after one more QA phase, if gated and disabled by default.

Phase 12K defines that prototype plan. It does not implement the prototype. It preserves Phase 11J, 12A, 12B, 12C, 12D, 12E, 12F, 12G, 12H, 12I, and 12J behavior.

## 3. Eligible Low-Risk Prompt Scope

Only these prompts and domains are eligible for the future first prototype:

- `Nexus, teach me how irrigation works`
- `Nexus, help me find agriculture training`
- `Nexus, show me farm jobs`
- `Nexus, browse AgriTrade`
- `Nexus, I need help with crop issues`

Allowed domains:

- learning
- jobs
- marketplace browse/review only
- agriculture support review only

Allowed risk level:

- low risk only

Allowed `executionBoundary` values:

- `suggestion_only`
- `navigation_only`

Allowed `uiState` values:

- `suggestion_preview`
- `review_option`
- `informational_response` only if needed

Allowed render modes:

- `inert_preview`
- `inert_review`
- `inert_information` only if needed

## 4. Explicitly Excluded Prompt Scope

The future prototype must exclude:

- calls
- messages
- location
- camera
- emergency
- health/telehealth action
- marketplace transactions
- purchases
- offers
- seller contact
- provider handoff
- browser permissions
- forms
- job applications
- account/session actions
- any medium, high, or restricted action

Excluded prompts must not receive visible staged-action controls from this future renderer.

## 5. Feature Flag Requirement

Future implementation must use a disabled-by-default flag:

```text
NEXUS_LOW_RISK_INERT_RENDERER_ENABLED=false
```

Requirements:

- disabled by default
- must not enable in production accidentally
- must not affect Standard User behavior unless intentionally enabled
- must be testable in local QA
- must not affect high-risk prompts
- must not load execution code
- must not bypass existing Review options behavior
- must not change no-action responses for high-risk prompts

## 6. Future Runtime Integration Shape

Future file/module names, not implemented in this phase:

- `public/nexus-low-risk-inert-renderer.js`
- `renderNexusLowRiskInertPreview(...)`
- `attachNexusLowRiskInertRenderer(...)`, if a later phase approves an attach step

The future renderer may:

- consume `actionDecision`, `stagedActionState`, and `inertRenderModel`
- display inert low-risk preview/review copy
- show safe labels such as `Review only` or `No action taken`
- optionally show existing safe Review options behavior only if already present and QA-proven

The future renderer must not:

- execute actions
- call providers
- request permissions
- attach execution click handlers
- open modals
- submit forms
- navigate except through existing safe low-risk Review options path if explicitly approved
- render high-risk controls
- alter health/workflow/session state

## 7. Future Visual Contract

Visible later for eligible low-risk prompts:

- title
- body
- badge
- riskLabel
- safetyCopy
- disabledControls explanation
- Review options label, if safe
- `No action has been taken` copy

Must not be visible:

- execute buttons
- call buttons
- send buttons
- buy buttons
- permission prompts
- provider choices
- confirmation buttons for high-risk actions
- misleading success/completion language

## 8. Standard User Demo Preservation

Future implementation must preserve Phase 11J:

- low-risk prompts remain preview-first
- high-risk prompts still show no-action responses
- hidden/debug metadata remains hidden unless the feature flag intentionally displays low-risk inert copy
- no session memory UI appears
- no browser permission prompt appears
- no modals open automatically
- no provider handoff opens automatically
- console remains clean
- Standard User visible behavior remains unchanged when the flag is off

## 9. Future QA Requirements Before Implementation

Required QA before any implementation:

- static QA for flag default false
- static QA that renderer is low-risk-only
- static QA that high-risk prompts are excluded
- behavior QA for eligible prompts
- behavior QA for excluded prompts
- Standard User no-change QA when flag is off
- browser validation when flag is on locally
- all-safe regression suite
- console warning/error validation
- QA proving planner metadata is not execution authority
- QA proving selectedToolId must not directly execute
- QA proving agentAction must not directly execute
- QA proving missingInputs must block execution
- QA proving restricted actions must not execute
- QA proving provider_handoff_only must not mean execution happened
- QA proving confirmationRequired must be honored

## 10. Future Browser Validation Plan

When implementation is eventually approved, validate the Standard User path locally.

Flag off expectations:

- no visible behavior change from Phase 11J

Flag on expectations for eligible prompts:

- low-risk inert renderer copy may appear
- no execution
- no modals
- no permission prompts
- no provider handoff
- no unsafe navigation
- Review options remains safe

Flag on expectations for excluded prompts:

- no inert renderer controls appear for high/restricted actions
- high-risk no-action responses remain
- no real-world action

Prompts to validate:

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

## 11. Implementation Go / No-Go Gates

Go only if:

- feature flag default false
- renderer scope is low-risk-only
- high/restricted prompts are excluded
- executionAllowed remains false
- DOM rendering is limited to inert display only
- no click handlers execute
- no provider or permission path is reachable
- Standard User behavior unchanged when flag off
- all local-safe QA passes

No-go if:

- any high-risk action renders controls
- any provider/permission/transaction/call/message/camera/location path is reachable
- any action appears completed
- any selectedToolId/agentAction path becomes authoritative
- any session memory UI appears
- any Standard User demo regression occurs

## 12. Risk Register

| Risk | Mitigation |
| --- | --- |
| Feature flag accidentally enabled | Default `NEXUS_LOW_RISK_INERT_RENDERER_ENABLED=false`; QA must assert default false. |
| High-risk prompt leakage | Restrict eligible prompts, domains, riskLevel, executionBoundary, uiState, and render modes. |
| Review options side effects | Reuse only existing safe Review options behavior if explicitly approved and QA-proven. |
| DOM click handler reuse | No click handlers in the first prototype; label-only or existing safe review path only. |
| Unsafe selectedToolId/agentAction reuse | selectedToolId and agentAction remain non-authoritative metadata. |
| provider_handoff_only misinterpreted | Exclude provider handoff from the first prototype entirely. |
| confirmationRequired ignored | Exclude confirmation-required actions from the first prototype. |
| missingInputs ignored | Exclude missing-input flows from low-risk visible renderer scope. |
| resultState completed misuse | QA must reject completed real-world action claims. |
| Marketplace browse vs transaction ambiguity | Allow marketplace browse/review only; no transaction, seller contact, offer, payment, or reservation. |
| Health/emergency copy ambiguity | Exclude health/telehealth actions and emergencies from the first prototype. |
| Session memory leakage | Do not read or display session memory in the first prototype. |
| Browser permission prompts | Exclude permission prompts and assert no browser permissions. |
| Console regressions | Require browser validation with console warning/error checks. |

## 13. Recommended Implementation Phase

Recommended next phase:

Phase 12L - Low-Risk Inert Renderer Flag Guard

That phase should add only the disabled-by-default feature flag and static QA proving the flag cannot enable execution or high-risk rendering.

## 14. Non-Goals

This phase does not:

- implement visible runtime UI
- load renderer into Standard User UI
- create DOM elements
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

Safety language for this plan:

- low-risk-only inert renderer prototype plan
- plan only
- disabled by default
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
- not ready for real execution
