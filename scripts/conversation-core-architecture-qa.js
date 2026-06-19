const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");

const coreCallIndex = app.indexOf("await runNexusConversationCore(spoken || command || localized || rawCommand, context)");
const fastLaneIndex = app.indexOf("const fastLaneIntent = nexusFastLaneIntent");
const oldConversationIndex = app.indexOf("const conversationIntent = nexusConversationFirstIntent");

const requirements = [
  ["server conversation core endpoint", server.includes('/api/agent/conversation-core') && server.includes("nexusConversationCoreDecision")],
  ["server local conversation core", server.includes("function localNexusConversationCoreDecision") && server.includes("nexus-conversation-core-local")],
  ["server OpenAI conversation core", server.includes("function openAiNexusConversationCoreDecision") && server.includes("OPENAI_CONVERSATION_CORE_MODEL") && server.includes("openai-conversation-core")],
  ["server structured decision normalization", server.includes("function normalizeConversationCoreDecision") && server.includes("directAction") && server.includes("workflow")],
  ["server one-question recovery", server.includes("I may have heard only part of that. Tell me one thing")],
  ["browser conversation core caller", app.includes("async function runNexusConversationCore") && app.includes('/api/agent/conversation-core')],
  ["browser core before old routers", coreCallIndex > -1 && fastLaneIndex > -1 && oldConversationIndex > -1 && coreCallIndex < fastLaneIndex && coreCallIndex < oldConversationIndex],
  ["browser core preserves immediate stop and language", app.indexOf("isGlobalStopCommand(String(command || localized || rawCommand)") < coreCallIndex && app.indexOf("isUniversalLanguageCommand(command || localized)") < coreCallIndex],
  ["browser core executes existing action router", app.includes("await executeUnifiedNexusIntent(decision, command, { ...context, skipConversationCore: true })")],
  ["core can be disabled for emergency rollback", app.includes("agrinexusConversationCore") && app.includes("context.skipConversationCore")]
];

const missing = requirements.filter(([, passed]) => !passed).map(([name]) => name);
assert.deepStrictEqual(missing, [], `Missing Nexus Conversation Core architecture requirements: ${missing.join(", ")}`);

console.log("Nexus Conversation Core architecture QA passed");
for (const [name] of requirements) console.log(`- ${name}`);
