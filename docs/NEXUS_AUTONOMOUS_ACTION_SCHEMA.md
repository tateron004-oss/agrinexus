# Nexus Autonomous Action Schema

Phase: 12B autonomous action schema QA
Status: schema/specification and local-safe QA only

## Purpose And Scope

This document defines a future-safe metadata contract for Nexus autonomous action decisions. It is a schema specification for future planner/executor phases. It is not execution authority and it does not enable live autonomous execution.

The schema is intended to make every possible Nexus action explicit before any future executor or provider adapter is allowed to act. A valid autonomous action object can describe an intent, selected tool, risk tier, missing inputs, permissions, confirmation needs, audit policy, and result state. It cannot by itself place calls, send messages, share location, make purchases, submit forms, alter health workflow state, open camera, change account data, trigger emergency dispatch, or contact providers.

Required safety posture:

- planner metadata is not execution authority.
- selectedToolId must not directly execute real actions.
- agentAction must not directly execute real actions.
- executionLevel must be policy-checked before any execution.
- riskLevel must be policy-checked before any execution.
- confirmationRequired must be honored.
- provider handoff must be explicit.
- missingInputs must block execution.
- restricted actions must not execute.
- auditPolicy is required for medium, high, and restricted actions.
- resultState must not claim success unless an allowed executor/provider reports success.

This phase creates only documentation and static QA around the schema. It preserves Phase 11J Jarvis-style Standard User behavior and Phase 12A autonomous execution architecture behavior.

## Relationship To Phase 12A

Phase 12A defined the Nexus Autonomous Execution Architecture, including the Action Decision Object, autonomous execution levels, planner vs executor boundary, risk classification, confirmation contract, provider adapter model, and audit/evidence model.

This Phase 12B schema is the concrete metadata contract for that Action Decision Object. It gives future phases a shared vocabulary for describing what Nexus proposes, what it is allowed to do, what is missing, what must be confirmed, what provider boundary applies, and what result state is safe to show.

The Phase 12A rule still controls every future implementation:

```text
The planner is not an executor.
```

The planner may produce or enrich a schema-shaped action object. It must never directly invoke real-world actions. Future executors must accept only policy-checked, permission-checked, confirmation-checked, audit-ready action objects.

## Canonical Autonomous Action Object

Future runtime implementations should converge on an object shaped like this:

```json
{
  "schemaVersion": "nexus-autonomous-action.v1",
  "actionId": "act_01HWORKFORCE123",
  "intent": {
    "rawText": "Nexus, teach me how irrigation works.",
    "normalizedIntent": "learning.irrigation_guidance",
    "confidence": 0.87
  },
  "selectedToolId": "learning.start",
  "executionLevel": 2,
  "riskLevel": "low",
  "domain": "learning",
  "userVisibleLabel": "Learning",
  "summary": "Open a learning review path about irrigation basics.",
  "requiredInputs": ["topic"],
  "missingInputs": [],
  "requiredPermissions": [],
  "confirmationRequired": false,
  "confirmationText": "",
  "cancelPath": "not_now",
  "providerCandidates": [],
  "executionBoundary": "navigation_only",
  "auditPolicy": {
    "required": false,
    "eventTypes": [],
    "redaction": "standard"
  },
  "safetyNotes": [
    "Low-risk internal learning navigation only.",
    "Does not mark lesson completion or enroll the user."
  ],
  "resultState": "proposed",
  "failureReason": null
}
```

### Required Fields

- `schemaVersion`
- `actionId`
- `intent`
- `selectedToolId`
- `executionLevel`
- `riskLevel`
- `domain`
- `userVisibleLabel`
- `summary`
- `requiredInputs`
- `missingInputs`
- `requiredPermissions`
- `confirmationRequired`
- `confirmationText`
- `cancelPath`
- `providerCandidates`
- `executionBoundary`
- `auditPolicy`
- `safetyNotes`
- `resultState`
- `failureReason`

### Optional Fields

Future phases may add optional fields if they remain additive and non-authoritative unless an executor explicitly validates them:

- `sourceSurface`
- `role`
- `locale`
- `policyDecision`
- `plannerObservation`
- `sessionContextSummary`
- `previewRoute`
- `draftPayloadSummary`
- `expiresAt`
- `traceId`

Optional fields must not contain provider credentials, raw health details, full phone numbers, payment data, account secrets, exact location, emergency contact details, or executable provider payloads.

## Field Definitions

