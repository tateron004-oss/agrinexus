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

assert(runtime.HEALTH_DATA_RIGHTS_GOVERNANCE, "health data rights governance is exported");
assert.strictEqual(runtime.HEALTH_DATA_RIGHTS_GOVERNANCE.executionEnabled, false, "health data rights execution remains disabled");
assert.strictEqual(runtime.HEALTH_DATA_RIGHTS_GOVERNANCE.noSilentSharing, true, "silent sharing is blocked");
assert.strictEqual(runtime.HEALTH_DATA_RIGHTS_GOVERNANCE.noSilentExport, true, "silent export is blocked");
assert.strictEqual(runtime.HEALTH_DATA_RIGHTS_GOVERNANCE.noSilentDeletion, true, "silent deletion is blocked");

const exportPacket = runtime.buildHealthDataRightsPacket("Export health data for provider review.", {});
assert.strictEqual(exportPacket.packetType, "enterprise_health_data_rights_governance_packet", "packet type is stable");
assert.strictEqual(exportPacket.actionType, "export_request_preparation", "export action is classified");
assert.strictEqual(exportPacket.executionEnabled, false, "packet does not authorize execution");
assert.strictEqual(exportPacket.canShareHealthData, false, "packet cannot share health data");
assert.strictEqual(exportPacket.canAccessFhirRecords, false, "packet cannot access FHIR records");
assert.strictEqual(exportPacket.canStoreSensitiveMemory, false, "packet cannot store sensitive memory");
assert.strictEqual(exportPacket.canExportNow, false, "packet cannot export now");
assert.strictEqual(exportPacket.canDeleteNow, false, "packet cannot delete now");
assert.strictEqual(exportPacket.canBypassRevocation, false, "packet cannot bypass revocation");
assert(exportPacket.requiredBeforeApproval.includes("export scope preview"), "export requires scope preview");
assert(/cannot share health data/.test(exportPacket.userVisibleStatus), "user status blocks sharing");
assert(/store sensitive memory/.test(exportPacket.userVisibleStatus), "user status blocks sensitive memory");

const revokePacket = runtime.buildHealthDataRightsPacket("Revoke consent for pharmacy sharing.", {});
assert.strictEqual(revokePacket.actionType, "consent_revocation_preparation", "revocation action is classified");
assert(revokePacket.requiredBeforeApproval.includes("revocation path"), "revocation requires revocation path");

const deletePacket = runtime.buildHealthDataRightsPacket("Delete health data local copy.", {});
assert.strictEqual(deletePacket.actionType, "deletion_request_preparation", "deletion action is classified");
assert(deletePacket.requiredBeforeApproval.includes("retention/legal limitation check"), "deletion requires retention/legal check");

const registries = runtime.registries();
assert(registries.healthDataRightsGovernance, "registry packet includes health data rights governance");
const status = runtime.status({});
assert.strictEqual(status.healthDataRightsGovernanceState, runtime.HEALTH_DATA_RIGHTS_GOVERNANCE.defaultMemoryState, "status exposes health data rights governance state");

includes(server, "/api/nexus/health-evidence/consent-rights", "server exposes consent rights endpoint");
includes(server, "buildHealthDataRightsPacket", "server calls health data rights packet builder");
includes(app, "Health Data Rights & Consent Governance", "Standard User card title exists");
includes(app, "healthDataRightsIntent", "Standard User command intent exists");
includes(app, "Can share health data", "Standard User card shows sharing boundary");
includes(app, "Can store sensitive memory", "Standard User card shows memory boundary");
includes(docs, "Health Data Rights And Consent Governance", "documentation section exists");
includes(docs, "It cannot share health data", "documentation preserves no-sharing boundary");

assert.strictEqual(
  packageJson.scripts["qa:nexus-enterprise-health-data-rights-governance"],
  "node scripts/nexus-enterprise-health-data-rights-governance-qa.js",
  "package alias exists"
);
includes(qaSuite, "scripts/nexus-enterprise-health-data-rights-governance-qa.js", "safe suites include data-rights QA");

console.log("Nexus enterprise health data rights governance QA passed.");
