const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_SOURCE_BACKED_RESPONSE_RUNTIME_CONTRACT_AUDIT.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  contract: path.join(root, "public", "nexus-source-backed-answer-contract.js"),
  planner: path.join(root, "public", "nexus-platform-action-planner.js"),
  providerUniverse: path.join(root, "public", "nexus-provider-source-universe.js"),
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
    console.error(`[nexus-source-backed-response-runtime-contract-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = read(paths.doc);
const lowerDoc = doc.toLowerCase();
const roadmap = read(paths.roadmap);
const contractSource = read(paths.contract);
const plannerSource = read(paths.planner);
const providerUniverseSource = read(paths.providerUniverse);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const responseStates = [
  "general_guidance",
  "source_backed_guidance",
  "provider_directory_result",
  "prepared_action_preview",
  "permission_required",
  "privacy_gate_required",
  "emergency_escalation_guidance",
  "blocked_or_unsupported",
  "unavailable_source_fallback"
];

const stateRequirements = [
  "Allowed when:",
  "Forbidden when:",
  "User should see:",
  "Must disclose:",
  "Required source/provider metadata:",
  "Permission required:",
  "Audit event:",
  "QA must validate:"
];

responseStates.forEach(state => {
  const heading = `### \`${state}\``;
  const start = doc.indexOf(heading);
  assert(start !== -1, `doc must define response state ${state}`);
  const next = doc.indexOf("\n### `", start + heading.length);
  const section = doc.slice(start, next === -1 ? doc.length : next);
  stateRequirements.forEach(requirement => {
    assert(section.includes(requirement), `${state} must include ${requirement}`);
  });
});

[
  "agriculture support",
  "healthcare access",
  "pharmacy support",
  "mobile clinics",
  "transportation",
  "workforce/jobs",
  "education/training",
  "marketplace/AgriTrade",
  "payments",
  "medical records",
  "emergency pathways",
  "community resources"
].forEach(domain => {
  assert(lowerDoc.includes(domain.toLowerCase()), `doc must include service domain: ${domain}`);
});

[
  "Do not claim a source exists if it does not.",
  "Do not imply provider availability unless source/provider data supports it.",
  "Do not present general advice as verified local guidance.",
  "Do not silently escalate to a provider.",
  "Do not silently contact anyone.",
  "Do not silently access location.",
  "Do not silently access records.",
  "Do not silently initiate payment.",
  "Do not silently initiate marketplace transactions.",
  "Do not simulate emergency dispatch.",
  "Do not make final medical, legal, financial, or safety-critical decisions.",
  "Always distinguish \"I can guide you\" from \"I can connect you\".",
  "Always distinguish \"general information\" from \"verified provider-backed information\"."
].forEach(principle => {
  assert(doc.includes(principle), `doc must include safety principle: ${principle}`);
});

[
  "Source status",
  "Freshness",
  "Provider status",
  "Action status",
  "Audit status",
  "source owner",
  "source type",
  "source status",
  "freshness",
  "connector status",
  "provider confirmation",
  "user approval",
  "consent",
  "audit logging",
  "No action has been taken.",
  "I do not have a verified source for that yet."
].forEach(rule => {
  assert(lowerDoc.includes(rule.toLowerCase()), `doc must include disclosure/permission/audit rule: ${rule}`);
});

[
  "Kenya music caption overwrite",
  "No external music service or unsafe action triggered.",
  "No console warn/error was observed.",
  "Static/source/QA behavior remained safe.",
  "future UI/content integrity validation"
].forEach(phrase => {
  assert(doc.includes(phrase), `doc must include known browser observation: ${phrase}`);
});

[
  "SOURCE_BACKED_ANSWER_CONTRACT",
  "DANGEROUS_DEFAULTS",
  "containsLiveData: false",
  "externalActionAllowed: false",
  "providerContactAllowed: false",
  "paymentAllowed: false",
  "prescriptionActionAllowed: false",
  "medicalRecordAccessAllowed: false",
  "emergencyDispatchAllowed: false",
  "locationSharingAllowed: false",
  "messageSendAllowed: false",
  "callAllowed: false",
  "appointmentSchedulingAllowed: false",
  "auditRequired: true"
].forEach(phrase => {
  assert(contractSource.includes(phrase), `source-backed answer contract must include ${phrase}`);
});

[
  "executionAllowed: false",
  "approvalNeeded",
  "consentNeeded",
  "auditNeeded",
  "providerNeeded",
  "sourceNeeded"
].forEach(phrase => {
  assert(plannerSource.includes(phrase), `platform action planner must preserve ${phrase}`);
});

[
  "defaultExecutionEnabled: false",
  "dataFreshnessRequirements",
  "permissionRequirements",
  "consentRequirements",
  "auditRequirements",
  "legalComplianceRequirements"
].forEach(phrase => {
  assert(providerUniverseSource.includes(phrase), `provider/source universe must preserve ${phrase}`);
});

[
  "nexusPhase17StandardUserSafeAnswer",
  "verified connectors, consent, user approval",
  "live regulated actions remain disabled",
  "cannot dispatch emergency help",
  "cannot process a payment",
  "Medical records and FHIR access are regulated capabilities"
].forEach(phrase => {
  assert(app.includes(phrase) || server.includes(phrase), `runtime safe response layer must preserve ${phrase}`);
});

[
  "executePayment(",
  "dispatchEmergency(",
  "submitPrescriptionRefill(",
  "openMedicalRecord(",
  "autoContactProvider(",
  "autoShareLocation(",
  "autoBuy",
  "autoSell"
].forEach(forbidden => {
  assert(!contractSource.includes(forbidden), `contract source must not introduce ${forbidden}`);
  assert(!plannerSource.includes(forbidden), `planner source must not introduce ${forbidden}`);
});

[
  "Nexus - Full Multilingual Access Platform for Farmers and Underserved Communities",
  "source-backed",
  "permission",
  "audit",
  "provider"
].forEach(phrase => {
  assert(roadmap.toLowerCase().includes(phrase.toLowerCase()), `Nexus 100 roadmap must include ${phrase}`);
});

assert(
  packageData.scripts["qa:nexus-source-backed-response-runtime-contract"] === "node scripts/nexus-source-backed-response-runtime-contract-qa.js",
  "package.json must expose qa:nexus-source-backed-response-runtime-contract"
);
assert(
  qaSuite.includes("scripts/nexus-source-backed-response-runtime-contract-qa.js"),
  "qa-suite.js must include source-backed response runtime contract QA"
);

console.log("[nexus-source-backed-response-runtime-contract-qa] passed");
