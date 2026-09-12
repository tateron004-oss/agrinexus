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

const docName = "NEXUS_SPRINT_K2_INERT_CONTACT_PROVIDER_IDENTITY_CONTRACT.md";
const moduleName = "nexus-contact-provider-identity-contract.js";
const qaName = "nexus-sprint-k2-inert-contact-provider-identity-contract-qa.js";

assert(exists("docs", docName), "K2 doc must exist.");
assert(exists("public", moduleName), "K2 contract module must exist.");
assert(exists("scripts", qaName), "K2 QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contract = require("../public/nexus-contact-provider-identity-contract.js");

assertIncludes(doc, [
  "Sprint K2",
  "Inert Contact/Provider Identity Contract",
  "does not add runtime UI",
  "live contact lookup",
  "live provider lookup",
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
  "identityResolutionOnly: true",
  "approvalIntentOnly: true",
  "finalExecutionGateRequired: true",
  "executionAuthority: false",
  "providerDispatchAllowed: false",
  "providerHandoffAllowed: false",
  "communicationAllowed: false",
  "networkAllowed: false",
  "storageWriteAllowed: false",
  "backendWriteAllowed: false",
  "public/index.html",
  "public/app.js",
  "server.js"
], "K2 doc");

assertIncludes(moduleSource, [
  "SUPPORTED_ENTITY_TYPES",
  "SUPPORTED_CONFIDENCE_TIERS",
  "REQUIRED_IDENTITY_FIELDS",
  "BLOCKED_IDENTITY_CHANNELS",
  "validateContactProviderIdentityCandidate",
  "createContactProviderIdentityCandidate"
], "K2 module");

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
].forEach(term => assert(!moduleSource.includes(term), `K2 contract must not include runtime side-effect API: ${term}`));

[
  "contact",
  "provider",
  "organization",
  "role",
  "marketplace-party",
  "healthcare-provider",
  "pharmacy-provider",
  "emergency-contact",
  "transportation-provider",
  "unknown"
].forEach(type => assert(contract.SUPPORTED_ENTITY_TYPES.includes(type), `K2 supported entity types must include ${type}`));

[
  "identityCandidateId",
  "sourceSurface",
  "requestedActionType",
  "entityType",
  "displayName",
  "candidateSummary",
  "evidenceSummary",
  "confidenceTier",
  "riskTier",
  "language",
  "identityResolutionOnly",
  "approvalIntentOnly",
  "finalExecutionGateRequired",
  "executionAuthority",
  "providerDispatchAllowed",
  "providerHandoffAllowed",
  "communicationAllowed",
  "externalNavigationAllowed",
  "nativeBridgeAllowed",
  "networkAllowed",
  "storageWriteAllowed",
  "backendWriteAllowed",
  "blockedIdentityChannels"
].forEach(field => assert(contract.REQUIRED_IDENTITY_FIELDS.includes(field), `K2 required fields must include ${field}`));

[
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
].forEach(channel => assert(contract.BLOCKED_IDENTITY_CHANNELS.includes(channel), `K2 blocked channels must include ${channel}`));

const complete = contract.createContactProviderIdentityCandidate({
  identityCandidateId: "candidate-provider-clinic-a",
  sourceSurface: "local-safe-fixture",
  requestedActionType: "provider-contact-preparation",
  entityType: "provider",
  displayName: "Clinic A",
  candidateSummary: "Possible provider candidate shown for review only",
  evidenceSummary: "Matched user phrase to visible provider label",
  confidenceTier: "medium",
  riskTier: "high",
  language: "en",
  ambiguityState: "single-candidate",
  missingInformationState: "none",
  permissionState: "not-required",
  consentState: "not-required",
  auditState: "ready",
  finalExecutionGateState: "ready",
  limitations: "Identity preview only; no provider is contacted"
});

assert.equal(complete.validation.ok, true, "Complete K2 identity candidate should validate.");
assert.equal(complete.validation.identityPreviewAllowed, true, "Complete K2 identity candidate may be previewed.");
assert.equal(complete.validation.executionAllowed, false, "K2 identity candidate must not allow execution.");
assert.equal(complete.candidate.executionAuthority, false, "K2 factory must force executionAuthority false.");
assert.equal(complete.candidate.providerDispatchAllowed, false, "K2 factory must force providerDispatchAllowed false.");
assert.equal(complete.candidate.providerHandoffAllowed, false, "K2 factory must force providerHandoffAllowed false.");
assert.equal(complete.candidate.communicationAllowed, false, "K2 factory must force communicationAllowed false.");
assert.equal(complete.candidate.networkAllowed, false, "K2 factory must force networkAllowed false.");
assert.equal(complete.candidate.storageWriteAllowed, false, "K2 factory must force storageWriteAllowed false.");
assert.equal(complete.candidate.backendWriteAllowed, false, "K2 factory must force backendWriteAllowed false.");

[
  { label: "unsupported entity", overrides: { entityType: "bank-account" } },
  { label: "unsupported confidence", overrides: { confidenceTier: "certain" } },
  { label: "missing permission", overrides: { permissionState: "missing" } },
  { label: "missing consent", overrides: { consentState: "missing" } },
  { label: "missing audit", overrides: { auditState: "missing" } },
  { label: "missing final gate", overrides: { finalExecutionGateState: "missing" } },
  { label: "execution escalation", overrides: { executionAuthority: true } },
  { label: "provider dispatch escalation", overrides: { providerDispatchAllowed: true } },
  { label: "communication escalation", overrides: { communicationAllowed: true } },
  { label: "network escalation", overrides: { networkAllowed: true } },
  { label: "incomplete blocked channels", overrides: { blockedIdentityChannels: ["call"] } }
].forEach(testCase => {
  const candidate = Object.assign({}, complete.candidate, testCase.overrides);
  const result = contract.validateContactProviderIdentityCandidate(candidate);
  assert.equal(result.ok, false, `K2 must fail closed for ${testCase.label}.`);
  assert.equal(result.executionAllowed, false, `K2 must never allow execution for ${testCase.label}.`);
});

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(moduleName), `${label} must not load the K2 contract module.`);
});

const alias = "qa:nexus-sprint-k2-inert-contact-provider-identity-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint K2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-k1-contact-provider-identity-product-boundary-qa.js"), "K2 requires K1 QA to remain in qa-suite.");

console.log("[nexus-sprint-k2-inert-contact-provider-identity-contract-qa] passed");
