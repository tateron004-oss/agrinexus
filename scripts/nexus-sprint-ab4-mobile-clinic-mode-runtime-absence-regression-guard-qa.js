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

const docName = "NEXUS_SPRINT_AB4_MOBILE_CLINIC_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-ab4-mobile-clinic-mode-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint AB4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint AB4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-mobile-clinic-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-mobile-clinic-mode-feature-flag.js");
const ab3Harness = read("scripts", "nexus-sprint-ab3-mobile-clinic-mode-flag-contract-harness.js");
const fixtures = loadMobileClinicModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AB4",
  "edfd8c974e92c121ccd77c4006c4d97a104fc9a4",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint AB5 - Mobile Clinic Mode Lane Closeout"
], "AB4 absence guard doc");

assertIncludes(doc, [
  "AB1 Mobile Clinic Mode runtime activation readiness gate",
  "AB2 Mobile Clinic Mode feature flag contract",
  "AB3 Mobile Clinic Mode flag contract harness",
  "Phase 80 Mobile Clinic Mode readiness contract"
], "AB4 protected artifacts");

assertIncludes(doc, [
  "public/nexus-mobile-clinic-mode-readiness-contract.js",
  "public/nexus-mobile-clinic-mode-feature-flag.js",
  "scripts/nexus-sprint-ab3-mobile-clinic-mode-flag-contract-harness.js",
  "fixtures/nexus/mobile-clinic-mode-feature-flags.json",
  "Sprint AB QA scripts"
], "AB4 runtime absence artifact list");

assertIncludes(doc, [
  "It intentionally does not ban generic health, telehealth, clinic",
  "provider",
  "mobile clinic",
  "transportation",
  "map",
  "workforce",
  "learning",
  "support",
  "marketplace",
  "agriculture",
  "AgriTrade"
], "AB4 generic wording exception");

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
  "location sharing",
  "camera activation",
  "microphone activation",
  "payment execution",
  "marketplace transaction execution",
  "communications execution",
  "provider connection claims",
  "completed action claims",
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
], "AB4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AB1_MOBILE_CLINIC_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AB2_MOBILE_CLINIC_MODE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AB3_MOBILE_CLINIC_MODE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_MOBILE_CLINIC_MODE_READINESS_CONTRACT_PHASE_80.md"],
  ["public", "nexus-mobile-clinic-mode-readiness-contract.js"],
  ["public", "nexus-mobile-clinic-mode-feature-flag.js"],
  ["fixtures", "nexus", "mobile-clinic-mode-feature-flags.json"],
  ["scripts", "nexus-sprint-ab3-mobile-clinic-mode-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `AB4 requires artifact: ${requiredPath.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
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
  "nexus-sprint-ab4-mobile-clinic-mode-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Mobile Clinic Mode lane artifact: ${term}`);
}

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

assert.equal(DEFAULT_MOBILE_CLINIC_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_MOBILE_CLINIC_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_MOBILE_CLINIC_MODE_FEATURE_FLAG_STATE[field], false, `AB4 default ${field} must remain false.`);
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

assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateMobileClinicModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "AB3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "AB3 fixtures must remain complete.");

for (const source of [featureFlagModule, ab3Harness]) {
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
    "executeMobileClinicSchedule(",
    "scheduleMobileClinicVisit(",
    "contactMobileClinicProvider(",
    "contactClinician(",
    "dispatchTransportation(",
    "dispatchMobileClinicTransportation(",
    "dispatchEmergency(",
    "sharePatientLocation(",
    "openMobileClinicCamera(",
    "openMobileClinicMicrophone("
  ]) {
    assert(!source.includes(term), `Sprint AB contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-ab4-mobile-clinic-mode-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AB4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ab1-mobile-clinic-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AB1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ab2-mobile-clinic-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AB2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ab3-mobile-clinic-mode-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AB3 QA.");

console.log("[nexus-sprint-ab4-mobile-clinic-mode-runtime-absence-regression-guard-qa] passed");
