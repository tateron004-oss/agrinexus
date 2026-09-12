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

function assertNotLoaded(source, label, moduleName) {
  assert(!source.includes(moduleName), `${label} must not load ${moduleName}.`);
}

function runRt9StandardUserLiveSourceBrowserValidationPlanQa() {
  const docName = "NEXUS_RT9_STANDARD_USER_LIVE_SOURCE_BROWSER_VALIDATION_PLAN.md";
  const qaName = "nexus-rt9-standard-user-live-source-browser-validation-plan-qa.js";
  const doc = read("docs", docName);
  const qaSource = read("scripts", qaName);
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    ["public", "nexus-standard-user-live-source-preview-gate.js"],
    ["public", "nexus-live-source-trust-freshness-policy.js"],
    ["public", "nexus-live-source-audit-logging-contract.js"],
    ["server", "nexus-live-source-orchestrator.js"],
    ["scripts", "nexus-rt6-standard-user-controlled-read-only-preview-gate-qa.js"],
    ["scripts", "nexus-rt7-source-trust-citation-freshness-policy-qa.js"],
    ["scripts", "nexus-rt8-live-source-retrieval-audit-logging-contract-qa.js"],
    ["docs", docName]
  ].forEach(parts => assert(exists(...parts), `${parts.join("/")} must exist for RT9.`));

  [
    "No manual browser validation is required for RT9",
    "Standard User runtime",
    "no live source preview UI",
    "no browser geolocation request",
    "What is the weather in Stockton, CA?",
    "Call my provider",
    "future flag-off validation",
    "future approved flag-on validation",
    "citations, freshness, confidence, trust tier",
    "no execution, provider contact, dispatch, payment, scheduling"
  ].forEach(term => assert(doc.includes(term), `RT9 doc must include ${term}.`));

  [
    "nexus-standard-user-live-source-preview-gate",
    "nexus-live-source-trust-freshness-policy",
    "nexus-live-source-audit-logging-contract",
    "nexus-live-source-orchestrator"
  ].forEach(moduleName => {
    assertNotLoaded(app, "public/app.js", moduleName);
    assertNotLoaded(index, "public/index.html", moduleName);
    assertNotLoaded(server, "server.js", moduleName);
  });

  [
    "fetch" + "(",
    "XML" + "HttpRequest",
    "http." + "request",
    "https." + "request",
    "write" + "File",
    "append" + "File",
    "local" + "Storage",
    "session" + "Storage",
    "db" + ".json",
    "window." + "open",
    "location." + "href",
    "navigator." + "geolocation",
    "media" + "Devices",
    "document" + ".",
    "add" + "EventListener"
  ].forEach(term => assert(!qaSource.includes(term), `RT9 QA must not include runtime side effect API: ${term}`));

  assert.equal(
    pkg.scripts["qa:nexus-rt9-standard-user-live-source-browser-validation-plan"],
    "node scripts/nexus-rt9-standard-user-live-source-browser-validation-plan-qa.js",
    "RT9 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-rt9-standard-user-live-source-browser-validation-plan-qa.js"), "RT9 QA must be in safe suites.");

  console.log("[nexus-rt9-standard-user-live-source-browser-validation-plan-qa] passed");
}

if (require.main === module) {
  try {
    runRt9StandardUserLiveSourceBrowserValidationPlanQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runRt9StandardUserLiveSourceBrowserValidationPlanQa
});
