const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_NAME,
  DEFAULT_FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_STATE,
  normalizeFarmerAgricultureIntelligenceFeatureFlagState,
  isFarmerAgricultureIntelligenceVisibleFeatureEnabled
} = require("../public/nexus-farmer-agriculture-intelligence-feature-flag.js");

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

const docName = "NEXUS_SPRINT_S2_FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-farmer-agriculture-intelligence-feature-flag.js";
const qaName = "nexus-sprint-s2-farmer-agriculture-intelligence-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint S2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint S2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint S2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const readinessContract = read("public", "nexus-farmer-agriculture-intelligence-readiness-contract.js");
const s1Doc = read("docs", "NEXUS_SPRINT_S1_FARMER_AGRICULTURE_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint S2",
  "a80ae71258285234072df8e27aef4265adb476ef",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_FARMER_AGRICULTURE_INTELLIGENCE_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Prohibited Behavior",
  "Relationship To Sprint S1",
  "QA Expectations",
  "Sprint S3 - Farmer Agriculture Intelligence Flag Contract Harness"
], "S2 feature flag doc");

assert(readinessContract.includes("farmer-agriculture-intelligence.readiness.phase_71"), "S2 must build on the Phase 71 Farmer Agriculture Intelligence readiness contract.");
assert(readinessContract.includes("liveAgricultureAdvisorEnabled: false"), "Phase 71 live agriculture advisor default must remain false.");
assert(readinessContract.includes("unsourcedAgricultureAdviceAllowed: false"), "Phase 71 unsourced advice default must remain false.");
assert(readinessContract.includes("chemicalApplicationInstructionAllowed: false"), "Phase 71 chemical application default must remain false.");
assert(readinessContract.includes("providerOrExtensionContactAllowed: false"), "Phase 71 provider contact default must remain false.");
assert(readinessContract.includes("executionAllowed: false"), "Phase 71 execution default must remain false.");
assert(s1Doc.includes("Sprint S2 - Farmer Agriculture Intelligence Feature Flag Contract"), "S1 must recommend Sprint S2.");

const protectedFields = [
  "agricultureReviewAllowed",
  "sourceBackedGuidancePreviewAllowed",
  "farmerSummaryPreviewAllowed",
  "extensionEscalationPreviewAllowed",
  "agricultureRuntimeAllowed",
  "liveAgricultureAdvisorAllowed",
  "sourceRetrievalRuntimeAllowed",
  "unsourcedAgricultureAdviceAllowed",
  "chemicalApplicationInstructionAllowed",
  "diagnosisClaimAllowed",
  "marketplaceTransactionAllowed",
  "paymentExecutionAllowed",
  "providerOrExtensionContactAllowed",
  "weatherOrPestLiveClaimAllowed",
  "locationSharingAllowed",
  "cropInsuranceFilingAllowed",
  "policyBypassAllowed",
  "confirmationBypassAllowed",
  "permissionBypassAllowed",
  "firstTurnExecutionAllowed",
  "laterTurnExecutionAllowed",
  "standardUserAgricultureBrainMutationAllowed",
  "backendWriteAllowed",
  "storageWriteAllowed",
  "networkAllowed",
  "auditWriteAllowed",
  "executionAuthority"
];

assert.equal(FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_NAME, "NEXUS_FARMER_AGRICULTURE_INTELLIGENCE_VISIBLE_ENABLED");
assert.equal(DEFAULT_FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_STATE.noExecution, true);
for (const field of protectedFields) {
  assert.equal(DEFAULT_FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `S2 doc must document ${field}: false.`);
}

const defaultState = normalizeFarmerAgricultureIntelligenceFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isFarmerAgricultureIntelligenceVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeFarmerAgricultureIntelligenceFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isFarmerAgricultureIntelligenceVisibleFeatureEnabled(visibleOnly), true);
for (const field of protectedFields) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

const unsafeAttempt = normalizeFarmerAgricultureIntelligenceFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true,
  agricultureReviewAllowed: true,
  sourceBackedGuidancePreviewAllowed: true,
  farmerSummaryPreviewAllowed: true,
  extensionEscalationPreviewAllowed: true,
  agricultureRuntimeAllowed: true,
  liveAgricultureAdvisorAllowed: true,
  sourceRetrievalRuntimeAllowed: true,
  unsourcedAgricultureAdviceAllowed: true,
  chemicalApplicationInstructionAllowed: true,
  diagnosisClaimAllowed: true,
  marketplaceTransactionAllowed: true,
  paymentExecutionAllowed: true,
  providerOrExtensionContactAllowed: true,
  weatherOrPestLiveClaimAllowed: true,
  locationSharingAllowed: true,
  cropInsuranceFilingAllowed: true,
  policyBypassAllowed: true,
  confirmationBypassAllowed: true,
  permissionBypassAllowed: true,
  firstTurnExecutionAllowed: true,
  laterTurnExecutionAllowed: true,
  standardUserAgricultureBrainMutationAllowed: true,
  backendWriteAllowed: true,
  storageWriteAllowed: true,
  networkAllowed: true,
  auditWriteAllowed: true,
  executionAuthority: true,
  noExecution: false
});
assert.equal(unsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(unsafeAttempt[field], false, `unsafe attempt must keep ${field}=false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
  "NEXUS_FARMER_AGRICULTURE_INTELLIGENCE_VISIBLE_ENABLED",
  "NexusFarmerAgricultureIntelligenceFeatureFlagContract",
  "normalizeFarmerAgricultureIntelligenceFeatureFlagState",
  "isFarmerAgricultureIntelligenceVisibleFeatureEnabled",
  "farmerAgricultureIntelligenceRuntime",
  "liveAgricultureAdvisor",
  "executeAgricultureAdvice(",
  "contactExtensionProvider(",
  "executeChemicalApplication("
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Farmer Agriculture Intelligence feature flag artifact: ${term}`);
}

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
  "executeAgricultureAdvice(",
  "contactExtensionProvider(",
  "executeChemicalApplication("
]) {
  assert(!moduleSource.includes(term), `S2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-s2-farmer-agriculture-intelligence-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint S2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-s1-farmer-agriculture-intelligence-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint S1 QA.");

console.log("[nexus-sprint-s2-farmer-agriculture-intelligence-feature-flag-contract-qa] passed");
