const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_WORKFORCE_PUBLIC_SOURCE_CONTRACTS_PHASE_22.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  baseline: path.join(root, "public", "nexus-public-data-connector-baseline.js"),
  module: path.join(root, "public", "nexus-workforce-public-source-contracts.js"),
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
    console.error(`[nexus-workforce-public-source-contracts-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = read(paths.doc);
const roadmap = read(paths.roadmap);
const baseline = require(paths.baseline).getPublicDataConnectorBaseline();
const moduleSource = read(paths.module);
const contracts = require(paths.module).getWorkforcePublicSourceContracts();
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const requiredSourceIds = [
  "workforce.program.directory",
  "workforce.training.catalog",
  "workforce.job.board",
  "workforce.apprenticeship.certification",
  "workforce.skills.framework",
  "workforce.employer.public_opportunities",
  "workforce.community.programs",
  "workforce.agriculture.training"
];

const requiredFields = [
  "sourceId",
  "domain",
  "displayName",
  "sourceOwnerType",
  "workforceSourceCategory",
  "supportedWorkerQuestions",
  "expectedDataFields",
  "verificationRequirements",
  "freshnessRequirements",
  "eligibilityDisclosureRequirements",
  "languageLocalizationRequirements",
  "allowedResponseStates",
  "forbiddenClaims",
  "permissionRequirements",
  "auditRequirements",
  "futureRoadmapPhase"
];

const disabledFlags = [
  "fetchEnabled",
  "liveJobFeedEnabled",
  "applicationSubmissionEnabled",
  "referralSubmissionEnabled",
  "employerContactEnabled",
  "profileSharingEnabled",
  "resumeSharingEnabled",
  "certificateIssuingEnabled",
  "interviewSchedulingEnabled",
  "paymentEnabled",
  "executionEnabled"
];

assert(roadmap.includes("| Phase 22 | Workforce public sources |"), "Nexus 100 roadmap must include Phase 22 workforce public sources.");
assert(baseline.some(item => item.connectorId === "public.workforce.training"), "Phase 19 baseline must include public workforce training connector.");
assert(Array.isArray(contracts), "workforce contracts must export an array.");
assert(contracts.length === requiredSourceIds.length, `workforce contracts must include exactly ${requiredSourceIds.length} entries.`);

requiredSourceIds.forEach(sourceId => {
  const contract = contracts.find(item => item.sourceId === sourceId);
  assert(contract, `contracts must include ${sourceId}`);
  requiredFields.forEach(field => {
    assert(Object.prototype.hasOwnProperty.call(contract, field), `${sourceId} must include ${field}`);
  });
  disabledFlags.forEach(flag => {
    assert(contract[flag] === false, `${sourceId} must keep ${flag} false`);
  });
  assert(contract.domain === "workforce/jobs", `${sourceId} must stay in workforce/jobs domain.`);
  assert(contract.allowedResponseStates.includes("source_backed_guidance"), `${sourceId} must allow source-backed guidance.`);
  assert(contract.allowedResponseStates.includes("prepared_action_preview"), `${sourceId} must allow non-executing prepared action preview.`);
  assert(contract.allowedResponseStates.includes("unavailable_source_fallback"), `${sourceId} must include unavailable fallback.`);
  assert(contract.eligibilityDisclosureRequirements.some(rule => /do not guarantee/i.test(rule)), `${sourceId} must forbid guaranteed acceptance.`);
  assert(contract.auditRequirements.includes("application-action-blocked"), `${sourceId} must audit blocked application actions.`);
});

[
  "public workforce program directories",
  "public training and course catalogs",
  "public job board source metadata",
  "apprenticeship and certification sources",
  "career pathway and skills framework sources",
  "employer public opportunity pages",
  "youth/women/community workforce program sources",
  "agriculture workforce training sources",
  "Nexus must not",
  "apply for a job",
  "contact an employer",
  "submit a profile",
  "schedule an interview",
  "source_backed_guidance",
  "unavailable_source_fallback"
].forEach(phrase => {
  assert(doc.toLowerCase().includes(phrase.toLowerCase()), `doc must include ${phrase}`);
});

[
  "fetch(",
  "XMLHttpRequest",
  "axios",
  "EventSource",
  "WebSocket",
  "execute:",
  "handler:",
  "adapter:",
  "submitApplication",
  "contactEmployer",
  "shareProfile",
  "scheduleInterview",
  "issueCertificate",
  "processPayment"
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `workforce source module must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-workforce-public-source-contracts.js",
  "NexusWorkforcePublicSourceContracts",
  "getWorkforcePublicSourceContracts",
  "WORKFORCE_PUBLIC_SOURCE_CONTRACTS"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(
  packageData.scripts["qa:nexus-workforce-public-source-contracts"] === "node scripts/nexus-workforce-public-source-contracts-qa.js",
  "package.json must expose qa:nexus-workforce-public-source-contracts"
);
assert(
  qaSuite.includes("scripts/nexus-workforce-public-source-contracts-qa.js"),
  "qa-suite.js must include workforce public source contracts QA"
);

console.log("[nexus-workforce-public-source-contracts-qa] passed");
