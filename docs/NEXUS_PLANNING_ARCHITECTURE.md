# Nexus Planning Architecture

Phase: 11F1

## Executive Summary

The Nexus planner is the next non-executing agent layer after policy observation. It will transform existing classifier, tool registry, and policy metadata into structured step-by-step plans. The planner will help Nexus explain what should happen next, what information is still needed, which permissions or confirmations are required, and why execution is blocked or deferred.

The planner must not execute actions. It must not create pending actions in 11F2 or 11F3. It must not route, stage, confirm, request permissions, open providers, or bypass existing routers. It is a planning and observation layer only.

## Current Pipeline

The current Phase 11A-11E pipeline is:

```text
User input
  -> Nexus intent classification
  -> Nexus tool registry metadata
  -> Nexus policy decision
  -> Nexus policy observation metadata
  -> Existing routers remain authoritative
```

Current files:

- `docs/NEXUS_AGENT_INTELLIGENCE_ARCHITECTURE_AUDIT.md`
- `docs/NEXUS_INTENT_CLASSIFICATION_MODEL.md`
- `docs/NEXUS_TOOL_REGISTRY_MODEL.md`
- `docs/NEXUS_POLICY_ENGINE_MODEL.md`
- `docs/NEXUS_POLICY_OBSERVATION_MODEL.md`
- `public/nexus-intent-classifier.js`
- `public/nexus-tool-registry.js`
- `public/nexus-policy-engine.js`
- `server.js`
- `public/app.js`

The classifier identifies likely intent and risk. The registry provides static runtime-readable tool metadata. The policy engine creates a non-executing decision. Policy observation attaches that decision to hidden QA/debug metadata. The app still relies on existing routers, workflow modals, permission paths, and confirmation gates.

## Planner Purpose

The planner should:

- create structured step-by-step plans
- identify required information
- identify safe next steps
- identify policy gates
- identify required permissions
- identify required confirmations
- explain why execution is blocked or deferred
- prepare the shape of future pending actions without creating them yet
- give QA a stable object to inspect before execution phases begin

The planner should not:

- execute tools
- create pending actions yet
- stage actions
- route automatically
- trigger modals
- trigger permissions
- call providers
- message contacts
- open camera or location
- process payments
- create accounts
- submit applications
- diagnose medical conditions
- dispatch emergency services
- bypass existing routers, policy decisions, or confirmation gates

## Planner Position In The Architecture

Future architecture:

```text
Input
  -> Classifier
  -> Tool Registry
  -> Policy Engine
  -> Planner
  -> Response Composer
  -> Future Pending Action Manager
  -> Future Execution Adapter
```

In 11F2 and 11F3, the pipeline stops at planner metadata. The response composer may read plan metadata later, but the first planner implementation should not change visible user behavior unless an explicit observation/debug path already exists.

## Planner Data Model

### NexusPlan

Proposed object:

```js
{
  planId: "plan.learning.training.find.workforce.training",
  sourceText: "Help me find agriculture training",
  intentId: "learning.training.find",
  domain: "learning",
  risk: "low",
  policyStatus: "allow_route",
  summary: "Prepare safe training guidance and show the existing training path if the router chooses.",
  steps: [],
  requiredInputs: [],
  permissionGates: [],
  confirmationGates: [],
  blockedActions: [],
  safeAlternatives: [],
  nextSafeStep: "Show training guidance or let the existing router handle the low-risk route.",
  canExecute: false,
  executionMode: "plan_only",
  plannerSource: "nexus-planner.v1",
  createdAt: "2026-06-23T00:00:00.000Z",
  notes: [
    "Planner is non-executing.",
    "Existing routers remain authoritative."
  ]
}
```

Required fields:

- `planId`
- `sourceText`
- `intentId`
- `domain`
- `risk`
- `policyStatus`
- `summary`
- `steps`
- `requiredInputs`
- `permissionGates`
- `confirmationGates`
- `blockedActions`
- `safeAlternatives`
- `nextSafeStep`
- `canExecute`
- `executionMode`
- `plannerSource`
- `createdAt`
- `notes`

In 11F2 and 11F3, `canExecute` must always be `false`.

### NexusPlanStep

Proposed object:

```js
{
  stepId: "step.1.identify-training-topic",
  order: 1,
  label: "Identify training need",
  description: "Use the classified training intent to prepare safe learning guidance.",
  intentId: "learning.training.find",
  toolId: "workforce.training",
  risk: "low",
  status: "preview_only",
  requiresPermission: false,
  requiresConfirmation: false,
  canExecute: false,
  blockedReason: "",
  userVisible: true,
  notes: ["This step describes a safe preview. It does not open or execute anything."]
}
```

Required fields:

- `stepId`
- `order`
- `label`
- `description`
- `intentId`
- `toolId`
- `risk`
- `status`
- `requiresPermission`
- `requiresConfirmation`
- `canExecute`
- `blockedReason`
- `userVisible`
- `notes`

## Planning Statuses

Recommended statuses:

- `informational`: safe answer or explanation.
- `preview_only`: safe preview or low-risk guidance.
- `needs_clarification`: the planner needs a missing target, input, or choice.
- `permission_required`: browser, device, account, provider, location, camera, medical, or contact permission is required before future action.
- `confirmation_required`: explicit user confirmation is required before future staging or execution.
- `blocked`: policy blocks the action.
- `not_implemented`: the action belongs to a future adapter or unavailable provider.
- `future_pending_action`: a future phase may stage a pending action, but this phase must not.
- `complete_without_execution`: no execution is needed; answer or guidance is enough.

## Planning Examples

### Help Me Find Agriculture Training

- Classified intent: `learning.training.find`
- Tool: `workforce.training`
- Policy decision: `allow_route` or `allow_preview`
- Plan summary: Prepare training guidance and preserve the existing low-risk training route.
- Plan steps:
  1. Identify the user is asking for training.
  2. Suggest agriculture/workforce training resources.
  3. Let the existing router remain authoritative for any visible route.
- Execution: not needed.
- Next safe step: answer with training guidance or use existing low-risk UI.

### Teach Me How Irrigation Works

- Classified intent: `learning.topic.explain`
- Tool: `learning.irrigation` or `learning.start`
- Policy decision: `allow_route` or `allow_preview`
- Plan summary: Provide educational explanation and learning next steps.
- Plan steps:
  1. Identify the topic as irrigation.
  2. Explain core concepts.
  3. Offer safe learning resources.
- Execution: not needed.
- Next safe step: educational response.

### Show Me Farm Jobs

- Classified intent: `workforce.jobs.find`
- Tool: `workforce.job_pathways`
- Policy decision: `allow_route` or `allow_preview`
- Plan summary: Prepare job-readiness guidance without submitting applications.
- Plan steps:
  1. Identify job/career intent.
  2. Provide job pathway guidance.
  3. Avoid application submission.
- Execution: not needed.
- Next safe step: browse or explain job pathways through existing UI.

### Browse AgriTrade

- Classified intent: `marketplace.browse`
- Tool: `marketplace.agritrade`
- Policy decision: `allow_route` or `allow_preview`
- Plan summary: Prepare browse-only marketplace help.
- Plan steps:
  1. Identify marketplace browse intent.
  2. Show or explain AgriTrade browse context.
  3. Block buy, sell, payment, and account actions unless future gates are satisfied.
- Execution: not needed.
- Next safe step: browse-only guidance.

### I Need Help With Crop Issues

- Classified intent: `agriculture.crop_help`
- Tool: `agriculture.help`
- Policy decision: `allow_route` or `allow_preview`
- Plan summary: Provide crop guidance without scanning, diagnosing, or creating records.
- Plan steps:
  1. Identify crop-help intent.
  2. Ask for crop, symptoms, and location if needed.
  3. Provide safe guidance and suggest expert help when appropriate.
- Execution: not needed.
- Next safe step: educational crop support.

### Nexus, Use My Location

- Classified intent: `map.location.permissioned`
- Tool: map/location metadata
- Policy decision: `require_permission`
- Plan summary: Explain that location requires user permission and cannot be activated by planner metadata.
- Plan steps:
  1. Identify location intent.
  2. Mark location permission gate.
  3. Wait for existing permission UI or router.
- Execution: blocked in planner.
- Next safe step: ask for permission through existing UI when the router initiates it.

### Call John

- Classified intent: communication/contact call
- Tool: `communications.call_contact`
- Policy decision: `clarify`, `require_permission`, or `require_confirmation`
- Plan summary: Resolve contact and number before any call can be staged.
- Plan steps:
  1. Identify outbound call intent.
  2. Resolve which John and phone number.
  3. Require explicit confirmation before future handoff.
