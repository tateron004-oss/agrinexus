const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const contractFileName = "nexus-controlled-low-risk-renderer-candidate-contract.js";
const adapterFileName = "nexus-controlled-low-risk-renderer-eligibility-adapter.js";
const loaderFileName = "nexus-controlled-low-risk-text-only-renderer-loader.js";
const rendererFileName = "nexus-controlled-low-risk-text-only-renderer.js";
const mountId = "nexus-controlled-low-risk-renderer-root";
const adapterFlag = "enableControlledLowRiskRendererEligibilityAdapter";
const visibleFlag = "enableControlledLowRiskRendererVisibleUi";
const loaderFlag = "enableControlledLowRiskRendererLoader";
const qaScriptName = "nexus-controlled-low-risk-renderer-phase-14k-candidate-contract-chain-harness-qa.js";
const qaAlias = "qa:nexus-controlled-low-risk-renderer-phase-14k-candidate-contract-chain-harness";

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
  doc: path.join(root, "docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_PHASE_14K_CANDIDATE_CONTRACT_CHAIN_HARNESS.md"),
  phase14aQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14a-qa.js"),
  phase14bQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary-qa.js"),
  phase14cQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness-qa.js"),
  phase14dQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14d-runtime-loader-stub-qa.js"),
  phase14eQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14e-import-boundary-qa.js"),
  phase14fQa: path.join(root, "scripts", "nexus-controlled-low-risk-text-only-renderer-phase-14f-loader-test-harness-qa.js"),
  phase14gQa: path.join(root, "scripts", "nexus-controlled-low-risk-renderer-phase-14g-eligibility-adapter-stub-qa.js"),
  phase14hQa: path.join(root, "scripts", "nexus-controlled-low-risk-renderer-phase-14h-adapter-chain-test-harness-qa.js"),
  phase14iQa: path.join(root, "scripts", "nexus-controlled-low-risk-renderer-phase-14i-eligibility-candidate-source-audit-qa.js"),
  phase14jQa: path.join(root, "scripts", "nexus-controlled-low-risk-renderer-phase-14j-candidate-payload-contract-qa.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-controlled-low-risk-renderer-phase-14k-candidate-contract-chain-harness-qa] ${message}`);
    process.exit(1);
  }
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function assertExists(filePath, label) {
  assert(fs.existsSync(filePath), `${label} must exist.`);
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
  assert(mount, `${label}: mount must exist.`);
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
  assert(mount.hidden === false, `${label}: harness may reveal mount only with all flags true.`);
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
    adapterFlag,
    visibleFlag,
    loaderFlag
  ].forEach(symbol => {
    assert(!source.includes(symbol), `${label} must not reference ${symbol}.`);
  });
}

function makeRawCandidate(overrides = {}) {
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

function normalizeForAdapter(normalized, adapterEnabled) {
  if (!normalized) return null;
  return {
    ...normalized,
    [adapterFlag]: adapterEnabled === true
  };
}

function runContractChain(rawCandidate, flags = {}, options = {}) {
  const { doc, mount } = options.mount === false ? { doc: new FakeDocument(), mount: null } : createHiddenMount();
  const normalized = contract.normalizeControlledLowRiskRendererCandidate(rawCandidate);
  const adapterCandidate = normalizeForAdapter(normalized, flags[adapterFlag]);
  const payload = adapter.buildControlledLowRiskRendererPayload(adapterCandidate);
  const result = loader.renderControlledLowRiskTextOnlyPreview(
    payload,
    flags,
    {
      document: doc,
      mount,
      rendererApi: options.renderer === false ? null : renderer
    }
  );
  return { normalized, adapterCandidate, payload, result, mount };
}

[
  ["Candidate contract", paths.contract],
  ["Phase 14G adapter", paths.adapter],
  ["Phase 14D loader", paths.loader],
  ["Phase 14A renderer", paths.renderer],
  ["Phase 14K doc", paths.doc],
  ["Phase 14A QA", paths.phase14aQa],
  ["Phase 14B QA", paths.phase14bQa],
  ["Phase 14C QA", paths.phase14cQa],
  ["Phase 14D QA", paths.phase14dQa],
  ["Phase 14E QA", paths.phase14eQa],
  ["Phase 14F QA", paths.phase14fQa],
  ["Phase 14G QA", paths.phase14gQa],
  ["Phase 14H QA", paths.phase14hQa],
  ["Phase 14I QA", paths.phase14iQa],
  ["Phase 14J QA", paths.phase14jQa]
].forEach(([label, filePath]) => assertExists(filePath, label));

const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const doc = read(paths.doc);
const packageJson = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);
const contract = require(paths.contract);
const adapter = require(paths.adapter);
const loader = require(paths.loader);
const renderer = require(paths.renderer);

