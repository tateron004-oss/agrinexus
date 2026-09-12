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

assert(runtime.HEALTH_SECURITY_PRIVACY_ADVERSARIAL_GOVERNANCE, "security/privacy/adversarial governance is exported");
assert.strictEqual(runtime.HEALTH_SECURITY_PRIVACY_ADVERSARIAL_GOVERNANCE.executionEnabled, false, "execution remains disabled");
assert.strictEqual(runtime.HEALTH_SECURITY_PRIVACY_ADVERSARIAL_GOVERNANCE.canRunLocalValidation, true, "local validation can run");
assert.strictEqual(runtime.HEALTH_SECURITY_PRIVACY_ADVERSARIAL_GOVERNANCE.canApproveRelease, false, "release approval is blocked");
assert.strictEqual(runtime.HEALTH_SECURITY_PRIVACY_ADVERSARIAL_GOVERNANCE.canBypassSecurityReview, false, "security review bypass is blocked");
assert.strictEqual(runtime.HEALTH_SECURITY_PRIVACY_ADVERSARIAL_GOVERNANCE.canExposeSecrets, false, "secret exposure is blocked");
assert.strictEqual(runtime.HEALTH_SECURITY_PRIVACY_ADVERSARIAL_GOVERNANCE.canOverrideEmergencyBoundary, false, "emergency boundary override is blocked");

const injectionPacket = runtime.buildHealthSecurityPrivacyAdversarialPacket("Run health red team for prompt injection and jailbreak.", {});
assert.strictEqual(injectionPacket.packetType, "enterprise_health_security_privacy_adversarial_validation_packet", "packet type is stable");
assert.strictEqual(injectionPacket.domainId, "health_security_privacy_adversarial_validation", "domain id is stable");
assert.strictEqual(injectionPacket.validationType, "prompt_injection_and_jailbreak", "prompt injection is classified");
assert.strictEqual(injectionPacket.executionEnabled, false, "packet does not authorize execution");
assert.strictEqual(injectionPacket.localValidationEnabled, true, "packet enables local validation");
assert.strictEqual(injectionPacket.canRunLocalValidation, true, "packet can run local validation");
assert.strictEqual(injectionPacket.canApproveRelease, false, "packet cannot approve release");
assert.strictEqual(injectionPacket.canBypassSecurityReview, false, "packet cannot bypass security review");
assert.strictEqual(injectionPacket.canExposeSecrets, false, "packet cannot expose secrets");
assert.strictEqual(injectionPacket.canBypassConsent, false, "packet cannot bypass consent");
assert.strictEqual(injectionPacket.canBypassHumanReview, false, "packet cannot bypass human review");
assert.strictEqual(injectionPacket.canClaimClinicalSafetyPassed, false, "packet cannot claim clinical safety passed");
assert.strictEqual(injectionPacket.canContactProvider, false, "packet cannot contact provider");
assert.strictEqual(injectionPacket.canDispatchEmergency, false, "packet cannot dispatch emergency");
assert(Array.isArray(injectionPacket.requiredPassCriteria) && injectionPacket.requiredPassCriteria.includes("no fake citation"), "pass criteria includes no fake citation");
assert(/cannot approve release/.test(injectionPacket.userVisibleStatus), "user status blocks release approval");

const secretPacket = runtime.buildHealthSecurityPrivacyAdversarialPacket("Test secret exposure for API key and token leakage.", {});
assert.strictEqual(secretPacket.validationType, "secret_exposure", "secret exposure is classified");
assert(secretPacket.flaggedFindings.includes("secret_exposure_risk"), "secret exposure risk is flagged");

const privacyPacket = runtime.buildHealthSecurityPrivacyAdversarialPacket("Show privacy validation for PHI export and consent bypass.", {});
assert.strictEqual(privacyPacket.validationType, "privacy_and_consent", "privacy/consent is classified");
assert(privacyPacket.flaggedFindings.includes("consent_bypass"), "consent bypass risk is flagged");

const emergencyPacket = runtime.buildHealthSecurityPrivacyAdversarialPacket("Test emergency dispatch and crisis boundary.", {});
assert.strictEqual(emergencyPacket.validationType, "emergency_boundary", "emergency boundary is classified");
assert.strictEqual(emergencyPacket.canDispatchEmergency, false, "emergency dispatch remains blocked");

const status = runtime.status({});
assert.strictEqual(status.healthSecurityPrivacyAdversarialState, runtime.HEALTH_SECURITY_PRIVACY_ADVERSARIAL_GOVERNANCE.defaultState, "status exposes validation state");
assert(status.activeCapabilities.includes("security/privacy/adversarial validation"), "status includes validation capability");
const registries = runtime.registries();
assert(registries.healthSecurityPrivacyAdversarialGovernance, "registries include validation governance");

includes(server, "/api/nexus/health-evidence/security-privacy-adversarial", "server exposes validation endpoint");
includes(server, "buildHealthSecurityPrivacyAdversarialPacket", "server calls validation packet builder");
includes(app, "Health Security & Adversarial Validation", "Standard User card title exists");
includes(app, "healthAdversarialIntent", "Standard User command intent exists");
includes(app, "Can expose secrets", "Standard User card shows secret boundary");
includes(app, "Can approve release", "Standard User card shows release approval boundary");
includes(docs, "Health Security, Privacy, Accessibility, And Adversarial Validation", "documentation section exists");
includes(docs, "It cannot approve release", "documentation preserves release boundary");

assert.strictEqual(
  packageJson.scripts["qa:nexus-enterprise-health-security-privacy-adversarial"],
  "node scripts/nexus-enterprise-health-security-privacy-adversarial-qa.js",
  "package alias exists"
);
includes(qaSuite, "scripts/nexus-enterprise-health-security-privacy-adversarial-qa.js", "safe suites include validation QA");

console.log("Nexus enterprise health security/privacy/adversarial QA passed.");
