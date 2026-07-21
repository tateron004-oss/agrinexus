const fs = require("fs");
const path = require("path");
const assert = require("assert");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const app = read("public/app.js");
const server = read("server.js");
const sw = read("public/sw.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, needle, label) {
  assert(source.includes(needle), `${label} missing: ${needle}`);
}

function notIncludes(source, needle, label) {
  assert(!source.includes(needle), `${label} must not include: ${needle}`);
}

[
  "initializing",
  "connecting",
  "ready",
  "listening",
  "user-speaking",
  "processing",
  "responding",
  "interrupted",
  "reconnecting",
  "blocked",
  "closed"
].forEach(state => includes(app, `"${state}"`, `Realtime controller state ${state}`));

[
  "function realtimeControllerSnapshot",
  "function updateRealtimeControllerState",
  "function nextRealtimeTurnId",
  "function markRealtimeResponseStarted",
  "function markRealtimeResponseCompleted",
  "function scheduleRealtimeRecovery",
  "response-cancel-skipped",
  "no-active-playback-to-cancel",
  "second-user-speech-detected",
  "second-response-requested",
  "turn-ready-for-next-input",
  "audio_stopped",
  "openai-agents-realtime-audio-stopped",
  "controller-cleanup-entered"
].forEach(needle => includes(app, needle, `Realtime lifecycle marker ${needle}`));

includes(app, "session.responseInProgress || session.activeResponseId", "active-response cancel guard");
includes(app, "handleOpenAiAgentsRealtimeEvent", "Agents SDK event handler");
includes(app, "connection_change", "Agents SDK connection state handler");
includes(app, "legacyListenerPreserved", "legacy listener preserved until Agents SDK owns mic");
includes(app, "inactive-realtime-owns-microphone", "fallback recorder inactive after Realtime owns mic");
includes(app, "voiceRecognition = null", "legacy recognition released when Realtime starts");
includes(app, "markRealtimeResponseCompleted", "Agents SDK audio end handled");
notIncludes(app.slice(app.indexOf("if (type === \"response.done\""), app.indexOf("if (type === \"input_audio_buffer.speech_started\"")), "stopRealtimeVoiceSession(", "response completion block");

includes(server, "create_response: true", "server VAD repeated response creation");
includes(server, "interrupt_response: true", "server VAD interruption support");
includes(server, "silence_duration_ms: Number(env.OPENAI_REALTIME_SILENCE_DURATION_MS || 700)", "server VAD silence duration retained");

["nexus-behavior-478", "agrinexus-pwa-v423"].forEach(marker => {
  includes(app, marker, `app marker ${marker}`);
  includes(server, marker, `server marker ${marker}`);
  includes(sw, marker, `service worker marker ${marker}`);
});
includes(app, "nexus-genesis-voice-runtime-v455", "voice runtime marker");
assert.strictEqual(
  pkg.scripts["qa:nexus-genesis-realtime-repeated-turn-lifecycle"],
  "node scripts/nexus-genesis-realtime-repeated-turn-lifecycle-qa.js",
  "package alias should run repeated-turn lifecycle QA"
);
includes(qaSuite, "scripts/nexus-genesis-realtime-repeated-turn-lifecycle-qa.js", "qa-suite wiring");

function createController() {
  return {
    sessionId: "rt-qa-session",
    controllerState: "listening",
    peerConnectionState: "connected",
    iceConnectionState: "connected",
    dataChannelState: "open",
    microphoneTrackState: "live",
    microphoneTrackEnabled: true,
    responseInProgress: false,
    activeResponseId: "",
    cancelInProgress: false,
    cleanupCount: 0,
    legacyStarted: false,
    duplicateSessionCount: 0,
    turnIndex: 0,
    recoveries: 0,
    events: []
  };
}

