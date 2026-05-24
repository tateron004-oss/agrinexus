const { createSessionToken } = require("./sessions");
const { verifyPasswordForDev } = require("./passwords");
const { recordAuditEvent } = require("../../runtime/audit");

class AuthService {
  constructor({ repository, db, config }) {
    this.repository = repository;
    this.db = db;
    this.config = config;
  }

  async login({ tenantSlug, email, password, context }) {
    const user = await this.repository.findUserByEmail({ tenantSlug, email });
    if (!user || user.status !== "active") {
      await this.audit(context, email, "auth.login_failed", null);
      return { ok: false, error: "Invalid credentials" };
    }

    const passwordOk = verifyPasswordForDev(password, user.password_hash, {
      pepper: this.config.auth.passwordPepper
    });

    if (!passwordOk) {
      await this.audit(context, email, "auth.login_failed", user.id);
      return { ok: false, error: "Invalid credentials" };
    }

    const roles = await this.repository.listUserRoles(user.id);
    const token = createSessionToken({
      userId: user.id,
      tenantId: user.tenant_id,
      ttlMinutes: this.config.auth.sessionTtlMinutes,
      secret: this.config.auth.sessionSecret,
      roles,
      email: user.email,
      displayName: user.display_name
    });

    await this.audit({ ...context, tenantId: user.tenant_id, userId: user.id }, email, "auth.login_succeeded", user.id);

    return {
      ok: true,
      token,
      user: {
        id: user.id,
        tenantId: user.tenant_id,
        email: user.email,
        displayName: user.display_name,
        roles
      }
    };
  }

  async refreshSession({ session, context }) {
    if (!session || !session.sub || !session.tid) return { ok: false, error: "Not authenticated" };
    const token = createSessionToken({
      userId: session.sub,
      tenantId: session.tid,
      ttlMinutes: this.config.auth.sessionTtlMinutes,
      secret: this.config.auth.sessionSecret,
      roles: session.roles || [],
      email: session.email,
      displayName: session.name
    });
    await this.audit({ ...context, tenantId: session.tid, userId: session.sub }, session.email, "auth.session_refreshed", session.sub);
    return { ok: true, token };
  }

  async listUsers({ context, status, limit }) {
    return this.repository.listUsers(context.tenantId, { status, limit });
  }

  async listRoles({ context }) {
    return this.repository.listRoles(context.tenantId);
  }

  async assignRole({ context, userId, roleCode }) {
    const assignment = await this.repository.assignRole({ tenantId: context.tenantId, userId, roleCode });
    await this.audit(context, null, "auth.role_assigned", userId);
    return { assignment, userId, roleCode };
  }

  async audit(context, actorEmail, action, userId) {
    return recordAuditEvent(this.db, context || {}, {
      actorEmail,
      action,
      entityType: "user",
      entityId: userId,
      metadata: {}
    });
  }
}

module.exports = { AuthService };
