# Nexus Controlled Low-Risk Renderer Hidden Mount Point Test-Only Fixture

## 1. Purpose and Scope

Phase 13I creates a test-only hidden mount point fixture for the controlled low-risk renderer. This is not an activation phase.

The fixture gives future reviewers a concrete reference for the Phase 13H hidden Standard User mount point contract without adding the mount point to `public/index.html` and without wiring Standard User runtime behavior.

## 2. Relationship to Prior Renderer Phases

This fixture sits after the controlled low-risk renderer pre-activation stack:

- Phase 12Y: local/test-only controlled runtime flag-on harness implementation.
- Phase 12Z: controlled runtime flag-on harness browser regression validation.
- Phase 13A: visible UI design contract.
- Phase 13B: inert DOM prototype behind test fixture only.
- Phase 13C: inert DOM browser regression and contract enforcement.
- Phase 13D: test-only visual snapshot fixture.
- Phase 13E: Standard User readiness review before visible activation.
- Phase 13F: default-off visible feature flag design.
- Phase 13G: Standard User validation after the renderer pre-activation stack.
- Phase 13H: hidden Standard User mount point contract.

Phase 13I does not supersede any earlier guard. It adds one test-only fixture that is outside the active app path.

## 3. Fixture Location

The fixture lives at:

`test-fixtures/nexus-controlled-low-risk-renderer-hidden-mount-point.fixture.html`

The fixture is outside `public/`, is not served as part of the Standard User app, and must not be referenced by `public/index.html`, `public/app.js`, or `server.js`.

## 4. Fixture Shape

The fixture may include one hidden/default-empty element using the future proposed mount point id:

`nexus-controlled-low-risk-renderer-root`

The fixture may include inert/default-off metadata:

- `data-nexus-renderer-mode="hidden"`
- `data-visible-renderer-enabled="false"`
- `data-execution-allowed="false"`
- `data-provider-handoff="false"`
- `data-permission-request="false"`
- `data-navigation-allowed="false"`

The fixture must include a test-only comment explaining that it is not loaded by Standard User.

## 5. Why Standard User Remains Unchanged

The actual Standard User mount point is still not added. `public/index.html` remains unwired. `public/app.js` does not query or render into the future mount point. `server.js` does not expose any renderer activation endpoint.

This phase creates only a static fixture for review and QA. It does not add visible cards, action controls, startup calls, feature flag activation, route changes, provider handoff, permissions, network calls, storage writes, confirmation modals, or execution behavior.

## 6. Allowed Fixture Content

The fixture may contain:

- Doctype, html, head, meta, title, and body.
- A single hidden/default-empty mount point element.
- Inert data attributes that explicitly disable visible renderer, execution, provider handoff, permission requests, and navigation.
- A test-only HTML comment.
- Accessibility attributes that describe the fixture as hidden and inactive.

## 7. Prohibited Fixture Content

The fixture must not contain:

- Scripts.
- Buttons.
- Links.
- Forms.
- Inputs.
- Inline event attributes.
- External assets.
- Visible cards.
- Startup calls.
- Feature flag activation.
- Provider handoff.
- Permission requests.
- Navigation.
- Network calls.
- Storage writes.
- Confirmation modals.
- Execution affordances.
- Call, message, location, camera, payment, purchase, emergency, booking, account mutation, or health mutation affordances.

## 8. Required Future Gates Before Real Mount Addition

Before any real mount point is added to `public/index.html`, future work must prove:

- `enableControlledLowRiskRendererVisibleUi === true` is required.
- The mount point remains hidden and default-empty.
- Rendering requires low-risk category allowlist approval.
- Execution, provider handoff, permission request, and navigation flags remain false.
- Text-only DOM insertion is used.
- Raw HTML is rejected.
- No action buttons or links are added in the first visible phase unless separately approved and gated.
- Browser regression validation passes with the Standard User build.
- Manual Standard User validation confirms no auto-open, auto-execution, permissions, provider handoff, or hidden/debug metadata exposure.

## 9. Standard User Safety Posture

After Phase 13I:

- No actual mount point exists in Standard User.
- No visible controlled low-risk renderer UI exists in Standard User.
- The fixture is not loaded by Standard User.
- Existing low-risk suggestion labels remain unchanged.
- Existing controlled preview behavior remains unchanged.
- High-risk and permission-sensitive behavior remains blocked, gated, or confirmation-bound by existing guards.

## 10. QA Coverage

The Phase 13I QA guard must verify:

- This document exists and says the phase is not an activation phase.
- The fixture exists outside `public/`.
- The fixture contains the future mount point id.
- The fixture is hidden/default-off.
- The fixture contains only inert metadata.
- The fixture contains no scripts, buttons, links, forms, inputs, inline event attributes, external assets, visible cards, or execution affordances.
- `public/index.html` remains unwired and does not contain the actual mount point id.
- `public/index.html`, `public/app.js`, and `server.js` do not reference the fixture.
- Phase 13H contract QA remains callable.
- Phase 12Y through 13H renderer/pre-activation QA remains callable through the Nexus Workforce suite.

## 11. Recommended Next Phase

The recommended next phase is a browser regression validation checkpoint proving that the new test-only fixture did not affect the Standard User build.

The real Standard User mount point should remain out of `public/index.html` until a later explicit implementation phase approves a hidden/default-empty mount with the full Phase 13H and Phase 13I guard stack passing.
