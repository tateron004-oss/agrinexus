const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_MOBILE_CLINIC_MODE_FEATURE_FLAG_STATE,
  normalizeMobileClinicModeFeatureFlagState
} = require("../public/nexus-mobile-clinic-mode-feature-flag.js");
const {
  protectedFields,
  loadMobileClinicModeFlagFixtures,
  validateMobileClinicModeFlagFixtures
} = require("./nexus-sprint-ab3-mobile-clinic-mode-flag-contract-harness.js");

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
    assert(!source.includes(term), `${label} must not runtime-load or activate Sprint AB artifact: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_AB5_MOBILE_CLINIC_MODE_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-ab5-mobile-clinic-mode-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint AB5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint AB5 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-mobile-clinic-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-mobile-clinic-mode-feature-flag.js");
const ab3Harness = read("scripts", "nexus-sprint-ab3-mobile-clinic-mode-flag-contract-harness.js");
const ab4Doc = read("docs", "NEXUS_SPRINT_AB4_MOBILE_CLINIC_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md");
const fixtures = loadMobileClinicModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AB5",
  "9a22302c9c282568c78d573945c385c1073617b3",
  "documentation and deterministic QA only",
  "Sprint AB Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint AC1 - Transportation Mode Runtime Activation Readiness Gate"
], "AB5 closeout doc");

assertIncludes(doc, [
  "Mobile Clinic Mode runtime activation readiness gate",
  "Mobile Clinic Mode feature flag contract",
  "Mobile Clinic Mode flag contract harness",
  "Mobile Clinic Mode runtime absence regression guard",
  "Mobile Clinic Mode lane closeout"
], "AB5 sprint summary");

assertIncludes(doc, [
  "Mobile Clinic Mode readiness is not runtime activation",
  "Mobile Clinic Mode visibility readiness is not source authority, medical authority, clinical authority, diagnosis authority, prescription authority, provider authority, clinician authority, transportation authority, emergency authority, location consent, camera consent, microphone consent, user consent, provider approval, human review approval, audit approval, payment approval, or execution approval",
  "generated Mobile Clinic Mode text cannot authorize, stage, advise without sources, diagnose, prescribe, schedule, contact, dispatch, share location, activate hardware, pay, transact, write, or execute an action by itself",
  "enabled: false",
  "visibleUiAllowed: false",
  "mobileClinicModeReviewAllowed: false",
  "mobileClinicSchedulePreviewAllowed: false",
  "clinicAccessPreviewAllowed: false",
  "providerDirectoryPreviewAllowed: false",
  "transportationReadinessPreviewAllowed: false",
  "locationConsentBoundaryPreviewAllowed: false",
  "emergencyBoundaryPreviewAllowed: false",
  "mobileClinicModeRuntimeAllowed: false",
  "liveMobileClinicModeRuntimeAllowed: false",
  "healthConnectorRuntimeAllowed: false",
  "clinicConnectorRuntimeAllowed: false",
  "telehealthConnectorRuntimeAllowed: false",
  "mobileClinicConnectorRuntimeAllowed: false",
  "mobileClinicScheduleConnectorRuntimeAllowed: false",
  "providerConnectorRuntimeAllowed: false",
  "clinicianConnectorRuntimeAllowed: false",
  "transportationConnectorRuntimeAllowed: false",
  "locationConnectorRuntimeAllowed: false",
  "appointmentSchedulingAllowed: false",
  "transportationDispatchAllowed: false",
  "emergencyDispatchAllowed: false",
  "medicalRecordsFhirRuntimeAllowed: false",
  "medicalAdviceAllowed: false",
  "diagnosisClaimAllowed: false",
  "prescriptionInstructionAllowed: false",
  "providerContactAllowed: false",
  "clinicianContactAllowed: false",
  "locationSharingAllowed: false",
  "cameraActivationAllowed: false",
  "microphoneActivationAllowed: false",
  "paymentExecutionAllowed: false",
  "marketplaceTransactionAllowed: false",
  "communicationsExecutionAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "unsafe authority attempts normalize back to no-execution values",
  "no action has been taken"
], "AB5 no-authority and no-execution language");

assertIncludes(doc, [
  "active Mobile Clinic Mode runtime",
  "live Mobile Clinic Mode runtime",
  "health connector runtime",
  "clinic connector runtime",
  "telehealth connector runtime",
  "mobile clinic connector runtime",
  "mobile clinic schedule connector runtime",
  "provider connector runtime",
  "clinician connector runtime",
  "transportation connector runtime",
  "location connector runtime",
  "appointment scheduling runtime",
  "transportation dispatch",
  "emergency dispatch",
  "medical records/FHIR runtime",
  "medical advice",
  "diagnosis claims",
  "prescription instructions",
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
], "AB5 blocked runtime categories");

assertIncludes(ab4Doc, [
  "Sprint AB5 - Mobile Clinic Mode Lane Closeout"
], "AB4 next sprint recommendation");

const requiredDocs = [
  "NEXUS_SPRINT_AB1_MOBILE_CLINIC_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_AB2_MOBILE_CLINIC_MODE_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_AB3_MOBILE_CLINIC_MODE_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_AB4_MOBILE_CLINIC_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_MOBILE_CLINIC_MODE_READINESS_CONTRACT_PHASE_80.md",
  "NEXUS_TRANSPORTATION_MODE_READINESS_CONTRACT_PHASE_81.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint AB5 requires prior or next-lane doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-ab1-mobile-clinic-mode-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-ab2-mobile-clinic-mode-feature-flag-contract-qa.js",
  "nexus-sprint-ab3-mobile-clinic-mode-flag-contract-harness-qa.js",
  "nexus-sprint-ab4-mobile-clinic-mode-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint AB5 requires prior Sprint AB QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint AB QA: ${requiredScript}`);
}

