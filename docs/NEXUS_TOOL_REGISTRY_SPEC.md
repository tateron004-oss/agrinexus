# Nexus Tool Registry Specification

Status: Phase 7A audit and specification only.

Current checkpoint: `cc8227692dd5a3759b872b7ddda7f4edb0f62f6d`

This document defines the next architecture boundary for Nexus Workforce AI. It does not change runtime behavior, endpoint contracts, workflow IDs, cache keys, local storage keys, native bridge fields, package names, or legacy AgriNexus compatibility.

Phase 8B note: `metadata.agentAction.selectedToolId` may expose conservative canonical IDs for explicit low-risk prompts, but it remains metadata-only and non-authoritative. Runtime code must not import or read `docs/nexus-tool-registry.v1.json`; existing routers and confirmation gates remain authoritative. See `docs/NEXUS_SELECTED_TOOL_ID_ALIGNMENT.md` for the current alignment boundary.

## Product And Compatibility Boundary

The public product identity remains:

- `productName`: `Nexus Workforce AI`
- `assistantName`: `Nexus`
- `edition`: `workforce`
- `legacyProductName`: `AgriNexus`

AgriNexus remains the legacy/internal compatibility name. AgriTrade remains the marketplace and agriculture-trade module. Agriculture, farm, crop, drone, rural health, and trade workflows remain supported domain modules inside Nexus Workforce AI.

Do not blindly replace internal names. Early registry work must map existing route IDs, workflow IDs, QA assumptions, storage keys, PWA cache names, native bridge fields, and backend contracts to new canonical tool metadata rather than renaming those contracts.

## Current Architecture Findings

Nexus already has several registry-like and planner-like pieces, but tool selection is still distributed across backend routes, backend command routing, frontend command parsing, workflow buttons, native bridge metadata, and QA scripts.

Backend routing currently centers on:

- `PRODUCT_IDENTITY` in `server.js`, exposed additively through public metadata.
- `agentCapabilityRegistryState(...)`, which derives current capability/readiness state.
- `agentToolRegistry(...)`, which is useful inventory scaffolding but is not yet the canonical tool registry.
- `runCompanionSafeAgentCommand(...)`, which wraps safer Companion routing around agent command execution.
- `runAgentCommand(...)`, which contains a broad command router with utility, workflow, call, health, learning, trade, workforce, map, and conversation handling.
- `stageAgentAction(...)`, which persists confirmation-gated pending actions through `agentPendingAction`.
- `canUse(...)` and `canWriteHealth(...)`, which protect role and health write boundaries.
- API route families such as `/api/agent/*`, `/api/health/*`, `/api/video/session`, `/api/workforce/*`, `/api/learning/*`, `/api/trade/*`, `/api/map/advanced`, `/api/cloud-agent/*`, and `/api/voice/*`.

Frontend routing currently centers on:

- `nexusProductIdentity` in `public/app.js`.
- Standard User workflow/action rendering and buttons in `public/index.html` and `public/app.js`.
- `handleVoiceCommand(...)` and `handleVoiceCommandCore(...)`.
- `runBackendAgentCommand(...)`.
- `nexusFastLaneIntent(...)`.
- `workflowVoiceAliases(...)`.
- `openWorkflowByVoice(...)`.
- `openHealthVideoPreviewWorkflow(...)`.
- `localMusicControlIntent(...)` and `handleLocalMusicControlCommand(...)`.
- `pendingWorkflow` and the confirmation modal/inline workflow path.
- Data attributes including `data-workflow`, `data-action`, `data-health`, `data-simple-command`, and related workflow button attributes.

Native and platform integration currently centers on:

- `public/native-bridge.json` for bridge capabilities and endpoint expectations.
- Native call handoff bridge behavior.
- Browser/PWA fallbacks for camera, calls, maps, voice, and local Web Audio.

## Current Distributed Routing Map

