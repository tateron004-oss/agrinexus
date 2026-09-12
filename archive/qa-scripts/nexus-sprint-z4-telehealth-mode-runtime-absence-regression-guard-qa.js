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

const docName = "NEXUS_SPRINT_Z4_TELEHEALTH_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-z4-telehealth-mode-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint Z4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint Z4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-telehealth-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-telehealth-mode-feature-flag.js");
const z3Harness = read("scripts", "nexus-sprint-z3-telehealth-mode-flag-contract-harness.js");
const fixtures = loadTelehealthModeFlagFixtures();

assertIncludes(doc, [
  "Sprint Z4",
  "ea0254daca81b85611ca590325cec80abb340b5d",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint Z5 - Telehealth Mode Lane Closeout"
], "Z4 absence guard doc");

assertIncludes(doc, [
  "Z1 Telehealth Mode runtime activation readiness gate",
  "Z2 Telehealth Mode feature flag contract",
  "Z3 Telehealth Mode flag contract harness",
  "Phase 78 Telehealth Mode readiness contract"
], "Z4 protected artifacts");

assertIncludes(doc, [
  "public/nexus-telehealth-mode-readiness-contract.js",
  "public/nexus-telehealth-mode-feature-flag.js",
  "scripts/nexus-sprint-z3-telehealth-mode-flag-contract-harness.js",
  "fixtures/nexus/telehealth-mode-feature-flags.json",
  "Sprint Z QA scripts"
], "Z4 runtime absence artifact list");

assertIncludes(doc, [
  "It intentionally does not ban generic health, telehealth, pharmacy, clinic",
  "provider",
  "clinician",
  "mobile clinic",
  "transportation",
  "map",
  "workforce",
  "learning",
  "support",
  "agriculture"
], "Z4 generic wording exception");

assertIncludes(doc, [
  "active Telehealth Mode runtime",
  "live Telehealth Mode runtime",
  "health connector runtime",
  "clinic connector runtime",
  "telehealth connector runtime",
  "provider connector runtime",
  "clinician connector runtime",
  "pharmacy connector runtime",
  "prescription or refill runtime",
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
], "Z4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_Z1_TELEHEALTH_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_Z2_TELEHEALTH_MODE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_Z3_TELEHEALTH_MODE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_TELEHEALTH_MODE_READINESS_CONTRACT_PHASE_78.md"],
  ["public", "nexus-telehealth-mode-readiness-contract.js"],
  ["public", "nexus-telehealth-mode-feature-flag.js"],
  ["fixtures", "nexus", "telehealth-mode-feature-flags.json"],
  ["scripts", "nexus-sprint-z3-telehealth-mode-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `Z4 requires artifact: ${requiredPath.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
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
  "nexus-sprint-z4-telehealth-mode-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Telehealth Mode lane artifact: ${term}`);
}

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

assert.equal(DEFAULT_TELEHEALTH_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_TELEHEALTH_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_TELEHEALTH_MODE_FEATURE_FLAG_STATE[field], false, `Z4 default ${field} must remain false.`);
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

assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateTelehealthModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "Z3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "Z3 fixtures must remain complete.");

for (const source of [featureFlagModule, z3Harness]) {
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
    "openTelehealthMicrophone("
  ]) {
    assert(!source.includes(term), `Sprint Z contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-z4-telehealth-mode-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint Z4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-z1-telehealth-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint Z1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-z2-telehealth-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint Z2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-z3-telehealth-mode-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint Z3 QA.");

console.log("[nexus-sprint-z4-telehealth-mode-runtime-absence-regression-guard-qa] passed");
