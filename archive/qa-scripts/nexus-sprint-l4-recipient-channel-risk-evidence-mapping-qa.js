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
  terms.forEach(term => assert(source.includes(term), `${label} must include: ${term}`));
}

const docName = "NEXUS_SPRINT_L4_RECIPIENT_CHANNEL_RISK_EVIDENCE_MAPPING.md";
const moduleName = "nexus-call-message-risk-evidence-mapping.js";
const qaName = "nexus-sprint-l4-recipient-channel-risk-evidence-mapping-qa.js";

assert(exists("docs", docName), "L4 doc must exist.");
assert(exists("public", moduleName), "L4 mapping module must exist.");
assert(exists("scripts", qaName), "L4 QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const mapping = require("../public/nexus-call-message-risk-evidence-mapping.js");

assertIncludes(doc, [
  "Sprint L4",
  "Recipient, Channel, Risk, and Evidence Mapping",
  "does not add runtime UI",
  "provider dispatch",
  "provider handoff",
  "calls",
  "messages",
  "WhatsApp",
  "Telegram",
  "SMS",
  "email",
  "payments",
  "location sharing",
  "medical/pharmacy behavior",
  "emergency routing",
  "backend writes",
  "storage writes",
  "network calls",
  "pending real-world actions",
  "emergency recipient or purpose",
  "payment",
  "medical",
  "pharmacy",
  "resolved or explicitly ambiguous recipient state",
  "channelConfirmationRequired: true",
  "userApprovalRequired: true",
  "finalExecutionGateRequired: true",
  "executionAuthority: false",
  "executionAllowed: false",
  "public/index.html",
  "public/app.js",
  "server.js"
], "L4 doc");

assertIncludes(moduleSource, [
  "RESTRICTED_TERMS",
  "HIGH_RISK_CHANNELS",
  "deriveRiskTier",
  "buildEvidenceRequirement",
  "mapCallMessageRiskEvidence"
], "L4 module");

[
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "navigator.geolocation",
  "mediaDevices",
  "window.open",
  "location.href",
  "sendBeacon",
  "setItem",
  "writeFile",
  "appendFile"
].forEach(term => assert(!moduleSource.includes(term), `L4 module must not include runtime side-effect API: ${term}`));

function baseInput(overrides = {}) {
  return Object.assign({
    communicationIntentId: "intent-risk-evidence-base",
    sourceSurface: "local-safe-fixture",
    communicationType: "message",
    recipientIdentityResolutionId: "identity-recipient",
    recipientDisplayName: "Visible Recipient",
    recipientChannelType: "in-app-message",
    recipientChannelValue: "visible-channel-not-opened",
    messageDraft: "Please share more information.",
    callPurpose: "",
    language: "en"
  }, overrides);
}

[
  ["ambiguous recipient", baseInput({
    communicationType: "recipient-confirmation",
    recipientDisplayName: "Multiple possible recipients",
    recipientChannelType: "user-provided-channel",
    recipientChannelValue: "not-yet-selected",
    messageDraft: "",
    callPurpose: "Clarify which recipient the user means"
  }), "high"],
  ["emergency", baseInput({
    communicationType: "call",
    recipientDisplayName: "Emergency Services",
    recipientChannelType: "phone-call",
    recipientChannelValue: "not-dialed",
    messageDraft: "",
    callPurpose: "Emergency dispatch request"
  }), "restricted"],
  ["payment", baseInput({
    recipientDisplayName: "Marketplace Seller",
    messageDraft: "I want to pay for this order"
  }), "restricted"],
  ["WhatsApp provider", baseInput({
    recipientDisplayName: "Agriculture Provider",
    recipientChannelType: "WhatsApp",
    recipientChannelValue: "provider-whatsapp-not-opened"
  }), "high"],
  ["email workforce", baseInput({
    recipientDisplayName: "Workforce Support Office",
    recipientChannelType: "email",
    recipientChannelValue: "provider-email-not-opened"
  }), "high"]
].forEach(([label, input, expectedRisk]) => {
  const result = mapping.mapCallMessageRiskEvidence(input);
  assert.equal(result.mapping.riskTier, expectedRisk, `L4 ${label} risk tier must be ${expectedRisk}.`);
  assert.equal(result.validation.ok, true, `L4 ${label} mapped intent must validate.`);
  assert.equal(result.validation.executionAllowed, false, `L4 ${label} must never allow execution.`);
  assert.equal(result.intent.executionAuthority, false, `L4 ${label} must preserve executionAuthority false.`);
  assert.equal(result.intent.channelConfirmationRequired, true, `L4 ${label} must require channel confirmation.`);
  assert.equal(result.intent.userApprovalRequired, true, `L4 ${label} must require user approval.`);
  assert.equal(result.intent.finalExecutionGateRequired, true, `L4 ${label} must require final execution gate.`);
  assert(result.mapping.evidenceRequirement.includes("visible recipient display"), `L4 ${label} must include visible recipient evidence.`);
  assert(result.mapping.evidenceRequirement.includes("audit-ready state"), `L4 ${label} must include audit evidence.`);
});

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(moduleName), `${label} must not load the L4 mapping module.`);
});

const alias = "qa:nexus-sprint-l4-recipient-channel-risk-evidence-mapping";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint L4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-l3-call-message-intent-harness-qa.js"), "L4 requires L3 QA to remain in qa-suite.");

console.log("[nexus-sprint-l4-recipient-channel-risk-evidence-mapping-qa] passed");
