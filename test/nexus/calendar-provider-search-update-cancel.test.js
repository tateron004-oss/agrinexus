"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const calendarProvider = require("../../server/providers/calendarProvider.js");

// Found live: calendarProvider.js only ever exported {status, createEvent},
// even though status() already promises supportsUpdate/supportsCancel for
// the "generic" provider and nexus_calendar's own tool description promises
// "search, schedule, change, or cancel" -- three of those four verbs had no
// implementation at all. Google is deliberately left unsupported for
// update/cancel (matching status()'s own existing, already-accurate claim)
// since it needs a write OAuth scope and event-ownership semantics this
// codebase has never verified; search is real for both providers.
const genericEnv = { NEXUS_CALENDAR_ENABLED: "true", NEXUS_CALENDAR_PROVIDER: "generic", NEXUS_CALENDAR_PROVIDER_ENDPOINT: "https://calendar.example.com/api", NEXUS_CALENDAR_PROVIDER_API_KEY: "secret-key", NEXUS_SIMULATE_DOMAIN_PROVIDERS: "false" };
const googleEnv = { NEXUS_CALENDAR_ENABLED: "true", NEXUS_CALENDAR_PROVIDER: "google", GOOGLE_CALENDAR_ACCESS_TOKEN: "token-value", NEXUS_SIMULATE_DOMAIN_PROVIDERS: "false" };

async function withFetch(fetchImpl, fn) {
  const original = global.fetch;
  global.fetch = fetchImpl;
  try { return await fn(); } finally { global.fetch = original; }
}

test("searchEvents returns real events for the generic provider", async () => {
  const result = await withFetch(
    async () => ({ ok: true, text: async () => JSON.stringify({ events: [{ id: "evt-1", summary: "Standup", start: "2026-09-26T15:00:00Z" }] }) }),
    () => calendarProvider.searchEvents({ query: "standup" }, genericEnv)
  );
  assert.equal(result.body.status, "completed");
  assert.equal(result.body.data.events.length, 1);
  assert.equal(result.body.data.events[0].eventId, "evt-1");
  assert.equal(result.body.data.events[0].title, "Standup");
});

test("searchEvents returns real events for Google Calendar", async () => {
  const result = await withFetch(
    async () => ({ ok: true, text: async () => JSON.stringify({ items: [{ id: "g-evt-1", summary: "Dentist", start: { dateTime: "2026-09-27T14:00:00Z" } }] }) }),
    () => calendarProvider.searchEvents({ query: "dentist" }, googleEnv)
  );
  assert.equal(result.body.data.events[0].eventId, "g-evt-1");
  assert.equal(result.body.data.events[0].start, "2026-09-27T14:00:00Z");
});

// Found live (calendar/notes audit): the Google branch's default-end
// fallback used `new Date(start).getTime() + 30*60000` then `.toISOString()`
// -- but `start` is a bare, offset-less wall-clock string, and `new
// Date("...T15:00:00")` (no offset) parses as local time of the NODE
// PROCESS, not the caller's own `timeZone`. `.toISOString()` then stamps an
// absolute UTC instant on the result, so unlike `start` (offset-less,
// reinterpreted by Google via the paired `timeZone` field), the computed
// `end` carries its own baked-in offset that Google uses directly -- the
// two ends of one event ended up computed in two different reference
// frames whenever the server's local zone differed from `timeZone`.
test("createEvent's default 30-minute end is computed on the wall-clock digits, independent of the server's own local timezone", async () => {
  const originalTZ = process.env.TZ;
  process.env.TZ = "America/Los_Angeles"; // deliberately different from the event's own timeZone below
  const originalFetch = global.fetch;
  let sentBody;
  global.fetch = async (url, init) => { sentBody = JSON.parse(init.body); return { ok: true, text: async () => JSON.stringify({ id: "evt_real2" }) }; };
  try {
    await calendarProvider.createEvent({ title: "Vet visit", start: "2026-09-26T15:00:00", timeZone: "Africa/Nairobi", confirmed: true }, googleEnv);
    assert.equal(sentBody.end.dateTime, "2026-09-26T15:30:00", "the default end must be 30 wall-clock minutes after start, not shifted by the server's own local timezone");
    assert.equal(sentBody.end.timeZone, "Africa/Nairobi");
  } finally {
    global.fetch = originalFetch;
    if (originalTZ === undefined) delete process.env.TZ; else process.env.TZ = originalTZ;
  }
});

test("searchEvents honestly reports zero matches instead of fabricating one", async () => {
  const result = await withFetch(
    async () => ({ ok: true, text: async () => JSON.stringify({ events: [] }) }),
    () => calendarProvider.searchEvents({ query: "nothing" }, genericEnv)
  );
  assert.deepEqual(result.body.data.events, []);
  assert.match(result.body.message, /No matching/);
});

test("updateEvent and cancelEvent require confirmation and a real event id, then call the provider", async () => {
  const noConfirm = await calendarProvider.cancelEvent({ eventId: "evt-1" }, genericEnv);
  assert.equal(noConfirm.body.status, "confirmation_required");

  const noId = await calendarProvider.cancelEvent({ confirmed: true }, genericEnv);
  assert.equal(noId.body.status, "blocked");
  assert.match(noId.body.message, /event id is required/);

  const cancelled = await withFetch(
    async () => ({ ok: true, text: async () => JSON.stringify({ ok: true }) }),
    () => calendarProvider.cancelEvent({ eventId: "evt-1", confirmed: true }, genericEnv)
  );
  assert.equal(cancelled.body.status, "completed");
  assert.equal(cancelled.body.data.eventId, "evt-1");

  const updated = await withFetch(
    async () => ({ ok: true, text: async () => JSON.stringify({ ok: true }) }),
    () => calendarProvider.updateEvent({ eventId: "evt-1", start: "2026-09-28T10:00:00Z", confirmed: true }, genericEnv)
  );
  assert.equal(updated.body.status, "completed");
});

test("updateEvent and cancelEvent are honestly refused for Google, not silently faked", async () => {
  const cancelResult = await calendarProvider.cancelEvent({ eventId: "g-evt-1", confirmed: true }, googleEnv);
  assert.equal(cancelResult.body.status, "blocked");
  assert.match(cancelResult.body.message, /does not support/i);

  const updateResult = await calendarProvider.updateEvent({ eventId: "g-evt-1", confirmed: true }, googleEnv);
  assert.equal(updateResult.body.status, "blocked");
  assert.match(updateResult.body.message, /does not support/i);
});
