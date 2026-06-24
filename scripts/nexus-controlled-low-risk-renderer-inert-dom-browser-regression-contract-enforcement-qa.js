const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertIncludes(source, terms, label) {
  for (const term of terms) {
    assert(source.includes(term), `${label} must include: ${term}`);
  }
}

function assertHiddenMountPointOnly(source) {
  const mountId = "nexus-controlled-low-risk-renderer-root";
  assert.equal((source.match(new RegExp(`id="${mountId}"`, "g")) || []).length, 1, "public/index.html must include exactly one hidden renderer mount point after Phase 13L");
  const match = source.match(/<div\s+[^>]*id="nexus-controlled-low-risk-renderer-root"[^>]*>\s*<\/div>/);
  assert(match, "hidden renderer mount point must be a single empty div");
  const mount = match[0];
  for (const term of [
    "hidden",
    "aria-hidden=\"true\"",
    "data-nexus-renderer-mode=\"hidden\"",
    "data-visible-renderer-enabled=\"false\"",
    "data-execution-allowed=\"false\"",
    "data-provider-handoff=\"false\"",
    "data-permission-request=\"false\"",
    "data-navigation-allowed=\"false\""
  ]) {
    assert(mount.includes(term), `hidden renderer mount point must include ${term}`);
  }
}

function extractFunction(source, name) {
  const start = source.indexOf(`function ${name}`);
  assert(start >= 0, `${name} must exist`);
  const paramsEnd = source.indexOf(")", start);
  assert(paramsEnd > start, `${name} must have function parameters`);
  const braceStart = source.indexOf("{", paramsEnd);
  assert(braceStart > paramsEnd, `${name} must have a function body`);
  let depth = 0;
  for (let index = braceStart; index < source.length; index += 1) {
    const char = source[index];
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }
  throw new Error(`${name} function body could not be isolated`);
}

function createFakeDocument() {
  function makeElement(tagName) {
    return {
      tagName: String(tagName || "").toUpperCase(),
      attributes: {},
      children: [],
      textContent: "",
      setAttribute(name, value) {
        this.attributes[name] = String(value);
      },
      getAttribute(name) {
        return this.attributes[name];
      },
      appendChild(child) {
        this.children.push(child);
        return child;
      },
      querySelector(selector) {
        const attr = selector.match(/^\[([^=]+)="([^"]+)"\]$/);
        const stack = [...this.children];
        while (stack.length) {
          const current = stack.shift();
          if (attr && current.attributes?.[attr[1]] === attr[2]) return current;
          stack.push(...(current.children || []));
        }
        return null;
      }
    };
  }
  return { createElement: makeElement };
}

function loadPrototype(appSource) {
  const source = extractFunction(appSource, "createNexusControlledLowRiskInertCardForTest");
  return {
    source,
    createCard: Function(`"use strict"; return (${source});`)()
  };
}

const docPath = path.join(root, "docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_INERT_DOM_BROWSER_REGRESSION_AND_CONTRACT_ENFORCEMENT.md");
assert(fs.existsSync(docPath), "Phase 13C browser regression/contract enforcement doc must exist");

for (const parts of [
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_VISIBLE_UI_DESIGN_CONTRACT.md"],
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_INERT_DOM_PROTOTYPE_TEST_FIXTURE_ONLY.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_TEST_HARNESS_IMPLEMENTATION.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_BROWSER_REGRESSION_VALIDATION.md"],
  ["scripts", "nexus-controlled-low-risk-renderer-visible-ui-design-contract-qa.js"],
  ["scripts", "nexus-controlled-low-risk-renderer-inert-dom-prototype-test-fixture-only-qa.js"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-implementation-qa.js"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-flag-on-browser-regression-validation-qa.js"]
]) {
  assert(exists(...parts), `${parts.join("/")} must exist`);
}

const doc = read("docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_INERT_DOM_BROWSER_REGRESSION_AND_CONTRACT_ENFORCEMENT.md");
const app = read("public", "app.js");
const index = read("public", "index.html");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");
const { source: prototypeSource, createCard } = loadPrototype(app);

assertIncludes(doc, [
  "## 1. Purpose and Scope",
  "## 2. Relationship to Phases 12Y, 12Z, 13A, and 13B",
  "## 3. Browser Regression Risk Tested",
  "## 4. Contract Rules Enforced",
  "## 5. Unsafe Flags and Categories",
  "## 6. What Remains Intentionally Blocked",
  "## 7. Why Standard User Visible Rendering Is Still Not Enabled",
  "## 8. Required Future Gates",
  "## 9. Non-Goals",
  "## 10. Recommended Next Phase"
], "Phase 13C doc");

