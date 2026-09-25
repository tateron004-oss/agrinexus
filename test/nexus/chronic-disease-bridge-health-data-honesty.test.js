"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const chronicDiseaseBridge = require("../../server/providers/chronicDiseaseBridgeProvider.js");

const env = { NEXUS_CHRONIC_DISEASE_BRIDGE_ENABLED: "true" };

function freshDb() {
  return { profile: {} };
}

// Found live (health-data audit): only the exact singular "lb" was
// recognized -- "lbs" (the natural plural; this codebase's own
// natural-language extractor captures "lbs?|pounds") silently fell through
// to "assume already kg," inflating a real, normal BMI into a fabricated
// morbid-obesity reading purely from the missing "s".
test("BMI weight-unit handling recognizes 'lbs'/'pounds', not just the exact singular 'lb'", () => {
  const db = freshDb();
  const lb = chronicDiseaseBridge.reading({ confirmed: true, weight: 180, weightUnit: "lb", height: 175, heightUnit: "cm" }, db, env);
  const lbs = chronicDiseaseBridge.reading({ confirmed: true, weight: 180, weightUnit: "lbs", height: 175, heightUnit: "cm" }, db, env);
  const pounds = chronicDiseaseBridge.reading({ confirmed: true, weight: 180, weightUnit: "pounds", height: 175, heightUnit: "cm" }, db, env);
  const LBS = chronicDiseaseBridge.reading({ confirmed: true, weight: 180, weightUnit: "LBS", height: 175, heightUnit: "cm" }, db, env);
  assert.equal(lbs.body.data.reading.bmiInformational, lb.body.data.reading.bmiInformational, "'lbs' must convert identically to 'lb'");
  assert.equal(pounds.body.data.reading.bmiInformational, lb.body.data.reading.bmiInformational);
  assert.equal(LBS.body.data.reading.bmiInformational, lb.body.data.reading.bmiInformational, "case-insensitive");
  assert.ok(lb.body.data.reading.bmiInformational < 30, `expected a real, normal-range BMI, got ${lb.body.data.reading.bmiInformational}`);
});

test("a kg weight is unaffected by the lb/lbs widening", () => {
  const db = freshDb();
  const result = chronicDiseaseBridge.reading({ confirmed: true, weight: 82, weightUnit: "kg", height: 175, heightUnit: "cm" }, db, env);
  assert.ok(Math.abs(result.body.data.reading.bmiInformational - 26.8) < 0.2);
});

// Found live: CONDITIONS.has() was a case-sensitive Set lookup --
// "Diabetes"/"DIABETES" silently reclassified to
// "unknown_provider_review_needed", and trendSummary/providerReport's own
// exact-case filter then silently excluded that reading from a
// condition-specific trend view entirely.
test("a differently-cased conditionFocus is still recognized, not silently reclassified", () => {
  const db = freshDb();
  chronicDiseaseBridge.reading({ confirmed: true, conditionFocus: "diabetes", glucose: 210 }, db, env);
  chronicDiseaseBridge.reading({ confirmed: true, conditionFocus: "Diabetes", glucose: 215 }, db, env);
  chronicDiseaseBridge.reading({ confirmed: true, conditionFocus: "DIABETES", glucose: 220 }, db, env);
  const trend = chronicDiseaseBridge.trendSummary({ conditionFocus: "diabetes" }, db);
  assert.equal(trend.body.data.summary.readingCount, 3, "all three differently-cased readings must count toward the same trend");
});

test("the report shows all differently-cased readings too", () => {
  const db = freshDb();
  chronicDiseaseBridge.reading({ confirmed: true, conditionFocus: "hypertension", systolic: 150, diastolic: 95 }, db, env);
  chronicDiseaseBridge.reading({ confirmed: true, conditionFocus: "Hypertension", systolic: 155, diastolic: 98 }, db, env);
  const report = chronicDiseaseBridge.providerReport({ conditionFocus: "HYPERTENSION" }, db);
  assert.equal(report.body.data.report.readingTableSummary.length, 2);
});
