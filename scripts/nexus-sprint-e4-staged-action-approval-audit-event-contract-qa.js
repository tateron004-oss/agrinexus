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

const docName = "NEXUS_SPRINT_E4_STAGED_ACTION_APPROVAL_AUDIT_EVENT_CONTRACT.md";
const moduleName = "nexus-staged-action-approval-audit-event.js";
const qaName = "nexus-sprint-e4-staged-action-approval-audit-event-contract-qa.js";

assert(exists("docs", docName), "Sprint E4 approval audit event contract doc must exist.");
assert(exists("public", moduleName), "Sprint E4 inert audit event module must exist.");
assert(exists("scripts", qaName), "Sprint E4 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const auditContract = require(path.join(root, "public", moduleName));

assertIncludes(doc, [
  "Sprint E4",
  "33ad581f4811c4336cae830955528ece7ff56908",
  "standalone contract module and deterministic QA only",
  "An approval audit event is not an execution event",
  "public/nexus-staged-action-approval-audit-event.js",
  "Required Audit Event Fields",
  "Allowed Event Types",
  "Required Invariants",
  "Sensitive Data Exclusions",
  "Result Statuses",
  "Runtime Boundary",
  "Sprint E5 - Staged Action Approval Lifecycle Harness",
  "no-execution by default"
], "E4 audit event doc");

const requiredFields = [
  "auditEventId",
  "approvalRecordId",
  "stagedActionId",
  "stagedActionType",
  "eventType",
  "approvalState",
  "previousApprovalState",
  "nextApprovalState",
  "riskTier",
  "sourceSurface",
  "actorRole",
  "actorRef",
  "sessionRef",
  "targetSummary",
  "providerSummary",
  "evidencePacketRef",
  "consentState",
  "permissionState",
  "auditRequired",
  "resultStatus",
  "blockedReason",
  "cancellationReason",
  "redactedPayload",
  "retentionPolicy",
  "createdAt"
];

const eventTypes = [
  "approval.preview.created",
  "approval.review.opened",
  "approval.awaiting_explicit_confirmation",
  "approval.accepted.inert",
  "approval.rejected",
  "approval.cancelled",
  "approval.expired",
  "approval.blocked",
  "approval.validation.failed"
];

const resultStatuses = [
  "recorded_for_review",
  "accepted_without_execution",
  "rejected_without_execution",
  "cancelled_without_execution",
  "expired_without_execution",
  "blocked_without_execution",
  "validation_failed_without_execution"
];

const sensitiveKeys = [
  "phoneNumber",
  "email",
  "fullName",
  "preciseLocation",
  "address",
  "paymentCard",
  "accountSecret",
  "medicalRecord",
  "prescription",
  "emergencyContact",
  "providerCredential",
  "nativeBridgePayload"
];

for (const field of requiredFields) {
  assert(doc.includes(field), `E4 doc must include required field: ${field}`);
  assert(auditContract.REQUIRED_APPROVAL_AUDIT_EVENT_FIELDS.includes(field), `audit contract required fields must include: ${field}`);
}

for (const eventType of eventTypes) {
  assert(doc.includes(eventType), `E4 doc must include event type: ${eventType}`);
  assert(auditContract.APPROVAL_AUDIT_EVENT_TYPES.includes(eventType), `audit contract event types must include: ${eventType}`);
}

for (const status of resultStatuses) {
  assert(doc.includes(status), `E4 doc must include result status: ${status}`);
  assert(auditContract.APPROVAL_AUDIT_RESULT_STATUSES.includes(status), `audit contract result statuses must include: ${status}`);
}

for (const key of sensitiveKeys) {
  assert(auditContract.SENSITIVE_RAW_DATA_KEYS.includes(key), `audit contract sensitive keys must include: ${key}`);
}

assert.equal(typeof auditContract.validateStagedActionApprovalAuditEvent, "function", "audit contract must export validateStagedActionApprovalAuditEvent");
assert.equal(typeof auditContract.isSafeStagedActionApprovalAuditEvent, "function", "audit contract must export isSafeStagedActionApprovalAuditEvent");
assert.equal(typeof auditContract.createStagedActionApprovalAuditEvent, "function", "audit contract must export createStagedActionApprovalAuditEvent");

function baseEvent(overrides = {}) {
  return Object.assign({
    auditEventId: "audit-fixture",
    approvalRecordId: "approval-fixture",
    stagedActionId: "stage-fixture",
    stagedActionType: "agriculture.training.review",
    eventType: "approval.preview.created",
    approvalState: "approvalPreviewOnly",
    previousApprovalState: "notApprovalReady",
    nextApprovalState: "approvalPreviewOnly",
    riskTier: "low",
    sourceSurface: "standard-user",
    actorRole: "standard-user",
    actorRef: "redacted-user",
    sessionRef: "redacted-session",
    targetSummary: "Review-only target",
    providerSummary: "No provider handoff is available.",
    evidencePacketRef: "fixture-evidence",
    consentState: "not-required-for-preview",
    permissionState: "not-requested",
    auditRequired: true,
    resultStatus: "recorded_for_review",
    blockedReason: "",
    cancellationReason: "",
    redactedPayload: { promptFamily: "fixture" },
    retentionPolicy: "retain-review-metadata-only",
    createdAt: "2026-06-26T00:00:00.000Z",
    executionRecorded: false,
    providerHandoffRecorded: false,
    backendWriteOccurred: false,
    storageWriteOccurred: false,
    networkOccurred: false,
    runtimeUiOccurred: false
  }, overrides);
}

for (const event of [
  baseEvent(),
  baseEvent({
    auditEventId: "audit-awaiting",
    eventType: "approval.awaiting_explicit_confirmation",
    nextApprovalState: "awaitingExplicitApproval"
  }),
  baseEvent({
    auditEventId: "audit-accepted-inert",
    eventType: "approval.accepted.inert",
    approvalState: "approvalAccepted",
    previousApprovalState: "awaitingExplicitApproval",
    nextApprovalState: "approvalAccepted",
    resultStatus: "accepted_without_execution"
  }),
  baseEvent({
    auditEventId: "audit-cancelled",
    eventType: "approval.cancelled",
    approvalState: "approvalCancelled",
    nextApprovalState: "approvalCancelled",
    resultStatus: "cancelled_without_execution",
    cancellationReason: "User selected Not now."
  }),
  baseEvent({
    auditEventId: "audit-blocked",
    eventType: "approval.blocked",
    approvalState: "approvalBlocked",
    nextApprovalState: "approvalBlocked",
    resultStatus: "blocked_without_execution",
    blockedReason: "High-risk provider execution remains unavailable."
  })
]) {
  const validation = auditContract.validateStagedActionApprovalAuditEvent(event);
  assert.equal(validation.ok, true, `${event.auditEventId} must validate: ${validation.errors.join(", ")}`);
  assert.equal(auditContract.isSafeStagedActionApprovalAuditEvent(event), true, `${event.auditEventId} must be safe`);
}

[
  ["execution", baseEvent({ executionRecorded: true })],
  ["provider handoff", baseEvent({ providerHandoffRecorded: true })],
  ["backend write", baseEvent({ backendWriteOccurred: true })],
  ["storage write", baseEvent({ storageWriteOccurred: true })],
  ["network", baseEvent({ networkOccurred: true })],
  ["runtime UI", baseEvent({ runtimeUiOccurred: true })],
  ["audit missing", baseEvent({ auditRequired: false })],
  ["unknown event type", baseEvent({ eventType: "approval.executed" })],
  ["unknown result status", baseEvent({ resultStatus: "called_provider" })],
  ["missing blocked reason", baseEvent({ eventType: "approval.blocked", resultStatus: "blocked_without_execution", blockedReason: "" })],
  ["missing cancellation reason", baseEvent({ eventType: "approval.cancelled", resultStatus: "cancelled_without_execution", cancellationReason: "" })],
  ["sensitive payload", baseEvent({ redactedPayload: { phoneNumber: "+15551234567" } })]
].forEach(([label, event]) => {
  const validation = auditContract.validateStagedActionApprovalAuditEvent(event);
  assert.equal(validation.ok, false, `${label} invalid audit event must fail validation`);
  assert(validation.errors.length > 0, `${label} invalid audit event must report errors`);
});

const created = auditContract.createStagedActionApprovalAuditEvent(baseEvent({
  auditEventId: "audit-normalized",
  executionRecorded: true,
  providerHandoffRecorded: true,
  backendWriteOccurred: true,
  storageWriteOccurred: true,
  networkOccurred: true,
  runtimeUiOccurred: true,
  auditRequired: false,
  eventType: "not-real",
  resultStatus: "provider_called",
  redactedPayload: { promptFamily: "fixture", phoneNumber: "+15551234567", email: "x@example.test" }
}));

assert.equal(created.validation.ok, true, "factory-normalized audit event must validate");
assert.equal(created.event.executionRecorded, false, "factory must force executionRecorded false");
assert.equal(created.event.providerHandoffRecorded, false, "factory must force providerHandoffRecorded false");
assert.equal(created.event.backendWriteOccurred, false, "factory must force backendWriteOccurred false");
assert.equal(created.event.storageWriteOccurred, false, "factory must force storageWriteOccurred false");
assert.equal(created.event.networkOccurred, false, "factory must force networkOccurred false");
assert.equal(created.event.runtimeUiOccurred, false, "factory must force runtimeUiOccurred false");
assert.equal(created.event.auditRequired, true, "factory must require audit");
assert.equal(created.event.eventType, "approval.preview.created", "factory must normalize unknown event type");
assert.equal(created.event.resultStatus, "recorded_for_review", "factory must normalize unknown result status");
assert(!("phoneNumber" in created.event.redactedPayload), "factory must remove phoneNumber from redacted payload");
assert(!("email" in created.event.redactedPayload), "factory must remove email from redacted payload");

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
  "window.nativeBridge",
  "nativeBridge.",
  "ACTION_CALL",
  "getUserMedia"
].forEach(term => {
  assert(!moduleSource.includes(term), `E4 inert audit event module must not include unsafe runtime API: ${term}`);
});

[
  "nexus-staged-action-approval-audit-event.js",
  "NexusStagedActionApprovalAuditEvent",
  "createStagedActionApprovalAuditEvent(",
  "validateStagedActionApprovalAuditEvent("
].forEach(forbidden => {
  assert(!index.includes(forbidden), `index must not load Sprint E4 audit event contract: ${forbidden}`);
  assert(!app.includes(forbidden), `app must not wire Sprint E4 audit event contract: ${forbidden}`);
  assert(!server.includes(forbidden), `server must not wire Sprint E4 audit event contract: ${forbidden}`);
});

assert(exists("docs", "NEXUS_SPRINT_E3_STAGED_ACTION_APPROVAL_RECORD_HARNESS.md"), "E4 requires E3 harness doc.");
assert(exists("scripts", "nexus-sprint-e3-staged-action-approval-record-harness-qa.js"), "E4 requires E3 QA.");

const alias = "qa:nexus-sprint-e4-staged-action-approval-audit-event-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint E4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-e3-staged-action-approval-record-harness-qa.js"), "E4 requires E3 QA to remain in qa-suite.");

console.log("[nexus-sprint-e4-staged-action-approval-audit-event-contract-qa] passed");
