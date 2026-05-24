const path = require("path");

function readConfig(env = process.env) {
  return {
    app: {
      name: env.APP_NAME || "AgriNexus",
      nodeEnv: env.NODE_ENV || "development",
      port: Number(env.PORT || 4173)
    },
    database: {
      url: env.DATABASE_URL || "",
      ssl: env.DATABASE_SSL === "true",
      migrationsDir: env.MIGRATIONS_DIR || path.join(__dirname, "..", "migrations")
    },
    auth: {
      sessionSecret: env.SESSION_SECRET || "dev-only-session-secret-change-me",
      sessionTtlMinutes: Number(env.SESSION_TTL_MINUTES || 60 * 12),
      passwordPepper: env.PASSWORD_PEPPER || ""
    },
    ai: {
      openaiApiKey: env.OPENAI_API_KEY || "",
      model: env.OPENAI_MODEL || "gpt-5.4-mini"
    },
    maps: {
      tileProvider: env.MAP_TILE_PROVIDER || "openstreetmap",
      mapboxToken: env.MAPBOX_TOKEN || ""
    },
    workforce: {
      calendarProvider: env.WORKFORCE_CALENDAR_PROVIDER || "sandbox",
      notificationProvider: env.WORKFORCE_NOTIFICATION_PROVIDER || "sandbox",
      hrisProvider: env.WORKFORCE_HRIS_PROVIDER || "sandbox",
      shiftProvider: env.WORKFORCE_SHIFT_PROVIDER || "sandbox",
      calendarWebhookUrl: env.WORKFORCE_CALENDAR_WEBHOOK_URL || "",
      notificationWebhookUrl: env.WORKFORCE_NOTIFICATION_WEBHOOK_URL || "",
      hrisWebhookUrl: env.WORKFORCE_HRIS_WEBHOOK_URL || "",
      shiftWebhookUrl: env.WORKFORCE_SHIFT_WEBHOOK_URL || "",
      providerApiKey: env.WORKFORCE_PROVIDER_API_KEY || ""
    },
    health: {
      telehealthProvider: env.HEALTH_TELEHEALTH_PROVIDER || "sandbox",
      notificationProvider: env.HEALTH_NOTIFICATION_PROVIDER || "sandbox",
      ehrProvider: env.HEALTH_EHR_PROVIDER || "sandbox",
      aiProvider: env.HEALTH_AI_PROVIDER || "sandbox",
      telehealthWebhookUrl: env.HEALTH_TELEHEALTH_WEBHOOK_URL || "",
      notificationWebhookUrl: env.HEALTH_NOTIFICATION_WEBHOOK_URL || "",
      ehrWebhookUrl: env.HEALTH_EHR_WEBHOOK_URL || "",
      aiWebhookUrl: env.HEALTH_AI_WEBHOOK_URL || "",
      providerApiKey: env.HEALTH_PROVIDER_API_KEY || ""
    }
  };
}

function validateConfig(config) {
  const warnings = [];
  if (!config.database.url) warnings.push("DATABASE_URL is not set; database runtime will run in planning/offline mode.");
  if (config.auth.sessionSecret.includes("dev-only")) warnings.push("SESSION_SECRET uses the development default.");
  if (!config.ai.openaiApiKey) warnings.push("OPENAI_API_KEY is not set; AI provider will use offline fallback.");
  return warnings;
}

module.exports = { readConfig, validateConfig };
