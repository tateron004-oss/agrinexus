"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { ordinaryConversationPlan } = require("../../nexus/brain/planner.js");
const voiceDispatch = require("../../nexus/business/voice-dispatch.js");

// Production battery 4 (Swahili and short phrases), 2026-09-20/21.
test("the date and time come from the clock, in Nairobi time with UTC beside it", () => {
  const sunday = { now: new Date("2026-09-20T21:51:00Z") };
  for (const text of ["what time is it", "What's today's date", "what day is it", "What is the date today", "time", "what's the time now", "Tell me the date"]) {
    const plan = ordinaryConversationPlan(text, sunday);
    assert.equal(plan.application, "conversation", text); assert.deepEqual(plan.steps, [], text);
    assert.equal(plan.response, "It is 00:51 on Monday, 21 September 2026 in Nairobi (East Africa Time). In UTC that is 21:51 on Sunday, 20 September 2026. I do not know your time zone, so tell me if you are elsewhere.", text);
  }
  const midday = ordinaryConversationPlan("what time is it", { now: new Date("2026-09-20T09:05:00Z") }).response;
  assert.match(midday, /^It is 12:05 on Sunday, 20 September 2026 in Nairobi \(East Africa Time\)\. In UTC that is 09:05\. /, "the UTC date is only repeated when it differs");
  for (const text of ["what time does the market open", "what is the date of the maize planting season", "time management tips", "what day should I plant beans"]) assert.equal(ordinaryConversationPlan(text, sunday), null, text);
});

test("a bare weather question asks where, and one with a place is left to the weather tool", () => {
  for (const text of ["weather", "What's the weather", "how's the weather today", "forecast", "hali ya hewa", "What is the temperature"]) {
    const plan = ordinaryConversationPlan(text, {});
    assert.equal(plan.clarification, "Which town or place should I check the weather for? (Tell me \"I live in <your town>\" once and I will remember it.)", text); assert.deepEqual(plan.steps, [], text);
  }
  for (const text of ["What's the weather in Nakuru tomorrow?", "weather in Kisumu", "Hali ya hewa Nakuru kesho ikoje?"]) assert.equal(ordinaryConversationPlan(text, {}), null, text);
});

test("mouldy grain gets a safety warning, never 'usually safe'", () => {
  for (const text of ["Is it safe to eat maize with black spots?", "Can I eat moldy beans?", "Is it okay to feed my cows mouldy maize", "should I eat groundnuts that smell musty", "Is rotten maize flour safe to eat?"]) {
    const plan = ordinaryConversationPlan(text, {});
    assert.equal(plan.application, "conversation", text); assert.match(plan.response, /aflatoxin/); assert.match(plan.response, /do not eat it or feed it to animals/); assert.doesNotMatch(plan.response, /usually safe/);
  }
  for (const text of ["Can I use fertilizer on maize with yellow spots?", "Is it safe to eat maize", "What causes black spots on maize leaves?", "How do I store maize so it does not get moldy?", "Is it safe to eat mushrooms"]) assert.equal(ordinaryConversationPlan(text, {}), null, text);
});

test("Swahili greetings and thanks are answered, not defined", () => {
  for (const text of ["Habari", "habari yako?", "Habari za asubuhi", "Jambo", "Hujambo!", "Mambo"]) assert.equal(ordinaryConversationPlan(text, {}).response, "Habari! Naweza kukusaidia vipi?", text);
  for (const text of ["Asante", "asante sana", "Ahsante"]) assert.equal(ordinaryConversationPlan(text, {}).response, "Karibu sana.", text);
  assert.equal(ordinaryConversationPlan("Habari za mahindi yangu na bei ya sokoni", {}), null, "a longer sentence is not a greeting");
});

test("a Swahili sale or purchase is logged with its currency, item and type", () => {
  assert.equal(voiceDispatch.classify("Nimeuza magunia 5 ya mahindi kwa shilingi 6000"), "logTransaction");
  assert.equal(voiceDispatch.classify("Nimetumia shilingi 2000 kwa mbegu"), "logTransaction");
  const sold = voiceDispatch.extractTransactionArgs("Nimeuza magunia 5 ya mahindi kwa shilingi 6000", {});
  assert.deepEqual([sold.type, sold.amount, sold.currency, sold.category], ["income", 6000, "KES", "magunia 5 ya mahindi"]);
  const spent = voiceDispatch.extractTransactionArgs("Nimetumia shilingi 2,000 kwa mbegu", {});
  assert.deepEqual([spent.type, spent.amount, spent.currency, spent.category], ["expense", 2000, "KES", "mbegu"]);
  assert.equal(voiceDispatch.precheck("Nimeuza magunia 5 ya mahindi kwa shilingi 6000", {}).clarification, null);
  assert.equal(voiceDispatch.confirmationPrompt("Nimeuza magunia 5 ya mahindi kwa shilingi 6000"), "I can log KES 6,000 as income for magunia 5 ya mahindi in your business workspace. Say yes to save it, or no to cancel.");
});

test("the AI planner is told its users are in Africa, so it never asks for a US zone", () => {
  const source = fs.readFileSync(path.join(__dirname, "../../nexus/brain/openai-planning-model.js"), "utf8");
  assert.match(source, /mostly farmers and rural communities in Africa: when you need a location, ask for their town, county or region, never a US zone or ZIP code/);
});
