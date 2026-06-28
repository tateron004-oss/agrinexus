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

const docName = "NEXUS_SPRINT_N8_MARKETPLACE_REQUEST_CLOSEOUT_AND_SPRINT_O_READINESS.md";
const qaName = "nexus-sprint-n8-marketplace-request-closeout-qa.js";

assert(exists("docs", docName), "N8 closeout doc must exist.");
assert(exists("scripts", qaName), "N8 QA must exist.");

[
  "NEXUS_SPRINT_N1_MARKETPLACE_REQUEST_PRODUCT_BOUNDARY.md",
  "NEXUS_SPRINT_N2_INERT_MARKETPLACE_REQUEST_CONTRACT.md",
  "NEXUS_SPRINT_N3_FIXTURE_ONLY_MARKETPLACE_REQUEST_HARNESS.md",
  "NEXUS_SPRINT_N4_PRODUCT_SELLER_RISK_EVIDENCE_MAPPING.md",
  "NEXUS_SPRINT_N5_MARKETPLACE_REQUEST_FLAG_OFF_REGRESSION_GUARD.md",
  "NEXUS_SPRINT_N6_FLAG_GATED_MARKETPLACE_REQUEST_PREVIEW.md",
  "NEXUS_SPRINT_N7_MARKETPLACE_REQUEST_PREVIEW_BROWSER_VALIDATION.md",
  docName
].forEach(file => assert(exists("docs", file), `Sprint N doc must exist: ${file}`));

[
  "nexus-sprint-n1-marketplace-request-product-boundary-qa.js",
  "nexus-sprint-n2-inert-marketplace-request-contract-qa.js",
  "nexus-sprint-n3-marketplace-request-harness-qa.js",
  "nexus-sprint-n4-product-seller-risk-evidence-mapping-qa.js",
  "nexus-sprint-n5-flag-off-marketplace-request-regression-qa.js",
  "nexus-sprint-n6-flag-gated-marketplace-request-preview-qa.js",
  "nexus-sprint-n7-standard-user-browser-validation-for-marketplace-request-preview-qa.js",
  qaName
].forEach(file => assert(exists("scripts", file), `Sprint N QA must exist: ${file}`));

[
  "nexus-marketplace-request-contract.js",
  "nexus-marketplace-request-risk-evidence-mapping.js",
  "nexus-marketplace-request-preview-flag-guard.js",
  "nexus-marketplace-request-preview.js"
].forEach(file => assert(exists("public", file), `Sprint N public contract module must exist: ${file}`));

assert(exists("fixtures", "nexus", "marketplace-requests.json"), "Sprint N fixture file must exist.");

const doc = read("docs", docName);
[
  "N1: product boundary",
  "N2: inert marketplace request contract",
  "N3: fixture-only marketplace request harness",
  "N4: product, seller, risk, and evidence mapping",
  "N5: flag-off marketplace request regression guard",
  "N6: flag-gated marketplace request preview builder",
  "N7: Standard User browser-validation boundary",
  "Execution authority remains false",
  "Seller confirmation, user approval, final execution gate",
  "Standard User runtime remains unchanged",
  "Sprint O Readiness",
  "no execution until provider, consent, approval, audit, payment compliance, rollback, and final execution gates are complete"
].forEach(term => assert(doc.includes(term), `N8 doc must include: ${term}`));

const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const aliases = [
  "qa:nexus-sprint-n1-marketplace-request-product-boundary",
  "qa:nexus-sprint-n2-inert-marketplace-request-contract",
  "qa:nexus-sprint-n3-marketplace-request-harness",
  "qa:nexus-sprint-n4-product-seller-risk-evidence-mapping",
  "qa:nexus-sprint-n5-flag-off-marketplace-request-regression",
  "qa:nexus-sprint-n6-flag-gated-marketplace-request-preview",
  "qa:nexus-sprint-n7-standard-user-browser-validation-for-marketplace-request-preview",
  "qa:nexus-sprint-n8-marketplace-request-closeout-and-sprint-o-readiness"
];
aliases.forEach(alias => assert(pkg.scripts && pkg.scripts[alias], `${alias} package script must exist.`));

