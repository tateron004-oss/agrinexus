"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createListsCreateExecutor, verifyListsCreateOutcome, createListsReadExecutor, verifyListsReadOutcome,
  createListsUpdateExecutor, verifyListsUpdateOutcome, WORKSPACE_ID, RECORD_TYPE } = require("../../nexus/lists/executor.js");

function fixture(existingRows = []) {
  const rows = new Map(existingRows.map(row => [row.record_id, row]));
  let counter = 0;
  const records = {
    create: async input => {
      counter += 1;
      const row = { record_id: `rec_${counter}`, version: 1, data: input.data, provenance: input.provenance,
        tenantId: input.tenantId, ownerId: input.ownerId, updated_at: "2026-09-16T00:00:00.000Z" };
      rows.set(row.record_id, row);
      return row;
    },
    list: async ({ workspaceId, recordType }) => [...rows.values()].filter(row => (!workspaceId || row.workspaceId === workspaceId || true) && true),
    update: async ({ recordId, expectedVersion, data, provenance }) => {
      const existing = rows.get(recordId);
      if (!existing || existing.version !== expectedVersion) throw new Error("Record version conflict or record unavailable.");
      const updated = { ...existing, version: existing.version + 1, data, provenance, updated_at: "2026-09-16T00:01:00.000Z" };
      rows.set(recordId, updated);
      return updated;
    }
  };
  return { records, rows };
}

test("throws without a record repository", () => {
  assert.throws(() => createListsCreateExecutor({}), /record repository is required/);
  assert.throws(() => createListsReadExecutor({}), /record repository is required/);
  assert.throws(() => createListsUpdateExecutor({}), /record repository is required/);
});

test("create writes a real record with normalized items and a verified outcome", async () => {
  const { records } = fixture();
  const execute = createListsCreateExecutor({ records });
  const result = await execute({ input: { title: "Groceries", items: ["Milk", "Eggs", { text: "Bread", done: true }] },
    context: { tenantId: "t1", userId: "u1" }, taskId: "tsk_1" });
  assert.equal(result.persisted, true);
  assert.equal(result.title, "Groceries");
  assert.equal(result.itemCount, 3);
  assert.deepEqual(result.items, [{ text: "Milk", done: false }, { text: "Eggs", done: false }, { text: "Bread", done: true }]);
  assert.equal(verifyListsCreateOutcome({ result }).verified, true);
});

test("create defaults an untitled list with no items", async () => {
  const { records } = fixture();
  const execute = createListsCreateExecutor({ records });
  const result = await execute({ input: {}, context: { tenantId: "t1", userId: "u1" } });
  assert.equal(result.title, "Untitled list");
  assert.deepEqual(result.items, []);
});

test("create ignores blank/malformed items", async () => {
  const { records } = fixture();
  const execute = createListsCreateExecutor({ records });
  const result = await execute({ input: { items: ["", "  ", "Real item", { text: "" }, 42] }, context: { tenantId: "t1", userId: "u1" } });
  assert.deepEqual(result.items, [{ text: "Real item", done: false }]);
});

test("read finds one list by id, and honestly reports not-found for a missing one", async () => {
  const { records } = fixture([{ record_id: "rec_1", version: 1, data: { title: "Groceries", items: [{ text: "Milk", done: false }] } }]);
  const execute = createListsReadExecutor({ records });
  const found = await execute({ input: { listId: "rec_1" }, context: { tenantId: "t1", userId: "u1" } });
  assert.equal(found.found, true);
  assert.equal(found.list.title, "Groceries");
  assert.equal(verifyListsReadOutcome({ result: found }).verified, true);

  const missing = await execute({ input: { listId: "rec_missing" }, context: { tenantId: "t1", userId: "u1" } });
  assert.equal(missing.found, false);
  assert.equal(missing.listId, "rec_missing");
  assert.equal(verifyListsReadOutcome({ result: missing }).verified, true);
});

test("read lists all of the caller's lists when no listId is given", async () => {
  const { records } = fixture([
    { record_id: "rec_1", version: 1, data: { title: "A", items: [] } },
    { record_id: "rec_2", version: 1, data: { title: "B", items: [] } }
  ]);
  const execute = createListsReadExecutor({ records });
  const result = await execute({ input: {}, context: { tenantId: "t1", userId: "u1" } });
  assert.equal(result.found, true);
  assert.equal(result.lists.length, 2);
  assert.equal(verifyListsReadOutcome({ result }).verified, true);
});

test("update adds items, toggles items, and removes items, with real optimistic concurrency", async () => {
  const { records, rows } = fixture([{ record_id: "rec_1", version: 1, data: { title: "Groceries", items: [{ text: "Milk", done: false }, { text: "Eggs", done: false }] } }]);
  const execute = createListsUpdateExecutor({ records });
  const result = await execute({ input: { listId: "rec_1", addItems: ["Bread"], toggleIndexes: [0] }, context: { tenantId: "t1", userId: "u1" } });
  assert.equal(result.updated, true);
  assert.deepEqual(result.list.items, [{ text: "Milk", done: true }, { text: "Eggs", done: false }, { text: "Bread", done: false }]);
  assert.equal(rows.get("rec_1").version, 2);
  assert.equal(verifyListsUpdateOutcome({ result }).verified, true);

  const removed = await execute({ input: { listId: "rec_1", removeIndexes: [1] }, context: { tenantId: "t1", userId: "u1" } });
  assert.deepEqual(removed.list.items, [{ text: "Milk", done: true }, { text: "Bread", done: false }]);
});

test("update honestly reports a missing list instead of throwing", async () => {
  const { records } = fixture();
  const execute = createListsUpdateExecutor({ records });
  const result = await execute({ input: { listId: "rec_missing", addItems: ["x"] }, context: { tenantId: "t1", userId: "u1" } });
  assert.equal(result.updated, false);
  assert.equal(result.reason, "list_not_found");
  assert.equal(verifyListsUpdateOutcome({ result }).verified, true);
});

test("update requires a listId", async () => {
  const { records } = fixture();
  const execute = createListsUpdateExecutor({ records });
  await assert.rejects(() => execute({ input: {}, context: { tenantId: "t1", userId: "u1" } }), /listId is required/);
});

test("update can rename the list", async () => {
  const { records } = fixture([{ record_id: "rec_1", version: 1, data: { title: "Old title", items: [] } }]);
  const execute = createListsUpdateExecutor({ records });
  const result = await execute({ input: { listId: "rec_1", title: "New title" }, context: { tenantId: "t1", userId: "u1" } });
  assert.equal(result.list.title, "New title");
});
