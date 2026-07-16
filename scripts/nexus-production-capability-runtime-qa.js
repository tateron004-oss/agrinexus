const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relative => fs.readFileSync(path.join(root, relative), "utf8");

const registry = require(path.join(root, "server/nexusCapabilityRegistry.js"));
const planner = require(path.join(root, "server/nexusActionPlanner.js"));
const connectorRuntime = require(path.join(root, "server/nexusConnectorRuntime.js"));
const productionRuntime = require(path.join(root, "server/nexusProductionRuntime.js"));

const server = read("server.js");
const app = read("public/app.js");
const envExample = read(".env.example");

[
  "server/nexusCapabilityRegistry.js",
  "server/nexusActionPlanner.js",
  "server/nexusActionExecutor.js",
  "server/nexusActionVerifier.js",
  "server/nexusRuntimeAudit.js",
  "server/nexusConnectorRuntime.js",
  "server/nexusProductionRuntime.js"
].forEach(file => assert(fs.existsSync(path.join(root, file)), `${file} must exist`));

const capabilities = registry.listCapabilities();
const ids = new Set(capabilities.map(capability => capability.id));
[
  "medical.telehealthProvider",
  "medical.videoVisit",
  "medical.chronicCare",
  "medical.rpm",
  "medical.rtm",
  "medical.mobileClinic",
  "medical.pharmacy",
  "medical.patientSupport",
  "medical.emergencyGuidance",
  "communications.sms",
  "communications.whatsapp",
  "communications.email",
  "communications.callDraft",
  "workflow.reminder",
  "workflow.offlineQueue",
  "workflow.activityLog",
  "workflow.followUp",
  "knowledge.weather",
  "knowledge.liveWeb",
  "agriculture.learning",
  "workforce.learning",
  "marketplace.inquiry",
  "maps.fieldVisit",
  "drone.serviceRequest",
  "lms.enrollment",
  "payment.readiness"
].forEach(id => assert(ids.has(id), `registry must include ${id}`));

for (const capability of capabilities) {
  for (const field of registry.requiredCapabilityFields()) {
    assert(Object.prototype.hasOwnProperty.call(capability, field), `${capability.id} must include ${field}`);
  }
  assert(!/sk-live|AC[a-f0-9]{20,}|Bearer\s+\S+|replace-with-real/i.test(JSON.stringify(capability)), `${capability.id} must not expose secret values`);
}

const planCases = [
  ["Nexus, I need a doctor to review my symptoms.", "medical", "medical.telehealthProvider"],
  ["Send my blood pressure readings to a provider.", "medical", "medical.rpm"],
  ["Start a video doctor visit.", "medical", "medical.videoVisit"],
  ["Ask a pharmacy about this medication.", "medical", "medical.pharmacy"],
  ["Request a mobile clinic.", "medical", "medical.mobileClinic"],
  ["Prepare this for a community health worker.", "medical", "medical.patientSupport"],
  ["I have chest pain and trouble breathing.", "medical", "medical.emergencyGuidance"],
  ["Find agriculture training.", "agriculture", "agriculture.learning"],
  ["Show me farm jobs.", "workforce", "workforce.learning"],
  ["Prepare a marketplace inquiry.", "marketplace", "marketplace.inquiry"],
  ["Plan a field visit.", "maps", "maps.fieldVisit"],
  ["Request a drone service.", "drone", "drone.serviceRequest"],
  ["Queue this for when I am back online.", "workflow", "workflow.offlineQueue"],
  ["Remind me to check this later tomorrow.", "workflow", "workflow.reminder"]
];

for (const [goal, domain, capabilityId] of planCases) {
  const plan = planner.planAction({ userGoal: goal });
  assert.equal(plan.domain, domain, `${goal} should map to ${domain}`);
  assert(plan.capabilities.includes(capabilityId), `${goal} should include ${capabilityId}`);
  assert.equal(plan.executionAttempted, false, "planning must not execute");
  assert(plan.userMessage, "plan must include user-facing message");
}

