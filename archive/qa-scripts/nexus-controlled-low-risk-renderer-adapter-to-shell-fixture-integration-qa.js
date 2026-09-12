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

const docName = "NEXUS_CONTROLLED_LOW_RISK_RENDERER_ADAPTER_TO_SHELL_FIXTURE_INTEGRATION_QA.md";
const scriptName = "nexus-controlled-low-risk-renderer-adapter-to-shell-fixture-integration-qa.js";
const adapterFileName = "nexus-controlled-low-risk-renderer-adapter-fixture.js";
const shellFileName = "nexus-controlled-low-risk-renderer-shell.js";
const mountId = "nexus-controlled-low-risk-renderer-root";

assert(exists("docs", docName), "Phase 13S adapter-to-shell integration QA doc must exist");
assert(exists("scripts", "fixtures", adapterFileName), "adapter fixture must exist under scripts/fixtures");
assert(exists("scripts", "fixtures", shellFileName), "shell fixture must exist under scripts/fixtures");
assert(!path.join("scripts", "fixtures", adapterFileName).startsWith("public"), "adapter fixture must not be under public/");
assert(!path.join("scripts", "fixtures", shellFileName).startsWith("public"), "shell fixture must not be under public/");

const adapter = require("./fixtures/nexus-controlled-low-risk-renderer-adapter-fixture.js");
const shell = require("./fixtures/nexus-controlled-low-risk-renderer-shell.js");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");
const adapterSource = read("scripts", "fixtures", adapterFileName);
const shellSource = read("scripts", "fixtures", shellFileName);

assertIncludes(doc, [
  "# Nexus Controlled Low-Risk Renderer Adapter-to-Shell Fixture Integration QA",
  "Phase 13S is fixture integration QA only",
  "simulated metadata -> adapter fixture -> shell eligibility -> shell text model",
  "does not add runtime wiring",
  "does not render anything in Standard User",
  "does not touch the hidden mount point",
  "does not create cards, buttons, links, handlers, navigation, provider handoffs, permissions, confirmations, storage, network, or execution",
  "Standard User remains default-off and unchanged"
], "Phase 13S doc");

assertIncludes(doc, [
  "## A. Phase Purpose",
  "## B. Safe Fixture Pipeline",
  "## C. Blocked Fixture Pipeline",
  "## D. Text-Only Output Contract",
  "## E. Acceptance Criteria"
], "Phase 13S doc sections");

