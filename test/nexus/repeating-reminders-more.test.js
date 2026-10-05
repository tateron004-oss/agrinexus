"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { readRepeatRequest } = require("../../nexus/reminders/repeat-phrase.js");
const { repeatReminderTurn, createRepeatReminderService, runsOn } = require("../../nexus/reminders/repeat-service.js");
const { RepeatReminderRepository } = require("../../nexus/reminders/repeat-store.js");

// Repeats beyond every day / weekday / named days: every other day, every 3 days, every other Monday, every 2 weeks, on the 15th of every month,
// every 2 hours, twice a day.

const add = (text, task, times, days, extra = {}) => assert.deepEqual(readRepeatRequest(text), { action: "add", task, times, days, ...extra }, text);

test("every other day, every N days, every N weeks and fortnightly are read with their days and times", () => {
  add("remind me every other day to water the plants", "water the plants", ["09:00"], { unit: "day", every: 2 });
  add("remind me every 3 days at 6pm to turn the compost", "turn the compost", ["18:00"], { unit: "day", every: 3 });
  add("remind me every second day at 7 to check the traps", "check the traps", ["07:00"], { unit: "day", every: 2 });
  add("remind me every other day in the evening to feed the calves", "feed the calves", ["18:00"], { unit: "day", every: 2 });
  add("remind me every 2 days to count 12 sheep", "count 12 sheep", ["09:00"], { unit: "day", every: 2 });
  add("remind me every other Monday at 9 to pay the workers", "pay the workers", ["09:00"], { unit: "week", every: 2, weekdays: [1] });
  add("remind me every 2 weeks on Friday to order feed", "order feed", ["09:00"], { unit: "week", every: 2, weekdays: [5] });
  add("remind me fortnightly on Friday to order feed", "order feed", ["09:00"], { unit: "week", every: 2, weekdays: [5] });
  add("remind me every 3 weeks on Monday and Thursday at 8 to weigh the goats", "weigh the goats", ["08:00"], { unit: "week", every: 3, weekdays: [1, 4] });
  assert.deepEqual(readRepeatRequest("remind me every other week to call mama"), { action: "need-day" });
});

test("a day of the month, and the last day of the month", () => {
  add("remind me on the 15th of every month at 10 to pay rent", "pay rent", ["10:00"], { unit: "month", every: 1, dayOfMonth: 15, last: false });
  add("remind me monthly on the 1st to check the accounts", "check the accounts", ["09:00"], { unit: "month", every: 1, dayOfMonth: 1, last: false });
  add("remind me every month on the 3rd at 8am to pay the levy", "pay the levy", ["08:00"], { unit: "month", every: 1, dayOfMonth: 3, last: false });
  add("remind me on the last day of every month to do the books", "do the books", ["09:00"], { unit: "month", every: 1, dayOfMonth: 31, last: true });
  assert.deepEqual(readRepeatRequest("remind me monthly to pay rent"), { action: "need-day-of-month" });
  assert.equal(readRepeatRequest("remind me on the 15th to pay rent"), null, "no 'every month': that is a one-time reminder");
});

