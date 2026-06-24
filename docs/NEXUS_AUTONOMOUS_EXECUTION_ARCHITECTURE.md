# Nexus Autonomous Execution Architecture

Phase: 12A autonomous execution architecture
Status: architecture and local-safe QA only

## Purpose

This document defines the first formal architecture layer for moving Nexus from controlled demo guidance toward staged, confirmed, auditable autonomous execution. It does not enable live autonomous execution. It does not add provider adapters, dispatch calls, send messages, share location, make purchases, submit forms, alter health workflow state, open camera, change account data, or make `selectedToolId`, `agentAction`, planner output, or session memory authoritative.

The target lifecycle is:

```text
conversation
-> intent
-> metadata
-> suggestion
-> staged action
-> confirmation
-> provider handoff
-> controlled execution
```

Current safety posture remains:

```text
Planner may propose.
Policy may classify and constrain.
Staging may prepare reviewable state.
Confirmation may authorize a bounded next step.
Provider adapters may act only when policy, permissions, confirmation, and audit rules allow.
```

## 1. Current State Summary

Nexus currently behaves as a controlled agentic assistant. It can understand many user intents, generate polished Jarvis-style Standard User responses, attach non-authoritative metadata, show preview-first low-risk cards, display Level 1 labels, offer Review options for allowlisted low-risk navigation, stage high-risk call actions through existing pending-action behavior, and block or explain high-risk execution.

Nexus does not yet have unrestricted autonomous execution. The current system intentionally keeps runtime authority in existing routes, workflow buttons, confirmation gates, permission prompts, provider handoff validation, and native bridge validation.

### Audited Runtime Patterns

- `public/app.js`
  - `nexusJarvisStyleStandardUserSafetyResponse(...)` gives Phase 11J low-risk preview guidance and high-risk no-action-taken explanations.
  - `buildLowRiskAgentActionSuggestion(...)` creates display-only Level 1 labels from `agentAction` metadata.
  - `buildControlledActionMetadataFromSuggestion(...)` creates internal metadata with `executionBoundary: "metadataOnly"`.
  - `buildControlledActionPreviewReadinessFromMetadata(...)` creates preview-only readiness with `executionBoundary: "previewOnlyReadiness"`.
  - `buildControlledActionConfirmationReadinessFromPreview(...)` creates readiness-only confirmation metadata with `executionBoundary: "confirmationReadinessOnly"`.
  - `buildControlledActionNavigationReadinessFromConfirmation(...)` creates navigation-readiness metadata with `executionBoundary: "navigationReadinessOnly"`.
  - `observeAgentActionMetadata(...)` observes backend `agentAction` metadata and keeps existing routers authoritative.
  - controlled preview UI states "Preview only - no action has been taken."
  - controlled confirmation prototype controls are non-executing.
  - `Review options` remains allowlisted internal navigation only.

- `server.js`
  - attaches `metadata.agentAction` with `runtimeStatus: "metadata-only"` and `source: "existing-router"`.
  - infers conservative `selectedToolId` values without changing endpoint execution.
  - builds policy and planner observation metadata.
  - preserves call/contact pending-action confirmation gates.
  - blocks vague confirmation such as `okay` for high-risk actions.
  - uses confirmed call handoff metadata before native bridge dispatch.

- `public/nexus-session-memory.js`
  - remains in-memory, non-authoritative, and non-executing.
  - serializes only redacted context.
  - keeps pending task observations at `canExecute: false` and `executionAuthority: "none"`.

- QA and docs from Phases 8 through 11 protect:
  - selected tool id alignment;
  - low-risk suggestions;
  - controlled action metadata, preview, clearing, confirmation readiness, and navigation readiness;
  - contact/call permission;
  - contact resolution;
  - provider handoff boundaries;
  - confirmation UI contract;
  - audit log architecture;
  - planner/policy non-execution;
  - session memory non-authority;
  - Standard User demo safety;
  - Phase 11J Jarvis-style Standard User behavior.

## 2. Autonomous Execution Levels

### Level 0: Conversation Only

What Nexus may do:

- answer questions;
- ask clarifying questions;
- explain platform capabilities;
- summarize safe next steps;
- provide educational guidance.

What Nexus may not do:

- route to a workflow as an implied execution;
- stage an action;
- request permissions;
- contact providers;
- mutate data;
- create records;
- open external applications.

