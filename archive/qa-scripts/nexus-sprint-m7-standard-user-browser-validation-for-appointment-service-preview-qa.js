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

const docName = "NEXUS_SPRINT_M7_APPOINTMENT_SERVICE_PREVIEW_BROWSER_VALIDATION.md";
const qaName = "nexus-sprint-m7-standard-user-browser-validation-for-appointment-service-preview-qa.js";
const previewModuleName = "nexus-appointment-service-request-preview.js";
const flagModuleName = "nexus-appointment-service-preview-flag-guard.js";

assert(exists("docs", docName), "M7 browser validation doc must exist.");
assert(exists("scripts", qaName), "M7 QA must exist.");

const doc = read("docs", docName);
const indexHtml = read("public", "index.html");
const appSource = read("public", "app.js");
const serverSource = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

[
  "No runtime-visible behavior was introduced",
  "absence and regression check",
  "no appointment/service preview card appears",
  "no provider handoff occurs",
  "no booking occurs",
  "no provider dispatch occurs",
  "no communication channel opens",
  "Schedule an agriculture support appointment",
  "Request a field visit",
  "Book training support",
  "Can I meet with a provider?",
  "Schedule emergency help",
  "Book a pharmacy refill",
  "Future Flag-On Browser Validation",
  "provider confirmation, user approval, and final execution gate",
  "console warnings/errors are zero",
  "NEXUS_APPOINTMENT_SERVICE_REQUEST_PREVIEW_ENABLED"
].forEach(term => assert(doc.includes(term), `M7 doc must include: ${term}`));

[indexHtml, appSource, serverSource].forEach((source, index) => {
  const label = ["index.html", "app.js", "server.js"][index];
  assert(!source.includes(previewModuleName), `${label} must not load M6 preview builder.`);
  assert(!source.includes(flagModuleName), `${label} must not load M5 flag guard.`);
  assert(!source.includes("NEXUS_APPOINTMENT_SERVICE_REQUEST_PREVIEW_ENABLED"), `${label} must not enable M6 preview flag.`);
});

const alias = "qa:nexus-sprint-m7-standard-user-browser-validation-for-appointment-service-preview";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include M7 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-m6-flag-gated-appointment-service-request-preview-qa.js"), "M7 requires M6 QA to remain in qa-suite.");

console.log("[nexus-sprint-m7-standard-user-browser-validation-for-appointment-service-preview-qa] passed");
