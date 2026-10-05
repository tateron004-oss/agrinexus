"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { extractForgetRequest } = require("../../nexus/memory/profile-facts.js");
const { createRemindersListExecutor, verifyRemindersListOutcome } = require("../../nexus/reminders/manage-executor.js");

// Found by an independent capability audit: "Forget that I keep chickens" was read as a NEW fact and saved again (and replaced the goats), and "what are my reminders" said
// "You have no upcoming reminders" to a person who only had reminders that repeat.

test("'forget that I ...' takes back the kind of fact that was said", () => {
  const kind = text => extractForgetRequest(text)?.kind || null;
  assert.equal(kind("Forget that I keep chickens"), "livestock");
  assert.equal(kind("forget that I grow maize"), "crops");
  assert.equal(kind("forget that I live near Kisumu"), "location");
  assert.equal(kind("delete that I am a farmer"), "work");
  assert.equal(kind("forget that I have 5 acres"), "farmSize");
  assert.equal(kind("please forget that I speak Swahili"), "language");
  assert.equal(kind("forget my animals"), "livestock", "the older wording still works");
  assert.equal(kind("forget that"), "last", "and so does the bare one");
  assert.equal(kind("forget that I like tea"), null, "something Kyro never saves is not matched");
  assert.equal(kind("forget that I am tired"), null);
});

const notifications = rows => ({ listReminders: async () => rows });
const oneTime = [{ notification_id: "n1", scheduled_at: "2026-10-06T06:00:00Z", content: { reminderText: "call the vendor" } }];
const repeating = [{ task: "check the water pump", timeOfDay: "08:00", days: "daily", scheduleId: "s1" }, { task: "pay the workers", timeOfDay: "09:00", days: { unit: "week", every: 2, weekdays: [1], anchor: "2026-10-05" }, scheduleId: "s2" }];
const ctx = { context: { tenantId: "t", userId: "u" } };

test("the list of reminders includes the ones that repeat", async () => {
  const only = await createRemindersListExecutor({ notifications: notifications([]), repeatStore: { list: async () => repeating } })(ctx);
  assert.equal(only.count, 2);
  assert.match(only.summary, /You have 2 reminders \(2 that repeat\)/);
  assert.match(only.reminders[0], /check the water pump \(repeats every day at 8:00 am\)/);
  assert.match(only.reminders[1], /pay the workers \(repeats every other Monday at 9:00 am\)/);
  assert.equal(verifyRemindersListOutcome({ result: only }).verified, true);

  const both = await createRemindersListExecutor({ notifications: notifications(oneTime), repeatStore: { list: async () => repeating } })(ctx);
  assert.equal(both.count, 3);
  assert.deepEqual(both.reminderIds, ["n1"], "only the one-time reminder has an id to cancel by");
  assert.equal(verifyRemindersListOutcome({ result: both }).verified, true);
});

test("with no repeating store, or an empty one, the list is as before", async () => {
  const plain = await createRemindersListExecutor({ notifications: notifications(oneTime) })(ctx);
  assert.equal(plain.count, 1);
  assert.equal(plain.summary, "You have 1 reminder.");
  const none = await createRemindersListExecutor({ notifications: notifications([]), repeatStore: { list: async () => [] } })(ctx);
  assert.equal(none.summary, "You have no upcoming reminders.");
  const broken = await createRemindersListExecutor({ notifications: notifications(oneTime), repeatStore: { list: async () => { throw new Error("down"); } } })(ctx);
  assert.equal(broken.count, 1, "a repeating store that is down does not hide the ordinary reminders");
});
