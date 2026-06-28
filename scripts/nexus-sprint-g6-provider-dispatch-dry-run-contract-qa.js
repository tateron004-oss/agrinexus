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

const docName = "NEXUS_SPRINT_G6_PROVIDER_DISPATCH_DRY_RUN_CONTRACT.md";
const moduleName = "nexus-provider-dispatch-dry-run-contract.js";
const qaName = "nexus-sprint-g6-provider-dispatch-dry-run-contract-qa.js";

assert(exists("docs", docName), "Sprint G6 doc must exist.");
assert(exists("public", moduleName), "Sprint G6 contract module must exist.");
assert(exists("scripts", qaName), "Sprint G6 QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contract = require("../public/nexus-provider-dispatch-dry-run-contract.js");

assertIncludes(doc, [
  "Sprint G6",
  "provider dispatch dry-run contract",
  "does not dispatch providers",
  "does not call",
  "message",
  "WhatsApp",
  "Telegram",
  "SMS",
  "email",
  "process payments",
  "share location",
  "activate camera or microphone",
  "health/pharmacy/emergency",
  "backend state",
  "storage",
  "network calls",
  "pending real-world actions",
  "dry-run mode must remain explicit",
  "execution authority must remain false",
  "dispatch allowed must remain false",
  "live provider dispatch remains blocked",
  "public/index.html",
  "public/app.js",
  "server.js",
  "fixture harness",
  "explicit product approval"
], "G6 doc");

[
  "REQUIRED_DRY_RUN_FIELDS",
  "BLOCKED_DISPATCH_CHANNELS",
  "validateProviderDispatchDryRun",
  "createProviderDispatchDryRun",
  "dispatchAllowed: false",
  "executionAllowed: false"
].forEach(term => assert(moduleSource.includes(term), `G6 module must include ${term}`));

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
].forEach(term => assert(!moduleSource.includes(term), `G6 module must not include runtime side-effect API: ${term}`));

assert.equal(typeof contract.createProviderDispatchDryRun, "function", "G6 module must export createProviderDispatchDryRun.");
assert.equal(typeof contract.validateProviderDispatchDryRun, "function", "G6 module must export validateProviderDispatchDryRun.");

[
  "dryRunId",
  "providerType",
  "providerDisplayName",
  "actionType",
  "targetSummary",
  "purposeSummary",
  "riskTier",
  "finalGateId",
  "finalGateSatisfied",
  "permissionState",
  "consentState",
  "auditState",
  "providerAvailabilityState",
  "userApprovalState",
  "dryRunOnly",
  "executionAuthority",
  "dispatchAllowed",
  "networkAllowed",
  "storageWriteAllowed",
  "backendWriteAllowed",
  "reversalOrCancelPath",
  "blockedDispatchChannels",
  "limitations"
].forEach(field => assert(contract.REQUIRED_DRY_RUN_FIELDS.includes(field), `G6 required fields must include ${field}`));

[
  "provider-dispatch",
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
  "marketplace-transaction",
  "backend-write",
  "storage-write",
  "network-call",
  "pending-action"
].forEach(channel => assert(contract.BLOCKED_DISPATCH_CHANNELS.includes(channel), `G6 blocked channels must include ${channel}`));

const baseDryRun = {
  dryRunId: "dry-run-provider-review",
  providerType: "communications-provider",
  providerDisplayName: "Provider Dispatch Dry Run",
  actionType: "provider-dispatch-review",
  targetSummary: "Review a provider dispatch candidate without contacting anyone",
  purposeSummary: "Validate readiness only",
  riskTier: "high",
  finalGateId: "gate-provider-dispatch-review",
  finalGateSatisfied: true,
  permissionState: "satisfied",
  consentState: "satisfied",
  auditState: "ready",
  providerAvailabilityState: "available",
  userApprovalState: "approved",
  reversalOrCancelPath: "Cancel before dispatch",
  limitations: "Dry-run only; no provider is contacted"
};

const created = contract.createProviderDispatchDryRun(baseDryRun);
assert.equal(created.validation.ok, true, "complete G6 dry-run fixture should validate.");
assert.equal(created.validation.dispatchAllowed, false, "G6 validation must never allow dispatch.");
assert.equal(created.validation.executionAllowed, false, "G6 validation must never allow execution.");
assert.equal(created.dryRun.dryRunOnly, true, "G6 dry-run must force dryRunOnly true.");
assert.equal(created.dryRun.executionAuthority, false, "G6 dry-run must force executionAuthority false.");
assert.equal(created.dryRun.networkAllowed, false, "G6 dry-run must force networkAllowed false.");
assert.equal(created.dryRun.storageWriteAllowed, false, "G6 dry-run must force storageWriteAllowed false.");
assert.equal(created.dryRun.backendWriteAllowed, false, "G6 dry-run must force backendWriteAllowed false.");

[
  { label: "missing final gate", patch: { finalGateSatisfied: false } },
  { label: "missing permission", patch: { permissionState: "missing" } },
  { label: "missing audit", patch: { auditState: "missing" } },
  { label: "missing provider", patch: { providerAvailabilityState: "missing" } },
  { label: "execution escalation", patch: { executionAuthority: true } },
  { label: "dispatch escalation", patch: { dispatchAllowed: true } },
  { label: "network escalation", patch: { networkAllowed: true } },
  { label: "incomplete blocked channels", patch: { blockedDispatchChannels: ["call"] } }
].forEach(({ label, patch }) => {
  const candidate = Object.assign({}, baseDryRun, patch);
  const validation = contract.validateProviderDispatchDryRun(candidate);
  assert.equal(validation.ok, false, `${label} must fail closed.`);
  assert.equal(validation.dispatchAllowed, false, `${label} must not allow dispatch.`);
  assert.equal(validation.executionAllowed, false, `${label} must not allow execution.`);
});

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(moduleName), `${label} must not load the G6 provider dispatch dry-run module.`);
});

const alias = "qa:nexus-sprint-g6-provider-dispatch-dry-run-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint G6 QA.");

console.log("[nexus-sprint-g6-provider-dispatch-dry-run-contract-qa] passed");
