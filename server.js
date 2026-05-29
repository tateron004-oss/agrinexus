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
const PROVIDER_WEBHOOK_TIMEOUT_MS = Number(process.env.PROVIDER_WEBHOOK_TIMEOUT_MS || 3000);
const LIVE_SERVICE_TIMEOUT_MS = Number(process.env.LIVE_SERVICE_TIMEOUT_MS || 3000);
const sessions = new Map();
const rateBuckets = new Map();
const phoneAudioCache = new Map();
const COUNTRY_LANGUAGE = {
  nigeria: "en",
  kenya: "sw",
  egypt: "ar",
  drc: "fr"
};
const DEFAULT_USERS = [
  { id: "u_admin", name: "Platform Admin", email: "admin@agrinexus.org", password: "Admin2026!", role: "Admin", country: "Nigeria", language: "en" },
  { id: "u_standard", name: "Standard User", email: "user@agrinexus.org", password: "User2026!", role: "Standard User", country: "Nigeria", language: "en" },
  { id: "u_investor", name: "Investor Viewer", email: "investor@agrinexus.org", password: "Investor2026!", role: "Investor", country: "Egypt", language: "ar" }
];
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
  "phone-voice": { modeEnv: "PHONE_PROVIDER", credentialEnvs: ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER"] },
  "translation": { modeEnv: "TRANSLATION_PROVIDER", credentialEnvs: ["TRANSLATION_WEBHOOK_URL", "TRANSLATION_PROVIDER_API_KEY"] },
  "auth-users": { modeEnv: "AUTH_PROVIDER", credentialEnvs: ["AUTH_WEBHOOK_URL", "AUTH_PROVIDER_API_KEY"] },
  "auth-password-reset": { modeEnv: "PASSWORD_RESET_PROVIDER", credentialEnvs: ["PASSWORD_RESET_WEBHOOK_URL", "AUTH_PROVIDER_API_KEY"] },
  "email-delivery": { modeEnv: "EMAIL_PROVIDER", credentialEnvs: ["EMAIL_WEBHOOK_URL", "COMMUNICATION_PROVIDER_API_KEY"] },
  "sms-delivery": { modeEnv: "SMS_PROVIDER", credentialEnvs: ["SMS_WEBHOOK_URL", "COMMUNICATION_PROVIDER_API_KEY"] },
  "whatsapp-delivery": { modeEnv: "WHATSAPP_PROVIDER", credentialEnvs: ["WHATSAPP_WEBHOOK_URL", "COMMUNICATION_PROVIDER_API_KEY"] },
  "billing-subscriptions": { modeEnv: "BILLING_PROVIDER", credentialEnvs: ["BILLING_WEBHOOK_URL", "BILLING_PROVIDER_API_KEY"] }
};

const PROVIDER_ENGINE_ENDPOINTS = {
  "learning-courses": "/learning/courses",
  "learning-certificates": "/learning/certificates",
  "workforce-jobs": "/workforce/jobs",
  "workforce-calendar": "/workforce/calendar",
  "workforce-notifications": "/workforce/notifications",
  "workforce-hris": "/workforce/hris",
  "workforce-shifts": "/workforce/shifts",
  "health-telehealth": "/health/telehealth",
  "health-ehr": "/health/ehr",
  "health-notifications": "/health/notifications",
  "trade-payments": "/trade/payments",
  "trade-logistics": "/trade/logistics",
  "trade-market": "/trade/market",
  "field-drones": "/field/drones",
  "voice-stt": "/voice/transcribe",
  "voice-tts": "/voice/speak",
  "translation": "/translate",
  "auth-users": "/auth/users",
  "auth-password-reset": "/auth/password-reset",
  "email-delivery": "/communications/email",
  "sms-delivery": "/communications/sms",
  "whatsapp-delivery": "/communications/whatsapp",
  "billing-subscriptions": "/billing/subscriptions"
};

const BUILT_IN_PROVIDER_DEFINITIONS = [
  {
    id: "phone-voice",
    name: "Phone Voice Assistant",
    module: "AI",
    mode: "twilio-ready",
    status: "needs-credentials",
    detail: "Twilio Programmable Voice webhooks are available; add Twilio credentials and point a phone number to /api/voice/phone/incoming."
  }
];

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

function ensureDefaultUsers(db) {
  db.users = db.users || [];
  let changed = false;
  for (const account of DEFAULT_USERS) {
    const existing = db.users.find(user => user.email === account.email || user.id === account.id);
    if (existing) {
      for (const [key, value] of Object.entries(account)) {
        if (existing[key] === undefined || existing[key] === "") {
          existing[key] = value;
          changed = true;
        }
      }
    } else {
      db.users.push({ ...account });
      changed = true;
    }
  }
  return changed;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", chunk => {
      data += chunk;
      if (data.length > 20_000_000) reject(new Error("Payload too large"));
    });
    req.on("end", () => {
      try {
        const contentType = String(req.headers["content-type"] || "");
        if (!data) return resolve({});
        if (contentType.includes("application/x-www-form-urlencoded")) {
          return resolve(Object.fromEntries(new URLSearchParams(data)));
        }
        resolve(JSON.parse(data));
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
    loginProfiles: DEFAULT_USERS.map(user => ({ name: user.name, email: user.email, password: user.password, role: user.role, country: user.country, language: user.language })),
    countries: db.countries,
    routes: db.routes,
    courses: db.courses,
    learningCatalog: learningCatalog(db),
    roles: db.roles,
    products: db.products || [],
    providers,
    capabilities: capabilityMatrix(db, providers),
    intelligentAssistant: intelligentAssistantModel(db, user, providers),
    behaviorModel: assistantBehaviorModel(db, user),
    sessionBriefing: sessionBriefingModel(db, user, providers),
    smartActions: smartNextActions(db, user, providers),
    activationGuide: productionActivationGuide(db, providers),
    engineSetup: renderEngineEnvPlan(db),
    automation: automationReadiness(db, providers),
    production: productionCompleteness(db, providers),
    productionPlan: productionOperationsPlan(db, providers),
    admin: adminSnapshot(db, providers),
    profile: db.profile
  };
}

function permissionsForRole(role) {
  const all = ["learning", "workforce", "health", "trade", "map", "ai", "integrations", "admin", "profile", "notifications", "governance"];
  const matrix = {
    Admin: all,
    "Standard User": ["learning", "workforce", "health", "trade", "map", "ai", "notifications", "profile"],
    Investor: ["learning", "workforce", "health", "trade", "map", "ai", "profile"]
  };
  const allowed = new Set(matrix[role] || matrix["Standard User"]);
  return Object.fromEntries(all.map(item => [item, allowed.has(item)]));
}

function canUse(user, area) {
  return Boolean(permissionsForRole(user.role)[area]);
}

function assistantBehaviorModel(db, user) {
  ensureAiProfile(db.profile);
  const language = user?.language || db.profile.accessibilityProfile?.language || "en";
  const role = user?.role || "Standard User";
  const model = db.profile.agentMemory.userModel || {};
  const currentPersona = model.currentPersona || "general-operator";
  const communicationStyle = model.communicationStyle || "plain-language-step-by-step";
  const accessibilityMode = model.accessibilityMode || db.profile.accessibilityProfile?.supportMode || "standard";
  const audience = model.currentAudience === "investor-government"
    ? "investors, government leaders, and non-technical decision makers"
    : currentPersona === "farmer-or-trade-operator"
      ? "farmers, crop sellers, buyer coordinators, and field teams"
      : currentPersona === "health-access-user"
        ? "patients, caregivers, telehealth aides, and community health teams"
        : currentPersona === "workforce-candidate"
          ? "job seekers, workforce operators, mentors, and placement teams"
          : currentPersona === "learner"
            ? "learners, trainers, and low-bandwidth education teams"
            : "low-tech rural and cross-language users";
  return {
    id: "human-guide-behavior-model",
    name: "Human Guide Behavior Model",
    status: "active",
    language,
    role,
    audience,
    currentPersona,
    communicationStyle,
    accessibilityMode,
    tone: "warm, plain-language, calm, confident, patient, non-robotic",
    interactionStyle: "voice-first, one-step-at-a-time, confirmation-before-action",
    turnPattern: [
      "Acknowledge what the user asked.",
      "Restate the request in plain language so the user knows they were understood.",
      "Orient the user to where they are without using technical menu language.",
      "Recommend one clear next step.",
      "Ask for confirmation before committing important workflow records.",
      "Offer a simple phrase the user can say next."
    ],
    principles: [
      "Use short natural sentences.",
      "Avoid technical labels unless the user asks for them.",
      "Never overwhelm a non-technical user with too many choices.",
      "Prefer spoken guidance over button-heavy navigation.",
      "Explain actions as everyday tasks like start care, learn a lesson, apply for work, sell crops, or check the farm.",
      "Keep AI actions supervised and explain when human review matters.",
      "Adapt to role, language, accessibility needs, and remembered preferences.",
      "When uncertain, ask one helpful question instead of dumping instructions."
    ],
    lowTechBehaviors: [
      "Use one clear question at a time.",
      "Accept imperfect wording and route by intent.",
      "Confirm before changing records, sending messages, or starting provider workflows.",
      "Offer read-aloud support for users with low literacy or visual impairment.",
      "Keep next steps useful even when external providers are unavailable."
    ],
    followUps: [
      "Would you like me to open that now?",
      "Should I prepare the intake?",
      "Do you want me to read this aloud?",
      "Would you like the next step or the full tour?"
    ],
    evidence: {
      conversations: (db.profile.agentConversation || []).length,
      memories: (db.profile.agentMemory.preferences || []).length + (db.profile.agentMemory.longTermFacts || []).length,
      guidedIntakes: (db.profile.agentMemory.conversationalIntakes || []).length
    }
  };
}

function behaviorFollowUpForResult(result = {}) {
  const intent = String(result.intent || "");
  const status = String(result.status || "");
  if (status === "needs-confirmation") return "Say yes to continue, or no to cancel.";
  if (status === "needs-input") return "Tell me the next answer in your own words.";
  if (intent.includes("progress_summary")) return "You can say what should I do next if you want the next guided step.";
  if (intent.includes("platform_guide")) return "You can say the suggested command when you are ready.";
  if (intent.includes("investor_presentation")) return "You can say read this aloud when you want the presentation voiceover.";
  if (intent.includes("ten_item_model")) return "You can test any item by saying its command.";
  return "Would you like me to guide the next step?";
}

function adaptiveBehaviorNudge(behavior = {}, result = {}) {
  const status = String(result.status || "");
  if (status === "needs-confirmation") return "Say yes when you are ready, or no if you want me to stop.";
  if (behavior.accessibilityMode && behavior.accessibilityMode !== "standard") return "I can read this aloud, simplify it, or keep going step by step.";
  if (behavior.currentPersona === "farmer-or-trade-operator") return "You can ask me to contact the buyer, check the field, plan the route, or explain the crop evidence.";
  if (behavior.currentPersona === "health-access-user") return "You can ask me to start intake, connect a representative, add captions, or check safety risk.";
  if (behavior.currentPersona === "workforce-candidate") return "You can ask me to match a role, apply, prepare for interview, or schedule a shift.";
  if (behavior.currentPersona === "learner") return "You can ask me to start the course, complete a lesson, build captions, or issue a certificate.";
  if (behavior.currentAudience === "investor-government") return "You can ask me for the investor summary, evidence, or the next presentation step.";
  return behaviorFollowUpForResult(result);
}

function suggestedRepliesForResult(result = {}, behavior = {}) {
  const intent = String(result.intent || "");
  const status = String(result.status || "");
  if (intent.includes("clarification_started")) return result.metadata?.suggestedReplies || ["contact buyer", "start intake", "apply for role"];
  if (intent.includes("clarification_resolved")) return ["yes", "no", "explain that"];
  if (intent.includes("voice_recovery") && result.metadata?.suggestions) return result.metadata.suggestions;
  if (intent.includes("voice_recovery_resolved")) return ["yes", "no", "explain that"];
  if (status === "needs-confirmation") return ["yes", "no", "explain that"];
  if (status === "needs-input") return ["tell me more", "start intake", "take me there"];
  if (status === "paused") return ["continue", "repeat that", "take me there"];
  if (behavior.accessibilityMode && behavior.accessibilityMode !== "standard") return ["read it aloud", "make it simpler", "continue"];
  if (intent.includes("open_reasoning")) return ["do the next step", "explain that", "take me there"];
  if (intent.includes("followup_explained")) return ["yes", "no", "tell me more"];
  if (intent.includes("acknowledged")) return ["do the next step", "what should I do next", "open that"];
  if (intent.includes("workflow_outcome_summary")) return ["do the next step", "explain that", "show evidence"];
  if (intent.includes("daily_operator_briefing")) return ["do the next step", "run full mission", "open dashboard"];
  if (intent.includes("voice_mission_status")) return ["continue", "do the next step", "take me there"];
  if (intent.includes("language_changed")) return ["continue", "what can I say", "open voice help"];
  if (intent.includes("conversation.greeting")) return ["help me get started", "open telehealth", "contact my buyer"];
  if (behavior.currentPersona === "farmer-or-trade-operator") return ["contact buyer", "run drone scan", "check route risk"];
  if (behavior.currentPersona === "health-access-user") return ["start intake", "connect representative", "turn on captions"];
  if (behavior.currentPersona === "workforce-candidate") return ["apply for role", "review gaps", "schedule interview"];
  if (behavior.currentPersona === "learner") return ["start course", "complete lesson", "issue certificate"];
  if (behavior.currentAudience === "investor-government") return ["investor summary", "show evidence", "run demo tour"];
  return ["do the next step", "what should I do next", "open voice help"];
}

function humanizeAgentResult(db, user, result = {}, command = "") {
  if (command) updateConversationUserModel(db.profile, command);
  const behavior = assistantBehaviorModel(db, user);
  const original = String(result.response || "I am ready.");
  const alreadyNatural = /^(I hear you|Absolutely|Got it|Done|Here is|Welcome|I can|I opened|I created|I submitted|The full intelligent model)/i.test(original);
  const prefix = alreadyNatural ? "" : "Got it. ";
  const followUp = adaptiveBehaviorNudge(behavior, result);
  const suggestedReplies = suggestedRepliesForResult(result, behavior);
  const response = `${prefix}${original}${/[.!?]$/.test(original.trim()) ? "" : "."} ${followUp}`;
  return {
    ...result,
    response,
    metadata: {
      ...(result.metadata || {}),
      behaviorModel: {
        id: behavior.id,
        tone: behavior.tone,
        audience: behavior.audience,
        currentPersona: behavior.currentPersona,
        communicationStyle: behavior.communicationStyle,
        accessibilityMode: behavior.accessibilityMode,
        interactionStyle: behavior.interactionStyle,
        turnPattern: behavior.turnPattern.slice(0, 5),
        followUp
      },
      suggestedReplies
    }
  };
}

function intelligentAssistantModel(db, user, providers = runtimeProviders(db)) {
  ensureLearningProfile(db.profile);
  ensureWorkforceProfile(db.profile);
  ensureHealthProfile(db.profile);
  ensureTradeProfile(db.profile);
  ensureAiProfile(db.profile);
  ensureOperationsProfile(db.profile);
  const providerOk = id => ["connected", "ready"].includes(providers.find(item => item.id === id)?.status);
  const hasMemory = Boolean(
    (db.profile.agentMemory.preferences || []).length
    || (db.profile.agentMemory.longTermFacts || []).length
    || (db.profile.agentMemory.conversationalIntakes || []).length
  );
  const hasVoice = providerOk("voice-tts") || Boolean(process.env.OPENAI_API_KEY);
  const hasTranslation = providerOk("translation") || ["en", "fr", "sw", "ar", "es"].includes(user?.language || db.profile.accessibilityProfile?.language || "en");
  const items = [
    {
      id: "personal-onboarding",
      title: "Personal onboarding",
      ready: (db.profile.onboardingRuns || []).length > 0 || Boolean(user?.role),
      evidence: user?.role ? `${user.role} experience selected` : "User role selects the experience.",
      command: "I am new, guide me"
    },
    {
      id: "memory-across-sessions",
      title: "Memory across sessions",
      ready: hasMemory,
      evidence: hasMemory ? `${(db.profile.agentMemory.preferences || []).length + (db.profile.agentMemory.longTermFacts || []).length + (db.profile.agentMemory.conversationalIntakes || []).length} memory record(s)` : "Say remember, then tell AgriNexus an important preference.",
      command: "remember that I prefer voice-first support"
    },
    {
      id: "smart-next-step-coaching",
      title: "Smart next-step coaching",
      ready: true,
      evidence: `${smartNextActions(db, user, providers).items.length} recommended action(s) available`,
      command: "what should I do next"
    },
    {
      id: "conversational-intake",
      title: "Conversational intake",
      ready: true,
      evidence: `${(db.profile.agentMemory.conversationalIntakes || []).length} guided intake(s) captured`,
      command: "start telehealth intake and ask me questions"
    },
    {
      id: "multilingual-voice-guide",
      title: "Multilingual voice guide",
      ready: hasTranslation && hasVoice,
      evidence: `${voiceLanguageLabel(user?.language || db.profile.accessibilityProfile?.language || "en")} voice/text response path`,
      command: "speak to me in my selected language"
    },
    {
      id: "role-aware-assistant",
      title: "Role-aware assistant",
      ready: Boolean(user?.role),
      evidence: `${user?.role || "Standard User"} permissions shape visible modules and actions`,
      command: "what can I do with my account"
    },
    {
      id: "autopilot-missions",
      title: "Autopilot missions",
      ready: true,
      evidence: `${(db.profile.agentPlans || []).filter(plan => plan.mode === "autopilot").length} autopilot plan(s), ${(db.profile.agentExecutions || []).length} execution(s)`,
      command: "autopilot help this farmer get from crop problem to buyer payment"
    },
    {
      id: "live-service-actions",
      title: "Live service actions",
      ready: providers.filter(provider => provider.status === "connected").length >= Math.max(1, providers.length - 2),
      evidence: `${providers.filter(provider => provider.status === "connected").length}/${providers.length} provider(s) connected or ready`,
      command: "test provider engines"
    },
    {
      id: "accessibility-first-behavior",
      title: "Accessibility-first behavior",
      ready: Boolean(db.profile.accessibilityProfile?.hearingSupport || db.profile.accessibilityProfile?.visualSupport),
      evidence: (db.profile.accessibilityProfile?.preferredFormats || []).join(", ") || "captions, audio guide, large print, low bandwidth",
      command: "prepare accessible support"
    },
    {
      id: "investor-presentation-mode",
      title: "Investor presentation mode",
      ready: (db.profile.agentBriefings || []).length > 0 || (db.profile.demoMoments || []).length > 0,
      evidence: `${(db.profile.agentBriefings || []).length} briefing(s), ${(db.profile.demoMoments || []).length} demo moment(s)`,
      command: "prepare an investor presentation"
    }
  ];
  const readyCount = items.filter(item => item.ready).length;
  return {
    status: readyCount === items.length ? "all-ten-active" : "active-with-setup-gates",
    readyCount,
    total: items.length,
    items
  };
}

function voiceLanguageLabel(language) {
  return { en: "English", fr: "French", sw: "Kiswahili", ar: "Arabic", es: "Spanish" }[language] || "selected-language";
}

function platformProgressSummary(db, user, providers = runtimeProviders(db)) {
  ensureLearningProfile(db.profile);
  ensureWorkforceProfile(db.profile);
  ensureHealthProfile(db.profile);
  ensureTradeProfile(db.profile);
  ensureAiProfile(db.profile);
  const next = smartNextActions(db, user, providers).items[0];
  const connected = providers.filter(provider => provider.status === "connected").length;
  return [
    `${db.profile.readiness || 0}% workforce readiness`,
    `${(db.profile.enrollments || []).length} course enrollment(s) and ${(db.profile.certificates || []).length} certificate(s)`,
    `${(db.profile.applications || []).length} workforce application(s) and ${(db.profile.shiftSchedule || []).length} shift(s)`,
    `${(db.profile.healthIntakes || []).length} telehealth intake(s) and ${(db.profile.carePlans || []).length} care plan(s)`,
    `${(db.profile.orders || []).length} trade order(s), ${(db.profile.droneScans || []).length} drone scan(s), and ${(db.profile.mapEvidencePackets || []).length} map packet(s)`,
    `${connected}/${providers.length} provider engine(s) connected`,
    next ? `next recommended step: ${next.title}` : "next recommended step: ask AgriNexus for guidance"
  ].join("; ");
}

function sessionBriefingModel(db, user, providers = runtimeProviders(db)) {
  ensureOperationsProfile(db.profile);
  ensureAiProfile(db.profile);
  const nextActions = smartNextActions(db, user, providers).items;
  const top = nextActions[0];
  const role = user?.role || "Standard User";
  const firstRun = !(db.profile.onboardingRuns || []).length;
  const model = intelligentAssistantModel(db, user, providers);
  const progress = platformProgressSummary(db, user, providers);
  const prompts = [
    firstRun ? "I am new, guide me" : "what should I do next",
    top?.title || "help me",
    "summarize my progress",
    "show me all 10 items"
  ];
  return {
    title: firstRun ? "Welcome. I can guide your first session." : "Welcome back. Here is your operating brief.",
    message: firstRun
      ? `I can walk you through AgriNexus step by step. Your ${role} access is ready, and the assistant model has ${model.readyCount}/${model.total} items active.`
      : `Your ${role} workspace is ready. ${top ? `Recommended next: ${top.title}. ${top.detail}` : "Ask AgriNexus for your next best step."}`,
    progress,
    nextAction: top || null,
    prompts,
    status: firstRun ? "first-time-guide" : "returning-session",
    assistantReadiness: { readyCount: model.readyCount, total: model.total, status: model.status }
  };
}

function workflowOutcomeSummary(db) {
  ensureAiProfile(db.profile);
  const latestCommand = (db.profile.agentCommands || [])[0] || null;
  const latestEvent = (db.profile.integrationEvents || [])[0] || null;
  const latestActivity = (db.profile.activity || [])[0] || "";
  const evidence = [
    latestCommand ? `voice command ${latestCommand.intent}` : "",
    latestEvent ? `${latestEvent.module} evidence: ${latestEvent.action}` : "",
    latestActivity ? `activity: ${latestActivity.replace(/^\S+\s+/, "")}` : ""
  ].filter(Boolean);
  const next = smartNextActions(db, null, runtimeProviders(db)).items[0];
  return {
    latestCommand,
    latestEvent,
    latestActivity,
    evidence,
    next,
    text: evidence.length
      ? `The last workflow created ${evidence.join("; ")}. ${next ? `Next best step: ${next.title}. ${next.detail}` : "Next best step: ask AgriNexus for guidance."}`
      : "No workflow evidence has been created yet in this session. Start with a voice command like open telehealth, apply for that job, or contact my buyer."
  };
}

function dailyOperatorBriefing(db, user, providers = runtimeProviders(db)) {
  ensureLearningProfile(db.profile);
  ensureWorkforceProfile(db.profile);
  ensureHealthProfile(db.profile);
  ensureTradeProfile(db.profile);
  ensureAiProfile(db.profile);
  const connected = providers.filter(provider => provider.status === "connected").length;
  const nextActions = smartNextActions(db, user, providers).items.slice(0, 3);
  const latestRisk = (db.profile.publicHealthChecks || [])[0];
  const latestTrade = (db.profile.tradeEfficiencyReviews || [])[0];
  const priorities = [
    `${(db.profile.healthIntakes || []).length} telehealth intake(s), ${(db.profile.telehealthReferrals || []).length} referral(s), and ${(db.profile.telehealthFollowUps || []).length} follow-up(s)`,
    `${(db.profile.enrollments || []).length} learner enrollment(s), ${(db.profile.certificates || []).length} certificate(s), and ${db.profile.readiness || 0}% workforce readiness`,
    `${(db.profile.applications || []).length} job application(s), ${(db.profile.shiftSchedule || []).length} shift(s), and ${(db.profile.interviews || 0)} interview(s)`,
    `${(db.profile.orders || []).length} trade order(s), ${(db.profile.buyerContacts || []).length} buyer contact(s), and ${(db.profile.droneScans || []).length} drone scan(s)`,
    `${connected}/${providers.length} provider engine(s) connected`
  ];
  const caution = latestRisk ? `Latest public-health check: ${latestRisk.regionName} is ${latestRisk.riskLevel}.` : "";
  const trade = latestTrade ? `Latest AgriTrade efficiency score: ${latestTrade.score}% for ${latestTrade.productName}.` : "";
  return {
    title: `Good morning ${user?.name?.split(/\s+/)[0] || "operator"}.`,
    priorities,
    nextActions,
    caution,
    trade,
    text: [
      `Good morning ${user?.name?.split(/\s+/)[0] || "operator"}. Here is your AgriNexus operating brief.`,
      priorities.join("; "),
      caution,
      trade,
      nextActions.length ? `Top next steps: ${nextActions.map(item => `${item.title} in ${item.module}`).join("; ")}.` : "Top next step: ask AgriNexus to guide the next workflow."
    ].filter(Boolean).join(" ")
  };
}

function runtimeProviders(db) {
  const baseProviders = [...(db.providers || [])];
  for (const provider of BUILT_IN_PROVIDER_DEFINITIONS) {
    if (!baseProviders.some(item => item.id === provider.id)) baseProviders.push(provider);
  }
  return baseProviders.map(provider => {
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
      const normalizedMode = String(mode || "").toLowerCase();
      const hasTileUrl = Boolean(process.env.MAP_TILE_URL);
      const liveMap = normalizedMode === "openstreetmap" || (normalizedMode === "custom-tile" && hasTileUrl);
      return {
        ...provider,
        mode,
        status: liveMap ? "connected" : (REQUIRE_LIVE_SERVICES ? "needs-credentials" : provider.status),
        detail: normalizedMode === "openstreetmap"
          ? "OpenStreetMap live tile provider is enabled for launch."
          : normalizedMode === "custom-tile"
          ? (hasTileUrl ? "Custom map tile URL configured." : "Set MAP_TILE_URL for a custom map tile provider.")
          : REQUIRE_LIVE_SERVICES
          ? "Strict live mode requires MAP_TILE_PROVIDER=openstreetmap or MAP_TILE_PROVIDER=custom-tile with MAP_TILE_URL."
          : provider.detail
      };
    }
    const config = PROVIDER_CONFIG[provider.id];
    if (config) {
      const runtime = providerRuntime(provider.id);
      const openAiVoiceProvider = ["voice-stt", "voice-tts"].includes(provider.id) && Boolean(process.env.OPENAI_API_KEY);
      const mode = runtime.mode || provider.mode;
      const isSandbox = mode === "sandbox";
      const isBrowser = mode === "browser";
      const isOpenAiVoice = mode === "openai";
      const hasCredential = Boolean(runtime.webhookUrl && runtime.apiKey);
      const hasBridge = Boolean(providerEngineWebhookUrl(provider.id) && runtime.apiKey);
      const hasOpenAiVoice = isOpenAiVoice && Boolean(process.env.OPENAI_API_KEY);
      const hasTwilioVoice = provider.id === "phone-voice"
        && mode === "twilio"
        && Boolean(process.env.TWILIO_ACCOUNT_SID)
        && Boolean(process.env.TWILIO_AUTH_TOKEN)
        && Boolean(process.env.TWILIO_PHONE_NUMBER)
        && Boolean(process.env.PUBLIC_BASE_URL);
      return {
        ...provider,
        mode,
        status: hasOpenAiVoice || hasTwilioVoice ? "connected" : isBrowser ? (REQUIRE_LIVE_SERVICES ? "needs-live-provider" : "connected") : isSandbox ? (REQUIRE_LIVE_SERVICES ? "needs-live-provider" : "connected") : (hasCredential ? "connected" : "needs-credentials"),
        detail: hasOpenAiVoice
          ? `${mode} provider configured through OPENAI_API_KEY.`
          : hasTwilioVoice
          ? "Twilio phone assistant is configured with account credentials, phone number, and PUBLIC_BASE_URL."
          : isBrowser
          ? (REQUIRE_LIVE_SERVICES ? `Strict live mode requires ${config.modeEnv}=webhook and hosted voice credentials.` : provider.detail)
          : isSandbox
          ? (REQUIRE_LIVE_SERVICES ? `Strict live mode requires ${config.modeEnv} to be set to a live provider and credentials configured.` : provider.detail)
          : (hasCredential ? `${mode} provider configured${hasBridge ? " through PROVIDER_ENGINE_BASE_URL bridge" : ""}.` : `Set ${config.credentialEnvs.join(" or ")} or PROVIDER_ENGINE_BASE_URL plus the provider API key to activate ${mode}.`)
      };
    }
    return provider;
  });
}

function runtimeProviderById(db, providerId) {
  return runtimeProviders(db).find(item => item.id === providerId);
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
      voice: ["VOICE_STT_PROVIDER=openai or webhook", "VOICE_TTS_PROVIDER=openai or webhook", "OPENAI_API_KEY or VOICE_*_WEBHOOK_URL + VOICE_PROVIDER_API_KEY"],
      phone: ["PHONE_PROVIDER=twilio", "TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER", "Configure Twilio Voice webhook to /api/voice/phone/incoming"],
      auth: ["AUTH_PROVIDER", "AUTH_WEBHOOK_URL", "PASSWORD_RESET_PROVIDER", "PASSWORD_RESET_WEBHOOK_URL", "AUTH_PROVIDER_API_KEY"],
      communications: ["EMAIL_PROVIDER", "EMAIL_WEBHOOK_URL", "SMS_PROVIDER", "SMS_WEBHOOK_URL", "WHATSAPP_PROVIDER", "WHATSAPP_WEBHOOK_URL", "COMMUNICATION_PROVIDER_API_KEY"],
      billing: ["BILLING_PROVIDER", "BILLING_WEBHOOK_URL", "BILLING_PROVIDER_API_KEY", "BILLING_PRICE_ID"],
      maps: ["MAP_TILE_PROVIDER=openstreetmap or MAP_TILE_PROVIDER=custom-tile + MAP_TILE_URL"],
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
  return keys.map(rawKey => {
    const { key, suggestedValue } = engineCredentialEntry(rawKey);
    const value = process.env[key] || "";
    const unresolved = !value || value.includes("PASTE_") || value.includes("YOUR-") || value.includes("replace-with") || value.includes("your-key-here");
    const ready = suggestedValue ? value === suggestedValue : !unresolved;
    return {
      key,
      expectedValue: suggestedValue || "",
      ready,
      value: unresolved ? "" : maskEngineValue(value)
    };
  });
}

function engineCredentialEntry(rawKey) {
  const [key, ...rest] = String(rawKey || "").split("=");
  return { key, suggestedValue: rest.join("=") || "" };
}

