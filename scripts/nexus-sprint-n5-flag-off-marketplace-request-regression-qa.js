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

const docName = "NEXUS_SPRINT_N5_MARKETPLACE_REQUEST_FLAG_OFF_REGRESSION_GUARD.md";
const moduleName = "nexus-marketplace-request-preview-flag-guard.js";
const qaName = "nexus-sprint-n5-flag-off-marketplace-request-regression-qa.js";

assert(exists("docs", docName), "N5 doc must exist.");
assert(exists("public", moduleName), "N5 flag guard module must exist.");
assert(exists("scripts", qaName), "N5 QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const indexHtml = read("public", "index.html");
const appSource = read("public", "app.js");
const serverSource = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = JSON.parse(read("fixtures", "nexus", "marketplace-requests.json"));
const mapper = require("../public/nexus-marketplace-request-risk-evidence-mapping.js");
const guard = require("../public/nexus-marketplace-request-preview-flag-guard.js");

[
  "NEXUS_MARKETPLACE_REQUEST_PREVIEW_ENABLED",
  "default state: `false`",
  "Standard User state: `false`",
  "execution authority: always `false`",
  "does not process payments",
  "start checkout",
  "move money",
  "place orders",
  "dispatch sellers",
  "write backend state",
  "write browser storage",
  "pending real-world actions",
  "public/index.html",
  "public/app.js",
  "server.js"
].forEach(term => assert(doc.includes(term), `N5 doc must include: ${term}`));

assert.equal(guard.MARKETPLACE_REQUEST_PREVIEW_FLAG, "NEXUS_MARKETPLACE_REQUEST_PREVIEW_ENABLED", "N5 flag name must be canonical.");
assert.equal(guard.DEFAULT_MARKETPLACE_REQUEST_PREVIEW_ENABLED, false, "N5 flag must default false.");
assert.equal(typeof guard.resolveMarketplaceRequestPreviewFlag, "function", "N5 must export flag resolver.");
assert.equal(typeof guard.isMarketplaceRequestPreviewAllowed, "function", "N5 must export preview guard.");

const agriculture = mapper.mapMarketplaceRequestRiskEvidence(fixtures.find(fixture => fixture.fixtureId === "agriculture-input-marketplace-request"));
const payment = mapper.mapMarketplaceRequestRiskEvidence(fixtures.find(fixture => fixture.fixtureId === "blocked-payment-checkout-marketplace-request"));

let result = guard.isMarketplaceRequestPreviewAllowed(agriculture.request, {});
assert.equal(result.previewAllowed, false, "N5 default flag-off must deny preview.");
assert.equal(result.visibleRendererAllowed, false, "N5 default flag-off must deny visible renderer.");
assert.equal(result.executionAllowed, false, "N5 default flag-off must not execute.");

result = guard.isMarketplaceRequestPreviewAllowed(agriculture.request, { enableMarketplaceRequestPreview: true, context: "standard-user" });
assert.equal(result.previewAllowed, false, "N5 Standard User must remain off even if flag is passed without local-safe context.");
assert.equal(result.flag.standardUserEnabled, false, "N5 Standard User flag must remain false.");

result = guard.isMarketplaceRequestPreviewAllowed(agriculture.request, { enableMarketplaceRequestPreview: true, context: "local-safe-fixture" });
assert.equal(result.previewAllowed, true, "N5 local-safe non-restricted fixture may become preview-eligible.");
assert.equal(result.executionAllowed, false, "N5 local-safe fixture still must not execute.");
assert.equal(result.executionAuthority, false, "N5 local-safe fixture must keep executionAuthority false.");
assert.equal(result.paymentAllowed, false, "N5 local-safe fixture must not pay.");
assert.equal(result.checkoutAllowed, false, "N5 local-safe fixture must not checkout.");
assert.equal(result.orderPlacementAllowed, false, "N5 local-safe fixture must not order.");
assert.equal(result.sellerHandoffAllowed, false, "N5 local-safe fixture must not hand off to sellers.");

result = guard.isMarketplaceRequestPreviewAllowed(payment.request, { enableMarketplaceRequestPreview: true, context: "local-safe-fixture" });
assert.equal(result.previewAllowed, false, "N5 restricted fixtures must remain hidden even with local-safe flag.");
assert.equal(result.executionAllowed, false, "N5 restricted fixtures must not execute.");

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
].forEach(term => assert(!moduleSource.includes(term), `N5 guard must not include side-effect API: ${term}`));

[indexHtml, appSource, serverSource].forEach((source, index) => {
  const label = ["index.html", "app.js", "server.js"][index];
  assert(!source.includes(moduleName), `${label} must not load N5 guard.`);
  assert(!source.includes("NEXUS_MARKETPLACE_REQUEST_PREVIEW_ENABLED"), `${label} must not enable N5 preview flag.`);
});

const alias = "qa:nexus-sprint-n5-flag-off-marketplace-request-regression";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include N5 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-n4-product-seller-risk-evidence-mapping-qa.js"), "N5 requires N4 QA to remain in qa-suite.");

console.log("[nexus-sprint-n5-flag-off-marketplace-request-regression-qa] passed");
