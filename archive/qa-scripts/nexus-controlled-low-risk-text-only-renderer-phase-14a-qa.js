const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const rendererPath = path.join(root, "public", "nexus-controlled-low-risk-text-only-renderer.js");
const docPath = path.join(root, "docs", "NEXUS_CONTROLLED_LOW_RISK_TEXT_ONLY_RENDERER_PHASE_14A.md");
const indexPath = path.join(root, "public", "index.html");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");
const packagePath = path.join(root, "package.json");
const qaSuitePath = path.join(root, "scripts", "qa-suite.js");

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-controlled-low-risk-text-only-renderer-phase-14a-qa] ${message}`);
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

  get attributes() {
    return Array.from(this.attributesMap.entries()).map(([name, value]) => ({ name, value }));
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
    const results = [];
    const selectors = selector.split(",").map(item => item.trim()).filter(Boolean);
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
  mount.id = "nexus-controlled-low-risk-renderer-root";
  mount.hidden = true;
  mount.setAttribute("aria-hidden", "true");
  mount.setAttribute("data-visible-renderer-enabled", "false");
  mount.setAttribute("data-execution-allowed", "false");
  mount.setAttribute("data-provider-handoff", "false");
  mount.setAttribute("data-permission-request", "false");
  mount.setAttribute("data-navigation-allowed", "false");
  return { doc, mount };
}

const rendererSource = read(rendererPath);
const docs = read(docPath);
const index = read(indexPath);
const app = read(appPath);
const server = read(serverPath);
const packageJson = JSON.parse(read(packagePath));
const qaSuite = read(qaSuitePath);

assert(rendererSource.includes("isControlledLowRiskRendererVisibleUiEnabled"), "Renderer helper must expose strict flag helper.");
assert(rendererSource.includes("renderControlledLowRiskTextModel"), "Renderer helper must expose text-only render helper.");
assert(rendererSource.includes("runControlledLowRiskRendererPreflight"), "Renderer helper must expose mount preflight helper.");
assert(!rendererSource.includes("innerHTML"), "Renderer helper must not use innerHTML.");
assert(!rendererSource.includes("insertAdjacentHTML"), "Renderer helper must not use insertAdjacentHTML.");
assert(!/createElement\(\s*["'](?:button|a|form|input|iframe|script|style)["']\s*\)/.test(rendererSource), "Renderer helper must not create interactive or executable elements.");
assert(!/addEventListener\s*\(/.test(rendererSource), "Renderer helper must not attach event listeners.");
assert(!/\bfetch\s*\(/.test(rendererSource), "Renderer helper must not make network calls.");
assert(!/\b(?:localStorage|sessionStorage)\b/.test(rendererSource), "Renderer helper must not use browser storage.");
assert(!/\bwindow\.open\s*\(/.test(rendererSource), "Renderer helper must not open provider or navigation windows.");

assert(index.includes('id="nexus-controlled-low-risk-renderer-root"'), "Index must retain hidden renderer mount.");
assert(!index.includes("nexus-controlled-low-risk-text-only-renderer.js"), "Standard User index must not load Phase 14A renderer helper.");
assert(!app.includes("nexus-controlled-low-risk-text-only-renderer"), "public/app.js must not wire Phase 14A renderer helper.");
assert(!server.includes("nexus-controlled-low-risk-text-only-renderer"), "server.js must not expose Phase 14A renderer helper.");

["agriculture_training", "irrigation_learning", "farm_jobs_workforce_discovery", "agritrade_marketplace_preview", "crop_issue_education_help"].forEach(term => {
  assert(rendererSource.includes(term), `Renderer source must allow ${term}.`);
  assert(docs.includes(term), `Phase 14A docs must document ${term}.`);
});
assert(docs.includes("agritade_marketplace_preview"), "Docs must call out the historical AgriTrade typo.");
assert(!rendererSource.includes("agritade_marketplace_preview"), "Renderer source must not allow misspelled AgriTrade category.");
["call", "message", "payment", "location", "camera", "health", "telehealth", "emergency", "provider_handoff"].forEach(term => {
  assert(rendererSource.includes(term), `Renderer source must block or reject ${term}.`);
});

const renderer = require(rendererPath);

[
  undefined,
  null,
  false,
  { enableControlledLowRiskRendererVisibleUi: false },
  { enableControlledLowRiskRendererVisibleUi: "true" },
  { enableControlledLowRiskRendererVisibleUi: 1 },
  { enableControlledLowRiskRendererVisibleUi: "1" },
  { enableControlledLowRiskRendererVisibleUi: "yes" },
  { enableControlledLowRiskRendererVisibleUi: "on" },
  { enableControlledLowRiskRendererVisibleUi: [] },
  { enableControlledLowRiskRendererVisibleUi: {} }
].forEach(config => {
  assert(renderer.isControlledLowRiskRendererVisibleUiEnabled(config) === false, `Flag must remain off for ${JSON.stringify(config)}.`);
});
assert(renderer.isControlledLowRiskRendererVisibleUiEnabled({ enableControlledLowRiskRendererVisibleUi: true }) === true, "Flag must enable only for strict boolean true.");

{
  const { doc, mount } = createHiddenMount();
  assert(renderer.getControlledLowRiskRendererMount(doc) === mount, "Mount lookup must return exactly one hidden mount.");
  assert(renderer.runControlledLowRiskRendererPreflight(mount, doc) === true, "Hidden empty mount must pass preflight.");
}

{
  const { doc, mount } = createHiddenMount();
  const rendered = renderer.renderControlledLowRiskTextModel(mount, {
    category: "agriculture_training",
    title: "Training preview",
    summary: "Review training options before taking any action.",
    previewLines: ["Compare available lessons.", "Open the training section manually."],
    safetyLabel: "Preview only"
  }, { enableControlledLowRiskRendererVisibleUi: true }, doc);
  assert(rendered === true, "Safe text-only model should render when strict flag is true.");
  assert(mount.hidden === false, "Rendered mount should become visible in isolated QA context.");
  assert(mount.getAttribute("data-execution-allowed") === "false", "Render must preserve no-execution marker.");
  assert(mount.getAttribute("data-provider-handoff") === "false", "Render must preserve no-provider-handoff marker.");
  assert(mount.getAttribute("data-permission-request") === "false", "Render must preserve no-permission marker.");
  assert(mount.getAttribute("data-navigation-allowed") === "false", "Render must preserve no-navigation marker.");
  assert(mount.querySelectorAll("button").length === 0, "Rendered model must not include buttons.");
  assert(mount.querySelectorAll("a").length === 0, "Rendered model must not include links.");
  assert(mount.textContent.includes("Training preview"), "Rendered model must use visible text content.");
  assert(renderer.clearControlledLowRiskRendererMount(mount) === true, "Clear helper must reset mount.");
  assert(mount.hidden === true, "Clear helper must hide mount.");
}

[
  { category: "agritade_marketplace_preview", title: "Typo", summary: "Reject typo." },
  { category: "call", title: "Call", summary: "Unsafe." },
  { category: "agriculture_training", title: "Unsafe", summary: "Unsafe.", buttons: ["Go"] },
  { category: "agriculture_training", title: "Unsafe", summary: "Unsafe.", url: "https://example.invalid" },
  { category: "agriculture_training", title: "Unsafe", summary: "Unsafe.", actionId: "training.open" },
  { category: "agriculture_training", title: "Unsafe", summary: "Unsafe.", previewLines: [{ text: "bad" }] }
].forEach(model => {
  const { doc, mount } = createHiddenMount();
  const rendered = renderer.renderControlledLowRiskTextModel(mount, model, { enableControlledLowRiskRendererVisibleUi: true }, doc);
  assert(rendered === false, `Unsafe model must render nothing: ${JSON.stringify(model)}`);
  assert(mount.hidden === true, "Unsafe model must leave mount hidden.");
  assert(mount.childNodes.length === 0, "Unsafe model must leave mount empty.");
});

{
  const { doc, mount } = createHiddenMount();
  const rendered = renderer.renderControlledLowRiskTextModel(mount, {
    category: "agriculture_training",
    title: "Training preview",
    summary: "Should remain off."
  }, { enableControlledLowRiskRendererVisibleUi: false }, doc);
  assert(rendered === false, "Flag-off render must render nothing.");
  assert(mount.hidden === true, "Flag-off mount must remain hidden.");
  assert(mount.childNodes.length === 0, "Flag-off mount must remain empty.");
}

assert(packageJson.scripts["qa:nexus-controlled-low-risk-text-only-renderer-phase-14a"] === "node scripts/nexus-controlled-low-risk-text-only-renderer-phase-14a-qa.js", "package.json must expose Phase 14A QA alias.");
assert(qaSuite.includes("scripts/nexus-controlled-low-risk-text-only-renderer-phase-14a-qa.js"), "nexus-workforce suite must include Phase 14A QA.");

console.log("[nexus-controlled-low-risk-text-only-renderer-phase-14a-qa] passed");
