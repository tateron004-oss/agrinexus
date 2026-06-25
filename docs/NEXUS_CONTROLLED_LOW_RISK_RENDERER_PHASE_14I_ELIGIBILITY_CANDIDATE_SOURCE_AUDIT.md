# Phase 14I - Controlled Low-Risk Renderer Eligibility Candidate Source Audit

## 1. Purpose And Current Checkpoint

Phase 14I audits where Nexus currently produces, transforms, observes, displays, or suppresses low-risk suggestion and intent metadata before any future runtime integration point is chosen for controlled low-risk renderer candidate payloads.

Current checkpoint:

- Branch: `main`
- Remote checkpoint: `0e083b5b42354eb8c295acb02c0f392996b9c94a`
- Latest completed phase: Phase 14H, `Add low-risk renderer adapter chain harness phase 14H`

This phase is audit, documentation, and QA only. It does not wire the Phase 14G eligibility adapter, Phase 14D loader, or Phase 14A text-only renderer into Standard User runtime.

## 2. Source Files Audited

Primary runtime files reviewed:

- `public/app.js`
- `public/index.html`
- `server.js`
- `public/nexus-intent-classifier.js`
- `public/nexus-action-decision-mapper.js`
- `public/nexus-planner.js`
- `public/nexus-policy-engine.js`
- `public/nexus-tool-registry.js`
- `public/nexus-staged-action-state.js`
- `public/nexus-staged-action-inert-renderer.js`
- `public/nexus-controlled-low-risk-renderer-eligibility-adapter.js`
- `public/nexus-controlled-low-risk-text-only-renderer-loader.js`
- `public/nexus-controlled-low-risk-text-only-renderer.js`

Primary QA and documentation families reviewed:

- `scripts/nexus-intent-classifier-qa.js`
- `scripts/nexus-selected-tool-id-alignment-qa.js`
- `scripts/nexus-low-risk-suggestion-builder-qa.js`
- `scripts/nexus-low-risk-suggestion-observation-qa.js`
- `scripts/nexus-level-one-suggestion-label-qa.js`
- `scripts/nexus-controlled-action-metadata-schema-qa.js`
- `scripts/nexus-controlled-action-preview-readiness-qa.js`
- `scripts/nexus-controlled-action-preview-ui-qa.js`
- `scripts/nexus-controlled-action-preview-clear-qa.js`
- `scripts/nexus-action-decision-observation-qa.js`
- `scripts/nexus-planner-qa.js`
- `scripts/nexus-policy-engine-qa.js`
- `scripts/nexus-plan-observation-qa.js`
- `scripts/nexus-controlled-low-risk-renderer-phase-14g-eligibility-adapter-stub-qa.js`
- `scripts/nexus-controlled-low-risk-renderer-phase-14h-adapter-chain-test-harness-qa.js`
- Phase 8 through Phase 14 controlled-action and renderer docs under `docs/`

## 3. Existing Low-Risk Metadata Sources Found

The strongest current low-risk source candidates are:

1. `public/nexus-intent-classifier.js`
   - Produces low-risk classifications with `selectedToolId` values:
     - `workforce.training`
     - `learning.start`
     - `workforce.job_pathways`
     - `marketplace.agritrade`
     - `workforce.field_support`
     - `agriculture.help`
   - Also assigns `risk: "low"` and `actionType: "preview_or_route"` for eligible learning, jobs, marketplace browse, field support, and agriculture help prompts.

2. `public/app.js`
   - `localLevelOneSuggestionForSimpleUserIntent(...)` converts explicit Standard User prompts and classifier output into visible Level 1 suggestion metadata.
   - `paintLocalLevelOneSuggestionForSimpleUserIntent(...)` stores the suggestion, builds controlled-action metadata, builds preview readiness, and paints existing preview surfaces.
   - `buildControlledActionMetadataFromSuggestion(...)` converts Level 1 metadata into non-executing controlled-action metadata.
   - `buildControlledActionPreviewReadinessFromMetadata(...)` converts metadata into preview-only readiness.
   - `buildControlledActionConfirmationReadinessFromPreview(...)` and `buildControlledActionNavigationReadinessFromConfirmation(...)` prepare existing low-risk review/navigation readiness while preserving the current non-executing boundary.

