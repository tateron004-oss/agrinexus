"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const moodleProvider = require("../../server/providers/moodleProvider.js");

const env = {
  NEXUS_LMS_ENABLED: "true",
  NEXUS_LMS_ENROLL_ENABLED: "true",
  MOODLE_BASE_URL: "https://moodle.example.test",
  MOODLE_TOKEN: "test-token"
};

// Confirmed: this was the only raw providerResponse({status:"blocked"}) call
// site in the whole server/providers/*.js family that omitted ok:false --
// providerResponse() defaults ok to true, so a caller deciding success
// purely from `.ok` (the direct REST routes /api/nexus/tools/learning/enroll
// and /api/nexus/tools/lms/bridge/enroll, which don't go through the
// nexus_* dispatcher's separate status-regex wrapper) got HTTP 200 for
// "No enrollment was submitted."

test("enroll() reports ok:false for its still-gated 'blocked' status, not a false success", async () => {
  const result = await moodleProvider.enroll({ confirmed: true, courseId: "1", userId: "1" }, env);
  assert.equal(result.body.ok, false);
  assert.equal(result.body.status, "blocked");
});

test("enroll() still requires confirmation and required fields as before", async () => {
  const unconfirmed = await moodleProvider.enroll({ courseId: "1", userId: "1" }, env);
  assert.equal(unconfirmed.body.ok, false);

  const missingFields = await moodleProvider.enroll({ confirmed: true }, env);
  assert.equal(missingFields.body.ok, false);
  assert.equal(missingFields.body.status, "blocked");
});
