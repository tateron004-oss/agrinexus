const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_PERSONALIZATION_FEATURE_FLAG_STATE,
  normalizePersonalizationFeatureFlagState
} = require("../public/nexus-personalization-feature-flag.js");
const {
  protectedFields,
  loadPersonalizationFlagFixtures,
  validatePersonalizationFlagFixtures
} = require("./nexus-sprint-k3-personalization-flag-contract-harness.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertIncludes(source, terms, label) {
  const normalizedSource = source.replace(/`/g, "");
  for (const term of terms) {
    assert(normalizedSource.includes(term), `${label} must include: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_K4_PERSONALIZATION_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-k4-personalization-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint K4 runtime absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint K4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const featureFlagModule = read("public", "nexus-personalization-feature-flag.js");
const harnessSource = read("scripts", "nexus-sprint-k3-personalization-flag-contract-harness.js");
const fixtures = loadPersonalizationFlagFixtures();

assertIncludes(doc, [
  "Sprint K4",
  "90eb06b8389fc7be831c99789ff1b46439e4f1d5",
  "documentation and QA only",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Sprint K5 - Personalization Lane Closeout"
], "K4 runtime absence doc");

assertIncludes(doc, [
  "public/nexus-personalization-readiness-contract.js",
  "public/nexus-personalization-feature-flag.js",
  "scripts/nexus-sprint-k3-personalization-flag-contract-harness.js",
  "fixtures/nexus/personalization-feature-flags.json",
  "It intentionally does not ban generic words such as personal, language, preference, or settings"
], "K4 protected artifact list");

assertIncludes(doc, [
  "visible personalization center UI",
  "personalization center buttons",
  "preference forms",
  "event handlers",
  "confirmation bypasses",
  "preference loading",
  "preference saving",
  "preference editing",
  "preference mutation",
  "preference sharing",
  "preference sync",
  "hidden personalization",
  "automatic personalization",
  "profile-derived execution",
  "provider handoff from preferences",
  "risk tier mutation",
  "permission prompts",
  "audit writes",
  "backend writes",
  "localStorage or sessionStorage writes",
  "fetch or network calls",
  "provider handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "payment execution",
  "marketplace transactions",
  "location sharing",
  "camera or microphone activation",
  "health, medical, pharmacy, prescription, or FHIR execution",
  "appointment scheduling",
  "transportation dispatch",
  "emergency dispatch",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "K4 blocked runtime behavior");

for (const prior of [
  ["docs", "NEXUS_SPRINT_K1_PERSONALIZATION_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_K2_PERSONALIZATION_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_K3_PERSONALIZATION_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_PERSONALIZATION_READINESS_CONTRACT_PHASE_63.md"],
  ["public", "nexus-personalization-readiness-contract.js"],
  ["public", "nexus-personalization-feature-flag.js"],
  ["fixtures", "nexus", "personalization-feature-flags.json"],
  ["scripts", "nexus-sprint-k3-personalization-flag-contract-harness.js"]
]) {
  assert(exists(...prior), `Sprint K4 requires prior artifact: ${prior.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-personalization-readiness-contract.js",
  "nexus-personalization-feature-flag.js",
  "nexus-sprint-k3-personalization-flag-contract-harness",
  "personalization-feature-flags.json",
  "NEXUS_PERSONALIZATION_VISIBLE_ENABLED",
  "NexusPersonalizationFeatureFlagContract",
  "normalizePersonalizationFeatureFlagState",
  "isPersonalizationVisibleFeatureEnabled",
  "renderPersonalizationCenter",
  "openPersonalizationCenter",
  "loadPreferences(",
  "savePreferences(",
  "updatePreferences(",
  "sharePreferences(",
  "syncPreferences(",
  "applyPersonalization",
  "personalizeResponse",
  "executePersonalizationAction",
  "dispatchPersonalizationAction",
  "mutateRiskTierFromPreferences"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Personalization artifact: ${term}`);
}

assert.equal(DEFAULT_PERSONALIZATION_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_PERSONALIZATION_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_PERSONALIZATION_FEATURE_FLAG_STATE[field], false, `K2 default ${field} must remain false.`);
}
assert.equal(DEFAULT_PERSONALIZATION_FEATURE_FLAG_STATE.noExecution, true);

const unsafeAttempt = normalizePersonalizationFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true,
  preferenceContextAllowed: true,
  preferenceEngineAllowed: true,
  automaticPersonalizationAllowed: true,
  hiddenPersonalizationAllowed: true,
  preferencePersistenceAllowed: true,
  preferenceSyncAllowed: true,
  preferenceMutationAllowed: true,
  profileDerivedExecutionAllowed: true,
  providerHandoffAllowed: true,
  riskTierMutationAllowed: true,
  standardUserPreferenceMutationAllowed: true,
  permissionPromptAllowed: true,
  backendWriteAllowed: true,
  storageWriteAllowed: true,
  networkAllowed: true,
  auditWriteAllowed: true,
  executionAuthority: true,
  noExecution: false
});
assert.equal(unsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(unsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const fixtureResult = validatePersonalizationFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "K3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "K3 fixtures must remain complete.");

for (const source of [featureFlagModule, harnessSource]) {
  for (const term of [
    "document.",
    "querySelector",
    "addEventListener",
    "fetch(",
    "XMLHttpRequest",
    "localStorage",
    "sessionStorage",
    "indexedDB",
    "navigator.credentials",
    "navigator.geolocation",
    "mediaDevices",
    "window.location",
    "location.href",
    "open(",
    "sendBeacon",
    "setItem",
    "postMessage",
    "window.nativeBridge",
    "nativeBridge.",
    "ACTION_CALL",
    "getUserMedia",
    "openWorkflow(",
    "goSection("
  ]) {
    assert(!source.includes(term), `K2/K3 artifact must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-k4-personalization-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint K4 QA.");

console.log("[nexus-sprint-k4-personalization-runtime-absence-regression-guard-qa] passed");
