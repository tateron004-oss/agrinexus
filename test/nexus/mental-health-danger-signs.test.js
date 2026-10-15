"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const mh = require("../../public/nexus-mental-health-behavioral-wellness.js");

// Found by reading what a person would be shown: "my baby is not breathing" was answered with a one-minute grounding exercise (the word "breathing" meant "calm down"), "prepare a provider summary of my readings" was taken as a
// request for a therapist, and "I want to end my life, please help us" on a Kenyan account was given the United States numbers.
const stateOf = text => mh.buildSupportPacket(text, {}).classification.state;

test("somebody else who has stopped breathing, is unconscious, seizing, choking or bleeding heavily is left to the server's danger-sign reader, never answered with a coping exercise", () => {
  const { readSafetyDetailed } = require("../../nexus/companion/safety.js");
  for (const said of ["my baby is not breathing", "he has stopped breathing", "she isn't breathing", "my mother is unconscious", "she is having a seizure", "he is choking", "he won't wake up", "she is bleeding heavily", "my father has no pulse"]) {
    assert.equal(mh.shouldHandle(said), false, "the browser stands aside: " + said);
    assert.equal(readSafetyDetailed(said)?.kind, "emergency", "the server reads it as an emergency: " + said);
  }
  assert.equal(readSafetyDetailed("the child swallowed poison")?.kind, "care");
  for (const said of ["I can't breathe", "chest pain"]) { assert.equal(mh.shouldHandle(said), true, said); assert.equal(stateOf(said), "medical_emergency", said); }
  for (const said of ["my friend was not breathing when we found him in the war", "I stopped breathing fire"]) assert.equal(readSafetyDetailed(said), null, said);
});

test("a request for a breathing exercise is still coping support; a provider summary and a stress fracture are not mental-health requests", () => {
  assert.equal(stateOf("I need a breathing exercise"), "self_guided_coping");
  assert.equal(stateOf("I feel stressed"), "emotional_support");
  for (const said of ["Prepare a provider summary of my readings", "I have a stress fracture", "my stress test is tomorrow"]) assert.equal(mh.shouldHandle(said), false, said);
  assert.equal(mh.shouldHandle("I want to find a therapy provider"), true);
});

test("the account's country decides which helplines are used; 'help us' is not the United States", () => {
  const id = (text, country) => mh.buildJurisdictionEscalation(text, { country }).jurisdictionId;
  assert.equal(id("I want to end my life, please help us", "Kenya"), "kenya");
  assert.equal(id("I want to end my life", "US"), "us");
  assert.equal(id("I want to end my life", "Nigeria"), "nigeria");
  assert.equal(id("I am in the US and I feel sad", ""), "us");
  assert.equal(id("please help us", ""), "generic");
  assert.equal(id("I feel sad in Kisumu", ""), "kenya");
});

test("example listings from the starter list are said to be examples, not real pharmacies or clinics, and the help-finding replies do not promise verified counsellors", () => {
  const fs = require("node:fs"); const path = require("node:path");
  const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  assert.match(server, /not real pharmacies you can rely on/); assert.match(server, /not real clinics you can rely on/);
  const text = fs.readFileSync(path.join(__dirname, "../../public/nexus-mental-health-behavioral-wellness.js"), "utf8");
  assert.doesNotMatch(text, /I can help look for verified behavioral-health/);
  assert.match(mh.buildSupportPacket("I want to find a therapy provider", {}).userVisibleStatus, /cannot search for counsellors or therapists yet/);
});
