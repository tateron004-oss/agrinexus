"use strict";

// Real relational audit-log storage against foundation/migrations'
// `audit_events` and `ai_runs` tables, used only when AUDIT_EVENT_STORE=postgres.
// Shadow-writes alongside the JSON-blob db.nexusPilotAuditEvents /
// db.profile.integrationEvents, which stay authoritative for the app's own
// UI reads -- this is an additive, verifiable real record, not yet a full
// cutover (same rollout pattern as server/pg-health-intakes.js).

const DEMO_TENANT_ID = "00000000-0000-0000-0000-000000000001";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function asEntityId(value) {
  return typeof value === "string" && UUID_RE.test(value) ? value : null;
}

async function recordAuditEvent(pool, { action, entityType, entityId, actorEmail = null, userId = null, metadata = {}, tenantId = DEMO_TENANT_ID }) {
  if (!action || !entityType) throw new Error("pg-audit-events: action and entityType are required");
  const result = await pool.query(
    `insert into audit_events (tenant_id, user_id, actor_email, action, entity_type, entity_id, metadata)
     values ($1, $2, $3, $4, $5, $6, $7::jsonb)
     returning *`,
    [tenantId, userId, actorEmail, action, entityType, asEntityId(entityId), JSON.stringify(metadata || {})]
  );
  return result.rows[0] || null;
}

async function recordAiRun(pool, { runType, provider, model = null, prompt = {}, responseText, responseMetadata = {}, userId = null, tenantId = DEMO_TENANT_ID }) {
  if (!runType || !provider || !responseText) throw new Error("pg-audit-events: runType, provider, and responseText are required");
  const result = await pool.query(
    `insert into ai_runs (tenant_id, user_id, run_type, provider, model, prompt, response_text, response_metadata)
     values ($1, $2, $3, $4, $5, $6::jsonb, $7, $8::jsonb)
     returning *`,
    [tenantId, userId, runType, provider, model, JSON.stringify(prompt || {}), responseText, JSON.stringify(responseMetadata || {})]
  );
  return result.rows[0] || null;
}

async function listAuditEvents(pool, { tenantId = DEMO_TENANT_ID, limit = 50 } = {}) {
  const result = await pool.query(
    "select * from audit_events where tenant_id = $1 order by created_at desc limit $2",
    [tenantId, limit]
  );
  return result.rows || [];
}

async function listAiRuns(pool, { tenantId = DEMO_TENANT_ID, limit = 50 } = {}) {
  const result = await pool.query(
    "select * from ai_runs where tenant_id = $1 order by created_at desc limit $2",
    [tenantId, limit]
  );
  return result.rows || [];
}

module.exports = { DEMO_TENANT_ID, recordAuditEvent, recordAiRun, listAuditEvents, listAiRuns };
