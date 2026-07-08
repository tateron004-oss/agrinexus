const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const runtime = require("../public/nexus-telephony-call-runtime.js");

function assertIncludes(text, expected, label) {
  assert.ok(String(text).includes(expected), `${label} should include ${expected}`);
}

function assertNotIncludes(text, rejected, label) {
  assert.ok(!String(text).includes(rejected), `${label} should not include ${rejected}`);
}

assert.deepEqual(runtime.SUPPORTED_PROVIDERS, ["twilio", "vonage", "telnyx", "signalwire", "plivo", "generic"]);
[
  "prepared_local",
  "queued_for_review",
  "requires_confirmation",
  "requires_provider",
  "blocked_missing_credentials",
  "blocked_inbound_webhook",
  "blocked_outbound_provider",
  "failed",
  "completed_verified"
].forEach(status => assert.ok(runtime.RESULT_STATUSES.includes(status), `result status ${status} should exist`));

const disabled = runtime.detectTelephonyProviderStatus({});
assert.equal(disabled.providerId, "twilio");
assert.equal(disabled.enabled, false);
assert.equal(disabled.ready, false);
assert.equal(disabled.testModeAvailable, true);
assert.ok(disabled.missingEnvNames.includes("NEXUS_CALLS_ENABLED"));
assert.ok(disabled.missingEnvNames.includes("TWILIO_ACCOUNT_SID"));
assert.equal(disabled.noSecretValues, true);

const twilioConfiguredNoWebhook = runtime.detectTelephonyProviderStatus({
  NEXUS_CALLS_ENABLED: "true",
  TWILIO_ACCOUNT_SID: "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  TWILIO_AUTH_TOKEN: "super-secret-token",
  TWILIO_PHONE_NUMBER: "+15551234567"
});
assert.equal(twilioConfiguredNoWebhook.providerId, "twilio");
assert.equal(twilioConfiguredNoWebhook.configured, true);
assert.equal(twilioConfiguredNoWebhook.outboundReady, true);
assert.equal(twilioConfiguredNoWebhook.inboundReady, false);
assert.equal(twilioConfiguredNoWebhook.statusLabel, "inbound_blocked");
const twilioJson = JSON.stringify(twilioConfiguredNoWebhook);
assertNotIncludes(twilioJson, "super-secret-token", "Twilio status JSON");
assertNotIncludes(twilioJson, "+15551234567", "Twilio status JSON");

const twilioReady = runtime.detectTelephonyProviderStatus({
  NEXUS_CALLS_ENABLED: "true",
  TWILIO_ACCOUNT_SID: "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  TWILIO_AUTH_TOKEN: "token",
  TWILIO_PHONE_NUMBER: "+15551234567",
  TWILIO_VOICE_WEBHOOK_URL: "https://hooks.local/twilio"
});
assert.equal(twilioReady.ready, true);
assert.equal(twilioReady.inboundReady, true);
assert.equal(twilioReady.outboundReady, true);
assert.equal(twilioReady.statusLabel, "ready");

const providers = {
  vonage: { NEXUS_TELEPHONY_PROVIDER: "vonage", NEXUS_CALLS_ENABLED: "true", VONAGE_API_KEY: "key", VONAGE_API_SECRET: "secret", VONAGE_PHONE_NUMBER: "+15550000001", NEXUS_TELEPHONY_WEBHOOK_URL: "https://hooks.local/vonage" },
  telnyx: { NEXUS_TELEPHONY_PROVIDER: "telnyx", NEXUS_CALLS_ENABLED: "true", TELNYX_API_KEY: "key", TELNYX_PHONE_NUMBER: "+15550000002", NEXUS_TELEPHONY_WEBHOOK_URL: "https://hooks.local/telnyx" },
  signalwire: { NEXUS_TELEPHONY_PROVIDER: "signalwire", NEXUS_CALLS_ENABLED: "true", SIGNALWIRE_PROJECT_ID: "project", SIGNALWIRE_TOKEN: "token", SIGNALWIRE_PHONE_NUMBER: "+15550000003", NEXUS_TELEPHONY_WEBHOOK_URL: "https://hooks.local/signalwire" },
  plivo: { NEXUS_TELEPHONY_PROVIDER: "plivo", NEXUS_CALLS_ENABLED: "true", PLIVO_AUTH_ID: "id", PLIVO_AUTH_TOKEN: "token", PLIVO_PHONE_NUMBER: "+15550000004", NEXUS_TELEPHONY_WEBHOOK_URL: "https://hooks.local/plivo" },
  generic: { NEXUS_TELEPHONY_PROVIDER: "generic", NEXUS_CALLS_ENABLED: "true", NEXUS_TELEPHONY_API_KEY: "key", NEXUS_TELEPHONY_FROM_NUMBER: "+15550000005", NEXUS_TELEPHONY_WEBHOOK_URL: "https://hooks.local/generic" }
};
for (const [providerId, env] of Object.entries(providers)) {
  const status = runtime.detectTelephonyProviderStatus(env);
  assert.equal(status.providerId, providerId);
  assert.equal(status.ready, true, `${providerId} should be ready with required fake env shape`);
  assert.equal(status.noSecretValues, true);
}

