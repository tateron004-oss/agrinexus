const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const contractFileName = "nexus-controlled-low-risk-renderer-candidate-contract.js";
const adapterFileName = "nexus-controlled-low-risk-renderer-eligibility-adapter.js";
const loaderFileName = "nexus-controlled-low-risk-text-only-renderer-loader.js";
const rendererFileName = "nexus-controlled-low-risk-text-only-renderer.js";
const qaScriptName = "nexus-controlled-low-risk-renderer-phase-14j-candidate-payload-contract-qa.js";
const qaAlias = "qa:nexus-controlled-low-risk-renderer-phase-14j-candidate-payload-contract";

const paths = {
  contract: path.join(root, "public", contractFileName),
  adapter: path.join(root, "public", adapterFileName),
  loader: path.join(root, "public", loaderFileName),
  renderer: path.join(root, "public", rendererFileName),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js"),
  doc: path.join(root, "docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_PHASE_14J_CANDIDATE_PAYLOAD_CONTRACT.md"),
  phase14aQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14a-qa.js"),
  phase14bQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary-qa.js"),
  phase14cQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness-qa.js"),
  phase14dQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14d-runtime-loader-stub-qa.js"),
  phase14eQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14e-import-boundary-qa.js"),
  phase14fQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14f-loader-test-harness-qa.js"),
  phase14gQa: path.join(root, "scripts", "nexus-controlled-low-risk-renderer-phase-14g-eligibility-adapter-stub-qa.js"),
  phase14hQa: path.join(root, "scripts", "nexus-controlled-low-risk-renderer-phase-14h-adapter-chain-test-harness-qa.js"),
  phase14iQa: path.join(root, "scripts", "nexus-controlled-low-risk-renderer-phase-14i-eligibility-candidate-source-audit-qa.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-controlled-low-risk-renderer-phase-14j-candidate-payload-contract-qa] ${message}`);
    process.exit(1);
  }
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function assertExists(filePath, label) {
  assert(fs.existsSync(filePath), `${label} must exist.`);
}

function assertNoRuntimeLoad(source, label, fileName) {
  const escaped = escapeRegex(fileName);
  assert(!new RegExp(`<script[^>]+src=["'][^"']*${escaped}["']`, "i").test(source), `${label} must not script-load ${fileName}.`);
  assert(!new RegExp(`\\bimport\\s+[^;]*${escaped}`, "i").test(source), `${label} must not statically import ${fileName}.`);
  assert(!new RegExp(`\\bimport\\s*\\([^)]*${escaped}`, "i").test(source), `${label} must not dynamically import ${fileName}.`);
  assert(!new RegExp(`\\brequire\\s*\\([^)]*${escaped}`, "i").test(source), `${label} must not require ${fileName}.`);
  assert(!source.includes(fileName), `${label} must not reference ${fileName}.`);
}

function assertNoRuntimeSymbols(source, label) {
  [
    "NexusControlledLowRiskRendererCandidateContract",
    "normalizeControlledLowRiskRendererCandidate",
    "validateControlledLowRiskRendererCandidate",
    "NexusControlledLowRiskRendererEligibilityAdapter",
    "NexusControlledLowRiskTextOnlyRendererLoader",
    "NexusControlledLowRiskTextOnlyRenderer",
    "buildControlledLowRiskRendererPayload",
    "renderControlledLowRiskTextOnlyPreview",
    "renderControlledLowRiskTextModel",
    "enableControlledLowRiskRendererEligibilityAdapter",
    "enableControlledLowRiskRendererVisibleUi",
    "enableControlledLowRiskRendererLoader"
  ].forEach(symbol => {
    assert(!source.includes(symbol), `${label} must not reference ${symbol}.`);
  });
}

function assertNoUnsafeSource(source, label) {
  [
    { pattern: /\bdocument\b/, message: "DOM document access" },
    { pattern: /\bquerySelector(All)?\b/, message: "DOM query access" },
    { pattern: /\bcreateElement\b/, message: "DOM creation" },
    { pattern: /\bappendChild\b/, message: "DOM mutation" },
    { pattern: /\binnerHTML\b/, message: "HTML writes" },
    { pattern: /insertAdjacentHTML\s*\(/, message: "HTML insertion" },
    { pattern: /addEventListener\s*\(/, message: "event handlers" },
    { pattern: /\bfetch\s*\(/, message: "fetch/network behavior" },
    { pattern: /\b(?:localStorage|sessionStorage)\b/, message: "storage behavior" },
    { pattern: /\bwindow\.open\s*\(/, message: "window/provider handoff" },
    { pattern: /\blocation\.(?:href|assign|replace)\b/, message: "navigation behavior" },
    { pattern: /NexusControlledLowRiskRendererEligibilityAdapter\./, message: "adapter invocation" },
    { pattern: /NexusControlledLowRiskTextOnlyRendererLoader\./, message: "loader invocation" },
    { pattern: /NexusControlledLowRiskTextOnlyRenderer\./, message: "renderer invocation" }
  ].forEach(({ pattern, message }) => {
    assert(!pattern.test(source), `${label} must not contain ${message}.`);
  });
}

function validCandidate(overrides = {}) {
  return {
    category: "agriculture training",
    title: "Agriculture training preview",
    summary: "Review safe training options before choosing a next step.",
    previewOnly: true,
    riskTier: "low",
    source: "controlled-action-readiness",
    selectedToolId: "workforce.training",
    readiness: {
      previewReady: true,
      metadataOnly: true,
      previewOnly: true,
      requiresPermission: false,
      requiresConfirmation: false,
      hasMissingInput: false,
      reason: "Safe low-risk preview metadata."
    },
    reason: "Low-risk preview candidate.",
    ...overrides
  };
}

function assertValidOutput(output, expectedCategory, label) {
  assert(output && typeof output === "object" && !Array.isArray(output), `${label}: output must be an object.`);
  assert(output.category === expectedCategory, `${label}: category mismatch.`);
  assert(output.previewOnly === true, `${label}: previewOnly must be true.`);
  assert(output.riskTier === "low", `${label}: riskTier must remain low.`);
  assert(typeof output.title === "string" && output.title.length > 0, `${label}: title must be plain text.`);
  assert(typeof output.summary === "string" && output.summary.length > 0, `${label}: summary must be plain text.`);
  assert(typeof output.source === "string" && output.source.length > 0, `${label}: source must be plain text.`);

  const serialized = JSON.stringify(output);
  [
    "url",
    "href",
    "link",
    "button",
    "form",
    "input",
    "handler",
    "onClick",
    "route",
    "navigate",
    "provider",
    "permission",
    "camera",
    "location",
    "phone",
    "call",
    "message",
    "payment",
    "buy",
    "sell",
    "appointment",
    "emergency",
    "fetch",
    "storage",
    "execute",
    "execution",
    "action",
    "completion"
  ].forEach(term => {
    assert(!new RegExp(`"${escapeRegex(term)}"\\s*:`, "i").test(serialized), `${label}: output must not contain forbidden field ${term}.`);
  });
}

[
  ["Contract file", paths.contract],
  ["Contract doc", paths.doc],
  ["Phase 14A QA", paths.phase14aQa],
  ["Phase 14B QA", paths.phase14bQa],
  ["Phase 14C QA", paths.phase14cQa],
  ["Phase 14D QA", paths.phase14dQa],
  ["Phase 14E QA", paths.phase14eQa],
  ["Phase 14F QA", paths.phase14fQa],
  ["Phase 14G QA", paths.phase14gQa],
  ["Phase 14H QA", paths.phase14hQa],
  ["Phase 14I QA", paths.phase14iQa],
  ["Phase 14G adapter", paths.adapter],
  ["Phase 14D loader", paths.loader],
  ["Phase 14A renderer", paths.renderer]
].forEach(([label, filePath]) => assertExists(filePath, label));

const contractSource = read(paths.contract);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const doc = read(paths.doc);
const packageJson = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);
const contract = require(paths.contract);

assert(contractSource.includes("NexusControlledLowRiskRendererCandidateContract"), "Contract must expose the suggested global/API name for isolated harnesses.");
assert(contractSource.includes("validateControlledLowRiskRendererCandidate"), "Contract must expose validation helper.");
assert(contractSource.includes("normalizeControlledLowRiskRendererCandidate"), "Contract must expose normalization helper.");
assert(contractSource.includes("module.exports"), "Contract must remain Node QA-callable.");
assert(!contractSource.includes("enableControlledLowRiskRendererEligibilityAdapter"), "Contract must not enable the Phase 14G adapter flag.");
assert(!contractSource.includes("enableControlledLowRiskRendererVisibleUi"), "Contract must not enable the visible renderer flag.");
assert(!contractSource.includes("enableControlledLowRiskRendererLoader"), "Contract must not enable the loader flag.");
assertNoUnsafeSource(contractSource, "Candidate contract");

[contractFileName, adapterFileName, loaderFileName, rendererFileName].forEach(fileName => {
  assertNoRuntimeLoad(index, "public/index.html", fileName);
  assertNoRuntimeLoad(app, "public/app.js", fileName);
  assertNoRuntimeLoad(server, "server.js", fileName);
});
assertNoRuntimeSymbols(index, "public/index.html");
assertNoRuntimeSymbols(app, "public/app.js");
assertNoRuntimeSymbols(server, "server.js");

assert(packageJson.scripts[qaAlias] === `node scripts/${qaScriptName}`, "package.json must expose the Phase 14J QA alias.");
assert(qaSuite.includes(`scripts/${qaScriptName}`), "nexus-workforce QA suite must include Phase 14J QA.");

[
  "Contract Schema",
  "Required Fields",
  "Optional Safe Fields",
  "Forbidden Fields",
  "Allowed Low-Risk Categories",
  "Rejected High-Risk And Excluded Categories",
  "Normalization And Sanitization Rules",
  "buildControlledActionPreviewReadinessFromMetadata",
  "before the Phase 14G adapter",
  "No runtime behavior changed",
  "Standard User remains unwired"
].forEach(term => {
  assert(doc.includes(term), `Phase 14J doc must mention ${term}.`);
});

assert(Array.isArray(contract.ALLOWED_CATEGORIES), "Contract must expose allowed categories.");
[
  "agriculture training",
  "irrigation learning",
  "farm jobs/workforce preview",
  "AgriTrade browse-only preview",
  "crop issue educational help"
].forEach(category => {
  assert(contract.ALLOWED_CATEGORIES.includes(category), `Contract must allow ${category}.`);
});

assert(contract.normalizeControlledLowRiskRendererCandidate() === null, "Missing input must normalize to null.");
assert(contract.normalizeControlledLowRiskRendererCandidate(null) === null, "Null input must normalize to null.");
assert(contract.normalizeControlledLowRiskRendererCandidate({}) === null, "Empty input must normalize to null.");
assert(contract.validateControlledLowRiskRendererCandidate({}).valid === false, "Empty input must validate false.");
assert(contract.normalizeControlledLowRiskRendererCandidate(validCandidate({ previewOnly: false })) === null, "previewOnly !== true must reject.");
assert(contract.normalizeControlledLowRiskRendererCandidate(validCandidate({ riskTier: "medium" })) === null, "riskTier !== low must reject.");
assert(contract.normalizeControlledLowRiskRendererCandidate(validCandidate({ category: "call provider" })) === null, "High-risk category must reject.");
assert(contract.normalizeControlledLowRiskRendererCandidate(validCandidate({ category: "unknown safe-ish category", selectedToolId: "unknown.tool" })) === null, "Unknown category must reject.");
assert(contract.normalizeControlledLowRiskRendererCandidate(validCandidate({ extra: "unknown" })) === null, "Unknown top-level fields must reject.");

[
  ["agriculture training", "workforce.training", "agriculture training"],
  ["irrigation learning", "learning.start", "irrigation learning"],
  ["farm jobs/workforce preview", "workforce.job_pathways", "farm jobs/workforce preview"],
  ["AgriTrade browse-only preview", "marketplace.agritrade", "AgriTrade browse-only preview"],
  ["crop issue educational help", "agriculture.help", "crop issue educational help"]
].forEach(([category, selectedToolId, expected]) => {
  const output = contract.normalizeControlledLowRiskRendererCandidate(validCandidate({
    category,
    selectedToolId,
    title: `${category} title`,
    summary: `${category} summary`
  }));
  assertValidOutput(output, expected, category);
  const validation = contract.validateControlledLowRiskRendererCandidate(validCandidate({ category, selectedToolId }));
  assert(validation.valid === true, `${category}: validation must pass.`);
  assertValidOutput(validation.candidate, expected, `${category} validation`);
});

[
  "url",
  "href",
  "link",
  "links",
  "button",
  "buttons",
  "form",
  "forms",
  "input",
  "inputs",
  "handler",
  "handlers",
  "onClick",
  "click",
  "route",
  "routing",
  "navigate",
  "navigation",
  "provider",
  "providerHandoff",
  "handoff",
  "permission",
  "permissions",
  "camera",
  "microphone",
  "location",
  "map",
  "contact",
  "contacts",
  "phone",
  "call",
  "message",
  "sms",
  "whatsapp",
  "telegram",
  "payment",
  "buy",
  "sell",
  "purchase",
  "checkout",
  "appointment",
  "schedule",
  "emergency",
  "dispatch",
  "medical",
  "telehealth",
  "fetch",
  "network",
  "storage",
  "execute",
  "execution",
  "action",
  "actions",
  "completion",
  "completed"
].forEach(field => {
  assert(contract.normalizeControlledLowRiskRendererCandidate(validCandidate({ [field]: "unsafe" })) === null, `Forbidden top-level field ${field} must reject.`);
  assert(contract.normalizeControlledLowRiskRendererCandidate(validCandidate({ readiness: { previewReady: true, [field]: "unsafe" } })) === null, `Nested forbidden field ${field} must reject.`);
});

[
  { title: "Call the provider", summary: "Safe summary" },
  { title: "Safe title", summary: "Open camera for diagnosis" },
  { title: "Safe title", summary: "Buy seeds now" },
  { title: "Safe title", summary: "Emergency dispatch" },
  { title: "Safe title", summary: "Provider handoff" }
].forEach(overrides => {
  assert(contract.normalizeControlledLowRiskRendererCandidate(validCandidate(overrides)) === null, `Blocked high-risk value must reject: ${JSON.stringify(overrides)}.`);
});

const sanitized = contract.normalizeControlledLowRiskRendererCandidate(validCandidate({
  title: "<script>alert(1)</script> Training",
  summary: "Review <b>safe</b> options."
}));
assertValidOutput(sanitized, "agriculture training", "sanitized candidate");
assert(sanitized.title.includes("&lt;script&gt;"), "Unsafe script text must be escaped as plain text.");
assert(!sanitized.title.includes("<script>"), "Unsafe script text must not remain HTML.");
assert(sanitized.summary.includes("&lt;b&gt;"), "Unsafe HTML text must be escaped as plain text.");

assert(contract.normalizeControlledLowRiskRendererCandidate(validCandidate({ readiness: { previewReady: "yes" } })), "Safe text readiness field may pass.");
assert(contract.normalizeControlledLowRiskRendererCandidate(validCandidate({ readiness: { previewReady: 1 } })) === null, "Non-boolean/non-text readiness value must reject.");
assert(contract.normalizeControlledLowRiskRendererCandidate(validCandidate({ readiness: { unsafeReadyField: true } })) === null, "Unknown readiness field must reject.");

console.log("[nexus-controlled-low-risk-renderer-phase-14j-candidate-payload-contract-qa] passed");
