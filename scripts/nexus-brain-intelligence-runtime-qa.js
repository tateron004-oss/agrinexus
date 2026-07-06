const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");
const runtimeStart = app.indexOf("function nexusAgenticCommandMemoryBucket");
const runtimeEnd = app.indexOf("function runNexusStandardUserHomeLocalCommand");
const runtimeSlice = app.slice(runtimeStart, runtimeEnd > runtimeStart ? runtimeEnd : undefined);

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.toLowerCase().includes(token.toLowerCase()), `${label} must not include ${token}`);
}

[
  "function parseNexusCommand",
  "function resolveNexusIntent",
  "function classifyNexusMode",
  "function extractNexusEntities",
  "function buildNexusMission",
  "function continueNexusMission",
  "function updateNexusMission",
  "function cancelNexusMission",
  "function prepareNexusAction",
  "function confirmNexusAction",
  "function executeSafeLocalAction",
  "function prepareProviderHandoff",
  "function recordNexusReceipt",
  "function verifyNexusOutcome",
  "function renderNexusMissionWorkspace",
  "function routeNexusCommand",
  "function getNexusMemory",
  "function saveNexusMemory",
  "function updateNexusMemory",
  "function deactivateNexusMemory",
  "function deleteNexusMemoryWithConfirmation"
].forEach(token => includes(app, token, `central brain runtime API ${token}`));

[
  "window.parseNexusCommand",
  "window.resolveNexusIntent",
  "window.classifyNexusMode",
  "window.extractNexusEntities",
  "window.buildNexusMission",
  "window.routeNexusCommand",
  "window.getNexusMemory"
].forEach(token => includes(app, token, `browser brain export ${token}`));

[
  "healthIntakes",
  "chronicReadings",
  "providerPackets",
  "buyers",
  "sellers",
  "marketplaceRecords",
  "shipmentRecords",
  "tradeRoutePlans",
  "shipments",
  "employmentRecords",
  "jobApplicationDrafts",
  "employers",
  "learningPlans",
  "droneMissions",
  "communicationDrafts",
  "missions",
  "receipts"
].forEach(token => includes(app, token, `brain local/sandbox memory bucket ${token}`));

[
  "submode",
  "localOnly",
  "suggestedQuestions",
  "actionPlan",
  "relatedRecords",
  "outcome",
  "safetyNote",
  "providerReadiness",
  "confirmationRequired",
  "confirmationStatus",
  "executionStatus",
  "noExternalExecution"
].forEach(token => includes(runtimeSlice, token, `mission intelligence field ${token}`));

[
  "blood pressure",
  "145",
  "rpm_blood_pressure",
  "diabetes",
  "hypertension",
  "obesity",
  "maize",
  "buyer",
  "buyers",
  "seller",
  "sellers",
  "trade route",
  "shipment",
  "tracking",
  "employer",
  "application",
  "learning plan",
  "drone",
  "whatsapp",
  "telegram",
  "provider_handoff_packet",
  "mobile clinic",
  "pharmacy"
].forEach(token => includes(app.toLowerCase(), token, `brain command coverage ${token}`));

[
  "I understood that you want to:",
  "Mode:",
  "Status:",
  "Before anything external:",
  "Nexus answer",
  "Information missing",
  "Action plan",
  "What I can ask next",
  "Related local records",
  "Outcome verification",
  "Receipt / timeline",
  "What happened:",
  "What did not happen:",
  "Still missing:",
  "Next:"
].forEach(token => includes(app, token, `visible assistant answer format ${token}`));

[
  "delete_confirmation_required",
  "mark_closed_confirmation_required",
  "provider_credentials_or_confirmation_required",
  "queued_or_prepared_not_sent",
  "confirmation, provider configuration, consent, audit, and verification are required",
  "No provider, payment, call, message, booking, dispatch, location, camera, diagnosis, prescription, or external handoff occurred.",
  "No transaction, provider handoff, shipment, message, call, payment, or health action was executed.",
  "noFakeExternalExecution"
].forEach(token => includes(app, token, `brain confirmation/no-execution gate ${token}`));

[
  "if (shouldNexusAgenticCommandRuntimeHandle(normalized) && runNexusAgenticCommandRuntime(normalized, { source: \"text\" })) return true;",
  "submitNexusAgenticCommandRuntime(command, input, \"command-submit\", event)",
  "launchCapabilityFromVoice(standardUserVoiceCommand) || runNexusStandardUserHomeLocalCommand(standardUserVoiceCommand)",
  "function routeNexusCommand"
].forEach(token => includes(app, token, `typed/voice/route integration ${token}`));

[
  "/api/nexus/brain/status",
  "/api/nexus/brain/command",
  "/api/nexus/brain/missions",
  "/api/nexus/brain/missions/",
  "/api/nexus/brain/receipts",
  "/api/nexus/brain/memory",
  "localOnly: true",
  "noExternalExecutionAuthorized: true"
].forEach(token => includes(server, token, `brain backend route contract ${token}`));

[
  "message sent successfully",
  "provider contacted successfully",
  "payment processed",
  "appointment booked",
  "prescription sent",
  "diagnosis made",
  "emergency dispatched",
  "drone dispatched",
  "shipment booked"
].forEach(token => excludes(runtimeSlice, token, `fake external success claim ${token}`));

assert.strictEqual(
  packageJson.scripts["qa:nexus-brain-intelligence-runtime"],
  "node scripts/nexus-brain-intelligence-runtime-qa.js",
  "package alias should run brain intelligence runtime QA"
);
includes(qaSuite, "scripts/nexus-brain-intelligence-runtime-qa.js", "qa-suite should include brain intelligence runtime QA");

console.log("Nexus brain intelligence runtime QA passed.");
