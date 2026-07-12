const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const runtime = require(path.join(root, "public", "nexus-enterprise-health-evidence-trust.js"));
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function includes(source, needle, label) {
  assert(source.includes(needle), label);
}

const registries = runtime.registries();

assert.strictEqual(registries.registryPacketType, "enterprise_health_governance_registry_packet", "registry packet type is stable");
assert(runtime.RECOGNIZED_SOURCE_RECORDS.length >= 25, "canonical medical/social-care source registry is expanded");
[
  "uspstf",
  "ada",
  "aha",
  "acog",
  "aap",
  "apa",
  "kdigo",
  "gold",
  "gina",
  "988",
  "findhelp",
  "hrsa",
  "loinc",
  "snomed",
  "rxnorm",
  "hl7"
].forEach(sourceId => {
  assert(runtime.RECOGNIZED_SOURCE_RECORDS.some(item => item.sourceId === sourceId), `source registry includes ${sourceId}`);
});

[
  "chronic_care",
  "diabetes",
  "hypertension",
  "obesity",
  "cardiometabolic",
  "kidney",
  "respiratory",
  "rpm_rtm",
  "mental_health",
  "behavioral_wellness",
  "crisis_safety",
  "medication",
  "medication_safety",
  "laboratory",
  "diagnostic_imaging",
  "screening",
  "maternal_child",
  "youth_vulnerable",
  "telehealth",
  "mobile_clinic",
  "pharmacy",
  "provider_directory",
  "health_center",
  "fhir_records",
  "social_care",
  "transportation_to_care"
].forEach(domainId => {
  assert(runtime.DOMAIN_EVIDENCE_MAPS[domainId], `domain evidence map exists for ${domainId}`);
  assert(runtime.DOMAIN_EVIDENCE_MAPS[domainId].prohibitedUses.length >= 2, `${domainId} has prohibited use boundaries`);
});

[
  "bmi",
  "bp_category",
  "a1c_context",
  "egfr_context",
  "ascvd_risk",
  "phq9",
  "gad7",
  "cssrs",
  "pregnancy_danger_signs"
].forEach(calculatorId => {
  const calculator = runtime.CLINICAL_CALCULATOR_REGISTRY[calculatorId];
  assert(calculator, `calculator registry includes ${calculatorId}`);
  assert.strictEqual(calculator.executionEnabled, false, `${calculatorId} calculator execution is disabled by default`);
  assert.strictEqual(calculator.professionalReviewRequired, true, `${calculatorId} requires professional review`);
});

[
  "physician_clinic",
  "telehealth_provider",
  "pharmacy",
  "mobile_clinic_operator",
  "crisis_resource",
  "social_service_org"
].forEach(providerType => {
  const provider = runtime.VERIFIED_PROVIDER_TRUST_REGISTRY[providerType];
  assert(provider, `provider trust registry includes ${providerType}`);
  assert.strictEqual(provider.liveExecutionEnabled, false, `${providerType} live execution is disabled`);
  assert.strictEqual(provider.noSilentHandoff, true, `${providerType} cannot silently hand off`);
  assert.strictEqual(provider.auditRequired, true, `${providerType} requires audit`);
});

assert(runtime.FHIR_TERMINOLOGY_CONTRACTS.fhirResources.includes("Consent"), "FHIR contract includes Consent resource");
assert(runtime.FHIR_TERMINOLOGY_CONTRACTS.fhirResources.includes("Provenance"), "FHIR contract includes Provenance resource");
assert.strictEqual(runtime.FHIR_TERMINOLOGY_CONTRACTS.noClinicalWrite, true, "FHIR contract blocks clinical writes");
assert.strictEqual(runtime.FHIR_TERMINOLOGY_CONTRACTS.noRecordAccessWithoutConsent, true, "FHIR contract blocks record access without consent");
assert(runtime.CONSENT_PRIVACY_GOVERNANCE.requiredBefore.includes("FHIR access"), "consent governance gates FHIR access");
assert(runtime.CONSENT_PRIVACY_GOVERNANCE.userRights.includes("revoke"), "consent governance includes revocation");
assert(runtime.ACCESSIBILITY_LOCALIZATION_GOVERNANCE.supportedNeeds.includes("low literacy"), "localization governance covers low literacy");
assert.strictEqual(runtime.ACCESSIBILITY_LOCALIZATION_GOVERNANCE.noClinicalInterpretationCertificationClaim, true, "language support avoids certification claim");

const professionalPacket = runtime.inspect("Show the professional health workspace for FHIR terminology.", { role: "professional" });
assert.strictEqual(professionalPacket.inspectorView.role, "professional", "professional health workspace command supports professional inspector");
assert.strictEqual(professionalPacket.safety.noProviderContacted, true, "professional packet does not contact providers");

const governancePacket = runtime.predictiveGovernance("Show clinical calculator registry for ASCVD risk.");
assert(Array.isArray(governancePacket.calculators), "predictive governance includes calculator registry matches");
assert(governancePacket.calculators.some(item => item.calculatorId === "ascvd_risk"), "ASCVD calculator governance is attached");
assert.strictEqual(governancePacket.safety.noFakeModelValidation, true, "predictive governance still blocks fake validation");

const status = runtime.status({});
assert(status.clinicalCalculatorCount >= 9, "status exposes clinical calculator count");
assert(status.verifiedProviderTrustCategoryCount >= 6, "status exposes provider trust count");
assert(status.blockedCapabilities.includes("FHIR record access"), "status blocks FHIR record access");

includes(server, "/api/nexus/health-evidence/registries", "registry endpoint exists");
includes(server, "nexusEnterpriseHealthEvidenceTrust.registries()", "registry endpoint uses runtime registry packet");
includes(app, "const registryIntent", "Standard User commands detect governance registry intent");
includes(app, "runtime.registries()", "Standard User registry commands build registry packet");
includes(app, "Enterprise Health Governance Registries", "Standard User card has registry title");
includes(app, "canonical sources", "Standard User registry response exposes source count");
includes(app, "does not diagnose, prescribe, access records, contact providers, or dispatch emergencies", "Standard User registry response preserves safety boundaries");
includes(app, "Clinical calculators governed", "Standard User evidence card mentions calculator governance");
includes(app, "Verified provider trust categories", "Standard User registry card mentions provider trust categories");
includes(app, "FHIR resources governed", "Standard User registry card mentions FHIR governance");
includes(app, "Execution enabled", "Standard User registry card shows execution-disabled status");
includes(app, "Inspector role", "Standard User evidence card mentions inspector role");
includes(app, "Source version", "Standard User evidence card mentions source version");
assert(packageJson.scripts["qa:nexus-enterprise-health-governance-registries"], "package alias exists");
includes(qaSuite, "scripts/nexus-enterprise-health-governance-registries-qa.js", "safe suites include governance registries QA");

console.log("Nexus enterprise health governance registries QA passed.");
