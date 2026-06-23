# Nexus Controlled Action Preview Readiness

Status: Phase 8K internal readiness contract only.

This document defines when Nexus may prepare a future action-preview readiness object. It does not add visible preview UI and does not authorize action staging, confirmation, routing, workflow opening, permission prompts, or execution.

## Purpose

Phase 8K answers a narrow design question: given a valid `controlled-action-metadata.v1` object, can Nexus internally mark a future preview as safe to prepare later?

The answer is stored as `controlled-action-preview-readiness.v1`. It remains internal, metadata-only, and non-executing.

## Current Phase Restrictions

Phase 8K intentionally does not:

- show `Action:`, `Risk:`, `Needs:`, or `Do you want me to continue?`;
- render buttons, banners, cards, chips, modals, or preview panels;
- make Level 1 labels clickable;
- stage pending actions;
- request permissions;
- open workflows;
- route commands;
- change selectedToolId inference;
- execute tools or provider actions.

## Preview Readiness Schema

```json
{
  "schemaVersion": "controlled-action-preview-readiness.v1",
  "sourceMetadataVersion": "controlled-action-metadata.v1",
  "actionId": "openTrainingResources",
  "selectedToolId": "workforce.training",
  "levelOneLabel": "Training",
  "previewEligible": true,
  "previewBlockedReason": null,
  "previewRiskLevel": "low",
  "previewMode": "lowRiskPreviewOnly",
  "safePreviewTitle": "Review training resources",
  "safePreviewSummary": "Nexus can explain training resources and next learning options without opening a workflow or starting an action.",
  "requiresExplicitConfirmation": false,
  "requiredPermissions": [],
  "missingInputs": [],
  "allowedNextStep": "preparePreviewOnly",
  "executionBoundary": "previewOnlyReadiness",
  "auditPolicy": "observeOnly",
  "userVisibleInThisPhase": false
}
```

Required fields:

- `schemaVersion`: must be `controlled-action-preview-readiness.v1`.
- `sourceMetadataVersion`: must reference `controlled-action-metadata.v1`.
- `actionId`
- `selectedToolId`
- `levelOneLabel`
- `previewEligible`
- `previewBlockedReason`
- `previewRiskLevel`: one of `info`, `low`, `medium`, `high`, or `restricted`.
- `previewMode`: one of `none`, `informationalPreviewOnly`, `lowRiskPreviewOnly`, `permissionRequiredPreviewBlocked`, or `restrictedPreviewBlocked`.
- `safePreviewTitle`
- `safePreviewSummary`
- `requiresExplicitConfirmation`
- `requiredPermissions`
- `missingInputs`
- `allowedNextStep`: one of `observeOnly`, `preparePreviewOnly`, or `blocked`.
- `executionBoundary`: must remain `metadataOnly` or `previewOnlyReadiness` in Phase 8K.
- `auditPolicy`: `observeOnly` or `logOnPreviewFuture`.
- `userVisibleInThisPhase`: must be `false`.

## Eligibility Rules

A preview readiness object may be eligible only when all conditions are true:

1. Source metadata uses `schemaVersion: "controlled-action-metadata.v1"`.
2. `riskLevel` is `info` or `low`.
3. `requiredPermissions` is empty.
4. `missingInputs` is empty.
5. Source `executionBoundary` is `metadataOnly`.
6. `selectedToolId` and `actionId` are in the preview-safe allowlist.
7. `blockedReason` is null.
8. The action is not health, telehealth, camera, call, location, payment, identity, account, buying, selling, marketplace transaction, dispatch, scheduling, or another restricted/sensitive action.
9. Preview text is informational and does not promise execution.

## Blocked Rules

The following must not be preview-eligible from metadata alone:

- Start a telehealth video call.
- Use my camera to diagnose this crop.
- Call the doctor.
- Find my location.
- Sell my produce.
- Buy fertilizer.
- Process my payment.
- Log into my account.
- Verify my identity.

Blocked readiness uses `previewEligible: false`, `allowedNextStep: "blocked"`, `userVisibleInThisPhase: false`, and a non-empty `previewBlockedReason`.

## Low-Risk Examples

| Scenario | Preview status | Safety boundary |
| --- | --- | --- |
| Agriculture training | Eligible internally with `safePreviewTitle: "Review training resources"` | Does not open training or start an action. |
| Farm jobs | Eligible internally with `safePreviewTitle: "Review farm job resources"` | Does not apply or submit anything. |
| Irrigation learning | Eligible internally with `safePreviewTitle: "Review irrigation learning help"` | Does not open lessons or create records. |
| Field support | Eligible only as informational guidance | Does not dispatch, use location, schedule, call, or submit a service request. |
| Crop issue help | Eligible only as informational agriculture help | Does not use camera diagnosis, location, dispatch, scheduling, or record creation. |

## Marketplace Nuance

`Browse AgriTrade` may be preview-ready only as browse/informational help. It must not imply buying, selling, seller messaging, quotes, orders, account access, payment, checkout, or marketplace transaction execution.

Marketplace buy, sell, payment, account, order, quote, and transaction behavior remains blocked.

## Relationship To Metadata

`controlled-action-preview-readiness.v1` is derived only from valid `controlled-action-metadata.v1`. It is downstream of Level 1 label metadata and upstream of any future visible preview. Existing routers remain authoritative.

## Recommended Phase 8L Scope

Recommended next phase: **Phase 8L: Preview Readiness Browser Validation and Observation QA**.

Phase 8L should validate that preview readiness remains internal, inspect debug-only behavior if needed, and continue proving that no user-visible preview, confirmation, staging, route, permission, or execution behavior exists.
