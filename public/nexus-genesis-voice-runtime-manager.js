(function initNexusGenesisVoiceRuntimeManager(globalScope) {
  "use strict";

  const VOICE_RUNTIME_STATES = Object.freeze([
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
  ]);

  const VOICE_RUNTIME_METHODS = Object.freeze([
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
  ]);

  function createVoiceOwnershipLock() {
    const owners = new Map();
    return {
      acquire(resource, owner) {
        const current = owners.get(resource);
        if (current && current !== owner) {
          return { ok: false, resource, currentOwner: current, requestedOwner: owner };
        }
        owners.set(resource, owner);
        return { ok: true, resource, owner };
      },
      release(resource, owner) {
        if (owners.get(resource) === owner) owners.delete(resource);
      },
      snapshot() {
        return Object.fromEntries(owners.entries());
      },
      hasConflict(resource, owner) {
        const current = owners.get(resource);
        return Boolean(current && current !== owner);
      },
      reset() {
        owners.clear();
      }
    };
  }

  function createSessionContext() {
    const context = {
      lastUserRequest: "",
      lastNexusResponse: "",
      lastSpokenResponse: "",
      topic: "",
      pendingClarification: null,
      pendingTool: null,
      pendingLocation: null,
      pendingLanguage: "en",
      pendingWorkflow: null,
      pendingConfirmation: null,
      recentSummary: "",
      turnCount: 0
    };
    return {
      updateTurn({ user = "", response = "", spoken = "", topic = "", language = "" } = {}) {
        context.turnCount += 1;
        if (user) context.lastUserRequest = String(user);
        if (response) context.lastNexusResponse = String(response);
        if (spoken) context.lastSpokenResponse = String(spoken);
        if (topic) context.topic = String(topic);
        if (language) context.pendingLanguage = String(language);
        context.recentSummary = [context.topic, context.lastUserRequest, context.lastNexusResponse]
          .filter(Boolean)
          .join(" | ")
          .slice(0, 600);
        return this.snapshot();
      },
      handleFollowUp(command = "") {
        const normalized = String(command || "").toLowerCase();
        if (/\brepeat\b|\bsay that again\b/.test(normalized)) return { kind: "repeat", text: context.lastSpokenResponse || context.lastNexusResponse };
        if (/\bcontinue\b|\bgo on\b/.test(normalized)) return { kind: "continue", topic: context.topic, summary: context.recentSummary };
        if (/\bstop\b|\bpause\b/.test(normalized)) return { kind: "stop" };
        if (/\bcorrection\b|\bi meant\b/.test(normalized)) return { kind: "correction", prior: context.lastUserRequest };
        if (/\bweather\b/.test(normalized)) return { kind: "weather", location: context.pendingLocation };
        if (/^[a-z\s,.-]+$/.test(normalized) && context.pendingTool === "weather") return { kind: "weather-city-followup", location: command };
        if (/\bspanish\b|\bespañol\b/.test(normalized)) return { kind: "language-switch", language: "es" };
        return { kind: "topic-change", text: command };
      },
      setPending(key, value) {
        if (Object.prototype.hasOwnProperty.call(context, key)) context[key] = value;
        return this.snapshot();
      },
      snapshot() {
        return JSON.parse(JSON.stringify(context));
      },
      reset() {
        Object.keys(context).forEach(key => {
          if (key === "pendingLanguage") context[key] = "en";
          else if (key === "turnCount") context[key] = 0;
          else context[key] = key.startsWith("pending") ? null : "";
        });
      }
    };
  }

  function createCircuitBreaker(options = {}) {
    const threshold = Number(options.threshold || 2);
    let failures = 0;
    let open = false;
    return {
      recordSuccess() {
        failures = 0;
        open = false;
      },
      recordFailure(reason = "provider-failure") {
        failures += 1;
        if (failures >= threshold) open = true;
        return { failures, open, reason };
      },
      isOpen() {
        return open;
      },
      snapshot() {
        return { failures, open, threshold };
      }
    };
  }

  function createAdapter(name, behavior = {}) {
    let state = "closed";
    const listeners = new Map();
    const sessionContext = behavior.sessionContext || createSessionContext();
    const owner = `voice-runtime:${name}`;
    const lock = behavior.lock || createVoiceOwnershipLock();
    function emit(event, payload = {}) {
      (listeners.get(event) || []).forEach(listener => listener({ event, runtime: name, ...payload }));
    }
    function setState(nextState) {
      state = VOICE_RUNTIME_STATES.includes(nextState) ? nextState : "failed";
      emit("state", { state });
    }
    return {
      name,
      owner,
      initialize() {
        setState("initializing");
        setState("ready");
        return Promise.resolve(this.getState());
      },
      start() {
        const mic = lock.acquire("microphone", owner);
        const audio = lock.acquire("audio", owner);
        const session = lock.acquire("session", owner);
        if (!mic.ok || !audio.ok || !session.ok) {
          setState("blocked");
          return Promise.resolve({ ok: false, conflict: mic.ok ? audio.ok ? session : audio : mic });
        }
        setState("listening");
        return Promise.resolve({ ok: true, state });
      },
      stop() {
        ["microphone", "audio", "session", "turn", "reconnect"].forEach(resource => lock.release(resource, owner));
        setState("closed");
        return Promise.resolve({ ok: true, state });
      },
      destroy() {
        return this.stop();
      },
      getState() {
        return { runtime: name, state, healthy: this.isHealthy(), ownsMicrophone: this.ownsMicrophone(), context: sessionContext.snapshot() };
      },
      isHealthy() {
        return !["failed", "closed", "blocked"].includes(state);
      },
      ownsMicrophone() {
        return lock.snapshot().microphone === owner;
      },
      startListening() {
        setState("listening");
        return Promise.resolve({ ok: true, state });
      },
      stopListening() {
        setState("ready");
        return Promise.resolve({ ok: true, state });
      },
      interrupt() {
        setState("interrupted");
        emit("interrupt", {});
        return Promise.resolve({ ok: true, state });
      },
      recover() {
        setState("recovering");
        setState("listening");
        return Promise.resolve({ ok: true, state });
      },
      callTool(toolName, args = {}) {
        setState("processing");
        if (behavior.failTool) {
          setState("recovering");
          return Promise.resolve({ ok: false, toolName, blockedReason: "provider-failure", executionAttempted: false });
        }
        const response = behavior.toolResponse || "Nexus completed the local tool step.";
        sessionContext.updateTurn({ user: args.command || args.query || toolName, response, spoken: response, topic: toolName });
        setState("agent-speaking");
        setState("listening");
        return Promise.resolve({ ok: true, toolName, response, executionAttempted: false });
      },
      updateLanguage(language) {
        sessionContext.setPending("pendingLanguage", language || "en");
        return Promise.resolve({ ok: true, language: language || "en" });
      },
      getSessionContext() {
        return sessionContext.snapshot();
      },
      on(event, listener) {
        if (!listeners.has(event)) listeners.set(event, []);
        listeners.get(event).push(listener);
        return () => listeners.set(event, (listeners.get(event) || []).filter(item => item !== listener));
      }
    };
  }

  function createNexusVoiceRuntimeManager(options = {}) {
    const lock = options.lock || createVoiceOwnershipLock();
    const sessionContext = options.sessionContext || createSessionContext();
    const circuitBreaker = options.circuitBreaker || createCircuitBreaker({ threshold: 1 });
    const adapters = {
      legacy: options.legacyAdapter || createAdapter("legacy", { lock, sessionContext }),
      elevenlabs: options.elevenLabsAdapter || createAdapter("elevenlabs", { lock, sessionContext }),
      realtime: options.realtimeAdapter || createAdapter("realtime", { lock, sessionContext, failTool: true })
    };
    const policy = {
      activeRuntime: String(options.activeRuntime || "legacy").toLowerCase(),
      candidateRuntime: String(options.candidateRuntime || "elevenlabs").toLowerCase(),
      candidateEnabled: options.candidateEnabled !== false,
      candidateAllowed: Boolean(options.candidateAllowed),
      automaticRollback: options.automaticRollback !== false
    };
    let activeName = policy.activeRuntime in adapters ? policy.activeRuntime : "legacy";
    const manager = {
      get policy() {
        return { ...policy, activeRuntime: activeName };
      },
      selectedRuntime() {
        if (policy.candidateEnabled && policy.candidateAllowed && !circuitBreaker.isOpen()) return policy.candidateRuntime;
        return activeName;
      },
      adapter(name = this.selectedRuntime()) {
        return adapters[name] || adapters.legacy;
      },
      async start() {
        const selected = this.selectedRuntime();
        const adapter = this.adapter(selected);
        await adapter.initialize();
        const result = await adapter.start();
        if (!result.ok && selected !== "legacy" && policy.automaticRollback) {
          circuitBreaker.recordFailure("candidate-start-failed");
          await adapter.stop();
          activeName = "legacy";
          await adapters.legacy.initialize();
          return adapters.legacy.start();
        }
        activeName = selected;
        return result;
      },
      async stop() {
        return this.adapter(activeName).stop();
      },
      async switchRuntime(nextRuntime, reason = "runtime-switch") {
        const normalized = String(nextRuntime || "legacy").toLowerCase();
        await this.stop();
        activeName = normalized in adapters ? normalized : "legacy";
        return { ok: true, activeRuntime: activeName, reason };
      },
      recordProviderFailure(reason = "provider-failure") {
        const result = circuitBreaker.recordFailure(reason);
        if (policy.automaticRollback) activeName = "legacy";
        return { ...result, activeRuntime: activeName };
      },
      getState() {
        return {
          schemaVersion: "nexus-genesis-voice-runtime-manager.v1",
          activeRuntime: activeName,
          selectedRuntime: this.selectedRuntime(),
          states: VOICE_RUNTIME_STATES,
          methods: VOICE_RUNTIME_METHODS,
          ownership: lock.snapshot(),
          context: sessionContext.snapshot(),
          circuitBreaker: circuitBreaker.snapshot(),
          oneOwnerAtATime: true,
          legacyProductionDefault: true,
          elevenLabsCandidateOnly: true,
          openAiRealtimeRollbackOnly: true
        };
      },
      runContinuousConversationHarness(runtimeName = "legacy", turns = 20) {
        const adapter = this.adapter(runtimeName);
        const results = [];
        return adapter.initialize()
          .then(() => adapter.start())
          .then(async () => {
            for (let turn = 1; turn <= turns; turn += 1) {
              if (turn === 4) await adapter.interrupt();
              if (turn === 6) sessionContext.handleFollowUp("repeat that");
              if (turn === 8) sessionContext.handleFollowUp("correction, I meant agriculture");
              if (turn === 10) sessionContext.setPending("pendingTool", "weather");
              if (turn === 11) sessionContext.handleFollowUp("Stockton, California");
              if (turn === 15) await adapter.updateLanguage("es");
              const toolName = turn === 17 ? "nexus_weather" : "nexus_capability_router";
              const result = turn === 18 && runtimeName !== "legacy"
                ? this.recordProviderFailure("injected-provider-failure")
                : await adapter.callTool(toolName, { command: `turn ${turn}` });
              if (turn === 19) await adapter.recover();
              results.push({ turn, state: adapter.getState(), result, ownsMicrophone: adapter.ownsMicrophone() });
            }
            return {
              ok: results.length === turns,
              runtime: runtimeName,
              turns: results,
              finalState: adapter.getState(),
              managerState: this.getState()
            };
          });
      }
    };
    return manager;
  }

  const api = {
    VOICE_RUNTIME_STATES,
    VOICE_RUNTIME_METHODS,
    createVoiceOwnershipLock,
    createSessionContext,
    createCircuitBreaker,
    LegacyBrowserVoiceAdapter: behavior => createAdapter("legacy", behavior),
    ElevenLabsVoiceAdapter: behavior => createAdapter("elevenlabs", behavior),
    OpenAIRealtimeAdapter: behavior => createAdapter("realtime", behavior),
    createNexusVoiceRuntimeManager
  };

  globalScope.NexusGenesisVoiceRuntimeManagerFactory = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
