const assert = require("node:assert/strict");
const path = require("node:path");

const brain = require(path.resolve(__dirname, "..", "server/nexusAgenticBrainRuntime.js"));

async function command(text, db) {
  const result = await brain.handleCommand({ command: text }, db, {});
  assert.equal(result.ok, true, `${text} should be handled safely`);
  return result;
}

(async () => {
  const db = { profile: {} };

  let result = await command("What can Nexus do?", db);
  assert.equal(result.status, "capability_summary");
  assert.match(result.message, /chronic-care/i);
  assert.match(result.message, /Live provider contact.*remain gated/i);
  assert.equal(result.noExternalExecutionAuthorized, true);

  result = await command("My blood pressure was 150 over 95 last night. Make a provider report, remind me tomorrow morning, and prepare a mobile clinic request.", db);
  assert.equal(result.task.type, "medical_follow_up");
  assert(result.task.compositeIntents.includes("provider_report"));
  assert(result.task.compositeIntents.includes("reminder"));
  assert(result.task.compositeIntents.includes("mobile_clinic"));
  assert.equal(result.task.reminderRequest.timing, "tomorrow morning");
  assert(result.task.providerReport);
  assert.equal(result.task.providerReport.mobileClinicRequest, true);
  assert(result.task.preparationPackages.some(item => item.packageId.startsWith("nexus-mobile-clinic-request")));
  assert(result.preparedCards.some(card => card.type === "provider_summary_ready"));
  assert(result.preparedCards.some(card => card.type === "reminder_created"));
  assert.equal(result.providerQueue.submittedLive, false);

  result = await command("Continue my last task.", db);
  assert.equal(result.status, "resumed");
  assert.match(result.message, /Resuming/i);

  result = await command("What is open right now?", db);
  assert.equal(result.status, "capability_summary");
  assert(result.activeTaskCount >= 1);

  result = await command("Cancel that.", db);
  assert.equal(result.status, "cancelled");
  assert.equal(result.task.status, "cancelled");

  const serialized = JSON.stringify(db);
  assert(!/sent to a doctor|provider contacted|payment processed|emergency dispatched|diagnosed|prescribed/i.test(serialized), "brain state must not contain unsafe execution claims");

  console.log("Nexus high performance assistant brain QA passed.");
})().catch(error => {
  console.error(error);
  process.exit(1);
});
