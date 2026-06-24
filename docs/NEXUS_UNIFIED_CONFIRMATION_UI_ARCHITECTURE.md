# Nexus Unified Confirmation UI Architecture

Phase: 10D unified confirmation UI architecture
Current checkpoint: `e5e0090 Add provider handoff boundary QA guard`
Status: planning and safety architecture only

## Purpose

This document defines the future confirmation UI model for Nexus actions across risk tiers. It does not add runtime UI behavior, provider execution, direct calling, messaging, native handoff, browser `tel:` launch, WhatsApp launch, Telegram launch, Twilio execution, SMS send, email send, telehealth execution, camera access, location access, marketplace transaction, payment behavior, account behavior, identity behavior, or emergency dispatch.

The intended lifecycle remains:

```text
Understand -> Classify Risk -> Preview -> Stage -> Confirm -> Execute -> Log
```

The Standard User demo remains stable. Current low-risk previews, controlled-action behavior, call confirmation gates, telehealth/video/camera routes, marketplace/payment boundaries, map/location permissions, health/emergency boundaries, music controls, learning routing, and Admin/full Health modal classification should not change in this phase.

## 1. Repo Audit

### Inspected Files

- `public/app.js`
- `public/index.html`
- `public/styles.css`
- `server.js`
- `scripts/nexus-controlled-action-confirmation-readiness-qa.js`
- `scripts/nexus-controlled-action-confirmation-ui-prototype-qa.js`
- `scripts/nexus-controlled-action-preview-ui-qa.js`
- `scripts/nexus-controlled-action-preview-clear-qa.js`
- `scripts/nexus-contact-call-permission-qa.js`
- `scripts/nexus-contact-resolution-qa.js`
- `scripts/nexus-provider-handoff-boundary-qa.js`
- `scripts/confirmed-call-handoff-qa.js`
- `scripts/native-call-bridge-dispatch-qa.js`
- `docs/NEXUS_CONTACT_CALL_PERMISSION_ARCHITECTURE.md`
- `docs/NEXUS_COMMUNICATION_PROVIDER_HANDOFF_PLAN.md`
- `docs/NEXUS_CONTROLLED_ACTION_CONFIRMATION_READINESS.md`
- `docs/NEXUS_LOW_RISK_CONFIRMATION_UI_PROTOTYPE.md`

### Current Confirmation-Like UI Surfaces

`public/app.js` currently contains several distinct confirmation-adjacent surfaces:

- controlled-action preview readiness for low-risk suggestions;
- Level 1 suggestion labels;
- Ask Nexus/full-assistant `Review options` and `Not now` controls;
- controlled low-risk navigation readiness and safe internal section navigation;
- workflow modal state with `Confirm action` and `Cancel`;
- pending call action cards;
- confirmed call handoff cards;
- native call handoff payload validation;
- caption/global passive preview clearing behavior;
- health, telehealth, trade, map, and workflow button handlers that use existing confirmation or modal paths.

`public/index.html` currently contains:

- workflow modal structure;
- `#workflowConfirm` and `#workflowCancel`;
- caption cancel surface;
- health, telehealth, trade, map, and provider workflow buttons.

`public/styles.css` currently contains:

- workflow modal styles;
- pending and confirmed call card styles;
- controlled-action confirmation prototype styles;
- responsive modal behavior;
- status and pending-state styles.

`server.js` currently contains:

- `agentPendingAction` staging;
- high-risk confirmation gate logic;
- blocked vague confirmation handling;
- call provider metadata and staging;
- confirmed call handoff metadata;
- workflow and health/trade/map API routes;
- audit/evidence style integration events for many workflows.

### Existing Safety Foundations

The existing system already protects important confirmation boundaries:

- low-risk demo prompts may show preview and Review options;
- Review options is allowlisted internal navigation only;
- high-risk calls are staged through `agentPendingAction`;
- `communications.outbound_call` stays high-risk;
- `okay` is blocked for high-risk calls;
- explicit confirmations are limited to known terms such as `yes`, `confirm`, and `do it`;
- confirmed call handoff cards use sanitized URLs;
- native bridge dispatch requires confirmed metadata;
- Android uses `ACTION_DIAL`, not `ACTION_CALL`;
- iOS validates a `tel:` URL before opening Phone UI;
- browser handoff links are user-clicked, not auto-opened.

