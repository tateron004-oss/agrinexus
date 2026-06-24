# Nexus Controlled Action Navigation Readiness

Status: Phase 8V internal schema and QA, with Phase 8X allowlisted behavior documented separately.

This document defines the `controlled-action-navigation-readiness.v1` object. It is an internal layer downstream of `controlled-action-confirmation-readiness.v1`. Phase 8V does not add navigation, routing, workflow opening, staging, permission prompts, execution, or new visible controls.

Phase 8X adds a separate behavior layer that may consume eligible readiness only after the user clicks `Review options` in the Ask Nexus/full-assistant surface. That behavior is documented in `docs/NEXUS_CONTROLLED_ACTION_NAVIGATION_BEHAVIOR.md` and is limited to allowlisted internal section navigation.

## Purpose

Phase 8V answers one narrow question:

> If a low-risk confirmation readiness object is valid, could Nexus internally mark a future navigation target as safe to prepare after an explicit confirmation click?

The answer is yes, but only as observe-only metadata. Existing routers, workflow buttons, confirmation gates, and permission boundaries remain authoritative.

## Current Phase Restrictions

Phase 8V readiness intentionally does not:

- navigate;
- route commands;
- open workflows;
- stage pending actions;
- request permissions;
- execute tools or provider actions;
- make `Review options` navigate;
- make `Not now` do anything except clear preview/prototype state;
- add Continue, Confirm, Open, Start, Execute, Buy, Sell, Pay, Call, Verify, Location, Camera, Schedule, or Dispatch controls;
- make Level 1 labels clickable;
- make caption/global preview cards interactive;
- change `selectedToolId` inference; or
- weaken high-risk, privacy, permission, account, identity, transaction, call, camera, location, or telehealth guardrails.

Phase 8X changes only one item: `Review options` may now perform safe internal section navigation when the readiness object passes every allowlist check. It still must not execute tools, open workflows, stage actions, request permissions, mutate records, or trigger high-risk flows.

## Schema

```json
{
  "schemaVersion": "controlled-action-navigation-readiness.v1",
  "sourceConfirmationReadinessVersion": "controlled-action-confirmation-readiness.v1",
  "actionId": "openTrainingResources",
  "selectedToolId": "workforce.training",
  "levelOneLabel": "Training",
  "navigationEligible": true,
  "navigationBlockedReason": null,
  "navigationRiskLevel": "low",
  "navigationMode": "lowRiskInternalNavigationReadinessOnly",
  "targetRoute": "training",
  "targetSurface": "standardUserModule",
  "requiresConfirmationClick": true,
  "allowedAfterConfirmationOnly": true,
  "requiredPermissions": [],
  "missingInputs": [],
  "safeNavigationTitle": "Review training resources",
  "safeNavigationSummary": "Nexus may prepare a future internal training-resource navigation review after an explicit confirmation click. No navigation has happened.",
  "allowedNextStep": "observeNavigationReadinessOnly",
  "executionBoundary": "navigationReadinessOnly",
  "auditPolicy": "observeOnly",
  "userVisibleInThisPhase": false
}
```

Required fields:

- `schemaVersion`: must be `controlled-action-navigation-readiness.v1`.
- `sourceConfirmationReadinessVersion`: must be `controlled-action-confirmation-readiness.v1`.
- `actionId`
- `selectedToolId`
- `levelOneLabel`
- `navigationEligible`
- `navigationBlockedReason`: null only for eligible low-risk readiness.
- `navigationRiskLevel`: one of `info`, `low`, `medium`, `high`, or `restricted`.
- `navigationMode`: one of `none`, `lowRiskInternalNavigationReadinessOnly`, `externalNavigationBlocked`, `permissionRequiredNavigationBlocked`, or `restrictedNavigationBlocked`.
- `targetRoute`: internal route key. Phase 8V stores it only; Phase 8X may use it only through the behavior-layer allowlist.
- `targetSurface`: `askNexus`, `standardUserModule`, `passiveCaptionOnly`, or `none`.
- `requiresConfirmationClick`: true for eligible readiness.
- `allowedAfterConfirmationOnly`: true for eligible readiness.
- `requiredPermissions`
- `missingInputs`
- `safeNavigationTitle`
- `safeNavigationSummary`
- `allowedNextStep`: must be `observeNavigationReadinessOnly` for eligible readiness.
- `executionBoundary`: must be `navigationReadinessOnly`.
- `auditPolicy`
- `userVisibleInThisPhase`: must be false in Phase 8V.

