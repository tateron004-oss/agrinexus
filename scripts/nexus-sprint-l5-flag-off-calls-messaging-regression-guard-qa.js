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

const docName = "NEXUS_SPRINT_L5_FLAG_OFF_CALLS_MESSAGING_REGRESSION_GUARD.md";
const moduleName = "nexus-call-message-preview-flag-guard.js";
const qaName = "nexus-sprint-l5-flag-off-calls-messaging-regression-guard-qa.js";

assert(exists("docs", docName), "L5 doc must exist.");
assert(exists("public", moduleName), "L5 flag guard module must exist.");
assert(exists("scripts", qaName), "L5 QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const guard = require("../public/nexus-call-message-preview-flag-guard.js");

assertIncludes(doc, [
  "Sprint L5",
  "Flag-Off Calls/Messaging Regression Guard",
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
  "NEXUS_CALL_MESSAGE_PREVIEW_ENABLED",
  "defaults to `false`",
  "Standard User context resolves to disabled",
  "A flag alone is not execution authority",
  "local-safe-fixture",
  "executionAuthority",
  "executionAllowed",
  "public/index.html",
  "public/app.js",
  "server.js"
], "L5 doc");

assertIncludes(moduleSource, [
  "NEXUS_CALL_MESSAGE_PREVIEW_ENABLED",
  "TEST_SAFE_CONTEXT",
  "resolveCallMessagePreviewFlag",
  "isCallMessagePreviewAllowed",
  "standardUserAllowed: false",
  "executionAuthority: false"
], "L5 module");

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
].forEach(term => assert(!moduleSource.includes(term), `L5 module must not include runtime side-effect API: ${term}`));

assert.equal(guard.NEXUS_CALL_MESSAGE_PREVIEW_ENABLED, false, "L5 preview flag must default false.");
assert.equal(guard.resolveCallMessagePreviewFlag().enabled, false, "L5 missing context must resolve disabled.");
assert.equal(guard.resolveCallMessagePreviewFlag({ context: "standard-user", enableCallMessagePreview: true }).enabled, false, "L5 Standard User context must resolve disabled.");
assert.equal(guard.resolveCallMessagePreviewFlag({ context: "local-safe-fixture" }).enabled, false, "L5 test-safe context without explicit flag must resolve disabled.");

const enabledFixture = guard.resolveCallMessagePreviewFlag({
  context: "local-safe-fixture",
  enableCallMessagePreview: true
});
assert.equal(enabledFixture.enabled, true, "L5 local-safe explicit flag may enable preview metadata only.");
assert.equal(enabledFixture.executionAuthority, false, "L5 flag must grant no execution authority.");
assert.equal(enabledFixture.providerHandoffAllowed, false, "L5 flag must grant no provider handoff.");
assert.equal(enabledFixture.nativeBridgeAllowed, false, "L5 flag must grant no native bridge.");
assert.equal(enabledFixture.networkAllowed, false, "L5 flag must grant no network.");
assert.equal(enabledFixture.storageWriteAllowed, false, "L5 flag must grant no storage writes.");
assert.equal(enabledFixture.backendWriteAllowed, false, "L5 flag must grant no backend writes.");

assert.equal(guard.isCallMessagePreviewAllowed({
  context: "local-safe-fixture",
  enableCallMessagePreview: true,
  validation: { ok: true, executionAllowed: false },
  intent: { executionAuthority: false }
}), true, "L5 valid local-safe fixture may allow preview metadata.");

assert.equal(guard.isCallMessagePreviewAllowed({
  context: "local-safe-fixture",
  enableCallMessagePreview: true,
  validation: { ok: true, executionAllowed: true },
  intent: { executionAuthority: false }
}), false, "L5 must reject executable validation.");

assert.equal(guard.isCallMessagePreviewAllowed({
  context: "local-safe-fixture",
  enableCallMessagePreview: true,
  validation: { ok: true, executionAllowed: false },
  intent: { executionAuthority: true }
}), false, "L5 must reject execution authority escalation.");

assert.equal(guard.isCallMessagePreviewAllowed({
  context: "standard-user",
  enableCallMessagePreview: true,
  validation: { ok: true, executionAllowed: false },
  intent: { executionAuthority: false }
}), false, "L5 must reject Standard User preview activation.");

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(moduleName), `${label} must not load the L5 flag guard module.`);
});

const alias = "qa:nexus-sprint-l5-flag-off-calls-messaging-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint L5 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-l4-recipient-channel-risk-evidence-mapping-qa.js"), "L5 requires L4 QA to remain in qa-suite.");

console.log("[nexus-sprint-l5-flag-off-calls-messaging-regression-guard-qa] passed");
