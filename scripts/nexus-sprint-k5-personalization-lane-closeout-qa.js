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

const docName = "NEXUS_SPRINT_K5_PERSONALIZATION_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-k5-personalization-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint K5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint K5 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-personalization-readiness-contract.js");
const featureFlagModule = read("public", "nexus-personalization-feature-flag.js");
const k3Harness = read("scripts", "nexus-sprint-k3-personalization-flag-contract-harness.js");
const fixtures = loadPersonalizationFlagFixtures();

assertIncludes(doc, [
  "Sprint K5",
  "02aa135e715487cbda81f5c5ddbf13cdcb70be0f",
  "documentation and deterministic QA only",
  "Sprint K Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint L1 - Advanced Intent Understanding Runtime Activation Readiness Gate"
], "K5 closeout doc");

assertIncludes(doc, [
  "Personalization runtime activation readiness gate",
  "Personalization feature flag contract",
  "Personalization flag contract harness",
  "Personalization runtime absence regression guard",
  "Personalization lane closeout"
], "K5 sprint summary");

assertIncludes(doc, [
  "Personalization readiness is not runtime activation",
  "Personalization visibility readiness is not preference authority",
  "preference context is not proof of consent, identity, role authorization, provider authorization, or execution approval",
  "preferences must remain non-authoritative context",
  "enabled: false",
  "visibleUiAllowed: false",
  "preferenceContextAllowed: false",
  "preferenceEngineAllowed: false",
  "automaticPersonalizationAllowed: false",
  "hiddenPersonalizationAllowed: false",
  "preferencePersistenceAllowed: false",
  "preferenceSyncAllowed: false",
  "preferenceMutationAllowed: false",
  "profileDerivedExecutionAllowed: false",
  "providerHandoffAllowed: false",
  "riskTierMutationAllowed: false",
  "standardUserPreferenceMutationAllowed: false",
  "permissionPromptAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "auditWriteAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "unsafe authority attempts normalize back to no-execution values",
  "no action has been taken"
], "K5 no-authority and no-execution language");

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
  "role elevation",
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
], "K5 blocked runtime categories");

const requiredDocs = [
  "NEXUS_SPRINT_K1_PERSONALIZATION_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_K2_PERSONALIZATION_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_K3_PERSONALIZATION_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_K4_PERSONALIZATION_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_PERSONALIZATION_READINESS_CONTRACT_PHASE_63.md",
  "NEXUS_ADVANCED_INTENT_UNDERSTANDING_READINESS_CONTRACT_PHASE_64.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint K5 requires prior or next-lane doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-k1-personalization-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-k2-personalization-feature-flag-contract-qa.js",
  "nexus-sprint-k3-personalization-flag-contract-harness-qa.js",
  "nexus-sprint-k4-personalization-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint K5 requires prior Sprint K QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint K QA: ${requiredScript}`);
}

assert(exists("public", "nexus-personalization-readiness-contract.js"), "Sprint K5 requires Phase 63 Personalization readiness contract.");
assert(exists("public", "nexus-personalization-feature-flag.js"), "Sprint K5 requires K2 feature flag contract.");
assert(exists("fixtures", "nexus", "personalization-feature-flags.json"), "Sprint K5 requires K3 feature flag fixture.");

assertIncludes(readinessContract, [
  "PERSONALIZATION_READINESS_CONTRACT",
  "personalization.readiness.phase_63",
  "PERSONALIZATION_NO_EXECUTION_DEFAULTS",
  "createPersonalizationReadinessContract",
  "executionAllowed: false",
  "liveActionEnabled: false"
], "Phase 63 Personalization readiness contract");

assertIncludes(featureFlagModule, [
  "DEFAULT_PERSONALIZATION_FEATURE_FLAG_STATE",
  "NEXUS_PERSONALIZATION_VISIBLE_ENABLED",
  "normalizePersonalizationFeatureFlagState",
  "isPersonalizationVisibleFeatureEnabled",
  "executionAuthority",
  "noExecution"
], "K2 Personalization feature flag module");

assertIncludes(k3Harness, [
  "loadPersonalizationFlagFixtures",
  "validatePersonalizationFlagFixtures"
], "K3 Personalization harness");

assert.equal(DEFAULT_PERSONALIZATION_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_PERSONALIZATION_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_PERSONALIZATION_FEATURE_FLAG_STATE[field], false, `K5 default ${field} must remain false.`);
}
assert.equal(DEFAULT_PERSONALIZATION_FEATURE_FLAG_STATE.noExecution, true);

const normalizedUnsafeAttempt = normalizePersonalizationFeatureFlagState({
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

assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validatePersonalizationFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "K3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "K3 fixtures must remain complete.");

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
  "mutateRiskTierFromPreferences",
  "nexus-sprint-k5-personalization-lane-closeout"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Personalization lane artifact: ${term}`);
}

for (const source of [featureFlagModule, k3Harness]) {
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
    assert(!source.includes(term), `Sprint K contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-k5-personalization-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint K5 QA.");

console.log("[nexus-sprint-k5-personalization-lane-closeout-qa] passed");
