# Nexus Communication Provider Handoff Plan

Phase: 10C communication provider handoff planning
Current checkpoint: `1265b6c Add contact resolution QA guard`
Status: planning and safety architecture only

## Purpose

This document defines how Nexus should safely hand off confirmed communication actions to external providers in future phases. It is intentionally a planning artifact. It does not add provider execution, direct calling, direct messaging, browser `tel:` launches, WhatsApp launch, Telegram launch, Twilio execution, SMS send, email send, native contact access, payment behavior, telehealth behavior, camera access, location access, account behavior, identity behavior, or emergency dispatch.

Provider handoff is allowed only after this lifecycle has already completed:

```text
Intent detection
-> Risk classification
-> Contact resolution
-> Pending action staging
-> Explicit confirmation
-> Permission/provider readiness checks
-> Provider handoff
-> Audit event
```

## 1. Repo Audit

### Current Repo State

- Branch: `main`
- Phase 9A committed: `7e9cb3a Polish demo console output`
- Phase 10B1 committed: `f46ef84 Document contact call permission architecture`
- Phase 10B2 committed: `913db30 Add contact call permission QA guard`
- Phase 10B3 committed: `1265b6c Add contact resolution QA guard`
- Standard User demo remains ready for meeting.
- Contact/call permission architecture is documented.
- Static QA protects call permission invariants.
- Contact resolution QA protects missing targets, missing numbers, duplicate contacts, provider prompts, vague confirmations, and orphan confirmations.

### Relevant Inspected Files

- `server.js`
- `public/app.js`
- `public/native-bridge.json`
- `native-mobile/bridge/agrinexus-native-voice.js`
- `native-mobile/android/app/src/main/java/com/agrinexus/mobile/NexusNativeController.kt`
- `native-mobile/ios/AgriNexus/NexusWebViewController.swift`
- `scripts/call-intent-smoke.js`
- `scripts/confirmed-call-handoff-qa.js`
- `scripts/native-call-bridge-dispatch-qa.js`
- `scripts/android-call-launch-qa.js`
- `scripts/ios-call-launch-qa.js`
- `scripts/nexus-contact-call-permission-qa.js`
- `scripts/nexus-contact-resolution-qa.js`
- `docs/NEXUS_CONTACT_CALL_PERMISSION_ARCHITECTURE.md`

### Current Provider / Call / Native / Browser Surfaces

The current backend has a call provider registry in `server.js` covering:

- `twilio`
- `native-phone`
- `whatsapp`
- `telegram`
- `browser-fallback`

The current backend can:

- detect call intent;
- extract person, role, organization-like, or raw number targets;
- normalize/redact phone numbers;
- resolve saved contacts;
- ask for missing targets;
- ask for missing phone numbers;
- ask users to choose between duplicate contacts;
- stage `communications.outbound_call` pending actions;
- require explicit high-risk confirmation;
- return safe provider metadata;
- return safe handoff metadata only after confirmation.

The current frontend can:

- render pending call action cards;
- render confirmed call handoff cards;
- sanitize browser handoff links through `safeConfirmedCallHandoffUrl(...)`;
- avoid auto-clicking provider links;
- dispatch native handoff only through `confirmedNativeCallHandoffPayload(...)`;
- dispatch only when confirmed metadata is present;
- dedupe native call dispatch attempts.

The current native bridge can:

- declare `call.launch` in `public/native-bridge.json`;
- require `provider: "native-phone"`;
- require `source: "confirmed-call-handoff"`;
- require `executionConfirmed: true`;
- require a sanitized `tel:` URL;
- fail safely when payloads are unsupported or malformed.

The Android native controller currently:

- validates provider, source, confirmation, and tel URL;
- uses `Intent.ACTION_DIAL`;
- does not use `ACTION_CALL`;
- does not request `CALL_PHONE`;
- reports safe opened/failed events.

The iOS native controller currently:

