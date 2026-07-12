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

assert(runtime.HEALTH_REGULATORY_ASSESSMENT_GOVERNANCE, "regulatory assessment governance is exported");
assert.strictEqual(runtime.HEALTH_REGULATORY_ASSESSMENT_GOVERNANCE.executionEnabled, false, "execution remains disabled");
assert.strictEqual(runtime.HEALTH_REGULATORY_ASSESSMENT_GOVERNANCE.productionAuthorizationEnabled, false, "production authorization remains disabled");
assert.strictEqual(runtime.HEALTH_REGULATORY_ASSESSMENT_GOVERNANCE.noSelfAuthorization, true, "self-authorization is blocked");
assert.strictEqual(runtime.HEALTH_REGULATORY_ASSESSMENT_GOVERNANCE.noJurisdictionBypass, true, "jurisdiction bypass is blocked");
assert.strictEqual(runtime.HEALTH_REGULATORY_ASSESSMENT_GOVERNANCE.noClinicalApprovalBypass, true, "clinical approval bypass is blocked");

const fhirPacket = runtime.buildHealthRegulatoryAssessmentPacket("Review production authorization for FHIR medical record access.", {});
assert.strictEqual(fhirPacket.packetType, "enterprise_health_regulatory_assessment_packet", "packet type is stable");
assert.strictEqual(fhirPacket.domainId, "health_regulatory_assessment", "domain id is stable");
assert.strictEqual(fhirPacket.capabilityType, "fhir_medical_records", "FHIR/records capability is classified");
assert.strictEqual(fhirPacket.riskTier, "high_regulated_review_required", "FHIR/records is high regulated risk");
assert.strictEqual(fhirPacket.currentClassification, "not_production_authorized", "regulated capability is not production authorized");
assert.strictEqual(fhirPacket.executionEnabled, false, "packet does not authorize execution");
assert.strictEqual(fhirPacket.productionAuthorized, false, "packet does not authorize production");
assert.strictEqual(fhirPacket.canClassifyCapability, true, "packet can classify capability");
assert.strictEqual(fhirPacket.canPrepareReviewChecklist, true, "packet can prepare review checklist");
assert.strictEqual(fhirPacket.canAuthorizeProduction, false, "packet cannot authorize production");
assert.strictEqual(fhirPacket.canBypassLegalReview, false, "packet cannot bypass legal review");
assert.strictEqual(fhirPacket.canBypassClinicalApproval, false, "packet cannot bypass clinical approval");
assert.strictEqual(fhirPacket.canBypassJurisdictionReview, false, "packet cannot bypass jurisdiction review");
assert.strictEqual(fhirPacket.canActivateLiveConnector, false, "packet cannot activate live connector");
assert.strictEqual(fhirPacket.canHandlePhiWithoutGovernance, false, "packet cannot handle PHI without governance");
assert(fhirPacket.requiredBeforeProductionAuthorization.includes("jurisdiction map"), "production authorization requires jurisdiction map");
assert(fhirPacket.requiredBeforeProductionAuthorization.includes("legal/compliance review"), "production authorization requires legal/compliance review");
assert(/cannot authorize production use/.test(fhirPacket.userVisibleStatus), "user status blocks production authorization");

const crisisPacket = runtime.buildHealthRegulatoryAssessmentPacket("Classify mental health crisis support and 988 routing.", {});
assert.strictEqual(crisisPacket.capabilityType, "mental_health_crisis_support", "crisis capability is classified");
assert.strictEqual(crisisPacket.riskTier, "high_regulated_review_required", "crisis support is high regulated risk");

const educationPacket = runtime.buildHealthRegulatoryAssessmentPacket("Classify health education preparation.", {});
assert.strictEqual(educationPacket.capabilityType, "health_education_or_preparation", "education capability is classified");
assert.strictEqual(educationPacket.riskTier, "low_to_moderate_review_required", "education is lower risk but review-gated");
assert.strictEqual(educationPacket.currentClassification, "implemented_locally", "education can remain locally implemented");

const registries = runtime.registries();
assert(registries.healthRegulatoryAssessmentGovernance, "registry packet includes regulatory assessment governance");
const status = runtime.status({});
assert.strictEqual(status.healthRegulatoryAssessmentState, runtime.HEALTH_REGULATORY_ASSESSMENT_GOVERNANCE.defaultState, "status exposes regulatory assessment state");
assert(status.activeCapabilities.includes("capability regulatory assessment"), "status includes regulatory assessment capability");

includes(server, "/api/nexus/health-evidence/regulatory-assessment", "server exposes regulatory assessment endpoint");
includes(server, "buildHealthRegulatoryAssessmentPacket", "server calls regulatory assessment packet builder");
includes(app, "Health Regulatory Assessment", "Standard User card title exists");
includes(app, "healthRegulatoryIntent", "Standard User command intent exists");
includes(app, "Can authorize production", "Standard User card shows production authorization boundary");
includes(app, "Can bypass legal review", "Standard User card shows legal review boundary");
includes(app, "Can activate live connector", "Standard User card shows connector boundary");
includes(docs, "Capability-Level Regulatory Assessment", "documentation section exists");
includes(docs, "It cannot authorize production use", "documentation preserves production authorization boundary");

assert.strictEqual(
  packageJson.scripts["qa:nexus-enterprise-health-regulatory-assessment"],
  "node scripts/nexus-enterprise-health-regulatory-assessment-qa.js",
  "package alias exists"
);
includes(qaSuite, "scripts/nexus-enterprise-health-regulatory-assessment-qa.js", "safe suites include regulatory assessment QA");

console.log("Nexus enterprise health regulatory assessment QA passed.");
