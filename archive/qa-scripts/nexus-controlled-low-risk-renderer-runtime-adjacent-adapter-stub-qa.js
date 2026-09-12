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

const docName = "NEXUS_CONTROLLED_LOW_RISK_RENDERER_RUNTIME_ADJACENT_ADAPTER_STUB.md";
const scriptName = "nexus-controlled-low-risk-renderer-runtime-adjacent-adapter-stub-qa.js";
const stubFileName = "nexus-controlled-low-risk-renderer-runtime-adjacent-adapter-stub.js";
const adapterFileName = "nexus-controlled-low-risk-renderer-adapter-fixture.js";
const shellFileName = "nexus-controlled-low-risk-renderer-shell.js";
const stubPath = path.join("scripts", "fixtures", stubFileName);
const mountId = "nexus-controlled-low-risk-renderer-root";

assert(exists("docs", docName), "Phase 13T runtime-adjacent adapter stub doc must exist");
assert(exists("scripts", "fixtures", stubFileName), "Phase 13T runtime-adjacent adapter stub must exist under scripts/fixtures");
assert(exists("scripts", "fixtures", adapterFileName), "Phase 13R adapter fixture must remain under scripts/fixtures");
assert(exists("scripts", "fixtures", shellFileName), "Phase 13P shell fixture must remain under scripts/fixtures");
assert(!stubPath.startsWith("public"), "stub must not live under public/ when public/inert is not established");

const stub = require("./fixtures/nexus-controlled-low-risk-renderer-runtime-adjacent-adapter-stub.js");
const doc = read("docs", docName);
const stubSource = read("scripts", "fixtures", stubFileName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "# Nexus Controlled Low-Risk Renderer Runtime-Adjacent Adapter Stub",
  "Phase 13T adds a runtime-adjacent adapter stub only",
  "not active runtime wiring",
  "not imported by `public/app.js`",
  "not loaded by `public/index.html`",
  "does not render UI",
  "does not touch or mutate the hidden mount point",
  "does not create cards, buttons, links, handlers, navigation, provider handoffs, permissions, confirmations, storage, network, or execution",
  "Standard User build remains unchanged and default-off",
  "scripts/fixtures/nexus-controlled-low-risk-renderer-runtime-adjacent-adapter-stub.js"
], "Phase 13T doc");

assertIncludes(doc, [
  "## A. Phase Purpose",
  "## B. Runtime-Adjacent Boundary",
  "## C. Stub Responsibilities",
  "## D. Default-Off Stub Behavior",
  "## E. Accepted and Rejected Fields",
  "## F. Acceptance Criteria"
], "Phase 13T doc sections");

const allowedFields = [
  "enableControlledLowRiskRendererVisibleUi",
  "mountExistsExactlyOnce",
  "mountHidden",
  "mountEmpty",
  "category",
  "title",
  "summary",
  "previewLines",
  "executionAllowed",
  "providerHandoff",
  "permissionRequest",
  "navigationAllowed",
  "requiresRawHtml",
  "requiresButton",
  "requiresLink",
  "requiresHandler",
  "requiresNetwork",
  "requiresStorage",
  "requiresConfirmation",
  "requiresExecution"
];

const rejectedFields = [
  "html",
  "rawHtml",
  "button",
  "buttons",
  "link",
  "links",
  "href",
  "url",
  "onClick",
  "onclick",
  "handler",
  "handlers",
  "callback",
  "callbacks",
  "action",
  "actionId",
  "dispatch",
  "execute",
  "provider",
  "providerAction",
  "permission",
  "permissionRequestDetails",
  "confirmation",
  "confirmationAction",
  "navigation",
  "route",
  "open",
  "target",
  "method",
  "headers",
  "body",
  "fetch",
  "storage",
  "script",
  "style",
  "iframe",
  "form",
  "input"
];

for (const term of [...allowedFields, ...rejectedFields]) {
  assert(doc.includes(term), `Phase 13T doc must include field term: ${term}`);
}

