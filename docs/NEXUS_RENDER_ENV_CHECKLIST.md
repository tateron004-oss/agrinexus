# Nexus Render Environment Checklist

Copy the variable names into Render. Leave values blank in source control. Add real values only in Render Dashboard -> Environment.

## 1. Start Here: Safe Testing Controls

| Env var name | Account/source | Required or optional | Testing priority | Notes |
|---|---|---:|---:|---|
| NEXUS_PROVIDER_TEST_MODE | Nexus config | Required | 1 | Set `true` for readiness testing. |
| NEXUS_ALLOW_LIVE_EXECUTION | Nexus config | Required | 1 | Start with `false`. |
| NEXUS_REQUIRE_CONFIRMATION_FOR_LIVE_ACTIONS | Nexus config | Required | 1 | Set `true`. |
| NEXUS_REQUIRE_CONSENT_FOR_HEALTH_ACTIONS | Nexus config | Required | 1 | Set `true`. |

## 2. First Activation: Search, Weather, Maps

| Env var name | Account/source | Required or optional | Testing priority | Notes |
|---|---|---:|---:|---|
| NEXUS_LIVE_KNOWLEDGE_PROVIDER | Nexus config | Required | 1 | Suggested value: `tavily`. |
| TAVILY_API_KEY | Tavily | Required for Tavily | 1 | Source-backed search. |
| NEXUS_WEATHER_PROVIDER | Nexus config | Required for weather | 1 | Suggested value: `openweather`. |
| OPENWEATHER_API_KEY | OpenWeather | Required for OpenWeather | 1 | Weather and heat-risk testing. |
| NEXUS_MAP_PROVIDER | Nexus config | Required for maps | 1 | Suggested value: `mapbox`. |
| MAPBOX_ACCESS_TOKEN | Mapbox | Required for Mapbox | 1 | Route/map testing. |

## 3. Second Activation: Email, SMS, WhatsApp, Voice

| Env var name | Account/source | Required or optional | Testing priority | Notes |
|---|---|---:|---:|---|
| NEXUS_EMAIL_PROVIDER | Nexus config | Optional | 2 | Suggested value: `sendgrid`. |
| SENDGRID_API_KEY | SendGrid | Required for SendGrid | 2 | Email provider testing. |
| SENDGRID_FROM_EMAIL | SendGrid verified sender | Required for SendGrid | 2 | Must be verified by SendGrid. |
| NEXUS_SMS_PROVIDER | Nexus config | Optional | 2 | Suggested value: `twilio`. |
| TWILIO_ACCOUNT_SID | Twilio | Required for Twilio | 2 | Do not expose. |
| TWILIO_AUTH_TOKEN | Twilio | Required for Twilio | 2 | Do not expose. Rotate if ever exposed. |
| TWILIO_FROM_NUMBER | Twilio | Required for SMS | 2 | Nexus may also accept phone-number aliases. |
| NEXUS_WHATSAPP_PROVIDER | Nexus config | Optional | 2 | Suggested value: `twilio`. |
| TWILIO_WHATSAPP_FROM | Twilio WhatsApp sandbox/business | Required for WhatsApp | 2 | Example sender pattern may be `whatsapp:+...`. |
| NEXUS_VOICE_PROVIDER | Nexus config | Optional | 2 | Suggested value: `twilio`. |
| TWILIO_VOICE_FROM_NUMBER | Twilio | Required for voice | 2 | Keep calls gated. |

## 4. Third Activation: Video, Payments, LMS, Logistics

