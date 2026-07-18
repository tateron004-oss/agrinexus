const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");

const requirements = [
  ["Realtime status endpoint", server.includes("/api/voice/realtime/status") && server.includes("nexusRealtimeRuntimeStatus")],
  ["Realtime SDP endpoint", server.includes("/api/voice/realtime/call") && server.includes("application/sdp") && server.includes("readRawBody")],
  ["OpenAI Realtime calls API", server.includes("https://api.openai.com/v1/realtime/calls") && server.includes("FormData")],
  ["Server-side OpenAI key only", server.includes("Authorization: `Bearer ${process.env.OPENAI_API_KEY}`") && !app.includes("Authorization: `Bearer ${process.env.OPENAI_API_KEY}`") && !app.includes("process.env.OPENAI_API_KEY")],
  ["Safety identifier", server.includes("OpenAI-Safety-Identifier") && server.includes("createHash(\"sha256\")")],
  ["Realtime model and voice env", server.includes("OPENAI_REALTIME_MODEL") && server.includes("gpt-realtime") && server.includes("NEXUS_REALTIME_VOICE")],
  ["Realtime tool-capable instructions", server.includes("Ordinary conversation remains conversation") && server.includes("Use tools only when a real Nexus capability is needed") && server.includes("Never claim an action completed")],
  ["Browser WebRTC support", app.includes("function realtimeVoiceSupported") && app.includes("navigator.mediaDevices?.getUserMedia")],
  ["Browser realtime session uses Agents SDK", app.includes("async function startOpenAiAgentsRealtimeVoiceSession") && app.includes("nexus-openai-realtime-agent.bundle.mjs") && app.includes("requestNexusOpenAiRealtimeSession")],
  ["Direct SDP browser startup disabled", app.includes("OpenAI Realtime direct SDP startup is disabled") && !app.includes("createDataChannel(\"oai-events\")")],
  ["Bundled Realtime SDK includes WebRTC session", fs.readFileSync(path.join(root, "public", "vendor", "nexus-openai-realtime-agent.bundle.mjs"), "utf8").includes("OpenAIRealtimeWebRTC") && fs.readFileSync(path.join(root, "public", "vendor", "nexus-openai-realtime-agent.bundle.mjs"), "utf8").includes("RealtimeSession")],
  ["Realtime event handling", app.includes("function handleOpenAiAgentsRealtimeEvent") && app.includes("input_audio_buffer.speech_started") && app.includes("audio_stopped")],
  ["Realtime rollback-only after production failure", server.includes("function genesisRealtimeRollbackEnabled") && server.includes("NEXUS_GENESIS_REALTIME_ROLLBACK_ENABLED") && server.includes("OpenAI Realtime is disabled after the production gate failure")],
  ["Supervisor owns voice startup before provider fallback", app.includes("nexusGenesisConversationSupervisor") && app.includes("createGenesisConversationSupervisor") && app.includes("supervisor.start(options.source || \"start-voice-listening\")")],
  ["ElevenLabs is a managed candidate adapter", app.includes("startElevenLabsVoiceSession({ managedRuntime: true })") && app.includes("factory.ElevenLabsVoiceAdapter")],
  ["Realtime stop path", app.includes("function stopRealtimeVoiceSession") && app.includes("Realtime voice stopped")],
  ["Realtime tool dispatch path", server.includes("/api/voice/realtime/tool") && app.includes("dispatchRealtimeToolCall")],
  ["Realtime status does not expose permanent key", server.includes("noPermanentKeyInBrowser: true") && !app.includes("Authorization: `Bearer ${process.env.OPENAI_API_KEY}`") && !app.includes("process.env.OPENAI_API_KEY")]
];

const missing = requirements.filter(([, passed]) => !passed).map(([name]) => name);
assert.deepStrictEqual(missing, [], `Missing realtime voice provider requirements: ${missing.join(", ")}`);

console.log("Realtime voice provider QA passed");
for (const [name] of requirements) console.log(`- ${name}`);
