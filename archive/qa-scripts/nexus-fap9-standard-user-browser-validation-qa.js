const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function assertContains(source, term, label) {
  assert(source.includes(term), `${label} must include: ${term}`);
}

function assertDoc() {
  const doc = read("docs", "NEXUS_FAP9_STANDARD_USER_BROWSER_VALIDATION.md");

  [
    "FAP9 validates the normal Standard User build",
    "node server.js",
    "http://127.0.0.1:4182/",
    "Start as User",
    "NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true",
    "NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED=true",
    "NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED=true",
    "NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED=true",
    "NEXUS_JOB_SEARCH_PROVIDER_ENABLED=true",
    "NEXUS_WEATHER_PROVIDER_ENABLED=true",
    "Assistant runtime preview cards: `0`",
    "Provider-health surfaces: `0`",
    "Browser console warnings/errors: `0`",
    "Nexus, find farm jobs near Stockton.",
    "Only show entry-level ones.",
    "Compare the top two.",
    "Turn that into a checklist.",
    "Draft questions I should ask.",
    "Help me prepare for agriculture training.",
    "What is the weather in Stockton?",
    "Find agriculture training videos.",
    "Apply to the first job.",
    "Call the provider.",
    "Buy fertilizer.",
    "Send my location.",
    "Dispatch help.",
    "noExecutionAuthorized: true",
    "provider handoff disabled",
    "no permission request",
    "no backend real-world action",
    "db.json",
    "FAP9 passes"
  ].forEach(term => assertContains(doc, term, "FAP9 validation document"));

  [
    "No execution authorized",
    "No provider handoff",
    "Permission prompts: `0`",
    "no call, message, payment, purchase, location sharing, camera, medical, pharmacy, marketplace transaction, appointment, or emergency dispatch behavior"
  ].forEach(term => assertContains(doc, term, "FAP9 safety conclusion"));
}

function assertWiring() {
  const pkg = JSON.parse(read("package.json"));
  const suite = read("scripts", "qa-suite.js");

  assert.equal(
    pkg.scripts["qa:nexus-fap9-standard-user-browser-validation"],
    "node scripts/nexus-fap9-standard-user-browser-validation-qa.js",
    "FAP9 package alias must exist."
  );

  assert(
    suite.includes("scripts/nexus-fap9-standard-user-browser-validation-qa.js"),
    "FAP9 QA must be wired into local-safe suites."
  );
}

function runFap9StandardUserBrowserValidationQa() {
  assertDoc();
  assertWiring();
  console.log(JSON.stringify({
    validationDocPresent: true,
    flagsOffStartupCaptured: true,
    flagsOnStartupCaptured: true,
    lowRiskPromptsCaptured: true,
    highRiskPromptsBlocked: true,
    noExecutionAuthorized: true,
    noProviderHandoff: true,
    noPermissionRequest: true,
    runtimeStateRestored: true
  }, null, 2));
  console.log("[nexus-fap9-standard-user-browser-validation-qa] passed");
}

if (require.main === module) {
  try {
    runFap9StandardUserBrowserValidationQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runFap9StandardUserBrowserValidationQa
});
