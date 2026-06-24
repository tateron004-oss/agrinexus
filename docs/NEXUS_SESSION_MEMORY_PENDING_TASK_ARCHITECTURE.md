# Nexus Session Memory + Pending Task State Architecture

Phase: 11G1

## Executive Summary

Session memory and pending task state are the next architecture layer for moving Nexus toward a Jarvis/Siri/Alexa-style assistant. They should let Nexus remember short-lived conversational context and keep track of unresolved work without turning that memory into execution authority.

This phase is documentation-only. It does not add runtime memory, durable user memory, pending task queues, execution, staging, confirmation triggering, permission triggering, routing, provider handoff, or UI behavior.

The correct posture is:

- Nexus may remember safe session context.
- Nexus may describe an incomplete task.
- Nexus may explain what information, permission, or confirmation would be needed later.
- Nexus must not execute or prepare executable actions from memory.
- Existing routers, policy, planner safety, confirmation gates, permission gates, and audit boundaries remain authoritative.

## Current Agent Pipeline

The current Phase 11 pipeline is:

```text
input
  -> intent classification
  -> tool registry metadata
  -> policy/risk decision
  -> policy observation
  -> non-executing planner
  -> plan observation
  -> existing routers remain authoritative
```

Current layers:

- `public/nexus-intent-classifier.js` classifies intent, domain, risk, action type, selected tool, and entities.
- `public/nexus-tool-registry.js` provides runtime-readable metadata-only tool descriptions.
- `public/nexus-policy-engine.js` creates non-executing policy decisions.
- `metadata.policyDecision` and `metadata.agentAction.policyDecision` expose policy metadata for observation.
- `public/nexus-planner.js` creates non-executing `nexusPlan` metadata.
- `metadata.nexusPlan` and `metadata.agentAction.nexusPlan` expose plan metadata for observation.
- `metadata.plannerObservation` states that the planner has no execution authority.
- Existing browser and backend routers still decide visible behavior.

Session memory and pending task state should come after plan observation and before any future response composer or pending action manager.

## Purpose Of Session Memory

Session memory is short-lived context for the current user session only. It helps Nexus answer follow-up questions and explain the current thread without needing the user to repeat safe context.

Session memory may track:

- current conversation topic
- last intent
- last selected tool
- last policy decision
- last plan
- unresolved clarification
- recently discussed safe context
- current domain, such as learning, jobs, marketplace, crop help, map, contact, or health
- last safe next step

Session memory must not:

- execute anything
- become durable profile memory by default
- store sensitive data without consent
- store raw medical details unnecessarily
- store payment details
- store full contact lists
- store precise location without permission
- store account credentials
- store emergency details beyond a safe, redacted summary
- bypass policy, confirmation, permission, or audit rules

Session memory is context, not authority.

## Purpose Of Pending Task State

Pending task state is a future mechanism for tracking incomplete, blocked, or gated work. It should help Nexus explain what remains unresolved without creating executable actions.

Pending task state may eventually track:

- a task the user asked Nexus to help with
- missing required information
- required permission gate
- required confirmation gate
- blocked or not implemented status
- next safe step
- expiration time
- user-visible summary
- whether audit will be required before any future action

Pending task state must not:

- execute the task
- trigger provider, call, message, payment, location, camera, marketplace, account, health, or emergency behavior
- request permission automatically
- launch confirmation automatically
- become a queue of executable actions
- persist forever
- bypass future audit logging
- bypass fresh policy evaluation

For Phase 11G2 and 11G3, pending tasks must have:

- `canExecute: false`
- `executionAuthority: "none"`

## Proposed Data Model

### NexusSessionContext

```js
{
  sessionId: "session.local.123",
  createdAt: "2026-06-24T00:00:00.000Z",
  updatedAt: "2026-06-24T00:00:00.000Z",
  expiresAt: "2026-06-24T02:00:00.000Z",
  currentDomain: "learning",
  lastIntentId: "learning.training.find",
  lastToolId: "workforce.training",
  lastPolicyStatus: "allow_route",
  lastPlanId: "plan.learning.training.find.workforce.training",
  lastSafeStep: "Show training guidance or let the existing router handle the low-risk route.",
  unresolvedClarification: null,
  activeTopic: "agriculture training",
  safeSummary: "User is exploring agriculture training options.",
  sensitiveFlags: [],
  memorySource: "session-observation",
  notes: [
    "Session memory is non-executing.",
    "Policy must be re-evaluated before any future action."
  ]
}
```

