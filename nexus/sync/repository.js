"use strict";
const { createId } = require("../contracts/identifiers.js");

class SyncRepository {
  constructor(db) { if (!db?.query || !db?.transaction) throw new Error("A transactional database runtime is required."); this.db=db; }
  async apply(operation, handler) {
    for (const field of ["tenantId","userId","deviceId","operationId","entityType"]) if (!operation[field]) throw new Error(`Sync ${field} is required.`);
    return this.db.transaction(async trx => {
      const prior=await trx.query(`select * from nexus_sync_operations where tenant_id=$1 and device_id=$2 and operation_id=$3 for update`,
        [operation.tenantId,operation.deviceId,operation.operationId]);
      if((prior.rows||prior)[0]) return (prior.rows||prior)[0];
      const syncId=createId("sync");
      const current=await handler({trx,operation,phase:"inspect"});
      // A prior record exists and this operation isn't a create -- the
      // client MUST have seen some version to base its change on. Treating
      // a missing baseVersion as "no conflict" (the old behavior) let any
      // update/delete silently skip optimistic-concurrency checking
      // entirely and overwrite whatever the current server record is.
      const modifiesExisting=current!=null && (operation.action||"update")!=="create";
      const conflict=modifiesExisting && (operation.baseVersion==null || current.version!==operation.baseVersion);
      const applied=conflict?null:await handler({trx,operation,phase:"apply",current});
      const result=await trx.query(`insert into nexus_sync_operations
        (sync_id,tenant_id,user_id,device_id,operation_id,entity_type,entity_id,base_version,payload,state,conflict,applied_at)
        values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,case when $10='applied' then now() else null end) returning *`,
      [syncId,operation.tenantId,operation.userId,operation.deviceId,operation.operationId,operation.entityType,
        operation.entityId||null,operation.baseVersion??null,operation.payload||{},conflict?"conflict":"applied",
        conflict?{serverVersion:current.version,server:current}:{entity:applied||null}]);
      return (result.rows||result)[0];
    });
  }

  async changes({tenantId,userId,deviceId,since=new Date(0),limit=100}) {
    const result=await this.db.query(`select * from nexus_sync_operations
      where tenant_id=$1 and user_id=$2 and device_id=$3 and created_at>$4
      order by created_at, sync_id limit $5`,[tenantId,userId,deviceId,since,Math.min(Math.max(Number(limit)||100,1),500)]);
    return result.rows||result;
  }

  // The server's view of everything this person's devices have sent: counts by state and when the last change was applied.
  async summary({tenantId,userId}) {
    const result=await this.db.query(`select state,count(*)::int as count,max(applied_at) as last_applied
      from nexus_sync_operations where tenant_id=$1 and user_id=$2 group by state`,[tenantId,userId]);
    const rows=result.rows||result; const count=state=>Number(rows.find(row=>row.state===state)?.count||0);
    const last=rows.map(row=>row.last_applied).filter(Boolean).sort().pop();
    return {applied:count("applied"),conflicts:count("conflict"),pending:count("pending"),rejected:count("rejected"),lastAppliedAt:last?new Date(last).toISOString():null};
  }

  async resolve({tenantId,userId,deviceId,syncId,resolution,expectedServerVersion}) {
    if(!["accept-server","retry-client"].includes(resolution)) throw new Error("Unsupported conflict resolution.");
    const result=await this.db.query(`update nexus_sync_operations set
      state=case when $5::text='accept-server' then 'rejected' else 'pending' end,
      conflict=conflict || jsonb_build_object('resolution',$5::text,'expectedServerVersion',$6::integer,'resolvedAt',now())
      where tenant_id=$1 and user_id=$2 and device_id=$3 and sync_id=$4 and state='conflict'
      returning *`,[tenantId,userId,deviceId,syncId,resolution,expectedServerVersion??null]);
    const row=(result.rows||result)[0]; if(!row) throw new Error("Sync conflict unavailable or already resolved."); return row;
  }
}
module.exports=Object.freeze({SyncRepository});