### What Should Not Change Yet

Do not change:

- Standard User demo flow;
- low-risk preview behavior;
- Ask Nexus Review options behavior;
- selected tool id inference;
- hidden/debug metadata boundaries;
- workflow routing;
- call confirmation gate;
- native bridge safety contract;
- telehealth/video/camera routing;
- marketplace/payment boundaries;
- map/location permission behavior;
- health/emergency behavior;
- account/identity behavior;
- music controls;
- learning routing.

Do not add:

- direct calling;
- direct messaging;
- provider opening from raw prompts;
- automatic workflow execution;
- automatic camera/location permission prompts;
- marketplace transactions;
- payment execution;
- emergency dispatch;
- broad UI redesign.

## 2. Confirmation UI Principles

1. Nexus must understand first, classify risk second, preview third, stage fourth, execute last.
2. Low-risk actions may use preview plus `Review options`.
3. Medium-risk actions require staged review before submission.
4. High-risk actions require explicit confirmation.
5. Confirmation copy must state what will happen.
6. Confirmation copy must state what will not happen.
7. Confirmation must show target, provider, data shared, and consequence where relevant.
8. Cancel must always be visible.
9. Vague acknowledgments such as `okay` must not confirm high-risk execution.
10. Confirmation must be auditable.
11. Rendering a preview, staging card, confirmation modal, or provider handoff card must never execute an action by itself.
12. Provider handoff controls must be user-clicked and must not auto-open.
13. Low-risk preview-only flows must not be blocked by heavy modal friction.
14. Sensitive actions must never be hidden behind generic wording such as `Continue`.

## 3. Risk-Tier UI Model

### Tier 1: Low-Risk Navigation And Education

Examples:

- training resource discovery;
- learning explanation;
- farm/agriculture guidance;
- safe field support guidance;
- browse-only AgriTrade/marketplace orientation;
- internal navigation to an allowlisted app section.

UI state:

```text
Preview card -> Review options / Not now -> allowlisted internal navigation or clear
```

Rules:

- no permission required;
- no staged backend action required;
- no provider opening;
- no workflow execution;
- no transaction;
- no record creation;
- no raw metadata exposure;
- Review options may only navigate to safe internal sections already allowlisted.

Approved copy:

```text
Nexus can show safe training options. No application, payment, message, call, or provider action will happen.
```

### Tier 2: Medium-Risk Workflow Staging

Examples:

- job application preparation;
- marketplace buyer/seller message draft;
- SMS/email draft;
- appointment preparation;
- health intake preparation;
- provider assignment preparation;
- workflow record staging before save.

UI state:

```text
Preview -> Staging card/modal -> Edit or Prepare -> Confirm to submit staged record
```

Rules:

- show editable details before submission;
- show what data will be saved;
- show target or recipient if applicable;
- show consequences and limits;
- require a clear confirm button before creating or sending anything;
- allow cancellation without side effects;
- keep provider execution separate from record staging.

Approved copy:

```text
Nexus can prepare this workflow for review. It will not submit, send, schedule, dispatch, or open a provider until you confirm the exact next step.
```

### Tier 3: High-Risk Execution Or Provider Handoff

Examples:

- calling a person;
- sending SMS/email/WhatsApp;
- opening native phone dialer;
- payment or checkout;
- marketplace buy/sell;
- health-sensitive action;
- telehealth/video handoff;
- camera/location permission;
- emergency support;
- identity/account action;
- admin/provider operation.

UI state:

```text
Preview or intent result -> Staged pending action -> Explicit confirmation modal/card -> Provider/UI handoff -> Audit event
```

Rules:

- no first-utterance execution;
- no vague confirmation;
- confirmation must show target, provider, data shared, consequence, and cancel path;
- provider handoff must be validated again at the adapter/native boundary;
- audit logging is required;
- no auto-open provider from rendering;
- no emergency/medical/payment/identity/camera/location behavior from a generic confirmation.

Approved copy:

```text
Confirm before Nexus continues. This may contact another person or open a provider. Nothing will happen unless you choose Confirm.
```

## 4. Future UI Components

### `NexusPreviewCard`

Purpose:

- summarize Nexus understanding;
- show selected domain and low-risk recommendation;
- avoid execution claims;
- support Level 1 label display.

Required fields:

- title;
- summary;
- risk tier;
- selected tool label;
- not-executed statement.

### `NexusStagingCard`

Purpose:

- show medium-risk prepared data before submission;
- allow edit/cancel;
- avoid provider execution.

Required fields:

- staged action type;
- target;
- draft data;
- missing fields;
- consequence;
- edit control;
- cancel control.

### `NexusConfirmationModal`

Purpose:

- provide explicit high-risk confirmation before execution or handoff.

Required fields:

- action title;
- target;
- provider;
- data shared;
- consequence;
- allowed confirmation text;
- blocked vague confirmations;
- confirm button;
- cancel button;
- expiration state;
- audit notice.

### `NexusProviderHandoffCard`

Purpose:

- show a confirmed, sanitized, user-clicked provider handoff after confirmation.

Required fields:

- provider;
- target;
- sanitized URL or native command summary;
- limitation copy;
- user-visible open button;
- fallback instruction;
- audit status.

### `NexusAuditNotice`

Purpose:

- explain that a staged/confirmed high-risk action is recorded for safety.

Required fields:

- audit category;
- timestamp or pending state;
- redaction note;
- visible statement that secrets are not shown.

### `NexusCancelControl`

Purpose:

- provide a persistent escape path.

Rules:

- always visible for staged or high-risk UI;
- clears only the relevant pending UI/action;
- does not clear unrelated app state;
- never executes a fallback action.

### `NexusFallbackNotice`

Purpose:

- explain unsupported providers, missing permissions, missing data, or unavailable device capability.

Required fields:

- reason;
- safe next step;
- no-action-taken statement;
- supported alternatives.

## 5. Button Language

### Approved Labels

- `Review options`
- `Prepare`
- `Edit`
- `Confirm`
- `Cancel`
- `Open provider`
- `Open phone dialer`
- `Open WhatsApp`
- `Open Telegram`
- `Send message`
- `Not now`

### Context Requirements

- `Review options`: low-risk internal navigation only.
- `Prepare`: creates or opens a review draft, not execution.
- `Edit`: changes staged details before confirmation.
- `Confirm`: only on explicit confirmation UI with clear consequence copy.
- `Cancel`: visible on every staged/high-risk UI.
- `Open provider`: only after confirmation and provider validation.
- `Open phone dialer`: only after native-phone confirmation; must not imply automatic calling.
- `Open WhatsApp`: only confirmed contact/chat handoff; must not imply reliable direct voice call.
- `Open Telegram`: only known handle/profile handoff.
- `Send message`: only after recipient and content confirmation.
- `Not now`: clears preview/confirmation state without side effects.

### Discouraged Or Unsafe Labels

- `Do it all`
- `Auto`
- `Continue automatically`
- `Call now without showing provider`
- `Submit everything`
- `Yes, always`
- `Run everything`
- `Proceed silently`
- `Use my data`
- `Fix it for me`
- `Emergency dispatch`

## 6. Confirmation Copy Patterns

### Call Confirmation

```text
Confirm call before launch.

Contact: Maria
Number: +155*****0101
Provider: Phone dialer

If you confirm, Nexus will prepare the handoff. The call will not start automatically. You will still press the final call button in your phone app.
```

### WhatsApp Handoff

```text
Nexus can prepare a WhatsApp contact/chat handoff for Maria.

WhatsApp voice-call deep links are not reliable across devices. Nexus will not send a message or start a call. After confirmation, you can choose the next step in WhatsApp.
```

### Telegram Handoff

