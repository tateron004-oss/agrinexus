const { AuthRepository } = require("../src/modules/auth/repository");
const { AuthService } = require("../src/modules/auth/service");
const { hashPasswordForDev } = require("../src/modules/auth/passwords");
const { createRequestContext } = require("../src/runtime/request-context");

class FakeDb {
  constructor() {
    this.isConnected = true;
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
    if (sql.includes("from users")) return { rows: [this.user] };
    if (sql.includes("from user_roles")) return { rows: [{ code: "coordinator" }] };
    if (sql.includes("insert into audit_events")) {
      this.auditEvents.push(params);
      return { rows: [] };
    }
    return { rows: [] };
  }
}

async function main() {
  const db = new FakeDb();
  const repository = new AuthRepository(db);
  const service = new AuthService({
    repository,
    db,
    config: {
      auth: {
        sessionSecret: "test-secret",
        sessionTtlMinutes: 30,
        passwordPepper: ""
      }
    }
  });

  const result = await service.login({
    tenantSlug: "agrinexus-demo",
    email: "demo@agrinexus.org",
    password: "Prototype2026!",
    context: createRequestContext({ requestId: "req-test" })
  });

  if (!result.ok) throw new Error("Expected auth login to succeed.");
  if (!result.token) throw new Error("Expected auth login to return a token.");
  if (!result.user.roles.includes("coordinator")) throw new Error("Expected coordinator role.");
  if (db.auditEvents.length !== 1) throw new Error("Expected one audit event.");

  console.log("Auth smoke passed");
}

main().catch(error => {
  console.error(error.stack || error.message);
  process.exit(1);
});
