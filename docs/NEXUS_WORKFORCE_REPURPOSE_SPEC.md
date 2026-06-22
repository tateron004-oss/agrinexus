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

## Future QA Scripts

Recommended future repurpose-specific QA:

- `scripts/nexus-workforce-branding-qa.js`
- `scripts/nexus-workforce-standard-user-qa.js`
- `scripts/nexus-workforce-routing-qa.js`
- `scripts/nexus-workforce-alias-qa.js`
- `scripts/nexus-workforce-copy-boundary-qa.js`

These scripts should verify the visible Nexus Workforce AI framing, Standard User workflow reachability, preserved agriculture aliases, clear product boundaries, and no accidental removal of existing health, learning, map, telehealth, call, music, or trade behavior.

## Developer Warning

The first implementation pass must be visible/edition-layer only.

Do not perform broad internal renames until a Nexus Tool Registry and unified agent-action schema exist. Internal renames before that point are likely to break route contracts, workflow IDs, browser storage, native bridge expectations, PWA caching, regression tests, and working demo flows.

When in doubt, add compatibility aliases and visible copy first. Preserve current runtime contracts until the registry layer can safely map old AgriNexus identifiers to the broader Nexus Workforce AI product model.
