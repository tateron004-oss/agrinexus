const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const runtime = require("../public/nexus-full-communication-runtime.js");

function assertIncludes(text, expected, label) {
  assert.ok(String(text).includes(expected), `${label} should include ${expected}`);
}

function assertNotIncludes(text, rejected, label) {
  assert.ok(!String(text).includes(rejected), `${label} should not include ${rejected}`);
}

[
  "typed_chat",
  "voice_transcript",
  "message_action",
  "call_action",
  "receipt_action"
].forEach(type => assert.ok(runtime.INPUT_TYPES.includes(type), `input type ${type} should exist`));

[
  "screen_response",
  "spoken_response",
  "prepared_message",
  "prepared_call",
  "confirmation_request",
  "receipt",
  "blocked_provider_notice"
].forEach(type => assert.ok(runtime.OUTPUT_TYPES.includes(type), `output type ${type} should exist`));

[
  "answered_local",
  "prepared_local",
  "requires_confirmation",
  "requires_provider",
  "blocked_missing_credentials",
  "blocked_unsupported_browser",
  "completed_verified"
].forEach(status => assert.ok(runtime.RESULT_STATUSES.includes(status), `result status ${status} should exist`));

["en", "es", "fr", "sw", "ar", "pt"].forEach(language => {
  assert.ok(runtime.SUPPORTED_LANGUAGES[language], `${language} should be supported`);
});

const readiness = runtime.communicationProviderReadiness({}, {
  speechRecognition: false,
  speechSynthesis: false,
  indefiniteBackgroundListening: false
});
assert.equal(readiness.ok, true);
assert.equal(readiness.noSecretValues, true);
assert.equal(readiness.noExternalExecutionWithoutConfirmation, true);
assert.ok(readiness.lanes.length >= 15, "communication readiness should cover all provider lanes");
assert.ok(readiness.lanes.some(lane => lane.providerId === "browser-voice-input" && lane.statusLabel === "browser_unsupported"));
assert.ok(readiness.lanes.some(lane => lane.providerId === "email" && lane.missingEnvNames.includes("SMTP_HOST")));
assert.ok(readiness.lanes.some(lane => lane.providerId === "sms" && lane.missingEnvNames.includes("TWILIO_ACCOUNT_SID")));
assert.ok(readiness.lanes.some(lane => lane.providerId === "whatsapp" && lane.missingEnvNames.includes("WHATSAPP_BUSINESS_TOKEN")));
assert.ok(readiness.lanes.some(lane => lane.providerId === "telephony-inbound" && lane.missingEnvNames.includes("TWILIO_VOICE_WEBHOOK_URL")));

const configured = runtime.communicationProviderReadiness({
  SMTP_HOST: "smtp.local",
  TWILIO_ACCOUNT_SID: "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  TWILIO_AUTH_TOKEN: "secret-token",
  TWILIO_PHONE_NUMBER: "+15551234567",
  TAVILY_API_KEY: "secret-live-key",
  NEXUS_PROVIDER_MESSAGE_API_KEY: "provider-secret"
}, {
  speechRecognition: true,
  speechSynthesis: true,
  indefiniteBackgroundListening: false
});
const configuredJson = JSON.stringify(configured);
assertNotIncludes(configuredJson, "secret-token", "configured readiness JSON");
assertNotIncludes(configuredJson, "+15551234567", "configured readiness JSON");
assertNotIncludes(configuredJson, "secret-live-key", "configured readiness JSON");
assert.ok(configured.lanes.some(lane => lane.providerId === "browser-voice-input" && lane.statusLabel === "browser_supported"));
assert.ok(configured.lanes.some(lane => lane.providerId === "sms" && lane.configured));

const smsRequest = runtime.buildCommunicationRequest("Prepare an SMS to the clinic about my blood pressure", {
  language: "en",
  inputType: "typed_chat"
});
assert.equal(smsRequest.intentType, "message_preparation_request");
assert.equal(smsRequest.communicationChannel, "sms");
assert.equal(smsRequest.recipientType, "clinic");
assert.equal(smsRequest.sourceMode, "health");
assert.equal(smsRequest.requiresConfirmation, true);
assert.equal(smsRequest.consentStatus, "required");

