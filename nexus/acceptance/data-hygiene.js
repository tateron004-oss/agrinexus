"use strict";

// Production-acceptance data hygiene (see docs/ACCEPTANCE_DATA_HYGIENE.md).
//
// Every production deploy drives the live site as the production-acceptance principal (the active membership holding
// 'acceptance:identity', see acceptancePrincipal() in nexus/compat/server-runtime-adapter.js). Each probe creates fresh
// records -- a checklist, a document, a reminder, health and operation records -- and nothing ever removed them, so the
// principal slowly walked into the per-account limits that protect real users (the lists cap is 200). When the lists cap
// was reached the `lists` probe started failing on every attempt of every deploy.
//
// This module removes the acceptance run's OWN leftovers. The safety rules are structural, not a convention:
//   1. The principal is never taken from a caller. cleanup() re-verifies, in the database, that the tenant/user it was
//      handed is an active holder of 'acceptance:identity', and refuses (acceptance_cleanup_refused) otherwise.
//   2. The acceptance principal is a real user row, so owner scoping alone is not enough. A row is touched only when it
//      belongs to a task that the acceptance route itself created: the task's correlation id has the exact shape
//      `acceptance-<uuid>` (nexus/compat/server-runtime-adapter.js builds `acceptance-${crypto.randomUUID()}`). Records
//      with no task, or tasks created by ordinary requests, are never matched.
//   3. Only an explicit allowlist of record types is eligible, and only rows older than a safety window and outside the
//      newest N of their type (so the evidence of the run in flight always survives).
//   4. Nothing is hard-deleted: records and documents are soft-deleted (deleted_at, exactly what the product's own
//      "archive" does) and queued reminders are cancelled (the product's own cancel). Every UPDATE re-asserts tenant,
//      owner and the acceptance-task condition, so a mistake in candidate selection still cannot widen the blast radius.
//   5. Work per call is bounded (batch size x batch count); the result reports counts only, never record contents.

const ACCEPTANCE_PERMISSION = "acceptance:identity";
// Exactly the shape the behavior-turn route generates: `acceptance-${crypto.randomUUID()}`. Used with Postgres' regex operator.
const ACCEPTANCE_CORRELATION_PATTERN = "^acceptance-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$";

const DEFAULTS = Object.freeze({ olderThanMinutes: 30, retainPerType: 10 });
const BOUNDS = Object.freeze({ olderThanMinutes: [10, 1440], retainPerType: [1, 100] });
const BATCH_SIZE = 200;
const MAX_BATCHES = 5;

// Every record type the exact-release probes create for the acceptance principal (nexus_records). The workspace
// "authoritative-workspace-state" bookkeeping rows are deliberately NOT here: they are uncapped, tied to task history and
// audit retention, and removing them is not needed to keep any cap clear.
const RECORD_TARGETS = Object.freeze([
  { label: "lists", workspaceId: "lists", recordType: "checklist" },                                   // MAX_LISTS_PER_ACCOUNT = 200
  { label: "health_observations", workspaceId: "health-records", recordType: "health_observation" },
  { label: "chronic_readings", workspaceId: "health-records", recordType: "chronic_disease_reading" },
  { label: "chronic_intakes", workspaceId: "health-records", recordType: "chronic_disease_intake" },
  { label: "telehealth_intakes", workspaceId: "telehealth-intakes", recordType: "telehealth_intake" },
  { label: "field_operation_plans", workspaceId: "field-operations", recordType: "field_operation_plan" }
]);
const TARGET_LABELS = Object.freeze([...RECORD_TARGETS.map(item => item.label), "documents", "reminders"]);

function refused(message) { return Object.assign(new Error(message), { code: "acceptance_cleanup_refused", status: 403 }); }
function clamp(value, [low, high], fallback) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.min(Math.max(Math.floor(number), low), high) : fallback;
}
function rowsOf(result) { return Array.isArray(result) ? result : (result?.rows || []); }

