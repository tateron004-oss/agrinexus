# Nexus Sprint C31 - Source-Backed Agriculture Runtime Activation Pull Request Checklist

## Purpose

Sprint C31 adds an implementation-free pull request checklist for any future source-backed agriculture runtime activation PR. The checklist makes the C29 issue, C30 branch policy, C22-C28 evidence, QA results, browser validation, rollback readiness, and no-execution boundaries explicit before a PR can be reviewed or merged.

This sprint remains inert. It does not open a pull request, does not create runtime wiring, does not add visible UI, does not load C19/C17/C15/C13/C8 artifacts, does not add feature flags, DOM rendering, event handlers, storage, backend behavior, provider handoff, calls, messages, payments, marketplace transactions, location, camera, health, pharmacy, emergency, dispatch, or external navigation.

## Starting Checkpoint

- Previous pushed sprint: Sprint C30 - Source-Backed Agriculture Runtime Activation Branch Policy
- Starting HEAD: `8cbc4ae00ebd2dc2858afc4108b1a0107943986c`
- Branch policy: `docs/NEXUS_SPRINT_C30_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_BRANCH_POLICY.md`
- Runtime wiring issue template: `docs/NEXUS_SPRINT_C29_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_ISSUE_TEMPLATE.md`
- Activation decision checklist: `docs/NEXUS_SPRINT_C28_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_DECISION_CHECKLIST.md`
- Dry-run patch plan: `docs/NEXUS_SPRINT_C27_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_DRY_RUN_PATCH_PLAN.md`
- Rollback plan template: `docs/NEXUS_SPRINT_C26_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_ROLLBACK_PLAN_TEMPLATE.md`
- Risk register: `docs/NEXUS_SPRINT_C25_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_RISK_REGISTER.md`
- Approval record template: `docs/NEXUS_SPRINT_C24_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_APPROVAL_RECORD_TEMPLATE.md`
- Runtime wiring preflight checklist: `docs/NEXUS_SPRINT_C23_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_PREFLIGHT_CHECKLIST.md`
- Runtime absence contract: `docs/NEXUS_SPRINT_C22_SOURCE_BACKED_AGRICULTURE_STANDARD_USER_RUNTIME_ABSENCE_CONTRACT.md`

## Pull Request Checklist Boundary

This checklist is a future review artifact only. It is not implementation approval, merge approval, deployment approval, or product approval by itself. A PR that fails any required item remains blocked.

## Required Pull Request Header

Every future activation PR must include:

- linked C29 issue:
- source branch following C30 naming:
- target branch:
- local HEAD before implementation:
- remote HEAD before implementation:
- final implementation HEAD:
- activation scope summary:
- no-execution summary:
- rollback summary:

## Required Evidence Links

The PR must link completed evidence for:

- C22 runtime absence baseline before implementation;
- C23 runtime wiring preflight checklist;
- C24 approval record with final `go` decision;
- C25 risk register with critical/high risks owned;
- C26 rollback plan and restoration commands;
- C27 dry-run patch plan;
- C28 activation decision checklist with final `go` decision;
- C29 runtime wiring issue template;
- C30 branch policy record.

## Required File Scope Review

The PR must list every changed file and explain why each is necessary. Any unrelated file change is a blocker.

Allowed file categories, only if approved by the C29 issue:

- Standard User agriculture response card wiring;
- low-risk agriculture eligibility checks;
- source-backed packet mapping;
- visible source/citation/freshness/confidence/limitation display;
- fallback copy for missing or stale source packets;
- focused QA;
- browser validation documentation;
- rollback documentation.

## Required No-Execution Review

The PR must confirm it does not add:

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
- automatic confirmation;
- hidden/debug metadata exposure.

## Required Prompt Validation

The PR must include prompt-by-prompt validation for:

### Eligible Low-Risk Agriculture Prompts

- exact prompt:
- expected visible card:
- source/citation/freshness/confidence/limitation shown:
- review-only behavior:
- no execution observed:

### Excluded And High-Risk Prompts

- exact prompt:
- expected exclusion result:
- no source-backed card:
- no provider/call/message/payment/marketplace/location/camera/health/pharmacy/emergency/dispatch behavior:
- no permission prompt unless existing safe runtime already requires it:

## Required QA Results

The PR must include passing results for:

- `git diff --check`
- `node --check server.js`
- `node --check public/app.js`
- `node --check scripts/qa-suite.js`
- relevant source-backed agriculture QA scripts:
- `node scripts/qa-suite.js nexus-workforce`
- `node scripts/qa-suite.js all-safe`

If a QA failure is transient and rerun, the PR must include:

- failing command:
- exact failure:
- direct rerun result:
- full-suite rerun result:
- rationale for treating it as transient:

## Required Browser Validation Evidence

The PR must include browser validation on the normal Standard User build:

- command: `node server.js`
- URL: `http://127.0.0.1:4182/`
- path: `Start as User`
- browser and OS:
- eligible prompt results:
- excluded prompt results:
- console warnings/errors:
- hidden/debug metadata absence:
- no auto-execution evidence:
- screenshot or written evidence:

## Required Rollback Evidence

The PR must include:

- rollback owner:
- rollback trigger threshold:
- files to restore:
- rollback commands:
- QA after rollback:
- browser validation after rollback:
- runtime mutation restoration:
- temporary DB/browser storage cleanup:

## Required Reviewer Signoffs

The PR must not merge until these signoffs are recorded:

- product owner:
- safety owner:
- technical reviewer:
- QA reviewer:
- browser validation reviewer:
- rollback reviewer:
- source packet reviewer:

## Merge Blockers

The PR is blocked if:

- C29 issue is missing or incomplete;
- C30 branch policy record is missing;
- C22-C28 evidence is missing;
- any approval is missing;
- source packet fields are incomplete;
- high-risk exclusion is uncertain;
- QA fails;
- browser validation fails;
- rollback is not executable;
- unrelated files are changed;
- runtime adds any blocked no-execution behavior;
- repo state cannot be restored.

## Protected Runtime Fragments

These fragments must remain absent from `public/index.html`, `public/app.js`, and `server.js` unless the future PR is the approved implementation PR and explicitly documents the runtime change:

- `nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html`
- `nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js`
- `nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js`
- `nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js`
- `nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js`

## Sprint C31 QA Expectations

The C31 QA guard verifies:

- this PR checklist exists;
- C30 recommends this sprint;
- C29 issue and C30 branch policy linkage are required;
- C22-C28 evidence is required;
- file scope, no-execution, prompt validation, QA, browser validation, rollback, and reviewer signoff sections are present;
- merge blockers are explicit;
- protected C19/C17/C15/C13/C8 fragments remain absent from runtime files;
- package alias and safe-suite wiring are present.

## Sprint C32 Recommendation

Sprint C32 should add an implementation-free source-backed agriculture runtime activation merge freeze and rollback drill plan so future runtime activation work has a defined stabilization window after merge.
