"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { OpenEndedPlanner, memoryRecallPlan, isMemoryRecallQuestion } = require("../../nexus/brain/planner.js");
const { MemoryRepository } = require("../../nexus/memory/repository.js");

// An in-memory stand-in with the same contract as MemoryRepository's profile methods.
function fakeMemory({ failing = false } = {}) {
  const rows = []; let n = 0;
  return { rows,
    async saveProfileFact({ tenantId, userId, kind, value, sourceText }) {
      if (failing) throw new Error("db down");
      const replaced = rows.filter(row => row.userId === userId && row.content.kind === kind && !row.deleted).map(row => { row.deleted = true; return row.content; });
      rows.unshift({ id: ++n, tenantId, userId, content: { kind, value }, sourceText, deleted: false });
      return { fact: { kind, value }, replaced };
    },
    async profile({ userId }) { return rows.filter(row => row.userId === userId && !row.deleted).map(row => ({ memory_id: row.id, content: row.content })); },
    async forgetProfile({ userId, kind }) {
      const current = rows.filter(row => row.userId === userId && !row.deleted);
      const chosen = kind === "all" ? current : kind === "last" ? current.slice(0, 1) : current.filter(row => row.content.kind === kind);
      chosen.forEach(row => { row.deleted = true; }); return chosen.map(row => row.content);
    },
    async search() { return []; }, async recent({ userId }) { return rows.filter(row => row.userId === userId && !row.deleted).map(row => ({ content: row.content })); }
  };
}
const tools = { list: async () => [{ tool_id: "knowledge.search", availability: "available" }] };
const applications = { list: () => [{ applicationId: "learning", capabilities: [], riskTiers: [] }] };
const planner = memory => new OpenEndedPlanner({ memory, tools, applications, model: { plan: async () => ({ goal: "g", application: "learning", riskTier: "low", steps: [{ id: "s", title: "t", toolId: "knowledge.search", input: { query: "q" } }] }), respond: async () => null } });
const ask = (p, text, actorId = "u1") => p.plan({ command: { text, channel: "typed", locale: "en", tenantId: "t1", actorId, conversationId: "cnv_1" }, context: { can: () => true, roles: [] } });

test("a plain statement is saved, announced with the way to undo it, and answered without any tool", async () => {
  const memory = fakeMemory(); const p = planner(memory);
  const plan = await ask(p, "I farm maize and beans in Kisumu");
  assert.equal(plan.application, "conversation"); assert.deepEqual(plan.steps, []);
  assert.equal(plan.response, 'Got it. I\'ll remember that you are in Kisumu and you grow maize, beans. Say "forget that" any time, or ask "what do you know about me?"');
  assert.deepEqual(memory.rows.map(row => `${row.content.kind}=${row.content.value}`).sort(), ["crops=maize, beans", "location=Kisumu"]);
  assert.equal(memory.rows[0].sourceText, "I farm maize and beans in Kisumu", "the person's own words are kept as the source");
});