test("every N hours runs inside a window (8 am to 8 pm unless the person says another), and several times a day is one or more times", () => {
  add("remind me every 2 hours to drink water", "drink water", ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"], "daily", { hourly: { every: 2, from: "08:00", to: "20:00", defaultWindow: true } });
  add("remind me every hour from 7am to 5pm to stretch", "stretch", ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"], "daily", { hourly: { every: 1, from: "07:00", to: "17:00", defaultWindow: false } });
  add("remind me every 3 hours from 8 to 6 to check the generator", "check the generator", ["08:00", "11:00", "14:00", "17:00"], "daily", { hourly: { every: 3, from: "08:00", to: "18:00", defaultWindow: false } });
  add("remind me twice a day to take my pills", "take my pills", ["08:00", "20:00"], "daily");
  add("remind me twice a day at 7am and 7pm to take my pills", "take my pills", ["07:00", "19:00"], "daily");
  add("remind me three times a day to take the medicine", "take the medicine", ["08:00", "14:00", "20:00"], "daily");
  add("remind me every weekday twice a day to check the pump", "check the pump", ["08:00", "20:00"], "weekdays");
  assert.deepEqual(readRepeatRequest("remind me every 20 hours to blink"), { action: "unsupported" });
});

test("what stays unsupported is still said plainly, and the plain cases are unchanged", () => {
  for (const text of ["remind me every few days to call mama", "remind me every 3 months to service the tractor", "remind me yearly to renew the licence"]) assert.deepEqual(readRepeatRequest(text), { action: "unsupported" }, text);
  add("remind me every morning at 8 to check the water pump", "check the water pump", ["08:00"], "daily");
  add("Every Monday at 9 remind me to call the buyer", "call the buyer", ["09:00"], [1]);
  assert.deepEqual(readRepeatRequest("remind me every other day"), { action: "need-task" });
});

// ---- which days a counted repeat runs ----
test("every other day counts from the first day, every other week from the first matching weekday", () => {
  const every2 = { unit: "day", every: 2, anchor: "2026-10-06" };
  assert.deepEqual(["2026-10-06", "2026-10-07", "2026-10-08", "2026-10-10", "2026-10-11", "2026-10-05"].map(day => runsOn(every2, day)), [true, false, true, true, false, false]);
  assert.equal(runsOn({ unit: "day", every: 3, anchor: "2026-10-06" }, "2026-10-12"), true);
  assert.equal(runsOn({ unit: "day", every: 3, anchor: "2026-10-06" }, "2026-10-13"), false);
  assert.equal(runsOn({ unit: "day", every: 2, anchor: "2026-12-30" }, "2027-01-01"), true, "across a new year");
  const mondays = { unit: "week", every: 2, weekdays: [1], anchor: "2026-10-05" };
  assert.deepEqual(["2026-10-05", "2026-10-12", "2026-10-19", "2026-10-26", "2026-10-06", "2026-09-28"].map(day => runsOn(mondays, day)), [true, false, true, false, false, false]);
  const both = { unit: "week", every: 2, weekdays: [1, 4], anchor: "2026-10-05" };
  assert.deepEqual(["2026-10-05", "2026-10-08", "2026-10-12", "2026-10-15", "2026-10-19", "2026-10-22"].map(day => runsOn(both, day)), [true, true, false, false, true, true]);
  assert.equal(runsOn({ unit: "day", every: 2 }, "2026-10-06"), false, "a counted repeat with no anchor never runs rather than guessing");
});

test("a day of the month falls back to the last day of a shorter month, and 'the last day' is the last day", () => {
  const fifteenth = { unit: "month", every: 1, dayOfMonth: 15, last: false };
  assert.deepEqual(["2026-10-15", "2026-10-14", "2026-11-15"].map(day => runsOn(fifteenth, day)), [true, false, true]);
  const thirty = { unit: "month", every: 1, dayOfMonth: 30, last: false };
  assert.deepEqual(["2026-10-30", "2026-02-28", "2028-02-29", "2026-04-30", "2026-02-27"].map(day => runsOn(thirty, day)), [true, true, true, true, false], "February uses its own last day");
  const last = { unit: "month", every: 1, dayOfMonth: 31, last: true };
  assert.deepEqual(["2026-10-31", "2026-11-30", "2026-02-28", "2026-11-29"].map(day => runsOn(last, day)), [true, true, true, false]);
  assert.equal(runsOn("daily", "2026-10-05"), true); assert.equal(runsOn("weekdays", "2026-10-04"), false); assert.equal(runsOn([1, 4], "2026-10-05"), true);
});

// ---- the turn: anchor and wording ----
function fakeStore() {
  const rows = []; let n = 0;
  return { rows,
    async add(args) { const row = { scheduleId: `s${++n}`, createdAt: `2026-10-0${n}T00:00:00Z`, ...args }; rows.push(row); return { scheduleId: row.scheduleId }; },
    async list() { return rows.slice(); }, async cancel() { return true; }, async cancelAll() { return rows.length; }, async listActive() { return rows.slice(); } };
}
const say = (store, text, now) => repeatReminderTurn({ text, store, tenantId: "t1", userId: "u1", timeZone: "Africa/Nairobi", now });
const MONDAY_7AM = new Date("2026-10-05T04:00:00Z");   // 07:00 in Nairobi, a Monday
const MONDAY_10AM = new Date("2026-10-05T07:00:00Z");  // 10:00

test("a counted repeat starts today if its time has not passed, otherwise tomorrow, and says how it repeats", async () => {
  const early = fakeStore();
  assert.equal(await say(early, "remind me every other day at 8 to water the plants", MONDAY_7AM), 'Okay. I will remind you to water the plants every other day at 8:00 am. To stop it, say "stop my repeating reminder to water the plants".');
  assert.equal(early.rows[0].days.anchor, "2026-10-05");
  const late = fakeStore();
  await say(late, "remind me every other day at 8 to water the plants", MONDAY_10AM);
  assert.equal(late.rows[0].days.anchor, "2026-10-06");
  assert.match(await say(fakeStore(), "remind me every 3 days at 6pm to turn the compost", MONDAY_10AM), /every 3 days at 6:00 pm\./);
});

test("every other Monday starts on the first Monday that has not passed; weekday lists and months read back in words", async () => {
  const store = fakeStore();
  assert.match(await say(store, "remind me every other Monday at 9 to pay the workers", MONDAY_7AM), /every other Monday at 9:00 am\./);
  assert.equal(store.rows[0].days.anchor, "2026-10-05", "today is a Monday and 9 is still ahead");
  const next = fakeStore();
  await say(next, "remind me every other Monday at 9 to pay the workers", MONDAY_10AM);
  assert.equal(next.rows[0].days.anchor, "2026-10-12", "the 9 o'clock on this Monday has passed");
  const weeks = fakeStore();
  assert.match(await say(weeks, "remind me every 3 weeks on Monday and Thursday at 8 to weigh the goats", MONDAY_10AM), /every 3 weeks on Monday and Thursday at 8:00 am\./);
  assert.equal(weeks.rows[0].days.anchor, "2026-10-08", "the first of the named days that is still ahead");
  assert.match(await say(fakeStore(), "remind me on the 15th of every month at 10 to pay rent", MONDAY_7AM), /on the 15th of every month at 10:00 am\./);
  assert.match(await say(fakeStore(), "remind me on the last day of every month to do the books", MONDAY_7AM), /on the last day of every month at 9:00 am\./);
  assert.match(await say(fakeStore(), "remind me monthly on the 22nd to check the fence", MONDAY_7AM), /on the 22nd of every month/);
});

test("every 2 hours is one reminder with its window said back, and the default window is stated", async () => {
  const store = fakeStore();
  const reply = await say(store, "remind me every 2 hours to drink water", MONDAY_7AM);
  assert.equal(store.rows.length, 1);
  assert.deepEqual(store.rows[0].timesOfDay, ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"]);
  assert.match(reply, /^Okay\. I will remind you to drink water every 2 hours from 8:00 am to 8:00 pm\. I used 8:00 am to 8:00 pm; say "from 7 am to 5 pm" in the request to change it\./);
  const own = fakeStore();
  const reply2 = await say(own, "remind me every hour from 7am to 5pm to stretch", MONDAY_7AM);
  assert.match(reply2, /every hour from 7:00 am to 5:00 pm\./);
  assert.doesNotMatch(reply2, /I used 8:00 am/);
  assert.match(await say(fakeStore(), "remind me every weekday every 2 hours to check the pump", MONDAY_7AM), /every weekday \(Monday to Friday\), every 2 hours from 8:00 am to 8:00 pm/);
  const twice = fakeStore();
  assert.match(await say(twice, "remind me twice a day to take my pills", MONDAY_7AM), /every day at 8:00 am and 8:00 pm\./);
  assert.equal(twice.rows.length, 2, "twice a day is two reminders, like 'at 8am and 8pm'");
});

test("listing reads the new kinds back in words", async () => {
  const store = fakeStore();
  await say(store, "remind me every other day at 8 to water the plants", MONDAY_7AM);
  await say(store, "remind me on the 15th of every month at 10 to pay rent", MONDAY_7AM);
  await say(store, "remind me every 2 hours to drink water", MONDAY_7AM);
  const list = await say(store, "show my repeating reminders", MONDAY_7AM);
  assert.match(list, /1, water the plants, every other day at 8:00 am; 2, pay rent, on the 15th of every month at 10:00 am; 3, drink water, every 2 hours from 8:00 am to 8:00 pm\./);
});

// ---- the sweep ----
const sweepRule = (over = {}) => ({ scheduleId: "s1", tenantId: "t1", userId: "u1", task: "drink water", timeOfDay: "08:00", days: "daily", timeZone: "Africa/Nairobi", createdAt: "2026-10-01T00:00:00Z", ...over });
function sweep(rules) {
  const enqueued = []; const keys = new Set();
  const service = createRepeatReminderService({ store: { async listActive() { return rules; } }, notifications: { async enqueue(item) { enqueued.push(item); keys.add(item.idempotencyKey); }, async existsByKey({ idempotencyKey }) { return keys.has(idempotencyKey); } }, devices: null });
  return { service, enqueued };
}

test("an hourly reminder fires at each of its times, once each, and never outside them", async () => {
  const { service, enqueued } = sweep([sweepRule({ timesOfDay: ["08:00", "10:00", "12:00"], hourly: { every: 2, from: "08:00", to: "12:00" } })]);
  assert.equal((await service.sendDue({ at: new Date("2026-10-05T05:05:00Z") })).sent, 1, "08:05 Nairobi");
  assert.equal((await service.sendDue({ at: new Date("2026-10-05T05:30:00Z") })).sent, 0, "not again for the same slot");
  assert.equal((await service.sendDue({ at: new Date("2026-10-05T07:05:00Z") })).sent, 1, "10:05");
  assert.equal((await service.sendDue({ at: new Date("2026-10-05T08:30:00Z") })).sent, 0, "11:30 is between slots");
  assert.equal((await service.sendDue({ at: new Date("2026-10-05T09:05:00Z") })).sent, 1, "12:05");
  assert.deepEqual(enqueued.map(item => item.idempotencyKey), ["reminder-repeat:s1:2026-10-05:08:00", "reminder-repeat:s1:2026-10-05:10:00", "reminder-repeat:s1:2026-10-05:12:00"]);
  assert.equal((await service.sendDue({ at: new Date("2026-10-05T11:05:00Z") })).sent, 0, "14:05 is after the last slot");
});

test("a single-time reminder keeps its original key, and a counted repeat only fires on its days", async () => {
  const single = sweep([sweepRule({ timeOfDay: "08:00" })]);
  await single.service.sendDue({ at: new Date("2026-10-05T05:05:00Z") });
  assert.equal(single.enqueued[0].idempotencyKey, "reminder-repeat:s1:2026-10-05");
  const every2 = sweep([sweepRule({ days: { unit: "day", every: 2, anchor: "2026-10-05" } })]);
  assert.equal((await every2.service.sendDue({ at: new Date("2026-10-05T05:05:00Z") })).sent, 1, "day 0");
  assert.equal((await every2.service.sendDue({ at: new Date("2026-10-06T05:05:00Z") })).sent, 0, "day 1");
  assert.equal((await every2.service.sendDue({ at: new Date("2026-10-07T05:05:00Z") })).sent, 1, "day 2");
  const monthly = sweep([sweepRule({ days: { unit: "month", every: 1, dayOfMonth: 15, last: false } })]);
  assert.equal((await monthly.service.sendDue({ at: new Date("2026-10-15T05:05:00Z") })).sent, 1);
  assert.equal((await monthly.service.sendDue({ at: new Date("2026-10-16T05:05:00Z") })).sent, 0);
});

// ---- the store keeps the extra times ----
test("the repository stores the times of an hourly reminder and reads them back", async () => {
  const calls = [];
  const rows = [];
  const db = { async query(sql, params) { calls.push({ sql, params }); if (sql.startsWith("insert")) { rows.push({ schedule_id: "sch_1", tenant_id: "t1", owner_id: "u1", payload: params[4], timezone: "Africa/Nairobi", created_at: "x" }); return { rows: [{ schedule_id: "sch_1" }] }; } return { rows: sql.includes("select schedule_id,payload from") ? rows : rows }; }, async transaction(fn) { return fn({ query: (sql, params) => db.query(sql, params) }); } };
  const repo = new RepeatReminderRepository(db);
  const first = await repo.add({ tenantId: "t1", userId: "u1", task: "drink water", timeOfDay: "08:00", timesOfDay: ["08:00", "10:00"], hourly: { every: 2, from: "08:00", to: "10:00" }, days: "daily", timeZone: "Africa/Nairobi" });
  assert.deepEqual(first, { scheduleId: "sch_1" });
  const insert = calls.find(call => call.sql.startsWith("insert"));
  assert.deepEqual(insert.params[4].timesOfDay, ["08:00", "10:00"]);
  assert.deepEqual(insert.params[4].hourly, { every: 2, from: "08:00", to: "10:00" });
  const listed = await repo.list({ tenantId: "t1", userId: "u1" });
  assert.deepEqual(listed[0].timesOfDay, ["08:00", "10:00"]);
  assert.deepEqual(await repo.add({ tenantId: "t1", userId: "u1", task: "drink water", timeOfDay: "08:00", timesOfDay: ["08:00", "10:00"], hourly: { every: 2, from: "08:00", to: "10:00" }, days: "daily", timeZone: "Africa/Nairobi" }), { duplicate: true, scheduleId: "sch_1" });
});
