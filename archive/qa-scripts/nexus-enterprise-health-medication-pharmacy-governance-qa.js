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

assert(runtime.MEDICATION_PHARMACY_EVIDENCE_GOVERNANCE, "medication/pharmacy governance contract is exported");
assert.strictEqual(runtime.MEDICATION_PHARMACY_EVIDENCE_GOVERNANCE.executionEnabled, false, "medication/pharmacy execution remains disabled");
assert(runtime.MEDICATION_PHARMACY_EVIDENCE_GOVERNANCE.blockedWorkflows.includes("refill approval"), "refill approval is blocked");
assert(runtime.MEDICATION_PHARMACY_EVIDENCE_GOVERNANCE.blockedWorkflows.includes("dose advice"), "dose advice is blocked");
assert(runtime.MEDICATION_PHARMACY_EVIDENCE_GOVERNANCE.requiredBeforePharmacyHandoff.includes("explicit user confirmation"), "handoff requires explicit confirmation");

const refillPacket = runtime.buildMedicationPharmacyEvidencePacket("Show refill governance for metformin.", {});
assert.strictEqual(refillPacket.packetType, "enterprise_health_medication_pharmacy_evidence_governance_packet", "packet type is stable");
assert.strictEqual(refillPacket.concernType, "refill_question_preparation", "refill concern is classified");
assert.strictEqual(refillPacket.requiredReviewQueue.queueId, "medication_pharmacy_review", "medication review queue is selected");
assert.strictEqual(refillPacket.executionEnabled, false, "packet does not authorize execution");
assert.strictEqual(refillPacket.canApproveRefill, false, "packet cannot approve refill");
assert.strictEqual(refillPacket.canRecommendDose, false, "packet cannot recommend dose");
assert.strictEqual(refillPacket.canChangeMedication, false, "packet cannot change medication");
assert.strictEqual(refillPacket.canContactPharmacy, false, "packet cannot contact pharmacy");
assert.strictEqual(refillPacket.canPurchaseMedication, false, "packet cannot purchase medication");
assert.strictEqual(refillPacket.safety.noPrescribing, true, "no prescribing safety remains active");
assert.strictEqual(refillPacket.safety.noProviderContacted, true, "no provider contact safety remains active");
assert(refillPacket.sourceReceipts.some(item => item.sourceId === "rxnorm"), "RxNorm source receipt is included");
assert(/cannot prescribe/.test(refillPacket.userVisibleStatus), "user status blocks prescribing");
assert(/approve refills/.test(refillPacket.userVisibleStatus), "user status blocks refill approval");

const interactionPacket = runtime.buildMedicationPharmacyEvidencePacket("Can these medications interact together?", {});
assert.strictEqual(interactionPacket.concernType, "interaction_question_preparation", "interaction concern is classified");

const registries = runtime.registries();
assert(registries.medicationPharmacyEvidenceGovernance, "registry packet includes medication/pharmacy governance");
const status = runtime.status({});
assert.strictEqual(status.medicationPharmacyGovernanceState, runtime.MEDICATION_PHARMACY_EVIDENCE_GOVERNANCE.defaultState, "status exposes medication/pharmacy governance state");

includes(server, "/api/nexus/health-evidence/medication-pharmacy", "server exposes medication/pharmacy endpoint");
includes(server, "buildMedicationPharmacyEvidencePacket", "server calls medication/pharmacy packet builder");
includes(app, "Medication & Pharmacy Evidence Governance", "Standard User card title exists");
includes(app, "medicationPharmacyIntent", "Standard User command intent exists");
includes(app, "Can approve refill", "Standard User card shows refill boundary");
includes(app, "Can contact pharmacy", "Standard User card shows pharmacy contact boundary");
includes(docs, "Medication And Pharmacy Evidence Governance", "documentation section exists");
includes(docs, "It cannot prescribe", "documentation preserves no-prescribing boundary");

assert.strictEqual(
  packageJson.scripts["qa:nexus-enterprise-health-medication-pharmacy-governance"],
  "node scripts/nexus-enterprise-health-medication-pharmacy-governance-qa.js",
  "package alias exists"
);
includes(qaSuite, "scripts/nexus-enterprise-health-medication-pharmacy-governance-qa.js", "safe suites include medication/pharmacy QA");

console.log("Nexus enterprise health medication/pharmacy governance QA passed.");
