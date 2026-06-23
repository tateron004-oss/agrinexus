# Nexus Controlled Action Readiness Audit

Checkpoint audited: `25c059457e08d8ec3c66b1e469be3cacb74c9bc9`

Status: Phase 8H audit and planning only. This document does not authorize action execution, clickable suggestions, auto-open behavior, permission prompts, staging from suggestion metadata, or changes to `selectedToolId` inference.

## Executive Summary

Nexus Workforce AI can now recognize a small set of low-risk intent families, attach non-authoritative `metadata.agentAction` to backend responses, infer selected low-risk `selectedToolId` values, observe those values in the frontend, and show compact Level 1 category labels in the Standard User build.

The current system is not ready to move directly from suggestions to controlled actions. The next safe step is not UI staging or execution. The next safe step is a controlled action metadata schema or action readiness registry that defines what Nexus may prepare, what risk level each action carries, what inputs are missing, what confirmation wording is required, and what must remain blocked.

Current readiness rating: **Stage 0.5: visible suggestions with metadata observation, not controlled action preparation**.

## Current System State

### User Input Processing

User input currently flows through several existing authoritative paths:

- `public/app.js` `handleVoiceCommandCore(...)` for typed/global and voice-like user commands.
- `public/app.js` fast-lane and simple-user routing helpers, including `nexusFastLaneIntent(...)`, `simpleUserDirectVoiceIntent(...)`, `runSimpleUserVoiceIntent(...)`, and workflow openers.
- `public/app.js` backend command helpers such as `runBackendAgentCommand(...)` and `runUtilityAgentCommand(...)`.
- `server.js` `/api/agent/command` and utility/conversation command routing.

Existing routers remain authoritative. The static registry and `metadata.agentAction` do not drive runtime behavior.

### Current Metadata

`server.js` defines `buildAgentActionMetadata(...)`, which attaches additive `metadata.agentAction` to command results. Current fields include:

- `schemaVersion: "agent-action.v1"`
- `runtimeStatus: "metadata-only"`
- `source: "existing-router"`
- `userMessage`
- `normalizedIntent`
- `goal`
- `selectedToolId`
- `confidence`
- `requiredInputs`
- `missingInputs`
- `riskLevel`
- `confirmationRequired`
- `executionMode`
- `frontendAction`
- `backendAction`
- `result`
- `nextStep`
- `auditMetadata`
- `safetyNotes`
- `legacyCompatibility`

This metadata observes what the existing router already decided. It is not a plan, command object, staging object, execution request, or UI contract.

### selectedToolId Today

`server.js` `inferMetadataOnlySelectedToolId(...)` conservatively assigns `selectedToolId` for a small allowlist of low-risk prompt families:

- `workforce.training`
- `workforce.job_pathways`
- `workforce.field_support`
- `learning.start`
- `marketplace.agritrade`
- `agriculture.help`

It intentionally returns `null` when confirmation is required or when route context includes health, telehealth, doctor, clinic, medicine, patient, vitals, referral, emergency, video, camera, provider, calls, SMS, WhatsApp, Telegram, messages, payment, wallet, order, submit, apply, certificate, share, export, dispatch, cancel, admin, location, map, route, shipment, drone, scan, sell, buyer, or quote signals.

`selectedToolId` currently does not:

- route commands;
- open workflows;
- stage pending actions;
- request permissions;
- confirm anything;
- execute tools;
- select a live adapter;
- replace workflow buttons or existing routers.

### Level 1 Labels Today

`public/app.js` has two label sources:

- `buildLowRiskAgentActionSuggestion(...)` turns approved metadata-only `selectedToolId` values into display-only Level 1 labels.
- `localLevelOneSuggestionForSimpleUserIntent(...)` paints equivalent display-only labels for safe local Standard User routes that do not pass through backend metadata observation.

Visible labels include:

- `Training`
- `Jobs`
- `Field Support`
- `Learning`
- `Marketplace`
- `Agriculture Help`

The labels intentionally do not:

- render as buttons;
- attach click handlers;
- carry actionable `data-*` hooks;
- execute, route, stage, confirm, or open workflows;
- request camera, microphone, location, account, payment, call, telehealth, or marketplace permissions;
- imply that Nexus has completed an action.

