"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "../../scripts/provider-engines.js"), "utf8");
const start = source.indexOf("// jobs.search / marketplace.search used to return");
const end = source.indexOf("const server = http.createServer(");
assert.ok(start > 0 && end > start, "liveKnowledgeEvidence and its helpers must stay extractable");

function load(fetchFn, env = {}) {
  const sandbox = { fetch: fetchFn, process: { env: { TAVILY_API_KEY: "test-key", ...env } }, URL, Object, String, Array, Set, Error, JSON };
  vm.createContext(sandbox);
  vm.runInContext(`${source.slice(start, end)}\nthis.liveKnowledgeEvidence = liveKnowledgeEvidence; this.liveListingsEvidence = liveListingsEvidence;`, sandbox);
  return Object.assign(sandbox.liveKnowledgeEvidence, { listings: sandbox.liveListingsEvidence });
}

const DOMAINS = ["fao.org", "cgiar.org", "cimmyt.org", "extension.org", "edu"];
const input = { query: "Assess yellow leaves on my maize crop and show sources.", domainFilterRequired: true, includeDomains: DOMAINS };
const reply = (answer, urls) => ({ ok: true, status: 200, json: async () => ({ answer, results: urls.map(url => ({ url, title: url })) }) });

test("when Tavily ignores the multi-domain filter, a single approved domain is tried and its sources are used", async () => {
  // Confirmed live 2026-09-19: the combined filter returned open-web
  // (facebook.com) results for conversational phrasing, every one filtered out,
  // so agriculture failed with "Live knowledge returned no answer with sources."
  const calls = [];
  const run = load(async (_url, options) => {
    const body = JSON.parse(options.body); calls.push(body.include_domains);
    if (body.include_domains.length > 1) return reply("open web answer", ["https://www.facebook.com/x"]);
    return reply("FAO answer", ["https://www.fao.org/maize"]);
  });
  const result = await run(input, {}, "receipt-1");
  assert.deepEqual(JSON.parse(JSON.stringify(calls)), [DOMAINS, ["fao.org"]]);
  assert.equal(result.answer, "FAO answer");
  assert.deepEqual(result.sources.map(item => item.url), ["https://www.fao.org/maize"]);
});

test("the bare 'edu' entry is never sent as a single-domain filter", async () => {
  const calls = [];
  const run = load(async (_url, options) => { calls.push(JSON.parse(options.body).include_domains); return reply("x", ["https://www.facebook.com/x"]); });
  await assert.rejects(() => run(input, {}, "receipt-1"), /no answer with sources/);
  assert.deepEqual(JSON.parse(JSON.stringify(calls.slice(1, 5))), [["fao.org"], ["cgiar.org"], ["cimmyt.org"], ["extension.org"]]);
  assert.equal(calls.length, 6, "after the single domains, one last try with the plainer question under all approved domains");
  assert.deepEqual(JSON.parse(JSON.stringify(calls[5])), DOMAINS);
});

test("when nothing comes back, the question is retried once in plainer keyword form, under the same approved domains", async () => {
  const asked = [];
  const run = load(async (_url, options) => {
    const body = JSON.parse(options.body); asked.push(body.query);
    return body.query === "Assess yellow leaves on my maize crop" ? reply("Plain answer", ["https://www.fao.org/maize"]) : reply("", []);
  });
  const result = await run(input, {}, "receipt-1");
  assert.equal(asked.at(-1), "Assess yellow leaves on my maize crop");
  assert.equal(asked[0], "Assess yellow leaves on my maize crop and show sources.", "the person's own words are always tried first");
  assert.equal(result.answer, "Plain answer"); assert.deepEqual(result.sources.map(item => item.url), ["https://www.fao.org/maize"]);
});

test("a question with nothing to simplify is not retried, and a plainer query still cannot accept unapproved sources", async () => {
  let calls = 0;
  const run = load(async () => { calls += 1; return reply("", []); });
  await assert.rejects(() => run({ query: "maize spacing", includeDomains: [] }, {}, "receipt-1"), /no answer with sources/);
  assert.equal(calls, 1, "no domains and nothing to simplify: one call");
  const strict = load(async (_url, options) => (JSON.parse(options.body).query.endsWith("sources.") ? reply("", []) : reply("answer", ["https://www.facebook.com/x"])));
  await assert.rejects(() => strict(input, {}, "receipt-1"), /no answer with sources/);
});

test("only approved-domain sources are ever accepted, even after the fallback", async () => {
  const run = load(async () => reply("answer", ["https://www.facebook.com/x", "https://cgspace.cgiar.org/y"]));
  const result = await run(input, {}, "receipt-1");
  assert.deepEqual(result.sources.map(item => item.url), ["https://cgspace.cgiar.org/y"]);
});

test("a first-try success makes exactly one provider call", async () => {
  let calls = 0;
  const run = load(async () => { calls += 1; return reply("answer", ["https://www.fao.org/maize"]); });
  await run(input, {}, "receipt-1");
  assert.equal(calls, 1);
});

test("jobs.search returns the real search results with their source URLs, not an invented placeholder", async () => {
  let sent;
  const run = load(async (_url, options) => { sent = JSON.parse(options.body); return reply("", ["https://jobs.example.org/agronomist", "http://insecure.example/x", "https://farm.example.com/roles"]); });
  const result = await run.listings("jobs", { query: "Find agriculture jobs in Nairobi" }, "receipt-1");
  assert.match(sent.query, /Find agriculture jobs in Nairobi .*job/);
  assert.deepEqual(result.sources.map(item => item.url), ["https://jobs.example.org/agronomist", "https://farm.example.com/roles"], "only https results are kept");
  assert.equal(result.listings.length, 2);
  assert.ok(result.listings.every(item => typeof item === "string"), "listings are strings so the generic renderer shows them");
  assert.equal(result.selectedListing, result.listings[0]);
  assert.doesNotMatch(JSON.stringify(result), /Agriculture opportunity|Verified maize listing/);
});

test("marketplace.search uses the marketplace hint and fails honestly with no results", async () => {
  let sent;
  const run = load(async (_url, options) => { sent = JSON.parse(options.body); return reply("", []); });
  await assert.rejects(() => run.listings("marketplace", { query: "Find maize listings" }, "r"), /no results with sources/);
  assert.match(sent.query, /for sale/);
});

test("listings search refuses to invent results when no search provider is configured", async () => {
  const run = load(async () => { throw new Error("must not be called"); }, { TAVILY_API_KEY: "" });
  await assert.rejects(() => run.listings("jobs", { query: "x" }, "r"), /No live search provider/);
});
