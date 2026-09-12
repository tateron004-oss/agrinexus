const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const modulePath = path.join(root, "public", "nexus-enterprise-health-evidence-trust.js");
const runtime = require(modulePath);
const moduleSource = fs.readFileSync(modulePath, "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const index = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");
const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const doc = fs.readFileSync(path.join(root, "docs", "NEXUS_ENTERPRISE_HEALTH_EVIDENCE_TRUST_FOUNDATION.md"), "utf8");

function includes(source, needle, label) {
  assert(source.includes(needle), label);
}

function excludes(source, needle, label) {
  assert(!source.includes(needle), label);
}

assert.strictEqual(runtime.SERVICE_ID, "nexus_enterprise_health_evidence_trust", "service id is stable");
assert(runtime.EVIDENCE_TIERS.length >= 8, "evidence hierarchy includes 1A through 7");
assert(runtime.RECOGNIZED_SOURCE_RECORDS.length >= 10, "recognized source records are seeded");
assert(runtime.DOMAIN_EVIDENCE_MAPS.diabetes, "diabetes evidence map exists");
assert(runtime.DOMAIN_EVIDENCE_MAPS.hypertension, "hypertension evidence map exists");
assert(runtime.DOMAIN_EVIDENCE_MAPS.obesity, "obesity evidence map exists");
assert(runtime.DOMAIN_EVIDENCE_MAPS.rpm_rtm, "RPM/RTM evidence map exists");
assert(runtime.DOMAIN_EVIDENCE_MAPS.mental_health, "mental-health evidence map exists");
assert(runtime.DOMAIN_EVIDENCE_MAPS.medication, "medication evidence map exists");
assert(runtime.DOMAIN_EVIDENCE_MAPS.laboratory, "laboratory evidence map exists");
assert(runtime.PREDICTIVE_MODEL_REGISTRY.chronic_trend_review, "chronic trend governance model exists");
assert(runtime.PREDICTIVE_MODEL_REGISTRY.cardiovascular_risk_score, "calculator governance placeholder exists");

assert(runtime.shouldHandle("Show health evidence for diabetes guidance."), "health evidence command is handled");
assert(runtime.shouldHandle("Inspect predictive health governance for hypertension."), "predictive governance command is handled");
assert(runtime.shouldHandle("Show medication evidence for this pharmacy support question."), "medication evidence command is handled");
assert.strictEqual(runtime.inferDomain("Show lab evidence for this result."), "laboratory", "lab domain inference works");

const diabetesPacket = runtime.inspect("Show diabetes evidence guidance.");
assert.strictEqual(diabetesPacket.packetType, "enterprise_health_evidence_trust_packet", "inspection packet type is correct");
assert.strictEqual(diabetesPacket.domainId, "diabetes", "diabetes inspection maps to diabetes");
assert(diabetesPacket.sourceReceipts.length >= 3, "diabetes packet includes multiple source receipts");
assert.strictEqual(diabetesPacket.safety.noDiagnosis, true, "inspection packet blocks diagnosis");
assert.strictEqual(diabetesPacket.safety.noFakeCitation, true, "inspection packet blocks fake citations");
assert(/professional/i.test(diabetesPacket.userVisibleStatus), "inspection response includes professional review framing");

const predictivePacket = runtime.predictiveGovernance("Inspect predictive health governance for RPM readings.");
assert.strictEqual(predictivePacket.packetType, "predictive_health_governance_packet", "predictive packet type is correct");
assert.strictEqual(predictivePacket.allowedNow, "descriptive_review_only", "predictive support is descriptive only");
assert(predictivePacket.blockedUntil.includes("validated intended population"), "validated population gate is present");
assert.strictEqual(predictivePacket.safety.noFakeModelValidation, true, "fake model validation is blocked");

const status = runtime.status({});
assert.strictEqual(status.executionEnabled, false, "clinical execution is disabled");
assert.strictEqual(status.clinicalAuthorityClaimed, false, "clinical authority is not claimed");
assert(status.blockedCapabilities.includes("unvalidated prediction"), "unvalidated prediction remains blocked");

[
  "clinically proven for every population",
  "approved worldwide",
  "accepted by all doctors",
  "diagnosed you",
  "I diagnosed",
  "Nexus prescribed medication",
  "medication changed",
  "provider accepted your case",
  "emergency dispatched",
  "guaranteed eligibility"
].forEach(unsafe => {
  assert(runtime.hasUnsafeClaim(unsafe), `unsafe phrase detector catches: ${unsafe}`);
  excludes(JSON.stringify(diabetesPacket), unsafe, `inspection packet must not output unsafe phrase: ${unsafe}`);
  excludes(JSON.stringify(predictivePacket), unsafe, `predictive packet must not output unsafe phrase: ${unsafe}`);
});

includes(index, "nexus-enterprise-health-evidence-trust.js", "browser loads enterprise evidence runtime");
includes(server, "nexusEnterpriseHealthEvidenceTrust", "server imports enterprise evidence runtime");
includes(server, "/api/nexus/health-evidence/status", "status endpoint exists");
includes(server, "/api/nexus/health-evidence/sources", "sources endpoint exists");
includes(server, "/api/nexus/health-evidence/inspect", "inspect endpoint exists");
includes(server, "/api/nexus/health-evidence/predictive-governance", "predictive governance endpoint exists");
includes(server, "Enterprise Health Evidence Trust", "provider readiness card exists");
includes(server, "No diagnosis, prescribing, unvalidated prediction", "readiness card states no fake execution");

includes(app, "handleNexusEnterpriseHealthEvidenceTrustCommand", "Standard User evidence trust handler exists");
includes(app, "NexusEnterpriseHealthEvidenceTrust", "app uses shared runtime");
includes(app, "enterprise_health_evidence_trust_packet", "app renders evidence trust packet");
includes(app, "noFakeCitation: true", "app result blocks fake citations");
includes(app, "noProviderContacted: true", "app result blocks provider contact");
includes(app, "handleNexusEnterpriseHealthEvidenceTrustCommand(command, { source })", "Genesis submit routes enterprise evidence before generic workflows");
includes(app, "handleNexusEnterpriseHealthEvidenceTrustCommand(command, { source: \"typed-command-submit\" })", "visible command center routes enterprise evidence before generic workflows");
includes(app, "handleNexusEnterpriseHealthEvidenceTrustCommand(command, { source: \"typed-command-keyboard\" })", "keyboard command center routes enterprise evidence before generic workflows");

includes(doc, "HealthEvidenceTrustService", "documentation names common service");
includes(doc, "does not diagnose", "documentation preserves diagnosis boundary");
includes(doc, "does not execute live provider actions", "documentation preserves no-execution boundary");

assert(packageJson.scripts["qa:nexus-enterprise-health-evidence-trust"], "package alias exists");
includes(qaSuite, "scripts/nexus-enterprise-health-evidence-trust-qa.js", "safe suites include enterprise evidence QA");

console.log("Nexus enterprise health evidence trust QA passed.");
