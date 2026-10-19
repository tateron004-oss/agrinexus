"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const topics = require("../../public/kyro-business-topics.js");
const { sourcesPageRequest, sourcesPageAnswer } = require("../../nexus/knowledge/sources-page.js");

// Found in the live voice test after #1118: "Show me your sources for small business" was left to the voice model, which said "I don't have any sources to show" (twice, 13 seconds) before the page answered. The page now
// takes such a request itself, as it does a business question, so the voice model is cut off at once and the sources page is the only answer.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

const ASKS = ["Show me your sources for small business.", "Show me your sources", "What are your sources?", "Where does your information come from?", "Where do your answers come from", "Show me the source page", "Show me the sources you use", "Give me your sources for nonprofits", "show all the sources", "Show me the small business sources", "Show sources for small business", "sources for nonprofits"];
const NOT = ["Show sources for small business loans", "sources for my business", "What are good sources for business funding?","What are the sources of funding?", "Find me sources for my report", "What are my sources of income?", "Open the page", "Open the first source", "What is the 8(a) program?", "Where does my information come from on my phone"];

test("the words that ask for the sources page are shared by the page and the server, and take only that request", () => {
  for (const say of ASKS) { assert.equal(topics.sourcesRequest(say), true, say); assert.equal(sourcesPageRequest(say), true, say); }
  for (const say of NOT) { assert.equal(topics.sourcesRequest(say), false, say); assert.equal(sourcesPageRequest(say), false, say); }
  for (const say of [...ASKS, ...NOT]) assert.equal(sourcesPageRequest(say), topics.sourcesRequest(say), `the server and the page agree on: ${say}`);
  assert.equal(topics.sourcesRequest(""), false);
  assert.equal(topics.sourcesRequest("x".repeat(200)), false);
  assert.equal(sourcesPageAnswer("show me your sources for small business").topic, "sources-page");
});

function pageFunction(timeZone = "UTC") {
  const start = app.indexOf("function kyroBusinessQuestion(text) {");
  const end = app.indexOf("// \"What time is it?\"", start);
  assert.ok(start > 0 && end > start, "kyroBusinessQuestion is in app.js");
  const context = { window: { KyroBusinessTopics: topics }, kyroDeviceTimeZone: () => timeZone };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroBusinessQuestion;`, context);
  return context.ask;
}

test("on the page the sources request is a business request on any device, and the plain questions keep their rules", () => {
  for (const timeZone of ["UTC", "Africa/Nairobi", "America/Los_Angeles"]) {
    const ask = pageFunction(timeZone);
    for (const say of ASKS) assert.equal(ask(say), true, `${timeZone}: ${say}`);
    for (const say of ["What are the sources of funding?", "Open the page", "Show me my orders"]) assert.equal(ask(say), false, `${timeZone}: ${say}`);
  }
  assert.equal(pageFunction("America/Los_Angeles")("What is the 8(a) program?"), true, "the United States guide keeps its rule");
  assert.equal(pageFunction("UTC")("What is the 8(a) program?"), true, "(it names a United States programme)");
});

test("the page takes the request before the voice model's answer: the same turn-over as every business question; and the script is the new version", () => {
  const spot = app.indexOf("kyroBusinessQuestion(trimmed)) {");
  assert.ok(spot > 0);
  const block = app.slice(spot, spot + 420);
  assert.match(block, /kyroTakeOverTurn\(\)/);
  assert.match(block, /handleNexusUnifiedBrainRuntimeCommand\(trimmed, \{ source: "typed", kyroDirect: true \}\)/);
  assert.match(app, /typeof topics\.sourcesRequest === "function" && topics\.sourcesRequest\(text\)\) return true;/);
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  assert.ok(index.includes("/kyro-business-topics.js?v=kyro-business-topics-8") && sw.includes("/kyro-business-topics.js?v=kyro-business-topics-8"));
});
