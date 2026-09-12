const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const rendererFileName = "nexus-controlled-low-risk-text-only-renderer.js";
const mountId = "nexus-controlled-low-risk-renderer-root";
const flagName = "enableControlledLowRiskRendererVisibleUi";

const paths = {
  renderer: path.join(root, "public", rendererFileName),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  package: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js"),
  doc: path.join(root, "docs", "NEXUS_CONTROLLED_LOW_RISK_TEXT_ONLY_RENDERER_PHASE_14B_LOAD_BOUNDARY_QA.md"),
  phase14aQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14a-qa.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary-qa] ${message}`);
    process.exit(1);
  }
}

function countMatches(source, pattern) {
  return (source.match(pattern) || []).length;
}

function assertNotLoadedByRuntime(source, label) {
  assert(!source.includes(rendererFileName), `${label} must not reference or load ${rendererFileName}.`);
  assert(!source.includes("NexusControlledLowRiskTextOnlyRenderer"), `${label} must not reference renderer global.`);
  assert(!source.includes("renderControlledLowRiskTextModel"), `${label} must not invoke Phase 14A render helper.`);
  assert(!source.includes("isControlledLowRiskRendererVisibleUiEnabled"), `${label} must not invoke Phase 14A flag helper.`);
  assert(!source.includes("getControlledLowRiskRendererMount"), `${label} must not query Phase 14A mount helper.`);
  assert(!source.includes("runControlledLowRiskRendererPreflight"), `${label} must not invoke Phase 14A preflight helper.`);
  assert(!source.includes("clearControlledLowRiskRendererMount"), `${label} must not invoke Phase 14A clear helper.`);
}

function assertNoUnsafeRendererWiring(source, label) {
  const unsafePatterns = [
    { pattern: new RegExp(`${rendererFileName.replace(/\./g, "\\.")}[\\s\\S]{0,160}<script`, "i"), message: "script tag" },
    { pattern: new RegExp(`import[\\s\\S]{0,120}${rendererFileName.replace(/\./g, "\\.")}`, "i"), message: "static/dynamic import" },
    { pattern: new RegExp(`require\\([\\s\\S]{0,120}${rendererFileName.replace(/\./g, "\\.")}`, "i"), message: "CommonJS require" },
    { pattern: new RegExp(`${flagName}[\\s\\S]{0,240}(hidden\\s*=\\s*false|removeAttribute\\([\"']hidden|classList\\.remove|appendChild|replaceChildren|innerHTML|insertAdjacentHTML)`, "i"), message: "flag-driven DOM activation" },
    { pattern: new RegExp(`${mountId}[\\s\\S]{0,240}(addEventListener|onclick|href|button|form|input|fetch\\s*\\(|localStorage|sessionStorage|window\\.open|location\\.)`, "i"), message: "mount-driven interactive/external behavior" },
    { pattern: new RegExp(`${mountId}[\\s\\S]{0,240}(providerHandoffAllowed|permissionRequestAllowed|navigationAllowed\\s*=\\s*true|executionAllowed\\s*=\\s*true|confirmation|execute\\(|dispatch)`, "i"), message: "mount-driven authority wiring" }
  ];

  unsafePatterns.forEach(({ pattern, message }) => {
    assert(!pattern.test(source), `${label} must not contain ${message} for the dormant renderer.`);
  });
}

assert(fs.existsSync(paths.renderer), "Phase 14A renderer module must exist.");
assert(fs.existsSync(paths.doc), "Phase 14B load-boundary document must exist.");
assert(fs.existsSync(paths.phase14aQa), "Phase 14A QA must remain present.");

const renderer = read(paths.renderer);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageJson = JSON.parse(read(paths.package));
const qaSuite = read(paths.qaSuite);
const doc = read(paths.doc);

assert(renderer.includes("renderControlledLowRiskTextModel"), "Renderer file must contain Phase 14A text-only render helper.");
assert(renderer.includes(flagName), "Renderer file must contain strict visible UI flag helper.");
assert(renderer.includes("module.exports"), "Renderer file must remain directly QA-callable without runtime loading.");
assert(!renderer.includes("innerHTML"), "Renderer file must not use innerHTML.");
assert(!renderer.includes("insertAdjacentHTML"), "Renderer file must not use insertAdjacentHTML.");
assert(!/createElement\(\s*["'](?:button|a|form|input|iframe|script|style)["']\s*\)/.test(renderer), "Renderer file must not create interactive/executable elements.");
assert(!/addEventListener\s*\(/.test(renderer), "Renderer file must not add event handlers.");
assert(!/\bfetch\s*\(/.test(renderer), "Renderer file must not make network calls.");
assert(!/\b(?:localStorage|sessionStorage)\b/.test(renderer), "Renderer file must not read or write browser storage.");
assert(!/\bwindow\.open\s*\(/.test(renderer), "Renderer file must not open providers or navigation windows.");

assert(!/<script[^>]+src=["'][^"']*nexus-controlled-low-risk-text-only-renderer\.js["']/i.test(index), "public/index.html must not load renderer with a script tag.");
assertNotLoadedByRuntime(index, "public/index.html");
assertNotLoadedByRuntime(app, "public/app.js");
assertNotLoadedByRuntime(server, "server.js");

assertNoUnsafeRendererWiring(index, "public/index.html");
assertNoUnsafeRendererWiring(app, "public/app.js");
assertNoUnsafeRendererWiring(server, "server.js");

assert(!app.includes(flagName), "public/app.js must not consume or enable the visible renderer flag.");
assert(!server.match(new RegExp(`${flagName}\\s*:\\s*true`)), "server.js must not expose the visible renderer flag as true.");
assert(!server.includes(flagName), "server.js must not expose the dormant renderer flag in Phase 14B.");
assert(!index.includes(flagName), "public/index.html must not expose the dormant renderer flag.");

const mountMatches = [...index.matchAll(/<div\s+[^>]*id="nexus-controlled-low-risk-renderer-root"[^>]*>\s*<\/div>/g)];
assert(mountMatches.length === 1, "public/index.html must contain exactly one empty hidden renderer mount.");
const mountHtml = mountMatches[0][0];
[
  "hidden",
  'aria-hidden="true"',
  'data-nexus-renderer-mode="hidden"',
  'data-visible-renderer-enabled="false"',
  'data-execution-allowed="false"',
  'data-provider-handoff="false"',
  'data-permission-request="false"',
  'data-navigation-allowed="false"'
].forEach(token => {
  assert(mountHtml.includes(token), `Hidden mount must include ${token}.`);
});
assert(!mountHtml.replace(/<div[^>]*>/, "").replace("</div>", "").trim(), "Hidden mount must remain empty by default.");

const forbiddenStandardUserRuntimeStrings = [
  "renderControlledLowRiskTextPreview",
  "NexusControlledLowRiskTextOnlyRenderer",
  "renderControlledLowRiskTextModel",
  "isControlledLowRiskRendererVisibleUiEnabled",
  "runControlledLowRiskRendererPreflight"
];
forbiddenStandardUserRuntimeStrings.forEach(term => {
  assert(!index.includes(term), `public/index.html must not reference ${term}.`);
  assert(!app.includes(term), `public/app.js must not reference ${term}.`);
  assert(!server.includes(term), `server.js must not reference ${term}.`);
});

assert(packageJson.scripts["qa:nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary"] === "node scripts/nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary-qa.js", "package.json must expose Phase 14B QA alias.");
assert(packageJson.scripts["qa:nexus-controlled-low-risk-text-only-renderer-phase-14a"] === "node scripts/nexus-controlled-low-risk-text-only-renderer-phase-14a-qa.js", "Phase 14A QA alias must remain present.");
assert(qaSuite.includes("scripts/nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary-qa.js"), "nexus-workforce suite must include Phase 14B load-boundary QA.");
assert(qaSuite.includes("scripts/nexus-controlled-low-risk-text-only-renderer-phase-14a-qa.js"), "nexus-workforce suite must retain Phase 14A QA.");

[
  "not loaded by `public/index.html`",
  "not imported or referenced by `public/app.js`",
  "not injected by `server.js`",
  "hidden mount",
  "no visible renderer UI",
  "no provider handoff",
  "no permission prompts",
  "no execution"
].forEach(term => {
  assert(doc.includes(term), `Phase 14B document must mention ${term}.`);
});

assert(countMatches(index, /nexus-controlled-low-risk-renderer-root/g) === 1, "Mount ID should appear once in public/index.html.");
assert(app.includes("function paintControlledStagedActionPreview"), "public/app.js may only query the shared hidden mount through the Sprint D6 flag-gated staged preview painter.");
assert(app.includes('root.dataset.executionAllowed = "false"'), "public/app.js must keep the shared hidden mount execution metadata false.");
assert(app.includes('root.dataset.providerHandoff = "false"'), "public/app.js must keep the shared hidden mount provider metadata false.");
assert(app.includes('root.dataset.permissionRequest = "false"'), "public/app.js must keep the shared hidden mount permission metadata false.");
assert(countMatches(server, /nexus-controlled-low-risk-renderer-root/g) === 0, "server.js must not reference the dormant renderer mount.");

console.log("[nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary-qa] passed");
