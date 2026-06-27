const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_TRANSPORTATION_MODE_FEATURE_FLAG_STATE,
  normalizeTransportationModeFeatureFlagState
} = require("../public/nexus-transportation-mode-feature-flag.js");
const {
  protectedFields,
  loadTransportationModeFlagFixtures,
  validateTransportationModeFlagFixtures
} = require("./nexus-sprint-ac3-transportation-mode-flag-contract-harness.js");

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
    assert(!source.includes(term), `${label} must not runtime-load or activate Sprint AC artifact: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_AC5_TRANSPORTATION_MODE_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-ac5-transportation-mode-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint AC5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint AC5 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-transportation-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-transportation-mode-feature-flag.js");
const ac3Harness = read("scripts", "nexus-sprint-ac3-transportation-mode-flag-contract-harness.js");
const ac4Doc = read("docs", "NEXUS_SPRINT_AC4_TRANSPORTATION_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md");
const fixtures = loadTransportationModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AC5",
  "846f1b5c48ae2e84fec213c0bd134a88aa22983f",
  "documentation and deterministic QA only",
  "Sprint AC Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint AD1 - Workforce Mode Runtime Activation Readiness Gate"
], "AC5 closeout doc");

assertIncludes(doc, [
  "Transportation Mode runtime activation readiness gate",
  "Transportation Mode feature flag contract",
  "Transportation Mode flag contract harness",
  "Transportation Mode runtime absence regression guard",
  "Transportation Mode lane closeout"
], "AC5 sprint summary");

assertIncludes(doc, [
  "Transportation Mode readiness is not runtime activation",
  "Transportation Mode visibility readiness is not source authority, transportation authority, provider authority, driver authority, route authority, dispatch authority, location consent, camera consent, microphone consent, user consent, provider approval, driver approval, human review approval, audit approval, payment approval, medical authority, emergency authority, or execution approval",
  "generated Transportation Mode text cannot authorize, stage, advise without sources, diagnose, prescribe, schedule, book, contact, dispatch, share location, activate hardware, pay, transact, write, or execute an action by itself",
  "enabled: false",
  "visibleUiAllowed: false",
  "transportationModeReviewAllowed: false",
  "transportationAccessPreviewAllowed: false",
  "routeReadinessPreviewAllowed: false",
  "providerDirectoryPreviewAllowed: false",
  "driverDirectoryPreviewAllowed: false",
  "locationConsentBoundaryPreviewAllowed: false",
  "paymentBoundaryPreviewAllowed: false",
  "emergencyBoundaryPreviewAllowed: false",
  "transportationModeRuntimeAllowed: false",
  "liveTransportationModeRuntimeAllowed: false",
  "transportationConnectorRuntimeAllowed: false",
  "transportationProviderConnectorRuntimeAllowed: false",
  "driverConnectorRuntimeAllowed: false",
  "dispatchConnectorRuntimeAllowed: false",
  "routeConnectorRuntimeAllowed: false",
  "locationConnectorRuntimeAllowed: false",
  "clinicConnectorRuntimeAllowed: false",
  "telehealthConnectorRuntimeAllowed: false",
  "paymentConnectorRuntimeAllowed: false",
  "appointmentSchedulingAllowed: false",
  "transportationBookingAllowed: false",
  "transportationDispatchAllowed: false",
  "emergencyDispatchAllowed: false",
  "medicalRecordsFhirRuntimeAllowed: false",
  "medicalAdviceAllowed: false",
  "diagnosisClaimAllowed: false",
  "prescriptionInstructionAllowed: false",
  "providerContactAllowed: false",
  "driverContactAllowed: false",
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
], "AC5 no-authority and no-execution language");

assertIncludes(doc, [
  "active Transportation Mode runtime",
  "live Transportation Mode runtime",
  "transportation connector runtime",
  "transportation provider connector runtime",
  "driver connector runtime",
  "dispatch connector runtime",
  "route connector runtime",
  "location connector runtime",
  "appointment scheduling runtime",
  "transportation booking",
  "transportation dispatch",
  "emergency dispatch",
  "medical records/FHIR runtime",
  "medical advice",
  "diagnosis claims",
  "prescription instructions",
  "provider contact",
  "driver contact",
  "unsupported live data claims",
  "provider connection claims",
  "driver connection claims",
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
  "driver handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "AC5 blocked runtime categories");

assertIncludes(ac4Doc, [
  "Sprint AC5 - Transportation Mode Lane Closeout"
], "AC4 next sprint recommendation");

const requiredDocs = [
  "NEXUS_SPRINT_AC1_TRANSPORTATION_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_AC2_TRANSPORTATION_MODE_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_AC3_TRANSPORTATION_MODE_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_AC4_TRANSPORTATION_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_TRANSPORTATION_MODE_READINESS_CONTRACT_PHASE_81.md",
  "NEXUS_WORKFORCE_MODE_READINESS_CONTRACT_PHASE_82.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint AC5 requires prior or next-lane doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-ac1-transportation-mode-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-ac2-transportation-mode-feature-flag-contract-qa.js",
  "nexus-sprint-ac3-transportation-mode-flag-contract-harness-qa.js",
  "nexus-sprint-ac4-transportation-mode-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint AC5 requires prior Sprint AC QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint AC QA: ${requiredScript}`);
}

