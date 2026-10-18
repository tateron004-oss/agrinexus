"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { sourcesPageRequest, sourcesPageAnswer } = require("../../nexus/knowledge/sources-page.js");
const business = require("../../nexus/knowledge/us-small-business.js");
const Screen = require("../../public/kyro-result-screen.js");
const { fakeMemory } = require("./farmwork-fake.js");

// Asked by the owner: "there should be a source page for all of the small business, minority-owned business, start-ups and nonprofits, so they can see where the information is sourced and look further if they need to."
// Every checked guide already names its official pages and the date it was read; they are now buttons on the answer, and one source page lists them all.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

test("the sources are asked for in the words an owner would use, and not mistaken for a question about money", () => {
  for (const say of ["Show me your sources for small business", "What are your sources for nonprofits?", "show me your sources for startups, nonprofits and minority owned business", "Where does your business information come from?", "Open the source page", "Show me your sources", "List the minority-owned business sources", "Show me your sources for veterans"]) assert.equal(sourcesPageRequest(say), true, say);
  for (const say of ["What are the best sources of funding for my startup", "Sources of funding for a nonprofit", "What are the sources of the Nile", "Show me the sources for my report", "where did you get that", "How do I source products for my shop", "How do I get an SBA microloan?"]) assert.equal(sourcesPageRequest(say), false, say);
});

test("the source page holds every official page of the business guides, from the guides themselves, with their dates and groups", () => {
  const page = sourcesPageAnswer("Show me your sources for small business");
  const urls = page.sources.map(source => source.url);
  assert.equal(new Set(urls).size, urls.length, "each page once");
  assert.ok(urls.every(url => /^https:\/\//.test(url)), "official web addresses only");
  for (const source of Object.values(business.SOURCES)) assert.ok(urls.includes(source.url), `${source.name} is on the page`);
  assert.ok(page.sources.length > 60);
  const groups = [...new Set(page.sources.map(source => source.group))];
  assert.ok(groups.some(group => /minority-owned business, start-ups and nonprofits/.test(group)), groups.join(" | "));
  assert.ok(groups.some(group => /Kenya and Nigeria/.test(group)));
  assert.match(page.text, /checked on 9 October 2026/);
  assert.match(page.text, /not legal, tax or financial advice/);
  assert.equal(page.sources.some(source => /veterans/i.test(source.group)), false, "the community guides are added when asked for");
  const withCommunity = sourcesPageAnswer("Show me your sources for veterans");
  assert.ok(withCommunity.sources.some(source => /veterans/i.test(source.group)));
  assert.ok(withCommunity.sources.length > page.sources.length);
});

test("through the planner, with no AI model: the source page answer carries the sources, and a question about funding is not taken", async () => {
  const model = { plan: async () => { throw new Error("the AI model must not be asked"); } };
  const p = new OpenEndedPlanner({ model, tools: { list: async () => [] }, applications: { list: () => [] }, memory: Object.assign(fakeMemory(), { search: async () => [] }) });
  const ask = text => p.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "America/Los_Angeles", deterministicOnly: true } });
  const plan = await ask("Show me your sources for small business");
  assert.equal(plan.knowledge, "sources-page");
  assert.ok(plan.sources.length > 60);
  assert.deepEqual([plan.steps.length, plan.application], [0, "conversation"]);
  const funding = await ask("What are the best sources of funding for my startup?");
  assert.notEqual(funding.knowledge, "sources-page");
});

test("a guide's answer shows its sources as buttons (six at most), and the source page shows them all, under their groups", () => {
  const guide = business.usSmallBusinessAnswer("loans", { question: "How do I get an SBA microloan?" });
  const answer = Screen.buildModel({ ok: true, status: "completed", response: guide.text, guideSources: guide.sources }, { lang: "en" });
  assert.equal(answer.links.length, guide.sources.length);
  assert.deepEqual(answer.links.map(link => link.url), guide.sources.map(source => source.url));
  assert.equal(answer.links[0].label, "SBA loans");
  const page = sourcesPageAnswer("sources");
  const capped = Screen.buildModel({ ok: true, status: "completed", response: page.text, guideSources: page.sources }, { lang: "en" });
  assert.equal(capped.links.length, 6);
  const all = Screen.buildModel({ ok: true, status: "completed", response: page.text, guideSources: page.sources, allSources: true }, { lang: "en" });
  assert.equal(all.links.length, page.sources.length);
  assert.ok(all.links.every(link => link.group));
  const longName = Screen.sourceLinks({ guideSources: [{ name: "U.S. GAO report GAO-26-107718 on MBDA Business Centers (27 March 2026)", url: "https://www.gao.gov/products/gao-26-107718" }] })[0];
  assert.equal(longName.label, "gao.gov");
  assert.match(longName.title, /^U\.S\. GAO report/);
});

test("the page hands the guide's sources to the answer screen", () => {
  assert.match(app, /if \(Array\.isArray\(result\.plan\?\.sources\) && result\.plan\.sources\.length\) \{ answer\.guideSources = result\.plan\.sources; answer\.allSources = result\.plan\.knowledge === "sources-page"; \}/);
});
