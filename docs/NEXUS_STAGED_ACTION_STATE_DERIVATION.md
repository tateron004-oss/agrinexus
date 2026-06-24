# Nexus Staged Action State Derivation

Phase: 12F staged action UI state derivation QA
Status: pure helper, documentation, and local-safe QA only

## 1. Purpose And Scope

This document defines a pure, local-safe helper that converts an `actionDecision` metadata object into an inert staged-action UI state object. The helper prepares future UI work by applying the Phase 12E Action Decision Staging UI Contract without rendering UI and without enabling execution.

This phase does not wire derived state into visible Standard User UI. It does not create execution buttons, open confirmation modals, request browser permissions, place calls, send messages, share location, open camera, make purchases, submit forms, alter health workflow state, claim emergency dispatch, or invoke providers.

## 2. Relationship To Phase 12E Staging UI Contract

Phase 12E defined the UI states and rules for a future staged action surface:

- `hidden_metadata_only`
- `informational_response`
- `suggestion_preview`
- `review_option`
- `staged_action`
- `missing_input_required`
- `confirmation_required`
- `provider_handoff_ready`
- `blocked_restricted`
- `cancelled`

Phase 12F implements a pure state derivation helper that maps existing `actionDecision` metadata into one of those states. It is not a renderer. It is not an executor. It is not loaded by the Standard User page.

## 3. Helper Location And API

Helper file:

```text
public/nexus-staged-action-state.js
```

Public API:

```js
deriveNexusStagedActionState(actionDecision, context)
```

The helper follows the same frontend-safe UMD pattern as the Nexus planner, mapper, and classifier modules. It can be imported in Node QA and may be loaded by a future browser phase only after separate UI safety review.

## 4. Input actionDecision Requirements

The helper expects an object shaped by `docs/NEXUS_AUTONOMOUS_ACTION_SCHEMA.md`, commonly produced by `mapNexusPromptToActionDecision(...)`.

Important input fields:

- `actionId`
- `intent`
- `selectedToolId`
- `executionLevel`
- `riskLevel`
- `domain`
- `userVisibleLabel`
- `summary`
- `requiredInputs`
- `missingInputs`
- `requiredPermissions`
- `confirmationRequired`
- `confirmationText`
- `cancelPath`
- `providerCandidates`
- `executionBoundary`
- `auditPolicy`
- `safetyNotes`
- `resultState`
- `failureReason`

Invalid or empty input derives to `hidden_metadata_only`.

## 5. Output State Object Shape

The helper returns:

```json
{
  "uiState": "review_option",
  "visibleLabel": "Review farm jobs",
  "description": "Nexus can help you review farm job options.",
  "allowedControls": ["review_options"],
  "blockedControls": ["execute", "provider_handoff", "request_permission"],
  "confirmationRequired": false,
  "permissionRequired": false,
  "providerHandoffAllowed": false,
  "executionAllowed": false,
  "riskLevel": "low",
  "executionBoundary": "navigation_only",
  "resultState": "proposed",
  "reason": "Low-risk navigation can be reviewed without execution.",
  "safetyNotes": []
}
```

Required output invariants:

- `executionAllowed` is always `false` in Phase 12F.
- `providerHandoffAllowed` is always `false` in Phase 12F.
- `allowedControls` may describe future UI affordances but cannot execute.
- `blockedControls` always includes real-world action controls.
- `reason` explains why the state is safe.
- `safetyNotes` preserves non-authority language.

## 6. UI State Derivation Rules

### hidden_metadata_only

Returned when no usable `actionDecision` exists, or when an unknown shape should stay hidden.

### informational_response

Returned for `executionBoundary: "conversation_only"` when the response is purely informational.

### suggestion_preview

Returned for low-risk `suggestion_only` metadata. `executionAllowed` remains false. Future controls may include `learn_more`, `review_options`, or `cancel`.

### review_option

Returned for low-risk `navigation_only` metadata. Future controls may include `review_options`, but no form submission, purchase, contact, provider action, or workflow execution may occur from the derived state.

### staged_action

Returned for medium-risk or `staged_only` metadata when no higher-priority block applies. The state may describe draft/review preparation, but execution remains false.

### missing_input_required

Returned whenever `missingInputs` is non-empty. `missingInputs must block execution`.

### confirmation_required

Returned when `confirmationRequired` is true, `executionBoundary` is `confirmation_required`, or the action is high risk without missing inputs or restricted blocks.

Plain-language rule: confirmationRequired true means no execution may occur.

### provider_handoff_ready

Future state for `provider_handoff_only` after all future policy and confirmation checks are satisfied. Phase 12F keeps `providerHandoffAllowed` false even if this state is derived for future readiness.

Plain-language rule: provider_handoff_only means Nexus may prepare a handoff but did not execute the action.

### blocked_restricted

Returned for `riskLevel: "restricted"`, `executionBoundary: "blocked"`, or `resultState: "execution_blocked"`.

Plain-language rule: restricted actions must not execute.

### cancelled