[
  "scripts/nexus-sprint-n1-marketplace-request-product-boundary-qa.js",
  "scripts/nexus-sprint-n2-inert-marketplace-request-contract-qa.js",
  "scripts/nexus-sprint-n3-marketplace-request-harness-qa.js",
  "scripts/nexus-sprint-n4-product-seller-risk-evidence-mapping-qa.js",
  "scripts/nexus-sprint-n5-flag-off-marketplace-request-regression-qa.js",
  "scripts/nexus-sprint-n6-flag-gated-marketplace-request-preview-qa.js",
  "scripts/nexus-sprint-n7-standard-user-browser-validation-for-marketplace-request-preview-qa.js",
  `scripts/${qaName}`
].forEach(script => assert(qaSuite.includes(script), `qa-suite must include ${script}.`));

const fixtures = JSON.parse(read("fixtures", "nexus", "marketplace-requests.json"));
const contract = require("../public/nexus-marketplace-request-contract.js");
const harness = require("./nexus-sprint-n3-marketplace-request-harness.js");
const mapper = require("../public/nexus-marketplace-request-risk-evidence-mapping.js");
const guard = require("../public/nexus-marketplace-request-preview-flag-guard.js");
const preview = require("../public/nexus-marketplace-request-preview.js");

fixtures.forEach(fixture => {
  const validation = contract.validateMarketplaceRequestIntent(fixture);
  assert.equal(validation.ok, true, `${fixture.fixtureId} must satisfy N2 contract.`);
  assert.equal(validation.executionAllowed, false, `${fixture.fixtureId} must not execute.`);
});

harness.runMarketplaceRequestFixtures().forEach(result => {
  assert.equal(result.ok, true, `${result.fixtureId} N3 harness result must pass.`);
  assert.equal(result.executionAllowed, false, `${result.fixtureId} N3 harness result must not execute.`);
});

const agriculture = fixtures.find(fixture => fixture.fixtureId === "agriculture-input-marketplace-request");
const payment = fixtures.find(fixture => fixture.fixtureId === "blocked-payment-checkout-marketplace-request");
const mapped = mapper.mapMarketplaceRequestRiskEvidence(agriculture);
assert.equal(mapped.validation.ok, true, "N4 mapper must validate eligible fixture.");
assert.equal(mapped.mapping.executionAllowed, false, "N4 mapper must not execute.");
assert.equal(guard.isMarketplaceRequestPreviewAllowed(mapped.request, {}).previewAllowed, false, "N5 flag guard must default hidden.");
assert.equal(guard.isMarketplaceRequestPreviewAllowed(mapped.request, { enableMarketplaceRequestPreview: true, context: "standard-user" }).previewAllowed, false, "N5 guard must deny Standard User.");
assert.equal(preview.buildMarketplaceRequestPreview(agriculture, {}).visible, false, "N6 preview must default hidden.");
assert.equal(preview.buildMarketplaceRequestPreview(agriculture, { enableMarketplaceRequestPreview: true, context: "standard-user" }).visible, false, "N6 preview must keep Standard User hidden.");
const visible = preview.buildMarketplaceRequestPreview(agriculture, { enableMarketplaceRequestPreview: true, context: "local-safe-fixture" });
assert.equal(visible.visible, true, "N6 preview must support local-safe fixture visibility.");
assert.equal(visible.executionAllowed, false, "N6 visible fixture must not execute.");
assert.deepEqual(visible.controls, [], "N6 visible fixture must not expose controls.");
assert.equal(preview.buildMarketplaceRequestPreview(payment, { enableMarketplaceRequestPreview: true, context: "local-safe-fixture" }).visible, false, "N6 restricted fixture must remain hidden.");

const indexHtml = read("public", "index.html");
const appSource = read("public", "app.js");
const serverSource = read("server.js");
[
  "nexus-marketplace-request-risk-evidence-mapping.js",
  "nexus-marketplace-request-preview-flag-guard.js",
  "nexus-marketplace-request-preview.js",
  "NEXUS_MARKETPLACE_REQUEST_PREVIEW_ENABLED"
].forEach(term => {
  assert(!indexHtml.includes(term), `index.html must not load ${term}.`);
  assert(!appSource.includes(term), `app.js must not load ${term}.`);
  assert(!serverSource.includes(term), `server.js must not load ${term}.`);
});

console.log("[nexus-sprint-n8-marketplace-request-closeout-qa] passed");
