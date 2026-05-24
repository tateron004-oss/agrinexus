const { createFoundationRouter } = require("../src/app");
const { readConfig } = require("../src/config");
const { HealthRepository } = require("../src/modules/health/repository");
const { HealthService } = require("../src/modules/health/service");
const { HealthIntegrations } = require("../src/modules/health/integrations");
const { createDatabaseRuntime } = require("../src/runtime/database");
const { createRequestContext } = require("../src/runtime/request-context");
const { permissionsForRoles } = require("../src/runtime/permissions");

class FakeAdapter {
  constructor() {
    this.country = {
      id: "country-1",
      tenant_id: "tenant-1",
      name: "Nigeria",
      risk_level: "Moderate",
      heat_index_c: 38,
      queue_status: "Representative available",
      facilities: 18,
      patients: 5600
    };
    this.intakes = [];
    this.aiRuns = [];
  }

  async query(sql, params) {
    if (sql.includes("from countries")) return { rows: [this.country] };
    if (sql.includes("from patient_intakes") && sql.includes("order by")) return { rows: this.intakes };
    if (sql.includes("insert into patient_intakes")) {
      const intake = {
        id: `intake-${this.intakes.length + 1}`,
        tenant_id: params[0],
        country_id: params[1],
        created_by: params[2],
        patient_ref: params[3],
        need_summary: params[4],
        risk_level: params[5],
        queue_status: "Intake",
        representative_status: "Not connected"
      };
      this.intakes.unshift(intake);
      return { rows: [intake] };
    }
    if (sql.includes("update patient_intakes")) {
      const intake = this.intakes.find(item => item.id === params[0]);
      if (!intake) return { rows: [] };
      intake.queue_status = params[1] || intake.queue_status;
      intake.representative_status = params[2] || intake.representative_status;
      return { rows: [intake] };
    }
    if (sql.includes("insert into ai_runs")) {
      const run = {
        id: `ai-${this.aiRuns.length + 1}`,
        tenant_id: params[0],
        user_id: params[1],
        run_type: params[2],
        provider: params[3],
        model: params[4],
        prompt: params[5],
        response_text: params[6],
        response_metadata: params[7]
      };
      this.aiRuns.push(run);
      return { rows: [run] };
    }
    if (sql.includes("insert into audit_events")) return { rows: [] };
    return { rows: [] };
  }
}

async function main() {
  const config = readConfig({ SESSION_SECRET: "test-secret" });
  const db = createDatabaseRuntime({ adapter: new FakeAdapter() });
  const healthRepository = new HealthRepository(db);
  const integrations = new HealthIntegrations();
  const healthService = new HealthService({ repository: healthRepository, db, integrations });
  const router = createFoundationRouter({ healthRepository, healthService, config });
  const context = createRequestContext({
    tenantId: "tenant-1",
    userId: "user-1",
    roles: ["health_operator"],
    permissions: permissionsForRoles(["health_operator"])
  });

  const create = await router.handle({
    method: "POST",
    url: "/health/intakes",
    headers: {},
    body: { countryId: "country-1", needSummary: "Heat exposure and triage review", riskLevel: "Moderate" },
    context
  });
  if (create.status !== 201 || create.body.telehealthSession.provider !== "sandbox-telehealth") throw new Error("Expected intake with telehealth session.");

  const intakeId = create.body.intake.id;
  const escalate = await router.handle({ method: "POST", url: `/health/intakes/${intakeId}/escalate`, headers: {}, body: {}, context });
  if (escalate.status !== 200 || escalate.body.connection.status !== "connected") throw new Error("Expected representative connection.");

  const safety = await router.handle({ method: "POST", url: "/health/safety-review", headers: {}, body: { countryId: "country-1" }, context });
  if (safety.status !== 200 || !String(safety.body.recommendation || "").includes("safety review")) throw new Error(`Expected safety review, got ${safety.status}: ${JSON.stringify(safety.body)}`);

  const inspector = await router.handle({ method: "POST", url: "/health/map-inspector", headers: {}, body: { countryId: "country-1" }, context });
  if (inspector.status !== 200 || !inspector.body.recommendation.includes("map inspector")) throw new Error("Expected map inspector.");

  const care = await router.handle({ method: "POST", url: "/health/care-plan", headers: {}, body: { intakeId }, context });
  if (care.status !== 200 || care.body.ehrRecord.provider !== "sandbox-ehr") throw new Error("Expected EHR care-plan sync.");

  console.log("Health routes smoke passed");
}

main().catch(error => {
  console.error(error.stack || error.message);
  process.exit(1);
});
