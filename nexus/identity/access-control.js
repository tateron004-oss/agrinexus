"use strict";

class AccessDeniedError extends Error {
  constructor(code, message) { super(message); this.name = "AccessDeniedError"; this.code = code; this.status = 403; }
}

class AccessControl {
  constructor(db) { if (!db?.query) throw new Error("A database runtime is required."); this.db = db; }

  async authorize({ tenantId, actorId, permission, subjectId = actorId, purpose, at = new Date() }) {
    if (!tenantId || !actorId || !permission || !purpose) throw new AccessDeniedError("access_context_incomplete", "Tenant, actor, permission, and purpose are required.");
    const membership = await this.db.query(`select role,permissions from nexus_organization_memberships
      where tenant_id=$1 and user_id=$2 and state='active'`, [tenantId, actorId]);
    const rows = membership.rows || membership;
    if (!rows.length) throw new AccessDeniedError("tenant_membership_required", "Active organization membership is required.");
    const allowed = rows.some(row => row.role === "admin" || (row.permissions || []).includes("*") || (row.permissions || []).includes(permission));
    if (!allowed) throw new AccessDeniedError("permission_denied", `Missing permission: ${permission}`);
    if (subjectId !== actorId) {
      const delegation = await this.db.query(`select delegation_id from nexus_delegations where tenant_id=$1
        and subject_id=$2 and delegate_id=$3 and state='active' and $4=any(scopes)
        and starts_at<=$5 and expires_at>$5 limit 1`, [tenantId, subjectId, actorId, permission, at]);
      if (!(delegation.rows || delegation).length) throw new AccessDeniedError("delegation_required", "An active delegation is required for this subject.");
    }
    return Object.freeze({ tenantId, actorId, subjectId, permission, purpose, authorized: true });
  }
}

module.exports = Object.freeze({ AccessControl, AccessDeniedError });

