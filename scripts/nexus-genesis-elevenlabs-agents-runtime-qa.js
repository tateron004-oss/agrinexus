const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const sw = read("public/sw.js");
const index = read("public/index.html");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, needle, label) {
  assert(source.includes(needle), `${label} missing: ${needle}`);
}

function notIncludes(source, needle, label) {
  assert(!source.includes(needle), `${label} must not include: ${needle}`);
}

[
  "nexus-behavior-444",
].forEach(marker => {
  includes(server, marker, `server marker ${marker}`);
  includes(app, marker, `app marker ${marker}`);
  includes(sw, marker, `service worker marker ${marker}`);
  includes(index, marker, `index marker ${marker}`);
});
[
  "agrinexus-pwa-v389"
].forEach(marker => {
  includes(server, marker, `server marker ${marker}`);
  includes(app, marker, `app marker ${marker}`);
  includes(sw, marker, `service worker marker ${marker}`);
});
includes(app, "nexus-genesis-voice-runtime-v444", "Genesis voice runtime cache marker");

[
  "NEXUS_GENESIS_ELEVENLABS_RUNTIME_VERSION",
  "NEXUS_GENESIS_VOICE_RUNTIME_VALUES = new Set([\"elevenlabs\", \"realtime\", \"legacy\", \"disabled\"])",
  "function nexusElevenLabsRuntimeStatus",
  "function createElevenLabsConversationSession",
  "ELEVENLABS_API_KEY",
  "ELEVENLABS_AGENT_ID",
  "NEXUS_ELEVENLABS_AGENT_ID",
  "/api/voice/elevenlabs/status",
  "/api/voice/elevenlabs/session",
  "/api/voice/elevenlabs/tool",
  "dispatchNexusElevenLabsTool",
  "Nexus ElevenLabs Agents tool dispatch",
  "get-signed-url?agent_id=",
  "\"xi-api-key\": process.env.ELEVENLABS_API_KEY",
  "noSecretValues: true",
  "soleActiveRuntime",
  "openAiRealtimeRollbackOnly"
].forEach(needle => includes(server, needle, `server ElevenLabs contract ${needle}`));

[
  "function elevenLabsVoiceSupported",
  "function loadElevenLabsVoiceStatus",
  "function startElevenLabsVoiceSession",
  "function stopElevenLabsVoiceSession",
  "function encodeElevenLabsPcm16",
  "new WebSocket(sessionPayload.signedUrl)",
  "let pendingStream = null;",
  "let pendingAudioContext = null;",
  "pendingStream?.getTracks?.().forEach(track => track.stop())",
  "pendingAudioContext?.close?.()",
  "conversation_initiation_client_data",
  "user_audio_chunk",
  "client_tool_result",
  "client_tool_call",
  "agent_response",
  "user_transcript",
  "audio_base_64",
  "/api/voice/elevenlabs/session",
  "/api/voice/elevenlabs/tool",
  "genesisVoiceConversationActive",
  "stopRealtimeVoiceSession(\"OpenAI Realtime disabled for ElevenLabs acceptance.\")",
  "stopNexusAudioFallbackRecorder(\"elevenlabs-selected\")",
  "stopNexusVoicePermissionStream(\"elevenlabs-selected\")"
].forEach(needle => includes(app, needle, `client ElevenLabs contract ${needle}`));

includes(server, "const requested = String(env.NEXUS_GENESIS_VOICE_RUNTIME || \"elevenlabs\")", "ElevenLabs default runtime");
includes(server, "function genesisRealtimeRollbackEnabled", "Realtime rollback gate");
includes(server, "OpenAI Realtime is disabled after the production gate failure", "Realtime disabled response");
includes(server, "NEXUS_GENESIS_REALTIME_ROLLBACK_ENABLED", "Realtime rollback env guard");
includes(app, "const elevenLabsStarted = await startElevenLabsVoiceSession();", "Genesis startup calls ElevenLabs first");
includes(app, "ElevenLabs Agents voice did not initialize and fallback runtimes are blocked by server policy.", "blocked fallback message");
notIncludes(app, "process.env.ELEVENLABS_API_KEY", "ElevenLabs API key in browser");
notIncludes(app, "xi-api-key", "ElevenLabs secret header in browser");
notIncludes(app, "localStorage.getItem(\"agrinexusRealtimeVoice\")", "local Realtime selector");

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
  build: "nexus-behavior-444",
  cache: "agrinexus-pwa-v389",
  noSecretValues: true
}, null, 2));
