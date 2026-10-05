"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createMedicationService, readMedicationRequest } = require("../../nexus/companion/medications.js");
const { completeHealthRecordPlan } = require("../../nexus/brain/planner.js");
const { createHealthRecordExecutor, invalidReadingReason } = require("../../nexus/health/executor.js");

// Found by the chronic-health and grandmother audits: "I took my tablets this morning" was not logged, so the person's family was told a dose was waiting that had been taken; a medicine the person had
// stopped still told the circle "a dose is waiting"; "I missed my metformin" was not recorded at all; a typo like "metformin 5000mg" was saved as the reminder; two readings in one sentence kept only the
// first; and a reading planned by the AI model could save an impossible number.

function fakeStore() {
  const rows = []; let n = 0;
  return { rows,
    async addMedicationUnlessCapped({ tenantId, userId, content }) { const memoryId = `m${++n}`; rows.push({ memoryId, tenantId, userId, content }); return { memoryId, content }; },
    async createDose({ tenantId, userId, content }) { rows.push({ memoryId: `d${++n}`, tenantId, userId, content: { kind: "dose", ...content } }); },
    async claimDoseSlot({ tenantId, userId, medId, day, time, content }) {
      if (rows.find(item => item.userId === userId && item.content.kind === "dose" && item.content.medId === medId && item.content.day === day && item.content.time === time)) return null;
      const row = { memoryId: `d${++n}`, tenantId, userId, content: { kind: "dose", ...content } }; rows.push(row); return { memoryId: row.memoryId, ...row.content };
    },
    async listMedications({ tenantId, userId }) { return rows.filter(row => row.tenantId === tenantId && row.userId === userId && row.content.kind === "medication" && !row.removed).map(row => ({ memoryId: row.memoryId, content: row.content })); },
    async updateMedication({ memoryId, content }) { rows.find(row => row.memoryId === memoryId).content = content; return true; },
    async removeMedication({ memoryId }) { rows.find(row => row.memoryId === memoryId).removed = true; return true; },
    async cancelOpenDoses({ userId, medId }) { for (const row of rows.filter(item => item.userId === userId && item.content.kind === "dose" && item.content.medId === medId && ["pending", "alerted"].includes(item.content.status))) row.content = { ...row.content, status: "cancelled" }; return true; },
    async listAllActiveMedications() { return rows.filter(row => row.content.kind === "medication" && !row.removed).map(row => ({ memoryId: row.memoryId, tenantId: row.tenantId, userId: row.userId, content: row.content })); },
    async getDose({ userId, medId, day, time }) { const row = rows.find(item => item.userId === userId && item.content.kind === "dose" && item.content.medId === medId && item.content.day === day && item.content.time === time); return row ? { memoryId: row.memoryId, ...row.content } : null; },
    async dosesForDay({ userId, day }) { return rows.filter(row => row.userId === userId && row.content.kind === "dose" && row.content.day === day).map(row => ({ memoryId: row.memoryId, ...row.content })); },
    async updateDose({ memoryId, content, expectedStatus }) {
      const row = rows.find(item => item.memoryId === memoryId);
      if (expectedStatus !== undefined && row.content.status !== expectedStatus) return false;
      const { memoryId: _ignored, ...rest } = content; row.content = { kind: "dose", ...rest }; return true;
    },
    async listPendingDoses() { return rows.filter(row => row.content.kind === "dose" && row.content.status === "pending").map(row => ({ memoryId: row.memoryId, tenantId: row.tenantId, userId: row.userId, ...row.content })); }
  };
}
const AMINA = [{ otherId: "u2", otherName: "Amina", shares: { medications: true } }];
function setup({ members = [] } = {}) {
  const store = fakeStore(); const pushes = []; let clock = new Date("2026-09-20T05:00:00Z"); // 08:00 Nairobi
  const service = createMedicationService({ store, circle: { async activeMembers() { return members; } }, notifications: { enqueue: async () => {} }, devices: { listPushable: async () => [{ id: 1 }] },
    autonomyControl: { isPaused: async () => false }, push: async row => { pushes.push(row); }, memoryUserName: async () => "Baba Kamau", now: () => clock });
  const say = text => service.turn({ tenantId: "t1", userId: "u1", text, timeZone: "Africa/Nairobi", at: clock });
  const doses = () => store.rows.filter(row => row.content.kind === "dose").map(row => row.content);
  return { store, pushes, service, say, doses, set: value => { clock = value; }, get clock() { return clock; } };
}
const LATER = new Date("2026-09-20T09:30:00Z"); // 12:30 Nairobi, well past the two-hour wait

