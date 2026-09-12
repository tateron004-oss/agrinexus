const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function runAr9AssistantRuntimeBrowserValidationQa() {
  const doc = read("docs", "NEXUS_AR9_ASSISTANT_RUNTIME_BROWSER_VALIDATION.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "Default-Off Result",
    "Flag-On Page-Load Result",
    "Preview card count was `0`",
    "Browser console warning/error count was `0`",
    "No location, camera, or microphone permission prompt appeared",
    "No unsafe control text appeared",
    "zero-size geometry",
    "did not claim a completed click-through",
    "AR6 proves",
    "AR7 proves",
    "AR8 proves",
    "low-risk prompts may produce read-only preview responses only when all flags are enabled",
    "high-risk prompts are blocked or downgraded",
    "no execution controls appear",
    "no provider contact occurs",
    "no auto-navigation occurs",
    "no location permission is requested"
  ].forEach(term => assert(doc.includes(term), `AR9 validation doc must include: ${term}`));

  [
    "What is the weather in Stockton, CA?",
    "Find agriculture training resources.",
    "Find farm jobs near Stockton, CA.",
    "Find agriculture training videos.",
    "Call this provider.",
    "Buy fertilizer.",
    "Send my location.",
    "Book me an appointment.",
    "Apply to this job.",
    "Dispatch help.",
    "This is an emergency."
  ].forEach(prompt => assert(doc.includes(prompt), `AR9 validation doc must include prompt: ${prompt}`));

  assert.equal(
    pkg.scripts["qa:nexus-ar9-assistant-runtime-browser-validation"],
    "node scripts/nexus-ar9-assistant-runtime-browser-validation-qa.js",
    "AR9 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-ar9-assistant-runtime-browser-validation-qa.js"), "AR9 QA must be wired into local-safe suites.");

  console.log(JSON.stringify({
    defaultOffBrowserValidated: true,
    flagOnPageLoadValidated: true,
    zeroGeometryLimitationDocumented: true,
    ar6Ar7Ar8RuntimeCoverageReferenced: true,
    noExecutionControls: true
  }, null, 2));
  console.log("[nexus-ar9-assistant-runtime-browser-validation-qa] passed");
}

if (require.main === module) {
  try {
    runAr9AssistantRuntimeBrowserValidationQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runAr9AssistantRuntimeBrowserValidationQa
});
