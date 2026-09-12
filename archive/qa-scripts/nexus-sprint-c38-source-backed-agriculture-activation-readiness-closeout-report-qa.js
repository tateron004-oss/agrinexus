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

const docName = "NEXUS_SPRINT_C38_SOURCE_BACKED_AGRICULTURE_ACTIVATION_READINESS_CLOSEOUT_REPORT.md";
const qaName = "nexus-sprint-c38-source-backed-agriculture-activation-readiness-closeout-report-qa.js";
const protectedFragments = [
  "nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html",
  "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js",
  "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js",
  "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js",
  "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"
];

assert(exists("docs", docName), "Sprint C38 closeout report must exist");
assert(exists("scripts", qaName), "Sprint C38 closeout report QA must exist");

for (const prior of [
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
]) {
  assert(exists("docs", prior), `${prior} must remain present`);
}

const doc = read("docs", docName);
const c37Doc = read("docs", "NEXUS_SPRINT_C37_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_FINAL_ARCHIVE_INDEX.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert(
  c37Doc.includes("Sprint C38 should add an implementation-free source-backed agriculture activation readiness closeout report"),
  "Sprint C37 must recommend Sprint C38 closeout report."
);

assertIncludes(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Closeout Boundary",
  "Completed Readiness Chain",
  "Current Runtime Status",
  "Activation Blocker Status",
  "Next Safe Decision Point",
  "Permitted Future Activation Scope",
  "Non-Permitted Future Activation Scope",
  "Required Future Implementation Entry Criteria",
  "Protected Runtime Fragments",
  "Closeout QA Expectations",
  "Final Closeout Conclusion",
  "This sprint remains inert"
], "Sprint C38 doc sections and inert boundary");

for (let sprint = 22; sprint <= 38; sprint += 1) {
  assert(doc.includes(`C${sprint}`), `Sprint C38 closeout must reference C${sprint}`);
}

assertIncludes(doc, [
  "Standard User runtime remains protected.",
  "Source-backed agriculture support cards are not newly activated by this closeout.",
  "Protected runtime fragments remain absent from `public/index.html`, `public/app.js`, and `server.js`.",
  "No new runtime-visible behavior is introduced.",
  "No browser validation is required for this sprint because no runtime-visible behavior changed."
], "Sprint C38 current runtime status");

assertIncludes(doc, [
  "Ron/product owner explicitly requests a future activation implementation sprint",
  "Sprint C33 decision is completed with a valid `go`",
  "Sprint C34 implementation ticket is filled for the exact approved scope",
  "Sprint C35 handoff packet is complete",
  "Sprint C36 scorecard is `ready`",
  "Sprint C37 archive index is reviewed",
  "source packets are fresh",
  "QA and browser validation pass after implementation",
  "rollback owner confirms readiness"
], "Sprint C38 activation blocker status");

assertIncludes(doc, [
  "Should Nexus activate low-risk source-backed agriculture response cards in Standard User runtime?",
  "Which exact prompts are eligible?",
  "Which exact source packets are approved?",
  "Which exact files may be touched?",
  "Which owner accepts rollback responsibility?",
  "Which browser validation evidence is required?"
], "Sprint C38 next safe decision point");

assertIncludes(doc, [
  "source-backed agriculture support response cards",
  "preview-only behavior",
  "low-risk eligible agriculture prompts only",
  "no provider execution",
  "no payments",
  "no calls or messages",
  "no location sharing",
  "no medical, pharmacy, telehealth, emergency, or dispatch execution",
  "no marketplace buy/sell execution",
  "no backend mutations",
  "no persistent storage side effects",
  "no external navigation"
], "Sprint C38 permitted scope");

assertIncludes(doc, [
  "provider handoff",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, email, or phone-provider execution",
  "payments",
  "marketplace transactions",
  "location sharing",
  "camera or microphone activation",
  "health, telehealth, pharmacy, prescription, emergency, dispatch, diagnosis, or medical-record execution",
  "account, identity, login, or profile mutation",
  "backend mutations",
  "persistent storage side effects",
  "external navigation",
  "hidden execution queues",
  "automatic confirmation",
  "hidden/debug metadata exposure"
], "Sprint C38 non-permitted scope");

assertIncludes(doc, [
  "C33 final go/no-go decision is `go`",
  "C34 implementation ticket is complete",
  "C35 handoff packet is complete",
  "C36 scorecard pre-implementation fields are ready",
  "C37 archive index is attached",
  "C38 closeout report is attached",
  "exact source packet is attached",
  "exact file touch list is attached",
  "exact insertion points are attached",
  "exact QA commands are attached",
  "exact browser validation prompts are attached",
  "rollback plan is attached"
], "Sprint C38 required future implementation entry criteria");

assertIncludes(doc, [
  "Runtime activation remains blocked until Ron/product ownership explicitly requests and approves the next implementation sprint."
], "Sprint C38 final closeout conclusion");

for (const fragment of protectedFragments) {
  assert(doc.includes(fragment), `Sprint C38 doc must name protected fragment: ${fragment}`);
  assert(!index.includes(fragment), `public/index.html must not load runtime fragment: ${fragment}`);
  assert(!app.includes(fragment), `public/app.js must not reference runtime fragment: ${fragment}`);
  assert(!server.includes(fragment), `server.js must not special-case runtime fragment: ${fragment}`);
}

const alias = "qa:nexus-sprint-c38-source-backed-agriculture-activation-readiness-closeout-report";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C38 QA.");

console.log("[nexus-sprint-c38-source-backed-agriculture-activation-readiness-closeout-report-qa] passed");
