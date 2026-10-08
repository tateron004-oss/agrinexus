"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { storeReadingsTurn, mergedHealthReadingsTurn } = require("../../nexus/health/store-readings.js");
const { healthReadingsTurn } = require("../../nexus/health/readings-conversation.js");
const { createMemoryRecords } = require("../../nexus/health/memory-records.js");
const { createHealthRecordExecutor } = require("../../nexus/health/executor.js");
const { createChronicDiseaseReadingExecutor } = require("../../nexus/health/chronic-executor.js");

// Readings saved the planner way (the "health.record" and "health.chronic-reading" tools, which write to the record store) must be shown, deleted and corrected by the same conversation as the
// readings kept in db.profile. These tests use a fake record store with the real store's scoping: the real Postgres store cannot be run here.

const TENANT = "tenant_a";
const ME = "00000000-0000-4000-8000-000000000001";
const OTHER = "00000000-0000-4000-8000-000000000002";
const START = Date.parse("2026-10-07T08:00:00Z");

async function saveWithPlanner(records, userId, input, tool = "health.record", tenantId = TENANT) {
  const context = { tenantId, userId };
  const execute = tool === "health.record" ? createHealthRecordExecutor({ records }) : createChronicDiseaseReadingExecutor({ records });
  return execute({ input, context, taskId: null });
}
function chat(records, { userId = ME, tenantId = TENANT, language, canWrite = true, timeZone = "Africa/Nairobi" } = {}) {
  let clock = START;
  const say = async (text, extra = {}) => { clock += 4000; return storeReadingsTurn({ records, tenantId, userId, text, language, canWrite, timeZone, now: new Date(clock), ...extra }); };
  say.wait = ms => { clock += ms; };
  return say;
}
// Stored readings are dated by the store itself; for these tests they were all saved a minute before the conversation starts.
const settled = records => { for (const row of records.rows) row.created_at = new Date(START - 60 * 1000); return records; };
const live = (records, userId = ME) => records.rows.filter(row => !row.deleted_at && row.owner_id === userId && ["health_observation", "chronic_disease_reading"].includes(row.record_type));

