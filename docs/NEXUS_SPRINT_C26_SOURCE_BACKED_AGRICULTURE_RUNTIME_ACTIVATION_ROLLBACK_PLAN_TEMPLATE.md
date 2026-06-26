# Nexus Sprint C26 - Source-Backed Agriculture Runtime Activation Rollback Plan Template

## Purpose

Sprint C26 provides the rollback plan template required before any future sprint may wire the source-backed agriculture response card into Standard User runtime.

This sprint remains inert. It does not wire C19/C17/C15/C13/C8 into Standard User runtime, does not add visible UI, does not add feature flags, does not add DOM rendering, does not add event handlers, does not change backend behavior, and does not approve runtime wiring by itself.

## Starting Checkpoint

- Previous pushed sprint: Sprint C25 - Source-Backed Agriculture Runtime Activation Risk Register
- Starting HEAD: `79c125a56304d0bab40b55324bd43df54ddc134b`
- Risk register: `docs/NEXUS_SPRINT_C25_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_RISK_REGISTER.md`
- Approval record template: `docs/NEXUS_SPRINT_C24_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_APPROVAL_RECORD_TEMPLATE.md`
- Runtime wiring preflight checklist: `docs/NEXUS_SPRINT_C23_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_PREFLIGHT_CHECKLIST.md`
- Runtime absence contract: `docs/NEXUS_SPRINT_C22_SOURCE_BACKED_AGRICULTURE_STANDARD_USER_RUNTIME_ABSENCE_CONTRACT.md`

## Rollback Scope Boundary

The rollback plan is a future implementation safety artifact. It is not a runtime patch, loader, feature flag, renderer, source connector, provider connector, or approval to activate the source-backed agriculture card.

Any future runtime wiring sprint must complete this rollback plan before implementation begins and must update it with actual commit hashes, file paths, QA evidence, and browser evidence before commit.

## Rollback Plan Header

Before runtime wiring, record:

- Rollback plan ID:
- Rollback owner:
- Technical owner:
- QA owner:
- Browser validation owner:
- Product owner:
- Target branch:
- Local HEAD before runtime wiring:
- Remote HEAD before runtime wiring:
- Proposed runtime wiring commit:
- Rollback trigger threshold:
- Rollback decision owner:

## Baseline Restoration Target

The baseline restoration target must be the last known-good state where:

- C22 runtime absence contract passes;
- C23 preflight checklist is still valid;
- C24 approval record is still available;
- C25 risk register is still available;
- protected runtime fragments are absent from `public/index.html`, `public/app.js`, and `server.js`;
- Standard User remains low-risk, review-only, and no-execution;
- no provider, call, message, payment, marketplace transaction, location, camera, health, pharmacy, emergency, dispatch, backend, or storage behavior is introduced by the rollback.

## Rollback Triggers

Rollback must be triggered if any future runtime wiring causes:

- high-risk prompts to render the agriculture card;
- source, citation, freshness, confidence, or limitation evidence to be missing;
- stale, missing, or unverified source data to appear verified;
- local applicability overclaims;
- hidden debug metadata or raw source payloads to become visible;
- provider handoff, call, message, payment, marketplace transaction, location, camera, health, pharmacy, emergency, or dispatch side effects;
- console warnings/errors that affect the Standard User path;
- unexpected network requests;
- unexpected localStorage/sessionStorage writes;
- runtime mutation that cannot be restored;
- broad app/server/router changes outside the approved wiring surface;
- browser validation failure;
- `nexus-workforce` or `all-safe` failure that cannot be isolated and resolved safely.

## Rollback Procedure Template

Record the exact restoration path before runtime wiring begins:

1. Stop the running Standard User server if it is active.
2. Restore edited runtime files to the last known-good commit or apply a narrow rollback commit.
3. Confirm protected C19/C17/C15/C13/C8 fragments are absent from runtime files.
4. Restore any temporary DB/runtime/browser storage mutation.
5. Rerun C22 runtime absence QA.
6. Rerun C23 preflight QA.
7. Rerun C24 approval record QA.
8. Rerun C25 risk register QA.
9. Rerun `node scripts/qa-suite.js nexus-workforce`.
10. Rerun `node scripts/qa-suite.js all-safe`.
11. Repeat Standard User browser validation only if runtime-visible behavior had changed.
12. Record final local HEAD, final remote HEAD, and final `git status --short`.

## Rollback Evidence Template

Record:

- Failing condition:
- Reproduction steps:
- Affected file or files:
- Rollback command or rollback commit:
- Runtime fragments absent after rollback:
- C22 QA result:
- C23 QA result:
- C24 QA result:
- C25 QA result:
- `nexus-workforce` result:
- `all-safe` result:
- Browser validation result:
- Runtime mutation restoration result:
- Final local HEAD:
- Final remote HEAD:
- Final git status:
- Rollback owner sign-off:
- Product owner sign-off:
- Safety owner sign-off:

## Protected Runtime Fragments

Rollback validation must confirm these remain absent from `public/index.html`, `public/app.js`, and `server.js` unless a future approved wiring sprint explicitly names them:

- `nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html`
- `nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js`
- `nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js`
- `nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js`
- `nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js`

## No-Execution Restoration Requirement

After rollback, Standard User must remain:

- source-backed only when explicitly approved;
- agriculture-only for this lane;
- low-risk only;
- review-only;
- no-execution;
- no provider handoff;
- no call or message;
- no payment or marketplace transaction;
- no location or camera request;
- no medical, pharmacy, diagnosis, prescription, appointment, emergency, or dispatch action.

## Sprint C26 QA Expectations

The C26 QA guard verifies:

- this rollback plan template exists;
- C25 recommends this sprint;
- rollback owner, trigger, procedure, evidence, protected fragment, and no-execution sections are present;
- C22, C23, C24, C25, `nexus-workforce`, and `all-safe` rerun requirements are present;
- protected C19/C17/C15/C13/C8 fragments remain absent from runtime files;
- package alias and safe-suite wiring are present.

## Sprint C27 Recommendation

Sprint C27 should add a source-backed agriculture runtime wiring dry-run patch plan that identifies the smallest future code touch points without applying runtime changes.
