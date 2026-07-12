const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const runtime = require(path.join(root, "public", "nexus-genesis-predictive-workforce.js"));
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const index = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");
const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.toLowerCase().includes(token.toLowerCase()), `${label} must not include ${token}`);
}

assert.strictEqual(runtime.SERVICE_ID, "predictive_workforce_career_intelligence");
assert(runtime.WORKFORCE_SOURCE_REGISTRY.length >= 10, "canonical workforce source registry must include official and verified source classes");
assert(runtime.EMPLOYER_TRUST_REGISTRY.length >= 3, "employer trust registry must include governed records");
assert(runtime.MODEL_REGISTRY.length >= 4, "model registry must include readiness, fit, barrier, and program intelligence models");

[
  "dol.onet",
  "dol.careeronestop",
  "dol.apprenticeship",
  "bls.ooh",
  "employer.career.page",
  "public.job.board"
].forEach(sourceId => {
  assert(runtime.WORKFORCE_SOURCE_REGISTRY.some(source => source.sourceId === sourceId), `missing workforce source ${sourceId}`);
});

[
  "race",
  "disability",
  "medical_history",
  "mental_health_records",
  "protected_age"
].forEach(attribute => {
  assert(runtime.PROTECTED_ATTRIBUTE_EXCLUSIONS.includes(attribute), `protected attribute must be excluded: ${attribute}`);
});

[
  "Nexus, help me find a job.",
  "What jobs am I qualified for?",
  "What am I missing?",
  "Help me prepare for an interview.",
  "Find apprenticeships.",
  "I do not have transportation.",
  "Delete my employment data.",
  "Show workforce capability status and production limitations."
].forEach(command => {
  assert.strictEqual(runtime.shouldHandle(command), true, `should handle ${command}`);
});

const packet = runtime.buildPredictiveWorkforcePacket("Nexus, what jobs am I qualified for with solar and construction experience?");
assert.strictEqual(packet.packetType, "genesis_predictive_workforce_career_packet");
assert.strictEqual(packet.capabilityId, runtime.SERVICE_ID);
assert(Array.isArray(packet.opportunities) && packet.opportunities.length >= 3, "packet must include opportunity matches");
assert(packet.topRecommendation.fit, "top recommendation must include fit");
assert(Array.isArray(packet.explanation.matchedQualifications), "packet must explain matched qualifications");
assert(Array.isArray(packet.explanation.missingRequirements), "packet must explain missing requirements");
assert(packet.receipt.receiptId.startsWith("workforce-receipt-"), "packet must include prediction receipt");
assert.strictEqual(packet.applicationSubmissionEnabled, false, "application submission must remain disabled");
assert.strictEqual(packet.employerContactEnabled, false, "employer contact must remain disabled");
assert.strictEqual(packet.hiringDecisionAuthority, false, "Nexus must not make hiring decisions");
assert.strictEqual(packet.privacy.healthDataSharedWithEmployers, false, "health data must remain isolated from employer workflows");
assert(packet.explanation.notConcluding.some(item => /not deciding/i.test(item)), "packet must state Nexus is not making hiring decisions");

const barrierPacket = runtime.buildPredictiveWorkforcePacket("I need a job that works with childcare and I do not have transportation.");
assert(barrierPacket.barrierSignals.some(item => item.barrierId === "transportation"), "transportation barrier must be detected");
assert(barrierPacket.barrierSignals.some(item => item.barrierId === "childcare"), "childcare barrier must be detected");
assert(barrierPacket.barrierSignals.every(item => item.eligibilityGuaranteed === false), "barrier support must not guarantee eligibility");

const statusPacket = runtime.buildWorkforceCapabilityStatusPacket("Show workforce capability status and production limitations.");
assert.strictEqual(statusPacket.packetType, "genesis_predictive_workforce_capability_status_packet");
assert.strictEqual(statusPacket.allCapabilitiesClassified, true);
assert.strictEqual(statusPacket.canSubmitApplication, false);
assert.strictEqual(statusPacket.canContactEmployer, false);
assert.strictEqual(statusPacket.canUseHealthDataForEmployment, false);
assert.strictEqual(statusPacket.productionAuthorized, false);
assert(statusPacket.capabilityClassifications.application_submission === "credential_blocked", "application submission must be credential blocked");
assert(statusPacket.capabilityClassifications.fairness_monitoring === "awaiting_fairness_review", "fairness monitoring must be review-gated");

const registries = runtime.registries();
assert.strictEqual(registries.packetType, "genesis_predictive_workforce_registry_packet");
assert.strictEqual(registries.applicationSubmissionEnabled, false);
assert.strictEqual(registries.employerContactEnabled, false);

[
  "nexus-genesis-predictive-workforce.js",
  "handleNexusGenesisPredictiveWorkforceCommand",
  "renderNexusGenesisPredictiveWorkforceCard",
  "Predictive Workforce Career Packet",
  "Genesis Workforce Capability Status",
  "noEmployerContacted",
  "noApplicationSubmitted",
  "noHealthDataShared"
].forEach(token => includes(`${index}\n${app}`, token, `frontend workforce token ${token}`));

const commandCenterSubmitIndex = app.indexOf("const earlyCommandCenterSubmit = event.target.closest(\"[data-nexus-command-center-submit]\");");
const commandCenterWorkforceIndex = app.indexOf("handleNexusGenesisPredictiveWorkforceCommand(command, { source: \"typed-command-submit\" })", commandCenterSubmitIndex);
const commandCenterHealthIndex = app.indexOf("handleNexusEnterpriseHealthEvidenceTrustCommand(command, { source: \"typed-command-submit\" })", commandCenterSubmitIndex);
assert(commandCenterSubmitIndex >= 0, "command center submit handler must exist");
assert(commandCenterWorkforceIndex > commandCenterSubmitIndex, "command center submit handler must route Genesis workforce commands");
assert(commandCenterHealthIndex > commandCenterWorkforceIndex, "Genesis workforce routing must run before enterprise health fallback in command center submit handler");

[
  "nexusGenesisPredictiveWorkforce",
  "/api/nexus/workforce-genesis/status",
  "/api/nexus/workforce-genesis/registries",
  "/api/nexus/workforce-genesis/evaluate",
  "/api/nexus/workforce-genesis/capability-status",
  "/api/nexus/workforce-genesis/feedback",
  "nexusWorkforceGovernanceQueue"
].forEach(token => includes(server, token, `server workforce token ${token}`));

[
  "application submitted successfully",
  "employer contacted successfully",
  "interview scheduled successfully",
  "recruiter contacted successfully",
  "hiring guaranteed",
  "placement guaranteed",
  "shared health data with employer"
].forEach(token => excludes(`${runtime.toString ? "" : ""}\n${app}\n${server}`, token, `unsafe workforce claim ${token}`));

assert.strictEqual(
  packageJson.scripts["qa:nexus-genesis-predictive-workforce"],
  "node scripts/nexus-genesis-predictive-workforce-qa.js",
  "package alias must run focused QA"
);
includes(qaSuite, "scripts/nexus-genesis-predictive-workforce-qa.js", "qa-suite wiring");

console.log("Nexus Genesis predictive workforce QA passed.");
