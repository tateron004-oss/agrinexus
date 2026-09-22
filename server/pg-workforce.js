"use strict";

// Real relational workforce storage against foundation/migrations'
// `workforce_roles`, `candidate_profiles`, and `job_applications` tables,
// used only when WORKFORCE_STORE=postgres. Shadow-writes alongside the
// JSON-blob nexusPersistentOperations store, which stays authoritative for
// the app's own UI reads (same additive rollout pattern as
// server/pg-health-intakes.js and server/pg-audit-events.js).
//
// job_applications.candidate_profile_id requires a real candidate_profiles
// row, which itself requires a real Postgres users.id -- the blob's demo
// accounts (AUTH_STORE=blob, the default) don't have one, so that half of
// this module only activates once AUTH_STORE=postgres is also turned on.
// Creating a workforce_roles row (the job posting itself) needs no user at
// all and works regardless of the auth store in use.

const { DEMO_TENANT_ID, pgCountryId, isRealUserId } = require("./pg-health-intakes.js");

async function createWorkforceRole(pool, { title, level, countryId, minReadiness, tenantId = DEMO_TENANT_ID }) {
  if (!title || !level) throw new Error("pg-workforce: title and level are required");
  const pgCountry = countryId ? pgCountryId(countryId) : null;
  const result = await pool.query(
    `insert into workforce_roles (tenant_id, title, level, country_id, min_readiness)
     values ($1, $2, $3, $4, $5)
     returning *`,
    [tenantId, title, level, pgCountry, Number.isFinite(minReadiness) ? minReadiness : 0]
  );
  return result.rows[0] || null;
}

async function findOrCreateCandidateProfile(pool, { userId }) {
  if (!isRealUserId(userId)) throw new Error("pg-workforce: a real Postgres user id is required for a candidate profile");
  const result = await pool.query(
    `insert into candidate_profiles (user_id)
     values ($1)
     on conflict (user_id) do update set updated_at = now()
     returning *`,
    [userId]
  );
  return result.rows[0] || null;
}

// job_applications has no natural unique key to ON CONFLICT against (unlike
// its siblings trade_orders/course_enrollments), because one real
// application is expected to have its status updated over time by separate
// calls, not re-derived from a stable natural key. The caller tracks the
// real row's id itself (on its own persistent record) and passes it back in
// as `id` on every subsequent call so this updates the same row instead of
// inserting a new one each time.
async function upsertJobApplication(pool, { id, candidateProfileId, workforceRoleId, status = "submitted" }) {
  if (!candidateProfileId || !workforceRoleId) throw new Error("pg-workforce: candidateProfileId and workforceRoleId are required");
  if (id) {
    const updated = await pool.query(
      `update job_applications set status = $2, updated_at = now() where id = $1 returning *`,
      [id, status]
    );
    if (updated.rows[0]) return updated.rows[0];
    // The tracked id no longer exists (e.g. the row was deleted out-of-band)
    // -- fall through and create a fresh one rather than silently no-op.
  }
  const result = await pool.query(
    `insert into job_applications (candidate_profile_id, workforce_role_id, status)
     values ($1, $2, $3)
     returning *`,
    [candidateProfileId, workforceRoleId, status]
  );
  return result.rows[0] || null;
}

async function listWorkforceRoles(pool, { tenantId = DEMO_TENANT_ID, limit = 50 } = {}) {
  const result = await pool.query(
    "select * from workforce_roles where tenant_id = $1 order by created_at desc limit $2",
    [tenantId, limit]
  );
  return result.rows || [];
}

async function listJobApplications(pool, { limit = 50 } = {}) {
  // job_applications has no tenant_id column of its own (scoped indirectly
  // via workforce_roles/candidate_profiles) -- listed globally, same as
  // pg-audit-events.js's listing functions are tenant-scoped where the table
  // actually carries that column and unscoped where it doesn't.
  const result = await pool.query(
    "select * from job_applications order by submitted_at desc limit $1",
    [limit]
  );
  return result.rows || [];
}

module.exports = { isRealUserId, createWorkforceRole, findOrCreateCandidateProfile, upsertJobApplication, listWorkforceRoles, listJobApplications };
