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

const docName = "NEXUS_SPRINT_C35_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_IMPLEMENTATION_HANDOFF_PACKET.md";
const qaName = "nexus-sprint-c35-source-backed-agriculture-runtime-activation-implementation-handoff-packet-qa.js";
const protectedFragments = [
  "nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html",
  "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js",
  "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js",
  "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js",
  "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"
];

assert(exists("docs", docName), "Sprint C35 implementation handoff packet must exist");
assert(exists("scripts", qaName), "Sprint C35 implementation handoff packet QA must exist");

for (const prior of [
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
]) {
  assert(exists("docs", prior), `${prior} must remain present`);
}

const doc = read("docs", docName);
const c34Doc = read("docs", "NEXUS_SPRINT_C34_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_POST_DECISION_IMPLEMENTATION_TICKET_TEMPLATE.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert(
  c34Doc.includes("Sprint C35 should add an implementation-free source-backed agriculture runtime activation implementation handoff packet"),
  "Sprint C34 must recommend Sprint C35 implementation handoff packet."
);

assertIncludes(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Handoff Boundary",
  "Handoff Packet Template",
  "Packet Header",
  "Evidence Attachments",
  "Owner Handoff Roster",
  "Scope Snapshot",
  "Source Packet Summary",
  "Implementation Diff Summary",
  "QA Evidence Summary",
  "Browser Evidence Summary",
  "Rollback Evidence Summary",
  "Release Notes Draft",
  "Merge Preconditions",
  "Post-Merge Verification",
  "Stop And Escalate Conditions",
  "Protected Runtime Fragments",
  "Sprint C35 QA Expectations",
  "Sprint C36 Recommendation",
  "This sprint remains inert"
], "Sprint C35 doc sections and inert boundary");

assertIncludes(doc, [
  "Packet ID:",
  "Activation ticket ID:",
  "Linked C33 decision ID:",
  "Linked C34 implementation ticket:",
  "Target branch:",
  "Target pull request:",
  "Intended release window:"
], "Sprint C35 packet header");

assertIncludes(doc, [
  "C22 runtime absence baseline:",
  "C23 preflight checklist:",
  "C24 approval record:",
  "C25 risk register:",
  "C26 rollback plan:",
  "C27 dry-run patch plan:",
  "C28 decision checklist:",
  "C29 runtime wiring issue:",
  "C30 branch policy record:",
  "C31 pull request checklist:",
  "C32 merge freeze and rollback drill record:",
  "C33 final go/no-go decision log:",
  "C34 implementation ticket:"
], "Sprint C35 evidence attachments");

assertIncludes(doc, [
  "implementer:",
  "implementation reviewer:",
  "product owner:",
  "safety owner:",
  "technical owner:",
  "QA owner:",
  "browser validation owner:",
  "rollback owner:",
  "source packet owner:",
  "release coordinator:"
], "Sprint C35 owner roster");

assertIncludes(doc, [
  "approved user surface:",
  "approved prompt family:",
  "approved source-backed agriculture card behavior:",
  "approved source packet:",
  "approved feature flag or runtime gate:",
  "approved eligible prompts:",
  "approved excluded prompts:",
  "approved fallback behavior:",
  "approved non-execution guarantees:"
], "Sprint C35 scope snapshot");

assertIncludes(doc, [
  "source owner:",
  "source name:",
  "source type:",
  "source URL or local fixture:",
  "citation:",
  "freshness timestamp:",
  "confidence level:",
  "limitations:",
  "reviewed by:",
  "source packet expiry:",
  "stale-source fallback:",
  "missing-source fallback:",
  "unsupported prompt fallback:"
], "Sprint C35 source packet summary");

assertIncludes(doc, [
  "files changed:",
  "runtime insertion points:",
  "feature flag or gate:",
  "default state:",
  "card rendering path:",
  "source lookup path:",
  "fallback path:",
  "removed code:",
  "unrelated changes:",
  "The `unrelated changes` field must be empty or explicitly approved by the C33 owners."
], "Sprint C35 implementation diff summary");

