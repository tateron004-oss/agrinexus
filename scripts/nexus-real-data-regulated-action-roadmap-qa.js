const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  registry: path.join(root, "public", "nexus-real-data-source-registry.js"),
  doc: path.join(root, "docs", "NEXUS_REAL_DATA_REGULATED_ACTION_ROADMAP.md"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-real-data-regulated-action-roadmap-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const registryModule = require(paths.registry);
const registrySource = read(paths.registry);
const doc = read(paths.doc);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageJson = read(paths.packageJson);
const qaSuite = read(paths.qaSuite);

const registry = registryModule.getRealDataSourceRegistry();
const requiredIds = [
  "provider.directory",
  "telehealth.provider",
  "pharmacy.prescription_refill",
  "mobile_clinic.schedule",
  "transportation.resources",
  "location.sharing",
  "payments.transaction",
  "medical_records.fhir",
  "provider.contact",
  "emergency.dispatch"
];

assert(Array.isArray(registry), "Registry must export an array.");
assert(registry.length === requiredIds.length, "Registry must include every required source/action category exactly once.");

const requiredFields = [
  "id",
  "label",
  "dataOwner",
  "sourceType",
  "publicPartnerRegulatedStatus",
  "integrationMethod",
  "dataFreshness",
  "permissionRequirements",
  "complianceRequirements",
  "actionRiskLevel",
  "liveActionEnabled",
  "userApprovalRequired",
  "approvalGates",
  "auditRequirements",
  "futureImplementationPhase"
];

requiredIds.forEach(id => {
  const entry = registry.find(item => item.id === id);
  assert(entry, `Registry must include ${id}.`);
  requiredFields.forEach(field => {
    assert(Object.prototype.hasOwnProperty.call(entry, field), `${id} must include ${field}.`);
  });
  assert(registryModule.SOURCE_TYPES.includes(entry.sourceType), `${id} must use a known sourceType.`);
  assert(registryModule.STATUS_TYPES.includes(entry.publicPartnerRegulatedStatus), `${id} must use a known public/partner/regulated status.`);
  assert(registryModule.RISK_LEVELS.includes(entry.actionRiskLevel), `${id} must use a known action risk level.`);
  assert(entry.liveActionEnabled === false, `${id} must not enable live action in Phase 17.`);
  assert(entry.userApprovalRequired === true, `${id} must require user approval before future action.`);
  assert(Array.isArray(entry.permissionRequirements) && entry.permissionRequirements.length > 0, `${id} must document permission requirements.`);
  assert(Array.isArray(entry.complianceRequirements) && entry.complianceRequirements.length > 0, `${id} must document compliance requirements.`);
  assert(Array.isArray(entry.approvalGates) && entry.approvalGates.length > 0, `${id} must document approval gates.`);
  assert(Array.isArray(entry.auditRequirements) && entry.auditRequirements.length > 0, `${id} must document audit requirements.`);
  assert(/^17[A-K]-/.test(entry.futureImplementationPhase), `${id} must map to a future Phase 17 implementation phase.`);
  ["expectedUpdateCadence", "freshnessField", "staleAfter", "displayRequirement"].forEach(field => {
    assert(entry.dataFreshness && entry.dataFreshness[field], `${id} must include dataFreshness.${field}.`);
  });
});

[
  "public source-backed data",
  "partner-provided operational data",
  "live API integrations",
  "regulated patient/medical data",
  "approved high-risk actions",
  "provider directory data",
  "telehealth provider data",
  "pharmacy data and prescription/refill workflows",
  "mobile clinic schedules",
  "transportation resources",
  "location sharing",
  "payments",
  "medical records/FHIR",
  "provider contact",
  "emergency dispatch",
  "Phase 17 does not implement live regulated actions",
  "No raw prompt may call an adapter directly",
  "Audit logging must not itself trigger execution"
].forEach(phrase => {
  assert(doc.toLowerCase().includes(phrase.toLowerCase()), `Roadmap doc must include: ${phrase}`);
});

requiredFields.forEach(field => {
  assert(doc.includes(field), `Roadmap doc must document field ${field}.`);
});

[
  "liveActionEnabled: false",
  "userApprovalRequired: true",
  "metadata-only",
  "getRealDataSourceRegistry"
].forEach(phrase => {
  assert(registrySource.includes(phrase), `Registry source must include ${phrase}.`);
});

[
  "/nexus-real-data-source-registry.js",
  "NexusRealDataSourceRegistry",
  "getRealDataSourceRegistry"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load real data registry runtime hook: ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume real data registry runtime hook: ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume real data registry runtime hook: ${runtimeHook}`);
});

[
  "liveActionEnabled: true",
  "executePayment",
  "dispatchEmergency",
  "submitRefill",
  "sendMedicalRecords",
  "openProviderContact",
  "requestLocationNow"
].forEach(forbidden => {
  assert(!registrySource.includes(forbidden), `Registry must not introduce live regulated action behavior: ${forbidden}`);
});

const packageData = JSON.parse(packageJson);
assert(packageData.scripts["qa:nexus-real-data-regulated-action-roadmap"] === "node scripts/nexus-real-data-regulated-action-roadmap-qa.js", "package.json must include real data roadmap QA alias.");
assert(qaSuite.includes("scripts/nexus-real-data-regulated-action-roadmap-qa.js"), "nexus-workforce QA suite must include real data roadmap QA.");

console.log("[nexus-real-data-regulated-action-roadmap-qa] passed");
