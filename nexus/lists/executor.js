"use strict";

// Real "lists" capability -- genuinely did not exist before (the production
// capability audit found every "list" hit in the legacy codebase was either
// narrative text in another feature's response, or marketplace item
// *listing* -- a different concept entirely). Built the same way the
// autonomy-control pause switch and workspace-state repository already are:
// a thin layer over RecordRepository's existing nexus_records table (its own
// workspaceId, no new migration), not a bespoke lists table.
const WORKSPACE_ID = "lists";
const RECORD_TYPE = "checklist";

function normalizeItems(rawItems) {
  return (Array.isArray(rawItems) ? rawItems : [])
    .map(item => (typeof item === "string" ? { text: item.trim(), done: false } : { text: String(item?.text || "").trim(), done: Boolean(item?.done) }))
    .filter(item => item.text)
    .slice(0, 200);
}

function createListsCreateExecutor({ records }) {
  if (!records?.create) throw new Error("A record repository is required.");
  return async function execute({ input = {}, context, taskId }) {
    const title = String(input.title || "Untitled list").trim().slice(0, 160);
    const items = normalizeItems(input.items);
    const inserted = await records.create({ tenantId: context.tenantId, ownerId: context.userId, subjectId: context.userId,
      taskId, workspaceId: WORKSPACE_ID, recordType: RECORD_TYPE, classification: "standard",
      data: { title, items }, provenance: { source: "nexus-agent", command: input.command || "" } });
    return { listId: inserted.record_id, title, items, itemCount: items.length, persisted: true };
  };
}

function verifyListsCreateOutcome({ result }) {
  const verified = result?.persisted === true && typeof result?.listId === "string" && result.listId.length > 0;
  return { verified, method: "real_record_write", reason: verified ? null : "list_create_incomplete" };
}

function createListsReadExecutor({ records }) {
  if (!records?.list) throw new Error("A record repository is required.");
  return async function execute({ input = {}, context }) {
    if (input.listId) {
      const rows = await records.list({ tenantId: context.tenantId, ownerId: context.userId, workspaceId: WORKSPACE_ID, recordType: RECORD_TYPE, limit: 200 });
      const row = rows.find(item => item.record_id === input.listId);
      if (!row) return { found: false, listId: input.listId };
      return { found: true, listId: input.listId, list: formatList(row) };
    }
    const rows = await records.list({ tenantId: context.tenantId, ownerId: context.userId, workspaceId: WORKSPACE_ID, recordType: RECORD_TYPE, limit: input.limit || 50 });
    return { found: rows.length > 0, lists: rows.map(formatList) };
  };
}

function formatList(row) {
  return { listId: row.record_id, title: row.data?.title || "Untitled list", items: row.data?.items || [],
    version: row.version, updatedAt: row.updated_at };
}

function verifyListsReadOutcome({ result }) {
  const singleLookup = typeof result?.listId === "string" && (result.found === false || (result.found === true && result.list));
  const listLookup = Array.isArray(result?.lists) && typeof result?.found === "boolean";
  return { verified: Boolean(singleLookup || listLookup), method: "real_record_lookup", reason: (singleLookup || listLookup) ? null : "list_lookup_incomplete" };
}

function createListsUpdateExecutor({ records }) {
  if (!records?.list || !records?.update) throw new Error("A record repository is required.");
  return async function execute({ input = {}, context }) {
    if (!input.listId) throw new Error("listId is required to update a list.");
    const rows = await records.list({ tenantId: context.tenantId, ownerId: context.userId, workspaceId: WORKSPACE_ID, recordType: RECORD_TYPE, limit: 200 });
    const existing = rows.find(item => item.record_id === input.listId);
    if (!existing) return { updated: false, listId: input.listId, reason: "list_not_found" };
    let items = (existing.data?.items || []).slice();
    for (const addition of normalizeItems(input.addItems)) items.push(addition);
    if (Array.isArray(input.toggleIndexes)) for (const index of input.toggleIndexes) if (items[index]) items[index] = { ...items[index], done: !items[index].done };
    if (Array.isArray(input.removeIndexes)) {
      const toRemove = new Set(input.removeIndexes);
      items = items.filter((_, index) => !toRemove.has(index));
    }
    const title = input.title ? String(input.title).trim().slice(0, 160) : (existing.data?.title || "Untitled list");
    const updated = await records.update({ tenantId: context.tenantId, recordId: existing.record_id, expectedVersion: existing.version,
      actorId: context.userId, data: { title, items }, provenance: { ...existing.provenance, eventType: "list.updated" } });
    return { updated: true, listId: existing.record_id, list: formatList(updated) };
  };
}

function verifyListsUpdateOutcome({ result }) {
  const verified = result?.updated === true ? Boolean(result.list) : result?.updated === false && typeof result?.reason === "string";
  return { verified: Boolean(verified), method: "real_record_write", reason: verified ? null : "list_update_incomplete" };
}

module.exports = Object.freeze({
  createListsCreateExecutor, verifyListsCreateOutcome,
  createListsReadExecutor, verifyListsReadOutcome,
  createListsUpdateExecutor, verifyListsUpdateOutcome,
  WORKSPACE_ID, RECORD_TYPE
});