Field notes:

- `sessionId`: short-lived session identifier, not a durable profile ID.
- `createdAt`, `updatedAt`, `expiresAt`: required retention metadata.
- `currentDomain`: broad domain only, such as `learning`, `jobs`, `marketplace`, `agriculture`, `map`, `contact`, or `health`.
- `lastIntentId`: last observed intent classification ID.
- `lastToolId`: last observed selected or matched tool ID.
- `lastPolicyStatus`: last policy status, not permission to act later.
- `lastPlanId`: last observed plan ID.
- `lastSafeStep`: safe next step from policy/planner metadata.
- `unresolvedClarification`: redacted clarification prompt if one exists.
- `activeTopic`: short non-sensitive topic label.
- `safeSummary`: redacted session summary suitable for display.
- `sensitiveFlags`: broad flags such as `contact`, `location`, `health`, `payment`, or `minor`.
- `memorySource`: expected to begin as `session-observation`.
- `notes`: explicit safety notes.

### NexusPendingTask

```js
{
  taskId: "task.session.123.call-john",
  sessionId: "session.local.123",
  sourceText: "Call John",
  intentId: "communications.outbound_contact.controlled",
  toolId: "communications.call_contact",
  domain: "communications",
  risk: "high",
  status: "needs_clarification",
  summary: "User asked to call John, but contact resolution is incomplete.",
  requiredInputs: [
    { id: "contact_target", label: "Who should Nexus call?", required: true }
  ],
  permissionGates: [],
  confirmationGates: [
    { type: "explicit", allowedConfirmations: ["yes", "confirm", "do it"] }
  ],
  blockedReason: null,
  nextSafeStep: "Ask which John or ask for the phone number. Do not call yet.",
  canExecute: false,
  executionAuthority: "none",
  createdAt: "2026-06-24T00:00:00.000Z",
  updatedAt: "2026-06-24T00:00:00.000Z",
  expiresAt: "2026-06-24T00:30:00.000Z",
  auditRequired: true,
  userVisible: true,
  notes: [
    "Pending task is not an executable action.",
    "Policy must be re-evaluated before any future provider handoff."
  ]
}
```

Field notes:

- `taskId`: generated task ID scoped to session.
- `sourceText`: redacted original prompt or safe summary.
- `intentId`, `toolId`, `domain`, `risk`: copied from observed metadata.
- `status`: non-executing task status.
- `requiredInputs`: missing details needed before future action can be considered.
- `permissionGates`: permissions that would be required later.
- `confirmationGates`: confirmation requirements that would apply later.
- `blockedReason`: why action cannot proceed, if blocked.
- `nextSafeStep`: user-safe next step.
- `canExecute`: always `false` in 11G2/11G3.
- `executionAuthority`: always `"none"` in 11G2/11G3.
- `auditRequired`: whether future action lifecycle would require audit logging.
- `userVisible`: whether a future UI may summarize this task.

### Pending Task Statuses

Allowed initial statuses should include:

- `context_only`
- `needs_clarification`
- `permission_required`
- `confirmation_required`
- `blocked`
- `not_implemented`
- `ready_for_future_confirmation`
- `expired`
- `cancelled`

In early implementation, `ready_for_future_confirmation` must still have `canExecute: false` and `executionAuthority: "none"`. It means the task has enough metadata for a future confirmation design, not that it can execute now.

## Memory Scope And Retention

Recommended rollout order:

1. Observation-only session context objects generated in QA.
2. Browser-session memory held in memory, cleared on refresh or logout.
3. Server in-memory session context with short TTL.
4. Optional durable memory only after consent, redaction, audit, export/delete controls, and role/privacy review.

Retention rules:

- Session context should expire quickly, such as 30 minutes to 2 hours.
- Pending task state should expire faster for sensitive tasks, such as 10 to 30 minutes.
- Contact, health, location, payment, account, and emergency contexts should default to short retention or redacted summaries.
- Logout, profile switch, or explicit reset should clear session memory.
- Durable memory must require separate user consent and a deletion path.

Reset and clear behavior:

- `clear session memory`
- `forget this conversation`
- `cancel this task`
- `what do you remember?`
- logout/profile switch
- app refresh if using browser-session memory only

## Sensitive Data Handling

### Contacts

Do not store full contact lists in session memory. Store only:

