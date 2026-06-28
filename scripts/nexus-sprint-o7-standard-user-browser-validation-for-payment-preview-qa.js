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

const docName = "NEXUS_SPRINT_O7_PAYMENT_PREVIEW_BROWSER_VALIDATION.md";
const qaName = "nexus-sprint-o7-standard-user-browser-validation-for-payment-preview-qa.js";
const previewModuleName = "nexus-payment-preview.js";
const flagModuleName = "nexus-payment-preview-flag-guard.js";

assert(exists("docs", docName), "O7 browser validation doc must exist.");
assert(exists("scripts", qaName), "O7 QA must exist.");

const doc = read("docs", docName);
const indexHtml = read("public", "index.html");
const appSource = read("public", "app.js");
const serverSource = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

[
  "No runtime-visible behavior was introduced",
  "absence and regression check",
  "no payment preview card appears",
  "no payment provider handoff occurs",
  "no wallet transfer occurs",
  "no checkout occurs",
  "no payment API call occurs",
  "no credential storage occurs",
  "Pay for seeds",
  "Send mobile money",
  "Checkout this order",
  "Pay the provider",
  "Refund this payment",
  "Transfer money to the seller",
  "Store my payment details",
  "Future Flag-On Browser Validation",
  "payee confirmation, user approval, and final execution gate",
  "console warnings/errors are zero",
  "NEXUS_PAYMENT_PREVIEW_ENABLED"
].forEach(term => assert(doc.includes(term), `O7 doc must include: ${term}`));

[indexHtml, appSource, serverSource].forEach((source, index) => {
  const label = ["index.html", "app.js", "server.js"][index];
  assert(!source.includes(previewModuleName), `${label} must not load O6 preview builder.`);
  assert(!source.includes(flagModuleName), `${label} must not load O5 flag guard.`);
  assert(!source.includes("NEXUS_PAYMENT_PREVIEW_ENABLED"), `${label} must not enable O6 preview flag.`);
});

const alias = "qa:nexus-sprint-o7-standard-user-browser-validation-for-payment-preview";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include O7 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-o6-flag-gated-payment-preview-qa.js"), "O7 requires O6 QA to remain in qa-suite.");

console.log("[nexus-sprint-o7-standard-user-browser-validation-for-payment-preview-qa] passed");
