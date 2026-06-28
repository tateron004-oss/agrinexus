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

const docName = "NEXUS_SPRINT_N7_MARKETPLACE_REQUEST_PREVIEW_BROWSER_VALIDATION.md";
const qaName = "nexus-sprint-n7-standard-user-browser-validation-for-marketplace-request-preview-qa.js";
const previewModuleName = "nexus-marketplace-request-preview.js";
const flagModuleName = "nexus-marketplace-request-preview-flag-guard.js";

assert(exists("docs", docName), "N7 browser validation doc must exist.");
assert(exists("scripts", qaName), "N7 QA must exist.");

const doc = read("docs", docName);
const indexHtml = read("public", "index.html");
const appSource = read("public", "app.js");
const serverSource = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

[
  "No runtime-visible behavior was introduced",
  "absence and regression check",
  "no marketplace request preview card appears",
  "no seller handoff occurs",
  "no order placement occurs",
  "no checkout occurs",
  "no payment or money movement occurs",
  "no communication channel opens",
  "Browse AgriTrade",
  "Buy fertilizer",
  "Find maize seed sellers",
  "Ask the seller about this product",
  "Get a price quote for irrigation parts",
  "Pay for seeds",
  "Checkout this order",
  "Future Flag-On Browser Validation",
  "seller confirmation, user approval, and final execution gate",
  "console warnings/errors are zero",
  "NEXUS_MARKETPLACE_REQUEST_PREVIEW_ENABLED"
].forEach(term => assert(doc.includes(term), `N7 doc must include: ${term}`));

[indexHtml, appSource, serverSource].forEach((source, index) => {
  const label = ["index.html", "app.js", "server.js"][index];
  assert(!source.includes(previewModuleName), `${label} must not load N6 preview builder.`);
  assert(!source.includes(flagModuleName), `${label} must not load N5 flag guard.`);
  assert(!source.includes("NEXUS_MARKETPLACE_REQUEST_PREVIEW_ENABLED"), `${label} must not enable N6 preview flag.`);
});

const alias = "qa:nexus-sprint-n7-standard-user-browser-validation-for-marketplace-request-preview";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include N7 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-n6-flag-gated-marketplace-request-preview-qa.js"), "N7 requires N6 QA to remain in qa-suite.");

console.log("[nexus-sprint-n7-standard-user-browser-validation-for-marketplace-request-preview-qa] passed");
