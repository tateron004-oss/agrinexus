const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const index = trimmed.indexOf("=");
    if (index === -1) continue;
    const key = trimmed.slice(0, index).trim();
    const value = trimmed.slice(index + 1).trim();
    if (key && process.env[key] === undefined) process.env[key] = value;
  }
}

loadEnvFile(path.join(__dirname, ".env"));

const PORT = Number(process.env.PORT || 4173);
const IS_HOSTED = process.env.NODE_ENV === "production" || Boolean(process.env.RENDER || process.env.RENDER_SERVICE_ID || process.env.RENDER_EXTERNAL_URL);
const HOST = process.env.HOST || (IS_HOSTED ? "0.0.0.0" : "127.0.0.1");
const AI_MODEL = process.env.OPENAI_MODEL || "gpt-5.4-mini";
const ROOT = __dirname;
const DATA_DIR = process.env.AGRINEXUS_DATA_DIR || ROOT;
const DB_PATH = process.env.AGRINEXUS_DB_PATH || path.join(DATA_DIR, "db.json");
const PUBLIC = path.join(ROOT, "public");
const REQUIRE_LIVE_SERVICES = process.env.AGRINEXUS_REQUIRE_LIVE_SERVICES === "true";
const STATE_STORE = process.env.AGRINEXUS_STATE_STORE || "json";
const sessions = new Map();
const rateBuckets = new Map();
const COUNTRY_LANGUAGE = {
  nigeria: "en",
  kenya: "sw",
  egypt: "ar",
  drc: "fr"
};
const PROVIDER_CONFIG = {
  "learning-courses": { modeEnv: "LEARNING_COURSE_PROVIDER", credentialEnvs: ["LEARNING_COURSE_WEBHOOK_URL", "LEARNING_PROVIDER_API_KEY"] },
  "learning-certificates": { modeEnv: "LEARNING_CERTIFICATE_PROVIDER", credentialEnvs: ["LEARNING_CERTIFICATE_WEBHOOK_URL", "LEARNING_PROVIDER_API_KEY"] },
  "workforce-jobs": { modeEnv: "WORKFORCE_JOB_PROVIDER", credentialEnvs: ["WORKFORCE_JOB_WEBHOOK_URL", "WORKFORCE_PROVIDER_API_KEY"] },
  "workforce-calendar": { modeEnv: "WORKFORCE_CALENDAR_PROVIDER", credentialEnvs: ["WORKFORCE_CALENDAR_WEBHOOK_URL", "WORKFORCE_PROVIDER_API_KEY"] },
  "workforce-notifications": { modeEnv: "WORKFORCE_NOTIFICATION_PROVIDER", credentialEnvs: ["WORKFORCE_NOTIFICATION_WEBHOOK_URL", "WORKFORCE_PROVIDER_API_KEY"] },
  "workforce-hris": { modeEnv: "WORKFORCE_HRIS_PROVIDER", credentialEnvs: ["WORKFORCE_HRIS_WEBHOOK_URL", "WORKFORCE_PROVIDER_API_KEY"] },
  "workforce-shifts": { modeEnv: "WORKFORCE_SHIFT_PROVIDER", credentialEnvs: ["WORKFORCE_SHIFT_WEBHOOK_URL", "WORKFORCE_PROVIDER_API_KEY"] },
  "health-telehealth": { modeEnv: "HEALTH_TELEHEALTH_PROVIDER", credentialEnvs: ["HEALTH_TELEHEALTH_WEBHOOK_URL", "HEALTH_PROVIDER_API_KEY"] },
  "health-ehr": { modeEnv: "HEALTH_EHR_PROVIDER", credentialEnvs: ["HEALTH_EHR_WEBHOOK_URL", "HEALTH_PROVIDER_API_KEY"] },
  "health-notifications": { modeEnv: "HEALTH_NOTIFICATION_PROVIDER", credentialEnvs: ["HEALTH_NOTIFICATION_WEBHOOK_URL", "HEALTH_PROVIDER_API_KEY"] },
  "trade-payments": { modeEnv: "TRADE_PAYMENT_PROVIDER", credentialEnvs: ["TRADE_PAYMENT_WEBHOOK_URL", "TRADE_PROVIDER_API_KEY"] },
  "trade-logistics": { modeEnv: "TRADE_LOGISTICS_PROVIDER", credentialEnvs: ["TRADE_LOGISTICS_WEBHOOK_URL", "TRADE_PROVIDER_API_KEY"] },
  "trade-market": { modeEnv: "TRADE_MARKET_PROVIDER", credentialEnvs: ["TRADE_MARKET_WEBHOOK_URL", "TRADE_PROVIDER_API_KEY"] },
  "field-drones": { modeEnv: "DRONE_PROVIDER", credentialEnvs: ["DRONE_WEBHOOK_URL", "DRONE_PROVIDER_API_KEY"] },
  "voice-stt": { modeEnv: "VOICE_STT_PROVIDER", credentialEnvs: ["VOICE_STT_WEBHOOK_URL", "VOICE_PROVIDER_API_KEY"] },
  "voice-tts": { modeEnv: "VOICE_TTS_PROVIDER", credentialEnvs: ["VOICE_TTS_WEBHOOK_URL", "VOICE_PROVIDER_API_KEY"] },
  "translation": { modeEnv: "TRANSLATION_PROVIDER", credentialEnvs: ["TRANSLATION_WEBHOOK_URL", "TRANSLATION_PROVIDER_API_KEY"] },
  "auth-users": { modeEnv: "AUTH_PROVIDER", credentialEnvs: ["AUTH_WEBHOOK_URL", "AUTH_PROVIDER_API_KEY"] },
  "auth-password-reset": { modeEnv: "PASSWORD_RESET_PROVIDER", credentialEnvs: ["PASSWORD_RESET_WEBHOOK_URL", "AUTH_PROVIDER_API_KEY"] },
  "email-delivery": { modeEnv: "EMAIL_PROVIDER", credentialEnvs: ["EMAIL_WEBHOOK_URL", "COMMUNICATION_PROVIDER_API_KEY"] },
  "sms-delivery": { modeEnv: "SMS_PROVIDER", credentialEnvs: ["SMS_WEBHOOK_URL", "COMMUNICATION_PROVIDER_API_KEY"] },
  "whatsapp-delivery": { modeEnv: "WHATSAPP_PROVIDER", credentialEnvs: ["WHATSAPP_WEBHOOK_URL", "COMMUNICATION_PROVIDER_API_KEY"] },
  "billing-subscriptions": { modeEnv: "BILLING_PROVIDER", credentialEnvs: ["BILLING_WEBHOOK_URL", "BILLING_PROVIDER_API_KEY"] }
};

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webmanifest": "application/manifest+json; charset=utf-8"
};

let pgPool = null;
let pgStateReady = false;

function usingPostgresState() {
  return STATE_STORE === "postgres";
}

function postgresConfig() {
  return {
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : false
  };
}

function getPgPool() {
  if (!pgPool) {
    const { Pool } = require("pg");
    pgPool = new Pool(postgresConfig());
  }
  return pgPool;
}

async function ensurePostgresState() {
  if (pgStateReady) return;
  if (!process.env.DATABASE_URL) throw new Error("AGRINEXUS_STATE_STORE=postgres requires DATABASE_URL.");
  const pool = getPgPool();
  await pool.query(`
    create table if not exists agrinexus_app_state (
      id text primary key,
      state jsonb not null,
      updated_at timestamptz not null default now()
    )
  `);
  const existing = await pool.query("select 1 from agrinexus_app_state where id = $1", ["default"]);
  if (!existing.rowCount) {
    const seed = JSON.parse(fs.readFileSync(path.join(ROOT, "db.json"), "utf8"));
    await pool.query(
      "insert into agrinexus_app_state (id, state) values ($1, $2::jsonb)",
      ["default", JSON.stringify(seed)]
    );
  }
  pgStateReady = true;
}

async function readDb() {
  if (usingPostgresState()) {
    await ensurePostgresState();
    const result = await getPgPool().query("select state from agrinexus_app_state where id = $1", ["default"]);
    return result.rows[0].state;
  }
  ensureRuntimeData();
  return JSON.parse(fs.readFileSync(DB_PATH, "utf8"));
}

async function writeDb(db) {
  if (usingPostgresState()) {
    await ensurePostgresState();
    await getPgPool().query(
      "update agrinexus_app_state set state = $2::jsonb, updated_at = now() where id = $1",
      ["default", JSON.stringify(db)]
    );
    return;
  }
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2) + "\n");
}

function ensureRuntimeData() {
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
  if (!fs.existsSync(DB_PATH)) {
    fs.copyFileSync(path.join(ROOT, "db.json"), DB_PATH);
  }
}

function send(res, status, body, headers = {}) {
  const payload = typeof body === "string" ? body : JSON.stringify(body);
  res.writeHead(status, {
    "content-type": typeof body === "string" ? "text/plain; charset=utf-8" : "application/json; charset=utf-8",
    "x-content-type-options": "nosniff",
    "referrer-policy": "strict-origin-when-cross-origin",
    "permissions-policy": "camera=(), microphone=(self), geolocation=(self)",
    ...headers
  });
  res.end(payload);
}

function rateLimit(req, limit = 180, windowMs = 60_000) {
  const key = `${req.socket.remoteAddress || "local"}:${req.url.split("?")[0]}`;
  const now = Date.now();
  const bucket = rateBuckets.get(key) || { count: 0, resetAt: now + windowMs };
  if (now > bucket.resetAt) {
    bucket.count = 0;
    bucket.resetAt = now + windowMs;
  }
  bucket.count += 1;
  rateBuckets.set(key, bucket);
  return bucket.count <= limit;
}

function parseCookies(req) {
  return Object.fromEntries((req.headers.cookie || "").split(";").filter(Boolean).map(part => {
    const [key, ...rest] = part.trim().split("=");
    return [key, decodeURIComponent(rest.join("="))];
  }));
}

function currentUser(req, db) {
  const sid = parseCookies(req).agrinexus_sid;
  const userId = sid && sessions.get(sid);
  return db.users.find(user => user.id === userId) || null;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", chunk => {
      data += chunk;
      if (data.length > 1_000_000) reject(new Error("Payload too large"));
    });
    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
  });
}

function publicState(db, user) {
  const providers = runtimeProviders(db);
  ensureOperationsProfile(db.profile);
  return {
    user: user && { id: user.id, name: user.name, email: user.email, role: user.role, country: user.country, language: user.language },
    permissions: user ? permissionsForRole(user.role) : {},
    countries: db.countries,
    routes: db.routes,
    courses: db.courses,
    roles: db.roles,
    products: db.products || [],
    providers,
    capabilities: capabilityMatrix(db, providers),
    automation: automationReadiness(db, providers),
    production: productionCompleteness(db, providers),
    admin: adminSnapshot(db, providers),
    profile: db.profile
  };
}

function permissionsForRole(role) {
  const all = ["learning", "workforce", "health", "trade", "map", "ai", "integrations", "admin", "profile", "notifications", "governance"];
  const matrix = {
    Admin: all,
    Coordinator: all,
    Learner: ["learning", "workforce", "ai", "profile"],
    "Health Operator": ["health", "map", "ai", "notifications", "profile"],
    "Trade Operator": ["trade", "map", "ai", "notifications", "profile"]
  };
  const allowed = new Set(matrix[role] || matrix.Coordinator);
  return Object.fromEntries(all.map(item => [item, allowed.has(item)]));
}

function canUse(user, area) {
  return Boolean(permissionsForRole(user.role)[area]);
}

function runtimeProviders(db) {
  return (db.providers || []).map(provider => {
    if (provider.id === "database") {
      const hasDatabaseUrl = Boolean(process.env.DATABASE_URL);
      const hasPg = Boolean(loadOptional("pg"));
      const postgresState = usingPostgresState();
      return {
        ...provider,
        mode: postgresState ? "postgresql-state" : hasDatabaseUrl ? "postgresql-ready" : "json-file",
        status: hasDatabaseUrl && hasPg && postgresState ? "connected" : hasDatabaseUrl && hasPg ? (REQUIRE_LIVE_SERVICES ? "needs-runtime" : "connected") : hasDatabaseUrl ? "needs-runtime" : (REQUIRE_LIVE_SERVICES ? "needs-credentials" : "connected"),
        detail: hasDatabaseUrl && hasPg && postgresState
          ? "PostgreSQL state store active; learning, workforce, health, trade, AI, and agent records persist to DATABASE_URL."
          : hasDatabaseUrl && hasPg
          ? "DATABASE_URL and pg are available; set AGRINEXUS_STATE_STORE=postgres to persist app workflow state in PostgreSQL."
          : hasDatabaseUrl
          ? "DATABASE_URL is set; install pg and run migrations to activate PostgreSQL."
          : (REQUIRE_LIVE_SERVICES ? "Strict live mode requires DATABASE_URL for PostgreSQL." : "Local JSON persistence active; PostgreSQL path ready.")
      };
    }
    if (provider.id === "openai") {
      const hasLocalAi = Boolean(process.env.AI_PROVIDER === "webhook" && process.env.AI_WEBHOOK_URL && process.env.AI_PROVIDER_API_KEY);
      return {
        ...provider,
        mode: process.env.OPENAI_API_KEY ? "openai" : hasLocalAi ? "local-ai-webhook" : "fallback",
        status: process.env.OPENAI_API_KEY || hasLocalAi ? "connected" : (REQUIRE_LIVE_SERVICES ? "needs-credentials" : "ready"),
        detail: process.env.OPENAI_API_KEY
          ? `OpenAI configured with ${AI_MODEL}.`
          : hasLocalAi
          ? "Local AI engine configured through webhook provider."
          : (REQUIRE_LIVE_SERVICES ? "Strict live mode requires OPENAI_API_KEY or a configured AI webhook." : "Uses offline guidance until OPENAI_API_KEY is set.")
      };
    }
    if (provider.id === "maps") {
      const mode = process.env.MAP_TILE_PROVIDER || provider.mode;
      const hasTileUrl = Boolean(process.env.MAP_TILE_URL);
      const liveMap = mode === "custom-tile" && hasTileUrl;
      return {
        ...provider,
        mode,
        status: liveMap ? "connected" : (REQUIRE_LIVE_SERVICES ? "needs-credentials" : provider.status),
        detail: mode === "custom-tile"
          ? (hasTileUrl ? "Custom map tile URL configured." : "Set MAP_TILE_URL for a custom map tile provider.")
          : REQUIRE_LIVE_SERVICES
          ? "Strict live mode requires MAP_TILE_PROVIDER=custom-tile and MAP_TILE_URL."
          : provider.detail
      };
    }
    const config = PROVIDER_CONFIG[provider.id];
    if (config) {
      const mode = process.env[config.modeEnv] || provider.mode;
      const isSandbox = mode === "sandbox";
      const isBrowser = mode === "browser";
      const hasCredential = config.credentialEnvs.every(key => Boolean(process.env[key]));
      return {
        ...provider,
        mode,
        status: isBrowser ? (REQUIRE_LIVE_SERVICES ? "needs-live-provider" : "connected") : isSandbox ? (REQUIRE_LIVE_SERVICES ? "needs-live-provider" : "connected") : (hasCredential ? "connected" : "needs-credentials"),
        detail: isBrowser
          ? (REQUIRE_LIVE_SERVICES ? `Strict live mode requires ${config.modeEnv}=webhook and hosted voice credentials.` : provider.detail)
          : isSandbox
          ? (REQUIRE_LIVE_SERVICES ? `Strict live mode requires ${config.modeEnv} to be set to a live provider and credentials configured.` : provider.detail)
          : (hasCredential ? `${mode} provider configured.` : `Set ${config.credentialEnvs.join(" or ")} to activate ${mode}.`)
      };
    }
    return provider;
  });
}

function integrationStatus(db) {
  const providers = runtimeProviders(db);
  const readiness = productionReadiness(providers);
  const liveGaps = readiness.checks.filter(check => !check.ready);
  return {
    ok: !REQUIRE_LIVE_SERVICES || liveGaps.length === 0,
    service: "agrinexus",
    strictLiveMode: REQUIRE_LIVE_SERVICES,
    mode: process.env.NODE_ENV || "development",
    host: HOST,
    port: PORT,
    dataPath: DB_PATH,
    providers,
    readiness,
    liveGaps,
    requiredEnvironment: {
      database: ["DATABASE_URL", "AGRINEXUS_STATE_STORE=postgres"],
      security: ["SESSION_SECRET", "PASSWORD_PEPPER"],
      ai: ["OPENAI_API_KEY or AI_PROVIDER=webhook + AI_WEBHOOK_URL + AI_PROVIDER_API_KEY"],
      translation: ["TRANSLATION_PROVIDER", "TRANSLATION_WEBHOOK_URL", "TRANSLATION_PROVIDER_API_KEY"],
      learning: ["LEARNING_COURSE_PROVIDER", "LEARNING_CERTIFICATE_PROVIDER", "LEARNING_*_WEBHOOK_URL", "LEARNING_PROVIDER_API_KEY"],
      workforce: ["WORKFORCE_JOB_PROVIDER", "WORKFORCE_CALENDAR_PROVIDER", "WORKFORCE_NOTIFICATION_PROVIDER", "WORKFORCE_HRIS_PROVIDER", "WORKFORCE_SHIFT_PROVIDER", "WORKFORCE_*_WEBHOOK_URL", "WORKFORCE_PROVIDER_API_KEY"],
      healthcare: ["HEALTH_TELEHEALTH_PROVIDER", "HEALTH_EHR_PROVIDER", "HEALTH_NOTIFICATION_PROVIDER", "HEALTH_*_WEBHOOK_URL", "HEALTH_PROVIDER_API_KEY"],
      agritrade: ["TRADE_PAYMENT_PROVIDER", "TRADE_LOGISTICS_PROVIDER", "TRADE_MARKET_PROVIDER", "TRADE_*_WEBHOOK_URL", "TRADE_PROVIDER_API_KEY"],
      drones: ["DRONE_PROVIDER", "DRONE_WEBHOOK_URL", "DRONE_PROVIDER_API_KEY"],
      voice: ["VOICE_STT_PROVIDER", "VOICE_TTS_PROVIDER", "VOICE_STT_WEBHOOK_URL", "VOICE_TTS_WEBHOOK_URL", "VOICE_PROVIDER_API_KEY"],
      auth: ["AUTH_PROVIDER", "AUTH_WEBHOOK_URL", "PASSWORD_RESET_PROVIDER", "PASSWORD_RESET_WEBHOOK_URL", "AUTH_PROVIDER_API_KEY"],
      communications: ["EMAIL_PROVIDER", "EMAIL_WEBHOOK_URL", "SMS_PROVIDER", "SMS_WEBHOOK_URL", "WHATSAPP_PROVIDER", "WHATSAPP_WEBHOOK_URL", "COMMUNICATION_PROVIDER_API_KEY"],
      billing: ["BILLING_PROVIDER", "BILLING_WEBHOOK_URL", "BILLING_PROVIDER_API_KEY", "BILLING_PRICE_ID"],
      maps: ["MAP_TILE_PROVIDER", "MAP_TILE_URL"],
      legal: ["/terms.html", "/privacy.html", "/refund.html"],
      regression: ["npm run production:regression", "npm run production:complete-check"]
    },
    timestamp: new Date().toISOString()
  };
}

function maskEngineValue(value) {
  if (!value) return "";
  const clean = String(value);
  if (clean.length <= 10) return "configured";
  return `${clean.slice(0, 4)}...${clean.slice(-4)}`;
}

function engineCredentialState(keys) {
  return keys.map(key => {
    const value = process.env[key] || "";
    const unresolved = !value || value.includes("PASTE_") || value.includes("YOUR-") || value.includes("replace-with") || value.includes("your-key-here");
    return {
      key,
      ready: !unresolved,
      value: unresolved ? "" : maskEngineValue(value)
    };
  });
}

function liveEngineManifest(db) {
  const providers = runtimeProviders(db);
  const providerById = Object.fromEntries(providers.map(provider => [provider.id, provider]));
  const engines = [
    {
      id: "database",
      name: "Production PostgreSQL",
      purpose: "Persists users, workflows, learning progress, workforce records, telehealth activity, trade activity, and agent memory.",
      providerIds: ["database"],
      credentials: ["DATABASE_URL", "AGRINEXUS_STATE_STORE"],
      userAction: "Create Render PostgreSQL, paste DATABASE_URL, and set AGRINEXUS_STATE_STORE=postgres."
    },
    {
      id: "live-ai",
      name: "Nexus Live AI",
      purpose: "Powers agentic planning, briefings, tutoring, triage support, trade guidance, workforce coaching, and command center reasoning.",
      providerIds: ["openai"],
      credentials: ["OPENAI_API_KEY", "OPENAI_MODEL"],
      userAction: "Create an OpenAI API key and paste it into Render as OPENAI_API_KEY."
    },
    {
      id: "translation",
      name: "Live Multilingual Translation",
      purpose: "Translates dynamic content across modules, not just top navigation labels.",
      providerIds: ["translation"],
      credentials: ["TRANSLATION_PROVIDER", "TRANSLATION_WEBHOOK_URL", "TRANSLATION_PROVIDER_API_KEY"],
      userAction: "Use the provider-engine bridge or replace it with a live translation provider endpoint."
    },
    {
      id: "voice",
      name: "Jarvis-Style Voice",
      purpose: "Speech-to-text and text-to-speech workflows for voice-first command center use.",
      providerIds: ["voice-stt", "voice-tts"],
      credentials: ["VOICE_STT_PROVIDER", "VOICE_TTS_PROVIDER", "VOICE_STT_WEBHOOK_URL", "VOICE_TTS_WEBHOOK_URL", "VOICE_PROVIDER_API_KEY"],
      userAction: "Deploy provider engines or connect a hosted voice provider."
    },
    {
      id: "learning",
      name: "Learning Provider",
      purpose: "Connects course discovery, lesson completion, certificates, and workforce readiness evidence.",
      providerIds: ["learning-courses", "learning-certificates"],
      credentials: ["LEARNING_COURSE_PROVIDER", "LEARNING_CERTIFICATE_PROVIDER", "LEARNING_COURSE_WEBHOOK_URL", "LEARNING_CERTIFICATE_WEBHOOK_URL", "LEARNING_PROVIDER_API_KEY"],
      userAction: "Use provider engines first, then replace with a real LMS/course provider when selected."
    },
    {
      id: "workforce",
      name: "Workforce Network",
      purpose: "Connects jobs, applications, HR records, shift scheduling, calendars, and notifications.",
      providerIds: ["workforce-jobs", "workforce-calendar", "workforce-notifications", "workforce-hris", "workforce-shifts"],
      credentials: ["WORKFORCE_JOB_PROVIDER", "WORKFORCE_CALENDAR_PROVIDER", "WORKFORCE_NOTIFICATION_PROVIDER", "WORKFORCE_HRIS_PROVIDER", "WORKFORCE_SHIFT_PROVIDER", "WORKFORCE_JOB_WEBHOOK_URL", "WORKFORCE_CALENDAR_WEBHOOK_URL", "WORKFORCE_NOTIFICATION_WEBHOOK_URL", "WORKFORCE_HRIS_WEBHOOK_URL", "WORKFORCE_SHIFT_WEBHOOK_URL", "WORKFORCE_PROVIDER_API_KEY"],
      userAction: "Start with provider engines, then connect real job boards, employer systems, calendar, HRIS, or shift tools."
    },
    {
      id: "telehealth",
      name: "Telehealth Network",
      purpose: "Supports intake, accessibility needs, consent, vitals, care plans, referrals, follow-up, EHR sync, and notifications.",
      providerIds: ["health-telehealth", "health-ehr", "health-notifications"],
      credentials: ["HEALTH_TELEHEALTH_PROVIDER", "HEALTH_NOTIFICATION_PROVIDER", "HEALTH_EHR_PROVIDER", "HEALTH_TELEHEALTH_WEBHOOK_URL", "HEALTH_NOTIFICATION_WEBHOOK_URL", "HEALTH_EHR_WEBHOOK_URL", "HEALTH_PROVIDER_API_KEY"],
      userAction: "Use provider engines first, then connect a compliant telehealth/EHR/notification vendor."
    },
    {
      id: "trade-drone",
      name: "Trade, Market, Logistics, and Drone Engines",
      purpose: "Connects payments, logistics, market data, field drone scans, crop intelligence, and route evidence.",
      providerIds: ["trade-payments", "trade-logistics", "trade-market", "field-drones"],
      credentials: ["TRADE_PAYMENT_PROVIDER", "TRADE_LOGISTICS_PROVIDER", "TRADE_MARKET_PROVIDER", "DRONE_PROVIDER", "TRADE_PAYMENT_WEBHOOK_URL", "TRADE_LOGISTICS_WEBHOOK_URL", "TRADE_MARKET_WEBHOOK_URL", "DRONE_WEBHOOK_URL", "TRADE_PROVIDER_API_KEY", "DRONE_PROVIDER_API_KEY"],
      userAction: "Deploy provider engines, then replace with real payment, logistics, market, and drone vendors."
    },
    {
      id: "maps",
      name: "Live Map Provider",
      purpose: "Shows field, country, route, drone, and operational map context.",
      providerIds: ["maps"],
      credentials: ["MAP_TILE_PROVIDER", "MAP_TILE_URL"],
      userAction: "Use OpenStreetMap tiles for launch or replace MAP_TILE_URL with Mapbox/Google/provider tiles."
    },
    {
      id: "communications",
      name: "Email, SMS, WhatsApp, and Phone Notifications",
      purpose: "Sends reminders, telehealth updates, workforce notices, onboarding messages, and workflow alerts.",
      providerIds: ["email-delivery", "sms-delivery", "whatsapp-delivery"],
      credentials: ["EMAIL_PROVIDER", "SMS_PROVIDER", "WHATSAPP_PROVIDER", "EMAIL_WEBHOOK_URL", "SMS_WEBHOOK_URL", "WHATSAPP_WEBHOOK_URL", "COMMUNICATION_PROVIDER_API_KEY"],
      userAction: "Use provider engines first, then connect SendGrid/Mailgun/Twilio/WhatsApp Business or your chosen vendor."
    },
    {
      id: "auth-billing",
      name: "Subscriber Auth and Billing",
      purpose: "Supports users, password reset, subscription checkout, and client management.",
      providerIds: ["auth-users", "auth-password-reset", "billing-subscriptions"],
      credentials: ["AUTH_PROVIDER", "PASSWORD_RESET_PROVIDER", "AUTH_WEBHOOK_URL", "PASSWORD_RESET_WEBHOOK_URL", "AUTH_PROVIDER_API_KEY", "BILLING_PROVIDER", "BILLING_WEBHOOK_URL", "BILLING_PROVIDER_API_KEY", "BILLING_PRICE_ID"],
      userAction: "Deploy provider engines, then connect real auth/password reset and Stripe billing."
    }
  ].map(engine => {
    const providerStates = engine.providerIds.map(id => providerById[id]).filter(Boolean);
    const credentials = engineCredentialState(engine.credentials);
    const readyProviders = providerStates.filter(provider => provider.status === "connected").length;
    const readyCredentials = credentials.filter(item => item.ready).length;
    const ready = readyProviders === providerStates.length && readyCredentials === credentials.length;
    return {
      ...engine,
      status: ready ? "connected" : readyProviders || readyCredentials ? "partially-connected" : "needs-setup",
      ready,
      providerSummary: `${readyProviders}/${providerStates.length}`,
      credentialSummary: `${readyCredentials}/${credentials.length}`,
      providers: providerStates.map(provider => ({
        id: provider.id,
        name: provider.name,
        mode: provider.mode,
        status: provider.status,
        detail: provider.detail
      })),
      credentials,
      missing: credentials.filter(item => !item.ready).map(item => item.key)
    };
  });
  const readyCount = engines.filter(engine => engine.ready).length;
  return {
    status: readyCount === engines.length ? "all-engines-connected" : "engines-need-credentials",
    readyCount,
    total: engines.length,
    strictLiveMode: REQUIRE_LIVE_SERVICES,
    engines,
    nextSteps: engines.filter(engine => !engine.ready).map(engine => ({
      engine: engine.name,
      missing: engine.missing,
      action: engine.userAction
    })),
    timestamp: new Date().toISOString()
  };
}