// The SQL below is fixed text. Only values (never identifiers) are parameters. The leading comment is a stable tag.
const SQL = Object.freeze({
  principal: `/* acceptance-cleanup:principal */
    select 1 as ok from nexus_organization_memberships
    where tenant_id=$1 and user_id=$2 and state='active' and $3=any(permissions) limit 1`,
  recordsKeep: `/* acceptance-cleanup:records:keep */
    select r.record_id from nexus_records r join nexus_tasks t on t.task_id=r.task_id and t.tenant_id=r.tenant_id
    where r.tenant_id=$1 and r.owner_id=$2 and r.workspace_id=$3 and r.record_type=$4 and r.deleted_at is null
      and t.owner_id=$2 and t.correlation_id ~ $5
    order by r.created_at desc, r.record_id desc limit $6`,
  recordsCandidates: `/* acceptance-cleanup:records:candidates */
    select r.record_id from nexus_records r join nexus_tasks t on t.task_id=r.task_id and t.tenant_id=r.tenant_id
    where r.tenant_id=$1 and r.owner_id=$2 and r.workspace_id=$3 and r.record_type=$4 and r.deleted_at is null
      and t.owner_id=$2 and t.correlation_id ~ $5 and r.created_at < $6 and not (r.record_id = any($7::text[]))
    order by r.created_at asc, r.record_id asc limit $8`,
  recordsRemove: `/* acceptance-cleanup:records:remove */
    update nexus_records set deleted_at=now(), state='deleted', updated_at=now()
    where tenant_id=$1 and owner_id=$2 and workspace_id=$3 and record_type=$4 and deleted_at is null
      and record_id = any($5::text[])
      and task_id in (select task_id from nexus_tasks where tenant_id=$1 and owner_id=$2 and correlation_id ~ $6)
    returning record_id`,
  documentsKeep: `/* acceptance-cleanup:documents:keep */
    select d.document_id as record_id from nexus_documents d join nexus_tasks t on t.task_id=d.task_id and t.tenant_id=d.tenant_id
    where d.tenant_id=$1 and d.owner_id=$2 and d.deleted_at is null and t.owner_id=$2 and t.correlation_id ~ $3
    order by d.created_at desc, d.document_id desc limit $4`,
  documentsCandidates: `/* acceptance-cleanup:documents:candidates */
    select d.document_id as record_id from nexus_documents d join nexus_tasks t on t.task_id=d.task_id and t.tenant_id=d.tenant_id
    where d.tenant_id=$1 and d.owner_id=$2 and d.deleted_at is null and t.owner_id=$2 and t.correlation_id ~ $3
      and d.created_at < $4 and not (d.document_id = any($5::text[]))
    order by d.created_at asc, d.document_id asc limit $6`,
  documentsRemove: `/* acceptance-cleanup:documents:remove */
    update nexus_documents set deleted_at=now(), updated_at=now()
    where tenant_id=$1 and owner_id=$2 and deleted_at is null and document_id = any($3::text[])
      and task_id in (select task_id from nexus_tasks where tenant_id=$1 and owner_id=$2 and correlation_id ~ $4)
    returning document_id as record_id`,
  remindersKeep: `/* acceptance-cleanup:reminders:keep */
    select n.notification_id as record_id from nexus_notifications n join nexus_tasks t on t.task_id=n.task_id and t.tenant_id=n.tenant_id
    where n.tenant_id=$1 and n.user_id=$2 and n.state='queued' and (n.content->>'reminderText') is not null
      and t.owner_id=$2 and t.correlation_id ~ $3
    order by n.created_at desc, n.notification_id desc limit $4`,
  remindersCandidates: `/* acceptance-cleanup:reminders:candidates */
    select n.notification_id as record_id from nexus_notifications n join nexus_tasks t on t.task_id=n.task_id and t.tenant_id=n.tenant_id
    where n.tenant_id=$1 and n.user_id=$2 and n.state='queued' and (n.content->>'reminderText') is not null
      and t.owner_id=$2 and t.correlation_id ~ $3 and n.created_at < $4 and not (n.notification_id = any($5::text[]))
    order by n.created_at asc, n.notification_id asc limit $6`,
  remindersRemove: `/* acceptance-cleanup:reminders:remove */
    update nexus_notifications set state='cancelled'
    where tenant_id=$1 and user_id=$2 and state='queued' and (content->>'reminderText') is not null
      and notification_id = any($3::text[])
      and task_id in (select task_id from nexus_tasks where tenant_id=$1 and owner_id=$2 and correlation_id ~ $4)
    returning notification_id as record_id`
});

