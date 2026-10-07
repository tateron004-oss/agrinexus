"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// "Make a shopping list with milk and eggs" went to the generic checklist maker (lists.create), a separate store; "what's on my shopping list" reads
// the personal shopping/to-do store, so the list was "created" and then reported empty. Plain shopping / to-do lists now go to the one store the
// question reads; named checklists still go to the checklist maker.

const together = fs.readFileSync(path.join(__dirname, "kyro-features-together.test.js"), "utf8");
const fullMemory = new Function(`${together.slice(together.indexOf("function fullMemory"), together.indexOf('test("each feature'))}\nreturn fullMemory;`)();

function planner() {
  const modelCalls = [];
  // The catalog HAS the checklist tool, so the old route is genuinely available to compete.
  const tools = [{ tool_id: "lists.create", availability: "available" }, { tool_id: "knowledge.search", availability: "available" }];
  const apps = [{ applicationId: "lists", capabilities: [], riskTiers: [] }, { applicationId: "live-knowledge", capabilities: [], riskTiers: [] }];
  const p = new OpenEndedPlanner({ memory: fullMemory(), alerts: { async enable() { return {}; }, async disable() { return 1; }, async status() { return null; } },
    tools: { list: async () => tools }, applications: { list: () => apps },
    model: { plan: async request => { modelCalls.push(request.command?.text); return { goal: "g", application: "live-knowledge", riskTier: "low", clarification: null, steps: [{ id: "s", title: "t", toolId: "knowledge.search", input: { query: "q" } }] }; }, respond: async () => null } });
  const ask = text => p.plan({ command: { text, channel: "voice", locale: "en", tenantId: "t1", actorId: "u1", conversationId: "cnv" }, context: { can: () => true, roles: [], timeZone: "Africa/Nairobi" }, conversationHistory: [] });
  return { ask, modelCalls };
}

test("'make a shopping list with ...' puts the items where 'what's on my shopping list' reads", async () => {
  const { ask, modelCalls } = planner();
  const made = await ask("Make a shopping list with milk, eggs and bread");
  assert.equal(made.application, "conversation");
  assert.deepEqual(made.steps, [], "must not be sent to the checklist maker");
  assert.match(made.response, /^Added milk, eggs and bread to your shopping list\. You have 3 open items\.$/);
  const read = await ask("What's on my shopping list?");
  assert.match(read.response, /milk/);
  assert.match(read.response, /eggs/);
  assert.match(read.response, /bread/);
  assert.equal(modelCalls.length, 0);
});

test("the common spoken ways of asking all land in the same store", async () => {
  for (const [text, expectedList, expectedItems] of [
    ["Create a shopping list with milk and eggs", "shopping list", ["milk", "eggs"]],
    ["Start a grocery list including rice, beans", "shopping list", ["rice", "beans"]],
    ["Please make me a to-do list with fix the gate, buy seed and call the vet", "to-do list", ["fix the gate", "buy seed", "call the vet"]],
    ["Make a shopping list: sugar, salt", "shopping list", ["sugar", "salt"]],
    ["make a new shopping list of tomatoes and onions.", "shopping list", ["tomatoes", "onions"]]
  ]) {
    const { ask } = planner();
    const made = await ask(text);
    assert.equal(made.application, "conversation", text);
    assert.match(made.response, new RegExp(`to your ${expectedList}`), text);
    const read = await ask(expectedList === "to-do list" ? "What is on my to-do list?" : "What's on my shopping list?");
    for (const item of expectedItems) assert.match(read.response, new RegExp(item), `${text} -> ${item}`);
  }
});

test("items already on the list are not added twice, and the reply says so", async () => {
  const { ask } = planner();
  await ask("Add milk to my shopping list");
  const made = await ask("Make a shopping list with milk and eggs");
  assert.match(made.response, /Added eggs to your shopping list\. milk was already there\. You have 2 open items\./);
  const again = await ask("Make a shopping list with milk and eggs");
  assert.match(again.response, /^Those are already on your shopping list\. You have 2 open items\.$/);
});

test("lists with a name of their own, and a bare 'make a list', still go to the checklist maker", async () => {
  const { ask } = planner();
  for (const text of ["Create a checklist called planting day with seeds and water", "Make a list for the market trip with maize and beans", "Create a checklist"]) {
    const plan = await ask(text);
    assert.equal(plan.steps?.[0]?.toolId, "lists.create", text);
  }
});

test("adding one item the old way, and reading, are unchanged; several things are several items", async () => {
  const { ask } = planner();
  assert.match((await ask("Add milk to my shopping list")).response, /^Added milk to your shopping list/);
  assert.match((await ask("What's on my shopping list?")).response, /milk/);
  // "milk and eggs" used to be ONE item called "milk and eggs", which could not be ticked off one at a time
  const many = await ask("Add bread and eggs to my shopping list");
  assert.match(many.response, /bread and eggs/);
  assert.match((await ask("What's on my shopping list?")).response, /1, milk; 2, bread; 3, eggs\./);
});