`public/styles.css` keeps `.level-one-suggestion-label` compact and non-interactive with `pointer-events: none`.

## Current Suggestion And Label Pipeline

The current pipeline is:

1. User enters a typed/global/voice-like command.
2. Existing routers decide the answer or workflow.
3. Backend responses may include `metadata.agentAction`.
4. `inferMetadataOnlySelectedToolId(...)` may add a low-risk `selectedToolId`.
5. `public/app.js` `observeAgentActionMetadata(...)` observes that metadata only when `runtimeStatus` is `metadata-only` and `source` is `existing-router`.
6. `buildLowRiskAgentActionSuggestion(...)` maps approved low-risk IDs to display-only labels.
7. `paintLevelOneAgentActionSuggestionLabel(...)` paints the label into the Standard User caption/global assistant surfaces.
8. `clearLevelOneAgentActionSuggestionLabel(...)` clears stale labels before each new command.
9. For local Standard User routes, `paintLocalLevelOneSuggestionForSimpleUserIntent(...)` may paint a display-only label, while existing routing remains unchanged.

At no point does this pipeline prepare, stage, or execute a controlled action.

## Current Safety Guardrails

### Low-Risk Prompt Families

Current low-risk label candidates are training, job pathway guidance, field support guidance, learning, marketplace browse/AgriTrade, and agriculture help.

These are low-risk only as display labels. Some underlying workflows may still mutate local demo state if the user separately uses existing workflow controls. The label itself does not authorize that behavior.

### High-Risk, Privacy-Sensitive, Or Permission-Sensitive Prompt Families

The current exclusions cover:

- health intake and health record writes;
- telehealth, video, camera, and provider workflows;
- calls, SMS, WhatsApp, Telegram, and outbound messaging;
- emergency health;
- map/location permission;
- marketplace sell, order, quote, payment, wallet, buyer/seller messages, and checkout;
- job application submission;
- logistics dispatch, route mutation, shipment mutation, or cancellation;
- document sharing or exporting;
- admin/provider/live integration controls;
- drone scan or operational field evidence;
- identity, account, login, verification, and credential actions.

### Where Guardrails Live

Guardrails are currently implemented in:

- `server.js` `inferMetadataOnlySelectedToolId(...)`, which returns `null` for high-risk, permission-sensitive, and transactional contexts.
- `server.js` `buildAgentActionMetadata(...)`, which marks metadata-only status and preserves confirmation metadata.
- `server.js` `stageAgentAction(...)`, which supports existing pending confirmation flows for risky actions.
- `public/app.js` `observeAgentActionMetadata(...)`, which explicitly says metadata must never execute, route, confirm, stage, open workflows, or trigger modals.
- `public/app.js` `buildLowRiskAgentActionSuggestion(...)`, which returns display-only Level 1 labels with `executionAllowed: false`, `autoOpenAllowed: false`, and `userClickRequired: false`.
- `public/app.js` `localLevelOneSuggestionForSimpleUserIntent(...)`, which excludes high-risk terms before painting local Standard User labels.
- Companion and call confirmation gate logic tested by existing smoke scripts.

### Behavior Currently Blocked

The current system blocks or avoids:

- first-utterance call execution;
- generic `okay` executing high-risk pending actions;
- suggestions for telehealth/video/camera/call/location/payment/identity prompts;
- registry-driven runtime execution;
- frontend execution or workflow opening from `agentAction` metadata;
- static registry import by runtime files;
- labels behaving as buttons.

## Current QA Coverage

Relevant QA includes:

- `scripts/nexus-agent-action-schema-qa.js`
- `scripts/nexus-agent-action-observation-qa.js`
- `scripts/nexus-agent-action-frontend-observation-qa.js`
- `scripts/nexus-selected-tool-id-alignment-qa.js`
- `scripts/nexus-low-risk-agent-mapping-qa.js`
- `scripts/nexus-agent-action-suggestion-policy-qa.js`
- `scripts/nexus-low-risk-suggestion-display-plan-qa.js`
- `scripts/nexus-low-risk-suggestion-builder-qa.js`
- `scripts/nexus-low-risk-suggestion-observation-qa.js`
- `scripts/nexus-level-one-suggestion-label-qa.js`
- `scripts/companion-confirmation-gate-smoke.js`
- `scripts/call-intent-smoke.js`
- `scripts/pending-call-ui-qa.js`
- `scripts/confirmed-call-handoff-qa.js`
- `scripts/telehealth-camera-discoverability-qa.js`
- `scripts/telehealth-video-handoff-qa.js`
- `scripts/workflow-button-audit.js`
- `scripts/app-behavior-audit.js`

