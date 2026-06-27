const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  MULTILINGUAL_INTELLIGENCE_SUPPORTED_LANGUAGES,
  MULTILINGUAL_INTELLIGENCE_REQUIRED_PRECONDITIONS,
  MULTILINGUAL_INTELLIGENCE_RESTRICTED_DOMAINS,
  MULTILINGUAL_INTELLIGENCE_NO_EXECUTION_DEFAULTS,
  MULTILINGUAL_INTELLIGENCE_READINESS_CONTRACT,
  createMultilingualIntelligenceReadinessContract
} = require("../public/nexus-multilingual-intelligence-readiness-contract.js");

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

const docName = "NEXUS_SPRINT_R1_MULTILINGUAL_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-r1-multilingual-intelligence-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint R1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint R1 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contractSource = read("public", "nexus-multilingual-intelligence-readiness-contract.js");

assertIncludes(doc, [
  "Sprint R1",
  "50c0011efd09c02beb7855a19d9a5d0569cbe99e",
  "documentation and deterministic QA only",
  "Relationship To Prior Lanes",
  "Runtime Activation Preconditions",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Standard User Boundary",
  "Required Contract Invariants",
  "Supported Baseline Languages",
  "Restricted Domains",
  "Safe Copy Boundary",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint R2 - Multilingual Intelligence Feature Flag Contract"
], "R1 readiness gate doc");

assertIncludes(doc, [
  "Sprint Q5 - Natural Response Generation Lane Closeout",
  "Phase 70 - Multilingual Intelligence Readiness Contract",
  "Natural response readiness is not multilingual authority",
  "Multilingual support must never become consent, clinical interpretation certification, provider authorization, credential use, source authority, medical advice, diagnosis, prescription, payment completion, emergency dispatch, communication completion, location sharing approval, or execution approval"
], "R1 relationship language");

