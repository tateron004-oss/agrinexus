# Nexus Workforce AI Repurpose Spec

## Product Decision

Nexus Workforce AI is the public-facing product direction for the current AgriNexus application.

- Public-facing product name: Nexus Workforce AI
- Assistant identity: Nexus
- Edition: workforce
- Legacy/internal compatibility name: AgriNexus
- Agriculture, trade, and farm functionality remain supported as domain modules.

This repurpose broadens the platform from agriculture-first into a workforce AI assistant while preserving the current working demo/runtime build. Agriculture is retained, not deprecated.

## Brand Boundary

Do not blindly replace `AgriNexus` everywhere.

Early repurpose phases must not rename internal APIs, route IDs, workflow IDs, localStorage keys, PWA cache names, native bridge fields, QA assumptions, backend contracts, or other runtime identifiers that current behavior depends on.

`AgriTrade` should remain as a marketplace and agriculture-trade module for now. Existing farm, crop, rural health, trade, logistics, and agriculture workflows must remain reachable while Nexus Workforce AI becomes the broader visible platform frame.

The first implementation passes should add a visible product/edition layer, not a hard internal migration.

## Phase Roadmap

1. Phase 1: Repurpose Spec / Brand Boundary
2. Phase 2: Visible Standard User Rebrand
3. Phase 3: Standard User Workflow Repositioning
4. Phase 4: Assistant Copy And Aliases
5. Phase 5: Backend Product Metadata
6. Phase 6: QA And Docs Alignment
7. Phase 7: Tool Registry Centralization

## Completed Phase Alignment

### Phase 1: Repurpose Spec / Brand Boundary

Changed:

- Added this project-level boundary for repositioning AgriNexus into Nexus Workforce AI.
- Defined the public product name, assistant identity, edition, and legacy/internal compatibility name.

Intentionally not changed:

- No runtime files, route contracts, workflow IDs, storage keys, native bridge fields, or package names were renamed.
- Agriculture, farm, crop, trade, and AgriTrade behavior stayed active.

Protection:

- This document is the guardrail for later phases and is checked manually before broad repurpose work.

### Phase 2: Visible Standard User Rebrand

Changed:

- Updated visible Standard User shell copy so the public experience presents as Nexus Workforce AI with Nexus as the assistant.
- Kept AgriNexus compatibility framed instead of removed.

Intentionally not changed:

- Internal AgriNexus identifiers, backend contracts, PWA cache names, native bridge fields, and QA assumptions were not hard renamed.

Protection:

- `scripts/nexus-workforce-branding-qa.js` verifies visible Nexus Workforce AI branding, Ask Nexus copy, preserved AgriNexus compatibility identifiers, and AgriTrade presence.

### Phase 3: Standard User Workflow Repositioning

Changed:

- Reordered and reframed Standard User actions to be workforce-first: training, job pathways, field support, health access, maps/location, marketplace/AgriTrade, and assistant help.
- Kept agriculture visible as a supported domain instead of the dominant product frame.

Intentionally not changed:

- Existing button wiring, workflow IDs, APIs, and agriculture/farmer/crop/trade reachability were preserved.

Protection:

- `scripts/nexus-workforce-standard-user-qa.js` verifies worker-first order, domain coverage, retained AgriTrade and crop paths, and protected frontend/backend/native identifiers.

### Phase 4: Assistant Copy And Aliases

Changed:

- Updated assistant-facing platform explanations and capability summaries to describe Nexus Workforce AI.
- Added safe aliases such as `help me with training`, `help me find a job pathway`, `open health access`, `open marketplace`, `use location`, and field-support language.
- Kept legacy prompts such as `Explain AgriNexus` and agriculture/farmer prompts working.

Intentionally not changed:

- High-risk action confirmation, call staging, telehealth/camera handoff, music controls, learning routing, map permission behavior, and workflow modal behavior were not weakened.

Protection:

- `scripts/nexus-workforce-alias-qa.js` verifies the new aliases, legacy AgriNexus prompts, agriculture/trade compatibility, and safe call behavior.

### Phase 5: Backend Product Metadata

Changed:

- Added canonical backend product identity metadata:
  - `productName: "Nexus Workforce AI"`
  - `assistantName: "Nexus"`
  - `edition: "workforce"`
  - `legacyProductName: "AgriNexus"`
- Exposed the metadata additively through public responses.

Intentionally not changed:

- Existing response fields, auth behavior, role behavior, endpoint paths, and contract names were not renamed or removed.

Protection:

- `scripts/nexus-workforce-metadata-qa.js` verifies canonical metadata, additive public exposure, preserved protected identifiers, and AgriTrade/agriculture compatibility.

## Runtime Protection Rules

The Standard User build is the primary demo/testing build and must stay working throughout the repurpose.

Protect these areas during every phase:

- Health and telehealth routing must remain intact.
- Camera/video handoff must remain clearly local, handoff-only, and non-live unless a later approved phase implements real video infrastructure.
- Call confirmation gates must remain intact for risky outbound actions.
- Music controls must remain separate from Nexus voice mute/quiet controls.
- Learning routing must keep explicit learning/training commands out of clarification fallbacks.
- Workflow modals must keep their existing confirmation, cancel, and data-flow behavior.
- Admin/full Health modal classification must continue to use API-path precedence so health workflows stay in health mode.
- Map/location permission behavior must not be changed incidentally.
- Existing agriculture, crop, farmer, marketplace, trade, route, and logistics workflows must remain supported.

## QA Expectations

The existing safety net must continue to pass during repurpose implementation:

```powershell
git diff --check
node --check public\app.js
node --check server.js
node scripts\workflow-button-audit.js
node scripts\app-behavior-audit.js
node scripts\voice-response-regression.js
node scripts\learning-functionality-qa.js
node scripts\music-playback-control-qa.js
node scripts\telehealth-camera-discoverability-qa.js
node scripts\telehealth-video-handoff-qa.js
node scripts\call-intent-smoke.js
node scripts\companion-confirmation-gate-smoke.js
node scripts\qa-suite.js app
node scripts\qa-suite.js core
node scripts\qa-suite.js voice
node scripts\qa-suite.js all-safe
```

### Nexus Workforce QA

Run this focused repurpose QA after visible copy, alias, metadata, or Standard User workflow changes:

```powershell
node scripts\qa-suite.js nexus-workforce
npm run qa:nexus-workforce
```

The focused suite runs:

- `scripts/nexus-workforce-branding-qa.js`
- `scripts/nexus-workforce-standard-user-qa.js`
- `scripts/nexus-workforce-alias-qa.js`
- `scripts/nexus-workforce-metadata-qa.js`

Repurpose QA checklist:

- Visible product is Nexus Workforce AI.
- Assistant identity is Nexus.
- Legacy/internal compatibility name remains AgriNexus.
- Agriculture remains a supported domain.
- AgriTrade remains present.
- Standard User is worker-first.
- Product identity metadata is exposed additively.
- Protected internals were not hard renamed.
- High-risk workflows remain gated.

## Future QA Scripts

Recommended future repurpose-specific QA:

- `scripts/nexus-workforce-routing-qa.js`
- `scripts/nexus-workforce-copy-boundary-qa.js`

These future scripts should verify deeper route/copy boundaries as Phase 7 centralizes the Nexus Tool Registry. They should not replace the focused suite above until they are implemented and green.

## Developer Warning

The first implementation pass must be visible/edition-layer only.

Do not perform broad internal renames until a Nexus Tool Registry and unified agent-action schema exist. Internal renames before that point are likely to break route contracts, workflow IDs, browser storage, native bridge expectations, PWA caching, regression tests, and working demo flows.

When in doubt, add compatibility aliases and visible copy first. Preserve current runtime contracts until the registry layer can safely map old AgriNexus identifiers to the broader Nexus Workforce AI product model.
