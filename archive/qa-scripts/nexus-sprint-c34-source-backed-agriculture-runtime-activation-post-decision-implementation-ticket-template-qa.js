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

const docName = "NEXUS_SPRINT_C34_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_POST_DECISION_IMPLEMENTATION_TICKET_TEMPLATE.md";
const qaName = "nexus-sprint-c34-source-backed-agriculture-runtime-activation-post-decision-implementation-ticket-template-qa.js";
const protectedFragments = [
  "nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html",
  "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js",
  "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js",
  "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js",
  "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"
];

assert(exists("docs", docName), "Sprint C34 post-decision implementation ticket template must exist");
assert(exists("scripts", qaName), "Sprint C34 post-decision implementation ticket template QA must exist");

for (const prior of [
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
const c33Doc = read("docs", "NEXUS_SPRINT_C33_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_FINAL_GO_NO_GO_DECISION_LOG.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert(
  c33Doc.includes("Sprint C34 should add an implementation-free source-backed agriculture runtime activation post-decision implementation ticket template"),
  "Sprint C33 must recommend Sprint C34 post-decision implementation ticket template."
);

assertIncludes(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Ticket Boundary",
  "Implementation Ticket Template",
  "Linked Evidence Chain",
  "Approved Scope",
  "Exact File Touch List",
  "Exact Insertion Points",
  "Eligible Prompt List",
  "Excluded High-Risk Prompt List",
  "Source Packet Fields",
  "No-Execution Constraints",
  "Required QA Commands",
  "Browser Validation Plan",
  "Rollback Plan",
  "Owner Assignments",
  "Definition Of Done",
  "Stop And Blocked Conditions",
  "Protected Runtime Fragments",
  "Sprint C34 QA Expectations",
  "Sprint C35 Recommendation",
  "This sprint remains inert"
], "Sprint C34 doc sections and inert boundary");

assertIncludes(doc, [
  "Linked C33 decision ID:",
  "C22 runtime absence baseline:",
  "C23 runtime wiring preflight checklist:",
  "C24 approval record:",
  "C25 risk register:",
  "C26 rollback plan:",
  "C27 dry-run patch plan:",
  "C28 activation decision checklist:",
  "C29 runtime wiring issue:",
  "C30 activation branch:",
  "C31 activation PR checklist:",
  "C32 merge freeze and rollback drill:",
  "C33 final go/no-go decision log:"
], "Sprint C34 evidence chain");

assertIncludes(doc, [
  "approved user surface:",
  "approved prompt family:",
  "approved response card behavior:",
  "approved source packet:",
  "approved feature flag or runtime gate:",
  "Anything not listed here is out of scope."
], "Sprint C34 approved scope");

assertIncludes(doc, [
  "file:",
  "owner:",
  "reason:",
  "expected diff type:",
  "No file outside this list may be changed without reopening C33 decision review."
], "Sprint C34 exact file touch list");

assertIncludes(doc, [
  "function or DOM area:",
  "before/after anchor:",
  "expected code shape:",
  "expected no-op/default-off behavior:"
], "Sprint C34 exact insertion points");

assertIncludes(doc, [
  "`Help me with my crops`",
  "`I need help with crop issues`",
  "`Teach me about irrigation`",
  "`Help me find agriculture training`",
  "low-risk, source-backed, preview-only, and no-execution"
], "Sprint C34 eligible prompts");

assertIncludes(doc, [
  "calls or messages",
  "WhatsApp, Telegram, SMS, email, or phone-provider execution",
  "provider contact",
  "payments",
  "marketplace buy/sell transactions",
  "location sharing",
  "camera or microphone activation",
  "health, telehealth, pharmacy, prescription, medical-record, emergency, dispatch, or diagnosis requests",
  "account, identity, login, or profile mutation",
  "backend mutations",
  "external navigation"
], "Sprint C34 excluded high-risk prompts");

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
  "stale-source fallback:",
  "missing-source fallback:",
  "unsupported prompt fallback:"
], "Sprint C34 source packet fields");

assertIncludes(doc, [
  "preview-only behavior",
  "no provider handoff",
  "no calls",
  "no messages",
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
], "Sprint C34 no-execution constraints");

assertIncludes(doc, [
  "git diff --check",
  "node --check server.js",
  "node --check public/app.js",
  "node --check scripts/qa-suite.js",
  "source-backed agriculture focused QA:",
  "C22-C34 guard QA:",
  "node scripts/qa-suite.js nexus-workforce",
  "node scripts/qa-suite.js all-safe"
], "Sprint C34 QA commands");

assertIncludes(doc, [
  "command: `node server.js`",
  "URL: `http://127.0.0.1:4182/`",
  "path: `Start as User`",
  "eligible prompt results:",
  "excluded prompt results:",
  "console warnings/errors:",
  "hidden/debug metadata absence:",
  "no auto-execution evidence:"
], "Sprint C34 browser validation plan");

assertIncludes(doc, [
  "rollback owner:",
  "rollback commit or branch:",
  "rollback command:",
  "rollback validation commands:",
  "rollback browser validation:",
  "max rollback time:",
  "rollback communication path:"
], "Sprint C34 rollback plan");

assertIncludes(doc, [
  "product owner:",
  "safety owner:",
  "technical owner:",
  "QA owner:",
  "browser validation owner:",
  "rollback owner:",
  "source packet owner:",
  "release coordinator:"
], "Sprint C34 owner assignments");

assertIncludes(doc, [
  "all approved files match the exact file touch list",
  "no out-of-scope files changed",
  "all eligible prompt behavior is source-backed and preview-only",
  "all excluded/high-risk prompt behavior remains blocked, gated, or unaffected",
  "all QA commands pass",
  "browser validation passes",
  "rollback drill remains current",
  "final git status is clean"
], "Sprint C34 definition of done");

assertIncludes(doc, [
  "C33 decision is missing, `no-go`, or `blocked`",
  "HEAD changes invalidate the evidence chain",
  "source packet is stale or incomplete",
  "QA fails",
  "browser validation fails",
  "any protected runtime fragment is loaded without explicit approval",
  "any high-risk prompt shows low-risk agriculture card behavior",
  "any auto-execution, provider handoff, payment, call, message, location, camera, health, pharmacy, emergency, dispatch, marketplace transaction, backend mutation, storage side effect, or external navigation appears",
  "rollback owner is unavailable"
], "Sprint C34 blocked conditions");

assertIncludes(doc, [
  "Sprint C35 should add an implementation-free source-backed agriculture runtime activation implementation handoff packet"
], "Sprint C34 next sprint recommendation");

for (const fragment of protectedFragments) {
  assert(doc.includes(fragment), `Sprint C34 doc must name protected fragment: ${fragment}`);
  assert(!index.includes(fragment), `public/index.html must not load runtime fragment: ${fragment}`);
  assert(!app.includes(fragment), `public/app.js must not reference runtime fragment: ${fragment}`);
  assert(!server.includes(fragment), `server.js must not special-case runtime fragment: ${fragment}`);
}

const alias = "qa:nexus-sprint-c34-source-backed-agriculture-runtime-activation-post-decision-implementation-ticket-template";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C34 QA.");

console.log("[nexus-sprint-c34-source-backed-agriculture-runtime-activation-post-decision-implementation-ticket-template-qa] passed");
