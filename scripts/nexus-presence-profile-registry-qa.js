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

const contractBlock = sectionBetween(app, "const NEXUS_PRESENCE_PROFILE_CONTRACT", "const NEXUS_CORE_STATE_CONTRACT");
const registryBlock = sectionBetween(app, "const NEXUS_PRESENCE_PROFILE_REGISTRY", "const NEXUS_CORE_STATE_CONTRACT");
const getterBlock = sectionBetween(app, "function getNexusPresenceProfileRegistry()", "function normalizeNexusPresenceProfileId");
const resolverBlock = sectionBetween(app, "function normalizeNexusPresenceProfileId", "function renderNexusPresenceRuntimeBadge()");
const badgeBlock = sectionBetween(app, "function renderNexusPresenceRuntimeBadge()", "function handleNexusPresenceWakePhrase");
const exposeBlock = sectionBetween(app, "function exposeNexusAppWindowApis()", "function exposeNexusBrainIntelligenceRuntimeApis()");

[
  'schemaVersion: "nexus-presence-profile-contract.v1"',
  'registryName: "NexusVoiceProfileRegistry"',
  '"id"',
  '"displayName"',
  '"profileRole"',
  '"identityTraits"',
  '"deliveryModes"',
  '"toneBoundaries"',
  '"voiceProviderPolicy"',
  '"regionalizationPolicy"',
  '"accessibilityPolicy"',
  '"safetyBoundaries"',
  'defaultProfileId: "nexus-presence"',
  'profileSelectionStorageKey: "nexusPresenceProfileId"',
  "approvedPreferenceOnly: true",
  "noVoiceCloning: true",
  "noCharacterImitation: true",
  "noRegionalAccentClaimWithoutProvider: true"
].forEach(token => includes(contractBlock, token, `profile contract token ${token}`));

[
  '"nexus-presence"',
  'displayName: "Nexus Presence"',
  'profileRole: "official-global-assistant"',
  "calm, confident, warm, patient, intelligent, respectful, honest, nonjudgmental, professional Nexus identity",
  'defaultDeliveryMode: "STANDARD"',
  'clinical: "measured, safety-first, no diagnosis, no prescribing, no medication changes"',
  'agriculture: "practical, local-context aware, source-aware, no yield or chemical guarantees"',
  'workforce: "encouraging, plain-language, opportunity-oriented"',
  'marketplace: "neutral and transaction-gated"',
  'urgent: "calm, direct, and bounded without claiming emergency dispatch"',
  'preferredRuntime: "browser-native-or-configured-provider"',
  "browserFallback: true",
  "typedFallback: true",
  'speechSynthesisController: "NexusSpeechSynthesisController"',
  'speechRecognitionController: "NexusSpeechRecognitionController"',
  "noAutoplayRequirement: true",
  "noProviderClaimWithoutAvailability: true",
  "regionalVoiceIfAvailable: true",
  "noFakeAccent: true",
  "If a regional voice is unavailable, Nexus uses the safest available voice and keeps captions visible.",
  "noDiagnosis: true",
  "noPrescribing: true",
  "noProviderHandoffFromProfile: true",
  "noUnconfirmedMessagesCallsPaymentsLocationCameraEmergency: true",
  "highRiskActionsRemainGated: true"
].forEach(token => includes(registryBlock, token, `official profile registry token ${token}`));

[
  "contract: NEXUS_PRESENCE_PROFILE_CONTRACT",
  "profiles: NEXUS_PRESENCE_PROFILE_REGISTRY",
  "profileIds: Object.keys(NEXUS_PRESENCE_PROFILE_REGISTRY)",
  "activeProfileId: resolveNexusPresenceProfileId()"
].forEach(token => includes(getterBlock, token, `registry getter token ${token}`));

[
  "function normalizeNexusPresenceProfileId",
  "function resolveNexusPresenceProfileId",
  "function resolveNexusPresenceProfile",
  "function setNexusPresenceProfile",
  "localStorage.getItem(NEXUS_PRESENCE_PROFILE_CONTRACT.profileSelectionStorageKey)",
  "localStorage.setItem(NEXUS_PRESENCE_PROFILE_CONTRACT.profileSelectionStorageKey, id)",
  "runtimeOwner: nexusOsVoiceRuntimeState.runtimeOwner",
  "selectedLanguage: voiceLanguageName()",
  "selectedLocale: voiceLocale()",
  "voiceRuntimeSchema: nexusOsVoiceRuntimeState.schemaVersion",
  "noVoiceCloning: NEXUS_PRESENCE_PROFILE_CONTRACT.noVoiceCloning",
  "noCharacterImitation: NEXUS_PRESENCE_PROFILE_CONTRACT.noCharacterImitation",
  "noRegionalAccentClaimWithoutProvider: NEXUS_PRESENCE_PROFILE_CONTRACT.noRegionalAccentClaimWithoutProvider",
  "updateNexusOsVoiceRuntimeState({ presenceProfileId: id, presenceProfileName: profile.displayName }"
].forEach(token => includes(resolverBlock, token, `profile resolver token ${token}`));

[
  "NexusVoiceProfileRegistry",
  '"NexusVoiceProfileRegistry"',
  '"NexusPresenceRuntime"'
].forEach(token => includes(app, token, `profile registry integrated with baseline ${token}`));

[
  "const profile = resolveNexusPresenceProfile()",
  'data-nexus-presence-profile="${escapeHtml(profile.displayName)}"',
  'data-nexus-presence-profile-id="${escapeHtml(profile.id)}"',
  'data-nexus-presence-profile-contract="${escapeHtml(profile.contractVersion)}"',
  'data-nexus-presence-registry="${escapeHtml(profile.registryName)}"'
].forEach(token => includes(badgeBlock, token, `profile badge token ${token}`));

[
  "window.NEXUS_PRESENCE_PROFILE_CONTRACT = NEXUS_PRESENCE_PROFILE_CONTRACT",
  "window.NEXUS_PRESENCE_PROFILE_REGISTRY = NEXUS_PRESENCE_PROFILE_REGISTRY",
  "window.getNexusPresenceProfileRegistry = getNexusPresenceProfileRegistry",
  "window.resolveNexusPresenceProfile = resolveNexusPresenceProfile",
  "window.setNexusPresenceProfile = setNexusPresenceProfile"
].forEach(token => includes(exposeBlock, token, `profile API exposure ${token}`));

assert(!/imitates? .*actor|voice cloned|clone .*voice|fake regional voice|guaranteed accent|provider handoff from profile/i.test(contractBlock + registryBlock + resolverBlock), "profile registry must not introduce unsafe voice or provider claims");
console.log("PASS no unsafe profile claims");

assert(pkg.scripts["qa:nexus-presence-profile-registry"] === "node scripts/nexus-presence-profile-registry-qa.js", "package alias exists");
console.log("PASS package alias exists");
assert(qaSuite.includes("scripts/nexus-presence-profile-registry-qa.js"), "safe QA suite includes presence profile registry QA");
console.log("PASS safe QA suite includes presence profile registry QA");

console.log("Nexus Presence profile registry QA passed.");
