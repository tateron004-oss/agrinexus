const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const doc = read("docs/NEXUS_PILOT_ACTIVATION_VERIFICATION.md");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.toLowerCase().includes(token.toLowerCase()), `${label} must not include ${token}`);
}

function assertAll(source, tokens, label) {
  tokens.forEach(token => includes(source, token, `${label}: ${token}`));
}

const pilotGroups = [
  "Core Nexus Brain + UI Interaction Layer",
  "Live Knowledge / Citation Provider",
  "Agriculture Support Lane",
  "Maps / Field Visit / Location Lane",
  "Communications Lane",
  "Training / Literacy / Workforce Lane",
  "Healthcare Literacy + Chronic Disease Support Lane",
  "Telehealth / Provider Bridge",
  "Pharmacy Lane"
];

const requiredWorkflows = [
  "health-intake",
  "clinical-support",
  "telehealth-intake",
  "chronic-care",
  "pharmacy-support",
  "mobile-clinic",
  "provider-support",
  "agriculture",
  "crop-support",
  "farm-planning",
  "field-visit",
  "jobs",
  "workforce",
  "learning",
  "training",
  "maps",
  "route-planning",
  "communications",
  "email",
  "sms",
  "whatsapp",
  "phone",
  "resource-assistant",
  "diabetes",
  "hypertension",
  "obesity",
  "rpm",
  "rtm",
  "community-health-worker"
];

const requiredLaneIds = [
  "clinical-intake-lane",
  "telehealth-provider-lane",
  "provider-handoff-lane",
  "chronic-care-lane",
  "pharmacy-lane",
  "mobile-clinic-lane",
  "communications-lane",
  "crop-advisor-lane",
  "marketplace-lane",
  "job-referral-lane",
  "training-enrollment-lane",
  "route-planning-lane",
  "media-provider-lane",
  "reminder-lane",
  "offline-queue-lane",
  "resource-assistant-lane",
  "diabetes-lane",
  "hypertension-lane",
  "obesity-lane",
  "rpm-lane",
  "rtm-lane",
  "community-health-worker-lane",
  "farm-planning-lane",
  "field-visit-lane",
  "logistics-lane",
  "workforce-referral-lane",
  "employer-partner-lane",
  "email-lane",
  "sms-lane",
  "whatsapp-lane",
  "phone-lane",
  "telegram-lane"
];

assertAll(app, [
  "NEXUS_AGENT_RUNTIME",
  "resolveNexusIntent",
  "runNexusStandardUserHomeLocalCommand",
  "handleNexusStandardUserHomeClick",
  "bindNexusStandardUserHomeControls",
  "openNexusWorkflow",
  "renderNexusActiveWorkflowWorkspace",
  "renderNexusActivationCenter",
  "renderNexusReviewQueues",
  "renderNexusConfirmationPanel",
  "showNexusQueuedActions"
], "core brain and UI interaction layer");

assertAll(app, [
  "NEXUS_AGENTIC_WORKFLOW_REGISTRY",
  "NEXUS_ENDGAME_WORKFLOW_EXTENSIONS",
  "NEXUS_INTEGRATION_LANES",
  "NEXUS_ENDGAME_INTEGRATION_LANE_EXTENSIONS",
  "nexusAllAgenticWorkflows",
  "nexusAllIntegrationLanes",
  "nexusWorkflowRegistryEntry",
  "nexusIntegrationLaneById"
], "runtime workflow and lane registry");

assertAll(app, [
  "function isNexusExplicitActivationWorkflowCommand",
  "isNexusExplicitActivationWorkflowCommand(command) && runNexusStandardUserHomeLocalCommand(command)",
  "if ([\"diabetes\", \"hypertension\", \"obesity\", \"rpm\", \"rtm\", \"community-health-worker\"].includes(alias)) return alias;",
  "if (/\\b(diabetes|blood sugar|glucose)\\b/.test(text)) return \"diabetes\";",
  "if (/\\b(hypertension|blood pressure|bp)\\b/.test(text)) return \"hypertension\";"
], "granular chronic disease command routing");

