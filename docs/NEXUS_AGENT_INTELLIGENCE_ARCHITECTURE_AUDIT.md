# Nexus Agent Intelligence Architecture Audit

Phase: 11A

Date: 2026-06-23

Baseline commit: `050d583 Add standard user demo runbook`

This audit reviews the current Nexus Workforce AI / AgriNexus assistant architecture and defines the safest path from controlled previews and staged actions toward a more capable Jarvis/Siri/Alexa-style assistant. It is documentation-only. No runtime behavior, UI behavior, route behavior, provider execution, marketplace execution, health execution, map execution, contact execution, or agent execution was changed.

## 1. Executive Summary

Nexus is already a functional local-safe workflow assistant. It can answer prompts, route typed and voice commands, show low-risk suggestions, open controlled workflow previews, stage some risky actions, and enforce confirmation gates for high-risk communication and native handoff paths.

The current intelligence architecture is powerful but distributed. Intent detection, routing, confirmation, selected tool metadata, controlled action previews, workflow opening, and domain-specific safety rules are spread across `public/app.js`, `server.js`, static QA scripts, and architecture documents. This works for a demo/workflow platform, but it is not yet a centralized agent runtime.

The largest Phase 11 finding is that Nexus does not need more autonomous execution first. It needs a clearer intelligence spine:

- unified input normalization
- canonical intent classification
- central risk and permission policy
- runtime action registry
- planner that produces staged plans only
- durable task memory
- confirmation manager
- provider adapters behind policy gates
- runtime audit logging
- response composer that explains what Nexus can and cannot do

The correct next phase is Phase 11B: introduce an additive intent classification contract and QA matrix without replacing existing routers yet.

## 2. Current Architecture Map

### Primary Browser Pipeline

1. User enters a typed command through the visible Standard User input, a global command surface, or a voice/guided control.
2. Frontend command handlers in `public/app.js` normalize and route the command through layered helper functions.
3. Some commands are handled entirely in the browser:
   - low-risk suggestion labels
   - controlled action preview readiness
   - local workflow modal opening
   - local camera preview
   - local music playback control
   - Standard User section navigation
4. Other commands are sent to backend `/api/agent/command`.
5. Backend `/api/agent/command` calls the companion-safe agent command path.
6. Backend result returns public state, command result, route outcome, and additive agent action metadata.
7. Frontend renders response text, observes metadata, renders low-risk preview labels, and dispatches only explicitly confirmed native call handoffs.

### Backend Agent Pipeline

Backend behavior is centered around `server.js`:

- `/api/agent/command`
- `/api/agent/conversation-core`
- `runCompanionSafeAgentCommand(...)`
- `runAgentCommand(...)`
- domain-specific classifiers and route branches
- `stageAgentAction(...)`
- `agentPendingAction`
- call intent staging helpers
- public state projection
- product identity metadata
- selected tool metadata scaffolding

### Current State Stores

Frontend state:

- selected persona and experience mode
- voice preferences and quiet mode
- conversation intake and conversation memories in `localStorage`
- awareness and context memory in `localStorage`
- controlled action preview/readiness state
- visible low-risk suggestion labels
- latest observed agent action metadata

Backend state:

- `profile.agentPendingAction`
- `profile.agentMemory`
- `profile.agentCommands`
- `profile.agentConversation`
- `profile.integrationEvents`
- `profile.phoneContacts`
- health, workforce, marketplace, learning, call, provider, and map workflow records

## 3. Input Pipeline Findings

The current input pipeline is functional but not centralized.

Typed commands, visible command buttons, voice commands, guided commands, and backend agent calls mostly converge through frontend command routing, but not through a single canonical input envelope. This means equivalent prompts can be interpreted by different layers depending on entry surface.

Observed strengths:

- Standard User typed commands are validated by browser and static QA.
- Voice routing has extensive regression scripts.
- Backend command routing is companion-safe and supports voice/phone/native input metadata.
- Product identity and Nexus alias handling have been added without breaking AgriNexus compatibility.

