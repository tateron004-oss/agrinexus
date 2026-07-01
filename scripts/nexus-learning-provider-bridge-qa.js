const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function includes(source, text, label) {
  assert(source.includes(text), `${label} must include ${text}`);
}

const server = read("server.js");
const app = read("public/app.js");
const styles = read("public/styles.css");
const providerIndex = read("server/providers/index.js");
const providerSource = read("server/providers/learningBridgeProvider.js");
const packageJson = read("package.json");
const qaSuite = read("scripts/qa-suite.js");

[
  "server/providers/learningBridgeProvider.js",
  "scripts/nexus-learning-provider-bridge-qa.js"
].forEach(relativePath => assert(fs.existsSync(path.join(root, relativePath)), `${relativePath} must exist`));

[
  "learningBridge: require(\"./learningBridgeProvider\")",
  "/api/nexus/tools/learning/search",
  "/api/nexus/tools/learning/resource/",
  "/api/nexus/tools/learning/save",
  "/api/nexus/tools/learning/reminder",
  "/api/nexus/tools/learning/offline",
  "Learning Provider Bridge",
  "savedLearningResources"
].forEach(text => includes(server + providerIndex, text, "server learning bridge wiring"));

[
  "data-nexus-learning-provider-bridge",
  "nexusLearningProviderBridgeCards",
  "renderNexusLearningProviderBridgePanel",
  "renderNexusLearningProviderBridgeCards",
  "searchNexusLearningProviderBridge",
  "runNexusLearningProviderBridgeAction",
  "data-learning-bridge-search",
  "data-learning-bridge-suggestion",
  "data-learning-bridge-action=\"view\"",
  "data-learning-bridge-action=\"save\"",
  "data-learning-bridge-action=\"reminder\"",
  "data-learning-bridge-action=\"offline\"",
  "data-learning-bridge-confirm",
  "Local learning resources work without LMS credentials",
  "Nexus does not enroll, issue credentials, store private learner records, diagnose, prescribe, contact providers, or process payments"
].forEach(text => includes(app, text, "learning bridge UI"));

[
  ".nexus-learning-provider-bridge",
  ".nexus-learning-bridge-card",
  ".nexus-learning-bridge-actions",
  ".nexus-learning-bridge-confirm",
  ".nexus-learning-bridge-suggestions"
].forEach(text => includes(styles, text, "learning bridge styles"));

[
  "local-irrigation-basics",
  "local-crop-issue-observation",
  "local-soil-health-basics",
  "local-farm-business-basics",
  "local-agritrade-seller-basics",
  "local-digital-literacy-basics",
  "local-job-readiness",
  "local-health-visit-preparation",
  "local-chronic-care-question-preparation",
  "local-drone-agritech-introduction",
  "moodleProvider.courses",
  "requireConfirmation",
  "noPrivateLearnerRecord: true",
  "noHealthPatientDataStored: true",
  "Safe metadata only",
  "NEXUS_LEARNING_BRIDGE_ENABLED"
].forEach(text => includes(providerSource, text, "learning bridge provider"));

[
  "qa:nexus-learning-provider-bridge",
  "scripts/nexus-learning-provider-bridge-qa.js"
].forEach(text => includes(packageJson + qaSuite, text, "learning bridge QA wiring"));

const bridge = require(path.join(root, "server/providers/learningBridgeProvider.js"));
const requiredTitles = [
  "Irrigation basics",
  "Crop issue observation",
  "Soil health basics",
  "Farm business basics",
  "AgriTrade seller basics",
  "Digital literacy basics",
  "Job readiness",
  "Health visit preparation",
  "Chronic care question preparation",
  "Drone/agritech introduction"
];

const catalog = bridge.localCatalog();
requiredTitles.forEach(title => {
  assert(catalog.some(resource => resource.title === title), `local catalog must include ${title}`);
});

