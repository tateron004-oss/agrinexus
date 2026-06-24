# Nexus Contact / Call Permission Architecture

Phase: 10B1 documentation artifact
Current checkpoint: `7e9cb3a Polish demo console output`
Status: planning and safety architecture only

## Purpose

This document defines how Nexus should safely handle contact, call, and message requests before any broader provider execution work begins. It is intentionally a planning artifact. It does not authorize new runtime behavior, provider execution, native contact access, marketplace transactions, payment behavior, health execution, camera use, location access, or emergency dispatch.

The target lifecycle remains:

```text
Understand -> Classify Risk -> Preview -> Stage -> Confirm -> Execute -> Log
```

For contact and call requests, Nexus must remain confirmation-first and audit-ready. No call, message, native bridge dispatch, WhatsApp handoff, Telegram handoff, SMS, email, Twilio call, or browser `tel:` launch should happen from the first utterance.

## 1. Current Audit Summary

### Current Repo State

- Branch: `main`
- HEAD at time of architecture audit: `7e9cb3a Polish demo console output`
- Standard User demo remains validated and ready.
- Phase 9B final smoke validation passed.
- No runtime changes were made during the Phase 10B audit.

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
- `scripts/companion-confirmation-gate-smoke.js`
- `scripts/voice-response-regression.js`
- `scripts/voice-phase1-alignment-qa.js`
- Nexus controlled-action QA scripts under `scripts/`

### Current Call / Contact / Native / Voice Capabilities

Nexus already has a useful local-safe call safety foundation:

- Backend call intent detection through `isCallIntentCommand(...)`.
- Multilingual call phrases for English, Spanish, French, Kiswahili, Arabic, and Portuguese partial support.
- Call target extraction through `extractCallIntentTarget(...)`.
- Phone number normalization and redaction.
- Local contact storage through `profile.phoneContacts`.
- Pending missing-number state through `profile.agentMemory.pendingContactCall`.
- Call provider registry for:
  - `twilio`
  - `native-phone`
  - `whatsapp`
  - `telegram`
  - `browser-fallback`
- Call staging through `agentPendingAction`.
- Existing staged tool: `communications.outbound_call`.
- Existing high-risk confirmation gate with `allowedConfirmations`.
- Existing blocker for vague high-risk confirmation such as `okay`.
- Confirmed call handoff cards in the browser.
- Native bridge call dispatch that requires confirmed handoff metadata.
- Android user-visible dialer handoff.
- iOS validated `tel:` handoff.

### Existing QA Coverage

Existing tests already protect important invariants:

- Call intent is staged and not executed on first utterance.
- Missing contact numbers prompt for input.
- Duplicate contacts require choice.
- WhatsApp and Telegram remain safe handoff/instruction paths.
- Confirmed native handoff requires confirmed metadata.
- Android uses user-visible dialer behavior.
- iOS validates `tel:` before opening Phone UI.
- `okay` does not confirm high-risk calls.
- Confirmation gates remain active for risky outbound actions.

## 2. Current Safety Foundation

### `communications.outbound_call`

`communications.outbound_call` is the current staged tool identifier for outbound call behavior. It must remain high-risk. It must not be invoked directly from raw intent parsing.

### `agentPendingAction`

`agentPendingAction` is the current confirmation staging path. It should remain the canonical pending-action holder until a dedicated communication action schema is approved and migrated.

Required properties for call-like pending actions:

- `kind: "call"` or future `kind: "communication"`
- `tool: "communications.outbound_call"`
- `pendingActionType: "outbound_call"`
- target/contact metadata
- provider metadata
- confirmation prompt
- allowed confirmations
- `phase4HighRisk: true`

### `confirmed-call-handoff`

The existing confirmed handoff model must remain:

- no first-utterance launch
- no auto-click
- no automatic provider opening from metadata
- only user-visible handoff after explicit confirmation

### Provider Metadata

Provider metadata is already exposed in a safe, public form. It should continue to avoid secrets and credentials.

Safe metadata may include:

- provider id
- user-visible label
- handoff type
- fallback mode
- whether phone or handle is required
- whether direct voice is reliable
- whether native/browser handoff is eligible
- whether confirmation is required

