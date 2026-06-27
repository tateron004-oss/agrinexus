# Nexus Sprint C30 - Source-Backed Agriculture Runtime Activation Branch Policy

## Purpose

Sprint C30 defines an implementation-free branch policy for any future source-backed agriculture runtime activation branch. It exists so an activation branch cannot begin until the C29 issue template is completed and linked to the full C22-C28 evidence set.

This sprint remains inert. It does not create or switch branches, does not wire source-backed agriculture cards into Standard User runtime, does not load C19/C17/C15/C13/C8 artifacts, does not add feature flags, visible UI, DOM rendering, event handlers, storage, backend behavior, provider handoff, calls, messages, payments, marketplace transactions, location, camera, health, pharmacy, emergency, dispatch, or external navigation.

## Starting Checkpoint

- Previous pushed sprint: Sprint C29 - Source-Backed Agriculture Runtime Wiring Issue Template
- Starting HEAD: `ba5fdc471453dec3239f6f30ff77ff5352c09790`
- Runtime wiring issue template: `docs/NEXUS_SPRINT_C29_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_ISSUE_TEMPLATE.md`
- Activation decision checklist: `docs/NEXUS_SPRINT_C28_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_DECISION_CHECKLIST.md`
- Dry-run patch plan: `docs/NEXUS_SPRINT_C27_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_DRY_RUN_PATCH_PLAN.md`
- Rollback plan template: `docs/NEXUS_SPRINT_C26_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_ROLLBACK_PLAN_TEMPLATE.md`
- Risk register: `docs/NEXUS_SPRINT_C25_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_RISK_REGISTER.md`
- Approval record template: `docs/NEXUS_SPRINT_C24_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_APPROVAL_RECORD_TEMPLATE.md`
- Runtime wiring preflight checklist: `docs/NEXUS_SPRINT_C23_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_PREFLIGHT_CHECKLIST.md`
- Runtime absence contract: `docs/NEXUS_SPRINT_C22_SOURCE_BACKED_AGRICULTURE_STANDARD_USER_RUNTIME_ABSENCE_CONTRACT.md`

## Branch Policy Boundary

This policy is a readiness gate only. It is not product approval, source approval, implementation approval, merge approval, or deployment approval. It does not override any no-go condition in C28 or any blocked condition in the C29 issue template.

## Required Branch Preconditions

A future runtime activation branch may be opened only when all of the following are true:

- the C29 runtime wiring issue exists and is linked in the branch description;
- the C29 issue has completed C22-C28 evidence attachments;
- the C28 decision checklist is marked `go`;
- the C24 approval record is marked `go`;
- C25 critical/high risks have owners and mitigation plans;
- the C26 rollback plan has an owner, trigger threshold, and restoration procedure;
- the C27 dry-run patch plan identifies exact file paths and insertion points;
- source packet fields include citation, freshness, confidence, limitation, and low-risk agriculture eligibility;
- deterministic high-risk exclusions are documented;
- browser validation owner and QA owner are assigned;
- local and remote HEADs before implementation are recorded;
- the branch name follows the policy below.

## Required Branch Naming

Future implementation branches should use:

`codex/source-backed-agriculture-runtime-activation-<issue-id>`

The branch name must not imply live regulated execution, provider handoff, payments, emergency dispatch, marketplace transactions, or medical/pharmacy action.

## Allowed Branch Scope

The branch may only implement the specific low-risk agriculture runtime wiring approved by the C29 issue. Allowed scope must stay limited to:

- Standard User source-backed agriculture guidance;
- review-only or preview-only visible cards;
- deterministic low-risk agriculture eligibility checks;
- deterministic exclusion checks;
- visible source/citation/freshness/confidence/limitation fields;
- fallback copy for missing or stale source packets;
- focused QA and browser validation evidence.

## Blocked Branch Scope

The branch must not include:

- provider handoff;
- calls or messages;
- WhatsApp, Telegram, SMS, email, or phone-provider execution;
- payments;
- marketplace transactions;
- buy/sell execution;
- location sharing;
- camera or microphone activation;
- health, telehealth, pharmacy, prescription, emergency, dispatch, or medical-record execution;
- backend mutations;
- persistent storage side effects;
- external navigation;
- hidden execution queues;
- unrelated rebrands, refactors, or route rewrites.

## Required Pull Request Evidence

A future pull request from the activation branch must include:

- linked C29 issue;
- completed C22 runtime absence evidence before implementation;
- completed C23 preflight checklist;
- completed C24 approval record;
- completed C25 risk register;
- completed C26 rollback plan;
- completed C27 dry-run patch plan;
- completed C28 decision checklist;
- exact files changed;
- eligible prompt validation;
- excluded/high-risk prompt validation;
- browser validation evidence on `node server.js` / `Start as User`;
- `node scripts/qa-suite.js nexus-workforce` result;
- `node scripts/qa-suite.js all-safe` result;
- rollback rehearsal result or explicit rollback readiness evidence.

## Required Reviewers

The activation pull request must name reviewers or owners for:

- product decision;
- safety boundary;
- technical implementation;
- QA evidence;
- browser validation evidence;
- rollback readiness;
- source packet validity.

## Required No-Go Conditions

The activation branch must remain unopened or be abandoned if:

- the C29 issue is incomplete;
- C22-C28 evidence is missing;
- any C28 gate is pending, blocked, or unknown;
- implementation requires a blocked branch scope item;
- source packet fields are incomplete;
- high-risk prompt exclusion is uncertain;
- browser validation cannot be performed;
- rollback cannot be executed;
- repo state cannot be restored.

## Protected Runtime Fragments

These fragments must remain absent from `public/index.html`, `public/app.js`, and `server.js` until a separately approved implementation branch intentionally changes runtime:

- `nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html`
- `nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js`
- `nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js`
- `nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js`
- `nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js`

## Branch Policy Record Template

Record before opening a future implementation branch:

- Policy record ID:
- Linked C29 issue:
- Requested branch name:
- Local HEAD before branch:
- Remote HEAD before branch:
- Product owner:
- Safety owner:
- Technical owner:
- QA owner:
- Browser validation owner:
- Rollback owner:
- Source packet owner:
- C22-C28 evidence status:
- Final branch decision: `go` / `no-go` / `blocked`
- Rationale:
- Required follow-up:

## Sprint C30 QA Expectations

The C30 QA guard verifies:

- this branch policy exists;
- C29 recommends this sprint;
- C29 issue linkage and C22-C28 evidence are required;
- branch naming, allowed scope, blocked scope, PR evidence, reviewer ownership, and no-go conditions are documented;
- protected C19/C17/C15/C13/C8 fragments remain absent from runtime files;
- no runtime wiring has been added;
- package alias and safe-suite wiring are present.

## Sprint C31 Recommendation

Sprint C31 should add an implementation-free source-backed agriculture runtime activation pull request checklist so future activation PRs can be reviewed consistently against the C29 issue and C30 branch policy before merge.
