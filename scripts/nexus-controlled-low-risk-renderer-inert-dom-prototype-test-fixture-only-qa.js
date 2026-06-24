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

const docPath = path.join(root, "docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_INERT_DOM_PROTOTYPE_TEST_FIXTURE_ONLY.md");
assert(fs.existsSync(docPath), "Phase 13B inert DOM prototype doc must exist");

for (const parts of [
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_VISIBLE_UI_DESIGN_CONTRACT.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_TEST_HARNESS_IMPLEMENTATION.md"],
  ["docs", "NEXUS_LOW_RISK_RENDERER_CONTROLLED_RUNTIME_FLAG_ON_BROWSER_REGRESSION_VALIDATION.md"],
  ["scripts", "nexus-controlled-low-risk-renderer-visible-ui-design-contract-qa.js"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-implementation-qa.js"],
  ["scripts", "nexus-low-risk-renderer-controlled-runtime-flag-on-browser-regression-validation-qa.js"]
]) {
  assert(exists(...parts), `${parts.join("/")} must exist`);
}

const doc = read("docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_INERT_DOM_PROTOTYPE_TEST_FIXTURE_ONLY.md");
const app = read("public", "app.js");
const index = read("public", "index.html");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");
const { source: prototypeSource, createCard } = loadPrototype(app);

assertIncludes(doc, [
  "## 1. Purpose and Scope",
  "## 2. Relationship to Phases 12Y, 12Z, and 13A",
  "## 3. Why the Prototype Remains Test-Fixture-Only",
  "## 4. Allowed Inert Prototype Output",
  "## 5. Prohibited Output and Behavior",
  "## 6. DOM Safety Rules",
  "## 7. Standard User Safety Posture",
  "## 8. Required Future Gates Before Visible Rendering",
  "## 9. Non-Goals",
  "## 10. Recommended Next Phase"
], "Phase 13B doc");

assertIncludes(doc, [
  "Controlled Low-Risk Renderer Inert DOM Prototype",
  "test fixtures only",
  "not a production activation phase",
  "public/index.html",
  "textContent",
  "data-nexus-renderer-mode=\"inert\"",
  "data-execution-allowed=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-permission-request=\"false\"",
  "Review only.",
  "No action has been taken.",
  "Any future action must be separate, explicit, confirmed, and gated."
], "Phase 13B allowed output contract");

assertIncludes(doc, [
  "Learning",
  "Training",
  "Jobs",
  "Marketplace Review",
  "Agriculture Help",
  "onclick",
  "action `addEventListener`",
  "action buttons",
  "links that route or navigate",
  "provider handoff",
  "browser permission requests",
  "call behavior",
  "message behavior",
  "location sharing",
  "camera opening",
  "payment",
  "purchase",
  "emergency behavior",
  "booking behavior",
  "form submission",
  "health mutation",
  "raw HTML insertion",
  "automatic rendering on page load",
  "window.location",
  "network calls",
  "storage writes",
  "confirmation modals"
], "Phase 13B prohibited behavior contract");

assert(!index.includes("nexus-low-risk-inert-renderer"), "public/index.html must not load low-risk inert renderer modules");
assert(!index.match(/<script[^>]+nexus-low-risk/i), "public/index.html must not include a low-risk renderer script tag");
assertHiddenMountPointOnly(index);
assert(!index.includes("data-nexus-renderer-mode=\"inert\""), "public/index.html must not include rendered inert card output");
assert(!app.includes("renderNexusLowRiskInertPreview"), "public/app.js must not invoke renderer preview");
assert(!app.includes("buildNexusLowRiskInertRendererPrototype"), "public/app.js must not invoke renderer prototype builder");
assert(!app.includes("import(\"/nexus-low-risk"), "public/app.js must not dynamically import low-risk renderer modules");
assert(!app.includes("import('/nexus-low-risk"), "public/app.js must not dynamically import low-risk renderer modules");

assert(prototypeSource.includes("documentRef"), "prototype must require an injected test document fixture");
assert(prototypeSource.includes("textContent"), "prototype must use textContent for inserted text");
assert(!prototypeSource.includes("innerHTML"), "prototype must not use innerHTML");
assert(!prototypeSource.includes("addEventListener"), "prototype must not attach event listeners");
assert(!prototypeSource.includes("onclick"), "prototype must not define onclick handlers");
assert(!prototypeSource.includes("window.location"), "prototype must not change location");
assert(!prototypeSource.includes("localStorage"), "prototype must not write storage");
assert(!prototypeSource.includes("sessionStorage"), "prototype must not write storage");
assert(!prototypeSource.includes("fetch("), "prototype must not use network calls");
assert(!prototypeSource.includes("navigator.geolocation"), "prototype must not request location");
assert(!prototypeSource.includes("getUserMedia"), "prototype must not request camera/microphone");
assert(!prototypeSource.includes("window.open"), "prototype must not open providers or windows");
assert(!prototypeSource.includes("createElement(\"button\")"), "prototype must not create buttons");
assert(!prototypeSource.includes("createElement(\"a\")"), "prototype must not create links");

const hostile = "<img src=x onerror=alert(1)> <script>alert(1)</script>";
const card = createCard({
  category: "Training",
  displayTitle: hostile,
  summary: hostile,
  executionAllowed: false,
  providerHandoffAllowed: false,
  permissionRequestAllowed: false
}, { documentRef: createFakeDocument() });

assert(card, "safe low-risk fixture must produce an inert card");
assert.equal(card.tagName, "SECTION", "prototype should create a static section card");
assert.equal(card.getAttribute("data-nexus-renderer-mode"), "inert", "card must declare inert renderer mode");
assert.equal(card.getAttribute("data-execution-allowed"), "false", "card must declare execution disabled");
assert.equal(card.getAttribute("data-provider-handoff"), "false", "card must declare provider handoff disabled");
assert.equal(card.getAttribute("data-permission-request"), "false", "card must declare permission request disabled");
assert.equal(card.querySelector("[data-nexus-card-field=\"displayTitle\"]").textContent, hostile, "hostile title must remain text only");
assert.equal(card.querySelector("[data-nexus-card-field=\"summary\"]").textContent, hostile, "hostile summary must remain text only");
assert.equal(card.children.some(child => child.tagName === "BUTTON"), false, "prototype must not create action buttons");
assert.equal(card.children.some(child => child.tagName === "A"), false, "prototype must not create links");

for (const category of ["Learning", "Training", "Jobs", "Marketplace Review", "Agriculture Help"]) {
  assert(createCard({
    category,
    displayTitle: `${category} options`,
    summary: "Review options only.",
    executionAllowed: false,
    providerHandoffAllowed: false,
    permissionRequestAllowed: false
  }, { documentRef: createFakeDocument() }), `${category} fixture must render an inert card`);
}

for (const unsafe of [
  { category: "Call", executionAllowed: false, providerHandoffAllowed: false, permissionRequestAllowed: false },
  { category: "Training", executionAllowed: true, providerHandoffAllowed: false, permissionRequestAllowed: false },
  { category: "Training", executionAllowed: false, providerHandoffAllowed: true, permissionRequestAllowed: false },
  { category: "Training", executionAllowed: false, providerHandoffAllowed: false, permissionRequestAllowed: true },
  { category: "Emergency", executionAllowed: false, providerHandoffAllowed: false, permissionRequestAllowed: false }
]) {
  assert.equal(createCard(unsafe, { documentRef: createFakeDocument() }), null, "unsafe or authority-bearing fixture must return null");
}

assert.equal(createCard({ category: "Training", executionAllowed: false, providerHandoffAllowed: false, permissionRequestAllowed: false }), null, "prototype must not create DOM without a test document fixture");

assert(app.includes("function evaluateNexusLowRiskRendererRuntimeHarness"), "Phase 12Y harness must remain present");
assert(app.includes("metadata_only"), "Phase 12Y harness must remain metadata/no-op only");
assert(packageJson.includes("\"qa:nexus-controlled-low-risk-renderer-inert-dom-prototype-test-fixture-only\""), "package.json must expose Phase 13B QA alias");
assert(suite.includes("scripts/nexus-controlled-low-risk-renderer-inert-dom-prototype-test-fixture-only-qa.js"), "nexus-workforce suite must include Phase 13B QA");
assert(suite.includes("scripts/nexus-controlled-low-risk-renderer-visible-ui-design-contract-qa.js"), "nexus-workforce suite must keep Phase 13A QA");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-implementation-qa.js"), "nexus-workforce suite must keep Phase 12Y QA");
assert(suite.includes("scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-browser-regression-validation-qa.js"), "nexus-workforce suite must keep Phase 12Z QA");

console.log("Nexus controlled low-risk renderer inert DOM prototype test-fixture-only QA passed");
console.log("- inert prototype creates only static review-only markup in injected test fixtures");
console.log("- hostile HTML remains text and no buttons, links, handlers, providers, permissions, navigation, or execution were added");
console.log("- Standard User index remains unwired and prior Phase 12Y/12Z/13A guards remain integrated");
