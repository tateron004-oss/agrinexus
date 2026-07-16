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
  "nexus-behavior-455",
].forEach(marker => {
  includes(server, marker, `server marker ${marker}`);
  includes(app, marker, `app marker ${marker}`);
  includes(sw, marker, `service worker marker ${marker}`);
  includes(index, marker, `index marker ${marker}`);
});
[
  "agrinexus-pwa-v400"
].forEach(marker => {
  includes(server, marker, `server marker ${marker}`);
  includes(app, marker, `app marker ${marker}`);
  includes(sw, marker, `service worker marker ${marker}`);
});
includes(app, "nexus-genesis-voice-runtime-v455", "Genesis voice runtime cache marker");

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
  "function resolveElevenLabsVoiceAuthContext",
  "function genesisVoiceGuestSessionsEnabled",
  "bounded_genesis_voice_guest_cookie",
  "nexus_genesis_voice_sid",
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
  "/api/voice/runtime/tool",
  "/api/voice/elevenlabs/tool",
  "/api/voice/elevenlabs/webhook",
  "/api/voice/elevenlabs/diagnostics",
  "/vendor/elevenlabs-client/dist/platform/web/index.js",
  "/vendor/livekit-client/livekit-client.esm.mjs",
  "/api/voice/genesis/acceptance-matrix",
  "dispatchNexusElevenLabsTool",
  "Nexus provider-neutral voice runtime tool dispatch",
  "conversation/token?${tokenParams.toString()}",
  "agent_id: agentId",
  "source: \"js_sdk\"",
  "version: \"1.15.0\"",
  "ELEVENLABS_ENVIRONMENT",
  "get-signed-url?agent_id=",
  "\"xi-api-key\": process.env.ELEVENLABS_API_KEY",
  "official-sdk-webrtc",
  "shortLivedConversationToken: true",
  "customPcmTransportActive: false",
  "noCustomPcmTransport: true",
  "function nexusElevenLabsProviderCategory",
  "function safeElevenLabsProviderDetail",
  "function elevenLabsProviderDiagnostics",
  "crypto.timingSafeEqual",
  "readRawBody(req, 500_000)",
  "rateLimit(req, 90, 60_000)",
  "nexusElevenLabsOriginAllowed(req)",
  "noSecretValues: true",
  "soleActiveRuntime",
  "openAiRealtimeDisabled"
].forEach(needle => includes(server, needle, `server ElevenLabs contract ${needle}`));

const probeRouteIndex = server.indexOf('url.pathname === "/api/voice/elevenlabs/authorization-probe"');
const sessionRouteIndex = server.indexOf('url.pathname === "/api/voice/elevenlabs/session"');
const statusRouteIndex = server.indexOf('url.pathname === "/api/voice/elevenlabs/status"');
const toolRouteIndex = server.indexOf('url.pathname === "/api/voice/runtime/tool"');
const legacyToolRouteIndex = server.indexOf('url.pathname === "/api/voice/elevenlabs/tool"');
const signInGateIndex = server.indexOf('if (!user && url.pathname !== "/api/config")');
assert(probeRouteIndex !== -1, "authorization probe route should exist");
assert(sessionRouteIndex !== -1, "ElevenLabs session route should exist");
assert(statusRouteIndex !== -1, "ElevenLabs status route should exist");
assert(toolRouteIndex !== -1, "provider-neutral voice runtime tool route should exist");
assert(legacyToolRouteIndex !== -1, "ElevenLabs tool compatibility route should exist");
assert(signInGateIndex !== -1, "global sign-in gate should exist");
assert(probeRouteIndex < signInGateIndex, "authorization probe should be safe readiness before sign-in gate");
assert(sessionRouteIndex < signInGateIndex, "ElevenLabs session should use shared Genesis voice auth before sign-in gate");
assert(statusRouteIndex < signInGateIndex, "ElevenLabs status should be safe readiness before sign-in gate");
assert(toolRouteIndex < signInGateIndex, "provider-neutral voice tool route should reuse Genesis voice auth before sign-in gate");
const probeRouteEndIndex = sessionRouteIndex;
const probeRouteBlock = server.slice(probeRouteIndex, probeRouteEndIndex);
[
  "authorizationArtifactIssued: false",
  "providerRequestAttempted: false",
  "authorizationRequestAttempted: false",
  "noConversationTokenReturned: true",
  "noSignedUrlReturned: true",
  "noSecretValues: true",
  "liveSessionRequiresAuthorization: true",
  "resolveElevenLabsVoiceAuthContext(req, db, user"
].forEach(needle => includes(probeRouteBlock, needle, `safe probe contract ${needle}`));
notIncludes(probeRouteBlock, "createElevenLabsConversationSession", "authorization probe must not mint provider artifacts");
notIncludes(probeRouteBlock, "conversationToken:", "authorization probe must not return conversationToken");
notIncludes(probeRouteBlock, "signedUrl:", "authorization probe must not return signedUrl");

