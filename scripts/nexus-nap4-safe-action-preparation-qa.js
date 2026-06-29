const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const prep = require("../server/nexus-safe-action-preparation.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function assertPrep(prompt, expectedType, allowed = true) {
  const result = prep.buildSafeActionPreparation(prompt);
  assert.equal(prep.isSafeActionPreparation(result), true, `${prompt} must produce safe preparation.`);
  assert.equal(result.preparationType, expectedType, `${prompt} must produce ${expectedType}.`);
  assert.equal(result.allowed, allowed, `${prompt} allowed mismatch.`);
  assert.equal(result.noExecutionAuthorized, true);
  assert.equal(result.noProviderContactAuthorized, true);
  assert.equal(result.noLocationPermissionRequested, true);
  assert.equal(result.noBackendWritePerformed, true);
  assert.equal(result.noPendingRealWorldActionCreated, true);
  assert.match(result.safetyNotice, /has not sent|called|submitted|booked|paid|purchased|dispatched/i);
  return result;
}

function runNap4SafeActionPreparationQa() {
  const source = read("server", "nexus-safe-action-preparation.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "checklist",
    "call-script",
    "message-draft",
    "provider-questions",
    "application-checklist",
    "resume-keywords",
    "comparison-table",
    "training-plan",
    "farm-observation-checklist",
    "learning-plan",
    "copyOnly",
    "userMustReview",
    "noExecutionAuthorized"
  ].forEach(term => assert(source.includes(term), `NAP4 safe preparation must include ${term}.`));

  [
    "window.open",
    "location.href",
    "navigator.geolocation",
    "getCurrentPosition",
    "getUserMedia",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "writeFileSync",
    "executionAuthority: true",
    "providerHandoffAllowed: true"
  ].forEach(term => assert(!source.includes(term), `NAP4 safe preparation must not introduce unsafe behavior: ${term}`));

  assert.equal(
    pkg.scripts["qa:nexus-nap4-safe-action-preparation"],
    "node scripts/nexus-nap4-safe-action-preparation-qa.js",
    "NAP4 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-nap4-safe-action-preparation-qa.js"), "NAP4 QA must be wired into local-safe suites.");

  assertPrep("Draft questions for this training provider.", "provider-questions");
  assertPrep("Create a checklist for applying.", "application-checklist");
  assertPrep("Write a message I can copy.", "message-draft");
  assertPrep("Prepare a call script for a training provider.", "call-script");
  assertPrep("Suggest resume keywords for farm jobs.", "resume-keywords");
  assertPrep("Compare the top two programs.", "comparison-table");
  assertPrep("Create a training plan for irrigation.", "training-plan");
  assertPrep("Help with this crop disease issue.", "farm-observation-checklist");
  assertPrep("Make a learning plan for agriculture technician work.", "learning-plan");

  assertPrep("Call them for me.", "checklist", false);
  assertPrep("Apply for me.", "checklist", false);
  assertPrep("Buy fertilizer for me.", "checklist", false);

  console.log(JSON.stringify({
    draftPreparation: true,
    checklistPreparation: true,
    providerQuestions: true,
    comparisonPreparation: true,
    blockedExecutionDowngraded: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-nap4-safe-action-preparation-qa] passed");
}

if (require.main === module) {
  try {
    runNap4SafeActionPreparationQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runNap4SafeActionPreparationQa
});
