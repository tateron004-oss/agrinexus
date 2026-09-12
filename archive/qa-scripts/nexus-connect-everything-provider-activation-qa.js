const assert = require("node:assert");
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const { spawn } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const styles = read("public/styles.css");
const envExample = read(".env.example");
const qaSuite = read("scripts/qa-suite.js");
const pkg = JSON.parse(read("package.json"));
const activationDoc = read("docs/NEXUS_CONNECT_EVERYTHING_PROVIDER_ACTIVATION.md");
const readinessReport = read("docs/NEXUS_PROVIDER_CONNECTION_READINESS_REPORT.md");

function includes(haystack, needle, message) {
  assert(haystack.includes(needle), message || `Expected ${needle}`);
}

function excludes(haystack, needle, message) {
  assert(!haystack.toLowerCase().includes(needle.toLowerCase()), message || `Did not expect ${needle}`);
}

[
  "Live Knowledge / Search",
  "Maps / Geocoding / Routing",
  "Weather / Climate / Heat Risk",
  "Communications",
  "SMS / WhatsApp / Telegram / Voice",
  "Telehealth / Video",
  "Healthcare Provider / Pharmacy / Mobile Clinic / RPM / RTM",
  "Payments / Mobile Money",
  "Marketplace / Logistics / Shipment",
  "Workforce / CRM / ATS",
  "LMS / Training",
  "Drone / Imagery / Storage",
  "Media / Music / YouTube",
  "Translation / Language",
  "Generic Provider Hub"
].forEach(group => includes(envExample, group, `.env.example should include ${group}`));

[
  "TAVILY_API_KEY",
  "BRAVE_SEARCH_API_KEY",
  "EXA_API_KEY",
  "SERPAPI_API_KEY",
  "GOOGLE_CSE_API_KEY",
  "GOOGLE_CSE_ENGINE_ID",
  "BING_SEARCH_API_KEY",
  "GOOGLE_MAPS_API_KEY",
  "MAPBOX_ACCESS_TOKEN",
  "HERE_API_KEY",
  "TOMTOM_API_KEY",
  "OPENWEATHER_API_KEY",
  "TOMORROW_API_KEY",
  "SMTP_HOST",
  "SENDGRID_API_KEY",
  "GMAIL_REFRESH_TOKEN",
  "MICROSOFT_GRAPH_REFRESH_TOKEN",
  "TWILIO_ACCOUNT_SID",
  "TWILIO_AUTH_TOKEN",
  "TWILIO_FROM_NUMBER",
  "WHATSAPP_BUSINESS_TOKEN",
  "TELEGRAM_BOT_TOKEN",
  "DAILY_API_KEY",
  "ZOOM_CLIENT_SECRET",
  "TWILIO_VIDEO_AUTH_TOKEN",
  "VONAGE_API_SECRET",
  "WHEREBY_API_KEY",
  "NEXUS_HEALTH_PROVIDER_ENDPOINT",
  "NEXUS_PHARMACY_PROVIDER_ENDPOINT",
  "NEXUS_MOBILE_CLINIC_PROVIDER_ENDPOINT",
  "NEXUS_RPM_PROVIDER_ENDPOINT",
  "NEXUS_RTM_PROVIDER_ENDPOINT",
  "STRIPE_SECRET_KEY",
  "PAYPAL_CLIENT_SECRET",
  "FLUTTERWAVE_SECRET_KEY",
  "PAYSTACK_SECRET_KEY",
  "MPESA_CONSUMER_SECRET",
  "NEXUS_MARKETPLACE_PROVIDER_ENDPOINT",
  "AFTERSHIP_API_KEY",
  "SHIPPO_API_KEY",
  "HUBSPOT_ACCESS_TOKEN",
  "GREENHOUSE_API_KEY",
  "MOODLE_TOKEN",
  "CANVAS_ACCESS_TOKEN",
  "NEXUS_DRONE_PROVIDER_ENDPOINT",
  "AWS_SECRET_ACCESS_KEY",
  "CLOUDINARY_API_SECRET",
  "GOOGLE_DRIVE_REFRESH_TOKEN",
  "YOUTUBE_API_KEY",
  "DEEPL_API_KEY",
  "AZURE_TRANSLATOR_KEY",
  "NEXUS_GENERIC_PROVIDER_ENDPOINT",
  "NEXUS_PROVIDER_TEST_MODE",
  "NEXUS_ALLOW_LIVE_EXECUTION",
  "NEXUS_REQUIRE_CONFIRMATION_FOR_LIVE_ACTIONS"
].forEach(name => includes(envExample, `${name}=`, `.env.example should document ${name}`));

