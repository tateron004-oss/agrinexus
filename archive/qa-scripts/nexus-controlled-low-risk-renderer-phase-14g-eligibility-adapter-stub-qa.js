const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const adapterFileName = "nexus-controlled-low-risk-renderer-eligibility-adapter.js";
const rendererFileName = "nexus-controlled-low-risk-text-only-renderer.js";
const loaderFileName = "nexus-controlled-low-risk-text-only-renderer-loader.js";
const adapterFlag = "enableControlledLowRiskRendererEligibilityAdapter";
const visibleFlag = "enableControlledLowRiskRendererVisibleUi";
const loaderFlag = "enableControlledLowRiskRendererLoader";

const paths = {
  adapter: path.join(root, "public", adapterFileName),
  renderer: path.join(root, "public", rendererFileName),
  loader: path.join(root, "public", loaderFileName),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  package: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js"),
  doc: path.join(root, "docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_PHASE_14G_ELIGIBILITY_ADAPTER_STUB.md"),
  phase14aQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14a-qa.js"),
  phase14bQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary-qa.js"),
  phase14cQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness-qa.js"),
  phase14dQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14d-runtime-loader-stub-qa.js"),
  phase14eQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14e-import-boundary-qa.js"),
  phase14fQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14f-loader-test-harness-qa.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-controlled-low-risk-renderer-phase-14g-eligibility-adapter-stub-qa] ${message}`);
    process.exit(1);
  }
}

function assertNoRuntimeLoad(source, label, fileName) {
  const escaped = fileName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  assert(!new RegExp(`<script[^>]+src=["'][^"']*${escaped}["']`, "i").test(source), `${label} must not script-load ${fileName}.`);
  assert(!new RegExp(`\\bimport\\s+[^;]*${escaped}`, "i").test(source), `${label} must not statically import ${fileName}.`);
  assert(!new RegExp(`\\bimport\\s*\\([^)]*${escaped}`, "i").test(source), `${label} must not dynamically import ${fileName}.`);
  assert(!new RegExp(`\\brequire\\s*\\([^)]*${escaped}`, "i").test(source), `${label} must not require ${fileName}.`);
  assert(!source.includes(fileName), `${label} must not reference ${fileName}.`);
}

function assertNoRuntimeSymbols(source, label) {
  [
    "NexusControlledLowRiskRendererEligibilityAdapter",
    "buildControlledLowRiskRendererPayload",
    adapterFlag,
    "NexusControlledLowRiskTextOnlyRenderer",
    "NexusControlledLowRiskTextOnlyRendererLoader",
    "renderControlledLowRiskTextModel",
    "renderControlledLowRiskTextOnlyPreview",
    visibleFlag,
    loaderFlag
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
    { pattern: /renderControlledLowRiskTextModel\s*\(/, message: "renderer invocation" },
    { pattern: /renderControlledLowRiskTextOnlyPreview\s*\(/, message: "loader invocation" }
  ].forEach(({ pattern, message }) => {
    assert(!pattern.test(source), `${label} must not contain ${message}.`);
  });
}

function assertSafePayload(payload, expectedCategory, label) {
  assert(payload && typeof payload === "object" && !Array.isArray(payload), `${label}: payload must be an object.`);
  assert(payload.category === expectedCategory, `${label}: category mismatch.`);
  assert(payload.previewOnly === true, `${label}: previewOnly must be true.`);
  assert(payload.riskTier === "low", `${label}: riskTier must stay low.`);
  assert(typeof payload.title === "string" && payload.title.length > 0, `${label}: title must be safe text.`);
  assert(typeof payload.summary === "string" && payload.summary.length > 0, `${label}: summary must be safe text.`);

  const keys = Object.keys(payload);
  ["category", "title", "summary", "previewOnly", "riskTier"].forEach(key => {
    assert(keys.includes(key), `${label}: payload must include ${key}.`);
  });

  const forbidden = [
    "button",
    "buttons",
    "link",
    "links",
    "href",
    "url",
    "form",
    "forms",
    "input",
    "inputs",
    "handler",
    "handlers",
    "onClick",
    "onclick",
    "provider",
    "providerAction",
    "permission",
    "permissionRequest",
    "storage",
    "fetch",
    "network",
    "navigation",
    "route",
    "execute",
    "execution",
    "dispatch",
    "contact",
    "location",
    "camera",
    "microphone",
    "payment",
    "call",
    "message",
    visibleFlag,
    loaderFlag,
    adapterFlag
  ];
  forbidden.forEach(key => {
    assert(!keys.includes(key), `${label}: payload must not include ${key}.`);
  });
}

assert(fs.existsSync(paths.adapter), "Phase 14G adapter file must exist.");
assert(fs.existsSync(paths.renderer), "Phase 14A renderer file must exist.");
assert(fs.existsSync(paths.loader), "Phase 14D loader file must exist.");
assert(fs.existsSync(paths.doc), "Phase 14G document must exist.");
assert(fs.existsSync(paths.phase14aQa), "Phase 14A QA must remain present.");
assert(fs.existsSync(paths.phase14bQa), "Phase 14B QA must remain present.");
assert(fs.existsSync(paths.phase14cQa), "Phase 14C QA must remain present.");
assert(fs.existsSync(paths.phase14dQa), "Phase 14D QA must remain present.");
assert(fs.existsSync(paths.phase14eQa), "Phase 14E QA must remain present.");
assert(fs.existsSync(paths.phase14fQa), "Phase 14F QA must remain present.");

const adapterSource = read(paths.adapter);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const doc = read(paths.doc);
const packageJson = JSON.parse(read(paths.package));
const qaSuite = read(paths.qaSuite);
const adapter = require(paths.adapter);

assert(adapterSource.includes("buildControlledLowRiskRendererPayload"), "Adapter must expose payload builder.");
assert(adapterSource.includes(adapterFlag), "Adapter must require explicit adapter flag.");
assert(adapterSource.includes("module.exports"), "Adapter must remain Node QA-callable.");
assert(!adapterSource.includes("agritade"), "Adapter must not contain misspelled AgriTrade category.");
assertNoUnsafeSource(adapterSource, "Adapter");

assertNoRuntimeLoad(index, "public/index.html", adapterFileName);
assertNoRuntimeLoad(app, "public/app.js", adapterFileName);
assertNoRuntimeLoad(server, "server.js", adapterFileName);
assertNoRuntimeSymbols(index, "public/index.html");
assertNoRuntimeSymbols(app, "public/app.js");
assertNoRuntimeSymbols(server, "server.js");

assert(adapter.isEligibilityAdapterEnabled({}) === false, "Adapter must default disabled.");
assert(adapter.isEligibilityAdapterEnabled({ [adapterFlag]: false }) === false, "Adapter false flag must remain disabled.");
assert(adapter.isEligibilityAdapterEnabled({ [adapterFlag]: true }) === true, "Adapter true flag must enable only adapter eligibility.");
assert(adapter.buildControlledLowRiskRendererPayload() === null, "Missing input must return null.");
assert(adapter.buildControlledLowRiskRendererPayload(null) === null, "Null input must return null.");
assert(adapter.buildControlledLowRiskRendererPayload({}) === null, "Empty input must return null.");
assert(adapter.buildControlledLowRiskRendererPayload({ [adapterFlag]: true }) === null, "Flag-only input must return null.");
assert(adapter.buildControlledLowRiskRendererPayload({ [adapterFlag]: true, riskTier: "low", previewOnly: false, category: "agriculture_training" }) === null, "Non-preview input must return null.");
assert(adapter.buildControlledLowRiskRendererPayload({ [adapterFlag]: true, riskTier: "medium", previewOnly: true, category: "agriculture_training" }) === null, "Non-low-risk input must return null.");
assert(adapter.buildControlledLowRiskRendererPayload({ riskTier: "low", previewOnly: true, category: "agriculture_training" }) === null, "Adapter flag must be required.");

[
  { label: "agriculture training", category: "agriculture_training", expected: "agriculture_training" },
  { label: "irrigation learning", category: "irrigation learning", expected: "irrigation_learning" },
  { label: "farm jobs", selectedToolId: "workforce.job_pathways", expected: "farm_jobs_workforce_discovery" },
  { label: "AgriTrade", selectedToolId: "marketplace.agritrade", expected: "agritrade_marketplace_preview" },
  { label: "crop issue", selectedToolId: "agriculture.help", expected: "crop_issue_education_help" }
].forEach(item => {
  const payload = adapter.buildControlledLowRiskRendererPayload({
    [adapterFlag]: true,
    previewOnly: true,
    riskTier: "low",
    category: item.category,
    selectedToolId: item.selectedToolId,
    title: `${item.label} preview`,
    summary: `Safe ${item.label} preview only.`
  });
  assertSafePayload(payload, item.expected, item.label);
});

[
  "call",
  "message",
  "WhatsApp",
  "Telegram",
  "SMS",
  "local phone",
  "location",
  "map permission",
  "camera",
  "microphone",
  "buy",
  "sell",
  "payment",
  "appointment scheduling",
  "emergency",
  "medical telehealth action",
  "provider handoff",
  "account login",
  "contact lookup",
  "external navigation",
  "URL opening",
  "execution action completion"
].forEach(category => {
  const payload = adapter.buildControlledLowRiskRendererPayload({
    [adapterFlag]: true,
    previewOnly: true,
    riskTier: "low",
    category,
    title: `${category} request`,
    summary: "This must not become a renderer payload."
  });
  assert(payload === null, `${category}: excluded/high-risk category must return null.`);
});

[
  { provider: "native-phone" },
  { url: "https://example.com" },
  { href: "tel:+15555555555" },
  { onClick: "run()" },
  { permission: "camera" },
  { fetch: "/api/action" },
  { contact: "John" },
  { payment: "card" },
  { call: true },
  { message: "send" },
  { location: "precise" },
  { camera: true }
].forEach(extra => {
  const payload = adapter.buildControlledLowRiskRendererPayload({
    [adapterFlag]: true,
    previewOnly: true,
    riskTier: "low",
    category: "agriculture_training",
    title: "Training",
    summary: "Preview only.",
    ...extra
  });
  assert(payload === null, `Candidate with forbidden authority field ${Object.keys(extra)[0]} must return null.`);
});

{
  const payload = adapter.buildControlledLowRiskRendererPayload({
    [adapterFlag]: true,
    previewOnly: true,
    riskTier: "low",
    category: "agriculture_training",
    title: "<script>alert(1)</script><button>Do it</button>",
    summary: "<img src=x onerror=alert(1)>This is text only."
  });
  assertSafePayload(payload, "agriculture_training", "unsafe text");
  assert(payload.title.includes("&lt;script&gt;"), "Unsafe title must be escaped into text.");
  assert(payload.summary.includes("&lt;img"), "Unsafe summary must be escaped into text.");
  assert(!/<script>|<button>|<img/i.test(payload.title + payload.summary), "Payload must not preserve raw HTML tags.");
}

[
  "Phase 14G Purpose",
  "Standard User runtime boundary",
  "enableControlledLowRiskRendererEligibilityAdapter === true",
  "must never set or enable",
  "enableControlledLowRiskRendererVisibleUi",
  "enableControlledLowRiskRendererLoader",
  "must never call",
  "no provider handoff",
  "no permission prompts",
  "no execution behavior"
].forEach(term => {
  assert(doc.includes(term), `Phase 14G document must mention ${term}.`);
});

assert(packageJson.scripts["qa:nexus-controlled-low-risk-renderer-phase-14g-eligibility-adapter-stub"] === "node scripts/nexus-controlled-low-risk-renderer-phase-14g-eligibility-adapter-stub-qa.js", "package.json must expose Phase 14G QA alias.");
assert(packageJson.scripts["qa:nexus-controlled-low-risk-text-only-renderer-phase-14f-loader-test-harness"], "Phase 14F QA alias must remain present.");

[
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14a-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14d-runtime-loader-stub-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14e-import-boundary-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14f-loader-test-harness-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-phase-14g-eligibility-adapter-stub-qa.js"
].forEach(script => {
  assert(qaSuite.includes(script), `nexus-workforce suite must include ${script}.`);
});

console.log("[nexus-controlled-low-risk-renderer-phase-14g-eligibility-adapter-stub-qa] passed");
