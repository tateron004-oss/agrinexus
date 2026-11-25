"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { personalTurn, readRequest } = require("../../nexus/personal/items.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { createListsUpdateExecutor, verifyListsUpdateOutcome } = require("../../nexus/lists/executor.js");
const { fakeMemory: farmFake } = require("./farmwork-fake.js");

// The owner's test report of 4 November 2026: "Kyro can't delete old items", "old notes not going away and it keeps asking me about reminders to remove", "all the previous lists showing", "put a meeting ... and add vet visit ... merged both entries".
// Run against the real code, every one of these was found: the delete phrases below were read by nothing, so they went to the AI model (which picked the reminders tool); two events in one sentence became one; whole checklists could not be deleted at all.

const NOW = new Date("2026-11-04T17:00:00Z");
function personalMemory() {
  const rows = []; let n = 0;
  const live = userId => rows.filter(row => row.userId === userId && !row.deleted);
  return { rows,
    async addPersonalItem({ userId, content }) { rows.unshift({ memory_id: `m${++n}`, userId, content, deleted: false }); return { memoryId: `m${n}` }; },
    async listPersonalItems({ userId, kind = null }) { return live(userId).filter(row => !kind || row.content.kind === kind).map(row => ({ memory_id: row.memory_id, content: row.content })); },
    async updatePersonalItem({ userId, memoryId, content }) { const row = live(userId).find(item => item.memory_id === memoryId); if (row) row.content = content; return Boolean(row); },
    async removePersonalItem({ userId, memoryId }) { const row = live(userId).find(item => item.memory_id === memoryId); if (row) row.deleted = true; return Boolean(row); } };
}
const turn = (memory, text, history = []) => personalTurn({ text, memory, tenantId: "t1", userId: "u1", now: NOW, timeZone: "America/Los_Angeles", history });
const said = text => ({ role: "assistant", content: text });

test("a note is deleted however it is asked for: 'the note about', 'my note on', 'the cow note', 'my last note'", async () => {
  const memory = personalMemory();
  for (const note of ["write down that the cow is limping", "Make a note of the gate code is 4471", "Remember that the pump needs a new seal", "note that the fence is down"]) await turn(memory, note);
  assert.equal(await turn(memory, "Delete my note about the cow"), "Deleted your note: cow is limping.");
  assert.equal(await turn(memory, "delete the note about the pump"), "Deleted your note: pump needs a new seal.");
  assert.equal(await turn(memory, "Remove note about the gate code"), "Deleted your note: gate code is 4471.");
  assert.equal(await turn(memory, "forget my note on the fence"), "Deleted your note: fence is down.");
  await turn(memory, "write down that the cow is limping"); await turn(memory, "Remember that the pump needs a new seal");
  assert.equal(await turn(memory, "delete the cow note"), "Deleted your note: cow is limping.");
  assert.equal(await turn(memory, "delete my last note"), "Deleted your note: pump needs a new seal.");
  assert.equal(await turn(memory, "Delete my note about the moon"), "I have no note about the moon.");
});

test("every note is deleted only after a yes, said in full or as a plain yes right after the question", async () => {
  for (const ask of ["Delete all my notes", "Clear my notes", "remove my notes", "wipe my old notes", "erase all of my saved notes"]) {
    const memory = personalMemory();
    await turn(memory, "write down that the cow is limping"); await turn(memory, "Remember that the pump needs a new seal");
    const question = await turn(memory, ask);
    assert.match(question, /^That would delete all 2 of your notes\. Say "yes, delete all my notes" to go ahead\.$/, ask);
    assert.equal(memory.rows.filter(row => !row.deleted).length, 2, `${ask}: nothing is deleted before the yes`);
    assert.equal(await turn(memory, "yes", [said(question)]), "Deleted all 2 notes.", ask);
    assert.equal(memory.rows.filter(row => !row.deleted).length, 0, ask);
  }
  const memory = personalMemory();
  await turn(memory, "write down that the cow is limping");
  assert.equal(await turn(memory, "Delete all my notes"), 'That would delete your only note. Say "yes, delete all my notes" to go ahead.');
  assert.equal(await turn(memory, "yes, delete all my notes"), "Deleted all 1 note.");
  assert.equal(await turn(memory, "Delete all my notes"), "You have no notes to delete.");
  assert.equal(await turn(memory, "yes", []), null, "a yes with nothing asked is not a request");
});

