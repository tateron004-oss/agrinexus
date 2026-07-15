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
  ["Browser WebRTC support", app.includes("function realtimeVoiceSupported") && app.includes("RTCPeerConnection") && app.includes("navigator.mediaDevices?.getUserMedia")],
  ["Browser realtime session", app.includes("async function startRealtimeVoiceSession") && app.includes("createDataChannel(\"oai-events\")") && app.includes("/api/voice/realtime/call")],
  ["Realtime event handling", app.includes("function handleRealtimeVoiceEvent") && app.includes("input_audio_buffer.speech_started") && app.includes("response.audio.done")],
  ["Realtime server-selected before legacy fallback", app.includes("status.runtime !== \"realtime\"") && app.includes("legacy-fallback-selected") && app.includes("const realtimeStarted = await startRealtimeVoiceSession();")],
  ["Realtime stop path", app.includes("function stopRealtimeVoiceSession") && app.includes("Realtime voice stopped")],
  ["Realtime tool dispatch path", server.includes("/api/voice/realtime/tool") && app.includes("dispatchRealtimeToolCall")],
  ["Realtime status does not expose permanent key", server.includes("noPermanentKeyInBrowser: true") && !app.includes("Authorization: `Bearer ${process.env.OPENAI_API_KEY}`") && !app.includes("process.env.OPENAI_API_KEY")]
];

const missing = requirements.filter(([, passed]) => !passed).map(([name]) => name);
assert.deepStrictEqual(missing, [], `Missing realtime voice provider requirements: ${missing.join(", ")}`);

console.log("Realtime voice provider QA passed");
for (const [name] of requirements) console.log(`- ${name}`);
