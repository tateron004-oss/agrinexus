const { json } = require("../../runtime/http");
const { serializeCookie, parseCookies } = require("../../runtime/cookies");
const { verifySessionToken } = require("./sessions");
const { requirePermission } = require("../../runtime/permissions");

function registerAuthRoutes(router, { authService, config }) {
  router.add("POST /auth/login", async request => {
    const body = request.body || {};
    const result = await authService.login({
      tenantSlug: body.tenantSlug || "agrinexus-demo",
      email: body.email,
      password: body.password,
      context: request.context
    });

    if (!result.ok) return json(401, { error: result.error });

    return json(200, {
      user: result.user,
      tokenType: "Bearer",
      expiresInMinutes: config.auth.sessionTtlMinutes
    }, {
      "set-cookie": serializeCookie("agrinexus_session", result.token, {
        httpOnly: true,
        sameSite: "Lax",
        secure: config.app.nodeEnv === "production",
        maxAge: config.auth.sessionTtlMinutes * 60
      })
    });
  });

  router.add("POST /auth/logout", async () => {
    return json(200, { ok: true }, {
      "set-cookie": serializeCookie("agrinexus_session", "", {
        maxAge: 0,
        httpOnly: true,
        sameSite: "Lax"
      })
    });
  });

  router.add("POST /auth/session/refresh", async request => {
    const cookies = parseCookies(request.headers?.cookie || "");
    const session = verifySessionToken(cookies.agrinexus_session, config.auth.sessionSecret);
    const result = await authService.refreshSession({ session, context: request.context });
    if (!result.ok) return json(401, { error: result.error });
    return json(200, {
      ok: true,
      tokenType: "Bearer",
      expiresInMinutes: config.auth.sessionTtlMinutes
    }, {
      "set-cookie": serializeCookie("agrinexus_session", result.token, {
        httpOnly: true,
        sameSite: "Lax",
        secure: config.app.nodeEnv === "production",
        maxAge: config.auth.sessionTtlMinutes * 60
      })
    });
  });

  router.add("GET /auth/me", async request => {
    const cookies = parseCookies(request.headers?.cookie || "");
    const session = verifySessionToken(cookies.agrinexus_session, config.auth.sessionSecret);
    if (!session) return json(401, { error: "Not authenticated" });
    return json(200, {
      user: {
        id: session.sub,
        tenantId: session.tid,
        email: session.email,
        displayName: session.name,
        roles: session.roles || []
      }
    });
  });

  router.add("GET /auth/users", requirePermission("admin:read", async request => {
    const users = await authService.listUsers({
      context: request.context,
      status: request.query.status,
      limit: Number(request.query.limit || 50)
    });
    return json(200, { users });
  }));

  router.add("GET /auth/roles", requirePermission("admin:read", async request => {
    const roles = await authService.listRoles({ context: request.context });
    return json(200, { roles });
  }));

  router.add("POST /auth/roles/assign", requirePermission("admin:read", async request => {
    return json(201, await authService.assignRole({
      context: request.context,
      userId: request.body.userId,
      roleCode: request.body.roleCode
    }));
  }));
}

module.exports = { registerAuthRoutes };
