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

const contractBlock = blockBetween(app, "const NEXUS_SPEECH_SYNTHESIS_CONTROLLER_CONTRACT", "function isGuidedHealthVoiceResponse");
[
  'schemaVersion: "nexus-speech-synthesis-controller.v1"',
  'controllerName: "NexusSpeechSynthesisController"',
  'canonicalRuntimeOwner: "nexus-os-canonical-voice"',
  '"openai-tts"',
  '"browser-speech-synthesis"',
  '"typed-caption-fallback"',
  'browserAdapter: "NexusBrowserSpeechSynthesisAdapter"',
  'serverAdapter: "NexusServerTtsAdapter"',
  "rate: 0.92",
  "pitch: 0.9",
  "volume: 1",
  "featureDetected: true",
  "userGestureRequiredForAudibleSpeech: true",
  "captionsFallbackRequired: true",
  "noAutoplayClaim: true",
  "noProviderClaimWithoutAvailability: true",
  "noVoiceCloning: true",
  "noCharacterImitation: true",
  "noWorkflowExecutionAuthority: true",
  "function nexusSpeechSynthesisControllerState",
  "function createNexusSpeechSynthesisUtterance",
  "function runNexusSpeechSynthesisController",
  "chooseSpeechVoice(locale)",
  "speechRateForLanguage",
  "speechPitchForLanguage",
  "window.speechSynthesis.speak(prepared.utterance)"
].forEach(token => includes(contractBlock, token, `speech synthesis controller token ${token}`));

const speakBlock = blockBetween(app, "function speakVoiceResponse", "function setVoiceStatus");
[
  "runNexusSpeechSynthesisController(compact",
  "Using opt-in browser speech fallback. NexusSpeechSynthesisController is managing playback.",
  "Browser speech fallback could not start: ${speechResult.reason}",
  "request(\"/api/voice/speak\"",
  "forceOpenAi: true",
  "browserSpeak("
].forEach(token => includes(speakBlock, token, `speech fallback wiring token ${token}`));

[
  "window.NEXUS_SPEECH_SYNTHESIS_CONTROLLER_CONTRACT = NEXUS_SPEECH_SYNTHESIS_CONTROLLER_CONTRACT",
  "window.nexusSpeechSynthesisControllerState = nexusSpeechSynthesisControllerState",
  "window.createNexusSpeechSynthesisUtterance = createNexusSpeechSynthesisUtterance",
  "window.runNexusSpeechSynthesisController = runNexusSpeechSynthesisController"
].forEach(token => includes(app, token, `speech controller API exposure ${token}`));

assert(!/(imitates? .*actor|voice cloned|guaranteed accent|always-on speech|executes workflow through speech)/i.test(contractBlock + speakBlock), "speech controller avoids unsafe voice and execution claims");
assert(pkg.scripts["qa:nexus-speech-synthesis-controller"] === "node scripts/nexus-speech-synthesis-controller-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-speech-synthesis-controller-qa.js"), "safe QA suite includes speech synthesis controller QA");

console.log("Nexus speech synthesis controller QA passed.");
