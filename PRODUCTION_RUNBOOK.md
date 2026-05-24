# AgriNexus Production Runbook

## Current Production-Local Status

- Node/npm installed.
- Git installed.
- PostgreSQL 17 installed and running.
- `pg` package installed.
- Database migrations applied.
- Database verification passing.
- Production smoke passing.
- Webhook dispatch smoke passing.
- Local external provider engines available through `node scripts\provider-engines.js`.
- Local AI provider engine configured for production-style AI testing.
- Third-party production credentials still required before public production launch.

## Launch Checklist

1. Add `OPENAI_API_KEY` to `.env`.
2. Set any live provider mode from `sandbox` to `webhook`.
3. Add matching webhook URLs and provider API keys.
4. Run:

```powershell
node scripts\production-preflight.js
node scripts\production-smoke.js
node scripts\webhook-smoke.js
node scripts\provider-engines-smoke.js
node foundation\scripts\verify-db.js
```

5. Open the app and use Integrations provider test buttons.
6. Confirm Admin readiness has no unexpected gaps.
7. Take a database backup before launch:

```powershell
node scripts\db-backup.js
```

## Backup

Backups are written to:

```text
backups/
```

Use:

```powershell
node scripts\db-backup.js
```

## Restore

Restores are destructive because they clean existing objects before replaying a backup.

```powershell
node scripts\db-restore.js backups\your-backup.json
```

## Health

Runtime health endpoint:

```text
GET /api/healthz
```

Expected local-production response includes:

- `ok: true`
- database status `connected`
- readiness status and counts

## Known Remaining Production-Live Gates

- Live OpenAI key.
- Live Learning course catalog endpoint/key and certificate endpoint/key.
- Live Workforce provider endpoint/key for job network, calendar, notifications, HRIS, and shift scheduling.
- Live Healthcare provider endpoint/key.
- Live AgriTrade provider endpoint/key.
- Live map tile provider URL.
- Deployment target, domain, TLS, monitoring, and scheduled backups.