| Surface | Current role | Registry implication |
| --- | --- | --- |
| `server.js` `/api/agent/command` | Main backend assistant command endpoint | Should eventually emit a structured agent action envelope while preserving current response fields. |
| `server.js` `runAgentCommand(...)` | Broad backend router | Should be migrated gradually by domain into registry-selected tools. |
| `server.js` `runCompanionSafeAgentCommand(...)` | Safer Companion wrapper | Must remain the execution boundary for assistant commands. |
| `server.js` `stageAgentAction(...)` | Pending action storage and confirmation path | Should become the canonical staging mechanism for high-risk registry tools. |
| `server.js` `agentCapabilityRegistryState(...)` | Runtime capability/readiness inventory | Can feed registry availability, but should not become the full registry schema by itself. |
| `public/app.js` `handleVoiceCommand(...)` | Browser typed/voice command entry | Should consume registry metadata only after backend metadata is stable. |
| `public/app.js` `workflowVoiceAliases(...)` | Frontend workflow aliases | Should be represented as `exampleAliases` and `legacyAliases` in the registry. |
| `public/app.js` `openWorkflowByVoice(...)` | Frontend workflow opener | Should remain a compatibility action target during migration. |
| `public/app.js` `openHealthVideoPreviewWorkflow(...)` | Rich local camera preview route | Must stay explicitly marked as handoff-only demo, not live WebRTC. |
| `public/app.js` music controller | Local Web Audio playback control | Should stay separate from Nexus voice mute/unmute tools. |
| `public/index.html` data attributes | Static user-visible controls | Should map to registry `frontendAction` entries, not be renamed early. |
| `public/native-bridge.json` | Native bridge contract | Should map to registry metadata without changing native field names early. |
| QA scripts | Safety net for current behavior | Should gain registry drift checks before runtime migration. |

## Current Tool And Workflow Inventory

The first canonical registry should cover these domains without removing existing agriculture or AgriNexus compatibility.

### Workforce And Job Readiness

Representative tools:

- Workforce profile building.
- Role matching.
- Job readiness guidance.
- Application preparation and submission boundaries.
- Interview scheduling/prep.
- Mentor assignment.
- Workforce communications.

Risk notes:

- Reading job guidance is low risk.
- Applying for a role or contacting an employer is high risk and must be confirmation-gated.
- Existing selected-job boundaries must remain visible.

### Learning And Training

Representative tools:

- Open learning/training.
- Start or resume a course.
- Explain lessons.
- Quiz flow.
- Accessibility/caption support.
- Certificate or transcript issuance.
- Women and family learning support.

Risk notes:

- Opening learning UI and lesson guidance is low risk.
- Issuing certificates or transcripts is higher risk and should remain staged/confirmed.

### Health And Telehealth

Representative tools:

- Health intake.
- Consent.
- Vitals capture.
- Referral.
- Follow-up.
- Appointment.
- Provider assignment and provider workflow.
- Patient history.
- Prescription/care packet.
- Emergency escalation.
- Care-team note.
- Outcome review.
- Rural symptom guide.
- Clinic, pharmacy, and mobile clinic support.
- Health handoff packet.
- Mobile clinic supply/revenue records.

Risk notes:

- Health workflows are privacy-sensitive.
- Health writes require health permissions and should remain role-gated.
- Demo/default provenance markers must remain preserved.
- Investor redaction must remain preserved.
- No production clinical telehealth or HIPAA/compliance claim is made.

### Video And Camera Handoff

Representative tools:

- Local camera preview.
- Healthcare video handoff record.
- Caption relay guidance.

Risk notes:

- Opening the local camera preview UI is local/demo and should not create a record.
- `/api/video/session` remains confirmation-gated where it creates a handoff record.
- Current metadata must stay clear: `videoMode: "local-handoff-demo"`, `handoffOnly: true`, `realTimeVideo: false`, and `liveProviderConnected: false`.
- No live WebRTC/signaling/provider room is implemented.

### Calls And Communications

Representative tools:

- Call intent detection.
- Pending outbound call action.
- Native phone dialer handoff.
- WhatsApp/Telegram fallback instructions.
- Twilio/phone path where configured.
- SMS/WhatsApp/buyer/provider messages.

Risk notes:

- Calling or messaging a person is a high-risk outbound action.
- First utterances must stage only.
- Confirmation must use allowed confirmations.
- Generic "okay" must not execute high-risk call actions.

### Maps And Location

Representative tools:

- Open map.
- Ask for location permission.
- Find clinics/pharmacies.
- Map farmer/field/facility.
- Route and shipment tracking.
- Disruption and risk layers.
- Evidence packet.

Risk notes:

- Opening maps is generally low risk.
- Requesting or using precise location is privacy-sensitive.
- Browser permission behavior must remain explicit and user-controlled.
- Leaflet/map behavior must remain intact.

### Field, Agriculture, Crop, And Drone

Representative tools:

- Farmer help.
- Crop guidance.
- Field support.
- Drone field scan.
- Drone mission.
- Drone intervention.
- Pest, irrigation, yield, and compliance workflows.

Risk notes:

