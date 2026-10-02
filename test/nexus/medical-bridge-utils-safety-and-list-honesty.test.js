"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const medicalBridgeUtils = require("../../server/providers/medicalBridgeUtils.js");
const mobileClinicBridgeProvider = require("../../server/providers/mobileClinicBridgeProvider.js");
const pharmacyBridgeProvider = require("../../server/providers/pharmacyBridgeProvider.js");
const patientSupportBridgeProvider = require("../../server/providers/patientSupportBridgeProvider.js");
const telehealthBridgeProvider = require("../../server/providers/telehealthBridgeProvider.js");

function freshDb() {
  return { profile: {} };
}

// Found live (medicalBridgeUtils audit): queueOffline was the only one of
// 15 guardMedicalText call sites in the codebase that omitted the 4th
// argument, so allowEmergencyLanguage defaulted to true and EMERGENCY_WORDS
// was never checked -- the exact same crisis wording every consult/symptom
// -log action in these provider files correctly blocks sailed straight
// through this "queue for offline review" path and got persisted with no
// emergency notice attached.
test("queueOffline blocks real emergency/crisis language, matching every other guardMedicalText call site", () => {
  const db = freshDb();
  const result = medicalBridgeUtils.queueOffline(
    "local-medical-support-bridge", "offline.queue",
    { confirmed: true, concern: "Patient reports severe chest pain and says he cannot breathe, feels suicidal" },
    db, "workflow_plan", "severe chest pain and cannot breathe"
  );
  assert.equal(result.body.ok, false);
  assert.equal(result.body.status, "blocked");
  assert.match(result.body.message, /emergency/i);
});

test("queueOffline still queues genuinely non-emergency content, unaffected by the fix", () => {
  const db = freshDb();
  const result = medicalBridgeUtils.queueOffline(
    "local-medical-support-bridge", "offline.queue",
    { confirmed: true, concern: "follow-up on routine checkup notes" },
    db, "workflow_plan", "routine checkup follow-up"
  );
  assert.equal(result.body.ok, true);
  assert.equal(result.body.status, "completed");
});

// Found live: safeList's string branch truncated the WHOLE joined string to
// 500 characters BEFORE splitting on delimiters, silently cutting a long
// comma-separated list off mid-item and dropping every item past the
// truncation point.
test("safeList keeps complete items up to its cap, instead of truncating mid-item at a fixed character count", () => {
  const items = Array.from({ length: 40 }, (_, i) => `symptom-item-number-${i + 1}-description-here`).join(", ");
  const result = medicalBridgeUtils.safeList(items);
  assert.equal(result.length, 12, "the existing 12-item cap is unchanged");
  for (const item of result) {
    assert.doesNotMatch(item, /-description-her$/, `no item should be cut off mid-word, got: ${item}`);
    assert.match(item, /^symptom-item-number-\d+-description-here$/, `expected a complete item, got: ${item}`);
  }
});

test("safeList on a short string-form list is unaffected by the fix", () => {
  const result = medicalBridgeUtils.safeList("headache, nausea, fatigue");
  assert.deepEqual(result, ["headache", "nausea", "fatigue"]);
});

test("safeList on an array is unaffected by the fix", () => {
  const result = medicalBridgeUtils.safeList(["a", "b", "c"]);
  assert.deepEqual(result, ["a", "b", "c"]);
});

// Found live (fresh-module audit): unlike every other write path in this file (intake, reading,
// deviceReading, activityEntry, trainingPlan, queueOffline), createReminder never scanned its own
// user-controlled title/dueAt fields before persisting them into the shared reminders store -- affecting
// all 8 providers that call this shared helper.
test("createReminder blocks forbidden medical-execution content in the title, matching every other guardMedicalText call site", () => {
  const db = freshDb();
  const result = medicalBridgeUtils.createReminder(
    "local-pharmacy-bridge", "pharmacy.reminder",
    { confirmed: true, title: "change medication to 50mg insulin now, call 911" },
    db, "Pharmacy review"
  );
  assert.equal(result.body.ok, false);
  assert.equal(result.body.status, "blocked");
  assert.equal((db.profile.nexusReminders || []).length, 0, "nothing must be persisted when blocked");
});

