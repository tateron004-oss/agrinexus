# Nexus Action Decision Staging UI Contract

Phase: 12E action decision staging UI contract
Status: documentation and static QA only

## 1. Purpose And Scope

The Action Decision Staging UI Contract defines how future `actionDecision` metadata may eventually appear in a staged UI surface. It does not enable live execution.

This contract is implementation-oriented, but Phase 12E does not add runtime UI. It does not load `actionDecision` metadata into the Standard User UI. It does not create clickable execution buttons, open confirmation modals, request browser permissions, place calls, send messages, open camera, share location, buy or sell, submit forms, mutate health workflows, claim emergency dispatch, or add provider adapters.

The future staged UI must be able to distinguish:

- informational response
- suggestion
- review/navigation option
- staged action
- missing-input request
- confirmation-required action
- provider handoff boundary
- blocked/restricted action

This phase only defines the contract and adds static QA around the contract.

## 2. Relationship To Phase 12A, 12B, 12C, And 12D

- Phase 12A defined the autonomous execution architecture, execution levels, planner/executor boundary, provider adapter model, confirmation contract, and audit/evidence model.
- Phase 12B defined the canonical autonomous action schema and fields such as `actionId`, `selectedToolId`, `executionLevel`, `riskLevel`, `missingInputs`, `confirmationRequired`, `providerCandidates`, `executionBoundary`, `auditPolicy`, and `resultState`.
- Phase 12C created the standalone mapper at `public/nexus-action-decision-mapper.js`.
- Phase 12D created QA-only hidden/debug `actionDecision` observation metadata.
- Phase 12E defines the safe UI contract before runtime UI implementation.

The staging UI contract consumes the ideas from 12A through 12D, but it does not make planner metadata, `selectedToolId`, `agentAction`, mapper output, or observation metadata authoritative.

## 3. Staging UI States

### hidden_metadata_only

When it applies:

- `actionDecision` exists only in hidden/debug-only/QA-only metadata.
- `executionBoundary` is observed but not rendered.

What the user may see:

- nothing new.
- existing Standard User response only.

What the user may not see:

- raw metadata;
- debug payloads;
- hidden selected tool IDs;
- staging controls.

Buttons allowed:

- none.

Confirmation required:

- no UI confirmation is shown in this state.

Provider handoff allowed:

- no.

Execution allowed:

- no.

Example actionDecision values:

```json
{
  "executionBoundary": "suggestion_only",
  "riskLevel": "low",
  "resultState": "proposed"
}
```

### informational_response

When it applies:

- Level 0 conversation-only response.
- `executionBoundary` is `conversation_only`.

What the user may see:

- plain assistant response;
- optional educational explanation.

What the user may not see:

- action buttons;
- provider choices;
- permission prompts;
- staged tasks.

Buttons allowed:

- no action buttons.

Confirmation required:

- no.

Provider handoff allowed:

- no.

Execution allowed:

- no.

Example actionDecision values:

```json
{
  "executionLevel": 0,
  "executionBoundary": "conversation_only",
  "riskLevel": "low",
  "resultState": "proposed"
}
```

### suggestion_preview

When it applies:

- Level 1 low-risk suggestion.
- `executionBoundary` is `suggestion_only`.

What the user may see:

- a compact preview card;
- safe label such as Learning, Jobs, Marketplace, or Agriculture Help;
- "Preview only - no action has been taken."

What the user may not see:

- execution claims;
- provider handoff;
- permission requests;
- form submission language.

Buttons allowed:

- `Learn more`;
- `Open guide`;
- `Not now`.

Confirmation required:

- no for low-risk suggestion preview.

Provider handoff allowed:

- no.

Execution allowed:

- no.

Example actionDecision values:

```json
{
  "executionLevel": 1,
  "riskLevel": "low",
  "executionBoundary": "suggestion_only",
  "confirmationRequired": false,
  "resultState": "proposed"
}
```

### review_option

When it applies:

- Level 2 low-risk internal review/navigation option.
- `executionBoundary` is `navigation_only`.

What the user may see:

- `Review options`;
- `View jobs`;
- `Browse marketplace`;
- safe internal route explanation.

What the user may not see:

- submit, send, call, pay, buy, sell, diagnose, dispatch, or upload controls;
- generic "Do it all" style controls.

Buttons allowed:

- `Review options`;
- `Learn more`;
- `Open guide`;
- `View jobs`;
- `Browse marketplace`;
- `Not now`.

Confirmation required:

- no for allowlisted low-risk internal navigation.

Provider handoff allowed:

- no.

Execution allowed:

- only safe internal navigation after explicit user click and allowlist validation.
- no real-world action execution.

Example actionDecision values:

```json
{
  "selectedToolId": "workforce.job_pathways",
  "executionLevel": 2,
  "riskLevel": "low",
  "executionBoundary": "navigation_only",
  "resultState": "proposed"
}
```

### staged_action

When it applies:

- Level 3 medium/high-risk action has enough context to prepare reviewable state.
- `executionBoundary` is `staged_only`.

What the user may see:

- `Prepare action`;
- draft summary;
- target summary;
- "No action has been taken yet."

What the user may not see:

- final execution button;
- provider launch;
- success claim.

Buttons allowed:

- `Prepare draft`;
- `Choose contact`;
- `Choose provider`;
- `Review before sending`;
- `Cancel`.

Confirmation required:

- yes before action can advance.

Provider handoff allowed:

- not until confirmation and policy pass.

Execution allowed:

- no.

Example actionDecision values:

```json
{
  "executionLevel": 3,
  "riskLevel": "high",
  "executionBoundary": "staged_only",
  "confirmationRequired": true,
  "resultState": "staged"
}
```

### missing_input_required

When it applies:

- `missingInputs` is non-empty.
- user intent is not safe to advance without additional data.

What the user may see:

- `Needs information`;
- one focused question for the smallest missing piece.

What the user may not see:

- execution controls;
- confirmation controls that imply readiness;
- provider handoff controls.

Buttons allowed:

- `Choose contact`;
- `Choose provider`;
- `Review before sending`;
- `Cancel`.

Confirmation required:

- later, after missing inputs are resolved.

Provider handoff allowed:

- no.

Execution allowed:

- no.

Example actionDecision values:

```json
{
  "missingInputs": ["phoneNumber"],
  "executionBoundary": "staged_only",
  "resultState": "blocked_missing_inputs",
  "failureReason": "missing_required_input"
}
```

### confirmation_required

When it applies:

- `confirmationRequired` is true.
- policy and missing-input checks allow a confirmation prompt to be prepared.

What the user may see:

- `Confirm before action`;
- target;
- provider;
- consequence;
- data shared;
- cancel path.

What the user may not see:

- vague confirmation-only prompts;
- success language;
- hidden provider launch.

Buttons allowed:

- `Continue to confirmation`;
- `Review permissions`;
- `Cancel`.

Confirmation required:

- yes. Explicit confirmation must happen before any future action or handoff.

Provider handoff allowed:

- only after confirmation and audit checks pass.

Execution allowed:

- no direct execution from the staged UI itself.

Example actionDecision values:

```json
{
  "confirmationRequired": true,
  "confirmationText": "Confirm the recipient, message, and provider before any message handoff.",
  "executionBoundary": "confirmation_required",
  "resultState": "confirmation_pending"
}
```

### provider_handoff_ready

When it applies:

- Level 5 handoff boundary is ready after policy, missing-input, confirmation, and audit checks.
- `executionBoundary` is `provider_handoff_only`.

What the user may see:

- `Provider handoff`;
- provider choices;
- clear handoff-only language.

What the user may not see:

- completed/success claim;
- provider auto-open;
- background execution.

Buttons allowed:

- `Open provider`;
- `Call now`;
- `Send message`;
- `Cancel`.

Confirmation required:

- required for medium/high-risk actions before this state is reached.

Provider handoff allowed:

- yes, only as a user-clicked provider boundary.

Execution allowed:

- no direct in-app completion claim.
- the app may open a provider boundary only after all future rules pass.

Example actionDecision values:

```json
{
  "executionLevel": 5,
  "riskLevel": "high",
  "executionBoundary": "provider_handoff_only",
  "resultState": "provider_handoff_ready"
}
```

### blocked_restricted

When it applies:

- `riskLevel` is `restricted`;
- policy blocks the action;
- unsupported or unsafe action requested.

What the user may see:

- `Blocked for safety`;
- safe explanation;
- safer alternatives where appropriate.

What the user may not see:

- execution controls;
- provider handoff;
- confirmation controls that imply the restricted action can proceed.

Buttons allowed:

- `Not now`;
- `Show safer alternatives`;
- no execution control.

Confirmation required:

- no confirmation may unlock restricted execution.

Provider handoff allowed:

- no.

Execution allowed:

- no.

Example actionDecision values:

```json
{
  "riskLevel": "restricted",
  "executionBoundary": "blocked",
  "resultState": "execution_blocked",
  "failureReason": "restricted_action"
}
```

### cancelled

When it applies:

- the user clicks `Cancel`, `Not now`, or equivalent.

What the user may see:

- short cancellation confirmation;
- no-action-taken statement.

What the user may not see:

- stale action controls;
- pending provider handoff;
- hidden execution.

Buttons allowed:

- none, or safe restart/review option.

Confirmation required:

- no.

Provider handoff allowed:

- no.

Execution allowed:

- no.

Example actionDecision values:

```json
{
  "resultState": "cancelled",
  "executionBoundary": "blocked"
}
```

## 4. Visual Treatment Contract

Future UI should clearly distinguish these labels:

- `Review options`: low-risk review/navigation only.
- `Prepare action`: draft/stage only; no action taken.
- `Needs information`: missing inputs must be resolved.
- `Confirm before action`: explicit confirmation is required.
- `Provider handoff`: user-approved provider boundary only.
- `Blocked for safety`: restricted or unsafe action cannot proceed.

High-risk and restricted actions must use clear language and must never appear as already completed.

Required text patterns:

- "No action has been taken yet."
- "Preview only."
- "This may require confirmation."
- "This is a provider handoff, not proof the action completed."
- "Blocked for safety."

Forbidden visual implications:

- completed state for external actions;
- permission badge that looks granted before permission;
- provider success before provider/user completes action;
- generic "Continue" without consequence.

## 5. Button And Control Rules

Allowed future low-risk controls:

- `Review options`
- `Learn more`
- `Open guide`
- `View jobs`
- `Browse marketplace`

Allowed future medium-risk controls:

- `Prepare draft`
- `Choose contact`
- `Choose provider`
- `Review before sending`

Allowed future high-risk controls:

- `Continue to confirmation`
- `Review permissions`
- `Cancel`

Allowed future restricted controls:

- no execution control;
- `Show safe explanation`;
- `Show safer alternatives`;
- `Not now`.

Hard rules:

- No button may execute real-world action directly from actionDecision metadata.
- Every control must route through policy, missing-input checks, confirmation, and audit.
- selectedToolId must not directly execute.
- agentAction must not directly execute.
- missingInputs must block execution.
- restricted actions must not execute.
- Button rendering must not trigger provider handoff, permission requests, or action execution.

## 6. Missing Input UI Contract

Missing input UI should ask for the smallest missing piece needed and preserve cancellation.

Examples:

- missing contact name: "Who should Nexus prepare to contact?"
- duplicate contact matches: "Which contact did you mean?"
- missing phone number: "What phone number should be reviewed? Include country code if possible."
- missing message body: "What message should Nexus prepare for review?"
- missing provider: "Which provider should be reviewed: phone, WhatsApp, Telegram, SMS, or email?"
- missing location permission: "Location permission is needed before Nexus can use your current location."
- missing marketplace listing: "Which listing should Nexus review?"
- missing health authorization: "Health workflow steps require confirmation before continuing."

The UI must not imply execution while collecting missing inputs. Collection of missing inputs is not confirmation.

## 7. Confirmation UI Contract

`confirmationRequired: true` means no execution may occur until explicit confirmation.

Plain-language rule: confirmationRequired: true means no execution may occur.

Explicit confirmation must include:

- action type;
- target;
- provider when relevant;
- consequence;
- data shared;
- risk level;
- cancel path.

Not confirmation:

- `okay`;
- `sure`;
- continuing a conversation;
- selecting a contact;
- filling a missing input;
- viewing a preview;
- opening a review section.