- a redacted target label
- an unresolved contact role such as `doctor`, `seller`, or `workforce support`
- a candidate count
- a safe next step

Do not store raw phone numbers unless explicitly entered for a current, confirmed flow and protected by redaction rules.

### Phone Numbers

Avoid storing phone numbers in session context. If required for a future pending task, store:

- redacted phone display, such as `+1 *** *** 0101`
- normalized metadata only after explicit user input
- expiration time
- audit requirement

### Location

Do not store precise location without permission. Session memory may store:

- broad location intent, such as `map help requested`
- permission-needed status
- safe next step

Precise coordinates require permission and should not be retained beyond the active flow unless explicitly approved.

### Medical And Health Data

Do not store raw symptoms, diagnosis-like text, health notes, or medical images in session memory by default. Store only:

- domain flag: `health`
- permission/confirmation status
- non-diagnostic safe summary
- emergency escalation note when appropriate

Nexus must not create medical diagnosis memory.

### Payment And Marketplace Data

Do not store payment credentials, card data, wallet data, account details, or transaction instructions. Pending task state may store:

- `domain: "marketplace"`
- `risk: "high"`
- `status: "blocked"` or `confirmation_required`
- safe summary
- next safe step

Marketplace browse context may be low-risk; buy/sell/payment context remains high-risk.

### Account/Profile Changes

Do not store credentials, identity documents, or account tokens. Account and identity flows require future role/permission/audit review.

### Provider Information

Provider references should be stored as safe labels or IDs only. Provider adapters must not be called from session memory or pending task state.

### Minors Or Vulnerable Users

Minors, emergency, health, and vulnerable-user contexts should use:

- shortest retention
- broad redaction
- emergency guidance boundaries
- no automated dispatch

### Free-Text User Notes

Free-text notes may contain sensitive data. Early session memory should prefer generated safe summaries over raw text.

## Relationship To Policy And Planner

Session memory cannot override policy.

Pending task state cannot override policy.

Pending task state cannot override planner safety.

Before any future action:

1. Re-classify the current intent.
2. Re-match tool metadata.
3. Re-run the policy engine.
4. Rebuild or revalidate the plan.
5. Check role and permission state.
6. Show confirmation where required.
7. Write audit lifecycle events.
8. Call an approved provider adapter only after all gates pass.

Plan metadata can seed a pending task summary, but it cannot become execution authority.

## Future Pending Action Lifecycle

Future-facing lifecycle:

```text
observed
  -> proposed
  -> waiting_for_clarification
  -> waiting_for_permission
  -> waiting_for_confirmation
  -> ready_for_execution_adapter
  -> executed
  -> failed
  -> cancelled
  -> expired
```

This lifecycle is not enabled in 11G1. Early implementation should stop at `observed`, `context_only`, or non-executing pending task previews.

`ready_for_execution_adapter` must not be used until a later reviewed phase adds:

- confirmation UI
- permission adapters
- audit logging
- provider adapters
- role authorization
- cancellation semantics

## Example Scenarios

### Call John

Can be remembered in session:

- domain: `communications`
- intent ID
- high-risk flag
- unresolved contact target: `John`
- safe summary: `User asked about calling John.`
- next safe step: ask which John or ask for a phone number.

Must not be stored:

- full contact list
- raw phone number without explicit input and redaction
- provider launch URL
- call handoff payload

Pending task:

- status: `needs_clarification`
- `canExecute: false`
- `executionAuthority: "none"`
- audit required later

No execution occurs because contact resolution, provider selection, explicit confirmation, and audit are not complete.

### Nexus, Use My Location

Can be remembered:

- domain: `map`
- permission needed: `location`
- safe next step: ask for user permission before using location.

Must not be stored:

- precise coordinates before permission
- location history
- background tracking state

Pending task:

- status: `permission_required`
- `canExecute: false`
- `executionAuthority: "none"`

No execution occurs because session memory cannot request browser permissions.

### Open Video For Provider To Show Injury

Can be remembered:

- domain: `health`
- sensitive flag: `health`
- permission needed: `camera`
- plan status: permission required
- safe summary: `User asked about showing an injury through local preview/handoff workflow.`

Must not be stored:

- images
- video frames
- diagnosis text
- raw medical details
- provider room credentials

Pending task:

- status: `permission_required`
- `canExecute: false`
- `executionAuthority: "none"`

No execution occurs because camera and provider handoff require explicit user action and permission.

### Buyer Pay

