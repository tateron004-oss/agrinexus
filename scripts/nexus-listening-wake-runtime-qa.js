const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL ${message}`);
    process.exit(1);
  }
  console.log(`PASS ${message}`);
}

function includes(source, token, message) {
  assert(source.includes(token), message || `contains ${token}`);
}

function blockBetween(source, start, end) {
  const startIndex = source.indexOf(start);
  assert(startIndex >= 0, `block start exists: ${start}`);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `block end exists: ${end}`);
  return source.slice(startIndex, endIndex);
}

const contractBlock = blockBetween(app, "const NEXUS_LISTENING_WAKE_CONTROLLER_CONTRACT", "async function chromeMicrophonePermissionState");
const voiceTransportBlock = blockBetween(app, "async function startVoiceRuntimeTransport", "async function startVoiceListening");
const startBlock = blockBetween(app, "async function startVoiceListening", "async function sendModuleNotification");
const exposeBlock = blockBetween(app, "function exposeNexusAppWindowApis()", "function exposeNexusBrainIntelligenceRuntimeApis()");

[
  'schemaVersion: "nexus-listening-wake-runtime.v1"',
  'controllerName: "NexusSpeechRecognitionController"',
  'canonicalRuntimeOwner: "nexus-os-canonical-voice"',
  '"press-to-talk"',
  '"wake-phrase-gated"',
  '"typed-fallback"',
  '"Nexus"',
  '"Hello Nexus"',
  "requiresUserGestureForBrowserMic: true",
  "noAlwaysOnListeningClaim: true",
  "noHiddenMicrophoneStart: true",
  "noHeardClaimOnFailure: true",
  "duplicateSessionPrevention: true",
  "typedFallbackRequired: true",
  "transcriptCorrectionSupported: true",
  "languageSwitchSupported: true",
  "noWorkflowExecutionAuthority: true",
  "function nexusListeningWakeControllerState",
  "function createNexusRecognitionConfig",
  "function markNexusListeningControllerEvent",
  "function normalizeNexusWakeTranscript"
].forEach(token => includes(contractBlock, token, `listening/wake controller token ${token}`));

[
  "markNexusListeningControllerEvent(\"typed-fallback\"",
  "nexusOsVoiceStartInFlight = true",
  "startRealtimeVoiceSession",
  "legacy-runtime-disabled",
  "realtime-blocked",
  "realtime-failed",
  "OpenAI Realtime did not connect to a live microphone track",
  "OpenAI Realtime voice could not start"
].forEach(token => includes(voiceTransportBlock, token, `voice runtime transport controller wiring ${token}`));

[
  "model: sessionPayload.model || status.model || \"gpt-realtime-2\"",
  "preverifiedMicrophoneStream",
  "normalizeRealtimeMicrophoneProof(controller)",
  "recordNexusAudioPipelineEvent(\"openai-realtime-connected\"",
  "permission-denied",
  "microphone-unavailable",
  "openai-realtime-not-connected",
  "openai-realtime-start-failed",
  "Type your request in Ask Nexus"
].forEach(token => includes(voiceTransportBlock + startBlock + app, token, `existing recognition safety token ${token}`));

[
  "window.NEXUS_LISTENING_WAKE_CONTROLLER_CONTRACT = NEXUS_LISTENING_WAKE_CONTROLLER_CONTRACT",
  "window.nexusListeningWakeControllerState = nexusListeningWakeControllerState",
  "window.createNexusRecognitionConfig = createNexusRecognitionConfig",
  "window.normalizeNexusWakeTranscript = normalizeNexusWakeTranscript"
].forEach(token => includes(exposeBlock, token, `listening/wake API exposure ${token}`));

assert(!/always-on listening is enabled|silent microphone start|hidden microphone|nexus heard you.*permission-denied/i.test(contractBlock + voiceTransportBlock + startBlock), "listening controller avoids unsafe microphone and heard claims");
assert(pkg.scripts["qa:nexus-listening-wake-runtime"] === "node scripts/nexus-listening-wake-runtime-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-listening-wake-runtime-qa.js"), "safe QA suite includes listening/wake runtime QA");

console.log("Nexus listening and wake runtime QA passed.");
