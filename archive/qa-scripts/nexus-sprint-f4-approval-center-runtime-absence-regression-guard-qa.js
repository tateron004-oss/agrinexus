const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE,
  normalizeApprovalCenterFeatureFlagState
} = require("../public/nexus-approval-center-feature-flag.js");
const {
  loadApprovalCenterFlagFixtures,
  validateApprovalCenterFlagFixtures
} = require("./nexus-sprint-f3-approval-center-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_F4_APPROVAL_CENTER_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-f4-approval-center-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint F4 runtime absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint F4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const featureFlagModule = read("public", "nexus-approval-center-feature-flag.js");
const harnessSource = read("scripts", "nexus-sprint-f3-approval-center-flag-contract-harness.js");
const fixtures = loadApprovalCenterFlagFixtures();

assertIncludes(doc, [
  "Sprint F4",
  "87b6480ca30d774343090c70d2a3773fa3be9e86",
  "documentation and deterministic QA only",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Sprint F5 - Approval Center Lane Closeout"
], "F4 runtime absence doc");

assertIncludes(doc, [
  "public/nexus-approval-center-contract.js",
  "public/nexus-approval-center-feature-flag.js",
  "scripts/nexus-sprint-f3-approval-center-flag-contract-harness.js",
  "fixtures/nexus/approval-center-feature-flags.json"
], "F4 protected artifact list");

assertIncludes(doc, [
  "visible Approval Center UI",
  "Approval Center buttons",
  "event handlers",
  "confirmation bypasses",
  "approval persistence",
  "audit writes",
  "provider handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "payment execution",
  "marketplace transactions",
  "location sharing",
  "camera or microphone activation",
  "health, medical, pharmacy, prescription, or FHIR execution",
  "appointment scheduling",
  "transportation dispatch",
  "emergency dispatch",
  "account or identity mutation",
  "external navigation",
  "fetch or network calls",
  "localStorage or sessionStorage writes",
  "backend writes",
  "real pending action creation",
  "execution authority"
], "F4 blocked runtime behavior");

for (const prior of [
  ["docs", "NEXUS_SPRINT_F1_APPROVAL_CENTER_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_F2_APPROVAL_CENTER_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_F3_APPROVAL_CENTER_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_APPROVAL_CENTER_CONTRACT_PHASE_49.md"],
  ["public", "nexus-approval-center-contract.js"],
  ["public", "nexus-approval-center-feature-flag.js"],
  ["fixtures", "nexus", "approval-center-feature-flags.json"],
  ["scripts", "nexus-sprint-f3-approval-center-flag-contract-harness.js"]
]) {
  assert(exists(...prior), `Sprint F4 requires prior artifact: ${prior.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-approval-center-contract.js",
  "nexus-approval-center-feature-flag.js",
  "nexus-sprint-f3-approval-center-flag-contract-harness",
  "approval-center-feature-flags.json",
  "NEXUS_APPROVAL_CENTER_VISIBLE_ENABLED",
  "renderApprovalCenter",
  "openApprovalCenter",
  "persistApprovalCenter",
  "writeApprovalAuditEvent",
  "executeApprovedAction",
  "dispatchApprovedAction"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Approval Center artifact: ${term}`);
}

assert.equal(DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.approvalPersistenceAllowed, false);
assert.equal(DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.auditWriteAllowed, false);
assert.equal(DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.providerHandoffAllowed, false);
assert.equal(DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.backendWriteAllowed, false);
assert.equal(DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.storageWriteAllowed, false);
assert.equal(DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.networkAllowed, false);
assert.equal(DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.executionAuthority, false);
assert.equal(DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE.noExecution, true);

const unsafeAttempt = normalizeApprovalCenterFeatureFlagState({
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
assert.equal(unsafeAttempt.approvalPersistenceAllowed, false);
assert.equal(unsafeAttempt.auditWriteAllowed, false);
assert.equal(unsafeAttempt.providerHandoffAllowed, false);
assert.equal(unsafeAttempt.backendWriteAllowed, false);
assert.equal(unsafeAttempt.storageWriteAllowed, false);
assert.equal(unsafeAttempt.networkAllowed, false);
assert.equal(unsafeAttempt.executionAuthority, false);
assert.equal(unsafeAttempt.noExecution, true);

const fixtureResult = validateApprovalCenterFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "F3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "F3 fixtures must remain complete.");

for (const source of [featureFlagModule, harnessSource]) {
  for (const term of [
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
    assert(!source.includes(term), `F2/F3 artifact must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-f4-approval-center-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint F4 QA.");

console.log("[nexus-sprint-f4-approval-center-runtime-absence-regression-guard-qa] passed");
