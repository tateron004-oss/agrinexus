"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const matcher = require("../../public/kyro-pr-topics.js");
const guide = require("../../nexus/knowledge/pr-events-guide.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { collectSources } = require("../../scripts/check-guide-sources.js");

// A checked guide for small business owners who do their own public relations and events, or who are about to hire a PR or event firm. Official facts come from the FTC, CDC, SBA and ADA pages read on 20 October 2026;
// the press release outline, event checklist, holding statement and brief are Kyro's own templates and are labelled as such.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
const ALL = Object.keys(guide.TOPICS);

test("which questions get which topic", () => {
  const yes = [
    ["What can you help me with for PR and events?", "pr-overview"], ["What is public relations?", "pr-overview"],
    ["How do I write a press release?", "press-release"], ["How do I build a media list?", "press-release"], ["How can I get press coverage for my shop?", "press-release"],
    ["Do I have to disclose a sponsored post?", "influencer-disclosure"], ["What are the rules for influencer posts?", "influencer-disclosure"],
    ["What are the advertising rules for my business?", "ad-rules"], ["What can I say in my ad?", "ad-rules"], ["Is my ad legal?", "ad-rules"],
    ["How do I write a crisis communication plan?", "crisis-communication"], ["What do I say when my business gets bad press?", "crisis-communication"], ["Help me with a holding statement", "crisis-communication"],
    ["How do I plan an event for my business?", "event-planning"], ["How do I plan a grand opening?", "event-planning"], ["Give me an event checklist", "event-planning"], ["What is a run of show?", "event-planning"],
    ["Do I need a permit for a street fair event?", "event-permits"], ["How do I make my event accessible?", "event-accessibility"], ["Do I need a sign language interpreter at my event?", "event-accessibility"],
    ["How do I hire a PR firm?", "hire-pr-firm"], ["What should I ask an event production company?", "hire-pr-firm"], ["What goes in a PR brief?", "hire-pr-firm"],
    ["How do I measure PR results?", "measure-results"], ["How do I know if my event worked?", "measure-results"], ["How do I engage my stakeholders?", "stakeholder-engagement"],
    ["What is a brand strategy?", "brand-strategy"], ["How do I build my brand?", "brand-strategy"]
  ];
  for (const [text, id] of yes) assert.equal(matcher.prTopic(text), id, text);
});

test("the calendar, records, drafting orders for other things, fake reviews, personal emergencies and things that only share a word are never taken", () => {
  for (const text of ["Add an event to my calendar", "What events do I have on my calendar?", "Remind me about the press conference", "What is the weather for the outdoor event", "Are fake reviews illegal?", "How do I buy reviews for my shop?",
    "I am in crisis", "I want to kill myself, what is the crisis plan", "How do I make a crisis safety plan", "Plan my day", "What is the price of maize?", "Send a press release to the newspaper", "Log an event expense", "How do I start an LLC?",
    "How do I plan my farm season?", "What is my profit?", "Tell me a joke", "My brand of tractor broke", "Who owes me money after the event?", "", "x".repeat(400)]) assert.equal(matcher.prTopic(text), null, text);
});

const official = /^https:\/\/(?:www\.)?(?:ftc\.gov|cdc\.gov|sba\.gov|ada\.gov)\//;

test("every answer names official pages, the date they were read and the closing line, and says what is Kyro's own", () => {
  for (const id of ALL) {
    const answer = guide.prEventsAnswer(id);
    assert.ok(answer && answer.topic === id, id);
    assert.ok(answer.sources.length >= 1 && answer.sources.every(source => official.test(source.url)), `${id}: official pages only`);
    assert.match(answer.text, /Sources: .+ \(checked 20 October 2026\)\. This is general information, not legal advice/);
    assert.doesNotMatch(answer.text, /\byou must (?:file|register)\b|\bguarantee\b|\bwill (?:definitely|certainly)\b|\bI (?:will|can) send\b/i, id);
  }
  assert.equal(guide.prEventsAnswer("nonsense"), null);
  // what is Kyro's own is said to be Kyro's own
  assert.match(guide.prEventsAnswer("press-release").text, /This outline is Kyro's own starting template; no official page gives one\./);
  assert.match(guide.prEventsAnswer("crisis-communication").text, /Kyro's own adaptation for a business, not an official page/);
  assert.match(guide.prEventsAnswer("crisis-communication").text, /written for public health emergencies, not for businesses/);
  assert.match(guide.prEventsAnswer("event-planning").text, /The rest is Kyro's own starting checklist, not an official page/);
  assert.match(guide.prEventsAnswer("hire-pr-firm").text, /This is Kyro's own starting list, not an official page/);
  assert.match(guide.prEventsAnswer("event-permits").text, /That page does not mention event permits\./);
});

test("the facts are the ones the pages gave", () => {
  const text = id => guide.prEventsAnswer(id).text;
  for (const fact of [/claims in advertisements must be truthful, cannot be deceptive or unfair, and must be evidence-based/, /competent and reliable scientific evidence/, /took effect on 21 October 2024/, /advertising agencies and public relations firms are not immune/, /National Do Not Call Registry/]) assert.match(text("ad-rules"), fact);
  for (const fact of [/personal, family or employment relationship, or a financial one/, /free or discounted products or services/, /hard to miss/, /in the video and not only in the description/, /repeat it periodically/, /sp, spon, collab/, /same language as the endorsement/, /cannot talk about a product you have not tried/, /should not rely on others to do it/]) assert.match(text("influencer-disclosure"), fact);
  for (const fact of [/be first/, /be right/, /be credible/, /express empathy, within the first 30 seconds/, /promote action/, /show respect/, /what is known and what is not known/, /start now with a communication plan with key messages/, /not for businesses/]) assert.match(text("crisis-communication"), fact);
  for (const fact of [/American Sign Language interpreters/, /video remote interpreting/, /notetakers/, /large print materials/, /captioning/, /cannot be required to bring their own interpreter/, /undue burden/, /businesses and nonprofits open to the public/]) assert.match(text("event-accessibility"), fact);
  for (const fact of [/licenses from your county or city/, /some licenses and permits expire/, /does not mention event permits/, /call your city or county office/]) assert.match(text("event-permits"), fact);
  for (const fact of [/target audience, set a goal/, /comparing what it cost with what it brought in/, /ask your city or county, and your insurance company/]) assert.match(text("event-planning"), fact);
  for (const fact of [/set goals, a budget, and a way to measure and update/, /can be liable for fake reviews and testimonials/, /I cannot choose a firm for you or sign you up with one/]) assert.match(text("hire-pr-firm"), fact);
  assert.match(text("measure-results"), /annual basis at minimum/);
  assert.match(text("pr-overview"), /I cannot send anything to the media, run your event, keep a media distribution list, or replace a professional/);
});

const planner = () => new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); }, respond: async () => { throw new Error("the guide must answer without the model"); } }, tools: { list: async () => [] }, applications: { list: () => [] } });
const ask = text => planner().plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context: { timeZone: "America/Chicago" } });

