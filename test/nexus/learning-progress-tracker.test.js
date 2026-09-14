const test = require("node:test");
const assert = require("node:assert/strict");
const learningBridge = require("../../server/providers/learningBridgeProvider.js");

function freshDb() {
  return { profile: {} };
}

const RESOURCE = {
  resourceId: "local-irrigation-basics",
  title: "Irrigation basics",
  category: "agriculture-training",
  level: "Beginner",
  duration: "20 minutes"
};

test("markProgress requires confirmation, like every other provider action", () => {
  const db = freshDb();
  const result = learningBridge.markProgress({ ...RESOURCE }, db, { NEXUS_LEARNING_BRIDGE_ENABLED: "true" });
  assert.notEqual(result.body.status, "completed");
  assert.equal((db.profile.nexusLearningProgress || []).length, 0, "an unconfirmed call must not record anything");
});

test("markProgress defaults to 'started' and never claims external enrollment or a certificate", () => {
  const db = freshDb();
  const result = learningBridge.markProgress({ ...RESOURCE, confirmed: true }, db, { NEXUS_LEARNING_BRIDGE_ENABLED: "true" });
  assert.equal(result.body.status, "completed");
  assert.equal(result.body.data.progress.status, "started");
  assert.equal(result.body.data.progress.noExternalEnrollmentClaimed, true);
  assert.equal(result.body.data.progress.noCertificateIssued, true);
  assert.match(result.body.message, /does not enroll you in, or claim completion of, any external course or LMS/);
  assert.equal(db.profile.nexusLearningProgress.length, 1);
});

test("marking the same resource again updates the existing entry instead of creating a duplicate", () => {
  const db = freshDb();
  learningBridge.markProgress({ ...RESOURCE, progressStatus: "started", confirmed: true }, db, { NEXUS_LEARNING_BRIDGE_ENABLED: "true" });
  const second = learningBridge.markProgress({ ...RESOURCE, progressStatus: "completed", confirmed: true }, db, { NEXUS_LEARNING_BRIDGE_ENABLED: "true" });
  assert.equal(db.profile.nexusLearningProgress.length, 1, "the same resourceId must update in place, not duplicate");
  assert.equal(second.body.data.progress.status, "completed");
  assert.ok(second.body.data.progress.completedAt, "a completed entry must record when it was completed");
});

test("markProgress is distinct from saveResource's bookmark list -- the two never share storage", () => {
  const db = freshDb();
  learningBridge.saveResource({ ...RESOURCE, confirmed: true }, db);
  learningBridge.markProgress({ ...RESOURCE, confirmed: true }, db, { NEXUS_LEARNING_BRIDGE_ENABLED: "true" });
  assert.equal(db.profile.nexusSavedLearningResources.length, 1);
  assert.equal(db.profile.nexusLearningProgress.length, 1);
});

test("markProgress still enforces the sensitive-data block like every other action here", () => {
  const db = freshDb();
  const result = learningBridge.markProgress({ resourceId: "x", title: "Patient diagnosis review", category: "health", confirmed: true }, db, { NEXUS_LEARNING_BRIDGE_ENABLED: "true" });
  assert.notEqual(result.body.status, "completed");
  assert.equal((db.profile.nexusLearningProgress || []).length, 0);
});
