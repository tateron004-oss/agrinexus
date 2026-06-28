const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function runRt11RealTimeLaneCloseoutQa() {
  const docName = "NEXUS_RT11_REAL_TIME_LANE_CLOSEOUT.md";
  const qaName = "nexus-rt11-real-time-lane-closeout-qa.js";
  const doc = read("docs", docName);
  const qaSource = read("scripts", qaName);
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    ["docs", docName],
    ["scripts", qaName],
    ["scripts", "nexus-rt1-weather-provider-credential-completion-qa.js"],
    ["scripts", "nexus-rt2-live-provider-capability-registry-qa.js"],
    ["scripts", "nexus-rt3-unified-live-source-orchestrator-qa.js"],
    ["scripts", "nexus-rt4-provider-specific-live-adoption-harnesses-qa.js"],
    ["scripts", "nexus-rt5-assistant-dialogue-live-source-orchestrator-preview-qa.js"],
    ["scripts", "nexus-rt6-standard-user-controlled-read-only-preview-gate-qa.js"],
    ["scripts", "nexus-rt7-source-trust-citation-freshness-policy-qa.js"],
    ["scripts", "nexus-rt8-live-source-retrieval-audit-logging-contract-qa.js"],
    ["scripts", "nexus-rt9-standard-user-live-source-browser-validation-plan-qa.js"],
    ["scripts", "nexus-rt10-real-provider-adoption-runbook-qa.js"]
  ].forEach(parts => assert(exists(...parts), `${parts.join("/")} must exist for RT11 closeout.`));

  [
    "RT1",
    "RT2",
    "RT3",
    "RT4",
    "RT5",
    "RT6",
    "RT7",
    "RT8",
    "RT9",
    "RT10",
    "RT11",
    "Active Runtime State",
    "Inert Capabilities Now Available",
    "No-Execution Guarantees",
    "Recommended First Runtime Activation Candidate",
    "Source-backed agriculture support response cards",
    "not production live-provider activation"
  ].forEach(term => assert(doc.includes(term), `RT11 closeout doc must include ${term}.`));

  [
    "provider contact",
    "calls, messages, WhatsApp, Telegram, SMS, or email",
    "payments, purchases, checkout, or marketplace transactions",
    "appointment booking or scheduling",
    "telehealth session creation",
    "medical, pharmacy, prescription, diagnosis, or refill execution",
    "emergency dispatch",
    "transportation dispatch",
    "browser geolocation, location sharing, camera, or microphone activation",
    "backend writes, storage writes, or pending real-world actions"
  ].forEach(term => assert(doc.includes(term), `RT11 no-execution guarantee must include ${term}.`));

  [
    "nexus-live-provider-adoption-harness",
    "nexus-standard-user-live-source-preview-gate",
    "nexus-live-source-trust-freshness-policy",
    "nexus-live-source-audit-logging-contract",
    "nexus-live-source-orchestrator"
  ].forEach(moduleName => {
    assert(!app.includes(moduleName), `public/app.js must not load ${moduleName}.`);
    assert(!index.includes(moduleName), `public/index.html must not load ${moduleName}.`);
    assert(!server.includes(moduleName), `server.js must not load ${moduleName}.`);
  });

  [
    "fetch" + "(",
    "XML" + "HttpRequest",
    "http." + "request",
    "https." + "request",
    "write" + "File",
    "append" + "File",
    "local" + "Storage",
    "session" + "Storage",
    "db" + ".json",
    "window." + "open",
    "location." + "href",
    "navigator." + "geolocation",
    "media" + "Devices",
    "document" + ".",
    "add" + "EventListener"
  ].forEach(term => assert(!qaSource.includes(term), `RT11 QA must not include runtime side effect API: ${term}`));

  assert.equal(
    pkg.scripts["qa:nexus-rt11-real-time-lane-closeout"],
    "node scripts/nexus-rt11-real-time-lane-closeout-qa.js",
    "RT11 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-rt11-real-time-lane-closeout-qa.js"), "RT11 QA must be in safe suites.");

  console.log("[nexus-rt11-real-time-lane-closeout-qa] passed");
}

if (require.main === module) {
  try {
    runRt11RealTimeLaneCloseoutQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runRt11RealTimeLaneCloseoutQa
});
