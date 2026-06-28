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

const docName = "NEXUS_SPRINT_AL1_LOCAL_LANGUAGE_PACK_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-al1-local-language-pack-mode-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint AL1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint AL1 QA script must exist.");

const doc = read("docs", docName);
const ak5Doc = read("docs", "NEXUS_SPRINT_AK5_AFRICA_REGIONAL_DEPLOYMENT_MODE_LANE_CLOSEOUT.md");
const runtime = [read("public", "index.html"), read("public", "app.js"), read("server.js")].join("\n");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contractSource = read("public", "nexus-local-language-pack-mode-readiness-contract.js");
const contract = require("../public/nexus-local-language-pack-mode-readiness-contract.js");

assertIncludes(doc, [
  "Sprint AL1",
  "e032aa8a4e1fc10563660366b37484ee2640d5a6",
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
  "Sprint AL2 - Local Language Pack Mode Feature Flag Contract"
], "AL1 readiness doc");

assertIncludes(doc, [
  "Sprint AK5 - Africa Regional Deployment Mode Lane Closeout",
  "Phase 90 - Local Language Pack Mode Readiness Contract",
  "Local Language Pack Mode readiness is not translation approval, clinical interpretation approval, jurisdiction authority, provider authority, health authority, pharmacy authority, payment authority, marketplace authority, transportation authority, emergency authority, location authority, identity authority, user consent, product owner approval, audit approval, or execution authority"
], "AL1 relationship section");

assertIncludes(doc, [
  "product owner approval for a Local Language Pack Mode runtime change",
  "verified public source, partner source, or regulated source for each language pack",
  "translation review for every translated or local-language string",
  "local-language safety review",
  "jurisdiction review before any language pack includes local policy",
  "source attribution for language pack provenance",
  "visible freshness label",
  "visible confidence label",
  "user consent boundary",
  "role and permission check",
  "explicit user approval for high-risk actions",
  "visible cancellation path",
  "audit decision record before any language pack activation",
  "safe fallback path",
  "no unsupported live claim",
  "no completed action claim",
  "no claim that a language pack is clinically certified or medically compliant unless compliance is verified",
  "no silent language-pack install",
  "no silent locale inference",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "AL1 runtime activation preconditions");

assertIncludes(doc, [
  "active Local Language Pack Mode runtime",
  "live Local Language Pack Mode runtime",
  "language pack installation",
  "translation runtime",
  "local-language routing runtime",
  "clinical interpretation runtime",
  "language preference mutation",
  "region-specific provider connector runtime",
  "region-specific clinic connector runtime",
  "region-specific telehealth connector runtime",
  "region-specific pharmacy connector runtime",
  "regional call execution",
  "regional message execution",
  "WhatsApp, Telegram, SMS, or email execution",
  "payment execution",
  "marketplace transaction execution",
  "transportation dispatch",
  "emergency dispatch",
  "location sharing",
  "medical advice",
  "diagnosis claims",
  "prescription instructions",
  "unsupported local-language coverage claims",
  "unsupported clinical interpretation claims",
  "typed route mutation",
  "voice route mutation",
  "translation review bypass",
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
], "AL1 blocked runtime behavior");

assertIncludes(doc, [
  "I can prepare local-language guidance when verified language sources are available.",
  "Local Language Pack Mode is not connected yet.",
  "This requires translation review, verified sources, partner approval, and audit logging.",
  "This language pack requires source attribution and freshness labels before it can be shown as current.",
  "I cannot claim clinical interpretation compliance or contact providers from this language pack yet.",
  "No action has been taken.",
  "I installed this language pack.",
  "I clinically certified this translation.",
  "This is approved medical interpretation.",
  "I changed your account language permanently.",
  "I contacted the provider.",
  "I scheduled the appointment.",
  "I requested the refill.",
  "I processed the payment.",
  "I shared your location.",
  "I dispatched transportation.",
  "I dispatched emergency help.",
  "This local-language data is current.",
  "I completed the language-pack action."
], "AL1 safe copy boundary");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AK5_AFRICA_REGIONAL_DEPLOYMENT_MODE_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT_PHASE_90.md"],
  ["public", "nexus-local-language-pack-mode-readiness-contract.js"],
  ["scripts", "nexus-local-language-pack-mode-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AL1 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(ak5Doc, [
  "Sprint AL1 - Local Language Pack Mode Runtime Activation Readiness Gate"
], "AK5 closeout next sprint recommendation");

