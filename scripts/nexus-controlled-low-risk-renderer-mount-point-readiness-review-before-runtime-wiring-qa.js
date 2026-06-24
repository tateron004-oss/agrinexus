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

const docName = "NEXUS_CONTROLLED_LOW_RISK_RENDERER_MOUNT_POINT_READINESS_REVIEW_BEFORE_RUNTIME_WIRING.md";
const scriptName = "nexus-controlled-low-risk-renderer-mount-point-readiness-review-before-runtime-wiring-qa.js";
const mountId = "nexus-controlled-low-risk-renderer-root";
const fixtureName = "nexus-controlled-low-risk-renderer-hidden-mount-point.fixture.html";

assert(exists("docs", docName), "Phase 13K mount point readiness review doc must exist");

for (const parts of [
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_HIDDEN_STANDARD_USER_MOUNT_POINT_CONTRACT.md"],
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_HIDDEN_MOUNT_POINT_TEST_ONLY_FIXTURE.md"],
  ["docs", "NEXUS_CONTROLLED_LOW_RISK_RENDERER_HIDDEN_MOUNT_POINT_BROWSER_REGRESSION_AND_STANDARD_USER_ABSENCE_ENFORCEMENT.md"],
  ["scripts", "nexus-controlled-low-risk-renderer-hidden-standard-user-mount-point-contract-qa.js"],
  ["scripts", "nexus-controlled-low-risk-renderer-hidden-mount-point-test-only-fixture-qa.js"],
  ["scripts", "nexus-controlled-low-risk-renderer-hidden-mount-point-browser-regression-standard-user-absence-enforcement-qa.js"],
  ["test-fixtures", fixtureName]
]) {
  assert(exists(...parts), `${parts.join("/")} must exist before Phase 13K readiness review`);
}

const doc = read("docs", docName);
const app = read("public", "app.js");
const index = read("public", "index.html");
const server = read("server.js");
const fixture = read("test-fixtures", fixtureName);
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "# Nexus Controlled Low-Risk Renderer Mount Point Readiness Review Before Runtime Wiring",
  "## 1. Purpose and Scope",
  "## 2. Relationship to Prior Renderer Phases",
  "## 3. Current Safety Stack",
  "## 4. Readiness Assessment",
  "## 5. Go/No-Go Decision",
  "## 6. Mandatory Future Gates Before Real Mount Addition",
  "## 7. What Remains Intentionally Blocked",
  "## 8. Recommended Next Phase"
], "Phase 13K doc sections");

assertIncludes(doc, [
  "not a runtime wiring phase",
  "does not modify `public/index.html`",
  "does not add `nexus-controlled-low-risk-renderer-root` to Standard User",
  "does not wire `public/app.js`",
  "does not alter `server.js`",
  "does not activate `enableControlledLowRiskRendererVisibleUi`",
  "does not change Standard User behavior"
], "Phase 13K non-runtime scope");

assertIncludes(doc, [
  "Phase 12Y",
  "Phase 12Z",
  "Phase 13A",
  "Phase 13B",
  "Phase 13C",
  "Phase 13D",
  "Phase 13E",
  "Phase 13F",
  "Phase 13G",
  "Phase 13H",
  "Phase 13I",
  "Phase 13J"
], "completed safety gates list");

assertIncludes(doc, [
  "Standard User Startup Safety",
  "`public/index.html` Safety",
  "`public/app.js` Startup Safety",
  "`server.js` Safety",
  "Feature Flag Safety",
  "Mount Point Absence Safety",
  "Fixture Isolation",
  "DOM Insertion Safety",
  "Raw HTML Rejection",
  "Click Handler and Action Safety",
  "Navigation Safety",
  "Provider Handoff Safety",
  "Permission Prompt Safety",
  "Network and Storage Safety",
  "Confirmation and Modal Safety",
  "High-Risk Exclusion Safety",
  "QA Suite Coverage",
  "Standard User Manual Browser Validation Recency"
], "readiness categories");

assertIncludes(doc, [
  "Decision: Conditional go for a future Phase 13L hidden/default-empty mount point implementation",
  "This is not approval for visible renderer UI",
  "no visible rendering",
  "no startup invocation",
  "no feature flag activation",
  "no action buttons",
  "no links",
  "no click handlers",
  "no provider handoff",
  "no permissions",
  "no network",
  "no storage",
  "no confirmation modals",
  "no execution"
], "go/no-go decision");

assertIncludes(doc, [
  "Push checkpoint before runtime wiring",
  "Fresh Standard User manual browser validation or explicit rationale for relying on Phase 13G",
  "Dedicated hidden-mount-point implementation phase",
  "Mount point default-hidden/default-empty",
  "No visible rendering when the mount point is added",
  "No startup rendering",
  "No feature flag activation",
  "No helper invocation from startup",
  "No renderer cards",
  "No buttons",
  "No links",
  "No click handlers",
  "No provider handoff",
  "No permissions",
  "No network calls",
  "No storage writes",
  "No confirmation modals",
  "Dedicated browser regression QA after mount point insertion",
  "Dedicated Standard User manual browser validation after mount point insertion"
], "mandatory future gates");

