"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { MemoryRepository } = require("../../nexus/memory/repository.js");
const { farmLogTurn, readRequest, MAX_ENTRIES } = require("../../nexus/farm/log.js");

const TODAY = "2026-09-20"; // a Sunday
const NOW = new Date("2026-09-20T05:00:00Z");

test("reports are read as what they are, with units converted and impossible numbers refused", () => {
  assert.deepEqual(readRequest("Log 12 mm of rain", TODAY), { action: "log", metric: "rain", value: 12, unit: "mm", place: "", crop: "", day: TODAY });
  assert.equal(readRequest("We got 2 inches of rain yesterday", TODAY).value, 50.8);
  assert.equal(readRequest("We got 2 inches of rain yesterday", TODAY).day, "2026-09-19");
  assert.equal(readRequest("It rained 8mm last night", TODAY).day, "2026-09-19");
  assert.equal(readRequest("Log 12 mm of rain on friday", TODAY).day, "2026-09-18", "a weekday means the most recent one");
  assert.equal(readRequest("Log 700 mm of rain", TODAY).reason, "rain");
  assert.equal(readRequest("Log 12 mm of rain tomorrow", TODAY).reason, "future");
  assert.equal(readRequest("The water tank is at 150 percent", TODAY).reason, "percent");
  assert.deepEqual(readRequest("Soil moisture in the north field is 30 percent", TODAY), { action: "log", metric: "soil", value: 30, unit: "%", place: "north field", crop: "", day: TODAY });
  assert.equal(readRequest("Log soil moisture 45% in the dam field", TODAY).place, "dam field");
  assert.deepEqual(readRequest("Log north tank level 12000 litres", TODAY), { action: "log", metric: "tank", value: 12000, unit: "litres", place: "north", crop: "", day: TODAY });
  assert.deepEqual(readRequest("We picked 1.5 tonnes of tomatoes yesterday", TODAY), { action: "log", metric: "harvest", value: 1500, unit: "kg", place: "", crop: "tomatoes", day: "2026-09-19" });
  assert.equal(readRequest("Log a harvest of 5 bags of beans from the east field", TODAY).place, "east field");
  assert.equal(readRequest("Collected 30 eggs today", TODAY).crop, "eggs");
});

test("ordinary talk and questions about the weather ahead are left alone", () => {
  for (const text of ["I got 5 bags of cement", "How much rain will fall tomorrow?", "how much rain is forecast tomorrow?", "What is the weather", "The tank is full", "My tank broke yesterday", "How much maize should I plant?", "Log in to my account", "I harvested maize"]) {
    assert.equal(readRequest(text, TODAY), null, text);
  }
});

function fakeMemory() {
  const rows = []; let n = 0;
  const live = userId => rows.filter(row => row.userId === userId && !row.deleted);
  return { rows,
    async addFarmEntry({ userId, content }) { rows.unshift({ memory_id: `f${++n}`, userId, content, deleted: false }); return { memoryId: `f${n}` }; },
    async listFarmEntries({ userId }) { return live(userId).map(row => ({ memory_id: row.memory_id, content: row.content })); },
    async removeFarmEntry({ userId, memoryId }) { const row = live(userId).find(item => item.memory_id === memoryId); if (row) row.deleted = true; return Boolean(row); }
  };
}
const say = (memory, text, userId = "u1", now = NOW) => farmLogTurn({ text, memory, tenantId: "t1", userId, now, timeZone: "Africa/Nairobi" });

test("rain is logged, totalled by period, and can be undone", async () => {
  const memory = fakeMemory();
  assert.equal(await say(memory, "Log 12 mm of rain"), "Logged 12 mm of rain for today. Rain this month: 12 mm over 1 day.");
  assert.equal(await say(memory, "We got 8 mm of rain yesterday"), "Logged 8 mm of rain for yesterday. Rain this month: 20 mm over 2 days.");
  assert.equal(await say(memory, "How much rain did I get this week?"), "Rain this week: 20 mm over 2 days.");
  assert.equal(await say(memory, "How much rain did I get yesterday?"), "Rain yesterday: 8 mm over 1 day.");
  assert.match(await say(memory, "How much rain did I get last month?"), /^I have no rain logged for last month/);
  assert.equal(await say(memory, "Undo my last entry"), "Removed your last entry: 8 mm of rain for yesterday.");
  assert.equal(await say(memory, "How much rain have we had?"), "Rain this month: 12 mm over 1 day.");
  assert.match(await say(memory, "Log 12 mm of rain tomorrow"), /still ahead/);
  assert.match(await say(memory, "Log 900 mm of rain"), /more rain than falls in a day/);
  assert.equal(memory.rows.filter(row => !row.deleted).length, 1, "refused numbers are never saved");
});

