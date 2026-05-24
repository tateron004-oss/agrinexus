const { createFoundationRouter } = require("../src/app");
const { readConfig } = require("../src/config");
const { AiRepository } = require("../src/modules/ai/repository");
const { AiService } = require("../src/modules/ai/service");
const { createAiProvider } = require("../src/modules/ai/integrations");
const { createDatabaseRuntime } = require("../src/runtime/database");
const { createRequestContext } = require("../src/runtime/request-context");
const { permissionsForRoles } = require("../src/runtime/permissions");

class FakeAdapter {
  constructor() {
    this.aiRuns = [];
  }

  async query(sql, params) {
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
        response_metadata: params[7],
        created_at: new Date().toISOString()
      };
      this.aiRuns.unshift(run);
      return { rows: [run] };
    }
    if (sql.includes("from ai_runs")) return { rows: this.aiRuns };
    if (sql.includes("insert into audit_events")) return { rows: [] };
    return { rows: [] };
  }
}

async function main() {
  const config = readConfig({ SESSION_SECRET: "test-secret" });
  const db = createDatabaseRuntime({ adapter: new FakeAdapter() });
  const aiRepository = new AiRepository(db);
  const aiService = new AiService({
    repository: aiRepository,
    db,
    provider: createAiProvider(config)
  });
  const router = createFoundationRouter({ aiRepository, aiService, config });
  const context = createRequestContext({
    tenantId: "tenant-1",
    userId: "user-1",
    roles: ["coordinator"],
    permissions: permissionsForRoles(["coordinator"])
  });

  const command = await router.handle({
    method: "POST",
    url: "/ai/command-center",
    headers: {},
    body: { countryName: "Nigeria", focus: "daily operations" },
    context
  });
  if (command.status !== 201 || !command.body.recommendation.includes("Command center")) throw new Error("Expected command center recommendation.");

  const routeRisk = await router.handle({
    method: "POST",
    url: "/ai/route-risk",
    headers: {},
    body: { countryName: "Nigeria", routeName: "Lagos Corridor" },
    context
  });
  if (routeRisk.status !== 201 || routeRisk.body.aiRun.run_type !== "ai.route_risk") throw new Error("Expected route risk run.");

  const runs = await router.handle({
    method: "GET",
    url: "/ai/runs?runType=ai.route_risk",
    headers: {},
    body: {},
    context
  });
  if (runs.status !== 200 || runs.body.runs.length < 2) throw new Error("Expected AI run history.");

  console.log("AI routes smoke passed");
}

main().catch(error => {
  console.error(error.stack || error.message);
  process.exit(1);
});
