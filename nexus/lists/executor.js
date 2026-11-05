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
// Found live (lists-toolkit audit): neither of these was capped. A single list could grow without bound --
// normalizeItems() only caps ONE call's own addItems payload at 200, never the merged result against the
// list's existing size, so repeated "add these 200 items" calls grew one list forever. And nothing capped
// how many lists one account could create at all -- lists.read/lists.update both resolve a list from
// records.list({..., limit: 200}) (the store's own real query window, newest-updated-first), so once an
// account passed 200 lists, its least-recently-touched ones silently fell out of that window: lists.update
// would report list_not_found for a list that genuinely still existed, and it could never be found or
// listed again either. Capping list creation at exactly the same number the read window already supports
// means a list can never fall out of it in the first place.
const MAX_LISTS_PER_ACCOUNT = 200;
const MAX_ITEMS_PER_LIST = 500;

function normalizeItems(rawItems) {
  return (Array.isArray(rawItems) ? rawItems : [])
    .map(item => (typeof item === "string" ? { text: item.trim(), done: false } : { text: String(item?.text || "").trim(), done: Boolean(item?.done) }))
    .filter(item => item.text)
    .slice(0, 200);
}

function createListsCreateExecutor({ records }) {
  if (!records?.create || !records?.list || !records?.createUnlessCapped) throw new Error("A record repository is required.");
  return async function execute({ input = {}, context, taskId }) {
    const title = String(input.title || "Untitled list").trim().slice(0, 160);
    const items = normalizeItems(input.items);
    // Found live: the cap was enforced by a plain check-then-act (records.list() to count, then
    // create() if under the cap) with no lock between them -- two concurrent create calls one-under
    // the cap could both pass the check and both insert. createUnlessCapped() re-checks and inserts
    // under one transaction-scoped advisory lock, the same pattern already proven elsewhere in this
    // codebase (RecordRepository's own claimCooldown()).
    const inserted = await records.createUnlessCapped({ tenantId: context.tenantId, ownerId: context.userId, subjectId: context.userId,
      taskId, workspaceId: WORKSPACE_ID, recordType: RECORD_TYPE, classification: "standard",
      data: { title, items }, provenance: { source: "nexus-agent", command: input.command || "" } }, { maxCount: MAX_LISTS_PER_ACCOUNT });
    if (inserted.capped) return { persisted: false, reason: "list_cap_reached", maxLists: MAX_LISTS_PER_ACCOUNT };
    return { listId: inserted.record_id, title, items, itemCount: items.length, persisted: true };
  };
}

