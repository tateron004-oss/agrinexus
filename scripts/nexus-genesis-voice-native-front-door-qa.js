"use strict";

const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const index = read("public/index.html");
const styles = read("public/styles.css");
const server = read("server.js");
const sw = read("public/sw.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function between(source, start, end, label) {
  const startIndex = source.indexOf(start);
  assert(startIndex >= 0, `${label}: missing start marker ${start}`);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `${label}: missing end marker ${end}`);
  return source.slice(startIndex, endIndex);
}

function includesAll(source, tokens, label) {
  for (const token of tokens) assert(source.includes(token), `${label}: missing ${token}`);
}

function stylesBetweenHomeOrb() {
  return between(
    styles,
    "body.user-mode .nexus-genesis-orb-only-home .nexus-true-orb-stage {",
    "body.user-mode .nexus-genesis-orb-only-home .nexus-true-orb-stage:focus-visible",
    "home orb source CSS"
  );
}

const orb = between(app, "function renderNexusTrueCoreOrb", "function handleNexusPrimaryVoiceButtonClick", "orb renderer");
includesAll(orb, [
  "data-nexus-genesis-orb-presence=\"true\"",
  "data-nexus-genesis-home-orb=\"true\"",
  "role=\"img\"",
  "Nexus voice companion visual status."
], "non-interactive orb");
assert(!orb.includes("role=\"button\""), "orb must not expose button semantics");
assert(!orb.includes("tabindex=\"0\""), "orb must not be keyboard focusable");
assert(!orb.includes("Wake Nexus"), "orb must not read as launcher");
assert(!orb.includes("onclick"), "orb must not carry inline click behavior");
assert(!stylesBetweenHomeOrb().includes("cursor: pointer"), "source CSS must not give home orb a pointer cursor");
assert(stylesBetweenHomeOrb().includes("cursor: default"), "source CSS must give home orb a default cursor");
assert(stylesBetweenHomeOrb().includes("pointer-events: none"), "source CSS must disable pointer events on the home orb stage");
assert(!app.includes("function handleNexusGenesisOrbActivation"), "orb activation handler must be removed");
assert(!app.includes("genesis-orb-activation"), "orb click activation source must be absent");
assert(!app.includes("keyboard-orb"), "orb keyboard activation source must be absent");
assert(!app.includes("Press Enter or Space"), "orb keyboard activation instruction must be absent");

const home = between(app, "function renderNexusTrueHome", "function renderNexusAudioCompanionExperience", "Genesis home");
includesAll(home, [
  "data-nexus-true-home=\"true\"",
  "renderNexusGenesisHomeVoiceGate()",
  "Nexus Genesis home is audio-only.",
  "non-interactive voice companion presence"
], "audio-only home");
assert(!home.includes("renderNexusTrueCommandComposer()"), "Genesis home must not mount a general command composer");
assert(!home.includes("Ask Nexus anything"), "Genesis home must not show the Ask Nexus typed box");
assert(!home.includes("Activate the Nexus orb"), "Genesis home must not instruct orb activation");

const voiceGate = between(app, "function renderNexusGenesisHomeVoiceGate", "function renderNexusTrueCommandComposer", "Genesis voice marker");
includesAll(voiceGate, [
  "data-nexus-genesis-audio-gate=\"true\"",
  "data-nexus-genesis-voice-runtime=\"true\"",
  "NEXUS_GENESIS_VOICE_RUNTIME_VERSION"
], "nonvisual voice marker");
[
  "button",
  "data-nexus-genesis-mic-permission-control",
  "data-nexus-os-voice-control",
  "Allow microphone",
  "nexus-genesis-voice-debug",
  "<details",
  "<summary"
].forEach(token => assert(!voiceGate.includes(token), `Genesis marker must not render ${token}`));

const workspace = between(app, "function renderUserWorkspace", "function renderUserAccessibilityPanel", "workspace");
includesAll(workspace, [
  "trueExperienceMode === \"home\"",
  "renderNexusTrueHome",
  "maybeStartGenesisRecognitionAfterGrantedPermission(\"render-user-workspace\")"
], "workspace routing");

