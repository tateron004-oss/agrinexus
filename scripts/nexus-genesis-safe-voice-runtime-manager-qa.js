const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const managerSource = read("public/nexus-genesis-voice-runtime-manager.js");
const appSource = read("public/app.js");
const serverSource = read("server.js");
const indexSource = read("public/index.html");
const packageJson = JSON.parse(read("package.json"));
const qaSuiteSource = read("scripts/qa-suite.js");

function assertIncludes(source, needle, label) {
  assert(source.includes(needle), `${label} missing: ${needle}`);
}

function assertNotIncludes(source, needle, label) {
  assert(!source.includes(needle), `${label} should not include: ${needle}`);
}

async function run() {
  assertIncludes(managerSource, "createNexusVoiceRuntimeManager", "runtime manager factory");
  assertIncludes(managerSource, "LegacyBrowserVoiceAdapter", "legacy adapter contract");
  assertIncludes(managerSource, "ElevenLabsVoiceAdapter", "ElevenLabs adapter contract");
  assertIncludes(managerSource, "OpenAIRealtimeAdapter", "OpenAI Realtime rollback adapter contract");
  [
    "initialize",
    "start",
    "stop",
    "destroy",
    "getState",
    "isHealthy",
    "ownsMicrophone",
    "startListening",
    "stopListening",
    "interrupt",
    "recover",
    "callTool",
    "updateLanguage",
    "getSessionContext",
    "on"
  ].forEach(method => assertIncludes(managerSource, `"${method}"`, `VoiceRuntime method ${method}`));
  [
    "disabled",
    "initializing",
    "authorizing",
    "connecting",
    "ready",
    "listening",
    "user-speaking",
    "processing",
    "agent-speaking",
    "interrupted",
    "recovering",
    "blocked",
    "failed",
    "closed"
  ].forEach(state => assertIncludes(managerSource, `"${state}"`, `VoiceRuntime state ${state}`));
  assertIncludes(managerSource, "createVoiceOwnershipLock", "one-owner lock");
  assertIncludes(managerSource, "createSessionContext", "bounded session context");
  assertIncludes(managerSource, "createCircuitBreaker", "candidate circuit breaker");
  assertIncludes(managerSource, "runContinuousConversationHarness", "continuous-turn harness");
  assertIncludes(managerSource, "elevenLabsCandidateOnly: true", "ElevenLabs candidate-only flag");
  assertIncludes(managerSource, "openAiRealtimeRollbackOnly: true", "OpenAI rollback-only flag");

  assertIncludes(serverSource, 'NEXUS_GENESIS_VOICE_RUNTIME || "legacy"', "server legacy default");
  assertIncludes(serverSource, 'NEXUS_GENESIS_CANDIDATE_RUNTIME || "elevenlabs"', "candidate runtime default");
  assertIncludes(serverSource, "NEXUS_GENESIS_CANDIDATE_ENABLED", "candidate enabled env");
  assertIncludes(serverSource, "NEXUS_GENESIS_CANDIDATE_ALLOWLIST", "candidate allowlist env");
  assertIncludes(serverSource, "NEXUS_GENESIS_AUTOMATIC_ROLLBACK", "automatic rollback env");
  assertIncludes(serverSource, 'url.pathname === "/api/voice/runtime/status"', "runtime status endpoint");
  assertIncludes(serverSource, "nexusGenesisVoiceRuntimePolicy", "server runtime policy");
  assertIncludes(serverSource, "candidateAllowed", "server candidate gate");
  assertIncludes(serverSource, "noSecretValues: true", "secret-free status");
  assertIncludes(serverSource, 'runtimePolicy.selectedRuntime !== "elevenlabs"', "session route candidate gate");
  assertNotIncludes(serverSource, 'NEXUS_GENESIS_VOICE_RUNTIME || "elevenlabs"', "legacy must be default runtime");

  assertIncludes(appSource, "loadNexusGenesisVoiceRuntimePolicy", "client runtime policy loader");
  assertIncludes(appSource, 'fetch("/api/voice/runtime/status"', "client runtime status fetch");
  assertIncludes(appSource, "initializeNexusGenesisVoiceRuntimeManager", "client manager initializer");
  assertIncludes(appSource, "nexusGenesisElevenLabsCandidateAllowed", "client candidate gate");
  assertIncludes(appSource, "if (!candidateAllowed) return false;", "client skips ElevenLabs unless allowlisted");
  assertIncludes(appSource, "legacyBrowserVoiceActiveForNormalUsers", "client legacy policy fallback");
  assertIncludes(indexSource, "/nexus-genesis-voice-runtime-manager.js?v=nexus-behavior-452", "manager script loaded");
  assert(indexSource.indexOf("/nexus-genesis-voice-runtime-manager.js") < indexSource.indexOf("/app.js?v=nexus-behavior-452"), "manager script must load before app.js");

  assert.strictEqual(
    packageJson.scripts["qa:nexus-genesis-safe-voice-runtime-manager"],
    "node scripts/nexus-genesis-safe-voice-runtime-manager-qa.js",
    "package QA alias missing"
  );
  assertIncludes(qaSuiteSource, "scripts/nexus-genesis-safe-voice-runtime-manager-qa.js", "qa-suite wiring");

  const managerApi = require(path.join(root, "public/nexus-genesis-voice-runtime-manager.js"));
  const manager = managerApi.createNexusVoiceRuntimeManager({
    activeRuntime: "legacy",
    candidateRuntime: "elevenlabs",
    candidateEnabled: true,
    candidateAllowed: false,
    automaticRollback: true
  });
  const started = await manager.start();
  assert.strictEqual(started.ok, true, "legacy manager should start");
  assert.strictEqual(manager.getState().activeRuntime, "legacy", "normal users should remain on legacy");
  assert.strictEqual(manager.getState().ownership.microphone, "voice-runtime:legacy", "legacy should own microphone");

  const legacyHarness = await manager.runContinuousConversationHarness("legacy", 20);
  assert.strictEqual(legacyHarness.ok, true, "legacy 20-turn harness should pass");
  assert.strictEqual(legacyHarness.turns.length, 20, "legacy harness should run 20 turns");
  assert.strictEqual(legacyHarness.finalState.state, "listening", "legacy should return to listening");
  assert.strictEqual(legacyHarness.finalState.context.pendingLanguage, "es", "language switch turn should persist");

  await manager.stop();
  const canary = managerApi.createNexusVoiceRuntimeManager({
    activeRuntime: "legacy",
    candidateRuntime: "elevenlabs",
    candidateEnabled: true,
    candidateAllowed: true,
    automaticRollback: true
  });
  const canaryStart = await canary.start();
  assert.strictEqual(canaryStart.ok, true, "allowlisted canary should start");
  assert.strictEqual(canary.getState().activeRuntime, "elevenlabs", "allowlisted canary should select ElevenLabs");
  assert.strictEqual(canary.getState().ownership.microphone, "voice-runtime:elevenlabs", "ElevenLabs candidate should own microphone exclusively");
  const failure = canary.recordProviderFailure("malformed-sdk-error");
  assert.strictEqual(failure.activeRuntime, "legacy", "candidate failure should roll back to legacy");
  assert.strictEqual(canary.getState().circuitBreaker.open, true, "candidate circuit breaker should open");

  console.log("Nexus Genesis safe voice runtime manager QA passed.");
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