- validates `provider == "native-phone"`;
- validates `source == "confirmed-call-handoff"`;
- validates confirmation;
- validates a `tel:` URL;
- checks `UIApplication.shared.canOpenURL(...)`;
- opens the user-visible Phone UI;
- reports safe opened/failed events.

### Existing QA Coverage

Existing QA already protects:

- staged call intent;
- no first-utterance execution;
- missing number prompting;
- duplicate contact prompting;
- provider preference preservation;
- WhatsApp safe fallback behavior;
- Telegram known-handle-only behavior;
- confirmed handoff cards;
- sanitized browser handoff URLs;
- native bridge payload requirements;
- Android `ACTION_DIAL`;
- iOS validated `tel:` handoff;
- vague `okay` rejection for high-risk calls;
- orphan confirmations not executing.

### What Must Not Change Yet

Do not change:

- Standard User demo flow;
- low-risk previews;
- controlled-action behavior;
- call confirmation gates;
- native bridge safety contract;
- telehealth/video/camera routes;
- marketplace/payment behavior;
- health/emergency behavior;
- account/identity behavior;
- map/location permission behavior;
- music controls;
- learning routing.

Do not add:

- direct WhatsApp launching from raw intent;
- direct Telegram launching from raw intent;
- native phone launching from raw intent;
- browser `tel:` launching from raw intent;
- live Twilio calls from raw intent;
- SMS sending;
- email sending;
- direct messaging;
- native contact access;
- arbitrary provider URLs;
- background calling;
- payment or marketplace transaction execution;
- emergency dispatch.

## 2. Provider Handoff Principles

### No Provider Adapter From Raw Intent

Provider adapters must never be called directly by raw intent parsing. Raw prompts such as:

- `Call Maria on WhatsApp`
- `Call Maria on Telegram`
- `Call John`
- `Text John`
- `Email John`

must not open any provider or send any message.

### No First-Utterance Execution

The first utterance may only:

- detect intent;
- classify risk;
- resolve contact candidates;
- ask for missing data;
- stage a pending action if resolution is complete;
- show preview/confirmation copy.

It must not:

- open a provider;
- send a message;
- place a call;
- open native dialer;
- open `tel:`;
- open WhatsApp;
- open Telegram;
- call Twilio;
- send SMS/email.

### Provider Launch Only After Explicit Confirmation

Provider handoff requires:

- resolved target;
- provider selection;
- staged pending action;
- explicit confirmation;
- provider adapter validation;
- audit event.

Vague confirmations such as `okay` must not launch high-risk provider handoffs.

### Sanitized Target Data Only

Provider adapters may receive only validated, minimum necessary data:

- normalized phone number when required;
- redacted phone for UI/audit;
- known Telegram handle when required;
- safe display label;
- provider id;
- confirmation id;
- audit correlation id.

Provider adapters must not receive:

- raw contact list;
- unrelated profile data;
- health history;
- marketplace/payment data;
- identity secrets;
- provider credentials on the client.

### Auditable Handoff

Every handoff attempt should write or emit an audit event:

- before showing confirmation;
- when confirmed;
- when opened;
- when fallback is shown;
- when failed;
- when unsupported.

### Provider-Specific Limitations Must Be Visible

Nexus must explain limitations clearly:

- WhatsApp direct voice-call deep links are unreliable.
- Telegram phone numbers alone are not enough.
- Native phone handoff opens a dialer, not a background call.
- Browser `tel:` may not work on desktop.
- Twilio requires configured server credentials.
- SMS/email sends require separate content confirmation and provider credentials.

### Unsupported Providers Fail Safely

Unsupported providers must:

- not infer arbitrary URLs;
- not guess app schemes;
- not open browser links;
- explain the limitation;
- offer safe alternatives.

## 3. Provider Adapter Contract

Future provider adapters should share a contract similar to this:

