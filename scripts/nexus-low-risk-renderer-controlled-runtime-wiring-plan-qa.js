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

const docPath = path.join(root, "docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_WIRING_PLAN.md");
assert(fs.existsSync(docPath), "docs/NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_WIRING_PLAN.md must exist");

const doc = read("docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_WIRING_PLAN.md");
const app = read("public", "app.js");
const index = read("public", "index.html");
const server = read("server.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");
const renderer = read("public", "nexus-low-risk-inert-renderer.js");

for (const section of [
  "## 1. Purpose and Scope",
  "## 2. Current Safety Posture",
  "## 3. Relationship to Phases 12L through 12P",
  "## 4. Proposed Controlled Runtime Wiring Strategy",
  "## 5. Proposed Runtime Placement",
  "## 6. Required Future Runtime Gate Sequence",
  "## 7. Eligible Rendering Scope",
  "## 8. Excluded Rendering Scope",
  "## 9. Inert UI Rules for Future Wiring",
  "## 10. Runtime Non-Goals",
  "## 11. Required QA Before Any Future Wiring",
  "## 12. Future Implementation Acceptance Criteria",
  "## 13. Phase 12R Recommendation",
  "## 14. Audit Summary"
]) {
  assert(doc.includes(section), `controlled runtime wiring plan must include section: ${section}`);
}

for (const term of [
  "Low-Risk Renderer Controlled Runtime Wiring Plan",
  "disabled by default",
  "flag disabled means render nothing",
  "eligibility false means render nothing",
  "flag enabled alone is not enough",
  "low risk only",
  "suggestion_only",
  "navigation_only",
  "no visible runtime UI when flag off",
  "no DOM rendering when flag off",
  "no click handlers that execute",
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
  "Standard User visible behavior remains unchanged when flag off",
  "not ready for real execution",
  "Phase 12R"
]) {
  assert(doc.includes(term), `controlled runtime wiring plan must include required safety language: ${term}`);
}

for (const term of [
  "communications/call",
  "message",
  "location",
  "camera",
  "health/telehealth",
  "emergency",
  "marketplace transaction",
  "purchase",
  "seller contact",
  "provider handoff",
  "browser permission",
  "form submission",
  "job application submission",
  "account changes",
  "payment",
  "medium risk",
  "high risk",
  "restricted risk"
]) {
  assert(doc.includes(term), `excluded rendering scope must include: ${term}`);
}

for (const term of [
  "learning",
  "jobs",
  "marketplace browse/review only",
  "agriculture support review only",
  "suggestion_preview",
  "review_option",
  "informational_response"
]) {
  assert(doc.includes(term), `eligible rendering scope must include: ${term}`);
}

assert(renderer.includes("metadataOnly: true"), "renderer must remain metadata-only");
assert(renderer.includes("domRenderingAllowed: false"), "renderer must not allow DOM rendering");
assert(renderer.includes("clickHandlersAllowed: false"), "renderer must not allow click handlers");

for (const runtimeSource of [app, index]) {
  assert(!runtimeSource.includes("nexus-low-risk-inert-renderer.js"), "Standard User runtime must not load low-risk inert renderer");
  assert(!runtimeSource.includes("renderNexusLowRiskInertPreview"), "Standard User runtime must not call renderNexusLowRiskInertPreview");
  assert(!runtimeSource.includes("buildNexusLowRiskInertRendererPrototype"), "Standard User runtime must not call buildNexusLowRiskInertRendererPrototype");
}

assert(!server.includes("NEXUS_LOW_RISK_INERT_RENDERER_ENABLED=true"), "server must not enable low-risk renderer by default");

for (const forbidden of [
  "navigator.geolocation",
  "getUserMedia",
  "window.open",
  "location.href",
  "tel:",
  "whatsapp",
  "telegram",
  "payment processed",
  "emergency dispatched"
]) {
  const lowerForbidden = forbidden.toLowerCase();
  assert(!renderer.toLowerCase().includes(lowerForbidden), `renderer module must not introduce unsafe API or completion claim: ${forbidden}`);
}

assert(packageJson.includes("\"qa:nexus-low-risk-renderer-controlled-runtime-wiring-plan\""), "package.json must expose qa:nexus-low-risk-renderer-controlled-runtime-wiring-plan");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-wiring-plan-qa.js"), "nexus-workforce suite should include controlled runtime wiring plan QA");
assert(exists("docs", "NEXUS_LOW_RISK_RENDERER_BROWSER_VALIDATION.md"), "Phase 12P browser validation doc must remain present");
assert(exists("docs", "NEXUS_LOW_RISK_INERT_RENDERER_PROTOTYPE_IMPLEMENTATION.md"), "Phase 12O implementation doc must remain present");

console.log("Nexus low-risk renderer controlled runtime wiring plan QA passed");
console.log("- plan documents disabled-by-default, low-risk-only, non-executing runtime wiring requirements");
console.log("- Standard User runtime remains unwired to the low-risk inert renderer");
console.log("- renderer remains metadata-only with no DOM, click handler, provider, permission, navigation, or execution authority");
