const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const runtime = require(path.join(root, "public", "nexus-genesis-provider-abstraction.js"));
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const index = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");
const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function provider(id) {
  const found = runtime.inspectProvider(id, { includeTechnical: true });
  assert(found, `provider ${id} should be registered`);
  return found;
}

function capability(id) {
  const found = runtime.listCapabilities().find(item => item.capabilityId === id);
  assert(found, `capability ${id} should be registered`);
  return found;
}

assert.strictEqual(runtime.SERVICE_ID, "nexus_genesis_vendor_neutral_provider_abstraction");
assert.strictEqual(runtime.SCHEMA_VERSION, "nexus.genesis.provider-abstraction.v1");
assert(runtime.PROVIDERS.length >= 50, "provider registry should cover many vendor categories");
assert(runtime.CAPABILITIES.length >= 70, "capability registry should cover the master provider families");

[
  "public",
  "internal",
  "personal",
  "sensitive_personal",
  "health",
  "mental_health",
  "youth",
  "employment",
  "financial",
  "payment",
  "location",
  "biometric",
  "provider_credential",
  "government_restricted"
].forEach(item => assert(runtime.DATA_CLASSES.includes(item), `data class ${item} must exist`));

[
  "available",
  "configured",
  "credential-blocked",
  "configuration-blocked",
  "jurisdiction-blocked",
  "compliance-blocked",
  "legal-review-required",
  "license-restricted",
  "sandbox-only",
  "production-ready",
  "degraded",
  "unavailable",
  "disabled",
  "deprecated",
  "experimental",
  "not production-authorized"
].forEach(item => assert(runtime.PROVIDER_STATES.includes(item), `provider state ${item} must exist`));

[
  "ai.reasoning.general",
  "ai.reasoning.health",
  "ai.embedding",
  "ai.translation",
  "cloud.compute",
  "cloud.secrets",
  "communications.email",
  "communications.sms",
  "communications.whatsapp",
  "communications.voice_call",
  "communications.video",
  "maps.route",
  "weather.forecast",
  "climate.agriculture",
  "health.fhir",
  "health.telehealth",
  "health.appointment",
  "health.pharmacy",
  "health.crisis",
  "workforce.job_search",
  "workforce.application",
  "learning.enrollment",
  "agriculture.extension",
  "agriculture.buyer",
  "agriculture.finance",
  "logistics.booking",
  "drone.mission",
  "payments.card",
  "payments.mobile_money",
  "finance.loan"
].forEach(capability);

[
  "local.nexus",
  "openai",
  "anthropic",
  "azure-openai",
  "google-ai",
  "aws-bedrock",
  "local-model",
  "aws",
  "azure",
  "google-cloud",
  "browser-speech",
  "google-maps",
  "twilio-sms",
  "twilio-whatsapp",
  "twilio-voice",
  "sendgrid-email",
  "stripe-card",
  "mobile-money",
  "fhir-provider",
  "cms-npi-public",
  "telehealth-provider",
  "pharmacy-provider",
  "workforce-public",
  "employer-partner",
  "training-provider",
  "agriculture-authority",
  "extension-partner",
  "buyer-partner",
  "logistics-provider",
  "drone-provider"
].forEach(provider);

const status = runtime.status({});
assert.strictEqual(status.ok, true);
assert.strictEqual(status.awsRequired, false, "AWS must be optional");
assert.strictEqual(status.localFallbackAvailable, true, "local fallback must exist");
assert.strictEqual(status.externalExecutionEnabledByDefault, false, "external execution must default off");
assert.strictEqual(status.noSecretExposure, true, "status must promise no secret exposure");

const fakeSecretEnv = {
  OPENAI_API_KEY: "sk-test-secret-value",
  TWILIO_ACCOUNT_SID: "AC1234567890",
  TWILIO_AUTH_TOKEN: "super-secret-token",
  TWILIO_FROM_NUMBER: "+15551234567",
  STRIPE_SECRET_KEY: "sk_live_secret"
};
const redacted = runtime.listProviders({ env: fakeSecretEnv });
const redactedJson = JSON.stringify(redacted);
assert(!redactedJson.includes("sk-test-secret-value"), "OpenAI key must not be exposed");
assert(!redactedJson.includes("super-secret-token"), "Twilio token must not be exposed");
assert(!redactedJson.includes("+15551234567"), "phone value must not be exposed");
assert(!redactedJson.includes("sk_live_secret"), "Stripe secret must not be exposed");
assert(redacted.find(item => item.providerId === "openai").configured, "OpenAI should show configured without exposing value");

const localSelection = runtime.selectProvider({ capabilityId: "ai.reasoning.general", dataClass: "public", env: {} });
assert(localSelection.selectedProvider, "general AI should select a safe provider");
assert.strictEqual(localSelection.executionAuthority, false, "provider selection must not grant execution authority");
assert(["local-fallback-selected", "configured-provider-selected"].includes(localSelection.state), "provider selection should pick a local or configured path");

