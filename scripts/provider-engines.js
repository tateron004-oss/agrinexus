const http = require("http");
const fs = require("fs");
const path = require("path");
const { loadEnvFile } = require("../foundation/src/runtime/env-file");

loadEnvFile();

const PORT = Number(process.env.PROVIDER_ENGINE_PORT || process.env.PORT || 4280);
const IS_HOSTED = process.env.NODE_ENV === "production" || Boolean(process.env.RENDER || process.env.RENDER_SERVICE_ID || process.env.RENDER_EXTERNAL_URL);
const HOST = process.env.PROVIDER_ENGINE_HOST || process.env.HOST || (IS_HOSTED ? "0.0.0.0" : "127.0.0.1");
const LOG_PATH = path.join(__dirname, "..", "provider-events.json");

const endpoints = {
  "/ai/responses": { module: "AI", keyEnv: "AI_PROVIDER_API_KEY" },
  "/learning/courses": { module: "Learning", keyEnv: "LEARNING_PROVIDER_API_KEY" },
  "/learning/certificates": { module: "Learning", keyEnv: "LEARNING_PROVIDER_API_KEY" },
  "/workforce/jobs": { module: "Workforce", keyEnv: "WORKFORCE_PROVIDER_API_KEY" },
  "/workforce/calendar": { module: "Workforce", keyEnv: "WORKFORCE_PROVIDER_API_KEY" },
  "/workforce/notifications": { module: "Workforce", keyEnv: "WORKFORCE_PROVIDER_API_KEY" },
  "/workforce/hris": { module: "Workforce", keyEnv: "WORKFORCE_PROVIDER_API_KEY" },
  "/workforce/shifts": { module: "Workforce", keyEnv: "WORKFORCE_PROVIDER_API_KEY" },
  "/health/telehealth": { module: "Healthcare", keyEnv: "HEALTH_PROVIDER_API_KEY" },
  "/health/notifications": { module: "Healthcare", keyEnv: "HEALTH_PROVIDER_API_KEY" },
  "/health/ehr": { module: "Healthcare", keyEnv: "HEALTH_PROVIDER_API_KEY" },
  "/trade/payments": { module: "AgriTrade", keyEnv: "TRADE_PROVIDER_API_KEY" },
  "/trade/logistics": { module: "AgriTrade", keyEnv: "TRADE_PROVIDER_API_KEY" },
  "/trade/market": { module: "AgriTrade", keyEnv: "TRADE_PROVIDER_API_KEY" },
  "/field/drones": { module: "AgriTrade", keyEnv: "DRONE_PROVIDER_API_KEY" },
  "/voice/transcribe": { module: "AI", keyEnv: "VOICE_PROVIDER_API_KEY" },
  "/voice/speak": { module: "AI", keyEnv: "VOICE_PROVIDER_API_KEY" },
  "/translate": { module: "AI", keyEnv: "TRANSLATION_PROVIDER_API_KEY" },
  "/auth/users": { module: "Platform", keyEnv: "AUTH_PROVIDER_API_KEY" },
  "/auth/password-reset": { module: "Platform", keyEnv: "AUTH_PROVIDER_API_KEY" },
  "/communications/email": { module: "Platform", keyEnv: "COMMUNICATION_PROVIDER_API_KEY" },
  "/communications/sms": { module: "Platform", keyEnv: "COMMUNICATION_PROVIDER_API_KEY" },
  "/communications/whatsapp": { module: "Platform", keyEnv: "COMMUNICATION_PROVIDER_API_KEY" },
  "/billing/subscriptions": { module: "Platform", keyEnv: "BILLING_PROVIDER_API_KEY" }
};

function readEvents() {
  if (!fs.existsSync(LOG_PATH)) return [];
  return JSON.parse(fs.readFileSync(LOG_PATH, "utf8"));
}

function writeEvent(event) {
  const events = readEvents();
  events.unshift(event);
  fs.writeFileSync(LOG_PATH, JSON.stringify(events.slice(0, 500), null, 2) + "\n");
}

