# Nexus Sprint C22 - Source-Backed Agriculture Standard User Runtime Absence Contract

## Purpose

Sprint C22 defines the Standard User runtime absence contract for the C19 static snapshot and the C17/C15/C13/C8 source-backed agriculture preparation chain.

This sprint remains inert. It does not perform runtime wiring, does not load the C19 fixture, does not load the C17 copy model, does not add a runtime feature flag, does not add visible UI, does not add DOM rendering, does not add scripts, does not add event handlers, and does not change backend behavior.

## Starting Checkpoint

- Previous pushed sprint: Sprint C21 - Source-Backed Agriculture Static Snapshot Browser Validation Evidence Template
- Starting HEAD: `1b5e1401e0f6e6586916804a40f9f3b76070742e`
- Evidence template: `docs/NEXUS_SPRINT_C21_SOURCE_BACKED_AGRICULTURE_STATIC_SNAPSHOT_BROWSER_VALIDATION_EVIDENCE_TEMPLATE.md`
- Browser validation plan: `docs/NEXUS_SPRINT_C20_SOURCE_BACKED_AGRICULTURE_STATIC_SNAPSHOT_BROWSER_VALIDATION_PLAN.md`
- Static fixture: `test-fixtures/nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html`

## Protected Non-Loading Boundary

Until a future approved runtime wiring sprint explicitly changes the boundary, these artifacts must remain absent from Standard User runtime loading:

- `test-fixtures/nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html`;
- `public/nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js`;
- `public/nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js`;
- `public/nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js`;
- `public/nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js`.

The absence boundary applies to:

- `public/index.html`;
- `public/app.js`;
- `server.js`;
- Standard User startup;
- voice shell startup;
- planner/policy/provider/native bridge paths;
- workflow modal paths;
- map/location paths;
- camera/telehealth paths;
- marketplace/payment paths;
- call/message/contact paths;
- health/pharmacy/emergency paths.

## Required Runtime Absence Assertions

The current Standard User runtime must not:

- include a script tag for the C19 fixture or C17/C15/C13/C8 chain;
- use `import`, `require`, or dynamic `import()` for the C19 fixture or C17/C15/C13/C8 chain;
- create runtime DOM from the C19 fixture;
- create a source-backed agriculture static snapshot card;
- expose C17 source-backed copy by default;
- add route hooks for the C19 fixture;
- add modal hooks for the C19 fixture;
- add click handlers or controls for C19/C17;
- add provider handoff, permission, call, message, payment, purchase, location, camera, health, pharmacy, diagnosis, prescription, appointment, emergency, or dispatch behavior from C19/C17/C15/C13/C8.

## Allowed Current State

The current repository may retain:

- the C8 mapper contract as an inert public module;
- the C13 eligibility handoff contract as an inert public module;
- the C15 surface readiness contract as an inert public module;
- the C17 copy model as an inert public module;
- the C19 static fixture under `test-fixtures/`;
- C20 browser validation plan documentation;
- C21 browser validation evidence template documentation;
- deterministic QA scripts and package aliases.

Those artifacts are allowed because they do not grant Standard User runtime authority and are not loaded by the active app.

## Standard User Expected Behavior

When the normal Standard User build starts:

```powershell
node server.js
```

and the user opens:

`http://127.0.0.1:4182/`

then selects:

`Start as User`

the app should not show the C19 static snapshot, should not show C17 source-backed copy, and should not emit C19/C17/C15/C13/C8 console warnings or errors.

Existing low-risk prompts must continue to follow existing behavior without C19/C17 rendering:

- `Help me find agriculture training`;
- `Teach me how irrigation works`;
- `Show me farm jobs`;
- `Browse AgriTrade`;
- `I need help with crop issues`.

Excluded/high-risk prompts must continue to avoid C19/C17 rendering:

- `Nexus, call John`;
- `Send a WhatsApp message`;
- `Show my location`;
- `Open the camera`;
- `Buy seeds`;
- `Schedule an appointment`;
- `Emergency help`.

## What A Future Runtime Wiring Sprint Must Provide

Before this absence contract can be intentionally relaxed, a future runtime wiring sprint must provide:

- explicit product approval for runtime-visible source-backed agriculture rendering;
- a default-off or narrowly-scoped activation gate, if appropriate;
- deterministic QA that proves only eligible low-risk agriculture prompts can render;
- browser validation using the C20 plan and C21 evidence template;
- console, network, storage, and permission checks;
- no-execution proof for provider, call, message, payment, marketplace transaction, location, camera, health, pharmacy, diagnosis, prescription, appointment, emergency, and dispatch behavior;
- runtime mutation restoration instructions.

## Sprint C22 QA Expectations

The C22 QA guard verifies:

- this contract exists;
- C21 recommends this sprint;
- C19, C20, and C21 artifacts remain present;
- `public/index.html`, `public/app.js`, and `server.js` do not load the C19 fixture or C17/C15/C13/C8 chain;
- no script, import, route, modal, provider, permission, navigation, storage, network, or execution authority is introduced by this sprint;
- package alias and safe-suite wiring are present.

## Sprint C23 Recommendation

Sprint C23 should add a future runtime-wiring preflight checklist for what must be reviewed before any approved sprint intentionally relaxes the C22 absence contract.