Observed limitations:

- Input normalization is scattered across frontend and backend helpers.
- Typed, voice, global, and backend command paths are not formally equivalent.
- Language handling exists but is not a single multilingual intent layer.
- Debug/metadata observation, preview labels, and workflow opening are layered after routing rather than produced by one response composer.

Recommended future component:

```js
NexusInputEnvelope = {
  text,
  inputMode,
  surface,
  locale,
  userRole,
  sessionId,
  deviceCapabilities,
  timestamp
}
```

## 4. Intent Classification Findings

Intent classification currently combines:

- frontend regex and keyword classifiers
- backend deterministic classifiers
- companion understanding metadata
- conversation core decisions
- selectedToolId inference
- domain-specific command branches
- fallback conversation and encyclopedia paths

This makes the assistant broad, but it also creates route-order risk. Previous fixes already addressed examples where broad conversation or encyclopedia handling swallowed workflow/capability routes.

Current strengths:

- Low-risk selected tool IDs are additive and metadata-only.
- High-risk call intent staging is separately guarded.
- Voice-response regression protects key routing expectations.
- Nexus Workforce alias QA protects rebrand and assistant identity behavior.

Current limitations:

- There is no canonical `IntentClassification` object used by every route.
- The same concept can be detected in multiple places.
- Some older branches can still route directly to workflow logic before a central risk classifier exists.
- The static tool registry is not yet runtime-authoritative.

Recommended future component:

```js
NexusIntent = {
  intentId,
  category,
  domain,
  actionVerb,
  target,
  confidence,
  selectedToolId,
  riskTier,
  entities,
  missingSlots,
  rawText,
  normalizedText
}
```

## 5. Routing And Action Findings

Routing currently happens in both browser and backend.

Frontend routing opens UI sections, workflow modals, camera preview, learning workflows, music controls, and controlled action preview UI. Backend routing stages pending actions, returns command results, creates some domain records, and emits metadata.

Current strengths:

- Low-risk preview and navigation behavior is controlled and display-oriented.
- High-risk call handoff has pending action staging and confirmation rules.
- Telehealth and health workflows have role/privacy, demo provenance, encounter lifecycle, provider workflow, and video handoff guards.
- Music controls are local browser controls and do not touch provider behavior.
- Map/location behavior remains permission-oriented.

Current limitations:

- There is no single runtime action registry that owns action schemas, risk, permissions, provider requirements, and audit requirements.
- Some direct route branches still perform domain work without going through one central policy gate.
- Planning and action execution are not yet separated by a durable plan lifecycle.

Recommended future component:

```js
NexusActionCandidate = {
  actionId,
  selectedToolId,
  actionType,
  domain,
  target,
  provider,
  riskTier,
  requiredPermissions,
  confirmationRequired,
  auditRequired,
  executionAdapter,
  previewCopy,
  consequence
}
```

## 6. Permission And Confirmation Boundary Findings

Nexus already has a strong safety foundation:

- `agentPendingAction` stages risky actions.
- Call intent creates high-risk outbound call pending actions.
- Allowed confirmations are constrained for calls.
- Vague confirmations such as `okay` are blocked for high-risk call execution.
- Confirmed call handoff metadata is required before native dispatch.
- Android uses dialer handoff rather than direct background calling.
- iOS validates provider, source, confirmation, and `tel:` URL.
- Browser handoff links are sanitized.
- Low-risk suggestions remain preview-oriented.
- Controlled action UI remains non-executing unless explicitly designed otherwise.

Main limitation:

The permission model is implemented as a set of guarded paths rather than a central policy engine. This is acceptable now, but future agentic behavior must not add execution paths outside a single risk/permission/confirmation layer.

Recommended future component:

