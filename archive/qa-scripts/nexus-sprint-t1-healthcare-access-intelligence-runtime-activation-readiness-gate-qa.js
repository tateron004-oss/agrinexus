const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  HEALTHCARE_ACCESS_INTELLIGENCE_READINESS_CONTRACT,
  HEALTHCARE_ACCESS_INTELLIGENCE_NO_EXECUTION_DEFAULTS,
  createHealthcareAccessIntelligenceReadinessContract
} = require("../public/nexus-healthcare-access-intelligence-readiness-contract.js");

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

const docName = "NEXUS_SPRINT_T1_HEALTHCARE_ACCESS_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-t1-healthcare-access-intelligence-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint T1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint T1 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContractSource = read("public", "nexus-healthcare-access-intelligence-readiness-contract.js");
const s5Doc = read("docs", "NEXUS_SPRINT_S5_FARMER_AGRICULTURE_INTELLIGENCE_LANE_CLOSEOUT.md");

assertIncludes(doc, [
  "Sprint T1",
  "291f1bc6ec9e12a30ba0388976fa41bc80fc80a0",
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
  "Sprint T2 - Healthcare Access Intelligence Feature Flag Contract"
], "T1 readiness gate doc");

assertIncludes(doc, [
  "Sprint S5 - Farmer Agriculture Intelligence Lane Closeout",
  "Phase 72 - Healthcare Access Intelligence Readiness Contract",
  "Farmer Agriculture Intelligence readiness is not healthcare access authority"
], "T1 relationship section");

assertIncludes(doc, [
  "product owner approval for a healthcare access intelligence runtime change",
  "verified healthcare source or partner",
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
  "no medical diagnosis claim",
  "no prescription or refill execution",
  "no provider connection claim without an active provider integration",
  "no telehealth session execution without integration, consent, and audit",
  "no pharmacy execution without partner integration and compliance controls",
  "no medical record or FHIR access without consent, identity, authorization, and audit",
  "no location sharing without user permission and visible scope",
  "no emergency dispatch without approved emergency integration and explicit boundaries",
  "no camera or microphone activation outside existing permissioned flows",
  "Standard User runtime healthcare brain mutation approval",
  "representative prompt set",
  "telehealth prompt coverage",
  "pharmacy support prompt coverage",
  "mobile clinic prompt coverage",
  "transportation-to-care prompt coverage",
  "provider contact boundary prompt coverage",
  "emergency boundary prompt coverage",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "T1 activation preconditions");

assertIncludes(doc, [
  "public/nexus-healthcare-access-intelligence-readiness-contract.js",
  "any future Healthcare Access Intelligence feature flag",
  "any future Healthcare Access Intelligence fixture harness",
  "any future live healthcare advisor runtime",
  "any future healthcare source retrieval runtime",
  "any future telehealth provider handoff runtime",
  "any future pharmacy provider handoff runtime",
  "any provider execution runtime",
  "Sprint T QA scripts"
], "T1 runtime absence requirements");

assertIncludes(doc, [
  "live healthcare access advisor execution",
  "medical diagnosis claims",
  "medical advice or treatment claims",
  "prescription or refill execution",
  "pharmacy workflow execution",
  "clinic, provider, or telehealth contact execution",
  "telehealth session launch",
  "medical records or FHIR access",
  "payment execution",
  "provider or pharmacy connection claims",
  "transportation dispatch",
  "emergency dispatch",
  "location sharing",
  "camera or microphone activation",
  "unsupported live data claims",
  "completed action claims",
  "source-backed health answer claims without sources",
  "stale data claims without freshness labels",
  "confidence-free source-backed claims",
  "regulated advice without a boundary",
  "typed route mutation",
  "voice route mutation",
  "policy bypass from healthcare intelligence metadata",
  "confirmation bypass from healthcare intelligence metadata",
  "permission bypass from healthcare intelligence metadata",
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
  "marketplace transactions",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "T1 blocked runtime behavior");

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
], "T1 contract invariants");

assertIncludes(doc, [
  "I can help guide healthcare access steps using verified sources, but I cannot diagnose, prescribe, connect to a provider, or execute regulated actions unless the required integration, consent, permission, and audit controls are active.",
  "I diagnosed your condition.",
  "Your prescription is refilled.",
  "I connected you to a doctor.",
  "I started a telehealth visit.",
  "I accessed your medical records.",
  "I dispatched emergency help."
], "T1 safe copy boundary");

assert(s5Doc.includes("Sprint T1 - Healthcare Access Intelligence Runtime Activation Readiness Gate"), "Sprint S5 must recommend Sprint T1.");

assert.equal(HEALTHCARE_ACCESS_INTELLIGENCE_READINESS_CONTRACT.contractId, "healthcare-access-intelligence.readiness.phase_72");
assert.equal(HEALTHCARE_ACCESS_INTELLIGENCE_READINESS_CONTRACT.readinessStatus, "blocked");
assert.equal(HEALTHCARE_ACCESS_INTELLIGENCE_READINESS_CONTRACT.riskTier, "high");

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
  assert.equal(HEALTHCARE_ACCESS_INTELLIGENCE_NO_EXECUTION_DEFAULTS[field], false, `T1 default ${field} must be false.`);
  assert.equal(HEALTHCARE_ACCESS_INTELLIGENCE_READINESS_CONTRACT[field], false, `T1 contract ${field} must be false.`);
}

const unsafeAttempt = createHealthcareAccessIntelligenceReadinessContract({
  actionType: "prepare_healthcare_access_intelligence_summary",
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

assert.equal(unsafeAttempt.actionType, "prepare_healthcare_access_intelligence_summary");
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
  assert.equal(unsafeAttempt[field], false, `T1 factory must force ${field}=false.`);
}

for (const requiredPath of [
  ["docs", "NEXUS_HEALTHCARE_ACCESS_INTELLIGENCE_READINESS_CONTRACT_PHASE_72.md"],
  ["public", "nexus-healthcare-access-intelligence-readiness-contract.js"],
  ["scripts", "nexus-healthcare-access-intelligence-readiness-contract-qa.js"],
  ["docs", "NEXUS_SPRINT_S5_FARMER_AGRICULTURE_INTELLIGENCE_LANE_CLOSEOUT.md"]
]) {
  assert(exists(...requiredPath), `T1 requires artifact: ${requiredPath.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-healthcare-access-intelligence-readiness-contract.js",
  "NexusHealthcareAccessIntelligenceReadinessContract",
  "healthcare-access-intelligence.readiness.phase_72",
  "HEALTHCARE_ACCESS_INTELLIGENCE_READINESS_CONTRACT",
  "healthcareAccessIntelligenceRuntime",
  "liveHealthcareAdvisor",
  "executeHealthcareAccess(",
  "connectTelehealthProvider(",
  "executePrescriptionRefill(",
  "accessMedicalRecords(",
  "dispatchEmergencyHelp(",
  "nexus-sprint-t1-healthcare-access-intelligence-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Healthcare Access Intelligence lane artifact: ${term}`);
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
  "executeHealthcareAccess(",
  "connectTelehealthProvider(",
  "executePrescriptionRefill(",
  "accessMedicalRecords(",
  "dispatchEmergencyHelp("
]) {
  assert(!readinessContractSource.includes(term), `Phase 72 contract module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-t1-healthcare-access-intelligence-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint T1 QA.");

console.log("[nexus-sprint-t1-healthcare-access-intelligence-runtime-activation-readiness-gate-qa] passed");
