# Nexus Controlled Low-Risk Renderer Default-Off Visible Feature Flag Design

## 1. Purpose and Scope

Phase 13F defines the default-off visible feature flag design for a future controlled low-risk renderer in the Standard User build.

This is not a visible activation phase. It does not enable Standard User visible renderer UI, wire `public/index.html`, call the inert helper from startup, create active production DOM cards, add buttons, add links, add click handlers, add route changes, add provider handoff, request browser permissions, add network calls, add storage writes, add confirmation modals, or execute actions.

This phase intentionally adds documentation and QA guardrails only. No runtime feature flag constant is added to `public/app.js`, `public/index.html`, or `server.js` in this phase.

## 2. Relationship to Phases 12Y, 12Z, 13A, 13B, 13C, 13D, and 13E

Completed pre-activation stack:

- Phase 12Y added a local/test-only controlled runtime flag-on harness path. It remains metadata/no-op and grants no rendering or execution authority.
- Phase 12Z provided browser-regression validation that the Standard User build remains unwired and safe.
- Phase 13A defined the visible UI design contract for a future card.
- Phase 13B added `createNexusControlledLowRiskInertCardForTest(...)` for injected test fixtures only.
- Phase 13C enforced browser-regression and contract rules for the inert helper.
- Phase 13D added a static visual snapshot fixture outside `public/`.
- Phase 13E reviewed Standard User readiness and concluded visible activation is still no-go until a default-off feature flag, browser regression QA, and manual validation are complete.

Phase 13F answers the feature-flag design question without changing runtime behavior.

## 3. Proposed Future Flag

Proposed future visible flag name:

`enableControlledLowRiskRendererVisibleUi`

The name intentionally distinguishes future visible Standard User rendering from the existing local/test-only `NEXUS_LOW_RISK_INERT_RENDERER_ENABLED` harness guard.

Required flag properties:

- Default value: `false`.
- Missing value: no-op.
- Undefined value: no-op.
- Null value: no-op.
- Malformed value: no-op.
- Explicit `false`: no-op.
- Truthy non-boolean strings such as `"true"`, `"1"`, `"yes"`, `"on"`, or `"enabled"`: no-op.
- Only literal boolean `true` may be considered enabled in a future implementation.
- Even literal boolean `true` must not render anything by itself.

## 4. Why This Flag Does Not Activate Visible UI Yet

The future flag is only one gate. It cannot authorize visible rendering by itself.

Visible rendering may occur only in a separate future phase after all of these conditions are true:

- `enableControlledLowRiskRendererVisibleUi === true`
- category is explicitly allowlisted
- risk tier is low
- execution is false
- provider handoff is false
- permission request is false
- navigation is false
- click handlers are false
- network calls are false
- storage writes are false
- confirmation modal creation is false
- high-risk category is absent
- text-only DOM insertion is used
- no action buttons are created
- no links are created
- browser regression QA has passed
- Standard User manual browser validation has passed

The flag must never be treated as execution authority, provider handoff authority, permission authority, navigation authority, confirmation authority, or storage authority.

## 5. Standard User Safety Posture

The current Standard User build remains safe because:

- `public/index.html` remains unwired to low-risk renderer scripts, roots, and snapshot fixtures.
- no Standard User renderer root exists
- no visible renderer UI is enabled
- `createNexusControlledLowRiskInertCardForTest(...)` is not called during startup
- existing low-risk suggestion chips and controlled previews remain governed by existing app logic
- high-risk prompts remain guarded by policy, permission, confirmation, and pending-action boundaries
- no provider, call, message, payment, marketplace transaction, health, emergency, camera, location, account, or identity action can be unlocked by renderer metadata

## 6. Required Future Visible Activation Gates

Before any future Standard User visible renderer activation, a separate phase must add and validate:

- a default-off runtime flag implementation
- strict boolean-only parsing
- source controlled only by trusted build/config code, not user input
- no query parameter activation
- no `localStorage` activation
- no `sessionStorage` activation
- no user-controlled DOM activation
- explicit safe category allowlist
- low-risk-only decision checks
- text-only DOM insertion
- no raw model HTML
- no action buttons
- no links
- no click handlers
- no automatic routing
- no external navigation
- no provider handoff
- no browser permission prompts
- no network calls
- no storage writes
- no confirmation modals
- no high-risk or sensitive category rendering
- dedicated browser regression QA
- dedicated Standard User manual browser validation
- push checkpoint before activation

## 7. Allowed Future Flag-On Behavior

When all future gates pass, the first visible flag-on behavior may only show inert review copy for safe low-risk categories:

- Training
- Jobs
- Learning
- Marketplace Review
- Agriculture Help
- Field Support

Allowed card content:

- category label
- short plain-language summary
- review-only explanation
- "No action has been taken" safety copy
- non-authoritative metadata such as `riskTier: low`
- disabled/inert visual affordance only if separately validated

## 8. Prohibited Behavior

The flag must never introduce:

- active production DOM cards while off
- automatic visible rendering
- action buttons
- links
- click handlers
- navigation
- provider handoff
- call behavior
- message behavior
- marketplace buy/sell/payment behavior
- camera activation
- location sharing
- health mutation
- telehealth video launch
- emergency dispatch
- account/profile mutation
- job application submission
- form submission
- browser permission prompts
- network calls
- storage writes
- confirmation modals
- hidden execution queues
- high-risk action behavior

## 9. Config and Runtime Placeholder Decision

Phase 13F does not add a runtime/config placeholder.

Rationale:

- the current Standard User build is demo-safe and unwired
- `public/index.html` should remain untouched before manual validation
- the existing Phase 12Y harness already covers local/test-only metadata/no-op flag behavior
- adding a visible-runtime flag constant before activation could be mistaken for a partial runtime implementation
- a future implementation should introduce the runtime placeholder together with dedicated false/missing/malformed no-op tests

If a future runtime placeholder is added, it must be read-only in normal Standard User operation and must not be user-toggleable through query parameters, storage, DOM state, or hidden debug surfaces.

## 10. QA Expectations

Phase 13F QA must prove:

- this document exists
- this phase is not visible activation
- the proposed flag is documented as default-off
- missing, undefined, null, malformed, and false states are no-op
- truthy non-boolean strings are rejected or ignored
- the flag alone cannot render UI
- `public/index.html` remains unwired
- no Standard User renderer root exists
- no active production cards are added
- no buttons, links, click handlers, navigation, provider handoff, permissions, network, storage, confirmation, or execution behavior is introduced
- the Phase 13D fixture remains outside `public/`
- Phase 12Y through 13E QA remains callable
- the Nexus Workforce QA suite includes the Phase 13F guard

## 11. Recommended Next Phase

Recommended next phase:

**Phase 13G - Standard-User Manual Browser Validation Checkpoint**

Phase 13G should manually validate the Standard User demo build after the renderer pre-activation stack, before any visible UI wiring begins.

Visible activation remains blocked until Phase 13G passes and a later phase explicitly implements a default-off runtime flag with browser regression QA.
