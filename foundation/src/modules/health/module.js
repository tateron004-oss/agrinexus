const { createModule } = require("../../module-factory");

const healthModule = createModule({
  name: "health",
  owner: "health",
  responsibilities: [
    "Patient intake",
    "Queue status",
    "Representative escalation",
    "Care-plan generation",
    "Safety review workflow"
  ],
  routes: [
    "GET /health/intakes",
    "POST /health/intakes",
    "POST /health/intakes/:id/escalate",
    "POST /health/safety-review",
    "POST /health/care-plan"
  ],
  tables: ["patient_intakes", "program_metrics", "ai_runs"],
  integrations: ["telehealth provider", "SMS/voice provider", "EHR/FHIR provider"]
});

module.exports = { healthModule };
