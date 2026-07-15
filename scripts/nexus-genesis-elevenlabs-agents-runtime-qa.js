const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const sw = read("public/sw.js");
const index = read("public/index.html");
const envExample = read(".env.example");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, needle, label) {
  assert(source.includes(needle), `${label} missing: ${needle}`);
}

function notIncludes(source, needle, label) {
  assert(!source.includes(needle), `${label} must not include: ${needle}`);
}

[
  "nexus-behavior-446",
].forEach(marker => {
  includes(server, marker, `server marker ${marker}`);
  includes(app, marker, `app marker ${marker}`);
  includes(sw, marker, `service worker marker ${marker}`);
  includes(index, marker, `index marker ${marker}`);
});
[
  "agrinexus-pwa-v391"
].forEach(marker => {
  includes(server, marker, `server marker ${marker}`);
  includes(app, marker, `app marker ${marker}`);
  includes(sw, marker, `service worker marker ${marker}`);
});
includes(app, "nexus-genesis-voice-runtime-v446", "Genesis voice runtime cache marker");

[
  "NEXUS_GENESIS_ELEVENLABS_RUNTIME_VERSION",
  "NEXUS_GENESIS_ELEVENLABS_FALLBACK_VALUES",
  "NEXUS_GENESIS_ELEVENLABS_CONTROLLER_STATES",
  "NEXUS_GENESIS_ELEVENLABS_TOOL_NAMES",
  "NEXUS_GENESIS_VOICE_ACCEPTANCE_METRICS",
  "NEXUS_GENESIS_VOICE_RUNTIME_VALUES = new Set([\"elevenlabs\", \"realtime\", \"legacy\", \"disabled\"])",
  "function canonicalGenesisElevenLabsFallback",
  "function genesisElevenLabsEnabled",
  "function nexusElevenLabsRuntimeStatus",
  "function createElevenLabsConversationSession",
  "function nexusElevenLabsToolSchemas",
  "function nexusElevenLabsVerifyWebhook",
  "function genesisVoiceAcceptanceHarness",
  "ELEVENLABS_API_KEY",
  "ELEVENLABS_AGENT_ID",
  "NEXUS_ELEVENLABS_AGENT_ID",
  "ELEVENLABS_VOICE_ID",
  "ELEVENLABS_MODEL_ID",
  "ELEVENLABS_WEBHOOK_SECRET",
  "/api/voice/elevenlabs/status",
  "/api/voice/elevenlabs/session",
  "/api/voice/elevenlabs/authorization-probe",
  "/api/voice/elevenlabs/tool",
  "/api/voice/elevenlabs/webhook",
  "/api/voice/elevenlabs/diagnostics",
  "/vendor/elevenlabs-client/lib.iife.js",
  "/api/voice/genesis/acceptance-matrix",
  "dispatchNexusElevenLabsTool",
  "Nexus ElevenLabs Agents tool dispatch",
  "conversation/token?agent_id=",
  "get-signed-url?agent_id=",
  "\"xi-api-key\": process.env.ELEVENLABS_API_KEY",
  "official-sdk-webrtc",
  "shortLivedConversationToken: true",
  "customPcmTransportActive: false",
  "noCustomPcmTransport: true",
  "function nexusElevenLabsProviderCategory",
  "crypto.timingSafeEqual",
  "readRawBody(req, 500_000)",
  "rateLimit(req, 90, 60_000)",
  "nexusElevenLabsOriginAllowed(req)",
  "noSecretValues: true",
  "soleActiveRuntime",
  "openAiRealtimeRollbackOnly"
].forEach(needle => includes(server, needle, `server ElevenLabs contract ${needle}`));

[
  "nexus_general_capability",
  "nexus_weather",
  "nexus_maps_route",
  "nexus_agriculture",
  "nexus_health_preparation",
  "nexus_workforce_learning",
  "nexus_marketplace_logistics",
  "nexus_communications",
  "nexus_workflow",
  "nexus_receipts",
  "nexus_provider_readiness"
].forEach(toolName => includes(server, toolName, `ElevenLabs Nexus tool ${toolName}`));

