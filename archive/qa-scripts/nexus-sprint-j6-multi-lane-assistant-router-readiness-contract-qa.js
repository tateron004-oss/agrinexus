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

const docName = "NEXUS_SPRINT_J6_MULTI_LANE_ASSISTANT_ROUTER_READINESS_CONTRACT.md";
const moduleName = "nexus-multi-lane-assistant-router-readiness-contract.js";
const qaName = "nexus-sprint-j6-multi-lane-assistant-router-readiness-contract-qa.js";

assert(exists("docs", docName), "Sprint J6 doc must exist.");
assert(exists("public", moduleName), "Sprint J6 contract module must exist.");
assert(exists("scripts", qaName), "Sprint J6 QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contract = require("../public/nexus-multi-lane-assistant-router-readiness-contract.js");

assertIncludes(doc, [
  "Sprint J6",
  "inert contract",
  "does not add runtime UI",
  "active routing",
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
  "agriculture-support",
  "workforce-support",
  "learning-support",
  "marketplace-review",
  "health-access-info",
  "communications-preparation",
  "provider-handoff-readiness",
  "real-world-action-pilot-readiness",
  "map-location-permission-info",
  "emergency-boundary-info",
  "routerReadinessOnly: true",
  "routingAuthority: false",
  "executionAuthority: false",
  "runtimeRoutingAllowed: false",
  "providerDispatchAllowed: false",
  "providerHandoffAllowed: false",
  "externalNavigationAllowed: false",
  "nativeBridgeAllowed: false",
  "networkAllowed: false",
  "storageWriteAllowed: false",
  "backendWriteAllowed: false",
  "runtime-routing",
  "tool-selection-authority",
  "public/index.html",
  "public/app.js",
  "server.js",
  "no-routing and no-execution boundaries"
], "J6 doc");

assertIncludes(moduleSource, [
  "SUPPORTED_ROUTER_LANES",
  "REQUIRED_ROUTER_READINESS_FIELDS",
  "BLOCKED_ROUTER_CHANNELS",
  "validateMultiLaneAssistantRouterReadiness",
  "createMultiLaneAssistantRouterReadiness",
  "routerReadinessOnly",
  "routingAuthority",
  "executionAuthority",
  "runtimeRoutingAllowed",
  "providerDispatchAllowed",
  "providerHandoffAllowed",
  "externalNavigationAllowed",
  "nativeBridgeAllowed",
  "networkAllowed",
  "storageWriteAllowed",
  "backendWriteAllowed"
], "J6 module");

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
].forEach(term => assert(!moduleSource.includes(term), `J6 contract must not include runtime side-effect API: ${term}`));

[
  "agriculture-support",
  "workforce-support",
  "learning-support",
  "marketplace-review",
  "health-access-info",
  "communications-preparation",
  "provider-handoff-readiness",
  "real-world-action-pilot-readiness",
  "map-location-permission-info",
  "emergency-boundary-info"
].forEach(lane => assert(contract.SUPPORTED_ROUTER_LANES.includes(lane), `J6 supported lanes must include ${lane}`));

[
  "routerReadinessId",
  "routerName",
  "sourceSurface",
  "inputSummary",
  "primaryLane",
  "candidateLanes",
  "riskTier",
  "language",
  "intentConfidenceState",
  "policyState",
  "permissionState",
  "consentState",
  "auditState",
  "finalGateState",
  "dryRunState",
  "fallbackState",
  "routerReadinessOnly",
  "routingAuthority",
  "executionAuthority",
  "runtimeRoutingAllowed",
  "providerDispatchAllowed",
  "providerHandoffAllowed",
  "externalNavigationAllowed",
  "nativeBridgeAllowed",
  "networkAllowed",
  "storageWriteAllowed",
  "backendWriteAllowed",
  "blockedRouterChannels",
  "limitations"
].forEach(field => assert(contract.REQUIRED_ROUTER_READINESS_FIELDS.includes(field), `J6 required fields must include ${field}`));

[
  "runtime-routing",
  "tool-selection-authority",
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
].forEach(channel => assert(contract.BLOCKED_ROUTER_CHANNELS.includes(channel), `J6 blocked channels must include ${channel}`));

