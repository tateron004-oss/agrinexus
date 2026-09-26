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

  // `stepId`, when passed, narrows the match to a consent whose own receipt was granted for that exact step --
  // otherwise (task, scope) alone can match a DIFFERENT step's grant when several tools share one consent scope
  // (see behavior-spine.js's recordConfirmedConsent(), which relies on this to give each step its own receipt).
  async active({ tenantId, subjectId, scope, taskId = null, stepId = null }) {
    const result = await this.db.query(`select * from nexus_consents where tenant_id=$1 and subject_id=$2
      and scope=$3 and ($4::text is null or task_id=$4) and ($5::text is null or receipt->>'stepId'=$5)
      and state='granted' and revoked_at is null
      and (expires_at is null or expires_at > now()) order by granted_at desc limit 1`,
    [tenantId, subjectId, scope, taskId, stepId]);
    return (result.rows || result)[0] || null;
  }

  // How many consents of this scope the person granted in the last `hours` hours (a revoked one still counts: the
  // message was already approved).
  // With `channel`, only consents whose receipt records that send channel (sms, whatsapp, email, call) are counted.
  async countGrantedSince({ tenantId, subjectId, scope, hours = 24, channel = null }) {
    const result = await this.db.query(`select count(*)::int as count from nexus_consents where tenant_id=$1 and subject_id=$2
      and scope=$3 and granted_at > now() - ($4::int * interval '1 hour') and ($5::text is null or receipt->>'sendChannel' = $5::text)
      and coalesce(receipt->>'released','') = ''`,
    [tenantId, subjectId, scope, hours, channel]);
    return Number((result.rows || result)[0]?.count || 0);
  }

  // Give back a consent whose action verifiably never happened (a send the provider refused before sending). It is revoked, so it
  // can never authorize anything, and marked released so it no longer counts toward the daily cap.
  async release({ tenantId, subjectId, consentId, reason }) {
    const result = await this.db.query(`update nexus_consents set state='revoked',revoked_at=now(),
      receipt=coalesce(receipt,'{}'::jsonb) || jsonb_build_object('released',$4::text)
      where tenant_id=$1 and subject_id=$2 and consent_id=$3 and state='granted' returning *`, [tenantId, subjectId, consentId, String(reason || "not_sent").slice(0, 80)]);
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