`scripts/qa-suite.js all-safe` is broad and local-safe, but it does not currently include the Nexus suggestion-specific QA scripts. Those must continue to be run explicitly until the suite is intentionally expanded.

## Gap Analysis

Nexus cannot safely prepare a next action yet because the following pieces are missing:

- A canonical controlled action schema separate from display labels.
- An action readiness registry that distinguishes suggestion, preview, staging, and execution eligibility.
- Explicit risk levels and permission requirements per action.
- A staged action object shape for future controlled previews.
- User-visible action preview wording that cannot be confused with execution.
- Missing-input handling for action preparation.
- A cancel path for prepared actions.
- A boundary between preview-only, low-risk navigation, medium-risk workflow setup, and high-risk execution.
- Audit/log event shape for prepared and dismissed actions.
- QA that verifies preview objects cannot execute.
- Browser validation for preview visibility, cancellation, and high-risk suppression.
- A policy for what happens when an inferred action conflicts with active workflow state.

## Proposed Controlled Action Model

A future controlled action object should be additive and non-executable by default. Proposed shape:

```json
{
  "schemaVersion": "controlled-action.v1",
  "runtimeStatus": "preview-only",
  "source": "existing-router",
  "selectedToolId": "learning.start",
  "actionId": "learning.open.start",
  "displayName": "Open Learning",
  "domain": "learning",
  "riskLevel": "low",
  "permissionRequired": [],
  "confirmationRequired": true,
  "requiredInputs": [],
  "missingInputs": [],
  "preview": {
    "title": "Nexus can prepare Learning",
    "summary": "I can help open the learning area so you can choose a course.",
    "nextQuestion": "Do you want to preview this next step?"
  },
  "allowedConfirmations": ["yes", "confirm", "continue"],
  "cancelText": "No, cancel",
  "executionBoundary": "existing-router-only",
  "auditEvent": "controlled_action.previewed",
  "safetyNotes": [
    "Preview only.",
    "No workflow opens until the user confirms.",
    "Existing routers and confirmation gates remain authoritative."
  ]
}
```

High-risk, privacy-sensitive, permission-sensitive, or external actions should either produce no controlled action object or produce a blocked preview with explicit safety wording and no execution option.

## Proposed Staged Roadmap

### Stage 0: Suggestions Only

Current state.

- Metadata and labels only.
- No clickable action.
- No staging.
- No execution.
- Existing routers remain authoritative.

### Stage 1: Action Readiness Metadata

Recommended next implementation stage.

- Nexus can describe what action might be possible.
- Metadata includes risk, permissions, missing inputs, and readiness.
- No visible action staging yet.
- No execution.
- No workflow opening from metadata.

### Stage 2: Action Preview

- Nexus can render a visible "I can help with this" preview.
- User sees title, summary, missing inputs, risk, and cancel option.
- Confirmation is required to proceed.
- High-risk actions still do not execute from this path.

### Stage 3: Confirmed Low-Risk Actions

- Only low-risk local navigation/help actions.
- Explicit confirmation required.
- Existing frontend workflow openers remain authoritative.
- QA must prove no permission prompt, external communication, record mutation, or live adapter execution happens.

### Stage 4: Permissioned Actions

- Camera, location, calls, telehealth, marketplace, payments, identity, account, health, and live provider workflows.
- Permission-specific gating.
- Explicit user confirmation.
- Strong audit logging.
- Existing high-risk confirmation gates remain intact.
- Generic acknowledgements such as `okay` must not execute high-risk actions.

## Risks And Mitigations

