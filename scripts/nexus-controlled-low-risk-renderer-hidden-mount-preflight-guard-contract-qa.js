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

const docName = "NEXUS_CONTROLLED_LOW_RISK_RENDERER_HIDDEN_MOUNT_PREFLIGHT_GUARD_CONTRACT.md";
const scriptName = "nexus-controlled-low-risk-renderer-hidden-mount-preflight-guard-contract-qa.js";
const flagName = "enableControlledLowRiskRendererVisibleUi";
const mountId = "nexus-controlled-low-risk-renderer-root";
const shellName = "nexus-controlled-low-risk-renderer-shell";
const adapterName = "nexus-controlled-low-risk-renderer-adapter-fixture";
const stubName = "nexus-controlled-low-risk-renderer-runtime-adjacent-adapter-stub";

assert(exists("docs", docName), "Phase 13V hidden mount preflight guard contract doc must exist");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "# Nexus Controlled Low-Risk Renderer Hidden Mount Preflight Guard Contract",
  "hidden mount preflight",
  "fail closed",
  "exactly once",
  "aria-hidden=\"true\"",
  "data-visible-renderer-enabled=\"false\"",
  "default-empty",
  "no buttons",
  "no links",
  "no forms",
  "no event handlers",
  "no provider handoff",
  "no permission",
  "no confirmation",
  "no navigation",
  "no storage",
  "no network",
  "no execution",
  mountId
], "Phase 13V doc");

assertIncludes(doc, [
  "## A. Phase Purpose",
  "## B. Required Mount Identity",
  "## C. Required Default-Off Mount State",
  "## D. Fail-Closed Conditions",
  "## E. Permitted Future Phase 14 Behavior",
  "## F. No-Render Phase 13V Boundary",
  "## G. Acceptance Criteria"
], "Phase 13V doc sections");

const mountMatches = [...index.matchAll(/<div\s+[^>]*id="nexus-controlled-low-risk-renderer-root"[^>]*>\s*<\/div>/g)];
assert.equal((index.match(new RegExp(`id="${mountId}"`, "g")) || []).length, 1, "hidden renderer mount point must exist exactly once");
assert.equal(mountMatches.length, 1, "hidden renderer mount point must be a single empty div");

const mount = mountMatches[0][0];
assertIncludes(mount, [
  `id="${mountId}"`,
  "hidden",
  "aria-hidden=\"true\"",
  "data-nexus-renderer-mode=\"hidden\"",
  "data-visible-renderer-enabled=\"false\"",
  "data-execution-allowed=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-permission-request=\"false\"",
  "data-navigation-allowed=\"false\""
], "hidden renderer mount point");

const mountContent = mount.replace(/<div\b[^>]*>/, "").replace(/<\/div>/, "").trim();
assert.equal(mountContent, "", "hidden renderer mount point must be default-empty");

