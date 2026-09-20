"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { OpenEndedPlanner, personalRecordQuestionPlan, isLightChatRequest, ordinaryConversationPlan } = require("../../nexus/brain/planner.js");
const { createBusinessExecutor } = require("../../nexus/business/authoritative-executor.js");

// Production battery 2026-09-20: "How many bags of maize do I have in stock?" answered "You have 21 bags" from an unrelated web
// page; "Tell me a joke" and "asdf qwerty" returned stitched-together web snippets; "Show me my farm expenses this month"
// failed with a 422 asking "What should I call this business?".
test("a question about the person's own stock or money is answered honestly, never from the web", () => {
  for (const text of ["How many bags of maize do I have in stock?", "What is my inventory?", "Tell me my savings", "How many goats do I have?"]) {
    const plan = personalRecordQuestionPlan(text);
    assert.equal(plan.application, "conversation", text); assert.deepEqual(plan.steps, [], text);
    assert.match(plan.response, /^I don't have your [a-z]+ on record, so I can't say without guessing\./, text);
    if (!/savings/.test(text)) assert.match(plan.response, /Create a list called (?:Stock|Farm) with maize, beans/, "it points at something Nexus really does");
  }
  assert.match(personalRecordQuestionPlan("How many bags of maize do I have in stock?").response, /your stock/);
  assert.doesNotMatch(personalRecordQuestionPlan("Tell me my savings").response, /Create a list/, "no list suggestion for money it cannot track that way");
});

test("it leaves alone everything that has a real tool or is not about the person's own holdings", () => {
  for (const text of ["Show me my farm expenses this month", "How much income did I make?", "What is my profit?", "What are current maize prices in Kenya?", "What is the yield of maize per acre?", "What reminders do I have?", "Show me my shopping list",
    "Show me my business dashboard", "How do I record my expenses in a business?", "What's my blood pressure reading", "Log an expense of 500 shillings",
    "What is the weather for my harvest?", "How much fertilizer do I need for one acre of maize?", "Find a pharmacy near me"])
    assert.equal(personalRecordQuestionPlan(text), null, text);
});

test("jokes and riddles are chat, and other requests are not", () => {
  for (const text of ["Tell me a joke", "tell me a funny joke", "Give me a riddle", "Please tell me a proverb", "Say me another joke"]) assert.equal(isLightChatRequest(text), true, text);
  for (const text of ["What is the funniest joke about maize prices", "Write a document about jokes", "Find me a joke book online", "Tell me about fall armyworm"]) assert.equal(isLightChatRequest(text), false, text);
});

test("keyboard mashing gets a plain question back instead of a web search", () => {
  for (const text of ["asdf qwerty", "asdfghjkl", "qwerty", "aaaaaaa", "Asdf!"]) assert.match(ordinaryConversationPlan(text).response, /^I didn't catch that\. What would you like help with\?$/, text);
  for (const text of ["asdf is a compiler", "Tell me about qwerty keyboards", "hello", "as of today"]) assert.doesNotMatch(String(ordinaryConversationPlan(text)?.response || ""), /didn't catch that/, text);
});

function planner(model) {
  const tools = { list: async () => [{ tool_id: "knowledge.search", domain: "knowledge", description: "x", availability: "available" }] };
  return new OpenEndedPlanner({ model, tools, applications: { list: () => [{ applicationId: "learning", capabilities: [], riskTiers: [] }] } });
}
const command = text => ({ text, channel: "typed", locale: "en", tenantId: "t", actorId: "u" });
const context = { can: () => true, roles: [] };

test("the planner answers a joke through the direct answer, with no tools and no web search", async () => {
  let asked;
  const model = { plan: async () => assert.fail("no tool plan for a joke"), respond: async request => { asked = request.goal; return "Why did the farmer win an award? He was outstanding in his field."; } };
  const plan = await planner(model).plan({ command: command("Tell me a joke"), context });
  assert.equal(asked, "Tell me a joke"); assert.equal(plan.application, "conversation"); assert.deepEqual(plan.steps, []); assert.match(plan.response, /outstanding in his field/);
  const noModel = await planner({ plan: async () => ({ goal: "x", application: "learning", riskTier: "low", steps: [{ id: "s", title: "t", toolId: "knowledge.search", input: {} }] }), respond: async () => { throw new Error("down"); } }).plan({ command: command("Tell me a joke"), context });
  assert.equal(noModel.steps[0].toolId, "knowledge.search", "if the direct answer fails it falls back to the normal planner");
});

test("the planner answers a stock question without calling any model", async () => {
  const model = { plan: async () => assert.fail("must not plan"), respond: async () => assert.fail("must not respond") };
  const plan = await planner(model).plan({ command: command("How many bags of maize do I have in stock?"), context });
  assert.equal(plan.application, "conversation"); assert.match(plan.response, /^I don't have your stock on record/);
});

test("the business executor says what it can do for a request it does not recognize, instead of asking for a workspace name", async () => {
  const execute = createBusinessExecutor({ repository: {}, access: {}, consents: {}, env: {} });
  await assert.rejects(() => execute({ input: { command: "Make it happen with my business somehow" }, context: {} }),
    error => error.code === "business_request_not_understood" && error.status === 422 && /log an expense or income/.test(error.message) && !/What should I call/.test(error.message));
});