const allowedInputs = new Map([
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

const allowedTextModelKeys = new Set([
  "title",
  "category",
  "summary",
  "previewLines",
  "safetyLabel"
]);

const forbiddenBehaviorKeys = [
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

for (const term of [...allowedInputs.keys(), ...allowedInputs.values(), ...blockedCategories, ...allowedTextModelKeys, ...forbiddenBehaviorKeys]) {
  assert(doc.includes(term), `Phase 13S doc must include integration term: ${term}`);
}

function safeMetadata(overrides = {}) {
  return {
    enableControlledLowRiskRendererVisibleUi: true,
    mountExistsExactlyOnce: true,
    mountHidden: true,
    mountEmpty: true,
    category: "agriculture training",
    title: "Safe low-risk preview",
    summary: "A simulated fixture preview with no execution.",
    previewLines: ["Review option one.", "Review option two."],
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
    requiresExecution: false,
    ...overrides
  };
}

function runPipeline(metadata) {
  const shellInput = adapter.buildControlledLowRiskRendererShellInputFromMetadata(metadata);
  const eligible = shell.evaluateControlledLowRiskRendererEligibility(shellInput);
  const textModel = shell.buildControlledLowRiskRendererTextModel(shellInput);
  return { shellInput, eligible, textModel };
}

function assertBlocked(metadata, label) {
  const { shellInput, eligible, textModel } = runPipeline(metadata);
  assert(shellInput === null || eligible === false, `${label} must be blocked by adapter or shell eligibility`);
  assert.equal(textModel, null, `${label} must not produce a shell text model`);
}

function assertTextOnlyModel(textModel, label) {
  assert(textModel && typeof textModel === "object" && !Array.isArray(textModel), `${label} must produce a plain text model object`);
  for (const key of Object.keys(textModel)) {
    assert(allowedTextModelKeys.has(key), `${label} text model must only use allowed text keys; found ${key}`);
  }
  for (const key of forbiddenBehaviorKeys) {
    assert(!(key in textModel), `${label} text model must not contain forbidden behavior key ${key}`);
  }
  assert.equal(typeof textModel.title, "string", `${label} title must be text`);
  assert.equal(typeof textModel.category, "string", `${label} category must be text`);
  assert.equal(typeof textModel.summary, "string", `${label} summary must be text`);
  assert(Array.isArray(textModel.previewLines), `${label} previewLines must be text array`);
  assert(textModel.previewLines.every(line => typeof line === "string"), `${label} previewLines must contain only strings`);
  assert.equal(typeof textModel.safetyLabel, "string", `${label} safetyLabel must be text`);
}

for (const [inputCategory, expectedCategory] of allowedInputs) {
  const result = runPipeline(safeMetadata({ category: inputCategory }));
  assert(result.shellInput, `safe metadata must produce adapter shell input for ${inputCategory}`);
  assert.equal(result.shellInput.category, expectedCategory, `adapter must normalize ${inputCategory}`);
  assert.equal(result.eligible, true, `shell eligibility must accept adapter output for ${inputCategory}`);
  assertTextOnlyModel(result.textModel, inputCategory);
  assert.equal(result.textModel.category, expectedCategory, `shell text model category must remain normalized for ${inputCategory}`);
}

const intentFallback = runPipeline(safeMetadata({ category: undefined, intentCategory: "crop issue education" }));
assert(intentFallback.shellInput, "adapter must accept intentCategory fallback for safe metadata");
assert.equal(intentFallback.shellInput.category, "crop_issue_education_help", "intentCategory fallback must normalize into shell category");
assert.equal(intentFallback.eligible, true, "intentCategory fallback must remain shell eligible");
assertTextOnlyModel(intentFallback.textModel, "intentCategory fallback");

for (const category of blockedCategories) {
  assertBlocked(safeMetadata({ category }), `blocked category ${category}`);
}
assertBlocked(safeMetadata({ category: "unknown_category" }), "unknown category");

for (const [label, value] of [
  ["missing flag", undefined],
  ["false flag", false],
  ["null flag", null],
  ["string true flag", "true"],
  ["number one flag", 1],
  ["string one flag", "1"],
  ["string yes flag", "yes"],
  ["string on flag", "on"]
]) {
  const metadata = safeMetadata({ enableControlledLowRiskRendererVisibleUi: value });
  if (label === "missing flag") delete metadata.enableControlledLowRiskRendererVisibleUi;
  assertBlocked(metadata, label);
}

for (const [label, overrides] of [
  ["missing mount", { mountExistsExactlyOnce: undefined }],
  ["duplicate mount", { mountExistsExactlyOnce: false }],
  ["non-hidden mount", { mountHidden: false }],
  ["non-empty mount", { mountEmpty: false }],
  ["execution authority", { executionAllowed: true }],
  ["provider handoff", { providerHandoff: true }],
  ["permission request", { permissionRequest: true }],
  ["navigation authority", { navigationAllowed: true }],
  ["raw HTML requirement", { requiresRawHtml: true }],
  ["button requirement", { requiresButton: true }],
  ["link requirement", { requiresLink: true }],
  ["handler requirement", { requiresHandler: true }],
  ["network requirement", { requiresNetwork: true }],
  ["storage requirement", { requiresStorage: true }],
  ["confirmation requirement", { requiresConfirmation: true }],
  ["execution requirement", { requiresExecution: true }]
]) {
  const metadata = safeMetadata(overrides);
  if (label === "missing mount") delete metadata.mountExistsExactlyOnce;
  assertBlocked(metadata, label);
}

for (const key of forbiddenBehaviorKeys) {
  assertBlocked(safeMetadata({ [key]: "unsafe" }), `forbidden behavior-capable field ${key}`);
}

for (const [label, metadata] of [
  ["malformed metadata number", 7],
  ["array metadata", []],
  ["null metadata", null],
  ["string metadata", "metadata"]
]) {
  assertBlocked(metadata, label);
}

for (const [label, source] of [
  ["public/app.js", app],
  ["public/index.html", index],
  ["server.js", server]
]) {
  assert(!source.includes(adapterFileName), `${label} must not reference adapter fixture`);
  assert(!source.includes(shellFileName), `${label} must not reference shell fixture`);
  assert(!source.includes(scriptName), `${label} must not reference Phase 13S QA`);
  assert(!source.match(/import\s*\([^)]*nexus-controlled-low-risk-renderer/i), `${label} must not dynamically import controlled low-risk renderer fixtures`);
  assert(!source.match(/require\s*\([^)]*nexus-controlled-low-risk-renderer/i), `${label} must not require controlled low-risk renderer fixtures`);
  assert(!source.match(/fetch\s*\([^)]*nexus-controlled-low-risk-renderer/i), `${label} must not fetch controlled low-risk renderer fixtures`);
}

for (const [label, source] of [
  ["adapter fixture", adapterSource],
  ["shell fixture", shellSource]
]) {
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
    /\binsertAdjacentHTML\b/
  ]) {
    assert(!forbiddenPattern.test(source), `${label} must not include runtime side-effect pattern ${forbiddenPattern}`);
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

assert(packageJson.includes(`"qa:nexus-controlled-low-risk-renderer-adapter-to-shell-fixture-integration": "node scripts/${scriptName}"`), "package.json must expose Phase 13S QA alias");
assert(suite.includes(`scripts/${scriptName}`), "nexus-workforce suite must include Phase 13S QA guard");

console.log("Nexus controlled low-risk renderer adapter-to-shell fixture integration QA passed.");
