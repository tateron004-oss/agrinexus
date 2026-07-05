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
const doc = read("docs/NEXUS_ALL_MODES_ACTIVATION_RUNTIME.md");

function includes(haystack, needle, message) {
  assert(haystack.includes(needle), message || `Expected ${needle}`);
}

function excludes(haystack, needle, message) {
  assert(!haystack.toLowerCase().includes(needle.toLowerCase()), message || `Did not expect ${needle}`);
}

[
  "NEXUS_ALL_MODES_ACTIVATION_REGISTRY",
  "NEXUS_LIVE_EXECUTION_GATE_STATUSES",
  "nexusActivationRegistrySnapshot",
  "evaluateNexusLiveExecutionGate",
  "nexusProviderAdapters",
  "buildNexusAgentActivationPlan",
  "/api/nexus/activation-matrix",
  "/api/nexus/live-execution-status",
  "/api/nexus/provider/test",
  "/api/nexus/live-execution/prepare",
  "/api/nexus/live-execution/confirm",
  "/api/nexus/live-execution/cancel",
  "/api/nexus/records/lifecycle",
  "/api/nexus/operation-receipts",
  "/api/nexus/audit-log"
].forEach(token => includes(server, token, `server should include ${token}`));

[
  "Foundation",
  "Communications",
  "Live Knowledge / AI Search",
  "Healthcare",
  "Marketplace / Trade",
  "Agriculture",
  "Maps / Logistics / Shipment",
  "Workforce / Career / Hiring",
  "Learning / Training / LMS",
  "Drone Support",
  "Media / Music",
  "Admin / Provider / Vendor Operations"
].forEach(category => {
  includes(server, category, `server registry should include ${category}`);
  includes(app, category, `app runtime UI should include ${category}`);
});

[
  'label: "Drone Operations"',
  'label: "Media & Music"'
].forEach(token => excludes(app, token, `app runtime UI should not use stale category label ${token}`));

[
  "diagnosis",
  "prescribing",
  "unapproved message send",
  "unapproved call handoff",
  "payment completion claim without provider receipt",
  "dispatch claim without receipt",
  "fake enrollment",
  "fake certificate",
  "fake provider acceptance",
  "fake citations"
].forEach(token => includes(server, token, `safety boundary should include ${token}`));

[
  "data-nexus-all-modes-activation-runtime=\"true\"",
  "data-nexus-live-execution-gate-statuses=\"true\"",
  "data-nexus-all-modes-activation-categories=\"true\"",
  "data-nexus-standard-user-activation-summary=\"true\"",
  "data-nexus-runtime-receipt-audit-preview=\"true\"",
  "data-no-secret-values=\"true\"",
  "data-live-execution-gated=\"true\"",
  "renderNexusAllModesActivationRuntime()"
].forEach(token => includes(app, token, `app should render ${token}`));

[
  ".nexus-all-modes-activation-runtime",
  ".nexus-all-modes-runtime-grid",
  ".nexus-standard-user-activation-summary"
].forEach(token => includes(styles, token, `styles should include ${token}`));

[
  "password=",
  "TWILIO_AUTH_TOKEN:",
  "STRIPE_SECRET_KEY:",
  "TAVILY_API_KEY:",
  "BRAVE_SEARCH_API_KEY:",
  "EXA_API_KEY:",
  "silent execution allowed",
  "provider accepted automatically",
  "doctor reviewed automatically",
  "payment processed automatically",
  "drone dispatched automatically",
  "message sent automatically"
].forEach(token => {
  excludes(server, token, `server should not expose unsafe token ${token}`);
  excludes(app, token, `app should not expose unsafe token ${token}`);
});

assert.strictEqual(
  pkg.scripts["qa:nexus-all-modes-activation-runtime"],
  "node scripts/nexus-all-modes-activation-runtime-qa.js",
  "package script should expose all-modes activation runtime QA"
);
includes(qaSuite, "scripts/nexus-all-modes-activation-runtime-qa.js", "qa suite should include all-modes activation runtime QA");

[
  "Nexus All-Modes Activation Runtime",
  "Activation Registry Structure",
  "Live Execution Gate",
  "AI Agent Routing Behavior",
  "Memory And Lifecycle Behavior",
  "Receipt And Audit Structure",
  "Remaining Limitations"
].forEach(token => includes(doc, token, `doc should include ${token}`));

const tmpDb = path.join(root, `tmp-all-modes-activation-${Date.now()}.json`);
const port = 4500 + Math.floor(Math.random() * 500);

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