assert.equal(runtime.shouldHandleCallCommand("Can Nexus call the pharmacy?"), true);
assert.equal(runtime.classifyCallRequest("Call the mobile clinic").recipientType, "mobile_clinic");
assert.equal(runtime.classifyCallRequest("Call the logistics provider").recipientType, "logistics_provider");
assert.equal(runtime.classifyCallRequest("Call an employer about the job").recipientType, "employer");

const pharmacy = runtime.prepareCall("Nexus, call the pharmacy about my medication pickup.", { env: {} });
assert.equal(pharmacy.resultStatus, "prepared_local");
assert.equal(pharmacy.noExecutionAuthorized, true);
assert.equal(pharmacy.call.recipientType, "pharmacy");
assertIncludes(pharmacy.message, "I prepared the call locally", "prepared call message");
assertIncludes(pharmacy.call.script, "Confirm the recipient", "prepared call script");
assert.ok(pharmacy.receipt.receiptId.startsWith("call-receipt-"));

const swahili = runtime.prepareCall({ callPurpose: "mobile clinic access", recipientType: "mobile_clinic", language: "sw", notes: "Ask about clinic day." }, { env: {} });
assert.equal(swahili.call.language, "sw");
assertIncludes(swahili.call.script, "Habari", "Swahili call script");

const emergency = runtime.prepareCall("Nexus, call 911 now.", { env: twilioReady });
assert.equal(emergency.ok, false);
assert.equal(emergency.call.recipientType, "emergency");
assert.equal(emergency.resultStatus, "blocked_outbound_provider");
assertIncludes(emergency.message, "contact local emergency services", "emergency boundary");

const unconfirmed = runtime.attemptOutboundCall({ command: "Call the clinic", toNumber: "+15551230000" }, { providerStatus: twilioReady });
assert.equal(unconfirmed.resultStatus, "requires_confirmation");
assert.equal(unconfirmed.ok, false);

const missingCredentials = runtime.attemptOutboundCall({ command: "Call the clinic", toNumber: "+15551230000", confirmed: true }, { env: {} });
assert.equal(missingCredentials.resultStatus, "blocked_missing_credentials");
assert.ok(missingCredentials.missingEnvNames.includes("TWILIO_ACCOUNT_SID"));

const configuredBlocked = runtime.attemptOutboundCall({ command: "Call the clinic", toNumber: "+15551230000", confirmed: true }, { providerStatus: twilioReady });
assert.equal(configuredBlocked.resultStatus, "blocked_outbound_provider");
assertIncludes(configuredBlocked.message, "final provider adapter gate", "configured outbound boundary");

const inboundBlocked = runtime.inboundReadiness({ env: {} });
assert.equal(inboundBlocked.resultStatus, "blocked_inbound_webhook");
assertIncludes(inboundBlocked.message, "Inbound phone calls are not active", "inbound blocked message");

const server = read("server.js");
assertIncludes(server, "nexus-telephony-call-runtime.js", "server require");
assertIncludes(server, '"/api/telephony/status"', "server status route");
assertIncludes(server, '"/api/telephony/prepare-call"', "server prepare route");
assertIncludes(server, '"/api/telephony/outbound-call"', "server outbound route");
assertIncludes(server, '"/api/telephony/inbound-webhook"', "server inbound route");
assertIncludes(server, "nexusTelephonyCallRuntime.attemptOutboundCall", "server safe outbound handler");

const index = read("public/index.html");
assertIncludes(index, "/nexus-telephony-call-runtime.js", "index script");
assertIncludes(index, "id=\"nexusTelephonyCallRuntime\"", "telephony UI");
assertIncludes(index, "data-nexus-telephony-action=\"prepare\"", "telephony prepare button");
assertIncludes(index, "data-nexus-telephony-action=\"attempt\"", "telephony attempt gate button");
assertIncludes(index, "data-nexus-telephony-receipts", "telephony receipts");
assertIncludes(index, "Not for emergency calls", "telephony emergency boundary");

const app = read("public/app.js");
assertIncludes(app, "handleNexusTelephonyCallRuntimeCommand", "app command bridge");
assertIncludes(app, "window.NexusTelephonyCallRuntime", "app runtime bridge");
assertIncludes(app, "source: \"nexus-telephony-call-runtime\"", "app bridge metadata");
assertIncludes(app, "typed-command-submit", "typed command bridge");

const styles = read("public/styles.css");
assertIncludes(styles, ".nexus-telephony-call-runtime", "telephony styles");
assertIncludes(styles, ".nexus-telephony-receipts", "receipt styles");

const doc = read("docs/NEXUS_TELEPHONY_CALL_RUNTIME.md");
[
  "TWILIO_ACCOUNT_SID",
  "VONAGE_API_KEY",
  "TELNYX_API_KEY",
  "SIGNALWIRE_PROJECT_ID",
  "PLIVO_AUTH_ID",
  "NEXUS_TELEPHONY_API_KEY",
  "Nexus does not call emergency services",
  "Real outbound calls require"
].forEach(text => assertIncludes(doc, text, "telephony doc"));

const pkg = JSON.parse(read("package.json"));
assert.equal(pkg.scripts["qa:nexus-telephony-call-runtime"], "node scripts/nexus-telephony-call-runtime-qa.js");

const qaSuite = read("scripts/qa-suite.js");
assertIncludes(qaSuite, "scripts/nexus-telephony-call-runtime-qa.js", "qa-suite wiring");

console.log("Nexus telephony call runtime QA passed.");
