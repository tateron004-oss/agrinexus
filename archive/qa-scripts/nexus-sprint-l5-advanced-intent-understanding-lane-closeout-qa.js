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

const docName = "NEXUS_SPRINT_L5_ADVANCED_INTENT_UNDERSTANDING_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-l5-advanced-intent-understanding-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint L5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint L5 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-advanced-intent-understanding-readiness-contract.js");
const featureFlagModule = read("public", "nexus-advanced-intent-understanding-feature-flag.js");
const l3Harness = read("scripts", "nexus-sprint-l3-advanced-intent-understanding-flag-contract-harness.js");
const fixtures = loadAdvancedIntentUnderstandingFlagFixtures();

assertIncludes(doc, [
  "Sprint L5",
  "4ebf868fafdf5746203678e2c43bb51fc634c711",
  "documentation and deterministic QA only",
  "Sprint L Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint M1 - Multi-Turn Reasoning Runtime Activation Readiness Gate"
], "L5 closeout doc");

assertIncludes(doc, [
  "Advanced Intent Understanding runtime activation readiness gate",
  "Advanced Intent Understanding feature flag contract",
  "Advanced Intent Understanding flag contract harness",
  "Advanced Intent Understanding runtime absence regression guard",
  "Advanced Intent Understanding lane closeout"
], "L5 sprint summary");

assertIncludes(doc, [
  "Advanced Intent Understanding readiness is not runtime activation",
  "Advanced Intent Understanding visibility readiness is not classifier authority",
  "classifier context is not proof of consent, identity, role authorization, provider authorization, or execution approval",
  "classifier decisions must remain non-authoritative context",
  "ambiguous prompts must clarify rather than infer high-impact intent",
  "enabled: false",
  "visibleUiAllowed: false",
  "classifierContextAllowed: false",
  "classifierRuntimeAllowed: false",
  "liveClassifierReplacementAllowed: false",
  "automaticRouteChangesAllowed: false",
  "hiddenRiskDowngradeAllowed: false",
  "confidenceRiskDowngradeAllowed: false",
  "providerSelectionAllowed: false",
  "toolSelectionAllowed: false",
  "plannerActionCreationAllowed: false",
  "policyBypassAllowed: false",
  "confirmationBypassAllowed: false",
  "permissionBypassAllowed: false",
  "rawAdapterCallsAllowed: false",
  "implicitPermissionAllowed: false",
  "firstTurnExecutionAllowed: false",
  "standardUserClassifierMutationAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "auditWriteAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "unsafe authority attempts normalize back to no-execution values",
  "no action has been taken"
], "L5 no-authority and no-execution language");

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
], "L5 blocked runtime categories");

const requiredDocs = [
  "NEXUS_SPRINT_L1_ADVANCED_INTENT_UNDERSTANDING_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_L2_ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_L3_ADVANCED_INTENT_UNDERSTANDING_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_L4_ADVANCED_INTENT_UNDERSTANDING_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_ADVANCED_INTENT_UNDERSTANDING_READINESS_CONTRACT_PHASE_64.md",
  "NEXUS_MULTI_TURN_REASONING_READINESS_CONTRACT_PHASE_65.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint L5 requires prior or next-lane doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-l1-advanced-intent-understanding-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-l2-advanced-intent-understanding-feature-flag-contract-qa.js",
  "nexus-sprint-l3-advanced-intent-understanding-flag-contract-harness-qa.js",
  "nexus-sprint-l4-advanced-intent-understanding-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint L5 requires prior Sprint L QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint L QA: ${requiredScript}`);
}

assert(exists("public", "nexus-advanced-intent-understanding-readiness-contract.js"), "Sprint L5 requires Phase 64 Advanced Intent Understanding readiness contract.");
assert(exists("public", "nexus-advanced-intent-understanding-feature-flag.js"), "Sprint L5 requires L2 feature flag contract.");
assert(exists("fixtures", "nexus", "advanced-intent-understanding-feature-flags.json"), "Sprint L5 requires L3 feature flag fixture.");

assertIncludes(readinessContract, [
  "ADVANCED_INTENT_UNDERSTANDING_READINESS_CONTRACT",
  "advanced_intent_understanding.readiness.phase_64",
  "ADVANCED_INTENT_UNDERSTANDING_NO_EXECUTION_DEFAULTS",
  "createAdvancedIntentUnderstandingReadinessContract",
  "executionAllowed: false",
  "liveActionEnabled: false"
], "Phase 64 Advanced Intent Understanding readiness contract");

assertIncludes(featureFlagModule, [
  "DEFAULT_ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_STATE",
  "NEXUS_ADVANCED_INTENT_UNDERSTANDING_VISIBLE_ENABLED",
  "normalizeAdvancedIntentUnderstandingFeatureFlagState",
  "isAdvancedIntentUnderstandingVisibleFeatureEnabled",
  "executionAuthority",
  "noExecution"
], "L2 Advanced Intent Understanding feature flag module");

assertIncludes(l3Harness, [
  "loadAdvancedIntentUnderstandingFlagFixtures",
  "validateAdvancedIntentUnderstandingFlagFixtures"
], "L3 Advanced Intent Understanding harness");

assert.equal(DEFAULT_ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_STATE[field], false, `L5 default ${field} must remain false.`);
}
assert.equal(DEFAULT_ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_STATE.noExecution, true);

const normalizedUnsafeAttempt = normalizeAdvancedIntentUnderstandingFeatureFlagState({
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

assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateAdvancedIntentUnderstandingFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "L3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "L3 fixtures must remain complete.");

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
  "dispatchIntentAction",
  "nexus-sprint-l5-advanced-intent-understanding-lane-closeout"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Advanced Intent Understanding lane artifact: ${term}`);
}

for (const source of [featureFlagModule, l3Harness]) {
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
    assert(!source.includes(term), `Sprint L contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-l5-advanced-intent-understanding-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint L5 QA.");

console.log("[nexus-sprint-l5-advanced-intent-understanding-lane-closeout-qa] passed");
