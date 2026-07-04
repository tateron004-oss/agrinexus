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

function assertAll(source, tokens, label) {
  tokens.forEach(token => includes(source, token, `${label}: ${token}`));
}

assertAll(app, [
  "NEXUS_AGENT_RUNTIME",
  "resolveNexusIntent",
  "updateNexusWorkflowState",
  "buildNexusPacket",
  "prepareNexusAction",
  "requestNexusConfirmation",
  "executeNexusAction",
  "queueNexusAction",
  "retryNexusAction",
  "recordNexusOutcome",
  "showNexusOutcome",
  "continueLastNexusWorkflow",
  "showNexusPendingActions",
  "showNexusFailedActions",
  "showNexusFollowUps",
  "clearNexusSensitiveLocalData"
], "central Nexus agent runtime");

assertAll(app, [
  "renderNexusActivationCenter",
  "data-nexus-activation-center=\"true\"",
  "data-nexus-activation-lane",
  "data-nexus-lane-action=\"test\"",
  "data-nexus-lane-action=\"configure\"",
  "data-nexus-lane-action=\"disable\"",
  "data-nexus-partner-onboarding-form=\"true\"",
  "NEXUS_PARTNER_ONBOARDING_TYPES"
], "activation center");

assertAll(app, [
  "Healthcare provider",
  "Telehealth provider",
  "Pharmacy",
  "Mobile clinic",
  "Community health worker partner",
  "Agriculture advisor/vendor",
  "Input supplier",
  "Marketplace buyer/seller partner",
  "Logistics partner",
  "Employer",
  "Training provider",
  "Communications provider"
], "partner onboarding lane");

assertAll(app, [
  "NEXUS_LANE_ADAPTERS",
  "makeNexusLaneAdapter",
  "nexusAdapterForPacket",
  "executeTest",
  "executeLive",
  "prepareBrowserHandoff",
  "credential_required",
  "handoff_prepared",
  "user_initiated_external_handoff"
], "provider adapter contract");

assertAll(app, [
  "\"email\"",
  "\"sms\"",
  "\"whatsapp\"",
  "\"telegram\"",
  "\"phone\"",
  "\"telehealth\"",
  "\"provider\"",
  "\"pharmacy\"",
  "\"mobile-clinic\"",
  "\"rpm-rtm\"",
  "\"marketplace\"",
  "\"workforce\"",
  "\"training\"",
  "\"agriculture\"",
  "\"logistics\"",
  "\"maps\"",
  "\"local\""
], "adapter names");

assertAll(app, [
  "health_intake",
  "clinical_support",
  "chronic_care_summary",
  "diabetes_report",
  "hypertension_report",
  "obesity_report",
  "rpm_report",
  "rtm_report",
  "telehealth_request",
  "provider_handoff",
  "pharmacy_support_request",
  "mobile_clinic_request",
  "community_health_worker_request",
  "crop_support_request",
  "farm_planning_request",
  "input_supplier_request",
  "extension_partner_request",
  "field_visit_request",
  "marketplace_inquiry",
  "logistics_request",
  "workforce_referral",
  "job_referral",
  "employer_partner_referral",
  "training_enrollment_request",
  "learning_plan_request",
  "email_message",
  "sms_message",
  "whatsapp_message",
  "telegram_message",
  "call_intent",
  "route_planning_request",
  "location_review_request",
  "field_visit_location_packet"
], "packet type coverage");

assertAll(app, [
  "renderNexusConfirmationPanel",
  "confirmNexusPacket",
  "cancelNexusPacket",
  "editNexusPacket",
  "data-nexus-confirmation-panel=\"true\"",
  "Clinical note: Nexus assists with intake",
  "Confirm reviewed packet",
  "Queue packet"
], "confirmation and consent panel");

assertAll(app, [
  "\"draft\"",
  "\"prepared\"",
  "\"waiting_for_confirmation\"",
  "\"queued\"",
  "\"test_submitted\"",
  "\"handoff_prepared\"",
  "\"user_initiated_external_handoff\"",
  "\"submitted\"",
  "\"sent\"",
  "\"failed\"",
  "\"credential_required\"",
  "\"provider_response_pending\"",
  "\"response_received\"",
  "\"follow_up_needed\"",
  "\"completed\"",
  "\"cancelled\""
], "outcome state coverage");

assertAll(app, [
  "renderNexusReviewQueues",
  "data-nexus-review-queues=\"true\"",
  "NEXUS_REVIEW_QUEUE_TYPES",
  "\"provider\"",
  "\"vendor\"",
  "\"admin\"",
  "\"clinical\"",
  "\"telehealth\"",
  "\"pharmacy\"",
  "\"mobile-clinic\"",
  "\"agriculture-vendor\"",
  "\"workforce\"",
  "\"marketplace\""
], "provider vendor admin review queues");

assertAll(app, [
  "health-intake",
  "clinical-support",
  "chronic-care",
  "diabetes",
  "hypertension",
  "obesity",
  "RPM",
  "RTM",
  "telehealth-intake",
  "provider-support",
  "pharmacy-support",
  "mobile-clinic",
  "agriculture",
  "crop support",
  "farm planning",
  "agritrade",
  "field visit",
  "logistics",
  "jobs",
  "workforce",
  "learning",
  "training",
  "communications",
  "maps"
], "multi-domain workflow coverage");

assertAll(app, [
  "data-nexus-workflow-map-preview=\"true\"",
  "data-location-permission-requested=\"false\"",
  "data-geolocation-used=\"false\""
], "maps and field visit safety");

assertAll(app, [
  "mailto:",
  "sms:",
  "https://wa.me/",
  "tel:",
  "telegram",
  "Nexus will not claim completion until the user completes it outside the app."
], "communications handoff boundaries");

assertAll(app, [
  "renderNexusEndgameCommandCenter",
  "data-nexus-endgame-command-center=\"true\"",
  "NEXUS_GLOBAL_READINESS_TAGS",
  "global-ready",
  "Africa-first",
  "low-bandwidth",
  "mobile-first",
  "offline-aware",
  "rural-relevant",
  "community-health-ready",
  "agriculture-ready",
  "workforce-ready"
], "global command center readiness");

assertAll(styles, [
  ".nexus-endgame-command-center",
  ".nexus-activation-center",
  ".nexus-review-queues",
  ".nexus-confirmation-panel",
  ".nexus-partner-onboarding-form",
  ".nexus-command-center-grid",
  ".nexus-activation-grid",
  ".nexus-review-queue-grid"
], "endgame platform styles");

[
  "diagnose successfully",
  "prescription sent successfully",
  "emergency dispatch started",
  "payment processed successfully",
  "location shared automatically",
  "SMS sent automatically",
  "call completed successfully",
  "WhatsApp sent automatically",
  "silent provider execution",
  "background execution without confirmation"
].forEach(token => excludes(app, token, "unsafe execution claim"));

assert.strictEqual(
  packageJson.scripts["qa:nexus-final-endgame-agent-platform"],
  "node scripts/nexus-final-endgame-agent-platform-qa.js",
  "package alias should run final endgame platform QA"
);

includes(qaSuite, "scripts/nexus-final-endgame-agent-platform-qa.js", "qa-suite local-safe wiring");

console.log("Nexus final endgame agent platform QA passed.");