async function run() {
  const missingLmsEnv = { NEXUS_LEARNING_BRIDGE_ENABLED: "true", NEXUS_LMS_ENABLED: "true" };
  let result = await bridge.search({ query: "irrigation" }, missingLmsEnv);
  assert.equal(result.body.status, "completed", "search should complete without LMS credentials");
  assert(result.body.data.cards.some(card => card.title === "Irrigation basics"), "irrigation search should return local card");
  assert.deepEqual(result.body.data.lmsStatus.missingConfig, ["MOODLE_BASE_URL", "MOODLE_TOKEN"], "missing LMS config should be reported safely");

  result = await bridge.search({ query: "job readiness" }, {});
  assert(result.body.data.cards.some(card => card.title === "Job readiness"), "job readiness search should return local card");

  result = await bridge.search({ query: "health visit" }, {});
  const healthCard = result.body.data.cards.find(card => card.title === "Health visit preparation");
  assert(healthCard, "health visit search should return preparation resource");
  assert(/does not diagnose, prescribe, treat/i.test(healthCard.details), "health resource must preserve safe education-only copy");

  const chronic = catalog.find(resource => resource.id === "local-chronic-care-question-preparation");
  assert(/Provider-review preparation only/i.test(chronic.details), "chronic care resource must be provider-review preparation only");

  const db = { profile: {} };
  result = bridge.saveResource({ title: "Irrigation basics", category: "agriculture-training" }, db);
  assert.equal(result.body.status, "confirmation_required", "save must require confirmation");

  result = bridge.saveResource({ title: "Irrigation basics", category: "agriculture-training", level: "Beginner", source: "Nexus local starter catalog", confirmed: true }, db);
  assert.equal(result.body.status, "completed", "confirmed save should complete locally");
  assert.equal(result.body.data.resource.noPrivateLearnerRecord, true, "saved resource must avoid private learner record");
  assert.equal(result.body.data.resource.noHealthPatientDataStored, true, "saved resource must avoid patient data");

  result = bridge.saveResource({ title: "Patient medication lesson", category: "health-access-education", confirmed: true }, db);
  assert.equal(result.body.status, "blocked", "sensitive health/private learner data should be blocked");

  result = bridge.createLearningReminder({ title: "Job readiness", category: "workforce-skills" }, db);
  assert.equal(result.body.status, "confirmation_required", "learning reminder must require confirmation");

  result = bridge.createLearningReminder({ title: "Job readiness", category: "workforce-skills", confirmed: true }, db);
  assert.equal(result.body.status, "completed", "confirmed learning reminder should complete locally");
  assert.equal(result.body.data.reminder.osNotificationRequested, false, "learning reminder must not request OS notification permission");

  result = bridge.queueOffline({ title: "Digital literacy basics", category: "digital-literacy" }, db);
  assert.equal(result.body.status, "confirmation_required", "offline queue must require confirmation");

  result = bridge.queueOffline({ resourceId: "local-digital-literacy-basics", title: "Digital literacy basics", category: "digital-literacy", source: "Nexus local starter catalog", confirmed: true }, db);
  assert.equal(result.body.status, "completed", "confirmed offline queue should complete locally");
  assert(!/patient|diagnos|prescri|payment|credential|student id/i.test(result.body.data.item.content), "offline learning metadata must exclude sensitive data");

  const uiBlock = app.slice(app.indexOf("function renderNexusLearningProviderBridgePanel"), app.indexOf("function renderNexusRealProviderTestingPanel"));
  [
    "window.open(",
    "navigator.geolocation",
    "getCurrentPosition",
    "location.href",
    "TWILIO_AUTH_TOKEN",
    "MOODLE_TOKEN",
    "STRIPE_SECRET_KEY",
    "paid enrollment",
    "credential issuance"
  ].forEach(forbidden => {
    assert(!uiBlock.includes(forbidden), `learning bridge UI block must not include ${forbidden}`);
  });

  console.log("Nexus learning provider bridge QA passed.");
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
