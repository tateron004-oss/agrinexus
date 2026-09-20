"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { OpenEndedPlanner, isMemoryRecallQuestion, memoryRecallPlan } = require("../../nexus/brain/planner.js");
const { MemoryRepository } = require("../../nexus/memory/repository.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");

// Production 2026-09-20: "What do you remember about me?" was sent to a web search and answered "I'm an AI system built
// by a team of inventors at Amazon". search() matches the whole question as a substring of stored text, so it can never
// match a question like that; recall questions now list what is saved for the person.
const command = { text: "x", tenantId: "t", actorId: "u", locale: "en", channel: "typed" };
function planner(memory) {
  return new OpenEndedPlanner({ model: { plan: async () => assert.fail("recall must not consult the planning model"), respond: async () => assert.fail("or the direct-answer model") },
    memory, tools: { list: async () => [] }, applications: { list: () => defaultApplicationManifests() } });
}

test("memory recall questions are recognized, and real questions about other things are not", () => {
  for (const text of ["What do you remember about me?", "what do you know about me", "Hello Kyro, what do you remember about me?", "What have you saved about me?",
    "which things do you know about me", "Do you remember me?", "do you know anything about me", "What's in your memory about me?", "what did you learn about me"]) {
    assert.equal(isMemoryRecallQuestion(text), true, text);
  }
  for (const text of ["What do you remember about the 2019 harvest?", "What do you know about maize?", "Remember that I grow beans", "Forget everything about me",
    "What is my name?", "Tell me about yourself", "What can you do?"]) assert.equal(isMemoryRecallQuestion(text), false, text);
});

test("the answer lists exactly what is saved, or says there is nothing, and never touches a model", async () => {
  const asked = [];
  const saved = [{ content: "Grows maize and beans near Nakuru" }, { content: { crop: "maize", acres: 3 } }, { content: "  Prefers   Swahili  " }];
  const withNotes = await planner({ recent: async input => { asked.push(input); return saved; }, search: async () => assert.fail("recall lists, it does not search") })
    .plan({ command: { ...command, text: "What do you remember about me?" }, context: { roles: ["standard_user"] } });
  assert.equal(withNotes.application, "conversation"); assert.deepEqual(withNotes.steps, []);
  assert.equal(withNotes.response, 'Here is what I have saved about you: 1. Grows maize and beans near Nakuru 2. {"crop":"maize","acres":3} 3. Prefers Swahili I do not list health details here.');
  assert.deepEqual(asked, [{ tenantId: "t", userId: "u", purpose: "task_planning", roles: ["standard_user"], limit: 10 }], "scoped to this person and the planning purpose");

  const none = await planner({ recent: async () => [] }).plan({ command: { ...command, text: "what do you know about me" }, context: {} });
  assert.equal(none.response, "I do not have any saved notes about you to show here.");
  const noRepo = await planner(null).plan({ command: { ...command, text: "what do you know about me" }, context: {} });
  assert.equal(noRepo.response, "I do not have any saved notes about you to show here.", "no memory store is the same honest answer, not a crash");
  const oldRepo = await planner({ search: async () => [] }).plan({ command: { ...command, text: "what do you know about me" }, context: {} });
  assert.equal(oldRepo.response, "I do not have any saved notes about you to show here.");
});

test("the list is bounded: at most 8 notes of 200 characters, blanks dropped", () => {
  const many = [{ content: "" }, { content: "   " }, ...Array.from({ length: 12 }, (_, index) => ({ content: `note ${index + 1} ${"x".repeat(300)}` }))];
  const { response } = memoryRecallPlan("what do you know about me", many);
  assert.equal((response.match(/\d+\. note/g) || []).length, 8);
  assert.ok(!response.includes("note 9"));
  for (const part of response.split(/ \d+\. /).slice(1)) assert.ok(part.length <= 260, "each note is truncated");
});

test("the repository lists with the same privacy filters as search, and requires a purpose", async () => {
  const queries = [];
  const repository = new MemoryRepository({ query: async (sql, params) => { queries.push({ sql, params }); return { rows: [{ memory_id: "m1", content: "c" }] }; } });
  assert.deepEqual(await repository.recent({ tenantId: "t", userId: "u", purpose: "" }), [], "no purpose, no memories");
  assert.equal(queries.length, 0);
  const rows = await repository.recent({ tenantId: "t", userId: "u", purpose: "task_planning", roles: [], limit: 999 });
  assert.equal(rows.length, 1);
  const { sql, params } = queries[0];
  assert.match(sql, /tenant_id=\$1 and principal_id=\$2 and purpose=\$3/); assert.match(sql, /deleted_at is null/); assert.match(sql, /expires_at is null or expires_at > now\(\)/);
  assert.match(sql, /sensitivity <> 'health' or \$5::boolean/); assert.doesNotMatch(sql, /ilike/, "listing, not substring search");
  assert.deepEqual(params, ["t", "u", "task_planning", 20, false], "limit is capped and health is hidden for ordinary users");
  await repository.recent({ tenantId: "t", userId: "u", purpose: "task_planning", roles: ["admin"] });
  assert.equal(queries[1].params[4], true, "the same health rule as search() for admins");
});
