# Nexus Planner-To-Action Decision Mapper

Phase: 12C planner-to-action decision mapper
Status: local-safe metadata mapper and QA only

## 1. Purpose And Scope

This document defines the first local-safe mapper that converts recognized Nexus prompts into structured autonomous action decision metadata. The mapper is designed to support future staging, confirmation, provider handoff, audit, and controlled execution phases without enabling any real-world execution in this phase.

The mapper does not:

- place calls;
- send messages;
- share location;
- request browser geolocation;
- open camera;
- make purchases;
- submit forms;
- alter health workflow state;
- open providers;
- dispatch emergency help;
- add provider credentials;
- mutate app data;
- route the Standard User UI;
- make planner output authoritative.

The mapper only returns schema-shaped metadata that follows `docs/NEXUS_AUTONOMOUS_ACTION_SCHEMA.md`.

## 2. Relationship To Phase 12A And Phase 12B

Phase 12A defined the autonomous execution architecture, including autonomous execution levels, the planner vs executor boundary, risk classification, confirmation, provider adapters, audit/evidence, and the future roadmap.

Phase 12B defined the canonical autonomous action schema, including:

- `actionId`
- `intent`
- `selectedToolId`
- `executionLevel`
- `riskLevel`
- `requiredInputs`
- `missingInputs`
- `requiredPermissions`
- `confirmationRequired`
- `confirmationText`
- `providerCandidates`
- `executionBoundary`
- `auditPolicy`
- `resultState`
- `failureReason`

Phase 12C implements a pure mapper that can produce this metadata for known prompt families. It does not connect the mapper to runtime execution. It does not make `selectedToolId`, `agentAction`, planner metadata, or session memory authoritative.

Required safety rules preserved:

- planner metadata is not execution authority.
- selectedToolId must not directly execute real actions.
- agentAction must not directly execute real actions.
- missingInputs must block execution.
- restricted actions must not execute.
- confirmationRequired must be honored.
- provider_handoff_only must not mean execution happened.

## 3. Mapper Location And Public API

Mapper file:

```text
public/nexus-action-decision-mapper.js
```

Public API:

```js
mapNexusPromptToActionDecision(input, context)
```

The module follows the existing frontend-safe UMD-style pattern used by Nexus planner and classifier utilities. It can be imported by Node QA scripts and can be exposed in a browser later if a future phase explicitly wires it in.

In Phase 12C:

- `index.html` is not changed to load the mapper.
- `public/app.js` does not consume mapper output.
- `server.js` does not consume mapper output.
- No route, DOM, permission, provider, native bridge, confirmation, marketplace, health, camera, location, call, or message behavior is changed.

## 4. Supported Domains And Intents

The mapper supports these prompt families:

| Domain | Example prompt | Expected boundary |
| --- | --- | --- |
| learning | `Nexus, teach me how irrigation works` | low-risk `suggestion_only` or `navigation_only` |
| learning/training | `Nexus, help me find agriculture training` | low-risk `navigation_only` |
| jobs | `Nexus, show me farm jobs` | low-risk `navigation_only` |
| marketplace | `Nexus, browse AgriTrade` | low-risk `navigation_only` browse/review only |
| agriculture | `Nexus, I need help with crop issues` | low-risk `suggestion_only` |
| call | `Nexus, call Maria` | high-risk staged metadata only |
| message | `Nexus, send a message` | high-risk staged metadata only |
| location | `Nexus, find my location` | high-risk permission boundary |
| camera | `Nexus, use my camera` | high-risk permission boundary |
| health | `Nexus, I need medical help` | high-risk confirmation boundary |
| emergency | `Nexus, I have an emergency` | restricted blocked safety boundary |
| marketplace transaction | `Nexus, buy this item` | restricted blocked transaction boundary |

Unknown prompts return conversation-only or clarification metadata and do not execute.

## 5. Action Decision Object Examples

### Learning Navigation

Prompt:

```text
Nexus, teach me how irrigation works
```

Expected metadata:

```json
{
  "actionId": "nexus.learning.guidance.review",
  "intent": {
    "normalizedIntent": "learning.irrigation_guidance"
  },
  "selectedToolId": "learning.start",
  "executionLevel": 1,
  "riskLevel": "low",
  "domain": "learning",
  "userVisibleLabel": "Learning",
  "requiredInputs": [],
  "missingInputs": [],
  "requiredPermissions": [],
  "confirmationRequired": false,
  "confirmationText": "",
  "providerCandidates": [],
  "executionBoundary": "suggestion_only",
  "auditPolicy": { "required": false },
  "resultState": "proposed",
  "failureReason": null
}
```

