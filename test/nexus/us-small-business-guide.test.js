"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const guide = require("../../nexus/knowledge/us-small-business.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// The checked guide for small and minority-owned business owners in the United States. Every fact was read from an official page on the date in CHECKED_ON, and every answer carries its sources, that date
// and the "general information, not advice" warning. It applies to people in the United States only.
test("which questions get a guide answer, and which are records, drafts or other talk", () => {
  const yes = {
    "How do I get certified as a minority-owned business?": "certification", "What is the 8(a) program?": "8a", "Tell me about NMSDC certification": "nmsdc", "Where can I get free business help?": "free-help",
    "Is MBDA still open?": "mbda", "How do I get an SBA loan?": "loans", "What grants are available for black-owned businesses?": "grants", "Do I need to pay estimated taxes on my catering income?": "estimated-tax",
    "What is a 1099?": "1099", "Do I need a business license to sell food?": "licenses", "How do I sell to the government?": "contracting", "I need a loan for my restaurant": "loans", "Can I get WOSB certification?": "certification",
    "Where is the nearest SBDC near me?": "local-help", "Find a SCORE mentor near 30303": "local-help", "Find a CDFI near me": "local-help", "How do I register in SAM.gov?": "contracting", "What are the quarterly tax dates?": "estimated-tax"
  };
  for (const [text, topic] of Object.entries(yes)) assert.equal(guide.usSmallBusinessTopic(text), topic, text);
  for (const text of ["Log a tax payment of $300", "Draft a grant proposal", "Who owes me money?", "What is the weather in Atlanta?", "How do I plant maize?", "What is my credit score?", "Find a pharmacy near me",
    "Find jobs near Kisumu", "Sold 3 trays for $450", "Remind me to file quarterly taxes on April 15", "Show me my customers"]) {
    assert.equal(guide.usSmallBusinessTopic(text), null, text);
  }
});

test("every topic has a plain answer, official sources with web addresses, the date checked, and the warning", () => {
  for (const id of Object.keys(guide.TOPICS)) {
    const answer = guide.usSmallBusinessAnswer(id);
    assert.equal(answer.topic, id);
    assert.ok(answer.sources.length >= 1, id);
    for (const source of answer.sources) { assert.match(source.url, /^https:\/\/(?:www\.)?(?:sba|score|irs|cdfifund|grants|gao|nmsdc|federalregister|sec|uspto)\.(?:gov|org)\//, `${id}: ${source.url}`); assert.ok(source.name, id); }
    assert.match(answer.text, new RegExp(`\\(checked ${guide.CHECKED_ON}\\)`), id);
    assert.match(answer.text, /This is general information, not legal, tax or financial advice, and rules change, so confirm on the official site\. I cannot file or apply for anything for you\.$/, id);
  }
  assert.equal(guide.usSmallBusinessAnswer("nope"), null);
});

test("the facts that matter most are there as the official pages gave them", () => {
  const text = id => guide.usSmallBusinessAnswer(id).text;
  assert.match(text("8a"), /\$850,000 or less/); assert.match(text("8a"), /\$400,000 or less/); assert.match(text("8a"), /\$6\.5 million or less/); assert.match(text("8a"), /90 days/);
  assert.match(text("8a"), /since 10 September 2026, an individually owned applicant is no longer presumed socially disadvantaged because of race or ethnicity and must show it with verifiable evidence/);
  assert.match(text("mbda"), /I could not confirm which centers are open today/); assert.match(text("mbda"), /39 active centers in 2024/);
  assert.match(text("nmsdc"), /23 regional councils/); assert.match(text("nmsdc"), /does not award contracts/);
  assert.match(text("loans"), /up to \$50,000/); assert.match(text("loans"), /Lender Match/);
  assert.match(text("estimated-tax"), /\$1,000 or more/); assert.match(text("estimated-tax"), /15 April, 15 June, 15 September and 15 January 2027/); assert.match(text("estimated-tax"), /90% of this year's tax or 100% of last year's/);
  assert.match(text("free-help"), /sba\.gov\/local-assistance/); assert.match(text("free-help"), /within about two days/);
  assert.match(text("certification"), /calling your business minority-owned is not one of them/);
});

test("finding help near you points to the official finders, and repeats a ZIP code that was given", () => {
  assert.match(guide.usSmallBusinessAnswer("local-help", { question: "Find a SCORE mentor near 30303" }).text, /^For ZIP code 30303: I cannot look up addresses myself/);
  assert.match(guide.usSmallBusinessAnswer("local-help", { question: "Where is the nearest SBDC near me?" }).text, /^I cannot look up addresses myself/);
});

test("who the United States guide is for: a US time zone, or a question that names a US programme", () => {
  for (const timeZone of ["America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles", "America/Phoenix", "America/Indiana/Indianapolis", "Pacific/Honolulu"]) assert.equal(guide.isUsContext({ timeZone }), true, timeZone);
  for (const timeZone of ["Africa/Nairobi", "Africa/Lagos", "America/Sao_Paulo", "Europe/London", ""]) assert.equal(guide.isUsContext({ timeZone, text: "How do I get a loan for my cow?" }), false, timeZone);
  assert.equal(guide.isUsContext({ text: "How do I get an SBA loan?" }), true);
  assert.equal(guide.isUsContext({ text: "Do I need to file a 1099?" }), true);
});

const catalog = { tools: [], applications: [] };
function planner(respond) {
  return new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); }, ...(respond ? { respond } : {}) }, tools: { list: async () => catalog.tools }, applications: { list: () => catalog.applications } });
}
const ask = (p, text, context = {}) => p.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context });

