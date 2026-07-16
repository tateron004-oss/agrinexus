"use strict";

const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const index = read("public/index.html");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");
const acceptanceDoc = read("docs/NEXUS_GENESIS_BROWSER_VOICE_ACCEPTANCE.md");

function between(source, start, end, label) {
  const startIndex = source.indexOf(start);
  assert(startIndex >= 0, `${label}: missing start marker ${start}`);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `${label}: missing end marker ${end}`);
  return source.slice(startIndex, endIndex);
}

function includesAll(source, tokens, label) {
  tokens.forEach(token => assert(source.includes(token), `${label}: missing ${token}`));
}

includesAll(app, [
  "function browserVoiceRuntimeProfile()",
  "window.browserVoiceRuntimeProfile = browserVoiceRuntimeProfile",
  "function normalizeNexusMicrophonePermissionState",
  "function nexusMicrophonePermissionCanAttemptStart",
  "NEXUS_GENESIS_VOICE_RUNTIME_VERSION",
  "async function maybeStartGenesisRecognitionAfterGrantedPermission",
  "function showNexusVoiceFallbackMessage",
  "function runNexusSpeechSynthesisController",
  "speechStartEventReceived: true",
  "speechEndEventReceived: true",
  "prepared.utterance.onstart",
  "prepared.utterance.onend",
  "prepared.utterance.onerror",
  "setNexusGenesisTrustChainState(\"speaking\"",
  "setNexusGenesisTrustChainState(\"synthesis_failed\"",
  "setNexusGenesisTrustChainState(\"speech_preparing\"",
  "setNexusGenesisTrustChainState(\"recognition_unavailable\""
], "browser voice acceptance runtime");

const home = between(app, "function renderNexusTrueHome", "function renderNexusAudioCompanionExperience", "Genesis home");
assert(!home.includes("nexusCommandCenterInput"), "Genesis home must not render typed input");
assert(!home.includes("Talk to Nexus"), "Genesis home must not render Talk button");
assert(!home.includes("Allow microphone"), "Genesis home must not render application microphone button");

const synthesisSource = between(app, "function runNexusSpeechSynthesisController", "function isGuidedHealthVoiceResponse", "synthesis lifecycle");
assert(
  synthesisSource.indexOf('mode: "speech-preparing"') < synthesisSource.indexOf("window.speechSynthesis.speak(prepared.utterance)"),
  "synthesis lifecycle: preparing state must precede speak() request"
);
assert(
  synthesisSource.indexOf("prepared.utterance.onstart") < synthesisSource.indexOf("window.speechSynthesis.speak(prepared.utterance)"),
  "synthesis lifecycle: onstart handler must be installed before speak()"
);

const listeningSource = between(app, "async function startVoiceListening", "async function sendModuleNotification", "listening lifecycle");
const acquireSource = between(app, "async function acquireNexusMicrophoneStreamForVoice", "async function refreshChromeVoicePermissionHint", "microphone acquisition");
includesAll(listeningSource, [
  "browserVoiceRuntimeProfile()",
  "!profile.secureEnough",
  "voiceRecognition = new Recognition()",
  "voiceRecognition.onstart",
  "voiceRecognition.onerror",
  "voiceRecognition.onend",
  "voiceRecognition.onresult",
  "recordNexusAudioPipelineEvent(\"recognition-handlers-registered\"",
  "recordNexusAudioPipelineEvent(\"recognition-start-call\"",
  "scheduleFinalVoiceCommand(finalTranscript",
  "duplicate-session-prevented"
], "listening lifecycle");
includesAll(acquireSource, [
  "navigator.mediaDevices.getUserMedia",
  "liveTrackVerified: true",
  "NoLiveAudioTrackError"
], "microphone acquisition");

const fallbackSource = between(app, "function showNexusVoiceFallbackMessage", "function realtimeVoiceSupported", "visible fallback");
includesAll(fallbackSource, [
  "recordNexusOsConversationTurn(\"assistant\"",
  "updateUserCaptionPanel(compact",
  "syncNexusPresenceSurfaces",
  "updateNexusOsUnifiedConversationDom",
  "assistantSpeaking: false",
  "mode: options.mode || \"typed-fallback\""
], "fallback state update");

const renderWorkspaceSource = between(app, "function renderUserWorkspace", "function renderUserAccessibilityPanel", "workspace render");
includesAll(renderWorkspaceSource, [
  "bindNexusStandardUserHomeControls();",
  "updateNexusOsUnifiedConversationDom();",
  "maybeStartGenesisRecognitionAfterGrantedPermission(\"render-user-workspace\")"
], "workspace render voice binding");

const autoStartSource = between(app, "async function maybeStartGenesisRecognitionAfterGrantedPermission", "function nexusVoiceAudioDebugEnabled", "automatic voice start");
includesAll(autoStartSource, [
  "nexusGenesisVoiceSessionActive = true",
  "voiceFirstMode = true",
  "voiceAutoRestart = true",
  "normalizeNexusMicrophonePermissionState(await chromeMicrophonePermissionState())",
  "nexusMicrophonePermissionCanAttemptStart(permission)",
  "genesis-auto-start-skipped",
  "genesis-auto-start-triggered",
  "startVoiceListening({ source: \"genesis-home-permission-granted-auto-start\" })"
], "automatic voice start");
assert(!autoStartSource.includes("granted-or-browser-managed"), "browser voice acceptance must not use legacy display labels for startup control flow");

const speechResume = between(app, "function resumeVoiceListeningAfterSpeech", "function stopVoicePlayback", "speech restart");
includesAll(speechResume, [
  "nexusGenesisVoiceSessionActive",
  "genesis-speech-finished-restart",
  "recognition-restart-requested"
], "speech restart");

assert.strictEqual(
  packageJson.scripts["qa:nexus-genesis-browser-voice-acceptance"],
  "node scripts/nexus-genesis-browser-voice-acceptance-qa.js",
  "package alias must point to browser voice acceptance QA"
);
assert(
  qaSuite.includes('"scripts/nexus-genesis-browser-voice-acceptance-qa.js"'),
  "voice/all-safe suite must include browser voice acceptance QA"
);
assert(index.includes("/app.js?v=nexus-behavior-449"), "index must bump app.js version so browser voice fixes load");

includesAll(acceptanceDoc, [
  "Nexus Genesis Real Browser Voice and Companion Acceptance",
  "http://127.0.0.1:4182/",
  "Actual audible output: not confirmed",
  "not proof that audio was heard"
], "acceptance record");
assert(
  !/- Actual audible output:\s*(confirmed|audible output confirmed)/i.test(acceptanceDoc),
  "acceptance record must not claim audible output was confirmed in this browser"
);

console.log(JSON.stringify({
  ok: true,
  suite: "nexus-genesis-browser-voice-acceptance",
  verifies: [
    "browser voice capability detection exists",
    "Genesis home has no application controls",
    "automatic startup reaches getUserMedia and recognition",
    "speech completion restarts recognition",
    "acceptance record distinguishes synthesis events from audible output"
  ]
}, null, 2));
