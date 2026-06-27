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

const docName = "NEXUS_SPRINT_C31_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_PULL_REQUEST_CHECKLIST.md";
const qaName = "nexus-sprint-c31-source-backed-agriculture-runtime-activation-pull-request-checklist-qa.js";
const protectedFragments = [
  "nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html",
  "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js",
  "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js",
  "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js",
  "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"
];

assert(exists("docs", docName), "Sprint C31 runtime activation PR checklist must exist");
assert(exists("scripts", qaName), "Sprint C31 runtime activation PR checklist QA must exist");

for (const prior of [
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
const c30Doc = read("docs", "NEXUS_SPRINT_C30_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_BRANCH_POLICY.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert(
  c30Doc.includes("Sprint C31 should add an implementation-free source-backed agriculture runtime activation pull request checklist"),
  "Sprint C30 must recommend Sprint C31 PR checklist."
);

assertIncludes(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Pull Request Checklist Boundary",
  "Required Pull Request Header",
  "Required Evidence Links",
  "Required File Scope Review",
  "Required No-Execution Review",
  "Required Prompt Validation",
  "Required QA Results",
  "Required Browser Validation Evidence",
  "Required Rollback Evidence",
  "Required Reviewer Signoffs",
  "Merge Blockers",
  "Protected Runtime Fragments",
  "Sprint C31 QA Expectations",
  "Sprint C32 Recommendation",
  "This sprint remains inert"
], "Sprint C31 doc sections and inert boundary");

assertIncludes(doc, [
  "linked C29 issue:",
  "source branch following C30 naming:",
  "local HEAD before implementation:",
  "remote HEAD before implementation:",
  "activation scope summary:",
  "no-execution summary:",
  "rollback summary:"
], "Sprint C31 PR header requirements");

assertIncludes(doc, [
  "C22 runtime absence baseline before implementation",
  "C23 runtime wiring preflight checklist",
  "C24 approval record with final `go` decision",
  "C25 risk register with critical/high risks owned",
  "C26 rollback plan and restoration commands",
  "C27 dry-run patch plan",
  "C28 activation decision checklist with final `go` decision",
  "C29 runtime wiring issue template",
  "C30 branch policy record"
], "Sprint C31 required evidence links");

assertIncludes(doc, [
  "Standard User agriculture response card wiring",
  "low-risk agriculture eligibility checks",
  "source-backed packet mapping",
  "visible source/citation/freshness/confidence/limitation display",
  "fallback copy for missing or stale source packets"
], "Sprint C31 allowed file categories");

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
], "Sprint C31 no-execution review");

assertIncludes(doc, [
  "Eligible Low-Risk Agriculture Prompts",
  "Excluded And High-Risk Prompts",
  "source/citation/freshness/confidence/limitation shown:",
  "review-only behavior:",
  "no execution observed:",
  "no source-backed card:"
], "Sprint C31 prompt validation");

assertIncludes(doc, [
  "git diff --check",
  "node --check server.js",
  "node --check public/app.js",
  "node --check scripts/qa-suite.js",
  "node scripts/qa-suite.js nexus-workforce",
  "node scripts/qa-suite.js all-safe",
  "failing command:",
  "full-suite rerun result:"
], "Sprint C31 QA results");

assertIncludes(doc, [
  "command: `node server.js`",
  "URL: `http://127.0.0.1:4182/`",
  "path: `Start as User`",
  "eligible prompt results:",
  "excluded prompt results:",
  "console warnings/errors:",
  "hidden/debug metadata absence:",
  "no auto-execution evidence:"
], "Sprint C31 browser validation evidence");

assertIncludes(doc, [
  "rollback owner:",
  "rollback trigger threshold:",
  "files to restore:",
  "rollback commands:",
  "QA after rollback:",
  "browser validation after rollback:",
  "runtime mutation restoration:",
  "temporary DB/browser storage cleanup:"
], "Sprint C31 rollback evidence");

assertIncludes(doc, [
  "product owner:",
  "safety owner:",
  "technical reviewer:",
  "QA reviewer:",
  "browser validation reviewer:",
  "rollback reviewer:",
  "source packet reviewer:"
], "Sprint C31 reviewer signoffs");

assertIncludes(doc, [
  "C29 issue is missing or incomplete",
  "C30 branch policy record is missing",
  "C22-C28 evidence is missing",
  "any approval is missing",
  "source packet fields are incomplete",
  "high-risk exclusion is uncertain",
  "QA fails",
  "browser validation fails",
  "rollback is not executable",
  "unrelated files are changed",
  "runtime adds any blocked no-execution behavior",
  "repo state cannot be restored"
], "Sprint C31 merge blockers");

assertIncludes(doc, [
  "Sprint C32 should add an implementation-free source-backed agriculture runtime activation merge freeze and rollback drill plan"
], "Sprint C31 next sprint recommendation");

for (const fragment of protectedFragments) {
  assert(doc.includes(fragment), `Sprint C31 doc must name protected fragment: ${fragment}`);
  assert(!index.includes(fragment), `public/index.html must not load runtime fragment: ${fragment}`);
  assert(!app.includes(fragment), `public/app.js must not reference runtime fragment: ${fragment}`);
  assert(!server.includes(fragment), `server.js must not special-case runtime fragment: ${fragment}`);
}

const alias = "qa:nexus-sprint-c31-source-backed-agriculture-runtime-activation-pull-request-checklist";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C31 QA.");

console.log("[nexus-sprint-c31-source-backed-agriculture-runtime-activation-pull-request-checklist-qa] passed");
