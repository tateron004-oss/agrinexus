const assert = require("node:assert/strict");
const path = require("node:path");

const brain = require(path.resolve(__dirname, "..", "server/nexusAgenticBrainRuntime.js"));

async function run(command, db) {
  const result = await brain.handleCommand({ command }, db, {});
  assert.equal(result.ok, true, `${command} should be safe`);
  return result;
}

(async () => {
  const db = { profile: {} };

  let result = await run("My maize leaves have yellow spots. Help me prepare crop support.", db);
  assert.equal(result.task.type, "agriculture_training");
  assert.equal(result.task.agriculturePlan.crop.toLowerCase(), "maize");
  assert.match(result.task.agriculturePlan.visibleSymptoms, /yellow spots/i);
  assert.equal(result.task.agriculturePlan.noLocationSharing, true);

  result = await run("Prepare a drone mission request for crop monitoring.", db);
  assert.equal(result.task.agriculturePlan.noDroneDispatch, true);
  assert(result.task.safetyGate.highRisk, "drone request must be high-risk/gated");

  result = await run("Browse AgriTrade for produce selling support.", db);
  assert.equal(result.task.agriculturePlan.noMarketplaceTransaction, true);

  result = await run("Help me find farm jobs and digital literacy training.", db);
  assert.equal(result.task.type, "workforce_support");
  assert.match(result.task.workforcePathway.pathwayType, /jobs|literacy/i);
  assert.equal(result.task.workforcePathway.noApplicationSubmitted, true);
  assert.equal(result.task.workforcePathway.noEnrollmentSubmitted, true);

  result = await run("Help me learn AI for work and prepare a training pathway in Swahili.", db);
  assert.equal(result.task.workforcePathway.languagePreference, "sw");
  assert.match(result.task.workforcePathway.pathwayType, /AI literacy/i);

  console.log("Nexus agriculture workforce depth QA passed.");
})().catch(error => {
  console.error(error);
  process.exit(1);
});