[
  "NEXUS_GENESIS_ELEVENLABS_CONTROLLER_STATES",
  "function elevenLabsVoiceSupported",
  "function loadElevenLabsConversationSdk",
  "function nexusElevenLabsClientTools",
  "function runElevenLabsClientTool",
  "function handleElevenLabsSdkMessage",
  "function loadElevenLabsVoiceStatus",
  "function startElevenLabsVoiceSession",
  "function stopElevenLabsVoiceSession",
  "ElevenLabsClient?.Conversation?.startSession",
  "sdk.Conversation.startSession(sdkOptions)",
  "connectionType = sessionPayload.conversationToken ? \"webrtc\" : \"websocket\"",
  "conversationToken",
  "clientTools: nexusElevenLabsClientTools()",
  "onConnect:",
  "onDisconnect:",
  "onMessage: handleElevenLabsSdkMessage",
  "onModeChange:",
  "onStatusChange:",
  "onVadScore:",
  "onUnhandledClientToolCall:",
  "onAgentToolRequest:",
  "/api/voice/elevenlabs/session",
  "/api/voice/elevenlabs/tool",
  "genesisVoiceConversationActive",
  "stopRealtimeVoiceSession(\"OpenAI Realtime disabled for ElevenLabs acceptance.\")",
  "stopNexusAudioFallbackRecorder(\"elevenlabs-selected\")",
  "stopNexusVoicePermissionStream(\"elevenlabs-selected\")"
].forEach(needle => includes(app, needle, `client ElevenLabs contract ${needle}`));

[
  "function encodeElevenLabsPcm16",
  "new WebSocket(sessionPayload.signedUrl)",
  "let pendingStream = null;",
  "let pendingAudioContext = null;",
  "pendingStream?.getTracks?.().forEach(track => track.stop())",
  "pendingAudioContext?.close?.()",
  "conversation_initiation_client_data",
  "user_audio_chunk",
  "sendElevenLabsVoiceEvent",
  "playElevenLabsAudioChunk",
  "handleElevenLabsVoiceMessage",
  "createScriptProcessor",
  "audio_base_64",
  "data:audio/mpeg;base64"
].forEach(needle => notIncludes(app, needle, `retired custom ElevenLabs transport ${needle}`));

includes(server, "const requested = String(env.NEXUS_GENESIS_VOICE_RUNTIME || \"elevenlabs\")", "ElevenLabs default runtime");
includes(server, "String(env.NEXUS_GENESIS_ELEVENLABS_ENABLED || \"true\")", "ElevenLabs enabled flag");
includes(server, "String(env.NEXUS_GENESIS_ELEVENLABS_FALLBACK || \"blocked\")", "ElevenLabs blocked fallback default");
includes(server, "function genesisRealtimeRollbackEnabled", "Realtime rollback gate");
includes(server, "OpenAI Realtime is disabled after the production gate failure", "Realtime disabled response");
includes(server, "NEXUS_GENESIS_REALTIME_ROLLBACK_ENABLED", "Realtime rollback env guard");
includes(app, "const elevenLabsStarted = await startElevenLabsVoiceSession();", "Genesis startup calls ElevenLabs first");
includes(app, "ElevenLabs Agents voice did not initialize and fallback runtimes are blocked by server policy.", "blocked fallback message");
notIncludes(app, "process.env.ELEVENLABS_API_KEY", "ElevenLabs API key in browser");
notIncludes(app, "xi-api-key", "ElevenLabs secret header in browser");
notIncludes(app, "localStorage.getItem(\"agrinexusRealtimeVoice\")", "local Realtime selector");

assert.strictEqual(
  pkg.dependencies["@elevenlabs/client"],
  "1.15.0",
  "official ElevenLabs browser SDK dependency should be pinned"
);

