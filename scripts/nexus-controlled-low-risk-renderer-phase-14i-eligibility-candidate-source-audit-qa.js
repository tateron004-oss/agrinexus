const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const adapterFileName = "nexus-controlled-low-risk-renderer-eligibility-adapter.js";
const loaderFileName = "nexus-controlled-low-risk-text-only-renderer-loader.js";
const rendererFileName = "nexus-controlled-low-risk-text-only-renderer.js";
const mountId = "nexus-controlled-low-risk-renderer-root";
const qaScriptName = "nexus-controlled-low-risk-renderer-phase-14i-eligibility-candidate-source-audit-qa.js";

const paths = {
  doc: path.join(root, "docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_PHASE_14I_ELIGIBILITY_CANDIDATE_SOURCE_AUDIT.md"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  adapter: path.join(root, "public", adapterFileName),
  loader: path.join(root, "public", loaderFileName),
  renderer: path.join(root, "public", rendererFileName),
  classifier: path.join(root, "public", "nexus-intent-classifier.js"),
  mapper: path.join(root, "public", "nexus-action-decision-mapper.js"),
  planner: path.join(root, "public", "nexus-planner.js"),
  policy: path.join(root, "public", "nexus-policy-engine.js"),
  toolRegistry: path.join(root, "public", "nexus-tool-registry.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-controlled-low-risk-renderer-phase-14i-eligibility-candidate-source-audit-qa] ${message}`);
    process.exit(1);
  }
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function assertExists(filePath, label) {
  assert(fs.existsSync(filePath), `${label} must exist.`);
}

function assertNoLoad(source, label, fileName) {
  const escaped = escapeRegex(fileName);
  assert(!new RegExp(`<script[^>]+src=["'][^"']*${escaped}["']`, "i").test(source), `${label} must not script-load ${fileName}.`);
  assert(!new RegExp(`\\bimport\\s+[^;]*${escaped}`, "i").test(source), `${label} must not statically import ${fileName}.`);
  assert(!new RegExp(`\\bimport\\s*\\([^)]*${escaped}`, "i").test(source), `${label} must not dynamically import ${fileName}.`);
  assert(!new RegExp(`\\brequire\\s*\\([^)]*${escaped}`, "i").test(source), `${label} must not require ${fileName}.`);
}

function assertNoRuntimeReference(source, label, forbiddenTerms) {
  forbiddenTerms.forEach(term => {
    assert(!source.includes(term), `${label} must not reference ${term}.`);
  });
}

function assertContainsAll(source, label, terms) {
  terms.forEach(term => {
    assert(source.includes(term), `${label} must mention ${term}.`);
  });
}

assertExists(paths.doc, "Phase 14I audit doc");
assertExists(paths.adapter, "Phase 14G adapter");
assertExists(paths.loader, "Phase 14D loader");
assertExists(paths.renderer, "Phase 14A renderer");
assertExists(paths.classifier, "Nexus intent classifier");
assertExists(paths.mapper, "Nexus action decision mapper");
assertExists(paths.planner, "Nexus planner");
assertExists(paths.policy, "Nexus policy engine");
assertExists(paths.toolRegistry, "Nexus runtime tool registry");

const doc = read(paths.doc);
const packageJson = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const classifier = read(paths.classifier);
const mapper = read(paths.mapper);
const planner = read(paths.planner);
const adapter = read(paths.adapter);
const renderer = read(paths.renderer);
const loader = read(paths.loader);

const alias = "qa:nexus-controlled-low-risk-renderer-phase-14i-eligibility-candidate-source-audit";
assert(
  packageJson.scripts[alias] === `node scripts/${qaScriptName}`,
  "package.json must expose the Phase 14I QA alias."
);
assert(qaSuite.includes(`scripts/${qaScriptName}`), "nexus-workforce QA suite must include Phase 14I QA.");

[adapterFileName, loaderFileName, rendererFileName].forEach(fileName => {
  assertNoLoad(index, "public/index.html", fileName);
  assertNoLoad(app, "public/app.js", fileName);
  assertNoLoad(server, "server.js", fileName);
});

assertNoRuntimeReference(app, "public/app.js Standard User runtime", [
  "NexusControlledLowRiskRendererEligibilityAdapter",
  "NexusControlledLowRiskTextOnlyRendererLoader",
  "NexusControlledLowRiskTextOnlyRenderer",
  "buildControlledLowRiskRendererPayload",
  "renderControlledLowRiskTextOnlyPreview",
  "renderControlledLowRiskTextModel",
  "enableControlledLowRiskRendererEligibilityAdapter",
  "enableControlledLowRiskRendererLoader"
]);

assertNoRuntimeReference(server, "server.js", [
  "NexusControlledLowRiskRendererEligibilityAdapter",
  "NexusControlledLowRiskTextOnlyRendererLoader",
  "NexusControlledLowRiskTextOnlyRenderer",
  "buildControlledLowRiskRendererPayload",
  "renderControlledLowRiskTextOnlyPreview",
  "renderControlledLowRiskTextModel",
  "enableControlledLowRiskRendererEligibilityAdapter",
  "enableControlledLowRiskRendererVisibleUi",
  "enableControlledLowRiskRendererLoader"
]);

const mountMatches = index.match(new RegExp(`id=["']${escapeRegex(mountId)}["']`, "g")) || [];
assert(mountMatches.length === 1, "Hidden renderer mount must be present exactly once in public/index.html.");
const mountTagMatch = index.match(new RegExp(`<div[\\s\\S]*?id=["']${escapeRegex(mountId)}["'][\\s\\S]*?</div>`, "i"));
const mountTag = mountTagMatch ? mountTagMatch[0] : "";
assert(mountTag.includes("hidden"), "Hidden renderer mount must remain hidden by default.");
assert(mountTag.includes('aria-hidden="true"'), "Hidden renderer mount must keep aria-hidden=true.");
assert(mountTag.includes('data-visible-renderer-enabled="false"'), "Hidden renderer mount must keep data-visible-renderer-enabled=false.");
assert(mountTag.includes('data-execution-allowed="false"'), "Hidden renderer mount must keep execution disabled.");
assert(mountTag.includes('data-provider-handoff="false"'), "Hidden renderer mount must keep provider handoff disabled.");
assert(mountTag.includes('data-permission-request="false"'), "Hidden renderer mount must keep permission requests disabled.");
assert(mountTag.includes('data-navigation-allowed="false"'), "Hidden renderer mount must keep navigation disabled.");

assertContainsAll(classifier, "intent classifier", [
  "LOW_RISK_SELECTED_TOOL_IDS",
  "workforce.training",
  "learning.start",
  "workforce.job_pathways",
  "marketplace.agritrade",
  "workforce.field_support",
  "agriculture.help",
  "preview_or_route",
  "request_permission",
  "request_confirmation"
]);

assertContainsAll(app, "public/app.js metadata chain", [
  "localLevelOneSuggestionForSimpleUserIntent",
  "paintLocalLevelOneSuggestionForSimpleUserIntent",
  "buildControlledActionMetadataFromSuggestion",
  "buildControlledActionPreviewReadinessFromMetadata",
  "buildControlledActionConfirmationReadinessFromPreview",
  "buildControlledActionNavigationReadinessFromConfirmation",
  "selectedToolId",
  "visible-level-1-label",
  "metadataOnly",
  "previewOnlyReadiness"
]);

assertContainsAll(mapper, "action decision mapper", [
  "selectedToolId",
  "riskLevel",
  "executionBoundary",
  "workforce.training",
  "learning.start",
  "workforce.job_pathways",
  "marketplace.agritrade",
  "agriculture.help",
  "communications",
  "provider_handoff_only"
]);

assertContainsAll(planner, "planner", [
  "preview_only",
  "requiresPermission",
  "requiresConfirmation",
  "canExecute: false",
  "Planner step is advisory and non-executing"
]);

assertContainsAll(adapter, "Phase 14G eligibility adapter", [
  "buildControlledLowRiskRendererPayload",
  "enableControlledLowRiskRendererEligibilityAdapter",
  "previewOnly",
  "riskTier",
  "marketplace.agritrade",
  "agritrade_marketplace_preview",
  "BLOCKED_TERMS",
  "FORBIDDEN_OUTPUT_FIELDS"
]);

assertContainsAll(loader, "Phase 14D loader", [
  "enableControlledLowRiskRendererVisibleUi",
  "enableControlledLowRiskRendererLoader",
  "renderer-unavailable",
  "mount-unavailable",
  "renderer-rejected"
]);

assertContainsAll(renderer, "Phase 14A renderer", [
  "runControlledLowRiskRendererPreflight",
  "renderControlledLowRiskTextModel",
  "data-execution-allowed",
  "data-provider-handoff",
  "data-permission-request",
  "data-navigation-allowed"
]);

[
  "call",
  "message",
  "location",
  "camera",
  "payment",
  "emergency",
  "appointment",
  "provider"
].forEach(term => {
  const combined = `${classifier}\n${app}\n${adapter}\n${mapper}`;
  assert(combined.toLowerCase().includes(term), `Existing high-risk exclusion coverage must mention ${term}.`);
});

assertContainsAll(doc, "Phase 14I audit doc", [
  "low-risk source candidates",
  "selectedToolId",
  "suggestion",
  "debug-only",
  "high-risk",
  "recommended future integration point",
  "controlled-action preview readiness",
  "Standard User build remains unwired",
  "No runtime behavior changed",
  "does not load, show, or activate"
]);

assert(!doc.includes("<button"), "Phase 14I doc must not introduce visible button markup.");
assert(!doc.includes("<a "), "Phase 14I doc must not introduce visible link markup.");
assert(!doc.includes("<form"), "Phase 14I doc must not introduce form markup.");
assert(!doc.includes("<input"), "Phase 14I doc must not introduce input markup.");

assert(!app.includes("phase-14i"), "public/app.js must not be modified to reference Phase 14I.");
assert(!index.includes("phase-14i"), "public/index.html must not be modified to reference Phase 14I.");
assert(!server.includes("phase-14i"), "server.js must not be modified to reference Phase 14I.");

[
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14a-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14d-runtime-loader-stub-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14e-import-boundary-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14f-loader-test-harness-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-phase-14g-eligibility-adapter-stub-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-phase-14h-adapter-chain-test-harness-qa.js",
  `scripts/${qaScriptName}`
].forEach(script => {
  assert(qaSuite.includes(script), `nexus-workforce QA suite must include ${script}.`);
});

console.log("[nexus-controlled-low-risk-renderer-phase-14i-eligibility-candidate-source-audit-qa] passed");