function renderEngineEnvPlan(db) {
  const manifest = liveEngineManifest(db);
  const lines = [];
  const seen = new Set();
  const add = (key, value = "") => {
    if (!key || seen.has(key)) return;
    seen.add(key);
    lines.push({ key, value, renderValue: value || "<add in Render>" });
  };
  const defaults = {
    PROVIDER_ENGINE_BASE_URL: process.env.PROVIDER_ENGINE_BASE_URL || "https://agrinexus-provider-engines.onrender.com",
    AGRINEXUS_REQUIRE_LIVE_SERVICES: "true",
    AGRINEXUS_STATE_STORE: "postgres",
    AI_PROVIDER: "webhook",
    VOICE_STT_PROVIDER: "openai",
    VOICE_TTS_PROVIDER: "openai",
    TRANSLATION_PROVIDER: "webhook",
    MAP_TILE_PROVIDER: "openstreetmap",
    LEARNING_COURSE_PROVIDER: "webhook",
    LEARNING_CERTIFICATE_PROVIDER: "webhook",
    WORKFORCE_JOB_PROVIDER: "webhook",
    WORKFORCE_CALENDAR_PROVIDER: "webhook",
    WORKFORCE_NOTIFICATION_PROVIDER: "webhook",
    WORKFORCE_HRIS_PROVIDER: "webhook",
    WORKFORCE_SHIFT_PROVIDER: "webhook",
    HEALTH_TELEHEALTH_PROVIDER: "webhook",
    HEALTH_NOTIFICATION_PROVIDER: "webhook",
    HEALTH_EHR_PROVIDER: "webhook",
    TRADE_PAYMENT_PROVIDER: "webhook",
    TRADE_LOGISTICS_PROVIDER: "webhook",
    TRADE_MARKET_PROVIDER: "webhook",
    DRONE_PROVIDER: "webhook",
    PHONE_PROVIDER: "twilio",
    AUTH_PROVIDER: "webhook",
    PASSWORD_RESET_PROVIDER: "webhook",
    EMAIL_PROVIDER: "webhook",
    SMS_PROVIDER: "webhook",
    WHATSAPP_PROVIDER: "webhook",
    BILLING_PROVIDER: "webhook"
  };
  Object.entries(defaults).forEach(([key, value]) => add(key, process.env[key] || value));
  for (const engine of manifest.engines) {
    for (const credential of engine.credentials || []) {
      const entry = engineCredentialEntry(credential.key || credential);
      add(entry.key, process.env[entry.key] || defaults[entry.key] || entry.suggestedValue);
    }
  }
  return {
    status: manifest.status,
    totalKeys: lines.length,
    configuredKeys: lines.filter(item => item.value && item.value !== "<add in Render>").length,
    groups: manifest.engines.map(engine => ({
      id: engine.id,
      name: engine.name,
      status: engine.status,
      providerSummary: engine.providerSummary,
      credentialSummary: engine.credentialSummary,
      keys: (engine.credentials || []).map(credential => engineCredentialEntry(credential.key || credential)),
      missing: engine.missing || [],
      userAction: engine.userAction
    })),
    lines,
    envText: lines.map(item => `${item.key}=${item.value}`).join("\n")
  };
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
      credentials: ["VOICE_STT_PROVIDER=openai", "VOICE_TTS_PROVIDER=openai", "OPENAI_API_KEY", "OPENAI_TRANSCRIBE_MODEL", "OPENAI_TTS_MODEL", "OPENAI_TTS_VOICE"],
      userAction: "Set VOICE_STT_PROVIDER=openai and VOICE_TTS_PROVIDER=openai on the platform service, then add OPENAI_API_KEY."
    },
    {
      id: "phone-voice",
      name: "Phone Call Assistant",
      purpose: "Lets users call a Twilio number, speak plain-language commands, and receive voice responses that route platform workflows.",
      providerIds: ["phone-voice"],
      credentials: ["PHONE_PROVIDER=twilio", "TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER", "PUBLIC_BASE_URL"],
      userAction: "Buy/configure a Twilio voice number and set its incoming call webhook to PUBLIC_BASE_URL/api/voice/phone/incoming."
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
      credentials: ["MAP_TILE_PROVIDER=openstreetmap"],
      userAction: "Use OpenStreetMap tiles for launch, or later switch to MAP_TILE_PROVIDER=custom-tile with MAP_TILE_URL."
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

function productionOperationsPlan(db, providers = runtimeProviders(db)) {
  const provider = id => providers.find(item => item.id === id) || {};
  const providerConnected = id => provider(id).status === "connected";
  const hasEnv = key => Boolean(process.env[key] && String(process.env[key]).trim() && !String(process.env[key]).includes("replace-with"));
  const legalFiles = ["terms.html", "privacy.html", "refund.html"].map(file => fs.existsSync(path.join(PUBLIC, file)));
  const readiness = productionReadiness(providers);
  const workflowEvents = db.profile?.integrationEvents || [];
  const workstreams = [
    {
      id: "stable-hosted-data",
      title: "Stable Hosted Data",
      ready: Boolean(hasEnv("DATABASE_URL") && usingPostgresState() && loadOptional("pg")),
      evidence: provider("database").detail || "Database provider status unavailable.",
      missing: ["DATABASE_URL", "AGRINEXUS_STATE_STORE=postgres", "pg package"].filter(item => {
        if (item === "DATABASE_URL") return !hasEnv("DATABASE_URL");
        if (item === "AGRINEXUS_STATE_STORE=postgres") return !usingPostgresState();
        return !loadOptional("pg");
      })
    },
    {
      id: "production-authentication",
      title: "Production Authentication",
      ready: Boolean(hasEnv("SESSION_SECRET") && hasEnv("PASSWORD_PEPPER") && providerConnected("auth-users") && providerConnected("auth-password-reset")),
      evidence: "Login, logout, session cookies, role permissions, subscriber invite, and password reset endpoint are wired.",
      missing: [
        !hasEnv("SESSION_SECRET") && "SESSION_SECRET",
        !hasEnv("PASSWORD_PEPPER") && "PASSWORD_PEPPER",
        !providerConnected("auth-users") && "AUTH_PROVIDER/AUTH_WEBHOOK_URL/AUTH_PROVIDER_API_KEY",
        !providerConnected("auth-password-reset") && "PASSWORD_RESET_PROVIDER/PASSWORD_RESET_WEBHOOK_URL"
      ].filter(Boolean)
    },
    {
      id: "live-provider-engines",
      title: "Live Provider Engines",
      ready: ["openai", "learning-courses", "workforce-jobs", "health-telehealth", "trade-market", "field-drones", "maps"].every(providerConnected),
      evidence: `${providers.filter(item => item.status === "connected").length}/${providers.length} providers report connected.`,
      missing: providers.filter(item => item.status !== "connected").map(item => `${item.name}: ${item.detail}`).slice(0, 8)
    },
    {
      id: "workflow-completion",
      title: "Workflow Completion",
      ready: Boolean(workflowEvents.length >= 12 && fs.existsSync(path.join(ROOT, "scripts", "workflow-button-audit.js"))),
      evidence: `${workflowEvents.length} provider/workflow event(s) recorded; workflow button audit is present.`,
      missing: workflowEvents.length >= 12 ? [] : ["Run end-to-end learning, workforce, health, trade, drone, map, AI, integration, and admin workflows to create production evidence."]
    },
    {
      id: "voice-layer",
      title: "Voice Layer",
      ready: Boolean(providerConnected("voice-stt") && providerConnected("voice-tts") && providerConnected("phone-voice") && (hasEnv("OPENAI_API_KEY") || hasEnv("VOICE_PROVIDER_API_KEY"))),
      evidence: "Browser voice, OpenAI/webhook speech, phone assistant, voice command help, and TTS/STT session records are wired.",
      missing: [
        !providerConnected("voice-stt") && "VOICE_STT_PROVIDER plus STT credentials",
        !providerConnected("voice-tts") && "VOICE_TTS_PROVIDER plus TTS credentials",
        !providerConnected("phone-voice") && "PHONE_PROVIDER=twilio with Twilio credentials",
        !(hasEnv("OPENAI_API_KEY") || hasEnv("VOICE_PROVIDER_API_KEY")) && "OPENAI_API_KEY or VOICE_PROVIDER_API_KEY"
      ].filter(Boolean)
    },
    {
      id: "translation-hardening",
      title: "Translation Hardening",
      ready: Boolean(providerConnected("translation")),
      evidence: "Static UI, dynamic workflow text, voice responses, and voice command help use language-aware translation paths.",
      missing: providerConnected("translation") ? [] : ["TRANSLATION_PROVIDER with TRANSLATION_WEBHOOK_URL and TRANSLATION_PROVIDER_API_KEY for live dynamic translation."]
    },
    {
      id: "admin-operations",
      title: "Admin Operations",
      ready: Boolean(db.admin || db.profile?.subscribers || readiness.moduleReadiness?.length),
      evidence: "Admin control room includes users, subscribers, provider health, production readiness, audit feed, usage, and notification workflow records.",
      missing: []
    },
    {
      id: "testing-regression",
      title: "Testing And Regression",
      ready: ["smoke.js", "production-clickthrough.js", "production-complete-check.js", "full-production-regression.js"].every(file => fs.existsSync(path.join(ROOT, "scripts", file))),
      evidence: "Smoke, click-through, 10-item completeness, and full production regression scripts are available.",
      missing: ["smoke.js", "production-clickthrough.js", "production-complete-check.js", "full-production-regression.js"].filter(file => !fs.existsSync(path.join(ROOT, "scripts", file)))
    },
    {
      id: "compliance-legal",
      title: "Compliance And Legal",
      ready: legalFiles.every(Boolean),
      evidence: "Terms, Privacy, Refund, telehealth consent, referral, follow-up, and human review guardrails are tracked.",
      missing: legalFiles.every(Boolean) ? [] : ["terms.html", "privacy.html", "refund.html"].filter(file => !fs.existsSync(path.join(PUBLIC, file)))
    },
    {
      id: "deployment-polish",
      title: "Deployment Polish",
      ready: Boolean(fs.existsSync(path.join(ROOT, "render.yaml")) && hasEnv("PUBLIC_BASE_URL") && REQUIRE_LIVE_SERVICES),
      evidence: "Render blueprint, health endpoint, strict live mode, environment validation, and deployment runbook signals are present.",
      missing: [
        !fs.existsSync(path.join(ROOT, "render.yaml")) && "render.yaml",
        !hasEnv("PUBLIC_BASE_URL") && "PUBLIC_BASE_URL",
        !REQUIRE_LIVE_SERVICES && "AGRINEXUS_REQUIRE_LIVE_SERVICES=true"
      ].filter(Boolean)
    }
  ];
  const readyCount = workstreams.filter(item => item.ready).length;
  return {
    status: readyCount === workstreams.length ? "production-operational" : "production-hardening",
    readyCount,
    total: workstreams.length,
    workstreams: workstreams.map(item => ({
      ...item,
      status: item.ready ? "ready" : "needs-setup",
      missing: item.missing.length ? item.missing : ["No code gap detected."]
    })),
    nextSteps: workstreams.filter(item => !item.ready).map(item => `${item.title}: ${item.missing.join("; ")}`),
    timestamp: new Date().toISOString()
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
        providerReady("phone-voice", "Phone-call voice assistant provider"),
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

function smartNextActions(db, user, providers = runtimeProviders(db)) {
  ensureLearningProfile(db.profile);
  ensureWorkforceProfile(db.profile);
  ensureHealthProfile(db.profile);
  ensureTradeProfile(db.profile);
  ensureAiProfile(db.profile);
  ensureOperationsProfile(db.profile);
  const providerOk = id => ["connected", "ready"].includes(providers.find(item => item.id === id)?.status);
  const { country, route } = activeContext(db);
  const activeCourse = (db.courses || []).find(course => course.id === db.profile.activeCourseId) || (db.courses || [])[0];
  const eligibleRole = (db.roles || []).find(role => roleReadiness(db.profile, role).eligible) || (db.roles || [])[0];
  const activeProduct = (db.products || []).find(product => product.countryId === country.id) || (db.products || [])[0];
  const actions = [];
  const push = action => actions.push({
    id: action.id,
    module: action.module,
    title: action.title,
    detail: action.detail,
    priority: action.priority || "recommended",
    confidence: action.confidence || 0.88,
    reason: action.reason,
    workflow: action.workflow || null,
    action: action.action || null,
    ai: action.ai || null,
    moduleTest: action.moduleTest || null,
    section: action.section || null,
    roleId: action.roleId || null,
    productId: action.productId || null
  });

  if (!db.profile.enrollments?.length) {
    push({
      id: "start-learning",
      module: "Learning",
      title: "Start the active course",
      detail: `${activeCourse?.title || "Training"} should start first so the user has learning evidence.`,
      reason: "No enrollment record exists yet.",
      workflow: "learning",
      action: "start",
      section: "learning",
      priority: "high"
    });
  } else if (!db.profile.certificates?.length) {
    push({
      id: "complete-lesson",
      module: "Learning",
      title: "Complete the next lesson",
      detail: "Move the learner toward certificate and workforce readiness.",
      reason: "Enrollment exists but no certificate has been issued.",
      workflow: "learning",
      action: "lesson",
      section: "learning"
    });
  }

  if (!db.profile.applications?.length) {
    push({
      id: "apply-workforce",
      module: "Workforce",
      title: "Apply for the best matched role",
      detail: `${eligibleRole?.title || "Available role"} is the next workforce milestone.`,
      reason: "No workforce application has been submitted yet.",
      workflow: "workforce",
      action: "apply-role",
      roleId: eligibleRole?.id,
      section: "workforce",
      priority: db.profile.readiness >= 55 ? "high" : "recommended"
    });
  } else if (!db.profile.shiftSchedule?.length) {
    push({
      id: "schedule-shift",
      module: "Workforce",
      title: "Schedule the first shift",
      detail: "Turn the application into operational work evidence.",
      reason: "Application exists but no shift is scheduled.",
      workflow: "workforce",
      action: "shift",
      section: "workforce"
    });
  }

  if (!db.profile.healthIntakes?.length) {
    push({
      id: "start-telehealth",
      module: "Telehealth",
      title: "Run accessible intake",
      detail: `${country.name} users may need captions, audio, language support, and caregiver handoff.`,
      reason: "No patient intake exists yet.",
      workflow: "health",
      action: "intake",
      section: "health",
      priority: country.risk === "High" ? "high" : "recommended"
    });
  } else if (!db.profile.carePlans?.length) {
    push({
      id: "generate-care-plan",
      module: "Telehealth",
      title: "Generate care plan",
      detail: "Convert intake evidence into a supervised care pathway.",
      reason: "Intake exists but no care plan is recorded.",
      workflow: "health",
      action: "careplan",
      section: "health"
    });
  }

  if (!db.profile.orders?.length) {
    push({
      id: "create-trade-order",
      module: "AgriTrade",
      title: "Create crop order",
      detail: `${activeProduct?.name || "Active crop lot"} needs a trade record before logistics and payment evidence.`,
      reason: "No trade order exists yet.",
      workflow: "trade",
      action: "order",
      productId: activeProduct?.id,
      section: "trade"
    });
  } else if (!db.profile.droneScans?.length) {
    push({
      id: "run-drone-scan",
      module: "AgriTech",
      title: "Run drone field scan",
      detail: "Create crop health, pest, irrigation, and map evidence for the active lot.",
      reason: "Trade exists but no drone intelligence has been recorded.",
      workflow: "trade",
      action: "drone",
      productId: activeProduct?.id,
      section: "trade"
    });
  }

  if (!db.profile.mapEvidencePackets?.length) {
    push({
      id: "map-evidence-packet",
      module: "Maps",
      title: "Compile map evidence packet",
      detail: `${route.name} should have a map packet tying route, farmer, field, risk, and provider evidence together.`,
      reason: "Advanced map evidence packet is not yet recorded.",
      workflow: "map",
      action: "evidence",
      section: "map"
    });
  }

  if (!db.profile.aiRuns?.length || !providerOk("openai")) {
    push({
      id: "run-ai-copilot",
      module: "Agent AI",
      title: "Ask AI for next-step guidance",
      detail: "Generate a governed AI recommendation using the current platform context.",
      reason: providerOk("openai") ? "No AI run exists yet." : "AI provider should be tested or reviewed.",
      ai: "copilot",
      section: "agent"
    });
  }

  const disconnected = providers.filter(provider => provider.status !== "connected");
  if (disconnected.length) {
    push({
      id: "test-engines",
      module: "Integrations",
      title: "Test live engines",
      detail: `${disconnected.length} provider(s) still need confirmation or credentials.`,
      reason: "Provider readiness drives production behavior.",
      workflow: "integrations",
      action: "test-all",
      section: "integrations",
      priority: "high"
    });
  }

  return {
    status: actions.some(action => action.priority === "high") ? "attention-needed" : "guided",
    generatedAt: new Date().toISOString(),
    context: { country: country.name, route: route.name, checkpoint: db.profile.activeCheckpoint, userRole: user?.role || "guest" },
    items: actions.slice(0, 8)
  };
}

function mapTileProbeUrl() {
  if (String(process.env.MAP_TILE_PROVIDER || "").toLowerCase() === "openstreetmap") {
    return "https://tile.openstreetmap.org/0/0/0.png";
  }
  const template = process.env.MAP_TILE_URL || "";
  if (!template) return "";
  return template
    .replace("{z}", "0")
    .replace("{x}", "0")
    .replace("{y}", "0")
    .replace("{s}", "a");
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 8000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function probeUrl(url, options = {}) {
  if (!url) return { attempted: false, ok: false, status: "missing-url" };
  try {
    const response = await fetchWithTimeout(url, { method: options.method || "GET", headers: options.headers || {} }, options.timeoutMs || LIVE_SERVICE_TIMEOUT_MS);
    return { attempted: true, ok: response.ok, status: response.status };
  } catch (error) {
    return { attempted: true, ok: false, status: error.name === "AbortError" ? "timeout" : "fetch-error", error: error.message };
  }
}

async function productionLiveServiceCheck(db, user) {
  ensureAiProfile(db.profile);
  ensureOperationsProfile(db.profile);
  const checks = [];
  const push = (id, title, ok, detail, metadata = {}) => {
    checks.push({ id, title, ok: Boolean(ok), status: ok ? "ready" : "needs-setup", detail, metadata });
  };

  push(
    "postgres",
    "PostgreSQL state store",
    Boolean(process.env.DATABASE_URL && usingPostgresState() && loadOptional("pg")),
    process.env.DATABASE_URL
      ? (usingPostgresState() ? "DATABASE_URL is configured and AGRINEXUS_STATE_STORE=postgres is active." : "DATABASE_URL is configured; set AGRINEXUS_STATE_STORE=postgres to activate hosted persistence.")
      : "DATABASE_URL is missing. Create/link Render PostgreSQL and set AGRINEXUS_STATE_STORE=postgres.",
    { hasDatabaseUrl: Boolean(process.env.DATABASE_URL), stateStore: STATE_STORE, pgAvailable: Boolean(loadOptional("pg")) }
  );

  const bridgeBase = String(process.env.PROVIDER_ENGINE_BASE_URL || "").replace(/\/+$/, "");
  const bridgeProbe = bridgeBase ? await probeUrl(`${bridgeBase}/healthz`) : { attempted: false, ok: false, status: "missing-url" };
  push(
    "provider-engine-bridge",
    "Provider-engine bridge",
    bridgeProbe.ok,
    bridgeProbe.ok ? `Provider bridge responded at ${bridgeBase}/healthz.` : "Set PROVIDER_ENGINE_BASE_URL to the provider-engine Render URL, then redeploy.",
    { baseUrl: bridgeBase || null, probe: bridgeProbe }
  );

  const translationResult = await translateDynamicContent(db, user, {
    text: "Telehealth intake is ready for voice-first support.",
    targetLanguage: "sw",
    sourceLanguage: "en",
    context: "live-service-check"
  });
  push(
    "translation",
    "Translation provider/live translation",
    Boolean(translationResult.translatedText && translationResult.provider !== "local-after-translation-error"),
    `Translation returned through ${translationResult.provider}: ${translationResult.translatedText}`,
    { provider: translationResult.provider, targetLanguage: translationResult.targetLanguage }
  );

  const tileUrl = mapTileProbeUrl();
  const tileProbe = tileUrl ? await probeUrl(tileUrl) : { attempted: false, ok: false, status: "missing-url" };
  const mapProvider = String(process.env.MAP_TILE_PROVIDER || "").toLowerCase();
  const mapReady = mapProvider === "openstreetmap" || (mapProvider === "custom-tile" && Boolean(process.env.MAP_TILE_URL) && (tileProbe.ok || !REQUIRE_LIVE_SERVICES));
  push(
    "map-tiles",
    "Map tile provider",
    mapReady,
    mapReady
      ? `Map tile probe ${tileProbe.ok ? "succeeded" : "did not confirm"} for ${process.env.MAP_TILE_PROVIDER || "custom"} tiles.`
      : "Set MAP_TILE_PROVIDER=openstreetmap or configure MAP_TILE_PROVIDER=custom-tile with MAP_TILE_URL.",
    { provider: process.env.MAP_TILE_PROVIDER || null, tileUrl: tileUrl || null, probe: tileProbe }
  );

  const billingEvent = {
    providerId: "billing-subscriptions",
    module: "Platform",
    action: "billing.live_service_check",
    detail: "Live billing/subscription provider check from production finalization.",
    metadata: { priceId: process.env.BILLING_PRICE_ID || null, checkedBy: user.email }
  };
  const billingDelivery = await dispatchProviderWebhook(db, billingEvent).catch(error => ({ attempted: true, ok: false, status: "dispatch-error", error: error.message }));
  logIntegration(db, { ...billingEvent, status: billingDelivery.ok ? "success" : "needs-credentials", metadata: { ...billingEvent.metadata, delivery: billingDelivery }, dispatch: false });
  push("billing", "Billing/subscription test", billingDelivery.ok && Boolean(process.env.BILLING_PRICE_ID), billingDelivery.ok ? "Billing provider accepted the live check." : "Billing provider or BILLING_PRICE_ID still needs setup.", { delivery: billingDelivery });

  const resetEvent = {
    providerId: "auth-password-reset",
    module: "Platform",
    action: "auth.password_reset_live_check",
    detail: `Password reset provider check for ${user.email}.`,
    metadata: { email: user.email }
  };
  const resetDelivery = await dispatchProviderWebhook(db, resetEvent).catch(error => ({ attempted: true, ok: false, status: "dispatch-error", error: error.message }));
  logIntegration(db, { ...resetEvent, status: resetDelivery.ok ? "success" : "needs-credentials", metadata: { ...resetEvent.metadata, delivery: resetDelivery }, dispatch: false });
  push("auth-password-reset", "Password reset/auth provider test", resetDelivery.ok, resetDelivery.ok ? "Password reset provider accepted the live check." : "Auth/password reset provider still needs endpoint or credentials.", { delivery: resetDelivery });

  const communicationProviders = [
    ["email-delivery", "Email notification"],
    ["sms-delivery", "SMS notification"],
    ["whatsapp-delivery", "WhatsApp notification"]
  ];
  const communicationResults = [];
  for (const [providerId, label] of communicationProviders) {
    const event = {
      providerId,
      module: "Platform",
      action: "notification.live_service_check",
      detail: `${label} live notification provider check.`,
      metadata: { checkedBy: user.email }
    };
    const delivery = await dispatchProviderWebhook(db, event).catch(error => ({ attempted: true, ok: false, status: "dispatch-error", error: error.message }));
    communicationResults.push({ providerId, label, delivery });
    logIntegration(db, { ...event, status: delivery.ok ? "success" : "needs-credentials", metadata: { ...event.metadata, delivery }, dispatch: false });
  }
  const communicationOk = communicationResults.every(item => item.delivery.ok);
  push(
    "communications",
    "Email/SMS/WhatsApp notification test",
    communicationOk,
    communicationOk ? "Email, SMS, and WhatsApp providers accepted live checks." : "One or more communication providers still need endpoint/credentials.",
    { results: communicationResults }
  );

  const report = {
    id: crypto.randomUUID(),
    status: checks.every(check => check.ok) ? "ready" : "needs-setup",
    readyCount: checks.filter(check => check.ok).length,
    total: checks.length,
    checks,
    createdBy: user.email,
    createdAt: new Date().toISOString()
  };
  db.profile.liveServiceChecks = db.profile.liveServiceChecks || [];
  db.profile.liveServiceChecks.unshift(report);
  db.profile.liveServiceChecks = db.profile.liveServiceChecks.slice(0, 10);
  logIntegration(db, {
    providerId: "openai",
    module: "Admin",
    action: "production.live_service_check",
    status: report.status === "ready" ? "success" : "needs-credentials",
    detail: `Live service check completed: ${report.readyCount}/${report.total} ready.`,
    metadata: { reportId: report.id, readyCount: report.readyCount, total: report.total },
    dispatch: false
  });
  addActivity(db.profile, `Live service check completed: ${report.readyCount}/${report.total} ready.`);
  return report;
}

function envStatus(keys) {
  return keys.map(key => ({ key, set: Boolean(process.env[key]) }));
}

function productionActivationGuide(db, providers = runtimeProviders(db)) {
  const provider = id => providers.find(item => item.id === id);
  const providerStatus = ids => {
    const selected = ids.map(id => provider(id)).filter(Boolean);
    const connected = selected.filter(item => item.status === "connected").length;
    return {
      connected,
      total: selected.length,
      ready: selected.length > 0 && connected === selected.length,
      providers: selected.map(item => ({ id: item.id, name: item.name, status: item.status, mode: item.mode, detail: item.detail }))
    };
  };
  const group = ({ id, title, summary, providerIds = [], env = [], nextAction, testAction = "test-all" }) => {
    const status = providerStatus(providerIds);
    const envItems = envStatus(env);
    const missing = envItems.filter(item => !item.set).map(item => item.key);
    const ready = status.ready && missing.length === 0;
    return {
      id,
      title,
      summary,
      status: ready ? "ready" : "needs-setup",
      ready,
      providerStatus: status,
      env: envItems,
      missing,
      nextAction: ready ? "Run the provider test and continue user workflow testing." : nextAction,
      testAction
    };
  };
  const groups = [
    group({
      id: "core",
      title: "Core Hosting, Security, and Database",
      summary: "Keeps user sessions, hosted state, and production safety real.",
      providerIds: ["database", "auth-users", "auth-password-reset"],
      env: ["DATABASE_URL", "AGRINEXUS_STATE_STORE", "SESSION_SECRET", "PASSWORD_PEPPER"],
      nextAction: "In Render, add PostgreSQL, set AGRINEXUS_STATE_STORE=postgres, and confirm SESSION_SECRET plus PASSWORD_PEPPER.",
      testAction: "health-check"
    }),
    group({
      id: "ai-voice",
      title: "AI, Voice, and Agent Reasoning",
      summary: "Powers Ask AgriNexus, voice response, transcription, agent planning, and smart workflow guidance.",
      providerIds: ["openai", "voice-stt", "voice-tts", "phone-voice"],
      env: ["OPENAI_API_KEY", "OPENAI_TRANSCRIBE_MODEL", "OPENAI_TTS_MODEL", "OPENAI_TTS_VOICE", "VOICE_STT_PROVIDER", "VOICE_TTS_PROVIDER", "TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER"],
      nextAction: "Confirm OpenAI credits/key and Twilio credentials, then test browser voice and phone voice.",
      testAction: "test-all"
    }),
    group({
      id: "translation-map",
      title: "Translation and Map Intelligence",
      summary: "Supports multilingual content, voice language flow, map tiles, country context, and route intelligence.",
      providerIds: ["translation", "maps"],
      env: ["TRANSLATION_PROVIDER", "TRANSLATION_WEBHOOK_URL", "TRANSLATION_PROVIDER_API_KEY", "MAP_TILE_PROVIDER"],
      nextAction: "Add translation provider settings and set MAP_TILE_PROVIDER=openstreetmap or a custom tile provider, then run live service check.",
      testAction: "test-all"
    }),
    group({
      id: "learning-workforce",
      title: "Learning and Workforce Engines",
      summary: "Connects real courses, certificates, job data, calendars, HR records, shifts, and notifications.",
      providerIds: ["learning-courses", "learning-certificates", "workforce-jobs", "workforce-calendar", "workforce-notifications", "workforce-hris", "workforce-shifts"],
      env: ["LEARNING_COURSE_PROVIDER", "LEARNING_COURSE_WEBHOOK_URL", "LEARNING_CERTIFICATE_PROVIDER", "LEARNING_CERTIFICATE_WEBHOOK_URL", "LEARNING_PROVIDER_API_KEY", "WORKFORCE_JOB_PROVIDER", "WORKFORCE_JOB_WEBHOOK_URL", "WORKFORCE_CALENDAR_PROVIDER", "WORKFORCE_CALENDAR_WEBHOOK_URL", "WORKFORCE_NOTIFICATION_PROVIDER", "WORKFORCE_NOTIFICATION_WEBHOOK_URL", "WORKFORCE_HRIS_PROVIDER", "WORKFORCE_HRIS_WEBHOOK_URL", "WORKFORCE_SHIFT_PROVIDER", "WORKFORCE_SHIFT_WEBHOOK_URL", "WORKFORCE_PROVIDER_API_KEY"],
      nextAction: "Use the provider-engine bridge first, then replace bridge endpoints with real course/job/HR providers as partners are chosen.",
      testAction: "test-all"
    }),
    group({
      id: "telehealth-trade-drone",
      title: "Telehealth, Trade, and Drone Engines",
      summary: "Connects provider access, EHR evidence, crop market data, logistics, payments, and drone operations.",
      providerIds: ["health-telehealth", "health-ehr", "health-notifications", "trade-payments", "trade-logistics", "trade-market", "field-drones"],
      env: ["HEALTH_TELEHEALTH_PROVIDER", "HEALTH_TELEHEALTH_WEBHOOK_URL", "HEALTH_EHR_PROVIDER", "HEALTH_EHR_WEBHOOK_URL", "HEALTH_NOTIFICATION_PROVIDER", "HEALTH_NOTIFICATION_WEBHOOK_URL", "HEALTH_PROVIDER_API_KEY", "TRADE_PAYMENT_PROVIDER", "TRADE_PAYMENT_WEBHOOK_URL", "TRADE_LOGISTICS_PROVIDER", "TRADE_LOGISTICS_WEBHOOK_URL", "TRADE_MARKET_PROVIDER", "TRADE_MARKET_WEBHOOK_URL", "TRADE_PROVIDER_API_KEY", "DRONE_PROVIDER", "DRONE_WEBHOOK_URL", "DRONE_PROVIDER_API_KEY"],
      nextAction: "Keep sandbox bridge running for demos, then connect live telehealth, market, logistics, payment, and drone vendors.",
      testAction: "test-all"
    }),
    group({
      id: "business-communications",
      title: "Billing and Communications",
      summary: "Supports subscriptions, email, SMS, WhatsApp, password resets, reminders, and launch support.",
      providerIds: ["billing-subscriptions", "email-delivery", "sms-delivery", "whatsapp-delivery"],
      env: ["BILLING_PROVIDER", "BILLING_WEBHOOK_URL", "BILLING_PROVIDER_API_KEY", "BILLING_PRICE_ID", "EMAIL_PROVIDER", "EMAIL_WEBHOOK_URL", "SMS_PROVIDER", "SMS_WEBHOOK_URL", "WHATSAPP_PROVIDER", "WHATSAPP_WEBHOOK_URL", "COMMUNICATION_PROVIDER_API_KEY"],
      nextAction: "Add billing price id and communications provider endpoints, then test notification and billing workflows.",
      testAction: "test-all"
    })
  ];
  const readyCount = groups.filter(item => item.ready).length;
  return {
    status: readyCount === groups.length ? "production-ready" : "activation-needed",
    readyCount,
    total: groups.length,
    groups,
    updatedAt: new Date().toISOString()
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

function providerEngineWebhookUrl(providerId) {
  const base = String(process.env.PROVIDER_ENGINE_BASE_URL || "").replace(/\/+$/, "");
  const endpoint = PROVIDER_ENGINE_ENDPOINTS[providerId];
  return base && endpoint ? `${base}${endpoint}` : "";
}

function providerRuntime(providerId) {
  const config = PROVIDER_CONFIG[providerId];
  if (!config) return { mode: "local", webhookUrl: "", apiKey: "" };
  const webhookKey = config.credentialEnvs.find(key => key.endsWith("_WEBHOOK_URL"));
  const apiKey = config.credentialEnvs.find(key => key.endsWith("_API_KEY"));
  const openAiVoiceProvider = ["voice-stt", "voice-tts"].includes(providerId) && Boolean(process.env.OPENAI_API_KEY);
  const explicitWebhook = webhookKey ? process.env[webhookKey] || "" : "";
  const bridgeWebhook = providerEngineWebhookUrl(providerId);
  return {
    mode: process.env[config.modeEnv] || (openAiVoiceProvider ? "openai" : "sandbox"),
    webhookUrl: explicitWebhook || bridgeWebhook,
    apiKey: apiKey ? process.env[apiKey] || "" : ""
  };
}

async function dispatchProviderWebhook(db, event) {
  const provider = runtimeProviderById(db, event.providerId);
  const runtime = providerRuntime(event.providerId);
  if (runtime.mode === "openai" && process.env.OPENAI_API_KEY) {
    return { attempted: false, ok: true, status: "openai-direct-ready" };
  }
  if (event.providerId === "phone-voice" && process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_PHONE_NUMBER) {
    return { attempted: false, ok: true, status: "twilio-webhook-ready" };
  }
  if (!provider || runtime.mode === "sandbox") {
    if (REQUIRE_LIVE_SERVICES && provider) {
      return { attempted: false, ok: false, status: "strict-live-provider-required" };
    }
    return { attempted: false, ok: true, status: "sandbox" };
  }
  if (!runtime.webhookUrl) {
    return { attempted: false, ok: false, status: "missing-webhook" };
  }

  const response = await fetchWithTimeout(runtime.webhookUrl, {
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
  }, PROVIDER_WEBHOOK_TIMEOUT_MS);

  return { attempted: true, ok: response.ok, status: response.status };
}

function logIntegration(db, { providerId, module, action, status = "success", detail, metadata = {}, dispatch = true }) {
  db.profile.integrationEvents = db.profile.integrationEvents || [];
  const provider = runtimeProviderById(db, providerId);
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
  profile.learningAssignments = profile.learningAssignments || [];
  profile.quizAttempts = profile.quizAttempts || [];
  profile.instructorNotes = profile.instructorNotes || [];
  profile.learningProgressReports = profile.learningProgressReports || [];
  profile.learningTranscripts = profile.learningTranscripts || [];
  profile.learningCohorts = profile.learningCohorts || [];
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

function learningCatalog(db) {
  ensureLearningProfile(db.profile);
  const completed = new Set(db.profile.completedCourses || []);
  const activeCourseId = db.profile.activeCourseId;
  const tracks = Array.from(new Set((db.courses || []).map(course => course.track))).map(track => {
    const courses = db.courses.filter(course => course.track === track);
    return {
      track,
      count: courses.length,
      completed: courses.filter(course => completed.has(course.id)).length
    };
  });
  const courses = (db.courses || []).map((course, index) => {
    const enrollment = getEnrollment(db.profile, course.id);
    const linkedRoles = (db.roles || []).filter(role => (role.requiredCertificates || []).includes(course.id));
    const nextModuleIndex = enrollment?.activeModuleIndex || 0;
    return {
      ...course,
      catalogNumber: `AN-LRN-${String(index + 1).padStart(3, "0")}`,
      providerId: "learning-courses",
      providerStatus: runtimeProviderById(db, "learning-courses")?.status === "connected" ? "live-provider" : "local-catalog",
      enrollmentStatus: completed.has(course.id) ? "certified" : enrollment?.status || "not_started",
      progress: enrollment?.progress || (completed.has(course.id) ? 100 : 0),
      nextLesson: (course.modules || [])[nextModuleIndex] || (course.modules || [])[0] || course.title,
      workforceLinks: linkedRoles.map(role => ({ id: role.id, title: role.title, country: role.country, rate: role.rate })),
      outcomes: [
        `${course.readiness}% readiness impact`,
        `${course.track} workforce skill path`,
        linkedRoles.length ? `${linkedRoles.length} role gate link(s)` : "General readiness path"
      ],
      accessibility: [
        "caption packet",
        "audio guide",
        "screen-reader outline",
        "large-print summary",
        "low-bandwidth offline packet"
      ]
    };
  });
  const recommended = courses.find(course => course.id === activeCourseId)
    || courses.find(course => course.enrollmentStatus !== "certified")
    || courses[0]
    || null;
  return {
    total: courses.length,
    completed: courses.filter(course => course.enrollmentStatus === "certified").length,
    activeCourseId: activeCourseId || recommended?.id || null,
    recommendedCourseId: recommended?.id || null,
    tracks,
    courses
  };
}

function ensureWorkforceProfile(profile) {
  profile.applications = profile.applications || [];
  profile.shiftSchedule = profile.shiftSchedule || [];
  profile.workforceBadges = profile.workforceBadges || [];
  profile.mentorNotes = profile.mentorNotes || [];
  profile.workforceOnboarding = profile.workforceOnboarding || [];
  profile.workforceDocuments = profile.workforceDocuments || [];
  profile.timesheets = profile.timesheets || [];
  profile.payrollApprovals = profile.payrollApprovals || [];
  profile.performanceReviews = profile.performanceReviews || [];
  profile.shiftRequests = profile.shiftRequests || [];
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
  profile.telehealthAppointments = profile.telehealthAppointments || [];
  profile.telehealthProviderAssignments = profile.telehealthProviderAssignments || [];
  profile.patientHistoryRecords = profile.patientHistoryRecords || [];
  profile.telehealthPrescriptionPackets = profile.telehealthPrescriptionPackets || [];
  profile.telehealthEmergencyEscalations = profile.telehealthEmergencyEscalations || [];
  profile.careTeamNotes = profile.careTeamNotes || [];
  profile.telehealthOutcomeReviews = profile.telehealthOutcomeReviews || [];
  profile.publicHealthChecks = profile.publicHealthChecks || [];
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
  profile.tradeQuotes = profile.tradeQuotes || [];
  profile.qualityInspections = profile.qualityInspections || [];
  profile.coldChainChecks = profile.coldChainChecks || [];
  profile.exportReadiness = profile.exportReadiness || [];
  profile.contractPackets = profile.contractPackets || [];
  profile.paymentReleases = profile.paymentReleases || [];
  profile.tradeEfficiencyReviews = profile.tradeEfficiencyReviews || [];
  profile.tradeCommunicationBriefs = profile.tradeCommunicationBriefs || [];
  profile.droneMissions = profile.droneMissions || [];
  profile.droneScans = profile.droneScans || [];
  profile.droneFindings = profile.droneFindings || [];
  profile.droneFieldReports = profile.droneFieldReports || [];
  profile.droneIrrigationPlans = profile.droneIrrigationPlans || [];
  profile.dronePestAlerts = profile.dronePestAlerts || [];
  profile.droneSprayPlans = profile.droneSprayPlans || [];
  profile.droneYieldForecasts = profile.droneYieldForecasts || [];
  profile.droneComplianceAudits = profile.droneComplianceAudits || [];
  profile.fieldInterventions = profile.fieldInterventions || [];
}

function ensureAiProfile(profile) {
  profile.aiRuns = profile.aiRuns || [];
  profile.mapInsights = profile.mapInsights || [];
  profile.farmerLocations = profile.farmerLocations || [];
  profile.fieldZones = profile.fieldZones || [];
  profile.facilityRoutes = profile.facilityRoutes || [];
  profile.routeDisruptions = profile.routeDisruptions || [];
  profile.mapRiskLayers = profile.mapRiskLayers || [];
  profile.mapEvidencePackets = profile.mapEvidencePackets || [];
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
  profile.agentMemory.longTermFacts = profile.agentMemory.longTermFacts || [];
  profile.agentMemory.preferences = profile.agentMemory.preferences || [];
  profile.agentMemory.learnedPatterns = profile.agentMemory.learnedPatterns || [];
  profile.agentMemory.retrievals = profile.agentMemory.retrievals || [];
  profile.agentMemory.activeIntake = profile.agentMemory.activeIntake || null;
  profile.agentMemory.conversationalIntakes = profile.agentMemory.conversationalIntakes || [];
  profile.agentMemory.userModel = profile.agentMemory.userModel || {};
  profile.agentMemory.activeVoiceMission = profile.agentMemory.activeVoiceMission || null;
  profile.agentMemory.voiceMissionHistory = profile.agentMemory.voiceMissionHistory || [];
  profile.agentMemory.activeClarification = profile.agentMemory.activeClarification || null;
  profile.agentMemory.clarificationHistory = profile.agentMemory.clarificationHistory || [];
  profile.agentMemory.activeRecovery = profile.agentMemory.activeRecovery || null;
  profile.agentMemory.recoveryHistory = profile.agentMemory.recoveryHistory || [];
  profile.agentMemory.activeGuidedMission = profile.agentMemory.activeGuidedMission || null;
  profile.agentMemory.guidedMissionHistory = profile.agentMemory.guidedMissionHistory || [];
  profile.agentMemory.conversationQuality = profile.agentMemory.conversationQuality || {
    turns: 0,
    openEndedAnswers: 0,
    stagedActions: 0,
    confirmedActions: 0,
    lastSignal: "ready"
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

function buildAutopilotPlan(db, goal, user) {
  const { country, route } = activeContext(db);
  const lower = String(goal || "").toLowerCase();
  const course = db.courses.find(item => item.id === db.profile.activeCourseId) || db.courses[0];
  const role = db.roles.find(item => roleReadiness(db.profile, item).eligible) || db.roles[0];
  const product = (db.products || []).find(item => item.countryId === country.id) || (db.products || [])[0];
  const memory = retrieveAgentMemories(db.profile, goal, 5);
  const makeStep = (module, tool, action, detail) => ({
    id: crypto.randomUUID(),
    module,
    tool,
    action,
    detail,
    status: "pending-approval"
  });
  let steps;
  if (lower.includes("patient") || lower.includes("telehealth") || lower.includes("health") || lower.includes("care")) {
    steps = [
      makeStep("Healthcare", "health.intake", "Start telehealth intake", `Open a patient intake for ${country.name} with voice-first accessibility.`),
      makeStep("Healthcare", "health.accessibility_review", "Prepare accessible care", "Apply captions, audio support, caregiver handoff, and low-bandwidth callback preferences."),
      makeStep("Healthcare", "health.vitals", "Capture vitals", "Create vitals evidence before routing the case."),
      makeStep("Healthcare", "health.careplan", "Generate care plan", "Create supervised care guidance from the intake and vitals evidence."),
      makeStep("Healthcare", "health.followup", "Schedule follow-up", "Create a callback path for patient continuity."),
      makeStep("AI", "ai.copilot", "Summarize health mission", "Prepare a supervised operator summary for human review.")
    ];
  } else if (lower.includes("job") || lower.includes("workforce") || lower.includes("worker") || lower.includes("training") || lower.includes("learner")) {
    steps = [
      makeStep("Learning", "learning.start_or_continue", "Start learning path", `Use ${course?.title || "active course"} as the training path.`),
      makeStep("Learning", "learning.complete_lesson", "Complete lesson", "Advance the learner and create progress evidence."),
      makeStep("Learning", "learning.certificate", "Issue certificate", "Create credential evidence for workforce readiness."),
      makeStep("Workforce", "workforce.build_profile", "Verify candidate profile", "Prepare the candidate profile for role matching."),
      makeStep("Workforce", "workforce.match_role", "Match role", `Compare readiness against ${role?.title || "available role"}.`),
      makeStep("Workforce", "workforce.apply_role", "Apply for role", "Submit or prepare the best matched role application."),
      makeStep("Workforce", "workforce.schedule_interview", "Schedule interview", "Prepare the candidate for next employer contact."),
      makeStep("AI", "ai.copilot", "Summarize workforce mission", "Prepare a supervised operator summary for human review.")
    ];
  } else {
    steps = [
      makeStep("AgriTech", "drone.flight_plan", "Plan drone mission", `Plan field evidence collection for ${product?.name || "active crop lot"}.`),
      makeStep("AgriTrade", "drone.field_scan", "Run field scan", "Create crop health, stress, yield, and map evidence."),
      makeStep("AgriTech", "drone.intervention_task", "Assign field intervention", "Convert crop evidence into a practical field follow-up task."),
      makeStep("AgriTrade", "trade.market_review", "Review market", `Create market/order evidence for ${product?.name || "available product"}.`),
      makeStep("AgriTrade", "trade.buyer_contact", "Contact buyer", "Prepare buyer communication for the active crop/order."),
      makeStep("Maps", "map.route_risk", "Assess route risk", `Assess ${route.name} at ${db.profile.activeCheckpoint}.`),
      makeStep("AgriTrade", "trade.advance_order", "Advance logistics", "Move the order through the next logistics checkpoint."),
      makeStep("AgriTrade", "trade.wallet_payment", "Prepare payment", "Record wallet/payment evidence for the trade mission."),
      makeStep("AI", "ai.copilot", "Summarize farmer mission", "Prepare a supervised operator summary for human review.")
    ];
  }
  return {
    id: crypto.randomUUID(),
    goal,
    mode: "autopilot",
    status: "awaiting-approval",
    createdBy: user.email,
    countryId: country.id,
    routeId: route.id,
    memoryUsed: memory.map(item => ({ id: item.id, category: item.category, text: item.text || item.response || item.command })),
    steps,
    createdAt: new Date().toISOString()
  };
}

async function createAndExecuteAutopilotMission(db, user, goal, note = "Approved from Agent Autopilot mode") {
  ensureAiProfile(db.profile);
  const plan = buildAutopilotPlan(db, goal, user);
  db.profile.agentPlans.unshift(plan);
  db.profile.agentPlans = db.profile.agentPlans.slice(0, 12);
  logIntegration(db, {
    providerId: "openai",
    module: "AI",
    action: "agent.autopilot_plan_created",
    detail: `Autopilot created ${plan.steps.length} mission step(s).`,
    metadata: { planId: plan.id, goal, memoryUsed: plan.memoryUsed }
  });
  const execution = await executeAgentPlanObject(db, user, plan, note);
  logIntegration(db, {
    providerId: "openai",
    module: "AI",
    action: "agent.autopilot_executed",
    detail: execution.summary,
    metadata: { planId: plan.id, executionId: execution.id, steps: execution.steps.length }
  });
  db.profile.agentMemory.lastGoal = goal;
  db.profile.agentMemory.lastPlanId = plan.id;
  db.profile.agentMemory.lastExecutionId = execution.id;
  db.profile.agentMemory.lastStatus = execution.status;
  db.profile.agentMemory.lastSummary = execution.summary;
  db.profile.agentMemory.updatedAt = new Date().toISOString();
  return { plan, execution };
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

async function tradeOperationalEfficiencyReview(db, user, text) {
  ensureTradeProfile(db.profile);
  ensureAiProfile(db.profile);
  const { country, route } = activeContext(db);
  const order = db.profile.orders[db.profile.orders.length - 1] || null;
  const product = order
    ? (db.products || []).find(item => item.id === order.productId)
    : (db.products || []).find(item => item.countryId === country.id) || (db.products || [])[0];
  const latestScan = (db.profile.droneScans || [])[0] || null;
  const latestRoute = (db.profile.aiRuns || []).find(item => item.type === "route") || null;
  const buyerReadiness = Math.max(product?.buyerInterest || 65, order?.buyerInterest || 0);
  const hasPaymentEvidence = (db.profile.walletTransactions || []).length > 0 || (db.profile.paymentReleases || []).length > 0;
  const hasColdChain = (db.profile.coldChainChecks || []).length > 0;
  const hasQuality = (db.profile.qualityInspections || []).length > 0;
  const blockers = [
    buyerReadiness < 80 ? "buyer interest is not yet at premium-ready level" : "",
    !latestScan ? "no current drone field scan is attached" : "",
    !latestRoute ? "route-risk AI has not been refreshed" : "",
    !hasQuality ? "quality inspection is not yet recorded" : "",
    !hasColdChain ? "cold-chain check is missing for perishable goods" : "",
    !hasPaymentEvidence ? "payment release or wallet evidence is not confirmed" : ""
  ].filter(Boolean);
  const score = Math.max(42, Math.min(98, 100 - blockers.length * 9 + (country.risk === "Low" ? 4 : -4) + (buyerReadiness >= 85 ? 5 : 0)));
  const aiResult = await runAi("trade-efficiency", country, route, db.profile);
  const aiRun = recordAiRun(db, { type: "trade-efficiency", country, route, result: aiResult, module: "AgriTrade" });
  const recommendations = [
    latestScan ? "Use the latest drone scan as field evidence for the buyer." : "Run a drone scan before buyer negotiation.",
    latestRoute ? "Attach current route-risk evidence to logistics timing." : "Run route intelligence before dispatch.",
    hasQuality ? "Share quality evidence with the buyer." : "Run quality inspection before pricing.",
    hasColdChain ? "Keep cold-chain evidence visible for delivery." : "Run cold-chain check if the crop is perishable.",
    hasPaymentEvidence ? "Confirm payment release before handoff." : "Prepare wallet or payment-release evidence before delivery."
  ];
  const review = {
    id: crypto.randomUUID(),
    query: text,
    countryId: country.id,
    countryName: country.name,
    routeId: route.id,
    routeName: route.name,
    productId: product?.id || null,
    productName: order?.product || product?.name || "active crop lot",
    orderId: order?.id || null,
    score,
    buyerReadiness,
    blockers,
    recommendations,
    aiRunId: aiRun.id,
    createdBy: user.email,
    createdAt: new Date().toISOString()
  };
  db.profile.tradeEfficiencyReviews.unshift(review);
  db.profile.tradeEfficiencyReviews = db.profile.tradeEfficiencyReviews.slice(0, 20);
  addTradeEvent(db.profile, { type: "trade.operational_efficiency_reviewed", label: `${review.productName} efficiency score ${score}% on ${route.name}.` });
  rememberAgentMemory(db.profile, `AgriTrade operations review for ${review.productName}: score ${score}%, blockers: ${blockers.join("; ") || "none"}.`, { source: "trade-efficiency", category: "operations", confidence: 0.92 });
  db.profile.agentMemory.activeModule = "AgriTrade";
  db.profile.agentMemory.lastStatus = "trade-efficiency-reviewed";
  db.profile.agentMemory.lastSummary = `${review.productName} scored ${score}% for operational efficiency.`;
  db.profile.agentMemory.updatedAt = review.createdAt;
  logIntegration(db, {
    providerId: "trade-logistics",
    module: "AgriTrade",
    action: "trade.operational_efficiency_reviewed",
    detail: `${review.productName} operational efficiency reviewed at ${score}%.`,
    metadata: { reviewId: review.id, aiRunId: aiRun.id, blockers, recommendations }
  });
  const blockerText = blockers.length ? `Main blockers: ${blockers.slice(0, 3).join("; ")}.` : "No major blockers are showing from current platform evidence.";
  return {
    intent: "trade.operational_efficiency",
    response: `AgriTrade operational efficiency is ${score}% for ${review.productName} on ${route.name}. ${blockerText} Next best actions: ${recommendations.slice(0, 3).join(" ")} ${aiRun.text}`,
    status: "completed",
    metadata: { conversationMode: true, redirectSection: "trade", reviewId: review.id, aiRunId: aiRun.id, score, blockers, recommendations }
  };
}

function tradeOperationalCommunicationBrief(db, user, text) {
  ensureTradeProfile(db.profile);
  const { country, route } = activeContext(db);
  const order = db.profile.orders[db.profile.orders.length - 1] || null;
  const product = order
    ? (db.products || []).find(item => item.id === order.productId)
    : (db.products || []).find(item => item.countryId === country.id) || (db.products || [])[0];
  const latestEfficiency = (db.profile.tradeEfficiencyReviews || [])[0] || null;
  const latestScan = (db.profile.droneScans || [])[0] || null;
  const latestQuality = (db.profile.qualityInspections || [])[0] || null;
  const latestPayment = (db.profile.paymentReleases || [])[0] || (db.profile.walletTransactions || [])[0] || null;
  const lower = String(text || "").toLowerCase();
  const audience = lower.includes("buyer") ? "buyer"
    : lower.includes("driver") || lower.includes("route") || lower.includes("logistics") ? "logistics team"
      : lower.includes("farmer") || lower.includes("field") ? "field team"
        : lower.includes("investor") || lower.includes("partner") ? "partner"
          : "operations team";
  const productName = order?.product || order?.productName || product?.name || "active crop lot";
  const routeStatus = `${route.name} at ${db.profile.activeCheckpoint}`;
  const readinessLine = latestEfficiency
    ? `Current operational efficiency is ${latestEfficiency.score}%, with ${latestEfficiency.blockers.length ? latestEfficiency.blockers[0] : "no major blocker showing"}.`
    : "Operational efficiency has not been scored yet; run an efficiency review before final dispatch.";
  const evidenceLine = [
    latestScan ? `drone scan ${latestScan.scanRef || "recorded"}` : "drone scan not attached",
    latestQuality ? `quality check ${latestQuality.checkNumber || "recorded"}` : "quality check pending",
    latestPayment ? "payment evidence present" : "payment evidence pending"
  ].join(", ");
  const message = `AgriTrade update for ${audience}: ${productName} is moving through ${routeStatus}. ${readinessLine} Evidence status: ${evidenceLine}. Recommended next step: confirm buyer timing, route handoff, quality evidence, and payment readiness before advancing.`;
  const brief = {
    id: crypto.randomUUID(),
    query: text,
    audience,
    productId: product?.id || order?.productId || null,
    productName,
    countryId: country.id,
    routeId: route.id,
    routeName: route.name,
    checkpoint: db.profile.activeCheckpoint,
    message,
    evidence: {
      efficiencyReviewId: latestEfficiency?.id || null,
      droneScanId: latestScan?.id || null,
      qualityCheckId: latestQuality?.id || null,
      paymentRecordId: latestPayment?.id || null
    },
    createdBy: user.email,
    createdAt: new Date().toISOString()
  };
  db.profile.tradeCommunicationBriefs.unshift(brief);
  db.profile.tradeCommunicationBriefs = db.profile.tradeCommunicationBriefs.slice(0, 25);
  addTradeEvent(db.profile, { type: "trade.operational_communication_prepared", label: `${audience} update prepared for ${productName}.` });
  addNotification(db.profile, { module: "AgriTrade", channel: "voice-ready message", message });
  rememberAgentMemory(db.profile, `AgriTrade prepared an operational communication for ${audience}: ${productName}.`, { source: "trade-communication", category: "operations", confidence: 0.9 });
  db.profile.agentMemory.activeModule = "AgriTrade";
  db.profile.agentMemory.lastStatus = "trade-communication-ready";
  db.profile.agentMemory.lastSummary = `${audience} update prepared for ${productName}.`;
  db.profile.agentMemory.updatedAt = brief.createdAt;
  logIntegration(db, {
    providerId: "trade-logistics",
    module: "AgriTrade",
    action: "trade.operational_communication_prepared",
    detail: `${audience} operational communication prepared for ${productName}.`,
    metadata: { briefId: brief.id, audience, productId: brief.productId, routeId: route.id },
    dispatch: false
  });
  return {
    intent: "trade.operational_communication",
    response: `I prepared an AgriTrade operational update for the ${audience}. ${message}`,
    status: "completed",
    metadata: { conversationMode: true, redirectSection: "trade", briefId: brief.id, audience, productName }
  };
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
  profile.workflowIntelligence = profile.workflowIntelligence || [];
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

function workflowIntelligence(db, user, body = {}) {
  ensureOperationsProfile(db.profile);
  const { country, route } = activeContext(db);
  const moduleName = String(body.module || body.workflow || "Platform");
  const action = String(body.action || body.title || "Workflow completed");
  const latestEvent = (db.profile.integrationEvents || [])[0];
  const moduleText = moduleName.toLowerCase();
  const moduleAdvice = moduleText.includes("learning")
    ? {
      meaning: "The learner record moved forward and can now feed workforce readiness, certificate status, accessibility support, and AI tutor guidance.",
      next: "Confirm the next lesson, check accommodation needs, then route the learner toward a role or certificate."
    }
    : moduleText.includes("workforce")
    ? {
      meaning: "The workforce record changed and can now drive role matching, interviews, shift operations, payroll evidence, or HR handoff.",
      next: "Review readiness gaps, schedule the next placement step, and notify the worker or mentor."
    }
    : moduleText.includes("health")
    ? {
      meaning: "The care workflow created patient-facing evidence that should stay accessible, consent-aware, and ready for provider review.",
      next: "Check accessibility needs, confirm safety level, and prepare a follow-up or referral if risk is elevated."
    }
    : moduleText.includes("trade") || moduleText.includes("agri")
    ? {
      meaning: "The trade or field operation created commercial evidence that can connect crop lots, buyers, logistics, wallet activity, and drone intelligence.",
      next: "Confirm buyer readiness, route status, quality evidence, and payment or logistics handoff."
    }
    : moduleText.includes("map")
    ? {
      meaning: "The map operation changed geospatial evidence that can guide route risk, farmer access, facility movement, and field intervention planning.",
      next: "Review the active checkpoint, update route risk, and attach the intelligence to the relevant farmer, care, workforce, or trade workflow."
    }
    : moduleText.includes("integration") || moduleText.includes("admin")
    ? {
      meaning: "The system control workflow created operational readiness evidence for live providers, production support, and audit review.",
      next: "Review any provider gaps, confirm connected engines, and rerun the live service check after credentials change."
    }
    : {
      meaning: "The workflow created platform evidence and updated the unified operating record.",
      next: "Review the latest activity, confirm the next user-facing step, and ask AgriNexus to continue the mission if needed."
    };
  const record = {
    id: crypto.randomUUID(),
    module: moduleName,
    action,
    countryId: country.id,
    countryName: country.name,
    routeId: route.id,
    routeName: route.name,
    checkpoint: db.profile.activeCheckpoint,
    summary: `${action} completed in ${country.name} with route context from ${route.name}.`,
    meaning: moduleAdvice.meaning,
    nextStep: moduleAdvice.next,
    evidence: [
      latestEvent ? `${latestEvent.providerName || latestEvent.providerId}: ${latestEvent.action}` : "No provider event recorded yet",
      `${(db.profile.activity || []).length} activity items`,
      `${(db.profile.integrationEvents || []).length} provider audit events`,
      `${(db.profile.workflowIntelligence || []).length + 1} workflow intelligence records`
    ],
    risk: country.risk,
    language: user.language || db.profile.accessibilityProfile?.language || "en",
    createdAt: new Date().toISOString()
  };
  db.profile.workflowIntelligence.unshift(record);
  db.profile.workflowIntelligence = db.profile.workflowIntelligence.slice(0, 40);
  return record;
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

function createAdvancedDroneOperation(db, { type = "field-report", productId, source = "operator" } = {}) {
  ensureTradeProfile(db.profile);
  const { country, route } = activeContext(db);
  const product = selectedTradeProduct(db, productId, country);
  if (!product) throw new Error("No crop lot is available for advanced drone operations.");
  const scan = (db.profile.droneScans || [])[0];
  const finding = (db.profile.droneFindings || [])[0];
  const health = scan?.cropHealthScore || Math.max(60, Math.min(95, Number(product.buyerInterest || 72)));
  const now = new Date().toISOString();
  const base = {
    id: crypto.randomUUID(),
    productId: product.id,
    productName: product.name,
    countryId: country.id,
    routeId: route.id,
    scanRef: scan?.scanRef || null,
    fieldZone: scan?.fieldZone || `${country.name} ${product.category || "crop"} zone`,
    createdBy: source,
    createdAt: now
  };
  const makers = {
    "field-report": () => ({
      ...base,
      reportRef: `AN-AGRO-${country.id.toUpperCase()}-${String(db.profile.droneFieldReports.length + 1).padStart(3, "0")}`,
      cropHealthScore: health,
      soilMoisture: country.heat >= 38 ? "low" : health >= 80 ? "balanced" : "watch",
      standCount: `${Math.max(68, health - 5)}% productive stand`,
      farmerSummary: `Field report for ${product.name}: ${health}% crop health, ${scan?.stressAlert || "field watch"}, ${scan?.yieldEstimate || "yield estimate pending"}.`,
      status: "report-ready"
    }),
    irrigation: () => ({
      ...base,
      planRef: `AN-IRR-${country.id.toUpperCase()}-${String(db.profile.droneIrrigationPlans.length + 1).padStart(3, "0")}`,
      priorityZones: country.heat >= 38 ? ["north ridge", "low moisture rows", "edge stress"] : ["watch rows", "drip-line check"],
      waterRecommendation: country.heat >= 38 ? "early morning irrigation within 24 hours" : "standard irrigation cycle with targeted field verification",
      estimatedSavings: `${Math.max(8, Math.round((100 - health) / 2))}% water optimization`,
      status: "irrigation-plan-ready"
    }),
    pest: () => ({
      ...base,
      alertRef: `AN-PEST-${country.id.toUpperCase()}-${String(db.profile.dronePestAlerts.length + 1).padStart(3, "0")}`,
      riskLevel: finding?.severity === "priority" ? "priority" : health < 75 ? "elevated" : "watch",
      suspectedIssues: health < 75 ? ["leaf stress", "pest scouting required", "fungal-risk watch"] : ["edge scouting", "spot-check required"],
      scoutWindow: "same-week field scouting",
      status: "pest-alert-ready"
    }),
    spray: () => ({
      ...base,
      sprayRef: `AN-SPRAY-${country.id.toUpperCase()}-${String(db.profile.droneSprayPlans.length + 1).padStart(3, "0")}`,
      targetZones: ["affected rows", "field edge", "buyer-quality sample area"],
      safetyChecks: ["wind speed check", "community notification", "operator PPE", "chemical record", "buffer-zone review"],
      status: "spray-plan-ready"
    }),
    yield: () => ({
      ...base,
      forecastRef: `AN-YIELD-${country.id.toUpperCase()}-${String(db.profile.droneYieldForecasts.length + 1).padStart(3, "0")}`,
      estimate: scan?.yieldEstimate || `${Math.max(12, Math.round((product.buyerInterest || 70) / 4))} harvest units`,
      buyerReadiness: product.buyerInterest >= 80 && health >= 75 ? "ready for buyer offer" : "needs field improvement before premium offer",
      confidence: Math.max(72, Math.min(96, health + 5)),
      status: "forecast-ready"
    }),
    compliance: () => ({
      ...base,
      auditRef: `AN-DAUD-${country.id.toUpperCase()}-${String(db.profile.droneComplianceAudits.length + 1).padStart(3, "0")}`,
      checks: ["pilot authorization", "community consent", "airspace review", "data privacy", "crop-owner approval", "evidence retention"],
      status: "compliance-audit-ready"
    })
  };
  const record = (makers[type] || makers["field-report"])();
  const storeMap = {
    "field-report": "droneFieldReports",
    irrigation: "droneIrrigationPlans",
    pest: "dronePestAlerts",
    spray: "droneSprayPlans",
    yield: "droneYieldForecasts",
    compliance: "droneComplianceAudits"
  };
  const actionMap = {
    "field-report": "drone.field_report",
    irrigation: "drone.irrigation_plan",
    pest: "drone.pest_alert",
    spray: "drone.spray_plan",
    yield: "drone.yield_forecast",
    compliance: "drone.compliance_audit"
  };
  const label = record.reportRef || record.planRef || record.alertRef || record.sprayRef || record.forecastRef || record.auditRef;
  const store = storeMap[type] || "droneFieldReports";
  db.profile[store].unshift(record);
  db.profile[store] = db.profile[store].slice(0, 20);
  addMapInsight(db.profile, {
    type: actionMap[type] || "drone.field_report",
    label: `${label} advanced drone operation`,
    detail: `${record.productName}: ${record.status}.`,
    routeName: route.name,
    checkpoint: db.profile.activeCheckpoint
  });
  addTradeEvent(db.profile, { type: actionMap[type] || "drone.field_report", label: `${label} created for ${record.productName}.` });
  logIntegration(db, {
    providerId: "field-drones",
    module: "AgriTrade",
    action: actionMap[type] || "drone.field_report",
    detail: `${label} advanced drone operation created for ${record.productName}.`,
    metadata: { recordId: record.id, productId: product.id, countryId: country.id, type, source }
  });
  return record;
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

  if (step.tool === "trade.operational_efficiency") {
    const review = await tradeOperationalEfficiencyReview(db, user, step.detail || "review AgriTrade operational efficiency");
    return review.response;
  }

  if (step.tool === "trade.operational_communication") {
    const brief = tradeOperationalCommunicationBrief(db, user, step.detail || "prepare AgriTrade operational communication");
    return brief.response;
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
  learnFromAgentCommand(db, command, result);
  if (result.intent === "conversation.confirmed" || result.metadata?.mode === "autopilot" || result.status === "completed") {
    memory.conversationQuality.confirmedActions = Number(memory.conversationQuality.confirmedActions || 0) + (result.intent === "conversation.confirmed" ? 1 : 0);
  }
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
  const voiceMission = updateActiveVoiceMission(db, user, command, result);
  const guidedMission = updateGuidedMissionMemory(db, user, command, result);
  logIntegration(db, {
    providerId: "openai",
    module: "AI",
    action: "agent.command",
    status: record.status === "failed" ? "failed" : "success",
    detail: `${record.intent}: ${record.response}`,
    metadata: { commandId: record.id, command, voiceMissionId: voiceMission?.id || null, guidedMissionId: guidedMission?.id || null }
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
    provider: type === "phone-call"
      ? (process.env.PHONE_PROVIDER || "twilio-ready")
      : type === "speech-to-text"
      ? (process.env.VOICE_STT_PROVIDER || "browser")
      : (process.env.VOICE_TTS_PROVIDER || "browser"),
    createdBy: user.email,
    createdAt: new Date().toISOString(),
    metadata
  };
  db.profile.voiceSessions.unshift(record);
  db.profile.voiceSessions = db.profile.voiceSessions.slice(0, 40);
  logIntegration(db, {
    providerId: type === "phone-call" ? "phone-voice" : type === "speech-to-text" ? "voice-stt" : "voice-tts",
    module: "AI",
    action: `voice.${type}`,
    detail,
    metadata: { voiceSessionId: record.id, ...metadata }
  });
  return record;
}

function xmlEscape(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function twimlResponse(res, xml) {
  return send(res, 200, xml, { "content-type": "text/xml; charset=utf-8" });
}

function twilioLanguage(language) {
  const map = { en: "en-US", fr: "fr-FR", sw: "sw-KE", ar: "ar-EG" };
  return process.env.TWILIO_GATHER_LANGUAGE || map[language] || "en-US";
}

function twilioSay(text, language) {
  return `<Say voice="${xmlEscape(process.env.TWILIO_TTS_VOICE || "alice")}" language="${xmlEscape(language)}">${xmlEscape(text)}</Say>`;
}

async function phoneVoicePrompt(text, language) {
  const fallback = twilioSay(text, language);
  if (!process.env.OPENAI_API_KEY || !process.env.PUBLIC_BASE_URL) return fallback;
  try {
    const audio = await openAiSpeechAudio({ text, voice: "coral", responseFormat: "mp3" });
    if (!audio?.audioDataUrl) return fallback;
    const id = crypto.randomUUID();
    const base64 = audio.audioDataUrl.replace(/^data:audio\/[^;]+;base64,/, "");
    phoneAudioCache.set(id, {
      buffer: Buffer.from(base64, "base64"),
      createdAt: Date.now()
    });
    for (const [key, value] of phoneAudioCache.entries()) {
      if (Date.now() - value.createdAt > 10 * 60 * 1000) phoneAudioCache.delete(key);
    }
    const audioUrl = `${String(process.env.PUBLIC_BASE_URL).replace(/\/$/, "")}/api/voice/phone/audio/${id}.mp3`;
    return `<Play>${xmlEscape(audioUrl)}</Play>`;
  } catch {
    return fallback;
  }
}

function phoneVoiceUser(db) {
  return db.users.find(item => item.role === "Admin") || db.users[0];
}

async function openAiTranscribeAudio({ audioBase64, mimeType = "audio/webm", filename = "agrinexus-voice.webm", language }) {
  if (!process.env.OPENAI_API_KEY || !audioBase64) return null;
  const bytes = Buffer.from(String(audioBase64).replace(/^data:[^,]+,/, ""), "base64");
  const form = new FormData();
  form.append("file", new Blob([bytes], { type: mimeType }), filename);
  form.append("model", process.env.OPENAI_TRANSCRIBE_MODEL || "gpt-4o-mini-transcribe");
  if (language) form.append("language", language);
  const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
    body: form
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error?.message || `OpenAI transcription failed: ${response.status}`);
  return {
    transcript: payload.text || "",
    provider: "openai-audio-transcriptions",
    model: process.env.OPENAI_TRANSCRIBE_MODEL || "gpt-4o-mini-transcribe"
  };
}

async function openAiSpeechAudio({ text, voice, responseFormat = "mp3" }) {
  if (!process.env.OPENAI_API_KEY) return null;
  const requestedVoice = voice || process.env.OPENAI_TTS_VOICE || "coral";
  const createSpeech = selectedVoice => fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: process.env.OPENAI_TTS_MODEL || "gpt-4o-mini-tts",
      voice: selectedVoice,
      input: String(text || "").slice(0, 4096),
      response_format: responseFormat,
      instructions: process.env.OPENAI_TTS_INSTRUCTIONS || "Speak warmly and naturally, like a calm coach guiding a non-technical rural user. Use conversational pacing and avoid a robotic announcer tone."
    })
  });
  let response = await createSpeech(requestedVoice);
  let finalVoice = requestedVoice;
  if (!response.ok && requestedVoice !== "coral") {
    response = await createSpeech("coral");
    finalVoice = "coral";
  }
  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(payload.error?.message || `OpenAI speech failed: ${response.status}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  return {
    audioDataUrl: `data:audio/${responseFormat};base64,${buffer.toString("base64")}`,
    provider: "openai-audio-speech",
    model: process.env.OPENAI_TTS_MODEL || "gpt-4o-mini-tts",
    voice: finalVoice
  };
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
  if (includesAny(["operational efficiency", "operations efficiency", "optimize trade", "optimise trade", "trade bottleneck", "reduce delay", "reduce cost", "improve profit", "improve operations"])) return { tool: "trade.operational_efficiency", module: "AgriTrade", action: "Review operational efficiency", section: "trade" };
  if (includesAny(["trade update", "buyer update", "route update", "logistics update", "operations brief", "status report", "message the buyer", "notify the driver", "handoff message"])) return { tool: "trade.operational_communication", module: "AgriTrade", action: "Prepare operational communication", section: "trade" };
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
  voicePhrases.es = [
    [["language", "spanish"], "Listo. Cambie el idioma a espanol. Las frases y respuestas de AgriTrade ahora usaran espanol."],
    [["agritrade", "helps"], "AgriTrade ayuda a agricultores y equipos comerciales a pasar del cultivo al comprador y al pago. Puedo ayudar con cultivos, compradores, pedidos, pagos, logistica, calidad, exportacion e inteligencia de drones."],
    [["telehealth", "intake"], "La admision de telesalud esta lista con apoyo por voz."],
    [["vitals"], "Los signos vitales fueron capturados y agregados al registro de salud."],
    [["buyer"], "El contacto con el comprador esta listo con un mensaje preparado para su producto."],
    [["application"], "AgriNexus reviso la solicitud y guardo el siguiente paso de trabajo."],
    [["lesson"], "La leccion se completo y el progreso fue actualizado."],
    [["certificate"], "El certificado fue emitido y agregado al perfil."],
    [["drone"], "El flujo de dron se completo y la evidencia del campo fue guardada."],
    [["provider"], "Los motores de proveedores fueron probados y los resultados fueron guardados."],
    [["opened"], "Espacio abierto. Puede continuar aqui."]
  ];
  const match = (voicePhrases[language] || []).find(([keys]) => keys.every(key => lower.includes(key)));
  if (match) return match[1];
  const labels = {
    fr: "[FR]",
    sw: "[SW]",
    ar: "[AR]",
    es: "[ES]"
  };
  return `${labels[language] || `[${language.toUpperCase()}]`} ${value}`;
}

async function translateDynamicContent(db, user, { text, targetLanguage, sourceLanguage = "en", context = "platform" }) {
  const runtime = providerRuntime("translation");
  let translatedText = localTranslateText(text, targetLanguage);
  let provider = "local-dictionary";
  if (runtime.mode !== "local-dictionary" && runtime.mode !== "sandbox" && runtime.webhookUrl && runtime.apiKey) {
    try {
      const response = await fetchWithTimeout(runtime.webhookUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${runtime.apiKey}`
        },
        body: JSON.stringify({ text, sourceLanguage, targetLanguage, context, userId: user.id })
      }, PROVIDER_WEBHOOK_TIMEOUT_MS);
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

function inferMemoryCategory(text) {
  const lower = String(text || "").toLowerCase();
  if (lower.includes("prefer") || lower.includes("i like") || lower.includes("i want") || lower.includes("always") || lower.includes("don't") || lower.includes("do not")) return "preference";
  if (lower.includes("because") || lower.includes("next time") || lower.includes("when ") || lower.includes("after ")) return "pattern";
  return "fact";
}

function memoryBucket(profile, category) {
  ensureAiProfile(profile);
  if (category === "preference") return profile.agentMemory.preferences;
  if (category === "pattern") return profile.agentMemory.learnedPatterns;
  return profile.agentMemory.longTermFacts;
}

function rememberAgentMemory(profile, text, metadata = {}) {
  ensureAiProfile(profile);
  const value = String(text || "").trim();
  if (!value) return null;
  const category = metadata.category || inferMemoryCategory(value);
  const bucket = memoryBucket(profile, category);
  const normalized = value.toLowerCase().replace(/\s+/g, " ");
  const existing = bucket.find(item => item.normalized === normalized);
  if (existing) {
    existing.uses = Number(existing.uses || 0) + 1;
    existing.updatedAt = new Date().toISOString();
    existing.source = metadata.source || existing.source;
    return existing;
  }
  const item = {
    id: crypto.randomUUID(),
    category,
    text: value,
    normalized,
    source: metadata.source || "agent-command",
    confidence: Number(metadata.confidence || 0.78),
    uses: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  bucket.unshift(item);
  if (category === "preference") profile.agentMemory.preferences = bucket.slice(0, 30);
  else if (category === "pattern") profile.agentMemory.learnedPatterns = bucket.slice(0, 30);
  else profile.agentMemory.longTermFacts = bucket.slice(0, 40);
  profile.agentMemory.updatedAt = item.updatedAt;
  return item;
}

function retrieveAgentMemories(profile, query, limit = 6) {
  ensureAiProfile(profile);
  const queryTokens = new Set(tokenizeAgentText(query));
  const all = [
    ...(profile.agentMemory.preferences || []),
    ...(profile.agentMemory.learnedPatterns || []),
    ...(profile.agentMemory.longTermFacts || []),
    ...(profile.agentMemory.rememberedContexts || []).map(item => ({ ...item, text: `${item.command || ""} ${item.intent || ""} ${item.response || ""}`, category: "recent-context", confidence: 0.62 }))
  ];
  const scored = all
    .map(item => {
      const tokens = tokenizeAgentText(item.text || item.command || item.response || "");
      const overlap = tokens.reduce((total, token) => total + (queryTokens.has(token) ? 1 : 0), 0);
      return { ...item, score: overlap + Number(item.uses || 0) * 0.15 + Number(item.confidence || 0) * 0.25 };
    })
    .filter(item => item.score > 0.35)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
  profile.agentMemory.retrievals.unshift({
    id: crypto.randomUUID(),
    query,
    memoryIds: scored.map(item => item.id).filter(Boolean),
    createdAt: new Date().toISOString()
  });
  profile.agentMemory.retrievals = profile.agentMemory.retrievals.slice(0, 20);
  return scored;
}

function conversationModuleSignal(text) {
  const lower = String(text || "").toLowerCase();
  const signals = [
    { module: "Healthcare", section: "health", keys: ["telehealth", "health", "patient", "care", "doctor", "nurse", "clinic", "outbreak", "ebola", "vitals", "referral", "hearing", "visual", "blind", "deaf"] },
    { module: "Learning", section: "learning", keys: ["learning", "training", "course", "lesson", "quiz", "certificate", "learner", "student", "captions", "audio guide"] },
    { module: "Workforce", section: "workforce", keys: ["workforce", "job", "role", "worker", "candidate", "interview", "shift", "mentor", "apply", "hiring"] },
    { module: "AgriTrade", section: "trade", keys: ["agritrade", "trade", "farmer", "crop", "buyer", "sell", "market", "order", "wallet", "payment", "logistics", "drone", "field", "farm"] },
    { module: "Maps", section: "map", keys: ["map", "route", "location", "gps", "geospatial", "corridor", "country", "risk"] },
    { module: "Integrations", section: "integrations", keys: ["integration", "provider", "engine", "api", "service", "credential", "render", "openai", "twilio"] },
    { module: "Agent AI", section: "agent", keys: ["agent", "jarvis", "assistant", "voice", "conversation", "autopilot", "mission", "reason"] }
  ];
  const scored = signals
    .map(signal => ({ ...signal, score: signal.keys.reduce((total, key) => total + (lower.includes(key) ? 1 : 0), 0) }))
    .sort((a, b) => b.score - a.score);
  return scored[0]?.score ? scored[0] : { module: "Platform", section: "dashboard", score: 0 };
}

function isOpenEndedConversation(lower) {
  const value = String(lower || "").trim();
  if (!value) return false;
  return /^(what|how|why|when|where|who|can|could|would|should|tell|explain|describe|summarize)\b/.test(value)
    || /\b(question|wondering|understand|explain|tell me|what about|how about|can it|can you|could it|does it|will it)\b/.test(value);
}

function isActionRequest(lower) {
  return /\b(open|start|run|create|build|make|send|submit|apply|schedule|connect|contact|call|message|advance|complete|issue|record|capture|test|deploy|change|switch|translate|track|prepare)\b/.test(String(lower || ""));
}

function updateConversationUserModel(profile, command) {
  ensureAiProfile(profile);
  const text = String(command || "").trim();
  const lower = text.toLowerCase();
  const model = profile.agentMemory.userModel || {};
  const nameMatch = text.match(/\b(?:my name is|i am|i'm|this is)\s+([A-Z][a-zA-Z'-]{1,30})\b/);
  if (nameMatch) model.name = nameMatch[1];
  if (/\bfarmer|crop|field|buyer|sell|farm\b/.test(lower)) model.currentPersona = "farmer-or-trade-operator";
  if (/\bpatient|care|telehealth|doctor|health\b/.test(lower)) model.currentPersona = "health-access-user";
  if (/\blearner|student|training|course|lesson\b/.test(lower)) model.currentPersona = "learner";
  if (/\bjob|workforce|worker|candidate|interview\b/.test(lower)) model.currentPersona = "workforce-candidate";
  if (/\binvestor|government|ministry|funding|presentation\b/.test(lower)) model.currentAudience = "investor-government";
  if (/\bvoice|speak|talk|listen|microphone|jarvis\b/.test(lower)) model.preferredInteraction = "voice-first";
  if (/\bnon technical|non-technical|simple|easy|plain language|low tech|low-tech\b/.test(lower)) model.communicationStyle = "plain-language-step-by-step";
  if (/\bread aloud|audio|voice guide|blind|visual|visually impaired|large print|screen reader\b/.test(lower)) model.accessibilityMode = "visual-or-audio-support";
  if (/\bdeaf|hearing impaired|hard of hearing|caption|captions|transcript|sign language\b/.test(lower)) model.accessibilityMode = "hearing-support";
  if (/\blow bandwidth|offline|poor internet|bad internet|no internet|rural signal\b/.test(lower)) model.connectivityMode = "low-bandwidth";
  if (/\bspanish|espanol|español\b/.test(lower)) model.lastRequestedLanguage = "es";
  if (/\bfrench|francais|français\b/.test(lower)) model.lastRequestedLanguage = "fr";
  if (/\bkiswahili|swahili\b/.test(lower)) model.lastRequestedLanguage = "sw";
  if (/\barabic|arabic-speaking|عربي\b/.test(lower)) model.lastRequestedLanguage = "ar";
  model.lastAdaptiveSignals = {
    persona: model.currentPersona || "general-operator",
    audience: model.currentAudience || "community-user",
    style: model.communicationStyle || "plain-language-step-by-step",
    accessibility: model.accessibilityMode || "standard",
    connectivity: model.connectivityMode || "standard"
  };
  model.lastSeenAt = new Date().toISOString();
  profile.agentMemory.userModel = model;
  return model;
}

function localConversationalAnswer(db, user, command, moduleSignal, memories) {
  const { country, route } = activeContext(db);
  const memoryPreview = memories
    .slice(0, 2)
    .map(item => String(item.text || item.response || item.command || "").replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .map(text => text.length > 120 ? `${text.slice(0, 117)}...` : text);
  const memoryLine = memories.length
    ? `I am using ${memoryPreview.length} relevant memory cue(s): ${memoryPreview.join(" | ")}.`
    : "I do not need extra setup to guide this locally.";
  const moduleAnswers = {
    Healthcare: `Telehealth can guide a user from intake to accessible support, representative connection, consent, vitals, referral, care plan, follow-up, and public-health risk review. For sensitive care actions, I should explain the step and ask before creating records.`,
    Learning: `Learning can guide a learner through course selection, lesson progress, captions, audio guides, offline packets, quizzes, and certificates. The strongest experience is conversational: I ask the learner's goal, language, and access needs, then move one step at a time.`,
    Workforce: `Workforce can help someone build a profile, review readiness gaps, match roles, apply, schedule interviews, assign mentors, verify documents, plan shifts, and prepare payroll or performance evidence.`,
    AgriTrade: `AgriTrade can help a farmer or seller review crop readiness, run drone field intelligence, prepare buyer communication, create orders, assess route risk, check quality and cold-chain needs, and prepare payment evidence.`,
    Maps: `Maps can connect country context, route checkpoints, facility access, route risk, public-health or trade evidence, and live location tracking when the browser allows GPS.`,
    Integrations: `Integrations can test live engines, provider status, OpenAI, voice, translation, maps, jobs, courses, telehealth, trade, drones, communications, billing, and auth readiness.`,
    "Agent AI": `The agent layer can listen, remember context, answer questions, stage safe actions, ask for confirmation, run approved workflows, summarize what happened, and recommend the next best step.`
  };
  const base = moduleAnswers[moduleSignal.module] || `AgriNexus connects learning, workforce, telehealth, AgriTrade, drones, maps, AI, integrations, and admin readiness into one guided operating system.`;
  const next = smartNextActions(db, user).items.find(item => item.section === moduleSignal.section) || smartNextActions(db, user).items[0];
  db.profile.agentMemory.lastRecommendedAction = next || null;
  return [
    base,
    `Current context: ${country.name}, ${route.name}, checkpoint ${db.profile.activeCheckpoint}.`,
    memoryLine,
    next ? `Best next step: ${next.title}. ${next.detail}` : "Best next step: tell me the module and the outcome you want, and I will guide it."
  ].join(" ");
}

async function conversationalReasoningResponse(db, user, command, options = {}) {
  ensureAiProfile(db.profile);
  const lower = String(command || "").toLowerCase();
  const moduleSignal = conversationModuleSignal(command);
  const memories = retrieveAgentMemories(db.profile, command, 5);
  const { country, route } = activeContext(db);
  const profileSummary = {
    readiness: db.profile.readiness,
    activeCourseId: db.profile.activeCourseId,
    applications: (db.profile.applications || []).length,
    healthIntakes: (db.profile.healthIntakes || []).length,
    orders: (db.profile.orders || []).length,
    droneScans: (db.profile.droneScans || []).length,
    lastStatus: db.profile.agentMemory.lastStatus,
    userModel: db.profile.agentMemory.userModel
  };
  let responseText = "";
  let provider = "local-conversation-brain";
  if (process.env.OPENAI_API_KEY) {
    try {
      const response = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: process.env.OPENAI_AGENT_MODEL || process.env.OPENAI_MODEL || "gpt-4o-mini",
          input: [
            {
              role: "system",
              content: [
                "You are AgriNexus, a warm voice-first operating assistant for rural agriculture, telehealth, learning, workforce, maps, and trade.",
                "Answer the user's question conversationally in plain language.",
                "Use the platform context; do not claim external real-time facts unless they are provided.",
                "If an action may affect records, health, jobs, payment, providers, or messages, recommend confirmation instead of pretending it is already done.",
                "End with one clear next step the user can say."
              ].join(" ")
            },
            { role: "user", content: JSON.stringify({ command, moduleSignal, country, route, checkpoint: db.profile.activeCheckpoint, profileSummary, memories }) }
          ],
          max_output_tokens: 360
        })
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error?.message || response.statusText);
      responseText = extractResponseText(payload);
      provider = "openai-conversation-brain";
    } catch (error) {
      responseText = localConversationalAnswer(db, user, command, moduleSignal, memories);
      provider = "local-after-openai-conversation-error";
      logIntegration(db, {
        providerId: "openai",
        module: "AI",
        action: "agent.conversation_brain_error",
        status: "fallback",
        detail: error.message || "OpenAI conversation brain unavailable.",
        metadata: { command, module: moduleSignal.module }
      });
    }
  } else {
    responseText = localConversationalAnswer(db, user, command, moduleSignal, memories);
  }
  db.profile.agentMemory.conversationQuality.openEndedAnswers = Number(db.profile.agentMemory.conversationQuality.openEndedAnswers || 0) + 1;
  db.profile.agentMemory.conversationQuality.lastSignal = moduleSignal.module;
  db.profile.agentMemory.activeModule = moduleSignal.module;
  db.profile.agentMemory.lastRecommendedSection = moduleSignal.section;
  db.profile.agentMemory.lastStatus = "conversation-reasoned";
  db.profile.agentMemory.lastSummary = responseText;
  db.profile.agentMemory.updatedAt = new Date().toISOString();
  logIntegration(db, {
    providerId: "openai",
    module: "AI",
    action: "agent.conversation_brain_answered",
    detail: `Conversation brain answered in ${moduleSignal.module}.`,
    metadata: { provider, command, module: moduleSignal.module, memoriesUsed: memories.map(item => item.id).filter(Boolean) },
    dispatch: false
  });
  const shouldStage = options.conversational && isActionRequest(lower) && moduleSignal.section !== "dashboard";
  if (shouldStage) {
    const plan = planAgentToolLocally(command);
    if (plan && plan.tool !== "ai.copilot") {
      const staged = stageAgentAction(db, command, {
        module: plan.module,
        tool: plan.tool,
        action: plan.action,
        section: plan.section,
        planner: "conversation-brain-local",
        confidence: plan.confidence,
        rationale: plan.rationale
      });
      db.profile.agentMemory.conversationQuality.stagedActions = Number(db.profile.agentMemory.conversationQuality.stagedActions || 0) + 1;
      return {
        ...staged,
        response: `${responseText} I can also stage ${plan.action.toLowerCase()} now. Say "yes" to run it, or "no" to cancel.`,
        metadata: { ...staged.metadata, provider, conversationBrain: true, moduleSignal }
      };
    }
  }
  return {
    intent: "conversation.open_reasoning",
    response: responseText,
    status: "completed",
    metadata: { conversationMode: true, redirectSection: moduleSignal.section, provider, moduleSignal, memoriesUsed: memories.map(item => item.id).filter(Boolean) }
  };
}

function learnFromAgentCommand(db, command, result) {
  ensureAiProfile(db.profile);
  updateConversationUserModel(db.profile, command);
  db.profile.agentMemory.conversationQuality.turns = Number(db.profile.agentMemory.conversationQuality.turns || 0) + 1;
  const lower = String(command || "").toLowerCase();
  if (lower.startsWith("remember ") || lower.includes("remember that")) {
    const fact = String(command || "").replace(/^remember\s+/i, "").replace(/remember that/i, "").trim();
    if (fact) rememberAgentMemory(db.profile, fact, { source: "explicit-remember", category: inferMemoryCategory(fact), confidence: 0.95 });
  }
  if (lower.includes("prefer") || lower.includes("i want") || lower.includes("always")) {
    rememberAgentMemory(db.profile, command, { source: "user-preference", category: "preference", confidence: 0.88 });
  }
  if (result?.intent && result?.status && result.status !== "failed") {
    rememberAgentMemory(db.profile, `When the user asks "${command}", the useful workflow is ${result.intent}.`, { source: "successful-workflow", category: "pattern", confidence: 0.74 });
  }
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
    Maps: "map",
    AI: "agent",
    Integrations: "integrations",
    Admin: "admin",
    Profile: "profile"
  }[module] || "agent";
}

function workflowActionToAgentAction(action = {}) {
  const workflow = action.workflow || action.section || "";
  const workflowAction = action.action || action.ai || "";
  const moduleByWorkflow = {
    learning: "Learning",
    workforce: "Workforce",
    health: "Healthcare",
    trade: "AgriTrade",
    map: "Maps",
    integrations: "Integrations",
    admin: "Admin",
    agent: "AI",
    ai: "AI"
  };
  const toolMap = {
    "learning:start": "learning.start_or_continue",
    "learning:lesson": "learning.complete_lesson",
    "learning:quiz": "learning.quiz",
    "learning:certificate": "learning.certificate",
    "workforce:build-profile": "workforce.build_profile",
    "workforce:apply-role": "workforce.apply_role",
    "workforce:interview": "workforce.schedule_interview",
    "workforce:mentor": "workforce.assign_mentor",
    "workforce:shift": "workforce.schedule_shift",
    "health:intake": "health.intake",
    "health:accessibility": "health.accessibility_review",
    "health:representative": "health.representative",
    "health:caption": "health.caption",
    "health:caregiver": "health.caregiver",
    "health:safety": "health.safety",
    "health:careplan": "health.careplan",
    "trade:order": "trade.market_review",
    "trade:buyer-contact": "trade.buyer_contact",
    "trade:drone": "drone.field_scan",
    "trade:drone-plan": "drone.flight_plan",
    "trade:drone-intervention": "drone.intervention_task",
    "trade:advance": "trade.advance_order",
    "trade:wallet": "trade.wallet_payment",
    "map:evidence": "map.route_risk",
    "map:focus": "map.route_risk",
    "integrations:test-all": "integrations.test_all",
    "admin:readiness": "admin.health_check",
    "admin:health-check": "admin.health_check",
    "ai:copilot": "ai.copilot",
    "ai:command": "ai.copilot"
  };
  const tool = toolMap[`${workflow}:${workflowAction}`] || (action.ai ? "ai.copilot" : null);
  if (!tool) return null;
  const registry = agentToolRegistry().find(item => item.tool === tool);
  return {
    module: registry?.module || moduleByWorkflow[workflow] || action.module || "AI",
    tool,
    action: registry?.action || action.title || "Run recommended action",
    section: registry?.section || action.section || workflow || "agent",
    roleId: action.roleId || null,
    productId: action.productId || null
  };
}

function buildVoiceMissionFromGoal(db, user, goal, moduleSignal = conversationModuleSignal(goal)) {
  const smart = smartNextActions(db, user).items;
  const primary = smart.find(item => item.section === moduleSignal.section) || smart[0] || null;
  const steps = [];
  if (primary) {
    steps.push({
      id: crypto.randomUUID(),
      title: primary.title,
      detail: primary.detail,
      section: primary.section || moduleSignal.section,
      workflow: primary.workflow || null,
      action: primary.action || primary.ai || null,
      status: "recommended"
    });
  }
  if (moduleSignal.section === "trade") {
    steps.push(
      { id: crypto.randomUUID(), title: "Confirm crop or product", detail: "Make sure the farmer, crop, buyer, and route are clear.", section: "trade", workflow: "trade", action: "order", status: "queued" },
      { id: crypto.randomUUID(), title: "Create buyer evidence", detail: "Prepare buyer update, field evidence, route risk, and payment readiness.", section: "trade", workflow: "trade", action: "buyer-contact", status: "queued" }
    );
  } else if (moduleSignal.section === "health") {
    steps.push(
      { id: crypto.randomUUID(), title: "Collect access needs", detail: "Ask language, hearing, visual, caregiver, and low-bandwidth needs.", section: "health", workflow: "health", action: "intake", status: "queued" },
      { id: crypto.randomUUID(), title: "Prepare care handoff", detail: "Confirm consent, vitals, referral, and follow-up.", section: "health", workflow: "health", action: "careplan", status: "queued" }
    );
  } else if (moduleSignal.section === "workforce") {
    steps.push(
      { id: crypto.randomUUID(), title: "Review readiness", detail: "Check training, certificates, gaps, and best matched role.", section: "workforce", workflow: "workforce", action: "build-profile", status: "queued" },
      { id: crypto.randomUUID(), title: "Prepare placement", detail: "Apply, schedule interview, mentor, and shift.", section: "workforce", workflow: "workforce", action: "apply-role", status: "queued" }
    );
  } else if (moduleSignal.section === "learning") {
    steps.push(
      { id: crypto.randomUUID(), title: "Choose learning support", detail: "Confirm goal, language, captions, audio, and offline needs.", section: "learning", workflow: "learning", action: "start", status: "queued" },
      { id: crypto.randomUUID(), title: "Move to credential", detail: "Complete lesson, quiz, and certificate.", section: "learning", workflow: "learning", action: "lesson", status: "queued" }
    );
  } else {
    steps.push(
      { id: crypto.randomUUID(), title: "Choose a workspace", detail: "Open the best module and explain the next action.", section: moduleSignal.section || "dashboard", workflow: moduleSignal.section || null, action: null, status: "queued" },
      { id: crypto.randomUUID(), title: "Create evidence", detail: "Run the confirmed workflow and summarize what happened.", section: moduleSignal.section || "dashboard", workflow: moduleSignal.section || null, action: null, status: "queued" }
    );
  }
  return {
    id: crypto.randomUUID(),
    goal: goal || "Guide the user through AgriNexus.",
    module: moduleSignal.module,
    section: moduleSignal.section,
    status: "active",
    currentStepIndex: 0,
    progress: 0,
    steps: steps.slice(0, 4),
    createdBy: user?.email || "user",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

function updateActiveVoiceMission(db, user, command, result = {}) {
  ensureAiProfile(db.profile);
  const memory = db.profile.agentMemory;
  const lower = String(command || "").toLowerCase();
  let mission = memory.activeVoiceMission;
  const moduleSignal = result.metadata?.moduleSignal || conversationModuleSignal(command);
  const shouldStart = !mission || mission.status === "completed" || /\b(start|help me|guide me|i need|i want|can|how|what|sell|patient|job|training|farmer|telehealth)\b/.test(lower);
  if (shouldStart && moduleSignal.section !== "dashboard" && result.intent !== "conversation.acknowledged") {
    mission = buildVoiceMissionFromGoal(db, user, command, moduleSignal);
  }
  if (!mission) return null;
  if (result.status === "completed" || result.intent === "conversation.confirmed") {
    mission.steps = (mission.steps || []).map((step, index) => index === mission.currentStepIndex ? { ...step, status: "done" } : step);
    mission.currentStepIndex = Math.min((mission.steps || []).length - 1, Number(mission.currentStepIndex || 0) + 1);
  }
  if (result.status === "needs-confirmation") {
    mission.steps = (mission.steps || []).map((step, index) => index === mission.currentStepIndex ? { ...step, status: "waiting-confirmation" } : step);
  }
  const done = (mission.steps || []).filter(step => step.status === "done").length;
  mission.progress = mission.steps?.length ? Math.round((done / mission.steps.length) * 100) : 0;
  mission.status = mission.progress >= 100 ? "completed" : "active";
  mission.updatedAt = new Date().toISOString();
  memory.activeVoiceMission = mission;
  if (mission.status === "completed") {
    memory.voiceMissionHistory = [mission, ...(memory.voiceMissionHistory || [])].slice(0, 10);
  }
  return mission;
}

function activeVoiceMissionBrief(db) {
  const mission = db.profile.agentMemory?.activeVoiceMission;
  if (!mission) return null;
  const step = mission.steps?.[mission.currentStepIndex] || mission.steps?.[0];
  return {
    id: mission.id,
    goal: mission.goal,
    module: mission.module,
    section: mission.section,
    status: mission.status,
    progress: mission.progress,
    currentStep: step || null,
    phrase: step ? `Current mission: ${mission.goal}. Step ${Number(mission.currentStepIndex || 0) + 1}: ${step.title}. ${step.detail}` : `Current mission: ${mission.goal}.`
  };
}

function guidedMissionChecklistFor(moduleSignal = {}) {
  const section = moduleSignal.section || "dashboard";
  const label = moduleSignal.module || "AgriNexus";
  const finalStep = {
    trade: "Create trade evidence and summarize buyer, route, payment, or drone readiness.",
    health: "Create care evidence and summarize intake, accessibility, provider, or safety readiness.",
    workforce: "Create workforce evidence and summarize role, application, interview, or shift readiness.",
    learning: "Create learning evidence and summarize course, lesson, caption, or certificate progress.",
    map: "Create map evidence and summarize route, risk, location, or field-zone readiness.",
    integrations: "Create integration evidence and summarize provider readiness."
  }[section] || "Create platform evidence and summarize what changed.";
  return [
    { id: "understand", title: "Understand the need", detail: `Confirm what the user wants from ${label}.`, status: "active" },
    { id: "choose", title: "Choose the safest workflow", detail: "Ask one question if the request is broad or unclear.", status: "queued" },
    { id: "confirm", title: "Confirm before action", detail: "Ask yes or no before creating records, messages, applications, care, payments, or provider actions.", status: "queued" },
    { id: "evidence", title: "Create and explain evidence", detail: finalStep, status: "queued" }
  ];
}

function updateGuidedMissionMemory(db, user, command, result = {}) {
  ensureAiProfile(db.profile);
  const memory = db.profile.agentMemory;
  const moduleSignal = result.metadata?.moduleSignal || conversationModuleSignal(command);
  const section = result.metadata?.redirectSection || moduleSignal.section || "dashboard";
  const shouldStart = !memory.activeGuidedMission
    || memory.activeGuidedMission.status === "completed"
    || result.intent === "conversation.open_reasoning"
    || result.intent === "conversation.clarification_started"
    || result.intent === "conversation.voice_recovery"
    || /\b(help me|guide me|i need|i want|can you|how do i|show me)\b/i.test(String(command || ""));
  let mission = memory.activeGuidedMission;
  if (shouldStart && section !== "dashboard") {
    mission = {
      id: crypto.randomUUID(),
      goal: command || "Guide the user through AgriNexus.",
      module: moduleSignal.module,
      section,
      status: "active",
      steps: guidedMissionChecklistFor({ ...moduleSignal, section }),
      turnCount: 0,
      createdBy: user?.email || "user",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  }
  if (!mission) return null;
  mission.turnCount = Number(mission.turnCount || 0) + 1;
  mission.lastCommand = command;
  mission.lastIntent = result.intent;
  mission.lastResponse = result.response;
  mission.updatedAt = new Date().toISOString();
  const markDone = ids => {
    mission.steps = (mission.steps || []).map(step => ids.includes(step.id) ? { ...step, status: "done" } : step);
  };
  if (result.intent === "conversation.clarification_started" || result.intent === "conversation.voice_recovery") {
    markDone(["understand"]);
    mission.steps = mission.steps.map(step => step.id === "choose" ? { ...step, status: "active" } : step);
  } else if (result.intent === "conversation.clarification_resolved" || result.intent === "conversation.voice_recovery_resolved" || result.status === "needs-confirmation") {
    markDone(["understand", "choose"]);
    mission.steps = mission.steps.map(step => step.id === "confirm" ? { ...step, status: "active" } : step);
  } else if (result.intent === "conversation.confirmed" || result.status === "completed") {
    markDone(["understand", "choose", "confirm"]);
    mission.steps = mission.steps.map(step => step.id === "evidence" ? { ...step, status: result.intent === "conversation.confirmed" ? "done" : step.status } : step);
  }
  const done = (mission.steps || []).filter(step => step.status === "done").length;
  mission.progress = mission.steps?.length ? Math.round((done / mission.steps.length) * 100) : 0;
  mission.currentStep = (mission.steps || []).find(step => step.status !== "done") || (mission.steps || [])[mission.steps.length - 1] || null;
  if (mission.progress >= 100) {
    mission.status = "completed";
    memory.guidedMissionHistory = [mission, ...(memory.guidedMissionHistory || [])].slice(0, 12);
  } else {
    mission.status = "active";
  }
  memory.activeGuidedMission = mission;
  return mission;
}

function activeGuidedMissionBrief(db) {
  const mission = db.profile.agentMemory?.activeGuidedMission;
  if (!mission) return null;
  const current = mission.currentStep || (mission.steps || []).find(step => step.status !== "done") || null;
  return {
    id: mission.id,
    goal: mission.goal,
    module: mission.module,
    section: mission.section,
    status: mission.status,
    progress: Number(mission.progress || 0),
    currentStep: current,
    steps: mission.steps || [],
    phrase: current
      ? `Guided mission: ${mission.goal}. Current step: ${current.title}. ${current.detail}`
      : `Guided mission: ${mission.goal}. The checklist is complete.`
  };
}

function isVagueHelpRequest(lower) {
  const value = String(lower || "").trim();
  if (!value) return false;
  const broadAsk = /\b(help me|i need help|guide me|what should i do|help this|help my|support me|i need support|i want help)\b/.test(value);
  const broadDomain = /\b(farm|farmer|crop|field|patient|care|health|telehealth|work|job|role|training|learn|course|buyer|trade|market|drone|route)\b/.test(value);
  const specificAction = /\b(apply|contact|call|message|schedule|complete|issue|submit|pay|track|scan|translate|change language|run health check)\b/.test(value);
  return broadAsk && broadDomain && !specificAction;
}

function clarificationBlueprint(moduleSignal = {}) {
  const section = moduleSignal.section || "dashboard";
  const blueprints = {
    trade: {
      module: "AgriTrade",
      section: "trade",
      question: "I can help with the farm. What is the first outcome: contact buyer, sell crop, check field, or plan route?",
      options: ["contact buyer", "sell crop", "check field", "plan route"],
      routes: [
        { keys: ["contact", "buyer", "call", "message", "speak"], module: "AgriTrade", tool: "trade.buyer_contact", action: "Contact buyer", section: "trade" },
        { keys: ["sell", "crop", "market", "order", "price"], module: "AgriTrade", tool: "trade.market_review", action: "Review market", section: "trade" },
        { keys: ["check", "field", "scan", "drone", "pest", "disease", "soil"], module: "AgriTech", tool: "drone.field_scan", action: "Run drone scan", section: "trade" },
        { keys: ["route", "logistics", "delivery", "transport"], module: "Maps", tool: "map.route_risk", action: "Assess route", section: "map" }
      ]
    },
    health: {
      module: "Healthcare",
      section: "health",
      question: "I can help with care. What do you need first: start intake, connect representative, accessibility support, or check regional risk?",
      options: ["start intake", "connect representative", "accessibility support", "check regional risk"],
      routes: [
        { keys: ["intake", "start", "patient", "symptom"], module: "Healthcare", tool: "health.intake", action: "Start intake", section: "health" },
        { keys: ["representative", "provider", "doctor", "nurse", "navigator"], module: "Healthcare", tool: "health.representative", action: "Connect representative", section: "health" },
        { keys: ["access", "caption", "audio", "blind", "deaf", "visual", "hearing"], module: "Healthcare", tool: "health.accessibility_review", action: "Prepare accessible telehealth", section: "health" },
        { keys: ["risk", "outbreak", "safe", "region", "ebola", "infection"], module: "Healthcare", tool: "health.safety", action: "Run safety review", section: "health" }
      ]
    },
    workforce: {
      module: "Workforce",
      section: "workforce",
      question: "I can help with work. What should we do first: match role, apply for role, schedule interview, or plan shift?",
      options: ["match role", "apply for role", "schedule interview", "plan shift"],
      routes: [
        { keys: ["match", "find", "role", "readiness", "gap"], module: "Workforce", tool: "workforce.match_role", action: "Match workforce role", section: "workforce" },
        { keys: ["apply", "application", "job"], module: "Workforce", tool: "workforce.apply_role", action: "Apply to role", section: "workforce" },
        { keys: ["interview", "meeting"], module: "Workforce", tool: "workforce.schedule_interview", action: "Schedule interview", section: "workforce" },
        { keys: ["shift", "schedule", "work day"], module: "Workforce", tool: "workforce.schedule_shift", action: "Schedule shift", section: "workforce" }
      ]
    },
    learning: {
      module: "Learning",
      section: "learning",
      question: "I can help with learning. What should we do first: start course, complete lesson, build captions, or issue certificate?",
      options: ["start course", "complete lesson", "build captions", "issue certificate"],
      routes: [
        { keys: ["start", "course", "training", "learn"], module: "Learning", tool: "learning.start_or_continue", action: "Advance learning", section: "learning" },
        { keys: ["lesson", "complete"], module: "Learning", tool: "learning.complete_lesson", action: "Complete lesson", section: "learning" },
        { keys: ["caption", "deaf", "hearing"], module: "Learning", tool: "learning.access_caption", action: "Prepare captions", section: "learning" },
        { keys: ["certificate", "credential", "issue"], module: "Learning", tool: "learning.certificate", action: "Issue certificate", section: "learning" }
      ]
    }
  };
  if (section === "health") return blueprints.health;
  if (section === "workforce") return blueprints.workforce;
  if (section === "learning") return blueprints.learning;
  return blueprints.trade;
}

function startClarification(db, user, command, moduleSignal = conversationModuleSignal(command)) {
  ensureAiProfile(db.profile);
  const blueprint = clarificationBlueprint(moduleSignal);
  const clarification = {
    id: crypto.randomUUID(),
    sourceCommand: command,
    module: blueprint.module,
    section: blueprint.section,
    question: blueprint.question,
    options: blueprint.options,
    routes: blueprint.routes,
    status: "waiting-answer",
    createdBy: user?.email || "user",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  db.profile.agentMemory.activeClarification = clarification;
  db.profile.agentMemory.activeModule = blueprint.module;
  db.profile.agentMemory.lastRecommendedSection = blueprint.section;
  db.profile.agentMemory.lastStatus = "clarifying-user-need";
  db.profile.agentMemory.lastSummary = blueprint.question;
  db.profile.agentMemory.updatedAt = clarification.updatedAt;
  return {
    intent: "conversation.clarification_started",
    response: blueprint.question,
    status: "needs-input",
    metadata: { conversationMode: true, redirectSection: blueprint.section, clarification, suggestedReplies: blueprint.options }
  };
}

function continueClarification(db, user, command) {
  ensureAiProfile(db.profile);
  const clarification = db.profile.agentMemory.activeClarification;
  if (!clarification) return null;
  const lower = String(command || "").toLowerCase();
  if (isNegativeCommand(lower)) {
    db.profile.agentMemory.activeClarification = null;
    db.profile.agentMemory.lastStatus = "clarification-canceled";
    db.profile.agentMemory.lastSummary = "Clarification canceled.";
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    return {
      intent: "conversation.clarification_canceled",
      response: "No problem. I stopped that question. Tell me what you want to do next.",
      status: "canceled",
      metadata: { conversationMode: true, redirectSection: clarification.section }
    };
  }
  const route = (clarification.routes || []).find(item => (item.keys || []).some(key => lower.includes(key)))
    || (clarification.routes || [])[0];
  if (!route) return null;
  const completed = {
    ...clarification,
    answer: command,
    selectedAction: route.action,
    selectedTool: route.tool,
    status: "resolved",
    resolvedAt: new Date().toISOString()
  };
  db.profile.agentMemory.clarificationHistory = [completed, ...(db.profile.agentMemory.clarificationHistory || [])].slice(0, 20);
  db.profile.agentMemory.activeClarification = null;
  const staged = stageAgentAction(db, `${clarification.sourceCommand}. Answer: ${command}`, {
    module: route.module,
    tool: route.tool,
    action: route.action,
    section: route.section,
    planner: "clarification-router",
    confidence: 0.82,
    rationale: `User clarified broad request with: ${command}`
  });
  return {
    ...staged,
    intent: "conversation.clarification_resolved",
    response: `Good. I understand: ${command}. I can ${route.action.toLowerCase()} now. Say "yes" to run it, or "no" to cancel.`,
    metadata: {
      ...(staged.metadata || {}),
      clarification: completed,
      suggestedReplies: ["yes", "no", "explain that"]
    }
  };
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
      tool: pending.tool || null,
      mode: pending.kind === "autopilot-mission" ? "autopilot" : null,
      previewSteps: pending.previewSteps || []
    }
  };
}

function lastWorkflowContext(profile) {
  ensureAiProfile(profile);
  const latest = (profile.agentCommands || [])[0] || {};
  const memory = profile.agentMemory || {};
  const source = `${latest.intent || ""} ${latest.command || ""} ${memory.activeModule || ""}`.toLowerCase();
  const section = [
    [/trade|buyer|drone|wallet|order|payment|market/, "trade"],
    [/health|telehealth|care|patient|vitals|referral/, "health"],
    [/workforce|job|role|shift|interview|mentor/, "workforce"],
    [/learning|lesson|course|certificate|quiz/, "learning"],
    [/map|route|risk|geo/, "map"],
    [/integration|provider|engine/, "integrations"]
  ].find(([pattern]) => pattern.test(source))?.[1] || null;
  return { section, intent: latest.intent || memory.lastIntent || "", module: memory.activeModule || latest.metadata?.module || "", command: latest.command || memory.lastCommand || "" };
}

function contextualVoiceCommand(db, text, lower) {
  const context = lastWorkflowContext(db.profile);
  if (!context.section) return null;
  const compact = String(lower || "").trim();
  if (!/^(now\s+)?(check|open|run|create|send|tell|contact|advance|complete|issue|schedule|connect|review|prepare|brief|notify|track|start|do)\b/.test(compact)) return null;
  if (!/\b(the|that|it|them|buyer|route|order|patient|job|lesson|provider|driver|team|payment|scan)\b/.test(compact)) return null;
  const moduleLead = { trade: "AgriTrade", health: "Telehealth", workforce: "Workforce", learning: "Learning", map: "Maps", integrations: "Integrations" }[context.section];
  return moduleLead ? `${moduleLead}, continuing from ${context.intent || "the last workflow"}: ${text}` : null;
}

function moduleVoiceHelpResponse(db, text, lower) {
  if (!/(what can i say|what can.*do|voice help|commands|examples|help in|help for)/.test(lower)) return null;
  const help = [
    { keys: ["agritrade", "trade", "farmer", "crop", "buyer"], section: "trade", module: "AgriTrade", examples: ["contact my buyer", "review operational efficiency", "prepare a buyer update", "track my route in real time", "run drone scan", "release payment"] },
    { keys: ["telehealth", "health", "patient", "care"], section: "health", module: "Telehealth", examples: ["start telehealth intake", "connect me to a provider", "capture vitals", "create a referral", "check outbreak risk in Congo", "turn on caption relay"] },
    { keys: ["workforce", "job", "role", "worker"], section: "workforce", module: "Workforce", examples: ["apply for that job", "review my workforce gaps", "schedule my shift", "prepare me for an interview", "match me to a mentor"] },
    { keys: ["learning", "training", "course", "lesson"], section: "learning", module: "Learning", examples: ["start training path", "complete my lesson", "build captions", "create audio guide", "issue my certificate"] },
    { keys: ["map", "maps", "route", "geospatial"], section: "map", module: "Maps and AI", examples: ["run route intelligence", "show map risk", "track my route in real time", "stop live route tracking"] }
  ];
  const selected = help.find(item => item.keys.some(key => lower.includes(key)));
  if (!selected) return null;
  return {
    intent: "voice.module_help",
    response: `${selected.module} voice examples: say ${selected.examples.map(item => `"${item}"`).join(", ")}. I will guide the workflow and ask for confirmation before high-impact actions.`,
    status: "completed",
    metadata: { conversationMode: true, redirectSection: selected.section, module: selected.module, examples: selected.examples }
  };
}

function voiceRecoveryRoutes(section = "") {
  const routes = {
    trade: [
      { phrase: "review operational efficiency", module: "AgriTrade", tool: "trade.operational_efficiency", action: "Review operational efficiency", section: "trade", keys: ["efficiency", "operations", "optimize", "review"] },
      { phrase: "prepare a buyer update", module: "AgriTrade", tool: "trade.operational_communication", action: "Prepare operational communication", section: "trade", keys: ["buyer", "update", "message", "communication"] },
      { phrase: "check route risk", module: "Maps", tool: "map.route_risk", action: "Assess route", section: "map", keys: ["route", "risk", "map"] },
      { phrase: "run drone scan", module: "AgriTech", tool: "drone.field_scan", action: "Run drone scan", section: "trade", keys: ["drone", "scan", "field"] }
    ],
    health: [
      { phrase: "start telehealth intake", module: "Healthcare", tool: "health.intake", action: "Start intake", section: "health", keys: ["intake", "start", "patient"] },
      { phrase: "capture vitals", module: "Healthcare", tool: "health.vitals", action: "Capture vitals", section: "health", keys: ["vitals", "blood", "temperature"] },
      { phrase: "create referral", module: "Healthcare", tool: "health.referral", action: "Create referral", section: "health", keys: ["referral", "provider", "doctor"] },
      { phrase: "check outbreak risk", module: "Healthcare", tool: "health.safety", action: "Run safety review", section: "health", keys: ["outbreak", "risk", "safe", "ebola"] }
    ],
    workforce: [
      { phrase: "apply for that job", module: "Workforce", tool: "workforce.apply_role", action: "Apply to role", section: "workforce", keys: ["apply", "job", "role"] },
      { phrase: "review workforce gaps", module: "Workforce", tool: "workforce.match_role", action: "Match workforce role", section: "workforce", keys: ["gaps", "match", "readiness"] },
      { phrase: "schedule interview", module: "Workforce", tool: "workforce.schedule_interview", action: "Schedule interview", section: "workforce", keys: ["interview"] },
      { phrase: "schedule shift", module: "Workforce", tool: "workforce.schedule_shift", action: "Schedule shift", section: "workforce", keys: ["shift", "schedule"] }
    ],
    learning: [
      { phrase: "start training path", module: "Learning", tool: "learning.start_or_continue", action: "Advance learning", section: "learning", keys: ["start", "training", "course"] },
      { phrase: "complete my lesson", module: "Learning", tool: "learning.complete_lesson", action: "Complete lesson", section: "learning", keys: ["lesson", "complete"] },
      { phrase: "build captions", module: "Learning", tool: "learning.access_caption", action: "Prepare captions", section: "learning", keys: ["caption", "deaf", "hearing"] },
      { phrase: "issue my certificate", module: "Learning", tool: "learning.certificate", action: "Issue certificate", section: "learning", keys: ["certificate", "credential"] }
    ],
    dashboard: [
      { phrase: "open telehealth", module: "Healthcare", tool: "health.accessibility_review", action: "Prepare accessible telehealth", section: "health", keys: ["telehealth", "health", "care"] },
      { phrase: "open AgriTrade", module: "AgriTrade", tool: "trade.market_review", action: "Review market", section: "trade", keys: ["agritrade", "trade", "buyer", "crop"] },
      { phrase: "apply for a job", module: "Workforce", tool: "workforce.apply_role", action: "Apply to role", section: "workforce", keys: ["apply", "job", "work"] },
      { phrase: "start training path", module: "Learning", tool: "learning.start_or_continue", action: "Advance learning", section: "learning", keys: ["training", "learn", "course"] }
    ]
  };
  return routes[section] || routes.dashboard;
}

function voiceRecoveryResponse(db) {
  ensureAiProfile(db.profile);
  const context = lastWorkflowContext(db.profile);
  const routes = voiceRecoveryRoutes(context.section || "dashboard");
  const suggestions = routes.map(item => item.phrase);
  const recovery = {
    id: crypto.randomUUID(),
    section: context.section || "dashboard",
    contextIntent: context.intent || "",
    suggestions,
    routes,
    status: "waiting-answer",
    createdAt: new Date().toISOString()
  };
  db.profile.agentMemory.activeRecovery = recovery;
  db.profile.agentMemory.lastStatus = "voice-recovery";
  db.profile.agentMemory.lastSummary = `I need one clearer direction: ${suggestions.join(", or ")}.`;
  db.profile.agentMemory.updatedAt = recovery.createdAt;
  return {
    intent: "conversation.voice_recovery",
    response: `I heard you, but I need one clearer direction. Are you asking about ${suggestions.join(", or ")}? You can say one of those exactly and I will continue.`,
    status: "needs-input",
    metadata: { conversationMode: true, redirectSection: context.section || "agent", suggestions, recovery }
  };
}

function continueVoiceRecovery(db, user, command) {
  ensureAiProfile(db.profile);
  const recovery = db.profile.agentMemory.activeRecovery;
  if (!recovery) return null;
  const lower = String(command || "").toLowerCase();
  if (isNegativeCommand(lower)) {
    db.profile.agentMemory.activeRecovery = null;
    db.profile.agentMemory.lastStatus = "voice-recovery-canceled";
    db.profile.agentMemory.lastSummary = "Voice recovery canceled.";
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    return {
      intent: "conversation.voice_recovery_canceled",
      response: "No problem. I stopped that recovery prompt. Tell me what you want in your own words.",
      status: "canceled",
      metadata: { conversationMode: true, redirectSection: recovery.section || "agent" }
    };
  }
  const route = (recovery.routes || []).find(item => lower.includes(String(item.phrase || "").toLowerCase()) || (item.keys || []).some(key => lower.includes(key)))
    || (recovery.routes || [])[0];
  if (!route) return null;
  const completed = {
    ...recovery,
    answer: command,
    selectedAction: route.action,
    selectedTool: route.tool,
    status: "resolved",
    resolvedAt: new Date().toISOString()
  };
  db.profile.agentMemory.recoveryHistory = [completed, ...(db.profile.agentMemory.recoveryHistory || [])].slice(0, 20);
  db.profile.agentMemory.activeRecovery = null;
  const staged = stageAgentAction(db, `Recovered voice command: ${command}`, {
    module: route.module,
    tool: route.tool,
    action: route.action,
    section: route.section,
    planner: "voice-recovery-router",
    confidence: 0.78,
    rationale: `User selected a recovery option after an unclear voice command.`
  });
  return {
    ...staged,
    intent: "conversation.voice_recovery_resolved",
    response: `Got it. I can ${route.action.toLowerCase()} now. Say "yes" to run it, or "no" to cancel.`,
    metadata: {
      ...(staged.metadata || {}),
      recovery: completed,
      suggestedReplies: ["yes", "no", "explain that"]
    }
  };
}

function conversationFollowUpResponse(db, user, text, lower) {
  ensureAiProfile(db.profile);
  const memory = db.profile.agentMemory;
  const pending = db.profile.agentPendingAction;
  const recommendation = memory.lastRecommendedAction || smartNextActions(db, user).items[0] || null;
  const context = lastWorkflowContext(db.profile);
  const wantsExplanation = /\b(explain|repeat|say that again|read that|what do you mean|why|summarize that)\b/.test(lower);
  const wantsMission = /\b(current mission|mission status|where are we|what are we doing|what step|where am i|orient me|checklist|guided mission)\b/.test(lower);
  const wantsNavigation = /\b(take me there|open that|show me|go there|go to it|where is that)\b/.test(lower);
  const wantsNext = /\b(continue|next step|do the next|run the next|start the next|do that|let's do that|lets do that|proceed)\b/.test(lower);
  if (!wantsExplanation && !wantsNavigation && !wantsNext && !wantsMission) return null;

  if (wantsMission) {
    const guided = /\b(checklist|guided mission)\b/.test(lower) ? activeGuidedMissionBrief(db) : null;
    if (guided) {
      return {
        intent: "conversation.guided_mission_status",
        response: `${guided.phrase}. Progress is ${guided.progress} percent. Say continue when you are ready.`,
        status: "completed",
        metadata: { conversationMode: true, redirectSection: guided.section || "dashboard", guidedMission: guided }
      };
    }
    const brief = activeVoiceMissionBrief(db);
    return {
      intent: "conversation.voice_mission_status",
      response: brief ? `${brief.phrase}. Progress is ${brief.progress} percent. Say continue when you are ready.` : "No active voice mission is running yet. Tell me what you want to accomplish, and I will guide it.",
      status: brief ? "completed" : "needs-input",
      metadata: { conversationMode: true, redirectSection: brief?.section || "dashboard", voiceMission: brief }
    };
  }

  if (wantsExplanation) {
    const detail = pending
      ? `The pending action is ${pending.action || "a workflow"} in ${pending.module || "AgriNexus"}. I am waiting because this action may create or change workflow evidence. Say yes to run it, or no to cancel.`
      : memory.lastSummary || "I do not have a recent answer to explain yet.";
    return {
      intent: "conversation.followup_explained",
      response: detail,
      status: pending ? "needs-confirmation" : "completed",
      metadata: { conversationMode: true, redirectSection: pending?.section || memory.lastRecommendedSection || context.section || "agent" }
    };
  }

  if (wantsNavigation && !wantsNext) {
    const section = pending?.section || recommendation?.section || memory.lastRecommendedSection || context.section || "dashboard";
    return {
      intent: "conversation.followup_navigate",
      response: `I am taking you to ${section}. From there, I can guide the next step by voice.`,
      status: "completed",
      metadata: { conversationMode: true, redirectSection: section, recommendation }
    };
  }

  if (pending && wantsNext) {
    return {
      intent: "conversation.followup_pending",
      response: `I already have ${pending.action || "a workflow"} ready. Say "yes" to run it, or "no" to cancel.`,
      status: "needs-confirmation",
      metadata: { conversationMode: true, redirectSection: pending.section || "agent", pendingActionId: pending.id }
    };
  }

  if (recommendation && wantsNext) {
    const agentAction = workflowActionToAgentAction(recommendation);
    if (agentAction) {
      const staged = stageAgentAction(db, text, {
        ...agentAction,
        planner: "follow-up-recommendation",
        confidence: recommendation.confidence || 0.82,
        rationale: recommendation.reason || recommendation.detail || "This was the last recommended next action."
      });
      memory.conversationQuality.stagedActions = Number(memory.conversationQuality.stagedActions || 0) + 1;
      return {
        ...staged,
        response: `Yes. The next best step is ${recommendation.title}. ${recommendation.detail} Say "yes" to run it, or "no" to cancel.`,
        metadata: { ...staged.metadata, recommendationId: recommendation.id, followUp: true }
      };
    }
    return {
      intent: "conversation.followup_navigate",
      response: `The next best step is ${recommendation.title}. I am opening ${recommendation.section || "dashboard"} so I can guide it with you.`,
      status: "completed",
      metadata: { conversationMode: true, redirectSection: recommendation.section || "dashboard", recommendation }
    };
  }

  return {
    intent: "conversation.followup_recovery",
    response: "I can continue, but I need one clear direction. Say open telehealth, start training, apply for a job, contact my buyer, run drone scan, or test engines.",
    status: "needs-input",
    metadata: { conversationMode: true, redirectSection: context.section || "dashboard" }
  };
}

function socialConversationResponse(db, user, text, lower) {
  ensureAiProfile(db.profile);
  if (/^(hi|hello|hey|good morning|good afternoon|good evening|are you there|can you hear me)\b/.test(lower)) {
    const name = db.profile.agentMemory.userModel?.name || user.name?.split(/\s+/)[0] || "there";
    db.profile.agentMemory.lastStatus = "conversation-ready";
    db.profile.agentMemory.lastSummary = `Hello ${name}. I am listening and ready to guide the next step.`;
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    return {
      intent: "conversation.greeting",
      response: `Hello ${name}. I am here with you. Tell me what you want to do in plain language, and I will guide one step at a time.`,
      status: "completed",
      metadata: { conversationMode: true, redirectSection: db.profile.agentMemory.lastRecommendedSection || "dashboard" }
    };
  }
  if (/^(thanks|thank you|appreciate it|that helps|perfect|great|awesome)\b/.test(lower)) {
    const next = db.profile.agentMemory.lastRecommendedAction || smartNextActions(db, user).items[0];
    return {
      intent: "conversation.acknowledged",
      response: next
        ? `You're welcome. I am still here. The next thing I can help with is ${next.title}. Say "do the next step" when you are ready.`
        : "You're welcome. I am still here. Say what you want to do next and I will guide it.",
      status: "completed",
      metadata: { conversationMode: true, redirectSection: next?.section || "dashboard", recommendation: next || null }
    };
  }
  if (/^(wait|hold on|pause|give me a second|one second|stop talking)\b/.test(lower)) {
    db.profile.agentMemory.lastStatus = "paused-by-user";
    db.profile.agentMemory.lastSummary = "User asked AgriNexus to pause and wait.";
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    return {
      intent: "conversation.paused",
      response: "No problem. I will wait. When you are ready, say continue or ask the next question.",
      status: "paused",
      metadata: { conversationMode: true, redirectSection: db.profile.agentMemory.lastRecommendedSection || "dashboard" }
    };
  }
  return null;
}

async function voiceInvestorDemo(db, user) {
  const goal = "Run a voice-led investor demo across learning, workforce, telehealth, AgriTrade, drones, maps, and provider readiness.";
  const { plan, execution } = await createAndExecuteAutopilotMission(db, user, goal, "Voice investor demo mode");
  const script = [
    "Welcome to AgriNexus. This is a voice-first operating system for rural learning, workforce readiness, accessible telehealth, agriculture trade, drone intelligence, live maps, and AI-guided operations.",
    "The assistant can guide a non-technical user from a spoken need to an actual workflow, with confirmation, evidence, and next steps.",
    "In this demo, AgriNexus creates training evidence, workforce movement, telehealth support, trade and buyer activity, drone field intelligence, route risk, and provider evidence."
  ].join(" ");
  db.profile.agentBriefings = db.profile.agentBriefings || [];
  db.profile.agentBriefings.unshift({ id: crypto.randomUUID(), title: "Voice Investor Demo", plainLanguageSummary: script, planId: plan.id, executionId: execution.id, createdBy: user.email, createdAt: new Date().toISOString() });
  logIntegration(db, { providerId: "openai", module: "AI", action: "agent.voice_demo_completed", detail: `Voice investor demo executed with ${execution.steps.length} step(s).`, metadata: { planId: plan.id, executionId: execution.id } });
  return { intent: "agent.voice_demo_mode", response: `${script} Demo evidence is complete: ${execution.summary}`, status: execution.status, metadata: { conversationMode: true, redirectSection: "agent", planId: plan.id, executionId: execution.id, steps: execution.steps.length } };
}

function localizedWorkflowPhrase(lower) {
  const normalized = String(lower || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const phrases = [
    { patterns: ["demarre telesante", "iniciar telesalud", "anza afya", "anza usajili"], command: "start telehealth intake" },
    { patterns: ["connecte moi", "conectame", "niunganishe"], command: "connect me to a provider" },
    { patterns: ["postuler", "solicitar trabajo", "omba kazi"], command: "apply for that job" },
    { patterns: ["terminer lecon", "completa mi leccion", "kamilisha somo"], command: "complete my lesson" },
    { patterns: ["contacter acheteur", "contacta comprador", "wasiliana na mnunuzi"], command: "contact my buyer" },
    { patterns: ["rapport acheteur", "actualizacion comprador", "taarifa kwa mnunuzi"], command: "AgriTrade prepare a buyer update" },
    { patterns: ["risque route", "riesgo ruta", "hatari ya njia"], command: "check my route risk" },
    { patterns: ["scan drone", "escaneo dron", "ukaguzi wa drone"], command: "run drone scan" }
  ];
  return phrases.find(item => item.patterns.some(pattern => normalized.includes(pattern)))?.command || "";
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
  if (pending.kind === "autopilot-mission") {
    const { plan, execution } = await createAndExecuteAutopilotMission(db, user, pending.goal || pending.command || "Run an AgriNexus autopilot mission.", "Confirmed from voice-first autopilot");
    return {
      intent: "agent.autopilot_executed",
      response: `Autopilot complete. ${execution.summary}`,
      status: execution.status,
      metadata: { conversationMode: true, redirectSection: pending.section || "agent", planId: plan.id, executionId: execution.id, steps: execution.steps.length, mode: "autopilot" }
    };
  }
  if (pending.kind === "conversational-intake") {
    const result = await applyConversationalIntake(db, user, pending);
    return {
      ...result,
      metadata: { conversationMode: true, ...(result.metadata || {}) }
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
      metadata: {
        conversationMode: true,
        redirectSection: pending.section || sectionForAgentModule(pending.module),
        tool: pending.tool,
        planner: pending.planner || null,
        confidence: pending.confidence || null,
        rationale: pending.rationale || null,
        userFacingPlan: pending.userFacingPlan || pending.action || null,
        attempts: result.attempts
      }
    };
  }
  return { intent: "conversation.no_pending_action", response: "I could not find the pending workflow details. Please ask again.", status: "needs-input" };
}

function agentToolRegistry() {
  return [
    { tool: "learning.start_or_continue", module: "Learning", action: "Advance learning", section: "learning", description: "Start or continue a course, training path, lesson, or learning journey for a learner." },
    { tool: "learning.complete_lesson", module: "Learning", action: "Complete lesson", section: "learning", description: "Complete the active lesson and update learner progress." },
    { tool: "learning.quiz", module: "Learning", action: "Complete quiz", section: "learning", description: "Run a lesson quiz or knowledge check." },
    { tool: "learning.certificate", module: "Learning", action: "Issue certificate", section: "learning", description: "Issue a certificate after training progress or course completion." },
    { tool: "learning.access_caption", module: "Learning", action: "Prepare captions", section: "learning", description: "Create captions for deaf or hard-of-hearing learners." },
    { tool: "learning.access_visual", module: "Learning", action: "Prepare visual and audio supports", section: "learning", description: "Create large print, audio guide, or screen reader support for visually impaired learners." },
    { tool: "learning.access_offline", module: "Learning", action: "Prepare offline packet", section: "learning", description: "Prepare low-bandwidth or offline learning support." },
    { tool: "workforce.build_profile", module: "Workforce", action: "Verify profile", section: "workforce", description: "Build or verify a candidate profile for job readiness." },
    { tool: "workforce.match_role", module: "Workforce", action: "Match workforce role", section: "workforce", description: "Find a job, role, placement, readiness gap, or candidate match." },
    { tool: "workforce.apply_role", module: "Workforce", action: "Apply to role", section: "workforce", description: "Submit or prepare a job application for the best matched role." },
    { tool: "workforce.schedule_interview", module: "Workforce", action: "Schedule interview", section: "workforce", description: "Schedule or prepare a job interview." },
    { tool: "workforce.assign_mentor", module: "Workforce", action: "Assign mentor", section: "workforce", description: "Assign workforce mentor support to a candidate." },
    { tool: "workforce.schedule_shift", module: "Workforce", action: "Schedule shift", section: "workforce", description: "Schedule a work shift, paid shift, or field work assignment." },
    { tool: "health.intake", module: "Healthcare", action: "Start intake", section: "health", description: "Start a telehealth intake for a patient or community member." },
    { tool: "health.accessibility_review", module: "Healthcare", action: "Prepare accessible telehealth", section: "health", description: "Prepare telehealth support for visual impairment, hearing impairment, captions, caregiver, audio, or low-bandwidth access." },
    { tool: "health.representative", module: "Healthcare", action: "Connect representative", section: "health", description: "Connect a patient to a health representative or care navigator." },
    { tool: "health.caption", module: "Healthcare", action: "Start caption relay", section: "health", description: "Start caption support for a deaf or hard-of-hearing patient." },
    { tool: "health.caregiver", module: "Healthcare", action: "Notify caregiver", section: "health", description: "Notify or involve a caregiver or community aide." },
    { tool: "health.consent", module: "Healthcare", action: "Record consent", section: "health", description: "Record privacy or telehealth consent." },
    { tool: "health.vitals", module: "Healthcare", action: "Capture vitals", section: "health", description: "Capture patient vitals for telehealth." },
    { tool: "health.referral", module: "Healthcare", action: "Create referral", section: "health", description: "Create a provider referral or care handoff." },
    { tool: "health.followup", module: "Healthcare", action: "Schedule follow-up", section: "health", description: "Schedule a telehealth follow-up or callback." },
    { tool: "health.safety", module: "Healthcare", action: "Run safety review", section: "health", description: "Run a safety review for health risk, escalation, or care quality." },
    { tool: "health.careplan", module: "Healthcare", action: "Generate care plan", section: "health", description: "Generate a care plan for a patient." },
    { tool: "trade.market_review", module: "AgriTrade", action: "Review market", section: "trade", description: "Review market, create an order, price crops, or prepare a selling workflow." },
    { tool: "trade.buyer_contact", module: "AgriTrade", action: "Contact buyer", section: "trade", description: "Speak to, call, message, or contact a buyer about selling crops." },
    { tool: "trade.operational_efficiency", module: "AgriTrade", action: "Review operational efficiency", section: "trade", description: "Optimize trade operations, identify bottlenecks, reduce delay, improve profit, and connect buyer, route, drone, quality, cold-chain, logistics, and payment evidence." },
    { tool: "trade.operational_communication", module: "AgriTrade", action: "Prepare operational communication", section: "trade", description: "Draft intuitive updates, handoff messages, status reports, buyer scripts, route updates, and operational briefs from current trade evidence." },
    { tool: "trade.advance_order", module: "AgriTrade", action: "Advance order", section: "trade", description: "Move an order through logistics, quality check, or delivery." },
    { tool: "trade.wallet_payment", module: "AgriTrade", action: "Post payment", section: "trade", description: "Record wallet, mobile money, M-Pesa, or buyer payment activity." },
    { tool: "drone.flight_plan", module: "AgriTech", action: "Plan drone mission", section: "trade", description: "Plan a drone flight, drone mission, or field survey." },
    { tool: "drone.field_scan", module: "AgriTech", action: "Run drone scan", section: "trade", description: "Run crop stress, disease, soil, irrigation, pest, or field evidence scan." },
    { tool: "drone.intervention_task", module: "AgriTech", action: "Assign field intervention", section: "trade", description: "Create field intervention task from drone intelligence, irrigation, pest, or crop stress evidence." },
    { tool: "map.route_risk", module: "Maps", action: "Assess route", section: "map", description: "Assess map, logistics route, checkpoint, corridor, country, or geospatial risk." },
    { tool: "integrations.test_all", module: "Integrations", action: "Test provider engines", section: "integrations", description: "Test live provider engines, APIs, integrations, and service health." },
    { tool: "admin.health_check", module: "Admin", action: "Admin health check", section: "admin", description: "Run platform health check, admin diagnostics, or production readiness review." },
    { tool: "profile.summary", module: "Profile", action: "Show profile", section: "profile", description: "Summarize user profile, records, workflow history, and unified activity." },
    { tool: "ai.copilot", module: "AI", action: "Run copilot", section: "agent", description: "Answer an operational question or recommend next best action when no workflow should run." }
  ];
}

function extractJsonObject(text) {
  const value = String(text || "").trim();
  if (!value) return null;
  const fenced = value.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const candidate = fenced ? fenced[1].trim() : value.slice(value.indexOf("{"), value.lastIndexOf("}") + 1);
  if (!candidate || !candidate.startsWith("{")) return null;
  try {
    return JSON.parse(candidate);
  } catch {
    return null;
  }
}

function tokenizeAgentText(text) {
  const synonyms = {
    deaf: "caption hearing accessibility",
    blind: "visual screenreader audio accessibility",
    eyesight: "visual screenreader audio accessibility",
    hear: "hearing caption accessibility",
    hearing: "caption accessibility",
    farmer: "crop trade drone field market buyer",
    crop: "farm field drone trade market buyer",
    crops: "farm field drone trade market buyer",
    sell: "trade market buyer order",
    selling: "trade market buyer order",
    patient: "health telehealth care intake",
    doctor: "health provider care representative",
    nurse: "health provider care representative",
    work: "workforce job role shift",
    job: "workforce role application interview",
    learn: "learning training course lesson",
    training: "learning course lesson certificate",
    route: "map logistics checkpoint risk",
    country: "map route risk",
    provider: "integration engine api health"
  };
  const expanded = String(text || "").toLowerCase().replace(/[^\w\s.-]/g, " ");
  return expanded
    .split(/\s+/)
    .flatMap(token => [token, ...(synonyms[token] || "").split(/\s+/)])
    .filter(token => token && token.length > 2);
}

function planAgentToolLocally(command) {
  const tokens = tokenizeAgentText(command);
  if (!tokens.length) return null;
  const scored = agentToolRegistry()
    .map(item => {
      const haystack = tokenizeAgentText(`${item.module} ${item.action} ${item.tool} ${item.description}`);
      const score = tokens.reduce((total, token) => total + (haystack.includes(token) ? 1 : 0), 0);
      return { ...item, score };
    })
    .sort((a, b) => b.score - a.score);
  const best = scored[0];
  if (!best || best.score < 3) return null;
  return {
    ...best,
    confidence: Math.min(0.86, 0.45 + best.score / 20),
    rationale: "Local agent router matched the request to the closest available AgriNexus workflow tool.",
    planner: "local-agent-router"
  };
}

async function planAgentToolWithOpenAi(db, user, command) {
  if (!process.env.OPENAI_API_KEY) return null;
  const { country, route } = activeContext(db);
  const tools = agentToolRegistry();
  const retrievedMemories = retrieveAgentMemories(db.profile, command, 6);
  const context = {
    country: country.name,
    route: route.name,
    checkpoint: db.profile.activeCheckpoint,
    user: { role: user.role, language: user.language || db.profile.accessibilityProfile?.language || "en" },
    profile: {
      readiness: db.profile.readiness,
      learningPath: db.profile.learningPath || db.profile.careerTrack,
      certificates: (db.profile.certificates || []).length,
      applications: (db.profile.applications || []).length,
      healthIntakes: (db.profile.healthIntakes || []).length,
      orders: (db.profile.orders || []).length,
      droneScans: (db.profile.droneScans || []).length
    },
    memory: {
      activeMission: db.profile.agentMemory.activeMission,
      activeAudience: db.profile.agentMemory.activeAudience,
      relevantMemories: retrievedMemories.map(item => ({ category: item.category, text: item.text || item.response || item.command, confidence: item.confidence }))
    }
  };
  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.OPENAI_AGENT_MODEL || process.env.OPENAI_MODEL || "gpt-4o-mini",
        input: [
          {
            role: "system",
            content: [
              "You are the AgriNexus agent planner.",
              "Select exactly one safe workflow tool from the provided allowlist.",
              "Do not invent tools, endpoints, providers, legal/medical promises, or external actions.",
              "If the user asks a general question with no workflow action, select ai.copilot.",
              "Return JSON only with: tool, confidence, rationale, userFacingPlan."
            ].join(" ")
          },
          { role: "user", content: JSON.stringify({ command, context, tools }) }
        ],
        max_output_tokens: 450
      })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(payload.error?.message || `OpenAI planner failed: ${response.status}`);
    const parsed = extractJsonObject(extractResponseText(payload));
    const selected = tools.find(item => item.tool === parsed?.tool);
    if (!selected) return null;
    return {
      ...selected,
      confidence: Number(parsed.confidence || 0.7),
      rationale: String(parsed.rationale || "OpenAI selected the closest safe AgriNexus workflow."),
      userFacingPlan: String(parsed.userFacingPlan || selected.action),
      planner: "openai-agent-planner"
    };
  } catch (error) {
    logIntegration(db, {
      providerId: "openai",
      module: "AI",
      action: "agent.llm_tool_planner_error",
      status: "fallback",
      detail: error.message || "OpenAI agent planner unavailable.",
      metadata: { command }
    });
    return null;
  }
}

async function planAgenticTool(db, user, command) {
  const openAiPlan = await planAgentToolWithOpenAi(db, user, command);
  const localPlan = planAgentToolLocally(command);
  const plan = openAiPlan || localPlan;
  if (!plan) return null;
  const memories = retrieveAgentMemories(db.profile, command, 4);
  return {
    ...plan,
    memoriesUsed: memories.map(item => ({ id: item.id, category: item.category, text: item.text || item.response || item.command, confidence: item.confidence }))
  };
}

async function routeAgenticCommand(db, user, command, options = {}) {
  const plan = await planAgenticTool(db, user, command);
  if (!plan) return null;
  logIntegration(db, {
    providerId: plan.planner === "openai-agent-planner" ? "openai" : "agent-router",
    module: "AI",
    action: plan.planner === "openai-agent-planner" ? "agent.llm_tool_planned" : "agent.local_tool_planned",
    detail: `${plan.planner} selected ${plan.tool} for: ${command}`,
    metadata: { tool: plan.tool, confidence: plan.confidence, rationale: plan.rationale }
  });
  if (plan.memoriesUsed?.length) {
    logIntegration(db, {
      providerId: "agent-memory",
      module: "AI",
      action: "agent.memory_retrieved",
      detail: `Agent retrieved ${plan.memoriesUsed.length} long-term memory item(s) for planning.`,
      metadata: { command, memoryIds: plan.memoriesUsed.map(item => item.id).filter(Boolean), tool: plan.tool }
    });
  }
  const wantsExecute = options.confirm === true;
  if (plan.tool === "ai.copilot") {
    const { country, route } = activeContext(db);
    const aiResult = await runAi("copilot", country, route, db.profile);
    const run = recordAiRun(db, { type: "copilot", country, route, result: aiResult, module: "AI" });
    return {
      intent: "ai-question",
      response: run.text,
      status: "completed",
      metadata: { runId: run.id, provider: run.provider, planner: plan.planner, confidence: plan.confidence, rationale: plan.rationale }
    };
  }
  if (!wantsExecute) {
    const staged = stageAgentAction(db, command, {
      module: plan.module,
      tool: plan.tool,
      action: plan.action,
      section: plan.section,
      planner: plan.planner,
      confidence: plan.confidence,
      rationale: plan.rationale,
      userFacingPlan: plan.userFacingPlan || plan.action
    });
    return {
      ...staged,
      response: `I understood the goal and selected ${plan.action.toLowerCase()} in ${plan.module}. ${plan.rationale} Say or type "yes" to run it, or "no" to cancel.`,
      metadata: {
        ...staged.metadata,
        planner: plan.planner,
        confidence: plan.confidence,
        rationale: plan.rationale,
        userFacingPlan: plan.userFacingPlan || plan.action,
        memoriesUsed: plan.memoriesUsed || []
      }
    };
  }
  const step = {
    id: crypto.randomUUID(),
    module: plan.module,
    tool: plan.tool,
    action: plan.action,
    detail: `Agent-planned command: ${command}`,
    status: "pending-approval"
  };
  const result = await executeAgentStepWithRetry(db, user, step, 2);
  db.profile.agentMemory.lastStatus = result.status === "executed" ? "completed" : "needs-review";
  db.profile.agentMemory.lastSummary = result.result || result.error || `${plan.action} completed.`;
  db.profile.agentMemory.updatedAt = new Date().toISOString();
  return {
    intent: plan.tool,
    response: result.result || result.error || `${plan.action} completed.`,
    status: result.status === "executed" ? "completed" : "needs-review",
    metadata: {
      redirectSection: plan.section,
      tool: plan.tool,
      planner: plan.planner,
      confidence: plan.confidence,
      rationale: plan.rationale,
      memoriesUsed: plan.memoriesUsed || [],
      attempts: result.attempts
    }
  };
}

function conversationalSectionGuide(db, text) {
  const lower = String(text || "").toLowerCase();
  const guides = [
    {
      section: "health",
      keys: ["telehealth", "health", "patient", "care", "doctor", "nurse", "hearing", "visual", "blind", "deaf"],
      title: "telehealth",
      first: "I am opening Telehealth. Start with intake, then use accessibility support for captions, audio guidance, caregiver handoff, vitals, referral, and follow-up.",
      command: "start telehealth intake"
    },
    {
      section: "learning",
      keys: ["learning", "training", "course", "lesson", "certificate", "student", "learner"],
      title: "learning",
      first: "I am opening Learning. Start with the course catalog, then begin a course, complete a lesson, take the quiz, and issue the certificate.",
      command: "start training path"
    },
    {
      section: "workforce",
      keys: ["workforce", "job", "role", "worker", "candidate", "apply", "interview", "shift"],
      title: "workforce",
      first: "I am opening Workforce. Start by verifying the profile, then match a role, apply, schedule an interview, assign a mentor, and plan the shift.",
      command: "apply for that job"
    },
    {
      section: "trade",
      keys: ["trade", "buyer", "sell", "crop", "market", "order", "wallet", "payment", "drone", "field", "farm"],
      title: "AgriTrade and drone operations",
      first: "I am opening AgriTrade. Start with the crop lot, contact the buyer, create the order, run drone field intelligence, and advance payment or logistics.",
      command: "contact my buyer"
    },
    {
      section: "map",
      keys: ["map", "route", "country", "location", "geospatial", "risk", "corridor"],
      title: "maps and route intelligence",
      first: "I am opening Map and AI. Start with the active country, inspect route risk, review facilities, and create evidence for field decisions.",
      command: "assess route risk"
    },
    {
      section: "integrations",
      keys: ["integration", "provider", "engine", "api", "live service", "connected", "production"],
      title: "integrations",
      first: "I am opening Integrations. Start with live service checks, then review provider readiness and confirm which engines are connected.",
      command: "test provider engines"
    },
    {
      section: "agent",
      keys: ["agent", "assistant", "jarvis", "voice", "mission", "autopilot", "command"],
      title: "agent command center",
      first: "I am opening Agent AI. Start with a plain-language goal, let the agent build a plan, then confirm before it executes the supervised workflow.",
      command: "run full mission"
    }
  ];
  return guides.find(guide => guide.keys.some(key => lower.includes(key))) || {
    section: "dashboard",
    title: "dashboard",
    first: "I am opening the Dashboard. Start with the simple action cards, then choose training, workforce, telehealth, trade, maps, or agent mission based on what you need.",
    command: "help me choose the next step"
  };
}

function isGuidanceConversation(lower) {
  return [
    "walk me", "guide me", "direct me", "show me around", "where should i", "what should i",
    "how do i", "how can i", "how does", "explain", "teach me", "i am new", "i'm new",
    "im new", "help me understand", "take me through", "what do i do", "what now", "next step"
  ].some(phrase => lower.includes(phrase));
}

function intakeBlueprint(domain) {
  const blueprints = {
    health: {
      module: "Healthcare",
      section: "health",
      completionAction: "create telehealth intake",
      fields: [
        { key: "patientName", question: "Who is the patient or community member we are helping?" },
        { key: "needSummary", question: "What is the main health need or concern?" },
        { key: "preferredLanguage", question: "What language should the care support use?" },
        { key: "accessibilityNeeds", question: "Do they need captions, audio guidance, large print, caregiver handoff, or another support?" },
        { key: "contactMethod", question: "What is the best way to reach them: voice callback, SMS, WhatsApp, or caregiver contact?" }
      ]
    },
    workforce: {
      module: "Workforce",
      section: "workforce",
      completionAction: "prepare workforce profile and role application",
      fields: [
        { key: "candidateName", question: "Who is applying or preparing for work?" },
        { key: "roleInterest", question: "What kind of role or work are they interested in?" },
        { key: "experience", question: "What experience, training, or certificates do they already have?" },
        { key: "availability", question: "When are they available to work or interview?" },
        { key: "supportNeeds", question: "Do they need interview help, transport support, language support, or accessibility support?" }
      ]
    },
    learning: {
      module: "Learning",
      section: "learning",
      completionAction: "start the best learning path",
      fields: [
        { key: "learnerName", question: "Who is the learner?" },
        { key: "goal", question: "What do they want to learn or become ready to do?" },
        { key: "preferredLanguage", question: "What language should the lessons use?" },
        { key: "accessNeeds", question: "Do they need captions, audio guide, large print, screen-reader support, or offline lessons?" },
        { key: "bandwidth", question: "Will they usually have strong internet, low bandwidth, or offline access?" }
      ]
    },
    trade: {
      module: "AgriTrade",
      section: "trade",
      completionAction: "prepare farmer trade and field intelligence workflow",
      fields: [
        { key: "farmerName", question: "Who is the farmer or seller?" },
        { key: "crop", question: "What crop or product are they working with?" },
        { key: "fieldIssue", question: "Is there a field issue, crop stress, pest concern, or quality question?" },
        { key: "buyerGoal", question: "What do they want to do with the buyer: find one, contact one, negotiate, or confirm delivery?" },
        { key: "paymentPreference", question: "What payment or wallet method should we prepare for?" }
      ]
    }
  };
  return blueprints[domain] || null;
}

function intakeDomainFromText(lower) {
  if (/(telehealth|health|patient|care|doctor|nurse|clinic|medical)/.test(lower)) return "health";
  if (/(workforce|job|role|worker|candidate|interview|shift|apply)/.test(lower)) return "workforce";
  if (/(learning|training|course|lesson|certificate|learner|student)/.test(lower)) return "learning";
  if (/(trade|buyer|crop|farmer|sell|market|drone|field|payment|wallet)/.test(lower)) return "trade";
  return null;
}

function isIntakeStart(lower) {
  return /(intake|ask me questions|interview me|fill.*out|help me apply|onboard me|set me up)/.test(lower)
    && Boolean(intakeDomainFromText(lower));
}

function startConversationalIntake(db, text, domain) {
  const blueprint = intakeBlueprint(domain);
  if (!blueprint) return null;
  const session = {
    id: crypto.randomUUID(),
    domain,
    module: blueprint.module,
    section: blueprint.section,
    status: "collecting",
    sourceCommand: text,
    answers: {},
    currentIndex: 0,
    startedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  db.profile.agentMemory.activeIntake = session;
  db.profile.agentMemory.lastStatus = "intake-collecting";
  db.profile.agentMemory.lastSummary = blueprint.fields[0].question;
  db.profile.agentMemory.updatedAt = session.updatedAt;
  return {
    intent: "conversation.intake_started",
    response: `Absolutely. I will guide the ${blueprint.module} intake one question at a time. ${blueprint.fields[0].question}`,
    status: "needs-input",
    metadata: { conversationMode: true, intakeId: session.id, domain, redirectSection: blueprint.section, field: blueprint.fields[0].key }
  };
}

function rememberIntakeAnswers(profile, session) {
  const values = Object.entries(session.answers || {})
    .filter(([, value]) => String(value || "").trim())
    .map(([key, value]) => `${key}: ${value}`);
  if (!values.length) return;
  rememberAgentMemory(profile, `${session.module} intake: ${values.join("; ")}`, {
    source: "conversational-intake",
    category: "preference",
    confidence: 0.9
  });
}

function completeConversationalIntake(db, user, session) {
  const blueprint = intakeBlueprint(session.domain);
  const completed = {
    ...session,
    status: "ready-for-confirmation",
    completedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  db.profile.agentMemory.conversationalIntakes.unshift(completed);
  db.profile.agentMemory.conversationalIntakes = db.profile.agentMemory.conversationalIntakes.slice(0, 20);
  db.profile.agentMemory.activeIntake = null;
  rememberIntakeAnswers(db.profile, completed);
  const pending = {
    kind: "conversational-intake",
    module: blueprint.module,
    action: blueprint.completionAction,
    section: blueprint.section,
    domain: session.domain,
    intakeSessionId: completed.id,
    intakeAnswers: completed.answers,
    command: session.sourceCommand
  };
  db.profile.agentPendingAction = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...pending
  };
  db.profile.agentMemory.lastStatus = "intake-ready-for-confirmation";
  db.profile.agentMemory.lastSummary = `${blueprint.module} intake is ready. Say yes to ${blueprint.completionAction}, or no to cancel.`;
  db.profile.agentMemory.updatedAt = new Date().toISOString();
  logIntegration(db, {
    providerId: "agent-memory",
    module: blueprint.module,
    action: "agent.conversational_intake_completed",
    detail: `${blueprint.module} intake collected ${Object.keys(completed.answers || {}).length} answer(s).`,
    metadata: { intakeSessionId: completed.id, domain: session.domain, userId: user.id }
  });
  return {
    intent: "conversation.intake_ready",
    response: `I have enough to continue. I captured the ${blueprint.module} intake and remembered the key details. Say "yes" to ${blueprint.completionAction}, or "no" to cancel.`,
    status: "needs-confirmation",
    metadata: { conversationMode: true, redirectSection: blueprint.section, domain: session.domain, pendingActionId: db.profile.agentPendingAction.id }
  };
}

function continueConversationalIntake(db, user, text) {
  const session = db.profile.agentMemory.activeIntake;
  if (!session) return null;
  const lower = String(text || "").toLowerCase().trim();
  if (isNegativeCommand(lower) || lower.includes("cancel intake") || lower.includes("stop intake")) {
    db.profile.agentMemory.activeIntake = null;
    db.profile.agentMemory.lastStatus = "intake-canceled";
    db.profile.agentMemory.lastSummary = "Conversational intake canceled.";
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    return { intent: "conversation.intake_canceled", response: "Canceled the intake. Tell me what you want to do next.", status: "canceled", metadata: { conversationMode: true } };
  }
  const blueprint = intakeBlueprint(session.domain);
  const field = blueprint.fields[session.currentIndex];
  if (!field) return completeConversationalIntake(db, user, session);
  session.answers[field.key] = String(text || "").trim();
  session.currentIndex += 1;
  session.updatedAt = new Date().toISOString();
  db.profile.agentMemory.updatedAt = session.updatedAt;
  const next = blueprint.fields[session.currentIndex];
  if (next) {
    db.profile.agentMemory.lastStatus = "intake-collecting";
    db.profile.agentMemory.lastSummary = next.question;
    return {
      intent: "conversation.intake_question",
      response: `Got it. ${next.question}`,
      status: "needs-input",
      metadata: { conversationMode: true, intakeId: session.id, domain: session.domain, redirectSection: blueprint.section, field: next.key, answeredField: field.key }
    };
  }
  return completeConversationalIntake(db, user, session);
}

async function applyConversationalIntake(db, user, pending) {
  const answers = pending.intakeAnswers || {};
  const { country, route } = activeContext(db);
  if (pending.domain === "health") {
    ensureHealthProfile(db.profile);
    const intake = {
      id: crypto.randomUUID(),
      patientRef: `AN-PAT-${country.id.toUpperCase()}-${String(db.profile.healthIntakes.length + 1).padStart(3, "0")}`,
      patientName: answers.patientName || "Voice-supported patient",
      countryId: country.id,
      needSummary: answers.needSummary || `${country.name} telehealth intake`,
      riskLevel: country.risk === "High" || country.heat >= 38 ? "High" : "Routine",
      queueStatus: "Conversational intake opened",
      representativeStatus: "Accessibility review ready",
      preferredLanguage: answers.preferredLanguage || user.language || "en",
      accessibilityNeeds: answers.accessibilityNeeds || "Voice-first support",
      contactMethod: answers.contactMethod || "Voice callback",
      caregiverName: /caregiver|aide/i.test(answers.accessibilityNeeds || "") ? "Community accessibility aide" : "",
      assistiveSupports: String(answers.accessibilityNeeds || "voice support").split(",").map(item => item.trim()).filter(Boolean),
      routeContext: { routeId: route.id, routeName: route.name, checkpoint: db.profile.activeCheckpoint },
      createdAt: new Date().toISOString()
    };
    db.profile.healthIntakes.unshift(intake);
    logIntegration(db, { providerId: "health-telehealth", module: "Healthcare", action: "agent.conversational_intake_created", detail: `${intake.patientRef} created from conversational intake.`, metadata: { intakeId: intake.id, answers } });
    addActivity(db.profile, `${intake.patientRef} created from conversational intake.`);
    return { intent: "health.conversational_intake", response: `Done. I created telehealth intake ${intake.patientRef} for ${intake.patientName}. Next step: say "create care plan" or "connect provider."`, status: "completed", metadata: { redirectSection: "health", intakeId: intake.id } };
  }
  if (pending.domain === "workforce") {
    rememberAgentMemory(db.profile, `Workforce candidate ${answers.candidateName || "user"} wants ${answers.roleInterest || "a matched role"}; availability ${answers.availability || "not specified"}; support ${answers.supportNeeds || "standard"}.`, { source: "workforce-intake", category: "preference", confidence: 0.92 });
    const result = submitBestWorkforceApplication(db, user, answers.roleInterest || "apply for job");
    return { intent: result.status === "completed" ? "workforce.conversational_application" : "workforce.conversational_gap_review", response: `Done. ${result.response}`, status: result.status, metadata: { redirectSection: "workforce", roleId: result.role?.id || null, applicationId: result.application?.id || null } };
  }
  if (pending.domain === "learning") {
    rememberAgentMemory(db.profile, `Learner ${answers.learnerName || "user"} goal: ${answers.goal || "training"}; language: ${answers.preferredLanguage || user.language || "en"}; access needs: ${answers.accessNeeds || "standard"}; bandwidth: ${answers.bandwidth || "unknown"}.`, { source: "learning-intake", category: "preference", confidence: 0.92 });
    const result = await executeAgentTool(db, user, { tool: "learning.start_or_continue" });
    if (/caption|audio|large|screen|offline|low/i.test(`${answers.accessNeeds || ""} ${answers.bandwidth || ""}`)) prepareLearningAccess(db, user, /offline|low/i.test(answers.bandwidth || "") ? "low-bandwidth" : /audio|screen|visual|large/i.test(answers.accessNeeds || "") ? "visual" : "caption");
    return { intent: "learning.conversational_path_started", response: `Done. ${result} I also remembered the learner goal so I can guide the next lesson and certificate step.`, status: "completed", metadata: { redirectSection: "learning" } };
  }
  if (pending.domain === "trade") {
    rememberAgentMemory(db.profile, `Farmer ${answers.farmerName || "user"} is working with ${answers.crop || "crop"}; field issue: ${answers.fieldIssue || "none"}; buyer goal: ${answers.buyerGoal || "market support"}; payment: ${answers.paymentPreference || "not specified"}.`, { source: "trade-intake", category: "preference", confidence: 0.92 });
    const wantsBuyer = /buyer|contact|negotiate|delivery/i.test(answers.buyerGoal || "");
    const contact = wantsBuyer ? createBuyerContactWorkflow(db, user, `contact buyer for ${answers.crop || "crop"}`) : null;
    const scan = /stress|pest|disease|field|quality|soil|irrigation/i.test(answers.fieldIssue || "") ? await executeAgentTool(db, user, { tool: "drone.field_scan" }) : null;
    return { intent: "trade.conversational_intake", response: `Done. I remembered the farmer trade details.${contact ? ` Buyer contact is ready for ${contact.buyerName}.` : ""}${scan ? ` ${scan}` : ""} Next step: say "create order" or "run drone mission."`, status: "completed", metadata: { redirectSection: "trade", contactId: contact?.id || null } };
  }
  return { intent: "conversation.intake_applied", response: "Done. I saved the intake and prepared the next workflow.", status: "completed", metadata: { redirectSection: pending.section || "dashboard" } };
}

async function buildConversationalGuideResponse(db, user, text) {
  const guide = conversationalSectionGuide(db, text);
  const { country, route } = activeContext(db);
  const memories = retrieveAgentMemories(db.profile, text, 4);
  const base = {
    intent: "conversation.platform_guide",
    response: `${guide.first} When you are ready, say "${guide.command}" and I will prepare the next workflow for confirmation.`,
    status: "guiding",
    metadata: {
      conversationMode: true,
      redirectSection: guide.section,
      suggestedCommand: guide.command,
      guideTopic: guide.title,
      country: country.name,
      route: route.name,
      memoriesUsed: memories.map(item => ({ id: item.id, category: item.category, text: item.text || item.response || item.command, confidence: item.confidence }))
    }
  };
  if (!process.env.OPENAI_API_KEY) return base;
  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.OPENAI_AGENT_MODEL || process.env.OPENAI_MODEL || "gpt-4o-mini",
        input: [
          {
            role: "system",
            content: [
              "You are AgriNexus, a warm voice-first platform guide for non-technical users.",
              "Answer in plain language. Be concise, practical, and reassuring.",
              "Guide the user through the platform, but do not claim you completed real-world external actions.",
              "Return JSON only with response, redirectSection, suggestedCommand, confidence.",
              "redirectSection must be one of dashboard, learning, workforce, health, trade, map, agent, integrations, admin, profile."
            ].join(" ")
          },
          {
            role: "user",
            content: JSON.stringify({
              userQuestion: text,
              recommendedGuide: guide,
              context: {
                userRole: user.role,
                language: user.language || db.profile.accessibilityProfile?.language || "en",
                country: country.name,
                route: route.name,
                activeCheckpoint: db.profile.activeCheckpoint,
                readiness: db.profile.readiness,
                recentMemory: memories.map(item => item.text || item.response || item.command)
              }
            })
          }
        ],
        max_output_tokens: 360
      })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(payload.error?.message || `OpenAI guide failed: ${response.status}`);
    const parsed = extractJsonObject(extractResponseText(payload));
    const allowedSections = new Set(["dashboard", "learning", "workforce", "health", "trade", "map", "agent", "integrations", "admin", "profile"]);
    const redirectSection = allowedSections.has(parsed?.redirectSection) ? parsed.redirectSection : guide.section;
    const result = {
      ...base,
      response: String(parsed?.response || base.response),
      metadata: {
        ...base.metadata,
        redirectSection,
        suggestedCommand: String(parsed?.suggestedCommand || guide.command),
        confidence: Number(parsed?.confidence || 0.76),
        planner: "openai-conversation-guide"
      }
    };
    logIntegration(db, {
      providerId: "openai",
      module: "AI",
      action: "agent.conversation_guided",
      detail: `Conversation guide routed user to ${redirectSection}.`,
      metadata: { command: text, redirectSection, suggestedCommand: result.metadata.suggestedCommand }
    });
    return result;
  } catch (error) {
    logIntegration(db, {
      providerId: "openai",
      module: "AI",
      action: "agent.conversation_guide_fallback",
      detail: error.message || "OpenAI conversation guide unavailable.",
      metadata: { command: text, redirectSection: guide.section }
    });
    return base;
  }
}

function extractConversationalName(text) {
  const value = String(text || "").trim();
  const patterns = [
    /\bmy name is\s+([a-z][a-z\s'-]{1,40})/i,
    /\bi am\s+([a-z][a-z\s'-]{1,40})/i,
    /\bi'm\s+([a-z][a-z\s'-]{1,40})/i,
    /\bcall me\s+([a-z][a-z\s'-]{1,40})/i
  ];
  for (const pattern of patterns) {
    const match = value.match(pattern);
    if (match?.[1]) {
      return match[1]
        .replace(/[,.!?].*$/, "")
        .trim()
        .split(/\s+/)
        .slice(0, 3)
        .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join(" ");
    }
  }
  return "";
}

function languageFromCommand(text) {
  const lower = String(text || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const languages = {
    english: "en",
    anglais: "en",
    ingles: "en",
    ingereza: "en",
    kiingereza: "en",
    "nigeria": "en",
    "nigerian": "en",
    "united states": "en",
    "america": "en",
    french: "fr",
    francais: "fr",
    francais: "fr",
    frances: "fr",
    kifaransa: "fr",
    "francais": "fr",
    "drc": "fr",
    "congo": "fr",
    "democratic republic": "fr",
    swahili: "sw",
    kiswahili: "sw",
    suajili: "sw",
    "kenya": "sw",
    "kenyan": "sw",
    arabic: "ar",
    arabe: "ar",
    kiarabu: "ar",
    "egypt": "ar",
    "egyptian": "ar",
    spanish: "es",
    espanol: "es",
    espanhol: "es",
    kihispania: "es",
    "espanol": "es"
  };
  const targetMatch = lower.match(/\b(?:to|into|in|a|as|use|speak|talk|respond|reply|parle|parler|habla|hablar|usa|utilise|utilizar|badilisha|tumia|zungumza|ongea)\s+(english|anglais|ingles|ingereza|kiingereza|french|francais|frances|kifaransa|swahili|kiswahili|suajili|arabic|arabe|kiarabu|spanish|espanol|espanhol|kihispania|nigeria|nigerian|kenya|kenyan|egypt|egyptian|drc|congo)\b/);
  if (targetMatch?.[1]) return languages[targetMatch[1]] || "";
  for (const [name, code] of Object.entries(languages)) {
    if (lower.includes(name)) return code;
  }
  return "";
}

function isLanguageCommand(lower) {
  const normalized = String(lower || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return /(change|switch|set|translate|language|speak|talk|respond|reply|use|parle|parler|habla|hablar|usa|utilise|utilizar|badilisha|tumia|zungumza|ongea).*(english|anglais|ingles|kiingereza|french|francais|frances|kifaransa|swahili|kiswahili|arabic|arabe|kiarabu|spanish|espanol|kihispania|nigeria|nigerian|kenya|kenyan|egypt|egyptian|drc|congo)/.test(normalized)
    || /(english|anglais|ingles|kiingereza|french|francais|frances|kifaransa|swahili|kiswahili|arabic|arabe|kiarabu|spanish|espanol|kihispania|nigeria|kenya|egypt|drc|congo).*(language|voice|translation|phrases|responses|langue|idioma|lugha)/.test(normalized);
}

function changeUserLanguage(db, user, language) {
  const allowed = new Set(["en", "fr", "sw", "ar", "es"]);
  if (!allowed.has(language)) return false;
  const current = db.users.find(item => item.id === user.id);
  if (current) current.language = language;
  user.language = language;
  db.profile.accessibilityProfile = {
    ...(db.profile.accessibilityProfile || {}),
    language
  };
  return true;
}

function regionFromHealthCommand(db, lower) {
  if (/\b(drc|congo|democratic republic|kinshasa|ituri)\b/.test(lower)) return db.countries.find(item => item.id === "drc") || { id: "drc", name: "DRC" };
  if (/\buganda\b/.test(lower)) return { id: "uganda", name: "Uganda" };
  if (/\bnigeria\b/.test(lower)) return db.countries.find(item => item.id === "nigeria") || { id: "nigeria", name: "Nigeria" };
  if (/\bkenya\b/.test(lower)) return db.countries.find(item => item.id === "kenya") || { id: "kenya", name: "Kenya" };
  if (/\begypt\b/.test(lower)) return db.countries.find(item => item.id === "egypt") || { id: "egypt", name: "Egypt" };
  return activeContext(db).country;
}

async function publicHealthRiskBriefing(db, user, text, lower) {
  ensureHealthProfile(db.profile);
  const region = regionFromHealthCommand(db, lower);
  const sources = [
    { name: "WHO Disease Outbreak News", url: "https://www.who.int/emergencies/disease-outbreak-news" },
    { name: "CDC Ebola outbreaks", url: "https://www.cdc.gov/ebola/outbreaks/" }
  ];
  const feedUrl = process.env.PUBLIC_HEALTH_FEED_URL || process.env.HEALTH_RISK_FEED_URL || "";
  let feedStatus = feedUrl ? "configured" : "official-source-manual-check";
  let feedSummary = "";
  if (feedUrl) {
    try {
      const response = await fetchWithTimeout(feedUrl, { headers: { accept: "application/json,text/plain,*/*" } }, 6000);
      feedStatus = response.ok ? "live-feed-reachable" : `live-feed-${response.status}`;
      feedSummary = response.ok ? String(await response.text()).slice(0, 500) : "";
    } catch (error) {
      feedStatus = `live-feed-error: ${error.message}`;
    }
  }
  const ebolaMentioned = /\bebola\b/.test(lower);
  const riskLevel = (/\b(drc|congo|uganda|ituri|ebola)\b/.test(lower) || ebolaMentioned) ? "high-public-health-caution" : "verify-before-deployment";
  const check = {
    id: crypto.randomUUID(),
    regionId: region.id,
    regionName: region.name,
    query: text,
    riskLevel,
    sourceMode: feedStatus,
    sourceUrls: sources.map(source => source.url),
    createdBy: user.email,
    createdAt: new Date().toISOString()
  };
  db.profile.publicHealthChecks.unshift(check);
  db.profile.publicHealthChecks = db.profile.publicHealthChecks.slice(0, 20);
  db.profile.agentMemory.activeModule = "Telehealth";
  db.profile.agentMemory.lastStatus = "public-health-risk-checked";
  db.profile.agentMemory.lastSummary = `${region.name} public health risk checked before telehealth deployment.`;
  db.profile.agentMemory.updatedAt = check.createdAt;
  rememberAgentMemory(db.profile, `Before deploying in ${region.name}, verify outbreak status with official public-health sources and local authorities.`, { source: "public-health-risk", category: "safety", confidence: 0.9 });
  logIntegration(db, {
    providerId: "health-notifications",
    module: "Health",
    action: "health.public_health_risk_checked",
    detail: `${region.name} public health deployment risk reviewed from voice command.`,
    metadata: { checkId: check.id, riskLevel, feedStatus, sourceUrls: check.sourceUrls },
    dispatch: false
  });
  addActivity(db.profile, `Public health risk check: ${region.name} - ${riskLevel}.`);
  const sourceLine = sources.map(source => source.name).join(" and ");
  return {
    intent: "health.public_health_risk",
    response: `I would not mark ${region.name} clear without a live official health check. For an Ebola or outbreak concern, treat this as high-caution: verify WHO, CDC, and local Ministry of Health updates, screen travel and exposure, prepare PPE and isolation protocol, and get clinical approval before outreach. I recorded this public-health risk check and can open telehealth intake, referral, or safety review next.`,
    status: "completed",
    metadata: {
      conversationMode: true,
      redirectSection: "health",
      module: "Telehealth",
      regionId: region.id,
      regionName: region.name,
      riskLevel,
      feedStatus,
      feedSummary,
      sourceLine,
      sourceUrls: check.sourceUrls
    }
  };
}

function liveRouteTrackingResponse(db, user, text) {
  ensureAiProfile(db.profile);
  const { route } = activeContext(db);
  logIntegration(db, {
    providerId: "maps",
    module: "Map",
    action: "map.live_route_tracking_requested",
    detail: `Live route tracking requested for ${route.name}.`,
    metadata: { routeId: route.id, command: text },
    dispatch: false
  });
  addActivity(db.profile, `Live route tracking requested for ${route.name}.`);
  return {
    intent: "map.live_route_tracking",
    response: "I can track your route in real time from the web app when the browser has location permission. I will open the map, ask for GPS access, draw the route trail, and keep route-risk tools available while you move.",
    status: "completed",
    metadata: { conversationMode: true, redirectSection: "map", requiresBrowserGeolocation: true, routeId: route.id }
  };
}

async function moduleGreetingResponse(db, user, text, lower) {
  const isGreeting = /^(hi|hello|hey|good morning|good afternoon|good evening)\b/.test(lower);
  const isTradeAddressed = /\b(agritrade|agri\s*trade)\b/.test(lower);
  if (!isTradeAddressed) return null;
  if (isLanguageCommand(lower)) {
    const language = languageFromCommand(text);
    if (!language || !changeUserLanguage(db, user, language)) {
      return {
        intent: "conversation.language_change",
        response: "I can change language to English, French, Kiswahili, Arabic, or Spanish. Tell me which one you want.",
        status: "needs-input",
        metadata: { conversationMode: true, redirectSection: "trade", module: "AgriTrade" }
      };
    }
    const label = voiceLanguageLabel(language);
    db.profile.agentMemory.activeModule = "AgriTrade";
    db.profile.agentMemory.lastStatus = "language-changed";
    db.profile.agentMemory.lastSummary = `AgriTrade language changed to ${label}.`;
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    rememberAgentMemory(db.profile, `User wants AgriTrade phrases and responses in ${label}.`, { source: "language-command", category: "preference", confidence: 0.94 });
    addActivity(db.profile, `Voice command changed platform language to ${label}.`);
    return {
      intent: "conversation.language_changed",
      response: `Language changed to ${label}. AgriTrade phrases and responses will use ${label}.`,
      status: "completed",
      metadata: { conversationMode: true, redirectSection: "trade", module: "AgriTrade", language }
    };
  }
  if (/(tell me about|what do you do|explain|describe|about the platform|about agritrade|how do you help)/.test(lower)) {
    db.profile.agentMemory.activeModule = "AgriTrade";
    db.profile.agentMemory.lastStatus = "agritrade-introduction";
    db.profile.agentMemory.lastSummary = "AgriTrade explained its crop, buyer, order, wallet, logistics, drone, and market support workflows.";
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    rememberAgentMemory(db.profile, "User asked AgriTrade to explain the platform and what it does.", { source: "module-introduction", category: "preference", confidence: 0.86 });
    return {
      intent: "trade.module_introduction",
      response: "AgriTrade helps farmers and trade teams move from crop to buyer to payment. I can help you review crops, contact a buyer, create an order, check wallet payments, plan logistics, prepare export or quality records, and use drone field intelligence before selling. Tell me your crop, your buyer goal, or the field problem, and I will guide one step at a time.",
      status: "completed",
      metadata: { conversationMode: true, redirectSection: "trade", module: "AgriTrade" }
    };
  }
  if (/(efficiency|efficient|optimize|optimise|operations|operational|bottleneck|delay|cost|waste|profit|improve|performance)/.test(lower)) {
    return tradeOperationalEfficiencyReview(db, user, text);
  }
  if (/(communicat|message|update|brief|status|report|say to|tell the|notify|script|announcement|handoff)/.test(lower) && /(buyer|driver|logistics|route|farmer|field|team|partner|investor|operations|quality|payment|cold chain|order|crop)/.test(lower)) {
    return tradeOperationalCommunicationBrief(db, user, text);
  }
  if (!isGreeting) return null;
  const extractedName = extractConversationalName(text);
  const hasActionRequest = /\b(want|need|speak|talk|contact|buyer|sell|crop|order|wallet|payment|drone|logistics|run|open|create|apply|help|track|route|gps|location)\b/.test(lower);
  if (hasActionRequest && !/\b(my name is|call me)\b/.test(lower)) return null;
  const name = extractedName || db.profile.agentMemory.userName || user.name?.split(/\s+/)[0] || "there";
  db.profile.agentMemory.userName = name;
  db.profile.agentMemory.activeModule = "AgriTrade";
  db.profile.agentMemory.lastStatus = "agritrade-greeting";
  db.profile.agentMemory.lastSummary = `AgriTrade greeted ${name} and is ready for buyer, crop, order, wallet, drone, and logistics help.`;
  db.profile.agentMemory.updatedAt = new Date().toISOString();
  rememberAgentMemory(db.profile, `User name is ${name}.`, { source: "voice-greeting", category: "fact", confidence: 0.96 });
  rememberAgentMemory(db.profile, `${name} greeted AgriTrade and may need trade, buyer, crop, drone, wallet, or logistics support.`, { source: "module-greeting", category: "preference", confidence: 0.88 });
  return {
    intent: "trade.conversational_greeting",
    response: `Hello ${name}. I am AgriTrade. I can help you sell crops, contact buyers, create an order, check wallet payments, plan logistics, or run a drone field scan. Tell me what you want to do next.`,
    status: "completed",
    metadata: { conversationMode: true, redirectSection: "trade", module: "AgriTrade", userName: name }
  };
}

async function runAgentCommand(db, user, command, options = {}) {
  ensureAiProfile(db.profile);
  let text = String(command || "")
    .replace(/^\s*(hey\s+)?(nexus|jarvis|agrinexus|coach)\s*[,:\-]?\s*/i, "")
    .trim();
  let lower = text.toLowerCase();
  const localizedWorkflow = localizedWorkflowPhrase(lower);
  if (localizedWorkflow) {
    text = localizedWorkflow;
    lower = text.toLowerCase();
  }
  const directFollowUp = /^(continue|next step|do the next|run the next|start the next|do that|let's do that|lets do that|proceed|take me there|open that|show me|go there|where are we|what step|orient me|explain that|repeat that)\b/.test(lower);
  const contextual = directFollowUp ? null : contextualVoiceCommand(db, text, lower);
  if (contextual) {
    text = contextual;
    lower = text.toLowerCase();
  }
  if (!text) return { intent: "empty-command", response: "Give me a command and I will route it.", status: "needs-input" };
  const wantsExecute = options.confirm === true || lower.includes("execute") || lower.includes("run it") || lower.includes("do it");
  const conversational = options.conversational === true;
  const pendingAction = db.profile.agentPendingAction;

  const moduleGreeting = await moduleGreetingResponse(db, user, text, lower);
  if (moduleGreeting) return moduleGreeting;

  const moduleHelp = moduleVoiceHelpResponse(db, text, lower);
  if (moduleHelp) return moduleHelp;

  if (/(track|follow|watch).*(my\s+)?route/.test(lower) && /(real time|realtime|live|gps|location)/.test(lower)) {
    return liveRouteTrackingResponse(db, user, text);
  }

  if (/(outbreak|infected|infection|ebola|disease risk|region safe|safe to deploy|safe for telehealth)/.test(lower) && /(telehealth|health|region|congo|drc|uganda|africa|outreach)/.test(lower)) {
    return publicHealthRiskBriefing(db, user, text, lower);
  }

  if (/(trade|agritrade|crop|buyer|route|order|logistics|drone|farm)/.test(lower) && /(efficiency|efficient|optimize|optimise|operations|operational|bottleneck|delay|cost|waste|profit|improve|performance)/.test(lower)) {
    return tradeOperationalEfficiencyReview(db, user, text);
  }

  if (/(trade|agritrade|crop|buyer|route|order|logistics|driver|farmer|field|quality|payment|cold chain)/.test(lower) && /(communicat|message|update|brief|status|report|say to|tell the|notify|script|announcement|handoff)/.test(lower)) {
    return tradeOperationalCommunicationBrief(db, user, text);
  }

  if (conversational && db.profile.agentMemory.activeIntake) {
    const activeDomain = db.profile.agentMemory.activeIntake.domain;
    const requestedDomain = intakeDomainFromText(lower);
    const startsDifferentFlow = requestedDomain && requestedDomain !== activeDomain && /(start|apply|help|intake|job|workforce|training|trade|buyer|crop|telehealth|health)/.test(lower);
    if (startsDifferentFlow) {
      db.profile.agentMemory.activeIntake = null;
      db.profile.agentMemory.lastStatus = "intake-switched";
      db.profile.agentMemory.lastSummary = `Previous ${activeDomain} intake paused because the user started ${requestedDomain}.`;
      db.profile.agentMemory.updatedAt = new Date().toISOString();
    } else {
      return continueConversationalIntake(db, user, text);
    }
  }

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

  if (conversational && db.profile.agentMemory.activeClarification) {
    const clarified = continueClarification(db, user, text);
    if (clarified) return clarified;
  }

  if (conversational && db.profile.agentMemory.activeRecovery) {
    const recovered = continueVoiceRecovery(db, user, text);
    if (recovered) return recovered;
  }

  if (conversational) {
    const social = socialConversationResponse(db, user, text, lower);
    if (social) return social;
  }

  if (conversational) {
    const followUp = conversationFollowUpResponse(db, user, text, lower);
    if (followUp) return followUp;
  }

  if (conversational && isVagueHelpRequest(lower)) {
    return startClarification(db, user, text, conversationModuleSignal(text));
  }

  if (conversational && isIntakeStart(lower)) {
    const started = startConversationalIntake(db, text, intakeDomainFromText(lower));
    if (started) return started;
  }

  if (lower.includes("all 10") || lower.includes("all ten") || lower.includes("10 items") || lower.includes("ten items") || lower.includes("full intelligent model") || lower.includes("full intelligence model")) {
    const model = intelligentAssistantModel(db, user);
    db.profile.agentMemory.lastStatus = model.status;
    db.profile.agentMemory.lastSummary = `The intelligent assistant model has ${model.readyCount}/${model.total} items active.`;
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    logIntegration(db, {
      providerId: "openai",
      module: "AI",
      action: "agent.ten_item_model_reviewed",
      detail: `Ten-item intelligent assistant model reviewed: ${model.readyCount}/${model.total}.`,
      metadata: { status: model.status, items: model.items.map(item => ({ id: item.id, ready: item.ready })) },
      dispatch: false
    });
    return {
      intent: "intelligent-assistant.ten_item_model",
      response: `The full intelligent model is active at ${model.readyCount} out of ${model.total}. It covers onboarding, memory, next-step coaching, conversational intake, multilingual voice, role-aware guidance, autopilot missions, live services, accessibility-first support, and investor presentation mode. Say "help me" for the best next step or say one of the listed commands to test a specific item.`,
      status: model.status,
      metadata: { conversationMode: conversational, redirectSection: "agent", model }
    };
  }

  if (lower.includes("behavior model") || lower.includes("not robotic") || lower.includes("human guide") || lower.includes("how do you behave")) {
    const behavior = assistantBehaviorModel(db, user);
    db.profile.agentMemory.lastStatus = "behavior-model-active";
    db.profile.agentMemory.lastSummary = `${behavior.name}: ${behavior.tone}`;
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    return {
      intent: "conversation.behavior_model",
      response: `I use the ${behavior.name} for ${behavior.audience}. That means I listen first, restate what I understood, guide one step at a time, avoid technical language, ask before important actions, and keep the experience voice-first and human.`,
      status: "completed",
      metadata: { conversationMode: conversational, redirectSection: "agent", behaviorModel: behavior }
    };
  }

  if (lower.includes("summarize my progress") || lower.includes("progress summary") || lower.includes("where am i") || lower.includes("how am i doing")) {
    const summary = platformProgressSummary(db, user);
    db.profile.agentMemory.lastStatus = "progress-summary";
    db.profile.agentMemory.lastSummary = summary;
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    return {
      intent: "conversation.progress_summary",
      response: `Here is your progress: ${summary}.`,
      status: "completed",
      metadata: { conversationMode: conversational, redirectSection: "dashboard", summary }
    };
  }

  if (lower.includes("what happened") || lower.includes("what just happened") || lower.includes("what did you do") || lower.includes("what evidence") || lower.includes("explain the last workflow")) {
    const outcome = workflowOutcomeSummary(db);
    db.profile.agentMemory.lastStatus = "workflow-outcome-summary";
    db.profile.agentMemory.lastSummary = outcome.text;
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    return {
      intent: "conversation.workflow_outcome_summary",
      response: outcome.text,
      status: outcome.evidence.length ? "completed" : "needs-workflow",
      metadata: { conversationMode: conversational, redirectSection: outcome.next?.section || "dashboard", outcome }
    };
  }

  if (lower.includes("good morning agrinexus") || lower.includes("good morning nexus") || lower.includes("daily briefing") || lower.includes("operator briefing") || lower.includes("morning briefing")) {
    const briefing = dailyOperatorBriefing(db, user);
    db.profile.agentMemory.lastStatus = "daily-operator-briefing";
    db.profile.agentMemory.lastSummary = briefing.text;
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    logIntegration(db, {
      providerId: "openai",
      module: "AI",
      action: "agent.daily_operator_briefing",
      detail: "Daily operator briefing generated from current platform state.",
      metadata: { nextActions: briefing.nextActions.map(item => item.id || item.title), priorities: briefing.priorities },
      dispatch: false
    });
    return {
      intent: "conversation.daily_operator_briefing",
      response: briefing.text,
      status: "completed",
      metadata: { conversationMode: conversational, redirectSection: "dashboard", briefing }
    };
  }

  if (lower.includes("investor tour") || lower.includes("demo narrator") || lower.includes("present the platform") || lower.includes("walk investors") || lower.includes("presentation mode")) {
    const briefing = agentBriefing(db, user, "investor presentation mode");
    db.profile.agentMemory.lastStatus = "investor-presentation-ready";
    db.profile.agentMemory.lastSummary = briefing.plainLanguageSummary;
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    return {
      intent: "conversation.investor_presentation_mode",
      response: `Investor presentation mode is ready. Start on the Dashboard, then move through Learning, Workforce, Telehealth, AgriTrade, Map and AI, Agent AI, and Integrations. Opening statement: ${briefing.plainLanguageSummary}`,
      status: "completed",
      metadata: { conversationMode: conversational, redirectSection: "dashboard", briefingId: briefing.id }
    };
  }

  if (conversational && (lower === "help" || lower.includes("what can you do") || lower.includes("i need help") || lower.includes("help me"))) {
    const next = smartNextActions(db, user).items[0];
    db.profile.agentPendingAction = null;
    db.profile.agentMemory.lastStatus = "guiding-user";
    db.profile.agentMemory.lastSummary = next
      ? `Recommended next step: ${next.title} in ${next.module}.`
      : "I can guide Health, Jobs, Training, Farming and Trade, Drones, Maps, Provider Checks, or a Full Mission.";
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    return {
      intent: "conversation.guided_menu",
      response: next
        ? `Based on your current record, I recommend: ${next.title}. ${next.detail} You can say "${next.title}" or say "start ${String(next.module || "that").toLowerCase()} intake" and I will guide you one question at a time.`
        : "I can help with Health, Jobs, Training, Farming and Trade, Drones, Maps, Provider Checks, or a Full Mission. Tell me the area, for example: health, jobs, training, buyer, drone, map, or run full mission.",
      status: "needs-input",
      metadata: { conversationMode: true, redirectSection: next?.section || "dashboard", recommendedAction: next || null }
    };
  }

  if (conversational && isGuidanceConversation(lower)) {
    const guide = await buildConversationalGuideResponse(db, user, text);
    db.profile.agentPendingAction = null;
    db.profile.agentMemory.lastStatus = "guiding-user";
    db.profile.agentMemory.lastSummary = guide.response;
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    return guide;
  }

  if (conversational && isOpenEndedConversation(lower)) {
    return conversationalReasoningResponse(db, user, text, options);
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
      map: { module: "Maps", tool: "map.route_risk", action: "Assess route", section: "map" },
      maps: { module: "Maps", tool: "map.route_risk", action: "Assess route", section: "map" },
      provider: { module: "Integrations", tool: "integrations.test_all", action: "Test provider engines", section: "integrations" },
      providers: { module: "Integrations", tool: "integrations.test_all", action: "Test provider engines", section: "integrations" },
      engines: { module: "Integrations", tool: "integrations.test_all", action: "Test provider engines", section: "integrations" }
    }[lower];
    if (guidedShortcut) return stageAgentAction(db, text, guidedShortcut);
  }

  if (lower.includes("autopilot") || lower.includes("auto pilot") || lower.includes("take over") || lower.includes("run the mission")) {
    const goal = text.replace(/^(run|start|create|use|activate)?\s*(agent\s+)?(auto\s*pilot|autopilot)\s*(mode)?\s*(for|to)?/i, "").trim() || text || "Run an AgriNexus autopilot mission.";
    if (!wantsExecute) {
      const preview = buildAutopilotPlan(db, goal, user);
      db.profile.agentMemory.lastStatus = "autopilot-awaiting-confirmation";
      db.profile.agentMemory.lastSummary = `Autopilot can run ${preview.steps.length} supervised step(s). Say yes to execute, or no to cancel.`;
      db.profile.agentMemory.updatedAt = new Date().toISOString();
      return stageAgentAction(db, text, {
        kind: "autopilot-mission",
        module: "AI",
        action: `Run autopilot mission with ${preview.steps.length} steps`,
        section: "agent",
        goal,
        previewSteps: preview.steps.map(step => ({ module: step.module, tool: step.tool, action: step.action }))
      });
    }
    const { plan, execution } = await createAndExecuteAutopilotMission(db, user, goal, options.note || "Approved from autopilot command");
    return {
      intent: "agent.autopilot_executed",
      response: `Autopilot complete. ${execution.summary}`,
      status: execution.status,
      metadata: { redirectSection: "agent", planId: plan.id, executionId: execution.id, steps: execution.steps.length, mode: "autopilot" }
    };
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

  if (/(help|guide|support|move|take).*(farmer|patient|learner|worker|community|seller).*(sell|care|job|training|payment|buyer|safe|safely|end to end|start to finish)/.test(lower)) {
    const preview = buildAutopilotPlan(db, text, user);
    return stageAgentAction(db, text, {
      kind: "autopilot-mission",
      module: "AI",
      action: `Run multistep voice mission with ${preview.steps.length} steps`,
      section: "agent",
      goal: text,
      previewSteps: preview.steps.map(step => ({ module: step.module, tool: step.tool, action: step.action }))
    });
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
    const remembered = text.replace(/^remember\s+/i, "").replace(/remember that/i, "").trim();
    if (remembered) rememberAgentMemory(db.profile, remembered, { source: "explicit-remember", category: inferMemoryCategory(remembered), confidence: 0.95 });
    db.profile.agentMemory.activeMission = remembered || db.profile.agentMemory.activeMission || "rural transformation";
    db.profile.agentMemory.activeAudience = lower.includes("government") ? "government" : db.profile.agentMemory.activeAudience || "government";
    db.profile.agentMemory.updatedAt = new Date().toISOString();
    return {
      intent: "memory-updated",
      response: `I will remember this: ${db.profile.agentMemory.activeMission}.`,
      metadata: { memory: db.profile.agentMemory }
    };
  }

  if (lower.includes("what do you remember") || lower.includes("show memory") || lower.includes("what have you learned")) {
    const memories = [
      ...(db.profile.agentMemory.preferences || []).slice(0, 3),
      ...(db.profile.agentMemory.learnedPatterns || []).slice(0, 3),
      ...(db.profile.agentMemory.longTermFacts || []).slice(0, 3)
    ];
    return {
      intent: "memory-summary",
      response: memories.length
        ? `I remember ${memories.length} useful item(s): ${memories.map(item => item.text).join(" | ")}`
        : "I do not have long-term memories yet. Say remember, then tell me an important fact or preference.",
      metadata: { memories }
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

  const isPlanRequest = (lower.includes("create") && lower.includes("plan")) || lower.startsWith("plan ") || lower.includes("onboard") || lower.includes("rural pilot");
  if (!isPlanRequest) {
    const agenticRoute = await routeAgenticCommand(db, user, text, { confirm: wantsExecute });
    if (agenticRoute) return agenticRoute;
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

  if (isPlanRequest || lower.includes("farmer")) {
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

  if (lower.includes("voice demo") || lower.includes("investor voice demo") || lower.includes("show investors") || lower.includes("demo mode")) {
    return voiceInvestorDemo(db, user);
  }

  if (/(help|guide|support|move|take).*(farmer|patient|learner|worker|community|seller).*(sell|care|job|training|payment|buyer|safe|safely|end to end|start to finish)/.test(lower)) {
    const preview = buildAutopilotPlan(db, text, user);
    return stageAgentAction(db, text, {
      kind: "autopilot-mission",
      module: "AI",
      action: `Run multistep voice mission with ${preview.steps.length} steps`,
      section: "agent",
      goal: text,
      previewSteps: preview.steps.map(step => ({ module: step.module, tool: step.tool, action: step.action }))
    });
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
  if (String(command || "").trim().split(/\s+/).length <= 5 && conversational) return voiceRecoveryResponse(db);
  const aiResult = await runAi("copilot", country, route, db.profile);
  const run = recordAiRun(db, { type: "copilot", country, route, result: aiResult, module: "AI" });
  return { intent: "ai-question", response: `${run.text} If you want me to act, say a module and action, like "AgriTrade prepare buyer update" or "Telehealth start intake."`, metadata: { runId: run.id, provider: run.provider } };
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
    "trade-efficiency": "AgriTrade",
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
    "trade-efficiency": `AgriTrade efficiency advisor recommends clearing the bottleneck chain in this order: field evidence, buyer readiness, quality/cold-chain proof, route timing, and payment confirmation. Keep the operation moving only when each handoff has evidence attached.`,
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
  const usersChanged = ensureDefaultUsers(db);
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

  if (url.pathname === "/api/engines/render-env-plan" && req.method === "GET") {
    if (!user) return send(res, 401, { error: "Sign in required" });
    return send(res, 200, renderEngineEnvPlan(db));
  }

  if (url.pathname === "/api/production/complete-check" && req.method === "GET") {
    const providers = runtimeProviders(db);
    return send(res, 200, productionCompleteness(db, providers));
  }

  if (url.pathname === "/api/production/operations-plan" && req.method === "GET") {
    const providers = runtimeProviders(db);
    return send(res, 200, productionOperationsPlan(db, providers));
  }

  if (url.pathname === "/api/production/activation-guide" && req.method === "GET") {
    const providers = runtimeProviders(db);
    return send(res, 200, productionActivationGuide(db, providers));
  }

  if (url.pathname === "/api/intelligence/next-actions" && req.method === "GET") {
    if (!user) return send(res, 401, { error: "Sign in required" });
    return send(res, 200, smartNextActions(db, user, runtimeProviders(db)));
  }

  if (url.pathname === "/api/production/live-service-check" && req.method === "POST") {
    if (!user) return send(res, 401, { error: "Sign in required" });
    const report = await productionLiveServiceCheck(db, user);
    await writeDb(db);
    const state = publicState(db, user);
    state.liveServiceCheckResult = report;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/login" && req.method === "POST") {
    const body = await readBody(req);
    const found = db.users.find(item => item.email === body.email && item.password === body.password);
    if (!found) return send(res, 401, { error: "Invalid demo credentials" });
    if (usersChanged) await writeDb(db);
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

  if (url.pathname.startsWith("/api/voice/phone/audio/") && req.method === "GET") {
    const id = path.basename(url.pathname).replace(/\.mp3$/, "");
    const audio = phoneAudioCache.get(id);
    if (!audio) return send(res, 404, { error: "Phone audio not found" });
    res.writeHead(200, {
      "content-type": "audio/mpeg",
      "cache-control": "no-store",
      "x-content-type-options": "nosniff"
    });
    return res.end(audio.buffer);
  }

  if (url.pathname === "/api/voice/phone/incoming" && req.method === "POST") {
    const phoneUser = phoneVoiceUser(db);
    const language = twilioLanguage(phoneUser?.language || "en");
    const actionUrl = `${process.env.PUBLIC_BASE_URL || ""}/api/voice/phone/gather`;
    const greeting = await phoneVoicePrompt("You are speaking with the AgriNexus AI assistant. This is an AI generated voice. Tell me what you need, such as telehealth intake, apply for a job, contact my buyer, or test provider engines.", language);
    const prompt = await phoneVoicePrompt("What would you like AgriNexus to do?", language);
    const noCommand = await phoneVoicePrompt("I did not hear a command. Please call back or use the web assistant.", language);
    logIntegration(db, {
      providerId: "phone-voice",
      module: "AI",
      action: "phone.incoming",
      detail: "Incoming phone voice assistant session opened.",
      metadata: { from: req.headers["x-forwarded-for"] || "twilio" }
    });
    await writeDb(db);
    return twimlResponse(res, `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  ${greeting}
  <Gather input="speech dtmf" action="${xmlEscape(actionUrl || "/api/voice/phone/gather")}" method="POST" language="${xmlEscape(language)}" speechTimeout="auto" actionOnEmptyResult="true">
    ${prompt}
  </Gather>
  ${noCommand}
</Response>`);
  }

  if (url.pathname === "/api/voice/phone/gather" && req.method === "POST") {
    const phoneUser = phoneVoiceUser(db);
    const body = await readBody(req);
    const language = twilioLanguage(phoneUser?.language || "en");
    const command = String(body.SpeechResult || body.speechResult || body.Digits || body.digits || "").trim();
    if (!command) {
      const retryPrompt = await phoneVoicePrompt("Please say a command, like start telehealth intake, apply for that job, or run full mission.", language);
      return twimlResponse(res, `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Gather input="speech dtmf" action="${xmlEscape((process.env.PUBLIC_BASE_URL || "") + "/api/voice/phone/gather")}" method="POST" language="${xmlEscape(language)}" speechTimeout="auto" actionOnEmptyResult="true">
    ${retryPrompt}
  </Gather>
</Response>`);
    }
    const result = await runAgentCommand(db, phoneUser, command, { confirm: true, conversational: true, note: "Phone call voice assistant command" });
    commandRecord(db, phoneUser, command, result);
    voiceRecord(db, phoneUser, "phone-call", `Phone command handled: ${command}`, {
      command,
      response: result.response,
      callSid: body.CallSid || body.callSid || null,
      from: body.From || body.from || null,
      provider: "twilio"
    });
    await writeDb(db);
    const response = String(result.response || "Command completed.").slice(0, 900);
    const spokenResponse = await phoneVoicePrompt(response, language);
    const nextPrompt = await phoneVoicePrompt("You can say another command, or hang up when finished.", language);
    return twimlResponse(res, `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  ${spokenResponse}
  <Gather input="speech dtmf" action="${xmlEscape((process.env.PUBLIC_BASE_URL || "") + "/api/voice/phone/gather")}" method="POST" language="${xmlEscape(language)}" speechTimeout="auto" actionOnEmptyResult="false">
    ${nextPrompt}
  </Gather>
</Response>`);
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
    const provider = runtimeProviderById(db, body.providerId);
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
    for (const provider of runtimeProviders(db)) {
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
    const providers = runtimeProviders(db).filter(provider => provider.module === moduleName);
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
    for (const provider of runtimeProviders(db)) {
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
    const allowed = new Set(["en", "fr", "sw", "ar", "es"]);
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

  if (url.pathname === "/api/learning/catalog" && req.method === "GET") {
    if (!canUse(user, "learning")) return send(res, 403, { error: "Role does not allow learning catalog access" });
    return send(res, 200, { catalog: learningCatalog(db), user: { language: user.language } });
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

  if (url.pathname === "/api/learning/advanced" && req.method === "POST") {
    if (!canUse(user, "learning")) return send(res, 403, { error: "Role does not allow advanced learning workflows" });
    const body = await readBody(req);
    ensureLearningProfile(db.profile);
    const course = db.courses.find(item => item.id === (body.courseId || db.profile.activeCourseId)) || db.courses[0];
    if (!course) return send(res, 404, { error: "Course not found" });
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
    const type = body.type || "assignment";
    const now = new Date().toISOString();
    const makers = {
      assignment: () => {
        const record = {
          id: crypto.randomUUID(),
          assignmentNumber: `AN-ASG-${String(db.profile.learningAssignments.length + 1).padStart(3, "0")}`,
          courseId: course.id,
          courseTitle: course.title,
          title: body.title || `${course.title} field assignment`,
          instructions: body.instructions || "Complete the lesson task, upload field notes, and prepare a short workforce-ready reflection.",
          dueWindow: body.dueWindow || "next learning session",
          status: "assigned",
          createdAt: now
        };
        db.profile.learningAssignments.unshift(record);
        return ["learning-courses", "learning.assignment_created", `${record.assignmentNumber} assignment created for ${course.title}.`, record];
      },
      "quiz-attempt": () => {
        const record = {
          id: crypto.randomUUID(),
          attemptNumber: `AN-QUIZ-${String(db.profile.quizAttempts.length + 1).padStart(3, "0")}`,
          courseId: course.id,
          courseTitle: course.title,
          score: Number(body.score || Math.max(72, Math.min(96, (enrollment.score || 60) + 18))),
          status: "submitted",
          feedback: "Review missed concepts, then proceed toward certificate readiness.",
          createdAt: now
        };
        db.profile.quizAttempts.unshift(record);
        enrollment.score = Math.max(enrollment.score || 0, record.score);
        enrollment.progress = Math.max(enrollment.progress || 25, 85);
        db.profile.quizScore = Math.max(db.profile.quizScore || 0, record.score);
        return ["learning-certificates", "learning.quiz_attempt_recorded", `${record.attemptNumber} quiz attempt recorded at ${record.score}%.`, record];
      },
      note: () => {
        const record = {
          id: crypto.randomUUID(),
          noteNumber: `AN-INST-${String(db.profile.instructorNotes.length + 1).padStart(3, "0")}`,
          courseId: course.id,
          courseTitle: course.title,
          author: user.name,
          note: body.note || "Instructor reviewed learner progress, accessibility needs, and workforce readiness path.",
          status: "recorded",
          createdAt: now
        };
        db.profile.instructorNotes.unshift(record);
        return ["learning-courses", "learning.instructor_note_recorded", `${record.noteNumber} instructor note recorded for ${course.title}.`, record];
      },
      report: () => {
        const record = {
          id: crypto.randomUUID(),
          reportNumber: `AN-LRPT-${String(db.profile.learningProgressReports.length + 1).padStart(3, "0")}`,
          courseId: course.id,
          courseTitle: course.title,
          progress: enrollment.progress || 0,
          readiness: db.profile.readiness,
          learningHours: db.profile.learningHours || 0,
          completedModules: (enrollment.completedModules || []).length,
          recommendation: "Continue active course, complete assessment, and connect certificate to workforce role gate.",
          status: "generated",
          createdAt: now
        };
        db.profile.learningProgressReports.unshift(record);
        return ["learning-courses", "learning.progress_report_generated", `${record.reportNumber} progress report generated for ${course.title}.`, record];
      },
      transcript: () => {
        const record = {
          id: crypto.randomUUID(),
          transcriptNumber: `AN-TRN-${String(db.profile.learningTranscripts.length + 1).padStart(3, "0")}`,
          learnerName: user.name,
          activeCourse: course.title,
          completedCourses: (db.profile.completedCourses || []).map(courseId => db.courses.find(item => item.id === courseId)?.title || courseId),
          certificates: (db.profile.certificates || []).map(cert => cert.certificateNumber || cert.id),
          readiness: db.profile.readiness,
          status: "issued",
          createdAt: now
        };
        db.profile.learningTranscripts.unshift(record);
        return ["learning-certificates", "learning.transcript_issued", `${record.transcriptNumber} transcript issued for ${user.name}.`, record];
      },
      cohort: () => {
        const record = {
          id: crypto.randomUUID(),
          cohortNumber: `AN-COH-${String(db.profile.learningCohorts.length + 1).padStart(3, "0")}`,
          courseId: course.id,
          courseTitle: course.title,
          cohortName: body.cohortName || `${course.track} rural learner cohort`,
          learnerCount: Number(body.learnerCount || 24),
          facilitator: body.facilitator || "Community learning facilitator",
          status: "active",
          createdAt: now
        };
        db.profile.learningCohorts.unshift(record);
        return ["learning-courses", "learning.cohort_created", `${record.cohortNumber} cohort created for ${course.title}.`, record];
      }
    };
    const maker = makers[type];
    if (!maker) return send(res, 400, { error: "Unsupported advanced learning action" });
    const [providerId, action, detail, record] = maker();
    ["learningAssignments", "quizAttempts", "instructorNotes", "learningProgressReports", "learningTranscripts", "learningCohorts"].forEach(key => {
      db.profile[key] = db.profile[key].slice(0, 20);
    });
    db.profile.activeCourseId = course.id;
    db.profile.learningStreak += 1;
    db.profile.learningHours = Number((Number(db.profile.learningHours || 0) + 0.25).toFixed(2));
    recalcReadiness(db.profile);
    logIntegration(db, { providerId, module: "Learning", action, detail, metadata: { recordId: record.id, courseId: course.id, type } });
    addActivity(db.profile, detail);
    addWorkflowNote(db.profile, body.note, "Advanced learning note");
    await writeDb(db);
    const state = publicState(db, user);
    state.learningAdvancedResult = { type, record };
    return send(res, 200, state);
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

  if (url.pathname === "/api/workforce/advanced" && req.method === "POST") {
    if (!canUse(user, "workforce")) return send(res, 403, { error: "Role does not allow workforce workflows" });
    const body = await readBody(req);
    ensureWorkforceProfile(db.profile);
    const role = db.profile.applications[0]?.roleTitle || (db.roles || [])[0]?.title || "Field Operations Agent";
    const now = new Date().toISOString();
    const type = body.type || "onboarding";
    const actions = {
      onboarding: () => {
        const record = {
          id: crypto.randomUUID(),
          packetNumber: `AN-ONB-${String(db.profile.workforceOnboarding.length + 1).padStart(3, "0")}`,
          role,
          checklist: ["identity review", "course certificates", "role expectations", "safety briefing", "payment setup"],
          status: "packet-ready",
          createdAt: now
        };
        db.profile.workforceOnboarding.unshift(record);
        if (!db.profile.workforceBadges.includes("Onboarding Ready")) db.profile.workforceBadges.push("Onboarding Ready");
        return ["workforce-hris", "onboarding.packet_ready", `${record.packetNumber} onboarding packet prepared for ${role}.`, record];
      },
      document: () => {
        const record = {
          id: crypto.randomUUID(),
          documentNumber: `AN-DOC-${String(db.profile.workforceDocuments.length + 1).padStart(3, "0")}`,
          role,
          checks: ["identity", "certificate proof", "work authorization", "emergency contact"],
          status: "verified",
          createdAt: now
        };
        db.profile.workforceDocuments.unshift(record);
        if (!db.profile.workforceBadges.includes("Documents Verified")) db.profile.workforceBadges.push("Documents Verified");
        return ["workforce-hris", "documents.verified", `${record.documentNumber} workforce documents verified.`, record];
      },
      timesheet: () => {
        const record = {
          id: crypto.randomUUID(),
          timesheetNumber: `AN-TIME-${String(db.profile.timesheets.length + 1).padStart(3, "0")}`,
          role,
          hours: Number(body.hours || 6),
          status: "submitted",
          submittedAt: now
        };
        db.profile.timesheets.unshift(record);
        return ["workforce-shifts", "timesheet.submitted", `${record.timesheetNumber} timesheet submitted for ${record.hours} hours.`, record];
      },
      payroll: () => {
        const latestTimesheet = db.profile.timesheets[0] || { hours: 6, timesheetNumber: "AN-TIME-AUTO" };
        const record = {
          id: crypto.randomUUID(),
          payrollNumber: `AN-PAY-${String(db.profile.payrollApprovals.length + 1).padStart(3, "0")}`,
          timesheetNumber: latestTimesheet.timesheetNumber,
          amount: Number(body.amount || latestTimesheet.hours * 12),
          status: "approved",
          approvedAt: now
        };
        db.profile.payrollApprovals.unshift(record);
        db.profile.earnings = Number(db.profile.earnings || 0) + record.amount;
        return ["workforce-hris", "payroll.approved", `${record.payrollNumber} payroll approved for $${record.amount}.`, record];
      },
      evaluation: () => {
        const record = {
          id: crypto.randomUUID(),
          reviewNumber: `AN-REV-${String(db.profile.performanceReviews.length + 1).padStart(3, "0")}`,
          role,
          score: Number(body.score || 92),
          strengths: ["attendance", "mobile workflow", "community handoff"],
          nextCoaching: "advance to route coordination and farmer support quality checks",
          status: "completed",
          createdAt: now
        };
        db.profile.performanceReviews.unshift(record);
        db.profile.readiness = Math.min(100, Number(db.profile.readiness || 0) + 4);
        return ["workforce-hris", "performance.reviewed", `${record.reviewNumber} performance review completed at ${record.score}%.`, record];
      },
      "shift-request": () => {
        const record = {
          id: crypto.randomUUID(),
          requestNumber: `AN-SWAP-${String(db.profile.shiftRequests.length + 1).padStart(3, "0")}`,
          role,
          request: body.request || "worker requested shift swap / schedule adjustment",
          status: "manager-review",
          createdAt: now
        };
        db.profile.shiftRequests.unshift(record);
        return ["workforce-calendar", "shift.request_created", `${record.requestNumber} shift request created for ${role}.`, record];
      }
    };
    const handler = actions[type];
    if (!handler) return send(res, 400, { error: "Unsupported advanced workforce action" });
    const [providerId, action, detail, record] = handler();
    db.profile.candidateStage = type === "payroll" ? "Paid Placement" : type === "evaluation" ? "Performance Review" : db.profile.candidateStage;
    recalcReadiness(db.profile);
    logIntegration(db, { providerId, module: "Workforce", action, detail, metadata: { recordId: record.id, type } });
    addActivity(db.profile, detail);
    addWorkflowNote(db.profile, body.note, "Advanced workforce note");
    await writeDb(db);
    const state = publicState(db, user);
    state.workforceAdvancedResult = { type, record };
    return send(res, 200, state);
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

  if (url.pathname === "/api/health/intake-simulation" && req.method === "POST") {
    if (!canUse(user, "health")) return send(res, 403, { error: "Role does not allow healthcare workflows" });
    const body = await readBody(req);
    const { country, route } = activeContext(db);
    ensureHealthProfile(db.profile);
    const patientName = String(body.patientName || "Amina Community Patient").trim();
    const needSummary = String(body.needSummary || "Accessible telehealth intake for rural patient support, language translation, and follow-up").trim();
    const preferredLanguage = String(body.preferredLanguage || db.profile.accessibilityProfile.language || user.language || "en").trim();
    const accessibilityNeeds = String(body.accessibilityNeeds || "Captions, audio narration, large-print summary, caregiver handoff").trim();
    const contactMethod = String(body.contactMethod || "Voice callback plus SMS summary").trim();
    const caregiverName = String(body.caregiverName || "Community accessibility aide").trim();
    const riskLevel = String(body.urgency || (country.risk === "High" || country.heat >= 38 ? "Priority" : "Routine")).trim();
    const createdAt = new Date().toISOString();
    const intake = {
      id: crypto.randomUUID(),
      patientRef: `AN-PAT-${country.id.toUpperCase()}-${String(db.profile.healthIntakes.length + 1).padStart(3, "0")}`,
      patientName,
      countryId: country.id,
      needSummary,
      riskLevel,
      queueStatus: "Guided intake simulation complete",
      representativeStatus: "Accessibility aide connected",
      preferredLanguage,
      accessibilityNeeds,
      contactMethod,
      caregiverName,
      assistiveSupports: accessibilityNeeds.split(",").map(item => item.trim()).filter(Boolean),
      routeContext: {
        routeId: route.id,
        routeName: route.name,
        checkpoint: db.profile.activeCheckpoint
      },
      simulation: true,
      createdAt
    };
    db.profile.healthIntakes.unshift(intake);

    const consent = {
      id: crypto.randomUUID(),
      intakeId: intake.id,
      patientRef: intake.patientRef,
      consentType: "telehealth, translation, caregiver, transcript, and assistive-format consent",
      language: preferredLanguage,
      privacySummary: "Plain-language consent captured for guided care, translation, caregiver support, and low-bandwidth communication.",
      status: "recorded",
      createdAt
    };
    const vitals = {
      id: crypto.randomUUID(),
      intakeId: intake.id,
      patientRef: intake.patientRef,
      temperatureC: Number(body.temperatureC || (country.heat >= 38 ? 38.2 : 36.9)),
      pulse: Number(body.pulse || (riskLevel.toLowerCase().includes("priority") ? 98 : 84)),
      symptoms: body.symptoms || "Heat exposure, mobility/accessibility check, rural follow-up request",
      triageLevel: riskLevel.toLowerCase().includes("priority") || country.heat >= 38 ? "priority" : "routine",
      status: "captured",
      createdAt
    };
    const accessRecord = {
      id: crypto.randomUUID(),
      intakeId: intake.id,
      patientRef: intake.patientRef,
      countryId: country.id,
      title: "Guided accessible intake packet",
      status: "Access plan ready",
      language: preferredLanguage,
      supports: ["caption relay", "audio description", "large-print summary", "caregiver handoff", "low-bandwidth callback"],
      createdAt
    };
    const referral = {
      id: crypto.randomUUID(),
      intakeId: intake.id,
      patientRef: intake.patientRef,
      destination: body.destination || `${country.name} partner clinic / community health worker`,
      reason: body.reason || "Guided intake flagged accessible follow-up and provider verification",
      transportSupport: "community aide callback and low-bandwidth directions",
      status: "sent",
      createdAt
    };
    const followUp = {
      id: crypto.randomUUID(),
      intakeId: intake.id,
      patientRef: intake.patientRef,
      scheduleWindow: body.scheduleWindow || "24-hour voice callback with SMS summary",
      channels: ["voice callback", "SMS summary", "caregiver packet", "large-print/audio guide"],
      status: "scheduled",
      createdAt
    };

    db.profile.telehealthConsents.unshift(consent);
    db.profile.telehealthVitals.unshift(vitals);
    db.profile.telehealthAccessibility.unshift(accessRecord);
    db.profile.telehealthReferrals.unshift(referral);
    db.profile.telehealthFollowUps.unshift(followUp);
    db.profile.telehealthConsents = db.profile.telehealthConsents.slice(0, 20);
    db.profile.telehealthVitals = db.profile.telehealthVitals.slice(0, 20);
    db.profile.telehealthAccessibility = db.profile.telehealthAccessibility.slice(0, 20);
    db.profile.telehealthReferrals = db.profile.telehealthReferrals.slice(0, 20);
    db.profile.telehealthFollowUps = db.profile.telehealthFollowUps.slice(0, 20);
    db.profile.representativeConnections += 1;
    country.queue = "Guided intake simulation complete";
    country.patients += 1;

    const events = [
      ["health-telehealth", "intake.created", `${intake.patientRef} guided telehealth intake simulation recorded.`],
      ["health-ehr", "telehealth.consent_recorded", `${consent.patientRef} consent captured during guided intake.`],
      ["health-telehealth", "telehealth.vitals_captured", `${vitals.patientRef} vitals captured during guided intake.`],
      ["health-ehr", "telehealth.accessibility_plan", `${accessRecord.patientRef} accessible intake packet prepared.`],
      ["health-notifications", "telehealth.referral_sent", `${referral.patientRef} referral sent during guided intake.`],
      ["health-notifications", "telehealth.followup_scheduled", `${followUp.patientRef} follow-up scheduled during guided intake.`]
    ];
    for (const [providerId, action, detail] of events) {
      logIntegration(db, {
        providerId,
        module: "Healthcare",
        action,
        detail,
        metadata: { intakeId: intake.id, patientRef: intake.patientRef, simulation: true }
      });
    }
    db.profile.aiActivity = `Guided intake simulation completed for ${intake.patientRef}: consent, vitals, accessibility, referral, and follow-up are ready.`;
    addActivity(db.profile, db.profile.aiActivity);
    addWorkflowNote(db.profile, body.note, "Guided intake simulation note");
    await writeDb(db);
    return send(res, 200, { ...publicState(db, user), intakeSimulationResult: { intake, consent, vitals, accessRecord, referral, followUp } });
  }

  if (url.pathname === "/api/health/advanced" && req.method === "POST") {
    if (!canUse(user, "health")) return send(res, 403, { error: "Role does not allow advanced healthcare workflows" });
    const body = await readBody(req);
    const { country, route } = activeContext(db);
    ensureHealthProfile(db.profile);
    let intake = db.profile.healthIntakes[0];
    if (!intake) {
      intake = {
        id: crypto.randomUUID(),
        patientRef: `AN-PAT-${country.id.toUpperCase()}-ADV`,
        patientName: "Community patient",
        countryId: country.id,
        riskLevel: country.risk,
        needSummary: `${country.name} advanced telehealth care operations`,
        queueStatus: "Advanced care operations",
        representativeStatus: "Accessibility aide pending",
        preferredLanguage: user.language || "en",
        accessibilityNeeds: "Captions, audio narration, caregiver handoff",
        contactMethod: "Low-bandwidth callback",
        routeContext: { routeId: route.id, routeName: route.name, checkpoint: db.profile.activeCheckpoint },
        createdAt: new Date().toISOString()
      };
      db.profile.healthIntakes.unshift(intake);
    }
    const type = body.type || "appointment";
    const now = new Date().toISOString();
    const makers = {
      appointment: () => {
        const record = {
          id: crypto.randomUUID(),
          appointmentNumber: `AN-APT-${String(db.profile.telehealthAppointments.length + 1).padStart(3, "0")}`,
          intakeId: intake.id,
          patientRef: intake.patientRef,
          scheduleWindow: body.scheduleWindow || "next available rural telehealth slot",
          modality: body.modality || "voice/video with SMS fallback",
          language: intake.preferredLanguage || user.language || "en",
          accessibility: ["captions", "audio summary", "caregiver handoff", "low-bandwidth callback"],
          status: "scheduled",
          createdAt: now
        };
        db.profile.telehealthAppointments.unshift(record);
        intake.queueStatus = "Telehealth appointment scheduled";
        return ["health-telehealth", "telehealth.appointment_scheduled", `${record.appointmentNumber} appointment scheduled for ${intake.patientRef}.`, record];
      },
      provider: () => {
        const record = {
          id: crypto.randomUUID(),
          assignmentNumber: `AN-PROV-${String(db.profile.telehealthProviderAssignments.length + 1).padStart(3, "0")}`,
          intakeId: intake.id,
          patientRef: intake.patientRef,
          providerName: body.providerName || `${country.name} telehealth provider desk`,
          specialty: body.specialty || (intake.riskLevel === "High" ? "urgent rural care" : "primary care"),
          status: "assigned",
          createdAt: now
        };
        db.profile.telehealthProviderAssignments.unshift(record);
        intake.queueStatus = "Provider assigned";
        intake.representativeStatus = "Provider assigned";
        return ["health-telehealth", "telehealth.provider_assigned", `${record.assignmentNumber} provider assigned to ${intake.patientRef}.`, record];
      },
      history: () => {
        const record = {
          id: crypto.randomUUID(),
          historyNumber: `AN-HIST-${String(db.profile.patientHistoryRecords.length + 1).padStart(3, "0")}`,
          intakeId: intake.id,
          patientRef: intake.patientRef,
          allergies: body.allergies || "none reported",
          conditions: body.conditions || "heat exposure risk, mobility/accessibility support, rural access barriers",
          medications: body.medications || "not recorded",
          caregiverContext: intake.caregiverName || "community accessibility aide",
          status: "recorded",
          createdAt: now
        };
        db.profile.patientHistoryRecords.unshift(record);
        return ["health-ehr", "patient.history_recorded", `${record.historyNumber} patient history recorded for ${intake.patientRef}.`, record];
      },
      prescription: () => {
        const record = {
          id: crypto.randomUUID(),
          packetNumber: `AN-RX-${String(db.profile.telehealthPrescriptionPackets.length + 1).padStart(3, "0")}`,
          intakeId: intake.id,
          patientRef: intake.patientRef,
          packetType: "clinician review packet",
          contents: ["care plan", "referral", "vitals", "patient history", "accessibility needs", "pharmacy/clinic handoff"],
          status: "ready-for-clinician-review",
          createdAt: now
        };
        db.profile.telehealthPrescriptionPackets.unshift(record);
        return ["health-ehr", "telehealth.prescription_packet_ready", `${record.packetNumber} clinician packet prepared for ${intake.patientRef}.`, record];
      },
      emergency: () => {
        const record = {
          id: crypto.randomUUID(),
          escalationNumber: `AN-ESC-${String(db.profile.telehealthEmergencyEscalations.length + 1).padStart(3, "0")}`,
          intakeId: intake.id,
          patientRef: intake.patientRef,
          reason: body.reason || "high-risk symptoms, heat exposure, or urgent access barrier",
          destination: `${country.name} emergency partner / community health worker`,
          status: "escalated",
          createdAt: now
        };
        db.profile.telehealthEmergencyEscalations.unshift(record);
        intake.queueStatus = "Emergency escalation opened";
        return ["health-notifications", "telehealth.emergency_escalated", `${record.escalationNumber} emergency escalation opened for ${intake.patientRef}.`, record];
      },
      note: () => {
        const record = {
          id: crypto.randomUUID(),
          noteNumber: `AN-NOTE-${String(db.profile.careTeamNotes.length + 1).padStart(3, "0")}`,
          intakeId: intake.id,
          patientRef: intake.patientRef,
          author: user.name,
          note: body.note || "Care team reviewed accessibility, language, caregiver, and rural follow-up needs.",
          status: "recorded",
          createdAt: now
        };
        db.profile.careTeamNotes.unshift(record);
        return ["health-ehr", "care_team.note_recorded", `${record.noteNumber} care-team note recorded for ${intake.patientRef}.`, record];
      },
      outcome: () => {
        const record = {
          id: crypto.randomUUID(),
          outcomeNumber: `AN-OUT-${String(db.profile.telehealthOutcomeReviews.length + 1).padStart(3, "0")}`,
          intakeId: intake.id,
          patientRef: intake.patientRef,
          outcome: body.outcome || "follow-up complete; patient connected to accessible care path",
          nextStep: body.nextStep || "continue caregiver-supported callback and provider review",
          status: "reviewed",
          createdAt: now
        };
        db.profile.telehealthOutcomeReviews.unshift(record);
        intake.queueStatus = "Outcome reviewed";
        return ["health-ehr", "telehealth.outcome_reviewed", `${record.outcomeNumber} outcome reviewed for ${intake.patientRef}.`, record];
      }
    };
    const maker = makers[type];
    if (!maker) return send(res, 400, { error: "Unsupported advanced health action" });
    const [providerId, action, detail, record] = maker();
    const storeLimit = key => { db.profile[key] = db.profile[key].slice(0, 20); };
    ["telehealthAppointments", "telehealthProviderAssignments", "patientHistoryRecords", "telehealthPrescriptionPackets", "telehealthEmergencyEscalations", "careTeamNotes", "telehealthOutcomeReviews"].forEach(key => storeLimit(key));
    country.queue = intake.queueStatus;
    logIntegration(db, { providerId, module: "Healthcare", action, detail, metadata: { recordId: record.id, intakeId: intake.id, patientRef: intake.patientRef, type } });
    addActivity(db.profile, detail);
    addWorkflowNote(db.profile, body.note, "Advanced health note");
    await writeDb(db);
    const state = publicState(db, user);
    state.healthAdvancedResult = { type, record };
    return send(res, 200, state);
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

  if (url.pathname === "/api/trade/drone-advanced" && req.method === "POST") {
    if (!canUse(user, "trade")) return send(res, 403, { error: "Role does not allow advanced drone workflows" });
    const body = await readBody(req);
    let record;
    try {
      record = createAdvancedDroneOperation(db, {
        type: body.type,
        productId: body.productId,
        source: "operator"
      });
    } catch (error) {
      return send(res, 409, { error: error.message });
    }
    const label = record.reportRef || record.planRef || record.alertRef || record.sprayRef || record.forecastRef || record.auditRef;
    addActivity(db.profile, `${label} advanced drone operation completed for ${record.productName}.`);
    addWorkflowNote(db.profile, body.note, "Advanced drone note");
    await writeDb(db);
    const state = publicState(db, user);
    state.droneAdvancedResult = { type: body.type || "field-report", record };
    return send(res, 200, state);
  }

  if (url.pathname === "/api/trade/advanced" && req.method === "POST") {
    if (!canUse(user, "trade")) return send(res, 403, { error: "Role does not allow trade workflows" });
    const body = await readBody(req);
    ensureTradeProfile(db.profile);
    const product = (db.products || []).find(item => item.id === body.productId) || (db.products || [])[0];
    const order = db.profile.orders[db.profile.orders.length - 1] || null;
    const now = new Date().toISOString();
    const type = body.type || "quote";
    const actions = {
      quote: () => {
        const record = {
          id: crypto.randomUUID(),
          quoteNumber: `AN-QTE-${String(db.profile.tradeQuotes.length + 1).padStart(3, "0")}`,
          productId: product?.id || null,
          productName: product?.name || order?.product || "Active crop lot",
          buyerName: "Regional buyer desk",
          quantity: body.quantity || `20 ${product?.unit || "units"}`,
          price: Number(body.price || product?.price || 650),
          status: "sent",
          createdAt: now
        };
        db.profile.tradeQuotes.unshift(record);
        return ["trade-market", "quote.sent", `${record.quoteNumber} quote sent for ${record.productName}.`, record];
      },
      quality: () => {
        const record = {
          id: crypto.randomUUID(),
          inspectionNumber: `AN-QA-${String(db.profile.qualityInspections.length + 1).padStart(3, "0")}`,
          productName: product?.name || order?.product || "Active crop lot",
          grade: body.grade || "Export A",
          checks: ["moisture", "packaging", "visual defects", "traceability", "buyer specification"],
          status: "passed",
          createdAt: now
        };
        db.profile.qualityInspections.unshift(record);
        return ["trade-logistics", "quality.inspected", `${record.inspectionNumber} quality inspection passed at ${record.grade}.`, record];
      },
      "cold-chain": () => {
        const record = {
          id: crypto.randomUUID(),
          checkNumber: `AN-COLD-${String(db.profile.coldChainChecks.length + 1).padStart(3, "0")}`,
          productName: product?.name || order?.product || "Active crop lot",
          temperatureC: Number(body.temperatureC || 4.2),
          checkpoints: ["pre-cool", "loading", "route monitor", "handoff"],
          status: "compliant",
          createdAt: now
        };
        db.profile.coldChainChecks.unshift(record);
        return ["trade-logistics", "cold_chain.checked", `${record.checkNumber} cold-chain check marked ${record.status}.`, record];
      },
      export: () => {
        const record = {
          id: crypto.randomUUID(),
          exportNumber: `AN-EXP-${String(db.profile.exportReadiness.length + 1).padStart(3, "0")}`,
          productName: product?.name || order?.product || "Active crop lot",
          documents: ["invoice", "quality certificate", "traceability sheet", "route manifest", "buyer confirmation"],
          status: "ready-for-export",
          createdAt: now
        };
        db.profile.exportReadiness.unshift(record);
        return ["trade-logistics", "export.ready", `${record.exportNumber} export readiness packet prepared.`, record];
      },
      contract: () => {
        const record = {
          id: crypto.randomUUID(),
          contractNumber: `AN-CON-${String(db.profile.contractPackets.length + 1).padStart(3, "0")}`,
          productName: product?.name || order?.product || "Active crop lot",
          buyerName: db.profile.buyerContacts[0]?.buyerName || "Regional buyer desk",
          terms: ["quantity", "price", "delivery window", "quality grade", "payment release"],
          status: "draft-ready",
          createdAt: now
        };
        db.profile.contractPackets.unshift(record);
        return ["trade-market", "contract.packet_ready", `${record.contractNumber} buyer contract packet drafted.`, record];
      },
      release: () => {
        const latestQuote = db.profile.tradeQuotes[0];
        const record = {
          id: crypto.randomUUID(),
          releaseNumber: `AN-REL-${String(db.profile.paymentReleases.length + 1).padStart(3, "0")}`,
          quoteNumber: latestQuote?.quoteNumber || null,
          amount: Number(body.amount || latestQuote?.price || product?.price || 650),
          status: "released",
          createdAt: now
        };
        db.profile.paymentReleases.unshift(record);
        db.profile.wallet = Number(db.profile.wallet || 0) + record.amount;
        db.profile.walletTransactions.unshift({
          id: crypto.randomUUID(),
          provider: "Escrow release",
          amount: record.amount,
          type: "credit",
          status: "posted",
          createdAt: now
        });
        return ["trade-payments", "payment.released", `${record.releaseNumber} payment released for $${record.amount}.`, record];
      }
    };
    const handler = actions[type];
    if (!handler) return send(res, 400, { error: "Unsupported advanced trade action" });
    const [providerId, action, detail, record] = handler();
    addTradeEvent(db.profile, { type: action, label: detail });
    logIntegration(db, { providerId, module: "AgriTrade", action, detail, metadata: { recordId: record.id, type, productId: product?.id || null } });
    addActivity(db.profile, detail);
    addWorkflowNote(db.profile, body.note, "Advanced trade note");
    await writeDb(db);
    const state = publicState(db, user);
    state.tradeAdvancedResult = { type, record };
    return send(res, 200, state);
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

  if (url.pathname === "/api/intelligence/workflow" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow workflow intelligence" });
    const body = await readBody(req);
    const intelligence = workflowIntelligence(db, user, body);
    logIntegration(db, {
      providerId: "openai",
      module: "AI",
      action: "workflow.intelligence_generated",
      detail: `${intelligence.module} intelligence generated for ${intelligence.action}.`,
      metadata: { intelligenceId: intelligence.id, module: intelligence.module, action: intelligence.action }
    });
    addActivity(db.profile, `Workflow intelligence: ${intelligence.nextStep}`);
    await writeDb(db);
    const state = publicState(db, user);
    state.workflowIntelligenceResult = intelligence;
    return send(res, 200, state);
  }

  if (url.pathname === "/api/map/advanced" && req.method === "POST") {
    if (!canUse(user, "map")) return send(res, 403, { error: "Role does not allow map operations" });
    const body = await readBody(req);
    ensureAiProfile(db.profile);
    const { country, route } = activeContext(db);
    const type = body.type || "farmer-location";
    const checkpoint = db.profile.activeCheckpoint || route.checkpoints?.[0] || country.capital;
    let action = "map.operation_completed";
    let detail = "Advanced map operation completed.";
    let record;

    if (type === "field-zone") {
      record = {
        id: crypto.randomUUID(),
        zoneNumber: `ZONE-${country.id.toUpperCase()}-${String(db.profile.fieldZones.length + 1).padStart(3, "0")}`,
        zoneName: body.zoneName || `${country.cropFocus || "Crop"} resilience zone`,
        countryId: country.id,
        routeId: route.id,
        cropFocus: country.cropFocus || "Staple crop",
        riskProfile: `${country.risk} route risk with ${country.queue} access queue`,
        linkedDroneScans: (db.profile.droneScans || []).slice(0, 3).map(item => item.scanRef || item.id),
        status: "field-zone-ready",
        createdAt: new Date().toISOString()
      };
      db.profile.fieldZones.unshift(record);
      db.profile.fieldZones = db.profile.fieldZones.slice(0, 20);
      action = "map.field_zone_created";
      detail = `${record.zoneNumber} created for ${record.cropFocus} operations in ${country.name}.`;
    } else if (type === "facility-route") {
      record = {
        id: crypto.randomUUID(),
        routeNumber: `ROUTE-${country.id.toUpperCase()}-${String(db.profile.facilityRoutes.length + 1).padStart(3, "0")}`,
        origin: body.origin || checkpoint,
        destination: body.destination || (country.facilities > 1 ? "Nearest rural facility hub" : "Community access point"),
        purpose: body.purpose || "Move people, care packets, crop lots, and workforce teams with audit evidence.",
        countryId: country.id,
        routeId: route.id,
        status: "facility-route-ready",
        createdAt: new Date().toISOString()
      };
      db.profile.facilityRoutes.unshift(record);
      db.profile.facilityRoutes = db.profile.facilityRoutes.slice(0, 20);
      action = "map.facility_route_ready";
      detail = `${record.routeNumber} prepared from ${record.origin} to ${record.destination}.`;
    } else if (type === "disruption") {
      record = {
        id: crypto.randomUUID(),
        disruptionNumber: `DISRUPT-${country.id.toUpperCase()}-${String(db.profile.routeDisruptions.length + 1).padStart(3, "0")}`,
        checkpoint,
        issue: body.issue || "Road, weather, fuel, or clinic access delay reported by field team.",
        severity: body.severity || (country.risk === "High" ? "high" : "medium"),
        mitigation: body.mitigation || "Reroute through alternate checkpoint, notify affected teams, and monitor provider handoff.",
        countryId: country.id,
        routeId: route.id,
        status: "mitigation-ready",
        createdAt: new Date().toISOString()
      };
      db.profile.routeDisruptions.unshift(record);
      db.profile.routeDisruptions = db.profile.routeDisruptions.slice(0, 20);
      action = "map.route_disruption_recorded";
      detail = `${record.disruptionNumber} recorded at ${checkpoint} with ${record.severity} severity.`;
    } else if (type === "risk-layer") {
      const score = country.risk === "High" ? 82 : country.risk === "Medium" ? 58 : 34;
      record = {
        id: crypto.randomUUID(),
        layerNumber: `RISK-${country.id.toUpperCase()}-${String(db.profile.mapRiskLayers.length + 1).padStart(3, "0")}`,
        layers: body.layers || ["road access", "clinic reach", "market movement", "weather exposure", "workforce coverage"],
        score,
        countryId: country.id,
        routeId: route.id,
        status: "risk-layer-generated",
        createdAt: new Date().toISOString()
      };
      db.profile.mapRiskLayers.unshift(record);
      db.profile.mapRiskLayers = db.profile.mapRiskLayers.slice(0, 20);
      action = "map.risk_layer_generated";
      detail = `${record.layerNumber} generated with ${score} composite risk score.`;
    } else if (type === "evidence") {
      record = {
        id: crypto.randomUUID(),
        packetNumber: `MAP-EVIDENCE-${country.id.toUpperCase()}-${String(db.profile.mapEvidencePackets.length + 1).padStart(3, "0")}`,
        countryId: country.id,
        routeId: route.id,
        evidence: [
          `${db.profile.farmerLocations.length} farmer locations`,
          `${db.profile.fieldZones.length} field zones`,
          `${db.profile.facilityRoutes.length} facility routes`,
          `${db.profile.routeDisruptions.length} disruptions`,
          `${db.profile.mapRiskLayers.length} risk layers`,
          `${db.profile.mapInsights.length} map insights`
        ],
        status: "evidence-packet-ready",
        createdAt: new Date().toISOString()
      };
      db.profile.mapEvidencePackets.unshift(record);
      db.profile.mapEvidencePackets = db.profile.mapEvidencePackets.slice(0, 20);
      action = "map.evidence_packet_ready";
      detail = `${record.packetNumber} compiled for ${country.name} map operations.`;
    } else {
      record = {
        id: crypto.randomUUID(),
        locationNumber: `FARMER-${country.id.toUpperCase()}-${String(db.profile.farmerLocations.length + 1).padStart(3, "0")}`,
        farmerName: body.farmerName || "Rural producer group",
        countryId: country.id,
        routeId: route.id,
        lat: country.lat,
        lng: country.lng,
        accessNeeds: body.accessNeeds || "Low-bandwidth voice, route support, accessible training, and buyer connection.",
        status: "mapped",
        createdAt: new Date().toISOString()
      };
      db.profile.farmerLocations.unshift(record);
      db.profile.farmerLocations = db.profile.farmerLocations.slice(0, 20);
      action = "map.farmer_location_mapped";
      detail = `${record.locationNumber} mapped for ${record.farmerName} in ${country.name}.`;
    }

    addMapInsight(db.profile, {
      type: action,
      label: detail.split(".")[0],
      detail,
      routeName: route.name,
      checkpoint
    });
    logIntegration(db, {
      providerId: "maps",
      module: "Maps",
      action,
      detail,
      metadata: { recordId: record.id, type, countryId: country.id, routeId: route.id }
    });
    addActivity(db.profile, detail);
    addWorkflowNote(db.profile, body.note, "Map note");
    const state = publicState(db, user);
    state.mapAdvancedResult = { type, record };
    await writeDb(db);
    return send(res, 200, state);
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
    const rawResult = await runAgentCommand(db, user, command, { confirm: body.confirm === true, stageOnly: body.stageOnly === true, conversational: body.conversational === true, note: body.note });
    const result = humanizeAgentResult(db, user, rawResult, command);
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
    let transcript = String(body.transcript || body.text || "").trim();
    let provider = process.env.VOICE_STT_PROVIDER || (process.env.OPENAI_API_KEY ? "openai" : "browser");
    let model = null;
    if (!transcript && body.audioBase64 && (process.env.VOICE_STT_PROVIDER === "openai" || process.env.OPENAI_API_KEY)) {
      const result = await openAiTranscribeAudio({
        audioBase64: body.audioBase64,
        mimeType: body.mimeType || "audio/webm",
        filename: body.filename || "agrinexus-voice.webm",
        language: body.language || user.language || "en"
      });
      transcript = result?.transcript || "";
      provider = result?.provider || provider;
      model = result?.model || null;
    }
    const record = voiceRecord(db, user, "speech-to-text", transcript ? `Speech captured: ${transcript}` : "Speech capture session opened.", { language: body.language || user.language || "en", provider, model });
    await writeDb(db);
    const state = publicState(db, user);
    state.voiceResult = { transcript, sessionId: record.id, provider, model };
    return send(res, 200, state);
  }

  if (url.pathname === "/api/voice/speak" && req.method === "POST") {
    if (!canUse(user, "ai")) return send(res, 403, { error: "Role does not allow voice responses" });
    const body = await readBody(req);
    const text = String(body.text || "").trim();
    if (!text) return send(res, 400, { error: "Voice response text is required" });
    let audio = null;
    let speechError = null;
    let provider = process.env.VOICE_TTS_PROVIDER || (process.env.OPENAI_API_KEY ? "openai" : "browser");
    if (provider === "openai" || body.forceOpenAi === true) {
      try {
        audio = await openAiSpeechAudio({
          text,
          voice: body.voice || process.env.OPENAI_TTS_VOICE,
          responseFormat: body.responseFormat || "mp3"
        });
        provider = audio?.provider || provider;
      } catch (error) {
        speechError = error.message || "OpenAI speech request failed";
        provider = "openai-audio-error";
      }
    }
    const record = voiceRecord(db, user, "text-to-speech", speechError ? `Speech response failed: ${speechError}` : `Speech response prepared: ${text}`, { language: body.language || user.language || "en", provider, model: audio?.model || null, voice: audio?.voice || null, error: speechError });
    await writeDb(db);
    const state = publicState(db, user);
    state.voiceResult = { text, sessionId: record.id, provider, audioDataUrl: audio?.audioDataUrl || null, model: audio?.model || null, voice: audio?.voice || null, error: speechError, configuredProvider: process.env.VOICE_TTS_PROVIDER || null, hasOpenAiKey: Boolean(process.env.OPENAI_API_KEY) };
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
    const ext = path.extname(filePath);
    const cacheControl = ext === ".html" || ext === ".js" ? "no-store" : "public, max-age=3600";
    res.writeHead(200, { "content-type": mime[ext] || "application/octet-stream", "cache-control": cacheControl });
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