test("'I took my tablets this morning' and the other ways of saying it log the dose, so the family is not told one is waiting", async () => {
  for (const phrase of ["I took my tablets this morning", "took my meds", "I have taken all my tablets", "I took my medicine before breakfast", "I took my pills at 8", "Taken my pills", "I took my morning pills with food"]) {
    const s = setup({ members: AMINA });
    await s.say("Add medication metformin 500mg at 8am");
    await s.service.sendDue({ at: s.clock });
    assert.match(await s.say(phrase), /logged metformin as taken/, phrase);
    assert.equal(s.doses().filter(dose => dose.status === "taken").length, 1, phrase);
    await s.service.sendDue({ at: LATER });
    assert.equal(s.pushes.filter(push => push.userId === "u2").length, 0, `${phrase}: nobody is told a dose is waiting`);
  }
});

test("two medicines in one sentence are both logged, and 'I took them' means only what a reminder is waiting on", async () => {
  const s = setup();
  await s.say("Add medication metformin 500mg at 8am");
  await s.say("Add medication aspirin 75mg at 8am");
  await s.service.sendDue({ at: s.clock });
  assert.match(await s.say("I took my metformin and my aspirin"), /logged metformin and aspirin as taken/);
  assert.equal(s.doses().filter(dose => dose.status === "taken").length, 2);
  assert.equal(await s.say("I took it back to the shop"), null);
  const t = setup();
  await t.say("Add medication metformin 500mg at 8am");
  await t.service.sendDue({ at: t.clock });
  assert.match(await t.say("I took them"), /logged metformin as taken/);
  const u = setup();
  await u.say("Add medication metformin 500mg at 8am");
  assert.equal(await u.say("I took them"), null, "nothing is waiting, so this is just talk");
});

test("a missed dose is recorded as missed, never as taken, and says nothing about taking it late", async () => {
  const s = setup({ members: AMINA });
  await s.say("Add medication metformin 500mg at 8am");
  await s.service.sendDue({ at: s.clock });
  const reply = await s.say("I forgot to take my metformin");
  assert.match(reply, /noted that you missed your metformin/);
  assert.match(reply, /have not marked it as taken/);
  assert.match(reply, /pharmacist or clinic/);
  assert.doesNotMatch(reply, /take it now|take it late today|safe to take/i);
  assert.deepEqual(s.doses().map(dose => [dose.status, dose.reportedBy]), [["missed", "person"]]);
  assert.match(await s.say("Did I take my metformin today?"), /you told me you missed metformin/);
  await s.service.sendDue({ at: LATER });
  assert.equal(s.pushes.filter(push => push.userId === "u2").length, 0, "the person told Kyro themselves, so the circle is not asked about a dose again");
  for (const text of ["I missed the bus", "I forgot my keys", "I skipped lunch"]) assert.equal(await s.say(text), null, text);
  const none = setup();
  await none.say("Add medication aspirin 75mg at 8am");
  assert.match(await none.say("I missed my aspirin"), /noted that you missed your aspirin/);
  assert.equal(none.doses().length, 1);
});

test("a medicine the person has stopped never tells their circle that a dose is waiting", async () => {
  const s = setup({ members: AMINA });
  await s.say("Add medication metformin 500mg at 8am");
  await s.service.sendDue({ at: s.clock });
  assert.equal(s.doses()[0].status, "pending");
  assert.match(await s.say("my doctor stopped my metformin"), /stopped the reminders for metformin.*clinician or pharmacist knows/);
  assert.equal(s.doses()[0].status, "cancelled");
  await s.service.sendDue({ at: LATER });
  assert.equal(s.pushes.filter(push => push.userId === "u2").length, 0);
  // even when a dose was left pending (a medicine removed some other way), the sweep closes it instead of alerting
  const t = setup({ members: AMINA });
  await t.say("Add medication aspirin 75mg at 8am");
  await t.service.sendDue({ at: t.clock });
  await t.store.removeMedication({ memoryId: t.store.rows.find(row => row.content.kind === "medication").memoryId });
  await t.service.sendDue({ at: LATER });
  assert.equal(t.pushes.filter(push => push.userId === "u2").length, 0);
  assert.equal(t.doses()[0].status, "cancelled");
  assert.equal(await t.say("I stopped taking sugar"), null, "something that is not one of their medicines is left alone");
});