Cancellation:

- must always be visible;
- must clear staged controls;
- must leave the action unexecuted.

Future voice confirmation:

- must use explicit terms such as `yes`, `confirm`, or `do it`;
- must be tied to a matching pending action;
- must reject orphan confirmations;
- must reject vague acknowledgments for high-risk actions.

Confirmation copy should display:

- action;
- target;
- provider;
- risk;
- what will happen;
- what will not happen;
- cancel path.

## 8. Provider Handoff UI Contract

`provider_handoff_only` means Nexus may prepare a handoff but did not execute the action.

Plain-language rule: provider_handoff_only means Nexus may prepare a handoff but did not execute the action.

Provider handoff UI must:

- show provider choices visibly;
- explain handoff-only behavior;
- require confirmation for medium/high-risk actions;
- fail safely if provider is unavailable;
- avoid arbitrary URLs;
- avoid auto-opening providers;
- never claim success unless provider/user completes it and a future approved executor reports that result.

Provider handoff UI must not:

- open WhatsApp, Telegram, phone, SMS, email, maps, camera, or any provider from metadata alone;
- infer unsupported provider behavior;
- bypass audit requirements.

## 9. Risk-Based UI Rules

### low

Examples:

- learning navigation;
- jobs navigation;
- AgriTrade browse;
- agriculture support.

UI:

- `suggestion_preview` or `review_option`;
- compact labels;
- no permission prompt;
- no confirmation required;
- no execution.

### medium

Examples:

- draft preparation;
- non-final form review;
- choosing a provider before confirmation.

UI:

- `staged_action` or `missing_input_required`;
- `Prepare action`;
- `Review before sending`;
- no execution until confirmation and audit.

### high

Examples:

- call staging;
- message staging;
- location permission;
- camera permission;
- health/telehealth workflow;
- marketplace purchase request.

UI:

- `missing_input_required`;
- `confirmation_required`;
- `provider_handoff_ready` only after confirmation and policy checks;
- clear risk and consequence language.

### restricted

Examples:

- emergency claim requiring dispatch;
- medical diagnosis;
- direct payment execution;
- account/identity changes without authorization;
- unsupported provider execution.

UI:

- `blocked_restricted`;
- `Blocked for safety`;
- safer alternatives;
- no execution control.

## 10. Standard User Demo Preservation

Phase 12E must not change current Standard User visible behavior.

Existing Phase 11J behavior remains intact:

- low-risk prompts remain preview-first;
- high-risk prompts produce polished "no real-world action taken" responses;
- no calls, messages, camera, location, payments, emergency handling, providers, or workflow execution open automatically;
- Review options remains allowlisted low-risk internal navigation only;
- hidden/debug metadata remains hidden.

This phase does not load any staged action UI runtime file.

## 11. Future Runtime Implementation Guidance

Recommended future runtime file:

```text
public/nexus-staged-action-ui.js
```

Future implementation must:

- consume `actionDecision`;
- derive one staging UI state;
- render safe UI;
- never execute directly;
- route through policy and confirmation;
- preserve audit hooks;
- preserve cancellation;
- preserve provider handoff boundaries;
- preserve missing input blocks;
- preserve restricted action blocks.

Future implementation must not:

- execute from render;
- execute from metadata;
- execute from `selectedToolId`;
- execute from `agentAction`;
- request browser permissions from render;
- auto-open providers;
- hide cancellation.

## 12. Non-Goals

This phase does not:

- no live execution;
- no browser permissions;
- no call execution;
- no message execution;
- no camera opening;
- no location sharing;
- no transaction;
- no emergency dispatch claim;
- enable live execution;
- load actionDecision metadata into Standard User UI;
- create clickable execution buttons;
- open modals;
- request browser permissions;
- place calls;
- send messages;
- open camera;
- share location;
- buy/sell/pay;
- submit forms;
- mutate health workflows;
- claim emergency dispatch;
- add provider adapters;
- add provider credentials;
- change Standard User visible behavior.

Recommended next phase:

```text
Phase 12F: Staged Action UI State Derivation QA
```

That phase should define a pure, non-rendering state derivation helper before any visible UI is added.
