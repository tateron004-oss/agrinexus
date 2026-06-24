# Nexus Staged Action Renderer Runtime Readiness Audit

## 1. Purpose and Scope

This phase is a runtime readiness audit only. It audits whether Nexus is ready for a future controlled inert staged-action renderer in the Standard User experience.

It does not implement visible runtime UI, load a renderer in the Standard User UI, create DOM elements, attach click handlers, open modals, request browser permissions, navigate, place calls, send messages, share location, open camera, buy or sell, submit forms, mutate health workflows, claim emergency dispatch, add provider adapters, or enable execution.

The current recommendation is intentionally conservative: Nexus is ready for a future low-risk-only inert visible renderer prototype after one more QA phase, if gated and disabled by default. Nexus is not ready for medium/high-risk visible staging, not ready for provider handoff UI, not ready for confirmation modals, and not ready for real execution.

## 2. Current Safe Chain

The current safe chain is:

```text
prompt
-> mapNexusPromptToActionDecision(...)
-> deriveNexusStagedActionState(...)
-> deriveNexusStagedActionRenderModel(...)
-> QA-only hidden/debug observation
```

Ownership:

- `public/nexus-action-decision-mapper.js` owns `prompt` to `actionDecision`.
- `public/nexus-staged-action-state.js` owns `actionDecision` to `stagedActionState`.
- `public/nexus-staged-action-inert-renderer.js` owns `stagedActionState` to `inertRenderModel`.
- `scripts/nexus-staged-action-inert-renderer-observation-qa.js` owns hidden/debug-only QA observation of the full chain.

Planner metadata is not execution authority. selectedToolId must not directly execute. agentAction must not directly execute. missingInputs must block execution. restricted actions must not execute. provider_handoff_only must not mean execution happened. confirmationRequired must be honored.

## 3. Existing Standard User UI Surface

Current Standard User assistant behavior is already controlled:

- Low-risk prompts use preview-first cards and Review options patterns.
- High-risk prompts produce polished no-action responses.
- Hidden/debug metadata remains hidden.
- Session memory UI is not visible.
- The staged-action mapper, staged-state helper, inert renderer helper, and observation harnesses are not loaded by the Standard User page.
- No automatic modals or provider openings are introduced by the staged-action metadata chain.
- Marketplace/AgriTrade browse remains review-oriented.
- Map/location behavior remains permission-oriented.
- Health/telehealth modals remain confirmation and permission bounded.
- Calls/messages remain confirmation-gated and provider-handoff bounded.

Standard User visible behavior remains unchanged.

## 4. Runtime Integration Readiness Scorecard

| Area | Status | Rationale |
| --- | --- | --- |
| actionDecision schema stability | ready | Phase 12B and 12C define and test schema-shaped metadata. |
| mapper coverage | ready | Representative learning, jobs, marketplace, agriculture, communication, permission, and restricted prompts are covered. |
| stagedActionState derivation safety | ready | Phase 12F keeps `executionAllowed` and `providerHandoffAllowed` false. |
| inert render model safety | ready | Phase 12H returns inert render metadata only with no DOM rendering or click handlers. |
| observation QA coverage | ready | Phase 12G and 12I observe the metadata chain without runtime wiring. |
| Standard User behavior preservation | ready | Static guards keep helpers unloaded from live Standard User UI. |
| no-execution invariants | ready | QA checks no live execution, no call execution, no message execution, no camera opening, no location sharing, no transaction, and no emergency dispatch claim. |
| low-risk visibility readiness | partially_ready | Low-risk preview language exists, but a visible staged-action renderer still needs a scoped prototype plan. |
| medium-risk staging readiness | not_ready | Medium-risk UI needs review, copy, focus, cancellation, and audit validation before display. |
| high-risk confirmation readiness | not_ready | High-risk confirmation UI is not ready for staged-action renderer integration. |
| restricted-action blocking readiness | partially_ready | Blocked copy exists in model form, but browser behavior must be validated before visible display. |
| missing-input UI readiness | partially_ready | Missing-input metadata exists, but no future input collection UI has been approved. |
| provider handoff readiness | blocked | Provider handoff UI must not appear until confirmation, provider, audit, and handoff contracts are implemented. |
| audit/evidence readiness | partially_ready | Architecture exists, but runtime audit logging is not implemented. |
| browser validation readiness | not_ready | No visible staged-action renderer exists to validate yet. |
| regression QA readiness | ready | Nexus Workforce and all-safe suites cover current non-runtime posture. |

