const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const twilioProvider = read("server/providers/twilioProvider.js");
const envExample = read(".env.example");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.includes(token), `${label} must not include ${token}`);
}

[
  "nexusCommunicationsProviderStatus",
  "nexusCommunicationsSendMessage",
  "sendNexusTwilioCommunication",
  "NEXUS_COMMUNICATIONS_PROVIDER",
  "NEXUS_SMS_ENABLED",
  "NEXUS_MESSAGES_ENABLED",
  "NEXUS_WHATSAPP_ENABLED",
  "TWILIO_ACCOUNT_SID",
  "TWILIO_AUTH_TOKEN",
  "TWILIO_PHONE_NUMBER",
  "TWILIO_WHATSAPP_FROM",
  "TWILIO_STATUS_CALLBACK_URL",
  "/api/nexus/communications/status",
  "/api/nexus/communications/send-message",
  "confirmation_required",
  "consent_required",
  "\"virtual-care\"",
  "sms-provider-unconfigured",
  "whatsapp-provider-unconfigured",
  "sms-blocked",
  "whatsapp-blocked",
  "No external",
  "noSecretValuesReturned"
].forEach(token => includes(server, token, `server ${token}`));

[
  "NEXUS_COMMUNICATIONS_PROVIDER=twilio",
  "NEXUS_SMS_ENABLED=false",
  "NEXUS_MESSAGES_ENABLED=false",
  "NEXUS_WHATSAPP_ENABLED=false",
  "TWILIO_ACCOUNT_SID=",
  "TWILIO_AUTH_TOKEN=",
  "TWILIO_PHONE_NUMBER=",
  "TWILIO_WHATSAPP_FROM=",
  "TWILIO_STATUS_CALLBACK_URL="
].forEach(token => includes(envExample, token, `.env.example ${token}`));

[
  "data-testid=\"nexus-communications-provider-status-card\"",
  "data-testid=\"nexus-sms-provider-status\"",
  "data-testid=\"nexus-sms-missing-env\"",
  "data-testid=\"nexus-whatsapp-provider-status\"",
  "data-testid=\"nexus-whatsapp-missing-env\"",
  "data-testid=\"nexus-communications-send-packet-panel\"",
  "data-testid=\"nexus-communications-recipient\"",
  "data-testid=\"nexus-communications-confirmed\"",
  "data-testid=\"nexus-communications-consent\"",
  "data-testid=\"nexus-sms-send-packet\"",
  "data-testid=\"nexus-whatsapp-send-packet\"",
  "/api/nexus/communications/status",
  "/api/nexus/communications/send-message",
  "nexusCommunicationsBound",
  "closest?.(\"[data-testid='nexus-communications-send-packet-panel']\")"
].forEach(token => includes(app, token, `app ${token}`));

[
  "SMS and WhatsApp sends only after confirmation",
  "Sensitive message bodies stay short",
  "Confirm the send before continuing",
  "Consent is required for sensitive health/provider packet notifications",
  "queued the packet locally until Twilio is configured"
].forEach(token => includes(app, token, `app safe copy ${token}`));

[
  "Nexus has prepared a ${domain} review packet for approved review",
  "This is not an emergency alert",
  "No purchase or payment has been made",
  "No booking or dispatch has occurred"
].forEach(token => includes(server, token, `safe communications body ${token}`));

assert(twilioProvider.includes("NEXUS_SMS_ENABLED") && twilioProvider.includes("NEXUS_MESSAGES_ENABLED"), "Twilio provider should support both NEXUS_SMS_ENABLED and legacy NEXUS_MESSAGES_ENABLED");
assert(server.includes("body.confirmed !== true") && server.includes("body.consent !== true"), "send route helper should block without confirmation and sensitive consent");
assert(server.includes("\"virtual-care\""), "virtual-care must remain a sensitive communications consent domain");
assert(server.includes("This is not an emergency alert"), "healthcare-sensitive communications should use short notification language");
assert(server.includes("queueNexusCommunicationsFallback"), "unconfigured/failed sends should use local queue fallback");
assert(server.includes("communications_provider_status_answered"), "Ask Nexus should answer communications provider status");
assert(server.includes("noFakeSmsClaim") && server.includes("noFakeWhatsappClaim"), "Ask Nexus should avoid fake send claims");
assert(server.includes("nexusEmailProviderStatus") && app.includes("renderNexusEmailProviderStatusCard"), "existing email provider lane should remain intact");
assert(server.includes("nexusLiveKnowledgeAllModesQuery") && app.includes("renderNexusKnowledgeRailPanel"), "existing Live Knowledge lane should remain intact");

[
  "TWILIO_AUTH_TOKEN: ",
  "TWILIO_ACCOUNT_SID: ",
  "authorization: `Basic ${env.TWILIO_AUTH_TOKEN}`",
  "SMS was sent without confirmation",
  "WhatsApp was sent without confirmation",
  "diagnosed the patient",
  "prescribed medication",
  "emergency dispatch was started",
  "payment was processed"
].forEach(token => {
  excludes(server, token, `server unsafe token ${token}`);
  excludes(app, token, `app unsafe token ${token}`);
});

assert.strictEqual(
  packageJson.scripts["qa:nexus-sms-whatsapp-provider-activation"],
  "node scripts/nexus-sms-whatsapp-provider-activation-qa.js",
  "package alias should run SMS/WhatsApp provider activation QA"
);
includes(qaSuite, "scripts/nexus-sms-whatsapp-provider-activation-qa.js", "qa suite should include SMS/WhatsApp provider activation QA");

console.log("nexus-sms-whatsapp-provider-activation QA passed");
