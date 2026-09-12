const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_NAME,
  DEFAULT_LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_STATE,
  PROTECTED_LOCAL_LANGUAGE_PACK_MODE_FLAG_FIELDS,
  normalizeLocalLanguagePackModeFeatureFlagState,
  isLocalLanguagePackModeVisibleFeatureEnabled
} = require("../public/nexus-local-language-pack-mode-feature-flag.js");

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

const docName = "NEXUS_SPRINT_AL2_LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_CONTRACT.md";
const qaName = "nexus-sprint-al2-local-language-pack-mode-feature-flag-contract-qa.js";
const moduleName = "nexus-local-language-pack-mode-feature-flag.js";

assert(exists("docs", docName), "Sprint AL2 feature flag doc must exist.");
assert(exists("public", moduleName), "Sprint AL2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint AL2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const al1Doc = read("docs", "NEXUS_SPRINT_AL1_LOCAL_LANGUAGE_PACK_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md");
const phase90Contract = read("public", "nexus-local-language-pack-mode-readiness-contract.js");
const runtime = [read("public", "index.html"), read("public", "app.js"), read("server.js")].join("\n");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert.equal(LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_NAME, "NEXUS_LOCAL_LANGUAGE_PACK_MODE_VISIBLE_ENABLED");
assert.equal(DEFAULT_LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_STATE.flagName, LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_NAME);
assert.equal(DEFAULT_LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_STATE.noExecution, true);
assert(PROTECTED_LOCAL_LANGUAGE_PACK_MODE_FLAG_FIELDS.length >= 80, "Local Language Pack Mode protected field list must stay comprehensive.");

assertIncludes(doc, [
  "Sprint AL2",
  "29cc426ba04da6ebdd42a61aed661d564b24fc1e",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_LOCAL_LANGUAGE_PACK_MODE_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Relationship To Sprint AL1",
  "Runtime Absence Requirements",
  "Protected No-Execution Fields",
  "QA Expectations",
  "Sprint AL3 - Local Language Pack Mode Flag Contract Harness"
], "AL2 feature flag doc");

assert(al1Doc.includes("Sprint AL2 - Local Language Pack Mode Feature Flag Contract"), "AL1 must recommend Sprint AL2.");
assertIncludes(phase90Contract, [
  "LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT",
  "local-language-pack-mode.readiness.phase_90",
  "pack install safe",
  "LOCAL_LANGUAGE_PACK_MODE_NO_EXECUTION_DEFAULTS"
], "Phase 90 Local Language Pack Mode readiness contract");

for (const field of PROTECTED_LOCAL_LANGUAGE_PACK_MODE_FLAG_FIELDS) {
  assert.equal(DEFAULT_LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_STATE[field], false, `Default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `AL2 doc must document ${field}: false.`);
}

const defaultState = normalizeLocalLanguagePackModeFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isLocalLanguagePackModeVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeLocalLanguagePackModeFeatureFlagState({ enabled: true, visibleUiAllowed: true });
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(visibleOnly.noExecution, true);
assert.equal(isLocalLanguagePackModeVisibleFeatureEnabled(visibleOnly), true);
for (const field of PROTECTED_LOCAL_LANGUAGE_PACK_MODE_FLAG_FIELDS) {
  assert.equal(visibleOnly[field], false, `Visible-only state must keep ${field}=false.`);
}

const unsafeInput = { enabled: true, visibleUiAllowed: true, noExecution: false };
for (const field of PROTECTED_LOCAL_LANGUAGE_PACK_MODE_FLAG_FIELDS) unsafeInput[field] = true;
const normalizedUnsafeAttempt = normalizeLocalLanguagePackModeFeatureFlagState(unsafeInput);
for (const field of PROTECTED_LOCAL_LANGUAGE_PACK_MODE_FLAG_FIELDS) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);
assert.equal(normalizedUnsafeAttempt.enabled, true);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);

for (const term of [
  "document.",
  "querySelector",
  "addEventListener",
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "caches.",
  "navigator.serviceWorker",
  "serviceWorker.",
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
  "installLanguagePack(",
  "routeByLocalLanguage(",
  "syncLanguagePackSources("
]) {
  assert(!moduleSource.includes(term), `AL2 feature flag module must not include runtime API: ${term}`);
}

for (const term of [
  moduleName,
  "NEXUS_LOCAL_LANGUAGE_PACK_MODE_VISIBLE_ENABLED",
  "NexusLocalLanguagePackModeFeatureFlagContract",
  "normalizeLocalLanguagePackModeFeatureFlagState",
  "isLocalLanguagePackModeVisibleFeatureEnabled",
  "localLanguagePackModeFeatureFlag",
  "liveLocalLanguagePackModeRuntime",
  "languagePackInstallRuntime",
  "translationRuntime",
  "localLanguageRoutingRuntime",
  "clinicalInterpretationRuntime",
  "installLanguagePack(",
  "routeByLocalLanguage(",
  "syncLanguagePackSources(",
  "nexus-sprint-al2-local-language-pack-mode-feature-flag-contract"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Local Language Pack Mode feature flag artifact: ${term}`);
}

const alias = "qa:nexus-sprint-al2-local-language-pack-mode-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AL2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-al1-local-language-pack-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AL1 QA.");
assert(qaSuite.includes("scripts/nexus-local-language-pack-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 90 QA.");

console.log("[nexus-sprint-al2-local-language-pack-mode-feature-flag-contract-qa] passed");
