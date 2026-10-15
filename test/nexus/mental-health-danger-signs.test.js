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

test("the browser's own mental-health reply is shown in words on the screen as well as said, and an emergency or crisis stays up until closed", () => {
  const fs = require("node:fs"); const path = require("node:path");
  const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
  const start = app.indexOf("function handleNexusMentalHealthBehavioralWellnessCommand(");
  const body = app.slice(start, app.indexOf("\n}\n", start));
  assert.match(body, /kyroShowResultScreen\("typed", text, \{ ok: true, status: "completed", response \}\)/);
  assert.ok(body.indexOf("setVoiceResponse(response") < body.indexOf("kyroShowResultScreen("), "said first, then shown");
  assert.match(body, /packet\.classification\?\.crisisOverride[^\n]*setAttribute\("data-kyro-keep", "true"\)/);
});

test("the United States has its emergency number (911) and the 988 Lifeline, said for a US account or a US time zone, and never for another country", async () => {
  const lines = require("../../public/kyro-crisis-lines.js");
  const { safetyTurn } = require("../../nexus/companion/safety.js");
  assert.match(lines.linesFor("United States", "en"), /call or text 988/); assert.match(lines.linesFor("us", "en"), /988/); assert.match(lines.linesFor("USA", "sw"), /988/);
  assert.equal(lines.linesFor("Canada", "en"), ""); assert.equal(lines.linesFor("", "en"), "");
  assert.equal(lines.countryFromTimeZone("America/Los_Angeles"), "United States"); assert.equal(lines.countryFromTimeZone("America/Indiana/Knox"), "United States");
  assert.equal(lines.countryFromTimeZone("America/Toronto"), ""); assert.equal(lines.countryFromTimeZone("America/Mexico_City"), "");
  assert.equal(lines.CHECKED_ON_BY_COUNTRY["United States"], "15 October 2026"); assert.match(lines.SOURCES["United States"][0].url, /^https:\/\/988lifeline\.org/);
  const reply = country => safetyTurn({ text: "this is an emergency", circle: null, push: null, tenantId: "t", userId: "u", userName: "A", locale: "en", country });
  assert.match(await reply("United States"), /911 in the United States/);
  assert.match(await reply("Kenya"), /999 or 112 in Kenya/); assert.match(await reply("Nigeria"), /112 in Nigeria/);
  assert.doesNotMatch(await reply("Uganda"), /911|988/); assert.match(await reply(""), /your local emergency number/);
  const sw = await safetyTurn({ text: "siwezi kupumua", circle: null, push: null, tenantId: "t", userId: "u", userName: "A", locale: "sw", country: "United States" });
  assert.match(sw, /911 nchini Marekani/);
});

test("the server's crisis packets are built for the account's country (or the device's time zone), not for nobody", () => {
  const fs = require("node:fs"); const path = require("node:path");
  const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  assert.match(server, /function crisisCountryFor\(user, timeZone = ""\)/);
  assert.match(server, /country: typeof crisisCountryFor === "function" \? crisisCountryFor\(user, context\.timeZone \|\| args\.timeZone\) : ""/);
  assert.match(server, /country: typeof crisisCountryFor === "function" \? crisisCountryFor\(user, body\.timeZone\) : ""/);
});

test("the very-high blood-pressure reply names where its 180 over 120 level comes from", () => {
  const bp = require("../../server/providers/bloodPressure.js");
  assert.match(bp.urgentGuidance(190, 125, ""), /180 over 120 level is from the World Health Organization, checked 15 October 2026/);
  assert.match(bp.SOURCE.url, /^https:\/\/www\.who\.int\//);
  assert.equal(bp.assessBloodPressure(185, 100).level, "urgent"); assert.equal(bp.assessBloodPressure(140, 85).level, "high");
});

test("the example rural-network catalog marks every entry as an unverified example, and the Health screen has the provider-summary button", () => {
  const fs = require("node:fs"); const path = require("node:path");
  const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  assert.match(server, /verified: false, sourceNote: "Example listing for demonstration, not a verified facility or supplier\."/);
  const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
  assert.match(app, /\{ kind: "button", label: "Summary for my provider", command: "Prepare a provider summary of my readings" \}/);
});