| Field | Type | Required | Purpose | Safe Default | Validation Rule | Example |
| --- | --- | --- | --- | --- | --- | --- |
| `schemaVersion` | string | yes | Identifies the schema contract. | `nexus-autonomous-action.v1` | Must match a known schema version. | `nexus-autonomous-action.v1` |
| `actionId` | string | yes | Stable identifier for the proposed action object. | generated opaque id | Must not encode private user data. | `act_01HWORKFORCE123` |
| `intent` | object | yes | Describes raw and normalized user intent. | `{ "rawText": "", "normalizedIntent": "unknown", "confidence": 0 }` | Must be descriptive only and not executable. | `{ "normalizedIntent": "marketplace.browse" }` |
| `selectedToolId` | string or null | yes | Canonical tool metadata selected by the classifier/planner. | `null` | Must not directly execute real actions. | `marketplace.agritrade` |
| `executionLevel` | number | yes | Phase 12A execution level from 0 through 7. | `0` | Must be policy-checked before any execution. | `2` |
| `riskLevel` | string | yes | Risk tier for permission and confirmation policy. | `restricted` when unknown | Must be one of `low`, `medium`, `high`, `restricted`; must be policy-checked. | `low` |
| `domain` | string | yes | Product domain or module. | `unknown` | Must not imply permission or execution. | `learning` |
| `userVisibleLabel` | string | yes | Human-readable category shown to users. | `Review` | Must be compact and non-authoritative. | `Marketplace` |
| `summary` | string | yes | Safe visible description of what is proposed. | `Nexus can review options.` | Must not claim success before allowed execution completes. | `Browse AgriTrade options.` |
| `requiredInputs` | string[] | yes | Inputs needed before the action can advance. | `[]` | Must list all material inputs for medium/high/restricted actions. | `["recipient", "phoneNumber"]` |
| `missingInputs` | string[] | yes | Inputs not yet supplied. | same as `requiredInputs` when unknown | Non-empty missingInputs must block execution. | `["phoneNumber"]` |
| `requiredPermissions` | string[] | yes | Permissions needed before advancing. | `[]` | Must include camera/location/contact/health/payment permissions when relevant. | `["location"]` |
| `confirmationRequired` | boolean | yes | Whether explicit confirmation is required. | `true` for unknown or non-low risk | Must be honored before execution or provider handoff. | `true` |
| `confirmationText` | string | yes | Exact user-facing confirmation prompt. | `""` | Required when `confirmationRequired` is true. | `Call Maria using native phone?` |
| `cancelPath` | string | yes | Safe cancellation option. | `not_now` | Must leave the action unexecuted. | `cancel_call` |
| `providerCandidates` | object[] | yes | Possible bounded provider handoff choices. | `[]` | Must not open providers before confirmation. | `[{ "providerId": "native-phone" }]` |
| `executionBoundary` | string | yes | Maximum action boundary currently allowed. | `blocked` | Must be one of the allowed execution boundary values. | `provider_handoff_only` |
| `auditPolicy` | object | yes | Audit requirements before/after action advancement. | `{ "required": false }` for low risk | Required for medium, high, and restricted actions. | `{ "required": true }` |
| `safetyNotes` | string[] | yes | Human/developer safety notes for the action. | `[]` | Must explain restricted or high-risk boundaries. | `["No call without confirmation."]` |
| `resultState` | string | yes | Current state of the proposed action. | `proposed` | Must be one of the allowed result state values. | `confirmation_pending` |
| `failureReason` | string or null | yes | Safe failure reason when blocked/failed. | `null` | Must be one of the allowed failure reason values when present. | `missing_required_input` |

## Execution Levels

`executionLevel` must reference the Phase 12A levels and must be policy-checked before any execution.

- Level 0: Conversation Only
- Level 1: Suggestion / Recommendation
- Level 2: Navigation / Review Option
- Level 3: Staged Action
- Level 4: Confirmation-Gated Action
- Level 5: Provider Handoff
- Level 6: Controlled Execution
- Level 7: Delegated Multi-Step Autonomy

Safe default:

```json
{ "executionLevel": 0, "executionBoundary": "conversation_only" }
```

Rules:

- Levels 0 through 2 can be low-risk when no permissions, private data, provider handoff, or data mutation are involved.
- Level 3 creates reviewable state only; it cannot execute.
- Level 4 requires explicit confirmation.
- Level 5 is a provider handoff boundary, not a completed action.
- Level 6 requires future executor, policy, permission, confirmation, provider, and audit support.
- Level 7 is future-only and must remain unavailable until delegated autonomy has separate governance.

## Risk Levels

Allowed `riskLevel` values:

- `low`
- `medium`
- `high`
- `restricted`

`riskLevel` must be policy-checked before any execution.

Guidance:

