const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const rendererFileName = "nexus-controlled-low-risk-text-only-renderer.js";
const loaderFileName = "nexus-controlled-low-risk-text-only-renderer-loader.js";
const mountId = "nexus-controlled-low-risk-renderer-root";
const visibleFlag = "enableControlledLowRiskRendererVisibleUi";
const loaderFlag = "enableControlledLowRiskRendererLoader";

const paths = {
  renderer: path.join(root, "public", rendererFileName),
  loader: path.join(root, "public", loaderFileName),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  package: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js"),
  doc: path.join(root, "docs", "NEXUS_CONTROLLED_LOW_RISK_TEXT_ONLY_RENDERER_PHASE_14E_IMPORT_BOUNDARY_QA.md"),
  phase14aQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14a-qa.js"),
  phase14bQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary-qa.js"),
  phase14cQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness-qa.js"),
  phase14dQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14d-runtime-loader-stub-qa.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-controlled-low-risk-text-only-renderer-phase-14e-import-boundary-qa] ${message}`);
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
    "NexusControlledLowRiskTextOnlyRenderer",
    "NexusControlledLowRiskTextOnlyRendererLoader",
    "renderControlledLowRiskTextModel",
    "renderControlledLowRiskTextOnlyPreview",
    "isControlledLowRiskRendererVisibleUiEnabled",
    "isControlledLowRiskRendererLoaderEnabled",
    visibleFlag,
    loaderFlag
  ].forEach(symbol => {
    assert(!source.includes(symbol), `${label} must not reference ${symbol}.`);
  });
}

function assertNoUnsafeRuntimeWiring(source, label) {
  [
    { pattern: new RegExp(`${mountId}[\\s\\S]{0,240}(addEventListener|onclick|href|button|form|input|fetch\\s*\\(|localStorage|sessionStorage|window\\.open|location\\.)`, "i"), message: "mount-driven interactive or external behavior" },
    { pattern: new RegExp(`${mountId}[\\s\\S]{0,240}(providerHandoff|permissionRequest|navigationAllowed|executionAllowed|confirmation|execute|dispatch)`, "i"), message: "mount-driven authority wiring" },
    { pattern: new RegExp(`${visibleFlag}[\\s\\S]{0,240}(true|appendChild|innerHTML|insertAdjacentHTML|hidden\\s*=\\s*false|removeAttribute\\([\"']hidden)`, "i"), message: "visible renderer flag activation" },
    { pattern: new RegExp(`${loaderFlag}[\\s\\S]{0,240}(true|appendChild|innerHTML|insertAdjacentHTML|hidden\\s*=\\s*false|removeAttribute\\([\"']hidden)`, "i"), message: "loader flag activation" }
  ].forEach(({ pattern, message }) => {
    assert(!pattern.test(source), `${label} must not contain ${message}.`);
  });
}

assert(fs.existsSync(paths.renderer), "Phase 14A renderer file must exist.");
assert(fs.existsSync(paths.loader), "Phase 14D loader file must exist.");
assert(fs.existsSync(paths.doc), "Phase 14E document must exist.");
assert(fs.existsSync(paths.phase14aQa), "Phase 14A QA must remain present.");
assert(fs.existsSync(paths.phase14bQa), "Phase 14B QA must remain present.");
assert(fs.existsSync(paths.phase14cQa), "Phase 14C QA must remain present.");
assert(fs.existsSync(paths.phase14dQa), "Phase 14D QA must remain present.");

const rendererSource = read(paths.renderer);
const loaderSource = read(paths.loader);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const doc = read(paths.doc);
const packageJson = JSON.parse(read(paths.package));
const qaSuite = read(paths.qaSuite);
const renderer = require(paths.renderer);
const loader = require(paths.loader);

assert(rendererSource.includes("renderControlledLowRiskTextModel"), "Phase 14A renderer must retain render helper.");
assert(loaderSource.includes("renderControlledLowRiskTextOnlyPreview"), "Phase 14D loader must retain loader helper.");
assert(renderer.isControlledLowRiskRendererVisibleUiEnabled({}) === false, "Renderer must no-op when visible UI flag is missing.");
assert(renderer.isControlledLowRiskRendererVisibleUiEnabled({ [visibleFlag]: false }) === false, "Renderer must no-op when visible UI flag is false.");
assert(loader.isControlledLowRiskRendererLoaderEnabled({}) === false, "Loader must default disabled.");
assert(loader.isControlledLowRiskRendererLoaderEnabled({ [visibleFlag]: true }) === false, "Loader must require explicit loader flag.");
assert(loader.isControlledLowRiskRendererLoaderEnabled({ [loaderFlag]: true }) === false, "Loader must require explicit visible UI flag.");
assert(loader.isControlledLowRiskRendererLoaderEnabled({ [visibleFlag]: true, [loaderFlag]: true }) === true, "Loader must require both strict true flags.");

assertNoRuntimeLoad(index, "public/index.html", rendererFileName);
assertNoRuntimeLoad(index, "public/index.html", loaderFileName);
assertNoRuntimeLoad(app, "public/app.js", rendererFileName);
assertNoRuntimeLoad(app, "public/app.js", loaderFileName);
assertNoRuntimeLoad(server, "server.js", rendererFileName);
assertNoRuntimeLoad(server, "server.js", loaderFileName);

assertNoRuntimeSymbols(index, "public/index.html");
assertNoRuntimeSymbols(app, "public/app.js");
assertNoRuntimeSymbols(server, "server.js");
assertNoUnsafeRuntimeWiring(index, "public/index.html");
assertNoUnsafeRuntimeWiring(app, "public/app.js");
assertNoUnsafeRuntimeWiring(server, "server.js");

const mountMatches = [...index.matchAll(/<div\s+[^>]*id="nexus-controlled-low-risk-renderer-root"[^>]*>\s*<\/div>/g)];
assert(mountMatches.length === 1, "public/index.html must contain exactly one empty hidden renderer mount.");
const mountHtml = mountMatches[0][0];
[
  "hidden",
  'aria-hidden="true"',
  'data-visible-renderer-enabled="false"',
  'data-execution-allowed="false"',
  'data-provider-handoff="false"',
  'data-permission-request="false"',
  'data-navigation-allowed="false"'
].forEach(token => {
  assert(mountHtml.includes(token), `Hidden mount must include ${token}.`);
});
assert(!mountHtml.replace(/<div[^>]*>/, "").replace("</div>", "").trim(), "Hidden mount must remain empty by default.");

[
  "Phase 14E Purpose",
  "Import Boundary Contract",
  "loader is not loaded",
  "renderer is not loaded",
  "no visible renderer card",
  "no loader activation",
  "no renderer activation",
  "no provider handoff",
  "no permission prompt",
  "no execution"
].forEach(term => {
  assert(doc.includes(term), `Phase 14E document must mention ${term}.`);
});

assert(packageJson.scripts["qa:nexus-controlled-low-risk-text-only-renderer-phase-14e-import-boundary"] === "node scripts/nexus-controlled-low-risk-text-only-renderer-phase-14e-import-boundary-qa.js", "package.json must expose Phase 14E QA alias.");
assert(packageJson.scripts["qa:nexus-controlled-low-risk-text-only-renderer-phase-14a"], "Phase 14A QA alias must remain present.");
assert(packageJson.scripts["qa:nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary"], "Phase 14B QA alias must remain present.");
assert(packageJson.scripts["qa:nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness"], "Phase 14C QA alias must remain present.");
assert(packageJson.scripts["qa:nexus-controlled-low-risk-text-only-renderer-phase-14d-runtime-loader-stub"], "Phase 14D QA alias must remain present.");

assert(qaSuite.includes("scripts/nexus-controlled-low-risk-text-only-renderer-phase-14a-qa.js"), "nexus-workforce suite must retain Phase 14A QA.");
assert(qaSuite.includes("scripts/nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary-qa.js"), "nexus-workforce suite must retain Phase 14B QA.");
assert(qaSuite.includes("scripts/nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness-qa.js"), "nexus-workforce suite must retain Phase 14C QA.");
assert(qaSuite.includes("scripts/nexus-controlled-low-risk-text-only-renderer-phase-14d-runtime-loader-stub-qa.js"), "nexus-workforce suite must retain Phase 14D QA.");
assert(qaSuite.includes("scripts/nexus-controlled-low-risk-text-only-renderer-phase-14e-import-boundary-qa.js"), "nexus-workforce suite must include Phase 14E QA.");

console.log("[nexus-controlled-low-risk-text-only-renderer-phase-14e-import-boundary-qa] passed");
