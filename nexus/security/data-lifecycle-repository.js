"use strict";
const { createId } = require("../contracts/identifiers.js");

class DataLifecycleRepository {
  constructor(db) { if (!db?.query || !db?.transaction) throw new Error("A transactional database runtime is required."); this.db=db; }
  async requestDeletion({tenantId,subjectId,requestedBy}) {
    if(!tenantId||!subjectId||!requestedBy) throw new Error("Deletion tenant, subject, and requester are required.");
    const result=await this.db.query(`insert into nexus_deletion_requests(request_id,tenant_id,subject_id,requested_by)
      values ($1,$2,$3,$4) returning *`,[createId("deletionRequest"),tenantId,subjectId,requestedBy]);
    return (result.rows||result)[0];
  }
  async executeDeletion({tenantId,requestId}) {
    return this.db.transaction(async trx=>{
      const locked=await trx.query(`select * from nexus_deletion_requests where tenant_id=$1 and request_id=$2 for update`,[tenantId,requestId]);
      const request=(locked.rows||locked)[0]; if(!request) throw new Error("Deletion request not found.");
      const holds=await trx.query(`select hold_id from nexus_legal_holds where tenant_id=$1 and state='active' and (subject_id is null or subject_id=$2) limit 1`,[tenantId,request.subject_id]);
      if((holds.rows||holds)[0]) { await trx.query(`update nexus_deletion_requests set state='blocked',verification=$3 where tenant_id=$1 and request_id=$2`,[tenantId,requestId,{reason:"legal_hold"}]); return {state:"blocked",reason:"legal_hold"}; }
      await trx.query(`update nexus_records set state='deleted',data='{}'::jsonb,deleted_at=now(),updated_at=now() where tenant_id=$1 and subject_id=$2 and deleted_at is null`,[tenantId,request.subject_id]);
      await trx.query(`update nexus_artifacts set state='deleted',object_key=null,deleted_at=now(),updated_at=now() where tenant_id=$1 and owner_id=$2 and deleted_at is null`,[tenantId,request.subject_id]);
      const verification={recordsErased:true,artifactPointersErased:true,verifiedAt:new Date().toISOString()};
      await trx.query(`update nexus_deletion_requests set state='verified',verification=$3,completed_at=now() where tenant_id=$1 and request_id=$2`,[tenantId,requestId,verification]);
      return {state:"verified",verification};
    });
  }
  async purgeExpired({limit=100}) {
    const result=await this.db.query(`with expired as (select artifact_id from nexus_artifacts where retention_until<now() and deleted_at is null
      and not exists (select 1 from nexus_legal_holds h where h.tenant_id=nexus_artifacts.tenant_id and h.state='active')
      order by retention_until for update skip locked limit $1) update nexus_artifacts a set state='deleted',object_key=null,deleted_at=now(),updated_at=now()
      from expired where a.artifact_id=expired.artifact_id returning a.artifact_id`,[Math.min(Math.max(limit,1),500)]);
    return result.rows||result;
  }
  async recordBackupEvidence({releaseSha,backupId,state,checksum,metadata={}}) {
    if(!releaseSha||!backupId||!checksum||!["created","restore_verified","failed"].includes(state)) throw new Error("Valid backup evidence is required.");
    const result=await this.db.query(`insert into nexus_backup_evidence(evidence_id,release_sha,backup_id,state,checksum,metadata,verified_at)
      values ($1,$2,$3,$4,$5,$6,case when $4='restore_verified' then now() else null end) returning *`,[createId("backupEvidence"),releaseSha,backupId,state,checksum,metadata]);
    return (result.rows||result)[0];
  }
}
module.exports=Object.freeze({DataLifecycleRepository});

