const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");
const includes = (haystack, needle, label) => assert(haystack.includes(needle), `${label} must include ${needle}`);
const excludes = (haystack, needle, label) => assert(!haystack.includes(needle), `${label} must not include ${needle}`);

const brain = require("../public/nexus-unified-brain-runtime.js");
const communication = require("../public/nexus-full-communication-runtime.js");
const agriculture = require("../public/nexus-agriculture-collaboration-runtime.js");
const healthcare = require("../public/nexus-healthcare-collaboration-runtime.js");

const runtimeOptions = {
  env: {},
  communicationRuntime: communication,
  agricultureRuntime: agriculture,
  healthcareRuntime: healthcare
};

function mission(command) {
  return brain.createMissionPlan(command, runtimeOptions);
}

function assertRuntime() {
  assert(brain, "Unified Brain runtime should load");
  [
    "classifyDomains",
    "createMissionPlan",
    "process",
    "runtimeStatus",
    "executeStep",
    "getMissionReceipt",
    "shouldHandleBeforeLegacy",
    "mount",
    "render"
  ].forEach(name => assert.equal(typeof brain[name], "function", `${name} should be a function`));
  [
    "communication",
    "healthcare",
    "agriculture",
    "mobile_health",
    "pharmacy",
    "learning",
    "workforce_jobs",
    "marketplace_trade",
    "logistics_shipment",
    "drone_field_operations",
    "provider_admin",
    "emergency_safety"
  ].forEach(domain => assert(brain.DOMAINS.includes(domain), `domain ${domain} should be supported`));
  const status = brain.runtimeStatus(runtimeOptions);
  assert.equal(status.noSecretValues, true, "status should not expose secrets");
  assert.equal(status.noFakeExecution, true, "status should include no-fake-execution guarantee");
  assert.equal(status.availableRuntimes.communication, true, "communication runtime should be available");
  assert.equal(status.availableRuntimes.agriculture, true, "agriculture runtime should be available");
  assert.equal(status.availableRuntimes.healthcare, true, "healthcare runtime should be available");
}

function assertRouting() {
  assert.deepEqual(brain.classifyDomains("Nexus, I need help with my farm and my blood pressure.").filter(item => ["agriculture", "healthcare"].includes(item)).sort(), ["agriculture", "healthcare"]);
  assert(brain.shouldHandleBeforeLegacy("Help this farmer identify the crop issue, message an extension worker, find a buyer, and prepare shipment options."), "cross-domain agriculture goal should use brain");
  assert(brain.shouldHandleBeforeLegacy("My blood pressure is high and I need the clinic and pharmacy."), "health/pharmacy goal should use brain");
  assert(brain.shouldHandleBeforeLegacy("I need a job and training."), "job/training goal should use brain");
  assert(!brain.shouldHandleBeforeLegacy("Help me with a crop issue"), "single-domain crop command should still be allowed to route direct");
}

function assertMissionPlanning() {
  const crop = mission("Help me with my farm. The tomatoes are sick and I need to sell what I can.");
  assert.equal(crop.template, "farmer_crop_to_market", "crop-to-market template should be selected");
  ["agriculture", "marketplace_trade"].forEach(domain => assert(crop.domains.includes(domain), `${domain} should be in mission`));
  assert(crop.steps.some(step => step.runtime === "agriculture"), "crop mission should include agriculture steps");
  assert(crop.steps.some(step => step.runtime === "communication"), "crop mission should include communication steps");
  assert(crop.steps.some(step => step.stepId === "shipment_plan"), "crop mission should include shipment planning");
  assert(crop.missingInputs.length, "crop mission should identify missing information");

  const care = mission("My blood pressure is high and I need the clinic and pharmacy.");
  assert.equal(care.template, "patient_mobile_care", "patient mobile care template should be selected");
  assert(care.steps.some(step => step.runtime === "healthcare"), "care mission should route to healthcare");
  assert(care.steps.some(step => step.runtime === "communication"), "care mission should prepare communication");

  const job = mission("I need a job and training.");
  assert.equal(job.template, "job_seeker_learning_to_employment", "job/training template should be selected");
  assert(job.steps.some(step => step.runtime === "local_workforce"), "job mission should include local workforce fallback");
}

function assertUiReadiness() {
  const index = read("public/index.html");
  const app = read("public/app.js");
  const voice = read("public/nexus-conversational-voice-runtime.js");
  const server = read("server.js");
  includes(index, "id=\"nexusUnifiedBrainRuntime\"", "index");
  includes(index, "data-nexus-brain-plan", "index");
  includes(index, "data-nexus-brain-evidence", "index");
  includes(index, "/nexus-unified-brain-runtime.js", "index");
  includes(app, "handleNexusUnifiedBrainRuntimeCommand", "app");
  includes(app, "NexusUnifiedBrainRuntime?.mount", "app");
  includes(app, "data-nexus-brain-action", "app");
  includes(voice, "NexusUnifiedBrainRuntime", "voice runtime");
  includes(server, "/api/nexus-brain/status", "server");
  includes(server, "/api/nexus-brain/plan", "server");
  includes(server, "/api/nexus-brain/execute-step", "server");
  includes(server, "/api/nexus-brain/mission-receipt", "server");
}

