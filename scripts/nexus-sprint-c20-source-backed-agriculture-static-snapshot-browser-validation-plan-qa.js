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

const docName = "NEXUS_SPRINT_C20_SOURCE_BACKED_AGRICULTURE_STATIC_SNAPSHOT_BROWSER_VALIDATION_PLAN.md";
const qaName = "nexus-sprint-c20-source-backed-agriculture-static-snapshot-browser-validation-plan-qa.js";
const fixtureName = "nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html";

assert(exists("docs", docName), "Sprint C20 browser validation plan documentation must exist");
assert(exists("scripts", qaName), "Sprint C20 browser validation plan QA must exist");
assert(exists("test-fixtures", fixtureName), "Sprint C19 static snapshot fixture must remain present");
assert(exists("docs", "NEXUS_SPRINT_C19_SOURCE_BACKED_AGRICULTURE_STATIC_VISUAL_SNAPSHOT_CONTRACT.md"), "Sprint C19 contract must remain present");

const doc = read("docs", docName);
const c19Doc = read("docs", "NEXUS_SPRINT_C19_SOURCE_BACKED_AGRICULTURE_STATIC_VISUAL_SNAPSHOT_CONTRACT.md");
const fixture = read("test-fixtures", fixtureName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert(c19Doc.includes("Sprint C20 should add a browser-validation plan"), "Sprint C19 must recommend Sprint C20 browser validation plan.");

assertIncludes(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Browser Validation Scope",
  "Static Fixture Review Procedure",
  "Static Fixture Browser Safety Checks",
  "Standard User Runtime Absence Procedure",
  "Standard User Prompt Checks",
  "Runtime Mutation Restoration",
  "Required Deterministic QA",
  "Go / No-Go Criteria",
  "Sprint C21 Recommendation",
  "This sprint remains inert",
  "not runtime activation approval",
  "outside `public/`",
  "Standard User runtime remains unwired",
  "still without runtime wiring"
], "Sprint C20 doc");

assertIncludes(doc, [
  "test-fixtures/nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html",
  "node server.js",
  "http://127.0.0.1:4182/",
  "Start as User",
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
], "Sprint C20 validation commands and prompts");

assertIncludes(doc, [
  "no buttons",
  "links",
  "forms",
  "inputs",
  "scripts",
  "handlers",
  "navigation",
  "network",
  "storage",
  "permission",
  "provider",
  "execution",
  "No action has been taken.",
  "no provider handoff",
  "no permission prompt",
  "no storage mutation",
  "no source-backed agriculture static snapshot card appears by default"
], "Sprint C20 no-execution boundaries");

assertIncludes(fixture, [
  "data-snapshot-mode=\"test-only\"",
  "data-runtime-loaded=\"false\"",
  "data-render-dom-allowed=\"false\"",
  "data-execution-allowed=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-permission-request=\"false\"",
  "Agriculture Source Review",
  "Evidence &amp; Verification",
  "No action has been taken."
], "Sprint C19 fixture required by Sprint C20");

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

const alias = "qa:nexus-sprint-c20-source-backed-agriculture-static-snapshot-browser-validation-plan";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C20 QA.");

console.log("[nexus-sprint-c20-source-backed-agriculture-static-snapshot-browser-validation-plan-qa] passed");
