const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const styles = read("public/styles.css");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.toLowerCase().includes(token.toLowerCase()), `${label} must not include ${token}`);
}

function assertAll(tokens, source, label) {
  tokens.forEach(token => includes(source, token, `${label}: ${token}`));
}

assertAll([
  "NEXUS_AGENTIC_WORKFLOW_REGISTRY",
  "NEXUS_INTEGRATION_LANES",
  "NEXUS_INTEGRATION_LANE_STATUSES",
  "NEXUS_OUTCOME_STATES",
  "nexusPreparedPackets",
  "nexusActionHistory",
  "buildNexusPacket",
  "prepareNexusAction",
  "requestNexusConfirmation",
  "handleInactiveNexusLane",
  "executeNexusAction",
  "recordNexusOutcome",
  "showNexusOutcome",
  "saveNexusRuntimeMemory",
  "restoreNexusRuntimeMemory",
  "clearNexusSensitiveLocalData",
  "runNexusWorkflowControllerAction",
  "showNexusRuntimeList",
  "renderNexusWorkflowLaneStatus",
  "renderNexusWorkflowActionHistory",
  "renderNexusPilotReadinessDashboard"
], app, "real global agent runtime contract");

assertAll([
  "health-intake",
  "clinical-support",
  "telehealth-intake",
  "chronic-care",
  "pharmacy-support",
  "mobile-clinic",
  "provider-support",
  "agriculture",
  "agritrade",
  "jobs",
  "learning",
  "maps",
  "communications",
  "media",
  "reminders",
  "offline",
  "resource-assistant"
], app, "agentic workflow registry lane");

assertAll([
  "diabetes",
  "hypertension",
  "obesity",
  "RPM",
  "RTM",
  "crop support",
  "farm planning",
  "vendor support",
  "logistics",
  "employment",
  "career",
  "training",
  "route planning",
  "field visit",
  "SMS",
  "WhatsApp",
  "email",
  "phone call intent",
  "Telegram"
], app, "global assistant domain coverage");

assertAll([
  "not_configured",
  "configured_inactive",
  "active_test_mode",
  "active_live",
  "disabled",
  "failed",
  "needs_user_confirmation"
], app, "integration lane status vocabulary");

assertAll([
  "draft",
  "prepared",
  "waiting_for_confirmation",
  "queued",
  "submitted",
  "sent",
  "failed",
  "response_received",
  "follow_up_needed",
  "completed"
], app, "outcome status vocabulary");

assertAll([
  'data-nexus-integration-lane-status="true"',
  'data-nexus-action-controller="prepare-packet"',
  'data-nexus-action-controller="request-confirmation"',
  'data-nexus-action-controller="queue-packet"',
  'data-nexus-action-history="true"',
  'data-nexus-pilot-readiness-dashboard="true"',
  "Prepare packet",
  "Review confirmation",
  "Queue if inactive",
  "Pilot readiness dashboard"
], app, "visible runtime workspace controls");

assertAll([
  "requiresConfirmationBeforeExecution: true",
  "auditLogRequired: true",
  "outcomeVerificationRequired: true",
  "noExternalExecutionWithoutConfirmation: true",
  "External execution blocked until final confirmation.",
  "Integration inactive. Nexus prepared and queued the packet locally instead of submitting it.",
  "Live mode not active; packet preparation/queue is available.",
  "No action was executed"
], app, "confirmation/execution safety contract");

assertAll([
  "Africa-first",
  "global-ready",
  "low-bandwidth",
  "multi-country",
  "Offline queue supported."
], app, "global and Africa readiness metadata");

assertAll([
  ".nexus-workflow-lane-status",
  ".nexus-workflow-history",
  ".nexus-pilot-readiness-dashboard",
  ".nexus-pilot-readiness-grid"
], styles, "runtime platform CSS");

[
  "live provider appointment was scheduled",
  "prescription sent successfully",
  "emergency dispatch started",
  "payment processed successfully",
  "location shared automatically",
  "SMS sent automatically",
  "WhatsApp sent automatically",
  "provider contacted successfully"
].forEach(token => excludes(app, token, `false live-execution claim ${token}`));

assert.strictEqual(
  packageJson.scripts["qa:nexus-real-global-agent-platform"],
  "node scripts/nexus-real-global-agent-platform-qa.js",
  "package alias should run Nexus real global agent platform QA"
);
includes(qaSuite, "scripts/nexus-real-global-agent-platform-qa.js", "safe QA suite wiring");

console.log("Nexus real global agent platform QA passed.");
