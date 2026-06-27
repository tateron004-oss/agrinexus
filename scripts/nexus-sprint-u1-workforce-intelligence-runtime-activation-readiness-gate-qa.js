const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  WORKFORCE_INTELLIGENCE_READINESS_CONTRACT,
  WORKFORCE_INTELLIGENCE_NO_EXECUTION_DEFAULTS,
  createWorkforceIntelligenceReadinessContract
} = require("../public/nexus-workforce-intelligence-readiness-contract.js");

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

const docName = "NEXUS_SPRINT_U1_WORKFORCE_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-u1-workforce-intelligence-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint U1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint U1 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContractSource = read("public", "nexus-workforce-intelligence-readiness-contract.js");
const t5Doc = read("docs", "NEXUS_SPRINT_T5_HEALTHCARE_ACCESS_INTELLIGENCE_LANE_CLOSEOUT.md");

assertIncludes(doc, [
  "Sprint U1",
  "e8dadcc83fc6359fee1571c7c3fc43828252bd31",
  "documentation and deterministic QA only",
  "Relationship To Prior Lanes",
  "Runtime Activation Preconditions",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Standard User Boundary",
  "Required Contract Invariants",
  "Restricted Domains",
  "Safe Copy Boundary",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint U2 - Workforce Intelligence Feature Flag Contract"
], "U1 readiness gate doc");

assertIncludes(doc, [
  "Sprint T5 - Healthcare Access Intelligence Lane Closeout",
  "Phase 73 - Workforce Intelligence Readiness Contract",
  "Healthcare Access Intelligence readiness is not workforce authority"
], "U1 relationship section");

