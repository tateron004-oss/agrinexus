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

const docName = "NEXUS_CONTROLLED_LOW_RISK_RENDERER_NON_RUNTIME_ADAPTER_FIXTURE.md";
const scriptName = "nexus-controlled-low-risk-renderer-non-runtime-adapter-fixture-qa.js";
const adapterFileName = "nexus-controlled-low-risk-renderer-adapter-fixture.js";
const shellFileName = "nexus-controlled-low-risk-renderer-shell.js";
const adapterPath = "scripts/fixtures/nexus-controlled-low-risk-renderer-adapter-fixture.js";
const mountId = "nexus-controlled-low-risk-renderer-root";
const flagName = "enableControlledLowRiskRendererVisibleUi";

assert(exists("docs", docName), "Phase 13R adapter fixture doc must exist");
assert(exists("scripts", "fixtures", adapterFileName), "Phase 13R adapter fixture must exist under scripts/fixtures");
assert(exists("scripts", "fixtures", shellFileName), "Phase 13P shell fixture must remain under scripts/fixtures");
assert(!adapterPath.startsWith("public/"), "adapter fixture must not live under public/");

const adapter = require("./fixtures/nexus-controlled-low-risk-renderer-adapter-fixture.js");
const shell = require("./fixtures/nexus-controlled-low-risk-renderer-shell.js");
const doc = read("docs", docName);
const adapterSource = read("scripts", "fixtures", adapterFileName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "# Nexus Controlled Low-Risk Renderer Non-Runtime Adapter Fixture",
  "Phase 13R adds a non-runtime adapter fixture only",
  "not runtime wiring",
  "not imported by `public/app.js`",
  "does not render UI",
  "does not touch the hidden mount point",
  "normalizes simulated metadata into shell-compatible input",
  "The Standard User build remains unchanged and default-off"
], "Phase 13R doc");

assertIncludes(doc, [
  "## A. Phase Purpose",
  "## B. Adapter Fixture Responsibilities",
  "## C. Allowed Input Fields",
  "## D. Forbidden Input Fields",
  "## E. Category Normalization",
  "## F. Side-Effect Prohibition",
  "## G. Acceptance Criteria"
], "Phase 13R doc sections");

for (const term of [
  "enableControlledLowRiskRendererVisibleUi",
  "mountExistsExactlyOnce",
  "mountHidden",
  "mountEmpty",
  "category",
  "intentCategory",
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
]) {
  assert(doc.includes(`\`${term}\``), `doc must include allowed input field ${term}`);
}

const safeMappings = new Map([
  ["agriculture training", "agriculture_training"],
  ["agriculture_training", "agriculture_training"],
  ["irrigation learning", "irrigation_learning"],
  ["irrigation_learning", "irrigation_learning"],
  ["farm jobs", "farm_jobs_workforce_discovery"],
  ["workforce discovery", "farm_jobs_workforce_discovery"],
  ["farm_jobs_workforce_discovery", "farm_jobs_workforce_discovery"],
  ["AgriTrade", "agritrade_marketplace_preview"],
  ["agritrade", "agritrade_marketplace_preview"],
  ["agritrade_marketplace_preview", "agritrade_marketplace_preview"],
  ["crop issues", "crop_issue_education_help"],
  ["crop issue education", "crop_issue_education_help"],
  ["crop_issue_education_help", "crop_issue_education_help"]
]);

for (const [input, expected] of safeMappings) {
  assert.equal(adapter.normalizeControlledLowRiskRendererCategory(input), expected, `category mapping failed for ${input}`);
  assert(doc.includes(`\`${input}\``), `doc must include mapping input ${input}`);
  assert(doc.includes(`\`${expected}\``), `doc must include mapping output ${expected}`);
}

const blockedCategories = [
  "call",
  "message",
  "sms",
  "whatsapp",
  "telegram",
  "location",
  "map_permission",
  "camera",
  "microphone",
  "buy",
  "sell",
  "payment",
  "checkout",
  "emergency",
  "appointment",
  "booking",
  "provider_handoff",
  "account_connection",
  "identity_sensitive_action"
];

