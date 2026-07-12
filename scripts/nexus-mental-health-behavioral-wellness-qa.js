const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const mentalHealthModule = fs.readFileSync(path.join(root, "public", "nexus-mental-health-behavioral-wellness.js"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const index = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");
const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const runtime = require(path.join(root, "public", "nexus-mental-health-behavioral-wellness.js"));

function includes(source, needle, label) {
  assert(source.includes(needle), label);
}

function excludes(source, needle, label) {
  assert(!source.includes(needle), label);
}

assert.strictEqual(runtime.CAPABILITY_ID, "mental_health_behavioral_wellness", "canonical capability id exists");
assert(runtime.TRUSTED_EVIDENCE_COLLECTIONS.length >= 6, "six governed evidence collections exist");
assert(runtime.VERIFIED_PROVIDER_SOURCES.length >= 3, "verified provider source contracts exist");
assert(runtime.STATE_DEFINITIONS.immediate_danger, "immediate danger state exists");
assert(runtime.STATE_DEFINITIONS.professional_review_required, "professional-review-required state exists");

assert(runtime.shouldHandle("I feel overwhelmed."), "open dialogue stress phrase is handled");
assert(runtime.shouldHandle("Help me calm down."), "coping tool phrase is handled");
assert(runtime.shouldHandle("Find a therapist."), "provider search phrase is handled");
assert(runtime.shouldHandle("Do not remember this conversation."), "privacy command is handled");
assert(runtime.shouldHandle("I am thinking about hurting myself."), "direct crisis language is handled");

const stress = runtime.buildSupportPacket("I feel overwhelmed.");
assert.strictEqual(stress.classification.state, "emotional_support", "stress maps to emotional support");
assert.strictEqual(stress.safety.noDiagnosis, true, "stress packet disallows diagnosis");
assert.strictEqual(stress.privacy.defaultMemoryMode, "session_only", "mental-health memory defaults session-only");

const coping = runtime.buildSupportPacket("Help me calm down.");
assert.strictEqual(coping.classification.action, "coping_tool", "coping command produces coping tool action");
assert.strictEqual(coping.classification.state, "self_guided_coping", "coping command uses self-guided coping state");
assert(/grounding|breath/i.test(coping.userVisibleStatus), "coping response includes practical grounding support");

const provider = runtime.buildSupportPacket("Find a therapist near me.");
assert.strictEqual(provider.classification.action, "provider_search", "therapist command routes to provider search");
assert.strictEqual(provider.safety.noProviderContacted, true, "provider search does not contact provider");

const screening = runtime.buildSupportPacket("Can I take a PHQ screening?");
assert.strictEqual(screening.classification.state, "consent_blocked", "screening without consent is blocked");
assert(/non-diagnostic|consent/i.test(screening.userVisibleStatus), "screening response labels consent and non-diagnostic boundary");

const crisis = runtime.buildSupportPacket("I have a plan to end my life.");
assert.strictEqual(crisis.classification.state, "immediate_danger", "active plan maps to immediate danger");
assert.strictEqual(crisis.classification.crisisOverride, true, "crisis override is true");
assert.strictEqual(crisis.prediction.crisisOverrideBeatsPrediction || crisis.safety.crisisOverrideBeatsPrediction, true, "crisis override beats prediction");
assert(/emergency|safe|trusted/i.test(crisis.userVisibleStatus), "crisis response directs immediate human support");
assert.strictEqual(crisis.safety.noEmergencyDispatch, true, "crisis packet does not fake dispatch");

const statusMissing = runtime.status({
  NEXUS_MENTAL_HEALTH_PROVIDER_SEARCH_ENABLED: "true",
  NEXUS_CRISIS_RESOURCE_REGISTRY_ENABLED: "true"
});
assert(statusMissing.missingConfig.includes("SAMHSA_PROVIDER_LOCATOR_ENDPOINT"), "provider locator missing env name is reported");
assert(statusMissing.missingConfig.includes("NEXUS_CRISIS_RESOURCE_SOURCE_URL"), "crisis registry missing env name is reported");
assert.strictEqual(statusMissing.liveProviderExecutionEnabled, false, "live provider execution is disabled");

includes(index, "nexus-mental-health-behavioral-wellness.js", "browser loads mental-health runtime before app");
includes(server, "nexusMentalHealthBehavioralWellness", "server imports mental-health runtime");
includes(server, "/api/nexus/mental-health/status", "mental-health status endpoint exists");
includes(server, "/api/nexus/mental-health/classify", "mental-health classify endpoint exists");
includes(server, "/api/nexus/mental-health/support", "mental-health support endpoint exists");
includes(server, "Mental Health & Behavioral Wellness", "provider readiness card exists");
includes(server, "No diagnosis, prescribing, fake referral", "readiness card states no fake execution");

includes(app, "handleNexusMentalHealthBehavioralWellnessCommand", "Standard User mental-health command handler exists");
includes(app, "NexusMentalHealthBehavioralWellness", "app uses shared runtime");
includes(app, "mental_health_behavioral_wellness", "app preserves canonical capability id");
includes(app, "noProviderContacted: true", "app result blocks provider contact");
includes(app, "noEmergencyDispatch: true", "app result blocks emergency dispatch");
includes(app, "noDiagnosis: true", "app result blocks diagnosis");
includes(app, "handleNexusMentalHealthBehavioralWellnessCommand(command, { source })", "Genesis submit routes mental health before generic workflows");
includes(app, "unified-brain-mental-health-priority", "Unified Brain gives mental health priority");
includes(app, "defaultMemoryMode", "app displays mental-health memory mode");

[
  "diagnosed you",
  "I diagnosed",
  "prescribed",
  "appointment booked",
  "provider contacted",
  "emergency dispatched",
  "you are safe now"
].forEach(unsafe => {
  excludes(mentalHealthModule, unsafe, `mental-health module must not contain unsafe claim: ${unsafe}`);
  excludes(server, unsafe, `server must not contain unsafe claim: ${unsafe}`);
});

assert(packageJson.scripts["qa:nexus-mental-health-behavioral-wellness"], "package alias exists");
includes(qaSuite, "scripts/nexus-mental-health-behavioral-wellness-qa.js", "safe suites include mental-health QA");

console.log("Nexus mental health behavioral wellness QA passed.");
