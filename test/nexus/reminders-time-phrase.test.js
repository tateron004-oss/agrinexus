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

// Found live (notification-delivery audit): every date below used to be
// computed in the SERVER's own local clock, not the caller's real time
// zone -- "remind me at 3pm" from someone in a different zone than the
// server was silently scheduled for 3pm server time. These tests now pin
// an explicit timeZone and a fixed "now" instant, and assert the resulting
// scheduledAt as a real UTC instant (not a machine-local .getHours(), which
// would silently pass or fail depending on whatever zone happens to run
// the test) -- matching the convention nexus/brief's own zone-aware tests
// already use.
test("'tomorrow at 9am' resolves to real 9am the next day in the caller's own zone, not the server's", () => {
  // 2026-09-21T12:00:00Z is 2026-09-21 05:00 in America/Los_Angeles (PDT, UTC-7).
  const now = new Date("2026-09-21T12:00:00Z");
  const nairobi = parseAssistantReminderTime("remind me tomorrow at 9am to check irrigation", { timeZone: "Africa/Nairobi", now });
  // 2026-09-22 09:00 Nairobi (UTC+3) = 2026-09-22T06:00:00Z.
  assert.equal(nairobi.scheduledAt, "2026-09-22T06:00:00.000Z");
  const pacific = parseAssistantReminderTime("remind me tomorrow at 9am to check irrigation", { timeZone: "America/Los_Angeles", now });
  // 2026-09-22 09:00 Pacific (PDT, UTC-7) = 2026-09-22T16:00:00Z -- seven hours
  // apart from the Nairobi result above, proving the zone is actually honored.
  assert.equal(pacific.scheduledAt, "2026-09-22T16:00:00.000Z");
});

test("a bare 'at H(am/pm)' with no day rolls to the next occurrence of that time in the caller's own zone", () => {
  // 2026-09-21T12:00:00Z is 05:00 Pacific -- 6pm Pacific today hasn't happened yet.
  const notYetPassed = parseAssistantReminderTime("remind me at 6pm to check the pump", { timeZone: "America/Los_Angeles", now: new Date("2026-09-21T12:00:00Z") });
  assert.equal(notYetPassed.scheduledAt, "2026-09-22T01:00:00.000Z", "2026-09-21 18:00 Pacific (PDT, UTC-7) = 2026-09-22T01:00:00Z");

  // 2026-09-21T12:00:00Z is 15:00 Nairobi -- 6pm Nairobi hasn't happened yet either, but is a different real instant than the Pacific case.
  const nairobi = parseAssistantReminderTime("remind me at 6pm to check the pump", { timeZone: "Africa/Nairobi", now: new Date("2026-09-21T12:00:00Z") });
  assert.equal(nairobi.scheduledAt, "2026-09-21T15:00:00.000Z", "2026-09-21 18:00 Nairobi (UTC+3) = 2026-09-21T15:00:00Z");

  // 2026-09-22T02:00:00Z is 19:00 Pacific the same day -- 6pm Pacific has already passed, so it must roll to tomorrow.
  const alreadyPassed = parseAssistantReminderTime("remind me at 6pm to check the pump", { timeZone: "America/Los_Angeles", now: new Date("2026-09-22T02:00:00Z") });
  assert.equal(alreadyPassed.scheduledAt, "2026-09-23T01:00:00.000Z", "must roll to the NEXT day's 18:00 Pacific once today's has already passed");
});

test("no timeZone option falls back to the app's own default zone (Africa/Nairobi), not the server process's local clock", () => {
  const { scheduledAt } = parseAssistantReminderTime("remind me at 6pm to check the pump", { now: new Date("2026-09-21T12:00:00Z") });
  assert.equal(scheduledAt, "2026-09-21T15:00:00.000Z", "18:00 Africa/Nairobi (UTC+3) = 15:00Z, the default when no zone is supplied");
});

test("an unrecognized/invalid IANA zone falls back to the default zone rather than throwing or silently misbehaving", () => {
  const { scheduledAt } = parseAssistantReminderTime("remind me at 6pm to check the pump", { timeZone: "Not/AZone", now: new Date("2026-09-21T12:00:00Z") });
  assert.equal(scheduledAt, "2026-09-21T15:00:00.000Z");
});

test("'next Monday' with no explicit time keeps today's current time-of-day, in the caller's own zone, on the correct future calendar day", () => {
  // 2026-09-21 is a Monday; "monday" with no explicit time should land 7 days later at the same real local time-of-day.
  const now = new Date("2026-09-21T12:00:00Z"); // 05:00 Pacific
  const { scheduledAt } = parseAssistantReminderTime("remind me monday to renew the lease", { timeZone: "America/Los_Angeles", now });
  assert.equal(scheduledAt, "2026-09-28T12:00:00.000Z", "same 05:00 Pacific time-of-day, seven days later");
});

test("no recognizable time phrase falls back to ~24 hours out, never in the past", () => {
  const { scheduledAt } = parseAssistantReminderTime("remind me to water the plants");
  assert.ok(new Date(scheduledAt).getTime() > Date.now());
});

// Found live: naming two weekdays picked whichever came first in the fixed
// Sun-Sat dayNames array, not whichever the caller actually meant -- "by
// friday, not sunday" resolved to Sunday (array index 0), the exact day the
// caller said NOT to use, with the confirmation echoing the wrong day back
// as if it were correct. Fixed to pick whichever weekday name appears
// EARLIEST IN THE TEXT ITSELF.
test("naming two weekdays resolves to the one mentioned first in the text, not whichever is earlier in the internal Sun-Sat array", () => {
  const now = new Date("2026-09-21T12:00:00Z"); // a Monday
  const deadlineThenException = parseAssistantReminderTime("remind me to submit the report by friday, not sunday", { timeZone: "Africa/Nairobi", now });
  assert.equal(deadlineThenException.whenLabel, "friday", "the day named first (friday) must win, not sunday just because it's array index 0");
  const eitherOr = parseAssistantReminderTime("remind me to call the vet wednesday or tuesday", { timeZone: "Africa/Nairobi", now });
  assert.equal(eitherOr.whenLabel, "wednesday", "wednesday is named first in the text, even though tuesday comes earlier in the internal array");
});

test("extractAssistantReminderTask strips the lead-in phrase when it directly precedes the task", () => {
  assert.equal(extractAssistantReminderTask("remind me to check irrigation tomorrow at 9am"), "check irrigation");
  assert.equal(extractAssistantReminderTask("set a reminder to call the vet in 2 hours"), "call the vet");
  assert.equal(extractAssistantReminderTask(""), "follow up");
});
