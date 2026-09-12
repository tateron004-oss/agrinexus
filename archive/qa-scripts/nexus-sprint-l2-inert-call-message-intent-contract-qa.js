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

const docName = "NEXUS_SPRINT_L2_INERT_CALL_MESSAGE_INTENT_CONTRACT.md";
const moduleName = "nexus-call-message-intent-contract.js";
const qaName = "nexus-sprint-l2-inert-call-message-intent-contract-qa.js";

assert(exists("docs", docName), "L2 doc must exist.");
assert(exists("public", moduleName), "L2 contract module must exist.");
assert(exists("scripts", qaName), "L2 QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contract = require("../public/nexus-call-message-intent-contract.js");

assertIncludes(doc, [
  "Sprint L2",
  "Inert Call/Message Intent Contract",
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
  "channelConfirmationRequired: true",
  "userApprovalRequired: true",
  "finalExecutionGateRequired: true",
  "executionAuthority: false",
  "public/index.html",
  "public/app.js",
  "server.js"
], "L2 doc");

assertIncludes(moduleSource, [
  "SUPPORTED_COMMUNICATION_TYPES",
  "SUPPORTED_COMMUNICATION_CHANNELS",
  "REQUIRED_COMMUNICATION_INTENT_FIELDS",
  "BLOCKED_EXECUTION_CHANNELS",
  "validateCallMessageIntent",
  "isSafeCallMessageIntent",
  "createCallMessageIntent"
], "L2 module");

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
].forEach(term => assert(!moduleSource.includes(term), `L2 contract must not include runtime side-effect API: ${term}`));

[
  "call",
  "message",
  "draft",
  "channel-selection",
  "recipient-confirmation",
  "unknown"
].forEach(type => assert(contract.SUPPORTED_COMMUNICATION_TYPES.includes(type), `L2 supported communication types must include ${type}`));

[
  "phone-call",
  "SMS",
  "WhatsApp",
  "Telegram",
  "email",
  "in-app-message",
  "user-provided-channel"
].forEach(channel => assert(contract.SUPPORTED_COMMUNICATION_CHANNELS.includes(channel), `L2 supported channels must include ${channel}`));

[
  "communicationIntentId",
  "sourceSurface",
  "communicationType",
  "recipientIdentityResolutionId",
  "recipientDisplayName",
  "recipientChannelType",
  "recipientChannelValue",
  "messageDraft",
  "callPurpose",
  "language",
  "riskTier",
  "evidenceRequirement",
  "sourcePacketRequirement",
  "permissionState",
  "auditState",
  "channelConfirmationRequired",
  "userApprovalRequired",
  "finalExecutionGateRequired",
  "executionAuthority",
  "providerHandoffAllowed",
  "externalNavigationAllowed",
  "nativeBridgeAllowed",
  "networkAllowed",
  "storageWriteAllowed",
  "backendWriteAllowed",
  "blockedExecutionChannels",
  "safeUseNotes",
  "limitations"
].forEach(field => assert(contract.REQUIRED_COMMUNICATION_INTENT_FIELDS.includes(field), `L2 required fields must include ${field}`));

[
  "call",
  "message",
  "SMS",
  "WhatsApp",
  "Telegram",
  "email",
  "in-app-message",
  "provider-dispatch",
  "provider-handoff",
  "external-navigation",
  "native-bridge",
  "appointment",
  "payment",
  "purchase",
  "marketplace-transaction",
  "location",
  "camera",
  "medical",
  "pharmacy",
  "emergency",
  "backend-write",
  "storage-write",
  "network-call",
  "pending-action"
].forEach(channel => assert(contract.BLOCKED_EXECUTION_CHANNELS.includes(channel), `L2 blocked execution channels must include ${channel}`));

