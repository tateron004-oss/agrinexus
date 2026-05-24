const { readConfig } = require("../src/config");
const { createWorkforceIntegrations, WebhookWorkforceAdapter } = require("../src/modules/workforce/integrations");
const { chooseShift } = require("../src/modules/workforce/shift-policy");

const config = readConfig({
  WORKFORCE_CALENDAR_PROVIDER: "webhook",
  WORKFORCE_NOTIFICATION_PROVIDER: "webhook",
  WORKFORCE_HRIS_PROVIDER: "webhook",
  WORKFORCE_SHIFT_PROVIDER: "webhook",
  WORKFORCE_CALENDAR_WEBHOOK_URL: "https://example.invalid/calendar",
  WORKFORCE_NOTIFICATION_WEBHOOK_URL: "https://example.invalid/notify",
  WORKFORCE_HRIS_WEBHOOK_URL: "https://example.invalid/hris",
  WORKFORCE_SHIFT_WEBHOOK_URL: "https://example.invalid/shift",
  WORKFORCE_PROVIDER_API_KEY: "test-key"
});

const integrations = createWorkforceIntegrations(config);
if (!(integrations.calendar instanceof WebhookWorkforceAdapter)) throw new Error("Expected webhook calendar adapter.");
if (!(integrations.notifications instanceof WebhookWorkforceAdapter)) throw new Error("Expected webhook notification adapter.");
if (!(integrations.hris instanceof WebhookWorkforceAdapter)) throw new Error("Expected webhook HRIS adapter.");
if (!(integrations.scheduler instanceof WebhookWorkforceAdapter)) throw new Error("Expected webhook shift adapter.");

const shift = chooseShift({ readinessScore: 60, routeName: "West Africa Corridor", preferredStart: "08:00" });
if (shift.routeCapacity !== 12) throw new Error("Expected West Africa route capacity.");

let blocked = false;
try {
  chooseShift({ readinessScore: 20, routeName: "West Africa Corridor" });
} catch {
  blocked = true;
}
if (!blocked) throw new Error("Expected low-readiness shift to be blocked.");

console.log("Workforce provider config smoke passed");
