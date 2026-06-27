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

const docName = "NEXUS_SPRINT_C28_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_DECISION_CHECKLIST.md";
const qaName = "nexus-sprint-c28-source-backed-agriculture-runtime-activation-decision-checklist-qa.js";
const protectedFragments = [
  "nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html",
  "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js",
  "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js",
  "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js",
  "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"
];

assert(exists("docs", docName), "Sprint C28 activation decision checklist must exist");
assert(exists("scripts", qaName), "Sprint C28 activation decision checklist QA must exist");

for (const prior of [
  "NEXUS_SPRINT_C27_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_DRY_RUN_PATCH_PLAN.md",
  "NEXUS_SPRINT_C26_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_ROLLBACK_PLAN_TEMPLATE.md",
  "NEXUS_SPRINT_C25_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_RISK_REGISTER.md",
  "NEXUS_SPRINT_C24_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_APPROVAL_RECORD_TEMPLATE.md",
  "NEXUS_SPRINT_C23_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_PREFLIGHT_CHECKLIST.md",
  "NEXUS_SPRINT_C22_SOURCE_BACKED_AGRICULTURE_STANDARD_USER_RUNTIME_ABSENCE_CONTRACT.md"
]) {
  assert(exists("docs", prior), `${prior} must remain present`);
}

const doc = read("docs", docName);
const c27Doc = read("docs", "NEXUS_SPRINT_C27_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_DRY_RUN_PATCH_PLAN.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert(c27Doc.includes("Sprint C28 should add a source-backed agriculture runtime activation decision checklist"), "Sprint C27 must recommend Sprint C28 decision checklist.");

assertIncludes(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Decision Checklist Boundary",
  "Consolidated Gate Checklist",
  "Required Go Conditions",
  "Required No-Go Conditions",
  "Protected Runtime Fragments",
  "Decision Record Template",
  "Sprint C28 QA Expectations",
  "Sprint C29 Recommendation",
  "This sprint remains inert",
  "does not wire C19/C17/C15/C13/C8 into Standard User runtime",
  "does not change backend behavior"
], "Sprint C28 doc sections and inert boundaries");

assertIncludes(doc, [
  "C22 runtime absence baseline",
  "C23 preflight checklist",
  "C24 approval record",
  "C25 risk register",
  "C26 rollback plan",
  "C27 dry-run patch plan",
  "Source packet readiness",
  "Browser validation ownership",
  "QA ownership",
  "Runtime restoration"
], "Sprint C28 consolidated gates");

assertIncludes(doc, [
  "C24 approval record is explicitly marked `go`",
  "C25 critical/high risks are owned and mitigated",
  "C26 rollback plan is complete before implementation",
  "C27 dry-run plan identifies the smallest safe touch points",
  "source-backed packet fields are complete",
  "high-risk prompt exclusion is deterministic",
  "Standard User remains low-risk, review-only, and no-execution",
  "node scripts/qa-suite.js nexus-workforce",
  "node scripts/qa-suite.js all-safe"
], "Sprint C28 go conditions");

assertIncludes(doc, [
  "any gate status remains pending, blocked, or unknown",
  "approval owner, QA owner, browser validation owner, or rollback owner is missing",
  "source/citation/freshness/confidence/limitation fields are missing",
  "high-risk prompt exclusion is uncertain",
  "provider handoff",
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
  "storage",
  "external navigation",
  "rollback path cannot be executed",
  "repo state cannot be restored"
], "Sprint C28 no-go conditions");

assertIncludes(doc, [
  "Decision ID:",
  "Decision date:",
  "Product owner:",
  "Safety owner:",
  "Technical owner:",
  "QA owner:",
  "Browser validation owner:",
  "Rollback owner:",
  "Local HEAD before implementation:",
  "Remote HEAD before implementation:",
  "Gate checklist status:",
  "Final decision: `go` / `no-go` / `blocked`",
  "Rationale:",
  "Required follow-up:"
], "Sprint C28 decision record template");

assertIncludes(doc, [
  "Sprint C29 should add an implementation-free source-backed agriculture runtime wiring issue template"
], "Sprint C28 next sprint recommendation");

for (const fragment of protectedFragments) {
  assert(doc.includes(fragment), `Sprint C28 doc must name protected fragment: ${fragment}`);
  assert(!index.includes(fragment), `public/index.html must not load runtime fragment: ${fragment}`);
  assert(!app.includes(fragment), `public/app.js must not reference runtime fragment: ${fragment}`);
  assert(!server.includes(fragment), `server.js must not special-case runtime fragment: ${fragment}`);
}

const alias = "qa:nexus-sprint-c28-source-backed-agriculture-runtime-activation-decision-checklist";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C28 QA.");

console.log("[nexus-sprint-c28-source-backed-agriculture-runtime-activation-decision-checklist-qa] passed");
