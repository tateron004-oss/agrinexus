# Nexus Controlled Low-Risk Renderer Inert DOM Browser Regression and Contract Enforcement

## 1. Purpose and Scope

Phase 13C is a browser-regression and contract-enforcement phase for the controlled low-risk renderer inert DOM prototype.

This is not a feature activation phase. It does not enable Standard User visible renderer UI, wire `public/index.html`, call the inert helper from startup, add production DOM cards, add buttons, add links, add click handlers, add route changes, add provider handoff, request browser permissions, add network calls, add storage writes, add confirmation modals, or execute actions.

## 2. Relationship to Phases 12Y, 12Z, 13A, and 13B

Phase 12Y added a local/test-only metadata/no-op flag-on harness.

Phase 12Z validated that the Standard User browser build remained unwired after the metadata/no-op harness.

Phase 13A added the visible UI design contract for a future controlled low-risk renderer.

Phase 13B added `createNexusControlledLowRiskInertCardForTest(...)`, an injected-document test fixture helper that creates inert, review-only card markup.

Phase 13C proves the Phase 13B helper remains isolated, browser-safe, hostile-text-safe, and unreachable from Standard User startup.

## 3. Browser Regression Risk Tested

The regression risk is accidental activation of visible renderer UI in the Standard User build.

Phase 13C checks that:

- `public/index.html` remains unwired.
- no renderer script tag exists.
- no visible Standard User renderer root exists.
- `createNexusControlledLowRiskInertCardForTest(...)` is not invoked during startup.
- the helper requires an injected test document fixture.
- the helper does not use the real browser `document` implicitly.
- the helper does not register handlers, navigate, call providers, request permissions, use network APIs, write storage, or open confirmation modals.

## 4. Contract Rules Enforced

The inert helper may only create static review-only markup for safe categories:

- Learning
- Training
- Jobs
- Marketplace Review
- Agriculture Help

The card must include inert attributes:

- `data-nexus-renderer-mode="inert"`
- `data-execution-allowed="false"`
- `data-provider-handoff="false"`
- `data-permission-request="false"`

The card must use safe text APIs, including `textContent`, and must not interpret hostile HTML.

Hostile text that must remain text:

- `<img src=x onerror=alert(1)>`
- `<script>alert(1)</script>`
- `<button onclick="alert(1)">Run</button>`
- `<a href="https://example.com">Go</a>`

## 5. Unsafe Flags and Categories

The helper must return `null` for unsafe authority flags:

- `executionAllowed: true`
- `providerHandoffAllowed: true`
- `providerHandoff: true`
- `permissionRequestAllowed: true`
- `permissionRequest: true`

The helper must return `null` for unsafe or high-risk categories, including:

- Call
- Message
- Location
- Camera
- Payment
- Purchase
- Emergency
- Booking
- Health
- Account

## 6. What Remains Intentionally Blocked

The renderer remains unable to create or trigger:

- action buttons
- links
- click handlers
- automatic routing
- external navigation
- provider handoff
- browser permission prompts
- call or message execution
- location sharing
- camera opening
- payments
- purchases
- emergency dispatch claims
- booking actions
- form submission
- health mutation
- account mutation
- network calls
- storage writes
- confirmation modals

## 7. Why Standard User Visible Rendering Is Still Not Enabled

Standard User visible rendering is still not enabled because the project has only validated an inert prototype in a controlled test fixture.

Before any visible Standard User renderer appears, a future phase must validate a browser-safe fixture or snapshot, responsive behavior, accessibility, and continued non-execution against the full safety suite.

## 8. Required Future Gates

Before visible Standard User renderer activation, the project must pass:

- Phase 12Y harness implementation QA
- Phase 12Z browser regression QA
- Phase 13A design contract QA
- Phase 13B inert DOM prototype QA
- Phase 13C browser regression and contract enforcement QA
- Nexus Workforce suite
- all-safe suite
- a future manual/browser validation proving no auto-execution, provider handoff, permission prompt, navigation, network call, storage write, confirmation modal, call, message, payment, purchase, emergency dispatch, camera, location, booking, form submission, health mutation, or account mutation behavior appears

## 9. Non-Goals

Phase 13C does not:

- enable visible runtime UI
- wire `public/index.html`
- add active production DOM cards
- add buttons
- add links
- add click handlers
- add route changes
- add provider handoff
- request browser permissions
- add network calls
- add storage writes
- add confirmation modals
- add high-risk action behavior
- change Standard User demo behavior

## 10. Recommended Next Phase

Recommended next phase:

**Phase 13D - Controlled Low-Risk Renderer Test-Only Visual Snapshot Fixture**

Phase 13D should create a static visual snapshot or test-only fixture representation of the inert card contract without wiring it into the Standard User app.