Unsafe metadata must not include:

- provider credentials
- secrets
- auth tokens
- raw contact lists
- unredacted phone numbers in visible public summaries

### Native Bridge Validation

The native bridge currently requires:

- command: `call.launch`
- provider: `native-phone`
- source: `confirmed-call-handoff`
- confirmed execution metadata
- sanitized `tel:` URL

This safety contract must not be weakened.

### Android `ACTION_DIAL`

Android must continue opening a user-visible dialer handoff. Do not switch to `ACTION_CALL`. Do not add `CALL_PHONE` for this phase.

### iOS `tel:` Validation

iOS must continue validating a `tel:` URL before opening the Phone UI. It must not become background, silent, or automatic calling.

### Blocked Vague Confirmations

Vague confirmations such as `okay` must not execute high-risk calls. High-risk calls should require explicit allowed confirmations such as:

- `yes`
- `confirm`
- `do it`

## 3. What Must Not Change Yet

Do not disturb:

- Standard User demo
- low-risk previews
- controlled-action preview behavior
- existing call confirmation gate
- native bridge safety contract
- telehealth/video/camera routes
- marketplace/payment behavior
- health/emergency behavior
- music controls
- learning routing
- map/location permission behavior
- Admin/full Health modal classification

Do not add:

- real WhatsApp execution
- Telegram execution
- SMS send
- email send
- native contact permission access
- Twilio live execution beyond existing confirmed/missing-config behavior
- automatic `tel:` launch
- marketplace buy/sell/payment action
- medical diagnosis
- emergency dispatch
- camera or location activation

## 4. Contact Intent Model

Future contact/call parsing should produce a structured intent before any pending action is staged.

```js
{
  intentType: "communication.call",
  rawCommand: "Call Maria on WhatsApp",
  language: "en",
  target: {
    kind: "person",
    rawText: "Maria",
    displayName: "Maria",
    role: null,
    organization: null,
    phoneNumber: null
  },
  providerPreference: {
    requestedProvider: "whatsapp",
    confidence: 0.94
  }
}
```

### Person

Examples:

- `Nexus, call John`
- `Call Maria`
- `Llama a Juan`
- `Appelle Marie`
- `Mpigie Amina`

Expected target:

```js
{ kind: "person", displayName: "John" }
```

### Organization

Examples:

- `Call workforce support`
- `Call the clinic`
- `Call the cooperative`

Expected target:

```js
{ kind: "organization", organization: "workforce support" }
```

### Role

Examples:

- `Call my doctor`
- `Call the seller`
- `Call the buyer`
- `Call my trainer`
- `Call provider`

Expected target:

```js
{ kind: "role", role: "doctor" }
```

### Raw Phone Number

Examples:

- `Dial +15555550108`
- `Call +254700000000`

Expected target:

```js
{
  kind: "number",
  e164Phone: "+15555550108",
  redactedPhone: "+155*****0108"
}
```

### Preferred Provider

Examples:

- `Call Maria on WhatsApp`
- `Call John on Telegram`
- `Call the doctor using native phone`

Expected provider:

```js
{
  requestedProvider: "whatsapp",
  resolvedProvider: "whatsapp"
}
```

### Ambiguity

Ambiguous commands must not stage execution:

- more than one saved John
- unclear `provider`
- unclear `support`
- unclear `seller` or `buyer`

Expected behavior:

- return `needs-choice`
- show safe choices
- do not infer or guess
- do not place call

### Missing Number

Missing-number commands must not stage executable calls:

- `Call my doctor` when no doctor number exists
- `Call John` when John has no phone

Expected behavior:

- return `needs-input`
- ask for full number with country code
- store pending contact-resolution state only

### Duplicate Contacts

Duplicate contacts must require selection:

```text
I found more than one John. Which one should I call?
```

No provider should open until after selection and final confirmation.

## 5. Contact Source Model

Future contact resolution should normalize all possible sources into `ContactCandidate` records.

### Current Source

- `profile.phoneContacts`

### Future Sources

- user profile contacts
- workforce contacts
- marketplace contacts
- health/provider contacts
- emergency contacts
- native device contacts, future-only and permission-gated
- manually entered number