| Env var name | Account/source | Required or optional | Testing priority | Notes |
|---|---|---:|---:|---|
| NEXUS_VIDEO_PROVIDER | Nexus config | Optional | 3 | Suggested value: `daily`. |
| DAILY_API_KEY | Daily | Required for Daily | 3 | Telehealth/video rooms stay consent-gated. |
| NEXUS_PAYMENT_PROVIDER | Nexus config | Optional | 3 | Suggested value: `stripe` for test mode. |
| STRIPE_SECRET_KEY | Stripe sandbox | Required for Stripe | 3 | Use test key first; payments remain gated. |
| STRIPE_WEBHOOK_SECRET | Stripe sandbox webhook | Optional initially | 3 | Required for webhook validation later. |
| PAYSTACK_SECRET_KEY | Paystack | Optional | 3 | Africa payment option; keep disabled until approved. |
| NEXUS_LMS_PROVIDER | Nexus config | Optional | 3 | Suggested value: `moodle`. |
| MOODLE_BASE_URL | Moodle/Koachlearn | Required for Moodle | 3 | LMS lookup/enrollment stays gated. |
| MOODLE_TOKEN | Moodle/Koachlearn | Required for Moodle | 3 | Do not expose. |
| NEXUS_SHIPMENT_PROVIDER | Nexus config | Optional | 3 | Suggested value: `aftership`. |
| AFTERSHIP_API_KEY | AfterShip | Required for AfterShip | 3 | Tracking claims require provider response. |

## 5. Later Vendor Endpoints: Health, Pharmacy, Mobile Clinic, Drone

| Env var name | Account/source | Required or optional | Testing priority | Notes |
|---|---|---:|---:|---|
| NEXUS_HEALTH_PROVIDER_ENDPOINT | Healthcare partner | Later | 4 | Requires partner agreement and compliance review. |
| NEXUS_HEALTH_PROVIDER_API_KEY | Healthcare partner | Later | 4 | Do not add until partner-approved. |
| NEXUS_PHARMACY_PROVIDER_ENDPOINT | Pharmacy partner | Later | 4 | No refill/fulfillment without provider workflow. |
| NEXUS_PHARMACY_PROVIDER_API_KEY | Pharmacy partner | Later | 4 | Keep blank until approved. |
| NEXUS_MOBILE_CLINIC_PROVIDER_ENDPOINT | Mobile clinic partner | Later | 4 | No dispatch without partner confirmation. |
| NEXUS_MOBILE_CLINIC_PROVIDER_API_KEY | Mobile clinic partner | Later | 4 | Keep blank until approved. |
| NEXUS_DRONE_PROVIDER_ENDPOINT | Drone partner | Later | 4 | Status/readiness only until approved. |
| NEXUS_DRONE_PROVIDER_API_KEY | Drone partner | Later | 4 | No flight execution. |
| NEXUS_DRONE_DISPATCH_ENDPOINT | Drone partner | Later | 4 | Keep blank until dispatch approvals exist. |
| NEXUS_DRONE_DISPATCH_API_KEY | Drone partner | Later | 4 | Keep blank until dispatch approvals exist. |
| NEXUS_GENERIC_PROVIDER_ENDPOINT | Partner/vendor | Later | 4 | Use only with a defined partner contract. |
| NEXUS_GENERIC_PROVIDER_API_KEY | Partner/vendor | Later | 4 | Do not expose. |

## 6. Optional Services: Translation, Storage, Media

| Env var name | Account/source | Required or optional | Testing priority | Notes |
|---|---|---:|---:|---|
| NEXUS_TRANSLATION_PROVIDER | Nexus config | Optional | 5 | `google`, `deepl`, `azure`, or `generic`. |
| DEEPL_API_KEY | DeepL | Optional | 5 | Translation support. |
| AZURE_TRANSLATOR_KEY | Azure | Optional | 5 | Translation support. |
| NEXUS_MEDIA_PROVIDER | Nexus config | Optional | 5 | Suggested value: `youtube`. |
| YOUTUBE_API_KEY | YouTube Data API | Optional | 5 | Search/embed support only; no downloads. |
| AWS_ACCESS_KEY_ID | AWS | Optional | 5 | Storage/export later. |
| AWS_SECRET_ACCESS_KEY | AWS | Optional | 5 | Do not expose. |
| CLOUDINARY_URL | Cloudinary | Optional | 5 | Media storage later. |
| GOOGLE_DRIVE_REFRESH_TOKEN | Google Drive | Optional | 5 | Document storage later. |

