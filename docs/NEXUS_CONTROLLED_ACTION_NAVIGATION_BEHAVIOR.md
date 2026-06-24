# Nexus Controlled Action Navigation Behavior

## Phase 8X Scope

Phase 8X adds the first controlled-agent behavior after the preview and confirmation-readiness layers: a confirmed, low-risk, internal navigation prototype.

This is navigation only. It is not tool execution. It does not stage, submit, buy, sell, pay, call, dispatch, schedule, verify identity, request permissions, use camera, use location, create records, mutate accounts, or open external websites.

## What Review Options May Do

`Review options` may navigate only inside the Ask Nexus/full-assistant surface and only after all of these conditions are true:

- A `controlled-action-navigation-readiness.v1` object exists.
- `navigationEligible` is `true`.
- `navigationRiskLevel` is `info` or `low`.
- `requiredPermissions` is empty.
- `missingInputs` is empty.
- `requiresConfirmationClick` is `true`.
- `allowedAfterConfirmationOnly` is `true`.
- `allowedNextStep` is `observeNavigationReadinessOnly`.
- `executionBoundary` is `navigationReadinessOnly`.
- `navigationBlockedReason` is empty.
- `targetRoute` is allowlisted for Phase 8X.

If any condition fails, `Review options` remains safe and reports that review is not available. No action is taken.

## Internal Route Allowlist

| Readiness `targetRoute` | Internal section | Boundary |
| --- | --- | --- |
| `training` | `learning` | Training resources only |
| `learning` | `learning` | Learning resources only |
| `jobs` | `workforce` | Job pathway resources only |
| `marketplaceBrowse` | `trade` | AgriTrade browse-only guidance |
| `agricultureHelp` | `trade` | Agriculture information only |
| `fieldSupportInfo` | `trade` | Field support information only |

The route is opened through the existing internal section router with quiet options. The route change keeps Ask Nexus open and does not open default actions or workflow modals.

## Status Copy

Successful controlled navigation uses safe status wording such as:

- Showing safe training resources. No account, permission, or transaction action was taken.
- Showing safe job pathway resources. No application, account, or transaction action was taken.
- Showing safe AgriTrade browsing guidance. No buy, sell, payment, or account action was taken.

Status copy must not imply execution. Avoid: executed, submitted, purchased, sold, paid, called, verified, permission granted, camera started, location used, dispatched, or scheduled.

## What Not Now Does

`Not now` remains clear-only. It clears preview and confirmation state. It does not navigate, execute, stage, request permissions, open workflows, or mutate records.

## High-Risk Exclusions

Phase 8X does not allow controlled navigation for:

- Health/telehealth
- Camera or video preview
- Location/map permission behavior
- Calls
- Payment
- Account/login
- Identity verification
- Buy/sell/transaction flows
- Dispatch or scheduling
- External links
- File or communication actions

High-risk, privacy-sensitive, permission-sensitive, transactional, account, and identity prompts must not show controlled navigation behavior.

## Marketplace Browse-Only Nuance

`marketplaceBrowse` may route to the existing `trade` section only as browse/read-only guidance. It must not start a sale, purchase, checkout, order creation, wallet action, buyer payment, seller message, or account action.

## Field Support And Crop Help Nuance

`fieldSupportInfo` and `agricultureHelp` may route to the existing `trade` section as informational support. They must not dispatch a field worker, schedule service, start drone/camera capture, request location, create a record, or call a provider.

## Passive Surfaces

Caption/global surfaces remain passive preview-only. They do not receive confirmation controls. Level 1 labels remain non-clickable and display-only.

## QA Coverage

Phase 8X is protected by:

- `scripts/nexus-controlled-action-navigation-behavior-qa.js`
- `npm run qa:nexus-controlled-action-navigation-behavior`
- `scripts/nexus-controlled-action-navigation-readiness-qa.js`
- `scripts/nexus-controlled-action-confirmation-ui-prototype-qa.js`
- `scripts/nexus-controlled-action-confirmation-readiness-qa.js`
- `scripts/nexus-controlled-action-preview-clear-qa.js`
- `scripts/nexus-controlled-action-preview-ui-qa.js`
- `scripts/nexus-controlled-action-preview-readiness-qa.js`
- `scripts/nexus-controlled-action-metadata-schema-qa.js`
- `scripts/nexus-level-one-suggestion-label-qa.js`

The `nexus-workforce` QA suite includes the navigation behavior check.

## Recommended Phase 8Y Browser Validation

Phase 8Y should validate in the Standard User browser build that:

- Low-risk prompts show labels, preview cards, and Ask-only controls.
- Clicking `Review options` navigates only to allowlisted internal sections.
- No workflow modal opens from the click.
- No permissions fire.
- No high-risk prompt gains controlled navigation.
- `Not now` remains clear-only.
- Caption/global surfaces stay passive.
- No raw navigation metadata appears in visible UI.
- Desktop, tablet, and mobile layouts remain usable.