Native device contacts are explicitly future-only. They require a separate permission architecture and should not be read silently.

## 6. Risk Model

All contact, call, and message actions are high-risk by default.

Reasons:

- They contact another person.
- They may expose private information.
- They may trigger provider costs.
- They may create records.
- They may involve health, employment, trade, identity, location, or emergency context.

### No First-Utterance Execution

These commands must not execute immediately:

- `Call John`
- `Call my doctor`
- `Call Maria on WhatsApp`
- `Send WhatsApp to the buyer`
- `Message the seller`
- `Call my emergency contact`

### Preview-Only Exceptions

Nexus may:

- explain what will happen
- ask for missing information
- show choices
- prepare a preview
- stage a pending action

Nexus must not:

- call
- message
- open provider
- open native bridge
- request camera/location
- trigger telehealth/payment/marketplace execution

## 7. Permission Lifecycle

Canonical lifecycle:

```text
Detect intent
-> Classify high-risk
-> Extract target/provider
-> Lookup candidates
-> Resolve missing/duplicate data
-> Stage pending action
-> Show confirmation
-> Wait for explicit confirmation
-> Execute through approved provider adapter in later phase
-> Log result
```

### Detect Intent

Detect call/message intent from:

- typed command
- voice command
- phone/Twilio transcript
- future native voice command

### Classify High-Risk

Every communication execution path gets:

```js
{
  riskTier: "high",
  requiresConfirmation: true,
  requiresAudit: true
}
```

### Extract Target / Provider

Extract:

- person
- role
- organization
- phone number
- provider
- language

### Lookup Candidates

Return one of:

- no target
- missing number
- multiple matches
- resolved candidate
- unsupported provider

### Resolve Missing / Duplicate Data

Missing:

```text
I need the full phone number with country code before I can call.
```

Duplicate:

```text
Which John should I call?
```

### Stage Pending Action

Use `agentPendingAction` until a dedicated communication action store is approved.

### Show Confirmation

Confirmation must show:

- contact name
- redacted phone
- provider
- consequence
- cancel path

### Wait For Explicit Confirmation

Allowed:

- `yes`
- `confirm`
- `do it`

Blocked:

- `okay`
- `sure`
- silence
- unrelated follow-up

### Execute In Later Phase

Execution must happen only through an approved provider adapter after confirmation. This document does not authorize that implementation.

### Log Result

Log:

- detected
- needs-input
- needs-choice
- staged
- confirmed
- cancelled
- provider-opened
- failed

## 8. Confirmation Copy

### Missing Number

```text
I can help call John, but I do not have a phone number yet.
Please give the number with country code, for example +1 or +254.
I will not call until you confirm.
```

### Duplicate Contact

```text
I found more than one John.
Which one should I use?

1. John Carter, saved contact
2. John Musa, buyer contact

I will not call anyone until you choose and confirm.
```

### Provider Selection

```text
How should I prepare this call?

1. Phone dialer
2. WhatsApp handoff
3. Telegram handoff
4. Cancel

Nexus will not open any provider until you confirm.
```

### Final Call Confirmation

```text
Confirm call before launch.

Contact: Maria
Number: +155*****0101
Provider: Phone

Do you want me to continue?
Say yes, confirm, or do it. Say no to cancel.
```

### WhatsApp Handoff Confirmation

```text
I can prepare a WhatsApp handoff for Maria.
WhatsApp direct voice-call links are not reliable across all devices.
After confirmation, Nexus can open the WhatsApp contact or chat handoff.

Do you want me to continue?
```

### Native Phone Handoff Confirmation

```text
I can open the phone dialer for Maria at +155*****0101.
The call will not start automatically. You will still press the call button in your phone app.

Do you want me to open the dialer?
```

### Telegram Handoff Confirmation

```text
I can prepare a Telegram handoff only if a known Telegram handle is saved.
Telegram direct calling from a phone number is not supported here.

Do you want me to open the Telegram profile handoff?
```

### Unsupported Provider Fallback

```text
I cannot safely open that provider from Nexus yet.
I can show instructions or help you choose phone, WhatsApp, or Telegram instead.
No call or message has been sent.
```

### Cancellation

