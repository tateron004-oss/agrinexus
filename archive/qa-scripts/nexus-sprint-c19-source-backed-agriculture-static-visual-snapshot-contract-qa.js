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

const docPath = path.join(root, "docs", "NEXUS_SPRINT_C19_SOURCE_BACKED_AGRICULTURE_STATIC_VISUAL_SNAPSHOT_CONTRACT.md");
const fixturePath = path.join(root, "test-fixtures", "nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html");
assert(fs.existsSync(docPath), "Sprint C19 documentation must exist");
assert(fs.existsSync(fixturePath), "Sprint C19 static visual snapshot fixture must exist");

const doc = read("docs", "NEXUS_SPRINT_C19_SOURCE_BACKED_AGRICULTURE_STATIC_VISUAL_SNAPSHOT_CONTRACT.md");
const c18Doc = read("docs", "NEXUS_SPRINT_C18_SOURCE_BACKED_AGRICULTURE_VISUAL_SEMANTICS_REVIEW_PLAN.md");
const fixture = read("test-fixtures", "nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert(exists("public", "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js"), "C17 copy model must exist");
assert(c18Doc.includes("Sprint C19 should add a fixture-only static visual snapshot contract for the C17 copy model"), "C18 doc must recommend C19 static visual snapshot contract.");

assertIncludes(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Fixture Location",
  "Snapshot Content",
  "Snapshot Safety Attributes",
  "What The Fixture Must Not Include",
  "Standard User Boundary",
  "Sprint C19 QA Expectations",
  "Sprint C20 Recommendation",
  "This sprint remains inert",
  "outside `public/`",
  "does not render DOM in Standard User runtime",
  "does not load C17 in `public/index.html`",
  "does not import C17 in `public/app.js`",
  "does not change backend behavior"
], "Sprint C19 doc");

assertIncludes(doc, [
  "test-fixtures/nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html",
  "`Agriculture Source Review`",
  "`Evidence & Verification`",
  "`No action has been taken.`",
  "`Review source details`",
  "`Not now`",
  "`data-snapshot-mode=\"test-only\"`",
  "`data-runtime-loaded=\"false\"`",
  "`data-render-dom-allowed=\"false\"`",
  "`data-execution-allowed=\"false\"`",
  "`data-provider-handoff=\"false\"`",
  "`data-permission-request=\"false\"`"
], "Sprint C19 doc contract");

assertIncludes(fixture, [
  "<!doctype html>",
  "Nexus Sprint C19 Source-Backed Agriculture Static Snapshot",
  "data-nexus-snapshot=\"source-backed-agriculture\"",
  "data-snapshot-mode=\"test-only\"",
  "data-runtime-loaded=\"false\"",
  "data-render-dom-allowed=\"false\"",
  "data-execution-allowed=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-permission-request=\"false\"",
  "data-payment-allowed=\"false\"",
  "data-location-request=\"false\"",
  "data-camera-request=\"false\"",
  "data-medical-action=\"false\"",
  "data-emergency-dispatch=\"false\"",
  "Agriculture Source Review",
  "Evidence &amp; Verification",
  "Source",
  "Verified Extension Fixture",
  "Type",
  "extension",
  "Source contract",
  "ag-c6-extension-fixture-001",
  "Verification",
  "verified",
  "Freshness",
  "Fixture reviewed 2026-06-26",
  "Confidence",
  "Source-backed - verify against local conditions before acting",
  "What this source supports",
  "What Nexus inferred",
  "Local applicability",
  "What Nexus is not claiming",
  "Action status",
  "No action has been taken.",
  "Review source details unavailable in this static fixture.",
  "Not now is represented as static text only."
], "Sprint C19 fixture");

assert.equal((fixture.match(/<article\b/g) || []).length, 1, "snapshot fixture must include exactly one static review article");
assert.equal((fixture.match(/<section\b/g) || []).length, 6, "snapshot fixture must include exactly six static sections");

for (const forbidden of [
  /<script\b/i,
  /\son[a-z]+\s*=/i,
  /<button\b/i,
  /<a\b/i,
  /\shref\s*=/i,
  /<form\b/i,
  /<input\b/i,
  /<textarea\b/i,
  /<select\b/i,
  /<img\b/i,
  /<iframe\b/i,
  /\bfetch\s*\(/i,
  /\blocalStorage\b/i,
  /\bsessionStorage\b/i,
  /\bwindow\.location\b/i,
  /\bwindow\.open\b/i
]) {
  assert(!forbidden.test(fixture), `snapshot fixture must not contain forbidden pattern: ${forbidden}`);
}

for (const forbiddenTerm of [
  "execute now",
  "call now",
  "send message",
  "share location",
  "open camera",
  "make payment",
  "buy now",
  "purchase now",
  "emergency dispatch",
  "book appointment",
  "submit form",
  "prescribe",
  "refill now",
  "diagnose now",
  "dispatch now"
]) {
  assert(!fixture.toLowerCase().includes(forbiddenTerm), `snapshot fixture must not include unsafe affordance text: ${forbiddenTerm}`);
}

[
  "nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html",
  "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js",
  "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js",
  "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js",
  "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"
].forEach(fragment => {
  assert(!index.includes(fragment), `public/index.html must not load runtime fragment: ${fragment}`);
  assert(!app.includes(fragment), `public/app.js must not reference runtime fragment: ${fragment}`);
  assert(!server.includes(fragment), `server.js must not special-case runtime fragment: ${fragment}`);
});

const alias = "qa:nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot-contract";
const command = "node scripts/nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot-contract-qa.js";
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes("scripts/nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot-contract-qa.js"), "qa-suite must include Sprint C19 QA.");

console.log("[nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot-contract-qa] passed");
