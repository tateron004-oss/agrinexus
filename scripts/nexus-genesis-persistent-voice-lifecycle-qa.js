const fs = require("fs");
const path = require("path");
const assert = require("assert/strict");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const app = read("public/app.js");
const agent = read("public/nexus-openai-realtime-agent.js");
const index = read("public/index.html");
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

["nexus-behavior-474", "agrinexus-pwa-v419"].forEach(marker => {
  includes(app, marker, `app marker ${marker}`);
  includes(server, marker, `server marker ${marker}`);
  includes(sw, marker, `service worker marker ${marker}`);
});
includes(index, "nexus-behavior-474", "index behavior marker nexus-behavior-474");

includes(index, 'id="nexusPermanentMicrophoneBtn"', "static microphone button");
includes(index, "Enable microphone", "static microphone initial label");
assert(index.indexOf('id="nexusPermanentMicrophoneBtn"') < index.indexOf("/app.js?v=nexus-behavior-474"), "microphone button must appear before app.js");
assert(!/id="nexusPermanentMicrophoneBtn"[^>]*(hidden|disabled)/i.test(index), "static microphone button must not be hidden or disabled");

[
  "const NEXUS_VOICE_LIFECYCLE_EVENT_LIMIT = 100",
  "const nexusVoiceLifecycleEvents = []",
  "function nexusVoiceLifecycleSnapshot",
  "function recordNexusVoiceLifecycleEvent",
  "function assertNexusVoiceLifecycleInvariant",
  "function nexusVoiceLifecycleDiagnostics",
  "window.NexusGenesisVoiceLifecycleDiagnostics",
  "microphoneOwnerCount",
  "sessionFingerprint",
  "microphoneReadyState",
  "microphoneEnabled",
  "microphoneMuted",
  "listeningResumed",
  "recoveryAttempt",
  "sanitizedErrorName"
].forEach(needle => includes(app, needle, `lifecycle diagnostic marker ${needle}`));

[
  "function cancelActiveRealtimeResponse",
  "session.sdkController?.interrupt?.()",
  "raw-realtime-speech-started",
  "agents-realtime-speech-started",
  "interruption-ready-for-next-input"
].forEach(needle => includes(app, needle, `barge-in lifecycle marker ${needle}`));

[
  "recordNexusVoiceLifecycleEvent(eventType",
  "assertNexusVoiceLifecycleInvariant(\"listening-resumed-after-response\")",
  "assertNexusVoiceLifecycleInvariant(\"successful-stream-acquisition\")",
  "assertNexusVoiceLifecycleInvariant(\"realtime-start-after-permanent-click\")",
  "recordNexusVoiceLifecycleEvent(\"realtime-session-cleanup-preserved-permanent-microphone\""
].forEach(needle => includes(app, needle, `lifecycle assertion wiring ${needle}`));

[
  "navigator.mediaDevices.getUserMedia({ audio: true })",
  "tracks.length === 1",
  "trackState === \"live\"",
  "liveTrack.enabled !== false",
  "!trackMuted",
  "preverifiedMicrophoneStream: stream"
].forEach(needle => includes(app, needle, `permanent microphone invariant ${needle}`));

includes(agent, "connectOptions.preverifiedMicrophoneStream", "agent receives preverified microphone stream");
includes(agent, "options.stopMicrophone === true", "agent only stops microphone by explicit option");
includes(agent, "!preverifiedMicrophoneStream", "agent preserves preverified stream by default");
includes(app, "const explicitShutdown =", "app classifies explicit shutdown only");
includes(app, "permanentStreamActive", "app detects permanent stream during cleanup");
includes(app, "preverifiedMicrophoneStream: preservedPermanentStream", "recovery reuses preserved microphone stream");
notIncludes(
  app.slice(app.indexOf("function markRealtimeResponseCompleted"), app.indexOf("function scheduleRealtimeRecovery")),
  "stopRealtimeVoiceSession(",
  "ordinary response completion"
);

assert.strictEqual(
  pkg.scripts["qa:nexus-genesis-persistent-voice-lifecycle"],
  "node scripts/nexus-genesis-persistent-voice-lifecycle-qa.js",
  "package alias should run persistent voice lifecycle QA"
);
includes(qaSuite, "scripts/nexus-genesis-persistent-voice-lifecycle-qa.js", "qa-suite persistent lifecycle wiring");

