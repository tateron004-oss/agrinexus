# Nexus Policy Engine Model

Phase: 11D

This document defines the first Nexus policy/risk engine skeleton. The policy engine reads intent classification and tool registry metadata, then returns an advisory decision. It does not execute actions.

## Purpose

The policy engine answers the safety question before Nexus plans or acts:

- Is this safe to answer directly?
- Is this low-risk preview/routing only?
- Does this require browser/device permission?
- Does this require explicit confirmation?
- Is this blocked?
- Is this unsupported or not implemented?
- Should a future phase prepare a pending action?

In Phase 11D the answer is metadata only. Existing routers remain authoritative.

## Relationship To Intent Classifier

Phase 11B introduced `public/nexus-intent-classifier.js`.

The policy engine can accept either:

- raw user text, which it classifies through the intent classifier, or
- an existing intent classification object.

The intent classifier determines likely domain, category, risk, action type, selectedToolId, and missing/sensitive context. The policy engine decides the safe next boundary for that classification.

## Relationship To Tool Registry

Phase 11C introduced `public/nexus-tool-registry.js`.

The policy engine can look up matching metadata by:

- `selectedToolId`
- `supportedIntentIds`
- explicit tool metadata passed by a caller

The registry describes tool risk and metadata. The policy engine turns that metadata into an advisory decision.

## Relationship To Existing Routers

Existing routers remain authoritative:

- backend `/api/agent/command`
- frontend typed and voice routing
- workflow modals
- call confirmation and handoff paths
- map/location permission paths
- health/telehealth/video paths
- marketplace and AgriTrade paths
- music controls
- learning routes

The policy engine does not replace those routes. It does not call them. It does not open UI. It does not stage pending actions.

## Policy Decision Schema

Every policy decision includes:

```js
{
  decisionId: "policy.learning.training.find.workforce.training",
  intentId: "learning.training.find",
  toolId: "workforce.training",
  domain: "learning",
  risk: "low",
  actionType: "preview_or_route",
  status: "allow_route",
  allowed: true,
  requiresPermission: false,
  permissionType: "none",
  requiresConfirmation: false,
  confirmationType: "none",
  blocked: false,
  blockReason: "",
  clarificationRequired: false,
  clarificationPrompt: "",
  previewOnly: true,
  canRoute: true,
  canExecute: false,
  executionStatus: "preview_only",
  nextSafeStep: "Existing safe UI may preview or route through current routers.",
  policySource: "nexus-policy-engine.v1",
  notes: []
}
```

Required fields:

- `decisionId`
- `intentId`
- `toolId`
- `domain`
- `risk`
- `actionType`
- `status`
- `allowed`
- `requiresPermission`
- `permissionType`
- `requiresConfirmation`
- `confirmationType`
- `blocked`
- `blockReason`
- `clarificationRequired`
- `clarificationPrompt`
- `previewOnly`
- `canRoute`
- `canExecute`
- `executionStatus`
- `nextSafeStep`
- `policySource`
- `notes`

## Status Values

`allow_answer`

Safe answer-only guidance.

`allow_preview`

Safe low-risk preview. No execution.

`allow_route`

Safe low-risk route through existing routers. The policy engine itself still does not route.

`require_permission`

The request needs browser, device, role, provider, medical, account, phone, contact, or external-app permission.

`require_confirmation`

The request needs explicit confirmation before any future staged action.

`clarify`

Nexus needs missing information or a safer target.

`blocked`

The capability is blocked until a future safety phase.

`unsupported`

The request is not supported.

`not_implemented`

The capability is documented but has no runtime implementation adapter.

## Risk Handling Rules

Low-risk:

- may return `allow_answer`, `allow_preview`, or `allow_route`
- must remain preview-only
- must not execute

Controlled:

- should require clarification, review, or confirmation depending on metadata
- must not execute

Sensitive:

- must require permission or be blocked/not implemented
- includes location, camera, health, medical, contacts, provider, and privacy-sensitive contexts
- must not execute

High:

- must require confirmation, permission, clarification, blocked, unsupported, or not implemented
- includes calls, messages, payments, account changes, emergency escalation, provider handoff, external apps, and future autonomy
- must not execute

## Why `canExecute` Is Always False

Phase 11D is a skeleton only. `canExecute` is always false because Nexus does not yet have the full runtime sequence required for safe execution:

- task state
- confirmation manager
- permission manager
- provider adapter boundary
- runtime audit logging
- redaction rules
- cancellation/expiry rules
- typed/voice/global equivalence QA

This keeps the engine advisory and prevents accidental autonomy.

## Planning Preparation

The policy engine prepares future planning by producing consistent decisions:

```text
intent classification -> registry metadata -> policy decision -> future planner
```

Future planners can use:

- `status`
- `risk`
- `requiresPermission`
- `requiresConfirmation`
- `clarificationRequired`
- `nextSafeStep`
- `executionStatus`

But the planner must still avoid execution until later phases add confirmation and audit runtime.

## Future Pending Actions And Confirmations

Later phases may use policy decisions to decide whether to:

- ask a clarifying question
- prepare a preview
- request permission
- create a pending task
- show a confirmation modal
- block unsupported behavior

Even then, policy decisions should not directly execute adapters. Provider adapters should only run after:

```text
policy approval -> pending task -> explicit confirmation -> audit event -> adapter execution
```

## Current Limitations

- The engine is rule/metadata-driven.
- It is advisory only.
- It does not persist state.
- It does not stage pending actions.
- It does not render UI.
- It does not execute adapters.
- It does not replace existing routing.
- It does not perform contact resolution.
- It does not request browser permissions.
- It does not log runtime audit events.

## Phase 11E Readiness

Phase 11E should introduce a pending task state model that can consume policy decisions without executing them. It should remain compatible with existing `agentPendingAction` and should not replace current confirmation gates until QA proves equivalence.