assert(contract.normalizeControlledLowRiskRendererCandidate, "Candidate contract must expose normalization helper.");
assert(adapter.buildControlledLowRiskRendererPayload, "Adapter payload builder must be available.");
assert(loader.renderControlledLowRiskTextOnlyPreview, "Loader preview helper must be available.");
assert(renderer.renderControlledLowRiskTextModel, "Renderer text-only helper must be available.");

{
  const { normalized, payload, result, mount } = runContractChain(makeRawCandidate(), {});
  assert(normalized && normalized.previewOnly === true, "All flags missing/false: contract may normalize only when called by harness.");
  assert(payload === null, "All flags missing/false: adapter must return null.");
  assert(result.rendered === false && result.reason === "disabled", "All flags missing/false: loader must no-op.");
  assertDefaultHiddenMount(mount, "all flags missing/false");
}

{
  const { normalized, payload, result, mount } = runContractChain(makeRawCandidate(), { [adapterFlag]: false });
  assert(normalized && normalized.category === "agriculture training", "Adapter flag false: contract may normalize candidate.");
  assert(payload === null, "Adapter flag false: adapter must return null.");
  assert(result.rendered === false && result.reason === "disabled", "Adapter flag false: loader must no-op.");
  assertDefaultHiddenMount(mount, "adapter flag false");
}

{
  const { normalized, payload, result, mount } = runContractChain(makeRawCandidate(), { [adapterFlag]: true, [visibleFlag]: false });
  assert(normalized, "Visible flag false: contract must normalize.");
  assert(payload && payload.category === "agriculture_training", "Visible flag false: adapter may build safe payload.");
  assert(result.rendered === false && result.reason === "disabled", "Visible flag false: loader must no-op.");
  assertDefaultHiddenMount(mount, "visible flag false");
}

{
  const { normalized, payload, result, mount } = runContractChain(makeRawCandidate(), { [adapterFlag]: true, [visibleFlag]: true, [loaderFlag]: false });
  assert(normalized, "Loader flag false: contract must normalize.");
  assert(payload && payload.category === "agriculture_training", "Loader flag false: adapter may build safe payload.");
  assert(result.rendered === false && result.reason === "disabled", "Loader flag false: loader must no-op.");
  assertDefaultHiddenMount(mount, "loader flag false");
}

[
  ["agriculture training preview", makeRawCandidate({ category: "agriculture training", selectedToolId: "workforce.training", title: "Agriculture training preview" }), "agriculture_training", "Agriculture training preview"],
  ["irrigation learning preview", makeRawCandidate({ category: "irrigation learning", selectedToolId: "learning.start", title: "Irrigation learning preview" }), "irrigation_learning", "Irrigation learning preview"],
  ["farm jobs/workforce preview", makeRawCandidate({ category: "farm jobs/workforce preview", selectedToolId: "workforce.job_pathways", title: "Farm jobs preview" }), "farm_jobs_workforce_discovery", "Farm jobs preview"],
  ["AgriTrade browse-only preview", makeRawCandidate({ category: "AgriTrade browse-only preview", selectedToolId: "marketplace.agritrade", title: "AgriTrade browse-only preview" }), "agritrade_marketplace_preview", "AgriTrade browse-only preview"],
  ["crop issue educational help preview", makeRawCandidate({ category: "crop issue educational help", selectedToolId: "agriculture.help", title: "Crop issue educational help preview" }), "crop_issue_education_help", "Crop issue educational help preview"]
].forEach(([label, candidate, expectedCategory, expectedText]) => {
  const { normalized, payload, result, mount } = runContractChain(candidate, {
    [adapterFlag]: true,
    [visibleFlag]: true,
    [loaderFlag]: true
  });
  assert(normalized && normalized.previewOnly === true && normalized.riskTier === "low", `${label}: contract must normalize preview-only low-risk candidate.`);
  assert(payload && payload.category === expectedCategory && payload.previewOnly === true && payload.riskTier === "low", `${label}: adapter must produce safe renderer payload.`);
  assert(result.rendered === true && result.reason === "rendered", `${label}: loader may render only in isolated harness with all flags true.`);
  assertRenderedMount(mount, label, expectedText);
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
  const { normalized, payload, result, mount } = runContractChain(makeRawCandidate({
    category,
    selectedToolId: "unknown.tool",
    title: `${category} request`,
    summary: "This must not render."
  }), {
    [adapterFlag]: true,
    [visibleFlag]: true,
    [loaderFlag]: true
  });
  assert(normalized === null, `${category}: contract must reject excluded/high-risk candidate.`);
  assert(payload === null, `${category}: adapter must not produce payload.`);
  assert(result.rendered === false, `${category}: loader must not render.`);
  assertDefaultHiddenMount(mount, category);
});

