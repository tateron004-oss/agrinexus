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

const docName = "NEXUS_SPRINT_O5_PAYMENT_FLAG_OFF_REGRESSION_GUARD.md";
const moduleName = "nexus-payment-preview-flag-guard.js";
const qaName = "nexus-sprint-o5-flag-off-payment-regression-qa.js";

assert(exists("docs", docName), "O5 doc must exist.");
assert(exists("public", moduleName), "O5 flag guard module must exist.");
assert(exists("scripts", qaName), "O5 QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const indexHtml = read("public", "index.html");
const appSource = read("public", "app.js");
const serverSource = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = JSON.parse(read("fixtures", "nexus", "payment-intents.json"));
const mapper = require("../public/nexus-payment-risk-evidence-mapping.js");
const guard = require("../public/nexus-payment-preview-flag-guard.js");

[
  "NEXUS_PAYMENT_PREVIEW_ENABLED",
  "default state: `false`",
  "Standard User state: `false`",
  "local-safe fixture state",
  "execution authority: always `false`",
  "does not move money",
  "process payments",
  "submit wallet transfers",
  "start checkout",
  "store credentials",
  "call payment APIs",
  "write backend state",
  "write browser storage",
  "pending real-world actions",
  "public/index.html",
  "public/app.js",
  "server.js"
].forEach(term => assert(doc.includes(term), `O5 doc must include: ${term}`));

assert.equal(guard.PAYMENT_PREVIEW_FLAG, "NEXUS_PAYMENT_PREVIEW_ENABLED", "O5 flag name must be canonical.");
assert.equal(guard.DEFAULT_PAYMENT_PREVIEW_ENABLED, false, "O5 flag must default false.");
assert.equal(typeof guard.resolvePaymentPreviewFlag, "function", "O5 must export flag resolver.");
assert.equal(typeof guard.isPaymentPreviewAllowed, "function", "O5 must export preview guard.");

const marketplace = mapper.mapPaymentRiskEvidence(fixtures.find(fixture => fixture.fixtureId === "marketplace-payment-review"));

let result = guard.isPaymentPreviewAllowed(marketplace.intent, {});
assert.equal(result.previewAllowed, false, "O5 default flag-off must deny preview.");
assert.equal(result.visibleRendererAllowed, false, "O5 default flag-off must deny visible renderer.");
assert.equal(result.executionAllowed, false, "O5 default flag-off must not execute.");

result = guard.isPaymentPreviewAllowed(marketplace.intent, { enablePaymentPreview: true, context: "standard-user" });
assert.equal(result.previewAllowed, false, "O5 Standard User must remain off even if flag is passed without local-safe context.");
assert.equal(result.flag.standardUserEnabled, false, "O5 Standard User flag must remain false.");

result = guard.isPaymentPreviewAllowed(marketplace.intent, { enablePaymentPreview: true, context: "local-safe-fixture" });
assert.equal(result.previewAllowed, true, "O5 local-safe valid fixture may become preview-eligible.");
assert.equal(result.dryRunAllowed, true, "O5 local-safe fixture may produce dry-run preview only.");
assert.equal(result.executionAllowed, false, "O5 local-safe fixture still must not execute.");
assert.equal(result.executionAuthority, false, "O5 local-safe fixture must keep executionAuthority false.");
assert.equal(result.paymentAllowed, false, "O5 local-safe fixture must not pay.");
assert.equal(result.walletTransferAllowed, false, "O5 local-safe fixture must not transfer wallet funds.");
assert.equal(result.checkoutAllowed, false, "O5 local-safe fixture must not checkout.");
assert.equal(result.credentialStorageAllowed, false, "O5 local-safe fixture must not store credentials.");
assert.equal(result.providerPaymentIntentAllowed, false, "O5 local-safe fixture must not create provider payment intents.");

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
].forEach(term => assert(!moduleSource.includes(term), `O5 guard must not include side-effect API: ${term}`));

[indexHtml, appSource, serverSource].forEach((source, index) => {
  const label = ["index.html", "app.js", "server.js"][index];
  assert(!source.includes(moduleName), `${label} must not load O5 guard.`);
  assert(!source.includes("NEXUS_PAYMENT_PREVIEW_ENABLED"), `${label} must not enable O5 preview flag.`);
});

const alias = "qa:nexus-sprint-o5-flag-off-payment-regression";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include O5 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-o4-payee-amount-risk-evidence-mapping-qa.js"), "O5 requires O4 QA to remain in qa-suite.");

console.log("[nexus-sprint-o5-flag-off-payment-regression-qa] passed");