test("a shopping or to-do list is deleted like clearing it (asked first), 'delete all my lists' asks about both, and 'remove milk' with no milk says so", async () => {
  const memory = personalMemory();
  await turn(memory, "Make a shopping list with milk, eggs and bread"); await turn(memory, "Start a to-do list: fix the gate, buy seed");
  for (const ask of ["Delete my shopping list", "Delete the shopping list", "remove my shopping list", "get rid of my shopping list", "erase my shopping list"]) {
    assert.equal(await turn(memory, ask), 'That would remove all 3 items from your shopping list. Say "yes, clear my shopping list" to go ahead.', ask);
  }
  assert.equal(memory.rows.filter(row => !row.deleted && row.content.list === "shopping").length, 3, "nothing is deleted before the yes");
  for (const ask of ["Delete all my lists", "Clear my lists", "remove my old lists", "wipe my lists"]) {
    const question = await turn(memory, ask);
    assert.match(question, /^That would clear all your lists: your shopping list \(3 items\) and your to-do list \(2 items\)\. Say "yes, clear all my lists" to go ahead\.$/, ask);
  }
  const question = await turn(memory, "Delete all my lists");
  assert.equal(await turn(memory, "yes", [said(question)]), "Cleared all your lists: removed 5 items.");
  assert.equal(memory.rows.filter(row => !row.deleted && row.content.kind === "todo").length, 0);
  assert.equal(await turn(memory, "Delete all my lists"), null, "no shopping or to-do list left: a checklist reader may take it");
  await turn(memory, "Add milk to my shopping list");
  assert.equal(await turn(memory, "remove bananas"), "I couldn't find bananas on your lists.");
  assert.equal(await turn(personalMemory(), "remove bananas"), null, "with no lists at all it is left alone");
});

test("a list with a name of its own that is not in the shopping and to-do store is left for the checklist reader", async () => {
  const memory = personalMemory();
  assert.equal(await turn(memory, "Delete my Tokyo packing list"), null);
  assert.equal(await turn(memory, "delete the list"), null);
  await turn(memory, "Add sunscreen to my packing list");
  assert.match(await turn(memory, "Delete my packing list"), /^That would remove all 1 item from your packing list\./);
});

test("two events said in one breath are two events, each with its own day and time; one event is still one", async () => {
  const memory = personalMemory();
  assert.equal(readRequest("put a meeting with the cooperative on Monday at 10 am add vet visit to my calendar tomorrow at 10 am", "2026-11-04").action, "event-add-many");
  const first = await turn(memory, "put a meeting with the cooperative on Monday at 10 am add vet visit to my calendar tomorrow at 10 am");
  assert.equal(first, "Added 2 events to your calendar: Monday 9 November at 10:00 am: a meeting with the cooperative; tomorrow at 10:00 am: vet visit. I will mention each one in your morning brief that day.");
  const events = () => memory.rows.filter(row => !row.deleted && row.content.kind === "event").map(row => `${row.content.day} ${row.content.time} ${row.content.text}`).sort();
  assert.deepEqual(events(), ["2026-11-05 10:00 vet visit", "2026-11-09 10:00 a meeting with the cooperative"]);
  assert.equal(await turn(memory, "What is on my calendar tomorrow?"), "On your calendar for tomorrow: tomorrow at 10:00 am: vet visit.");
  assert.match(await turn(memory, "Add a meeting with the cooperative on Monday at 10 am and a vet visit tomorrow at 10 am"), /already on your calendar/);
  assert.equal(events().length, 2, "the same two said again are not added twice");
  const other = personalMemory();
  assert.match(await turn(other, "Add a team meeting on Friday at 2 pm and a delivery on Saturday at 9 am"), /^Added 2 events to your calendar: Friday 6 November at 2:00 pm: a team meeting; Saturday 7 November at 9:00 am: a delivery\./);
  const single = personalMemory();
  assert.match(await turn(single, "put a meeting with the cooperative on Monday at 10 am"), /^Added to your calendar: Monday 9 November at 10:00 am: a meeting with the cooperative\./);
  assert.match(await turn(single, "Add vet visit to my calendar tomorrow at 10 am"), /^Added to your calendar: tomorrow at 10:00 am: vet visit\./);
  assert.equal(single.rows.filter(row => row.content.kind === "event").length, 2);
  assert.equal(readRequest("Add milk and eggs to my shopping list", "2026-11-04").action, "todo-add-many", "a shopping sentence with 'and' is not split into events");
});

// ---- through the planner: none of these goes to the AI model any more ----
const tools = ["documents.create", "lists.create", "lists.read", "lists.update", "reminders.cancel", "reminders.list", "reminders.schedule"].map(tool_id => ({ tool_id, domain: tool_id.split(".")[0], description: "", risk_tier: "low", confirmation_required: false }));
function planner(memory) {
  const seen = [];
  const instance = new OpenEndedPlanner({ model: { plan: async () => { seen.push("plan"); throw new Error("MODEL_REACHED"); }, respond: async () => { seen.push("respond"); return null; } },
    tools: { list: async () => tools }, applications: { list: () => defaultApplicationManifests() }, memory: Object.assign(farmFake(), memory, { search: async () => [] }) });
  return { instance, seen };
}
const ask = (instance, text, conversationHistory = []) => instance.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "America/Los_Angeles" }, conversationHistory });