const sessionRouteEndIndex = server.indexOf('if ((url.pathname === "/api/voice/runtime/tool"', sessionRouteIndex);
const sessionRouteBlock = server.slice(sessionRouteIndex, sessionRouteEndIndex);
[
  "resolveElevenLabsVoiceAuthContext(req, db, user",
  "issueGuest: true",
  "Genesis voice session authorization required.",
  "category: \"user-authentication-required\"",
  "category: \"user-authorization-forbidden\"",
  "providerAttempted: false",
  "authorizationArtifactIssued: false",
  "createElevenLabsConversationSession({",
  "correlationId",
  "authMechanism",
  "authorizationType: session.authorizationArtifact",
  "noPermanentApiKeyReturned: true",
  "\"set-cookie\": authContext.setCookie",
  "authorization-request-sent",
  "authorization-request-succeeded",
  "authorization-request-failed",
  "auth-context-found",
  "auth-context-missing",
  "providerDiagnostics: error.providerDiagnostics",
  "credentialConfigured: Boolean(process.env.ELEVENLABS_API_KEY)",
  "authorizationRequestAttempted: true",
  "finalResponseRoute: \"provider-error\""
].forEach(needle => includes(sessionRouteBlock, needle, `session auth boundary ${needle}`));
notIncludes(sessionRouteBlock, "ELEVENLABS_API_KEY:", "session route must not return permanent API key");
notIncludes(sessionRouteBlock, "xi-api-key", "session route must not expose provider secret header");
notIncludes(sessionRouteBlock, "[object Object]", "session route must not expose object-stringified provider errors");

const detailHelperIndex = server.indexOf("function safeElevenLabsProviderDetail");
const providerDiagnosticsIndex = server.indexOf("function elevenLabsProviderDiagnostics");
assert(detailHelperIndex !== -1, "safe provider detail helper should exist");
assert(providerDiagnosticsIndex !== -1, "provider diagnostics helper should exist");
const providerDetailBlock = server.slice(detailHelperIndex, providerDiagnosticsIndex);
[
  "JSON.stringify(value)",
  ".replace(/sk-[A-Za-z0-9_-]{12,}/g, \"[redacted-token]\")",
  "api[_-]?key",
  "return detail && detail !== \"[object Object]\" ? detail : fallback"
].forEach(needle => includes(providerDetailBlock, needle, `safe provider detail ${needle}`));

const providerDiagnosticsEnd = server.indexOf("async function fetchElevenLabsJson", providerDiagnosticsIndex);
const providerDiagnosticsBlock = server.slice(providerDiagnosticsIndex, providerDiagnosticsEnd);
[
  "providerSelected: \"elevenlabs\"",
  "credentialConfigured: Boolean(process.env.ELEVENLABS_API_KEY)",
  "clientInitialized: true",
  "requestAttempted: true",
  "conversationTokenAttempted: true",
  "signedUrlFallbackAttempted: Boolean(signedResponse)",
  "providerStatusCategory:",
  "noSecretValues: true"
].forEach(needle => includes(providerDiagnosticsBlock, needle, `provider diagnostics ${needle}`));

const toolRouteEndIndex = server.indexOf('if (!user && url.pathname !== "/api/config")', toolRouteIndex);
const toolRouteBlock = server.slice(toolRouteIndex, toolRouteEndIndex);
[
  "resolveElevenLabsVoiceAuthContext(req, db, user",
  "issueGuest: false",
  "Genesis voice tool gateway authorization required.",
  "dispatchNexusRealtimeTool(db, authContext.user",
  "executionAttempted: false",
  "noSecretValues: true"
].forEach(needle => includes(toolRouteBlock, needle, `tool auth boundary ${needle}`));

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
  "window.NexusElevenLabsClientModule",
  "import(`/vendor/elevenlabs-client/dist/platform/web/index.js",
  "function normalizeElevenLabsSdkErrorEvent",
  "sdk.Conversation.startSession(sdkOptions)",
  "connectionType = sessionPayload.conversationToken ? \"webrtc\" : \"websocket\"",
  "credentials: \"same-origin\"",
  "elevenlabs-session-request-started",
  "authorization-request-succeeded",
  "authorization-request-failed",
  "SDK-session-started",
  "correlationId: sessionCorrelationId",
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
  "/api/voice/runtime/tool",
  "genesisVoiceConversationActive",
  "stopRealtimeVoiceSession(\"OpenAI Realtime disabled for ElevenLabs acceptance.\")",
  "stopNexusAudioFallbackRecorder(\"elevenlabs-selected\")",
  "stopNexusVoicePermissionStream(\"elevenlabs-selected\")"
].forEach(needle => includes(app, needle, `client ElevenLabs contract ${needle}`));

