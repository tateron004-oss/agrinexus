const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  PERSONALIZATION_FEATURE_FLAG_NAME,
  DEFAULT_PERSONALIZATION_FEATURE_FLAG_STATE,
  normalizePersonalizationFeatureFlagState,
  isPersonalizationVisibleFeatureEnabled
} = require("../public/nexus-personalization-feature-flag.js");

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

const docName = "NEXUS_SPRINT_K2_PERSONALIZATION_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-personalization-feature-flag.js";
const qaName = "nexus-sprint-k2-personalization-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint K2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint K2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint K2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const readinessContract = read("public", "nexus-personalization-readiness-contract.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint K2",
  "5060ff6f2d3b358e46b3346fd7e8c39ec5969fab",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_PERSONALIZATION_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Prohibited Behavior",
  "Relationship To Sprint K1",
  "QA Expectations",
  "Sprint K3 - Personalization Flag Contract Harness"
], "K2 feature flag doc");

assert(readinessContract.includes("personalization.readiness.phase_63"), "K2 must build on the Phase 63 Personalization readiness contract.");
assert(readinessContract.includes("preferenceEngineEnabled: false"), "Phase 63 preference engine default must remain false.");
assert(readinessContract.includes("automaticPersonalizationEnabled: false"), "Phase 63 automatic personalization default must remain false.");
assert(readinessContract.includes("hiddenPersonalizationEnabled: false"), "Phase 63 hidden personalization default must remain false.");
assert(readinessContract.includes("preferencePersistenceEnabled: false"), "Phase 63 preference persistence default must remain false.");
assert(readinessContract.includes("providerHandoffEnabled: false"), "Phase 63 provider handoff default must remain false.");
assert(readinessContract.includes("riskTierMutationEnabled: false"), "Phase 63 risk tier mutation default must remain false.");
assert(readinessContract.includes("executionAllowed: false"), "Phase 63 execution default must remain false.");

const protectedFields = [
  "preferenceContextAllowed",
  "preferenceEngineAllowed",
  "automaticPersonalizationAllowed",
  "hiddenPersonalizationAllowed",
  "preferencePersistenceAllowed",
  "preferenceSyncAllowed",
  "preferenceMutationAllowed",
  "profileDerivedExecutionAllowed",
  "providerHandoffAllowed",
  "riskTierMutationAllowed",
  "standardUserPreferenceMutationAllowed",
  "permissionPromptAllowed",
  "backendWriteAllowed",
  "storageWriteAllowed",
  "networkAllowed",
  "auditWriteAllowed",
  "executionAuthority"
];

assert.equal(PERSONALIZATION_FEATURE_FLAG_NAME, "NEXUS_PERSONALIZATION_VISIBLE_ENABLED");
assert.equal(DEFAULT_PERSONALIZATION_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_PERSONALIZATION_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_PERSONALIZATION_FEATURE_FLAG_STATE.noExecution, true);
for (const field of protectedFields) {
  assert.equal(DEFAULT_PERSONALIZATION_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `K2 doc must document ${field}: false.`);
}

const defaultState = normalizePersonalizationFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isPersonalizationVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizePersonalizationFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isPersonalizationVisibleFeatureEnabled(visibleOnly), true);
for (const field of protectedFields) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

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
  assert.equal(unsafeAttempt[field], false, `unsafe attempt must keep ${field}=false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
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
  assert(!runtime.includes(term), `Runtime must not load or activate Personalization feature flag artifact: ${term}`);
}

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
  assert(!moduleSource.includes(term), `K2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-k2-personalization-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint K2 QA.");

console.log("[nexus-sprint-k2-personalization-feature-flag-contract-qa] passed");
