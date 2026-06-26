const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_PERSONALIZATION_READINESS_CONTRACT_PHASE_63.md"),
  contract: path.join(root, "public", "nexus-personalization-readiness-contract.js"),
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
    console.error(`[nexus-personalization-readiness-contract-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = read(paths.doc);
const contractSource = read(paths.contract);
const contract = require(paths.contract);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

assert(doc.includes("Phase: 63"), "doc must identify Phase 63.");
assert(doc.includes("inert readiness contract"), "doc must state this phase is inert.");
assert(doc.includes("preferences do not let me execute actions or skip approvals"), "doc must include safe personalization copy.");
assert(doc.includes("User control requirement"), "doc must define user control requirement.");

[
  "live preference engine behavior",
  "automatic personalization",
  "hidden personalization",
  "preference persistence",
  "preference sync",
  "profile-derived execution",
  "provider handoff",
  "health or medical personalization",
  "payment personalization",
  "precise location personalization",
  "marketplace transaction personalization",
  "emergency personalization",
  "role or permission elevation",
  "Standard User runtime preference changes",
  "storage or network side effects",
  "backend behavior changes"
].forEach(boundary => {
  assert(doc.includes(boundary), `doc must document inactive boundary ${boundary}.`);
});

[
  "explicitPersonalizationConsent",
  "visiblePersonalizationPurpose",
  "visiblePreferenceFields",
  "preferenceSource",
  "preferenceOwner",
  "preferenceScope",
  "userOverrideControl",
  "editControl",
  "deleteControl",
  "resetControl",
  "consentRevocationPath",
  "retentionPolicy",
  "redactionPolicy",
  "auditEvent",
  "sourceAttributionWhenRelevant",
  "nonAuthoritativePreferenceRule",
  "noPreferenceBasedExecution",
  "noHiddenPersonalization",
  "noRiskTierChangesFromPreferences"
].forEach(precondition => {
  assert(contract.PERSONALIZATION_REQUIRED_PRECONDITIONS.includes(precondition), `contract must include precondition ${precondition}.`);
  assert(doc.includes(precondition), `doc must include precondition ${precondition}.`);
});

[
  "healthcare",
  "medical_records",
  "pharmacy",
  "payments",
  "location",
  "communications",
  "provider_contact",
  "marketplace_transactions",
  "emergency",
  "identity",
  "account_profile",
  "role_authorization",
  "minors_family_support"
].forEach(domain => {
  assert(contract.PERSONALIZATION_RESTRICTED_DOMAINS.includes(domain), `contract must include restricted domain ${domain}.`);
  assert(doc.includes(domain), `doc must include restricted domain ${domain}.`);
});

const defaults = contract.PERSONALIZATION_NO_EXECUTION_DEFAULTS;
[
  "preferenceEngineEnabled",
  "automaticPersonalizationEnabled",
  "hiddenPersonalizationEnabled",
  "preferencePersistenceEnabled",
  "preferenceSyncEnabled",
  "profileDerivedExecutionEnabled",
  "providerHandoffEnabled",
  "riskTierMutationEnabled",
  "standardUserPreferenceMutationAllowed",
  "executionAllowed",
  "liveActionEnabled"
].forEach(field => {
  assert(defaults[field] === false, `${field} must default false.`);
  assert(contract.PERSONALIZATION_READINESS_CONTRACT[field] === false, `${field} must be false on the default contract.`);
});

const sample = contract.createPersonalizationReadinessContract({
  actionType: "tailor_guidance",
  preferenceEngineEnabled: true,
  automaticPersonalizationEnabled: true,
  hiddenPersonalizationEnabled: true,
  riskTierMutationEnabled: true,
  executionAllowed: true
});

assert(sample.actionType === "tailor_guidance", "recognized action type may be represented.");
assert(sample.phase === "63", "sample phase must remain 63.");
assert(sample.readinessStatus === "blocked", "sample readiness remains blocked.");
assert(sample.riskTier === "controlled", "sample risk tier remains controlled.");
assert(sample.preferenceEngineEnabled === false, "factory must force preference engine disabled.");
assert(sample.automaticPersonalizationEnabled === false, "factory must force automatic personalization disabled.");
assert(sample.hiddenPersonalizationEnabled === false, "factory must force hidden personalization disabled.");
assert(sample.riskTierMutationEnabled === false, "factory must force risk tier mutation disabled.");
assert(sample.executionAllowed === false, "factory must force execution disabled.");

[
  "fetch(",
  "XMLHttpRequest",
  "axios",
  "EventSource",
  "WebSocket",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "window.location",
  "document.location",
  "addEventListener",
  "onclick",
  "setInterval",
  "setTimeout",
  "personalizeRuntime(",
  "savePreferences(",
  "loadPreferences(",
  "sharePreferences("
].forEach(forbidden => {
  assert(!contractSource.includes(forbidden), `contract module must not include runtime behavior: ${forbidden}`);
});

[
  "nexus-personalization-readiness-contract.js",
  "NexusPersonalizationReadinessContract",
  "personalizationReadiness",
  "PERSONALIZATION_READINESS_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}.`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}.`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}.`);
});

assert(packageData.scripts["qa:nexus-personalization-readiness-contract"] === "node scripts/nexus-personalization-readiness-contract-qa.js", "package.json must expose qa:nexus-personalization-readiness-contract.");
assert(qaSuite.includes("scripts/nexus-personalization-readiness-contract-qa.js"), "qa-suite.js must include personalization readiness QA.");

console.log("[nexus-personalization-readiness-contract-qa] passed");