(async () => {
  const db = { profile: {} };
  let result = await productionRuntime.execute({ userGoal: "Remind me to check this later tomorrow.", confirmed: false }, db, {});
  assert.equal(result.blockedReason, "blocked_confirmation_required", "unconfirmed execution must be blocked");

  result = await productionRuntime.execute({ userGoal: "I have chest pain and trouble breathing.", confirmed: true }, db, {});
  assert.equal(result.blockedReason, "blocked_emergency", "emergency routine execution must be blocked");

  result = await productionRuntime.execute({ plan: { runtime: "nexus_production_capability_runtime", userGoal: "unknown", domain: "general", intent: "unknown", capabilities: ["missing.capability"], riskLevel: "low", missingInformation: [], actionPlan: [] }, confirmed: true }, db, {});
  assert.equal(result.blockedReason, "blocked_unknown_capability", "unknown capability must be blocked");

  result = await productionRuntime.execute({ userGoal: "Send my blood pressure readings to a provider.", confirmed: true }, db, {});
  assert.equal(result.blockedReason, "blocked_missing_information", "missing readings must be blocked");

  result = await productionRuntime.execute({ userGoal: "Remind me to check this later tomorrow.", confirmed: true }, db, {});
  assert.equal(result.mode, "local_fallback", "confirmed reminder should execute locally");
  assert(result.executionResult.referenceId, "local execution must include reference ID");
  assert.equal(db.profile.nexusReminders.length, 1, "local reminder must be saved");

  result = await productionRuntime.execute({ userGoal: "Queue this for when I am back online.", confirmed: true }, db, {});
  assert.equal(result.mode, "queued", "confirmed offline queue should queue locally");
  assert.equal(db.profile.offlineQueue.length, 1, "offline queue item must be saved");

  const connectorBlocked = await connectorRuntime.execute(registry.getCapability("marketplace.inquiry"), { userGoal: "prepare inquiry" }, { confirmed: true }, {});
  assert.equal(connectorBlocked.blockedReason, "blocked_live_execution_disabled", "live execution disabled must block connector execution");

  const missingConfig = await connectorRuntime.execute(registry.getCapability("medical.pharmacy"), { userGoal: "ask pharmacy" }, { confirmed: true }, { NEXUS_LIVE_EXECUTION_ENABLED: "true", NEXUS_MEDICAL_LIVE_EXECUTION_ENABLED: "true" });
  assert.equal(missingConfig.blockedReason, "blocked_connector_not_configured", "missing connector config must block live execution");

  let verification = productionRuntime.verify({ referenceId: "" }, db, {});
  assert.equal(verification.verification.status, "no_reference_id", "verify without reference must not fake success");
  verification = productionRuntime.verify({ referenceId: "provider-123", capabilityId: "medical.pharmacy" }, db, {});
  assert(["not_configured", "verification_unavailable"].includes(verification.verification.status), "unconfigured connector verification must not fake success");

  [
    "/api/nexus/runtime/capabilities",
    "/api/nexus/runtime/plan",
    "/api/nexus/runtime/execute",
    "/api/nexus/runtime/verify",
    "/api/nexus/runtime/status",
    "nexusProductionRuntime"
  ].forEach(text => assert(server.includes(text), `server must include ${text}`));

  [
    "Nexus Production Action Assistant",
    "Plan action",
    "Confirm action",
    "Execute approved action",
    "Verify result",
    "Queue for offline follow-up",
    "Create reminder",
    "data-nexus-production-runtime-result-display",
    "handleNexusProductionRuntimeTypedCommand"
  ].forEach(text => assert(app.includes(text), `app must include ${text}`));

  [
    "Diagnose",
    "Prescribe",
    "Pay now",
    "Dispatch emergency",
    "Start camera",
    "Start microphone",
    "Auto-send",
    "Auto-book"
  ].forEach(text => assert(!app.includes(`>${text}<`), `unsafe button label must be absent: ${text}`));

  [
    "NEXUS_PRODUCTION_RUNTIME_ENABLED=false",
    "NEXUS_LIVE_EXECUTION_ENABLED=false",
    "NEXUS_RUNTIME_REQUIRE_CONFIRMATION=true",
    "NEXUS_RUNTIME_AUDIT_ENABLED=true",
    "NEXUS_RUNTIME_OFFLINE_QUEUE_ENABLED=true",
    "NEXUS_MEDICAL_LIVE_EXECUTION_ENABLED=false",
    "NEXUS_COMMUNICATIONS_LIVE_EXECUTION_ENABLED=false",
    "NEXUS_MARKETPLACE_LIVE_EXECUTION_ENABLED=false",
    "NEXUS_PAYMENT_LIVE_EXECUTION_ENABLED=false"
  ].forEach(text => assert(envExample.includes(text), `.env.example must include ${text}`));

  const status = productionRuntime.status(db, {});
  assert.equal(status.policy.noSilentExecution, true, "runtime status must preserve no-silent-execution policy");
  assert(!/sk-live|AC[a-f0-9]{20,}|Bearer\s+\S+|secret-value|twilio_auth_token_value/i.test(JSON.stringify({ status, capabilities })), "runtime output must not expose secret-like values");

  console.log("Nexus production capability runtime QA passed.");
})().catch(error => {
  console.error(error);
  process.exit(1);
});
