const { createModule } = require("../../module-factory");

const aiModule = createModule({
  name: "ai",
  owner: "intelligence",
  responsibilities: [
    "OpenAI-backed command center",
    "Price guidance",
    "Route risk review",
    "Care-plan drafting",
    "Safety review summaries",
    "AI run audit history"
  ],
  routes: [
    "POST /ai/command-center",
    "POST /ai/price-guidance",
    "POST /ai/route-risk",
    "POST /ai/care-plan",
    "GET /ai/runs"
  ],
  tables: ["ai_runs", "audit_events"],
  integrations: ["OpenAI Responses API"]
});

module.exports = { aiModule };
