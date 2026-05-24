const { createModule } = require("../../module-factory");

const coreModule = createModule({
  name: "core",
  owner: "platform",
  responsibilities: [
    "Country programs",
    "Facilities",
    "Program metrics",
    "Unified profile read model",
    "Audit logging"
  ],
  routes: [
    "GET /countries",
    "GET /countries/:id",
    "GET /countries/:id/metrics",
    "GET /facilities",
    "GET /profile/unified",
    "GET /audit-events"
  ],
  tables: ["countries", "program_metrics", "facilities", "audit_events"],
  integrations: ["data import jobs", "analytics warehouse"]
});

module.exports = { coreModule };
