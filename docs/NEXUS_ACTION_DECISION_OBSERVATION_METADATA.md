# Nexus Action Decision Observation Metadata

Phase: 12D action decision observation metadata
Status: hidden/debug-only and QA-only observation

## 1. Purpose And Scope

Action Decision Observation Metadata defines how Nexus can safely observe the output of `mapNexusPromptToActionDecision(...)` without changing the Standard User visible experience and without enabling execution.

This phase answers a narrow question:

```text
Can Nexus produce an actionDecision object for known prompts while keeping it hidden, debug-only, QA-only, non-authoritative, and non-executing?
```

The answer is yes through a local-safe QA-only observation harness. Phase 12D does not add visible UI, does not load the mapper in `index.html`, does not call it from `public/app.js`, and does not call it from `server.js`.

## 2. Relationship To Phase 12A, 12B, And 12C

Phase 12A defined the autonomous execution architecture and planner/executor boundary.

Phase 12B defined the canonical autonomous action object schema, including:

- `actionId`
- `intent`
- `selectedToolId`
- `executionLevel`
- `riskLevel`
- `domain`
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

Phase 12C added `public/nexus-action-decision-mapper.js` and `mapNexusPromptToActionDecision(input, context)`.

Phase 12D observes that mapper output in QA only. It intentionally does not connect observation metadata to staging UI, confirmation modals, provider adapters, app routes, DOM click handlers, browser permissions, native bridge dispatch, or backend execution.

## 3. Why Observation Comes Before Staged UI

Observation comes before staged UI because Nexus needs to prove the metadata layer is safe before any user-facing controls are attached to it.

This phase verifies:

- known prompts produce schema-shaped `actionDecision` metadata;
- low-risk actions remain suggestion/review/navigation metadata only;
- high-risk actions remain staged, permission-gated, or blocked;
- restricted actions remain blocked;
- no actionDecision metadata becomes execution authority;
- Standard User visible behavior remains unchanged.

## 4. What Metadata Is Observed

The observed payload is a wrapper around the mapper output:

```json
{
  "schemaVersion": "nexus-action-decision-observation.v1",
  "visibility": "hidden",
  "surface": "qa-only",
  "debugOnly": true,
  "executionAuthority": "none",
  "canExecute": false,
  "actionDecision": {
    "actionId": "nexus.jobs.review",
    "intent": {
      "normalizedIntent": "jobs_navigation"
    },
    "selectedToolId": "workforce.job_pathways",
    "executionLevel": 2,
    "riskLevel": "low",
    "domain": "jobs",
    "executionBoundary": "navigation_only",
    "resultState": "proposed"
  },
  "safetyNotes": [
    "actionDecision is observation metadata only",
    "planner metadata is not execution authority"
  ]
}
```

The `actionDecision` object contains:

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

## 5. Where Observation Lives

Phase 12D observation lives in:

```text
scripts/nexus-action-decision-observation-qa.js
```

The observation layer is QA-only. It imports the mapper in Node, wraps the returned action decision in hidden/debug-only observation metadata, and asserts safety invariants.

No `public/nexus-action-decision-observation.js` runtime file is added in this phase. That avoids accidental browser loading and keeps Standard User visible behavior unchanged.

## 6. Why Observation Metadata Is Not Execution Authority

The observation metadata is not execution authority because:

- actionDecision is observation metadata only.
- planner metadata is not execution authority.
- selectedToolId must not directly execute real actions.
- agentAction must not directly execute real actions.
- missingInputs must block execution.
- restricted actions must not execute.
- provider_handoff_only must not mean execution happened.
- confirmationRequired must be honored before any future action.
- no resultState completed is allowed for real-world actions.
- no live execution occurs from observation metadata.

The observation payload always keeps:

```json
{
  "visibility": "hidden",
  "surface": "qa-only",
  "debugOnly": true,
  "canExecute": false,
  "executionAuthority": "none"
}
```

## 7. Standard User Visible Behavior Remains Unchanged

Standard User visible behavior remains unchanged because Phase 12D does not:

- load `nexus-action-decision-mapper.js` from `public/index.html`;
- add DOM elements;
- add click handlers;
- add navigation handlers;
- open workflows;
- open confirmation modals;
- request permissions;
- call providers;
- call backend APIs;
- write to storage;
- change Jarvis-style Standard User responses.

No hidden/debug-only low-risk suggestion metadata becomes visible because this observation layer exists only in QA.

## 8. Safety Boundaries

The observation layer must never trigger:

- calls;
- messages;
- browser geolocation;
- camera/media access;
- marketplace purchases;
- seller contact;
- payment;
- form submission;
- health workflow mutation;
- telehealth launch;
- emergency dispatch;
- provider handoff;
- native bridge dispatch;
- account/profile changes.

Required safety language:

- no browser geolocation request.
- no camera opening.
- no call execution.
- no message execution.
- no transaction.
- no emergency dispatch claim.
- no live execution.

## 9. Prompt Coverage

QA observes these prompts:

| Prompt | Expected observation |
| --- | --- |
| `Nexus, teach me how irrigation works` | learning, low risk, `suggestion_only` or `navigation_only`, no confirmation |
| `Nexus, help me find agriculture training` | learning, low risk, no enrollment claim |
| `Nexus, show me farm jobs` | jobs, low risk, `navigation_only`, no application submission |
| `Nexus, browse AgriTrade` | marketplace, low-risk browse, no buy/sell/payment/seller contact |
| `Nexus, I need help with crop issues` | agriculture, low-risk support/review, no provider contact |
| `Nexus, call someone` | communications, high risk, missing contact or phone, no call execution |
| `Nexus, send a message` | communications, high risk, missing recipient/message body, no message execution |
| `Nexus, find my location` | high risk, location permission required, no browser geolocation request |
| `Nexus, use my camera` | high risk, camera permission required, no camera opening |
| `Nexus, buy this item` | high/restricted, blocked or confirmation boundary, no transaction |
| `Nexus, I have an emergency` | high/restricted, blocked boundary, no emergency dispatch claim |

## 10. Future Connection To Staged UI, Confirmation, Provider Adapters, And Audit

Future phases may use the observation work as a basis for:

1. debug-only backend/frontend action decision observation;
2. read-only staged action previews;
3. explicit confirmation UI;
4. provider adapter readiness checks;
5. audit event creation before and after action advancement.

Each future connection must still pass policy, permission, confirmation, provider handoff, audit, and role checks. The observation object must never become a hidden execution queue.

## 11. Non-Goals

Phase 12D does not implement:

- visible staged-action UI;
- confirmation modals;
- provider adapters;
- provider handoff;
- autonomous execution;
- calls;
- messages;
- location sharing;
- browser geolocation request;
- camera opening;
- purchases;
- form submission;
- health workflow mutation;
- emergency dispatch;
- storage persistence;
- server routes;
- native bridge integration.

Recommended next phase:

```text
Phase 12E: Action Decision Staging UI Contract
```

That phase should remain non-executing unless explicitly approved.
