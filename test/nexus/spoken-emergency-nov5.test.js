"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// 5 November 2026, from the owner's test report of 4 November (health-06): "I fell and can't get up", said aloud, left it to the voice model: sometimes it only spoke (the trusted circle was never alerted),
// sometimes an old health window opened and showed a Virtual Care Encounter form. The page now takes these words itself and sends them the typed way, to the route that alerts the circle or says there is none.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const lines = app.split("\n");
const names = ["KYRO_OPEN_LEAD", "KYRO_EMERGENCY_SAID"];
const sandbox = {};
// (the constant is written across several lines of comment and one of code: take the code lines that start the two constants)
vm.runInNewContext(`${lines.filter(line => names.some(name => line.startsWith(`const ${name} = `))).join("\n")}\nthis.emergency = said => KYRO_EMERGENCY_SAID.test(said);`, sandbox);

test("the five emergency sentences of the test report, and the ways people say the same, are taken by the page", () => {
  for (const say of ["I fell and can't get up", "I fell and can't get up.", "I slipped and hurt my back", "I've had a fall", "I have had a fall", "I had a fall", "I've fallen and I can't get up", "call an ambulance", "Call an ambulance.", "Please call an ambulance",
    "I need an ambulance", "send an ambulance", "alert my circle", "Alert my trusted circle", "Kyro, alert my family", "I tripped and I think I broke my wrist", "I can't get up"]) assert.equal(sandbox.emergency(say), true, say);
});

test("ordinary sentences with the same words are left alone", () => {
  for (const say of ["The price of maize fell", "My son fell asleep", "I fell in love with this song", "What is the number for an ambulance in Kenya", "How do I become an ambulance driver", "Show my circle", "Who is in my circle", "Add a person to my circle",
    "I slipped a disc years ago, what exercises help", "Leaves fell from the tree", "Play some music", "Teach me fractions"]) assert.equal(sandbox.emergency(say), false, say);
});

test("the claim is the first thing the page does with a spoken sentence, is not done for typed sentences (the typed route already answers them), and uses the same route as typing", () => {
  const at = app.indexOf("if (!options.typed && KYRO_EMERGENCY_SAID.test(said)) {");
  assert.ok(at > 0, "the claim is there");
  const head = app.indexOf("function kyroHandleSpokenOpenOnce(text, options = {}) {");
  assert.ok(head > 0 && at > head && at - head < 700, "it comes right after the sentence is cleaned, before every other claim");
  assert.match(app.slice(at, at + 260), /kyroTakeOverTurn\(\);\s+void handleNexusUnifiedBrainRuntimeCommand\(said, \{ source: "typed", kyroDirect: true \}\);\s+return true;/);
  assert.ok(at < app.indexOf("const filePart = typeof kyroFileReadingMore"), "before the file-reading and walkthrough claims");
});