```text
Nexus can prepare a Telegram profile handoff only when a known handle is saved.

Telegram phone numbers alone are not enough. Nexus will not infer a handle or send a message.
```

### SMS Draft Confirmation

```text
Nexus can draft an SMS first.

Recipient: John
Data shared: the message text you review.

Nexus will not send anything until you confirm the recipient and the exact message.
```

### Email Draft Confirmation

```text
Nexus can draft an email for review.

Recipient: workforce partner
Data shared: subject, body, and any fields you approve.

Nexus will not send the email until you confirm the final content.
```

### Job Application Preparation

```text
Nexus can prepare this job application packet.

It will not submit the application, create an account, verify your identity, or contact an employer until you review and confirm the next step.
```

### Marketplace Buyer/Seller Message

```text
Nexus can prepare a buyer/seller message draft.

It will not sell produce, buy items, process payment, create checkout, or send a message until you review the recipient and content.
```

### Payment Blocked / Future-Only

```text
Payment execution is not available in this controlled demo flow.

Nexus can explain the payment steps or prepare a review checklist, but it will not charge, transfer, release, or collect money.
```

### Camera / Location Permission

```text
This step needs your device permission.

Nexus will not use your camera or location automatically. Choose the permission in your browser or device only when you are ready.
```

### Telehealth / Video Handoff

```text
This is a local camera preview and handoff-only demo.

No live provider room is started. No real telehealth visit begins. No real-time WebRTC or signaling engine is connected.
```

### Emergency Support Warning

```text
If there is immediate danger, contact local emergency services now.

Nexus can help organize information, but it does not dispatch emergency services or replace professional emergency care.
```

### Health-Sensitive Action

```text
Nexus can prepare health access information for review.

It does not diagnose, prescribe, replace a clinician, or share health details without explicit confirmation.
```

### Admin / Provider Action

```text
This provider/admin action may affect platform readiness records.

Review the provider, environment, data affected, and audit result before confirming.
```

## 7. Future Confirmation Payload Shape

```js
{
  confirmationId: "uuid",
  riskTier: "low|medium|high",
  actionType: "communication.call",
  title: "Confirm call before launch",
  summary: "Nexus can open a phone dialer handoff after you confirm.",
  target: {
    type: "person|organization|role|record|provider|section",
    displayName: "Maria",
    redactedIdentifier: "+155*****0101"
  },
  provider: {
    id: "native-phone",
    label: "Phone dialer",
    mode: "handoff"
  },
  dataShared: [
    "redacted phone number",
    "provider id"
  ],
  consequence: "A phone dialer handoff may open after confirmation. The call will not start automatically.",
  allowedConfirmations: ["yes", "confirm", "do it"],
  blockedConfirmations: ["okay", "sure"],
  cancelLabel: "Cancel",
  confirmLabel: "Open phone dialer",
  auditRequired: true,
  expiresAt: "2026-06-24T00:10:00.000Z"
}
```

### Required Field Rules

- `confirmationId`: unique and auditable.
- `riskTier`: required for every confirmation payload.
- `actionType`: stable canonical action type.
- `title`: user-visible and specific.
- `summary`: plain-language action summary.
- `target`: required for targeted actions.
- `provider`: required for provider handoffs.
- `dataShared`: required for privacy-sensitive actions.
- `consequence`: required for medium/high-risk actions.
- `allowedConfirmations`: required for high-risk actions.
- `blockedConfirmations`: must include vague terms for high-risk actions.
- `cancelLabel`: always present.
- `confirmLabel`: specific to the action.
- `auditRequired`: true for high-risk actions.
- `expiresAt`: required for high-risk staged actions.

## 8. Accessibility And Demo Stability

Future confirmation UI must support:

- keyboard access for every control;
- focus moved into high-risk modals and restored after close;
- visible focus outlines;
- screen-reader labels for title, summary, consequence, and buttons;
- readable contrast;
- compact layout at mobile widths;
- clear cancel path;
- no surprise navigation;
- no auto-open provider behavior;
- no blocking modal for low-risk preview-only flows;
- status updates through `role="status"` where appropriate;
- no raw metadata leaks into visible UI;
- no hidden debug-only fields becoming visible.

