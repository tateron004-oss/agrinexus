"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const topics = require("../../public/kyro-business-topics.js");
const guide = require("../../nexus/knowledge/us-small-business.js");

// The questions an owner of a minority-owned business or a startup actually asks aloud. Found by the live voice test: the page did not take any of them, so they were left to the voice model, which answered from memory with no sources.
const SPOKEN = Object.freeze([
  ["How do I get certified as a minority-owned business?", "certification"],
  ["What is the 8(a) program?", "8a"],
  ["Tell me about NMSDC certification", "nmsdc"],
  ["Is MBDA still open?", "mbda"],
  ["How do I get an SBA loan?", "loans"],
  ["What grants are available for black-owned businesses?", "grants"],
  ["Where can I get free business help?", "free-help"],
  ["Find a SCORE mentor near 30303", "local-help"],
  ["How do I start a business?", "startup-steps"],
  ["What are the steps to start a small business?", "startup-steps"],
  ["How do I write a business plan?", "business-plan"],
  ["How much does it cost to start a business?", "startup-costs"],
  ["How can I fund my startup?", "startup-funding"],
  ["What is the difference between an LLC and an S corp?", "llc-vs-corp"],
  ["How do I get an EIN for my business?", "ein-registration"],
  ["Do I need a business license to sell food?", "licenses"],
  ["How do I open a business bank account?", "business-bank-account"],
  ["How do I hire my first employee?", "hiring-employees"],
  ["What insurance does a small business need?", "business-insurance"],
  ["How do I market my small business?", "marketing-visibility"],
  ["What is bookkeeping and how do I do it?", "bookkeeping-accounting"],
  ["How do I build business credit?", "business-credit"],
  ["How do I sell to the government?", "contracting"],
  ["Do I need to pay estimated taxes on my catering income?", "estimated-tax"],
  ["Can I get WOSB certification?", "certification"],
  ["How do I register my business?", "ein-registration"],
  ["Where should I put my business location?", "business-location"],
  ["What is a 1099?", "1099"],
  ["How do I grow my business?", "growth-scaling"]
]);

test("every spoken minority-owned and startup question reaches a topic of the checked guide, and the guide's answer carries its sources and date", () => {
  for (const [say, expected] of SPOKEN) {
    assert.equal(topics.topic(say), expected, say);
    assert.ok(topics.isBusinessQuestion(say), `${say} is about a business`);
    const answer = guide.usSmallBusinessAnswer(expected, { question: say });
    assert.match(answer.text, /checked 9 October 2026/, say);
    assert.ok(answer.sources.length > 0, say);
  }
});

test("the server's guide and the page share one set of words", () => {
  assert.equal(guide.usSmallBusinessTopic, topics.topic);
  assert.equal(guide.isUsContext, topics.isUsContext);
});

test("things that are not about a business are left alone: a garden, a fishing permit, a record, a draft", () => {
  assert.equal(topics.topic("How do I grow a garden?"), null);
  assert.equal(topics.isBusinessQuestion("What is a permit for fishing?"), false);
  assert.equal(topics.isBusinessQuestion("How do I grow tomatoes in my yard?"), false);
  assert.equal(topics.topic("Log a tax payment of $300"), null);
  assert.equal(topics.topic("Draft a grant proposal for my business"), null);
  assert.equal(topics.topic("Open my business plan"), null);
});

// the page's own gate (public/app.js kyroBusinessQuestion), run on its own as the community gate is
test("the page answers a spoken business question from the guide on a US device or when it names a US programme, and not for a person elsewhere", () => {
  const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
  const start = app.indexOf("function kyroBusinessQuestion("); const fn = app.slice(start, app.indexOf("\n}\n", start) + 3);
  const owns = (text, zone) => new vm.Script(fn + "\nkyroBusinessQuestion").runInNewContext({ window: { KyroBusinessTopics: topics }, kyroDeviceTimeZone: () => zone, Boolean })(text);
  assert.equal(owns("How do I get certified as a minority-owned business?", "America/Chicago"), true, "a US device");
  assert.equal(owns("What is the 8(a) program?", "Africa/Nairobi"), true, "it names a US programme");
  assert.equal(owns("How do I start a business?", "Africa/Nairobi"), false, "no American agencies for a person in Kenya: the general answer is used instead");
  assert.equal(owns("How do I grow a garden?", "America/Chicago"), false);
  assert.equal(owns("Show my invoices.", "America/Chicago"), false);
  const route = app.slice(app.indexOf("function routeKyroVoiceIntakeTranscript("));
  assert.match(route, /typeof kyroBusinessQuestion === "function" && kyroBusinessQuestion\(trimmed\)\) \{\s+if \(!heardAgain\) \{[^]*?handleNexusUnifiedBrainRuntimeCommand\(trimmed, \{ source: "typed", kyroDirect: true \}\);[^]*?\}\s+return true;/);
  assert.ok(route.indexOf("kyroCommunityQuestion(trimmed)") < route.indexOf("kyroBusinessQuestion(trimmed)"), "veteran-owned business questions still go to the veterans' guide first");
  assert.ok(fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8").includes('src="/kyro-business-topics.js?v=kyro-business-topics-8"'));
  assert.ok(fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8").includes("/kyro-business-topics.js?v=kyro-business-topics-8"));
});
