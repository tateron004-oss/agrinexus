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

const docName = "NEXUS_SPRINT_C27_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_DRY_RUN_PATCH_PLAN.md";
const qaName = "nexus-sprint-c27-source-backed-agriculture-runtime-wiring-dry-run-patch-plan-qa.js";
const protectedFragments = [
  "nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html",
  "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js",
  "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js",
  "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js",
  "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"
];

assert(exists("docs", docName), "Sprint C27 dry-run patch plan must exist");
assert(exists("scripts", qaName), "Sprint C27 dry-run patch plan QA must exist");
assert(exists("docs", "NEXUS_SPRINT_C26_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_ROLLBACK_PLAN_TEMPLATE.md"), "Sprint C26 rollback plan must remain present");
assert(exists("docs", "NEXUS_SPRINT_C25_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_RISK_REGISTER.md"), "Sprint C25 risk register must remain present");
assert(exists("docs", "NEXUS_SPRINT_C24_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_APPROVAL_RECORD_TEMPLATE.md"), "Sprint C24 approval template must remain present");
assert(exists("docs", "NEXUS_SPRINT_C23_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_PREFLIGHT_CHECKLIST.md"), "Sprint C23 preflight checklist must remain present");
assert(exists("docs", "NEXUS_SPRINT_C22_SOURCE_BACKED_AGRICULTURE_STANDARD_USER_RUNTIME_ABSENCE_CONTRACT.md"), "Sprint C22 absence contract must remain present");

const doc = read("docs", docName);
const c26Doc = read("docs", "NEXUS_SPRINT_C26_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_ROLLBACK_PLAN_TEMPLATE.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert(c26Doc.includes("Sprint C27 should add a source-backed agriculture runtime wiring dry-run patch plan"), "Sprint C26 must recommend Sprint C27 dry-run patch plan.");

assertIncludes(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Dry-Run Boundary",
  "Future Patch Candidate Files",
  "Future Patch Shape",
  "Dry-Run Non-Changes",
  "Required Pre-Patch Evidence",
  "Required Post-Patch Evidence",
  "Go/No-Go Decision",
  "Sprint C27 QA Expectations",
  "Sprint C28 Recommendation",
  "This sprint remains inert",
  "does not wire C19/C17/C15/C13/C8 into Standard User runtime",
  "does not change backend behavior",
  "does not approve runtime wiring by itself"
], "Sprint C27 doc sections and inert boundaries");

assertIncludes(doc, [
  "`public/app.js`",
  "`public/index.html`",
  "no `server.js` change unless",
  "test-only or contract-only"
], "Sprint C27 candidate future files");

assertIncludes(doc, [
  "Resolve a default-off or explicitly scoped activation decision",
  "source, citation, freshness, confidence, limitation",
  "Verify C13 eligibility",
  "Map approved fields through C8 and C17 contracts",
  "Render only review-only, no-execution copy",
  "Fall back to existing assistant text"
], "Sprint C27 future patch shape");

assertIncludes(doc, [
  "import C8, C13, C15, C17, or C19",
  "add script tags",
  "add dynamic imports",
  "add event listeners",
  "add click handlers",
  "create DOM nodes",
  "add route handlers",
  "add backend endpoints",
  "add fetch calls",
  "write localStorage or sessionStorage",
  "change command routing",
  "change selectedToolId inference"
], "Sprint C27 dry-run non-changes");

assertIncludes(doc, [
  "C22 runtime absence QA result",
  "C23 preflight QA result",
  "C24 approval decision",
  "C25 risk owner review",
  "C26 rollback plan owner sign-off",
  "C27 dry-run plan owner sign-off",
  "proposed exact file paths",
  "proposed exact insertion points",
  "expected fallback behavior",
  "expected rollback path"
], "Sprint C27 pre-patch evidence");

assertIncludes(doc, [
  "git diff --check",
  "node --check server.js",
  "node --check public/app.js",
  "C8/C13/C15/C17/C19 QA results",
  "C20 browser validation plan completion",
  "C21 browser validation evidence",
  "C22 runtime absence or updated activation guard result",
  "C23/C24/C25/C26/C27 QA results",
  "node scripts/qa-suite.js nexus-workforce",
  "node scripts/qa-suite.js all-safe",
  "console warning/error review",
  "network request review",
  "storage mutation review",
  "permission prompt review",
  "external navigation review",
  "rollback evidence"
], "Sprint C27 post-patch evidence");

assertIncludes(doc, [
  "live provider",
  "call",
  "message",
  "payment",
  "marketplace transaction",
  "location",
  "camera",
  "health",
  "pharmacy",
  "emergency",
  "dispatch",
  "backend",
  "storage behavior"
], "Sprint C27 no-go safety language");

assertIncludes(doc, [
  "Sprint C28 should add a source-backed agriculture runtime activation decision checklist"
], "Sprint C27 next sprint recommendation");

for (const fragment of protectedFragments) {
  assert(doc.includes(fragment), `Sprint C27 doc must name protected fragment: ${fragment}`);
  assert(!index.includes(fragment), `public/index.html must not load runtime fragment: ${fragment}`);
  assert(!app.includes(fragment), `public/app.js must not reference runtime fragment: ${fragment}`);
  assert(!server.includes(fragment), `server.js must not special-case runtime fragment: ${fragment}`);
}

const alias = "qa:nexus-sprint-c27-source-backed-agriculture-runtime-wiring-dry-run-patch-plan";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C27 QA.");

console.log("[nexus-sprint-c27-source-backed-agriculture-runtime-wiring-dry-run-patch-plan-qa] passed");