for (const forbiddenPattern of [
  /\bdocument\b/,
  /\bwindow\b/,
  /\blocalStorage\b/,
  /\bsessionStorage\b/,
  /\bfetch\s*\(/,
  /\bXMLHttpRequest\b/,
  /\blocation\.href\b/,
  /\blocation\.assign\b/,
  /\baddEventListener\b/,
  /\bsetTimeout\b/,
  /\bsetInterval\b/,
  /\binnerHTML\b/,
  /\binsertAdjacentHTML\b/,
  /\bonclick\b/i
]) {
  assert(!forbiddenPattern.test(stubSource), `stub must not include forbidden side-effect pattern: ${forbiddenPattern}`);
}

const exportedAllowedFields = stub.getControlledLowRiskRendererAllowedAdapterFields();
const exportedRejectedFields = stub.getControlledLowRiskRendererRejectedBehaviorFields();
assert.deepEqual(exportedAllowedFields, allowedFields, "stub must expose the exact allowed adapter field list");
assert.deepEqual(exportedRejectedFields, rejectedFields, "stub must expose the exact rejected behavior field list");

function assertIneligible(input, reason, label) {
  const result = stub.evaluateControlledLowRiskRendererAdapterStub(input);
  assert(result && typeof result === "object" && !Array.isArray(result), `${label} must return a plain object result`);
  assert.equal(result.eligible, false, `${label} must be ineligible`);
  assert.equal(result.reason, reason, `${label} must explain reason`);
  assert.equal(result.textOnly, true, `${label} must remain text-only`);
  assert.equal(result.sideEffectsAllowed, false, `${label} must disallow side effects`);
  assert.equal(result.runtimeWired, false, `${label} must remain unwired`);
  for (const key of rejectedFields) {
    assert(!(key in result), `${label} result must not include rejected behavior key ${key}`);
  }
}

function assertNoRenderingFields(result, label) {
  for (const key of [
    ...rejectedFields,
    "render",
    "renderModel",
    "dom",
    "element",
    "node",
    "card",
    "cards"
  ]) {
    assert(!(key in result), `${label} result must not include DOM/rendering/behavior field ${key}`);
  }
}

for (const [label, input] of [
  ["malformed number", 1],
  ["malformed string", "input"],
  ["malformed array", []],
  ["malformed null", null],
  ["malformed undefined", undefined]
]) {
  assertIneligible(input, "malformed_input", label);
}

for (const [label, flagValue] of [
  ["missing flag", undefined],
  ["false flag", false],
  ["null flag", null],
  ["string true flag", "true"],
  ["number one flag", 1],
  ["string one flag", "1"],
  ["string yes flag", "yes"],
  ["string on flag", "on"]
]) {
  const input = { enableControlledLowRiskRendererVisibleUi: flagValue };
  if (label === "missing flag") delete input.enableControlledLowRiskRendererVisibleUi;
  assertIneligible(input, "default_off", label);
}

for (const key of rejectedFields) {
  assertIneligible({ enableControlledLowRiskRendererVisibleUi: true, [key]: "unsafe" }, "rejected_behavior_field", `rejected behavior field ${key}`);
}

for (const key of [
  "executionAllowed",
  "providerHandoff",
  "permissionRequest",
  "navigationAllowed",
  "requiresRawHtml",
  "requiresButton",
  "requiresLink",
  "requiresHandler",
  "requiresNetwork",
  "requiresStorage",
  "requiresConfirmation",
  "requiresExecution"
]) {
  assertIneligible({ enableControlledLowRiskRendererVisibleUi: true, [key]: true }, "unsafe_authority_field", `unsafe authority field ${key}`);
}

const defaultResult = stub.createDefaultControlledLowRiskRendererAdapterResult();
assert.deepEqual(defaultResult, {
  eligible: false,
  reason: "default_off",
  textOnly: true,
  sideEffectsAllowed: false,
  runtimeWired: false
}, "default result must remain ineligible and non-executing");
assertNoRenderingFields(defaultResult, "default result");

const safeResult = stub.evaluateControlledLowRiskRendererAdapterStub({
  enableControlledLowRiskRendererVisibleUi: true,
  executionAllowed: false,
  providerHandoff: false,
  permissionRequest: false,
  navigationAllowed: false,
  requiresRawHtml: false,
  requiresButton: false,
  requiresLink: false,
  requiresHandler: false,
  requiresNetwork: false,
  requiresStorage: false,
  requiresConfirmation: false,
  requiresExecution: false
});
assert.equal(safeResult.eligible, true, "strict true flag may only proceed when all safety fields are safe");
assert.equal(safeResult.reason, "strict_flag_safe_shape", "safe result must explain safe shape only");
assert.equal(safeResult.textOnly, true, "safe result must stay text-only");
assert.equal(safeResult.sideEffectsAllowed, false, "safe result must disallow side effects");
assert.equal(safeResult.runtimeWired, false, "safe result must remain unwired");
assertNoRenderingFields(safeResult, "safe result");

for (const [label, source] of [
  ["public/index.html", index],
  ["public/app.js", app],
  ["server.js", server]
]) {
  assert(!source.includes(stubFileName), `${label} must not reference the runtime-adjacent stub`);
  assert(!source.includes(adapterFileName), `${label} must not reference the adapter fixture`);
  assert(!source.includes(shellFileName), `${label} must not reference the shell fixture`);
  assert(!source.includes(scriptName), `${label} must not reference the Phase 13T QA script`);
  assert(!source.match(/import\s*\([^)]*nexus-controlled-low-risk-renderer/i), `${label} must not dynamically import controlled low-risk renderer files`);
  assert(!source.match(/require\s*\([^)]*nexus-controlled-low-risk-renderer/i), `${label} must not require controlled low-risk renderer files`);
  assert(!source.match(/fetch\s*\([^)]*nexus-controlled-low-risk-renderer/i), `${label} must not fetch controlled low-risk renderer files`);
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

assert(!index.match(/<script[^>]+nexus-controlled-low-risk-renderer/i), "public/index.html must not load controlled low-risk renderer scripts");
assert(!app.includes("enableControlledLowRiskRendererVisibleUi"), "public/app.js must not consume the future visible renderer feature flag");
assert(!server.includes("enableControlledLowRiskRendererVisibleUi"), "server.js must not expose the future visible renderer feature flag");
assert(app.includes("function paintControlledStagedActionPreview"), "public/app.js may only query the hidden mount through the Sprint D6 flag-gated staged preview painter");
assert(app.includes(`$("#${mountId}")`), "public/app.js hidden mount query must remain scoped to controlled staged preview painting");
assert(app.includes('root.hidden = !html'), "public/app.js must keep the hidden mount hidden when no flag-gated preview exists");
assert(app.includes('root.dataset.executionAllowed = "false"'), "public/app.js must preserve no-execution mount metadata");
assert(app.includes('root.dataset.providerHandoff = "false"'), "public/app.js must preserve no-provider-handoff mount metadata");
assert(app.includes('root.dataset.permissionRequest = "false"'), "public/app.js must preserve no-permission-request mount metadata");
assert(!server.includes(mountId), "server.js must not reference the hidden mount point");

assert(packageJson.includes(`"qa:nexus-controlled-low-risk-renderer-runtime-adjacent-adapter-stub": "node scripts/${scriptName}"`), "package.json must expose Phase 13T QA alias");
assert(suite.includes(`scripts/${scriptName}`), "nexus-workforce suite must include Phase 13T QA guard");

console.log("Nexus controlled low-risk renderer runtime-adjacent adapter stub QA passed.");
