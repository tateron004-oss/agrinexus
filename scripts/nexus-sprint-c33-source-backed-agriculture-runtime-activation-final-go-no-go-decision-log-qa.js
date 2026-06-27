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

const docName = "NEXUS_SPRINT_C33_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_FINAL_GO_NO_GO_DECISION_LOG.md";
const qaName = "nexus-sprint-c33-source-backed-agriculture-runtime-activation-final-go-no-go-decision-log-qa.js";
const protectedFragments = [
  "nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html",
  "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js",
  "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js",
  "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js",
  "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"
];

assert(exists("docs", docName), "Sprint C33 final go/no-go decision log must exist");
assert(exists("scripts", qaName), "Sprint C33 final go/no-go decision log QA must exist");

for (const prior of [
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
]) {
  assert(exists("docs", prior), `${prior} must remain present`);
}

const doc = read("docs", docName);
const c32Doc = read("docs", "NEXUS_SPRINT_C32_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_MERGE_FREEZE_ROLLBACK_DRILL_PLAN.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert(
  c32Doc.includes("Sprint C33 should add an implementation-free source-backed agriculture runtime activation final go/no-go meeting agenda and decision log"),
  "Sprint C32 must recommend Sprint C33 final go/no-go decision log."
);

assertIncludes(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Decision Log Boundary",
  "Required Meeting Attendees",
  "Required Meeting Agenda",
  "Required Evidence Review",
  "Required Source Packet Review",
  "Required Safety Review",
  "Required QA Review",
  "Required Browser Review",
  "Required Owner Vote",
  "Final Decision Record Template",
  "Decision Invalidators",
  "Protected Runtime Fragments",
  "Sprint C33 QA Expectations",
  "Sprint C34 Recommendation",
  "This sprint remains inert"
], "Sprint C33 doc sections and inert boundary");

assertIncludes(doc, [
  "product owner:",
  "safety owner:",
  "technical owner:",
  "QA owner:",
  "browser validation owner:",
  "rollback owner:",
  "source packet owner:",
  "release coordinator:"
], "Sprint C33 required attendees");

assertIncludes(doc, [
  "Activation scope summary",
  "C29 issue completion",
  "C30 branch policy compliance",
  "C31 PR checklist completion",
  "C32 merge freeze and rollback drill result",
  "Source packet readiness",
  "Eligible prompt validation",
  "Excluded/high-risk prompt validation",
  "Final owner votes",
  "Final decision"
], "Sprint C33 meeting agenda");

assertIncludes(doc, [
  "C22 runtime absence baseline",
  "C23 runtime wiring preflight checklist",
  "C24 approval record with final `go`",
  "C25 risk register with owner assignments",
  "C26 rollback plan",
  "C27 dry-run patch plan",
  "C28 activation decision checklist",
  "C29 runtime wiring issue",
  "C30 branch policy record",
  "C31 PR checklist",
  "C32 rollback drill and merge freeze record"
], "Sprint C33 required evidence review");

assertIncludes(doc, [
  "source owner:",
  "source name:",
  "source URL or local fixture:",
  "citation:",
  "freshness timestamp:",
  "confidence level:",
  "limitations:",
  "low-risk agriculture eligibility reason:",
  "stale-source fallback:",
  "missing-source fallback:",
  "unsupported prompt fallback:"
], "Sprint C33 source packet review");

assertIncludes(doc, [
  "provider handoff",
  "calls or messages",
  "WhatsApp, Telegram, SMS, email, or phone-provider execution",
  "payments",
  "marketplace transactions",
  "buy/sell execution",
  "location sharing",
  "camera or microphone activation",
  "health, telehealth, pharmacy, prescription, emergency, dispatch, or medical-record execution",
  "backend mutations",
  "persistent storage side effects",
  "external navigation",
  "automatic confirmation",
  "hidden/debug metadata exposure"
], "Sprint C33 safety review");

assertIncludes(doc, [
  "git diff --check",
  "node --check server.js",
  "node --check public/app.js",
  "node --check scripts/qa-suite.js",
  "source-backed agriculture focused QA:",
  "C22-C32 guard QA:",
  "node scripts/qa-suite.js nexus-workforce",
  "node scripts/qa-suite.js all-safe"
], "Sprint C33 QA review");

assertIncludes(doc, [
  "command: `node server.js`",
  "URL: `http://127.0.0.1:4182/`",
  "path: `Start as User`",
  "eligible prompt results:",
  "excluded prompt results:",
  "console warnings/errors:",
  "hidden/debug metadata absence:",
  "no auto-execution evidence:"
], "Sprint C33 browser review");

assertIncludes(doc, [
  "product owner: `go` / `no-go` / `blocked`",
  "safety owner: `go` / `no-go` / `blocked`",
  "technical owner: `go` / `no-go` / `blocked`",
  "QA owner: `go` / `no-go` / `blocked`",
  "browser validation owner: `go` / `no-go` / `blocked`",
  "rollback owner: `go` / `no-go` / `blocked`",
  "source packet owner: `go` / `no-go` / `blocked`",
  "Any `no-go` or `blocked` vote blocks merge."
], "Sprint C33 owner votes");

assertIncludes(doc, [
  "Decision ID:",
  "Decision date:",
  "C29 issue:",
  "C30 branch:",
  "C31 PR:",
  "C32 freeze/drill record:",
  "Local HEAD before decision:",
  "Remote HEAD before decision:",
  "Final decision: `go` / `no-go` / `blocked`",
  "Decision rationale:",
  "Owner vote summary:",
  "Rollback trigger confirmation:"
], "Sprint C33 final decision record");

assertIncludes(doc, [
  "HEAD changes after the decision but before merge",
  "any C22-C32 evidence changes",
  "any owner changes their vote",
  "QA is rerun and fails",
  "browser validation is rerun and fails",
  "source packet freshness expires",
  "rollback owner becomes unavailable",
  "implementation scope changes",
  "any blocked no-execution behavior appears"
], "Sprint C33 decision invalidators");

assertIncludes(doc, [
  "Sprint C34 should add an implementation-free source-backed agriculture runtime activation post-decision implementation ticket template"
], "Sprint C33 next sprint recommendation");

for (const fragment of protectedFragments) {
  assert(doc.includes(fragment), `Sprint C33 doc must name protected fragment: ${fragment}`);
  assert(!index.includes(fragment), `public/index.html must not load runtime fragment: ${fragment}`);
  assert(!app.includes(fragment), `public/app.js must not reference runtime fragment: ${fragment}`);
  assert(!server.includes(fragment), `server.js must not special-case runtime fragment: ${fragment}`);
}

const alias = "qa:nexus-sprint-c33-source-backed-agriculture-runtime-activation-final-go-no-go-decision-log";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C33 QA.");

console.log("[nexus-sprint-c33-source-backed-agriculture-runtime-activation-final-go-no-go-decision-log-qa] passed");
