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

const docName = "NEXUS_SPRINT_C22_SOURCE_BACKED_AGRICULTURE_STANDARD_USER_RUNTIME_ABSENCE_CONTRACT.md";
const qaName = "nexus-sprint-c22-source-backed-agriculture-standard-user-runtime-absence-contract-qa.js";
const protectedFragments = [
  "nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html",
  "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js",
  "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js",
  "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js",
  "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"
];

assert(exists("docs", docName), "Sprint C22 runtime absence contract must exist");
assert(exists("scripts", qaName), "Sprint C22 runtime absence QA must exist");
assert(exists("docs", "NEXUS_SPRINT_C21_SOURCE_BACKED_AGRICULTURE_STATIC_SNAPSHOT_BROWSER_VALIDATION_EVIDENCE_TEMPLATE.md"), "Sprint C21 evidence template must remain present");
assert(exists("docs", "NEXUS_SPRINT_C20_SOURCE_BACKED_AGRICULTURE_STATIC_SNAPSHOT_BROWSER_VALIDATION_PLAN.md"), "Sprint C20 browser validation plan must remain present");
assert(exists("docs", "NEXUS_SPRINT_C19_SOURCE_BACKED_AGRICULTURE_STATIC_VISUAL_SNAPSHOT_CONTRACT.md"), "Sprint C19 contract must remain present");
assert(exists("test-fixtures", "nexus-sprint-c19-source-backed-agriculture-static-visual-snapshot.html"), "Sprint C19 static fixture must remain present");
assert(exists("public", "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js"), "Sprint C17 copy model must remain present");
assert(exists("public", "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js"), "Sprint C15 readiness contract must remain present");
assert(exists("public", "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js"), "Sprint C13 eligibility handoff contract must remain present");
assert(exists("public", "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"), "Sprint C8 visible preview mapper must remain present");

const doc = read("docs", docName);
const c21Doc = read("docs", "NEXUS_SPRINT_C21_SOURCE_BACKED_AGRICULTURE_STATIC_SNAPSHOT_BROWSER_VALIDATION_EVIDENCE_TEMPLATE.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert(c21Doc.includes("Sprint C22 should add a Standard User runtime absence contract"), "Sprint C21 must recommend Sprint C22 runtime absence contract.");

assertIncludes(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Protected Non-Loading Boundary",
  "Required Runtime Absence Assertions",
  "Allowed Current State",
  "Standard User Expected Behavior",
  "What A Future Runtime Wiring Sprint Must Provide",
  "Sprint C22 QA Expectations",
  "Sprint C23 Recommendation",
  "This sprint remains inert",
  "does not perform runtime wiring",
  "does not load the C19 fixture",
  "does not load the C17 copy model",
  "does not change backend behavior"
], "Sprint C22 doc sections and boundaries");

assertIncludes(doc, protectedFragments, "Sprint C22 protected fragment list");

assertIncludes(doc, [
  "public/index.html",
  "public/app.js",
  "server.js",
  "Standard User startup",
  "voice shell startup",
  "planner/policy/provider/native bridge paths",
  "workflow modal paths",
  "map/location paths",
  "camera/telehealth paths",
  "marketplace/payment paths",
  "call/message/contact paths",
  "health/pharmacy/emergency paths"
], "Sprint C22 protected runtime surfaces");

assertIncludes(doc, [
  "script tag",
  "import",
  "require",
  "dynamic `import()`",
  "runtime DOM",
  "route hooks",
  "modal hooks",
  "click handlers",
  "provider handoff",
  "permission",
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
], "Sprint C22 runtime absence assertions");

assertIncludes(doc, [
  "Help me find agriculture training",
  "Teach me how irrigation works",
  "Show me farm jobs",
  "Browse AgriTrade",
  "I need help with crop issues",
  "Nexus, call John",
  "Send a WhatsApp message",
  "Show my location",
  "Open the camera",
  "Buy seeds",
  "Schedule an appointment",
  "Emergency help"
], "Sprint C22 Standard User prompt boundaries");

for (const fragment of protectedFragments) {
  assert(!index.includes(fragment), `public/index.html must not load runtime fragment: ${fragment}`);
  assert(!app.includes(fragment), `public/app.js must not reference runtime fragment: ${fragment}`);
  assert(!server.includes(fragment), `server.js must not special-case runtime fragment: ${fragment}`);
}

for (const forbiddenRuntimePattern of [
  /import\s*\([^)]*sprint-c1[3579]/i,
  /require\s*\([^)]*sprint-c1[3579]/i,
  /createElement\s*\(\s*["']script["'][\s\S]{0,160}sprint-c1[3579]/i,
  /addEventListener\s*\([^)]*sprint-c1[3579]/i,
  /fetch\s*\([^)]*sprint-c1[3579]/i
]) {
  assert(!index.match(forbiddenRuntimePattern), `public/index.html must not contain forbidden runtime pattern: ${forbiddenRuntimePattern}`);
  assert(!app.match(forbiddenRuntimePattern), `public/app.js must not contain forbidden runtime pattern: ${forbiddenRuntimePattern}`);
  assert(!server.match(forbiddenRuntimePattern), `server.js must not contain forbidden runtime pattern: ${forbiddenRuntimePattern}`);
}

const alias = "qa:nexus-sprint-c22-source-backed-agriculture-standard-user-runtime-absence-contract";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C22 QA.");

console.log("[nexus-sprint-c22-source-backed-agriculture-standard-user-runtime-absence-contract-qa] passed");
