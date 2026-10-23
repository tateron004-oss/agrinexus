"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const matcher = require("../../public/kyro-church-topics.js");
const guide = require("../../nexus/knowledge/church-guide.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { collectSources } = require("../../scripts/check-guide-sources.js");

// A checked guide for churches and other houses of worship in the United States. Every rule is an IRS page read on 21 October 2026 and is said in the IRS's own terms; what a page does not say, the answer says it does not say.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
const ALL = Object.keys(guide.TOPICS);

test("which questions get which topic", () => {
  const yes = [
    ["What can you help me with for my church?", "church-overview"], ["How can you help a pastor?", "church-overview"],
    ["Does a church have to apply for tax-exempt status?", "church-exempt-status"], ["Is our church tax exempt?", "church-exempt-status"], ["Do churches pay taxes?", "church-exempt-status"], ["Does a mosque need a 501(c)(3) determination letter?", "church-exempt-status"],
    ["How do I start a church?", "church-register"], ["Does our church need an EIN?", "church-register"], ["How do I register my synagogue with the state?", "church-register"], ["Do churches pay property taxes?", "church-register"],
    ["Does our church file a Form 990?", "church-990"], ["Do churches have to file an annual return with the IRS?", "church-990"], ["Does a parish have to file a 990-N?", "church-990"],
    ["Does our church owe tax on the income from our bookstore?", "church-unrelated-income"], ["What is unrelated business income for a church?", "church-unrelated-income"], ["Does a church file a 990-T?", "church-unrelated-income"],
    ["Do we have to give church members a receipt for their tithes?", "church-donation-receipts"], ["Can a member deduct what they give to the church?", "church-donation-receipts"], ["What is a written acknowledgment for church donations?", "church-donation-receipts"],
    ["How is a pastor's housing allowance taxed?", "church-clergy-pay"], ["Does a pastor pay self-employment tax?", "church-clergy-pay"], ["Is a parsonage taxable income?", "church-clergy-pay"], ["What is a minister's housing allowance?", "church-clergy-pay"],
    ["What is Form 8274 for a church?", "church-payroll"], ["Does our church have to withhold FICA from employees?", "church-payroll"], ["Do church employees pay Social Security tax?", "church-payroll"],
    ["Can a church endorse a candidate?", "church-politics"], ["What is the Johnson Amendment?", "church-politics"], ["Can our pastor talk about an election from the pulpit?", "church-politics"]
  ];
  for (const [text, id] of yes) assert.equal(matcher.churchTopic(text), id, text);
});

test("records, orders, the calendar, faith questions, personal emergencies and words that only share a spelling are never taken", () => {
  for (const text of ["Show my church donors", "Call my pastor", "Send the church a text", "Add church to my calendar on Sunday", "Remind me to pray", "What is on my schedule for church?", "Play church music", "Pray for me",
    "What does the Bible say about tithing?", "Tell me a joke", "I am in crisis", "My pastor abused me", "I want to kill myself, I need the church", "The minister of finance said the budget is up", "My temple hurts", "How do I start an LLC?",
    "What is the price of maize?", "How do I write a press release?", "Does my business have to file a Form 990?", "How do I apply for tax-exempt status for my nonprofit?", "What is the housing market doing?", "", "x".repeat(400)]) assert.equal(matcher.churchTopic(text), null, text);
});

test("every answer names IRS pages (or the registries it points to), the date they were read, and the closing line", () => {
  const known = /^https:\/\/(?:www\.)?(?:irs\.gov|nasconet\.org|cac\.gov\.ng)\//;
  for (const id of ALL) {
    const answer = guide.churchAnswer(id);
    assert.ok(answer && answer.topic === id, id);
    assert.ok(answer.sources.length >= 1 && answer.sources.every(source => known.test(source.url)), `${id}: official pages only`);
    assert.match(answer.text, /Sources: .+ \(checked 21 October 2026\)\. This is general information, not tax or legal advice/);
    assert.doesNotMatch(answer.text, /\byou must (?:file|apply)\b|\bguarantee\b|\bwill (?:definitely|certainly)\b|\bI (?:will|can) (?:file|send|apply)\b/i, id);
  }
  assert.equal(guide.churchAnswer("nonsense"), null);
});

test("the facts are the ones the pages gave, and what a page does not say is said not to be said", () => {
  const text = id => guide.churchAnswer(id).text;
  for (const fact of [/automatically considered tax exempt/, /not required to apply for and obtain recognition/, /including synagogues, temples and mosques/, /assurance that their gifts are deductible/, /Auto-Revocation List/]) assert.match(text("church-exempt-status"), fact);
  for (const fact of [/churches, some church-affiliated organizations and certain other types of organizations are excepted from filing/, /\$50,000 or less/, /So a church is not required to file a Form 990/, /does not say how far the exception reaches/]) assert.match(text("church-990"), fact);
  for (const fact of [/\$1,000 or more of gross income/, /Form 990-T/, /\$500 or more/, /page does not mention churches, so I cannot tell you whether or how it applies/]) assert.match(text("church-unrelated-income"), fact);
  for (const fact of [/\$250 or more only with a written acknowledgment/, /over \$75/, /written disclosure statement/, /do not list what an acknowledgment must say/]) assert.match(text("church-donation-receipts"), fact);
  for (const fact of [/housing allowance/, /officially designate/, /fair rental value of a parsonage/, /subject to self-employment tax/, /not for economic reasons/, /irrevocable/]) assert.match(text("church-clergy-pay"), fact);
  for (const fact of [/Form 8274/, /opposed for religious reasons/, /before the first date on which a quarterly employment tax return would otherwise be due/, /does not mention ministers/]) assert.match(text("church-payroll"), fact);
  for (const fact of [/absolutely prohibited/, /public statements of position/, /non-partisan manner/, /does not say anything specific about churches/, /I will not guess/]) assert.match(text("church-politics"), fact);
  for (const fact of [/I have not read a state page about churches in particular/, /you never have to pay a fee for an EIN/]) assert.match(text("church-register"), fact);
  assert.match(text("church-overview"), /I do not file anything, set up a church, or give tax or legal advice/);
});

test("outside the United States no rule is stated, and Kenya and Nigeria are told why", () => {
  const nigeria = guide.churchAnswer("church-990", { us: false, country: "ng" });
  assert.match(nigeria.text, /^These are United States rules, from the IRS\./);
  assert.match(nigeria.text, /I have not read an official page about registering or running a church in Nigeria/);
  assert.ok(nigeria.sources.some(source => source.url === "https://www.cac.gov.ng/"));
  const kenya = guide.churchAnswer("church-register", { us: false, country: "ke" });
  assert.match(kenya.text, /I have not read an official page about registering or running a church in Kenya/);
  assert.match(kenya.text, /which I could not confirm from an official page/);
  assert.match(guide.churchAnswer("church-990", { us: false, country: null }).text, /I have not read an official page about running a church in your country/);
  assert.doesNotMatch(guide.churchAnswer("church-990").text, /^These are United States rules/, "a person in the United States is not told that");
});

const planner = () => new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); }, respond: async () => { throw new Error("the guide must answer without the model"); } }, tools: { list: async () => [] }, applications: { list: () => [] } });
const ask = (text, context = { timeZone: "America/Chicago" }) => planner().plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context });

