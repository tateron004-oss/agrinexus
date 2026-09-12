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

assert(runtime.LABORATORY_DIAGNOSTIC_EVIDENCE_GOVERNANCE, "laboratory/diagnostic governance contract is exported");
assert.strictEqual(runtime.LABORATORY_DIAGNOSTIC_EVIDENCE_GOVERNANCE.executionEnabled, false, "laboratory execution remains disabled");
assert(runtime.LABORATORY_DIAGNOSTIC_EVIDENCE_GOVERNANCE.blockedWorkflows.includes("diagnosis"), "diagnosis is blocked");
assert(runtime.LABORATORY_DIAGNOSTIC_EVIDENCE_GOVERNANCE.blockedWorkflows.includes("final lab interpretation"), "final lab interpretation is blocked");
assert(runtime.LABORATORY_DIAGNOSTIC_EVIDENCE_GOVERNANCE.blockedWorkflows.includes("medical-record write"), "medical-record write is blocked");

const labPacket = runtime.buildLaboratoryDiagnosticEvidencePacket("Show lab governance for A1C units and reference range.", {});
assert.strictEqual(labPacket.packetType, "enterprise_health_laboratory_diagnostic_evidence_governance_packet", "packet type is stable");
assert.strictEqual(labPacket.domainId, "laboratory", "lab command selects laboratory domain");
assert.strictEqual(labPacket.concernType, "unit_reference_range_question_preparation", "reference-range concern is classified");
assert.strictEqual(labPacket.requiredReviewQueue.queueId, "laboratory_diagnostic_review", "lab review queue is selected");
assert.strictEqual(labPacket.executionEnabled, false, "packet does not authorize execution");
assert.strictEqual(labPacket.canDiagnose, false, "packet cannot diagnose");
assert.strictEqual(labPacket.canFinalInterpretLab, false, "packet cannot final-interpret labs");
assert.strictEqual(labPacket.canInterpretImagingUrgency, false, "packet cannot interpret imaging urgency");
assert.strictEqual(labPacket.canWriteMedicalRecord, false, "packet cannot write medical records");
assert.strictEqual(labPacket.safety.noDiagnosis, true, "no diagnosis safety remains active");
assert(labPacket.sourceReceipts.some(item => item.sourceId === "loinc"), "LOINC source receipt is included");
assert(/cannot diagnose/.test(labPacket.userVisibleStatus), "user status blocks diagnosis");
assert(/final lab interpretation/.test(labPacket.userVisibleStatus), "user status blocks final interpretation");

const imagingPacket = runtime.buildLaboratoryDiagnosticEvidencePacket("Show imaging governance for an xray report.", {});
assert.strictEqual(imagingPacket.domainId, "diagnostic_imaging", "imaging command selects diagnostic imaging domain");
assert.strictEqual(imagingPacket.concernType, "diagnostic_imaging_report_preparation", "imaging concern is classified");

const registries = runtime.registries();
assert(registries.laboratoryDiagnosticEvidenceGovernance, "registry packet includes laboratory/diagnostic governance");
const status = runtime.status({});
assert.strictEqual(status.laboratoryDiagnosticGovernanceState, runtime.LABORATORY_DIAGNOSTIC_EVIDENCE_GOVERNANCE.defaultState, "status exposes laboratory/diagnostic governance state");

includes(server, "/api/nexus/health-evidence/laboratory-diagnostic", "server exposes laboratory/diagnostic endpoint");
includes(server, "buildLaboratoryDiagnosticEvidencePacket", "server calls laboratory/diagnostic packet builder");
includes(app, "Laboratory & Diagnostic Evidence Governance", "Standard User card title exists");
includes(app, "laboratoryDiagnosticIntent", "Standard User command intent exists");
includes(app, "Can final-interpret lab", "Standard User card shows interpretation boundary");
includes(app, "Can write medical record", "Standard User card shows record-write boundary");
includes(docs, "Laboratory And Diagnostic Evidence Governance", "documentation section exists");
includes(docs, "It cannot diagnose", "documentation preserves no-diagnosis boundary");

assert.strictEqual(
  packageJson.scripts["qa:nexus-enterprise-health-laboratory-diagnostic-governance"],
  "node scripts/nexus-enterprise-health-laboratory-diagnostic-governance-qa.js",
  "package alias exists"
);
includes(qaSuite, "scripts/nexus-enterprise-health-laboratory-diagnostic-governance-qa.js", "safe suites include laboratory/diagnostic QA");

console.log("Nexus enterprise health laboratory/diagnostic governance QA passed.");
