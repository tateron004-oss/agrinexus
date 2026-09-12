const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

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

const docName = "NEXUS_SPRINT_H2_CONSENT_CENTER_FEATURE_FLAG_CONTRACT.md";
const qaName = "nexus-sprint-h2-consent-center-feature-flag-contract-qa.js";
const moduleName = "nexus-consent-center-feature-flag.js";

assert(exists("docs", docName), "Sprint H2 feature flag contract doc must exist.");
assert(exists("scripts", qaName), "Sprint H2 QA script must exist.");
assert(exists("public", moduleName), "Sprint H2 inert feature flag module must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const flagContract = require(path.join(root, "public", moduleName));
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint H2",
  "379a16ee33976aaf3e380e44e35eb68e44fa1f05",
  "default-off Consent Center feature flag contract",
  "standalone inert contract module",
  "NEXUS_CONSENT_CENTER_VISIBLE_ENABLED",
  "Default State",
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
  "An enabled feature flag is not enough to activate consent authority",
  "Sprint H3 - Consent Center Flag Contract Harness"
], "H2 feature flag doc");

assertIncludes(doc, [
  "runtime imports",
  "script tags",
  "event handlers",
  "Consent Center buttons",
  "consent persistence",
  "consent revocation execution",
  "audit writes",
  "backend writes",
  "localStorage or sessionStorage writes",
  "IndexedDB writes",
  "fetch or network calls",
  "provider handoff",
  "native bridge calls",
  "permission prompts",
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
], "H2 prohibited behavior");

assert.equal(flagContract.CONSENT_CENTER_FEATURE_FLAG_NAME, "NEXUS_CONSENT_CENTER_VISIBLE_ENABLED");
assert.equal(flagContract.DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.enabled, false);
assert.equal(flagContract.DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(flagContract.DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.consentPersistenceAllowed, false);
assert.equal(flagContract.DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.consentRevocationAllowed, false);
assert.equal(flagContract.DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.auditWriteAllowed, false);
assert.equal(flagContract.DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.providerHandoffAllowed, false);
assert.equal(flagContract.DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.permissionPromptAllowed, false);
assert.equal(flagContract.DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.backendWriteAllowed, false);
assert.equal(flagContract.DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.storageWriteAllowed, false);
assert.equal(flagContract.DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.networkAllowed, false);
assert.equal(flagContract.DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.executionAuthority, false);
assert.equal(flagContract.DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE.noExecution, true);
assert(Object.isFrozen(flagContract.DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE), "default flag state must be frozen.");

const defaultNormalized = flagContract.normalizeConsentCenterFeatureFlagState();
assert.equal(defaultNormalized.enabled, false);
assert.equal(flagContract.isConsentCenterVisibleFeatureEnabled(defaultNormalized), false);

const unsafeAttempt = flagContract.normalizeConsentCenterFeatureFlagState({
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

assert.equal(unsafeAttempt.enabled, true);
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
assert.equal(flagContract.isConsentCenterVisibleFeatureEnabled(unsafeAttempt), true);

assertIncludes(moduleSource, [
  "CONSENT_CENTER_FEATURE_FLAG_NAME",
  "DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE",
  "normalizeConsentCenterFeatureFlagState",
  "isConsentCenterVisibleFeatureEnabled",
  "executionAuthority: false",
  "noExecution: true"
], "H2 module source");

for (const forbidden of [
  "document.",
  "querySelector",
  "addEventListener",
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "indexedDB",
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
  assert(!moduleSource.includes(forbidden), `H2 feature flag module must not include runtime API: ${forbidden}`);
}

for (const runtimeSource of [index, app, server]) {
  assert(!runtimeSource.includes(moduleName), "H2 feature flag module must not be runtime-loaded.");
  assert(!runtimeSource.includes("NEXUS_CONSENT_CENTER_VISIBLE_ENABLED"), "H2 feature flag must not be active in runtime files.");
  assert(!runtimeSource.includes("NexusConsentCenterFeatureFlagContract"), "H2 feature flag global must not be active in runtime files.");
}

assert(exists("docs", "NEXUS_SPRINT_H1_CONSENT_CENTER_RUNTIME_ACTIVATION_READINESS_GATE.md"), "H2 requires H1 readiness gate doc.");
assert(exists("docs", "NEXUS_CONSENT_CENTER_CONTRACT_PHASE_47.md"), "H2 requires Phase 47 Consent Center contract doc.");
assert(exists("public", "nexus-consent-center-contract.js"), "H2 requires Phase 47 Consent Center contract module.");

const alias = "qa:nexus-sprint-h2-consent-center-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint H2 QA.");

console.log("[nexus-sprint-h2-consent-center-feature-flag-contract-qa] passed");
