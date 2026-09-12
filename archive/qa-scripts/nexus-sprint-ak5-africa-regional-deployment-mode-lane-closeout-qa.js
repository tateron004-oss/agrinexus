const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_STATE,
  normalizeAfricaRegionalDeploymentModeFeatureFlagState
} = require("../public/nexus-africa-regional-deployment-mode-feature-flag.js");
const {
  protectedFields,
  loadAfricaRegionalDeploymentModeFlagFixtures,
  expandFixtureInput,
  validateAfricaRegionalDeploymentModeFlagFixtures
} = require("./nexus-sprint-ak3-africa-regional-deployment-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AK5_AFRICA_REGIONAL_DEPLOYMENT_MODE_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-ak5-africa-regional-deployment-mode-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint AK5 lane closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint AK5 QA script must exist.");

const doc = read("docs", docName);
const ak4Doc = read("docs", "NEXUS_SPRINT_AK4_AFRICA_REGIONAL_DEPLOYMENT_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md");
const runtime = [read("public", "index.html"), read("public", "app.js"), read("server.js")].join("\n");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-africa-regional-deployment-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-africa-regional-deployment-mode-feature-flag.js");
const harness = read("scripts", "nexus-sprint-ak3-africa-regional-deployment-mode-flag-contract-harness.js");
const fixtures = loadAfricaRegionalDeploymentModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AK5",
  "50bcd67d64b3d2ba22fa7f58ff3d88bf1e194876",
  "documentation and deterministic QA only",
  "Sprint AK Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint AL1 - Local Language Pack Mode Runtime Activation Readiness Gate"
], "AK5 closeout doc");

assertIncludes(doc, [
  "AK1 | Africa Regional Deployment Mode runtime activation readiness gate | Complete",
  "AK2 | Africa Regional Deployment Mode feature flag contract | Complete",
  "AK3 | Africa Regional Deployment Mode flag contract harness | Complete",
  "AK4 | Africa Regional Deployment Mode runtime absence regression guard | Complete",
  "AK5 | Africa Regional Deployment Mode lane closeout | Complete"
], "AK5 completion table");

assertIncludes(ak4Doc, [
  "Sprint AK5 - Africa Regional Deployment Mode Lane Closeout"
], "AK4 next sprint recommendation");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AK1_AFRICA_REGIONAL_DEPLOYMENT_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AK2_AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AK3_AFRICA_REGIONAL_DEPLOYMENT_MODE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_SPRINT_AK4_AFRICA_REGIONAL_DEPLOYMENT_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md"],
  ["docs", "NEXUS_AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT_PHASE_89.md"],
  ["public", "nexus-africa-regional-deployment-mode-readiness-contract.js"],
  ["public", "nexus-africa-regional-deployment-mode-feature-flag.js"],
  ["fixtures", "nexus", "africa-regional-deployment-mode-feature-flags.json"],
  ["scripts", "nexus-sprint-ak1-africa-regional-deployment-mode-runtime-activation-readiness-gate-qa.js"],
  ["scripts", "nexus-sprint-ak2-africa-regional-deployment-mode-feature-flag-contract-qa.js"],
  ["scripts", "nexus-sprint-ak3-africa-regional-deployment-mode-flag-contract-harness-qa.js"],
  ["scripts", "nexus-sprint-ak4-africa-regional-deployment-mode-runtime-absence-regression-guard-qa.js"],
  ["scripts", "nexus-africa-regional-deployment-mode-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AK5 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(readinessContract, [
  "AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT",
  "africa-regional-deployment-mode.readiness.phase_89",
  "AFRICA_REGIONAL_DEPLOYMENT_MODE_NO_EXECUTION_DEFAULTS",
  "createAfricaRegionalDeploymentModeReadinessContract",
  "\"executionAllowed\": false",
  "\"liveConnectorEnabled\": false",
  "\"providerExecutionEnabled\": false",
  "\"regulatedActionEnabled\": false",
  "healthcare",
  "pharmacy",
  "medical_records",
  "emergency",
  "regulated_execution"
], "Phase 89 Africa Regional Deployment Mode readiness contract");

assert.equal(DEFAULT_AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_STATE[field], false, `AK5 default ${field} must remain false.`);
}
assert.equal(DEFAULT_AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_STATE.noExecution, true);
assert(doc.includes("noExecution: true"), "AK5 doc must document noExecution: true.");

const unsafeInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of protectedFields) unsafeInput[field] = true;
const normalizedUnsafeAttempt = normalizeAfricaRegionalDeploymentModeFeatureFlagState(unsafeInput);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
assert.equal(normalizedUnsafeAttempt.noExecution, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}

const fixtureResult = validateAfricaRegionalDeploymentModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "AK3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "AK3 fixtures must remain complete.");

const unsafeFixture = fixtures.find(fixture => fixture.fixtureId === "africa-regional-deployment-mode-unsafe-authority-attempt");
const expandedUnsafe = expandFixtureInput(unsafeFixture.input);
for (const field of protectedFields) {
  assert.equal(expandedUnsafe[field], true, `unsafeAuthorityAttempt must expand ${field}=true before normalization.`);
}

for (const term of [
  "nexus-africa-regional-deployment-mode-readiness-contract.js",
  "nexus-africa-regional-deployment-mode-feature-flag.js",
  "nexus-sprint-ak3-africa-regional-deployment-mode-flag-contract-harness",
  "africa-regional-deployment-mode-feature-flags.json",
  "NEXUS_AFRICA_REGIONAL_DEPLOYMENT_MODE_VISIBLE_ENABLED",
  "NexusAfricaRegionalDeploymentModeFeatureFlagContract",
  "normalizeAfricaRegionalDeploymentModeFeatureFlagState",
  "isAfricaRegionalDeploymentModeVisibleFeatureEnabled",
  "africaRegionalDeploymentModeFeatureFlag",
  "liveAfricaRegionalDeploymentModeRuntime",
  "regionalCountryKitRuntime",
  "jurisdictionRoutingRuntime",
  "localLanguageRuntime",
  "regionalSourceConnectorRuntime",
  "activateCountryKit(",
  "routeByJurisdiction(",
  "syncRegionalSources(",
  "nexus-sprint-ak5-africa-regional-deployment-mode-lane-closeout"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Africa Regional Deployment Mode lane artifact: ${term}`);
}

for (const source of [featureFlagModule, harness]) {
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
    assert(!source.includes(term), `Sprint AK contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-ak5-africa-regional-deployment-mode-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AK5 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ak1-africa-regional-deployment-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AK1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ak2-africa-regional-deployment-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AK2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ak3-africa-regional-deployment-mode-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AK3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ak4-africa-regional-deployment-mode-runtime-absence-regression-guard-qa.js"), "qa-suite must continue to include Sprint AK4 QA.");
assert(qaSuite.includes("scripts/nexus-africa-regional-deployment-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 89 QA.");

console.log("[nexus-sprint-ak5-africa-regional-deployment-mode-lane-closeout-qa] passed");
