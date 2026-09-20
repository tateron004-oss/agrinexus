"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { conversationFollowUpFlags } = require("../../server/nexus-conversation-followup-flags.js");

const anyFlag = text => Object.values(conversationFollowUpFlags(text)).some(Boolean);
const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

// Production, spoken router, 2026-09-19: with a pending action, "Why do maize leaves turn yellow?" was answered
// "The pending action is Match workforce role..."; "... Answer with current sources." got a weather-source note.
test("ordinary questions and requests that merely contain a trigger word are not follow-ups", () => {
  for (const text of ["why do maize leaves turn yellow?", "why do maize leaves turn yellow? answer with current sources.",
    "explain what a soil pH of 5.2 means for beans", "show me a route from nairobi to nakuru", "show me current images of healthy maize leaves",
    "find agriculture jobs with sources", "find pharmacy support for metformin and show a safety response with sources.",
    "why is the price of maize so high in kenya this year", "what evidence supports crop rotation for beans in kenya",
    "continue my farming lesson on soil health and rotation for next season"])
    assert.equal(anyFlag(text), false, text);
});

test("real follow-ups still work: they are short and refer back", () => {
  const cases = [
    ["why?", "wantsExplanation"], ["why", "wantsExplanation"], ["explain", "wantsExplanation"], ["explain that", "wantsExplanation"],
    ["why is that?", "wantsExplanation"], ["why did you say that", "wantsExplanation"], ["explain it to me", "wantsExplanation"],
    ["repeat that", "wantsExplanation"], ["say that again", "wantsExplanation"], ["what do you mean", "wantsExplanation"], ["summarize that", "wantsExplanation"],
    ["where did you get that", "wantsSource"], ["what source", "wantsSource"], ["sources?", "wantsSource"], ["cite that", "wantsSource"], ["what are your sources", "wantsSource"],
    ["take me there", "wantsNavigation"], ["open that", "wantsNavigation"], ["show me that", "wantsNavigation"], ["show me more", "wantsNavigation"], ["go there", "wantsNavigation"],
    ["continue", "wantsNext"], ["next step", "wantsNext"], ["do that", "wantsNext"], ["proceed", "wantsNext"], ["let's do that", "wantsNext"],
    ["where are we", "wantsMission"], ["what are we doing", "wantsMission"], ["mission status", "wantsMission"]
  ];
  for (const [text, flag] of cases) assert.equal(conversationFollowUpFlags(text)[flag], true, `${text} -> ${flag}`);
});

test("the flags are exactly the five the router destructures, and the old bare-keyword tests are gone", () => {
  assert.deepEqual(Object.keys(conversationFollowUpFlags("x")).sort(), ["wantsExplanation", "wantsMission", "wantsNavigation", "wantsNext", "wantsSource"]);
  assert.match(server, /const \{ wantsExplanation, wantsSource, wantsMission, wantsNavigation, wantsNext \} = conversationFollowUpFlags\(lower\);/);
  assert.doesNotMatch(server, /const wantsExplanation = /);
  assert.doesNotMatch(server, /const wantsNavigation = \/\\b\(take me there\|open that\|show me\|/);
});
