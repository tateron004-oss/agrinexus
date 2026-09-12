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
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");
const doc = read("docs/NEXUS_FULL_INTERNET_SERVICES_ACTIVATION_RUNTIME.md");

function includes(haystack, needle, message) {
  assert(haystack.includes(needle), message || `Expected ${needle}`);
}

function excludes(haystack, needle, message) {
  assert(!haystack.toLowerCase().includes(needle.toLowerCase()), message || `Did not expect ${needle}`);
}

[
  "NEXUS_INTERNET_SERVICE_REGISTRY",
  "NEXUS_INTERNET_SERVICE_STATUSES",
  "NEXUS_INTERNET_GATE_OUTCOMES",
  "nexusInternetServicesSnapshot",
  "nexusInternetServiceAdapter",
  "nexusInternetServiceAdapters",
  "createNexusInternetServiceReceipt",
  "createNexusInternetServiceAudit",
  "nexusInternetAgenticResponse",
  "/api/nexus/internet-services",
  "/api/nexus/internet-services/test",
  "/api/nexus/internet-services/search",
  "/api/nexus/internet-services/prepare"
].forEach(token => includes(server, token, `server should include ${token}`));

[
  "AI / Live Knowledge / Search",
  "Maps / Routing / Geospatial",
  "Weather / Climate / Heat Risk",
  "Communications",
  "Telehealth / Video",
  "Healthcare Support",
  "Payments / Mobile Money / Marketplace",
  "Marketplace / Trade / Logistics",
  "Workforce / Employer / ATS / CRM",
  "Learning / LMS",
  "Drone / Imagery / Storage",
  "Media / Music",
  "Translation / Language",
  "Storage / Files / Export"
].forEach(category => {
  includes(server, category, `server registry should include ${category}`);
  includes(app, category, `app UI should include ${category}`);
});

[
  "Tavily Live Search",
  "Brave Search",
  "Exa Search",
  "Generic Live Knowledge Endpoint",
  "SerpAPI-Compatible Search",
  "Google Programmable Search",
  "Bing / Azure Search",
  "Wikipedia / Wikidata Open Knowledge",
  "OpenStreetMap Public Fallback",
  "Google Maps-Compatible Provider",
  "OpenWeather-Compatible Provider",
  "NOAA / weather.gov Public Fallback",
  "SMTP Email Provider",
  "SendGrid Provider",
  "Twilio SMS",
  "Twilio WhatsApp",
  "Telegram Bot API",
  "Twilio Voice",
  "Zoom-Compatible Provider",
  "Daily.co Provider",
  "Generic Provider Referral Endpoint",
  "Generic Pharmacy Intake Endpoint",
  "Stripe-Compatible Provider",
  "M-Pesa-Compatible Provider",
  "AfterShip-Compatible Tracking",
  "HubSpot-Compatible Provider",
  "Moodle-Compatible LMS",
  "Generic Drone Mission Endpoint",
  "S3-Compatible Storage",
  "YouTube Data / Embed Support",
  "Google Translate-Compatible Provider",
  "Local Export"
].forEach(token => includes(server, token, `provider lane should include ${token}`));

[
  "id",
  "label",
  "category",
  "providerType",
  "description",
  "requiredEnv",
  "optionalEnv",
  "supportedModes",
  "supportedActions",
  "testAction",
  "requiresConsent",
  "requiresConfirmation",
  "requiresAdminApproval",
  "requiresVendorApproval",
  "riskLevel",
  "status",
  "configured",
  "missingEnv",
  "canTest",
  "canExecuteLive",
  "localFallback",
  "safeFallbackMessage",
  "successReceiptType",
  "externalReceiptRequired",
  "auditEventTypes"
].forEach(field => includes(server, field, `registry/adapters should expose field ${field}`));

[
  "internet_result_returned",
  "blocked_missing_credentials",
  "oauth_required",
  "vendor_required",
  "consent_required",
  "confirmation_required",
  "approval_required",
  "live_executed",
  "blocked_for_safety"
].forEach(status => includes(server, status, `gate should represent ${status}`));

