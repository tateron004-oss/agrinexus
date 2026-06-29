const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function assertIncludes(source, term, label) {
  assert(source.includes(term), `${label} must include: ${term}`);
}

function assertCloseoutDoc() {
  const doc = read("docs", "NEXUS_FAP10_FULL_ASSISTANT_POWER_CLOSEOUT.md");

  [
    "FAP10 closes the Nexus Full Assistant Power lane",
    "FAP4 added safe artifact outputs",
    "FAP5 added safe assistant task planning",
    "FAP6 added safe local assistant tools",
    "FAP7 connected existing user-controlled voice transcript routing",
    "FAP8 added provider-health and reliability polish",
    "FAP9 validated the Standard User browser path",
    "answer with richer assistant preview cards",
    "show source/provider labels",
    "safe follow-up prompts",
    "prepare checklists, comparisons, source summaries, training plans, provider questions, call-script text, and message/email draft text without sending anything",
    "build safe multi-step plans",
    "copy preview text, clear preview, and restart task",
    "provider-health/unavailable/retry guidance",
    "flags off: no assistant runtime card appears on startup",
    "flags on: low-risk prompts may produce read-only preview cards",
    "high-risk prompts are blocked or safely downgraded",
    "provider handoff remains disabled",
    "no provider contact is initiated",
    "no secrets are cached or rendered",
    "no new always-on microphone behavior was added",
    "FAP9 browser validation passed",
    "node scripts/qa-suite.js nexus-workforce",
    "node scripts/qa-suite.js all-safe",
    "Remaining Blockers",
    "Next Sprint Direction"
  ].forEach(term => assertIncludes(doc, term, "FAP10 closeout document"));

  [
    "autonomous real-world execution",
    "calls, SMS, WhatsApp, Telegram, or email sending",
    "purchases, payments, checkout, or marketplace transactions",
    "appointment booking or application submission",
    "medical diagnosis, prescription, refill, pharmacy, telehealth, or emergency execution",
    "browser geolocation, location sharing, camera capture, or image diagnosis",
    "hidden auto-navigation or backend action writes"
  ].forEach(term => assertIncludes(doc, term, "FAP10 blocked boundary list"));
}

function assertWiring() {
  const pkg = JSON.parse(read("package.json"));
  const suite = read("scripts", "qa-suite.js");

  assert.equal(
    pkg.scripts["qa:nexus-fap10-full-assistant-power-closeout"],
    "node scripts/nexus-fap10-full-assistant-power-closeout-qa.js",
    "FAP10 package alias must exist."
  );

  assert(
    suite.includes("scripts/nexus-fap10-full-assistant-power-closeout-qa.js"),
    "FAP10 QA must be wired into local-safe suites."
  );
}

function runFap10FullAssistantPowerCloseoutQa() {
  assertCloseoutDoc();
  assertWiring();
  console.log(JSON.stringify({
    closeoutDocPresent: true,
    fap4ThroughFap9Summarized: true,
    standardUserBehaviorCaptured: true,
    providerSourceBehaviorCaptured: true,
    followUpPlannerToolsVoiceCaptured: true,
    browserValidationCaptured: true,
    remainingBlockersCaptured: true,
    nextSprintDirectionCaptured: true
  }, null, 2));
  console.log("[nexus-fap10-full-assistant-power-closeout-qa] passed");
}

if (require.main === module) {
  try {
    runFap10FullAssistantPowerCloseoutQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runFap10FullAssistantPowerCloseoutQa
});
