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

assert(Object.keys(runtime.PROFESSIONAL_WORKSPACE_ROLES).length >= 6, "professional workspace roles are governed");
assert(Object.keys(runtime.HUMAN_REVIEW_QUEUE_TYPES).length >= 6, "human review queue types are governed");
assert(runtime.REVIEW_DECISION_STATES.includes("queued_for_review"), "review decision states include queued state");
assert(runtime.REVIEW_DECISION_STATES.includes("blocked_missing_consent"), "review decision states include consent block");

const pharmacyReview = runtime.buildHumanReviewPacket("Show human review controls for pharmacy refill evidence.", { role: "pharmacist" });
assert.strictEqual(pharmacyReview.packetType, "enterprise_health_human_review_control_packet", "human review packet type is stable");
assert.strictEqual(pharmacyReview.selectedQueue.queueId, "medication_pharmacy_review", "pharmacy command selects medication/pharmacy review queue");
assert.strictEqual(pharmacyReview.requestedRole, "pharmacist", "requested professional role is honored when governed");
assert.strictEqual(pharmacyReview.executionEnabled, false, "human review packet does not enable execution");
assert.strictEqual(pharmacyReview.canApproveProviderSubmission, false, "provider submission cannot be approved by this packet");
assert.strictEqual(pharmacyReview.canApproveMedicationChange, false, "medication changes cannot be approved by this packet");
assert.strictEqual(pharmacyReview.canApproveEmergencyDispatch, false, "emergency dispatch cannot be approved by this packet");
assert.strictEqual(pharmacyReview.canBypassConsent, false, "human review cannot bypass consent");
assert.strictEqual(pharmacyReview.safety.noDiagnosis, true, "human review packet preserves no-diagnosis safety");
assert.strictEqual(pharmacyReview.safety.noProviderContacted, true, "human review packet does not contact providers");

const fhirReview = runtime.buildHumanReviewPacket("Show governance review for FHIR medical records.", { role: "physician" });
assert.strictEqual(fhirReview.selectedQueue.queueId, "fhir_record_review", "FHIR command selects FHIR record review queue");
assert(fhirReview.requiredBeforeApproval.includes("user consent for sharing or export"), "FHIR review requires user consent");

const behavioralReview = runtime.buildHumanReviewPacket("Show professional review controls for PHQ screening and crisis plan.", { role: "behavioral_health_professional" });
assert.strictEqual(behavioralReview.selectedQueue.queueId, "behavioral_crisis_review", "behavioral/crisis command selects behavioral review queue");

const registries = runtime.registries();
assert(registries.professionalWorkspaceRoles.physician, "registry packet includes professional workspace roles");
assert(registries.humanReviewQueueTypes.clinical_evidence_review, "registry packet includes human review queues");
assert(registries.reviewDecisionStates.includes("rejected_unsafe_or_unsupported"), "registry packet includes rejection state");

const status = runtime.status({});
assert(status.professionalWorkspaceRoleCount >= 6, "status exposes professional role count");
assert(status.humanReviewQueueCount >= 6, "status exposes human review queue count");

includes(server, "/api/nexus/health-evidence/human-review", "server exposes human review endpoint");
includes(server, "buildHumanReviewPacket", "server uses runtime human review packet");
includes(app, "const humanReviewIntent", "Standard User commands detect human review intent");
includes(app, "Enterprise Health Human Review Controls", "Standard User card title exists");
includes(app, "Selected queue", "Standard User card shows selected queue");
includes(app, "Can approve provider submission", "Standard User card shows provider-submission block");
includes(app, "Can bypass consent", "Standard User card shows consent boundary");
assert.strictEqual(
  packageJson.scripts["qa:nexus-enterprise-health-human-review-controls"],
  "node scripts/nexus-enterprise-health-human-review-controls-qa.js",
  "package alias exists"
);
includes(qaSuite, "scripts/nexus-enterprise-health-human-review-controls-qa.js", "safe suites include human-review QA");

console.log("Nexus enterprise health human review controls QA passed.");
