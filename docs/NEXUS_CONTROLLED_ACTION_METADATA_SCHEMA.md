# Nexus Controlled Action Metadata Schema

Status: Phase 8I schema foundation only.

This document defines an internal metadata vocabulary for future Nexus controlled-action readiness work. It does not authorize action execution, staging, clickable suggestions, auto-opening workflows, permission prompts, or changes to `selectedToolId` inference.

## Product Boundary

Nexus Workforce AI may observe low-risk intent metadata and prepare internal readiness metadata, but existing routers remain authoritative. The Phase 8I implementation is display-adjacent and debug-observable only:

- no visible controlled-action preview UI;
- no `Do you want me to continue?` prompt;
- no button, chip, or click handler;
- no workflow open, route change, mutation, staging, confirmation, permission request, or tool execution;
- no change to health, telehealth, camera, call, location, marketplace, payment, account, or identity guardrails;
- no change to AgriNexus, AgriTrade, or agriculture compatibility.

## Schema

The Phase 8I object is named `controlled-action-metadata.v1` and may be stored only inside frontend observation/debug state.

```json
{
  "schemaVersion": "controlled-action-metadata.v1",
  "actionId": "openTrainingResources",
  "selectedToolId": "workforce.training",
  "levelOneLabel": "Training",
  "riskLevel": "low",
  "requiredPermissions": [],
  "missingInputs": [],
  "confirmationRequired": false,
  "confirmationText": "Nexus recognized this as Training. This metadata does not open training or start an action.",
  "cancelPath": "User can ignore the suggestion or choose another request.",
  "executionBoundary": "metadataOnly",
  "auditPolicy": "observeOnly",
  "blockedReason": null
}
```

### Required Fields

- `schemaVersion`: must be `controlled-action-metadata.v1`.
- `actionId`: stable future-facing action identifier, not a route, button ID, API path, or execution command.
- `selectedToolId`: canonical low-risk selected tool ID observed from existing metadata.
- `levelOneLabel`: compact category label already safe for display.
- `riskLevel`: one of `info`, `low`, `medium`, `high`, or `restricted`.
- `requiredPermissions`: permission classes that would be needed in a future phase. Phase 8I must use `[]`.
- `missingInputs`: user inputs needed before action readiness. Phase 8I must use `[]`.
- `confirmationRequired`: whether a future action would need confirmation. Phase 8I must remain `false`.
- `confirmationText`: safety wording that describes recognition only, not execution.
- `cancelPath`: how the user can safely ignore or dismiss a future preview.
- `executionBoundary`: one of `metadataOnly`, `previewOnly`, `confirmedLowRiskOnly`, `permissionedActionRequired`, or `restricted`.
- `auditPolicy`: one of `none`, `observeOnly`, `logOnPreview`, `logOnConfirmation`, or `logOnExecution`.
- `blockedReason`: nullable reason for blocked or restricted future actions.

### Permission Classes

Future permission classes may include `camera`, `location`, `call`, `telehealth`, `payment`, `identity`, `account`, and `marketplaceTransaction`. Phase 8I does not request or store active permission grants.

## Low-Risk Examples

Allowed Phase 8I mappings are narrow and metadata-only:

| Prompt family | `selectedToolId` | `actionId` | Label | Risk | Permissions | Boundary |
| --- | --- | --- | --- | --- | --- | --- |
| Agriculture training | `workforce.training` | `openTrainingResources` | Training | low | `[]` | metadataOnly |
| Show farm jobs | `workforce.job_pathways` | `showFarmJobs` | Jobs | low | `[]` | metadataOnly |
| Field support | `workforce.field_support` | `openFieldSupportGuidance` | Field Support | info | `[]` | metadataOnly |
| Learning topic | `learning.start` | `explainLearningTopic` | Learning | low | `[]` | metadataOnly |
| Browse AgriTrade | `marketplace.agritrade` | `browseMarketplace` | Marketplace | low | `[]` | metadataOnly |
| Agriculture help | `agriculture.help` | `explainAgricultureHelp` | Agriculture Help | info | `[]` | metadataOnly |

AgriTrade browse metadata does not buy, sell, message, quote, order, or process payment.

## Restricted Examples

The following examples must not produce controlled action metadata in Phase 8I:

- telehealth video;
- camera diagnosis;
- call the doctor;
- find my location;
- sell my produce;
- buy fertilizer;
- process my payment;
- log into my account;
- verify my identity.

These remain future-only and require separate permission, confirmation, privacy, and audit designs before any action preview or execution path can be considered.

## Source Placement

`public/app.js` derives controlled action metadata only from `buildLowRiskAgentActionSuggestion(...)`. That suggestion object must already be:

- `visibility: "visible-level-1-label"`;
- `displayOnly: true`;
- `executionAllowed: false`;
- `autoOpenAllowed: false`.

`server.js` continues to emit only `agent-action.v1` metadata with `runtimeStatus: "metadata-only"`. The server does not emit `controlled-action-metadata.v1` in Phase 8I.

## QA Coverage

Phase 8I is guarded by:

```powershell
npm.cmd run qa:nexus-controlled-action-metadata-schema
node scripts\nexus-controlled-action-metadata-schema-qa.js
node scripts\qa-suite.js nexus-workforce
```

The QA verifies the schema fields, low-risk allowlist, restricted examples, non-execution boundaries, debug-only observation path, and package alias.

## Future Phase

Recommended next phase: **Phase 8J: Controlled Action Metadata Observation Hardening**.

Phase 8J may expand observation QA and documentation, but still should not introduce visible previews, clickable suggestions, staging, permission prompts, auto-open behavior, or action execution. A later preview phase must define a separate user-visible preview object and keep existing confirmation gates authoritative.