- `low`: education, browse-only review, internal navigation, non-sensitive explanation.
- `medium`: drafts, staging, non-final forms, low-impact workflow preparation.
- `high`: calls, messages, provider handoff, location, camera, health, marketplace transaction, job application, identity/account actions, payment-adjacent actions.
- `restricted`: medical diagnosis, emergency dispatch, payment execution, credential operations, direct account changes, direct provider communication without confirmation, autonomous data disclosure, unsupported provider actions.

Unknown or ambiguous actions should default to `restricted` or `high` and require clarification.

## Execution Boundary Values

Allowed `executionBoundary` values:

- `conversation_only`
- `suggestion_only`
- `navigation_only`
- `staged_only`
- `confirmation_required`
- `provider_handoff_only`
- `controlled_execution`
- `blocked`

Boundary definitions:

- `conversation_only`: answer or clarify only.
- `suggestion_only`: display recommendation metadata only.
- `navigation_only`: user-clicked internal review/navigation only.
- `staged_only`: create a reviewable draft/pending action without execution.
- `confirmation_required`: explicit confirmation is required before advancing.
- `provider_handoff_only`: the app may hand off to a user-approved provider boundary; provider_handoff_only does not mean the app executed the action.
- `controlled_execution`: future-only policy-approved executor pathway.
- `blocked`: cannot proceed because of policy, risk, missing inputs, missing permission, unsupported provider, or restricted action.

## Required Safety Rules

Every future schema validator and executor must enforce these rules:

1. Planner metadata is not execution authority.
2. selectedToolId must not directly execute real actions.
3. agentAction must not directly execute real actions.
4. executionLevel must be policy-checked.
5. riskLevel must be policy-checked.
6. confirmationRequired must be honored.
7. provider handoff must be explicit.
8. missingInputs must block execution.
9. restricted actions must not execute.
10. auditPolicy is required for medium, high, and restricted actions.
11. resultState must not claim success unless an allowed executor/provider reports success.
12. Provider credentials must never be embedded in action metadata.
13. The schema must not be treated as a hidden execution queue.
14. Vague acknowledgments such as `okay` must not confirm high-risk actions.
15. Cancel and Not now paths must leave actions unexecuted.

## Required Domain Examples

### A. Learning Navigation

Example prompt:

```text
Nexus, teach me how irrigation works.
```

Expected action:

```json
{
  "selectedToolId": "learning.start",
  "executionLevel": 1,
  "riskLevel": "low",
  "domain": "learning",
  "userVisibleLabel": "Learning",
  "summary": "Suggest an irrigation learning path.",
  "requiredInputs": ["topic"],
  "missingInputs": [],
  "requiredPermissions": [],
  "confirmationRequired": false,
  "confirmationText": "",
  "cancelPath": "not_now",
  "providerCandidates": [],
  "executionBoundary": "suggestion_only",
  "auditPolicy": { "required": false },
  "resultState": "proposed",
  "failureReason": null
}
```

Must not:

- pretend the user completed training;
- enroll the user automatically;
- issue certificates;
- mutate learning records without future confirmation and audit.

### B. Workforce / Jobs Navigation

Example prompt:

```text
Nexus, show me farm jobs.
```

Expected action:

```json
{
  "selectedToolId": "workforce.job_pathways",
  "executionLevel": 2,
  "riskLevel": "low",
  "domain": "jobs",
  "userVisibleLabel": "Jobs",
  "summary": "Open or preview job pathway options.",
  "requiredInputs": [],
  "missingInputs": [],
  "requiredPermissions": [],
  "confirmationRequired": false,
  "confirmationText": "",
  "cancelPath": "not_now",
  "providerCandidates": [],
  "executionBoundary": "navigation_only",
  "auditPolicy": { "required": false },
  "resultState": "proposed",
  "failureReason": null
}
```

Must not:

- submit job applications;
- share user profile data;
- contact employers;
- claim application success.

### C. Marketplace Review

Example prompt:

```text
Nexus, browse AgriTrade.
```

Expected action:

```json
{
  "selectedToolId": "marketplace.agritrade",
  "executionLevel": 2,
  "riskLevel": "low",
  "domain": "marketplace",
  "userVisibleLabel": "Marketplace",
  "summary": "Review AgriTrade marketplace options.",
  "requiredInputs": [],
  "missingInputs": [],
  "requiredPermissions": [],
  "confirmationRequired": false,
  "confirmationText": "",
  "cancelPath": "not_now",
  "providerCandidates": [],
  "executionBoundary": "navigation_only",
  "auditPolicy": { "required": false },
  "resultState": "proposed",
  "failureReason": null
}
```

