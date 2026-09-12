const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_RURAL_HEALTH_MODE_FEATURE_FLAG_STATE,
  normalizeRuralHealthModeFeatureFlagState
} = require("../public/nexus-rural-health-mode-feature-flag.js");
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

function assertRuntimeExcludes(source, terms, label) {
  for (const term of terms) {
    assert(!source.includes(term), `${label} must not runtime-load or activate Sprint Y artifact: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_Y5_RURAL_HEALTH_MODE_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-y5-rural-health-mode-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint Y5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint Y5 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-rural-health-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-rural-health-mode-feature-flag.js");
const y3Harness = read("scripts", "nexus-sprint-y3-rural-health-mode-flag-contract-harness.js");
const fixtures = loadRuralHealthModeFlagFixtures();

assertIncludes(doc, [
  "Sprint Y5",
  "2555b654b555d44b3fd6c1fe20ce81c0ebc550b0",
  "documentation and deterministic QA only",
  "Sprint Y Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint Z1 - Telehealth Mode Runtime Activation Readiness Gate"
], "Y5 closeout doc");

assertIncludes(doc, [
  "Rural Health Mode runtime activation readiness gate",
  "Rural Health Mode feature flag contract",
  "Rural Health Mode flag contract harness",
  "Rural Health Mode runtime absence regression guard",
  "Rural Health Mode lane closeout"
], "Y5 sprint summary");

assertIncludes(doc, [
  "Rural Health Mode readiness is not runtime activation",
  "Rural Health Mode visibility readiness is not source authority, medical authority, clinical authority, diagnosis authority, prescription authority, pharmacy authority, telehealth authority, provider authority, clinician authority, transportation authority, emergency authority, location consent, camera consent, microphone consent, user consent, provider approval, human review approval, audit approval, or execution approval",
  "generated Rural Health Mode text cannot authorize, stage, advise without sources, diagnose, prescribe, refill, schedule, contact, dispatch, share location, activate hardware, pay, transact, write, or execute an action by itself",
  "enabled: false",
  "visibleUiAllowed: false",
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
  "unsafe authority attempts normalize back to no-execution values",
  "no action has been taken"
], "Y5 no-authority and no-execution language");

assertIncludes(doc, [
  "active Rural Health Mode runtime",
  "live Rural Health Mode runtime",
  "health connector runtime",
  "clinic connector runtime",
  "telehealth connector runtime",
  "pharmacy connector runtime",
  "prescription/refill runtime",
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
], "Y5 blocked runtime categories");

const requiredDocs = [
  "NEXUS_SPRINT_Y1_RURAL_HEALTH_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_Y2_RURAL_HEALTH_MODE_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_Y3_RURAL_HEALTH_MODE_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_Y4_RURAL_HEALTH_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_RURAL_HEALTH_MODE_READINESS_CONTRACT_PHASE_77.md",
  "NEXUS_TELEHEALTH_MODE_READINESS_CONTRACT_PHASE_78.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint Y5 requires prior or next-lane doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-y1-rural-health-mode-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-y2-rural-health-mode-feature-flag-contract-qa.js",
  "nexus-sprint-y3-rural-health-mode-flag-contract-harness-qa.js",
  "nexus-sprint-y4-rural-health-mode-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint Y5 requires prior Sprint Y QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint Y QA: ${requiredScript}`);
}

assert(exists("public", "nexus-rural-health-mode-readiness-contract.js"), "Sprint Y5 requires Phase 77 Rural Health Mode readiness contract.");
assert(exists("public", "nexus-rural-health-mode-feature-flag.js"), "Sprint Y5 requires Y2 feature flag contract.");
assert(exists("fixtures", "nexus", "rural-health-mode-feature-flags.json"), "Sprint Y5 requires Y3 feature flag fixture.");
assert(exists("public", "nexus-telehealth-mode-readiness-contract.js"), "Sprint Y5 requires Phase 78 Telehealth Mode readiness contract for the next safe lane.");

assertIncludes(readinessContract, [
  "RURAL_HEALTH_MODE_READINESS_CONTRACT",
  "rural-health-mode.readiness.phase_77",
  "RURAL_HEALTH_MODE_NO_EXECUTION_DEFAULTS",
  "createRuralHealthModeReadinessContract",
  "executionAllowed: false",
  "liveConnectorEnabled: false",
  "providerExecutionEnabled: false",
  "regulatedActionEnabled: false",
  "provider_contact",
  "healthcare",
  "medical_records",
  "transportation_dispatch",
  "regulated_execution"
], "Phase 77 Rural Health Mode readiness contract");

assertIncludes(featureFlagModule, [
  "DEFAULT_RURAL_HEALTH_MODE_FEATURE_FLAG_STATE",
  "NEXUS_RURAL_HEALTH_MODE_VISIBLE_ENABLED",
  "normalizeRuralHealthModeFeatureFlagState",
  "isRuralHealthModeVisibleFeatureEnabled",
  "executionAuthority",
  "noExecution"
], "Y2 Rural Health Mode feature flag module");

assertIncludes(y3Harness, [
  "loadRuralHealthModeFlagFixtures",
  "validateRuralHealthModeFlagFixtures"
], "Y3 Rural Health Mode harness");

assert.equal(DEFAULT_RURAL_HEALTH_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_RURAL_HEALTH_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_RURAL_HEALTH_MODE_FEATURE_FLAG_STATE[field], false, `Y5 default ${field} must remain false.`);
}
assert.equal(DEFAULT_RURAL_HEALTH_MODE_FEATURE_FLAG_STATE.noExecution, true);

const unsafeInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of protectedFields) {
  unsafeInput[field] = true;
}
const normalizedUnsafeAttempt = normalizeRuralHealthModeFeatureFlagState(unsafeInput);

assert.equal(normalizedUnsafeAttempt.enabled, true);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Y5 unsafe attempt for ${field} must normalize to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateRuralHealthModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "Y3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "Y5 expects four Y3 Rural Health Mode feature flag fixtures.");

const runtimeForbiddenTerms = [
  "nexus-rural-health-mode-readiness-contract.js",
  "nexus-rural-health-mode-feature-flag.js",
  "nexus-sprint-y3-rural-health-mode-flag-contract-harness",
  "rural-health-mode-feature-flags.json",
  "NEXUS_RURAL_HEALTH_MODE_VISIBLE_ENABLED",
  "NexusRuralHealthModeFeatureFlagContract",
  "normalizeRuralHealthModeFeatureFlagState",
  "isRuralHealthModeVisibleFeatureEnabled",
  "ruralHealthModeFeatureFlag",
  "liveRuralHealthModeRuntime",
  "healthConnectorRuntime",
  "clinicConnectorRuntime",
  "telehealthConnectorRuntime",
  "pharmacyConnectorRuntime",
  "executeRuralHealthMode(",
  "executeTelehealth(",
  "executePrescriptionRefill(",
  "contactProvider(",
  "contactClinician(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation(",
  "openHealthCamera("
];

assertRuntimeExcludes(index, runtimeForbiddenTerms, "public/index.html");
assertRuntimeExcludes(app, runtimeForbiddenTerms, "public/app.js");
assertRuntimeExcludes(server, runtimeForbiddenTerms, "server.js");

const alias = "qa:nexus-sprint-y5-rural-health-mode-lane-closeout";
assert.equal(
  pkg.scripts[alias],
  "node scripts/nexus-sprint-y5-rural-health-mode-lane-closeout-qa.js",
  "package.json must expose Sprint Y5 QA alias."
);
assert(qaSuite.includes("scripts/nexus-sprint-y5-rural-health-mode-lane-closeout-qa.js"), "qa-suite must include Sprint Y5 QA.");

console.log("[nexus-sprint-y5-rural-health-mode-lane-closeout-qa] passed");
