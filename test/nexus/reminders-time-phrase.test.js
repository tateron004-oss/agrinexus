"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { parseAssistantReminderTime, extractAssistantReminderTask } = require("../../nexus/reminders/time-phrase.js");

test("'in N hours/minutes' resolves to a real future timestamp", () => {
  const before = Date.now();
  const { scheduledAt, whenLabel } = parseAssistantReminderTime("remind me in 2 hours to call the vet");
  const deltaMs = new Date(scheduledAt).getTime() - before;
  assert.ok(deltaMs > 1.9 * 60 * 60 * 1000 && deltaMs < 2.1 * 60 * 60 * 1000, `expected ~2h, got ${deltaMs}ms`);
  assert.equal(whenLabel, "in 2 hours");
});

test("'tomorrow at 9am' resolves to 9am the next day", () => {
  const { scheduledAt } = parseAssistantReminderTime("remind me tomorrow at 9am to check irrigation");
  const date = new Date(scheduledAt);
  assert.equal(date.getHours(), 9);
  assert.ok(date.getTime() > Date.now());
});

test("a bare 'at H(am/pm)' with no day rolls to the next occurrence of that time", () => {
  const { scheduledAt } = parseAssistantReminderTime("remind me at 6pm to check the pump");
  const date = new Date(scheduledAt);
  assert.equal(date.getHours(), 18);
  assert.ok(date.getTime() > Date.now());
});

test("no recognizable time phrase falls back to ~24 hours out, never in the past", () => {
  const { scheduledAt } = parseAssistantReminderTime("remind me to water the plants");
  assert.ok(new Date(scheduledAt).getTime() > Date.now());
});

test("extractAssistantReminderTask strips the lead-in phrase when it directly precedes the task", () => {
  assert.equal(extractAssistantReminderTask("remind me to check irrigation tomorrow at 9am"), "check irrigation");
  assert.equal(extractAssistantReminderTask("set a reminder to call the vet in 2 hours"), "call the vet");
  assert.equal(extractAssistantReminderTask(""), "follow up");
});
