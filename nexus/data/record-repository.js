"use strict";
const { createId } = require("../contracts/identifiers.js");

const CLASSIFICATIONS = new Set(["standard", "sensitive", "health", "regulated"]);

class RecordRepository {
  constructor(db) { if (!db?.query || !db?.transaction) throw new Error("A transactional database runtime is required."); this.db = db; }

  async create(item) {
    if (!item.tenantId || !item.ownerId || !item.workspaceId || !item.recordType || !item.classification) throw new Error("Record tenant, owner, workspace, type, and classification are required.");
    if (!CLASSIFICATIONS.has(item.classification)) throw new Error("Unsupported record classification.");
    if ((item.classification === "health" || item.classification === "regulated") && !item.subjectId) throw new Error("Regulated records require a subject.");
    const recordId = item.recordId || createId("record");
    return this.db.transaction(async trx => {
      const inserted = await trx.query(`insert into nexus_records
        (record_id,tenant_id,subject_id,owner_id,task_id,workspace_id,record_type,classification,state,data,provenance,retention_until)
        values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) returning *`,
      [recordId,item.tenantId,item.subjectId||null,item.ownerId,item.taskId||null,item.workspaceId,item.recordType,item.classification,
        item.state||"active",item.data||{},item.provenance||{},item.retentionUntil||null]);
      await trx.query(`insert into nexus_record_versions(version_id,record_id,version,data,provenance,changed_by)
        values ($1,$2,1,$3,$4,$5)`,[createId("recordVersion"),recordId,item.data||{},item.provenance||{},item.ownerId]);
      return (inserted.rows||inserted)[0];
    });
  }

  // Found live (lists-toolkit follow-up audit): createListsCreateExecutor() enforced the
  // per-account MAX_LISTS_PER_ACCOUNT cap with a plain check-then-act (records.list() to count, then
  // create() if under the cap), with no lock between them -- unlike this same class's own
  // claimCooldown(), built specifically to close this exact gap for a different caller. Two concurrent
  // create calls for the same account both one-under the cap could both read the same count and both
  // insert, pushing the account over the cap it exists to enforce (and, for lists specifically, past
  // the exact row count the read-side query window supports -- see executor.js's own comment on why
  // that isn't just a soft overage). Generic across callers the same way create()/list() already are,
  // rather than one-off per feature.
  async createUnlessCapped(item, { maxCount, countFilter = {} } = {}) {
    if (!item.tenantId || !item.ownerId || !item.workspaceId || !item.recordType || !item.classification) throw new Error("Record tenant, owner, workspace, type, and classification are required.");
    if (!CLASSIFICATIONS.has(item.classification)) throw new Error("Unsupported record classification.");
    if ((item.classification === "health" || item.classification === "regulated") && !item.subjectId) throw new Error("Regulated records require a subject.");
    const recordId = item.recordId || createId("record");
    const lockKey = `record-cap:${item.tenantId}:${item.workspaceId}:${item.recordType}:${countFilter.ownerId || item.ownerId}`;
    return this.db.transaction(async trx => {
      await trx.query("select pg_advisory_xact_lock(hashtext($1))", [lockKey]);
      const values = [item.tenantId]; let where = "tenant_id=$1 and deleted_at is null";
      for (const [column, value] of [["subject_id", countFilter.subjectId], ["owner_id", countFilter.ownerId ?? item.ownerId], ["workspace_id", item.workspaceId], ["record_type", item.recordType]])
        if (value) { values.push(value); where += ` and ${column}=$${values.length}`; }
      const counted = await trx.query(`select count(*)::int as n from nexus_records where ${where}`, values);
      const count = Number((counted.rows || counted)[0]?.n || 0);
      if (count >= maxCount) return { capped: true, count };
      const inserted = await trx.query(`insert into nexus_records
        (record_id,tenant_id,subject_id,owner_id,task_id,workspace_id,record_type,classification,state,data,provenance,retention_until)
        values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) returning *`,
      [recordId,item.tenantId,item.subjectId||null,item.ownerId,item.taskId||null,item.workspaceId,item.recordType,item.classification,
        item.state||"active",item.data||{},item.provenance||{},item.retentionUntil||null]);
      await trx.query(`insert into nexus_record_versions(version_id,record_id,version,data,provenance,changed_by)
        values ($1,$2,1,$3,$4,$5)`,[createId("recordVersion"),recordId,item.data||{},item.provenance||{},item.ownerId]);
      return (inserted.rows||inserted)[0];
    });
  }

