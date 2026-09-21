"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { MemoryRepository } = require("../../nexus/memory/repository.js");
const { personalTurn, readRequest, todayDigest, digestLine } = require("../../nexus/personal/items.js");
const { extractDay, extractTime, extractRange } = require("../../nexus/personal/dates.js");
const { composeBrief } = require("../../nexus/brief/compose.js");
const { createBriefService } = require("../../nexus/brief/service.js");

const TODAY = "2026-09-20"; // a Sunday
const NOW = new Date("2026-09-20T05:00:00Z"); // 08:00 in Nairobi

test("days and times are read from everyday words in the person's own calendar", () => {
  assert.equal(extractDay("vet visit tomorrow", TODAY).day, "2026-09-21");
  assert.equal(extractDay("field day on 25 September", TODAY).day, "2026-09-25");
  assert.equal(extractDay("field day September 5th", TODAY).day, "2027-09-05", "a date already past means next year");
  assert.equal(extractDay("meet on friday", TODAY).day, "2026-09-25");
  assert.equal(extractDay("thing in 2 weeks", TODAY).day, "2026-10-04");
  assert.equal(extractDay("party on 30 February", TODAY), null, "not a real day");
  assert.equal(extractTime("at 2pm").time, "14:00"); assert.equal(extractTime("at 12:30 pm").time, "12:30"); assert.equal(extractTime("at 12 am").time, "00:00");
  assert.equal(extractTime("at 14:05").time, "14:05"); assert.equal(extractTime("lunch at noon").time, "12:00"); assert.equal(extractTime("at 3 sharp"), null);
  assert.deepEqual(extractRange("next week", TODAY), { from: "2026-09-21", to: "2026-09-27", label: "next week" });
});

test("only plain list, note and calendar requests are picked up", () => {
  for (const text of ["What is the spraying schedule for maize?", "add a donor named Bob", "What is the weather", "I finished my dinner", "Remind me to call the vet tomorrow", "Take a look at my crops"]) {
    assert.equal(readRequest(text, TODAY)?.action === "todo-done" ? null : readRequest(text, TODAY), null, text);
  }
  assert.equal(readRequest("Add buy seed to my to-do list", TODAY).action, "todo-add");
  assert.equal(readRequest("Add vet visit to my calendar tomorrow at 10am", TODAY).time, "10:00");
});

// A scripted stand-in with the contract of MemoryRepository's personal item methods.
function fakeMemory() {
  const rows = []; let n = 0;
  const live = userId => rows.filter(row => row.userId === userId && !row.deleted);
  return { rows,
    async addPersonalItem({ userId, content }) { rows.unshift({ memory_id: `m${++n}`, userId, content, deleted: false }); return { memoryId: `m${n}` }; },
    async listPersonalItems({ userId, kind = null }) { return live(userId).filter(row => !kind || row.content.kind === kind).map(row => ({ memory_id: row.memory_id, content: row.content })); },
    async updatePersonalItem({ userId, memoryId, content }) { const row = live(userId).find(item => item.memory_id === memoryId); if (row) row.content = content; return Boolean(row); },
    async removePersonalItem({ userId, memoryId }) { const row = live(userId).find(item => item.memory_id === memoryId); if (row) row.deleted = true; return Boolean(row); }
  };
}
const say = (memory, text, userId = "u1") => personalTurn({ text, memory, tenantId: "t1", userId, now: NOW, timeZone: "Africa/Nairobi" });

