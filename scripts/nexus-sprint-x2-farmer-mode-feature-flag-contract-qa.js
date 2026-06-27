const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  FARMER_MODE_FEATURE_FLAG_NAME,
  DEFAULT_FARMER_MODE_FEATURE_FLAG_STATE,
  PROTECTED_FARMER_MODE_FLAG_FIELDS,
  normalizeFarmerModeFeatureFlagState,
  isFarmerModeVisibleFeatureEnabled
} = require("../public/nexus-farmer-mode-feature-flag.js");

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

const docName = "NEXUS_SPRINT_X2_FARMER_MODE_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-farmer-mode-feature-flag.js";
const qaName = "nexus-sprint-x2-farmer-mode-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint X2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint X2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint X2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const x1Doc = read("docs", "NEXUS_SPRINT_X1_FARMER_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md");
const readinessContract = read("public", "nexus-farmer-mode-readiness-contract.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint X2",
  "e48d1ce5a1d0fbf781e7b41d5562be1212c1f64b",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_FARMER_MODE_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Relationship To Sprint X1",
  "Runtime Absence Requirements",
  "QA Expectations",
  "Sprint X3 - Farmer Mode Flag Contract Harness"
], "X2 feature flag doc");

assert(x1Doc.includes("Sprint X2 - Farmer Mode Feature Flag Contract"), "X1 must recommend Sprint X2.");
assert(readinessContract.includes("farmer-mode.readiness.phase_76"), "X2 must build on Phase 76 Farmer Mode readiness contract.");
assert(readinessContract.includes("executionAllowed: false"), "Phase 76 execution default must remain false.");
assert(readinessContract.includes("liveConnectorEnabled: false"), "Phase 76 live connector default must remain false.");
assert(readinessContract.includes("providerExecutionEnabled: false"), "Phase 76 provider execution default must remain false.");

assert.equal(FARMER_MODE_FEATURE_FLAG_NAME, "NEXUS_FARMER_MODE_VISIBLE_ENABLED");
assert.equal(DEFAULT_FARMER_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_FARMER_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_FARMER_MODE_FEATURE_FLAG_STATE.noExecution, true);

for (const field of PROTECTED_FARMER_MODE_FLAG_FIELDS) {
  assert.equal(DEFAULT_FARMER_MODE_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `X2 doc must document ${field}: false.`);
}

const defaultState = normalizeFarmerModeFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isFarmerModeVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeFarmerModeFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isFarmerModeVisibleFeatureEnabled(visibleOnly), true);
for (const field of PROTECTED_FARMER_MODE_FLAG_FIELDS) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

const unsafeAttemptInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of PROTECTED_FARMER_MODE_FLAG_FIELDS) {
  unsafeAttemptInput[field] = true;
}

const unsafeAttempt = normalizeFarmerModeFeatureFlagState(unsafeAttemptInput);
assert.equal(unsafeAttempt.visibleUiAllowed, true);
for (const field of PROTECTED_FARMER_MODE_FLAG_FIELDS) {
  assert.equal(unsafeAttempt[field], false, `unsafe attempt must keep ${field}=false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
  "NEXUS_FARMER_MODE_VISIBLE_ENABLED",
  "NexusFarmerModeFeatureFlagContract",
  "normalizeFarmerModeFeatureFlagState",
  "isFarmerModeVisibleFeatureEnabled",
  "farmerModeFeatureFlag",
  "liveFarmerModeRuntime",
  "executeFarmerMode(",
  "executeMarketplaceSale(",
  "executeMarketplacePurchase(",
  "contactMarketplaceBuyer(",
  "contactMarketplaceSeller(",
  "shareFarmLocation(",
  "openCropCamera(",
  "dispatchFieldAgent("
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Farmer Mode feature flag artifact: ${term}`);
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
  "goSection(",
  "executeMarketplaceSale(",
  "executeMarketplacePurchase(",
  "contactMarketplaceBuyer(",
  "contactMarketplaceSeller(",
  "shareFarmLocation(",
  "openCropCamera(",
  "dispatchFieldAgent("
]) {
  assert(!moduleSource.includes(term), `X2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-x2-farmer-mode-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint X2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-x1-farmer-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint X1 QA.");
assert(qaSuite.includes("scripts/nexus-farmer-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 76 QA.");

console.log("[nexus-sprint-x2-farmer-mode-feature-flag-contract-qa] passed");