function aiResponse(payload) {
  const type = payload.type || "command";
  const country = payload.context?.country?.name || "the active country";
  const route = payload.context?.route?.name || "the active route";
  const checkpoint = payload.context?.activeCheckpoint || "the active checkpoint";
  const responses = {
    command: `Local AI engine synchronized learning, workforce, health, trade, and route activity for ${country}. Keep operators focused on ${checkpoint}.`,
    copilot: `Local AI copilot recommends the next best action across learning, workforce, health, trade, and provider evidence for ${country}.`,
    tutor: `Local AI tutor recommends continuing the active lesson, then completing the quiz and certificate path tied to workforce readiness.`,
    quizgen: `Local AI quiz builder generated operator checks for lesson comprehension, evidence logging, and safe workflow handoff.`,
    "workforce-coach": `Local AI workforce coach recommends reviewing readiness gaps, preparing interview notes, and matching the learner to the strongest role path.`,
    "interview-prep": `Local AI interview prep recommends a concise readiness story using certificates, completed lessons, and shift reliability.`,
    triage: `Local AI triage assistant recommends checking risk, heat, queue status, and representative coverage before care-plan approval.`,
    "trade-advisor": `Local AI trade advisor recommends reviewing buyer interest, route checkpoint status, wallet activity, and provider evidence before advancing trade work.`,
    route: `Local AI route engine recommends monitoring ${checkpoint} on ${route}, then validating logistics events against provider deliveries before advancing the route.`,
    price: `Local AI market engine recommends staged pricing review for ${country}, with buyer demand checked before wallet settlement.`,
    careplan: `Local AI care engine recommends a representative review for ${country}, with EHR sync and notification confirmation before closing the case.`,
    inspector: `Local AI map inspector reviewed ${route} and confirms ${checkpoint} is the active operational focus.`
  };
  return {
    id: `local-ai-${Date.now()}`,
    model: "agrinexus-local-ai",
    text: responses[type] || responses.command
  };
}