- Informational crop and field guidance is low risk.
- Drone scans, missions, interventions, and operational actions should be staged or clearly demo/local until live adapters exist.
- Agriculture remains a supported domain module.

### AgriTrade And Marketplace

Representative tools:

- Crop sale and order.
- Quote.
- Buyer contact.
- Buyer message.
- Logistics quote.
- Shipping booking.
- Pickup/delivery confirmation.
- Payment checkout.
- Wallet.
- Settlement.
- Quality, cold-chain, export, contract, and release packets.

Risk notes:

- AgriTrade remains the marketplace/agriculture-trade module.
- Payment, wallet, release, settlement, buyer contact, and outbound messages are high risk.
- Live payment/provider behavior must remain separated from local demo behavior.

### Music And Audio

Representative tools:

- Spotify/provider playback where configured.
- Local Web Audio demo playback.
- Stop, pause, resume, volume, mute, and unmute music.
- Nexus voice mute/unmute and quiet mode.

Risk notes:

- Music controls are local/browser behavior.
- Music mute/unmute must stay separate from Nexus voice mute/unmute.
- Browser autoplay restrictions must be respected.

### Voice And Native

Representative tools:

- Browser speech recognition.
- Speech-to-text.
- Text-to-speech.
- Phone/Twilio greeting and gather.
- Realtime voice status/session.
- Native bridge command handoff.

Risk notes:

- Realtime voice remains opt-in, conversation-only, and non-operational for workflow execution.
- Workflow actions must route through `/api/agent/command` or explicit confirmed endpoints.
- Native bridge contracts should be mapped, not renamed.

### Cloud Agent, Planning, And Operations

Representative tools:

- Agent plan.
- Agent execute.
- Agent briefing.
- Reasoning language.
- Cloud agent status/run/tick/tool-template/approve/audit.
- Provider/integration testing.
- Mission/autonomy demos.

Risk notes:

- Live provider tests, admin operations, cloud agent approvals, and autonomous actions require explicit boundaries.
- Registry migration must not make autonomous tools executable without review and confirmation.

## Confirmation And Risk Policy Map

The registry should use explicit risk levels rather than relying on scattered string checks.

Recommended risk levels:

- `low`: answer-only guidance, open local UI, open learning, open map without location, local camera modal open, music playback controls.
- `medium`: create local/demo workflow records, update local notes, prepare packets, draft messages, prepare applications.
- `high`: outbound call, outbound message, job application submit, payment checkout, wallet, settlement, certificate/transcript issuance, provider/admin tests, drone mission/intervention, live dispatch.
- `privacy-sensitive`: health data, patient data, profile/contact data, precise location, voice transcripts/recordings, caregiver/provider identifiers.
- `admin-live`: production checks, provider engine operations, cloud-agent approvals, destructive or live external operations.

Required policy:

- High-risk and admin-live tools must stage a pending action before execution.
- Privacy-sensitive tools must apply role-aware projection and redaction where relevant.
- Calling, messaging, payment, job application, certificate, provider testing, drone operation, health write, and video session record creation must not execute from a first utterance.
- Generic acknowledgements such as "okay" must not execute high-risk actions.
- Demo-only tools must expose demo provenance rather than pretending to be live production operations.

## Demo, Handoff, And Live Adapter Boundaries

Current local-safe behavior must remain explicit:

- Telehealth is a controlled local/demo workflow platform, not production clinical telehealth.
- Video is local camera preview plus handoff-only demo metadata, not live WebRTC.
- Provider queue behavior is local/demo unless a future provider network adapter exists.
- Calls open safe handoff/dialer paths only after confirmation.
- Payments, logistics, drone operations, EHR/FHIR, provider engines, and production/live checks remain separate from local-safe demo flows.
- Native compile validation remains manual until native project files/toolchains exist.

## Proposed Canonical Tool Registry Schema

The registry should start as static metadata, then become the shared source for backend command selection, frontend workflow hints, native bridge mapping, and QA drift checks.

