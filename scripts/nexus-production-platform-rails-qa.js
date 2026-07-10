const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const css = read("public/styles.css");
const sw = read("public/sw.js");
const envExample = read(".env.example");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.includes(token), `${label} must not include ${token}`);
}

[
  "NEXUS_PRODUCTION_ROLES",
  "NEXUS_PRODUCTION_STORAGE_MODES",
  "NEXUS_PRODUCTION_INTEGRATIONS",
  "NEXUS_KNOWLEDGE_TRUSTED_SOURCES",
  "NEXUS_LIVE_KNOWLEDGE_ENABLED",
  "function ensureNexusProductionRailsState",
  "function nexusProductionStorageStatus",
  "function nexusProductionIntegrationStatus",
  "function nexusProductionAdminOperations",
  "function nexusProductionPrivacySummary",
  "function nexusProductionReadiness",
  "function nexusKnowledgeProviderStatus",
  "function nexusCreateExportDeleteRequest",
  "function nexusPrepareIntegrationAttempt"
].forEach(token => includes(server, token, `server production rail contract ${token}`));

[
  "/api/nexus/health",
  "/api/nexus/readiness",
  "/api/nexus/production-readiness",
  "/api/nexus/storage/status",
  "/api/nexus/integrations/status",
  "/api/nexus/knowledge/status",
  "/api/nexus/integrations/logs",
  "\\/api\\/nexus\\/integrations\\/([^/]+)\\/attempt",
  "/api/nexus/admin/operations",
  "/api/nexus/privacy/summary",
  "/api/nexus/privacy/export-request",
  "/api/nexus/privacy/delete-request",
  "/api/nexus/consent-history",
  "/api/nexus/account",
  "\\/api\\/nexus\\/records\\/([^/]+)\\/archive",
  "\\/api\\/nexus\\/records\\/([^/]+)\\/export",
  "\\/api\\/nexus\\/records\\/([^/]+)\\/delete-request"
].forEach(token => includes(server, token, `server endpoint ${token}`));

[
  "executionEnabled: false",
  "userApprovalRequired: true",
  "auditRequired: true",
  "noSilentExecution: true",
  "noSecretValuesReturned: true",
  "noExternalRequest: true",
  "noSilentDeletion",
  "High-risk provider, pharmacy, payment, emergency, communication, location, and marketplace actions stay gated"
].forEach(token => includes(server, token, `production safety invariant ${token}`));

[
  "TWILIO_ACCOUNT_SID",
  "TWILIO_AUTH_TOKEN",
  "TWILIO_FROM_NUMBER",
  "TWILIO_PHONE_NUMBER",
  "TAVILY_API_KEY",
  "BRAVE_SEARCH_API_KEY",
  "EXA_API_KEY",
  "NEXUS_LIVE_KNOWLEDGE_API_KEY",
  "GOOGLE_MAPS_API_KEY",
  "STRIPE_SECRET_KEY",
  "MOODLE_BASE_URL",
  "DJI_CLIENT_ID"
].forEach(token => includes(server, token, `provider env readiness ${token}`));

[
  "NEXUS_STORAGE_MODE=local_json",
  "NEXUS_EXTERNAL_DATABASE_URL=",
  "NEXUS_PUBLIC_APP_URL=",
  "NEXUS_LIVE_KNOWLEDGE_ENABLED=false",
  "NEXUS_LIVE_KNOWLEDGE_API_KEY=",
  "NEXUS_COMPLIANCE_REVIEW_STATUS=requires_legal_review",
  "NEXUS_TELEHEALTH_PROVIDER_ENABLED=false",
  "NEXUS_PHARMACY_PROVIDER_ENABLED=false",
  "NEXUS_TELEHEALTH_PROVIDER_BASE_URL=",
  "NEXUS_PHARMACY_PROVIDER_BASE_URL="
].forEach(token => includes(envExample, token, `production rail env example ${token}`));

[
  "let nexusProductionReadinessStatus",
  "function renderNexusProductionPlatformRailsPanel",
  "function refreshNexusProductionPlatformRails",
  "function renderNexusKnowledgeRailPanel",
  'data-testid="nexus-knowledge-rail"',
  "async function handleNexusProductionRailsClick",
  'data-testid="nexus-production-readiness"',
  'data-testid="nexus-account-settings"',
  'data-testid="nexus-storage-status"',
  'data-testid="nexus-privacy-operations"',
  'data-testid="nexus-admin-operations"',
  'data-testid="nexus-integration-status"',
  'data-testid="nexus-export-request"',
  'data-testid="nexus-delete-request"',
  'data-testid="nexus-prepare-integration"',
  "/api/nexus/production-readiness",
  "/api/nexus/storage/status",
  "/api/nexus/integrations/status",
  "/api/nexus/knowledge/status",
  "/api/nexus/admin/operations",
  "/api/nexus/privacy/summary",
  "No live provider, payment, pharmacy, emergency, message, call, location, or marketplace execution occurs from this panel"
].forEach(token => includes(app, token, `frontend production rail ${token}`));

[
  "nexus-mode-card-health",
  "nexus-mode-card-telehealth",
  "nexus-mode-card-pharmacy",
  "nexus-mode-card-music"
].forEach(token => includes(app, token, `browser mode alias ${token}`));

[
  "body.user-mode .nexus-production-rails",
  "body.user-mode .nexus-production-rails-grid",
  "body.user-mode .nexus-production-integration-list",
  "body.user-mode .nexus-production-rails button"
].forEach(token => includes(css, token, `production rail CSS ${token}`));

[
  "nexus-behavior-405",
  "agrinexus-pwa-v356"
].forEach(token => {
  includes(app, token, `app build ${token}`);
  includes(server, token, `server build ${token}`);
  includes(sw, token, `service worker build ${token}`);
});

assert.strictEqual(
  packageJson.scripts["qa:nexus-production-platform-rails"],
  "node scripts/nexus-production-platform-rails-qa.js",
  "package script should run production platform rails QA"
);

includes(qaSuite, "scripts/nexus-production-platform-rails-qa.js", "qa-suite wiring");

[
  "provider connection is live",
  "pharmacy fulfillment is active",
  "emergency dispatch is active",
  "payment was processed",
  "HIPAA compliant",
  "GDPR compliant"
].forEach(token => {
  excludes(app, token, `unsafe frontend claim ${token}`);
  excludes(server, token, `unsafe server claim ${token}`);
});

console.log("nexus-production-platform-rails QA passed");