(async () => {
  const child = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tmpDb,
      NEXUS_MESSAGES_ENABLED: "",
      TWILIO_ACCOUNT_SID: "",
      TWILIO_AUTH_TOKEN: "",
      TWILIO_FROM_NUMBER: "",
      STRIPE_SECRET_KEY: "",
      DJI_API_KEY: "",
      MOODLE_TOKEN: ""
    },
    stdio: ["ignore", "pipe", "pipe"]
  });
  let stderr = "";
  child.stderr.on("data", chunk => { stderr += chunk.toString(); });

  try {
    await waitForServer(child);

    const matrix = await request("GET", "/api/nexus/activation-matrix");
    assert.strictEqual(matrix.status, 200, "activation matrix should respond");
    assert(matrix.body.ok, "activation matrix should be ok");
    assert(matrix.body.entries.length >= 12, "activation matrix should include all major categories");
    assert(matrix.body.summary.credentialGated >= 1, "activation matrix should report credential gates");
    assert(matrix.body.standardUserSummary.some(item => /Live provider execution requires/.test(item)), "standard user summary should explain live execution gates");
    assert(matrix.body.entries.every(entry => !Object.values(entry).join(" ").includes("secret-value")), "matrix should not expose secret values");

    const status = await request("GET", "/api/nexus/live-execution-status");
    assert.strictEqual(status.status, 200, "live execution status should respond");
    assert(status.body.adapters.some(adapter => adapter.id === "sms"), "status should include SMS adapter");
    assert(status.body.adapters.some(adapter => adapter.id === "drone-dispatch"), "status should include drone adapter");
    assert(status.body.noSilentExecution, "status should preserve no-silent-execution posture");

    const smsPrepare = await request("POST", "/api/nexus/live-execution/prepare", {
      command: "Nexus, prepare an SMS.",
      actionId: "prepare_sms",
      mode: "communications"
    });
    assert.strictEqual(smsPrepare.status, 200, "prepare should respond");
    assert.strictEqual(smsPrepare.body.gate.gateStatus, "blocked_missing_credentials", "missing SMS credentials should block live execution");
    assert(smsPrepare.body.gate.missingCredentials.includes("TWILIO_ACCOUNT_SID"), "SMS gate should report missing env names only");
    assert(smsPrepare.body.receipt.noExecutionAuthorized, "prepare should create no-execution receipt");

    const pharmacyConfirm = await request("POST", "/api/nexus/live-execution/confirm", {
      actionId: "create_pharmacy_referral",
      mode: "pharmacy",
      confirmed: true
    });
    assert.strictEqual(pharmacyConfirm.status, 200, "confirm should respond");
    assert(["blocked_missing_credentials", "consent_required"].includes(pharmacyConfirm.body.gate.gateStatus), "pharmacy should remain gated");
    assert(pharmacyConfirm.body.gate.noExecutionAuthorized, "pharmacy should not execute live without full gate");

    const providerTest = await request("POST", "/api/nexus/provider/test", { adapterId: "lms-enrollment" });
    assert.strictEqual(providerTest.status, 200, "provider test should respond");
    assert.strictEqual(providerTest.body.status, "provider_test_failed", "missing LMS credentials should fail safely");
    assert(providerTest.body.missingEnv.includes("MOODLE_TOKEN"), "provider test should show missing env name");

    const lifecycle = await request("POST", "/api/nexus/records/lifecycle", {
      entityType: "patient",
      entityId: "test-patient",
      status: "deceased",
      reason: "QA lifecycle safety check"
    });
    assert.strictEqual(lifecycle.status, 200, "lifecycle route should respond");
    assert.strictEqual(lifecycle.body.record.lifecycleStatus, "deceased", "lifecycle should store deceased state");
    assert(lifecycle.body.receipt.didNot.some(item => /provider sync/i.test(item)), "lifecycle receipt should avoid live sync claim");

    const cancel = await request("POST", "/api/nexus/live-execution/cancel", { actionId: "drone_dispatch" });
    assert.strictEqual(cancel.status, 200, "cancel should respond");
    assert.strictEqual(cancel.body.gateStatus, "cancelled", "cancel should return cancelled");

    const receipts = await request("GET", "/api/nexus/operation-receipts");
    const audit = await request("GET", "/api/nexus/audit-log");
    assert(receipts.body.receipts.length >= 4, "receipts should be visible");
    assert(audit.body.audit.length >= 4, "audit entries should be visible");
    assert(!/secret-value|auth token value|password value|sk_live_|SG\.[A-Za-z0-9_-]+/i.test(JSON.stringify(receipts.body)), "receipts should not expose secret values");
    assert(!/secret-value|auth token value|password value|sk_live_|SG\.[A-Za-z0-9_-]+/i.test(JSON.stringify(audit.body)), "audit should not expose secret values");
  } finally {
    child.kill();
    if (fs.existsSync(tmpDb)) fs.rmSync(tmpDb, { force: true });
  }

  assert(!/secret-value|auth token value|password value/i.test(stderr), "server stderr should not expose secrets");
  console.log("nexus-all-modes-activation-runtime QA passed");
})().catch(error => {
  if (fs.existsSync(tmpDb)) fs.rmSync(tmpDb, { force: true });
  console.error(error);
  process.exit(1);
});