## Eligibility Rules

Navigation readiness may be eligible only when all conditions are true:

1. Source uses `schemaVersion: "controlled-action-confirmation-readiness.v1"`.
2. `confirmationEligible` is true.
3. `confirmationRiskLevel` is `info` or `low`.
4. `requiredPermissions` is empty.
5. `missingInputs` is empty.
6. Source `allowedNextStep` is `observeConfirmationReadinessOnly`.
7. Source `executionBoundary` is `confirmationReadinessOnly`.
8. `actionId` and `selectedToolId` are in the low-risk navigation-readiness allowlist.
9. `confirmationBlockedReason` is null.
10. The action is not health, telehealth, camera, call, location, payment, identity, account, buying, selling, marketplace transaction, dispatch, scheduling, external navigation, file operation, communication, or another restricted/sensitive action.
11. `targetRoute` is internal and allowlisted.
12. `requiresConfirmationClick` is true.
13. `allowedAfterConfirmationOnly` is true.

## Low-Risk Examples

| Scenario | `targetRoute` | Boundary |
| --- | --- | --- |
| Agriculture training | `training` | Internal readiness only; no navigation. |
| Farm jobs | `jobs` | Internal readiness only; no application or submission. |
| Irrigation learning | `learning` | Internal readiness only; no lesson opening or record creation. |
| Browse AgriTrade | `marketplaceBrowse` | Browse-only internal readiness; no transaction. |
| Crop issue help | `agricultureHelp` | Informational guidance only; no camera, location, or dispatch. |
| Field support | `fieldSupportInfo` | Informational support only; no dispatch, scheduling, call, or location use. |

## Blocked Rules

The following must not be navigation-eligible:

- Start a telehealth video call.
- Use my camera to diagnose this crop.
- Call the doctor or provider.
- Find or use location.
- Sell produce.
- Buy fertilizer.
- Process payment.
- Log into an account.
- Verify identity.
- Schedule or dispatch field support.
- Create marketplace transactions.
- Launch external websites or system handoffs.
- Send communications or perform file operations.

Blocked readiness uses `navigationEligible: false`, `allowedNextStep: "blocked"`, `executionBoundary: "navigationReadinessOnly"`, `userVisibleInThisPhase: false`, and a non-empty `navigationBlockedReason`.

## Marketplace Nuance

`Browse AgriTrade` may be navigation-ready only for a future internal browse/read-only marketplace surface.

Buy, sell, order, quote, payment, account, checkout, messaging, or transaction flows remain blocked.

## Field Support Nuance

Field support may be navigation-ready only for informational support resources.

Dispatch, scheduling, calling, location use, service request submission, camera use, and field evidence creation remain blocked.

## Relationship To Confirmation Readiness

`controlled-action-navigation-readiness.v1` is derived only from valid `controlled-action-confirmation-readiness.v1` objects. It is not derived from raw user text, Level 1 labels, preview cards, buttons, or server routes.

The Phase 8T `Review options` and `Not now` controls remain non-executing. Phase 8V does not connect those controls to navigation readiness.

## QA Coverage

Phase 8V is protected by:

- `scripts/nexus-controlled-action-navigation-readiness-qa.js`
- `npm run qa:nexus-controlled-action-navigation-readiness`
- `node scripts/qa-suite.js nexus-workforce`

The QA verifies schema fields, low-risk allowlist, blocked high-risk examples, marketplace and field-support boundaries, hidden visibility, no DOM rendering, no new controls, package alias coverage, suite coverage, and no navigation/execution calls.

## Recommended Phase 8W Scope

Recommended next phase: **Phase 8W: Navigation Readiness Browser Validation**.

Phase 8W should validate in the standard user browser build that navigation readiness remains invisible, behavior-neutral, and disconnected from `Review options`, `Not now`, Level 1 labels, caption previews, workflow routing, and permission prompts.
