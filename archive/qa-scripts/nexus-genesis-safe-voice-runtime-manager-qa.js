const fs = require("fs");
const path = require("path");
const assert = require("assert");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const managerSource = read("public/nexus-genesis-voice-runtime-manager.js");
const appSource = read("public/app.js");
const serverSource = read("server.js");

function assertIncludes(source, needle, label) {
  assert(source.includes(needle), `${label} missing: ${needle}`);
}

function assertNotIncludes(source, needle, label) {
  assert(!source.includes(needle), `${label} must not include: ${needle}`);
}

assertIncludes(managerSource, "createVoiceOwnershipLock", "voice ownership lock");
assertIncludes(managerSource, "createSessionContext", "session context");
assertIncludes(managerSource, "RealtimeVoiceAdapter: behavior => createAdapter(\"realtime\", behavior)", "Realtime adapter factory");
assertIncludes(managerSource, "realtime: options.realtimeAdapter", "Realtime adapter slot");
assertIncludes(managerSource, "openAiRealtimeManagedRuntime", "managed Realtime state");
assertIncludes(managerSource, "runContinuousConversationHarness", "continuous conversation harness");
assertIncludes(managerSource, "runFailureInjectionHarness", "failure injection harness");
assertIncludes(managerSource, "toolsOwnMicrophone: false", "tool microphone boundary");

assertIncludes(serverSource, 'const NEXUS_GENESIS_VOICE_RUNTIME_VALUES = new Set(["realtime", "disabled"])', "server runtime set");
assertIncludes(serverSource, 'NEXUS_GENESIS_VOICE_RUNTIME || "realtime"', "server Realtime default");
assertIncludes(serverSource, 'productionDefaultRuntime: "realtime"', "server production default");
assertIncludes(serverSource, "legacyBrowserVoiceActiveForNormalUsers: false", "legacy disabled");
assertIncludes(serverSource, "elevenLabsCandidateOnly: false", "ElevenLabs disabled");
assertIncludes(serverSource, "automaticRollback: false", "rollback disabled");
assertIncludes(serverSource, "supervisorOwnsConversationLifecycle: true", "conversation supervisor contract");
assertIncludes(serverSource, 'url.pathname === "/api/voice/runtime/status"', "runtime status endpoint");
assertIncludes(serverSource, 'url.pathname === "/api/voice/realtime/tool"', "canonical Realtime tool gateway");
assertIncludes(serverSource, 'canonicalToolEndpoint: "/api/voice/realtime/tool"', "removed legacy gateway response");
assertIncludes(serverSource, 'removedRuntimes: ["elevenlabs", "legacy-browser-conversation"]', "removed runtime status");
assertNotIncludes(serverSource, 'NEXUS_GENESIS_VOICE_RUNTIME || "legacy"', "server default");
assertNotIncludes(serverSource, 'NEXUS_GENESIS_CANDIDATE_RUNTIME || "elevenlabs"', "candidate default");

assertIncludes(appSource, "legacyAdapter: null", "client manager legacy removal");
assertIncludes(appSource, "elevenLabsAdapter: null", "client manager ElevenLabs removal");
assertIncludes(appSource, 'activeRuntime: "realtime"', "client manager active runtime");
assertIncludes(appSource, "isTransportActive: () => Boolean(realtimeVoiceActive())", "client active transport");
assertIncludes(appSource, "function genesisVoiceConversationActive() {\n  return Boolean(realtimeVoiceActive());", "client conversation active state");
assertIncludes(appSource, "function elevenLabsVoiceSupported() {\n  return false;", "ElevenLabs support disabled");
assertIncludes(appSource, "function elevenLabsVoiceEnabled() {\n  return false;", "ElevenLabs enabled disabled");
assertIncludes(appSource, "async function startElevenLabsVoiceSession(options = {}) {\n  return false;", "ElevenLabs startup disabled");
assertIncludes(appSource, 'fallback: "blocked"', "Realtime fallback blocked");
assertIncludes(appSource, "OpenAI Realtime did not connect to a live microphone track.", "truthful Realtime mic failure");
assertNotIncludes(appSource, "I am using the safe legacy voice path", "legacy fallback copy");
assertNotIncludes(appSource, "OpenAI Realtime is rollback-only", "rollback copy");

console.log("Nexus Genesis Realtime-only voice runtime manager QA passed.");
