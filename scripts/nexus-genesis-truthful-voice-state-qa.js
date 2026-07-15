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
  for (const token of tokens) {
    assert(source.includes(token), `${label} missing ${token}`);
  }
}

const homeGate = sectionBetween(app, "function renderNexusGenesisHomeVoiceGate", "function renderNexusTrueCommandComposer", "Genesis home voice gate");
const truthfulState = sectionBetween(app, "function nexusGenesisTruthfulVoiceState", "function renderNexusGenesisVoiceDebugPanel", "truthful voice state");
const debugPanel = sectionBetween(app, "function renderNexusGenesisVoiceDebugPanel", "function renderNexusGenesisHomeVoiceGate", "voice debug panel");
const pipeline = sectionBetween(app, "function recordNexusAudioPipelineEvent", "function nexusVoiceAudioPipelineSnapshot", "audio pipeline event recorder");
const recognitionStart = sectionBetween(app, "async function startVoiceListening", "async function sendModuleNotification", "voice startup");
const speechSynthesis = sectionBetween(app, "function runNexusSpeechSynthesisController", "function isGuidedHealthVoiceResponse", "speech synthesis controller");

includesAll(app, [
  'AGRINEXUS_BUILD_VERSION = "nexus-behavior-431"',
  'AGRINEXUS_PWA_CACHE_VERSION = "agrinexus-pwa-v376"'
], "app build");
includesAll(index, [
  "/manifest.webmanifest?v=nexus-behavior-431",
  "/styles.css?v=nexus-behavior-431",
  "/app.js?v=nexus-behavior-431"
], "index build");
includesAll(server, [
  'AGRINEXUS_WEB_BUILD_VERSION = "nexus-behavior-431"',
  'AGRINEXUS_PWA_CACHE_VERSION = "agrinexus-pwa-v376"'
], "server build");
includesAll(sw, [
  'CACHE_NAME = "agrinexus-pwa-v376"',
  'BUILD_VERSION = "nexus-behavior-431"'
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

assert(!homeGate.includes("Nexus is ready for voice."), "home gate must not show false ready-for-voice state");
assert(!homeGate.includes('data-nexus-os-voice-control="stop-listening"'), "home gate must not render permanent Stop listening button");
assert(!homeGate.includes('data-nexus-os-voice-control="stop-speaking"'), "home gate must not render permanent Stop speaking button");
assert(!homeGate.includes('data-nexus-os-voice-control="repeat-response"'), "home gate must not render permanent Repeat button");
assert(!homeGate.includes('data-nexus-os-voice-control="${nexusOsConversationMuted ? "unmute" : "mute"}"'), "home gate must not render permanent Mute button");
assert(homeGate.includes('data-nexus-genesis-mic-permission-control="true"'), "home gate may keep pre-permission microphone control");
assert(homeGate.includes("renderNexusGenesisVoiceDebugPanel"), "home gate should include debug panel only through debug helper");
assert(homeGate.includes("lastVoiceResponse"), "home gate should preserve read-only last response caption");

assert(app.includes("voiceDebug=1"), "voice debug mode must be gated by ?voiceDebug=1");
includesAll(debugPanel, [
  "deployed build",
  "PWA cache",
  "microphone permission",
  "media track state",
  "recognition constructed",
  "recognition start requested",
  "onstart received",
  "result received",
  "final transcript received",
  "command request started",
  "command response status",
  "utterance requested",
  "utterance onstart",
  "utterance onend",
  "utterance error",
  "current truthful Nexus state"
], "read-only voice debug panel");

includesAll(pipeline, [
  '"recognition-onstart"',
  "recognitionOnStartReceived: true",
  '"recognition-result-event"',
  "recognitionResultReceived: true",
  '"recognition-final-transcript"',
  "recognitionFinalTranscriptReceived: true",
  '"agent-command-request"',
  "commandRequestStarted: true",
  '"speech-synthesis-request"',
  "utteranceRequested: true",
  '"speech-synthesis-onstart"',
  "utteranceOnStartReceived: true"
], "callback-backed pipeline flags");

includesAll(recognitionStart, [
  "recognition-start-call",
  "recognition-onstart",
  "recognition-result-event",
  "recognition-final-transcript",
  "voiceStopRequested",
  "if (voiceFirstMode && voiceAutoRestart && !voiceSpeaking && !voiceStopRequested"
], "recognition startup and explicit stop");
assert(app.includes("duplicate-transcript-prevented"), "transcript scheduler must prevent duplicate command submission");

includesAll(speechSynthesis, [
  "speech-synthesis-request",
  "speech-synthesis-onstart",
  "speech-synthesis-onend",
  "speech-synthesis-error",
  "speech-synthesis-start-unconfirmed",
  "caption-fallback"
], "speech synthesis lifecycle");

assert(!app.includes("Nexus is ready for voice."), "runtime must not contain false ready for voice string");
assert(!app.includes("ready, listening, heard you, or speaking"), "runtime should not expose safety instruction text as UI");
assert(pkg.scripts["qa:nexus-genesis-truthful-voice-state"] === "node scripts/nexus-genesis-truthful-voice-state-qa.js", "package alias missing");
assert(qaSuite.includes("scripts/nexus-genesis-truthful-voice-state-qa.js"), "qa-suite missing truthful voice state QA");

console.log(JSON.stringify({
  ok: true,
  suite: "nexus-genesis-truthful-voice-state",
  verifies: [
    "permission alone does not produce ready state",
    "onstart is required before listening",
    "onresult/final transcript are distinct states",
    "utterance onstart is required before speaking",
    "permanent home control row is absent",
    "voiceDebug=1 is the only debug panel trigger",
    "orb remains non-interactive through existing front-door QA"
  ]
}, null, 2));