test("a to-do list: add, read back, tick off, remove, clear finished", async () => {
  const memory = fakeMemory();
  assert.equal(await say(memory, "Add buy seed to my to-do list"), "Added buy seed to your to-do list. You have 1 open item.");
  assert.equal(await say(memory, "Add fix the gate to my to-do list"), "Added fix the gate to your to-do list. You have 2 open items.");
  assert.equal(await say(memory, "Add buy seed to my to-do list"), "buy seed is already on your to-do list.");
  assert.equal(await say(memory, "What is on my to-do list?"), "On your to-do list: 1, buy seed; 2, fix the gate.");
  assert.equal(await say(memory, "Mark buy seed as done"), "Done. Ticked off buy seed. 1 still open.");
  assert.equal(await say(memory, "What is on my to-do list?"), "On your to-do list: 1, fix the gate. 1 done.");
  assert.equal(await say(memory, "I finished the gate"), "Done. Ticked off fix the gate. That was the last one.");
  assert.match(await say(memory, "What is on my to-do list?"), /^Everything on your to-do list is done/);
  assert.equal(await say(memory, "Clear my completed to-dos"), "Cleared 2 finished items.");
  assert.match(await say(memory, "What is on my to-do list?"), /^Your to-do list is empty/);
  assert.equal(await say(memory, "I finished my dinner"), null, "something that is not on a list is ordinary talk");
  assert.match(await say(memory, "Mark washing as done"), /couldn't find washing/);
});

test("the shopping list is separate from the to-do list", async () => {
  const memory = fakeMemory();
  await say(memory, "Add milk to my shopping list"); await say(memory, "Add buy seed to my to-do list");
  assert.equal(await say(memory, "What is on my shopping list?"), "On your shopping list: 1, milk.");
  assert.equal(await say(memory, "Remove milk from my shopping list"), "Removed milk.");
  assert.match(await say(memory, "What is on my shopping list?"), /^Your shopping list is empty/);
  assert.equal((await memory.listPersonalItems({ userId: "u1" })).length, 1);
});

test("an ambiguous item asks which one", async () => {
  const memory = fakeMemory();
  await say(memory, "Add buy maize seed to my to-do list"); await say(memory, "Add buy bean seed to my to-do list");
  assert.equal(await say(memory, "Mark buy seed as done"), "Which one: buy bean seed; buy maize seed?");
});

test("notes: keep, list, find and delete", async () => {
  const memory = fakeMemory();
  assert.match(await say(memory, "Note: the pump needs a new seal"), /^Noted: pump needs a new seal\./);
  await say(memory, "Take a note that the gate is broken");
  assert.equal(await say(memory, "What are my notes?"), "Your notes, newest first: gate is broken; pump needs a new seal.");
  assert.equal(await say(memory, "What did I note about the pump"), "pump needs a new seal.");
  assert.equal(await say(memory, "Delete my note about the pump"), "Deleted your note: pump needs a new seal.");
  assert.match(await say(memory, "What did I note about the pump"), /no note about the pump/);
});

test("calendar: add with a day and time, ask for a missing day, list by day, cancel", async () => {
  const memory = fakeMemory();
  assert.equal(await say(memory, "Add vet visit to my calendar tomorrow at 10am"), "Added to your calendar: tomorrow at 10:00 am: vet visit. I will mention it in your morning brief that day.");
  assert.match(await say(memory, "Put field day on my calendar for 25 September"), /Added to your calendar: Friday 25 September: field day/);
  assert.match(await say(memory, "Add market to my calendar"), /What day is market\?/);
  assert.match(await say(memory, "Add old thing to my calendar on 2026-09-01"), /already passed/);
  assert.equal(await say(memory, "What is on my calendar tomorrow?"), "On your calendar for tomorrow: tomorrow at 10:00 am: vet visit.");
  assert.equal(await say(memory, "What is on my calendar today?"), "Nothing on your calendar for today.");
  assert.match(await say(memory, "What is on my calendar?"), /^On your calendar for the next two weeks: tomorrow at 10:00 am: vet visit; Friday 25 September: field day\.$/);
  assert.equal(await say(memory, "Add vet visit to my calendar tomorrow at 10am"), "tomorrow at 10:00 am: vet visit is already on your calendar.");
  assert.equal(await say(memory, "Cancel field day from my calendar"), "Removed from your calendar: Friday 25 September: field day.");
  assert.equal(await say(memory, "What is on my calendar next week?"), "On your calendar for next week: tomorrow at 10:00 am: vet visit.", "tomorrow, a Monday, is next week from a Sunday");
  assert.equal(await say(memory, "What is on my calendar on 1 December?"), "Nothing on your calendar for Tuesday 1 December.");
});

test("everything belongs to one person, and the list has a cap", async () => {
  const memory = fakeMemory();
  await say(memory, "Add buy seed to my to-do list", "u1");
  assert.match(await say(memory, "What is on my to-do list?", "u2"), /^Your to-do list is empty/);
  for (let i = 0; i < 300; i += 1) await memory.addPersonalItem({ userId: "u3", content: { kind: "note", text: `n${i}` } });
  assert.match(await say(memory, "Note that one more", "u3"), /lists are full/);
});

test("the repository writes private rows under its own purpose and only ever soft-deletes", async () => {
  const calls = [];
  const db = { async query(sql, params) { calls.push({ sql, params }); return { rows: [{ memory_id: "mem_1", content: { kind: "todo", text: "x" } }] }; } };
  const repo = new MemoryRepository(db);
  await repo.addPersonalItem({ tenantId: "t1", userId: "u1", content: { kind: "todo", list: "todo", text: "buy seed", done: false } });
  assert.match(calls[0].sql, /'domain','personal_items'/); assert.match(calls[0].sql, /'sensitive'/);
  await repo.updatePersonalItem({ tenantId: "t1", userId: "u1", memoryId: "mem_1", content: { kind: "todo", text: "buy seed", done: true } });
  assert.match(calls[1].sql, /purpose='personal_items'/);
  await repo.removePersonalItem({ tenantId: "t1", userId: "u1", memoryId: "mem_1" });
  assert.match(calls[2].sql, /set deleted_at=now\(\)/);
  assert.ok(calls.every(call => !/delete from/i.test(call.sql)));
  assert.equal((await repo.listPersonalItems({ tenantId: "t1", userId: "u1", kind: "todo" })).length, 1);
  assert.equal((await repo.listPersonalItems({ tenantId: "t1", userId: "u1", kind: "note" })).length, 0);
});

test("through the planner these are conversational answers with no tool, and the model is never asked", async () => {
  const memory = Object.assign(fakeMemory(), { async saveProfileFact() { return { fact: {}, replaced: [] }; }, async profile() { return []; }, async forgetProfile() { return []; }, async search() { return []; }, async recent() { return []; } });
  const p = new OpenEndedPlanner({ memory, tools: { list: async () => [] }, applications: { list: () => [] }, model: { plan: async () => { throw new Error("no model"); }, respond: async () => null } });
  const plan = await p.plan({ command: { text: "Add buy seed to my to-do list", channel: "typed", locale: "en", tenantId: "t1", actorId: "u1", conversationId: "c" }, context: { can: () => true, roles: [], timeZone: "Africa/Nairobi" } });
  assert.equal(plan.application, "conversation"); assert.deepEqual(plan.steps, []); assert.match(plan.response, /^Added buy seed to your to-do list/);
});

test("the morning brief mentions today's calendar and open to-dos, and a day with only those is still worth a brief", async () => {
  const rows = [{ content: { kind: "event", text: "Vet visit", day: TODAY, time: "10:00" } }, { content: { kind: "event", text: "Later", day: "2026-09-25", time: "" } },
    { content: { kind: "todo", list: "todo", text: "a", done: false } }, { content: { kind: "todo", list: "todo", text: "b", done: true } }, { content: { kind: "todo", list: "shopping", text: "c", done: false } }, { content: { kind: "note", text: "n" } }];
  const digest = todayDigest(rows, TODAY);
  assert.equal(digestLine(digest), "On your calendar: Vet visit at 10:00 am. 1 open item on your to-do list.");
  assert.equal(composeBrief({ name: "Amina Wanjiru", agenda: digestLine(digest), now: NOW, timeZone: "Africa/Nairobi" }), "Good morning Amina. On your calendar: Vet visit at 10:00 am. 1 open item on your to-do list.");
  assert.equal(composeBrief({ now: NOW }), null, "nothing to say, no brief");

  const brief = createBriefService({ notifications: { listReminders: async () => [], enqueue: async () => {} }, memory: { listPersonalItems: async () => rows, profile: async () => [] }, now: () => NOW });
  assert.match(await brief.compose({ tenantId: "t1", userId: "u1", known: { name: "Amina" }, timeZone: "Africa/Nairobi" }), /^Good morning Amina\. On your calendar: Vet visit at 10:00 am\./);
});

test("looking back: yesterday and periods such as this week, last month and the last 10 days", () => {
  const { extractPeriod } = require("../../nexus/personal/dates.js");
  assert.equal(extractDay("rain yesterday", TODAY).day, "2026-09-19");
  assert.deepEqual(extractPeriod("this week", TODAY), { from: "2026-09-14", to: "2026-09-20", label: "this week" });
  assert.deepEqual(extractPeriod("last week", TODAY), { from: "2026-09-07", to: "2026-09-13", label: "last week" });
  assert.deepEqual(extractPeriod("this month", TODAY), { from: "2026-09-01", to: "2026-09-20", label: "this month" });
  assert.deepEqual(extractPeriod("last month", TODAY), { from: "2026-08-01", to: "2026-08-31", label: "last month" });
  assert.deepEqual(extractPeriod("the last 10 days", TODAY), { from: "2026-09-11", to: "2026-09-20", label: "the last 10 days" });
  assert.equal(extractPeriod("this season", TODAY).label, "this season");
  assert.equal(extractPeriod("whenever", TODAY), null);
});
