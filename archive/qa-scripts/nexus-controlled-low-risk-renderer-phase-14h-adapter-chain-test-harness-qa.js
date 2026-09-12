const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const adapterFileName = "nexus-controlled-low-risk-renderer-eligibility-adapter.js";
const rendererFileName = "nexus-controlled-low-risk-text-only-renderer.js";
const loaderFileName = "nexus-controlled-low-risk-text-only-renderer-loader.js";
const mountId = "nexus-controlled-low-risk-renderer-root";
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
  doc: path.join(root, "docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_PHASE_14H_ADAPTER_CHAIN_TEST_HARNESS.md"),
  phase14aQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14a-qa.js"),
  phase14bQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary-qa.js"),
  phase14cQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness-qa.js"),
  phase14dQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14d-runtime-loader-stub-qa.js"),
  phase14eQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14e-import-boundary-qa.js"),
  phase14fQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14f-loader-test-harness-qa.js"),
  phase14gQa: path.join(root, "scripts", "nexus-controlled-low-risk-renderer-phase-14g-eligibility-adapter-stub-qa.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-controlled-low-risk-renderer-phase-14h-adapter-chain-test-harness-qa] ${message}`);
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

function assertRenderedMount(mount, label, expectedText) {
  assert(mount.hidden === false, `${label}: mount may reveal only in harness.`);
  assert(mount.getAttribute("aria-hidden") === "false", `${label}: aria-hidden may become false only in harness.`);
  assert(mount.getAttribute("data-visible-renderer-enabled") === "true", `${label}: visible flag may become true only in harness.`);
  assert(mount.getAttribute("data-execution-allowed") === "false", `${label}: execution remains false.`);
  assert(mount.getAttribute("data-provider-handoff") === "false", `${label}: provider handoff remains false.`);
  assert(mount.getAttribute("data-permission-request") === "false", `${label}: permission request remains false.`);
  assert(mount.getAttribute("data-navigation-allowed") === "false", `${label}: navigation remains false.`);
  assert(mount.textContent.includes(expectedText), `${label}: rendered text must include expected preview text.`);
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
    assert(mount.querySelectorAll(selector).length === 0, `${label}: chain must not create ${selector}.`);
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
    "NexusControlledLowRiskRendererEligibilityAdapter",
    "buildControlledLowRiskRendererPayload",
    "NexusControlledLowRiskTextOnlyRenderer",
    "NexusControlledLowRiskTextOnlyRendererLoader",
    "renderControlledLowRiskTextModel",
    "renderControlledLowRiskTextOnlyPreview",
    adapterFlag,
    visibleFlag,
    loaderFlag
  ].forEach(symbol => {
    assert(!source.includes(symbol), `${label} must not reference ${symbol}.`);
  });
}

function buildCandidate(overrides) {
  return {
    [adapterFlag]: true,
    previewOnly: true,
    riskTier: "low",
    category: "agriculture_training",
    title: "Agriculture training preview",
    summary: "Review safe training options before choosing a next step.",
    ...overrides
  };
}

function runChain(candidate, flags, options = {}) {
  const { doc, mount } = options.mount === false ? { doc: new FakeDocument(), mount: null } : createHiddenMount();
  const payload = adapter.buildControlledLowRiskRendererPayload(candidate);
  const result = loader.renderControlledLowRiskTextOnlyPreview(
    payload,
    flags,
    {
      document: doc,
      mount,
      rendererApi: options.renderer === false ? null : renderer
    }
  );
  return { payload, result, mount };
}

assert(fs.existsSync(paths.adapter), "Phase 14G adapter file must exist.");
assert(fs.existsSync(paths.renderer), "Phase 14A renderer file must exist.");
assert(fs.existsSync(paths.loader), "Phase 14D loader file must exist.");
assert(fs.existsSync(paths.doc), "Phase 14H document must exist.");
assert(fs.existsSync(paths.phase14aQa), "Phase 14A QA must remain present.");
assert(fs.existsSync(paths.phase14bQa), "Phase 14B QA must remain present.");
assert(fs.existsSync(paths.phase14cQa), "Phase 14C QA must remain present.");
assert(fs.existsSync(paths.phase14dQa), "Phase 14D QA must remain present.");
assert(fs.existsSync(paths.phase14eQa), "Phase 14E QA must remain present.");
assert(fs.existsSync(paths.phase14fQa), "Phase 14F QA must remain present.");
assert(fs.existsSync(paths.phase14gQa), "Phase 14G QA must remain present.");

