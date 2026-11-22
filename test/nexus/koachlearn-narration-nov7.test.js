"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const narration = require("../../scripts/koachlearn-narration.js");

// 7 November 2026: the Koach Learn lesson videos are read aloud, in the course's own language.

test("a slide is read without its grey top line, bullet marks or direction marks, and each line ends with a stop", () => {
  const blocks = [
    { text: "Clean Water  |  Lesson 1 of 6" },
    { text: "Why water makes people ill" },
    { text: "•  Dirty water carries germs" },
    { text: "‏•  Boil it for one minute." }
  ];
  assert.equal(narration.narrationLines(blocks), "Why water makes people ill. Dirty water carries germs. Boil it for one minute.");
  assert.equal(narration.narrationLines([{ text: "only the top line" }]), "");
  assert.equal(narration.narrationLines([]), "");
});

test("every one of the ten languages has a voice, the African languages the services cover are routed to the right service, and no voice is shared by mistake", () => {
  const langs = ["en", "es", "fr", "pt", "ar", "sw", "am", "ha", "yo", "ig"];
  for (const l of langs) assert.ok(narration.VOICES[l] && narration.VOICES[l].voice, l);
  for (const l of ["ha", "yo", "ig"]) assert.equal(narration.VOICES[l].provider, "spitch", l);
  for (const l of ["en", "es", "fr", "pt", "ar", "sw", "am"]) assert.equal(narration.VOICES[l].provider, "azure", l);
  assert.match(narration.VOICES.sw.voice, /^sw-KE-/);
  assert.match(narration.VOICES.am.voice, /^am-ET-/);
});

test("a spoken line is kept under a name made from its language, voice and words, so the same line is never paid for twice and a changed line is spoken again", () => {
  const a = narration.fileFor("sw", "Maji safi ni muhimu.");
  assert.equal(a, narration.fileFor("sw", "Maji safi ni muhimu."));
  assert.notEqual(a, narration.fileFor("sw", "Maji safi ni muhimu sana."));
  assert.notEqual(narration.fileFor("sw", "Hello."), narration.fileFor("en", "Hello."));
  assert.match(a, /koachlearn-audio[\\/]sw[\\/][0-9a-f]{24}\.mp3$/);
  assert.equal(narration.cachedAudio("sw", ""), null, "an empty slide is not spoken");
  assert.equal(narration.cachedAudio("sw", "A line that has never been spoken, 7 November test."), null);
});
