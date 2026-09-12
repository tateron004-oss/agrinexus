const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  protectedFields,
  loadPharmacyModeFlagFixtures,
  validatePharmacyModeFlagFixtures
} = require("./nexus-sprint-aa3-pharmacy-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AA3_PHARMACY_MODE_FLAG_CONTRACT_HARNESS.md";
const fixtureName = "pharmacy-mode-feature-flags.json";
const harnessName = "nexus-sprint-aa3-pharmacy-mode-flag-contract-harness.js";
const qaName = "nexus-sprint-aa3-pharmacy-mode-flag-contract-harness-qa.js";

assert(exists("docs", docName), "Sprint AA3 harness doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint AA3 fixture file must exist.");
assert(exists("scripts", harnessName), "Sprint AA3 harness must exist.");
assert(exists("scripts", qaName), "Sprint AA3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadPharmacyModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AA3",
  "a60e2a5aa4df5862b7b3b71c63a4a385400d1841",
  "fixture, harness, documentation, and QA only",
  "fixtures/nexus/pharmacy-mode-feature-flags.json",
  "scripts/nexus-sprint-aa3-pharmacy-mode-flag-contract-harness.js",
  "pharmacyModeReviewAllowed: false",
  "pharmacySupportPreviewAllowed: false",
  "prescriptionReadinessPreviewAllowed: false",
  "refillReadinessPreviewAllowed: false",
  "pharmacyProviderDirectoryPreviewAllowed: false",
  "medicationSafetyBoundaryPreviewAllowed: false",
  "paymentInsuranceBoundaryPreviewAllowed: false",
  "pharmacyModeRuntimeAllowed: false",
  "livePharmacyModeRuntimeAllowed: false",
  "healthConnectorRuntimeAllowed: false",
  "clinicConnectorRuntimeAllowed: false",
  "telehealthConnectorRuntimeAllowed: false",
  "pharmacyConnectorRuntimeAllowed: false",
  "pharmacyProviderConnectorRuntimeAllowed: false",
  "prescriptionConnectorRuntimeAllowed: false",
  "refillConnectorRuntimeAllowed: false",
  "medicationSafetyConnectorRuntimeAllowed: false",
  "paymentInsuranceConnectorRuntimeAllowed: false",
  "prescriptionRefillRuntimeAllowed: false",
  "appointmentSchedulingAllowed: false",
  "transportationDispatchAllowed: false",
  "emergencyDispatchAllowed: false",
  "medicalRecordsFhirRuntimeAllowed: false",
  "medicalAdviceAllowed: false",
  "diagnosisClaimAllowed: false",
  "prescriptionInstructionAllowed: false",
  "dosageInstructionAllowed: false",
  "refillExecutionAllowed: false",
  "providerContactAllowed: false",
  "pharmacistContactAllowed: false",
  "locationSharingAllowed: false",
  "cameraActivationAllowed: false",
  "microphoneActivationAllowed: false",
  "paymentExecutionAllowed: false",
  "insuranceProcessingAllowed: false",
  "marketplaceTransactionAllowed: false",
  "identityAccountProfileActionAllowed: false",
  "communicationsExecutionAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "Sprint AA4 - Pharmacy Mode Runtime Absence Regression Guard"
], "AA3 harness doc");

assert.equal(fixtures.length, 4, "AA3 fixture set must include exactly four flag fixtures.");
[
  "pharmacy-mode-default-off",
  "pharmacy-mode-flag-on-visible-only",
  "pharmacy-mode-unsafe-authority-attempt",
  "pharmacy-mode-flag-on-without-visible-permission"
].forEach(id => {
  assert(fixtures.some(fixture => fixture.fixtureId === id), `AA3 fixture set must include ${id}`);
});

const result = validatePharmacyModeFlagFixtures(fixtures);
assert.equal(result.ok, true, "AA3 harness must validate fixtures successfully.");
assert.equal(result.count, 4, "AA3 harness must report four fixtures.");

