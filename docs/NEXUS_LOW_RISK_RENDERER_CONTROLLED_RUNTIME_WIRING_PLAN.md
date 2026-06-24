# Nexus Low-Risk Renderer Controlled Runtime Wiring Plan

Phase: 12Q - Low-Risk Renderer Controlled Runtime Wiring Plan

Status: planning only

Latest validated baseline: `2ae7c948aa5ef30e488ff0758bdaca3a8559d66b`

## 1. Purpose and Scope

This document defines the Low-Risk Renderer Controlled Runtime Wiring Plan for a future phase. It plans the safest possible path for eventually introducing the dormant low-risk inert renderer into the Standard User runtime behind an explicit local/test-only flag.

This phase does not implement runtime wiring. It does not load the renderer from `public/index.html`, does not call the renderer from `public/app.js`, does not add DOM rendering, does not add visible runtime UI, does not add click handlers that execute, and does not change Standard User visible behavior.

The plan is intentionally conservative because the renderer sits near future agentic behavior. The correct near-term posture remains: metadata can describe what Nexus might review, but metadata must not become execution authority.

## 2. Current Safety Posture

The current safety posture is:

- `public/nexus-low-risk-inert-renderer.js` exists as a dormant module.
- The renderer creates metadata-only inert card models in local/test-safe QA harnesses.
- `public/index.html` does not load `public/nexus-low-risk-inert-renderer.js`.
- `public/app.js` does not load, call, attach, or render the low-risk inert renderer.
- No visible runtime UI appears by default.
- No DOM rendering occurs from the Phase 12O renderer in Standard User mode.
- No execution pathway exists from the renderer.
- No provider handoff pathway exists from the renderer.
- No browser permissions pathway exists from the renderer.
- No navigation pathway exists from the renderer.
- Phase 12P browser validation passed with the flag off/default.

The flag posture remains:

- disabled by default
- flag disabled means render nothing
- no visible runtime UI when flag off
- no DOM rendering when flag off
- Standard User visible behavior remains unchanged when flag off
- no live execution

The renderer model itself continues to report:

- `executionAllowed: false`
- `providerHandoffAllowed: false`
- `permissionRequestAllowed: false`
- `navigationAllowed: false`
- `domRenderingAllowed: false`
- `clickHandlersAllowed: false`
- `visibleRuntimeUi: false`
- `metadataOnly: true`

## 3. Relationship to Phases 12L through 12P

Phase 12L added the disabled-by-default flag guard:

- `NEXUS_LOW_RISK_INERT_RENDERER_ENABLED=false`
- the flag cannot enable without explicit local/test-safe context
- flag enabled alone is not enough

Phase 12M added the eligibility guard:

- eligibility false means render nothing
- only low risk only prompt families can become eligible
- communications, location, camera, health, telehealth, emergency, provider handoff, marketplace transaction, purchase, seller contact, browser permission, form submission, and job application submission are excluded

Phase 12N proved flag-off regression safety:

- flag-off representative low-risk chains render nothing
- flag-off excluded prompt chains render nothing
- Standard User runtime does not load the flag, eligibility guard, or renderer modules

Phase 12O added the dormant metadata-only renderer prototype:

- `public/nexus-low-risk-inert-renderer.js`
- `buildNexusLowRiskInertRendererPrototype(...)`
- `renderNexusLowRiskInertPreview(...)`
- safe local/test flag-on fixtures produce inert metadata-only card models
- excluded prompts and unsafe render model fields remain inactive

Phase 12P browser-validated Standard User flag-off behavior:

- standard `node server.js` build loaded normally
- Standard User path showed no renderer card
- low-risk prompts remained preview/review-only
- excluded and high-risk prompts did not auto-execute or expose renderer/debug metadata
- Review options remained safe
- browser dev logs showed no warning/error entries

## 4. Proposed Controlled Runtime Wiring Strategy

A future implementation may consider controlled runtime wiring only if all existing safety gates remain green. The strategy must be gated, local/test-only, and non-executing.

Future controlled runtime wiring must require:

- explicit local/test-only feature flag
- disabled by default
- no production/default activation
- no visible runtime UI when flag off
- no DOM rendering when flag off
- flag disabled means render nothing
- flag enabled alone is not enough
- eligibility guard must pass
- eligibility false means render nothing
- low risk only
- `suggestion_only` or `navigation_only` execution boundary only
- `suggestion_preview`, `review_option`, or `informational_response` UI state only
- no medium risk rendering
- no high risk rendering
- no restricted risk rendering
- no execution authority from planner metadata
- no direct execution from `selectedToolId`
- no direct execution from `agentAction`
- missingInputs must block execution
- confirmationRequired must be honored
- restricted actions must not execute
- `provider_handoff_only` must not mean execution happened

Planner metadata is not execution authority. `selectedToolId` must not directly execute. `agentAction` must not directly execute. The renderer may only consume sanitized inert display data after previous metadata layers have already concluded that the prompt is low-risk, allowed, non-executing, and safe to preview.

Required future implementation language: planner metadata is not execution authority; selectedToolId must not directly execute; agentAction must not directly execute; missingInputs must block execution; restricted actions must not execute; provider_handoff_only must not mean execution happened; confirmationRequired must be honored.

## 5. Proposed Runtime Placement

The safest future insertion point is not app startup and not raw prompt parsing. It is after the existing assistant response path has already produced normal Standard User output and after the action-decision chain has been derived.

Current app areas reviewed:

- assistant response rendering around voice/caption status
- controlled action preview rendering
- Review options prototype rendering
- backend `runBackendAgentCommand(...)` and utility command response observation
- low-risk suggestion metadata observation
- existing Standard User Ask Nexus panel

A future inert renderer could be called only after this chain:

- the normal assistant response has already been generated
- low-risk selected tool metadata is observed
- action decision metadata is derived or observed
- staged action state is derived
- inert render model is derived
- flag and eligibility checks pass

The renderer must not run:

- during app startup
- from raw prompt text alone
- from `selectedToolId` alone
- from `agentAction` alone
- from planner metadata alone
- from session memory alone
- from route changes alone
- from module button clicks alone
- from provider handoff metadata
- from confirmation metadata

The future call site should be downstream of existing preview/review copy, not a replacement for it. If the renderer fails closed, Standard User behavior should remain identical to Phase 12P.

## 6. Required Future Runtime Gate Sequence

The required future gate order is:

1. User prompt enters normal assistant flow.
2. Existing Standard User response is generated.
3. Action decision metadata is derived or observed.
4. Staged action state is derived.
5. Inert render model is derived.
6. Low-risk renderer flag is checked.
7. Eligibility guard is checked.
8. Low-risk renderer receives only sanitized inert display data.
9. Renderer returns inert display model or DOM-safe fragment.
10. UI inserts inert preview only if all gates pass.
11. No execution, permission, provider, navigation, or modal path is exposed.

Failure at any step must render nothing and leave the existing Standard User response intact.

## 7. Eligible Rendering Scope

Future eligible rendering scope is limited to:

- learning
- jobs
- marketplace browse/review only
- agriculture support review only
- low risk only
- `suggestion_only`
- `navigation_only`
- `suggestion_preview`
- `review_option`
- `informational_response`

Eligible rendering may only communicate review, education, or informational next steps. It must not create a real-world action.

## 8. Excluded Rendering Scope

Future controlled wiring must exclude:

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
- account changes
- payment
- medium risk
- high risk
- restricted risk

Excluded prompts must render nothing, even if the flag is enabled in a local/test-safe context.

## 9. Inert UI Rules for Future Wiring

Any future visible inert UI must follow these rules:

- no click handlers that execute
- no actionable buttons
- optional disabled controls only
- no misleading completion copy
- must include "No action has been taken."
- must include "Review only."
- must label low-risk status clearly
- must not say sent
- must not say called
- must not say purchased
- must not say paid
- must not say dispatched
- must not say completed
- must not create a false sense of real-world action
- must not look like a permission badge
- must not look like a confirmed action
- must not imply a provider, buyer, seller, clinician, recruiter, emergency responder, or payment processor has been contacted

The UI language should reinforce that the card is informational and non-authoritative.

