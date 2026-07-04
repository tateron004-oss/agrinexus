# Nexus Production Runbook

This runbook covers production deployment, provider credential checks, and smoke-test proof capture for Nexus / AgriNexus.

## Install

```bash
npm install
```

## Start

```bash
npm start
```

Production hosts should set:

```bash
NODE_ENV=production
PORT=<host-provided-port>
```

## Environment Source

Use `.env.production.example` as the variable-name template. Configure real values in the hosting provider environment, not in Git.

Required activation groups:

- App URL and support/admin contacts.
- Live Knowledge provider credentials.
- SendGrid or SMTP credentials.
- Twilio SMS and WhatsApp credentials.
- Daily video credentials.
- Provider recipient emails.
- Provider SMS/WhatsApp destination numbers.
- Smoke test recipient values.

## Health Checks

```bash
curl https://<production-host>/api/health
curl https://<production-host>/api/nexus/production/status
```

The production status response must show missing env names only. It must not expose API keys, tokens, auth headers, passwords, or full provider credentials.

## Dry-Run Smoke Test

Dry-run does not send provider messages or create live video rooms.

```bash
node scripts/nexus-production-provider-smoke-test.js
```

Expected result:

- `.env.production.example` is present.
- Production health/status routes are present.
- Provider lanes are present.
- Smoke-send flag defaults to false.
- Missing env names are reported by name only.

## Live Smoke Test

Run only after production credentials and approved test recipients are configured.

```bash
NEXUS_ENABLE_PRODUCTION_PROVIDER_SMOKE_SENDS=true node scripts/nexus-production-provider-smoke-test.js
```

Use the production host environment or set:

```bash
NEXUS_PRODUCTION_SMOKE_BASE_URL=https://<production-host>
NEXUS_PRODUCTION_SMOKE_TEST_EMAIL_TO=<approved-test-inbox>
NEXUS_PRODUCTION_SMOKE_TEST_SMS_TO=<approved-test-phone>
NEXUS_PRODUCTION_SMOKE_TEST_WHATSAPP_TO=<approved-test-whatsapp>
```

## Log Review

Review production logs for:

- `/api/health` success.
- `/api/nexus/production/status` success.
- Live Knowledge provider result.
- Email provider message ID.
- Twilio SMS SID.
- Twilio WhatsApp SID.
- Daily room URL.

Do not copy secrets, tokens, auth headers, passwords, or full phone numbers into reports.

## Proof To Capture

- Production URL.
- Deployed commit hash.
- Health route response.
- Production status response with no secrets.
- Email provider message ID.
- Twilio SMS SID.
- Twilio WhatsApp SID.
- Daily room URL.
- Nexus case ID.
- Timestamp.
- Recipient endpoint used.
- Screenshot or log excerpt showing success without secrets.

## Rollback

1. Revert the production host to the last known good commit.
2. Disable provider send flags if live sends are failing:
   - `NEXUS_ENABLE_PRODUCTION_PROVIDER_SMOKE_SENDS=false`
   - `NEXUS_SMS_ENABLED=false`
   - `NEXUS_MESSAGES_ENABLED=false`
   - `NEXUS_WHATSAPP_ENABLED=false`
3. Re-run `/api/health`.
4. Re-run `/api/nexus/production/status`.
5. Capture rollback timestamp and deployed commit.

## What Not To Do

- Do not run real sends unless `NEXUS_ENABLE_PRODUCTION_PROVIDER_SMOKE_SENDS=true`.
- Do not paste secrets into logs, screenshots, GitHub, docs, or chat.
- Do not claim provider acceptance unless the provider returned accepted/sent metadata.
- Do not claim appointment creation unless a configured provider confirms it.
- Do not bypass Nexus consent and confirmation gates.
