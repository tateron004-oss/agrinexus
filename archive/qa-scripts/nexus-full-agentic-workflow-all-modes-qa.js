const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const brain = require(path.join(root, "server/nexusAgenticBrainRuntime.js"));
const read = relative => fs.readFileSync(path.join(root, relative), "utf8");
const app = read("public/app.js");
const qaSuite = read("scripts/qa-suite.js");
const packageJson = JSON.parse(read("package.json"));

async function run(command, db) {
  const result = await brain.handleCommand({ command }, db, {});
  assert(result.ok === true || result.status === "blocked_emergency", `${command} should be handled or safely blocked`);
  const serialized = JSON.stringify(result);
  assert(!/sent successfully|called successfully|payment processed|appointment booked|drone dispatched|mobile clinic dispatched|provider contacted|diagnosed|prescribed/i.test(serialized), `${command} must not claim unsafe live execution`);
  return result;
}

(async () => {
  const db = { profile: {} };

  const capability = await run("What can Nexus do across agriculture, health, jobs, learning, maps, marketplace, and communications?", db);
  assert.equal(capability.status, "capability_summary");
  [
    "healthcare_chronic_care",
    "provider_care_team",
    "agriculture",
    "marketplace_agritrade",
    "workforce_jobs",
    "learning_literacy",
    "maps_location_planning",
    "communications",
    "voice_natural_command",
    "multilingual",
    "offline",
    "reminder_continuity",
    "safety_confirmation",
    "admin_developer_testing",
    "production_capability_status"
  ].forEach(mode => assert(capability.modesCovered.includes(mode), `capability response must cover ${mode}`));

  let result = await run("Nexus, help me with my blood pressure and remind me tomorrow.", db);
  assert.equal(result.task.type, "medical_follow_up");
  assert(result.task.chronicIntake, "healthcare/chronic-care mode must create local intake");
  assert.equal(result.task.reminderRequest.timing, "tomorrow");

  result = await run("Prepare a provider summary and mobile clinic request for hypertension.", db);
  assert(result.task.providerReport, "provider/care-team mode must prepare provider summary");
  assert(result.task.preparationPackages.some(item => item.packageId.startsWith("nexus-mobile-clinic-request")), "mobile clinic prep package must be created");
  assert(result.providerQueue && result.providerQueue.submittedLive === false, "provider queue must remain local");

  result = await run("Help me with crop disease, training, and a drone mission request.", db);
  assert.equal(result.task.type, "drone_service_request");
  assert(result.task.agriculturePlan, "agriculture mode must prepare agriculture plan");
  assert(result.task.safetyGate.blockedCategories.includes("drone_dispatch"), "drone dispatch must be explicitly gated");

  result = await run("Find farm jobs and create a training pathway.", db);
  assert.equal(result.task.type, "workforce_support");
  assert(result.task.workforcePathway, "workforce/jobs mode must prepare pathway");

  result = await run("Help me sell produce on AgriTrade, but do not take payment.", db);
  assert.equal(result.task.type, "marketplace_inquiry");
  assert(result.task.agriculturePlan.noMarketplaceTransaction, "marketplace mode must stay transaction-safe");
  assert(result.task.safetyGate.blockedCategories.includes("payment"), "payment must be gated");

  result = await run("Plan a field visit route and remind me tonight.", db);
  assert.equal(result.task.type, "field_visit_plan");
  assert.equal(result.task.reminderRequest.timing, "tonight");

  result = await run("Prepare a WhatsApp message to a provider, but do not send it.", db);
  assert.equal(result.task.type, "communications_draft");
  assert(result.task.safetyGate.blockedCategories.includes("message"), "communications mode must gate message send");

  result = await run("Switch to Swahili and help me find agriculture training.", db);
  assert.equal(result.task.type, "agriculture_training");
  assert(result.task.agriculturePlan, "multilingual agriculture command must still route");

  result = await run("Use French and prepare a diabetes telehealth summary.", db);
  assert.equal(result.task.type, "medical_follow_up");
  assert(result.task.preparationPackages.some(item => item.packageId.startsWith("nexus-telehealth-prep")), "French telehealth command must prepare telehealth package");

  result = await run("Use Arabic and show what Nexus can help with.", db);
  assert.equal(result.status, "capability_summary", "Arabic capability command must not become a dead-end task");

  result = await run("Continue my last task.", db);
  assert.equal(result.status, "resumed", "continuity mode must resume active task");

  result = await run("Show my active cases.", db);
  assert.equal(result.status, "capability_summary");
  assert(result.activeTaskCount >= 1, "active case summary must include existing work");

  result = await run("Cancel that task.", db);
  assert.equal(result.status, "cancelled", "cancel mode must cancel locally");

  result = await run("What still needs a real provider?", db);
  assert.equal(result.status, "capability_summary");
  assert(result.stillNeedsRealProvider.includes("verified provider profile"), "provider readiness status must explain missing real-provider requirements");

  const status = brain.status(db, {});
  assert.equal(status.safety.noDiagnosis, true);
  assert.equal(status.safety.noPrescription, true);
  assert.equal(status.safety.noSilentExecution, true);
  assert(status.matrix.some(item => /offline queue/i.test(item.capability)), "production capability status must include offline queue");
  assert(status.providerConnectors.some(connector => /workforce partner/i.test(connector)), "provider connectors must include workforce lane");
  assert(status.providerConnectors.some(connector => /marketplace/i.test(connector)), "provider connectors must include marketplace lane");

  [
    "handleNexusAgenticBrainTypedCommand",
    "handleNexusStandardUserSafeTypedCommand",
    "installNexusVoiceDemoShellBridge",
    "renderNexusAgenticBrainPanel",
    "renderNexusAgenticBrainResultCards",
    "renderNexusRealProviderTestingPanel"
  ].forEach(text => assert(app.includes(text), `UI/router path must remain present: ${text}`));

  [
    "nexus-medical-support-bridge-qa.js",
    "nexus-chronic-disease-bridge-qa.js",
    "nexus-agriculture-workforce-depth-qa.js",
    "nexus-marketplace-bridge-qa.js",
    "nexus-maps-field-visit-bridge-qa.js",
    "nexus-communications-bridge-qa.js",
    "nexus-learning-provider-bridge-qa.js",
    "nexus-language-command-mode-qa.js",
    "nexus-safety-trust-boundary-hardening-qa.js"
  ].forEach(script => assert(qaSuite.includes(script), `safe suite must keep coverage for ${script}`));

  assert(packageJson.scripts["qa:nexus-full-agentic-workflow-all-modes"], "package alias must expose all-modes QA");

  console.log("Nexus full agentic workflow all modes QA passed.");
})().catch(error => {
  console.error(error);
  process.exit(1);
});
