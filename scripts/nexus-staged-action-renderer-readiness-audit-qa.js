const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

const docPath = path.join(root, "docs", "NEXUS_STAGED_ACTION_RENDERER_RUNTIME_READINESS_AUDIT.md");
assert(fs.existsSync(docPath), "docs/NEXUS_STAGED_ACTION_RENDERER_RUNTIME_READINESS_AUDIT.md must exist");

const doc = read("docs", "NEXUS_STAGED_ACTION_RENDERER_RUNTIME_READINESS_AUDIT.md");
const qaSource = read("scripts", "nexus-staged-action-renderer-readiness-audit-qa.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

for (const section of [
  "## 1. Purpose and Scope",
  "## 2. Current Safe Chain",
  "## 3. Existing Standard User UI Surface",
  "## 4. Runtime Integration Readiness Scorecard",
  "## 5. Required Preconditions Before Visible Runtime Renderer",
  "## 6. Recommended Runtime Integration Shape",
  "## 7. Future Browser Validation Plan",
  "## 8. Runtime Risk Register",
  "## 9. Go / No-Go Recommendation",
  "## 10. Recommended Next Phase",
  "## 11. Non-Goals"
]) {
  assert(doc.includes(section), `readiness audit must include section: ${section}`);
}

for (const term of [
  "Staged Action Renderer Runtime Readiness Audit",
  "runtime readiness audit only",
  "Current Safe Chain",
  "Runtime Integration Readiness Scorecard",
  "Required Preconditions Before Visible Runtime Renderer",
  "Recommended Runtime Integration Shape",
  "Future Browser Validation Plan",
  "Runtime Risk Register",
  "Go / No-Go Recommendation",
  "Phase 12K",
  "ready",
  "partially_ready",
  "not_ready",
  "blocked",
  "prompt",
  "actionDecision",
  "stagedActionState",
  "inertRenderModel",
  "no visible runtime UI",
  "no DOM rendering",
  "no click handlers",
  "no live execution",
  "no provider handoff",
  "no browser permissions",
  "no navigation",
  "no call execution",
  "no message execution",
  "no camera opening",
  "no location sharing",
  "no transaction",
  "no emergency dispatch claim",
  "planner metadata is not execution authority",
  "selectedToolId must not directly execute",
  "agentAction must not directly execute",
  "missingInputs must block execution",
  "restricted actions must not execute",
  "provider_handoff_only must not mean execution happened",
  "confirmationRequired must be honored",
  "Standard User visible behavior remains unchanged",
  "not ready for real execution"
]) {
  assert(`${doc}\n${qaSource}`.includes(term), `readiness audit doc/QA must include required term: ${term}`);
}

for (const status of ["ready", "partially_ready", "not_ready", "blocked"]) {
  assert(new RegExp(`\\|[^\\n]*\\| ${status} \\|`).test(doc), `scorecard must include status: ${status}`);
}

for (const goNoGo of [
  "Ready for a future low-risk-only inert visible renderer prototype",
  "Not ready for medium/high-risk visible staging",
  "Not ready for provider handoff UI",
  "Not ready for confirmation modals",
  "Not ready for real execution"
]) {
  assert(doc.includes(goNoGo), `readiness audit must include recommendation language: ${goNoGo}`);
}

assert(packageJson.includes("\"qa:nexus-staged-action-renderer-readiness-audit\""), "package.json must expose qa:nexus-staged-action-renderer-readiness-audit");
assert(suite.includes("scripts/nexus-staged-action-renderer-readiness-audit-qa.js"), "nexus-workforce suite should include renderer readiness audit QA");

assert(!fs.existsSync(path.join(root, "public", "nexus-staged-action-renderer.js")), "visible runtime renderer file must not be added in Phase 12J");
assert(!index.includes("nexus-staged-action-inert-renderer.js"), "Standard User page must not load inert renderer helper");
assert(!index.includes("nexus-staged-action-renderer.js"), "Standard User page must not load future visible renderer");
assert(!index.includes("nexus-action-decision-mapper.js"), "Standard User page must not load action decision mapper");
assert(!index.includes("nexus-staged-action-state.js"), "Standard User page must not load staged action state helper");

for (const forbidden of [
  "renderNexusStagedActionPreview(",
  "NexusStagedActionInertRenderer",
  "nexus-staged-action-renderer.js"
]) {
  assert(!`${app}\n${server}\n${index}`.includes(forbidden), `runtime must not include staged renderer hook: ${forbidden}`);
}

assert.match(app, /Preview only - no action has been taken\./, "existing preview-only language must remain");
assert.match(app, /Review options/, "existing Review options behavior must remain");
assert.match(server, /runtimeStatus:\s*"metadata-only"/, "backend metadata-only behavior must remain");

console.log("Nexus staged action renderer readiness audit QA passed");
console.log("- readiness audit sections, scorecard statuses, go/no-go language, and safety terms are present");
console.log("- no visible renderer runtime file or Standard User loader was added");
console.log("- existing Standard User preview/review behavior remains guarded");
