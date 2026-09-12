const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");
const includes = (haystack, needle, label) => assert(haystack.includes(needle), `${label} must include ${needle}`);
const excludes = (haystack, needle, label) => assert(!haystack.includes(needle), `${label} must not include ${needle}`);
const runtime = require("../public/nexus-message-preparation-runtime.js");

assert(runtime, "message preparation runtime should load");
assert.equal(typeof runtime.prepareMessage, "function");
assert.equal(typeof runtime.buildMessageRequest, "function");
assert.equal(typeof runtime.providerReadiness, "function");
assert.equal(typeof runtime.messageSenderAdapter.sendSms, "function");

[
  "typed_chat",
  "voice_transcript",
  "click",
  "suggestion",
  "provider_card",
  "saved_record",
  "receipt_action",
  "system"
].forEach(type => assert(runtime.INPUT_TYPES.includes(type), `input type ${type}`));

[
  "email",
  "sms",
  "whatsapp",
  "notification",
  "provider_message",
  "clinic_message",
  "pharmacy_message",
  "mobile_clinic_message",
  "marketplace_message",
  "logistics_message",
  "workforce_message",
  "admin_review_message",
  "drone_coordination_message"
].forEach(channel => assert(runtime.CHANNELS.includes(channel), `channel ${channel}`));

[
  "clinic",
  "provider",
  "pharmacy",
  "mobile_clinic",
  "buyer",
  "seller",
  "logistics_provider",
  "driver",
  "employer",
  "applicant",
  "learner",
  "admin",
  "review_queue",
  "drone_provider",
  "field_operator",
  "custom_recipient"
].forEach(recipient => assert(runtime.RECIPIENT_TYPES.includes(recipient), `recipient ${recipient}`));

[
  "prepared_local",
  "draft_ready",
  "queued_for_review",
  "requires_confirmation",
  "requires_provider",
  "blocked_missing_credentials",
  "blocked_safety_review",
  "failed",
  "sent_verified"
].forEach(status => assert(runtime.RESULT_STATUSES.includes(status), `status ${status}`));

const routeCases = [
  ["Prepare an email to the clinic.", "email", "clinic", "health"],
  ["Text the mobile clinic about this heat illness case.", "sms", "mobile_clinic", "health"],
  ["Prepare SMS to the pharmacy.", "sms", "pharmacy", "health"],
  ["WhatsApp the seller.", "whatsapp", "seller", "marketplace"],
  ["Message the buyer about the order.", "marketplace_message", "buyer", "marketplace"],
  ["Draft an employer referral.", "workforce_message", "employer", "workforce"],
  ["Notify logistics about this shipment.", "logistics_message", "logistics_provider", "logistics"],
  ["Message the drone provider.", "drone_coordination_message", "drone_provider", "drone"],
  ["Send a message to admin review.", "admin_review_message", "admin", "communications"]
];

for (const [command, channel, recipientType, sourceMode] of routeCases) {
  assert.equal(runtime.shouldHandleBeforeLegacy(command), true, `${command} should route to message prep`);
  const request = runtime.buildMessageRequest(command, { language: "en" });
  assert.equal(request.channel, channel, `${command} channel`);
  assert.equal(request.recipientType, recipientType, `${command} recipient`);
  assert.equal(request.sourceMode, sourceMode, `${command} source mode`);
  assert(request.subject, `${command} subject`);
  assert(request.draftBody, `${command} draft`);
  assert.equal(request.noSecretValues, undefined, "request schema should not add secret data");
}

const health = runtime.prepareMessage("Prepare a provider follow-up message for blood pressure review.", { language: "en" });
includes(health.request.draftBody, "health support", "health/provider draft");
assert.equal(health.request.requiresConfirmation, true);
assert.equal(health.noExternalMessageSent, true);
assert.equal(health.noExecutionAuthorized, true);
includes(health.receipt.result, "No message was sent", "health receipt");

const pharmacy = runtime.prepareMessage("Prepare a message to the pharmacy about medication routing.", { language: "en" });
includes(pharmacy.request.draftBody, "pharmacy support message", "pharmacy draft");
includes(pharmacy.request.draftBody, "No pharmacy fulfillment has been confirmed", "pharmacy safety");

const mobileClinic = runtime.prepareMessage("Message the mobile clinic about access support.", { language: "en" });
includes(mobileClinic.request.draftBody, "mobile clinic support message", "mobile clinic draft");
includes(mobileClinic.request.draftBody, "not an emergency dispatch", "mobile clinic safety");

const marketplace = runtime.prepareMessage("Message the buyer about the order.", { language: "en" });
includes(marketplace.request.draftBody, "marketplace message", "marketplace draft");

const logistics = runtime.prepareMessage("Notify logistics about this shipment.", { language: "en" });
includes(logistics.request.draftBody, "logistics message", "logistics draft");

const workforce = runtime.prepareMessage("Draft an employer referral.", { language: "en" });
includes(workforce.request.draftBody, "workforce message", "workforce draft");

const drone = runtime.prepareMessage("Message the drone provider.", { language: "en" });
includes(drone.request.draftBody, "drone coordination message", "drone draft");
includes(drone.request.draftBody, "No drone has been dispatched", "drone safety");

