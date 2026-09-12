const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_PROVIDER_MODE_FEATURE_FLAG_STATE,
  normalizeProviderModeFeatureFlagState
} = require("../public/nexus-provider-mode-feature-flag.js");
const {
  protectedFields,
  loadProviderModeFlagFixtures,
  validateProviderModeFlagFixtures
} = require("./nexus-sprint-ah3-provider-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AH5_PROVIDER_MODE_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-ah5-provider-mode-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint AH5 lane closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint AH5 QA script must exist.");

const doc = read("docs", docName);
const ah4Doc = read("docs", "NEXUS_SPRINT_AH4_PROVIDER_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-provider-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-provider-mode-feature-flag.js");
const harness = read("scripts", "nexus-sprint-ah3-provider-mode-flag-contract-harness.js");
const fixtures = loadProviderModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AH5",
  "ab58a00eb315e13374ed17d3db02d6f774b92bc7",
  "documentation and deterministic QA only",
  "Sprint AH Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint AI1 - Admin Mode Runtime Activation Readiness Gate"
], "AH5 closeout doc");

assertIncludes(doc, [
  "AH1 | Provider Mode runtime activation readiness gate | Complete",
  "AH2 | Provider Mode feature flag contract | Complete",
  "AH3 | Provider Mode flag contract harness | Complete",
  "AH4 | Provider Mode runtime absence regression guard | Complete",
  "AH5 | Provider Mode lane closeout | Complete"
], "AH5 completion table");

assertIncludes(ah4Doc, [
  "Sprint AH5 - Provider Mode Lane Closeout"
], "AH4 next sprint recommendation");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AH1_PROVIDER_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AH2_PROVIDER_MODE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AH3_PROVIDER_MODE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_SPRINT_AH4_PROVIDER_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md"],
  ["docs", "NEXUS_PROVIDER_MODE_READINESS_CONTRACT_PHASE_86.md"],
  ["docs", "NEXUS_ADMIN_MODE_READINESS_CONTRACT_PHASE_87.md"],
  ["public", "nexus-provider-mode-readiness-contract.js"],
  ["public", "nexus-provider-mode-feature-flag.js"],
  ["public", "nexus-admin-mode-readiness-contract.js"],
  ["fixtures", "nexus", "provider-mode-feature-flags.json"],
  ["scripts", "nexus-sprint-ah1-provider-mode-runtime-activation-readiness-gate-qa.js"],
  ["scripts", "nexus-sprint-ah2-provider-mode-feature-flag-contract-qa.js"],
  ["scripts", "nexus-sprint-ah3-provider-mode-flag-contract-harness-qa.js"],
  ["scripts", "nexus-sprint-ah4-provider-mode-runtime-absence-regression-guard-qa.js"],
  ["scripts", "nexus-provider-mode-readiness-contract-qa.js"],
  ["scripts", "nexus-admin-mode-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AH5 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(readinessContract, [
  "PROVIDER_MODE_READINESS_CONTRACT",
  "provider-mode.readiness.phase_86",
  "PROVIDER_MODE_NO_EXECUTION_DEFAULTS",
  "createProviderModeReadinessContract",
  "\"executionAllowed\": false",
  "\"liveConnectorEnabled\": false",
  "\"providerExecutionEnabled\": false",
  "\"regulatedActionEnabled\": false",
  "communications",
  "healthcare",
  "pharmacy",
  "medical_records",
  "emergency",
  "regulated_execution"
], "Phase 86 Provider Mode readiness contract");

assert.equal(DEFAULT_PROVIDER_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_PROVIDER_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_PROVIDER_MODE_FEATURE_FLAG_STATE[field], false, `AH5 default ${field} must remain false.`);
  assert(doc.includes(`${field}: false`), `AH5 doc must document ${field}: false.`);
}
assert.equal(DEFAULT_PROVIDER_MODE_FEATURE_FLAG_STATE.noExecution, true);

const unsafeInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of protectedFields) {
  unsafeInput[field] = true;
}
const normalizedUnsafeAttempt = normalizeProviderModeFeatureFlagState(unsafeInput);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateProviderModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "AH3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "AH3 fixtures must remain complete.");

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-provider-mode-readiness-contract.js",
  "nexus-provider-mode-feature-flag.js",
  "nexus-sprint-ah3-provider-mode-flag-contract-harness",
  "provider-mode-feature-flags.json",
  "NEXUS_PROVIDER_MODE_VISIBLE_ENABLED",
  "NexusProviderModeFeatureFlagContract",
  "normalizeProviderModeFeatureFlagState",
  "isProviderModeVisibleFeatureEnabled",
  "providerModeFeatureFlag",
  "liveProviderModeRuntime",
  "providerConnectorRuntime",
  "clinicConnectorRuntime",
  "telehealthConnectorRuntime",
  "pharmacyConnectorRuntime",
  "schedulingConnectorRuntime",
  "medicalRecordConnectorRuntime",
  "contactProvider(",
  "contactClinic(",
  "contactPharmacy(",
  "scheduleProviderAppointment(",
  "createTelehealthSession(",
  "requestPharmacyRefill(",
  "accessMedicalRecord(",
  "createClinicalDocumentation(",
  "sharePatientLocation(",
  "activateCamera(",
  "activateMicrophone(",
  "processProviderPayment(",
  "nexus-sprint-ah5-provider-mode-lane-closeout"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Provider Mode lane artifact: ${term}`);
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
    "contactProvider(",
    "contactClinic(",
    "contactPharmacy(",
    "scheduleProviderAppointment(",
    "createTelehealthSession(",
    "requestPharmacyRefill(",
    "accessMedicalRecord(",
    "createClinicalDocumentation(",
    "sharePatientLocation(",
    "activateCamera(",
    "activateMicrophone(",
    "processProviderPayment(",
    "dispatchTransportation(",
    "dispatchEmergency("
  ]) {
    assert(!source.includes(term), `Sprint AH contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-ah5-provider-mode-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AH5 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ah1-provider-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AH1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ah2-provider-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AH2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ah3-provider-mode-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AH3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ah4-provider-mode-runtime-absence-regression-guard-qa.js"), "qa-suite must continue to include Sprint AH4 QA.");
assert(qaSuite.includes("scripts/nexus-provider-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 86 QA.");
assert(qaSuite.includes("scripts/nexus-admin-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 87 QA.");

console.log("[nexus-sprint-ah5-provider-mode-lane-closeout-qa] passed");
