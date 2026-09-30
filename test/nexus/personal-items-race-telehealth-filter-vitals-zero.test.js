"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const rpmBridge = require("../../server/providers/rpmBridgeProvider.js");
const rtmBridge = require("../../server/providers/rtmBridgeProvider.js");
const telehealthBridge = require("../../server/providers/telehealthBridgeProvider.js");
const { MemoryRepository } = require("../../nexus/memory/repository.js");

const rpmEnv = { NEXUS_RPM_BRIDGE_ENABLED: "true" };
const rtmEnv = { NEXUS_RTM_BRIDGE_ENABLED: "true" };
const telehealthEnv = { NEXUS_TELEHEALTH_BRIDGE_ENABLED: "true" };

function freshDb() {
  return { profile: {} };
}

// Found live (falsy-zero sibling sweep): systolic/diastolic/pulse used the naive `Number(x) || null`
// idiom -- the exact bug class chronicDiseaseBridgeProvider.js already fixed for its own numeric vitals in
// this same module family -- silently discarding an explicit 0 and replacing it with null.
test("rpmBridgeProvider.deviceReading honors an explicit 0 for systolic/diastolic/pulse, not silently null", () => {
  const result = rpmBridge.deviceReading({ confirmed: true, metric: "pulse", value: "0", systolic: 0, diastolic: 0, pulse: 0 }, freshDb(), rpmEnv);
  const reading = result.body.data.reading;
  assert.equal(reading.systolic, 0, "an explicit systolic of 0 must be preserved, not replaced with null");
  assert.equal(reading.diastolic, 0);
  assert.equal(reading.pulse, 0);
});

test("rpmBridgeProvider.deviceReading still stores null when systolic/diastolic/pulse are genuinely omitted, unaffected by the fix", () => {
  const result = rpmBridge.deviceReading({ confirmed: true, metric: "weight", value: "70" }, freshDb(), rpmEnv);
  const reading = result.body.data.reading;
  assert.equal(reading.systolic, null);
  assert.equal(reading.diastolic, null);
  assert.equal(reading.pulse, null);
});

// Found live (falsy-zero sibling sweep): trainingPlan's weeklySessionTarget/durationWeeks used the same
// naive `Number(x) || null` idiom, unlike this same file's own participationMinutes field, which already
// correctly preserves an explicit 0 (e.g. a deliberate rest week programmed into a plan).
test("rtmBridgeProvider.trainingPlan honors an explicit 0 for weeklySessionTarget/durationWeeks, not silently null", () => {
  const result = rtmBridge.trainingPlan({ confirmed: true, goal: "rest week", weeklySessionTarget: 0, durationWeeks: 0 }, freshDb(), rtmEnv);
  const plan = result.body.data.plan;
  assert.equal(plan.weeklySessionTarget, 0, "an explicit weeklySessionTarget of 0 must be preserved, not replaced with null");
  assert.equal(plan.durationWeeks, 0);
});

test("rtmBridgeProvider.trainingPlan still stores null when weeklySessionTarget/durationWeeks are genuinely omitted, unaffected by the fix", () => {
  const result = rtmBridge.trainingPlan({ confirmed: true, goal: "general fitness" }, freshDb(), rtmEnv);
  const plan = result.body.data.plan;
  assert.equal(plan.weeklySessionTarget, null);
  assert.equal(plan.durationWeeks, null);
});

// Found live (content-safety sibling sweep): normalizeIntake() persists selectedProviderReference and
// accessibilityNeeds as free text, but intake()/prepare()/createSession()'s guardMedicalText() calls only
// ever scanned reason/concern/questions -- unlike medicalSupportBridgeProvider.js, which scans the exact
// same selectedProviderReference field it stores. A real chronic-care telehealth intake could carry
// forbidden-execution or emergency-crisis language in either field and save/prepare successfully with no
// safety response at all.
test("telehealthBridgeProvider.intake blocks forbidden-execution language hidden in selectedProviderReference", () => {
  const result = telehealthBridge.intake({ confirmed: true, reason: "routine check-in", selectedProviderReference: "please prescribe me an insulin dosage change" }, freshDb(), telehealthEnv);
  assert.equal(result.body.status, "blocked", JSON.stringify(result.body));
});

