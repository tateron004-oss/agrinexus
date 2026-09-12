const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function assert(condition, label) {
  if (!condition) {
    console.error(`FAIL ${label}`);
    process.exit(1);
  }
  console.log(`PASS ${label}`);
}

function sectionBetween(source, startNeedle, endNeedle) {
  const start = source.indexOf(startNeedle);
  assert(start >= 0, `${startNeedle} exists`);
  const end = source.indexOf(endNeedle, start);
  assert(end > start, `${endNeedle} follows ${startNeedle}`);
  return source.slice(start, end);
}

const app = read("public/app.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

const contractBlock = sectionBetween(app, "const NEXUS_VOICE_PREFERENCES_ACCESSIBILITY_CONTRACT", "function defaultNexusVoicePreferences");
const preferencesBlock = sectionBetween(app, "function defaultNexusVoicePreferences", "function browserSpeechFallbackEnabled");
const rateBlock = sectionBetween(app, "function speechRateForLanguage", "function speechPitchForLanguage");
const utteranceBlock = sectionBetween(app, "function createNexusSpeechSynthesisUtterance", "function speakVoiceResponse");
const conversationBlock = sectionBetween(app, "function renderNexusOsUnifiedConversationSurface", "function renderNexusOsVoiceRuntimeStatus");
const routerBlock = sectionBetween(app, "async function handleVoiceCommandCore", "\nasync function handleVoiceCommand(");
const clickBlock = sectionBetween(app, "document.addEventListener(\"click\"", "document.addEventListener(\"change\"");
const exposureBlock = sectionBetween(app, "function exposeNexusAppWindowApis", "function exposeNexusBrainIntelligenceRuntimeApis");

[
  "schemaVersion: \"nexus-voice-preferences-accessibility.v1\"",
  "controllerName: \"NexusVoicePreferenceManager\"",
  "runtimeOwner: \"nexus-os-canonical-voice\"",
  "storageKey: \"nexusPresenceVoicePreferences\"",
  "pendingConsentKey: \"nexusVoicePreferencePendingConsent\"",
  "\"language\"",
  "\"locale\"",
  "\"voiceName\"",
  "\"speechRatePreset\"",
  "\"speechVolume\"",
  "\"speechEnabled\"",
  "\"captionsEnabled\"",
  "\"answerLength\"",
  "\"formality\"",
  "\"deliveryMode\"",
  "consentRequiredForPersistentMemory: true",
  "temporaryPreferencesAllowed: true",
  "reviewPreferencesRequired: true",
  "resetSupported: true",
  "forgetSupported: true",
  "crossTenantIsolation: \"local-user-browser-scope\"",
  "noSensitiveAttributeInference: true",
  "textFallbackAlwaysAvailable: true",
  "unavailableVoiceFallsBackHonestly: true",
  "noWorkflowExecutionAuthority: true"
].forEach(token => assert(contractBlock.includes(token), `voice preferences contract includes ${token}`));

[
  "speak more slowly",
  "speak faster",
  "use a different English voice",
  "stop speaking and show text only",
  "enable captions",
  "prefer concise responses",
  "prefer more explanation",
  "prefer formal delivery",
  "prefer conversational delivery",
  "reset voice settings",
  "forget voice preferences"
].forEach(token => assert(contractBlock.includes(token), `voice preferences command catalog includes ${token}`));

[
  "function defaultNexusVoicePreferences",
  "function getNexusVoicePreferences",
  "function applyNexusVoicePreferences",
  "function rememberNexusVoicePreferences",
  "function setTemporaryNexusVoicePreference",
  "function forgetNexusVoicePreferences",
  "function nexusVoicePreferencesSummary",
  "function rotateNexusAvailableVoice",
  "function handleNexusVoicePreferenceMemoryConsent",
  "function handleNexusVoicePreferenceCommand",
  "function handleNexusVoicePreferenceControlAction"
].forEach(token => assert(app.includes(token), `voice preferences helper exists: ${token}`));

[
  "Would you like me to remember that",
  "localStorage.setItem(NEXUS_VOICE_PREFERENCES_ACCESSIBILITY_CONTRACT.pendingConsentKey",
  "localStorage.setItem(NEXUS_VOICE_PREFERENCES_ACCESSIBILITY_CONTRACT.storageKey",
  "localStorage.removeItem(NEXUS_VOICE_PREFERENCES_ACCESSIBILITY_CONTRACT.storageKey",
  "localStorage.removeItem(NEXUS_VOICE_PREFERENCES_ACCESSIBILITY_CONTRACT.pendingConsentKey",
  "saved-with-user-approval",
  "temporary-until-approved",
  "Okay. I will keep that preference for this browser session only."
].forEach(token => assert(preferencesBlock.includes(token), `voice preferences memory flow includes ${token}`));

[
  "speechRatePreset: \"slow\"",
  "speechRatePreset: \"fast\"",
  "speechEnabled: false",
  "captionsEnabled: true",
  "captionsEnabled: false",
  "answerLength: \"concise\"",
  "answerLength: \"detailed\"",
  "formality: \"formal\"",
  "formality: \"conversational\"",
  "speechVolume: Math.min",
  "speechVolume: Math.max"
].forEach(token => assert(preferencesBlock.includes(token), `voice preferences command handler supports ${token}`));

assert(rateBlock.includes("voicePreferenceRate") && rateBlock.includes("speechRatePreset"), "speech rate uses voice preference preset");
assert(rateBlock.includes("voicePreferenceRate === \"slow\""), "speech rate supports slow preference");
assert(rateBlock.includes("voicePreferenceRate === \"fast\""), "speech rate supports fast preference");
assert(utteranceBlock.includes("const preferredVolume = getNexusVoicePreferences?.().speechVolume"), "speech utterance reads preferred volume");
assert(utteranceBlock.includes("utterance.volume = Number.isFinite(options.volume)"), "speech utterance keeps explicit volume override");
assert(utteranceBlock.includes("preferredVolume"), "speech utterance safely falls back to preferred volume");

[
  "data-nexus-voice-preferences-controls=\"true\"",
  "data-nexus-voice-preferences-memory",
  "data-nexus-voice-preference-action=\"slower\"",
  "data-nexus-voice-preference-action=\"faster\"",
  "data-nexus-voice-preference-action=\"captions\"",
  "data-nexus-voice-preference-action=\"concise\"",
  "data-nexus-voice-preference-action=\"detailed\"",
  "data-nexus-voice-preference-action=\"text-only\"",
  "data-nexus-voice-preference-action=\"review\"",
  "data-nexus-voice-preference-action=\"reset\""
].forEach(token => assert(conversationBlock.includes(token), `voice preference UI includes ${token}`));

assert(clickBlock.includes("[data-nexus-voice-preference-action]"), "document click handler delegates voice preference controls");
assert(clickBlock.includes("handleNexusVoicePreferenceControlAction"), "document click handler calls voice preference control action");
assert(routerBlock.includes("handleNexusVoicePreferenceCommand(spokenCommand || command || localizedCommand || rawCommand"), "voice preferences route before general command handling");
assert(routerBlock.includes("handleNexusVoicePreferenceCommand(command || localizedCommand || rawCommand"), "voice preferences route before late language handling");

[
  "window.NEXUS_VOICE_PREFERENCES_ACCESSIBILITY_CONTRACT",
  "window.getNexusVoicePreferences",
  "window.setTemporaryNexusVoicePreference",
  "window.rememberNexusVoicePreferences",
  "window.forgetNexusVoicePreferences",
  "window.handleNexusVoicePreferenceCommand",
  "window.handleNexusVoicePreferenceControlAction"
].forEach(token => assert(exposureBlock.includes(token), `voice preference API exposed: ${token}`));

assert(!/voice preferences?.*(send|call|payment|dispatch|prescribe|diagnose|provider handoff)/i.test(preferencesBlock), "voice preferences do not introduce workflow execution claims");
assert(packageJson.scripts["qa:nexus-voice-preferences-accessibility"] === "node scripts/nexus-voice-preferences-accessibility-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-voice-preferences-accessibility-qa.js"), "safe QA suite includes voice preferences accessibility QA");

console.log("Nexus voice preferences accessibility QA passed.");
