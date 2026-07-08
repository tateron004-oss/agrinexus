# Nexus Full Communication Runtime

The Nexus Full Communication Runtime coordinates typed Ask Nexus, browser voice controls, open dialogue, message preparation, call preparation, provider readiness, confirmation gates, and local receipts.

## What Is Active Now

- Typed Ask Nexus can route communication questions through the full communication runtime.
- browser speech-to-text is detected with `SpeechRecognition` or `webkitSpeechRecognition`.
- browser text-to-speech is detected with `speechSynthesis` and `SpeechSynthesisUtterance`.
- The existing multilingual voice runtime remains available for press-to-talk, repeat, stop, mute, visible transcript, and spoken response handling.
- The existing open dialogue runtime remains available for open-ended questions.
- Email preparation, SMS preparation, WhatsApp preparation, Telegram/notification preparation, provider-message preparation, and call preparation can create local-safe drafts.
- Outbound call preparation uses the existing telephony runtime and prepares a call script locally.
- Inbound call readiness reports whether a telephony webhook/provider path is configured.
- Communication provider readiness shows missing environment variable names only.
- Communication receipts are created for local preparation and local answers.

## Safety Rules

- No external message is sent by the full communication runtime unless a future provider adapter is configured, review is complete, and explicit confirmation passes.
- No call is placed by the full communication runtime. The current call path prepares scripts and checks readiness only.
- No emergency call or dispatch is handled through Nexus. Users are told to contact local emergency services directly.
- No provider referral, pharmacy route, telehealth scheduling, payment message, marketplace order, logistics dispatch, or drone coordination is executed silently.
- Real execution requires provider credentials, confirmation, consent where needed, audit, and outcome verification.
- Secret values are never returned; readiness reports environment variable names only.

## Runtime Inputs

Supported input types include:

- `click`
- `typed_chat`
- `voice_transcript`
- `spoken_followup`
- `provider_card`
- `message_action`
- `call_action`
- `suggestion`
- `receipt_action`
- `saved_record_action`
- `system`

## Runtime Outputs

Supported output types include:

- `screen_response`
- `spoken_response`
- `workspace_route`
- `prepared_message`
- `prepared_call`
- `confirmation_request`
- `receipt`
- `blocked_provider_notice`
- `fallback_notice`

## Message Preparation

Nexus can prepare local drafts for:

- Email preparation
- SMS preparation
- WhatsApp preparation
- Notification preparation
- Provider or clinic messages
- Pharmacy messages
- Mobile clinic messages
- Marketplace buyer or seller messages
- Logistics messages
- Employer or workforce messages

Prepared messages include channel, recipient type, purpose, generated body, language, confirmation requirement, provider readiness boundary, and receipt.

## Call Preparation

Outbound call preparation reuses the Nexus Telephony Call Runtime. It supports clinic, pharmacy, mobile clinic, buyer, seller, logistics, employer, and provider follow-up scripts.

Inbound call readiness is explicit: inbound calls require a provider number and webhook such as `TWILIO_VOICE_WEBHOOK_URL` or `NEXUS_TELEPHONY_WEBHOOK_URL`.

## Provider Readiness Lanes

The runtime reports readiness for:

- Browser voice input
- Browser voice output
- Live knowledge/search
- Email
- SMS
- WhatsApp
- Notification provider
- Telephony outbound calling
- Telephony inbound calling
- Provider/clinic messaging
- Pharmacy messaging
- Mobile clinic communication
- Marketplace buyer/seller communication
- Logistics communication
- Employer/workforce communication
- Admin/review queue communication

Missing configuration is shown by environment variable name only.

## Local-Safe Receipts

Receipts include:

- receipt ID
- communication ID
- action
- channel
- status
- timestamp
- language
- recipient type
- blocked reason if any
- next step
- verification status

Example receipt results:

- `SMS prepared locally. No message was sent.`
- `Email draft prepared locally. Email provider credentials required for sending.`
- `WhatsApp message prepared locally. WhatsApp provider not connected.`
- `Call script prepared locally. No call was placed.`
- `Inbound calling not active. Telephony webhook required.`

## QA

Run:

```bash
node scripts/nexus-full-communication-runtime-qa.js
npm.cmd run qa:nexus-full-communication-runtime
node scripts/qa-suite.js nexus-workforce
node scripts/qa-suite.js all-safe
```