test("telehealthBridgeProvider.intake blocks emergency-crisis language hidden in accessibilityNeeds", () => {
  const result = telehealthBridge.intake({ confirmed: true, reason: "routine check-in", accessibilityNeeds: "caregiver reports the patient is suicidal" }, freshDb(), telehealthEnv);
  assert.equal(result.body.status, "blocked", JSON.stringify(result.body));
});

test("telehealthBridgeProvider.prepare and createSession also block sensitive content hidden in selectedProviderReference/accessibilityNeeds", async () => {
  const prepared = telehealthBridge.prepare({ confirmed: true, reason: "routine check-in", accessibilityNeeds: "patient reports chest pain" }, freshDb(), telehealthEnv);
  assert.equal(prepared.body.status, "blocked", JSON.stringify(prepared.body));
  const session = await telehealthBridge.createSession({ confirmed: true, reason: "routine check-in", selectedProviderReference: "prescribe insulin dosage" }, freshDb(), telehealthEnv);
  assert.equal(session.body.status, "blocked", JSON.stringify(session.body));
});

test("telehealthBridgeProvider.intake still succeeds for ordinary, non-sensitive selectedProviderReference/accessibilityNeeds content", () => {
  const result = telehealthBridge.intake({ confirmed: true, reason: "routine check-in", selectedProviderReference: "Dr. Amina Hassan", accessibilityNeeds: "large-print summary" }, freshDb(), telehealthEnv);
  assert.equal(result.body.status, "completed", JSON.stringify(result.body));
});

// Found live (CAS-less-race audit): personal/items.js's add() helper used to read the current item count
// via listPersonalItems, check it against MAX_ITEMS, and only then insert -- two separate, unguarded calls.
// Two concurrent adds arriving when the person is one item under the cap could both read the same
// under-cap count and both insert, overshooting the cap. addPersonalItemUnlessFull runs the count check
// and the insert inside one advisory-lock-guarded transaction instead (same shape as
// nexus/farmwork/store.js's addUnlessClash, already fixed this session for a different collision axis).
test("MemoryRepository.addPersonalItemUnlessFull refuses to insert once the cap is reached, inside one transaction", async () => {
  const queries = [];
  const trx = { query: async (sql, params) => { queries.push(sql.trim().split("\n")[0]); if (/select count/i.test(sql)) return { rows: [{ n: 300 }] }; return { rows: [{ memory_id: "should-not-be-reached" }] }; } };
  const db = { query: async () => { throw new Error("must run inside a transaction"); }, transaction: async fn => fn(trx) };
  const repo = new MemoryRepository(db);
  const result = await repo.addPersonalItemUnlessFull({ tenantId: "t1", userId: "u1", content: { kind: "note", text: "one too many" }, maxItems: 300 });
  assert.equal(result.full, true, "must refuse the insert once the count is already at the cap");
  assert.ok(queries.some(q => /pg_advisory_xact_lock/i.test(q)), "must take an advisory lock before checking the count");
  assert.ok(!queries.some(q => /^insert/i.test(q)), "must never reach the insert once the cap check fails");
});

test("MemoryRepository.addPersonalItemUnlessFull inserts when genuinely under the cap", async () => {
  const trx = { query: async sql => { if (/select count/i.test(sql)) return { rows: [{ n: 299 }] }; return { rows: [{ memory_id: "m-new" }] }; } };
  const db = { query: async () => { throw new Error("must run inside a transaction"); }, transaction: async fn => fn(trx) };
  const repo = new MemoryRepository(db);
  const result = await repo.addPersonalItemUnlessFull({ tenantId: "t1", userId: "u1", content: { kind: "note", text: "room for one more" }, maxItems: 300 });
  assert.equal(result.full, false);
  assert.equal(result.memoryId, "m-new");
});
