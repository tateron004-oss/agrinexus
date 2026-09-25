"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const source = fs.readFileSync(path.join(__dirname, "..", "..", "public", "app.js"), "utf8");

// Found live: nexusOpenDialogueRealCapabilityOverlap's own "still needs a
// prepare-then-confirm safety gate" exclusion matches bare \bcall\b, which
// also matches "video call" -- so a genuine "schedule a video call with a
// doctor" (a real, working capability with its own confirmation gate; see
// nexus_health_preparation's wantsTelehealthVideo in server.js) was
// misclassified the same way as an actually-risky bare "call" request, and
// routed to the decorative Open Dialogue simulator instead of the real
// backend.
test("nexusOpenDialogueRealCapabilityOverlap recognizes video-visit phrasing before the generic call/appointment exclusion can catch it", () => {
  const start = source.indexOf("function nexusOpenDialogueRealCapabilityOverlap(");
  assert.ok(start > 0, "could not locate nexusOpenDialogueRealCapabilityOverlap in public/app.js");
  const end = source.indexOf("\nfunction ", start + 10);
  const body = source.slice(start, end);
  // eslint-disable-next-line no-new-func -- reconstructing the real, already-reviewed function from source, not arbitrary input
  const overlap = new Function(`"use strict"; ${body}; return nexusOpenDialogueRealCapabilityOverlap;`)();

  for (const command of ["Schedule a video call with a doctor", "Book a video visit", "I need a video consultation", "Start a virtual visit"]) {
    assert.equal(overlap(command), true, command);
  }
  // A genuinely risky bare call/appointment request must still be excluded.
  assert.equal(overlap("Call my provider"), false);
  assert.equal(overlap("Schedule an appointment"), false);
});
