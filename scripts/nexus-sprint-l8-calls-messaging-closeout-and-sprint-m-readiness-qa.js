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

const docName = "NEXUS_SPRINT_L8_CALLS_MESSAGING_CLOSEOUT_AND_SPRINT_M_READINESS.md";
const qaName = "nexus-sprint-l8-calls-messaging-closeout-and-sprint-m-readiness-qa.js";

assert(exists("docs", docName), "L8 closeout doc must exist.");
assert(exists("scripts", qaName), "L8 QA must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint L8",
  "Calls and Messaging Closeout and Sprint M Readiness",
  "L1: Calls and Messaging Product Boundary",
  "L2: Inert Call/Message Intent Contract",
  "L3: Fixture-Only Call/Message Harness",
  "L4: Recipient, Channel, Risk, and Evidence Mapping",
  "L5: Flag-Off Calls/Messaging Regression Guard",
  "L6: Flag-Gated Call/Message Preview",
  "L7: Standard User Browser Validation for Call/Message Preview",
  "no Standard User visible call/message preview card",
  "no provider dispatch",
  "no provider handoff",
  "no calls",
  "no messages",
  "no WhatsApp",
  "no Telegram",
  "no SMS",
  "no email",
  "no phone-provider handoff",
  "no native bridge dispatch",
  "no external navigation",
  "no message send",
  "no background communication",
  "medical",
  "pharmacy",
  "emergency",
  "payment",
  "marketplace",
  "camera",
  "location",
  "backend writes",
  "storage writes",
  "network calls",
  "pending real-world actions",
  "`public/index.html`",
  "`public/app.js`",
  "`server.js`",
  "executionAllowed: false",
  "providerHandoffAllowed: false",
  "externalNavigationAllowed: false",
  "nativeBridgeAllowed: false",
  "networkAllowed: false",
  "storageWriteAllowed: false",
  "backendWriteAllowed: false",
  "controls: []",
  "links: []",
  "eventHandlers: []",
  "Sprint M"
], "L8 doc");

[
  "NEXUS_SPRINT_L1_CALLS_MESSAGING_PRODUCT_BOUNDARY.md",
  "NEXUS_SPRINT_L2_INERT_CALL_MESSAGE_INTENT_CONTRACT.md",
  "NEXUS_SPRINT_L3_FIXTURE_ONLY_CALL_MESSAGE_HARNESS.md",
  "NEXUS_SPRINT_L4_RECIPIENT_CHANNEL_RISK_EVIDENCE_MAPPING.md",
  "NEXUS_SPRINT_L5_FLAG_OFF_CALLS_MESSAGING_REGRESSION_GUARD.md",
  "NEXUS_SPRINT_L6_FLAG_GATED_CALL_MESSAGE_PREVIEW.md",
  "NEXUS_SPRINT_L7_STANDARD_USER_BROWSER_VALIDATION_FOR_CALL_MESSAGE_PREVIEW.md",
  docName
].forEach(name => assert(exists("docs", name), `${name} must exist.`));

[
  "nexus-call-message-intent-contract.js",
  "nexus-call-message-risk-evidence-mapping.js",
  "nexus-call-message-preview-flag-guard.js",
  "nexus-call-message-preview.js"
].forEach(name => assert(exists("public", name), `${name} must exist.`));

[
  "nexus-sprint-l1-calls-messaging-product-boundary-qa.js",
  "nexus-sprint-l2-inert-call-message-intent-contract-qa.js",
  "nexus-sprint-l3-call-message-intent-harness-qa.js",
  "nexus-sprint-l4-recipient-channel-risk-evidence-mapping-qa.js",
  "nexus-sprint-l5-flag-off-calls-messaging-regression-guard-qa.js",
  "nexus-sprint-l6-flag-gated-call-message-preview-qa.js",
  "nexus-sprint-l7-standard-user-browser-validation-for-call-message-preview-qa.js",
  qaName
].forEach(name => assert(exists("scripts", name), `${name} must exist.`));

const contract = require("../public/nexus-call-message-intent-contract.js");
const mapper = require("../public/nexus-call-message-risk-evidence-mapping.js");
const guard = require("../public/nexus-call-message-preview-flag-guard.js");
const preview = require("../public/nexus-call-message-preview.js");
const harness = require("./nexus-sprint-l3-call-message-intent-harness.js");

assert.equal(typeof contract.validateCallMessageIntent, "function", "L2 contract must remain callable.");
assert.equal(typeof harness.runCallMessageIntentFixtures, "function", "L3 harness must remain callable.");
assert.equal(typeof mapper.mapCallMessageRiskEvidence, "function", "L4 mapper must remain callable.");
assert.equal(typeof guard.isCallMessagePreviewAllowed, "function", "L5 guard must remain callable.");
assert.equal(typeof preview.buildCallMessagePreview, "function", "L6 preview must remain callable.");

const fixtureResults = harness.runCallMessageIntentFixtures();
assert(fixtureResults.length >= 8, "L3 fixture coverage must remain broad.");
[
  "call-saved-contact-intent",
  "sms-user-provided-contact-intent",
  "whatsapp-agriculture-provider-message-intent",
  "telegram-training-provider-message-intent",
  "email-workforce-provider-intent",
  "blocked-emergency-call-attempt",
  "blocked-payment-message-attempt",
  "ambiguous-recipient-requiring-clarification"
].forEach(fixtureId => {
  assert(fixtureResults.some(result => result.fixtureId === fixtureId), `L3 fixture must remain present: ${fixtureId}`);
});
fixtureResults.forEach(result => {
  assert.equal(result.executionAllowed, false, `${result.fixtureId} must remain non-executing.`);
  assert.notEqual(result.providerHandoffAllowed, true, `${result.fixtureId} must not hand off to providers.`);
});

