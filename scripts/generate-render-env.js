const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

function secret(bytes = 32) {
  return crypto.randomBytes(bytes).toString("base64url");
}

function fromEnv(key, fallback = "") {
  return process.env[key] || fallback;
}

const providerBase = fromEnv("PROVIDER_BASE_URL", "https://YOUR-AGRINEXUS-PROVIDER-ENGINES.onrender.com").replace(/\/$/, "");
const mapTileUrl = fromEnv("MAP_TILE_URL", "https://tile.openstreetmap.org/{z}/{x}/{y}.png");

const shared = {
  NODE_ENV: "production",
  HOST: "0.0.0.0",
  PORT: "10000",
  AGRINEXUS_DATA_DIR: "/var/data",
  AGRINEXUS_STATE_STORE: "postgres",
  AGRINEXUS_REQUIRE_LIVE_SERVICES: "true",
  AGRINEXUS_AUTOMATION_SCHEDULES: fromEnv("AGRINEXUS_AUTOMATION_SCHEDULES", "disabled"),
  AGRINEXUS_EVENT_TRIGGERS: fromEnv("AGRINEXUS_EVENT_TRIGGERS", "disabled"),
  AUTH_PROVIDER: fromEnv("AUTH_PROVIDER", "webhook"),
  PASSWORD_RESET_PROVIDER: fromEnv("PASSWORD_RESET_PROVIDER", "webhook"),
  AUTH_WEBHOOK_URL: `${providerBase}/auth/users`,
  PASSWORD_RESET_WEBHOOK_URL: `${providerBase}/auth/password-reset`,
  AUTH_PROVIDER_API_KEY: fromEnv("AUTH_PROVIDER_API_KEY", secret(32)),
  EMAIL_PROVIDER: fromEnv("EMAIL_PROVIDER", "webhook"),
  EMAIL_WEBHOOK_URL: `${providerBase}/communications/email`,
  SMS_PROVIDER: fromEnv("SMS_PROVIDER", "webhook"),
  SMS_WEBHOOK_URL: `${providerBase}/communications/sms`,
  WHATSAPP_PROVIDER: fromEnv("WHATSAPP_PROVIDER", "webhook"),
  WHATSAPP_WEBHOOK_URL: `${providerBase}/communications/whatsapp`,
  COMMUNICATION_PROVIDER_API_KEY: fromEnv("COMMUNICATION_PROVIDER_API_KEY", secret(32)),
  BILLING_PROVIDER: fromEnv("BILLING_PROVIDER", "webhook"),
  BILLING_WEBHOOK_URL: `${providerBase}/billing/subscriptions`,
  BILLING_PROVIDER_API_KEY: fromEnv("BILLING_PROVIDER_API_KEY", secret(32)),
  BILLING_PRICE_ID: fromEnv("BILLING_PRICE_ID", "PASTE_BILLING_PRICE_ID"),
  BILLING_CHECKOUT_URL: fromEnv("BILLING_CHECKOUT_URL", ""),
  DATABASE_URL: fromEnv("DATABASE_URL", "PASTE_RENDER_POSTGRES_DATABASE_URL"),
  SESSION_SECRET: fromEnv("SESSION_SECRET", secret(48)),
  PASSWORD_PEPPER: fromEnv("PASSWORD_PEPPER", secret(32)),
  OPENAI_API_KEY: fromEnv("OPENAI_API_KEY", "PASTE_OPENAI_API_KEY"),
  OPENAI_MODEL: fromEnv("OPENAI_MODEL", "gpt-5.4-mini"),
  AI_PROVIDER: "webhook",
  AI_WEBHOOK_URL: `${providerBase}/ai/responses`,
  AI_PROVIDER_API_KEY: fromEnv("AI_PROVIDER_API_KEY", secret(32)),
  VOICE_STT_PROVIDER: fromEnv("VOICE_STT_PROVIDER", "openai"),
  VOICE_TTS_PROVIDER: fromEnv("VOICE_TTS_PROVIDER", "openai"),
  OPENAI_TRANSCRIBE_MODEL: fromEnv("OPENAI_TRANSCRIBE_MODEL", "gpt-4o-mini-transcribe"),
  OPENAI_TTS_MODEL: fromEnv("OPENAI_TTS_MODEL", "gpt-4o-mini-tts"),
  OPENAI_TTS_VOICE: fromEnv("OPENAI_TTS_VOICE", "coral"),
  OPENAI_TTS_INSTRUCTIONS: fromEnv("OPENAI_TTS_INSTRUCTIONS", "Speak warmly and naturally, like a calm coach guiding a non-technical rural user. Use conversational pacing and avoid a robotic announcer tone."),
  VOICE_STT_WEBHOOK_URL: `${providerBase}/voice/transcribe`,
  VOICE_TTS_WEBHOOK_URL: `${providerBase}/voice/speak`,
  VOICE_PROVIDER_API_KEY: fromEnv("VOICE_PROVIDER_API_KEY", secret(32)),
  PHONE_PROVIDER: fromEnv("PHONE_PROVIDER", "twilio"),
  PUBLIC_BASE_URL: fromEnv("PUBLIC_BASE_URL", "https://YOUR-AGRINEXUS-PLATFORM.onrender.com"),
  TWILIO_ACCOUNT_SID: fromEnv("TWILIO_ACCOUNT_SID", "PASTE_TWILIO_ACCOUNT_SID"),
  TWILIO_AUTH_TOKEN: fromEnv("TWILIO_AUTH_TOKEN", "PASTE_TWILIO_AUTH_TOKEN"),
  TWILIO_PHONE_NUMBER: fromEnv("TWILIO_PHONE_NUMBER", "PASTE_TWILIO_PHONE_NUMBER"),
  TWILIO_GATHER_LANGUAGE: fromEnv("TWILIO_GATHER_LANGUAGE", ""),
  TWILIO_TTS_VOICE: fromEnv("TWILIO_TTS_VOICE", "alice"),
  TRANSLATION_PROVIDER: "webhook",
  TRANSLATION_WEBHOOK_URL: `${providerBase}/translate`,
  TRANSLATION_PROVIDER_API_KEY: fromEnv("TRANSLATION_PROVIDER_API_KEY", secret(32)),
  MAP_TILE_PROVIDER: "openstreetmap",
  MAP_TILE_URL: mapTileUrl,
  LEARNING_COURSE_PROVIDER: "webhook",
  LEARNING_COURSE_WEBHOOK_URL: `${providerBase}/learning/courses`,
  LEARNING_CERTIFICATE_PROVIDER: "webhook",
  LEARNING_CERTIFICATE_WEBHOOK_URL: `${providerBase}/learning/certificates`,
  LEARNING_PROVIDER_API_KEY: fromEnv("LEARNING_PROVIDER_API_KEY", secret(32)),
  WORKFORCE_JOB_PROVIDER: "webhook",
  WORKFORCE_CALENDAR_PROVIDER: "webhook",
  WORKFORCE_NOTIFICATION_PROVIDER: "webhook",
  WORKFORCE_HRIS_PROVIDER: "webhook",
  WORKFORCE_SHIFT_PROVIDER: "webhook",
  WORKFORCE_JOB_WEBHOOK_URL: `${providerBase}/workforce/jobs`,
  WORKFORCE_CALENDAR_WEBHOOK_URL: `${providerBase}/workforce/calendar`,
  WORKFORCE_NOTIFICATION_WEBHOOK_URL: `${providerBase}/workforce/notifications`,
  WORKFORCE_HRIS_WEBHOOK_URL: `${providerBase}/workforce/hris`,
  WORKFORCE_SHIFT_WEBHOOK_URL: `${providerBase}/workforce/shifts`,
  WORKFORCE_PROVIDER_API_KEY: fromEnv("WORKFORCE_PROVIDER_API_KEY", secret(32)),
  HEALTH_TELEHEALTH_PROVIDER: "webhook",
  HEALTH_NOTIFICATION_PROVIDER: "webhook",
  HEALTH_EHR_PROVIDER: "webhook",
  HEALTH_TELEHEALTH_WEBHOOK_URL: `${providerBase}/health/telehealth`,
  HEALTH_NOTIFICATION_WEBHOOK_URL: `${providerBase}/health/notifications`,
  HEALTH_EHR_WEBHOOK_URL: `${providerBase}/health/ehr`,
  HEALTH_PROVIDER_API_KEY: fromEnv("HEALTH_PROVIDER_API_KEY", secret(32)),
  TRADE_PAYMENT_PROVIDER: "webhook",
  TRADE_LOGISTICS_PROVIDER: "webhook",
  TRADE_MARKET_PROVIDER: "webhook",
  TRADE_PAYMENT_WEBHOOK_URL: `${providerBase}/trade/payments`,
  TRADE_LOGISTICS_WEBHOOK_URL: `${providerBase}/trade/logistics`,
  TRADE_MARKET_WEBHOOK_URL: `${providerBase}/trade/market`,
  TRADE_PROVIDER_API_KEY: fromEnv("TRADE_PROVIDER_API_KEY", secret(32)),
  DRONE_PROVIDER: "webhook",
  DRONE_WEBHOOK_URL: `${providerBase}/field/drones`,
  DRONE_PROVIDER_API_KEY: fromEnv("DRONE_PROVIDER_API_KEY", secret(32))
};

