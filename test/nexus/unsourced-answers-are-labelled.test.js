"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// With no live search provider set up, Kyro used to answer a market price or any live-knowledge question from the model's memory and hand it back as an
// ordinary answer with no sign that nothing was checked. It now says so, and a question that needs a current price is not answered from memory at all.

const source = fs.readFileSync(path.join(__dirname, "../../scripts/provider-engines.js"), "utf8");
const start = source.indexOf("// jobs.search / marketplace.search used to return");
const end = source.indexOf("const server = http.createServer(");
assert.ok(start > 0 && end > start, "liveKnowledgeEvidence and its helpers must stay extractable");

function load(fetchFn, env) {
  const sandbox = { fetch: fetchFn, process: { env }, URL, Object, String, Array, Set, Error, JSON, RegExp };
  vm.createContext(sandbox);
  vm.runInContext(`${source.slice(start, end)}\nthis.liveKnowledgeEvidence = liveKnowledgeEvidence;`, sandbox);
  return sandbox.liveKnowledgeEvidence;
}
const openAiAnswers = text => async () => ({ ok: true, status: 200, json: async () => ({ output_text: text }) });

test("a price question with no search provider is not answered from memory, and says why", async () => {
  let called = 0;
  const run = load(async () => { called += 1; return openAiAnswers("Maize is 4500 shillings a bag in Kisumu")(); }, { OPENAI_API_KEY: "sk-test" });
  for (const query of ["What is the price of maize in Kisumu today?", "How much is a bag of fertilizer?", "market price of beans in Nakuru", "maize selling at what rate per kg", "How much does a tractor cost?", "What is the exchange rate for shillings to dollars?"]) {
    const result = await run({ query }, {}, "receipt-1");
    assert.match(result.answer, /^I can't look up today's prices because no live price source is set up\./, query);
    assert.equal(result.unsourced, true);
    assert.deepEqual(JSON.parse(JSON.stringify(result.sources)), []);
    assert.equal(result.provider, "none");
    assert.doesNotMatch(result.answer, /4500/);
  }
  assert.equal(called, 0, "the model was never asked for a number");
});

test("any other answer from the model's memory carries a plain note that no source was checked", async () => {
  const run = load(openAiAnswers("Rotate maize with beans to keep the soil healthy."), { OPENAI_API_KEY: "sk-test" });
  const result = await run({ query: "Why should I rotate crops?" }, {}, "receipt-1");
  assert.equal(result.answer, "I could not check any sources for this, so this is general knowledge and may be out of date or wrong. Rotate maize with beans to keep the soil healthy.");
  assert.equal(result.unsourced, true);
  assert.deepEqual(JSON.parse(JSON.stringify(result.sources)), []);
  assert.equal(result.provider, "openai");
  assert.equal(result.content, result.answer, "every field the answer is read from carries the note");
  assert.equal(result.lesson, result.answer);
});

test("questions that only mention a number or a rate are not mistaken for price questions", async () => {
  const run = load(openAiAnswers("Plant at the start of the rains."), { OPENAI_API_KEY: "sk-test" });
  for (const query of ["When should I plant maize in Kisumu?", "How much water does maize need?", "What is the germination rate of beans?", "How do I rotate crops over 3 seasons?"]) {
    const result = await run({ query }, {}, "receipt-1");
    assert.match(result.answer, /^I could not check any sources/, query);
  }
});

test("with a search provider the answer is sourced and unchanged", async () => {
  const run = load(async () => ({ ok: true, status: 200, json: async () => ({ answer: "FAO says plant at the onset of rains.", results: [{ url: "https://www.fao.org/maize", title: "FAO" }] }) }), { TAVILY_API_KEY: "tv-test" });
  const result = await run({ query: "What is the price of maize?" }, {}, "receipt-1");
  assert.equal(result.answer, "FAO says plant at the onset of rains.");
  assert.equal(result.unsourced, undefined);
  assert.equal(result.sources.length, 1);
});

test("a crop-advice request that must have approved sources still fails honestly rather than being answered from memory", async () => {
  const run = load(openAiAnswers("guess"), { OPENAI_API_KEY: "sk-test" });
  await assert.rejects(() => run({ query: "Why are my maize leaves yellow?", domainFilterRequired: true, includeDomains: ["fao.org"] }, {}, "receipt-1"), /No live reasoning or knowledge provider is configured/);
});
