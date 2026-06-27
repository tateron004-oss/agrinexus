const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  protectedFields,
  loadHealthcareAccessIntelligenceFlagFixtures,
  validateHealthcareAccessIntelligenceFlagFixtures
} = require("./nexus-sprint-t3-healthcare-access-intelligence-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_T3_HEALTHCARE_ACCESS_INTELLIGENCE_FLAG_CONTRACT_HARNESS.md";
const fixtureName = "healthcare-access-intelligence-feature-flags.json";
const harnessName = "nexus-sprint-t3-healthcare-access-intelligence-flag-contract-harness.js";
const qaName = "nexus-sprint-t3-healthcare-access-intelligence-flag-contract-harness-qa.js";

assert(exists("docs", docName), "Sprint T3 harness doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint T3 fixture file must exist.");
assert(exists("scripts", harnessName), "Sprint T3 harness must exist.");
assert(exists("scripts", qaName), "Sprint T3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadHealthcareAccessIntelligenceFlagFixtures();

assertIncludes(doc, [
  "Sprint T3",
  "e3eafaa889c14551b2402d9f86860e1b363751f5",
  "fixture, harness, documentation, and QA only",
  "fixtures/nexus/healthcare-access-intelligence-feature-flags.json",
  "scripts/nexus-sprint-t3-healthcare-access-intelligence-flag-contract-harness.js",
  "healthAccessReviewAllowed: false",
  "sourceBackedHealthGuidancePreviewAllowed: false",
  "liveHealthcareAdvisorAllowed: false",
  "diagnosisClaimAllowed: false",
  "medicalAdviceClaimAllowed: false",
  "prescriptionOrRefillExecutionAllowed: false",
  "pharmacyWorkflowExecutionAllowed: false",
  "clinicProviderTelehealthContactAllowed: false",
  "telehealthSessionLaunchAllowed: false",
  "medicalRecordsFhirAccessAllowed: false",
  "paymentExecutionAllowed: false",
  "emergencyDispatchAllowed: false",
  "transportationDispatchAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "Sprint T4 - Healthcare Access Intelligence Runtime Absence Regression Guard"
], "T3 harness doc");

assert.equal(fixtures.length, 4, "T3 fixture set must include exactly four flag fixtures.");
[
  "healthcare-access-intelligence-default-off",
  "healthcare-access-intelligence-flag-on-review-only",
  "healthcare-access-intelligence-unsafe-authority-attempt",
  "healthcare-access-intelligence-flag-on-without-visible-permission"
].forEach(id => {
  assert(fixtures.some(fixture => fixture.fixtureId === id), `T3 fixture set must include ${id}`);
});

const result = validateHealthcareAccessIntelligenceFlagFixtures(fixtures);
assert.equal(result.ok, true, "T3 harness must validate fixtures successfully.");
assert.equal(result.count, 4, "T3 harness must report four fixtures.");

for (const term of [
  "\"executionAuthority\": true",
  "\"noExecution\": false",
  "\"healthcareRuntimeAllowed\": true",
  "\"liveHealthcareAdvisorAllowed\": true",
  "\"sourceRetrievalRuntimeAllowed\": true",
  "\"diagnosisClaimAllowed\": true",
  "\"medicalAdviceClaimAllowed\": true",
  "\"prescriptionOrRefillExecutionAllowed\": true",
  "\"pharmacyWorkflowExecutionAllowed\": true",
  "\"clinicProviderTelehealthContactAllowed\": true",
  "\"telehealthSessionLaunchAllowed\": true",
  "\"medicalRecordsFhirAccessAllowed\": true",
  "\"providerConnectionClaimAllowed\": true",
  "\"completedActionClaimAllowed\": true",
  "\"paymentExecutionAllowed\": true",
  "\"emergencyDispatchAllowed\": true",
  "\"transportationDispatchAllowed\": true",
  "\"cameraMicrophoneActivationAllowed\": true"
]) {
  assert(fixtureSource.includes(term), `T3 fixture must include unsafe attempt term: ${term}`);
}

for (const fixture of fixtures) {
  assert(fixture.expected, `${fixture.fixtureId} must include expected values.`);
  for (const field of protectedFields) {
    assert.equal(fixture.expected[field], false, `${fixture.fixtureId} must expect ${field} false.`);
  }
  assert.equal(fixture.expected.noExecution, true, `${fixture.fixtureId} must expect noExecution true.`);
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
  "executeHealthcareAdvice(",
  "connectTelehealthProvider(",
  "executePrescriptionRefill(",
  "accessMedicalRecords(",
  "dispatchEmergencyHelp("
]) {
  assert(!harnessSource.includes(term), `T3 harness must not include unsafe or mutating API: ${term}`);
}

const combinedRuntime = [index, app, server].join("\n");
for (const term of [
  "nexus-healthcare-access-intelligence-feature-flag.js",
  "nexus-sprint-t3-healthcare-access-intelligence-flag-contract-harness",
  "healthcare-access-intelligence-feature-flags.json",
  "NEXUS_HEALTHCARE_ACCESS_INTELLIGENCE_VISIBLE_ENABLED",
  "NexusHealthcareAccessIntelligenceFeatureFlagContract",
  "normalizeHealthcareAccessIntelligenceFeatureFlagState",
  "isHealthcareAccessIntelligenceVisibleFeatureEnabled",
  "healthcareAccessIntelligenceRuntime",
  "liveHealthcareAdvisor",
  "executeHealthcareAdvice(",
  "connectTelehealthProvider(",
  "executePrescriptionRefill(",
  "accessMedicalRecords(",
  "dispatchEmergencyHelp("
]) {
  assert(!combinedRuntime.includes(term), `Runtime must not load T2/T3 flag harness artifact: ${term}`);
}

assert(exists("docs", "NEXUS_SPRINT_T1_HEALTHCARE_ACCESS_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md"), "T3 requires T1 readiness gate doc.");
assert(exists("docs", "NEXUS_SPRINT_T2_HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_CONTRACT.md"), "T3 requires T2 feature flag contract doc.");
assert(exists("public", "nexus-healthcare-access-intelligence-feature-flag.js"), "T3 requires T2 feature flag module.");

const alias = "qa:nexus-sprint-t3-healthcare-access-intelligence-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint T3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-t1-healthcare-access-intelligence-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint T1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-t2-healthcare-access-intelligence-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint T2 QA.");

console.log("[nexus-sprint-t3-healthcare-access-intelligence-flag-contract-harness-qa] passed");