assertIncludes(doc, [
  "browser-regression and contract-enforcement phase",
  "not a feature activation phase",
  "public/index.html",
  "createNexusControlledLowRiskInertCardForTest",
  "injected test document fixture",
  "does not use the real browser `document` implicitly",
  "textContent",
  "data-nexus-renderer-mode=\"inert\"",
  "data-execution-allowed=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-permission-request=\"false\"",
  "Phase 13D - Controlled Low-Risk Renderer Test-Only Visual Snapshot Fixture"
], "Phase 13C core contract");

assertIncludes(doc, [
  "<img src=x onerror=alert(1)>",
  "<script>alert(1)</script>",
  "<button onclick=\"alert(1)\">Run</button>",
  "<a href=\"https://example.com\">Go</a>",
  "executionAllowed: true",
  "providerHandoffAllowed: true",
  "providerHandoff: true",
  "permissionRequestAllowed: true",
  "permissionRequest: true",
  "action buttons",
  "links",
  "click handlers",
  "automatic routing",
  "external navigation",
  "provider handoff",
  "browser permission prompts",
  "network calls",
  "storage writes",
  "confirmation modals"
], "Phase 13C enforcement terms");

assert(!index.includes("nexus-low-risk-inert-renderer"), "public/index.html must not load low-risk inert renderer modules");
assert(!index.match(/<script[^>]+nexus-low-risk/i), "public/index.html must not include a low-risk renderer script tag");
assertHiddenMountPointOnly(index);
assert(!index.includes("data-nexus-renderer-mode=\"inert\""), "public/index.html must not include rendered inert card output");
assert(!index.includes("controlled-low-risk-renderer-card"), "public/index.html must not include visible renderer cards");
assert(!app.includes("renderNexusLowRiskInertPreview"), "public/app.js must not invoke renderer preview");
assert(!app.includes("buildNexusLowRiskInertRendererPrototype"), "public/app.js must not invoke renderer prototype builder");
assert(!app.includes("import(\"/nexus-low-risk"), "public/app.js must not dynamically import low-risk renderer modules");
assert(!app.includes("import('/nexus-low-risk"), "public/app.js must not dynamically import low-risk renderer modules");

