const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const runtime = require(path.join(root, "public", "nexus-enterprise-health-evidence-trust.js"));
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");
const docs = fs.readFileSync(path.join(root, "docs", "NEXUS_ENTERPRISE_HEALTH_EVIDENCE_TRUST_FOUNDATION.md"), "utf8");

function includes(source, needle, label) {
  assert(source.includes(needle), label);
}

assert(runtime.ACCESSIBILITY_LOCALIZATION_GOVERNANCE, "accessibility/localization governance is exported");
assert.strictEqual(runtime.ACCESSIBILITY_LOCALIZATION_GOVERNANCE.executionEnabled, false, "execution remains disabled");
assert.strictEqual(runtime.ACCESSIBILITY_LOCALIZATION_GOVERNANCE.noCertifiedInterpreterClaim, true, "certified interpreter claims are blocked");
assert.strictEqual(runtime.ACCESSIBILITY_LOCALIZATION_GOVERNANCE.noLiveSourceFreshnessOffline, true, "offline live freshness claims are blocked");
assert.strictEqual(runtime.ACCESSIBILITY_LOCALIZATION_GOVERNANCE.noClinicalMeaningChangeWithoutReview, true, "clinical meaning changes require review");

const offlinePacket = runtime.buildAccessibilityLocalizationGovernancePacket("Prepare low bandwidth health packet offline.", {});
assert.strictEqual(offlinePacket.packetType, "enterprise_health_accessibility_localization_governance_packet", "packet type is stable");
assert.strictEqual(offlinePacket.domainId, "accessibility_localization", "domain id is stable");
assert.strictEqual(offlinePacket.need, "offline_low_bandwidth", "offline/low-bandwidth need is classified");
assert.strictEqual(offlinePacket.offlineRelated, true, "offline packet is marked offline-related");
assert.strictEqual(offlinePacket.executionEnabled, false, "packet does not authorize execution");
assert.strictEqual(offlinePacket.canPrepareOfflinePacket, true, "packet can prepare offline support");
assert.strictEqual(offlinePacket.canClaimLiveFreshnessOffline, false, "packet cannot claim live freshness offline");
assert.strictEqual(offlinePacket.canContactProvider, false, "packet cannot contact providers");
assert(offlinePacket.requiredBeforeOfflineUse.includes("no live freshness claim"), "offline use requires no live freshness claim");
assert(/cannot claim certified clinical interpretation/.test(offlinePacket.userVisibleStatus), "user status blocks certified interpretation claims");

const translationPacket = runtime.buildAccessibilityLocalizationGovernancePacket("Prepare Spanish clinical translation governance.", {});
assert.strictEqual(translationPacket.need, "multilingual_translation_review", "translation need is classified");
assert.strictEqual(translationPacket.translationRelated, true, "translation packet is marked translation-related");
assert.strictEqual(translationPacket.canClaimCertifiedInterpretation, false, "packet cannot claim certified interpretation");
assert.strictEqual(translationPacket.canChangeClinicalMeaning, false, "packet cannot change clinical meaning");
assert(translationPacket.requiredBeforeClinicalTranslationUse.includes("clinical meaning review"), "translation use requires clinical meaning review");

const plainLanguagePacket = runtime.buildAccessibilityLocalizationGovernancePacket("Use plain language health support for low literacy.", {});
assert.strictEqual(plainLanguagePacket.need, "plain_language_low_literacy", "plain-language/low-literacy need is classified");
assert.strictEqual(plainLanguagePacket.canPreparePlainLanguage, true, "packet can prepare plain-language support");
assert.strictEqual(plainLanguagePacket.canDiagnose, undefined, "packet does not introduce diagnosis authority");
assert.strictEqual(plainLanguagePacket.safety.noDiagnosis, true, "common safety blocks diagnosis");
assert.strictEqual(plainLanguagePacket.safety.noPrescribing, true, "common safety blocks prescribing");
assert.strictEqual(plainLanguagePacket.safety.noEmergencyDispatch, true, "common safety blocks emergency dispatch");

const registries = runtime.registries();
assert(registries.accessibilityLocalizationGovernance, "registry packet includes accessibility/localization governance");
const status = runtime.status({});
assert.strictEqual(status.accessibilityLocalizationState, runtime.ACCESSIBILITY_LOCALIZATION_GOVERNANCE.translationState, "status exposes accessibility/localization state");
assert(status.activeCapabilities.includes("accessibility/localization governance"), "status includes accessibility/localization capability");

includes(server, "/api/nexus/health-evidence/accessibility-localization", "server exposes accessibility/localization endpoint");
includes(server, "buildAccessibilityLocalizationGovernancePacket", "server calls accessibility/localization packet builder");
includes(app, "Health Accessibility & Localization Governance", "Standard User card title exists");
includes(app, "accessibilityLocalizationIntent", "Standard User command intent exists");
includes(app, "Can claim certified interpretation", "Standard User card shows interpretation boundary");
includes(app, "Can prepare offline packet", "Standard User card shows offline packet capability");
includes(app, "Can claim live freshness offline", "Standard User card shows offline freshness boundary");
includes(docs, "Health Accessibility And Localization Governance", "documentation section exists");
includes(docs, "It cannot claim certified clinical interpretation", "documentation preserves interpretation boundary");

assert.strictEqual(
  packageJson.scripts["qa:nexus-enterprise-health-accessibility-localization-governance"],
  "node scripts/nexus-enterprise-health-accessibility-localization-governance-qa.js",
  "package alias exists"
);
includes(qaSuite, "scripts/nexus-enterprise-health-accessibility-localization-governance-qa.js", "safe suites include accessibility/localization QA");

console.log("Nexus enterprise health accessibility/localization governance QA passed.");
