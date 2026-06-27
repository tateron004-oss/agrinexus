const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_STATE,
  normalizeHealthcareAccessIntelligenceFeatureFlagState
} = require("../public/nexus-healthcare-access-intelligence-feature-flag.js");
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

function assertRuntimeExcludes(source, terms, label) {
  for (const term of terms) {
    assert(!source.includes(term), `${label} must not runtime-load or activate Sprint T artifact: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_T5_HEALTHCARE_ACCESS_INTELLIGENCE_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-t5-healthcare-access-intelligence-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint T5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint T5 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-healthcare-access-intelligence-readiness-contract.js");
const featureFlagModule = read("public", "nexus-healthcare-access-intelligence-feature-flag.js");
const t3Harness = read("scripts", "nexus-sprint-t3-healthcare-access-intelligence-flag-contract-harness.js");
const fixtures = loadHealthcareAccessIntelligenceFlagFixtures();

assertIncludes(doc, [
  "Sprint T5",
  "bd149c6bc23033abea6f844a4b59155f2730921b",
  "documentation and deterministic QA only",
  "Sprint T Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint U1 - Workforce Intelligence Runtime Activation Readiness Gate"
], "T5 closeout doc");

assertIncludes(doc, [
  "Healthcare Access Intelligence runtime activation readiness gate",
  "Healthcare Access Intelligence feature flag contract",
  "Healthcare Access Intelligence flag contract harness",
  "Healthcare Access Intelligence runtime absence regression guard",
  "Healthcare Access Intelligence lane closeout"
], "T5 sprint summary");

assertIncludes(doc, [
  "Healthcare Access Intelligence readiness is not runtime activation",
  "Healthcare Access Intelligence visibility readiness is not medical authority",
  "healthcare metadata is not source authority, factual authority, clinical authority, provider authorization, patient consent, prescription approval, payment authorization, location consent, emergency dispatch approval, or execution approval",
  "generated healthcare text cannot authorize, stage, dispatch, or execute an action by itself",
  "enabled: false",
  "visibleUiAllowed: false",
  "healthAccessReviewAllowed: false",
  "sourceBackedHealthGuidancePreviewAllowed: false",
  "patientAccessSummaryPreviewAllowed: false",
  "providerEscalationPreviewAllowed: false",
  "healthcareRuntimeAllowed: false",
  "liveHealthcareAdvisorAllowed: false",
  "sourceRetrievalRuntimeAllowed: false",
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
  "locationSharingAllowed: false",
  "cameraMicrophoneActivationAllowed: false",
  "providerConnectionClaimAllowed: false",
  "completedActionClaimAllowed: false",
  "policyBypassAllowed: false",
  "confirmationBypassAllowed: false",
  "permissionBypassAllowed: false",
  "firstTurnExecutionAllowed: false",
  "laterTurnExecutionAllowed: false",
  "standardUserHealthcareBrainMutationAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "auditWriteAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "unsafe authority attempts normalize back to no-execution values",
  "no action has been taken"
], "T5 no-authority and no-execution language");

assertIncludes(doc, [
  "active Healthcare Access Intelligence runtime",
  "live healthcare advisor",
  "healthcare intelligence runtime UI",
  "health access review buttons",
  "source-backed health guidance runtime retrieval",
  "patient access summary preview UI from Sprint T artifacts",
  "provider escalation preview UI from Sprint T artifacts",
  "diagnosis claims",
  "medical advice claims",
  "prescription or refill execution claims",
  "pharmacy workflow execution claims",
  "clinic, provider, or telehealth contact claims",
  "telehealth session launch claims",
  "medical records or FHIR access claims",
  "payment completion claims",
  "emergency dispatch claims",
  "transportation dispatch claims",
  "location sharing claims",
  "camera or microphone activation claims",
  "provider connection claims",
  "completed action claims",
  "event handlers",
  "typed route mutation",
  "voice route mutation",
  "policy bypass",
  "confirmation bypass",
  "permission bypass",
  "permission prompts",
  "audit writes",
  "backend writes",
  "localStorage or sessionStorage writes",
  "fetch or network calls",
  "provider handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "payment execution",
  "marketplace transactions",
  "account creation",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "T5 blocked runtime categories");

const requiredDocs = [
  "NEXUS_SPRINT_T1_HEALTHCARE_ACCESS_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_T2_HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_T3_HEALTHCARE_ACCESS_INTELLIGENCE_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_T4_HEALTHCARE_ACCESS_INTELLIGENCE_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_HEALTHCARE_ACCESS_INTELLIGENCE_READINESS_CONTRACT_PHASE_72.md",
  "NEXUS_WORKFORCE_INTELLIGENCE_READINESS_CONTRACT_PHASE_73.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint T5 requires prior or next-lane doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-t1-healthcare-access-intelligence-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-t2-healthcare-access-intelligence-feature-flag-contract-qa.js",
  "nexus-sprint-t3-healthcare-access-intelligence-flag-contract-harness-qa.js",
  "nexus-sprint-t4-healthcare-access-intelligence-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint T5 requires prior Sprint T QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint T QA: ${requiredScript}`);
}

assert(exists("public", "nexus-healthcare-access-intelligence-readiness-contract.js"), "Sprint T5 requires Phase 72 Healthcare Access Intelligence readiness contract.");
assert(exists("public", "nexus-healthcare-access-intelligence-feature-flag.js"), "Sprint T5 requires T2 feature flag contract.");
assert(exists("fixtures", "nexus", "healthcare-access-intelligence-feature-flags.json"), "Sprint T5 requires T3 feature flag fixture.");
assert(exists("public", "nexus-workforce-intelligence-readiness-contract.js"), "Sprint T5 requires Phase 73 Workforce Intelligence readiness contract for the next safe lane.");

assertIncludes(readinessContract, [
  "HEALTHCARE_ACCESS_INTELLIGENCE_READINESS_CONTRACT",
  "healthcare-access-intelligence.readiness.phase_72",
  "HEALTHCARE_ACCESS_INTELLIGENCE_NO_EXECUTION_DEFAULTS",
  "createHealthcareAccessIntelligenceReadinessContract",
  "executionAllowed: false",
  "liveConnectorEnabled: false",
  "providerExecutionEnabled: false",
  "regulatedActionEnabled: false",
  "provider_contact",
  "medical_records",
  "pharmacy",
  "emergency"
], "Phase 72 Healthcare Access Intelligence readiness contract");

assertIncludes(featureFlagModule, [
  "DEFAULT_HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_STATE",
  "NEXUS_HEALTHCARE_ACCESS_INTELLIGENCE_VISIBLE_ENABLED",
  "normalizeHealthcareAccessIntelligenceFeatureFlagState",
  "isHealthcareAccessIntelligenceVisibleFeatureEnabled",
  "executionAuthority",
  "noExecution"
], "T2 Healthcare Access Intelligence feature flag module");

assertIncludes(t3Harness, [
  "loadHealthcareAccessIntelligenceFlagFixtures",
  "validateHealthcareAccessIntelligenceFlagFixtures"
], "T3 Healthcare Access Intelligence harness");

assert.equal(DEFAULT_HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_STATE[field], false, `T5 default ${field} must remain false.`);
}
assert.equal(DEFAULT_HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_STATE.noExecution, true);