- Execution: blocked in planner.
- Next safe step: ask which John or request the phone number.

### Call The Provider

- Classified intent: provider communication
- Tool: `communications.call_provider`
- Policy decision: `require_permission` or `require_confirmation`
- Plan summary: Treat provider contact as high-risk outbound communication.
- Plan steps:
  1. Identify provider target.
  2. Resolve provider and channel.
  3. Require confirmation before any future handoff.
- Execution: blocked in planner.
- Next safe step: clarify provider or explain confirmation requirement.

### Open Video For Provider To Show Injury

- Classified intent: health/video/camera
- Tool: `health.show_injury` or `health.camera_preview`
- Policy decision: `require_permission`
- Plan summary: Keep camera/video path permissioned and handoff-only.
- Plan steps:
  1. Identify camera/video and health context.
  2. Require camera/medical permission gate.
  3. Preserve existing handoff-only demo wording.
- Execution: blocked in planner.
- Next safe step: use existing camera preview route only when user explicitly chooses it.

### Buyer Pay

- Classified intent: marketplace/payment
- Tool: payment or marketplace controlled metadata
- Policy decision: `require_permission`, `require_confirmation`, `not_implemented`, or `blocked`
- Plan summary: Payment is high-risk and must not execute from prompt metadata.
- Plan steps:
  1. Identify payment/marketplace transaction intent.
  2. Block first-turn execution.
  3. Require future identity, account, payment, confirmation, and audit gates.
- Execution: blocked in planner.
- Next safe step: explain that payments are not available in the current controlled demo.

## Safety Model

The planner must follow these rules:

- Planner cannot execute.
- Planner cannot override policy.
- Planner cannot create pending actions yet.
- Planner cannot trigger permissions.
- Planner cannot trigger confirmations.
- Planner cannot open routes, modals, providers, native bridges, camera, maps, or payment flows.
- High-risk actions must stay blocked, clarified, or gated.
- Medical, emergency, call, message, payment, provider, location, camera, account, identity, marketplace buy/sell, and application-submission actions remain guarded.
- Existing routers remain authoritative.
- Policy decisions remain the safety boundary before planning.

## Relationship To Future Phases

- 11F1: Planning architecture audit/design.
- 11F2: Non-Executing Planner Skeleton.
- 11F3: Plan observation metadata.
- 11F4: Planner QA/docs hardening.
- 11G: Session memory and pending task state.
- 12A: Voice pipeline connection to the agent stack.
- 13A+: Permissioned execution adapters.

## QA Plan For 11F2

Expected tests:

- planner module exists and is importable
- `buildNexusPlan(...)` or equivalent returns a plan object
- plan object has all required `NexusPlan` fields
- every plan has `canExecute: false`
- every plan step has `canExecute: false`
- low-risk prompts generate `preview_only`, `informational`, or `complete_without_execution` plans
- sensitive prompts generate `permission_required` plans
- controlled/high-risk prompts generate `confirmation_required`, `needs_clarification`, `blocked`, or `not_implemented` plans
- unknown prompts generate `needs_clarification` plans
- planner contains no executable handlers, adapters, provider calls, route calls, permission calls, staging calls, or confirmation calls
- classifier, registry, policy engine, policy observation, selectedToolId, low-risk suggestion, contact/call, provider handoff, confirmation UI, audit logging, and all-safe QA remain green

## Implementation Recommendation

Recommended next phase:

`11F2 - Non-Executing Planner Skeleton`

Likely files:

- `public/nexus-planner.js`
- `scripts/nexus-planner-qa.js`
- `docs/NEXUS_PLANNER_MODEL.md`
- package alias `qa:nexus-planner`
- possible `scripts/qa-suite.js` update

Implementation guidance:

- Use the same UMD/CommonJS/browser pattern as `public/nexus-policy-engine.js`.
- Accept raw text, intent classification, tool metadata, and policy decision inputs.
- Prefer consuming the existing policy decision rather than reclassifying when metadata is already present.
- Return metadata only.
- Keep `canExecute: false`.
- Keep existing routers authoritative.
- Add static QA that blocks planner calls to `openWorkflow`, `goSection`, `request`, `confirm`, `stage`, `dispatch`, `getUserMedia`, `geolocation`, provider bridges, payment flows, and native call handoff.