```js
{
  providerId: "native-phone",
  actionType: "call",
  riskLevel: "high",
  requiresConfirmation: true,
  requiresCredential: false,
  requiresNativeBridge: true,
  supportsBrowser: false,
  supportsNative: true,
  safeUrlPattern: "^tel:\\+?[0-9][0-9\\s().-]{2,31}$",
  payloadSchema: {
    provider: "native-phone",
    source: "confirmed-call-handoff",
    executionConfirmed: true,
    url: "sanitized tel URL",
    displayName: "safe display label",
    redactedPhone: "redacted phone"
  },
  auditEvents: [
    "provider-selection-created",
    "provider-confirmation-shown",
    "provider-confirmed",
    "provider-opened",
    "provider-failed"
  ],
  fallbackBehavior: "show user-visible dialer fallback instruction"
}
```

### Adapter Registry Shape

```js
{
  nativePhone: ProviderAdapter,
  browserTel: ProviderAdapter,
  whatsapp: ProviderAdapter,
  telegram: ProviderAdapter,
  twilio: ProviderAdapter,
  sms: ProviderAdapter,
  email: ProviderAdapter,
  unsupported: ProviderAdapter
}
```

### Adapter Inputs

```js
{
  pendingActionId: "uuid",
  confirmationId: "uuid",
  userId: "user-id",
  providerId: "whatsapp",
  actionType: "call|message|handoff",
  target: {
    contactId: "optional",
    displayName: "Maria",
    e164Phone: "+15555550101",
    redactedPhone: "+155*****0101",
    handle: "optional"
  },
  messageDraft: null,
  executionConfirmed: true,
  source: "confirmed-call-handoff",
  createdAt: "iso timestamp"
}
```

### Adapter Outputs

```js
{
  ok: true,
  providerId: "whatsapp",
  status: "handoff-ready",
  userVisibleInstruction: "Open the confirmed WhatsApp contact handoff.",
  safeUrl: "https://wa.me/15555550101",
  nativeCommand: null,
  liveProviderActionTaken: false,
  auditEventId: "uuid"
}
```

### Adapter Failure Outputs

```js
{
  ok: false,
  providerId: "telegram",
  status: "unsupported-target",
  userVisibleInstruction: "Telegram needs a known handle. A phone number alone is not enough.",
  safeUrl: "",
  nativeCommand: null,
  liveProviderActionTaken: false,
  auditEventId: "uuid"
}
```

## 4. Native Phone Handoff Spec

Native phone is a user-visible phone-app handoff. It is not background calling.

Required:

- provider id: `native-phone`
- source: `confirmed-call-handoff`
- `executionConfirmed: true`
- sanitized `tel:` URL
- redacted phone in UI/audit
- no provider launch before confirmation
- native shell validates again

Android:

- use `Intent.ACTION_DIAL`;
- do not use `Intent.ACTION_CALL`;
- do not request `CALL_PHONE`;
- verify a dialer is available;
- emit `call.launch_opened` or `call.launch_failed`.

iOS:

- validate `tel:` URL;
- check `UIApplication.shared.canOpenURL(...)`;
- open Phone UI;
- emit safe opened/failed event.

User responsibility:

- the user still presses the final call button in the native phone app.

## 5. Browser `tel:` Handoff Spec

Browser `tel:` handoff is only a user-clicked link after confirmation.

Required:

- render only after confirmed metadata;
- do not auto-click;
- sanitize `tel:` URL;
- show desktop fallback instructions;
- record whether provider link was shown/opened if future audit logging is active.

Allowed:

```text
Open call handoff
```

Not allowed:

```js
window.location = "tel:+15555550101"
link.click()
autoOpenProvider()
```

Desktop fallback:

```text
This device may not support phone links. Use the confirmed number in your phone app.
```

## 6. WhatsApp Handoff Spec

WhatsApp handoff is not reliable direct voice calling.

Allowed after confirmation:

- open a safe `wa.me` contact/chat handoff;
- show provider limitation copy;
- show fallback instructions;
- let the user continue manually in WhatsApp.

Not allowed:

- claim direct WhatsApp voice calls are reliable;
- send a WhatsApp message without separate content confirmation;
- launch WhatsApp from raw intent;
- infer arbitrary WhatsApp URL formats;
- expose unredacted contact data beyond minimum necessary handoff.

Safe copy:

```text
WhatsApp voice-call deep links are not reliable across devices. Nexus can open a confirmed WhatsApp contact/chat handoff, and you can choose the next step in WhatsApp.
```

Future separate message send:

- draft message;
- confirm recipient;
- confirm content;
- confirm send;
- require credentials/provider readiness;
- audit send attempt.

## 7. Telegram Handoff Spec

Telegram handoff requires a known Telegram handle. A phone number alone is not enough.

Allowed after confirmation:

- open `https://t.me/{handle}` when the handle is known and sanitized;
- show profile/chat handoff instructions;
- let the user continue manually in Telegram.

Not allowed:

- claim direct Telegram calling from a phone number;
- infer a Telegram handle from a phone number;
- open arbitrary Telegram URLs;
- launch Telegram from raw intent;
- send messages without separate content confirmation.

Safe copy:

```text
Telegram needs a known account or handle. I can open the confirmed profile handoff when a handle is saved; otherwise I will show fallback instructions.
```

## 8. Twilio Handoff Spec

Twilio is server-side only.

Required:

- resolved target phone;
- staged pending action;
- explicit confirmation;
- server credentials configured;
- audit event;
- safe missing-credential response.

Not allowed:

- browser-side Twilio calls;
- exposing credentials;
- Twilio call from raw intent;
- Twilio call without pending action;
- Twilio call without explicit confirmation.

Missing credentials response:

```text
Twilio call confirmed, but live dialing needs setup: TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER.
```

Audit:

- create call request event;
- record provider status;
- record missing credentials if any;
- keep target redacted in public response.

## 9. SMS And Email Handoff Spec

SMS and email are message actions, not call actions.

Required lifecycle:

```text
Detect message intent
-> Resolve recipient
-> Draft message
-> Confirm recipient
-> Confirm content
-> Confirm send
-> Provider send
-> Audit result
```

Rules:

- no first-turn send;
- draft first;
- confirm recipient and content separately where practical;
- require provider credentials for automated send;
- audit all attempts;
- safe fallback when credentials are missing;
- never send from a raw prompt such as `Text John` or `Email John`.

Safe copy:

```text
I can draft that message first. I will not send anything until you review the recipient, review the content, and confirm the send.
```

## 10. Unsupported Provider Fallback

Unsupported providers must fail safely.

Required behavior:

- explain the provider is not supported yet;
- do not infer arbitrary app URLs;
- do not open browser links;
- do not execute anything;
- offer safe alternatives.

Safe copy:

```text
I cannot safely open that provider yet. I can prepare a phone dialer handoff, a confirmed WhatsApp contact handoff when a phone number is available, or plain instructions.
```

Examples:

- `Call Maria on Signal`
- `Call John on FaceTime`
- `Message the buyer on random-app`

Expected:

- no provider open;
- no direct URL;
- no native dispatch;
- no staged executable provider action unless a supported provider is selected and confirmed.

## 11. Audit / Event Model

Future provider handoff should use an event model like:

```js
{
  id: "uuid",
  type: "provider-confirmed",
  actionType: "call",
  providerId: "native-phone",
  pendingActionId: "uuid",
  confirmationId: "uuid",
  target: {
    contactId: "optional",
    displayName: "Maria",
    redactedPhone: "+155*****0101"
  },
  status: "confirmed",
  source: "confirmed-call-handoff",
  liveProviderActionTaken: false,
  createdAt: "iso timestamp"
}
```

### Required Event Types

- `provider-selection-created`
- `provider-confirmation-shown`
- `provider-confirmed`
- `provider-cancelled`
- `provider-opened`
- `provider-fallback-shown`
- `provider-failed`
- `provider-unsupported`
- `provider-credential-missing`

### Event Rules

