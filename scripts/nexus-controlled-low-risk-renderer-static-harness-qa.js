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

const docName = "NEXUS_CONTROLLED_LOW_RISK_RENDERER_STATIC_HARNESS_QA.md";
const scriptName = "nexus-controlled-low-risk-renderer-static-harness-qa.js";
const mountId = "nexus-controlled-low-risk-renderer-root";
const flagName = "enableControlledLowRiskRendererVisibleUi";

const allowedCategories = new Set([
  "agriculture training",
  "irrigation learning",
  "farm jobs/workforce discovery",
  "agritrade marketplace preview",
  "crop issue education/help guidance"
]);

function evaluateControlledLowRiskRendererEligibility(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) return false;
  if (input.enableControlledLowRiskRendererVisibleUi !== true) return false;
  if (input.mountExistsExactlyOnce !== true) return false;
  if (input.mountHidden !== true) return false;
  if (input.mountEmpty !== true) return false;

  const category = typeof input.category === "string" ? input.category.trim().toLowerCase() : "";
  if (!allowedCategories.has(category)) return false;

  if (input.executionAllowed !== false) return false;
  if (input.providerHandoff !== false) return false;
  if (input.permissionRequest !== false) return false;
  if (input.navigationAllowed !== false) return false;

  for (const blockedNeed of [
    "requiresRawHtml",
    "requiresButton",
    "requiresLink",
    "requiresHandler",
    "requiresNetwork",
    "requiresStorage",
    "requiresConfirmation",
    "requiresExecution"
  ]) {
    if (input[blockedNeed] === true) return false;
  }

  return true;
}

const baseAllowedFixture = Object.freeze({
  enableControlledLowRiskRendererVisibleUi: true,
  mountExistsExactlyOnce: true,
  mountHidden: true,
  mountEmpty: true,
  category: "agriculture training",
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
  return { ...baseAllowedFixture, ...overrides };
}

for (const category of allowedCategories) {
  assert.equal(
    evaluateControlledLowRiskRendererEligibility(fixture({ category })),
    true,
    `allowlisted low-risk fixture should be eligible in isolated harness: ${category}`
  );
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
  fixture({ category: "call" }),
  fixture({ category: "message" }),
  fixture({ category: "SMS" }),
  fixture({ category: "WhatsApp" }),
  fixture({ category: "Telegram" }),
  fixture({ category: "location" }),
  fixture({ category: "map permission" }),
  fixture({ category: "camera" }),
  fixture({ category: "microphone" }),
  fixture({ category: "buy" }),
  fixture({ category: "sell" }),
  fixture({ category: "payment" }),
  fixture({ category: "checkout" }),
  fixture({ category: "emergency" }),
  fixture({ category: "appointment" }),
  fixture({ category: "booking" }),
  fixture({ category: "provider handoff" }),
  fixture({ category: "account connection" }),
  fixture({ category: "identity-sensitive action" }),
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
  assert.equal(evaluateControlledLowRiskRendererEligibility(input), false, "blocked fixture should not be eligible");
}

assert(exists("docs", docName), "Phase 13O static harness QA doc must exist");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "# Nexus Controlled Low-Risk Renderer Static Harness QA",
  "Phase 13O adds a static QA harness",
  "default-off, non-runtime phase",
  "isolated fixture objects only",
  "must not be imported by `public/app.js`",
  "must not render DOM in the Standard User app",
  "must not change browser behavior",
  "must not create visible UI",
  "must not add click handlers, links, buttons, provider handoffs, permission prompts, confirmations, network calls, storage writes, navigation, or execution",
  "The Standard User safety posture remains exactly the same as after Phase 13N"
], "Phase 13O doc boundary");

assertIncludes(doc, [
  "`enableControlledLowRiskRendererVisibleUi === true`",
  "mount exists exactly once",
  "mount is hidden",
  "mount is empty",
  "category is allowlisted low-risk",
  "`executionAllowed === false`",
  "`providerHandoff === false`",
  "`permissionRequest === false`",
  "`navigationAllowed === false` for the first visible phase",
  "`requiresRawHtml !== true`",
  "`requiresButton !== true`",
  "`requiresLink !== true`",
  "`requiresHandler !== true`",
  "`requiresNetwork !== true`",
  "`requiresStorage !== true`",
  "`requiresConfirmation !== true`",
  "`requiresExecution !== true`"
], "Phase 13O fixture contract");

assertIncludes(doc, [
  "agriculture training",
  "irrigation learning",
  "farm jobs/workforce discovery",
  "AgriTrade marketplace preview",
  "crop issue education/help guidance"
], "Phase 13O allowed fixtures");

assertIncludes(doc, [
  "call",
  "message",
  "SMS",
  "WhatsApp",
  "Telegram",
  "location",
  "map permission",
  "camera",
  "microphone",
  "buy",
  "sell",
  "payment",
  "checkout",
  "emergency",
  "appointment",
  "booking",
  "provider handoff",
  "account connection",
  "identity-sensitive action"
], "Phase 13O blocked fixtures");

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

for (const runtimeSource of [
  ["public/index.html", index],
  ["public/app.js", app],
  ["server.js", server]
]) {
  const [label, source] = runtimeSource;
  assert(!source.includes(scriptName), `${label} must not import or reference the Phase 13O static harness`);
}

assert(!index.match(/<script[^>]+nexus-controlled-low-risk-renderer-static-harness/i), "public/index.html must not load the static harness");
assert(!index.match(/<script[^>]+nexus-low-risk/i), "public/index.html must not add low-risk renderer script tags");
assert(!index.includes("data-nexus-renderer-mode=\"inert\""), "public/index.html must not render inert card output");
assert(!index.includes("controlled-low-risk-renderer-card"), "public/index.html must not include visible renderer cards");
assert(!index.includes("data-standard-user-low-risk-renderer"), "public/index.html must not include active renderer markers");

assert(!app.includes(flagName), "public/app.js must not activate or consume the future visible renderer feature flag");
assert(!server.includes(flagName), "server.js must not expose the future visible renderer feature flag");
assert(!app.includes(mountId), "public/app.js must not query the hidden mount point during startup");
assert(!server.includes(mountId), "server.js must not reference the hidden mount point");

for (const source of [index, app, server]) {
  for (const forbidden of [
    "renderNexusLowRiskInertPreview",
    "buildNexusLowRiskInertRendererPrototype",
    "appendChild(createNexusControlledLowRiskInertCardForTest",
    "localStorage.enableControlledLowRiskRendererVisibleUi",
    "sessionStorage.enableControlledLowRiskRendererVisibleUi"
  ]) {
    assert(!source.includes(forbidden), `runtime sources must not introduce forbidden renderer wiring: ${forbidden}`);
  }
}

assert(app.includes("function createNexusControlledLowRiskInertCardForTest"), "existing inert test helper must remain declared");
const helperDeclaration = app.indexOf("function createNexusControlledLowRiskInertCardForTest");
const afterHelperDeclaration = app.slice(helperDeclaration + "function createNexusControlledLowRiskInertCardForTest".length);
assert(!afterHelperDeclaration.match(/createNexusControlledLowRiskInertCardForTest\s*\(/), "inert helper must not be called from Standard User startup/runtime flow");

assert(packageJson.includes(`"qa:nexus-controlled-low-risk-renderer-static-harness": "node scripts/${scriptName}"`), "package.json must expose Phase 13O QA alias");
assert(suite.includes(`scripts/${scriptName}`), "nexus-workforce suite must include Phase 13O QA guard");

console.log("Nexus controlled low-risk renderer static harness QA passed.");