Required metadata:

- intent label;
- confidence if available;
- language or mode context;
- no execution metadata.

Required user visibility:

- plain assistant response;
- no hidden execution implication.

Required permission state:

- none.

Required audit behavior:

- optional conversation event only;
- no execution audit required.

Examples:

- "What is Nexus Workforce AI?"
- "Teach me how irrigation works."
- "What can you do for a farmer?"

### Level 1: Suggestion / Recommendation

What Nexus may do:

- infer a low-risk `selectedToolId`;
- show Level 1 labels;
- show preview-first guidance;
- suggest next safe sections.

What Nexus may not do:

- open a workflow automatically from metadata;
- stage a pending high-risk action;
- request permissions;
- submit forms;
- contact providers.

Required metadata:

- `selectedToolId`;
- risk level;
- display label;
- `executionBoundary: "metadataOnly"` or equivalent.

Required user visibility:

- label or preview card;
- clear no-action-taken language.

Required permission state:

- none for low-risk suggestions.

Required audit behavior:

- observation-only event if recorded.

Examples:

- agriculture training suggestion;
- farm job pathway suggestion;
- browse-only AgriTrade guidance;
- crop issue education.

### Level 2: Navigation / Review Option

What Nexus may do:

- navigate to allowlisted internal sections after a user click such as `Review options`;
- show safe browse or learning areas;
- keep the action review-only.

What Nexus may not do:

- submit workflow forms;
- create records;
- open providers;
- trigger permissions;
- start payment, call, message, health, emergency, camera, or location actions.

Required metadata:

- action id;
- selected tool id;
- allowlisted target route;
- navigation readiness;
- `executionBoundary: "navigationReadinessOnly"`.

Required user visibility:

- visible `Review options` or equivalent;
- non-executing status text.

Required permission state:

- none for allowlisted internal navigation.

Required audit behavior:

- optional navigation observation.

Examples:

- open learning review area;
- open jobs review area;
- open AgriTrade browse-only section.

### Level 3: Staged Action

What Nexus may do:

- prepare a draft or pending action for review;
- collect missing inputs;
- display target, provider, draft, and consequence;
- keep staged state cancellable.

What Nexus may not do:

- execute the staged action;
- treat staging as confirmation;
- call provider adapters;
- open native bridge;
- auto-submit or auto-send.

Required metadata:

- `actionId`;
- intent;
- selected tool id;
- target summary;
- missing inputs;
- required permissions;
- risk level;
- `confirmationRequired`.

Required user visibility:

- staged review card or modal;
- visible cancel path;
- no-action-taken statement.

Required permission state:

- missing permission state must be visible.

Required audit behavior:

- `action_proposed` or `action_staged` event with redacted data.

Examples:

- prepare a call to a resolved contact;
- draft a marketplace buyer message;
- prepare a job application packet.

### Level 4: Confirmation-Gated Action

What Nexus may do:

- ask for explicit confirmation;
- accept only approved confirmation terms when a matching pending action exists;
- cancel staged action;
- proceed to provider handoff preparation after confirmation.

What Nexus may not do:

- accept vague confirmation such as `okay`, `sure`, or generic acknowledgment for high-risk execution;
- execute from orphan confirmation;
- hide target, provider, consequence, or data shared;
- bypass existing confirmation gates.

Required metadata:

- confirmation id;
- action id;
- risk tier;
- target;
- provider if relevant;
- allowed confirmations;
- blocked confirmations;
- consequence;
- cancel path;
- audit policy.

Required user visibility:

- explicit confirmation UI or voice copy;
- target and consequence;
- cancel path.

Required permission state:

- required permission state must be satisfied or documented as missing.

Required audit behavior:

- confirmation shown;
- user accepted, rejected, cancelled, or expired.

Examples:

- confirm native phone dialer handoff;
- confirm message send;
- confirm health workflow record creation.

### Level 5: Provider Handoff

What Nexus may do:

- prepare a provider-specific handoff after confirmation;
- validate provider payload;
- show user-clicked provider links;
- dispatch native bridge payload only after confirmed metadata.

What Nexus may not do:

- auto-open providers from raw intent;
- auto-click browser links;
- directly place background calls;
- infer arbitrary provider URLs;
- expose provider credentials.

Required metadata:

