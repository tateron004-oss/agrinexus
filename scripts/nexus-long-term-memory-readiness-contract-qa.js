const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_LONG_TERM_MEMORY_READINESS_CONTRACT_PHASE_61.md"),
  contract: path.join(root, "public", "nexus-long-term-memory-readiness-contract.js"),
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
    console.error(`[nexus-long-term-memory-readiness-contract-qa] ${message}`);
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

assert(doc.includes("Phase: 61"), "doc must identify Phase 61.");
assert(doc.includes("inert readiness contract"), "doc must state this phase is inert.");
assert(doc.includes("No durable memory has been created by this contract."), "doc must include safe no-durable-memory copy.");
assert(doc.includes("Non-Authority Boundary"), "doc must define non-authority boundary.");

[
  "durable memory storage",
  "memory backend APIs",
  "cross-device memory sync",
  "account-linked memory",
  "provider-shared memory",
  "health or medical memory storage",
  "payment or account memory storage",
  "precise location memory storage",
  "contact memory storage",
  "marketplace buyer or seller memory storage",
  "automatic personalization from memory",
  "action authorization from memory",
  "Standard User runtime durable memory behavior",
  "storage or network side effects",
  "backend behavior changes"
].forEach(boundary => {
  assert(doc.includes(boundary), `doc must document inactive boundary ${boundary}.`);
});

[
  "explicitMemoryConsent",
  "visibleMemoryPurpose",
  "visibleMemoryCategories",
  "sensitiveCategoryExclusions",
  "retentionPolicy",
  "expiryPolicy",
  "redactionPolicy",
  "resetControl",
  "deleteControl",
  "exportControlWhenApplicable",
  "auditEvent",
  "permissionState",
  "consentRevocationPath",
  "nonAuthoritativeMemoryRule",
  "noActionAuthorizationFromMemory",
  "noPermissionUnlockFromMemory",
  "noSilentSensitiveStorage",
  "noHiddenCrossDeviceSync",
  "noProviderSharingWithoutApproval"
].forEach(precondition => {
  assert(contract.LONG_TERM_MEMORY_REQUIRED_PRECONDITIONS.includes(precondition), `contract must include precondition ${precondition}.`);
  assert(doc.includes(precondition), `doc must include precondition ${precondition}.`);
});

[
  "identity",
  "healthcare",
  "medical_records",
  "pharmacy",
  "payments",
  "location",
  "communications",
  "provider_contact",
  "marketplace_transactions",
  "emergency",
  "minors_family_support"
].forEach(domain => {
  assert(contract.LONG_TERM_MEMORY_RESTRICTED_DOMAINS.includes(domain), `contract must include restricted domain ${domain}.`);
  assert(doc.includes(domain), `doc must include restricted domain ${domain}.`);
});

const defaults = contract.LONG_TERM_MEMORY_NO_EXECUTION_DEFAULTS;
[
  "durableMemoryEnabled",
  "memoryBackendEnabled",
  "crossSessionMemoryEnabled",
  "accountLinkedMemoryEnabled",
  "providerSharedMemoryEnabled",
  "sensitiveMemoryEnabled",
  "automaticPersonalizationEnabled",
  "memoryCanAuthorizeActions",
  "memoryCanUnlockPermissions",
  "standardUserDurableMemoryAllowed",
  "executionAllowed",
  "liveActionEnabled"
].forEach(field => {
  assert(defaults[field] === false, `${field} must default false.`);
  assert(contract.LONG_TERM_MEMORY_READINESS_CONTRACT[field] === false, `${field} must be false on the default contract.`);
});

const sample = contract.createLongTermMemoryReadinessContract({
  actionType: "create_durable_memory",
  durableMemoryEnabled: true,
  memoryBackendEnabled: true,
  memoryCanAuthorizeActions: true,
  executionAllowed: true
});

assert(sample.actionType === "create_durable_memory", "recognized action type may be represented.");
assert(sample.phase === "61", "sample phase must remain 61.");
assert(sample.readinessStatus === "blocked", "sample readiness remains blocked.");
assert(sample.riskTier === "high", "sample risk tier remains high.");
assert(sample.durableMemoryEnabled === false, "factory must force durable memory disabled.");
assert(sample.memoryBackendEnabled === false, "factory must force memory backend disabled.");
assert(sample.memoryCanAuthorizeActions === false, "factory must force memory authority disabled.");
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
  "saveMemory(",
  "syncMemory(",
  "authorizeFromMemory("
].forEach(forbidden => {
  assert(!contractSource.includes(forbidden), `contract module must not include runtime behavior: ${forbidden}`);
});

[
  "nexus-long-term-memory-readiness-contract.js",
  "NexusLongTermMemoryReadinessContract",
  "longTermMemoryReadiness",
  "LONG_TERM_MEMORY_READINESS_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}.`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}.`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}.`);
});

assert(packageData.scripts["qa:nexus-long-term-memory-readiness-contract"] === "node scripts/nexus-long-term-memory-readiness-contract-qa.js", "package.json must expose qa:nexus-long-term-memory-readiness-contract.");
assert(qaSuite.includes("scripts/nexus-long-term-memory-readiness-contract-qa.js"), "qa-suite.js must include long-term memory readiness QA.");

console.log("[nexus-long-term-memory-readiness-contract-qa] passed");