test("through the planner: deleting notes and lists never reaches the AI model, and a delete is never turned into a reminder question", async () => {
  const memory = personalMemory();
  await personalTurn({ text: "write down that the cow is limping", memory, tenantId: "t1", userId: "u1", now: NOW });
  const { instance, seen } = planner(memory);
  for (const text of ["Delete my note about the cow", "Delete all my notes", "Remove my notes", "Delete the note about the pump", "Delete my shopping list"]) {
    const plan = await ask(instance, text);
    assert.equal(plan.application, "conversation", text);
    assert.deepEqual([...plan.steps], [], text);
    assert.doesNotMatch(String(plan.response), /reminder/i, text);
  }
  assert.deepEqual(seen, []);
});

test("checklists are deleted by voice only after the exact words are said; a plain yes right after counts", async () => {
  const { instance } = planner(personalMemory());
  const old = await ask(instance, "Delete my old checklists");
  assert.equal(old.clarification, 'That would delete all but your five newest checklists. Say "yes, delete my old checklists" to go ahead.');
  assert.deepEqual([...old.steps], []);
  for (const confirm of [() => ask(instance, "yes, delete my old checklists"), () => ask(instance, "yes", [said(old.clarification)])]) {
    const done = await confirm();
    assert.equal(done.steps[0].toolId, "lists.update");
    assert.deepEqual({ ...done.steps[0].input }, { keepNewest: 5 });
  }
  const every = await ask(instance, "Delete all my checklists");
  assert.match(every.clarification, /^That would delete every checklist you have\. Say "yes, delete all my checklists"/);
  assert.deepEqual({ ...(await ask(instance, "yes, delete all my checklists")).steps[0].input }, { keepNewest: 0 });
  const one = await ask(instance, "Delete the Tokyo packing list");
  assert.equal(one.clarification, 'That would delete the checklist called tokyo packing. Say "yes, delete the checklist called tokyo packing" to go ahead.');
  const confirmed = await ask(instance, "yes", [said(one.clarification)]);
  assert.deepEqual({ ...confirmed.steps[0].input }, { deleteTitle: "tokyo packing" });
  assert.deepEqual({ ...(await ask(instance, "delete the checklist called Food Truck")).clarification && {} }, {});
  assert.deepEqual({ ...(await ask(instance, "yes, delete the checklist called Food Truck")).steps[0].input }, { deleteTitle: "food truck" });
  // what the checklist screen's own buttons say
  assert.deepEqual({ ...(await ask(instance, "Delete checklist rec_a1b2c3")).steps[0].input }, { listId: "rec_a1b2c3", deleteList: true });
  assert.deepEqual({ ...(await ask(instance, "Delete old checklists keeping the newest 5")).steps[0].input }, { keepNewest: 5 });
  // a bare yes with nothing asked, and names that belong to other readers, are left alone
  for (const text of ["yes", "delete the calendar list", "Delete my contacts list"]) await assert.rejects(ask(instance, text), /MODEL_REACHED/, text);
  assert.equal((await ask(instance, "Clear my lists")).clarification, 'That would delete every checklist you have. Say "yes, delete all my checklists" to go ahead.', "with no shopping or to-do list, 'clear my lists' is asked about as the checklists");
});

// ---- the executor ----
function listStore(titles) {
  const rows = titles.map((title, index) => ({ record_id: `rec_${index + 1}`, version: 1, data: { title, items: [{ text: "x", done: false }] }, updated_at: `2026-11-0${Math.min(9, 9 - index)}T00:00:00Z` }));
  const removed = [];
  return { rows, removed, records: { list: async () => rows.filter(row => !removed.includes(row.record_id)), update: async () => { throw new Error("not used"); },
    remove: async ({ recordId, tenantId, actorId }) => { assert.equal(tenantId, "t1"); assert.equal(actorId, "u1"); if (removed.includes(recordId)) return false; removed.push(recordId); return true; } } };
}
const run = (records, input) => createListsUpdateExecutor({ records })({ input, context: { tenantId: "t1", userId: "u1" } });