[
  "NEXUS_PROVIDER_ENV_ALIASES",
  "nexusInternetServiceEnvPresent",
  "nexusInternetMissingEnv",
  "nexusProviderReadinessSnapshot",
  "nexusProviderReadinessReport",
  "nexusProviderReadinessMarkdownReport",
  "/api/nexus/provider-readiness",
  "/api/nexus/provider-readiness-report",
  "/api/nexus/provider/test-all",
  "/api/nexus/provider/test",
  "/api/nexus/provider/activate",
  "/api/nexus/provider/deactivate",
  "/api/nexus/provider/test-receipts",
  "/api/nexus/internet-services",
  "provider_test_all_completed",
  "provider_activation_requested",
  "provider_deactivation_requested"
].forEach(token => includes(server, token, `server should include ${token}`));

[
  "connect everything",
  "test all providers",
  "what is connected",
  "what credentials are missing",
  "show live-ready services",
  "test live knowledge",
  "test maps",
  "test weather",
  "test sms",
  "test whatsapp",
  "test payments",
  "test lms",
  "test drone",
  "test telehealth",
  "show provider receipts"
].forEach(command => includes(server.toLowerCase(), command, `Ask Nexus should route ${command}`));

[
  "data-nexus-connect-everything-provider-activation=\"true\"",
  "data-nexus-provider-readiness-counts=\"true\"",
  "data-nexus-provider-readiness-action",
  "data-nexus-missing-credentials-checklist=\"true\"",
  "data-nexus-live-ready-lanes=\"true\"",
  "Connect Everything",
  "Test all configured lanes",
  "Export provider readiness report",
  "Show missing credentials checklist",
  "nexusProviderActivationCommandForAction",
  "handleNexusProviderActivationControlClick"
].forEach(token => includes(app, token, `app should include ${token}`));

[
  ".nexus-connect-everything-provider-activation",
  ".nexus-connect-everything-counts",
  ".nexus-connect-everything-actions",
  ".nexus-missing-credentials-checklist",
  ".nexus-live-ready-lanes"
].forEach(token => includes(styles, token, `styles should include ${token}`));

assert.strictEqual(
  pkg.scripts["qa:nexus-connect-everything-provider-activation"],
  "node scripts/nexus-connect-everything-provider-activation-qa.js",
  "package alias should run connect-everything QA"
);
includes(qaSuite, "scripts/nexus-connect-everything-provider-activation-qa.js", "qa-suite should include connect-everything QA");

[
  "What Was Connected",
  "Provider Categories",
  "Env Variable Groups",
  "How Readiness Detection Works",
  "How To Test Providers",
  "How To Activate Live Execution",
  "What Remains Missing",
  "What Remains Blocked For Safety",
  "First Recommended Live Providers",
  "QA Commands"
].forEach(section => includes(activationDoc, section, `activation doc should include ${section}`));

[
  "Activated Provider Surface",
  "Test-Ready And Live-Ready Rules",
  "Missing Credential Checklist",
  "OAuth Required",
  "Vendor Required",
  "Local Fallback Available",
  "Safety Blocks",
  "Recommended Activation Order"
].forEach(section => includes(readinessReport, section, `readiness report should include ${section}`));

[
  "sk_live_",
  "SG.",
  "AC123",
  "xoxb-",
  "AIza",
  "auth token value"
].forEach(secretPattern => {
  excludes(server, secretPattern, `server should not include ${secretPattern}`);
  excludes(app, secretPattern, `app should not include ${secretPattern}`);
  excludes(activationDoc, secretPattern, `docs should not include ${secretPattern}`);
  excludes(readinessReport, secretPattern, `report should not include ${secretPattern}`);
});

function requestJson(port, method, route, body) {
  return new Promise((resolve, reject) => {
    const payload = body ? JSON.stringify(body) : "";
    const req = http.request({
      hostname: "127.0.0.1",
      port,
      path: route,
      method,
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(payload)
      }
    }, res => {
      let data = "";
      res.setEncoding("utf8");
      res.on("data", chunk => { data += chunk; });
      res.on("end", () => {
        try {
          resolve({ status: res.statusCode, body: data ? JSON.parse(data) : null });
        } catch (error) {
          reject(new Error(`Invalid JSON from ${route}: ${error.message}\n${data.slice(0, 400)}`));
        }
      });
    });
    req.on("error", reject);
    if (payload) req.write(payload);
    req.end();
  });
}

async function waitForServer(port, child) {
  const deadline = Date.now() + 15000;
  while (Date.now() < deadline) {
    if (child.exitCode !== null) throw new Error(`server exited early with ${child.exitCode}`);
    try {
      const result = await requestJson(port, "GET", "/api/health", null);
      if (result.status === 200) return;
    } catch (_) {
      await new Promise(resolve => setTimeout(resolve, 250));
    }
  }
  throw new Error("server did not start in time");
}

function assertNoSecretValues(value, context) {
  const text = JSON.stringify(value);
  [
    "super-secret",
    "fake-token-value",
    "sk_live_",
    "AC123456789",
    "AIza"
  ].forEach(pattern => excludes(text, pattern, `${context} should not expose ${pattern}`));
}

