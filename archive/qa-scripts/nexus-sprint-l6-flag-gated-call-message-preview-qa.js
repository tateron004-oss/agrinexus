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

const docName = "NEXUS_SPRINT_L6_FLAG_GATED_CALL_MESSAGE_PREVIEW.md";
const moduleName = "nexus-call-message-preview.js";
const qaName = "nexus-sprint-l6-flag-gated-call-message-preview-qa.js";

assert(exists("docs", docName), "L6 doc must exist.");
assert(exists("public", moduleName), "L6 preview module must exist.");
assert(exists("scripts", qaName), "L6 QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const previewModule = require("../public/nexus-call-message-preview.js");

assertIncludes(doc, [
  "Sprint L6",
  "Flag-Gated Call/Message Preview",
  "does not add Standard User runtime UI",
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
  "local-safe-fixture",
  "executionAuthority",
  "executionAllowed",
  "Standard User context always returns hidden preview state",
  "controls",
  "links",
  "eventHandlers",
  "public/index.html",
  "public/app.js",
  "server.js"
], "L6 doc");

assertIncludes(moduleSource, [
  "hiddenPreview",
  "buildCallMessagePreview",
  "controls: Object.freeze([])",
  "links: Object.freeze([])",
  "eventHandlers: Object.freeze([])",
  "executionAllowed: false"
], "L6 module");

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
  "appendFile",
  "addEventListener",
  "createElement",
  "innerHTML"
].forEach(term => assert(!moduleSource.includes(term), `L6 module must not include runtime side-effect or DOM API: ${term}`));

const input = {
  communicationIntentId: "intent-l6-call-preview",
  sourceSurface: "local-safe-fixture",
  communicationType: "call",
  recipientIdentityResolutionId: "identity-visible-recipient",
  recipientDisplayName: "Visible Recipient",
  recipientChannelType: "phone-call",
  recipientChannelValue: "visible-number-not-dialed",
  messageDraft: "",
  callPurpose: "Ask about workforce training options",
  language: "en"
};

const defaultResult = previewModule.buildCallMessagePreview(input);
assert.equal(defaultResult.preview.visible, false, "L6 default preview must be hidden.");
assert.equal(defaultResult.preview.executionAllowed, false, "L6 default preview must not allow execution.");

const standardUserResult = previewModule.buildCallMessagePreview(input, {
  context: "standard-user",
  enableCallMessagePreview: true
});
assert.equal(standardUserResult.preview.visible, false, "L6 Standard User preview must remain hidden even with explicit flag.");

const fixtureResult = previewModule.buildCallMessagePreview(input, {
  context: "local-safe-fixture",
  enableCallMessagePreview: true
});
assert.equal(fixtureResult.preview.visible, true, "L6 local-safe fixture may return visible preview metadata.");
assert.equal(fixtureResult.preview.reviewOnly, true, "L6 fixture preview must be review-only.");
assert.equal(fixtureResult.preview.executionAllowed, false, "L6 fixture preview must not allow execution.");
assert.equal(fixtureResult.preview.providerHandoffAllowed, false, "L6 fixture preview must not allow provider handoff.");
assert.equal(fixtureResult.preview.externalNavigationAllowed, false, "L6 fixture preview must not allow external navigation.");
assert.equal(fixtureResult.preview.nativeBridgeAllowed, false, "L6 fixture preview must not allow native bridge.");
assert.equal(fixtureResult.preview.networkAllowed, false, "L6 fixture preview must not allow network.");
assert.equal(fixtureResult.preview.storageWriteAllowed, false, "L6 fixture preview must not allow storage writes.");
assert.equal(fixtureResult.preview.backendWriteAllowed, false, "L6 fixture preview must not allow backend writes.");
assert.deepEqual(fixtureResult.preview.controls, [], "L6 fixture preview must not expose controls.");
assert.deepEqual(fixtureResult.preview.links, [], "L6 fixture preview must not expose links.");
assert.deepEqual(fixtureResult.preview.eventHandlers, [], "L6 fixture preview must not expose event handlers.");

const emergencyResult = previewModule.buildCallMessagePreview(Object.assign({}, input, {
  recipientDisplayName: "Emergency Services",
  callPurpose: "Emergency dispatch request"
}), {
  context: "local-safe-fixture",
  enableCallMessagePreview: true
});
assert.equal(emergencyResult.preview.visible, true, "L6 restricted fixture may still be represented as review-only metadata.");
assert.equal(emergencyResult.preview.riskTier, "restricted", "L6 emergency fixture must be restricted.");
assert.equal(emergencyResult.preview.executionAllowed, false, "L6 restricted fixture must not allow execution.");

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(moduleName), `${label} must not load the L6 preview module.`);
});

const alias = "qa:nexus-sprint-l6-flag-gated-call-message-preview";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint L6 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-l5-flag-off-calls-messaging-regression-guard-qa.js"), "L6 requires L5 QA to remain in qa-suite.");

console.log("[nexus-sprint-l6-flag-gated-call-message-preview-qa] passed");