test("a dose that looks like a typing slip is asked about, and saved only when it is confirmed", async () => {
  const s = setup();
  const asked = await s.say("Add medication metformin 5000mg at 8am");
  assert.match(asked, /haven't saved metformin 5000 mg yet/);
  assert.match(asked, /add medication metformin 1000 mg/);
  assert.equal(s.store.rows.length, 0);
  assert.match(await s.say("Add medication amlodipine 100mg at 8am"), /haven't saved amlodipine/);
  assert.match(await s.say("Add medication metformin 500g at 8am"), /haven't saved metformin 500 g/);
  assert.match(await s.say("Add medication metformin 5000mg at 8am confirmed"), /^Done\. I'll remind you to take metformin 5000 mg/);
  assert.match(await s.say("Add medication metformin 1000mg at 8pm"), /^Done/);
  assert.match(await s.say("Add medication amlodipine 5mg at 8am"), /^Done/);
  assert.match(await s.say("Add medication vitamin c 1000mg at 8am"), /^Done/, "a medicine that is not on the list is never second-guessed");
  assert.equal(readMedicationRequest("Add medication metformin 500mg at 8am").confirmed, undefined);
});

test("two readings in one sentence are not silently cut to one", () => {
  const catalog = { tools: [{ toolId: "health.record" }], applications: [{ applicationId: "health" }] };
  const both = completeHealthRecordPlan("my sugar is 8 and my BP is 140/90", catalog);
  assert.equal(both.steps.length, 0);
  assert.match(both.response, /2 readings \(blood pressure and blood sugar\).*nothing has been saved yet/);
  assert.equal(completeHealthRecordPlan("record my blood pressure as 140 over 90", catalog).steps[0].input.systolic, 140);
});

test("a reading that cannot be real is never saved, even when the AI model planned it", async () => {
  const saved = [];
  const execute = createHealthRecordExecutor({ records: { create: async row => { saved.push(row); return { record_id: "r1", version: 1, record_type: "health_observation", created_at: "now" }; } } });
  const context = { tenantId: "t1", userId: "u1" };
  for (const input of [{ readingType: "blood-pressure", systolic: 400, diastolic: 20 }, { readingType: "blood-pressure", systolic: 120 }, { readingType: "blood-glucose", glucose: 9000 }, { readingType: "pulse", pulse: 900 }, { readingType: "oxygen-saturation", oxygenSaturation: 10 }]) {
    await assert.rejects(() => execute({ input, context, taskId: "k" }), error => error.code === "health_reading_invalid" && /did not save this/.test(error.message), JSON.stringify(input));
  }
  assert.equal(saved.length, 0);
  const ok = await execute({ input: { readingType: "blood-pressure", systolic: 130, diastolic: 85 }, context, taskId: "k" });
  assert.equal(ok.persisted, true);
  assert.equal(saved.length, 1);
  assert.equal(invalidReadingReason({ temperature: 37.5 }), null);
});

test("closing a stopped medicine's open doses is scoped to the person and the medicine, and touches only waiting doses", async () => {
  const { MedicationRepository } = require("../../nexus/companion/medication-store.js");
  const calls = [];
  const repository = new MedicationRepository({ query: async (sql, params) => { calls.push({ sql, params }); return { rows: [{ memory_id: "d1" }] }; } });
  assert.equal(await repository.cancelOpenDoses({ tenantId: "t1", userId: "u1", medId: "m9" }), 1);
  assert.deepEqual(calls[0].params, ["t1", "u1", "m9"]);
  assert.match(calls[0].sql, /tenant_id=\$1 and principal_id=\$2/);
  assert.match(calls[0].sql, /content->>'medId'=\$3/);
  assert.match(calls[0].sql, /in \('pending','alerted'\)/);
  assert.match(calls[0].sql, /"cancelled"/);
});
