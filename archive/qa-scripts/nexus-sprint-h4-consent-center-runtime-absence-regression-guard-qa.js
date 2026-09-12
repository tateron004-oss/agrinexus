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

const docName = "NEXUS_SPRINT_H4_CONSENT_CENTER_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-h4-consent-center-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint H4 runtime absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint H4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const featureFlagModule = read("public", "nexus-consent-center-feature-flag.js");
const harnessSource = read("scripts", "nexus-sprint-h3-consent-center-flag-contract-harness.js");
const fixtures = loadConsentCenterFlagFixtures();

assertIncludes(doc, [
  "Sprint H4",
  "eb6bdf12f2f674de8a30a16557a7f81049502541",
  "documentation and QA only",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Sprint H5 - Consent Center Lane Closeout"
], "H4 runtime absence doc");

assertIncludes(doc, [
  "public/nexus-consent-center-contract.js",
  "public/nexus-consent-center-feature-flag.js",
  "scripts/nexus-sprint-h3-consent-center-flag-contract-harness.js",
  "fixtures/nexus/consent-center-feature-flags.json",
  "It intentionally does not ban the generic word consent"
], "H4 protected artifact list");

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
], "H4 blocked runtime behavior");

for (const prior of [
  ["docs", "NEXUS_SPRINT_H1_CONSENT_CENTER_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_H2_CONSENT_CENTER_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_H3_CONSENT_CENTER_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_CONSENT_CENTER_CONTRACT_PHASE_47.md"],
  ["public", "nexus-consent-center-contract.js"],
  ["public", "nexus-consent-center-feature-flag.js"],
  ["fixtures", "nexus", "consent-center-feature-flags.json"],
  ["scripts", "nexus-sprint-h3-consent-center-flag-contract-harness.js"]
]) {
  assert(exists(...prior), `Sprint H4 requires prior artifact: ${prior.join("/")}`);
}

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
  "dispatchConsentedAction"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Consent Center artifact: ${term}`);
}

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

const unsafeAttempt = normalizeConsentCenterFeatureFlagState({
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
assert.equal(unsafeAttempt.visibleUiAllowed, true);
assert.equal(unsafeAttempt.consentPersistenceAllowed, false);
assert.equal(unsafeAttempt.consentRevocationAllowed, false);
assert.equal(unsafeAttempt.auditWriteAllowed, false);
assert.equal(unsafeAttempt.providerHandoffAllowed, false);
assert.equal(unsafeAttempt.permissionPromptAllowed, false);
assert.equal(unsafeAttempt.backendWriteAllowed, false);
assert.equal(unsafeAttempt.storageWriteAllowed, false);
assert.equal(unsafeAttempt.networkAllowed, false);
assert.equal(unsafeAttempt.executionAuthority, false);
assert.equal(unsafeAttempt.noExecution, true);

const fixtureResult = validateConsentCenterFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "H3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "H3 fixtures must remain complete.");

for (const source of [featureFlagModule, harnessSource]) {
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
    "open(",
    "sendBeacon",
    "setItem",
    "postMessage",
    "window.nativeBridge",
    "nativeBridge.",
    "ACTION_CALL",
    "getUserMedia",
    "openWorkflow(",
    "goSection("
  ]) {
    assert(!source.includes(term), `H2/H3 artifact must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-h4-consent-center-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint H4 QA.");

console.log("[nexus-sprint-h4-consent-center-runtime-absence-regression-guard-qa] passed");