assert(exists("public", "nexus-transportation-mode-readiness-contract.js"), "Sprint AC5 requires Phase 81 Transportation Mode readiness contract.");
assert(exists("public", "nexus-transportation-mode-feature-flag.js"), "Sprint AC5 requires AC2 feature flag contract.");
assert(exists("fixtures", "nexus", "transportation-mode-feature-flags.json"), "Sprint AC5 requires AC3 feature flag fixture.");
assert(exists("public", "nexus-workforce-mode-readiness-contract.js"), "Sprint AC5 requires Workforce Mode readiness contract for the next safe lane.");

assertIncludes(readinessContract, [
  "TRANSPORTATION_MODE_READINESS_CONTRACT",
  "transportation-mode.readiness.phase_81",
  "TRANSPORTATION_MODE_NO_EXECUTION_DEFAULTS",
  "createTransportationModeReadinessContract",
  "\"executionAllowed\": false",
  "\"liveConnectorEnabled\": false",
  "\"providerExecutionEnabled\": false",
  "\"regulatedActionEnabled\": false",
  "transportation",
  "location",
  "payments",
  "healthcare",
  "emergency",
  "regulated_execution"
], "Phase 81 Transportation Mode readiness contract");

assertIncludes(featureFlagModule, [
  "DEFAULT_TRANSPORTATION_MODE_FEATURE_FLAG_STATE",
  "NEXUS_TRANSPORTATION_MODE_VISIBLE_ENABLED",
  "normalizeTransportationModeFeatureFlagState",
  "isTransportationModeVisibleFeatureEnabled",
  "executionAuthority",
  "noExecution"
], "AC2 Transportation Mode feature flag module");

assertIncludes(ac3Harness, [
  "loadTransportationModeFlagFixtures",
  "validateTransportationModeFlagFixtures"
], "AC3 Transportation Mode harness");

assert.equal(DEFAULT_TRANSPORTATION_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_TRANSPORTATION_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_TRANSPORTATION_MODE_FEATURE_FLAG_STATE[field], false, `AC5 default ${field} must remain false.`);
}
assert.equal(DEFAULT_TRANSPORTATION_MODE_FEATURE_FLAG_STATE.noExecution, true);

const unsafeInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of protectedFields) {
  unsafeInput[field] = true;
}
const normalizedUnsafeAttempt = normalizeTransportationModeFeatureFlagState(unsafeInput);

assert.equal(normalizedUnsafeAttempt.enabled, true);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `AC5 unsafe attempt for ${field} must normalize to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateTransportationModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "AC3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "AC5 expects four AC3 Transportation Mode feature flag fixtures.");

const runtimeForbiddenTerms = [
  "nexus-transportation-mode-readiness-contract.js",
  "nexus-transportation-mode-feature-flag.js",
  "nexus-sprint-ac3-transportation-mode-flag-contract-harness",
  "transportation-mode-feature-flags.json",
  "NEXUS_TRANSPORTATION_MODE_VISIBLE_ENABLED",
  "NexusTransportationModeFeatureFlagContract",
  "normalizeTransportationModeFeatureFlagState",
  "isTransportationModeVisibleFeatureEnabled",
  "transportationModeFeatureFlag",
  "liveTransportationModeRuntime",
  "transportationConnectorRuntime",
  "transportationProviderConnectorRuntime",
  "driverConnectorRuntime",
  "dispatchConnectorRuntime",
  "routeConnectorRuntime",
  "locationConnectorRuntime",
  "appointmentSchedulingRuntime",
  "medicalRecordsFhirRuntime",
  "executeTransportationBooking(",
  "bookTransportation(",
  "scheduleTransportation(",
  "contactTransportationProvider(",
  "contactDriver(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation(",
  "openTransportationCamera(",
  "openTransportationMicrophone(",
  "nexus-sprint-ac5-transportation-mode-lane-closeout"
];

assertRuntimeExcludes(index, runtimeForbiddenTerms, "public/index.html");
assertRuntimeExcludes(app, runtimeForbiddenTerms, "public/app.js");
assertRuntimeExcludes(server, runtimeForbiddenTerms, "server.js");

const alias = "qa:nexus-sprint-ac5-transportation-mode-lane-closeout";
assert.equal(
  pkg.scripts[alias],
  "node scripts/nexus-sprint-ac5-transportation-mode-lane-closeout-qa.js",
  "package.json must expose Sprint AC5 QA alias."
);
assert(qaSuite.includes("scripts/nexus-sprint-ac5-transportation-mode-lane-closeout-qa.js"), "qa-suite must include Sprint AC5 QA.");

console.log("[nexus-sprint-ac5-transportation-mode-lane-closeout-qa] passed");
