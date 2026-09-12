const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_PHARMACY_MODE_FEATURE_FLAG_STATE,
  normalizePharmacyModeFeatureFlagState
} = require("../public/nexus-pharmacy-mode-feature-flag.js");
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

function assertRuntimeExcludes(source, terms, label) {
  for (const term of terms) {
    assert(!source.includes(term), `${label} must not runtime-load or activate Sprint AA artifact: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_AA5_PHARMACY_MODE_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-aa5-pharmacy-mode-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint AA5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint AA5 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-pharmacy-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-pharmacy-mode-feature-flag.js");
const aa3Harness = read("scripts", "nexus-sprint-aa3-pharmacy-mode-flag-contract-harness.js");
const aa4Doc = read("docs", "NEXUS_SPRINT_AA4_PHARMACY_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md");
const fixtures = loadPharmacyModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AA5",
  "886863c4576165d5a7577da074f7b4ac6cd3df5f",
  "documentation and deterministic QA only",
  "Sprint AA Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint AB1 - Mobile Clinic Mode Runtime Activation Readiness Gate"
], "AA5 closeout doc");

assertIncludes(doc, [
  "Pharmacy Mode runtime activation readiness gate",
  "Pharmacy Mode feature flag contract",
  "Pharmacy Mode flag contract harness",
  "Pharmacy Mode runtime absence regression guard",
  "Pharmacy Mode lane closeout"
], "AA5 sprint summary");

assertIncludes(doc, [
  "Pharmacy Mode readiness is not runtime activation",
  "Pharmacy Mode visibility readiness is not source authority, medical authority, clinical authority, diagnosis authority, prescription authority, pharmacy authority, provider authority, pharmacist authority, transportation authority, emergency authority, location consent, camera consent, microphone consent, user consent, provider approval, human review approval, audit approval, payment approval, insurance approval, or execution approval",
  "generated Pharmacy Mode text cannot authorize, stage, advise without sources, diagnose, prescribe, refill, schedule, contact, dispatch, share location, activate hardware, pay, process insurance, transact, write, or execute an action by itself",
  "enabled: false",
  "visibleUiAllowed: false",
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
  "paymentInsuranceConnectorRuntimeAllowed: false",
  "prescriptionRefillRuntimeAllowed: false",
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
  "communicationsExecutionAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "unsafe authority attempts normalize back to no-execution values",
  "no action has been taken"
], "AA5 no-authority and no-execution language");

assertIncludes(doc, [
  "active Pharmacy Mode runtime",
  "live Pharmacy Mode runtime",
  "health connector runtime",
  "clinic connector runtime",
  "telehealth connector runtime",
  "pharmacy connector runtime",
  "pharmacy provider connector runtime",
  "prescription connector runtime",
  "refill connector runtime",
  "medication safety connector runtime",
  "payment or insurance connector runtime",
  "prescription/refill runtime",
  "appointment scheduling runtime",
  "transportation dispatch",
  "emergency dispatch",
  "medical records/FHIR runtime",
  "medical advice",
  "diagnosis claims",
  "prescription instructions",
  "dosage instructions",
  "refill execution",
  "provider contact",
  "pharmacist contact",
  "unsupported live data claims",
  "provider connection claims",
  "completed action claims",
  "communication execution claims",
  "payment execution claims",
  "insurance processing claims",
  "marketplace transaction claims",
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
  "external navigation",
  "real pending action creation",
  "execution authority"
], "AA5 blocked runtime categories");

assertIncludes(aa4Doc, [
  "Sprint AA5 - Pharmacy Mode Lane Closeout"
], "AA4 next sprint recommendation");

const requiredDocs = [
  "NEXUS_SPRINT_AA1_PHARMACY_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_AA2_PHARMACY_MODE_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_AA3_PHARMACY_MODE_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_AA4_PHARMACY_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_PHARMACY_MODE_READINESS_CONTRACT_PHASE_79.md",
  "NEXUS_MOBILE_CLINIC_MODE_READINESS_CONTRACT_PHASE_80.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint AA5 requires prior or next-lane doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-aa1-pharmacy-mode-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-aa2-pharmacy-mode-feature-flag-contract-qa.js",
  "nexus-sprint-aa3-pharmacy-mode-flag-contract-harness-qa.js",
  "nexus-sprint-aa4-pharmacy-mode-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint AA5 requires prior Sprint AA QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint AA QA: ${requiredScript}`);
}

assert(exists("public", "nexus-pharmacy-mode-readiness-contract.js"), "Sprint AA5 requires Phase 79 Pharmacy Mode readiness contract.");
assert(exists("public", "nexus-pharmacy-mode-feature-flag.js"), "Sprint AA5 requires AA2 feature flag contract.");
assert(exists("fixtures", "nexus", "pharmacy-mode-feature-flags.json"), "Sprint AA5 requires AA3 feature flag fixture.");
assert(exists("public", "nexus-mobile-clinic-mode-readiness-contract.js"), "Sprint AA5 requires Mobile Clinic Mode readiness contract for the next safe lane.");

assertIncludes(readinessContract, [
  "PHARMACY_MODE_READINESS_CONTRACT",
  "pharmacy-mode.readiness.phase_79",
  "PHARMACY_MODE_NO_EXECUTION_DEFAULTS",
  "createPharmacyModeReadinessContract",
  "executionAllowed: false",
  "liveConnectorEnabled: false",
  "providerExecutionEnabled: false",
  "regulatedActionEnabled: false",
  "healthcare",
  "medical_records",
  "pharmacy",
  "provider_contact",
  "transportation_dispatch",
  "regulated_execution"
], "Phase 79 Pharmacy Mode readiness contract");

assertIncludes(featureFlagModule, [
  "DEFAULT_PHARMACY_MODE_FEATURE_FLAG_STATE",
  "NEXUS_PHARMACY_MODE_VISIBLE_ENABLED",
  "normalizePharmacyModeFeatureFlagState",
  "isPharmacyModeVisibleFeatureEnabled",
  "executionAuthority",
  "noExecution"
], "AA2 Pharmacy Mode feature flag module");

assertIncludes(aa3Harness, [
  "loadPharmacyModeFlagFixtures",
  "validatePharmacyModeFlagFixtures"
], "AA3 Pharmacy Mode harness");

assert.equal(DEFAULT_PHARMACY_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_PHARMACY_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_PHARMACY_MODE_FEATURE_FLAG_STATE[field], false, `AA5 default ${field} must remain false.`);
}
assert.equal(DEFAULT_PHARMACY_MODE_FEATURE_FLAG_STATE.noExecution, true);

const unsafeInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of protectedFields) {
  unsafeInput[field] = true;
}
const normalizedUnsafeAttempt = normalizePharmacyModeFeatureFlagState(unsafeInput);

assert.equal(normalizedUnsafeAttempt.enabled, true);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `AA5 unsafe attempt for ${field} must normalize to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validatePharmacyModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "AA3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "AA5 expects four AA3 Pharmacy Mode feature flag fixtures.");

const runtimeForbiddenTerms = [
  "nexus-pharmacy-mode-readiness-contract.js",
  "nexus-pharmacy-mode-feature-flag.js",
  "nexus-sprint-aa3-pharmacy-mode-flag-contract-harness",
  "pharmacy-mode-feature-flags.json",
  "NEXUS_PHARMACY_MODE_VISIBLE_ENABLED",
  "NexusPharmacyModeFeatureFlagContract",
  "normalizePharmacyModeFeatureFlagState",
  "isPharmacyModeVisibleFeatureEnabled",
  "pharmacyModeFeatureFlag",
  "livePharmacyModeRuntime",
  "healthConnectorRuntime",
  "clinicConnectorRuntime",
  "telehealthConnectorRuntime",
  "pharmacyConnectorRuntime",
  "pharmacyProviderConnectorRuntime",
  "prescriptionConnectorRuntime",
  "refillConnectorRuntime",
  "paymentInsuranceConnectorRuntime",
  "prescriptionRefillRuntime",
  "medicalRecordsFhirRuntime",
  "executePrescriptionRefill(",
  "executePharmacyRefill(",
  "contactPharmacyProvider(",
  "contactPharmacist(",
  "processPharmacyPayment(",
  "processInsurance(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation(",
  "openPharmacyCamera(",
  "openPharmacyMicrophone(",
  "nexus-sprint-aa5-pharmacy-mode-lane-closeout"
];

assertRuntimeExcludes(index, runtimeForbiddenTerms, "public/index.html");
assertRuntimeExcludes(app, runtimeForbiddenTerms, "public/app.js");
assertRuntimeExcludes(server, runtimeForbiddenTerms, "server.js");

const alias = "qa:nexus-sprint-aa5-pharmacy-mode-lane-closeout";
assert.equal(
  pkg.scripts[alias],
  "node scripts/nexus-sprint-aa5-pharmacy-mode-lane-closeout-qa.js",
  "package.json must expose Sprint AA5 QA alias."
);
assert(qaSuite.includes("scripts/nexus-sprint-aa5-pharmacy-mode-lane-closeout-qa.js"), "qa-suite must include Sprint AA5 QA.");

console.log("[nexus-sprint-aa5-pharmacy-mode-lane-closeout-qa] passed");
