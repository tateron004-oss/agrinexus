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

assert(runtime.HEALTH_COMMUNICATIONS_FOLLOW_UP_GOVERNANCE, "health communications/follow-up governance is exported");
assert.strictEqual(runtime.HEALTH_COMMUNICATIONS_FOLLOW_UP_GOVERNANCE.executionEnabled, false, "execution remains disabled");
assert.strictEqual(runtime.HEALTH_COMMUNICATIONS_FOLLOW_UP_GOVERNANCE.noSilentSend, true, "silent sends are blocked");
assert.strictEqual(runtime.HEALTH_COMMUNICATIONS_FOLLOW_UP_GOVERNANCE.noSilentCall, true, "silent calls are blocked");
assert.strictEqual(runtime.HEALTH_COMMUNICATIONS_FOLLOW_UP_GOVERNANCE.noProviderContactWithoutApproval, true, "provider contact requires approval");
assert.strictEqual(runtime.HEALTH_COMMUNICATIONS_FOLLOW_UP_GOVERNANCE.noEmergencyRouting, true, "emergency routing is blocked");

const rpmPacket = runtime.buildHealthCommunicationsFollowUpPacket("Prepare RPM follow-up reminder for blood pressure.", {});
assert.strictEqual(rpmPacket.packetType, "enterprise_health_communications_follow_up_governance_packet", "packet type is stable");
assert.strictEqual(rpmPacket.domainId, "health_communications_follow_up", "domain id is stable");
assert.strictEqual(rpmPacket.followUpType, "chronic_monitoring_follow_up", "RPM follow-up is classified");
assert.strictEqual(rpmPacket.clinicalRelated, true, "RPM follow-up is clinical-related");
assert.strictEqual(rpmPacket.executionEnabled, false, "packet does not authorize execution");
assert.strictEqual(rpmPacket.canPrepareMessageDraft, true, "packet can prepare message draft");
assert.strictEqual(rpmPacket.canPrepareCallScript, true, "packet can prepare call script");
assert.strictEqual(rpmPacket.canPrepareReminder, true, "packet can prepare reminder");
assert.strictEqual(rpmPacket.canSendMessage, false, "packet cannot send message");
assert.strictEqual(rpmPacket.canStartCall, false, "packet cannot start call");
assert.strictEqual(rpmPacket.canScheduleAppointment, false, "packet cannot schedule appointment");
assert.strictEqual(rpmPacket.canContactProvider, false, "packet cannot contact provider");
assert.strictEqual(rpmPacket.canRouteEmergency, false, "packet cannot route emergency");
assert(rpmPacket.requiredBeforeSend.includes("explicit user approval"), "send gates require explicit approval");
assert(rpmPacket.requiredBeforeSend.includes("final confirmation"), "send gates require final confirmation");
assert(/cannot send messages/.test(rpmPacket.userVisibleStatus), "user status blocks message sending");

const pharmacyPacket = runtime.buildHealthCommunicationsFollowUpPacket("Prepare pharmacy refill follow-up.", {});
assert.strictEqual(pharmacyPacket.followUpType, "pharmacy_follow_up", "pharmacy follow-up is classified");
assert.strictEqual(pharmacyPacket.canRequestRefill, false, "packet cannot request refill");

const providerPacket = runtime.buildHealthCommunicationsFollowUpPacket("Prepare provider follow-up after telehealth visit.", {});
assert.strictEqual(providerPacket.followUpType, "provider_visit_follow_up", "provider follow-up is classified");
assert.strictEqual(providerPacket.requiredReviewQueue.queueId, "clinical_evidence_review", "provider follow-up routes to clinical review queue");

const crisisPacket = runtime.buildHealthCommunicationsFollowUpPacket("Prepare emergency crisis follow-up.", {});
assert.strictEqual(crisisPacket.followUpType, "crisis_boundary_follow_up", "crisis boundary follow-up is classified");
assert.strictEqual(crisisPacket.crisisRelated, true, "crisis packet is marked crisis-related");
assert.strictEqual(crisisPacket.requiredReviewQueue.queueId, "behavioral_crisis_review", "crisis packet routes to behavioral/crisis queue");
assert.strictEqual(crisisPacket.safety.noEmergencyDispatch, true, "common safety blocks emergency dispatch");

const registries = runtime.registries();
assert(registries.healthCommunicationsFollowUpGovernance, "registry packet includes communications/follow-up governance");
const status = runtime.status({});
assert.strictEqual(status.healthCommunicationsFollowUpState, runtime.HEALTH_COMMUNICATIONS_FOLLOW_UP_GOVERNANCE.defaultState, "status exposes follow-up state");
assert(status.activeCapabilities.includes("health communications/follow-up governance"), "status includes follow-up capability");

includes(server, "/api/nexus/health-evidence/communications-follow-up", "server exposes communications/follow-up endpoint");
includes(server, "buildHealthCommunicationsFollowUpPacket", "server calls communications/follow-up packet builder");
includes(app, "Health Communications & Follow-Up Governance", "Standard User card title exists");
includes(app, "healthFollowUpIntent", "Standard User command intent exists");
includes(app, "Can send message", "Standard User card shows send boundary");
includes(app, "Can start call", "Standard User card shows call boundary");
includes(app, "Can route emergency", "Standard User card shows emergency boundary");
includes(docs, "Health Communications And Follow-Up Governance", "documentation section exists");
includes(docs, "It cannot send messages", "documentation preserves no-send boundary");

assert.strictEqual(
  packageJson.scripts["qa:nexus-enterprise-health-communications-follow-up-governance"],
  "node scripts/nexus-enterprise-health-communications-follow-up-governance-qa.js",
  "package alias exists"
);
includes(qaSuite, "scripts/nexus-enterprise-health-communications-follow-up-governance-qa.js", "safe suites include communications/follow-up QA");

console.log("Nexus enterprise health communications/follow-up governance QA passed.");
