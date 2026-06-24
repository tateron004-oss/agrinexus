# Nexus Low-Risk Inert Renderer Prototype Implementation

## 1. Purpose and Scope

Phase 12O adds the first dormant Low-Risk Inert Renderer Prototype Implementation. The prototype is a pure JavaScript model builder only. It does not implement visible Standard User UI, does not load into `public/app.js`, and does not load from `public/index.html`.

This phase keeps the Phase 12L flag disabled by default:

```text
NEXUS_LOW_RISK_INERT_RENDERER_ENABLED=false
```

The renderer is dormant unless a future local/test-safe harness explicitly passes the disabled-by-default flag guard and the Phase 12M eligibility guard.

## 2. Relationship to Phase 12L, 12M, and 12N

Phase 12L added the disabled-by-default flag guard.

Phase 12M added the low-risk eligibility guard.

Phase 12N proved flag-off regression behavior: with the flag disabled, representative low-risk and high-risk prompt chains authorize no visible rendering.

Phase 12O adds a dormant renderer module behind those guards. It does not change Standard User behavior when the flag is off and does not wire any visible runtime UI.

## 3. Runtime File

New dormant module:

```text
public/nexus-low-risk-inert-renderer.js
```

Exported functions:

- `buildNexusLowRiskInertRendererPrototype(actionDecision, stagedActionState, inertRenderModel, context)`
- `renderNexusLowRiskInertPreview(actionDecision, stagedActionState, inertRenderModel, context)`

The second function name exists for future compatibility with the planned renderer vocabulary. It returns a data object only. It does not render DOM.

## 4. Default Behavior

Default behavior:

- flag disabled by default
- renderer output is inactive by default
- no prototype display model when the flag is off
- eligibility defaults false
- flag disabled makes eligible false
- no visible runtime UI
- no DOM rendering
- no click handlers
- no live execution

The dormant renderer has no Standard User runtime effect because it is not loaded by `public/app.js` or `public/index.html`.

## 5. Allowed Prototype Scope

The prototype may build an inert display model only when all of these are true in a local/test-safe harness:

- flag context is enabled through the Phase 12L guard
- Phase 12M eligibility returns eligible true
- risk is low
- executionBoundary is `suggestion_only` or `navigation_only`
- uiState is `suggestion_preview`, `review_option`, or `informational_response`
- renderMode is `inert_preview`, `inert_review`, `inert_review_option`, or `inert_information`
- executionAllowed is false
- providerHandoffAllowed is false
- permissionRequestAllowed is false
- domRenderingAllowed is false
- clickHandlersAllowed is false

Allowed domains remain:

- learning
- jobs
- marketplace browse/review only
- agriculture support review only

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

Excluded prompts must not produce an inert display card from this prototype.

## 7. Inert Display Model Contract

When eligible in a local/test-safe harness, the prototype may return an inert model with:

- `active: true`
- `prototypeDisplayEligible: true`
- a title
- a body
- a badge
- a risk label
- safety copy
- disabled control labels such as `Review options` and `Not now`

The model must always return:

- `executionAllowed: false`
- `providerHandoffAllowed: false`
- `permissionRequestAllowed: false`
- `navigationAllowed: false`
- `domRenderingAllowed: false`
- `clickHandlersAllowed: false`
- `visibleRuntimeUi: false`
- `metadataOnly: true`

The model is preview data only. It is not a DOM node, not a button, not a modal, and not a command.

## 8. Standard User Behavior Preservation

Standard User behavior remains unchanged:

- `public/app.js` does not load the renderer
- `public/index.html` does not load the renderer
- no visible renderer appears
- no session memory UI changes
- no preview card regression
- no high-risk response regression
- no modal/provider/permission behavior change
- Standard User visible behavior remains unchanged

## 9. Safety Invariants

The renderer must preserve these safety invariants:

- planner metadata is not execution authority
- selectedToolId must not directly execute
- agentAction must not directly execute
- missingInputs must block execution
- restricted actions must not execute
- provider_handoff_only must not mean execution happened
- confirmationRequired must be honored
- not ready for real execution

The module must not introduce:

- `document.createElement`
- `addEventListener`
- `onclick`
- `location.href`
- `window.open`
- `navigator.geolocation`
- `getUserMedia`
- `fetch`
- `tel:`
- `whatsapp`
- `telegram`
- `payment`
- `dispatch`
- `emergency dispatch`

## 10. QA Coverage

QA must verify:

- renderer module exists
- renderer module passes syntax check
- flag-off output remains inactive
- safe low-risk local/test-safe flag-on fixtures produce inert display model data only
- excluded fixtures produce inactive output
- high-risk fixtures produce inactive output
- unsafe render model fields block output
- Standard User does not load the renderer
- package alias exists
- Nexus Workforce suite includes the renderer QA
- all-safe passes

## 11. Non-Goals

This phase does not:

- wire renderer into Standard User UI
- render DOM
- attach click handlers
- open modals
- request permissions
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
- weaken confirmation or provider handoff protections
- make planner output authoritative
- allow selectedToolId or agentAction to directly execute anything

## 12. Recommended Next Phase

Recommended next phase:

Phase 12P - Low-Risk Renderer Browser Validation

That phase should manually validate Standard User behavior with the flag off and optionally validate a local-safe flag-on harness without wiring the renderer into production demo behavior.

