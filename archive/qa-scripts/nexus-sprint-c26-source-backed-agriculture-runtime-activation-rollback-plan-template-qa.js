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

const docName = "NEXUS_SPRINT_C26_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_ROLLBACK_PLAN_TEMPLATE.md";
const qaName = "nexus-sprint-c26-source-backed-agriculture-runtime-activation-rollback-plan-template-qa.js";
const protectedFragments = [
  "nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html",
  "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js",
  "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js",
  "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js",
  "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"
];

assert(exists("docs", docName), "Sprint C26 rollback plan template must exist");
assert(exists("scripts", qaName), "Sprint C26 rollback plan QA must exist");
assert(exists("docs", "NEXUS_SPRINT_C25_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_RISK_REGISTER.md"), "Sprint C25 risk register must remain present");
assert(exists("docs", "NEXUS_SPRINT_C24_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_APPROVAL_RECORD_TEMPLATE.md"), "Sprint C24 approval template must remain present");
assert(exists("docs", "NEXUS_SPRINT_C23_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_PREFLIGHT_CHECKLIST.md"), "Sprint C23 preflight checklist must remain present");
assert(exists("docs", "NEXUS_SPRINT_C22_SOURCE_BACKED_AGRICULTURE_STANDARD_USER_RUNTIME_ABSENCE_CONTRACT.md"), "Sprint C22 absence contract must remain present");

const doc = read("docs", docName);
const c25Doc = read("docs", "NEXUS_SPRINT_C25_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_RISK_REGISTER.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert(c25Doc.includes("Sprint C26 should add a source-backed agriculture runtime activation rollback plan template"), "Sprint C25 must recommend Sprint C26 rollback plan template.");

assertIncludes(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Rollback Scope Boundary",
  "Rollback Plan Header",
  "Baseline Restoration Target",
  "Rollback Triggers",
  "Rollback Procedure Template",
  "Rollback Evidence Template",
  "Protected Runtime Fragments",
  "No-Execution Restoration Requirement",
  "Sprint C26 QA Expectations",
  "Sprint C27 Recommendation",
  "This sprint remains inert",
  "does not wire C19/C17/C15/C13/C8 into Standard User runtime",
  "does not change backend behavior",
  "does not approve runtime wiring by itself"
], "Sprint C26 doc sections and inert boundaries");

assertIncludes(doc, [
  "Rollback plan ID:",
  "Rollback owner:",
  "Technical owner:",
  "QA owner:",
  "Browser validation owner:",
  "Product owner:",
  "Target branch:",
  "Local HEAD before runtime wiring:",
  "Remote HEAD before runtime wiring:",
  "Proposed runtime wiring commit:",
  "Rollback trigger threshold:",
  "Rollback decision owner:"
], "Sprint C26 rollback header fields");

assertIncludes(doc, [
  "C22 runtime absence contract passes",
  "C23 preflight checklist is still valid",
  "C24 approval record is still available",
  "C25 risk register is still available",
  "protected runtime fragments are absent",
  "Standard User remains low-risk, review-only, and no-execution"
], "Sprint C26 baseline restoration target");

assertIncludes(doc, [
  "high-risk prompts to render the agriculture card",
  "source, citation, freshness, confidence, or limitation evidence to be missing",
  "stale, missing, or unverified source data to appear verified",
  "local applicability overclaims",
  "hidden debug metadata or raw source payloads",
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
  "unexpected network requests",
  "unexpected localStorage/sessionStorage writes",
  "runtime mutation that cannot be restored",
  "browser validation failure",
  "`nexus-workforce` or `all-safe` failure"
], "Sprint C26 rollback triggers");

assertIncludes(doc, [
  "Stop the running Standard User server",
  "Restore edited runtime files",
  "Confirm protected C19/C17/C15/C13/C8 fragments are absent",
  "Restore any temporary DB/runtime/browser storage mutation",
  "Rerun C22 runtime absence QA",
  "Rerun C23 preflight QA",
  "Rerun C24 approval record QA",
  "Rerun C25 risk register QA",
  "Rerun `node scripts/qa-suite.js nexus-workforce`",
  "Rerun `node scripts/qa-suite.js all-safe`",
  "Record final local HEAD, final remote HEAD, and final `git status --short`"
], "Sprint C26 rollback procedure");

assertIncludes(doc, [
  "Failing condition:",
  "Reproduction steps:",
  "Affected file or files:",
  "Rollback command or rollback commit:",
  "Runtime fragments absent after rollback:",
  "C22 QA result:",
  "C23 QA result:",
  "C24 QA result:",
  "C25 QA result:",
  "`nexus-workforce` result:",
  "`all-safe` result:",
  "Browser validation result:",
  "Runtime mutation restoration result:",
  "Final local HEAD:",
  "Final remote HEAD:",
  "Final git status:",
  "Rollback owner sign-off:",
  "Product owner sign-off:",
  "Safety owner sign-off:"
], "Sprint C26 rollback evidence template");

assertIncludes(doc, [
  "source-backed only when explicitly approved",
  "agriculture-only",
  "low-risk only",
  "review-only",
  "no-execution",
  "no provider handoff",
  "no call or message",
  "no payment or marketplace transaction",
  "no location or camera request",
  "no medical, pharmacy, diagnosis, prescription, appointment, emergency, or dispatch action"
], "Sprint C26 no-execution restoration requirement");

assertIncludes(doc, [
  "Sprint C27 should add a source-backed agriculture runtime wiring dry-run patch plan"
], "Sprint C26 next sprint recommendation");

for (const fragment of protectedFragments) {
  assert(doc.includes(fragment), `Sprint C26 doc must name protected fragment: ${fragment}`);
  assert(!index.includes(fragment), `public/index.html must not load runtime fragment: ${fragment}`);
  assert(!app.includes(fragment), `public/app.js must not reference runtime fragment: ${fragment}`);
  assert(!server.includes(fragment), `server.js must not special-case runtime fragment: ${fragment}`);
}

const alias = "qa:nexus-sprint-c26-source-backed-agriculture-runtime-activation-rollback-plan-template";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C26 QA.");

console.log("[nexus-sprint-c26-source-backed-agriculture-runtime-activation-rollback-plan-template-qa] passed");
