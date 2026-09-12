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

const docName = "NEXUS_SPRINT_E3_STAGED_ACTION_APPROVAL_RECORD_HARNESS.md";
const qaName = "nexus-sprint-e3-staged-action-approval-record-harness-qa.js";
const moduleName = "nexus-staged-action-approval-record.js";

assert(exists("docs", docName), "Sprint E3 approval record harness doc must exist.");
assert(exists("scripts", qaName), "Sprint E3 QA script must exist.");
assert(exists("public", moduleName), "Sprint E3 requires Sprint E2 approval record module.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contract = require(path.join(root, "public", moduleName));

assertIncludes(doc, [
  "Sprint E3",
  "df1e57a7d6aac29263c07255d79b265dc30821e2",
  "deterministic fixture coverage",
  "QA and documentation only",
  "low-risk agriculture training review",
  "medium-risk provider-contact preparation preview",
  "high-risk call preparation preview",
  "blocked emergency handoff request",
  "cancelled user review",
  "expired approval review",
  "unsafe copy rejection",
  "vague approval rejection",
  "missing blocked channel rejection",
  "executionAuthority: false",
  "providerHandoffAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "runtimeUiAllowed: false",
  "auditRequired: true",
  "Sprint E4 - Staged Action Approval Audit Event Contract",
  "no-execution by default"
], "E3 harness doc");

const requiredBlockedChannels = contract.REQUIRED_BLOCKED_EXECUTION_CHANNELS;
const allowedTerms = contract.ALLOWED_APPROVAL_TERMS;
const blockedTerms = contract.BLOCKED_APPROVAL_TERMS;

function baseRecord(overrides = {}) {
  return Object.assign({
    approvalRecordId: "approval-fixture-base",
    stagedActionId: "stage-fixture-base",
    stagedActionType: "agriculture.training.review",
    approvalState: "approvalPreviewOnly",
    riskTier: "low",
    sourceSurface: "standard-user",
    userVisibleTitle: "Review safe next step",
    userVisibleTarget: "A safe review-only target",
    userVisibleConsequence: "Nexus can prepare information for review.",
    limitationSummary: "This does not submit, contact, schedule, purchase, share, or execute.",
    noActionDisclosure: "No action has been taken.",
    cancellationPath: "The user can choose Not now or cancel.",
    consentState: "not-required-for-preview",
    permissionState: "not-requested",
    auditRequired: true,
    auditEventType: "approval.preview.fixture",
    blockedExecutionChannels: requiredBlockedChannels,
    allowedApprovalTerms: allowedTerms,
    blockedApprovalTerms: blockedTerms,
    evidencePacketRef: "fixture-evidence-packet",
    providerSummary: "No provider handoff is available.",
    expiresAt: "2026-12-31T00:00:00.000Z",
    createdAt: "2026-06-26T00:00:00.000Z",
    redactedPayload: { fixture: true },
    executionAuthority: false,
    providerHandoffAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    runtimeUiAllowed: false
  }, overrides);
}

const passingFixtures = [
  baseRecord({
    approvalRecordId: "approval-agriculture-training",
    stagedActionId: "stage-agriculture-training",
    stagedActionType: "agriculture.training.review",
    approvalState: "approvalPreviewOnly",
    userVisibleTitle: "Review agriculture training options",
    userVisibleTarget: "Agriculture training resources"
  }),
  baseRecord({
    approvalRecordId: "approval-crop-support",
    stagedActionId: "stage-crop-support",
    stagedActionType: "agriculture.source_backed_guidance.review",
    approvalState: "awaitingExplicitApproval",
    userVisibleTitle: "Review source-backed crop support",
    userVisibleTarget: "Crop issue guidance",
    evidencePacketRef: "agriculture-source-packet"
  }),
  baseRecord({
    approvalRecordId: "approval-provider-contact-prep",
    stagedActionId: "stage-provider-contact-prep",
    stagedActionType: "communications.provider_contact.prepare",
    approvalState: "awaitingExplicitApproval",
    riskTier: "medium",
    userVisibleTitle: "Review provider contact preparation",
    userVisibleTarget: "Provider contact draft",
    userVisibleConsequence: "Nexus can prepare a draft for review, but cannot contact anyone.",
    providerSummary: "Provider connection is not active."
  }),
  baseRecord({
    approvalRecordId: "approval-call-prep",
    stagedActionId: "stage-call-prep",
    stagedActionType: "communications.outbound_call.prepare",
    approvalState: "awaitingExplicitApproval",
    riskTier: "high",
    userVisibleTitle: "Review call preparation",
    userVisibleTarget: "Call recipient summary",
    userVisibleConsequence: "Nexus can show what would need approval before any future call handoff.",
    consentState: "required-before-execution",
    permissionState: "required-before-execution"
  }),
  baseRecord({
    approvalRecordId: "approval-emergency-blocked",
    stagedActionId: "stage-emergency-blocked",
    stagedActionType: "emergency.handoff.blocked",
    approvalState: "approvalBlocked",
    riskTier: "restricted",
    userVisibleTitle: "Emergency action blocked",
    userVisibleTarget: "Emergency request",
    userVisibleConsequence: "Nexus can show safety guidance, but cannot dispatch emergency help.",
    limitationSummary: "Use local emergency services directly. This record cannot dispatch."
  }),
  baseRecord({
    approvalRecordId: "approval-cancelled",
    stagedActionId: "stage-cancelled",
    approvalState: "approvalCancelled",
    userVisibleTitle: "Cancelled review"
  }),
  baseRecord({
    approvalRecordId: "approval-expired",
    stagedActionId: "stage-expired",
    approvalState: "approvalExpired",
    userVisibleTitle: "Expired review"
  })
];

for (const fixture of passingFixtures) {
  const validation = contract.validateStagedActionApprovalRecord(fixture);
  assert.equal(validation.ok, true, `${fixture.approvalRecordId} must validate: ${validation.errors.join(", ")}`);
  assert.equal(contract.isSafeStagedActionApprovalRecord(fixture), true, `${fixture.approvalRecordId} must be safe`);
  assert.equal(fixture.executionAuthority, false, `${fixture.approvalRecordId} executionAuthority must remain false`);
  assert.equal(fixture.providerHandoffAllowed, false, `${fixture.approvalRecordId} providerHandoffAllowed must remain false`);
  assert.equal(fixture.backendWriteAllowed, false, `${fixture.approvalRecordId} backendWriteAllowed must remain false`);
  assert.equal(fixture.storageWriteAllowed, false, `${fixture.approvalRecordId} storageWriteAllowed must remain false`);
  assert.equal(fixture.networkAllowed, false, `${fixture.approvalRecordId} networkAllowed must remain false`);
  assert.equal(fixture.runtimeUiAllowed, false, `${fixture.approvalRecordId} runtimeUiAllowed must remain false`);
}

const invalidFixtures = [
  ["execution", baseRecord({ executionAuthority: true })],
  ["provider handoff", baseRecord({ providerHandoffAllowed: true })],
  ["backend write", baseRecord({ backendWriteAllowed: true })],
  ["storage write", baseRecord({ storageWriteAllowed: true })],
  ["network", baseRecord({ networkAllowed: true })],
  ["runtime UI", baseRecord({ runtimeUiAllowed: true })],
  ["no audit", baseRecord({ auditRequired: false })],
  ["no cancellation", baseRecord({ cancellationPath: "" })],
  ["no no-action disclosure", baseRecord({ noActionDisclosure: "Ready." })],
  ["missing blocked channels", baseRecord({ blockedExecutionChannels: ["call", "message"] })],
  ["vague allowed approval", baseRecord({ allowedApprovalTerms: ["yes", "confirm", "okay", "approve", "do it"] })],
  ["unsafe copy", baseRecord({ userVisibleConsequence: "I contacted them." })],
  ["unknown state", baseRecord({ approvalState: "providerExecuted" })]
];

for (const [label, fixture] of invalidFixtures) {
  const validation = contract.validateStagedActionApprovalRecord(fixture);
  assert.equal(validation.ok, false, `${label} invalid fixture must fail validation`);
  assert(validation.errors.length > 0, `${label} invalid fixture must report errors`);
}

const normalized = contract.createStagedActionApprovalRecord(baseRecord({
  approvalRecordId: "approval-normalized",
  stagedActionId: "stage-normalized",
  executionAuthority: true,
  providerHandoffAllowed: true,
  backendWriteAllowed: true,
  storageWriteAllowed: true,
  networkAllowed: true,
  runtimeUiAllowed: true,
  auditRequired: false,
  allowedApprovalTerms: ["okay", "yes"],
  blockedExecutionChannels: []
}));
assert.equal(normalized.validation.ok, true, "factory-normalized fixture must validate");
assert.equal(normalized.record.executionAuthority, false, "factory-normalized fixture must not execute");
assert.equal(normalized.record.providerHandoffAllowed, false, "factory-normalized fixture must not hand off provider");

[
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
  assert(!moduleSource.includes(term), `approval record module must remain inert and avoid runtime API: ${term}`);
});

[
  "nexus-staged-action-approval-record.js",
  "NexusStagedActionApprovalRecord",
  "createStagedActionApprovalRecord(",
  "validateStagedActionApprovalRecord("
].forEach(forbidden => {
  assert(!index.includes(forbidden), `index must not load Sprint E approval record contract: ${forbidden}`);
  assert(!app.includes(forbidden), `app must not wire Sprint E approval record contract: ${forbidden}`);
  assert(!server.includes(forbidden), `server must not wire Sprint E approval record contract: ${forbidden}`);
});

assert(exists("docs", "NEXUS_SPRINT_E2_STAGED_ACTION_APPROVAL_RECORD_CONTRACT.md"), "E3 requires E2 contract doc.");
assert(exists("scripts", "nexus-sprint-e2-staged-action-approval-record-contract-qa.js"), "E3 requires E2 QA.");

const alias = "qa:nexus-sprint-e3-staged-action-approval-record-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint E3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-e2-staged-action-approval-record-contract-qa.js"), "E3 requires E2 QA to remain in qa-suite.");

console.log("[nexus-sprint-e3-staged-action-approval-record-harness-qa] passed");
