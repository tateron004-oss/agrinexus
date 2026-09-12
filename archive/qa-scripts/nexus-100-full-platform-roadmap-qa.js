const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  serviceModes: path.join(root, "public", "nexus-service-mode-catalog.js"),
  providerUniverse: path.join(root, "public", "nexus-provider-source-universe.js"),
  capabilityModel: path.join(root, "public", "nexus-platform-capability-model.js"),
  answerContract: path.join(root, "public", "nexus-source-backed-answer-contract.js"),
  actionPlanner: path.join(root, "public", "nexus-platform-action-planner.js"),
  onboardingModel: path.join(root, "public", "nexus-provider-onboarding-model.js"),
  realDataRegistry: path.join(root, "public", "nexus-real-data-source-registry.js"),
  voiceShell: path.join(root, "public", "nexus-voice-demo-shell.js"),
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
    console.error(`[nexus-100-full-platform-roadmap-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const roadmap = read(paths.roadmap);
const serviceModesSource = read(paths.serviceModes);
const providerUniverseSource = read(paths.providerUniverse);
const capabilityModelSource = read(paths.capabilityModel);
const answerContractSource = read(paths.answerContract);
const actionPlannerSource = read(paths.actionPlanner);
const onboardingSource = read(paths.onboardingModel);
const registrySource = read(paths.realDataRegistry);
const app = read(paths.app);
const server = read(paths.server);
const packageJsonSource = read(paths.packageJson);
const qaSuite = read(paths.qaSuite);

const serviceModes = require(paths.serviceModes).getNexusServiceModeCatalog();
const providerUniverse = require(paths.providerUniverse).getNexusProviderSourceUniverse();
const capabilities = require(paths.capabilityModel).getNexusPlatformCapabilityModel();
const answerContract = require(paths.answerContract);
const actionPlanner = require(paths.actionPlanner);
const onboarding = require(paths.onboardingModel).getNexusProviderOnboardingModel();
const realDataRegistry = require(paths.realDataRegistry);

const phaseRows = roadmap.match(/^\| Phase \d+ \|/gm) || [];
assert(phaseRows.length === 100, `Roadmap must include exactly 100 phase rows; found ${phaseRows.length}.`);
assert(/Nexus - Full Multilingual Access Platform for Farmers and Underserved Communities/i.test(roadmap), "Roadmap must define Nexus as the full multilingual access platform.");

[
  "agriculture", "healthcare", "pharmacy", "mobile clinic", "transportation", "workforce", "education",
  "marketplace", "payments", "medical records", "emergency", "Field Agent Mode", "Admin Mode",
  "Offline/Low-Bandwidth Mode", "Multilingual Voice Mode", "Production scale"
].forEach(term => {
  assert(roadmap.toLowerCase().includes(term.toLowerCase()), `Roadmap must include ${term}.`);
});

const requiredModes = [
  "Core Assistant Mode", "Farmer Mode", "Agriculture Advisory Mode", "Crop Issue Mode", "Irrigation Mode",
  "AgriTrade Marketplace Mode", "Market Price Mode", "Logistics Mode", "Workforce Mode", "Education/Training Mode",
  "Rural Health Mode", "Telehealth Mode", "Pharmacy Mode", "Mobile Clinic Mode", "Transportation-to-Care Mode",
  "Community Services Mode", "Provider Mode", "Field Agent Mode", "Admin Mode", "Location Access Mode",
  "Payment Mode", "Medical Records/FHIR Mode", "Emergency Boundary/Partner Mode", "Offline/Low-Bandwidth Mode",
  "Multilingual Voice Mode", "Action Approval Mode", "Audit/Compliance Mode", "Trust/Fraud Prevention Mode"
];
requiredModes.forEach(mode => {
  assert(serviceModes.some(item => item.displayName === mode), `Service/mode catalog must include ${mode}.`);
});
serviceModes.filter(item => ["high", "restricted", "sensitive"].includes(item.riskTier)).forEach(item => {
  assert(item.executionEnabled === false, `${item.displayName} must default executionEnabled false.`);
  assert(item.requiresApproval === true, `${item.displayName} must require approval.`);
  assert(item.requiresAudit === true, `${item.displayName} must require audit.`);
});

[
  "agriculture", "farmer", "health", "pharmacy", "mobile_clinic", "transportation", "payment", "fhir",
  "emergency", "workforce", "education", "market", "community"
].forEach(term => {
  assert(providerUniverse.some(item => item.categoryId.includes(term) || item.sourceProviderType.toLowerCase().includes(term)), `Provider/source universe must include ${term}.`);
});
providerUniverse.forEach(item => {
  assert(item.defaultExecutionEnabled === false, `${item.categoryId} must default execution disabled.`);
  assert(item.verificationRequirements.length > 0, `${item.categoryId} must require verification.`);
  assert(item.goLiveChecklist || item.futureRoadmapPhases, `${item.categoryId} must map to future phases or go-live controls.`);
});

[
  "voice", "multilingual conversation", "source-backed answers", "real-time provider data", "agriculture support",
  "farmer services", "crop guidance", "market access", "workforce", "education", "healthcare access",
  "telehealth", "pharmacy", "mobile clinics", "transportation", "community services", "provider contact",
  "scheduling", "payments", "location", "medical records/FHIR", "emergency pathways", "memory",
  "personalization", "task planning", "orchestration", "field agent support", "admin/provider dashboard",
  "offline/low-bandwidth", "audit/compliance", "trust/fraud prevention"
].forEach(capability => {
  assert(capabilities.some(item => item.displayName === capability), `Capability model must include ${capability}.`);
});
capabilities.filter(item => ["high", "restricted", "sensitive"].includes(item.riskTier)).forEach(item => {
  assert(item.executionEnabled === false, `${item.displayName} must keep execution disabled.`);
  assert(item.approvalRequired === true, `${item.displayName} must require approval.`);
  assert(item.auditRequired === true, `${item.displayName} must require audit.`);
});

Object.entries(answerContract.DANGEROUS_DEFAULTS).forEach(([key, value]) => {
  assert(value === false, `Dangerous source-backed answer flag ${key} must default false.`);
  assert(answerContract.SOURCE_BACKED_ANSWER_CONTRACT[key] === false, `Answer contract ${key} must default false.`);
});

actionPlanner.PLATFORM_ACTION_PLANS.forEach(plan => {
  assert(plan.executionAllowed === false, `${plan.intent} plan must default executionAllowed false.`);
  if (["high", "restricted", "sensitive"].includes(plan.riskTier)) {
    assert(plan.approvalNeeded === true, `${plan.intent} high-risk plan must require approval.`);
    assert(plan.auditNeeded === true, `${plan.intent} high-risk plan must require audit.`);
  }
});

onboarding.forEach(item => {
  assert(item.disabledByDefault === true, `${item.categoryId} onboarding must be disabled by default.`);
  assert(item.verificationRequirements.length > 0, `${item.categoryId} must include verification requirements.`);
  assert(item.goLiveChecklist.includes("sandbox tested"), `${item.categoryId} must require sandbox testing before go-live.`);
});

realDataRegistry.getRealTimeConnectorRegistry().forEach(connector => {
  assert(connector.executionCurrentlyEnabled === false, `${connector.id} connector execution must be disabled.`);
  assert(connector.userApprovalRequired === true, `${connector.id} connector must require user approval.`);
});
realDataRegistry.getRealDataSourceRegistry().forEach(source => {
  assert(source.liveActionEnabled === false, `${source.id} live action must be disabled.`);
});

[
  "nexusPhase17StandardUserSafeAnswer",
  "full multilingual access platform",
  "verified connectors, consent, user approval",
  "live regulated actions remain disabled",
  "cannot dispatch emergency help",
  "cannot process a payment",
  "Medical records and FHIR access are regulated capabilities",
  "Kenya-inspired demo rhythm"
].forEach(term => {
  assert(`${app}\n${server}`.includes(term), `Runtime user-facing Phase 17 layer must include: ${term}`);
});

[
  "executePayment(", "dispatchEmergency(", "submitRefill(", "sendMedicalRecords(", "requestLocationNow(",
  "backendVoiceService", "backendTranslationService", "alwaysOnListening", "wakeWordDetection"
].forEach(forbidden => {
  assert(!`${serviceModesSource}\n${providerUniverseSource}\n${capabilityModelSource}\n${answerContractSource}\n${actionPlannerSource}\n${onboardingSource}\n${registrySource}\n${app}\n${server}`.includes(forbidden), `Nexus 100 foundation must not introduce ${forbidden}.`);
});

const packageData = JSON.parse(packageJsonSource);
assert(packageData.scripts["qa:nexus-100-full-platform-roadmap"] === "node scripts/nexus-100-full-platform-roadmap-qa.js", "package.json must include Nexus 100 QA alias.");
assert(qaSuite.includes("scripts/nexus-100-full-platform-roadmap-qa.js"), "qa-suite must include Nexus 100 QA.");

console.log("[nexus-100-full-platform-roadmap-qa] passed");