Demo stability rules:

- Standard User prompts must remain predictable.
- Low-risk prompts must continue to use preview and Review options.
- High-risk prompts must not create modals that look executable in the current demo unless explicitly implemented and QA-protected.
- Existing controlled-action QA remains authoritative until a new confirmation UI contract QA exists.

## 9. QA Strategy

### Recommended Future QA Scripts

- `scripts/nexus-confirmation-ui-contract-qa.js`
- `scripts/nexus-confirmation-copy-qa.js`
- `scripts/nexus-high-risk-confirmation-modal-qa.js`
- `scripts/nexus-vague-confirmation-block-qa.js`
- `scripts/nexus-provider-confirmation-button-qa.js`

### Required Expectations

High-risk actions:

- show explicit confirmation;
- show target, provider, consequence, and data shared;
- include visible Cancel;
- include audit-required metadata;
- reject `okay`;
- do not execute from rendering;
- do not auto-open providers.

Low-risk actions:

- continue to use preview plus Review options;
- do not require blocking modal;
- do not expose raw metadata;
- do not request permissions;
- do not execute workflows.

Provider handoff:

- no provider opens from rendering a card;
- browser handoff links are sanitized;
- native handoff requires confirmed metadata;
- WhatsApp/Telegram limitations remain visible;
- unsupported providers show fallback copy.

Sensitive domains:

- no camera/location permission from preview;
- no telehealth/video execution from preview;
- no marketplace buy/sell/payment action from preview;
- no emergency dispatch from preview;
- no account/identity action from preview.

Payload contract:

- includes risk;
- includes target where relevant;
- includes consequence;
- includes data shared where relevant;
- includes audit requirement for high-risk;
- includes allowed and blocked confirmations.

### Existing QA To Keep Running

- `node scripts/nexus-contact-call-permission-qa.js`
- `node scripts/nexus-contact-resolution-qa.js`
- `node scripts/nexus-provider-handoff-boundary-qa.js`
- `node scripts/confirmed-call-handoff-qa.js`
- `node scripts/native-call-bridge-dispatch-qa.js`
- `node scripts/companion-confirmation-gate-smoke.js`
- `node scripts/qa-suite.js all-safe`

## 10. Recommended Future Phases

### Phase 10D1: Static Confirmation UI Contract QA

Create `scripts/nexus-confirmation-ui-contract-qa.js` that verifies this document exists, approved/discouraged labels are present, risk tiers are documented, and future payload fields are defined.

### Phase 10D2: Confirmation Copy QA

Create `scripts/nexus-confirmation-copy-qa.js` to protect copy patterns for calls, WhatsApp, Telegram, SMS, email, job applications, marketplace messages, payment blocking, camera/location, telehealth/video, emergency support, health-sensitive actions, and admin/provider actions.

### Phase 10D3: High-Risk Modal Prototype

Create a non-executing, hidden or feature-flagged confirmation modal prototype for high-risk staged actions. It must not execute, open providers, or replace existing confirmation gates.

### Phase 10D4: Provider Confirmation Button QA

Add static and browser QA for `Open phone dialer`, `Open WhatsApp`, and `Open Telegram` button boundaries. Buttons must appear only after confirmed provider metadata and must remain user-clicked.

### Phase 10E: Audit Logging

Define and implement the audit/event layer for staged, confirmed, cancelled, opened, failed, and unsupported actions.

### Phase 10F: Controlled Execution Prototype

Only after confirmation UI and audit logging are protected, implement a narrow, low-risk execution prototype. High-risk provider execution should remain gated until provider adapters are individually approved.

## Final Position

Nexus already has several safe confirmation ingredients, but they are distributed across preview controls, workflow modals, pending action cards, call handoff cards, native bridge validation, and backend confirmation gates. The next safe step is not execution. The next safe step is a unified confirmation contract that keeps the current demo stable while preparing a reusable UI and payload model for future staged, confirmed, auditable actions.
