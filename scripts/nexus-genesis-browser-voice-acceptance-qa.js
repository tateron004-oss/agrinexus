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
  tokens.forEach(token => {
    assert(source.includes(token), `${label}: missing ${token}`);
  });
}

includesAll(app, [
  "function browserVoiceRuntimeProfile()",
  "window.browserVoiceRuntimeProfile = browserVoiceRuntimeProfile",
  "function nexusSpeechSynthesisControllerState()",
  "function createNexusSpeechSynthesisUtterance",
  "function runNexusSpeechSynthesisController",
  "function nexusListeningWakeControllerState",
  "async function maybeStartGenesisRecognitionAfterGrantedPermission",
  "function showNexusVoiceFallbackMessage",
  "function handleNexusPrimaryVoiceButtonClick",
  "function bindNexusPrimaryVoiceControls",
  "function renderNexusBrowserVoiceAvailabilityHint",
  "data-nexus-browser-voice-fallback=\"true\"",
  "data-browser-voice-supported",
  "Voice uses browser support. Workflow forms may ask for exact details after Nexus opens them.",
  "Voice is not available in this browser. Use a supported browser or adjust microphone permission; Genesis home remains audio-first.",
  "window.handleNexusPrimaryVoiceButtonClick = handleNexusPrimaryVoiceButtonClick",
  "onclick=\"return handleNexusPrimaryVoiceButtonClick(event)\"",
  "nexus-primary-visible-voice-button",
  "nexusPrimaryVoiceControlBound",
  "bound-visible-voice-control",
  "bindNexusPrimaryVoiceControls();",
  "[data-nexus-command-center-voice],[data-nexus-os-voice-control]",
  "standard-user-visible-voice-control",
  "speechStartEventReceived: true",
  "speechEndEventReceived: true",
  "prepared.utterance.onstart",
  "prepared.utterance.onend",
  "prepared.utterance.onerror",
  "setNexusGenesisTrustChainState(\"speaking\"",
  "setNexusGenesisTrustChainState(\"synthesis_failed\"",
  "setNexusGenesisTrustChainState(\"speech_preparing\"",
  "setNexusGenesisTrustChainState(\"recognition_unavailable\"",
  "Workflow forms available after Nexus opens them",
  "Nexus voice is muted. Captions remain available; unmute or allow microphone access to continue by voice.",
  "does not provide microphone speech recognition in this test browser",
  "realtime voice is not configured",
  "realtime-voice-not-configured",
  "Voice recognition could not start. Use the microphone control again after permission is available",
  "noAlwaysOnListeningClaim: true",
  "noHiddenMicrophoneStart: true"
], "browser voice acceptance runtime");

const synthesisSource = between(app, "function runNexusSpeechSynthesisController", "function isGuidedHealthVoiceResponse", "synthesis lifecycle");
assert(
  synthesisSource.indexOf('mode: "speech-preparing"') < synthesisSource.indexOf("window.speechSynthesis.speak(prepared.utterance)"),
  "synthesis lifecycle: preparing state must precede speak() request"
);
assert(
  synthesisSource.indexOf("prepared.utterance.onstart") < synthesisSource.indexOf("window.speechSynthesis.speak(prepared.utterance)"),
  "synthesis lifecycle: onstart handler must be installed before speak()"
);
assert(
  synthesisSource.indexOf('setNexusGenesisTrustChainState("speaking"') < synthesisSource.indexOf("options.onStart?.(event)"),
  "synthesis lifecycle: speaking state must be owned by the browser start callback"
);

const listeningSource = between(app, "async function startVoiceListening", "async function sendModuleNotification", "listening lifecycle");
includesAll(listeningSource, [
  "browserVoiceRuntimeProfile()",
  "!profile.secureEnough",
  "!Recognition",
  "voiceRecognition.onstart",
  "voiceRecognition.onerror",
  "voiceRecognition.onend",
  "voiceRecognition.onresult",
  "scheduleFinalVoiceCommand(finalTranscript",
  "showNexusVoiceFallbackMessage",
  "realtimeConfigured = Boolean(statusPayload?.realtimeVoice?.configured)"
], "listening lifecycle");
assert(
  listeningSource.indexOf("markNexusListeningControllerEvent(\"typed-fallback\"") < listeningSource.indexOf("showNexusVoiceFallbackMessage"),
  "unsupported recognition should mark typed fallback before visible fallback message"
);
assert(
  listeningSource.indexOf("!Recognition && !realtimeVoiceSupported()") < listeningSource.indexOf("duplicate-session-prevented"),
  "unsupported recognition fallback must run before duplicate start prevention"
);