  async update({ tenantId, recordId, expectedVersion, actorId, data, provenance = {} }) {
    return this.db.transaction(async trx => {
      const result=await trx.query(`update nexus_records set data=$4,provenance=$5,version=version+1,updated_at=now()
        where tenant_id=$1 and record_id=$2 and version=$3 and deleted_at is null returning *`,[tenantId,recordId,expectedVersion,data,provenance]);
      const record=(result.rows||result)[0]; if(!record) throw new Error("Record version conflict or record unavailable.");
      await trx.query(`insert into nexus_record_versions(version_id,record_id,version,data,provenance,changed_by)
        values ($1,$2,$3,$4,$5,$6)`,[createId("recordVersion"),recordId,record.version,data,provenance,actorId]);
      return record;
    });
  }

  // Found live (RecordRepository audit): task_id is a real structural column (create()/attachTask()/the
  // nudge joins above all use it) but list() had no way to filter by it -- WorkspaceStateRepository.current()
  // had to overfetch the 200 most-recently-updated rows of a record type TENANT-WIDE (not scoped to one
  // owner) and find its task client-side. A workspace-state row is written for EVERY task that reaches
  // render_required, across every application, so once more than 200 OTHER tasks in the same tenant had a
  // more recently updated row, a genuinely existing row fell out of the window: stage() then wrongly created
  // a duplicate row for the same task (breaking the "one row per task" invariant every caller relies on),
  // and acknowledge() wrongly refused a real mid-flight task with workspace_state_missing.
  async list({ tenantId, subjectId, ownerId, workspaceId, recordType, taskId, limit=100 }) {
    const values=[tenantId]; let where="tenant_id=$1 and deleted_at is null";
    for(const [column,value] of [["subject_id",subjectId],["owner_id",ownerId],["workspace_id",workspaceId],["record_type",recordType],["task_id",taskId]]) if(value){values.push(value);where+=` and ${column}=$${values.length}`;}
    values.push(Math.min(Math.max(limit,1),200));
    const result=await this.db.query(`select * from nexus_records where ${where} order by updated_at desc limit $${values.length}`,values);
    return result.rows||result;
  }

  // Deliberately not tenant-scoped, like NotificationRepository.claim() and
  // TaskRepository.listStale() -- backs a single global proactive-signal
  // sweep, not a per-tenant listing. Only inspects real, structural columns
  // (classification/subject/timing) -- record `data` is a caller-defined
  // freeform JSONB blob with no fixed shape across record types, so a
  // per-vital-sign severity check isn't something this schema can honestly
  // support yet.
  async listStaleHealthSubjects({ staleBefore, limit = 50 }) {
    const result = await this.db.query(`select tenant_id, subject_id, max(updated_at) as last_health_record_at
      from nexus_records
      where classification='health' and state='active' and deleted_at is null and subject_id is not null
      group by tenant_id, subject_id
      having max(updated_at) < $1
      order by max(updated_at)
      limit $2`, [staleBefore, Math.min(Math.max(limit, 1), 200)]);
    return result.rows || result;
  }