const mapped = mapper.mapCallMessageRiskEvidence({
  communicationIntentId: "intent-l8-provider-call",
  sourceSurface: "local-safe-fixture",
  communicationType: "call",
  recipientIdentityResolutionId: "recipient-visible",
  recipientDisplayName: "Visible Provider",
  recipientChannelType: "phone-call",
  recipientChannelValue: "visible-number-not-dialed",
  messageDraft: "",
  callPurpose: "Ask about appointment options",
  language: "en"
});
assert.equal(mapped.validation.ok, true, "L4 mapped intent must validate.");
assert.equal(mapped.validation.executionAllowed, false, "L4 mapped intent must never execute.");

const flagOff = preview.buildCallMessagePreview(mapped.intent);
assert.equal(flagOff.preview.visible, false, "L6 preview must be hidden by default.");
assert.equal(flagOff.preview.executionAllowed, false, "L6 flag-off preview must not execute.");

const standardUserPreview = preview.buildCallMessagePreview(mapped.intent, {
  context: "standard-user",
  enableCallMessagePreview: true
});
assert.equal(standardUserPreview.preview.visible, false, "L6 Standard User preview must remain hidden.");

const fixturePreview = preview.buildCallMessagePreview(mapped.intent, {
  context: "local-safe-fixture",
  enableCallMessagePreview: true
});
assert.equal(fixturePreview.preview.visible, true, "L6 fixture-only preview may be visible in QA context.");
assert.equal(fixturePreview.preview.executionAllowed, false, "L6 fixture-only preview must not execute.");
assert.equal(fixturePreview.preview.providerHandoffAllowed, false, "L6 fixture-only preview must not hand off.");
assert.equal(fixturePreview.preview.externalNavigationAllowed, false, "L6 fixture-only preview must not navigate externally.");
assert.equal(fixturePreview.preview.nativeBridgeAllowed, false, "L6 fixture-only preview must not use native bridge.");
assert.equal(fixturePreview.preview.networkAllowed, false, "L6 fixture-only preview must not use network.");
assert.equal(fixturePreview.preview.storageWriteAllowed, false, "L6 fixture-only preview must not write storage.");
assert.equal(fixturePreview.preview.backendWriteAllowed, false, "L6 fixture-only preview must not write backend.");
assert.deepEqual(fixturePreview.preview.controls, [], "L6 fixture-only preview must not expose controls.");
assert.deepEqual(fixturePreview.preview.links, [], "L6 fixture-only preview must not expose links.");
assert.deepEqual(fixturePreview.preview.eventHandlers, [], "L6 fixture-only preview must not expose handlers.");

[
  "nexus-call-message-intent-contract.js",
  "nexus-call-message-risk-evidence-mapping.js",
  "nexus-call-message-preview-flag-guard.js",
  "nexus-call-message-preview.js"
].forEach(moduleName => {
  [index, app, server].forEach((source, indexNumber) => {
    const label = ["index.html", "app.js", "server.js"][indexNumber];
    assert(!source.includes(moduleName), `${label} must not load ${moduleName}.`);
  });
});

const unsafeTerms = [
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
];

[
  "public/nexus-call-message-intent-contract.js",
  "public/nexus-call-message-risk-evidence-mapping.js",
  "public/nexus-call-message-preview-flag-guard.js",
  "public/nexus-call-message-preview.js",
  "scripts/nexus-sprint-l3-call-message-intent-harness.js"
].forEach(relativePath => {
  const source = read(...relativePath.split("/"));
  unsafeTerms.forEach(term => assert(!source.includes(term), `${relativePath} must not include side-effect API: ${term}`));
});

[
  "qa:nexus-sprint-l1-calls-messaging-product-boundary",
  "qa:nexus-sprint-l2-inert-call-message-intent-contract",
  "qa:nexus-sprint-l3-call-message-intent-harness",
  "qa:nexus-sprint-l4-recipient-channel-risk-evidence-mapping",
  "qa:nexus-sprint-l5-flag-off-calls-messaging-regression-guard",
  "qa:nexus-sprint-l6-flag-gated-call-message-preview",
  "qa:nexus-sprint-l7-standard-user-browser-validation-for-call-message-preview",
  "qa:nexus-sprint-l8-calls-messaging-closeout-and-sprint-m-readiness"
].forEach(alias => assert(pkg.scripts && pkg.scripts[alias], `${alias} package script must exist.`));

[
  "scripts/nexus-sprint-l1-calls-messaging-product-boundary-qa.js",
  "scripts/nexus-sprint-l2-inert-call-message-intent-contract-qa.js",
  "scripts/nexus-sprint-l3-call-message-intent-harness-qa.js",
  "scripts/nexus-sprint-l4-recipient-channel-risk-evidence-mapping-qa.js",
  "scripts/nexus-sprint-l5-flag-off-calls-messaging-regression-guard-qa.js",
  "scripts/nexus-sprint-l6-flag-gated-call-message-preview-qa.js",
  "scripts/nexus-sprint-l7-standard-user-browser-validation-for-call-message-preview-qa.js",
  `scripts/${qaName}`
].forEach(script => assert(qaSuite.includes(script), `qa-suite must include ${script}.`));

console.log("[nexus-sprint-l8-calls-messaging-closeout-and-sprint-m-readiness-qa] passed");
