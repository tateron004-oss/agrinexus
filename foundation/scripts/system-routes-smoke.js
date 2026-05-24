const { createFoundationRouter, modules } = require("../src/app");
const { readConfig } = require("../src/config");
const { SystemService } = require("../src/modules/system/service");
const { createOfflineDatabaseRuntime } = require("../src/runtime/database");
const { createRequestContext } = require("../src/runtime/request-context");
const { permissionsForRoles } = require("../src/runtime/permissions");

async function main() {
  const config = readConfig({ SESSION_SECRET: "test-secret" });
  const db = createOfflineDatabaseRuntime();
  const systemService = new SystemService({ db, config, modules });
  const router = createFoundationRouter({ systemService, config });
  const context = createRequestContext({
    tenantId: "tenant-1",
    userId: "user-1",
    roles: ["coordinator"],
    permissions: permissionsForRoles(["coordinator"])
  });

  const health = await router.handle({ method: "GET", url: "/system/health", headers: {}, body: {}, context });
  if (health.status !== 200 || health.body.status !== "degraded") throw new Error("Expected degraded offline health.");
  if (health.body.database.status !== "offline") throw new Error("Expected offline database diagnostic.");

  const providers = await router.handle({ method: "GET", url: "/system/providers", headers: {}, body: {}, context });
  if (providers.status !== 200 || !providers.body.providers.find(provider => provider.id === "openai")) throw new Error("Expected OpenAI provider diagnostic.");

  const moduleStatus = await router.handle({ method: "GET", url: "/system/modules", headers: {}, body: {}, context });
  if (moduleStatus.status !== 200 || moduleStatus.body.modules.length < 10) throw new Error("Expected module registry status.");

  const denied = await router.handle({
    method: "GET",
    url: "/system/health",
    headers: {},
    body: {},
    context: createRequestContext({
      tenantId: "tenant-1",
      userId: "user-2",
      roles: [],
      permissions: []
    })
  });
  if (denied.status !== 403) throw new Error("Expected system route permission denial.");

  console.log("System routes smoke passed");
}

main().catch(error => {
  console.error(error.stack || error.message);
  process.exit(1);
});
