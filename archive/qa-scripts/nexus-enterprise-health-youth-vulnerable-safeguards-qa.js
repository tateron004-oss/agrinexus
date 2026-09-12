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

assert(runtime.YOUTH_VULNERABLE_POPULATION_GOVERNANCE, "youth/vulnerable governance is exported");
assert.strictEqual(runtime.YOUTH_VULNERABLE_POPULATION_GOVERNANCE.executionEnabled, false, "safeguard execution remains disabled");
assert.strictEqual(runtime.YOUTH_VULNERABLE_POPULATION_GOVERNANCE.noPrivateDisclosure, true, "private disclosure is blocked");
assert.strictEqual(runtime.YOUTH_VULNERABLE_POPULATION_GOVERNANCE.noUnsafeFamilyAssumption, true, "unsafe family assumptions are blocked");
assert.strictEqual(runtime.YOUTH_VULNERABLE_POPULATION_GOVERNANCE.noChildLaborRouting, true, "child labor routing is blocked");
assert.strictEqual(runtime.YOUTH_VULNERABLE_POPULATION_GOVERNANCE.noEmergencyDispatch, true, "emergency dispatch is blocked");

const pregnancyPacket = runtime.buildYouthVulnerableSafeguardPacket("Prepare pregnancy safeguard for danger signs.", {});
assert.strictEqual(pregnancyPacket.packetType, "enterprise_health_youth_vulnerable_safeguard_packet", "packet type is stable");
assert.strictEqual(pregnancyPacket.domainId, "maternal_child", "pregnancy maps to maternal child domain");
assert.strictEqual(pregnancyPacket.population, "pregnancy_or_postpartum", "pregnancy population is classified");
assert.strictEqual(pregnancyPacket.crisisRelated, true, "pregnancy safeguard is crisis-related for danger context");
assert.strictEqual(pregnancyPacket.executionEnabled, false, "packet does not authorize execution");
assert.strictEqual(pregnancyPacket.canPrepareSafeguardQuestions, true, "packet can prepare safeguard questions");
assert.strictEqual(pregnancyPacket.canSharePrivately, false, "packet cannot share privately");
assert.strictEqual(pregnancyPacket.canAssumeFamilyConsent, false, "packet cannot assume family consent");
assert.strictEqual(pregnancyPacket.canRouteChildLabor, false, "packet cannot route child labor");
assert.strictEqual(pregnancyPacket.canDiagnose, false, "packet cannot diagnose");
assert.strictEqual(pregnancyPacket.canPrescribe, false, "packet cannot prescribe");
assert.strictEqual(pregnancyPacket.canDispatchEmergencyHelp, false, "packet cannot dispatch emergency help");
assert.strictEqual(pregnancyPacket.canContactProviderOrGuardian, false, "packet cannot contact provider or guardian");
assert(pregnancyPacket.requiredBeforeAction.includes("jurisdiction resource lookup"), "crisis-related safeguards require jurisdiction resource lookup");
assert(/cannot disclose private information/.test(pregnancyPacket.userVisibleStatus), "user status blocks private disclosure");
assert(/dispatch emergency help/.test(pregnancyPacket.userVisibleStatus), "user status blocks emergency dispatch");

const childPacket = runtime.buildYouthVulnerableSafeguardPacket("Prepare child safety and minor safeguard review.", {});
assert.strictEqual(childPacket.population, "minor_or_youth", "minor/youth population is classified");
assert.strictEqual(childPacket.crisisRelated, false, "minor safeguard is not crisis-related by default");
assert(childPacket.requiredBeforeAction.includes("user assent/consent or legally appropriate guardian consent"), "minor safeguard requires appropriate consent");

const elderPacket = runtime.buildYouthVulnerableSafeguardPacket("Prepare elder safeguard for caregiver support.", {});
assert.strictEqual(elderPacket.population, "elder", "elder population is classified");

const registries = runtime.registries();
assert(registries.youthVulnerablePopulationGovernance, "registry packet includes youth/vulnerable governance");
const status = runtime.status({});
assert.strictEqual(status.youthVulnerableSafeguardState, runtime.YOUTH_VULNERABLE_POPULATION_GOVERNANCE.defaultState, "status exposes safeguard state");
assert(status.activeCapabilities.includes("youth/vulnerable safeguards"), "status includes safeguard capability");

includes(server, "/api/nexus/health-evidence/youth-vulnerable-safeguards", "server exposes youth/vulnerable endpoint");
includes(server, "buildYouthVulnerableSafeguardPacket", "server calls youth/vulnerable packet builder");
includes(app, "Youth & Vulnerable Population Safeguards", "Standard User card title exists");
includes(app, "youthVulnerableIntent", "Standard User command intent exists");
includes(app, "Can share privately", "Standard User card shows disclosure boundary");
includes(app, "Can contact provider or guardian", "Standard User card shows contact boundary");
includes(app, "Can dispatch emergency help", "Standard User card shows emergency boundary");
includes(docs, "Youth And Vulnerable Population Safeguards", "documentation section exists");
includes(docs, "It cannot disclose private information", "documentation preserves privacy boundary");

assert.strictEqual(
  packageJson.scripts["qa:nexus-enterprise-health-youth-vulnerable-safeguards"],
  "node scripts/nexus-enterprise-health-youth-vulnerable-safeguards-qa.js",
  "package alias exists"
);
includes(qaSuite, "scripts/nexus-enterprise-health-youth-vulnerable-safeguards-qa.js", "safe suites include youth/vulnerable QA");

console.log("Nexus enterprise health youth/vulnerable safeguards QA passed.");