```js
NexusRiskDecision = {
  riskTier,
  reason,
  allowedWithoutConfirmation,
  requiredConfirmation,
  requiredRole,
  requiredProviderAuthorization,
  requiredIdentityCheck,
  blockedConfirmations,
  allowedConfirmations,
  auditRequired
}
```

## 7. State And Memory Findings

Nexus already stores a meaningful amount of context, but memory is not yet split into formal task memory, session memory, durable user memory, and audit memory.

Current browser memory:

- persona and mode state
- voice preferences
- conversation intake
- conversation mode state
- conversation memories
- awareness state
- controlled action preview/readiness state

Current backend memory:

- profile-level agent memory
- command history
- conversation history
- pending action
- integration events
- contacts and domain records

Risks:

- Memory shape is broad and organic.
- Expiry and redaction are not uniformly defined for all memory types.
- Pending actions and preview readiness are not yet a general task-state model.
- Future agent planning could accidentally rely on stale or sensitive context unless memory is formalized.

Recommended future component:

```js
NexusMemoryRecord = {
  memoryId,
  scope,
  type,
  summary,
  redactedPayload,
  sensitivity,
  source,
  createdAt,
  expiresAt,
  userVisible,
  auditLinked
}
```

## 8. Tool And Action Model Findings

The repository now has a strong documentation and QA foundation for a future tool/action model:

- Nexus Tool Registry specification
- static tool registry artifact
- selectedToolId alignment QA
- low-risk suggestion mapping
- agent action metadata schema
- frontend observation guards
- controlled action metadata schema
- controlled action readiness and preview QA

Current limitation:

The registry is not yet the runtime source of truth. Existing routers still choose tools/actions directly through branch logic.

Future action registry should define:

- tool ID
- action ID
- display label
- domain
- risk tier
- required role
- required confirmation
- required provider
- input schema
- output schema
- redaction rules
- audit rules
- preview renderer
- execution adapter

## 9. Planning Readiness Findings

Nexus has early planning concepts in backend agent plan helpers and cloud-agent language, but these are not yet the safe controlled-agent planner needed for future autonomy.

The future planner should not execute directly. It should produce a staged plan with explicit risk and confirmation requirements.

Recommended future component:

```js
NexusPlan = {
  planId,
  objective,
  status,
  steps,
  riskSummary,
  requiredConfirmations,
  auditRequired,
  createdAt
}

NexusPlanStep = {
  stepId,
  actionCandidate,
  status,
  dependsOn,
  canPreview,
  canExecute,
  confirmationState
}
```

Planning should support:

- clarify missing details
- preview options
- stage low-risk navigation
- stage medium-risk workflow submission
- stage high-risk provider handoff
- ask for confirmation
- log outcome
- stop safely

Planning must not support:

- automatic payments
- automatic account creation
- automatic job submission
- automatic medical diagnosis
- automatic emergency dispatch
- automatic camera/location activation
- automatic contact/call/message execution
- automatic marketplace buy/sell behavior

## 10. Audit Logging Readiness Findings

The audit logging architecture is documented and protected by QA. Runtime has partial event concepts, especially integration events and activity records, but there is not yet a unified runtime agent audit log.

Future audit logging must cover:

- intent detection
- risk classification
- preview shown
- confirmation requested
- confirmation accepted
- confirmation rejected
- action cancelled
- provider handoff opened
- provider handoff blocked
- permission denied
- unsupported provider fallback
- execution result

Recommended future component:

```js
NexusAuditEvent = {
  auditId,
  eventType,
  actionId,
  intentId,
  userId,
  sessionId,
  role,
  sourceSurface,
  riskTier,
  actionType,
  targetSummary,
  provider,
  confirmationState,
  permissionState,
  resultStatus,
  redactedPayload,
  createdAt,
  expiresAt
}
```

The audit logger must never trigger execution. It records what happened; it does not authorize what happens.

## 11. Risks And Limitations

### High: Distributed Routing

Routing is spread across many frontend and backend branches. This increases route-order risk and makes future autonomy difficult to reason about.