test("createReminder still creates a genuinely safe reminder, unaffected by the fix", () => {
  const db = freshDb();
  const result = medicalBridgeUtils.createReminder(
    "local-pharmacy-bridge", "pharmacy.reminder",
    { confirmed: true, title: "general wellness check-in", dueAt: "next week" },
    db, "Pharmacy review"
  );
  assert.equal(result.body.ok, true);
  assert.equal(result.body.status, "completed");
});

// Found live (fresh-module audit): unlike visitPlan()/questionDraft() (their own sibling write paths),
// mobileClinicBridgeProvider.save() and pharmacyBridgeProvider.save() never scanned their user-controlled
// name/category/typedLocation fields before persisting them.
test("mobileClinicBridgeProvider.save blocks forbidden content, matching its own sibling visitPlan()", () => {
  const db = freshDb();
  const result = mobileClinicBridgeProvider.save({ confirmed: true, name: "prescribe oxycodone 30mg refill" }, db);
  assert.equal(result.body.ok, false);
  assert.equal(result.body.status, "blocked");
});

test("mobileClinicBridgeProvider.save still saves genuinely safe content, unaffected by the fix", () => {
  const db = freshDb();
  const result = mobileClinicBridgeProvider.save({ confirmed: true, name: "Riverside Mobile Clinic", typedLocation: "Kisumu" }, db);
  assert.equal(result.body.ok, true);
  assert.equal(result.body.status, "completed");
});

test("pharmacyBridgeProvider.save blocks forbidden content, matching its own sibling questionDraft()", () => {
  const db = freshDb();
  const result = pharmacyBridgeProvider.save({ confirmed: true, name: "transfer prescription and process payment" }, db);
  assert.equal(result.body.ok, false);
  assert.equal(result.body.status, "blocked");
});

test("pharmacyBridgeProvider.save still saves genuinely safe content, unaffected by the fix", () => {
  const db = freshDb();
  const result = pharmacyBridgeProvider.save({ confirmed: true, name: "Downtown Pharmacy", typedLocation: "Nairobi" }, db);
  assert.equal(result.body.ok, true);
  assert.equal(result.body.status, "completed");
});

test("patientSupportBridgeProvider.save blocks forbidden content in title/summary", () => {
  const db = freshDb();
  const result = patientSupportBridgeProvider.save({ confirmed: true, title: "insurance claim eligibility payment" }, db);
  assert.equal(result.body.ok, false);
  assert.equal(result.body.status, "blocked");
});

test("patientSupportBridgeProvider.save still saves genuinely safe content, unaffected by the fix", () => {
  const db = freshDb();
  const result = patientSupportBridgeProvider.save({ confirmed: true, title: "local navigator resource list" }, db);
  assert.equal(result.body.ok, true);
  assert.equal(result.body.status, "completed");
});

// Found live (fresh-module audit): unlike intake() (which scans these exact same fields), saveSession()
// called normalizeIntake(body) directly and skipped the scan entirely.
test("telehealthBridgeProvider.saveSession blocks forbidden content, matching its own sibling intake()", () => {
  const db = freshDb();
  const result = telehealthBridgeProvider.saveSession({ confirmed: true, reason: "book appointment and process payment" }, db);
  assert.equal(result.body.ok, false);
  assert.equal(result.body.status, "blocked");
});

test("telehealthBridgeProvider.saveSession still saves genuinely safe content, unaffected by the fix", () => {
  const db = freshDb();
  const result = telehealthBridgeProvider.saveSession({ confirmed: true, reason: "general check-in preparation" }, db);
  assert.equal(result.body.ok, true);
  assert.equal(result.body.status, "completed");
});