  // The escalation counterpart to listStaleHealthSubjects(): finds a
  // proactive nudge record whose OWN reminder is confirmed *delivered* (a
  // real nexus_notifications row, not merely scheduled -- a push that never
  // arrived isn't something the subject ignored), with no newer
  // health-classified record for that subject since delivery, and that
  // hasn't already been escalated (the one boolean marker this job itself
  // writes to `data.escalatedAt`). Like listStaleHealthSubjects(), this
  // never inspects the rest of `data` -- it stays a caller-defined freeform
  // blob with no fixed shape across record types.
  async listUnacknowledgedNudges({ workspaceId, recordType, deliveredBefore, limit = 50 }) {
    const result = await this.db.query(`select n.record_id, n.tenant_id, n.subject_id, n.owner_id, n.task_id, n.version, n.data, no.delivered_at
      from nexus_records n
      join nexus_notifications no on no.task_id = n.task_id and no.tenant_id = n.tenant_id
      where n.workspace_id=$1 and n.record_type=$2 and n.state='active' and n.deleted_at is null
        and no.state='delivered' and no.delivered_at < $3
        and (n.data->>'escalatedAt') is null
        and not exists (
          select 1 from nexus_records h
          where h.tenant_id=n.tenant_id and h.subject_id=n.subject_id and h.classification='health'
            and h.deleted_at is null and h.updated_at > no.delivered_at
        )
      order by no.delivered_at
      limit $4`, [workspaceId, recordType, deliveredBefore, Math.min(Math.max(limit, 1), 200)]);
    return result.rows || result;
  }

  // The same shape as listUnacknowledgedNudges(), for a proactive-nudge domain whose real activity lives in
  // nexus_memory_items rather than nexus_records classification='health' (e.g. the farm toolkit, purpose
  // 'farm_records') -- the nudge bookkeeping record itself still lives here regardless of domain, only the
  // "did they do anything since" freshness check differs. memoryPurpose is passed as a parameter, never
  // string-interpolated, unlike FarmRecordRepository's own purpose (validated once at construction there).
  async listUnacknowledgedMemoryNudges({ workspaceId, recordType, memoryPurpose, deliveredBefore, limit = 50 }) {
    const result = await this.db.query(`select n.record_id, n.tenant_id, n.subject_id, n.owner_id, n.task_id, n.version, n.data, no.delivered_at
      from nexus_records n
      join nexus_notifications no on no.task_id = n.task_id and no.tenant_id = n.tenant_id
      where n.workspace_id=$1 and n.record_type=$2 and n.state='active' and n.deleted_at is null
        and no.state='delivered' and no.delivered_at < $3
        and (n.data->>'escalatedAt') is null
        and not exists (
          select 1 from nexus_memory_items m
          where m.tenant_id=n.tenant_id and m.principal_id=n.subject_id and m.purpose=$5
            and m.deleted_at is null and m.updated_at > no.delivered_at
        )
      order by no.delivered_at
      limit $4`, [workspaceId, recordType, deliveredBefore, Math.min(Math.max(limit, 1), 200), memoryPurpose]);
    return result.rows || result;
  }

