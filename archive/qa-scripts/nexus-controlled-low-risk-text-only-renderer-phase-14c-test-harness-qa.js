const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const rendererPath = path.join(root, "public", "nexus-controlled-low-risk-text-only-renderer.js");
const docPath = path.join(root, "docs", "NEXUS_CONTROLLED_LOW_RISK_TEXT_ONLY_RENDERER_PHASE_14C_TEST_HARNESS.md");
const indexPath = path.join(root, "public", "index.html");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");
const packagePath = path.join(root, "package.json");
const qaSuitePath = path.join(root, "scripts", "qa-suite.js");

const rendererFileName = "nexus-controlled-low-risk-text-only-renderer.js";
const mountId = "nexus-controlled-low-risk-renderer-root";
const flagName = "enableControlledLowRiskRendererVisibleUi";

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness-qa] ${message}`);
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

function assertMountDefaultOff(mount, label) {
  assert(mount.hidden === true, `${label}: mount must remain hidden.`);
  assert(mount.getAttribute("aria-hidden") === "true", `${label}: aria-hidden must remain true.`);
  assert(mount.getAttribute("data-visible-renderer-enabled") === "false", `${label}: visible marker must remain false.`);
  assert(mount.getAttribute("data-execution-allowed") === "false", `${label}: execution marker must remain false.`);
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
    assert(mount.querySelectorAll(selector).length === 0, `${label}: renderer must not create ${selector}.`);
  });
}

const rendererSource = read(rendererPath);
const doc = read(docPath);
const index = read(indexPath);
const app = read(appPath);
const server = read(serverPath);
const packageJson = JSON.parse(read(packagePath));
const qaSuite = read(qaSuitePath);
const renderer = require(rendererPath);

assert(fs.existsSync(rendererPath), "Phase 14A renderer file must exist.");
assert(fs.existsSync(docPath), "Phase 14C harness document must exist.");
assert(!index.includes(rendererFileName), "public/index.html must not load the renderer file.");
assert(!app.includes(rendererFileName), "public/app.js must not reference the renderer file.");
assert(!server.includes(rendererFileName), "server.js must not reference the renderer file.");
assert(!app.includes(flagName), "public/app.js must not consume the visible renderer flag.");
assert(!server.includes(flagName), "server.js must not expose the visible renderer flag.");
assert(!index.includes(flagName), "public/index.html must not expose the visible renderer flag.");
assert(!/import\s*\([^)]*nexus-controlled-low-risk-text-only-renderer/i.test(app), "public/app.js must not dynamically import the renderer.");
assert(!/require\s*\([^)]*nexus-controlled-low-risk-text-only-renderer/i.test(app), "public/app.js must not require the renderer.");
assert(!/<script[^>]+nexus-controlled-low-risk-text-only-renderer\.js/i.test(index), "public/index.html must not script-load the renderer.");
assert(!/\bfetch\s*\(/.test(rendererSource), "Renderer source must not use fetch.");
assert(!/\b(?:localStorage|sessionStorage)\b/.test(rendererSource), "Renderer source must not use storage.");
assert(!/addEventListener\s*\(/.test(rendererSource), "Renderer source must not add event handlers.");
assert(!/createElement\(\s*["'](?:button|a|form|input|iframe|script|style)["']\s*\)/.test(rendererSource), "Renderer source must not create unsafe elements.");
assert(!rendererSource.includes("innerHTML"), "Renderer source must not use innerHTML.");
assert(!rendererSource.includes("insertAdjacentHTML"), "Renderer source must not use insertAdjacentHTML.");

[
  "isolated test harness",
  "renderer remains unloaded",
  "enableControlledLowRiskRendererVisibleUi === true",
  "Unsafe text payloads",
  "no Standard User renderer activation"
].forEach(term => {
  assert(doc.includes(term), `Phase 14C document must mention ${term}.`);
});

const allowedModels = [
  {
    category: "agriculture_training",
    title: "Agriculture training preview",
    summary: "Review safe training options before taking action.",
    previewLines: ["Compare lessons.", "Open training manually."],
    safetyLabel: "Preview only"
  },
  {
    category: "irrigation_learning",
    title: "Irrigation learning preview",
    summary: "Learn irrigation concepts with no equipment control.",
    previewLines: ["Review water scheduling basics."],
    safetyLabel: "Learning"
  },
  {
    category: "farm_jobs_workforce_discovery",
    title: "Farm jobs preview",
    summary: "Review workforce pathways without submitting an application.",
    previewLines: ["Compare job readiness steps."],
    safetyLabel: "Review only"
  },
  {
    category: "agritrade_marketplace_preview",
    title: "AgriTrade browse-only preview",
    summary: "Browse marketplace guidance without buying, selling, or paying.",
    previewLines: ["Review seller questions."],
    safetyLabel: "Browse only"
  },
  {
    category: "crop_issue_education_help",
    title: "Crop issue education preview",
    summary: "Read crop support guidance without diagnosis or dispatch.",
    previewLines: ["Check symptoms and consider local expert support."],
    safetyLabel: "Education only"
  }
];

allowedModels.forEach(model => {
  const { doc: fakeDoc, mount } = createHiddenMount();
  assert(renderer.renderControlledLowRiskTextModel(mount, model, {}, fakeDoc) === false, `${model.category}: missing flag must not render.`);
  assertMountDefaultOff(mount, `${model.category} missing flag`);

  const disabled = createHiddenMount();
  assert(renderer.renderControlledLowRiskTextModel(disabled.mount, model, { [flagName]: false }, disabled.doc) === false, `${model.category}: false flag must not render.`);
  assertMountDefaultOff(disabled.mount, `${model.category} false flag`);

  const enabled = createHiddenMount();
  assert(renderer.renderControlledLowRiskTextModel(enabled.mount, model, { [flagName]: true }, enabled.doc) === true, `${model.category}: strict true flag should render in isolated harness.`);
  assert(enabled.mount.hidden === false, `${model.category}: enabled harness may reveal simulated mount.`);
  assert(enabled.mount.getAttribute("aria-hidden") === "false", `${model.category}: enabled harness may set aria-hidden false.`);
  assert(enabled.mount.getAttribute("data-visible-renderer-enabled") === "true", `${model.category}: enabled harness may mark visible renderer true.`);
  assert(enabled.mount.getAttribute("data-execution-allowed") === "false", `${model.category}: render must preserve no execution.`);
  assert(enabled.mount.getAttribute("data-provider-handoff") === "false", `${model.category}: render must preserve no provider handoff.`);
  assert(enabled.mount.getAttribute("data-permission-request") === "false", `${model.category}: render must preserve no permission request.`);
  assert(enabled.mount.getAttribute("data-navigation-allowed") === "false", `${model.category}: render must preserve no navigation.`);
  assert(enabled.mount.textContent.includes(model.title), `${model.category}: rendered output must contain safe title text.`);
  assert(enabled.mount.textContent.includes(model.summary), `${model.category}: rendered output must contain safe summary text.`);
  assertNoUnsafeChildren(enabled.mount, model.category);
});

{
  const { doc: fakeDoc, mount } = createHiddenMount();
  const model = {
    category: "agriculture_training",
    title: "<img src=x onerror=alert(1)>",
    summary: "<script>alert(1)</script>",
    previewLines: ["<button onclick=alert(1)>Do it</button>"],
    safetyLabel: "<b>Preview</b>"
  };
  assert(renderer.renderControlledLowRiskTextModel(mount, model, { [flagName]: true }, fakeDoc) === true, "HTML-looking safe text payload should render as text.");
  assert(mount.textContent.includes("<script>alert(1)</script>"), "Unsafe-looking script text must remain text content.");
  assert(mount.querySelectorAll("script").length === 0, "Unsafe script text must not become a script element.");
  assert(mount.querySelectorAll("button").length === 0, "Unsafe button text must not become a button element.");
  assert(mount.querySelectorAll("[onclick]").length === 0, "Unsafe onclick text must not become an event handler.");
}

[
  { category: "call", title: "Call someone", summary: "Call John." },
  { category: "message", title: "Send WhatsApp", summary: "Message Maria." },
  { category: "location", title: "Show location", summary: "Find me." },
  { category: "camera", title: "Open camera", summary: "Use camera." },
  { category: "marketplace_transaction", title: "Buy seeds", summary: "Buy now." },
  { category: "payment", title: "Make payment", summary: "Pay seller." },
  { category: "health", title: "Medical action", summary: "Diagnose me." },
  { category: "telehealth", title: "Telehealth", summary: "Start call." },
  { category: "emergency", title: "Emergency help", summary: "Dispatch." },
  { category: "provider_handoff", title: "Provider", summary: "Open provider." },
  { category: "account", title: "Account login", summary: "Log in." },
  { category: "agriculture_training", title: "Unsafe", summary: "Has url.", url: "https://example.invalid" },
  { category: "agriculture_training", title: "Unsafe", summary: "Has action.", actionId: "training.open" },
  null,
  {},
  [],
  "not a model"
].forEach((model, indexNumber) => {
  const { doc: fakeDoc, mount } = createHiddenMount();
  assert(renderer.renderControlledLowRiskTextModel(mount, model, { [flagName]: true }, fakeDoc) === false, `Excluded/invalid model ${indexNumber} must not render.`);
  assertMountDefaultOff(mount, `excluded/invalid model ${indexNumber}`);
});

assert(packageJson.scripts["qa:nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness"] === "node scripts/nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness-qa.js", "package.json must expose Phase 14C QA alias.");
assert(packageJson.scripts["qa:nexus-controlled-low-risk-text-only-renderer-phase-14a"], "Phase 14A QA alias must remain present.");
assert(packageJson.scripts["qa:nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary"], "Phase 14B QA alias must remain present.");
assert(qaSuite.includes("scripts/nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness-qa.js"), "nexus-workforce suite must include Phase 14C harness QA.");
assert(qaSuite.includes("scripts/nexus-controlled-low-risk-text-only-renderer-phase-14a-qa.js"), "nexus-workforce suite must retain Phase 14A QA.");
assert(qaSuite.includes("scripts/nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary-qa.js"), "nexus-workforce suite must retain Phase 14B QA.");

console.log("[nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness-qa] passed");