requiredWorkflows.forEach(id => includes(app, `id: "${id}"`, `required workflow ${id}`));
requiredLaneIds.forEach(id => includes(app, `id: "${id}"`, `required activation lane ${id}`));
assert.strictEqual(requiredLaneIds.length, 32, "verification should cover exactly 32 activation lanes");

assertAll(app, [
  "data-nexus-activation-center=\"true\"",
  "data-nexus-activation-lane",
  "data-nexus-lane-action=\"test\"",
  "data-nexus-lane-action=\"configure\"",
  "data-nexus-lane-action=\"link-partner\"",
  "data-nexus-lane-action=\"export\"",
  "data-nexus-lane-action=\"disable\"",
  "handleNexusLaneActionClick"
], "activation lane controls");

assertAll(app, [
  "data-nexus-action-controller=\"prepare-packet\"",
  "data-nexus-action-controller=\"request-confirmation\"",
  "data-nexus-action-controller=\"queue-packet\"",
  "data-nexus-action-controller=\"execute-confirmed-test\"",
  "handleNexusWorkflowControllerClick",
  "data-nexus-confirmation-panel=\"true\"",
  "Confirm reviewed packet",
  "Cancel"
], "workflow buttons and confirmation controls");

assertAll(app, [
  "requiresConfirmationBeforeExecution: true",
  "External execution blocked until final confirmation.",
  "waiting_for_confirmation",
  "required_before_external_execution",
  "Confirm, edit, cancel, or queue",
  "No live provider/vendor action occurred.",
  "credential_required",
  "Live credential or provider approval is missing."
], "confirmation and credential gate behavior");

assertAll(app, [
  "mailto:",
  "sms:",
  "https://wa.me/",
  "tel:",
  "Nexus will not claim completion until the user completes it outside the app.",
  "No secrets are included and no provider was contacted.",
  "externalActionOccurred: false"
], "communications no-silent-execution boundaries");

assertAll(app, [
  "Clinical note: Nexus assists with intake",
  "Nexus does not diagnose, prescribe, or replace clinical judgment",
  "Nexus does not prescribe, change medication, request refills",
  "No live clinician is connected here",
  "Nexus does not request browser location, share your location",
  "data-location-permission-requested=\"false\"",
  "data-geolocation-used=\"false\""
], "healthcare pharmacy telehealth maps safety boundaries");

assertAll(app, [
  "resource-assistant",
  "source-backed answers",
  "citations when configured",
  "source-registry-or-live-retrieval",
  "citation honesty",
  "nexus-live-knowledge"
], "live knowledge and citation provider readiness");

assertAll(app, [
  "Show queued actions",
  "showNexusRuntimeList(\"queued\")",
  "queued: [\"queued\"]",
  "nexus-action-history",
  "data-nexus-review-queues=\"true\"",
  "NEXUS_REVIEW_QUEUE_TYPES"
], "queued action and review queue visibility");

[
  "api key value",
  "auth token value",
  "password exported",
  "silent send",
  "silent call",
  "provider contacted automatically",
  "location shared automatically",
  "emergency dispatch started",
  "prescription sent successfully",
  "payment processed successfully"
].forEach(token => excludes(app, token, "activation runtime"));

assertAll(app, [
  "Secret values are never stored here.",
  "No secrets are included and no provider was contacted."
], "secret-safe activation wording");

pilotGroups.forEach(group => includes(doc, `| ${group} |`, `verification matrix row ${group}`));
requiredLaneIds.forEach(id => includes(doc, id, `verification doc lane ${id}`));

assertAll(doc, [
  "Browser validation result",
  "32 activation lanes",
  "console warnings/errors: 0",
  "No live action executed",
  "credential-blocked or queued status",
  "confirmation gate",
  "audit/review queue",
  "No secrets were exposed",
  "Nexus, help with diabetes intake.",
  "Nexus, prepare a WhatsApp message.",
  "Nexus, open pharmacy support."
], "verification report evidence");

assert.strictEqual(
  packageJson.scripts["qa:nexus-activation-verification"],
  "node scripts/nexus-activation-verification-qa.js",
  "package alias should run activation verification QA"
);
includes(qaSuite, "scripts/nexus-activation-verification-qa.js", "safe QA suite wiring");

console.log("Nexus activation verification QA passed.");
