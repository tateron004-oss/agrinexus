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

const docName = "NEXUS_SPRINT_K6_FLAG_GATED_IDENTITY_RESOLUTION_PREVIEW.md";
const moduleName = "nexus-contact-provider-identity-preview.js";
const qaName = "nexus-sprint-k6-flag-gated-identity-resolution-preview-qa.js";

assert(exists("docs", docName), "K6 doc must exist.");
assert(exists("public", moduleName), "K6 preview module must exist.");
assert(exists("scripts", qaName), "K6 QA must exist.");

const doc = read("docs", docName);
const previewSource = read("public", moduleName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const preview = require("../public/nexus-contact-provider-identity-preview.js");

assertIncludes(doc, [
  "Sprint K6",
  "Flag-Gated Identity Resolution Preview",
  "enableContactProviderIdentityPreview",
  "visible: false",
  "executionAllowed: false",
  "fixture context",
  "review-only text fields",
  "does not include buttons",
  "links",
  "forms",
  "click handlers",
  "provider handoff",
  "permission prompts",
  "navigation",
  "storage",
  "network calls",
  "backend writes",
  "native bridge",
  "`public/index.html`",
  "`public/app.js`",
  "`server.js`",
  "executionAuthority: false",
  "providerDispatchAllowed: false",
  "providerHandoffAllowed: false",
  "communicationAllowed: false"
], "K6 doc");

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
].forEach(term => assert(!previewSource.includes(term), `K6 preview must not include runtime side-effect API: ${term}`));

assert.equal(typeof preview.createContactProviderIdentityPreviewModel, "function", "K6 preview must export model creator.");

const defaultPreview = preview.createContactProviderIdentityPreviewModel();
assert.equal(defaultPreview.visible, false, "K6 default preview must be hidden.");
assert.equal(defaultPreview.executionAllowed, false, "K6 default preview must not execute.");
assert.equal(defaultPreview.executionAuthority, false, "K6 default preview must not grant authority.");

const standardUserFlag = preview.createContactProviderIdentityPreviewModel({
  enableContactProviderIdentityPreview: true,
  runtimeSurface: "standard-user",
  context: "standard-user",
  identity: { entityType: "contact", displayName: "John", requestedActionType: "call", exactVisibleLabel: true }
});
assert.equal(standardUserFlag.visible, false, "K6 must remain hidden in Standard User runtime even with true flag.");

const flagOnContact = preview.createContactProviderIdentityPreviewModel({
  enableContactProviderIdentityPreview: true,
  runtimeSurface: "test-fixture",
  context: "qa-fixture",
  identity: { entityType: "contact", displayName: "John", requestedActionType: "call", exactVisibleLabel: true, phraseEvidence: "Call John" }
});
assert.equal(flagOnContact.visible, true, "K6 fixture preview may become visible only in test-safe context.");
assert.equal(flagOnContact.title, "Review identity match", "K6 fixture preview must use review copy.");
assert.equal(flagOnContact.subtitle.includes("No contact or provider is reached"), true, "K6 fixture preview must explain no handoff.");
assert.equal(flagOnContact.confidenceTier, "high", "K6 exact visible label should be high confidence.");
assert.equal(flagOnContact.riskTier, "high", "K6 contact/call should be high risk.");
assert.equal(flagOnContact.executionAllowed, false, "K6 flag-on fixture must not execute.");
assert.equal(flagOnContact.providerDispatchAllowed, false, "K6 flag-on fixture must not dispatch provider.");
assert.equal(flagOnContact.providerHandoffAllowed, false, "K6 flag-on fixture must not hand off provider.");
assert.equal(flagOnContact.communicationAllowed, false, "K6 flag-on fixture must not communicate.");
assert.deepEqual(flagOnContact.controls, [], "K6 preview must not expose controls.");
assert.deepEqual(flagOnContact.links, [], "K6 preview must not expose links.");
assert.deepEqual(flagOnContact.forms, [], "K6 preview must not expose forms.");
assert.deepEqual(flagOnContact.eventHandlers, [], "K6 preview must not expose event handlers.");

const restricted = preview.createContactProviderIdentityPreviewModel({
  enableContactProviderIdentityPreview: true,
  runtimeSurface: "test-fixture",
  context: "qa-fixture",
  identity: { entityType: "emergency-contact", displayName: "Emergency contact", domainContext: "emergency" }
});
assert.equal(restricted.visible, true, "K6 restricted fixture can be described for review.");
assert.equal(restricted.riskTier, "restricted", "K6 emergency contact must remain restricted.");
assert.equal(restricted.executionAllowed, false, "K6 restricted fixture must not execute.");

const missing = preview.createContactProviderIdentityPreviewModel({
  enableContactProviderIdentityPreview: true,
  runtimeSurface: "test-fixture",
  context: "qa-fixture",
  identity: { entityType: "unknown", missingInformationState: "target-missing" }
});
assert.equal(missing.visible, true, "K6 missing target can be described for clarification.");
assert.equal(missing.confidenceTier, "missing", "K6 missing target must keep missing confidence.");
assert.equal(missing.executionAllowed, false, "K6 missing target must not execute.");

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(moduleName), `${label} must not load the K6 preview module.`);
});

const alias = "qa:nexus-sprint-k6-flag-gated-identity-resolution-preview";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint K6 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-k5-flag-off-identity-resolution-regression-guard-qa.js"), "K6 requires K5 QA to remain in qa-suite.");

console.log("[nexus-sprint-k6-flag-gated-identity-resolution-preview-qa] passed");