[
  ["missing", undefined],
  ["null", null],
  ["empty", {}],
  ["previewOnly false", makeRawCandidate({ previewOnly: false })],
  ["medium risk", makeRawCandidate({ riskTier: "medium" })],
  ["unknown top-level", makeRawCandidate({ extra: "unknown" })],
  ["forbidden top-level", makeRawCandidate({ url: "https://example.com" })],
  ["nested forbidden", makeRawCandidate({ readiness: { previewReady: true, provider: "unsafe" } })]
].forEach(([label, candidate]) => {
  const { normalized, payload, result, mount } = runContractChain(candidate, {
    [adapterFlag]: true,
    [visibleFlag]: true,
    [loaderFlag]: true
  });
  assert(normalized === null, `${label}: contract must reject invalid candidate.`);
  assert(payload === null, `${label}: adapter must not produce payload.`);
  assert(result.rendered === false, `${label}: loader must not render.`);
  assertDefaultHiddenMount(mount, label);
});

{
  const { normalized, payload, result, mount } = runContractChain(makeRawCandidate(), {
    [adapterFlag]: true,
    [visibleFlag]: true,
    [loaderFlag]: true
  }, { renderer: false });
  assert(normalized && payload, "Missing renderer: contract and adapter may still produce safe payload.");
  assert(result.rendered === false && result.reason === "renderer-unavailable", "Missing renderer: loader must no-op safely.");
  assertDefaultHiddenMount(mount, "missing renderer");
}

{
  const { normalized, payload, result } = runContractChain(makeRawCandidate(), {
    [adapterFlag]: true,
    [visibleFlag]: true,
    [loaderFlag]: true
  }, { mount: false });
  assert(normalized && payload, "Missing mount: contract and adapter may still produce safe payload.");
  assert(result.rendered === false && result.reason === "mount-unavailable", "Missing mount: loader must no-op safely.");
}

{
  const { normalized, payload, result, mount } = runContractChain(makeRawCandidate({
    title: "<script>alert(1)</script><img src=x onerror=alert(1)>javascript:alert(1)",
    summary: "<b>raw HTML</b> must stay plain text"
  }), {
    [adapterFlag]: true,
    [visibleFlag]: true,
    [loaderFlag]: true
  });
  assert(normalized.title.includes("&lt;script&gt;"), "Contract must escape unsafe script text.");
  assert(payload.title.includes("&lt;script&gt;"), "Adapter payload must keep unsafe text escaped.");
  assert(result.rendered === true, "Escaped unsafe-looking text may render as inert text.");
  assert(mount.textContent.includes("&lt;script&gt;"), "Rendered output must contain escaped script text, not executable HTML.");
  assert(mount.textContent.includes("javascript:alert"), "javascript: text must remain inert text only.");
  assertNoUnsafeChildren(mount, "unsafe text chain");
}

[contractFileName, adapterFileName, loaderFileName, rendererFileName].forEach(fileName => {
  assertNoRuntimeLoad(index, "public/index.html", fileName);
  assertNoRuntimeLoad(app, "public/app.js", fileName);
  assertNoRuntimeLoad(server, "server.js", fileName);
});
assertNoRuntimeSymbols(index, "public/index.html");
assertNoRuntimeSymbols(app, "public/app.js");
assertNoRuntimeSymbols(server, "server.js");

[
  "raw candidate metadata -> candidate contract validation/normalization",
  "simulated mount point",
  "all missing or false flags",
  "adapter-disabled candidates",
  "visible-UI-disabled",
  "loader-disabled",
  "all required flags",
  "missing renderer",
  "missing mount",
  "Unsafe text",
  "Standard User remains unwired"
].forEach(term => {
  assert(doc.includes(term), `Phase 14K document must mention ${term}.`);
});

assert(packageJson.scripts[qaAlias] === `node scripts/${qaScriptName}`, "package.json must expose Phase 14K QA alias.");

[
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14a-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14d-runtime-loader-stub-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14e-import-boundary-qa.js",
  "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14f-loader-test-harness-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-phase-14g-eligibility-adapter-stub-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-phase-14h-adapter-chain-test-harness-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-phase-14i-eligibility-candidate-source-audit-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-phase-14j-candidate-payload-contract-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-phase-14k-candidate-contract-chain-harness-qa.js"
].forEach(script => {
  assert(qaSuite.includes(script), `nexus-workforce suite must include ${script}.`);
});

console.log("[nexus-controlled-low-risk-renderer-phase-14k-candidate-contract-chain-harness-qa] passed");
