"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { farmWorkTurn } = require("../../nexus/farmwork/index.js");
const { CHECKS, REQUEST } = require("../../nexus/farmwork/digital-check.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");

// The digital health check: twelve plain yes/no questions about a small business's technology, one at a time, then what to do first. It saves nothing and changes nothing, and every action in it is a point from
// the FTC small business guidance or the NIST Cybersecurity Framework 2.0 Small Business Quick-Start Guide (see small-business-technology.js).
const NOW = new Date("2026-10-09T15:00:00Z");
function person() {
  const store = fakeFarmStore(); const memory = fakeMemory();
  return { store, say: text => farmWorkTurn({ text, store, tenantId: "t1", userId: "u1", now: NOW, timeZone: "America/Chicago", memory, nameOf: async () => "A shop owner" }) };
}

test("which sentences start the check, and which are other talk", () => {
  for (const text of ["Digital health check", "Run a digital health check", "Do a technology check", "Give me a cybersecurity check", "Can you run the digital health checkup", "Check my business technology", "check my tech", "Is my business safe online?", "How safe is my business online", "Start a digital health check for my business"]) {
    assert.ok(REQUEST.test(text.replace(/[.!?]+$/g, "")), text);
  }
  for (const text of ["What is a digital health check?", "Check my email", "Check my blood pressure", "Is my business online", "technology news", "Check my balance", "I need a health check for my cow"]) assert.equal(REQUEST.test(text.replace(/[.!?]+$/g, "")), false, text);
});

test("twelve questions, each answered yes, no or not sure; the result puts the cheapest protections first and cites its sources", async () => {
  const who = person();
  const first = await who.say("Run a digital health check");
  assert.match(first, /^Let's do a quick digital health check\. Twelve short questions/);
  assert.match(first, /two-step sign-in/);
  // answers: no (mfa), not sure (backup), yes to the rest, except breach plan = no
  const replies = [];
  const answers = ["no", "not sure", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "nope", "yes"];
  for (const answer of answers) replies.push(await who.say(answer));
  assert.equal(replies.length, CHECKS.length);
  const result = replies[replies.length - 1];
  assert.match(result, /^You have 9 of 12 in good shape\./);
  assert.match(result, /1\. Turn on two-step sign-in .* NIST calls it one of the fastest, cheapest ways to protect your data\./);
  assert.match(result, /2\. Back up your files/); assert.match(result, /3\. Decide now who you would call/);
  assert.doesNotMatch(result, /After that/);
  assert.match(result, /FTC small business cybersecurity guidance and the NIST Cybersecurity Framework 2\.0 Small Business Quick-Start Guide \(checked 9 October 2026\)/);
  assert.match(result, /general information, not a security audit or advice/); assert.match(result, /I cannot change anything for you\./);
  assert.match(result, /create a technology roadmap/);
});

test("a long list of gaps says the first three and names the rest; all yes is a strong result; nothing is saved", async () => {
  const who = person();
  await who.say("Digital health check");
  let result = "";
  for (let i = 0; i < 12; i += 1) result = await who.say(i % 2 ? "no" : "skip");
  assert.match(result, /^You have 0 of 12 in good shape\./); assert.match(result, /After that, 9 more: /);
  assert.equal((await who.store.listAll({ tenantId: "t1", userId: "u1", limit: 5 })).length, 0, "the check records nothing");

  const strong = person();
  await strong.say("Check my business technology");
  let last = "";
  for (let i = 0; i < 12; i += 1) last = await strong.say(i % 2 ? "yes" : "yeah");
  assert.match(last, /^That is a strong result: you answered yes to all 12\./);
});

test("cancel stops it, a question mid-check is not an answer, and a mid-check mistake gets one more try", async () => {
  const who = person();
  await who.say("Do a technology check");
  assert.match(await who.say("cancel"), /I've stopped that\. Nothing was saved\./);
  assert.equal(await who.say("yes"), null, "after cancel the words are ordinary words again");
  await who.say("Do a technology check");
  assert.equal(await who.say("What is the weather in Chicago?"), null, "a question leaves the check");
  await who.say("Do a technology check");
  assert.match(await who.say("banana"), /Please pick one: no, yes\./);
});

const catalog = { tools: [], applications: [] };
test("through the planner: the check starts with no AI model, for anyone, in any country", async () => {
  const store = fakeFarmStore();
  const planner = new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); } }, tools: { list: async () => catalog.tools }, applications: { list: () => catalog.applications }, farmWork: { store } });
  for (const timeZone of ["America/Chicago", "Africa/Nairobi"]) {
    const plan = await planner.plan({ command: { text: "Run a digital health check", tenantId: `t-${timeZone}`, actorId: "u1", locale: "en", channel: "typed" }, context: { timeZone } });
    assert.match(plan.response, /^Let's do a quick digital health check\./); assert.deepEqual(plan.steps, []);
  }
});
