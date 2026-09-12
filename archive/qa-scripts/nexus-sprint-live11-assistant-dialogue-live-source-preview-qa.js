const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const preview = require("../server/nexus-assistant-live-source-preview.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

const docName = "NEXUS_SPRINT_LIVE11_ASSISTANT_DIALOGUE_LIVE_SOURCE_PREVIEW.md";
const moduleName = "nexus-assistant-live-source-preview.js";
const qaName = "nexus-sprint-live11-assistant-dialogue-live-source-preview-qa.js";

assert(exists("docs", docName), "LIVE11 doc must exist.");
assert(exists("server", moduleName), "LIVE11 preview module must exist.");
assert(exists("scripts", qaName), "LIVE11 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("server", moduleName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

[
  "Nexus Sprint LIVE11",
  "Assistant Dialogue + Live Source Preview",
  "NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED=false",
  "weather Nairobi",
  "weather follow-up tomorrow",
  "conflict Congo",
  "conflict near Goma",
  "shipment tracking missing number",
  "shipment status from mock fixture",
  "job search farm jobs near Nairobi",
  "job application help for Kenya role",
  "blocked \"submit the application now\"",
  "R&B music provider required",
  "say it in Swahili",
  "blocked \"send money now\"",
  "blocked \"call emergency services\"",
  "sourcePreviewEnabled",
  "sourceResult",
  "applicationPreparationPreview",
  "noExecutionRequired: true",
  "executionAuthority: false",
  "No browser validation is required",
  "LIVE12 Readiness"
].forEach(term => assert(doc.includes(term), `LIVE11 doc must include: ${term}`));

[
  "isPreviewEnabled",
  "buildProviderRequiredResult",
  "routeSourceResult",
  "buildAssistantLiveSourcePreview",
  "isSafeAssistantLiveSourcePreview"
].forEach(fn => assert.equal(typeof preview[fn], "function", `LIVE11 module must export ${fn}`));

const disabledWeather = preview.buildAssistantLiveSourcePreview("Nexus, what is the weather in Nairobi?", {}, {});
assert.equal(preview.isSafeAssistantLiveSourcePreview(disabledWeather), true, "default-off weather preview must be safe.");
assert.equal(disabledWeather.sourcePreviewEnabled, false, "LIVE11 preview must be default-off.");
assert.equal(disabledWeather.sourceResult.sourceStatus, "provider-required", "default-off preview must require provider/source.");
assert.equal(disabledWeather.executionAuthority, false, "default-off preview must not grant execution.");

const enabledEnv = {
  NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED: "true",
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_WEATHER_PROVIDER_ENABLED: "true",
  NEXUS_NEWS_SECURITY_PROVIDER_ENABLED: "true",
  NEXUS_SHIPMENT_TRACKING_PROVIDER_ENABLED: "true",
  NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true",
  NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "true",
  NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED: "true"
};

[
  ["weather Nairobi", "Nexus, what is the weather in Nairobi?", {}, "weather"],
  ["weather follow-up tomorrow", "What about tomorrow?", { lastIntentType: "weather", lastLocation: "nairobi", contextConfidence: "high" }, "weather"],
  ["conflict Congo", "Is there fighting in Congo?", {}, "news-security"],
  ["conflict near Goma", "What about near Goma?", { lastIntentType: "conflict-security", lastLocation: "congo", contextConfidence: "medium" }, "news-security"],
  ["shipment missing number", "Track my shipment.", {}, "shipment-tracking"],
  ["shipment mock fixture", "Track DHL1234567890", {}, "shipment-tracking"],
  ["job search farm jobs", "Find farm jobs near Nairobi.", {}, "job-search"],
  ["agriculture context", "Explain irrigation simply.", {}, "agriculture-context"],
  ["music media", "Play R&B music.", {}, "music-media"],
  ["Swahili follow-up", "Say it in Swahili.", { lastIntentType: "agriculture-context", lastTopic: "irrigation", contextConfidence: "high" }, "agriculture-context"]
].forEach(([label, input, context, expectedRequestType]) => {
  const result = preview.buildAssistantLiveSourcePreview(input, context, enabledEnv);
  assert.equal(preview.isSafeAssistantLiveSourcePreview(result), true, `${label} preview must be safe.`);
  assert.equal(result.sourcePreviewEnabled, true, `${label} preview must be flag-enabled in harness.`);
  assert.equal(result.sourceResult.requestType, expectedRequestType, `${label} request type mismatch.`);
  assert.equal(result.sourceResult.noExecutionRequired, true, `${label} source result must require no execution.`);
  assert.equal(result.sourceResult.executionAuthority, false, `${label} source result must not grant execution.`);
});

[
  "Help me apply for this job in Kenya.",
  "Update my resume for this job.",
  "Draft a cover letter."
].forEach(input => {
  const result = preview.buildAssistantLiveSourcePreview(input, {}, enabledEnv);
  assert.equal(preview.isSafeAssistantLiveSourcePreview(result), true, `${input} application prep preview must be safe.`);
  assert(result.applicationPreparationPreview, `${input} must include application preparation preview.`);
  assert.equal(result.applicationPreparationPreview.applicationSubmissionAuthority, false, `${input} must block application submission.`);
});

[
  "Submit the application now.",
  "Send money now.",
  "Call emergency services."
].forEach(input => {
  const result = preview.buildAssistantLiveSourcePreview(input, {}, enabledEnv);
  assert.equal(preview.isSafeAssistantLiveSourcePreview(result), true, `${input} blocked preview must be safe.`);
  assert.equal(result.executionAuthority, false, `${input} must not grant execution.`);
  assert.equal(result.sourceResult.executionAuthority, false, `${input} source result must not grant execution.`);
});

[
  "fetch(",
  "XMLHttpRequest",
  "http.request",
  "https.request",
  "axios",
  "request(",
  "writeFile",
  "appendFile",
  "localStorage",
  "sessionStorage",
  "db.json",
  "window.open",
  "location.href",
  "sendBeacon",
  "navigator.geolocation",
  "mediaDevices",
  "document.",
  "addEventListener"
].forEach(term => assert(!moduleSource.includes(term), `LIVE11 module must not include unsafe or live side-effect API: ${term}`));

[
  "submitApplication",
  "sendMoney",
  "callEmergency",
  "dispatchProvider",
  "executionAuthority: true"
].forEach(term => assert(!moduleSource.includes(term), `LIVE11 module must not include execution path: ${term}`));

const alias = "qa:nexus-sprint-live11-assistant-dialogue-live-source-preview";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include LIVE11 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-live10-music-media-provider-readiness-qa.js"), "LIVE11 requires LIVE10 QA to remain in qa-suite.");

console.log("[nexus-sprint-live11-assistant-dialogue-live-source-preview-qa] passed");
