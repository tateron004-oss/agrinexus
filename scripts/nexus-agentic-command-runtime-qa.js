const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
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
  "function parseNexusAgenticCommandIntent",
  "function shouldNexusAgenticCommandRuntimeHandle",
  "function runNexusAgenticCommandRuntime",
  "function buildNexusAgenticMissionFromIntent",
  "function setNexusAgenticCommandResult",
  "function continueNexusAgenticMission",
  "function confirmNexusAgenticMission",
  "function cancelNexusAgenticMission",
  "function showNexusAgenticMissionStatus",
  "function submitNexusAgenticCommandRuntime",
  "window.runNexusAgenticCommandRuntime"
].forEach(token => includes(app, token, `central agentic command runtime ${token}`));

[
  "nexusAgenticCommandMissions",
  "nexusAgenticCommandLocalMemory",
  "healthIntakes",
  "chronicReadings",
  "providerPackets",
  "buyers",
  "sellers",
  "marketplaceRecords",
  "shipments",
  "employmentRecords",
  "learningPlans",
  "droneMissions",
  "communicationDrafts",
  "receipts"
].forEach(token => includes(app, token, `mission/local memory model ${token}`));

[
  "id",
  "title",
  "mode",
  "goal",
  "status",
  "createdAt",
  "updatedAt",
  "userInput",
  "collectedInfo",
  "missingInfo",
  "nextStep",
  "riskLevel",
  "confirmationRequired",
  "confirmationStatus",
  "executionStatus",
  "providerReadiness",
  "timeline",
  "sandbox",
  "source"
].forEach(token => includes(app, token, `mission field ${token}`));

[
  "blood pressure",
  "diabetes",
  "hypertension",
  "obesity",
  "rpm",
  "rtm",
  "crop",
  "maize",
  "buyer",
  "seller",
  "shipment",
  "trade route",
  "apply for a job",
  "learning plan",
  "drone",
  "whatsapp",
  "telegram",
  "pharmacy",
  "mobile clinic",
  "telehealth"
].forEach(token => includes(app.toLowerCase(), token, `supported command mode ${token}`));

[
  "if (shouldNexusAgenticCommandRuntimeHandle(normalized) && runNexusAgenticCommandRuntime(normalized, { source: \"text\" })) return true;",
  "submitNexusAgenticCommandRuntime(command, input, \"command-submit\", event)",
  "launchCapabilityFromVoice(standardUserVoiceCommand) || runNexusStandardUserHomeLocalCommand(standardUserVoiceCommand)",
  "data-nexus-agentic-runtime-action=\"continue\"",
  "data-nexus-agentic-runtime-action=\"confirm\"",
  "data-nexus-agentic-runtime-action=\"cancel\"",
  "eventTarget?.closest?.(\"[data-nexus-agentic-runtime-action]\")"
].forEach(token => includes(app, token, `text/voice/control routing ${token}`));

[
  "Information missing",
  "Receipt / timeline",
  "Consent / confirmation",
  "Agentic command runtime",
  "Confirmation captured for local preparation/review.",
  "No provider, payment, call, message, booking, dispatch, location, camera, diagnosis, prescription, or external handoff occurred."
].forEach(token => includes(app, token, `visible mission workspace/receipt copy ${token}`));

[
  "delete_confirmation_required",
  "queued_or_prepared_not_sent",
  "provider_credentials_or_confirmation_required",
  "No external action occurred.",
  "No transaction, provider handoff, shipment, message, call, payment, or health action was executed."
].forEach(token => includes(app, token, `confirmation/execution gate ${token}`));

includes(
  app,
  "if (/\\b(shipment|tracking number|trade route|logistics|delivery|transport)\\b/i.test(lower)) return false;",
  "media/music classifier should not steal shipment tracking commands"
);

[
  "message sent successfully",
  "provider contacted successfully",
  "payment processed",
  "appointment booked",
  "prescription sent",
  "diagnosis made",
  "emergency dispatched"
].forEach(token => excludes(runtimeSlice, token, `fake live execution claim ${token}`));

assert.strictEqual(
  packageJson.scripts["qa:nexus-agentic-command-runtime"],
  "node scripts/nexus-agentic-command-runtime-qa.js",
  "package alias should run agentic command runtime QA"
);
includes(qaSuite, "scripts/nexus-agentic-command-runtime-qa.js", "qa-suite wiring");

console.log("Nexus agentic command runtime QA passed.");