  // The business-domain counterpart to listStaleHealthSubjects(): a real
  // structural signal (a business/nonprofit workspace record untouched in a
  // while) combined with a real structural check for at least one
  // non-terminal task or grant. Deliberately not a comparison against a
  // specific dueDate/deadline value here -- unlike listBusinessWorkspacesWithDueFollowUps()
  // and listBusinessWorkspacesWithDatedDeadlines() below (which DO use dueDate/
  // deadline, behind the same strict regex guard), this is the coarse,
  // catch-all signal for a workspace whose tasks/grants have no reliably
  // dated value at all -- voice/chat's extractTaskArgs/extractGrantArgs store
  // whatever natural-language phrase was spoken ("next Friday"), only the
  // dashboard's own date input produces a clean, comparable value. Staleness
  // of the whole record (its own updated_at, bumped by any edit) is what
  // catches those cases; the two dated sweeps below catch the rest.
  // Returns enough of the real content (business name, open task titles,
  // open grant labels) for the caller to write a genuinely specific nudge,
  // not just "you have open items somewhere."
  // Found live: task.status/grant.status are freeform text a person can type
  // in any case ("Done", "Awarded") -- without lower(), a capitalized task or
  // grant here never matched 'done'/'complete'/'awarded'/'declined' and kept
  // this workspace showing as having open items forever, even after they
  // were actually finished. Mirrors the same fix already applied to
  // listBusinessWorkspacesWithDatedDeadlines's own predicates below.
  async listStaleBusinessWorkspaces({ staleBefore, limit = 50 }) {
    const result = await this.db.query(`select tenant_id, owner_id, record_id, updated_at,
        data->'info'->>'businessName' as business_name,
        (select jsonb_agg(t->>'title') from jsonb_array_elements(coalesce(data->'editable'->'tasks','[]'::jsonb)) t
          where lower(coalesce(t->>'status','')) not in ('done','complete')) as open_task_titles,
        (select jsonb_agg(coalesce(g->>'funderName', g->>'program')) from jsonb_array_elements(coalesce(data->'editable'->'grants','[]'::jsonb)) g
          where lower(coalesce(g->>'status','')) not in ('awarded','declined')) as open_grant_labels
      from nexus_records
      where record_type='business-client' and workspace_id='operations' and state='active' and deleted_at is null
        and updated_at < $1
        and (
          exists (select 1 from jsonb_array_elements(coalesce(data->'editable'->'tasks','[]'::jsonb)) t where lower(coalesce(t->>'status','')) not in ('done','complete'))
          or exists (select 1 from jsonb_array_elements(coalesce(data->'editable'->'grants','[]'::jsonb)) g where lower(coalesce(g->>'status','')) not in ('awarded','declined'))
        )
      order by updated_at
      limit $2`, [staleBefore, Math.min(Math.max(limit, 1), 200)]);
    return result.rows || result;
  }

  // A more precise business-domain signal than listStaleBusinessWorkspaces()'s
  // whole-record staleness: a lead/customer/donor's own followUpDate --
  // stored by the dashboard's real HTML date input (public/business-
  // services.js), and, per nexus/business/service.js's own comment,
  // deliberately "a real date field ... distinct from the free-text
  // nextAction ... so a follow-up can be reminded on" -- has passed. Nothing
  // anywhere ever read this field before now; it was captured and displayed
  // but never acted on. The regex guard keeps this honest: voice/chat never
  // sets followUpDate today, only the dashboard's date input does, so a
  // value that isn't a clean YYYY-MM-DD string is some other, unvalidated
  // origin and is safely skipped rather than guessed at (same reasoning as
  // listStaleBusinessWorkspaces avoiding dueDate/deadline).
  async listBusinessWorkspacesWithDueFollowUps({ limit = 50 }) {
    const DUE_LEAD = `l->>'followUpDate' ~ '^\\d{4}-\\d{2}-\\d{2}$' and (l->>'followUpDate')::date < current_date`;
    // contact/need are now selected too (2026-09-23): they're what
    // situational-awareness.lead-followup-sweep needs to offer a real,
    // confirmation-gated outreach draft when a usable contact exists,
    // falling back to a self-directed reminder when it doesn't.
    const result = await this.db.query(`select tenant_id, owner_id, record_id,
        data->'info'->>'businessName' as business_name,
        (select jsonb_agg(jsonb_build_object('name', l->>'name', 'followUpDate', l->>'followUpDate', 'contact', l->>'contact', 'need', l->>'need'))
          from jsonb_array_elements(coalesce(data->'editable'->'leads','[]'::jsonb)) l
          where ${DUE_LEAD}) as due_leads
      from nexus_records
      where record_type='business-client' and workspace_id='operations' and state='active' and deleted_at is null
        and exists (select 1 from jsonb_array_elements(coalesce(data->'editable'->'leads','[]'::jsonb)) l where ${DUE_LEAD})
      order by updated_at
      limit $1`, [Math.min(Math.max(limit, 1), 200)]);
    return result.rows || result;
  }

