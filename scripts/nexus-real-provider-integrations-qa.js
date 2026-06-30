const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function exists(relativePath) {
  return fs.existsSync(path.join(ROOT, relativePath));
}

const failures = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

function includes(source, text, label) {
  check(source.includes(text), `${label} must include ${text}`);
}

const server = read("server.js");
const app = read("public/app.js");
const envExample = read(".env.example");
const packageJson = read("package.json");
const qaSuite = read("scripts/qa-suite.js");
const providerUtils = read("server/providers/providerUtils.js");
const auditDoc = read("docs/NEXUS_REAL_PROVIDER_INTEGRATION_AUDIT.md");

const providerFiles = [
  "server/providers/index.js",
  "server/providers/providerUtils.js",
  "server/providers/twilioProvider.js",
  "server/providers/googleMapsProvider.js",
  "server/providers/npiProvider.js",
  "server/providers/moodleProvider.js",
  "server/providers/zoomProvider.js",
  "server/providers/djiProvider.js",
  "server/providers/marketplaceProvider.js",
  "server/providers/stripeProvider.js",
  "server/providers/offlineSyncProvider.js",
  "server/providers/reminderProvider.js"
];

providerFiles.forEach(file => check(exists(file), `${file} must exist`));
check(exists("docs/NEXUS_REAL_PROVIDER_INTEGRATION_AUDIT.md"), "real provider integration audit doc must exist");

[
  "/api/nexus/tools/status",
  "/api/nexus/tools/sms/send",
  "/api/nexus/tools/whatsapp/send",
  "/api/nexus/tools/call/start",
  "/api/nexus/tools/maps/route",
  "/api/nexus/tools/providers/search",
  "/api/nexus/tools/learning/courses",
  "/api/nexus/tools/learning/enroll",
  "/api/nexus/tools/zoom/meeting",
  "/api/nexus/tools/drones/status",
  "/api/nexus/tools/drones/mission-request",
  "/api/nexus/tools/marketplace/listing",
  "/api/nexus/tools/marketplace/payment-intent",
  "/api/nexus/tools/offline/queue",
  "/api/nexus/tools/offline/sync",
  "/api/nexus/tools/reminders/create"
].forEach(route => includes(server, route, "server.js"));

[
  "ok",
  "provider",
  "action",
  "status",
  "message",
  "data",
  "requiresConfirmation",
  "missingConfig",
  "disabled",
  "auditEvent",
  "noHiddenExecution",
  "noSecretExposure"
].forEach(field => includes(providerUtils, field, "providerUtils response contract"));

[
  "NEXUS_TOOL_EXECUTION_ENABLED",
  "NEXUS_REMINDERS_ENABLED",
  "NEXUS_MESSAGES_ENABLED",
  "NEXUS_WHATSAPP_ENABLED",
  "NEXUS_CALLS_ENABLED",
  "NEXUS_MAPS_ENABLED",
  "NEXUS_PROVIDER_SEARCH_ENABLED",
  "NEXUS_LMS_ENABLED",
  "NEXUS_LMS_ENROLL_ENABLED",
  "NEXUS_ZOOM_ENABLED",
  "NEXUS_DRONES_ENABLED",
  "NEXUS_MARKETPLACE_ENABLED",
  "NEXUS_MARKETPLACE_PAYMENTS_ENABLED",
  "NEXUS_OFFLINE_SYNC_ENABLED",
  "TWILIO_ACCOUNT_SID",
  "TWILIO_AUTH_TOKEN",
  "TWILIO_FROM_NUMBER",
  "TWILIO_WHATSAPP_FROM",
  "GOOGLE_MAPS_API_KEY",
  "MOODLE_BASE_URL",
  "MOODLE_TOKEN",
  "ZOOM_ACCOUNT_ID",
  "ZOOM_CLIENT_ID",
  "ZOOM_CLIENT_SECRET",
  "DJI_APP_KEY",
  "DJI_APP_SECRET",
  "DJI_ORG_ID",
  "STRIPE_SECRET_KEY",
  "STRIPE_WEBHOOK_SECRET"
].forEach(name => includes(envExample, name, ".env.example"));

