# Nexus Sprint C29 - Source-Backed Agriculture Runtime Wiring Issue Template

## Purpose

Sprint C29 adds an implementation-free issue template for requesting a future source-backed agriculture runtime wiring sprint. The template makes any future activation request carry the C22-C28 evidence set before a developer touches Standard User runtime.

This sprint remains inert. It does not wire source-backed agriculture cards into `public/index.html`, `public/app.js`, or `server.js`; does not add feature flags, visible UI, DOM rendering, event handlers, storage, backend behavior, provider handoff, calls, messages, payments, marketplace transactions, location, camera, health, pharmacy, emergency, dispatch, or external navigation.

## Starting Checkpoint

- Previous pushed sprint: Sprint C28 - Source-Backed Agriculture Runtime Activation Decision Checklist
- Starting HEAD: `941f43a2c812f6a6562b2d8bd64560b4570046a5`
- Decision checklist: `docs/NEXUS_SPRINT_C28_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_DECISION_CHECKLIST.md`
- Dry-run patch plan: `docs/NEXUS_SPRINT_C27_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_DRY_RUN_PATCH_PLAN.md`
- Rollback plan template: `docs/NEXUS_SPRINT_C26_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_ROLLBACK_PLAN_TEMPLATE.md`
- Risk register: `docs/NEXUS_SPRINT_C25_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_RISK_REGISTER.md`
- Approval record template: `docs/NEXUS_SPRINT_C24_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_APPROVAL_RECORD_TEMPLATE.md`
- Runtime wiring preflight checklist: `docs/NEXUS_SPRINT_C23_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_PREFLIGHT_CHECKLIST.md`
- Runtime absence contract: `docs/NEXUS_SPRINT_C22_SOURCE_BACKED_AGRICULTURE_STANDARD_USER_RUNTIME_ABSENCE_CONTRACT.md`

## Issue Template Boundary

Use this template only to request a future scoped activation sprint. Submitting the issue does not approve runtime wiring, does not create an implementation branch, and does not bypass product, safety, QA, browser validation, rollback, or repository restoration gates.

## Runtime Wiring Request Issue Template

### Title

`Request: Source-backed agriculture Standard User runtime wiring`

### Requested Activation Scope

- Proposed runtime surface:
- Proposed eligible prompt family:
- Proposed source-backed response card behavior:
- Proposed files and insertion points:
- Expected user-visible change:
- Expected no-change areas:

### Product Outcome

Describe the user outcome. The request must be limited to low-risk agriculture support guidance with source-backed preview or review-only behavior.

### Standard User Surface

Confirm the request targets only the normal Standard User path:

- Command: `node server.js`
- URL: `http://127.0.0.1:4182/`
- Path: `Start as User`
- No special test build:
- No hidden debug-only feature path:

### Eligible Prompts

List exact low-risk agriculture prompts that may render the source-backed agriculture card. Examples may include:

- `I need help with crop issues`
- `Help me find agriculture training`
- `Teach me how irrigation works`

### Excluded And High-Risk Prompts

List exact prompts that must not render the source-backed agriculture card. Include any prompt involving:

- provider handoff;
- call;
- message;
- WhatsApp;
- payment;
- marketplace transaction;
- buy/sell execution;
- location sharing;
- camera activation;
- health or telehealth;
- pharmacy or prescription;
- emergency or dispatch;
- backend mutation;
- storage side effects;
- external navigation.

### Source Packet And Data Family

Attach or reference the source-backed packet evidence:

- source owner:
- source name:
- source URL or local fixture:
- citation:
- freshness timestamp:
- confidence level:
- limitations:
- low-risk agriculture eligibility reason:
- exclusion reason for high-risk domains:

### Required C22-C28 Evidence Attachments

Attach completed evidence for:

- C22 runtime absence baseline:
- C23 preflight checklist:
- C24 approval record with final decision:
- C25 risk register:
- C26 rollback plan:
- C27 dry-run patch plan:
- C28 activation decision checklist:

### Proposed Files And Insertion Points

Record exact future touch points. If any touch point is broader than the dry-run plan, mark this issue as `blocked`.

- `public/index.html`:
- `public/app.js`:
- `server.js`:
- scripts:
- docs:
- package aliases:
- QA suite wiring:

### No-Execution Pledge

Confirm the proposed implementation will not add:

- live provider handoff;
- calls or messages;
- WhatsApp, Telegram, SMS, email, or phone-provider execution;
- payments;
- marketplace transactions;
- location sharing;
- camera or microphone activation;
- health, telehealth, pharmacy, prescription, emergency, dispatch, or medical-record execution;
- backend mutations;
- persistent storage side effects;
- external navigation;
- hidden execution queues.

### Safety Exclusions

Document deterministic exclusion checks for:

- high-risk action language:
- regulated health/pharmacy/emergency language:
- marketplace buy/sell/payment language:
- provider/contact/call/message language:
- location/camera/permission language:
- unsupported source or missing citation:
- stale source or missing freshness:

### QA Plan

Required local-safe QA:

- `git diff --check`
- `node --check server.js`
- `node --check public/app.js`
- `node --check scripts/qa-suite.js`
- relevant source-backed agriculture QA:
- `node scripts/qa-suite.js nexus-workforce`
- `node scripts/qa-suite.js all-safe`

### Browser Validation Plan

Required browser validation:

- standard command:
- URL:
- Standard User path:
- eligible prompt results:
- excluded prompt results:
- console warnings/errors:
- hidden/debug metadata absence:
- no auto-execution evidence:

### Rollback Plan

Attach the completed C26 rollback plan and record:

- rollback owner:
- trigger threshold:
- files to restore:
- commands to run:
- QA after rollback:
- browser validation after rollback:

### Owners And Signoffs

- Product owner:
- Safety owner:
- Technical owner:
- QA owner:
- Browser validation owner:
- Rollback owner:
- Final decision owner:

### Go / No-Go Request

- Requested decision: `go` / `no-go` / `blocked`
- Rationale:
- Known risks:
- Required follow-up:

## Protected Runtime Fragments

These fragments must remain absent from `public/index.html`, `public/app.js`, and `server.js` until a separately approved implementation sprint intentionally changes runtime:

- `nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html`
- `nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js`
- `nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js`
- `nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js`
- `nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js`

## Sprint C29 QA Expectations

The C29 QA guard verifies:

- this issue template exists;
- C28 recommends this sprint;
- C22-C28 evidence attachments are required;
- eligible prompts and excluded/high-risk prompts are separated;
- no-execution pledge and safety exclusions are present;
- Standard User browser validation and rollback evidence are required;
- protected C19/C17/C15/C13/C8 fragments remain absent from runtime files;
- package alias and safe-suite wiring are present.

## Sprint C30 Recommendation

Sprint C30 should add an implementation-free source-backed agriculture runtime activation branch policy so future implementation branches cannot begin until the C29 issue template is completed and linked to the C22-C28 evidence set.