  // The task/grant/invoice counterpart to listBusinessWorkspacesWithDueFollowUps():
  // a task's dueDate already passed (and it's not done), a grant's deadline
  // is within the next 7 days (and it's not yet awarded/declined), or an
  // invoice's dueDate already passed (and it's not paid). All three fields
  // are also real dashboard date inputs (public/business-services.js's
  // field() renders "dueDate"/"deadline" as type="date", same as
  // "followUpDate"), so the identical strict YYYY-MM-DD guard applies:
  // voice/chat's extractTaskArgs/extractGrantArgs/extractInvoiceArgs store
  // whatever natural-language phrase was spoken instead (createInvoice
  // itself never even sets a dueDate), and those rows are safely skipped
  // here rather than misparsed. A grant's deadline is checked for
  // "approaching," not "already passed" -- a grant can't be submitted after
  // its deadline, so the useful moment to nudge is before it, not after.
  // "not paid" matches computeBusinessDashboard's own unpaidInvoices
  // definition (status !== 'paid') exactly, so this sweep's idea of an
  // unpaid invoice never drifts from what the dashboard already shows.
  // Found live: all three predicates below compare status case-sensitively
  // against freeform text a person can type in any case ("Done", "Awarded",
  // "Paid") -- lower() matches the case-insensitive fix already applied to
  // computeBusinessDashboard's own task/grant/invoice comparisons.
  async listBusinessWorkspacesWithDatedDeadlines({ limit = 50 }) {
    const OVERDUE_TASK = `t->>'dueDate' ~ '^\\d{4}-\\d{2}-\\d{2}$' and (t->>'dueDate')::date < current_date and lower(coalesce(t->>'status','')) not in ('done','complete')`;
    const APPROACHING_GRANT = `g->>'deadline' ~ '^\\d{4}-\\d{2}-\\d{2}$' and (g->>'deadline')::date between current_date and current_date + 7 and lower(coalesce(g->>'status','')) not in ('awarded','declined')`;
    const OVERDUE_INVOICE = `i->>'dueDate' ~ '^\\d{4}-\\d{2}-\\d{2}$' and (i->>'dueDate')::date < current_date and lower(coalesce(i->>'status','')) != 'paid'`;
    const result = await this.db.query(`select tenant_id, owner_id, record_id,
        data->'info'->>'businessName' as business_name,
        (select jsonb_agg(jsonb_build_object('title', t->>'title', 'dueDate', t->>'dueDate'))
          from jsonb_array_elements(coalesce(data->'editable'->'tasks','[]'::jsonb)) t
          where ${OVERDUE_TASK}) as overdue_tasks,
        (select jsonb_agg(jsonb_build_object('label', coalesce(g->>'funderName', g->>'program'), 'deadline', g->>'deadline'))
          from jsonb_array_elements(coalesce(data->'editable'->'grants','[]'::jsonb)) g
          where ${APPROACHING_GRANT}) as approaching_grants,
        (select jsonb_agg(jsonb_build_object('invoiceNumber', i->>'invoiceNumber', 'clientName', i->>'clientName', 'dueDate', i->>'dueDate'))
          from jsonb_array_elements(coalesce(data->'editable'->'invoices','[]'::jsonb)) i
          where ${OVERDUE_INVOICE}) as overdue_invoices
      from nexus_records
      where record_type='business-client' and workspace_id='operations' and state='active' and deleted_at is null
        and (
          exists (select 1 from jsonb_array_elements(coalesce(data->'editable'->'tasks','[]'::jsonb)) t where ${OVERDUE_TASK})
          or exists (select 1 from jsonb_array_elements(coalesce(data->'editable'->'grants','[]'::jsonb)) g where ${APPROACHING_GRANT})
          or exists (select 1 from jsonb_array_elements(coalesce(data->'editable'->'invoices','[]'::jsonb)) i where ${OVERDUE_INVOICE})
        )
      order by updated_at
      limit $1`, [Math.min(Math.max(limit, 1), 200)]);
    return result.rows || result;
  }

  async remove({ tenantId, recordId, actorId }) {
    const result=await this.db.query(`update nexus_records set state='deleted',data='{}'::jsonb,provenance=jsonb_build_object('deletedBy',$3),deleted_at=now(),updated_at=now()
      where tenant_id=$1 and record_id=$2 and deleted_at is null returning record_id`,[tenantId,recordId,actorId]);
    return Boolean((result.rows||result)[0]);
  }

