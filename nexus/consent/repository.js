const { createId } = require("../contracts/identifiers.js");

class ConsentRepository {
  constructor(db) { if (!db?.query) throw new Error("A database runtime is required."); this.db = db; }

  async grant({ tenantId, subjectId, taskId = null, scope, purpose, recipient = null, policyVersion, receipt }) {
    const consentId = createId("consent");
    const result = await this.db.query(`insert into nexus_consents
      (consent_id,tenant_id,subject_id,task_id,scope,purpose,recipient,state,policy_version,granted_at,receipt)
      values ($1,$2,$3,$4,$5,$6,$7,'granted',$8,now(),$9) returning *`,
    [consentId, tenantId, subjectId, taskId, scope, purpose, recipient, policyVersion, receipt || {}]);
    return (result.rows || result)[0];
  }

  async active({ tenantId, subjectId, scope, taskId = null }) {
    const result = await this.db.query(`select * from nexus_consents where tenant_id=$1 and subject_id=$2
      and scope=$3 and ($4::text is null or task_id=$4) and state='granted' and revoked_at is null
      and (expires_at is null or expires_at > now()) order by granted_at desc limit 1`,
    [tenantId, subjectId, scope, taskId]);
    return (result.rows || result)[0] || null;
  }

  async revoke({ tenantId, subjectId, consentId }) {
    const result = await this.db.query(`update nexus_consents set state='revoked',revoked_at=now()
      where tenant_id=$1 and subject_id=$2 and consent_id=$3 and state='granted' returning *`,
    [tenantId, subjectId, consentId]);
    return (result.rows || result)[0] || null;
  }
}

module.exports = Object.freeze({ ConsentRepository });
