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
    "startSession",
    "stopSession",
    "start",
    "stop",
    "destroy",
    "getState",
    "isHealthy",
    "ownsMicrophone",
    "ownsAudioOutput",
    "startListening",
    "stopListening",
    "interrupt",
    "recover",
    "callTool",
    "updateLanguage",
    "getSessionContext",
    "releaseOwnership",
    "on",
    "onStateChange",
    "onUserSpeechStart",
    "onUserSpeechEnd",
    "onTranscript",
    "onAgentResponseStart",
    "onAgentResponseEnd",
    "onError",
    "onDisconnect"
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
    "stopping",
    "closed"
  ].forEach(state => assertIncludes(managerSource, `"${state}"`, `VoiceRuntime state ${state}`));
  [
    "createGenesisConversationSupervisor",
    "NexusGenesisContinuousConversationSupervisor",
    "CONVERSATION_SUPERVISOR_STATES",
    "CONVERSATION_TERMINAL_REASONS",
    "CONVERSATION_WATCHDOGS",
    "observeTranscript",
    "observeResponse",
    "typedTurn",
    "spokenTurn",
    "runFaultInjectionHarness",
    "terminalOnlyOnExplicitStop: true",
    "typedAndSpokenSharePipeline: true",
    "toolsOwnMicrophone: false"
  ].forEach(needle => assertIncludes(managerSource, needle, `Conversation supervisor contract ${needle}`));
  assertIncludes(managerSource, "createVoiceOwnershipLock", "one-owner lock");
  assertIncludes(managerSource, "createSessionContext", "bounded session context");
  assertIncludes(managerSource, "createCircuitBreaker", "candidate circuit breaker");
  assertIncludes(managerSource, "VOICE_RUNTIME_ROLLOUT_STAGES", "runtime rollout stages");
  assertIncludes(managerSource, "VOICE_RUNTIME_METRICS", "runtime metrics");
  assertIncludes(managerSource, "VOICE_RUNTIME_FAILURE_INJECTIONS", "failure injection list");
  assertIncludes(managerSource, "runContinuousConversationHarness", "continuous-turn harness");
  assertIncludes(managerSource, "runFailureInjectionHarness", "failure injection harness");
  assertIncludes(managerSource, "elevenLabsCandidateOnly: true", "ElevenLabs candidate-only flag");
  assertIncludes(managerSource, "openAiRealtimeDisabled: true", "OpenAI disabled flag");

  assertIncludes(serverSource, 'NEXUS_GENESIS_VOICE_RUNTIME || "legacy"', "server legacy default");
  assertIncludes(serverSource, 'NEXUS_GENESIS_CANDIDATE_RUNTIME || "elevenlabs"', "candidate runtime default");
  assertIncludes(serverSource, "NEXUS_GENESIS_CANDIDATE_ENABLED", "candidate enabled env");
  assertIncludes(serverSource, "NEXUS_GENESIS_CANDIDATE_ALLOWLIST", "candidate allowlist env");
  assertIncludes(serverSource, "NEXUS_GENESIS_AUTOMATIC_ROLLBACK", "automatic rollback env");
  assertIncludes(serverSource, 'url.pathname === "/api/voice/runtime/status"', "runtime status endpoint");
  assertIncludes(serverSource, 'url.pathname === "/api/voice/runtime/tool"', "provider-neutral voice tool gateway");
  assertIncludes(serverSource, "nexusGenesisVoiceRuntimePolicy", "server runtime policy");
  assertIncludes(serverSource, 'conversationSupervisor: "NexusGenesisContinuousConversationSupervisor"', "server runtime supervisor policy");
  assertIncludes(serverSource, "supervisorOwnsConversationLifecycle: true", "server supervisor lifecycle flag");
  assertIncludes(serverSource, 'name: "NexusGenesisContinuousConversationSupervisor"', "status endpoint supervisor name");
  assertIncludes(serverSource, "toolsOwnMicrophone: false", "status endpoint tool microphone boundary");
  assertIncludes(serverSource, "watchdogRecovery: true", "status endpoint watchdog recovery flag");
  assertIncludes(serverSource, "candidateAllowed", "server candidate gate");
  assertIncludes(serverSource, "noSecretValues: true", "secret-free status");
  assertIncludes(serverSource, 'runtimePolicy.selectedRuntime !== "elevenlabs"', "session route candidate gate");
  assertNotIncludes(serverSource, 'NEXUS_GENESIS_VOICE_RUNTIME || "elevenlabs"', "legacy must be default runtime");

  assertIncludes(appSource, "loadNexusGenesisVoiceRuntimePolicy", "client runtime policy loader");
  assertIncludes(appSource, 'fetch("/api/voice/runtime/status"', "client runtime status fetch");
  assertIncludes(appSource, 'fetch("/api/voice/runtime/tool"', "client uses provider-neutral voice tool gateway");
  assertIncludes(appSource, "initializeNexusGenesisVoiceRuntimeManager", "client manager initializer");
  assertIncludes(appSource, "nexusGenesisConversationSupervisor", "client conversation supervisor instance");
  assertIncludes(appSource, "window.NexusGenesisConversationSupervisor", "client exposes supervisor");
  assertIncludes(appSource, "supervisor.start(options.source || \"start-voice-listening\")", "startVoiceListening uses supervisor");
  assertIncludes(appSource, "nexusGenesisConversationSupervisor?.observeTranscript", "final transcripts enter supervisor");
  assertIncludes(appSource, "nexusGenesisConversationSupervisor?.observeResponse", "responses enter supervisor");
  assertIncludes(appSource, "nexusGenesisConversationSupervisor?.speechOutputEnded", "speech end returns supervisor to listening");
  assertIncludes(appSource, "nexusGenesisConversationSupervisor?.recognitionEnded", "recognition end recovers through supervisor");
  assertIncludes(appSource, "nexusGenesisConversationSupervisor?.recover", "recognition errors recover through supervisor");
  assertIncludes(appSource, "isTransportActive: () => Boolean(voiceRecognition || nexusOsVoiceStartInFlight || elevenLabsVoiceActive() || realtimeVoiceActive())", "supervisor checks real active voice transport before reuse");
  assertIncludes(appSource, 'startVoiceListening({ source: "genesis-controlled-restart" })', "recognition-end restart returns through supervisor");
  assertIncludes(appSource, 'startVoiceListening({ source: "genesis-recognition-start-timeout-restart" })', "recognition timeout restart returns through supervisor");
  assertIncludes(appSource, "nexusGenesisElevenLabsCandidateAllowed", "client candidate gate");
  assertIncludes(appSource, "if (!candidateAllowed) return false;", "client skips ElevenLabs unless allowlisted");
  assertIncludes(appSource, "legacyBrowserVoiceActiveForNormalUsers", "client legacy policy fallback");
  assertIncludes(indexSource, "/nexus-genesis-voice-runtime-manager.js?v=nexus-behavior-463", "manager script loaded");
  assert(indexSource.indexOf("/nexus-genesis-voice-runtime-manager.js") < indexSource.indexOf("/app.js?v=nexus-behavior-463"), "manager script must load before app.js");

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
  assert.strictEqual(typeof manager.adapter("legacy").startSession, "function", "adapter should expose startSession alias");
  assert.strictEqual(typeof manager.adapter("legacy").stopSession, "function", "adapter should expose stopSession alias");
  assert.strictEqual(typeof manager.adapter("legacy").onTranscript, "function", "adapter should expose transcript callback");

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
  const injected = await canary.runFailureInjectionHarness("elevenlabs");
  assert.strictEqual(injected.ok, true, "failure injection harness should restore legacy for every injected failure");
  assert(injected.injections.length >= 16, "failure injection harness should cover all required failure classes");
  assert(canary.getState().rolloutStages.includes("owner-canary"), "rollout stages should include owner-canary");
  assert(canary.getState().metricNames.includes("twentyTurnSuccess"), "metrics should include twenty-turn success");

  const supervisedManager = managerApi.createNexusVoiceRuntimeManager({
    activeRuntime: "legacy",
    candidateRuntime: "elevenlabs",
    candidateEnabled: true,
    candidateAllowed: false,
    automaticRollback: true
  });
  const supervisor = managerApi.createGenesisConversationSupervisor({
    runtimeManager: supervisedManager,
    language: "en",
    voice: "browser-native"
  });
  const supervisorStart = await supervisor.start("qa-start");
  assert.strictEqual(supervisorStart.ok, true, "supervisor should start the active runtime");
  assert.strictEqual(supervisor.getState().state, "listening", "supervisor should enter listening");
  assert.strictEqual(supervisor.getState().runtime.activeRuntime, "legacy", "supervisor should preserve legacy production default");
  assert.strictEqual(supervisor.getState().toolsOwnMicrophone, false, "tools must not own microphone");
  const typedTurn = await supervisor.typedTurn("What can Nexus do?");
  const spokenTurn = await supervisor.spokenTurn("Nexus, can you hear me?");
  assert.strictEqual(typedTurn.state, "listening", "typed turn should return to listening");
  assert.strictEqual(spokenTurn.state, "listening", "spoken turn should return to listening");
  assert(supervisor.getState().typedAndSpokenSharePipeline, "typed and spoken turns share supervisor pipeline");
  const recoveredEnd = await supervisor.recognitionEnded("recognition-ended-unexpectedly");
  assert.strictEqual(recoveredEnd.state, "listening", "recognition end should recover to listening");
  const interrupted = await supervisor.interrupt("Actually, help with crop support.");
  assert.strictEqual(interrupted.state, "listening", "barge-in interruption should return to listening");
  const faultHarness = await supervisor.runFaultInjectionHarness();
  assert.strictEqual(faultHarness.ok, true, "supervisor fault injection harness should pass");
  assert(faultHarness.cases.length >= 11, "supervisor should cover required fault-injection cases");
  assert.strictEqual(supervisor.getState().singleMicrophoneOwner, true, "supervisor should enforce one microphone owner");
  assert.strictEqual(supervisor.getState().terminalOnlyOnExplicitStop, true, "supervisor should terminate only on explicit stop conditions");
  const stopped = await supervisor.spokenTurn("Nexus, stop listening");
  assert.strictEqual(stopped.state, "terminated", "explicit stop listening should terminate");

  let browserTransportActive = false;
  let browserTransportStarts = 0;
  let browserToolCalls = 0;
  const browserMockLock = managerApi.createVoiceOwnershipLock();
  const browserMockSessionContext = managerApi.createSessionContext();
  const browserMockAdapter = managerApi.LegacyBrowserVoiceAdapter({
    lock: browserMockLock,
    sessionContext: browserMockSessionContext,
    startSession: () => {
      browserTransportActive = true;
      browserTransportStarts += 1;
      return { ok: true };
    },
    recover: () => {
      browserTransportActive = true;
      browserTransportStarts += 1;
      return { ok: true };
    },
    callTool: (toolName, args) => {
      browserToolCalls += 1;
      return {
        ok: true,
        response: `Mock response ${browserToolCalls}: ${args.command || toolName}`,
        executionAttempted: false
      };
    },
    updateLanguage: language => ({ ok: true, language })
  });
  const browserMockManager = managerApi.createNexusVoiceRuntimeManager({
    lock: browserMockLock,
    sessionContext: browserMockSessionContext,
    legacyAdapter: browserMockAdapter,
    activeRuntime: "legacy",
    candidateEnabled: false,
    automaticRollback: true
  });
  const browserMockSupervisor = managerApi.createGenesisConversationSupervisor({
    runtimeManager: browserMockManager,
    language: "en",
    voice: "browser-native",
    isTransportActive: () => browserTransportActive
  });
  await browserMockSupervisor.start("mock-browser-start");
  assert.strictEqual(browserTransportStarts, 1, "mock browser transport should start once");
  browserMockSupervisor.observeResponse("Good morning. I am Nexus.", { source: "mock-good-morning" });
  browserTransportActive = false;
  const afterGreeting = await browserMockSupervisor.speechOutputEnded("mock-good-morning-ended");
  assert.strictEqual(afterGreeting.state, "listening", "Good morning speech completion should return to listening");
  assert.strictEqual(browserTransportActive, true, "Good morning speech completion should restore browser recognition transport");
  assert.strictEqual(browserTransportStarts, 2, "missing transport should be restarted exactly once after greeting");
  const secondTurn = await browserMockSupervisor.spokenTurn("Nexus, can you hear me?");
  assert.strictEqual(secondTurn.state, "listening", "second utterance should be accepted after greeting");
  for (let index = 0; index < 10; index += 1) {
    const phrase = index === 2
      ? "Nexus, change the language to Spanish."
      : index === 5
        ? "Nexus, show agriculture training."
        : `Nexus, continue conversation turn ${index + 1}.`;
    if (index === 2) browserMockSupervisor.updateLanguage("es");
    const result = await browserMockSupervisor.spokenTurn(phrase, { toolName: index % 3 === 0 ? "nexus_agriculture" : "nexus_capability_router" });
    assert.strictEqual(result.state, "listening", `continuous turn ${index + 1} should return to listening`);
    await browserMockSupervisor.speechOutputEnded(`mock-turn-${index + 1}-speech-ended`);
  }
  const browserMockState = browserMockSupervisor.getState();
  assert.strictEqual(browserMockState.context.pendingLanguage, "es", "selected language should survive continuous turns");
  assert.strictEqual(browserMockState.singleMicrophoneOwner, true, "continuous browser mock should keep one microphone owner");
  assert.strictEqual(browserMockState.singleAudioOwner, true, "continuous browser mock should keep one audio owner");
  assert(browserMockState.context.turnCount >= 10, "continuous browser mock should retain turn context");

  console.log("Nexus Genesis safe voice runtime manager QA passed.");
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