- provider id;
- source such as `confirmed-call-handoff`;
- `executionConfirmed: true`;
- sanitized URL or native command summary;
- provider limitation copy;
- audit id.

Required user visibility:

- provider handoff card;
- provider limits;
- fallback instructions.

Required permission state:

- provider-specific permission and readiness state.

Required audit behavior:

- provider confirmed;
- handoff shown;
- provider opened, failed, unsupported, or cancelled.

Examples:

- `native-phone` dialer handoff;
- WhatsApp contact/chat handoff;
- Telegram handle handoff.

Recommended boundary label:

```text
executionBoundary: "provider_handoff_only"
```

### Level 6: Controlled Execution

What Nexus may do:

- execute an approved, bounded adapter operation after all policy, permission, confirmation, and audit rules pass;
- record result state;
- show fallback when execution fails.

What Nexus may not do:

- execute restricted categories;
- run with missing credentials;
- run without audit;
- run from metadata alone;
- run from planner output alone.

Required metadata:

- execution id;
- adapter id;
- confirmation id;
- audit id;
- permission state;
- result contract.

Required user visibility:

- "Executing" state;
- "Completed", "Failed", "Cancelled", or "Fallback" result;
- undo/cancel where possible.

Required permission state:

- all required permissions satisfied.

Required audit behavior:

- before execution, result, failure reason, redacted payload, retention/expiry.

Examples:

- future low-risk internal data refresh;
- future confirmed message send through a credentialed provider;
- future confirmed provider appointment request.

### Level 7: Delegated Multi-Step Autonomy

What Nexus may do:

- decompose a user-approved objective into multiple staged steps;
- ask for approval at each risk boundary;
- execute only approved low/medium steps or confirmed high-risk handoffs.

What Nexus may not do:

- chain high-risk execution without new confirmation;
- hide intermediate steps;
- use memory as authority;
- act outside policy or provider adapter contracts.

Required metadata:

- task plan id;
- step list;
- risk per step;
- policy decision per step;
- confirmation per high-risk step;
- audit chain id.

Required user visibility:

- plan preview;
- current step;
- next required permission/confirmation;
- stop/cancel path.

Required permission state:

- per-step permission state.

Required audit behavior:

- plan proposed;
- step staged;
- step confirmed;
- step completed/failed/cancelled;
- final summary.

Examples:

- "Help this farmer go from crop problem to buyer conversation" with education, draft, route, and message stages.
- "Prepare my workforce application package" with learning, resume, and application draft stages.

## 3. Planner vs Executor Boundary

### Nexus Planner

The planner converts intent and context into a proposed plan. It may identify goals, steps, missing inputs, risk tiers, and candidate tools. It may not execute anything.

The planner must never directly invoke real-world actions.

### Nexus Execution Policy

The policy engine decides whether a proposed action is allowed, needs clarification, needs permission, needs confirmation, must be blocked, or is restricted. Policy decisions are not execution by themselves.

### Nexus Staging Layer

The staging layer creates reviewable pending actions with redacted targets, missing inputs, required permissions, provider candidates, and a cancel path. Staging is not confirmation.

### Nexus Confirmation Layer

The confirmation layer displays the exact consequence and accepts only explicit confirmation terms for a matching pending action. Vague acknowledgments must not confirm high-risk actions.

### Nexus Provider Adapter

Provider adapters are the only future boundary allowed to perform external provider handoff or execution. They must be called only after policy, staging, confirmation, permission, and audit checks pass.

### Nexus Audit Layer

The audit layer records intent, proposal, staging, confirmation, provider handoff, result, cancellation, blocked state, and failure reason. Audit logging must never trigger execution.

## 4. Action Decision Object

Future Nexus execution work should converge on one standard decision object. This object is a contract, not a runtime implementation in this phase.

