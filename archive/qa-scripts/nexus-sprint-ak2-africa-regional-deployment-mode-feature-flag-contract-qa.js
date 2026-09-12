const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_NAME,
  DEFAULT_AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_STATE,
  PROTECTED_AFRICA_REGIONAL_DEPLOYMENT_MODE_FLAG_FIELDS,
  normalizeAfricaRegionalDeploymentModeFeatureFlagState,
  isAfricaRegionalDeploymentModeVisibleFeatureEnabled
} = require("../public/nexus-africa-regional-deployment-mode-feature-flag.js");

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

const docName = "NEXUS_SPRINT_AK2_AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_CONTRACT.md";
const qaName = "nexus-sprint-ak2-africa-regional-deployment-mode-feature-flag-contract-qa.js";
const moduleName = "nexus-africa-regional-deployment-mode-feature-flag.js";

assert(exists("docs", docName), "Sprint AK2 feature flag doc must exist.");
assert(exists("public", moduleName), "Sprint AK2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint AK2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const ak1Doc = read("docs", "NEXUS_SPRINT_AK1_AFRICA_REGIONAL_DEPLOYMENT_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md");
const phase89Contract = read("public", "nexus-africa-regional-deployment-mode-readiness-contract.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert.equal(AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_NAME, "NEXUS_AFRICA_REGIONAL_DEPLOYMENT_MODE_VISIBLE_ENABLED");
assert.equal(DEFAULT_AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_STATE.flagName, AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_NAME);
assert.equal(DEFAULT_AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_STATE.noExecution, true);
assert(PROTECTED_AFRICA_REGIONAL_DEPLOYMENT_MODE_FLAG_FIELDS.length >= 70, "Africa Regional Deployment Mode protected field list must stay comprehensive.");

assertIncludes(doc, [
  "Sprint AK2",
  "96ea4444d3a180e871e32041821ecdf658902c7c",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_AFRICA_REGIONAL_DEPLOYMENT_MODE_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Relationship To Sprint AK1",
  "Runtime Absence Requirements",
  "QA Expectations",
  "Sprint AK3 - Africa Regional Deployment Mode Flag Contract Harness"
], "AK2 feature flag doc");

assert(ak1Doc.includes("Sprint AK2 - Africa Regional Deployment Mode Feature Flag Contract"), "AK1 must recommend Sprint AK2.");
assertIncludes(phase89Contract, [
  "AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT",
  "africa-regional-deployment-mode.readiness.phase_89",
  "country kit ready",
  "AFRICA_REGIONAL_DEPLOYMENT_MODE_NO_EXECUTION_DEFAULTS"
], "Phase 89 Africa Regional Deployment Mode readiness contract");

for (const field of PROTECTED_AFRICA_REGIONAL_DEPLOYMENT_MODE_FLAG_FIELDS) {
  assert.equal(DEFAULT_AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_STATE[field], false, `Default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `AK2 doc must document ${field}: false.`);
}

const defaultState = normalizeAfricaRegionalDeploymentModeFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isAfricaRegionalDeploymentModeVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeAfricaRegionalDeploymentModeFeatureFlagState({ enabled: true, visibleUiAllowed: true });
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(visibleOnly.noExecution, true);
assert.equal(isAfricaRegionalDeploymentModeVisibleFeatureEnabled(visibleOnly), true);
for (const field of PROTECTED_AFRICA_REGIONAL_DEPLOYMENT_MODE_FLAG_FIELDS) {
  assert.equal(visibleOnly[field], false, `Visible-only state must keep ${field}=false.`);
}

const unsafeInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of PROTECTED_AFRICA_REGIONAL_DEPLOYMENT_MODE_FLAG_FIELDS) {
  unsafeInput[field] = true;
}
const normalizedUnsafeAttempt = normalizeAfricaRegionalDeploymentModeFeatureFlagState(unsafeInput);
for (const field of PROTECTED_AFRICA_REGIONAL_DEPLOYMENT_MODE_FLAG_FIELDS) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);
assert.equal(normalizedUnsafeAttempt.enabled, true);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);

for (const term of [
  "document.",
  "querySelector",
  "addEventListener",
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "caches.",
  "navigator.serviceWorker",
  "serviceWorker.",
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
  "activateCountryKit(",
  "routeByJurisdiction(",
  "syncRegionalSources(",
  "contactProvider(",
  "scheduleProviderAppointment(",
  "createTelehealthSession(",
  "requestPharmacyRefill(",
  "accessMedicalRecord(",
  "processProviderPayment(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation("
]) {
  assert(!moduleSource.includes(term), `AK2 feature flag module must not include runtime API: ${term}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
  "NEXUS_AFRICA_REGIONAL_DEPLOYMENT_MODE_VISIBLE_ENABLED",
  "NexusAfricaRegionalDeploymentModeFeatureFlagContract",
  "normalizeAfricaRegionalDeploymentModeFeatureFlagState",
  "isAfricaRegionalDeploymentModeVisibleFeatureEnabled",
  "africaRegionalDeploymentModeFeatureFlag",
  "liveAfricaRegionalDeploymentModeRuntime",
  "regionalCountryKitRuntime",
  "jurisdictionRoutingRuntime",
  "localLanguageRuntime",
  "regionalProviderConnectorRuntime",
  "activateCountryKit(",
  "routeByJurisdiction(",
  "syncRegionalSources(",
  "nexus-sprint-ak2-africa-regional-deployment-mode-feature-flag-contract"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Africa Regional Deployment Mode feature flag artifact: ${term}`);
}

const alias = "qa:nexus-sprint-ak2-africa-regional-deployment-mode-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AK2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ak1-africa-regional-deployment-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AK1 QA.");
assert(qaSuite.includes("scripts/nexus-africa-regional-deployment-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 89 QA.");

console.log("[nexus-sprint-ak2-africa-regional-deployment-mode-feature-flag-contract-qa] passed");
