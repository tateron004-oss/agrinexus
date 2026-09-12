const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_TELEHEALTH_MODE_FEATURE_FLAG_STATE,
  normalizeTelehealthModeFeatureFlagState
} = require("../public/nexus-telehealth-mode-feature-flag.js");
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

function assertRuntimeExcludes(source, terms, label) {
  for (const term of terms) {
    assert(!source.includes(term), `${label} must not runtime-load or activate Sprint Z artifact: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_Z5_TELEHEALTH_MODE_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-z5-telehealth-mode-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint Z5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint Z5 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-telehealth-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-telehealth-mode-feature-flag.js");
const z3Harness = read("scripts", "nexus-sprint-z3-telehealth-mode-flag-contract-harness.js");
const z4Doc = read("docs", "NEXUS_SPRINT_Z4_TELEHEALTH_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md");
const fixtures = loadTelehealthModeFlagFixtures();

assertIncludes(doc, [
  "Sprint Z5",
  "55d24d977d0d06205735090dd28a4e11c3ea935b",
  "documentation and deterministic QA only",
  "Sprint Z Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint AA1 - Pharmacy Mode Runtime Activation Readiness Gate"
], "Z5 closeout doc");

assertIncludes(doc, [
  "Telehealth Mode runtime activation readiness gate",
  "Telehealth Mode feature flag contract",
  "Telehealth Mode flag contract harness",
  "Telehealth Mode runtime absence regression guard",
  "Telehealth Mode lane closeout"
], "Z5 sprint summary");

assertIncludes(doc, [
  "Telehealth Mode readiness is not runtime activation",
  "Telehealth Mode visibility readiness is not source authority, medical authority, clinical authority, diagnosis authority, prescription authority, pharmacy authority, telehealth authority, provider authority, clinician authority, transportation authority, emergency authority, location consent, camera consent, microphone consent, user consent, provider approval, human review approval, audit approval, or execution approval",
  "generated Telehealth Mode text cannot authorize, stage, advise without sources, diagnose, prescribe, refill, schedule, contact, dispatch, share location, activate hardware, pay, transact, write, or execute an action by itself",
  "enabled: false",
  "visibleUiAllowed: false",
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
  "unsafe authority attempts normalize back to no-execution values",
  "no action has been taken"
], "Z5 no-authority and no-execution language");

assertIncludes(doc, [
  "active Telehealth Mode runtime",
  "live Telehealth Mode runtime",
  "health connector runtime",
  "clinic connector runtime",
  "telehealth connector runtime",
  "provider connector runtime",
  "clinician connector runtime",
  "pharmacy connector runtime",
  "prescription/refill runtime",
  "appointment scheduling runtime",
  "transportation dispatch",
  "emergency dispatch",
  "medical records/FHIR runtime",
  "medical advice",
  "diagnosis claims",
  "prescription instructions",
  "refill execution",
  "provider contact",
  "clinician contact",
  "unsupported live data claims",
  "provider connection claims",
  "completed action claims",
  "communication execution claims",
  "payment execution claims",
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
], "Z5 blocked runtime categories");

assertIncludes(z4Doc, [
  "Sprint Z5 - Telehealth Mode Lane Closeout"
], "Z4 next sprint recommendation");

const requiredDocs = [
  "NEXUS_SPRINT_Z1_TELEHEALTH_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_Z2_TELEHEALTH_MODE_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_Z3_TELEHEALTH_MODE_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_Z4_TELEHEALTH_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_TELEHEALTH_MODE_READINESS_CONTRACT_PHASE_78.md",
  "NEXUS_PHARMACY_MODE_READINESS_CONTRACT_PHASE_79.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint Z5 requires prior or next-lane doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-z1-telehealth-mode-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-z2-telehealth-mode-feature-flag-contract-qa.js",
  "nexus-sprint-z3-telehealth-mode-flag-contract-harness-qa.js",
  "nexus-sprint-z4-telehealth-mode-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint Z5 requires prior Sprint Z QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint Z QA: ${requiredScript}`);
}

assert(exists("public", "nexus-telehealth-mode-readiness-contract.js"), "Sprint Z5 requires Phase 78 Telehealth Mode readiness contract.");
assert(exists("public", "nexus-telehealth-mode-feature-flag.js"), "Sprint Z5 requires Z2 feature flag contract.");
assert(exists("fixtures", "nexus", "telehealth-mode-feature-flags.json"), "Sprint Z5 requires Z3 feature flag fixture.");
assert(exists("public", "nexus-pharmacy-mode-readiness-contract.js"), "Sprint Z5 requires Pharmacy Mode readiness contract for the next safe lane.");

assertIncludes(readinessContract, [
  "TELEHEALTH_MODE_READINESS_CONTRACT",
  "telehealth-mode.readiness.phase_78",
  "TELEHEALTH_MODE_NO_EXECUTION_DEFAULTS",
  "createTelehealthModeReadinessContract",
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
], "Phase 78 Telehealth Mode readiness contract");

assertIncludes(featureFlagModule, [
  "DEFAULT_TELEHEALTH_MODE_FEATURE_FLAG_STATE",
  "NEXUS_TELEHEALTH_MODE_VISIBLE_ENABLED",
  "normalizeTelehealthModeFeatureFlagState",
  "isTelehealthModeVisibleFeatureEnabled",
  "executionAuthority",
  "noExecution"
], "Z2 Telehealth Mode feature flag module");

assertIncludes(z3Harness, [
  "loadTelehealthModeFlagFixtures",
  "validateTelehealthModeFlagFixtures"
], "Z3 Telehealth Mode harness");

assert.equal(DEFAULT_TELEHEALTH_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_TELEHEALTH_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_TELEHEALTH_MODE_FEATURE_FLAG_STATE[field], false, `Z5 default ${field} must remain false.`);
}
assert.equal(DEFAULT_TELEHEALTH_MODE_FEATURE_FLAG_STATE.noExecution, true);

const unsafeInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of protectedFields) {
  unsafeInput[field] = true;
}
const normalizedUnsafeAttempt = normalizeTelehealthModeFeatureFlagState(unsafeInput);

assert.equal(normalizedUnsafeAttempt.enabled, true);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Z5 unsafe attempt for ${field} must normalize to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateTelehealthModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "Z3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "Z5 expects four Z3 Telehealth Mode feature flag fixtures.");

const runtimeForbiddenTerms = [
  "nexus-telehealth-mode-readiness-contract.js",
  "nexus-telehealth-mode-feature-flag.js",
  "nexus-sprint-z3-telehealth-mode-flag-contract-harness",
  "telehealth-mode-feature-flags.json",
  "NEXUS_TELEHEALTH_MODE_VISIBLE_ENABLED",
  "NexusTelehealthModeFeatureFlagContract",
  "normalizeTelehealthModeFeatureFlagState",
  "isTelehealthModeVisibleFeatureEnabled",
  "telehealthModeFeatureFlag",
  "liveTelehealthModeRuntime",
  "healthConnectorRuntime",
  "clinicConnectorRuntime",
  "telehealthConnectorRuntime",
  "providerConnectorRuntime",
  "clinicianConnectorRuntime",
  "pharmacyConnectorRuntime",
  "prescriptionRefillRuntime",
  "medicalRecordsFhirRuntime",
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
  "openTelehealthMicrophone(",
  "nexus-sprint-z5-telehealth-mode-lane-closeout"
];

assertRuntimeExcludes(index, runtimeForbiddenTerms, "public/index.html");
assertRuntimeExcludes(app, runtimeForbiddenTerms, "public/app.js");
assertRuntimeExcludes(server, runtimeForbiddenTerms, "server.js");

const alias = "qa:nexus-sprint-z5-telehealth-mode-lane-closeout";
assert.equal(
  pkg.scripts[alias],
  "node scripts/nexus-sprint-z5-telehealth-mode-lane-closeout-qa.js",
  "package.json must expose Sprint Z5 QA alias."
);
assert(qaSuite.includes("scripts/nexus-sprint-z5-telehealth-mode-lane-closeout-qa.js"), "qa-suite must include Sprint Z5 QA.");

console.log("[nexus-sprint-z5-telehealth-mode-lane-closeout-qa] passed");
