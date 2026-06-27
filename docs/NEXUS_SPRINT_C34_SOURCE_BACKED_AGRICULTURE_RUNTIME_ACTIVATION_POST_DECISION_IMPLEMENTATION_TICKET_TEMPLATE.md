# Nexus Sprint C34 - Source-Backed Agriculture Runtime Activation Post-Decision Implementation Ticket Template

## Purpose

Sprint C34 adds an implementation-free ticket template for a future source-backed agriculture runtime activation after an approved Sprint C33 final `go` decision. The template converts the C22-C33 evidence chain into a narrowly scoped implementation ticket without approving, merging, wiring, or activating runtime behavior in this sprint.

This sprint remains inert. It does not approve runtime activation, does not implement cards, does not wire source-backed agriculture cards into Standard User runtime, does not load C19/C17/C15/C13/C8 artifacts, does not add feature flags, visible UI, DOM rendering, event handlers, storage, backend behavior, provider handoff, calls, messages, payments, marketplace transactions, location, camera, health, pharmacy, emergency, dispatch, or external navigation.

## Starting Checkpoint

- Previous pushed sprint: Sprint C33 - Source-Backed Agriculture Runtime Activation Final Go/No-Go Decision Log
- Starting HEAD: `d11225a0c5d93647dd99f66fd1a56aed17626562`
- Final go/no-go decision log: `docs/NEXUS_SPRINT_C33_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_FINAL_GO_NO_GO_DECISION_LOG.md`
- Merge freeze and rollback drill plan: `docs/NEXUS_SPRINT_C32_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_MERGE_FREEZE_ROLLBACK_DRILL_PLAN.md`
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

## Ticket Boundary

This template is a future implementation ticket scaffold only. It is valid only after Sprint C33 records a final `go` decision with every required owner vote, attached evidence, source packet, QA result, browser validation result, merge freeze record, and rollback drill result.

The ticket cannot override any `no-go` or `blocked` decision, cannot broaden scope beyond low-risk source-backed agriculture preview behavior, and cannot authorize any high-risk action or connector execution.

## Implementation Ticket Template

### Title

- Ticket title:
- Ticket ID:
- Created by:
- Created date:
- Linked C33 decision ID:

### Linked Evidence Chain

Attach or link:

- C22 runtime absence baseline:
- C23 runtime wiring preflight checklist:
- C24 approval record:
- C25 risk register:
- C26 rollback plan:
- C27 dry-run patch plan:
- C28 activation decision checklist:
- C29 runtime wiring issue:
- C30 activation branch:
- C31 activation PR checklist:
- C32 merge freeze and rollback drill:
- C33 final go/no-go decision log:

### Approved Scope

Describe only the exact approved low-risk agriculture runtime activation:

- approved user surface:
- approved prompt family:
- approved response card behavior:
- approved source packet:
- approved feature flag or runtime gate:
- approved fallback copy:
- approved browser validation environment:

Anything not listed here is out of scope.

### Exact File Touch List

List the only files the implementation branch may edit:

- file:
- owner:
- reason:
- expected diff type:

No file outside this list may be changed without reopening C33 decision review.

### Exact Insertion Points

For every runtime file, record the exact insertion point:

- file:
- function or DOM area:
- before/after anchor:
- expected code shape:
- expected no-op/default-off behavior:

### Eligible Prompt List

Record prompts that may show the source-backed agriculture response card:

- `Help me with my crops`
- `I need help with crop issues`
- `Teach me about irrigation`
- `Help me find agriculture training`
- additional approved prompt:

Each eligible prompt must remain low-risk, source-backed, preview-only, and no-execution.

### Excluded High-Risk Prompt List

Confirm these prompt types must not show the card or execute actions:

- calls or messages;
- WhatsApp, Telegram, SMS, email, or phone-provider execution;
- provider contact;
- payments;
- marketplace buy/sell transactions;
- location sharing;
- camera or microphone activation;
- health, telehealth, pharmacy, prescription, medical-record, emergency, dispatch, or diagnosis requests;
- account, identity, login, or profile mutation;
- backend mutations;
- external navigation.

