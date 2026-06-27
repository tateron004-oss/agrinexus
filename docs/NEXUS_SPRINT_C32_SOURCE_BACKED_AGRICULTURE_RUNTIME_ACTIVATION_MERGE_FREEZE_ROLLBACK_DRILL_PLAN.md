# Nexus Sprint C32 - Source-Backed Agriculture Runtime Activation Merge Freeze And Rollback Drill Plan

## Purpose

Sprint C32 defines an implementation-free merge freeze and rollback drill plan for any future source-backed agriculture runtime activation. It ensures a future activation merge has a stabilization window, rollback owner, rollback rehearsal, monitoring checklist, and post-merge safety evidence before the change is considered stable.

This sprint remains inert. It does not merge runtime code, does not create feature flags, does not wire source-backed agriculture cards into Standard User runtime, does not load C19/C17/C15/C13/C8 artifacts, does not add visible UI, DOM rendering, event handlers, storage, backend behavior, provider handoff, calls, messages, payments, marketplace transactions, location, camera, health, pharmacy, emergency, dispatch, or external navigation.

## Starting Checkpoint

- Previous pushed sprint: Sprint C31 - Source-Backed Agriculture Runtime Activation Pull Request Checklist
- Starting HEAD: `9a316987eea91e7a8683376da381e988a6f62b46`
- Pull request checklist: `docs/NEXUS_SPRINT_C31_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_PULL_REQUEST_CHECKLIST.md`
- Branch policy: `docs/NEXUS_SPRINT_C30_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_BRANCH_POLICY.md`
- Runtime wiring issue template: `docs/NEXUS_SPRINT_C29_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_ISSUE_TEMPLATE.md`
- Activation decision checklist: `docs/NEXUS_SPRINT_C28_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_DECISION_CHECKLIST.md`
- Dry-run patch plan: `docs/NEXUS_SPRINT_C27_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_DRY_RUN_PATCH_PLAN.md`
- Rollback plan template: `docs/NEXUS_SPRINT_C26_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_ROLLBACK_PLAN_TEMPLATE.md`
- Risk register: `docs/NEXUS_SPRINT_C25_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_RISK_REGISTER.md`
- Approval record template: `docs/NEXUS_SPRINT_C24_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_APPROVAL_RECORD_TEMPLATE.md`
- Runtime wiring preflight checklist: `docs/NEXUS_SPRINT_C23_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_PREFLIGHT_CHECKLIST.md`
- Runtime absence contract: `docs/NEXUS_SPRINT_C22_SOURCE_BACKED_AGRICULTURE_STANDARD_USER_RUNTIME_ABSENCE_CONTRACT.md`

## Merge Freeze Boundary

This plan is a future operational guardrail only. It is not merge approval, product approval, deployment approval, or runtime activation. The future runtime activation PR must still satisfy C22-C31 before this merge-freeze plan can be used.

## Required Freeze Window

A future activation PR must define a freeze window before merge:

- freeze owner:
- freeze start:
- freeze end:
- blocked concurrent work:
- allowed emergency fixes:
- communication channel:
- rollback decision owner:
- browser validation owner:
- QA owner:

During the freeze window, unrelated runtime, routing, backend, provider, payment, health, marketplace, camera, location, call, message, or UI changes must not be merged into `main`.

## Required Pre-Merge Rollback Drill

Before merge, the future activation team must rehearse rollback using the C26 rollback plan:

- identify exact files to restore;
- record current local HEAD;
- record current remote HEAD;
- record activation branch HEAD;
- run rollback commands in a disposable local state;
- run `git diff --check`;
- run source-backed agriculture focused QA;
- run `node scripts/qa-suite.js nexus-workforce`;
- run `node scripts/qa-suite.js all-safe`;
- confirm Standard User browser path can be restored;
- record drill result as `pass` / `fail` / `blocked`.

## Required Post-Merge Stabilization Window

After merge, the future activation team must keep a stabilization window:

- stabilization owner:
- start time:
- end time:
- local HEAD after merge:
- remote HEAD after merge:
- monitored prompts:
- monitored excluded prompts:
- console warning/error threshold:
- rollback trigger threshold:
- final stabilization decision: `stable` / `rollback` / `blocked`

## Required Monitoring Checklist

The future activation team must monitor:

- eligible low-risk agriculture prompts render the approved card only;
- source/citation/freshness/confidence/limitation fields are visible;
- excluded/high-risk prompts do not render the source-backed agriculture card;
- Standard User remains low-risk, review-only, and no-execution;
- no provider handoff occurs;
- no call or message occurs;
- no payment occurs;
- no marketplace transaction occurs;
- no location sharing occurs;
- no camera or microphone activation occurs;
- no health, telehealth, pharmacy, emergency, dispatch, or medical-record execution occurs;
- no backend mutation or persistent storage side effect occurs;
- no external navigation occurs;
- no hidden/debug metadata is exposed.

## Required Rollback Triggers

Rollback must be considered immediately if:

- eligible prompts render unsafe or misleading content;
- source/citation/freshness/confidence/limitation fields are missing;
- excluded/high-risk prompts render the agriculture card;
- any blocked no-execution behavior appears;
- browser validation fails;
- `nexus-workforce` fails;
- `all-safe` fails;
- repo state cannot be restored;
- console errors affect the Standard User path;
- rollback owner or decision owner is unavailable.

## Rollback Drill Record Template

Record:

- Drill ID:
- Drill date:
- C29 issue:
- C30 branch:
- C31 PR:
- Rollback owner:
- Decision owner:
- Local HEAD before drill:
- Remote HEAD before drill:
- Activation branch HEAD:
- Files restored:
- Commands used:
- QA results:
- Browser validation result:
- Drill decision: `pass` / `fail` / `blocked`
- Follow-up:

## Post-Merge Stabilization Record Template

Record:

- Stabilization ID:
- Merge date:
- Merged PR:
- Local HEAD after merge:
- Remote HEAD after merge:
- Freeze owner:
- QA owner:
- Browser validation owner:
- Rollback owner:
- Eligible prompt results:
- Excluded prompt results:
- QA results:
- Console findings:
- Rollback trigger assessment:
- Final stabilization decision: `stable` / `rollback` / `blocked`
- Follow-up:

## Protected Runtime Fragments

These fragments must remain absent from `public/index.html`, `public/app.js`, and `server.js` unless the future activation PR is approved, merged, monitored, and rollback-ready:

- `nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html`
- `nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js`
- `nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js`
- `nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js`
- `nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js`

## Sprint C32 QA Expectations

The C32 QA guard verifies:

- this merge freeze and rollback drill plan exists;
- C31 recommends this sprint;
- freeze window, rollback drill, stabilization window, monitoring, rollback triggers, and record templates are documented;
- C22-C31 evidence chain remains present;
- protected C19/C17/C15/C13/C8 fragments remain absent from runtime files;
- no runtime wiring has been added;
- package alias and safe-suite wiring are present.

## Sprint C33 Recommendation

Sprint C33 should add an implementation-free source-backed agriculture runtime activation final go/no-go meeting agenda and decision log so owners can make a single accountable decision before any approved implementation branch is merged.