Can be remembered:

- domain: `marketplace`
- risk: `high`
- status: blocked or confirmation required
- safe summary: `User mentioned buyer payment.`

Must not be stored:

- card details
- wallet data
- bank information
- payment intent
- transaction authorization

Pending task:

- status: `blocked` or `confirmation_required`
- `canExecute: false`
- `executionAuthority: "none"`

No execution occurs because payments require future payment architecture, confirmation, audit, provider integration, and compliance review.

### Help Me Find Agriculture Training

Can be remembered:

- domain: `learning`
- tool ID: `workforce.training`
- safe topic: `agriculture training`
- last safe step: show training guidance

Must not be stored:

- private education history unless user consents
- durable profile preferences by default

Pending task:

- status: `context_only`
- `canExecute: false`
- `executionAuthority: "none"`

No execution occurs; existing routers may still provide low-risk guidance or navigation.

### Show Me Farm Jobs

Can be remembered:

- domain: `workforce`
- tool ID: `workforce.job_pathways`
- safe topic: `farm jobs`
- last safe step: show job pathway guidance

Must not be stored:

- applications
- resume details
- identity documents
- employer contact actions

Pending task:

- status: `context_only`
- `canExecute: false`
- `executionAuthority: "none"`

No job application or employer contact occurs.

### I Need Help With Crop Issues

Can be remembered:

- domain: `agriculture`
- tool ID: `agriculture.help`
- safe topic: `crop issues`
- safe summary: `User is asking for crop support.`

Must not be stored:

- precise field location without permission
- drone imagery
- paid provider dispatch
- marketplace transaction instructions

Pending task:

- status: `context_only` or `needs_clarification`
- `canExecute: false`
- `executionAuthority: "none"`

No drone scan, provider dispatch, marketplace action, or location access occurs.

## User Controls

Future user controls should include:

- clear session memory
- cancel pending task
- review pending tasks
- approve or decline future confirmation
- revoke permission
- ask what Nexus remembers
- reset conversation context
- clear sensitive context only
- export/delete durable memory if durable memory is ever added

User controls should be visible and plain-language. They should not require developer/debug mode.

## QA Plan For 11G2

Expected QA tests:

- memory model exists and is importable
- session context object has required fields
- pending task object has required fields
- `canExecute` is always false
- `executionAuthority` is always `"none"`
- no pending task contains execution handlers, callbacks, adapters, route directives, provider URLs, phone numbers to dial, payment intents, message payloads, or permission triggers
- sensitive data is redacted or excluded
- pending task state does not trigger UI behavior
- session memory does not persist unexpectedly
- memory clears on reset/logout/profile switch where applicable
- contact/call permission QA remains green
- provider handoff boundary QA remains green
- confirmation UI contract QA remains green
- audit log architecture QA remains green
- policy/planner/plan observation QA remains green

Representative prompts:

- `Help me find agriculture training`
- `Teach me how irrigation works`
- `Show me farm jobs`
- `Browse AgriTrade`
- `I need help with crop issues`
- `Nexus, use my location`
- `Call John`
- `Call the provider`
- `open video for provider to show injury`
- `Buyer Pay`

Each prompt should create only non-executing memory/task metadata in early phases.

## Implementation Recommendation

Recommended next phase:

`11G2 - Session Memory Model Skeleton`

Likely files:

- `public/nexus-session-memory.js`
- `scripts/nexus-session-memory-qa.js`
- `docs/NEXUS_SESSION_MEMORY_MODEL.md`
- package alias `qa:nexus-session-memory`
- possible `scripts/qa-suite.js` update

11G2 should create importable model helpers only. It should not wire memory into runtime command handling yet unless explicitly scoped as observation-only and covered by QA.

Initial helper APIs could include:

- `createNexusSessionContext(input)`
- `buildNexusPendingTask(plan, policyDecision, context)`
- `validateNexusSessionContext(context)`
- `validateNexusPendingTask(task)`
- `redactNexusMemoryValue(value, sensitivity)`
- `getNexusPendingTaskStatuses()`

All early pending tasks must keep:

- `canExecute: false`
- `executionAuthority: "none"`

## Commit Boundary For 11G1

This document is the Phase 11G1 artifact. It does not change runtime behavior and should not require updates to `server.js`, `public/app.js`, provider code, native bridges, marketplace behavior, health/telehealth behavior, call behavior, music behavior, map behavior, or existing routers.
