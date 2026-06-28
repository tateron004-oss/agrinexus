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

const docName = "NEXUS_SPRINT_L7_STANDARD_USER_BROWSER_VALIDATION_FOR_CALL_MESSAGE_PREVIEW.md";
const qaName = "nexus-sprint-l7-standard-user-browser-validation-for-call-message-preview-qa.js";

assert(exists("docs", docName), "L7 browser validation doc must exist.");
assert(exists("scripts", qaName), "L7 QA must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint L7",
  "Standard User Browser Validation for Call/Message Preview",
  "Sprint L6 did not wire the preview model",
  "no new Standard User runtime-visible behavior",
  "runtime absence",
  "node server.js",
  "http://127.0.0.1:4182/",
  "Start as User",
  "Nexus, call John",
  "Call the provider",
  "Send the buyer a message",
  "Send WhatsApp to the seller",
  "Text workforce support",
  "Email the clinic",
  "Message the pharmacy",
  "Emergency help",
  "no call/message preview card appears",
  "no provider app opens",
  "no phone dialer opens",
  "no SMS, WhatsApp, Telegram, email, or in-app message sends",
  "no native bridge dispatch occurs",
  "no network, storage, backend write, or pending real-world action is created",
  "console warn/error count remains zero",
  "public/nexus-call-message-intent-contract.js",
  "public/nexus-call-message-risk-evidence-mapping.js",
  "public/nexus-call-message-preview-flag-guard.js",
  "public/nexus-call-message-preview.js"
], "L7 doc");

[
  "nexus-call-message-intent-contract.js",
  "nexus-call-message-risk-evidence-mapping.js",
  "nexus-call-message-preview-flag-guard.js",
  "nexus-call-message-preview.js"
].forEach(moduleName => {
  [index, app, server].forEach((source, indexNumber) => {
    const label = ["index.html", "app.js", "server.js"][indexNumber];
    assert(!source.includes(moduleName), `${label} must not load ${moduleName}.`);
  });
});

[
  "callMessagePreview",
  "NEXUS_CALL_MESSAGE_PREVIEW_ENABLED",
  "buildCallMessagePreview"
].forEach(term => {
  assert(!index.includes(term), `index.html must not expose ${term}.`);
  assert(!app.includes(term), `app.js must not expose ${term}.`);
});

const alias = "qa:nexus-sprint-l7-standard-user-browser-validation-for-call-message-preview";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint L7 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-l6-flag-gated-call-message-preview-qa.js"), "L7 requires L6 QA to remain in qa-suite.");

console.log("[nexus-sprint-l7-standard-user-browser-validation-for-call-message-preview-qa] passed");
