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

const docName = "NEXUS_SPRINT_K8_CONTACT_PROVIDER_IDENTITY_CLOSEOUT_AND_SPRINT_L_READINESS.md";
const qaName = "nexus-sprint-k8-contact-provider-identity-closeout-and-sprint-l-readiness-qa.js";

assert(exists("docs", docName), "K8 closeout doc must exist.");
assert(exists("scripts", qaName), "K8 QA must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint K8",
  "Contact/Provider Identity Closeout and Sprint L Readiness",
  "K1: Contact and Provider Identity Product Boundary",
  "K2: Inert Contact/Provider Identity Contract",
  "K3: Fixture-Only Contact/Provider Harness",
  "K4: Identity Confidence, Risk, and Evidence Mapping",
  "K5: Flag-Off Identity Resolution Regression Guard",
  "K6: Flag-Gated Identity Resolution Preview",
  "K7: Standard User Browser Validation for Identity Resolution Preview",
  "no Standard User visible identity preview",
  "no provider lookup",
  "no contact lookup",
  "no provider dispatch",
  "no provider handoff",
  "no calls or messages",
  "no WhatsApp",
  "Telegram",
  "SMS",
  "email",
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
  "native bridge",
  "`public/index.html`",
  "`public/app.js`",
  "`server.js`",
  "executionAuthority: false",
  "executionAllowed: false",
  "providerDispatchAllowed: false",
  "providerHandoffAllowed: false",
  "communicationAllowed: false",
  "finalExecutionGateRequired: true",
  "Sprint L"
], "K8 doc");

[
  "NEXUS_SPRINT_K1_CONTACT_PROVIDER_IDENTITY_PRODUCT_BOUNDARY.md",
  "NEXUS_SPRINT_K2_INERT_CONTACT_PROVIDER_IDENTITY_CONTRACT.md",
  "NEXUS_SPRINT_K3_FIXTURE_ONLY_CONTACT_PROVIDER_HARNESS.md",
  "NEXUS_SPRINT_K4_IDENTITY_CONFIDENCE_RISK_EVIDENCE_MAPPING.md",
  "NEXUS_SPRINT_K5_FLAG_OFF_IDENTITY_RESOLUTION_REGRESSION_GUARD.md",
  "NEXUS_SPRINT_K6_FLAG_GATED_IDENTITY_RESOLUTION_PREVIEW.md",
  "NEXUS_SPRINT_K7_STANDARD_USER_BROWSER_VALIDATION_FOR_IDENTITY_RESOLUTION_PREVIEW.md",
  docName
].forEach(name => assert(exists("docs", name), `${name} must exist.`));

[
  "nexus-contact-provider-identity-contract.js",
  "nexus-contact-provider-identity-evidence-mapper.js",
  "nexus-contact-provider-identity-flag-guard.js",
  "nexus-contact-provider-identity-preview.js"
].forEach(name => assert(exists("public", name), `${name} must exist.`));

[
  "nexus-sprint-k1-contact-provider-identity-product-boundary-qa.js",
  "nexus-sprint-k2-inert-contact-provider-identity-contract-qa.js",
  "nexus-sprint-k3-contact-provider-identity-harness-qa.js",
  "nexus-sprint-k4-identity-confidence-risk-evidence-mapping-qa.js",
  "nexus-sprint-k5-flag-off-identity-resolution-regression-guard-qa.js",
  "nexus-sprint-k6-flag-gated-identity-resolution-preview-qa.js",
  "nexus-sprint-k7-standard-user-browser-validation-for-identity-resolution-preview-qa.js",
  qaName
].forEach(name => assert(exists("scripts", name), `${name} must exist.`));

const contract = require("../public/nexus-contact-provider-identity-contract.js");
const mapper = require("../public/nexus-contact-provider-identity-evidence-mapper.js");
const guard = require("../public/nexus-contact-provider-identity-flag-guard.js");
const preview = require("../public/nexus-contact-provider-identity-preview.js");
const harness = require("./nexus-sprint-k3-contact-provider-identity-harness.js");

assert.equal(typeof contract.validateContactProviderIdentityCandidate, "function", "K2 contract must remain callable.");
assert.equal(typeof harness.runContactProviderIdentityFixtures, "function", "K3 harness must remain callable.");
assert.equal(typeof mapper.mapIdentityConfidenceRiskEvidence, "function", "K4 mapper must remain callable.");
assert.equal(typeof guard.resolveContactProviderIdentityPreviewFlag, "function", "K5 guard must remain callable.");
assert.equal(typeof preview.createContactProviderIdentityPreviewModel, "function", "K6 preview must remain callable.");

