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

const docName = "NEXUS_SPRINT_AA4_PHARMACY_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-aa4-pharmacy-mode-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint AA4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint AA4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-pharmacy-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-pharmacy-mode-feature-flag.js");
const aa3Harness = read("scripts", "nexus-sprint-aa3-pharmacy-mode-flag-contract-harness.js");
const fixtures = loadPharmacyModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AA4",
  "53f3b0120647fa5e92a4b14ff2edc5df6a5f1381",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint AA5 - Pharmacy Mode Lane Closeout"
], "AA4 absence guard doc");

assertIncludes(doc, [
  "AA1 Pharmacy Mode runtime activation readiness gate",
  "AA2 Pharmacy Mode feature flag contract",
  "AA3 Pharmacy Mode flag contract harness",
  "Phase 79 Pharmacy Mode readiness contract"
], "AA4 protected artifacts");

assertIncludes(doc, [
  "public/nexus-pharmacy-mode-readiness-contract.js",
  "public/nexus-pharmacy-mode-feature-flag.js",
  "scripts/nexus-sprint-aa3-pharmacy-mode-flag-contract-harness.js",
  "fixtures/nexus/pharmacy-mode-feature-flags.json",
  "Sprint AA QA scripts"
], "AA4 runtime absence artifact list");

assertIncludes(doc, [
  "It intentionally does not ban generic health, telehealth, pharmacy, clinic",
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
], "AA4 generic wording exception");

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
  "prescription or refill runtime",
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
  "location sharing",
  "camera activation",
  "microphone activation",
  "payment execution",
  "insurance processing",
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
], "AA4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AA1_PHARMACY_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AA2_PHARMACY_MODE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AA3_PHARMACY_MODE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_PHARMACY_MODE_READINESS_CONTRACT_PHASE_79.md"],
  ["public", "nexus-pharmacy-mode-readiness-contract.js"],
  ["public", "nexus-pharmacy-mode-feature-flag.js"],
  ["fixtures", "nexus", "pharmacy-mode-feature-flags.json"],
  ["scripts", "nexus-sprint-aa3-pharmacy-mode-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `AA4 requires artifact: ${requiredPath.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
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
  "nexus-sprint-aa4-pharmacy-mode-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Pharmacy Mode lane artifact: ${term}`);
}

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

assert.equal(DEFAULT_PHARMACY_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_PHARMACY_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_PHARMACY_MODE_FEATURE_FLAG_STATE[field], false, `AA4 default ${field} must remain false.`);
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

assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validatePharmacyModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "AA3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "AA3 fixtures must remain complete.");

for (const source of [featureFlagModule, aa3Harness]) {
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
    "openPharmacyMicrophone("
  ]) {
    assert(!source.includes(term), `Sprint AA contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-aa4-pharmacy-mode-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AA4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-aa1-pharmacy-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AA1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-aa2-pharmacy-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AA2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-aa3-pharmacy-mode-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AA3 QA.");

console.log("[nexus-sprint-aa4-pharmacy-mode-runtime-absence-regression-guard-qa] passed");
