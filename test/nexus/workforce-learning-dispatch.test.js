"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { classifyDomains, isUnifiedBrainCommand, shouldHandleBeforeLegacy } = require("../../public/nexus-unified-brain-runtime.js");

// Found live: "courses" (plural) never matched \bcourse\b (no word boundary
// before the trailing "s"), so "What courses are available for beekeeping?"
// matched no domain at all here, even though the equivalent server-side
// gate already included the plural form -- pure client/server drift.
test("classifyDomains recognizes the plural 'courses', matching the server's own gate", () => {
  assert.deepEqual(classifyDomains("What courses are available for beekeeping?"), ["learning"]);
});

// Found live: genuine job-search/resume/course-availability requests each
// only ever match ONE domain (workforce_jobs or learning), the same
// >=2-domain rejection shape as the real-estate/communications/video-visit
// bugs already fixed -- so they fell through past this runtime into a
// decorative workflow card instead of the real jobs.search/resume.create/
// knowledge.search tools.
test("genuine job-search/resume/course requests are recognized even though they only match one classifyDomains domain", () => {
  for (const command of [
    "Find me a job in construction",
    "Search for jobs near me",
    "Give me a resume for a warehouse job",
    "What courses are available for beekeeping?"
  ]) {
    assert.equal(isUnifiedBrainCommand(command), true, command);
    assert.equal(shouldHandleBeforeLegacy(command), true, command);
  }
});

// A vague mention of work/training with no real request shape is unaffected.
test("a vague mention of work with no search/resume/course-availability shape is unaffected", () => {
  assert.equal(isUnifiedBrainCommand("I have been thinking about my career lately"), false);
});
