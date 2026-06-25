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

function extractSection(source, startHeading, endHeading) {
  const start = source.indexOf(startHeading);
  assert(start >= 0, `section must exist: ${startHeading}`);
  const end = endHeading ? source.indexOf(endHeading, start + startHeading.length) : -1;
  return source.slice(start, end >= 0 ? end : source.length);
}

const docName = "NEXUS_CONTROLLED_LOW_RISK_RENDERER_RUNTIME_ADAPTER_CONTRACT.md";
const scriptName = "nexus-controlled-low-risk-renderer-runtime-adapter-contract-qa.js";
const shellFileName = "nexus-controlled-low-risk-renderer-shell.js";
const shellPath = "scripts/fixtures/nexus-controlled-low-risk-renderer-shell.js";
const mountId = "nexus-controlled-low-risk-renderer-root";
const flagName = "enableControlledLowRiskRendererVisibleUi";

assert(exists("docs", docName), "Phase 13Q runtime adapter contract doc must exist");
assert(exists("scripts", "fixtures", shellFileName), "Phase 13P shell must remain under scripts/fixtures");
assert(!shellPath.startsWith("public/"), "non-runtime shell must not be under public/");

const doc = read("docs", docName);
const shellSource = read("scripts", "fixtures", shellFileName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "# Nexus Controlled Low-Risk Renderer Runtime Adapter Contract",
  "runtime adapter",
  "default-off",
  "`enableControlledLowRiskRendererVisibleUi === true`",
  "mount exists exactly once",
  "text-only",
  "no provider handoff",
  "no permission",
  "no confirmation",
  "no execution",
  "no navigation",
  "no storage",
  "no network"
], "Phase 13Q doc required terms");

assertIncludes(doc, [
  "## A. Phase Purpose",
  "## B. Adapter Boundary Definition",
  "## C. Rejected Runtime Data",
  "## D. Default-Off Runtime Rules",
  "## E. Hidden Mount Point Preflight Rules",
  "## F. Category Boundary",
  "## G. Side-Effect Prohibition",
  "## H. Future Activation Boundary",
  "## I. Phase 13Q Acceptance Criteria"
], "Phase 13Q doc sections");

const allowedSection = extractSection(doc, "The adapter may only pass plain, inert, text-oriented metadata. Allowed adapter fields are limited to:", "The adapter is not execution authority.");
const rejectedSection = extractSection(doc, "## C. Rejected Runtime Data", "## D. Default-Off Runtime Rules");

for (const allowed of [
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
]) {
  assert(allowedSection.includes(`\`${allowed}\``), `allowed adapter field list must include ${allowed}`);
}

for (const forbidden of [
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
]) {
  assert(!allowedSection.includes(`\`${forbidden}\``), `forbidden behavior field must not appear in allowed adapter field list: ${forbidden}`);
  assert(rejectedSection.includes(`\`${forbidden}\``), `rejected runtime data section must include forbidden field: ${forbidden}`);
}

assertIncludes(doc, [
  "true as a string",
  "`1`",
  "\"1\"",
  "yes",
  "on",
  "missing flag",
  "null",
  "undefined",
  "object",
  "array",
  "environment typo",
  "server-side truthy value"
], "default-off rejected flag values");

assertIncludes(doc, [
  "mount has `aria-hidden=\"true\"`",
  "mount is default-empty",
  "mount has `data-visible-renderer-enabled=\"false\"` until activation",
  "mount contains no children before rendering",
  "mount has no event handlers",
  "mount has no links",
  "mount has no buttons",
  "mount has no forms"
], "hidden mount preflight rules");

for (const category of [
  "agriculture_training",
  "irrigation_learning",
  "farm_jobs_workforce_discovery",
  "agritrade_marketplace_preview",
  "crop_issue_education_help",
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
]) {
  assert(doc.includes(`\`${category}\``), `Phase 13Q doc must include category: ${category}`);
}

for (const runtimeSource of [
  ["public/index.html", index],
  ["public/app.js", app],
  ["server.js", server]
]) {
  const [label, source] = runtimeSource;
  assert(!source.includes(shellFileName), `${label} must not load or reference the non-runtime shell`);
  assert(!source.includes(scriptName), `${label} must not load or reference Phase 13Q QA`);
  assert(!source.includes("nexus-controlled-low-risk-renderer-runtime-adapter"), `${label} must not reference a runtime adapter`);
}

assert(!exists("public", "nexus-controlled-low-risk-renderer-runtime-adapter.js"), "no runtime adapter file may exist under public/");
assert(!exists("public", "nexus-controlled-low-risk-renderer-shell.js"), "shell must not be copied under public/");
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
assert(!app.includes(mountId), "public/app.js must not query the hidden mount point during startup");
assert(!server.includes(mountId), "server.js must not reference the hidden mount point");
assert(shellSource.includes("evaluateControlledLowRiskRendererEligibility"), "Phase 13P shell helper must remain present");
assert(shellSource.includes("buildControlledLowRiskRendererTextModel"), "Phase 13P shell text model helper must remain present");

assert(packageJson.includes(`"qa:nexus-controlled-low-risk-renderer-runtime-adapter-contract": "node scripts/${scriptName}"`), "package.json must expose Phase 13Q QA alias");
assert(suite.includes(`scripts/${scriptName}`), "nexus-workforce suite must include Phase 13Q QA guard");

console.log("Nexus controlled low-risk renderer runtime adapter contract QA passed.");
