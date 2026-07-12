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

assert(Array.isArray(runtime.HEALTH_GENESIS_CAPABILITY_STATUS), "Genesis capability status is exported");
assert(runtime.HEALTH_GENESIS_CAPABILITY_STATUS.length >= 25, "major master requirements are classified");

const requiredCapabilities = [
  "canonical_medical_social_care_source_registry",
  "domain_evidence_maps",
  "predictive_model_and_calculator_registries",
  "model_validation_explainability_monitoring_receipts",
  "mental_health_behavioral_wellness_runtime",
  "governed_screening_instruments",
  "crisis_detection_safety_planning",
  "verified_provider_trust_registry",
  "official_provider_and_social_service_integrations",
  "appointment_referral_message_provider_execution_states",
  "professional_health_workspace",
  "human_review_controls",
  "medication_pharmacy_evidence_governance",
  "laboratory_diagnostic_evidence_governance",
  "chronic_care_predictive_integration",
  "consent_memory_sharing_correction_export_revocation_deletion",
  "fhir_terminology_contracts",
  "youth_vulnerable_population_safeguards",
  "multilingual_cultural_voice_low_literacy_offline_low_bandwidth",
  "genesis_orb_focused_mission_integration",
  "communications_follow_up_runtime",
  "capability_level_regulatory_assessment",
  "governance_review_workflows",
  "model_source_monitoring",
  "api_standard_user_command_coverage",
  "security_privacy_accessibility_adversarial_regression",
  "production_authorization"
];

const statusIds = new Set(runtime.HEALTH_GENESIS_CAPABILITY_STATUS.map(item => item.capabilityId));
for (const capabilityId of requiredCapabilities) {
  assert(statusIds.has(capabilityId), `missing capability classification: ${capabilityId}`);
}

const packet = runtime.buildHealthGenesisCapabilityStatusPacket("Show health capability status and production limitations report.", {});
assert.strictEqual(packet.packetType, "enterprise_health_genesis_capability_status_packet", "packet type is stable");
assert.strictEqual(packet.domainId, "health_genesis_capability_status", "domain id is stable");
assert.strictEqual(packet.allCapabilitiesClassified, true, "all capabilities are classified");
assert.strictEqual(packet.productionAuthorized, false, "packet does not authorize production");
assert.strictEqual(packet.executionEnabled, false, "packet does not authorize execution");
assert.strictEqual(packet.canReportCapabilityStatus, true, "packet can report status");
assert.strictEqual(packet.canActivateRegulatedExecution, false, "packet cannot activate regulated execution");
assert.strictEqual(packet.canClaimProductionReady, false, "packet cannot claim production readiness");
assert.strictEqual(packet.canBypassCredentials, false, "packet cannot bypass credentials");
assert.strictEqual(packet.canBypassClinicalApproval, false, "packet cannot bypass clinical approval");
assert.strictEqual(packet.canBypassRegulatoryReview, false, "packet cannot bypass regulatory review");
assert.strictEqual(packet.canBypassConsentAudit, false, "packet cannot bypass consent/audit");
assert(packet.classificationCounts.implemented_locally > 0, "implemented-local classifications exist");
assert(packet.classificationCounts.credential_blocked > 0, "credential-blocked classifications exist");
assert(packet.classificationCounts.awaiting_clinical_approval > 0, "clinical-approval-blocked classifications exist");
assert(packet.classificationCounts.not_production_authorized > 0, "not-production-authorized classification exists");
assert(/cannot activate regulated execution/.test(packet.userVisibleStatus), "user status blocks regulated execution");

const status = runtime.status({});
assert.strictEqual(status.healthGenesisCapabilityStatusCount, runtime.HEALTH_GENESIS_CAPABILITY_STATUS.length, "status exposes capability count");
assert(status.activeCapabilities.includes("Genesis capability status"), "status includes Genesis capability status");
const registries = runtime.registries();
assert(Array.isArray(registries.healthGenesisCapabilityStatus), "registries include Genesis capability status");

includes(server, "/api/nexus/health-evidence/capability-status", "server exposes capability status endpoint");
includes(server, "buildHealthGenesisCapabilityStatusPacket", "server calls capability status builder");
includes(app, "Genesis Health Capability Status", "Standard User card title exists");
includes(app, "healthCapabilityStatusIntent", "Standard User command intent exists");
includes(app, "Can activate regulated execution", "Standard User card shows regulated execution boundary");
includes(app, "Can claim production ready", "Standard User card shows production readiness boundary");
includes(docs, "Genesis Health Capability Status And Production Limitations", "documentation section exists");
includes(docs, "It cannot activate regulated execution", "documentation preserves production limitation boundary");

assert.strictEqual(
  packageJson.scripts["qa:nexus-enterprise-health-capability-status"],
  "node scripts/nexus-enterprise-health-capability-status-qa.js",
  "package alias exists"
);
includes(qaSuite, "scripts/nexus-enterprise-health-capability-status-qa.js", "safe suites include capability status QA");

console.log("Nexus enterprise health capability status QA passed.");
