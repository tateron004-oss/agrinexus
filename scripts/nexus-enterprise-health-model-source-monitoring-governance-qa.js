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

assert(runtime.HEALTH_MODEL_SOURCE_MONITORING_GOVERNANCE, "model/source monitoring governance is exported");
assert.strictEqual(runtime.HEALTH_MODEL_SOURCE_MONITORING_GOVERNANCE.executionEnabled, false, "execution remains disabled");
assert.strictEqual(runtime.HEALTH_MODEL_SOURCE_MONITORING_GOVERNANCE.liveMonitoringEnabled, false, "live monitoring remains disabled");
assert.strictEqual(runtime.HEALTH_MODEL_SOURCE_MONITORING_GOVERNANCE.noAutonomousClinicalUpdate, true, "autonomous clinical updates are blocked");
assert.strictEqual(runtime.HEALTH_MODEL_SOURCE_MONITORING_GOVERNANCE.noSilentSourceReplacement, true, "silent source replacement is blocked");
assert.strictEqual(runtime.HEALTH_MODEL_SOURCE_MONITORING_GOVERNANCE.noEmergencyEscalation, true, "emergency escalation is blocked");

const modelPacket = runtime.buildHealthModelSourceMonitoringPacket("Show model monitoring for diabetes risk score drift.", {});
assert.strictEqual(modelPacket.packetType, "enterprise_health_model_source_monitoring_governance_packet", "packet type is stable");
assert.strictEqual(modelPacket.domainId, "health_model_source_monitoring", "domain id is stable");
assert.strictEqual(modelPacket.monitoringType, "model_drift_monitoring", "model drift monitoring is classified");
assert.strictEqual(modelPacket.executionEnabled, false, "packet does not authorize execution");
assert.strictEqual(modelPacket.liveMonitoringEnabled, false, "packet does not enable live monitoring");
assert.strictEqual(modelPacket.canCreateReviewTicket, true, "packet can create review ticket");
assert.strictEqual(modelPacket.canGenerateGovernanceReceipt, true, "packet can generate governance receipt");
assert.strictEqual(modelPacket.canRunLiveMonitoring, false, "packet cannot run live monitoring");
assert.strictEqual(modelPacket.canClaimSourceCurrent, false, "packet cannot claim source current");
assert.strictEqual(modelPacket.canUpdateClinicalGuidance, false, "packet cannot update clinical guidance");
assert.strictEqual(modelPacket.canReplaceSourceSilently, false, "packet cannot replace source silently");
assert.strictEqual(modelPacket.canRecalibrateModel, false, "packet cannot recalibrate model");
assert.strictEqual(modelPacket.canNotifyProvider, false, "packet cannot notify provider");
assert.strictEqual(modelPacket.canEscalateEmergency, false, "packet cannot escalate emergency");
assert(modelPacket.requiredBeforeLiveMonitoring.includes("configured source connector"), "live monitoring requires connector");
assert(modelPacket.requiredBeforeUserAlert.includes("verified signal"), "user alert requires verified signal");
assert(/cannot run live monitoring/.test(modelPacket.userVisibleStatus), "user status blocks live monitoring");

const sourcePacket = runtime.buildHealthModelSourceMonitoringPacket("Review stale source freshness for hypertension guideline.", {});
assert.strictEqual(sourcePacket.monitoringType, "source_freshness_monitoring", "source freshness monitoring is classified");

const calculatorPacket = runtime.buildHealthModelSourceMonitoringPacket("Review calculator version for eGFR formula.", {});
assert.strictEqual(calculatorPacket.monitoringType, "calculator_version_monitoring", "calculator version monitoring is classified");

const providerPacket = runtime.buildHealthModelSourceMonitoringPacket("Review provider license trust status.", {});
assert.strictEqual(providerPacket.monitoringType, "provider_trust_monitoring", "provider trust monitoring is classified");
assert.strictEqual(providerPacket.clinicalRelated, false, "provider trust monitoring is not clinical guidance by itself");
assert.strictEqual(providerPacket.reviewQueue.queueId, "social_care_review", "provider trust monitoring uses non-clinical governance queue");

const registries = runtime.registries();
assert(registries.healthModelSourceMonitoringGovernance, "registry packet includes model/source monitoring governance");
const status = runtime.status({});
assert.strictEqual(status.healthModelSourceMonitoringState, runtime.HEALTH_MODEL_SOURCE_MONITORING_GOVERNANCE.defaultState, "status exposes monitoring state");
assert(status.activeCapabilities.includes("health model/source monitoring governance"), "status includes monitoring capability");

includes(server, "/api/nexus/health-evidence/monitoring", "server exposes monitoring endpoint");
includes(server, "buildHealthModelSourceMonitoringPacket", "server calls monitoring packet builder");
includes(app, "Health Model & Source Monitoring Governance", "Standard User card title exists");
includes(app, "healthMonitoringIntent", "Standard User command intent exists");
includes(app, "Can claim source current", "Standard User card shows source-current boundary");
includes(app, "Can update clinical guidance", "Standard User card shows clinical-update boundary");
includes(app, "Can recalibrate model", "Standard User card shows model boundary");
includes(docs, "Health Model And Source Monitoring Governance", "documentation section exists");
includes(docs, "It cannot run live monitoring", "documentation preserves live-monitoring boundary");

assert.strictEqual(
  packageJson.scripts["qa:nexus-enterprise-health-model-source-monitoring-governance"],
  "node scripts/nexus-enterprise-health-model-source-monitoring-governance-qa.js",
  "package alias exists"
);
includes(qaSuite, "scripts/nexus-enterprise-health-model-source-monitoring-governance-qa.js", "safe suites include model/source monitoring QA");

console.log("Nexus enterprise health model/source monitoring governance QA passed.");
