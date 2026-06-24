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

const docPath = path.join(root, "docs", "NEXUS_LOW_RISK_INERT_RENDERER_FLAG_GUARD.md");
assert(fs.existsSync(docPath), "docs/NEXUS_LOW_RISK_INERT_RENDERER_FLAG_GUARD.md must exist");

const doc = read("docs", "NEXUS_LOW_RISK_INERT_RENDERER_FLAG_GUARD.md");
const qaSource = read("scripts", "nexus-low-risk-inert-renderer-flag-guard-qa.js");
const flagSource = read("public", "nexus-low-risk-inert-renderer-flag.js");
const flag = require(path.join(root, "public", "nexus-low-risk-inert-renderer-flag.js"));
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

for (const section of [
  "## 1. Purpose and Scope",
  "## 2. Relationship to Phase 12K",
  "## 3. Flag Definition",
  "## 4. Guard Semantics",
  "## 5. Eligible Scope",
  "## 6. Excluded Scope",
  "## 7. Future Integration Requirements",
  "## 8. Standard User Behavior Preservation",
  "## 9. QA Coverage",
  "## 10. Future Browser Validation Plan",
  "## 11. Non-Goals",
  "## 12. Recommended Next Phase"
]) {
  assert(doc.includes(section), `flag guard doc must include section: ${section}`);
}

for (const term of [
  "Low-Risk Inert Renderer Flag Guard",
  "NEXUS_LOW_RISK_INERT_RENDERER_ENABLED=false",
  "disabled by default",
  "default false",
  "low risk only",
  "suggestion_only",
  "navigation_only",
  "learning",
  "jobs",
  "marketplace browse/review only",
  "agriculture support review only",
  "communications/call",
  "message",
  "location",
  "camera",
  "health/telehealth",
  "emergency",
  "marketplace transaction",
  "purchase",
  "provider handoff",
  "browser permission",
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
  "not ready for real execution",
  "Phase 12M"
]) {
  assert(`${doc}\n${qaSource}\n${flagSource}`.includes(term), `flag guard doc/QA/flag must include required term: ${term}`);
}

assert.equal(flag.NEXUS_LOW_RISK_INERT_RENDERER_ENABLED, false, "flag constant must default false");
assert.equal(flag.isNexusLowRiskInertRendererEnabled(), false, "flag helper must default false");
assert.equal(flag.getNexusLowRiskInertRendererFlag().enabled, false, "flag metadata must default disabled");
assert.equal(flag.getNexusLowRiskInertRendererFlag().executionAuthority, "none", "flag must expose no execution authority");
assert.equal(flag.getNexusLowRiskInertRendererFlag({ NEXUS_LOW_RISK_INERT_RENDERER_ENABLED: true }).enabled, false, "flag must not enable without explicit local/test-safe context");
assert.equal(
  flag.getNexusLowRiskInertRendererFlag({ NEXUS_LOW_RISK_INERT_RENDERER_ENABLED: true, localSafe: true }).enabled,
  true,
  "flag may only report enabled for a future explicit local/test-safe context"
);
assert.equal(flag.getNexusLowRiskInertRendererFlag({ enabled: "true", testOnly: "true" }).enabled, true, "flag may accept explicit test-only string context");

assert(packageJson.includes("\"qa:nexus-low-risk-inert-renderer-flag-guard\""), "package.json must expose qa:nexus-low-risk-inert-renderer-flag-guard");
assert(suite.includes("scripts/nexus-low-risk-inert-renderer-flag-guard-qa.js"), "nexus-workforce suite should include flag guard QA");

assert(!exists("public", "nexus-low-risk-inert-renderer.js"), "visible runtime low-risk inert renderer file must not exist in Phase 12L");
assert(!index.includes("nexus-low-risk-inert-renderer.js"), "Standard User page must not load low-risk inert renderer");
assert(!index.includes("nexus-low-risk-inert-renderer-flag.js"), "Standard User page must not load flag guard in this phase");
assert(!app.includes("nexus-low-risk-inert-renderer-flag"), "public/app.js must not load low-risk inert renderer flag");
assert(!app.includes("renderNexusLowRiskInertPreview"), "public/app.js must not implement low-risk inert renderer");
assert(!app.includes("attachNexusLowRiskInertRenderer"), "public/app.js must not attach low-risk inert renderer");
assert(!server.includes("NEXUS_LOW_RISK_INERT_RENDERER_ENABLED=true"), "server must not enable low-risk inert renderer");

for (const forbidden of [
  "document.createElement",
  ".addEventListener(",
  "onclick",
  "fetch(",
  "navigator.geolocation",
  "getUserMedia",
  "window.location",
  "location.href",
  "mapNexusPromptToActionDecision",
  "deriveNexusStagedActionState",
  "deriveNexusStagedActionRenderModel",
  "require(",
  "import "
]) {
  assert(!flagSource.includes(forbidden), `flag guard must not introduce runtime hook/import/render behavior: ${forbidden}`);
}

for (const forbiddenAuthority of [
  "executionAuthority: \"allowed\"",
  "renderingAuthority: \"allowed\"",
  "providerHandoffAuthority: \"allowed\"",
  "browserPermissionAuthority: \"allowed\"",
  "navigationAuthority: \"allowed\"",
  "clickHandlerAuthority: \"allowed\""
]) {
  assert(!flagSource.includes(forbiddenAuthority), `flag guard must not grant authority: ${forbiddenAuthority}`);
}

assert.match(app, /Preview only - no action has been taken\./, "existing preview-only language must remain");
assert.match(app, /Review options/, "existing Review options behavior must remain");
assert.match(server, /runtimeStatus:\s*"metadata-only"/, "backend metadata-only behavior must remain");

console.log("Nexus low-risk inert renderer flag guard QA passed");
console.log("- flag defaults false and requires explicit future local/test-safe context");
console.log("- flag grants no execution, rendering, provider, permission, navigation, or click-handler authority");
console.log("- Standard User UI remains unwired to any low-risk inert renderer");

