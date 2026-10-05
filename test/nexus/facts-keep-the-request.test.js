"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { extractProfileStatement } = require("../../nexus/memory/profile-facts.js");

// Found by an independent review: a plain fact said together with a request ("I am a farmer, please remind me to water the maize at 6pm") was saved as a fact and
// the request was dropped, and several ordinary sentences were saved as facts that are not ("I have 5 acres of problems", "I plant maize in March" = the town March).

const facts = text => JSON.parse(JSON.stringify(extractProfileStatement(text)));
const kinds = text => facts(text).map(fact => fact.kind).sort().join(",");

test("a fact said together with a request saves nothing, so the request is carried out", () => {
  for (const text of ["I am a farmer, please remind me to water the maize at 6pm", "I have 5 acres, how much fertilizer do I need", "I am a nurse and I need the dose for paracetamol",
    "I live in Kisumu and I want to sell maize", "I grow maize, can you find me a buyer", "My name is Amina, tell me the weather"]) assert.deepEqual(facts(text), [], text);
});

test("plain statements are still saved, including several in one sentence and 'call me'", () => {
  assert.equal(kinds("I am a nurse and I live in Nakuru"), "location,work");
  assert.equal(kinds("I grow maize and beans in Kisumu"), "crops,location");
  assert.equal(kinds("I live near Kisumu where I grow maize"), "crops,location");
  assert.equal(kinds("call me Otieno"), "name");
  assert.equal(kinds("My name is Amina Wanjiru"), "name");
  assert.equal(kinds("I have 5 acres of land"), "farmSize");
  assert.equal(kinds("my farm is 5 acres in size"), "farmSize", "'in size' is not a town called Size");
  assert.equal(kinds("I speak Swahili"), "language");
});

test("sentences that only look like facts are not saved", () => {
  for (const text of ["I have 5 acres of problems", "I have 5 acres of land to lease out", "I am a farmer's son", "I am a farmer no more", "I am Farmer John", "I am a student of life",
    "I plant beans in April", "I will plant maize in March", "I want to plant beans in April", "I stay in school", "I come from Safaricom calling about your bill"]) {
    assert.equal(kinds(text).includes("farmSize") || kinds(text).includes("work") || kinds(text).includes("location"), false, text);
  }
  assert.equal(kinds("I plant maize in March"), "crops", "the crop is kept, March is not a town");
});
