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
  for (const term of terms) {
    assert(source.includes(term), `${label} must include: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_C43_STANDARD_USER_BROWSER_VALIDATION_CONTROLLED_AGRICULTURE_PREVIEW.md";
const qaName = "nexus-sprint-c43-standard-user-browser-validation-controlled-agriculture-preview-qa.js";

assert(exists("docs", docName), "Sprint C43 browser validation doc must exist.");
assert(exists("scripts", qaName), "Sprint C43 QA script must exist.");

const doc = read("docs", docName);
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const moduleSource = read("public", "nexus-agriculture-support-response-card.js");

assertIncludes(doc, [
  "Sprint C43",
  "Standard User",
  "7371d200a798421a0a17b085d6c918d6b9b5e6b5",
  "node server.js",
  "http://127.0.0.1:4182/",
  "Start as User",
  "Help me find agriculture training",
  "No `data-nexus-source-backed-agriculture-preview-card=\"true\"` card appeared.",
  "Flag-off Standard User behavior remains unchanged and safe.",
  "setSourceBackedAgriculturePreviewValidationEnabled(true)",
  "Codex in-app browser exposes read-only page evaluation",
  "blocked `javascript:` URL execution by policy",
  "not completed in Codex in-app browser",
  "human/local browser main-world flag-on validation remains a follow-up",
  "No provider handoff",
  "No action has been taken",
  "Evidence & Verification"
], "C43 validation doc");

assertIncludes(moduleSource, [
  "setSourceBackedAgriculturePreviewValidationEnabled",
  "sourceBackedAgriculturePreviewValidationEnabled = value === true",
  "isSourceBackedAgriculturePreviewEnabled(globalRef)",
  "renderSourceBackedAgriculturePreviewCard(prompt, target, { globalRef })"
], "C42 runtime module");

const sourceBackedSection = moduleSource.slice(
  moduleSource.indexOf("const SOURCE_BACKED_AGRICULTURE_PREVIEW_FLAG_NAME"),
  moduleSource.indexOf("function buildSprintCAgricultureResponseCard")
);
assert(sourceBackedSection.length > 1000, "C43 QA must inspect the source-backed C42 implementation section.");
[
  "fetch(",
  "localStorage",
  "sessionStorage",
  "navigator.geolocation",
  "getUserMedia",
  "window.open",
  "location.href",
  "sendBeacon"
].forEach(forbidden => {
  assert(!sourceBackedSection.includes(forbidden), `C43 source-backed validation path must not include forbidden runtime side effect: ${forbidden}`);
});

const alias = "qa:nexus-sprint-c43-standard-user-browser-validation-controlled-agriculture-preview";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C43 QA.");

console.log("[nexus-sprint-c43-standard-user-browser-validation-controlled-agriculture-preview-qa] passed");