  // Found live: every proactive-nudge worker sweep (nexus/workers/handlers.js) checked for a recent nudge via a
  // plain list(), then -- after independently creating a real autonomous task -- called create() to record the
  // cooldown marker. Two concurrent sweeps (two worker processes, or two overlapping ticks right after a deploy)
  // racing for the same subject could both pass the list() check before either had written its marker, both
  // create a duplicate real autonomous task (a duplicate reminders.schedule reminder, documents.create summary,
  // or communications.send draft), and only then both write a marker. This closes that window by re-checking the
  // cooldown AND reserving it in one atomic, advisory-locked step -- taken BEFORE the real task is created, not
  // after -- so a losing racer backs off before doing anything real. task_id is not known yet at reservation
  // time; see attachTask() below for filling it in once the real task exists, and remove() for giving the window
  // back if creating the task then fails. Returns the reserved record, or null when a marker already exists
  // within the cooldown.
  // recordKey scopes the cooldown to one specific record within a workspace (e.g. one business client/listing
  // among many an owner has), for callers whose real subject isn't a user at all -- candidate.record_id is a
  // "rec_<...>" string from createId(), not a real uuid, so it can never be passed as subjectId (a genuine
  // `uuid` column). Matched against data->>'recordId' (which the caller must also put in `data`) instead of a
  // dedicated column, folded into both the lock key and the lookup so two workspaces for the same owner get
  // independent cooldowns without a schema change.
  async claimCooldown({ tenantId, ownerId, subjectId, recordKey, workspaceId, recordType, cooldownMs, classification = "standard", data = {}, provenance = {} }) {
    if (!tenantId || !ownerId || !workspaceId || !recordType) throw new Error("Record tenant, owner, workspace, and type are required.");
    const lockKey = `record-cooldown:${tenantId}:${workspaceId}:${recordType}:${subjectId || recordKey || ownerId}`;
    return this.db.transaction(async trx => {
      await trx.query("select pg_advisory_xact_lock(hashtext($1))", [lockKey]);
      const values = [tenantId]; let where = "tenant_id=$1 and deleted_at is null";
      for (const [column, value] of [["subject_id", subjectId], ["owner_id", ownerId], ["workspace_id", workspaceId], ["record_type", recordType]])
        if (value) { values.push(value); where += ` and ${column}=$${values.length}`; }
      if (recordKey) { values.push(recordKey); where += ` and data->>'recordId'=$${values.length}`; }
      const recent = await trx.query(`select updated_at from nexus_records where ${where} order by updated_at desc limit 1`, values);
      const last = (recent.rows || recent)[0];
      if (last && Date.now() - new Date(last.updated_at).getTime() < cooldownMs) return null;
      const recordId = createId("record");
      const inserted = await trx.query(`insert into nexus_records
        (record_id,tenant_id,subject_id,owner_id,task_id,workspace_id,record_type,classification,state,data,provenance,retention_until)
        values ($1,$2,$3,$4,null,$5,$6,$7,'active',$8,$9,null) returning *`,
      [recordId, tenantId, subjectId || null, ownerId, workspaceId, recordType, classification, data, provenance]);
      await trx.query(`insert into nexus_record_versions(version_id,record_id,version,data,provenance,changed_by)
        values ($1,$2,1,$3,$4,$5)`, [createId("recordVersion"), recordId, data, provenance, ownerId]);
      return (inserted.rows || inserted)[0];
    });
  }

  // Fills in the real task once claimCooldown() above has reserved the window and the task actually exists. No
  // lock needed here: the reservation itself is what kept a concurrent claimCooldown() out, not this column.
  async attachTask({ tenantId, recordId, taskId }) {
    await this.db.query(`update nexus_records set task_id=$3,updated_at=now() where tenant_id=$1 and record_id=$2 and deleted_at is null`, [tenantId, recordId, taskId]);
  }
}
module.exports=Object.freeze({RecordRepository,CLASSIFICATIONS});

