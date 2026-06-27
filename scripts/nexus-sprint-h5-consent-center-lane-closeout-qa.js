const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE,
  normalizeConsentCenterFeatureFlagState
} = require("../public/nexus-consent-center-feature-flag.js");
const {
  loadConsentCenterFlagFixtures,
  validateConsentCenterFlagFixtures
} = require("./nexus-sprint-h3-consent-center-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_H5_CONSENT_CENTER_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-h5-consent-center-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint H5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint H5 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const consentContract = read("public", "nexus-consent-center-contract.js");
const featureFlagModule = read("public", "nexus-consent-center-feature-flag.js");
const h3Harness = read("scripts", "nexus-sprint-h3-consent-center-flag-contract-harness.js");
const fixtures = loadConsentCenterFlagFixtures();

assertIncludes(doc, [
  "Sprint H5",
  "e51860995bc16e6f22bb7b6837c69d085a3952fb",
  "documentation and deterministic QA only",
  "Sprint H Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Persistence And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint I1 - Identity Foundation Runtime Activation Readiness Gate"
], "H5 closeout doc");

assertIncludes(doc, [
  "Consent Center runtime activation readiness gate",
  "Consent Center feature flag contract",
  "Consent Center flag contract harness",
  "Consent Center runtime absence regression guard",
  "Consent Center lane closeout"
], "H5 sprint summary");

assertIncludes(doc, [
  "Consent Center readiness is not runtime activation",
  "Consent Center visibility readiness is not consent authority",
  "Consent can document a permission boundary, but consent is not execution",
  "enabled: false",
  "visibleUiAllowed: false",
  "consentPersistenceAllowed: false",
  "consentRevocationAllowed: false",
  "auditWriteAllowed: false",
  "providerHandoffAllowed: false",
  "permissionPromptAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "unsafe authority attempts normalize back to no-execution values",
  "no action has been taken"
], "H5 no-persistence and no-execution language");

assertIncludes(doc, [
  "visible Consent Center UI",
  "Consent Center buttons",
  "consent forms",
  "event handlers",
  "confirmation bypasses",
  "consent persistence",
  "consent revocation execution",
  "audit writes",
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
  "account or identity mutation",
  "external navigation",
  "fetch or network calls",
  "localStorage or sessionStorage writes",
  "backend writes",
  "real pending action creation",
  "execution authority"
], "H5 blocked runtime categories");

const requiredDocs = [
  "NEXUS_SPRINT_H1_CONSENT_CENTER_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_H2_CONSENT_CENTER_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_H3_CONSENT_CENTER_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_H4_CONSENT_CENTER_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_CONSENT_CENTER_CONTRACT_PHASE_47.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint H5 requires prior Consent Center doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-h1-consent-center-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-h2-consent-center-feature-flag-contract-qa.js",
  "nexus-sprint-h3-consent-center-flag-contract-harness-qa.js",
  "nexus-sprint-h4-consent-center-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint H5 requires prior Sprint H QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint H QA: ${requiredScript}`);
}

assert(exists("public", "nexus-consent-center-contract.js"), "Sprint H5 requires Phase 47 Consent Center contract.");
assert(exists("public", "nexus-consent-center-feature-flag.js"), "Sprint H5 requires H2 feature flag contract.");
assert(exists("fixtures", "nexus", "consent-center-feature-flags.json"), "Sprint H5 requires H3 feature flag fixture.");

assertIncludes(consentContract, [
  "consentRecordId",
  "consent.center.not_configured",
  "runtimeConsentAuthorityEnabled",
  "noExecution"
], "Phase 47 Consent Center contract");

assertIncludes(featureFlagModule, [
  "DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE",
  "NEXUS_CONSENT_CENTER_VISIBLE_ENABLED",
  "normalizeConsentCenterFeatureFlagState",
  "isConsentCenterVisibleFeatureEnabled",
  "executionAuthority",
  "noExecution"
], "H2 Consent Center feature flag module");

assertIncludes(h3Harness, [
  "loadConsentCenterFlagFixtures",
  "validateConsentCenterFlagFixtures"
], "H3 Consent Center harness");

assert.equal(DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.consentPersistenceAllowed, false);
assert.equal(DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.consentRevocationAllowed, false);
assert.equal(DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.auditWriteAllowed, false);
assert.equal(DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.providerHandoffAllowed, false);
assert.equal(DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.permissionPromptAllowed, false);
assert.equal(DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.backendWriteAllowed, false);
assert.equal(DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.storageWriteAllowed, false);
assert.equal(DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.networkAllowed, false);
assert.equal(DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.executionAuthority, false);
assert.equal(DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.noExecution, true);

const normalizedUnsafeAttempt = normalizeConsentCenterFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true,
  consentPersistenceAllowed: true,
  consentRevocationAllowed: true,
  auditWriteAllowed: true,
  providerHandoffAllowed: true,
  permissionPromptAllowed: true,
  backendWriteAllowed: true,
  storageWriteAllowed: true,
  networkAllowed: true,
  executionAuthority: true,
  noExecution: false
});

assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
assert.equal(normalizedUnsafeAttempt.consentPersistenceAllowed, false);
assert.equal(normalizedUnsafeAttempt.consentRevocationAllowed, false);
assert.equal(normalizedUnsafeAttempt.auditWriteAllowed, false);
assert.equal(normalizedUnsafeAttempt.providerHandoffAllowed, false);
assert.equal(normalizedUnsafeAttempt.permissionPromptAllowed, false);
assert.equal(normalizedUnsafeAttempt.backendWriteAllowed, false);
assert.equal(normalizedUnsafeAttempt.storageWriteAllowed, false);
assert.equal(normalizedUnsafeAttempt.networkAllowed, false);
assert.equal(normalizedUnsafeAttempt.executionAuthority, false);
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateConsentCenterFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "H3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "H3 fixtures must remain complete.");

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-consent-center-contract.js",
  "nexus-consent-center-feature-flag.js",
  "nexus-sprint-h3-consent-center-flag-contract-harness",
  "consent-center-feature-flags.json",
  "NEXUS_CONSENT_CENTER_VISIBLE_ENABLED",
  "normalizeConsentCenterFeatureFlagState",
  "isConsentCenterVisibleFeatureEnabled",
  "renderConsentCenter",
  "openConsentCenter",
  "persistConsentCenter",
  "revokeConsentCenter",
  "writeConsentAuditEvent",
  "executeConsentedAction",
  "dispatchConsentedAction",
  "nexus-sprint-h5-consent-center-lane-closeout"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Consent Center lane artifact: ${term}`);
}

for (const source of [featureFlagModule, h3Harness]) {
  for (const term of [
    "document.",
    "querySelector",
    "addEventListener",
    "fetch(",
    "XMLHttpRequest",
    "localStorage",
    "sessionStorage",
    "navigator.geolocation",
    "mediaDevices",
    "window.location",
    "location.href",
    "sendBeacon",
    "setItem",
    "window.nativeBridge",
    "nativeBridge.",
    "ACTION_CALL",
    "getUserMedia",
    "openWorkflow(",
    "goSection("
  ]) {
    assert(!source.includes(term), `Sprint H contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-h5-consent-center-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint H5 QA.");

console.log("[nexus-sprint-h5-consent-center-lane-closeout-qa] passed");
