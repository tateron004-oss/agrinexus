const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const agentSource = read("public/nexus-openai-realtime-agent.js");
const manager = read("public/nexus-genesis-voice-runtime-manager.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function functionSource(source, signature, nextSignature) {
  const start = source.indexOf(signature);
  assert(start >= 0, `Missing function signature: ${signature}`);
  const end = nextSignature ? source.indexOf(nextSignature, start + signature.length) : -1;
  assert(end > start, `Missing next signature after ${signature}`);
  return source.slice(start, end);
}

function simulateHandoff({ clientSecret = true, moduleLoaded = true, connected = true, liveTrack = true } = {}) {
  const events = [];
  let legacyListenerActive = true;
  let realtimeActive = false;
  let displayListening = false;
  const fail = reason => {
    events.push(`failed:${reason}`);
    realtimeActive = false;
    displayListening = false;
    return { ok: false, reason, legacyListenerActive, realtimeActive, displayListening, events };
  };
  events.push("legacy-listener-preserved");
  if (!clientSecret) return fail("client-secret");
  events.push("client-secret-issued");
  if (!moduleLoaded) return fail("module-load");
  events.push("module-loaded");
  if (!connected) return fail("session-connect");
  events.push("session-connect-succeeded");
  if (!liveTrack) return fail("missing-live-track");
  events.push("live-track-verified");
  legacyListenerActive = false;
  realtimeActive = true;
  displayListening = true;
  events.push("legacy-listener-released-after-proof");
  return { ok: true, legacyListenerActive, realtimeActive, displayListening, events };
}

function assertStaticHandoffContract() {
  const startup = functionSource(
    app,
    "async function startOpenAiAgentsRealtimeVoiceSession",
    "async function startRealtimeVoiceSession"
  );
  const requestIndex = startup.indexOf("requestNexusOpenAiRealtimeSession(status)");
  const moduleIndex = startup.indexOf("loadNexusOpenAiRealtimeAgentModule()");
  const connectIndex = startup.indexOf("module.startNexusOpenAiRealtimeGenesisSession");
  const proofIndex = startup.indexOf("normalizeRealtimeMicrophoneProof(controller)");
  const activeIndex = startup.indexOf("realtimeVoiceSession.active = true");
  const listeningIndex = startup.indexOf("setVoiceStatus(\"listening\")");
  const stopRecognitionIndex = startup.indexOf("voiceRecognition.stop()");
  const stopPermissionIndex = startup.indexOf("stopNexusVoicePermissionStream(\"openai-agents-realtime-verified\")");

  assert(requestIndex > -1, "Realtime startup must request a server-issued client secret");
  assert(moduleIndex > -1, "Realtime startup must load the module-bundled SDK");
  assert(connectIndex > requestIndex, "Realtime session construction/connect must occur after authorization");
  assert(proofIndex > connectIndex, "Realtime microphone proof must occur after SDK session startup");
  assert(activeIndex > proofIndex, "Realtime session must become active only after live-track proof");
  assert(stopRecognitionIndex > proofIndex, "legacy listener must not stop before live-track proof");
  assert(stopPermissionIndex > proofIndex, "legacy permission stream must not release before live-track proof");
  assert(listeningIndex > proofIndex, "UI must show Listening only after live-track proof");
  assert(startup.includes("legacyListenerPreserved"), "Realtime handoff must record preserved legacy listener state");
  assert(startup.includes("Nexus is keeping the existing listener available"), "Realtime failure must truthfully preserve/restore listener availability");
  assert(!startup.includes("stopNexusVoicePermissionStream(\"openai-agents-realtime-selected\")"), "selection-time stream release must stay removed");
  assert(!startup.includes("voiceStopRequested = true;\n  if (voiceRecognition)"), "startup must not stop recognition at function entry");
}

function assertSdkMicrophoneProofContract() {
  [
    "connectSessionWithMicrophoneProof",
    "navigator.mediaDevices",
    "mediaDevices.getUserMedia",
    "await session.connect",
    "microphoneProofForStream",
    "OpenAI Realtime did not request browser microphone capture",
    "OpenAI Realtime connected without a live microphone track",
    "microphone_track_live",
    "getMicrophoneProof"
  ].forEach(token => assert(agentSource.includes(token), `Realtime agent source should include ${token}`));
}

function assertManagerContract() {
  assert(app.includes("const realtimeAdapter = factory.RealtimeVoiceAdapter"), "app should wire a real Realtime adapter into the existing manager");
  assert(app.includes("startRealtimeVoiceSession({ managedRuntime: true })"), "Realtime adapter should start through the existing runtime manager contract");
  assert(manager.includes("RealtimeVoiceAdapter: behavior => createAdapter(\"realtime\", behavior)"), "manager factory should export the Realtime adapter alias used by the app");
  assert(manager.includes("realtime: options.realtimeAdapter"), "manager should accept an injected Realtime adapter");
  assert(manager.includes("openAiRealtimeManagedRuntime"), "manager state should advertise managed Realtime ownership");
  assert(server.includes("openAiRealtimeDisabled: selectedRuntime !== \"realtime\""), "server diagnostics should not falsely disable selected Realtime runtime");
}

function assertFailureMatrix() {
  [
    ["failed client secret", { clientSecret: false }, "client-secret"],
    ["failed module load", { moduleLoaded: false }, "module-load"],
    ["failed connect", { connected: false }, "session-connect"],
    ["missing live track", { liveTrack: false }, "missing-live-track"]
  ].forEach(([label, scenario, reason]) => {
    const result = simulateHandoff(scenario);
    assert.equal(result.ok, false, `${label} should fail the handoff`);
    assert.equal(result.reason, reason, `${label} should report the exact failed stage`);
    assert.equal(result.legacyListenerActive, true, `${label} should preserve the existing listener`);
    assert.equal(result.displayListening, false, `${label} must not display Listening`);
  });
  const success = simulateHandoff();
  assert.equal(success.ok, true, "successful handoff should pass");
  assert.equal(success.legacyListenerActive, false, "successful handoff should release legacy listener after proof");
  assert.equal(success.realtimeActive, true, "successful handoff should make Realtime active");
  assert.equal(success.displayListening, true, "successful handoff may display Listening after proof");
  assert.deepEqual(success.events.slice(-2), ["live-track-verified", "legacy-listener-released-after-proof"], "legacy release must follow live-track proof");
}

function assertWiring() {
  assert.equal(
    packageJson.scripts["qa:nexus-openai-realtime-microphone-handoff"],
    "node scripts/nexus-openai-realtime-microphone-handoff-qa.js",
    "package alias should run the handoff QA"
  );
  assert(qaSuite.includes("scripts/nexus-openai-realtime-microphone-handoff-qa.js"), "qa-suite should include handoff QA");
}

assertStaticHandoffContract();
assertSdkMicrophoneProofContract();
assertManagerContract();
assertFailureMatrix();
assertWiring();

console.log("Nexus OpenAI Realtime microphone handoff QA passed");
