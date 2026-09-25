"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const rpmBridge = require("../../server/providers/rpmBridgeProvider.js");
const rtmBridge = require("../../server/providers/rtmBridgeProvider.js");

const rpmEnv = { NEXUS_RPM_BRIDGE_ENABLED: "true" };
const rtmEnv = { NEXUS_RTM_BRIDGE_ENABLED: "true" };

function freshDb() {
  return { profile: {} };
}

// Found live (RPM/RTM adherence-math audit): comparing the raw metric text
// against METRICS meant a differently-cased or space-separated metric (e.g.
// "Blood_Glucose") failed the membership check and was silently RELABELED
// as "blood_pressure" -- not dropped, actively mislabeled, since
// blood_pressure is itself a valid METRICS member -- so a real glucose
// reading would vanish from a glucose trend and inflate the blood-pressure
// count instead.
test("a differently-cased or spaced metric is recognized, not silently relabeled as blood_pressure", () => {
  const db = freshDb();
  for (const metric of ["Blood_Glucose", "BLOOD_GLUCOSE", "blood glucose"]) {
    const result = rpmBridge.deviceReading({ confirmed: true, metric, value: "145", unit: "mg/dL" }, freshDb(), rpmEnv);
    assert.equal(result.body.data.reading.metric, "blood_glucose", `expected "${metric}" to normalize to blood_glucose, not fall back to blood_pressure`);
  }
  rpmBridge.deviceReading({ confirmed: true, metric: "Pulse", value: "72" }, db, rpmEnv);
  const trend = rpmBridge.trendSummary({}, db);
  assert.deepEqual(trend.body.data.summary.metricsPresent, ["pulse"], "a real pulse reading must count as pulse, not blood_pressure");
});

test("a genuinely unrecognized metric still falls back to blood_pressure, unaffected by the case-normalization fix", () => {
  const db = freshDb();
  const result = rpmBridge.deviceReading({ confirmed: true, metric: "not_a_real_metric", value: "1" }, db, rpmEnv);
  assert.equal(result.body.data.reading.metric, "blood_pressure");
});

// Found live: the identical case-sensitivity gap in the sibling RTM
// provider -- "Fitness_Training" failed ACTIVITY_TYPES.has() and was
// silently relabeled "therapy_activity" (also a valid member), so a real
// logged workout disappeared entirely from fitnessProgress()'s exact-case
// "fitness_training" filter.
test("a differently-cased activityType is recognized, not silently relabeled and lost from fitness progress", () => {
  const db = freshDb();
  const entry = rtmBridge.activityEntry({ confirmed: true, activityType: "Fitness_Training", dateTimeText: "2026-09-25T18:00:00Z", activityDescription: "Morning workout", participationMinutes: 45, completed: true }, db, rtmEnv);
  assert.equal(entry.body.data.entry.activityType, "fitness_training");
  const progress = rtmBridge.fitnessProgress({}, db).body.data.summary;
  assert.equal(progress.sessionCount, 1);
  assert.equal(progress.totalMinutes, 45);
  assert.equal(progress.mostRecentActivity, "Morning workout");
});

test("a genuinely unrecognized activityType still falls back to therapy_activity, unaffected by the case-normalization fix", () => {
  const db = freshDb();
  const entry = rtmBridge.activityEntry({ confirmed: true, activityType: "not_a_real_activity", dateTimeText: "2026-09-25T18:00:00Z" }, db, rtmEnv);
  assert.equal(entry.body.data.entry.activityType, "therapy_activity");
});

// Found live: entries are stored in SUBMISSION order (saveRecord unshifts),
// not the order of the workout's own dateTimeText -- backfilling an older
// workout after today's already-logged one made the older one shadow the
// real most-recent activity, purely because it was inserted later.
test("mostRecentActivity picks the chronologically latest workout, not the most recently submitted one", () => {
  const db = freshDb();
  rtmBridge.activityEntry({ confirmed: true, activityType: "fitness_training", dateTimeText: "2026-09-25T18:00:00Z", activityDescription: "Todays 30-min run", participationMinutes: 30, completed: true }, db, rtmEnv);
  rtmBridge.activityEntry({ confirmed: true, activityType: "fitness_training", dateTimeText: "2026-09-18T18:00:00Z", activityDescription: "Last weeks 20-min walk (backfilled)", participationMinutes: 20, completed: true }, db, rtmEnv);
  const progress = rtmBridge.fitnessProgress({}, db).body.data.summary;
  assert.equal(progress.sessionCount, 2);
  assert.equal(progress.totalMinutes, 50);
  assert.equal(progress.mostRecentActivity, "Todays 30-min run", "the genuinely most recent workout must win regardless of submission order");
});

test("mostRecentActivity falls back to submission order when no entry has a parseable date, unaffected by the chronological fix", () => {
  const db = freshDb();
  rtmBridge.activityEntry({ confirmed: true, activityType: "fitness_training", activityDescription: "First logged, no date" }, db, rtmEnv);
  rtmBridge.activityEntry({ confirmed: true, activityType: "fitness_training", activityDescription: "Second logged, no date" }, db, rtmEnv);
  const progress = rtmBridge.fitnessProgress({}, db).body.data.summary;
  assert.equal(progress.mostRecentActivity, "Second logged, no date", "with no parseable dates at all, the most recently submitted entry is the only reasonable fallback");
});
