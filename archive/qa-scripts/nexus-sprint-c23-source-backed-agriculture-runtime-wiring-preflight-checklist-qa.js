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

const docName = "NEXUS_SPRINT_C23_SOURCE_BACKED_AGRICULTURE_RUNTIME_WIRING_PREFLIGHT_CHECKLIST.md";
const qaName = "nexus-sprint-c23-source-backed-agriculture-runtime-wiring-preflight-checklist-qa.js";
const protectedFragments = [
  "nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html",
  "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js",
  "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js",
  "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js",
  "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"
];

assert(exists("docs", docName), "Sprint C23 runtime wiring preflight checklist must exist");
assert(exists("scripts", qaName), "Sprint C23 runtime wiring preflight QA must exist");
assert(exists("docs", "NEXUS_SPRINT_C22_SOURCE_BACKED_AGRICULTURE_STANDARD_USER_RUNTIME_ABSENCE_CONTRACT.md"), "Sprint C22 absence contract must remain present");

const doc = read("docs", docName);
const c22Doc = read("docs", "NEXUS_SPRINT_C22_SOURCE_BACKED_AGRICULTURE_STANDARD_USER_RUNTIME_ABSENCE_CONTRACT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert(c22Doc.includes("Sprint C23 should add a future runtime-wiring preflight checklist"), "Sprint C22 must recommend Sprint C23 preflight checklist.");

assertIncludes(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Preflight Decision",
  "Required Technical Review",
  "Required Safety Review",
  "Required UX Review",
  "Required QA Before Runtime Wiring",
  "Required Browser Validation Before Runtime Wiring Commit",
  "Rollback Requirements",
  "Sprint C23 QA Expectations",
  "Sprint C24 Recommendation",
  "This sprint remains inert",
  "does not wire C19/C17/C15/C13/C8 into Standard User runtime",
  "does not change backend behavior"
], "Sprint C23 doc sections and boundaries");

assertIncludes(doc, [
  "product approval",
  "intended runtime surface",
  "intended activation mechanism",
  "eligible prompt families",
  "excluded prompt families",
  "source-backed answer model",
  "citation/freshness/confidence display strategy",
  "no-execution safety strategy",
  "rollback plan",
  "browser validation owner"
], "Sprint C23 preflight decision fields");

assertIncludes(doc, [
  "public/index.html",
  "public/app.js",
  "server.js",
  "public/nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js",
  "public/nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js",
  "public/nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js",
  "public/nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js",
  "test-fixtures/nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html",
  "scripts/qa-suite.js",
  "package.json"
], "Sprint C23 technical review files");

assertIncludes(doc, [
  "C22 absence is intentionally relaxed only for approved low-risk agriculture prompts",
  "C19 static fixture remains test-only",
  "C17 copy model receives only eligible source-backed agriculture data",
  "C15 surface readiness remains the visible-surface gate",
  "C13 eligibility handoff remains the eligibility gate",
  "C8 mapper remains the source-backed visible-preview metadata gate",
  "high-risk and excluded prompts cannot render",
  "no provider handoff",
  "call",
  "message",
  "payment",
  "purchase",
  "location",
  "camera",
  "health",
  "pharmacy",
  "diagnosis",
  "prescription",
  "appointment",
  "emergency",
  "dispatch"
], "Sprint C23 safety review boundaries");

assertIncludes(doc, [
  "visible source title",
  "source type",
  "verification state",
  "freshness label",
  "confidence label",
  "evidence summary",
  "local applicability copy",
  "limitation copy",
  "action status copy",
  "review-only control copy",
  "cancellation or dismissal copy"
], "Sprint C23 UX review fields");

assertIncludes(doc, [
  "node scripts/nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper-qa.js",
  "node scripts/nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract-qa.js",
  "node scripts/nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract-qa.js",
  "node scripts/nexus-sprint-c17-source-backed-agriculture-surface-copy-model-qa.js",
  "node scripts/nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot-contract-qa.js",
  "node scripts/nexus-sprint-c20-source-backed-agriculture-static-snapshot-browser-validation-plan-qa.js",
  "node scripts/nexus-sprint-c21-source-backed-agriculture-static-snapshot-browser-validation-evidence-template-qa.js",
  "node scripts/nexus-sprint-c22-source-backed-agriculture-standard-user-runtime-absence-contract-qa.js",
  "node scripts/nexus-sprint-c23-source-backed-agriculture-runtime-wiring-preflight-checklist-qa.js",
  "node scripts/qa-suite.js nexus-workforce",
  "node scripts/qa-suite.js all-safe"
], "Sprint C23 required QA");

assertIncludes(doc, [
  "C20 browser validation plan",
  "C21 evidence template",
  "node server.js",
  "http://127.0.0.1:4182/",
  "Start as User",
  "eligible low-risk agriculture prompts",
  "excluded and high-risk prompts",
  "source/citation/freshness/confidence/limitations"
], "Sprint C23 browser validation requirements");

assertIncludes(doc, [
  "remove or disable the runtime loader",
  "restore the C22 absence contract",
  "rerun C22 QA",
  "rerun `nexus-workforce`",
  "rerun `all-safe`"
], "Sprint C23 rollback requirements");

for (const fragment of protectedFragments) {
  assert(!index.includes(fragment), `public/index.html must not load runtime fragment: ${fragment}`);
  assert(!app.includes(fragment), `public/app.js must not reference runtime fragment: ${fragment}`);
  assert(!server.includes(fragment), `server.js must not special-case runtime fragment: ${fragment}`);
}

const alias = "qa:nexus-sprint-c23-source-backed-agriculture-runtime-wiring-preflight-checklist";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C23 QA.");

console.log("[nexus-sprint-c23-source-backed-agriculture-runtime-wiring-preflight-checklist-qa] passed");
