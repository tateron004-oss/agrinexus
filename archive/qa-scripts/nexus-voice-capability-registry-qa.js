const fs = require("fs");
const path = require("path");
const assert = require("assert");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function sectionBetween(source, start, end) {
  const startIndex = source.indexOf(start);
  assert(startIndex >= 0, `${start} exists`);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `${end} follows ${start}`);
  return source.slice(startIndex, endIndex);
}

function includes(source, needle, label) {
  assert(source.includes(needle), `${label} should include ${needle}`);
  console.log(`PASS ${label}`);
}

const registryBlock = sectionBetween(app, "const NEXUS_VOICE_CAPABILITY_REGISTRY", "const NEXUS_CORE_STATE_CONTRACT");
const detectionBlock = sectionBetween(app, "function detectNexusVoiceProviderAvailability", "function getNexusVoiceCapabilityRegistry()");
const registryGetterBlock = sectionBetween(app, "function getNexusVoiceCapabilityRegistry()", "function resolveNexusVoiceProviderAdapters()");
const adaptersBlock = sectionBetween(app, "function resolveNexusVoiceProviderAdapters()", "function renderNexusPresenceRuntimeBadge()");
const badgeBlock = sectionBetween(app, "function renderNexusPresenceRuntimeBadge()", "function handleNexusPresenceWakePhrase");
const exposeBlock = sectionBetween(app, "function exposeNexusAppWindowApis()", "function exposeNexusBrainIntelligenceRuntimeApis()");

[
  'schemaVersion: "nexus-voice-capability-registry.v1"',
  'registryName: "NexusVoiceCapabilityRegistry"',
  '"browser-speech-recognition"',
  '"browser-speech-synthesis"',
  '"openai-tts"',
  '"openai-realtime-webrtc"',
  '"native-voice-bridge"',
  '"typed-fallback"',
  "NexusBrowserSpeechRecognitionAdapter",
  "NexusBrowserSpeechSynthesisAdapter",
  "NexusServerTtsAdapter",
  "NexusRealtimeVoiceAdapter",
  "NexusNativeVoiceBridgeAdapter",
  "NexusTypedFallbackAdapter",
  "NexusSpeechRecognitionController",
  "NexusSpeechSynthesisController",
  "NexusPresenceAccessibilityAdapter"
].forEach(token => includes(registryBlock, token, `voice capability registry token ${token}`));

[
  "requiresUserGesture: true",
  "requiresMicrophonePermission: true",
  "secretExposedToBrowser: false",
  "conversationOnly: true",
  "alwaysAvailable: true",
  "executionAuthority: false",
  "noSilentMicrophoneStart: true",
  "noAlwaysOnListening: true",
  "noSpeechOnlyBlocking: true",
  "noSecretExposure: true",
  "noVoiceProviderExecutionAuthority: true",
  "captionsRemainAvailable: true"
].forEach(token => includes(registryBlock, token, `voice capability safety token ${token}`));

[
  "function detectNexusVoiceProviderAvailability",
  "browserVoiceRuntimeProfile()",
  "window.speechSynthesis && window.SpeechSynthesisUtterance",
  'endpoint: "/api/voice/speak"',
  "realtimeVoiceSupported()",
  "realtimeVoiceStatusMessage()",
  "nativeVoiceBridge()",
  "nativeVoiceBridgeReady",
  "Always available as a text/accessibility fallback."
].forEach(token => includes(detectionBlock, token, `provider detection token ${token}`));

[
  "function getNexusVoiceCapabilityRegistry",
  "const providers = Object.values(NEXUS_VOICE_CAPABILITY_REGISTRY.providers).map",
  "availability: detectNexusVoiceProviderAvailability(provider.id)",
  "selectedLocale: voiceLocale()",
  "selectedLanguage: voiceLanguageName()",
  "activeProfileId: resolveNexusPresenceProfileId()",
  "textFallbackAvailable: true",
  "noSecretValues: true"
].forEach(token => includes(registryGetterBlock, token, `capability registry getter token ${token}`));

[
  "function resolveNexusVoiceProviderAdapters",
  "providerId: provider.id",
  "adapter: provider.adapter",
  "controller: provider.controller",
  "available: Boolean(provider.availability?.available)",
  "executionAuthority: false",
  "function nexusVoiceCapabilitySummary",
  "readyProviderIds",
  'fallbackProviderId: "typed-fallback"',
  "typedFallbackAvailable: true",
  "noExecutionAuthority: adapters.every"
].forEach(token => includes(adaptersBlock, token, `provider adapter token ${token}`));

[
  "const voiceCapabilities = nexusVoiceCapabilitySummary()",
  'data-nexus-voice-capability-registry="${escapeHtml(NEXUS_VOICE_CAPABILITY_REGISTRY.schemaVersion)}"',
  'data-nexus-voice-ready-providers="${escapeHtml(voiceCapabilities.readyProviderIds.join(" "))}"',
  'data-nexus-voice-no-execution-authority="${voiceCapabilities.noExecutionAuthority ? "true" : "false"}"',
  "speech output ready",
  "caption fallback ready"
].forEach(token => includes(badgeBlock, token, `voice capability badge token ${token}`));

[
  "window.NEXUS_VOICE_CAPABILITY_REGISTRY = NEXUS_VOICE_CAPABILITY_REGISTRY",
  "window.getNexusVoiceCapabilityRegistry = getNexusVoiceCapabilityRegistry",
  "window.resolveNexusVoiceProviderAdapters = resolveNexusVoiceProviderAdapters",
  "window.nexusVoiceCapabilitySummary = nexusVoiceCapabilitySummary"
].forEach(token => includes(exposeBlock, token, `voice capability API exposure ${token}`));

assert(!/secret.*browser.*true|silent microphone start|always-on listening enabled|voice provider execution authority/i.test(registryBlock + detectionBlock + adaptersBlock), "voice capability registry must not introduce unsafe voice claims");
console.log("PASS no unsafe voice provider claims");

assert(pkg.scripts["qa:nexus-voice-capability-registry"] === "node scripts/nexus-voice-capability-registry-qa.js", "package alias exists");
console.log("PASS package alias exists");
assert(qaSuite.includes("scripts/nexus-voice-capability-registry-qa.js"), "safe QA suite includes voice capability registry QA");
console.log("PASS safe QA suite includes voice capability registry QA");

console.log("Nexus voice capability registry QA passed.");