assert(exists("public", "nexus-mobile-clinic-mode-readiness-contract.js"), "Sprint AB5 requires Phase 80 Mobile Clinic Mode readiness contract.");
assert(exists("public", "nexus-mobile-clinic-mode-feature-flag.js"), "Sprint AB5 requires AB2 feature flag contract.");
assert(exists("fixtures", "nexus", "mobile-clinic-mode-feature-flags.json"), "Sprint AB5 requires AB3 feature flag fixture.");
assert(exists("public", "nexus-transportation-mode-readiness-contract.js"), "Sprint AB5 requires Transportation Mode readiness contract for the next safe lane.");

assertIncludes(readinessContract, [
  "MOBILE_CLINIC_MODE_READINESS_CONTRACT",
  "mobile-clinic-mode.readiness.phase_80",
  "MOBILE_CLINIC_MODE_NO_EXECUTION_DEFAULTS",
  "createMobileClinicModeReadinessContract",
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
], "Phase 80 Mobile Clinic Mode readiness contract");

assertIncludes(featureFlagModule, [
  "DEFAULT_MOBILE_CLINIC_MODE_FEATURE_FLAG_STATE",
  "NEXUS_MOBILE_CLINIC_MODE_VISIBLE_ENABLED",
  "normalizeMobileClinicModeFeatureFlagState",
  "isMobileClinicModeVisibleFeatureEnabled",
  "executionAuthority",
  "noExecution"
], "AB2 Mobile Clinic Mode feature flag module");

assertIncludes(ab3Harness, [
  "loadMobileClinicModeFlagFixtures",
  "validateMobileClinicModeFlagFixtures"
], "AB3 Mobile Clinic Mode harness");

assert.equal(DEFAULT_MOBILE_CLINIC_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_MOBILE_CLINIC_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_MOBILE_CLINIC_MODE_FEATURE_FLAG_STATE[field], false, `AB5 default ${field} must remain false.`);
}
assert.equal(DEFAULT_MOBILE_CLINIC_MODE_FEATURE_FLAG_STATE.noExecution, true);

const unsafeInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of protectedFields) {
  unsafeInput[field] = true;
}
const normalizedUnsafeAttempt = normalizeMobileClinicModeFeatureFlagState(unsafeInput);

assert.equal(normalizedUnsafeAttempt.enabled, true);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `AB5 unsafe attempt for ${field} must normalize to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateMobileClinicModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "AB3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "AB5 expects four AB3 Mobile Clinic Mode feature flag fixtures.");

const runtimeForbiddenTerms = [
  "nexus-mobile-clinic-mode-readiness-contract.js",
  "nexus-mobile-clinic-mode-feature-flag.js",
  "nexus-sprint-ab3-mobile-clinic-mode-flag-contract-harness",
  "mobile-clinic-mode-feature-flags.json",
  "NEXUS_MOBILE_CLINIC_MODE_VISIBLE_ENABLED",
  "NexusMobileClinicModeFeatureFlagContract",
  "normalizeMobileClinicModeFeatureFlagState",
  "isMobileClinicModeVisibleFeatureEnabled",
  "mobileClinicModeFeatureFlag",
  "liveMobileClinicModeRuntime",
  "healthConnectorRuntime",
  "clinicConnectorRuntime",
  "telehealthConnectorRuntime",
  "mobileClinicConnectorRuntime",
  "mobileClinicScheduleConnectorRuntime",
  "providerConnectorRuntime",
  "clinicianConnectorRuntime",
  "transportationConnectorRuntime",
  "locationConnectorRuntime",
  "appointmentSchedulingRuntime",
  "medicalRecordsFhirRuntime",
  "executeMobileClinicSchedule(",
  "scheduleMobileClinicVisit(",
  "contactMobileClinicProvider(",
  "contactClinician(",
  "dispatchTransportation(",
  "dispatchMobileClinicTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation(",
  "openMobileClinicCamera(",
  "openMobileClinicMicrophone(",
  "nexus-sprint-ab5-mobile-clinic-mode-lane-closeout"
];

assertRuntimeExcludes(index, runtimeForbiddenTerms, "public/index.html");
assertRuntimeExcludes(app, runtimeForbiddenTerms, "public/app.js");
assertRuntimeExcludes(server, runtimeForbiddenTerms, "server.js");

const alias = "qa:nexus-sprint-ab5-mobile-clinic-mode-lane-closeout";
assert.equal(
  pkg.scripts[alias],
  "node scripts/nexus-sprint-ab5-mobile-clinic-mode-lane-closeout-qa.js",
  "package.json must expose Sprint AB5 QA alias."
);
assert(qaSuite.includes("scripts/nexus-sprint-ab5-mobile-clinic-mode-lane-closeout-qa.js"), "qa-suite must include Sprint AB5 QA.");

console.log("[nexus-sprint-ab5-mobile-clinic-mode-lane-closeout-qa] passed");
