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

assert(runtime.FHIR_TERMINOLOGY_CONTRACTS, "FHIR terminology contracts are exported");
assert(runtime.FHIR_TERMINOLOGY_GOVERNANCE, "FHIR terminology governance is exported");
assert.strictEqual(runtime.FHIR_TERMINOLOGY_GOVERNANCE.executionEnabled, false, "FHIR governance execution remains disabled");
assert.strictEqual(runtime.FHIR_TERMINOLOGY_GOVERNANCE.noLiveRecordAccess, true, "live record access is blocked");
assert.strictEqual(runtime.FHIR_TERMINOLOGY_GOVERNANCE.noClinicalRecordWrite, true, "clinical record writes are blocked");
assert.strictEqual(runtime.FHIR_TERMINOLOGY_GOVERNANCE.noTerminologyDiagnosisClaim, true, "terminology cannot claim diagnosis authority");
assert.strictEqual(runtime.FHIR_TERMINOLOGY_GOVERNANCE.noSilentExport, true, "silent FHIR export is blocked");

const observationPacket = runtime.buildFhirTerminologyGovernancePacket("Map blood pressure RPM reading to FHIR Observation and LOINC.", {});
assert.strictEqual(observationPacket.packetType, "enterprise_health_fhir_terminology_governance_packet", "packet type is stable");
assert.strictEqual(observationPacket.domainId, "fhir_records", "FHIR packet domain is stable");
assert.strictEqual(observationPacket.requestedResource, "Observation", "observation resource is inferred");
assert.strictEqual(observationPacket.requestedTerminologySystem, "loinc", "LOINC terminology is inferred");
assert.strictEqual(observationPacket.executionEnabled, false, "packet does not authorize execution");
assert.strictEqual(observationPacket.canAccessLiveRecords, false, "packet cannot access live records");
assert.strictEqual(observationPacket.canWriteClinicalRecords, false, "packet cannot write clinical records");
assert.strictEqual(observationPacket.canExportFhirBundle, false, "packet cannot export FHIR bundle");
assert.strictEqual(observationPacket.canImportFhirBundle, false, "packet cannot import FHIR bundle");
assert.strictEqual(observationPacket.canSubmitToProvider, false, "packet cannot submit to provider");
assert.strictEqual(observationPacket.canAssignDiagnosisCode, false, "packet cannot assign diagnosis codes");
assert.strictEqual(observationPacket.canPrepareMappingPreview, true, "packet can prepare mapping preview");
assert(observationPacket.requiredBeforeConnectorUse.includes("verified FHIR connector"), "connector use requires verified connector");
assert(observationPacket.requiredBeforeConnectorUse.includes("explicit user consent"), "connector use requires explicit consent");
assert(observationPacket.requiredBeforeTerminologyUse.includes("qualified review for clinical meaning"), "terminology use requires qualified review");
assert(/cannot access live records/.test(observationPacket.userVisibleStatus), "user status blocks live record access");
assert(/assign diagnosis codes/.test(observationPacket.userVisibleStatus), "user status blocks diagnosis-code assignment");

const medicationPacket = runtime.buildFhirTerminologyGovernancePacket("Prepare RxNorm medication governance for pharmacy record.", {});
assert.strictEqual(medicationPacket.requestedResource, "MedicationStatement", "medication resource is inferred");
assert.strictEqual(medicationPacket.requestedTerminologySystem, "rxnorm", "RxNorm terminology is inferred");

const conditionPacket = runtime.buildFhirTerminologyGovernancePacket("Prepare SNOMED condition mapping for diabetes.", {});
assert.strictEqual(conditionPacket.requestedResource, "Condition", "condition resource is inferred");
assert.strictEqual(conditionPacket.requestedTerminologySystem, "snomed", "SNOMED terminology is inferred");

const registries = runtime.registries();
assert(registries.fhirTerminologyGovernance, "registry packet includes FHIR terminology governance");
const status = runtime.status({});
assert.strictEqual(status.fhirTerminologyGovernanceState, runtime.FHIR_TERMINOLOGY_GOVERNANCE.defaultState, "status exposes FHIR governance state");
assert(status.activeCapabilities.includes("FHIR terminology governance"), "status includes FHIR terminology governance capability");

includes(server, "/api/nexus/health-evidence/fhir-terminology", "server exposes FHIR terminology endpoint");
includes(server, "buildFhirTerminologyGovernancePacket", "server calls FHIR terminology packet builder");
includes(app, "FHIR & Clinical Terminology Governance", "Standard User card title exists");
includes(app, "fhirTerminologyIntent", "Standard User command intent exists");
includes(app, "Can access live records", "Standard User card shows live-record boundary");
includes(app, "Can write clinical records", "Standard User card shows write boundary");
includes(app, "Can assign diagnosis code", "Standard User card shows diagnosis-code boundary");
includes(docs, "FHIR And Clinical Terminology Governance", "documentation section exists");
includes(docs, "It cannot access live records", "documentation preserves no-record-access boundary");

assert.strictEqual(
  packageJson.scripts["qa:nexus-enterprise-health-fhir-terminology-governance"],
  "node scripts/nexus-enterprise-health-fhir-terminology-governance-qa.js",
  "package alias exists"
);
includes(qaSuite, "scripts/nexus-enterprise-health-fhir-terminology-governance-qa.js", "safe suites include FHIR terminology QA");

console.log("Nexus enterprise health FHIR terminology governance QA passed.");
