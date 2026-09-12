const fs = require("fs");
const path = require("path");
const auditModule = require("../public/nexus-internet-services-integration-audit.js");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");
const fail = message => {
  throw new Error(message);
};
const assert = (condition, message) => {
  if (!condition) fail(message);
};
const contains = (text, pattern, label) => {
  assert(pattern.test(text), `${label} missing`);
};

const app = read("public/app.js");
const server = read("server.js");
const index = read("public/index.html");
const styles = read("public/styles.css");
const pkg = JSON.parse(read("package.json"));
const suite = read("scripts/qa-suite.js");
const doc = read("docs/NEXUS_INTERNET_SERVICES_INTEGRATION_AUDIT.md");
const moduleSource = read("public/nexus-internet-services-integration-audit.js");

const requiredModes = [
  "ask-nexus-command-center",
  "provider-activation-connect-everything",
  "live-knowledge-source-search",
  "agriculture-food-security",
  "weather-heat-risk",
  "maps-routing-trade-routes",
  "shipment-logistics",
  "marketplace-trade",
  "payments-transactions",
  "communications",
  "media-music-youtube",
  "translation-language",
  "learning-training-lms",
  "workforce-applicant-employer",
  "drone-field-operations",
  "storage-imagery-files",
  "healthcare-intake",
  "chronic-care-dm-htn-obesity",
  "rpm-rtm",
  "telehealth-video",
  "pharmacy",
  "mobile-clinic",
  "activity-receipts-audit",
  "demo-sandbox-mode",
  "render-credential-setup"
];

const audit = auditModule.buildNexusInternetIntegrationAudit({ demoDataLoaded: true });

assert(audit.ok === true, "audit should return ok true");
assert(audit.schemaVersion === "nexus.internetServicesIntegrationAudit.v1", "schema version missing");
assert(audit.modes.length >= requiredModes.length, "not enough modes audited");
for (const modeId of requiredModes) {
  const mode = audit.modes.find(item => item.modeId === modeId);
  assert(mode, `required mode missing: ${modeId}`);
  assert(mode.label && mode.category && mode.miniAppGroup, `mode metadata incomplete: ${modeId}`);
  assert(mode.providerLanes.length || mode.localFallbackActions.length || mode.blockedActions.length, `mode lacks provider/fallback/block mapping: ${modeId}`);
  assert(mode.uiStatusBadges.length, `mode lacks UI status badge language: ${modeId}`);
  assert(mode.askNexusCommands.length, `mode lacks Ask Nexus route: ${modeId}`);
  assert(mode.receiptTypes.length || mode.auditEventTypes.length || mode.blockedActions.length, `mode lacks receipt/audit/no-action reason: ${modeId}`);
  assert(audit.statuses.includes(mode.status), `unknown status for ${modeId}: ${mode.status}`);
}

const highRiskModes = audit.modes.filter(mode => mode.riskLevel === "high");
assert(highRiskModes.length >= 8, "expected high-risk mode coverage");
for (const mode of highRiskModes) {
  assert(mode.confirmationRequiredActions.length || mode.blockedActions.length, `high-risk mode lacks gate/blocking: ${mode.modeId}`);
}

for (const term of [
  "payment",
  "pharmacy",
  "mobile clinic",
  "drone",
  "employer",
  "lms enrollment",
  "shipment live tracking",
  "communication delivery",
  "provider handoff"
]) {
  assert(moduleSource.toLowerCase().includes(term), `live execution gate term missing: ${term}`);
}

contains(server, /nexusInternetIntegrationAudit/, "server audit module import/use");
for (const route of [
  "/api/nexus/internet-integration-audit",
  "/api/nexus/internet-integration-audit/summary",
  "/api/nexus/internet-integration-audit/modes",
  "/api/nexus/internet-integration-audit/gaps"
]) {
  assert(server.includes(route), `server route missing: ${route}`);
}

contains(index, /nexus-internet-services-integration-audit\.js/, "index audit script");
contains(app, /renderNexusInternetServicesIntegrationAuditPanel/, "UI audit panel renderer");
contains(app, /data-nexus-internet-integration-audit="true"/, "UI audit panel contract");
contains(app, /data-nexus-internet-audit-summary-cards="true"/, "summary cards contract");
contains(app, /data-nexus-internet-audit-mode-cards="true"/, "mode cards contract");
contains(app, /data-nexus-internet-audit-filter=/, "filter controls contract");
contains(app, /data-nexus-internet-audit-copy-report/, "copy report contract");
contains(app, /Internet Services Integration Audit/, "UI audit title");
contains(app, /integration status is not execution authority/i, "truthful execution boundary copy");
contains(app, /internet services integration audit|internet integration audit/i, "Ask Nexus audit route");
contains(styles, /nexus-internet-integration-audit/, "audit styles");
contains(styles, /nexus-internet-audit-grid article\[hidden\][\s\S]*display:\s*none\s*!important/i, "audit filter hidden-card style");

assert(pkg.scripts["qa:nexus-internet-services-integration-audit"] === "node scripts/nexus-internet-services-integration-audit-qa.js", "package alias missing");
assert(suite.includes("scripts/nexus-internet-services-integration-audit-qa.js"), "qa-suite wiring missing");

contains(doc, /Mode Inventory/, "doc mode inventory");
contains(doc, /Status Definitions/, "doc status definitions");
contains(doc, /secret values are never/i, "doc secret safety");
contains(doc, /does not enable live execution/i, "doc no-execution boundary");

const appAuditSlice = app.slice(
  app.indexOf("function renderNexusInternetAuditStatusBadge"),
  app.indexOf("const NEXUS_GLOBAL_READINESS_TAGS")
) + app.slice(
  app.indexOf("internet services integration audit|internet integration audit"),
  app.indexOf("if (isNexusPersistentOperationsCommand")
);
const serverAuditSlice = server.slice(
  server.indexOf("/api/nexus/internet-integration-audit"),
  server.indexOf("if (url.pathname === \"/api/nexus/internet-services\"")
);
const combined = `${moduleSource}\n${appAuditSlice}\n${serverAuditSlice}\n${doc}`;
for (const unsafeClaim of [
  "doctor reviewed",
  "pharmacy sent",
  "mobile clinic dispatched",
  "drone dispatched",
  "payment processed",
  "employer contacted",
  "lms enrollment created",
  "shipment live-tracked",
  "message sent successfully",
  "video visit created"
]) {
  assert(!combined.toLowerCase().includes(unsafeClaim), `unsafe fake execution claim found: ${unsafeClaim}`);
}

for (const secretPattern of [
  /sk_live_[A-Za-z0-9]+/,
  /SG\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/,
  /AC[a-f0-9]{32}/i,
  /xox[baprs]-[A-Za-z0-9-]+/
]) {
  assert(!secretPattern.test(combined), "secret-like value exposed");
}

assert(audit.summary.totalModes >= 25, "summary totalModes incomplete");
assert(audit.summary.missingCredentials >= 1, "missing credential categories should be represented");
assert(audit.summary.vendorRequired >= 1, "vendor required categories should be represented");
assert(audit.summary.blockedForSafety >= 1, "blocked for safety categories should be represented");
assert(audit.safety.noSecretValues === true, "audit must declare no secret values");
assert(audit.safety.noLiveExecutionEnabledByAudit === true, "audit must not enable execution");

console.log("Nexus internet services integration audit QA passed.");