for (const category of blockedCategories) {
  assert.equal(adapter.normalizeControlledLowRiskRendererCategory(category), null, `blocked category must not normalize: ${category}`);
  assert(doc.includes(`\`${category}\``), `doc must include blocked category ${category}`);
}

for (const forbiddenApi of [
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
  assert(!forbiddenApi.test(adapterSource), `adapter fixture must not include forbidden browser/API pattern: ${forbiddenApi}`);
}

const baseSafeMetadata = Object.freeze({
  enableControlledLowRiskRendererVisibleUi: true,
  mountExistsExactlyOnce: true,
  mountHidden: true,
  mountEmpty: true,
  category: "agriculture training",
  title: "Safe title",
  summary: "Safe summary",
  previewLines: ["First line", "Second line"],
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

function metadata(overrides = {}) {
  return { ...baseSafeMetadata, ...overrides };
}

for (const input of [null, undefined, "", 1, true, [], ["category"], Object.create(null)]) {
  assert.equal(adapter.buildControlledLowRiskRendererShellInputFromMetadata(input), null, "adapter must reject non-plain inputs");
}

for (const badFlag of [false, null, undefined, "true", "1", 1, "yes", "on", {}, []]) {
  assert.equal(adapter.buildControlledLowRiskRendererShellInputFromMetadata(metadata({ enableControlledLowRiskRendererVisibleUi: badFlag })), null, `adapter must reject non-strict flag ${String(badFlag)}`);
}

const allowedOutputKeys = new Set([
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
]);

const forbiddenOutputKeys = [
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

for (const [input, expected] of safeMappings) {
  const shellInput = adapter.buildControlledLowRiskRendererShellInputFromMetadata(metadata({ category: input }));
  assert(shellInput, `adapter should build shell input for ${input}`);
  assert.equal(shellInput.category, expected, `adapter should normalize ${input}`);
  assert.equal(shell.evaluateControlledLowRiskRendererEligibility(shellInput), true, `shell should accept adapter output for ${input}`);
  const textModel = shell.buildControlledLowRiskRendererTextModel(shellInput);
  assert(textModel && typeof textModel === "object" && !Array.isArray(textModel), `shell should return text model for ${input}`);
  for (const key of Object.keys(shellInput)) {
    assert(allowedOutputKeys.has(key), `adapter output must contain only shell-compatible fields; found ${key}`);
  }
  for (const key of forbiddenOutputKeys) {
    assert(!(key in shellInput), `adapter output must not contain forbidden key ${key}`);
    assert(!(key in textModel), `shell text model must not contain forbidden key ${key}`);
  }
}

const intentCategoryOutput = adapter.buildControlledLowRiskRendererShellInputFromMetadata(metadata({ category: undefined, intentCategory: "crop issues" }));
assert(intentCategoryOutput, "adapter should use intentCategory when category is missing");
assert.equal(intentCategoryOutput.category, "crop_issue_education_help", "adapter should normalize intentCategory");

const sanitizedOutput = adapter.buildControlledLowRiskRendererShellInputFromMetadata(metadata({
  title: "  Safe   title  ",
  summary: "  Safe   summary  ",
  previewLines: [" one ", 5, { nested: true }, "two", "three", "four", "five"]
}));
assert.deepEqual(sanitizedOutput.previewLines, ["one", "two", "three", "four"], "adapter should sanitize preview lines into a short string array");
assert.equal(sanitizedOutput.title, "Safe title", "adapter should sanitize title text");
assert.equal(sanitizedOutput.summary, "Safe summary", "adapter should sanitize summary text");

for (const category of [...blockedCategories, "unknown_category"]) {
  const unsafe = adapter.buildControlledLowRiskRendererShellInputFromMetadata(metadata({ category }));
  assert.equal(unsafe, null, `adapter must reject category ${category}`);
  assert.equal(shell.buildControlledLowRiskRendererTextModel(unsafe), null, `shell must return null for rejected category ${category}`);
}

for (const unsafe of [
  { executionAllowed: true },
  { providerHandoff: true },
  { permissionRequest: true },
  { navigationAllowed: true },
  { requiresRawHtml: true },
  { requiresButton: true },
  { requiresLink: true },
  { requiresHandler: true },
  { requiresNetwork: true },
  { requiresStorage: true },
  { requiresConfirmation: true },
  { requiresExecution: true },
  { mountExistsExactlyOnce: false },
  { mountHidden: false },
  { mountEmpty: false }
]) {
  const shellInput = adapter.buildControlledLowRiskRendererShellInputFromMetadata(metadata(unsafe));
  assert.equal(shellInput, null, `unsafe authority or mount field must produce null: ${JSON.stringify(unsafe)}`);
}

for (const key of forbiddenOutputKeys) {
  const shellInput = adapter.buildControlledLowRiskRendererShellInputFromMetadata(metadata({ [key]: "unsafe" }));
  assert.equal(shellInput, null, `forbidden behavior-capable field must produce null: ${key}`);
  assert.equal(adapter.hasForbiddenControlledLowRiskRendererBehaviorFields(metadata({ [key]: "unsafe" })), true, `forbidden field should be detected: ${key}`);
}

for (const runtimeSource of [
  ["public/index.html", index],
  ["public/app.js", app],
  ["server.js", server]
]) {
  const [label, source] = runtimeSource;
  assert(!source.includes(adapterFileName), `${label} must not load or reference the Phase 13R adapter fixture`);
  assert(!source.includes(shellFileName), `${label} must not load or reference the Phase 13P shell fixture`);
  assert(!source.includes(scriptName), `${label} must not load or reference the Phase 13R QA script`);
}

assert(!app.match(/import\s*\([^)]*nexus-controlled-low-risk-renderer/i), "public/app.js must not dynamically import controlled low-risk renderer code");
assert(!app.match(/require\s*\([^)]*nexus-controlled-low-risk-renderer/i), "public/app.js must not require controlled low-risk renderer code");
assert(!app.match(/fetch\s*\([^)]*nexus-controlled-low-risk-renderer/i), "public/app.js must not fetch controlled low-risk renderer code");
assert(!index.match(/<script[^>]+nexus-controlled-low-risk-renderer/i), "public/index.html must not load controlled low-risk renderer scripts");
assert(!index.match(/<script[^>]+nexus-low-risk/i), "public/index.html must not add low-risk renderer script tags");

assert.equal((index.match(new RegExp(`id="${mountId}"`, "g")) || []).length, 1, "public/index.html must contain exactly one hidden renderer mount point");
const mountMatch = index.match(/<div\s+[^>]*id="nexus-controlled-low-risk-renderer-root"[^>]*>\s*<\/div>/);
assert(mountMatch, "public/index.html hidden mount point must be a single empty div");
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

assert(!app.includes(flagName), "public/app.js must not consume the future visible renderer feature flag");
assert(!server.includes(flagName), "server.js must not expose the future visible renderer feature flag");
assert(app.includes("function paintControlledStagedActionPreview"), "public/app.js may only query the hidden mount through the Sprint D6 flag-gated staged preview painter");
assert(app.includes(`$("#${mountId}")`), "public/app.js hidden mount query must remain scoped to controlled staged preview painting");
assert(app.includes('root.hidden = !html'), "public/app.js must keep the hidden mount hidden when no flag-gated preview exists");
assert(app.includes('root.dataset.executionAllowed = "false"'), "public/app.js must preserve no-execution mount metadata");
assert(app.includes('root.dataset.providerHandoff = "false"'), "public/app.js must preserve no-provider-handoff mount metadata");
assert(app.includes('root.dataset.permissionRequest = "false"'), "public/app.js must preserve no-permission-request mount metadata");
assert(!server.includes(mountId), "server.js must not reference the hidden mount point");

assert(packageJson.includes(`"qa:nexus-controlled-low-risk-renderer-non-runtime-adapter-fixture": "node scripts/${scriptName}"`), "package.json must expose Phase 13R QA alias");
assert(suite.includes(`scripts/${scriptName}`), "nexus-workforce suite must include Phase 13R QA guard");

console.log("Nexus controlled low-risk renderer non-runtime adapter fixture QA passed.");
