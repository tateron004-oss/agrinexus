const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const docPath = path.join(root, "docs", "NEXUS_SPRINT_L1_CALLS_MESSAGING_PRODUCT_BOUNDARY.md");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function includesAll(source, terms, label) {
  terms.forEach(term => assert(source.includes(term), `${label} must include: ${term}`));
}

assert(fs.existsSync(docPath), "L1 product boundary doc must exist.");
const doc = fs.readFileSync(docPath, "utf8");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

includesAll(doc, [
  "48778a35ad7a2c16fdcc44fc5ca107aa4286b6d5",
  "Sprint K closeout posture",
  "Call/Message Intent",
  "intent:",
  "draft:",
  "handoff:",
  "actual send/call execution:",
  "phone call",
  "SMS",
  "WhatsApp",
  "Telegram",
  "email",
  "in-app message",
  "user-provided communication channel",
  "communicationIntentId",
  "communicationType",
  "recipientIdentityResolutionId",
  "recipientDisplayName",
  "recipientChannelType",
  "recipientChannelValue",
  "messageDraft",
  "callPurpose",
  "channelConfirmationRequired",
  "userApprovalRequired",
  "finalExecutionGateRequired",
  "executionAuthority",
  "riskTier",
  "evidenceRequirement",
  "sourcePacketRequirement",
  "blockedExecutionChannels",
  "safeUseNotes",
  "limitations",
  "`channelConfirmationRequired: true`",
  "`userApprovalRequired: true`",
  "`finalExecutionGateRequired: true`",
  "`executionAuthority: false`",
  "Sprint K contact/provider identity",
  "visible confirmation",
  "actual call execution",
  "SMS sending",
  "WhatsApp sending",
  "Telegram sending",
  "email sending",
  "provider dispatch",
  "payments",
  "marketplace transactions",
  "location sharing",
  "camera",
  "medical or pharmacy",
  "emergency routing",
  "backend writes",
  "real pending actions",
  "Browser validation",
  "Rollback Strategy",
  "Sprint L2"
], "L1 doc");

const alias = "qa:nexus-sprint-l1-calls-messaging-product-boundary";
const command = "node scripts/nexus-sprint-l1-calls-messaging-product-boundary-qa.js";
assert.equal(pkg.scripts && pkg.scripts[alias], command, `${alias} package script must exist.`);
assert(qaSuite.includes("scripts/nexus-sprint-l1-calls-messaging-product-boundary-qa.js"), "qa-suite must include L1 QA.");

console.log("[nexus-sprint-l1-calls-messaging-product-boundary-qa] passed");
