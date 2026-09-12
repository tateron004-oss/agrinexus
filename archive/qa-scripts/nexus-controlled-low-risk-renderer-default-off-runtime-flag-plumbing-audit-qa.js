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

const docName = "NEXUS_CONTROLLED_LOW_RISK_RENDERER_DEFAULT_OFF_RUNTIME_FLAG_PLUMBING_AUDIT.md";
const scriptName = "nexus-controlled-low-risk-renderer-default-off-runtime-flag-plumbing-audit-qa.js";
const flagName = "enableControlledLowRiskRendererVisibleUi";
const mountId = "nexus-controlled-low-risk-renderer-root";
const shellName = "nexus-controlled-low-risk-renderer-shell";
const adapterName = "nexus-controlled-low-risk-renderer-adapter-fixture";
const stubName = "nexus-controlled-low-risk-renderer-runtime-adjacent-adapter-stub";

assert(exists("docs", docName), "Phase 13U runtime flag plumbing audit doc must exist");
assert(exists("scripts", "fixtures", `${shellName}.js`), "shell fixture must remain under scripts/fixtures");
assert(exists("scripts", "fixtures", `${adapterName}.js`), "adapter fixture must remain under scripts/fixtures");
assert(exists("scripts", "fixtures", `${stubName}.js`), "runtime-adjacent adapter stub must remain under scripts/fixtures");
assert(!exists("public", "inert", `${stubName}.js`), "runtime-adjacent stub must not be placed under public/inert in this repo");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "# Nexus Controlled Low-Risk Renderer Default-Off Runtime Flag Plumbing Audit",
  "runtime flag",
  "default-off",
  "enableControlledLowRiskRendererVisibleUi === true",
  "strict boolean",
  "no active runtime flag wiring",
  "no visible UI",
  "no provider handoff",
  "no permission",
  "no confirmation",
  "no navigation",
  "no storage",
  "no network",
  "no execution",
  "Standard User build remains unchanged and default-off"
], "Phase 13U doc");

assertIncludes(doc, [
  "## A. Phase Purpose",
  "## B. Current Runtime Flag Status",
  "## C. Future Permitted Flag Shape",
  "## D. Forbidden Flag Sources For Activation",
  "## E. Required Future Flag Preflight",
  "## F. Phase 14 Activation Boundary",
  "## G. Acceptance Criteria"
], "Phase 13U doc sections");

for (const term of [
  "query string",
  "hash route",
  "localStorage",
  "sessionStorage",
  "cookie",
  "CSS class",
  "data attribute alone",
  "server environment string",
  "implicit `/api/config` truthy value",
  "debug mode",
  "admin mode",
  "user role alone",
  "prompt text alone",
  "Phase 13W Standard User browser validation",
  "Phase 13X closeout"
]) {
  assert(doc.includes(term), `Phase 13U doc must include future boundary term: ${term}`);
}

function futureFlagEnabled(value) {
  return value === true;
}

assert.equal(futureFlagEnabled(true), true, "strict boolean true is the only enabled future flag value");
for (const disabledValue of [false, "true", 1, "1", "yes", "on", null, undefined, {}, []]) {
  assert.equal(futureFlagEnabled(disabledValue), false, `future flag parser must reject ${String(disabledValue)}`);
}

function assertRuntimeDoesNotReferenceFixture(source, label) {
  for (const fixtureName of [shellName, adapterName, stubName]) {
    assert(!source.includes(fixtureName), `${label} must not reference ${fixtureName}`);
  }
  assert(!source.includes(scriptName), `${label} must not reference Phase 13U QA`);
  assert(!source.match(/import\s*\([^)]*nexus-controlled-low-risk-renderer/i), `${label} must not dynamically import renderer files`);
  assert(!source.match(/require\s*\([^)]*nexus-controlled-low-risk-renderer/i), `${label} must not require renderer files`);
  assert(!source.match(/fetch\s*\([^)]*nexus-controlled-low-risk-renderer/i), `${label} must not fetch renderer files`);
}

assertRuntimeDoesNotReferenceFixture(app, "public/app.js");
assertRuntimeDoesNotReferenceFixture(index, "public/index.html");
assertRuntimeDoesNotReferenceFixture(server, "server.js");

assert(!index.match(/<script[^>]+nexus-controlled-low-risk-renderer/i), "public/index.html must not load controlled low-risk renderer scripts");
assert(!index.match(/<script[^>]+nexus-low-risk/i), "public/index.html must not load low-risk renderer scripts");

