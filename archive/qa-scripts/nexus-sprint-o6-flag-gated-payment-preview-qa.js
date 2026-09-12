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

const docName = "NEXUS_SPRINT_O6_FLAG_GATED_PAYMENT_PREVIEW.md";
const moduleName = "nexus-payment-preview.js";
const qaName = "nexus-sprint-o6-flag-gated-payment-preview-qa.js";

assert(exists("docs", docName), "O6 doc must exist.");
assert(exists("public", moduleName), "O6 preview module must exist.");
assert(exists("scripts", qaName), "O6 QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const indexHtml = read("public", "index.html");
const appSource = read("public", "app.js");
const serverSource = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = JSON.parse(read("fixtures", "nexus", "payment-intents.json"));
const preview = require("../public/nexus-payment-preview.js");

[
  "Sprint O4 risk/evidence mapper",
  "Sprint O5 default-off flag guard",
  "not wired into the Standard User runtime",
  "Default behavior and Standard User behavior remain hidden",
  "payee display",
  "payment category",
  "amount display",
  "consent requirement",
  "dry-run packet",
  "payee confirmation requirement",
  "user approval requirement",
  "final execution gate requirement",
  "must not include buttons",
  "pending real-world actions",
  "public/index.html",
  "public/app.js",
  "server.js"
].forEach(term => assert(doc.includes(term), `O6 doc must include: ${term}`));

assert.equal(typeof preview.hiddenPaymentPreview, "function", "O6 must export hidden preview helper.");
assert.equal(typeof preview.buildPaymentPreview, "function", "O6 must export preview builder.");

const marketplace = fixtures.find(fixture => fixture.fixtureId === "marketplace-payment-review");

let model = preview.buildPaymentPreview(marketplace, {});
assert.equal(model.visible, false, "O6 default preview must be hidden.");
assert.equal(model.executionAllowed, false, "O6 default preview must not execute.");
assert.deepEqual(model.controls, [], "O6 hidden preview must not expose controls.");

model = preview.buildPaymentPreview(marketplace, { enablePaymentPreview: true, context: "standard-user" });
assert.equal(model.visible, false, "O6 Standard User preview must remain hidden.");
assert.equal(model.paymentAllowed, false, "O6 Standard User preview must not pay.");
assert.equal(model.checkoutAllowed, false, "O6 Standard User preview must not checkout.");

model = preview.buildPaymentPreview(marketplace, { enablePaymentPreview: true, context: "local-safe-fixture" });
assert.equal(model.visible, true, "O6 local-safe eligible preview may become visible.");
assert.equal(model.title, "Review payment safety packet", "O6 preview title must be safety/review-only.");
assert.equal(model.payeeDisplayName, "AgriTrade seller", "O6 preview must expose payee display.");
assert.equal(model.paymentCategory, "marketplace-payment-review", "O6 preview must expose payment category.");
assert.equal(model.riskTier, "restricted", "O6 preview must expose restricted risk.");
assert(model.evidenceRequirement.includes("payee confirmation required"), "O6 preview must expose evidence requirement.");
assert.equal(model.payeeConfirmationRequired, true, "O6 preview must require payee confirmation.");
assert.equal(model.userApprovalRequired, true, "O6 preview must require user approval.");
assert.equal(model.finalExecutionGateRequired, true, "O6 preview must require final gate.");
assert.equal(model.executionAllowed, false, "O6 visible preview must not execute.");
assert.equal(model.executionAuthority, false, "O6 visible preview must keep executionAuthority false.");
assert.equal(model.paymentAllowed, false, "O6 visible preview must not pay.");
assert.equal(model.walletTransferAllowed, false, "O6 visible preview must not transfer wallet funds.");
assert.equal(model.checkoutAllowed, false, "O6 visible preview must not checkout.");
assert.equal(model.credentialStorageAllowed, false, "O6 visible preview must not store credentials.");
assert.equal(model.providerPaymentIntentAllowed, false, "O6 visible preview must not create provider payment intents.");
assert.equal(model.providerHandoffAllowed, false, "O6 visible preview must not hand off providers.");
assert.equal(model.communicationAllowed, false, "O6 visible preview must not allow communication.");
assert.equal(model.externalNavigationAllowed, false, "O6 visible preview must not navigate.");
assert.equal(model.nativeBridgeAllowed, false, "O6 visible preview must not use native bridge.");
assert.equal(model.networkAllowed, false, "O6 visible preview must not use network.");
assert.equal(model.storageWriteAllowed, false, "O6 visible preview must not write storage.");
assert.equal(model.backendWriteAllowed, false, "O6 visible preview must not write backend.");
assert.deepEqual(model.controls, [], "O6 visible preview must not expose controls.");
assert.deepEqual(model.links, [], "O6 visible preview must not expose links.");
assert.deepEqual(model.eventHandlers, [], "O6 visible preview must not expose event handlers.");

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
].forEach(term => assert(!moduleSource.includes(term), `O6 preview module must not include side-effect API: ${term}`));

[indexHtml, appSource, serverSource].forEach((source, index) => {
  const label = ["index.html", "app.js", "server.js"][index];
  assert(!source.includes(moduleName), `${label} must not load O6 preview builder.`);
});

const alias = "qa:nexus-sprint-o6-flag-gated-payment-preview";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include O6 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-o5-flag-off-payment-regression-qa.js"), "O6 requires O5 QA to remain in qa-suite.");

console.log("[nexus-sprint-o6-flag-gated-payment-preview-qa] passed");
