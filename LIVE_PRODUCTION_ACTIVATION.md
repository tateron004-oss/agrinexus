# AgriNexus Live Production Activation

This is the shortest path from production-shaped platform to real hosted service.

## 1. Deploy Provider Engines First

In Render, create or redeploy the provider service from `render.yaml`:

- Service name: `agrinexus-provider-engines`
- Start command: `npm run provider-engines`

After Render gives you the service URL, copy it. It should look like:

```text
https://agrinexus-provider-engines.onrender.com
```

## 2. Generate the Gap-Fill Environment

Run locally:

```powershell
$env:PROVIDER_BASE_URL="https://YOUR-ACTUAL-PROVIDER-ENGINE-URL.onrender.com"
npm run production:gapfill
```

This creates:

```text
.env.production.gapfill
```

Do not upload this file to GitHub.

## 3. Replace the Remaining Real Values

Open `.env.production.gapfill` and replace:

```text
DATABASE_URL -> your Render PostgreSQL external URL
OPENAI_API_KEY -> your OpenAI project key
BILLING_PRICE_ID -> your billing or Stripe price id
```

Also make sure no line still contains:

```text
YOUR-AGRINEXUS-PROVIDER-ENGINES
PASTE_
```

## 4. Validate Before Pasting

Run:

```powershell
npm run production:validate-env
```

If it reports unresolved values, fix those first.

## 5. Paste Into Render

Paste the platform block into:

```text
agrinexus-platform -> Environment
```

Paste matching provider keys into:

```text
agrinexus-provider-engines -> Environment
```

At minimum, both services must share these exact same values:

```text
AI_PROVIDER_API_KEY
LEARNING_PROVIDER_API_KEY
WORKFORCE_PROVIDER_API_KEY
HEALTH_PROVIDER_API_KEY
TRADE_PROVIDER_API_KEY
DRONE_PROVIDER_API_KEY
VOICE_PROVIDER_API_KEY
TRANSLATION_PROVIDER_API_KEY
AUTH_PROVIDER_API_KEY
COMMUNICATION_PROVIDER_API_KEY
BILLING_PROVIDER_API_KEY
```

## 6. Redeploy

Redeploy in this order:

1. `agrinexus-provider-engines`
2. `agrinexus-platform`

## 7. Verify Live Status

Open:

```text
https://YOUR-AGRINEXUS-PLATFORM.onrender.com/status.html
```

Then confirm:

- Production gates are mostly or fully ready.
- Provider cards show connected.
- AI is not fallback.
- Database is PostgreSQL.
- Voice, translation, auth, communications, billing, workforce, health, trade, drone, and maps are connected.

## 8. Test Real Workflows

Use the platform in this order:

1. Login.
2. Run Admin health check.
3. Open Integrations and test all providers.
4. Run Nexus full mission.
5. Complete a learning lesson.
6. Apply for a workforce role.
7. Start telehealth intake, consent, vitals, referral, and follow-up.
8. Plan drone mission, scan field, assign intervention.
9. Create trade order and advance logistics.
10. Test billing checkout.

## Honest Production Boundary

The platform can now use real services, but it becomes fully real only when the Render environment contains real credentials and provider URLs. Until those are entered, the app will correctly report setup gaps instead of pretending to be production-ready.