function productionCompleteness(db, providers = runtimeProviders(db)) {
  const providerReady = id => providers.find(item => item.id === id)?.status === "connected";
  const readiness = productionReadiness(providers);
  const legalFiles = ["terms.html", "privacy.html", "refund.html"].map(file => fs.existsSync(path.join(PUBLIC, file)));
  const items = [
    { id: "live-provider-credentials", title: "Live provider credentials", ready: providers.filter(item => item.status === "connected").length >= providers.length - 1, detail: "OpenAI, translation, voice, maps, telehealth, workforce, learning, trade, drone, communications, billing, and auth providers are tracked." },
    { id: "production-database", title: "Production PostgreSQL database", ready: Boolean(process.env.DATABASE_URL && usingPostgresState() && loadOptional("pg")), detail: "DATABASE_URL plus AGRINEXUS_STATE_STORE=postgres activates hosted persistence." },
    { id: "real-user-accounts", title: "Real user accounts", ready: providerReady("auth-users") && providerReady("auth-password-reset") && Boolean(process.env.SESSION_SECRET), detail: "Login, role permissions, provider-backed auth, and password reset wiring are present." },
    { id: "subscription-billing", title: "Payment/subscription system", ready: providerReady("billing-subscriptions") && Boolean(process.env.BILLING_PRICE_ID), detail: "Billing checkout route and provider event trail are wired; live billing needs provider credentials and price id." },
    { id: "production-security", title: "Production security", ready: Boolean(process.env.SESSION_SECRET && process.env.PASSWORD_PEPPER && process.env.AGRINEXUS_REQUIRE_LIVE_SERVICES === "true"), detail: "Security headers, payload limits, rate limiting, strict live mode, secrets, and audit events are expected in hosting." },
    { id: "clinical-legal-guardrails", title: "Clinical/legal guardrails", ready: legalFiles.every(Boolean), detail: "Terms, Privacy, Refund, telehealth consent, referral, follow-up, and human review guardrails are present." },
    { id: "browser-regression", title: "End-to-end browser regression", ready: fs.existsSync(path.join(ROOT, "scripts", "production-clickthrough.js")), detail: "Production click-through audit covers key pages, buttons, static assets, and workflow endpoints." },
    { id: "hosted-deployment", title: "Hosted deployment hardening", ready: fs.existsSync(path.join(ROOT, "render.yaml")) && process.env.NODE_ENV === "production", detail: "Render blueprint, health checks, environment variables, provider engines, and runbook are present." },
    { id: "real-provider-data", title: "Real provider data", ready: ["learning-courses", "workforce-jobs", "health-telehealth", "trade-market", "field-drones", "maps"].every(providerReady), detail: "Live courses, jobs, telehealth, markets, drone data, and maps activate when provider endpoints are configured." },
    { id: "product-polish", title: "Investor/product polish", ready: Boolean((db.profile.demoMoments || []).length && (db.profile.agentCommands || []).length >= 0), detail: "Onboarding, command center, admin readiness, status page, demo flows, and training assets are available." }
  ];
  const readyCount = items.filter(item => item.ready).length;
  return {
    status: readyCount === items.length ? "production-maximized" : "production-gates-visible",
    readyCount,
    total: items.length,
    readinessStatus: readiness.status,
    items,
    nextSteps: items.filter(item => !item.ready).map(item => `${item.title}: ${item.detail}`)
  };
}

function productionReadiness(providers) {
  const providerReady = (id, label) => {
    const provider = providers.find(item => item.id === id);
    const localModes = ["sandbox", "fallback", "json-file", "tile-provider", "browser", "local-dictionary", "local-session", "local-disabled"];
    const ready = Boolean(provider && provider.status === "connected" && !localModes.includes(provider.mode));
    return {
      id,
      label,
      ready,
      detail: provider
        ? `${provider.name}: ${ready ? "Ready" : provider.detail}`
        : `${label} provider is missing.`
    };
  };
  const moduleReadiness = [
    {
      module: "Core",
      checks: [
        {
          id: "database-url",
          label: "DATABASE_URL",
          ready: Boolean(process.env.DATABASE_URL),
          detail: process.env.DATABASE_URL ? "Configured" : "Set DATABASE_URL for PostgreSQL."
        },
        {
          id: "postgres-state-store",
          label: "PostgreSQL workflow state",
          ready: usingPostgresState() && Boolean(process.env.DATABASE_URL),
          detail: usingPostgresState() ? "AGRINEXUS_STATE_STORE=postgres is active." : "Set AGRINEXUS_STATE_STORE=postgres so learning and workforce workflow state persists to PostgreSQL."
        },
        {
          id: "pg-package",
          label: "pg package",
          ready: Boolean(loadOptional("pg")),
          detail: loadOptional("pg") ? "Installed" : "Run npm install when npm is available."
        },
        {
          id: "session-secret",
          label: "SESSION_SECRET",
          ready: Boolean(process.env.SESSION_SECRET && !process.env.SESSION_SECRET.includes("dev-only")),
          detail: process.env.SESSION_SECRET ? "Configured" : "Set SESSION_SECRET for production auth."
        }
      ]
    },
    {
      module: "Learning",
      checks: [
        providerReady("learning-courses", "Course catalog provider"),
        providerReady("learning-certificates", "Certificate provider")
      ]
    },
    {
      module: "Workforce",
      checks: [
        providerReady("workforce-jobs", "Live job network provider"),
        providerReady("workforce-calendar", "Calendar provider"),
        providerReady("workforce-notifications", "Notification provider"),
        providerReady("workforce-hris", "HRIS provider"),
        providerReady("workforce-shifts", "Shift scheduling provider")
      ]
    },
    {
      module: "Healthcare",
      checks: [
        providerReady("health-telehealth", "Telehealth provider"),
        providerReady("health-ehr", "EHR provider"),
        providerReady("health-notifications", "Notification provider")
      ]
    },
    {
      module: "AgriTrade",
      checks: [
        providerReady("trade-payments", "Payment provider"),
        providerReady("trade-logistics", "Logistics provider"),
        providerReady("trade-market", "Market provider"),
        providerReady("field-drones", "Drone field intelligence provider")
      ]
    },
    {
      module: "AI & Maps",
      checks: [
        {
          id: "openai-key",
          label: "OPENAI_API_KEY",
          ready: Boolean(process.env.OPENAI_API_KEY),
          detail: process.env.OPENAI_API_KEY ? "Configured" : "Set OPENAI_API_KEY for live AI."
        },
        providerReady("voice-stt", "Speech-to-text command provider"),
        providerReady("voice-tts", "Text-to-speech response provider"),
        providerReady("translation", "Live multilingual translation provider"),
        {
          id: "map-provider",
          label: "Map tile provider",
          ready: Boolean(providers.find(item => item.id === "maps")?.status === "connected"),
          detail: providers.find(item => item.id === "maps")?.detail || "Configure map tiles."
        }
      ]
    },
    {
      module: "Auth",
      checks: [
        providerReady("auth-users", "Production user auth provider"),
        providerReady("auth-password-reset", "Password reset provider")
      ]
    }
  ].map(item => {
    const readyCount = item.checks.filter(check => check.ready).length;
    return { ...item, readyCount, total: item.checks.length, status: readyCount === item.checks.length ? "production-ready" : "needs-setup" };
  });
  const checks = moduleReadiness.flatMap(item => item.checks.map(check => ({ ...check, module: item.module })));
  moduleReadiness.push(
    {
      module: "Communications",
      checks: [
        providerReady("email-delivery", "Email notification provider"),
        providerReady("sms-delivery", "SMS notification provider"),
        providerReady("whatsapp-delivery", "WhatsApp notification provider")
      ]
    },
    {
      module: "Billing",
      checks: [
        providerReady("billing-subscriptions", "Subscription billing provider"),
        {
          id: "billing-price",
          label: "BILLING_PRICE_ID",
          ready: Boolean(process.env.BILLING_PRICE_ID),
          detail: process.env.BILLING_PRICE_ID ? "Billing price configured." : "Set BILLING_PRICE_ID for subscriptions."
        }
      ]
    }
  );
  for (const item of moduleReadiness) {
    item.readyCount = item.checks.filter(check => check.ready).length;
    item.total = item.checks.length;
    item.status = item.readyCount === item.total ? "production-ready" : "needs-setup";
  }
  const expandedChecks = moduleReadiness.flatMap(item => item.checks.map(check => ({ ...check, module: item.module })));
  const legacyChecks = [
    {
      id: "database-url",
      label: "DATABASE_URL",
      ready: Boolean(process.env.DATABASE_URL),
      detail: process.env.DATABASE_URL ? "Configured" : "Set DATABASE_URL for PostgreSQL."
    },
    {
      id: "pg-package",
      label: "pg package",
      ready: Boolean(loadOptional("pg")),
      detail: loadOptional("pg") ? "Installed" : "Run npm install when npm is available."
    },
    {
      id: "openai-key",
      label: "OPENAI_API_KEY",
      ready: Boolean(process.env.OPENAI_API_KEY),
      detail: process.env.OPENAI_API_KEY ? "Configured" : "Set OPENAI_API_KEY for live AI."
    },
    {
      id: "session-secret",
      label: "SESSION_SECRET",
      ready: Boolean(process.env.SESSION_SECRET && !process.env.SESSION_SECRET.includes("dev-only")),
      detail: process.env.SESSION_SECRET ? "Configured" : "Set SESSION_SECRET for production auth."
    },
    {
      id: "provider-modes",
      label: "Provider modes",
      ready: providers.every(provider => !["fallback"].includes(provider.mode)),
      detail: "Sandbox providers are connected locally; live credentials can replace them."
    }
  ];
  const readyCount = expandedChecks.filter(check => check.ready).length;
  return {
    status: readyCount === expandedChecks.length ? "production-ready" : "local-optimized",
    readyCount,
    total: expandedChecks.length,
    checks: expandedChecks,
    legacyChecks,
    moduleReadiness,
    nextSteps: expandedChecks.filter(check => !check.ready).map(check => `${check.module}: ${check.detail}`)
  };
}

function capabilityMatrix(db, providers = runtimeProviders(db)) {
  const provider = id => providers.find(item => item.id === id);
  const providerOk = id => Boolean(provider(id)?.status === "connected" || provider(id)?.status === "ready");
  const workflowEvents = db.profile.integrationEvents || [];
  const hasEvent = action => workflowEvents.some(event => event.action === action);
  const hasAi = (db.profile.aiRuns || []).length > 0 || providerOk("openai");
  const capabilities = [
    {
      id: "jarvis-command-layer",
      title: "Jarvis-style command layer",
      module: "Agent AI",
      status: providerOk("voice-stt") && providerOk("voice-tts") ? "operational" : "needs-provider",
      detail: "Global Nexus dock, typed commands, voice sessions, backend command endpoint, wake-word cleanup, spoken responses, and command audit trail."
    },
    {
      id: "autonomous-agent-execution",
      title: "Autonomous agent execution",
      module: "Agent AI",
      status: (db.profile.agentExecutions || []).length || (db.profile.agentPlans || []).length ? "operational" : "ready",
      detail: "Plans and executes supervised tool steps across learning, workforce, health, trade, drones, maps, and AI."
    },
    {
      id: "multilingual-platform",
      title: "Multilingual platform",
      module: "AI",
      status: providerOk("translation") ? "operational" : "needs-provider",
      detail: "English, French, Kiswahili, and Arabic UI/content support with live translation provider wiring for dynamic content."
    },
    {
      id: "learning-workspace",
      title: "Learning and development workspace",
      module: "Learning",
      status: providerOk("learning-courses") && providerOk("learning-certificates") ? "operational" : "needs-provider",
      detail: "Course start, lesson progress, quizzes, certificates, captions, audio guide, offline packet, AI tutor, and provider evidence."
    },
    {
      id: "workforce-workspace",
      title: "Workforce operations",
      module: "Workforce",
      status: ["workforce-jobs", "workforce-calendar", "workforce-notifications", "workforce-hris", "workforce-shifts"].every(providerOk) ? "operational" : "needs-provider",
      detail: "Candidate profile, role matching, applications, interviews, mentor assignment, shift scheduling, notifications, and HRIS evidence."
    },
    {
      id: "telehealth-workspace",
      title: "Accessible telehealth",
      module: "Healthcare",
      status: ["health-telehealth", "health-ehr", "health-notifications"].every(providerOk) ? "operational" : "needs-provider",
      detail: "Patient intake, representative escalation, safety review, care plan, caption relay, caregiver notice, EHR sync, and accessibility notes."
    },
    {
      id: "agritrade-workspace",
      title: "Agritech and trade operations",
      module: "AgriTrade",
      status: ["trade-payments", "trade-logistics", "trade-market", "field-drones"].every(providerOk) ? "operational" : "needs-provider",
      detail: "Orders, wallet, logistics, market guidance, drone field scans, crop health, route evidence, and payment/logistics provider events."
    },
    {
      id: "map-ai-intelligence",
      title: "Map and AI intelligence",
      module: "Maps",
      status: providerOk("maps") && hasAi ? "operational" : "needs-provider",
      detail: "Country context, route inspector, risk assessment, map insights, AI command center, and route intelligence history."
    },
    {
      id: "production-auth",
      title: "Production user management",
      module: "Platform",
      status: providerOk("auth-users") && providerOk("auth-password-reset") ? "operational" : "needs-provider",
      detail: "User login, role permissions, auth provider wiring, password reset provider wiring, subscriber readiness, and admin review."
    },
    {
      id: "provider-audit",
      title: "Provider audit and regression",
      module: "Integrations",
      status: hasEvent("provider.test_all") || workflowEvents.length ? "operational" : "ready",
      detail: "Provider tests, module engine tests, production preflight, no-placeholder audit, workflow button audit, and full regression command."
    }
  ];
  const operational = capabilities.filter(item => item.status === "operational").length;
  return {
    status: operational === capabilities.length ? "fully-operational" : "operational-with-live-provider-gates",
    operational,
    total: capabilities.length,
    items: capabilities
  };
}

function automationReadiness(db, providers = runtimeProviders(db)) {
  const providerConnected = id => {
    const provider = providers.find(item => item.id === id);
    return Boolean(provider && provider.status === "connected");
  };
  const anyProviderConnected = ids => ids.some(providerConnected);
  const hasNotificationProvider = anyProviderConnected(["workforce-notifications", "health-notifications"]);
  const hasLiveCore = Boolean(process.env.OPENAI_API_KEY && process.env.DATABASE_URL && usingPostgresState());
  const items = [
    {
      id: "live-provider-accounts",
      title: "Live Provider Accounts",
      status: hasLiveCore && anyProviderConnected(["learning-courses", "workforce-jobs", "health-telehealth", "trade-market", "field-drones"]) ? "ready" : "needs-setup",
      detail: "OpenAI, PostgreSQL, maps, course/job, telehealth, trade, drone, and provider accounts must be configured."
    },
    {
      id: "scheduled-background-automation",
      title: "Scheduled Background Automation",
      status: process.env.AGRINEXUS_AUTOMATION_SCHEDULES === "enabled" ? "ready" : "needs-setup",
      detail: "Enable daily crop scans, course nudges, care reminders, shift reminders, and route monitoring schedules."
    },
    {
      id: "event-triggered-workflows",
      title: "Event-Triggered Workflows",
      status: process.env.AGRINEXUS_EVENT_TRIGGERS === "enabled" ? "ready" : "needs-setup",
      detail: "Enable rules such as intake-to-representative, course-to-job eligibility, drone stress-to-alert, and order-to-logistics notifications."
    },
    {
      id: "notification-delivery",
      title: "Notification Delivery",
      status: hasNotificationProvider && (process.env.EMAIL_PROVIDER || process.env.SMS_PROVIDER || process.env.WHATSAPP_PROVIDER) ? "ready" : "needs-setup",
      detail: "Connect email, SMS, WhatsApp, or provider webhooks so users receive workflow updates outside the app."
    },
    {
      id: "production-user-management",
      title: "Production User Management",
      status: process.env.AUTH_PROVIDER && process.env.PASSWORD_RESET_PROVIDER ? "ready" : "needs-setup",
      detail: "Add real user signup/login, role management, password reset, tenant controls, and admin subscriber management."
    }
  ];
  const readyCount = items.filter(item => item.status === "ready").length;
  return {
    status: readyCount === items.length ? "fully-automated-ready" : "automation-setup-needed",
    readyCount,
    total: items.length,
    items,
    updatedAt: new Date().toISOString()
  };
}

function loadOptional(name) {
  try {
    return require(name);
  } catch {
    return null;
  }
}

function adminSnapshot(db, providers = runtimeProviders(db)) {
  const profile = db.profile || {};
  ensureOperationsProfile(profile);
  const modules = [
    { name: "Learning", status: "connected", records: (profile.enrollments || []).length + (profile.certificates || []).length },
    { name: "Workforce", status: "connected", records: (profile.applications || []).length + (profile.shiftSchedule || []).length },
    { name: "Healthcare", status: "connected", records: (profile.healthIntakes || []).length + (profile.carePlans || []).length + (profile.safetyReviews || []).length },
    { name: "AgriTrade", status: "connected", records: (profile.orders || []).length + (profile.walletTransactions || []).length },
    { name: "Integrations", status: "connected", records: (profile.integrationEvents || []).length },
    { name: "Maps/AI", status: "ready", records: (db.routes || []).length + (db.countries || []).length }
  ];
  return {
    users: (db.users || []).map(user => ({ id: user.id, name: user.name, email: user.email, role: user.role, country: user.country })),
    subscribers: profile.subscriberAccounts,
    supportTickets: profile.supportTickets,
    usage: {
      totalEvents: profile.usageEvents.length,
      latest: profile.usageEvents.slice(0, 10),
      modules: profile.usageEvents.reduce((acc, event) => {
        const key = event.module || "Platform";
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {})
    },
    modules,
    readiness: productionReadiness(providers),
    production: productionCompleteness(db, providers),
    audit: [
      ...(profile.activity || []).map(item => ({ type: "activity", detail: item })),
      ...(profile.integrationEvents || []).map(item => ({ type: "integration", detail: `${item.providerName}: ${item.action}` })),
      ...(profile.tradeEvents || []).map(item => ({ type: "trade", detail: item.label }))
    ].slice(0, 30)
  };
}

function routeByProduct(db, product) {
  const productRecord = (db.products || []).find(item => item.id === product || item.name === product);
  const country = productRecord
    ? db.countries.find(item => item.id === productRecord.countryId)
    : db.countries.find(item => String(product || "").toLowerCase().includes(item.name.toLowerCase())) || db.countries[0];
  return { country, route: db.routes.find(item => item.id === country.routeId) };
}

function activeContext(db) {
  const country = db.countries.find(item => item.id === db.profile.activeCountryId) || db.countries[0];
  const route = db.routes.find(item => item.id === db.profile.activeRouteId) || db.routes[0];
  return { country, route };
}

function addActivity(profile, message) {
  profile.activity.unshift(`${new Date().toISOString()} ${message}`);
  profile.activity = profile.activity.slice(0, 25);
}

function addWorkflowNote(profile, note, label = "Workflow note") {
  const clean = String(note || "").trim();
  if (clean) addActivity(profile, `${label}: ${clean}`);
}

function providerRuntime(providerId) {
  const config = PROVIDER_CONFIG[providerId];
  if (!config) return { mode: "local", webhookUrl: "", apiKey: "" };
  const webhookKey = config.credentialEnvs.find(key => key.endsWith("_WEBHOOK_URL"));
  const apiKey = config.credentialEnvs.find(key => key.endsWith("_API_KEY"));
  return {
    mode: process.env[config.modeEnv] || "sandbox",
    webhookUrl: webhookKey ? process.env[webhookKey] || "" : "",
    apiKey: apiKey ? process.env[apiKey] || "" : ""
  };
}

async function dispatchProviderWebhook(db, event) {
  const provider = (db.providers || []).find(item => item.id === event.providerId);
  const runtime = providerRuntime(event.providerId);
  if (!provider || runtime.mode === "sandbox") {
    if (REQUIRE_LIVE_SERVICES && provider) {
      return { attempted: false, ok: false, status: "strict-live-provider-required" };
    }
    return { attempted: false, ok: true, status: "sandbox" };
  }
  if (!runtime.webhookUrl) {
    return { attempted: false, ok: false, status: "missing-webhook" };
  }

  const response = await fetch(runtime.webhookUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(runtime.apiKey ? { authorization: `Bearer ${runtime.apiKey}` } : {})
    },
    body: JSON.stringify({
      id: crypto.randomUUID(),
      providerId: event.providerId,
      providerName: provider.name,
      module: event.module,
      action: event.action,
      detail: event.detail,
      metadata: event.metadata || {},
      createdAt: new Date().toISOString()
    })
  });

  return { attempted: true, ok: response.ok, status: response.status };
}

function logIntegration(db, { providerId, module, action, status = "success", detail, metadata = {}, dispatch = true }) {
  db.profile.integrationEvents = db.profile.integrationEvents || [];
  const provider = (db.providers || []).find(item => item.id === providerId);
  const event = {
    providerId,
    module,
    action,
    status,
    detail,
    metadata
  };
  db.profile.integrationEvents.unshift({
    id: crypto.randomUUID(),
    providerId,
    providerName: provider?.name || providerId,
    module,
    action,
    status,
    detail,
    metadata,
    createdAt: new Date().toISOString()
  });
  db.profile.integrationEvents = db.profile.integrationEvents.slice(0, 50);
  if (dispatch) {
    dispatchProviderWebhook(db, event).catch(error => {
      console.warn(`Provider dispatch failed for ${providerId}: ${error.message}`);
    });
  }
}

function recalcReadiness(profile) {
  if (profile.readiness >= 55) profile.eligibility = "Eligible";
  if (profile.readiness >= 75) profile.careerTrack = "Placement Pathway";
  if (profile.readiness >= 90) profile.careerTrack = "Leadership Pathway";
  if (profile.readiness >= 55) profile.learningPath = "Workforce Eligible";
  if (profile.readiness >= 75) profile.learningPath = "Placement Pathway";
  if (profile.readiness >= 90) profile.learningPath = "Leadership Pathway";
}

function ensureLearningProfile(profile) {
  profile.enrollments = profile.enrollments || [];
  profile.completedCourses = profile.completedCourses || [];
  profile.certificates = profile.certificates || [];
  profile.learningPath = profile.learningPath || "Foundation Pathway";
  profile.learningStreak = profile.learningStreak || 0;
  profile.learningHours = profile.learningHours || 0;
  profile.accessibilityProfile = profile.accessibilityProfile || {
    hearingSupport: true,
    visualSupport: true,
    preferredFormats: ["captions", "screen-reader", "large-print", "audio-guide", "offline-packet"],
    language: profile.language || "sw",
    bandwidth: "low",
    representative: "Community accessibility aide"
  };
  profile.learningAccommodations = profile.learningAccommodations || [];
}

function getEnrollment(profile, courseId) {
  ensureLearningProfile(profile);
  return profile.enrollments.find(item => item.courseId === courseId) || null;
}

function ensureWorkforceProfile(profile) {
  profile.applications = profile.applications || [];
  profile.shiftSchedule = profile.shiftSchedule || [];
  profile.workforceBadges = profile.workforceBadges || [];
  profile.mentorNotes = profile.mentorNotes || [];
  profile.interviews = profile.interviews || 0;
  profile.placements = profile.placements || 0;
  profile.mentor = profile.mentor || "Not yet";
  profile.nextShift = profile.nextShift || "Awaiting scheduling";
}

function roleReadiness(profile, role) {
  ensureLearningProfile(profile);
  const missingCertificates = (role.requiredCertificates || []).filter(courseId => !profile.completedCourses.includes(courseId));
  return {
    eligible: profile.readiness >= role.minReadiness && missingCertificates.length === 0,
    missingReadiness: Math.max(0, role.minReadiness - profile.readiness),
    missingCertificates
  };
}

function ensureHealthProfile(profile) {
  profile.healthIntakes = profile.healthIntakes || [];
  profile.carePlans = profile.carePlans || [];
  profile.safetyReviews = profile.safetyReviews || [];
  profile.telehealthConsents = profile.telehealthConsents || [];
  profile.telehealthVitals = profile.telehealthVitals || [];
  profile.telehealthReferrals = profile.telehealthReferrals || [];
  profile.telehealthFollowUps = profile.telehealthFollowUps || [];
  profile.representativeConnections = profile.representativeConnections || 0;
  profile.accessibilityProfile = profile.accessibilityProfile || {
    hearingSupport: true,
    visualSupport: true,
    preferredFormats: ["captions", "screen-reader", "large-print", "audio-guide", "offline-packet"],
    language: profile.language || "sw",
    bandwidth: "low",
    representative: "Community accessibility aide"
  };
  profile.telehealthAccessibility = profile.telehealthAccessibility || [];
}

function ensureTradeProfile(profile) {
  profile.orders = profile.orders || [];
  profile.walletTransactions = profile.walletTransactions || [];
  profile.tradeEvents = profile.tradeEvents || [];
  profile.buyerContacts = profile.buyerContacts || [];
  profile.droneMissions = profile.droneMissions || [];
  profile.droneScans = profile.droneScans || [];
  profile.droneFindings = profile.droneFindings || [];
  profile.fieldInterventions = profile.fieldInterventions || [];
}

function ensureAiProfile(profile) {
  profile.aiRuns = profile.aiRuns || [];
  profile.mapInsights = profile.mapInsights || [];
  profile.demoMoments = profile.demoMoments || [];
  profile.demoScore = profile.demoScore || 0;
  profile.agentPlans = profile.agentPlans || [];
  profile.agentExecutions = profile.agentExecutions || [];
  profile.agentCommands = profile.agentCommands || [];
  profile.agentConversation = profile.agentConversation || [];
  profile.agentPendingAction = profile.agentPendingAction || null;
  profile.voiceSessions = profile.voiceSessions || [];
  profile.agentBriefings = profile.agentBriefings || [];
  profile.agentMemory = profile.agentMemory || {
    activeAudience: "government",
    activeMission: "rural transformation",
    rememberedContexts: [],
    lastGoal: "",
    lastStatus: "standby",
    lastSummary: "Nexus is ready to guide the platform.",
    updatedAt: new Date().toISOString()
  };
}

function buildAgentPlan(db, goal, user) {
  const { country, route } = activeContext(db);
  const course = db.courses.find(item => item.id === db.profile.activeCourseId) || db.courses[0];
  const role = db.roles.find(item => roleReadiness(db.profile, item).eligible) || db.roles[0];
  const product = (db.products || []).find(item => item.countryId === country.id) || (db.products || [])[0];
  const steps = [
    { id: crypto.randomUUID(), module: "Learning", tool: "learning.start_or_continue", action: "Prepare course path", detail: `Use ${course?.title || "active course"} as the training path and create learning evidence.`, status: "pending-approval" },
    { id: crypto.randomUUID(), module: "Workforce", tool: "workforce.match_role", action: "Match to role", detail: `Compare readiness against ${role?.title || "available role"} and prepare workforce evidence.`, status: "pending-approval" },
    { id: crypto.randomUUID(), module: "Healthcare", tool: "health.accessibility_review", action: "Prepare accessible telehealth", detail: `Create caption, audio, representative, and low-bandwidth support context for ${country.name}.`, status: "pending-approval" },
    { id: crypto.randomUUID(), module: "AgriTrade", tool: "trade.market_review", action: "Review trade opportunity", detail: `Review ${product?.name || "available product"} and logistics handoff evidence.`, status: "pending-approval" },
    { id: crypto.randomUUID(), module: "AgriTech", tool: "drone.flight_plan", action: "Plan drone mission", detail: `Prepare compliant drone flight plan for ${product?.name || "active crop lot"} with consent, airspace, sensor, and field objectives.`, status: "pending-approval" },
    { id: crypto.randomUUID(), module: "AgriTrade", tool: "drone.field_scan", action: "Run drone field scan", detail: `Create drone field intelligence for ${product?.name || "active crop lot"} and attach it to map and trade readiness.`, status: "pending-approval" },
    { id: crypto.randomUUID(), module: "AgriTech", tool: "drone.intervention_task", action: "Assign field intervention", detail: "Convert drone evidence into an irrigation, pest, buyer-readiness, and field follow-up task.", status: "pending-approval" },
    { id: crypto.randomUUID(), module: "Maps", tool: "map.route_risk", action: "Assess route risk", detail: `Analyze ${route.name} at ${db.profile.activeCheckpoint}.`, status: "pending-approval" },
    { id: crypto.randomUUID(), module: "AI", tool: "ai.copilot", action: "Generate supervised recommendation", detail: "Run AI copilot and keep the output in human review.", status: "pending-approval" }
  ];
  return {
    id: crypto.randomUUID(),
    goal,
    status: "awaiting-approval",
    createdBy: user.email,
    countryId: country.id,
    routeId: route.id,
    steps,
    createdAt: new Date().toISOString()
  };
}

function addTradeEvent(profile, event) {
  ensureTradeProfile(profile);
  profile.tradeEvents.unshift({ id: crypto.randomUUID(), createdAt: new Date().toISOString(), ...event });
  profile.tradeEvents = profile.tradeEvents.slice(0, 30);
}