3. `public/nexus-action-decision-mapper.js`
   - Produces schema-shaped `actionDecision` metadata for representative prompts.
   - Low-risk examples map to `selectedToolId` values aligned with the classifier.
   - High-risk, sensitive, and restricted prompts remain staged, permission-gated, or blocked.

4. `public/nexus-planner.js`
   - Consumes intent, tool registry, and policy output to create non-executing plans.
   - Low-risk plans are `preview_only` or informational. Planner output remains advisory and cannot execute.

5. `public/nexus-staged-action-state.js` and `public/nexus-staged-action-inert-renderer.js`
   - Convert action decisions into inert state/render metadata for QA and future design planning.
   - These paths remain hidden/debug-only/QA-only and are not Standard User execution authority.

## 4. Existing Suppressed And Debug-Only Observation Paths Found

Existing observation/debug-only paths include:

- `latestObservedAgentActionMetadata` and `observedAgentActionMetadataLog` in `public/app.js`.
- Level 1 suggestion labels produced by `buildLowRiskAgentActionSuggestion(...)`; these are visible category labels only and not action controls.
- Low-risk suggestion builder and observation QA under:
  - `scripts/nexus-low-risk-suggestion-builder-qa.js`
  - `scripts/nexus-low-risk-suggestion-observation-qa.js`
  - `scripts/nexus-agent-action-frontend-observation-qa.js`
- Action decision, staged-action, policy, planner, and plan observation QA under:
  - `scripts/nexus-action-decision-observation-qa.js`
  - `scripts/nexus-staged-action-ui-observation-qa.js`
  - `scripts/nexus-staged-action-inert-renderer-observation-qa.js`
  - `scripts/nexus-policy-observation-qa.js`
  - `scripts/nexus-plan-observation-qa.js`
- Phase 12 through Phase 14 low-risk renderer harnesses, which remain local-safe, fixture-only, or runtime-unwired unless explicitly run by QA.

These paths are useful for future candidate selection because they already preserve `selectedToolId`, risk, domain, user-visible labels, and no-execution safety notes without making metadata authoritative.

## 5. Existing High-Risk And Excluded Action Boundaries Found

Existing high-risk exclusions and permission boundaries are present in multiple layers:

- Intent classifier blocks or escalates:
  - call
  - message
  - WhatsApp
  - Telegram
  - SMS/email/contact
  - location/map permission
  - camera/video/telehealth/health
  - payment/checkout
  - buy/sell/order
  - account/login/identity
  - emergency/dispatch
- `localLevelOneSuggestionForSimpleUserIntent(...)` rejects Standard User metadata for health, telehealth, video, camera, call, provider, location, sell, buy, payment, login, account, verify, and identity prompts.
- Controlled preview readiness rejects restricted words such as health, telehealth, video, camera, call, provider, location, payment, identity, buy, sell, order, message, dispatch, and schedule.
- Controlled navigation readiness permits only `learning`, `workforce`, and `trade` sections and blocks sensitive/transactional terms.
- Phase 14G eligibility adapter rejects blocked terms and forbidden authority fields before producing any renderer candidate payload.

These boundaries mean future renderer candidate work should only consume already-filtered low-risk metadata and must still re-check risk and blocked terms before rendering.

## 6. Candidate Integration Points Considered

Candidate integration points considered:

1. Directly from `classifyNexusIntentForMetadata(...)`
   - Advantage: early access to `selectedToolId`, risk, domain, and category.
   - Rejected for immediate wiring because raw classifier output is too early and still upstream of existing app-level suppression/preview checks.

2. Directly from `localLevelOneSuggestionForSimpleUserIntent(...)`
   - Advantage: already Standard User oriented and low-risk scoped.
   - Rejected for first wiring because it returns category-label metadata, not a complete render candidate, and is still close to visible label painting.

3. After `buildControlledActionMetadataFromSuggestion(...)`
   - Advantage: stable `selectedToolId`, actionId, risk, and metadata-only boundary.
   - Possible future candidate, but still needs a renderer-specific adapter that preserves preview-only semantics.

4. After `buildControlledActionPreviewReadinessFromMetadata(...)`
   - Advantage: best current future integration point because it is already filtered for user-visible preview eligibility, no permissions, no missing inputs, non-sensitive text, and preview-only boundaries.
   - Recommended future point for deriving candidate metadata, with a final Phase 14G adapter check before any renderer is called.

