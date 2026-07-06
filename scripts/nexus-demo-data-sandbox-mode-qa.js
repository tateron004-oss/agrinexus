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
const doc = read("docs", "NEXUS_DEMO_DATA_SANDBOX_MODE.md");
const demoAppSlice = app.slice(
  app.indexOf("const NEXUS_DEMO_DATA_STORAGE_KEY"),
  app.indexOf("const NEXUS_UX_ROLES")
) + app.slice(
  app.indexOf("function renderNexusDemoSandboxControls"),
  app.indexOf("function nexusFormDataForWorkflow")
);

function includes(source, needle, label) {
  assert(source.includes(needle), `${label} must include ${needle}`);
}

function rejects(source, pattern, label) {
  assert(!pattern.test(source), `${label} contains unsafe pattern ${pattern}`);
}

[
  "NEXUS_DEMO_DATA_STORAGE_KEY",
  "buildNexusDemoDataset",
  "seedNexusDemoData",
  "resetNexusDemoData",
  "getNexusDemoSummary",
  "recordSource: \"demo\"",
  "demoLabel: \"Demo / Sandbox\"",
  "externalExecution: false",
  "Demo record only. No real external action occurred."
].forEach(term => includes(app, term, "demo dataset contract"));

[
  "Load Demo Data",
  "Reset Demo Data",
  "Show Demo Records",
  "Hide Demo Records",
  "data-nexus-demo-action=\"load\"",
  "data-nexus-demo-action=\"reset\"",
  "data-nexus-demo-status-chip=\"true\"",
  "Demo records are for testing only. Nexus did not contact providers, employers, buyers, sellers, clinics, pharmacies, drone vendors, payment processors, or shipment carriers.",
  "Reset Demo Data removes sandbox records only. Real records and credentials are not changed."
].forEach(term => includes(app, term, "demo controls"));

[
  "health",
  "agriculture",
  "marketplace",
  "logistics",
  "workforce",
  "learning",
  "drone",
  "communications",
  "providerActivation",
  "Amina Demo",
  "Joseph Test Case",
  "Rural Clinic Demo User",
  "Demo Patient A"
].forEach(term => includes(app, term, "demo data coverage"));

[
  "Educational/demo only. Not a diagnosis. No provider reviewed this. Nothing was sent externally.",
  "No pharmacy received this.",
  "No payment workflow ran, no seller outreach occurred, no order placed.",
  "No carrier was booked or live-tracked.",
  "No employer was contacted.",
  "No LMS course enrollment was created.",
  "No drone was dispatched and no flight occurred.",
  "Email draft only. Nothing sent.",
  "Example missing env names only: TAVILY_API_KEY, MAPBOX_ACCESS_TOKEN, SENDGRID_API_KEY."
].forEach(term => includes(app, term, "safety copy"));

[
  "Patient care preparation mission",
  "Crop/weather risk mission",
  "Buyer/seller transaction mission",
  "Shipment tracking mission",
  "Applicant job support mission",
  "Learner training referral mission",
  "Drone mission planning mission",
  "Provider readiness mission",
  "Communication preparation mission",
  "goal",
  "collected",
  "missing",
  "nextStep",
  "readiness",
  "receipt"
].forEach(term => includes(app, term, "demo mission coverage"));

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
].forEach(term => includes(app, term, "demo receipts/audit"));

[
  "nexus-demo-sandbox-controls",
  "nexus-demo-badge",
  "nexus-demo-count",
  "nexus-demo-records-panel",
  "nexus-demo-record-grid",
  "nexus-low-bandwidth-mode",
  "@media (max-width: 760px)"
].forEach(term => includes(styles, term, "demo UI styling"));

[
  "/api/nexus/demo-data/status",
  "/api/nexus/demo-data/load",
  "/api/nexus/demo-data/reset",
  "/api/nexus/demo-data/summary",
  "nexusDemoDataSandboxStatus",
  "nexusDemoDataSandboxSummary",
  "secretValuesExposed: false",
  "No backend records, credentials, providers, or external systems were changed."
].forEach(term => includes(server, term, "demo API"));

[
  "NEXUS_DEMO_DATA_ENABLED=true",
  "NEXUS_DEMO_DATA_AUTOLOAD=false",
  "NEXUS_DEMO_DATA_ALLOW_RESET=true"
].forEach(term => includes(envExample, term, "demo env example"));

[
  "What It Does",
  "Sections Seeded",
  "Demo Missions",
  "What It Does Not Do",
  "Reset Behavior",
  "Does not diagnose, prescribe, or claim provider review",
  "Does not expose secrets or fake credentials"
].forEach(term => includes(doc, term, "demo docs"));

[
  /doctor reviewed/i,
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
].forEach(pattern => {
  rejects(demoAppSlice, pattern, "demo app fake execution safety");
  rejects(doc, pattern, "doc fake execution safety");
});
rejects(demoAppSlice, /NEXUS_ALLOW_LIVE_EXECUTION=true/, "demo app live execution flag safety");

[
  /sk_live_[A-Za-z0-9]+/,
  /sk_test_[A-Za-z0-9]+/,
  /AIza[0-9A-Za-z_-]+/,
  /AC[a-f0-9]{32}/i,
  /-----BEGIN PRIVATE KEY-----/
].forEach(pattern => {
  rejects(app, pattern, "app secret exposure");
  rejects(server, pattern, "server secret exposure");
  rejects(doc, pattern, "doc secret exposure");
});

assert.strictEqual(
  pkg.scripts["qa:nexus-demo-data-sandbox-mode"],
  "node scripts/nexus-demo-data-sandbox-mode-qa.js",
  "package.json must expose qa:nexus-demo-data-sandbox-mode"
);
includes(qaSuite, "scripts/nexus-demo-data-sandbox-mode-qa.js", "qa-suite wiring");

console.log("Nexus demo data sandbox mode QA passed.");
