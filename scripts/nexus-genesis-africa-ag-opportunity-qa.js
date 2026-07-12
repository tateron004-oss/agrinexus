const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const runtime = require(path.join(root, "public", "nexus-genesis-africa-ag-opportunity.js"));
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const index = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");
const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

assert.strictEqual(runtime.SERVICE_ID, "africa_youth_women_agricultural_opportunity_intelligence");
assert(runtime.SUPPORTED_COUNTRIES.length >= 10, "runtime must configure multiple African countries");
assert(runtime.SOURCE_REGISTRY.length >= 10, "runtime must seed trusted source registry");
assert(runtime.MODEL_REGISTRY.length >= 8, "runtime must register governed predictive models");
assert(runtime.CAPABILITY_STATUS.training_enrollment_request === "credential_blocked", "training enrollment must be credential blocked");
assert(runtime.CAPABILITY_STATUS.production_authorization === "not_production_authorized", "production authorization must remain blocked");

[
  "Nexus, help me start farming.",
  "What agriculture pathway fits me?",
  "I am a young woman and need income.",
  "I need childcare to attend training.",
  "I want to learn drone agriculture.",
  "Find buyers for my crops.",
  "Find financing.",
  "Show Africa youth and women agriculture capability status and production limitations."
].forEach(command => {
  assert.strictEqual(runtime.shouldHandle(command), true, `should handle ${command}`);
});

const packet = runtime.buildOpportunityPacket("I am a young woman in Kenya. I do not have land, need childcare, and want to start a poultry business.");
assert.strictEqual(packet.packetType, "genesis_africa_youth_women_ag_opportunity_packet");
assert.strictEqual(packet.capabilityId, runtime.SERVICE_ID);
assert.strictEqual(packet.participantProfile.country, "Kenya");
assert(packet.participantProfile.barriers.includes("land_access"), "land access barrier must be detected");
assert(packet.participantProfile.barriers.includes("childcare"), "childcare barrier must be detected");
assert(packet.recommendations.some(item => /poultry/i.test(item.title)), "poultry pathway must be recommended");
assert(packet.receipt.receiptId.startsWith("africa-ag-opportunity-receipt-"), "receipt must exist");
assert.strictEqual(packet.buyerContactEnabled, false, "buyer contact must be disabled");
assert.strictEqual(packet.trainingEnrollmentEnabled, false, "training enrollment must be disabled");
assert.strictEqual(packet.financingApplicationEnabled, false, "financing application must be disabled");
assert.strictEqual(packet.yieldGuaranteeEnabled, false, "yield guarantees must be disabled");
assert.strictEqual(packet.incomeGuaranteeEnabled, false, "income guarantees must be disabled");
assert(packet.explanation.whatNexusIsNotConcluding.some(item => /not guaranteeing income/i.test(item)), "packet must state no income guarantee");

const statusPacket = runtime.buildCapabilityStatusPacket("Show Africa youth and women agriculture capability status and production limitations.");
assert.strictEqual(statusPacket.packetType, "genesis_africa_ag_opportunity_capability_status_packet");
assert.strictEqual(statusPacket.productionAuthorized, false);
assert.strictEqual(statusPacket.buyerContactEnabled, false);
assert.strictEqual(statusPacket.trainingEnrollmentEnabled, false);
assert(statusPacket.classificationCounts.implemented_locally >= 8, "status must classify implemented local capabilities");
assert(statusPacket.classificationCounts.credential_blocked >= 4, "status must classify credential-blocked execution capabilities");

const registries = runtime.registries();
assert.strictEqual(registries.packetType, "genesis_africa_ag_opportunity_registry_packet");
assert.strictEqual(registries.buyerContactEnabled, false);

[
  "nexus-genesis-africa-ag-opportunity.js",
  "handleNexusGenesisAfricaAgOpportunityCommand",
  "renderNexusGenesisAfricaAgOpportunityCard",
  "Africa Agriculture Opportunity Packet",
  "noYieldOrIncomeGuarantee",
  "Buyer contacted",
  "Training enrolled"
].forEach(token => includes(`${index}\n${app}`, token, `frontend token ${token}`));

const commandCenterSubmitIndex = app.indexOf("const earlyCommandCenterSubmit = event.target.closest(\"[data-nexus-command-center-submit]\");");
const commandCenterAfricaIndex = app.indexOf("handleNexusGenesisAfricaAgOpportunityCommand(command, { source: \"typed-command-submit\" })", commandCenterSubmitIndex);
const commandCenterWorkforceIndex = app.indexOf("handleNexusGenesisPredictiveWorkforceCommand(command, { source: \"typed-command-submit\" })", commandCenterSubmitIndex);
assert(commandCenterSubmitIndex >= 0, "command center submit handler must exist");
assert(commandCenterAfricaIndex > commandCenterSubmitIndex, "command center must route Africa opportunity commands");
assert(commandCenterWorkforceIndex > commandCenterAfricaIndex, "Africa opportunity routing should run before generic workforce routing");

[
  "nexusGenesisAfricaAgOpportunity",
  "/api/nexus/africa-ag-opportunity/status",
  "/api/nexus/africa-ag-opportunity/registries",
  "/api/nexus/africa-ag-opportunity/evaluate",
  "/api/nexus/africa-ag-opportunity/capability-status"
].forEach(token => includes(server, token, `server token ${token}`));

[
  "guaranteed income",
  "guaranteed yield",
  "buyer contacted successfully",
  "training enrollment completed",
  "financing approved",
  "transport dispatched"
].forEach(unsafe => {
  const lower = packet.userVisibleStatus.toLowerCase();
  assert(!lower.includes(unsafe), `packet status must not contain unsafe claim: ${unsafe}`);
});

assert.strictEqual(
  packageJson.scripts["qa:nexus-genesis-africa-ag-opportunity"],
  "node scripts/nexus-genesis-africa-ag-opportunity-qa.js",
  "package alias must run focused QA"
);
includes(qaSuite, "scripts/nexus-genesis-africa-ag-opportunity-qa.js", "qa-suite wiring");

console.log("Nexus Genesis Africa agriculture opportunity QA passed.");
