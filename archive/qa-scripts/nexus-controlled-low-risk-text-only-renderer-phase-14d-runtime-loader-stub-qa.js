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
  doc: path.join(root, "docs", "NEXUS_CONTROLLED_LOW_RISK_TEXT_ONLY_RENDERER_PHASE_14D_RUNTIME_LOADER_STUB.md"),
  phase14aQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14a-qa.js"),
  phase14bQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary-qa.js"),
  phase14cQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness-qa.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-controlled-low-risk-text-only-renderer-phase-14d-runtime-loader-stub-qa] ${message}`);
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
    this.renderCalls = 0;
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

function assertNoUnsafeChildren(mount, label) {
  [
    "button",
    "a",
    "form",
    "input",
    "iframe",
    "script",
    "[onclick]",
    "[href]",
    "[tabindex]"
  ].forEach(selector => {
    assert(mount.querySelectorAll(selector).length === 0, `${label}: loader must not create ${selector}.`);
  });
}

assert(fs.existsSync(paths.renderer), "Phase 14A renderer file must exist.");
assert(fs.existsSync(paths.loader), "Phase 14D loader file must exist.");
assert(fs.existsSync(paths.doc), "Phase 14D document must exist.");
assert(fs.existsSync(paths.phase14aQa), "Phase 14A QA must remain present.");
assert(fs.existsSync(paths.phase14bQa), "Phase 14B QA must remain present.");
assert(fs.existsSync(paths.phase14cQa), "Phase 14C QA must remain present.");

const rendererSource = read(paths.renderer);
const loaderSource = read(paths.loader);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const doc = read(paths.doc);
const packageJson = JSON.parse(read(paths.package));
const qaSuite = read(paths.qaSuite);
const loader = require(paths.loader);

assert(rendererSource.includes("renderControlledLowRiskTextModel"), "Phase 14A renderer must retain text-only render helper.");
assert(loaderSource.includes(visibleFlag), "Loader must require visible UI flag.");
assert(loaderSource.includes(loaderFlag), "Loader must require explicit loader flag.");
assert(loaderSource.includes("module.exports"), "Loader must remain directly QA-callable.");
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
  let calls = 0;
  const rendererApi = {
    renderControlledLowRiskTextModel() {
      calls += 1;
      throw new Error("disabled loader must not call renderer");
    }
  };
  const result = loader.renderControlledLowRiskTextOnlyPreview(
    { category: "agriculture_training", title: "Training", summary: "Preview." },
    config,
    { document: fakeDoc, mount, rendererApi }
  );
  assert(result.rendered === false, `${label}: loader must no-op.`);
  assert(result.reason === "disabled", `${label}: disabled reason must be returned.`);
  assert(calls === 0, `${label}: renderer API must not be called.`);
  assertDefaultHiddenMount(mount, label);
});

{
  const { doc: fakeDoc, mount } = createHiddenMount();
  const result = loader.renderControlledLowRiskTextOnlyPreview(
    { category: "agriculture_training", title: "Training", summary: "Preview." },
    { [visibleFlag]: true, [loaderFlag]: true },
    { document: fakeDoc, mount }
  );
  assert(result.rendered === false, "Enabled loader must no-op when renderer API is unavailable.");
  assert(result.reason === "renderer-unavailable", "Missing renderer API must be reported.");
  assertDefaultHiddenMount(mount, "renderer unavailable");
}

{
  const result = loader.renderControlledLowRiskTextOnlyPreview(
    { category: "agriculture_training", title: "Training", summary: "Preview." },
    { [visibleFlag]: true, [loaderFlag]: true },
    {
      document: new FakeDocument(),
      rendererApi: {
        renderControlledLowRiskTextModel() {
          throw new Error("missing mount must not call renderer");
        }
      }
    }
  );
  assert(result.rendered === false, "Enabled loader must no-op when mount is unavailable.");
  assert(result.reason === "mount-unavailable", "Missing mount must be reported.");
}

{
  const { doc: fakeDoc, mount } = createHiddenMount();
  let calls = 0;
  const rendererApi = {
    renderControlledLowRiskTextModel(targetMount, model, config, rootDocument) {
      calls += 1;
      assert(targetMount === mount, "Loader must pass the controlled mount to renderer.");
      assert(rootDocument === fakeDoc, "Loader must pass the controlled document to renderer.");
      assert(config[visibleFlag] === true && config[loaderFlag] === true, "Loader must pass strict enabled config.");
      targetMount.renderCalls += 1;
      return false;
    }
  };
  const result = loader.renderControlledLowRiskTextOnlyPreview(
    { category: "agriculture_training", title: "Training", summary: "Preview." },
    { [visibleFlag]: true, [loaderFlag]: true },
    { document: fakeDoc, mount, rendererApi }
  );
  assert(result.rendered === false, "Renderer rejection must stay non-rendered.");
  assert(result.reason === "renderer-rejected", "Renderer rejection must be reported.");
  assert(calls === 1, "Enabled controlled harness may call injected renderer API once.");
  assertDefaultHiddenMount(mount, "renderer rejected");
}

{
  const { doc: fakeDoc, mount } = createHiddenMount();
  const rendererApi = {
    renderControlledLowRiskTextModel(targetMount) {
      targetMount.textContent = "Safe preview text";
      targetMount.hidden = false;
      targetMount.setAttribute("aria-hidden", "false");
      targetMount.setAttribute("data-visible-renderer-enabled", "true");
      targetMount.setAttribute("data-execution-allowed", "false");
      targetMount.setAttribute("data-provider-handoff", "false");
      targetMount.setAttribute("data-permission-request", "false");
      targetMount.setAttribute("data-navigation-allowed", "false");
      return true;
    }
  };
  const result = loader.renderControlledLowRiskTextOnlyPreview(
    { category: "agriculture_training", title: "Training", summary: "Preview." },
    { [visibleFlag]: true, [loaderFlag]: true },
    { document: fakeDoc, mount, rendererApi }
  );
  assert(result.rendered === true, "Enabled controlled harness may render through injected renderer API.");
  assert(result.reason === "rendered", "Rendered result must be reported.");
  assert(mount.getAttribute("data-execution-allowed") === "false", "Rendered output must remain non-executing.");
  assert(mount.getAttribute("data-provider-handoff") === "false", "Rendered output must not enable provider handoff.");
  assert(mount.getAttribute("data-permission-request") === "false", "Rendered output must not request permission.");
  assert(mount.getAttribute("data-navigation-allowed") === "false", "Rendered output must not allow navigation.");
  assertNoUnsafeChildren(mount, "enabled controlled harness");
}

assert(!/<script[^>]+src=["'][^"']*nexus-controlled-low-risk-text-only-renderer-loader\.js["']/i.test(index), "public/index.html must not load loader with a script tag.");
assert(!/<script[^>]+src=["'][^"']*nexus-controlled-low-risk-text-only-renderer\.js["']/i.test(index), "public/index.html must not load renderer with a script tag.");
assert(!index.includes(loaderFileName), "public/index.html must not reference Phase 14D loader file.");
assert(!app.includes(loaderFileName), "public/app.js must not reference Phase 14D loader file.");
assert(!server.includes(loaderFileName), "server.js must not inject Phase 14D loader file.");
assert(!index.includes(loaderFlag), "public/index.html must not expose loader flag.");
assert(!app.includes(loaderFlag), "public/app.js must not consume loader flag.");
assert(!server.includes(loaderFlag), "server.js must not expose loader flag.");
assert(!index.includes("NexusControlledLowRiskTextOnlyRendererLoader"), "public/index.html must not reference loader global.");
assert(!app.includes("NexusControlledLowRiskTextOnlyRendererLoader"), "public/app.js must not reference loader global.");
assert(!server.includes("NexusControlledLowRiskTextOnlyRendererLoader"), "server.js must not reference loader global.");
assert(!app.includes("renderControlledLowRiskTextOnlyPreview"), "public/app.js must not render through loader.");
assert(!server.includes("renderControlledLowRiskTextOnlyPreview"), "server.js must not render through loader.");

const forbiddenRuntimePatterns = [
  { pattern: /\bfetch\s*\(/, message: "fetch/network behavior" },
  { pattern: /\b(?:localStorage|sessionStorage)\b/, message: "storage behavior" },
  { pattern: /addEventListener\s*\(/, message: "event handlers" },
  { pattern: /\bwindow\.open\s*\(/, message: "provider/window handoff" },
  { pattern: /\blocation\.(?:href|assign|replace)\b/, message: "navigation behavior" },
  { pattern: /createElement\(\s*["'](?:button|a|form|input|iframe|script|style)["']\s*\)/, message: "unsafe element creation" },
  { pattern: /\binnerHTML\b/, message: "unsafe HTML writes" },
  { pattern: /insertAdjacentHTML\s*\(/, message: "unsafe adjacent HTML writes" }
];
forbiddenRuntimePatterns.forEach(({ pattern, message }) => {
  assert(!pattern.test(loaderSource), `Loader must not contain ${message}.`);
});

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
  "Phase 14D purpose",
  "default-off",
  "enableControlledLowRiskRendererVisibleUi === true",
  "enableControlledLowRiskRendererLoader === true",
  "no autonomous execution was enabled",
  "no visible renderer UI",
  "no provider handoff",
  "no permission prompts",
  "no execution"
].forEach(term => {
  assert(doc.includes(term), `Phase 14D document must mention ${term}.`);
});

assert(packageJson.scripts["qa:nexus-controlled-low-risk-text-only-renderer-phase-14d-runtime-loader-stub"] === "node scripts/nexus-controlled-low-risk-text-only-renderer-phase-14d-runtime-loader-stub-qa.js", "package.json must expose Phase 14D QA alias.");
assert(packageJson.scripts["qa:nexus-controlled-low-risk-text-only-renderer-phase-14a"], "Phase 14A QA alias must remain present.");
assert(packageJson.scripts["qa:nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary"], "Phase 14B QA alias must remain present.");
assert(packageJson.scripts["qa:nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness"], "Phase 14C QA alias must remain present.");
assert(qaSuite.includes("scripts/nexus-controlled-low-risk-text-only-renderer-phase-14d-runtime-loader-stub-qa.js"), "nexus-workforce suite must include Phase 14D QA.");
assert(qaSuite.includes("scripts/nexus-controlled-low-risk-text-only-renderer-phase-14a-qa.js"), "nexus-workforce suite must retain Phase 14A QA.");
assert(qaSuite.includes("scripts/nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary-qa.js"), "nexus-workforce suite must retain Phase 14B QA.");
assert(qaSuite.includes("scripts/nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness-qa.js"), "nexus-workforce suite must retain Phase 14C QA.");

console.log("[nexus-controlled-low-risk-text-only-renderer-phase-14d-runtime-loader-stub-qa] passed");