assert(!app.includes(flagName), "public/app.js must not consume the future renderer flag");
assert(!server.includes(flagName), "server.js must not expose the future renderer flag");
assert(!server.match(new RegExp(`${flagName}\\s*:\\s*true`)), "server.js must not expose enableControlledLowRiskRendererVisibleUi: true");
assert(!server.match(new RegExp(`${flagName}\\s*:\\s*["'](?:true|1|yes|on)["']`, "i")), "server.js must not expose truthy string renderer flag values");
assert(app.includes("function paintControlledStagedActionPreview"), "public/app.js may only query the hidden mount through the Sprint D6 flag-gated staged preview painter");
assert(app.includes(`$("#${mountId}")`), "public/app.js hidden mount query must remain scoped to controlled staged preview painting");
assert(app.includes('root.hidden = !html'), "public/app.js must keep the hidden mount hidden when no flag-gated preview exists");
assert(app.includes('root.dataset.executionAllowed = "false"'), "public/app.js must preserve no-execution mount metadata");
assert(app.includes('root.dataset.providerHandoff = "false"'), "public/app.js must preserve no-provider-handoff mount metadata");
assert(app.includes('root.dataset.permissionRequest = "false"'), "public/app.js must preserve no-permission-request mount metadata");
assert(!server.includes(mountId), "server.js must not reference the hidden mount point");

for (const [label, source] of [
  ["public/app.js", app],
  ["server.js", server]
]) {
  for (const forbiddenPattern of [
    new RegExp(`${flagName}[^\\n]{0,80}(URLSearchParams|location\\.search|query)`, "i"),
    new RegExp(`${flagName}[^\\n]{0,80}(location\\.hash|hash)`, "i"),
    new RegExp(`${flagName}[^\\n]{0,80}localStorage`, "i"),
    new RegExp(`${flagName}[^\\n]{0,80}sessionStorage`, "i"),
    new RegExp(`${flagName}[^\\n]{0,80}cookie`, "i"),
    new RegExp(`${flagName}[^\\n]{0,80}(classList|className)`, "i"),
    new RegExp(`${flagName}[^\\n]{0,80}(dataset|getAttribute|setAttribute)`, "i"),
    new RegExp(`${flagName}[^\\n]{0,80}process\\.env`, "i"),
    new RegExp(`${flagName}[^\\n]{0,80}debug`, "i"),
    new RegExp(`${flagName}[^\\n]{0,80}(admin|role|prompt)`, "i")
  ]) {
    assert(!forbiddenPattern.test(source), `${label} must not read renderer flag from a forbidden source: ${forbiddenPattern}`);
  }
}

const runtimeDangerCombinations = [
  /enableControlledLowRiskRendererVisibleUi[\s\S]{0,240}(hidden\s*=\s*false|classList\.remove\(["']hidden["']|removeAttribute\(["']hidden["'])/i,
  /enableControlledLowRiskRendererVisibleUi[\s\S]{0,240}(innerHTML|insertAdjacentHTML|createElement)/i,
  /enableControlledLowRiskRendererVisibleUi[\s\S]{0,240}(button|link|onclick|addEventListener|handler)/i,
  /enableControlledLowRiskRendererVisibleUi[\s\S]{0,240}(providerHandoff|permissionRequest|confirmation|navigationAllowed|execute|dispatch)/i,
  /nexus-controlled-low-risk-renderer-root[\s\S]{0,240}(insertAdjacentHTML|createElement|addEventListener|classList\.remove|removeAttribute|onclick|providerHandoff|permissionRequest|execute|dispatch)/i
];

for (const [label, source] of [
  ["public/app.js", app],
  ["server.js", server],
  ["public/index.html", index]
]) {
  for (const pattern of runtimeDangerCombinations) {
    assert(!pattern.test(source), `${label} must not contain active visible renderer behavior combination: ${pattern}`);
  }
}

assert.equal((index.match(new RegExp(`id="${mountId}"`, "g")) || []).length, 1, "public/index.html must contain exactly one hidden renderer mount point");
const mountMatch = index.match(/<div\s+[^>]*id="nexus-controlled-low-risk-renderer-root"[^>]*>\s*<\/div>/);
assert(mountMatch, "hidden renderer mount point must remain a single empty div");
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

assert(packageJson.includes(`"qa:nexus-controlled-low-risk-renderer-default-off-runtime-flag-plumbing-audit": "node scripts/${scriptName}"`), "package.json must expose Phase 13U QA alias");
assert(suite.includes(`scripts/${scriptName}`), "nexus-workforce suite must include Phase 13U QA guard");

console.log("Nexus controlled low-risk renderer default-off runtime flag plumbing audit QA passed.");
