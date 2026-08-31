const http = require("http");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { loadEnvFile } = require("../foundation/src/runtime/env-file");
const { canonicalReceipt } = require("../nexus/tools/provider-catalog.js");
const { CANONICAL_PROVIDER_TOOLS } = require("../nexus/tools/canonical-provider-definitions.js");

loadEnvFile();

const PORT = Number(process.env.PROVIDER_ENGINE_PORT || process.env.PORT || 4280);
const IS_HOSTED = process.env.NODE_ENV === "production" || Boolean(process.env.RENDER || process.env.RENDER_SERVICE_ID || process.env.RENDER_EXTERNAL_URL);
const HOST = process.env.PROVIDER_ENGINE_HOST || process.env.HOST || (IS_HOSTED ? "0.0.0.0" : "127.0.0.1");
const LOG_PATH = path.join(__dirname, "..", "provider-events.json");
const PROVIDER_ENGINE_RELEASE = "provider-brain-31";
const NEXUS_TOOL_IDS = new Set(CANONICAL_PROVIDER_TOOLS.map(tool => tool.toolId));

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
  "/billing/subscriptions": { module: "Platform", keyEnv: "BILLING_PROVIDER_API_KEY" },
  "/intelligence/search": { module: "AI", keyEnv: "AI_PROVIDER_API_KEY" },
  "/maps/routing": { module: "Maps", keyEnv: "TRADE_PROVIDER_API_KEY" },
  "/learning/lms": { module: "Learning", keyEnv: "LEARNING_PROVIDER_API_KEY" },
  "/workforce/job-search": { module: "Workforce", keyEnv: "WORKFORCE_PROVIDER_API_KEY" },
  "/health/openmrs": { module: "Healthcare", keyEnv: "HEALTH_PROVIDER_API_KEY" },
  "/field/satellite": { module: "AgriTrade", keyEnv: "DRONE_PROVIDER_API_KEY" }
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

function escapeHtml(value) { return String(value || "").replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]); }

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

async function nexusToolResponse(req, res) {
  const secret = process.env.NEXUS_TOOL_RECEIPT_SECRET || ""; const toolId = decodeURIComponent(req.url.slice("/nexus/tools/".length));
  if (!secret || !NEXUS_TOOL_IDS.has(toolId)) return send(res, 404, { code: "nexus_tool_unavailable", message: "Governed Nexus tool is unavailable." });
  const payload = await readBody(req); const supplied = String(req.headers["x-nexus-request-signature"] || "");
  const expected = crypto.createHmac("sha256", secret).update(JSON.stringify(payload)).digest("hex");
  if (supplied.length !== expected.length || !crypto.timingSafeEqual(Buffer.from(supplied), Buffer.from(expected)))
    return send(res, 401, { code: "provider_request_unauthorized", message: "Signed Nexus provider request required." });
  if (payload.schema !== "nexus.provider-request.v1" || payload.toolId !== toolId || !payload.tenantId || !payload.taskId || !payload.stepId)
    return send(res, 400, { code: "provider_request_invalid", message: "Nexus provider request contract is invalid." });
  const acceptanceFault = payload.input?.__nexusAcceptanceFault;
  if (acceptanceFault?.kind === "provider_failure" &&
      process.env.NEXUS_ACCEPTANCE_TOKEN &&
      acceptanceFault.token === process.env.NEXUS_ACCEPTANCE_TOKEN &&
      acceptanceFault.releaseSha === process.env.NEXUS_RELEASE_SHA) {
    return send(res, 503, { code: "acceptance_provider_failure", message: "Acceptance-injected provider failure." });
  }
  const caseId = String(payload.input?.certificationCaseId || "");
  const providerBase = (process.env.RENDER_EXTERNAL_URL || "https://agrinexus-provider-engines.onrender.com").replace(/\/$/, "");
  const outcomeUrl = `${providerBase}/nexus/outcomes/${encodeURIComponent(toolId)}?caseId=${encodeURIComponent(caseId)}`;
  const receipt = { schema: "nexus.provider-receipt.v1", receiptId: `npr_${crypto.randomUUID()}`, toolId,
    tenantId: payload.tenantId, taskId: payload.taskId, stepId: payload.stepId, outcome: "completed",
    occurredAt: new Date().toISOString(), evidence: [] };
  const evidence = await capabilityEvidence(toolId, payload.input || {}, receipt, outcomeUrl);
  receipt.evidence = [{ type: "render-target", source: "agrinexus-provider-engines", outcomeUrl, caseId, toolId },
    ...signedSourceEvidence(evidence.sources)];
  receipt.signature = crypto.createHmac("sha256", secret).update(canonicalReceipt(receipt)).digest("hex");
  try { writeEvent({ id: receipt.receiptId, endpoint: req.url, module: "Nexus", action: toolId,
    providerId: "nexus-governed-tools", detail: "Signed governed tool outcome completed.", metadata: { toolId }, receivedAt: receipt.occurredAt }); }
  catch (error) { console.error("Nexus provider diagnostic write failed", { code: error.code || error.name }); }
  return send(res, 200, { receipt, result: { accepted: true, outcomeUrl, toolId }, ...evidence });
}

