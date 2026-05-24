const { createModule } = require("../../module-factory");

const adminModule = createModule({
  name: "admin",
  owner: "platform",
  responsibilities: [
    "Audit event visibility",
    "AI run oversight",
    "Operational history",
    "Tenant-scoped administration"
  ],
  routes: [
    "GET /admin/audit-events",
    "GET /admin/ai-runs"
  ],
  tables: ["audit_events", "ai_runs"],
  integrations: []
});

module.exports = { adminModule };