test("through the planner, with no AI model; a church is not given the general nonprofit answer", async () => {
  for (const [text, id] of [["Does a church have to apply for tax-exempt status?", "church-exempt-status"], ["Does our church file a Form 990?", "church-990"], ["How is a pastor's housing allowance taxed?", "church-clergy-pay"], ["Do we have to give members a receipt for their tithes?", "church-donation-receipts"], ["Can a church endorse a candidate?", "church-politics"]]) {
    const plan = await ask(text);
    assert.equal(plan.knowledge, `church-guide:${id}`, text); assert.deepEqual(plan.steps, []); assert.equal(plan.guardrail, "professional-advice");
    assert.ok(plan.sources.length >= 1 && plan.sources.every(source => /^https:\/\/(?:www\.)?(?:irs\.gov|nasconet\.org|cac\.gov\.ng)\//.test(source.url))); assert.match(plan.response, /checked 21 October 2026/);
    assert.doesNotMatch(plan.response, /^These are United States rules/, "in the United States");
  }
  // a US phone, but the question names Nigeria or Kenya: the answer is not given as if the IRS's rules applied there
  const named = await ask("Does our church in Nigeria have to file a Form 990?", { timeZone: "America/Los_Angeles" });
  assert.match(named.response, /^These are United States rules, from the IRS\./);
  assert.ok(named.sources.some(source => source.url === "https://www.cac.gov.ng/"));
  assert.match((await ask("How do we register our church in Kenya?", { timeZone: "America/Chicago" })).response, /Kenya/);
  const nigeria = await ask("Does our church file a Form 990?", { timeZone: "Africa/Lagos" });
  assert.equal(nigeria.knowledge, "church-guide:church-990");
  assert.match(nigeria.response, /^These are United States rules, from the IRS\./);
  assert.match(nigeria.response, /Nigeria/);
  // what is not the church guide's keeps its own route (here it reaches the AI model, which this test forbids)
  for (const text of ["Show my church donors", "I want to kill myself, I need the church"]) await assert.rejects(ask(text), /must not reach the AI planning model|guide must answer/, text);
});

test("on the page and the server: the question is the page's own, the server tries the person's words first, the script is loaded before app.js and cached, and the pages are in the weekly check", () => {
  const start = app.indexOf("function kyroChurchQuestion(text) {");
  const end = app.indexOf("\n}\n", start) + 2;
  assert.ok(start > 0 && end > start);
  const context = { window: { KyroChurchTopics: matcher } };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroChurchQuestion;`, context);
  for (const say of ["Does a church have to file a Form 990?", "How is a pastor's housing allowance taxed?"]) assert.equal(context.ask(say), true, say);
  for (const say of ["Call my pastor", "Play some music", "What is the weather"]) assert.equal(context.ask(say), false, say);
  const none = { window: {} };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroChurchQuestion;`, none);
  assert.equal(none.ask("Does a church have to file a Form 990?"), false, "no matcher loaded, no claim");
  assert.match(app, /\(typeof kyroChurchQuestion === "function" && kyroChurchQuestion\(trimmed\)\) \|\| \(typeof kyroAthleteQuestion === "function" && kyroAthleteQuestion\(trimmed\)\) \|\| \(typeof kyroMoneyQuestion === "function" && kyroMoneyQuestion\(trimmed\)\) \|\| \(typeof kyroHowtoQuestion === "function" && kyroHowtoQuestion\(trimmed\)\) \|\| \(typeof kyroTechWalkQuestion === "function" && kyroTechWalkQuestion\(trimmed\)\)\)\) \{\s+if \(!heardAgain\) \{\s+try \{ kyroTakeOverTurn\(\); \}/);
  assert.match(server, /const churchAsk = typeof churchTopic === "function" && rawCallerText && churchTopic\(rawCallerText\) \? rawCallerText : command;/);
  assert.match(server, /churchTopic\(churchAsk\) && effectiveMentalHealthSignal\.state !== "medical_emergency" && typeof deterministicVoiceAnswer === "function"/);
  assert.match(server, /text: churchAsk, language, timeZone: args\?\.timeZone/);
  assert.ok(server.includes('const { churchTopic } = require("./public/kyro-church-topics.js");'));
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  const tag = '<script src="/kyro-church-topics.js?v=kyro-church-topics-1"></script>';
  assert.ok(index.includes(tag) && index.indexOf(tag) < index.search(/<script[^>]+src="\/app\.js/));
  assert.ok(sw.includes("`/kyro-church-topics.js?v=kyro-church-topics-1`"));
  const urls = collectSources().map(entry => entry.url);
  for (const source of Object.values(guide.SOURCES)) assert.ok(urls.includes(source.url), source.url);
  assert.ok(collectSources().some(entry => entry.guides.includes("church-guide")));
});