assertIncludes(doc, [
  "product owner approval for a workforce intelligence runtime change",
  "verified workforce source or partner",
  "source attribution",
  "freshness label",
  "confidence label",
  "user consent boundary",
  "role and permission check",
  "explicit user approval for high-risk actions",
  "cancellation path",
  "audit decision record",
  "fallback path",
  "no unsupported live claim",
  "no completed action claim",
  "no job application submission",
  "no referral or program contact without active partner integration",
  "no credential, certificate, or enrollment claim without approved provider integration",
  "no employer or workforce provider contact without consent, confirmation, and audit",
  "no payment, fee, or marketplace transaction execution",
  "no identity/account/profile action without identity and consent controls",
  "no location sharing without user permission and visible scope",
  "Standard User runtime workforce brain mutation approval",
  "job pathway prompt coverage",
  "training pathway prompt coverage",
  "certification prompt coverage",
  "application boundary prompt coverage",
  "provider contact boundary prompt coverage",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "U1 activation preconditions");

assertIncludes(doc, [
  "public/nexus-workforce-intelligence-readiness-contract.js",
  "any future Workforce Intelligence feature flag",
  "any future Workforce Intelligence fixture harness",
  "any future live workforce advisor runtime",
  "any future workforce source retrieval runtime",
  "any future workforce provider handoff runtime",
  "any provider execution runtime",
  "Sprint U QA scripts"
], "U1 runtime absence requirements");

assertIncludes(doc, [
  "live workforce advisor execution",
  "job application submission",
  "referral submission",
  "training enrollment execution",
  "credential, certificate, or eligibility issuance",
  "employer, provider, program, or workforce partner contact execution",
  "calls or messages to programs",
  "payment execution",
  "marketplace transactions",
  "identity, account, or profile execution",
  "transportation dispatch",
  "emergency dispatch",
  "location sharing",
  "camera or microphone activation",
  "unsupported live data claims",
  "completed action claims",
  "source-backed workforce answer claims without sources",
  "stale data claims without freshness labels",
  "confidence-free source-backed claims",
  "typed route mutation",
  "voice route mutation",
  "policy bypass from workforce intelligence metadata",
  "confirmation bypass from workforce intelligence metadata",
  "permission bypass from workforce intelligence metadata",
  "permission prompts",
  "audit writes",
  "backend writes",
  "localStorage or sessionStorage writes",
  "fetch or network calls",
  "provider handoff",
  "native bridge dispatch",
  "WhatsApp, Telegram, SMS, or email sending",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "U1 blocked runtime behavior");

assertIncludes(doc, [
  "liveConnectorEnabled: false",
  "providerExecutionEnabled: false",
  "regulatedActionEnabled: false",
  "silentActionAllowed: false",
  "backgroundExecutionAllowed: false",
  "standardUserRuntimeMutationAllowed: false",
  "storageSideEffectAllowed: false",
  "networkSideEffectAllowed: false",
  "executionAllowed: false",
  "liveActionEnabled: false"
], "U1 contract invariants");

assertIncludes(doc, [
  "I can help compare workforce pathways and prepare next steps using verified sources, but applications, referrals, credentials, provider contact, and payments require configured partners, your approval, and audit controls.",
  "I submitted your job application.",
  "You are enrolled in the program.",
  "I contacted the employer.",
  "I issued your certificate.",
  "I verified your eligibility.",
  "I paid the training fee.",
  "I shared your profile."
], "U1 safe copy boundary");

assert(t5Doc.includes("Sprint U1 - Workforce Intelligence Runtime Activation Readiness Gate"), "Sprint T5 must recommend Sprint U1.");

assert.equal(WORKFORCE_INTELLIGENCE_READINESS_CONTRACT.contractId, "workforce-intelligence.readiness.phase_73");
assert.equal(WORKFORCE_INTELLIGENCE_READINESS_CONTRACT.readinessStatus, "blocked");
assert.equal(WORKFORCE_INTELLIGENCE_READINESS_CONTRACT.riskTier, "controlled");

for (const field of [
  "liveConnectorEnabled",
  "providerExecutionEnabled",
  "regulatedActionEnabled",
  "silentActionAllowed",
  "backgroundExecutionAllowed",
  "standardUserRuntimeMutationAllowed",
  "storageSideEffectAllowed",
  "networkSideEffectAllowed",
  "executionAllowed",
  "liveActionEnabled"
]) {
  assert.equal(WORKFORCE_INTELLIGENCE_NO_EXECUTION_DEFAULTS[field], false, `U1 default ${field} must be false.`);
  assert.equal(WORKFORCE_INTELLIGENCE_READINESS_CONTRACT[field], false, `U1 contract ${field} must be false.`);
}

const unsafeAttempt = createWorkforceIntelligenceReadinessContract({
  actionType: "prepare_workforce_intelligence_summary",
  liveConnectorEnabled: true,
  providerExecutionEnabled: true,
  regulatedActionEnabled: true,
  silentActionAllowed: true,
  backgroundExecutionAllowed: true,
  standardUserRuntimeMutationAllowed: true,
  storageSideEffectAllowed: true,
  networkSideEffectAllowed: true,
  executionAllowed: true,
  liveActionEnabled: true
});

assert.equal(unsafeAttempt.actionType, "prepare_workforce_intelligence_summary");
for (const field of [
  "liveConnectorEnabled",
  "providerExecutionEnabled",
  "regulatedActionEnabled",
  "silentActionAllowed",
  "backgroundExecutionAllowed",
  "standardUserRuntimeMutationAllowed",
  "storageSideEffectAllowed",
  "networkSideEffectAllowed",
  "executionAllowed",
  "liveActionEnabled"
]) {
  assert.equal(unsafeAttempt[field], false, `U1 factory must force ${field}=false.`);
}

for (const requiredPath of [
  ["docs", "NEXUS_WORKFORCE_INTELLIGENCE_READINESS_CONTRACT_PHASE_73.md"],
  ["public", "nexus-workforce-intelligence-readiness-contract.js"],
  ["scripts", "nexus-workforce-intelligence-readiness-contract-qa.js"],
  ["docs", "NEXUS_SPRINT_T5_HEALTHCARE_ACCESS_INTELLIGENCE_LANE_CLOSEOUT.md"]
]) {
  assert(exists(...requiredPath), `U1 requires artifact: ${requiredPath.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-workforce-intelligence-readiness-contract.js",
  "NexusWorkforceIntelligenceReadinessContract",
  "workforce-intelligence.readiness.phase_73",
  "WORKFORCE_INTELLIGENCE_READINESS_CONTRACT",
  "workforceIntelligenceRuntime",
  "liveWorkforceAdvisor",
  "submitJobApplication(",
  "contactWorkforceProvider(",
  "issueCredential(",
  "enrollInTraining(",
  "nexus-sprint-u1-workforce-intelligence-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Workforce Intelligence lane artifact: ${term}`);
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
  "contactWorkforceProvider(",
  "issueCredential(",
  "enrollInTraining("
]) {
  assert(!readinessContractSource.includes(term), `Phase 73 contract module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-u1-workforce-intelligence-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint U1 QA.");

console.log("[nexus-sprint-u1-workforce-intelligence-runtime-activation-readiness-gate-qa] passed");