- Store minimum necessary data.
- Redact phone numbers in user-visible logs.
- Never store provider credentials.
- Never store full native contact lists.
- Distinguish provider opened from provider completed.
- Distinguish handoff shown from live action taken.

## 12. QA Strategy

### Recommended Future QA Scripts

- `scripts/nexus-provider-handoff-planning-qa.js`
- `scripts/nexus-provider-adapter-contract-qa.js`
- `scripts/nexus-whatsapp-handoff-boundary-qa.js`
- `scripts/nexus-telegram-handoff-boundary-qa.js`
- `scripts/nexus-twilio-boundary-qa.js`
- `scripts/nexus-sms-email-permission-qa.js`

### Required Future Test Expectations

Raw prompts must not open providers:

- `Call Maria on WhatsApp` does not open WhatsApp.
- `Call Maria on Telegram` does not open Telegram.
- `Call John` does not open `tel:` or native bridge.
- `Text John` does not send SMS.
- `Email John` does not send email.

Provider safety:

- native bridge only accepts `confirmed-call-handoff`;
- native bridge requires `executionConfirmed`;
- native bridge requires `native-phone`;
- browser handoff link is sanitized;
- unsupported provider does not open arbitrary URL;
- provider handoff requires pending action and explicit confirmation;
- `okay` does not confirm high-risk provider handoff;
- orphan `yes`, `confirm`, or `do it` does not launch provider;
- WhatsApp direct voice-call limitations remain visible;
- Telegram phone-number limitation remains visible;
- Twilio missing credentials returns setup-needed response;
- SMS/email require draft and content confirmation.

Side-effect exclusions:

- call prompts must not trigger camera;
- call prompts must not trigger location;
- call prompts must not trigger telehealth video;
- call prompts must not trigger marketplace transaction;
- call prompts must not trigger payment;
- call prompts must not trigger account/identity flow;
- call prompts must not trigger emergency dispatch.

### Existing QA To Keep Running

- `node scripts/nexus-contact-call-permission-qa.js`
- `node scripts/nexus-contact-resolution-qa.js`
- `node scripts/call-intent-smoke.js`
- `node scripts/confirmed-call-handoff-qa.js`
- `node scripts/native-call-bridge-dispatch-qa.js`
- `node scripts/android-call-launch-qa.js`
- `node scripts/ios-call-launch-qa.js`
- `node scripts/companion-confirmation-gate-smoke.js`
- `node scripts/qa-suite.js all-safe`

## 13. Future Implementation Phases

### 10C1: Provider Handoff Planning

Create this planning document. No runtime behavior.

### 10C2: Static Provider Handoff QA

Add static QA that verifies:

- adapter contract document exists;
- provider ids remain stable;
- native/browser handoff safety boundaries remain intact;
- unsupported provider fallback is documented.

### 10C3: Provider Adapter Contract Artifact

Create a static JSON or Markdown adapter contract. It must be non-runtime authoritative until explicitly wired later.

### 10C4: WhatsApp / Telegram Boundary QA

Add focused QA for:

- no raw launch;
- sanitized URLs only;
- WhatsApp direct voice limitation copy;
- Telegram handle requirement.

### 10C5: Twilio Boundary QA

Add focused QA for:

- server-side only;
- no browser credentials;
- missing credentials safe response;
- confirmed pending action required.

### 10C6: SMS / Email Permission QA

Add focused QA for:

- draft first;
- recipient confirmation;
- content confirmation;
- send confirmation;
- no raw first-turn send.

### 10D: Confirmation UI

Improve controlled confirmation UI for staged communication actions without adding execution until provider adapters are approved.

## Final Position

Nexus should evolve toward provider handoff only through staged, explicit, auditable, provider-specific adapters. The current system is correctly conservative: raw intent does not open providers, contact resolution happens before staging, high-risk actions require confirmation, browser links are sanitized, and native mobile launchers validate confirmed payloads. Phase 10C keeps that boundary and defines the future provider handoff contract without adding execution.