[
  "data-nexus-full-internet-services-runtime=\"true\"",
  "data-nexus-internet-service-categories",
  "data-nexus-internet-service-test-actions",
  "data-nexus-standard-user-online-capability-summary",
  "data-nexus-internet-receipts-audit-preview",
  "Test live knowledge",
  "Test maps/routing",
  "Test weather/heat risk",
  "Test translation",
  "Test communications readiness",
  "Test telehealth readiness",
  "Test payment readiness",
  "Test LMS readiness",
  "Test drone readiness",
  "Test shipment tracking readiness",
  "Test media search/embed readiness"
].forEach(token => includes(app, token, `frontend should include ${token}`));

[
  ".nexus-full-internet-services-runtime",
  ".nexus-internet-services-grid",
  ".nexus-internet-service-actions"
].forEach(token => includes(styles, token, `styles should include ${token}`));

[
  "physician reviewed automatically",
  "pharmacy request sent automatically",
  "mobile clinic dispatched automatically",
  "payment processed automatically",
  "employer contacted automatically",
  "learner enrolled automatically",
  "drone dispatched automatically",
  "shipment live tracked automatically",
  "message sent automatically",
  "diagnosis provided",
  "prescription provided"
].forEach(token => {
  excludes(server, token, `server should not contain false execution claim ${token}`);
  excludes(app, token, `app should not contain false execution claim ${token}`);
});

[
  "sk_live_",
  "SG.",
  "AIza",
  "password=",
  "TWILIO_AUTH_TOKEN:",
  "STRIPE_SECRET_KEY:",
  "SMTP_PASS:"
].forEach(token => {
  excludes(server, token, `server should not expose secret-like token ${token}`);
  excludes(app, token, `app should not expose secret-like token ${token}`);
});

assert.strictEqual(
  pkg.scripts["qa:nexus-full-internet-services-activation"],
  "node scripts/nexus-full-internet-services-activation-qa.js",
  "package script should expose full internet services activation QA"
);
includes(qaSuite, "scripts/nexus-full-internet-services-activation-qa.js", "qa suite should include full internet services activation QA");

[
  "Nexus Full Internet Services Activation Runtime",
  "Internet Service Categories",
  "Adapter Architecture",
  "Live Execution Gate",
  "Ask Nexus Agentic Routing",
  "Receipts And Audit",
  "Remaining Limitations"
].forEach(token => includes(doc, token, `doc should include ${token}`));

const tmpDb = path.join(root, `tmp-full-internet-services-${Date.now()}.json`);
const port = 5100 + Math.floor(Math.random() * 300);

function request(method, route, body) {
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
      res.on("data", chunk => { data += chunk; });
      res.on("end", () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data || "{}") });
        } catch (error) {
          reject(new Error(`Invalid JSON from ${route}: ${data}`));
        }
      });
    });
    req.on("error", reject);
    if (payload) req.write(payload);
    req.end();
  });
}

function waitForServer(child) {
  return new Promise((resolve, reject) => {
    const started = Date.now();
    const timer = setInterval(async () => {
      if (child.exitCode !== null) {
        clearInterval(timer);
        reject(new Error(`server exited early with ${child.exitCode}`));
        return;
      }
      try {
        const res = await request("GET", "/api/health");
        if (res.status === 200 && res.body.ok) {
          clearInterval(timer);
          resolve();
        }
      } catch (error) {
        if (Date.now() - started > 15000) {
          clearInterval(timer);
          reject(error);
        }
      }
    }, 250);
  });
}

