"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const providers = require("../../server/providers/index.js");
const { scopeHealthDb, collectOwnedHealthBridgeRecords, eraseOwnedHealthBridgeRecords, HEALTH_BRIDGE_KEYS } = require("../../server/providers/healthRecordScope.js");

// The medical bridge providers kept every person's readings/intakes in ONE shared array with no owner: everyone saw everyone's, one person's
// readings pushed another's out of the 200-record cap, and export/erase could not find a person's own records. These run the REAL providers
// against one shared db, as two different people.

const bp = (systolic, diastolic) => ({ conditionFocus: "hypertension", systolic, diastolic, readingContext: "voice-reported", confirmed: true });
const env = process.env;

test("each person sees only their own readings, from the real chronic-disease provider", () => {
  const db = { profile: {} };
  const amina = scopeHealthDb(db, "amina");
  const brian = scopeHealthDb(db, "brian");
  assert.equal(providers.chronicDiseaseBridge.reading(bp(150, 95), amina, env).body.status, "completed");
  assert.equal(providers.chronicDiseaseBridge.reading(bp(120, 80), brian, env).body.status, "completed");
  const aminaReadings = providers.chronicDiseaseBridge.readings(amina).body.data.readings;
  const brianReadings = providers.chronicDiseaseBridge.readings(brian).body.data.readings;
  assert.equal(aminaReadings.length, 1);
  assert.equal(aminaReadings[0].systolic, 150);
  assert.equal(brianReadings.length, 1);
  assert.equal(brianReadings[0].systolic, 120);
  assert.equal(db.profile.nexusChronicDiseaseReadings.length, 2, "both are still stored, each stamped with its owner");
  assert.deepEqual(db.profile.nexusChronicDiseaseReadings.map(record => record.ownerId).sort(), ["amina", "brian"]);
  assert.equal(require("node:util").types.isProxy(db.profile), false, "the real db must never end up holding a per-person view");
});

test("trend summary and provider report only count the caller's own readings", () => {
  const db = { profile: {} };
  const amina = scopeHealthDb(db, "amina");
  const brian = scopeHealthDb(db, "brian");
  for (let i = 0; i < 3; i += 1) providers.chronicDiseaseBridge.reading(bp(140 + i, 90), amina, env);
  providers.chronicDiseaseBridge.reading(bp(118, 78), brian, env);
  assert.equal(providers.chronicDiseaseBridge.trendSummary({ conditionFocus: "hypertension" }, brian).body.data.summary.readingCount, 1);
  assert.equal(providers.chronicDiseaseBridge.trendSummary({ conditionFocus: "hypertension" }, amina).body.data.summary.readingCount, 3);
  const report = providers.chronicDiseaseBridge.providerReport({ conditionFocus: "hypertension" }, brian).body.data.report;
  assert.deepEqual(report.readingTableSummary.map(row => row.bloodPressure), ["118/78"]);
});

test("a person with no readings sees none -- never someone else's", () => {
  const db = { profile: {} };
  providers.chronicDiseaseBridge.reading(bp(150, 95), scopeHealthDb(db, "amina"), env);
  const stranger = scopeHealthDb(db, "carol");
  assert.deepEqual(providers.chronicDiseaseBridge.readings(stranger).body.data.readings, []);
  assert.equal(providers.chronicDiseaseBridge.trendSummary({ conditionFocus: "hypertension" }, stranger).body.data.summary.readingCount, 0);
});

test("the 200-record cap is per person: one person cannot push another's records out", () => {
  const db = { profile: {} };
  const amina = scopeHealthDb(db, "amina");
  const brian = scopeHealthDb(db, "brian");
  providers.chronicDiseaseBridge.reading(bp(150, 95), amina, env);
  for (let i = 0; i < 230; i += 1) providers.chronicDiseaseBridge.reading(bp(100 + (i % 50), 70), brian, env);
  assert.equal(providers.chronicDiseaseBridge.readings(amina).body.data.readings.length, 1, "Amina's reading survives Brian's flood");
  assert.equal(providers.chronicDiseaseBridge.readings(brian).body.data.readings.length, 200, "Brian is capped at 200 of his own");
});

