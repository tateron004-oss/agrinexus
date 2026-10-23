"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const money = require("../../nexus/knowledge/money-walkthroughs.js");
const athlete = require("../../nexus/knowledge/athlete-walkthroughs.js");
const california = require("../../nexus/knowledge/california-walkthroughs.js");
const us = require("../../nexus/knowledge/us-walkthroughs.js");
const pr = require("../../nexus/knowledge/pr-walkthroughs.js");
const Walkthrough = require("../../public/kyro-walkthrough.js");

// The earlier walkthroughs (money, athletes, California, the United States, public relations) get the same two teaching lines as the new ones: when the step is finished, and what the new words mean (22 October 2026: "hold people's hands").
const ALL = [
  ...Object.keys(money.WALKTHROUGHS).map(id => money.moneyWalkthrough(id)),
  ...Object.keys(athlete.WALKTHROUGHS).map(id => athlete.athleteWalkthrough(id)),
  ...Object.keys(california.WALKTHROUGHS).map(id => california.californiaWalkthrough(id)),
  ...Object.keys(us.WALKTHROUGHS).map(id => us.usWalkthrough(id)),
  ...Object.keys(pr.WALKTHROUGHS).map(id => pr.prWalkthrough(id))
];

test("every step of every earlier walkthrough says when it is finished, and explains the words it uses that a beginner would not know", () => {
  assert.ok(ALL.length >= 64, `all the earlier walkthroughs are covered (${ALL.length})`);
  for (const walk of ALL) {
    assert.ok(walk, "built");
    for (const step of walk.steps) {
      assert.ok(typeof step.done === "string" && step.done.length >= 12 && step.done.length <= 220, `${walk.id} / ${step.title}: finished-when line (${(step.done || "").length})`);
      assert.doesNotMatch(step.done, /^You are finished with this step when/i, `${walk.id} / ${step.title}`);
      assert.ok(Array.isArray(step.words) && step.words.length <= 4 && step.words.every(word => word.term.length >= 2 && word.term.length <= 60 && word.means.length >= 10 && word.means.length <= 220), `${walk.id} / ${step.title}: words`);
    }
    // a walkthrough that uses jargon explains some of it
    assert.ok(walk.steps.some(step => step.words.length > 0), `${walk.id}: at least one word is explained`);
    const clean = Walkthrough.sanitize(walk);
    assert.deepEqual(clean.steps.map(step => step.done), walk.steps.map(step => step.done), `${walk.id}: the page keeps the finished line`);
  }
});