async function runRuntimeQa() {
  const child = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tmpDb,
      NEXUS_LIVE_KNOWLEDGE_ENABLED: "false",
      NEXUS_MESSAGES_ENABLED: "false",
      NEXUS_WHATSAPP_ENABLED: "false",
      NEXUS_CALLS_ENABLED: "false",
      NEXUS_MARKETPLACE_PAYMENTS_ENABLED: "false"
    },
    stdio: ["ignore", "pipe", "pipe"]
  });
  let output = "";
  child.stdout.on("data", chunk => { output += chunk.toString(); });
  child.stderr.on("data", chunk => { output += chunk.toString(); });
  try {
    await waitForServer(child);

    const services = await request("GET", "/api/nexus/internet-services");
    assert.strictEqual(services.status, 200, "internet services endpoint should respond");
    assert.strictEqual(services.body.ok, true, "internet services endpoint should be ok");
    assert(services.body.categories.includes("AI / Live Knowledge / Search"), "AI/search category should be present");
    assert(services.body.categories.includes("Healthcare Support"), "healthcare support category should be present");
    assert(services.body.categories.includes("Drone / Imagery / Storage"), "drone/storage category should be present");
    assert(services.body.summary.total >= 60, "registry should include broad provider coverage");
    assert(services.body.summary.publicAvailable >= 6, "safe public/local fallback lanes should be available");
    assert(!JSON.stringify(services.body).includes("secret-value"), "status response should not expose secret values");

    const publicTest = await request("POST", "/api/nexus/internet-services/test", { laneId: "wikipedia-wikidata-fallback", command: "public knowledge test" });
    assert.strictEqual(publicTest.status, 200, "public service test should respond");
    assert.strictEqual(publicTest.body.ok, true, "public service test should be ok");
    assert(["internet_result_returned", "local_prepared", "available_public"].includes(publicTest.body.gateStatus || publicTest.body.lane.status), "public service should not be blocked");
    assert(publicTest.body.receipt.receiptId, "public service test should create receipt");

    const smsPrepare = await request("POST", "/api/nexus/internet-services/prepare", { laneId: "twilio-sms-provider", command: "prepare an SMS" });
    assert.strictEqual(smsPrepare.status, 200, "SMS prepare should respond");
    assert.strictEqual(smsPrepare.body.ok, true, "SMS prepare should be ok");
    assert(["blocked_missing_credentials", "consent_required", "confirmation_required", "local_prepared"].includes(smsPrepare.body.gate.gateStatus), "SMS should be gated or credential-blocked");
    assert(smsPrepare.body.receipt.whatDidNotHappen.join(" ").includes("did not expose secrets"), "SMS receipt should preserve secret boundary");

    const search = await request("POST", "/api/nexus/internet-services/search", { query: "climate-smart agriculture Africa", laneId: "tavily-live-search" });
    assert.strictEqual(search.status, 200, "search endpoint should respond");
    assert.strictEqual(search.body.ok, true, "search endpoint should be ok");
    assert.notStrictEqual(search.body.gateStatus, "live_executed", "unconfigured search should not claim live execution");
    assert(search.body.receipt.receiptId, "search should create receipt");
    assert.strictEqual(search.body.noExecutionAuthorized, true, "search should not authorize downstream execution");

    const ask = await request("POST", "/api/nexus/intelligence/ask", { question: "Nexus, what internet services are active?" });
    assert.strictEqual(ask.status, 200, "Ask Nexus internet status should respond");
    assert.strictEqual(ask.body.ok, true, "Ask Nexus internet status should be ok");
    assert.strictEqual(ask.body.intelligence.router, "nexus-full-internet-services-activation-runtime", "Ask Nexus should route to internet activation runtime");
    assert(ask.body.result.preparedCards[0].receiptId, "Ask Nexus internet route should include receipt");

    const liveStatus = await request("GET", "/api/nexus/live-execution-status");
    assert.strictEqual(liveStatus.status, 200, "live execution status should respond");
    assert(liveStatus.body.internetServices, "live execution status should include internet services");
    assert(Array.isArray(liveStatus.body.internetServiceAdapters), "live execution status should include internet service adapters");

    const receipts = await request("GET", "/api/nexus/operation-receipts");
    assert.strictEqual(receipts.status, 200, "receipts endpoint should respond");
    assert(receipts.body.receipts.some(item => item.serviceLaneId), "internet service receipts should be visible");

    const audit = await request("GET", "/api/nexus/audit-log");
    assert.strictEqual(audit.status, 200, "audit endpoint should respond");
    assert(audit.body.audit.some(item => item.entityType === "internet-service"), "internet service audit should be visible");
  } finally {
    child.kill();
    if (fs.existsSync(tmpDb)) fs.unlinkSync(tmpDb);
  }
  assert(!/UnhandledPromiseRejection|EADDRINUSE|SyntaxError/.test(output), output);
}

runRuntimeQa()
  .then(() => {
    console.log("nexus-full-internet-services-activation QA passed");
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
