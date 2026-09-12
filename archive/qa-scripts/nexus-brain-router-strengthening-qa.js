const assert = require("node:assert");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const brain = require(path.join(root, "server/nexusAgenticBrainRuntime.js"));

async function run(command, db) {
  const result = await brain.handleCommand({ command }, db, {});
  assert.equal(result.ok, true, `${command} must be handled safely`);
  return result;
}

(async () => {
  const db = { profile: {} };

  let result = await run("Nexus, I have high blood pressure and need a provider report and a reminder for tomorrow.", db);
  assert.equal(result.task.type, "medical_follow_up", "composite HTN command must create a medical follow-up");
  assert(result.task.compositeIntents.includes("medical"), "composite intent must include medical");
  assert(result.task.compositeIntents.includes("provider_report"), "composite intent must include provider_report");
  assert(result.task.compositeIntents.includes("reminder"), "composite intent must include reminder");
  assert.equal(result.task.reminderRequest.timing, "tomorrow", "tomorrow reminder timing must be captured");
  assert(result.task.providerReport, "provider report must be prepared locally");
  assert.equal(result.task.providerReport.status, "local_preparation_only", "provider report must remain local-only");
  assert(result.providerQueue, "provider/admin queue item must be prepared");
  assert.equal(result.providerQueue.submittedLive, false, "provider queue must not submit live");
  assert.equal(result.providerQueue.noFakeProviderContact, true, "provider queue must record no fake provider contact");
  assert(result.task.missingInformation.some(item => /RPM\/RTM|reading|participation/i.test(item)), "provider report can still ask for readings/context before final execution");

  result = await run("Nexus, my blood pressure was 140 over 90 yesterday morning. Make a provider report and remind me tomorrow morning.", db);
  assert(result.task.readings.some(reading => reading.type === "blood_pressure" && reading.systolic === 140 && reading.diastolic === 90), "BP reading phrase must be captured");
  assert.equal(result.task.reminderRequest.timing, "tomorrow morning", "tomorrow morning must be parsed");
  assert(result.task.providerReport.userReportedReadings.some(reading => reading.type === "blood_pressure"), "provider report must include BP reading");

  result = await run("Nexus, BP 150/95 tonight and create a care summary.", db);
  assert(result.task.readings.some(reading => reading.type === "blood_pressure" && reading.systolic === 150 && reading.diastolic === 95), "BP slash syntax must be captured");
  assert.equal(result.task.reminderRequest.timing, "tonight", "tonight timing must be captured");

  result = await run("Nexus, my glucose was 180 after dinner. Help me prepare for a telehealth visit.", db);
  assert(result.task.readings.some(reading => reading.type === "glucose" && reading.value === 180), "glucose reading must be captured");
  assert(result.task.compositeIntents.includes("telehealth"), "telehealth secondary intent must be captured");
  assert.equal(result.task.providerReport.telehealthRequest, true, "provider report must mark telehealth request");

  result = await run("Nexus, fasting sugar was 130 and I need diabetes support.", db);
  assert(result.task.readings.some(reading => reading.type === "glucose" && reading.value === 130), "fasting sugar phrase must be captured");

  result = await run("Nexus, I need help with obesity and hypertension and want a mobile clinic request.", db);
  assert(result.task.chronicPrograms.programs.some(program => program.id === "obesity"), "obesity program must be detected");
  assert(result.task.chronicPrograms.programs.some(program => program.id === "htn"), "HTN program must be detected");
  assert.equal(result.task.providerReport.mobileClinicRequest, true, "mobile clinic request must be represented locally");

  result = await run("Nexus, my knee pain is worse after therapy. Add this to RTM notes and remind me tonight.", db);
  assert(result.task.rtmNotes.some(note => note.type === "rtm_context"), "RTM pain/therapy context must be captured");
  assert.equal(result.task.reminderRequest.timing, "tonight", "RTM reminder timing must be captured");

  result = await run("Nexus, find agriculture training and remind me next week.", db);
  assert.equal(result.task.type, "agriculture_training", "agriculture plus reminder should keep agriculture as main task");
  assert.equal(result.task.reminderRequest.timing, "next week", "next week reminder must be parsed");

  const serialized = JSON.stringify(db);
  [
    /provider contacted/i,
    /message sent/i,
    /payment processed/i,
    /diagnosed/i,
    /prescribed/i,
    /emergency dispatched/i
  ].forEach(pattern => assert(!pattern.test(serialized), `brain must not create unsafe claim ${pattern}`));

  console.log("Nexus brain router strengthening QA passed.");
})().catch(error => {
  console.error(error);
  process.exit(1);
});