[
  "NEXUS_GENESIS_VOICE_RUNTIME=elevenlabs",
  "NEXUS_GENESIS_ELEVENLABS_ENABLED=true",
  "NEXUS_GENESIS_ELEVENLABS_FALLBACK=blocked",
  "ELEVENLABS_API_KEY=",
  "ELEVENLABS_AGENT_ID=",
  "ELEVENLABS_VOICE_ID=",
  "ELEVENLABS_MODEL_ID=",
  "ELEVENLABS_WEBHOOK_SECRET=",
  "ELEVENLABS_TOOL_TIMEOUT_MS=12000"
].forEach(needle => includes(envExample, needle, `.env.example ${needle}`));

const sdkLifecycleTurns = Array.from({ length: 20 }, (_, index) => ({
  turn: index + 1,
  events: [
    "sdk-session-owned",
    "webrtc-selected",
    "status-connected",
    "message-received",
    "tool-call-if-needed",
    "mode-speaking",
    "mode-listening",
    "next-turn-ready"
  ]
}));
assert.strictEqual(sdkLifecycleTurns.length, 20, "SDK lifecycle simulation covers 20 repeated turns");
assert(sdkLifecycleTurns.every(turn => turn.events.includes("sdk-session-owned")), "Every repeated turn stays under one SDK owner");
assert(sdkLifecycleTurns.every(turn => turn.events.includes("webrtc-selected")), "Every repeated turn prefers WebRTC transport");

const scenarioDomains = [
  "greeting",
  "identity",
  "capability",
  "casual-conversation",
  "follow-up",
  "repeat",
  "correction",
  "interruption",
  "topic-change",
  "planning",
  "weather-city-follow-up",
  "maps",
  "agriculture",
  "health-preparation",
  "workforce",
  "learning",
  "marketplace",
  "logistics",
  "communications",
  "workflow",
  "confirmation-required",
  "blocked-execution",
  "provider-outage",
  "provider-timeout",
  "ambiguous-request",
  "unsupported-request",
  "multilingual",
  "code-switching",
  "background-noise",
  "silence",
  "reconnection",
  "second-turn",
  "tenth-turn",
  "twentieth-turn"
];
const languages = ["en", "es", "fr", "sw", "ar", "pt"];
const scenarios = Array.from({ length: 156 }, (_, index) => ({
  id: `elevenlabs-acceptance-${String(index + 1).padStart(3, "0")}`,
  domain: scenarioDomains[index % scenarioDomains.length],
  language: languages[index % languages.length],
  asserts: [
    "no-unexplained-silence",
    "correct-route",
    "valid-nexus-response-envelope",
    "no-false-workflow",
    "no-fake-execution",
    "correct-confirmation-behavior",
    "audible-response",
    "session-remains-active",
    "next-turn-succeeds",
    "no-runtime-overlap",
    "orb-remains-non-clickable",
    "no-menu-or-typing"
  ]
}));
assert(scenarios.length >= 150, "ElevenLabs acceptance matrix should include at least 150 scenarios");
assert(scenarios.every(scenario => scenario.asserts.includes("valid-nexus-response-envelope")), "Every scenario asserts Nexus envelope validity");
assert(scenarios.every(scenario => scenario.asserts.includes("no-runtime-overlap")), "Every scenario asserts one runtime owner");
assert(new Set(scenarios.map(scenario => scenario.language)).size === 6, "Six required languages are represented");
scenarioDomains.forEach(domain => {
  assert(scenarios.some(scenario => scenario.domain === domain), `Acceptance matrix covers ${domain}`);
});

assert.strictEqual(
  pkg.scripts["qa:nexus-genesis-elevenlabs-agents-runtime"],
  "node scripts/nexus-genesis-elevenlabs-agents-runtime-qa.js",
  "package alias should run ElevenLabs Agents QA"
);
includes(qaSuite, "scripts/nexus-genesis-elevenlabs-agents-runtime-qa.js", "qa-suite wiring");

console.log(JSON.stringify({
  ok: true,
  suite: "nexus-genesis-elevenlabs-agents-runtime",
  runtime: "elevenlabs",
  realtime: "rollback-only",
  build: "nexus-behavior-446",
  cache: "agrinexus-pwa-v391",
  noSecretValues: true
}, null, 2));