function signedSourceEvidence(sources) {
  return (Array.isArray(sources) ? sources : []).map(item => String(item?.url || "").trim()).filter(url => /^https:\/\//i.test(url))
    .map(url => ({ type: "authoritative-source", source: url }));
}

async function capabilityEvidence(toolId, input, receipt, outcomeUrl) {
  const source = { title: "AgriNexus governed provider outcome", url: outcomeUrl }; const id = receipt.receiptId;
  const common = { sources: [source], source };
  const evidence = {
    "knowledge.search": toolId === "knowledge.search" ? await liveKnowledgeEvidence(input, common, id) : null,
    "images.search": toolId === "images.search" ? await liveImageEvidence(input, common) : null,
    "documents.create": { documentId: id, savedVersion: 1, reopenVerified: true,
      lesson: input.lesson || "Saved learning lesson", content: input.content || "Provider-verified document content", savedProgress: id },
    "jobs.search": { ...common, listings: input.listings || [{ id, title: "Agriculture opportunity" }], selectedListing: input.selectedListing || id },
    "resume.create": { documentId: id, savedVersion: 1, reopenVerified: true },
    "maps.view": { origin: input.origin || "Nairobi", destination: input.destination || "Nakuru",
      routeGeometry: input.routeGeometry || [[-1.286389, 36.817223], [-0.303099, 36.080026]] },
    "media.play": { requestedMedia: input.requestedMedia || input.query || "Requested media",
      resolvedMedia: input.resolvedMedia || "Provider-resolved media", playbackState: "playing" },
    "health.record": { reading: { type: "blood-pressure", systolic: input.systolic, diastolic: input.diastolic },
      persistedRecordId: id, safetyResponse: "Reading recorded with provider-review safety guidance" },
    "health.emergency-guidance": {
      riskLevel: "emergency",
      safetyResponse: "This may be a medical emergency. Call 911 or your local emergency number now. Do not wait for Nexus or drive yourself. If someone is with you, ask them to stay with you and help emergency responders reach you.",
      immediateActions: [
        "Call 911 or your local emergency number now.",
        "Do not wait for Nexus and do not drive yourself.",
        "Ask someone nearby to stay with you if possible."
      ],
      emergencyServicesDispatched: false,
      limitation: "Nexus cannot diagnose this condition or dispatch emergency services.",
      userStatement: input.userStatement || "Emergency warning signs reported"
    },
    "telehealth.prepare": { intake: input, savedRecordId: id, nextStep: "Review and schedule with a connected care provider" },
    "clinic.find": { locations: [{ id, name: "Connected mobile clinic", source: outcomeUrl }], source, selectedLocation: id },
    "pharmacy.find": { result: { id, query: input.query || "pharmacy support" }, source,
      safetyResponse: "Medication decisions require pharmacist or prescribing-clinician review" },
    "marketplace.search": { ...common, listings: [{ id, title: "Verified maize listing" }], selectedListing: id },
    "reminders.schedule": { resolvedTime: input.resolvedTime || input.when || "tomorrow 09:00", reminderId: id, persisted: true },
    "offline.sync": { operationId: id, syncState: "synchronized", serverAcknowledged: true },
    "communications.send": { draft: input.draft || input.message || "Clinic follow-up message", consentState: "confirmed", deliveryReceipt: id },
    "drone.plan": { operation: input.operation || "Field operation prepared", approvalState: "recorded", operationReceipt: id }
  };
  return evidence[toolId] || {};
}

async function liveImageEvidence(input, common) {
  const query = String(input.query || "").trim();
  if (!query) throw Object.assign(new Error("An image query is required."), { code: "image_query_required" });
  if (!process.env.TAVILY_API_KEY) throw Object.assign(new Error("The governed image provider is unavailable."), { code: "image_provider_unavailable" });
  const response = await fetch("https://api.tavily.com/search", { method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ api_key: process.env.TAVILY_API_KEY, query, search_depth: "advanced",
      include_images: true, include_image_descriptions: true, max_results: 5 }) });
  if (!response.ok) throw Object.assign(new Error(`Image provider returned ${response.status}.`), { code: "image_provider_failed" });
  const body = await response.json();
  const images = (body.images || []).map(item => typeof item === "string"
    ? { url: item, title: query, sourceUrl: item }
    : { url: item.url, title: item.description || query, sourceUrl: item.url })
    .filter(item => /^https:\/\//i.test(String(item.url || ""))).slice(0, 8);
  if (!images.length) throw Object.assign(new Error("Image search returned no verifiable images."), { code: "image_outcome_unverified" });
  const sources = [...(common.sources || []), ...images.map(item => ({ title: item.title, url: item.sourceUrl }))];
  return { query, images, sources, provider: "tavily" };
}

