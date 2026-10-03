"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// Found by running spoken-style sentences through the real planner: five natural ways of asking for
// something that SAVES data were not recognized, so they fell through to the general AI model --
// which cannot save a note / calendar event / farm-log entry, and could answer as if it had.
// The in-memory store is the one kyro-features-together.test.js already uses.
const together = fs.readFileSync(path.join(__dirname, "kyro-features-together.test.js"), "utf8");
const fullMemory = new Function(`${together.slice(together.indexOf("function fullMemory"), together.indexOf('test("each feature'))}\nreturn fullMemory;`)();

function makePlanner() {
  const modelCalls = [];
  const alerts = { async enable() { return {}; }, async disable() { return 1; }, async status() { return null; } };
  const tools = [{ tool_id: "knowledge.search", availability: "available" }];
  const planner = new OpenEndedPlanner({ memory: fullMemory(), alerts, tools: { list: async () => tools },
    applications: { list: () => [{ applicationId: "live-knowledge", capabilities: [], riskTiers: [] }] },
    model: { plan: async request => { modelCalls.push(request.command?.text); return { goal: "g", application: "live-knowledge", riskTier: "low", clarification: null, steps: [{ id: "s", title: "t", toolId: "knowledge.search", input: { query: "q" } }] }; }, respond: async () => null } });
  const ask = (text, history = []) => planner.plan({ command: { text, channel: "voice", locale: "en", tenantId: "t1", actorId: "u1", conversationId: "cnv_1" }, context: { can: () => true, roles: [], timeZone: "Africa/Nairobi" }, conversationHistory: history });
  return { ask, modelCalls };
}

const SAVED = (plan) => plan.application === "conversation" && Array.isArray(plan.steps) && plan.steps.length === 0 && typeof plan.response === "string";

test("'write down that ...' saves a note", async () => {
  for (const text of ["write down that the cow is limping", "Write this down: the pump needs a new seal", "please jot that down, the gate is broken"]) {
    const { ask, modelCalls } = makePlanner();
    const plan = await ask(text);
    assert.ok(SAVED(plan), text);
    assert.match(plan.response, /^Noted: /, text);
    assert.equal(modelCalls.length, 0, `${text} must not reach the model`);
  }
  const { ask } = makePlanner();
  await ask("write down that the cow is limping");
  assert.match((await ask("what are my notes?")).response, /cow is limping/);
});

test("a meeting can be scheduled without saying 'my calendar'", async () => {
  for (const text of ["put a meeting with the cooperative on Monday at 10 am", "schedule a meeting with the cooperative on Monday at 10", "book an appointment at the clinic tomorrow at 3pm"]) {
    const { ask, modelCalls } = makePlanner();
    const plan = await ask(text);
    assert.ok(SAVED(plan), text);
    assert.match(plan.response, /^Added to your calendar/, text);
    assert.equal(modelCalls.length, 0, text);
  }
  const { ask } = makePlanner();
  await ask("schedule a meeting with the cooperative tomorrow at 10");
  assert.match((await ask("what is on my calendar tomorrow?")).response, /meeting with the cooperative/);
});

test("'put milk on Monday' and other non-events are NOT read as calendar events", async () => {
  for (const text of ["put milk on Monday", "schedule my day", "add a meeting", "I have a meeting problem"]) {
    const { ask } = makePlanner();
    const plan = await ask(text);
    assert.doesNotMatch(String(plan.response || ""), /^Added to your calendar/, text);
  }
});

test("'I need to buy X, put it on my list' adds X to the list", async () => {
  const { ask, modelCalls } = makePlanner();
  const plan = await ask("I need to buy fertilizer, put it on my list");
  assert.ok(SAVED(plan));
  assert.match(plan.response, /^Added buy fertilizer to your to-do list/);
  assert.equal(modelCalls.length, 0);
  assert.match((await ask("what is on my to-do list?")).response, /buy fertilizer/);
  // Without the "put it on my list" part it is just a statement, not a list request.
  const bare = await makePlanner().ask("I need to buy fertilizer");
  assert.doesNotMatch(String(bare.response || ""), /^Added/);
});

test("'it rained about 12 mm today' is logged, like the exact-number versions", async () => {
  for (const [text, mm] of [["it rained about 12 mm today", "12"], ["it rained around 20 millimeters", "20"], ["we got roughly 15 mm of rain last night", "15"]]) {
    const { ask, modelCalls } = makePlanner();
    const plan = await ask(text);
    assert.ok(SAVED(plan), text);
    assert.match(plan.response, new RegExp(`^Logged ${mm} mm of rain`), text);
    assert.equal(modelCalls.length, 0, text);
  }
});

test("spoken praise with a thank-you is recorded as helpful feedback", async () => {
  const history = [{ role: "user", content: "How deep do I plant maize?" }, { role: "assistant", content: "About 5 cm." }];
  for (const text of ["that helped, thank you", "that was really helpful", "that was helpful, thanks", "Thank you, that helped", "that helped"]) {
    const { ask, modelCalls } = makePlanner();
    const plan = await ask(text, history);
    assert.ok(SAVED(plan), text);
    assert.match(plan.response, /Glad that helped/, text);
    assert.equal(modelCalls.length, 0, text);
  }
});

test("things that merely sound like praise or feedback are not recorded", async () => {
  const history = [{ role: "user", content: "q" }, { role: "assistant", content: "a" }];
  for (const text of ["that helped my cow recover last year", "thank you for your time"]) {
    const { ask } = makePlanner();
    const plan = await ask(text, history);
    assert.doesNotMatch(String(plan.response || ""), /Glad that helped/, text);
  }
});
