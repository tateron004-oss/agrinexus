const { createFoundationRouter } = require("../src/app");
const { readConfig } = require("../src/config");
const { AuthRepository } = require("../src/modules/auth/repository");
const { AuthService } = require("../src/modules/auth/service");
const { CoreRepository } = require("../src/modules/core/repository");
const { hashPasswordForDev } = require("../src/modules/auth/passwords");
const { createDatabaseRuntime } = require("../src/runtime/database");
const { createRequestContext } = require("../src/runtime/request-context");
const { permissionsForRoles } = require("../src/runtime/permissions");

class FakeAdapter {
  constructor() {
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
    if (sql.includes("insert into audit_events")) return { rows: [] };
    if (sql.includes("from countries") && sql.includes("where c.tenant_id = $1") && !sql.includes("and c.id")) {
      return {
        rows: [
          { id: "country-1", tenant_id: params[0], name: "Nigeria", patients: 5600, facilities: 18, risk_level: "Moderate" },
          { id: "country-2", tenant_id: params[0], name: "Kenya", patients: 4300, facilities: 16, risk_level: "Elevated" }
        ]
      };
    }
    return { rows: [] };
  }
}

async function main() {
  const config = readConfig({ SESSION_SECRET: "test-secret", SESSION_TTL_MINUTES: "30" });
  const db = createDatabaseRuntime({ adapter: new FakeAdapter() });
  const repository = new AuthRepository(db);
  const authService = new AuthService({ repository, db, config });
  const coreRepository = new CoreRepository(db);
  const router = createFoundationRouter({ authService, coreRepository, config });

  const forbidden = await router.handle({
    method: "GET",
    url: "/countries",
    headers: {},
    context: createRequestContext({ tenantId: "tenant-1", userId: "user-1", roles: [], permissions: [] })
  });
  if (forbidden.status !== 403) throw new Error(`Expected forbidden /countries, got ${forbidden.status}`);

  const allowed = await router.handle({
    method: "GET",
    url: "/countries",
    headers: {},
    context: createRequestContext({
      tenantId: "tenant-1",
      userId: "user-1",
      roles: ["coordinator"],
      permissions: permissionsForRoles(["coordinator"])
    })
  });

  if (allowed.status !== 200) throw new Error(`Expected /countries 200, got ${allowed.status}`);
  if (allowed.body.countries.length !== 2) throw new Error("Expected two countries.");

  console.log("Core routes smoke passed");
}

main().catch(error => {
  console.error(error.stack || error.message);
  process.exit(1);
});
