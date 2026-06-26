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

const docName = "NEXUS_SPRINT_C25_SOURCE_BACKED_AGRICULTURE_RUNTIME_ACTIVATION_RISK_REGISTER.md";
const qaName = "nexus-sprint-c25-source-backed-agriculture-runtime-activation-risk-register-qa.js";
const protectedFragments = [
  "nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html",
  "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js",
  "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js",
  "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js",
  "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"
];

assert(exists("docs", docName), "Sprint C25 risk register must exist");
assert(exists("scripts", qaName), "Sprint C25 risk register QA must exist");
assert(exists("docs", "NEXUS_SPRINT_C24_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_APPROVAL_RECORD_TEMPLATE.md"), "Sprint C24 approval template must remain present");
assert(exists("docs", "NEXUS_SPRINT_C23_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_PREFLIGHT_CHECKLIST.md"), "Sprint C23 preflight checklist must remain present");
assert(exists("docs", "NEXUS_SPRINT_C22_SOURCE_BACKED_AGRICULTURE_STANDARD_USER_RUNTIME_ABSENCE_CONTRACT.md"), "Sprint C22 absence contract must remain present");

const doc = read("docs", docName);
const c24Doc = read("docs", "NEXUS_SPRINT_C24_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_APPROVAL_RECORD_TEMPLATE.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert(c24Doc.includes("Sprint C25 should add a source-backed agriculture runtime activation risk register"), "Sprint C24 must recommend Sprint C25 risk register.");

assertIncludes(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Scope Boundary",
  "Runtime Activation Risk Register",
  "Required Mitigations Before Any Runtime Wiring",
  "Go/No-Go Rules",
  "Sprint C25 QA Expectations",
  "Sprint C26 Recommendation",
  "This sprint remains inert",
  "does not wire C19/C17/C15/C13/C8 into Standard User runtime",
  "does not change backend behavior",
  "does not approve runtime wiring by itself"
], "Sprint C25 doc sections and inert boundaries");

assertIncludes(doc, [
  "C25-R01",
  "Runtime loading",
  "C25-R02",
  "Fixture exposure",
  "C25-R03",
  "Eligibility leak",
  "C25-R04",
  "Source integrity",
  "C25-R05",
  "Evidence omission",
  "C25-R06",
  "Local applicability overclaim",
  "C25-R07",
  "Debug leakage",
  "C25-R08",
  "Provider side effect",
  "C25-R09",
  "Browser console regression",
  "C25-R10",
  "Network/storage regression",
  "C25-R11",
  "Runtime mutation not restored",
  "C25-R12",
  "Broad refactor",
  "C25-R13",
  "Rollback gap"
], "Sprint C25 risk rows");

assertIncludes(doc, [
  "Severity",
  "Prevention",
  "Detection",
  "Rollback",
  "Owner",
  "Critical",
  "High",
  "Medium"
], "Sprint C25 risk register columns and severity levels");

assertIncludes(doc, [
  "C22 runtime absence contract",
  "C23 preflight checklist",
  "C24 approval record",
  "C25 risk register review",
  "C20 browser validation plan",
  "C21 browser validation evidence template",
  "deterministic source-backed agriculture QA",
  "node scripts/qa-suite.js nexus-workforce",
  "node scripts/qa-suite.js all-safe",
  "rollback command or commit path"
], "Sprint C25 required mitigations");

assertIncludes(doc, [
  "source-backed agriculture only",
  "low-risk",
  "review-only",
  "no-execution",
  "source/citation/freshness/confidence/limitation",
  "high-risk prompt exclusion",
  "live provider",
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
  "backend",
  "storage behavior"
], "Sprint C25 go/no-go safety language");

assertIncludes(doc, [
  "Sprint C26 should add a source-backed agriculture runtime activation rollback plan template"
], "Sprint C25 next sprint recommendation");

for (const fragment of protectedFragments) {
  assert(!index.includes(fragment), `public/index.html must not load runtime fragment: ${fragment}`);
  assert(!app.includes(fragment), `public/app.js must not reference runtime fragment: ${fragment}`);
  assert(!server.includes(fragment), `server.js must not special-case runtime fragment: ${fragment}`);
}

const alias = "qa:nexus-sprint-c25-source-backed-agriculture-runtime-activation-risk-register";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C25 QA.");

console.log("[nexus-sprint-c25-source-backed-agriculture-runtime-activation-risk-register-qa] passed");
