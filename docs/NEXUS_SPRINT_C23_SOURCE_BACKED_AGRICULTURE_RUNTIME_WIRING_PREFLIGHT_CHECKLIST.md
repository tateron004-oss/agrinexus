# Nexus Sprint C23 - Source-Backed Agriculture Runtime Wiring Preflight Checklist

## Purpose

Sprint C23 defines the preflight checklist that must be completed before any future approved sprint may intentionally relax the Sprint C22 Standard User runtime absence contract.

This sprint remains inert. It does not wire C19/C17/C15/C13/C8 into Standard User runtime, does not add a feature flag, does not add visible UI, does not add DOM rendering, does not add event handlers, does not add routes, and does not change backend behavior.

## Starting Checkpoint

- Previous pushed sprint: Sprint C22 - Source-Backed Agriculture Standard User Runtime Absence Contract
- Starting HEAD: `1a46d00a2b8c87dcb9b19bca051585fee60a7086`
- Runtime absence contract: `docs/NEXUS_SPRINT_C22_SOURCE_BACKED_AGRICULTURE_STANDARD_USER_RUNTIME_ABSENCE_CONTRACT.md`
- Evidence template: `docs/NEXUS_SPRINT_C21_SOURCE_BACKED_AGRICULTURE_STATIC_SNAPSHOT_BROWSER_VALIDATION_EVIDENCE_TEMPLATE.md`
- Browser validation plan: `docs/NEXUS_SPRINT_C20_SOURCE_BACKED_AGRICULTURE_STATIC_SNAPSHOT_BROWSER_VALIDATION_PLAN.md`

## Preflight Decision

Before any runtime wiring begins, the implementer must record:

- product approval for runtime-visible source-backed agriculture support;
- intended runtime surface;
- intended activation mechanism;
- intended eligible prompt families;
- intended excluded prompt families;
- source-backed answer model used;
- citation/freshness/confidence display strategy;
- no-execution safety strategy;
- rollback plan;
- browser validation owner.

If any item is unknown, the future runtime wiring sprint must stop before code changes.

## Required Technical Review

Review these files before any runtime wiring:

- `public/index.html`;
- `public/app.js`;
- `server.js`;
- `public/nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js`;
- `public/nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js`;
- `public/nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js`;
- `public/nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js`;
- `test-fixtures/nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html`;
- `scripts/qa-suite.js`;
- `package.json`.

The review must identify the smallest possible wiring path and must avoid broad refactors.

## Required Safety Review

The future runtime wiring sprint must prove:

- C22 absence is intentionally relaxed only for approved low-risk agriculture prompts;
- C19 static fixture remains test-only and is not served as a runtime app route;
- C17 copy model receives only eligible source-backed agriculture data;
- C15 surface readiness remains the visible-surface gate;
- C13 eligibility handoff remains the eligibility gate;
- C8 mapper remains the source-backed visible-preview metadata gate;
- high-risk and excluded prompts cannot render the source-backed agriculture surface;
- no provider handoff, call, message, payment, purchase, location, camera, health, pharmacy, diagnosis, prescription, appointment, emergency, or dispatch execution is introduced.

## Required UX Review

The future runtime wiring sprint must define:

- visible source title;
- source type;
- verification state;
- freshness label;
- confidence label;
- evidence summary;
- local applicability copy;
- limitation copy;
- action status copy;
- review-only control copy;
- cancellation or dismissal copy.

The UI must avoid implying:

- the information is medical advice;
- Nexus has contacted a provider;
- Nexus has executed an action;
- Nexus has verified local field conditions;
- Nexus has made a purchase, sale, payment, call, message, appointment, prescription, diagnosis, emergency dispatch, or location/camera action.

## Required QA Before Runtime Wiring

Run and record:

- `git diff --check`;
- `node --check server.js`;
- `node --check public/app.js`;
- `node --check scripts/qa-suite.js`;
- `node scripts/nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper-qa.js`;
- `node scripts/nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract-qa.js`;
- `node scripts/nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract-qa.js`;
- `node scripts/nexus-sprint-c17-source-backed-agriculture-surface-copy-model-qa.js`;
- `node scripts/nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot-contract-qa.js`;
- `node scripts/nexus-sprint-c20-source-backed-agriculture-static-snapshot-browser-validation-plan-qa.js`;
- `node scripts/nexus-sprint-c21-source-backed-agriculture-static-snapshot-browser-validation-evidence-template-qa.js`;
- `node scripts/nexus-sprint-c22-source-backed-agriculture-standard-user-runtime-absence-contract-qa.js`;
- `node scripts/nexus-sprint-c23-source-backed-agriculture-runtime-wiring-preflight-checklist-qa.js`;
- `node scripts/qa-suite.js nexus-workforce`;
- `node scripts/qa-suite.js all-safe`.

## Required Browser Validation Before Runtime Wiring Commit

Any future runtime-visible wiring sprint must complete browser validation using:

- C20 browser validation plan;
- C21 evidence template;
- normal `node server.js` startup;
- normal `http://127.0.0.1:4182/` URL;
- normal `Start as User` path.

The validator must confirm:

- eligible low-risk agriculture prompts render only the approved source-backed surface;
- excluded and high-risk prompts do not render the surface;
- source/citation/freshness/confidence/limitations remain visible;
- no hidden debug metadata is exposed;
- no provider handoff, permission prompt, external navigation, storage write, unexpected network request, payment, call, message, location, camera, health, pharmacy, diagnosis, prescription, appointment, emergency, or dispatch behavior occurs.

## Rollback Requirements

The future runtime wiring sprint must include a clear rollback plan:

- remove or disable the runtime loader;
- restore the C22 absence contract if validation fails;
- rerun C22 QA;
- rerun `nexus-workforce`;
- rerun `all-safe`;
- document the failure and rollback result.

## Sprint C23 QA Expectations

The C23 QA guard verifies:

- this checklist exists;
- C22 recommends this sprint;
- required decision, technical, safety, UX, QA, browser validation, and rollback sections are present;
- C19/C17/C15/C13/C8 remain absent from active runtime files;
- package alias and safe-suite wiring are present.

## Sprint C24 Recommendation

Sprint C24 should add a runtime wiring approval record template that captures product approval, validation ownership, go/no-go status, and rollback evidence before any code-level runtime wiring is attempted.
