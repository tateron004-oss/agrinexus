"use strict";

// Real relational health-intake storage against foundation/migrations'
// `patient_intakes` table, used only when HEALTH_INTAKE_STORE=postgres.
// Shadow-writes alongside the JSON-blob db.profile.healthIntakes, which
// stays authoritative for the app's UI/voice reads — this table is an
// additive, verifiable real record, not yet a full cutover.

const DEMO_TENANT_ID = "00000000-0000-0000-0000-000000000001";

const BLOB_COUNTRY_TO_PG_ID = {
  nigeria: "10000000-0000-0000-0000-000000000001",
  kenya: "10000000-0000-0000-0000-000000000002",
  egypt: "10000000-0000-0000-0000-000000000003",
  drc: "10000000-0000-0000-0000-000000000004"
};

function pgCountryId(blobCountryId) {
  return BLOB_COUNTRY_TO_PG_ID[String(blobCountryId || "").toLowerCase()] || null;
}

// Shared by every pg-*.js module that needs to confirm a value is a real
// Postgres-assigned id (not one of the blob's own, deliberately distinct,
// synthetic ids -- see buildBlobShadowFromPostgresUser in pg-users.js).
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function isRealUserId(userId) {
  return typeof userId === "string" && UUID_RE.test(userId);
}

async function createIntake(pool, { countryId, patientRef, needSummary, riskLevel, tenantId = DEMO_TENANT_ID }) {
  const pgCountry = pgCountryId(countryId);
  // Throw rather than resolve null: the caller's shadow-write wrapper only
  // logs on a rejected promise, so a silent null here would mean an
  // unmapped country (e.g. one the blob supports but the Postgres seed data
  // doesn't yet) fails with zero observability.
  if (!pgCountry) throw new Error(`pg-health-intakes: no Postgres country mapping for "${countryId}"`);
  const result = await pool.query(
    `insert into patient_intakes (tenant_id, country_id, patient_ref, need_summary, risk_level, queue_status)
     values ($1, $2, $3, $4, $5, 'Intake')
     on conflict (tenant_id, patient_ref) do update set
       need_summary = excluded.need_summary,
       risk_level = excluded.risk_level,
       updated_at = now()
     returning *`,
    [tenantId, pgCountry, patientRef, needSummary, riskLevel]
  );
  return result.rows[0] || null;
}

async function listIntakes(pool, { tenantId = DEMO_TENANT_ID } = {}) {
  const result = await pool.query(
    `select pi.*, c.name as country_name
     from patient_intakes pi
     join countries c on c.id = pi.country_id
     where pi.tenant_id = $1
     order by pi.created_at desc`,
    [tenantId]
  );
  return result.rows || [];
}

module.exports = { DEMO_TENANT_ID, BLOB_COUNTRY_TO_PG_ID, pgCountryId, isRealUserId, createIntake, listIntakes };
