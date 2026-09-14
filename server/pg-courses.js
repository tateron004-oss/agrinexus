"use strict";

// Real relational course-progress storage against foundation/migrations'
// `courses`, `learner_profiles`, and `course_enrollments` tables, used only
// when COURSE_STORE=postgres. Shadow-writes alongside the JSON-blob
// db.profile.nexusLearningProgress record created by
// learningBridgeProvider.markProgress() -- Nexus's own honestly-labeled
// internal "started/completed" tracker, distinct from claiming enrollment
// in or completion of an external LMS (same distinction preserved here:
// this is Nexus's own real record of what the learner told it, not a claim
// about a real external course).

const { DEMO_TENANT_ID } = require("./pg-health-intakes.js");

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function isRealUserId(userId) {
  return typeof userId === "string" && UUID_RE.test(userId);
}

async function upsertCourse(pool, { code, title, track, tenantId = DEMO_TENANT_ID }) {
  if (!code || !title || !track) throw new Error("pg-courses: code, title, and track are required");
  const result = await pool.query(
    `insert into courses (tenant_id, code, title, track)
     values ($1, $2, $3, $4)
     on conflict (tenant_id, code) do update set title = excluded.title, track = excluded.track, updated_at = now()
     returning *`,
    [tenantId, code, title, track]
  );
  return result.rows[0] || null;
}

async function findOrCreateLearnerProfile(pool, { userId }) {
  if (!isRealUserId(userId)) throw new Error("pg-courses: a real Postgres user id is required for a learner profile");
  const result = await pool.query(
    `insert into learner_profiles (user_id)
     values ($1)
     on conflict (user_id) do update set updated_at = now()
     returning *`,
    [userId]
  );
  return result.rows[0] || null;
}

async function upsertCourseEnrollment(pool, { learnerProfileId, courseId, status = "started" }) {
  if (!learnerProfileId || !courseId) throw new Error("pg-courses: learnerProfileId and courseId are required");
  const result = await pool.query(
    `insert into course_enrollments (learner_profile_id, course_id, status, completed_at)
     values ($1, $2, $3, case when $3 = 'completed' then now() else null end)
     on conflict (learner_profile_id, course_id) do update set
       status = excluded.status,
       completed_at = case when excluded.status = 'completed' then coalesce(course_enrollments.completed_at, now()) else course_enrollments.completed_at end
     returning *`,
    [learnerProfileId, courseId, status]
  );
  return result.rows[0] || null;
}

module.exports = { isRealUserId, upsertCourse, findOrCreateLearnerProfile, upsertCourseEnrollment };