assertIncludes(doc, [
  "git diff --check",
  "node --check server.js",
  "node --check public/app.js",
  "node --check scripts/qa-suite.js",
  "source-backed agriculture focused QA:",
  "C22-C35 guard QA:",
  "node scripts/qa-suite.js nexus-workforce",
  "node scripts/qa-suite.js all-safe"
], "Sprint C35 QA evidence");

assertIncludes(doc, [
  "command: `node server.js`",
  "URL: `http://127.0.0.1:4182/`",
  "path: `Start as User`",
  "eligible prompt results:",
  "excluded prompt results:",
  "console warnings/errors:",
  "visible card screenshot references:",
  "hidden/debug metadata absence:",
  "no auto-execution evidence:",
  "no unsafe permission prompt evidence:"
], "Sprint C35 browser evidence");

assertIncludes(doc, [
  "rollback owner:",
  "rollback branch or commit:",
  "rollback command:",
  "rollback validation commands:",
  "rollback browser validation:",
  "rollback drill timestamp:",
  "rollback max time:",
  "rollback communication owner:"
], "Sprint C35 rollback evidence");

assertIncludes(doc, [
  "what low-risk source-backed agriculture support was enabled",
  "which prompts are eligible",
  "provider handoff, calls, messages, payments, marketplace transactions, location sharing, camera, health, pharmacy, emergency, dispatch, and external navigation are not enabled",
  "unsupported or stale-source prompts fall back safely"
], "Sprint C35 release notes draft");

assertIncludes(doc, [
  "Sprint C33 decision is `go`",
  "Sprint C34 ticket is complete",
  "all evidence attachments are present",
  "source packets are fresh",
  "no blocked risk remains open",
  "final QA passed",
  "browser validation passed",
  "rollback drill is current",
  "owner roster is available",
  "implementation diff matches approved scope",
  "final git status is clean"
], "Sprint C35 merge preconditions");

assertIncludes(doc, [
  "final local HEAD:",
  "final remote HEAD:",
  "deployment or local validation target:",
  "smoke QA:",
  "Standard User browser validation:",
  "rollback readiness still current:",
  "open follow-up items:"
], "Sprint C35 post-merge verification");

assertIncludes(doc, [
  "C33 is missing, `no-go`, or `blocked`",
  "C34 ticket is incomplete",
  "evidence attachments are missing",
  "source packet freshness expires",
  "implementation diff changes out-of-scope files",
  "QA fails",
  "browser validation fails",
  "rollback owner is unavailable",
  "hidden/debug metadata becomes visible",
  "any protected runtime fragment loads outside approved scope",
  "any high-risk prompt shows low-risk agriculture card behavior",
  "any auto-execution, provider handoff, payment, call, message, location, camera, health, pharmacy, emergency, dispatch, marketplace transaction, backend mutation, storage side effect, or external navigation appears"
], "Sprint C35 stop conditions");

assertIncludes(doc, [
  "Sprint C36 should add an implementation-free source-backed agriculture runtime activation release readiness scorecard"
], "Sprint C35 next sprint recommendation");

for (const fragment of protectedFragments) {
  assert(doc.includes(fragment), `Sprint C35 doc must name protected fragment: ${fragment}`);
  assert(!index.includes(fragment), `public/index.html must not load runtime fragment: ${fragment}`);
  assert(!app.includes(fragment), `public/app.js must not reference runtime fragment: ${fragment}`);
  assert(!server.includes(fragment), `server.js must not special-case runtime fragment: ${fragment}`);
}

const alias = "qa:nexus-sprint-c35-source-backed-agriculture-runtime-activation-implementation-handoff-packet";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C35 QA.");

console.log("[nexus-sprint-c35-source-backed-agriculture-runtime-activation-implementation-handoff-packet-qa] passed");
