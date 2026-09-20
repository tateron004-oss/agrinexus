"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { extractProfileStatement, extractForgetRequest, describeFact, savedNotice, forgottenNotice, isFact } = require("../../nexus/memory/profile-facts.js");

const facts = text => Object.fromEntries(extractProfileStatement(text).map(fact => [fact.kind, fact.value]));

test("plain statements about the person are recognized", () => {
  assert.deepEqual(facts("My name is Amina"), { name: "Amina" });
  assert.deepEqual(facts("my name is amina wanjiru"), { name: "Amina Wanjiru" });
  assert.deepEqual(facts("Call me Otieno."), { name: "Otieno" });
  assert.deepEqual(facts("I'm Wanjiku"), { name: "Wanjiku" });
  assert.deepEqual(facts("I live in Kisumu"), { location: "Kisumu" });
  assert.deepEqual(facts("I live in nakuru."), { location: "Nakuru" });
  assert.deepEqual(facts("My farm is near Eldoret"), { location: "Eldoret" });
  assert.deepEqual(facts("I grow maize and beans"), { crops: "maize, beans" });
  assert.deepEqual(facts("I farm maize, beans and cassava in Kisumu"), { crops: "maize, beans, cassava", location: "Kisumu" });
  assert.deepEqual(facts("I farm in Kakamega"), { location: "Kakamega" });
  assert.deepEqual(facts("I keep 20 goats and 5 cows"), { livestock: "20 goats, 5 cows" });
  assert.deepEqual(facts("We raise chickens"), { livestock: "chickens" });
  assert.deepEqual(facts("I speak Swahili"), { language: "Swahili" });
  assert.deepEqual(facts("Please reply in Kiswahili"), { language: "Swahili" }, "a standing language preference is remembered");
  assert.deepEqual(facts("Hello, my name is Amina and I grow maize in Kisumu"), { name: "Amina", crops: "maize", location: "Kisumu" });
});

test("questions, requests and look-alikes are never taken for facts", () => {
  for (const text of ["What is my name?", "Where do I live?", "How do I grow maize?", "Can I grow maize in Kisumu?", "I grow maize, when should I plant?", "Tell me my name is Amina", "Call me a taxi", "Call my brother",
    "I'm tired", "I'm hungry", "I am fine", "I'm sorry", "I'm in trouble", "I'm going to the market", "I live in a small house", "I live in the countryside", "I grow tired of this", "I farm for a living",
    "I have a headache", "I have malaria", "I have 500 shillings", "I keep forgetting", "I have to go", "Remind me that I grow maize", "Weather in Kisumu", "the weather where I live in Kisumu is hot?",
    "", "x".repeat(300)])
    assert.deepEqual(extractProfileStatement(text), [], text);
});

test("health details, money, and other people's details are not facts", () => {
  for (const text of ["I have diabetes", "I take metformin", "My blood pressure is 140 over 90", "I earn 30000 shillings", "My brother lives in Nairobi", "My wife's name is Halima", "My phone number is +254712345678", "I owe the bank 50000"])
    assert.deepEqual(extractProfileStatement(text), [], text);
});

test("forget requests are recognized, and narrower than any sentence containing 'forget'", () => {
  assert.deepEqual(extractForgetRequest("Forget that"), { kind: "last" });
  assert.deepEqual(extractForgetRequest("please forget that."), { kind: "last" });
  assert.deepEqual(extractForgetRequest("Forget what I just said"), { kind: "last" });
  assert.deepEqual(extractForgetRequest("Forget my location"), { kind: "location" });
  assert.deepEqual(extractForgetRequest("forget my name"), { kind: "name" });
  assert.deepEqual(extractForgetRequest("Forget my crops"), { kind: "crops" });
  assert.deepEqual(extractForgetRequest("delete my livestock"), { kind: "livestock" });
  assert.deepEqual(extractForgetRequest("forget my language"), { kind: "language" });
  assert.deepEqual(extractForgetRequest("Forget everything"), { kind: "all" });
  assert.deepEqual(extractForgetRequest("forget everything about me"), { kind: "all" });
  assert.deepEqual(extractForgetRequest("Please delete everything you know about me"), { kind: "all" });
  for (const text of ["Don't forget to water the maize", "I forget my password", "Forget it, never mind", "Remind me not to forget the seeds", "Forget my brother's number", "forget my health record", "How do I forget a bad habit"])
    assert.equal(extractForgetRequest(text), null, text);
});

test("what Kyro says: every save is announced with the way to undo it, and forgetting says what was forgotten", () => {
  assert.equal(describeFact({ kind: "location", value: "Kisumu" }), "you are in Kisumu");
  assert.equal(savedNotice([{ kind: "name", value: "Amina" }]), 'Got it. I\'ll remember that your name is Amina. Say "forget that" any time, or ask "what do you know about me?"');
  assert.equal(savedNotice([{ kind: "crops", value: "maize, beans" }, { kind: "location", value: "Kisumu" }], [{}]), 'Got it. I\'ll remember that you grow maize, beans and you are in Kisumu. This replaces what I had before. Say "forget that" any time, or ask "what do you know about me?"');
  assert.equal(forgottenNotice([{ kind: "location", value: "Kisumu" }]), "Done. I've forgotten that you are in Kisumu.");
  assert.equal(forgottenNotice([]), "I don't have that saved, so there is nothing to forget.");
  assert.equal(isFact({ kind: "name", value: "Amina" }), true); assert.equal(isFact({ marker: "x" }), false); assert.equal(isFact("Amina"), false);
});