const smsSelection = runtime.selectProvider({
  capabilityId: "communications.sms",
  dataClass: "personal",
  country: "US",
  consentState: "missing",
  confirmationState: "missing",
  env: {}
});
assert.strictEqual(smsSelection.executionAuthority, false, "SMS selection must not authorize execution");
assert.strictEqual(smsSelection.selectedProvider.providerId, "twilio-sms", "Twilio SMS should be evaluated as the SMS provider");
assert.strictEqual(smsSelection.state, "blocked", "unconfigured SMS should remain blocked");

const smsPolicy = runtime.evaluatePolicy({
  capabilityId: "communications.sms",
  providerId: "twilio-sms",
  dataClass: "personal",
  country: "US",
  consentState: "missing",
  confirmationState: "missing"
});
assert.strictEqual(smsPolicy.allowed, false, "SMS policy should block without consent/confirmation");
assert.strictEqual(smsPolicy.executionAuthority, false, "SMS policy must not grant authority");
assert(smsPolicy.reasons.some(item => /Consent is required/i.test(item)), "SMS policy must require consent");
assert(smsPolicy.reasons.some(item => /confirmation/i.test(item)), "SMS policy must require confirmation");

const smsExecution = runtime.execute({
  capabilityId: "communications.sms",
  dataClass: "personal",
  country: "US",
  consentState: "missing",
  confirmationState: "missing",
  env: {}
});
assert.strictEqual(smsExecution.noLiveExternalExecution, true, "SMS execution packet must block live execution");
assert.strictEqual(smsExecution.receipt.acknowledgementIsNotOutcome, true, "receipt must distinguish acknowledgement from outcome");
assert.strictEqual(smsExecution.receipt.noSecretExposure, true, "receipt must not expose secrets");
assert(!/sent successfully|provider confirmed|payment completed|appointment booked/i.test(JSON.stringify(smsExecution)), "blocked execution must not claim live success");

const localExecution = runtime.execute({
  capabilityId: "agriculture.extension",
  dataClass: "public",
  country: "Kenya",
  consentState: "missing",
  confirmationState: "missing",
  env: {}
});
assert.strictEqual(localExecution.status, "local_fallback_completed", "local agriculture path should complete locally");
assert.strictEqual(localExecution.noLiveExternalExecution, true);

const providerStatus = runtime.capabilityStatus("Which providers are connected?", { env: {} });
assert.strictEqual(providerStatus.packetType, "nexus_genesis_provider_abstraction_capability_status_packet");
assert.strictEqual(providerStatus.awsRequired, false);
assert.strictEqual(providerStatus.externalExecutionEnabled, false);
assert(/credential-gated|policy-gated|local/i.test(providerStatus.answer), "status answer should explain gates/local path");

const awsAnswer = runtime.capabilityStatus("Is AWS required?", { env: {} });
assert.strictEqual(awsAnswer.awsRequired, false, "AWS required answer must stay false");
assert(/AWS is not required/i.test(awsAnswer.answer), "AWS answer must be clear");

[
  "Which providers are connected?",
  "Is AWS required?",
  "Which AI model is Nexus using?",
  "Can Nexus send messages?",
  "Can Nexus book appointments?",
  "Can Nexus process payments?",
  "What is running locally?",
  "What is production authorized?",
  "Why is this action unavailable?"
].forEach(command => assert.strictEqual(runtime.shouldHandle(command), true, `should handle ${command}`));

includes(index, "nexus-genesis-provider-abstraction.js", "index");
includes(server, "nexusGenesisProviderAbstraction", "server");
[
  "/api/nexus/provider-abstraction/status",
  "/api/nexus/provider-abstraction/providers",
  "/api/nexus/provider-abstraction/capabilities",
  "/api/nexus/provider-abstraction/select",
  "/api/nexus/provider-abstraction/policy",
  "/api/nexus/provider-abstraction/execute",
  "/api/nexus/provider-abstraction/receipt",
  "/api/nexus/provider-abstraction/capability-status",
  "/api/nexus/provider-abstraction/sdk"
].forEach(route => includes(server, route, "server"));

includes(app, "handleNexusGenesisProviderAbstractionCommand", "app");
includes(app, "renderNexusGenesisProviderAbstractionCard", "app");
includes(app, "Provider Capability Status", "app");
includes(app, "noExternalExecution", "app");
assert(Object.prototype.hasOwnProperty.call(packageJson.scripts, "qa:nexus-genesis-provider-abstraction"), "package scripts should include qa:nexus-genesis-provider-abstraction");
assert.strictEqual(packageJson.scripts["qa:nexus-genesis-provider-abstraction"], "node scripts/nexus-genesis-provider-abstraction-qa.js");
includes(qaSuite, "scripts/nexus-genesis-provider-abstraction-qa.js", "qa-suite");

const unsafeClaims = [
  "AWS required",
  "sent successfully",
  "payment completed",
  "appointment booked",
  "provider confirmed"
];
const runtimeText = fs.readFileSync(path.join(root, "public", "nexus-genesis-provider-abstraction.js"), "utf8");
unsafeClaims.forEach(claim => {
  if (claim === "AWS required") {
    assert(!/AWS required:\s*yes/i.test(runtimeText), "runtime must not say AWS is required");
  } else {
    assert(!runtimeText.includes(claim), `runtime must not include unsafe claim: ${claim}`);
  }
});

console.log("Nexus Genesis provider abstraction QA passed.");
