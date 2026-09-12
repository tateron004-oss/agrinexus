"use strict";

const { RecordRepository } = require("../data/record-repository");
const { NexusRuntimeError } = require("../runtime/authoritative-task-engine");

class BusinessRepository extends RecordRepository {
  async getOwned({ tenantId, ownerId, recordId, recordType = "business-client" }) {
    const result = await this.db.query(`select * from nexus_records where tenant_id=$1
      and owner_id=$2 and record_id=$3 and record_type=$4 and workspace_id='operations'
      and deleted_at is null`, [tenantId, ownerId, recordId, recordType]);
    const record = (result.rows || result)[0];
    if (!record) throw new NexusRuntimeError("business_record_not_found", "Business record not found.", 404);
    return record;
  }

  async deleteOwned({ tenantId, ownerId, recordId, expectedVersion }) {
    return this.db.transaction(async trx => {
      const result = await trx.query(`select * from nexus_records where tenant_id=$1 and owner_id=$2
        and record_id=$3 and record_type='business-client' and workspace_id='operations'
        and deleted_at is null for update`, [tenantId, ownerId, recordId]);
      const record = (result.rows || result)[0];
      if (!record) throw new NexusRuntimeError("business_record_not_found", "Business record not found.", 404);
      if (record.version !== expectedVersion) throw new NexusRuntimeError("business_version_conflict", "Reload the current version before deleting.", 409);
      const holds = await trx.query(`select hold_id from nexus_legal_holds where tenant_id=$1 and state='active'
        and (subject_id is null or subject_id=$2) limit 1`, [tenantId, ownerId]);
      if ((holds.rows || holds).length) throw new NexusRuntimeError("business_legal_hold", "This record is subject to a legal hold.", 409);
      await trx.query("update nexus_record_versions set data='{}'::jsonb,provenance='{}'::jsonb where record_id=$1", [recordId]);
      await trx.query(`update nexus_records set data='{}'::jsonb,provenance='{}'::jsonb,state='deleted',
        deleted_at=now(),updated_at=now(),version=version+1 where tenant_id=$1 and record_id=$2`, [tenantId, recordId]);
      return { recordId, deleted: true, versionsErased: true };
    });
  }
}

module.exports = Object.freeze({ BusinessRepository });
