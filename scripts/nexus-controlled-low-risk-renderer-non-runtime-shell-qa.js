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

const docName = "NEXUS_CONTROLLED_LOW_RISK_RENDERER_NON_RUNTIME_IMPLEMENTATION_SHELL.md";
const scriptName = "nexus-controlled-low-risk-renderer-non-runtime-shell-qa.js";
const shellRelativePath = "scripts/fixtures/nexus-controlled-low-risk-renderer-shell.js";
const shellRequirePath = "./fixtures/nexus-controlled-low-risk-renderer-shell.js";
const shellFileName = "nexus-controlled-low-risk-renderer-shell.js";
const mountId = "nexus-controlled-low-risk-renderer-root";
const flagName = "enableControlledLowRiskRendererVisibleUi";

assert(exists("docs", docName), "Phase 13P non-runtime shell doc must exist");
assert(exists("scripts", "fixtures", shellFileName), "Phase 13P non-runtime shell must exist under scripts/fixtures");
assert(!shellRelativePath.startsWith("public/"), "Phase 13P shell must not live under public/");

const shell = require(shellRequirePath);
const doc = read("docs", docName);
const shellSource = read("scripts", "fixtures", shellFileName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "# Nexus Controlled Low-Risk Renderer Non-Runtime Implementation Shell",
  "Phase 13P creates a non-runtime implementation shell",
  "not an activation phase",
  "not connected to the Standard User app",
  "not imported by `public/app.js`",
  "does not render visible UI in production",
  "The Standard User build remains default-off",
  "hidden renderer mount point remains hidden and default-empty",
  "No action has been taken",
  "Future Activation Boundary"
], "Phase 13P doc");

assertIncludes(doc, [
  "no DOM access",
  "no browser globals",
  "no storage",
  "no network calls",
  "no navigation",
  "no event listeners",
  "no timers",
  "no provider handoff",
  "no permission calls",
  "no confirmation calls",
  "no execution dispatch"
], "Phase 13P shell purity terms");

assertIncludes(doc, [
  "`enableControlledLowRiskRendererVisibleUi === true`",
  "`mountExistsExactlyOnce === true`",
  "`mountHidden === true`",
  "`mountEmpty === true`",
  "`executionAllowed === false`",
  "`providerHandoff === false`",
  "`permissionRequest === false`",
  "`navigationAllowed === false`",
  "`requiresRawHtml !== true`",
  "`requiresButton !== true`",
  "`requiresLink !== true`",
  "`requiresHandler !== true`",
  "`requiresNetwork !== true`",
  "`requiresStorage !== true`",
  "`requiresConfirmation !== true`",
  "`requiresExecution !== true`"
], "Phase 13P eligibility contract");

const allowlistedCategories = [
  "agriculture_training",
  "irrigation_learning",
  "farm_jobs_workforce_discovery",
  "agritrade_marketplace_preview",
  "crop_issue_education_help"
];

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

assert.deepEqual(shell.ALLOWED_LOW_RISK_CATEGORIES, allowlistedCategories, "shell allowlist must match Phase 13P categories");

