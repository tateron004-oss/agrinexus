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

const docName = "NEXUS_SPRINT_T4_HEALTHCARE_ACCESS_INTELLIGENCE_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-t4-healthcare-access-intelligence-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint T4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint T4 QA script must exist.");

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
  "Sprint T4",
  "575b9abdd2cd377ff75c0cd174759c653e1e75bb",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint T5 - Healthcare Access Intelligence Lane Closeout"
], "T4 absence guard doc");

assertIncludes(doc, [
  "T1 Healthcare Access Intelligence runtime activation readiness gate",
  "T2 Healthcare Access Intelligence feature flag contract",
  "T3 Healthcare Access Intelligence flag contract harness",
  "Phase 72 Healthcare Access Intelligence readiness contract"
], "T4 protected artifacts");

assertIncludes(doc, [
  "public/nexus-healthcare-access-intelligence-readiness-contract.js",
  "public/nexus-healthcare-access-intelligence-feature-flag.js",
  "scripts/nexus-sprint-t3-healthcare-access-intelligence-flag-contract-harness.js",
  "fixtures/nexus/healthcare-access-intelligence-feature-flags.json",
  "Sprint T QA scripts"
], "T4 runtime absence artifact list");

assertIncludes(doc, [
  "It intentionally does not ban generic healthcare words such as",
  "health",
  "telehealth",
  "clinic",
  "pharmacy",
  "provider",
  "appointment",
  "medicine",
  "vitals",
  "consent",
  "emergency"
], "T4 generic wording exception");

assertIncludes(doc, [
  "active healthcare access intelligence runtime",
  "live healthcare advisor",
  "source retrieval runtime",
  "diagnosis claims",
  "medical advice claims",
  "prescription or refill execution",
  "pharmacy workflow execution",
  "clinic, provider, or telehealth contact",
  "telehealth session launch",
  "medical records or FHIR access",
  "payment execution",
  "emergency dispatch",
  "transportation dispatch",
  "location sharing",
  "camera or microphone activation",
  "provider connection claims",
  "completed action claims",
  "standard user healthcare brain mutation",
  "source-backed health claims without sources",
  "stale data claims without freshness labels",
  "confidence-free source-backed claims",
  "unsupported live data claims",
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
  "marketplace transactions",
  "account creation",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "T4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_T1_HEALTHCARE_ACCESS_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_T2_HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_T3_HEALTHCARE_ACCESS_INTELLIGENCE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_HEALTHCARE_ACCESS_INTELLIGENCE_READINESS_CONTRACT_PHASE_72.md"],
  ["public", "nexus-healthcare-access-intelligence-readiness-contract.js"],
  ["public", "nexus-healthcare-access-intelligence-feature-flag.js"],
  ["fixtures", "nexus", "healthcare-access-intelligence-feature-flags.json"],
  ["scripts", "nexus-sprint-t3-healthcare-access-intelligence-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `T4 requires artifact: ${requiredPath.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
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
  "dispatchEmergencyHelp(",
  "nexus-sprint-t4-healthcare-access-intelligence-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Healthcare Access Intelligence lane artifact: ${term}`);
}

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

assert.equal(DEFAULT_HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_STATE[field], false, `T4 default ${field} must remain false.`);
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

assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateHealthcareAccessIntelligenceFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "T3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "T3 fixtures must remain complete.");

for (const source of [featureFlagModule, t3Harness]) {
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
    "sendBeacon",
    "setItem",
    "postMessage",
    "window.nativeBridge",
    "nativeBridge.",
    "ACTION_CALL",
    "getUserMedia",
    "openWorkflow(",
    "goSection(",
    "executeHealthcareAdvice(",
    "connectTelehealthProvider(",
    "executePrescriptionRefill(",
    "accessMedicalRecords(",
    "dispatchEmergencyHelp("
  ]) {
    assert(!source.includes(term), `Sprint T contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-t4-healthcare-access-intelligence-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint T4 QA.");

console.log("[nexus-sprint-t4-healthcare-access-intelligence-runtime-absence-regression-guard-qa] passed");
