const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

const docPath = path.join(root, "docs", "NEXUS_LOW_RISK_INERT_RENDERER_PROTOTYPE_PLAN.md");
assert(fs.existsSync(docPath), "docs/NEXUS_LOW_RISK_INERT_RENDERER_PROTOTYPE_PLAN.md must exist");

const doc = read("docs", "NEXUS_LOW_RISK_INERT_RENDERER_PROTOTYPE_PLAN.md");
const qaSource = read("scripts", "nexus-low-risk-inert-renderer-prototype-plan-qa.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

for (const section of [
  "## 1. Purpose and Scope",
  "## 2. Relationship to Phase 12J",
  "## 3. Eligible Low-Risk Prompt Scope",
  "## 4. Explicitly Excluded Prompt Scope",
  "## 5. Feature Flag Requirement",
  "## 6. Future Runtime Integration Shape",
  "## 7. Future Visual Contract",
  "## 8. Standard User Demo Preservation",
  "## 9. Future QA Requirements Before Implementation",
  "## 10. Future Browser Validation Plan",
  "## 11. Implementation Go / No-Go Gates",
  "## 12. Risk Register",
  "## 13. Recommended Implementation Phase",
  "## 14. Non-Goals"
]) {
  assert(doc.includes(section), `prototype plan must include section: ${section}`);
}

for (const term of [
  "Low-Risk Inert Renderer Prototype Plan",
  "low-risk-only inert renderer prototype plan",
  "plan only",
  "disabled by default",
  "NEXUS_LOW_RISK_INERT_RENDERER_ENABLED=false",
  "Eligible Low-Risk Prompt Scope",
  "Explicitly Excluded Prompt Scope",
  "Feature Flag Requirement",
  "Future Runtime Integration Shape",
  "Future Visual Contract",
  "Standard User Demo Preservation",
  "Future QA Requirements Before Implementation",
  "Future Browser Validation Plan",
  "Implementation Go / No-Go Gates",
  "Risk Register",
  "Phase 12L",
  "learning",
  "jobs",
  "marketplace browse/review only",
  "agriculture support review only",
  "low risk only",
  "suggestion_only",
  "navigation_only",
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
  assert(`${doc}\n${qaSource}`.includes(term), `prototype plan doc/QA must include required term: ${term}`);
}

for (const prompt of [
  "Nexus, teach me how irrigation works",
  "Nexus, help me find agriculture training",
  "Nexus, show me farm jobs",
  "Nexus, browse AgriTrade",
  "Nexus, I need help with crop issues"
]) {
  assert(doc.includes(prompt), `eligible prompt must be documented: ${prompt}`);
}

for (const excluded of [
  "calls",
  "messages",
  "location",
  "camera",
  "emergency",
  "health/telehealth action",
  "marketplace transactions",
  "purchases",
  "seller contact",
  "provider handoff",
  "browser permissions",
  "job applications"
]) {
  assert(doc.includes(excluded), `excluded scope must be documented: ${excluded}`);
}

for (const gate of [
  "feature flag default false",
  "renderer scope is low-risk-only",
  "high/restricted prompts are excluded",
  "executionAllowed remains false",
  "no click handlers execute",
  "Standard User behavior unchanged when flag off"
]) {
  assert(doc.includes(gate), `go/no-go gate must be documented: ${gate}`);
}

assert(packageJson.includes("\"qa:nexus-low-risk-inert-renderer-prototype-plan\""), "package.json must expose qa:nexus-low-risk-inert-renderer-prototype-plan");
assert(suite.includes("scripts/nexus-low-risk-inert-renderer-prototype-plan-qa.js"), "nexus-workforce suite should include prototype plan QA");

assert(!fs.existsSync(path.join(root, "public", "nexus-low-risk-inert-renderer.js")), "runtime low-risk inert renderer file must not be added in Phase 12K");
assert(!index.includes("nexus-low-risk-inert-renderer.js"), "Standard User page must not load low-risk inert renderer");
assert(!index.includes("NEXUS_LOW_RISK_INERT_RENDERER_ENABLED"), "Standard User page must not include low-risk inert renderer flag yet");
assert(!app.includes("renderNexusLowRiskInertPreview"), "public/app.js must not implement low-risk inert renderer");
assert(!app.includes("attachNexusLowRiskInertRenderer"), "public/app.js must not attach low-risk inert renderer");
assert(!server.includes("NEXUS_LOW_RISK_INERT_RENDERER_ENABLED=true"), "server must not enable low-risk inert renderer");

assert.match(app, /Preview only - no action has been taken\./, "existing preview-only language must remain");
assert.match(app, /Review options/, "existing Review options behavior must remain");
assert.match(server, /runtimeStatus:\s*"metadata-only"/, "backend metadata-only behavior must remain");

console.log("Nexus low-risk inert renderer prototype plan QA passed");
console.log("- plan sections, eligible/excluded scope, flag requirement, QA gates, and safety terms are present");
console.log("- no runtime low-risk inert renderer file, loader, or app attachment was added");
console.log("- Standard User visible behavior remains unchanged");
