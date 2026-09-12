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

const docName = "NEXUS_SPRINT_D1_CONTROLLED_ACTION_STAGING_PRODUCT_BOUNDARY.md";
const qaName = "nexus-sprint-d1-controlled-action-staging-product-boundary-qa.js";

assert(exists("docs", docName), "Sprint D1 product boundary doc must exist.");
assert(exists("scripts", qaName), "Sprint D1 QA script must exist.");

const doc = read("docs", docName);
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint D1",
  "ab9ea33f250e7e9f6b42ec3d12f7b95ed2ae83d7",
  "Add Stale Data Alerts flag contract harness",
  "audit train ended at AO3",
  "Controlled Action Staging Definition",
  "Staged Action vs Executed Action",
  "Allowed Staged Action Categories",
  "Disallowed Execution Categories",
  "Required Staged Action Fields",
  "Standard User Safety Expectations",
  "No-Execution Authority",
  "No-Provider-Handoff Boundary",
  "No-Call/Message/Payment/Location/Camera Boundary",
  "No-Medical/Pharmacy/Emergency Boundary",
  "No-Backend-Write / No-Real-Pending-Action Boundary",
  "Browser Validation Requirements",
  "Rollback Strategy",
  "Sprint D2 Readiness Recommendation"
], "D1 boundary doc");

[
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
].forEach(field => assert(doc.includes(field), `D1 required staged action field must be documented: ${field}`));

[
  "reviewOnly: true",
  "requiresUserApproval: true",
  "executionAuthority: false"
].forEach(invariant => assert(doc.includes(invariant), `D1 required staged action invariant must be documented: ${invariant}`));

[
  "provider handoff",
  "calls",
  "messages",
  "WhatsApp",
  "Telegram",
  "SMS",
  "email",
  "payments",
  "purchases",
  "marketplace transactions",
  "location or geolocation",
  "camera",
  "appointment booking",
  "emergency routing or dispatch",
  "medical diagnosis",
  "prescription",
  "pharmacy refill",
  "backend writes",
  "real pending actions",
  "storage side effects",
  "live lookup",
  "external navigation"
].forEach(term => assert(doc.includes(term), `D1 disallowed execution category must be documented: ${term}`));

[
  "autonomous execution",
  "provider handoff",
  "calls",
  "messages",
  "WhatsApp",
  "SMS",
  "Telegram",
  "email sending",
  "payments",
  "purchases",
  "marketplace transactions",
  "location sharing",
  "geolocation execution",
  "camera activation",
  "image capture",
  "medical diagnosis",
  "pharmacy workflow execution",
  "emergency dispatch",
  "backend writes",
  "real pending actions"
].forEach(term => assert(doc.includes(term), `D1 must clearly block: ${term}`));

[
  "agriculture training review",
  "irrigation learning review",
  "farm jobs review",
  "AgriTrade browse review",
  "crop issue observation support review",
  "field support review",
  "source-backed agriculture guidance review",
  "blocked high-risk request review notes"
].forEach(term => assert(doc.includes(term), `D1 allowed staged action category must be documented: ${term}`));

[
  "no DOM mutation",
  "no event listeners",
  "no fetch/network",
  "no storage writes",
  "no backend writes",
  "no provider handoff",
  "no pending real-world actions",
  "no execution path",
  "isSafeReviewOnlyStagedAction(action)"
].forEach(term => assert(doc.includes(term), `D1 D2 readiness note must include: ${term}`));

const alias = "qa:nexus-sprint-d1-controlled-action-staging-product-boundary";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint D1 QA.");

console.log("[nexus-sprint-d1-controlled-action-staging-product-boundary-qa] passed");
