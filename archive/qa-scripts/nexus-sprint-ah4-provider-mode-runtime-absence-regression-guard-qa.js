const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_PROVIDER_MODE_FEATURE_FLAG_STATE,
  normalizeProviderModeFeatureFlagState
} = require("../public/nexus-provider-mode-feature-flag.js");
const {
  protectedFields,
  loadProviderModeFlagFixtures,
  validateProviderModeFlagFixtures
} = require("./nexus-sprint-ah3-provider-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AH4_PROVIDER_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-ah4-provider-mode-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint AH4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint AH4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-provider-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-provider-mode-feature-flag.js");
const ah3Harness = read("scripts", "nexus-sprint-ah3-provider-mode-flag-contract-harness.js");
const fixtures = loadProviderModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AH4",
  "c2c9b35b5ba8c4ae33bee799bc876b8334a2b1d0",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint AH5 - Provider Mode Lane Closeout"
], "AH4 absence guard doc");

assertIncludes(doc, [
  "AH1 Provider Mode runtime activation readiness gate",
  "AH2 Provider Mode feature flag contract",
  "AH3 Provider Mode flag contract harness",
  "Phase 86 Provider Mode readiness contract"
], "AH4 protected artifacts");

assertIncludes(doc, [
  "public/nexus-provider-mode-readiness-contract.js",
  "public/nexus-provider-mode-feature-flag.js",
  "scripts/nexus-sprint-ah3-provider-mode-flag-contract-harness.js",
  "fixtures/nexus/provider-mode-feature-flags.json",
  "Sprint AH QA scripts"
], "AH4 runtime absence artifact list");

assertIncludes(doc, [
  "It intentionally does not ban generic health, telehealth, clinic",
  "provider",
  "pharmacy",
  "scheduling",
  "medical record",
  "FHIR",
  "prescription",
  "transportation",
  "emergency",
  "training",
  "jobs",
  "education",
  "learning",
  "support",
  "marketplace",
  "agriculture",
  "crop",
  "farmer",
  "trade",
  "AgriTrade",
  "map",
  "field",
  "workforce"
], "AH4 generic wording exception");

assertIncludes(doc, [
  "active Provider Mode runtime",
  "live Provider Mode runtime",
  "provider connector runtime",
  "clinic connector runtime",
  "telehealth connector runtime",
  "pharmacy connector runtime",
  "scheduling connector runtime",
  "medical record connector runtime",
  "FHIR connector runtime",
  "prescription connector runtime",
  "location connector runtime",
  "camera connector runtime",
  "microphone connector runtime",
  "communications connector runtime",
  "transportation connector runtime",
  "health connector runtime",
  "marketplace connector runtime",
  "provider actions",
  "provider contact",
  "clinic contact",
  "pharmacy contact",
  "appointment scheduling",
  "telehealth session creation",
  "prescription refill workflow",
  "medical record access",
  "clinical documentation",
  "location sharing",
  "camera activation",
  "microphone activation",
  "payment execution",
  "marketplace transaction execution",
  "provider connection claims",
  "clinic connection claims",
  "pharmacy connection claims",
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
  "clinic handoff",
  "pharmacy handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "AH4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AH1_PROVIDER_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AH2_PROVIDER_MODE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AH3_PROVIDER_MODE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_PROVIDER_MODE_READINESS_CONTRACT_PHASE_86.md"],
  ["public", "nexus-provider-mode-readiness-contract.js"],
  ["public", "nexus-provider-mode-feature-flag.js"],
  ["fixtures", "nexus", "provider-mode-feature-flags.json"],
  ["scripts", "nexus-sprint-ah3-provider-mode-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `AH4 requires artifact: ${requiredPath.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-provider-mode-readiness-contract.js",
  "nexus-provider-mode-feature-flag.js",
  "nexus-sprint-ah3-provider-mode-flag-contract-harness",
  "provider-mode-feature-flags.json",
  "NEXUS_PROVIDER_MODE_VISIBLE_ENABLED",
  "NexusProviderModeFeatureFlagContract",
  "normalizeProviderModeFeatureFlagState",
  "isProviderModeVisibleFeatureEnabled",
  "providerModeFeatureFlag",
  "liveProviderModeRuntime",
  "providerConnectorRuntime",
  "clinicConnectorRuntime",
  "telehealthConnectorRuntime",
  "pharmacyConnectorRuntime",
  "schedulingConnectorRuntime",
  "medicalRecordConnectorRuntime",
  "fhirConnectorRuntime",
  "prescriptionConnectorRuntime",
  "contactProvider(",
  "contactClinic(",
  "contactPharmacy(",
  "scheduleProviderAppointment(",
  "createTelehealthSession(",
  "requestPharmacyRefill(",
  "accessMedicalRecord(",
  "createClinicalDocumentation(",
  "sharePatientLocation(",
  "activateCamera(",
  "activateMicrophone(",
  "processProviderPayment(",
  "nexus-sprint-ah4-provider-mode-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Provider Mode lane artifact: ${term}`);
}

assertIncludes(readinessContract, [
  "PROVIDER_MODE_READINESS_CONTRACT",
  "provider-mode.readiness.phase_86",
  "PROVIDER_MODE_NO_EXECUTION_DEFAULTS",
  "createProviderModeReadinessContract",
  "\"executionAllowed\": false",
  "\"liveConnectorEnabled\": false",
  "\"providerExecutionEnabled\": false",
  "\"regulatedActionEnabled\": false",
  "communications",
  "healthcare",
  "pharmacy",
  "medical_records",
  "emergency",
  "regulated_execution"
], "Phase 86 Provider Mode readiness contract");

assert.equal(DEFAULT_PROVIDER_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_PROVIDER_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_PROVIDER_MODE_FEATURE_FLAG_STATE[field], false, `AH4 default ${field} must remain false.`);
}
assert.equal(DEFAULT_PROVIDER_MODE_FEATURE_FLAG_STATE.noExecution, true);

const unsafeInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of protectedFields) {
  unsafeInput[field] = true;
}
const normalizedUnsafeAttempt = normalizeProviderModeFeatureFlagState(unsafeInput);

assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateProviderModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "AH3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "AH3 fixtures must remain complete.");

for (const source of [featureFlagModule, ah3Harness]) {
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
    "open(",
    "sendBeacon",
    "setItem",
    "postMessage",
    "window.nativeBridge",
    "nativeBridge.",
    "ACTION_CALL",
    "getUserMedia",
    "openWorkflow(",
    "goSection(",
    "contactProvider(",
    "contactClinic(",
    "contactPharmacy(",
    "scheduleProviderAppointment(",
    "createTelehealthSession(",
    "requestPharmacyRefill(",
    "accessMedicalRecord(",
    "createClinicalDocumentation(",
    "sharePatientLocation(",
    "activateCamera(",
    "activateMicrophone(",
    "processProviderPayment(",
    "dispatchTransportation(",
    "dispatchEmergency("
  ]) {
    assert(!source.includes(term), `Sprint AH contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-ah4-provider-mode-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AH4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ah1-provider-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AH1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ah2-provider-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AH2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ah3-provider-mode-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AH3 QA.");
assert(qaSuite.includes("scripts/nexus-provider-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 86 QA.");

console.log("[nexus-sprint-ah4-provider-mode-runtime-absence-regression-guard-qa] passed");
