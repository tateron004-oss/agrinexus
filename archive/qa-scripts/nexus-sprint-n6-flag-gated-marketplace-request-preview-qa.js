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

const docName = "NEXUS_SPRINT_N6_FLAG_GATED_MARKETPLACE_REQUEST_PREVIEW.md";
const moduleName = "nexus-marketplace-request-preview.js";
const qaName = "nexus-sprint-n6-flag-gated-marketplace-request-preview-qa.js";

assert(exists("docs", docName), "N6 doc must exist.");
assert(exists("public", moduleName), "N6 preview module must exist.");
assert(exists("scripts", qaName), "N6 QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const indexHtml = read("public", "index.html");
const appSource = read("public", "app.js");
const serverSource = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = JSON.parse(read("fixtures", "nexus", "marketplace-requests.json"));
const preview = require("../public/nexus-marketplace-request-preview.js");

[
  "Sprint N4 risk/evidence mapper",
  "Sprint N5 default-off flag guard",
  "not wired into the Standard User runtime",
  "Default behavior and Standard User behavior remain hidden",
  "product display",
  "seller display",
  "marketplace category",
  "evidence requirement",
  "seller confirmation requirement",
  "user approval requirement",
  "final execution gate requirement",
  "must not include buttons",
  "pending real-world actions",
  "public/index.html",
  "public/app.js",
  "server.js"
].forEach(term => assert(doc.includes(term), `N6 doc must include: ${term}`));

assert.equal(typeof preview.hiddenMarketplaceRequestPreview, "function", "N6 must export hidden preview helper.");
assert.equal(typeof preview.buildMarketplaceRequestPreview, "function", "N6 must export preview builder.");

const agriculture = fixtures.find(fixture => fixture.fixtureId === "agriculture-input-marketplace-request");
const sellerQuestion = fixtures.find(fixture => fixture.fixtureId === "seller-product-question");
const payment = fixtures.find(fixture => fixture.fixtureId === "blocked-payment-checkout-marketplace-request");

let model = preview.buildMarketplaceRequestPreview(agriculture, {});
assert.equal(model.visible, false, "N6 default preview must be hidden.");
assert.equal(model.executionAllowed, false, "N6 default preview must not execute.");
assert.deepEqual(model.controls, [], "N6 hidden preview must not expose controls.");

model = preview.buildMarketplaceRequestPreview(agriculture, { enableMarketplaceRequestPreview: true, context: "standard-user" });
assert.equal(model.visible, false, "N6 Standard User preview must remain hidden.");
assert.equal(model.paymentAllowed, false, "N6 Standard User preview must not pay.");
assert.equal(model.checkoutAllowed, false, "N6 Standard User preview must not checkout.");
assert.equal(model.orderPlacementAllowed, false, "N6 Standard User preview must not order.");

model = preview.buildMarketplaceRequestPreview(agriculture, { enableMarketplaceRequestPreview: true, context: "local-safe-fixture" });
assert.equal(model.visible, true, "N6 local-safe eligible preview may become visible.");
assert.equal(model.title, "Review marketplace request", "N6 preview title must be review-only.");
assert.equal(model.productDisplayName, "Fertilizer input options", "N6 preview must expose product display.");
assert.equal(model.sellerDisplayName, "AgriTrade marketplace listing", "N6 preview must expose seller display.");
assert.equal(model.requestedMarketplaceCategory, "agriculture-input", "N6 preview must expose marketplace category.");
assert.equal(model.riskTier, "medium", "N6 preview must expose mapped risk.");
assert(model.evidenceRequirement.includes("seller confirmation required"), "N6 preview must expose evidence requirement.");
assert.equal(model.sellerConfirmationRequired, true, "N6 preview must require seller confirmation.");
assert.equal(model.userApprovalRequired, true, "N6 preview must require user approval.");
assert.equal(model.finalExecutionGateRequired, true, "N6 preview must require final gate.");
assert.equal(model.executionAllowed, false, "N6 visible preview must not execute.");
assert.equal(model.executionAuthority, false, "N6 visible preview must keep executionAuthority false.");
assert.equal(model.paymentAllowed, false, "N6 visible preview must not pay.");
assert.equal(model.checkoutAllowed, false, "N6 visible preview must not checkout.");
assert.equal(model.orderPlacementAllowed, false, "N6 visible preview must not order.");
assert.equal(model.sellerDispatchAllowed, false, "N6 visible preview must not dispatch sellers.");
assert.equal(model.sellerHandoffAllowed, false, "N6 visible preview must not hand off sellers.");
assert.equal(model.communicationAllowed, false, "N6 visible preview must not allow communication.");
assert.equal(model.externalNavigationAllowed, false, "N6 visible preview must not navigate.");
assert.equal(model.nativeBridgeAllowed, false, "N6 visible preview must not use native bridge.");
assert.equal(model.networkAllowed, false, "N6 visible preview must not use network.");
assert.equal(model.storageWriteAllowed, false, "N6 visible preview must not write storage.");
assert.equal(model.backendWriteAllowed, false, "N6 visible preview must not write backend.");
assert.deepEqual(model.controls, [], "N6 visible preview must not expose controls.");
assert.deepEqual(model.links, [], "N6 visible preview must not expose links.");
assert.deepEqual(model.eventHandlers, [], "N6 visible preview must not expose event handlers.");

model = preview.buildMarketplaceRequestPreview(sellerQuestion, { enableMarketplaceRequestPreview: true, context: "local-safe-fixture" });
assert.equal(model.visible, true, "N6 high but non-restricted local-safe fixture may be review-visible.");
assert.equal(model.riskTier, "high", "N6 high fixture must expose high risk.");
assert.equal(model.executionAllowed, false, "N6 high fixture must not execute.");

model = preview.buildMarketplaceRequestPreview(payment, { enableMarketplaceRequestPreview: true, context: "local-safe-fixture" });
assert.equal(model.visible, false, "N6 restricted fixture must remain hidden.");
assert.equal(model.reason, "restricted-risk", "N6 restricted fixture must explain restricted risk.");
assert.equal(model.executionAllowed, false, "N6 restricted fixture must not execute.");

[
  "writeFile",
  "appendFile",
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
  "addEventListener",
  "createElement",
  "innerHTML",
  "db.json"
].forEach(term => assert(!moduleSource.includes(term), `N6 preview module must not include side-effect API: ${term}`));

[indexHtml, appSource, serverSource].forEach((source, index) => {
  const label = ["index.html", "app.js", "server.js"][index];
  assert(!source.includes(moduleName), `${label} must not load N6 preview builder.`);
});

const alias = "qa:nexus-sprint-n6-flag-gated-marketplace-request-preview";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include N6 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-n5-flag-off-marketplace-request-regression-qa.js"), "N6 requires N5 QA to remain in qa-suite.");

console.log("[nexus-sprint-n6-flag-gated-marketplace-request-preview-qa] passed");
