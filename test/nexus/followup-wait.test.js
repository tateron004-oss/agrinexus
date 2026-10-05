"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createMedicationService, readMedicationRequest } = require("../../nexus/companion/medications.js");
const { parseCheckinControl, readCheckinWait, createCheckinService } = require("../../nexus/companion/checkins.js");
const { createCompanion } = require("../../nexus/companion/index.js");

// The wait before Kyro tells the people someone chose (a missed check-in: 3 hours, an unconfirmed dose: 2 hours) was fixed for everyone. A person can
// now choose their own, within 1 to 24 hours for check-ins and 1 to 12 for doses. Nothing is told sooner than they said, and nobody is told that was
// not already chosen.

// ---------- reading what was said ----------
test("a check-in wait is read from the ways people say it", () => {
  for (const [text, hours] of [
    ["Tell my circle if I don't answer for 6 hours", 6], ["tell my circle if I do not answer my check-in for 2 hours", 2], ["Wait 4 hours before telling my circle about a missed check-in", 4],
    ["wait six hours before telling my family", 6], ["Set my check-in follow-up to 12 hours", 12], ["Change my check-in wait to 1 hour", 1], ["give me 5 hours before alerting anyone", 5]
  ]) assert.deepEqual(parseCheckinControl(text), { action: "wait", graceHours: hours }, text);
  assert.deepEqual(parseCheckinControl("Check in on me every morning at 8 and tell my circle after 6 hours"), { action: "enable", timeOfDay: "08:00", timeGiven: true, graceHours: 6 });
  assert.deepEqual(parseCheckinControl("Check in on me every morning at 8"), { action: "enable", timeOfDay: "08:00", timeGiven: true }, "no wait said: nothing added");
  for (const text of ["I don't answer calls from strangers", "tell my circle I am safe", "Wait 4 hours before the market opens", "stop my check-ins"]) assert.notEqual(readCheckinWait(text)?.hours, 4, text);
  assert.equal(readCheckinWait("I don't answer the phone for 3 hours"), null);
});

test("a dose wait is read, and ordinary medicine phrases are untouched", () => {
  assert.deepEqual(readMedicationRequest("Tell my circle if I miss a dose for 1 hour"), { action: "grace", hours: 1 });
  assert.deepEqual(readMedicationRequest("Wait 3 hours before telling my circle about a missed dose"), { action: "grace", hours: 3 });
  assert.deepEqual(readMedicationRequest("Set my medicine follow-up to 4 hours"), { action: "grace", hours: 4 });
  assert.deepEqual(readMedicationRequest("Add medication metformin 500mg at 8am and 8pm"), { action: "add", name: "metformin", dose: "500 mg", times: ["08:00", "20:00"] });
  assert.equal(readMedicationRequest("Wait 3 hours before telling my circle about the meeting"), null);
});

// ---------- the companion: replies and limits ----------
function checkinWorld() {
  const schedules = [];
  const settings = {
    async set(args) { const saved = { graceHours: 3, ...args }; const i = schedules.findIndex(item => item.userId === args.userId); if (i >= 0) schedules.splice(i, 1); schedules.push(saved); return { ...saved, replaced: i >= 0 }; },
    async stop() { return 0; }, async get({ userId }) { return schedules.find(item => item.userId === userId) || null; }, async listActive() { return schedules.slice(); }
  };
  const circle = { async activeMembers() { return []; }, async userName() { return "Baba"; } };
  const companion = createCompanion({ circle, checkinSettings: settings, checkinState: { async get() { return null; }, async create() {}, async update() { return true; }, async listPending() { return []; }, async hasActivitySince() { return false; } }, memory: null, notifications: { enqueue: async () => {} }, devices: { listPushable: async () => [{ id: 1 }] }, now: () => new Date("2026-09-20T05:00:00Z") });
  const ask = text => companion.turn({ command: { text, tenantId: "t1", actorId: "u1" }, context: { timeZone: "Africa/Nairobi" } });
  return { ask, schedules };
}

