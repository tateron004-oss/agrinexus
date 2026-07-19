const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const index = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const sw = fs.readFileSync(path.join(root, "public", "sw.js"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-genesis-truthful-voice-state-qa] FAIL: ${message}`);
    process.exit(1);
  }
}

function sectionBetween(source, start, end, label) {
  const startIndex = source.indexOf(start);
  assert(startIndex >= 0, `${label} missing start ${start}`);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `${label} missing end ${end}`);
  return source.slice(startIndex, endIndex);
}

function includesAll(source, tokens, label) {
  for (const token of tokens) assert(source.includes(token), `${label} missing ${token}`);
}

const homeGate = sectionBetween(app, "function renderNexusGenesisHomeVoiceGate", "function renderNexusTrueCommandComposer", "Genesis home voice marker");
const truthfulState = sectionBetween(app, "function nexusGenesisTruthfulVoiceState", "function renderNexusGenesisVoiceDebugPanel", "truthful voice state");
const debugPanel = sectionBetween(app, "function renderNexusGenesisVoiceDebugPanel", "function renderNexusGenesisHomeVoiceGate", "voice debug function");
const pipeline = sectionBetween(app, "function recordNexusAudioPipelineEvent", "function nexusVoiceAudioPipelineSnapshot", "audio pipeline event recorder");
const autoStart = sectionBetween(app, "async function maybeStartGenesisRecognitionAfterGrantedPermission", "function nexusVoiceAudioDebugEnabled", "automatic voice start");
const permissionNormalizer = sectionBetween(app, "function normalizeNexusMicrophonePermissionState", "function nexusMicrophonePermissionDisplayText", "permission normalizer");
const permissionEligibility = sectionBetween(app, "function nexusMicrophonePermissionCanAttemptStart", "function isNexusGenesisHomeActive", "permission startup eligibility");
const microphoneStreamOwner = sectionBetween(app, "async function acquireNexusMicrophoneStreamForVoice", "async function refreshChromeVoicePermissionHint", "microphone stream owner");
const recognitionSupervisor = sectionBetween(app, "async function startVoiceListening", "async function sendModuleNotification", "voice supervisor startup");
const recognitionStart = sectionBetween(app, "async function startVoiceRuntimeTransport", "async function startVoiceListening", "voice startup");
const speechSynthesis = sectionBetween(app, "function runNexusSpeechSynthesisController", "function isGuidedHealthVoiceResponse", "speech synthesis controller");
const speechResume = sectionBetween(app, "function resumeVoiceListeningAfterSpeech", "function stopVoicePlayback", "speech restart");

includesAll(app, [
  'AGRINEXUS_BUILD_VERSION = "nexus-behavior-470"',
  'AGRINEXUS_PWA_CACHE_VERSION = "agrinexus-pwa-v415"',
  'NEXUS_GENESIS_VOICE_RUNTIME_VERSION = "nexus-genesis-voice-runtime-v455"'
], "app build");
includesAll(index, [
  "/manifest.webmanifest?v=nexus-behavior-470",
  "/styles.css?v=nexus-behavior-470",
  "/app.js?v=nexus-behavior-470"
], "index build");
includesAll(server, [
  'AGRINEXUS_WEB_BUILD_VERSION = "nexus-behavior-470"',
  'AGRINEXUS_PWA_CACHE_VERSION = "agrinexus-pwa-v415"'
], "server build");
includesAll(sw, [
  'CACHE_NAME = "agrinexus-pwa-v415"',
  'BUILD_VERSION = "nexus-behavior-470"'
], "service worker build");

includesAll(truthfulState, [
  "Microphone permission granted. Speech recognition has not started.",
  "Nexus cannot start speech recognition in this browser.",
  "Nexus is listening.",
  "Nexus detected speech.",
  "Nexus is processing your request.",
  "Nexus could not start voice recognition.",
  "Nexus generated a response, but audio playback did not start.",
  "recognitionOnStartReceived",
  "recognitionResultReceived",
  "recognitionFinalTranscriptReceived",
  "utteranceOnStartReceived"
], "truthful state labels and callback gates");

includesAll(homeGate, [
  "data-nexus-genesis-audio-gate=\"true\"",
  "data-nexus-genesis-voice-runtime=\"true\"",
  "NEXUS_GENESIS_VOICE_RUNTIME_VERSION",
  "aria-live=\"polite\""
], "nonvisual home voice marker");
[
  "button",
  "data-nexus-genesis-mic-permission-control",
  "data-nexus-os-voice-control",
  "Allow microphone",
  "renderNexusGenesisVoiceDebugPanel",
  "nexus-genesis-voice-debug",
  "<details",
  "<summary"
].forEach(token => assert(!homeGate.includes(token), `home marker must not render ${token}`));

assert(app.includes("voiceDebug=1"), "voice debug mode must be gated by ?voiceDebug=1");
includesAll(debugPanel, [
  "nexusGenesisVoiceDebugLog(\"debug-snapshot-render-request\"",
  "return \"\""
], "console-only debug");
assert(!debugPanel.includes("<details"), "debug function must not render a panel");
assert(!debugPanel.includes("data-nexus-genesis-voice-debug"), "debug function must not render debug UI");

includesAll(pipeline, [
  '"media-stream-request"',
  "microphonePermissionRequested: true",
  '"media-stream-granted"',
  "microphoneTrackState: \"live\"",
  '"recognition-handlers-registered"',
  '"recognition-start-call"',
  '"recognition-onstart"',
  "recognitionOnStartReceived: true",
  '"recognition-result-event"',
  "recognitionResultReceived: true",
  '"recognition-final-transcript"',
  "recognitionFinalTranscriptReceived: true",
  '"agent-command-request"',
  "commandRequestStarted: true",
  '"agent-command-response"',
  "commandResponseReceived: true",
  '"speech-synthesis-request"',
  "utteranceRequested: true",
  '"speech-synthesis-onstart"',
  "utteranceOnStartReceived: true",
  '"speech-synthesis-onend"',
  "utteranceOnEndReceived: true"
], "callback-backed pipeline flags");

includesAll(autoStart, [
  "nexusGenesisVoiceSessionActive = true",
  "voiceFirstMode = true",
  "voiceAutoRestart = true",
  "normalizeNexusMicrophonePermissionState(await chromeMicrophonePermissionState())",
  "nexusMicrophonePermissionCanAttemptStart(permission)",
  "permission === \"denied\"",
  "genesis-auto-start-check",
  "genesis-auto-start-skipped",
  "genesis-auto-start-triggered",
  "get-user-media-required",
  "startVoiceListening({ source: \"genesis-home-permission-granted-auto-start\" })"
], "automatic recognition start");
assert(!autoStart.includes("granted-or-browser-managed"), "auto-start must not use human-readable legacy permission labels for control flow");

assert(app.includes("const NEXUS_MIC_PERMISSION_STATES = Object.freeze([\"unknown\", \"prompt\", \"granted\", \"denied\", \"unsupported\", \"browser-managed\"])"), "canonical microphone permission enum missing");
includesAll(permissionNormalizer, [
  "granted-or-browser-managed",
  "return \"browser-managed\"",
  "return \"prompt\"",
  "return \"unsupported\"",
  "return \"denied\"",
  "return \"unknown\""
], "permission normalizer mappings");
includesAll(permissionEligibility, [
  'normalized === "granted"',
  'normalized === "browser-managed"',
  'normalized === "prompt"',
  'normalized === "unknown"'
], "eligible getUserMedia attempt states");

includesAll(microphoneStreamOwner, [
  "navigator.mediaDevices.getUserMedia",
  "liveTrackVerified: true",
  "NoLiveAudioTrackError"
], "microphone stream owner live-track proof");

includesAll(recognitionSupervisor, [
  "nexusGenesisConversationSupervisor",
  "supervisor.start(options.source || \"start-voice-listening\")",
  "startVoiceRuntimeTransport({ ...options, runtimeOnly: \"legacy\", managedRuntime: true })"
], "recognition supervisor proof");

includesAll(recognitionStart, [
  "recognition-handlers-registered",
  "voiceRecognition.onstart",
  "voiceRecognition.onaudiostart",
  "voiceRecognition.onsoundstart",
  "voiceRecognition.onspeechstart",
  "voiceRecognition.onresult",
  "voiceRecognition.onerror",
  "voiceRecognition.onend",
  "voiceRecognition.start()",
  "duplicate-session-prevented",
  "stopNexusAudioFallbackRecorder(\"web-speech-final\")"
], "recognition startup and live-track proof");
assert(!recognitionStart.includes("stopNexusVoicePermissionStream(\"web-speech-final\")"), "Genesis must keep the valid media stream alive after final transcript");

includesAll(speechSynthesis, [
  "speech-synthesis-request",
  "speech-synthesis-onstart",
  "speech-synthesis-onend",
  "speech-synthesis-error",
  "speech-synthesis-start-unconfirmed",
  "caption-fallback"
], "speech synthesis lifecycle");
includesAll(speechResume, [
  "nexusGenesisVoiceSessionActive",
  "genesis-speech-finished-restart",
  "recognition-restart-requested"
], "automatic restart after speech");

assert(app.includes("duplicate-transcript-prevented"), "transcript scheduler must prevent duplicate command submission");
assert(!app.includes("Nexus is ready for voice."), "runtime must not contain false ready for voice string");
assert(pkg.scripts["qa:nexus-genesis-truthful-voice-state"] === "node scripts/nexus-genesis-truthful-voice-state-qa.js", "package alias missing");
assert(qaSuite.includes("scripts/nexus-genesis-truthful-voice-state-qa.js"), "qa-suite missing truthful voice state QA");

console.log(JSON.stringify({
  ok: true,
  suite: "nexus-genesis-truthful-voice-state",
  verifies: [
    "Genesis uses canonical permission state",
    "getUserMedia and a live audio track are required before recognition",
    "onstart is required before listening",
    "debug diagnostics are console-only",
    "speech completion restarts recognition"
  ]
}, null, 2));