const emailPrep = runtime.prepareMessage("Prepare an email to the employer about training records", {
  language: "en"
});
assert.equal(emailPrep.ok, true);
assert.equal(emailPrep.outputType, "prepared_message");
assert.equal(emailPrep.resultStatus, "prepared_local");
assert.equal(emailPrep.noExternalMessageSent, true);
assert.equal(emailPrep.noExecutionAuthorized, true);
assertIncludes(emailPrep.message, "No message was sent", "message preparation result");
assert.ok(emailPrep.receipt.receiptId.startsWith("comm-receipt-"));
assert.equal(emailPrep.receipt.verificationStatus, "local_receipt_created");

const emergency = runtime.answerLocally("Nexus, call emergency services now", { language: "en" });
assertIncludes(emergency.answer, "cannot call or dispatch emergency services", "emergency boundary");
assert.equal(emergency.noExecutionAuthorized, true);

assert.equal(runtime.shouldHandleBeforeLegacy("Prepare a WhatsApp message to the seller"), true);
assert.equal(runtime.shouldHandleBeforeLegacy("Call the pharmacy about my refill"), true);
assert.equal(runtime.shouldHandleBeforeLegacy("What communications are connected?"), true);
assert.equal(runtime.shouldHandleBeforeLegacy("Nexus, open agriculture help"), false);

const index = read("public/index.html");
assertIncludes(index, "id=\"nexusFullCommunicationRuntime\"", "full communication UI");
assertIncludes(index, "data-nexus-full-communication-action=\"status\"", "status control");
assertIncludes(index, "data-nexus-full-communication-receipts", "receipt area");
assertIncludes(index, "/nexus-full-communication-runtime.js", "runtime script");

const app = read("public/app.js");
assertIncludes(app, "handleNexusFullCommunicationRuntimeCommand", "Ask Nexus bridge");
assertIncludes(app, "window.NexusFullCommunicationRuntime", "runtime global bridge");
assertIncludes(app, "source: \"nexus-full-communication-runtime\"", "bridge metadata");
assertIncludes(app, "typed-command-submit", "typed command integration");
assertIncludes(app, "typed-command-keyboard", "keyboard command integration");
assertIncludes(app, "handleNexusTelephonyCallRuntimeCommand", "telephony bridge should remain");

const server = read("server.js");
assertIncludes(server, "nexus-full-communication-runtime.js", "server require");
assertIncludes(server, "\"/api/communication/status\"", "communication status route");
assertIncludes(server, "\"/api/communication/prepare-message\"", "communication prepare message route");
assertIncludes(server, "nexusFullCommunicationRuntime.prepareMessage", "server prepare handler");

const styles = read("public/styles.css");
assertIncludes(styles, ".nexus-full-communication-runtime", "communication styles");
assertIncludes(styles, ".nexus-full-communication-providers", "provider styles");

const doc = read("docs/NEXUS_FULL_COMMUNICATION_RUNTIME.md");
[
  "Typed Ask Nexus",
  "browser speech-to-text",
  "browser text-to-speech",
  "Email preparation",
  "SMS preparation",
  "WhatsApp preparation",
  "Outbound call preparation",
  "Inbound call readiness",
  "No external message is sent",
  "No call is placed",
  "Real execution requires provider credentials"
].forEach(text => assertIncludes(doc, text, "full communication doc"));

const pkg = JSON.parse(read("package.json"));
assert.equal(pkg.scripts["qa:nexus-full-communication-runtime"], "node scripts/nexus-full-communication-runtime-qa.js");

const qaSuite = read("scripts/qa-suite.js");
assertIncludes(qaSuite, "scripts/nexus-full-communication-runtime-qa.js", "qa-suite wiring");

const forbiddenClaims = [
  "SMS sent successfully",
  "WhatsApp sent successfully",
  "Email sent successfully",
  "call placed successfully",
  "emergency services were contacted"
];
for (const claim of forbiddenClaims) {
  assertNotIncludes(index, claim, "index user-facing copy");
  assertNotIncludes(app, claim, "app user-facing copy");
  assertNotIncludes(doc, claim, "documentation safety copy");
}

console.log("Nexus full communication runtime QA passed.");
