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

const docName = "NEXUS_SPRINT_C32_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_MERGE_FREEZE_ROLLBACK_DRILL_PLAN.md";
const qaName = "nexus-sprint-c32-source-backed-agriculture-runtime-activation-merge-freeze-rollback-drill-plan-qa.js";
const protectedFragments = [
  "nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html",
  "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js",
  "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js",
  "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js",
  "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"
];

assert(exists("docs", docName), "Sprint C32 merge freeze and rollback drill plan must exist");
assert(exists("scripts", qaName), "Sprint C32 merge freeze and rollback drill plan QA must exist");

for (const prior of [
  "NEXUS_SPRINT_C31_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_PULL_REQUEST_CHECKLIST.md",
  "NEXUS_SPRINT_C30_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_BRANCH_POLICY.md",
  "NEXUS_SPRINT_C29_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_ISSUE_TEMPLATE.md",
  "NEXUS_SPRINT_C28_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_DECISION_CHECKLIST.md",
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
const c31Doc = read("docs", "NEXUS_SPRINT_C31_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_PULL_REQUEST_CHECKLIST.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert(
  c31Doc.includes("Sprint C32 should add an implementation-free source-backed agriculture runtime activation merge freeze and rollback drill plan"),
  "Sprint C31 must recommend Sprint C32 merge freeze and rollback drill plan."
);

assertIncludes(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Merge Freeze Boundary",
  "Required Freeze Window",
  "Required Pre-Merge Rollback Drill",
  "Required Post-Merge Stabilization Window",
  "Required Monitoring Checklist",
  "Required Rollback Triggers",
  "Rollback Drill Record Template",
  "Post-Merge Stabilization Record Template",
  "Protected Runtime Fragments",
  "Sprint C32 QA Expectations",
  "Sprint C33 Recommendation",
  "This sprint remains inert"
], "Sprint C32 doc sections and inert boundary");

assertIncludes(doc, [
  "freeze owner:",
  "freeze start:",
  "freeze end:",
  "blocked concurrent work:",
  "allowed emergency fixes:",
  "communication channel:",
  "rollback decision owner:",
  "browser validation owner:",
  "QA owner:"
], "Sprint C32 freeze window");

assertIncludes(doc, [
  "run rollback commands in a disposable local state",
  "run `git diff --check`",
  "run source-backed agriculture focused QA",
  "run `node scripts/qa-suite.js nexus-workforce`",
  "run `node scripts/qa-suite.js all-safe`",
  "confirm Standard User browser path can be restored",
  "record drill result as `pass` / `fail` / `blocked`"
], "Sprint C32 rollback drill");

assertIncludes(doc, [
  "stabilization owner:",
  "local HEAD after merge:",
  "remote HEAD after merge:",
  "monitored prompts:",
  "monitored excluded prompts:",
  "console warning/error threshold:",
  "rollback trigger threshold:",
  "final stabilization decision: `stable` / `rollback` / `blocked`"
], "Sprint C32 stabilization window");

assertIncludes(doc, [
  "eligible low-risk agriculture prompts render the approved card only",
  "source/citation/freshness/confidence/limitation fields are visible",
  "excluded/high-risk prompts do not render the source-backed agriculture card",
  "Standard User remains low-risk, review-only, and no-execution",
  "no provider handoff occurs",
  "no call or message occurs",
  "no payment occurs",
  "no marketplace transaction occurs",
  "no location sharing occurs",
  "no camera or microphone activation occurs",
  "no health, telehealth, pharmacy, emergency, dispatch, or medical-record execution occurs",
  "no backend mutation or persistent storage side effect occurs",
  "no external navigation occurs",
  "no hidden/debug metadata is exposed"
], "Sprint C32 monitoring checklist");

assertIncludes(doc, [
  "eligible prompts render unsafe or misleading content",
  "source/citation/freshness/confidence/limitation fields are missing",
  "excluded/high-risk prompts render the agriculture card",
  "any blocked no-execution behavior appears",
  "browser validation fails",
  "`nexus-workforce` fails",
  "`all-safe` fails",
  "repo state cannot be restored",
  "console errors affect the Standard User path",
  "rollback owner or decision owner is unavailable"
], "Sprint C32 rollback triggers");

assertIncludes(doc, [
  "Drill ID:",
  "C29 issue:",
  "C30 branch:",
  "C31 PR:",
  "Rollback owner:",
  "Decision owner:",
  "Local HEAD before drill:",
  "Remote HEAD before drill:",
  "Activation branch HEAD:",
  "Files restored:",
  "Commands used:",
  "QA results:",
  "Browser validation result:",
  "Drill decision: `pass` / `fail` / `blocked`"
], "Sprint C32 rollback drill record");

assertIncludes(doc, [
  "Stabilization ID:",
  "Merged PR:",
  "Local HEAD after merge:",
  "Remote HEAD after merge:",
  "Eligible prompt results:",
  "Excluded prompt results:",
  "QA results:",
  "Console findings:",
  "Rollback trigger assessment:",
  "Final stabilization decision: `stable` / `rollback` / `blocked`"
], "Sprint C32 stabilization record");

assertIncludes(doc, [
  "Sprint C33 should add an implementation-free source-backed agriculture runtime activation final go/no-go meeting agenda and decision log"
], "Sprint C32 next sprint recommendation");

for (const fragment of protectedFragments) {
  assert(doc.includes(fragment), `Sprint C32 doc must name protected fragment: ${fragment}`);
  assert(!index.includes(fragment), `public/index.html must not load runtime fragment: ${fragment}`);
  assert(!app.includes(fragment), `public/app.js must not reference runtime fragment: ${fragment}`);
  assert(!server.includes(fragment), `server.js must not special-case runtime fragment: ${fragment}`);
}

const alias = "qa:nexus-sprint-c32-source-backed-agriculture-runtime-activation-merge-freeze-rollback-drill-plan";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C32 QA.");

console.log("[nexus-sprint-c32-source-backed-agriculture-runtime-activation-merge-freeze-rollback-drill-plan-qa] passed");
