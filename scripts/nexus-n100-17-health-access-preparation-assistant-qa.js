const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const healthAccess = require("../server/nexus-n100-health-access-preparation-assistant.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-n100-health-access-preparation-assistant.js");
  const doc = read("docs", "NEXUS_N100_17_HEALTH_ACCESS_PREPARATION_ASSISTANT.md");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  assert(exists("server", "nexus-n100-health-access-preparation-assistant.js"), "N100-17 health access module must exist.");
  assert(exists("docs", "NEXUS_N100_17_HEALTH_ACCESS_PREPARATION_ASSISTANT.md"), "N100-17 documentation must exist.");
  assert(exists("scripts", "nexus-n100-17-health-access-preparation-assistant-qa.js"), "N100-17 QA must exist.");

  [
    "SUPPORTED_HEALTH_ACCESS_ARTIFACTS",
    "BLOCKED_HEALTH_ACCESS_ACTIONS",
    "createN100HealthAccessPreparationArtifact",
    "noDiagnosisAuthorized",
    "noTelehealthSessionStarted",
    "noEmergencyDispatchAuthorized"
  ].forEach(term => assert(source.includes(term), `N100-17 source must include ${term}.`));

  [
    "prepare health access questions and checklists",
    "without giving medical advice, diagnosing, prescribing, refilling, booking, contacting providers",
    "not loaded by `public/app.js`, `public/index.html`, or `server.js`"
  ].forEach(term => assert(doc.includes(term), `N100-17 documentation must include ${term}.`));

  [
    "nexus-n100-health-access-preparation-assistant",
    "createN100HealthAccessPreparationArtifact",
    "SUPPORTED_HEALTH_ACCESS_ARTIFACTS"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load N100-17 runtime term: ${term}.`);
    assert(!index.includes(term), `public/index.html must not load N100-17 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load N100-17 runtime term: ${term}.`);
  });

  [
    "fetch(",
    "bookAppointment(",
    "contactProvider(",
    "startTelehealth(",
    "dispatchEmergency(",
    "prescriptionOrder(",
    "refillRequest(",
    "medicalRecordQuery(",
    "navigator.geolocation",
    "paymentIntent:",
    "providerHandoffAllowed: true",
    "executionAuthority: \"provider\""
  ].forEach(term => assert(!source.includes(term), `N100-17 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(
    pkg.scripts["qa:nexus-n100-17-health-access-preparation-assistant"],
    "node scripts/nexus-n100-17-health-access-preparation-assistant-qa.js",
    "N100-17 package QA alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-n100-17-health-access-preparation-assistant-qa.js"), "N100-17 QA must be wired into local-safe suites.");
}

function assertArtifact(prompt, expectedType) {
  const artifact = healthAccess.createN100HealthAccessPreparationArtifact({
    prompt,
    topic: prompt,
    nowIso: "2026-06-28T23:00:00.000Z"
  });
  assert.equal(healthAccess.isSafeN100HealthAccessPreparationArtifact(artifact), true, `${prompt} must be safe.`);
  assert.equal(artifact.artifactType, expectedType, `${prompt} artifact type mismatch.`);
  assert.equal(artifact.canExecute, false, `${prompt} must not execute.`);
  assert.equal(artifact.executionAuthority, "none", `${prompt} must have no execution authority.`);
  assert.equal(artifact.safetyPosture.noDiagnosisAuthorized, true, `${prompt} must not diagnose.`);
  assert.equal(artifact.safetyPosture.noProviderContactAuthorized, true, `${prompt} must not contact providers.`);
  healthAccess.BLOCKED_HEALTH_ACCESS_ACTIONS.forEach(action => {
    assert(artifact.blockedActions.includes(action), `${prompt} must block ${action}.`);
  });
}

function assertSupportedArtifacts() {
  assertArtifact("Prepare health access options.", "health_access_options_checklist");
  assertArtifact("Prepare telehealth checklist.", "telehealth_preparation_notes");
  assertArtifact("Prepare pharmacy support questions.", "pharmacy_support_questions");
  assertArtifact("Find mobile clinic access checklist.", "mobile_clinic_access_checklist");
  assertArtifact("Prepare transportation to care.", "transportation_to_care_prep");
  assertArtifact("Prepare provider directory questions.", "provider_directory_questions");
  const emergency = healthAccess.createN100HealthAccessPreparationArtifact({ prompt: "Emergency boundary notice." });
  assert.equal(emergency.artifactType, "emergency_boundary_notice", "Emergency notice must stay a boundary notice.");
  assert(emergency.body.includes("cannot dispatch emergency help"), "Emergency notice must not claim dispatch.");
}

function assertBlockedHealthExecution() {
  [
    "Diagnose me.",
    "Refill my medicine.",
    "Change my medicine.",
    "Book appointment.",
    "Call doctor.",
    "Start telehealth video call.",
    "Dispatch emergency help.",
    "Access my records.",
    "Pay the clinic.",
    "Share my location."
  ].forEach(prompt => {
    const artifact = healthAccess.createN100HealthAccessPreparationArtifact({ prompt });
    assert.equal(healthAccess.isSafeN100HealthAccessPreparationArtifact(artifact), true, `${prompt} blocked artifact must be safe.`);
    assert.equal(artifact.artifactType, "blocked_health_access_execution", `${prompt} must be blocked.`);
    assert.equal(artifact.status, "blocked_no_health_access_execution", `${prompt} must not execute.`);
  });
}

function runN100HealthAccessPreparationAssistantQa() {
  assertStaticSafety();
  assertSupportedArtifacts();
  assertBlockedHealthExecution();

  console.log(JSON.stringify({
    phase: "N100-17",
    supportedHealthAccessArtifacts: healthAccess.SUPPORTED_HEALTH_ACCESS_ARTIFACTS,
    blockedHealthAccessActions: healthAccess.BLOCKED_HEALTH_ACCESS_ACTIONS,
    standardUserRuntimeActivated: false,
    noDiagnosisAuthorized: true,
    noProviderContactAuthorized: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-n100-17-health-access-preparation-assistant-qa] passed");
}

if (require.main === module) {
  try {
    runN100HealthAccessPreparationAssistantQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runN100HealthAccessPreparationAssistantQa
});
