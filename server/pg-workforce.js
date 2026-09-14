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

const { DEMO_TENANT_ID, pgCountryId } = require("./pg-health-intakes.js");

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function isRealUserId(userId) {
  return typeof userId === "string" && UUID_RE.test(userId);
}

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

async function recordJobApplication(pool, { candidateProfileId, workforceRoleId, status = "submitted" }) {
  if (!candidateProfileId || !workforceRoleId) throw new Error("pg-workforce: candidateProfileId and workforceRoleId are required");
  const result = await pool.query(
    `insert into job_applications (candidate_profile_id, workforce_role_id, status)
     values ($1, $2, $3)
     returning *`,
    [candidateProfileId, workforceRoleId, status]
  );
  return result.rows[0] || null;
}

module.exports = { isRealUserId, createWorkforceRole, findOrCreateCandidateProfile, recordJobApplication };
