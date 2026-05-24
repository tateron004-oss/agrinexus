# AgriNexus Full Stack

AgriNexus has two runnable modes:

- `open-agrinexus-direct.html`: offline direct mode. No server, no API key, and no live AI calls.
- `server.js` + `public/`: backend mode with JSON persistence, Leaflet/OpenStreetMap, and optional real OpenAI AI calls.

## Backend Mode

Start the server:

```powershell
npm install
npm start
```

Open:

```text
http://localhost:4173
```

Operational status:

```text
http://localhost:4173/status.html
http://localhost:4173/api/integrations
```

Demo login:

```text
demo@agrinexus.org
Prototype2026!
```

## Real AI

Set `OPENAI_API_KEY` before starting `node server.js`.

```powershell
$env:OPENAI_API_KEY="your-key-here"
$env:OPENAI_MODEL="gpt-5.4-mini"
node server.js
```

When the key is present, `/api/ai/run` and AI-backed health actions call the OpenAI Responses API. When the key is missing or a request fails, the app falls back to offline simulated guidance and labels the provider in profile state. Set `AGRINEXUS_REQUIRE_LIVE_SERVICES=true` for hosted production so missing live AI or failed live AI calls are treated as setup failures instead of demo fallback.

Do not put API keys into frontend files. The browser talks only to this local backend; the backend talks to OpenAI.

## Live Map

Backend mode uses Leaflet with OpenStreetMap tiles. It requires network access for map tiles. Direct mode uses an embedded local schematic map so it can run without a server or network.

To use a custom production tile provider, set:

```powershell
$env:MAP_TILE_PROVIDER="custom-tile"
$env:MAP_TILE_URL="https://your-tile-provider/{z}/{x}/{y}.png"
```

## Integration Activation

The app includes local sandbox workflows for every module and an Admin/Integrations activation checklist for live connections. Sandbox mode is functional for demos and local testing. Production-ready mode requires credentials for the providers you want to activate.

## Voice Command Center

AgriNexus includes a Nexus Voice Assistant in the Agent Command Center. Browser voice works locally, while production voice should use hosted speech providers:

```env
VOICE_STT_PROVIDER=webhook
VOICE_TTS_PROVIDER=webhook
VOICE_STT_WEBHOOK_URL=https://your-provider/voice/transcribe
VOICE_TTS_WEBHOOK_URL=https://your-provider/voice/speak
VOICE_PROVIDER_API_KEY=your-shared-voice-provider-key
```

Voice commands are processed through `/api/agent/command`, with speech sessions recorded through `/api/voice/transcribe` and `/api/voice/speak`. This creates audit evidence for command input, command execution, and spoken response output.

## Production Multilingual Agentic Gate

Full multilingual production mode expects these live providers in Render:

```env
OPENAI_API_KEY=your-openai-key
TRANSLATION_PROVIDER=webhook
TRANSLATION_WEBHOOK_URL=https://your-provider/translate
TRANSLATION_PROVIDER_API_KEY=your-translation-provider-key
VOICE_STT_PROVIDER=webhook
VOICE_TTS_PROVIDER=webhook
VOICE_STT_WEBHOOK_URL=https://your-provider/voice/transcribe
VOICE_TTS_WEBHOOK_URL=https://your-provider/voice/speak
VOICE_PROVIDER_API_KEY=your-voice-provider-key
AUTH_PROVIDER=webhook
AUTH_WEBHOOK_URL=https://your-provider/auth/users
PASSWORD_RESET_PROVIDER=webhook
PASSWORD_RESET_WEBHOOK_URL=https://your-provider/auth/password-reset
AUTH_PROVIDER_API_KEY=your-auth-provider-key
```

Before presenting or deploying a production candidate, run:

```powershell
npm run production:regression
```

That command checks syntax, workflow buttons, core workflows, translation, provider engines, voice, and GitHub readiness.

Common live provider environment variables are documented in `.env.example`, including:

- Learning courses and certificates: `LEARNING_COURSE_PROVIDER`, `LEARNING_CERTIFICATE_PROVIDER`, `LEARNING_COURSE_WEBHOOK_URL`, `LEARNING_CERTIFICATE_WEBHOOK_URL`
- Workforce jobs, calendar, notifications, HRIS, and shifts: `WORKFORCE_JOB_PROVIDER`, `WORKFORCE_CALENDAR_PROVIDER`, `WORKFORCE_NOTIFICATION_PROVIDER`, `WORKFORCE_HRIS_PROVIDER`, `WORKFORCE_SHIFT_PROVIDER`, plus webhook/API key settings
- Healthcare: `HEALTH_TELEHEALTH_PROVIDER`, `HEALTH_EHR_PROVIDER`, `HEALTH_NOTIFICATION_PROVIDER`, plus webhook/API key settings
- AgriTrade: `TRADE_PAYMENT_PROVIDER`, `TRADE_LOGISTICS_PROVIDER`, `TRADE_MARKET_PROVIDER`, plus webhook/API key settings
- Drone field intelligence: `DRONE_PROVIDER`, `DRONE_WEBHOOK_URL`, `DRONE_PROVIDER_API_KEY`
- AI: `OPENAI_API_KEY`, `OPENAI_MODEL`
- Maps: `MAP_TILE_PROVIDER`, `MAP_TILE_URL`
- Persistence: `DATABASE_URL`, `AGRINEXUS_STATE_STORE=postgres`, `SESSION_SECRET`

