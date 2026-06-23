# Nexus Controlled Action Preview Readiness

Status: Phase 8O low-risk informational preview UI with hardened clearing lifecycle.

This document defines when Nexus may prepare and, for a narrow allowlist, show a small visible informational preview from a `controlled-action-preview-readiness.v1` object. It does not authorize action staging, confirmation, routing, workflow opening, permission prompts, or execution.

## Purpose

Phase 8K answered a narrow design question: given a valid `controlled-action-metadata.v1` object, can Nexus internally mark a future preview as safe to prepare later?

Phase 8M adds the first visible version of that readiness layer: a compact, display-only preview card for approved low-risk informational actions. The readiness object remains non-executing and downstream of existing routing.

Phase 8O hardens the lifecycle of that card so preview content cannot become stale across unrelated commands, blocked prompts, assistant resets, or user-driven module navigation.

Phase 8Q adds a hidden downstream `controlled-action-confirmation-readiness.v1` object for future confirmation planning. It is internal metadata only: no visible UI, no confirmation prompt, no routing, no staging, no permission prompt, and no execution.

## Current Phase Restrictions

Phase 8M intentionally does not:

- show `Action:`, `Risk:`, `Needs:`, or `Do you want me to continue?`;
- render working action buttons, confirmation controls, modals, or executable preview panels;
- make Level 1 labels clickable;
- stage pending actions;
- request permissions;
- open workflows;
- route commands;
- change selectedToolId inference;
- execute tools or provider actions.

Phase 8O also intentionally does not add dismiss buttons, action buttons, staging, confirmation, routing, workflow opening, permission prompts, or any new preview eligibility. It only clears or replaces the existing display-only preview state.

Phase 8M may show a small visible informational preview only when the readiness object is low-risk, permission-free, input-complete, and explicitly marked `userVisibleInThisPhase: true`.

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
  "userVisibleInThisPhase": true
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
- `executionBoundary`: must remain `metadataOnly` or `previewOnlyReadiness` in Phase 8M.
- `auditPolicy`: `observeOnly` or `logOnPreviewFuture`.
- `userVisibleInThisPhase`: may be `true` only for Phase 8M-approved low-risk informational previews; blocked, sensitive, permission-required, and transactional readiness must remain `false`.

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
10. Visible preview text does not include completion or action words such as opened, started, submitted, called, paid, verified, permission granted, or similar.

## Visible Preview UI Rules

When visible, the preview card may show:

- `safePreviewTitle`
- `Category: <levelOneLabel>`
- `Needs: No special permission`
- a short safe summary
- `Preview only - no action has been taken.`

The preview must not show:

- raw `schemaVersion`
- raw `selectedToolId`
- raw `actionId`
- `auditPolicy`
- `executionBoundary`
- internal blocked reasons
- debug metadata
- working Continue, Confirm, Execute, Open, Start, Call, Pay, Buy, Sell, Location, Camera, or Permission controls

The preview is not a workflow. It is not a confirmation. It is not a route. It is not an action button. Existing routers remain authoritative.

## Phase 8O Preview Lifecycle Rules

Preview state is transient. Nexus may show a visible preview only for the current low-risk informational suggestion. Any later command, reset, or ineligible metadata path must either replace the preview with a newly eligible preview or clear it completely.

### Clear Conditions

The preview and Level 1 label are cleared when:

- a new command starts processing;
- a local simple-user command does not produce an approved low-risk suggestion;
- a high-risk, privacy-sensitive, permission-sensitive, transaction, account, identity, call, camera, location, health, telehealth, buy, or sell prompt is entered;
- backend observation has no `agentAction`, a non-metadata runtime status, a non-existing-router source, null metadata, blocked readiness, restricted readiness, missing permissions, missing inputs, or any other ineligible readiness;
- the visible Level 1 suggestion state is cleared;
- command inputs are reset to empty;
- the Ask Nexus surface is closed;
- the user returns home; or
- the user changes modules through visible navigation.

Repeating the same low-risk command replaces the existing preview content instead of stacking duplicate cards. Entering a different low-risk command replaces the old preview with the new safe preview.

### Dismiss Behavior

Phase 8O does not add a visible dismiss control. Clearing is automatic through the lifecycle rules above. A future dismiss affordance may only hide the preview and must not use labels such as Continue, Confirm, Go, Open, Start, or any action-like wording.

### Clearing Boundary

Clearing a preview:

- does not execute tools;
- does not stage pending actions;
- does not confirm actions;
- does not route commands;
- does not open workflows;
- does not request permissions;
- does not change `selectedToolId` inference; and
- does not remove unrelated legitimate UI.

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
| Agriculture training | Eligible for visible informational preview with `safePreviewTitle: "Review training resources"` | Does not open training or start an action. |
| Farm jobs | Eligible for visible informational preview with `safePreviewTitle: "Review farm job resources"` | Does not apply or submit anything. |
| Irrigation learning | Eligible for visible informational preview with `safePreviewTitle: "Review irrigation learning help"` | Does not open lessons or create records. |
| Field support | Eligible only as informational guidance | Does not dispatch, use location, schedule, call, or submit a service request. |
| Crop issue help | Eligible only as informational agriculture help | Does not use camera diagnosis, location, dispatch, scheduling, or record creation. |

## Marketplace Nuance

`Browse AgriTrade` may be preview-ready only as browse/informational help. It must not imply buying, selling, seller messaging, quotes, orders, account access, payment, checkout, or marketplace transaction execution.

Marketplace buy, sell, payment, account, order, quote, and transaction behavior remains blocked.

## Relationship To Metadata

`controlled-action-preview-readiness.v1` is derived only from valid `controlled-action-metadata.v1`. It is downstream of Level 1 label metadata and upstream of the Phase 8M visible informational preview. Existing routers remain authoritative.

Phase 8Q may derive `controlled-action-confirmation-readiness.v1` only from preview readiness that is already low-risk, visible-preview eligible, permission-free, input-complete, and preview-only. That downstream object remains hidden and observation-only.

## QA Coverage

Phase 8M through Phase 8Q are protected by:

- `scripts/nexus-controlled-action-metadata-schema-qa.js`
- `scripts/nexus-controlled-action-preview-readiness-qa.js`
- `scripts/nexus-controlled-action-preview-ui-qa.js`
- `scripts/nexus-controlled-action-preview-clear-qa.js`
- `scripts/nexus-controlled-action-confirmation-readiness-qa.js`
- `scripts/nexus-level-one-suggestion-label-qa.js`
- `scripts/nexus-low-risk-suggestion-builder-qa.js`
- `scripts/nexus-low-risk-suggestion-observation-qa.js`
- `scripts/nexus-selected-tool-id-alignment-qa.js`
- `node scripts/qa-suite.js nexus-workforce`

## Recommended Phase 8P Scope

Recommended next phase: **Phase 8P: Controlled Action Preview Follow-Up Browser Validation**.

Phase 8P should validate the Phase 8O clearing lifecycle in the standard user browser build: low-risk previews replace cleanly, high-risk prompts clear old previews, module navigation clears stale cards, and no confirmation, staging, route, permission, or execution behavior is introduced.
