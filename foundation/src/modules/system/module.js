const { createModule } = require("../../module-factory");

const systemModule = createModule({
  name: "system",
  owner: "platform",
  responsibilities: [
    "Runtime health checks",
    "Provider diagnostics",
    "Configuration readiness",
    "Module availability"
  ],
  routes: [
    "GET /system/health",
    "GET /system/providers",
    "GET /system/modules"
  ],
  tables: ["audit_events", "ai_runs"],
  integrations: ["PostgreSQL", "OpenAI", "Map tiles", "Workforce providers", "Health providers"]
});

module.exports = { systemModule };