function createBuyerContactWorkflow(db, user, command = "") {
  ensureTradeProfile(db.profile);
  const { country, route } = activeContext(db);
  const order = db.profile.orders[db.profile.orders.length - 1] || null;
  const product = order
    ? (db.products || []).find(item => item.id === order.productId)
    : (db.products || []).find(item => item.countryId === country.id) || (db.products || [])[0];
  const productName = order?.product || product?.name || "active crop lot";
  const buyerName = product?.buyerName || `${country.name} verified buyer desk`;
  const channel = /call|phone|speak|talk/i.test(command) ? "voice callback" : /whatsapp/i.test(command) ? "WhatsApp" : /sms|text/i.test(command) ? "SMS" : "buyer message";
  const message = `Hello ${buyerName}, this is an AgriNexus seller update for ${productName}. I would like to discuss buyer interest, price, delivery timing, and next steps for the active order.`;
  const contact = {
    id: crypto.randomUUID(),
    buyerName,
    channel,
    productId: product?.id || order?.productId || null,
    productName,
    orderId: order?.id || null,
    orderNumber: order?.orderNumber || "pending-order",
    status: "ready-for-confirmation",
    message,
    requestedBy: user.email,
    createdAt: new Date().toISOString()
  };
  db.profile.buyerContacts.unshift(contact);
  db.profile.buyerContacts = db.profile.buyerContacts.slice(0, 25);
  addTradeEvent(db.profile, { type: "buyer.contact_prepared", label: `${channel} prepared for ${buyerName} about ${productName}` });
  addNotification(db.profile, {
    module: "AgriTrade",
    channel,
    message: `Buyer contact prepared for ${buyerName}: ${productName}.`
  });
  logIntegration(db, {
    providerId: "trade-market",
    module: "AgriTrade",
    action: "buyer.contact_prepared",
    detail: `${channel} workflow prepared for ${buyerName}.`,
    metadata: { contactId: contact.id, orderId: contact.orderId, productId: contact.productId }
  });
  logIntegration(db, {
    providerId: "whatsapp-delivery",
    module: "AgriTrade",
    action: "buyer.message_drafted",
    detail: `Buyer message drafted for ${buyerName}.`,
    metadata: { contactId: contact.id, channel, message },
    dispatch: false
  });
  addActivity(db.profile, `Buyer contact prepared for ${buyerName} about ${productName}.`);
  return contact;
}

function submitBestWorkforceApplication(db, user, command = "") {
  ensureWorkforceProfile(db.profile);
  const requested = String(command || "").toLowerCase();
  const role = db.roles.find(item => requested.includes(item.title.toLowerCase()))
    || db.roles.find(item => roleReadiness(db.profile, item).eligible)
    || db.roles[0];
  if (!role) return { status: "needs-role", response: "No workforce roles are available yet." };
  const readiness = roleReadiness(db.profile, role);
  if (!readiness.eligible) {
    db.profile.candidateStage = "Readiness Gap Review";
    logIntegration(db, {
      providerId: "workforce-notifications",
      module: "Workforce",
      action: "application.gap_review",
      detail: `${role.title} application needs readiness support before submission.`,
      metadata: { roleId: role.id, readiness }
    });
    addActivity(db.profile, `Application help started for ${role.title}; readiness gaps found.`);
    return {
      status: "needs-readiness",
      role,
      readiness,
      response: `${role.title} is the best role to review, but you need ${readiness.missingReadiness}% more readiness${readiness.missingCertificates.length ? ` and ${readiness.missingCertificates.length} certificate gap(s)` : ""}. I opened the workforce path so you can close the gaps.`
    };
  }
  let application = db.profile.applications.find(item => item.roleId === role.id);
  if (!application) {
    application = {
      id: crypto.randomUUID(),
      roleId: role.id,
      roleTitle: role.title,
      status: "submitted-by-agent",
      submittedAt: new Date().toISOString(),
      rate: role.rate,
      source: "voice-agent"
    };
    db.profile.applications.unshift(application);
  } else {
    application.status = "reviewed-by-agent";
    application.lastReviewedAt = new Date().toISOString();
  }
  db.profile.placements = db.profile.applications.length;
  db.profile.interviews = Math.max(db.profile.interviews, 1);
  db.profile.candidateStage = "Application Submitted";
  logIntegration(db, {
    providerId: "workforce-hris",
    module: "Workforce",
    action: "application.submitted_by_agent",
    detail: `${role.title} application submitted from voice command.`,
    metadata: { applicationId: application.id, roleId: role.id }
  });
  addNotification(db.profile, {
    module: "Workforce",
    channel: "workflow",
    message: `${role.title} application submitted and interview support is ready.`
  });
  addActivity(db.profile, `Voice agent submitted application for ${role.title}.`);
  return {
    status: "completed",
    role,
    application,
    response: `I submitted the ${role.title} application and opened the workforce workspace. Next step: interview support and shift scheduling.`
  };
}

function activeLearningCourse(db) {
  return db.courses.find(item => item.id === db.profile.activeCourseId) || db.courses[0];
}

function completeAgentLesson(db, user) {
  ensureLearningProfile(db.profile);
  const course = activeLearningCourse(db);
  if (!course) throw new Error("No course catalog is available.");
  let enrollment = getEnrollment(db.profile, course.id);
  if (!enrollment) {
    enrollment = {
      id: crypto.randomUUID(),
      courseId: course.id,
      status: "in_progress",
      progress: 25,
      score: 0,
      activeModuleIndex: 0,
      completedModules: [],
      startedAt: new Date().toISOString(),
      completedAt: null
    };
    db.profile.enrollments.unshift(enrollment);
  }
  const moduleIndex = Number(enrollment.activeModuleIndex || 0);
  if (!enrollment.completedModules.includes(moduleIndex)) enrollment.completedModules.push(moduleIndex);
  enrollment.activeModuleIndex = Math.min((course.modules || []).length - 1, moduleIndex + 1);
  enrollment.progress = Math.min(100, Math.max(enrollment.progress || 0, 45) + 20);
  db.profile.learningHours = Number((Number(db.profile.learningHours || 0) + 0.5).toFixed(2));
  db.profile.readiness = Math.min(100, Number(db.profile.readiness || 0) + 4);
  recalcReadiness(db.profile);
  logIntegration(db, {
    providerId: "learning-courses",
    module: "Learning",
    action: "agent.lesson_completed",
    detail: `Agent completed lesson ${moduleIndex + 1} in ${course.title}.`,
    metadata: { courseId: course.id, enrollmentId: enrollment.id, moduleIndex, userId: user.id }
  });
  addActivity(db.profile, `Voice agent completed a lesson in ${course.title}.`);
  return `Completed the next ${course.title} lesson and moved progress to ${enrollment.progress}%.`;
}

function completeAgentQuiz(db, user) {
  ensureLearningProfile(db.profile);
  const course = activeLearningCourse(db);
  if (!course) throw new Error("No course catalog is available.");
  let enrollment = getEnrollment(db.profile, course.id);
  if (!enrollment) {
    executeAgentTool(db, user, { tool: "learning.start_or_continue" });
    enrollment = getEnrollment(db.profile, course.id);
  }
  enrollment.progress = Math.min(100, Number(enrollment.progress || 0) + 35);
  enrollment.score = Math.min(100, Math.max(Number(enrollment.score || 0), 72));
  db.profile.quizScore = Math.max(Number(db.profile.quizScore || 0), enrollment.score);
  db.profile.learningHours = Number((Number(db.profile.learningHours || 0) + 0.75).toFixed(2));
  db.profile.readiness = Math.min(100, Number(db.profile.readiness || 0) + 6);
  recalcReadiness(db.profile);
  logIntegration(db, {
    providerId: "learning-certificates",
    module: "Learning",
    action: "agent.quiz_completed",
    detail: `${course.title} voice-agent quiz recorded with score ${enrollment.score}.`,
    metadata: { courseId: course.id, enrollmentId: enrollment.id, score: enrollment.score, userId: user.id }
  });
  addActivity(db.profile, `Voice agent completed ${course.title} quiz support.`);
  return `Completed the ${course.title} quiz workflow with score ${enrollment.score}.`;
}

function issueAgentCertificate(db, user) {
  ensureLearningProfile(db.profile);
  const course = activeLearningCourse(db);
  if (!course) throw new Error("No course catalog is available.");
  let enrollment = getEnrollment(db.profile, course.id);
  if (!enrollment || Number(enrollment.score || 0) < 25) {
    completeAgentQuiz(db, user);
    enrollment = getEnrollment(db.profile, course.id);
  }
  enrollment.status = "completed";
  enrollment.progress = 100;
  enrollment.completedAt = enrollment.completedAt || new Date().toISOString();
  if (!db.profile.completedCourses.includes(course.id)) db.profile.completedCourses.push(course.id);
  let certificate = db.profile.certificates.find(item => item.courseId === course.id);
  if (!certificate) {
    certificate = {
      id: crypto.randomUUID(),
      certificateNumber: `AN-CERT-${String(db.profile.certificates.length + 1).padStart(4, "0")}`,
      courseId: course.id,
      title: course.title,
      issuedAt: new Date().toISOString()
    };
    db.profile.certificates.push(certificate);
  }
  db.profile.readiness = Math.min(100, Number(db.profile.readiness || 0) + 10);
  db.profile.learningStreak = Number(db.profile.learningStreak || 0) + 1;
  recalcReadiness(db.profile);
  logIntegration(db, {
    providerId: "learning-certificates",
    module: "Learning",
    action: "agent.certificate_issued",
    detail: `${certificate.certificateNumber} issued from voice command for ${course.title}.`,
    metadata: { courseId: course.id, certificateNumber: certificate.certificateNumber, userId: user.id }
  });
  addActivity(db.profile, `Voice agent issued certificate ${certificate.certificateNumber} for ${course.title}.`);
  return `Issued ${certificate.certificateNumber} for ${course.title}.`;
}

function prepareLearningAccess(db, user, mode = "caption") {
  ensureLearningProfile(db.profile);
  const course = activeLearningCourse(db);
  const titles = {
    caption: "Captioned lesson packet",
    visual: "Audio guide and screen-reader outline",
    "low-bandwidth": "Offline low-bandwidth packet"
  };
  const accommodation = {
    id: crypto.randomUUID(),
    courseId: course?.id || null,
    courseTitle: course?.title || "Accessible learning path",
    mode,
    title: titles[mode] || titles.caption,
    language: db.profile.accessibilityProfile.language || user.language || "en",
    supports: mode === "visual" ? ["audio narration", "screen-reader outline", "large-print summary"] : mode === "low-bandwidth" ? ["SMS summary", "download packet", "community aide checklist"] : ["live captions", "transcript", "sign-language handoff prompt"],
    status: "ready",
    createdAt: new Date().toISOString()
  };
  db.profile.learningAccommodations.unshift(accommodation);
  db.profile.learningAccommodations = db.profile.learningAccommodations.slice(0, 20);
  logIntegration(db, {
    providerId: "learning-certificates",
    module: "Learning",
    action: "agent.learning_accessibility_ready",
    detail: `${accommodation.title} prepared from voice command.`,
    metadata: { accommodationId: accommodation.id, courseId: accommodation.courseId, mode }
  });
  addActivity(db.profile, `${accommodation.title} prepared for accessible learning.`);
  return `${accommodation.title} is ready for ${accommodation.courseTitle}.`;
}

function runWorkforceActionByAgent(db, user, type) {
  ensureWorkforceProfile(db.profile);
  if (type === "build-profile") {
    db.profile.candidateStage = db.profile.readiness >= 55 ? "Shortlist" : "Profile Ready";
    db.profile.readiness = Math.min(100, Number(db.profile.readiness || 0) + 10);
    if (!db.profile.workforceBadges.includes("Profile Verified")) db.profile.workforceBadges.push("Profile Verified");
    logIntegration(db, { providerId: "workforce-hris", module: "Workforce", action: "agent.profile_verified", detail: "Voice agent verified candidate profile.", metadata: { userId: user.id, readiness: db.profile.readiness } });
    addActivity(db.profile, "Voice agent verified the workforce profile.");
    return `Verified the workforce profile and moved the candidate to ${db.profile.candidateStage}.`;
  }
  if (type === "interview") {
    db.profile.readiness = Math.max(Number(db.profile.readiness || 0), 55);
    db.profile.interviews = Number(db.profile.interviews || 0) + 1;
    db.profile.candidateStage = "Interview";
    db.profile.lastInterviewAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
    logIntegration(db, { providerId: "workforce-calendar", module: "Workforce", action: "agent.interview_scheduled", detail: "Voice agent scheduled interview support.", metadata: { startsAt: db.profile.lastInterviewAt } });
    addNotification(db.profile, { module: "Workforce", channel: "workflow", message: "Interview support scheduled from voice command." });
    addActivity(db.profile, "Voice agent scheduled workforce interview support.");
    return "Scheduled the interview workflow for tomorrow and recorded the notification.";
  }
  if (type === "mentor") {
    db.profile.mentor = "Assigned";
    db.profile.readiness = Math.min(100, Number(db.profile.readiness || 0) + 5);
    db.profile.mentorNotes.unshift({ id: crypto.randomUUID(), note: "Voice agent assigned mentor to close readiness gaps.", createdAt: new Date().toISOString() });
    if (!db.profile.workforceBadges.includes("Mentor Matched")) db.profile.workforceBadges.push("Mentor Matched");
    logIntegration(db, { providerId: "workforce-hris", module: "Workforce", action: "agent.mentor_assigned", detail: "Voice agent assigned mentor.", metadata: { userId: user.id } });
    addActivity(db.profile, "Voice agent assigned a workforce mentor.");
    return "Assigned a mentor and created a readiness coaching note.";
  }
  if (type === "shift") {
    db.profile.interviews = Math.max(Number(db.profile.interviews || 0), 1);
    const shift = {
      id: crypto.randomUUID(),
      role: db.profile.applications[0]?.roleTitle || "Field Operations Agent",
      startsAt: new Date(Date.now() + 36 * 60 * 60 * 1000).toISOString(),
      status: "scheduled",
      estimatedEarnings: 64
    };
    db.profile.shiftSchedule.unshift(shift);
    db.profile.nextShift = `${shift.role} shift scheduled`;
    db.profile.earnings = Number(db.profile.earnings || 0) + shift.estimatedEarnings;
    if (!db.profile.workforceBadges.includes("Shift Scheduled")) db.profile.workforceBadges.push("Shift Scheduled");
    logIntegration(db, { providerId: "workforce-shifts", module: "Workforce", action: "agent.shift_scheduled", detail: `${shift.role} shift scheduled by voice agent.`, metadata: { shiftId: shift.id } });
    addActivity(db.profile, "Voice agent scheduled a workforce shift.");
    return `Scheduled ${shift.role} and added estimated earnings of ${shift.estimatedEarnings}.`;
  }
  return submitBestWorkforceApplication(db, user, "apply for job").response;
}

function runHealthActionByAgent(db, user, type) {
  ensureHealthProfile(db.profile);
  const { country, route } = activeContext(db);
  let intake = db.profile.healthIntakes[0];
  if (!intake) {
    intake = {
      id: crypto.randomUUID(),
      patientRef: `AN-PAT-${country.id.toUpperCase()}-VOICE`,
      patientName: "Voice-supported patient",
      countryId: country.id,
      needSummary: `${country.name} voice intake for telehealth access`,
      riskLevel: country.risk === "High" || country.heat >= 38 ? "High" : "Routine",
      queueStatus: "Voice intake opened",
      representativeStatus: "Accessibility aide pending",
      preferredLanguage: db.profile.accessibilityProfile.language || user.language || "en",
      accessibilityNeeds: "Captions, audio narration, large print, caregiver handoff",
      contactMethod: "Low-bandwidth callback",
      caregiverName: "Community accessibility aide",
      assistiveSupports: ["caption relay", "audio narration", "large-print summary", "caregiver handoff"],
      routeContext: { routeId: route.id, routeName: route.name, checkpoint: db.profile.activeCheckpoint },
      createdAt: new Date().toISOString()
    };
    db.profile.healthIntakes.unshift(intake);
  }
  const actionMap = {
    representative: ["representative.connected", "Representative connected", "health-notifications"],
    caption: ["telehealth.caption_relay_started", "Caption relay started", "health-telehealth"],
    caregiver: ["telehealth.caregiver_notified", "Caregiver notified", "health-notifications"],
    accessibility: ["telehealth.access_plan_ready", "Accessible telehealth plan ready", "health-telehealth"],
    consent: ["telehealth.consent_recorded", "Consent recorded", "health-ehr"],
    vitals: ["telehealth.vitals_captured", "Vitals captured", "health-telehealth"],
    referral: ["telehealth.referral_created", "Referral created", "health-ehr"],
    followup: ["telehealth.followup_scheduled", "Follow-up scheduled", "health-notifications"],
    safety: ["safety.review", "Safety review complete", "health-ehr"],
    careplan: ["care_plan.synced", "Care plan generated", "health-ehr"],
    intake: ["intake.created", "Telehealth intake opened", "health-telehealth"]
  };
  const selected = actionMap[type] || actionMap.intake;
  intake.queueStatus = selected[1];
  if (type === "representative") {
    intake.representativeStatus = "Connected";
    db.profile.representativeConnections = Number(db.profile.representativeConnections || 0) + 1;
  }
  const record = {
    id: crypto.randomUUID(),
    intakeId: intake.id,
    patientRef: intake.patientRef,
    type,
    title: selected[1],
    status: "completed",
    language: intake.preferredLanguage || user.language || "en",
    createdAt: new Date().toISOString()
  };
  if (["caption", "caregiver", "accessibility"].includes(type)) {
    db.profile.telehealthAccessibility.unshift(record);
    db.profile.telehealthAccessibility = db.profile.telehealthAccessibility.slice(0, 20);
  } else if (type === "consent") {
    db.profile.telehealthConsents.unshift(record);
  } else if (type === "vitals") {
    db.profile.telehealthVitals.unshift({ ...record, temperatureC: country.heat >= 38 ? 38.1 : 36.8, pulse: country.risk === "High" ? 96 : 82 });
  } else if (type === "referral") {
    db.profile.telehealthReferrals.unshift(record);
  } else if (type === "followup") {
    db.profile.telehealthFollowUps.unshift(record);
  } else if (type === "safety") {
    db.profile.safetyReviews.unshift({ ...record, riskLevel: country.risk, heatIndex: country.heat });
  } else if (type === "careplan") {
    db.profile.carePlans.unshift({ ...record, text: `Care plan prepared for ${country.name}: monitor risk, access needs, caregiver support, and route context.` });
  }
  logIntegration(db, {
    providerId: selected[2],
    module: "Healthcare",
    action: `agent.${selected[0]}`,
    detail: `${selected[1]} for ${intake.patientRef} from voice agent.`,
    metadata: { intakeId: intake.id, recordId: record.id, type }
  });
  addActivity(db.profile, `Voice agent health workflow: ${selected[1]} for ${intake.patientRef}.`);
  return `${selected[1]} for ${intake.patientRef}.`;
}

function runPlatformActionByAgent(db, user, type) {
  if (type === "integrations.test_all") {
    for (const provider of db.providers || []) {
      logIntegration(db, {
        providerId: provider.id,
        module: provider.module,
        action: "agent.provider_test",
        detail: `${provider.name} checked by voice agent.`,
        metadata: { mode: provider.mode, status: provider.status },
        dispatch: false
      });
    }
    addActivity(db.profile, "Voice agent tested provider readiness across the platform.");
    return `Checked ${(db.providers || []).length} provider engines and logged readiness evidence.`;
  }
  if (type === "admin.health_check") {
    ensureOperationsProfile(db.profile);
    addUsageEvent(db.profile, { module: "Admin", action: "agent.health_check", detail: "Voice agent ran admin health check." });
    logIntegration(db, { providerId: "database", module: "Admin", action: "agent.admin_health_check", detail: "Admin health check recorded by voice agent.", dispatch: false });
    addActivity(db.profile, "Voice agent ran admin health check.");
    return "Admin health check recorded with provider and usage evidence.";
  }
  if (type === "profile.summary") {
    logIntegration(db, { providerId: "database", module: "Profile", action: "agent.profile_summary", detail: "Unified profile summary opened by voice agent.", dispatch: false });
    addActivity(db.profile, "Voice agent opened unified profile summary.");
    return `Unified profile ready: ${db.profile.readiness}% readiness, ${(db.profile.certificates || []).length} certificates, ${(db.profile.applications || []).length} applications, ${(db.profile.orders || []).length} orders.`;
  }
  return "Platform action recorded.";
}

function addNotification(profile, notice) {
  profile.notifications = profile.notifications || [];
  profile.notifications.unshift({ id: crypto.randomUUID(), createdAt: new Date().toISOString(), status: "sent", ...notice });
  profile.notifications = profile.notifications.slice(0, 50);
}

function ensureOperationsProfile(profile) {
  profile.onboardingRuns = profile.onboardingRuns || [];
  profile.supportTickets = profile.supportTickets || [];
  profile.usageEvents = profile.usageEvents || [];
  profile.subscriberAccounts = profile.subscriberAccounts || [];
  profile.localPilotRuns = profile.localPilotRuns || [];
}

function addUsageEvent(profile, event) {
  ensureOperationsProfile(profile);
  profile.usageEvents.unshift({
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...event
  });
  profile.usageEvents = profile.usageEvents.slice(0, 100);
}

function addMapInsight(profile, insight) {
  ensureAiProfile(profile);
  profile.mapInsights.unshift({ id: crypto.randomUUID(), createdAt: new Date().toISOString(), ...insight });
  profile.mapInsights = profile.mapInsights.slice(0, 20);
}

function selectedTradeProduct(db, productId, country) {
  return (db.products || []).find(item => item.id === productId)
    || (db.products || []).find(item => item.countryId === country.id)
    || (db.products || [])[0];
}

function createDroneMission(db, { productId, source = "operator", fieldZone, objective } = {}) {
  ensureTradeProfile(db.profile);
  const { country, route } = activeContext(db);
  const product = selectedTradeProduct(db, productId, country);
  if (!product) throw new Error("No crop lot is available for drone mission planning.");
  const mission = {
    id: crypto.randomUUID(),
    missionRef: `AN-FLIGHT-${country.id.toUpperCase()}-${String((db.profile.droneMissions || []).length + 1).padStart(3, "0")}`,
    productId: product.id,
    productName: product.name,
    countryId: country.id,
    routeId: route.id,
    fieldZone: fieldZone || `${country.name} ${product.category || "crop"} zone`,
    objective: objective || "Map crop health, irrigation stress, pest risk, road access, and buyer-readiness evidence.",
    sensorPackage: ["RGB overview", "multispectral crop index", "thermal stress", "geotagged evidence"],
    flightWindow: country.heat >= 38 ? "Early morning low-heat window" : "Standard daylight window",
    complianceChecks: ["operator authorization", "community consent", "airspace review", "weather check", "data privacy review"],
    status: "flight-plan-ready",
    createdBy: source,
    createdAt: new Date().toISOString()
  };
  db.profile.droneMissions.unshift(mission);
  db.profile.droneMissions = db.profile.droneMissions.slice(0, 20);
  addMapInsight(db.profile, {
    type: "drone-flight-plan",
    label: `${mission.missionRef} flight plan`,
    detail: `${mission.fieldZone}: ${mission.flightWindow}; ${mission.complianceChecks.length} compliance checks ready.`,
    routeName: route.name,
    checkpoint: db.profile.activeCheckpoint
  });
  addTradeEvent(db.profile, { type: "drone.flight_plan", label: `${mission.missionRef} planned for ${mission.productName}.` });
  logIntegration(db, {
    providerId: "field-drones",
    module: "AgriTrade",
    action: "drone.flight_plan",
    detail: `${mission.missionRef} drone mission planned for ${mission.productName}.`,
    metadata: { missionId: mission.id, productId: product.id, countryId: country.id, source }
  });
  return mission;
}

function createDroneScan(db, { productId, source = "operator", fieldZone, scanType } = {}) {
  ensureTradeProfile(db.profile);
  const { country, route } = activeContext(db);
  const product = selectedTradeProduct(db, productId, country);
  if (!product) throw new Error("No crop lot is available for drone scan.");
  const stress = country.heat >= 38 ? "High heat stress" : country.risk === "High" ? "Elevated field risk" : "Stable field profile";
  const cropHealthScore = Math.max(55, Math.min(98, Number(product.buyerInterest || 75) + (country.risk === "Low" ? 8 : -4)));
  const scan = {
    id: crypto.randomUUID(),
    scanRef: `AN-DRONE-${country.id.toUpperCase()}-${String((db.profile.droneScans || []).length + 1).padStart(3, "0")}`,
    productId: product.id,
    productName: product.name,
    countryId: country.id,
    routeId: route.id,
    fieldZone: fieldZone || `${country.name} ${product.category || "crop"} zone`,
    scanType: scanType || "multispectral-field-health",
    cropHealthScore,
    stressAlert: stress,
    yieldEstimate: `${Math.max(12, Math.round((product.buyerInterest || 70) / 4))} harvest units`,
    recommendation: `Review irrigation, pest scouting, and buyer-readiness before moving ${product.name} into trade workflow.`,
    status: "analysis-ready",
    createdBy: source,
    createdAt: new Date().toISOString()
  };
  const finding = {
    id: crypto.randomUUID(),
    findingRef: `AN-FIND-${country.id.toUpperCase()}-${String((db.profile.droneFindings || []).length + 1).padStart(3, "0")}`,
    scanId: scan.id,
    scanRef: scan.scanRef,
    productId: product.id,
    productName: product.name,
    issueType: cropHealthScore < 70 ? "crop-stress" : stress.includes("High") ? "heat-risk" : "buyer-readiness",
    severity: cropHealthScore < 70 || stress.includes("High") ? "priority" : "watch",
    evidence: `${scan.scanType}: ${cropHealthScore}% crop health, ${stress}, ${scan.yieldEstimate}.`,
    recommendedAction: scan.recommendation,
    interventionStatus: "awaiting-field-task",
    createdAt: new Date().toISOString()
  };
  db.profile.droneScans.unshift(scan);
  db.profile.droneScans = db.profile.droneScans.slice(0, 20);
  db.profile.droneFindings.unshift(finding);
  db.profile.droneFindings = db.profile.droneFindings.slice(0, 20);
  addMapInsight(db.profile, {
    type: "drone-field-scan",
    label: `${scan.scanRef} crop intelligence`,
    detail: `${scan.productName}: ${scan.cropHealthScore}% crop health, ${scan.stressAlert}, ${scan.yieldEstimate}.`,
    routeName: route.name,
    checkpoint: db.profile.activeCheckpoint
  });
  addTradeEvent(db.profile, { type: "drone.field_scan", label: `${scan.scanRef} completed for ${scan.productName}; ${scan.cropHealthScore}% crop health.` });
  logIntegration(db, {
    providerId: "field-drones",
    module: "AgriTrade",
    action: "drone.field_scan",
    detail: `${scan.scanRef} drone field intelligence created for ${scan.productName}.`,
    metadata: { scanId: scan.id, findingId: finding.id, productId: product.id, countryId: country.id, cropHealthScore: scan.cropHealthScore, source }
  });
  return { scan, finding };
}

function createFieldIntervention(db, { source = "operator", assignedTo = "Field agritech team" } = {}) {
  ensureTradeProfile(db.profile);
  const { country, route } = activeContext(db);
  const finding = (db.profile.droneFindings || [])[0];
  const scan = (db.profile.droneScans || [])[0];
  if (!finding && !scan) throw new Error("Run a drone field scan before creating an intervention task.");
  const productName = finding?.productName || scan?.productName || "active crop lot";
  const task = {
    id: crypto.randomUUID(),
    taskRef: `AN-FIELD-${country.id.toUpperCase()}-${String((db.profile.fieldInterventions || []).length + 1).padStart(3, "0")}`,
    findingId: finding?.id || null,
    scanId: scan?.id || null,
    productName,
    countryId: country.id,
    routeId: route.id,
    priority: finding?.severity === "priority" ? "same-day" : "next-field-cycle",
    assignedTo,
    actions: ["irrigation check", "pest scouting", "photo evidence", "buyer quality readiness", "community follow-up"],
    status: "assigned",
    createdBy: source,
    createdAt: new Date().toISOString()
  };
  db.profile.fieldInterventions.unshift(task);
  db.profile.fieldInterventions = db.profile.fieldInterventions.slice(0, 20);
  if (finding) finding.interventionStatus = "field-task-assigned";
  addMapInsight(db.profile, {
    type: "drone-intervention",
    label: `${task.taskRef} field intervention`,
    detail: `${productName}: ${task.priority} task assigned for ${task.actions.join(", ")}.`,
    routeName: route.name,
    checkpoint: db.profile.activeCheckpoint
  });
  addTradeEvent(db.profile, { type: "drone.intervention_task", label: `${task.taskRef} assigned for ${productName}.` });
  logIntegration(db, {
    providerId: "field-drones",
    module: "AgriTrade",
    action: "drone.intervention_task",
    detail: `${task.taskRef} field intervention assigned from drone evidence.`,
    metadata: { taskId: task.id, findingId: finding?.id || null, scanId: scan?.id || null, countryId: country.id, source }
  });
  return task;
}

