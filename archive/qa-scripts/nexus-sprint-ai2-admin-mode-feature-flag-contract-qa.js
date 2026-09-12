const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  ADMIN_MODE_FEATURE_FLAG_NAME,
  DEFAULT_ADMIN_MODE_FEATURE_FLAG_STATE,
  PROTECTED_ADMIN_MODE_FLAG_FIELDS,
  normalizeAdminModeFeatureFlagState,
  isAdminModeVisibleFeatureEnabled
} = require("../public/nexus-admin-mode-feature-flag.js");

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

const docName = "NEXUS_SPRINT_AI2_ADMIN_MODE_FEATURE_FLAG_CONTRACT.md";
const qaName = "nexus-sprint-ai2-admin-mode-feature-flag-contract-qa.js";
const moduleName = "nexus-admin-mode-feature-flag.js";

assert(exists("docs", docName), "Sprint AI2 feature flag doc must exist.");
assert(exists("public", moduleName), "Sprint AI2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint AI2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const ai1Doc = read("docs", "NEXUS_SPRINT_AI1_ADMIN_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md");
const phase87Contract = read("public", "nexus-admin-mode-readiness-contract.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert.equal(ADMIN_MODE_FEATURE_FLAG_NAME, "NEXUS_ADMIN_MODE_VISIBLE_ENABLED");
assert.equal(DEFAULT_ADMIN_MODE_FEATURE_FLAG_STATE.flagName, ADMIN_MODE_FEATURE_FLAG_NAME);
assert.equal(DEFAULT_ADMIN_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_ADMIN_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_ADMIN_MODE_FEATURE_FLAG_STATE.noExecution, true);
assert(PROTECTED_ADMIN_MODE_FLAG_FIELDS.length >= 65, "Admin Mode protected field list must stay comprehensive.");

assertIncludes(doc, [
  "Sprint AI2",
  "1ae9028f64dc27c5e7ac482dcae1a94c43a535d2",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_ADMIN_MODE_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Relationship To Sprint AI1",
  "Runtime Absence Requirements",
  "QA Expectations",
  "Sprint AI3 - Admin Mode Flag Contract Harness"
], "AI2 feature flag doc");

assert(ai1Doc.includes("Sprint AI2 - Admin Mode Feature Flag Contract"), "AI1 must recommend Sprint AI2.");
assertIncludes(phase87Contract, [
  "ADMIN_MODE_READINESS_CONTRACT",
  "admin-mode.readiness.phase_87",
  "review queues work",
  "ADMIN_MODE_NO_EXECUTION_DEFAULTS"
], "Phase 87 Admin Mode readiness contract");

for (const field of PROTECTED_ADMIN_MODE_FLAG_FIELDS) {
  assert.equal(DEFAULT_ADMIN_MODE_FEATURE_FLAG_STATE[field], false, `Default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `AI2 doc must document ${field}: false.`);
}

const defaultState = normalizeAdminModeFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isAdminModeVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeAdminModeFeatureFlagState({ enabled: true, visibleUiAllowed: true });
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(visibleOnly.noExecution, true);
assert.equal(isAdminModeVisibleFeatureEnabled(visibleOnly), true);
for (const field of PROTECTED_ADMIN_MODE_FLAG_FIELDS) {
  assert.equal(visibleOnly[field], false, `Visible-only state must keep ${field}=false.`);
}

const unsafeInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of PROTECTED_ADMIN_MODE_FLAG_FIELDS) {
  unsafeInput[field] = true;
}
const normalizedUnsafeAttempt = normalizeAdminModeFeatureFlagState(unsafeInput);
for (const field of PROTECTED_ADMIN_MODE_FLAG_FIELDS) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);
assert.equal(normalizedUnsafeAttempt.enabled, true);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);

for (const term of [
  "document.",
  "querySelector",
  "addEventListener",
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "indexedDB",
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
  "scheduleProviderAppointment(",
  "createTelehealthSession(",
  "requestPharmacyRefill(",
  "accessMedicalRecord(",
  "processProviderPayment(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation("
]) {
  assert(!moduleSource.includes(term), `AI2 feature flag module must not include runtime API: ${term}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
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
  "nexus-sprint-ai2-admin-mode-feature-flag-contract"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Admin Mode feature flag artifact: ${term}`);
}

const alias = "qa:nexus-sprint-ai2-admin-mode-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AI2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ai1-admin-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AI1 QA.");
assert(qaSuite.includes("scripts/nexus-admin-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 87 QA.");

console.log("[nexus-sprint-ai2-admin-mode-feature-flag-contract-qa] passed");
