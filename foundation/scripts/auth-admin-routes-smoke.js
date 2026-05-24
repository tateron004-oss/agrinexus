const { createFoundationRouter } = require("../src/app");
const { readConfig } = require("../src/config");
const { AuthRepository } = require("../src/modules/auth/repository");
const { AuthService } = require("../src/modules/auth/service");
const { createDatabaseRuntime } = require("../src/runtime/database");
const { createRequestContext } = require("../src/runtime/request-context");
const { permissionsForRoles } = require("../src/runtime/permissions");

class FakeAdapter {
  constructor() {
    this.users = [
      {
        id: "user-1",
        tenant_id: "tenant-1",
        email: "demo@agrinexus.org",
        display_name: "Demo Coordinator",
        status: "active",
        roles: ["coordinator"]
      }
    ];
    this.roles = [
      { id: "role-1", tenant_id: "tenant-1", code: "coordinator", name: "Coordinator" },
      { id: "role-2", tenant_id: "tenant-1", code: "health_operator", name: "Health Operator" }
    ];
    this.assignments = [];
    this.auditEvents = [];
  }

  async query(sql, params) {
    if (sql.includes("from users u") && sql.includes("json_agg")) return { rows: this.users };
    if (sql.includes("from roles")) return { rows: this.roles };
    if (sql.includes("insert into user_roles")) {
      const assignment = { user_id: params[1], role_id: "role-2" };
      this.assignments.push(assignment);
      return { rows: [assignment] };
    }
    if (sql.includes("insert into audit_events")) {
      this.auditEvents.push(params);
      return { rows: [] };
    }
    return { rows: [] };
  }
}

async function main() {
  const config = readConfig({ SESSION_SECRET: "test-secret" });
  const adapter = new FakeAdapter();
  const db = createDatabaseRuntime({ adapter });
  const repository = new AuthRepository(db);
  const authService = new AuthService({ repository, db, config });
  const router = createFoundationRouter({ authService, config });
  const adminContext = createRequestContext({
    tenantId: "tenant-1",
    userId: "admin-1",
    roles: ["admin"],
    permissions: permissionsForRoles(["admin"])
  });

  const users = await router.handle({ method: "GET", url: "/auth/users", headers: {}, body: {}, context: adminContext });
  if (users.status !== 200 || users.body.users[0].email !== "demo@agrinexus.org") throw new Error("Expected auth users.");

  const roles = await router.handle({ method: "GET", url: "/auth/roles", headers: {}, body: {}, context: adminContext });
  if (roles.status !== 200 || roles.body.roles.length < 2) throw new Error("Expected auth roles.");

  const assign = await router.handle({
    method: "POST",
    url: "/auth/roles/assign",
    headers: {},
    body: { userId: "user-1", roleCode: "health_operator" },
    context: adminContext
  });
  if (assign.status !== 201 || assign.body.roleCode !== "health_operator") throw new Error("Expected role assignment.");

  const denied = await router.handle({
    method: "GET",
    url: "/auth/users",
    headers: {},
    body: {},
    context: createRequestContext({
      tenantId: "tenant-1",
      userId: "user-1",
      roles: ["coordinator"],
      permissions: permissionsForRoles(["coordinator"])
    })
  });
  if (denied.status !== 403) throw new Error("Expected admin-only auth users route.");

  console.log("Auth admin routes smoke passed");
}

main().catch(error => {
  console.error(error.stack || error.message);
  process.exit(1);
});
