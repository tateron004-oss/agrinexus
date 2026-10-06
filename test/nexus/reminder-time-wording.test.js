"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { parseAssistantReminderTime, extractAssistantReminderTask, hasReminderTimePhrase } = require("../../nexus/reminders/time-phrase.js");
const { readRepeatRequest } = require("../../nexus/reminders/repeat-phrase.js");
const { repeatReminderTurn } = require("../../nexus/reminders/repeat-service.js");

// Found by the persona audit: "remind me at 12 noon" was set for midnight, "half past 3", "quarter to 5" and "after 2 hours" were not read and quietly became tomorrow, "on the 22nd" became
// tomorrow, "in the evening" became tomorrow at the default time, "at 7 in the evening" was said back as "7", "by 5pm" cut "by" out of the task, "every morning and evening" kept only the
// morning (and "and evening" in the task), and "every first Thursday" was a single reminder on the next Thursday. Said at 09:15 in Nairobi (06:15 UTC) on Monday 5 October 2026.

const NOW = new Date("2026-10-05T06:15:00Z");
const ZONE = "Africa/Nairobi";
// the local (Nairobi) wall clock a reminder is set for, as "YYYY-MM-DD HH:MM"
const at = text => {
  const result = parseAssistantReminderTime(text, { now: NOW, timeZone: ZONE });
  return { when: new Date(new Date(result.scheduledAt).getTime() + 3 * 3600e3).toISOString().replace("T", " ").slice(0, 16), label: result.whenLabel };
};

test("clock times said in other ways are the time they mean", () => {
  assert.equal(at("remind me at 12 noon to take the bread out").when, "2026-10-05 12:00");
  assert.equal(at("remind me at 12 midnight to call").when, "2026-10-06 00:00");
  assert.equal(at("remind me at half past 3 to collect the child").when, "2026-10-05 15:30");
  assert.equal(at("remind me at quarter to 5 to close the shop").when, "2026-10-05 16:45");
  assert.equal(at("remind me at quarter past 4 to switch off the pump").when, "2026-10-05 16:15");
  assert.equal(at("remind me at 7 in the evening to milk the cow").when, "2026-10-05 19:00");
  assert.equal(at("remind me at 6 in the morning to feed the chickens").when, "2026-10-06 06:00", "9:15 today is past 6 in the morning");
  assert.equal(at("remind me at 15:30 to call").when, "2026-10-05 15:30");
  assert.equal(at("remind me by 5pm to send the invoice").when, "2026-10-05 17:00");
  assert.equal(at("remind me around 6 to cook").when, "2026-10-05 18:00");
  assert.equal(at("remind me at 7:45 in the morning to wake the kids").when, "2026-10-06 07:45");
});

test("'after 2 hours' and '2 and a half hours' are from now, and 'in the evening' is this evening", () => {
  assert.equal(at("remind me after 2 hours to check the oven").when, "2026-10-05 11:15");
  assert.equal(at("remind me in 2 and a half hours to turn the tap").when, "2026-10-05 11:45");
  assert.equal(at("remind me in the evening to water the plants").when, "2026-10-05 18:00");
  assert.equal(at("remind me in the morning to call the vet").when, "2026-10-06 08:00", "this morning has begun, so it is tomorrow's");
});

test("'on the 22nd' is the next 22nd, and a month without that day is skipped", () => {
  assert.equal(at("remind me on the 22nd to pay the rent").when, "2026-10-22 09:00");
  assert.equal(at("remind me on the 22nd at 3pm to pay the rent").when, "2026-10-22 15:00");
  assert.equal(at("remind me on the 3rd to pay the rent").when, "2026-11-03 09:00", "the 3rd of this month has passed");
  assert.equal(at("remind me on the 31st to count the stock").when, "2026-10-31 09:00");
  assert.equal(at("remind me on the 22nd of October to pay the rent").when, "2026-10-22 09:00");
});

test("the time is cut out of the sentence whole, so the task is just the task", () => {
  const cases = {
    "remind me at 12 noon to take the bread out": "take the bread out",
    "remind me at half past 3 to collect the child": "collect the child",
    "remind me by 5pm to send the invoice": "send the invoice",
    "remind me on the 22nd to pay the rent": "pay the rent",
    "remind me at 15:30 to call": "call",
    "remind me at 7 in the evening to milk the cow": "milk the cow",
    "remind me after 2 hours to check the oven": "check the oven"
  };
  for (const [text, task] of Object.entries(cases)) { assert.equal(extractAssistantReminderTask(text), task, text); assert.ok(hasReminderTimePhrase(text), text); }
});

test("what is said back names the time it was set for", () => {
  assert.equal(at("remind me at 7 in the evening to milk the cow").label, "7pm");
  assert.equal(at("remind me on the 22nd to pay the rent").label, "on the 22nd");
  assert.equal(at("remind me in the evening to water the plants").label, "in the evening");
});

test("every morning and evening is two daily reminders; 'every first Thursday' and 'tomorrow morning and evening' are refused, not guessed", async () => {
  assert.deepEqual(readRepeatRequest("remind me every morning and evening to take my medicine"), { action: "add", task: "take my medicine", times: ["08:00", "18:00"], days: "daily" });
  assert.deepEqual(readRepeatRequest("remind me morning and evening to feed the cow"), { action: "add", task: "feed the cow", times: ["08:00", "18:00"], days: "daily" });
  assert.equal(readRepeatRequest("remind me every first Thursday to pay the loan").action, "unsupported-nth");
  assert.equal(readRepeatRequest("remind me on the last Friday of every month to pay").action, "unsupported-nth");
  assert.equal(readRepeatRequest("remind me tomorrow morning and evening to check the pump").action, "unsupported-two");
  // what already worked still does
  assert.equal(readRepeatRequest("remind me every Thursday to pay the loan").days[0], 4);
  assert.equal(readRepeatRequest("remind me every second Monday to call").days.every, 2);

  const store = { add: async () => ({}), list: async () => [], cancel: async () => 0 };
  const nth = await repeatReminderTurn({ text: "remind me every first Thursday to pay the loan", store, tenantId: "t", userId: "u", timeZone: ZONE, now: NOW });
  assert.match(nth, /can't do "every first Thursday"[\s\S]*Nothing was set\.$/);
  const two = await repeatReminderTurn({ text: "remind me tomorrow morning and evening to check the pump", store, tenantId: "t", userId: "u", timeZone: ZONE, now: NOW });
  assert.match(two, /as two reminders[\s\S]*Nothing was set\.$/);
});
