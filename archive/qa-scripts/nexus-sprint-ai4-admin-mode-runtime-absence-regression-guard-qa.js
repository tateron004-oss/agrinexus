const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_ADMIN_MODE_FEATURE_FLAG_STATE,
  normalizeAdminModeFeatureFlagState
} = require("../public/nexus-admin-mode-feature-flag.js");
const {
  protectedFields,
  loadAdminModeFlagFixtures,
  expandFixtureInput,
  validateAdminModeFlagFixtures
} = require("./nexus-sprint-ai3-admin-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AI4_ADMIN_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-ai4-admin-mode-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint AI4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint AI4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-admin-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-admin-mode-feature-flag.js");
const ai3Harness = read("scripts", "nexus-sprint-ai3-admin-mode-flag-contract-harness.js");
const fixtures = loadAdminModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AI4",
  "08cd124943d20ae5905cca8cf81b7b0893061ec7",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint AI5 - Admin Mode Lane Closeout"
], "AI4 absence guard doc");

assertIncludes(doc, [
  "AI1 Admin Mode runtime activation readiness gate",
  "AI2 Admin Mode feature flag contract",
  "AI3 Admin Mode flag contract harness",
  "Phase 87 Admin Mode readiness contract"
], "AI4 protected artifacts");

assertIncludes(doc, [
  "public/nexus-admin-mode-readiness-contract.js",
  "public/nexus-admin-mode-feature-flag.js",
  "scripts/nexus-sprint-ai3-admin-mode-flag-contract-harness.js",
  "fixtures/nexus/admin-mode-feature-flags.json",
  "Sprint AI QA scripts"
], "AI4 runtime absence artifact list");

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
  "workforce",
  "admin",
  "review"
], "AI4 generic wording exception");

assertIncludes(doc, [
  "active Admin Mode runtime",
  "live Admin Mode runtime",
  "admin review queue runtime",
  "admin console runtime",
  "role management runtime",
  "audit management runtime",
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
  "emergency connector runtime",
  "admin actions",
  "admin review completion",
  "provider approval",
  "provider contact",
  "clinic contact",
  "pharmacy contact",
  "appointment scheduling",
  "telehealth session creation",
  "prescription refill workflow",
  "medical record access",
  "clinical documentation",
  "role changes",
  "audit writes",
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
  "role bypass",
  "audit bypass",
  "permission prompts",
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
], "AI4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AI1_ADMIN_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AI2_ADMIN_MODE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AI3_ADMIN_MODE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_ADMIN_MODE_READINESS_CONTRACT_PHASE_87.md"],
  ["public", "nexus-admin-mode-readiness-contract.js"],
  ["public", "nexus-admin-mode-feature-flag.js"],
  ["fixtures", "nexus", "admin-mode-feature-flags.json"],
  ["scripts", "nexus-sprint-ai3-admin-mode-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `AI4 requires artifact: ${requiredPath.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-admin-mode-readiness-contract.js",
  "nexus-admin-mode-feature-flag.js",
  "nexus-sprint-ai3-admin-mode-flag-contract-harness",
  "admin-mode-feature-flags.json",
  "NEXUS_ADMIN_MODE_VISIBLE_ENABLED",
  "NexusAdminModeFeatureFlagContract",
  "normalizeAdminModeFeatureFlagState",
  "isAdminModeVisibleFeatureEnabled",
  "adminModeFeatureFlag",
  "liveAdminModeRuntime",
  "adminReviewQueueRuntime",
  "adminConsoleRuntime",
  "roleManagementRuntime",
  "auditManagementRuntime",
  "adminActionRuntime",
  "completeAdminReview(",
  "approveAdminReview(",
  "changeUserRole(",
  "writeAdminAudit(",
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
  "nexus-sprint-ai4-admin-mode-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Admin Mode lane artifact: ${term}`);
}

assertIncludes(readinessContract, [
  "ADMIN_MODE_READINESS_CONTRACT",
  "admin-mode.readiness.phase_87",
  "ADMIN_MODE_NO_EXECUTION_DEFAULTS",
  "createAdminModeReadinessContract",
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
], "Phase 87 Admin Mode readiness contract");

assert.equal(DEFAULT_ADMIN_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_ADMIN_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_ADMIN_MODE_FEATURE_FLAG_STATE[field], false, `AI4 default ${field} must remain false.`);
}
assert.equal(DEFAULT_ADMIN_MODE_FEATURE_FLAG_STATE.noExecution, true);

const unsafeInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of protectedFields) {
  unsafeInput[field] = true;
}
const normalizedUnsafeAttempt = normalizeAdminModeFeatureFlagState(unsafeInput);

assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateAdminModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "AI3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "AI3 fixtures must remain complete.");

for (const source of [featureFlagModule, ai3Harness]) {
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
    "completeAdminReview(",
    "approveAdminReview(",
    "changeUserRole(",
    "writeAdminAudit(",
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
    assert(!source.includes(term), `Sprint AI contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-ai4-admin-mode-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AI4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ai1-admin-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AI1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ai2-admin-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AI2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ai3-admin-mode-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AI3 QA.");
assert(qaSuite.includes("scripts/nexus-admin-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 87 QA.");

console.log("[nexus-sprint-ai4-admin-mode-runtime-absence-regression-guard-qa] passed");
