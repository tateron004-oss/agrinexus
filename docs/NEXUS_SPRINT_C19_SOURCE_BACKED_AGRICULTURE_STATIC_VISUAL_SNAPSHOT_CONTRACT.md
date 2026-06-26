# Nexus Sprint C19 - Source-Backed Agriculture Static Visual Snapshot Contract

## Purpose

Sprint C19 adds a fixture-only static visual snapshot contract for the C17 source-backed agriculture copy model.

This sprint remains inert. It creates a test-only static HTML fixture outside `public/` and does not render DOM in Standard User runtime, does not load C17 in `public/index.html`, does not import C17 in `public/app.js`, does not add CSS, does not add scripts, does not add buttons or click handlers, and does not change backend behavior.

## Starting Checkpoint

- Previous pushed sprint: Sprint C18 - Source-Backed Agriculture Visual Semantics Review Plan
- Starting HEAD: `f3e6f60f1e498a7fab05e0558f6c5ea23e4a16da`
- C17 module: `public/nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js`
- C18 plan: `docs/NEXUS_SPRINT_C18_SOURCE_BACKED_AGRICULTURE_VISUAL_SEMANTICS_REVIEW_PLAN.md`

## Fixture Location

The C19 static fixture is:

`test-fixtures/nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html`

The fixture is intentionally outside `public/`. It must not be referenced by `public/index.html`, `public/app.js`, or `server.js`.

## Snapshot Content

The fixture may statically represent:

- `Agriculture Source Review`;
- `Evidence & Verification`;
- `Source`;
- `Type`;
- `Source contract`;
- `Verification`;
- `Freshness`;
- `Confidence`;
- `What this source supports`;
- `What Nexus inferred`;
- `Local applicability`;
- `What Nexus is not claiming`;
- `Action status`;
- `No action has been taken.`

The fixture may represent review-only control labels as static text:

- `Review source details`;
- `Not now`.

Those labels must not be buttons, links, forms, click handlers, or navigation controls.

## Snapshot Safety Attributes

The fixture must include inert metadata such as:

- `data-snapshot-mode="test-only"`;
- `data-runtime-loaded="false"`;
- `data-render-dom-allowed="false"`;
- `data-execution-allowed="false"`;
- `data-provider-handoff="false"`;
- `data-permission-request="false"`;
- `data-payment-allowed="false"`;
- `data-location-request="false"`;
- `data-camera-request="false"`;
- `data-medical-action="false"`;
- `data-emergency-dispatch="false"`.

## What The Fixture Must Not Include

The fixture must not include:

- `<script>` tags;
- inline event attributes;
- buttons;
- links;
- forms;
- inputs;
- executable script;
- external assets;
- provider handoff affordances;
- permission prompts;
- execution controls;
- payment, purchase, emergency, booking, call, message, camera, location, account mutation, health mutation, prescription, pharmacy, diagnosis, or dispatch affordances.

## Standard User Boundary

C19 must not be wired into:

- `public/index.html`;
- `public/app.js`;
- `server.js`;
- Standard User startup;
- controlled renderer runtime;
- planner;
- policy engine;
- provider registry;
- native bridge;
- confirmation paths.

It must not add script tags, dynamic imports, DOM creation in runtime, CSS, images, icons, event handlers, click handlers, buttons, links, forms, route hooks, modal hooks, permission prompts, network calls, storage reads/writes, backend writes, provider handoff, pending actions, or execution behavior.

## Sprint C19 QA Expectations

The C19 QA guard verifies:

- this contract exists;
- the static snapshot fixture exists under `test-fixtures/`;
- C18 recommends this sprint;
- the fixture contains the required source-backed agriculture review text;
- the fixture contains inert safety attributes;
- the fixture contains no scripts, handlers, buttons, links, forms, inputs, external assets, navigation, provider, permission, payment, purchase, call, message, camera, location, account, health, medical, pharmacy, diagnosis, or dispatch affordances;
- Standard User runtime files do not load C19, C17, C15, C13, or C8;
- package alias and safe-suite wiring are present.

## Sprint C20 Recommendation

Sprint C20 should add a browser-validation plan for manually opening the C19 static fixture while also confirming the Standard User runtime remains unwired.
