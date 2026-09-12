const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_STATE,
  normalizeWorkforceIntelligenceFeatureFlagState
} = require("../public/nexus-workforce-intelligence-feature-flag.js");
const {
  protectedFields,
  loadWorkforceIntelligenceFlagFixtures,
  validateWorkforceIntelligenceFlagFixtures
} = require("./nexus-sprint-u3-workforce-intelligence-flag-contract-harness.js");

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

function assertRuntimeExcludes(source, terms, label) {
  for (const term of terms) {
    assert(!source.includes(term), `${label} must not runtime-load or activate Sprint U artifact: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_U5_WORKFORCE_INTELLIGENCE_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-u5-workforce-intelligence-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint U5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint U5 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-workforce-intelligence-readiness-contract.js");
const featureFlagModule = read("public", "nexus-workforce-intelligence-feature-flag.js");
const u3Harness = read("scripts", "nexus-sprint-u3-workforce-intelligence-flag-contract-harness.js");
const fixtures = loadWorkforceIntelligenceFlagFixtures();

assertIncludes(doc, [
  "Sprint U5",
  "aa07aff0ec821db9cdff52c63b0d9b95f225a162",
  "documentation and deterministic QA only",
  "Sprint U Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint V1 - Marketplace Intelligence Runtime Activation Readiness Gate"
], "U5 closeout doc");

assertIncludes(doc, [
  "Workforce Intelligence runtime activation readiness gate",
  "Workforce Intelligence feature flag contract",
  "Workforce Intelligence flag contract harness",
  "Workforce Intelligence runtime absence regression guard",
  "Workforce Intelligence lane closeout"
], "U5 sprint summary");

assertIncludes(doc, [
  "Workforce Intelligence readiness is not runtime activation",
  "Workforce Intelligence visibility readiness is not application, credential, provider, or payment authority",
  "workforce metadata is not source authority, factual authority, eligibility authority, employer authorization, program authorization, user consent, referral approval, application approval, credential approval, payment authorization, location consent, dispatch approval, or execution approval",
  "generated workforce text cannot authorize, stage, submit, contact, enroll, certify, pay, dispatch, or execute an action by itself",
  "enabled: false",
  "visibleUiAllowed: false",
  "workforcePathwayReviewAllowed: false",
  "sourceBackedWorkforceGuidancePreviewAllowed: false",
  "trainingPathwaySummaryPreviewAllowed: false",
  "jobPathwaySummaryPreviewAllowed: false",
  "providerEscalationPreviewAllowed: false",
  "workforceRuntimeAllowed: false",
  "liveWorkforceAdvisorAllowed: false",
  "sourceRetrievalRuntimeAllowed: false",
  "jobApplicationSubmissionAllowed: false",
  "referralSubmissionAllowed: false",
  "trainingEnrollmentExecutionAllowed: false",
  "credentialIssuanceAllowed: false",
  "certificateIssuanceAllowed: false",
  "eligibilityClaimAllowed: false",
  "employerProviderProgramContactAllowed: false",
  "providerConnectionClaimAllowed: false",
  "completedActionClaimAllowed: false",
  "paymentExecutionAllowed: false",
  "marketplaceTransactionAllowed: false",
  "identityAccountProfileActionAllowed: false",
  "locationSharingAllowed: false",
  "transportationDispatchAllowed: false",
  "emergencyDispatchAllowed: false",
  "communicationExecutionAllowed: false",
  "policyBypassAllowed: false",
  "confirmationBypassAllowed: false",
  "permissionBypassAllowed: false",
  "firstTurnExecutionAllowed: false",
  "laterTurnExecutionAllowed: false",
  "standardUserWorkforceBrainMutationAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "auditWriteAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "unsafe authority attempts normalize back to no-execution values",
  "no action has been taken"
], "U5 no-authority and no-execution language");

assertIncludes(doc, [
  "active Workforce Intelligence runtime",
  "live workforce advisor",
  "workforce intelligence runtime UI",
  "workforce pathway review buttons",
  "source-backed workforce guidance runtime retrieval",
  "training pathway summary preview UI from Sprint U artifacts",
  "job pathway summary preview UI from Sprint U artifacts",
  "provider escalation preview UI from Sprint U artifacts",
  "job application submission claims",
  "referral submission claims",
  "training enrollment execution claims",
  "credential issuance claims",
  "certificate issuance claims",
  "eligibility claims",
  "employer, provider, or workforce program contact claims",
  "payment completion claims",
  "marketplace transaction claims",
  "transportation dispatch claims",
  "emergency dispatch claims",
  "location sharing claims",
  "communication execution claims",
  "account or profile mutation claims",
  "provider connection claims",
  "completed action claims",
  "event handlers",
  "typed route mutation",
  "voice route mutation",
  "policy bypass",
  "confirmation bypass",
  "permission bypass",
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
  "external navigation",
  "real pending action creation",
  "execution authority"
], "U5 blocked runtime categories");

const requiredDocs = [
  "NEXUS_SPRINT_U1_WORKFORCE_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_U2_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_U3_WORKFORCE_INTELLIGENCE_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_U4_WORKFORCE_INTELLIGENCE_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_WORKFORCE_INTELLIGENCE_READINESS_CONTRACT_PHASE_73.md",
  "NEXUS_MARKETPLACE_INTELLIGENCE_READINESS_CONTRACT_PHASE_74.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint U5 requires prior or next-lane doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-u1-workforce-intelligence-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-u2-workforce-intelligence-feature-flag-contract-qa.js",
  "nexus-sprint-u3-workforce-intelligence-flag-contract-harness-qa.js",
  "nexus-sprint-u4-workforce-intelligence-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint U5 requires prior Sprint U QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint U QA: ${requiredScript}`);
}

assert(exists("public", "nexus-workforce-intelligence-readiness-contract.js"), "Sprint U5 requires Phase 73 Workforce Intelligence readiness contract.");
assert(exists("public", "nexus-workforce-intelligence-feature-flag.js"), "Sprint U5 requires U2 feature flag contract.");
assert(exists("fixtures", "nexus", "workforce-intelligence-feature-flags.json"), "Sprint U5 requires U3 feature flag fixture.");
assert(exists("public", "nexus-marketplace-intelligence-readiness-contract.js"), "Sprint U5 requires Phase 74 Marketplace Intelligence readiness contract for the next safe lane.");

assertIncludes(readinessContract, [
  "WORKFORCE_INTELLIGENCE_READINESS_CONTRACT",
  "workforce-intelligence.readiness.phase_73",
  "WORKFORCE_INTELLIGENCE_NO_EXECUTION_DEFAULTS",
  "createWorkforceIntelligenceReadinessContract",
  "executionAllowed: false",
  "liveConnectorEnabled: false",
  "providerExecutionEnabled: false",
  "regulatedActionEnabled: false",
  "provider_contact",
  "marketplace_transactions",
  "identity",
  "regulated_execution"
], "Phase 73 Workforce Intelligence readiness contract");

assertIncludes(featureFlagModule, [
  "DEFAULT_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_STATE",
  "NEXUS_WORKFORCE_INTELLIGENCE_VISIBLE_ENABLED",
  "normalizeWorkforceIntelligenceFeatureFlagState",
  "isWorkforceIntelligenceVisibleFeatureEnabled",
  "executionAuthority",
  "noExecution"
], "U2 Workforce Intelligence feature flag module");

assertIncludes(u3Harness, [
  "loadWorkforceIntelligenceFlagFixtures",
  "validateWorkforceIntelligenceFlagFixtures"
], "U3 Workforce Intelligence harness");

assert.equal(DEFAULT_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_STATE[field], false, `U5 default ${field} must remain false.`);
}
assert.equal(DEFAULT_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_STATE.noExecution, true);

