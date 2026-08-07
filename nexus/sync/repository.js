"use strict";
const { createId } = require("../contracts/identifiers.js");

class SyncRepository {
  constructor(db) { if (!db?.query || !db?.transaction) throw new Error("A transactional database runtime is required."); this.db=db; }
  async apply(operation, handler) {
    return this.db.transaction(async trx => {
      const prior=await trx.query(`select * from nexus_sync_operations where tenant_id=$1 and device_id=$2 and operation_id=$3 for update`,
        [operation.tenantId,operation.deviceId,operation.operationId]);
      if((prior.rows||prior)[0]) return (prior.rows||prior)[0];
      const syncId=createId("sync");
      const current=await handler({trx,operation});
      const conflict=current?.version != null && operation.baseVersion != null && current.version!==operation.baseVersion;
      const result=await trx.query(`insert into nexus_sync_operations
        (sync_id,tenant_id,user_id,device_id,operation_id,entity_type,entity_id,base_version,payload,state,conflict,applied_at)
        values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,case when $10='applied' then now() else null end) returning *`,
      [syncId,operation.tenantId,operation.userId,operation.deviceId,operation.operationId,operation.entityType,
        operation.entityId||null,operation.baseVersion??null,operation.payload||{},conflict?"conflict":"applied",
        conflict?{serverVersion:current.version,server:current}:null]);
      return (result.rows||result)[0];
    });
  }
}
module.exports=Object.freeze({SyncRepository});

