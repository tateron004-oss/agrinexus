# Nexus Low-Risk Confirmation UI Design Audit

Status: Phase 8S design audit only. No runtime behavior, visible UI, routing, staging, permission, or execution changes are approved by this document.

## 1. Executive Summary

Nexus now has visible low-risk informational preview cards and hidden internal `controlled-action-confirmation-readiness.v1` metadata. Phase 8R browser validation confirmed that confirmation readiness remains invisible, behavior-neutral, and cleared correctly after high-risk prompts.

The recommended first visible confirmation design is deliberately conservative: future low-risk confirmation controls should appear only in the primary Ask Nexus/full assistant surface, not in the caption surface. Caption surfaces should remain preview-only and passive. The first implementation should still be non-executing: it may demonstrate a selected-for-review state, but it must not route, open workflows, stage actions, request permissions, or execute.

## 2. Current System State

Current controlled-action layers:

- `controlled-action-metadata.v1`: internal metadata derived from low-risk Level 1 suggestion labels.
- `controlled-action-preview-readiness.v1`: internal readiness that can produce visible low-risk informational preview cards.
- `controlled-action-confirmation-readiness.v1`: hidden internal readiness derived only from safe preview readiness.

Current visible behavior:

- Low-risk prompts may show a visible Level 1 label.
- Low-risk prompts may show a display-only informational preview card.
- Preview cards are non-clickable and use `pointer-events: none`.
- Preview cards show only safe fields such as title, category, `Needs: No special permission`, summary, and `Preview only - no action has been taken.`
- High-risk, privacy, permission, transaction, account, identity, call, camera, location, and telehealth prompts do not show controlled-action preview cards or confirmation-readiness UI.

Current non-visible behavior:

- `controlled-action-confirmation-readiness.v1` can be built internally from safe preview readiness.
- It remains hidden and observation-only.
- It is not emitted by `server.js`.
- It is not rendered by the visible preview card or Level 1 label.

## 3. Current Assistant Surfaces

Inspection found two current render targets for Level 1 labels and low-risk preview cards:

- Caption/global assistant surface: `#userCaptionPanel` with anchor `#userCaptionText`.
- Ask/full assistant surface: `#globalAssistantBar` with anchor `#globalAssistantStatus`.

Phase 8R browser validation observed that when both the captions panel and Ask panel are visible, one preview can appear in each surface. That is acceptable for passive previews, but it creates risk if future confirmation controls are duplicated across surfaces.

No additional Standard User assistant surface was found that currently renders controlled-action preview cards.

## 4. Design Risks

Future confirmation UI carries risks even when limited to low-risk informational actions:

- Duplicate controls could appear in both captions and Ask panel surfaces.
- A compact caption control could look like a permission badge or system confirmation.
- Users could interpret a button as proof that an action already happened.
- Words such as Open, Start, Submit, Buy, Sell, Pay, Call, Verify, Schedule, or Dispatch could imply execution.
- Button clicks could accidentally become a new routing path if wired near existing command handlers.
- Mobile layouts could stack controls in a way that hides the preview-only boundary.
- High-risk prompt handling could leave stale confirmation controls visible after the preview is cleared.
- Raw metadata fields could leak into the UI if debug/observation objects are rendered directly.

## 5. Recommended First Confirmation UI Placement

Future low-risk confirmation controls should appear only in the Ask Nexus/full assistant surface.

Recommended first placement:

- Keep the existing low-risk preview card visible in the caption surface.
- Keep the caption surface preview-only and non-interactive.
- Render any future low-risk confirmation affordance only below the preview in the Ask/full assistant surface.
- Do not render confirmation controls in both surfaces.
- If the Ask panel is closed, do not show confirmation controls in captions as a fallback. The user can reopen Ask Nexus to review controls.

Rationale:

- The Ask/full assistant surface is already the explicit typed interaction surface.
- It has more space for safe explanatory copy.
- It reduces accidental taps on mobile.
- It avoids two controls competing for one readiness object.
- It keeps captions as a status/summary surface rather than an action surface.

## 6. Recommended Safe Button And Control Language

Safe future labels for low-risk informational confirmation only:

- `Prepare this`
- `Show next step`
- `Review options`
- `Not now`
- `Dismiss`

Preferred first prototype labels:

- Primary: `Review options`
- Secondary: `Not now`

Why these are preferred:

- `Review options` is informational and does not imply execution.
- `Not now` clearly cancels or dismisses without implying a pending action exists.
- The labels avoid route, permission, transaction, identity, or workflow-start claims.

## 7. Forbidden Button And Control Language

Do not use these labels in the first visible low-risk confirmation UI:

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

These words are reserved for existing explicit workflow confirmations or future separately approved action phases. They must not be introduced by controlled-action preview or confirmation-readiness metadata.

## 8. Recommended Safe Confirmation Copy

Safe copy for a future non-executing prototype:

> Nexus can prepare this next step for review. No action will be taken until you choose what to do next.

Supporting copy:

- `This is a low-risk informational step.`
- `No special permission is needed.`
- `You can dismiss this preview at any time.`
- `This does not open a workflow, submit data, request permission, or contact anyone.`

Avoid copy that implies:

- a workflow already opened;
- a task already started;
- permission was granted;
- a transaction, account, identity, or marketplace action is available;
- field dispatch, scheduling, calling, or provider contact occurred.

## 9. Eligibility Rules

Future confirmation UI may appear only when all rules are true:

1. `schemaVersion` is `controlled-action-confirmation-readiness.v1`.
2. `confirmationEligible` is `true`.
3. `confirmationRiskLevel` is `info` or `low`.
4. `requiredPermissions` is empty.
5. `missingInputs` is empty.
6. `executionBoundary` is `confirmationReadinessOnly`.
7. `allowedNextStep` is `observeConfirmationReadinessOnly` or a separately approved non-executing UI-only value.
8. `userVisibleInThisPhase` is explicitly enabled only in a future approved UI phase.
9. `confirmationBlockedReason` is null.
10. The action/category is not health, telehealth, camera, call, location, payment, identity, account, buying, selling, marketplace transaction, dispatch, scheduling, or another restricted/sensitive action.
11. The visible copy uses only approved safe wording.
12. Existing high-risk confirmation gates remain authoritative.

## 10. Single-Surface Coordination Recommendation

Future confirmation controls should be single-surface only.

Recommended coordination model:

- Captions: Level 1 label plus passive preview only.
- Ask/full assistant surface: Level 1 label, passive preview, and the future low-risk confirmation controls.
- One shared readiness object controls the future UI state.
- Clearing the preview also clears confirmation controls.
- A new low-risk prompt replaces the old confirmation controls.
- Any high-risk prompt clears confirmation controls immediately.
- Navigation, assistant close, reset, or module change clears controls unless the command-owned route explicitly preserves a passive preview for that turn.

The first visible implementation should not show controls in captions, because captions are compact, persistent, and easier to misinterpret as status confirmation rather than a deliberate user choice.

## 11. Non-Execution Boundary

Future confirmation UI must not execute in its first visible phase.

Recommended staged path:

### Phase 8T: Non-Executing Low-Risk Confirmation UI Prototype

- Add visible controls only in the Ask/full assistant surface.
- Keep controls non-executing.
- Do not route, open workflows, stage pending actions, request permissions, or execute.
- Pressing `Review options` may show an inert selected-for-review state or a clear `not enabled yet` message.
- Pressing `Not now` or `Dismiss` clears only the preview/confirmation UI.

### Phase 8U: Confirmation UI Browser Validation

- Validate Standard User browser behavior.
- Validate mobile layout.
- Validate high-risk clears.
- Validate no metadata leaks.
- Validate no duplicate controls across surfaces.

### Phase 8V: Confirmed Low-Risk Navigation Readiness Schema

- Define a separate readiness schema for future confirmed low-risk navigation.
- Keep it distinct from high-risk actions.
- Keep route/navigation readiness separate from execution.

Later phases may consider confirmed low-risk navigation only after separate audit and QA. High-risk actions remain outside this path.

## 12. Cancel And Dismiss Behavior

Future cancel/dismiss controls must be narrow:

- `Dismiss` clears only the visible confirmation/preview UI.
- `Not now` clears only the visible confirmation/preview UI.
- Dismiss does not route.
- Dismiss does not execute.
- Dismiss does not mutate records.
- Dismiss does not change selectedToolId inference.
- Dismiss does not request permissions.
- Dismiss does not affect existing workflow modals or pending high-risk confirmation gates.

High-risk prompts after a visible low-risk confirmation must clear confirmation state and passive preview state.

## 13. High-Risk Exclusions

No future low-risk confirmation UI may appear for:

- telehealth or health intake;
- video or camera;
- calling or messaging;
- location or maps permission;
- payments, checkout, wallet, or money movement;
- identity, login, account, or verification;
- buying, selling, quote, order, or marketplace transaction behavior;
- dispatch, scheduling, provider assignment, or field service request;
- applications, submissions, certificates, or official records unless separately audited;
- anything requiring permission, missing inputs, or explicit high-risk confirmation.

Existing direct typed command routing may still open current modules/workflows where already supported, but controlled-action preview and confirmation readiness must not be the source of that route.

## 14. Future QA Requirements

Future implementation QA should verify:

- Low-risk controls render only when confirmation readiness is eligible.
- Controls render only in the Ask/full assistant surface if this design is followed.
- Caption surface remains preview-only.
- No controls appear for high-risk prompts.
- Button labels avoid forbidden verbs.
- Button clicks do not execute.
- Button clicks do not route.
- Button clicks do not request permissions.
- Button clicks do not stage pending actions.
- `Dismiss` and `Not now` clear only preview/confirmation UI.
- High-risk prompts clear stale confirmation controls.
- New low-risk prompts replace old controls rather than stacking.
- No duplicate controls across surfaces.
- Mobile layout remains readable and avoids horizontal overflow.
- No raw metadata leaks.
- Existing confirmation gates for calls, payments, settings, appointments, health, privacy, and other high-risk actions still pass.

Suggested future QA scripts:

- `scripts/nexus-low-risk-confirmation-ui-qa.js`
- `scripts/nexus-low-risk-confirmation-ui-browser-checklist.md` or a docs checklist
- Update `scripts/nexus-controlled-action-confirmation-readiness-qa.js` only if the schema changes.
- Keep `scripts/nexus-controlled-action-preview-clear-qa.js` as a clearing regression guard.

## 15. Recommended Phase 8T Scope

Recommended next phase: Phase 8T, Non-Executing Low-Risk Confirmation UI Prototype.

Phase 8T should:

- render confirmation controls only in the Ask/full assistant surface;
- use `Review options` and `Not now`;
- keep captions preview-only;
- add no execution, route, staging, permission, workflow opening, or selectedToolId changes;
- keep the feature limited to existing low-risk allowlist categories;
- keep high-risk prompts blocked from confirmation UI;
- add static QA that proves controls are single-surface, safe-labeled, non-executing, and cleared by high-risk prompts.

Phase 8T should not:

- add confirmed navigation;
- add high-risk confirmation UI;
- add production action execution;
- add workflow launching from preview metadata;
- make preview cards or labels clickable.

## 16. Files Inspected

- `public/app.js`
- `public/styles.css`
- `docs/NEXUS_CONTROLLED_ACTION_CONFIRMATION_READINESS.md`
- `docs/NEXUS_CONTROLLED_ACTION_PREVIEW_READINESS.md`
- `docs/NEXUS_CONTROLLED_ACTION_METADATA_SCHEMA.md`
- `scripts/nexus-controlled-action-confirmation-readiness-qa.js`
- `scripts/nexus-controlled-action-preview-clear-qa.js`
- `scripts/nexus-controlled-action-preview-ui-qa.js`
- `scripts/nexus-controlled-action-preview-readiness-qa.js`
- `scripts/nexus-controlled-action-metadata-schema-qa.js`
- `package.json`
- `scripts/qa-suite.js`

## 17. Behavior Intentionally Not Changed

This audit does not change:

- visible confirmation UI;
- preview card behavior;
- Level 1 label behavior;
- selectedToolId inference;
- command routing;
- workflow opening;
- staging or pending actions;
- execution;
- permission prompts;
- high-risk confirmation gates;
- health, telehealth, camera, call, location, payment, account, identity, marketplace, or map behavior.