Must not:

- buy;
- sell;
- make offers;
- reserve items;
- disclose payment data;
- contact sellers automatically.

### D. Contact Call Staging

Example prompt:

```text
Nexus, call Maria.
```

Expected action:

```json
{
  "selectedToolId": "communications.phone",
  "executionLevel": 3,
  "riskLevel": "high",
  "domain": "communications",
  "userVisibleLabel": "Call",
  "summary": "Resolve Maria and prepare a confirmed call handoff.",
  "requiredInputs": ["contact", "phoneNumber", "provider"],
  "missingInputs": ["phoneNumber"],
  "requiredPermissions": ["contact_call_confirmation"],
  "confirmationRequired": true,
  "confirmationText": "Call Maria using the selected provider?",
  "cancelPath": "cancel_call",
  "providerCandidates": [{ "providerId": "native-phone", "boundary": "provider_handoff_only" }],
  "executionBoundary": "staged_only",
  "auditPolicy": { "required": true, "eventTypes": ["call_staged", "call_confirmed", "provider_handoff"] },
  "resultState": "blocked_missing_inputs",
  "failureReason": "missing_required_input"
}
```

Must not:

- place the call without explicit confirmation;
- open native phone, WhatsApp, Telegram, browser tel, Twilio, SMS, or email from the first utterance;
- treat `okay` as high-risk confirmation.

### E. Message Staging

Example prompt:

```text
Nexus, send a message.
```

Expected action:

```json
{
  "selectedToolId": "communications.message",
  "executionLevel": 3,
  "riskLevel": "high",
  "domain": "communications",
  "userVisibleLabel": "Message",
  "summary": "Prepare a message draft after recipient and message body are known.",
  "requiredInputs": ["recipient", "messageBody", "provider"],
  "missingInputs": ["recipient", "messageBody", "provider"],
  "requiredPermissions": ["message_confirmation"],
  "confirmationRequired": true,
  "confirmationText": "Send this message to the selected recipient?",
  "cancelPath": "cancel_message",
  "providerCandidates": [],
  "executionBoundary": "staged_only",
  "auditPolicy": { "required": true, "eventTypes": ["message_staged", "message_confirmed", "provider_handoff"] },
  "resultState": "blocked_missing_inputs",
  "failureReason": "missing_required_input"
}
```

Must not:

- send a message without confirmation;
- infer a private recipient without clarification;
- open a provider before confirmation.

### F. Map / Location Staging

Example prompt:

```text
Nexus, find my location.
```

Expected action:

```json
{
  "selectedToolId": "maps.location",
  "executionLevel": 4,
  "riskLevel": "high",
  "domain": "maps",
  "userVisibleLabel": "Location",
  "summary": "Ask for permission before using location.",
  "requiredInputs": [],
  "missingInputs": [],
  "requiredPermissions": ["location"],
  "confirmationRequired": true,
  "confirmationText": "Allow Nexus to request your location from the browser?",
  "cancelPath": "cancel_location",
  "providerCandidates": [{ "providerId": "browser-geolocation", "boundary": "confirmation_required" }],
  "executionBoundary": "confirmation_required",
  "auditPolicy": { "required": true, "eventTypes": ["permission_requested", "permission_granted_or_denied"] },
  "resultState": "blocked_permission_required",
  "failureReason": "permission_not_granted"
}
```

Must not:

- access exact location without permission;
- share exact location without explicit user awareness;
- treat map browsing as location consent.

### G. Telehealth / Health Workflow Boundary

Example prompt:

```text
Nexus, I need medical help.
```

Expected action:

```json
{
  "selectedToolId": "health.telehealth",
  "executionLevel": 3,
  "riskLevel": "high",
  "domain": "health",
  "userVisibleLabel": "Health",
  "summary": "Offer safe health intake or emergency guidance without diagnosis.",
  "requiredInputs": ["healthConcern"],
  "missingInputs": [],
  "requiredPermissions": ["health_workflow_confirmation"],
  "confirmationRequired": true,
  "confirmationText": "Start the local health intake workflow?",
  "cancelPath": "cancel_health_workflow",
  "providerCandidates": [],
  "executionBoundary": "confirmation_required",
  "auditPolicy": { "required": true, "eventTypes": ["health_workflow_offered", "health_workflow_confirmed"] },
  "resultState": "confirmation_pending",
  "failureReason": null
}
```

Must not:

- diagnose;
- alter health workflow state without confirmation;
- open camera;
- start telehealth;
- call a provider;
- claim emergency dispatch.

### H. Agriculture Support Request

Example prompt:

```text
Nexus, I need help with crop issues.
```