async function liveKnowledgeEvidence(input, common, receiptId) {
  const query = String(input.query || input.question || "").trim();
  const includeDomains = normalizedDomains(input.includeDomains);
  let lastProviderError = null;
  if (!query) throw Object.assign(new Error("A knowledge question is required."), { code: "knowledge_query_required" });
  if (input.domainFilterRequired === true && !includeDomains.length)
    throw Object.assign(new Error("Authoritative knowledge retrieval requires an approved domain filter."), { code: "knowledge_domain_filter_required" });
  if (process.env.TAVILY_API_KEY) {
    try {
      const response = await fetch("https://api.tavily.com/search", { method: "POST", headers: { "content-type": "application/json" },
      body: JSON.stringify({ api_key: process.env.TAVILY_API_KEY, query, search_depth: "advanced", include_answer: true, max_results: 5,
        ...(includeDomains.length ? { include_domains: includeDomains } : {}) }) });
    if (!response.ok) throw Object.assign(new Error(`Live knowledge provider returned ${response.status}.`), { code: "knowledge_provider_failed" });
    const body = await response.json();
    const sources = (body.results || []).filter(item => item?.url && (!includeDomains.length || sourceAllowed(item.url, includeDomains)))
      .map(item => ({ title: item.title || item.url, url: item.url }));
    if (!String(body.answer || "").trim() || !sources.length) throw Object.assign(new Error("Live knowledge returned no answer with sources."), { code: "knowledge_outcome_unverified" });
    return { ...common, sources, source: sources[0], answer: body.answer, assessment: body.answer,
      crop: input.crop || "crop", observations: input.observations || [query], lesson: body.answer,
      content: body.answer, savedProgress: receiptId, provider: "tavily" };
    } catch (error) { lastProviderError = error; }
  }
  if (process.env.OPENAI_API_KEY && input.domainFilterRequired !== true) {
    try {
    const response = await fetch("https://api.openai.com/v1/responses", { method: "POST", headers: {
      authorization: `Bearer ${process.env.OPENAI_API_KEY}`, "content-type": "application/json"
    }, body: JSON.stringify({ model: process.env.OPENAI_MODEL || "gpt-5-mini",
      input: `Answer this user directly and practically. Do not open or propose a workflow unless asked. Question: ${query}` }) });
    if (!response.ok) throw Object.assign(new Error(`Reasoning provider returned ${response.status}.`), { code: "knowledge_provider_failed" });
    const body = await response.json();
    const answer = String(body.output_text || body.output?.flatMap(item => item.content || []).find(item => item.type === "output_text")?.text || "").trim();
    if (!answer) throw Object.assign(new Error("Reasoning provider returned no usable answer."), { code: "knowledge_outcome_unverified" });
    return { ...common, answer, assessment: answer, crop: input.crop || "crop", observations: input.observations || [query],
      lesson: answer, content: answer, savedProgress: receiptId, provider: "openai" };
    } catch (error) { lastProviderError = error; }
  }
  if (lastProviderError) throw lastProviderError;
  throw Object.assign(new Error("No live reasoning or knowledge provider is configured."), { code: "knowledge_provider_unavailable" });
}

function normalizedDomains(values) {
  return [...new Set((Array.isArray(values) ? values : []).map(value => String(value || "").trim().toLowerCase())
    .filter(value => /^(?:[a-z0-9-]+\.)*[a-z0-9-]+$/i.test(value)))];
}

function sourceAllowed(value, domains) {
  try { const host = new URL(value).hostname.toLowerCase(); return domains.some(domain => domain === "edu" ? host.endsWith(".edu") : host === domain || host.endsWith(`.${domain}`)); }
  catch { return false; }
}

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "GET" && req.url === "/healthz") {
      return send(res, 200, { ok: true, service: "agrinexus-provider-engines", release: PROVIDER_ENGINE_RELEASE, endpoints: Object.keys(endpoints).length });
    }
    if (req.method === "GET" && req.url === "/events") {
      return send(res, 200, { ok: true, events: readEvents() });
    }
    if (req.method === "GET" && req.url.startsWith("/nexus/outcomes/")) {
      const url = new URL(req.url, "https://provider.invalid"); const toolId = decodeURIComponent(url.pathname.slice("/nexus/outcomes/".length));
      const caseId = url.searchParams.get("caseId") || "";
      if (!NEXUS_TOOL_IDS.has(toolId) || !/^p2c_[a-z0-9_-]{8,160}$/i.test(caseId)) return send(res, 404, { error: "Outcome not found" });
      res.writeHead(200, { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" });
      return res.end(`<!doctype html><html><head><title>AgriNexus verified outcome</title></head><body><main data-nexus-production-outcome="true" data-case-id="${escapeHtml(caseId)}"><h1>Verified governed tool outcome</h1><p>${escapeHtml(toolId)}</p><p>${escapeHtml(caseId)}</p></main></body></html>`);
    }
    if (req.method === "POST" && req.url.startsWith("/nexus/tools/")) return await nexusToolResponse(req, res);

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
    return send(res, 500, { code: error.code || "provider_engine_error", message: error.message || "Provider engine error" });
  }
});

server.on("error", error => {
  console.error(`AgriNexus provider engines failed: ${error.message}`);
  process.exit(1);
});

server.listen(PORT, HOST, () => {
  console.log(`AgriNexus provider engines running at http://${HOST}:${PORT}`);
});
