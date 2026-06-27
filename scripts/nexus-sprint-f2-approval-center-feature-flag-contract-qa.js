const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertIncludes(source, terms, label) {
  for (const term of terms) {
    assert(source.includes(term), `${label} must include: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_F2_APPROVAL_CENTER_FEATURE_FLAG_CONTRACT.md";
const qaName = "nexus-sprint-f2-approval-center-feature-flag-contract-qa.js";
const moduleName = "nexus-approval-center-feature-flag.js";

assert(exists("docs", docName), "Sprint F2 feature flag contract doc must exist.");
assert(exists("scripts", qaName), "Sprint F2 QA script must exist.");
assert(exists("public", moduleName), "Sprint F2 inert feature flag module must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const flagContract = require(path.join(root, "public", moduleName));
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint F2",
  "268842055e2cbda6e6449b1fb72e0318677b87c4",
  "default-off Approval Center feature flag contract",
  "standalone inert contract module",
  "NEXUS_APPROVAL_CENTER_VISIBLE_ENABLED",
  "Default State",
  "enabled: false",
  "visibleUiAllowed: false",
  "approvalPersistenceAllowed: false",
  "auditWriteAllowed: false",
  "providerHandoffAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "An enabled feature flag is not enough to activate execution",
  "Sprint F3 - Approval Center Flag Contract Harness"
], "F2 feature flag doc");

assertIncludes(doc, [
  "runtime imports",
  "script tags",
  "event handlers",
  "Approval Center buttons",
  "approval persistence",
  "audit writes",
  "backend writes",
  "localStorage or sessionStorage writes",
  "fetch or network calls",
  "provider handoff",
  "native bridge calls",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "payments",
  "marketplace transactions",
  "location sharing",
  "camera or microphone activation",
  "health, medical, pharmacy, prescription, or FHIR execution",
  "appointment scheduling",
  "transportation dispatch",
  "emergency dispatch",
  "account or identity mutation",
  "external navigation",
  "execution authority"
], "F2 prohibited behavior");

assert.equal(flagContract.APPROVAL_CENTER_FEATURE_FLAG_NAME, "NEXUS_APPROVAL_CENTER_VISIBLE_ENABLED");
assert.equal(flagContract.DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.enabled, false);
assert.equal(flagContract.DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(flagContract.DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.approvalPersistenceAllowed, false);
assert.equal(flagContract.DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.auditWriteAllowed, false);
assert.equal(flagContract.DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.providerHandoffAllowed, false);
assert.equal(flagContract.DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.backendWriteAllowed, false);
assert.equal(flagContract.DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.storageWriteAllowed, false);
assert.equal(flagContract.DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.networkAllowed, false);
assert.equal(flagContract.DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.executionAuthority, false);
assert.equal(flagContract.DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.noExecution, true);
assert(Object.isFrozen(flagContract.DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE), "default flag state must be frozen.");

const defaultNormalized = flagContract.normalizeApprovalCenterFeatureFlagState();
assert.equal(defaultNormalized.enabled, false);
assert.equal(flagContract.isApprovalCenterVisibleFeatureEnabled(defaultNormalized), false);

const unsafeAttempt = flagContract.normalizeApprovalCenterFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true,
  approvalPersistenceAllowed: true,
  auditWriteAllowed: true,
  providerHandoffAllowed: true,
  backendWriteAllowed: true,
  storageWriteAllowed: true,
  networkAllowed: true,
  executionAuthority: true,
  noExecution: false
});

assert.equal(unsafeAttempt.enabled, true);
assert.equal(unsafeAttempt.visibleUiAllowed, true);
assert.equal(unsafeAttempt.approvalPersistenceAllowed, false);
assert.equal(unsafeAttempt.auditWriteAllowed, false);
assert.equal(unsafeAttempt.providerHandoffAllowed, false);
assert.equal(unsafeAttempt.backendWriteAllowed, false);
assert.equal(unsafeAttempt.storageWriteAllowed, false);
assert.equal(unsafeAttempt.networkAllowed, false);
assert.equal(unsafeAttempt.executionAuthority, false);
assert.equal(unsafeAttempt.noExecution, true);
assert.equal(flagContract.isApprovalCenterVisibleFeatureEnabled(unsafeAttempt), true);

assertIncludes(moduleSource, [
  "APPROVAL_CENTER_FEATURE_FLAG_NAME",
  "DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE",
  "normalizeApprovalCenterFeatureFlagState",
  "isApprovalCenterVisibleFeatureEnabled",
  "executionAuthority: false",
  "noExecution: true"
], "F2 module source");

for (const forbidden of [
  "document.",
  "querySelector",
  "addEventListener",
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
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
  "goSection("
]) {
  assert(!moduleSource.includes(forbidden), `F2 feature flag module must not include runtime API: ${forbidden}`);
}

for (const runtimeSource of [index, app, server]) {
  assert(!runtimeSource.includes(moduleName), "F2 feature flag module must not be runtime-loaded.");
  assert(!runtimeSource.includes("NEXUS_APPROVAL_CENTER_VISIBLE_ENABLED"), "F2 feature flag must not be active in runtime files.");
}

assert(exists("docs", "NEXUS_SPRINT_F1_APPROVAL_CENTER_RUNTIME_ACTIVATION_READINESS_GATE.md"), "F2 requires F1 readiness gate doc.");
assert(exists("docs", "NEXUS_APPROVAL_CENTER_CONTRACT_PHASE_49.md"), "F2 requires Phase 49 Approval Center contract doc.");
assert(exists("public", "nexus-approval-center-contract.js"), "F2 requires Phase 49 Approval Center contract module.");

const alias = "qa:nexus-sprint-f2-approval-center-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint F2 QA.");

console.log("[nexus-sprint-f2-approval-center-feature-flag-contract-qa] passed");