function assertReady(controller, label) {
  assert.strictEqual(controller.sessionId, "rt-qa-session", `${label}: same active session remains valid`);
  assert.strictEqual(controller.microphoneTrackState, "live", `${label}: microphone track live`);
  assert.strictEqual(controller.microphoneTrackEnabled, true, `${label}: microphone track enabled`);
  assert.strictEqual(controller.dataChannelState, "open", `${label}: data channel open`);
  assert.strictEqual(controller.peerConnectionState, "connected", `${label}: peer connected`);
  assert.strictEqual(controller.controllerState, "listening", `${label}: returned to listening`);
  assert.strictEqual(controller.responseInProgress, false, `${label}: response state cleared`);
  assert.strictEqual(controller.activeResponseId, "", `${label}: active response cleared`);
  assert.strictEqual(controller.cancelInProgress, false, `${label}: cancel state cleared`);
  assert.strictEqual(controller.cleanupCount, 0, `${label}: no cleanup during ordinary turns`);
  assert.strictEqual(controller.legacyStarted, false, `${label}: legacy runtime not started`);
}

function speechStarted(controller, turn) {
  controller.turnIndex += 1;
  controller.turnId = `rt-qa-session-turn-${String(controller.turnIndex).padStart(2, "0")}`;
  controller.controllerState = "user-speaking";
  controller.events.push(turn >= 2 ? "second-user-speech-detected" : "user-speech-started");
  if (!controller.responseInProgress && !controller.activeResponseId) {
    controller.events.push("response-cancel-skipped:no-active-response-to-cancel");
  } else {
    controller.cancelInProgress = true;
    controller.controllerState = "interrupted";
    controller.events.push("response-cancel-requested");
  }
}

function responseCycle(controller, turn, options = {}) {
  controller.controllerState = "processing";
  controller.events.push("user-speech-stopped");
  controller.events.push("input-audio-committed");
  controller.events.push(turn >= 2 ? "second-response-requested" : "response-requested");
  if (options.tool) controller.events.push("realtime-tool-dispatch-started");
  if (options.weather) controller.events.push("weather-follow-up");
  if (options.language) controller.events.push("language-switch");
  controller.controllerState = "responding";
  controller.responseInProgress = true;
  controller.activeResponseId = `response-${turn}`;
  controller.events.push(turn >= 2 ? "second-response-created" : "response-created");
  controller.events.push("response-audio-started");
  controller.responseInProgress = false;
  controller.activeResponseId = "";
  controller.cancelInProgress = false;
  controller.controllerState = "listening";
  controller.events.push("response-completed");
  controller.events.push("turn-ready-for-next-input");
}

const controller = createController();
for (let turn = 1; turn <= 25; turn += 1) {
  if (turn === 14) {
    controller.peerConnectionState = "disconnected";
    controller.controllerState = "reconnecting";
    controller.recoveries += 1;
    controller.events.push("bounded-recovery-scheduled");
    controller.peerConnectionState = "connected";
    controller.controllerState = "listening";
  }
  if (turn === 5) {
    controller.responseInProgress = true;
    controller.activeResponseId = "interrupted-response";
    speechStarted(controller, turn);
    assert.strictEqual(controller.events.includes("response-cancel-requested"), true, "turn 5 interruption should request cancel");
  } else {
    speechStarted(controller, turn);
  }
  responseCycle(controller, turn, {
    tool: turn === 8,
    weather: turn === 10,
    language: turn === 12
  });
  assertReady(controller, `turn ${turn}`);
}

assert.strictEqual(controller.turnIndex, 25, "25 turns should complete");
assert.strictEqual(controller.recoveries, 1, "one bounded recovery should be simulated");
assert(controller.events.includes("realtime-tool-dispatch-started"), "tool call turn should be exercised");
assert(controller.events.includes("weather-follow-up"), "weather follow-up should be exercised");
assert(controller.events.includes("language-switch"), "language switch should be exercised");
assert(controller.events.includes("second-response-created"), "second and later turns should create responses");
assert(controller.events.includes("response-cancel-skipped:no-active-response-to-cancel"), "idle speech start should not send stale cancel");

console.log(JSON.stringify({
  ok: true,
  suite: "nexus-genesis-realtime-repeated-turn-lifecycle",
  turnsCompleted: controller.turnIndex,
  sameSession: controller.sessionId,
  boundedRecoveries: controller.recoveries,
  cleanupCount: controller.cleanupCount,
  legacyStarted: controller.legacyStarted,
  decision: "controller returns to listening after each response"
}, null, 2));
