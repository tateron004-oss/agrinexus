"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { OpenEndedPlanner, translationRequest } = require("../../nexus/brain/planner.js");

// Found on the live site with the real AI: "Translate good morning to Kiswahili." was sent to the learning ("training") window and nothing was translated. A translation request with words and a
// language is now a plain answer from the conversation model, before any app is chosen.
test("which sentences are translation requests: words to translate AND a language", () => {
  assert.deepEqual(translationRequest("Translate good morning to Kiswahili."), { text: "good morning", language: "Swahili" });
  assert.deepEqual(translationRequest("translate where is the clinic into French"), { text: "where is the clinic", language: "French" });
  assert.deepEqual(translationRequest("Please translate \"thank you\" in Spanish!"), { text: "thank you", language: "Spanish" });
  assert.deepEqual(translationRequest("Translate: the harvest is ready to Swahili"), { text: "the harvest is ready", language: "Swahili" });
  for (const text of ["Translate this to Kiswahili", "translate my document into French", "Translate this conversation to Swahili", "translate", "Translate good morning", "what does translate mean", "Create a document and translate it to French"]) {
    assert.equal(translationRequest(text), null, text);
  }
});

function plannerWith(respond) {
  const model = { plan: async () => { throw new Error("must not reach the AI planning model"); }, ...(respond ? { respond } : {}) };
  return new OpenEndedPlanner({ model, tools: { list: async () => [] }, applications: { list: () => [] } });
}
const ask = (p, text) => p.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context: {} });

test("'Translate good morning to Kiswahili.' is answered by the conversation model alone: the translation, no steps, no app", async () => {
  const seen = [];
  const plan = await ask(plannerWith(async request => { seen.push(request.goal); return "Habari ya asubuhi."; }), "Translate good morning to Kiswahili.");
  assert.equal(plan.application, "conversation");
  assert.deepEqual(plan.steps, []);
  assert.equal(plan.response, "Habari ya asubuhi.");
  assert.match(seen[0], /Translate this into Swahili and reply with ONLY the translation, nothing else: good morning/);
});