test("a whole checklist is deleted by id or by title, and what is left comes back newest first", async () => {
  const store = listStore(["Tokyo packing", "Food truck", "Clinic visit", "Kenya travel"]);
  const byId = await run(store.records, { listId: "rec_2", deleteList: true });
  assert.equal(byId.updated, true); assert.equal(byId.deleted, true); assert.equal(byId.deletedCount, 1); assert.deepEqual(byId.deletedTitles, ["Food truck"]);
  assert.deepEqual(byId.lists.map(list => list.title), ["Tokyo packing", "Clinic visit", "Kenya travel"]);
  assert.equal(verifyListsUpdateOutcome({ result: byId }).verified, true);
  assert.deepEqual(store.removed, ["rec_2"]);
  const byTitle = await run(store.records, { deleteTitle: "clinic visit" });
  assert.deepEqual(byTitle.deletedTitles, ["Clinic visit"]);
  const partial = await run(store.records, { deleteTitle: "kenya" });
  assert.deepEqual(partial.deletedTitles, ["Kenya travel"]);
  const missing = await run(store.records, { deleteTitle: "moon base" });
  assert.deepEqual({ updated: missing.updated, reason: missing.reason }, { updated: false, reason: "list_not_found" });
  assert.equal(verifyListsUpdateOutcome({ result: missing }).verified, true, "a refusal with a reason is a verified outcome");
  assert.deepEqual({ ...(await run(store.records, { listId: "rec_99", deleteList: true })) }, { updated: false, listId: "rec_99", reason: "list_not_found" });
});

test("a title that fits several lists is not guessed, and only the exact title wins over longer ones", async () => {
  const store = listStore(["Packing list for Tokyo", "Packing list for Kenya", "Packing"]);
  const exact = await run(store.records, { deleteTitle: "packing" });
  assert.deepEqual(exact.deletedTitles, ["Packing"]);
  const many = await run(store.records, { deleteTitle: "packing list" });
  assert.deepEqual({ updated: many.updated, reason: many.reason }, { updated: false, reason: "list_ambiguous" });
  assert.deepEqual(many.matches, ["Packing list for Tokyo", "Packing list for Kenya"]);
  assert.equal(store.removed.length, 1, "nothing else was deleted");
});

test("'keep the newest five' deletes the older lists only, 'keep none' deletes every one, and a store that cannot delete says so", async () => {
  const store = listStore(["A", "B", "C", "D", "E", "F", "G", "H"]);
  const old = await run(store.records, { keepNewest: 5 });
  assert.equal(old.deletedCount, 3);
  assert.deepEqual(old.lists.map(list => list.title), ["A", "B", "C", "D", "E"]);
  assert.deepEqual(store.removed, ["rec_6", "rec_7", "rec_8"]);
  const none = await run(store.records, { keepNewest: 0 });
  assert.equal(none.deletedCount, 5); assert.deepEqual(none.lists, []); assert.equal(none.found, false);
  assert.equal(verifyListsUpdateOutcome({ result: none }).verified, true);
  const cannot = await run({ list: async () => [], update: async () => {} }, { keepNewest: 5 });
  assert.deepEqual({ updated: cannot.updated, reason: cannot.reason }, { updated: false, reason: "delete_unavailable" });
  const nothing = await run(listStore(["A", "B"]).records, { keepNewest: 5 });
  assert.equal(nothing.deletedCount, 0);
});

// ---- the checklist screen ----
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
test("the checklist screen opens the newest five lists, tucks the older ones behind a button, and deletes a whole list only after 'Yes, delete'", () => {
  assert.match(app, /const SHOWN = 5;\s+const valid = \(Array\.isArray\(lists\) \? lists : \[\]\)\.filter\(list => list && list\.listId\);\s+const olderCount = Math\.max\(0, valid\.length - SHOWN\);/);
  assert.match(app, /if \(position === SHOWN\) \{[\s\S]{0,400}t\.showOlder\(olderCount\)[\s\S]{0,900}"Delete old checklists keeping the newest " \+ SHOWN/);
  assert.match(app, /\(position >= SHOWN \? ";display:none" : ""\)/);
  assert.match(app, /"data-kyro-list-delete": list\.listId[\s\S]{0,500}confirmRow\(t\.confirmDelete, t\.yesDelete, \(\) => \{ void act\("Delete checklist " \+ list\.listId, t\.deleted\); \}\)/);
  assert.match(app, /const deletedLine = body\.deleted === true \? kyroUiText\(\)\.deleted : "";\s+if \(\(lists\.length \|\| body\.deleted === true\) && kyroShowChecklistScreen\(lists, deletedLine\)\) \{/);
  for (const key of ["deleteList", "confirmDelete", "yesDelete", "deleted", "hideOlder", "deleteOlder", "showOlder", "confirmDeleteOlder"]) assert.equal((app.match(new RegExp(`${key}:`, "g")) || []).length >= 2, true, `${key} in English and Kiswahili`);
});
