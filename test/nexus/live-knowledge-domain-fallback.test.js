"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "../../scripts/provider-engines.js"), "utf8");
const start = source.indexOf("async function liveKnowledgeEvidence(");
const end = source.indexOf("const server = http.createServer(");
assert.ok(start > 0 && end > start, "liveKnowledgeEvidence and its helpers must stay extractable");

function load(fetchFn) {
  const sandbox = { fetch: fetchFn, process: { env: { TAVILY_API_KEY: "test-key" } }, URL, Object, String, Array, Set, Error, JSON };
  vm.createContext(sandbox);
  vm.runInContext(`${source.slice(start, end)}\nthis.liveKnowledgeEvidence = liveKnowledgeEvidence;`, sandbox);
  return sandbox.liveKnowledgeEvidence;
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
  assert.deepEqual(JSON.parse(JSON.stringify(calls.slice(1))), [["fao.org"], ["cgiar.org"], ["cimmyt.org"], ["extension.org"]]);
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
