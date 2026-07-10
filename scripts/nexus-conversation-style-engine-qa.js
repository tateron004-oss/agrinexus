const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL ${message}`);
    process.exit(1);
  }
  console.log(`PASS ${message}`);
}

function includes(source, token, message) {
  assert(source.includes(token), message || `contains ${token}`);
}

function blockBetween(source, start, end) {
  const startIndex = source.indexOf(start);
  assert(startIndex >= 0, `block start exists: ${start}`);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `block end exists: ${end}`);
  return source.slice(startIndex, endIndex);
}

const contractBlock = blockBetween(app, "const NEXUS_CONVERSATION_STYLE_ENGINE_CONTRACT", "function inferNexusConversationStyleMode");
[
  'schemaVersion: "nexus-conversation-style-engine.v1"',
  'engineName: "NexusConversationStyleEngine"',
  'composer: "composeNexusConversationStyleResponse"',
  '"STANDARD"',
  '"CLINICAL"',
  '"GUIDE"',
  '"FOCUS"',
  '"URGENT"',
  '"acknowledgment"',
  '"plainLanguageSummary"',
  '"safetyBoundary"',
  '"nextQuestion"',
  '"spokenText"',
  '"captionText"',
  "noDiagnosis: true",
  "noPrescribing: true",
  "noMedicationChanges: true",
  "noFakeCompletion: true",
  "noProviderHandoffClaim: true",
  "highRiskActionsRemainGated: true"
].forEach(token => includes(contractBlock, token, `style engine contract token ${token}`));

const engineBlock = blockBetween(app, "function inferNexusConversationStyleMode", "function normalizeNexusExperienceMode");
[
  "function nexusConversationStyleModeConfig",
  "function nexusConversationStyleSafetyBoundary",
  "function normalizeNexusConversationText",
  "function composeNexusConversationStyleResponse",
  "NEXUS_PRESENCE_RUNTIME_BASELINE.deliveryModes",
  "return \"URGENT\"",
  "return \"CLINICAL\"",
  "return \"GUIDE\"",
  "return \"FOCUS\"",
  "I can organize health information for education and provider review, but I do not diagnose, prescribe, change medication, or handle emergencies.",
  "Nexus cannot dispatch help.",
  "I do not buy, sell, pay, or contact anyone without the required gates.",
  "I do not send messages or start calls without provider setup and explicit confirmation.",
  "highRiskActionsRemainGated: true",
  "noFakeCompletion: true"
].forEach(token => includes(engineBlock, token, `style engine runtime token ${token}`));

const polishBlock = blockBetween(app, "function buildNexusExperienceStarterResponse", "function parseNexusExperienceFollowUp");
[
  "composeNexusConversationStyleResponse",
  "message: styled.spokenText",
  "style: styled",
  "styleMode: \"FOCUS\"",
  "mission.conversationStyle = styled",
  "styled.spokenText"
].forEach(token => includes(polishBlock, token, `style engine integration token ${token}`));

[
  "window.NEXUS_CONVERSATION_STYLE_ENGINE_CONTRACT = NEXUS_CONVERSATION_STYLE_ENGINE_CONTRACT",
  "window.composeNexusConversationStyleResponse = composeNexusConversationStyleResponse",
  "window.inferNexusConversationStyleMode = inferNexusConversationStyleMode"
].forEach(token => includes(app, token, `style engine API exposure ${token}`));

assert(!/(diagnosed|prescribed|payment completed|appointment booked|dispatch started|provider accepted)/i.test(contractBlock + engineBlock + polishBlock), "style engine avoids fake completion and regulated execution claims");
assert(pkg.scripts["qa:nexus-conversation-style-engine"] === "node scripts/nexus-conversation-style-engine-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-conversation-style-engine-qa.js"), "safe QA suite includes conversation style engine QA");

console.log("Nexus conversation style engine QA passed.");