5. From `public/nexus-action-decision-mapper.js` or `public/nexus-planner.js`
   - Advantage: clean architecture shape for future agentic planning.
   - Rejected for near-term Standard User wiring because those layers are currently observation/advisory and should not become visible runtime authority.

6. From server-side assistant responses
   - Rejected. Server responses are not the right place to activate a client renderer because this would blur backend contracts and visible UI policy.

## 7. Recommended Future Integration Point

The recommended future integration point is after `buildControlledActionPreviewReadinessFromMetadata(...)` accepts a preview, but before existing `paintControlledActionPreview(...)` renders or replaces any visible low-risk preview.

Future safe chain should be:

1. Standard User prompt is routed normally.
2. Existing command routing creates `visibleLevelOneAgentActionSuggestion`.
3. Existing metadata builder creates controlled-action metadata.
4. Existing preview-readiness builder confirms a low-risk, no-permission, no-missing-input, preview-only readiness object.
5. A future candidate builder converts that readiness object into Phase 14G adapter candidate input.
6. Phase 14G adapter re-checks low-risk, preview-only, blocked terms, and forbidden authority fields.
7. Phase 14D loader remains strict-flag gated.
8. Phase 14A renderer remains text-only and non-executing.

This point is recommended because it is downstream of current classifier and suppression logic but upstream of any possible renderer display.

## 8. Risks And Why Unsafe Points Were Rejected

Unsafe points rejected:

- Raw intent parsing: too broad, before high-risk terms are fully suppressed.
- Server responses: risks turning backend content into UI authority.
- Planner/actionDecision observation: intentionally non-authoritative and debug-only.
- Hidden renderer mount at startup: mount presence is not a signal to render.
- Button click handlers: future rendering must not add execution buttons or click handlers in this phase family.
- Provider, native bridge, call, message, payment, camera, location, telehealth, account, or emergency paths: all are outside low-risk renderer scope.

The main risk is accidentally treating `selectedToolId` or low-risk labels as execution authority. They must remain descriptive candidate metadata only.

## 9. Required Future Safety Gates Before Wiring

Before any future wiring:

- Add a candidate builder QA that proves only accepted preview-readiness objects can become adapter candidates.
- Prove the adapter remains off unless `enableControlledLowRiskRendererEligibilityAdapter === true`.
- Prove the loader remains off unless both `enableControlledLowRiskRendererVisibleUi === true` and `enableControlledLowRiskRendererLoader === true`.
- Prove Standard User startup keeps all three flags false by default.
- Browser-validate low-risk prompts with the flags off.
- Browser-validate excluded/high-risk prompts with the flags off.
- Add a flag-on harness validation that does not use Standard User production flow.
- Confirm no new script tags, imports, buttons, links, forms, click handlers, provider handoff, permission prompts, storage writes, fetch/network calls, navigation, or execution behavior.

## 10. Runtime Behavior

No runtime behavior changed in Phase 14I.

The Standard User build remains unwired:

- `public/index.html` does not script-load the adapter, loader, or renderer.
- `public/app.js` does not import or reference the Phase 14G adapter, Phase 14D loader, or Phase 14A renderer.
- `server.js` does not inject or special-case the adapter, loader, or renderer.
- The hidden mount remains present, hidden, empty, and default-off.

## 11. QA Commands

Phase 14I validation includes:

- `git diff --check`
- `node --check server.js`
- `node --check public/app.js`
- `node --check public/nexus-controlled-low-risk-text-only-renderer.js`
- `node --check public/nexus-controlled-low-risk-text-only-renderer-loader.js`
- `node --check public/nexus-controlled-low-risk-renderer-eligibility-adapter.js`
- `node --check scripts/qa-suite.js`
- `node --check scripts/nexus-controlled-low-risk-renderer-phase-14i-eligibility-candidate-source-audit-qa.js`
- Phase 14A through Phase 14I direct QA scripts
- Phase 14A through Phase 14I npm QA aliases
- `node scripts/qa-suite.js all-safe`
- `node scripts/qa-suite.js nexus-workforce`

## 12. Safety Conclusion

Phase 14I identifies the safest future candidate source as the existing controlled-action preview readiness layer, after current low-risk filtering and before any future text-only renderer call.

The Standard User build still does not load, show, or activate the adapter, loader, or renderer.
