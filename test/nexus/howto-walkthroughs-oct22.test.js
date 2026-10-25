"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const matcher = require("../../public/kyro-howto-topics.js");
const howto = require("../../nexus/knowledge/howto-walkthroughs.js");
const registry = require("../../nexus/knowledge/guide-walkthroughs.js");
const verified = new Set(require("./fixtures/verified-say-phrases.json").phrases);

// Asked by the owner on 22 October 2026: Kyro walks a person through USING each part of Kyro itself, one step at a time, for people who have no instructor and have never used it. A request to be taught is taken only when it names a
// part of Kyro; the plain use of a feature ("show my notes") and the guides' questions ("walk me through registering a business") are not. Every phrase a step tells the person to say is one that is known to work.
const norm = s => String(s).toLowerCase().replace(/[“”"]/g, "").replace(/[.?!,]+$/, "").replace(/\s+/g, " ").trim();

test("a request to be taught a part of Kyro is taken, and names the part", () => {
  for (const [say, topic] of [["Walk me through using the shopping list", "howto-lists"], ["Teach me to use the farm log", "howto-farm-log"], ["Walk me through setting up a trusted circle", "howto-circle"], ["How do I use reminders?", "howto-reminders"],
    ["Kyro, take me through the calendar", "howto-calendar"], ["Step by step, how do I install Kyro as an app?", "howto-install"], ["Walk me through using Kyro", "howto-start"], ["Show me how to use the offline notes screen", "howto-offline"], ["Walk me through checking in every day", null]]) {
    assert.equal(matcher.howtoTopic(say), topic, say);
  }
  assert.equal(matcher.TOPICS.length, new Set(matcher.TOPICS).size);
});

test("the plain use of a feature, a guide's question, a record, an order and an emergency are not taken", () => {
  for (const say of ["Show my notes", "Add a reminder to call the vet at six", "Open the calendar", "Create a checklist called Seed Order", "Walk me through my expenses this week", "Walk me through making a budget", "Walk me through registering a business in Kenya",
    "Walk me through checking my credit report", "Walk me through the SBA 8(a) program", "How do I check my blood pressure at home?", "Call my pastor", "Teach me to use the church tax rules", "I want to hurt myself, walk me through using reminders",
    "What is the weather in Kisumu?", "Walk me through my blood pressure readings", "How do I explain a period to my daughter?"]) assert.equal(matcher.howtoTopic(say), null, say);
});

test("every Using-Kyro walkthrough tells the person to say only words that are known to work, and never promises what Kyro cannot do", () => {
  for (const [id, def] of Object.entries(howto.WALKTHROUGHS)) {
    assert.ok(matcher.TOPICS.includes(def.topic), `${id}: topic ${def.topic}`);
    const walk = howto.walkthrough(id);
    for (const step of walk.steps) {
      assert.equal(step.link, null, `${id}: Kyro's own feature has no official page`);
      for (const m of step.text.matchAll(/["“]([^"”]{4,140})["”]/g)) assert.ok(verified.has(norm(m[1])), `${id} / ${step.title}: "${m[1]}" is not a phrase known to work`);
      assert.doesNotMatch(step.text, /\b(?:always|never fails|100 ?%|guarantee[sd]?)\b/i, `${id}: ${step.title}`);
    }
  }
});

test("on the page and the server: the request is the page's own turn, the server tries the person's words first, and the matcher is loaded before app.js and cached", () => {
  const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
  const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  assert.match(app, /\(typeof kyroHowtoQuestion === "function" && kyroHowtoQuestion\(trimmed\)\) \|\| \(typeof kyroTechWalkQuestion === "function" && kyroTechWalkQuestion\(trimmed\)\) \|\| \(typeof kyroSafetyQuestion === "function" && kyroSafetyQuestion\(trimmed\)\) \|\| \(typeof kyroSpecialEdQuestion === "function" && kyroSpecialEdQuestion\(trimmed\)\)\)\) \{\s+if \(!heardAgain\) \{\s+try \{ kyroTakeOverTurn\(\); \}/);
  assert.match(app, /function kyroHowtoQuestion\(text\) \{\s+try \{ return Boolean\(window\.KyroHowtoTopics/);
  assert.ok(server.includes('const { howtoTopic } = require("./public/kyro-howto-topics.js");'));
  assert.ok(server.includes("howtoTopic(howtoAsk)"));
  const tag = '<script src="/kyro-howto-topics.js?v=kyro-howto-topics-2"></script>';
  assert.ok(index.includes(tag)); assert.ok(index.indexOf(tag) < index.indexOf('<script src="/app.js'));
  assert.match(sw, /`\/kyro-howto-topics\.js\?v=kyro-howto-topics-2`/);
  assert.equal(registry.FAMILIES[0].label, "kyro-howto", "asked first: a part-of-Kyro word is required");
});

test("a request to be walked through a technology or AI-tools topic is the page's own turn (the plain question is not), and a body screening is not read as a feelings topic", () => {
  const lib = require("../../public/kyro-technology-topics.js");
  const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
  const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  assert.equal(lib.isWalkRequest("Walk me through using AI tools safely"), true);
  assert.equal(lib.technologyTopic("Walk me through using AI tools safely"), "ai-safe-use");
  assert.equal(lib.aiToolsTopic("Walk me through using AI for marketing and social media posts"), "ai-for-marketing");
  assert.equal(lib.isWalkRequest("Is it safe to use AI with customer data?"), false, "the plain question is answered as before");
  assert.match(app, /\(typeof kyroTechWalkQuestion === "function" && kyroTechWalkQuestion\(trimmed\)\) \|\| \(typeof kyroSafetyQuestion === "function" && kyroSafetyQuestion\(trimmed\)\) \|\| \(typeof kyroSpecialEdQuestion === "function" && kyroSpecialEdQuestion\(trimmed\)\)\)\) \{\s+if \(!heardAgain\) \{\s+try \{ kyroTakeOverTurn\(\); \}/);
  assert.ok(server.includes("isTechWalkRequest(techWalkAsk)"));
  assert.ok(index.includes('<script src="/kyro-technology-topics.js?v=kyro-technology-topics-1"></script>'));
  assert.ok(index.indexOf("/kyro-technology-topics.js") < index.indexOf('<script src="/app.js'));
  assert.match(sw, /`\/kyro-technology-topics\.js\?v=kyro-technology-topics-1`/);
  // "screening" alone is a mental-health word; cervical, breast and other body screenings are not, and a crisis stays a crisis
  const mh = require("../../public/nexus-mental-health-behavioral-wellness.js");
  for (const say of ["Walk me through getting a cervical screening.", "Tell me about breast screening", "screening for cervical cancer", "How often is bowel screening"]) assert.equal(mh.shouldHandle(say), false, say);
  for (const say of ["I need a depression screening", "a screening", "I want to hurt myself, cervical screening"]) assert.equal(mh.shouldHandle(say), true, say);
});

test("speech recognition often hears the name Kyro as Cairo, Kiro or Kairo: the lessons still start, and an ordinary place name does not", () => {
  for (const say of ["Walk me through what Cairo remembers about you", "Walk me through asking Kiro questions, and for pictures, videos, and music", "Walk me through making a document in Kairo", "Walk me through finding a clinic or pharmacy in Cairo"]) assert.ok(matcher.howtoTopic(say), say);
  for (const say of ["What is the weather in Cairo", "Show me Cairo on the map", "How do I get from Nairobi to Cairo"]) assert.equal(matcher.howtoTopic(say), null, say);
  const cases = require("../../scripts/live-voice-suite/cases/walkthroughs-guides.js");
  assert.ok(cases.every(entry => entry.expect.allowRefusal === true && entry.then.every(step => !step.expect || step.expect.allowRefusal === true)), "an honest 'I cannot look up addresses' in a step is not a refusal (the rig reads allowRefusal inside each expectation)");
});
