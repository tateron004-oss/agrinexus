# Nexus Render Credential Activation Guide

This guide explains how to add real provider credentials to the deployed AgriNexus/Nexus Render service safely. Real API keys belong in Render environment variables, not in GitHub, source files, screenshots, chat messages, or documentation.

## What Render Environment Variables Are

Render environment variables are secret or configuration values stored inside the Render Dashboard for a specific web service. Nexus reads these values at runtime after the service redeploys. The repository should contain only variable names and blank placeholders.

Do not commit real API keys, account tokens, phone numbers, payment secrets, OAuth secrets, provider endpoint tokens, or webhook secrets.

## Where To Add Them In Render

Use this path for the AgriNexus/Nexus web service:

```text
Render Dashboard
-> Select AgriNexus/Nexus Web Service
-> Environment
-> Add Environment Variable
-> Save Changes
-> Redeploy
```

After redeploy, open Nexus and use the Connect Everything / Provider readiness panel to confirm whether each provider changed from missing configuration to configured, test-ready, or gated.

## Safety Defaults

Start every Render activation with these controls:

```bash
NEXUS_PROVIDER_TEST_MODE=true
NEXUS_ALLOW_LIVE_EXECUTION=false
NEXUS_REQUIRE_CONFIRMATION_FOR_LIVE_ACTIONS=true
NEXUS_REQUIRE_CONSENT_FOR_HEALTH_ACTIONS=true
```

This lets Nexus detect credentials and run readiness checks without accidentally sending messages, processing payments, dispatching services, booking visits, triggering provider handoffs, or executing health/pharmacy actions.

Keep `NEXUS_ALLOW_LIVE_EXECUTION=false` until provider-specific tests pass and Ron intentionally enables a narrow live lane.

## First Recommended Render Stack: Search, Weather, Maps

Use this first because it makes Nexus feel online through source-backed search, weather, agriculture support, and maps without activating high-risk real-world actions.

```bash
# Provider safety controls
NEXUS_PROVIDER_TEST_MODE=true
NEXUS_ALLOW_LIVE_EXECUTION=false
NEXUS_REQUIRE_CONFIRMATION_FOR_LIVE_ACTIONS=true
NEXUS_REQUIRE_CONSENT_FOR_HEALTH_ACTIONS=true

# Live Knowledge
NEXUS_LIVE_KNOWLEDGE_PROVIDER=tavily
TAVILY_API_KEY=

# Weather
NEXUS_WEATHER_PROVIDER=openweather
OPENWEATHER_API_KEY=

# Maps
NEXUS_MAP_PROVIDER=mapbox
MAPBOX_ACCESS_TOKEN=
```

Expected result: Nexus should show Live Knowledge, Weather, and Maps as configured or ready for safe tests when valid keys are present. It should still avoid calls, messages, payments, provider dispatch, pharmacy actions, and emergency handling.

## Second Render Stack: Communications Testing

Add communications only after the first stack is stable.

```bash
# Email
NEXUS_EMAIL_PROVIDER=sendgrid
SENDGRID_API_KEY=
SENDGRID_FROM_EMAIL=

# SMS
NEXUS_SMS_PROVIDER=twilio
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_FROM_NUMBER=

# WhatsApp
NEXUS_WHATSAPP_PROVIDER=twilio
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886

# Voice
NEXUS_VOICE_PROVIDER=twilio
TWILIO_VOICE_FROM_NUMBER=
```

Keep `NEXUS_ALLOW_LIVE_EXECUTION=false` during initial testing. Nexus should show these lanes as configured, gated, or test-ready depending on adapter support. Nexus should not actually send messages or calls unless live execution is intentionally enabled and confirmation gates pass.

## Third Render Stack: Video, Payments, LMS, Logistics

Use sandbox/test credentials first.

```bash
# Video / Telehealth
NEXUS_VIDEO_PROVIDER=daily
DAILY_API_KEY=

# Payments - Stripe test mode
NEXUS_PAYMENT_PROVIDER=stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# Africa payment option
# NEXUS_PAYMENT_PROVIDER=paystack
# PAYSTACK_SECRET_KEY=

# LMS
NEXUS_LMS_PROVIDER=moodle
MOODLE_BASE_URL=
MOODLE_TOKEN=

# Shipment / Logistics
NEXUS_SHIPMENT_PROVIDER=aftership
AFTERSHIP_API_KEY=
```

Payments must remain confirmation-gated. Telehealth and provider actions must remain consent-gated. LMS enrollment must remain confirmation-gated. Shipment tracking should not claim live tracking unless a provider response is actually received.

## Vendor Endpoint Section

Vendor endpoints are not normal public accounts. They require a real partner or vendor who agrees to receive Nexus requests, provides an endpoint, and defines the allowed action contract.

Keep these missing or vendor-required until real partner agreements exist:

```bash
# Healthcare partner endpoints
NEXUS_HEALTH_PROVIDER_ENDPOINT=
NEXUS_HEALTH_PROVIDER_API_KEY=
NEXUS_PHARMACY_PROVIDER_ENDPOINT=
NEXUS_PHARMACY_PROVIDER_API_KEY=
NEXUS_MOBILE_CLINIC_PROVIDER_ENDPOINT=
NEXUS_MOBILE_CLINIC_PROVIDER_API_KEY=

# Drone partner endpoints
NEXUS_DRONE_PROVIDER_ENDPOINT=
NEXUS_DRONE_PROVIDER_API_KEY=
NEXUS_DRONE_DISPATCH_ENDPOINT=
NEXUS_DRONE_DISPATCH_API_KEY=

# Generic provider endpoint
NEXUS_GENERIC_PROVIDER_ENDPOINT=
NEXUS_GENERIC_PROVIDER_API_KEY=
```

Do not use these for live health, pharmacy, mobile clinic, drone, dispatch, or generic provider execution until consent, approval, audit, and vendor confirmation controls are active.

## How To Test After Redeploy

1. Open the Render URL.
2. Start as Standard User.
3. Open the Activation Center or Connect Everything panel.
4. Confirm missing env names appear by name only.
5. Confirm secret values are not visible.
6. Run safe readiness tests first: Live Knowledge, Weather, Maps.
7. Review provider receipts and audit log.
8. Keep live execution disabled until a single provider lane is intentionally approved.

## Never Do This

- Never paste real credentials into GitHub, docs, screenshots, browser-visible UI, or chat.
- Never enable broad live execution globally.
- Never test SMS, WhatsApp, voice, payments, telehealth, pharmacy, drone, emergency, or dispatch lanes without a narrow approved recipient/provider/action.
- Never treat a configured key as proof that Nexus completed a real-world action.