function createAcceptanceCleanup({ db, logger = console, now = () => new Date() } = {}) {
  if (!db?.query) throw new Error("A database runtime is required.");

  async function assertAcceptancePrincipal(principal) {
    if (!principal?.tenantId || !principal?.userId) throw refused("Cleanup is only available to the production acceptance principal.");
    const rows = rowsOf(await db.query(SQL.principal, [principal.tenantId, principal.userId, ACCEPTANCE_PERMISSION]));
    if (!rows.length) throw refused("Cleanup is only available to the production acceptance principal.");
  }

  // One target = how to find the newest N to keep, the older candidates, and how to remove a batch.
  function targetsFor(principal, retain, cutoff) {
    const { tenantId, userId } = principal;
    const pattern = ACCEPTANCE_CORRELATION_PATTERN;
    const recordTargets = RECORD_TARGETS.map(item => ({
      label: item.label,
      keep: () => db.query(SQL.recordsKeep, [tenantId, userId, item.workspaceId, item.recordType, pattern, retain]),
      candidates: keepIds => db.query(SQL.recordsCandidates, [tenantId, userId, item.workspaceId, item.recordType, pattern, cutoff, keepIds, BATCH_SIZE]),
      remove: ids => db.query(SQL.recordsRemove, [tenantId, userId, item.workspaceId, item.recordType, ids, pattern])
    }));
    return [...recordTargets,
      { label: "documents",
        keep: () => db.query(SQL.documentsKeep, [tenantId, userId, pattern, retain]),
        candidates: keepIds => db.query(SQL.documentsCandidates, [tenantId, userId, pattern, cutoff, keepIds, BATCH_SIZE]),
        remove: ids => db.query(SQL.documentsRemove, [tenantId, userId, ids, pattern]) },
      { label: "reminders",
        keep: () => db.query(SQL.remindersKeep, [tenantId, userId, pattern, retain]),
        candidates: keepIds => db.query(SQL.remindersCandidates, [tenantId, userId, pattern, cutoff, keepIds, BATCH_SIZE]),
        remove: ids => db.query(SQL.remindersRemove, [tenantId, userId, ids, pattern]) }];
  }

  // -> { ok, dryRun, olderThanMinutes, retainPerType, counts: { label: n }, total, complete }
  // counts are rows removed (or, in dry-run, rows that WOULD be removed). complete=false means the per-call bound was hit
  // for some target and another call will remove more.
  async function cleanup({ principal, dryRun = false, olderThanMinutes, retainPerType } = {}) {
    await assertAcceptancePrincipal(principal);
    const minutes = clamp(olderThanMinutes, BOUNDS.olderThanMinutes, DEFAULTS.olderThanMinutes);
    const retain = clamp(retainPerType, BOUNDS.retainPerType, DEFAULTS.retainPerType);
    const cutoff = new Date(now().getTime() - minutes * 60 * 1000).toISOString();
    const counts = {}; let complete = true;
    for (const target of targetsFor(principal, retain, cutoff)) {
      counts[target.label] = 0;
      // A dry run also prepares each write statement with an EMPTY id list: it matches no row, so nothing can change, but the
      // database still parses and plans the statement against the real schema. A typo in a write statement therefore shows up in
      // a dry run (and in the candidate's CI black-box run) instead of on the first real cleanup.
      if (dryRun) await target.remove([]);
      const keepIds = rowsOf(await target.keep()).map(row => row.record_id);
      for (let batch = 0; batch < MAX_BATCHES; batch += 1) {
        const ids = rowsOf(await target.candidates(keepIds)).map(row => row.record_id);
        if (!ids.length) break;
        if (dryRun) {
          // A dry run cannot remove anything, so it cannot page; it reports the first batch and whether more may exist.
          counts[target.label] += ids.length;
          if (ids.length >= BATCH_SIZE) complete = false;
          break;
        }
        const removed = rowsOf(await target.remove(ids)).length;
        counts[target.label] += removed;
        if (ids.length < BATCH_SIZE) break;
        if (batch === MAX_BATCHES - 1) complete = false;
        if (!removed) { complete = false; break; }
      }
    }
    const total = Object.values(counts).reduce((sum, value) => sum + value, 0);
    logger.info?.("authoritative.acceptance.cleanup", { dryRun, olderThanMinutes: minutes, retainPerType: retain, total, complete, counts });
    return { ok: true, dryRun, olderThanMinutes: minutes, retainPerType: retain, counts, total, complete };
  }

  return Object.freeze({ cleanup });
}

module.exports = Object.freeze({ createAcceptanceCleanup, ACCEPTANCE_CORRELATION_PATTERN, ACCEPTANCE_PERMISSION, RECORD_TARGETS, TARGET_LABELS,
  DEFAULTS, BOUNDS, BATCH_SIZE, MAX_BATCHES, SQL });