test("tank and soil readings are read back with their day, and a warning fires when a reading falls below the person's own level", async () => {
  const memory = fakeMemory();
  assert.match(await say(memory, "Warn me if the tank drops below 20 percent"), /^I'll warn you when you log the tank below 20%/);
  assert.equal(await say(memory, "The tank is at 40 percent"), "Logged tank at 40% for today.");
  assert.equal(await say(memory, "The tank is at 15 percent"), "Logged tank at 15% for today. Heads up: that is below your 20% alert.");
  assert.equal(await say(memory, "What is my tank level?"), "The tank was at 15% when last logged, today.");
  await say(memory, "Alert me when soil moisture in the north field falls below 25 percent");
  assert.equal(await say(memory, "Soil moisture in the south field is 10 percent"), "Logged soil moisture 10% (south field) for today.", "the alert is for the north field only");
  assert.match(await say(memory, "Soil moisture in the north field is 20 percent"), /Heads up: that is below your 25% alert for the north field\./);
  assert.equal(await say(memory, "What was the soil moisture in the north field?"), "Soil moisture was 20% (north field) when last logged, today.");
  assert.equal(await say(memory, "What alerts do I have?"), "Your farm alerts: soil moisture (north field) below 25%; tank below 20%.", "newest first");
  assert.match(await say(memory, "Warn me if the tank drops below 30 percent"), /^Updated\. /);
  assert.equal(await say(memory, "Stop warning me about the tank"), "Done. No more warnings about the tank.");
  assert.equal(await say(memory, "The tank is at 5 percent"), "Logged tank at 5% for today.");
  assert.match(await say(memory, "What is my soil moisture in the west field"), /no soil moisture logged for the west field/);
});

test("harvests are totalled per crop and unit, with tonnes converted to kilograms", async () => {
  const memory = fakeMemory();
  assert.equal(await say(memory, "I harvested 200 kg of maize"), "Logged 200 kg of maize for today. Total maize this year: 200 kg.");
  assert.equal(await say(memory, "We picked 1 tonne of maize yesterday"), "Logged 1000 kg of maize for yesterday. Total maize this year: 1200 kg.");
  await say(memory, "Log a harvest of 5 bags of beans from the east field"); await say(memory, "Collected 30 eggs today");
  assert.equal(await say(memory, "How much maize have I harvested this year?"), "Harvest this year: maize 1200 kg.");
  assert.equal(await say(memory, "What is my total harvest?"), "Harvest this year: 30 eggs; beans 5 bags; maize 1200 kg.", "newest crop first");
  assert.match(await say(memory, "How much cassava have I harvested this year?"), /no cassava harvest logged/);
  assert.match(await say(memory, "Show my farm log"), /^Your latest entries: today: .*eggs/);
});

test("the log belongs to one person and is capped", async () => {
  const memory = fakeMemory();
  await say(memory, "Log 12 mm of rain", "u1");
  assert.match(await say(memory, "How much rain have we had?", "u2"), /^I have no rain logged/);
  for (let i = 0; i < MAX_ENTRIES; i += 1) await memory.addFarmEntry({ userId: "u3", content: { kind: "reading", metric: "rain", value: 1, unit: "mm", day: TODAY } });
  assert.match(await say(memory, "Log 12 mm of rain", "u3"), /farm log is full/);
});

test("the repository stores farm entries privately under their own purpose and only soft-deletes", async () => {
  const calls = [];
  const db = { async query(sql, params) { calls.push({ sql, params }); return { rows: [{ memory_id: "m1", content: { kind: "reading" } }] }; } };
  const repo = new MemoryRepository(db);
  await repo.addFarmEntry({ tenantId: "t1", userId: "u1", content: { kind: "reading", metric: "rain", value: 12, unit: "mm", day: TODAY } });
  assert.match(calls[0].sql, /'domain','farm_log'/);
  assert.equal((await repo.listFarmEntries({ tenantId: "t1", userId: "u1" })).length, 1);
  assert.match(calls[1].sql, /purpose='farm_log'/);
  await repo.removeFarmEntry({ tenantId: "t1", userId: "u1", memoryId: "m1" });
  assert.match(calls[2].sql, /set deleted_at=now\(\)/);
  assert.ok(calls.every(call => !/delete from/i.test(call.sql)));
});

test("through the planner a report is a conversational answer with no tool and the model is never asked", async () => {
  const memory = Object.assign(fakeMemory(), { async saveProfileFact() { return { fact: {}, replaced: [] }; }, async profile() { return []; }, async forgetProfile() { return []; }, async search() { return []; }, async recent() { return []; } });
  const p = new OpenEndedPlanner({ memory, tools: { list: async () => [] }, applications: { list: () => [] }, model: { plan: async () => { throw new Error("no model"); }, respond: async () => null } });
  const plan = await p.plan({ command: { text: "Log 12 mm of rain", channel: "typed", locale: "en", tenantId: "t1", actorId: "u1", conversationId: "c" }, context: { can: () => true, roles: [], timeZone: "Africa/Nairobi" } });
  assert.equal(plan.application, "conversation"); assert.deepEqual(plan.steps, []); assert.match(plan.response, /^Logged 12 mm of rain for today\./);
});