const complete = contract.createCallMessageIntent({
  communicationIntentId: "intent-call-provider-a",
  sourceSurface: "local-safe-fixture",
  communicationType: "call",
  recipientIdentityResolutionId: "candidate-provider-a",
  recipientDisplayName: "Clinic A",
  recipientChannelType: "phone-call",
  recipientChannelValue: "visible-but-not-dialed",
  messageDraft: "",
  callPurpose: "Ask about available appointment options",
  language: "en",
  riskTier: "high",
  evidenceRequirement: "resolved recipient, visible channel, visible purpose, explicit approval, final execution gate",
  sourcePacketRequirement: "identity-resolution-packet",
  permissionState: "ready",
  auditState: "ready",
  safeUseNotes: "Intent preview only; no provider is contacted",
  limitations: "Cannot call, message, open provider apps, or create a pending real-world action"
});

assert.equal(complete.validation.ok, true, "Complete L2 call/message intent should validate.");
assert.equal(contract.isSafeCallMessageIntent(complete.intent), true, "Complete L2 intent should be recognized as safe.");
assert.equal(complete.validation.previewAllowed, true, "Complete L2 intent may be previewed.");
assert.equal(complete.validation.executionAllowed, false, "L2 intent must not allow execution.");
assert.equal(complete.intent.channelConfirmationRequired, true, "L2 factory must force channelConfirmationRequired true.");
assert.equal(complete.intent.userApprovalRequired, true, "L2 factory must force userApprovalRequired true.");
assert.equal(complete.intent.finalExecutionGateRequired, true, "L2 factory must force finalExecutionGateRequired true.");
assert.equal(complete.intent.executionAuthority, false, "L2 factory must force executionAuthority false.");
assert.equal(complete.intent.providerHandoffAllowed, false, "L2 factory must force providerHandoffAllowed false.");
assert.equal(complete.intent.networkAllowed, false, "L2 factory must force networkAllowed false.");
assert.equal(complete.intent.storageWriteAllowed, false, "L2 factory must force storageWriteAllowed false.");
assert.equal(complete.intent.backendWriteAllowed, false, "L2 factory must force backendWriteAllowed false.");

[
  { label: "unsupported type", overrides: { communicationType: "wire-transfer" } },
  { label: "unsupported channel", overrides: { recipientChannelType: "unbounded-url" } },
  { label: "missing recipient", overrides: { recipientDisplayName: "" } },
  { label: "missing purpose", overrides: { messageDraft: "", callPurpose: "" } },
  { label: "missing permission", overrides: { permissionState: "missing" } },
  { label: "missing audit", overrides: { auditState: "missing" } },
  { label: "channel confirmation disabled", overrides: { channelConfirmationRequired: false } },
  { label: "user approval disabled", overrides: { userApprovalRequired: false } },
  { label: "final gate disabled", overrides: { finalExecutionGateRequired: false } },
  { label: "execution escalation", overrides: { executionAuthority: true } },
  { label: "provider handoff escalation", overrides: { providerHandoffAllowed: true } },
  { label: "external navigation escalation", overrides: { externalNavigationAllowed: true } },
  { label: "native bridge escalation", overrides: { nativeBridgeAllowed: true } },
  { label: "network escalation", overrides: { networkAllowed: true } },
  { label: "incomplete blocked channels", overrides: { blockedExecutionChannels: ["call"] } }
].forEach(testCase => {
  const intent = Object.assign({}, complete.intent, testCase.overrides);
  const result = contract.validateCallMessageIntent(intent);
  assert.equal(result.ok, false, `L2 must fail closed for ${testCase.label}.`);
  assert.equal(result.executionAllowed, false, `L2 must never allow execution for ${testCase.label}.`);
});

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(moduleName), `${label} must not load the L2 contract module.`);
});

const alias = "qa:nexus-sprint-l2-inert-call-message-intent-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`"scripts/${qaName}"`), "L2 QA must be wired into qa-suite.js.");

console.log("Nexus Sprint L2 inert call/message intent contract QA passed");
