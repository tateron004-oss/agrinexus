const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

const docName = "NEXUS_SPRINT_LIVE12_LIVE_SOURCE_RETRIEVAL_CLOSEOUT_AND_REAL_PROVIDER_TESTING_PLAN.md";
const qaName = "nexus-sprint-live12-live-source-retrieval-closeout-qa.js";

assert(exists("docs", docName), "LIVE12 closeout doc must exist.");
assert(exists("scripts", qaName), "LIVE12 QA script must exist.");

const doc = read("docs", docName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

[
  "Nexus Sprint LIVE12",
  "Live Source Retrieval Closeout and Real Provider Testing Plan",
  "LIVE1: Live source retrieval and assistant product boundary",
  "LIVE2: Provider adapter interface and source result contract",
  "LIVE3: Mock/fixture source provider harness",
  "LIVE4: Assistant dialogue engine contract",
  "LIVE5: Weather provider readiness",
  "LIVE6: News/security/conflict provider readiness",
  "LIVE7: Shipment tracking provider readiness",
  "LIVE8: Job search and application assistance provider readiness",
  "LIVE9: Agriculture context provider readiness",
  "LIVE10: Music/media provider readiness",
  "LIVE11: Assistant dialogue + live source preview",
  "Provider Adapter Interfaces Added",
  "Assistant Dialogue Engine Contract",
  "Mock and Fixture Harnesses",
  "Provider Readiness Summary",
  "Safety Posture",
  "QA Posture",
  "Browser Validation Posture",
  "Provider Credentials and Config Still Needed",
  "Recommended First Real Provider Tests",
  "Weather provider live read-only test",
  "Job search provider read-only test",
  "Shipment mock/sandbox test",
  "News/security read-only provider test",
  "Agriculture context read-only provider test",
  "Music/media provider availability test",
  "No-Execution Guarantee",
  "NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true",
  "NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED=true",
  "NEXUS_WEATHER_PROVIDER_API_KEY",
  "NEXUS_JOB_SEARCH_PROVIDER_API_KEY",
  "readOnly: true",
  "noExecutionRequired: true",
  "executionAuthority: false"
].forEach(term => assert(doc.includes(term), `LIVE12 doc must include: ${term}`));

[
  "public/nexus-live-source-result-contract.js",
  "public/nexus-assistant-dialogue-engine-contract.js",
  "server/nexus-weather-source-provider.js",
  "server/nexus-news-security-source-provider.js",
  "server/nexus-shipment-tracking-source-provider.js",
  "server/nexus-job-search-source-provider.js",
  "server/nexus-agriculture-context-source-provider.js",
  "server/nexus-music-media-source-provider.js",
  "server/nexus-assistant-live-source-preview.js",
  "fixtures/nexus/live-source-results.json",
  "fixtures/nexus/assistant-dialogue-chains.json"
].forEach(filePath => {
  const parts = filePath.split("/");
  assert(exists(...parts), `LIVE12 referenced artifact must exist: ${filePath}`);
});

[
  "scripts/nexus-sprint-live1-live-source-retrieval-assistant-product-boundary-qa.js",
  "scripts/nexus-sprint-live2-provider-adapter-interface-source-result-contract-qa.js",
  "scripts/nexus-sprint-live3-mock-source-provider-harness-qa.js",
  "scripts/nexus-sprint-live4-assistant-dialogue-engine-contract-qa.js",
  "scripts/nexus-sprint-live5-weather-provider-readiness-qa.js",
  "scripts/nexus-sprint-live6-news-security-conflict-provider-readiness-qa.js",
  "scripts/nexus-sprint-live7-shipment-tracking-provider-readiness-qa.js",
  "scripts/nexus-sprint-live8-job-search-application-provider-readiness-qa.js",
  "scripts/nexus-sprint-live9-agriculture-context-provider-readiness-qa.js",
  "scripts/nexus-sprint-live10-music-media-provider-readiness-qa.js",
  "scripts/nexus-sprint-live11-assistant-dialogue-live-source-preview-qa.js",
  "scripts/nexus-sprint-live12-live-source-retrieval-closeout-qa.js"
].forEach(scriptPath => {
  const parts = scriptPath.split("/");
  assert(exists(...parts), `LIVE12 QA artifact must exist: ${scriptPath}`);
  assert(qaSuite.includes(scriptPath), `qa-suite must include ${scriptPath}`);
});

[
  "provider dispatch",
  "calls, SMS, WhatsApp, Telegram, or email sending",
  "payments or money movement",
  "appointment booking",
  "location sharing or geolocation",
  "camera/image capture",
  "emergency dispatch",
  "medical diagnosis, prescription, dispensing, or pharmacy execution",
  "job application submission",
  "backend real-world action writes",
  "pending real-world actions"
].forEach(term => assert(doc.includes(term), `LIVE12 no-execution guarantee must include: ${term}`));

const alias = "qa:nexus-sprint-live12-live-source-retrieval-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include LIVE12 QA.");

console.log("[nexus-sprint-live12-live-source-retrieval-closeout-qa] passed");
