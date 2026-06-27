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

const docName = "NEXUS_SPRINT_C37_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_FINAL_ARCHIVE_INDEX.md";
const qaName = "nexus-sprint-c37-source-backed-agriculture-runtime-activation-final-archive-index-qa.js";
const protectedFragments = [
  "nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html",
  "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js",
  "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js",
  "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js",
  "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"
];

const docs = [
  "NEXUS_SPRINT_C37_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_FINAL_ARCHIVE_INDEX.md",
  "NEXUS_SPRINT_C36_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_RELEASE_READINESS_SCORECARD.md",
  "NEXUS_SPRINT_C35_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_IMPLEMENTATION_HANDOFF_PACKET.md",
  "NEXUS_SPRINT_C34_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_POST_DECISION_IMPLEMENTATION_TICKET_TEMPLATE.md",
  "NEXUS_SPRINT_C33_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_FINAL_GO_NO_GO_DECISION_LOG.md",
  "NEXUS_SPRINT_C32_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_MERGE_FREEZE_ROLLBACK_DRILL_PLAN.md",
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
];

assert(exists("docs", docName), "Sprint C37 final archive index must exist");
assert(exists("scripts", qaName), "Sprint C37 final archive index QA must exist");

for (const prior of docs) {
  assert(exists("docs", prior), `${prior} must remain present`);
}

const doc = read("docs", docName);
const c36Doc = read("docs", "NEXUS_SPRINT_C36_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_RELEASE_READINESS_SCORECARD.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert(
  c36Doc.includes("Sprint C37 should add an implementation-free source-backed agriculture runtime activation final archive index"),
  "Sprint C36 must recommend Sprint C37 final archive index."
);

assertIncludes(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Archive Boundary",
  "Ordered Archive Index",
  "Baseline And Absence",
  "Runtime Wiring Preflight",
  "Approval And Risk",
  "Rollback And Dry Run",
  "Decision And Issue Creation",
  "Branch And Pull Request Controls",
  "Merge Freeze And Final Decision",
  "Implementation Ticket And Handoff",
  "Release Readiness Scoring",
  "Required Archive Review Sequence",
  "Archive Completeness Checklist",
  "Protected Runtime Fragments",
  "No-Execution Archive Guarantee",
  "Sprint C37 QA Expectations",
  "Sprint C38 Recommendation",
  "This sprint remains inert"
], "Sprint C37 doc sections and inert boundary");

for (let sprint = 22; sprint <= 36; sprint += 1) {
  assert(doc.includes(`C${sprint}`), `Sprint C37 archive must reference C${sprint}`);
}

assertIncludes(doc, [
  "every C22-C36 document exists",
  "every C22-C36 QA guard exists",
  "every C22-C36 QA guard is wired into `scripts/qa-suite.js`",
  "every C22-C36 package alias exists",
  "every prior recommendation points to the next sprint",
  "runtime protected fragments remain absent",
  "no runtime activation file has been loaded by `public/index.html`, `public/app.js`, or `server.js`"
], "Sprint C37 archive completeness checklist");

assertIncludes(doc, [
  "no provider handoff",
  "no calls",
  "no messages",
  "no WhatsApp, Telegram, SMS, email, or phone-provider execution",
  "no payments",
  "no marketplace transactions",
  "no location sharing",
  "no camera or microphone activation",
  "no health, telehealth, pharmacy, prescription, emergency, dispatch, diagnosis, or medical-record execution",
  "no backend mutations",
  "no persistent storage side effects",
  "no external navigation",
  "no hidden execution queues",
  "no automatic confirmation",
  "no hidden/debug metadata exposure"
], "Sprint C37 no-execution archive guarantee");

assertIncludes(doc, [
  "Sprint C38 should add an implementation-free source-backed agriculture activation readiness closeout report"
], "Sprint C37 next sprint recommendation");

for (const fragment of protectedFragments) {
  assert(doc.includes(fragment), `Sprint C37 doc must name protected fragment: ${fragment}`);
  assert(!index.includes(fragment), `public/index.html must not load runtime fragment: ${fragment}`);
  assert(!app.includes(fragment), `public/app.js must not reference runtime fragment: ${fragment}`);
  assert(!server.includes(fragment), `server.js must not special-case runtime fragment: ${fragment}`);
}

const alias = "qa:nexus-sprint-c37-source-backed-agriculture-runtime-activation-final-archive-index";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C37 QA.");

console.log("[nexus-sprint-c37-source-backed-agriculture-runtime-activation-final-archive-index-qa] passed");
