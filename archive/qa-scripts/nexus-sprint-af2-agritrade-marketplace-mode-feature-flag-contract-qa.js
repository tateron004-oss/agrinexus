const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_NAME,
  DEFAULT_AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_STATE,
  PROTECTED_AGRITRADE_MARKETPLACE_MODE_FLAG_FIELDS,
  normalizeAgritradeMarketplaceModeFeatureFlagState,
  isAgritradeMarketplaceModeVisibleFeatureEnabled
} = require("../public/nexus-agritrade-marketplace-mode-feature-flag.js");

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

const docName = "NEXUS_SPRINT_AF2_AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-agritrade-marketplace-mode-feature-flag.js";
const qaName = "nexus-sprint-af2-agritrade-marketplace-mode-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint AF2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint AF2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint AF2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const af1Doc = read("docs", "NEXUS_SPRINT_AF1_AGRITRADE_MARKETPLACE_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md");
const readinessContract = read("public", "nexus-agritrade-marketplace-mode-readiness-contract.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint AF2",
  "87a9aabbf804a136e4e4665edaa00d4951e9c6f9",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_AGRITRADE_MARKETPLACE_MODE_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Relationship To Sprint AF1",
  "Runtime Absence Requirements",
  "QA Expectations",
  "Sprint AF3 - AgriTrade Marketplace Mode Flag Contract Harness"
], "AF2 feature flag doc");

assert(af1Doc.includes("Sprint AF2 - AgriTrade Marketplace Mode Feature Flag Contract"), "AF1 must recommend Sprint AF2.");
assert(readinessContract.includes("agritrade-marketplace-mode.readiness.phase_84"), "AF2 must build on Phase 84 AgriTrade Marketplace Mode readiness contract.");
assert(readinessContract.includes("executionAllowed"), "Phase 84 execution default must remain represented.");
assert(readinessContract.includes("liveConnectorEnabled"), "Phase 84 live connector default must remain represented.");
assert(readinessContract.includes("providerExecutionEnabled"), "Phase 84 provider execution default must remain represented.");

assert.equal(AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_NAME, "NEXUS_AGRITRADE_MARKETPLACE_MODE_VISIBLE_ENABLED");
assert.equal(DEFAULT_AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_STATE.noExecution, true);

for (const field of PROTECTED_AGRITRADE_MARKETPLACE_MODE_FLAG_FIELDS) {
  assert.equal(DEFAULT_AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `AF2 doc must document ${field}: false.`);
}

const defaultState = normalizeAgritradeMarketplaceModeFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isAgritradeMarketplaceModeVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeAgritradeMarketplaceModeFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isAgritradeMarketplaceModeVisibleFeatureEnabled(visibleOnly), true);
for (const field of PROTECTED_AGRITRADE_MARKETPLACE_MODE_FLAG_FIELDS) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

const unsafeAttemptInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of PROTECTED_AGRITRADE_MARKETPLACE_MODE_FLAG_FIELDS) {
  unsafeAttemptInput[field] = true;
}

const unsafeAttempt = normalizeAgritradeMarketplaceModeFeatureFlagState(unsafeAttemptInput);
assert.equal(unsafeAttempt.visibleUiAllowed, true);
for (const field of PROTECTED_AGRITRADE_MARKETPLACE_MODE_FLAG_FIELDS) {
  assert.equal(unsafeAttempt[field], false, `unsafe attempt must keep ${field}=false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
  "NEXUS_AGRITRADE_MARKETPLACE_MODE_VISIBLE_ENABLED",
  "NexusAgritradeMarketplaceModeFeatureFlagContract",
  "normalizeAgritradeMarketplaceModeFeatureFlagState",
  "isAgritradeMarketplaceModeVisibleFeatureEnabled",
  "agritradeMarketplaceModeFeatureFlag",
  "liveAgritradeMarketplaceModeRuntime",
  "liveMarketplaceConnectorRuntime",
  "executeMarketplacePurchase(",
  "executeMarketplaceSale(",
  "createMarketplaceOrder(",
  "acceptMarketplaceQuote(",
  "publishMarketplaceListing(",
  "contactMarketplaceBuyer(",
  "contactMarketplaceSeller(",
  "processMarketplacePayment("
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate AgriTrade Marketplace Mode feature flag artifact: ${term}`);
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
  "executeMarketplacePurchase(",
  "executeMarketplaceSale(",
  "createMarketplaceOrder(",
  "acceptMarketplaceQuote(",
  "publishMarketplaceListing(",
  "contactMarketplaceBuyer(",
  "contactMarketplaceSeller(",
  "processMarketplacePayment(",
  "dispatchShipment(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation("
]) {
  assert(!moduleSource.includes(term), `AF2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-af2-agritrade-marketplace-mode-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AF2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-af1-agritrade-marketplace-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AF1 QA.");
assert(qaSuite.includes("scripts/nexus-agritrade-marketplace-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 84 QA.");

console.log("[nexus-sprint-af2-agritrade-marketplace-mode-feature-flag-contract-qa] passed");