test("a blood pressure saved by the planner is shown by 'show my blood pressure readings', and only to the person it belongs to", async () => {
  const records = createMemoryRecords();
  await saveWithPlanner(records, ME, { intakeType: "blood-pressure", readingType: "blood-pressure", systolic: 150, diastolic: 95 });
  await saveWithPlanner(records, OTHER, { intakeType: "blood-pressure", readingType: "blood-pressure", systolic: 111, diastolic: 71 });
  const shown = await chat(records)("show my blood pressure readings");
  assert.equal(shown.kind, "show");
  assert.match(shown.response, /You have 1 saved blood pressure reading:/);
  assert.match(shown.response, /150 over 95/);
  assert.doesNotMatch(shown.response, /111/);
  const theirs = await chat(records, { userId: OTHER })("show my blood pressure readings");
  assert.match(theirs.response, /111 over 71/);
  assert.doesNotMatch(theirs.response, /150/);
  const nobody = await chat(records, { userId: "00000000-0000-4000-8000-000000000003" })("show my blood pressure readings");
  assert.match(nobody.response, /don't have any saved blood pressure readings/);
  const otherTenant = await chat(records, { tenantId: "tenant_b" })("show my blood pressure readings");
  assert.match(otherTenant.response, /don't have any saved blood pressure readings/, "another tenant's store is never read");
});

test("sugar, pulse, oxygen and temperature saved by the planner are listed with the unit they were stored in", async () => {
  const records = createMemoryRecords();
  await saveWithPlanner(records, ME, { readingType: "blood-glucose", glucose: 130, glucoseUnit: "mg/dL" });
  await saveWithPlanner(records, ME, { readingType: "pulse", pulse: 78 });
  await saveWithPlanner(records, ME, { readingType: "oxygen-saturation", oxygenSaturation: 96 });
  await saveWithPlanner(records, ME, { readingType: "temperature", temperature: 38.5, temperatureUnit: "C" });
  const all = await chat(records)("show my readings");
  assert.match(all.response, /130 mg\/dL/);
  assert.match(all.response, /78 bpm/);
  assert.match(all.response, /96%/);
  assert.match(all.response, /38\.5 C/);
  assert.match(all.response, /not a diagnosis/);
});

test("'delete my last reading' names the reading, asks first, and only a yes removes that one stored reading", async () => {
  const records = createMemoryRecords();
  await saveWithPlanner(records, ME, { readingType: "blood-pressure", systolic: 150, diastolic: 95 });
  await saveWithPlanner(records, ME, { readingType: "blood-pressure", systolic: 120, diastolic: 80 });
  await saveWithPlanner(records, OTHER, { readingType: "blood-pressure", systolic: 111, diastolic: 71 });
  const say = chat(records);
  const asked = await say("delete my last reading");
  assert.equal(asked.requiresConfirmation, true);
  assert.match(asked.response, /Your last blood pressure reading was 120 over 80/);
  assert.match(asked.response, /Shall I delete it\?/);
  assert.equal(live(records).length, 2, "asking deletes nothing");
  const done = await say("yes");
  assert.match(done.response, /Done\. I deleted your blood pressure reading 120 over 80/);
  assert.equal(done.wrote, true);
  const left = live(records);
  assert.equal(left.length, 1);
  assert.equal(left[0].data.systolic, 150);
  assert.equal(live(records, OTHER).length, 1, "someone else's reading is untouched");
  assert.equal(await say("yes"), null, "a second yes finds nothing waiting");
});

test("a no keeps the reading", async () => {
  const records = createMemoryRecords();
  await saveWithPlanner(records, ME, { readingType: "blood-pressure", systolic: 150, diastolic: 95 });
  const say = chat(records);
  await say("delete my last blood pressure reading");
  const kept = await say("no");
  assert.match(kept.response, /I have not deleted anything/);
  assert.equal(live(records).length, 1);
});

test("'that was wrong, it was 133/78' right after a stored reading asks, then changes that reading in place after a yes", async () => {
  const records = createMemoryRecords();
  await saveWithPlanner(records, ME, { readingType: "blood-pressure", systolic: 150, diastolic: 95 });
  settled(records);
  const say = chat(records);
  const wrong = await say("that was wrong, it was 133/78");
  assert.equal(wrong.kind, "correct");
  assert.match(wrong.response, /Your last blood pressure reading was 150 over 95/);
  assert.match(wrong.response, /Change it to 133 over 78\?/);
  assert.equal(live(records)[0].data.systolic, 150, "asking changes nothing");
  const changed = await say("yes");
  assert.match(changed.response, /Done\. I changed your blood pressure reading from 150 over 95 to 133 over 78\./);
  assert.deepEqual([live(records)[0].data.systolic, live(records)[0].data.diastolic], [133, 78]);
  assert.equal(live(records).length, 1);
});

test("a correction to a sugar is stored in the unit the planner stores (mg/dL), not as the mmol number", async () => {
  const records = createMemoryRecords();
  await saveWithPlanner(records, ME, { readingType: "blood-glucose", glucose: 130, glucoseUnit: "mg/dL" });
  settled(records);
  const say = chat(records);
  await say("my sugar reading was wrong, it was 9.0 mmol");
  const changed = await say("yes");
  assert.match(changed.response, /Done\. I changed your blood sugar reading/);
  assert.equal(live(records)[0].data.glucose, 162);
});

test("'delete all my health records' says how many, refuses a bare yes, and deletes only this person's readings after 'yes, delete all N'", async () => {
  const records = createMemoryRecords();
  await saveWithPlanner(records, ME, { readingType: "blood-pressure", systolic: 150, diastolic: 95 });
  await saveWithPlanner(records, ME, { readingType: "blood-glucose", glucose: 130, glucoseUnit: "mg/dL" });
  await saveWithPlanner(records, ME, { readingType: "pulse", pulse: 78 });
  await saveWithPlanner(records, OTHER, { readingType: "blood-pressure", systolic: 111, diastolic: 71 });
  const intake = await records.create({ tenantId: TENANT, ownerId: ME, subjectId: ME, workspaceId: "health-records", recordType: "chronic_disease_intake", classification: "health", data: { conditionFocus: "diabetes" } });
  const say = chat(records);
  const asked = await say("delete all my health records");
  assert.equal(asked.requiresConfirmation, true);
  assert.match(asked.response, /You have 3 saved readings/);
  assert.match(asked.response, /yes, delete all 3/);
  const bare = await say("yes");
  assert.match(bare.response, /please say the full words: "yes, delete all 3"/);
  assert.equal(live(records).length, 3, "a bare yes deletes nothing");
  const wrongCount = await say("yes, delete all 5");
  assert.match(wrongCount.response, /yes, delete all 3/);
  assert.equal(live(records).length, 3);
  const done = await say("yes, delete all 3");
  assert.match(done.response, /I deleted 3 health readings/);
  assert.equal(live(records).length, 0);
  assert.equal(live(records, OTHER).length, 1, "another person's reading is untouched");
  assert.equal(records.rows.find(row => row.record_id === intake.record_id).deleted_at, null, "records that are not readings are untouched");
});

test("a reading that was saved by the chronic-reading tool is shown, corrected and deleted too", async () => {
  const records = createMemoryRecords();
  await saveWithPlanner(records, ME, { conditionFocus: "hypertension", systolic: 150, diastolic: 95, pulse: 80, dateTimeText: "today" }, "health.chronic-reading");
  const say = chat(records);
  const shown = await say("show my readings");
  assert.match(shown.response, /150 over 95/);
  assert.match(shown.response, /80 bpm/);
  await say("delete my last pulse reading");
  const gone = await say("yes");
  assert.match(gone.response, /Done\. I deleted your pulse reading 80 bpm/);
  const row = live(records)[0];
  assert.equal(row.data.pulse, undefined);
  assert.equal(row.data.systolic, 150, "the blood pressure in the same record is kept");
});

test("in Kiswahili, the same commands work and are answered in Kiswahili", async () => {
  const records = createMemoryRecords();
  await saveWithPlanner(records, ME, { readingType: "blood-pressure", systolic: 150, diastolic: 95 });
  await saveWithPlanner(records, ME, { readingType: "blood-pressure", systolic: 120, diastolic: 80 });
  const say = chat(records, { language: "sw" });
  const shown = await say("nionyeshe vipimo vyangu vya presha");
  assert.match(shown.response, /Una vipimo 2 vya shinikizo la damu/);
  assert.match(shown.response, /120 juu ya 80/);
  const asked = await say("futa kipimo cha mwisho");
  assert.match(asked.response, /Kipimo chako cha mwisho cha shinikizo la damu kilikuwa 120 juu ya 80/);
  const done = await say("ndiyo");
  assert.match(done.response, /Nimemaliza\. Nimefuta kipimo chako cha shinikizo la damu 120 juu ya 80/);
  assert.equal(live(records).length, 1);
  const all = await say("futa taarifa zangu zote za afya");
  assert.match(all.response, /ndiyo, futa zote 1/);
  const refused = await say("ndiyo");
  assert.match(refused.response, /tafadhali sema maneno kamili/);
  await say("ndiyo, futa zote 1");
  assert.equal(live(records).length, 0);
});

test("who can see my health information is answered with the existing text, in both languages", async () => {
  const records = createMemoryRecords();
  const en = await chat(records)("who can see my health information");
  assert.equal(en.kind, "who-can-see");
  assert.match(en.response, /saved under your own account/);
  const sw = await chat(records, { language: "sw" })("nani anaweza kuona vipimo vyangu vya afya");
  assert.match(sw.response, /vimehifadhiwa kwenye akaunti yako mwenyewe/);
});

test("an account that may not write health records cannot delete or correct, and is told so", async () => {
  const records = createMemoryRecords();
  await saveWithPlanner(records, ME, { readingType: "blood-pressure", systolic: 150, diastolic: 95 });
  const say = chat(records, { canWrite: false });
  const refused = await say("delete my last reading");
  assert.equal(refused.status, "restricted");
  assert.equal(live(records).length, 1);
  assert.match((await say("show my blood pressure readings")).response, /150 over 95/, "reading is still allowed");
});

test("when the store cannot be read, it says so and nothing is shown, changed or deleted", async () => {
  const records = createMemoryRecords();
  await saveWithPlanner(records, ME, { readingType: "blood-pressure", systolic: 150, diastolic: 95 });
  const broken = { ...records, list: async () => { throw new Error("connection refused"); } };
  const en = await chat(broken)("delete all my health records");
  assert.equal(en.kind, "store-unreachable");
  assert.match(en.response, /could not reach your saved health readings just now, so I have not shown, changed or deleted anything/);
  const sw = await chat(broken, { language: "sw" })("nionyeshe vipimo vyangu vya presha");
  assert.match(sw.response, /Sikuweza kufikia vipimo vyako vya afya/);
  assert.equal(live(records).length, 1);
});

test("when the write fails, the answer does not claim it was done", async () => {
  const records = createMemoryRecords();
  await saveWithPlanner(records, ME, { readingType: "blood-pressure", systolic: 150, diastolic: 95 });
  const say = chat({ ...records, list: records.list, remove: async () => { throw new Error("db down"); }, update: records.update, create: records.create });
  await say("delete my last reading");
  const failed = await say("yes");
  assert.equal(failed.kind, "store-write-failed");
  assert.doesNotMatch(failed.response, /Done|deleted your/);
  assert.match(failed.response, /could not be updated just now/);
  assert.equal(live(records).length, 1);
});

test("a yes that follows nothing, or a sentence that is not about readings, is not taken by this", async () => {
  const records = createMemoryRecords();
  await saveWithPlanner(records, ME, { readingType: "blood-pressure", systolic: 150, diastolic: 95 });
  const say = chat(records);
  assert.equal(await say("yes"), null);
  assert.equal(await say("what is the weather in Nakuru"), null);
  assert.equal(await say("my blood pressure is 140 over 90"), null, "a new reading is saved by the planner's own recording step, not here");
  assert.equal(await say("remind me to take my medicine tomorrow at 8"), null);
  assert.equal(live(records).length, 1);
});

test("a question left unanswered for longer than the allowed time is dropped: a late yes deletes nothing", async () => {
  const records = createMemoryRecords();
  await saveWithPlanner(records, ME, { readingType: "blood-pressure", systolic: 150, diastolic: 95 });
  const say = chat(records);
  await say("delete my last reading");
  say.wait(11 * 60 * 1000);
  assert.equal(await say("yes"), null);
  assert.equal(live(records).length, 1);
});

test("on the older routes, readings kept both ways are shown together and the newest one is the one changed", async () => {
  const records = createMemoryRecords();
  // the older routes know the person by their own id; the record store knows them by another (the authoritative id), so the two ids differ here on purpose
  const db = { profile: {} }; const user = { id: "legacy-1", email: "a@example.org" };
  let clock = START - 3 * 24 * 3600 * 1000;
  const legacy = text => { clock += 4000; return healthReadingsTurn({ db, user, text, now: new Date(clock) }); };
  legacy("my blood pressure is 140 over 90"); legacy("yes");
  clock = START;
  await saveWithPlanner(records, ME, { readingType: "blood-pressure", systolic: 150, diastolic: 95 });
  const store = async () => ({ records, tenantId: TENANT, userId: ME, timeZone: "Africa/Nairobi" });
  const turn = text => { clock += 4000; return mergedHealthReadingsTurn({ db, user, text, storeFor: store, now: new Date(Math.max(clock, Date.now() + 60000)) }); };
  const shown = await turn("show my blood pressure readings");
  assert.match(shown.response, /You have 2 saved blood pressure readings/);
  assert.match(shown.response, /150 over 95/);
  assert.match(shown.response, /140 over 90/);
  assert.equal(db.profile.nexusChronicDiseaseReadings.filter(r => r.origin).length, 0, "the stored readings are never left behind in db.profile");
  const asked = await turn("delete my last reading");
  assert.match(asked.response, /150 over 95/);
  await turn("yes");
  assert.equal(live(records, ME).length, 0);
  assert.equal(db.profile.nexusChronicDiseaseReadings.length, 1, "the older reading is still there");
  const gone = await turn("delete all my health records");
  assert.match(gone.response, /You have 1 saved reading/);
});

test("with no record store at all, the older routes behave exactly as before", async () => {
  const db = { profile: {} }; const user = { id: "legacy-2", email: "b@example.org" };
  const turn = await mergedHealthReadingsTurn({ db, user, text: "show my blood pressure readings", storeFor: async () => null });
  assert.match(turn.response, /don't have any saved blood pressure readings/);
  const noHook = await mergedHealthReadingsTurn({ db, user, text: "show my blood pressure readings" });
  assert.match(noHook.response, /don't have any saved blood pressure readings/);
});

test("on the older routes an unreachable store is said plainly, and nothing is changed", async () => {
  const db = { profile: {} }; const user = { id: "legacy-3", email: "c@example.org" };
  const turn = await mergedHealthReadingsTurn({ db, user, text: "delete all my health records", storeFor: async () => { throw new Error("down"); } });
  assert.equal(turn.kind, "store-unreachable");
  assert.match(turn.response, /have not shown, changed or deleted anything/);
});