const providerOnly = {
  NODE_ENV: "production",
  HOST: "0.0.0.0",
  PROVIDER_ENGINE_HOST: "0.0.0.0",
  PROVIDER_ENGINE_PORT: "10000",
  AI_PROVIDER_API_KEY: shared.AI_PROVIDER_API_KEY,
  LEARNING_PROVIDER_API_KEY: shared.LEARNING_PROVIDER_API_KEY,
  WORKFORCE_PROVIDER_API_KEY: shared.WORKFORCE_PROVIDER_API_KEY,
  HEALTH_PROVIDER_API_KEY: shared.HEALTH_PROVIDER_API_KEY,
  TRADE_PROVIDER_API_KEY: shared.TRADE_PROVIDER_API_KEY,
  DRONE_PROVIDER_API_KEY: shared.DRONE_PROVIDER_API_KEY,
  VOICE_PROVIDER_API_KEY: shared.VOICE_PROVIDER_API_KEY,
  TRANSLATION_PROVIDER_API_KEY: shared.TRANSLATION_PROVIDER_API_KEY,
  AUTH_PROVIDER_API_KEY: shared.AUTH_PROVIDER_API_KEY,
  COMMUNICATION_PROVIDER_API_KEY: shared.COMMUNICATION_PROVIDER_API_KEY,
  BILLING_PROVIDER_API_KEY: shared.BILLING_PROVIDER_API_KEY
};

function block(title, values) {
  return [
    `# ${title}`,
    ...Object.entries(values).map(([key, value]) => `${key}=${value}`)
  ].join("\n");
}

const output = [
  "# AgriNexus Render Environment Variables",
  "# Do not commit this file. Paste each block into the matching Render service.",
  "# Replace DATABASE_URL and OPENAI_API_KEY before production use.",
  "",
  block("agrinexus-platform", shared),
  "",
  block("agrinexus-provider-engines", providerOnly),
  ""
].join("\n");

const outputPath = path.join(__dirname, "..", ".env.render.generated");
fs.writeFileSync(outputPath, output);
console.log(`Generated ${outputPath}`);
