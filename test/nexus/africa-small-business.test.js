"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const africa = require("../../nexus/knowledge/africa-small-business.js");
const us = require("../../nexus/knowledge/us-small-business.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// A first checked guide for owners in Kenya and Nigeria (registering, taxes, government support, government funding), read from each country's own agencies on 10 October 2026. Where an official page could not be read,
// or sources disagree or have changed, the answer says so and sends the person to the agency instead of stating a figure.
const ALL = Object.keys(africa.TOPICS);

test("the country comes from the device's time zone, the profile's country, or the agency a question names", () => {
  assert.equal(africa.africaCountry({ timeZone: "Africa/Nairobi" }), "ke"); assert.equal(africa.africaCountry({ timeZone: "Africa/Lagos" }), "ng");
  assert.equal(africa.africaCountry({ country: "Kenya" }), "ke"); assert.equal(africa.africaCountry({ country: "Nigeria" }), "ng");
  assert.equal(africa.africaCountry({ timeZone: "America/Chicago", text: "What is the KRA turnover tax rate?" }), "ke");
  assert.equal(africa.africaCountry({ timeZone: "Africa/Nairobi", text: "How do I register with CAC?" }), "ng");
  assert.equal(africa.africaCountry({ timeZone: "America/Chicago" }), null); assert.equal(africa.africaCountry({}), null);
});

test("which questions get which Kenya and Nigeria answer, and which are left alone", () => {
  const ke = "Africa/Nairobi", ng = "Africa/Lagos";
  const yes = [
    ["How do I register my business?", ke, "ke-register"], ["How do I register my business in Kenya?", ke, "ke-register"], ["What is a KRA PIN?", ke, "ke-tax"], ["What taxes does my business pay?", ke, "ke-tax"], ["Do I need to pay turnover tax?", ke, "ke-tax"],
    ["Where can I get help for my small business?", ke, "ke-support"], ["What is MSEA?", ke, "ke-support"], ["How can I get a loan for my business?", ke, "ke-funding"], ["What is the Hustler Fund?", ke, "ke-funding"],
    ["How do I register a business name?", ng, "ng-register"], ["How do I register my company with CAC?", ng, "ng-register"], ["What taxes does my business pay?", ng, "ng-tax"], ["Do I need a TIN?", ng, "ng-tax"], ["What is SMEDAN?", ng, "ng-support"], ["Where can I get funding for my business?", ng, "ng-funding"],
    ["What is the KRA turnover tax rate?", "America/Chicago", "ke-tax"]
  ];
  for (const [text, timeZone, id] of yes) assert.equal(africa.africaTopic(text, { timeZone }), id, `${text} (${timeZone})`);
  for (const [text, timeZone] of [["What is the weather in Nairobi?", ke], ["How do I plant maize?", ke], ["How do I cook ugali?", ke], ["Add a customer named Grace", ke], ["Where can I get free business help?", "America/Chicago"], ["How do I register my business?", "America/Chicago"], ["How do I register my business?", ""]]) {
    assert.equal(africa.africaTopic(text, { timeZone }), null, `${text} (${timeZone})`);
  }
  assert.equal(africa.africaTopic("How do I register my business?", { country: "Kenya" }), "ke-register");
});

test("every answer names agencies' own pages and the date, says it is general information, and never states a figure it could not confirm", () => {
  for (const id of ALL) {
    const answer = africa.africaAnswer(id);
    assert.equal(answer.topic, id); assert.ok(answer.sources.length >= 1, id);
    for (const source of answer.sources) assert.match(source.url, /^https:\/\/(?:www\.)?(?:[a-z]+\.)?(?:brs|kra|msea|hustlerfund|cac|smedan|nrs)\.(?:go\.ke|gov\.ng)\//, `${id}: ${source.url}`);
    assert.match(answer.text, /\(checked 10 October 2026\)\. This is general information, not legal, tax or financial advice, and rules, fees and programmes change, so confirm with the agency\. I cannot register, file or apply for anything for you\.$/, id);
    assert.doesNotMatch(answer.text, /\byou should (?:register|choose|pick|borrow|take)\b|\bI recommend\b/i, id);
  }
  assert.equal(africa.africaAnswer("nope"), null);
});

test("the facts that matter, as the agencies' pages gave them, and the honest gaps", () => {
  const text = id => africa.africaAnswer(id).text;
  assert.match(text("ke-register"), /three preferred names/); assert.match(text("ke-register"), /merged into one step/); assert.match(text("ke-register"), /I could not read the fee amounts/); assert.match(text("ke-register"), /msea\.ecitizen\.go\.ke/);
  assert.match(text("ke-tax"), /more than Kshs 1,000,000 and not more than Kshs 25,000,000/); assert.match(text("ke-tax"), /1\.5 percent of gross sales, effective 1 July 2023 under the Finance Act 2023/); assert.match(text("ke-tax"), /20th day of the month/); assert.match(text("ke-tax"), /Kshs 5,000,000 or more must also register for VAT/);
  assert.match(text("ke-tax"), /Finance Act 2026' notice that I have not read, so these figures may have changed/);
  assert.match(text("ke-support"), /Kariobangi Biashara Centre/); assert.match(text("ke-support"), /\+254 20 3340006/); assert.match(text("ke-support"), /I could not read how to apply/);
  assert.match(text("ke-funding"), /KES 100 to KES 50,000/); assert.match(text("ke-funding"), /8 percent a year/); assert.match(text("ke-funding"), /within 14 days/); assert.match(text("ke-funding"), /unfinished text on it and a 2025 date, so confirm the current terms/);
  assert.match(text("ng-register"), /up to 60 days/); assert.match(text("ng-register"), /at most two options/); assert.match(text("ng-register"), /one person/); assert.match(text("ng-register"), /I could not open CAC's fee schedule/);
  assert.match(text("ng-tax"), /Nigeria Revenue Service \(NRS\)/); assert.match(text("ng-tax"), /figures of 25 million, 50 million and 100 million naira appear/); assert.match(text("ng-tax"), /I will not give you a figure/);
  assert.match(text("ng-support"), /portal\.smedan\.gov\.ng\/signup/); assert.match(text("ng-support"), /info@smedan\.gov\.ng/); assert.match(text("ng-support"), /copy mistakes/);
  assert.match(text("ng-funding"), /I could not confirm any current amounts/);
  assert.match(text("ke-funding") + text("ng-funding"), /Practical advice, not an official rule/);
});

test("the four US topics that hold in any country are given to people outside the United States, with a note and the local office", () => {
  for (const id of us.UNIVERSAL_TOPICS) {
    const away = us.usSmallBusinessAnswer(id, { us: false, country: "ke" });
    assert.match(away.text, /These are United States government sources: the programmes named \(SBA, SBDC, SCORE\) are American, and laws and rules differ in your country, so also ask your local small business support office \(in Kenya, the Micro and Small Enterprises Authority, MSEA\)\./, id);
    assert.match(us.usSmallBusinessAnswer(id, { us: false, country: "ng" }).text, /\(in Nigeria, SMEDAN\)/, id);
    assert.doesNotMatch(us.usSmallBusinessAnswer(id).text, /United States government sources/, id);
  }
  assert.deepEqual([...us.UNIVERSAL_TOPICS].sort(), ["bookkeeping-accounting", "business-plan", "marketing-visibility", "startup-costs"]);
});

const catalog = { tools: [], applications: [] };
function planner() {
  return new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); }, respond: async () => { throw new Error("the guide must answer without the model"); } }, tools: { list: async () => catalog.tools }, applications: { list: () => catalog.applications } });
}
const ask = (text, timeZone, country) => planner().plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context: { timeZone, ...(country ? { country } : {}) } });

