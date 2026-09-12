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

const docName = "NEXUS_SPRINT_C30_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_BRANCH_POLICY.md";
const qaName = "nexus-sprint-c30-source-backed-agriculture-runtime-activation-branch-policy-qa.js";
const protectedFragments = [
  "nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html",
  "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js",
  "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js",
  "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js",
  "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"
];

assert(exists("docs", docName), "Sprint C30 runtime activation branch policy must exist");
assert(exists("scripts", qaName), "Sprint C30 runtime activation branch policy QA must exist");

for (const prior of [
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
const c29Doc = read("docs", "NEXUS_SPRINT_C29_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_ISSUE_TEMPLATE.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert(
  c29Doc.includes("Sprint C30 should add an implementation-free source-backed agriculture runtime activation branch policy"),
  "Sprint C29 must recommend Sprint C30 branch policy."
);

assertIncludes(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Branch Policy Boundary",
  "Required Branch Preconditions",
  "Required Branch Naming",
  "Allowed Branch Scope",
  "Blocked Branch Scope",
  "Required Pull Request Evidence",
  "Required Reviewers",
  "Required No-Go Conditions",
  "Protected Runtime Fragments",
  "Branch Policy Record Template",
  "Sprint C30 QA Expectations",
  "Sprint C31 Recommendation",
  "This sprint remains inert"
], "Sprint C30 doc sections and inert boundary");

assertIncludes(doc, [
  "the C29 runtime wiring issue exists and is linked in the branch description",
  "the C29 issue has completed C22-C28 evidence attachments",
  "the C28 decision checklist is marked `go`",
  "the C24 approval record is marked `go`",
  "C25 critical/high risks have owners and mitigation plans",
  "the C26 rollback plan has an owner, trigger threshold, and restoration procedure",
  "the C27 dry-run patch plan identifies exact file paths and insertion points",
  "source packet fields include citation, freshness, confidence, limitation, and low-risk agriculture eligibility",
  "deterministic high-risk exclusions are documented"
], "Sprint C30 required branch preconditions");

assertIncludes(doc, [
  "codex/source-backed-agriculture-runtime-activation-<issue-id>",
  "Standard User source-backed agriculture guidance",
  "review-only or preview-only visible cards",
  "deterministic low-risk agriculture eligibility checks",
  "visible source/citation/freshness/confidence/limitation fields"
], "Sprint C30 branch naming and allowed scope");

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
  "hidden execution queues",
  "unrelated rebrands, refactors, or route rewrites"
], "Sprint C30 blocked branch scope");

assertIncludes(doc, [
  "linked C29 issue",
  "completed C22 runtime absence evidence before implementation",
  "completed C23 preflight checklist",
  "completed C24 approval record",
  "completed C25 risk register",
  "completed C26 rollback plan",
  "completed C27 dry-run patch plan",
  "completed C28 decision checklist",
  "browser validation evidence on `node server.js` / `Start as User`",
  "node scripts/qa-suite.js nexus-workforce",
  "node scripts/qa-suite.js all-safe"
], "Sprint C30 PR evidence requirements");

assertIncludes(doc, [
  "product decision",
  "safety boundary",
  "technical implementation",
  "QA evidence",
  "browser validation evidence",
  "rollback readiness",
  "source packet validity"
], "Sprint C30 required reviewers");

assertIncludes(doc, [
  "the C29 issue is incomplete",
  "C22-C28 evidence is missing",
  "any C28 gate is pending, blocked, or unknown",
  "implementation requires a blocked branch scope item",
  "source packet fields are incomplete",
  "high-risk prompt exclusion is uncertain",
  "browser validation cannot be performed",
  "rollback cannot be executed",
  "repo state cannot be restored"
], "Sprint C30 no-go conditions");

assertIncludes(doc, [
  "Linked C29 issue:",
  "Requested branch name:",
  "Local HEAD before branch:",
  "Remote HEAD before branch:",
  "Product owner:",
  "Safety owner:",
  "Technical owner:",
  "QA owner:",
  "Browser validation owner:",
  "Rollback owner:",
  "Source packet owner:",
  "C22-C28 evidence status:",
  "Final branch decision: `go` / `no-go` / `blocked`"
], "Sprint C30 branch policy record template");

assertIncludes(doc, [
  "Sprint C31 should add an implementation-free source-backed agriculture runtime activation pull request checklist"
], "Sprint C30 next sprint recommendation");

for (const fragment of protectedFragments) {
  assert(doc.includes(fragment), `Sprint C30 doc must name protected fragment: ${fragment}`);
  assert(!index.includes(fragment), `public/index.html must not load runtime fragment: ${fragment}`);
  assert(!app.includes(fragment), `public/app.js must not reference runtime fragment: ${fragment}`);
  assert(!server.includes(fragment), `server.js must not special-case runtime fragment: ${fragment}`);
}

const alias = "qa:nexus-sprint-c30-source-backed-agriculture-runtime-activation-branch-policy";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C30 QA.");

console.log("[nexus-sprint-c30-source-backed-agriculture-runtime-activation-branch-policy-qa] passed");