async function runRuntimeQa() {
  const port = 4198;
  const tmpDb = path.join(root, "tmp-connect-everything-provider-activation-qa-db.json");
  try { fs.rmSync(tmpDb, { force: true }); } catch (_) {}
  const child = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      HOST: "127.0.0.1",
      AGRINEXUS_DB_PATH: tmpDb,
      NEXUS_ALLOW_LIVE_EXECUTION: "false",
      TAVILY_API_KEY: "",
      BRAVE_SEARCH_API_KEY: "",
      EXA_API_KEY: "",
      TWILIO_ACCOUNT_SID: "",
      TWILIO_AUTH_TOKEN: "",
      TWILIO_FROM_NUMBER: "",
      NEXUS_GENERIC_PROVIDER_API_KEY: "fake-token-value"
    },
    stdio: ["ignore", "pipe", "pipe"]
  });
  let stderr = "";
  child.stderr.on("data", chunk => { stderr += String(chunk); });
  try {
    await waitForServer(port, child);

    const readiness = await requestJson(port, "GET", "/api/nexus/provider-readiness", null);
    assert.strictEqual(readiness.status, 200, "readiness endpoint should return 200");
    assert(readiness.body.totalProviderLanes > 20, "readiness should include provider lanes");
    assert(Array.isArray(readiness.body.missingCredentialChecklist), "readiness should expose missing credential checklist");
    assertNoSecretValues(readiness.body, "provider readiness");

    const report = await requestJson(port, "GET", "/api/nexus/provider-readiness-report", null);
    assert.strictEqual(report.status, 200, "readiness report should return 200");
    assert(Array.isArray(report.body.missingCredentialChecklist), "report should include structured missing credential checklist");
    assert(Array.isArray(report.body.recommendedActivationOrder), "report should include recommended activation order");
    assertNoSecretValues(report.body, "provider readiness report");

    const selected = await requestJson(port, "POST", "/api/nexus/provider/test", { laneId: "wikipedia-wikidata-fallback" });
    assert.strictEqual(selected.status, 200, "selected provider test should return 200");
    assert(selected.body.receiptId || selected.body.receipt?.receiptId, "selected provider test should produce receipt metadata");
    assertNoSecretValues(selected.body, "selected provider test");

    const all = await requestJson(port, "POST", "/api/nexus/provider/test-all", { configuredOnly: false });
    assert.strictEqual(all.status, 200, "test all should return 200");
    assert(all.body.summary.totalTested > 0, "test all should test safe lanes");
    assert.strictEqual(all.body.summary.liveExecuted, 0, "test all should not live execute");
    assertNoSecretValues(all.body, "test all response");

    const activate = await requestJson(port, "POST", "/api/nexus/provider/activate", { laneId: "twilio-sms-provider" });
    assert.strictEqual(activate.status, 200, "activation request should return 200");
    assert.strictEqual(activate.body.noExecutionAuthorized, true, "activation request should remain no-execution");

    const deactivate = await requestJson(port, "POST", "/api/nexus/provider/deactivate", { laneId: "twilio-sms-provider" });
    assert.strictEqual(deactivate.status, 200, "deactivation request should return 200");
    assert.strictEqual(deactivate.body.noProviderContact, true, "deactivation should not contact provider");

    const receipts = await requestJson(port, "GET", "/api/nexus/provider/test-receipts", null);
    assert.strictEqual(receipts.status, 200, "receipts endpoint should return 200");
    assert(receipts.body.receipts.length >= 1, "receipts endpoint should include test receipts");
    assertNoSecretValues(receipts.body, "provider receipts");

    const askStatus = await requestJson(port, "POST", "/api/nexus/intelligence/ask", { command: "Nexus, what is connected?" });
    assert.strictEqual(askStatus.status, 200, "Ask Nexus connected command should return 200");
    assertNoSecretValues(askStatus.body, "Ask Nexus connected response");

    const askMissing = await requestJson(port, "POST", "/api/nexus/intelligence/ask", { command: "Nexus, what credentials are missing?" });
    assert.strictEqual(askMissing.status, 200, "Ask Nexus missing credentials command should return 200");
    assertNoSecretValues(askMissing.body, "Ask Nexus missing credentials response");
  } finally {
    child.kill();
    await new Promise(resolve => child.once("exit", resolve));
    try { fs.rmSync(tmpDb, { force: true }); } catch (_) {}
  }
  assert(!stderr.includes("UnhandledPromiseRejection"), `server stderr should not include unhandled rejection: ${stderr}`);
}

runRuntimeQa().then(() => {
  console.log("Nexus connect-everything provider activation QA passed");
}).catch(error => {
  console.error(error);
  process.exit(1);
});
