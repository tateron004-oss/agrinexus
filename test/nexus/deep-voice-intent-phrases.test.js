"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// The fixed phrases that start a workforce, learning or health step ("assign mentor", "start shift", "build profile") only matched when said word for word; "assign me a mentor" and "start my shift" did not.
// A few more ways of saying the same thing are now known. The filler words are NOT dropped: "continue my course" belongs to the real course flow, not to a generic step.

const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
function load() {
  const start = server.indexOf("function deepVoiceIntent(lower) {");
  assert.ok(start >= 0);
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(`${server.slice(start, server.indexOf("\n}\n", start) + 3)}\nthis.run = deepVoiceIntent;`, sandbox);
  return text => sandbox.run(String(text).toLowerCase());
}

test("the same request is understood however it is said", () => {
  const run = load();
  const expected = {
    "assign mentor": "workforce.assign_mentor", "assign me a mentor": "workforce.assign_mentor", "I need a mentor": "workforce.assign_mentor", "find me a mentor": "workforce.assign_mentor",
    "start shift": "workforce.schedule_shift", "start my shift": "workforce.schedule_shift", "schedule my next shift": "workforce.schedule_shift",
    "build profile": "workforce.build_profile", "build my work profile": "workforce.build_profile", "build my profile": "workforce.build_profile",
    "complete my lesson": "learning.complete_lesson", "give me a quiz": "learning.quiz", "quiz me": "learning.quiz",
    "issue my certificate": "learning.certificate", "create a care plan": "health.careplan", "notify my caregiver": "health.caregiver", "create a referral": "health.referral"
  };
  for (const [text, tool] of Object.entries(expected)) assert.equal(run(text)?.tool, tool, text);
});

test("an unrelated sentence is still not taken for one, and the real course flow keeps its own phrases", () => {
  const run = load();
  for (const text of ["continue my course", "what is the weather in Nairobi", "I want to learn to read", "tell me a story", "hello", "find a clinic near me"]) assert.equal(run(text), null, text);
});
