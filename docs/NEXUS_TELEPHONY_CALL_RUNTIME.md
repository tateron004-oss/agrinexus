# Nexus Telephony Call Runtime

## Purpose

The Nexus Telephony Call Runtime gives Standard Users a real call-preparation workflow without silently placing calls. It prepares the recipient context, purpose, language, script, provider readiness, and receipt for clinic, pharmacy, mobile clinic, buyer/seller, logistics, employer, and provider follow-up calls.

## What Works Now

- Detects telephony provider readiness without exposing secret values.
- Supports Twilio, Vonage, Telnyx, SignalWire, Plivo, and a generic provider contract.
- Shows a Standard User call-preparation workspace.
- Generates multilingual call scripts for English, Spanish, French, Arabic, Portuguese, and Kiswahili.
- Creates a receipt for every local preparation and attempted call gate check.
- Blocks emergency calling and tells the user to contact local emergency services directly.
- Keeps real outbound calls behind provider credentials, destination number, consent, explicit confirmation, and final provider adapter approval.

## Provider Environment Variables

Twilio:

- `NEXUS_CALLS_ENABLED` or `NEXUS_TELEPHONY_ENABLED`
- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_PHONE_NUMBER`
- `TWILIO_VOICE_WEBHOOK_URL` or `NEXUS_TELEPHONY_WEBHOOK_URL`

Vonage:

- `NEXUS_CALLS_ENABLED` or `NEXUS_TELEPHONY_ENABLED`
- `VONAGE_API_KEY`
- `VONAGE_API_SECRET`
- `VONAGE_PHONE_NUMBER`
- `NEXUS_TELEPHONY_WEBHOOK_URL`

Telnyx:

- `NEXUS_CALLS_ENABLED` or `NEXUS_TELEPHONY_ENABLED`
- `TELNYX_API_KEY`
- `TELNYX_PHONE_NUMBER`
- `NEXUS_TELEPHONY_WEBHOOK_URL`

SignalWire:

- `NEXUS_CALLS_ENABLED` or `NEXUS_TELEPHONY_ENABLED`
- `SIGNALWIRE_PROJECT_ID`
- `SIGNALWIRE_TOKEN`
- `SIGNALWIRE_PHONE_NUMBER`
- `NEXUS_TELEPHONY_WEBHOOK_URL`

Plivo:

- `NEXUS_CALLS_ENABLED` or `NEXUS_TELEPHONY_ENABLED`
- `PLIVO_AUTH_ID`
- `PLIVO_AUTH_TOKEN`
- `PLIVO_PHONE_NUMBER`
- `NEXUS_TELEPHONY_WEBHOOK_URL`

Generic:

- `NEXUS_CALLS_ENABLED` or `NEXUS_TELEPHONY_ENABLED`
- `NEXUS_TELEPHONY_PROVIDER=generic`
- `NEXUS_TELEPHONY_API_KEY`
- `NEXUS_TELEPHONY_FROM_NUMBER`
- `NEXUS_TELEPHONY_WEBHOOK_URL`

## API Routes

- `GET /api/telephony/status`: returns selected provider, configured/enabled/ready states, inbound/outbound readiness, supported actions, unavailable actions, and missing environment variable names only.
- `POST /api/telephony/prepare-call`: returns a local call packet, script, readiness state, and receipt.
- `POST /api/telephony/outbound-call`: checks the real-call gate. It requires explicit confirmation and provider readiness, and remains blocked by the final provider adapter gate in this runtime.
- `POST /api/telephony/inbound-webhook`: placeholder/readiness route. It does not claim inbound calls are active unless webhook configuration exists.

## Call Packet Fields

Each call packet includes:

- `callId`
- `callDirection`
- `callPurpose`
- `sourceMode`
- `relatedWorkspaceId`
- `relatedRecordId`
- `fromNumber`
- `toNumber`
- `recipientName`
- `recipientType`
- `language`
- `script`
- `consentRequired`
- `consentStatus`
- `providerRequired`
- `providerStatus`
- `executionScope`
- `resultStatus`
- `receiptId`
- `timestamp`

## Safety Boundaries

Nexus does not call emergency services. Emergency requests are blocked and direct the user to local emergency services.

Nexus does not silently call, dial, message, dispatch, schedule, prescribe, refill, pay, share location, open camera, or contact providers from this runtime.

Real outbound calls require:

- destination phone number
- provider from number
- call purpose
- provider readiness
- consent
- explicit confirmation
- safety check
- receipt and audit
- final provider adapter approval

## Inbound Calls

If webhook configuration is missing, Nexus shows:

`Inbound phone calls are not active. A telephony provider number and webhook are required.`

Inbound readiness is configuration-only until the provider webhook is validated in a live-provider test.

## Standard User UI

The Standard User voice area includes a compact call-preparation workspace with:

- provider readiness label
- inbound readiness label
- missing environment variable names
- recipient type
- call purpose
- selected language
- generated script
- confirmation checkbox
- receipt list
- emergency boundary note

## QA

`scripts/nexus-telephony-call-runtime-qa.js` verifies provider detection, missing-config behavior, secret redaction, local preparation, emergency blocking, multilingual scripts, server routes, UI wiring, voice/typed command bridge, package alias, and safe-suite wiring.
