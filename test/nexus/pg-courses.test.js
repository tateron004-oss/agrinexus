const test = require("node:test");
const assert = require("node:assert/strict");
const pgCourses = require("../../server/pg-courses.js");
const pgHealthIntakes = require("../../server/pg-health-intakes.js");

function stubPool(handlers) {
  const calls = [];
  return {
    calls,
    query: async (sql, params = []) => {
      calls.push({ sql, params });
      for (const [pattern, respond] of handlers) {
        if (pattern.test(sql)) return respond(params, calls);
      }
      throw new Error(`stubPool: no handler for query: ${sql}`);
    }
  };
}

test("isRealUserId only accepts a genuine UUID", () => {
  assert.equal(pgCourses.isRealUserId("cd98df4e-009b-4eb0-8e9f-e3d5ce053bf6"), true);
  assert.equal(pgCourses.isRealUserId("u_standard"), false);
});

test("upsertCourse requires code, title, and track", async () => {
  const pool = stubPool([]);
  await assert.rejects(() => pgCourses.upsertCourse(pool, { title: "x", track: "y" }), /code, title, and track are required/);
  await assert.rejects(() => pgCourses.upsertCourse(pool, { code: "x", track: "y" }), /code, title, and track are required/);
  await assert.rejects(() => pgCourses.upsertCourse(pool, { code: "x", title: "y" }), /code, title, and track are required/);
});

test("upsertCourse upserts on (tenant_id, code) using the real catalog entry's stable id", async () => {
  const pool = stubPool([
    [/^insert into courses/, params => {
      assert.equal(params[0], pgHealthIntakes.DEMO_TENANT_ID);
      assert.equal(params[1], "local-irrigation-basics");
      assert.equal(params[2], "Irrigation basics");
      assert.equal(params[3], "agriculture-training");
      return { rows: [{ id: "course-1" }] };
    }]
  ]);
  const created = await pgCourses.upsertCourse(pool, { code: "local-irrigation-basics", title: "Irrigation basics", track: "agriculture-training" });
  assert.equal(created.id, "course-1");
  assert.match(pool.calls[0].sql, /on conflict \(tenant_id, code\) do update/);
});

test("findOrCreateLearnerProfile refuses a non-UUID user id", async () => {
  const pool = stubPool([]);
  await assert.rejects(() => pgCourses.findOrCreateLearnerProfile(pool, { userId: "u_standard" }), /a real Postgres user id is required/);
});

test("findOrCreateLearnerProfile upserts on the real user id", async () => {
  const realId = "cd98df4e-009b-4eb0-8e9f-e3d5ce053bf6";
  const pool = stubPool([
    [/^insert into learner_profiles/, params => {
      assert.equal(params[0], realId);
      return { rows: [{ id: "learner-1" }] };
    }]
  ]);
  const created = await pgCourses.findOrCreateLearnerProfile(pool, { userId: realId });
  assert.equal(created.id, "learner-1");
  assert.match(pool.calls[0].sql, /on conflict \(user_id\) do update/);
});

test("upsertCourseEnrollment requires both ids", async () => {
  const pool = stubPool([]);
  await assert.rejects(() => pgCourses.upsertCourseEnrollment(pool, { courseId: "course-1" }), /learnerProfileId and courseId are required/);
  await assert.rejects(() => pgCourses.upsertCourseEnrollment(pool, { learnerProfileId: "learner-1" }), /learnerProfileId and courseId are required/);
});

test("upsertCourseEnrollment upserts status, marking completed_at only when genuinely completed", async () => {
  const pool = stubPool([
    [/^insert into course_enrollments/, params => {
      assert.equal(params[0], "learner-1");
      assert.equal(params[1], "course-1");
      assert.equal(params[2], "completed");
      return { rows: [{ id: "enrollment-1", status: "completed" }] };
    }]
  ]);
  const created = await pgCourses.upsertCourseEnrollment(pool, { learnerProfileId: "learner-1", courseId: "course-1", status: "completed" });
  assert.equal(created.status, "completed");
  assert.match(pool.calls[0].sql, /on conflict \(learner_profile_id, course_id\) do update/);
});

test("listCourses scopes to the tenant, newest first", async () => {
  const pool = stubPool([
    [/^select \* from courses/, params => {
      assert.equal(params[0], pgHealthIntakes.DEMO_TENANT_ID);
      assert.equal(params[1], 50);
      return { rows: [{ id: "course-1" }] };
    }]
  ]);
  const rows = await pgCourses.listCourses(pool);
  assert.equal(rows.length, 1);
  assert.match(pool.calls[0].sql, /order by created_at desc/);
});

test("listCourseEnrollments is unscoped (the table has no tenant_id) and orders by the table's own started_at, not created_at", async () => {
  const pool = stubPool([
    [/^select \* from course_enrollments/, params => {
      assert.equal(params[0], 50);
      return { rows: [{ id: "enrollment-1" }] };
    }]
  ]);
  const rows = await pgCourses.listCourseEnrollments(pool);
  assert.equal(rows.length, 1);
  assert.match(pool.calls[0].sql, /order by started_at desc/);
});