```js
{
  actionId: "communication.call.stage.v1",
  intent: "communications.call_contact",
  selectedToolId: "communications.outbound_call",
  executionLevel: 3,
  riskLevel: "high",
  domain: "communications",
  userVisibleLabel: "Prepare call",
  summary: "Nexus can prepare a call handoff after contact and provider details are reviewed.",
  requiredInputs: ["contactName", "phoneNumber", "provider"],
  missingInputs: ["phoneNumber"],
  requiredPermissions: ["contacts.read.optional", "call.confirmation"],
  confirmationRequired: true,
  confirmationText: "Confirm before Nexus prepares the phone handoff. The phone app still requires the final call tap.",
  cancelPath: "clear_pending_action",
  providerCandidates: [
    {
      providerId: "native-phone",
      label: "Phone dialer",
      executionBoundary: "provider_handoff_only",
      available: true
    },
    {
      providerId: "communications.whatsapp",
      label: "WhatsApp contact handoff",
      executionBoundary: "provider_handoff_only",
      available: false,
      unavailableReason: "Phone number or WhatsApp readiness missing."
    }
  ],
  executionBoundary: "stage_only",
  auditPolicy: {
    required: true,
    events: ["intent_detected", "action_proposed", "action_staged", "confirmation_shown", "user_decision"],
    redactFields: ["phoneNumber", "contactId"]
  },
  safetyNotes: [
    "No provider opens from this object.",
    "No call is placed from staging.",
    "The planner is not an executor."
  ]
}
```

## 5. Risk Classification

### Low

Low-risk actions are educational, navigational, or browse-only.

Examples:

- open learning page;
- show jobs page;
- review marketplace options;
- explain irrigation basics;
- show field support guidance;
- explain crop symptoms in general terms.

Allowed behavior:

- preview;
- label;
- review-only internal navigation.

Blocked behavior:

- record creation;
- external provider handoff;
- permission request;
- transaction;
- message/call.

### Medium

Medium-risk actions prepare or stage data but do not send, submit, dispatch, or execute externally.

Examples:

- draft a message;
- prepare a call;
- map a route;
- resolve a contact;
- stage a provider handoff;
- prepare a job application packet;
- prepare a health intake for review.

Allowed behavior:

- collect missing inputs;
- stage draft;
- show review UI;
- ask for confirmation.

Blocked behavior:

- sending;
- submitting;
- provider opening;
- permission activation without user interaction.

### High

High-risk actions can affect people, privacy, records, providers, money, health, or real-world systems.

Examples:

- place a call;
- send a message;
- share location;
- book appointment;
- submit job application;
- make marketplace offer;
- alter health workflow state;
- open camera;
- open native provider handoff.

Allowed behavior:

- confirmation-gated staging;
- explicit permission prompts;
- confirmed provider handoff.

Blocked behavior:

- first-turn execution;
- vague confirmation;
- provider launch from metadata;
- hidden execution.

### Restricted

Restricted actions require separate product, legal, compliance, credential, and role architecture before execution.

Examples:

- payments;
- medical diagnosis;
- emergency dispatch claims;
- credential changes;
- legal or financial commitments;
- destructive actions;
- actions involving minors or sensitive data without proper safeguards.

Allowed behavior:

- explain limitation;
- provide safe checklist;
- route to human/professional support where appropriate.

Blocked behavior:

- execution;
- implied execution;
- autonomous delegation;
- provider handoff claiming completion.

## 6. Permission and Missing Input Model

Nexus should treat missing inputs as normal planning state, not as a reason to guess.

- Missing contact name: ask who to contact; do not stage execution.
- Duplicate contact names: ask the user to choose; do not expose unnecessary private details.
- Missing phone number: ask for a phone number with country code; state no call will happen until confirmation.
- Missing provider: show provider choices and limitations; do not infer unsafe provider URLs.
- Missing map/location permission: explain browser/device permission and allow typed place fallback.
- Missing user confirmation: keep pending action inactive; do not treat `okay` as high-risk confirmation.
- Missing account/session: ask the user to sign in or continue with a limited safe path.
- Missing service availability: show fallback and setup requirements; do not run a fake provider.
- Missing marketplace listing: ask for listing/product details; do not buy, sell, message, or pay.
- Missing health workflow authorization: block mutation and show health access boundaries.

## 7. Confirmation Contract

Before a medium/high-risk action, Nexus must show:

- action type;
- target;
- provider when relevant;
- data shared;
- consequence;
- missing inputs;
- permission state;
- audit statement;
- confirm control;
- cancel control.

Explicit confirmation may include:

- `yes`;
- `confirm`;
- `do it`;
- a dedicated Confirm button;
- a future voice confirmation phrase scoped to a matching pending action.

The following must never count as high-risk confirmation:

- `okay`;
- `sure`;
- `fine`;
- `thanks`;
- `continue` without context;
- silence;
- clicking a preview card;
- rendering a provider handoff card;
- selecting a Level 1 suggestion label.

Cancellation:

- must be visible;
- clears only the matching pending action;
- must not execute fallback behavior;
- should record cancelled state when audit logging exists.

UI distinction:

- Review: low-risk preview or internal navigation only.
- Stage: create a reviewable draft or pending action.
- Confirm: user explicitly approves the bounded next step.
- Execute: adapter performs the approved action and logs result.

Voice confirmation:

- must reference the pending action;
- must repeat consequence when high-risk;
- must reject vague acknowledgments;
- must expire pending action after timeout or context shift.

## 8. Provider Adapter Model

Future provider adapters must never be called from raw intent parsing, planner output, `selectedToolId`, or `agentAction` metadata. They are called only through the execution layer after policy, staging, confirmation, permission, and audit checks.

### `communications.whatsapp`

- Capabilities: contact/chat handoff, future message draft handoff.
- Required permissions: confirmed contact/number, user confirmation.
- Required inputs: phone number, display label, source, confirmation id.
- Confirmation policy: high-risk; explicit confirmation required.
- Execution boundary: `provider_handoff_only`.
- Audit requirements: handoff shown, provider opened/fallback, redacted phone.
- Failure modes: missing phone, unsupported device, URL unsupported.
- Fallback: show manual WhatsApp instructions; do not claim reliable direct voice call.

### `communications.phone`

- Capabilities: native phone dialer or browser `tel:` handoff.
- Required permissions: explicit confirmation and native/browser provider readiness.
- Required inputs: sanitized `tel:` URL, redacted phone, source `confirmed-call-handoff`.
- Confirmation policy: high-risk.
- Execution boundary: `provider_handoff_only`.
- Audit requirements: confirmation, handoff, native opened/failed.
- Failure modes: invalid URL, no dialer, unsupported device.
- Fallback: show redacted/manual phone instructions.

### `communications.telegram`

- Capabilities: known handle/profile handoff.
- Required permissions: explicit confirmation.
- Required inputs: known sanitized handle.
- Confirmation policy: high-risk.
- Execution boundary: `provider_handoff_only`.
- Audit requirements: target handle redacted/summarized, opened/fallback.
- Failure modes: missing handle, unsupported URL.
- Fallback: ask for known Telegram handle; do not infer from phone number.

### `maps.location`

- Capabilities: route/map review, optional precise location after browser permission.
- Required permissions: browser/device geolocation permission.
- Required inputs: destination or user permission.
- Confirmation policy: sensitive permission.
- Execution boundary: `permission_prompt_only` until location is granted.
- Audit requirements: permission requested/granted/denied, redacted location summary.
- Failure modes: permission denied, timeout, unsupported browser.
- Fallback: typed place or region.

### `calendar.google`

- Capabilities: future appointment/event draft, future provider calendar handoff.
- Required permissions: account/session, OAuth/provider credentials, confirmation.
- Required inputs: title, date/time, participants, timezone.
- Confirmation policy: medium/high depending on participants.
- Execution boundary: `draft_only` until OAuth and confirmation are implemented.
- Audit requirements: draft created, confirmed, provider result.
- Failure modes: missing auth, missing time, provider unavailable.
- Fallback: show appointment checklist.

### `marketplace.agritrade`

- Capabilities: browse, compare, draft inquiry, future offer/order staging.
- Required permissions: listing context, account/session for real actions, explicit confirmation.
- Required inputs: listing id, buyer/seller target, quantity, price where relevant.
- Confirmation policy: low for browse, high for offers/orders/payments.
- Execution boundary: browse-only now; future staged marketplace action after confirmation.
- Audit requirements: listing reviewed, message/offer staged, confirmed/cancelled.
- Failure modes: missing listing, missing user account, payment unavailable.
- Fallback: browse-only explanation.

### `learning.koachlearn`

- Capabilities: educational guidance, lesson review, future enrollment staging.
- Required permissions: none for explanation; account/session for saved progress.
- Required inputs: topic, course, learner support needs.
- Confirmation policy: low for explanation, medium for saved record/certificate.
- Execution boundary: preview/review now; future controlled record updates.
- Audit requirements: learning topic, record update when implemented.
- Failure modes: missing topic, course unavailable.
- Fallback: teach in plain language.

