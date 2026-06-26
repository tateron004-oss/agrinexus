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

const docName = "NEXUS_SPRINT_C24_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_APPROVAL_RECORD_TEMPLATE.md";
const qaName = "nexus-sprint-c24-source-backed-agriculture-runtime-wiring-approval-record-template-qa.js";
const protectedFragments = [
  "nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html",
  "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js",
  "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js",
  "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js",
  "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"
];

assert(exists("docs", docName), "Sprint C24 approval record template must exist");
assert(exists("scripts", qaName), "Sprint C24 approval record QA must exist");
assert(exists("docs", "NEXUS_SPRINT_C23_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_PREFLIGHT_CHECKLIST.md"), "Sprint C23 preflight checklist must remain present");
assert(exists("docs", "NEXUS_SPRINT_C22_SOURCE_BACKED_AGRICULTURE_STANDARD_USER_RUNTIME_ABSENCE_CONTRACT.md"), "Sprint C22 absence contract must remain present");

const doc = read("docs", docName);
const c23Doc = read("docs", "NEXUS_SPRINT_C23_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_PREFLIGHT_CHECKLIST.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert(c23Doc.includes("Sprint C24 should add a runtime wiring approval record template"), "Sprint C23 must recommend Sprint C24 approval record template.");

assertIncludes(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Approval Record Header",
  "Product Approval",
  "Safety Approval",
  "Technical Approval",
  "Validation Ownership",
  "Required QA Evidence",
  "Required Browser Validation Evidence",
  "Rollback Evidence",
  "Approval Decision",
  "Sprint C24 QA Expectations",
  "Sprint C25 Recommendation",
  "This sprint remains inert",
  "does not approve runtime wiring by itself",
  "does not wire C19/C17/C15/C13/C8 into Standard User runtime",
  "does not change backend behavior"
], "Sprint C24 doc sections and boundaries");

assertIncludes(doc, [
  "Approval record ID:",
  "Approval date:",
  "Approver:",
  "Product owner:",
  "Technical owner:",
  "QA owner:",
  "Browser validation owner:",
  "Rollback owner:",
  "Target branch:",
  "Local HEAD before implementation:",
  "Remote HEAD before implementation:",
  "Go/no-go status: `go` / `no-go` / `blocked`"
], "Sprint C24 approval header fields");

assertIncludes(doc, [
  "approved user-facing outcome:",
  "approved Standard User surface:",
  "approved eligible prompt families:",
  "approved excluded prompt families:",
  "approved source-backed data family:",
  "approved citation/freshness/confidence display:",
  "approved limitation copy:",
  "approved review-only controls:",
  "explicitly not approved actions:"
], "Sprint C24 product approval fields");

assertIncludes(doc, [
  "source-backed",
  "agriculture-only",
  "low-risk only",
  "review-only",
  "no-execution",
  "no provider handoff",
  "no call or message",
  "no payment or marketplace transaction",
  "no location or camera request",
  "no medical, pharmacy, diagnosis, prescription, appointment, emergency, or dispatch action"
], "Sprint C24 safety approval fields");

assertIncludes(doc, [
  "exact runtime file or files proposed for edit:",
  "exact loader or import location:",
  "default-off or scoped activation mechanism:",
  "C8 mapper usage:",
  "C13 eligibility handoff usage:",
  "C15 visible-surface readiness usage:",
  "C17 copy model usage:",
  "C19 fixture status remains test-only:",
  "smallest-change rationale:",
  "rollback plan:"
], "Sprint C24 technical approval fields");

assertIncludes(doc, [
  "deterministic QA:",
  "Standard User browser validation:",
  "console warning/error review:",
  "network request review:",
  "storage mutation review:",
  "permission prompt review:",
  "high-risk prompt exclusion review:",
  "runtime mutation restoration:",
  "final sign-off:"
], "Sprint C24 validation ownership fields");

assertIncludes(doc, [
  "node scripts/nexus-sprint-c23-source-backed-agriculture-runtime-wiring-preflight-checklist-qa.js",
  "node scripts/nexus-sprint-c24-source-backed-agriculture-runtime-wiring-approval-record-template-qa.js",
  "node scripts/qa-suite.js nexus-workforce",
  "node scripts/qa-suite.js all-safe",
  "C20 browser validation plan",
  "C21 evidence template",
  "node server.js",
  "http://127.0.0.1:4182/",
  "Start as User"
], "Sprint C24 QA and browser evidence");

assertIncludes(doc, [
  "failing condition:",
  "reproduction steps:",
  "rollback commit or restoration command:",
  "C22 absence restored:",
  "C22 QA rerun:",
  "`nexus-workforce` rerun:",
  "`all-safe` rerun:",
  "final local HEAD:",
  "final remote HEAD:",
  "final git status:"
], "Sprint C24 rollback evidence fields");

assertIncludes(doc, [
  "`go`",
  "`no-go`",
  "`blocked`",
  "Implementation must stop on `no-go` or `blocked`"
], "Sprint C24 approval decision language");

for (const fragment of protectedFragments) {
  assert(!index.includes(fragment), `public/index.html must not load runtime fragment: ${fragment}`);
  assert(!app.includes(fragment), `public/app.js must not reference runtime fragment: ${fragment}`);
  assert(!server.includes(fragment), `server.js must not special-case runtime fragment: ${fragment}`);
}

const alias = "qa:nexus-sprint-c24-source-backed-agriculture-runtime-wiring-approval-record-template";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C24 QA.");

console.log("[nexus-sprint-c24-source-backed-agriculture-runtime-wiring-approval-record-template-qa] passed");
