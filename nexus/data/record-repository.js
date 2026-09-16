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

  async remove({ tenantId, recordId, actorId }) {
    const result=await this.db.query(`update nexus_records set state='deleted',data='{}'::jsonb,provenance=jsonb_build_object('deletedBy',$3),deleted_at=now(),updated_at=now()
      where tenant_id=$1 and record_id=$2 and deleted_at is null returning record_id`,[tenantId,recordId,actorId]);
    return Boolean((result.rows||result)[0]);
  }
}
module.exports=Object.freeze({RecordRepository,CLASSIFICATIONS});

