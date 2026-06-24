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

const docName = "NEXUS_CONTROLLED_LOW_RISK_RENDERER_ACTUAL_HIDDEN_MOUNT_POINT_DEFAULT_EMPTY_IMPLEMENTATION.md";
const scriptName = "nexus-controlled-low-risk-renderer-actual-hidden-mount-point-default-empty-implementation-qa.js";
const mountId = "nexus-controlled-low-risk-renderer-root";

assert(exists("docs", docName), "Phase 13L hidden mount point implementation doc must exist");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "# Nexus Controlled Low-Risk Renderer Actual Hidden Mount Point Default-Empty Implementation",
  "Phase 13L adds the first real Standard User DOM mount point",
  "hidden, default-empty, inert, and unwired",
  "not visible renderer activation",
  "`public/app.js` startup wiring",
  "`server.js` behavior",
  "Before Phase 13L",
  "From Phase 13L forward",
  "Standard User build remains behaviorally unchanged"
], "Phase 13L doc");

assert.equal((index.match(new RegExp(`id="${mountId}"`, "g")) || []).length, 1, "public/index.html must include exactly one hidden renderer mount point");
const mountMatch = index.match(/<div\s+[^>]*id="nexus-controlled-low-risk-renderer-root"[^>]*>\s*<\/div>/);
assert(mountMatch, "hidden renderer mount point must be a single empty div");
const mount = mountMatch[0];

assertIncludes(mount, [
  "hidden",
  "aria-hidden=\"true\"",
  "data-nexus-renderer-mode=\"hidden\"",
  "data-visible-renderer-enabled=\"false\"",
  "data-execution-allowed=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-permission-request=\"false\"",
  "data-navigation-allowed=\"false\""
], "hidden renderer mount point");

assert(!mount.replace(/<div\b[^>]*>/, "").replace(/<\/div>/, "").trim(), "hidden renderer mount point must remain default-empty");

for (const forbidden of [
  /<script\b/i,
  /\son[a-z]+\s*=/i,
  /<button\b/i,
  /<a\b/i,
  /\shref\s*=/i,
  /<form\b/i,
  /<input\b/i,
  /<textarea\b/i,
  /<select\b/i,
  /<iframe\b/i,
  /\bfetch\s*\(/i,
  /\blocalStorage\b/i,
  /\bsessionStorage\b/i,
  /\bwindow\.location\b/i,
  /\bwindow\.open\b/i,
  /\bnavigator\.geolocation\b/i,
  /\bnavigator\.mediaDevices\b/i,
  /\bgetUserMedia\b/i
]) {
  assert(!forbidden.test(mount), `hidden renderer mount point must not contain forbidden pattern: ${forbidden}`);
}

assert(!index.match(/<script[^>]+nexus-low-risk/i), "public/index.html must not load low-risk renderer scripts");
assert(!index.includes("data-nexus-renderer-mode=\"inert\""), "public/index.html must not include rendered inert card output");
assert(!index.includes("controlled-low-risk-renderer-card"), "public/index.html must not include visible renderer cards");
assert(!index.includes("data-standard-user-low-risk-renderer"), "public/index.html must not include active Standard User renderer markers");

for (const runtimeSource of [
  ["public/app.js", app],
  ["server.js", server]
]) {
  const [label, source] = runtimeSource;
  assert(!source.includes(mountId), `${label} must not query or wire the hidden mount point in Phase 13L`);
  assert(!source.includes("data-visible-renderer-enabled"), `${label} must not consume hidden renderer metadata in Phase 13L`);
  assert(!source.includes("renderNexusLowRiskInertPreview"), `${label} must not invoke active renderer preview in Phase 13L`);
  assert(!source.includes("buildNexusLowRiskInertRendererPrototype"), `${label} must not invoke renderer prototype builder in Phase 13L`);
}

assert(app.includes("function createNexusControlledLowRiskInertCardForTest"), "existing inert test helper must remain present");
const helperDeclaration = app.indexOf("function createNexusControlledLowRiskInertCardForTest");
const afterHelperDeclaration = app.slice(helperDeclaration + "function createNexusControlledLowRiskInertCardForTest".length);
assert(!afterHelperDeclaration.match(/createNexusControlledLowRiskInertCardForTest\s*\(/), "inert test helper must not be invoked from runtime flow");

assert(packageJson.includes(`"qa:nexus-controlled-low-risk-renderer-actual-hidden-mount-point-default-empty-implementation": "node scripts/${scriptName}"`), "package.json must expose Phase 13L QA alias");
assert(suite.includes(`scripts/${scriptName}`), "nexus-workforce suite must include Phase 13L QA guard");

console.log("Nexus controlled low-risk renderer actual hidden mount point default-empty implementation QA passed.");
