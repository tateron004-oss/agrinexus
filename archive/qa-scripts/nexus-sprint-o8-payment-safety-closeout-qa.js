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

const docName = "NEXUS_SPRINT_O8_PAYMENT_SAFETY_CLOSEOUT_AND_SPRINT_P_READINESS.md";
const qaName = "nexus-sprint-o8-payment-safety-closeout-qa.js";

assert(exists("docs", docName), "O8 closeout doc must exist.");
assert(exists("scripts", qaName), "O8 QA must exist.");

[
  "NEXUS_SPRINT_O1_PAYMENT_SAFETY_PRODUCT_BOUNDARY.md",
  "NEXUS_SPRINT_O2_INERT_PAYMENT_INTENT_CONTRACT.md",
  "NEXUS_SPRINT_O3_FIXTURE_ONLY_PAYMENT_HARNESS.md",
  "NEXUS_SPRINT_O4_PAYEE_AMOUNT_RISK_EVIDENCE_MAPPING.md",
  "NEXUS_SPRINT_O5_PAYMENT_FLAG_OFF_REGRESSION_GUARD.md",
  "NEXUS_SPRINT_O6_FLAG_GATED_PAYMENT_PREVIEW.md",
  "NEXUS_SPRINT_O7_PAYMENT_PREVIEW_BROWSER_VALIDATION.md",
  docName
].forEach(file => assert(exists("docs", file), `Sprint O doc must exist: ${file}`));

[
  "nexus-sprint-o1-payment-safety-product-boundary-qa.js",
  "nexus-sprint-o2-inert-payment-intent-contract-qa.js",
  "nexus-sprint-o3-payment-harness-qa.js",
  "nexus-sprint-o4-payee-amount-risk-evidence-mapping-qa.js",
  "nexus-sprint-o5-flag-off-payment-regression-qa.js",
  "nexus-sprint-o6-flag-gated-payment-preview-qa.js",
  "nexus-sprint-o7-standard-user-browser-validation-for-payment-preview-qa.js",
  qaName
].forEach(file => assert(exists("scripts", file), `Sprint O QA must exist: ${file}`));

[
  "nexus-payment-intent-contract.js",
  "nexus-payment-risk-evidence-mapping.js",
  "nexus-payment-preview-flag-guard.js",
  "nexus-payment-preview.js"
].forEach(file => assert(exists("public", file), `Sprint O public contract module must exist: ${file}`));

assert(exists("fixtures", "nexus", "payment-intents.json"), "Sprint O fixture file must exist.");

const doc = read("docs", docName);
[
  "O1: product boundary",
  "O2: inert payment intent contract",
  "O3: fixture-only payment harness",
  "O4: payee, amount, risk, and evidence mapping",
  "O5: flag-off payment regression guard",
  "O6: flag-gated payment preview builder",
  "O7: Standard User browser-validation boundary",
  "Execution authority remains false",
  "Payee confirmation, user approval, final execution gate",
  "Standard User runtime remains unchanged",
  "Sprint P Readiness",
  "no execution until user consent, approval, audit, provider/channel contract, rollback, and final execution gates are complete"
].forEach(term => assert(doc.includes(term), `O8 doc must include: ${term}`));

const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const aliases = [
  "qa:nexus-sprint-o1-payment-safety-product-boundary",
  "qa:nexus-sprint-o2-inert-payment-intent-contract",
  "qa:nexus-sprint-o3-payment-harness",
  "qa:nexus-sprint-o4-payee-amount-risk-evidence-mapping",
  "qa:nexus-sprint-o5-flag-off-payment-regression",
  "qa:nexus-sprint-o6-flag-gated-payment-preview",
  "qa:nexus-sprint-o7-standard-user-browser-validation-for-payment-preview",
  "qa:nexus-sprint-o8-payment-safety-closeout-and-sprint-p-readiness"
];
aliases.forEach(alias => assert(pkg.scripts && pkg.scripts[alias], `${alias} package script must exist.`));

