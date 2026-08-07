const assert = require("node:assert/strict");
const test = require("node:test");
const fs = require("node:fs");
const path = require("node:path");
const { BACKUP_TABLES, BACKUP_FORMAT, NEXUS_TABLES, validateBackup } = require("../../nexus/operations/backup-manifest.js");
const { WORKSPACES } = require("../../nexus/compat/workspace-migration-registry.js");

test("backup and restore controls cover the complete authoritative Nexus schema", () => {
  assert.equal(BACKUP_FORMAT, "nexus-postgres-backup-v2");
  for (const table of ["nexus_tasks", "nexus_memory_items", "nexus_worker_jobs", "nexus_documents",
    "nexus_notifications", "nexus_sync_operations", "nexus_audit_events"]) assert.ok(NEXUS_TABLES.includes(table));
  assert.equal(new Set(BACKUP_TABLES).size, BACKUP_TABLES.length);
  const complete = Object.fromEntries(BACKUP_TABLES.map(table => [table, []]));
  assert.equal(validateBackup({ format: BACKUP_FORMAT, migrationIdentity: { applied: [] }, tables: complete }), true);
  assert.throws(() => validateBackup({ format: BACKUP_FORMAT, migrationIdentity: { applied: [] }, tables: {} }), /incomplete/);
  const restore = fs.readFileSync(path.join(__dirname, "../../scripts/db-restore.js"), "utf8");
  const backup = fs.readFileSync(path.join(__dirname, "../../scripts/db-backup.js"), "utf8");
  assert.match(restore, /NEXUS_ALLOW_DATABASE_RESTORE/);
  assert.match(restore, /--verify-only/);
  assert.match(restore, /setval/);
  assert.match(backup, /repeatable read read only/);
});

test("all sixteen application workspaces have explicit cutover ownership", () => {
  assert.equal(WORKSPACES.length, 16);
  assert.equal(new Set(WORKSPACES).size, 16);
  for (const workspace of ["agriculture", "health", "telehealth", "pharmacy", "documents", "offline-queue", "provider-contact"]) {
    assert.ok(WORKSPACES.includes(workspace));
  }
});

test("Render canonical service target is exact and backed by the managed pooled database", () => {
  const blueprint = fs.readFileSync(path.join(__dirname, "../../render.yaml"), "utf8");
  assert.match(blueprint, /name: nexus-genesis-certified/);
  assert.match(blueprint, /PUBLIC_BASE_URL[\s\S]*https:\/\/nexus-genesis-certified\.onrender\.com/);
  assert.match(blueprint, /property: connectionPoolString/);
});
