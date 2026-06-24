# Nexus Runtime Tool Registry Model

Phase: 11C

This document defines the runtime-readable Nexus tool registry metadata source. The registry describes Nexus capabilities, risk tiers, permissions, confirmation requirements, supported intents, and execution status. It does not execute tools.

## Purpose

The registry gives Nexus a central metadata source for tools and capabilities. It prepares future planning, policy, confirmation, audit logging, and provider adapter work without changing current behavior.

In Phase 11C, the registry may be imported by Node QA and loaded in the browser for metadata availability. Existing routers remain authoritative.

## Metadata-Only Limitation

The registry is metadata-only.

It must not:

- execute actions
- open workflows
- open provider handoffs
- launch calls or messages
- start payments
- activate camera
- capture location
- stage pending actions
- confirm actions
- dispatch emergency or provider workflows
- mutate health, marketplace, account, or profile data

Existing routers remain authoritative. Existing confirmation gates remain authoritative. Existing permission gates remain authoritative.

## Tool Metadata Schema

Each tool entry contains:

```js
{
  id: "marketplace.agritrade",
  label: "Browse AgriTrade",
  description: "Browse marketplace and agriculture trade guidance without buy, sell, payment, or account execution.",
  domain: "marketplace",
  category: "browse",
  risk: "low",
  actionType: "preview_or_route",
  supportedIntentIds: ["marketplace.agritrade.browse"],
  selectedToolId: "marketplace.agritrade",
  requiresConfirmation: false,
  requiresPermission: false,
  permissionType: "none",
  executionStatus: "preview_only",
  enabled: true,
  visibleToUser: true,
  metadataOnly: true,
  routerOwned: true,
  notes: []
}
```

Required fields:

- `id`
- `label`
- `description`
- `domain`
- `category`
- `risk`
- `actionType`
- `supportedIntentIds`
- `selectedToolId`
- `requiresConfirmation`
- `requiresPermission`
- `permissionType`
- `executionStatus`
- `enabled`
- `visibleToUser`
- `metadataOnly`
- `routerOwned`
- `notes`

## Risk Tiers

`low`

Education, browse, and guidance capabilities that may be previewed or routed through existing safe UI.

`controlled`

Capabilities that need review, missing information, or a staged flow before any future action.

`sensitive`

Capabilities involving location, camera, health, medical context, contact data, or privacy-sensitive data.

`high`

Capabilities involving calls, messages, payments, account changes, emergency escalation, provider handoff, external apps, marketplace transactions, or future autonomous behavior.

## Permission Types

Supported `permissionType` values:

- `none`
- `location`
- `camera`
- `contacts`
- `phone`
- `provider`
- `marketplace`
- `account`
- `medical`
- `external_app`

Permission metadata does not grant permission. It only describes what future policy and UI layers must request.

## Execution Status Values

`metadata_only`

The tool exists only as descriptive metadata.

`preview_only`

The tool may correspond to existing safe preview or browse behavior, but the registry still does not execute it.

`permission_required`

The capability requires explicit user/browser/role permission before any future action.

`confirmation_required`

The capability requires explicit confirmation before any future action.

`not_implemented`

The capability is planned or described but has no implementation adapter.

`blocked`

The capability is intentionally blocked until a future architecture phase adds policy, confirmation, and audit controls.

## Relationship To Intent Classifier

Phase 11B introduced `public/nexus-intent-classifier.js`.

Phase 11C registry entries list `supportedIntentIds` that align with classifier IDs. This lets future phases map a classified intent to possible tools without executing those tools.

Examples:

- `learning.training.find` can map to `workforce.training`.
- `marketplace.agritrade.browse` can map to `marketplace.agritrade`.
- `communications.outbound_contact.controlled` can map to call/message metadata, but those tools remain high-risk and confirmation-gated.
- `health.video_or_care.permissioned` can map to camera/telehealth metadata, but those tools remain permission-gated.

## Relationship To Existing Routers

Existing routers remain authoritative:

- frontend typed and voice routing
- backend `/api/agent/command`
- workflow modals
- low-risk preview UI
- telehealth routes
- call confirmation and handoff routes
- map and location permission routes
- marketplace and AgriTrade routes
- music controls
- learning routes

The registry does not replace `server.js`, `public/app.js`, route IDs, workflow IDs, localStorage keys, native bridge fields, PWA cache names, package names, or QA assumptions.

## Relationship To Future Planner

Future planner phases may use registry metadata to:

- identify candidate tools
- understand risk tier
- check missing permissions
- prepare confirmation copy
- select audit event type
- explain why an action is blocked
- produce staged plan steps

The planner must still pass through:

```text
intent classification -> registry lookup -> risk policy -> confirmation manager -> pending task -> provider adapter -> audit log
```

Raw registry metadata must never invoke provider adapters directly.

## Current Domains Covered

Phase 11C covers metadata for:

- learning and training
- workforce job pathways
- field support
- AgriTrade browsing
- agriculture and crop help
- map/location permission
- nearby providers
- camera preview
- telehealth/video guidance
- contact/call/message resolution
- marketplace payment
- account/profile change
- emergency/medical escalation
- future autonomous planning
- future native/WhatsApp/Telegram handoff
- future reminder/calendar execution
- future durable memory write
- future provider booking

## Why Execution Is Not Enabled Yet

Execution is intentionally disabled because Nexus still needs:

- central risk policy runtime
- unified confirmation UI runtime
- pending task state
- provider adapter contracts
- audit event runtime
- redaction and retention rules
- role and permission policy integration
- typed/voice/global equivalence QA

Until those exist, registry metadata is descriptive only.

## Phase 11D Readiness

Phase 11D should add a policy and risk engine skeleton that can read:

- classifier output
- registry metadata
- current user role
- current permission state
- active pending action/task

Phase 11D should remain non-executing. It should produce policy decisions such as:

- allowed as low-risk preview
- requires permission
- requires confirmation
- blocked
- unsupported

No provider execution should be added in Phase 11D.