### `jobs.workforce`

- Capabilities: job pathway review, readiness comparison, future application packet.
- Required permissions: account/session and confirmation for applications.
- Required inputs: role, candidate profile, employer target.
- Confirmation policy: low for review, high for application submission/contact.
- Execution boundary: review-only or staged packet until confirmed execution exists.
- Audit requirements: role reviewed, packet staged, confirmation/result.
- Failure modes: missing role, missing profile, employer unavailable.
- Fallback: readiness checklist.

### `health.telehealth`

- Capabilities: health access guidance, local telehealth demo records, handoff-only video metadata.
- Required permissions: health role, consent, confirmation, camera permission if preview is chosen.
- Required inputs: patient context, health workflow type, consent where required.
- Confirmation policy: high for health record mutation and video/camera handoff.
- Execution boundary: local/demo controlled platform; no production telehealth claim.
- Audit requirements: health action proposed, confirmed, redacted result.
- Failure modes: unauthorized role, missing consent, unsupported video provider.
- Fallback: health access guidance and emergency-services warning when appropriate.

### `agriculture.support`

- Capabilities: crop guidance, field question planning, future evidence packet staging.
- Required permissions: none for education; confirmation for record creation or camera/location.
- Required inputs: crop, symptoms, region, optional field notes.
- Confirmation policy: low for explanation, medium/high for records/camera/location.
- Execution boundary: informational preview unless user stages a record.
- Audit requirements: advice context and record creation only when implemented.
- Failure modes: missing crop/symptom, camera/location denied.
- Fallback: ask safer field questions.

## 9. Audit and Evidence Model

Future autonomous execution should log:

- intent detected;
- normalized user command;
- action proposed;
- execution level;
- risk level;
- domain;
- selected tool id;
- missing inputs;
- permissions required;
- permission result;
- confirmation shown;
- user decision;
- provider selected;
- handoff or execution result state;
- failure reason;
- fallback shown;
- cancellation;
- redacted payload summary;
- createdAt;
- retention or expiry.

Sensitive data must be minimized or redacted:

- phone numbers;
- contact identifiers;
- names where not necessary;
- health details;
- exact location;
- payment/account data;
- credentials;
- emergency contacts;
- marketplace buyer/seller private info;
- minors or family details.

Audit logging rules:

- audit must not trigger execution;
- cancelled actions are logged as cancelled, not executed;
- unsupported providers are logged as unsupported/fallback;
- missing credentials are logged as credential missing, not provider failure;
- public responses must use redacted summaries.

## 10. Future Phase Roadmap

### Phase 12B: Autonomous Action Schema QA

Create a static QA guard for the future Action Decision Object fields, execution levels, risk tiers, and non-authority boundaries.

### Phase 12C: Planner-to-Action Decision Mapper

Create a non-executing mapper that converts planner/policy/classifier output into Action Decision Objects with `canExecute: false` by default.

### Phase 12D: Staged Action UI Contract

Define the UI and payload contract for staging actions without execution.

### Phase 12E: Voice Confirmation Contract

Define scoped voice confirmation for pending actions, including blocked vague phrases and expiration.

### Phase 12F: Provider Adapter Registry Spec

Create a static provider adapter registry specification. It remains non-runtime-authoritative until later phases.

### Phase 12G: Low-Risk Controlled Execution Prototype

Implement the first truly controlled execution only for a low-risk, reversible, internal action after QA and audit guards exist.

### Phase 12H: Contact/Call Provider Handoff Prototype

Prototype confirmed, user-clicked call provider handoff. No background calling.

### Phase 12I: Map/Location Controlled Execution Prototype

Prototype a permissioned map/location action with explicit permission copy and no automatic sharing.

### Phase 12J: Multi-Step Delegated Task Planning

Prototype delegated multi-step planning with per-step risk boundaries, confirmation gates, and audit chain.

## Final Position

Nexus can become a Jarvis/Siri/Alexa-style assistant only by separating planning from execution. The current product has the right controlled-agent foundation: intent, policy, metadata, preview, confirmation readiness, provider handoff boundaries, audit architecture, and session-memory limits. Phase 12A makes the future execution model explicit while preserving the current rule that no metadata, planner output, selected tool id, agent action, session memory, preview card, or provider suggestion can execute real-world actions by itself.
