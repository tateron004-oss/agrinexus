const fs = require("fs");
const assert = require("assert");

const app = fs.readFileSync("public/app.js", "utf8");
const index = fs.readFileSync("public/index.html", "utf8");
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
const qaSuite = fs.readFileSync("scripts/qa-suite.js", "utf8");

function includes(source, needle, label) {
  assert(source.includes(needle), `${label} should include ${needle}`);
  console.log(`PASS ${label}`);
}

function sectionBetween(source, start, end) {
  const startIndex = source.indexOf(start);
  assert(startIndex >= 0, `${start} exists`);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `${end} follows ${start}`);
  return source.slice(startIndex, endIndex);
}

const stateBlock = sectionBetween(app, 'let nexusOsVoiceStartInFlight = false;', 'let queuedVoiceSpeechTimer = null;');
const runtimeBlock = sectionBetween(app, "function persistNexusOsVoiceRuntimeState", "function userIsActivelySpeaking");
const voiceTransportBlock = sectionBetween(app, "async function startVoiceRuntimeTransport", "async function startVoiceListening");
const startBlock = sectionBetween(app, "async function startVoiceListening", "async function sendModuleNotification");
const clickBlock = sectionBetween(app, 'const commandCenterVoice = event.target.closest("[data-nexus-command-center-voice]");', 'const modeShortcut = event.target.closest("[data-nexus-mode-shortcut]");');
const userVoiceBlock = sectionBetween(app, 'const userVoiceButton = event.target.closest("[data-user-voice-action]");', 'const captionButton = event.target.closest("[data-caption-action]");');
const bindBlock = sectionBetween(app, '$("#voiceListenBtn").onclick', '$$("[data-command-preset]").forEach');
const surfaceBlock = sectionBetween(app, "function renderNexusOsUnifiedConversationSurface", "function updateNexusOsUnifiedConversationDom");

[
  "nexusOsVoiceRuntimeState",
  "nexus-os-voice-runtime.v1",
  "nexus-os-canonical-voice",
  "nexusOsVoiceStartInFlight",
  "handleNexusOsVoiceControlAction",
  "renderNexusOsVoiceRuntimeStatus",
  "nexusOsVoiceRuntimeSummary"
].forEach(token => includes(app, token, `canonical voice runtime token ${token}`));

[
  '"Nexus"',
  '"Hello Nexus"',
  "No always-on listening without explicit consent",
  "Push-to-talk",
  "Typed fallback available"
].forEach(token => includes(app, token, `voice privacy/wake phrase token ${token}`));

[
  "permission-denied",
  "unsupported-browser",
  "microphone-unavailable",
  "recognition-interrupted",
  "recognition-timeout",
  "typed-fallback"
].forEach(state => includes(stateBlock + startBlock + runtimeBlock, state, `voice fallback state ${state}`));

includes(voiceTransportBlock, "nexusOsVoiceStartInFlight = true", "Realtime start in-flight marker");
includes(startBlock, "manager.startSession(options)", "canonical manager owns duplicate start prevention");
includes(app, "function genesisVoiceConversationActive", "duplicate guard checks all active Genesis voice runtimes");
includes(voiceTransportBlock, "startRealtimeVoiceSession", "canonical runtime starts OpenAI Realtime session");
includes(voiceTransportBlock, "legacy-runtime-disabled", "legacy browser recognition is explicitly blocked");
assert(!voiceTransportBlock.includes("new Recognition()"), "canonical runtime must not create a browser recognition instance");
console.log("PASS canonical runtime avoids browser recognition instance");
includes(app, 'model: sessionPayload.model || status.model || "gpt-realtime-2"', "Realtime model diagnostics remain centralized");
includes(app, "utterance.lang = voiceLocale()", "speech synthesis locale follows app language");
includes(app, "utterance.rate = speechRateForLanguage()", "speech synthesis rate follows app language");
includes(app, "utterance.pitch = speechPitchForLanguage()", "speech synthesis pitch follows app language");
includes(app, "handleVoiceCommand(transcript", "Realtime/native final transcript reaches shared voice command path");
includes(app, 'recordNexusOsConversationTurn("user", command, { source', "final command delivered to unified conversation");
includes(surfaceBlock, "${renderNexusOsVoiceRuntimeStatus()}", "voice status rendered in unified conversation surface");

includes(clickBlock, 'handleNexusOsVoiceControlAction("toggle-listening"', "command center mic uses canonical handler");
assert(!clickBlock.includes("nexusVoiceDemoTalkBtn"), "command center mic must not delegate to mode-specific voice demo shell");
console.log("PASS command center mic avoids mode-specific demo shell");
includes(userVoiceBlock, 'handleNexusOsVoiceControlAction("toggle-listening"', "user voice dock listen uses canonical handler");
includes(userVoiceBlock, 'handleNexusOsVoiceControlAction("repeat-response"', "user voice dock read uses canonical handler");
includes(bindBlock, 'handleNexusOsVoiceControlAction("toggle-listening"', "legacy direct listen handlers use canonical handler");
includes(bindBlock, 'handleNexusOsVoiceControlAction("repeat-response"', "legacy direct read handlers use canonical handler");

[
  'data-nexus-os-voice-control="toggle-listening"',
  'data-nexus-os-voice-control="repeat-response"',
  'data-nexus-os-voice-control="voice-help"'
].forEach(token => includes(index + app, token, `canonical voice control marker ${token}`));

[
  "voiceDemoQuietMode",
  "nexusOsConversationMuted",
  "stopVoicePlayback",
  "window.speechSynthesis.cancel()"
].forEach(token => includes(runtimeBlock + app, ` ${token}`.trim(), `stop/mute path token ${token}`));

assert(!/always-on listening is enabled|silent microphone|background microphone/i.test(runtimeBlock + startBlock), "voice runtime must not claim hidden always-on listening");
console.log("PASS no hidden always-on listening claim");

assert(pkg.scripts["qa:nexus-os-voice-runtime-consolidation"] === "node scripts/nexus-os-voice-runtime-consolidation-qa.js", "package alias exists");
console.log("PASS package alias exists");
assert(qaSuite.includes("scripts/nexus-os-voice-runtime-consolidation-qa.js"), "safe QA suite includes Rail 6 QA");
console.log("PASS safe QA suite includes Rail 6 QA");

console.log("Nexus OS voice runtime consolidation QA passed.");