test("through the planner, for a person in the United States: the checked guide answers, with no model call", async () => {
  const plan = await ask(planner(async () => { throw new Error("the guide must answer without the model"); }), "How do I get certified as a minority-owned business?", { timeZone: "America/New_York" });
  assert.equal(plan.application, "conversation"); assert.deepEqual(plan.steps, []);
  assert.equal(plan.knowledge, "us-small-business:certification"); assert.equal(plan.guardrail, "professional-advice");
  assert.match(plan.response, /There are several different certifications/); assert.match(plan.response, /\(checked 9 October 2026\)/);
  assert.ok(plan.sources.some(source => /sba\.gov\/certifications/.test(source.url)));
});

test("through the planner: a question that names a US programme gets the guide even when the time zone is unknown, and it also works on the model-free phone path", async () => {
  assert.match((await ask(planner(null), "How do I get an SBA loan?")).response, /SBA does not lend directly/);
  assert.match((await ask(planner(null), "What is the 8(a) program?", { deterministicOnly: true })).response, /\$850,000 or less/);
});

test("through the planner, for a person outside the United States: no US agency is named, and the general rules still apply", async () => {
  const plan = await ask(planner(null), "How do I get a loan for my cow?", { timeZone: "Africa/Accra" });
  assert.equal(plan.knowledge, undefined);
  assert.doesNotMatch(plan.response, /sba\.gov|irs\.gov|SBDC|SCORE|MBDA/);
  assert.match(plan.response, /I am not a financial advisor or a lender/); assert.match(plan.response, /your country's small business support office/);
  const tax = await ask(planner(async () => "Many traders pay a small tax."), "Do I need to pay tax on my maize sales?", { timeZone: "Africa/Accra" });
  assert.match(tax.response, /^Many traders pay a small tax\. I am not a tax advisor/); assert.match(tax.response, /your country's tax authority/); assert.doesNotMatch(tax.response, /irs\.gov/);
});

test("the page shows and speaks these answers whole, with their sources and date, instead of cutting them to one sentence (and so do the guided checklists, lessons and health check, which mark their plan longForm)", () => {
  const app = fs.readFileSync(path.join(__dirname, "..", "..", "public", "app.js"), "utf8");
  assert.match(app, /\.\.\.\(result\.plan\?\.guardrail \|\| result\.plan\?\.knowledge \|\| result\.plan\?\.longForm \? \{ longForm: true \} : \{\}\)/);
});