// A create the executor itself refused (today only the per-account cap) is still rejected -- nothing was written -- but the
// verification now carries the executor's own reason and limit, so the failure says "list_cap_reached max=200" instead of an
// anonymous "verifier rejected the outcome". Only the executor's short identifier and a number are passed on.
function verifyListsCreateOutcome({ result }) {
  const verified = result?.persisted === true && typeof result?.listId === "string" && result.listId.length > 0;
  if (verified) return { verified, method: "real_record_write", reason: null };
  const refusal = result?.persisted === false && typeof result?.reason === "string" && /^[a-z][a-z0-9_]{0,63}$/.test(result.reason) ? result.reason : null;
  const limit = refusal && result?.maxLists !== undefined && Number.isFinite(Number(result.maxLists)) ? Number(result.maxLists) : null;
  return { verified: false, method: "real_record_write", reason: refusal || "list_create_incomplete", ...(limit !== null ? { limit } : {}) };
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

// "delete the Tokyo packing list": the one list whose title is exactly those words, else the one list that has all of them; none or several is said, nothing is guessed.
const titleWords = value => String(value || "").toLowerCase().replace(/[^\p{L}\p{N}' ]/gu, " ").split(/\s+/).filter(word => word && !["the", "my", "a", "an", "list", "checklist"].includes(word));
function findListByTitle(rows, wanted) {
  const want = titleWords(wanted);
  if (!want.length) return { reason: "list_not_found" };
  const exact = rows.filter(row => titleWords(row.data?.title).join(" ") === want.join(" "));
  if (exact.length === 1) return { row: exact[0] };
  const all = exact.length ? exact : rows.filter(row => { const have = titleWords(row.data?.title); return want.every(word => have.includes(word)); });
  if (all.length === 1) return { row: all[0] };
  return all.length ? { reason: "list_ambiguous", matches: all.slice(0, 5).map(row => row.data?.title || "Untitled list") } : { reason: "list_not_found" };
}

function createListsUpdateExecutor({ records }) {
  if (!records?.list || !records?.update) throw new Error("A record repository is required.");
  return async function execute({ input = {}, context }) {
    const everyList = () => records.list({ tenantId: context.tenantId, ownerId: context.userId, workspaceId: WORKSPACE_ID, recordType: RECORD_TYPE, limit: 200 });
    // Deleting whole lists (found on 4 November 2026: lists could be made, read and changed item by item but never deleted, so every test list piled up on the checklist screen). A list is removed the way the record store removes any record
    // (its words are emptied and it is marked deleted); only this person's own lists are ever looked at. `keepNewest: 5` deletes all but the five most recently changed (the store lists newest first); `deleteList` with a listId or `deleteTitle` deletes one.
    if (input.deleteList === true || input.deleteTitle || input.keepNewest !== undefined) {
      if (typeof records.remove !== "function") return { updated: false, listId: input.listId || "", reason: "delete_unavailable" };
      const rows = await everyList();
      let doomed;
      if (input.keepNewest !== undefined) {
        const keep = Math.max(0, Math.min(Math.floor(Number(input.keepNewest)), 200));
        if (!Number.isFinite(keep)) return { updated: false, listId: "", reason: "keep_count_invalid" };
        doomed = rows.slice(keep);
      } else if (input.listId) {
        const row = rows.find(item => item.record_id === input.listId);
        if (!row) return { updated: false, listId: input.listId, reason: "list_not_found" };
        doomed = [row];
      } else {
        const found = findListByTitle(rows, input.deleteTitle);
        if (!found.row) return { updated: false, listId: "", reason: found.reason, ...(found.matches ? { matches: found.matches } : {}) };
        doomed = [found.row];
      }
      const titles = []; const gone = new Set();
      for (const row of doomed) if (await records.remove({ tenantId: context.tenantId, recordId: row.record_id, actorId: context.userId })) { titles.push(row.data?.title || "Untitled list"); gone.add(row.record_id); }
      const remaining = rows.filter(row => !gone.has(row.record_id));
      return { updated: true, deleted: true, deletedCount: titles.length, deletedTitles: titles.slice(0, 5), listId: doomed.length === 1 ? doomed[0].record_id : "", lists: remaining.map(formatList), found: remaining.length > 0 };
    }
    if (!input.listId) throw new Error("listId is required to update a list.");
    const rows = await everyList();
    const existing = rows.find(item => item.record_id === input.listId);
    if (!existing) return { updated: false, listId: input.listId, reason: "list_not_found" };
    let items = (existing.data?.items || []).slice();
    const additions = normalizeItems(input.addItems);
    if (additions.length && items.length + additions.length > MAX_ITEMS_PER_LIST) {
      return { updated: false, listId: input.listId, reason: "list_item_cap_reached", maxItems: MAX_ITEMS_PER_LIST };
    }
    for (const addition of additions) items.push(addition);
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
  const deletion = result?.deleted === true && Number.isFinite(Number(result.deletedCount)) && Array.isArray(result.lists);
  const verified = result?.updated === true ? Boolean(result.list || deletion) : result?.updated === false && typeof result?.reason === "string";
  return { verified: Boolean(verified), method: "real_record_write", reason: verified ? null : "list_update_incomplete" };
}

module.exports = Object.freeze({
  createListsCreateExecutor, verifyListsCreateOutcome,
  createListsReadExecutor, verifyListsReadOutcome,
  createListsUpdateExecutor, verifyListsUpdateOutcome,
  WORKSPACE_ID, RECORD_TYPE
});
