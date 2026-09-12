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

const docName = "NEXUS_SPRINT_E2_INERT_CONFIRMATION_CONTRACT.md";
const moduleName = "nexus-confirmation-contract.js";
const qaName = "nexus-sprint-e2-inert-confirmation-contract-qa.js";

assert(exists("docs", docName), "Sprint E2 inert confirmation contract doc must exist.");
assert(exists("public", moduleName), "Sprint E2 inert confirmation module must exist.");
assert(exists("scripts", qaName), "Sprint E2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contract = require(path.join(root, "public", moduleName));

assertIncludes(doc, [
  "Sprint E2",
  "4210bc3837acf6de948e56aa11f87a6fd102e041",
  "User Confirmation and Approval Framework",
  "public/nexus-confirmation-contract.js",
  "Allowed Confirmation Types",
  "Required Fields",
  "Required Invariants",
  "Required Blocked Execution Channels",
  "Validator Behavior",
  "Non-Execution Boundaries",
  "Runtime Boundary",
  "Sprint E2 establishes the inert confirmation data contract only"
], "E2 doc");

const requiredFields = [
  "confirmationId",
  "relatedStagedActionId",
  "confirmationType",
  "title",
  "summary",
  "approvalIntentOnly",
  "requiresFinalExecutionGate",
  "executionAuthority",
  "riskTier",
  "riskDisclosure",
  "blockedExecutionChannels",
  "evidenceRequirement",
  "sourcePacketRequirement",
  "userFacingLanguage",
  "safeUseNotes",
  "limitations"
];

const requiredBlockedChannels = [
  "provider",
  "call",
  "message",
  "payment",
  "location",
  "camera",
  "emergency",
  "medical",
  "pharmacy",
  "backend-write",
  "pending-action"
];

requiredFields.forEach(field => {
  assert(doc.includes(field), `E2 doc must include required field: ${field}`);
  assert(contract.REQUIRED_CONFIRMATION_FIELDS.includes(field), `contract required fields must include: ${field}`);
});

requiredBlockedChannels.forEach(channel => {
  assert(doc.includes(channel), `E2 doc must include blocked channel: ${channel}`);
  assert(contract.REQUIRED_BLOCKED_EXECUTION_CHANNELS.includes(channel), `contract blocked channels must include: ${channel}`);
});

[
  "reviewAcknowledgement",
  "prepareNextStep",
  "sourceReview",
  "riskDisclosureAcknowledgement",
  "cancelConfirmation",
  "notNow"
].forEach(type => {
  assert(doc.includes(type), `E2 doc must include allowed confirmation type: ${type}`);
  assert(contract.ALLOWED_CONFIRMATION_TYPES.includes(type), `contract allowed types must include: ${type}`);
});

assert.equal(typeof contract.isSafeApprovalIntentConfirmation, "function", "contract must export isSafeApprovalIntentConfirmation");
assert.equal(typeof contract.validateApprovalIntentConfirmation, "function", "contract must export validateApprovalIntentConfirmation");
assert.equal(typeof contract.createApprovalIntentConfirmation, "function", "contract must export createApprovalIntentConfirmation");

const safeConfirmation = {
  confirmationId: "confirm-agriculture-training-review",
  relatedStagedActionId: "stage-agriculture-training-review",
  confirmationType: "prepareNextStep",
  title: "Review agriculture training next step",
  summary: "Confirm that Nexus may prepare a review-only training option summary.",
  approvalIntentOnly: true,
  requiresFinalExecutionGate: true,
  executionAuthority: false,
  riskTier: "low",
  riskDisclosure: "This only prepares a review step. No enrollment or provider contact occurs.",
  blockedExecutionChannels: requiredBlockedChannels,
  evidenceRequirement: "Verified source packet required before any source-backed answer is shown.",
  sourcePacketRequirement: "Source packet must be present for source-backed agriculture support.",
  userFacingLanguage: "No action has been taken. This only prepares the next review step.",
  safeUseNotes: "Approval intent is not execution authority.",
  limitations: "No calls, messages, payments, provider handoff, backend writes, or pending actions."
};

assert.equal(contract.isSafeApprovalIntentConfirmation(safeConfirmation), true, "safe approval-intent confirmation must pass");
assert.equal(contract.validateApprovalIntentConfirmation(safeConfirmation).ok, true, "safe confirmation validation must be ok");

[
  ["approvalIntentOnly false", Object.assign({}, safeConfirmation, { approvalIntentOnly: false })],
  ["requiresFinalExecutionGate false", Object.assign({}, safeConfirmation, { requiresFinalExecutionGate: false })],
  ["executionAuthority true", Object.assign({}, safeConfirmation, { executionAuthority: true })],
  ["missing title", (() => { const copy = Object.assign({}, safeConfirmation); delete copy.title; return copy; })()],
  ["unknown type", Object.assign({}, safeConfirmation, { confirmationType: "provider.call.execute" })],
  ["incomplete blocked channels", Object.assign({}, safeConfirmation, { blockedExecutionChannels: ["call"] })]
].forEach(([label, confirmation]) => {
  assert.equal(contract.isSafeApprovalIntentConfirmation(confirmation), false, `${label} must fail safe confirmation validation`);
});

const created = contract.createApprovalIntentConfirmation(Object.assign({}, safeConfirmation, {
  approvalIntentOnly: false,
  requiresFinalExecutionGate: false,
  executionAuthority: true,
  blockedExecutionChannels: ["custom-risk"]
}));
assert.equal(created.validation.ok, true, "createApprovalIntentConfirmation must force safe invariants");
assert.equal(created.confirmation.approvalIntentOnly, true, "created confirmation must be approval-intent-only");
assert.equal(created.confirmation.requiresFinalExecutionGate, true, "created confirmation must require final execution gate");
assert.equal(created.confirmation.executionAuthority, false, "created confirmation must have no execution authority");
requiredBlockedChannels.forEach(channel => {
  assert(created.confirmation.blockedExecutionChannels.includes(channel), `created confirmation must preserve blocked channel: ${channel}`);
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
].forEach(term => {
  assert(!moduleSource.includes(term), `E2 inert confirmation module must not include unsafe runtime API: ${term}`);
});

const alias = "qa:nexus-sprint-e2-inert-confirmation-contract";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint E2 inert confirmation QA.");
assert(qaSuite.includes("scripts/nexus-sprint-e1-user-confirmation-product-boundary-qa.js"), "E2 requires E1 QA to remain in qa-suite.");

console.log("[nexus-sprint-e2-inert-confirmation-contract-qa] passed");