After setting provider values, restart `node server.js`, open Admin or Integrations, and run the health check.

For hosted production, use strict live mode:

```powershell
$env:AGRINEXUS_REQUIRE_LIVE_SERVICES="true"
$env:HOST="0.0.0.0"
$env:AGRINEXUS_DATA_DIR="/var/data"
```

Strict mode keeps the platform from showing false production readiness. Sandbox providers, fallback AI, and missing PostgreSQL appear as live gaps on `/status.html` and `/api/integrations`.

For hosted production, learning and workforce workflow records persist through PostgreSQL when both of these are set:

```powershell
$env:DATABASE_URL="postgres://..."
$env:AGRINEXUS_STATE_STORE="postgres"
```

The foundation schema also includes relational PostgreSQL tables for courses, enrollments, certificates, workforce roles, candidate profiles, and job applications. The full app state store keeps the visible workspace workflows durable while those domain tables are available for deeper production services and reporting.

## Full Automation Readiness

The Agent Command Center tracks five production unlocks for full automation:

- Live provider accounts
- Scheduled/background automation
- Event-triggered workflows
- Notification delivery
- Production user management

The platform reports these from live environment/provider status. Use these environment variables to turn on automation readiness once the real services exist:

```powershell
$env:AGRINEXUS_AUTOMATION_SCHEDULES="enabled"
$env:AGRINEXUS_EVENT_TRIGGERS="enabled"
$env:AUTH_PROVIDER="your-auth-provider"
$env:PASSWORD_RESET_PROVIDER="your-password-reset-provider"
$env:EMAIL_PROVIDER="your-email-provider"
$env:SMS_PROVIDER="your-sms-provider"
$env:WHATSAPP_PROVIDER="your-whatsapp-provider"
```

When a provider mode is set to a live value such as `webhook`, AgriNexus sends workflow events to the configured webhook URL as JSON. If the matching provider API key is set, requests include:

```text
Authorization: Bearer <provider-api-key>
```

Use the Integrations page provider test buttons to confirm each live endpoint is reachable before relying on it for production workflows.

## Verification

```powershell
node --check server.js
node --check public\app.js
node scripts\github-ready-check.js
node scripts\smoke.js
node scripts\webhook-smoke.js
node scripts\provider-engines-smoke.js
node scripts\production-smoke.js
node scripts\production-preflight.js
node scripts\workforce-live-check.js
node scripts\db-backup.js
```

`production-preflight.js` checks the machine, `.env`, runtime packages, PostgreSQL readiness, live AI, and live provider activation status. It exits with a non-zero status while production blockers remain.

For production operations, see `PRODUCTION_RUNBOOK.md`.

## GitHub Upload

This folder is ready to upload as the repository root. Before uploading, run:

```powershell
npm run github:check
```

Do not upload `.env`, `node_modules/`, `backups/`, logs, or provider event files. They are ignored by `.gitignore` and `.dockerignore`. See `GITHUB_UPLOAD_GUIDE.md` for the step-by-step GitHub and Render deployment flow.

## Local External Engines

Run local provider engines for Learning, Workforce, Healthcare, and AgriTrade:

```powershell
node scripts\provider-engines.js
```

On Windows, you can also run:

```powershell
.\start-provider-engines.cmd
```

To start the provider engines and app together, run:

```powershell
.\start-full-system.cmd
```

The `.env` file points live webhook provider modes to `http://localhost:4280/...` endpoints. These are local external engines for production-style integration testing, not third-party production accounts.

The local provider engine also includes an AI endpoint at:

```text
http://localhost:4280/ai/responses
```

Set `AI_PROVIDER=webhook`, `AI_WEBHOOK_URL`, and `AI_PROVIDER_API_KEY` to use it. Set `OPENAI_API_KEY` later to replace the local AI engine with OpenAI.

## Production Foundation

The production build-out has started under:

```text
foundation/
```

Key files:

- `foundation/migrations/001_initial_schema.sql`
- `foundation/migrations/002_seed_demo.sql`
- `foundation/src/app.js`
- `foundation/docs/ARCHITECTURE.md`
- `foundation/docs/IMPLEMENTATION_PLAN.md`
- `foundation/docs/API_CONTRACT.md`

This layer defines the PostgreSQL schema, module boundaries, API contract, and integration plan for turning the prototype into a real multi-user, provider-connected platform.

### Applying Foundation Migrations

Without `DATABASE_URL`, the migration command lists migrations in offline mode:

```powershell
node foundation\scripts\migrate.js --dry-run
```

For local PostgreSQL, use the included Docker Compose file when Docker is available:

```powershell
docker compose up -d postgres
```

Then install dependencies and create `.env` from the example:

```powershell
npm install
Copy-Item .env.example .env
```

The example database URL matches `docker-compose.yml`:

```text
postgres://agrinexus:agrinexus_dev_password@localhost:5432/agrinexus
```

Apply migrations and verify the rich seed data:

```powershell
node foundation\scripts\migrate.js
node foundation\scripts\verify-db.js
```

Expected verification includes applied migrations plus counts for countries, facilities, routes, workforce roles, patient intakes, products, trade orders, wallet transactions, AI runs, and audit events.

If you do not use Docker, set `DATABASE_URL` to your own PostgreSQL database before running the same commands:

```powershell
$env:DATABASE_URL="postgres://user:password@localhost:5432/agrinexus"
node foundation\scripts\migrate.js
node foundation\scripts\verify-db.js
```