const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const doc = read(paths.doc);
const packageJson = JSON.parse(read(paths.package));
const qaSuite = read(paths.qaSuite);
const adapter = require(paths.adapter);
const loader = require(paths.loader);
const renderer = require(paths.renderer);

assert(adapter.buildControlledLowRiskRendererPayload, "Adapter payload builder must be available.");
assert(loader.renderControlledLowRiskTextOnlyPreview, "Loader preview helper must be available.");
assert(renderer.renderControlledLowRiskTextModel, "Renderer text-only helper must be available.");

{
  const { payload, result, mount } = runChain(buildCandidate({ [adapterFlag]: false }), {});
  assert(payload === null, "All flags missing/false: adapter must return null.");
  assert(result.rendered === false && result.reason === "disabled", "All flags missing/false: loader must no-op.");
  assertDefaultHiddenMount(mount, "all flags missing/false");
}

{
  const { payload, result, mount } = runChain(buildCandidate(), { [adapterFlag]: true });
  assert(payload && payload.category === "agriculture_training", "Adapter flag only: adapter may build safe payload.");
  assert(result.rendered === false && result.reason === "disabled", "Adapter flag only: loader must no-op.");
  assertDefaultHiddenMount(mount, "adapter flag only");
}

{
  const { payload, result, mount } = runChain(buildCandidate(), {
    [adapterFlag]: true,
    [visibleFlag]: true,
    [loaderFlag]: false
  });
  assert(payload && payload.category === "agriculture_training", "Adapter plus visible flag: adapter may build safe payload.");
  assert(result.rendered === false && result.reason === "disabled", "Adapter plus visible flag: loader must no-op without loader flag.");
  assertDefaultHiddenMount(mount, "adapter plus visible flag");
}

{
  const { payload, result, mount } = runChain(buildCandidate({ [adapterFlag]: false }), {
    [visibleFlag]: true,
    [loaderFlag]: true
  });
  assert(payload === null, "Visible plus loader flags without adapter flag: adapter must return null.");
  assert(result.rendered === false && result.reason === "renderer-rejected", "Visible plus loader flags without adapter payload: loader must not render null.");
  assertDefaultHiddenMount(mount, "visible plus loader flags only");
}

[
  { label: "agriculture training", candidate: buildCandidate({ category: "agriculture_training", title: "Agriculture training preview" }), expected: "Agriculture training preview" },
  { label: "irrigation learning", candidate: buildCandidate({ category: "irrigation learning", title: "Irrigation learning preview" }), expected: "Irrigation learning preview" },
  { label: "farm jobs/workforce", candidate: buildCandidate({ selectedToolId: "workforce.job_pathways", title: "Farm jobs preview" }), expected: "Farm jobs preview" },
  { label: "AgriTrade browse-only", candidate: buildCandidate({ selectedToolId: "marketplace.agritrade", title: "AgriTrade browse-only preview" }), expected: "AgriTrade browse-only preview" },
  { label: "crop issue educational help", candidate: buildCandidate({ selectedToolId: "agriculture.help", title: "Crop issue educational help preview" }), expected: "Crop issue educational help preview" }
].forEach(({ label, candidate, expected }) => {
  const { payload, result, mount } = runChain(candidate, {
    [adapterFlag]: true,
    [visibleFlag]: true,
    [loaderFlag]: true
  });
  assert(payload && payload.previewOnly === true && payload.riskTier === "low", `${label}: adapter must return preview-only low-risk payload.`);
  assert(result.rendered === true && result.reason === "rendered", `${label}: full chain may render in isolated harness.`);
  assertRenderedMount(mount, label, expected);
});

[
  "call someone",
  "send WhatsApp",
  "send Telegram",
  "send SMS",
  "show location",
  "open camera",
  "buy seeds",
  "sell produce",
  "pay buyer",
  "schedule appointment",
  "emergency help",
  "medical telehealth action",
  "provider handoff",
  "account login",
  "contact lookup",
  "external navigation",
  "URL opening",
  "execution action completion"
].forEach(category => {
  const { payload, result, mount } = runChain(buildCandidate({
    category,
    title: `${category} request`,
    summary: "This must not render."
  }), {
    [adapterFlag]: true,
    [visibleFlag]: true,
    [loaderFlag]: true
  });
  assert(payload === null, `${category}: adapter must reject excluded/high-risk candidate.`);
  assert(result.rendered === false && result.reason === "renderer-rejected", `${category}: loader must not render rejected payload.`);
  assertDefaultHiddenMount(mount, category);
});

