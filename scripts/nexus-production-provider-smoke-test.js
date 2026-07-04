const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const server = read("server.js");
const envProductionExample = read(".env.production.example");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

const REQUIRED_ENV_NAMES = [
  "NODE_ENV",
  "PORT",
  "NEXUS_PUBLIC_APP_URL",
  "NEXUS_ADMIN_EMAIL",
  "NEXUS_SUPPORT_EMAIL",
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER",
  "TAVILY_API_KEY",
  "BRAVE_SEARCH_API_KEY",
  "EXA_API_KEY",
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT",
  "NEXUS_LIVE_KNOWLEDGE_API_KEY",
  "NEXUS_EMAIL_PROVIDER",
  "SENDGRID_API_KEY",
  "SENDGRID_FROM_EMAIL",
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "SMTP_FROM",
  "NEXUS_COMMUNICATIONS_PROVIDER",
  "TWILIO_ACCOUNT_SID",
  "TWILIO_AUTH_TOKEN",
  "TWILIO_PHONE_NUMBER",
  "TWILIO_WHATSAPP_FROM",
  "NEXUS_SMS_ENABLED",
  "NEXUS_MESSAGES_ENABLED",
  "NEXUS_WHATSAPP_ENABLED",
  "NEXUS_TELEHEALTH_PROVIDER",
  "DAILY_API_KEY",
  "DAILY_ROOM_DOMAIN",
  "NEXUS_PROVIDER_REVIEW_EMAIL",
  "NEXUS_PHARMACY_REFERRAL_EMAIL",
  "NEXUS_MOBILE_CLINIC_REFERRAL_EMAIL",
  "NEXUS_AGRONOMY_REVIEW_EMAIL",
  "NEXUS_MARKETPLACE_VENDOR_EMAIL",
  "NEXUS_LOGISTICS_PARTNER_EMAIL",
  "NEXUS_TRAINING_PARTNER_EMAIL",
  "NEXUS_ADMIN_ALERT_EMAIL",
  "NEXUS_PROVIDER_REVIEW_SMS_TO",
  "NEXUS_PROVIDER_REVIEW_WHATSAPP_TO",
  "NEXUS_PHARMACY_SMS_TO",
  "NEXUS_PHARMACY_WHATSAPP_TO",
  "NEXUS_MOBILE_CLINIC_SMS_TO",
  "NEXUS_MOBILE_CLINIC_WHATSAPP_TO",
  "NEXUS_ENABLE_PRODUCTION_PROVIDER_SMOKE_SENDS",
  "NEXUS_PRODUCTION_SMOKE_TEST_EMAIL_TO",
  "NEXUS_PRODUCTION_SMOKE_TEST_SMS_TO",
  "NEXUS_PRODUCTION_SMOKE_TEST_WHATSAPP_TO"
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function envPresent(name) {
  return Boolean(String(process.env[name] || "").trim());
}

function configuredNames(names) {
  return names.filter(envPresent).map(name => ({ name, configured: true }));
}

function missingNames(names) {
  return names.filter(name => !envPresent(name));
}

function redactedProof(value) {
  if (value === undefined || value === null) return value;
  if (Array.isArray(value)) return value.map(redactedProof);
  if (typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => {
      if (/secret|token|api[_-]?key|authorization|password|auth/i.test(key)) return [key, "[redacted]"];
      return [key, redactedProof(item)];
    }));
  }
  const text = String(value);
  if (/[A-Za-z0-9_-]{32,}/.test(text)) return "[redacted]";
  return value;
}

