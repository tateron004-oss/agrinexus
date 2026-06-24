# Nexus Controlled Low-Risk Renderer Inert DOM Prototype - Test Fixture Only

## 1. Purpose and Scope

Phase 13B adds a controlled low-risk renderer inert DOM prototype for test fixtures only.

This is not a production activation phase. It does not enable Standard User visible renderer UI, wire `public/index.html`, add runtime renderer roots, add action buttons, attach click handlers, navigate, call providers, request browser permissions, confirm actions, or execute actions.

## 2. Relationship to Phases 12Y, 12Z, and 13A

Phase 12Y added the local/test-only metadata/no-op flag-on harness.

Phase 12Z validated that the Standard User browser build remained unwired after the metadata/no-op harness.

Phase 13A defined the visible UI design contract for any future controlled low-risk renderer.

Phase 13B adds only a tiny inert DOM prototype helper that can be exercised by static/local-safe QA with a fake document fixture. The helper remains unreachable from Standard User startup.

## 3. Why the Prototype Remains Test-Fixture-Only

The prototype exists to validate DOM safety before any visible renderer is considered. It is intentionally not loaded by `public/index.html`, not invoked during normal startup, and not connected to Nexus suggestions, planner output, policy output, provider handoff, navigation, permissions, confirmation, or execution.

The helper requires an explicit injected document-like fixture. Without that fixture, it returns no card.

## 4. Allowed Inert Prototype Output

The inert prototype may create one static review-only card element in a controlled test fixture context.

Allowed labels:

- Learning
- Training
- Jobs
- Marketplace Review
- Agriculture Help

Allowed text fields:

- `category`
- `displayTitle`
- `summary`
- fixed safety copy

Required inert metadata attributes:

- `data-nexus-renderer-mode="inert"`
- `data-execution-allowed="false"`
- `data-provider-handoff="false"`
- `data-permission-request="false"`

Required safety copy:

- Review only.
- No action has been taken.
- Any future action must be separate, explicit, confirmed, and gated.

## 5. Prohibited Output and Behavior

The inert prototype must not create or trigger:

- `onclick`
- action `addEventListener`
- action buttons
- links that route or navigate
- provider handoff
- browser permission requests
- call behavior
- message behavior
- location sharing
- camera opening
- payment
- purchase
- emergency behavior
- booking behavior
- form submission
- health mutation
- raw HTML insertion from prompt or model content
- automatic rendering on page load
- Standard User app-state mutation
- `window.location` changes
- network calls
- storage writes
- confirmation modals

## 6. DOM Safety Rules

All prompt/model-provided text must be inserted through safe text APIs such as `textContent`.

The helper must not use `innerHTML` with untrusted values. Hostile strings such as `<img src=x onerror=alert(1)>` and `<script>alert(1)</script>` must be rendered as text, not interpreted as HTML.

Card structure must be fixed by code, not supplied by model output.

## 7. Standard User Safety Posture

Standard User behavior remains unchanged:

- `public/index.html` remains unwired.
- no renderer script tag is added.
- no visible renderer root is added.
- no renderer helper is called during startup.
- no provider, permission, navigation, confirmation, or execution path is introduced.
- Phase 12Y metadata/no-op behavior remains intact.
- Phase 12Z browser-regression posture remains intact.
- Phase 13A design contract remains enforced.

## 8. Required Future Gates Before Visible Rendering

Before any visible Standard User renderer is enabled, the project must pass:

- Phase 13A visible UI design contract QA
- Phase 13B inert DOM prototype QA
- Phase 12Y harness implementation QA
- Phase 12Z browser regression QA
- Nexus Workforce suite
- all-safe suite
- a future browser validation proving no auto-execution, provider handoff, permission prompt, navigation, call, message, payment, purchase, emergency dispatch, camera, location, booking, form submission, or health mutation behavior appears

## 9. Non-Goals

Phase 13B does not:

- enable Standard User visible renderer UI
- wire `public/index.html`
- add active production DOM cards
- add action buttons
- add click handlers
- add route changes
- add provider handoff
- add browser permission prompts
- add high-risk behavior
- change Standard User demo behavior

## 10. Recommended Next Phase

Recommended next phase:

**Phase 13C - Controlled Low-Risk Renderer Test Fixture Browser Harness Plan**

Phase 13C should plan a browser-safe test fixture that can validate inert rendering without enabling Standard User runtime UI.