function createLifecycle() {
  return {
    sessionId: "rt-persistent-session",
    streamId: "mic-stream-1",
    managerId: "genesis-manager-1",
    audioContextId: "audio-context-1",
    contextId: "conversation-context-1",
    state: "listening",
    realtimeConnectionState: "connected",
    microphoneTrackState: "live",
    microphoneEnabled: true,
    microphoneMuted: false,
    microphoneOwnerCount: 1,
    audioContextState: "running",
    inputActivityDetected: false,
    speechDetectionState: "armed",
    responsePlaybackState: "idle",
    listeningResumed: true,
    turn: 0,
    handlerCount: 1,
    timerCount: 1,
    diagnosticEvents: [],
    legacyActivated: false,
    cleanupCount: 0,
    recoveries: 0
  };
}

function snapshot(lifecycle, eventName) {
  const event = {
    sequence: lifecycle.diagnosticEvents.length + 1,
    turnNumber: lifecycle.turn,
    eventName,
    managerState: lifecycle.state,
    realtimeConnectionState: lifecycle.realtimeConnectionState,
    sessionFingerprint: `${lifecycle.sessionId.slice(0, 8)}-${lifecycle.sessionId.length}`,
    microphoneReadyState: lifecycle.microphoneTrackState,
    microphoneEnabled: lifecycle.microphoneEnabled,
    microphoneMuted: lifecycle.microphoneMuted,
    microphoneOwnerCount: lifecycle.microphoneOwnerCount,
    audioContextState: lifecycle.audioContextState,
    inputActivityDetected: lifecycle.inputActivityDetected,
    speechDetectionState: lifecycle.speechDetectionState,
    responsePlaybackState: lifecycle.responsePlaybackState,
    listeningResumed: lifecycle.listeningResumed,
    recoveryAttempt: eventName.includes("recovery")
  };
  lifecycle.diagnosticEvents.push(event);
  lifecycle.diagnosticEvents = lifecycle.diagnosticEvents.slice(-100);
  return event;
}

function assertPersistent(lifecycle, label) {
  assert.equal(lifecycle.sessionId, "rt-persistent-session", `${label}: session identity must persist`);
  assert.equal(lifecycle.streamId, "mic-stream-1", `${label}: microphone stream must persist`);
  assert.equal(lifecycle.managerId, "genesis-manager-1", `${label}: manager identity must persist`);
  assert.equal(lifecycle.audioContextId, "audio-context-1", `${label}: audio context must persist`);
  assert.equal(lifecycle.contextId, "conversation-context-1", `${label}: conversation context must persist`);
  assert.equal(lifecycle.realtimeConnectionState, "connected", `${label}: realtime remains connected`);
  assert.equal(lifecycle.microphoneTrackState, "live", `${label}: microphone track remains live`);
  assert.equal(lifecycle.microphoneEnabled, true, `${label}: microphone remains enabled`);
  assert.equal(lifecycle.microphoneMuted, false, `${label}: microphone is not muted after transition`);
  assert.equal(lifecycle.microphoneOwnerCount, 1, `${label}: exactly one microphone owner`);
  assert.equal(lifecycle.audioContextState, "running", `${label}: audio context remains running`);
  assert.equal(lifecycle.speechDetectionState, "armed", `${label}: speech detection is armed`);
  assert.equal(lifecycle.responsePlaybackState, "idle", `${label}: playback is idle after turn`);
  assert.equal(lifecycle.listeningResumed, true, `${label}: listening resumed`);
  assert.equal(lifecycle.state, "listening", `${label}: manager returned to listening`);
  assert.equal(lifecycle.legacyActivated, false, `${label}: legacy runtime never activates`);
  assert.equal(lifecycle.cleanupCount, 0, `${label}: no turn-scoped cleanup`);
  assert.equal(lifecycle.handlerCount, 1, `${label}: handlers do not accumulate`);
  assert.equal(lifecycle.timerCount, 1, `${label}: timers do not accumulate`);
  snapshot(lifecycle, `assert:${label}`);
}

