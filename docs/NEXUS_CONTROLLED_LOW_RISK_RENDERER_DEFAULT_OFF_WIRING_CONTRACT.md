# Nexus Controlled Low-Risk Renderer Default-Off Wiring Contract

## 1. Purpose

Phase 13N defines the future default-off wiring contract for the controlled low-risk renderer.

This is not an activation phase. It does not wire `public/app.js`, does not alter `public/index.html`, does not change `server.js`, and does not render visible cards.

The contract connects four future concerns:

- the default-off feature flag `enableControlledLowRiskRendererVisibleUi`
- low-risk runtime metadata
- the hidden/default-empty mount point `nexus-controlled-low-risk-renderer-root`
- a future visible review-only renderer path

## 2. Relationship to Prior Phases

- Phase 12Y added a local/test-only metadata/no-op flag-on harness.
- Phase 12Z validated that the harness did not change the Standard User browser path.
- Phase 13A defined the visible UI design contract.
- Phase 13B and Phase 13C added and guarded an inert DOM prototype for test fixtures only.
- Phase 13F defined the default-off visible feature flag design.
- Phase 13H through Phase 13K defined and reviewed the hidden mount point contract.
- Phase 13L added the actual hidden/default-empty mount point.
- Phase 13M manually validated that the real Standard User browser path stayed visually unchanged and non-executing.

Phase 13N does not add runtime behavior. It records the mandatory preconditions for a future implementation phase.

## 3. Current Safety Posture

The current Standard User build has one hidden/default-empty renderer mount point:

`nexus-controlled-low-risk-renderer-root`

The mount point is hidden, `aria-hidden="true"`, empty, and marked with:

- `data-nexus-renderer-mode="hidden"`
- `data-visible-renderer-enabled="false"`
- `data-execution-allowed="false"`
- `data-provider-handoff="false"`
- `data-permission-request="false"`
- `data-navigation-allowed="false"`

`public/app.js` does not query the mount point, consume its metadata, activate the feature flag, or call `createNexusControlledLowRiskInertCardForTest(...)` from Standard User startup.

`server.js` does not expose renderer activation or change endpoint behavior.

## 4. Future Wiring Contract

Future visible review-only rendering may be considered only when all of these conditions are true:

- `enableControlledLowRiskRendererVisibleUi === true`
- the value is literal boolean `true`
- truthy strings such as `"true"`, `"1"`, `"yes"`, `"on"`, and `"enabled"` are rejected or ignored
- the hidden mount point exists exactly once
- the mount point starts hidden/default-empty before rendering
- runtime metadata identifies the item as low-risk
- category is explicitly allowlisted
- `executionAllowed === false`
- `providerHandoff === false`
- `permissionRequest === false`
- `navigationAllowed === false` for the first visible phase
- no high-risk or excluded category is present
- all rendered content is text-only DOM insertion
- raw model HTML is rejected
- no buttons are created in the first visible phase
- no links are created in the first visible phase
- no click handlers are attached in the first visible phase
- no provider handoff is available
- no browser permissions are requested
- no network calls are made
- no storage writes occur
- no confirmation modals open
- no action execution occurs
- dedicated browser regression QA passes
- dedicated Standard User manual browser validation passes after wiring

## 5. Low-Risk Allowlist

The first visible phase may only consider these categories:

- Learning
- Training
- Jobs
- Marketplace Review
- Agriculture Help

These categories are review-only. They do not grant navigation, execution, provider handoff, permission, confirmation, storage, or network authority.

## 6. High-Risk and Excluded Categories

The renderer must remain no-op for:

- provider handoff
- calls
- messages
- payments
- marketplace buy/sell/checkout
- account or profile changes
- identity verification
- health mutation
- telehealth or video session start
- emergency dispatch
- camera or media activation
- location access
- booking or appointment submission
- form submission
- contact lookup or contact disclosure
- any category not explicitly allowlisted

## 7. Required No-Op Conditions

Future wiring must return no-op if:

- the feature flag is missing
- the feature flag is false
- the feature flag is null
- the feature flag is undefined
- the feature flag is malformed
- the feature flag is a truthy string
- the mount point is missing
- more than one mount point exists
- the mount point is not hidden/default-empty before rendering
- the category is not allowlisted
- the category is high-risk or excluded
- runtime metadata is not low-risk
- `executionAllowed` is true
- `providerHandoff` is true
- `permissionRequest` is true
- `navigationAllowed` is true in the first visible phase
- raw HTML is present
- rendering would require buttons, links, handlers, network, storage, confirmation, provider handoff, permission request, navigation, or execution

No-op means no DOM mutation, no visible renderer card, no provider handoff, no permission prompt, no route change, no network call, no storage write, no confirmation modal, and no action execution.

## 8. DOM Safety Rules

Future rendering must use text-only DOM insertion.

The renderer must not use raw model HTML. The renderer must not trust model-provided HTML, scripts, URLs, event handlers, forms, buttons, links, or executable payloads.

The first visible phase must not create:

- buttons
- links
- forms
- inputs
- click handlers
- keyboard action handlers
- provider controls
- permission controls
- confirmation controls
- execution controls

## 9. Feature Flag Safety Rules

`enableControlledLowRiskRendererVisibleUi` is not user-toggleable through query parameters, localStorage, sessionStorage, hidden DOM state, or debug surfaces.

The flag is not execution authority. It is only one prerequisite in a larger allowlist and safety gate.

Boolean `true` alone is not enough to render. Low-risk metadata, a valid single hidden/default-empty mount point, disabled action authority fields, and dedicated QA are also required.

## 10. What Remains Intentionally Blocked

Phase 13N keeps blocked:

- visible renderer UI
- runtime wiring
- feature flag activation
- renderer startup calls
- inert helper startup invocation
- active production cards
- action buttons
- links
- forms or inputs
- click handlers
- route changes
- provider handoff
- browser permission prompts
- network calls
- storage writes
- confirmation modals
- high-risk action behavior
- execution

## 11. Required Future Gates

Before any visible rendering implementation:

- create a full wiring-state QA matrix
- verify all no-op states
- verify all allowlisted low-risk states
- verify all high-risk and excluded categories remain blocked
- run dedicated browser regression QA
- run dedicated Standard User manual browser validation
- keep Standard User demo safety green

## 12. Recommended Next Phase

Phase 13O - Controlled Low-Risk Renderer Wiring Readiness QA Matrix.

Phase 13O should create a comprehensive test matrix for all future wiring states before any runtime wiring is implemented.

