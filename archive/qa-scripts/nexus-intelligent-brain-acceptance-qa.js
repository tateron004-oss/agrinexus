const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relative => fs.readFileSync(path.join(root, relative), "utf8");

const brain = require(path.join(root, "server/nexusAgenticBrainRuntime.js"));

const server = read("server.js");
const app = read("public/app.js");
const brainSource = read("server/nexusAgenticBrainRuntime.js");

[
  "server/nexusAgenticBrainRuntime.js",
  "server/nexusProductionRuntime.js",
  "server/nexusCapabilityRegistry.js"
].forEach(file => assert(fs.existsSync(path.join(root, file)), `${file} must exist`));

[
  "/api/nexus/brain/status",
  "/api/nexus/brain/tasks",
  "/api/nexus/brain/command",
  "/api/nexus/brain/task",
  "/api/nexus/brain/provider/respond",
  "/api/nexus/brain/verify"
].forEach(route => assert(server.includes(route), `server must expose ${route}`));

[
  "Nexus Intelligent Brain",
  "data-nexus-agentic-brain-panel",
  "data-nexus-agentic-brain-command",
  "data-nexus-brain-action",
  "renderNexusAgenticBrainPanel",
  "handleNexusAgenticBrainTypedCommand"
].forEach(text => assert(app.includes(text), `Standard User app must include ${text}`));

[
  "telehealth provider connector",
  "pharmacy provider connector",
  "mobile clinic provider connector",
  "community health worker connector",
  "agriculture expert connector",
  "workforce partner connector",
  "marketplace inquiry connector",
  "generic HTTP/webhook connector"
].forEach(text => assert(brainSource.includes(text), `provider runtime must include ${text}`));

function activeOfType(db, type) {
  return db.profile.nexusAgenticTasks.find(task => task.type === type);
}