## 10. Runtime Non-Goals

Future controlled wiring still must not:

- enable live execution
- enable medium/high-risk staging
- add provider adapters
- add provider handoff UI
- add confirmation modals
- request permissions
- navigate automatically
- place calls
- send messages
- open camera
- share location
- buy/sell/pay
- submit forms
- mutate health workflows
- claim emergency dispatch

This phase and the next implementation phase are not ready for real execution.

## 11. Required QA Before Any Future Wiring

Before any future runtime wiring, all of these must be true:

- all existing static QA green
- `node scripts/qa-suite.js all-safe` green
- browser validation flag-off green
- renderer flag-off regression green
- eligibility guard green
- excluded prompt regression green
- no console errors
- no default runtime activation
- no unsafe API usage
- no app startup rendering
- no `public/index.html` script loading unless explicitly approved in a later phase
- no app-level call to `renderNexusLowRiskInertPreview(...)` unless explicitly approved in a later phase
- no unsafe fallback path if the renderer module is missing

Future QA must cover at minimum:

- flag off: no visible runtime UI and no DOM rendering
- flag on local/test only: eligible low-risk prompts show inert display only
- flag on excluded prompts: render nothing
- low-risk rendering does not add execution controls
- low-risk rendering does not add provider/permission/navigation behavior
- Standard User default remains unchanged
- console remains clean
- high-risk, restricted, permission, provider handoff, contact, call, message, location, camera, marketplace transaction, health, telehealth, payment, account, and emergency prompts render nothing

## 12. Future Implementation Acceptance Criteria

A future implementation can be accepted only if it satisfies all of the following:

- flag off: no visible runtime UI
- flag off: no DOM rendering
- flag disabled means render nothing
- flag enabled alone is not enough
- eligibility false means render nothing
- flag on local/test only: eligible low-risk prompts show inert display only
- flag on excluded prompts: render nothing
- no execution controls
- no provider handoff
- no browser permissions
- no navigation
- no call execution
- no message execution
- no camera opening
- no location sharing
- no transaction
- no emergency dispatch claim
- no provider, payment, health, telehealth, account, marketplace transaction, or emergency side effect
- Standard User default remains unchanged
- console remains clean
- all existing Nexus Workforce, renderer, and all-safe QA remains green

## 13. Phase 12R Recommendation

Recommended next phase:

Phase 12R - Controlled Runtime Wiring Static QA Scaffold

This is safer than moving directly into runtime wiring. Phase 12R should add a static QA scaffold that encodes this plan before any `public/app.js` or `public/index.html` wiring is allowed. It should prove that any future wiring must remain disabled by default, low-risk-only, eligibility-gated, non-executing, and invisible when the flag is off.

Phase 12R should still avoid visible UI and runtime behavior changes unless explicitly approved after the QA scaffold is green.

## 14. Audit Summary

Files and patterns reviewed for this plan:

- `public/nexus-low-risk-inert-renderer.js`
- `public/nexus-low-risk-inert-renderer-flag.js`
- `public/nexus-low-risk-inert-renderer-eligibility.js`
- `docs/NEXUS_LOW_RISK_INERT_RENDERER_PROTOTYPE_IMPLEMENTATION.md`
- `docs/NEXUS_LOW_RISK_RENDERER_BROWSER_VALIDATION.md`
- `scripts/nexus-low-risk-inert-renderer-prototype-implementation-qa.js`
- `public/nexus-action-decision-mapper.js`
- `public/nexus-staged-action-state.js`
- `public/nexus-staged-action-inert-renderer.js`
- `public/app.js`
- `public/index.html`
- `public/nexus-session-memory.js`
- `server.js`
- `package.json`
- `scripts/qa-suite.js`
- app config and script loading patterns
- assistant message and caption rendering patterns
- controlled action preview and Review options behavior
- confirmation, provider handoff, call/contact, map/location, marketplace, health, telehealth, session memory, policy, planner, and Standard User safety boundaries

The audit supports a conservative plan: do not wire runtime yet. First encode the controlled runtime wiring requirements in QA, then revisit runtime wiring in a later phase.
