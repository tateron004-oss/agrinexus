const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const net = require("node:net");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
let port = Number(process.env.NEXUS_SYSTEM_WIDE_INTEGRITY_QA_PORT || 0);
let base = "";
const tempDb = path.join(root, `tmp-nexus-system-wide-integrity-hardening-qa-db-${process.pid}-${Date.now()}.json`);
const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const swSource = fs.readFileSync(path.join(root, "public", "sw.js"), "utf8");
const indexSource = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
let cookie = "";

const VALID_STATUSES = new Set([
  "completed",
  "awaiting-information",
  "awaiting-confirmation",
  "blocked",
  "unavailable",
  "failed-truthfully"
]);

const FAILURE_CATEGORIES = [
  "input-not-received",
  "intent-unresolved",
  "capability-unavailable",
  "missing-information",
  "route-not-found",
  "invalid-response-contract",
  "empty-response",
  "provider-not-configured",
  "provider-authentication",
  "provider-rate-limited",
  "provider-timeout",
  "provider-unavailable",
  "provider-invalid-response",
  "workflow-not-required",
  "confirmation-required",
  "execution-not-authorized",
  "execution-failed",
  "execution-unverified",
  "client-parse-failed",
  "output-sanitization-empty",
  "tts-failed",
  "playback-rejected",
  "state-lost",
  "stale-build",
  "internal-error"
];

const matrix = [
  ...[
    "Nexus",
    "Hello Nexus.",
    "Nexus, can you hear me?",
    "Are you listening?",
    "Talk to me.",
    "What can you do?",
    "Tell me about yourself.",
    "How are you?",
    "Help me plan my day.",
    "Repeat what you just said.",
    "Correct that.",
    "I meant agriculture.",
    "What did I ask last?",
    "Can you explain simply?",
    "Say that again slowly.",
    "What is Nexus Genesis?",
    "What are your limits?",
    "Can you help safely?",
    "What should I do next?",
    "Stop listening."
  ].map(phrase => ({ phrase, group: "genesis-conversation", noWorkflow: true })),
  ...[
    "What is the weather?",
    "Stockton, CA",
    "What is the weather in Nairobi?",
    "What are current tomato blight practices?",
    "Find sources about hypertension RPM.",
    "Research youth employment training.",
    "What do you know about cold-chain logistics in Africa?",
    "Check market prices for maize.",
    "Find provider status.",
    "Show current agriculture weather."
  ].map(phrase => ({ phrase, group: "live-information" })),
  ...[
    "Open agriculture help.",
    "Help with crop support.",
    "My tomato leaves have spots.",
    "Plan a farm visit.",
    "Help with food security.",
    "Open irrigation support.",
    "Check pest disease support.",
    "Prepare harvest storage advice.",
    "Open livestock support.",
    "Help with post-harvest spoilage."
  ].map(phrase => ({ phrase, group: "agriculture-domain" })),
  ...[
    "Open AgriTrade.",
    "Prepare a marketplace inquiry.",
    "Find a buyer for tomatoes.",
    "Sell my crop.",
    "Contact a seller.",
    "Create an order.",
    "Pay for seeds.",
    "Review marketplace safety.",
    "Open vendor research.",
    "Check buyer readiness."
  ].map(phrase => ({ phrase, group: "marketplace-trade" })),
  ...[
    "Plan a route to a mobile clinic.",
    "Open maps.",
    "Route to the farm.",
    "Share my location.",
    "Start transportation request.",
    "Track shipment.",
    "Open logistics support.",
    "Prepare field visit route.",
    "Launch navigation.",
    "Find nearby clinic route."
  ].map(phrase => ({ phrase, group: "maps-logistics" })),
  ...[
    "Find workforce opportunities.",
    "Open jobs support.",
    "Find farm jobs.",
    "Open training support.",
    "Show agriculture training.",
    "Enroll me in a course.",
    "Help with literacy.",
    "Prepare a skills checklist.",
    "Find youth apprenticeship.",
    "Open learning and literacy."
  ].map(phrase => ({ phrase, group: "workforce-learning" })),
  ...[
    "Help with diabetes intake.",
    "Review my blood pressure.",
    "Start obesity support.",
    "Record RPM reading.",
    "Record RTM symptom.",
    "Open pharmacy support.",
    "Refill my prescription.",
    "Open telehealth intake.",
    "Schedule a provider appointment.",
    "Emergency help."
  ].map(phrase => ({ phrase, group: "health-care" })),
  ...[
    "Prepare an SMS.",
    "Prepare a WhatsApp message.",
    "Prepare an email.",
    "Prepare a phone call.",
    "Send the message now.",
    "Call the provider.",
    "Open Telegram prep.",
    "Message my buyer.",
    "Send pharmacy message.",
    "Start provider contact."
  ].map(phrase => ({ phrase, group: "communications-safety" })),
  ...[
    "Open drone operations.",
    "Launch drone flight.",
    "Prepare field evidence.",
    "Open receipts.",
    "Show history.",
    "Open offline queue.",
    "Work offline.",
    "Change language to Spanish.",
    "Change language to Swahili.",
    "Go home."
  ].map(phrase => ({ phrase, group: "platform-ops" })),
  ...[
    "Nexus, can you open a workflow for hello?",
    "Open should not mean workflow if I ask what open means.",
    "Start by telling me about yourself.",
    "Workflow is a word; do not open one.",
    "Plan created is not what I asked for.",
    "Can you hear the word pharmacy without opening it?",
    "I am just saying maps as an example.",
    "Do not send anything.",
    "Do not call anyone.",
    "Do not share my location."
  ].map(phrase => ({ phrase, group: "negative-no-false-workflow", noWorkflow: true }))
];

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

