const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const app = read("public/app.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

const checks = [];
function check(name, condition) {
  checks.push({ name, condition: Boolean(condition) });
}

function hasAll(source, tokens) {
  return tokens.every(token => source.includes(token));
}

function sectionBetween(source, start, end) {
  const startIndex = source.indexOf(start);
  check(`section start exists: ${start}`, startIndex >= 0);
  if (startIndex < 0) return "";
  const endIndex = source.indexOf(end, startIndex + start.length);
  check(`section end exists after ${start}: ${end}`, endIndex > startIndex);
  return endIndex > startIndex ? source.slice(startIndex, endIndex) : source.slice(startIndex);
}

const acceptanceBlock = sectionBetween(app, "const NEXUS_PRESENCE_ACCEPTANCE_RELEASE_CONTRACT", "let nexusCoreRuntimeState");
const getterBlock = sectionBetween(app, "function getNexusPresenceAcceptanceReleaseContract", "function getNexusPresenceProfileRegistry");
const exposureBlock = sectionBetween(app, "function exposeNexusAppWindowApis", "function exposeNexusBrainIntelligenceRuntimeApis");

[
  'schemaVersion: "nexus-presence-acceptance-release.v1"',
  'standardName: "Nexus Presence Standard 1.0"',
  'releaseName: "Full Presence Acceptance And Release"',
  'releaseStatus: "accepted-for-safe-runtime"',
  'enforcementContract: "NEXUS_PRESENCE_DESIGN_ENFORCEMENT_CONTRACT"',
  'acceptanceQa: "scripts/nexus-presence-acceptance-qa.js"'
].forEach(token => check(`acceptance contract includes ${token}`, acceptanceBlock.includes(token)));

[
  "Standard User command center",
  "Nexus voice runtime",
  "Ask Nexus typed fallback",
  "Mission lifecycle",
  "Nexus orb",
  "Captions and transcript strip",
  "Domain tone safety adapters",
  "Regional voice fallback",
  "Voice preferences and accessibility controls"
].forEach(token => check(`accepted runtime surface: ${token}`, acceptanceBlock.includes(token)));

[
  "standard-user-presence-load",
  "agriculture-presence-response",
  "health-presence-response",
  "learning-presence-response",
  "employment-presence-response",
  "provider-unavailable-honesty",
  "regional-voice-fallback-honesty",
  "accessibility-text-caption-fallback",
  "deployment-profile-no-runtime-duplication",
  "performance-lightweight-contract"
].forEach(token => check(`acceptance scenario: ${token}`, acceptanceBlock.includes(token)));

[
  "designBibleEnforced: true",
  "noDuplicateVoiceRuntime: true",
  "captionsRequired: true",
  "typedFallbackRequired: true",
  "screenReaderStatusRequired: true",
  "reducedMotionRequired: true",
  "noFakeSpeech: true",
  "noFakeHearing: true",
  "noFakeAccent: true",
  "noFakeCompletion: true",
  "highRiskActionsRemainGated: true",
  "noProviderClaimWithoutAvailability: true",
  "noDomainPackVoiceEngine: true"
].forEach(token => check(`release gate: ${token}`, acceptanceBlock.includes(token)));

[
  "Standard User dashboard opens",
  "Ask Nexus remains usable by typing",
  "voice control remains user-initiated",
  "captions and live region are present",
  "orb and mission state synchronize without unverified completion",
  "provider unavailable language stays honest",
  "regional voice fallback stays disclosed",
  "no unsafe user-facing Presence claims are visible"
].forEach(token => check(`browser validation expectation: ${token}`, acceptanceBlock.includes(token)));

[
  "baselineSchema: NEXUS_PRESENCE_RUNTIME_BASELINE.schemaVersion",
  "profileSchema: NEXUS_PRESENCE_PROFILE_CONTRACT.schemaVersion",
  "voiceCapabilitySchema: NEXUS_VOICE_CAPABILITY_REGISTRY.schemaVersion",
  "regionalVoiceSchema: NEXUS_REGIONAL_VOICE_RESOLUTION_CONTRACT.schemaVersion",
  "conversationStyleSchema: NEXUS_CONVERSATION_STYLE_ENGINE_CONTRACT.schemaVersion",
  "domainToneSchema: NEXUS_DOMAIN_TONE_SAFETY_ADAPTER_CONTRACT.schemaVersion",
  "speechSynthesisSchema: NEXUS_SPEECH_SYNTHESIS_CONTROLLER_CONTRACT.schemaVersion",
  "listeningWakeSchema: NEXUS_LISTENING_WAKE_CONTROLLER_CONTRACT.schemaVersion",
  "synchronizationSchema: NEXUS_PRESENCE_SYNCHRONIZATION_CONTRACT.schemaVersion",
  "voicePreferencesSchema: NEXUS_VOICE_PREFERENCES_ACCESSIBILITY_CONTRACT.schemaVersion",
  "enforcementSchema: NEXUS_PRESENCE_DESIGN_ENFORCEMENT_CONTRACT.schemaVersion"
].forEach(token => check(`getter links ${token}`, getterBlock.includes(token)));

[
  "window.NEXUS_PRESENCE_ACCEPTANCE_RELEASE_CONTRACT = NEXUS_PRESENCE_ACCEPTANCE_RELEASE_CONTRACT",
  "window.getNexusPresenceAcceptanceReleaseContract = getNexusPresenceAcceptanceReleaseContract"
].forEach(token => check(`acceptance API exposed: ${token}`, app.includes(token) && exposureBlock.includes(token)));

[
  "data-nexus-presence-runtime=\"shared\"",
  "data-nexus-presence-status-announcement",
  "data-nexus-presence-caption-sync",
  "data-nexus-voice-preferences-controls=\"true\"",
  "data-nexus-os-conversation-live-region",
  "data-nexus-os-voice-control"
].forEach(token => check(`runtime surface remains present: ${token}`, app.includes(token)));

[
  "NEXUS_PRESENCE_RUNTIME_BASELINE",
  "NEXUS_PRESENCE_PROFILE_CONTRACT",
  "NEXUS_VOICE_CAPABILITY_REGISTRY",
  "NEXUS_REGIONAL_VOICE_RESOLUTION_CONTRACT",
  "NEXUS_CONVERSATION_STYLE_ENGINE_CONTRACT",
  "NEXUS_DOMAIN_TONE_SAFETY_ADAPTER_CONTRACT",
  "NEXUS_SPEECH_SYNTHESIS_CONTROLLER_CONTRACT",
  "NEXUS_LISTENING_WAKE_CONTROLLER_CONTRACT",
  "NEXUS_PRESENCE_SYNCHRONIZATION_CONTRACT",
  "NEXUS_VOICE_PREFERENCES_ACCESSIBILITY_CONTRACT",
  "NEXUS_PRESENCE_DESIGN_ENFORCEMENT_CONTRACT"
].forEach(token => check(`required Presence contract still exists: ${token}`, app.includes(token)));

check("domain adapters preserve health safety", hasAll(app, [
  "I can organize health information for education and provider review",
  "noDiagnosis: true",
  "noPrescribing: true",
  "noEmergencyDispatch: true"
]));

check("agriculture/workforce/learning domains remain covered", hasAll(app, [
  '"agriculture"',
  '"workforce"',
  '"learning"',
  "source-aware",
  "opportunity-oriented",
  "explain topics and prepare learning"
]));

check("provider failure remains honest", hasAll(app, [
  "I can't reach that service right now.",
  "Provider action completed without verified provider state",
  "noProviderClaimWithoutAvailability: true",
  "providerUnavailableIsNotCompleted: true"
]));

check("regional voice fallback remains honest", hasAll(app, [
  "noFakeAccent: true",
  "noRegionalAccentClaimWithoutProvider: true",
  "caption-and-typed-fallback",
  "discloseFallbackVoice: true"
]));

check("voice and listening remain user-initiated", hasAll(app, [
  "requiresUserGestureForBrowserMic: true",
  "noAlwaysOnListeningClaim: true",
  "noHiddenMicrophoneStart: true",
  "noWorkflowExecutionAuthority: true"
]));

check("no duplicate domain voice runtime patterns", [
  /function\s+.*Agriculture.*Speech.*Runtime/i,
  /function\s+.*Health.*Speech.*Runtime/i,
  /function\s+.*Learning.*Speech.*Runtime/i,
  /const\s+.*Agriculture.*Voice.*Engine/i,
  /const\s+.*Health.*Voice.*Engine/i
].every(pattern => !pattern.test(app)));

check("package alias exists", pkg.scripts["qa:nexus-presence-acceptance"] === "node scripts/nexus-presence-acceptance-qa.js");
check("nexus-workforce suite includes acceptance QA", qaSuite.includes("scripts/nexus-presence-acceptance-qa.js"));
check("all-safe suite includes acceptance QA", qaSuite.includes("scripts/nexus-presence-acceptance-qa.js"));

const failures = checks.filter(item => !item.condition);
if (failures.length) {
  console.error("Nexus Presence acceptance QA failed:");
  failures.forEach(item => console.error(`- ${item.name}`));
  process.exit(1);
}

console.log("Nexus Presence acceptance QA passed.");
