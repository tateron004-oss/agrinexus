"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const reminderProvider = require("../../server/providers/reminderProvider.js");
const offlineSyncProvider = require("../../server/providers/offlineSyncProvider.js");

// Found live (unbounded-input sweep): reminderProvider.create() and
// offlineSyncProvider.queueItem() had no length cap on their free-text
// fields at all -- unlike their sibling routes in the same file/subsystem
// (server.js's POST /api/nexus/reminders caps title/notes/time at
// 160/320/120 via sanitizePilotText; offlineExpansionBridgeProvider.queue()
// caps title/summary at 180/500 before calling this same queueItem()). The
// request body's only limit is the global 20MB readBody cap, and both
// destination arrays are capped by item COUNT (50), not by size, so a
// handful of multi-MB items meaningfully bloats the app's single JSON/jsonb
// state blob that every read/write rewrites wholesale.
function makeDb() {
  return { profile: {} };
}

test("reminderProvider.create() caps title/dueAt/note instead of storing them unbounded", () => {
  const db = makeDb();
  const bigTitle = "A".repeat(500_000);
  const bigNote = "B".repeat(500_000);
  const bigDueAt = "C".repeat(500_000);
  const result = reminderProvider.create({ confirmed: true, title: bigTitle, dueAt: bigDueAt, note: bigNote }, db);
  assert.equal(result.body.status, "completed", JSON.stringify(result.body));
  const reminder = result.body.data.reminder;
  assert.ok(reminder.title.length <= 200, `title must be capped, got length ${reminder.title.length}`);
  assert.ok(reminder.dueAt.length <= 120, `dueAt must be capped, got length ${reminder.dueAt.length}`);
  assert.ok(reminder.note.length <= 500, `note must be capped, got length ${reminder.note.length}`);
});

test("reminderProvider.create() still works normally with an ordinary short title", () => {
  const db = makeDb();
  const result = reminderProvider.create({ confirmed: true, title: "Take medication", dueAt: "8pm", note: "Daily dose" }, db);
  assert.equal(result.body.status, "completed");
  assert.equal(result.body.data.reminder.title, "Take medication");
});

test("offlineSyncProvider.queueItem() caps content instead of storing it unbounded", () => {
  const db = makeDb();
  const bigContent = "A".repeat(500_000);
  const result = offlineSyncProvider.queueItem({ confirmed: true, type: "note", content: bigContent }, db);
  assert.equal(result.body.status, "completed", JSON.stringify(result.body));
  assert.ok(result.body.data.item.content.length <= 500, `content must be capped, got length ${result.body.data.item.content.length}`);
});

test("offlineSyncProvider.queueItem() still works normally with ordinary short content", () => {
  const db = makeDb();
  const result = offlineSyncProvider.queueItem({ confirmed: true, type: "note", content: "field visit reminder" }, db);
  assert.equal(result.body.status, "completed");
  assert.equal(result.body.data.item.content, "field visit reminder");
});
