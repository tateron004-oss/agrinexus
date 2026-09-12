const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_NAME,
  DEFAULT_HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_STATE,
  PROTECTED_HEALTHCARE_ACCESS_INTELLIGENCE_FLAG_FIELDS,
  normalizeHealthcareAccessIntelligenceFeatureFlagState,
  isHealthcareAccessIntelligenceVisibleFeatureEnabled
} = require("../public/nexus-healthcare-access-intelligence-feature-flag.js");

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

const docName = "NEXUS_SPRINT_T2_HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-healthcare-access-intelligence-feature-flag.js";
const qaName = "nexus-sprint-t2-healthcare-access-intelligence-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint T2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint T2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint T2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const readinessContract = read("public", "nexus-healthcare-access-intelligence-readiness-contract.js");
const t1Doc = read("docs", "NEXUS_SPRINT_T1_HEALTHCARE_ACCESS_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint T2",
  "9887fbf107e0b0fa73f5bed6d5e0df88d1cd8a0e",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_HEALTHCARE_ACCESS_INTELLIGENCE_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Relationship To Sprint T1",
  "Runtime Absence Requirements",
  "QA Expectations",
  "Sprint T3 - Healthcare Access Intelligence Flag Contract Harness"
], "T2 feature flag doc");

assert(readinessContract.includes("healthcare-access-intelligence.readiness.phase_72"), "T2 must build on the Phase 72 Healthcare Access Intelligence readiness contract.");
assert(readinessContract.includes("liveConnectorEnabled: false"), "Phase 72 live connector default must remain false.");
assert(readinessContract.includes("providerExecutionEnabled: false"), "Phase 72 provider execution default must remain false.");
assert(readinessContract.includes("regulatedActionEnabled: false"), "Phase 72 regulated action default must remain false.");
assert(readinessContract.includes("executionAllowed: false"), "Phase 72 execution default must remain false.");
assert(t1Doc.includes("Sprint T2 - Healthcare Access Intelligence Feature Flag Contract"), "T1 must recommend Sprint T2.");

assert.equal(HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_NAME, "NEXUS_HEALTHCARE_ACCESS_INTELLIGENCE_VISIBLE_ENABLED");
assert.equal(DEFAULT_HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_STATE.noExecution, true);

for (const field of PROTECTED_HEALTHCARE_ACCESS_INTELLIGENCE_FLAG_FIELDS) {
  assert.equal(DEFAULT_HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `T2 doc must document ${field}: false.`);
}

const defaultState = normalizeHealthcareAccessIntelligenceFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isHealthcareAccessIntelligenceVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeHealthcareAccessIntelligenceFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isHealthcareAccessIntelligenceVisibleFeatureEnabled(visibleOnly), true);
for (const field of PROTECTED_HEALTHCARE_ACCESS_INTELLIGENCE_FLAG_FIELDS) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

const unsafeAttempt = normalizeHealthcareAccessIntelligenceFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true,
  healthAccessReviewAllowed: true,
  sourceBackedHealthGuidancePreviewAllowed: true,
  patientAccessSummaryPreviewAllowed: true,
  providerEscalationPreviewAllowed: true,
  healthcareRuntimeAllowed: true,
  liveHealthcareAdvisorAllowed: true,
  sourceRetrievalRuntimeAllowed: true,
  diagnosisClaimAllowed: true,
  medicalAdviceClaimAllowed: true,
  prescriptionOrRefillExecutionAllowed: true,
  pharmacyWorkflowExecutionAllowed: true,
  clinicProviderTelehealthContactAllowed: true,
  telehealthSessionLaunchAllowed: true,
  medicalRecordsFhirAccessAllowed: true,
  paymentExecutionAllowed: true,
  emergencyDispatchAllowed: true,
  transportationDispatchAllowed: true,
  locationSharingAllowed: true,
  cameraMicrophoneActivationAllowed: true,
  providerConnectionClaimAllowed: true,
  completedActionClaimAllowed: true,
  policyBypassAllowed: true,
  confirmationBypassAllowed: true,
  permissionBypassAllowed: true,
  firstTurnExecutionAllowed: true,
  laterTurnExecutionAllowed: true,
  standardUserHealthcareBrainMutationAllowed: true,
  backendWriteAllowed: true,
  storageWriteAllowed: true,
  networkAllowed: true,
  auditWriteAllowed: true,
  executionAuthority: true,
  noExecution: false
});
assert.equal(unsafeAttempt.visibleUiAllowed, true);
for (const field of PROTECTED_HEALTHCARE_ACCESS_INTELLIGENCE_FLAG_FIELDS) {
  assert.equal(unsafeAttempt[field], false, `unsafe attempt must keep ${field}=false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
  "NEXUS_HEALTHCARE_ACCESS_INTELLIGENCE_VISIBLE_ENABLED",
  "NexusHealthcareAccessIntelligenceFeatureFlagContract",
  "normalizeHealthcareAccessIntelligenceFeatureFlagState",
  "isHealthcareAccessIntelligenceVisibleFeatureEnabled",
  "healthcareAccessIntelligenceRuntime",
  "liveHealthcareAdvisor",
  "executeHealthcareAccess(",
  "connectTelehealthProvider(",
  "executePrescriptionRefill(",
  "accessMedicalRecords(",
  "dispatchEmergencyHelp("
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Healthcare Access Intelligence feature flag artifact: ${term}`);
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
  "executeHealthcareAccess(",
  "connectTelehealthProvider(",
  "executePrescriptionRefill(",
  "accessMedicalRecords(",
  "dispatchEmergencyHelp("
]) {
  assert(!moduleSource.includes(term), `T2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-t2-healthcare-access-intelligence-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint T2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-t1-healthcare-access-intelligence-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint T1 QA.");

console.log("[nexus-sprint-t2-healthcare-access-intelligence-feature-flag-contract-qa] passed");
