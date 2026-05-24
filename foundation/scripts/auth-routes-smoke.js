const { createFoundationRouter } = require("../src/app");
const { readConfig } = require("../src/config");
const { AuthRepository } = require("../src/modules/auth/repository");
const { AuthService } = require("../src/modules/auth/service");
const { hashPasswordForDev } = require("../src/modules/auth/passwords");
const { createDatabaseRuntime } = require("../src/runtime/database");
const { createRequestContext } = require("../src/runtime/request-context");

class FakeAdapter {
  constructor() {
    this.auditEvents = [];
    this.user = {
      id: "user-1",
      tenant_id: "tenant-1",
      tenant_slug: "agrinexus-demo",
      email: "demo@agrinexus.org",
      display_name: "Demo Coordinator",
      status: "active",
      password_hash: hashPasswordForDev("Prototype2026!", { salt: "1234567890abcdef" })
    };
  }

  async query(sql, params) {
    if (sql.includes("from users")) {
      const [, email] = params;
      return email === this.user.email ? { rows: [this.user] } : { rows: [] };
    }
    if (sql.includes("from user_roles")) return { rows: [{ code: "coordinator" }] };
    if (sql.includes("insert into audit_events")) {
      this.auditEvents.push(params);
      return { rows: [] };
    }
    return { rows: [] };
  }
}

async function main() {
  const config = readConfig({
    SESSION_SECRET: "test-secret",
    SESSION_TTL_MINUTES: "30"
  });
  const adapter = new FakeAdapter();
  const db = createDatabaseRuntime({ adapter });
  const repository = new AuthRepository(db);
  const authService = new AuthService({ repository, db, config });
  const router = createFoundationRouter({ authService, config });

  const login = await router.handle({
    method: "POST",
    url: "/auth/login",
    headers: {},
    body: {
      tenantSlug: "agrinexus-demo",
      email: "demo@agrinexus.org",
      password: "Prototype2026!"
    },
    context: createRequestContext({ requestId: "req-routes-test" })
  });

  if (login.status !== 200) throw new Error(`Expected login 200, got ${login.status}`);
  if (!login.headers["set-cookie"]) throw new Error("Expected login set-cookie header.");

  const me = await router.handle({
    method: "GET",
    url: "/auth/me",
    headers: {
      cookie: login.headers["set-cookie"].split(";")[0]
    },
    context: createRequestContext({ requestId: "req-me-test" })
  });

  if (me.status !== 200) throw new Error(`Expected me 200, got ${me.status}`);
  if (me.body.user.id !== "user-1") throw new Error("Expected /auth/me user id.");
  if (!me.body.user.roles.includes("coordinator")) throw new Error("Expected /auth/me roles.");

  const refresh = await router.handle({
    method: "POST",
    url: "/auth/session/refresh",
    headers: {
      cookie: login.headers["set-cookie"].split(";")[0]
    },
    body: {},
    context: createRequestContext({ requestId: "req-refresh-test" })
  });

  if (refresh.status !== 200) throw new Error(`Expected refresh 200, got ${refresh.status}`);
  if (!refresh.headers["set-cookie"]) throw new Error("Expected refresh set-cookie header.");

  const logout = await router.handle({
    method: "POST",
    url: "/auth/logout",
    headers: {},
    body: {},
    context: createRequestContext({ requestId: "req-logout-test" })
  });

  if (logout.status !== 200) throw new Error(`Expected logout 200, got ${logout.status}`);

  console.log("Auth routes smoke passed");
}

main().catch(error => {
  console.error(error.stack || error.message);
  process.exit(1);
});
