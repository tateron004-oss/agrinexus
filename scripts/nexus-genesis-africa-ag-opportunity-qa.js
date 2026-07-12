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
assert(runtime.COUNTRY_SOURCE_REGISTRY.length >= runtime.SUPPORTED_COUNTRIES.length * 10, "runtime must configure country-specific source records");
assert(runtime.MODEL_REGISTRY.length >= 12, "runtime must register governed predictive models");
assert(runtime.PATHWAY_REGISTRY.length >= 12, "runtime must configure agriculture, workforce, and enterprise pathways");
assert(runtime.RISK_INTELLIGENCE_REGISTRY.length >= 12, "runtime must configure climate, crop, market, and post-harvest risk signals");
assert(runtime.SUPPORT_INTELLIGENCE_REGISTRY.length >= 9, "runtime must configure learner-success and support intelligence");
assert(runtime.WOMEN_YOUTH_PROTECTION_REGISTRY.length >= 6, "runtime must configure women and youth protection controls");
assert(runtime.TRUST_REGISTRY.length >= 9, "runtime must configure verified provider/buyer/employer trust records");
assert(runtime.PRIVACY_FAIRNESS_CONTROLS.fairnessTests.length >= 5, "runtime must configure fairness tests");
assert(runtime.ACCESSIBILITY_LOCALIZATION.multilingualSupport.includes("Swahili"), "runtime must configure multilingual support");
assert(runtime.PROGRAM_IMPACT_FIELDS.funderExportEnabled === false, "funder exports must be disabled by default");
assert(runtime.REGIONAL_CONFIGURATION.east_africa.countryIds.includes("kenya"), "East Africa regional config must include Kenya");
assert(runtime.REGIONAL_CONFIGURATION.west_africa.countryIds.includes("ghana"), "West Africa regional config must include Ghana");
assert(runtime.REGIONAL_CONFIGURATION.southern_africa.countryIds.includes("zambia"), "Southern Africa regional config must include Zambia");
assert(runtime.CAPABILITY_STATUS.training_enrollment_request === "credential_blocked", "training enrollment must be credential blocked");
assert(runtime.CAPABILITY_STATUS.production_authorization === "not_production_authorized", "production authorization must remain blocked");

runtime.SUPPORTED_COUNTRIES.forEach(country => {
  const sources = runtime.COUNTRY_SOURCE_REGISTRY.filter(item => item.countryId === country.id);
  assert(sources.some(item => item.sourceType === "ministry_agriculture"), `${country.name} must include agriculture authority`);
  assert(sources.some(item => item.sourceType === "labor_employment"), `${country.name} must include labor authority`);
  assert(sources.some(item => item.sourceType === "education_training"), `${country.name} must include education/training authority`);
  assert(sources.some(item => item.sourceType === "meteorological_service"), `${country.name} must include meteorological service`);
  assert(sources.some(item => item.sourceType === "research_extension"), `${country.name} must include research/extension institute`);
  assert(sources.some(item => item.sourceType === "verified_training_provider"), `${country.name} must include training provider directory`);
  assert(sources.some(item => item.sourceType === "verified_employer"), `${country.name} must include employer directory`);
  assert(sources.some(item => item.sourceType === "verified_buyer"), `${country.name} must include buyer directory`);
  assert(sources.some(item => item.sourceType === "verified_cooperative"), `${country.name} must include cooperative directory`);
  assert(sources.some(item => item.sourceType === "finance_program"), `${country.name} must include finance program directory`);
  assert(sources.every(item => item.noExecutionAuthorized === true), `${country.name} sources must not authorize execution`);
});