### High: Future Execution Could Bypass Policy

Existing direct workflow branches are safe enough for today because QA guards them, but future provider execution must not be added to those branches directly.

### Medium: Duplicate Intent Logic

Frontend and backend both infer selected tools and domain actions. This can create inconsistent outcomes for the same prompt across typed, voice, global, and backend surfaces.

### Medium: Memory Is Not Yet Schema-Governed

Context and memory exist, but task memory, durable user memory, sensitive memory, and audit memory are not formally separated.

### Medium: Planner Is Not Yet Confirmation-Aware

Existing planning concepts are not yet the controlled, staged, auditable planner required for safe agentic behavior.

### Low: User Experience Can Overstate Intelligence

Nexus has strong visible assistant behavior, but it should continue to explain that previews, handoffs, and confirmations are intentional safety controls.

## 12. Recommended Future Architecture

Nexus should evolve into a layered controlled-agent runtime:

1. Input Normalizer
2. Intent Classifier
3. Context Builder
4. Memory Manager
5. Risk And Permission Engine
6. Action Registry
7. Planner
8. Confirmation Manager
9. Provider Adapter Layer
10. Audit Logger
11. Response Composer
12. QA Guard Suite

The core principle:

> Intent parsing suggests what the user wants. Policy decides what is allowed. Confirmation decides what can proceed. Provider adapters execute only after policy and confirmation allow them.

## 13. Proposed Component Model

```text
User input
  -> NexusInputEnvelope
  -> Input Normalizer
  -> Intent Classifier
  -> Context Snapshot
  -> Risk And Permission Engine
  -> Action Registry Candidate
  -> Planner
  -> Preview / Confirmation Request
  -> Pending Task
  -> Approved Provider Adapter
  -> Execution Result
  -> Audit Event
  -> Response Composer
  -> Browser / Voice / Native Response
```

### Component Responsibilities

Input Normalizer:

- normalize typed, voice, native, phone, and global command input
- preserve original text
- attach surface, locale, device, role, and session metadata

Intent Classifier:

- produce canonical intent and entity extraction
- identify missing slots
- avoid execution decisions

Context Builder:

- include role, mode, selected persona, device capability, location permission state, and active pending task
- use redacted memory summaries

Risk And Permission Engine:

- classify low, medium, and high risk
- attach required confirmation and permission requirements
- block disallowed actions

Action Registry:

- map intent to safe action candidates
- define schemas and adapters
- define preview and audit requirements

Planner:

- assemble staged steps
- ask clarifying questions
- never execute directly

Confirmation Manager:

- create confirmation requests
- enforce allowed and blocked confirmation phrases
- prevent orphan confirmations

Provider Adapter Layer:

- native phone
- browser `tel:`
- WhatsApp
- Telegram
- Twilio
- SMS
- email
- maps
- health/video
- marketplace

Audit Logger:

- write redacted events
- enforce retention
- never trigger execution

Response Composer:

- explain what Nexus understood
- explain what Nexus can do next
- avoid implying execution when only previewing

## 14. Proposed Data Models And Interfaces

```js
NexusInputEnvelope = {
  inputId,
  text,
  inputMode,
  surface,
  locale,
  userRole,
  sessionId,
  deviceCapabilities,
  createdAt
}
```

```js
NexusIntent = {
  intentId,
  normalizedText,
  category,
  domain,
  actionVerb,
  target,
  entities,
  missingSlots,
  selectedToolId,
  confidence,
  rawText
}
```

```js
NexusContextSnapshot = {
  userRole,
  experienceMode,
  productIdentity,
  activePendingAction,
  activePendingTask,
  deviceCapabilities,
  permissionState,
  memorySummary,
  sensitiveContextPresent
}
```

```js
NexusToolDefinition = {
  toolId,
  label,
  domain,
  riskTier,
  allowedRoles,
  inputSchema,
  outputSchema,
  previewRenderer,
  executionAdapter,
  confirmationRequired,
  auditRequired
}
```

