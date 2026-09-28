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
