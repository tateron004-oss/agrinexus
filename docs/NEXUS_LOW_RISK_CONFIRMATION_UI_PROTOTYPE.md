# Nexus Low-Risk Confirmation UI Prototype

Status: Phase 8T non-executing low-risk confirmation UI prototype.

This document describes the first visible confirmation-control layer for Nexus controlled-action previews. It is intentionally inert. It does not execute actions, stage pending actions, route commands, open workflows, request permissions, or change `selectedToolId` inference.

## What Phase 8T Adds

Phase 8T adds a compact confirmation prototype panel for approved low-risk informational readiness. It appears only after an eligible low-risk controlled-action preview exists and only in the Ask Nexus/full assistant surface.

The prototype panel may show:

- a safe confirmation title;
- safe explanatory copy;
- `Review options`;
- `Not now`;
- a prototype status message.

The panel must not show raw metadata such as `selectedToolId`, `actionId`, `schemaVersion`, `executionBoundary`, `auditPolicy`, or blocked reasons.

## Placement

Confirmation prototype controls render only in the Ask Nexus/full assistant surface:

- root: `#globalAssistantBar`
- anchor: `#globalAssistantStatus`

Caption surfaces remain preview-only:

- `#userCaptionPanel` can show the Level 1 label and passive preview card.
- `#userCaptionPanel` must not show `Review options`, `Not now`, confirmation buttons, or confirmation prototype status.

## Button Labels

Allowed labels:

- `Review options`
- `Not now`

Forbidden labels:

- `Execute`
- `Start`
- `Open now`
- `Submit`
- `Buy`
- `Sell`
- `Pay`
- `Call`
- `Verify`
- `Use camera`
- `Use location`
- `Schedule`
- `Dispatch`
- `Apply`
- `Send`
- `Order`
- `Checkout`
- `Confirm action`
- `Yes, do it`

## Inert Button Behavior

`Review options`:

- does not route;
- does not execute;
- does not open workflows;
- does not request permissions;
- does not stage pending actions;
- does not submit, buy, sell, pay, call, verify, schedule, dispatch, use camera, or use location;
- only changes local prototype status to `Selected for review - no action has been taken.`

`Not now`:

- clears the controlled-action preview and confirmation prototype state;
- does not clear unrelated workflow modals or existing high-risk pending action gates;
- does not route, execute, stage, or request permissions.

## Eligibility

Controls may render only when all are true:

1. `schemaVersion` is `controlled-action-confirmation-readiness.v1`.
2. `confirmationEligible` is `true`.
3. `confirmationRiskLevel` is `info` or `low`.
4. `requiredPermissions` is empty.
5. `missingInputs` is empty.
6. `allowedNextStep` is `observeConfirmationReadinessOnly`.
7. `executionBoundary` is `confirmationReadinessOnly`.
8. `confirmationBlockedReason` is null.
9. `userVisibleInThisPhase` is `true`.
10. The surface is `ask-full-assistant`.

## High-Risk Exclusions

Controls must not render for:

- health or telehealth;
- video or camera;
- calls or messaging;
- location permission;
- payment or checkout;
- account, login, identity, or verification;
- buying, selling, quote, order, or marketplace transaction behavior;
- dispatch, scheduling, provider assignment, or field service request;
- prompts requiring permissions or missing inputs.

`Browse AgriTrade` may render controls only as browse-only informational guidance. Buy, sell, payment, account, quote, order, and transaction paths remain blocked.

## Clearing Behavior

The prototype clears when the controlled-action preview clears. It also clears when:

- a new command is not low-risk eligible;
- a high-risk prompt is entered;
- the assistant reset or close path clears previews;
- module navigation clears previews;
- `Not now` is clicked.

Low-risk repeated prompts replace the old prototype instead of stacking duplicate panels.

## QA Coverage

Phase 8T is protected by:

- `scripts/nexus-controlled-action-confirmation-ui-prototype-qa.js`
- `npm run qa:nexus-controlled-action-confirmation-ui-prototype`
- `scripts/nexus-controlled-action-confirmation-readiness-qa.js`
- `scripts/nexus-controlled-action-preview-clear-qa.js`
- `scripts/nexus-controlled-action-preview-ui-qa.js`
- `scripts/nexus-level-one-suggestion-label-qa.js`
- `node scripts/qa-suite.js nexus-workforce`

The QA verifies Ask-only placement, caption preview-only behavior, safe button labels, inert click behavior, high-risk exclusions, clearing behavior, and absence of raw metadata leaks.

Phase 8V adds a downstream internal `controlled-action-navigation-readiness.v1` schema for future navigation planning. That layer is documented in `docs/NEXUS_CONTROLLED_ACTION_NAVIGATION_READINESS.md` and remains hidden, observe-only, and disconnected from the Phase 8T buttons.

## Recommended Phase 8U

Recommended next phase: Phase 8U, Confirmation UI Browser Validation.

Phase 8U should validate the Standard User browser build across desktop, tablet, and mobile:

- low-risk prompts show controls only in Ask;
- captions remain passive;
- `Review options` only shows inert selected-for-review status;
- `Not now` clears only preview/prototype UI;
- high-risk prompts show no controls and clear stale controls;
- no raw metadata leaks;
- no console errors related to controlled-action confirmation UI.
