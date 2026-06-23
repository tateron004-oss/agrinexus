# Nexus Agent Action Suggestion Policy

Checkpoint: Phase 7H after `87ad341ba0f376b64bca11155d4c6edaea8a69e4`

This document defines future display-only and user-click-required suggestion rules for `metadata.agentAction`. It is a policy/spec only. It does not add runtime suggestion UI, does not make `agentAction` authoritative, and does not allow the static registry to drive frontend behavior.

## Authority Boundary

Current authority remains unchanged:

- existing typed/global/voice routers decide behavior;
- existing workflow openers remain authoritative;
- existing confirmation gates remain authoritative;
- `metadata.agentAction` remains observation-only;
- `docs/nexus-tool-registry.v1.json` remains static/spec-only;
- `server.js` and `public/app.js` must not import, read, or reference the static registry JSON.

Suggestions must never execute actions, open workflows automatically, bypass routers, bypass confirmation gates, request permissions, or imply live provider/adapter behavior.

## Approved Suggestion Levels

Level 0: Observation only

- Current state.
- Metadata is captured only for developer/debug observation.
- No user-visible suggestion.
- No button.
- No workflow opening.
- No action execution.

Level 1: Display-only label

- Example: "Nexus recognized this as Training."
- No button.
- No workflow opening.
- No action execution.
- Existing response text and routers remain authoritative.

Level 2: User-click-required navigation suggestion

- Example: "Open Training."
- User must click.
- Existing workflow opener remains authoritative after the click.
- No automatic workflow opening.
- No permission request.
- No high-risk/privacy-sensitive workflow is eligible.

Level 3: Low-risk auto-open candidate

- Not allowed yet.
- Future only after additional QA and explicit approval.
- Low-risk informational workflows only.
- No high-risk, privacy-sensitive, transactional, permission-sensitive, or live integration workflow is eligible.

Level 4: Confirmation-gated action

- Not allowed in this phase.
- Future only for medium/high/privacy workflows after confirmation schema, audit logs, role checks, adapter boundaries, and explicit approval.
- Existing confirmation gates must remain intact.

## Eligible Low-Risk Suggestion Candidates

Early suggestions may only be Level 1 or Level 2:

- `workforce.training`: Level 2 user-click navigation suggestion.
- `workforce.job_pathways`: Level 2 guidance suggestion only; no application submission.
- `learning.start`: Level 2 user-click navigation suggestion.
- `learning.quiz`: Level 2 practice/preview suggestion only; no scored record write.
- `workforce.field_support`: Level 1 informational label only.
- `agriculture.help`: Level 1 informational label only.
- `marketplace.agritrade`: Level 2 browse-only suggestion.
- `music.local_playback`: Level 1 informational label only.

Future draft-only report suggestions may be considered only after document sharing/exporting is separated into a different high-risk tool. The current `reports.document` registry tool is not suggestion-eligible.

## Explicit Exclusions

These must not be display-suggested as actionable navigation yet:

- health intake record creation;
- telehealth/video/camera handoff;
- provider calls;
- emergency health handling;
- map/location permission use;
- marketplace orders, payments, or messages;
- job application submission;
- logistics dispatch or cancel actions;
- outbound notifications or messages;
- document sharing or exporting;
- admin controls;
- voice provider activation;
- live integrations;
- anything requiring permission, consent, external communication, confirmation, credentials, production adapter access, or sensitive health/location/profile data.

## Confirmation Boundary

If a future suggestion points toward a medium/high/privacy action, it must stop before action execution and hand control to the existing confirmation path. It must not rely on generic "okay" confirmation for high-impact actions.

Protected confirmation flows include:

- calls and outbound communication;
- health writes and telehealth records;
- payments, orders, buyer/seller messages, and marketplace transactions;
- job applications and document exports;
- dispatch/cancel operations;
- certificates and credentials;
- admin/provider operations.

## Wording Rules

Suggestions must not say:

- "I will do this."
- "I already opened this."
- "I contacted provider."
- "I submitted."
- "I diagnosed."
- "I dispatched."
- "I sent."
- "Payment processed."
- "Application submitted."

Allowed safe wording:

- "Nexus recognized this as training."
- "You can open Training."
- "Open Job Pathways."
- "View AgriTrade browse options."
- "I can guide you through the workflow."
- "I'll ask before taking any high-impact action."

Suggestion labels should describe what the user may choose next, not claim that Nexus has already acted.

## Static Registry Annotations

`docs/nexus-tool-registry.v1.json` includes static suggestion-policy fields:

- `suggestionEligibility`
- `maxSuggestionLevel`
- `suggestionLabel`
- `suggestionSafetyNotes`

These fields are not runtime-authoritative and must not be imported by `server.js` or `public/app.js`.

## QA Guardrails

Phase 7H adds `scripts/nexus-agent-action-suggestion-policy-qa.js` and `qa:nexus-agent-suggestion-policy`.

The QA must prove:

- this policy document exists;
- Levels 0-4 are documented;
- Level 3 is explicitly not allowed yet;
- Level 4 requires confirmation gates;
- high-risk/privacy-sensitive/permission-sensitive workflows are not suggestion-eligible above Level 0;
- unsafe wording is prohibited;
- static registry remains spec-only;
- runtime files do not import/read/reference static registry JSON;
- frontend observation helper does not execute, route, auto-open workflows, or confirm from metadata;
- AgriNexus, AgriTrade, agriculture, farm, crop, and trade compatibility remain documented.

## Future Implementation Gate

The first implementation pass after this policy may only add Level 1 or Level 2 behavior, must be guarded by QA, and must remain reversible without changing backend contracts.
