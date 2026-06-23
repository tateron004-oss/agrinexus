# Nexus Controlled Action Confirmation Readiness

Status: Phase 8Q hidden internal readiness metadata only.

This document defines the `controlled-action-confirmation-readiness.v1` object. It is a future-facing internal layer downstream of `controlled-action-preview-readiness.v1`. It does not add visible UI, confirmation controls, action buttons, staging, routing, permission prompts, workflow opening, or execution.

## Purpose

Phase 8Q answers a narrow design question: after Nexus has already produced a safe low-risk preview readiness object, can it also prepare hidden metadata that describes whether a future confirmation step could be considered?

The answer is yes, but only as observation-only metadata. Existing routers, workflow buttons, confirmation gates, and permission flows remain authoritative.

## Current Phase Restrictions

Phase 8Q intentionally does not:

- show a confirmation preview;
- show `Do you want me to continue?`;
- add Continue, Confirm, Execute, Open, Start, Call, Pay, Buy, Sell, Location, Camera, or Permission controls;
- make Level 1 labels clickable;
- make controlled action previews clickable;
- stage pending actions;
- request permissions;
- open workflows;
- route commands;
- change `selectedToolId` inference;
- execute tools or provider actions; or
- change high-risk confirmation gates.

## Schema

```json
{
  "schemaVersion": "controlled-action-confirmation-readiness.v1",
  "sourcePreviewReadinessVersion": "controlled-action-preview-readiness.v1",
  "actionId": "openTrainingResources",
  "selectedToolId": "workforce.training",
  "levelOneLabel": "Training",
  "confirmationEligible": true,
  "confirmationBlockedReason": null,
  "confirmationRiskLevel": "low",
  "confirmationMode": "lowRiskConfirmationReadinessOnly",
  "safeConfirmationTitle": "Continue to training resources",
  "safeConfirmationSummary": "Nexus can keep a future training-resource review step ready for an explicit user-controlled flow.",
  "confirmationQuestion": "Would you like Nexus to keep this low-risk next step ready for a future review flow?",
  "requiredPermissions": [],
  "missingInputs": [],
  "allowedNextStep": "observeConfirmationReadinessOnly",
  "executionBoundary": "confirmationReadinessOnly",
  "auditPolicy": "observeOnly",
  "userVisibleInThisPhase": false
}
```

Required fields:

- `schemaVersion`: must be `controlled-action-confirmation-readiness.v1`.
- `sourcePreviewReadinessVersion`: must reference `controlled-action-preview-readiness.v1`.
- `actionId`
- `selectedToolId`
- `levelOneLabel`
- `confirmationEligible`
- `confirmationBlockedReason`
- `confirmationRiskLevel`
- `confirmationMode`
- `safeConfirmationTitle`
- `safeConfirmationSummary`
- `confirmationQuestion`
- `requiredPermissions`
- `missingInputs`
- `allowedNextStep`
- `executionBoundary`
- `auditPolicy`
- `userVisibleInThisPhase`

## Eligibility Rules

Confirmation readiness may be eligible only when all conditions are true:

1. Source readiness uses `schemaVersion: "controlled-action-preview-readiness.v1"`.
2. Source preview has `previewEligible: true`.
3. Source preview has `userVisibleInThisPhase: true`.
4. Source risk is `info` or `low`.
5. `requiredPermissions` is empty.
6. `missingInputs` is empty.
7. Source `allowedNextStep` is `preparePreviewOnly`.
8. Source `executionBoundary` is `previewOnlyReadiness`.
9. Source `previewBlockedReason` is null.
10. `selectedToolId` and `actionId` match the low-risk allowlist.
11. Identity text is not health, telehealth, camera, call, location, payment, identity, account, buying, selling, quote, order, message, dispatch, scheduling, or another restricted/sensitive action.
12. Confirmation wording does not claim execution or permission state.

## Low-Risk Allowlist

| selectedToolId | actionId | Readiness status |
| --- | --- | --- |
| `workforce.training` | `openTrainingResources` | Hidden confirmation readiness only |
| `workforce.job_pathways` | `showFarmJobs` | Hidden confirmation readiness only |
| `workforce.field_support` | `openFieldSupportGuidance` | Hidden confirmation readiness only |
| `learning.start` | `explainLearningTopic` | Hidden confirmation readiness only |
| `marketplace.agritrade` | `browseMarketplace` | Hidden confirmation readiness only |
| `agriculture.help` | `explainAgricultureHelp` | Hidden confirmation readiness only |

## Blocked Examples

The following must not become confirmation-ready from metadata alone:

- Start a telehealth video call.
- Use my camera to diagnose this crop.
- Call the doctor.
- Find my location.
- Sell my produce.
- Buy fertilizer.
- Process my payment.
- Log into my account.
- Verify my identity.

Blocked readiness uses `confirmationEligible: false`, `allowedNextStep: "blocked"`, `executionBoundary: "confirmationReadinessOnly"`, `userVisibleInThisPhase: false`, and a non-empty `confirmationBlockedReason`.

## Visibility Boundary

`controlled-action-confirmation-readiness.v1` is not visible in Phase 8Q. It may be stored with debug/observation metadata and reset with the controlled action preview lifecycle. It must not be rendered by the controlled action preview card, the Level 1 label, or any assistant surface.

Any future visible confirmation phase must be separately approved and must keep existing high-risk confirmation gates intact.

## Relationship To Preview Readiness

Confirmation readiness is derived only from `controlled-action-preview-readiness.v1`. It is downstream of:

1. `controlled-action-metadata.v1`
2. `controlled-action-preview-readiness.v1`
3. visible low-risk informational preview eligibility

It is not a replacement for existing confirmation gates.

## QA Coverage

Phase 8Q is protected by:

- `scripts/nexus-controlled-action-confirmation-readiness-qa.js`
- `npm run qa:nexus-controlled-action-confirmation-readiness`
- `node scripts/qa-suite.js nexus-workforce`

The QA verifies the schema, low-risk allowlist, blocked high-risk examples, no visible UI wiring, no execution calls, package alias coverage, and suite coverage.
