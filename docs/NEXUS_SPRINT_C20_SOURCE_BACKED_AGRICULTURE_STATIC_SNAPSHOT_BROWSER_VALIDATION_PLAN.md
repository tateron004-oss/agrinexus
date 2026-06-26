# Nexus Sprint C20 - Source-Backed Agriculture Static Snapshot Browser Validation Plan

## Purpose

Sprint C20 defines the browser-validation plan for the Sprint C19 static source-backed agriculture visual snapshot.

This sprint remains inert. It does not wire the C19 fixture into Standard User runtime, does not load the C17 copy model, does not add CSS, does not add scripts, does not add runtime DOM creation, does not add click handlers, and does not change backend behavior.

## Starting Checkpoint

- Previous pushed sprint: Sprint C19 - Source-Backed Agriculture Static Visual Snapshot Contract
- Starting HEAD: `9b9dfa6d3f4480c8fdeb63da3015f46b8c54c87a`
- Static fixture: `test-fixtures/nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html`
- C19 contract: `docs/NEXUS_SPRINT_C19_SOURCE_BACKED_AGRICULTURE_STATIC_VISUAL_SNAPSHOT_CONTRACT.md`

## Browser Validation Scope

The C20 validation plan has two separate checks:

1. Static fixture review: open the C19 HTML fixture directly as a local file or static artifact, not as a Standard User app route.
2. Standard User absence review: launch the normal app and confirm the C19 fixture, C17 copy model, C15 readiness contract, C13 eligibility handoff, and C8 mapper remain unwired.

The static fixture review is only a visual contract review. It is not runtime activation approval.

## Static Fixture Review Procedure

Open:

`test-fixtures/nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html`

Confirm the fixture shows:

- one source-backed agriculture review article;
- six review sections;
- `Agriculture Source Review`;
- `Evidence & Verification`;
- `Verified Extension Fixture`;
- `ag-c6-extension-fixture-001`;
- `Fixture reviewed 2026-06-26`;
- `Source-backed - verify against local conditions before acting`;
- `No action has been taken.`;
- static text for `Review source details`;
- static text for `Not now`.

Confirm the fixture does not show:

- clickable buttons;
- links;
- forms;
- inputs;
- navigation controls;
- provider handoff controls;
- permission prompts;
- payment, purchase, booking, call, message, camera, location, account, health, pharmacy, diagnosis, prescription, emergency, or dispatch controls.

## Static Fixture Browser Safety Checks

The validator must document:

- browser and OS used;
- whether the fixture opened without console warnings or errors;
- whether any network request occurred;
- whether any storage write occurred;
- whether any permission prompt appeared;
- whether the fixture contains external assets;
- whether the fixture remains read-only, review-only, and non-executing.

No browser permission should be requested. No provider should open. No navigation should occur. No API should be called.

## Standard User Runtime Absence Procedure

Launch the normal Standard User build:

```powershell
node server.js
```

Open:

`http://127.0.0.1:4182/`

Use:

`Start as User`

Confirm:

- `public/index.html` does not load the C19 fixture;
- `public/app.js` does not import or reference the C19 fixture;
- `server.js` does not special-case the C19 fixture;
- Standard User startup does not load C17, C15, C13, or C8 from the C19 chain;
- no source-backed agriculture static snapshot card appears by default;
- no console warning or error appears from C19/C17/C15/C13/C8;
- no storage mutation, provider handoff, permission prompt, route change, network call, or execution occurs because of C19.

## Standard User Prompt Checks

Use these low-risk prompts:

- `Help me find agriculture training`;
- `Teach me how irrigation works`;
- `Show me farm jobs`;
- `Browse AgriTrade`;
- `I need help with crop issues`.

Expected result:

- existing Standard User behavior remains unchanged;
- no C19 static snapshot appears;
- no C17 copy-model rendering appears;
- no provider handoff, permission prompt, call, message, payment, purchase, location, camera, health, pharmacy, diagnosis, prescription, emergency, or dispatch execution occurs.

Use these excluded or high-risk prompts:

- `Nexus, call John`;
- `Send a WhatsApp message`;
- `Show my location`;
- `Open the camera`;
- `Buy seeds`;
- `Schedule an appointment`;
- `Emergency help`.

Expected result:

- no C19 static snapshot appears;
- no C17 copy-model rendering appears;
- high-risk behavior remains blocked, permission-gated, confirmation-gated, or safely bounded by existing controls;
- no provider opens automatically;
- no permission prompt fires automatically from C19.

## Runtime Mutation Restoration

If browser validation creates local runtime state, the validator must restore or document:

- any temporary DB/runtime files;
- local/session storage entries;
- browser permission settings;
- service worker/cache changes if observed;
- server processes started for validation.

The validation record must not commit runtime state, DB mutations, logs, screenshots, or generated artifacts unless a later phase explicitly asks for them.

## Required Deterministic QA

Before any future sprint uses the C19 fixture as runtime evidence, run:

- `git diff --check`;
- `node --check server.js`;
- `node --check public/app.js`;
- `node --check scripts/qa-suite.js`;
- `node scripts/nexus-sprint-c17-source-backed-agriculture-surface-copy-model-qa.js`;
- `node scripts/nexus-sprint-c18-source-backed-agriculture-visual-semantics-review-plan-qa.js`;
- `node scripts/nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot-contract-qa.js`;
- `node scripts/nexus-sprint-c20-source-backed-agriculture-static-snapshot-browser-validation-plan-qa.js`;
- `node scripts/qa-suite.js nexus-workforce`;
- `node scripts/qa-suite.js all-safe`.

## Go / No-Go Criteria

Go for future fixture browser validation:

- C19 fixture remains outside `public/`;
- C19 fixture renders read-only static review content;
- C19 fixture has no buttons, links, forms, inputs, scripts, handlers, navigation, network, storage, permission, provider, or execution behavior;
- Standard User runtime remains unwired;
- deterministic QA passes.

No-go for runtime activation:

- any fixture click path, route path, provider handoff, permission prompt, network call, storage write, or execution behavior appears;
- `public/index.html`, `public/app.js`, or `server.js` starts loading C19/C17/C15/C13/C8 without a separate runtime wiring approval sprint;
- high-risk prompts show the source-backed agriculture static snapshot;
- browser validation leaves untracked runtime state that cannot be safely restored.

## Sprint C21 Recommendation

Sprint C21 should add a structured browser-validation evidence template for recording the C20 fixture review and Standard User absence review, still without runtime wiring.
