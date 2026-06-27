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

const docName = "NEXUS_SPRINT_F5_APPROVAL_CENTER_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-f5-approval-center-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint F5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint F5 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const approvalContract = read("public", "nexus-approval-center-contract.js");
const featureFlagModule = read("public", "nexus-approval-center-feature-flag.js");
const f3Harness = read("scripts", "nexus-sprint-f3-approval-center-flag-contract-harness.js");
const fixtures = loadApprovalCenterFlagFixtures();

assertIncludes(doc, [
  "Sprint F5",
  "e545ae639e3af2835de4c75f824f2f7fb70ff653",
  "documentation and deterministic QA only",
  "Sprint F Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint G1 - Approval Audit Persistence Readiness Gate"
], "F5 closeout doc");

assertIncludes(doc, [
  "Approval Center runtime activation readiness gate",
  "Approval Center feature flag contract",
  "Approval Center flag contract harness",
  "Approval Center runtime absence regression guard",
  "Approval Center lane closeout"
], "F5 sprint summary");

assertIncludes(doc, [
  "Approval Center readiness is not execution readiness",
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
  "unsafe authority attempts normalize back to no-execution values",
  "no action has been taken"
], "F5 no-execution language");

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
], "F5 blocked runtime categories");

const requiredDocs = [
  "NEXUS_SPRINT_F1_APPROVAL_CENTER_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_F2_APPROVAL_CENTER_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_F3_APPROVAL_CENTER_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_F4_APPROVAL_CENTER_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_APPROVAL_CENTER_CONTRACT_PHASE_49.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint F5 requires prior Approval Center doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-f1-approval-center-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-f2-approval-center-feature-flag-contract-qa.js",
  "nexus-sprint-f3-approval-center-flag-contract-harness-qa.js",
  "nexus-sprint-f4-approval-center-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint F5 requires prior Sprint F QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint F QA: ${requiredScript}`);
}

assert(exists("public", "nexus-approval-center-contract.js"), "Sprint F5 requires Phase 49 Approval Center contract.");
assert(exists("public", "nexus-approval-center-feature-flag.js"), "Sprint F5 requires F2 feature flag contract.");
assert(exists("fixtures", "nexus", "approval-center-feature-flags.json"), "Sprint F5 requires F3 feature flag fixture.");

assertIncludes(approvalContract, [
  "approvalCenterId",
  "approval.center.not_configured",
  "runtimeApprovalAuthorityEnabled",
  "noExecution"
], "Phase 49 Approval Center contract");

assertIncludes(featureFlagModule, [
  "DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE",
  "NEXUS_APPROVAL_CENTER_VISIBLE_ENABLED",
  "normalizeApprovalCenterFeatureFlagState",
  "executionAuthority",
  "noExecution"
], "F2 Approval Center feature flag module");

assertIncludes(f3Harness, [
  "loadApprovalCenterFlagFixtures",
  "validateApprovalCenterFlagFixtures"
], "F3 Approval Center harness");

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

const normalizedUnsafeAttempt = normalizeApprovalCenterFeatureFlagState({
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

assert.equal(normalizedUnsafeAttempt.approvalPersistenceAllowed, false);
assert.equal(normalizedUnsafeAttempt.auditWriteAllowed, false);
assert.equal(normalizedUnsafeAttempt.providerHandoffAllowed, false);
assert.equal(normalizedUnsafeAttempt.backendWriteAllowed, false);
assert.equal(normalizedUnsafeAttempt.storageWriteAllowed, false);
assert.equal(normalizedUnsafeAttempt.networkAllowed, false);
assert.equal(normalizedUnsafeAttempt.executionAuthority, false);
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateApprovalCenterFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "F3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "F3 fixtures must remain complete.");

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
  "dispatchApprovedAction",
  "nexus-sprint-f5-approval-center-lane-closeout"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Approval Center lane artifact: ${term}`);
}

for (const source of [featureFlagModule, f3Harness]) {
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
    "sendBeacon",
    "setItem",
    "window.nativeBridge",
    "nativeBridge.",
    "ACTION_CALL",
    "getUserMedia",
    "openWorkflow(",
    "goSection("
  ]) {
    assert(!source.includes(term), `Sprint F contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-f5-approval-center-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint F5 QA.");

console.log("[nexus-sprint-f5-approval-center-lane-closeout-qa] passed");
