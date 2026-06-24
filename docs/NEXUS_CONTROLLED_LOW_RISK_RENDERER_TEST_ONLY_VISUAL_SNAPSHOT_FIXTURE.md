# Nexus Controlled Low-Risk Renderer Test-Only Visual Snapshot Fixture

## 1. Purpose and Scope

Phase 13D adds a test-only visual snapshot fixture for the controlled low-risk renderer inert card contract.

This is not a production UI activation phase. It does not enable Standard User visible renderer UI, wire `public/index.html`, call the inert helper from startup, add production DOM cards, add buttons, add links, add click handlers, add route changes, add provider handoff, request browser permissions, add network calls, add storage writes, add confirmation modals, or execute actions.

## 2. Relationship to Phases 12Y, 12Z, 13A, 13B, and 13C

Phase 12Y added a local/test-only metadata/no-op flag-on harness.

Phase 12Z validated that the Standard User browser build remained unwired after the metadata/no-op harness.

Phase 13A added the visible UI design contract.

Phase 13B added `createNexusControlledLowRiskInertCardForTest(...)`, an injected-document test fixture helper.

Phase 13C enforced browser-regression and contract rules for the inert helper.

Phase 13D adds a static snapshot artifact that lets the team review the safe visual structure without placing the renderer in the production Standard User app.

## 3. Fixture Location and Loading Restrictions

Fixture path:

`test-fixtures/nexus-controlled-low-risk-renderer-inert-card.snapshot.html`

The fixture is intentionally outside `public/`. It is not referenced by `public/index.html`, not loaded by Standard User startup, and not connected to app routing, provider handoff, permissions, confirmation, or execution.

## 4. What the Snapshot May Show

The snapshot may show static, review-only cards for:

- Learning
- Training
- Jobs
- Marketplace Review
- Agriculture Help

Each card must include inert metadata indicators:

- `data-nexus-renderer-mode="inert"`
- `data-execution-allowed="false"`
- `data-provider-handoff="false"`
- `data-permission-request="false"`

Each card must say that Nexus is helping the user review options and that no action has been taken.

## 5. What the Snapshot Must Not Include

The snapshot must not include:

- `<script>` tags
- inline event attributes such as `onclick`
- buttons
- links
- forms
- inputs
- executable script
- external assets
- provider handoff affordances
- permission prompts
- execution controls
- payment, purchase, emergency, booking, call, message, camera, location, account mutation, or health mutation affordances

## 6. Standard User Safety Posture

Standard User behavior remains unchanged:

- `public/index.html` remains unwired.
- the snapshot is not referenced by Standard User startup.
- the inert helper remains test-document-only.
- visible rendering remains disabled.
- Phase 13A design contract remains enforced.
- Phase 13B test-fixture-only posture remains enforced.
- Phase 13C browser-regression and contract enforcement remains enforced.

## 7. QA Coverage

Phase 13D QA verifies:

- the fixture exists in a test-only path
- the fixture is not referenced by `public/index.html`
- the fixture contains only inert review-only metadata
- the fixture contains no scripts, event attributes, buttons, links, forms, or inputs
- the fixture has no provider, permission, execution, payment, purchase, emergency, booking, call, message, camera, location, account, or health mutation affordance
- prior Phase 12Y, 12Z, 13A, 13B, and 13C guards remain integrated

## 8. Required Future Gates

Before visible Standard User rendering is enabled, the project must pass:

- Phase 12Y harness implementation QA
- Phase 12Z browser regression QA
- Phase 13A design contract QA
- Phase 13B inert DOM prototype QA
- Phase 13C browser regression and contract enforcement QA
- Phase 13D visual snapshot fixture QA
- Nexus Workforce suite
- all-safe suite
- future manual browser validation proving no auto-execution, provider handoff, permission prompt, navigation, network call, storage write, confirmation modal, call, message, payment, purchase, emergency dispatch, camera, location, booking, form submission, account mutation, or health mutation behavior appears

## 9. Non-Goals

Phase 13D does not:

- enable Standard User visible renderer UI
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

**Phase 13E - Controlled Low-Risk Renderer Visual Snapshot Browser Review**

Phase 13E should manually review the test-only snapshot artifact in a local file/browser context while confirming the Standard User app remains unwired.