Must not enroll the user, mark training complete, issue certificates, or mutate learning records.

### Workforce / Jobs Navigation

Prompt:

```text
Nexus, show me farm jobs
```

Expected metadata:

```json
{
  "actionId": "nexus.jobs.review",
  "selectedToolId": "workforce.job_pathways",
  "executionLevel": 2,
  "riskLevel": "low",
  "domain": "jobs",
  "userVisibleLabel": "Review farm jobs",
  "executionBoundary": "navigation_only",
  "confirmationRequired": false,
  "resultState": "proposed"
}
```

Must not submit job applications or share user data.

### Marketplace Review

Prompt:

```text
Nexus, browse AgriTrade
```

Expected metadata:

```json
{
  "actionId": "nexus.marketplace.review",
  "selectedToolId": "marketplace.agritrade",
  "executionLevel": 2,
  "riskLevel": "low",
  "domain": "marketplace",
  "executionBoundary": "navigation_only",
  "resultState": "proposed"
}
```

Must not buy, sell, make offers, reserve items, disclose payment data, or contact sellers.

### Agriculture Support

Prompt:

```text
Nexus, I need help with crop issues
```

Expected metadata:

```json
{
  "actionId": "nexus.agriculture.support.review",
  "selectedToolId": "agriculture.help",
  "executionLevel": 1,
  "riskLevel": "low",
  "domain": "agriculture",
  "executionBoundary": "suggestion_only",
  "resultState": "proposed"
}
```

Must not submit private farm data, open camera, upload images, or contact experts.

### Contact Call Staging

Prompt:

```text
Nexus, call Maria
```

Expected metadata:

```json
{
  "actionId": "nexus.communications.call.stage",
  "selectedToolId": "communications.phone",
  "executionLevel": 3,
  "riskLevel": "high",
  "domain": "communications",
  "requiredInputs": ["contactName", "phoneNumber", "provider"],
  "missingInputs": ["phoneNumber", "provider"],
  "requiredPermissions": ["call_confirmation"],
  "confirmationRequired": true,
  "executionBoundary": "staged_only",
  "resultState": "blocked_missing_inputs",
  "failureReason": "missing_required_input"
}
```

Must not place a call or open native phone, WhatsApp, Telegram, browser tel, Twilio, SMS, or email.

### Message Staging

Prompt:

```text
Nexus, send a message
```

Expected metadata:

```json
{
  "actionId": "nexus.communications.message.stage",
  "selectedToolId": "communications.message",
  "executionLevel": 3,
  "riskLevel": "high",
  "domain": "communications",
  "requiredInputs": ["recipient", "messageBody", "provider"],
  "missingInputs": ["recipient", "messageBody", "provider"],
  "requiredPermissions": ["message_confirmation"],
  "confirmationRequired": true,
  "executionBoundary": "staged_only",
  "resultState": "blocked_missing_inputs"
}
```

Must not send a message, infer a private recipient, or open a provider.

### Map / Location Staging

Prompt:

```text
Nexus, find my location
```

Expected metadata:

```json
{
  "actionId": "nexus.location.permission.stage",
  "selectedToolId": "maps.location",
  "executionLevel": 4,
  "riskLevel": "high",
  "domain": "location",
  "requiredPermissions": ["location"],
  "confirmationRequired": true,
  "executionBoundary": "confirmation_required",
  "resultState": "blocked_permission_required",
  "failureReason": "permission_not_granted"
}
```

Must not request device location or share location.

### Camera / Media Boundary

Prompt:

```text
Nexus, use my camera
```

Expected metadata:

```json
{
  "actionId": "nexus.camera.permission.stage",
  "selectedToolId": "health.camera_preview",
  "executionLevel": 4,
  "riskLevel": "high",
  "domain": "camera",
  "requiredPermissions": ["camera"],
  "confirmationRequired": true,
  "executionBoundary": "confirmation_required",
  "resultState": "blocked_permission_required"
}
```

Must not open camera, capture media, upload media, or start telehealth video.

### Health / Telehealth Boundary

Prompt:

```text
Nexus, I need medical help
```

Expected metadata:

```json
{
  "actionId": "nexus.health.workflow.boundary",
  "selectedToolId": "health.telehealth",
  "executionLevel": 3,
  "riskLevel": "high",
  "domain": "health",
  "requiredPermissions": ["health_workflow_confirmation"],
  "confirmationRequired": true,
  "executionBoundary": "confirmation_required",
  "resultState": "confirmation_pending"
}
```

Must not diagnose, alter health workflow state, open camera, start telehealth, call a provider, or claim emergency dispatch.

### Emergency Boundary

Prompt:

```text
Nexus, I have an emergency
```

Expected metadata:

```json
{
  "actionId": "nexus.health.emergency.blocked",
  "selectedToolId": "health.telehealth",
  "executionLevel": 0,
  "riskLevel": "restricted",
  "domain": "health",
  "executionBoundary": "blocked",
  "resultState": "execution_blocked",
  "failureReason": "restricted_action"
}
```

Must not claim dispatch, call a provider, or perform emergency action.

### Marketplace Transaction Boundary

Prompt:

```text
Nexus, buy this item
```

Expected metadata:

```json
{
  "actionId": "nexus.marketplace.transaction.blocked",
  "selectedToolId": "marketplace.agritrade",
  "executionLevel": 4,
  "riskLevel": "restricted",
  "domain": "marketplace",
  "executionBoundary": "blocked",
  "resultState": "execution_blocked",
  "failureReason": "restricted_action"
}
```

Must not buy, pay, reserve, contact seller, or submit an offer.

## 6. Safety Boundaries

The mapper must preserve these boundaries:

- planner metadata is not execution authority.
- selectedToolId must not directly execute real actions.
- agentAction must not directly execute real actions.
- missingInputs must block execution.
- restricted actions must not execute.
- confirmationRequired must be honored.
- provider_handoff_only is a boundary, not proof that execution happened.
- resultState must not be `completed` for calls, messages, location, camera, health, marketplace transactions, provider handoffs, or external actions.
- completed may only be used for purely internal low-risk metadata-safe actions in future phases, and Phase 12C avoids `completed`.

## 7. Why This Mapper Is Not An Executor

The mapper has no DOM dependencies, no route calls, no provider adapters, no native bridge access, no storage writes, no network calls, and no permission APIs. It returns plain JavaScript objects.

It does not call:

- `fetch`
- provider adapters
- native bridge dispatch
- browser location APIs
- camera/media APIs
- payment APIs
- workflow opening helpers
- confirmation helpers
- pending-action creation helpers

Future code may read mapper output, but must still pass through policy, permissions, confirmation, audit, and provider boundaries before any real-world action.

## 8. Future Integration Path

Future phases may connect this metadata layer in this order:

1. Static and fixture QA for more prompt families.
2. Planner-to-action observation metadata in debug-only paths.
3. Staged action UI that displays safe summaries only.
4. Confirmation UI that requires explicit user action.
5. Provider adapter registry that remains unavailable until confirmation and audit pass.
6. Audit logging before and after action advancement.
7. Low-risk controlled execution prototypes for internal navigation only.

No future phase should make planner output, `selectedToolId`, `agentAction`, or session memory authoritative by itself.

## 9. QA Coverage

Phase 12C adds:

```text
scripts/nexus-planner-action-decision-mapper-qa.js
```

The QA verifies:

- `docs/NEXUS_PLANNER_ACTION_DECISION_MAPPER.md` exists.
- `public/nexus-action-decision-mapper.js` exists.
- `mapNexusPromptToActionDecision` is exported.
- required fields from the Phase 12B schema are present.
- learning, jobs, marketplace, agriculture, call, message, location, camera, and health prompt families are represented.
- representative prompts return safe metadata.
- high-risk and restricted prompts do not return `completed`.
- missingInputs block execution.
- mapper source does not contain provider, DOM, native bridge, permission, network, or workflow execution hooks.

## 10. Known Non-Goals

Phase 12C does not implement:

- visible UI;
- app or server runtime wiring;
- staging UI;
- confirmation UI;
- provider adapters;
- provider handoff;
- autonomous execution;
- call placement;
- message sending;
- location access;
- camera access;
- purchases;
- form submission;
- health workflow mutation;
- emergency dispatch;
- session memory integration;
- audit log persistence.

Recommended next phase:

```text
Phase 12D: Action Decision Observation Metadata
```

That phase should remain observation-only unless explicitly approved otherwise.