for (const forbiddenMountPattern of [
  /<button/i,
  /<a\s/i,
  /href\s*=/i,
  /<form/i,
  /<input/i,
  /<script/i,
  /<iframe/i,
  /onclick/i,
  /onchange/i,
  /oninput/i,
  /tabindex/i,
  /role=["']button["']/i,
  /role=["']link["']/i
]) {
  assert(!forbiddenMountPattern.test(mount), `hidden mount must not contain ${forbiddenMountPattern}`);
}

function assertRuntimeDoesNotReferenceFixture(source, label) {
  for (const fixtureName of [shellName, adapterName, stubName]) {
    assert(!source.includes(fixtureName), `${label} must not reference ${fixtureName}`);
  }
  assert(!source.includes(scriptName), `${label} must not reference Phase 13V QA`);
  assert(!source.match(/import\s*\([^)]*nexus-controlled-low-risk-renderer/i), `${label} must not dynamically import renderer files`);
  assert(!source.match(/require\s*\([^)]*nexus-controlled-low-risk-renderer/i), `${label} must not require renderer files`);
  assert(!source.match(/fetch\s*\([^)]*nexus-controlled-low-risk-renderer/i), `${label} must not fetch renderer files`);
}

assertRuntimeDoesNotReferenceFixture(app, "public/app.js");
assertRuntimeDoesNotReferenceFixture(index, "public/index.html");
assertRuntimeDoesNotReferenceFixture(server, "server.js");

assert(!index.match(/<script[^>]+nexus-controlled-low-risk-renderer/i), "public/index.html must not load controlled low-risk renderer scripts");
assert(!server.match(new RegExp(`${flagName}\\s*:\\s*true`)), "server.js must not expose enableControlledLowRiskRendererVisibleUi: true");
assert(!app.includes(flagName), "public/app.js must not consume the future renderer flag");
assert(!server.includes(flagName), "server.js must not expose the future renderer flag");
assert(!app.includes(mountId), "public/app.js must not query the hidden mount point");
assert(!server.includes(mountId), "server.js must not reference the hidden mount point");

for (const [label, source] of [
  ["public/app.js", app],
  ["server.js", server]
]) {
  for (const pattern of [
    /nexus-controlled-low-risk-renderer-root[\s\S]{0,240}(hidden\s*=\s*false|classList\.remove\(["']hidden["']|removeAttribute\(["']hidden["'])/i,
    /nexus-controlled-low-risk-renderer-root[\s\S]{0,240}(innerHTML|insertAdjacentHTML|createElement|appendChild|replaceChildren)/i,
    /nexus-controlled-low-risk-renderer-root[\s\S]{0,240}(addEventListener|onclick|href|button|link)/i,
    /enableControlledLowRiskRendererVisibleUi[\s\S]{0,240}(innerHTML|insertAdjacentHTML|createElement|appendChild|replaceChildren|classList\.remove|removeAttribute)/i
  ]) {
    assert(!pattern.test(source), `${label} must not contain active hidden mount mutation code: ${pattern}`);
  }
}

function passesHiddenMountPreflight(state) {
  if (!state || typeof state !== "object" || Array.isArray(state)) return false;
  return state.mountExistsExactlyOnce === true &&
    state.mountHidden === true &&
    state.ariaHidden === "true" &&
    state.visibleRendererEnabled === "false" &&
    state.mountEmpty === true &&
    state.hasButtons === false &&
    state.hasLinks === false &&
    state.hasForms === false &&
    state.hasInputs === false &&
    state.hasScripts === false &&
    state.hasIframes === false &&
    state.hasEventHandlers === false &&
    state.hasFocusableAttributes === false &&
    state.hasProviderMarkers === false &&
    state.hasPermissionMarkers === false &&
    state.hasConfirmationMarkers === false &&
    state.hasNavigationMarkers === false &&
    state.hasStorageMarkers === false &&
    state.hasNetworkMarkers === false &&
    state.hasExecutionMarkers === false;
}

const safePreflight = Object.freeze({
  mountExistsExactlyOnce: true,
  mountHidden: true,
  ariaHidden: "true",
  visibleRendererEnabled: "false",
  mountEmpty: true,
  hasButtons: false,
  hasLinks: false,
  hasForms: false,
  hasInputs: false,
  hasScripts: false,
  hasIframes: false,
  hasEventHandlers: false,
  hasFocusableAttributes: false,
  hasProviderMarkers: false,
  hasPermissionMarkers: false,
  hasConfirmationMarkers: false,
  hasNavigationMarkers: false,
  hasStorageMarkers: false,
  hasNetworkMarkers: false,
  hasExecutionMarkers: false
});

assert.equal(passesHiddenMountPreflight(safePreflight), true, "local QA-only preflight helper must pass safe default-off state");
assert.equal(passesHiddenMountPreflight(null), false, "preflight helper must reject null state");
assert.equal(passesHiddenMountPreflight([]), false, "preflight helper must reject array state");

for (const [key, unsafeValue] of [
  ["mountExistsExactlyOnce", false],
  ["mountHidden", false],
  ["ariaHidden", "false"],
  ["visibleRendererEnabled", "true"],
  ["mountEmpty", false],
  ["hasButtons", true],
  ["hasLinks", true],
  ["hasForms", true],
  ["hasInputs", true],
  ["hasScripts", true],
  ["hasIframes", true],
  ["hasEventHandlers", true],
  ["hasFocusableAttributes", true],
  ["hasProviderMarkers", true],
  ["hasPermissionMarkers", true],
  ["hasConfirmationMarkers", true],
  ["hasNavigationMarkers", true],
  ["hasStorageMarkers", true],
  ["hasNetworkMarkers", true],
  ["hasExecutionMarkers", true]
]) {
  assert.equal(passesHiddenMountPreflight({ ...safePreflight, [key]: unsafeValue }), false, `preflight helper must fail closed for ${key}`);
}

assert(packageJson.includes(`"qa:nexus-controlled-low-risk-renderer-hidden-mount-preflight-guard-contract": "node scripts/${scriptName}"`), "package.json must expose Phase 13V QA alias");
assert(suite.includes(`scripts/${scriptName}`), "nexus-workforce suite must include Phase 13V QA guard");

console.log("Nexus controlled low-risk renderer hidden mount preflight guard contract QA passed.");