| Risk | Severity | Mitigation |
| --- | --- | --- |
| Users mistake a suggestion label for an action already taken. | Medium | Keep labels compact, non-clickable, and avoid completion language. |
| Future clickable suggestions bypass existing routers. | High | Require existing workflow openers to remain authoritative; add QA forbidding metadata-driven route execution. |
| High-risk prompts receive low-risk labels. | High | Maintain server and frontend exclusion allowlists; add browser validation for high-risk prompt families. |
| Static registry becomes runtime-authoritative too early. | High | Continue QA that forbids runtime imports of `docs/nexus-tool-registry.v1.json`. |
| Controlled action preview becomes confused with confirmation. | High | Separate preview status from pending action status; require explicit confirmation state and cancel path. |
| Existing `agentPendingAction` is overloaded. | Medium | Keep future controlled preview objects separate until explicit confirmation turns them into a pending action. |
| Local Standard User routes and backend metadata drift. | Medium | Add QA that compares local label mapping, backend selectedToolId mapping, and static registry candidate list. |

## Recommended Phase 8I Scope

Recommended next phase: **Phase 8I: Controlled Action Metadata Schema**.

This should come before UI staging or execution because Nexus needs a stable, testable vocabulary for action readiness before any visible preview can be trusted.

Phase 8I should:

- add a documentation/spec file for `controlled-action.v1`;
- define allowed statuses such as `not-available`, `preview-only`, `needs-input`, `needs-confirmation`, and `blocked`;
- define risk levels and permission classes;
- define required fields for action previews;
- define a separate preview object that is not `agentPendingAction`;
- document when a preview may convert to an existing pending action;
- add static QA proving no runtime execution has been introduced;
- update docs to clarify Phase 8G/8H naming drift in the low-risk suggestion display plan.

Phase 8I should not:

- make suggestions clickable;
- auto-open workflows;
- stage pending actions from metadata;
- execute tools;
- change selectedToolId inference;
- change high-risk confirmation behavior.

## Files Inspected

- `public/app.js`
- `public/styles.css`
- `server.js`
- `package.json`
- `scripts/qa-suite.js`
- `scripts/nexus-agent-action-schema-qa.js`
- `scripts/nexus-agent-action-observation-qa.js`
- `scripts/nexus-agent-action-frontend-observation-qa.js`
- `scripts/nexus-selected-tool-id-alignment-qa.js`
- `scripts/nexus-low-risk-agent-mapping-qa.js`
- `scripts/nexus-agent-action-suggestion-policy-qa.js`
- `scripts/nexus-low-risk-suggestion-display-plan-qa.js`
- `scripts/nexus-low-risk-suggestion-builder-qa.js`
- `scripts/nexus-low-risk-suggestion-observation-qa.js`
- `scripts/nexus-level-one-suggestion-label-qa.js`
- `scripts/companion-confirmation-gate-smoke.js`
- `docs/nexus-tool-registry.v1.json`
- `docs/NEXUS_TOOL_REGISTRY_SPEC.md`
- `docs/NEXUS_AGENT_ACTION_SUGGESTION_POLICY.md`
- `docs/NEXUS_LOW_RISK_AGENT_ACTION_MAPPING.md`
- `docs/NEXUS_LOW_RISK_SUGGESTION_DISPLAY_PLAN.md`
- `docs/NEXUS_SELECTED_TOOL_ID_ALIGNMENT.md`
- `docs/NEXUS_INTELLIGENCE_BEHAVIOR_AUDIT.md`
- `docs/AGRINEXUS_COMPANION_HANDOFF.md`
- `docs/COMPANION_REGRESSION_CHECKLIST.md`
- `scripts/README.md`
- `scripts/QA_POSTURE.md`

## QA Commands Run

Required Phase 8H commands:

```powershell
git diff --check
node --check public\app.js
node --check server.js
npm.cmd run qa:nexus-level-one-suggestion-label
npm.cmd run qa:nexus-low-risk-suggestion-builder
npm.cmd run qa:nexus-low-risk-suggestion-observation
npm.cmd run qa:nexus-selected-tool-id
node scripts\qa-suite.js nexus-workforce
node scripts\qa-suite.js app
node scripts\qa-suite.js all-safe
```

Note: Use `npm.cmd` on Windows if PowerShell blocks `npm.ps1`.