const startupWindow = app.slice(app.indexOf("function createNexusControlledLowRiskInertCardForTest") + "function createNexusControlledLowRiskInertCardForTest".length);
assert(!startupWindow.match(/createNexusControlledLowRiskInertCardForTest\s*\(/), "inert helper must not be invoked after its declaration/startup path");

assert(prototypeSource.includes("documentRef"), "prototype must require an injected documentRef");
assert(!prototypeSource.match(/(^|[^.\w])document\./), "prototype must not use the real browser document implicitly");
assert(prototypeSource.includes("textContent"), "prototype must use textContent");
assert(!prototypeSource.includes("innerHTML"), "prototype must not use innerHTML");
assert(!prototypeSource.includes("insertAdjacentHTML"), "prototype must not insert HTML");
assert(!prototypeSource.includes("addEventListener"), "prototype must not register click handlers");
assert(!prototypeSource.includes("onclick"), "prototype must not define onclick handlers");
assert(!prototypeSource.includes("window.location"), "prototype must not navigate");
assert(!prototypeSource.includes("location.href"), "prototype must not navigate");
assert(!prototypeSource.includes("window.open"), "prototype must not open provider/browser handoff");
assert(!prototypeSource.includes("fetch("), "prototype must not use network calls");
assert(!prototypeSource.includes("XMLHttpRequest"), "prototype must not use network calls");
assert(!prototypeSource.includes("localStorage"), "prototype must not write storage");
assert(!prototypeSource.includes("sessionStorage"), "prototype must not write storage");
assert(!prototypeSource.includes("navigator.geolocation"), "prototype must not request location");
assert(!prototypeSource.includes("getUserMedia"), "prototype must not request camera/microphone");
assert(!prototypeSource.includes("createElement(\"button\")"), "prototype must not create action buttons");
assert(!prototypeSource.includes("createElement(\"a\")"), "prototype must not create links");

const hostileStrings = [
  "<img src=x onerror=alert(1)>",
  "<script>alert(1)</script>",
  "<button onclick=\"alert(1)\">Run</button>",
  "<a href=\"https://example.com\">Go</a>"
];

for (const hostile of hostileStrings) {
  const card = createCard({
    category: "Training",
    displayTitle: hostile,
    summary: hostile,
    executionAllowed: false,
    providerHandoffAllowed: false,
    permissionRequestAllowed: false
  }, { documentRef: createFakeDocument() });
  assert(card, `hostile fixture should still create inert Training card for text-only value: ${hostile}`);
  assert.equal(card.querySelector("[data-nexus-card-field=\"displayTitle\"]").textContent, hostile, "hostile title must remain text");
  assert.equal(card.querySelector("[data-nexus-card-field=\"summary\"]").textContent, hostile, "hostile summary must remain text");
  assert.equal(card.children.some(child => child.tagName === "BUTTON"), false, "hostile strings must not create buttons");
  assert.equal(card.children.some(child => child.tagName === "A"), false, "hostile strings must not create links");
}

for (const category of ["Learning", "Training", "Jobs", "Marketplace Review", "Agriculture Help"]) {
  const card = createCard({
    category,
    displayTitle: `${category} review`,
    summary: "Review only.",
    executionAllowed: false,
    providerHandoffAllowed: false,
    permissionRequestAllowed: false
  }, { documentRef: createFakeDocument() });
  assert(card, `${category} must produce an inert review-only card`);
  assert.equal(card.getAttribute("data-nexus-renderer-mode"), "inert", `${category} card must be inert`);
  assert.equal(card.getAttribute("data-execution-allowed"), "false", `${category} card must disable execution`);
  assert.equal(card.getAttribute("data-provider-handoff"), "false", `${category} card must disable provider handoff`);
  assert.equal(card.getAttribute("data-permission-request"), "false", `${category} card must disable permission request`);
}

for (const unsafe of [
  { category: "Training", executionAllowed: true, providerHandoffAllowed: false, permissionRequestAllowed: false },
  { category: "Training", executionAllowed: false, providerHandoffAllowed: true, permissionRequestAllowed: false },
  { category: "Training", executionAllowed: false, providerHandoffAllowed: false, permissionRequestAllowed: true },
  { category: "Training", executionAllowed: false, providerHandoffAllowed: false, permissionRequestAllowed: false, providerHandoff: true },
  { category: "Training", executionAllowed: false, providerHandoffAllowed: false, permissionRequestAllowed: false, permissionRequest: true },
  { category: "Call", executionAllowed: false, providerHandoffAllowed: false, permissionRequestAllowed: false },
  { category: "Message", executionAllowed: false, providerHandoffAllowed: false, permissionRequestAllowed: false },
  { category: "Location", executionAllowed: false, providerHandoffAllowed: false, permissionRequestAllowed: false },
  { category: "Camera", executionAllowed: false, providerHandoffAllowed: false, permissionRequestAllowed: false },
  { category: "Payment", executionAllowed: false, providerHandoffAllowed: false, permissionRequestAllowed: false },
  { category: "Purchase", executionAllowed: false, providerHandoffAllowed: false, permissionRequestAllowed: false },
  { category: "Emergency", executionAllowed: false, providerHandoffAllowed: false, permissionRequestAllowed: false },
  { category: "Booking", executionAllowed: false, providerHandoffAllowed: false, permissionRequestAllowed: false },
  { category: "Health", executionAllowed: false, providerHandoffAllowed: false, permissionRequestAllowed: false },
  { category: "Account", executionAllowed: false, providerHandoffAllowed: false, permissionRequestAllowed: false }
]) {
  assert.equal(createCard(unsafe, { documentRef: createFakeDocument() }), null, `unsafe fixture must return null: ${JSON.stringify(unsafe)}`);
}

assert.equal(createCard({
  category: "Training",
  displayTitle: "Training",
  summary: "Review only.",
  executionAllowed: false,
  providerHandoffAllowed: false,
  permissionRequestAllowed: false
}), null, "helper must require injected test document fixture and must not use real document implicitly");

assert(packageJson.includes("\"qa:nexus-controlled-low-risk-renderer-inert-dom-browser-regression-contract-enforcement\""), "package.json must expose Phase 13C QA alias");
assert(suite.includes("scripts/nexus-controlled-low-risk-renderer-inert-dom-browser-regression-contract-enforcement-qa.js"), "nexus-workforce suite must include Phase 13C QA");
assert(suite.includes("scripts/nexus-controlled-low-risk-renderer-inert-dom-prototype-test-fixture-only-qa.js"), "nexus-workforce suite must keep Phase 13B QA");
assert(suite.includes("scripts/nexus-controlled-low-risk-renderer-visible-ui-design-contract-qa.js"), "nexus-workforce suite must keep Phase 13A QA");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-implementation-qa.js"), "nexus-workforce suite must keep Phase 12Y QA");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-browser-regression-validation-qa.js"), "nexus-workforce suite must keep Phase 12Z QA");

console.log("Nexus controlled low-risk renderer inert DOM browser regression and contract enforcement QA passed");
console.log("- Standard User index remains unwired and the helper is not invoked during startup");
console.log("- hostile HTML remains text-only in injected fixtures");
console.log("- unsafe authority flags/categories return null and no buttons, links, handlers, navigation, provider, permission, network, storage, confirmation, or execution path was added");
