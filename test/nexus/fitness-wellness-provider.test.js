"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const rtmBridge = require("../../server/providers/rtmBridgeProvider.js");

function fixtureDb() {
  return { profile: {} };
}

test("trainingPlan saves a real plan with goal, weekly target, and duration", () => {
  const db = fixtureDb();
  const result = rtmBridge.trainingPlan({
    goal: "run a 5k", weeklySessionTarget: 3, durationWeeks: 8, confirmed: true
  }, db, {});
  assert.equal(result.body.status, "completed");
  const plan = result.body.data.plan;
  assert.equal(plan.goal, "run a 5k");
  assert.equal(plan.weeklySessionTarget, 3);
  assert.equal(plan.durationWeeks, 8);
  assert.equal(db.profile.nexusFitnessTrainingPlans.length, 1);
  assert.match(result.body.message, /not a training program from a coach/);
});

test("trainingPlan blocks medically forbidden content the same way other medical bridges do", () => {
  const db = fixtureDb();
  const result = rtmBridge.trainingPlan({ goal: "get a prescribed dosage plan", confirmed: true }, db, {});
  assert.equal(result.body.status, "blocked");
  assert.equal(db.profile.nexusFitnessTrainingPlans?.length || 0, 0);
});

// Found live (telehealth sibling sweep): intake() scanned body.goal/body.notes against
// guardMedicalText, but the real, shipped client form for this exact endpoint has no "goal" or
// "notes" field -- its one free-text field is literally named "participationGoal", which is what
// actually gets persisted. Every real submission through the real UI had body.goal/body.notes
// undefined, so the scan was effectively a no-op and whatever the user actually typed into
// "Participation goal" -- including forbidden-medical-execution or emergency-word content -- was
// saved verbatim.
test("intake blocks medically forbidden content in the field the real form actually sends (participationGoal), not just goal/notes", () => {
  const db = fixtureDb();
  const blocked = rtmBridge.intake({ participationGoal: "prescribe me a dosage plan", confirmed: true }, db, {});
  assert.equal(blocked.body.status, "blocked", JSON.stringify(blocked.body));
  assert.equal(db.profile.nexusRtmIntakes?.length || 0, 0, "no intake must be saved when participationGoal is forbidden content");

  const emergencyBlocked = rtmBridge.intake({ participationGoal: "having chest pain during exercise", confirmed: true }, db, {});
  assert.equal(emergencyBlocked.body.status, "blocked", JSON.stringify(emergencyBlocked.body));

  const ok = rtmBridge.intake({ participationGoal: "organize weekly rehab activity for review", confirmed: true }, db, {});
  assert.equal(ok.body.status, "completed", JSON.stringify(ok.body));
  assert.equal(db.profile.nexusRtmIntakes.length, 1);
});

test("trainingPlans lists saved plans, most recent first", () => {
  const db = fixtureDb();
  rtmBridge.trainingPlan({ goal: "build strength", confirmed: true }, db, {});
  rtmBridge.trainingPlan({ goal: "run a 5k", confirmed: true }, db, {});
  const listed = rtmBridge.trainingPlans(db);
  assert.equal(listed.body.data.plans.length, 2);
  assert.equal(listed.body.data.plans[0].goal, "run a 5k");
});

test("activityEntry accepts fitness_training as a real activity type and records participation minutes", () => {
  const db = fixtureDb();
  const result = rtmBridge.activityEntry({
    activityType: "fitness_training", activityDescription: "run workout (voice-reported)",
    participationMinutes: 30, completed: true, confirmed: true
  }, db, {});
  assert.equal(result.body.status, "completed");
  assert.equal(result.body.data.entry.activityType, "fitness_training");
  assert.equal(result.body.data.entry.participationMinutes, 30);
});

test("activityEntry records an explicit 0-minute entry instead of silently discarding it as falsy", () => {
  const db = fixtureDb();
  const result = rtmBridge.activityEntry({
    activityType: "fitness_training", activityDescription: "stretching", participationMinutes: 0, confirmed: true
  }, db, {});
  assert.equal(result.body.data.entry.participationMinutes, 0, "an explicitly reported 0-minute duration must be stored as 0, not discarded to null");
});

test("activityEntry falls back to therapy_activity for an unrecognized activity type, not fitness_training", () => {
  const db = fixtureDb();
  const result = rtmBridge.activityEntry({ activityType: "made_up_type", confirmed: true }, db, {});
  assert.equal(result.body.data.entry.activityType, "therapy_activity");
});

test("fitnessProgress summarizes only fitness_training entries, ignoring other RTM activity types", () => {
  const db = fixtureDb();
  rtmBridge.activityEntry({ activityType: "fitness_training", participationMinutes: 30, confirmed: true }, db, {});
  rtmBridge.activityEntry({ activityType: "fitness_training", participationMinutes: 20, confirmed: true }, db, {});
  rtmBridge.activityEntry({ activityType: "exercise_rehab", participationMinutes: 45, confirmed: true }, db, {});
  const progress = rtmBridge.fitnessProgress({}, db);
  assert.equal(progress.body.data.summary.sessionCount, 2);
  assert.equal(progress.body.data.summary.totalMinutes, 50);
});

test("fitnessProgress reports no data cleanly when nothing has been logged", () => {
  const db = fixtureDb();
  const progress = rtmBridge.fitnessProgress({}, db);
  assert.equal(progress.body.data.summary.sessionCount, 0);
  assert.deepEqual(progress.body.data.summary.missingData, ["No workouts logged yet"]);
});
