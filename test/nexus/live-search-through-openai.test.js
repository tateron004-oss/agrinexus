"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// With no Tavily key there was no internet search at all: a price question got "no live price source is set up" even though the OpenAI key (which can search the web
// and cite the pages it used) was already there. Search now goes through that key, returns the pages as sources, and is never presented as sourced when it cited nothing.

const source = fs.readFileSync(path.join(__dirname, "../../scripts/provider-engines.js"), "utf8");
const start = source.indexOf("// jobs.search / marketplace.search used to return");
const end = source.indexOf("const server = http.createServer(");
assert.ok(start > 0 && end > start);

function load(fetchFn, env) {
  const sandbox = { fetch: fetchFn, process: { env }, URL, Object, String, Array, Set, Error, JSON, RegExp, Boolean };
  vm.createContext(sandbox);
  vm.runInContext(`${source.slice(start, end)}\nthis.knowledge = liveKnowledgeEvidence; this.listings = liveListingsEvidence;`, sandbox);
  return sandbox;
}
const answerWith = (text, annotations) => async () => ({ ok: true, status: 200, json: async () => ({ output: [{ type: "web_search_call" }, { type: "message", content: [{ type: "output_text", text, annotations }] }] }) });
const cite = (url, title) => ({ type: "url_citation", url, title });
const KEY = { OPENAI_API_KEY: "sk-test" };

test("a price question is answered from a web search, with the pages as sources and no links read out in the answer", async () => {
  let sent;
  const { knowledge } = load(async (url, options) => { sent = { url, body: JSON.parse(options.body) }; return answerWith("About 4,000 to 4,800 shillings per 90 kg bag in Kenya. ([wrsc.go.ke](https://wrsc.go.ke/a?utm_source=openai))", [cite("https://wrsc.go.ke/a?utm_source=openai", "Weekly market analysis"), cite("https://wrsc.go.ke/a", "dup")])(); }, KEY);
  const result = await knowledge({ query: "What is the price of maize in Kisumu today?" }, {}, "r1");
  assert.equal(result.answer, "About 4,000 to 4,800 shillings per 90 kg bag in Kenya.");
  assert.equal(result.provider, "openai-web-search");
  assert.equal(result.unsourced, undefined);
  assert.equal(JSON.stringify(result.sources), JSON.stringify([{ title: "Weekly market analysis", url: "https://wrsc.go.ke/a" }]), "tracking parameter removed, duplicate dropped");
  assert.equal(result.content, result.answer);
  assert.equal(sent.url, "https://api.openai.com/v1/responses");
  assert.deepEqual(sent.body.tools, [{ type: "web_search" }]);
  assert.equal(sent.body.reasoning.effort, "low", "a quick answer for a spoken conversation");
});

test("a search that cites nothing is not called sourced: a price is not given, other answers say no source was checked", async () => {
  const { knowledge } = load(async (url, options) => String(options.body).includes("web_search") ? answerWith("Maize is 4500", [])() : { ok: true, status: 200, json: async () => ({ output_text: "Rotate crops." }) }, KEY);
  const price = await knowledge({ query: "What is the price of maize in Kisumu today?" }, {}, "r1");
  assert.match(price.answer, /^I could not find a checked price for that just now\./);
  assert.doesNotMatch(price.answer, /4500/);
  assert.equal(price.unsourced, true);
  const other = await knowledge({ query: "Why should I rotate crops?" }, {}, "r1");
  assert.match(other.answer, /^I could not check any sources/);
  assert.equal(other.unsourced, true);
});

test("when the search fails the answer is still honest, not an error", async () => {
  const { knowledge } = load(async () => ({ ok: false, status: 500, json: async () => ({}) }), KEY);
  const price = await knowledge({ query: "How much is a bag of fertilizer?" }, {}, "r1");
  assert.equal(price.unsourced, true);
  assert.deepEqual(JSON.parse(JSON.stringify(price.sources)), []);
});

test("it can be switched off, and a question restricted to approved domains never goes to the open web", async () => {
  let called = 0;
  const fetchFn = async () => { called += 1; return answerWith("x", [cite("https://a.org/", "A")])(); };
  const off = load(fetchFn, { ...KEY, OPENAI_WEB_SEARCH_ENABLED: "false" });
  const price = await off.knowledge({ query: "What is the price of maize?" }, {}, "r1");
  assert.match(price.answer, /^I can't look up today's prices because no live price source is set up/);
  assert.equal(called, 0);
  const on = load(fetchFn, KEY);
  await assert.rejects(() => on.knowledge({ query: "Why are my maize leaves yellow?", domainFilterRequired: true, includeDomains: ["fao.org"] }, {}, "r1"), /./);
  assert.equal(called, 0, "no request of any kind goes out for it");
});

test("a Tavily key still goes first", async () => {
  const urls = [];
  const { knowledge } = load(async url => { urls.push(url); return { ok: true, status: 200, json: async () => ({ answer: "FAO says plant at the onset of rains.", results: [{ url: "https://www.fao.org/maize", title: "FAO" }] }) }; }, { ...KEY, TAVILY_API_KEY: "tv" });
  const result = await knowledge({ query: "When to plant maize?" }, {}, "r1");
  assert.equal(result.provider, "tavily");
  assert.deepEqual(urls, ["https://api.tavily.com/search"]);
});

test("jobs and marketplace searches work through the same search, and fail honestly with no citations or no key", async () => {
  const { listings } = load(answerWith("Two openings found.", [cite("https://jobs.example.org/1", "Farm manager"), cite("http://insecure.example.org/2", "No"), cite("https://jobs.example.org/3", "Agronomist")]), KEY);
  const found = await listings("jobs", { query: "farm jobs in Nakuru" }, "r1");
  assert.equal(found.provider, "openai-web-search");
  assert.equal(found.count, 2, "only https pages count");
  assert.equal(found.listings[0], "Farm manager - https://jobs.example.org/1");
  assert.equal(found.summary, "Two openings found.");
  const none = load(answerWith("Nothing.", []), KEY);
  await assert.rejects(() => none.listings("jobs", { query: "farm jobs" }, "r1"), error => error.code === "listings_outcome_unverified");
  const noKey = load(answerWith("x", []), {});
  await assert.rejects(() => noKey.listings("marketplace", { query: "maize for sale" }, "r1"), error => error.code === "listings_provider_unavailable");
});
