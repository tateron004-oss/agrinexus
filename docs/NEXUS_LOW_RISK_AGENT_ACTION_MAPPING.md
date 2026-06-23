# Nexus Low-Risk Agent Action Mapping

Checkpoint: Phase 7G after `377b1efcb06f89037c0912c520b77531f3c1d698`

This document is an audit/spec for future metadata-assisted behavior. It does not authorize runtime routing changes. Existing routers remain authoritative, `metadata.agentAction` remains non-authoritative, and `docs/nexus-tool-registry.v1.json` remains static/spec-only.

## Current Boundary

Phase 7F added frontend observation of `metadata.agentAction` for developer/debug visibility only. Phase 7G identifies which tools could later move toward display suggestions or user-click navigation suggestions.

Phase 7G does not:

- let `agentAction` open workflows;
- let `agentAction` confirm, stage, or execute actions;
- import or read the static registry from `server.js` or `public/app.js`;
- change endpoint paths, workflow IDs, route IDs, localStorage keys, PWA cache names, package names, native bridge fields, or backend contracts;
- remove AgriNexus, AgriTrade, agriculture, farm, crop, or trade compatibility.

## Metadata-Assisted Behavior Levels

Level 0: Observation only

- Current state.
- Metadata is captured or logged for developer/debug observation.
- No routing, UI opening, user-visible suggestion, confirmation, staging, or execution changes.

Level 1: Display-only suggestion

- Frontend may show text such as "Nexus thinks this is Training."
- No workflow opening.
- No action execution.
- No permission request.

Level 2: User-click required navigation suggestion

- Frontend may show a user-clickable suggestion such as "Open Training."
- The user must click.
- Existing workflow openers remain authoritative.
- No high-risk or permission-sensitive workflows are eligible.

Level 3: Low-risk auto-open candidate

- Future-only.
- Requires additional QA and rollback protection.
- Only informational workflows may be considered.
- No high-risk, privacy-sensitive, transactional, permission-sensitive, or live integration workflows are eligible.

Level 4: Confirmation-gated action

- Future-only.
- Medium/high-risk workflows must continue through existing confirmation and pending-action gates.
- `allowedConfirmations`, "okay does not execute high-risk actions", role checks, privacy redaction, and audit boundaries must remain intact.

## Candidate Low-Risk Workflows

These are the only early candidates for metadata-assisted behavior, and only at Level 1 or Level 2 until later QA proves safety:

- `workforce.training`: user-click navigation suggestion to existing learning/training UI.
- `workforce.field_support`: display-only suggestion for informational field support.
- `learning.start`: user-click navigation suggestion to existing learning UI.
- `agriculture.help`: display-only suggestion for informational farmer/crop/agriculture help.
- `marketplace.agritrade`: user-click navigation suggestion for browse-only marketplace/AgriTrade opening.
- `music.local_playback`: display-only suggestion for local demo music controls; provider playback remains separate.

Conditionally future candidates:

- `workforce.job_pathways`: only read-only/career guidance suggestions; role matching or record writes remain existing-route controlled.
- `learning.quiz`: only quiz preview/practice suggestions; scored attempts or record writes remain existing-route controlled.
- `logistics.shipment`: only status display suggestions; dispatch, cancel, update, or external logistics operations are excluded.
- `reports.document`: only draft-only user-click suggestions; sharing/exporting remains excluded.

## Explicit Early Exclusions

These must not become metadata-driven during early routing phases:

- health intake record creation;
- telehealth/video/camera handoff;
- provider calls;
- emergency health handling;
- map/location permission use;
- marketplace order, payment, or message actions;
- job application submission;
- logistics dispatch, cancel, or external updates;
- outbound notifications or messages;
- document sharing or exporting;
- admin/full operational dashboards;
- voice STT/TTS provider activation or microphone permission flows;
- field scan, drone, evidence creation, or live external integrations;
- any live provider, payment, EHR, WebRTC, communications, or credentialed adapter integration.

## Static Registry Annotations

`docs/nexus-tool-registry.v1.json` now includes non-runtime mapping annotations:

- `mappingReadiness`
- `earliestAllowedPhase`
- `frontendConsumptionPolicy`
- `mappingNotes`

These fields are static planning metadata. They are not runtime-authoritative and must not be imported by `server.js` or `public/app.js`.

Allowed `mappingReadiness` values:

- `candidate-low-risk`
- `excluded-high-risk`
- `excluded-privacy-sensitive`
- `future-confirmation-gated`

Allowed `frontendConsumptionPolicy` values:

- `observation-only`
- `display-only-suggestion`
- `user-click-required`
- `not-eligible-yet`

## QA Guardrails

Phase 7G adds `scripts/nexus-low-risk-agent-mapping-qa.js` and `qa:nexus-low-risk-mapping`.

The QA must prove:

- every registry tool has mapping annotations;
- high-risk/privacy-sensitive tools are not marked `candidate-low-risk`;
- health, video, provider, call, payment, application, dispatch, outbound, share/export, and location tools are excluded or future-gated;
- low-risk candidates are no stronger than display-only or user-click-required;
- static registry remains non-runtime-authoritative;
- `server.js` and `public/app.js` do not reference the static registry JSON;
- the frontend observation helper does not execute, route, open workflows, confirm, or stage actions from metadata.

## Implementation Gate For Future Phases

The next implementation phase must begin with Level 1 or Level 2 only. Any move toward Level 3 or Level 4 requires a separate audit, expanded QA, and explicit approval.