const baseEligibleFixture = Object.freeze({
  enableControlledLowRiskRendererVisibleUi: true,
  mountExistsExactlyOnce: true,
  mountHidden: true,
  mountEmpty: true,
  category: "agriculture_training",
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

function fixture(overrides = {}) {
  return { ...baseEligibleFixture, ...overrides };
}

for (const category of allowlistedCategories) {
  const candidate = fixture({ category });
  assert.equal(shell.evaluateControlledLowRiskRendererEligibility(candidate), true, `${category} should be eligible only in isolated fixtures`);
  const model = shell.buildControlledLowRiskRendererTextModel(candidate);
  assert(model && typeof model === "object" && !Array.isArray(model), `${category} should return a text-only plain object`);
  assert.equal(model.category, category, `${category} model should keep category`);
  assert.equal(typeof model.title, "string", `${category} model title should be text`);
  assert.equal(typeof model.summary, "string", `${category} model summary should be text`);
  assert(Array.isArray(model.previewLines), `${category} model previewLines should be an array`);
  assert.equal(typeof model.safetyLabel, "string", `${category} model safetyLabel should be text`);
}

for (const input of [
  null,
  undefined,
  "",
  [],
  "malformed",
  fixture({ enableControlledLowRiskRendererVisibleUi: false }),
  fixture({ enableControlledLowRiskRendererVisibleUi: null }),
  fixture({ enableControlledLowRiskRendererVisibleUi: undefined }),
  fixture({ enableControlledLowRiskRendererVisibleUi: "true" }),
  fixture({ enableControlledLowRiskRendererVisibleUi: 1 }),
  fixture({ mountExistsExactlyOnce: false }),
  fixture({ mountHidden: false }),
  fixture({ mountEmpty: false }),
  fixture({ category: "unknown_low_risk" }),
  ...blockedCategories.map(category => fixture({ category })),
  fixture({ executionAllowed: true }),
  fixture({ providerHandoff: true }),
  fixture({ permissionRequest: true }),
  fixture({ navigationAllowed: true }),
  fixture({ requiresRawHtml: true }),
  fixture({ requiresButton: true }),
  fixture({ requiresLink: true }),
  fixture({ requiresHandler: true }),
  fixture({ requiresNetwork: true }),
  fixture({ requiresStorage: true }),
  fixture({ requiresConfirmation: true }),
  fixture({ requiresExecution: true })
]) {
  assert.equal(shell.evaluateControlledLowRiskRendererEligibility(input), false, "blocked or malformed fixture should not be eligible");
  assert.equal(shell.buildControlledLowRiskRendererTextModel(input), null, "ineligible fixture should return null text model");
}

const forbiddenModelKeys = [
  "html",
  "rawHtml",
  "button",
  "buttons",
  "link",
  "links",
  "href",
  "onClick",
  "handler",
  "action",
  "actionId",
  "provider",
  "permission",
  "confirmation",
  "navigation",
  "execute",
  "dispatch"
];

for (const category of allowlistedCategories) {
  const model = shell.buildControlledLowRiskRendererTextModel(fixture({ category }));
  for (const key of forbiddenModelKeys) {
    assert(!(key in model), `eligible text model must not contain forbidden key ${key}`);
  }
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
  assert(!forbiddenApi.test(shellSource), `non-runtime shell must not include forbidden browser/API pattern: ${forbiddenApi}`);
}

for (const runtimeSource of [
  ["public/index.html", index],
  ["public/app.js", app],
  ["server.js", server]
]) {
  const [label, source] = runtimeSource;
  assert(!source.includes(shellFileName), `${label} must not load or reference the Phase 13P shell`);
  assert(!source.includes(scriptName), `${label} must not load or reference the Phase 13P QA script`);
}

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

assert(!index.match(/<script[^>]+nexus-controlled-low-risk-renderer/i), "public/index.html must not load controlled low-risk renderer scripts");
assert(!index.match(/<script[^>]+nexus-low-risk/i), "public/index.html must not add low-risk renderer script tags");
assert(!index.includes("data-nexus-renderer-mode=\"inert\""), "public/index.html must not render inert card output");
assert(!index.includes("controlled-low-risk-renderer-card"), "public/index.html must not include visible renderer cards");
assert(!app.includes(flagName), "public/app.js must not consume the future visible renderer feature flag");
assert(!server.includes(flagName), "server.js must not expose the future visible renderer feature flag");
assert(app.includes("function paintControlledStagedActionPreview"), "public/app.js may only query the hidden mount through the Sprint D6 flag-gated staged preview painter");
assert(app.includes(`$("#${mountId}")`), "public/app.js hidden mount query must remain scoped to controlled staged preview painting");
assert(app.includes('root.hidden = !html'), "public/app.js must keep the hidden mount hidden when no flag-gated preview exists");
assert(app.includes('root.dataset.executionAllowed = "false"'), "public/app.js must preserve no-execution mount metadata");
assert(app.includes('root.dataset.providerHandoff = "false"'), "public/app.js must preserve no-provider-handoff mount metadata");
assert(app.includes('root.dataset.permissionRequest = "false"'), "public/app.js must preserve no-permission-request mount metadata");
assert(!server.includes(mountId), "server.js must not reference the hidden mount point");

assert(packageJson.includes(`"qa:nexus-controlled-low-risk-renderer-non-runtime-shell": "node scripts/${scriptName}"`), "package.json must expose Phase 13P QA alias");
assert(suite.includes(`scripts/${scriptName}`), "nexus-workforce suite must include Phase 13P QA guard");

console.log("Nexus controlled low-risk renderer non-runtime shell QA passed.");
