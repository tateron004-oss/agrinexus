"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { readRepeatRequest } = require("../../nexus/reminders/repeat-phrase.js");
const { createRepeatReminderService } = require("../../nexus/reminders/repeat-service.js");
const { RepeatReminderRepository } = require("../../nexus/reminders/repeat-store.js");

// Found by an independent review of the repeating reminders: ordinary one-time reminders and unrelated "cancel my weekly meeting" sentences were read as
// repeats, a time said with "in the morning" came out as the evening, and the task kept bits of the timing words.

const read = text => readRepeatRequest(text);
const plain = value => JSON.parse(JSON.stringify(value));

test("'daily', 'weekly' and 'Tuesdays' inside the thing to do do not turn a one-time reminder into a repeat", () => {
  for (const text of ["remind me at 5 to do the daily check", "remind me tomorrow to review the daily sales", "remind me at 3pm to call the Tuesdays group", "remind me tomorrow at 9 to send the weekly report"]) {
    assert.equal(read(text), null, text);
  }
});

test("a real 'daily' / 'weekly' / named-day repeat is still read", () => {
  assert.deepEqual(plain(read("remind me daily to check the pump")), { action: "add", task: "check the pump", times: ["09:00"], days: "daily" });
  assert.deepEqual(plain(read("remind me to take my pills daily at 8am and 8pm")), { action: "add", task: "take my pills", times: ["08:00", "20:00"], days: "daily" });
  assert.deepEqual(plain(read("remind me weekly on Friday to count stock")), { action: "add", task: "count stock", times: ["09:00"], days: [5] });
  assert.deepEqual(plain(read("remind me every Monday at 9 to call the buyer")), { action: "add", task: "call the buyer", times: ["09:00"], days: [1] });
});

test("'cancel my weekly meeting' and 'stop my daily medication' are not about repeating reminders, but real stop requests still are", () => {
  for (const text of ["cancel my weekly meeting with the co-op", "stop my daily medication", "delete my daily log"]) assert.equal(read(text), null, text);
  for (const text of ["stop my daily reminder to check the pump", "stop my every Monday reminder to call buyer", "stop my every other day reminder", "cancel my weekly reminder"]) {
    const request = read(text);
    assert.equal(request?.action, "stop", text);
    assert.equal(request.explicit, true, text);
  }
});

test("'on weekdays' and 'at 9 and 5' leave no stray words in the task", () => {
  assert.equal(read("remind me every 2 hours on weekdays to stand up").task, "stand up");
  assert.equal(read("remind me twice a day at 9 and 5 to take pills").task, "take pills");
  assert.deepEqual(plain(read("remind me twice a day at 9 and 5 to take pills").times), ["09:00", "17:00"]);
  assert.equal(read("remind me daily at 8 and 20 to take meds").task, "take meds");
  assert.deepEqual(plain(read("remind me daily at 8 and 20 to take meds").times), ["08:00", "20:00"]);
});

test("the part of the day after the day words sets the time, and does not stay in the task", () => {
  assert.deepEqual(plain(read("remind me every day at 5 in the morning to milk")), { action: "add", task: "milk", times: ["05:00"], days: "daily" });
  assert.deepEqual(plain(read("remind me every day at 8 in the evening to lock up")), { action: "add", task: "lock up", times: ["20:00"], days: "daily" });
  assert.deepEqual(plain(read("remind me every sunday evening to plan the week")), { action: "add", task: "plan the week", times: ["18:00"], days: [0] });
  assert.equal(read("remind me to check the morning milk every day at 5").times[0], "17:00", "a word of the task is not a part of the day");
});

test("repeats that cannot be done are said plainly instead of quietly becoming a one-time reminder", () => {
  for (const text of ["every other evening remind me to pray", "remind me three times a week to exercise", "remind me every 1 day to drink water", "remind me once a month to pay rent"]) {
    assert.equal(read(text)?.action, "unsupported", text);
  }
});

test("saying the same counted repeat on another day is the same reminder", async () => {
  const rows = [{ schedule_id: "s1", payload: { task: "check the pump", timeOfDay: "08:00", days: { unit: "day", every: 2, anchor: "2026-10-05" }, timeZone: "Africa/Nairobi" } }];
  const inserts = [];
  const repo = new RepeatReminderRepository({ async query(sql, values) { if (/^\s*select/i.test(sql)) return { rows }; inserts.push(values); return { rows: [{ schedule_id: "new" }] }; } });
  const result = await repo.add({ tenantId: "t", userId: "u", task: "Check the pump", timeOfDay: "08:00", days: { unit: "day", every: 2, anchor: "2026-10-06" }, timeZone: "Africa/Nairobi" });
  assert.deepEqual(plain(result), { duplicate: true, scheduleId: "s1" });
  assert.equal(inserts.length, 0);
  const different = await repo.add({ tenantId: "t", userId: "u", task: "check the pump", timeOfDay: "08:00", days: { unit: "day", every: 3, anchor: "2026-10-06" }, timeZone: "Africa/Nairobi" });
  assert.equal(different.duplicate, undefined, "every 3 days is a different reminder");
});

test("a time that had already passed when the reminder was made is not sent late", async () => {
  const sent = [];
  const rule = createdAt => ({ scheduleId: "s1", tenantId: "t", userId: "u", task: "drink water", timeOfDay: "14:00", days: "daily", timeZone: "Africa/Nairobi", createdAt });
  const make = rules => createRepeatReminderService({ store: { async listActive() { return rules; } }, notifications: { async enqueue(item) { sent.push(item); }, async existsByKey() { return false; } }, devices: null });
  // 14:20 Nairobi = 11:20Z. The reminder was made at 14:20, so the 14:00 slot is already gone.
  assert.equal((await make([rule("2026-10-05T11:20:00Z")]).sendDue({ at: new Date("2026-10-05T11:21:00Z") })).sent, 0);
  // made yesterday: today's 14:00 is sent as usual
  assert.equal((await make([rule("2026-10-04T08:00:00Z")]).sendDue({ at: new Date("2026-10-05T11:21:00Z") })).sent, 1);
  // made at 13:50, the 14:00 slot is still ahead and is sent
  assert.equal((await make([rule("2026-10-05T10:50:00Z")]).sendDue({ at: new Date("2026-10-05T11:01:00Z") })).sent, 1);
});