function recordAiRun(db, { type, country, route, result, module = "AI" }) {
  ensureAiProfile(db.profile);
  db.profile.aiActivity = result.text;
  db.profile.aiProvider = result.provider;
  db.profile.aiModel = result.model;
  db.profile.aiResponseId = result.responseId || null;
  db.profile.aiError = result.error || null;
  const run = {
    id: crypto.randomUUID(),
    type,
    countryId: country.id,
    countryName: country.name,
    routeId: route.id,
    routeName: route.name,
    checkpoint: db.profile.activeCheckpoint,
    routeStage: db.profile.routeStage,
    provider: result.provider,
    model: result.model,
    responseId: result.responseId || null,
    error: result.error || null,
    text: result.text,
    reviewStatus: "pending-human-review",
    reviewedBy: null,
    reviewedAt: null,
    reviewNote: "",
    createdAt: new Date().toISOString()
  };
  db.profile.aiRuns.unshift(run);
  db.profile.aiRuns = db.profile.aiRuns.slice(0, 25);
  addMapInsight(db.profile, {
    type,
    label: `${type} analysis for ${country.name}`,
    detail: result.text,
    routeName: route.name,
    checkpoint: db.profile.activeCheckpoint
  });
  logIntegration(db, {
    providerId: "openai",
    module,
    action: "ai.run",
    status: result.error ? "fallback" : "success",
    detail: `${type} AI run completed through ${result.provider}.`,
    metadata: { runId: run.id, countryId: country.id, routeId: route.id, provider: result.provider }
  });
  return run;
}

async function executeAgentTool(db, user, step) {
  const { country, route } = activeContext(db);
  if (step.tool === "learning.start_or_continue") {
    ensureLearningProfile(db.profile);
    const course = db.courses.find(item => item.id === db.profile.activeCourseId) || db.courses[0];
    if (!course) throw new Error("No course catalog is available.");
    let enrollment = getEnrollment(db.profile, course.id);
    if (!enrollment) {
      enrollment = {
        id: crypto.randomUUID(),
        courseId: course.id,
        status: "in_progress",
        progress: 25,
        score: 0,
        startedAt: new Date().toISOString(),
        completedAt: null,
        activeModuleIndex: 0,
        completedModules: []
      };
      db.profile.enrollments.unshift(enrollment);
    } else {
      enrollment.progress = Math.min(100, Number(enrollment.progress || 0) + 25);
      enrollment.status = enrollment.progress >= 100 ? "completed" : "in_progress";
      if (enrollment.progress >= 100 && !enrollment.completedAt) enrollment.completedAt = new Date().toISOString();
    }
    db.profile.activeCourseId = course.id;
    db.profile.readiness = Math.min(100, Number(db.profile.readiness || 0) + Math.max(2, Math.round((course.readiness || 8) / 2)));
    db.profile.learningHours = Number((Number(db.profile.learningHours || 0) + 0.5).toFixed(2));
    db.profile.learningStreak = Number(db.profile.learningStreak || 0) + 1;
    recalcReadiness(db.profile);
    logIntegration(db, {
      providerId: "learning-courses",
      module: "Learning",
      action: "agent.learning_progress",
      detail: `Agent advanced ${course.title} to ${enrollment.progress}% for ${user.email}.`,
      metadata: { courseId: course.id, enrollmentId: enrollment.id, progress: enrollment.progress }
    });
    return `Advanced ${course.title} to ${enrollment.progress}% and updated readiness.`;
  }

  if (step.tool === "learning.complete_lesson") return completeAgentLesson(db, user);
  if (step.tool === "learning.quiz") return completeAgentQuiz(db, user);
  if (step.tool === "learning.certificate") return issueAgentCertificate(db, user);
  if (step.tool === "learning.access_caption") return prepareLearningAccess(db, user, "caption");
  if (step.tool === "learning.access_visual") return prepareLearningAccess(db, user, "visual");
  if (step.tool === "learning.access_offline") return prepareLearningAccess(db, user, "low-bandwidth");

  if (step.tool === "workforce.match_role") {
    ensureWorkforceProfile(db.profile);
    const role = db.roles.find(item => roleReadiness(db.profile, item).eligible) || db.roles[0];
    if (!role) throw new Error("No workforce role catalog is available.");
    const readiness = roleReadiness(db.profile, role);
    if (!db.profile.workforceBadges.includes("Profile Verified")) db.profile.workforceBadges.push("Profile Verified");
    let application = db.profile.applications.find(item => item.roleId === role.id);
    if (readiness.eligible && !application) {
      application = {
        id: crypto.randomUUID(),
        roleId: role.id,
        roleTitle: role.title,
        status: "agent-submitted",
        submittedAt: new Date().toISOString(),
        rate: role.rate
      };
      db.profile.applications.unshift(application);
      db.profile.candidateStage = "Agent Matched";
      db.profile.placements = db.profile.applications.length;
    } else {
      db.profile.candidateStage = readiness.eligible ? "Agent Matched" : "Readiness Gap Review";
    }
    logIntegration(db, {
      providerId: "workforce-jobs",
      module: "Workforce",
      action: "agent.workforce_match",
      detail: readiness.eligible
        ? `Agent matched candidate to ${role.title}.`
        : `Agent found readiness gaps for ${role.title}: ${readiness.missingReadiness}% readiness and ${readiness.missingCertificates.length} certificate gap(s).`,
      metadata: { roleId: role.id, eligible: readiness.eligible, applicationId: application?.id || null, readiness }
    });
    return readiness.eligible ? `Matched candidate to ${role.title}.` : `Prepared gap review for ${role.title}.`;
  }

  if (step.tool === "workforce.apply_role") return submitBestWorkforceApplication(db, user, step.detail || "apply for job").response;
  if (step.tool === "workforce.build_profile") return runWorkforceActionByAgent(db, user, "build-profile");
  if (step.tool === "workforce.schedule_interview") return runWorkforceActionByAgent(db, user, "interview");
  if (step.tool === "workforce.assign_mentor") return runWorkforceActionByAgent(db, user, "mentor");
  if (step.tool === "workforce.schedule_shift") return runWorkforceActionByAgent(db, user, "shift");

  if (step.tool === "health.accessibility_review") {
    ensureHealthProfile(db.profile);
    let intake = db.profile.healthIntakes[0];
    if (!intake) {
      intake = {
        id: crypto.randomUUID(),
        patientRef: `AN-PAT-${country.id.toUpperCase()}-AGENT`,
        patientName: "Agent-prepared patient",
        countryId: country.id,
        needSummary: `${country.name} agent intake for accessibility and care support`,
        riskLevel: country.risk === "High" || country.heat >= 38 ? "High" : "Routine",
        queueStatus: "Agent access review",
        representativeStatus: "Accessibility aide pending",
        preferredLanguage: db.profile.accessibilityProfile.language || user.language || "en",
        accessibilityNeeds: "Captions, audio narration, large print, caregiver handoff, low-bandwidth callback",
        contactMethod: "Low-bandwidth callback",
        caregiverName: "Community accessibility aide",
        assistiveSupports: ["caption relay", "audio narration", "large-print summary", "caregiver handoff", "low-bandwidth callback"],
        createdAt: new Date().toISOString()
      };
      db.profile.healthIntakes.unshift(intake);
    }
    const record = {
      id: crypto.randomUUID(),
      intakeId: intake.id,
      patientRef: intake.patientRef,
      countryId: country.id,
      title: "Agent accessibility review",
      status: "Agent access plan ready",
      language: intake.preferredLanguage || user.language || "en",
      supports: intake.assistiveSupports || ["caption relay", "audio narration", "caregiver handoff"],
      createdAt: new Date().toISOString()
    };
    db.profile.telehealthAccessibility.unshift(record);
    intake.queueStatus = "Agent access plan ready";
    logIntegration(db, {
      providerId: "health-telehealth",
      module: "Healthcare",
      action: "agent.health_accessibility",
      detail: `Agent prepared accessible telehealth support for ${intake.patientRef}.`,
      metadata: { intakeId: intake.id, accessibilityId: record.id }
    });
    return `Prepared accessible telehealth support for ${intake.patientRef}.`;
  }

  if (step.tool === "health.intake") return runHealthActionByAgent(db, user, "intake");
  if (step.tool === "health.representative") return runHealthActionByAgent(db, user, "representative");
  if (step.tool === "health.caption") return runHealthActionByAgent(db, user, "caption");
  if (step.tool === "health.caregiver") return runHealthActionByAgent(db, user, "caregiver");
  if (step.tool === "health.consent") return runHealthActionByAgent(db, user, "consent");
  if (step.tool === "health.vitals") return runHealthActionByAgent(db, user, "vitals");
  if (step.tool === "health.referral") return runHealthActionByAgent(db, user, "referral");
  if (step.tool === "health.followup") return runHealthActionByAgent(db, user, "followup");
  if (step.tool === "health.safety") return runHealthActionByAgent(db, user, "safety");
  if (step.tool === "health.careplan") return runHealthActionByAgent(db, user, "careplan");

  if (step.tool === "trade.market_review") {
    ensureTradeProfile(db.profile);
    const product = (db.products || []).find(item => item.countryId === country.id) || (db.products || [])[0];
    if (!product) throw new Error("No trade product catalog is available.");
    const order = {
      id: crypto.randomUUID(),
      orderNumber: `AN-ORD-AGENT-${String((db.profile.orders || []).length + 1).padStart(3, "0")}`,
      productId: product.id,
      productName: product.name,
      countryId: country.id,
      routeId: route.id,
      stage: "Agent market review",
      stageIndex: 1,
      checkpoint: db.profile.activeCheckpoint,
      buyerInterest: product.buyerInterest || 70,
      amount: Number(product.price || 100) * 10,
      timeline: [{ label: "Agent market review", checkpoint: db.profile.activeCheckpoint, createdAt: new Date().toISOString() }],
      createdAt: new Date().toISOString()
    };
    db.profile.orders.unshift(order);
    addTradeEvent(db.profile, { type: "agent.market_review", label: `${product.name} market review prepared by agent.` });
    logIntegration(db, {
      providerId: "trade-market",
      module: "AgriTrade",
      action: "agent.trade_market_review",
      detail: `Agent created market review order ${order.orderNumber} for ${product.name}.`,
      metadata: { orderId: order.id, productId: product.id }
    });
    return `Created ${order.orderNumber} market review for ${product.name}.`;
  }

  if (step.tool === "trade.buyer_contact") {
    const contact = createBuyerContactWorkflow(db, user, step.detail || "contact buyer");
    return `Prepared ${contact.channel} for ${contact.buyerName} about ${contact.productName}.`;
  }

  if (step.tool === "trade.wallet_payment") {
    ensureTradeProfile(db.profile);
    const tx = { id: crypto.randomUUID(), provider: "M-Pesa", amount: 120, type: "credit", status: "posted", createdAt: new Date().toISOString() };
    db.profile.wallet = Number(db.profile.wallet || 0) + tx.amount;
    db.profile.walletTransactions.unshift(tx);
    addTradeEvent(db.profile, { type: "agent.wallet_payment", label: `M-Pesa credit posted for $${tx.amount}.` });
    logIntegration(db, { providerId: "trade-payments", module: "AgriTrade", action: "agent.wallet_payment", detail: "Voice agent posted wallet payment.", metadata: { transactionId: tx.id, amount: tx.amount } });
    return `Posted M-Pesa wallet credit for ${tx.amount}.`;
  }

  if (step.tool === "trade.advance_order") {
    ensureTradeProfile(db.profile);
    const order = db.profile.orders[db.profile.orders.length - 1];
    if (!order) return executeAgentTool(db, user, { ...step, tool: "trade.market_review" });
    const activeRouteRecord = db.routes.find(item => item.id === order.routeId) || route;
    const stages = ["Order created", "Packed", "In transit", "Quality check", "Delivered"];
    order.stageIndex = Math.min(stages.length - 1, Number(order.stageIndex || 0) + 1);
    order.stage = stages[order.stageIndex];
    order.checkpointIndex = Math.min(activeRouteRecord.checkpoints.length - 1, Number(order.checkpointIndex || 0) + 1);
    order.checkpoint = activeRouteRecord.checkpoints[order.checkpointIndex];
    order.timeline = order.timeline || [];
    order.timeline.unshift({ label: order.stage, checkpoint: order.checkpoint, createdAt: new Date().toISOString() });
    db.profile.routeStage = order.stage;
    db.profile.activeCheckpoint = order.checkpoint;
    addTradeEvent(db.profile, { type: "agent.order_advanced", label: `${order.orderNumber} advanced to ${order.stage}.` });
    logIntegration(db, { providerId: "trade-logistics", module: "AgriTrade", action: "agent.order_advanced", detail: `${order.orderNumber} advanced by voice agent.`, metadata: { orderId: order.id, stage: order.stage } });
    return `Advanced ${order.orderNumber} to ${order.stage} at ${order.checkpoint}.`;
  }

  if (step.tool === "drone.field_scan") {
    const { scan } = createDroneScan(db, { source: "agent" });
    return `Completed ${scan.scanRef} for ${scan.productName} with ${scan.cropHealthScore}% crop health.`;
  }

  if (step.tool === "drone.flight_plan") {
    const mission = createDroneMission(db, { source: "agent" });
    return `Planned ${mission.missionRef} for ${mission.productName} with compliance checks ready.`;
  }

  if (step.tool === "drone.intervention_task") {
    const task = createFieldIntervention(db, { source: "agent" });
    return `Assigned ${task.taskRef} for ${task.productName}.`;
  }

  if (step.tool === "map.route_risk") {
    addMapInsight(db.profile, {
      type: "agent-route-risk",
      label: `Agent route risk for ${country.name}`,
      detail: `${route.name} checked at ${db.profile.activeCheckpoint}; coordinate learning, workforce, telehealth, and logistics actions before advancing.`,
      routeName: route.name,
      checkpoint: db.profile.activeCheckpoint
    });
    logIntegration(db, {
      providerId: "maps",
      module: "Maps",
      action: "agent.map_route_risk",
      detail: `Agent assessed ${route.name} at ${db.profile.activeCheckpoint}.`,
      metadata: { routeId: route.id, countryId: country.id }
    });
    return `Assessed route risk for ${route.name}.`;
  }

  if (step.tool === "ai.copilot") {
    const result = await runAi("copilot", country, route, db.profile);
    const run = recordAiRun(db, { type: "copilot", country, route, result, module: "AI" });
    return `Generated supervised AI recommendation ${run.id}.`;
  }

  if (step.tool === "integrations.test_all") return runPlatformActionByAgent(db, user, "integrations.test_all");
  if (step.tool === "admin.health_check") return runPlatformActionByAgent(db, user, "admin.health_check");
  if (step.tool === "profile.summary") return runPlatformActionByAgent(db, user, "profile.summary");

  throw new Error(`Unknown agent tool: ${step.tool}`);
}

async function executeAgentStepWithRetry(db, user, step, maxAttempts = 2) {
  let lastError = null;
  const providerByModule = {
    Learning: "learning-courses",
    Workforce: "workforce-jobs",
    Healthcare: "health-telehealth",
    AgriTrade: "trade-market",
    AgriTech: "field-drones",
    "Field Intelligence": "field-drones",
    Maps: "maps",
    AI: "openai"
  };
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const result = await executeAgentTool(db, user, step);
      logIntegration(db, {
        providerId: providerByModule[step.module] || "openai",
        module: step.module,
        action: `agent.${step.tool}`,
        detail: result,
        metadata: { stepId: step.id, attempts: attempt, executedBy: user.email }
      });
      return {
        ...step,
        status: "executed",
        attempts: attempt,
        result,
        error: null,
        executedAt: new Date().toISOString()
      };
    } catch (error) {
      lastError = error;
    }
  }
  logIntegration(db, {
    providerId: providerByModule[step.module] || "openai",
    module: step.module,
    action: `agent.${step.tool}`,
    status: "failed",
    detail: lastError?.message || "Agent step failed.",
    metadata: { stepId: step.id, attempts: maxAttempts, executedBy: user.email }
  });
  return {
    ...step,
    status: "failed",
    attempts: maxAttempts,
    result: "",
    error: lastError?.message || "Agent step failed.",
    executedAt: new Date().toISOString()
  };
}

function commandRecord(db, user, command, result) {
  ensureAiProfile(db.profile);
  addConversationTurn(db.profile, "user", command, { email: user.email });
  addConversationTurn(db.profile, "assistant", result.response, {
    intent: result.intent,
    status: result.status || "completed",
    redirectSection: result.metadata?.redirectSection || null
  });
  const memory = db.profile.agentMemory;
  const remembered = {
    id: crypto.randomUUID(),
    command,
    intent: result.intent,
    response: result.response,
    status: result.status || "completed",
    createdAt: new Date().toISOString()
  };
  memory.rememberedContexts = [remembered, ...(memory.rememberedContexts || [])].slice(0, 12);
  memory.lastCommand = command;
  memory.lastIntent = result.intent;
  memory.lastResponse = result.response;
  memory.lastStatus = result.status || "completed";
  memory.updatedAt = remembered.createdAt;
  const record = {
    id: crypto.randomUUID(),
    command,
    intent: result.intent,
    response: result.response,
    status: result.status || "completed",
    createdBy: user.email,
    createdAt: new Date().toISOString(),
    metadata: result.metadata || {}
  };
  db.profile.agentCommands.unshift(record);
  db.profile.agentCommands = db.profile.agentCommands.slice(0, 30);
  logIntegration(db, {
    providerId: "openai",
    module: "AI",
    action: "agent.command",
    status: record.status === "failed" ? "failed" : "success",
    detail: `${record.intent}: ${record.response}`,
    metadata: { commandId: record.id, command }
  });
  addActivity(db.profile, `Voice command: ${record.intent} - ${record.response}`);
  return record;
}

function agentBriefing(db, user, purpose = "government presentation") {
  ensureAiProfile(db.profile);
  ensureOperationsProfile(db.profile);
  const providers = runtimeProviders(db);
  const readiness = productionReadiness(providers);
  const { country, route } = activeContext(db);
  const latestPlan = (db.profile.agentPlans || [])[0];
  const latestExecution = (db.profile.agentExecutions || [])[0];
  const briefing = {
    id: crypto.randomUUID(),
    title: "Nexus Government Briefing",
    purpose,
    audience: "African government, rural development leaders, funders, and implementation partners",
    plainLanguageSummary: "AgriNexus is a multilingual AI operating platform that helps rural communities connect training, jobs, telehealth, farmer support, drone intelligence, trade, maps, and provider evidence from one guided command center.",
    whatNexusDoes: [
      "Listens to voice or typed instructions.",
      "Explains what it heard in plain language.",
      "Creates a supervised action plan across modules.",
      "Requests approval before high-impact execution.",
      "Runs learning, workforce, telehealth, agritech, trade, map, and AI workflows.",
      "Creates auditable records for leaders and partners."
    ],
    activeContext: {
      country: country.name,
      route: route.name,
      checkpoint: db.profile.activeCheckpoint,
      mission: db.profile.agentMemory.activeMission
    },
    productionReadiness: {
      readyCount: readiness.readyCount,
      total: readiness.total,
      status: readiness.status,
      nextSteps: readiness.nextSteps.slice(0, 6)
    },
    latestAgentWork: {
      planStatus: latestPlan?.status || "none",
      planGoal: latestPlan?.goal || "No active plan yet",
      executionStatus: latestExecution?.status || "none",
      executionSummary: latestExecution?.summary || "No execution yet"
    },
    callToAction: "Approve a rural pilot, connect live provider credentials, select partner regions, onboard field operators, and use the status page to verify production readiness.",
    createdBy: user.email,
    createdAt: new Date().toISOString()
  };
  db.profile.agentBriefings.unshift(briefing);
  db.profile.agentBriefings = db.profile.agentBriefings.slice(0, 20);
  db.profile.agentMemory.lastBriefingId = briefing.id;
  db.profile.agentMemory.lastSummary = briefing.plainLanguageSummary;
  db.profile.agentMemory.updatedAt = briefing.createdAt;
  addUsageEvent(db.profile, { module: "Agent AI", action: "agent.briefing_created", detail: briefing.title });
  logIntegration(db, {
    providerId: "openai",
    module: "AI",
    action: "agent.briefing_created",
    detail: `${briefing.title} created for ${purpose}.`,
    metadata: { briefingId: briefing.id, purpose }
  });
  addActivity(db.profile, `${briefing.title} created for ${purpose}.`);
  return briefing;
}

async function runLocalPilotStudio(db, user, scenario = "rural-access") {
  ensureOperationsProfile(db.profile);
  ensureAiProfile(db.profile);
  const scenarioConfig = {
    "rural-access": {
      title: "Rural Access Pilot",
      countryId: "nigeria",
      goal: "Run a rural access pilot connecting training, workforce, accessible telehealth, buyer contact, drone scan, map risk, and provider evidence."
    },
    "farmer-market": {
      title: "Farmer Market Pilot",
      countryId: "kenya",
      goal: "Run a farmer market pilot from field intelligence to buyer contact, workforce support, training evidence, route risk, and trade readiness."
    },
    "health-workforce": {
      title: "Health Workforce Pilot",
      countryId: "drc",
      goal: "Run a health workforce pilot with accessible telehealth, learning credentials, role application, mentor support, and care coordination evidence."
    }
  }[scenario] || {
    title: "Local Pilot Studio Run",
    countryId: db.profile.activeCountryId,
    goal: "Run a local AgriNexus pilot across learning, workforce, telehealth, trade, drones, maps, AI, and provider evidence."
  };
  const country = db.countries.find(item => item.id === scenarioConfig.countryId) || db.countries[0];
  db.profile.activeCountryId = country.id;
  db.profile.activeRouteId = country.routeId;
  const route = db.routes.find(item => item.id === country.routeId) || db.routes[0];
  db.profile.activeCheckpoint = route.checkpoints[0];
  const plan = buildAgentPlan(db, scenarioConfig.goal, user);
  db.profile.agentPlans.unshift(plan);
  db.profile.agentPlans = db.profile.agentPlans.slice(0, 12);
  const execution = await executeAgentPlanObject(db, user, plan, "Approved by Local Pilot Studio");
  const briefing = agentBriefing(db, user, `${scenarioConfig.title} briefing`);
  const run = {
    id: crypto.randomUUID(),
    title: scenarioConfig.title,
    scenario,
    country: country.name,
    route: route.name,
    status: execution.status === "completed" ? "pilot-ready" : "needs-review",
    summary: `${scenarioConfig.title} completed locally with ${execution.steps.filter(step => step.status === "executed").length}/${execution.steps.length} workflow steps executed.`,
    outcomes: [
      `${(db.profile.enrollments || []).length} learning enrollment(s), ${(db.profile.certificates || []).length} certificate(s)`,
      `${(db.profile.applications || []).length} workforce application(s), ${(db.profile.shiftSchedule || []).length} shift(s)`,
      `${(db.profile.healthIntakes || []).length} telehealth intake(s), ${(db.profile.carePlans || []).length} care plan(s)`,
      `${(db.profile.orders || []).length} trade order(s), ${(db.profile.buyerContacts || []).length} buyer contact(s)`,
      `${(db.profile.droneScans || []).length} drone scan(s), ${(db.profile.fieldInterventions || []).length} field task(s)`,
      `${(db.profile.integrationEvents || []).length} provider evidence event(s)`
    ],
    nextLiveEngines: productionReadiness(runtimeProviders(db)).nextSteps.slice(0, 6),
    briefingId: briefing.id,
    executionId: execution.id,
    createdBy: user.email,
    createdAt: new Date().toISOString()
  };
  db.profile.localPilotRuns.unshift(run);
  db.profile.localPilotRuns = db.profile.localPilotRuns.slice(0, 20);
  addUsageEvent(db.profile, { module: "Local Pilot Studio", action: "pilot.run", detail: run.summary });
  addNotification(db.profile, {
    module: "Local Pilot Studio",
    providerId: "openai",
    channel: "local-pilot",
    message: `${run.title} evidence report is ready.`,
    createdBy: user.name
  });
  logIntegration(db, {
    providerId: "openai",
    module: "Local Pilot Studio",
    action: "pilot.local_run_completed",
    detail: run.summary,
    metadata: { pilotRunId: run.id, executionId: execution.id, briefingId: briefing.id }
  });
  addActivity(db.profile, run.summary);
  return run;
}

function voiceRecord(db, user, type, detail, metadata = {}) {
  ensureAiProfile(db.profile);
  const record = {
    id: crypto.randomUUID(),
    type,
    detail,
    status: "completed",
    provider: type === "speech-to-text"
      ? (process.env.VOICE_STT_PROVIDER || "browser")
      : (process.env.VOICE_TTS_PROVIDER || "browser"),
    createdBy: user.email,
    createdAt: new Date().toISOString(),
    metadata
  };
  db.profile.voiceSessions.unshift(record);
  db.profile.voiceSessions = db.profile.voiceSessions.slice(0, 40);
  logIntegration(db, {
    providerId: type === "speech-to-text" ? "voice-stt" : "voice-tts",
    module: "AI",
    action: `voice.${type}`,
    detail,
    metadata: { voiceSessionId: record.id, ...metadata }
  });
  return record;
}

function deepVoiceIntent(lower) {
  const includesAny = words => words.some(word => lower.includes(word));
  if (includesAny(["complete lesson", "complete my lesson", "finish lesson", "finish my lesson", "next lesson"])) return { tool: "learning.complete_lesson", module: "Learning", action: "Complete lesson", section: "learning" };
  if (includesAny(["take quiz", "complete quiz", "start quiz", "quiz me"])) return { tool: "learning.quiz", module: "Learning", action: "Complete quiz", section: "learning" };
  if (includesAny(["certificate", "credential", "issue certificate"])) return { tool: "learning.certificate", module: "Learning", action: "Issue certificate", section: "learning" };
  if (lower.includes("caption") && includesAny(["lesson", "learning", "course"])) return { tool: "learning.access_caption", module: "Learning", action: "Prepare captions", section: "learning" };
  if (includesAny(["audio lesson", "screen reader", "large print"])) return { tool: "learning.access_visual", module: "Learning", action: "Prepare visual/audio supports", section: "learning" };
  if (includesAny(["offline packet", "low bandwidth lesson", "download lesson"])) return { tool: "learning.access_offline", module: "Learning", action: "Prepare offline packet", section: "learning" };
  if (includesAny(["start course", "begin course", "continue course", "open course", "training path"])) return { tool: "learning.start_or_continue", module: "Learning", action: "Advance learning", section: "learning" };

  if (includesAny(["build profile", "verify profile", "candidate profile"])) return { tool: "workforce.build_profile", module: "Workforce", action: "Verify profile", section: "workforce" };
  if (includesAny(["schedule interview", "book interview", "interview prep", "prepare interview"])) return { tool: "workforce.schedule_interview", module: "Workforce", action: "Schedule interview", section: "workforce" };
  if (includesAny(["assign mentor", "get a mentor", "mentor me"])) return { tool: "workforce.assign_mentor", module: "Workforce", action: "Assign mentor", section: "workforce" };
  if (includesAny(["schedule shift", "schedule my shift", "start shift", "next shift", "paid shift"])) return { tool: "workforce.schedule_shift", module: "Workforce", action: "Schedule shift", section: "workforce" };
  if ((includesAny(["apply", "application"]) && includesAny(["job", "role", "position", "workforce"]))) return { tool: "workforce.apply_role", module: "Workforce", action: "Apply to role", section: "workforce" };
  if (includesAny(["readiness gap", "match me", "match role", "find job"])) return { tool: "workforce.match_role", module: "Workforce", action: "Match role", section: "workforce" };

  if (includesAny(["telehealth intake", "health intake", "start intake", "open intake"])) return { tool: "health.intake", module: "Healthcare", action: "Start intake", section: "health" };
  if (includesAny(["connect representative", "human representative", "care representative"])) return { tool: "health.representative", module: "Healthcare", action: "Connect representative", section: "health" };
  if (includesAny(["caption relay", "captions for patient"])) return { tool: "health.caption", module: "Healthcare", action: "Start caption relay", section: "health" };
  if (includesAny(["notify caregiver", "call caregiver", "caregiver"])) return { tool: "health.caregiver", module: "Healthcare", action: "Notify caregiver", section: "health" };
  if (includesAny(["record consent", "privacy consent", "telehealth consent"])) return { tool: "health.consent", module: "Healthcare", action: "Record consent", section: "health" };
  if (includesAny(["capture vitals", "take vitals", "vitals"])) return { tool: "health.vitals", module: "Healthcare", action: "Capture vitals", section: "health" };
  if (includesAny(["create referral", "refer patient", "referral"])) return { tool: "health.referral", module: "Healthcare", action: "Create referral", section: "health" };
  if (includesAny(["schedule follow up", "follow-up", "followup", "callback"])) return { tool: "health.followup", module: "Healthcare", action: "Schedule follow-up", section: "health" };
  if (includesAny(["safety review", "review safety"])) return { tool: "health.safety", module: "Healthcare", action: "Run safety review", section: "health" };
  if (includesAny(["care plan", "careplan"])) return { tool: "health.careplan", module: "Healthcare", action: "Generate care plan", section: "health" };

  if ((includesAny(["buyer", "customer"]) && includesAny(["speak", "talk", "call", "message", "contact"]))) return { tool: "trade.buyer_contact", module: "AgriTrade", action: "Contact buyer", section: "trade" };
  if (includesAny(["create order", "buyer order", "market order", "sell crop"])) return { tool: "trade.market_review", module: "AgriTrade", action: "Create order", section: "trade" };
  if (includesAny(["advance order", "move order", "logistics handoff"])) return { tool: "trade.advance_order", module: "AgriTrade", action: "Advance order", section: "trade" };
  if (includesAny(["wallet", "payment", "mpesa", "m-pesa"])) return { tool: "trade.wallet_payment", module: "AgriTrade", action: "Post payment", section: "trade" };
  if (includesAny(["flight plan", "drone mission"])) return { tool: "drone.flight_plan", module: "AgriTech", action: "Plan drone mission", section: "trade" };
  if (includesAny(["drone scan", "scan field", "crop scan", "field scan"])) return { tool: "drone.field_scan", module: "AgriTrade", action: "Run drone scan", section: "trade" };
  if (includesAny(["field task", "intervention", "irrigation task", "pest task"])) return { tool: "drone.intervention_task", module: "AgriTech", action: "Assign field intervention", section: "trade" };

  if (includesAny(["route risk", "assess route", "map risk", "show route"])) return { tool: "map.route_risk", module: "Maps", action: "Assess route", section: "map" };
  if (includesAny(["test providers", "test provider engines", "test engines", "provider check", "engine check"])) return { tool: "integrations.test_all", module: "Integrations", action: "Test providers", section: "integrations" };
  if (includesAny(["admin health", "health check", "admin check"])) return { tool: "admin.health_check", module: "Admin", action: "Admin health check", section: "admin" };
  if (includesAny(["profile summary", "my profile", "unified profile", "show my record"])) return { tool: "profile.summary", module: "Profile", action: "Show profile", section: "profile" };
  if (includesAny(["ask ai", "copilot", "recommend", "what should i do"])) return { tool: "ai.copilot", module: "AI", action: "Run copilot", section: "agent" };
  return null;
}

