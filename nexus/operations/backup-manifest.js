const FOUNDATION_TABLES = Object.freeze([
  "schema_migrations", "tenants", "countries", "users", "roles", "user_roles",
  "program_metrics", "facilities", "routes", "route_checkpoints", "courses",
  "learner_profiles", "course_enrollments", "certificates", "workforce_roles",
  "candidate_profiles", "job_applications", "patient_intakes", "products",
  "trade_orders", "wallet_accounts", "wallet_transactions", "ai_runs", "audit_events"
]);

// Parent tables precede children so this order is valid for both backup inspection and restore.
const NEXUS_TABLES = Object.freeze([
  "nexus_conversations", "nexus_messages", "nexus_tool_definitions", "nexus_tasks",
  "nexus_task_steps", "nexus_consents", "nexus_tool_executions", "nexus_memory_items",
  "nexus_audit_events", "nexus_worker_jobs", "nexus_job_attempts", "nexus_documents",
  "nexus_document_versions", "nexus_webhook_events", "nexus_notifications",
  "nexus_sync_operations", "nexus_outbox", "nexus_inbox"
]);

const BACKUP_TABLES = Object.freeze([...FOUNDATION_TABLES, ...NEXUS_TABLES]);
const BACKUP_FORMAT = "nexus-postgres-backup-v2";

function validateBackup(backup) {
  if (!backup || backup.format !== BACKUP_FORMAT) {
    throw new Error(`Unsupported backup format; expected ${BACKUP_FORMAT}.`);
  }
  if (!backup.migrationIdentity || !Array.isArray(backup.migrationIdentity.applied)) {
    throw new Error("Backup migration identity is missing.");
  }
  if (!backup.tables || typeof backup.tables !== "object") throw new Error("Backup tables are missing.");
  const missing = BACKUP_TABLES.filter(table => !Array.isArray(backup.tables[table]));
  if (missing.length) throw new Error(`Backup is incomplete; missing tables: ${missing.join(", ")}`);
  return true;
}

module.exports = Object.freeze({ FOUNDATION_TABLES, NEXUS_TABLES, BACKUP_TABLES, BACKUP_FORMAT, validateBackup });
