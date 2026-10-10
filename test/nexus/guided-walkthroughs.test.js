"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { farmWorkTurn } = require("../../nexus/farmwork/index.js");
const { CHECKLISTS, LESSONS, checklistRequest, COURSE } = require("../../nexus/farmwork/walkthroughs.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");

// Step-by-step checklists and a six-lesson AI basics course for a small business owner: one short step or lesson at a time, nothing saved, every point from the FTC / NIST guidance in small-business-technology.js.
const NOW = new Date("2026-10-09T15:00:00Z");
function person(timeZone = "America/Chicago") {
  const store = fakeFarmStore(); const memory = fakeMemory(); let long = 0;
  return { store, longs: () => long, say: text => farmWorkTurn({ text, store, tenantId: "t1", userId: "u1", now: NOW, timeZone, memory, nameOf: async () => "An owner", onLongForm: () => { long += 1; } }) };
}

test("which sentences start which checklist, and which are questions or other talk", () => {
  const yes = {
    "Walk me through securing my business accounts": "secure-accounts", "Guide me through protecting my accounts": "secure-accounts", "Give me a checklist for getting my business online": "get-online",
    "Walk me through setting up my business website": "get-online", "Take me through protecting my business email from spoofing": "protect-email", "Walk me through setting up DMARC": "protect-email",
    "Walk me through starting with AI": "first-ai-task", "Talk me through using ChatGPT for my business": "first-ai-task", "Walk me through what to do after a data breach": "after-breach", "Step by step: my customer data was leaked": "after-breach"
  };
  for (const [text, id] of Object.entries(yes)) assert.equal(checklistRequest(text), id, text);
  for (const text of ["How do I get my business online?", "What is DMARC?", "Walk me through the weather", "Walk me through my day", "Is it safe to use ChatGPT for my business?", "I want to check the stock"]) assert.equal(checklistRequest(text), null, text);
  for (const text of ["Start the AI basics course", "Teach me about AI", "Take the AI literacy course", "Begin the AI basics lessons", "AI basics"]) assert.ok(COURSE.test(text), text);
  for (const text of ["What is AI?", "Start the maize course", "Teach me about farming"]) assert.equal(COURSE.test(text), false, text);
});

test("a checklist gives one step at a time, takes done or skip, and ends with a recap of what is left and where the points come from", async () => {
  const who = person();
  const first = await who.say("Walk me through securing my business accounts");
  assert.match(first, /^Secure your business accounts: 7 steps\. Say done when a step is finished, skip to leave it for later, or cancel to stop\. Step 1 of 7: Write down every business account/);
  assert.match(await who.say("done"), /^Step 2 of 7: Turn on two-step sign-in .* NIST calls it one of the fastest, cheapest ways to protect your data\./);
  assert.match(await who.say("skip"), /^Step 3 of 7: /);
  assert.match(await who.say("finished"), /^Step 4 of 7: /);
  assert.match(await who.say("next"), /^Step 5 of 7: /);
  assert.match(await who.say("not sure"), /^Step 6 of 7: /);
  assert.match(await who.say("done"), /^Step 7 of 7: /);
  const result = await who.say("done");
  // answered in turn: 1 done, 2 skip, 3 finished, 4 next, 5 "not sure" (a skip), 6 done, 7 done
  assert.match(result, /^You finished 5 of 7\. Still to do: 2\. Turn on two-step sign-in \(multi-factor authentication\) for your business email\./); assert.match(result, /5\. Use strong passwords, and never type a password into an AI tool\./);
  assert.doesNotMatch(result, /3\. Turn on two-step sign-in for your bank/);
  assert.match(result, /\(checked 9 October 2026\)/); assert.match(result, /not a security audit or advice/); assert.match(result, /I cannot change anything for you\./);
  assert.equal(who.longs() >= 8, true, "every step is long-form, so the page does not cut it to one sentence");
  assert.equal((await who.store.listAll({ tenantId: "t1", userId: "u1", limit: 5 })).length, 0, "nothing is saved");
});

test("every checklist runs to the end and says what it is; getting online says it is practical advice, not a rule", async () => {
  for (const id of Object.keys(CHECKLISTS)) {
    const list = CHECKLISTS[id];
    const phrase = { "secure-accounts": "Walk me through securing my business accounts", "get-online": "Walk me through getting my business online", "protect-email": "Walk me through protecting my business email from spoofing", "first-ai-task": "Walk me through starting with AI", "after-breach": "Walk me through what to do after a data breach" }[id];
    const who = person("America/New_York");
    assert.match(await who.say(phrase), new RegExp(`^${list.title}: ${list.steps.length} steps`), id);
    let result = "";
    for (let i = 0; i < list.steps.length; i += 1) result = await who.say("done");
    assert.match(result, new RegExp(`^You finished all ${list.steps.length} steps\\. `), id);
  }
  const online = person(); await online.say("Walk me through getting my business online");
  let last = ""; for (let i = 0; i < 6; i += 1) last = await online.say("done");
  assert.match(last, /common practical advice, not an official rule/);
});

