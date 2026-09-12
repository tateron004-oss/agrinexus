const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  protectedFields,
  loadRuralHealthModeFlagFixtures,
  validateRuralHealthModeFlagFixtures
} = require("./nexus-sprint-y3-rural-health-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_Y3_RURAL_HEALTH_MODE_FLAG_CONTRACT_HARNESS.md";
const fixtureName = "rural-health-mode-feature-flags.json";
const harnessName = "nexus-sprint-y3-rural-health-mode-flag-contract-harness.js";
const qaName = "nexus-sprint-y3-rural-health-mode-flag-contract-harness-qa.js";

assert(exists("docs", docName), "Sprint Y3 harness doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint Y3 fixture file must exist.");
assert(exists("scripts", harnessName), "Sprint Y3 harness must exist.");
assert(exists("scripts", qaName), "Sprint Y3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadRuralHealthModeFlagFixtures();

assertIncludes(doc, [
  "Sprint Y3",
  "0104bb73c3d8494e2243380ad5f5a5524c1ce6ff",
  "fixture, harness, documentation, and QA only",
  "fixtures/nexus/rural-health-mode-feature-flags.json",
  "scripts/nexus-sprint-y3-rural-health-mode-flag-contract-harness.js",
  "ruralHealthModeReviewAllowed: false",
  "healthAccessGuidancePreviewAllowed: false",
  "providerDirectoryPreviewAllowed: false",
  "clinicAccessPreviewAllowed: false",
  "telehealthReadinessPreviewAllowed: false",
  "pharmacySupportPreviewAllowed: false",
  "mobileClinicSchedulePreviewAllowed: false",
  "transportationToCarePreviewAllowed: false",
  "ruralHealthModeRuntimeAllowed: false",
  "liveRuralHealthModeRuntimeAllowed: false",
  "healthConnectorRuntimeAllowed: false",
  "clinicConnectorRuntimeAllowed: false",
  "telehealthConnectorRuntimeAllowed: false",
  "pharmacyConnectorRuntimeAllowed: false",
  "prescriptionRefillRuntimeAllowed: false",
  "mobileClinicScheduleRuntimeAllowed: false",
  "transportationDispatchAllowed: false",
  "emergencyDispatchAllowed: false",
  "medicalRecordsFhirRuntimeAllowed: false",
  "medicalAdviceAllowed: false",
  "diagnosisClaimAllowed: false",
  "prescriptionInstructionAllowed: false",
  "refillExecutionAllowed: false",
  "providerContactAllowed: false",
  "clinicianContactAllowed: false",
  "locationSharingAllowed: false",
  "cameraActivationAllowed: false",
  "microphoneActivationAllowed: false",
  "paymentExecutionAllowed: false",
  "marketplaceTransactionAllowed: false",
  "identityAccountProfileActionAllowed: false",
  "communicationsExecutionAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "Sprint Y4 - Rural Health Mode Runtime Absence Regression Guard"
], "Y3 harness doc");

assert.equal(fixtures.length, 4, "Y3 fixture set must include exactly four flag fixtures.");
[
  "rural-health-mode-default-off",
  "rural-health-mode-flag-on-visible-only",
  "rural-health-mode-unsafe-authority-attempt",
  "rural-health-mode-flag-on-without-visible-permission"
].forEach(id => {
  assert(fixtures.some(fixture => fixture.fixtureId === id), `Y3 fixture set must include ${id}`);
});

const result = validateRuralHealthModeFlagFixtures(fixtures);
assert.equal(result.ok, true, "Y3 harness must validate fixtures successfully.");
assert.equal(result.count, 4, "Y3 harness must report four fixtures.");

for (const term of [
  "\"executionAuthority\": true",
  "\"noExecution\": false",
  "\"ruralHealthModeRuntimeAllowed\": true",
  "\"liveRuralHealthModeRuntimeAllowed\": true",
  "\"healthConnectorRuntimeAllowed\": true",
  "\"clinicConnectorRuntimeAllowed\": true",
  "\"telehealthConnectorRuntimeAllowed\": true",
  "\"pharmacyConnectorRuntimeAllowed\": true",
  "\"prescriptionRefillRuntimeAllowed\": true",
  "\"transportationDispatchAllowed\": true",
  "\"emergencyDispatchAllowed\": true",
  "\"medicalAdviceAllowed\": true",
  "\"diagnosisClaimAllowed\": true",
  "\"prescriptionInstructionAllowed\": true",
  "\"refillExecutionAllowed\": true",
  "\"providerContactAllowed\": true",
  "\"clinicianContactAllowed\": true",
  "\"locationSharingAllowed\": true",
  "\"cameraActivationAllowed\": true",
  "\"microphoneActivationAllowed\": true",
  "\"paymentExecutionAllowed\": true",
  "\"communicationsExecutionAllowed\": true"
]) {
  assert(fixtureSource.includes(term), `Y3 fixture must include unsafe attempt term: ${term}`);
}

for (const fixture of fixtures) {
  const normalizedResult = validateRuralHealthModeFlagFixtures([fixture]);
  assert.equal(normalizedResult.ok, true, `${fixture.fixtureId} must validate independently.`);
  assert(fixture.expected, `${fixture.fixtureId} must include expected values.`);
}

for (const term of [
  "writeFile",
  "appendFile",
  "rmSync",
  "unlinkSync",
  "fetch(",
  "XMLHttpRequest",
  "document.",
  "querySelector",
  "addEventListener",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "db.json",
  "open(",
  "window.location",
  "location.href",
  "navigator.geolocation",
  "mediaDevices",
  "window.nativeBridge",
  "nativeBridge.",
  "ACTION_CALL",
  "getUserMedia",
  "setItem",
  "postMessage",
  "openWorkflow(",
  "goSection(",
  "executeTelehealth(",
  "executePrescriptionRefill(",
  "contactProvider(",
  "contactClinician(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation(",
  "openHealthCamera("
]) {
  assert(!harnessSource.includes(term), `Y3 harness must not include unsafe or mutating API: ${term}`);
}

const combinedRuntime = [index, app, server].join("\n");
for (const term of [
  "nexus-rural-health-mode-feature-flag.js",
  "nexus-sprint-y3-rural-health-mode-flag-contract-harness",
  "rural-health-mode-feature-flags.json",
  "NEXUS_RURAL_HEALTH_MODE_VISIBLE_ENABLED",
  "NexusRuralHealthModeFeatureFlagContract",
  "normalizeRuralHealthModeFeatureFlagState",
  "isRuralHealthModeVisibleFeatureEnabled",
  "ruralHealthModeFeatureFlag",
  "liveRuralHealthModeRuntime",
  "executeRuralHealthMode(",
  "executeTelehealth(",
  "executePrescriptionRefill(",
  "contactProvider(",
  "contactClinician(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation(",
  "openHealthCamera("
]) {
  assert(!combinedRuntime.includes(term), `Runtime must not load Y2/Y3 flag harness artifact: ${term}`);
}

assert(exists("docs", "NEXUS_SPRINT_Y1_RURAL_HEALTH_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"), "Y3 requires Y1 readiness gate doc.");
assert(exists("docs", "NEXUS_SPRINT_Y2_RURAL_HEALTH_MODE_FEATURE_FLAG_CONTRACT.md"), "Y3 requires Y2 feature flag contract doc.");
assert(exists("public", "nexus-rural-health-mode-feature-flag.js"), "Y3 requires Y2 feature flag module.");

const alias = "qa:nexus-sprint-y3-rural-health-mode-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint Y3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-y1-rural-health-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint Y1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-y2-rural-health-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint Y2 QA.");

for (const field of protectedFields) {
  const visibleOnly = require("../public/nexus-rural-health-mode-feature-flag.js").normalizeRuralHealthModeFeatureFlagState({
    enabled: true,
    visibleUiAllowed: true,
    [field]: true
  });
  assert.equal(visibleOnly[field], false, `Y3 must prove ${field} remains false under unsafe input.`);
}

console.log("[nexus-sprint-y3-rural-health-mode-flag-contract-harness-qa] passed");