const missingEnv = runtime.providerReadiness({});
assert(missingEnv.lanes.some(lane => lane.providerId === "email" && lane.missingEnvNames.includes("SMTP_HOST")), "email missing env");
assert(missingEnv.lanes.some(lane => lane.providerId === "sms" && lane.missingEnvNames.includes("TWILIO_ACCOUNT_SID")), "sms missing env");
assert(missingEnv.lanes.some(lane => lane.providerId === "whatsapp" && lane.missingEnvNames.includes("WHATSAPP_BUSINESS_TOKEN")), "whatsapp missing env");

const configuredSms = runtime.providerReadiness({
  NEXUS_MESSAGES_ENABLED: "true",
  TWILIO_ACCOUNT_SID: "secret-sid",
  TWILIO_AUTH_TOKEN: "secret-token",
  TWILIO_PHONE_NUMBER: "+15551234567"
});
const configuredJson = JSON.stringify(configuredSms);
excludes(configuredJson, "secret-sid", "provider readiness");
excludes(configuredJson, "secret-token", "provider readiness");
excludes(configuredJson, "+15551234567", "provider readiness");
assert(configuredSms.lanes.some(lane => lane.providerId === "sms" && lane.configured), "configured SMS should be recognized");

const missingRecipient = runtime.prepareMessage("Prepare SMS", { language: "en" });
assert(missingRecipient.request.missingInfo.includes("recipient contact"), "SMS without contact should require recipient contact");
assert.equal(missingRecipient.noExternalMessageSent, true);

const blockedSend = runtime.attemptSend({ rawInput: "Send SMS to the clinic", channel: "sms" }, { confirmed: false });
assert.equal(blockedSend.status, "requires_confirmation");
assert.equal(blockedSend.noExternalMessageSent, true);

const blockedProvider = runtime.attemptSend({ rawInput: "Send SMS to the clinic", channel: "sms", recipientContact: "+15550000000" }, { confirmed: true, env: {} });
assert.equal(blockedProvider.status, "blocked_missing_credentials");
assert.equal(blockedProvider.noExternalMessageSent, true);
includes(blockedProvider.receipt.blockedReason, "TWILIO_ACCOUNT_SID", "blocked receipt env names");

const spanish = runtime.prepareMessage("Prepare an email to the clinic.", { language: "es" });
includes(spanish.message, "Preparado localmente", "Spanish prepared status");

const index = read("public/index.html");
includes(index, "id=\"nexusMessagePreparationRuntime\"", "message prep UI");
includes(index, "data-nexus-message-prep-draft", "message prep draft area");
includes(index, "/nexus-message-preparation-runtime.js", "message prep script");

const app = read("public/app.js");
includes(app, "handleNexusMessagePreparationRuntimeCommand", "Ask Nexus message bridge");
includes(app, "window.NexusMessagePreparationRuntime", "message runtime global bridge");
includes(app, "source: \"nexus-message-preparation-runtime\"", "message bridge metadata");
includes(app, "typed-command-keyboard", "keyboard route");

const server = read("server.js");
includes(server, "nexus-message-preparation-runtime.js", "server require");
includes(server, "\"/api/message-preparation/status\"", "message status route");
includes(server, "\"/api/message-preparation/prepare\"", "message prepare route");
includes(server, "\"/api/message-preparation/attempt-send\"", "message send gate route");

const nav = read("public/nexus-universal-navigation-runtime.js");
[
  "communications-home",
  "message-prep",
  "email-prep",
  "sms-prep",
  "whatsapp-prep",
  "notification-prep",
  "provider-message-prep",
  "clinic-message-prep",
  "pharmacy-message-prep",
  "mobile-clinic-message-prep",
  "marketplace-message-prep",
  "logistics-message-prep",
  "workforce-message-prep",
  "drone-message-prep"
].forEach(workspace => includes(nav, workspace, `navigation workspace ${workspace}`));

const styles = read("public/styles.css");
includes(styles, ".nexus-message-preparation-runtime", "message prep styles");

const doc = read("docs/NEXUS_MESSAGE_PREPARATION_RUNTIME.md");
[
  "supported message channels",
  "supported recipient types",
  "Prepared locally - not sent",
  "Real sending requires provider credentials",
  "No external message is sent",
  "confirmation"
].forEach(text => includes(doc, text, "message prep doc"));

const pkg = JSON.parse(read("package.json"));
assert.equal(pkg.scripts["qa:nexus-message-preparation-runtime"], "node scripts/nexus-message-preparation-runtime-qa.js");

const qaSuite = read("scripts/qa-suite.js");
includes(qaSuite, "scripts/nexus-message-preparation-runtime-qa.js", "qa-suite wiring");

const forbiddenClaims = [
  "Email sent successfully",
  "SMS sent successfully",
  "WhatsApp sent successfully",
  "provider was notified",
  "pharmacy routed successfully",
  "employer referral submitted",
  "buyer contacted",
  "seller contacted"
];

for (const claim of forbiddenClaims) {
  excludes(index, claim, "index safety copy");
  excludes(app, claim, "app safety copy");
  excludes(doc, claim, "doc safety copy");
  excludes(read("public/nexus-message-preparation-runtime.js"), claim, "runtime safety copy");
}

console.log("Nexus message preparation runtime QA passed.");