Expected action:

```json
{
  "selectedToolId": "agriculture.help",
  "executionLevel": 1,
  "riskLevel": "low",
  "domain": "agriculture",
  "userVisibleLabel": "Agriculture Help",
  "summary": "Review crop support guidance and field support options.",
  "requiredInputs": [],
  "missingInputs": [],
  "requiredPermissions": [],
  "confirmationRequired": false,
  "confirmationText": "",
  "cancelPath": "not_now",
  "providerCandidates": [],
  "executionBoundary": "suggestion_only",
  "auditPolicy": { "required": false },
  "resultState": "proposed",
  "failureReason": null
}
```

Must not:

- submit private farm data;
- contact providers;
- upload images;
- open camera;
- create field records without confirmation.

If the user asks to submit, call, message, upload an image, or contact an expert, the object must move to medium/high risk and require staging, permissions, confirmation, and audit.

## Result State Model

Allowed `resultState` values:

- `proposed`
- `blocked_missing_inputs`
- `blocked_permission_required`
- `staged`
- `confirmation_pending`
- `cancelled`
- `provider_handoff_ready`
- `provider_handoff_opened`
- `execution_blocked`
- `completed`
- `failed`

Rules:

- `proposed` is the safe default for new low-risk metadata.
- `blocked_missing_inputs` is required when missingInputs is non-empty and execution would need those fields.
- `blocked_permission_required` is required when a permission is needed and not granted.
- `staged` means reviewable state exists, not execution.
- `confirmation_pending` means explicit confirmation is still required.
- `cancelled` means the user chose cancel or Not now.
- `provider_handoff_ready` means a confirmed handoff could be prepared but has not opened.
- `provider_handoff_opened` means the user-approved provider boundary was opened; it does not prove the external provider completed the action.
- `execution_blocked` means policy, risk, audit, or safety rules prevented progress.
- `completed` is only allowed for low-risk internal UI actions or future policy-approved controlled execution.
- `failed` must include a safe failureReason.

Plain-language rule: completed is only allowed for low-risk internal UI actions or future policy-approved controlled execution.

`completed` must never be used for external calls, messages, payments, location sharing, health actions, emergency actions, marketplace transactions, account changes, or provider work unless a future allowed executor/provider reports success and audit requirements are satisfied.

## Failure Reason Model

Allowed `failureReason` values include:

- `missing_required_input`
- `permission_not_granted`
- `confirmation_not_granted`
- `duplicate_contact_match`
- `provider_unavailable`
- `unsupported_action`
- `restricted_action`
- `policy_blocked`
- `audit_required`
- `unknown_error`

Failure reasons must be safe to display or log in redacted form. They must not include raw phone numbers, credentials, exact addresses, raw health details, payment details, account secrets, emergency contact details, marketplace buyer/seller private data, or provider credentials.

## Future Runtime Placement Guidance

This phase intentionally does not add live runtime schema validators. If later phases implement runtime constants or validators, the safest placement would be:

- `public/nexus-autonomous-action-schema.js` for shared, static, browser-safe constants and validators;
- `scripts/nexus-autonomous-action-schema-runtime-qa.js` for static and fixture-based runtime validation;
- server-side adapter validation only after provider handoff, confirmation, audit, and permission contracts are implemented;
- no coupling to `selectedToolId`, `agentAction`, planner output, or session memory as execution authority.

Future runtime validators should:

1. normalize unknown risk to `restricted`;
2. normalize unknown executionBoundary to `blocked`;
3. reject missing actionId, intent, riskLevel, executionLevel, executionBoundary, resultState, or auditPolicy;
4. reject medium/high/restricted objects that lack auditPolicy;
5. reject execution when missingInputs is non-empty;
6. reject provider handoff when confirmationRequired is true and confirmation has not been granted;
7. reject any direct execution from planner, selectedToolId, agentAction, or session memory;
8. redact sensitive fields before observation, logging, or UI display.

## Phase 12B Non-Implementation Boundary

Phase 12B intentionally leaves these unimplemented:

- live autonomous execution;
- provider adapters;
- call placement;
- message sending;
- location sharing;
- purchases or marketplace transactions;
- form submission;
- health workflow mutation;
- camera activation;
- account/profile mutation;
- emergency dispatch;
- runtime schema authority;
- planner-to-executor handoff;
- selectedToolId execution;
- agentAction execution;
- session-memory execution authority.

Recommended next phase:

```text
Phase 12C: Planner-To-Action Decision Mapper
```

That phase should remain non-executing unless separately approved, and should map existing planner/policy metadata into schema-shaped preview objects only.