### Source Packet Fields

Each activated card must be backed by a source packet with:

- source owner:
- source name:
- source type:
- source URL or local fixture:
- citation:
- freshness timestamp:
- confidence level:
- limitations:
- reviewed by:
- stale-source fallback:
- missing-source fallback:
- unsupported prompt fallback:

### No-Execution Constraints

The implementation ticket must preserve:

- preview-only behavior;
- no provider handoff;
- no calls;
- no messages;
- no payments;
- no marketplace transactions;
- no location sharing;
- no camera or microphone activation;
- no health, telehealth, pharmacy, prescription, emergency, dispatch, diagnosis, or medical-record execution;
- no backend mutations;
- no persistent storage side effects;
- no external navigation;
- no hidden execution queues;
- no automatic confirmation;
- no hidden/debug metadata exposure.

### Required QA Commands

Record final passing results for:

- `git diff --check`
- `node --check server.js`
- `node --check public/app.js`
- `node --check scripts/qa-suite.js`
- source-backed agriculture focused QA:
- C22-C34 guard QA:
- `node scripts/qa-suite.js nexus-workforce`
- `node scripts/qa-suite.js all-safe`

### Browser Validation Plan

Validate with:

- command: `node server.js`
- URL: `http://127.0.0.1:4182/`
- path: `Start as User`
- browser:
- OS:
- eligible prompt results:
- excluded prompt results:
- console warnings/errors:
- hidden/debug metadata absence:
- no auto-execution evidence:
- screenshots or written notes:

### Rollback Plan

Before merge, confirm:

- rollback owner:
- rollback commit or branch:
- rollback command:
- rollback validation commands:
- rollback browser validation:
- max rollback time:
- rollback communication path:

### Owner Assignments

- product owner:
- safety owner:
- technical owner:
- QA owner:
- browser validation owner:
- rollback owner:
- source packet owner:
- release coordinator:

### Definition Of Done

The future implementation ticket is complete only when:

- all approved files match the exact file touch list;
- no out-of-scope files changed;
- all eligible prompt behavior is source-backed and preview-only;
- all excluded/high-risk prompt behavior remains blocked, gated, or unaffected;
- all QA commands pass;
- browser validation passes;
- rollback drill remains current;
- local HEAD and remote HEAD are recorded;
- final git status is clean.

### Stop And Blocked Conditions

Stop implementation if:

- C33 decision is missing, `no-go`, or `blocked`;
- HEAD changes invalidate the evidence chain;
- source packet is stale or incomplete;
- QA fails;
- browser validation fails;
- any protected runtime fragment is loaded without explicit approval;
- any high-risk prompt shows low-risk agriculture card behavior;
- any auto-execution, provider handoff, payment, call, message, location, camera, health, pharmacy, emergency, dispatch, marketplace transaction, backend mutation, storage side effect, or external navigation appears;
- rollback owner is unavailable.

## Protected Runtime Fragments

These fragments must remain absent from `public/index.html`, `public/app.js`, and `server.js` unless a future approved PR passes the C33 decision log and uses this C34 ticket template:

- `nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html`
- `nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js`
- `nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js`
- `nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js`
- `nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js`

## Sprint C34 QA Expectations

The C34 QA guard verifies:

- this post-decision implementation ticket template exists;
- C33 recommends this sprint;
- the C22-C33 evidence chain remains present;
- ticket title, linked decision, approved scope, exact file touch list, exact insertion points, eligible prompts, excluded prompts, source packet fields, no-execution constraints, QA commands, browser validation plan, rollback plan, owner assignments, definition of done, and blocked conditions are documented;
- protected C19/C17/C15/C13/C8 fragments remain absent from runtime files;
- no runtime wiring has been added;
- package alias and safe-suite wiring are present.

## Sprint C35 Recommendation

Sprint C35 should add an implementation-free source-backed agriculture runtime activation implementation handoff packet so an approved future implementation branch can carry the C22-C34 decision, ticket, QA, browser validation, and rollback artifacts into a single release handoff record.