test("through the planner: Kenya and Nigeria answers with no model call; a Kenyan profile with no time zone; the US unaffected", async () => {
  const ke = await ask("How do I register my business?", "Africa/Nairobi");
  assert.equal(ke.knowledge, "africa-small-business:ke-register"); assert.deepEqual(ke.steps, []); assert.equal(ke.guardrail, "professional-advice"); assert.ok(ke.sources.every(source => /\.go\.ke\//.test(source.url)));
  assert.equal((await ask("What taxes does my business pay?", "Africa/Lagos")).knowledge, "africa-small-business:ng-tax");
  assert.equal((await ask("What is the Hustler Fund?", undefined, "Kenya")).knowledge, "africa-small-business:ke-funding");
  assert.equal((await ask("How do I register my business?", "America/Chicago")).knowledge, "us-small-business:ein-registration");
  assert.equal((await ask("Where can I get free business help?", "America/Chicago")).knowledge, "us-small-business:free-help");
});

test("through the planner: outside the United States a business plan, startup costs, marketing and bookkeeping question gets the universal answer with the note; structure and funding are left to the agencies' guides or the model", async () => {
  const plan = await ask("How do I write a business plan?", "Africa/Nairobi");
  assert.equal(plan.knowledge, "us-small-business:business-plan"); assert.match(plan.response, /\(in Kenya, the Micro and Small Enterprises Authority, MSEA\)/); assert.match(plan.response, /lean startup plan/);
  assert.equal((await ask("How much does it cost to start a business?", "Africa/Lagos")).knowledge, "us-small-business:startup-costs");
  assert.match((await ask("How do I get more customers?", "Africa/Lagos")).response, /\(in Nigeria, SMEDAN\)/);
  // a US-only topic is never given to someone outside the US
  const reached = await ask("What is an S corporation?", "Africa/Nairobi").catch(error => ({ reachedPlanningModel: /must not reach the AI planning model/.test(error.message) }));
  assert.equal(reached.knowledge, undefined); assert.equal(reached.reachedPlanningModel, true);
});

test("a question that itself names a US term gets the US answer even on a device in Nairobi, unless it also names a Kenyan agency", async () => {
  assert.equal((await ask("What type of business should I have? LLC, S corp or C corp? For profit or non profit or both?", "Africa/Nairobi")).knowledge, "us-small-business:business-structure");
  assert.equal((await ask("What is an EIN?", "Africa/Lagos")).knowledge, "us-small-business:ein-registration");
  assert.equal((await ask("What is the KRA turnover tax rate?", "Africa/Nairobi")).knowledge, "africa-small-business:ke-tax");
});
