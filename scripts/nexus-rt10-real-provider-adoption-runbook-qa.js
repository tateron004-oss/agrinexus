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

function runRt10RealProviderAdoptionRunbookQa() {
  const docName = "NEXUS_RT10_REAL_PROVIDER_ADOPTION_RUNBOOK.md";
  const qaName = "nexus-rt10-real-provider-adoption-runbook-qa.js";
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
    ["docs", "NEXUS_RT4_PROVIDER_SPECIFIC_LIVE_ADOPTION_HARNESSES.md"],
    ["docs", "NEXUS_RT7_SOURCE_TRUST_CITATION_FRESHNESS_POLICY.md"],
    ["docs", "NEXUS_RT8_LIVE_SOURCE_RETRIEVAL_AUDIT_LOGGING_CONTRACT.md"],
    ["docs", "NEXUS_RT9_STANDARD_USER_LIVE_SOURCE_BROWSER_VALIDATION_PLAN.md"]
  ].forEach(parts => assert(exists(...parts), `${parts.join("/")} must exist for RT10.`));

  [
    "Provider Adoption Sequence",
    "Required Pre-Adoption Gates",
    "credential gate present",
    "provider capability registry entry present",
    "read-only source result contract satisfied",
    "provider adoption harness scenario coverage present",
    "assistant dialogue preview remains default-off",
    "Standard User preview gate remains default-off",
    "source trust and freshness assessment present",
    "audit logging contract present",
    "browser validation plan present",
    "Credentials must come from environment variables only",
    "Missing credentials must produce safe skipped/missing-config behavior",
    "provider-error",
    "Standard User runtime activation",
    "safe unavailable/provider-error state"
  ].forEach(term => assert(doc.includes(term), `RT10 doc must include ${term}.`));

  [
    "Weather",
    "Agriculture context",
    "News/security/conflict",
    "Job search",
    "Shipment tracking",
    "Music/media"
  ].forEach(term => assert(doc.includes(term), `RT10 provider lane notes must include ${term}.`));

  [
    "call, message, submit, buy, pay, schedule, dispatch, diagnose, prescribe, share location, open camera, open microphone",
    "must not use browser geolocation",
    "must not stream paid media",
    "must not submit applications",
    "must not log into accounts",
    "must not fall back into execution"
  ].forEach(term => assert(doc.includes(term), `RT10 safety boundary must include ${term}.`));

  [
    "nexus-live-provider-adoption-harness",
    "nexus-standard-user-live-source-preview-gate",
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
  ].forEach(term => assert(!qaSource.includes(term), `RT10 QA must not include runtime side effect API: ${term}`));

  assert.equal(
    pkg.scripts["qa:nexus-rt10-real-provider-adoption-runbook"],
    "node scripts/nexus-rt10-real-provider-adoption-runbook-qa.js",
    "RT10 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-rt10-real-provider-adoption-runbook-qa.js"), "RT10 QA must be in safe suites.");

  console.log("[nexus-rt10-real-provider-adoption-runbook-qa] passed");
}

if (require.main === module) {
  try {
    runRt10RealProviderAdoptionRunbookQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runRt10RealProviderAdoptionRunbookQa
});
