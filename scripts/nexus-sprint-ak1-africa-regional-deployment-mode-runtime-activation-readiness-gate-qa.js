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

const docName = "NEXUS_SPRINT_AK1_AFRICA_REGIONAL_DEPLOYMENT_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-ak1-africa-regional-deployment-mode-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint AK1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint AK1 QA script must exist.");

const doc = read("docs", docName);
const aj5Doc = read("docs", "NEXUS_SPRINT_AJ5_OFFLINE_LOW_BANDWIDTH_MODE_LANE_CLOSEOUT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const africaContractSource = read("public", "nexus-africa-regional-deployment-mode-readiness-contract.js");
const africaContract = require("../public/nexus-africa-regional-deployment-mode-readiness-contract.js");

assertIncludes(doc, [
  "Sprint AK1",
  "c87431a289170b4c6d90675d1ee733b60eb3d944",
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
  "Sprint AK2 - Africa Regional Deployment Mode Feature Flag Contract"
], "AK1 readiness doc");

assertIncludes(doc, [
  "Sprint AJ5 - Offline Low-Bandwidth Mode Lane Closeout",
  "Phase 89 - Africa Regional Deployment Mode Readiness Contract",
  "Africa Regional Deployment Mode readiness is not country launch approval, jurisdiction authority, regional partner authority, language translation authority, provider authority, health authority, pharmacy authority, payment authority, marketplace authority, transportation authority, emergency authority, location authority, identity authority, user consent, product owner approval, audit approval, or execution authority"
], "AK1 relationship section");

assertIncludes(doc, [
  "product owner approval for an Africa Regional Deployment Mode runtime change",
  "verified public source, partner source, or regulated source for each country kit",
  "explicit source attribution for regional guidance",
  "visible freshness label for every regional source-backed answer",
  "visible confidence label for every regional source-backed answer",
  "jurisdiction audit for each country or region before local policy wording appears",
  "partner verification for every provider, clinic, pharmacy, transportation, workforce, agriculture, or community service listing",
  "language review for translated or local-language copy",
  "user consent boundary",
  "role and permission check",
  "explicit user approval for high-risk actions",
  "visible cancellation path",
  "audit decision record before any regional handoff or country-kit activation",
  "safe fallback path when regional sources, partner connections, or local language coverage are unavailable",
  "no unsupported live claim",
  "no completed action claim",
  "no claim that regional data is current unless freshness is verified",
  "no silent regionalization",
  "no silent country inference",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "AK1 runtime activation preconditions");

assertIncludes(doc, [
  "active Africa Regional Deployment Mode runtime",
  "regional country kit runtime",
  "jurisdiction routing runtime",
  "local language runtime",
  "region-specific provider connector runtime",
  "region-specific clinic connector runtime",
  "region-specific telehealth connector runtime",
  "region-specific pharmacy connector runtime",
  "region-specific transportation connector runtime",
  "region-specific emergency connector runtime",
  "region-specific marketplace connector runtime",
  "regional call execution",
  "regional message execution",
  "regional WhatsApp, Telegram, SMS, or email execution",
  "regional payment execution",
  "regional marketplace transaction execution",
  "regional transportation dispatch",
  "regional emergency dispatch",
  "regional location sharing",
  "regional identity, account, or profile mutation",
  "regional medical advice",
  "regional diagnosis claims",
  "regional prescription instructions",
  "unsupported local provider claims",
  "unsupported country coverage claims",
  "typed route mutation",
  "voice route mutation",
  "jurisdiction bypass",
  "language review bypass",
  "partner verification bypass",
  "permission prompts",
  "audit writes",
  "backend writes",
  "localStorage or sessionStorage writes",
  "IndexedDB writes",
  "Cache API writes",
  "fetch or network calls",
  "provider handoff",
  "native bridge dispatch",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "AK1 blocked runtime behavior");

assertIncludes(doc, [
  "I can prepare regional guidance when verified country sources are available.",
  "Africa Regional Deployment Mode is not connected yet.",
  "This requires verified regional sources, jurisdiction review, partner approval, and audit logging.",
  "This country kit requires source attribution and freshness labels before it can be shown as current.",
  "I cannot contact providers, dispatch services, process payments, or claim local coverage yet.",
  "No action has been taken.",
  "I activated this country kit.",
  "I connected to local providers.",
  "I verified this clinic is available right now.",
  "I contacted the provider.",
  "I scheduled the appointment.",
  "I requested the refill.",
  "I processed the payment.",
  "I shared your location.",
  "I dispatched transportation.",
  "I dispatched emergency help.",
  "This local data is current.",
  "I completed the regional action."
], "AK1 safe copy boundary");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AJ5_OFFLINE_LOW_BANDWIDTH_MODE_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT_PHASE_89.md"],
  ["public", "nexus-africa-regional-deployment-mode-readiness-contract.js"],
  ["scripts", "nexus-africa-regional-deployment-mode-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AK1 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(aj5Doc, [
  "Sprint AK1 - Africa Regional Deployment Mode Runtime Activation Readiness Gate"
], "AJ5 closeout next sprint recommendation");

assertIncludes(africaContractSource, [
  "AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT",
  "africa-regional-deployment-mode.readiness.phase_89",
  "AFRICA_REGIONAL_DEPLOYMENT_MODE_NO_EXECUTION_DEFAULTS",
  "createAfricaRegionalDeploymentModeReadinessContract",
  "country kit ready",
  "healthcare",
  "communications",
  "provider_contact",
  "regulated_execution"
], "Phase 89 Africa Regional Deployment Mode readiness contract");

assert.equal(africaContract.AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT.readinessStatus, "blocked");
assert.equal(africaContract.AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT.riskTier, "high");
assert.equal(africaContract.AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT.acceptanceTarget, "country kit ready");
assert.equal(africaContract.AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT.liveConnectorEnabled, false);
assert.equal(africaContract.AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT.providerExecutionEnabled, false);
assert.equal(africaContract.AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT.regulatedActionEnabled, false);
assert.equal(africaContract.AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT.silentActionAllowed, false);
assert.equal(africaContract.AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT.backgroundExecutionAllowed, false);
assert.equal(africaContract.AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT.standardUserRuntimeMutationAllowed, false);
assert.equal(africaContract.AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT.storageSideEffectAllowed, false);
assert.equal(africaContract.AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT.networkSideEffectAllowed, false);
assert.equal(africaContract.AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT.executionAllowed, false);
assert.equal(africaContract.AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT.liveActionEnabled, false);

const sample = africaContract.createAfricaRegionalDeploymentModeReadinessContract({
  actionType: "prepare_africa_regional_deployment_mode_summary",
  liveConnectorEnabled: true,
  providerExecutionEnabled: true,
  regulatedActionEnabled: true,
  silentActionAllowed: true,
  backgroundExecutionAllowed: true,
  storageSideEffectAllowed: true,
  networkSideEffectAllowed: true,
  executionAllowed: true,
  liveActionEnabled: true
});
assert.equal(sample.actionType, "prepare_africa_regional_deployment_mode_summary");
assert.equal(sample.phase, "89");
assert.equal(sample.readinessStatus, "blocked");
assert.equal(sample.riskTier, "high");
assert.equal(sample.liveConnectorEnabled, false);
assert.equal(sample.providerExecutionEnabled, false);
assert.equal(sample.regulatedActionEnabled, false);
assert.equal(sample.silentActionAllowed, false);
assert.equal(sample.backgroundExecutionAllowed, false);
assert.equal(sample.storageSideEffectAllowed, false);
assert.equal(sample.networkSideEffectAllowed, false);
assert.equal(sample.executionAllowed, false);
assert.equal(sample.liveActionEnabled, false);

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-africa-regional-deployment-mode-readiness-contract.js",
  "NexusAfricaRegionalDeploymentModeReadinessContract",
  "AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT",
  "africa-regional-deployment-mode.readiness.phase_89",
  "createAfricaRegionalDeploymentModeReadinessContract",
  "africaRegionalDeploymentModeRuntime",
  "regionalCountryKitRuntime",
  "jurisdictionRoutingRuntime",
  "localLanguageRuntime",
  "regionalProviderConnectorRuntime",
  "activateCountryKit(",
  "routeByJurisdiction(",
  "syncRegionalSources(",
  "nexus-sprint-ak1-africa-regional-deployment-mode-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Africa Regional Deployment Mode lane artifact: ${term}`);
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
  "activateCountryKit(",
  "routeByJurisdiction(",
  "syncRegionalSources("
]) {
  assert(!africaContractSource.includes(term), `Phase 89 contract must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-ak1-africa-regional-deployment-mode-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AK1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-aj5-offline-low-bandwidth-mode-lane-closeout-qa.js"), "qa-suite must continue to include Sprint AJ5 QA.");
assert(qaSuite.includes("scripts/nexus-africa-regional-deployment-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 89 QA.");

console.log("[nexus-sprint-ak1-africa-regional-deployment-mode-runtime-activation-readiness-gate-qa] passed");