```text
Canceled. I did not call, message, or open any provider.
```

## 9. Data Model Proposal

### ContactCandidate

```js
{
  id: "contact_123",
  displayName: "Maria",
  normalizedName: "maria",
  kind: "person",
  role: null,
  organization: null,
  relationship: "buyer contact",
  source: "phoneContacts",
  phone: "+15555550101",
  redactedPhone: "+155*****0101",
  e164Phone: "+15555550101",
  whatsappEligible: true,
  telegramHandle: null,
  nativeContactId: null,
  privacyClass: "personal-contact",
  confidence: 0.94
}
```

### ContactResolution

```js
{
  id: "resolution_123",
  status: "resolved",
  requestedTarget: {
    rawText: "my doctor",
    kind: "role",
    displayName: "doctor"
  },
  candidates: [],
  selectedContactId: "contact_123",
  selectedContact: null,
  missingFields: [],
  userPrompt: "Which John should I call?",
  createdAt: "2026-06-24T00:00:00.000Z",
  expiresAt: "2026-06-24T00:10:00.000Z"
}
```

### ProviderSelection

```js
{
  id: "provider_selection_123",
  requestedProvider: "whatsapp",
  resolvedProvider: "whatsapp",
  providerLabel: "WhatsApp",
  providerType: "handoff",
  requiresCredential: false,
  requiresNativeBridge: false,
  directVoiceReliable: false,
  browserEligible: true,
  nativeEligible: false,
  fallbackMode: "chat-instruction",
  safeUrl: "https://wa.me/15555550101",
  unsupportedReason: null
}
```

### PendingCommunicationAction

```js
{
  id: "pending_comm_123",
  kind: "communication",
  communicationType: "call",
  tool: "communications.outbound_call",
  riskTier: "high",
  status: "needs-confirmation",
  sourceCommand: "Call Maria on WhatsApp",
  target: {
    contactId: "contact_123",
    displayName: "Maria",
    redactedPhone: "+155*****0101",
    e164Phone: "+15555550101",
    relationship: "saved contact"
  },
  provider: {
    requestedProvider: "whatsapp",
    resolvedProvider: "whatsapp",
    providerLabel: "WhatsApp",
    handoffType: "contact-or-chat-instruction",
    safeUrl: "https://wa.me/15555550101"
  },
  confirmation: {
    prompt: "I can prepare a WhatsApp handoff for Maria...",
    allowedConfirmations: ["yes", "confirm", "do it"],
    blockedVagueConfirmations: ["okay", "sure"]
  },
  permissions: {
    requiresUserConfirmation: true,
    requiresIdentity: false,
    requiresProviderAuthorization: true,
    requiresRoleAuthorization: false,
    requiresAudit: true
  },
  auditId: "audit_123",
  createdAt: "2026-06-24T00:00:00.000Z",
  expiresAt: "2026-06-24T00:10:00.000Z"
}
```

### CommunicationAuditEvent

```js
{
  id: "audit_123",
  actionId: "pending_comm_123",
  eventType: "staged",
  userId: "user@example.com",
  role: "user",
  source: "ask-nexus",
  command: "Call Maria on WhatsApp",
  riskTier: "high",
  provider: "whatsapp",
  targetDisplayName: "Maria",
  redactedPhone: "+155*****0101",
  result: {
    status: "needs-confirmation",
    message: "No provider opened."
  },
  createdAt: "2026-06-24T00:00:00.000Z"
}
```

## 10. Provider Boundary

Provider adapters must never be called directly from raw intent parsing.

Correct path:

```text
Intent Parser
-> Risk Classifier
-> Contact Resolution
-> Permission Gate
-> Pending Action
-> Confirmation
-> Provider Adapter
-> Audit Log
```

Incorrect path:

```text
Raw command -> WhatsApp/Twilio/tel/native bridge
```

### `native-phone`

Future behavior:

- open visible phone dialer only
- never place direct background calls
- Android uses `ACTION_DIAL`
- iOS uses validated `tel:`
- requires confirmed metadata

### Browser `tel:`

Future behavior:

- expose only a user-clicked `tel:` link after confirmation
- never auto-click
- desktop fallback may show instructions

### WhatsApp

