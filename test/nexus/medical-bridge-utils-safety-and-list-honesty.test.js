"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const medicalBridgeUtils = require("../../server/providers/medicalBridgeUtils.js");

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