async function getAvailablePort() {
  if (port) return port;
  return new Promise((resolve, reject) => {
    const probe = net.createServer();
    probe.unref();
    probe.on("error", reject);
    probe.listen(0, "127.0.0.1", () => {
      const address = probe.address();
      const selected = Number(address && address.port);
      probe.close(() => resolve(selected));
    });
  });
}

async function waitForServer() {
  for (let index = 0; index < 100; index += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("System-wide integrity hardening QA server did not become reachable");
}

async function call(route, body) {
  let lastError;
  for (let attempt = 0; attempt < 8; attempt += 1) {
    try {
      const response = await fetch(`${base}${route}`, {
        method: body ? "POST" : "GET",
        headers: { "content-type": "application/json", cookie },
        body: body ? JSON.stringify(body) : undefined
      });
      const setCookie = response.headers.get("set-cookie");
      if (setCookie) cookie = setCookie.split(";")[0];
      const json = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(`${route}: ${json.error || response.statusText}`);
      return json;
    } catch (error) {
      lastError = error;
      const message = String(error?.cause?.code || error?.code || error?.message || "");
      if (!/ECONNRESET|ECONNREFUSED|fetch failed/i.test(message) || attempt === 7) {
        throw error;
      }
      await wait(250 + (attempt * 350));
    }
  }
  throw lastError;
}

function assertEnvelope(envelope, label, correlationId) {
  assert(envelope, `${label} must return nexusResponse`);
  assert.equal(envelope.contractVersion, "nexus-response-envelope.v1", `${label} contract version`);
  assert.equal(envelope.lifecycleVersion, "nexus-request-lifecycle.v1", `${label} lifecycle version`);
  assert.equal(envelope.ok, true, `${label} ok`);
  assert.equal(envelope.correlationId, correlationId, `${label} correlation ID`);
  assert.equal(typeof envelope.intent, "string", `${label} intent`);
  assert(envelope.intent.trim(), `${label} intent selected`);
  assert.equal(typeof envelope.capability, "string", `${label} capability`);
  assert(envelope.capability.trim(), `${label} capability selected`);
  assert.equal(envelope.route, "/api/agent/command", `${label} route`);
  assert(VALID_STATUSES.has(envelope.status), `${label} valid final status ${envelope.status}`);
  assert.equal(typeof envelope.response, "string", `${label} user-facing response type`);
  assert(envelope.response.trim().length > 0, `${label} user-facing response non-empty`);
  assert.equal(envelope.speak, true, `${label} output delivery selected`);
  assert.equal(typeof envelope.provider?.attempted, "boolean", `${label} provider attempted truthful`);
  assert.equal(typeof envelope.provider?.succeeded, "boolean", `${label} provider succeeded truthful`);
  assert.equal(typeof envelope.execution?.attempted, "boolean", `${label} execution attempted truthful`);
  assert.equal(typeof envelope.execution?.verified, "boolean", `${label} execution verified truthful`);
  assert.notEqual(envelope.execution?.verified, true, `${label} must not claim verified execution in safe QA`);
  if (envelope.status !== "completed") {
    assert(FAILURE_CATEGORIES.includes(envelope.blockedReason), `${label} blocked status must include canonical failure category`);
  }
  assert(Number(envelope.diagnostics?.sanitizedLength || 0) > 0, `${label} sanitized length`);
}

(async () => {
  assert(matrix.length >= 100, "matrix must cover at least 100 representative utterances");
  [
    "NEXUS_RESPONSE_CONTRACT_VERSION",
    "NEXUS_REQUEST_LIFECYCLE_VERSION",
    "NEXUS_FAILURE_CATEGORIES",
    "NEXUS_FINAL_STATUSES",
    "function normalizeNexusResponseEnvelope",
    "function updateNexusSessionContext",
    "state.nexusResponse = nexusResponse"
  ].forEach(token => assert(serverSource.includes(token), `server missing ${token}`));
  FAILURE_CATEGORIES.forEach(category => assert(serverSource.includes(category), `failure taxonomy missing ${category}`));
  [
    "const AGRINEXUS_BUILD_VERSION = \"nexus-behavior-466\"",
    "const AGRINEXUS_PWA_CACHE_VERSION = \"agrinexus-pwa-v411\"",
    "const NEXUS_GENESIS_VOICE_RUNTIME_VERSION = \"nexus-genesis-voice-runtime-v455\"",
    "payload?.nexusResponse || payload?.genesisResponse"
  ].forEach(token => assert(appSource.includes(token), `app missing ${token}`));
  [
    "const CACHE_NAME = \"agrinexus-pwa-v411\"",
    "const BUILD_VERSION = \"nexus-behavior-466\""
  ].forEach(token => assert(swSource.includes(token), `service worker missing ${token}`));
  [
    "/app.js?v=nexus-behavior-466",
    "/styles.css?v=nexus-behavior-466",
    "/manifest.webmanifest?v=nexus-behavior-466"
  ].forEach(token => assert(indexSource.includes(token), `index missing ${token}`));
  assert(appSource.includes("startVoiceListening({ source: \"genesis-home-permission-granted-auto-start\" })"), "Genesis mic auto-start must remain intact");
  assert(appSource.includes("voiceRecognition.start()"), "SpeechRecognition start must remain intact");
  assert(appSource.includes("resumeVoiceListeningAfterSpeech(playbackToken, interruptToken)"), "speech completion must still use proven resume function");

  port = await getAvailablePort();
  base = `http://127.0.0.1:${port}`;
  fs.copyFileSync(path.join(root, "db.json"), tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tempDb,
      OPENAI_API_KEY: "",
      PUBLIC_BASE_URL: base,
      NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "",
      NEXUS_WEATHER_PROVIDER_ENABLED: "",
      NEXUS_WEATHER_OPEN_METEO_PROVIDER_ENABLED: ""
    },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();
    await call("/api/login", { email: "admin@agrinexus.org", password: "Admin2026!" });
    const rows = [];
    for (let index = 0; index < matrix.length; index += 1) {
      const item = matrix[index];
      const correlationId = `gv-system-${String(index + 1).padStart(3, "0")}-${Date.now().toString(36)}`;
      const state = await call("/api/agent/command", {
        correlationId,
        command: item.phrase,
        inputMode: "voice",
        outputMode: "voice",
        conversational: true,
        mode: "user",
        targetLanguage: "en",
        note: "System-wide integrity hardening QA"
      });
      assertEnvelope(state.nexusResponse, item.phrase, correlationId);
      assert(state.genesisResponse?.response, `${item.phrase} must keep Genesis compatibility response`);
      assert.equal(state.genesisResponse.correlationId, correlationId, `${item.phrase} Genesis adapter correlation ID`);
      assert(state.profile?.agentMemory?.nexusSessionContext, `${item.phrase} must update bounded session context`);
      assert.equal(state.profile.agentMemory.nexusSessionContext.contractVersion, "nexus-response-envelope.v1", `${item.phrase} context contract version`);
      if (item.noWorkflow) {
        assert.notEqual(state.nexusResponse.workflow?.opened, true, `${item.phrase} must not open a workflow`);
        assert(!/workflow\.(created|opened)|plan\.created/i.test(state.nexusResponse.intent), `${item.phrase} must not false-route into workflow`);
      }
      rows.push({
        group: item.group,
        intent: state.nexusResponse.intent,
        capability: state.nexusResponse.capability,
        status: state.nexusResponse.status,
        providerAttempted: state.nexusResponse.provider.attempted,
        executionAttempted: state.nexusResponse.execution.attempted,
        workflowSelected: state.nexusResponse.workflow.selected
      });
    }
    const groups = [...new Set(rows.map(row => row.group))];
    assert(groups.length >= 10, "matrix must cover broad capability families");
    console.log(JSON.stringify({
      ok: true,
      suite: "nexus-system-wide-integrity-hardening",
      contractVersion: "nexus-response-envelope.v1",
      lifecycleVersion: "nexus-request-lifecycle.v1",
      totalCases: rows.length,
      groups,
      statuses: [...new Set(rows.map(row => row.status))],
      capabilities: [...new Set(rows.map(row => row.capability))],
      releaseGate: {
        invalidContracts: 0,
        silentResponses: 0,
        fakeExecutionClaims: 0,
        falseWorkflowActivationsInNegativeCases: 0,
        mixedBuildMarkers: 0
      }
    }, null, 2));
  } finally {
    server.kill();
    if (fs.existsSync(tempDb)) {
      try {
        fs.unlinkSync(tempDb);
      } catch {
        // Windows may briefly retain the file handle.
      }
    }
  }
})().catch(error => {
  console.error(error);
  process.exit(1);
});