function localTranslateText(text, targetLanguage) {
  const value = String(text || "");
  const language = targetLanguage || "en";
  if (language === "en") return value;
  const lower = value.toLowerCase();
  const voicePhrases = {
    fr: [
      [["telehealth", "intake"], "Votre admission de telesante est ouverte. AgriNexus a cree le dossier et le prochain suivi."],
      [["vitals"], "Les signes vitaux ont ete captures et ajoutes au dossier de telesante."],
      [["consent"], "Le consentement de telesante a ete enregistre."],
      [["referral"], "La reference de soins a ete creee."],
      [["follow-up"], "Le suivi a ete planifie."],
      [["buyer"], "Le contact acheteur est pret avec un message prepare pour votre produit."],
      [["application"], "AgriNexus a examine la candidature et a enregistre la prochaine etape de main-d'oeuvre."],
      [["lesson"], "La lecon suivante est terminee et la progression a ete mise a jour."],
      [["certificate"], "Le certificat a ete emis et ajoute au profil."],
      [["drone"], "Le flux drone est termine et les preuves terrain sont enregistrees."],
      [["provider"], "Les moteurs fournisseurs ont ete testes et les resultats sont enregistres."],
      [["profile"], "Le profil unifie est pret avec les informations principales."],
      [["opened"], "Espace ouvert. Vous pouvez continuer ici."]
    ],
    sw: [
      [["telehealth", "intake"], "Usajili wa afya kwa mbali umefunguliwa. AgriNexus imeunda rekodi na hatua inayofuata."],
      [["vitals"], "Vipimo muhimu vimechukuliwa na kuongezwa kwenye rekodi ya afya."],
      [["consent"], "Ridhaa ya huduma ya afya kwa mbali imerekodiwa."],
      [["referral"], "Rufaa ya huduma imeundwa."],
      [["follow-up"], "Ufuatiliaji umepangwa."],
      [["buyer"], "Mawasiliano na mnunuzi yako tayari pamoja na ujumbe wa bidhaa yako."],
      [["application"], "AgriNexus imekagua ombi la kazi na kurekodi hatua inayofuata."],
      [["lesson"], "Somo linalofuata limekamilika na maendeleo yamesasishwa."],
      [["certificate"], "Cheti kimetolewa na kuongezwa kwenye wasifu."],
      [["drone"], "Mtiririko wa droni umekamilika na ushahidi wa shamba umehifadhiwa."],
      [["provider"], "Mifumo ya watoa huduma imejaribiwa na matokeo yamehifadhiwa."],
      [["profile"], "Wasifu wa pamoja uko tayari na taarifa muhimu."],
      [["opened"], "Sehemu imefunguliwa. Unaweza kuendelea hapa."]
    ],
    ar: [
      [["telehealth", "intake"], "تم فتح إدخال الصحة عن بعد. أنشأ أجري نكسس السجل والخطوة التالية."],
      [["vitals"], "تم تسجيل العلامات الحيوية وإضافتها إلى ملف الصحة."],
      [["consent"], "تم تسجيل موافقة الصحة عن بعد."],
      [["referral"], "تم إنشاء الإحالة الصحية."],
      [["follow-up"], "تم جدولة المتابعة."],
      [["buyer"], "تم تجهيز التواصل مع المشتري ورسالة المنتج."],
      [["application"], "راجع أجري نكسس طلب العمل وسجل الخطوة التالية."],
      [["lesson"], "تم إكمال الدرس التالي وتحديث التقدم."],
      [["certificate"], "تم إصدار الشهادة وإضافتها إلى الملف."],
      [["drone"], "اكتمل مسار الدرون وتم حفظ أدلة الحقل."],
      [["provider"], "تم اختبار محركات الخدمة وحفظ النتائج."],
      [["profile"], "الملف الموحد جاهز مع المعلومات الأساسية."],
      [["opened"], "تم فتح القسم. يمكنك المتابعة هنا."]
    ]
  };
  const match = (voicePhrases[language] || []).find(([keys]) => keys.every(key => lower.includes(key)));
  if (match) return match[1];
  const labels = {
    fr: "[FR]",
    sw: "[SW]",
    ar: "[AR]"
  };
  return `${labels[language] || `[${language.toUpperCase()}]`} ${value}`;
}

