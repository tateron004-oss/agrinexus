const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_STATE,
  normalizeAdvancedIntentUnderstandingFeatureFlagState
} = require("../public/nexus-advanced-intent-understanding-feature-flag.js");
const {
  protectedFields,
  loadAdvancedIntentUnderstandingFlagFixtures,
  validateAdvancedIntentUnderstandingFlagFixtures
} = require("./nexus-sprint-l3-advanced-intent-understanding-flag-contract-harness.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertIncludes(source, terms, label) {
  const normalizedSource = source.replace(/`/g, "");
  for (const term of terms) {
    assert(normalizedSource.includes(term), `${label} must include: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_L4_ADVANCED_INTENT_UNDERSTANDING_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-l4-advanced-intent-understanding-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint L4 runtime absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint L4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const featureFlagModule = read("public", "nexus-advanced-intent-understanding-feature-flag.js");
const harnessSource = read("scripts", "nexus-sprint-l3-advanced-intent-understanding-flag-contract-harness.js");
const fixtures = loadAdvancedIntentUnderstandingFlagFixtures();

assertIncludes(doc, [
  "Sprint L4",
  "a50d067bd9adbfaaed85cc757fc247f999cd3654",
  "documentation and QA only",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Sprint L5 - Advanced Intent Understanding Lane Closeout"
], "L4 runtime absence doc");

assertIncludes(doc, [
  "public/nexus-advanced-intent-understanding-readiness-contract.js",
  "public/nexus-advanced-intent-understanding-feature-flag.js",
  "scripts/nexus-sprint-l3-advanced-intent-understanding-flag-contract-harness.js",
  "fixtures/nexus/advanced-intent-understanding-feature-flags.json",
  "It intentionally does not ban generic words such as intent, route, classification, language, or settings"
], "L4 protected artifact list");

assertIncludes(doc, [
  "live classifier replacement",
  "active classifier adapters",
  "classifier review buttons",
  "event handlers",
  "typed route mutation",
  "voice route mutation",
  "automatic route changes",
  "hidden risk downgrades",
  "confidence-only risk downgrades",
  "ambiguous prompt execution",
  "provider selection from raw intent",
  "tool selection from raw intent",
  "planner action creation from raw intent",
  "policy bypass from classifier confidence",
  "confirmation bypass from classifier confidence",
  "permission bypass from classifier confidence",
  "medical diagnosis inference",
  "pharmacy or prescription inference",
  "payment intent execution",
  "marketplace transaction inference",
  "emergency dispatch inference",
  "contact or message execution inference",
  "location or camera permission inference",
  "identity verification inference",
  "role or permission elevation",
  "permission prompts",
  "audit writes",
  "backend writes",
  "localStorage or sessionStorage writes",
  "fetch or network calls",
  "provider handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "payment execution",
  "marketplace transactions",
  "location sharing",
  "camera or microphone activation",
  "health, medical, pharmacy, prescription, or FHIR execution",
  "appointment scheduling",
  "transportation dispatch",
  "emergency dispatch",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "L4 blocked runtime behavior");

for (const prior of [
  ["docs", "NEXUS_SPRINT_L1_ADVANCED_INTENT_UNDERSTANDING_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_L2_ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_L3_ADVANCED_INTENT_UNDERSTANDING_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_ADVANCED_INTENT_UNDERSTANDING_READINESS_CONTRACT_PHASE_64.md"],
  ["public", "nexus-advanced-intent-understanding-readiness-contract.js"],
  ["public", "nexus-advanced-intent-understanding-feature-flag.js"],
  ["fixtures", "nexus", "advanced-intent-understanding-feature-flags.json"],
  ["scripts", "nexus-sprint-l3-advanced-intent-understanding-flag-contract-harness.js"]
]) {
  assert(exists(...prior), `Sprint L4 requires prior artifact: ${prior.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-advanced-intent-understanding-readiness-contract.js",
  "nexus-advanced-intent-understanding-feature-flag.js",
  "nexus-sprint-l3-advanced-intent-understanding-flag-contract-harness",
  "advanced-intent-understanding-feature-flags.json",
  "NEXUS_ADVANCED_INTENT_UNDERSTANDING_VISIBLE_ENABLED",
  "NexusAdvancedIntentUnderstandingFeatureFlagContract",
  "normalizeAdvancedIntentUnderstandingFeatureFlagState",
  "isAdvancedIntentUnderstandingVisibleFeatureEnabled",
  "replaceClassifier",
  "activateIntentUnderstanding",
  "advancedIntentRuntime",
  "classifierRuntime",
  "autoRouteFromClassifier",
  "downgradeRiskFromClassifier",
  "selectProviderFromIntent",
  "executeIntent",
  "dispatchIntentAction"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Advanced Intent Understanding artifact: ${term}`);
}

assert.equal(DEFAULT_ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_STATE[field], false, `L2 default ${field} must remain false.`);
}
assert.equal(DEFAULT_ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_STATE.noExecution, true);

const unsafeAttempt = normalizeAdvancedIntentUnderstandingFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true,
  classifierContextAllowed: true,
  classifierRuntimeAllowed: true,
  liveClassifierReplacementAllowed: true,
  automaticRouteChangesAllowed: true,
  hiddenRiskDowngradeAllowed: true,
  confidenceRiskDowngradeAllowed: true,
  providerSelectionAllowed: true,
  toolSelectionAllowed: true,
  plannerActionCreationAllowed: true,
  policyBypassAllowed: true,
  confirmationBypassAllowed: true,
  permissionBypassAllowed: true,
  rawAdapterCallsAllowed: true,
  implicitPermissionAllowed: true,
  firstTurnExecutionAllowed: true,
  standardUserClassifierMutationAllowed: true,
  backendWriteAllowed: true,
  storageWriteAllowed: true,
  networkAllowed: true,
  auditWriteAllowed: true,
  executionAuthority: true,
  noExecution: false
});
assert.equal(unsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(unsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const fixtureResult = validateAdvancedIntentUnderstandingFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "L3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "L3 fixtures must remain complete.");

for (const source of [featureFlagModule, harnessSource]) {
  for (const term of [
    "document.",
    "querySelector",
    "addEventListener",
    "fetch(",
    "XMLHttpRequest",
    "localStorage",
    "sessionStorage",
    "indexedDB",
    "navigator.credentials",
    "navigator.geolocation",
    "mediaDevices",
    "window.location",
    "location.href",
    "open(",
    "sendBeacon",
    "setItem",
    "postMessage",
    "window.nativeBridge",
    "nativeBridge.",
    "ACTION_CALL",
    "getUserMedia",
    "openWorkflow(",
    "goSection(",
    "replaceClassifier(",
    "routeAutomatically(",
    "selectProvider(",
    "executeIntent("
  ]) {
    assert(!source.includes(term), `L2/L3 artifact must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-l4-advanced-intent-understanding-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint L4 QA.");

console.log("[nexus-sprint-l4-advanced-intent-understanding-runtime-absence-regression-guard-qa] passed");