for (const term of [
  "\"executionAuthority\": true",
  "\"noExecution\": false",
  "\"pharmacyModeRuntimeAllowed\": true",
  "\"livePharmacyModeRuntimeAllowed\": true",
  "\"healthConnectorRuntimeAllowed\": true",
  "\"clinicConnectorRuntimeAllowed\": true",
  "\"telehealthConnectorRuntimeAllowed\": true",
  "\"pharmacyConnectorRuntimeAllowed\": true",
  "\"pharmacyProviderConnectorRuntimeAllowed\": true",
  "\"prescriptionConnectorRuntimeAllowed\": true",
  "\"refillConnectorRuntimeAllowed\": true",
  "\"medicationSafetyConnectorRuntimeAllowed\": true",
  "\"paymentInsuranceConnectorRuntimeAllowed\": true",
  "\"prescriptionRefillRuntimeAllowed\": true",
  "\"appointmentSchedulingAllowed\": true",
  "\"transportationDispatchAllowed\": true",
  "\"emergencyDispatchAllowed\": true",
  "\"medicalAdviceAllowed\": true",
  "\"diagnosisClaimAllowed\": true",
  "\"prescriptionInstructionAllowed\": true",
  "\"dosageInstructionAllowed\": true",
  "\"refillExecutionAllowed\": true",
  "\"providerContactAllowed\": true",
  "\"pharmacistContactAllowed\": true",
  "\"locationSharingAllowed\": true",
  "\"cameraActivationAllowed\": true",
  "\"microphoneActivationAllowed\": true",
  "\"paymentExecutionAllowed\": true",
  "\"insuranceProcessingAllowed\": true",
  "\"communicationsExecutionAllowed\": true"
]) {
  assert(fixtureSource.includes(term), `AA3 fixture must include unsafe attempt term: ${term}`);
}

for (const fixture of fixtures) {
  const normalizedResult = validatePharmacyModeFlagFixtures([fixture]);
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
  "executePrescriptionRefill(",
  "executePharmacyRefill(",
  "contactPharmacyProvider(",
  "contactPharmacist(",
  "processPharmacyPayment(",
  "processInsurance(",
  "dispatchTransportation(",
  "dispatchEmergency("
]) {
  assert(!harnessSource.includes(term), `AA3 harness must not include unsafe or mutating API: ${term}`);
}

const combinedRuntime = [index, app, server].join("\n");
for (const term of [
  "nexus-pharmacy-mode-feature-flag.js",
  "nexus-sprint-aa3-pharmacy-mode-flag-contract-harness",
  "pharmacy-mode-feature-flags.json",
  "NEXUS_PHARMACY_MODE_VISIBLE_ENABLED",
  "NexusPharmacyModeFeatureFlagContract",
  "normalizePharmacyModeFeatureFlagState",
  "isPharmacyModeVisibleFeatureEnabled",
  "pharmacyModeFeatureFlag",
  "livePharmacyModeRuntime",
  "executePrescriptionRefill(",
  "executePharmacyRefill(",
  "contactPharmacyProvider(",
  "contactPharmacist(",
  "processPharmacyPayment(",
  "processInsurance("
]) {
  assert(!combinedRuntime.includes(term), `Runtime must not load AA2/AA3 flag harness artifact: ${term}`);
}

assert(exists("docs", "NEXUS_SPRINT_AA1_PHARMACY_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"), "AA3 requires AA1 readiness gate doc.");
assert(exists("docs", "NEXUS_SPRINT_AA2_PHARMACY_MODE_FEATURE_FLAG_CONTRACT.md"), "AA3 requires AA2 feature flag contract doc.");
assert(exists("public", "nexus-pharmacy-mode-feature-flag.js"), "AA3 requires AA2 feature flag module.");

const alias = "qa:nexus-sprint-aa3-pharmacy-mode-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AA3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-aa1-pharmacy-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AA1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-aa2-pharmacy-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AA2 QA.");

for (const field of protectedFields) {
  const visibleOnly = require("../public/nexus-pharmacy-mode-feature-flag.js").normalizePharmacyModeFeatureFlagState({
    enabled: true,
    visibleUiAllowed: true,
    [field]: true
  });
  assert.equal(visibleOnly[field], false, `AA3 must prove ${field} remains false under unsafe input.`);
}

console.log("[nexus-sprint-aa3-pharmacy-mode-flag-contract-harness-qa] passed");
