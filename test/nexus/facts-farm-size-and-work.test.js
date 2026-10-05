"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { extractProfileStatement, extractForgetRequest, describeFact, savedNotice, isFact, KINDS } = require("../../nexus/memory/profile-facts.js");

// Kyro remembered five kinds of facts (name, town, crops, animals, language). It now also remembers how big the farm is and what work a person does,
// in the person's own words, and takes them back the same way.

const facts = text => extractProfileStatement(text);
const one = (text, kind) => facts(text).find(fact => fact.kind === kind)?.value;

test("the size of the farm is remembered as said, in acres or hectares, including spoken numbers", () => {
  assert.equal(one("I have 5 acres", "farmSize"), "5 acres");
  assert.equal(one("My farm is about 2 hectares", "farmSize"), "2 hectares");
  assert.equal(one("We farm three acres", "farmSize"), "3 acres");
  assert.equal(one("I own 1 acre of land", "farmSize"), "1 acre");
  assert.equal(one("My land is 12 ha", "farmSize"), "12 hectares");
  assert.equal(one("I cultivate roughly 2.5 acres in Kisumu", "farmSize"), "2.5 acres");
  assert.equal(one("I grow maize on 4 acres in Kisumu", "farmSize"), undefined, "a size that is not said as 'I have / my farm is' is not guessed");
  assert.deepEqual(facts("I farm 3 acres in Kakamega").map(fact => fact.kind).sort(), ["farmSize", "location"]);
});

test("the kind of work is remembered only for the kinds of work people plainly say", () => {
  assert.equal(one("I am a farmer", "work"), "farmer");
  assert.equal(one("I'm a nurse", "work"), "nurse");
  assert.equal(one("I work as a community health worker", "work"), "community health worker");
  assert.equal(one("My job is teacher", "work"), "teacher");
  assert.equal(one("I am an extension officer", "work"), "extension officer");
  assert.equal(one("I am a student in Nakuru", "work"), "student");
  assert.equal(facts("I am a farmer and I live in Kisumu").map(fact => fact.kind).sort().join(","), "location,work");
});

test("sentences that only look like a size or a job are not saved", () => {
  for (const text of ["I want 5 acres", "How big is 5 acres?", "I have 5 cows", "I have 5 acres of maize to sell, how much?", "I am a bit tired", "I'm a fan of football", "I am a good cook of nothing", "Do I have 5 acres?", "Tell me about a 5 acre farm", "I have 0 acres", "I have 900000 acres"]) {
    const found = facts(text).filter(fact => fact.kind === "farmSize" || fact.kind === "work");
    assert.deepEqual(found, [], text);
  }
});

test("the existing kinds are unchanged", () => {
  assert.deepEqual(facts("I grow maize in Kisumu"), [{ kind: "location", value: "Kisumu" }, { kind: "crops", value: "maize" }]);
  assert.deepEqual(facts("My name is Amina"), [{ kind: "name", value: "Amina" }]);
  assert.deepEqual(facts("I keep goats and chickens"), [{ kind: "livestock", value: "goats, chickens" }]);
  assert.deepEqual(facts("I speak Swahili"), [{ kind: "language", value: "Swahili" }]);
  assert.deepEqual(KINDS.slice(0, 5), ["name", "location", "crops", "livestock", "language"]);
});

test("they read back in plain words, are valid saved facts, and can be forgotten by name", () => {
  assert.equal(describeFact({ kind: "farmSize", value: "5 acres" }), "your farm is 5 acres");
  assert.equal(describeFact({ kind: "work", value: "farmer" }), "you work as a farmer");
  assert.equal(describeFact({ kind: "work", value: "agronomist" }), "you work as an agronomist");
  assert.match(savedNotice([{ kind: "farmSize", value: "5 acres" }, { kind: "work", value: "farmer" }]), /^Got it\. I'll remember that your farm is 5 acres and you work as a farmer\./);
  assert.equal(isFact({ kind: "farmSize", value: "5 acres" }), true);
  assert.equal(isFact({ kind: "work", value: "" }), false);
  for (const [text, kind] of [["forget my farm size", "farmSize"], ["Forget the size of my farm", "farmSize"], ["forget my work", "work"], ["Forget my job", "work"], ["forget my occupation", "work"]]) assert.deepEqual(extractForgetRequest(text), { kind }, text);
});
