"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const california = require("../../nexus/knowledge/california-business.js");
const topics = require("../../public/kyro-business-topics.js");
const { sourcesPageAnswer } = require("../../nexus/knowledge/sources-page.js");
const { fakeMemory } = require("./farmwork-fake.js");

// For the owner's meeting with the California Hispanic and Black chambers of commerce: a checked guide for small, minority-owned and nonprofit businesses across the whole state. Each fact below was read from an official
// page on 19 October 2026 (the sources are named in each answer); where the page did not say something, the answer does not either.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

test("a question that names California and a California office or programme picks the California topic; formation, general and non-business questions are left alone", () => {
  const picks = {
    "How do I get certified as a minority-owned business in California?": "ca-certification",
    "What is the California small business certification?": "ca-certification",
    "What is a DBE certification in California?": "ca-dbe",
    "How do I become a vendor for the State of California?": "ca-state-vendor",
    "How do I get a seller's permit in California?": "ca-seller-permit",
    "What is LA28 and how can my business get a contract?": "ca-la28",
    "How do I register with RAMP LA?": "ca-la28",
    "Where can I find grants for Latino-owned businesses in California?": "ca-grants",
    "Where can I get free help starting a business in California?": "ca-free-help",
    "What do I do after forming a California nonprofit to be tax exempt?": "ca-nonprofit-state",
    "Do I have to register my California charity with the Attorney General?": "ca-nonprofit-state"
  };
  for (const [say, id] of Object.entries(picks)) assert.equal(topics.californiaTopic(say), id, say);
  for (const say of ["How do I register a nonprofit in California?", "How do I register an LLC in California?", "What is a DBE certification?", "How do I get a seller's permit?", "Where can I find college grants in California?", "Log a tax payment of $300 in California", "How do I grow a garden in California?", "How can a chamber of commerce help its members?"]) assert.equal(topics.californiaTopic(say), null, say);
});

test("every California answer has https sources, the date they were checked, and the plain closing", () => {
  assert.equal(california.CHECKED_ON, "19 October 2026");
  for (const id of Object.keys(california.TOPICS)) {
    const answer = california.californiaAnswer(id, { question: "x" });
    assert.ok(answer.sources.length >= 1, id);
    assert.ok(answer.sources.every(source => /^https:\/\//.test(source.url) && source.name), id);
    assert.match(answer.text, /Sources: .+ \(checked 19 October 2026\)\. This is general information, not legal, tax or financial advice, and rules change, so confirm on the official site\. I cannot file or apply for anything for you\.$/, id);
  }
  assert.equal(california.californiaAnswer("nope"), null);
});

test("the facts are the ones read from the official pages", () => {
  const text = id => california.californiaAnswer(id, { question: "x" }).text;
  const cert = text("ca-certification");
  for (const fact of ["100 or fewer employees", "$19 million or less", "$6 million or less", "25 or fewer employees", "Certification@dgs.ca.gov", "(916) 375-4940", "at least 51%", "$2,047,000", "$31,840,000", "3 October 2025", "caltrans.dbesystem.com", "(916) 324-1700"]) assert.ok(cert.includes(fact), fact);
  assert.equal(text("ca-dbe"), text("ca-certification") && california.californiaAnswer("ca-dbe", { question: "x" }).text);
  const seller = text("ca-seller-permit");
  for (const fact of ["no charge", "up to 90 days", "60 days before the purchase", "1-800-400-7115", "7:30 a.m. to 5:00 p.m. Pacific"]) assert.ok(seller.includes(fact), fact);
  const nonprofit = text("ca-nonprofit-state");
  for (const fact of ["does not make you tax-exempt", "Form 3500A", "within 30 days of first receiving charitable assets", "Form CT-1", "$50 fee", "1 January 2021", "cannot accept contributions"]) assert.ok(nonprofit.includes(fact), fact);
  const help = text("ca-free-help");
  for (const fact of ["no-cost one-on-one consulting", "more than 30 languages", "one to ten miles"]) assert.ok(help.includes(fact), fact);
  assert.match(text("ca-grants"), /California Dream Fund[^.]*is closed: its last application deadline was 13 February 2023/);
  const la28 = text("ca-la28");
  for (const fact of ["RAMP LA", "two steps", "75%", "25%", "10 or fewer employees", "la28.supplierone.co", "opportunities are not posted there", "16 November 2026", "14 November", "sourcing@la28.org"]) assert.ok(la28.includes(fact), fact);
  assert.match(la28, /The application is yours to make/);
});

test("the certification answer also carries the federal and private certifications, with their sources; the grants answer the federal grants", () => {
  const cert = california.californiaAnswer("ca-certification", { question: "x" });
  assert.match(cert.text, /Beyond California: There are several different certifications/);
  assert.ok(cert.sources.some(source => /NMSDC/.test(source.name)));
  assert.ok(cert.sources.some(source => /California DGS/.test(source.name)));
  assert.equal(new Set(cert.sources.map(source => source.url)).size, cert.sources.length, "each page once");
  const grants = california.californiaAnswer("ca-grants", { question: "x" });
  assert.match(grants.text, /Beyond California: /);
  assert.ok(grants.sources.some(source => /Grants\.gov/.test(source.name)));
});

test("through the planner, with no AI model: California questions get the California guide; formation and general questions keep theirs", async () => {
  const model = { plan: async () => { throw new Error("the AI model must not be asked"); }, respond: async () => null };
  const p = new OpenEndedPlanner({ model, tools: { list: async () => [] }, applications: { list: () => [] }, memory: Object.assign(fakeMemory(), { search: async () => [] }) });
  const ask = text => p.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "America/Los_Angeles", deterministicOnly: true } });
  const expected = {
    "How do I get certified as a minority-owned business in California?": "california-business:ca-certification",
    "How do I become a vendor for the State of California?": "california-business:ca-state-vendor",
    "How do I get a seller's permit in California?": "california-business:ca-seller-permit",
    "What is LA28 and how can my business get a contract?": "california-business:ca-la28",
    "Where can I get free help starting a business in California?": "california-business:ca-free-help",
    "What do I do after forming a California nonprofit to be tax exempt?": "california-business:ca-nonprofit-state",
    "How do I register an LLC in California?": "state-entities:state-entity:llc:CA",
    "How do I register a nonprofit in California?": "state-entities:state-entity:nonprofit:CA",
    "What is a DBE certification?": "us-small-business:certification"
  };
  for (const [say, knowledge] of Object.entries(expected)) {
    const plan = await ask(say);
    assert.equal(plan.knowledge, knowledge, say);
    assert.ok(plan.sources.length >= 1, say);
    assert.deepEqual([plan.steps.length, plan.application], [0, "conversation"], say);
  }
});

test("the source page lists the California pages, and the page treats a California question as the guide's, on any device", () => {
  const page = sourcesPageAnswer("Show me your sources for small business");
  const californiaGroup = page.sources.filter(source => /^California:/.test(source.group));
  assert.equal(californiaGroup.length, Object.keys(california.SOURCES).length);
  assert.ok(californiaGroup.some(source => /rampla\.org/.test(source.url)));
  assert.match(app, /typeof topics\.californiaTopic === "function" && topics\.californiaTopic\(text\)\) return true;/);
});