const fixtureResults = harness.runContactProviderIdentityFixtures();
assert(fixtureResults.length >= 26, "K3 fixture coverage must remain broad.");
fixtureResults.forEach(result => {
  assert.equal(result.executionAllowed, false, `${result.fixtureId} must remain non-executing.`);
});

const mapped = mapper.mapIdentityConfidenceRiskEvidence({
  entityType: "contact",
  displayName: "John",
  requestedActionType: "call",
  exactVisibleLabel: true
});
assert.equal(mapped.validation.ok, true, "K4 mapped candidate must validate.");
assert.equal(mapped.validation.executionAllowed, false, "K4 mapped candidate must never execute.");

const flagOff = preview.createContactProviderIdentityPreviewModel();
assert.equal(flagOff.visible, false, "K6 preview must be hidden by default.");
assert.equal(flagOff.executionAllowed, false, "K6 flag-off preview must not execute.");

const flagOnFixture = preview.createContactProviderIdentityPreviewModel({
  enableContactProviderIdentityPreview: true,
  runtimeSurface: "test-fixture",
  context: "qa-fixture",
  identity: { entityType: "provider", displayName: "Clinic Desk", requestedActionType: "provider-contact", partialVisibleEvidence: true }
});
assert.equal(flagOnFixture.visible, true, "K6 fixture-only preview may be visible in QA context.");
assert.equal(flagOnFixture.executionAllowed, false, "K6 fixture-only preview must not execute.");
assert.equal(flagOnFixture.providerHandoffAllowed, false, "K6 fixture-only preview must not hand off.");
assert.equal(flagOnFixture.communicationAllowed, false, "K6 fixture-only preview must not communicate.");

[
  "nexus-contact-provider-identity-evidence-mapper.js",
  "nexus-contact-provider-identity-flag-guard.js",
  "nexus-contact-provider-identity-preview.js"
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
  "appendFile"
];

[
  "public/nexus-contact-provider-identity-evidence-mapper.js",
  "public/nexus-contact-provider-identity-flag-guard.js",
  "public/nexus-contact-provider-identity-preview.js",
  "scripts/nexus-sprint-k3-contact-provider-identity-harness.js"
].forEach(relativePath => {
  const source = read(...relativePath.split("/"));
  unsafeTerms.forEach(term => assert(!source.includes(term), `${relativePath} must not include side-effect API: ${term}`));
});

[
  "qa:nexus-sprint-k1-contact-provider-identity-product-boundary",
  "qa:nexus-sprint-k2-inert-contact-provider-identity-contract",
  "qa:nexus-sprint-k3-contact-provider-identity-harness",
  "qa:nexus-sprint-k4-identity-confidence-risk-evidence-mapping",
  "qa:nexus-sprint-k5-flag-off-identity-resolution-regression-guard",
  "qa:nexus-sprint-k6-flag-gated-identity-resolution-preview",
  "qa:nexus-sprint-k7-standard-user-browser-validation-for-identity-resolution-preview",
  "qa:nexus-sprint-k8-contact-provider-identity-closeout-and-sprint-l-readiness"
].forEach(alias => assert(pkg.scripts && pkg.scripts[alias], `${alias} package script must exist.`));

[
  "scripts/nexus-sprint-k1-contact-provider-identity-product-boundary-qa.js",
  "scripts/nexus-sprint-k2-inert-contact-provider-identity-contract-qa.js",
  "scripts/nexus-sprint-k3-contact-provider-identity-harness-qa.js",
  "scripts/nexus-sprint-k4-identity-confidence-risk-evidence-mapping-qa.js",
  "scripts/nexus-sprint-k5-flag-off-identity-resolution-regression-guard-qa.js",
  "scripts/nexus-sprint-k6-flag-gated-identity-resolution-preview-qa.js",
  "scripts/nexus-sprint-k7-standard-user-browser-validation-for-identity-resolution-preview-qa.js",
  `scripts/${qaName}`
].forEach(script => assert(qaSuite.includes(script), `qa-suite must include ${script}.`));

console.log("[nexus-sprint-k8-contact-provider-identity-closeout-and-sprint-l-readiness-qa] passed");
