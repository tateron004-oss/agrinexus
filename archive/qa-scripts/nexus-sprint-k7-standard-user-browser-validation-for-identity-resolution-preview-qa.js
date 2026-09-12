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

const docName = "NEXUS_SPRINT_K7_STANDARD_USER_BROWSER_VALIDATION_FOR_IDENTITY_RESOLUTION_PREVIEW.md";
const qaName = "nexus-sprint-k7-standard-user-browser-validation-for-identity-resolution-preview-qa.js";
const previewModule = "nexus-contact-provider-identity-preview.js";
const guardModule = "nexus-contact-provider-identity-flag-guard.js";
const mapperModule = "nexus-contact-provider-identity-evidence-mapper.js";
const contractModule = "nexus-contact-provider-identity-contract.js";

assert(exists("docs", docName), "K7 validation doc must exist.");
assert(exists("scripts", qaName), "K7 QA must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint K7",
  "Standard User Browser Validation for Identity Resolution Preview",
  "No live browser run was required",
  "`public/index.html`",
  "`public/app.js`",
  "`server.js`",
  "no identity preview card is visible",
  "no contact/provider identity preview module is loaded",
  "no identity resolution feature flag is enabled",
  "no hidden/debug identity metadata is displayed",
  "no provider handoff",
  "no calls or messages",
  "no WhatsApp",
  "Telegram",
  "SMS",
  "email",
  "location",
  "camera",
  "payment",
  "marketplace",
  "medical",
  "pharmacy",
  "emergency",
  "node server.js",
  "http://127.0.0.1:4182/",
  "Start as User",
  "Nexus, call John",
  "Call my doctor",
  "Message the seller",
  "Find a clinic provider",
  "Emergency help",
  "flag off",
  "flag-on local validation harness",
  "Browser-visible validation is deferred"
], "K7 doc");

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  [previewModule, guardModule, mapperModule].forEach(moduleName => {
    assert(!source.includes(moduleName), `${label} must not load ${moduleName}.`);
  });
});

assert(index.includes("Start as User") || app.includes("Start as User"), "Standard User path must remain present.");
assert(exists("public", contractModule), "K2 identity contract must remain present.");
assert(exists("public", mapperModule), "K4 evidence mapper must remain present.");
assert(exists("public", guardModule), "K5 flag guard must remain present.");
assert(exists("public", previewModule), "K6 preview model must remain present.");

const alias = "qa:nexus-sprint-k7-standard-user-browser-validation-for-identity-resolution-preview";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint K7 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-k6-flag-gated-identity-resolution-preview-qa.js"), "K7 requires K6 QA to remain in qa-suite.");

console.log("[nexus-sprint-k7-standard-user-browser-validation-for-identity-resolution-preview-qa] passed");
