"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { parseAssistantReminderTime, extractAssistantReminderTask, hasReminderTimePhrase } = require("../../nexus/reminders/time-phrase.js");

// Found by an independent audit of one-off reminders: the year of a date and "oclock" stayed in the task ("2026 to see the buyer"), "an hour and a half" was one hour, "tomorow" was
// read as no day at all, and a date that does not exist or has passed was quietly turned into tomorrow with no word to the person.

const NOW = new Date("2026-10-05T06:00:00Z"); // 09:00 in Nairobi, a Monday
const parse = text => parseAssistantReminderTime(text, { timeZone: "Africa/Nairobi", now: NOW });

test("the year of a date, 'oclock' and 'in the evening' are part of the time, not of the task", () => {
  assert.equal(extractAssistantReminderTask("remind me on 15 October 2026 at 10 am to see the buyer"), "see the buyer");
  assert.equal(extractAssistantReminderTask("remind me at 5 oclock in the evening to feed pigs"), "feed pigs");
  assert.equal(extractAssistantReminderTask("remind me on October 20, 2026 at 3pm to pay the school"), "pay the school");
  assert.equal(parse("remind me on 15 October 2026 at 10 am to see the buyer").scheduledAt, "2026-10-15T07:00:00.000Z");
  assert.equal(parse("remind me at 5 oclock in the evening to feed pigs").scheduledAt, "2026-10-05T14:00:00.000Z", "5 in the evening is 17:00 in Nairobi");
  assert.equal(extractAssistantReminderTask("remind me to check the morning milk tomorrow"), "check the morning milk", "a word of the task is not removed");
});

test("'in an hour and a half' is an hour and a half", () => {
  assert.equal(parse("remind me in an hour and a half to turn the pump off").scheduledAt, "2026-10-05T07:30:00.000Z");
  assert.equal(extractAssistantReminderTask("remind me in an hour and a half to turn the pump off"), "turn the pump off");
  assert.equal(parse("remind me in an hour to turn the pump off").scheduledAt, "2026-10-05T07:00:00.000Z");
});

test("common misspellings of tomorrow are read as tomorrow", () => {
  for (const text of ["remind me tomorow at 6 to go to market", "remind me tommorow at 6 to go to market", "remind me tmrw at 6 to go to market"]) {
    assert.equal(hasReminderTimePhrase(text), true, text);
    assert.equal(parse(text).scheduledAt, "2026-10-06T15:00:00.000Z", text);
    assert.equal(extractAssistantReminderTask(text), "go to market", text);
  }
});

test("a date that does not exist or has passed is named in the words said back", () => {
  const past = parse("remind me on 1 January 2020 at 9am to call");
  assert.match(past.whenLabel, /could not use "1 january"/);
  const fake = parse("remind me on 31 February at 9am to call");
  assert.match(fake.whenLabel, /could not use "31 february"/);
  assert.equal(parse("remind me on 15 October at 10am to see the buyer").whenLabel, "on 15 october at 10am", "a good date is said back as before");
});

test("a clock time that has already passed today is said to be for tomorrow", () => {
  const passed = parse("remind me today at 8am to stretch");
  assert.equal(passed.scheduledAt, "2026-10-06T05:00:00.000Z");
  assert.match(passed.whenLabel, /tomorrow/);
  assert.equal(parse("remind me at 6pm to cook").whenLabel, "6pm", "a time still ahead today is not changed");
});
