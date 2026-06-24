const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

const docPath = path.join(root, "docs", "NEXUS_LOW_RISK_INERT_RENDERER_PROTOTYPE_IMPLEMENTATION.md");
const rendererPath = path.join(root, "public", "nexus-low-risk-inert-renderer.js");
assert(fs.existsSync(docPath), "docs/NEXUS_LOW_RISK_INERT_RENDERER_PROTOTYPE_IMPLEMENTATION.md must exist");
assert(fs.existsSync(rendererPath), "public/nexus-low-risk-inert-renderer.js must exist");

const doc = read("docs", "NEXUS_LOW_RISK_INERT_RENDERER_PROTOTYPE_IMPLEMENTATION.md");
const qaSource = read("scripts", "nexus-low-risk-inert-renderer-prototype-implementation-qa.js");
const rendererSource = read("public", "nexus-low-risk-inert-renderer.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

const mapper = require(path.join(root, "public", "nexus-action-decision-mapper.js"));
const staged = require(path.join(root, "public", "nexus-staged-action-state.js"));
const inert = require(path.join(root, "public", "nexus-staged-action-inert-renderer.js"));
const renderer = require(rendererPath);

for (const section of [
  "## 1. Purpose and Scope",
  "## 2. Relationship to Phase 12L, 12M, and 12N",
  "## 3. Runtime File",
  "## 4. Default Behavior",
  "## 5. Allowed Prototype Scope",
  "## 6. Excluded Scope",
  "## 7. Inert Display Model Contract",
  "## 8. Standard User Behavior Preservation",
  "## 9. Safety Invariants",
  "## 10. QA Coverage",
  "## 11. Non-Goals",
  "## 12. Recommended Next Phase"
]) {
  assert(doc.includes(section), `prototype implementation doc must include section: ${section}`);
}

for (const term of [
  "Low-Risk Inert Renderer Prototype Implementation",
  "NEXUS_LOW_RISK_INERT_RENDERER_ENABLED=false",
  "flag disabled by default",
  "eligibility defaults false",
  "flag disabled makes eligible false",
  "public/nexus-low-risk-inert-renderer.js",
  "buildNexusLowRiskInertRendererPrototype",
  "renderNexusLowRiskInertPreview",
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
  "Phase 12P"
]) {
  assert(`${doc}\n${qaSource}\n${rendererSource}`.includes(term), `prototype implementation doc/QA/renderer must include required term: ${term}`);
}

assert.equal(typeof renderer.buildNexusLowRiskInertRendererPrototype, "function", "renderer must expose buildNexusLowRiskInertRendererPrototype");
assert.equal(typeof renderer.renderNexusLowRiskInertPreview, "function", "renderer must expose renderNexusLowRiskInertPreview");

function chain(prompt) {
  const actionDecision = mapper.mapNexusPromptToActionDecision(prompt);
  const stagedActionState = staged.deriveNexusStagedActionState(actionDecision);
  const inertRenderModel = inert.deriveNexusStagedActionRenderModel(stagedActionState, actionDecision);
  return { actionDecision, stagedActionState, inertRenderModel };
}

const safeContext = { NEXUS_LOW_RISK_INERT_RENDERER_ENABLED: true, localSafe: true };
const lowRiskPrompts = [
  "Nexus, teach me how irrigation works",
  "Nexus, help me find agriculture training",
  "Nexus, show me farm jobs",
  "Nexus, browse AgriTrade",
  "Nexus, I need help with crop issues"
];

for (const prompt of lowRiskPrompts) {
  const parts = chain(prompt);
  const flagOff = renderer.buildNexusLowRiskInertRendererPrototype(parts.actionDecision, parts.stagedActionState, parts.inertRenderModel);
  assert.equal(flagOff.active, false, `${prompt} renderer must be inactive by default`);
  assert.equal(flagOff.prototypeDisplayEligible, false, `${prompt} must not be display eligible by default`);
  assert.equal(flagOff.domRenderingAllowed, false, `${prompt} must not allow DOM rendering by default`);

  const flagOn = renderer.buildNexusLowRiskInertRendererPrototype(parts.actionDecision, parts.stagedActionState, parts.inertRenderModel, safeContext);
  assert.equal(flagOn.active, true, `${prompt} can build an inert prototype model in local/test-safe context`);
  assert.equal(flagOn.prototypeDisplayEligible, true, `${prompt} can become prototype display eligible in local/test-safe context`);
  assert.ok(flagOn.card, `${prompt} should include inert card data`);
  assert.equal(flagOn.executionAllowed, false, `${prompt} must not allow execution`);
  assert.equal(flagOn.providerHandoffAllowed, false, `${prompt} must not allow provider handoff`);
  assert.equal(flagOn.permissionRequestAllowed, false, `${prompt} must not allow permissions`);
  assert.equal(flagOn.navigationAllowed, false, `${prompt} must not allow navigation`);
  assert.equal(flagOn.domRenderingAllowed, false, `${prompt} must not render DOM`);
  assert.equal(flagOn.clickHandlersAllowed, false, `${prompt} must not allow click handlers`);
  assert.equal(flagOn.visibleRuntimeUi, false, `${prompt} must not create visible runtime UI by itself`);
  assert.equal(flagOn.metadataOnly, true, `${prompt} must remain metadata-only`);
}

for (const prompt of [
  "Nexus, call someone",
  "Nexus, send a message",
  "Nexus, find my location",
  "Nexus, use my camera",
  "Nexus, buy this item",
  "Nexus, I have an emergency"
]) {
  const parts = chain(prompt);
  const result = renderer.renderNexusLowRiskInertPreview(parts.actionDecision, parts.stagedActionState, parts.inertRenderModel, safeContext);
  assert.equal(result.active, false, `${prompt} must not build active renderer model`);
  assert.equal(result.prototypeDisplayEligible, false, `${prompt} must not become display eligible`);
  assert.equal(result.card, null, `${prompt} must not include inert card data`);
  assert.equal(result.executionAllowed, false, `${prompt} must not allow execution`);
  assert.equal(result.visibleRuntimeUi, false, `${prompt} must not create visible runtime UI`);
}

const unsafeParts = chain("Nexus, teach me how irrigation works");
for (const [label, unsafeModel] of [
  ["executionAllowed", { ...unsafeParts.inertRenderModel, executionAllowed: true }],
  ["providerHandoffAllowed", { ...unsafeParts.inertRenderModel, providerHandoffAllowed: true }],
  ["permissionRequestAllowed", { ...unsafeParts.inertRenderModel, permissionRequestAllowed: true }],
  ["domRenderingAllowed", { ...unsafeParts.inertRenderModel, domRenderingAllowed: true }],
  ["clickHandlersAllowed", { ...unsafeParts.inertRenderModel, clickHandlersAllowed: true }]
]) {
  const result = renderer.buildNexusLowRiskInertRendererPrototype(unsafeParts.actionDecision, unsafeParts.stagedActionState, unsafeModel, safeContext);
  assert.equal(result.active, false, `${label} unsafe model must stay inactive`);
}

for (const runtimeSource of [app, index]) {
  assert(!runtimeSource.includes("nexus-low-risk-inert-renderer.js"), "Standard User runtime must not load low-risk inert renderer");
  assert(!runtimeSource.includes("renderNexusLowRiskInertPreview"), "Standard User runtime must not reference renderNexusLowRiskInertPreview");
  assert(!runtimeSource.includes("buildNexusLowRiskInertRendererPrototype"), "Standard User runtime must not reference buildNexusLowRiskInertRendererPrototype");
}

for (const forbidden of [
  "document.createElement",
  ".addEventListener(",
  "onclick",
  "location.href",
  "window.open",
  "navigator.geolocation",
  "getUserMedia",
  "fetch(",
  "tel:",
  "whatsapp",
  "telegram",
  "payment",
  "emergency dispatch"
]) {
  assert(!rendererSource.toLowerCase().includes(forbidden.toLowerCase()), `renderer module must not introduce ${forbidden}`);
}

assert(packageJson.includes("\"qa:nexus-low-risk-inert-renderer-prototype-implementation\""), "package.json must expose qa:nexus-low-risk-inert-renderer-prototype-implementation");
assert(suite.includes("scripts/nexus-low-risk-inert-renderer-prototype-implementation-qa.js"), "nexus-workforce suite should include prototype implementation QA");

console.log("Nexus low-risk inert renderer prototype implementation QA passed");
console.log("- renderer is dormant by default and not loaded by Standard User runtime");
console.log("- safe low-risk local/test flag-on fixtures produce inert metadata-only card models");
console.log("- excluded prompts and unsafe render model fields remain inactive and non-executing");