async function postJson(baseUrl, route, body) {
  const response = await fetch(`${baseUrl}${route}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body)
  });
  const data = await response.json().catch(() => ({}));
  return {
    route,
    httpStatus: response.status,
    ok: response.ok,
    data: redactedProof(data)
  };
}

async function getJson(baseUrl, route) {
  const response = await fetch(`${baseUrl}${route}`);
  const data = await response.json().catch(() => ({}));
  return {
    route,
    httpStatus: response.status,
    ok: response.ok,
    data: redactedProof(data)
  };
}

function runDryRunChecks() {
  assert(fs.existsSync(path.join(root, ".env.production.example")), ".env.production.example must exist");
  REQUIRED_ENV_NAMES.forEach(name => includes(envProductionExample, `${name}=`, `.env.production.example ${name}`));

  [
    "/api/health",
    "/api/nexus/production/status",
    "/api/nexus/knowledge/status",
    "/api/nexus/email/status",
    "/api/nexus/communications/status",
    "/api/nexus/telehealth/status",
    "/api/nexus/pharmacy/status",
    "/api/nexus/mobile-clinic/status",
    "/api/nexus/live-knowledge/test",
    "/api/nexus/email/send-packet",
    "/api/nexus/communications/send-message",
    "/api/nexus/telehealth/create-video-room"
  ].forEach(route => includes(server, route, `server route ${route}`));

  [
    "nexusProductionPublicStatus",
    "noSecretValuesReturned",
    "noAuthHeadersReturned",
    "providerRecipientEmailsConfigured",
    "providerSmsWhatsappDestinationsConfigured",
    "NEXUS_ENABLE_PRODUCTION_PROVIDER_SMOKE_SENDS"
  ].forEach(token => includes(server, token, `production status ${token}`));

  [
    "nexusEmailProviderStatus",
    "nexusCommunicationsProviderStatus",
    "nexusTelehealthProvider.status",
    "nexusKnowledgeProviderStatus",
    "nexusProviderCoordinationStatus"
  ].forEach(token => includes(server, token, `provider lane ${token}`));

  assert(
    packageJson.scripts["qa:nexus-production-provider-smoke-test"] === "node scripts/nexus-production-provider-smoke-test.js",
    "package.json must expose qa:nexus-production-provider-smoke-test"
  );
  includes(qaSuite, "scripts/nexus-production-provider-smoke-test.js", "qa-suite");
  includes(envProductionExample, "NEXUS_ENABLE_PRODUCTION_PROVIDER_SMOKE_SENDS=false", "smoke flag default");

  return {
    mode: "dry-run",
    ok: true,
    requiredEnvNames: REQUIRED_ENV_NAMES,
    currentlyConfiguredEnvNames: configuredNames(REQUIRED_ENV_NAMES),
    currentlyMissingEnvNames: missingNames(REQUIRED_ENV_NAMES),
    liveExecutionEnabled: false,
    noSecretsPrinted: true
  };
}

async function runLiveSmokeTests() {
  const baseUrl = String(process.env.NEXUS_PRODUCTION_SMOKE_BASE_URL || process.env.NEXUS_PUBLIC_APP_URL || "http://127.0.0.1:4173").replace(/\/+$/, "");
  const proof = [];
  proof.push(await getJson(baseUrl, "/api/health"));
  proof.push(await getJson(baseUrl, "/api/nexus/production/status"));
  proof.push(await postJson(baseUrl, "/api/nexus/live-knowledge/test", {
    query: "climate-smart agriculture Africa",
    domain: "agriculture"
  }));

  if (envPresent("NEXUS_PRODUCTION_SMOKE_TEST_EMAIL_TO")) {
    proof.push(await postJson(baseUrl, "/api/nexus/email/send-packet", {
      to: process.env.NEXUS_PRODUCTION_SMOKE_TEST_EMAIL_TO,
      subject: "Nexus production smoke test",
      domain: "admin",
      packetId: `production-smoke-email-${Date.now()}`,
      confirmed: true,
      text: "Nexus production provider smoke test. Confirmation-controlled test send."
    }));
  }

  if (envPresent("NEXUS_PRODUCTION_SMOKE_TEST_SMS_TO")) {
    proof.push(await postJson(baseUrl, "/api/nexus/communications/send-message", {
      channel: "sms",
      to: process.env.NEXUS_PRODUCTION_SMOKE_TEST_SMS_TO,
      domain: "admin",
      packetId: `production-smoke-sms-${Date.now()}`,
      summary: "Nexus production SMS smoke test. Confirmation-controlled test send.",
      confirmed: true
    }));
  }

  if (envPresent("NEXUS_PRODUCTION_SMOKE_TEST_WHATSAPP_TO")) {
    proof.push(await postJson(baseUrl, "/api/nexus/communications/send-message", {
      channel: "whatsapp",
      to: process.env.NEXUS_PRODUCTION_SMOKE_TEST_WHATSAPP_TO,
      domain: "admin",
      packetId: `production-smoke-whatsapp-${Date.now()}`,
      summary: "Nexus production WhatsApp smoke test. Confirmation-controlled test send.",
      confirmed: true
    }));
  }

  return {
    mode: "live",
    ok: true,
    baseUrl,
    timestamp: new Date().toISOString(),
    proof: redactedProof(proof),
    noSecretsPrinted: true
  };
}

(async () => {
  const dryRun = runDryRunChecks();
  if (String(process.env.NEXUS_ENABLE_PRODUCTION_PROVIDER_SMOKE_SENDS || "false").toLowerCase() !== "true") {
    console.log(JSON.stringify(dryRun, null, 2));
    return;
  }
  const live = await runLiveSmokeTests();
  console.log(JSON.stringify(live, null, 2));
})().catch(error => {
  console.error(`nexus-production-provider-smoke-test failed: ${error.message}`);
  process.exit(1);
});
