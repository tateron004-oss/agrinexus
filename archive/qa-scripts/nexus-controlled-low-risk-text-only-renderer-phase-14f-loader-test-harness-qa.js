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
  doc: path.join(root, "docs", "NEXUS_CONTROLLED_LOW_RISK_TEXT_ONLY_RENDERER_PHASE_14F_LOADER_TEST_HARNESS.md"),
  phase14aQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14a-qa.js"),
  phase14bQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary-qa.js"),
  phase14cQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness-qa.js"),
  phase14dQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14d-runtime-loader-stub-qa.js"),
  phase14eQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14e-import-boundary-qa.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-controlled-low-risk-text-only-renderer-phase-14f-loader-test-harness-qa] ${message}`);
    process.exit(1);
  }
}

class FakeElement {
  constructor(tagName, ownerDocument) {
    this.tagName = String(tagName || "").toUpperCase();
    this.ownerDocument = ownerDocument;
    this.childNodes = [];
    this.attributesMap = new Map();
    this.hidden = false;
    this.className = "";
    this._textContent = "";
  }

  get id() {
    return this.getAttribute("id") || "";
  }

  set id(value) {
    this.setAttribute("id", value);
  }

  get firstChild() {
    return this.childNodes[0] || null;
  }

  get textContent() {
    return `${this._textContent}${this.childNodes.map(child => child.textContent || "").join("")}`;
  }

  set textContent(value) {
    this._textContent = String(value || "");
    this.childNodes = [];
  }

  setAttribute(name, value) {
    this.attributesMap.set(name, String(value));
  }

  getAttribute(name) {
    return this.attributesMap.has(name) ? this.attributesMap.get(name) : null;
  }

  appendChild(child) {
    this.childNodes.push(child);
    return child;
  }

  removeChild(child) {
    const index = this.childNodes.indexOf(child);
    if (index >= 0) this.childNodes.splice(index, 1);
    return child;
  }

  querySelectorAll(selector) {
    const selectors = selector.split(",").map(item => item.trim()).filter(Boolean);
    const results = [];
    const visit = element => {
      element.childNodes.forEach(child => {
        if (matchesAny(child, selectors)) results.push(child);
        visit(child);
      });
    };
    visit(this);
    return results;
  }
}

class FakeDocument {
  constructor() {
    this.elements = [];
  }

  createElement(tagName) {
    const element = new FakeElement(tagName, this);
    this.elements.push(element);
    return element;
  }

  querySelectorAll(selector) {
    if (selector.startsWith("#")) {
      const id = selector.slice(1);
      return this.elements.filter(element => element.id === id);
    }
    return this.elements.filter(element => matchesAny(element, [selector]));
  }
}

function matchesAny(element, selectors) {
  return selectors.some(selector => {
    if (selector.startsWith("[")) {
      const attr = selector.slice(1, -1);
      return element.getAttribute(attr) !== null;
    }
    if (selector === "a[href]") return element.tagName === "A" && element.getAttribute("href") !== null;
    return element.tagName.toLowerCase() === selector.toLowerCase();
  });
}

function createHiddenMount() {
  const doc = new FakeDocument();
  const mount = doc.createElement("div");
  mount.id = mountId;
  mount.hidden = true;
  mount.setAttribute("aria-hidden", "true");
  mount.setAttribute("data-visible-renderer-enabled", "false");
  mount.setAttribute("data-execution-allowed", "false");
  mount.setAttribute("data-provider-handoff", "false");
  mount.setAttribute("data-permission-request", "false");
  mount.setAttribute("data-navigation-allowed", "false");
  return { doc, mount };
}

function assertDefaultHiddenMount(mount, label) {
  assert(mount.hidden === true, `${label}: mount must remain hidden.`);
  assert(mount.getAttribute("aria-hidden") === "true", `${label}: aria-hidden must remain true.`);
  assert(mount.getAttribute("data-visible-renderer-enabled") === "false", `${label}: visible flag must remain false.`);
  assert(mount.getAttribute("data-execution-allowed") === "false", `${label}: execution must remain false.`);
  assert(mount.getAttribute("data-provider-handoff") === "false", `${label}: provider handoff must remain false.`);
  assert(mount.getAttribute("data-permission-request") === "false", `${label}: permission request must remain false.`);
  assert(mount.getAttribute("data-navigation-allowed") === "false", `${label}: navigation must remain false.`);
  assert(mount.textContent.trim() === "", `${label}: mount must remain text-empty.`);
  assert(mount.childNodes.length === 0, `${label}: mount must remain child-empty.`);
}

function assertRenderedPreviewMount(mount, label, expectedText) {
  assert(mount.hidden === false, `${label}: mount may be revealed only in the isolated test harness.`);
  assert(mount.getAttribute("aria-hidden") === "false", `${label}: aria-hidden may become false only in the harness.`);
  assert(mount.getAttribute("data-visible-renderer-enabled") === "true", `${label}: visible renderer flag may become true only in the harness.`);
  assert(mount.getAttribute("data-execution-allowed") === "false", `${label}: render must remain non-executing.`);
  assert(mount.getAttribute("data-provider-handoff") === "false", `${label}: render must not enable provider handoff.`);
  assert(mount.getAttribute("data-permission-request") === "false", `${label}: render must not request permission.`);
  assert(mount.getAttribute("data-navigation-allowed") === "false", `${label}: render must not allow navigation.`);
  assert(mount.textContent.includes(expectedText), `${label}: rendered text must include safe preview text.`);
  assertNoUnsafeChildren(mount, label);
}

function assertNoUnsafeChildren(mount, label) {
  [
    "button",
    "a",
    "form",
    "input",
    "select",
    "textarea",
    "iframe",
    "script",
    "[onclick]",
    "[href]",
    "[tabindex]"
  ].forEach(selector => {
    assert(mount.querySelectorAll(selector).length === 0, `${label}: renderer/loader must not create ${selector}.`);
  });
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

function assertNoUnsafeSource(source, label) {
  [
    { pattern: /\bfetch\s*\(/, message: "fetch/network behavior" },
    { pattern: /\b(?:localStorage|sessionStorage)\b/, message: "storage behavior" },
    { pattern: /addEventListener\s*\(/, message: "event handlers" },
    { pattern: /\bwindow\.open\s*\(/, message: "provider/window handoff" },
    { pattern: /\blocation\.(?:href|assign|replace)\b/, message: "navigation behavior" },
    { pattern: /createElement\(\s*["'](?:button|a|form|input|iframe|script|style)["']\s*\)/, message: "unsafe element creation" },
    { pattern: /\binnerHTML\b/, message: "unsafe HTML writes" },
    { pattern: /insertAdjacentHTML\s*\(/, message: "unsafe adjacent HTML writes" }
  ].forEach(({ pattern, message }) => {
    assert(!pattern.test(source), `${label} must not contain ${message}.`);
  });
}

const safePayloads = [
  {
    label: "agriculture training preview",
    model: {
      category: "agriculture_training",
      title: "Agriculture training",
      summary: "Preview training paths before taking action.",
      previewLines: ["Review crop and soil basics", "Compare local training options"],
      safetyLabel: "Preview only"
    }
  },
  {
    label: "irrigation learning preview",
    model: {
      category: "irrigation_learning",
      title: "Irrigation learning",
      summary: "Preview irrigation concepts in a learning-only format.",
      previewLines: ["Understand water timing", "Review drip irrigation basics"],
      safetyLabel: "Learning preview"
    }
  },
  {
    label: "farm jobs/workforce preview",
    model: {
      category: "farm_jobs_workforce_discovery",
      title: "Farm jobs",
      summary: "Preview workforce pathways without applying or contacting anyone.",
      previewLines: ["Explore job readiness", "Review training requirements"],
      safetyLabel: "Review only"
    }
  },
  {
    label: "AgriTrade browse-only preview",
    model: {
      category: "agritrade_marketplace_preview",
      title: "AgriTrade marketplace",
      summary: "Preview browse-only marketplace information without buying or selling.",
      previewLines: ["Review marketplace categories", "No transaction is started"],
      safetyLabel: "Browse only"
    }
  },
  {
    label: "crop issue educational help preview",
    model: {
      category: "crop_issue_education_help",
      title: "Crop issue help",
      summary: "Preview educational crop support without diagnosis or dispatch.",
      previewLines: ["Review symptoms to observe", "Consider local extension guidance"],
      safetyLabel: "Educational preview"
    }
  }
];

const blockedPayloads = [
  "call",
  "message",
  "location",
  "camera",
  "payment",
  "marketplace_transaction",
  "health",
  "telehealth",
  "emergency",
  "provider_handoff",
  "account",
  "identity"
].map(category => ({
  category,
  title: `${category} request`,
  summary: "This must not render as a low-risk text-only preview."
}));

assert(fs.existsSync(paths.renderer), "Phase 14A renderer file must exist.");
assert(fs.existsSync(paths.loader), "Phase 14D loader file must exist.");
assert(fs.existsSync(paths.doc), "Phase 14F document must exist.");
assert(fs.existsSync(paths.phase14aQa), "Phase 14A QA must remain present.");
assert(fs.existsSync(paths.phase14bQa), "Phase 14B QA must remain present.");
assert(fs.existsSync(paths.phase14cQa), "Phase 14C QA must remain present.");
assert(fs.existsSync(paths.phase14dQa), "Phase 14D QA must remain present.");
assert(fs.existsSync(paths.phase14eQa), "Phase 14E QA must remain present.");

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

assert(rendererSource.includes("renderControlledLowRiskTextModel"), "Phase 14A renderer must retain text-only render helper.");
assert(loaderSource.includes("renderControlledLowRiskTextOnlyPreview"), "Phase 14D loader must retain loader helper.");
assert(loader.isControlledLowRiskRendererLoaderEnabled({}) === false, "Loader must default disabled.");
assert(loader.isControlledLowRiskRendererLoaderEnabled({ [visibleFlag]: true }) === false, "Visible UI flag alone must not enable loader.");
assert(loader.isControlledLowRiskRendererLoaderEnabled({ [loaderFlag]: true }) === false, "Loader flag alone must not enable loader.");
assert(loader.isControlledLowRiskRendererLoaderEnabled({ [visibleFlag]: true, [loaderFlag]: true }) === true, "Both strict true flags must enable loader.");

[
  { label: "missing flags", config: {} },
  { label: "false flags", config: { [visibleFlag]: false, [loaderFlag]: false } },
  { label: "visible only", config: { [visibleFlag]: true, [loaderFlag]: false } },
  { label: "loader only", config: { [visibleFlag]: false, [loaderFlag]: true } }
].forEach(({ label, config }) => {
  const { doc: fakeDoc, mount } = createHiddenMount();
  const result = loader.renderControlledLowRiskTextOnlyPreview(
    safePayloads[0].model,
    config,
    { document: fakeDoc, mount, rendererApi: renderer }
  );
  assert(result.rendered === false, `${label}: loader must no-op.`);
  assert(result.reason === "disabled", `${label}: disabled reason must be returned.`);
  assertDefaultHiddenMount(mount, label);
});

safePayloads.forEach(({ label, model }) => {
  const { doc: fakeDoc, mount } = createHiddenMount();
  const result = loader.renderControlledLowRiskTextOnlyPreview(
    model,
    { [visibleFlag]: true, [loaderFlag]: true },
    { document: fakeDoc, mount, rendererApi: renderer }
  );
  assert(result.rendered === true, `${label}: loader may render allowed low-risk payload when both flags are true.`);
  assert(result.reason === "rendered", `${label}: rendered reason must be returned.`);
  assertRenderedPreviewMount(mount, label, model.title);
});

[
  { label: "missing payload", model: undefined },
  { label: "empty payload", model: {} },
  { label: "invalid allowed category payload", model: { category: "agriculture_training", title: "", summary: "Missing title." } },
  { label: "unsafe html field", model: { category: "agriculture_training", title: "Unsafe", summary: "Unsafe.", html: "<button>Do it</button>" } },
  { label: "external navigation field", model: { category: "agriculture_training", title: "Unsafe", summary: "Unsafe.", url: "https://example.com" } }
].forEach(({ label, model }) => {
  const { doc: fakeDoc, mount } = createHiddenMount();
  const result = loader.renderControlledLowRiskTextOnlyPreview(
    model,
    { [visibleFlag]: true, [loaderFlag]: true },
    { document: fakeDoc, mount, rendererApi: renderer }
  );
  assert(result.rendered === false, `${label}: invalid payload must not render.`);
  assert(result.reason === "renderer-rejected", `${label}: renderer rejection must be reported.`);
  assertDefaultHiddenMount(mount, label);
});

blockedPayloads.forEach(model => {
  const { doc: fakeDoc, mount } = createHiddenMount();
  const result = loader.renderControlledLowRiskTextOnlyPreview(
    model,
    { [visibleFlag]: true, [loaderFlag]: true },
    { document: fakeDoc, mount, rendererApi: renderer }
  );
  assert(result.rendered === false, `${model.category}: blocked/high-risk payload must not render.`);
  assert(result.reason === "renderer-rejected", `${model.category}: blocked payload must be rejected by renderer.`);
  assertDefaultHiddenMount(mount, model.category);
});

{
  const { doc: fakeDoc, mount } = createHiddenMount();
  const result = loader.renderControlledLowRiskTextOnlyPreview(
    safePayloads[0].model,
    { [visibleFlag]: true, [loaderFlag]: true },
    { document: fakeDoc, mount }
  );
  assert(result.rendered === false, "Missing renderer module/global must no-op safely.");
  assert(result.reason === "renderer-unavailable", "Missing renderer API must be reported.");
  assertDefaultHiddenMount(mount, "renderer unavailable");
}

{
  const result = loader.renderControlledLowRiskTextOnlyPreview(
    safePayloads[0].model,
    { [visibleFlag]: true, [loaderFlag]: true },
    { document: new FakeDocument(), rendererApi: renderer }
  );
  assert(result.rendered === false, "Missing mount point must no-op safely.");
  assert(result.reason === "mount-unavailable", "Missing mount must be reported.");
}

{
  const { doc: fakeDoc, mount } = createHiddenMount();
  const unsafeText = "<img src=x onerror=alert(1)><script>alert(1)</script><button>Execute</button>";
  const result = loader.renderControlledLowRiskTextOnlyPreview(
    {
      category: "agriculture_training",
      title: unsafeText,
      summary: "Preview should remain text-only, not HTML.",
      previewLines: [unsafeText],
      safetyLabel: "Preview only"
    },
    { [visibleFlag]: true, [loaderFlag]: true },
    { document: fakeDoc, mount, rendererApi: renderer }
  );
  assert(result.rendered === true, "Unsafe-looking text may render only as escaped text.");
  assert(mount.textContent.includes("<script>"), "Unsafe-looking script text must remain textContent.");
  assertNoUnsafeChildren(mount, "unsafe text payload");
}

assertNoUnsafeSource(loaderSource, "Loader");
assertNoUnsafeSource(rendererSource.replace(/addEventListener\s*\(/g, "notUsed("), "Renderer text-only helper");

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
  "Phase 14F Purpose",
  "test-controlled environment",
  "enableControlledLowRiskRendererVisibleUi === true",
  "enableControlledLowRiskRendererLoader === true",
  "Standard User build remains unwired",
  "no visible renderer card",
  "no provider handoff",
  "no permission prompts",
  "no execution"
].forEach(term => {
  assert(doc.includes(term), `Phase 14F document must mention ${term}.`);
});

assert(packageJson.scripts["qa:nexus-controlled-low-risk-text-only-renderer-phase-14f-loader-test-harness"] === "node scripts/nexus-controlled-low-risk-text-only-renderer-phase-14f-loader-test-harness-qa.js", "package.json must expose Phase 14F QA alias.");
assert(packageJson.scripts["qa:nexus-controlled-low-risk-text-only-renderer-phase-14a"], "Phase 14A QA alias must remain present.");
assert(packageJson.scripts["qa:nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary"], "Phase 14B QA alias must remain present.");
assert(packageJson.scripts["qa:nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness"], "Phase 14C QA alias must remain present.");
assert(packageJson.scripts["qa:nexus-controlled-low-risk-text-only-renderer-phase-14d-runtime-loader-stub"], "Phase 14D QA alias must remain present.");
assert(packageJson.scripts["qa:nexus-controlled-low-risk-text-only-renderer-phase-14e-import-boundary"], "Phase 14E QA alias must remain present.");

[
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14a-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14d-runtime-loader-stub-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14e-import-boundary-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14f-loader-test-harness-qa.js"
].forEach(script => {
  assert(qaSuite.includes(script), `nexus-workforce suite must include ${script}.`);
});

console.log("[nexus-controlled-low-risk-text-only-renderer-phase-14f-loader-test-harness-qa] passed");
