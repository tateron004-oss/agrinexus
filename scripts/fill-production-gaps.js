const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const envPath = path.join(root, ".env.production.gapfill");

function secret(bytes = 32) {
  return crypto.randomBytes(bytes).toString("base64url");
}

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  return Object.fromEntries(
    fs.readFileSync(filePath, "utf8")
      .split(/\r?\n/)
      .map(line => line.trim())
      .filter(line => line && !line.startsWith("#") && line.includes("="))
      .map(line => {
        const index = line.indexOf("=");
        return [line.slice(0, index), line.slice(index + 1)];
      })
  );
}

const existing = { ...loadEnvFile(path.join(root, ".env")), ...process.env };
const providerBase = (existing.PROVIDER_BASE_URL || "https://YOUR-AGRINEXUS-PROVIDER-ENGINES.onrender.com").replace(/\/$/, "");

const values = {
  NODE_ENV: "production",
  HOST: "0.0.0.0",
  PORT: "10000",
  AGRINEXUS_STATE_STORE: "postgres",
  AGRINEXUS_REQUIRE_LIVE_SERVICES: "true",
  AGRINEXUS_AUTOMATION_SCHEDULES: existing.AGRINEXUS_AUTOMATION_SCHEDULES || "disabled",
  AGRINEXUS_EVENT_TRIGGERS: existing.AGRINEXUS_EVENT_TRIGGERS || "disabled",
  DATABASE_URL: existing.DATABASE_URL || "PASTE_RENDER_POSTGRES_DATABASE_URL",
  DATABASE_SSL: existing.DATABASE_SSL || "true",
  SESSION_SECRET: existing.SESSION_SECRET && !existing.SESSION_SECRET.includes("replace-with") ? existing.SESSION_SECRET : secret(48),
  PASSWORD_PEPPER: existing.PASSWORD_PEPPER && !existing.PASSWORD_PEPPER.includes("replace-with") ? existing.PASSWORD_PEPPER : secret(32),
  OPENAI_API_KEY: existing.OPENAI_API_KEY || "PASTE_OPENAI_API_KEY",
  OPENAI_MODEL: existing.OPENAI_MODEL || "gpt-5.4-mini",
  AI_PROVIDER: "webhook",
  AI_WEBHOOK_URL: existing.AI_WEBHOOK_URL || `${providerBase}/ai/responses`,
  AI_PROVIDER_API_KEY: existing.AI_PROVIDER_API_KEY || secret(32),
  MAP_TILE_PROVIDER: "openstreetmap",
  MAP_TILE_URL: existing.MAP_TILE_URL || "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  VOICE_STT_PROVIDER: existing.VOICE_STT_PROVIDER || "openai",
  VOICE_TTS_PROVIDER: existing.VOICE_TTS_PROVIDER || "openai",
  OPENAI_TRANSCRIBE_MODEL: existing.OPENAI_TRANSCRIBE_MODEL || "gpt-4o-mini-transcribe",
  OPENAI_TTS_MODEL: existing.OPENAI_TTS_MODEL || "gpt-4o-mini-tts",
  OPENAI_TTS_VOICE: existing.OPENAI_TTS_VOICE || "coral",
  OPENAI_TTS_INSTRUCTIONS: existing.OPENAI_TTS_INSTRUCTIONS || "Speak as Nexus, a warm and capable AI assistant. Sound natural, conversational, and reassuring. Use clear everyday language, a steady medium pace, short sentences, and light warmth. Avoid sounding slow, robotic, dramatic, like a radio announcer, or like a cartoon character.",
  VOICE_REALTIME_PROVIDER: existing.VOICE_REALTIME_PROVIDER || "openai",
  OPENAI_REALTIME_MODEL: existing.OPENAI_REALTIME_MODEL || "gpt-realtime-2",
  OPENAI_REALTIME_VOICE: existing.OPENAI_REALTIME_VOICE || "marin",
  OPENAI_REALTIME_TRANSCRIBE_MODEL: existing.OPENAI_REALTIME_TRANSCRIBE_MODEL || "gpt-realtime-whisper",
  OPENAI_REALTIME_TRANSLATION_MODEL: existing.OPENAI_REALTIME_TRANSLATION_MODEL || "gpt-realtime-translate",
  VOICE_STT_WEBHOOK_URL: existing.VOICE_STT_WEBHOOK_URL || `${providerBase}/voice/transcribe`,
  VOICE_TTS_WEBHOOK_URL: existing.VOICE_TTS_WEBHOOK_URL || `${providerBase}/voice/speak`,
  VOICE_PROVIDER_API_KEY: existing.VOICE_PROVIDER_API_KEY || secret(32),
  PHONE_PROVIDER: existing.PHONE_PROVIDER || "twilio",
  PUBLIC_BASE_URL: existing.PUBLIC_BASE_URL || "https://YOUR-AGRINEXUS-PLATFORM.onrender.com",
  TWILIO_ACCOUNT_SID: existing.TWILIO_ACCOUNT_SID || "PASTE_TWILIO_ACCOUNT_SID",
  TWILIO_AUTH_TOKEN: existing.TWILIO_AUTH_TOKEN || "PASTE_TWILIO_AUTH_TOKEN",
  TWILIO_PHONE_NUMBER: existing.TWILIO_PHONE_NUMBER || "PASTE_TWILIO_PHONE_NUMBER",
  TWILIO_GATHER_LANGUAGE: existing.TWILIO_GATHER_LANGUAGE || "",
  TWILIO_TTS_VOICE: existing.TWILIO_TTS_VOICE || "alice",
  TRANSLATION_PROVIDER: "webhook",
  TRANSLATION_WEBHOOK_URL: existing.TRANSLATION_WEBHOOK_URL || `${providerBase}/translate`,
  TRANSLATION_PROVIDER_API_KEY: existing.TRANSLATION_PROVIDER_API_KEY || secret(32),
  AUTH_PROVIDER: "webhook",
  PASSWORD_RESET_PROVIDER: "webhook",
  AUTH_WEBHOOK_URL: existing.AUTH_WEBHOOK_URL || `${providerBase}/auth/users`,
  PASSWORD_RESET_WEBHOOK_URL: existing.PASSWORD_RESET_WEBHOOK_URL || `${providerBase}/auth/password-reset`,
  AUTH_PROVIDER_API_KEY: existing.AUTH_PROVIDER_API_KEY || secret(32),
  EMAIL_PROVIDER: "webhook",
  SMS_PROVIDER: "webhook",
  WHATSAPP_PROVIDER: "webhook",
  EMAIL_WEBHOOK_URL: existing.EMAIL_WEBHOOK_URL || `${providerBase}/communications/email`,
  SMS_WEBHOOK_URL: existing.SMS_WEBHOOK_URL || `${providerBase}/communications/sms`,
  WHATSAPP_WEBHOOK_URL: existing.WHATSAPP_WEBHOOK_URL || `${providerBase}/communications/whatsapp`,
  COMMUNICATION_PROVIDER_API_KEY: existing.COMMUNICATION_PROVIDER_API_KEY || secret(32),
  BILLING_PROVIDER: "webhook",
  BILLING_WEBHOOK_URL: existing.BILLING_WEBHOOK_URL || `${providerBase}/billing/subscriptions`,
  BILLING_PROVIDER_API_KEY: existing.BILLING_PROVIDER_API_KEY || secret(32),
  BILLING_PRICE_ID: existing.BILLING_PRICE_ID || "PASTE_BILLING_PRICE_ID",
  BILLING_CHECKOUT_URL: existing.BILLING_CHECKOUT_URL || "",
  LEARNING_COURSE_PROVIDER: "webhook",
  LEARNING_CERTIFICATE_PROVIDER: "webhook",
  LEARNING_COURSE_WEBHOOK_URL: existing.LEARNING_COURSE_WEBHOOK_URL || `${providerBase}/learning/courses`,
  LEARNING_CERTIFICATE_WEBHOOK_URL: existing.LEARNING_CERTIFICATE_WEBHOOK_URL || `${providerBase}/learning/certificates`,
  LEARNING_PROVIDER_API_KEY: existing.LEARNING_PROVIDER_API_KEY || secret(32),
  WORKFORCE_JOB_PROVIDER: "webhook",
  WORKFORCE_CALENDAR_PROVIDER: "webhook",
  WORKFORCE_NOTIFICATION_PROVIDER: "webhook",
  WORKFORCE_HRIS_PROVIDER: "webhook",
  WORKFORCE_SHIFT_PROVIDER: "webhook",
  WORKFORCE_JOB_WEBHOOK_URL: existing.WORKFORCE_JOB_WEBHOOK_URL || `${providerBase}/workforce/jobs`,
  WORKFORCE_CALENDAR_WEBHOOK_URL: existing.WORKFORCE_CALENDAR_WEBHOOK_URL || `${providerBase}/workforce/calendar`,
  WORKFORCE_NOTIFICATION_WEBHOOK_URL: existing.WORKFORCE_NOTIFICATION_WEBHOOK_URL || `${providerBase}/workforce/notifications`,
  WORKFORCE_HRIS_WEBHOOK_URL: existing.WORKFORCE_HRIS_WEBHOOK_URL || `${providerBase}/workforce/hris`,
  WORKFORCE_SHIFT_WEBHOOK_URL: existing.WORKFORCE_SHIFT_WEBHOOK_URL || `${providerBase}/workforce/shifts`,
  WORKFORCE_PROVIDER_API_KEY: existing.WORKFORCE_PROVIDER_API_KEY || secret(32),
  HEALTH_TELEHEALTH_PROVIDER: "webhook",
  HEALTH_NOTIFICATION_PROVIDER: "webhook",
  HEALTH_EHR_PROVIDER: "webhook",
  HEALTH_TELEHEALTH_WEBHOOK_URL: existing.HEALTH_TELEHEALTH_WEBHOOK_URL || `${providerBase}/health/telehealth`,
  HEALTH_NOTIFICATION_WEBHOOK_URL: existing.HEALTH_NOTIFICATION_WEBHOOK_URL || `${providerBase}/health/notifications`,
  HEALTH_EHR_WEBHOOK_URL: existing.HEALTH_EHR_WEBHOOK_URL || `${providerBase}/health/ehr`,
  HEALTH_PROVIDER_API_KEY: existing.HEALTH_PROVIDER_API_KEY || secret(32),
  TRADE_PAYMENT_PROVIDER: "webhook",
  TRADE_LOGISTICS_PROVIDER: "webhook",
  TRADE_MARKET_PROVIDER: "webhook",
  TRADE_PAYMENT_WEBHOOK_URL: existing.TRADE_PAYMENT_WEBHOOK_URL || `${providerBase}/trade/payments`,
  TRADE_LOGISTICS_WEBHOOK_URL: existing.TRADE_LOGISTICS_WEBHOOK_URL || `${providerBase}/trade/logistics`,
  TRADE_MARKET_WEBHOOK_URL: existing.TRADE_MARKET_WEBHOOK_URL || `${providerBase}/trade/market`,
  TRADE_PROVIDER_API_KEY: existing.TRADE_PROVIDER_API_KEY || secret(32),
  DRONE_PROVIDER: "webhook",
  DRONE_WEBHOOK_URL: existing.DRONE_WEBHOOK_URL || `${providerBase}/field/drones`,
  DRONE_PROVIDER_API_KEY: existing.DRONE_PROVIDER_API_KEY || secret(32)
};

const output = [
  "# Generated by scripts/fill-production-gaps.js",
  "# Paste into Render, then replace PASTE_* and YOUR-AGRINEXUS-PROVIDER-ENGINES values.",
  ...Object.entries(values).map(([key, value]) => `${key}=${value}`)
].join("\n") + "\n";

fs.writeFileSync(envPath, output);

const unresolved = Object.values(values).filter(value => String(value).includes("PASTE_") || String(value).includes("YOUR-AGRINEXUS-PROVIDER-ENGINES")).length;
console.log(`Generated ${envPath}`);
console.log(`Unresolved user-owned values: ${unresolved}`);
console.log("Replace unresolved values in Render before production launch.");