test("through the planner, with no AI model; what is not this guide's is left alone", async () => {
  for (const [text, id] of [["How do I write a press release?", "press-release"], ["What are the rules for influencer posts?", "influencer-disclosure"], ["How do I hire a PR firm?", "hire-pr-firm"], ["How do I plan an event for my business?", "event-planning"], ["How do I write a crisis communication plan?", "crisis-communication"]]) {
    const plan = await ask(text);
    assert.equal(plan.knowledge, `pr-events-guide:${id}`, text); assert.deepEqual(plan.steps, []); assert.equal(plan.guardrail, "professional-advice");
    assert.ok(plan.sources.length >= 1 && plan.sources.every(source => official.test(source.url))); assert.match(plan.response, /checked 20 October 2026/);
  }
  // the marketing plan, fake reviews and the calendar keep their own routes (here they reach the AI model, which this test forbids)
  const fake = await ask("Are fake reviews illegal?");
  assert.ok(!String(fake.knowledge || "").startsWith("pr-events-guide"), "fake reviews are the technology guide's answer, not this one");
  for (const text of ["Add an event to my calendar", "I want to kill myself, what is the crisis plan"]) await assert.rejects(ask(text), /must not reach the AI planning model|guide must answer/, text);
});

test("on the page and the server: the question is the page's own, the server tries the person's words first, the script is loaded before app.js and cached, and the pages are in the weekly check", () => {
  const start = app.indexOf("function kyroPrQuestion(text) {");
  const end = app.indexOf("\n}\n", start) + 2;
  assert.ok(start > 0 && end > start);
  const context = { window: { KyroPrTopics: matcher } };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroPrQuestion;`, context);
  for (const say of ["How do I write a press release?", "How do I plan an event for my business?"]) assert.equal(context.ask(say), true, say);
  for (const say of ["Add an event to my calendar", "Play some music", "What is the weather"]) assert.equal(context.ask(say), false, say);
  const none = { window: {} };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroPrQuestion;`, none);
  assert.equal(none.ask("How do I write a press release?"), false, "no matcher loaded, no claim");
  assert.match(app, /\(typeof kyroPrQuestion === "function" && kyroPrQuestion\(trimmed\)\) \|\| \(typeof kyroChurchQuestion === "function" && kyroChurchQuestion\(trimmed\)\) \|\| \(typeof kyroAthleteQuestion === "function" && kyroAthleteQuestion\(trimmed\)\) \|\| \(typeof kyroMoneyQuestion === "function" && kyroMoneyQuestion\(trimmed\)\) \|\| \(typeof kyroHowtoQuestion === "function" && kyroHowtoQuestion\(trimmed\)\) \|\| \(typeof kyroTechWalkQuestion === "function" && kyroTechWalkQuestion\(trimmed\)\)\)\) \{\s+if \(!heardAgain\) \{\s+try \{ kyroTakeOverTurn\(\); \}/);
  assert.match(server, /const prAsk = typeof prTopic === "function" && rawCallerText && prTopic\(rawCallerText\) \? rawCallerText : command;/);
  assert.match(server, /prTopic\(prAsk\) && effectiveMentalHealthSignal\.state !== "medical_emergency" && typeof deterministicVoiceAnswer === "function"/);
  assert.match(server, /text: prAsk, language, timeZone: args\?\.timeZone/);
  assert.ok(server.includes('const { prTopic } = require("./public/kyro-pr-topics.js");'));
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  const tag = '<script src="/kyro-pr-topics.js?v=kyro-pr-topics-2"></script>';
  assert.ok(index.includes(tag) && index.indexOf(tag) < index.search(/<script[^>]+src="\/app\.js/));
  assert.ok(sw.includes("`/kyro-pr-topics.js?v=kyro-pr-topics-2`"));
  const urls = collectSources().map(entry => entry.url);
  for (const source of Object.values(guide.SOURCES)) assert.ok(urls.includes(source.url), source.url);
  assert.ok(collectSources().some(entry => entry.guides.includes("pr-events-guide")));
});