[
  undefined,
  null,
  {},
  { [adapterFlag]: true },
  buildCandidate({ previewOnly: false }),
  buildCandidate({ riskTier: "medium" }),
  buildCandidate({ url: "https://example.com" })
].forEach((candidate, indexNumber) => {
  const { payload, result, mount } = runChain(candidate, {
    [adapterFlag]: true,
    [visibleFlag]: true,
    [loaderFlag]: true
  });
  assert(payload === null, `Invalid candidate ${indexNumber}: adapter must return null.`);
  assert(result.rendered === false, `Invalid candidate ${indexNumber}: loader must not render.`);
  assertDefaultHiddenMount(mount, `invalid candidate ${indexNumber}`);
});

{
  const { payload, result, mount } = runChain(buildCandidate(), {
    [adapterFlag]: true,
    [visibleFlag]: true,
    [loaderFlag]: true
  }, { renderer: false });
  assert(payload && payload.category === "agriculture_training", "Missing renderer: adapter may still build safe payload.");
  assert(result.rendered === false && result.reason === "renderer-unavailable", "Missing renderer: loader must no-op safely.");
  assertDefaultHiddenMount(mount, "missing renderer");
}

{
  const { payload, result } = runChain(buildCandidate(), {
    [adapterFlag]: true,
    [visibleFlag]: true,
    [loaderFlag]: true
  }, { mount: false });
  assert(payload && payload.category === "agriculture_training", "Missing mount: adapter may still build safe payload.");
  assert(result.rendered === false && result.reason === "mount-unavailable", "Missing mount: loader must no-op safely.");
}

{
  const { payload, result, mount } = runChain(buildCandidate({
    title: "<script>alert(1)</script><img src=x onerror=alert(1)>javascript:alert(1)",
    summary: "<b>raw HTML</b> must stay plain text"
  }), {
    [adapterFlag]: true,
    [visibleFlag]: true,
    [loaderFlag]: true
  });
  assert(payload.title.includes("&lt;script&gt;"), "Unsafe text must be escaped by adapter.");
  assert(payload.summary.includes("&lt;b&gt;"), "Raw HTML summary must be escaped by adapter.");
  assert(result.rendered === true, "Escaped unsafe-looking text may render as inert text.");
  assert(mount.textContent.includes("&lt;script&gt;"), "Rendered output must contain escaped script text, not executable HTML.");
  assertNoUnsafeChildren(mount, "unsafe text chain");
}

assertNoRuntimeLoad(index, "public/index.html", adapterFileName);
assertNoRuntimeLoad(index, "public/index.html", rendererFileName);
assertNoRuntimeLoad(index, "public/index.html", loaderFileName);
assertNoRuntimeLoad(app, "public/app.js", adapterFileName);
assertNoRuntimeLoad(app, "public/app.js", rendererFileName);
assertNoRuntimeLoad(app, "public/app.js", loaderFileName);
assertNoRuntimeLoad(server, "server.js", adapterFileName);
assertNoRuntimeLoad(server, "server.js", rendererFileName);
assertNoRuntimeLoad(server, "server.js", loaderFileName);
assertNoRuntimeSymbols(index, "public/index.html");
assertNoRuntimeSymbols(app, "public/app.js");
assertNoRuntimeSymbols(server, "server.js");

[
  "Phase 14H Purpose",
  "low-risk candidate metadata",
  "eligibility adapter",
  "runtime loader stub",
  "text-only renderer",
  "enableControlledLowRiskRendererEligibilityAdapter === true",
  "enableControlledLowRiskRendererVisibleUi === true",
  "enableControlledLowRiskRendererLoader === true",
  "Standard User build remains unwired",
  "no provider handoff",
  "no permission prompts",
  "no execution behavior"
].forEach(term => {
  assert(doc.includes(term), `Phase 14H document must mention ${term}.`);
});

assert(packageJson.scripts["qa:nexus-controlled-low-risk-renderer-phase-14h-adapter-chain-test-harness"] === "node scripts/nexus-controlled-low-risk-renderer-phase-14h-adapter-chain-test-harness-qa.js", "package.json must expose Phase 14H QA alias.");

[
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14a-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14d-runtime-loader-stub-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14e-import-boundary-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14f-loader-test-harness-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-phase-14g-eligibility-adapter-stub-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-phase-14h-adapter-chain-test-harness-qa.js"
].forEach(script => {
  assert(qaSuite.includes(script), `nexus-workforce suite must include ${script}.`);
});

console.log("[nexus-controlled-low-risk-renderer-phase-14h-adapter-chain-test-harness-qa] passed");
