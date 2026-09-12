const assert = require("node:assert/strict");
const path = require("node:path");

const brain = require(path.resolve(__dirname, "..", "server/nexusAgenticBrainRuntime.js"));

async function run(command, db = { profile: {} }) {
  const result = await brain.handleCommand({ command }, db, {});
  assert.equal(result.ok, true, `${command} should be handled`);
  return result;
}

(async () => {
  const db = { profile: {} };

  let result = await run("My glucose was 180 after dinner and I need a telehealth visit and pharmacy questions.", db);
  assert(result.task.chronicIntake.conditionCategories.includes("dm"), "diabetes must be detected");
  assert.equal(result.task.chronicIntake.reading.type, "glucose");
  assert.equal(result.task.providerReport.telehealthRequest, true);
  assert(result.task.preparationPackages.some(item => item.packageId.startsWith("nexus-telehealth-prep")));
  assert(result.task.preparationPackages.some(item => item.packageId.startsWith("nexus-pharmacy-questions")));
  assert.match(result.task.providerReport.providerReviewStatement, /does not diagnose, prescribe/i);

  result = await run("I need help with obesity and diabetes, make a report, and remind me next week.", db);
  assert(result.task.chronicPrograms.programs.some(program => program.id === "obesity"));
  assert(result.task.chronicPrograms.programs.some(program => program.id === "dm"));
  assert.equal(result.task.reminderRequest.timing, "next week");
  assert(result.task.providerReport.followUpQuestions.some(question => /goal|glucose|provider|meal/i.test(question)));

  result = await run("My knee pain is worse after therapy. Add this to RTM notes and remind me tonight.", db);
  assert(result.task.rtmNotes.some(note => note.type === "rtm_context" && note.rtm === true));
  assert(result.task.providerReport?.rtmSummary || result.task.chronicIntake.rtmEnabled, "RTM summary or intake flag must be present");

  result = await brain.handleCommand({ command: "I have chest pain and shortness of breath." }, db, {});
  assert.equal(result.ok, false);
  assert.equal(result.status, "blocked_emergency");
  assert.equal(result.safetyGate.externalExecutionAuthorized, false);

  console.log("Nexus chronic-care intake provider package QA passed.");
})().catch(error => {
  console.error(error);
  process.exit(1);
});
