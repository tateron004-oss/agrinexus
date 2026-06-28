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

const docName = "NEXUS_SPRINT_I6_FIRST_REAL_WORLD_ACTION_PILOT_READINESS_CONTRACT.md";
const moduleName = "nexus-first-real-world-action-pilot-readiness-contract.js";
const qaName = "nexus-sprint-i6-first-real-world-action-pilot-readiness-contract-qa.js";

assert(exists("docs", docName), "Sprint I6 doc must exist.");
assert(exists("public", moduleName), "Sprint I6 contract module must exist.");
assert(exists("scripts", qaName), "Sprint I6 QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contract = require("../public/nexus-first-real-world-action-pilot-readiness-contract.js");

assertIncludes(doc, [
  "Sprint I6",
  "inert contract",
  "does not add runtime UI",
  "provider dispatch",
  "provider handoff",
  "external navigation",
  "calls",
  "messages",
  "WhatsApp",
  "Telegram",
  "SMS",
  "email",
  "scheduling",
  "payments",
  "purchases",
  "location sharing",
  "camera or microphone access",
  "medical/pharmacy behavior",
  "emergency routing",
  "marketplace transactions",
  "backend writes",
  "storage writes",
  "network calls",
  "pending real-world actions",
  "pilotReadinessOnly: true",
  "executionAuthority: false",
  "executionAllowed: false",
  "providerDispatchAllowed: false",
  "providerHandoffAllowed: false",
  "externalNavigationAllowed: false",
  "nativeBridgeAllowed: false",
  "networkAllowed: false",
  "storageWriteAllowed: false",
  "backendWriteAllowed: false",
  "real-world-action",
  "provider-dispatch",
  "provider-handoff",
  "native-bridge",
  "public/index.html",
  "public/app.js",
  "server.js",
  "no-execution boundary"
], "I6 doc");

assertIncludes(moduleSource, [
  "REQUIRED_PILOT_READINESS_FIELDS",
  "BLOCKED_ACTION_CHANNELS",
  "validateFirstRealWorldActionPilotReadiness",
  "createFirstRealWorldActionPilotReadiness",
  "pilotReadinessOnly",
  "executionAuthority",
  "executionAllowed",
  "providerDispatchAllowed",
  "providerHandoffAllowed",
  "externalNavigationAllowed",
  "nativeBridgeAllowed",
  "networkAllowed",
  "storageWriteAllowed",
  "backendWriteAllowed"
], "I6 module");

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
].forEach(term => assert(!moduleSource.includes(term), `I6 contract must not include runtime side-effect API: ${term}`));

[
  "pilotReadinessId",
  "pilotName",
  "actionCategory",
  "actionType",
  "targetSummary",
  "purposeSummary",
  "riskTier",
  "sourceSurface",
  "language",
  "identityState",
  "recipientResolutionState",
  "providerReadinessState",
  "finalGateState",
  "permissionState",
  "consentState",
  "auditState",
  "dryRunState",
  "reversalOrCancelState",
  "userApprovalState",
  "pilotReadinessOnly",
  "executionAuthority",
  "executionAllowed",
  "providerDispatchAllowed",
  "providerHandoffAllowed",
  "externalNavigationAllowed",
  "nativeBridgeAllowed",
  "networkAllowed",
  "storageWriteAllowed",
  "backendWriteAllowed",
  "blockedActionChannels",
  "limitations"
].forEach(field => assert(contract.REQUIRED_PILOT_READINESS_FIELDS.includes(field), `I6 required fields must include ${field}`));

[
  "real-world-action",
  "provider-dispatch",
  "provider-handoff",
  "external-navigation",
  "native-bridge",
  "call",
  "message",
  "WhatsApp",
  "Telegram",
  "SMS",
  "email",
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
].forEach(channel => assert(contract.BLOCKED_ACTION_CHANNELS.includes(channel), `I6 blocked channels must include ${channel}`));

