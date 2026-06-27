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

const docName = "NEXUS_SPRINT_Y4_RURAL_HEALTH_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-y4-rural-health-mode-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint Y4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint Y4 QA script must exist.");

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
  "Sprint Y4",
  "3c0f747c70d0d1ab49acadb41fdb0279f4ad242f",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint Y5 - Rural Health Mode Lane Closeout"
], "Y4 absence guard doc");

assertIncludes(doc, [
  "Y1 Rural Health Mode runtime activation readiness gate",
  "Y2 Rural Health Mode feature flag contract",
  "Y3 Rural Health Mode flag contract harness",
  "Phase 77 Rural Health Mode readiness contract"
], "Y4 protected artifacts");

assertIncludes(doc, [
  "public/nexus-rural-health-mode-readiness-contract.js",
  "public/nexus-rural-health-mode-feature-flag.js",
  "scripts/nexus-sprint-y3-rural-health-mode-flag-contract-harness.js",
  "fixtures/nexus/rural-health-mode-feature-flags.json",
  "Sprint Y QA scripts"
], "Y4 runtime absence artifact list");

assertIncludes(doc, [
  "It intentionally does not ban generic health, telehealth, pharmacy, clinic",
  "mobile clinic",
  "transportation",
  "map",
  "workforce",
  "learning",
  "support",
  "agriculture"
], "Y4 generic wording exception");

assertIncludes(doc, [
  "active Rural Health Mode runtime",
  "live Rural Health Mode runtime",
  "health connector runtime",
  "clinic connector runtime",
  "telehealth connector runtime",
  "pharmacy connector runtime",
  "prescription or refill runtime",
  "mobile clinic schedule runtime",
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
], "Y4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_Y1_RURAL_HEALTH_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_Y2_RURAL_HEALTH_MODE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_Y3_RURAL_HEALTH_MODE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_RURAL_HEALTH_MODE_READINESS_CONTRACT_PHASE_77.md"],
  ["public", "nexus-rural-health-mode-readiness-contract.js"],
  ["public", "nexus-rural-health-mode-feature-flag.js"],
  ["fixtures", "nexus", "rural-health-mode-feature-flags.json"],
  ["scripts", "nexus-sprint-y3-rural-health-mode-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `Y4 requires artifact: ${requiredPath.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
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
  "prescriptionRefillRuntime",
  "medicalRecordsFhirRuntime",
  "executeRuralHealthMode(",
  "executeTelehealth(",
  "executePrescriptionRefill(",
  "contactProvider(",
  "contactClinician(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation(",
  "openHealthCamera(",
  "nexus-sprint-y4-rural-health-mode-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Rural Health Mode lane artifact: ${term}`);
}

assertIncludes(readinessContract, [
  "RURAL_HEALTH_MODE_READINESS_CONTRACT",
  "rural-health-mode.readiness.phase_77",
  "RURAL_HEALTH_MODE_NO_EXECUTION_DEFAULTS",
  "createRuralHealthModeReadinessContract",
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
], "Phase 77 Rural Health Mode readiness contract");

assert.equal(DEFAULT_RURAL_HEALTH_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_RURAL_HEALTH_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_RURAL_HEALTH_MODE_FEATURE_FLAG_STATE[field], false, `Y4 default ${field} must remain false.`);
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

assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateRuralHealthModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "Y3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "Y3 fixtures must remain complete.");

for (const source of [featureFlagModule, y3Harness]) {
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
    "executeTelehealth(",
    "executePrescriptionRefill(",
    "contactProvider(",
    "contactClinician(",
    "dispatchTransportation(",
    "dispatchEmergency(",
    "sharePatientLocation(",
    "openHealthCamera("
  ]) {
    assert(!source.includes(term), `Sprint Y contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-y4-rural-health-mode-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint Y4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-y1-rural-health-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint Y1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-y2-rural-health-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint Y2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-y3-rural-health-mode-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint Y3 QA.");

console.log("[nexus-sprint-y4-rural-health-mode-runtime-absence-regression-guard-qa] passed");
