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

const docName = "NEXUS_SPRINT_AI5_ADMIN_MODE_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-ai5-admin-mode-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint AI5 lane closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint AI5 QA script must exist.");

const doc = read("docs", docName);
const ai4Doc = read("docs", "NEXUS_SPRINT_AI4_ADMIN_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-admin-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-admin-mode-feature-flag.js");
const harness = read("scripts", "nexus-sprint-ai3-admin-mode-flag-contract-harness.js");
const fixtures = loadAdminModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AI5",
  "ef2d6df2d3c3e64d775a605d9ed4c40f9e08d831",
  "documentation and deterministic QA only",
  "Sprint AI Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint AJ1 - Offline Low-Bandwidth Mode Runtime Activation Readiness Gate"
], "AI5 closeout doc");

assertIncludes(doc, [
  "AI1 | Admin Mode runtime activation readiness gate | Complete",
  "AI2 | Admin Mode feature flag contract | Complete",
  "AI3 | Admin Mode flag contract harness | Complete",
  "AI4 | Admin Mode runtime absence regression guard | Complete",
  "AI5 | Admin Mode lane closeout | Complete"
], "AI5 completion table");

assertIncludes(ai4Doc, [
  "Sprint AI5 - Admin Mode Lane Closeout"
], "AI4 next sprint recommendation");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AI1_ADMIN_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AI2_ADMIN_MODE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AI3_ADMIN_MODE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_SPRINT_AI4_ADMIN_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md"],
  ["docs", "NEXUS_ADMIN_MODE_READINESS_CONTRACT_PHASE_87.md"],
  ["docs", "NEXUS_OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT_PHASE_88.md"],
  ["public", "nexus-admin-mode-readiness-contract.js"],
  ["public", "nexus-admin-mode-feature-flag.js"],
  ["public", "nexus-offline-low-bandwidth-mode-readiness-contract.js"],
  ["fixtures", "nexus", "admin-mode-feature-flags.json"],
  ["scripts", "nexus-sprint-ai1-admin-mode-runtime-activation-readiness-gate-qa.js"],
  ["scripts", "nexus-sprint-ai2-admin-mode-feature-flag-contract-qa.js"],
  ["scripts", "nexus-sprint-ai3-admin-mode-flag-contract-harness-qa.js"],
  ["scripts", "nexus-sprint-ai4-admin-mode-runtime-absence-regression-guard-qa.js"],
  ["scripts", "nexus-admin-mode-readiness-contract-qa.js"],
  ["scripts", "nexus-offline-low-bandwidth-mode-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AI5 requires artifact: ${requiredPath.join("/")}`);
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
  assert.equal(DEFAULT_ADMIN_MODE_FEATURE_FLAG_STATE[field], false, `AI5 default ${field} must remain false.`);
  assert(doc.includes(`${field}: false`), `AI5 doc must document ${field}: false.`);
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

const unsafeFixture = fixtures.find(fixture => fixture.fixtureId === "admin-mode-unsafe-authority-attempt");
const expandedUnsafe = expandFixtureInput(unsafeFixture.input);
for (const field of protectedFields) {
  assert.equal(expandedUnsafe[field], true, `unsafeAuthorityAttempt must expand ${field}=true before normalization.`);
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
  "nexus-sprint-ai5-admin-mode-lane-closeout"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Admin Mode lane artifact: ${term}`);
}

for (const source of [featureFlagModule, harness]) {
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

const alias = "qa:nexus-sprint-ai5-admin-mode-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AI5 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ai1-admin-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AI1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ai2-admin-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AI2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ai3-admin-mode-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AI3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ai4-admin-mode-runtime-absence-regression-guard-qa.js"), "qa-suite must continue to include Sprint AI4 QA.");
assert(qaSuite.includes("scripts/nexus-admin-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 87 QA.");
assert(qaSuite.includes("scripts/nexus-offline-low-bandwidth-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 88 QA.");

console.log("[nexus-sprint-ai5-admin-mode-lane-closeout-qa] passed");