async function translateDynamicContent(db, user, { text, targetLanguage, sourceLanguage = "en", context = "platform" }) {
  const runtime = providerRuntime("translation");
  let translatedText = localTranslateText(text, targetLanguage);
  let provider = "local-dictionary";
  if (runtime.mode !== "local-dictionary" && runtime.mode !== "sandbox" && runtime.webhookUrl && runtime.apiKey) {
    try {
      const response = await fetch(runtime.webhookUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${runtime.apiKey}`
        },
        body: JSON.stringify({ text, sourceLanguage, targetLanguage, context, userId: user.id })
      });
      const json = await response.json().catch(() => ({}));
      if (response.ok && json.translatedText) {
        translatedText = json.translatedText;
        provider = json.provider || runtime.mode;
      }
    } catch (error) {
      provider = "local-after-translation-error";
    }
  }
  logIntegration(db, {
    providerId: "translation",
    module: "AI",
    action: "translation.dynamic",
    detail: `Translated ${context} content to ${targetLanguage}.`,
    metadata: { sourceLanguage, targetLanguage, provider }
  });
  return { sourceText: text, translatedText, sourceLanguage, targetLanguage, provider };
}

async function executeAgentPlanObject(db, user, plan, note = "Approved from command center") {
  plan.status = "executing";
  plan.approvedBy = user.email;
  plan.approvedAt = new Date().toISOString();
  plan.executedBy = user.email;
  plan.executedAt = new Date().toISOString();
  const executedSteps = [];
  for (const step of plan.steps) {
    executedSteps.push(await executeAgentStepWithRetry(db, user, step, 2));
  }
  plan.steps = executedSteps;
  const failedSteps = executedSteps.filter(step => step.status === "failed");
  plan.status = failedSteps.length ? "needs-review" : "executed";
  const execution = {
    id: crypto.randomUUID(),
    planId: plan.id,
    goal: plan.goal,
    status: failedSteps.length ? "needs-review" : "completed",
    summary: failedSteps.length
      ? `Agent executed ${executedSteps.length - failedSteps.length}/${executedSteps.length} supervised steps; ${failedSteps.length} need operator review.`
      : `Agent autonomously executed ${executedSteps.length} supervised steps across learning, workforce, health, trade, maps, and AI.`,
    steps: executedSteps.map(step => ({ module: step.module, tool: step.tool, action: step.action, status: step.status, attempts: step.attempts, result: step.result, error: step.error })),
    note,
    createdAt: new Date().toISOString()
  };
  db.profile.agentExecutions.unshift(execution);
  db.profile.agentExecutions = db.profile.agentExecutions.slice(0, 20);
  db.profile.agentMemory = {
    ...(db.profile.agentMemory || {}),
    lastPlanId: plan.id,
    lastExecutionId: execution.id,
    lastGoal: plan.goal,
    lastStatus: execution.status,
    lastSummary: execution.summary,
    lastSteps: execution.steps.map(step => ({ module: step.module, action: step.action, status: step.status })),
    updatedAt: new Date().toISOString()
  };
  addActivity(db.profile, execution.summary);
  return execution;
}

function commandGoal(command) {
  return command
    .replace(/^(please\s+)?(create|build|make|generate)\s+(an?\s+)?(agent\s+)?plan( for| to)?/i, "")
    .replace(/^(please\s+)?plan( for| to)?/i, "")
    .trim();
}

function addConversationTurn(profile, role, text, metadata = {}) {
  ensureAiProfile(profile);
  if (!String(text || "").trim()) return null;
  const turn = {
    id: crypto.randomUUID(),
    role,
    text: String(text || "").trim(),
    metadata,
    createdAt: new Date().toISOString()
  };
  profile.agentConversation.push(turn);
  profile.agentConversation = profile.agentConversation.slice(-50);
  return turn;
}

function isAffirmativeCommand(lower) {
  return /^(yes|yep|yeah|ok|okay|confirm|approved|approve|do it|run it|go ahead|proceed|please do|submit it|send it)$/i.test(String(lower || "").trim());
}

function isNegativeCommand(lower) {
  return /^(no|nope|cancel|stop|not now|hold|wait|do not|don't)$/i.test(String(lower || "").trim());
}

function sectionForAgentModule(module) {
  return {
    Learning: "learning",
    Workforce: "workforce",
    Healthcare: "health",
    AgriTrade: "trade",
    AgriTech: "trade",
    Maps: "maps",
    AI: "agent",
    Integrations: "integrations",
    Admin: "admin",
    Profile: "profile"
  }[module] || "agent";
}

function stageAgentAction(db, command, action) {
  ensureAiProfile(db.profile);
  const pending = {
    id: crypto.randomUUID(),
    command,
    createdAt: new Date().toISOString(),
    ...action,
    section: action.section || sectionForAgentModule(action.module)
  };
  db.profile.agentPendingAction = pending;
  db.profile.agentMemory.lastStatus = "waiting-for-confirmation";
  db.profile.agentMemory.lastSummary = `I can ${String(pending.action || "run this workflow").toLowerCase()}. Say or type yes to continue, or no to cancel.`;
  db.profile.agentMemory.updatedAt = pending.createdAt;
  return {
    intent: "conversation.pending_action",
    response: `I heard you. I can ${String(pending.action || "run this workflow").toLowerCase()} in ${pending.module || "AgriNexus"}. Say or type "yes" to continue, or "no" to cancel.`,
    status: "needs-confirmation",
    metadata: {
      conversationMode: true,
      pendingActionId: pending.id,
      redirectSection: pending.section,
      tool: pending.tool || null
    }
  };
}

async function executePendingAgentAction(db, user, pending) {
  if (!pending) return { intent: "conversation.no_pending_action", response: "There is no pending action to confirm.", status: "needs-input" };
  db.profile.agentPendingAction = null;
  if (pending.kind === "buyer-contact") {
    const contact = createBuyerContactWorkflow(db, user, pending.command || "Contact buyer");
    return {
      intent: "trade.buyer_contact",
      response: `Done. I prepared a ${contact.channel} workflow for ${contact.buyerName} about ${contact.productName}. Message draft: ${contact.message}`,
      status: "completed",
      metadata: { conversationMode: true, redirectSection: "trade", contactId: contact.id, orderId: contact.orderId, channel: contact.channel }
    };
  }
  if (pending.kind === "workforce-application") {
    const result = submitBestWorkforceApplication(db, user, pending.command || "Apply for role");
    return {
      intent: result.status === "completed" ? "workforce.application_submitted" : "workforce.application_help",
      response: `Done. ${result.response}`,
      status: result.status,
      metadata: { conversationMode: true, redirectSection: "workforce", roleId: result.role?.id || null, applicationId: result.application?.id || null, readiness: result.readiness || null }
    };
  }
  if (pending.tool) {
    const step = {
      id: crypto.randomUUID(),
      module: pending.module,
      tool: pending.tool,
      action: pending.action,
      detail: `Confirmed conversation command: ${pending.command}`,
      status: "pending-approval"
    };
    const result = await executeAgentStepWithRetry(db, user, step, 2);
    return {
      intent: pending.tool,
      response: `Done. ${result.result || result.error || `${pending.action} completed.`}`,
      status: result.status === "executed" ? "completed" : "needs-review",
      metadata: { conversationMode: true, redirectSection: pending.section || sectionForAgentModule(pending.module), tool: pending.tool, attempts: result.attempts }
    };
  }
  return { intent: "conversation.no_pending_action", response: "I could not find the pending workflow details. Please ask again.", status: "needs-input" };
}

async function runAgentCommand(db, user, command, options = {}) {
  ensureAiProfile(db.profile);
  const text = String(command || "")
    .replace(/^\s*(hey\s+)?(nexus|jarvis|agrinexus|coach)\s*[,:\-]?\s*/i, "")
    .trim();
  const lower = text.toLowerCase();
  if (!text) return { intent: "empty-command", response: "Give me a command and I will route it.", status: "needs-input" };
  const wantsExecute = options.confirm === true || lower.includes("execute") || lower.includes("run it") || lower.includes("do it");
  const conversational = options.conversational === true;
  const pendingAction = db.profile.agentPendingAction;

  if (pendingAction && isAffirmativeCommand(lower)) {
    const result = await executePendingAgentAction(db, user, pendingAction);
    db.profile.agentMemory.lastStatus = result.status || "completed";
    db.profile.agentMemory.lastSummary = result.response;
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    return { ...result, intent: result.intent === "conversation.no_pending_action" ? result.intent : "conversation.confirmed" };
  }

  if (pendingAction && isNegativeCommand(lower)) {
    db.profile.agentPendingAction = null;
    db.profile.agentMemory.lastStatus = "canceled";
    db.profile.agentMemory.lastSummary = "Pending action canceled. You can ask for a new workflow any time.";
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    return {
      intent: "conversation.canceled",
      response: "Canceled. I did not run that workflow. Tell me what you want to do next.",
      status: "canceled",
      metadata: { conversationMode: true }
    };
  }

  if (conversational && (lower === "help" || lower.includes("what can you do") || lower.includes("i need help") || lower.includes("help me"))) {
    db.profile.agentPendingAction = null;
    db.profile.agentMemory.lastStatus = "guiding-user";
    db.profile.agentMemory.lastSummary = "I can guide Health, Jobs, Training, Farming and Trade, Drones, Maps, Provider Checks, or a Full Mission.";
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    return {
      intent: "conversation.guided_menu",
      response: "I can help with Health, Jobs, Training, Farming and Trade, Drones, Maps, Provider Checks, or a Full Mission. Tell me the area, for example: health, jobs, training, buyer, drone, map, or run full mission.",
      status: "needs-input",
      metadata: { conversationMode: true }
    };
  }

  if (conversational) {
    const guidedShortcut = {
      health: { module: "Healthcare", tool: "health.accessibility_review", action: "Prepare accessible telehealth", section: "health" },
      healthcare: { module: "Healthcare", tool: "health.accessibility_review", action: "Prepare accessible telehealth", section: "health" },
      telehealth: { module: "Healthcare", tool: "health.accessibility_review", action: "Prepare accessible telehealth", section: "health" },
      jobs: { kind: "workforce-application", module: "Workforce", action: "apply for the best matched role", section: "workforce" },
      job: { kind: "workforce-application", module: "Workforce", action: "apply for the best matched role", section: "workforce" },
      workforce: { kind: "workforce-application", module: "Workforce", action: "apply for the best matched role", section: "workforce" },
      training: { module: "Learning", tool: "learning.start_or_continue", action: "Advance learning", section: "learning" },
      learning: { module: "Learning", tool: "learning.start_or_continue", action: "Advance learning", section: "learning" },
      buyer: { kind: "buyer-contact", module: "AgriTrade", action: "prepare buyer contact", section: "trade" },
      trade: { module: "AgriTrade", tool: "trade.market_review", action: "Review market", section: "trade" },
      drone: { module: "AgriTech", tool: "drone.field_scan", action: "Run drone scan", section: "trade" },
      drones: { module: "AgriTech", tool: "drone.field_scan", action: "Run drone scan", section: "trade" },
      map: { module: "Maps", tool: "map.route_risk", action: "Assess route", section: "maps" },
      maps: { module: "Maps", tool: "map.route_risk", action: "Assess route", section: "maps" },
      provider: { module: "Integrations", tool: "integrations.test_all", action: "Test provider engines", section: "integrations" },
      providers: { module: "Integrations", tool: "integrations.test_all", action: "Test provider engines", section: "integrations" },
      engines: { module: "Integrations", tool: "integrations.test_all", action: "Test provider engines", section: "integrations" }
    }[lower];
    if (guidedShortcut) return stageAgentAction(db, text, guidedShortcut);
  }

  if ((lower.includes("buyer") || lower.includes("customer")) && (lower.includes("speak") || lower.includes("talk") || lower.includes("call") || lower.includes("message") || lower.includes("contact"))) {
    if (conversational && !wantsExecute) {
      return stageAgentAction(db, text, { kind: "buyer-contact", module: "AgriTrade", action: "prepare buyer contact", section: "trade" });
    }
    const contact = createBuyerContactWorkflow(db, user, text);
    db.profile.agentMemory.lastStatus = "buyer-contact-ready";
    db.profile.agentMemory.lastSummary = `Prepared ${contact.channel} with ${contact.buyerName} for ${contact.productName}.`;
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    return {
      intent: "trade.buyer_contact",
      response: `I opened AgriTrade and prepared a ${contact.channel} workflow for ${contact.buyerName} about ${contact.productName}. Message draft: ${contact.message}`,
      status: "needs-confirmation",
      metadata: { redirectSection: "trade", contactId: contact.id, orderId: contact.orderId, channel: contact.channel }
    };
  }

  if ((lower.includes("apply") || lower.includes("application")) && (lower.includes("job") || lower.includes("role") || lower.includes("workforce") || lower.includes("position"))) {
    if (conversational && !wantsExecute) {
      return stageAgentAction(db, text, { kind: "workforce-application", module: "Workforce", action: "apply for the best matched role", section: "workforce" });
    }
    const result = submitBestWorkforceApplication(db, user, text);
    db.profile.agentMemory.lastStatus = result.status;
    db.profile.agentMemory.lastSummary = result.response;
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    return {
      intent: result.status === "completed" ? "workforce.application_submitted" : "workforce.application_help",
      response: result.response,
      status: result.status,
      metadata: {
        redirectSection: "workforce",
        roleId: result.role?.id || null,
        applicationId: result.application?.id || null,
        readiness: result.readiness || null
      }
    };
  }

  const deepIntent = deepVoiceIntent(lower);
  if (deepIntent) {
    if (conversational && !wantsExecute) {
      return stageAgentAction(db, text, { module: deepIntent.module, tool: deepIntent.tool, action: deepIntent.action, section: deepIntent.section });
    }
    const step = {
      id: crypto.randomUUID(),
      module: deepIntent.module,
      tool: deepIntent.tool,
      action: deepIntent.action,
      detail: `Voice command: ${text}`,
      status: "pending-approval"
    };
    const result = await executeAgentStepWithRetry(db, user, step, 2);
    db.profile.agentMemory.lastStatus = result.status === "executed" ? "completed" : "needs-review";
    db.profile.agentMemory.lastSummary = result.result || result.error || `${deepIntent.action} completed.`;
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    return {
      intent: deepIntent.tool,
      response: result.result || result.error || `${deepIntent.action} completed.`,
      status: result.status === "executed" ? "completed" : "needs-review",
      metadata: { redirectSection: deepIntent.section, tool: deepIntent.tool, attempts: result.attempts }
    };
  }

  if (lower.includes("help") || lower.includes("what can you do")) {
    return {
      intent: "capability-summary",
      response: "I can listen by voice or text, remember the active mission, explain what I heard, create approved action plans, run workflows, prepare government briefings, advance learning, match workforce roles, prepare accessible telehealth, review trade, run drone missions, assess maps, test providers, and report readiness."
    };
  }

  if (lower.includes("briefing") || lower.includes("government") || lower.includes("ministry") || lower.includes("presentation") || lower.includes("report")) {
    const briefing = agentBriefing(db, user, text || "government presentation");
    return {
      intent: "government-briefing",
      response: `${briefing.title} is ready. Summary: ${briefing.plainLanguageSummary}`,
      metadata: { briefingId: briefing.id, readiness: briefing.productionReadiness }
    };
  }

  if (lower.includes("remember") || lower.startsWith("set mission") || lower.startsWith("our mission")) {
    db.profile.agentMemory.activeMission = text.replace(/^remember\s+/i, "") || db.profile.agentMemory.activeMission || "rural transformation";
    db.profile.agentMemory.activeAudience = lower.includes("government") ? "government" : db.profile.agentMemory.activeAudience || "government";
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    return {
      intent: "memory-updated",
      response: `I will remember this mission: ${db.profile.agentMemory.activeMission}.`,
      metadata: { memory: db.profile.agentMemory }
    };
  }

  if (lower.includes("status") || lower.includes("readiness") || lower.includes("what is left")) {
    const providers = runtimeProviders(db);
    const readiness = productionReadiness(providers);
    const automation = automationReadiness(db, providers);
    return {
      intent: "readiness-summary",
      response: `Production readiness is ${readiness.readyCount}/${readiness.total}. Automation readiness is ${automation.readyCount}/${automation.total}. Latest agent plan is ${(db.profile.agentPlans || [])[0]?.status || "none"}.`,
      metadata: { readiness: readiness.status, automation: automation.status }
    };
  }

  if ((lower.includes("buyer") || lower.includes("customer")) && (lower.includes("speak") || lower.includes("talk") || lower.includes("call") || lower.includes("message") || lower.includes("contact"))) {
    const contact = createBuyerContactWorkflow(db, user, text);
    db.profile.agentMemory.lastStatus = "buyer-contact-ready";
    db.profile.agentMemory.lastSummary = `Prepared ${contact.channel} with ${contact.buyerName} for ${contact.productName}.`;
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    return {
      intent: "trade.buyer_contact",
      response: `I opened AgriTrade and prepared a ${contact.channel} workflow for ${contact.buyerName} about ${contact.productName}. Message draft: ${contact.message}`,
      status: "needs-confirmation",
      metadata: { redirectSection: "trade", contactId: contact.id, orderId: contact.orderId, channel: contact.channel }
    };
  }

  if ((lower.includes("apply") || lower.includes("application")) && (lower.includes("job") || lower.includes("role") || lower.includes("workforce") || lower.includes("position"))) {
    const result = submitBestWorkforceApplication(db, user, text);
    db.profile.agentMemory.lastStatus = result.status;
    db.profile.agentMemory.lastSummary = result.response;
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    return {
      intent: result.status === "completed" ? "workforce.application_submitted" : "workforce.application_help",
      response: result.response,
      status: result.status,
      metadata: {
        redirectSection: "workforce",
        roleId: result.role?.id || null,
        applicationId: result.application?.id || null,
        readiness: result.readiness || null
      }
    };
  }

  if ((lower.includes("create") && lower.includes("plan")) || lower.startsWith("plan ") || lower.includes("onboard") || lower.includes("farmer") || lower.includes("rural pilot")) {
    const goal = commandGoal(text) || text || "Create an AgriNexus cross-module plan.";
    const plan = buildAgentPlan(db, goal, user);
    db.profile.agentPlans.unshift(plan);
    db.profile.agentPlans = db.profile.agentPlans.slice(0, 12);
    logIntegration(db, {
      providerId: "openai",
      module: "AI",
      action: "agent.plan_created",
      detail: `Agent plan created with ${plan.steps.length} tool steps from command.`,
      metadata: { planId: plan.id, goal }
    });
    db.profile.agentMemory.lastGoal = goal;
    db.profile.agentMemory.lastPlanId = plan.id;
    db.profile.agentMemory.lastStatus = "awaiting-approval";
    db.profile.agentMemory.lastSummary = `I heard: ${goal}. I created ${plan.steps.length} supervised steps and I am waiting for approval before execution.`;
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    return { intent: "create-agent-plan", response: `I heard: ${goal}. I created an agent plan with ${plan.steps.length} supervised tool steps. It is waiting for approval.`, status: "awaiting-approval", metadata: { planId: plan.id, steps: plan.steps.length } };
  }

  if (lower.includes("execute") && lower.includes("plan")) {
    const plan = db.profile.agentPlans[0];
    if (!plan) return { intent: "execute-agent-plan", response: "Create an agent plan first.", status: "needs-plan" };
    const execution = await executeAgentPlanObject(db, user, plan, options.note || "Approved from voice command");
    return { intent: "execute-agent-plan", response: execution.summary, status: execution.status, metadata: { planId: plan.id, executionId: execution.id } };
  }

  if (lower.includes("autonomous") || lower.includes("full mission") || lower.includes("run everything") || lower.includes("jarvis")) {
    const goal = text || "Run the full AgriNexus cross-module mission.";
    const plan = buildAgentPlan(db, goal, user);
    db.profile.agentPlans.unshift(plan);
    db.profile.agentPlans = db.profile.agentPlans.slice(0, 12);
    const execution = await executeAgentPlanObject(db, user, plan, options.note || "Approved full mission from command center");
    return { intent: "full-agent-mission", response: execution.summary, status: execution.status, metadata: { planId: plan.id, executionId: execution.id, steps: execution.steps.length } };
  }

  const toolByCommand = [
    { keys: ["lesson", "course", "learning", "training"], tool: "learning.start_or_continue", module: "Learning", action: "Advance learning" },
    { keys: ["workforce", "role", "job", "candidate", "application"], tool: "workforce.match_role", module: "Workforce", action: "Match workforce role" },
    { keys: ["telehealth", "health", "patient", "intake", "care", "accessibility", "caption", "caregiver"], tool: "health.accessibility_review", module: "Healthcare", action: "Prepare accessible telehealth" },
    { keys: ["flight plan", "drone mission", "airspace"], tool: "drone.flight_plan", module: "AgriTech", action: "Plan drone mission" },
    { keys: ["intervention", "field task", "irrigation", "pest"], tool: "drone.intervention_task", module: "AgriTech", action: "Assign field intervention" },
    { keys: ["drone", "field scan", "crop"], tool: "drone.field_scan", module: "AgriTrade", action: "Run drone scan" },
    { keys: ["trade", "market", "buyer", "order"], tool: "trade.market_review", module: "AgriTrade", action: "Review market" },
    { keys: ["map", "route", "risk"], tool: "map.route_risk", module: "Maps", action: "Assess route" },
    { keys: ["copilot", "ai", "question", "recommend"], tool: "ai.copilot", module: "AI", action: "Run copilot" }
  ];
  const matched = toolByCommand.find(item => item.keys.some(key => lower.includes(key)));
  if (matched) {
    if (!wantsExecute && (options.stageOnly || conversational)) {
      return stageAgentAction(db, text, { module: matched.module, tool: matched.tool, action: matched.action, section: sectionForAgentModule(matched.module) });
    }
    const step = { id: crypto.randomUUID(), module: matched.module, tool: matched.tool, action: matched.action, detail: `Command: ${text}`, status: "pending-approval" };
    const result = await executeAgentStepWithRetry(db, user, step, 2);
    return { intent: matched.tool, response: result.result || result.error || `${matched.action} completed.`, status: result.status === "executed" ? "completed" : "needs-review", metadata: { tool: matched.tool, attempts: result.attempts } };
  }

  const { country, route } = activeContext(db);
  const aiResult = await runAi("copilot", country, route, db.profile);
  const run = recordAiRun(db, { type: "copilot", country, route, result: aiResult, module: "AI" });
  return { intent: "ai-question", response: run.text, metadata: { runId: run.id, provider: run.provider } };
}

function aiModuleForType(type, fallback = "AI") {
  const moduleByType = {
    tutor: "Learning",
    quizgen: "Learning",
    "workforce-coach": "Workforce",
    "interview-prep": "Workforce",
    triage: "Healthcare",
    careplan: "Healthcare",
    inspector: "Healthcare",
    "trade-advisor": "AgriTrade",
    price: "AgriTrade",
    route: "Maps",
    command: "AI",
    copilot: "AI"
  };
  return moduleByType[type] || fallback;
}

function fallbackAi(type, country, route, profile) {
  const responses = {
    tutor: `AI tutor recommends the next learner action: review the active course module, complete the lesson check, and connect the outcome to workforce readiness before moving to the quiz.`,
    quizgen: `AI quiz builder recommends three practical checks: explain the workflow, identify the provider evidence created, and choose the safest next operator action.`,
    "workforce-coach": `AI workforce coach recommends closing readiness gaps first, then preparing the candidate for the best eligible role using certificates, interview status, and mentor support.`,
    "interview-prep": `AI interview prep recommends practicing a short story about training completed, operational reliability, and how the candidate would handle a field workflow escalation.`,
    triage: `AI triage assistant recommends classifying the active ${country.name} case by heat, queue pressure, risk, and representative availability before drafting care guidance.`,
    "trade-advisor": `AI trade advisor recommends reviewing buyer interest, wallet readiness, route checkpoint status, and provider evidence before advancing the next order.`,
    copilot: `AI copilot recommends the next best action across AgriNexus: verify learning progress, keep workforce placement moving, review active health risk, advance the trade route, and confirm provider evidence.`,
    price: `Price AI recommends holding premium lots on ${route.name} while buyer demand is strongest. Prioritize verified buyers, staged release, and route-aware pricing.`,
    soil: `${country.name} soil profile needs moderate support before the next planting cycle. Recommend field sampling, irrigation review, and input planning by district.`,
    disease: `No critical disease warning for ${country.name}; continue targeted monitoring and route-specific crop inspection at ${profile.activeCheckpoint}.`,
    route: `Route risk AI recommends prioritizing ${profile.activeCheckpoint} on ${route.name} because ${country.risk.toLowerCase()} operating risk may affect timing.`,
    careplan: `Care plan for ${country.name}: monitor heat index ${country.heat}C, keep queue status visible, and escalate high-risk cases to a representative.`,
    inspector: `Map inspector confirms ${country.facilities} facilities, ${country.queue.toLowerCase()}, and ${route.checkpoints.length} checkpoints on ${route.name}. Keep field teams focused on ${profile.activeCheckpoint}.`,
    command: `Command center synchronized health, trade, workforce, wallet, and route data for ${country.name}.`
  };
  return {
    text: responses[type] || responses.command,
    provider: "offline-simulation",
    model: null
  };
}

function aiPrompt(type, country, route, profile) {
  return [
    "You are AgriNexus AI, an operations assistant for agriculture, health access, workforce readiness, wallet operations, logistics, and field intelligence.",
    "Return one concise operator-facing recommendation in 2-4 sentences. Be specific, practical, and avoid claiming real-world data beyond the provided context.",
    `Task: ${type}`,
    `Country: ${country.name}`,
    `Program status: ${country.status}`,
    `Patients: ${country.patients}`,
    `Facilities: ${country.facilities}`,
    `Health risk: ${country.risk}`,
    `Heat index: ${country.heat}C`,
    `Queue: ${country.queue}`,
    `Route: ${route.name}`,
    `Checkpoint: ${profile.activeCheckpoint}`,
    `Route stage: ${profile.routeStage}`,
    `Readiness: ${profile.readiness}%`,
    `Learning path: ${profile.learningPath || profile.careerTrack || "Unknown"}`,
    `Certificates: ${(profile.certificates || []).length}`,
    `Applications: ${(profile.applications || []).length}`,
    `Interviews: ${profile.interviews || 0}`,
    `Health intakes: ${(profile.healthIntakes || []).length}`,
    `Care plans: ${(profile.carePlans || []).length}`,
    `Orders: ${profile.orders.length}`,
    `Wallet: $${profile.wallet}`
  ].join("\n");
}

function extractResponseText(payload) {
  if (typeof payload.output_text === "string" && payload.output_text.trim()) return payload.output_text.trim();
  const chunks = [];
  for (const item of payload.output || []) {
    for (const content of item.content || []) {
      if (content.type === "output_text" && content.text) chunks.push(content.text);
      if (content.type === "text" && content.text) chunks.push(content.text);
    }
  }
  return chunks.join("\n").trim();
}

async function runAi(type, country, route, profile) {
  if (process.env.AI_PROVIDER === "webhook" && process.env.AI_WEBHOOK_URL) {
    const fallback = fallbackAi(type, country, route, profile);
    try {
      const response = await fetch(process.env.AI_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          ...(process.env.AI_PROVIDER_API_KEY ? { authorization: `Bearer ${process.env.AI_PROVIDER_API_KEY}` } : {})
        },
        body: JSON.stringify({
          type,
          prompt: aiPrompt(type, country, route, profile),
          context: {
            country,
            route,
            activeCheckpoint: profile.activeCheckpoint,
            routeStage: profile.routeStage,
            readiness: profile.readiness,
            wallet: profile.wallet
          }
        })
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        if (REQUIRE_LIVE_SERVICES) throw new Error(`Live AI webhook failed: ${payload.error || response.statusText}`);
        fallback.provider = "offline-after-local-ai-error";
        fallback.error = payload.error || response.statusText;
        return fallback;
      }
      return {
        text: payload.text || payload.output_text || fallback.text,
        provider: "local-ai-webhook",
        model: payload.model || "agrinexus-local-ai",
        responseId: payload.id || null
      };
    } catch (error) {
      if (REQUIRE_LIVE_SERVICES) throw error;
      fallback.provider = "offline-after-local-ai-error";
      fallback.error = error.message;
      return fallback;
    }
  }

  if (!process.env.OPENAI_API_KEY) {
    if (REQUIRE_LIVE_SERVICES) throw new Error("Live AI is required. Set OPENAI_API_KEY or configure AI_PROVIDER=webhook with credentials.");
    return fallbackAi(type, country, route, profile);
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      model: AI_MODEL,
      input: aiPrompt(type, country, route, profile),
      max_output_tokens: 260
    })
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    if (REQUIRE_LIVE_SERVICES) throw new Error(`OpenAI request failed: ${payload.error?.message || response.statusText}`);
    const fallback = fallbackAi(type, country, route, profile);
    fallback.text += ` OpenAI request failed, so offline guidance is shown.`;
    fallback.provider = "offline-after-openai-error";
    fallback.error = payload.error?.message || response.statusText;
    return fallback;
  }

  return {
    text: extractResponseText(payload) || fallbackAi(type, country, route, profile).text,
    provider: "openai",
    model: AI_MODEL,
    responseId: payload.id || null
  };
}

async function api(req, res, url) {
  const db = await readDb();
  const user = currentUser(req, db);

  if (url.pathname === "/api/healthz" && req.method === "GET") {
    const status = integrationStatus(db);
    return send(res, 200, {
      ok: status.ok,
      service: "agrinexus",
      mode: process.env.NODE_ENV || "development",
      port: PORT,
      strictLiveMode: REQUIRE_LIVE_SERVICES,
      checks: {
        database: status.providers.find(provider => provider.id === "database")?.status || "unknown",
        ai: status.providers.find(provider => provider.id === "openai")?.mode || "unknown",
        readiness: status.readiness.status,
        readyCount: status.readiness.readyCount,
        total: status.readiness.total,
        liveGaps: status.liveGaps.length
      },
      timestamp: new Date().toISOString()
    });
  }

  if ((url.pathname === "/api/integrations" || url.pathname === "/api/readiness") && req.method === "GET") {
    return send(res, 200, integrationStatus(db));
  }

  if (url.pathname === "/api/engines/manifest" && req.method === "GET") {
    return send(res, 200, liveEngineManifest(db));
  }

  if (url.pathname === "/api/production/complete-check" && req.method === "GET") {
    const providers = runtimeProviders(db);
    return send(res, 200, productionCompleteness(db, providers));
  }

  if (url.pathname === "/api/login" && req.method === "POST") {
    const body = await readBody(req);
    const found = db.users.find(item => item.email === body.email && item.password === body.password);
    if (!found) return send(res, 401, { error: "Invalid demo credentials" });
    const sid = crypto.randomBytes(24).toString("hex");
    sessions.set(sid, found.id);
    return send(res, 200, publicState(db, found), { "set-cookie": `agrinexus_sid=${sid}; HttpOnly; SameSite=Lax; Path=/` });
  }

  if (url.pathname === "/api/logout" && req.method === "POST") {
    const sid = parseCookies(req).agrinexus_sid;
    if (sid) sessions.delete(sid);
    return send(res, 200, { ok: true }, { "set-cookie": "agrinexus_sid=; Max-Age=0; Path=/" });
  }

  if (url.pathname === "/api/auth/password-reset" && req.method === "POST") {
    const body = await readBody(req);
    const email = String(body.email || "").trim().toLowerCase();
    if (!email) return send(res, 400, { error: "Email is required" });
    const resetEvent = {
      providerId: "auth-password-reset",
      module: "Platform",
      action: "auth.password_reset_requested",
      detail: `Password reset requested for ${email}.`,
      metadata: { email }
    };
    const delivery = await dispatchProviderWebhook(db, resetEvent).catch(error => ({ attempted: true, ok: false, status: "dispatch-error", error: error.message }));
    logIntegration(db, {
      ...resetEvent,
      status: delivery.ok ? "success" : "needs-credentials",
      metadata: { email, delivery },
      dispatch: false
    });
    addActivity(db.profile, `Password reset requested for ${email}.`);
    await writeDb(db);
    return send(res, 200, { ok: true, status: delivery.ok ? "sent" : "queued-needs-provider" });
  }

  if (!user) return send(res, 401, { error: "Sign in required" });

  if (url.pathname === "/api/state" && req.method === "GET") {
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/onboarding/start" && req.method === "POST") {
    const body = await readBody(req);
    ensureOperationsProfile(db.profile);
    const scenario = String(body.scenario || "first-live-pilot").trim();
    const run = {
      id: crypto.randomUUID(),
      scenario,
      owner: user.email,
      status: "active",
      steps: [
        { id: "tour-dashboard", title: "Review command dashboard", status: "ready", action: "Open dashboard and check live context." },
        { id: "tour-learning", title: "Run learning workflow", status: "ready", action: "Start course or complete lesson." },
        { id: "tour-workforce", title: "Run workforce workflow", status: "ready", action: "Build profile, apply for role, or schedule support." },
        { id: "tour-health", title: "Run telehealth workflow", status: "ready", action: "Start intake, consent, vitals, referral, and follow-up." },
        { id: "tour-trade", title: "Run agritech/trade workflow", status: "ready", action: "Plan drone mission, scan field, assign task, and create order." },
        { id: "tour-admin", title: "Confirm admin readiness", status: "ready", action: "Run health check, provider tests, and review production gaps." }
      ],
      createdAt: new Date().toISOString()
    };
    db.profile.onboardingRuns.unshift(run);
    db.profile.onboardingRuns = db.profile.onboardingRuns.slice(0, 20);
    addUsageEvent(db.profile, { module: "Onboarding", action: "onboarding.started", detail: `${scenario} onboarding run started by ${user.email}.` });
    logIntegration(db, {
      providerId: "auth-users",
      module: "Platform",
      action: "onboarding.started",
      detail: `${scenario} onboarding run started.`,
      metadata: { onboardingId: run.id, owner: user.email }
    });
    addActivity(db.profile, `Onboarding started: ${scenario}.`);
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/support/ticket" && req.method === "POST") {
    const body = await readBody(req);
    ensureOperationsProfile(db.profile);
    const ticket = {
      id: crypto.randomUUID(),
      ticketNumber: `AN-SUP-${String(db.profile.supportTickets.length + 1).padStart(4, "0")}`,
      subject: String(body.subject || "Platform support request").trim(),
      module: String(body.module || "Platform").trim(),
      priority: String(body.priority || "standard").trim(),
      status: "open",
      requester: user.email,
      detail: String(body.detail || "User requested support from the platform.").trim(),
      createdAt: new Date().toISOString()
    };
    db.profile.supportTickets.unshift(ticket);
    db.profile.supportTickets = db.profile.supportTickets.slice(0, 50);
    addUsageEvent(db.profile, { module: ticket.module, action: "support.ticket_opened", detail: `${ticket.ticketNumber}: ${ticket.subject}` });
    logIntegration(db, {
      providerId: "email-delivery",
      module: "Platform",
      action: "support.ticket_opened",
      detail: `${ticket.ticketNumber} opened by ${user.email}.`,
      metadata: { ticketId: ticket.id, module: ticket.module, priority: ticket.priority }
    });
    addActivity(db.profile, `Support ticket opened: ${ticket.ticketNumber}.`);
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/admin/subscriber" && req.method === "POST") {
    if (!canUse(user, "admin")) return send(res, 403, { error: "Role does not allow subscriber management" });
    const body = await readBody(req);
    ensureOperationsProfile(db.profile);
    const email = String(body.email || "pilot-user@example.com").trim().toLowerCase();
    const existing = db.profile.subscriberAccounts.find(item => item.email === email);
    const account = existing || {
      id: crypto.randomUUID(),
      email,
      name: String(body.name || "Pilot subscriber").trim(),
      plan: String(body.plan || "pilot").trim(),
      status: "invited",
      seats: Number(body.seats || 1),
      createdAt: new Date().toISOString()
    };
    account.lastUpdatedAt = new Date().toISOString();
    if (!existing) db.profile.subscriberAccounts.unshift(account);
    db.profile.subscriberAccounts = db.profile.subscriberAccounts.slice(0, 50);
    addUsageEvent(db.profile, { module: "Admin", action: "subscriber.invited", detail: `${account.email} invited on ${account.plan} plan.` });
    logIntegration(db, {
      providerId: "auth-users",
      module: "Platform",
      action: "subscriber.invited",
      detail: `${account.email} subscriber invitation prepared.`,
      metadata: { subscriberId: account.id, plan: account.plan, seats: account.seats }
    });
    addActivity(db.profile, `Subscriber invited: ${account.email}.`);
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/billing/checkout" && req.method === "POST") {
    if (!canUse(user, "admin")) return send(res, 403, { error: "Role does not allow billing setup" });
    const body = await readBody(req);
    const billingEvent = {
      providerId: "billing-subscriptions",
      module: "Platform",
      action: "billing.checkout_requested",
      detail: `Subscription checkout requested for ${body.plan || process.env.BILLING_PRICE_ID || "standard plan"}.`,
      metadata: {
        userId: user.id,
        email: user.email,
        plan: body.plan || "standard",
        priceId: process.env.BILLING_PRICE_ID || null
      }
    };
    const delivery = await dispatchProviderWebhook(db, billingEvent).catch(error => ({ attempted: true, ok: false, status: "dispatch-error", error: error.message }));
    logIntegration(db, {
      ...billingEvent,
      status: delivery.ok ? "success" : "needs-credentials",
      metadata: { ...billingEvent.metadata, delivery },
      dispatch: false
    });
    addActivity(db.profile, "Billing checkout workflow requested.");
    await writeDb(db);
    const state = publicState(db, user);
    state.billingResult = {
      status: delivery.ok ? "checkout-ready" : "needs-billing-provider",
      checkoutUrl: delivery.ok && process.env.BILLING_CHECKOUT_URL ? process.env.BILLING_CHECKOUT_URL : null,
      provider: runtimeProviders(db).find(provider => provider.id === "billing-subscriptions")?.mode || "not-configured"
    };
    return send(res, 200, state);
  }

  if (url.pathname === "/api/config" && req.method === "GET") {
    return send(res, 200, {
      ai: {
        provider: process.env.OPENAI_API_KEY ? "openai" : "offline-simulation",
        model: process.env.OPENAI_API_KEY ? AI_MODEL : null
      },
      map: {
        provider: "leaflet-openstreetmap",
        requiresNetwork: true
      },
      persistence: usingPostgresState() ? "postgresql" : "json-file"
    });
  }

  if (url.pathname === "/api/integrations/test" && req.method === "POST") {
    if (!canUse(user, "integrations")) return send(res, 403, { error: "Role does not allow integration testing" });
    const body = await readBody(req);
    const provider = (db.providers || []).find(item => item.id === body.providerId);
    if (!provider) return send(res, 404, { error: "Provider not found" });
    const delivery = await dispatchProviderWebhook(db, {
      providerId: provider.id,
      module: provider.module,
      action: "provider.test",
      detail: `${provider.name} provider test from AgriNexus.`,
      metadata: { mode: provider.mode, status: provider.status }
    });
    logIntegration(db, {
      providerId: provider.id,
      module: provider.module,
      action: "provider.test",
      status: delivery.ok ? "success" : "needs-credentials",
      detail: delivery.attempted
        ? `${provider.name} live webhook test returned ${delivery.status}.`
        : `${provider.name} ${delivery.status} test completed.`,
      metadata: { mode: provider.mode, status: provider.status, delivery },
      dispatch: false
    });
    addActivity(db.profile, `${provider.name} integration test completed.`);
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/integrations/test-all" && req.method === "POST") {
    if (!canUse(user, "integrations")) return send(res, 403, { error: "Role does not allow integration testing" });
    const results = [];
    for (const provider of db.providers || []) {
      let delivery;
      try {
        delivery = await dispatchProviderWebhook(db, {
          providerId: provider.id,
          module: provider.module,
          action: "provider.test",
          detail: `${provider.name} provider test from AgriNexus workflow board.`,
          metadata: { mode: provider.mode, status: provider.status }
        });
      } catch (error) {
        delivery = { attempted: true, ok: false, status: "dispatch-error", error: error.message };
      }
      results.push({ providerId: provider.id, ok: delivery.ok, status: delivery.status });
      logIntegration(db, {
        providerId: provider.id,
        module: provider.module,
        action: "provider.test",
        status: delivery.ok ? "success" : "needs-credentials",
        detail: delivery.attempted
          ? `${provider.name} live webhook test returned ${delivery.status}.`
          : `${provider.name} ${delivery.status} test completed.`,
        metadata: { mode: provider.mode, status: provider.status, delivery },
        dispatch: false
      });
    }
    logIntegration(db, {
      providerId: "openai",
      module: "Integrations",
      action: "provider.test_all",
      detail: `${results.length} provider checks completed from the integration workflow board.`,
      metadata: { results },
      dispatch: false
    });
    addActivity(db.profile, `${results.length} provider integration tests completed.`);
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/integrations/test-module" && req.method === "POST") {
    if (!canUse(user, "integrations")) return send(res, 403, { error: "Role does not allow module engine testing" });
    const body = await readBody(req);
    const moduleName = String(body.module || "").trim();
    const providers = (db.providers || []).filter(provider => provider.module === moduleName);
    if (!providers.length) return send(res, 404, { error: "Module providers not found" });
    const results = [];
    for (const provider of providers) {
      let delivery;
      try {
        delivery = await dispatchProviderWebhook(db, {
          providerId: provider.id,
          module: provider.module,
          action: "provider.test",
          detail: `${provider.name} ${moduleName} engine test from module workspace.`,
          metadata: { mode: provider.mode, status: provider.status }
        });
      } catch (error) {
        delivery = { attempted: true, ok: false, status: "dispatch-error", error: error.message };
      }
      results.push({ providerId: provider.id, ok: delivery.ok, status: delivery.status });
      logIntegration(db, {
        providerId: provider.id,
        module: provider.module,
        action: "provider.test",
        status: delivery.ok ? "success" : "needs-credentials",
        detail: delivery.attempted
          ? `${provider.name} live module test returned ${delivery.status}.`
          : `${provider.name} ${delivery.status} module test completed.`,
        metadata: { mode: provider.mode, status: provider.status, delivery },
        dispatch: false
      });
    }
    logIntegration(db, {
      providerId: providers[0].id,
      module: moduleName,
      action: "provider.test_module",
      detail: `${moduleName} module engine test completed across ${providers.length} provider(s).`,
      metadata: { results },
      dispatch: false
    });
    addActivity(db.profile, `${moduleName} provider engines tested from module workspace.`);
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/admin/health-check" && req.method === "POST") {
    if (!canUse(user, "admin")) return send(res, 403, { error: "Role does not allow admin health checks" });
    for (const provider of db.providers || []) {
      logIntegration(db, {
        providerId: provider.id,
        module: provider.module,
        action: "admin.health_check",
        detail: `${provider.name} checked from admin console.`,
        metadata: { mode: provider.mode, status: provider.status }
      });
    }
    addActivity(db.profile, "Admin health check completed across all providers.");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/workflow/record" && req.method === "POST") {
    const body = await readBody(req);
    const moduleName = String(body.module || "Platform").trim();
    const action = String(body.action || "workflow.reviewed").trim();
    const detail = String(body.detail || `${moduleName} workflow reviewed.`).trim();
    const providerByModule = {
      Learning: "learning-certificates",
      Workforce: "workforce-notifications",
      Healthcare: "health-notifications",
      Health: "health-notifications",
      AgriTrade: "trade-logistics",
      Integrations: "openai",
      Admin: "database",
      Map: "maps",
      Profile: "database",
      AI: "openai",
      Platform: "openai"
    };
    const providerId = body.providerId || providerByModule[moduleName] || "openai";
    logIntegration(db, {
      providerId,
      module: moduleName,
      action,
      detail,
      metadata: {
        section: body.section || moduleName.toLowerCase(),
        note: body.note || "",
        createdBy: user.email,
        context: {
          countryId: db.profile.activeCountryId,
          routeId: db.profile.activeRouteId,
          checkpoint: db.profile.activeCheckpoint
        }
      },
      dispatch: false
    });
    addActivity(db.profile, detail);
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/demo/run" && req.method === "POST") {
    if (!canUse(user, "admin")) return send(res, 403, { error: "Role does not allow executive demo runs" });
    const { country, route } = activeContext(db);
    ensureLearningProfile(db.profile);
    ensureWorkforceProfile(db.profile);
    ensureHealthProfile(db.profile);
    ensureTradeProfile(db.profile);
    ensureAiProfile(db.profile);

    const course = db.courses.find(item => item.id === db.profile.activeCourseId) || db.courses[0];
    let enrollment = getEnrollment(db.profile, course.id);
    if (!enrollment) {
      enrollment = {
        id: crypto.randomUUID(),
        courseId: course.id,
        status: "ready_for_quiz",
        progress: 90,
        score: 25,
        activeModuleIndex: 0,
        completedModules: [0],
        startedAt: new Date().toISOString(),
        completedAt: null
      };
      db.profile.enrollments.unshift(enrollment);
    } else {
      enrollment.status = enrollment.status === "completed" ? "completed" : "ready_for_quiz";
      enrollment.progress = Math.max(enrollment.progress || 0, 90);
      enrollment.score = Math.max(enrollment.score || 0, 25);
      enrollment.completedModules = enrollment.completedModules?.length ? enrollment.completedModules : [0];
    }
    db.profile.activeCourseId = course.id;
    db.profile.quizScore = Math.max(db.profile.quizScore || 0, enrollment.score);
    if (!db.profile.completedCourses.includes(course.id)) db.profile.completedCourses.push(course.id);
    if (!db.profile.certificates.some(item => item.courseId === course.id)) {
      db.profile.certificates.push({
        id: crypto.randomUUID(),
        certificateNumber: `AN-CERT-${String(db.profile.certificates.length + 1).padStart(4, "0")}`,
        courseId: course.id,
        title: course.title,
        issuedAt: new Date().toISOString()
      });
    }
    db.profile.learningStreak += 1;
    db.profile.learningHours = Number((db.profile.learningHours + 1.5).toFixed(1));

    if (!db.profile.workforceBadges.includes("Profile Verified")) db.profile.workforceBadges.push("Profile Verified");
    if (!db.profile.workforceBadges.includes("Mentor Matched")) db.profile.workforceBadges.push("Mentor Matched");
    db.profile.mentor = "Assigned";
    db.profile.candidateStage = "Interview";
    db.profile.interviews = Math.max(db.profile.interviews || 0, 1);
    const role = db.roles.find(item => roleReadiness(db.profile, item).eligible) || db.roles[0];
    if (role && !db.profile.applications.some(item => item.roleId === role.id)) {
      db.profile.applications.unshift({
        id: crypto.randomUUID(),
        roleId: role.id,
        roleTitle: role.title,
        status: "submitted",
        submittedAt: new Date().toISOString(),
        rate: role.rate
      });
    }

    const intake = {
      id: crypto.randomUUID(),
      patientRef: `AN-PAT-${country.id.toUpperCase()}-DEMO`,
      countryId: country.id,
      needSummary: `${country.name} executive demo intake for queue, heat, and representative workflow`,
      riskLevel: country.risk === "High" || country.heat >= 38 ? "High" : "Routine",
      queueStatus: "Care plan generated",
      representativeStatus: "Connected",
      createdAt: new Date().toISOString()
    };
    db.profile.healthIntakes.unshift(intake);
    db.profile.representativeConnections += 1;
    const careResult = await runAi("careplan", country, route, db.profile);
    db.profile.carePlans.unshift({
      id: crypto.randomUUID(),
      intakeId: intake.id,
      patientRef: intake.patientRef,
      countryId: country.id,
      status: "active",
      text: careResult.text,
      provider: careResult.provider,
      createdAt: new Date().toISOString()
    });
    country.queue = "Care plan generated";

    const product = (db.products || [])[0];
    if (product) {
      const demoOrder = {
        id: crypto.randomUUID(),
        orderNumber: `AN-ORD-${String(db.profile.orders.length + 1).padStart(4, "0")}`,
        productId: product.id,
        product: product.name,
        countryId: product.countryId,
        routeId: route.id,
        checkpoint: db.profile.activeCheckpoint,
        checkpointIndex: 0,
        stage: "In transit",
        stageIndex: 2,
        buyerInterest: product.buyerInterest,
        total: product.price * 20,
        timeline: [
          { label: "In transit", checkpoint: db.profile.activeCheckpoint, createdAt: new Date().toISOString() },
          { label: "Packed", checkpoint: db.profile.activeCheckpoint, createdAt: new Date().toISOString() },
          { label: "Order created", checkpoint: db.profile.activeCheckpoint, createdAt: new Date().toISOString() }
        ],
        createdAt: new Date().toISOString()
      };
      db.profile.orders.push(demoOrder);
      addTradeEvent(db.profile, { type: "order.demo_run", label: `${demoOrder.orderNumber} created during executive demo run` });
    }

    for (const event of [
      ["learning-certificates", "Learning", "demo.learning_completed", `${course.title} learning path completed in demo run.`],
      ["workforce-hris", "Workforce", "demo.workforce_synced", "Candidate readiness, application, and mentor evidence synced in demo run."],
      ["health-telehealth", "Healthcare", "demo.health_case_opened", `${intake.patientRef} intake and care-plan evidence created in demo run.`],
      ["trade-market", "AgriTrade", "demo.trade_order_created", "Trade order and market evidence created in demo run."]
    ]) {
      logIntegration(db, { providerId: event[0], module: event[1], action: event[2], detail: event[3] });
    }

    for (const moduleName of ["Learning", "Workforce", "Healthcare", "AgriTrade"]) {
      addNotification(db.profile, {
        module: moduleName,
        providerId: moduleName === "Healthcare" ? "health-notifications" : moduleName === "Workforce" ? "workforce-notifications" : moduleName === "Learning" ? "learning-certificates" : "trade-logistics",
        channel: "executive-demo",
        message: `${moduleName} executive demo workflow completed.`,
        createdBy: user.name
      });
    }

    const copilot = await runAi("copilot", country, route, db.profile);
    recordAiRun(db, { type: "copilot", country, route, result: copilot, module: "AI" });
    recalcReadiness(db.profile);
    addActivity(db.profile, "Executive demo run completed across learning, workforce, health, trade, AI, notifications, and integrations.");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/pilot/run" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow local pilot runs" });
    const body = await readBody(req);
    const pilotRun = await runLocalPilotStudio(db, user, body.scenario || "rural-access");
    await writeDb(db);
    const state = publicState(db, user);
    state.pilotResult = pilotRun;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/demo/wow" && req.method === "POST") {
    if (!canUse(user, "admin")) return send(res, 403, { error: "Role does not allow investor demo runs" });
    const nigeria = db.countries.find(item => item.id === "nigeria") || db.countries[0];
    db.profile.activeCountryId = nigeria.id;
    db.profile.activeRouteId = nigeria.routeId;
    const { country, route } = activeContext(db);
    db.profile.activeCheckpoint = route.checkpoints[0];
    db.profile.routeStage = "Investor demo live";
    ensureLearningProfile(db.profile);
    ensureWorkforceProfile(db.profile);
    ensureHealthProfile(db.profile);
    ensureTradeProfile(db.profile);
    ensureAiProfile(db.profile);

    const course = db.courses.find(item => item.id === "telehealth-support") || db.courses[0];
    let enrollment = getEnrollment(db.profile, course.id);
    if (!enrollment) {
      enrollment = {
        id: crypto.randomUUID(),
        courseId: course.id,
        status: "completed",
        progress: 100,
        score: 92,
        activeModuleIndex: 0,
        completedModules: (course.modules || []).map((_, index) => index),
        startedAt: new Date().toISOString(),
        completedAt: new Date().toISOString()
      };
      db.profile.enrollments.unshift(enrollment);
    } else {
      enrollment.status = "completed";
      enrollment.progress = 100;
      enrollment.score = Math.max(enrollment.score || 0, 92);
      enrollment.completedModules = (course.modules || []).map((_, index) => index);
      enrollment.completedAt = new Date().toISOString();
    }
    db.profile.activeCourseId = course.id;
    db.profile.quizScore = Math.max(db.profile.quizScore || 0, 92);
    if (!db.profile.completedCourses.includes(course.id)) db.profile.completedCourses.push(course.id);
    if (!db.profile.certificates.some(item => item.courseId === course.id)) {
      db.profile.certificates.push({
        id: crypto.randomUUID(),
        certificateNumber: `AN-CERT-${String(db.profile.certificates.length + 1).padStart(4, "0")}`,
        courseId: course.id,
        title: course.title,
        issuedAt: new Date().toISOString()
      });
    }
    for (const mode of ["caption", "visual", "low-bandwidth"]) {
      db.profile.learningAccommodations.unshift({
        id: crypto.randomUUID(),
        courseId: course.id,
        courseTitle: course.title,
        mode,
        title: mode === "caption" ? "Captioned lesson packet" : mode === "visual" ? "Audio guide and screen-reader outline" : "Offline low-bandwidth packet",
        language: "sw",
        supports: mode === "caption" ? ["live captions", "transcript", "relay handoff"] : mode === "visual" ? ["audio narration", "screen-reader outline", "large-print summary"] : ["SMS summary", "offline packet", "community aide checklist"],
        status: "ready",
        progressAtRequest: 100,
        createdAt: new Date().toISOString()
      });
    }
    db.profile.learningAccommodations = db.profile.learningAccommodations.slice(0, 20);
    db.profile.learningHours = Number((Number(db.profile.learningHours || 0) + 2).toFixed(1));
    db.profile.learningStreak += 3;
    db.profile.readiness = Math.max(db.profile.readiness || 0, 96);

    if (!db.profile.workforceBadges.includes("Profile Verified")) db.profile.workforceBadges.push("Profile Verified");
    if (!db.profile.workforceBadges.includes("Accessibility Support Ready")) db.profile.workforceBadges.push("Accessibility Support Ready");
    if (!db.profile.workforceBadges.includes("Mentor Matched")) db.profile.workforceBadges.push("Mentor Matched");
    db.profile.eligibility = "Eligible";
    db.profile.careerTrack = "Leadership Pathway";
    db.profile.learningPath = "Healthcare Access Workforce";
    db.profile.mentor = "Assigned";
    db.profile.candidateStage = "Shift Ready";
    db.profile.interviews = Math.max(db.profile.interviews || 0, 2);
    const role = db.roles.find(item => item.id === "health-rep") || db.roles[0];
    if (role && !db.profile.applications.some(item => item.roleId === role.id)) {
      db.profile.applications.unshift({
        id: crypto.randomUUID(),
        roleId: role.id,
        roleTitle: role.title,
        status: "submitted",
        submittedAt: new Date().toISOString(),
        rate: role.rate
      });
    }
    if (!(db.profile.shiftSchedule || []).some(item => item.demoShift)) {
      const shift = {
        id: crypto.randomUUID(),
        role: role?.title || "Accessible Health Representative",
        startsAt: new Date(Date.now() + 86400000).toISOString(),
        status: "scheduled",
        estimatedEarnings: role?.rate || 160,
        demoShift: true
      };
      db.profile.shiftSchedule.unshift(shift);
      db.profile.nextShift = new Date(shift.startsAt).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });
      db.profile.earnings = Math.max(db.profile.earnings || 0, shift.estimatedEarnings);
    }

    const intake = {
      id: crypto.randomUUID(),
      patientRef: `AN-PAT-NGA-WOW`,
      countryId: country.id,
      needSummary: "Rural Nigeria accessible telehealth intake for hearing and visual impairment support",
      riskLevel: "Moderate",
      queueStatus: "Accessible telehealth plan ready",
      representativeStatus: "Caregiver notified",
      createdAt: new Date().toISOString()
    };
    db.profile.healthIntakes.unshift(intake);
    db.profile.representativeConnections += 1;
    db.profile.telehealthAccessibility.unshift(
      {
        id: crypto.randomUUID(),
        intakeId: intake.id,
        patientRef: intake.patientRef,
        countryId: country.id,
        title: "Accessible telehealth plan",
        status: "Access plan ready",
        language: "sw",
        supports: ["caption relay", "audio description", "large-print summary", "caregiver handoff", "low-bandwidth callback"],
        createdAt: new Date().toISOString()
      },
      {
        id: crypto.randomUUID(),
        intakeId: intake.id,
        patientRef: intake.patientRef,
        countryId: country.id,
        title: "Caption relay session",
        status: "Caption relay active",
        language: "sw",
        supports: ["live captions", "transcript", "SMS summary"],
        createdAt: new Date().toISOString()
      },
      {
        id: crypto.randomUUID(),
        intakeId: intake.id,
        patientRef: intake.patientRef,
        countryId: country.id,
        title: "Caregiver accessibility notification",
        status: "Caregiver notified",
        language: "sw",
        supports: ["trusted caregiver alert", "representative callback", "community aide checklist"],
        createdAt: new Date().toISOString()
      }
    );
    db.profile.telehealthAccessibility = db.profile.telehealthAccessibility.slice(0, 20);
    db.profile.safetyReviews.unshift({
      id: crypto.randomUUID(),
      countryId: country.id,
      riskLevel: country.risk,
      heatIndex: country.heat,
      dataQuality: 97,
      recommendation: "Proceed with human-supported accessible telehealth, caregiver handoff, and low-bandwidth callback.",
      createdAt: new Date().toISOString()
    });
    const careResult = await runAi("careplan", country, route, db.profile);
    db.profile.carePlans.unshift({
      id: crypto.randomUUID(),
      intakeId: intake.id,
      patientRef: intake.patientRef,
      countryId: country.id,
      status: "active",
      text: `${careResult.text} Accessibility addendum: use captions, audio description, caregiver confirmation, and SMS fallback.`,
      provider: careResult.provider,
      createdAt: new Date().toISOString()
    });
    country.queue = "Accessible telehealth plan ready";

    const product = (db.products || []).find(item => item.countryId === country.id) || (db.products || [])[0];
    if (product) {
      const order = {
        id: crypto.randomUUID(),
        orderNumber: `AN-ORD-${String(db.profile.orders.length + 1).padStart(4, "0")}`,
        productId: product.id,
        product: product.name,
        countryId: country.id,
        routeId: route.id,
        checkpoint: route.checkpoints[1] || route.checkpoints[0],
        checkpointIndex: 1,
        stage: "Quality check",
        stageIndex: 3,
        buyerInterest: Math.max(product.buyerInterest || 0, 88),
        total: product.price * 25,
        timeline: [
          { label: "Quality check", checkpoint: route.checkpoints[1] || route.checkpoints[0], createdAt: new Date().toISOString() },
          { label: "In transit", checkpoint: route.checkpoints[0], createdAt: new Date().toISOString() },
          { label: "Packed", checkpoint: route.checkpoints[0], createdAt: new Date().toISOString() },
          { label: "Order created", checkpoint: route.checkpoints[0], createdAt: new Date().toISOString() }
        ],
        createdAt: new Date().toISOString()
      };
      db.profile.orders.push(order);
      db.profile.activeCheckpoint = order.checkpoint;
      db.profile.routeStage = order.stage;
      addTradeEvent(db.profile, { type: "order.wow_demo", label: `${order.orderNumber} advanced to quality check during WOW investor demo` });
      db.profile.walletTransactions.unshift({
        id: crypto.randomUUID(),
        provider: "M-Pesa",
        amount: 450,
        type: "credit",
        status: "posted",
        createdAt: new Date().toISOString()
      });
      db.profile.wallet = Number((Number(db.profile.wallet || 0) + 450).toFixed(2));
    }

    const aiTypes = ["copilot", "tutor", "triage", "command", "route"];
    for (const type of aiTypes) {
      const result = await runAi(type, country, route, db.profile);
      recordAiRun(db, { type, country, route, result, module: type === "tutor" ? "Learning" : type === "triage" ? "Healthcare" : type === "route" ? "AgriTrade" : "AI" });
    }

    const demoEvents = [
      ["learning-certificates", "Learning", "wow.learning_accessible", "Accessible telehealth course completed with captions, audio guide, and offline packet."],
      ["workforce-hris", "Workforce", "wow.workforce_shift_ready", "Accessible health representative moved into shift-ready workforce state."],
      ["health-telehealth", "Healthcare", "wow.telehealth_accessible", `${intake.patientRef} accessible telehealth session prepared.`],
      ["health-notifications", "Healthcare", "wow.caregiver_notified", "Caregiver and community aide notification recorded."],
      ["health-ehr", "Healthcare", "wow.accessible_care_plan", "Accessible care plan synced for clinical review."],
      ["trade-market", "AgriTrade", "wow.trade_quality_check", "Nigeria product order advanced with payment and route evidence."],
      ["openai", "AI", "wow.ai_orchestration", "AI recommendations generated across learning, workforce, health, trade, and map intelligence."]
    ];
    for (const [providerId, module, action, detail] of demoEvents) {
      logIntegration(db, { providerId, module, action, detail });
    }

    for (const moduleName of ["Learning", "Workforce", "Healthcare", "AgriTrade", "AI"]) {
      addNotification(db.profile, {
        module: moduleName,
        providerId: moduleName === "Healthcare" ? "health-notifications" : moduleName === "Workforce" ? "workforce-notifications" : moduleName === "Learning" ? "learning-certificates" : moduleName === "AgriTrade" ? "trade-logistics" : "openai",
        channel: "wow-demo",
        message: `${moduleName} WOW demo evidence completed for rural Nigeria accessibility scenario.`,
        createdBy: user.name
      });
    }

    db.profile.demoMoments = [
      { title: "Accessible learner starts", detail: "Telehealth course completed with captions, audio guide, screen-reader outline, and offline packet.", evidence: "Learning accommodation + certificate", status: "done" },
      { title: "Training becomes work", detail: "Candidate is verified, matched to a health access role, assigned mentor support, and scheduled for a paid shift.", evidence: "HRIS + calendar + notification", status: "done" },
      { title: "Telehealth meets ADA needs", detail: "Patient receives caption relay, audio description, caregiver notification, and low-bandwidth callback support.", evidence: "Telehealth + EHR + notification", status: "done" },
      { title: "AI remains supervised", detail: "AI guidance is recorded with safety review, care plan, route intelligence, and human oversight.", evidence: "AI run + governance trail", status: "done" },
      { title: "Trade engine moves value", detail: "Nigeria product order advances through quality check with wallet and route evidence.", evidence: "Market + payment + logistics", status: "done" },
      { title: "Investor proof appears", detail: "Provider events, notifications, activity, map context, and profile state update across the whole platform.", evidence: "Audit-ready operating record", status: "done" }
    ];
    db.profile.demoScore = 100;
    recalcReadiness(db.profile);
    addActivity(db.profile, "WOW investor demo completed: rural Nigeria accessibility, learning, workforce, telehealth, trade, map, AI, notifications, and provider evidence are all active.");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/context" && (req.method === "PATCH" || req.method === "POST")) {
    const body = await readBody(req);
    const country = db.countries.find(item => item.id === body.countryId);
    if (!country) return send(res, 404, { error: "Country not found" });
    const route = db.routes.find(item => item.id === country.routeId);
    const current = db.users.find(item => item.id === user.id) || user;
    const nextLanguage = COUNTRY_LANGUAGE[country.id] || current.language || "en";
    db.profile.activeCountryId = country.id;
    db.profile.activeRouteId = route.id;
    db.profile.activeCheckpoint = route.checkpoints[0];
    current.country = country.name;
    current.language = nextLanguage;
    db.profile.accessibilityProfile = {
      ...(db.profile.accessibilityProfile || {}),
      language: nextLanguage
    };
    addActivity(db.profile, `Country context changed to ${country.name}; platform language changed to ${nextLanguage.toUpperCase()}.`);
    await writeDb(db);
    return send(res, 200, publicState(db, current));
  }

  if (url.pathname === "/api/user/language" && req.method === "POST") {
    const body = await readBody(req);
    const allowed = new Set(["en", "fr", "sw", "ar"]);
    if (!allowed.has(body.language)) return send(res, 400, { error: "Unsupported language" });
    const current = db.users.find(item => item.id === user.id);
    current.language = body.language;
    db.profile.accessibilityProfile = {
      ...(db.profile.accessibilityProfile || {}),
      language: body.language
    };
    addActivity(db.profile, `Learning language changed to ${body.language.toUpperCase()}.`);
    await writeDb(db);
    return send(res, 200, publicState(db, current));
  }

  if (url.pathname === "/api/learning/start" && req.method === "POST") {
    if (!canUse(user, "learning")) return send(res, 403, { error: "Role does not allow learning workflows" });
    const body = await readBody(req);
    const course = db.courses.find(item => item.id === body.courseId);
    if (!course) return send(res, 404, { error: "Course not found" });
    ensureLearningProfile(db.profile);
    let enrollment = getEnrollment(db.profile, course.id);
    if (!enrollment) {
      enrollment = {
        id: crypto.randomUUID(),
        courseId: course.id,
        status: "in_progress",
        progress: 25,
        score: 0,
        activeModuleIndex: 0,
        completedModules: [],
        startedAt: new Date().toISOString(),
        completedAt: null
      };
      db.profile.enrollments.unshift(enrollment);
    } else {
      enrollment.status = enrollment.status === "completed" ? "completed" : "in_progress";
      enrollment.progress = Math.max(enrollment.progress, 25);
      enrollment.activeModuleIndex = enrollment.activeModuleIndex || 0;
      enrollment.completedModules = enrollment.completedModules || [];
    }
    db.profile.activeCourseId = course.id;
    db.profile.learningStreak += 1;
    db.profile.learningHours = Number((db.profile.learningHours + 0.5).toFixed(1));
    db.profile.readiness = Math.min(100, db.profile.readiness + Math.ceil(course.readiness / 2));
    recalcReadiness(db.profile);
    logIntegration(db, {
      providerId: "learning-certificates",
      module: "Learning",
      action: "course.started",
      detail: `${course.title} enrollment recorded in the learning workspace.`,
      metadata: { courseId: course.id, enrollmentId: enrollment.id, progress: enrollment.progress }
    });
    addActivity(db.profile, `Started ${course.title}; learning progress is ${enrollment.progress}%.`);
    addWorkflowNote(db.profile, body.note, "Course note");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/learning/lesson" && req.method === "POST") {
    if (!canUse(user, "learning")) return send(res, 403, { error: "Role does not allow learning workflows" });
    const body = await readBody(req);
    const course = db.courses.find(item => item.id === (body.courseId || db.profile.activeCourseId));
    if (!course) return send(res, 404, { error: "Course not found" });
    ensureLearningProfile(db.profile);
    let enrollment = getEnrollment(db.profile, course.id);
    if (!enrollment) {
      enrollment = {
        id: crypto.randomUUID(),
        courseId: course.id,
        status: "in_progress",
        progress: 25,
        score: 0,
        activeModuleIndex: 0,
        completedModules: [],
        startedAt: new Date().toISOString(),
        completedAt: null
      };
      db.profile.enrollments.unshift(enrollment);
    }
    const modules = course.modules || [];
    const selectedIndex = Number.isInteger(body.moduleIndex) ? body.moduleIndex : enrollment.activeModuleIndex || 0;
    const moduleIndex = Math.max(0, Math.min(selectedIndex, Math.max(0, modules.length - 1)));
    enrollment.activeModuleIndex = moduleIndex;
    enrollment.completedModules = enrollment.completedModules || [];
    if (!enrollment.completedModules.includes(moduleIndex)) enrollment.completedModules.push(moduleIndex);
    const completedCount = enrollment.completedModules.length;
    const moduleProgress = modules.length ? Math.round((completedCount / modules.length) * 65) : 35;
    enrollment.progress = Math.max(enrollment.progress || 25, Math.min(90, 25 + moduleProgress));
    if (completedCount >= modules.length && modules.length) enrollment.status = "ready_for_quiz";
    db.profile.activeCourseId = course.id;
    db.profile.learningStreak += 1;
    db.profile.learningHours = Number((db.profile.learningHours + 0.35).toFixed(1));
    db.profile.readiness = Math.min(100, db.profile.readiness + 2);
    recalcReadiness(db.profile);
    logIntegration(db, {
      providerId: "learning-certificates",
      module: "Learning",
      action: "lesson.completed",
      detail: `${modules[moduleIndex] || course.title} completed in ${course.title}.`,
      metadata: { courseId: course.id, enrollmentId: enrollment.id, moduleIndex, progress: enrollment.progress }
    });
    addActivity(db.profile, `Completed lesson "${modules[moduleIndex] || course.title}" in ${course.title}; progress is ${enrollment.progress}%.`);
    addWorkflowNote(db.profile, body.note, "Lesson note");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/learning/quiz" && req.method === "POST") {
    if (!canUse(user, "learning")) return send(res, 403, { error: "Role does not allow learning workflows" });
    const body = await readBody(req);
    ensureLearningProfile(db.profile);
    const course = db.courses.find(item => item.id === db.profile.activeCourseId) || db.courses[0];
    let enrollment = getEnrollment(db.profile, course.id);
    if (!enrollment) {
      enrollment = {
        id: crypto.randomUUID(),
        courseId: course.id,
        status: "in_progress",
        progress: 25,
        score: 0,
        activeModuleIndex: 0,
        completedModules: [],
        startedAt: new Date().toISOString(),
        completedAt: null
      };
      db.profile.enrollments.unshift(enrollment);
    }
    enrollment.progress = Math.min(100, enrollment.progress + 35);
    enrollment.score = Math.min(100, enrollment.score + 25);
    db.profile.quizScore = Math.max(db.profile.quizScore, enrollment.score);
    db.profile.learningHours = Number((db.profile.learningHours + 0.75).toFixed(1));
    db.profile.readiness = Math.min(100, db.profile.readiness + 6);
    recalcReadiness(db.profile);
    logIntegration(db, {
      providerId: "learning-certificates",
      module: "Learning",
      action: "quiz.completed",
      detail: `${course.title} quiz recorded with score ${enrollment.score}.`,
      metadata: { courseId: course.id, enrollmentId: enrollment.id, score: enrollment.score, progress: enrollment.progress }
    });
    addActivity(db.profile, `${course.title} quiz advanced to ${enrollment.score}; progress is ${enrollment.progress}%.`);
    addWorkflowNote(db.profile, body.note, "Quiz note");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/learning/certificate" && req.method === "POST") {
    if (!canUse(user, "learning")) return send(res, 403, { error: "Role does not allow credential workflows" });
    const body = await readBody(req);
    ensureLearningProfile(db.profile);
    const course = db.courses.find(item => item.id === db.profile.activeCourseId) || db.courses[0];
    const enrollment = getEnrollment(db.profile, course.id);
    if (!enrollment || enrollment.score < 25) return send(res, 409, { error: "Complete a quiz first" });
    if (!db.profile.completedCourses.includes(course.id)) db.profile.completedCourses.push(course.id);
    enrollment.status = "completed";
    enrollment.progress = 100;
    enrollment.completedAt = new Date().toISOString();
    if (!db.profile.certificates.some(item => item.courseId === course.id)) {
      const certificate = {
        id: crypto.randomUUID(),
        certificateNumber: `AN-CERT-${String(db.profile.certificates.length + 1).padStart(4, "0")}`,
        courseId: course.id,
        title: course.title,
        issuedAt: new Date().toISOString()
      };
      db.profile.certificates.push(certificate);
      logIntegration(db, {
        providerId: "learning-certificates",
        module: "Learning",
        action: "certificate.issued",
        detail: `${certificate.certificateNumber} issued for ${course.title}.`,
        metadata: { courseId: course.id, certificateNumber: certificate.certificateNumber }
      });
    }
    db.profile.readiness = Math.min(100, db.profile.readiness + 10);
    db.profile.learningStreak += 1;
    recalcReadiness(db.profile);
    addActivity(db.profile, `Certificate issued for ${course.title}.`);
    addWorkflowNote(db.profile, body.note, "Certificate note");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/learning/accessibility" && req.method === "POST") {
    if (!canUse(user, "learning")) return send(res, 403, { error: "Role does not allow learning workflows" });
    const body = await readBody(req);
    ensureLearningProfile(db.profile);
    const course = db.courses.find(item => item.id === (body.courseId || db.profile.activeCourseId)) || db.courses[0];
    const enrollment = course ? getEnrollment(db.profile, course.id) : null;
    const modeNames = {
      caption: "Captioned lesson packet",
      visual: "Audio guide and screen-reader outline",
      "low-bandwidth": "Offline low-bandwidth packet"
    };
    const mode = modeNames[body.mode] ? body.mode : "caption";
    const accommodation = {
      id: crypto.randomUUID(),
      courseId: course?.id || null,
      courseTitle: course?.title || "Accessible learning path",
      mode,
      title: modeNames[mode],
      language: db.profile.accessibilityProfile.language || user.language || "sw",
      supports: mode === "caption"
        ? ["live captions", "transcript", "sign-language handoff prompt"]
        : mode === "visual"
          ? ["audio narration", "screen-reader outline", "large-print summary"]
          : ["SMS summary", "download packet", "community aide checklist"],
      status: "ready",
      progressAtRequest: enrollment?.progress || 0,
      createdAt: new Date().toISOString()
    };
    db.profile.learningAccommodations.unshift(accommodation);
    db.profile.learningAccommodations = db.profile.learningAccommodations.slice(0, 20);
    db.profile.learningHours = Number((Number(db.profile.learningHours || 0) + 0.25).toFixed(2));
    db.profile.learningStreak += 1;
    logIntegration(db, {
      providerId: "learning-certificates",
      module: "Learning",
      action: "learning.accessibility_ready",
      detail: `${accommodation.title} prepared for ${accommodation.courseTitle}.`,
      metadata: { accommodationId: accommodation.id, courseId: accommodation.courseId, mode }
    });
    db.profile.aiActivity = `${accommodation.title} prepared for hearing and visual accessibility.`;
    addActivity(db.profile, db.profile.aiActivity);
    addWorkflowNote(db.profile, body.note, "Learning accessibility note");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/workforce/action" && req.method === "POST") {
    if (!canUse(user, "workforce")) return send(res, 403, { error: "Role does not allow workforce workflows" });
    const body = await readBody(req);
    ensureWorkforceProfile(db.profile);
    if (body.type === "build-profile") {
      db.profile.candidateStage = db.profile.readiness >= 55 ? "Shortlist" : "Profile Ready";
      db.profile.readiness = Math.min(100, db.profile.readiness + 10);
      if (!db.profile.workforceBadges.includes("Profile Verified")) db.profile.workforceBadges.push("Profile Verified");
      logIntegration(db, {
        providerId: "workforce-hris",
        module: "Workforce",
        action: "profile.verified",
        detail: "Candidate profile verification synced to sandbox HRIS.",
        metadata: { readiness: db.profile.readiness, candidateStage: db.profile.candidateStage }
      });
      addActivity(db.profile, "Workforce profile verified with learning and certificate review.");
    } else if (body.type === "interview") {
      if (db.profile.readiness < 50) return send(res, 409, { error: "Reach 50% readiness first" });
      db.profile.interviews += 1;
      db.profile.candidateStage = "Interview";
      db.profile.lastInterviewAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
      logIntegration(db, {
        providerId: "workforce-calendar",
        module: "Workforce",
        action: "interview.scheduled",
        detail: "Interview event recorded in sandbox calendar.",
        metadata: { startsAt: db.profile.lastInterviewAt }
      });
      logIntegration(db, {
        providerId: "workforce-notifications",
        module: "Workforce",
        action: "notification.sent",
        detail: "Interview notification recorded.",
        metadata: { channel: "sandbox" }
      });
      addActivity(db.profile, "Interview scheduled for tomorrow with workforce operations.");
    } else if (body.type === "mentor") {
      db.profile.mentor = "Assigned";
      db.profile.readiness = Math.min(100, db.profile.readiness + 5);
      db.profile.mentorNotes.unshift({ id: crypto.randomUUID(), note: "Mentor assigned to review readiness gaps and role fit.", createdAt: new Date().toISOString() });
      if (!db.profile.workforceBadges.includes("Mentor Matched")) db.profile.workforceBadges.push("Mentor Matched");
      logIntegration(db, {
        providerId: "workforce-hris",
        module: "Workforce",
        action: "mentor.assigned",
        detail: "Mentor assignment synced to sandbox HRIS.",
        metadata: { mentor: db.profile.mentor }
      });
      addActivity(db.profile, "Mentor assigned for role readiness coaching.");
    } else if (body.type === "shift") {
      if (db.profile.interviews < 1) return send(res, 409, { error: "Schedule an interview before starting a shift" });
      const shift = {
        id: crypto.randomUUID(),
        role: db.profile.applications[0]?.roleTitle || "Field Operations Agent",
        startsAt: new Date(Date.now() + 36 * 60 * 60 * 1000).toISOString(),
        status: "scheduled",
        estimatedEarnings: 64
      };
      db.profile.shiftSchedule.unshift(shift);
      db.profile.nextShift = `${shift.role} - ${new Date(shift.startsAt).toLocaleString("en-US", { weekday: "short", hour: "numeric", minute: "2-digit" })}`;
      db.profile.readiness = Math.min(100, db.profile.readiness + 6);
      db.profile.earnings += shift.estimatedEarnings;
      if (!db.profile.workforceBadges.includes("Shift Scheduled")) db.profile.workforceBadges.push("Shift Scheduled");
      logIntegration(db, {
        providerId: "workforce-calendar",
        module: "Workforce",
        action: "shift.scheduled",
        detail: `${shift.role} shift recorded in sandbox calendar.`,
        metadata: { shiftId: shift.id, startsAt: shift.startsAt }
      });
      logIntegration(db, {
        providerId: "workforce-shifts",
        module: "Workforce",
        action: "shift.assignment_created",
        detail: `${shift.role} shift assignment sent to workforce scheduler.`,
        metadata: {
          shiftId: shift.id,
          startsAt: shift.startsAt,
          endsAt: shift.endsAt,
          estimatedEarnings: shift.estimatedEarnings,
          candidateStage: db.profile.candidateStage
        }
      });
      logIntegration(db, {
        providerId: "workforce-notifications",
        module: "Workforce",
        action: "shift.notification_sent",
        detail: `${shift.role} shift notification sent to candidate channel.`,
        metadata: { shiftId: shift.id, channel: "candidate-workflow" }
      });
      addActivity(db.profile, `${shift.role} shift scheduled; estimated earnings ${shift.estimatedEarnings}.`);
    }
    recalcReadiness(db.profile);
    addWorkflowNote(db.profile, body.note, "Workforce note");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/workforce/apply" && req.method === "POST") {
    if (!canUse(user, "workforce")) return send(res, 403, { error: "Role does not allow workforce applications" });
    const body = await readBody(req);
    const role = db.roles.find(item => item.id === body.roleId);
    if (!role) return send(res, 404, { error: "Role not found" });
    ensureWorkforceProfile(db.profile);
    const readiness = roleReadiness(db.profile, role);
    if (!readiness.eligible) {
      const certificateText = readiness.missingCertificates.length ? ` and certificate(s): ${readiness.missingCertificates.join(", ")}` : "";
      return send(res, 409, { error: `${role.title} needs ${readiness.missingReadiness}% more readiness${certificateText}` });
    }
    let application = db.profile.applications.find(item => item.roleId === role.id);
    if (!application) {
      application = {
        id: crypto.randomUUID(),
        roleId: role.id,
        roleTitle: role.title,
        status: "submitted",
        submittedAt: new Date().toISOString(),
        rate: role.rate
      };
      db.profile.applications.unshift(application);
    } else {
      application.status = application.status || "submitted";
      application.lastReviewedAt = new Date().toISOString();
    }
    logIntegration(db, {
      providerId: "workforce-hris",
      module: "Workforce",
      action: "application.submitted",
      detail: `${role.title} application synced to sandbox HRIS.`,
      metadata: { applicationId: application.id, roleId: role.id }
    });
    db.profile.placements = db.profile.applications.length;
    db.profile.interviews = Math.max(db.profile.interviews, 1);
    db.profile.candidateStage = db.profile.placements > 1 ? "Placement Pool" : "Interview";
    db.profile.earnings = Math.max(db.profile.earnings, 180 + role.rate);
    addActivity(db.profile, `Applied to ${role.title}.`);
    addWorkflowNote(db.profile, body.note, "Application note");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/health/action" && req.method === "POST") {
    if (!canUse(user, "health")) return send(res, 403, { error: "Role does not allow healthcare workflows" });
    const body = await readBody(req);
    const { country, route } = activeContext(db);
    ensureHealthProfile(db.profile);
    if (body.type === "intake") {
      const urgency = String(body.urgency || "").trim();
      const accessibilityNeeds = String(body.accessibilityNeeds || "").trim();
      const preferredLanguage = String(body.preferredLanguage || db.profile.accessibilityProfile.language || user.language || "en").trim();
      const contactMethod = String(body.contactMethod || "Low-bandwidth callback").trim();
      const caregiverName = String(body.caregiverName || "Community accessibility aide").trim();
      const needSummary = String(body.needSummary || `${country.name} intake for heat, queue, and field access review`).trim();
      const patientName = String(body.patientName || "Community patient").trim();
      const intake = {
        id: crypto.randomUUID(),
        patientRef: `AN-PAT-${country.id.toUpperCase()}-${String(db.profile.healthIntakes.length + 1).padStart(3, "0")}`,
        patientName,
        countryId: country.id,
        needSummary,
        riskLevel: urgency || (country.risk === "High" || country.heat >= 38 ? "High" : "Routine"),
        queueStatus: "Intake session in progress",
        representativeStatus: "Not connected",
        preferredLanguage,
        accessibilityNeeds,
        contactMethod,
        caregiverName,
        assistiveSupports: accessibilityNeeds
          ? accessibilityNeeds.split(",").map(item => item.trim()).filter(Boolean)
          : ["caption relay", "audio narration", "large-print summary", "caregiver handoff"],
        routeContext: {
          routeId: route.id,
          routeName: route.name,
          checkpoint: db.profile.activeCheckpoint
        },
        createdAt: new Date().toISOString()
      };
      db.profile.healthIntakes.unshift(intake);
      logIntegration(db, {
        providerId: "health-telehealth",
        module: "Healthcare",
        action: "intake.created",
        detail: `${intake.patientRef} telehealth intake recorded for ${patientName}.`,
        metadata: {
          intakeId: intake.id,
          countryId: country.id,
          patientName,
          preferredLanguage,
          contactMethod,
          accessibilityNeeds,
          caregiverName
        }
      });
      country.patients += 25;
      country.queue = "Intake session in progress";
      db.profile.aiActivity = `Telehealth intake ${intake.patientRef} opened for ${country.name}: ${needSummary}.`;
    } else if (body.type === "representative") {
      const intake = db.profile.healthIntakes[0];
      if (intake) {
        intake.queueStatus = "Representative connected";
        intake.representativeStatus = "Connected";
      }
      db.profile.representativeConnections += 1;
      logIntegration(db, {
        providerId: "health-notifications",
        module: "Healthcare",
        action: "representative.connected",
        detail: "Representative escalation notification recorded.",
        metadata: { intakeId: intake?.id || null }
      });
      country.queue = "Representative connected";
      db.profile.aiActivity = `Representative connected for ${country.name}.`;
    } else if (body.type === "safety") {
      const review = {
        id: crypto.randomUUID(),
        countryId: country.id,
        riskLevel: country.risk,
        heatIndex: country.heat,
        dataQuality: Math.min(99, country.quality + 1),
        recommendation: `Review ${country.name} heat exposure, queue pressure, and representative coverage before autonomous guidance.`,
        createdAt: new Date().toISOString()
      };
      db.profile.safetyReviews.unshift(review);
      logIntegration(db, {
        providerId: "health-ehr",
        module: "Healthcare",
        action: "safety.review",
        detail: `${country.name} safety review recorded for care audit.`,
        metadata: { reviewId: review.id, countryId: country.id }
      });
      country.quality = Math.min(99, country.quality + 1);
      country.safety = Math.max(1, Number((country.safety - 0.1).toFixed(1)));
      db.profile.aiActivity = `Safety review run for ${country.name}.`;
    } else if (body.type === "inspector") {
      const result = await runAi("inspector", country, route, db.profile);
      recordAiRun(db, { type: "inspector", country, route, result, module: "Healthcare" });
    } else if (body.type === "careplan") {
      const result = await runAi("careplan", country, route, db.profile);
      const intake = db.profile.healthIntakes[0] || {
        id: crypto.randomUUID(),
        patientRef: `AN-PAT-${country.id.toUpperCase()}-AUTO`,
        countryId: country.id,
        riskLevel: country.risk,
        needSummary: `${country.name} care plan review`,
        createdAt: new Date().toISOString()
      };
      if (!db.profile.healthIntakes.find(item => item.id === intake.id)) db.profile.healthIntakes.unshift(intake);
      const carePlan = {
        id: crypto.randomUUID(),
        intakeId: intake.id,
        patientRef: intake.patientRef,
        countryId: country.id,
        status: "active",
        text: result.text,
        provider: result.provider,
        createdAt: new Date().toISOString()
      };
      db.profile.carePlans.unshift(carePlan);
      logIntegration(db, {
        providerId: "health-ehr",
        module: "Healthcare",
        action: "care_plan.synced",
        detail: `${carePlan.patientRef} care plan synced to sandbox EHR.`,
        metadata: { carePlanId: carePlan.id, intakeId: intake.id }
      });
      intake.queueStatus = "Care plan generated";
      recordAiRun(db, { type: "careplan", country, route, result, module: "Healthcare" });
    } else if (body.type === "consent") {
      const intake = db.profile.healthIntakes[0] || {
        id: crypto.randomUUID(),
        patientRef: `AN-PAT-${country.id.toUpperCase()}-CONSENT`,
        patientName: "Community patient",
        countryId: country.id,
        riskLevel: country.risk,
        needSummary: `${country.name} consent and privacy review`,
        queueStatus: "Consent review",
        representativeStatus: "Accessibility aide pending",
        createdAt: new Date().toISOString()
      };
      if (!db.profile.healthIntakes.find(item => item.id === intake.id)) db.profile.healthIntakes.unshift(intake);
      const consent = {
        id: crypto.randomUUID(),
        intakeId: intake.id,
        patientRef: intake.patientRef,
        consentType: body.consentType || "telehealth, caregiver, translation, and assistive-format consent",
        language: body.language || intake.preferredLanguage || user.language || "en",
        privacySummary: "Patient receives plain-language explanation, caregiver permission, transcript handling, and low-bandwidth contact consent.",
        status: "recorded",
        createdAt: new Date().toISOString()
      };
      db.profile.telehealthConsents.unshift(consent);
      db.profile.telehealthConsents = db.profile.telehealthConsents.slice(0, 20);
      intake.queueStatus = "Consent recorded";
      logIntegration(db, {
        providerId: "health-ehr",
        module: "Healthcare",
        action: "telehealth.consent_recorded",
        detail: `${consent.patientRef} telehealth consent and privacy record captured.`,
        metadata: { consentId: consent.id, intakeId: intake.id, countryId: country.id }
      });
      db.profile.aiActivity = `Consent and privacy record captured for ${consent.patientRef}.`;
    } else if (body.type === "vitals") {
      const intake = db.profile.healthIntakes[0] || {
        id: crypto.randomUUID(),
        patientRef: `AN-PAT-${country.id.toUpperCase()}-VITALS`,
        patientName: "Community patient",
        countryId: country.id,
        riskLevel: country.risk,
        needSummary: `${country.name} vitals and triage review`,
        queueStatus: "Vitals review",
        representativeStatus: "Accessibility aide pending",
        createdAt: new Date().toISOString()
      };
      if (!db.profile.healthIntakes.find(item => item.id === intake.id)) db.profile.healthIntakes.unshift(intake);
      const vitals = {
        id: crypto.randomUUID(),
        intakeId: intake.id,
        patientRef: intake.patientRef,
        temperatureC: Number(body.temperatureC || (country.heat >= 38 ? 38.1 : 36.8)),
        pulse: Number(body.pulse || (country.risk === "High" ? 96 : 82)),
        symptoms: body.symptoms || "Heat exposure, dehydration check, accessibility-supported triage",
        triageLevel: country.risk === "High" || country.heat >= 38 ? "priority" : "routine",
        status: "captured",
        createdAt: new Date().toISOString()
      };
      db.profile.telehealthVitals.unshift(vitals);
      db.profile.telehealthVitals = db.profile.telehealthVitals.slice(0, 20);
      intake.queueStatus = "Vitals captured";
      logIntegration(db, {
        providerId: "health-telehealth",
        module: "Healthcare",
        action: "telehealth.vitals_captured",
        detail: `${vitals.patientRef} vitals captured for triage.`,
        metadata: { vitalsId: vitals.id, intakeId: intake.id, triageLevel: vitals.triageLevel }
      });
      db.profile.aiActivity = `Vitals captured for ${vitals.patientRef}; triage level ${vitals.triageLevel}.`;
    } else if (body.type === "referral") {
      const intake = db.profile.healthIntakes[0] || {
        id: crypto.randomUUID(),
        patientRef: `AN-PAT-${country.id.toUpperCase()}-REFER`,
        patientName: "Community patient",
        countryId: country.id,
        riskLevel: country.risk,
        needSummary: `${country.name} referral review`,
        queueStatus: "Referral review",
        representativeStatus: "Accessibility aide pending",
        createdAt: new Date().toISOString()
      };
      if (!db.profile.healthIntakes.find(item => item.id === intake.id)) db.profile.healthIntakes.unshift(intake);
      const referral = {
        id: crypto.randomUUID(),
        intakeId: intake.id,
        patientRef: intake.patientRef,
        destination: body.destination || `${country.name} partner clinic / community health worker`,
        reason: body.reason || "Escalation for accessible follow-up, heat exposure review, and care-plan verification",
        transportSupport: "community aide callback and low-bandwidth directions",
        status: "sent",
        createdAt: new Date().toISOString()
      };
      db.profile.telehealthReferrals.unshift(referral);
      db.profile.telehealthReferrals = db.profile.telehealthReferrals.slice(0, 20);
      intake.queueStatus = "Referral sent";
      logIntegration(db, {
        providerId: "health-notifications",
        module: "Healthcare",
        action: "telehealth.referral_sent",
        detail: `${referral.patientRef} referral sent to ${referral.destination}.`,
        metadata: { referralId: referral.id, intakeId: intake.id, countryId: country.id }
      });
      db.profile.aiActivity = `Referral sent for ${referral.patientRef}.`;
    } else if (body.type === "followup") {
      const intake = db.profile.healthIntakes[0] || {
        id: crypto.randomUUID(),
        patientRef: `AN-PAT-${country.id.toUpperCase()}-FOLLOW`,
        patientName: "Community patient",
        countryId: country.id,
        riskLevel: country.risk,
        needSummary: `${country.name} follow-up review`,
        queueStatus: "Follow-up review",
        representativeStatus: "Accessibility aide pending",
        createdAt: new Date().toISOString()
      };
      if (!db.profile.healthIntakes.find(item => item.id === intake.id)) db.profile.healthIntakes.unshift(intake);
      const followUp = {
        id: crypto.randomUUID(),
        intakeId: intake.id,
        patientRef: intake.patientRef,
        scheduleWindow: body.scheduleWindow || "24-hour low-bandwidth callback",
        channels: ["voice callback", "SMS summary", "caregiver packet", "large-print/audio guide"],
        status: "scheduled",
        createdAt: new Date().toISOString()
      };
      db.profile.telehealthFollowUps.unshift(followUp);
      db.profile.telehealthFollowUps = db.profile.telehealthFollowUps.slice(0, 20);
      intake.queueStatus = "Follow-up scheduled";
      logIntegration(db, {
        providerId: "health-notifications",
        module: "Healthcare",
        action: "telehealth.followup_scheduled",
        detail: `${followUp.patientRef} follow-up scheduled through ${followUp.channels.join(", ")}.`,
        metadata: { followUpId: followUp.id, intakeId: intake.id, countryId: country.id }
      });
      db.profile.aiActivity = `Follow-up scheduled for ${followUp.patientRef}.`;
    } else if (["accessibility", "caption", "caregiver"].includes(body.type)) {
      const intake = db.profile.healthIntakes[0] || {
        id: crypto.randomUUID(),
        patientRef: `AN-PAT-${country.id.toUpperCase()}-ACCESS`,
        countryId: country.id,
        riskLevel: country.risk,
        needSummary: `${country.name} accessible telehealth review`,
        queueStatus: "Accessibility review",
        representativeStatus: "Accessibility aide pending",
        createdAt: new Date().toISOString()
      };
      if (!db.profile.healthIntakes.find(item => item.id === intake.id)) db.profile.healthIntakes.unshift(intake);
      const actions = {
        accessibility: {
          title: "Accessible telehealth plan",
          status: "Access plan ready",
          supports: ["caption relay", "audio description", "large-print summary", "caregiver handoff", "low-bandwidth callback"],
          providerId: "health-ehr",
          action: "telehealth.accessibility_plan"
        },
        caption: {
          title: "Caption relay session",
          status: "Caption relay active",
          supports: ["live captions", "transcript", "SMS summary"],
          providerId: "health-telehealth",
          action: "telehealth.caption_relay"
        },
        caregiver: {
          title: "Caregiver accessibility notification",
          status: "Caregiver notified",
          supports: ["trusted caregiver alert", "representative callback", "community aide checklist"],
          providerId: "health-notifications",
          action: "telehealth.caregiver_notified"
        }
      };
      const selected = actions[body.type];
      const record = {
        id: crypto.randomUUID(),
        intakeId: intake.id,
        patientRef: intake.patientRef,
        countryId: country.id,
        title: selected.title,
        status: selected.status,
        language: db.profile.accessibilityProfile.language || user.language || "sw",
        supports: selected.supports,
        createdAt: new Date().toISOString()
      };
      db.profile.telehealthAccessibility.unshift(record);
      db.profile.telehealthAccessibility = db.profile.telehealthAccessibility.slice(0, 20);
      intake.queueStatus = selected.status;
      intake.representativeStatus = body.type === "caregiver" ? "Caregiver notified" : "Accessibility prepared";
      country.queue = selected.status;
      db.profile.aiActivity = `${selected.title} prepared for ${intake.patientRef}.`;
      logIntegration(db, {
        providerId: selected.providerId,
        module: "Healthcare",
        action: selected.action,
        detail: `${selected.title} recorded for ${intake.patientRef}.`,
        metadata: { accessibilityId: record.id, intakeId: intake.id, countryId: country.id }
      });
    }
    addActivity(db.profile, db.profile.aiActivity);
    addWorkflowNote(db.profile, body.note, "Health note");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/trade/order" && req.method === "POST") {
    if (!canUse(user, "trade")) return send(res, 403, { error: "Role does not allow trade workflows" });
    const body = await readBody(req);
    ensureTradeProfile(db.profile);
    const product = (db.products || []).find(item => item.id === body.productId) || (db.products || []).find(item => item.name === body.product);
    const { country, route } = routeByProduct(db, product?.id || body.product || "");
    const checkpoint = route.checkpoints[0];
    const order = {
      id: crypto.randomUUID(),
      orderNumber: `AN-ORD-${String(db.profile.orders.length + 1).padStart(4, "0")}`,
      productId: product?.id || null,
      product: product?.name || body.product || "AgriNexus product",
      countryId: country.id,
      routeId: route.id,
      checkpoint,
      checkpointIndex: 0,
      stage: "Packed",
      stageIndex: 1,
      buyerInterest: product?.buyerInterest || 50,
      total: product ? product.price * 20 : 1200,
      timeline: [
        { label: "Order created", checkpoint, createdAt: new Date().toISOString() },
        { label: "Packed", checkpoint, createdAt: new Date().toISOString() }
      ],
      createdAt: new Date().toISOString()
    };
    db.profile.orders.push(order);
    db.profile.activeCountryId = country.id;
    db.profile.activeRouteId = route.id;
    db.profile.activeCheckpoint = order.checkpoint;
    db.profile.routeStage = order.stage;
    addTradeEvent(db.profile, { type: "order.created", label: `${order.orderNumber} created for ${order.product}` });
    logIntegration(db, {
      providerId: "trade-market",
      module: "AgriTrade",
      action: "order.created",
      detail: `${order.orderNumber} created with ${order.buyerInterest}% buyer interest.`,
      metadata: { orderId: order.id, productId: order.productId }
    });
    addActivity(db.profile, `Order created for ${order.product}.`);
    addWorkflowNote(db.profile, body.note, "Order note");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/trade/advance" && req.method === "POST") {
    if (!canUse(user, "trade")) return send(res, 403, { error: "Role does not allow trade workflows" });
    const body = await readBody(req);
    ensureTradeProfile(db.profile);
    const order = db.profile.orders[db.profile.orders.length - 1];
    if (!order) return send(res, 409, { error: "Create an order first" });
    const route = db.routes.find(item => item.id === order.routeId) || activeRoute();
    const stages = ["Order created", "Packed", "In transit", "Quality check", "Delivered"];
    order.stageIndex = Math.min(stages.length - 1, (order.stageIndex || 0) + 1);
    order.stage = stages[order.stageIndex];
    order.checkpointIndex = Math.min(route.checkpoints.length - 1, (order.checkpointIndex || 0) + 1);
    order.checkpoint = route.checkpoints[order.checkpointIndex];
    order.timeline.unshift({ label: order.stage, checkpoint: order.checkpoint, createdAt: new Date().toISOString() });
    db.profile.routeStage = order.stage;
    db.profile.activeCheckpoint = order.checkpoint;
    addTradeEvent(db.profile, { type: "order.advanced", label: `${order.orderNumber} advanced to ${order.stage} at ${order.checkpoint}` });
    logIntegration(db, {
      providerId: "trade-logistics",
      module: "AgriTrade",
      action: "checkpoint.updated",
      detail: `${order.orderNumber} moved to ${order.checkpoint}.`,
      metadata: { orderId: order.id, stage: order.stage, checkpoint: order.checkpoint }
    });
    addActivity(db.profile, `Order advanced to ${db.profile.routeStage}.`);
    addWorkflowNote(db.profile, body.note, "Logistics note");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/trade/wallet" && req.method === "POST") {
    if (!canUse(user, "trade")) return send(res, 403, { error: "Role does not allow wallet workflows" });
    const body = await readBody(req);
    ensureTradeProfile(db.profile);
    const tx = {
      id: crypto.randomUUID(),
      provider: body.provider || "Wallet",
      amount: Number(body.amount || 0),
      type: Number(body.amount || 0) >= 0 ? "credit" : "debit",
      status: "posted",
      createdAt: new Date().toISOString()
    };
    db.profile.wallet += tx.amount;
    db.profile.walletTransactions.unshift(tx);
    addTradeEvent(db.profile, { type: "wallet.transaction", label: `${tx.provider} ${tx.type} posted for $${Math.abs(tx.amount)}` });
    logIntegration(db, {
      providerId: "trade-payments",
      module: "AgriTrade",
      action: "wallet.transaction",
      detail: `${tx.provider} ${tx.type} posted.`,
      metadata: { transactionId: tx.id, amount: tx.amount }
    });
    addActivity(db.profile, `${tx.provider} payment posted: $${tx.amount}.`);
    addWorkflowNote(db.profile, body.note, "Payment note");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/trade/buyer-contact" && req.method === "POST") {
    if (!canUse(user, "trade")) return send(res, 403, { error: "Role does not allow buyer contact workflows" });
    const body = await readBody(req);
    const contact = createBuyerContactWorkflow(db, user, body.note || "Buyer contact requested from workflow.");
    addWorkflowNote(db.profile, body.note, "Buyer contact note");
    await writeDb(db);
    const state = publicState(db, user);
    state.buyerContactResult = contact;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/trade/drone-scan" && req.method === "POST") {
    if (!canUse(user, "trade")) return send(res, 403, { error: "Role does not allow drone field intelligence workflows" });
    const body = await readBody(req);
    let scan;
    try {
      ({ scan } = createDroneScan(db, {
        productId: body.productId,
        source: "operator",
        fieldZone: body.fieldZone,
        scanType: body.scanType
      }));
    } catch (error) {
      return send(res, 409, { error: error.message });
    }
    addActivity(db.profile, `${scan.scanRef} drone scan completed for ${scan.productName}.`);
    addWorkflowNote(db.profile, body.note, "Drone scan note");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/trade/drone-mission" && req.method === "POST") {
    if (!canUse(user, "trade")) return send(res, 403, { error: "Role does not allow drone mission workflows" });
    const body = await readBody(req);
    let mission;
    try {
      mission = createDroneMission(db, {
        productId: body.productId,
        source: "operator",
        fieldZone: body.fieldZone,
        objective: body.objective
      });
    } catch (error) {
      return send(res, 409, { error: error.message });
    }
    addActivity(db.profile, `${mission.missionRef} drone mission planned for ${mission.productName}.`);
    addWorkflowNote(db.profile, body.note, "Drone mission note");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/trade/drone-intervention" && req.method === "POST") {
    if (!canUse(user, "trade")) return send(res, 403, { error: "Role does not allow drone intervention workflows" });
    const body = await readBody(req);
    let task;
    try {
      task = createFieldIntervention(db, {
        source: "operator",
        assignedTo: body.assignedTo || "Field agritech team"
      });
    } catch (error) {
      return send(res, 409, { error: error.message });
    }
    addActivity(db.profile, `${task.taskRef} drone intervention assigned for ${task.productName}.`);
    addWorkflowNote(db.profile, body.note, "Field intervention note");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/ai/run" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow AI workflows" });
    const body = await readBody(req);
    const { country, route } = activeContext(db);
    const type = body.type || "command";
    const result = await runAi(type, country, route, db.profile);
    recordAiRun(db, { type, country, route, result, module: body.module || aiModuleForType(type, "AI") });
    addActivity(db.profile, db.profile.aiActivity);
    addWorkflowNote(db.profile, body.note, "AI note");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/ai/review" && req.method === "POST") {
    if (!canUse(user, "governance")) return send(res, 403, { error: "Role does not allow AI review" });
    const body = await readBody(req);
    ensureAiProfile(db.profile);
    const run = db.profile.aiRuns.find(item => item.id === body.runId) || db.profile.aiRuns[0];
    if (!run) return send(res, 404, { error: "AI run not found" });
    run.reviewStatus = body.decision === "reject" ? "rejected" : "approved";
    run.reviewedBy = user.name;
    run.reviewedAt = new Date().toISOString();
    run.reviewNote = String(body.note || "").trim();
    logIntegration(db, {
      providerId: "openai",
      module: "AI",
      action: "ai.reviewed",
      detail: `${run.type} AI run ${run.reviewStatus} by ${user.name}.`,
      metadata: { runId: run.id, decision: run.reviewStatus }
    });
    addActivity(db.profile, `${run.type} AI run ${run.reviewStatus} by ${user.name}.`);
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/agent/plan" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow agent planning" });
    const body = await readBody(req);
    ensureAiProfile(db.profile);
    const goal = String(body.goal || "Create an AgriNexus cross-module plan.").trim();
    const plan = buildAgentPlan(db, goal, user);
    db.profile.agentPlans.unshift(plan);
    db.profile.agentPlans = db.profile.agentPlans.slice(0, 12);
    logIntegration(db, {
      providerId: "openai",
      module: "AI",
      action: "agent.plan_created",
      detail: `Agent plan created with ${plan.steps.length} tool steps.`,
      metadata: { planId: plan.id, goal }
    });
    addActivity(db.profile, `Agent plan created: ${goal}`);
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/agent/execute" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow agent execution" });
    const body = await readBody(req);
    ensureAiProfile(db.profile);
    const plan = db.profile.agentPlans.find(item => item.id === body.planId) || db.profile.agentPlans[0];
    if (!plan) return send(res, 404, { error: "Agent plan not found" });
    const approved = body.approved !== false;
    if (!approved) return send(res, 409, { error: "Agent execution requires operator approval." });
    const execution = await executeAgentPlanObject(db, user, plan, body.note || "Approved from Agent Command Center");
    addWorkflowNote(db.profile, body.note, "Agent note");
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  if (url.pathname === "/api/agent/briefing" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow agent briefings" });
    const body = await readBody(req);
    const briefing = agentBriefing(db, user, body.purpose || "government presentation");
    await writeDb(db);
    const state = publicState(db, user);
    state.briefingResult = briefing;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/agent/command" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow agent commands" });
    const body = await readBody(req);
    const command = String(body.command || "").trim();
    if (body.inputMode === "voice") voiceRecord(db, user, "speech-to-text", `Voice command transcribed: ${command}`, { command });
    const result = await runAgentCommand(db, user, command, { confirm: body.confirm === true, stageOnly: body.stageOnly === true, conversational: body.conversational === true, note: body.note });
    commandRecord(db, user, command, result);
    if (body.outputMode === "voice") voiceRecord(db, user, "text-to-speech", `Voice response prepared: ${result.response}`, { response: result.response });
    addWorkflowNote(db.profile, body.note, "Agent command note");
    await writeDb(db);
    const state = publicState(db, user);
    state.commandResult = result;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/voice/transcribe" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow voice commands" });
    const body = await readBody(req);
    const transcript = String(body.transcript || body.text || "").trim();
    const record = voiceRecord(db, user, "speech-to-text", transcript ? `Speech captured: ${transcript}` : "Speech capture session opened.", { language: body.language || user.language || "en" });
    await writeDb(db);
    const state = publicState(db, user);
    state.voiceResult = { transcript, sessionId: record.id, provider: record.provider };
    return send(res, 200, state);
  }

  if (url.pathname === "/api/voice/speak" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow voice responses" });
    const body = await readBody(req);
    const text = String(body.text || "").trim();
    if (!text) return send(res, 400, { error: "Voice response text is required" });
    const record = voiceRecord(db, user, "text-to-speech", `Speech response prepared: ${text}`, { language: body.language || user.language || "en" });
    await writeDb(db);
    const state = publicState(db, user);
    state.voiceResult = { text, sessionId: record.id, provider: record.provider };
    return send(res, 200, state);
  }

  if (url.pathname === "/api/translate" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow translation workflows" });
    const body = await readBody(req);
    const text = String(body.text || "").trim();
    if (!text) return send(res, 400, { error: "Text is required" });
    const result = await translateDynamicContent(db, user, {
      text,
      targetLanguage: body.targetLanguage || user.language || "en",
      sourceLanguage: body.sourceLanguage || "en",
      context: body.context || "dynamic"
    });
    await writeDb(db);
    const state = publicState(db, user);
    state.translationResult = result;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/notifications/send" && req.method === "POST") {
    if (!canUse(user, "notifications")) return send(res, 403, { error: "Role does not allow notifications" });
    const body = await readBody(req);
    const moduleName = String(body.module || "Platform");
    const providerByModule = {
      Learning: "learning-certificates",
      Workforce: "workforce-notifications",
      Healthcare: "health-notifications",
      AgriTrade: "trade-logistics",
      AI: "openai",
      Platform: "openai"
    };
    const providerId = providerByModule[moduleName] || "openai";
    const message = String(body.message || `${moduleName} workflow notification sent.`).trim();
    addNotification(db.profile, { module: moduleName, providerId, channel: body.channel || "workflow", message, createdBy: user.name });
    logIntegration(db, {
      providerId,
      module: moduleName,
      action: "notification.sent",
      detail: message,
      metadata: { channel: body.channel || "workflow", createdBy: user.name }
    });
    addActivity(db.profile, `${moduleName} notification sent: ${message}`);
    await writeDb(db);
    return send(res, 200, publicState(db, user));
  }

  return send(res, 404, { error: "API route not found" });
}

function serveStatic(req, res, url) {
  let filePath = url.pathname === "/" ? path.join(PUBLIC, "index.html") : path.join(PUBLIC, decodeURIComponent(url.pathname));
  if (!filePath.startsWith(PUBLIC)) return send(res, 403, "Forbidden");
  fs.readFile(filePath, (err, data) => {
    if (err) return send(res, 404, "Not found");
    res.writeHead(200, { "content-type": mime[path.extname(filePath)] || "application/octet-stream" });
    res.end(data);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  try {
    if (!rateLimit(req)) return send(res, 429, { error: "Too many requests" });
    if (url.pathname.startsWith("/api/")) return await api(req, res, url);
    return serveStatic(req, res, url);
  } catch (error) {
    return send(res, 500, { error: error.message || "Server error" });
  }
});

server.on("error", error => {
  console.error(`AgriNexus server failed: ${error.message}`);
  process.exit(1);
});

server.listen(PORT, HOST, () => {
  console.log(`AgriNexus running at http://${HOST}:${PORT}`);
});
