"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { isUnifiedBrainCommand, shouldHandleBeforeLegacy } = require("../../public/nexus-unified-brain-runtime.js");

// Found live: "Schedule a video visit with a doctor for my rash" only ever
// matched ONE classifyDomains domain ("healthcare", via "doctor"), so the
// >=2-domain rule rejected it -- the same shape as the real-estate/
// communications bugs already fixed. It fell through past this runtime into
// NexusHealthcareCollaborationRuntime's decorative "prepared locally,
// execution disabled" simulator, instead of reaching the real, working
// telehealth-video capability (nexus_health_preparation's
// wantsTelehealthVideo, which creates a real video room). Mirrors that exact
// server-side regex, so client and server agree.
test("genuine video-visit scheduling commands are recognized even though they only match one classifyDomains domain", () => {
  for (const command of [
    "Schedule a video visit with a doctor for my rash",
    "Book a video call with a provider",
    "I need a video consultation",
    "Start a virtual visit"
  ]) {
    assert.equal(isUnifiedBrainCommand(command), true, command);
    assert.equal(shouldHandleBeforeLegacy(command), true, command);
  }
});

// An in-person appointment request must still behave exactly as before --
// this bypass is scoped to video-visit phrasing only, not appointments
// generally (a real generic appointment-booking backend doesn't exist).
test("a plain in-person appointment request is unaffected by the new bypass", () => {
  assert.equal(isUnifiedBrainCommand("Book an appointment with my doctor"), false);
});