assertIncludes(doc, [
  "approved supported language list",
  "reviewed locale detection boundary",
  "user-selected language path",
  "no automatic language switching without user signal",
  "translation review path",
  "clinical interpretation boundary",
  "no medical interpretation certification claim",
  "no clinical interpretation claim",
  "source trace preserved across language",
  "freshness label preserved across language",
  "confidence label preserved across language",
  "unsupported language fallback text path",
  "human language support escalation copy",
  "regulated language use audit decision record",
  "no provider execution from language switch",
  "no call or message execution from language switch",
  "no payment execution from language switch",
  "no prescription or refill translation execution",
  "no emergency dispatch translation execution",
  "no location or camera activation from language switch",
  "Standard User runtime language engine replacement approval",
  "English prompt coverage",
  "Spanish prompt coverage",
  "French prompt coverage",
  "Arabic prompt coverage",
  "Portuguese prompt coverage",
  "Swahili prompt coverage",
  "voice prompt coverage",
  "typed prompt coverage",
  "ambiguity fallback",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "R1 activation preconditions");

assertIncludes(doc, [
  "live translation provider execution",
  "automatic language switching without user signal",
  "clinical interpretation claim",
  "medical translation certification claim",
  "provider execution from language switch",
  "call or message execution from language switch",
  "payment execution from language switch",
  "medical record translation execution",
  "prescription or refill translation execution",
  "emergency dispatch translation execution",
  "location or camera activation from language switch",
  "Standard User runtime language engine replacement",
  "unsupported live data claims",
  "provider connection claims",
  "completed action claims",
  "medical diagnosis claims",
  "payment completion claims",
  "marketplace transaction claims",
  "emergency dispatch claims",
  "call or message sent claims",
  "policy bypass from translated text",
  "confirmation bypass from translated text",
  "permission bypass from translated text",
  "permission prompts",
  "audit writes",
  "backend writes",
  "localStorage or sessionStorage writes",
  "fetch or network calls",
  "provider handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "payment execution",
  "marketplace transactions",
  "location sharing",
  "camera or microphone activation",
  "appointment scheduling",
  "transportation dispatch",
  "emergency dispatch",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "R1 blocked behavior");

for (const language of ["English", "Spanish", "French", "Arabic", "Portuguese", "Swahili"]) {
  assert(MULTILINGUAL_INTELLIGENCE_SUPPORTED_LANGUAGES.includes(language), `Phase 70 contract must include ${language}.`);
  assert(doc.includes(language), `R1 doc must include language ${language}.`);
}

for (const precondition of [
  "supportedLanguageList",
  "localeDetectionBoundary",
  "userSelectedLanguage",
  "translationReviewPath",
  "clinicalInterpretationBoundary",
  "sourceTracePreservedAcrossLanguage",
  "freshnessLabelPreservedAcrossLanguage",
  "confidenceLabelPreservedAcrossLanguage",
  "fallbackTextPath",
  "humanLanguageSupportEscalationCopy",
  "auditDecisionRecordForRegulatedLanguageUse",
  "noMedicalInterpretationClaim",
  "noProviderExecutionFromLanguageSwitch",
  "regressionSuiteCoverage"
]) {
  assert(MULTILINGUAL_INTELLIGENCE_REQUIRED_PRECONDITIONS.includes(precondition), `Phase 70 contract must include ${precondition}.`);
}

for (const domain of [
  "healthcare",
  "medical_records",
  "pharmacy",
  "payments",
  "location",
  "communications",
  "provider_contact",
  "marketplace_transactions",
  "emergency",
  "transportation_dispatch",
  "identity",
  "account_profile",
  "role_authorization"
]) {
  assert(MULTILINGUAL_INTELLIGENCE_RESTRICTED_DOMAINS.includes(domain), `Phase 70 contract must include restricted domain ${domain}.`);
  assert(doc.includes(domain), `R1 doc must include restricted domain ${domain}.`);
}

for (const field of [
  "liveTranslationProviderEnabled",
  "automaticLanguageSwitchingEnabled",
  "clinicalInterpretationClaimAllowed",
  "medicalTranslationCertificationClaimAllowed",
  "providerExecutionFromLanguageSwitchEnabled",
  "regulatedTranslationExecutionEnabled",
  "standardUserLanguageEngineMutationAllowed",
  "executionAllowed",
  "liveActionEnabled"
]) {
  assert.equal(MULTILINGUAL_INTELLIGENCE_NO_EXECUTION_DEFAULTS[field], false, `${field} must default false.`);
  assert.equal(MULTILINGUAL_INTELLIGENCE_READINESS_CONTRACT[field], false, `${field} must remain false on default contract.`);
  assert(doc.includes(`${field}: false`), `R1 doc must list ${field}: false.`);
}

const unsafeOverride = createMultilingualIntelligenceReadinessContract({
  actionType: "prepare_localized_response",
  liveTranslationProviderEnabled: true,
  automaticLanguageSwitchingEnabled: true,
  clinicalInterpretationClaimAllowed: true,
  medicalTranslationCertificationClaimAllowed: true,
  providerExecutionFromLanguageSwitchEnabled: true,
  regulatedTranslationExecutionEnabled: true,
  standardUserLanguageEngineMutationAllowed: true,
  executionAllowed: true,
  liveActionEnabled: true
});

assert.equal(unsafeOverride.actionType, "prepare_localized_response");
assert.equal(unsafeOverride.phase, "70");
assert.equal(unsafeOverride.readinessStatus, "blocked");
assert.equal(unsafeOverride.riskTier, "controlled");
for (const field of Object.keys(MULTILINGUAL_INTELLIGENCE_NO_EXECUTION_DEFAULTS)) {
  assert.equal(unsafeOverride[field], false, `Factory must force unsafe override ${field} back to false.`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-multilingual-intelligence-readiness-contract.js",
  "NexusMultilingualIntelligenceReadinessContract",
  "MULTILINGUAL_INTELLIGENCE_READINESS_CONTRACT",
  "createMultilingualIntelligenceReadinessContract",
  "multilingualIntelligenceRuntime",
  "liveTranslationProvider",
  "translateLive(",
  "callInterpreter(",
  "executeLanguageAction(",
  "nexus-sprint-r1-multilingual-intelligence-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Multilingual Intelligence lane artifact: ${term}`);
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
  "translateLive(",
  "callInterpreter(",
  "executeLanguageAction("
]) {
  assert(!contractSource.includes(term), `Phase 70 contract must not include runtime API: ${term}`);
}

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_Q5_NATURAL_RESPONSE_GENERATION_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_MULTILINGUAL_INTELLIGENCE_READINESS_CONTRACT_PHASE_70.md"],
  ["public", "nexus-multilingual-intelligence-readiness-contract.js"],
  ["scripts", "nexus-multilingual-intelligence-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `R1 requires artifact: ${requiredPath.join("/")}`);
}

const alias = "qa:nexus-sprint-r1-multilingual-intelligence-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint R1 QA.");

console.log("[nexus-sprint-r1-multilingual-intelligence-runtime-activation-readiness-gate-qa] passed");
