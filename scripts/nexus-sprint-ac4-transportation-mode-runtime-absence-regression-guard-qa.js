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

const docName = "NEXUS_SPRINT_AC4_TRANSPORTATION_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-ac4-transportation-mode-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint AC4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint AC4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-transportation-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-transportation-mode-feature-flag.js");
const ac3Harness = read("scripts", "nexus-sprint-ac3-transportation-mode-flag-contract-harness.js");
const fixtures = loadTransportationModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AC4",
  "49b476e6985f88dedb1335f5034ded842767d9a0",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint AC5 - Transportation Mode Lane Closeout"
], "AC4 absence guard doc");

assertIncludes(doc, [
  "AC1 Transportation Mode runtime activation readiness gate",
  "AC2 Transportation Mode feature flag contract",
  "AC3 Transportation Mode flag contract harness",
  "Phase 81 Transportation Mode readiness contract"
], "AC4 protected artifacts");

assertIncludes(doc, [
  "public/nexus-transportation-mode-readiness-contract.js",
  "public/nexus-transportation-mode-feature-flag.js",
  "scripts/nexus-sprint-ac3-transportation-mode-flag-contract-harness.js",
  "fixtures/nexus/transportation-mode-feature-flags.json",
  "Sprint AC QA scripts"
], "AC4 runtime absence artifact list");

assertIncludes(doc, [
  "It intentionally does not ban generic health, telehealth, clinic",
  "provider",
  "driver",
  "transportation",
  "route",
  "location",
  "map",
  "workforce",
  "learning",
  "support",
  "marketplace",
  "agriculture",
  "AgriTrade"
], "AC4 generic wording exception");

assertIncludes(doc, [
  "active Transportation Mode runtime",
  "live Transportation Mode runtime",
  "transportation connector runtime",
  "transportation provider connector runtime",
  "driver connector runtime",
  "dispatch connector runtime",
  "route connector runtime",
  "location connector runtime",
  "clinic connector runtime",
  "telehealth connector runtime",
  "payment connector runtime",
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
  "location sharing",
  "camera activation",
  "microphone activation",
  "payment execution",
  "marketplace transaction execution",
  "communications execution",
  "provider connection claims",
  "driver connection claims",
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
  "driver handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "AC4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AC1_TRANSPORTATION_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AC2_TRANSPORTATION_MODE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AC3_TRANSPORTATION_MODE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_TRANSPORTATION_MODE_READINESS_CONTRACT_PHASE_81.md"],
  ["public", "nexus-transportation-mode-readiness-contract.js"],
  ["public", "nexus-transportation-mode-feature-flag.js"],
  ["fixtures", "nexus", "transportation-mode-feature-flags.json"],
  ["scripts", "nexus-sprint-ac3-transportation-mode-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `AC4 requires artifact: ${requiredPath.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
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
  "clinicConnectorRuntime",
  "telehealthConnectorRuntime",
  "paymentConnectorRuntime",
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
  "nexus-sprint-ac4-transportation-mode-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Transportation Mode lane artifact: ${term}`);
}

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

assert.equal(DEFAULT_TRANSPORTATION_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_TRANSPORTATION_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_TRANSPORTATION_MODE_FEATURE_FLAG_STATE[field], false, `AC4 default ${field} must remain false.`);
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

assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateTransportationModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "AC3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "AC3 fixtures must remain complete.");

for (const source of [featureFlagModule, ac3Harness]) {
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
    "executeTransportationBooking(",
    "bookTransportation(",
    "scheduleTransportation(",
    "contactTransportationProvider(",
    "contactDriver(",
    "dispatchTransportation(",
    "dispatchEmergency(",
    "sharePatientLocation(",
    "openTransportationCamera(",
    "openTransportationMicrophone("
  ]) {
    assert(!source.includes(term), `Sprint AC contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-ac4-transportation-mode-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AC4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ac1-transportation-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AC1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ac2-transportation-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AC2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ac3-transportation-mode-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AC3 QA.");

console.log("[nexus-sprint-ac4-transportation-mode-runtime-absence-regression-guard-qa] passed");