test("older records that have no owner are never shown to anyone and are left in place", () => {
  const db = { profile: { nexusChronicDiseaseReadings: [{ systolic: 200, diastolic: 120, conditionFocus: "hypertension" }] } };
  const amina = scopeHealthDb(db, "amina");
  assert.deepEqual(providers.chronicDiseaseBridge.readings(amina).body.data.readings, []);
  providers.chronicDiseaseBridge.reading(bp(130, 85), amina, env);
  assert.equal(db.profile.nexusChronicDiseaseReadings.length, 2);
  assert.equal(db.profile.nexusChronicDiseaseReadings.some(record => !record.ownerId && record.systolic === 200), true, "the ownerless record is untouched");
});

test("every other medical provider is scoped the same way (RPM, RTM, telehealth, pharmacy, mobile clinic, patient support, medical support)", () => {
  const db = { profile: {} };
  const amina = scopeHealthDb(db, "amina");
  const brian = scopeHealthDb(db, "brian");
  const calls = [
    ["rpmBridge", "deviceReading", { metric: "pulse", value: 80, unit: "bpm", dataSource: "voice-reported", confirmed: true }, "deviceReadings", "readings"],
    ["rtmBridge", "activityEntry", { activityType: "fitness_training", description: "ran 5 km", confirmed: true }, "activityEntries", "entries"],
    ["telehealthBridge", "intake", { reason: "headache", confirmed: true }, "intakes", "intakes"],
    ["pharmacyBridge", "intake", { questionTopic: "dose timing", confirmed: true }, "intakes", "intakes"],
    ["mobileClinicBridge", "intake", { concern: "vaccination", confirmed: true }, "intakes", "intakes"],
    ["patientSupportBridge", "intake", { need: "transport", confirmed: true }, "intakes", "intakes"],
    ["medicalSupportBridge", "intake", { concern: "cough", confirmed: true }, "intakes", "intakes"]
  ];
  for (const [provider, write, body, read, field] of calls) {
    const saved = providers[provider][write](body, amina, env);
    assert.equal(saved.body.status, "completed", `${provider}.${write}: ${saved.body.message}`);
    assert.equal(providers[provider][read](amina).body.data[field].length, 1, `${provider} owner sees own`);
    assert.equal(providers[provider][read](brian).body.data[field].length, 0, `${provider} must not show Amina's record to Brian`);
  }
});

test("export finds a person's own records and erase removes only theirs", () => {
  const db = { profile: {} };
  providers.chronicDiseaseBridge.reading(bp(150, 95), scopeHealthDb(db, "amina"), env);
  providers.rpmBridge.deviceReading({ metric: "pulse", value: 80, unit: "bpm", dataSource: "voice-reported", confirmed: true }, scopeHealthDb(db, "amina"), env);
  providers.chronicDiseaseBridge.reading(bp(120, 80), scopeHealthDb(db, "brian"), env);
  const exported = collectOwnedHealthBridgeRecords(db, "amina");
  assert.deepEqual(Object.keys(exported).sort(), ["nexusChronicDiseaseReadings", "nexusRpmDeviceReadings"]);
  assert.equal(exported.nexusChronicDiseaseReadings[0].systolic, 150);
  // Check the records, not the text: a bare "120" can also appear inside a record id (they contain the current time in milliseconds).
  assert.equal(Object.values(exported).flat().some(record => record.systolic === 120), false, "Brian's reading must not be in Amina's export");
  assert.equal(eraseOwnedHealthBridgeRecords(db, "amina"), 2);
  assert.deepEqual(collectOwnedHealthBridgeRecords(db, "amina"), {});
  assert.equal(db.profile.nexusChronicDiseaseReadings.length, 1, "Brian's record remains");
  assert.equal(db.profile.nexusChronicDiseaseReadings[0].ownerId, "brian");
  assert.equal(eraseOwnedHealthBridgeRecords(db, ""), 0, "an empty owner id erases nothing");
});

test("scopeHealthDb refuses a missing owner (so a bug can never silently fall back to 'everyone')", () => {
  assert.throws(() => scopeHealthDb({ profile: {} }, ""), /owner id/);
  assert.throws(() => scopeHealthDb({ profile: {} }, undefined), /owner id/);
  assert.throws(() => scopeHealthDb(null, "x"), /db object/);
});

test("other db.profile data passes straight through the scoped view", () => {
  const db = { profile: { somethingElse: [1, 2, 3] }, users: [{ id: "u" }] };
  const view = scopeHealthDb(db, "amina");
  assert.deepEqual(view.profile.somethingElse, [1, 2, 3]);
  view.profile.newKey = "x";
  assert.equal(db.profile.newKey, "x");
  assert.equal(view.users.length, 1);
  assert.equal(HEALTH_BRIDGE_KEYS.length, 16);
});
