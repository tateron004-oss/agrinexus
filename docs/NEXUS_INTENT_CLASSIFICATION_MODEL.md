# Nexus Intent Classification Model

Phase: 11B

This document defines the first centralized Nexus intent classification layer. The classifier improves understanding and metadata consistency, but it does not make Nexus autonomous and does not replace existing routers, confirmation gates, provider boundaries, or permission checks.

## Purpose

The classifier gives Nexus a stable way to describe what the user appears to want before future planning or action execution exists. In Phase 11B, its output is metadata and QA contract only.

The classifier may help:

- identify domain and category
- assign a risk tier
- identify low-risk selectedToolId values
- identify missing or controlled actions
- preserve safety boundaries before future planning

The classifier must not:

- execute actions
- open providers
- call or message people
- start payments or marketplace transactions
- activate camera or location
- start telehealth or health workflows
- bypass existing confirmation gates
- make static tool registry metadata runtime-authoritative

## Intent Object Schema

Every classification returns this shape:

```js
{
  id: "learning.training.find",
  domain: "learning",
  category: "training",
  risk: "low",
  actionType: "preview_or_route",
  selectedToolId: "workforce.training",
  requiresConfirmation: false,
  requiresPermission: false,
  confidence: 0.88,
  source: "rule",
  normalizedText: "help me find agriculture training",
  entities: {},
  notes: []
}
```

Required fields:

- `id`
- `domain`
- `category`
- `risk`
- `actionType`
- `selectedToolId`
- `requiresConfirmation`
- `requiresPermission`
- `confidence`
- `source`
- `normalizedText`
- `entities`
- `notes`

## Risk Tiers

`low`

Safe educational, browse, or guidance flows. These may preview options or route through existing safe UI. They must not execute external actions.

`controlled`

Ambiguous or workflow-oriented requests that may need clarification, staging, review, or a later confirmation step.

`sensitive`

Permission-sensitive requests involving location, camera, health, telehealth, or provider video. These require permission and must remain guarded.

`high`

High-impact actions such as calling, messaging, payments, marketplace transactions, account changes, identity actions, emergency escalation, provider handoff, or external execution. These require confirmation and must not execute from raw intent parsing.

## Action Types

`answer`

Nexus can answer conversationally without routing or execution.

`preview_or_route`

Nexus can show a safe preview or route through existing low-risk UI.

`open_workflow`

Reserved for future controlled workflow opening. Phase 11B does not use this to execute.

`request_permission`

The prompt requires user permission before any sensitive capability can proceed.

`request_confirmation`

The prompt requires explicit confirmation before any staged action can proceed.

`provider_handoff`

Reserved for future confirmed provider handoff. The classifier must not launch providers.

`external_execution`

Reserved for future provider adapters after policy, confirmation, and audit logging exist.

`unsupported`

Nexus should clarify or answer safely without executing an action.

## Supported Domains In Phase 11B

- `learning`
- `workforce`
- `agriculture`
- `marketplace`
- `maps`
- `health`
- `communications`
- `account`
- `safety`
- `general`

## Low-Risk Selected Tool IDs

The classifier aligns with existing metadata-only selectedToolId expectations:

- `workforce.training`
- `workforce.job_pathways`
- `workforce.field_support`
- `learning.start`
- `marketplace.agritrade`
- `agriculture.help`

These IDs remain low-risk metadata. They are not execution instructions.

## Guarded Examples

Low-risk examples:

- `Help me find agriculture training`
- `Teach me how irrigation works`
- `Show me farm jobs`
- `Browse AgriTrade`
- `I need help with crop issues`
- `I need field support for my farm`

Sensitive examples:

- `Nexus, use my location`
- `open map`
- `find nearby providers`
- `open camera`
- `open video for provider to show injury`
- `start a telehealth video call`

High-risk examples:

- `Call John`
- `Call the provider`
- `Message the seller`
- `Call Maria on WhatsApp`
- `Pay the buyer`
- `Log into my account`
- `Verify my identity`
- `My baby is not breathing`

Unsupported example:

- `launch the moon tractor`

## Current Runtime Boundary

Phase 11B uses the classifier in two deliberately limited places:

1. Backend agent action metadata can include `intentClassification`.
2. Existing conservative selectedToolId metadata inference can consult the classifier for low-risk prompts.
3. Frontend Standard User local label metadata can consult the classifier before falling back to existing regex behavior.

Existing routers remain authoritative. Confirmation gates remain authoritative. Provider handoff, camera, location, health, telehealth, marketplace, account, payment, and communication behavior does not change.

## Current Limitations

- The classifier is rule-based.
- It does not perform contact lookup.
- It does not resolve duplicate contacts.
- It does not create a planner step.
- It does not stage pending actions.
- It does not execute provider adapters.
- It does not replace voice or backend command routing.
- It does not make the static tool registry runtime-authoritative.

## Future Planner Preparation

Future phases can feed classifier output into:

- context builder
- risk and permission engine
- action registry
- planner
- pending task state
- confirmation manager
- provider adapter layer
- audit logger
- response composer

The required safety sequence remains:

```text
understand intent -> classify risk -> preview safely -> ask for missing data -> stage if allowed -> confirm explicitly -> execute through approved adapter -> log result
```

No future phase should allow raw intent parsing to execute high-risk behavior directly.
