const { readConfig } = require("../src/config");
const { createHealthIntegrations, WebhookHealthAdapter } = require("../src/modules/health/integrations");
const { assessEscalation, validateCarePlanInput, safetyReviewGuidance } = require("../src/modules/health/care-policy");

const config = readConfig({
  HEALTH_TELEHEALTH_PROVIDER: "webhook",
  HEALTH_NOTIFICATION_PROVIDER: "webhook",
  HEALTH_EHR_PROVIDER: "webhook",
  HEALTH_AI_PROVIDER: "webhook",
  HEALTH_TELEHEALTH_WEBHOOK_URL: "https://example.invalid/telehealth",
  HEALTH_NOTIFICATION_WEBHOOK_URL: "https://example.invalid/notify",
  HEALTH_EHR_WEBHOOK_URL: "https://example.invalid/ehr",
  HEALTH_AI_WEBHOOK_URL: "https://example.invalid/ai",
  HEALTH_PROVIDER_API_KEY: "test-key"
});

const integrations = createHealthIntegrations(config);
if (!(integrations.telehealth instanceof WebhookHealthAdapter)) throw new Error("Expected telehealth webhook adapter.");
if (!(integrations.notifications instanceof WebhookHealthAdapter)) throw new Error("Expected notification webhook adapter.");
if (!(integrations.ehr instanceof WebhookHealthAdapter)) throw new Error("Expected EHR webhook adapter.");
if (!(integrations.ai instanceof WebhookHealthAdapter)) throw new Error("Expected health AI webhook adapter.");

const escalation = assessEscalation({
  country: { risk_level: "High", heat_index_c: 39, queue_status: "2 callers ahead" },
  intake: { risk_level: "Routine" }
});
if (!escalation.shouldEscalate || escalation.reasons.length < 2) throw new Error("Expected escalation reasons.");

validateCarePlanInput({
  patientRef: "AN-PAT-001",
  needSummary: "Triage review",
  countryName: "Nigeria",
  riskLevel: "Moderate"
});

const guidance = safetyReviewGuidance({ country: { risk_level: "High", heat_index_c: 39, data_quality_rate: 80 } });
if (guidance.length < 2) throw new Error("Expected safety guidance.");

console.log("Health provider config smoke passed");
