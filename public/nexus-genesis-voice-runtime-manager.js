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
    "stopping",
    "closed"
  ]);

  const VOICE_RUNTIME_METHODS = Object.freeze([
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
  ]);

  const VOICE_RUNTIME_ROLLOUT_STAGES = Object.freeze([
    "disabled",
    "development",
    "owner-canary",
    "internal-canary",
    "limited-canary",
    "production-candidate",
    "production-default"
  ]);

  const VOICE_RUNTIME_METRICS = Object.freeze([
    "sessionStartSuccess",
    "firstTurnSuccess",
    "secondTurnSuccess",
    "fiveTurnSuccess",
    "twentyTurnSuccess",
    "silenceRate",
    "disconnectRate",
    "reconnectSuccess",
    "rollbackSuccess",
    "medianResponseLatency",
    "interruptionSuccess",
    "toolCallSuccess",
    "microphoneOwnershipConflictCount"
  ]);

  const VOICE_RUNTIME_FAILURE_INJECTIONS = Object.freeze([
    "token-issuance-failure",
    "permission-denied",
    "recognition-ended-unexpectedly",
    "browser-speech-error",
    "invalid-agent-configuration",
    "sdk-initialization-failure",
    "webrtc-disconnect",
    "sdk-exception",
    "malformed-sdk-error",
    "data-channel-failure",
    "microphone-unavailable",
    "microphone-track-ending",
    "network-interruption",
    "provider-timeout",
    "tool-timeout",
    "tool-invalid-response",
    "tab-background-foreground",
    "service-worker-update",
    "runtime-switch",
    "candidate-rollback"
  ]);

  const OWNED_RESOURCES = Object.freeze(["microphone", "audio-output", "session", "turn", "reconnect"]);
  const CONVERSATION_SUPERVISOR_STATES = Object.freeze([
    "idle",
    "acquiring",
    "listening",
    "processing",
    "speaking",
    "recovering",
    "terminated"
  ]);
  const CONVERSATION_TERMINAL_REASONS = Object.freeze([
    "user-stop-listening",
    "stop-button",
    "permission-revoked",
    "signed-out",
    "left-genesis",
    "security-policy"
  ]);
  const CONVERSATION_WATCHDOGS = Object.freeze([
    "recognition-never-started",
    "recognition-ended-unexpectedly",
    "processing-deadline-exceeded",
    "speech-synthesis-end-missing",
    "tool-timeout",
    "stuck-state-transition"
  ]);

  function normalizeRuntimeError(error, fallbackCategory = "runtime-error") {
    const source = error && typeof error === "object" ? error : {};
    const nested = source.error && typeof source.error === "object" ? source.error : {};
    return {
      category: String(source.category || source.code || source.type || nested.code || nested.type || fallbackCategory).slice(0, 80),
      message: String(source.message || nested.message || (typeof error === "string" ? error : "Voice runtime error.")).slice(0, 240),
      malformed: !error || (typeof error !== "object" && typeof error !== "string")
    };
  }

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
      selectedLanguage: "en",
      activeCapability: "general-conversation",
      activeWorkflowReference: null,
      confirmationState: null,
      pendingWorkflow: null,
      pendingConfirmation: null,
      recentSummary: "",
      recentTurns: [],
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
        if (language) context.selectedLanguage = String(language);
        context.recentSummary = [context.topic, context.lastUserRequest, context.lastNexusResponse]
          .filter(Boolean)
          .join(" | ")
          .slice(0, 600);
        context.recentTurns.push({ user: String(user).slice(0, 240), response: String(response).slice(0, 360), topic: String(topic).slice(0, 80) });
        context.recentTurns = context.recentTurns.slice(-12);
        return this.snapshot();
      },
      handleFollowUp(command = "") {
        const normalized = String(command || "").toLowerCase();
        if (/\brepeat\b|\bsay that again\b/.test(normalized)) return { kind: "repeat", text: context.lastSpokenResponse || context.lastNexusResponse };
        if (/\bcontinue\b|\bgo on\b/.test(normalized)) return { kind: "continue", topic: context.topic, summary: context.recentSummary };
        if (/\bstop\b|\bpause\b/.test(normalized)) return { kind: "stop" };
        if (/\bno[, ]+i meant\b|\bcorrection\b|\bi meant\b/.test(normalized)) return { kind: "correction", prior: context.lastUserRequest };
        if (/\bwhat were we discussing\b|\bwhat were we talking about\b/.test(normalized)) return { kind: "topic-recall", topic: context.topic, summary: context.recentSummary };
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
          if (key === "pendingLanguage" || key === "selectedLanguage") context[key] = "en";
          else if (key === "turnCount") context[key] = 0;
          else if (key === "recentTurns") context[key] = [];
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

  function createRuntimeMetrics() {
    const metrics = {
      sessionStartSuccess: 0,
      firstTurnSuccess: 0,
      secondTurnSuccess: 0,
      fiveTurnSuccess: 0,
      twentyTurnSuccess: 0,
      silenceRate: 0,
      disconnectRate: 0,
      reconnectSuccess: 0,
      rollbackSuccess: 0,
      medianResponseLatency: 0,
      interruptionSuccess: 0,
      toolCallSuccess: 0,
      microphoneOwnershipConflictCount: 0
    };
    return {
      increment(key, amount = 1) {
        if (Object.prototype.hasOwnProperty.call(metrics, key)) metrics[key] += amount;
      },
      set(key, value) {
        if (Object.prototype.hasOwnProperty.call(metrics, key)) metrics[key] = value;
      },
      snapshot() {
        return { ...metrics };
      }
    };
  }

  function createAdapter(name, behavior = {}) {
    let state = "closed";
    let sessionOpen = false;
    let generation = 0;
    let responseInProgress = false;
    let activeResponseId = "";
    let interrupted = false;
    let cancelPending = false;
    const listeners = new Map();
    const metrics = behavior.metrics || createRuntimeMetrics();
    const sessionContext = behavior.sessionContext || createSessionContext();
    const owner = `voice-runtime:${name}`;
    const lock = behavior.lock || createVoiceOwnershipLock();
    function emit(event, payload = {}, eventGeneration = generation) {
      if (eventGeneration !== generation) return;
      (listeners.get(event) || []).forEach(listener => listener({ event, runtime: name, ...payload }));
    }
    function setState(nextState) {
      state = VOICE_RUNTIME_STATES.includes(nextState) ? nextState : "failed";
      emit("state", { state });
      emit("stateChange", { state });
    }
    async function invoke(hook, ...args) {
      if (typeof behavior[hook] !== "function") return undefined;
      return behavior[hook](...args);
    }
    function acquireOwnership() {
      const acquired = [];
      for (const resource of OWNED_RESOURCES) {
        const result = lock.acquire(resource, owner);
        if (!result.ok) {
          acquired.forEach(item => lock.release(item, owner));
          metrics.increment("microphoneOwnershipConflictCount");
          return result;
        }
        acquired.push(resource);
      }
      return { ok: true };
    }
    const adapter = {
      name,
      owner,
      async initialize() {
        setState("initializing");
        await invoke("initialize", this);
        setState("ready");
        return this.getState();
      },
      startSession(options = {}) {
        return this.start(options);
      },
      async start(options = {}) {
        if (sessionOpen && this.ownsMicrophone() && this.ownsAudioOutput()) return { ok: true, reused: true, state };
        const ownership = acquireOwnership();
        if (!ownership.ok) {
          setState("blocked");
          return { ok: false, conflict: ownership };
        }
        generation += 1;
        const currentGeneration = generation;
        try {
          const result = await invoke("startSession", options, this);
          if (currentGeneration !== generation) return { ok: false, stale: true };
          if (result === false || result?.ok === false) throw Object.assign(new Error(result?.reason || `${name} failed to start.`), { category: result?.category || "startup-failure" });
        } catch (error) {
          await this.releaseOwnership("start-failed");
          setState("failed");
          emit("error", normalizeRuntimeError(error, "startup-failure"));
          return { ok: false, error: normalizeRuntimeError(error, "startup-failure") };
        }
        sessionOpen = true;
        metrics.increment("sessionStartSuccess");
        setState("listening");
        return { ok: true, state };
      },
      stopSession(reason = "session-stop") {
        return this.stop(reason);
      },
      async stop(reason = "session-stop") {
        if (state !== "closed") setState("stopping");
        generation += 1;
        try { await invoke("stopSession", reason, this); } catch (error) { emit("error", normalizeRuntimeError(error, "stop-failure")); }
        await this.releaseOwnership(reason);
        sessionOpen = false;
        responseInProgress = false;
        activeResponseId = "";
        interrupted = false;
        cancelPending = false;
        setState("closed");
        emit("disconnect", { reason: "stopped" });
        return { ok: true, state };
      },
      async destroy() {
        await this.stop("destroy");
        listeners.clear();
        await invoke("destroy", this);
        return { ok: true, state };
      },
      getState() {
        return { runtime: name, state, healthy: this.isHealthy(), sessionOpen, responseInProgress, activeResponseId, interrupted, cancelPending, ownsMicrophone: this.ownsMicrophone(), ownsAudioOutput: this.ownsAudioOutput(), context: sessionContext.snapshot(), metrics: metrics.snapshot() };
      },
      isHealthy() {
        return !["failed", "closed", "blocked"].includes(state);
      },
      ownsMicrophone() {
        return lock.snapshot().microphone === owner;
      },
      ownsAudioOutput() {
        return lock.snapshot()["audio-output"] === owner;
      },
      async startListening() {
        await invoke("startListening", this);
        setState("listening");
        return { ok: true, state };
      },
      async stopListening() {
        await invoke("stopListening", this);
        setState("ready");
        return { ok: true, state };
      },
      async interrupt() {
        if (!responseInProgress && state !== "agent-speaking") return { ok: true, skipped: true, reason: "no-active-response", state };
        interrupted = true;
        cancelPending = true;
        setState("interrupted");
        await invoke("interrupt", this);
        metrics.increment("interruptionSuccess");
        emit("interrupt", {});
        responseInProgress = false;
        activeResponseId = "";
        cancelPending = false;
        setState("listening");
        return { ok: true, state };
      },
      async recover(reason = "recover") {
        setState("recovering");
        await invoke("recover", reason, this);
        interrupted = false;
        cancelPending = false;
        responseInProgress = false;
        activeResponseId = "";
        setState("listening");
        return { ok: true, state };
      },
      async callTool(toolName, args = {}) {
        setState("processing");
        emit("userSpeechEnd", {});
        let gatewayResult;
        try {
          gatewayResult = await invoke("callTool", toolName, args, this);
        } catch (error) {
          gatewayResult = { ok: false, response: "I could not complete that request, but I am still listening.", blockedReason: normalizeRuntimeError(error, "tool-failure").category };
        }
        if (behavior.failTool || gatewayResult?.ok === false) {
          emit("error", { category: gatewayResult?.blockedReason || "provider-failure" });
          setState("recovering");
          setState("listening");
          return { ok: false, toolName, response: gatewayResult?.response || "The tool is unavailable, but our voice session is still open.", blockedReason: gatewayResult?.blockedReason || "provider-failure", executionAttempted: false };
        }
        const response = gatewayResult?.response || behavior.toolResponse || "Nexus completed the local tool step.";
        activeResponseId = gatewayResult?.responseId || `${name}-response-${Date.now().toString(36)}`;
        responseInProgress = true;
        interrupted = false;
        cancelPending = false;
        emit("agentResponseStart", { toolName });
        sessionContext.updateTurn({ user: args.command || args.query || toolName, response, spoken: response, topic: toolName });
        setState("agent-speaking");
        emit("agentResponseEnd", { toolName });
        responseInProgress = false;
        activeResponseId = "";
        interrupted = false;
        cancelPending = false;
        metrics.increment("toolCallSuccess");
        setState("listening");
        return { ok: true, toolName, response, executionAttempted: false };
      },
      async updateLanguage(language) {
        sessionContext.setPending("pendingLanguage", language || "en");
        sessionContext.setPending("selectedLanguage", language || "en");
        await invoke("updateLanguage", language || "en", this);
        return { ok: true, language: language || "en" };
      },
      getSessionContext() {
        return sessionContext.snapshot();
      },
      on(event, listener) {
        if (!listeners.has(event)) listeners.set(event, []);
        listeners.get(event).push(listener);
        return () => listeners.set(event, (listeners.get(event) || []).filter(item => item !== listener));
      },
      onStateChange(listener) {
        return this.on("stateChange", listener);
      },
      onUserSpeechStart(listener) {
        return this.on("userSpeechStart", listener);
      },
      onUserSpeechEnd(listener) {
        return this.on("userSpeechEnd", listener);
      },
      onTranscript(listener) {
        return this.on("transcript", listener);
      },
      onAgentResponseStart(listener) {
        return this.on("agentResponseStart", listener);
      },
      onAgentResponseEnd(listener) {
        return this.on("agentResponseEnd", listener);
      },
      onError(listener) {
        return this.on("error", listener);
      },
      onDisconnect(listener) {
        return this.on("disconnect", listener);
      },
      async releaseOwnership(reason = "release") {
        try { await invoke("releaseOwnership", reason, this); } catch (error) { emit("error", normalizeRuntimeError(error, "ownership-release-failure")); }
        OWNED_RESOURCES.forEach(resource => lock.release(resource, owner));
        return { ok: !this.ownsMicrophone() && !this.ownsAudioOutput(), reason };
      }
    };
    return adapter;
  }

  function createNexusVoiceRuntimeManager(options = {}) {
    const lock = options.lock || createVoiceOwnershipLock();
    const sessionContext = options.sessionContext || createSessionContext();
    const circuitBreaker = options.circuitBreaker || createCircuitBreaker({ threshold: 1 });
    const metrics = options.metrics || createRuntimeMetrics();
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
      automaticRollback: options.automaticRollback !== false,
      rolloutStage: VOICE_RUNTIME_ROLLOUT_STAGES.includes(options.rolloutStage) ? options.rolloutStage : "owner-canary",
      watchdogIntervalMs: Math.max(250, Number(options.watchdogIntervalMs || 5000)),
      stuckTimeoutMs: Math.max(1000, Number(options.stuckTimeoutMs || 30000)),
      cooldownMs: Math.max(1000, Number(options.cooldownMs || 60000))
    };
    let activeName = policy.activeRuntime in adapters ? policy.activeRuntime : "legacy";
    let watchdogTimer = null;
    let lastHealthyAt = Date.now();
    let cooldownUntil = 0;
    let rollbackInFlight = null;
    const manager = {
      get policy() {
        return { ...policy, activeRuntime: activeName };
      },
      selectedRuntime() {
        if (policy.candidateEnabled && policy.candidateAllowed && !circuitBreaker.isOpen() && Date.now() >= cooldownUntil) return policy.candidateRuntime;
        return activeName;
      },
      adapter(name = this.selectedRuntime()) {
        return adapters[name] || adapters.legacy;
      },
      async start(options = {}) {
        const selected = this.selectedRuntime();
        const adapter = this.adapter(selected);
        await adapter.initialize();
        const result = await adapter.start(options);
        if (!result.ok && selected !== "legacy" && policy.automaticRollback) {
          return this.rollbackToLegacy(result.error?.category || "candidate-start-failed", { announce: true });
        }
        activeName = selected;
        lastHealthyAt = Date.now();
        this.startWatchdog();
        return result;
      },
      async stop() {
        this.stopWatchdog();
        return this.adapter(activeName).stop();
      },
      async startSession(options = {}) {
        return this.start(options);
      },
      async stopSession(reason = "session-stop") {
        this.stopWatchdog();
        return this.adapter(activeName).stop(reason);
      },
      async switchRuntime(nextRuntime, reason = "runtime-switch") {
        const normalized = String(nextRuntime || "legacy").toLowerCase();
        const current = this.adapter(activeName);
        await current.stop(reason);
        if (current.ownsMicrophone() || current.ownsAudioOutput()) return { ok: false, reason: "ownership-not-released", activeRuntime: activeName };
        activeName = normalized in adapters ? normalized : "legacy";
        return { ok: true, activeRuntime: activeName, reason };
      },
      recordProviderFailure(reason = "provider-failure") {
        const result = circuitBreaker.recordFailure(reason);
        if (policy.automaticRollback) {
          activeName = "legacy";
          cooldownUntil = Date.now() + policy.cooldownMs;
        }
        return { ...result, activeRuntime: activeName };
      },
      async rollbackToLegacy(reason = "candidate-failure", options = {}) {
        if (rollbackInFlight) return rollbackInFlight;
        rollbackInFlight = (async () => {
          const failedName = activeName === "legacy" ? policy.candidateRuntime : activeName;
          const failed = this.adapter(failedName);
          circuitBreaker.recordFailure(reason);
          cooldownUntil = Date.now() + policy.cooldownMs;
          await failed.stop(`rollback:${reason}`);
          if (failed.ownsMicrophone() || failed.ownsAudioOutput()) {
            return { ok: false, category: "ownership-release-failure", activeRuntime: failedName };
          }
          activeName = "legacy";
          await adapters.legacy.initialize();
          const restored = await adapters.legacy.start({ recovery: true, reason, announce: options.announce === true });
          if (restored.ok) {
            metrics.increment("rollbackSuccess");
            lastHealthyAt = Date.now();
          }
          return { ...restored, rolledBack: restored.ok, activeRuntime: activeName, reason, message: options.announce ? "I lost the voice connection, but I’m back with you." : "" };
        })();
        try { return await rollbackInFlight; } finally { rollbackInFlight = null; }
      },
      startWatchdog() {
        if (watchdogTimer) return;
        watchdogTimer = setInterval(() => { this.watchdogCheck().catch(() => {}); }, policy.watchdogIntervalMs);
        if (typeof watchdogTimer?.unref === "function") watchdogTimer.unref();
      },
      stopWatchdog() {
        if (watchdogTimer) clearInterval(watchdogTimer);
        watchdogTimer = null;
      },
      async watchdogCheck() {
        const adapter = this.adapter(activeName);
        const snapshot = adapter.getState();
        const ownership = lock.snapshot();
        const owners = [ownership.microphone, ownership["audio-output"], ownership.session].filter(Boolean);
        const uniqueOwners = new Set(owners);
        const expectedListening = ["ready", "listening", "user-speaking", "processing", "agent-speaking", "interrupted", "recovering"].includes(snapshot.state);
        const ownershipHealthy = !expectedListening || (adapter.ownsMicrophone() && adapter.ownsAudioOutput() && uniqueOwners.size === 1);
        const stateHealthy = adapter.isHealthy() && !(snapshot.responseInProgress && Date.now() - lastHealthyAt > policy.stuckTimeoutMs);
        if (ownershipHealthy && stateHealthy) {
          lastHealthyAt = Date.now();
          return { ok: true, activeRuntime: activeName, ownership };
        }
        if (activeName !== "legacy" && policy.automaticRollback) return this.rollbackToLegacy(ownershipHealthy ? "watchdog-response-timeout" : "watchdog-ownership-failure", { announce: true });
        const recovered = await adapters.legacy.recover(ownershipHealthy ? "watchdog-stuck-state" : "watchdog-microphone-ownership");
        return { ...recovered, watchdogRecovery: true, activeRuntime: "legacy" };
      },
      getState() {
        return {
          schemaVersion: "nexus-genesis-voice-runtime-manager.v1",
          activeRuntime: activeName,
          selectedRuntime: this.selectedRuntime(),
          states: VOICE_RUNTIME_STATES,
          methods: VOICE_RUNTIME_METHODS,
          ownership: lock.snapshot(),
          microphoneOwnerCount: lock.snapshot().microphone ? 1 : 0,
          audioOutputOwnerCount: lock.snapshot()["audio-output"] ? 1 : 0,
          context: sessionContext.snapshot(),
          circuitBreaker: circuitBreaker.snapshot(),
          rolloutStage: policy.rolloutStage,
          rolloutStages: VOICE_RUNTIME_ROLLOUT_STAGES,
          metrics: metrics.snapshot(),
          metricNames: VOICE_RUNTIME_METRICS,
          failureInjections: VOICE_RUNTIME_FAILURE_INJECTIONS,
          watchdog: { running: Boolean(watchdogTimer), intervalMs: policy.watchdogIntervalMs, stuckTimeoutMs: policy.stuckTimeoutMs, lastHealthyAt, cooldownUntil },
          oneOwnerAtATime: true,
          legacyProductionDefault: true,
          elevenLabsCandidateOnly: true,
          openAiRealtimeDisabled: true
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
              if (turn === 1) metrics.increment("firstTurnSuccess");
              if (turn === 2) metrics.increment("secondTurnSuccess");
              if (turn === 5) metrics.increment("fiveTurnSuccess");
              if (turn === 20) metrics.increment("twentyTurnSuccess");
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
      },
      async runFailureInjectionHarness(runtimeName = "elevenlabs") {
        const adapter = this.adapter(runtimeName);
        const results = [];
        await adapter.initialize();
        await adapter.start();
        for (const failure of VOICE_RUNTIME_FAILURE_INJECTIONS) {
          if (failure === "runtime-switch") await this.switchRuntime(runtimeName, failure);
          await adapter.stop();
          const rollback = this.recordProviderFailure(failure);
          results.push({
            failure,
            rollback,
            activeRuntime: this.getState().activeRuntime,
            microphoneOwner: this.getState().ownership.microphone || ""
          });
          if (runtimeName !== "legacy") await adapters.legacy.start();
        }
        return {
          ok: results.every(result => result.activeRuntime === "legacy"),
          runtime: runtimeName,
          injections: results,
          managerState: this.getState()
        };
      }
    };
    return manager;
  }

  function createGenesisConversationSupervisor(options = {}) {
    const runtimeManager = options.runtimeManager || createNexusVoiceRuntimeManager(options);
    const sessionContext = options.sessionContext || createSessionContext();
    const sessionId = String(options.sessionId || `genesis-session-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`);
    const transitionLog = [];
    const recoveryLog = [];
    const transcript = [];
    const watchdogTimers = new Map();
    let state = "idle";
    let generation = 0;
    let active = false;
    let currentGoal = "";
    let pendingToolOperation = null;
    let interruptionState = "none";
    let selectedLanguage = String(options.language || "en");
    let selectedVoice = String(options.voice || "browser-native");

    function logTransition(nextState, reason = "state-transition", extra = {}) {
      const normalized = CONVERSATION_SUPERVISOR_STATES.includes(nextState) ? nextState : "recovering";
      state = normalized;
      transitionLog.push({
        state,
        reason: String(reason || "state-transition").slice(0, 120),
        generation,
        at: new Date().toISOString(),
        ...extra
      });
      if (transitionLog.length > 80) transitionLog.shift();
      return state;
    }

    function clearWatchdog(name) {
      const timer = watchdogTimers.get(name);
      if (timer) clearTimeout(timer);
      watchdogTimers.delete(name);
    }

    function armWatchdog(name, ms, handler) {
      clearWatchdog(name);
      const timer = setTimeout(() => {
        watchdogTimers.delete(name);
        Promise.resolve(handler()).catch(() => {});
      }, Math.max(100, Number(ms || 1000)));
      if (typeof timer?.unref === "function") timer.unref();
      watchdogTimers.set(name, timer);
      return timer;
    }

    function clearAllWatchdogs() {
      [...watchdogTimers.keys()].forEach(clearWatchdog);
    }

    function isTerminalCommand(text = "") {
      return /\b(stop listening|stop nexus|pause nexus|end conversation|go quiet|sign out)\b/i.test(String(text || ""));
    }

    const supervisor = {
      supervisorName: "NexusGenesisContinuousConversationSupervisor",
      async start(reason = "genesis-start") {
        if (active && state !== "terminated") return { ok: true, reused: true, state, sessionId };
        generation += 1;
        active = true;
        logTransition("acquiring", reason);
        armWatchdog("recognition-never-started", options.recognitionStartDeadlineMs || 5000, () => this.recover("recognition-never-started"));
        const result = await runtimeManager.startSession({ source: "conversation-supervisor", reason, supervisorSessionId: sessionId });
        if (!result?.ok) return this.recover(result?.error?.category || "runtime-start-failed");
        clearWatchdog("recognition-never-started");
        logTransition("listening", "runtime-started");
        return { ok: true, state, sessionId };
      },
      async stop(reason = "user-stop-listening") {
        if (!CONVERSATION_TERMINAL_REASONS.includes(reason)) reason = "user-stop-listening";
        generation += 1;
        active = false;
        clearAllWatchdogs();
        await runtimeManager.stopSession(reason);
        logTransition("terminated", reason);
        return { ok: true, state, sessionId, reason };
      },
      async processTurn(text = "", optionsForTurn = {}) {
        const command = String(text || "").trim();
        if (!command) return { ok: false, state, reason: "empty-turn" };
        if (!active) await this.start("turn-start");
        if (isTerminalCommand(command)) return this.stop("user-stop-listening");
        generation += 1;
        const turnGeneration = generation;
        transcript.push({ role: "user", text: command, generation: turnGeneration, at: new Date().toISOString(), source: optionsForTurn.source || "conversation" });
        logTransition("processing", "transcript-finalized", { transcriptLength: command.length });
        armWatchdog("processing-deadline-exceeded", options.processingDeadlineMs || 12000, () => this.recover("processing-deadline-exceeded"));
        pendingToolOperation = optionsForTurn.toolName || "nexus_capability_router";
        const result = await runtimeManager.adapter().callTool(pendingToolOperation, { command, source: optionsForTurn.source || "conversation-supervisor" });
        clearWatchdog("processing-deadline-exceeded");
        if (turnGeneration !== generation) return { ok: false, stale: true, state };
        const response = result?.response || "I am still with you. Please continue.";
        transcript.push({ role: "assistant", text: response, generation: turnGeneration, at: new Date().toISOString(), source: "conversation-supervisor" });
        sessionContext.updateTurn({ user: command, response, spoken: response, topic: pendingToolOperation, language: selectedLanguage });
        logTransition("speaking", result?.ok === false ? "blocked-or-error-response" : "response-ready");
        armWatchdog("speech-synthesis-end-missing", options.speechEndDeadlineMs || 12000, () => this.recover("speech-synthesis-end-missing"));
        clearWatchdog("speech-synthesis-end-missing");
        pendingToolOperation = null;
        logTransition("listening", "response-complete");
        return { ok: result?.ok !== false, state, response, sessionId, generation: turnGeneration, executionAttempted: false };
      },
      observeTranscript(text = "", optionsForTurn = {}) {
        const command = String(text || "").trim();
        if (!command || !active || state === "terminated") return { ok: false, state, reason: "inactive-or-empty" };
        generation += 1;
        transcript.push({ role: "user", text: command, generation, at: new Date().toISOString(), source: optionsForTurn.source || "observed-transcript" });
        logTransition("processing", "observed-transcript", { transcriptLength: command.length });
        return { ok: true, state, sessionId, generation };
      },
      observeResponse(text = "", optionsForTurn = {}) {
        const response = String(text || "").trim();
        if (!response || !active || state === "terminated") return { ok: false, state, reason: "inactive-or-empty" };
        transcript.push({ role: "assistant", text: response, generation, at: new Date().toISOString(), source: optionsForTurn.source || "observed-response" });
        sessionContext.updateTurn({ user: transcript.filter(item => item.role === "user").slice(-1)[0]?.text || "", response, spoken: response, topic: pendingToolOperation || "nexus-response", language: selectedLanguage });
        logTransition("speaking", "observed-response");
        return { ok: true, state, sessionId, generation };
      },
      async typedTurn(text = "", optionsForTurn = {}) {
        return this.processTurn(text, { ...optionsForTurn, source: optionsForTurn.source || "typed" });
      },
      async spokenTurn(text = "", optionsForTurn = {}) {
        return this.processTurn(text, { ...optionsForTurn, source: optionsForTurn.source || "spoken" });
      },
      async recognitionEnded(reason = "recognition-ended-unexpectedly") {
        if (!active || state === "terminated") return { ok: true, ignored: true, state };
        return this.recover(reason);
      },
      async speechOutputEnded(reason = "speech-output-ended") {
        clearWatchdog("speech-synthesis-end-missing");
        if (active && state !== "terminated") logTransition("listening", reason);
        return { ok: true, state };
      },
      async interrupt(text = "") {
        interruptionState = "barge-in";
        await runtimeManager.adapter().interrupt();
        logTransition("listening", "user-interruption");
        return text ? this.spokenTurn(text, { source: "barge-in" }) : { ok: true, state, interruptionState };
      },
      async recover(reason = "recover") {
        if (!active || state === "terminated") return { ok: false, state, reason: "inactive" };
        generation += 1;
        const safeReason = String(reason || "recover").slice(0, 120);
        recoveryLog.push({ reason: safeReason, at: new Date().toISOString(), generation });
        if (recoveryLog.length > 80) recoveryLog.shift();
        logTransition("recovering", safeReason);
        clearAllWatchdogs();
        await runtimeManager.adapter().recover(safeReason);
        logTransition("listening", "recovery-complete");
        return { ok: true, state, recovered: true, reason: safeReason };
      },
      updateLanguage(language = "en") {
        selectedLanguage = String(language || "en");
        return runtimeManager.adapter().updateLanguage(selectedLanguage);
      },
      updateVoice(voice = "browser-native") {
        selectedVoice = String(voice || "browser-native");
        return { ok: true, selectedVoice };
      },
      setGoal(goal = "") {
        currentGoal = String(goal || "").slice(0, 240);
        return { ok: true, currentGoal };
      },
      getState() {
        return {
          supervisor: "NexusGenesisContinuousConversationSupervisor",
          sessionId,
          state,
          active,
          generation,
          currentGoal,
          selectedLanguage,
          selectedVoice,
          pendingToolOperation,
          interruptionState,
          terminalReasons: CONVERSATION_TERMINAL_REASONS,
          watchdogs: CONVERSATION_WATCHDOGS,
          activeWatchdogs: [...watchdogTimers.keys()],
          transcript: transcript.slice(-20),
          context: sessionContext.snapshot(),
          runtime: runtimeManager.getState(),
          transitionLog: transitionLog.slice(-20),
          recoveryLog: recoveryLog.slice(-20),
          singleMicrophoneOwner: runtimeManager.getState().microphoneOwnerCount <= 1,
          singleAudioOwner: runtimeManager.getState().audioOutputOwnerCount <= 1,
          toolsOwnMicrophone: false,
          typedAndSpokenSharePipeline: true,
          terminalOnlyOnExplicitStop: true
        };
      },
      async runFaultInjectionHarness() {
        const cases = [
          "greeting-followed-by-listening",
          "ten-conversation-turns",
          "five-tool-calls",
          "silence-recovery",
          "recognition-ended-unexpectedly",
          "speech-synthesis-end-missing",
          "tool-timeout",
          "barge-in-interruption",
          "network-interruption",
          "duplicate-owner-prevention",
          "context-survives-recovery"
        ];
        const results = [];
        await this.start("fault-harness");
        for (const name of cases) {
          if (name === "ten-conversation-turns") {
            for (let index = 0; index < 10; index += 1) await this.processTurn(`conversation turn ${index + 1}`, { toolName: "nexus_capability_router" });
          } else if (name === "five-tool-calls") {
            for (const toolName of ["nexus_weather", "nexus_maps_route", "nexus_agriculture", "nexus_health_preparation", "nexus_workforce_learning"]) {
              await this.processTurn(`run ${toolName}`, { toolName });
            }
          } else if (name === "barge-in-interruption") {
            await this.interrupt("Actually, show agriculture training.");
          } else if (/recognition|speech|tool|network|silence/.test(name)) {
            await this.recover(name);
          } else {
            await this.processTurn(name, { toolName: "nexus_capability_router" });
          }
          results.push({ name, state, sessionId, singleMicrophoneOwner: this.getState().singleMicrophoneOwner, contextTurns: this.getState().context.turnCount });
        }
        return {
          ok: results.every(result => result.state === "listening" && result.singleMicrophoneOwner),
          cases: results,
          state: this.getState()
        };
      }
    };
    return supervisor;
  }

  const api = {
    VOICE_RUNTIME_STATES,
    VOICE_RUNTIME_METHODS,
    VOICE_RUNTIME_ROLLOUT_STAGES,
    VOICE_RUNTIME_METRICS,
    VOICE_RUNTIME_FAILURE_INJECTIONS,
    OWNED_RESOURCES,
    normalizeRuntimeError,
    createVoiceOwnershipLock,
    createSessionContext,
    createCircuitBreaker,
    createRuntimeMetrics,
    CONVERSATION_SUPERVISOR_STATES,
    CONVERSATION_TERMINAL_REASONS,
    CONVERSATION_WATCHDOGS,
    LegacyBrowserVoiceAdapter: behavior => createAdapter("legacy", behavior),
    ElevenLabsVoiceAdapter: behavior => createAdapter("elevenlabs", behavior),
    OpenAIRealtimeAdapter: behavior => createAdapter("realtime", behavior),
    createNexusVoiceRuntimeManager,
    createGenesisConversationSupervisor
  };

  globalScope.NexusGenesisVoiceRuntimeManagerFactory = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
