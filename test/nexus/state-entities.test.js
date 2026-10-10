"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const entities = require("../../nexus/knowledge/state-entities.js");
const { stateEntityIntent, stateEntityAnswer, stateFromText, stripWakeWord, states } = entities;
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const us = require("../../nexus/knowledge/us-small-business.js");

const CODES = "AL AK AZ AR CA CO CT DE DC FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY".split(" ");
const OFFICIAL_HOST = /^https:\/\/[^/\s]+\.(?:gov|us|org|edu)(?:[:/]|$)|^https:\/\/(?:www\.)?(?:azcc|sosmt|sos\.mt|sos\.state|ecorp|cdn)[^/\s]*\.|^https:\/\/[^/\s]*\.(?:gov|us)\./i;

// Asked by the owner on 10 October 2026: "Hey Kyro, show me how to register my business as an LLC for California" -- and the same for nonprofits and for-profit small and minority-owned businesses, in the state they live in.
test("the data holds all 50 states and DC, each with a filing office and checked date", () => {
  assert.deepEqual(states.map(record => record.code).sort(), [...CODES].sort());
  for (const record of states) {
    assert.ok(record.name && record.agency, record.code);
    assert.match(record.agencyUrl || "", /^https:\/\//, `${record.code} agency url`);
    assert.match(record.checkedOn, /^2026-10-\d\d$/, `${record.code} checkedOn`);
    for (const kind of ["llc", "corporation", "nonprofit"]) {
      const entity = record[kind];
      assert.ok(entity, `${record.code} ${kind}`);
      assert.ok(entity.filingFee === null || (typeof entity.filingFee === "number" && entity.filingFee >= 0 && entity.filingFee <= 2000), `${record.code} ${kind} fee ${entity.filingFee}`);
      if (entity.filingFee !== null) assert.match(entity.source || "", /^https:\/\/[^\s]+$/, `${record.code} ${kind}: a number needs a source page`);
      if (entity.source) assert.doesNotMatch(entity.source, /legalzoom|zenbusiness|llcuniversity|incfile|nolo|bizee|northwest/i, `${record.code} ${kind}: official pages only`);
    }
  }
});

test("a state is found by name (longest first), by capital-letter code after a place word, and never from ordinary small words", () => {
  assert.equal(stateFromText("how do I form an LLC in California?"), "CA");
  assert.equal(stateFromText("register a business in west virginia"), "WV");
  assert.equal(stateFromText("register a business in Virginia"), "VA");
  assert.equal(stateFromText("nonprofit in Washington, D.C."), "DC");
  assert.equal(stateFromText("nonprofit in Washington state"), "WA");
  assert.equal(stateFromText("an LLC in New York"), "NY");
  assert.equal(stateFromText("an LLC in new mexico"), "NM");
  assert.equal(stateFromText("LLC fees in TX"), "TX");
  assert.equal(stateFromText("I live in Austin, TX"), "TX");
  for (const text of ["do I need an LLC or a corporation", "what is in it for me", "how do I get my business to hi tech", "where is my business", "how much is it to be in OKAY shape"]) assert.equal(stateFromText(text), null, text);
});

test("the wake word is not part of the question", () => {
  for (const [input, rest] of [["Hey Kyro, show me how to register", "show me how to register"], ["Kyro, how do I form an LLC", "how do I form an LLC"], ["OK Kyro how do I", "how do I"], ["hi kyro: tell me", "tell me"], ["Hey Nexus how much", "how much"]]) assert.equal(stripWakeWord(input), rest);
  assert.equal(stripWakeWord("how do I form an LLC"), "how do I form an LLC");
  assert.equal(stripWakeWord("Kyro"), "Kyro", "the name alone is left as it is");
});

test("which sentences are about setting up an entity in a state, and which are left to other flows", () => {
  const yes = [
    ["Hey Kyro, show me how to register my business as an LLC for California", { kind: "llc", state: "CA", focus: "steps" }],
    ["how do I register an LLC in Ohio?", { kind: "llc", state: "OH", focus: "steps" }],
    ["How much does it cost to form an LLC in Texas", { kind: "llc", state: "TX", focus: "fees" }],
    ["what are the fees to start a nonprofit in Georgia", { kind: "nonprofit", state: "GA", focus: "fees" }],
    ["how do I start a 501(c)(3) in Michigan", { kind: "nonprofit", state: "MI", focus: "steps" }],
    ["I want to incorporate my company in Florida", { kind: "corporation", state: "FL", focus: "steps" }],
    ["what does it cost to incorporate in Delaware?", { kind: "corporation", state: "DE", focus: "fees" }],
    ["I want to set up my business in New York", { kind: "business", state: "NY", focus: "steps" }],
    ["how do I start a business in Ohio", { kind: "business", state: "OH", focus: "steps" }],
    ["how do I register my business", { kind: "business", state: null, focus: "steps" }],
    ["how do I form an LLC", { kind: "llc", state: null, focus: "steps" }],
    ["Kyro, what do I need to start a nonprofit", { kind: "nonprofit", state: null, focus: "steps" }]
  ];
  for (const [text, expected] of yes) assert.deepEqual(stateEntityIntent(text), expected, text);
  const no = [
    "how do I start a business", "start a business workspace", "set up my nonprofit workspace in the app", "what grants are we tracking", "add milk to my shopping list",
    "log a payment of $300 for my LLC", "draft an operating agreement for my LLC", "send an email about my corporation", "what is the weather in Ohio", "write my nonprofit mission statement",
    "show me my reminders", "tell me a joke", ""
  ];
  for (const text of no) assert.equal(stateEntityIntent(text), null, text);
});

test("every state answers every kind: real figures, no placeholders, the filing office and its page, the date checked and the not-legal-advice line", () => {
  for (const record of states) {
    for (const kind of ["llc", "corporation", "nonprofit", "business"]) {
      for (const focus of ["steps", "fees"]) {
        const answer = stateEntityAnswer({ kind, state: record.code, focus });
        const where = `${record.code} ${kind} ${focus}`;
        assert.ok(answer && answer.text, where);
        assert.doesNotMatch(answer.text, /undefined|\bnull\b|NaN|\[object|\$null|\$undefined/, where);
        assert.ok(answer.text.includes(record.name), where);
        assert.ok(answer.text.includes(record.agencyUrl), `${where}: names the filing office page`);
        assert.match(answer.text, /state pages checked 10 October 2026/, where);
        assert.match(answer.text, /not legal, tax or financial advice/, where);
        assert.match(answer.text, /cannot file or apply for anything for you/, where);
        assert.ok(answer.sources.length >= 3 && answer.sources.every(source => /^https:\/\//.test(source.url) && source.name), where);
        assert.ok(answer.text.length < 4600, `${where}: ${answer.text.length} characters is too long to say aloud`);
        const entities = kind === "business" ? ["llc", "corporation", "nonprofit"] : [kind];
        for (const k of entities) {
          const fee = record[k].filingFee;
          if (fee === null) assert.match(answer.text, /could not confirm the filing fee/, `${where}: an unconfirmed fee is said plainly`);
          else assert.ok(answer.text.includes(`$${fee.toLocaleString("en-US")}`), `${where}: the ${k} fee $${fee}`);
        }
      }
    }
  }
});

test("California LLC: the owner's own question gets the state's real figures", () => {
  const answer = stateEntityAnswer(stateEntityIntent("Hey Kyro, show me how to register my business as an LLC for California"));
  assert.match(answer.text, /California Secretary of State/);
  assert.match(answer.text, /Articles of Organization \(Form LLC-1\), filing fee \$70/);
  assert.match(answer.text, /\$800/, "the Franchise Tax Board minimum tax");
  assert.match(answer.text, /operating agreement/);
  assert.match(answer.text, /irs\.gov\/ein/);
  assert.doesNotMatch(answer.text, /California llc/);
  assert.match(answer.text, /registered agent/i);
});

test("a nonprofit gets the IRS exemption steps with the IRS's own user fees, the state fundraising registration and the yearly return", () => {
  const answer = stateEntityAnswer(stateEntityIntent("how do I start a nonprofit in Ohio"));
  assert.match(answer.text, /501\(c\)\(3\)/);
  assert.match(answer.text, /Form 1023-EZ costs \$275/);
  assert.match(answer.text, /Form 1023 costs \$600/);
  assert.match(answer.text, /Pay\.gov/);
  assert.match(answer.text, /donations/);
  assert.match(answer.text, /Form 990/);
  assert.doesNotMatch(answer.text, /IRS: IRS:/);
});

test("with no state named, the general steps are given and the person is asked which state; the answer promises nothing about fees", () => {
  const answer = stateEntityAnswer(stateEntityIntent("how do I register an LLC"));
  assert.match(answer.text, /Tell me which state/);
  assert.match(answer.text, /registered agent/);
  assert.match(answer.text, /under \$300/);
  assert.doesNotMatch(answer.text, /filing fee \$/);
  assert.equal(answer.topic, "state-entity:llc:any");
});

test("a fee question is answered with the fees first and offers the steps; an unconfirmed fee is never replaced by a guess", () => {
  const answer = stateEntityAnswer(stateEntityIntent("what does it cost to form an LLC in Illinois"));
  assert.match(answer.text, /What it costs to set up an LLC in Illinois/);
  const il = states.find(record => record.code === "IL");
  if (il.llc.filingFee === null) assert.match(answer.text, /could not confirm the filing fee/);
  assert.match(answer.text, /how do I set up an LLC in Illinois/);
});

// ---- through the planner -----------------------------------------------------------------------------------------------------------------------------------------------------
function planner() {
  return new OpenEndedPlanner({ model: { plan: async () => { throw new Error("REACHED THE AI MODEL"); }, respond: async () => { throw new Error("REACHED THE AI MODEL"); } }, tools: { list: async () => [] }, applications: { list: () => [] } });
}
async function plan(text, { timeZone = "America/Los_Angeles", ...rest } = {}) {
  return planner().plan({ command: { text, tenantId: "t", actorId: "u", locale: "en", channel: "voice", ...rest }, context: { timeZone, deterministicOnly: true } });
}

test("through the planner, the owner's exact words get the California LLC answer, not the AI model and not a workspace list", async () => {
  for (const text of ["Hey Kyro, show me how to register my business as an LLC for California", "show me how to register my business as an LLC for California", "How do I register an LLC in California?", "Kyro, how much does it cost to form an LLC in California?"]) {
    const result = await plan(text);
    assert.match(result.knowledge, /^state-entities:state-entity:llc:CA$/, text);
    assert.match(result.response, /Articles of Organization \(Form LLC-1\)/, text);
    assert.deepEqual(result.steps, [], text);
    assert.equal(result.guardrail, "professional-advice", text);
  }
});

test("through the planner: nonprofits, corporations and a generic business, each in the person's state", async () => {
  assert.match((await plan("how do I start a nonprofit in Texas?")).knowledge, /state-entity:nonprofit:TX$/);
  assert.match((await plan("what does it cost to incorporate in Delaware?")).knowledge, /state-entity:corporation:DE$/);
  assert.match((await plan("I want to set up my business in Ohio")).knowledge, /state-entity:business:OH$/);
  assert.match((await plan("how do I register an LLC")).knowledge, /state-entity:llc:any$/);
});

test("a device outside the United States is not given a US state answer unless the person names a state", async () => {
  const kenya = await plan("how do I register my business", { timeZone: "Africa/Nairobi" });
  assert.doesNotMatch(String(kenya.knowledge || ""), /state-entities/, "left to the Kenya guide");
  const named = await plan("how do I register an LLC in Ohio", { timeZone: "Africa/Nairobi" });
  assert.match(named.knowledge, /state-entity:llc:OH$/);
  const agency = await plan("how do I register my business with KRA", { timeZone: "America/New_York" });
  assert.doesNotMatch(String(agency.knowledge || ""), /state-entities/, "a Kenyan agency named: left to the Kenya guide");
});

test("the other guides still win where they should, and workspace talk is not taken", async () => {
  assert.doesNotMatch(String((await plan("what AI tools can help me write my operating agreement for my LLC")).knowledge || ""), /state-entities/);
  assert.doesNotMatch(String((await plan("how do I protect my LLC from phishing")).knowledge || ""), /state-entities/);
  assert.doesNotMatch(String((await plan("what grants are we tracking")).knowledge || ""), /state-entities/);
  assert.match(us.usSmallBusinessAnswer("llc-vs-corp").text, /LLC/, "the general LLC guide is unchanged");
});

test("the wake word and 'show me how to' reach the other business guides too", async () => {
  for (const text of ["Hey Kyro, how do I write a business plan?", "Kyro, show me how to write a business plan for my business", "Hey Kyro, what is an SBA loan?"]) {
    const result = await plan(text);
    assert.match(String(result.knowledge || ""), /us-small-business:/, text);
  }
});