const confirmationGatedFiles = [
  "server/providers/twilioProvider.js",
  "server/providers/googleMapsProvider.js",
  "server/providers/moodleProvider.js",
  "server/providers/zoomProvider.js",
  "server/providers/djiProvider.js",
  "server/providers/marketplaceProvider.js",
  "server/providers/stripeProvider.js",
  "server/providers/offlineSyncProvider.js",
  "server/providers/reminderProvider.js"
];

confirmationGatedFiles.forEach(file => {
  const source = read(file);
  includes(source, "requireConfirmation", `${file} controlled action gate`);
});

const npiProvider = read("server/providers/npiProvider.js");
includes(npiProvider, "CMS NPPES NPI Registry", "NPI provider");
includes(npiProvider, "noHealthDataShared", "NPI provider");

const djiProvider = read("server/providers/djiProvider.js");
includes(djiProvider, "flightControlEnabled: false", "DJI provider");
includes(djiProvider, "No drone flight", "DJI provider");

const stripeProvider = read("server/providers/stripeProvider.js");
includes(stripeProvider, "NEXUS_MARKETPLACE_PAYMENTS_ENABLED", "Stripe provider");
includes(stripeProvider, "compliance", "Stripe provider");

const offlineProvider = read("server/providers/offlineSyncProvider.js");
["health", "payment", "call", "message", "location", "camera", "emergency"].forEach(type => {
  includes(offlineProvider, type, "offline sync blocked type");
});

[
  "data-nexus-real-provider-testing",
  "nexusRealProviderTestingLastResult",
  "NEXUS_REAL_PROVIDER_TEST_CONTROLS",
  "Refresh provider status",
  "Run controlled test",
  "Nexus will not secretly call, message, pay, share location, book, diagnose, dispatch, fly drones, or contact providers"
].forEach(text => includes(app, text, "public/app.js provider testing UI"));

const realProviderUiStart = app.indexOf("const NEXUS_REAL_PROVIDER_TEST_CONTROLS");
const realProviderUiEnd = app.indexOf("function handleNexusPlatformDashboardClick");
const realProviderUi = realProviderUiStart >= 0 && realProviderUiEnd > realProviderUiStart
  ? app.slice(realProviderUiStart, realProviderUiEnd)
  : "";

[
  "TWILIO_AUTH_TOKEN",
  "STRIPE_SECRET_KEY",
  "ZOOM_CLIENT_SECRET",
  "MOODLE_TOKEN",
  "DJI_APP_SECRET",
  "GOOGLE_MAPS_API_KEY"
].forEach(secretName => {
  check(!realProviderUi.includes(secretName), `real provider testing UI must not expose ${secretName}`);
});

[
  "Twilio",
  "Google Maps",
  "CMS NPPES/NPI",
  "Moodle",
  "Zoom",
  "DJI",
  "AgriTrade",
  "Stripe",
  "Local offline sync",
  "Local reminders",
  "No provider action runs silently"
].forEach(text => includes(auditDoc, text, "audit doc"));

includes(packageJson, "qa:nexus-real-provider-integrations", "package.json");
includes(qaSuite, "scripts/nexus-real-provider-integrations-qa.js", "qa-suite.js");

const providerSources = providerFiles.map(read).join("\n");
["sk_live_", "AIzaSy", "xoxb-", "-----BEGIN PRIVATE KEY-----"].forEach(secretPattern => {
  check(!providerSources.includes(secretPattern), `provider sources must not include hardcoded secret pattern ${secretPattern}`);
});

if (failures.length) {
  console.error("Nexus real provider integrations QA failed:");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Nexus real provider integrations QA passed.");
