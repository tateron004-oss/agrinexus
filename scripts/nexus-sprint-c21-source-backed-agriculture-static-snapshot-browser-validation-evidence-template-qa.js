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

const docName = "NEXUS_SPRINT_C21_SOURCE_BACKED_AGRICULTURE_STATIC_SNAPSHOT_BROWSER_VALIDATION_EVIDENCE_TEMPLATE.md";
const qaName = "nexus-sprint-c21-source-backed-agriculture-static-snapshot-browser-validation-evidence-template-qa.js";
const fixtureName = "nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html";

assert(exists("docs", docName), "Sprint C21 browser validation evidence template must exist");
assert(exists("scripts", qaName), "Sprint C21 evidence template QA must exist");
assert(exists("docs", "NEXUS_SPRINT_C20_SOURCE_BACKED_AGRICULTURE_STATIC_SNAPSHOT_BROWSER_VALIDATION_PLAN.md"), "Sprint C20 plan must remain present");
assert(exists("test-fixtures", fixtureName), "Sprint C19 static snapshot fixture must remain present");

const doc = read("docs", docName);
const c20Doc = read("docs", "NEXUS_SPRINT_C20_SOURCE_BACKED_AGRICULTURE_STATIC_SNAPSHOT_BROWSER_VALIDATION_PLAN.md");
const fixture = read("test-fixtures", fixtureName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert(c20Doc.includes("Sprint C21 should add a structured browser-validation evidence template"), "Sprint C20 must recommend Sprint C21 evidence template.");

assertIncludes(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Evidence Record Header",
  "Required Pre-Validation QA Record",
  "Static Fixture Browser Evidence",
  "Standard User Runtime Absence Evidence",
  "Low-Risk Prompt Evidence",
  "Excluded / High-Risk Prompt Evidence",
  "Console / Network / Storage Evidence",
  "Runtime Restoration Record",
  "Pass / Fail Decision",
  "Sprint C22 Recommendation",
  "This sprint remains inert",
  "does not perform browser validation",
  "does not wire the C19 fixture into Standard User runtime",
  "does not load the C17 copy model",
  "does not change backend behavior"
], "Sprint C21 doc sections and boundaries");

assertIncludes(doc, [
  "Validator:",
  "Date:",
  "Local HEAD:",
  "Remote HEAD:",
  "Browser and version:",
  "Validation result: `pass` / `fail` / `blocked`",
  "test-fixtures/nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html",
  "node server.js",
  "http://127.0.0.1:4182/",
  "Start as User"
], "Sprint C21 evidence metadata");

assertIncludes(doc, [
  "git diff --check",
  "node --check server.js",
  "node --check public/app.js",
  "node --check scripts/qa-suite.js",
  "node scripts/nexus-sprint-c17-source-backed-agriculture-surface-copy-model-qa.js",
  "node scripts/nexus-sprint-c18-source-backed-agriculture-visual-semantics-review-plan-qa.js",
  "node scripts/nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot-contract-qa.js",
  "node scripts/nexus-sprint-c20-source-backed-agriculture-static-snapshot-browser-validation-plan-qa.js",
  "node scripts/nexus-sprint-c21-source-backed-agriculture-static-snapshot-browser-validation-evidence-template-qa.js",
  "node scripts/qa-suite.js nexus-workforce",
  "node scripts/qa-suite.js all-safe"
], "Sprint C21 required QA list");

assertIncludes(doc, [
  "Agriculture Source Review",
  "Evidence & Verification",
  "Verified Extension Fixture",
  "ag-c6-extension-fixture-001",
  "Fixture reviewed 2026-06-26",
  "Source-backed - verify against local conditions before acting",
  "No action has been taken.",
  "Review source details",
  "Not now"
], "Sprint C21 static fixture expected content");

assertIncludes(doc, [
  "Help me find agriculture training",
  "Teach me how irrigation works",
  "Show me farm jobs",
  "Browse AgriTrade",
  "I need help with crop issues",
  "Nexus, call John",
  "Send a WhatsApp message",
  "Show my location",
  "Open the camera",
  "Buy seeds",
  "Schedule an appointment",
  "Emergency help"
], "Sprint C21 prompt evidence table");

assertIncludes(doc, [
  "no clickable buttons",
  "no links",
  "no forms",
  "no inputs",
  "no navigation",
  "no provider handoff",
  "no permission prompt",
  "no network request",
  "no storage write",
  "no script execution",
  "no payment",
  "no call or message",
  "no location or camera request",
  "no health, pharmacy, diagnosis, prescription, appointment, emergency, or dispatch action"
], "Sprint C21 no-execution evidence fields");

assertIncludes(fixture, [
  "data-snapshot-mode=\"test-only\"",
  "data-runtime-loaded=\"false\"",
  "data-execution-allowed=\"false\"",
  "Agriculture Source Review",
  "No action has been taken."
], "Sprint C19 fixture required by Sprint C21");

[
  fixtureName,
  "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js",
  "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js",
  "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js",
  "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"
].forEach(fragment => {
  assert(!index.includes(fragment), `public/index.html must not load runtime fragment: ${fragment}`);
  assert(!app.includes(fragment), `public/app.js must not reference runtime fragment: ${fragment}`);
  assert(!server.includes(fragment), `server.js must not special-case runtime fragment: ${fragment}`);
});

const alias = "qa:nexus-sprint-c21-source-backed-agriculture-static-snapshot-browser-validation-evidence-template";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C21 QA.");

console.log("[nexus-sprint-c21-source-backed-agriculture-static-snapshot-browser-validation-evidence-template-qa] passed");
