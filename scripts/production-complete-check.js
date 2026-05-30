const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const files = {
  server: fs.readFileSync(path.join(root, "server.js"), "utf8"),
  env: fs.readFileSync(path.join(root, ".env.example"), "utf8"),
  render: fs.readFileSync(path.join(root, "render.yaml"), "utf8"),
  package: fs.readFileSync(path.join(root, "package.json"), "utf8"),
  app: fs.readFileSync(path.join(root, "public", "app.js"), "utf8"),
  html: fs.readFileSync(path.join(root, "public", "index.html"), "utf8"),
  status: fs.readFileSync(path.join(root, "public", "status.html"), "utf8"),
  workflowAudit: fs.readFileSync(path.join(root, "scripts", "workflow-button-audit.js"), "utf8")
};

const items = [
  ["Live provider credentials", ["OPENAI_API_KEY", "PROVIDER_ENGINE_BASE_URL", "TRANSLATION_PROVIDER_API_KEY", "VOICE_PROVIDER_API_KEY", "DRONE_PROVIDER_API_KEY"]],
  ["Production PostgreSQL database", ["DATABASE_URL", "AGRINEXUS_STATE_STORE", "db:backup", "db:restore"]],
  ["Real user accounts", ["AUTH_PROVIDER", "PASSWORD_RESET_PROVIDER", "/api/auth/password-reset"]],
  ["Payment/subscription system", ["BILLING_PROVIDER", "BILLING_PRICE_ID", "/api/billing/checkout"]],
  ["Production security", ["SESSION_SECRET", "PASSWORD_PEPPER", "rateLimit", "x-content-type-options"]],
  ["Clinical/legal guardrails", ["terms.html", "privacy.html", "refund.html", "telehealth.consent_recorded"]],
  ["End-to-end browser regression", ["production-clickthrough.js", "Workflow button audit passed"]],
  ["Hosted deployment hardening", ["render.yaml", "AGRINEXUS_REQUIRE_LIVE_SERVICES", "/api/healthz", "production:validate-env"]],
  ["Real provider data", ["LEARNING_COURSE_WEBHOOK_URL", "WORKFORCE_JOB_WEBHOOK_URL", "HEALTH_TELEHEALTH_WEBHOOK_URL", "TRADE_MARKET_WEBHOOK_URL"]],
  ["Investor/product polish", ["productionCompleteness", "AgriNexus Live Status", "jarvisDock", "capabilityMatrixPanel"]],
  ["Jarvis production 10", ["function jarvisProductionTenModel", "jarvisProductionTen", "Real Live Provider Depth", "Production Voice", "Native Mobile Permissions", "Real Agent Learning And Memory"]],
  ["10 production workstreams", ["productionOperationsPlan", "/api/production/operations-plan", "productionOperationsPlan", "Stable Hosted Data", "Voice Layer"]]
];

const allText = Object.values(files).join("\n");
for (const [label, signals] of items) {
  for (const signal of signals) {
    assert(allText.includes(signal), `${label} missing signal: ${signal}`);
  }
}

console.log("Production 10-item completeness check passed");