function send(res, status, body) {
  res.writeHead(status, { "content-type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => {
      body += chunk;
      if (body.length > 1_000_000) reject(new Error("Payload too large"));
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
  });
}

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "GET" && req.url === "/healthz") {
      return send(res, 200, { ok: true, service: "agrinexus-provider-engines", endpoints: Object.keys(endpoints).length });
    }
    if (req.method === "GET" && req.url === "/events") {
      return send(res, 200, { ok: true, events: readEvents() });
    }

    const endpoint = endpoints[req.url];
    if (!endpoint || req.method !== "POST") return send(res, 404, { error: "Provider endpoint not found" });

    const expected = process.env[endpoint.keyEnv] || "";
    const actual = (req.headers.authorization || "").replace(/^Bearer\s+/i, "");
    if (!expected || actual !== expected) return send(res, 401, { error: "Invalid provider credential" });

    const payload = await readBody(req);
    if (req.url === "/ai/responses") {
      const response = aiResponse(payload);
      writeEvent({
        id: response.id,
        endpoint: req.url,
        module: endpoint.module,
        action: `ai.${payload.type || "command"}`,
        providerId: "local-ai",
        detail: response.text,
        metadata: { model: response.model },
        receivedAt: new Date().toISOString()
      });
      return send(res, 200, response);
    }
    if (req.url === "/voice/transcribe") {
      const transcript = payload.transcript || payload.text || "Voice command captured by provider engine.";
      writeEvent({
        id: `voice-stt-${Date.now()}`,
        endpoint: req.url,
        module: endpoint.module,
        action: "voice.speech-to-text",
        providerId: "voice-stt",
        detail: transcript,
        metadata: { language: payload.language || "en" },
        receivedAt: new Date().toISOString()
      });
      return send(res, 200, { ok: true, transcript, provider: "local-voice-stt" });
    }
    if (req.url === "/voice/speak") {
      const text = payload.text || "Voice response ready.";
      writeEvent({
        id: `voice-tts-${Date.now()}`,
        endpoint: req.url,
        module: endpoint.module,
        action: "voice.text-to-speech",
        providerId: "voice-tts",
        detail: text,
        metadata: { language: payload.language || "en" },
        receivedAt: new Date().toISOString()
      });
      return send(res, 200, { ok: true, text, audioUrl: null, provider: "local-voice-tts" });
    }
    if (req.url === "/translate") {
      const language = payload.targetLanguage || "en";
      const text = payload.text || "";
      const translatedText = language === "en" ? text : `[${language.toUpperCase()}] ${text}`;
      writeEvent({
        id: `translation-${Date.now()}`,
        endpoint: req.url,
        module: endpoint.module,
        action: "translation.dynamic",
        providerId: "translation",
        detail: `Translated content to ${language}.`,
        metadata: { sourceLanguage: payload.sourceLanguage || "en", targetLanguage: language },
        receivedAt: new Date().toISOString()
      });
      return send(res, 200, { ok: true, translatedText, provider: "local-translation" });
    }
    if (req.url === "/auth/users" || req.url === "/auth/password-reset") {
      writeEvent({
        id: `auth-${Date.now()}`,
        endpoint: req.url,
        module: endpoint.module,
        action: req.url === "/auth/users" ? "auth.user_event" : "auth.password_reset",
        providerId: req.url === "/auth/users" ? "auth-users" : "auth-password-reset",
        detail: payload.detail || "Auth provider event accepted.",
        metadata: payload.metadata || {},
        receivedAt: new Date().toISOString()
      });
      return send(res, 200, { ok: true, accepted: true, provider: "local-auth" });
    }
    if (req.url.startsWith("/communications/")) {
      writeEvent({
        id: `communications-${Date.now()}`,
        endpoint: req.url,
        module: endpoint.module,
        action: payload.action || "communications.message_sent",
        providerId: payload.providerId || req.url.replace("/communications/", ""),
        detail: payload.detail || "Communication provider event accepted.",
        metadata: payload.metadata || {},
        receivedAt: new Date().toISOString()
      });
      return send(res, 200, { ok: true, accepted: true, provider: "local-communications" });
    }
    if (req.url === "/trade/logistics") {
      const route = payload.route || {};
      const order = payload.order || {};
      const checkpoints = route.checkpoints || [];
      const points = route.points || [];
      const checkpoint = order.checkpoint || checkpoints[0] || "Pickup";
      const index = Math.max(0, checkpoints.findIndex(item => item === checkpoint));
      const point = points[Math.min(index < 0 ? 0 : index, Math.max(0, points.length - 1))] || [0, 0];
      const remaining = Math.max(0, checkpoints.length - (index + 1));
      const tracking = {
        provider: "agrinexus-provider-engine-logistics",
        carrier: process.env.LOGISTICS_TEST_CARRIER || "AgriNexus Logistics Bridge",
        trackingNumber: order.trackingNumber || order.orderNumber || `AGX-${Date.now()}`,
        status: order.stage || "Tracking",
        currentLocation: checkpoint,
        latitude: point[0],
        longitude: point[1],
        eta: remaining ? `${remaining * 5 + 3}-${remaining * 5 + 7} hrs` : "Arriving now",
        lastEvent: `${order.orderNumber || "Shipment"} tracking refreshed at ${checkpoint}.`,
        events: [
          { label: "Tracking refreshed", detail: `${checkpoint} confirmed by logistics bridge.`, createdAt: new Date().toISOString() },
          { label: order.stage || "Tracking", detail: route.name || "Active route", createdAt: new Date().toISOString() }
        ],
        updatedAt: new Date().toISOString()
      };
      writeEvent({
        id: `logistics-${Date.now()}`,
        endpoint: req.url,
        module: endpoint.module,
        action: payload.action || "logistics.tracking_status",
        providerId: "trade-logistics",
        detail: tracking.lastEvent,
        metadata: { tracking },
        receivedAt: new Date().toISOString()
      });
      return send(res, 200, { ok: true, accepted: true, provider: tracking.provider, tracking });
    }
    if (req.url === "/billing/subscriptions") {
      writeEvent({
        id: `billing-${Date.now()}`,
        endpoint: req.url,
        module: endpoint.module,
        action: payload.action || "billing.checkout_requested",
        providerId: "billing-subscriptions",
        detail: payload.detail || "Billing subscription event accepted.",
        metadata: payload.metadata || {},
        receivedAt: new Date().toISOString()
      });
      return send(res, 200, { ok: true, accepted: true, checkoutUrl: process.env.BILLING_CHECKOUT_URL || null, provider: "local-billing" });
    }

    const event = {
      id: payload.id || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      endpoint: req.url,
      module: endpoint.module,
      action: payload.action || "unknown",
      providerId: payload.providerId || null,
      detail: payload.detail || "",
      metadata: payload.metadata || {},
      receivedAt: new Date().toISOString()
    };
    writeEvent(event);
    return send(res, 200, { ok: true, accepted: true, eventId: event.id });
  } catch (error) {
    return send(res, 500, { error: error.message || "Provider engine error" });
  }
});

server.on("error", error => {
  console.error(`AgriNexus provider engines failed: ${error.message}`);
  process.exit(1);
});

server.listen(PORT, HOST, () => {
  console.log(`AgriNexus provider engines running at http://${HOST}:${PORT}`);
});
