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
  for (const term of terms) assert(source.includes(term), `${label} must include: ${term}`);
}

const docName = "NEXUS_SPRINT_F6_FINAL_EXECUTION_GATE_CONTRACT.md";
const moduleName = "nexus-final-execution-gate-contract.js";
const qaName = "nexus-sprint-f6-final-execution-gate-contract-qa.js";

assert(exists("docs", docName), "F6 doc must exist.");
assert(exists("public", moduleName), "F6 contract module must exist.");
assert(exists("scripts", qaName), "F6 QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const app = read("public", "app.js");
const index = read("public", "index.html");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contract = require(path.join(root, "public", moduleName));

assertIncludes(doc, [
  "Sprint F6",
  "Final Execution Gate Contract",
  "approval intent",
  "final execution readiness",
  "does not execute actions",
  "Required Gate Fields",
  "Required Invariants",
  "Blocked Execution Channels",
  "finalGateRequired",
  "finalGateSatisfied",
  "executionAuthority",
  "permissionState",
  "consentState",
  "auditState",
  "providerState",
  "reversalOrCancelPath"
], "F6 doc");

[
  "gateId",
  "actionId",
  "actionType",
  "riskTier",
  "targetSummary",
  "userApprovalId",
  "approvalIntentOnly",
  "finalGateRequired",
  "finalGateSatisfied",
  "executionAuthority",
  "permissionState",
  "consentState",
  "auditState",
  "providerState",
  "reversalOrCancelPath",
  "blockedExecutionChannels",
  "evidenceSummary",
  "limitations"
].forEach(field => {
  assert(doc.includes(field), `F6 doc must include field: ${field}`);
  assert(contract.REQUIRED_FINAL_GATE_FIELDS.includes(field), `F6 contract must include field: ${field}`);
});

[
  "provider",
  "call",
  "message",
  "payment",
  "location",
  "camera",
  "medical",
  "pharmacy",
  "emergency",
  "marketplace-transaction",
  "backend-write",
  "pending-action"
].forEach(channel => {
  assert(doc.includes(channel), `F6 doc must include blocked channel: ${channel}`);
  assert(contract.REQUIRED_BLOCKED_EXECUTION_CHANNELS.includes(channel), `F6 contract must block channel: ${channel}`);
});

const safeGate = {
  gateId: "gate-training-review-final",
  actionId: "prepare-training-review",
  actionType: "review-only",
  riskTier: "low",
  targetSummary: "Agriculture training review",
  userApprovalId: "approval-training-review",
  approvalIntentOnly: true,
  finalGateRequired: true,
  finalGateSatisfied: true,
  executionAuthority: false,
  permissionState: "satisfied",
  consentState: "satisfied",
  auditState: "ready",
  providerState: "available",
  reversalOrCancelPath: "Cancel before execution",
  blockedExecutionChannels: contract.REQUIRED_BLOCKED_EXECUTION_CHANNELS,
  evidenceSummary: "Source packet is available for review.",
  limitations: "No provider dispatch or real-world execution is authorized by this contract."
};

const valid = contract.validateFinalExecutionGate(safeGate);
assert.equal(valid.ok, true, "complete final gate should validate");
assert.equal(valid.executionAllowed, false, "F6 contract must never grant executionAllowed");

[
  ["missing final gate", Object.assign({}, safeGate, { finalGateSatisfied: false })],
  ["execution authority", Object.assign({}, safeGate, { executionAuthority: true })],
  ["permission missing", Object.assign({}, safeGate, { permissionState: "missing" })],
  ["audit missing", Object.assign({}, safeGate, { auditState: "missing" })],
  ["blocked channels incomplete", Object.assign({}, safeGate, { blockedExecutionChannels: ["call"] })]
].forEach(([label, gate]) => {
  const result = contract.validateFinalExecutionGate(gate);
  assert.equal(result.ok, false, `${label} must fail final gate validation`);
  assert.equal(result.executionAllowed, false, `${label} must not grant execution`);
});

const created = contract.createFinalExecutionGate(Object.assign({}, safeGate, {
  approvalIntentOnly: false,
  finalGateRequired: false,
  executionAuthority: true,
  blockedExecutionChannels: ["custom-risk"]
}));
assert.equal(created.gate.approvalIntentOnly, true, "created gate must force approvalIntentOnly");
assert.equal(created.gate.finalGateRequired, true, "created gate must force finalGateRequired");
assert.equal(created.gate.executionAuthority, false, "created gate must force executionAuthority false");
contract.REQUIRED_BLOCKED_EXECUTION_CHANNELS.forEach(channel => {
  assert(created.gate.blockedExecutionChannels.includes(channel), `created gate must block ${channel}`);
});

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
  "postMessage"
].forEach(term => assert(!moduleSource.includes(term), `F6 contract must not include runtime API: ${term}`));

assert(!index.includes(moduleName), "F6 module must not be loaded by index.html.");
assert(!app.includes(moduleName), "F6 module must not be imported by app.js.");
assert(!server.includes(moduleName), "F6 module must not be loaded by server.js.");

const alias = "qa:nexus-sprint-f6-final-execution-gate-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include F6 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-f5-approval-center-lane-closeout-qa.js"), "F6 requires F5 QA to remain in qa-suite.");

console.log("[nexus-sprint-f6-final-execution-gate-contract-qa] passed");