Future behavior:

- use `wa.me` contact/chat handoff after confirmation
- do not claim reliable direct voice calls
- no send behavior without explicit confirmed message flow

### Telegram

Future behavior:

- requires known handle
- phone number alone is insufficient
- use `https://t.me/{handle}` only after confirmation

### Twilio

Future behavior:

- server-side only
- requires credentials
- requires confirmed pending action
- logs provider result
- missing credentials stay safe with setup-needed status

### SMS

Future behavior:

- draft first
- confirm recipient and message
- send only through configured provider after confirmation
- log result

### Email

Future behavior:

- draft first
- confirm recipient, subject, and body
- send only through configured provider after confirmation
- log result

### Unsupported Fallback

Future behavior:

- explain unsupported provider
- offer safe alternatives
- do not infer number
- do not open arbitrary URLs

## 11. QA Strategy

### Recommended Future QA Scripts

- `scripts/nexus-contact-call-permission-qa.js`
- `scripts/nexus-contact-resolution-qa.js`
- `scripts/nexus-communication-provider-boundary-qa.js`
- `scripts/nexus-communication-audit-log-qa.js`
- `scripts/nexus-message-permission-qa.js`
- `scripts/nexus-native-contact-permission-qa.js`

### Required Test Cases

No first-turn execution:

```text
Call John
Call my doctor
Call Maria on WhatsApp
Call the seller
Call workforce support
Call my emergency contact
Message the seller
Send WhatsApp to the buyer
```

Expected:

- no provider opened
- no native bridge dispatch
- no Twilio call
- no SMS send
- no email send
- no WhatsApp send
- no Telegram launch
- no payment/marketplace/health execution

Missing contact:

```text
Call Unknown Person
Call my doctor
```

Expected:

- prompt for number
- no executable pending call until resolved

Duplicate contact:

```text
Call John
```

Expected:

- selection required
- no guessing
- no execution

Provider choice:

```text
Call Maria on WhatsApp
Call Maria on Telegram
Call Maria on native phone
```

Expected:

- staged only
- provider limitation copy visible
- no provider opened before confirmation

Vague confirmation:

```text
okay
```

Expected:

- does not confirm high-risk call

Explicit confirmation:

```text
yes
confirm
do it
```

Expected:

- works only when a matching pending action exists
- executes only staged action
- logs result in a later audit phase

Cross-domain safety:

- `Call my doctor` must not start telehealth video.
- `Call the seller` must not sell produce.
- `Send WhatsApp to buyer` must not create a payment or order.
- `Call emergency contact` must not dispatch emergency services.
- `Use WhatsApp` must not request camera or location.

## 12. Future Implementation Phases

### Phase 10B1: Documentation Artifact

Deliverable:

- `docs/NEXUS_CONTACT_CALL_PERMISSION_ARCHITECTURE.md`

Scope:

- documentation only
- no runtime behavior changes

### Phase 10B2: Static QA Guard

Deliverable:

- `scripts/nexus-contact-call-permission-qa.js`

Assertions:

- call actions remain high-risk
- `communications.outbound_call` remains confirmation-gated
- `okay` does not confirm high-risk calls
- WhatsApp/Telegram/native handoffs remain confirmed-only
- native bridge requires `confirmed-call-handoff`
- no first utterance provider opening

### Phase 10B3: Contact Resolution QA

Deliverables:

- missing number tests
- duplicate contact tests
- provider selection tests
- manually entered phone tests
- role contact tests
- future source-priority tests

### Phase 10C: Provider Handoff Planning

Deliverables:

- provider adapter contract
- WhatsApp handoff spec
- Telegram handoff spec
- native-phone handoff spec
- browser `tel:` fallback spec
- Twilio boundary
- SMS/email boundary

## Final Safety Position

Nexus already has the right call-safety direction: contact and call actions are staged, confirmation-gated, provider-aware, and protected by native bridge validation. The next safe work is not execution. The next safe work is static QA that freezes the invariants:

```text
No first-utterance call/message execution.
No provider handoff before confirmation.
No vague confirmation for high-risk calls.
No hidden native bridge dispatch.
No camera/location/telehealth/payment/marketplace side effects.
```
