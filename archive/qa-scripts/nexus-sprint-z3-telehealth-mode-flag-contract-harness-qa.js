const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  protectedFields,
  loadTelehealthModeFlagFixtures,
  validateTelehealthModeFlagFixtures
} = require("./nexus-sprint-z3-telehealth-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_Z3_TELEHEALTH_MODE_FLAG_CONTRACT_HARNESS.md";
const fixtureName = "telehealth-mode-feature-flags.json";
const harnessName = "nexus-sprint-z3-telehealth-mode-flag-contract-harness.js";
const qaName = "nexus-sprint-z3-telehealth-mode-flag-contract-harness-qa.js";

assert(exists("docs", docName), "Sprint Z3 harness doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint Z3 fixture file must exist.");
assert(exists("scripts", harnessName), "Sprint Z3 harness must exist.");
assert(exists("scripts", qaName), "Sprint Z3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadTelehealthModeFlagFixtures();

assertIncludes(doc, [
  "Sprint Z3",
  "bdf1f9dfdb0efdff18fbe1f14e99a5f9352b8e92",
  "fixture, harness, documentation, and QA only",
  "fixtures/nexus/telehealth-mode-feature-flags.json",
  "scripts/nexus-sprint-z3-telehealth-mode-flag-contract-harness.js",
  "telehealthModeReviewAllowed: false",
  "telehealthAccessGuidancePreviewAllowed: false",
  "providerDirectoryPreviewAllowed: false",
  "clinicAccessPreviewAllowed: false",
  "clinicianAvailabilityPreviewAllowed: false",
  "pharmacySupportPreviewAllowed: false",
  "mobileClinicSchedulePreviewAllowed: false",
  "transportationToCarePreviewAllowed: false",
  "telehealthModeRuntimeAllowed: false",
  "liveTelehealthModeRuntimeAllowed: false",
  "healthConnectorRuntimeAllowed: false",
  "clinicConnectorRuntimeAllowed: false",
  "telehealthConnectorRuntimeAllowed: false",
  "providerConnectorRuntimeAllowed: false",
  "clinicianConnectorRuntimeAllowed: false",
  "pharmacyConnectorRuntimeAllowed: false",
  "prescriptionRefillRuntimeAllowed: false",
  "appointmentSchedulingAllowed: false",
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
  "Sprint Z4 - Telehealth Mode Runtime Absence Regression Guard"
], "Z3 harness doc");

assert.equal(fixtures.length, 4, "Z3 fixture set must include exactly four flag fixtures.");
[
  "telehealth-mode-default-off",
  "telehealth-mode-flag-on-visible-only",
  "telehealth-mode-unsafe-authority-attempt",
  "telehealth-mode-flag-on-without-visible-permission"
].forEach(id => {
  assert(fixtures.some(fixture => fixture.fixtureId === id), `Z3 fixture set must include ${id}`);
});

const result = validateTelehealthModeFlagFixtures(fixtures);
assert.equal(result.ok, true, "Z3 harness must validate fixtures successfully.");
assert.equal(result.count, 4, "Z3 harness must report four fixtures.");

for (const term of [
  "\"executionAuthority\": true",
  "\"noExecution\": false",
  "\"telehealthModeRuntimeAllowed\": true",
  "\"liveTelehealthModeRuntimeAllowed\": true",
  "\"healthConnectorRuntimeAllowed\": true",
  "\"clinicConnectorRuntimeAllowed\": true",
  "\"telehealthConnectorRuntimeAllowed\": true",
  "\"providerConnectorRuntimeAllowed\": true",
  "\"clinicianConnectorRuntimeAllowed\": true",
  "\"pharmacyConnectorRuntimeAllowed\": true",
  "\"prescriptionRefillRuntimeAllowed\": true",
  "\"appointmentSchedulingAllowed\": true",
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
  assert(fixtureSource.includes(term), `Z3 fixture must include unsafe attempt term: ${term}`);
}

for (const fixture of fixtures) {
  const normalizedResult = validateTelehealthModeFlagFixtures([fixture]);
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
  "executeTelehealthMode(",
  "executeTelehealthSession(",
  "startTelehealthSession(",
  "executePrescriptionRefill(",
  "contactTelehealthProvider(",
  "contactClinician(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation(",
  "openTelehealthCamera(",
  "openTelehealthMicrophone("
]) {
  assert(!harnessSource.includes(term), `Z3 harness must not include unsafe or mutating API: ${term}`);
}

const combinedRuntime = [index, app, server].join("\n");
for (const term of [
  "nexus-telehealth-mode-feature-flag.js",
  "nexus-sprint-z3-telehealth-mode-flag-contract-harness",
  "telehealth-mode-feature-flags.json",
  "NEXUS_TELEHEALTH_MODE_VISIBLE_ENABLED",
  "NexusTelehealthModeFeatureFlagContract",
  "normalizeTelehealthModeFeatureFlagState",
  "isTelehealthModeVisibleFeatureEnabled",
  "telehealthModeFeatureFlag",
  "liveTelehealthModeRuntime",
  "executeTelehealthMode(",
  "executeTelehealthSession(",
  "startTelehealthSession(",
  "executePrescriptionRefill(",
  "contactTelehealthProvider(",
  "contactClinician(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation(",
  "openTelehealthCamera(",
  "openTelehealthMicrophone("
]) {
  assert(!combinedRuntime.includes(term), `Runtime must not load Z2/Z3 flag harness artifact: ${term}`);
}

assert(exists("docs", "NEXUS_SPRINT_Z1_TELEHEALTH_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"), "Z3 requires Z1 readiness gate doc.");
assert(exists("docs", "NEXUS_SPRINT_Z2_TELEHEALTH_MODE_FEATURE_FLAG_CONTRACT.md"), "Z3 requires Z2 feature flag contract doc.");
assert(exists("public", "nexus-telehealth-mode-feature-flag.js"), "Z3 requires Z2 feature flag module.");

const alias = "qa:nexus-sprint-z3-telehealth-mode-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint Z3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-z1-telehealth-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint Z1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-z2-telehealth-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint Z2 QA.");

for (const field of protectedFields) {
  const visibleOnly = require("../public/nexus-telehealth-mode-feature-flag.js").normalizeTelehealthModeFeatureFlagState({
    enabled: true,
    visibleUiAllowed: true,
    [field]: true
  });
  assert.equal(visibleOnly[field], false, `Z3 must prove ${field} remains false under unsafe input.`);
}

console.log("[nexus-sprint-z3-telehealth-mode-flag-contract-harness-qa] passed");