test("starting check-ins with a wait, changing it later, and hearing it back", async () => {
  const w = checkinWorld();
  assert.match(await w.ask("Check in on me every morning at 8 and tell my circle after 6 hours"), /^Done\. I'll check in on you every day at 8:00 am/);
  assert.equal(w.schedules[0].graceHours, 6);
  assert.match(await w.ask("Tell my circle if I don't answer for 2 hours"), /^Done\. If I can't reach you and you say nothing to me for 2 hours, I'll tell the people you choose to share your check-ins with that your check-in was missed\. Only that, never your answers\./);
  assert.equal(w.schedules[0].graceHours, 2);
  assert.equal(w.schedules[0].timeOfDay, "08:00", "the time of the check-in is kept");
  assert.match(await w.ask("Do I have check-ins?"), /If you don't answer for 2 hours, the people you share check-ins with are told\./);
  assert.match(await w.ask("Set my check-in follow-up to 1 hour"), /for 1 hour, I'll tell/);
});

test("a wait outside 1 to 24 hours is refused and nothing changes; with no check-ins it asks to start them first", async () => {
  const w = checkinWorld();
  assert.match(await w.ask("Tell my circle if I don't answer for 6 hours"), /^You don't have daily check-ins yet\./);
  await w.ask("Check in on me every morning at 8");
  assert.equal(w.schedules[0].graceHours, 3, "the default is unchanged by starting without a wait");
  for (const text of ["Tell my circle if I don't answer for 0 hours", "Tell my circle if I don't answer for 30 hours", "Wait 48 hours before telling my circle about a missed check-in"]) {
    assert.match(await w.ask(text), /^I can wait between 1 and 24 hours before telling the people you chose\. Nothing was changed\./, text);
  }
  assert.equal(w.schedules[0].graceHours, 3);
});

// ---------- medicines: the sweep follows each medicine's own wait ----------
function fakeStore() {
  const rows = []; let n = 0;
  return { rows,
    async addMedicationUnlessCapped({ tenantId, userId, content }) { const memoryId = `m${++n}`; rows.push({ memoryId, tenantId, userId, content }); return { memoryId, content }; },
    async claimDoseSlot({ tenantId, userId, medId, day, time, content }) {
      if (rows.find(item => item.userId === userId && item.content.kind === "dose" && item.content.medId === medId && item.content.day === day && item.content.time === time)) return null;
      const row = { memoryId: `d${++n}`, tenantId, userId, content: { kind: "dose", ...content } }; rows.push(row); return { memoryId: row.memoryId, ...row.content };
    },
    async listMedications({ tenantId, userId }) { return rows.filter(row => row.tenantId === tenantId && row.userId === userId && row.content.kind === "medication" && !row.removed).map(row => ({ memoryId: row.memoryId, content: row.content })); },
    async updateMedication({ memoryId, content }) { rows.find(row => row.memoryId === memoryId).content = content; return true; },
    async listAllActiveMedications() { return rows.filter(row => row.content.kind === "medication" && !row.removed).map(row => ({ memoryId: row.memoryId, tenantId: row.tenantId, userId: row.userId, content: row.content })); },
    async getDose({ userId, medId, day, time }) { const row = rows.find(item => item.userId === userId && item.content.kind === "dose" && item.content.medId === medId && item.content.day === day && item.content.time === time); return row ? { memoryId: row.memoryId, ...row.content } : null; },
    async updateDose({ memoryId, content, expectedStatus }) { const row = rows.find(item => item.memoryId === memoryId); if (expectedStatus !== undefined && row.content.status !== expectedStatus) return false; const { memoryId: _ignored, ...rest } = content; row.content = { kind: "dose", ...rest }; return true; },
    async listPendingDoses() { return rows.filter(row => row.content.kind === "dose" && row.content.status === "pending").map(row => ({ memoryId: row.memoryId, tenantId: row.tenantId, userId: row.userId, ...row.content })); }
  };
}
function medicineWorld({ members = [{ otherId: "u-amina", otherName: "Amina", shares: { medications: true } }] } = {}) {
  const store = fakeStore(); const pushes = []; let clock = new Date("2026-09-20T05:00:00Z"); // 08:00 Nairobi
  const service = createMedicationService({ store, circle: { async activeMembers() { return members; } }, notifications: { enqueue: async () => {} }, devices: { listPushable: async () => [{ id: 1 }] }, autonomyControl: { isPaused: async () => false },
    push: async row => { pushes.push(row); }, memoryUserName: async () => "Baba Kamau", now: () => clock });
  const say = text => service.turn({ tenantId: "t1", userId: "u1", text, timeZone: "Africa/Nairobi", at: clock });
  return { store, pushes, service, say, set: value => { clock = value; } };
}
const at = hours => new Date(new Date("2026-09-20T05:00:00Z").getTime() + hours * 3600 * 1000);

test("the follow-up for an unconfirmed dose comes after the person's own wait (default 2 hours)", async () => {
  const w = medicineWorld();
  await w.say("Add medication metformin 500mg at 8am");
  await w.service.sendDue({ at: at(0) });
  w.pushes.length = 0;
  assert.equal((await w.service.sendDue({ at: at(1.9) })).alerted, 0, "default: not before 2 hours");
  assert.equal((await w.service.sendDue({ at: at(2) })).alerted, 1, "default: at 2 hours");
  const custom = medicineWorld();
  await custom.say("Add medication metformin 500mg at 8am");
  assert.match(await custom.say("Tell my circle if I miss a dose for 4 hours"), /^Done\. If a dose stays unconfirmed for 4 hours, I'll tell Amina that a dose is waiting\. Only that, never which medicine or the dose\./);
  await custom.service.sendDue({ at: at(0) });
  assert.equal((await custom.service.sendDue({ at: at(3) })).alerted, 0, "4 hours chosen: nothing at 3");
  assert.equal((await custom.service.sendDue({ at: at(4) })).alerted, 1, "4 hours chosen: told at 4");
  const quick = medicineWorld();
  await quick.say("Add medication metformin 500mg at 8am");
  await quick.say("Set my medicine follow-up to 1 hour");
  await quick.service.sendDue({ at: at(0) });
  assert.equal((await quick.service.sendDue({ at: at(1) })).alerted, 1, "1 hour chosen: told at 1");
});

test("the wait applies to every medicine, new medicines take it too, and the limits are said", async () => {
  const w = medicineWorld();
  assert.match(await w.say("Wait 3 hours before telling my circle about a missed dose"), /^You have no medicine reminders yet\./);
  await w.say("Add medication metformin 500mg at 8am");
  await w.say("Add medication aspirin 75mg at 8am");
  await w.say("Wait 3 hours before telling my circle about a missed dose");
  assert.deepEqual(w.store.rows.filter(row => row.content.kind === "medication").map(row => row.content.graceHours), [3, 3]);
  await w.say("Add medication vitamin d at 9am");
  assert.equal(w.store.rows.find(row => row.content.name === "vitamin d").content.graceHours, 3, "a medicine added later takes the person's wait");
  for (const text of ["Tell my circle if I miss a dose for 0 hours", "Tell my circle if I miss a dose for 13 hours"]) assert.match(await w.say(text), /^I can wait between 1 and 12 hours before telling the people you chose\. Nothing was changed\./, text);
  assert.deepEqual(w.store.rows.filter(row => row.content.kind === "medication").map(row => row.content.graceHours), [3, 3, 3]);
  const nobody = medicineWorld({ members: [] });
  await nobody.say("Add medication metformin 500mg at 8am");
  assert.match(await nobody.say("Tell my circle if I miss a dose for 2 hours"), /^Done\. I'll wait 2 hours\. Nobody is told anything yet/);
});

test("check-in follow-ups use the person's wait too (the sweep)", async () => {
  const pending = [{ memoryId: "c1", tenantId: "t1", userId: "u1", day: "2026-09-20", status: "pending", promptedAt: "2026-09-20T05:00:00.000Z" }];
  const updates = []; const pushed = [];
  const service = createCheckinService({
    settings: { async listActive() { return [{ scheduleId: "s1", tenantId: "t1", userId: "u1", timeOfDay: "20:00", timeZone: "Africa/Nairobi", graceHours: 6, createdAt: "x" }]; } },
    state: { async get() { return null; }, async create() {}, async update(args) { updates.push(args.content.status); return true; }, async listPending() { return pending; }, async hasActivitySince() { return false; } },
    circle: { async activeMembers() { return [{ otherId: "u-amina", otherName: "Amina", shares: { checkins: true } }]; } }, push: async row => { pushed.push(row); }, notifications: { enqueue: async () => {} }, memoryUserName: async () => "Baba Kamau" });
  assert.equal((await service.sendDue({ at: at(5.9) })).alerted, 0, "6 hours chosen: nothing at 5.9");
  assert.equal((await service.sendDue({ at: at(6) })).alerted, 1, "told at 6");
  assert.deepEqual(updates, ["alerted"]);
});