```js
{
  canonicalToolId: "health.intake",
  displayName: "Start health intake",
  domain: "health",
  category: "workflow",
  description: "Collects guided local/demo health intake details and stages or creates an intake record according to role and confirmation rules.",
  exampleAliases: ["start intake", "open health intake", "begin telehealth intake"],
  legacyAliases: ["data-health=intake", "/api/health/action:type=intake"],
  requiredInputs: ["patientName", "symptoms"],
  optionalInputs: ["callback", "caregiver", "location"],
  riskLevel: "privacy-sensitive",
  confirmationRequired: true,
  rolePermissions: {
    read: ["admin", "health", "standard"],
    write: ["admin", "health"]
  },
  demoStatus: "local-demo-supported",
  liveStatus: "no-live-provider-dispatch",
  frontendAction: {
    type: "workflow",
    workflowId: "health",
    actionId: "intake",
    selector: "[data-health=\"intake\"]"
  },
  backendAction: {
    endpoint: "/api/health/action",
    method: "POST",
    actionType: "intake"
  },
  resultSchema: "healthIntakeRecord",
  auditEvent: "health.intake.created",
  qaCoverage: [
    "scripts/telehealth-contract-qa.js",
    "scripts/telehealth-privacy-role-qa.js",
    "scripts/telehealth-demo-boundary-qa.js"
  ],
  protectedCompatibilityNotes: "Do not rename data-health, endpoint, action type, or stored record shape during early registry phases."
}
```

Required schema fields:

- `canonicalToolId`: stable new registry ID, for example `workforce.match_role`.
- `displayName`: user-facing tool name.
- `domain`: broad product domain.
- `category`: answer, workflow, record, handoff, live-adapter, admin, utility, local-control.
- `description`: short behavior statement.
- `exampleAliases`: natural language examples.
- `legacyAliases`: current route IDs, workflow IDs, data attributes, or command phrases that must remain compatible.
- `requiredInputs`: minimum fields needed before execution.
- `optionalInputs`: useful fields that should not block basic flow.
- `riskLevel`: one of the explicit risk levels.
- `confirmationRequired`: boolean.
- `rolePermissions`: read/write/execute boundaries.
- `demoStatus`: local/demo availability.
- `liveStatus`: live adapter availability.
- `frontendAction`: existing UI action target.
- `backendAction`: existing endpoint/action target.
- `resultSchema`: response/record contract.
- `auditEvent`: future audit log event name.
- `qaCoverage`: scripts that protect the tool.
- `protectedCompatibilityNotes`: what must not be renamed during migration.

## Example Registry Entries To Add First

The first static registry should include at least:

- `learning.open`
- `learning.start_course`
- `learning.quiz`
- `workforce.match_role`
- `workforce.apply_role`
- `health.intake`
- `health.video_session`
- `health.provider_workflow`
- `communications.outbound_call`
- `communications.buyer_message`
- `map.open`
- `map.location_permission`
- `trade.crop_sale`
- `trade.payment_checkout`
- `drone.field_scan`
- `music.local_playback`
- `voice.realtime_conversation`
- `cloud_agent.run`

Each entry must keep a compatibility mapping to the current endpoint, frontend action, workflow ID, or command phrase.

## Proposed Agent Action Schema

Agent routing should eventually return an additive action envelope. Early implementation should include this metadata without removing current response fields.

```js
{
  userMessage: "open video for provider to show injury",
  normalizedIntent: "open_health_video_preview",
  goal: "Show the local camera preview workflow for a health handoff demo.",
  selectedToolId: "health.video_session",
  confidence: 0.92,
  requiredInputs: [],
  missingInputs: [],
  riskLevel: "privacy-sensitive",
  confirmationRequired: false,
  executionMode: "open-frontend",
  frontendAction: {
    type: "openWorkflow",
    workflowId: "health",
    actionId: "video"
  },
  backendAction: null,
  result: {
    status: "ready",
    message: "Opening the local camera preview. This is a handoff-only demo and is not connected to a live provider."
  },
  nextStep: "User may open camera locally or choose to create a confirmed handoff record.",
  auditMetadata: {
    productName: "Nexus Workforce AI",
    assistantName: "Nexus",
    edition: "workforce",
    legacyProductName: "AgriNexus"
  },
  safetyNotes: [
    "No live WebRTC room is started.",
    "No health record is created until the user confirms the handoff."
  ]
}
```

Recommended `executionMode` values:

- `answer-only`
- `open-frontend`
- `stage-pending-action`
- `execute-local`
- `execute-live-adapter`
- `handoff-only`
- `demo-record`
- `blocked-needs-input`
- `blocked-permission`

## Proposed Migration Roadmap

### Phase 7A: Audit And Spec

Current phase. Add this specification only. No runtime behavior changes.

Acceptance criteria:

- Registry goals and boundaries are documented.
- Current routing surfaces are inventoried.
- Risk and confirmation rules are explicit.
- No runtime files are changed.

### Phase 7B: Static Registry Artifact

Add a static registry data file or server-local constant without using it for routing.

Acceptance criteria:

- Registry entries cover the first high-value domains.
- Protected legacy IDs are represented as compatibility metadata.
- No endpoint or workflow behavior changes.
- New QA verifies schema validity and protected compatibility fields.

Phase 7B introduced `docs/nexus-tool-registry.v1.json` as a machine-readable static artifact generated from this specification and `scripts/nexus-tool-registry-qa.js` as its validator. The artifact is explicitly marked `runtimeStatus: "static-spec-only"` and is not runtime-authoritative. `server.js`, `public/app.js`, command routing, workflow routing, native bridge behavior, endpoint contracts, and confirmation gates must not consume this registry until a later additive metadata phase.

### Phase 7C: Registry Drift QA

Add static QA that compares registry entries against visible workflow buttons, backend endpoints, native bridge endpoints, and known command aliases.

Acceptance criteria:

- Missing backend endpoints fail QA.
- Missing visible workflow mappings fail QA where applicable.
- Protected internal rename attempts fail QA.
- Existing app/core/voice/telehealth/music/call QA remains green.

Phase 7C hardened `scripts/nexus-tool-registry-qa.js` so the static registry is checked for required field quality, domain coverage, alias compatibility, risk and confirmation policy, live-status honesty, QA ownership, protected compatibility notes, and the static-only runtime boundary. The registry remains `static-spec-only`; no runtime behavior, command routing, endpoint contract, native bridge behavior, workflow routing, or confirmation gate consumes it yet.

### Phase 7D: Additive Agent Action Metadata

Add `agentAction` metadata to selected backend responses while preserving current response fields.

Acceptance criteria:

- Existing clients continue to work.
- Low-risk commands expose selected tool ID, execution mode, risk level, confirmation requirement, and next step.
- No high-risk action executes sooner than before.

Phase 7D added a metadata-only `agentAction` scaffold to backend agent command responses. Existing routers remain authoritative, `docs/nexus-tool-registry.v1.json` remains static/spec-only and is not imported at runtime, and the frontend does not consume this metadata yet. Future Phase 7E may begin safe frontend consumption only after additive response metadata is stable and covered by QA.

### Phase 7E: Frontend Metadata Awareness

Allow frontend command paths to read additive metadata for display and workflow opening, while keeping current fallbacks.

Acceptance criteria:

- Standard User typed/global commands keep current behavior.
- Health video, music controls, call confirmation, learning routing, and map behavior are unchanged.
- Frontend can show safer "what will happen next" language from metadata.

Phase 7E added observation QA for representative backend agent command responses. `scripts/nexus-agent-action-observation-qa.js` confirms `metadata.agentAction` is present, additive, metadata-only, and descriptive of existing router outcomes. At the Phase 7E checkpoint the frontend did not consume `agentAction`, the static registry remained spec-only and non-authoritative, and existing routers remained the only execution authority. Phase 7F adds display-only frontend observation after this response metadata remains stable.

### Phase 7F: Low-Risk Registry-Driven Routing

Move only low-risk answer/open-UI tools to registry-selected routing.

Acceptance criteria:

- Learning open, map open, local camera modal open, and simple help paths are registry-addressable.
- Existing aliases still work.
- QA proves ordinary provider/doctor/help commands are not over-routed.

Before registry-driven routing begins, Phase 7F added frontend display-only observation of `metadata.agentAction`. The frontend may capture validated `metadata-only` agent-action summaries for developer/debug visibility, but it must not execute, route, open workflows, stage actions, confirm actions, or alter user-facing behavior from that metadata. Existing frontend routers remain authoritative, and the static registry remains spec-only and non-authoritative.

### Phase 7G: Low-Risk Agent Action Mapping Audit/Spec

Document low-risk candidates and explicit exclusions before any registry-driven routing work begins.

Acceptance criteria:

- Low-risk candidates are limited to informational or browse-only tools.
- High-risk, privacy-sensitive, transactional, permission-sensitive, and live integration tools are excluded from early metadata-driven behavior.
- `metadata.agentAction` remains non-authoritative.
- Existing routers remain authoritative.
- Static registry remains spec-only and is not imported at runtime.

Phase 7G added `docs/NEXUS_LOW_RISK_AGENT_ACTION_MAPPING.md` and static mapping annotations in `docs/nexus-tool-registry.v1.json`. These annotations are planning metadata only. Future implementation must begin with display-only or user-click-required suggestions, not workflow execution or automatic routing.

### Phase 7H: Display-Only Low-Risk Suggestion Audit/Spec

