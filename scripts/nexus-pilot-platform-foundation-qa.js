const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const css = read("public/styles.css");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.toLowerCase().includes(token.toLowerCase()), `${label} must not include unsafe token: ${token}`);
}

[
  "const NEXUS_PILOT_RECORD_TYPES",
  "const NEXUS_PILOT_RECORD_STATUSES",
  "const NEXUS_PILOT_SENSITIVE_TYPES",
  "const NEXUS_PILOT_MODE_RECORD_TYPES",
  "function ensureNexusPilotState",
  "function buildNexusPilotRecord",
  "function addNexusPilotAuditEvent",
  "function nexusPilotQueueRecordForReview",
  "function nexusPilotStatus"
].forEach(token => includes(server, token, `server pilot foundation token ${token}`));

[
  "chronic_care_reading",
  "telehealth_intake",
  "pharmacy_note",
  "mobile_clinic_request",
  "agriculture_request",
  "agritrade_marketplace_draft",
  "jobs_workforce_plan",
  "learning_plan",
  "field_visit_plan",
  "reminder",
  "offline_queue_item",
  "provider_ready_summary",
  "consent_event",
  "audit_event"
].forEach(token => includes(server, token, `pilot record type ${token}`));

[
  "draft",
  "ready_for_review",
  "queued",
  "queued_locally",
  "reviewed",
  "needs_follow_up",
  "closed"
].forEach(token => includes(server, token, `pilot record status ${token}`));

[
  'url.pathname === "/api/nexus/profile"',
  'url.pathname === "/api/nexus/records"',
  'url.pathname.match(/^\\/api\\/nexus\\/records\\/([^/]+)$/)',
  'url.pathname.match(/^\\/api\\/nexus\\/records\\/([^/]+)\\/summary$/)',
  'url.pathname.match(/^\\/api\\/nexus\\/records\\/([^/]+)\\/consent$/)',
  'url.pathname.match(/^\\/api\\/nexus\\/records\\/([^/]+)\\/queue-review$/)',
  'url.pathname === "/api/nexus/review-queue"',
  'url.pathname.match(/^\\/api\\/nexus\\/review-queue\\/([^/]+)\\/note$/)',
  'url.pathname.match(/^\\/api\\/nexus\\/review-queue\\/([^/]+)\\/status$/)',
  'url.pathname === "/api/nexus/audit"',
  'url.pathname === "/api/nexus/reminders"',
  'url.pathname === "/api/nexus/offline-queue"',
  'url.pathname === "/api/nexus/pilot-status"'
].forEach(token => includes(server, token, `pilot API route ${token}`));

[
  "consent_required",
  "This does not send it to a live provider unless a provider connection is configured",
  "No live provider was contacted",
  "No live provider, payment, pharmacy, emergency, message, call, location, or dispatch action occurred",
  "No SMS, push notification, email, or external calendar action occurred",
  "No live sync or external submission occurred",
  "No fake live provider connection",
  "No pharmacy fulfillment",
  "No emergency dispatch",
  "No payment processing",
  "No authentication or compliance claim"
].forEach(token => includes(server, token, `server safety boundary ${token}`));

[
  "let nexusPilotPlatformLastRecord",
  "const NEXUS_PILOT_SENSITIVE_MODES",
  "function renderNexusPilotPlatformActions",
  "function renderNexusPilotPlatformStatusPanel",
  "function refreshNexusPilotPlatformStatus",
  "function nexusPilotCurrentSummaryPayload",
  "function ensureNexusPilotRecordForAction",
  "async function handleNexusPilotPlatformActionClick",
  "data-nexus-pilot-action",
  "data-nexus-pilot-platform-actions",
  "data-nexus-pilot-status-panel",
  "Save draft",
  "Prepare summary",
  "Confirm review consent",
  "Queue for review",
  "Queue offline",
  "Create reminder",
  "Refresh pilot status",
  "/api/nexus/records",
  "/api/nexus/pilot-status",
  "/api/nexus/offline-queue",
  "/api/nexus/reminders"
].forEach(token => includes(app, token, `frontend pilot action token ${token}`));

[
  "Local pilot records, review queue, reminders, and offline items only",
  "No live provider, payment, pharmacy, emergency, message, call, location, camera, or dispatch action is executed",
  "Consent is required before this sensitive summary can enter the local review queue",
  "Local reminder created. No SMS, push, or external calendar action occurred",
  "Saved to the local offline queue. No live sync was claimed"
].forEach(token => includes(app, token, `frontend safety copy ${token}`));

[
  "body.user-mode .nexus-pilot-platform-actions",
  "body.user-mode .nexus-pilot-status-panel",
  "border-radius: 999px",
  "linear-gradient(135deg"
].forEach(token => includes(css, token, `pilot action CSS ${token}`));

[
  "A clinician reviewed this",
  "prescription was filled",
  "emergency help was dispatched",
  "payment was completed",
  "HIPAA compliant login is active",
  "secure authenticated medical record is active"
].forEach(token => {
  excludes(app, token, "frontend pilot platform");
  excludes(server, token, "server pilot platform");
});

assert.strictEqual(
  packageJson.scripts["qa:nexus-pilot-platform-foundation"],
  "node scripts/nexus-pilot-platform-foundation-qa.js",
  "package alias should run pilot platform foundation QA"
);
includes(qaSuite, "scripts/nexus-pilot-platform-foundation-qa.js", "safe QA suite wiring");

console.log("Nexus pilot platform foundation QA passed.");
