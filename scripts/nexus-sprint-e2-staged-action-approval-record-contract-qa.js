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

const docName = "NEXUS_SPRINT_E2_STAGED_ACTION_APPROVAL_RECORD_CONTRACT.md";
const moduleName = "nexus-staged-action-approval-record.js";
const qaName = "nexus-sprint-e2-staged-action-approval-record-contract-qa.js";

assert(exists("docs", docName), "Sprint E2 approval record contract doc must exist.");
assert(exists("public", moduleName), "Sprint E2 inert approval record module must exist.");
assert(exists("scripts", qaName), "Sprint E2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const recordContract = require(path.join(root, "public", moduleName));

assertIncludes(doc, [
  "Sprint E2",
  "56186ef56747adce015ba57b13db67ed63f0666e",
  "standalone contract module and deterministic QA only",
  "An approval record is not an execution record",
  "public/nexus-staged-action-approval-record.js",
  "Required Approval Record Fields",
  "Approval States",
  "Required Invariants",
  "Required Blocked Execution Channels",
  "Allowed Approval Terms",
  "Blocked Approval Terms",
  "Unsafe Copy",
  "Validator Behavior",
  "Sprint E2 Boundary",
  "Sprint E3 - Staged Action Approval Record Harness",
  "no-execution by default"
], "E2 contract doc");

const requiredFields = [
  "approvalRecordId",
  "stagedActionId",
  "stagedActionType",
  "approvalState",
  "riskTier",
  "sourceSurface",
  "userVisibleTitle",
  "userVisibleTarget",
  "userVisibleConsequence",
  "limitationSummary",
  "noActionDisclosure",
  "cancellationPath",
  "consentState",
  "permissionState",
  "auditRequired",
  "auditEventType",
  "blockedExecutionChannels",
  "allowedApprovalTerms",
  "blockedApprovalTerms",
  "evidencePacketRef",
  "providerSummary",
  "expiresAt",
  "createdAt",
  "redactedPayload"
];

const approvalStates = [
  "notApprovalReady",
  "approvalPreviewOnly",
  "awaitingExplicitApproval",
  "approvalAccepted",
  "approvalRejected",
  "approvalCancelled",
  "approvalExpired",
  "approvalBlocked"
];

const blockedChannels = [
  "provider",
  "call",
  "message",
  "whatsapp",
  "telegram",
  "sms",
  "email",
  "payment",
  "marketplace",
  "location",
  "camera",
  "microphone",
  "health",
  "medical",
  "pharmacy",
  "prescription",
  "fhir",
  "appointment",
  "transportation",
  "emergency",
  "backend-write",
  "storage-write",
  "native-bridge"
];

const allowedTerms = ["yes", "confirm", "do it", "approve"];
const blockedTerms = ["okay", "ok", "sure", "sounds good", "fine", "go ahead maybe"];
const unsafeCopy = [
  "I already did it",
  "I contacted them",
  "I sent it",
  "I called",
  "Payment complete",
  "Location shared",
  "Camera activated",
  "Appointment booked",
  "Prescription refilled",
  "Emergency dispatched"
];

for (const field of requiredFields) {
  assert(doc.includes(field), `E2 doc must include required field: ${field}`);
  assert(recordContract.REQUIRED_APPROVAL_RECORD_FIELDS.includes(field), `record contract required fields must include: ${field}`);
}

for (const state of approvalStates) {
  assert(doc.includes(state), `E2 doc must include approval state: ${state}`);
  assert(recordContract.APPROVAL_STATES.includes(state), `record contract approval states must include: ${state}`);
}

for (const channel of blockedChannels) {
  assert(doc.includes(channel), `E2 doc must include blocked channel: ${channel}`);
  assert(recordContract.REQUIRED_BLOCKED_EXECUTION_CHANNELS.includes(channel), `record contract blocked channels must include: ${channel}`);
}

for (const term of allowedTerms) {
  assert(doc.includes(term), `E2 doc must include allowed approval term: ${term}`);
  assert(recordContract.ALLOWED_APPROVAL_TERMS.includes(term), `record contract allowed terms must include: ${term}`);
}

for (const term of blockedTerms) {
  assert(doc.includes(term), `E2 doc must include blocked approval term: ${term}`);
  assert(recordContract.BLOCKED_APPROVAL_TERMS.includes(term), `record contract blocked terms must include: ${term}`);
}

for (const copy of unsafeCopy) {
  assert(doc.includes(copy), `E2 doc must prohibit unsafe copy: ${copy}`);
  assert(recordContract.UNSAFE_COMPLETION_COPY.includes(copy), `record contract unsafe copy list must include: ${copy}`);
}

assert.equal(typeof recordContract.validateStagedActionApprovalRecord, "function", "record contract must export validateStagedActionApprovalRecord");
assert.equal(typeof recordContract.isSafeStagedActionApprovalRecord, "function", "record contract must export isSafeStagedActionApprovalRecord");
assert.equal(typeof recordContract.createStagedActionApprovalRecord, "function", "record contract must export createStagedActionApprovalRecord");

const safeRecord = {
  approvalRecordId: "approval-agriculture-training-review",
  stagedActionId: "stage-agriculture-training-review",
  stagedActionType: "agriculture.training.review",
  approvalState: "awaitingExplicitApproval",
  riskTier: "low",
  sourceSurface: "standard-user",
  userVisibleTitle: "Review agriculture training options",
  userVisibleTarget: "Agriculture training resources",
  userVisibleConsequence: "Nexus can prepare a review-only next step for you to inspect.",
  limitationSummary: "This does not enroll you, contact a provider, or submit information.",
  noActionDisclosure: "No action has been taken.",
  cancellationPath: "Choose Not now or close the review.",
  consentState: "not-required-for-preview",
  permissionState: "not-requested",
  auditRequired: true,
  auditEventType: "approval.preview.created",
  blockedExecutionChannels: blockedChannels,
  allowedApprovalTerms: allowedTerms,
  blockedApprovalTerms: blockedTerms,
  evidencePacketRef: "source-packet-placeholder",
  providerSummary: "No provider handoff is available in this phase.",
  expiresAt: "2026-12-31T00:00:00.000Z",
  createdAt: "2026-06-26T00:00:00.000Z",
  redactedPayload: { promptFamily: "agriculture-training" },
  executionAuthority: false,
  providerHandoffAllowed: false,
  backendWriteAllowed: false,
  storageWriteAllowed: false,
  networkAllowed: false,
  runtimeUiAllowed: false
};

assert.deepEqual(recordContract.validateStagedActionApprovalRecord(safeRecord), { ok: true, errors: [] }, "safe record must validate");
assert.equal(recordContract.isSafeStagedActionApprovalRecord(safeRecord), true, "safe record helper must return true");

[
  ["execution authority", Object.assign({}, safeRecord, { executionAuthority: true })],
  ["provider handoff", Object.assign({}, safeRecord, { providerHandoffAllowed: true })],
  ["backend write", Object.assign({}, safeRecord, { backendWriteAllowed: true })],
  ["storage write", Object.assign({}, safeRecord, { storageWriteAllowed: true })],
  ["network", Object.assign({}, safeRecord, { networkAllowed: true })],
  ["runtime UI", Object.assign({}, safeRecord, { runtimeUiAllowed: true })],
  ["audit missing", Object.assign({}, safeRecord, { auditRequired: false })],
  ["no disclosure", Object.assign({}, safeRecord, { noActionDisclosure: "Ready to continue." })],
  ["unsafe copy", Object.assign({}, safeRecord, { userVisibleConsequence: "I called the provider." })],
  ["vague allowed", Object.assign({}, safeRecord, { allowedApprovalTerms: ["yes", "okay", "confirm", "do it", "approve"] })],
  ["missing channel", Object.assign({}, safeRecord, { blockedExecutionChannels: ["call"] })],
  ["unknown state", Object.assign({}, safeRecord, { approvalState: "executed" })]
].forEach(([label, record]) => {
  assert.equal(recordContract.isSafeStagedActionApprovalRecord(record), false, `${label} must fail approval record validation`);
});

const created = recordContract.createStagedActionApprovalRecord(Object.assign({}, safeRecord, {
  approvalState: "bad-state",
  executionAuthority: true,
  providerHandoffAllowed: true,
  backendWriteAllowed: true,
  storageWriteAllowed: true,
  networkAllowed: true,
  runtimeUiAllowed: true,
  auditRequired: false,
  blockedExecutionChannels: ["custom"],
  allowedApprovalTerms: ["okay"],
  blockedApprovalTerms: []
}));

assert.equal(created.validation.ok, true, "factory must normalize safe approval record");
assert.equal(created.record.executionAuthority, false, "factory must force no execution authority");
assert.equal(created.record.providerHandoffAllowed, false, "factory must force no provider handoff");
assert.equal(created.record.backendWriteAllowed, false, "factory must force no backend write");
assert.equal(created.record.storageWriteAllowed, false, "factory must force no storage write");
assert.equal(created.record.networkAllowed, false, "factory must force no network");
assert.equal(created.record.runtimeUiAllowed, false, "factory must force no runtime UI");
assert.equal(created.record.auditRequired, true, "factory must require audit readiness");
assert.equal(created.record.approvalState, "approvalPreviewOnly", "factory must normalize unknown approval state");
blockedChannels.forEach(channel => assert(created.record.blockedExecutionChannels.includes(channel), `factory must preserve blocked channel: ${channel}`));
blockedTerms.forEach(term => assert(created.record.blockedApprovalTerms.includes(term), `factory must preserve blocked term: ${term}`));
assert(!created.record.allowedApprovalTerms.includes("okay"), "factory must not allow vague approval term");

[
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
  "nativeBridge",
  "ACTION_CALL",
  "getUserMedia"
].forEach(term => {
  assert(!moduleSource.includes(term), `E2 inert approval record module must not include unsafe runtime API: ${term}`);
});

[
  "nexus-staged-action-approval-record.js",
  "NexusStagedActionApprovalRecord",
  "createStagedActionApprovalRecord(",
  "validateStagedActionApprovalRecord("
].forEach(forbidden => {
  assert(!index.includes(forbidden), `index must not load Sprint E2 approval record contract: ${forbidden}`);
  assert(!app.includes(forbidden), `app must not wire Sprint E2 approval record contract: ${forbidden}`);
  assert(!server.includes(forbidden), `server must not wire Sprint E2 approval record contract: ${forbidden}`);
});

assert(exists("docs", "NEXUS_SPRINT_E1_STAGED_ACTION_APPROVAL_AUDIT_PRODUCT_BOUNDARY.md"), "E2 requires E1 boundary doc.");
assert(exists("scripts", "nexus-sprint-e1-staged-action-approval-audit-product-boundary-qa.js"), "E2 requires E1 QA.");

const alias = "qa:nexus-sprint-e2-staged-action-approval-record-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint E2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-e1-staged-action-approval-audit-product-boundary-qa.js"), "E2 requires E1 QA to remain in qa-suite.");

console.log("[nexus-sprint-e2-staged-action-approval-record-contract-qa] passed");
