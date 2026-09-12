const assert = require("node:assert/strict");
const path = require("node:path");

const brain = require(path.resolve(__dirname, "..", "server/nexusAgenticBrainRuntime.js"));

(async () => {
  const db = { profile: {} };
  const result = await brain.handleCommand({
    command: "Create a chronic care case for diabetes and obesity and prepare questions for a doctor."
  }, db, {});

  assert.equal(result.ok, true);
  const readiness = result.task.providerOnboardingReadiness;
  assert(readiness, "provider onboarding readiness must be attached to local task");
  assert.equal(readiness.blockExternalSend, true);
  assert.equal(readiness.providerProfileSchema.integrationStatus, "local-only");
  assert.equal(readiness.providerProfileSchema.consentRequired, true);
  assert.equal(readiness.providerProfileSchema.dataSharingPermissionRequired, true);
  assert(readiness.providerProfileSchema.serviceTypes.includes("physician"));
  assert(readiness.providerProfileSchema.serviceTypes.includes("mobile clinic"));
  assert(readiness.providerProfileSchema.supportedConditions.includes("DM"));
  assert(readiness.providerProfileSchema.supportedConditions.includes("HTN"));
  assert(readiness.providerProfileSchema.supportedConditions.includes("RPM"));
  assert(readiness.externalSendBlockedUntil.includes("verified provider"));
  assert.equal(result.providerQueue.submittedLive, false);
  assert.equal(result.providerQueue.noFakeProviderContact, true);

  console.log("Nexus provider onboarding readiness QA passed.");
})().catch(error => {
  console.error(error);
  process.exit(1);
});
