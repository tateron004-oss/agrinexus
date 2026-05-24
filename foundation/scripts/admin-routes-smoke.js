const { createFoundationRouter } = require("../src/app");
const { readConfig } = require("../src/config");
const { AdminRepository } = require("../src/modules/admin/repository");
const { createDatabaseRuntime } = require("../src/runtime/database");
const { createRequestContext } = require("../src/runtime/request-context");
const { permissionsForRoles } = require("../src/runtime/permissions");

class FakeAdapter {
  constructor() {
    this.auditEvents = [
      {
        id: "audit-1",
        tenant_id: "tenant-1",
        user_id: "user-1",
        action: "health.care_plan_generated",
        entity_type: "health",
        entity_id: "ai-1",
        metadata: { intakeId: "intake-1" },
        created_at: new Date().toISOString()
      }
    ];
    this.aiRuns = [
      {
        id: "ai-1",
        tenant_id: "tenant-1",
        user_id: "user-1",
        run_type: "health.care_plan",
        provider: "sandbox-health-ai",
        model: null,
        prompt: { patientRef: "AN-PAT-001" },
        response_text: "Care plan generated.",
        response_metadata: {},
        created_at: new Date().toISOString()
      }
    ];
  }

  async query(sql) {
    if (sql.includes("from audit_events")) return { rows: this.auditEvents };
    if (sql.includes("from ai_runs")) return { rows: this.aiRuns };
    return { rows: [] };
  }
}

async function main() {
  const config = readConfig({ SESSION_SECRET: "test-secret" });
  const db = createDatabaseRuntime({ adapter: new FakeAdapter() });
  const adminRepository = new AdminRepository(db);
  const router = createFoundationRouter({ adminRepository, config });
  const adminContext = createRequestContext({
    tenantId: "tenant-1",
    userId: "admin-1",
    roles: ["admin"],
    permissions: permissionsForRoles(["admin"])
  });

  const audit = await router.handle({ method: "GET", url: "/admin/audit-events?entityType=health", headers: {}, body: {}, context: adminContext });
  if (audit.status !== 200 || audit.body.events[0].action !== "health.care_plan_generated") throw new Error("Expected audit events.");

  const aiRuns = await router.handle({ method: "GET", url: "/admin/ai-runs?runType=health.care_plan", headers: {}, body: {}, context: adminContext });
  if (aiRuns.status !== 200 || aiRuns.body.runs[0].provider !== "sandbox-health-ai") throw new Error("Expected admin AI runs.");

  const denied = await router.handle({
    method: "GET",
    url: "/admin/audit-events",
    headers: {},
    body: {},
    context: createRequestContext({
      tenantId: "tenant-1",
      userId: "user-1",
      roles: ["coordinator"],
      permissions: permissionsForRoles(["coordinator"])
    })
  });
  if (denied.status !== 403) throw new Error("Expected admin route permission denial.");

  console.log("Admin routes smoke passed");
}

main().catch(error => {
  console.error(error.stack || error.message);
  process.exit(1);
});