const normalizedUnsafeAttempt = normalizeWorkforceIntelligenceFeatureFlagState({
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

assert.equal(normalizedUnsafeAttempt.enabled, true);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `U5 unsafe attempt for ${field} must normalize to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateWorkforceIntelligenceFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "U3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "U5 expects four U3 workforce feature flag fixtures.");

const runtimeForbiddenTerms = [
  "nexus-workforce-intelligence-readiness-contract.js",
  "nexus-workforce-intelligence-feature-flag.js",
  "nexus-sprint-u3-workforce-intelligence-flag-contract-harness",
  "workforce-intelligence-feature-flags.json",
  "NEXUS_WORKFORCE_INTELLIGENCE_VISIBLE_ENABLED",
  "NexusWorkforceIntelligenceFeatureFlagContract",
  "normalizeWorkforceIntelligenceFeatureFlagState",
  "isWorkforceIntelligenceVisibleFeatureEnabled",
  "workforceIntelligenceRuntime",
  "liveWorkforceAdvisor",
  "sourceRetrievalRuntime",
  "submitJobApplication(",
  "submitWorkforceReferral(",
  "enrollInTraining(",
  "issueCredential(",
  "contactWorkforceProvider("
];

assertRuntimeExcludes(index, runtimeForbiddenTerms, "public/index.html");
assertRuntimeExcludes(app, runtimeForbiddenTerms, "public/app.js");
assertRuntimeExcludes(server, runtimeForbiddenTerms, "server.js");

const alias = "qa:nexus-sprint-u5-workforce-intelligence-lane-closeout";
assert.equal(
  pkg.scripts[alias],
  "node scripts/nexus-sprint-u5-workforce-intelligence-lane-closeout-qa.js",
  "package.json must expose Sprint U5 QA alias."
);
assert(qaSuite.includes("scripts/nexus-sprint-u5-workforce-intelligence-lane-closeout-qa.js"), "qa-suite must include Sprint U5 QA.");

console.log("[nexus-sprint-u5-workforce-intelligence-lane-closeout-qa] passed");
