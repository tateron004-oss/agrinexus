const fs = require("node:fs");
const assert = require("node:assert/strict");
const provider = require("../server/providers/lmsLiveBridgeProvider");

const server = fs.readFileSync("server.js", "utf8");
const app = fs.readFileSync("public/app.js", "utf8");

(async () => {
  assert(server.includes("/api/nexus/tools/lms/bridge/courses"));
  assert(server.includes("/api/nexus/tools/lms/bridge/enroll-prepare"));
  assert(app.includes("LMS / Koachlearn Live Bridge"));
  const courses = await provider.courses({ query: "irrigation" }, {});
  assert.equal(courses.body.status, "local_fallback");
  assert(Array.isArray(courses.body.data.cards));
  const db = { profile: {} };
  assert.equal(provider.saveCourse({ title: "Course", category: "Training" }, db, {}).body.status, "confirmation_required");
  assert.equal(provider.enrollPrepare({ title: "Course" }, {}).body.status, "prepared");
  const enroll = await provider.enroll({ courseId: "1", userId: "1" }, {});
  assert.equal(enroll.body.status, "confirmation_required");
  console.log("PASS LMS live bridge uses local fallback and keeps enrollment gated");
})();
