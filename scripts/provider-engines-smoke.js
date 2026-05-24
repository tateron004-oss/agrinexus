const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const providerPort = 4380;
const appPort = 4381;
const providerBase = `http://localhost:${providerPort}`;
const appBase = `http://localhost:${appPort}`;
const dbPath = path.join(__dirname, "..", "db.json");
const eventsPath = path.join(__dirname, "..", "provider-events.json");
const dbSnapshot = fs.readFileSync(dbPath, "utf8");
const eventsSnapshot = fs.existsSync(eventsPath) ? fs.readFileSync(eventsPath, "utf8") : null;
let cookie = "";

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitFor(url) {
  for (let i = 0; i < 50; i += 1) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error(`${url} did not become reachable`);
}

async function call(base, route, body) {
  const res = await fetch(`${base}${route}`, {
    method: body ? "POST" : "GET",
    headers: { "content-type": "application/json", cookie },
    body: body ? JSON.stringify(body) : undefined
  });
  const setCookie = res.headers.get("set-cookie");
  if (setCookie) cookie = setCookie.split(";")[0];
  const json = await res.json();
  if (!res.ok) throw new Error(`${route}: ${json.error || res.statusText}`);
  return json;
}

(async () => {
  const env = {
    ...process.env,
    PROVIDER_ENGINE_PORT: String(providerPort),
    AI_PROVIDER_API_KEY: "ai-test-key",
    LEARNING_PROVIDER_API_KEY: "learning-test-key",
    WORKFORCE_PROVIDER_API_KEY: "workforce-test-key",
    HEALTH_PROVIDER_API_KEY: "health-test-key",
    TRADE_PROVIDER_API_KEY: "trade-test-key",
    DRONE_PROVIDER_API_KEY: "drone-test-key",
    VOICE_PROVIDER_API_KEY: "voice-test-key",
    TRANSLATION_PROVIDER_API_KEY: "translation-test-key",
    AUTH_PROVIDER_API_KEY: "auth-test-key"
  };
  const provider = spawn(process.execPath, ["scripts/provider-engines.js"], {
    cwd: path.join(__dirname, ".."),
    env,
    stdio: "ignore",
    windowsHide: true
  });
  const app = spawn(process.execPath, ["server.js"], {
    cwd: path.join(__dirname, ".."),
    env: {
      ...env,
      PORT: String(appPort),
      AI_PROVIDER: "webhook",
      AI_WEBHOOK_URL: `${providerBase}/ai/responses`,
      VOICE_STT_PROVIDER: "webhook",
      VOICE_TTS_PROVIDER: "webhook",
      VOICE_STT_WEBHOOK_URL: `${providerBase}/voice/transcribe`,
      VOICE_TTS_WEBHOOK_URL: `${providerBase}/voice/speak`,
      TRANSLATION_PROVIDER: "webhook",
      TRANSLATION_WEBHOOK_URL: `${providerBase}/translate`,
      AUTH_PROVIDER: "webhook",
      PASSWORD_RESET_PROVIDER: "webhook",
      AUTH_WEBHOOK_URL: `${providerBase}/auth/users`,
      PASSWORD_RESET_WEBHOOK_URL: `${providerBase}/auth/password-reset`,
      MAP_TILE_PROVIDER: "custom-tile",
      MAP_TILE_URL: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      LEARNING_COURSE_PROVIDER: "webhook",
      LEARNING_COURSE_WEBHOOK_URL: `${providerBase}/learning/courses`,
      LEARNING_CERTIFICATE_PROVIDER: "webhook",
      LEARNING_CERTIFICATE_WEBHOOK_URL: `${providerBase}/learning/certificates`,
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
      HEALTH_TELEHEALTH_PROVIDER: "webhook",
      HEALTH_NOTIFICATION_PROVIDER: "webhook",
      HEALTH_EHR_PROVIDER: "webhook",
      HEALTH_TELEHEALTH_WEBHOOK_URL: `${providerBase}/health/telehealth`,
      HEALTH_NOTIFICATION_WEBHOOK_URL: `${providerBase}/health/notifications`,
      HEALTH_EHR_WEBHOOK_URL: `${providerBase}/health/ehr`,
      TRADE_PAYMENT_PROVIDER: "webhook",
      TRADE_LOGISTICS_PROVIDER: "webhook",
      TRADE_MARKET_PROVIDER: "webhook",
      DRONE_PROVIDER: "webhook",
      TRADE_PAYMENT_WEBHOOK_URL: `${providerBase}/trade/payments`,
      TRADE_LOGISTICS_WEBHOOK_URL: `${providerBase}/trade/logistics`,
      TRADE_MARKET_WEBHOOK_URL: `${providerBase}/trade/market`,
      DRONE_WEBHOOK_URL: `${providerBase}/field/drones`
    },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitFor(`${providerBase}/healthz`);
    await waitFor(`${appBase}/api/healthz`);
    await call(appBase, "/api/login", { email: "demo@agrinexus.org", password: "Prototype2026!" });
    const ai = await call(appBase, "/api/ai/run", { type: "command" });
    assert(ai.profile.aiProvider === "local-ai-webhook");
    await call(appBase, "/api/voice/transcribe", { transcript: "run workforce command", language: "en" });
    await call(appBase, "/api/voice/speak", { text: "Workforce command ready", language: "en" });
    await call(appBase, "/api/translate", { text: "Open care plan", targetLanguage: "fr", context: "smoke" });
    for (const providerId of ["learning-courses", "learning-certificates", "workforce-jobs", "workforce-calendar", "workforce-shifts", "health-ehr", "trade-payments", "field-drones", "translation", "auth-users", "auth-password-reset"]) {
      await call(appBase, "/api/integrations/test", { providerId });
    }
    await wait(700);
    const events = await call(providerBase, "/events");
    assert(events.events.some(event => event.providerId === "local-ai"));
    assert(events.events.some(event => event.providerId === "learning-courses"));
    assert(events.events.some(event => event.providerId === "learning-certificates"));
    assert(events.events.some(event => event.providerId === "workforce-jobs"));
    assert(events.events.some(event => event.providerId === "workforce-calendar"));
    assert(events.events.some(event => event.providerId === "workforce-shifts"));
    assert(events.events.some(event => event.providerId === "health-ehr"));
    assert(events.events.some(event => event.providerId === "trade-payments"));
    assert(events.events.some(event => event.providerId === "field-drones"));
    assert(events.events.some(event => event.providerId === "voice-stt"));
    assert(events.events.some(event => event.providerId === "voice-tts"));
    assert(events.events.some(event => event.providerId === "translation"));
    assert(events.events.some(event => event.providerId === "auth-users"));
    assert(events.events.some(event => event.providerId === "auth-password-reset"));
    console.log("Provider engines smoke test passed");
  } finally {
    app.kill();
    provider.kill();
    fs.writeFileSync(dbPath, dbSnapshot);
    if (eventsSnapshot === null) {
      if (fs.existsSync(eventsPath)) fs.unlinkSync(eventsPath);
    } else {
      fs.writeFileSync(eventsPath, eventsSnapshot);
    }
  }
})().catch(error => {
  fs.writeFileSync(dbPath, dbSnapshot);
  if (eventsSnapshot === null) {
    if (fs.existsSync(eventsPath)) fs.unlinkSync(eventsPath);
  } else {
    fs.writeFileSync(eventsPath, eventsSnapshot);
  }
  console.error(error.message);
  process.exit(1);
});
