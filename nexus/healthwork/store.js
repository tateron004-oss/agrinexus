"use strict";

const { FarmRecordRepository } = require("../farmwork/store.js");

// The health worker's records: patients, visits, immunisations, pregnancies, follow-ups, supplies, referrals. The same records engine as the farm
// toolkit, kept apart: its own purposes ("health_records", "health_session"), the "health" sensitivity level that the memory layer keeps
// out of ordinary recall, no searchable text (a patient's name is never in a column anything else searches), and never public.
//
// Removing a patient is a soft delete, like the rest of the memory table. Because patient data must be erasable for good, this store also
// has a hard erase: of what was removed, or of everything (see healthwork/privacy.js). Neither is done under an active legal hold, the same
// rule the account-level deletion follows. A small log of what was exported or erased (counts and days, never names) is kept through an erase.
class HealthRecordRepository extends FarmRecordRepository {
  constructor(db) { super(db, { purpose: "health_records", sessionPurpose: "health_session", sensitivity: "health", keepSearchableText: false }); }

  async activeHold({ tenantId, userId }) {
    const result = await this.db.query(`select hold_id from nexus_legal_holds where tenant_id=$1 and state='active' and (subject_id is null or subject_id=$2) limit 1`, [tenantId, userId]);
    return Boolean((result.rows || result)[0]);
  }

  // How many records this person has removed (soft) that are still on disk.
  async countRemoved({ tenantId, userId }) {
    const result = await this.db.query(`select count(*)::int as n from nexus_memory_items
      where tenant_id=$1 and principal_id=$2 and purpose in ('${this.purpose}','${this.sessionPurpose}') and deleted_at is not null`, [tenantId, userId]);
    return Number((result.rows || result)[0]?.n || 0);
  }

  // Erase for good what was removed. { purged } or { blocked: true } under a legal hold.
  async purgeRemoved({ tenantId, userId }) {
    if (await this.activeHold({ tenantId, userId })) return { blocked: true };
    const result = await this.db.query(`delete from nexus_memory_items
      where tenant_id=$1 and principal_id=$2 and purpose in ('${this.purpose}','${this.sessionPurpose}') and deleted_at is not null returning memory_id`, [tenantId, userId]);
    return { purged: (result.rows || result).length };
  }

  // Erase for good everything this person keeps here, except the log of what was exported or erased. { purged } or { blocked: true }.
  async purgeAll({ tenantId, userId }) {
    if (await this.activeHold({ tenantId, userId })) return { blocked: true };
    const result = await this.db.query(`delete from nexus_memory_items
      where tenant_id=$1 and principal_id=$2 and (purpose='${this.sessionPurpose}' or (purpose='${this.purpose}' and coalesce(content->>'collection','') <> 'audit')) returning memory_id`, [tenantId, userId]);
    return { purged: (result.rows || result).length };
  }
}

module.exports = Object.freeze({ HealthRecordRepository });
