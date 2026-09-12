const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");
const exists = file => fs.existsSync(path.join(root, file));

function includes(haystack, needle, message) {
  assert(haystack.includes(needle), message || `Expected ${needle}`);
}

function excludesSecretValues(haystack, context) {
  [
    /sk_live_[A-Za-z0-9]+/,
    /sk_test_[A-Za-z0-9]+/,
    /SG\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/,
    /AC[a-f0-9]{32}/i,
    /xoxb-[A-Za-z0-9-]+/,
    /AIza[0-9A-Za-z_-]{20,}/,
    /-----BEGIN PRIVATE KEY-----/,
    /TWILIO_AUTH_TOKEN\s*=\s*['"]?[A-Za-z0-9]{20,}/i,
    /STRIPE_SECRET_KEY\s*=\s*['"]?sk_/i
  ].forEach(pattern => assert(!pattern.test(haystack), `${context} must not include real-looking secret value: ${pattern}`));
}

function runRenderCredentialActivationGuideQa() {
  const guidePath = "docs/NEXUS_RENDER_CREDENTIAL_ACTIVATION_GUIDE.md";
  const checklistPath = "docs/NEXUS_RENDER_ENV_CHECKLIST.md";
  assert(exists(guidePath), "Render credential activation guide must exist.");
  assert(exists(checklistPath), "Render env checklist must exist.");

  const guide = read(guidePath);
  const checklist = read(checklistPath);
  const app = read("public/app.js");
  const styles = read("public/styles.css");
  const server = read("server.js");
  const envExample = read(".env.example");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts/qa-suite.js");

  [
    "Render Dashboard",
    "Select AgriNexus/Nexus Web Service",
    "Environment",
    "Add Environment Variable",
    "Save Changes",
    "Redeploy",
    "NEXUS_PROVIDER_TEST_MODE=true",
    "NEXUS_ALLOW_LIVE_EXECUTION=false",
    "NEXUS_REQUIRE_CONFIRMATION_FOR_LIVE_ACTIONS=true",
    "NEXUS_REQUIRE_CONSENT_FOR_HEALTH_ACTIONS=true",
    "NEXUS_LIVE_KNOWLEDGE_PROVIDER=tavily",
    "TAVILY_API_KEY=",
    "NEXUS_WEATHER_PROVIDER=openweather",
    "OPENWEATHER_API_KEY=",
    "NEXUS_MAP_PROVIDER=mapbox",
    "MAPBOX_ACCESS_TOKEN=",
    "NEXUS_EMAIL_PROVIDER=sendgrid",
    "SENDGRID_API_KEY=",
    "SENDGRID_FROM_EMAIL=",
    "NEXUS_SMS_PROVIDER=twilio",
    "TWILIO_ACCOUNT_SID=",
    "TWILIO_AUTH_TOKEN=",
    "TWILIO_FROM_NUMBER=",
    "NEXUS_WHATSAPP_PROVIDER=twilio",
    "TWILIO_WHATSAPP_FROM=whatsapp:+14155238886",
    "NEXUS_VOICE_PROVIDER=twilio",
    "TWILIO_VOICE_FROM_NUMBER=",
    "NEXUS_VIDEO_PROVIDER=daily",
    "DAILY_API_KEY=",
    "NEXUS_PAYMENT_PROVIDER=stripe",
    "STRIPE_SECRET_KEY=",
    "STRIPE_WEBHOOK_SECRET=",
    "PAYSTACK_SECRET_KEY=",
    "NEXUS_LMS_PROVIDER=moodle",
    "MOODLE_BASE_URL=",
    "MOODLE_TOKEN=",
    "NEXUS_SHIPMENT_PROVIDER=aftership",
    "AFTERSHIP_API_KEY=",
    "NEXUS_HEALTH_PROVIDER_ENDPOINT=",
    "NEXUS_PHARMACY_PROVIDER_ENDPOINT=",
    "NEXUS_MOBILE_CLINIC_PROVIDER_ENDPOINT=",
    "NEXUS_DRONE_PROVIDER_ENDPOINT=",
    "NEXUS_GENERIC_PROVIDER_ENDPOINT=",
    "Do not commit real API keys"
  ].forEach(term => includes(guide, term, `Guide must include ${term}`));

  [
    "Start Here: Safe Testing Controls",
    "First Activation: Search, Weather, Maps",
    "Second Activation: Email, SMS, WhatsApp, Voice",
    "Third Activation: Video, Payments, LMS, Logistics",
    "Later Vendor Endpoints: Health, Pharmacy, Mobile Clinic, Drone",
    "Optional Services: Translation, Storage, Media",
    "Env var name",
    "Account/source",
    "Testing priority",
    "Notes"
  ].forEach(term => includes(checklist, term, `Checklist must include ${term}`));

  [
    "NEXUS_PROVIDER_TEST_MODE",
    "NEXUS_ALLOW_LIVE_EXECUTION",
    "TAVILY_API_KEY",
    "OPENWEATHER_API_KEY",
    "MAPBOX_ACCESS_TOKEN",
    "SENDGRID_API_KEY",
    "TWILIO_AUTH_TOKEN",
    "DAILY_API_KEY",
    "STRIPE_SECRET_KEY",
    "PAYSTACK_SECRET_KEY",
    "MOODLE_TOKEN",
    "AFTERSHIP_API_KEY",
    "NEXUS_HEALTH_PROVIDER_ENDPOINT",
    "NEXUS_DRONE_DISPATCH_ENDPOINT",
    "YOUTUBE_API_KEY"
  ].forEach(term => includes(checklist, term, `Checklist must include ${term}`));

  [
    "data-nexus-render-credential-setup=\"true\"",
    "Render Credential Setup",
    "Add provider API keys in Render -> Environment, then redeploy.",
    "Start with Tavily, OpenWeather, and Mapbox",
    "Keep live execution disabled until testing passes",
    "docs/NEXUS_RENDER_CREDENTIAL_ACTIVATION_GUIDE.md",
    "docs/NEXUS_RENDER_ENV_CHECKLIST.md"
  ].forEach(term => includes(app, term, `UI must include ${term}`));

  includes(styles, ".nexus-render-credential-setup-card", "Styles must include Render credential setup card.");

  [
    "renderCredentialActivation",
    "missingRenderEnvVariables",
    "recommendedFirstVariablesToAdd",
    "keepDisabledOrBlankUntilVendorAgreements",
    "liveExecutionAllowed",
    "liveExecutionWarning",
    "Render Credential Activation",
    "NEXUS_ALLOW_LIVE_EXECUTION"
  ].forEach(term => includes(server, term, `Readiness report must include ${term}`));

  [
    "NEXUS_PROVIDER_TEST_MODE=true",
    "NEXUS_ALLOW_LIVE_EXECUTION=false",
    "NEXUS_REQUIRE_CONFIRMATION_FOR_LIVE_ACTIONS=true",
    "NEXUS_REQUIRE_CONSENT_FOR_HEALTH_ACTIONS=true",
    "TAVILY_API_KEY=",
    "OPENWEATHER_API_KEY=",
    "MAPBOX_ACCESS_TOKEN=",
    "TWILIO_AUTH_TOKEN=",
    "STRIPE_SECRET_KEY=",
    "YOUTUBE_API_KEY="
  ].forEach(term => includes(envExample, term, `.env.example must include ${term}`));

  assert.strictEqual(
    pkg.scripts["qa:nexus-render-credential-activation-guide"],
    "node scripts/nexus-render-credential-activation-guide-qa.js",
    "package alias must run Render credential activation guide QA"
  );
  includes(qaSuite, "scripts/nexus-render-credential-activation-guide-qa.js", "qa-suite must include Render credential activation guide QA.");

  [
    ["guide", guide],
    ["checklist", checklist],
    ["app", app],
    ["server", server],
    [".env.example", envExample]
  ].forEach(([context, text]) => excludesSecretValues(text, context));

  console.log("Nexus Render credential activation guide QA passed.");
}

if (require.main === module) {
  try {
    runRenderCredentialActivationGuideQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({ runRenderCredentialActivationGuideQa });
