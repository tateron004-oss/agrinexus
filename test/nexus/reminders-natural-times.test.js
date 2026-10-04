"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { parseAssistantReminderTime, extractAssistantReminderTask, hasReminderTimePhrase } = require("../../nexus/reminders/time-phrase.js");

// Found by the tester readers and measured: reminders said the way people really say them were scheduled at the wrong time.
// With "now" = Sunday 4 Oct 2026, 15:30 in Nairobi (12:30Z): "tomorrow morning" fired tomorrow at 3:30pm, "in an hour" fired tomorrow, "at 5" fired at 5am, "at noon" fired
// tomorrow at 3:30pm, "on 15 October at 10am" ignored the date, and the task came back as "remind me to ...".

const NOW = new Date("2026-10-04T12:30:00Z");
const ZONE = "Africa/Nairobi";
const when = text => { const r = parseAssistantReminderTime(text, { now: NOW, timeZone: ZONE }); return new Date(new Date(r.scheduledAt).getTime() + 3 * 3600e3).toISOString().replace("T", " ").slice(0, 16); };

test("a part of the day gets a sensible clock time (morning 8, afternoon 3pm, evening 6pm, noon 12)", () => {
  assert.equal(when("remind me tomorrow morning to check the water tank"), "2026-10-05 08:00");
  assert.equal(when("remind me tomorrow afternoon to call the buyer"), "2026-10-05 15:00");
  assert.equal(when("remind me tomorrow evening to water the beans"), "2026-10-05 18:00");
  assert.equal(when("remind me on Friday morning to go to the market"), "2026-10-09 08:00");
  assert.equal(when("remind me at noon to eat"), "2026-10-05 12:00", "noon has already passed today, so tomorrow");
  assert.equal(when("remind me at midnight to check the gate"), "2026-10-05 00:00");
  assert.equal(when("remind me tonight to lock the gate"), "2026-10-04 19:00");
  assert.equal(when("remind me this evening to lock up"), "2026-10-04 18:00");
});

test("a day with no time said is 9am, not whatever time it is right now", () => {
  assert.equal(when("remind me tomorrow to buy seed"), "2026-10-05 09:00");
  assert.equal(when("remind me next Monday to call the vet"), "2026-10-05 09:00");
  assert.equal(when("remind me on Friday to pay the workers"), "2026-10-09 09:00");
});

test("'in an hour', 'in half an hour', 'in a couple of hours' are real elapsed times", () => {
  assert.equal(when("remind me in an hour to check the pump"), "2026-10-04 16:30");
  assert.equal(when("remind me in half an hour to turn off the tap"), "2026-10-04 16:00");
  assert.equal(when("remind me in a couple of hours to check the pump"), "2026-10-04 17:30");
  assert.equal(when("remind me in a minute to stir"), "2026-10-04 15:31");
  assert.equal(when("remind me in 30 minutes to turn off the tap"), "2026-10-04 16:00");
  assert.equal(when("remind me in 2 days to check the seedlings"), "2026-10-06 15:30", "'in N days' keeps the time of day");
});

test("a bare hour is the next time that hour comes round, am or pm; a named day reads it the way people mean it", () => {
  assert.equal(when("remind me at 5 to feed the goats"), "2026-10-04 17:00", "said at 3:30pm, 5 o'clock is 5pm today");
  assert.equal(when("remind me at 7 to take my pills"), "2026-10-04 19:00");
  assert.equal(when("remind me at 5pm to feed the goats"), "2026-10-04 17:00");
  assert.equal(when("remind me at 5am to feed the goats"), "2026-10-05 05:00");
  assert.equal(when("remind me tomorrow at 5 to call"), "2026-10-05 17:00", "1 to 6 on a named day is the afternoon");
  assert.equal(when("remind me tomorrow at 8 to call"), "2026-10-05 08:00", "7 to 11 on a named day is the morning");
  assert.equal(when("remind me tomorrow morning at 7 to take my medicine"), "2026-10-05 07:00");
  assert.equal(when("remind me tomorrow evening at 6 to water the beans"), "2026-10-05 18:00");
  const lateNight = parseAssistantReminderTime("remind me at 5 to feed the goats", { now: new Date("2026-10-04T17:30:00Z"), timeZone: ZONE }); // 20:30 in Nairobi
  assert.equal(lateNight.scheduledAt, "2026-10-05T02:00:00.000Z", "said at 8:30pm, the next 5 o'clock is 5am tomorrow");
});

test("a real date is honoured, with or without a time", () => {
  assert.equal(when("remind me on 15 October at 10am about the clinic"), "2026-10-15 10:00");
  assert.equal(when("remind me on the 20th of October to renew the licence"), "2026-10-20 09:00");
  assert.equal(when("remind me October 20 to renew the licence"), "2026-10-20 09:00");
  assert.equal(when("remind me on 2026-11-02 at 8am to submit the form"), "2026-11-02 08:00");
});

test("the things that were already right are unchanged", () => {
  assert.equal(when("remind me tomorrow at 7am to check the water tank"), "2026-10-05 07:00");
  assert.equal(when("remind me at 6pm to check the pump"), "2026-10-04 18:00");
  assert.equal(when("remind me at 2pm to check the pump"), "2026-10-05 14:00", "2pm has passed today, so tomorrow");
  assert.equal(when("remind me on Friday at 9am to go to the market"), "2026-10-09 09:00");
  assert.equal(when("remind me in 2 hours to call the vet"), "2026-10-04 17:30");
});

test("the task is what is left once the time and the lead-in are removed", () => {
  for (const [text, task] of [
    ["remind me tomorrow at 7am to check the water tank", "check the water tank"],
    ["remind me tomorrow morning to check the water tank", "check the water tank"],
    ["remind me next Monday to call the vet", "call the vet"],
    ["remind me in an hour to check the pump", "check the pump"],
    ["remind me at noon to eat", "eat"],
    ["remind me at 5 to feed the goats", "feed the goats"],
    ["remind me on 15 October at 10am about the clinic", "about the clinic"],
    ["remind me to call about the lease tomorrow", "call about the lease"],
    ["remind me on Friday morning to go to the market", "go to the market"],
    ["remind me to check irrigation tomorrow at 9am", "check irrigation"],
    ["set a reminder to call the vet in 2 hours", "call the vet"],
    ["", "follow up"]
  ]) assert.equal(extractAssistantReminderTask(text), task, text);
  assert.doesNotMatch(extractAssistantReminderTask("remind me tomorrow at 7am to check the water tank"), /remind/i, "the spoken reply used to read \"I will remind you to remind me to ...\"");
});

test("hasReminderTimePhrase knows every time the parser understands, and is not fooled by a price or quantity", () => {
  for (const text of ["remind me tomorrow morning to x", "remind me in an hour to x", "remind me at noon to x", "remind me at 5 to x", "remind me at 5pm to x", "remind me on 15 October to x", "remind me next Monday to x", "remind me tonight to x", "remind me in half an hour to x"]) assert.equal(hasReminderTimePhrase(text), true, text);
  for (const text of ["remind me to sell maize at 40 per kg", "remind me to buy 5 bags", "remind me to water the plants", "remind me to pay 200 kg"]) assert.equal(hasReminderTimePhrase(text), false, text);
});