assertIncludes(doc, [
  "Phase 13L - Controlled Low-Risk Renderer Actual Hidden Mount Point Default-Empty Implementation",
  "add only a default-empty, hidden mount point to `public/index.html`",
  "with no visible rendering, no startup invocation, no feature flag activation, no helper invocation, no renderer cards, and no action behavior"
], "recommended next phase");

assert(!index.includes(mountId), `public/index.html must not include actual future mount point ${mountId} in Phase 13K`);
assert(!index.includes(fixtureName), "public/index.html must not reference hidden mount fixture");
assert(!index.includes("test-fixtures/"), "public/index.html must not reference test fixtures");
assert(!index.match(/<script[^>]+nexus-low-risk/i), "public/index.html must not include low-risk renderer script tags");
assert(!index.includes("data-nexus-renderer-mode"), "public/index.html must not include renderer mode markers");
assert(!index.includes("data-visible-renderer-enabled"), "public/index.html must not include hidden renderer metadata");

assert(!app.includes(fixtureName), "public/app.js must not reference hidden mount fixture");
assert(!app.includes(`getElementById("${mountId}")`), "public/app.js must not query future mount point by id");
assert(!app.includes(`getElementById('${mountId}')`), "public/app.js must not query future mount point by id");
assert(!app.includes(`querySelector("#${mountId}")`), "public/app.js must not query future mount point by selector");
assert(!app.includes(`querySelector('#${mountId}')`), "public/app.js must not query future mount point by selector");
assert(!app.includes("data-visible-renderer-enabled"), "public/app.js must not query hidden renderer metadata");
assert(!app.includes("appendChild(createNexusControlledLowRiskInertCardForTest"), "public/app.js must not append inert test cards into runtime DOM");
assert(!app.includes("renderNexusLowRiskInertPreview"), "public/app.js must not invoke active renderer preview");
assert(!app.includes("buildNexusLowRiskInertRendererPrototype"), "public/app.js must not invoke renderer prototype builder");

assert(!server.includes(fixtureName), "server.js must not reference hidden mount fixture");
assert(!server.includes(mountId), "server.js must not reference proposed hidden mount id");
assert(!server.includes("enableControlledLowRiskRendererVisibleUi"), "server.js must not expose future visible renderer flag");

assert(app.includes("function createNexusControlledLowRiskInertCardForTest"), "Phase 13B inert helper must remain present");
const declarationIndex = app.indexOf("function createNexusControlledLowRiskInertCardForTest");
assert(declarationIndex >= 0, "inert helper declaration must be found");
const afterDeclaration = app.slice(declarationIndex + "function createNexusControlledLowRiskInertCardForTest".length);
assert(!afterDeclaration.match(/createNexusControlledLowRiskInertCardForTest\s*\(/), "inert helper must not be invoked during startup/runtime flow");

assertIncludes(fixture, [
  `id="${mountId}"`,
  "hidden",
  "data-nexus-renderer-mode=\"hidden\"",
  "data-visible-renderer-enabled=\"false\"",
  "data-execution-allowed=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-permission-request=\"false\"",
  "data-navigation-allowed=\"false\""
], "Phase 13I fixture remains accurate");

assert(packageJson.includes(`"qa:nexus-controlled-low-risk-renderer-mount-point-readiness-review-before-runtime-wiring": "node scripts/${scriptName}"`), "package.json must expose Phase 13K QA alias");
assert(suite.includes(`scripts/${scriptName}`), "nexus-workforce suite must include Phase 13K readiness review guard");

for (const qaScript of [
  "scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-implementation-qa.js",
  "scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-browser-regression-validation-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-visible-ui-design-contract-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-inert-dom-prototype-test-fixture-only-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-inert-dom-browser-regression-contract-enforcement-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-test-only-visual-snapshot-fixture-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-standard-user-readiness-review-before-visible-activation-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-default-off-visible-feature-flag-design-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-hidden-standard-user-mount-point-contract-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-hidden-mount-point-test-only-fixture-qa.js",
  "scripts/nexus-controlled-low-risk-renderer-hidden-mount-point-browser-regression-standard-user-absence-enforcement-qa.js"
]) {
  assert(suite.includes(qaScript), `nexus-workforce suite must keep renderer/pre-activation guard: ${qaScript}`);
}

console.log("Nexus controlled low-risk renderer mount point readiness review QA passed");
console.log("- Phase 13K documents conditional readiness for a future hidden/default-empty mount point only");
console.log("- Standard User index/app/server remain unwired, absent of the mount point, and free of feature flag activation");
console.log("- mandatory future gates and prior Phase 12Y through 13J renderer guards remain enforced");