const normalizedUnsafeAttempt = normalizeHealthcareAccessIntelligenceFeatureFlagState({
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

assert.equal(normalizedUnsafeAttempt.enabled, true);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `T5 unsafe attempt for ${field} must normalize to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateHealthcareAccessIntelligenceFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "T3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "T5 expects four T3 healthcare access feature flag fixtures.");

const runtimeForbiddenTerms = [
  "nexus-healthcare-access-intelligence-readiness-contract.js",
  "nexus-healthcare-access-intelligence-feature-flag.js",
  "nexus-sprint-t3-healthcare-access-intelligence-flag-contract-harness",
  "healthcare-access-intelligence-feature-flags.json",
  "NEXUS_HEALTHCARE_ACCESS_INTELLIGENCE_VISIBLE_ENABLED",
  "NexusHealthcareAccessIntelligenceFeatureFlagContract",
  "normalizeHealthcareAccessIntelligenceFeatureFlagState",
  "isHealthcareAccessIntelligenceVisibleFeatureEnabled",
  "healthcareAccessIntelligenceRuntime",
  "liveHealthcareAdvisor",
  "sourceRetrievalRuntime",
  "executeHealthcareAdvice(",
  "connectTelehealthProvider(",
  "executePrescriptionRefill(",
  "accessMedicalRecords(",
  "dispatchEmergencyHelp("
];

assertRuntimeExcludes(index, runtimeForbiddenTerms, "public/index.html");
assertRuntimeExcludes(app, runtimeForbiddenTerms, "public/app.js");
assertRuntimeExcludes(server, runtimeForbiddenTerms, "server.js");

const alias = "qa:nexus-sprint-t5-healthcare-access-intelligence-lane-closeout";
assert.equal(
  pkg.scripts[alias],
  "node scripts/nexus-sprint-t5-healthcare-access-intelligence-lane-closeout-qa.js",
  "package.json must expose Sprint T5 QA alias."
);
assert(qaSuite.includes("scripts/nexus-sprint-t5-healthcare-access-intelligence-lane-closeout-qa.js"), "qa-suite must include Sprint T5 QA.");

console.log("[nexus-sprint-t5-healthcare-access-intelligence-lane-closeout-qa] passed");
