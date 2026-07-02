const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const index = read("public/index.html");
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
  'data-testid="guest-name-input"',
  'data-testid="start-standard-user"'
].forEach(token => includes(index, token, "login browser selector"));

[
  'data-testid="nexus-standard-user-home"',
  'data-nexus-mode-launcher="true"',
  'data-testid="nexus-mode-card-${escapeHtml(item.id)}"',
  'data-testid="nexus-pilot-status"',
  'data-testid="nexus-review-queue"',
  'status: "refresh_failed_safely"',
  "lastRefreshError",
  "refreshNexusPilotPlatformStatus({ rerender: false })",
  "refreshNexusPilotReviewQueue({ rerender: false })",
  "refreshNexusAgenticBrainState().catch(() => {})",
  "let nexusPilotReviewQueue",
  "function renderNexusPilotReviewQueuePanel",
  "function refreshNexusPilotReviewQueue",
  "async function handleNexusPilotReviewQueueClick"
].forEach(token => includes(app, token, "Standard User browser readiness selector"));

[
  "agriculture",
  "chronic-care",
  "telehealth-intake",
  "mobile-clinic",
  "pharmacy-support",
  "learning",
  "jobs",
  "agritrade",
  "maps",
  "media",
  "reminders",
  "offline"
].forEach(id => includes(app, `"${id}"`, `home mode id ${id}`));

[
  "nexus-pilot-save-draft",
  "nexus-pilot-prepare-summary",
  "nexus-pilot-confirm-consent",
  "nexus-pilot-queue-review",
  "nexus-pilot-queue-offline",
  "nexus-pilot-create-reminder",
  "nexus-mode-prepare-summary-",
  "nexus-review-add-note",
  "nexus-review-mark-reviewed",
  "nexus-review-needs-follow-up"
].forEach(token => includes(app, token, `pilot browser action selector ${token}`));

[
  "/api/nexus/review-queue",
  "/api/nexus/records",
  "/api/nexus/pilot-status",
  "/api/nexus/reminders",
  "/api/nexus/offline-queue"
].forEach(token => includes(app, token, `pilot browser endpoint ${token}`));

[
  "Local review only. Notes and statuses do not contact providers",
  "No live provider, payment, pharmacy, emergency, message, call, location, camera, or dispatch action is executed",
  "Local reminder created. No SMS, push, or external calendar action occurred",
  "Saved to the local offline queue. No live sync was claimed"
].forEach(token => includes(app, token, `pilot browser safety copy ${token}`));

[
  "body.user-mode .nexus-pilot-review-queue",
  "body.user-mode .nexus-pilot-review-item"
].forEach(token => includes(css, token, `review queue CSS ${token}`));

[
  "A clinician reviewed this",
  "prescription was filled",
  "emergency help was dispatched",
  "payment was completed"
].forEach(token => excludes(app, token, "pilot browser readiness"));

assert.strictEqual(
  packageJson.scripts["qa:nexus-pilot-browser-readiness"],
  "node scripts/nexus-pilot-browser-readiness-qa.js",
  "package alias should run pilot browser readiness QA"
);
includes(qaSuite, "scripts/nexus-pilot-browser-readiness-qa.js", "safe QA suite wiring");

console.log("Nexus pilot browser readiness QA passed.");