function assertSafetyGates() {
  const emergency = mission("I have chest pain and cannot breathe.");
  assert.equal(emergency.template, "emergency_safety", "emergency language should use emergency safety template");
  assert(emergency.safetyFlags.emergency, "emergency safety flag should be set");
  assert(emergency.steps.some(step => step.status === "blocked_safety_escalation" || step.safetyLevel === "emergency_escalation"), "emergency step should block routine handling");

  const pesticide = mission("Prepare pesticide spraying and drone spraying for the farm.");
  assert(pesticide.safetyFlags.regulatedAgriculture, "regulated agriculture flag should be set");
  assert(pesticide.steps.some(step => step.reviewRequired || step.blockedReason), "regulated agriculture should require review/blocking");

  const payment = mission("Accept buyer offer, pay, and ship the crop.");
  assert(payment.safetyFlags.marketplacePayment, "marketplace/payment flag should be set");
  assert(payment.steps.some(step => step.confirmationRequired || step.blockedReason), "marketplace/payment mission should stay gated");
}

function assertReceipts() {
  const result = mission("Help this farmer identify the crop issue, message an extension worker, find a buyer, and prepare shipment options.");
  assert(result.receipt.missionReceiptId, "mission receipt should exist");
  assert.equal(result.receipt.noFakeExecution, true, "mission receipt should carry no-fake-execution flag");
  assert(result.receipt.agricultureReceiptIds.length, "mission receipt should link agriculture receipts");
  assert(result.receipt.communicationReceiptIds.length, "mission receipt should link communication receipts");
  assert.equal(result.receipt.executedSteps.length, 0, "mission receipt should not claim executed steps");
  assert(brain.getReceipts().some(receipt => receipt.missionReceiptId === result.receipt.missionReceiptId), "brain receipts should retain mission receipt");
}

function assertCommunicationIntegration() {
  const result = mission("Help this farmer identify the crop issue, message an extension worker, find a buyer, and prepare shipment options.");
  const communicationSteps = result.steps.filter(step => step.runtime === "communication");
  assert(communicationSteps.length, "mission should include communication steps");
  communicationSteps.forEach(step => {
    assert.equal(step.canExecute, false, "communication step should not execute automatically");
    assert(step.confirmationRequired, "communication step should require confirmation");
    assert(step.receiptId, "communication step should have receipt reference");
    assert(!String(step.blockedReason || "").includes("[object Object]"), "communication blocked reason should be readable");
  });
}

function assertAgricultureIntegration() {
  const result = mission("Help me with my farm. The tomatoes are sick and I need to sell what I can.");
  const agricultureSteps = result.steps.filter(step => step.runtime === "agriculture");
  assert(agricultureSteps.length >= 3, "mission should include agriculture runtime steps");
  assert(agricultureSteps.every(step => step.receiptId), "agriculture steps should expose receipt references");
  assert(result.steps.some(step => step.stepId === "pest_disease_advisory" && step.reviewRequired), "pest/disease step should require review");
}

function assertHealthcareIntegration() {
  const result = mission("My blood pressure is high and I need the clinic and pharmacy.");
  const healthcareSteps = result.steps.filter(step => step.runtime === "healthcare");
  assert(healthcareSteps.length, "mission should include healthcare runtime steps");
  assert(healthcareSteps.every(step => step.receiptId), "healthcare steps should expose receipt references");
  assert(healthcareSteps.some(step => step.reviewRequired), "healthcare mission should require clinician/provider review");
  assert(!JSON.stringify(result).toLowerCase().includes("diagnosed"), "healthcare mission should not claim diagnosis");
}

function assertNoUnsafeClaims() {
  const files = [
    "public/nexus-unified-brain-runtime.js",
    "public/index.html",
    "public/app.js",
    "server.js",
    "docs/NEXUS_UNIFIED_BRAIN_RUNTIME.md"
  ].map(read).join("\n").toLowerCase();
  [
    "message was sent successfully",
    "call was placed",
    "telehealth visit was scheduled",
    "buyer was contacted",
    "shipment was tracked",
    "drone flew",
    "ehr accessed",
    "diagnosis completed",
    "payment completed"
  ].forEach(unsafe => excludes(files, unsafe, "Unified Brain files"));
}

function run(section = "all") {
  assertRuntime();
  const checks = {
    runtime: assertRuntime,
    routing: assertRouting,
    planning: assertMissionPlanning,
    ui: assertUiReadiness,
    safety: assertSafetyGates,
    receipts: assertReceipts,
    communication: assertCommunicationIntegration,
    agriculture: assertAgricultureIntegration,
    healthcare: assertHealthcareIntegration,
    all: () => {
      assertRuntime();
      assertRouting();
      assertMissionPlanning();
      assertUiReadiness();
      assertSafetyGates();
      assertReceipts();
      assertCommunicationIntegration();
      assertAgricultureIntegration();
      assertHealthcareIntegration();
      assertNoUnsafeClaims();
    }
  };
  assert(checks[section], `Unknown Unified Brain QA section: ${section}`);
  checks[section]();
  console.log(`[nexus-unified-brain-${section}-qa] passed`);
}

module.exports = { run };