## 5. Required Preconditions Before Visible Runtime Renderer

Hard gates before any future visible renderer:

- Renderer must be inert by default.
- No execution buttons.
- No click handlers that execute.
- No provider handoff without confirmation.
- No browser permission requests.
- No calls/messages/camera/location/transactions.
- No emergency dispatch claims.
- No health workflow mutation.
- Standard User behavior must remain stable.
- Visible renderer must be gated behind explicit debug/test flag or carefully scoped low-risk path.
- QA must prove high-risk prompts do not render unsafe controls.
- QA must prove restricted prompts render blocked-only copy.
- QA must prove missing inputs do not imply execution.
- QA must prove provider_handoff_ready does not mean provider opened.
- QA must prove confirmation_required does not mean confirmation granted.
- QA must prove no visible runtime UI appears unless the future phase explicitly enables it.

## 6. Recommended Runtime Integration Shape

Future safe shape, not implemented in this phase:

- Optional file: `public/nexus-staged-action-renderer.js`
- Function: `renderNexusStagedActionPreview(...)`
- Feature flag: disabled by default
- Allowed first scope: low-risk `suggestion_preview` and `review_option` only
- No high-risk visible controls in first runtime phase
- No provider handoff controls in first runtime phase
- No permissions in first runtime phase
- No execution controls ever directly from renderer
- No navigation performed by the renderer itself
- Existing router and confirmation systems remain authoritative

## 7. Future Browser Validation Plan

When a future visible inert renderer is explicitly introduced, validate Standard User browser behavior with:

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

Validation expectations:

- Low-risk prompts may show inert preview/review copy only if enabled in a future phase.
- High-risk prompts must not show execution controls.
- No modals open automatically.
- No provider handoff opens.
- No browser permissions prompt.
- No console errors/warnings.
- No session memory UI appears.
- Existing Review options behavior remains safe.
- No navigation occurs unless the user explicitly uses existing safe review behavior.

## 8. Runtime Risk Register

| Risk | Mitigation |
| --- | --- |
| Accidental visible high-risk controls | Start with low-risk-only renderer scope and block high/restricted states. |
| Click handler reuse | Renderer must not attach click handlers; future UI must use separate reviewed handlers. |
| selectedToolId misuse | selectedToolId must not directly execute and must remain descriptive metadata. |
| agentAction misuse | agentAction must not directly execute and existing router remains authoritative. |
| provider_handoff_only misread as execution-ready | Copy must say prepared only and no provider opened. |
| confirmationRequired ignored | Render model must say explicit confirmation is required and not provided. |
| missingInputs ignored | Missing-input states must block execution and avoid collection in first renderer phase. |
| resultState completed misuse | QA must reject completed state for real-world high/restricted actions. |
| Navigation side effects | Renderer must not navigate; review navigation must stay separate and low-risk. |
| Browser permission prompts | Renderer must not call browser permission APIs. |
| Session memory leakage | Renderer must not read or display session memory until a separate consent/reset phase. |
| Marketplace transaction ambiguity | Marketplace copy must remain browse/review only with no transaction. |
| Emergency response claims | Emergency copy must avoid dispatch, provider-called, or help-is-on-the-way claims. |
| Health workflow mutation | Renderer must not create or update health records. |

## 9. Go / No-Go Recommendation

Go:

- Ready for a future low-risk-only inert visible renderer prototype after one more QA phase, if gated and disabled by default.

No-Go:

- Not ready for medium/high-risk visible staging.
- Not ready for provider handoff UI.
- Not ready for confirmation modals.
- Not ready for real execution.
- Not ready for browser permissions.
- Not ready for transaction, contact, health, emergency, or account flows.

## 10. Recommended Next Phase

Recommended next phase:

Phase 12K - Low-Risk Inert Renderer Prototype Plan

That phase should produce a plan/contract for a gated, disabled-by-default, low-risk-only inert renderer prototype. It should not implement runtime UI unless explicitly approved later.

## 11. Non-Goals

This phase does not:

- implement visible runtime UI
- load the renderer in Standard User UI
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

This phase preserves Phase 11J, 12A, 12B, 12C, 12D, 12E, 12F, 12G, 12H, and 12I behavior.