```js
NexusConfirmationRequest = {
  confirmationId,
  actionId,
  riskTier,
  actionType,
  target,
  provider,
  consequence,
  allowedConfirmations,
  blockedConfirmations,
  expiresAt
}
```

```js
NexusPendingTask = {
  taskId,
  intentId,
  planId,
  status,
  currentStepId,
  confirmationRequest,
  redactedSummary,
  createdAt,
  expiresAt
}
```

```js
NexusExecutionResult = {
  actionId,
  status,
  provider,
  resultSummary,
  userVisibleMessage,
  auditId
}
```

## 15. Proposed Phase Roadmap

### Phase 11A: Agent Intelligence Architecture Audit

Create this architecture audit and confirm the next implementation sequence.

### Phase 11B: Intent Classification Contract

Add an additive, non-executing intent classifier contract and QA matrix. It should classify prompts into intent/domain/risk/missing slots but not replace existing routing.

### Phase 11C: Runtime Tool Registry Read Adapter

Expose the static Nexus tool registry through a read-only runtime helper. Existing routers continue to work; the registry only validates metadata alignment.

### Phase 11D: Policy And Risk Engine Skeleton

Add a non-executing policy helper that can classify candidate actions as low, medium, high, blocked, or unsupported. Use QA to prove it does not execute.

### Phase 11E: Pending Task State Model

Add a general pending task schema that can coexist with `agentPendingAction` before migration.

### Phase 11F: Response Composer Upgrade

Centralize response copy for preview, confirmation, blocked action, unsupported provider, and handoff states.

### Phase 12A: Typed / Voice / Global Equivalence QA

Add matrix tests proving identical prompts behave consistently across input surfaces.

### Phase 13A: Contact / Call Tool Architecture Implementation

Use the contact/call permission architecture to implement contact resolution without provider execution.

### Phase 14A: Runtime Audit Logging Prototype

Add redacted audit logging for staged and cancelled actions before adding new execution adapters.

### Phase 15A: Domain Knowledge Layer

Add domain knowledge modules for workforce, agriculture, learning, health access, maps, marketplace, and provider handoff planning.

## 16. QA Recommendations

Future QA should add:

- intent classifier matrix QA
- typed/voice/global equivalence QA
- no-execution planner QA
- policy gate regression QA
- orphan confirmation QA
- pending task expiry QA
- memory redaction and expiry QA
- response composer safety copy QA
- provider adapter no-direct-launch QA
- audit event redaction QA
- marketplace/payment no-execution QA
- health/emergency no-diagnosis/no-dispatch QA

Existing QA that should remain part of the safety net:

- workflow button audit
- app behavior audit
- voice response regression
- Nexus Workforce branding/alias/metadata QA
- Nexus tool registry QA
- selectedToolId alignment QA
- low-risk suggestion QA
- controlled action preview/readiness QA
- contact/call permission QA
- contact resolution QA
- provider handoff boundary QA
- confirmation UI contract QA
- audit log architecture QA
- telehealth camera/video QA
- call intent and confirmed handoff QA
- all-safe suite

## 17. Final Recommendation For Phase 11B

Phase 11B should implement an additive intent classification contract, not a router rewrite.

Recommended Phase 11B scope:

- create a small classifier module or helper
- classify a fixed prompt matrix into domain/action/risk/missing slots
- keep output metadata-only
- do not execute or open workflows
- do not replace existing frontend/backend routing
- add QA proving the classifier agrees with existing protected behavior for demo-critical prompts

Phase 11B should explicitly avoid:

- provider execution
- runtime planner execution
- route replacement
- new permissions
- new autonomous behavior
- marketplace/payment execution
- health diagnosis or emergency dispatch
- contact/call handoff execution

This keeps the standard demo stable while giving Nexus a stronger foundation for future controlled intelligence.
