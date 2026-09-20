"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// Piece 2 of memory: what Kyro has learned about a person (saved by piece 1) is used wherever it helps.
const tools = { list: async () => [{ tool_id: "knowledge.search", availability: "available" }, { tool_id: "reminders.list", availability: "available" }] };
const applications = { list: () => [{ applicationId: "agriculture", capabilities: [], riskTiers: [] }, { applicationId: "live-knowledge", capabilities: [], riskTiers: [] }, { applicationId: "learning", capabilities: [], riskTiers: [] }] };
const facts = list => list.map(([kind, value]) => ({ memory_id: `m_${kind}`, content: { kind, value } }));

function build({ profile = [], failing = false, noProfileMethod = false } = {}) {
  const seen = { requests: [], responds: [] };
  const memory = { async search() { return []; }, async recent() { return []; }, async saveProfileFact() { return { replaced: [] }; }, async forgetProfile() { return []; },
    ...(noProfileMethod ? {} : { async profile() { if (failing) throw new Error("db down"); return facts(profile); } }) };
  const model = { async plan(request) { seen.requests.push(request); return { goal: request.goal, application: "learning", riskTier: "low", steps: [{ id: "s", title: "Search", toolId: "knowledge.search", input: { query: request.goal } }] }; },
    async respond(request) { seen.responds.push(request); return "a direct answer"; } };
  return { seen, planner: new OpenEndedPlanner({ memory, tools, applications, model }) };
}
const ask = (planner, text, locale = "en") => planner.plan({ command: { text, channel: "typed", locale, tenantId: "t1", actorId: "u1", conversationId: "cnv_1" }, context: { can: () => true, roles: [] } });
const queryOf = plan => plan.steps[0].input.query;

test("a bare weather question is answered for the saved town, keeping today or tomorrow", async () => {
  const { seen, planner } = build({ profile: [["location", "Kisumu"]] });
  for (const [text, expected] of [["weather", "What's the weather in Kisumu today?"], ["What's the weather", "What's the weather in Kisumu today?"], ["weather tomorrow", "What's the weather in Kisumu tomorrow?"],
    ["hali ya hewa leo", "What's the weather in Kisumu today?"], ["What's the weather like right now?", "What's the weather in Kisumu right now?"]]) {
    const plan = await ask(planner, text);
    assert.equal(plan.clarification, null, text); assert.equal(seen.requests.at(-1).goal, expected, text);
  }
  const noTown = await ask(build({ profile: [["name", "Amina"]] }).planner, "weather");
  assert.equal(noTown.clarification, "Which town or place should I check the weather for? (Tell me \"I live in <your town>\" once and I will remember it.)");
  const named = build({ profile: [["location", "Kisumu"]] });
  await ask(named.planner, "What's the weather in Nakuru tomorrow?");
  assert.equal(named.seen.requests.at(-1).goal, "What's the weather in Nakuru tomorrow?", "a town the person names always wins");
});

test("farming, weather and price searches become local, without changing what the person asked", async () => {
  const { planner } = build({ profile: [["location", "Kisumu"], ["crops", "maize, beans"]] });
  const planting = await ask(planner, "When should I plant beans?");
  assert.equal(planting.goal, "When should I plant beans?", "the question shown is exactly what was asked");
  assert.equal(queryOf(planting), "When should I plant beans? in Kisumu");
  assert.equal(queryOf(await ask(planner, "What is the price of maize?")), "What is the price of maize? in Kisumu");
  assert.equal(queryOf(await ask(planner, "When should I harvest my crops?")), "When should I harvest my crops? (I grow maize, beans) in Kisumu");
  assert.equal(queryOf(await ask(planner, "When should I plant beans in Nakuru?")), "When should I plant beans in Nakuru?", "a named place is left alone");
  assert.equal(queryOf(await ask(planner, "Why do maize leaves turn yellow?")), "Why do maize leaves turn yellow?", "not a local topic");
  assert.equal(queryOf(await ask(planner, "Why is the sky blue?")), "Why is the sky blue?");
});

test("nothing changes for a person Kyro knows nothing about, or when memory is unavailable", async () => {
  for (const options of [{ profile: [] }, { failing: true }, { noProfileMethod: true }]) {
    const { planner, seen } = build(options);
    assert.equal(queryOf(await ask(planner, "When should I plant beans?")), "When should I plant beans?");
    assert.equal((await ask(planner, "weather")).clarification.startsWith("Which town or place"), true);
    await ask(planner, "Explain how mobile money works");
    assert.deepEqual(seen.requests[0].memories, [], "nothing is passed to the model as if it were known");
  }
});

test("the planner is told what Kyro knows about the person", async () => {
  const { planner, seen } = build({ profile: [["name", "Amina"], ["location", "Kisumu"], ["crops", "maize"]] });
  await ask(planner, "Explain how mobile money works");
  const memories = seen.requests[0].memories;
  assert.deepEqual(memories.map(memory => `${memory.kind}:${memory.content.kind}=${memory.content.value}`).sort(), ["profile:crops=maize", "profile:location=Kisumu", "profile:name=Amina"]);
  assert.equal(memories[0].confidence, 0.9); assert.equal(memories[0].provenance.source, "user-statement");
});

test("a saved name is used in greetings, and a saved language sets the language of answers", async () => {
  const named = build({ profile: [["name", "Amina Wanjiru"]] });
  assert.equal((await ask(named.planner, "hello")).response, "Hello Amina, how can I help?");
  const swahili = build({ profile: [["language", "Swahili"]] });
  await ask(swahili.planner, "Explain how mobile money works");
  assert.equal(swahili.seen.requests[0].locale, "sw"); assert.equal(swahili.seen.requests[0].interactionProfile.locale, "sw");
  const joke = build({ profile: [["language", "Swahili"]] });
  await ask(joke.planner, "Tell me a joke");
  assert.equal(joke.seen.responds[0].locale, "sw", "direct answers use it too");
  const english = build({ profile: [["language", "English"]] });
  await ask(english.planner, "Explain how mobile money works");
  assert.equal(english.seen.requests[0].locale, "en", "English, or a language with no locale mapping, leaves the request's own locale");
  const explicit = build({ profile: [["language", "Swahili"]] });
  await ask(explicit.planner, "Explain how mobile money works", "fr");
  assert.equal(explicit.seen.requests[0].locale, "sw", "the person's saved preference wins over the default");
});