assertIncludes(contractSource, [
  "LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT",
  "local-language-pack-mode.readiness.phase_90",
  "LOCAL_LANGUAGE_PACK_MODE_NO_EXECUTION_DEFAULTS",
  "createLocalLanguagePackModeReadinessContract",
  "pack install safe",
  "healthcare",
  "communications",
  "provider_contact",
  "regulated_execution"
], "Phase 90 Local Language Pack Mode readiness contract");

assert.equal(contract.LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT.readinessStatus, "blocked");
assert.equal(contract.LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT.riskTier, "controlled");
assert.equal(contract.LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT.acceptanceTarget, "pack install safe");
assert.equal(contract.LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT.liveConnectorEnabled, false);
assert.equal(contract.LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT.providerExecutionEnabled, false);
assert.equal(contract.LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT.regulatedActionEnabled, false);
assert.equal(contract.LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT.silentActionAllowed, false);
assert.equal(contract.LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT.backgroundExecutionAllowed, false);
assert.equal(contract.LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT.standardUserRuntimeMutationAllowed, false);
assert.equal(contract.LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT.storageSideEffectAllowed, false);
assert.equal(contract.LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT.networkSideEffectAllowed, false);
assert.equal(contract.LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT.executionAllowed, false);
assert.equal(contract.LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT.liveActionEnabled, false);

const sample = contract.createLocalLanguagePackModeReadinessContract({
  actionType: "prepare_local_language_pack_mode_summary",
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
assert.equal(sample.actionType, "prepare_local_language_pack_mode_summary");
assert.equal(sample.phase, "90");
assert.equal(sample.readinessStatus, "blocked");
assert.equal(sample.riskTier, "controlled");
assert.equal(sample.liveConnectorEnabled, false);
assert.equal(sample.providerExecutionEnabled, false);
assert.equal(sample.regulatedActionEnabled, false);
assert.equal(sample.silentActionAllowed, false);
assert.equal(sample.backgroundExecutionAllowed, false);
assert.equal(sample.storageSideEffectAllowed, false);
assert.equal(sample.networkSideEffectAllowed, false);
assert.equal(sample.executionAllowed, false);
assert.equal(sample.liveActionEnabled, false);

for (const term of [
  "nexus-local-language-pack-mode-readiness-contract.js",
  "NexusLocalLanguagePackModeReadinessContract",
  "LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT",
  "local-language-pack-mode.readiness.phase_90",
  "createLocalLanguagePackModeReadinessContract",
  "localLanguagePackModeRuntime",
  "languagePackInstallRuntime",
  "translationRuntime",
  "localLanguageRoutingRuntime",
  "clinicalInterpretationRuntime",
  "installLanguagePack(",
  "routeByLocalLanguage(",
  "syncLanguagePackSources(",
  "nexus-sprint-al1-local-language-pack-mode-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Local Language Pack Mode lane artifact: ${term}`);
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
  "installLanguagePack(",
  "routeByLocalLanguage(",
  "syncLanguagePackSources("
]) {
  assert(!contractSource.includes(term), `Phase 90 contract must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-al1-local-language-pack-mode-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AL1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ak5-africa-regional-deployment-mode-lane-closeout-qa.js"), "qa-suite must continue to include Sprint AK5 QA.");
assert(qaSuite.includes("scripts/nexus-local-language-pack-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 90 QA.");

console.log("[nexus-sprint-al1-local-language-pack-mode-runtime-activation-readiness-gate-qa] passed");