[
  "scripts/nexus-sprint-o1-payment-safety-product-boundary-qa.js",
  "scripts/nexus-sprint-o2-inert-payment-intent-contract-qa.js",
  "scripts/nexus-sprint-o3-payment-harness-qa.js",
  "scripts/nexus-sprint-o4-payee-amount-risk-evidence-mapping-qa.js",
  "scripts/nexus-sprint-o5-flag-off-payment-regression-qa.js",
  "scripts/nexus-sprint-o6-flag-gated-payment-preview-qa.js",
  "scripts/nexus-sprint-o7-standard-user-browser-validation-for-payment-preview-qa.js",
  `scripts/${qaName}`
].forEach(script => assert(qaSuite.includes(script), `qa-suite must include ${script}.`));

const fixtures = JSON.parse(read("fixtures", "nexus", "payment-intents.json"));
const contract = require("../public/nexus-payment-intent-contract.js");
const harness = require("./nexus-sprint-o3-payment-harness.js");
const mapper = require("../public/nexus-payment-risk-evidence-mapping.js");
const guard = require("../public/nexus-payment-preview-flag-guard.js");
const preview = require("../public/nexus-payment-preview.js");

fixtures.forEach(fixture => {
  const validation = contract.validatePaymentIntent(fixture);
  assert.equal(validation.ok, true, `${fixture.fixtureId} must satisfy O2 contract.`);
  assert.equal(validation.executionAllowed, false, `${fixture.fixtureId} must not execute.`);
});

harness.runPaymentIntentFixtures().forEach(result => {
  assert.equal(result.ok, true, `${result.fixtureId} O3 harness result must pass.`);
  assert.equal(result.executionAllowed, false, `${result.fixtureId} O3 harness result must not execute.`);
});

const marketplace = fixtures.find(fixture => fixture.fixtureId === "marketplace-payment-review");
const mapped = mapper.mapPaymentRiskEvidence(marketplace);
assert.equal(mapped.validation.ok, true, "O4 mapper must validate eligible fixture.");
assert.equal(mapped.mapping.executionAllowed, false, "O4 mapper must not execute.");
assert.equal(guard.isPaymentPreviewAllowed(mapped.intent, {}).previewAllowed, false, "O5 flag guard must default hidden.");
assert.equal(guard.isPaymentPreviewAllowed(mapped.intent, { enablePaymentPreview: true, context: "standard-user" }).previewAllowed, false, "O5 guard must deny Standard User.");
assert.equal(preview.buildPaymentPreview(marketplace, {}).visible, false, "O6 preview must default hidden.");
assert.equal(preview.buildPaymentPreview(marketplace, { enablePaymentPreview: true, context: "standard-user" }).visible, false, "O6 preview must keep Standard User hidden.");
const visible = preview.buildPaymentPreview(marketplace, { enablePaymentPreview: true, context: "local-safe-fixture" });
assert.equal(visible.visible, true, "O6 preview must support local-safe fixture visibility.");
assert.equal(visible.executionAllowed, false, "O6 visible fixture must not execute.");
assert.deepEqual(visible.controls, [], "O6 visible fixture must not expose controls.");

const indexHtml = read("public", "index.html");
const appSource = read("public", "app.js");
const serverSource = read("server.js");
[
  "nexus-payment-risk-evidence-mapping.js",
  "nexus-payment-preview-flag-guard.js",
  "nexus-payment-preview.js",
  "NEXUS_PAYMENT_PREVIEW_ENABLED"
].forEach(term => {
  assert(!indexHtml.includes(term), `index.html must not load ${term}.`);
  assert(!appSource.includes(term), `app.js must not load ${term}.`);
  assert(!serverSource.includes(term), `server.js must not load ${term}.`);
});

console.log("[nexus-sprint-o8-payment-safety-closeout-qa] passed");