const fallbackSource = between(app, "function showNexusVoiceFallbackMessage", "function realtimeVoiceSupported", "visible fallback");
includesAll(fallbackSource, [
  "recordNexusOsConversationTurn(\"assistant\"",
  "updateUserCaptionPanel(compact",
  "syncNexusPresenceSurfaces",
  "updateNexusOsUnifiedConversationDom",
  "assistantSpeaking: false",
  "mode: options.mode || \"typed-fallback\""
], "visible fallback");

const availabilityHintSource = between(app, "function renderNexusBrowserVoiceAvailabilityHint", "function renderNexusTrueCommandComposer", "browser voice availability hint");
includesAll(availabilityHintSource, [
  "browserVoiceRuntimeProfile()",
  "const message = profile.supported",
  "Voice uses browser support. Workflow forms may ask for exact details after Nexus opens them.",
  "data-browser-voice-supported",
  "data-nexus-browser-voice-fallback=\"true\"",
  "Voice is not available in this browser. Use a supported browser or adjust microphone permission; Genesis home remains audio-first."
], "browser voice availability hint");

const renderWorkspaceSource = between(app, "function renderUserWorkspace", "function renderUserAccessibilityPanel", "workspace render");
includesAll(renderWorkspaceSource, [
  "bindNexusStandardUserHomeControls();",
  "bindNexusPrimaryVoiceControls();",
  "updateNexusOsUnifiedConversationDom();",
  "maybeStartGenesisRecognitionAfterGrantedPermission(\"render-user-workspace\")"
], "workspace render voice binding");

const grantedAutoStartSource = between(app, "async function maybeStartGenesisRecognitionAfterGrantedPermission", "function nexusVoiceAudioDebugEnabled", "granted permission auto-start");
includesAll(grantedAutoStartSource, [
  "normalizeNexusMicrophonePermissionState(await chromeMicrophonePermissionState())",
  "runtimePermission === \"browser-managed\"",
  "permission === \"granted\"",
  "chromeMicrophonePermissionState()",
  "permission-not-authorized",
  "genesis-auto-start-skipped",
  "genesis-auto-start-triggered",
  "startVoiceListening({ source: \"genesis-home-permission-granted-auto-start\" })"
], "granted permission recognition auto-start");
assert(!grantedAutoStartSource.includes("granted-or-browser-managed"), "browser voice acceptance must not use legacy display labels for startup control flow");

assert.strictEqual(
  packageJson.scripts["qa:nexus-genesis-browser-voice-acceptance"],
  "node scripts/nexus-genesis-browser-voice-acceptance-qa.js",
  "package alias must point to browser voice acceptance QA"
);
assert(
  qaSuite.includes('"scripts/nexus-genesis-browser-voice-acceptance-qa.js"'),
  "voice/all-safe suite must include browser voice acceptance QA"
);
assert(
  index.includes("/app.js?v=nexus-behavior-433"),
  "index must bump app.js version so browser voice acceptance fixes load in real browser validation"
);

includesAll(acceptanceDoc, [
  "Nexus Genesis Real Browser Voice and Companion Acceptance",
  "http://127.0.0.1:4182/",
  "Codex In-app Browser",
  "Windows",
  "SpeechRecognition: unavailable",
  "speechSynthesis: unavailable",
  "Actual audible output: not confirmed",
  "Voice fallback: passed",
  "Console warnings/errors: 0",
  "No always-on listening",
  "not proof that audio was heard"
], "acceptance record");

assert(
  !/- Actual audible output:\s*(confirmed|audible output confirmed)/i.test(acceptanceDoc),
  "acceptance record must not claim audible output was confirmed in this browser"
);
assert(
  !/subsystem unavailable|dependency missing|isolated runtime|shim|provider failure/i.test(fallbackSource),
  "visible browser voice fallback copy must avoid raw implementation failure language"
);

console.log(JSON.stringify({
  ok: true,
  suite: "nexus-genesis-browser-voice-acceptance",
  verifies: [
    "browser capability detection exported",
    "speech start/end/error lifecycle stays event-based",
    "unsupported browser voice surfaces typed fallback visibly",
    "acceptance record distinguishes synthesis events from audible output"
  ]
}, null, 2));
