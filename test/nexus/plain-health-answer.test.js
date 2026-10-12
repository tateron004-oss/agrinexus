"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const spoken = require("../../nexus/voice/spoken-requests.js");

// The health tool used to answer a sentence nothing in it understood with "I opened Health and Chronic Care. I can help with health literacy, test readings, intake preparation...". Now it says what Kyro cannot do
// (diagnose, say what is safe to take or mix, change a dose), who to ask, when to get emergency help, and what it can do. THE WORDING NEEDS A CLINICIAN'S REVIEW before it is relied on; these tests pin its limits.

const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

test("a medicine question is not answered: it says so, names who to ask, and when to get help", () => {
  for (const text of ["Can I take ibuprofen with my blood pressure medicine", "Is it safe to mix paracetamol and my antibiotics", "I missed a dose, should I double it", "How much aspirin should I take", "Should I stop taking my tablets"]) {
    const said = spoken.plainHealthAnswer(text, "en");
    assert.match(said, /^I can't tell you what is safe to take or mix, or change a dose\./, text);
    assert.match(said, /ask a pharmacist or your clinician/); assert.match(said, /call your local emergency number or go to a clinic now/);
    assert.doesNotMatch(said, /\b\d+\s?(?:mg|ml|tablets?|pills?)\b|yes, you can|it is safe|you should take/i, "no dose, no 'it is fine'");
  }
});

test("a symptom is not diagnosed: it says so, lists the danger signs that mean emergency help now, and offers a clinic", () => {
  for (const text of ["I have a fever and a headache", "My stomach hurts", "I have been coughing for three days", "I feel dizzy and sick"]) {
    const said = spoken.plainHealthAnswer(text, "en");
    assert.match(said, /^I'm sorry you feel unwell\. I can't tell what is causing it\./, text);
    for (const sign of ["trouble breathing", "chest pain", "confusion", "stiff neck", "bleeding that will not stop", "fainting", "drooping face", "weakness on one side"]) assert.ok(said.includes(sign), `${text}: ${sign}`);
    assert.match(said, /I can find a clinic near you or prepare a summary for your provider\./);
    assert.doesNotMatch(said, /you probably have|it is (?:probably|likely)|malaria|infection|\btake\b/i, "no guess at a cause, no treatment");
  }
});

test("anything else says plainly what Kyro can do, and never announces a window", () => {
  const said = spoken.plainHealthAnswer("tell me about health", "en");
  assert.equal(said, "I can save your readings, find a clinic or a pharmacy near you, and prepare a summary for your provider. I don't diagnose or give treatment advice. What would you like?");
  for (const text of ["", "hello", "I have a fever", "ibuprofen"]) assert.doesNotMatch(spoken.plainHealthAnswer(text, "en"), /I opened/i, text);
});

test("in Kiswahili the same three answers are Kiswahili", () => {
  assert.match(spoken.plainHealthAnswer("Naweza kunywa ibuprofen na dawa yangu", "sw"), /^Siwezi kukuambia kama ni salama kuchanganya dawa/);
  assert.match(spoken.plainHealthAnswer("I have a fever", "sw-KE"), /^Pole kwa kuumwa\./);
  assert.match(spoken.plainHealthAnswer("hello", "sw"), /^Naweza kuhifadhi vipimo vyako/);
});

test("the health tool uses it as its last answer, after the planner; the agriculture, live-knowledge, job-search and calendar wording is plain", () => {
  assert.match(server, /response = response \|\| \(typeof spokenRequests !== "undefined" \? spokenRequests\.plainHealthAnswer\(command, language\)/);
  assert.doesNotMatch(server, /I opened Health and Chronic Care\. I can help with health literacy/);
  assert.doesNotMatch(server, /I opened Agriculture Help for this/);
  assert.match(server, /let summary = "I can't look that up live right now, so I won't guess or make up sources\. I can save the question for review\.";/);
  assert.match(server, /if \(\/\^Provider is unavailable\\b\/i\.test\(said\)\)/);
  assert.equal(spoken.plainSwitchedOffSentence({ provider: "calendar", action: "calendar.event.create" }), "The calendar is not switched on for this account yet, so nothing was sent or changed.");
  assert.equal(spoken.plainSwitchedOffSentence({ provider: "x", action: "y" }), "That feature is not switched on for this account yet, so nothing was sent or changed.");
});

test("a job-search source that is not configured is said plainly, and so is any other source", () => {
  const start = server.indexOf("function voiceToolSpoken(");
  const sandbox = { spokenRequests: spoken };
  vm.createContext(sandbox);
  vm.runInContext(`${server.slice(start, server.indexOf("\n}\n", start) + 3)}\nthis.run = voiceToolSpoken;`, sandbox);
  const jobs = sandbox.run({ ok: true, capability: "workforce-jobs", response: "Provider is unavailable: live job search retrieval is disabled or not configured." }, "Find jobs near me").response;
  assert.equal(jobs, "I can't search live job listings right now, so I won't guess what is open near you. I can make your CV, practise a job interview with you, or teach reading and counting.");
  const other = sandbox.run({ ok: true, capability: "x", response: "Provider is unavailable: not configured." }, "Who won the cup").response;
  assert.equal(other, "I can't look that up live right now, so I won't guess. Please try again later.");
});
