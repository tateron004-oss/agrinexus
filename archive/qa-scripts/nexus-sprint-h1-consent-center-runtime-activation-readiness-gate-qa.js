const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const consentContract = require("../public/nexus-consent-center-contract.js");

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

const docName = "NEXUS_SPRINT_H1_CONSENT_CENTER_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-h1-consent-center-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint H1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint H1 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const consentModuleSource = read("public", "nexus-consent-center-contract.js");
const phase47Doc = read("docs", "NEXUS_CONSENT_CENTER_CONTRACT_PHASE_47.md");
const auditDoc = read("docs", "NEXUS_AUDIT_LOG_RUNTIME_CONTRACT_PHASE_48.md");
const approvalDoc = read("docs", "NEXUS_APPROVAL_CENTER_CONTRACT_PHASE_49.md");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint H1",
  "f15daeb378b4a12533a926cbf254f6a7b763bcfa",
  "documentation and deterministic QA only",
  "Existing Foundation",
  "Activation Is Blocked Until",
  "Runtime Must Remain Disabled",
  "What H1 Does Not Enable",
  "Standard User Safety Posture",
  "Consent Is Not Execution",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint H2 - Consent Center Feature Flag Contract"
], "H1 readiness gate doc");

assertIncludes(doc, [
  "product owner approval",
  "privacy and compliance review",
  "purpose-specific consent language",
  "supported-language review",
  "user-visible purpose and scope display",
  "explicit user approval path",
  "cancellation path",
  "revocation path",
  "retention policy",
  "redaction policy",
  "consent store design",
  "consent store security review",
  "audit persistence design",
  "audit persistence approval",
  "role and identity policy",
  "provider policy review",
  "high-risk domain restrictions",
  "browser validation plan",
  "rollback plan",
  "deterministic QA coverage"
], "H1 activation preconditions");

assertIncludes(doc, [
  "consentStoreEnabled: false",
  "consentPersistenceEnabled: false",
  "consentUiEnabled: false",
  "runtimeConsentAuthorityEnabled: false",
  "providerContactEnabled: false",
  "healthActionEnabled: false",
  "telehealthActionEnabled: false",
  "pharmacyActionEnabled: false",
  "medicalRecordAccessEnabled: false",
  "locationSharingEnabled: false",
  "transportationDispatchEnabled: false",
  "paymentExecutionEnabled: false",
  "marketplaceTransactionEnabled: false",
  "workforceSubmissionEnabled: false",
  "emergencyDispatchEnabled: false",
  "accountMutationEnabled: false",
  "externalNavigationEnabled: false",
  "liveActionEnabled: false",
  "noExecution: true"
], "H1 disabled runtime defaults");

assertIncludes(doc, [
  "visible Consent Center UI",
  "consent buttons or forms",
  "consent persistence",
  "consent revocation execution",
  "audit writes",
  "backend writes",
  "localStorage writes",
  "sessionStorage writes",
  "IndexedDB writes",
  "network calls",
  "fetch or sendBeacon calls",
  "provider handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "payments",
  "marketplace transactions",
  "location sharing",
  "camera or microphone activation",
  "health, medical, pharmacy, prescription, or FHIR execution",
  "appointment scheduling",
  "transportation dispatch",
  "emergency dispatch",
  "account or identity mutation",
  "external navigation",
  "execution authority"
], "H1 blocked runtime categories");

for (const required of [
  ["docs", "NEXUS_CONSENT_CENTER_CONTRACT_PHASE_47.md"],
  ["public", "nexus-consent-center-contract.js"],
  ["scripts", "nexus-consent-center-contract-qa.js"],
  ["docs", "NEXUS_AUDIT_LOG_RUNTIME_CONTRACT_PHASE_48.md"],
  ["docs", "NEXUS_APPROVAL_CENTER_CONTRACT_PHASE_49.md"],
  ["docs", "NEXUS_SPRINT_E7_STAGED_ACTION_APPROVAL_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_SPRINT_F5_APPROVAL_CENTER_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_SPRINT_G5_APPROVAL_AUDIT_PERSISTENCE_LANE_CLOSEOUT.md"]
]) {
  assert(exists(...required), `Sprint H1 requires prior artifact: ${required.join("/")}`);
}

assert(phase47Doc.includes("Consent records must remain separate from execution authority."), "Phase 47 must separate consent from execution authority.");
assert(auditDoc.includes("consent_policy_required"), "Phase 48 audit contract must include consent policy coverage.");
assert(approvalDoc.includes("consent_policy_required"), "Phase 49 approval contract must include consent policy coverage.");

const safeDefaults = {
  noExecution: true,
  consentStoreEnabled: false,
  consentPersistenceEnabled: false,
  consentUiEnabled: false,
  runtimeConsentAuthorityEnabled: false,
  providerContactEnabled: false,
  healthActionEnabled: false,
  telehealthActionEnabled: false,
  pharmacyActionEnabled: false,
  medicalRecordAccessEnabled: false,
  locationSharingEnabled: false,
  transportationDispatchEnabled: false,
  paymentExecutionEnabled: false,
  marketplaceTransactionEnabled: false,
  workforceSubmissionEnabled: false,
  emergencyDispatchEnabled: false,
  accountMutationEnabled: false,
  externalNavigationEnabled: false,
  liveActionEnabled: false
};

for (const [key, value] of Object.entries(safeDefaults)) {
  assert.equal(consentContract.CONSENT_CENTER_CONTRACT[key], value, `Phase 47 consent contract must preserve ${key}`);
}

const unsafeConsent = consentContract.createConsentCenterRecord({
  consentStoreEnabled: true,
  consentPersistenceEnabled: true,
  consentUiEnabled: true,
  runtimeConsentAuthorityEnabled: true,
  providerContactEnabled: true,
  healthActionEnabled: true,
  telehealthActionEnabled: true,
  pharmacyActionEnabled: true,
  medicalRecordAccessEnabled: true,
  locationSharingEnabled: true,
  transportationDispatchEnabled: true,
  paymentExecutionEnabled: true,
  marketplaceTransactionEnabled: true,
  workforceSubmissionEnabled: true,
  emergencyDispatchEnabled: true,
  accountMutationEnabled: true,
  externalNavigationEnabled: true,
  liveActionEnabled: true,
  noExecution: false
});

for (const [key, value] of Object.entries(safeDefaults)) {
  assert.equal(unsafeConsent[key], value, `unsafe consent attempt must normalize ${key}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-consent-center-contract.js",
  "NexusConsentCenterContract",
  "createConsentCenterRecord",
  "CONSENT_CENTER_CONTRACT",
  "runtimeConsentAuthorityEnabled",
  "consentStoreEnabled",
  "persistConsent",
  "recordConsentCenter",
  "revokeExternalConsent",
  "openConsentCenter",
  "renderConsentCenter",
  "nexus-sprint-h1-consent-center-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Consent Center runtime authority: ${term}`);
}

for (const term of [
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "navigator.geolocation",
  "navigator.mediaDevices",
  "window.location",
  "location.href",
  "sendBeacon",
  "setItem",
  "window.nativeBridge",
  "nativeBridge.",
  "ACTION_CALL",
  "getUserMedia",
  "openWorkflow(",
  "goSection(",
  "writeFile",
  "appendFile",
  "createServer",
  "listen("
]) {
  assert(!consentModuleSource.includes(term), `Consent Center contract must not include runtime/write API: ${term}`);
}

const alias = "qa:nexus-sprint-h1-consent-center-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint H1 QA.");

console.log("[nexus-sprint-h1-consent-center-runtime-activation-readiness-gate-qa] passed");