Returned when `actionDecision.resultState` is `cancelled` or `context.cancelled` is true.

## 7. Risk-Based Derivation Rules

### low

Low-risk `suggestion_only` becomes `suggestion_preview`. Low-risk `navigation_only` becomes `review_option`. No confirmation or permission is required.

### medium

Medium-risk metadata can become `staged_action` or `confirmation_required`, depending on missing inputs and boundary. It cannot execute.

### high

High-risk metadata becomes `missing_input_required`, `confirmation_required`, or another blocked state. It cannot execute. No browser permissions are represented as already granted.

### restricted

Restricted metadata always becomes `blocked_restricted`. It cannot execute. It cannot show execution controls.

## 8. Missing-Input Handling

If `missingInputs` is non-empty:

- `uiState` must be `missing_input_required`.
- `executionAllowed` must be false.
- `providerHandoffAllowed` must be false.
- `allowedControls` may include `provide_missing_input` or `cancel` only.
- `reason` must explain that missing inputs block execution.

Examples:

- missing contact name;
- missing phone number;
- missing message body;
- missing provider;
- missing location permission;
- missing marketplace listing;
- missing health authorization.

## 9. Confirmation Handling

If `confirmationRequired` is true:

- `uiState` should be `confirmation_required` unless missing inputs or restricted blocks apply first.
- no execution may occur;
- future UI must show action, target, provider, risk, consequence, and cancel path;
- vague acknowledgments must not confirm high-risk actions.

Selecting missing inputs, viewing previews, or navigating to review sections does not count as confirmation.

## 10. Provider Handoff Handling

For `provider_handoff_only`:

- `provider_handoff_ready` may be derived only for future readiness;
- `providerHandoffAllowed` remains false in Phase 12F;
- `executionAllowed` remains false;
- the state must not mean execution happened;
- future provider handoff must still pass policy, confirmation, permission, and audit.

## 11. Safety Invariants

Every derived state enforces:

- executionAllowed is false in this phase.
- providerHandoffAllowed is false in this phase.
- no button may execute real-world action directly from actionDecision metadata.
- selectedToolId must not directly execute.
- agentAction must not directly execute.
- missingInputs must block execution.
- restricted actions must not execute.
- confirmationRequired true means no execution may occur.
- provider_handoff_only means Nexus may prepare a handoff but did not execute the action.
- no browser permissions.
- no call execution.
- no message execution.
- no camera opening.
- no location sharing.
- no transaction.
- no emergency dispatch claim.
- Standard User visible behavior remains unchanged.

## 12. Representative Examples

### Learning Suggestion

Input:

```json
{ "riskLevel": "low", "executionBoundary": "suggestion_only" }
```

Output:

```json
{ "uiState": "suggestion_preview", "executionAllowed": false }
```

### Jobs Navigation

Input:

```json
{ "domain": "jobs", "riskLevel": "low", "executionBoundary": "navigation_only" }
```

Output:

```json
{ "uiState": "review_option", "executionAllowed": false }
```

### Call With Missing Contact

Input:

```json
{ "riskLevel": "high", "missingInputs": ["contactName"], "executionBoundary": "staged_only" }
```

Output:

```json
{ "uiState": "missing_input_required", "executionAllowed": false, "providerHandoffAllowed": false }
```

### Emergency Boundary

Input:

```json
{ "riskLevel": "restricted", "executionBoundary": "blocked", "resultState": "execution_blocked" }
```

Output:

```json
{ "uiState": "blocked_restricted", "executionAllowed": false }
```

### Cancelled

Input:

```json
{ "resultState": "cancelled" }
```

Output:

```json
{ "uiState": "cancelled", "executionAllowed": false }
```

## 13. QA Coverage

Phase 12F adds:

```text
scripts/nexus-staged-action-state-qa.js
```

The QA verifies:

- `docs/NEXUS_STAGED_ACTION_STATE_DERIVATION.md` exists.
- `public/nexus-staged-action-state.js` exists.
- `deriveNexusStagedActionState` is exported.
- representative actionDecision objects derive correct safe `uiState` values.
- `executionAllowed` remains false for every representative object.
- high/restricted actions never produce `executionAllowed: true`.
- missing inputs produce `missing_input_required`.
- restricted actions produce `blocked_restricted`.
- `provider_handoff_only` does not claim execution.
- the helper is not loaded by the Standard User UI.

## 14. Non-Goals

Phase 12F does not:

- enable live execution;
- wire derived state into visible Standard User UI;
- create execution buttons;
- open confirmation modals;
- request browser permissions;
- place calls;
- send messages;
- share location;
- open camera;
- make purchases;
- submit forms;
- alter health workflow state;
- claim emergency dispatch;
- add provider credentials;
- weaken confirmation or provider handoff protections;
- make planner output authoritative;
- allow selectedToolId or agentAction to directly execute anything.

Recommended next phase:

```text
Phase 12G: Staged Action UI Observation QA
```

That phase should remain hidden/debug-only unless a separate visible UI implementation is explicitly approved.
