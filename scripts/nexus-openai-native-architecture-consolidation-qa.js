const fs = require("fs");
const path = require("path");
const assert = require("assert");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const envExample = read(".env.example");
const sw = read("public/sw.js");
const agent = read("public/nexus-openai-realtime-agent.js");

function assertIncludes(source, needle, label) {
  assert(source.includes(needle), `${label} must include ${needle}`);
}

function assertNotIncludes(source, needle, label) {
  assert(!source.includes(needle), `${label} must not include ${needle}`);
}

assertIncludes(server, 'const NEXUS_GENESIS_VOICE_RUNTIME_VALUES = new Set(["realtime", "disabled"])', "server runtime policy");
assertIncludes(server, 'productionDefaultRuntime: "realtime"', "server runtime policy");
assertIncludes(server, 'legacyBrowserVoiceActiveForNormalUsers: false', "server runtime policy");
assertIncludes(server, 'elevenLabsCandidateOnly: false', "server runtime policy");
assertIncludes(server, 'removedRuntimes: ["elevenlabs", "legacy-browser-conversation"]', "runtime status");
assertIncludes(server, 'canonicalToolEndpoint: "/api/voice/realtime/tool"', "removed compatibility gateway");
assertIncludes(server, 'error: "Legacy voice tool gateways have been removed. Use /api/voice/realtime/tool."', "removed compatibility gateway");

assertIncludes(app, 'legacyAdapter: null', "browser runtime manager");
assertIncludes(app, 'elevenLabsAdapter: null', "browser runtime manager");
assertIncludes(app, 'activeRuntime: "realtime"', "browser runtime manager");
assertIncludes(app, 'isTransportActive: () => Boolean(realtimeVoiceActive())', "browser runtime manager");
assertIncludes(app, "function elevenLabsVoiceSupported() {\n  return false;", "removed ElevenLabs support check");
assertIncludes(app, "function elevenLabsVoiceEnabled() {\n  return false;", "removed ElevenLabs enabled check");
assertIncludes(app, "async function startElevenLabsVoiceSession(options = {}) {\n  return false;", "removed ElevenLabs startup");
assertIncludes(app, 'if (options.runtimeOnly !== "legacy")', "browser startup path");
assertIncludes(app, 'const started = await startRealtimeVoiceSession', "browser startup path");
assertIncludes(app, 'OpenAI Realtime did not connect to a live microphone track.', "truthful realtime failure");
assertIncludes(app, 'fallback: "blocked"', "truthful realtime failure");
assertIncludes(app, 'function nexusRealtimeConversationSurfaceLocked()', "orb surface lock");
assertIncludes(app, 'realtime-surface-navigation-blocked', "orb surface lock");
assertIncludes(app, 'realtime-workflow-open-blocked', "orb surface lock");
assertNotIncludes(app, 'I am using the safe legacy voice path', "browser startup path");
assertNotIncludes(app, 'OpenAI Realtime is rollback-only', "browser status copy");

assertIncludes(agent, "Keep every tool result, provider failure, clarification, and capability answer inside the current voice conversation", "Realtime agent instructions");
assertIncludes(agent, "Never open or mention opening AI Help, dashboards, workspaces, plans, or mode panels unless navigation was explicitly requested", "Realtime agent instructions");
assertIncludes(agent, "OpenAI Realtime connected without a live microphone track", "Realtime microphone proof");

[
  "NEXUS_GENESIS_ELEVENLABS_ENABLED",
  "NEXUS_GENESIS_ELEVENLABS_FALLBACK",
  "NEXUS_ELEVENLABS_AGENT_ID",
  "ELEVENLABS_AGENT_ID",
  "ELEVENLABS_API_KEY",
  "ELEVENLABS_VOICE_ID",
  "ELEVENLABS_MODEL_ID",
  "ELEVENLABS_WEBHOOK_SECRET",
  "ELEVENLABS_AGENTS_TIMEOUT_MS",
  "ELEVENLABS_TOOL_TIMEOUT_MS"
].forEach(name => assertNotIncludes(envExample, name, ".env.example"));

assertNotIncludes(sw, 'url.pathname.startsWith("/api/voice/elevenlabs/")', "service worker cache bypass");
assertIncludes(sw, 'url.pathname.startsWith("/api/voice/realtime/")', "service worker cache bypass");

const goSectionStart = app.indexOf("function goSection(");
const goSectionEnd = app.indexOf("function activateSectionFromButton", goSectionStart);
assert(goSectionStart >= 0 && goSectionEnd > goSectionStart, "goSection block must be discoverable");
const goSectionBlock = app.slice(goSectionStart, goSectionEnd);
assertIncludes(goSectionBlock, "nexusRealtimeConversationSurfaceLocked()", "goSection block");
assertIncludes(goSectionBlock, "!nexusRealtimeSurfaceChangeAllowed(options)", "goSection block");

const workflowVoiceStart = app.indexOf("function openWorkflowByVoice(");
const workflowVoiceEnd = app.indexOf("function isLearningCaptionCommand", workflowVoiceStart);
assert(workflowVoiceStart >= 0 && workflowVoiceEnd > workflowVoiceStart, "openWorkflowByVoice block must be discoverable");
const workflowVoiceBlock = app.slice(workflowVoiceStart, workflowVoiceEnd);
assertIncludes(workflowVoiceBlock, "nexusRealtimeConversationSurfaceLocked()", "openWorkflowByVoice block");

console.log("Nexus OpenAI-native architecture consolidation QA passed.");