Define future display-only and user-click-required suggestion rules before adding any visible suggestion UI.

Acceptance criteria:

- No runtime behavior changes.
- Frontend still only observes `metadata.agentAction`.
- `agentAction` remains non-authoritative.
- Static registry remains spec-only and is not imported at runtime.
- Future implementation starts with Level 1 display labels or Level 2 user-click suggestions only after QA approval.

Phase 7H added `docs/NEXUS_AGENT_ACTION_SUGGESTION_POLICY.md` and static suggestion-policy annotations in `docs/nexus-tool-registry.v1.json`. These annotations define suggestion eligibility, maximum suggestion level, labels, and safety notes, but they are planning metadata only and do not drive runtime behavior.

### Phase 7I: Medium/High-Risk Registry Routing

Migrate staged and confirmation-gated tools after low-risk coverage is stable.

Acceptance criteria:

- Calls, payments, applications, certificates, health writes, provider actions, and drone operations all stage through `stageAgentAction(...)` or equivalent canonical pending-action handling.
- `allowedConfirmations` and "okay does not execute high-risk actions" protections remain intact.
- Privacy redaction and role checks remain intact.

### Phase 7J: Live Adapter And Audit Log Integration

Connect registry metadata to live adapter availability, audit events, provider engine boundaries, and future production readiness checks.

Acceptance criteria:

- Live adapter tools are explicitly marked live, unavailable, mock, or local-demo.
- Audit events are emitted for high-risk and privacy-sensitive actions.
- Production/live/network/credential checks remain outside local-safe QA unless explicitly invoked.

## QA Roadmap

Add future QA in this order:

- `scripts/nexus-tool-registry-qa.js`: validates registry schema, required fields, and protected compatibility notes.
- `scripts/nexus-tool-risk-policy-qa.js`: verifies high-risk/privacy-sensitive tools require confirmation or permission gates.
- `scripts/nexus-tool-alias-coverage-qa.js`: verifies major existing aliases map to registry entries.
- `scripts/nexus-agent-action-schema-qa.js`: validates additive agent action metadata shape.
- `scripts/nexus-agent-metadata-emission-qa.js`: confirms selected low-risk responses include metadata without breaking current fields.
- `scripts/nexus-registry-workflow-routing-qa.js`: confirms selected frontend workflows can be opened from registry metadata while preserving current fallbacks.

Existing safety net to preserve:

- `git diff --check`
- `node --check public\app.js`
- `node --check server.js`
- `node scripts\workflow-button-audit.js`
- `node scripts\app-behavior-audit.js`
- `node scripts\voice-response-regression.js`
- `node scripts\learning-functionality-qa.js`
- `node scripts\music-playback-control-qa.js`
- `node scripts\telehealth-camera-discoverability-qa.js`
- `node scripts\telehealth-video-handoff-qa.js`
- `node scripts\call-intent-smoke.js`
- `node scripts\companion-confirmation-gate-smoke.js`
- `node scripts\qa-suite.js app`
- `node scripts\qa-suite.js core`
- `node scripts\qa-suite.js voice`
- `node scripts\qa-suite.js all-safe`
- `npm run qa:nexus-workforce`

## Developer Warnings

Do not use the Tool Registry work as a reason to rename internals. The registry is a compatibility and orchestration layer first.

Do not replace `runAgentCommand(...)`, frontend typed routing, or workflow modal routing in one pass. Start by documenting and validating the registry, then emit additive metadata, then migrate low-risk workflows.

Do not move high-risk actions to direct execution. Calls, messages, applications, payments, certificates, provider tests, health writes, drone operations, and live dispatch remain confirmation-gated.

Do not weaken the Companion Constitution:

- Understand First.
- Guide Second.
- Offer Third.
- Execute Last.

Do not blur demo and production boundaries. Local telehealth, video handoff, provider queue, music playback, and offline/local workflows must remain accurately labeled.

Do not remove AgriNexus, AgriTrade, agriculture, farm, crop, drone, trade, or rural health compatibility. The workforce edition broadens the platform; it does not delete existing domains.

## Commit Readiness Checklist For Future Phases

Before any runtime registry phase can be committed:

- The affected tool entries exist in the registry.
- Protected legacy aliases are listed.
- Role and confirmation policies are explicit.
- The old routing path still has a fallback.
- Existing safety QA passes.
- New registry QA passes.
- No `db.json` changes are included.
- No secrets or live credentials are introduced.
- No endpoint, workflow ID, storage key, PWA cache name, native bridge field, package name, or protected QA assumption is renamed.
