const fs = require("fs");
const path = require("path");
const assert = require("assert");

const root = path.resolve(__dirname, "..");
const read = (...parts) => fs.readFileSync(path.join(root, ...parts), "utf8");

const app = read("public", "app.js");
const styles = read("public", "styles.css");
const server = read("server.js");
const envExample = read(".env.example");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

function includes(source, needle, label) {
  assert(source.includes(needle), `${label} must include ${needle}`);
}

function matches(source, pattern, label) {
  assert(pattern.test(source), `${label} missing ${pattern}`);
}

function rejects(source, pattern, label) {
  assert(!pattern.test(source), `${label} contains unsafe pattern ${pattern}`);
}

const demoSlice = app.slice(
  app.indexOf("const NEXUS_DEMO_DATA_STORAGE_KEY"),
  app.indexOf("const NEXUS_UX_ROLES")
) + app.slice(
  app.indexOf("function renderNexusDemoSandboxControls"),
  app.indexOf("function nexusFormDataForWorkflow")
) + app.slice(
  app.indexOf("function renderNexusDemoRecordsPanel"),
  app.indexOf("function renderNexusAgenticMissionWorkspace")
) + app.slice(
  app.indexOf("function renderNexusAgenticMissionWorkspace"),
  app.indexOf("function renderNexusPremiumActivityReceiptsPanel")
) + app.slice(
  app.indexOf("function runNexusStandardUserHomeLocalCommand"),
  app.indexOf("if (isNexusPersistentOperationsCommand")
) + app.slice(
  app.indexOf("function handleNexusDemoSandboxClick"),
  app.indexOf("const auditFilter")
) + app.slice(
  app.indexOf("function bindNexusStandardUserHomeControls"),
  app.indexOf("function bindNexusInternetResourceControls")
);

[
  "Load Demo Data",
  "Reset Demo Data",
  "Show Demo Records",
  "Hide Demo Records",
  "data-nexus-demo-action=\"load\"",
  "data-nexus-demo-action=\"reset\"",
  "data-nexus-demo-action=\"show\"",
  "data-nexus-demo-action=\"hide\"",
  "nexusDemoSandboxAction",
  "handleNexusDemoSandboxClick",
  "nexusDemoSandboxDelegateBound"
].forEach(term => includes(demoSlice, term, "sandbox controls/click handlers"));

[
  "health",
  "agriculture",
  "marketplace",
  "logistics",
  "workforce",
  "learning",
  "drone",
  "communications",
  "providerActivation"
].forEach(section => {
  includes(demoSlice, `[\"${section}\"`, `demo section ${section}`);
});
includes(demoSlice, "data-nexus-demo-record-section=\"${escapeHtml(key)}\"", "templated demo section renderer");

[
  "Patient care preparation mission",
  "Crop/weather risk mission",
  "Buyer/seller transaction mission",
  "Shipment tracking mission",
  "Applicant job support mission",
  "Learner training referral mission",
  "Drone mission planning mission",
  "Provider readiness mission",
  "Communication preparation mission"
].forEach(term => includes(app, term, "all 9 demo missions"));

includes(demoSlice, "missions.map(mission", "all missions render, not a truncated slice");
includes(demoSlice, "data-nexus-demo-mission-open", "mission open click contract");
includes(demoSlice, "openNexusDemoSandboxMission", "mission opener");
includes(demoSlice, "data-nexus-agentic-mission-workspace=\"true\"", "mission workspace");
["collected", "missing", "nextStep", "readiness", "receipt", "No real external action occurred"].forEach(term => {
  includes(demoSlice, term, `mission detail ${term}`);
});

[
  "Local packet prepared",
  "Provider credentials missing",
  "Consent required",
  "Confirmation required",
  "Vendor required",
  "Test-ready provider check",
  "Local fallback created",
  "No external execution",
  "Happened:",
  "Did not happen:",
  "Next step:"
].forEach(term => includes(app, term, "receipt/audit event rendering"));

[
  "load demo data",
  "reset demo data",
  "show demo records",
  "hide demo records",
  "show demo missions"
].forEach(term => {
  const parts = term.split(/\s+/);
  parts.forEach(part => includes(app.toLowerCase(), part, `sandbox command alias term ${term}`));
});
[
  "health",
  "agriculture",
  "marketplace",
  "agritrade",
  "logistics",
  "workforce",
  "learning",
  "drone",
  "communications",
  "provider readiness"
].forEach(term => matches(app.toLowerCase(), new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `sandbox mode command term ${term}`));

[
  "/api/nexus/demo-data/status",
  "/api/nexus/demo-data/summary",
  "/api/nexus/demo-data/load",
  "/api/nexus/demo-data/reset",
  "No backend records, credentials, providers, or external systems were changed.",
  "Real records, credentials, env settings, and provider readiness are not changed.",
  "secretValuesExposed: false"
].forEach(term => includes(server, term, "safe backend sandbox route"));

[
  "NEXUS_DEMO_DATA_ENABLED=true",
  "NEXUS_DEMO_DATA_AUTOLOAD=false",
  "NEXUS_DEMO_DATA_ALLOW_RESET=true",
  "fictional browser-local test records only",
  "never enables live execution"
].forEach(term => includes(envExample, term, "sandbox env flags"));

[
  "nexus-demo-records-panel",
  "nexus-demo-record-grid",
  "nexus-demo-mission-button",
  "nexus-demo-badge",
  "@media (max-width: 760px)",
  "grid-template-columns: 1fr"
].forEach(term => includes(styles, term, "responsive sandbox styles"));

assert.strictEqual(
  pkg.scripts["qa:nexus-sandbox-click-path-mode-audit"],
  "node scripts/nexus-sandbox-click-path-mode-audit-qa.js",
  "package alias missing"
);
includes(qaSuite, "scripts/nexus-sandbox-click-path-mode-audit-qa.js", "qa-suite wiring");

const idMatches = demoSlice.match(/\sid=\"([A-Za-z0-9_-]+)\"/g) || [];
const duplicateLiteralIds = idMatches
  .map(match => match.match(/id=\"([A-Za-z0-9_-]+)\"/)[1])
  .filter((id, index, all) => all.indexOf(id) !== index);
assert(duplicateLiteralIds.length === 0, `duplicate literal ids found: ${duplicateLiteralIds.join(", ")}`);

[
  /provider reviewed this\.(?! Nothing was sent externally)/i,
  /pharmacy sent/i,
  /mobile clinic dispatched/i,
  /drone dispatched/i,
  /payment processed/i,
  /employer contacted(?!\.)/i,
  /LMS enrollment occurred/i,
  /shipment live-tracked/i,
  /sent successfully/i,
  /appointment booked/i,
  /refill approved/i
].forEach(pattern => rejects(demoSlice, pattern, "sandbox fake execution safety"));

[
  /sk_live_[A-Za-z0-9]+/,
  /sk_test_[A-Za-z0-9]+/,
  /AIza[0-9A-Za-z_-]+/,
  /AC[a-f0-9]{32}/i,
  /-----BEGIN PRIVATE KEY-----/
].forEach(pattern => rejects(demoSlice + server, pattern, "sandbox secret exposure"));

console.log("Nexus sandbox click-path mode audit QA passed.");
