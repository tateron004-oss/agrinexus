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
