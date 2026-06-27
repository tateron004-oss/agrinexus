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

const docName = "NEXUS_SPRINT_D2_INERT_STAGED_ACTION_CONTRACT.md";
const moduleName = "nexus-staged-action-contract.js";
const qaName = "nexus-sprint-d2-inert-staged-action-contract-qa.js";

assert(exists("docs", docName), "Sprint D2 contract doc must exist.");
assert(exists("public", moduleName), "Sprint D2 inert contract module must exist.");
assert(exists("scripts", qaName), "Sprint D2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contract = require(path.join(root, "public", moduleName));

assertIncludes(doc, [
  "Sprint D2",
  "public/nexus-staged-action-contract.js",
  "Allowed Staged Action Types",
  "Required Fields",
  "Required Invariants",
  "Required Blocked Execution Channels",
  "Validator Behavior",
  "Non-Execution Boundaries",
  "Runtime Boundary",
  "Sprint D2 establishes the inert staged action data contract only"
], "D2 doc");

const requiredFields = [
  "stagedActionId",
  "stagedActionType",
  "title",
  "summary",
  "reviewOnly",
  "requiresUserApproval",
  "executionAuthority",
  "riskTier",
  "blockedExecutionChannels",
  "evidenceRequirement",
  "sourcePacketRequirement",
  "createdFromPromptFamily",
  "safeUseNotes",
  "limitations"
];

const requiredBlockedChannels = [
  "call",
  "message",
  "payment",
  "location",
  "camera",
  "provider",
  "emergency",
  "medical",
  "pharmacy",
  "backend-write",
  "pending-action"
];

requiredFields.forEach(field => {
  assert(doc.includes(field), `D2 doc must include required field: ${field}`);
  assert(contract.REQUIRED_STAGED_ACTION_FIELDS.includes(field), `contract required fields must include: ${field}`);
});

requiredBlockedChannels.forEach(channel => {
  assert(doc.includes(channel), `D2 doc must include blocked channel: ${channel}`);
  assert(contract.REQUIRED_BLOCKED_EXECUTION_CHANNELS.includes(channel), `contract blocked channels must include: ${channel}`);
});

[
  "agriculture.training.review",
  "agriculture.irrigation.learning.review",
  "workforce.farm_jobs.review",
  "marketplace.agritrade.browse.review",
  "agriculture.crop_issue.observation_review",
  "agriculture.field_support.review",
  "agriculture.source_backed_guidance.review",
  "blocked.high_risk.request_review"
].forEach(type => {
  assert(doc.includes(type), `D2 doc must include allowed staged action type: ${type}`);
  assert(contract.ALLOWED_STAGED_ACTION_TYPES.includes(type), `contract allowed types must include: ${type}`);
});

assert.equal(typeof contract.isSafeReviewOnlyStagedAction, "function", "contract must export isSafeReviewOnlyStagedAction");
assert.equal(typeof contract.validateReviewOnlyStagedAction, "function", "contract must export validateReviewOnlyStagedAction");
assert.equal(typeof contract.createReviewOnlyStagedAction, "function", "contract must export createReviewOnlyStagedAction");

const safeAction = {
  stagedActionId: "stage-agriculture-training-review",
  stagedActionType: "agriculture.training.review",
  title: "Review agriculture training options",
  summary: "Prepare a review-only training next step for the user to inspect.",
  reviewOnly: true,
  requiresUserApproval: true,
  executionAuthority: false,
  riskTier: "low",
  blockedExecutionChannels: requiredBlockedChannels,
  evidenceRequirement: "Local source packet or verified source reference required.",
  sourcePacketRequirement: "Required for source-backed guidance before visible preview.",
  createdFromPromptFamily: "agriculture-training",
  safeUseNotes: "No action has been taken.",
  limitations: "Review-only. No enrollment or provider contact."
};

assert.equal(contract.isSafeReviewOnlyStagedAction(safeAction), true, "safe review-only staged action must pass");
assert.equal(contract.validateReviewOnlyStagedAction(safeAction).ok, true, "safe action validation must be ok");

[
  ["reviewOnly false", Object.assign({}, safeAction, { reviewOnly: false })],
  ["requiresUserApproval false", Object.assign({}, safeAction, { requiresUserApproval: false })],
  ["executionAuthority true", Object.assign({}, safeAction, { executionAuthority: true })],
  ["missing title", (() => { const copy = Object.assign({}, safeAction); delete copy.title; return copy; })()],
  ["unknown type", Object.assign({}, safeAction, { stagedActionType: "provider.call.execute" })],
  ["incomplete blocked channels", Object.assign({}, safeAction, { blockedExecutionChannels: ["call"] })]
].forEach(([label, action]) => {
  assert.equal(contract.isSafeReviewOnlyStagedAction(action), false, `${label} must fail safe staged action validation`);
});

const created = contract.createReviewOnlyStagedAction(Object.assign({}, safeAction, {
  reviewOnly: false,
  requiresUserApproval: false,
  executionAuthority: true,
  blockedExecutionChannels: ["custom-risk"]
}));
assert.equal(created.validation.ok, true, "createReviewOnlyStagedAction must force safe invariants");
assert.equal(created.action.reviewOnly, true, "created action must be review-only");
assert.equal(created.action.requiresUserApproval, true, "created action must require approval");
assert.equal(created.action.executionAuthority, false, "created action must have no execution authority");
requiredBlockedChannels.forEach(channel => {
  assert(created.action.blockedExecutionChannels.includes(channel), `created action must preserve blocked channel: ${channel}`);
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
  assert(!moduleSource.includes(term), `D2 inert contract module must not include unsafe runtime API: ${term}`);
});

const alias = "qa:nexus-sprint-d2-inert-staged-action-contract";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint D2 QA.");

console.log("[nexus-sprint-d2-inert-staged-action-contract-qa] passed");