const complete = contract.createFirstRealWorldActionPilotReadiness({
  pilotReadinessId: "pilot-readiness-fixture",
  pilotName: "First narrow real-world action pilot readiness",
  actionCategory: "provider-preparation",
  actionType: "real-world-action-readiness-review",
  targetSummary: "Verified target preview only",
  purposeSummary: "Confirm readiness without executing anything",
  riskTier: "high",
  sourceSurface: "local-safe-fixture",
  language: "en",
  identityState: "validated",
  recipientResolutionState: "resolved",
  providerReadinessState: "available",
  finalGateState: "satisfied",
  permissionState: "satisfied",
  consentState: "satisfied",
  auditState: "ready",
  dryRunState: "validated",
  reversalOrCancelState: "ready",
  userApprovalState: "approved",
  limitations: "Readiness-only; no real-world action is performed"
});

assert.equal(complete.validation.ok, true, "Complete I6 readiness fixture should validate.");
assert.equal(complete.validation.executionAllowed, false, "Complete I6 readiness fixture must not allow execution.");
assert.equal(complete.validation.pilotAllowed, false, "Complete I6 readiness fixture must not allow pilot execution.");
assert.equal(complete.candidate.executionAuthority, false, "I6 factory must force executionAuthority false.");
assert.equal(complete.candidate.providerDispatchAllowed, false, "I6 factory must force providerDispatchAllowed false.");
assert.equal(complete.candidate.providerHandoffAllowed, false, "I6 factory must force providerHandoffAllowed false.");
assert.equal(complete.candidate.externalNavigationAllowed, false, "I6 factory must force externalNavigationAllowed false.");
assert.equal(complete.candidate.nativeBridgeAllowed, false, "I6 factory must force nativeBridgeAllowed false.");
assert.equal(complete.candidate.networkAllowed, false, "I6 factory must force networkAllowed false.");
assert.equal(complete.candidate.storageWriteAllowed, false, "I6 factory must force storageWriteAllowed false.");
assert.equal(complete.candidate.backendWriteAllowed, false, "I6 factory must force backendWriteAllowed false.");

[
  { label: "missing identity", overrides: { identityState: "missing" } },
  { label: "missing recipient resolution", overrides: { recipientResolutionState: "missing" } },
  { label: "missing provider readiness", overrides: { providerReadinessState: "missing" } },
  { label: "missing final gate", overrides: { finalGateState: "missing" } },
  { label: "missing permission", overrides: { permissionState: "missing" } },
  { label: "missing consent", overrides: { consentState: "missing" } },
  { label: "missing audit", overrides: { auditState: "missing" } },
  { label: "missing dry-run", overrides: { dryRunState: "missing" } },
  { label: "missing reversal", overrides: { reversalOrCancelState: "missing" } },
  { label: "missing user approval", overrides: { userApprovalState: "missing" } },
  { label: "execution escalation", overrides: { executionAllowed: true } },
  { label: "provider dispatch escalation", overrides: { providerDispatchAllowed: true } },
  { label: "provider handoff escalation", overrides: { providerHandoffAllowed: true } },
  { label: "native bridge escalation", overrides: { nativeBridgeAllowed: true } },
  { label: "network escalation", overrides: { networkAllowed: true } },
  { label: "incomplete blocked channels", overrides: { blockedActionChannels: ["call"] } }
].forEach(testCase => {
  const candidate = Object.assign({}, complete.candidate, testCase.overrides);
  const result = contract.validateFirstRealWorldActionPilotReadiness(candidate);
  assert.equal(result.ok, false, `I6 must fail closed for ${testCase.label}.`);
  assert.equal(result.executionAllowed, false, `I6 must never allow execution for ${testCase.label}.`);
  assert.equal(result.pilotAllowed, false, `I6 must never allow pilot execution for ${testCase.label}.`);
});

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(moduleName), `${label} must not load the I6 contract module.`);
});

const alias = "qa:nexus-sprint-i6-first-real-world-action-pilot-readiness-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint I6 QA.");

console.log("[nexus-sprint-i6-first-real-world-action-pilot-readiness-contract-qa] passed");