const autoStart = between(app, "async function maybeStartGenesisRecognitionAfterGrantedPermission", "function nexusVoiceAudioDebugEnabled", "automatic recognition start");
includesAll(autoStart, [
  "nexusGenesisVoiceSessionActive = true",
  "voiceFirstMode = true",
  "voiceAutoRestart = true",
  "nexusMicrophonePermissionCanAttemptStart(permission)",
  "permission === \"denied\"",
  "get-user-media-required",
  "startVoiceListening({ source: \"genesis-home-permission-granted-auto-start\" })"
], "automatic recognition start");
assert(!autoStart.includes("granted-or-browser-managed"), "automatic start must not use legacy display labels for control flow");
assert(!autoStart.includes("data-nexus-genesis-home-orb"), "automatic start must not use the orb");

const supervisorStartup = between(app, "async function startVoiceListening", "async function sendModuleNotification", "voice supervisor startup");
includesAll(supervisorStartup, [
  "nexusGenesisConversationSupervisor",
  "supervisor.start(options.source || \"start-voice-listening\")",
  "startVoiceRuntimeTransport({ ...options, runtimeOnly: \"realtime\", managedRuntime: true })"
], "voice supervisor startup");

const startup = between(app, "async function startVoiceRuntimeTransport", "async function startVoiceListening", "voice startup");
const acquire = between(app, "async function acquireNexusMicrophoneStreamForVoice", "async function refreshChromeVoicePermissionHint", "microphone acquisition");
includesAll(startup, [
  "startRealtimeVoiceSession",
  "realtimeVoiceActive()",
  "openai-realtime-not-connected",
  "openai-realtime-start-failed",
  "legacy-runtime-disabled",
  "unreachable-voice-runtime-branch"
], "voice startup");
assert(!startup.includes("voiceRecognition = new Recognition()"), "voice startup must not construct browser SpeechRecognition");
assert(!startup.includes("startElevenLabsVoiceSession"), "voice startup must not start ElevenLabs");
includesAll(acquire, [
  "navigator.mediaDevices.getUserMedia",
  "liveTrackVerified: true",
  "NoLiveAudioTrackError"
], "microphone acquisition");

const finalVoice = between(app, "function processFinalVoiceCommand", "function scheduleFinalVoiceCommand", "final voice processing");
includesAll(finalVoice, [
  "recordNexusAudioPipelineEvent(\"agent-command-request\"",
  "handleVoiceCommand",
  "source: \"voice\""
], "voice transcript submits to command path");

const speechResume = between(app, "function resumeVoiceListeningAfterSpeech", "function stopVoicePlayback", "speech restart");
includesAll(speechResume, [
  "nexusGenesisVoiceSessionActive",
  "genesis-speech-finished-restart",
  "recognition-restart-requested"
], "speech restart");

includesAll(index, ["/app.js?v=nexus-behavior-476", "/styles.css?v=nexus-behavior-476"], "index cache");
includesAll(app, ["nexus-behavior-476", "agrinexus-pwa-v421", "nexus-genesis-voice-runtime-v455"], "app cache");
includesAll(server, ["nexus-behavior-476", "agrinexus-pwa-v421"], "server cache");
includesAll(sw, ["nexus-behavior-476", "agrinexus-pwa-v421"], "service worker cache");

assert(
  packageJson.scripts["qa:nexus-genesis-voice-native-front-door"] === "node scripts/nexus-genesis-voice-native-front-door-qa.js",
  "package alias must run voice-native front-door QA"
);
assert(qaSuite.includes("scripts/nexus-genesis-voice-native-front-door-qa.js"), "qa-suite must include voice-native front-door QA");

console.log(JSON.stringify({
  ok: true,
  suite: "nexus-genesis-voice-native-front-door",
  verifies: [
    "Genesis orb is non-interactive visual presence",
    "Genesis home renders no app controls",
    "voice starts through OpenAI Realtime only",
    "Realtime startup keeps the permanent microphone path",
    "speech completion returns to listening"
  ]
}, null, 2));