test("a newer statement replaces the old fact and says so", async () => {
  const memory = fakeMemory(); const p = planner(memory);
  await ask(p, "I live in Kisumu");
  const plan = await ask(p, "I live in Nakuru");
  assert.match(plan.response, /I'll remember that you are in Nakuru\. This replaces what I had before\./);
  assert.deepEqual((await memory.profile({ userId: "u1" })).map(row => row.content), [{ kind: "location", value: "Nakuru" }]);
});

test("forget that, forget a kind, and forget everything take facts back and say what went", async () => {
  const memory = fakeMemory(); const p = planner(memory);
  await ask(p, "My name is Amina"); await ask(p, "I grow maize"); await ask(p, "I live in Kisumu");
  assert.equal((await ask(p, "Forget that")).response, "Done. I've forgotten that you are in Kisumu.");
  assert.equal((await ask(p, "Forget my name")).response, "Done. I've forgotten that your name is Amina.");
  assert.equal((await ask(p, "Forget my name")).response, "I don't have that saved, so there is nothing to forget.");
  assert.equal((await ask(p, "Forget everything about me")).response, "Done. I've forgotten that you grow maize.");
  assert.deepEqual(await memory.profile({ userId: "u1" }), []);
});

test("what is remembered belongs to one person only", async () => {
  const memory = fakeMemory(); const p = planner(memory);
  await ask(p, "I live in Kisumu", "u1");
  assert.equal((await ask(p, "Forget everything", "u2")).response, "I don't have that saved, so there is nothing to forget.");
  assert.equal((await memory.profile({ userId: "u1" })).length, 1, "another person cannot forget it");
});

test("anything that is not a plain statement or a forget request goes on to normal planning, and memory trouble never blocks a turn", async () => {
  const memory = fakeMemory(); const p = planner(memory);
  for (const text of ["When should I plant beans in Kisumu?", "I grow maize, when should I plant?", "Call me a taxi", "I have malaria", "Don't forget to water the maize"]) {
    const plan = await ask(p, text);
    assert.equal(plan.steps?.[0]?.toolId || plan.application, plan.steps?.[0]?.toolId ? "knowledge.search" : plan.application, text);
    assert.notEqual(plan.response?.slice(0, 7), "Got it.", text);
  }
  assert.equal(memory.rows.length, 0, "nothing was saved");
  const broken = planner(fakeMemory({ failing: true }));
  assert.equal((await ask(broken, "I live in Kisumu")).steps[0].toolId, "knowledge.search", "a failing store falls through to normal planning");
  assert.equal((await ask(planner(undefined), "I live in Kisumu")).steps[0].toolId, "knowledge.search", "no memory configured: unchanged");
});

test("'what do you know about me' reads facts back as sentences", () => {
  const saved = [{ content: { kind: "name", value: "Amina" } }, { content: { kind: "crops", value: "maize, beans" } }, { content: { kind: "location", value: "Kisumu" } }, { content: "Likes short answers" }];
  assert.equal(isMemoryRecallQuestion("What do you know about me?"), true);
  assert.equal(memoryRecallPlan("What do you know about me?", saved).response,
    "Here is what I have saved about you: 1. Your name is Amina. 2. You grow maize, beans. 3. You are in Kisumu. 4. Likes short answers I do not list health details here.");
});

test("the repository saves one current fact per kind, privately, and forgets softly", async () => {
  const calls = [];
  const db = { async query(sql, params) { calls.push({ sql, params });
    if (/^\s*update nexus_memory_items set deleted_at=now\(\),updated_at=now\(\)\s+where tenant_id=\$1 and principal_id=\$2 and memory_class='profile' and purpose='task_planning' and content->>'kind'/.test(sql)) return { rows: [{ content: { kind: "location", value: "Kisumu" } }] };
    if (/insert into nexus_memory_items/.test(sql)) return { rows: [{ memory_id: "memory_1", content: { kind: "location", value: "Nakuru" } }] };
    if (/select memory_id,content,created_at/.test(sql)) return { rows: [{ memory_id: "m2", content: { kind: "name", value: "Amina" } }, { memory_id: "m1", content: { kind: "location", value: "Nakuru" } }, { memory_id: "mx", content: { marker: "acceptance" } }] };
    return { rows: [{ content: { kind: "location", value: "Nakuru" } }] }; } };
  const repo = new MemoryRepository(db);
  const result = await repo.saveProfileFact({ tenantId: "t1", userId: "u1", kind: "location", value: "Nakuru", sourceText: "I live in Nakuru", conversationId: "cnv_1" });
  assert.deepEqual(result.replaced, [{ kind: "location", value: "Kisumu" }]); assert.deepEqual(result.fact, { kind: "location", value: "Nakuru" });
  const insert = calls.find(call => /insert into/.test(call.sql));
  assert.match(insert.sql, /'profile','task_planning'/); assert.match(insert.sql, /'user_confirmed','internal'/, "user-stated, never health-sensitive");
  assert.deepEqual([insert.params[1], insert.params[2], insert.params[4]], ["t1", "u1", { kind: "location", value: "Nakuru" }]);
  assert.equal(insert.params[6].length, 1 + 1535 * 2 + 2, "a fixed unit-vector placeholder for the required embedding column"); assert.equal(insert.params[6][0], "[");
  assert.equal(insert.params[7].source, "user-statement"); assert.equal(insert.params[7].text, "I live in Nakuru");
  assert.match(calls[0].sql, /where tenant_id=\$1 and principal_id=\$2/, "the previous fact is looked up for this person only");

  assert.deepEqual((await repo.profile({ tenantId: "t1", userId: "u1" })).map(row => row.memory_id), ["m2", "m1"], "only real facts, not other memory items");
  calls.length = 0;
  const forgotten = await repo.forgetProfile({ tenantId: "t1", userId: "u1", kind: "last" });
  assert.deepEqual(forgotten, [{ kind: "location", value: "Nakuru" }]);
  const update = calls.find(call => /^\s*update/.test(call.sql));
  assert.match(update.sql, /set deleted_at=now\(\)/); assert.doesNotMatch(update.sql, /delete from/i); assert.deepEqual(update.params, ["t1", "u1", ["m2"]]);
});
