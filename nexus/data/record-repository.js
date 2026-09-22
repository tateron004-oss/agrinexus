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

  async list({ tenantId, subjectId, ownerId, workspaceId, recordType, limit=100 }) {
    const values=[tenantId]; let where="tenant_id=$1 and deleted_at is null";
    for(const [column,value] of [["subject_id",subjectId],["owner_id",ownerId],["workspace_id",workspaceId],["record_type",recordType]]) if(value){values.push(value);where+=` and ${column}=$${values.length}`;}
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
  // non-terminal task or grant. Deliberately NOT a comparison against
  // dueDate/deadline -- nexus/business/service.js stores both as free,
  // unvalidated text ("next Friday", "March 15", "in two weeks") with no
  // guaranteed parseable format, so a date-based trigger cannot honestly be
  // built on this schema yet. Staleness of the whole record (its own
  // updated_at, bumped by any edit) is the one signal this data can support
  // without guessing at freeform text -- the same reasoning
  // listStaleHealthSubjects's own comment already applies to `data` generally.
  // Returns enough of the real content (business name, open task titles,
  // open grant labels) for the caller to write a genuinely specific nudge,
  // not just "you have open items somewhere."
  async listStaleBusinessWorkspaces({ staleBefore, limit = 50 }) {
    const result = await this.db.query(`select tenant_id, owner_id, record_id, updated_at,
        data->'info'->>'businessName' as business_name,
        (select jsonb_agg(t->>'title') from jsonb_array_elements(coalesce(data->'editable'->'tasks','[]'::jsonb)) t
          where coalesce(t->>'status','') not in ('done','complete')) as open_task_titles,
        (select jsonb_agg(coalesce(g->>'funderName', g->>'program')) from jsonb_array_elements(coalesce(data->'editable'->'grants','[]'::jsonb)) g
          where coalesce(g->>'status','') not in ('awarded','declined')) as open_grant_labels
      from nexus_records
      where record_type='business-client' and workspace_id='operations' and state='active' and deleted_at is null
        and updated_at < $1
        and (
          exists (select 1 from jsonb_array_elements(coalesce(data->'editable'->'tasks','[]'::jsonb)) t where coalesce(t->>'status','') not in ('done','complete'))
          or exists (select 1 from jsonb_array_elements(coalesce(data->'editable'->'grants','[]'::jsonb)) g where coalesce(g->>'status','') not in ('awarded','declined'))
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
    const result = await this.db.query(`select tenant_id, owner_id, record_id,
        data->'info'->>'businessName' as business_name,
        (select jsonb_agg(jsonb_build_object('name', l->>'name', 'followUpDate', l->>'followUpDate'))
          from jsonb_array_elements(coalesce(data->'editable'->'leads','[]'::jsonb)) l
          where ${DUE_LEAD}) as due_leads
      from nexus_records
      where record_type='business-client' and workspace_id='operations' and state='active' and deleted_at is null
        and exists (select 1 from jsonb_array_elements(coalesce(data->'editable'->'leads','[]'::jsonb)) l where ${DUE_LEAD})
      order by updated_at
      limit $1`, [Math.min(Math.max(limit, 1), 200)]);
    return result.rows || result;
  }

  async remove({ tenantId, recordId, actorId }) {
    const result=await this.db.query(`update nexus_records set state='deleted',data='{}'::jsonb,provenance=jsonb_build_object('deletedBy',$3),deleted_at=now(),updated_at=now()
      where tenant_id=$1 and record_id=$2 and deleted_at is null returning record_id`,[tenantId,recordId,actorId]);
    return Boolean((result.rows||result)[0]);
  }
}
module.exports=Object.freeze({RecordRepository,CLASSIFICATIONS});