(async () => {
  const db = { profile: {} };
  const env = {};

  let result = await brain.handleCommand({
    command: "Nexus, help me manage my blood pressure follow-up, send my readings to a provider, remind me tonight, and check if the provider responds."
  }, db, env);
  assert.equal(result.ok, true, "medical command must create an agentic task");
  assert.equal(result.task.type, "medical_follow_up", "medical command must create medical follow-up task");
  assert(result.task.capabilities.includes("medical.chronicCare"), "medical task must include chronic care capability");
  assert(result.task.capabilities.includes("medical.rpm"), "medical task must include RPM capability");
  assert(result.task.capabilities.includes("medical.rtm"), "medical task must include RTM capability");
  assert(result.task.capabilities.includes("medical.telehealthProvider"), "medical task must include telehealth provider capability");
  assert(result.task.chronicPrograms.rpmEnabled, "medical task must be RPM-equipped");
  assert(result.task.chronicPrograms.rtmEnabled, "medical task must be RTM-equipped");
  assert(result.task.chronicPrograms.programs.some(program => program.id === "htn"), "blood pressure task must map to HTN");
  assert(result.task.missingInformation.some(item => /reading/i.test(item)), "medical flow must ask for readings when missing");
  assert(result.providerQueue, "medical flow must prepare provider/admin queue");
  assert.equal(result.providerQueue.submittedLive, false, "missing provider config must not fake live submission");
  assert(result.followUp, "medical flow must create local follow-up");
  assert.equal(result.execution.executionResult.status, "local_fallback", "medical flow must create local reminder");

  result = await brain.handleCommand({ command: "140 over 90 yesterday morning." }, db, env);
  const medicalTask = activeOfType(db, "medical_follow_up");
  assert.equal(medicalTask.readings.length, 1, "reading must be added to active medical task");
  assert.equal(medicalTask.readings[0].systolic, 140, "systolic reading must be captured");
  assert.equal(medicalTask.readings[0].diastolic, 90, "diastolic reading must be captured");
  assert.equal(medicalTask.readings[0].type, "blood_pressure", "BP reading must be tagged as blood pressure RPM");

  result = await brain.handleCommand({ command: "My glucose is 160 after breakfast and I need DM support." }, db, env);
  assert(medicalTask.chronicPrograms.programs.some(program => program.id === "dm"), "DM program must be retained on medical task");
  assert(medicalTask.readings.some(reading => reading.type === "glucose" && reading.value === 160), "glucose RPM reading must be captured");

  result = await brain.handleCommand({ command: "My weight is 225 pounds and I need obesity support with activity goals." }, db, env);
  assert(medicalTask.chronicPrograms.programs.some(program => program.id === "obesity"), "obesity program must be retained on medical task");
  assert(medicalTask.readings.some(reading => reading.type === "weight" && reading.value === 225), "weight RPM reading must be captured");

  result = await brain.handleCommand({ command: "Activity participation: walking plan was hard this week because of stress." }, db, env);
  assert(medicalTask.rtmNotes.some(note => note.type === "rtm_context"), "RTM participation context must be captured");
  assert.equal(medicalTask.chronicPrograms.providerTransmissionEnabled, false, "RPM/RTM provider transmission must remain disabled without gates");

  const verifiedMedical = brain.verifyTask({ taskId: medicalTask.taskId }, db, env);
  assert(["verified_local_record", "provider_response_available"].includes(verifiedMedical.status), "medical task must verify local result truthfully");

  const providerResponse = brain.providerRespond({
    taskId: medicalTask.taskId,
    reviewedBy: "local provider/admin reviewer",
    response: "Reviewed locally. Follow up with the patient-facing care team. No diagnosis or prescription."
  }, db);
  assert.equal(providerResponse.ok, true, "provider/admin local response must be recordable");
  assert.equal(providerResponse.task.status, "provider_response_available", "standard user must be able to see provider response status");
  const verifiedResponse = brain.verifyTask({ taskId: medicalTask.taskId }, db, env);
  assert.equal(verifiedResponse.status, "provider_response_available", "verification must detect provider/admin response");

  const crossDomainCommands = [
    ["Nexus, find agriculture training.", "agriculture_training"],
    ["Nexus, show me farm jobs.", "workforce_support"],
    ["Nexus, prepare a marketplace inquiry.", "marketplace_inquiry"],
    ["Nexus, remind me tonight.", "reminder"],
    ["Nexus, request a drone service.", "drone_service_request"],
    ["Nexus, plan a field visit.", "field_visit_plan"],
    ["Nexus, enroll me in a course.", "learning_enrollment"],
    ["Nexus, text the clinic that I need a follow-up.", "communications_draft"],
    ["Nexus, queue this offline.", "offline_queue"]
  ];
  for (const [command, type] of crossDomainCommands) {
    const output = await brain.handleCommand({ command }, db, env);
    assert.equal(output.ok, true, `${command} must be handled by the brain`);
    assert.equal(output.task.type, type, `${command} must create ${type}`);
    assert.notEqual(output.status, "failed", `${command} must not fail`);
  }

  const allTaskTypes = new Set(db.profile.nexusAgenticTasks.map(task => task.type));
  ["medical_follow_up", "agriculture_training", "marketplace_inquiry", "reminder", "workforce_support"].forEach(type => {
    assert(allTaskTypes.has(type), `multi-task brain must retain ${type}`);
  });

  const agricultureTask = activeOfType(db, "agriculture_training");
  const resumed = await brain.handleCommand({ command: "Continue.", taskId: agricultureTask.taskId }, db, env);
  assert.equal(resumed.status, "resumed", "task must be resumable by taskId");
  const completed = brain.updateTask({ taskId: agricultureTask.taskId, status: "completed" }, db);
  assert.equal(completed.status, "completed", "task must be completable");
  const marketplaceTask = activeOfType(db, "marketplace_inquiry");
  const cancelled = brain.updateTask({ taskId: marketplaceTask.taskId, status: "cancelled" }, db);
  assert.equal(cancelled.status, "cancelled", "task must be cancellable");

  const emergency = await brain.handleCommand({ command: "I have chest pain and trouble breathing." }, db, env);
  assert.equal(emergency.status, "blocked_emergency", "emergency must block routine execution");

  const status = brain.status(db, env);
  assert.equal(status.safety.noDiagnosis, true, "brain status must preserve no diagnosis boundary");
  assert.equal(status.safety.noPrescription, true, "brain status must preserve no prescription boundary");
  assert.equal(status.safety.noFakeProviderContact, true, "brain status must prevent fake provider contact");
  assert.equal(status.safety.noSilentExecution, true, "brain status must prevent silent execution");

  const matrixStatuses = new Map(status.matrix.map(item => [item.capability, item.status]));
  [
    "agentic brain",
    "voice command runtime",
    "task manager",
    "case memory",
    "chronic disease DM/obesity/HTN support",
    "RPM manual readings",
    "RTM participation context",
    "provider registry",
    "provider/admin queue",
    "telehealth connector",
    "pharmacy connector",
    "mobile clinic connector",
    "SMS connector",
    "WhatsApp connector",
    "email connector",
    "calendar connector",
    "marketplace connector",
    "LMS connector",
    "agriculture provider connector",
    "workforce connector",
    "drone service connector",
    "payment gate",
    "offline queue",
    "reminders",
    "follow-ups",
    "verification",
    "security",
    "compliance gates",
    "deployment readiness"
  ].forEach(item => assert(matrixStatuses.has(item), `capability matrix must cover ${item}`));

  const serialized = JSON.stringify({ status, tasks: db.profile.nexusAgenticTasks, providerQueue: db.profile.nexusProviderQueue, activity: db.profile.nexusAgenticBrainActivity });
  [
    /diagnosed/i,
    /prescribed/i,
    /provider contacted/i,
    /payment processed/i,
    /emergency dispatched/i,
    /silently sent/i,
    /camera activated/i,
    /microphone activated/i,
    /location shared/i,
    /sk-live/i,
    /Bearer\s+\S+/i
  ].forEach(pattern => assert(!pattern.test(serialized), `brain output must not contain unsafe claim or secret pattern: ${pattern}`));

  assert(db.profile.nexusAgenticBrainActivity.length >= 5, "brain must maintain activity/audit history");
  assert(db.profile.nexusProviderQueue.length >= 1, "provider/admin queue must contain local items");

  console.log("Nexus intelligent brain acceptance QA passed.");
})().catch(error => {
  console.error(error);
  process.exit(1);
});
