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

const docName = "NEXUS_SPRINT_E5_STAGED_ACTION_APPROVAL_LIFECYCLE_HARNESS.md";
const qaName = "nexus-sprint-e5-staged-action-approval-lifecycle-harness-qa.js";
const recordModuleName = "nexus-staged-action-approval-record.js";
const auditModuleName = "nexus-staged-action-approval-audit-event.js";

assert(exists("docs", docName), "Sprint E5 lifecycle harness doc must exist.");
assert(exists("scripts", qaName), "Sprint E5 QA script must exist.");
assert(exists("public", recordModuleName), "Sprint E5 requires E2 approval record module.");
assert(exists("public", auditModuleName), "Sprint E5 requires E4 audit event module.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const recordContract = require(path.join(root, "public", recordModuleName));
const auditContract = require(path.join(root, "public", auditModuleName));

assertIncludes(doc, [
  "Sprint E5",
  "c8796099f8981abf6a6aa2307f16b49e00bfb7bb",
  "documentation and QA only",
  "preview created",
  "review opened",
  "awaiting explicit confirmation",
  "accepted inert",
  "rejected",
  "cancelled",
  "expired",
  "blocked",
  "validation failed",
  "Lifecycle Pair Contract",
  "Required Pair Invariants",
  "Accepted-Inert Boundary",
  "approval.accepted.inert",
  "accepted_without_execution",
  "Invalid Lifecycle Families",
  "Runtime Boundary",
  "Sprint E6 - Staged Action Approval No-Execution Regression Guard",
  "no-execution by default"
], "E5 lifecycle doc");

function makeRecord(overrides = {}) {
  return recordContract.createStagedActionApprovalRecord(Object.assign({
    approvalRecordId: "approval-lifecycle",
    stagedActionId: "stage-lifecycle",
    stagedActionType: "agriculture.training.review",
    approvalState: "approvalPreviewOnly",
    riskTier: "low",
    sourceSurface: "standard-user",
    userVisibleTitle: "Review lifecycle fixture",
    userVisibleTarget: "Lifecycle target",
    userVisibleConsequence: "Nexus can prepare review information only.",
    limitationSummary: "No provider contact, payment, scheduling, dispatch, storage, or execution.",
    noActionDisclosure: "No action has been taken.",
    cancellationPath: "The user can cancel or choose Not now.",
    consentState: "not-required-for-preview",
    permissionState: "not-requested",
    auditRequired: true,
    auditEventType: "approval.preview.created",
    blockedExecutionChannels: recordContract.REQUIRED_BLOCKED_EXECUTION_CHANNELS,
    allowedApprovalTerms: recordContract.ALLOWED_APPROVAL_TERMS,
    blockedApprovalTerms: recordContract.BLOCKED_APPROVAL_TERMS,
    evidencePacketRef: "lifecycle-evidence",
    providerSummary: "No provider handoff is available.",
    expiresAt: "2026-12-31T00:00:00.000Z",
    createdAt: "2026-06-26T00:00:00.000Z",
    redactedPayload: { lifecycle: true }
  }, overrides)).record;
}

function makeEvent(overrides = {}) {
  return auditContract.createStagedActionApprovalAuditEvent(Object.assign({
    auditEventId: "audit-lifecycle",
    approvalRecordId: "approval-lifecycle",
    stagedActionId: "stage-lifecycle",
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
    targetSummary: "Lifecycle target",
    providerSummary: "No provider handoff is available.",
    evidencePacketRef: "lifecycle-evidence",
    consentState: "not-required-for-preview",
    permissionState: "not-requested",
    auditRequired: true,
    resultStatus: "recorded_for_review",
    blockedReason: "",
    cancellationReason: "",
    redactedPayload: { lifecycle: true },
    retentionPolicy: "retain-review-metadata-only",
    createdAt: "2026-06-26T00:00:00.000Z"
  }, overrides)).event;
}

function validateLifecyclePair(pair) {
  const recordValidation = recordContract.validateStagedActionApprovalRecord(pair.record);
  const eventValidation = auditContract.validateStagedActionApprovalAuditEvent(pair.event);
  const errors = [];

  if (!recordValidation.ok) errors.push(`record invalid: ${recordValidation.errors.join(", ")}`);
  if (!eventValidation.ok) errors.push(`event invalid: ${eventValidation.errors.join(", ")}`);
  if (pair.record.approvalRecordId !== pair.event.approvalRecordId) errors.push("approvalRecordId mismatch");
  if (pair.record.stagedActionId !== pair.event.stagedActionId) errors.push("stagedActionId mismatch");
  if (pair.record.stagedActionType !== pair.event.stagedActionType) errors.push("stagedActionType mismatch");
  if (pair.record.approvalState !== pair.event.nextApprovalState) errors.push("event nextApprovalState must match record approvalState");
  if (pair.record.executionAuthority !== false) errors.push("record executionAuthority must be false");
  if (pair.event.executionRecorded !== false) errors.push("event executionRecorded must be false");
  if (pair.record.providerHandoffAllowed !== false) errors.push("record providerHandoffAllowed must be false");
  if (pair.event.providerHandoffRecorded !== false) errors.push("event providerHandoffRecorded must be false");
  if (pair.record.backendWriteAllowed !== false || pair.event.backendWriteOccurred !== false) errors.push("backend writes must be false");
  if (pair.record.storageWriteAllowed !== false || pair.event.storageWriteOccurred !== false) errors.push("storage writes must be false");
  if (pair.record.networkAllowed !== false || pair.event.networkOccurred !== false) errors.push("network must be false");
  if (pair.record.runtimeUiAllowed !== false || pair.event.runtimeUiOccurred !== false) errors.push("runtime UI must be false");
  if (pair.record.approvalState === "approvalAccepted" && pair.event.eventType !== "approval.accepted.inert") {
    errors.push("accepted lifecycle must use approval.accepted.inert");
  }
  if (pair.record.approvalState === "approvalAccepted" && pair.event.resultStatus !== "accepted_without_execution") {
    errors.push("accepted lifecycle must use accepted_without_execution");
  }

  return { ok: errors.length === 0, errors };
}

const lifecyclePairs = [
  {
    label: "preview created",
    record: makeRecord({ approvalRecordId: "approval-preview", stagedActionId: "stage-preview", approvalState: "approvalPreviewOnly" }),
    event: makeEvent({ auditEventId: "audit-preview", approvalRecordId: "approval-preview", stagedActionId: "stage-preview", eventType: "approval.preview.created", nextApprovalState: "approvalPreviewOnly", resultStatus: "recorded_for_review" })
  },
  {
    label: "review opened",
    record: makeRecord({ approvalRecordId: "approval-opened", stagedActionId: "stage-opened", approvalState: "approvalPreviewOnly" }),
    event: makeEvent({ auditEventId: "audit-opened", approvalRecordId: "approval-opened", stagedActionId: "stage-opened", eventType: "approval.review.opened", nextApprovalState: "approvalPreviewOnly", resultStatus: "recorded_for_review" })
  },
  {
    label: "awaiting explicit confirmation",
    record: makeRecord({ approvalRecordId: "approval-awaiting", stagedActionId: "stage-awaiting", approvalState: "awaitingExplicitApproval" }),
    event: makeEvent({ auditEventId: "audit-awaiting", approvalRecordId: "approval-awaiting", stagedActionId: "stage-awaiting", eventType: "approval.awaiting_explicit_confirmation", previousApprovalState: "approvalPreviewOnly", nextApprovalState: "awaitingExplicitApproval", resultStatus: "recorded_for_review" })
  },
  {
    label: "accepted inert",
    record: makeRecord({ approvalRecordId: "approval-accepted", stagedActionId: "stage-accepted", approvalState: "approvalAccepted" }),
    event: makeEvent({ auditEventId: "audit-accepted", approvalRecordId: "approval-accepted", stagedActionId: "stage-accepted", eventType: "approval.accepted.inert", previousApprovalState: "awaitingExplicitApproval", nextApprovalState: "approvalAccepted", resultStatus: "accepted_without_execution" })
  },
  {
    label: "rejected",
    record: makeRecord({ approvalRecordId: "approval-rejected", stagedActionId: "stage-rejected", approvalState: "approvalRejected" }),
    event: makeEvent({ auditEventId: "audit-rejected", approvalRecordId: "approval-rejected", stagedActionId: "stage-rejected", eventType: "approval.rejected", previousApprovalState: "awaitingExplicitApproval", nextApprovalState: "approvalRejected", resultStatus: "rejected_without_execution" })
  },
  {
    label: "cancelled",
    record: makeRecord({ approvalRecordId: "approval-cancelled", stagedActionId: "stage-cancelled", approvalState: "approvalCancelled" }),
    event: makeEvent({ auditEventId: "audit-cancelled", approvalRecordId: "approval-cancelled", stagedActionId: "stage-cancelled", eventType: "approval.cancelled", previousApprovalState: "awaitingExplicitApproval", nextApprovalState: "approvalCancelled", resultStatus: "cancelled_without_execution", cancellationReason: "User selected Not now." })
  },
  {
    label: "expired",
    record: makeRecord({ approvalRecordId: "approval-expired", stagedActionId: "stage-expired", approvalState: "approvalExpired" }),
    event: makeEvent({ auditEventId: "audit-expired", approvalRecordId: "approval-expired", stagedActionId: "stage-expired", eventType: "approval.expired", previousApprovalState: "awaitingExplicitApproval", nextApprovalState: "approvalExpired", resultStatus: "expired_without_execution" })
  },
  {
    label: "blocked",
    record: makeRecord({ approvalRecordId: "approval-blocked", stagedActionId: "stage-blocked", approvalState: "approvalBlocked", riskTier: "restricted" }),
    event: makeEvent({ auditEventId: "audit-blocked", approvalRecordId: "approval-blocked", stagedActionId: "stage-blocked", eventType: "approval.blocked", previousApprovalState: "awaitingExplicitApproval", nextApprovalState: "approvalBlocked", riskTier: "restricted", resultStatus: "blocked_without_execution", blockedReason: "Restricted action remains blocked." })
  },
  {
    label: "validation failed",
    record: makeRecord({ approvalRecordId: "approval-validation-failed", stagedActionId: "stage-validation-failed", approvalState: "approvalBlocked" }),
    event: makeEvent({ auditEventId: "audit-validation-failed", approvalRecordId: "approval-validation-failed", stagedActionId: "stage-validation-failed", eventType: "approval.validation.failed", previousApprovalState: "notApprovalReady", nextApprovalState: "approvalBlocked", resultStatus: "validation_failed_without_execution" })
  }
];

for (const pair of lifecyclePairs) {
  const result = validateLifecyclePair(pair);
  assert.equal(result.ok, true, `${pair.label} lifecycle pair must validate: ${result.errors.join(", ")}`);
}

function unsafeRecord(overrides = {}) {
  return Object.assign({}, makeRecord(), overrides);
}

function unsafeEvent(overrides = {}) {
  return Object.assign({}, makeEvent(), overrides);
}

[
  ["record execution", { record: unsafeRecord({ executionAuthority: true }), event: makeEvent() }],
  ["event execution", { record: makeRecord(), event: unsafeEvent({ executionRecorded: true }) }],
  ["provider handoff", { record: unsafeRecord({ providerHandoffAllowed: true }), event: makeEvent() }],
  ["provider handoff recorded", { record: makeRecord(), event: unsafeEvent({ providerHandoffRecorded: true }) }],
  ["id mismatch", { record: unsafeRecord({ approvalRecordId: "approval-a" }), event: unsafeEvent({ approvalRecordId: "approval-b" }) }],
  ["state mismatch", { record: unsafeRecord({ approvalState: "approvalRejected" }), event: unsafeEvent({ nextApprovalState: "approvalPreviewOnly" }) }],
  ["accepted non-inert", { record: unsafeRecord({ approvalState: "approvalAccepted" }), event: unsafeEvent({ nextApprovalState: "approvalAccepted", eventType: "approval.review.opened", resultStatus: "accepted_without_execution" }) }],
  ["accepted execution status", { record: unsafeRecord({ approvalState: "approvalAccepted" }), event: unsafeEvent({ nextApprovalState: "approvalAccepted", eventType: "approval.accepted.inert", resultStatus: "recorded_for_review" }) }],
  ["sensitive raw payload", { record: makeRecord(), event: unsafeEvent({ redactedPayload: { medicalRecord: "raw" } }) }]
].forEach(([label, pair]) => {
  const result = validateLifecyclePair(pair);
  assert.equal(result.ok, false, `${label} lifecycle pair must fail`);
  assert(result.errors.length > 0, `${label} lifecycle pair must report errors`);
});

[
  "nexus-staged-action-approval-record.js",
  "nexus-staged-action-approval-audit-event.js",
  "NexusStagedActionApprovalRecord",
  "NexusStagedActionApprovalAuditEvent",
  "createStagedActionApprovalRecord(",
  "createStagedActionApprovalAuditEvent("
].forEach(forbidden => {
  assert(!index.includes(forbidden), `index must not load Sprint E lifecycle contract: ${forbidden}`);
  assert(!app.includes(forbidden), `app must not wire Sprint E lifecycle contract: ${forbidden}`);
  assert(!server.includes(forbidden), `server must not wire Sprint E lifecycle contract: ${forbidden}`);
});

assert(exists("docs", "NEXUS_SPRINT_E4_STAGED_ACTION_APPROVAL_AUDIT_EVENT_CONTRACT.md"), "E5 requires E4 audit event doc.");
assert(exists("scripts", "nexus-sprint-e4-staged-action-approval-audit-event-contract-qa.js"), "E5 requires E4 QA.");

const alias = "qa:nexus-sprint-e5-staged-action-approval-lifecycle-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint E5 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-e4-staged-action-approval-audit-event-contract-qa.js"), "E5 requires E4 QA to remain in qa-suite.");

console.log("[nexus-sprint-e5-staged-action-approval-lifecycle-harness-qa] passed");