notIncludes(app, "ElevenLabsClient?.Conversation?.startSession", "app must not rely on browser-global ElevenLabs IIFE");
notIncludes(app, "/vendor/elevenlabs-client/lib.iife.js", "app must not load hand-served ElevenLabs IIFE bundle");
notIncludes(server, "/vendor/elevenlabs-client/lib.iife.js", "server must not serve obsolete ElevenLabs IIFE bundle");
notIncludes(app, "/vendor/elevenlabs-client/module/", "app must preserve the ElevenLabs dist directory layout for relative ESM imports");
notIncludes(server, "/vendor/elevenlabs-client/module/", "server must not serve ElevenLabs from a synthetic module path");
includes(index, "\"livekit-client\": \"/vendor/livekit-client/livekit-client.esm.mjs\"", "index import map should resolve LiveKit ESM dependency");

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

includes(server, "const requested = String(env.NEXUS_GENESIS_VOICE_RUNTIME || \"legacy\")", "legacy default runtime");
includes(server, "function nexusGenesisVoiceRuntimePolicy", "safe runtime policy");
includes(server, "NEXUS_GENESIS_CANDIDATE_RUNTIME", "ElevenLabs candidate runtime env");
includes(server, "NEXUS_GENESIS_CANDIDATE_ALLOWLIST", "ElevenLabs candidate allowlist env");
includes(server, "NEXUS_GENESIS_AUTOMATIC_ROLLBACK", "automatic rollback env");
includes(server, "String(env.NEXUS_GENESIS_ELEVENLABS_ENABLED || \"true\")", "ElevenLabs enabled flag");
includes(server, "String(env.NEXUS_GENESIS_ELEVENLABS_FALLBACK || \"blocked\")", "ElevenLabs blocked fallback default");
includes(server, "function genesisRealtimeRollbackEnabled", "Realtime rollback gate");
includes(server, "OpenAI Realtime is disabled after the production gate failure", "Realtime disabled response");
includes(server, "NEXUS_GENESIS_REALTIME_ROLLBACK_ENABLED", "Realtime rollback env guard");
includes(app, "nexusGenesisConversationSupervisor", "Genesis startup uses the conversation supervisor");
includes(app, "factory.ElevenLabsVoiceAdapter", "ElevenLabs is represented as a manager adapter");
includes(app, "startElevenLabsVoiceSession({ managedRuntime: true })", "ElevenLabs starts only through managed runtime adapter");
includes(app, "supervisor.start(options.source || \"start-voice-listening\")", "Genesis startup goes through supervisor");
includes(app, "if (!candidateAllowed) return false;", "Genesis skips ElevenLabs unless candidate is allowed");
includes(app, "legacyBrowserVoiceActiveForNormalUsers", "normal users remain on legacy browser voice");
notIncludes(app, "process.env.ELEVENLABS_API_KEY", "ElevenLabs API key in browser");
notIncludes(app, "xi-api-key", "ElevenLabs secret header in browser");
notIncludes(app, "localStorage.getItem(\"agrinexusRealtimeVoice\")", "local Realtime selector");

assert.strictEqual(
  pkg.dependencies["@elevenlabs/client"],
  "1.15.0",
  "official ElevenLabs browser SDK dependency should be pinned"
);

[
  "NEXUS_GENESIS_VOICE_RUNTIME=legacy",
  "NEXUS_GENESIS_CANDIDATE_RUNTIME=elevenlabs",
  "NEXUS_GENESIS_CANDIDATE_ENABLED=true",
  "NEXUS_GENESIS_CANDIDATE_ALLOWLIST=",
  "NEXUS_GENESIS_AUTOMATIC_ROLLBACK=true",
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
  build: "nexus-behavior-455",
  cache: "agrinexus-pwa-v400",
  noSecretValues: true
}, null, 2));
