# AgriNexus Live Engine Connection Report

Source env file: `.env.production.gapfill`
Generated: 2026-05-26T05:00:03.033Z
Ready engines: 3/12

This report is the non-developer checklist for connecting real services in Render. Values marked missing must be added in Render before this is a true live production platform.

| Engine | Purpose | Status | Missing Values | Next Step |
| --- | --- | --- | --- | --- |
| Production PostgreSQL | Persistent platform records | Ready | None | Create a Render PostgreSQL database, copy its internal DATABASE_URL, and set AGRINEXUS_STATE_STORE=postgres. |
| Nexus Live AI | Agentic planning, command center reasoning, tutoring, triage, workforce coaching, trade guidance, and briefings | Needs values | `OPENAI_API_KEY` | Create an OpenAI API key and paste it into Render as OPENAI_API_KEY. |
| Live Translation | Dynamic multilingual content translation | Needs values | `TRANSLATION_WEBHOOK_URL` | Deploy provider engines or connect a translation provider endpoint. |
| Jarvis-Style Voice | OpenAI speech-to-text and high-quality text-to-speech commands | Needs values | `OPENAI_API_KEY` | Set VOICE_STT_PROVIDER=openai, VOICE_TTS_PROVIDER=openai, and add OPENAI_API_KEY in Render. |
| Phone Voice Assistant | Twilio phone-call assistant for speech commands and voice responses | Needs values | `PUBLIC_BASE_URL`<br>`TWILIO_ACCOUNT_SID`<br>`TWILIO_AUTH_TOKEN`<br>`TWILIO_PHONE_NUMBER` | Buy/configure a Twilio voice number and point incoming calls to PUBLIC_BASE_URL/api/voice/phone/incoming. |
| Learning Provider | Courses, lessons, certificates, and readiness evidence | Needs values | `LEARNING_COURSE_WEBHOOK_URL` | Use provider engines first, then connect a real LMS/course provider when chosen. |
| Workforce Network | Jobs, HR records, calendars, shifts, applications, and notifications | Needs values | `WORKFORCE_JOB_WEBHOOK_URL`<br>`WORKFORCE_SHIFT_WEBHOOK_URL` | Use provider engines first, then connect real job boards, employer systems, calendar, HRIS, or shift tools. |
| Telehealth Network | Intake, accessibility needs, consent, vitals, care plans, referrals, follow-up, EHR sync, and notifications | Ready | None | Use provider engines first, then connect a compliant telehealth/EHR/notification vendor. |
| Trade, Market, Logistics, and Drone Engines | Payments, logistics, market data, drone scans, crop intelligence, and route evidence | Needs values | `DRONE_WEBHOOK_URL` | Deploy provider engines, then replace with real payment, logistics, market, and drone vendors. |
| Live Maps | Field, country, route, drone, and operational map context | Ready | None | Use OpenStreetMap tiles for launch or replace MAP_TILE_URL with Mapbox/Google/provider tiles. |
| Communications | Email, SMS, WhatsApp, phone reminders, and workflow alerts | Needs values | `EMAIL_WEBHOOK_URL`<br>`SMS_WEBHOOK_URL`<br>`WHATSAPP_WEBHOOK_URL` | Use provider engines first, then connect SendGrid/Mailgun/Twilio/WhatsApp Business or your chosen vendor. |
| Subscriber Auth and Billing | Users, password reset, subscription checkout, and client management | Needs values | `AUTH_WEBHOOK_URL`<br>`PASSWORD_RESET_WEBHOOK_URL`<br>`BILLING_WEBHOOK_URL`<br>`BILLING_PRICE_ID` | Deploy provider engines, then connect real auth/password reset and Stripe billing. |

## Fastest Safe Launch Path

1. Deploy the provider-engine service from `render.yaml`.
2. Copy its Render URL into `PROVIDER_BASE_URL`, then run `npm run production:gapfill` again.
3. Add Render PostgreSQL and paste `DATABASE_URL`.
4. Add `OPENAI_API_KEY`.
5. Add `BILLING_PRICE_ID` when subscriptions are ready.
6. Paste the generated values into the main Render web service.
7. Open `/api/engines/manifest` and `/status.html` to confirm live status.
