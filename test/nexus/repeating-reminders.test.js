"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { readRepeatRequest } = require("../../nexus/reminders/repeat-phrase.js");
const { repeatReminderTurn, createRepeatReminderService, runsOn } = require("../../nexus/reminders/repeat-service.js");
const { RepeatReminderRepository, JOB_TYPE, PARKED, MAX_PER_PERSON } = require("../../nexus/reminders/repeat-store.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { createHandlers } = require("../../nexus/workers/handlers.js");

// Reminders that repeat. "Remind me every morning at 8 to check the pump" used to set ONE reminder and say it would not repeat.

test("what people say is read as a repeating reminder, with the right days, times and task", () => {
  const add = (text, task, times, days) => assert.deepEqual(readRepeatRequest(text), { action: "add", task, times, days }, text);
  add("Remind me every morning at 8 to check the water pump", "check the water pump", ["08:00"], "daily");
  add("remind me every day at 6pm to feed the goats", "feed the goats", ["18:00"], "daily");
  add("Every Monday at 9 remind me to call the buyer", "call the buyer", ["09:00"], [1]);
  add("remind me to take my pills daily at 8am and 8pm", "take my pills", ["08:00", "20:00"], "daily");
  add("remind me on Mondays and Thursdays at 7:30 to open the shop", "open the shop", ["07:30"], [1, 4]);
  add("remind me every weekday at 7 to check the tank", "check the tank", ["07:00"], "weekdays");
  add("remind me every evening to lock the gate", "lock the gate", ["18:00"], "daily");
  add("remind me every night at 9 to charge my phone", "charge my phone", ["21:00"], "daily");
  add("remind me every Friday to send invoices", "send invoices", ["09:00"], [5]);
  add("set a daily reminder to water the seedlings at 6", "water the seedlings", ["18:00"], "daily");
  add("set a daily reminder to count 12 sheep", "count 12 sheep", ["09:00"], "daily");
  add("can you remind me every morning at 7 to take my pills", "take my pills", ["07:00"], "daily");
  add("remind me about the clinic every Tuesday at 10am", "about the clinic", ["10:00"], [2]);
  add("remind me every day at 5 to close the shop", "close the shop", ["17:00"], "daily");
});

test("a repeat that cannot be done is said plainly, and a missing day or task is asked for", () => {
  for (const text of ["remind me every few days to call mama", "remind me every 3 months to service the tractor", "remind me yearly to renew the licence", "remind me twice a month to check the books", "remind me every minute to blink"]) assert.deepEqual(readRepeatRequest(text), { action: "unsupported" }, text);
  assert.deepEqual(readRepeatRequest("remind me monthly to pay rent"), { action: "need-day-of-month" });
  assert.deepEqual(readRepeatRequest("remind me every other week to call mama"), { action: "need-day" });
  assert.deepEqual(readRepeatRequest("remind me every week to call mama"), { action: "need-day" });
  assert.deepEqual(readRepeatRequest("remind me every day"), { action: "need-task" });
});

test("a reminder that happens once, a question, or a plain statement is never taken as a repeating reminder", () => {
  for (const text of ["remind me tomorrow at 8 to check the pump", "remind me to call the buyer on Friday", "remind me in 2 hours to turn off the tap", "how do I set a reminder every morning?", "I water the plants every morning", "what are my reminders?", "cancel my reminder to call the buyer", "stop the music", "I want to stop eating sugar", "I ran every day this week"]) assert.equal(readRepeatRequest(text), null, text);
});

test("listing and stopping are read, and a plain 'cancel my reminder' is left for the one-time reminders", () => {
  assert.deepEqual(readRepeatRequest("show my repeating reminders"), { action: "list" });
  assert.deepEqual(readRepeatRequest("what are my daily reminders"), { action: "list" });
  assert.deepEqual(readRepeatRequest("stop my daily reminder to check the pump"), { action: "stop", number: null, subject: "check the pump", explicit: true });
  assert.deepEqual(readRepeatRequest("cancel repeating reminder 2"), { action: "stop", number: 2, subject: "", explicit: true });
  assert.deepEqual(readRepeatRequest("stop all my repeating reminders"), { action: "stop", all: true, explicit: true });
  assert.equal(readRepeatRequest("stop reminding me to feed the goats").explicit, false);
});

// ---- the turn, against an in-memory store with the contract of RepeatReminderRepository ----
function fakeStore() {
  const rows = []; let n = 0;
  return {
    rows,
    async add({ tenantId, userId, task, timeOfDay, days, timeZone }) {
      const mine = rows.filter(row => row.userId === userId && row.active);
      const same = mine.find(row => row.task.toLowerCase() === task.toLowerCase() && row.timeOfDay === timeOfDay && JSON.stringify(row.days) === JSON.stringify(days));
      if (same) return { duplicate: true, scheduleId: same.scheduleId };
      if (mine.length >= MAX_PER_PERSON) return { capped: true };
      const row = { scheduleId: `s${++n}`, tenantId, userId, task, timeOfDay, days, timeZone, createdAt: `2026-09-2${n % 10}T00:00:00Z`, active: true };
      rows.push(row); return { scheduleId: row.scheduleId };
    },
    async list({ userId }) { return rows.filter(row => row.userId === userId && row.active); },
    async cancel({ userId, scheduleId }) { const row = rows.find(item => item.userId === userId && item.scheduleId === scheduleId && item.active); if (row) row.active = false; return Boolean(row); },
    async cancelAll({ userId }) { let count = 0; for (const row of rows) if (row.userId === userId && row.active) { row.active = false; count += 1; } return count; },
    async listActive() { return rows.filter(row => row.active); }
  };
}
const say = (store, text, userId = "u1") => repeatReminderTurn({ text, store, tenantId: "t1", userId, timeZone: "Africa/Nairobi" });

test("setting one saves it in the person's time zone and says it back in plain words", async () => {
  const store = fakeStore();
  assert.equal(await say(store, "Remind me every morning at 8 to check the water pump"), 'Okay. I will remind you to check the water pump every day at 8:00 am. To stop it, say "stop my repeating reminder to check the water pump".');
  assert.deepEqual(store.rows.map(row => [row.userId, row.task, row.timeOfDay, row.days, row.timeZone]), [["u1", "check the water pump", "08:00", "daily", "Africa/Nairobi"]]);
  assert.match(await say(store, "Every Monday and Thursday at 9 remind me to call the buyer"), /every Monday and Thursday at 9:00 am/);
  assert.match(await say(store, "remind me every weekday at 7 to check the tank"), /every weekday \(Monday to Friday\) at 7:00 am/);
  assert.match(await say(store, "remind me about the clinic every Tuesday at 10am"), /^Okay\. I will remind you about the clinic every Tuesday at 10:00 am\./);
  assert.match(await say(store, "remind me to take my pills daily at 8am and 8pm"), /every day at 8:00 am and 8:00 pm/);
  assert.equal(store.rows.filter(row => row.task === "take my pills").length, 2, "two times make two reminders");
});

test("saying the same one again does not add a second, and the limit is honest", async () => {
  const store = fakeStore();
  await say(store, "remind me every morning at 8 to check the pump");
  assert.match(await say(store, "remind me every morning at 8 to check the pump"), /^You already have that one: I will remind you to check the pump every day at 8:00 am\./);
  assert.equal(store.rows.length, 1);
  for (let i = 0; i < MAX_PER_PERSON - 1; i += 1) await say(store, `remind me every morning at ${(i % 11) + 1}:${String(10 + i)} to task number ${i}`);
  assert.equal(store.rows.length, MAX_PER_PERSON);
  assert.match(await say(store, "remind me every evening at 6 to something else"), /^You already have 20 repeating reminders, which is the limit\. .*Nothing was set\.$/);
  assert.equal(store.rows.length, MAX_PER_PERSON);
});

test("unsupported or unclear requests set nothing and say so", async () => {
  const store = fakeStore();
  assert.match(await say(store, "remind me every few days to water the plants"), /can't do yearly.*Nothing was set\./);
  assert.match(await say(store, "remind me monthly to pay rent"), /^Which day of the month\?.*Nothing was set yet\./);
  assert.match(await say(store, "remind me every week to call mama"), /^Which day of the week\?.*Nothing was set yet\./);
  assert.match(await say(store, "remind me every day"), /^What should I remind you about\?.*Nothing was set yet\./);
  assert.equal(store.rows.length, 0);
  assert.equal(await say(store, "remind me tomorrow at 8 to check the pump"), null, "a one-time reminder carries on to the normal reminder path");
});

test("a person lists and stops only their own, by words or by number, and never guesses", async () => {
  const store = fakeStore();
  await say(store, "remind me every morning at 8 to check the pump");
  await say(store, "remind me every evening at 6 to feed the goats");
  await say(store, "remind me every Monday at 9 to feed the dog");
  await say(store, "remind me every morning at 7 to check the pump of the neighbour", "u2");
  assert.match(await say(store, "show my repeating reminders"), /^You have 3 repeating reminders: 1, check the pump, every day at 8:00 am; 2, feed the goats, every day at 6:00 pm; 3, feed the dog, every Monday at 9:00 am\./);
  assert.match(await say(store, "show my repeating reminders", "u3"), /^You have no repeating reminders\./);
  assert.match(await say(store, "stop my daily reminder to check the pump"), /^Done\. I stopped the repeating reminder to check the pump, every day at 8:00 am\./);
  assert.equal(store.rows.find(row => row.userId === "u2").active, true, "another person's reminder is untouched");
  assert.match(await say(store, "stop my repeating reminder to feed"), /^More than one matches: .*Nothing was stopped\./);
  assert.match(await say(store, "cancel repeating reminder 1"), /^Done\. I stopped the repeating reminder to feed the goats/);
  assert.match(await say(store, "cancel repeating reminder 9"), /^I don't have a repeating reminder number 9\./);
  assert.match(await say(store, "stop my daily reminder to water the moon"), /^I could not tell which repeating reminder you mean, so nothing was stopped\./);
  assert.equal(await say(store, "stop reminding me to water the moon"), null, "without the words 'repeating' or 'daily' and no match, it is left for the one-time reminders");
  assert.match(await say(store, "stop all my repeating reminders"), /^Done\. I stopped 1 repeating reminder\. Reminders that happen once are not affected\./);
  assert.equal(store.rows.find(row => row.userId === "u2").active, true);
});

test("spoken number words work, and the turn never throws", async () => {
  const store = fakeStore();
  assert.match(await say(store, "remind me every day at eight in the morning to water the seedlings"), /every day at 8:00 am/);
  assert.equal(await repeatReminderTurn({ text: "remind me every day at 8 to x", store: { add: async () => { throw new Error("db down"); }, list: async () => [], cancel: async () => true }, tenantId: "t1", userId: "u1" }), null);
  assert.equal(await repeatReminderTurn({ text: "remind me every day at 8 to x", store: null, tenantId: "t1", userId: "u1" }), null);
});

// ---- the sweep ----
function sweep({ rules, existing = new Set(), pushable = true, failEnqueue = false } = {}) {
  const enqueued = []; const keys = existing;
  const service = createRepeatReminderService({
    store: { async listActive() { return rules; } },
    notifications: { async enqueue(item) { if (failEnqueue) throw new Error("connection reset"); enqueued.push(item); keys.add(item.idempotencyKey); return item; }, async existsByKey({ idempotencyKey }) { return keys.has(idempotencyKey); } },
    devices: { async listPushable() { return pushable ? [{ device_id: "d1" }] : []; } }
  });
  return { service, enqueued, keys };
}
const rule = (over = {}) => ({ scheduleId: "s1", tenantId: "t1", userId: "u1", task: "check the pump", timeOfDay: "08:00", days: "daily", timeZone: "Africa/Nairobi", createdAt: "2026-09-20T00:00:00Z", ...over });

test("a repeating reminder is sent when its local time arrives, once a day, with the task as the message", async () => {
  const { service, enqueued } = sweep({ rules: [rule()] });
  assert.equal((await service.sendDue({ at: new Date("2026-09-21T04:30:00Z") })).sent, 0, "07:30 Nairobi: not yet");
  const first = await service.sendDue({ at: new Date("2026-09-21T05:02:00Z") });
  assert.deepEqual(first, { checked: 1, sent: 1, skippedNoDevice: 0 });
  assert.deepEqual([enqueued[0].tenantId, enqueued[0].userId, enqueued[0].channel, enqueued[0].idempotencyKey], ["t1", "u1", "push", "reminder-repeat:s1:2026-09-21"]);
  assert.deepEqual(enqueued[0].content, { title: "Nexus reminder", body: "check the pump", kind: "repeating_reminder" });
  assert.equal(enqueued[0].content.reminderText, undefined, "not listed as a one-time upcoming reminder");
  await service.sendDue({ at: new Date("2026-09-21T05:20:00Z") });
  assert.equal(enqueued.length, 1, "not twice the same day");
  const tomorrow = await service.sendDue({ at: new Date("2026-09-22T05:02:00Z") });
  assert.equal(tomorrow.sent, 1, "and again the next day");
  assert.equal(enqueued[1].idempotencyKey, "reminder-repeat:s1:2026-09-22");
});

test("a restarted worker does not send it again, and one that was down for hours does not send a stale reminder", async () => {
  const day = sweep({ rules: [rule()] });
  await day.service.sendDue({ at: new Date("2026-09-21T05:02:00Z") });
  const restarted = sweep({ rules: [rule()], existing: day.keys });
  assert.equal((await restarted.service.sendDue({ at: new Date("2026-09-21T05:10:00Z") })).sent, 0);
  const late = sweep({ rules: [rule()] });
  assert.equal((await late.service.sendDue({ at: new Date("2026-09-21T09:00:00Z") })).sent, 0, "noon is more than an hour after 8: too late to be useful");
});

test("days of the week are kept in the person's own time zone", async () => {
  assert.equal(runsOn("daily", "2026-09-21"), true);
  assert.equal(runsOn("weekdays", "2026-09-21"), true, "a Monday");
  assert.equal(runsOn("weekdays", "2026-09-20"), false, "a Sunday");
  assert.equal(runsOn([1, 4], "2026-09-24"), true, "a Thursday");
  assert.equal(runsOn([1, 4], "2026-09-23"), false, "a Wednesday");
  const monday = sweep({ rules: [rule({ days: [1] })] });
  assert.equal((await monday.service.sendDue({ at: new Date("2026-09-22T05:02:00Z") })).sent, 0, "a Tuesday morning");
  assert.equal((await monday.service.sendDue({ at: new Date("2026-09-21T05:02:00Z") })).sent, 1, "a Monday morning");
  // 21:30 UTC on a Sunday is already Monday 00:30 in Nairobi: the person's own day decides.
  const midnight = sweep({ rules: [rule({ days: [1], timeOfDay: "00:15" })] });
  assert.equal((await midnight.service.sendDue({ at: new Date("2026-09-20T21:30:00Z") })).sent, 1);
});

test("the time follows the clock in the person's zone through a change of clocks", async () => {
  const london = sweep({ rules: [rule({ timeZone: "Europe/London", timeOfDay: "08:00" })] });
  assert.equal((await london.service.sendDue({ at: new Date("2026-03-30T07:05:00Z") })).sent, 1, "08:05 British Summer Time (UTC+1)");
  const winter = sweep({ rules: [rule({ timeZone: "Europe/London", timeOfDay: "08:00" })] });
  assert.equal((await winter.service.sendDue({ at: new Date("2026-01-12T08:05:00Z") })).sent, 1, "08:05 GMT");
  assert.equal((await winter.service.sendDue({ at: new Date("2026-01-13T07:05:00Z") })).sent, 0, "07:05 GMT is before 08:00");
});

test("with no push device nothing is queued, and a failed queue write is retried within the hour", async () => {
  const none = sweep({ rules: [rule()], pushable: false });
  assert.deepEqual(await none.service.sendDue({ at: new Date("2026-09-21T05:02:00Z") }), { checked: 1, sent: 0, skippedNoDevice: 1 });
  const failing = sweep({ rules: [rule()], failEnqueue: true });
  await assert.rejects(() => failing.service.sendDue({ at: new Date("2026-09-21T05:02:00Z") }), /connection reset/);
  assert.equal(failing.enqueued.length, 0);
  const sameService = createRepeatReminderService({ store: { async listActive() { return [rule()]; } }, notifications: (() => { let fail = true; const sent = []; return { sent, async enqueue(item) { if (fail) { fail = false; throw new Error("blip"); } sent.push(item); }, async existsByKey() { return false; } }; })(), devices: null });
  await assert.rejects(() => sameService.sendDue({ at: new Date("2026-09-21T05:02:00Z") }), /blip/);
  assert.equal((await sameService.sendDue({ at: new Date("2026-09-21T05:05:00Z") })).sent, 1, "the next sweep still sends it");
  assert.deepEqual(await createRepeatReminderService({}).sendDue({}), { checked: 0, sent: 0, skippedNoDevice: 0 });
});

// ---- the repository's SQL ----
test("the repository keeps each one in nexus_schedules, parked so the dispatcher never runs it, scoped to its owner", async () => {
  const calls = [];
  const db = { async query(sql, params) { calls.push({ sql, params }); return { rows: sql.startsWith("insert") ? [{ schedule_id: "sch_1" }] : [] }; },
    async transaction(fn) { return fn({ query: (sql, params) => db.query(sql, params) }); } };
  const repo = new RepeatReminderRepository(db);
  const added = await repo.add({ tenantId: "t1", userId: "u1", task: "check the pump", timeOfDay: "08:00", days: "daily", timeZone: "Africa/Nairobi" });
  assert.deepEqual(added, { scheduleId: "sch_1" });
  assert.match(calls[0].sql, /pg_advisory_xact_lock/);
  const insert = calls.find(call => call.sql.includes("insert into nexus_schedules"));
  assert.equal(insert.params[3], JOB_TYPE); assert.equal(JOB_TYPE, "reminder.repeat");
  assert.deepEqual(insert.params[4], { task: "check the pump", timeOfDay: "08:00", days: "daily", timeZone: "Africa/Nairobi" });
  assert.equal(insert.params[7], PARKED); assert.equal(PARKED.startsWith("2100"), true);
  await repo.cancel({ tenantId: "t1", userId: "u1", scheduleId: "sch_1" });
  const cancel = calls.at(-1);
  assert.match(cancel.sql, /owner_id=\$2/); assert.deepEqual(cancel.params, ["t1", "u1", JOB_TYPE, "sch_1"]);
  await repo.list({ tenantId: "t1", userId: "u1" });
  assert.match(calls.at(-1).sql, /tenant_id=\$1 and owner_id=\$2/);
  await assert.rejects(() => repo.add({ tenantId: "t1", userId: "u1", task: "", timeOfDay: "08:00", days: "daily", timeZone: "x" }), /required/);
});

test("the repository refuses a 21st reminder and a repeat of one that exists, under the per-person lock", async () => {
  const active = Array.from({ length: MAX_PER_PERSON }, (_, i) => ({ schedule_id: `s${i}`, payload: { task: `task ${i}`, timeOfDay: "08:00", days: "daily" } }));
  const db = { async query(sql) { return { rows: sql.startsWith("select schedule_id,payload") ? active : [] }; }, async transaction(fn) { return fn({ query: (sql, params) => db.query(sql, params) }); } };
  const repo = new RepeatReminderRepository(db);
  assert.deepEqual(await repo.add({ tenantId: "t1", userId: "u1", task: "something new", timeOfDay: "09:00", days: "daily", timeZone: "UTC" }), { capped: true });
  assert.deepEqual(await repo.add({ tenantId: "t1", userId: "u1", task: "Task 3", timeOfDay: "08:00", days: "daily", timeZone: "UTC" }), { duplicate: true, scheduleId: "s3" }, "same words (any case), time and days");
});

// ---- through the planner and the worker ----
test("through the planner it is a conversational answer with no tool and the model is never asked; one-time reminders are untouched", async () => {
  const store = fakeStore();
  const p = new OpenEndedPlanner({ repeatReminders: store, memory: null, tools: { list: async () => [] }, applications: { list: () => [] }, model: { plan: async () => { throw new Error("no model"); }, respond: async () => null } });
  const plan = text => p.plan({ command: { text, channel: "typed", locale: "en", tenantId: "t1", actorId: "u1", conversationId: "c" }, context: { can: () => true, roles: [], timeZone: "Africa/Nairobi" } });
  const made = await plan("Remind me every morning at 8 to check the water pump");
  assert.equal(made.application, "conversation"); assert.deepEqual(made.steps, []);
  assert.match(made.response, /^Okay\. I will remind you to check the water pump every day at 8:00 am\./);
  assert.equal(store.rows.length, 1);
  assert.match((await plan("Show my repeating reminders")).response, /^You have 1 repeating reminder: 1, check the water pump/);
  await assert.rejects(plan("Remind me tomorrow at 8 to check the water pump"), /no model|catalog|tools/i, "a one-time reminder is not taken by the repeating-reminder turn");
  assert.equal(store.rows.length, 1);
});

test("the worker runs the repeating-reminder sweep, and the loop and runtime are wired", async () => {
  let ran = 0;
  const handlers = createHandlers({ runtime: { repeatReminders: { sendDue: async () => { ran += 1; return { checked: 3, sent: 2 }; } } } });
  assert.deepEqual(await handlers["reminders.repeat-send-due"]({ job: { payload: {} } }), { checked: 3, sent: 2 }); assert.equal(ran, 1);
  assert.deepEqual(await createHandlers({ runtime: {} })["reminders.repeat-send-due"]({ job: { payload: {} } }), { checked: 0, sent: 0 });
  const loop = fs.readFileSync(path.join(__dirname, "../../nexus/workers/process.js"), "utf8");
  assert.match(loop, /handlers\["reminders\.repeat-send-due"\]/);
  const runtime = fs.readFileSync(path.join(__dirname, "../../nexus/runtime/create-runtime.js"), "utf8");
  assert.match(runtime, /repeatReminders: repeatReminderRecords/);
  assert.match(runtime, /createRepeatReminderService\(\{ notifications, store: repeatReminderRecords, devices \}\)/);
  assert.match(runtime, /return Object\.freeze\(\{ config, adapter, db, brief, repeatReminders,/);
});
