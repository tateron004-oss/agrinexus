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

const docName = "NEXUS_SPRINT_C29_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_ISSUE_TEMPLATE.md";
const qaName = "nexus-sprint-c29-source-backed-agriculture-runtime-wiring-issue-template-qa.js";
const protectedFragments = [
  "nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html",
  "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js",
  "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js",
  "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js",
  "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"
];

assert(exists("docs", docName), "Sprint C29 runtime wiring issue template must exist");
assert(exists("scripts", qaName), "Sprint C29 runtime wiring issue template QA must exist");

for (const prior of [
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
const c28Doc = read("docs", "NEXUS_SPRINT_C28_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_DECISION_CHECKLIST.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert(
  c28Doc.includes("Sprint C29 should add an implementation-free source-backed agriculture runtime wiring issue template"),
  "Sprint C28 must recommend Sprint C29 issue template."
);

assertIncludes(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Issue Template Boundary",
  "Runtime Wiring Request Issue Template",
  "Requested Activation Scope",
  "Product Outcome",
  "Standard User Surface",
  "Eligible Prompts",
  "Excluded And High-Risk Prompts",
  "Source Packet And Data Family",
  "Required C22-C28 Evidence Attachments",
  "Proposed Files And Insertion Points",
  "No-Execution Pledge",
  "Safety Exclusions",
  "QA Plan",
  "Browser Validation Plan",
  "Rollback Plan",
  "Owners And Signoffs",
  "Go / No-Go Request",
  "Protected Runtime Fragments",
  "Sprint C29 QA Expectations",
  "Sprint C30 Recommendation",
  "This sprint remains inert"
], "Sprint C29 doc sections and inert boundary");

assertIncludes(doc, [
  "C22 runtime absence baseline",
  "C23 preflight checklist",
  "C24 approval record with final decision",
  "C25 risk register",
  "C26 rollback plan",
  "C27 dry-run patch plan",
  "C28 activation decision checklist"
], "Sprint C29 C22-C28 evidence requirements");

assertIncludes(doc, [
  "provider handoff",
  "call",
  "message",
  "WhatsApp",
  "payment",
  "marketplace transaction",
  "buy/sell execution",
  "location sharing",
  "camera activation",
  "health or telehealth",
  "pharmacy or prescription",
  "emergency or dispatch",
  "backend mutation",
  "storage side effects",
  "external navigation"
], "Sprint C29 excluded and high-risk prompt coverage");

assertIncludes(doc, [
  "source owner:",
  "source name:",
  "source URL or local fixture:",
  "citation:",
  "freshness timestamp:",
  "confidence level:",
  "limitations:",
  "low-risk agriculture eligibility reason:",
  "exclusion reason for high-risk domains:"
], "Sprint C29 source packet fields");

assertIncludes(doc, [
  "No-Execution Pledge",
  "live provider handoff",
  "calls or messages",
  "WhatsApp, Telegram, SMS, email, or phone-provider execution",
  "payments",
  "marketplace transactions",
  "location sharing",
  "camera or microphone activation",
  "health, telehealth, pharmacy, prescription, emergency, dispatch, or medical-record execution",
  "backend mutations",
  "persistent storage side effects",
  "hidden execution queues"
], "Sprint C29 no-execution pledge");

assertIncludes(doc, [
  "git diff --check",
  "node --check server.js",
  "node --check public/app.js",
  "node --check scripts/qa-suite.js",
  "node scripts/qa-suite.js nexus-workforce",
  "node scripts/qa-suite.js all-safe"
], "Sprint C29 QA plan");

assertIncludes(doc, [
  "standard command:",
  "Standard User path:",
  "eligible prompt results:",
  "excluded prompt results:",
  "console warnings/errors:",
  "hidden/debug metadata absence:",
  "no auto-execution evidence:"
], "Sprint C29 browser validation plan");

assertIncludes(doc, [
  "rollback owner:",
  "trigger threshold:",
  "files to restore:",
  "commands to run:",
  "QA after rollback:",
  "browser validation after rollback:"
], "Sprint C29 rollback plan");

assertIncludes(doc, [
  "Sprint C30 should add an implementation-free source-backed agriculture runtime activation branch policy"
], "Sprint C29 next sprint recommendation");

for (const fragment of protectedFragments) {
  assert(doc.includes(fragment), `Sprint C29 doc must name protected fragment: ${fragment}`);
  assert(!index.includes(fragment), `public/index.html must not load runtime fragment: ${fragment}`);
  assert(!app.includes(fragment), `public/app.js must not reference runtime fragment: ${fragment}`);
  assert(!server.includes(fragment), `server.js must not special-case runtime fragment: ${fragment}`);
}

const alias = "qa:nexus-sprint-c29-source-backed-agriculture-runtime-wiring-issue-template";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C29 QA.");

console.log("[nexus-sprint-c29-source-backed-agriculture-runtime-wiring-issue-template-qa] passed");
