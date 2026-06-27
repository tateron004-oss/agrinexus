const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  WORKFORCE_INTELLIGENCE_FEATURE_FLAG_NAME,
  DEFAULT_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_STATE,
  PROTECTED_WORKFORCE_INTELLIGENCE_FLAG_FIELDS,
  normalizeWorkforceIntelligenceFeatureFlagState,
  isWorkforceIntelligenceVisibleFeatureEnabled
} = require("../public/nexus-workforce-intelligence-feature-flag.js");

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

const docName = "NEXUS_SPRINT_U2_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-workforce-intelligence-feature-flag.js";
const qaName = "nexus-sprint-u2-workforce-intelligence-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint U2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint U2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint U2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const readinessContract = read("public", "nexus-workforce-intelligence-readiness-contract.js");
const u1Doc = read("docs", "NEXUS_SPRINT_U1_WORKFORCE_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint U2",
  "b72f1fae09eca081b6076028bdbb71a8eb99f48c",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_WORKFORCE_INTELLIGENCE_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Relationship To Sprint U1",
  "Runtime Absence Requirements",
  "QA Expectations",
  "Sprint U3 - Workforce Intelligence Flag Contract Harness"
], "U2 feature flag doc");

assert(readinessContract.includes("workforce-intelligence.readiness.phase_73"), "U2 must build on the Phase 73 Workforce Intelligence readiness contract.");
assert(readinessContract.includes("liveConnectorEnabled: false"), "Phase 73 live connector default must remain false.");
assert(readinessContract.includes("providerExecutionEnabled: false"), "Phase 73 provider execution default must remain false.");
assert(readinessContract.includes("regulatedActionEnabled: false"), "Phase 73 regulated action default must remain false.");
assert(readinessContract.includes("executionAllowed: false"), "Phase 73 execution default must remain false.");
assert(u1Doc.includes("Sprint U2 - Workforce Intelligence Feature Flag Contract"), "U1 must recommend Sprint U2.");

assert.equal(WORKFORCE_INTELLIGENCE_FEATURE_FLAG_NAME, "NEXUS_WORKFORCE_INTELLIGENCE_VISIBLE_ENABLED");
assert.equal(DEFAULT_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_STATE.noExecution, true);

for (const field of PROTECTED_WORKFORCE_INTELLIGENCE_FLAG_FIELDS) {
  assert.equal(DEFAULT_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `U2 doc must document ${field}: false.`);
}

const defaultState = normalizeWorkforceIntelligenceFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isWorkforceIntelligenceVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeWorkforceIntelligenceFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isWorkforceIntelligenceVisibleFeatureEnabled(visibleOnly), true);
for (const field of PROTECTED_WORKFORCE_INTELLIGENCE_FLAG_FIELDS) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

const unsafeAttempt = normalizeWorkforceIntelligenceFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true,
  workforcePathwayReviewAllowed: true,
  sourceBackedWorkforceGuidancePreviewAllowed: true,
  trainingPathwaySummaryPreviewAllowed: true,
  jobPathwaySummaryPreviewAllowed: true,
  providerEscalationPreviewAllowed: true,
  workforceRuntimeAllowed: true,
  liveWorkforceAdvisorAllowed: true,
  sourceRetrievalRuntimeAllowed: true,
  jobApplicationSubmissionAllowed: true,
  referralSubmissionAllowed: true,
  trainingEnrollmentExecutionAllowed: true,
  credentialIssuanceAllowed: true,
  certificateIssuanceAllowed: true,
  eligibilityClaimAllowed: true,
  employerProviderProgramContactAllowed: true,
  providerConnectionClaimAllowed: true,
  completedActionClaimAllowed: true,
  paymentExecutionAllowed: true,
  marketplaceTransactionAllowed: true,
  identityAccountProfileActionAllowed: true,
  locationSharingAllowed: true,
  transportationDispatchAllowed: true,
  emergencyDispatchAllowed: true,
  communicationExecutionAllowed: true,
  policyBypassAllowed: true,
  confirmationBypassAllowed: true,
  permissionBypassAllowed: true,
  firstTurnExecutionAllowed: true,
  laterTurnExecutionAllowed: true,
  standardUserWorkforceBrainMutationAllowed: true,
  backendWriteAllowed: true,
  storageWriteAllowed: true,
  networkAllowed: true,
  auditWriteAllowed: true,
  executionAuthority: true,
  noExecution: false
});
assert.equal(unsafeAttempt.visibleUiAllowed, true);
for (const field of PROTECTED_WORKFORCE_INTELLIGENCE_FLAG_FIELDS) {
  assert.equal(unsafeAttempt[field], false, `unsafe attempt must keep ${field}=false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
  "NEXUS_WORKFORCE_INTELLIGENCE_VISIBLE_ENABLED",
  "NexusWorkforceIntelligenceFeatureFlagContract",
  "normalizeWorkforceIntelligenceFeatureFlagState",
  "isWorkforceIntelligenceVisibleFeatureEnabled",
  "workforceIntelligenceRuntime",
  "liveWorkforceAdvisor",
  "submitJobApplication(",
  "submitWorkforceReferral(",
  "enrollInTraining(",
  "issueCredential(",
  "contactWorkforceProvider("
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Workforce Intelligence feature flag artifact: ${term}`);
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
  "submitJobApplication(",
  "submitWorkforceReferral(",
  "enrollInTraining(",
  "issueCredential(",
  "contactWorkforceProvider("
]) {
  assert(!moduleSource.includes(term), `U2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-u2-workforce-intelligence-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint U2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-u1-workforce-intelligence-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint U1 QA.");

console.log("[nexus-sprint-u2-workforce-intelligence-feature-flag-contract-qa] passed");
