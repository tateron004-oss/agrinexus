# Render Environment Setup

AgriNexus deploys as two Render web services:

- `agrinexus-provider-engines`: receives provider workflow events.
- `agrinexus-platform`: serves the browser app and sends events to provider engines.

## Generate Values

Run this locally after the provider-engine service has a Render URL:

```powershell
$env:PROVIDER_BASE_URL="https://YOUR-AGRINEXUS-PROVIDER-ENGINES.onrender.com"
npm run render:env
```

The command creates `.env.render.generated`. Do not upload that file to GitHub.

To generate a stricter gap-fill file that turns every supported service to webhook mode:

```powershell
$env:PROVIDER_BASE_URL="https://YOUR-AGRINEXUS-PROVIDER-ENGINES.onrender.com"
npm run production:gapfill
```

That command creates `.env.production.gapfill`. Paste it into Render only after replacing `PASTE_*` values and the provider-engine URL.

Then generate the plain-language engine connection report:

```powershell
npm run engines:report
```

That command creates `LIVE_ENGINE_CONNECTION_REPORT.md`, which lists every engine, what it does, what values are still missing, and the next Render action.

## Paste Into Render

In Render, open each service, go to **Environment**, and paste the matching block:

- Paste the `agrinexus-provider-engines` block into the provider service.
- Paste the `agrinexus-platform` block into the platform service.

Replace these before calling it production:

- `DATABASE_URL`: Render PostgreSQL external database URL.
- `OPENAI_API_KEY`: live OpenAI API key.
- `MAP_TILE_URL`: production map tile URL if not using the default OpenStreetMap tile URL.
- `BILLING_PRICE_ID`: Stripe or billing provider subscription price id.
- `BILLING_CHECKOUT_URL`: optional hosted checkout URL if your billing provider supplies one.

The provider API keys must match between both services:

- `AI_PROVIDER_API_KEY`
- `LEARNING_PROVIDER_API_KEY`
- `WORKFORCE_PROVIDER_API_KEY`
- `HEALTH_PROVIDER_API_KEY`
- `TRADE_PROVIDER_API_KEY`
- `DRONE_PROVIDER_API_KEY`
- `VOICE_PROVIDER_API_KEY`
- `TRANSLATION_PROVIDER_API_KEY`
- `AUTH_PROVIDER_API_KEY`
- `COMMUNICATION_PROVIDER_API_KEY`
- `BILLING_PROVIDER_API_KEY`

Voice command center production variables:

- `VOICE_STT_PROVIDER=webhook`
- `VOICE_TTS_PROVIDER=webhook`
- `VOICE_STT_WEBHOOK_URL=https://YOUR-AGRINEXUS-PROVIDER-ENGINES.onrender.com/voice/transcribe`
- `VOICE_TTS_WEBHOOK_URL=https://YOUR-AGRINEXUS-PROVIDER-ENGINES.onrender.com/voice/speak`
- `VOICE_PROVIDER_API_KEY`

Multilingual production variables:

- `TRANSLATION_PROVIDER=webhook`
- `TRANSLATION_WEBHOOK_URL=https://YOUR-AGRINEXUS-PROVIDER-ENGINES.onrender.com/translate`
- `TRANSLATION_PROVIDER_API_KEY`

Production auth variables:

- `AUTH_PROVIDER=webhook`
- `AUTH_WEBHOOK_URL=https://YOUR-AGRINEXUS-PROVIDER-ENGINES.onrender.com/auth/users`
- `PASSWORD_RESET_PROVIDER=webhook`
- `PASSWORD_RESET_WEBHOOK_URL=https://YOUR-AGRINEXUS-PROVIDER-ENGINES.onrender.com/auth/password-reset`
- `AUTH_PROVIDER_API_KEY`

Production communications variables:

- `EMAIL_PROVIDER=webhook`
- `EMAIL_WEBHOOK_URL=https://YOUR-AGRINEXUS-PROVIDER-ENGINES.onrender.com/communications/email`
- `SMS_PROVIDER=webhook`
- `SMS_WEBHOOK_URL=https://YOUR-AGRINEXUS-PROVIDER-ENGINES.onrender.com/communications/sms`
- `WHATSAPP_PROVIDER=webhook`
- `WHATSAPP_WEBHOOK_URL=https://YOUR-AGRINEXUS-PROVIDER-ENGINES.onrender.com/communications/whatsapp`
- `COMMUNICATION_PROVIDER_API_KEY`

Production billing variables:

- `BILLING_PROVIDER=webhook`
- `BILLING_WEBHOOK_URL=https://YOUR-AGRINEXUS-PROVIDER-ENGINES.onrender.com/billing/subscriptions`
- `BILLING_PROVIDER_API_KEY`
- `BILLING_PRICE_ID`
- `BILLING_CHECKOUT_URL` if available

## Verify

After saving Render environment variables and redeploying both services:

```powershell
npm run production:preflight
npm run production:regression
npm run workforce:live-check
```

In the hosted browser, open:

```text
/status.html
/api/engines/manifest
```

The readiness board and engine manifest should show AI, voice, translation, maps, learning, workforce, healthcare, AgriTrade, drone, communications, auth, billing, and database engines as live-connected.
