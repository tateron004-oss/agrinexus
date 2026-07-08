# Nexus Message Preparation Runtime

## Purpose

The Nexus Message Preparation Runtime prepares outbound communication drafts locally across Nexus workflows. It supports typed Ask Nexus commands, voice transcripts, suggestions, provider cards, saved records, receipt actions, and future workspace buttons.

It is a real local-safe preparation runtime. It does not fake delivery, provider contact, pharmacy routing, buyer/seller contact, employer referral submission, drone dispatch, or SMS/email/WhatsApp sending.

## Supported message channels

The supported message channels are:

- Email
- SMS
- WhatsApp
- Notification
- Provider message
- Clinic message
- Pharmacy message
- Mobile clinic message
- Marketplace buyer/seller message
- Logistics/shipment message
- Workforce/employer/applicant message
- Admin/review queue message
- Drone coordination message

## Supported recipient types

The supported recipient types are:

- user
- patient
- caregiver
- clinic
- provider
- pharmacy
- mobile_clinic
- community_health_worker
- buyer
- seller
- logistics_provider
- driver
- employer
- applicant
- learner
- admin
- review_queue
- drone_provider
- field_operator
- custom_recipient

## How message prep works

1. Nexus detects a message-preparation request from typed or spoken input.
2. It identifies the channel, recipient type, source mode, purpose, subject, and language.
3. It generates a professional draft using the workflow context.
4. It shows provider readiness and missing environment variable names only.
5. It creates a local receipt.
6. It shows confirmation requirements and missing information.
7. It reports: `Prepared locally - not sent.`

If provider credentials are missing, the user sees that real sending requires provider credentials. No external message is sent.

Real sending requires provider credentials, recipient contact, consent, confirmation, safety checks, provider success, and outcome verification.

## Local-safe behavior

Every prepared message includes:

- draft body
- channel
- recipient type
- subject or purpose
- safety notes
- provider readiness
- missing information
- receipt
- no-execution flags

No external message is sent unless a future provider adapter has credentials, recipient contact, consent, explicit confirmation, safety approval, and provider success verification.

## Provider readiness

Provider readiness covers:

- SMTP, SendGrid, Gmail API, Microsoft Graph, and generic email env names
- Twilio SMS, Vonage SMS, and generic SMS env names
- WhatsApp Business, Twilio WhatsApp, Vonage WhatsApp, and generic WhatsApp env names
- Notification provider env names
- Provider, clinic, pharmacy, mobile clinic, marketplace, logistics, workforce, admin review, and drone coordination lanes

The runtime reports missing environment variable names only. It never exposes secret values.

## Confirmation and safety rules

Confirmation is required for sensitive or external messages, including:

- health/provider messages
- pharmacy messages
- mobile clinic messages
- patient or personal data
- payment or transaction context
- marketplace disputes
- shipment escalations
- employer referrals
- drone coordination
- any external SMS, email, WhatsApp, or provider send

The confirmation panel states what data is included, what provider is required, what happens if approved, and what remains blocked if credentials are missing.

## Receipts

Every preparation or blocked send attempt creates a receipt with:

- receiptId
- messageId
- action
- channel
- recipientType
- recipientName
- result
- status
- timestamp
- language
- providerUsed
- blockedReason
- nextStep
- verificationStatus

Example receipt messages:

- `SMS prepared locally. No message was sent.`
- `Email draft prepared locally. Email provider credentials required for sending.`
- `WhatsApp message prepared locally. WhatsApp provider not connected.`
- `Provider message queued for review locally.`
- `External sending blocked. Missing TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN.`

## Multilingual behavior

The runtime uses the existing Nexus language selection where available. It provides localized short status text for supported language labels and falls back truthfully when a full draft localization is not available.

Fallback text:

`Full message localization is not available for this language yet. Nexus is using available translated labels and default guidance.`

Arabic/RTL direction is respected through the existing language metadata.

## What requires real credentials

Real sending requires:

- active provider configuration
- recipient contact
- consent
- explicit user confirmation
- safety checks
- provider call success
- outcome verification

The current runtime creates adapter boundaries for real sending but remains local-safe unless a future provider adapter safely executes and verifies a real send.

## QA commands

```bash
git diff --check
node --check server.js
node --check public/app.js
node --check public/nexus-message-preparation-runtime.js
node --check scripts/nexus-message-preparation-runtime-qa.js
node scripts/nexus-message-preparation-runtime-qa.js
npm.cmd run qa:nexus-message-preparation-runtime
node scripts/nexus-voice-open-dialogue-runtime-qa.js
node scripts/nexus-universal-navigation-runtime-qa.js
node scripts/qa-suite.js nexus-workforce
node scripts/qa-suite.js all-safe
```