const complete = contract.createMultiLaneAssistantRouterReadiness({
  routerReadinessId: "multi-lane-router-readiness-fixture",
  routerName: "Multi-Lane Assistant Router Readiness",
  sourceSurface: "local-safe-fixture",
  inputSummary: "Review a user request without routing it live",
  primaryLane: "agriculture-support",
  candidateLanes: ["agriculture-support", "learning-support"],
  riskTier: "low",
  language: "en",
  intentConfidenceState: "ready",
  policyState: "satisfied",
  permissionState: "satisfied",
  consentState: "satisfied",
  auditState: "ready",
  finalGateState: "satisfied",
  dryRunState: "validated",
  fallbackState: "ready",
  limitations: "Readiness-only; no runtime route is selected"
});

assert.equal(complete.validation.ok, true, "Complete J6 readiness fixture should validate.");
assert.equal(complete.validation.routingAllowed, false, "Complete J6 readiness fixture must not allow runtime routing.");
assert.equal(complete.validation.executionAllowed, false, "Complete J6 readiness fixture must not allow execution.");
assert.equal(complete.candidate.routingAuthority, false, "J6 factory must force routingAuthority false.");
assert.equal(complete.candidate.executionAuthority, false, "J6 factory must force executionAuthority false.");
assert.equal(complete.candidate.runtimeRoutingAllowed, false, "J6 factory must force runtimeRoutingAllowed false.");
assert.equal(complete.candidate.providerDispatchAllowed, false, "J6 factory must force providerDispatchAllowed false.");
assert.equal(complete.candidate.providerHandoffAllowed, false, "J6 factory must force providerHandoffAllowed false.");
assert.equal(complete.candidate.externalNavigationAllowed, false, "J6 factory must force externalNavigationAllowed false.");
assert.equal(complete.candidate.nativeBridgeAllowed, false, "J6 factory must force nativeBridgeAllowed false.");
assert.equal(complete.candidate.networkAllowed, false, "J6 factory must force networkAllowed false.");
assert.equal(complete.candidate.storageWriteAllowed, false, "J6 factory must force storageWriteAllowed false.");
assert.equal(complete.candidate.backendWriteAllowed, false, "J6 factory must force backendWriteAllowed false.");

[
  { label: "unsupported primary lane", overrides: { primaryLane: "payments" } },
  { label: "unsupported candidate lane", overrides: { candidateLanes: ["agriculture-support", "payments"] } },
  { label: "missing intent confidence", overrides: { intentConfidenceState: "missing" } },
  { label: "missing policy", overrides: { policyState: "missing" } },
  { label: "missing permission", overrides: { permissionState: "missing" } },
  { label: "missing consent", overrides: { consentState: "missing" } },
  { label: "missing audit", overrides: { auditState: "missing" } },
  { label: "missing final gate", overrides: { finalGateState: "missing" } },
  { label: "missing dry-run", overrides: { dryRunState: "missing" } },
  { label: "missing fallback", overrides: { fallbackState: "missing" } },
  { label: "routing escalation", overrides: { runtimeRoutingAllowed: true } },
  { label: "execution escalation", overrides: { executionAuthority: true } },
  { label: "provider handoff escalation", overrides: { providerHandoffAllowed: true } },
  { label: "network escalation", overrides: { networkAllowed: true } },
  { label: "incomplete blocked channels", overrides: { blockedRouterChannels: ["call"] } }
].forEach(testCase => {
  const candidate = Object.assign({}, complete.candidate, testCase.overrides);
  const result = contract.validateMultiLaneAssistantRouterReadiness(candidate);
  assert.equal(result.ok, false, `J6 must fail closed for ${testCase.label}.`);
  assert.equal(result.routingAllowed, false, `J6 must never allow runtime routing for ${testCase.label}.`);
  assert.equal(result.executionAllowed, false, `J6 must never allow execution for ${testCase.label}.`);
});

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(moduleName), `${label} must not load the J6 contract module.`);
});

const alias = "qa:nexus-sprint-j6-multi-lane-assistant-router-readiness-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint J6 QA.");

console.log("[nexus-sprint-j6-multi-lane-assistant-router-readiness-contract-qa] passed");