[
  "Nexus, help me start farming.",
  "What agriculture pathway fits me?",
  "I am a young woman and need income.",
  "I need childcare to attend training.",
  "I want to learn drone agriculture.",
  "Find buyers for my crops.",
  "Find financing.",
  "Show Africa youth and women agriculture capability status and production limitations.",
  "Show privacy consent fairness safeguarding and export controls.",
  "Show the trust registry for verified buyers and employers.",
  "Prepare a program impact funder report.",
  "Show master completion classification for end-to-end testing."
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
assert(packet.countrySourceRegistry.some(item => item.sourceType === "ministry_agriculture"), "packet must include country-specific sources");
assert(packet.pathwayRegistry.some(item => item.pathwayId === "poultry"), "packet must include poultry pathway");
assert(packet.pathwayRegistry.some(item => item.pathwayId === "drone.agriculture"), "packet must include drone agriculture pathway");
assert(packet.pathwayRegistry.some(item => item.pathwayId === "aquaculture"), "packet must include aquaculture pathway");
assert(packet.riskIntelligenceRegistry.includes("planting_window"), "packet must include planting-window risk signal");
assert(packet.riskIntelligenceRegistry.includes("post_harvest_handling"), "packet must include post-harvest risk signal");
assert(packet.regionalConfiguration.name === "East Africa", "packet must include regional configuration");
assert(packet.supportPrediction.supportNeeds.includes("land_access"), "packet must include support prediction");
assert(packet.supportPrediction.dropoutPreventionPlan.length >= 4, "packet must include dropout prevention plan");
assert(packet.climateRiskProfile.riskSignals.includes("drought"), "packet must include climate risk profile");
assert(packet.marketEnterpriseReadiness.buyerReadiness === "buyer_backed_required", "buyer readiness must be buyer backed");
assert(packet.privacyFairnessControls.consent === "required_before_sharing_or_provider_use", "packet must include consent control");
assert(packet.accessibilityLocalization.offlineSupport.includes("locally"), "packet must include offline support");
assert(packet.trustRegistry.some(item => item.recordType === "buyer" && item.liveExecutionEnabled === false), "buyer trust record must block live execution");
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
assert(statusPacket.countrySourceCount >= 100, "status must count country-specific sources");
assert(statusPacket.pathwayCount >= 12, "status must count pathways");
assert(statusPacket.riskSignalCount >= 12, "status must count risk signals");
assert(statusPacket.trustRecordCount >= 9, "status must count trust records");
assert(statusPacket.supportSignalCount >= 9, "status must count support signals");
assert(statusPacket.protectionControlCount >= 6, "status must count protection controls");

const registries = runtime.registries();
assert.strictEqual(registries.packetType, "genesis_africa_ag_opportunity_registry_packet");
assert.strictEqual(registries.buyerContactEnabled, false);
assert(registries.countrySources.length >= 100, "registries must expose country source records");
assert(registries.pathways.some(item => item.pathwayId === "employment"), "registries must expose employment pathway");
assert(registries.pathways.some(item => item.pathwayId === "entrepreneurship"), "registries must expose entrepreneurship pathway");
assert(registries.riskSignals.includes("disease_pressure"), "registries must expose disease pressure risk signal");
assert(registries.supportSignals.some(item => item.signalId === "dropout_prevention"), "registries must expose dropout prevention support");
assert(registries.womenYouthProtections.some(item => item.protectionId === "youth_safeguarding"), "registries must expose youth safeguarding");

const governance = runtime.buildGovernancePacket("Show privacy consent fairness safeguarding and export controls.");
assert.strictEqual(governance.packetType, "genesis_africa_ag_opportunity_governance_packet");
assert.strictEqual(governance.productionAuthorized, false);
assert(governance.privacyFairnessControls.securityControls.includes("no_secret_exposure"), "governance must include security controls");
assert(governance.privacyFairnessControls.adversarialTests.includes("guaranteed_income_claim"), "governance must include adversarial checks");
assert(governance.womenYouthProtections.some(item => item.protectionId === "women_safety"), "governance must include women safety controls");

const trust = runtime.buildTrustRegistryPacket("Show the trust registry for verified buyers and employers.");
assert.strictEqual(trust.packetType, "genesis_africa_ag_opportunity_trust_registry_packet");
assert(trust.trustRegistry.some(item => item.recordType === "buyer" && item.state === "buyer_backed"), "trust registry must include buyer-backed state");
assert(trust.trustRegistry.every(item => item.liveExecutionEnabled === false), "trust registry must not enable live execution");
assert(trust.sourceVerificationStates.includes("credential_blocked"), "trust registry must classify credential-blocked state");

const impact = runtime.buildProgramImpactPacket("Prepare a program impact funder report.");
assert.strictEqual(impact.packetType, "genesis_africa_ag_opportunity_program_impact_packet");
assert.strictEqual(impact.funderExportEnabled, false);
assert.strictEqual(impact.aggregateOnlyWithoutConsent, true);
assert(impact.programImpactFields.reportingRule.includes("verified outcomes"), "impact packet must separate verified and estimated outcomes");

const completion = runtime.buildCompletionClassificationPacket("Show master completion classification for end-to-end testing.");
assert.strictEqual(completion.packetType, "genesis_africa_ag_opportunity_completion_classification_packet");
assert.strictEqual(completion.classifications.localAdvisoryRuntime, "implemented_locally");
assert.strictEqual(completion.classifications.trainingEnrollment, "credential_blocked");
assert.strictEqual(completion.classifications.productionAuthorization, "not_production_authorized");
assert(completion.registryCounts.countrySources >= 100, "completion packet must count country sources");

[
  "nexus-genesis-africa-ag-opportunity.js",
  "handleNexusGenesisAfricaAgOpportunityCommand",
  "renderNexusGenesisAfricaAgOpportunityCard",
  "Africa Agriculture Opportunity Packet",
  "noYieldOrIncomeGuarantee",
  "Buyer contacted",
  "Training enrolled",
  "Africa Opportunity Governance Controls",
  "Africa Opportunity Trust Registry",
  "Africa Opportunity Program Impact",
  "Africa Opportunity Completion Classification"
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
  "/api/nexus/africa-ag-opportunity/capability-status",
  "/api/nexus/africa-ag-opportunity/governance",
  "/api/nexus/africa-ag-opportunity/trust-registry",
  "/api/nexus/africa-ag-opportunity/program-impact",
  "/api/nexus/africa-ag-opportunity/completion-classification"
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
