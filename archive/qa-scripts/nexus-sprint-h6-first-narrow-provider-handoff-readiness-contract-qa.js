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

const docName = "NEXUS_SPRINT_H6_FIRST_NARROW_PROVIDER_HANDOFF_READINESS_CONTRACT.md";
const moduleName = "nexus-first-narrow-provider-handoff-readiness-contract.js";
const qaName = "nexus-sprint-h6-first-narrow-provider-handoff-readiness-contract-qa.js";

assert(exists("docs", docName), "Sprint H6 doc must exist.");
assert(exists("public", moduleName), "Sprint H6 contract module must exist.");
assert(exists("scripts", qaName), "Sprint H6 QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contract = require("../public/nexus-first-narrow-provider-handoff-readiness-contract.js");

assertIncludes(doc, [
  "Sprint H6",
  "inert readiness contract",
  "does not enable provider handoff",
  "external provider URLs",
  "call",
  "message",
  "WhatsApp",
  "Telegram",
  "SMS",
  "email",
  "schedule appointments",
  "payments",
  "share location",
  "camera or microphone",
  "medical/pharmacy/emergency",
  "marketplace transactions",
  "backend state",
  "storage",
  "network calls",
  "pending real-world actions",
  "handoffAllowed",
  "externalNavigationAllowed",
  "providerApiAllowed",
  "nativeBridgeAllowed",
  "executionAuthority",
  "blockedHandoffChannels",
  "public/index.html",
  "public/app.js",
  "server.js",
  "explicit product approval"
], "H6 doc");

[
  "REQUIRED_HANDOFF_READINESS_FIELDS",
  "BLOCKED_HANDOFF_CHANNELS",
  "validateProviderHandoffReadiness",
  "createProviderHandoffReadiness",
  "handoffAllowed: false",
  "executionAllowed: false"
].forEach(term => assert(moduleSource.includes(term), `H6 module must include ${term}`));

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
].forEach(term => assert(!moduleSource.includes(term), `H6 module must not include runtime side-effect API: ${term}`));

[
  "handoffReadinessId",
  "providerCategory",
  "providerDisplayName",
  "recipientDisplayName",
  "actionType",
  "purposeSummary",
  "riskTier",
  "sourceSurface",
  "language",
  "userApprovalState",
  "finalGateState",
  "permissionState",
  "consentState",
  "auditState",
  "providerAvailabilityState",
  "dryRunState",
  "handoffReadinessOnly",
  "handoffAllowed",
  "externalNavigationAllowed",
  "providerApiAllowed",
  "nativeBridgeAllowed",
  "networkAllowed",
  "storageWriteAllowed",
  "backendWriteAllowed",
  "executionAuthority",
  "cancelPath",
  "blockedHandoffChannels",
  "limitations"
].forEach(field => assert(contract.REQUIRED_HANDOFF_READINESS_FIELDS.includes(field), `H6 required fields must include ${field}`));

[
  "provider-handoff",
  "external-navigation",
  "provider-api",
  "native-bridge",
  "call",
  "message",
  "WhatsApp",
  "Telegram",
  "SMS",
  "email",
  "payment",
  "location",
  "camera",
  "medical",
  "pharmacy",
  "emergency",
  "appointment",
  "marketplace-transaction",
  "backend-write",
  "storage-write",
  "network-call",
  "pending-action"
].forEach(channel => assert(contract.BLOCKED_HANDOFF_CHANNELS.includes(channel), `H6 blocked channels must include ${channel}`));

const completeCandidate = contract.createProviderHandoffReadiness({
  handoffReadinessId: "handoff-provider-review",
  providerCategory: "provider-directory-contact",
  providerDisplayName: "Provider Directory Contact",
  recipientDisplayName: "Selected provider contact",
  actionType: "provider-handoff-review",
  purposeSummary: "Review a provider handoff candidate without contacting anyone",
  riskTier: "high",
  sourceSurface: "standard-user",
  language: "en",
  userApprovalState: "approved",
  finalGateState: "satisfied",
  permissionState: "satisfied",
  consentState: "satisfied",
  auditState: "ready",
  providerAvailabilityState: "available",
  dryRunState: "validated",
  cancelPath: "Cancel before handoff",
  limitations: "Readiness only; no provider is contacted"
});

assert.equal(completeCandidate.validation.ok, true, "complete H6 candidate should validate.");
assert.equal(completeCandidate.validation.handoffAllowed, false, "H6 validation must never allow handoff.");
assert.equal(completeCandidate.validation.executionAllowed, false, "H6 validation must never allow execution.");
assert.equal(completeCandidate.candidate.handoffAllowed, false, "H6 candidate must force handoffAllowed false.");
assert.equal(completeCandidate.candidate.externalNavigationAllowed, false, "H6 candidate must force externalNavigationAllowed false.");
assert.equal(completeCandidate.candidate.providerApiAllowed, false, "H6 candidate must force providerApiAllowed false.");
assert.equal(completeCandidate.candidate.nativeBridgeAllowed, false, "H6 candidate must force nativeBridgeAllowed false.");
assert.equal(completeCandidate.candidate.executionAuthority, false, "H6 candidate must force executionAuthority false.");

[
  { label: "missing final gate", patch: { finalGateState: "missing" } },
  { label: "missing permission", patch: { permissionState: "missing" } },
  { label: "missing consent", patch: { consentState: "missing" } },
  { label: "missing audit", patch: { auditState: "missing" } },
  { label: "missing provider", patch: { providerAvailabilityState: "missing" } },
  { label: "missing dry-run", patch: { dryRunState: "missing" } },
  { label: "handoff escalation", patch: { handoffAllowed: true } },
  { label: "external navigation escalation", patch: { externalNavigationAllowed: true } },
  { label: "provider api escalation", patch: { providerApiAllowed: true } },
  { label: "native bridge escalation", patch: { nativeBridgeAllowed: true } },
  { label: "incomplete blocked channels", patch: { blockedHandoffChannels: ["call"] } }
].forEach(({ label, patch }) => {
  const candidate = Object.assign({}, completeCandidate.candidate, patch);
  const validation = contract.validateProviderHandoffReadiness(candidate);
  assert.equal(validation.ok, false, `${label} must fail closed.`);
  assert.equal(validation.handoffAllowed, false, `${label} must not allow handoff.`);
  assert.equal(validation.executionAllowed, false, `${label} must not allow execution.`);
});

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(moduleName), `${label} must not load the H6 provider handoff readiness module.`);
});

const alias = "qa:nexus-sprint-h6-first-narrow-provider-handoff-readiness-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint H6 QA.");

console.log("[nexus-sprint-h6-first-narrow-provider-handoff-readiness-contract-qa] passed");