test("the breach steps name US bodies, so they start only for people in the United States", async () => {
  const outside = person("Africa/Nairobi");
  assert.equal(await outside.say("Walk me through what to do after a data breach"), null);
  const us = person("America/Denver");
  const first = await us.say("Walk me through what to do after a data breach");
  assert.match(first, /^What to do after a data breach: 5 steps/);
  for (let i = 0; i < 4; i += 1) await us.say("done");
  assert.match(await us.say("done"), /IC3\.gov|not legal advice/);
});

test("the AI basics course: six lessons, each taught and checked, then a score with what to review", async () => {
  const who = person("Africa/Nairobi");
  const first = await who.say("Start the AI basics course");
  assert.match(first, /^AI basics for small business: six short lessons, each with a yes or no question\. Say cancel to stop\. Lesson 1 of 6, AI can be wrong\./);
  assert.match(first, /Quick check: True or false: you can send a price an AI tool wrote to a customer without checking it\. Yes or no\?/);
  const answers = ["false", "no", "yes", "no", "no", "yes"]; // the third is wrong (correct is no)
  const replies = [];
  for (const answer of answers) replies.push(await who.say(answer));
  assert.match(replies[0], /^Lesson 2 of 6, What to keep out\./);
  const result = replies[5];
  assert.match(result, /^You got 5 of 6\. To review: lesson 3, AI scams: If anyone asks for money, a wire or account details, verify the request through a phone number or contact you already know before you act\./);
  assert.doesNotMatch(result, /lesson 1/); assert.match(result, /\(checked 9 October 2026\)/); assert.match(result, /start the AI basics course/);
  // all right, and skipped lessons count as not yet learnt
  const clever = person(); await clever.say("Start the AI basics course"); let top = "";
  for (const lesson of LESSONS) top = await clever.say(lesson.correct);
  assert.match(top, /^You got 6 of 6\. Every answer was right\./);
  const skipper = person(); await skipper.say("Start the AI basics course"); let low = "";
  for (let i = 0; i < 6; i += 1) low = await skipper.say("skip");
  assert.match(low, /^You got 0 of 6\. To review: lesson 1, AI can be wrong/);
});

test("answers are read the way people say them, and cancel or a question leaves the conversation", async () => {
  const who = person(); await who.say("Start the AI basics course");
  assert.match(await who.say("No, you can't"), /^Lesson 2 of 6/);
  assert.match(await who.say("That would not be okay"), /^Lesson 3 of 6/);
  assert.match(await who.say("banana"), /Please pick one/);
  assert.match(await who.say("cancel"), /I've stopped that\. Nothing was saved\./);
  const other = person(); await other.say("Walk me through starting with AI");
  assert.equal(await other.say("What is the weather in Chicago?"), null);
});

const catalog = { tools: [], applications: [] };
test("through the planner: a checklist and the course start with no model and are marked long-form, so the page shows them whole", async () => {
  const store = fakeFarmStore();
  const planner = new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); } }, tools: { list: async () => catalog.tools }, applications: { list: () => catalog.applications }, farmWork: { store } });
  const ask = (text, tenantId) => planner.plan({ command: { text, tenantId, actorId: "u1", locale: "en", channel: "typed" }, context: { timeZone: "America/Chicago" } });
  const course = await ask("Start the AI basics course", "t-a");
  assert.match(course.response, /^AI basics for small business/); assert.equal(course.longForm, true); assert.deepEqual(course.steps, []);
  const next = await ask("no", "t-a"); assert.match(next.response, /^Lesson 2 of 6/); assert.equal(next.longForm, true);
  const check = await ask("Run a digital health check", "t-b"); assert.equal(check.longForm, true);
  // ordinary farm and money talk is not marked
  const sale = await ask("Hello there", "t-c").catch(() => ({}));
  assert.equal(sale.longForm, undefined);
});

test("the page shows and speaks a long-form plan whole, like the guide and the guardrail answers", () => {
  const source = require("node:fs").readFileSync(require("node:path").join(__dirname, "..", "..", "public", "app.js"), "utf8");
  assert.match(source, /result\.plan\?\.guardrail \|\| result\.plan\?\.knowledge \|\| result\.plan\?\.longForm \? \{ longForm: true \} : \{\}/);
});
