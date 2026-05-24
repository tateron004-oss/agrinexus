# AgriNexus Production 10-Item Checklist

This file maps the production request to concrete platform support.

1. Live provider credentials
   - Tracked through Render env vars, provider cards, `/api/integrations`, and `/api/production/complete-check`.
   - Requires real keys for AI, translation, voice, maps, learning, workforce, telehealth, trade, drone, auth, communications, and billing.

2. Production database
   - Set `DATABASE_URL` and `AGRINEXUS_STATE_STORE=postgres`.
   - Use `npm run db:backup`, `npm run db:restore`, and foundation migration checks.

3. Real user accounts
   - Login and role permissions exist.
   - Password reset provider wiring is available at `/api/auth/password-reset`.
   - Production requires hosted auth provider credentials.

4. Payment/subscription system
   - Billing provider wiring is available at `/api/billing/checkout`.
   - Set `BILLING_PROVIDER`, `BILLING_WEBHOOK_URL`, `BILLING_PROVIDER_API_KEY`, and `BILLING_PRICE_ID`.

5. Production security
   - Security headers, payload limits, rate limiting, strict live mode, session secret, password pepper, and audit events are wired.
   - Production must set strong `SESSION_SECRET` and `PASSWORD_PEPPER`.

6. Clinical/legal guardrails
   - `public/terms.html`, `public/privacy.html`, and `public/refund.html` are included.
   - Telehealth consent, vitals, referral, follow-up, accessibility, and human review workflows are active.

7. End-to-end browser regression
   - `npm run production:clickthrough` checks pages, buttons, legal links, and workflow endpoints.
   - `npm run production:regression` includes the click-through audit.

8. Hosted deployment hardening
   - `render.yaml`, `/api/healthz`, `/status.html`, provider engines, and production runbook are included.
   - Render still needs real secret values entered in the dashboard.

9. Real provider data
   - Courses, jobs, telehealth, market, maps, drone, and billing provider adapters are ready.
   - Real data begins flowing after hosted provider URLs/API keys are configured.

10. Investor/product polish
   - Nexus command layer, status page, admin readiness, capability matrix, legal pages, demo/training assets, and operational workflow boards are included.

Run:

```powershell
npm run production:complete-check
npm run production:gapfill
npm run production:validate-env
npm run production:regression
npm run production:preflight
```

For the live launch sequence, use `LIVE_PRODUCTION_ACTIVATION.md`.
