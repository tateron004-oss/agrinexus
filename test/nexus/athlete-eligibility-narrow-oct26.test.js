"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const athlete = require("../../public/kyro-athlete-topics.js");
const africa = require("../../nexus/knowledge/africa-small-business.js");

// Found on 26 October 2026 in a full live pass of every walkthrough: "Walk me through borrowing from the Hustler Fund in Kenya" and "Walk me through getting small business support from MSEA in Kenya" opened the NCAA ELIGIBILITY CENTER walkthrough
// (an athlete's) on the screen. The voice model had rewritten the request into a long sentence for the tool ("... including eligibility, application, repayment, and limits ..."), and the athlete matcher took any text with the bare word "eligibility".
// The word now needs a sport word with it (or one of the words only athletes use); the Kenya guide takes both requests.
const REWRITES = [
  "Walk me through borrowing from the Hustler Fund in Kenya. Provide official government sources and the steps, including eligibility, application, repayment, and limits where available. I only guide; do not file, apply, pay, or send anything.",
  "Walk me through getting small business support from MSEA in Kenya. Provide the official agency sources and steps, including where to confirm eligibility and applications. I only guide; do not file, apply, pay, or send anything.",
  "How do I become eligible for Medicaid?", "What is the eligibility requirement for a small business loan?", "Am I eligible for the earned income tax credit?"
];

test("a request that only says 'eligibility' is not an athlete question", () => {
  for (const say of REWRITES) assert.equal(athlete.athleteTopic(say), null, say);
});

test("the Kenya guide takes the two rewritten requests, as it takes the person's own short words", () => {
  assert.equal(africa.africaTopic(REWRITES[0], { timeZone: "America/Chicago" }), "ke-funding");
  assert.equal(africa.africaTopic(REWRITES[1], { timeZone: "America/Chicago" }), "ke-support");
  assert.equal(africa.africaTopic("Walk me through borrowing from the Hustler Fund in Kenya.", { timeZone: "America/Chicago" }), "ke-funding");
});

test("an athlete's eligibility question is still an athlete question", () => {
  for (const say of ["What is NCAA eligibility?", "How do I check my eligibility to play college football?", "What is the eligibility center?", "Am I eligible for a scholarship as an athlete?", "Will transferring cost me eligibility in college sports?"]) {
    assert.ok(athlete.athleteTopic(say), say);
  }
});