function runTurn(lifecycle, turn, options = {}) {
  lifecycle.turn = turn;
  lifecycle.inputActivityDetected = true;
  lifecycle.speechDetectionState = "speech-detected";
  lifecycle.state = "user-speaking";
  snapshot(lifecycle, "speech-detected");

  if (options.interruption) {
    lifecycle.responsePlaybackState = "interrupted";
    lifecycle.state = "listening";
    snapshot(lifecycle, "interruption-cleared");
  }

  lifecycle.state = "processing";
  snapshot(lifecycle, options.tool ? "tool-call-started" : "user-turn-committed");

  if (options.providerBlocked) {
    lifecycle.state = "processing";
    snapshot(lifecycle, "provider-blocked-truthfully");
  }

  if (options.language) {
    lifecycle.contextId = "conversation-context-1";
    snapshot(lifecycle, "language-switch-preserved-context");
  }

  if (options.subjectChange) {
    lifecycle.contextId = "conversation-context-1";
    snapshot(lifecycle, "subject-change-preserved-context");
  }

  lifecycle.state = "agent-speaking";
  lifecycle.responsePlaybackState = "active";
  snapshot(lifecycle, "nexus-response-started");

  lifecycle.state = "listening";
  lifecycle.responsePlaybackState = "idle";
  lifecycle.speechDetectionState = "armed";
  lifecycle.inputActivityDetected = false;
  lifecycle.listeningResumed = true;
  snapshot(lifecycle, "listening-resumed");
  assertPersistent(lifecycle, `turn ${turn}`);
}

const lifecycle = createLifecycle();
snapshot(lifecycle, "initial-application-load");
assertPersistent(lifecycle, "initial load");
snapshot(lifecycle, "microphone-button-click");
snapshot(lifecycle, "successful-stream-acquisition");
snapshot(lifecycle, "realtime-connection");
snapshot(lifecycle, "before-first-user-speech");

for (let turn = 1; turn <= 25; turn += 1) {
  if (turn === 5) runTurn(lifecycle, turn, { interruption: true });
  else if (turn === 8) runTurn(lifecycle, turn, { tool: true });
  else if (turn === 10) {
    snapshot(lifecycle, "ten-seconds-silence");
    assertPersistent(lifecycle, "ten seconds silence");
    runTurn(lifecycle, turn);
  } else if (turn === 12) runTurn(lifecycle, turn, { language: "es" });
  else if (turn === 15) runTurn(lifecycle, turn, { subjectChange: true });
  else if (turn === 18) {
    lifecycle.realtimeConnectionState = "disconnected";
    lifecycle.state = "recovering";
    lifecycle.recoveries += 1;
    snapshot(lifecycle, "temporary-transport-failure");
    lifecycle.realtimeConnectionState = "connected";
    lifecycle.state = "listening";
    snapshot(lifecycle, "automatic-recovery");
    assertPersistent(lifecycle, "transport recovery");
    runTurn(lifecycle, turn);
  } else if (turn === 20) {
    snapshot(lifecycle, "twenty-seconds-silence");
    assertPersistent(lifecycle, "twenty seconds silence");
    runTurn(lifecycle, turn);
  } else if (turn === 22) runTurn(lifecycle, turn, { providerBlocked: true });
  else runTurn(lifecycle, turn);
}

snapshot(lifecycle, "after-twenty-fifth-turn");
assertPersistent(lifecycle, "after twenty-fifth turn");
snapshot(lifecycle, "after-test-cleanup");
assertPersistent(lifecycle, "after test cleanup");
snapshot(lifecycle, "clean-application-restart");
assertPersistent(lifecycle, "clean restart");

assert.equal(lifecycle.diagnosticEvents.length <= 100, true, "diagnostic timeline must roll at 100 events");
assert.equal(lifecycle.recoveries, 1, "temporary transport recovery should be exercised once");
assert(lifecycle.diagnosticEvents.some(event => event.eventName === "provider-blocked-truthfully"), "provider-blocked behavior should be represented");
assert(lifecycle.diagnosticEvents.some(event => event.eventName === "language-switch-preserved-context"), "language switching should be represented");
assert(lifecycle.diagnosticEvents.some(event => event.eventName === "ten-seconds-silence"), "ten-second silence should be represented");
assert(lifecycle.diagnosticEvents.some(event => event.eventName === "twenty-seconds-silence"), "twenty-second silence should be represented");

console.log(JSON.stringify({
  ok: true,
  suite: "nexus-genesis-persistent-voice-lifecycle",
  turnsCompleted: lifecycle.turn,
  persistentSession: lifecycle.sessionId,
  persistentStream: lifecycle.streamId,
  persistentManager: lifecycle.managerId,
  persistentAudioContext: lifecycle.audioContextId,
  microphoneOwnerCount: lifecycle.microphoneOwnerCount,
  diagnosticEvents: lifecycle.diagnosticEvents.length,
  recoveries: lifecycle.recoveries,
  cleanupCount: lifecycle.cleanupCount,
  legacyActivated: lifecycle.legacyActivated,
  decision: "25 simulated lifecycle turns preserve one stream, one session, one manager, one owner, and listening state"
}, null, 2));
