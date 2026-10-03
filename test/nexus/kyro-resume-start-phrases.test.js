"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { isResumeBuildRequest } = require("../../public/kyro-intake-forms.js");

// Found live: saying a natural sentence opened the old manual typing form (useless to someone who cannot
// type) instead of starting the voice interview, because only a strict "verb first" pattern started it.

test("natural spoken ways of asking for a resume start the voice interview", () => {
  for (const phrase of [
    "Hey Kyro, make a resume",
    "Hey Kyro can you help me build a résumé",
    "Kairo help me with my resume",
    "Chatroom make a resume",
    "Kyro, I would like to build a resume",
    "I'd like to create a resume",
    "I would like a resume",
    "open the resume builder",
    "Open the résumé builder please",
    "resume builder",
    "let's do my resume",
    "start my resume",
    "I need a resume",
    "can you make me a resume",
    "I want to write my CV",
    "Okay, so I need help with my résumé",
    "please make me a curriculum vitae"
  ]) assert.equal(isResumeBuildRequest(phrase), true, phrase);
});

test("questions, the verb 'resume', and other mentions do NOT start the interview", () => {
  for (const phrase of [
    "how do I write a resume",
    "what is a resume",
    "what should I put in a resume",
    "should I make a resume",
    "resume my lesson",
    "resume playing music",
    "continue my resume",
    "I sent my resume yesterday",
    "my resume is on the table",
    "I have a resume already",
    "Hey Kyro, what is the weather",
    "",
    "   "
  ]) assert.equal(isResumeBuildRequest(phrase), false, JSON.stringify(phrase));
});

test("a long rambling sentence that happens to mention a resume does not start it", () => {
  assert.equal(isResumeBuildRequest("I was talking to my cousin yesterday about the farm and the market and he said I should maybe make a resume someday when I have time"), false);
});
