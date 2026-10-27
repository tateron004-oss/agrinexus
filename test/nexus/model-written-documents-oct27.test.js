"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { fakeMemory } = require("./farmwork-fake.js");

// Found on the live site on 27 October 2026, by reading the saved documents (the live rig reads titles, not bodies): "Make me a weekly meal plan" saved a document whose text was "Create a simple weekly meal plan for breakfast, lunch, and
// dinner for 7 days. Keep it practical, affordable, and easy to follow." and "Write a short bio for my website" saved "Write a short, polished website bio for the user..." The AI model had put its own instruction in the document instead of the
// document. A body that is only an instruction to write something, which the person did not say, is now written out by one more model call.
const tools = [{ tool_id: "documents.create", domain: "documents", description: "", risk_tier: "low", confirmation_required: false }];
const documentPlan = (title, content, extra = []) => ({ goal: "x", application: "documents", riskTier: "low", clarification: null,
  steps: [{ id: "s1", title: `Create ${title}`, toolId: "documents.create", input: { title, content }, dependsOn: [] }, ...extra] });

function planner(planned, respond) {
  const calls = [];
  const instance = new OpenEndedPlanner({
    model: { plan: async () => planned, respond: async request => { calls.push(request); return respond ? respond(request) : null; } },
    tools: { list: async () => tools }, applications: { list: () => defaultApplicationManifests() },
    memory: Object.assign(fakeMemory(), { search: async () => [] })
  });
  return { instance, calls };
}
const ask = (instance, text) => instance.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "America/Chicago" } });
const MEAL = "Create a simple weekly meal plan for breakfast, lunch, and dinner for 7 days. Keep it practical, affordable, and easy to follow.";
const REAL_MEAL = "Weekly meal plan\n\nMonday\nBreakfast: porridge\nLunch: beans and rice\nDinner: vegetable stew";

test("a document whose body is only the model's instruction to itself is written out by one more model call, told to use only what the person said", async () => {
  const { instance, calls } = planner(documentPlan("Weekly Meal Plan", MEAL), async () => REAL_MEAL);
  const plan = await ask(instance, "Make me a weekly meal plan.");
  assert.equal(plan.steps[0].input.content, REAL_MEAL);
  assert.equal(plan.steps[0].input.title, "Weekly Meal Plan");
  assert.equal(calls.length, 1);
  assert.match(calls[0].goal, /Make me a weekly meal plan\./);
  assert.match(calls[0].goal, /The document is called "Weekly Meal Plan"/);
  assert.match(calls[0].instructions, /Use only what they told you/);
  assert.match(calls[0].instructions, /\[bracket\]/);
});

test("when the second call fails or returns another instruction, the plan is kept as it was and nothing is thrown", async () => {
  for (const respond of [async () => null, async () => { throw new Error("provider down"); }, async () => "Write a short, polished meal plan for the user.", async () => "ok"]) {
    const { instance } = planner(documentPlan("Weekly Meal Plan", MEAL), respond);
    const plan = await ask(instance, "Make me a weekly meal plan.");
    assert.equal(plan.steps[0].input.content, MEAL);
  }
});

test("a real document is left alone, and so is a body made of the person's own words", async () => {
  const real = planner(documentPlan("Weekly Meal Plan", REAL_MEAL), async () => "never used");
  assert.equal((await ask(real.instance, "Make me a weekly meal plan.")).steps[0].input.content, REAL_MEAL);
  assert.equal(real.calls.length, 0);
  const said = planner(documentPlan("Bank steps", "Create a new account at the bank"), async () => "never used");
  assert.equal((await ask(said.instance, "Make me a document that says: create a new account at the bank")).steps[0].input.content, "Create a new account at the bank");
  assert.equal(said.calls.length, 0);
  const letter = planner(documentPlan("Letter", "Dear Mr. Otieno,\n\nWrite to me when the repair is done.\n\nSincerely,\n[Your Name]"), async () => "never used");
  await ask(letter.instance, "Make me a document about a repair");
  assert.equal(letter.calls.length, 0);
});

test("only the step with the echoed body is written out", async () => {
  const other = { id: "s2", title: "Create Notes", toolId: "documents.create", input: { title: "Notes", content: "Notes\n\nBuy seed on Friday." }, dependsOn: [] };
  const { instance, calls } = planner(documentPlan("Weekly Meal Plan", MEAL, [other]), async () => REAL_MEAL);
  const plan = await ask(instance, "Make me a weekly meal plan.");
  assert.equal(plan.steps[0].input.content, REAL_MEAL);
  assert.equal(plan.steps[1].input.content, "Notes\n\nBuy seed on Friday.");
  assert.equal(calls.length, 1);
});

// "Write a short speech for my daughter's graduation" and "Draft an email to my son's teacher" were saved with no title (the model's plan gave none), told aloud as "your document", and no card was drawn: the page shows a document's card only when it
// has a title. The step's own name gives the title; with nothing usable it is "Your document".
test("a document step the model gave no title is titled from the step's own name", async () => {
  const REAL = "Dear graduates,\n\nCongratulations on today.";
  const titled = (stepTitle, input) => ({ goal: "x", application: "documents", riskTier: "low", clarification: null, steps: [{ id: "s1", title: stepTitle, toolId: "documents.create", input, dependsOn: [] }] });
  for (const [stepTitle, input, want] of [["Create Graduation Speech", { content: REAL }, "Graduation Speech"], ["Write the email to the teacher.", { content: REAL }, "Email to the teacher"], ["Save", { content: REAL }, "Your document"],
    ["Create Notes", { title: "  ", content: REAL }, "Notes"], ["Create Notes", { title: "Mine", content: REAL }, "Mine"]]) {
    const { instance } = planner(titled(stepTitle, input));
    assert.equal((await ask(instance, "Make me a document about graduation")).steps[0].input.title, want, stepTitle);
  }
});
