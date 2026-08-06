"use strict";

const { routeCommand } = require("./router");
const {
  DEFAULT_EXPERIENCE_PREFERENCES,
  createPresenceInstructions,
  detectWakePhrase,
  normalizeExperiencePreferences
} = require("./experience-profile");
const { NEXUS_VOICE_LATENCY_PROFILE } = require("./latency-profile");
const { NexusRequestTransaction } = require("./request-transaction");
const {
  clearConversationContext,
  createConversationContext,
  rememberCompletedTurn
} = require("./conversation-context");

const DEFAULT_INSTRUCTIONS = createPresenceInstructions(DEFAULT_EXPERIENCE_PREFERENCES);
const TRANSIENT_REALTIME_ERROR_CODES = new Set([
  "server_error",
  "rate_limit_exceeded",
  "service_unavailable",
  "timeout",
  "temporarily_unavailable"
]);

class NexusBrowserRuntime {
  constructor({
    foundation,
    realtime,
    audioElement,
    openWorkspace,
    interceptCommand = null,
    onReceipt = () => {},
    instructions = DEFAULT_INSTRUCTIONS,
    realtimeRetryLimit = 2,
    realtimeRetryDelayMs = 350,
    schedule = (callback, delay) => setTimeout(callback, delay)
  } = {}) {
    if (!foundation || typeof foundation.start !== "function") throw new Error("A voice foundation is required.");
    if (!realtime || typeof realtime.send !== "function") throw new Error("A Realtime connector is required.");
    if (!audioElement) throw new Error("A remote audio element is required.");
    if (typeof openWorkspace !== "function") throw new Error("A workspace adapter is required.");
    this.foundation = foundation;
    this.realtime = realtime;
    this.audioElement = audioElement;
    this.openWorkspace = openWorkspace;
    this.interceptCommand = typeof interceptCommand === "function" ? interceptCommand : null;
    this.onReceipt = onReceipt;
    this.instructions = instructions;
    this.realtimeRetryLimit = Math.max(0, Number(realtimeRetryLimit) || 0);
    this.realtimeRetryDelayMs = Math.max(0, Number(realtimeRetryDelayMs) || 0);
    this.schedule = schedule;
    this.preferences = DEFAULT_EXPERIENCE_PREFERENCES;
    this.started = false;
    this.unsubscribe = null;
    this.sessionToken = null;
    this.recovery = null;
    this.responseFallbackTimer = null;
    this.activeResponseId = null;
    this.responseActive = false;
    this.responseRequestPending = false;
    this.deferredResponse = null;
    this.lastResponseRequest = null;
    this.responseRetryCount = 0;
    this.responseRetryTimer = null;
    this.completedResponseKeys = new Set();
    this.visualRoutes = new Map();
    this.visibleWorkspaceTransactions = new Set();
    this.commandInterceptions = new Map();
    this.conversationContext = createConversationContext();
    this.requestTransaction = new NexusRequestTransaction({
      execute: (resolution) => this.openWorkspace({
        workspace: resolution.workspace,
        command: resolution.command,
        utterance: resolution.utterance,
        parameters: resolution.parameters,
        visualContext: resolution.visualContext || null,
        visualReference: resolution.visualReference || null,
        transactionId: resolution.transactionId
      }),
      onStage: (type, detail) => this.receipt(type, detail)
    });
  }

  async start({ sessionToken, userGesture = false } = {}) {
    if (typeof this.realtime.subscribe === "function" && !this.unsubscribe) {
      this.unsubscribe = this.realtime.subscribe((receipt) => {
        if (receipt.type === "realtime.connection-state" && ["disconnected", "failed"].includes(receipt.detail.state)) {
          this.recover(receipt.detail.state).catch(() => {});
          return;
        }
        if (receipt.type === "realtime.remote-track") {
          this.attachRemoteStream(receipt.detail.stream);
          return;
        }
        if (receipt.type !== "realtime.data-message") return;
        Promise.resolve(this.handleRealtimeEvent(receipt.detail.data)).catch((error) => {
          this.receipt("runtime.event-failed", { name: error.name, message: error.message });
        });
      });
    }
    const started = await this.foundation.start({ sessionToken, userGesture });
    this.sessionToken = sessionToken;
    this.configureSession();
    this.started = true;
    this.receipt("runtime.ready", { sessionId: started.connection.sessionId });
    return started;
  }

  async recover(reason) {
    if (this.recovery || !this.started) return this.recovery;
    this.receipt("runtime.recovering", { reason });
    this.recovery = this.foundation.recover({
      sessionToken: this.sessionToken,
      reason
    }).then((result) => {
      this.configureSession();
      this.receipt("runtime.recovered", { sessionId: result.connection.sessionId });
      return result;
    }).catch((error) => {
      this.started = false;
      this.receipt("runtime.recovery-failed", { name: error.name, message: error.message });
      throw error;
    }).finally(() => {
      this.recovery = null;
    });
    return this.recovery;
  }

  configureSession() {
    this.realtime.send({
      type: "session.update",
      session: {
        type: "realtime",
        output_modalities: ["audio"],
        instructions: this.instructions,
        audio: {
          input: {
            transcription: { model: "gpt-4o-mini-transcribe" },
            turn_detection: NEXUS_VOICE_LATENCY_PROFILE.turnDetection
          },
          output: { voice: this.preferences.voice }
        },
        tools: [{
          type: "function",
          name: "route_nexus_command",
          description: "Open and populate the correct Nexus application for the user's command. Use Live Knowledge for current facts, approved sources, references, citations, and evidence.",
          parameters: {
            type: "object",
            properties: { command: { type: "string" } },
            required: ["command"]
          }
        }],
        tool_choice: "auto"
      }
    });
    this.receipt("runtime.session-configured");
  }

  updateExperiencePreferences(value = {}) {
    this.preferences = normalizeExperiencePreferences({ ...this.preferences, ...value });
    this.instructions = createPresenceInstructions(this.preferences);
    if (this.started) this.configureSession();
    this.receipt("experience.preferences-updated", {
      pace: this.preferences.pace,
      volume: this.preferences.volume,
      captions: this.preferences.captions,
      language: this.preferences.language,
      voiceIdentity: this.preferences.voiceIdentity
    });
    return this.preferences;
  }

  replayLastResponse() {
    if (!this.started) throw new Error("Start Nexus before replaying a response.");
    this.requestResponse({
      response: {
        output_modalities: ["audio"],
        instructions: "Repeat your immediately previous answer once, without adding new information."
      }
    }, "replay");
    this.receipt("conversation.replay-requested");
  }

  speakText(text, reason = "visual-read") {
    const content = String(text || "").trim();
    if (!content) throw new Error("Nexus needs visible text to read.");
    if (!this.started) throw new Error("Start Nexus before asking it to read visible content.");
    return this.requestResponse({
      response: {
        output_modalities: ["audio"],
        instructions: `Read the following visible Nexus content once, faithfully and clearly. Do not add information:\n\n${content}`
      }
    }, reason, { defer: true });
  }

  requestResponse(event = {}, reason = "runtime", { defer = false } = {}) {
    if (this.responseActive || this.responseRequestPending) {
      if (defer && !this.deferredResponse) {
        this.deferredResponse = { event, reason };
        this.receipt("audio.exclusive-response-deferred", {
          reason,
          activeResponseId: this.activeResponseId
        });
        return true;
      }
      this.receipt("audio.exclusive-response-blocked", {
        reason,
        activeResponseId: this.activeResponseId
      });
      return false;
    }
    this.responseRequestPending = true;
    this.lastResponseRequest = { event: { ...event }, reason };
    this.realtime.send({ type: "response.create", ...event });
    this.receipt("conversation.response-requested", { reason });
    return true;
  }

  cancelActiveResponse(reason = "barge-in") {
    if (!this.responseActive && !this.responseRequestPending) return false;
    const event = { type: "response.cancel" };
    if (this.activeResponseId) event.response_id = this.activeResponseId;
    this.realtime.send(event);
    this.receipt("audio.active-response-cancelled", {
      reason,
      responseId: this.activeResponseId
    });
    this.activeResponseId = null;
    this.responseActive = false;
    this.responseRequestPending = false;
    this.deferredResponse = null;
    return true;
  }

  flushDeferredResponse() {
    const deferred = this.deferredResponse;
    this.deferredResponse = null;
    if (!deferred) return false;
    return this.requestResponse(deferred.event, deferred.reason);
  }

  completeResponse(event, completionEvent) {
    const responseId = event?.response?.id || event?.response_id || this.activeResponseId || null;
    const completionKey = responseId || `pending:${this.responseActive}:${this.responseRequestPending}`;
    if (this.completedResponseKeys.has(completionKey)) return false;
    this.completedResponseKeys.add(completionKey);
    if (this.completedResponseKeys.size > 32) {
      this.completedResponseKeys.delete(this.completedResponseKeys.values().next().value);
    }
    this.clearResponseFallback();
    this.activeResponseId = null;
    this.responseActive = false;
    this.responseRequestPending = false;
    this.responseRetryCount = 0;
    this.clearResponseRetry();
    this.receipt("audio.owner-released", {
      owner: "realtime",
      responseId,
      completionEvent
    });
    this.receipt("conversation.return-to-listening", {
      responseId,
      completionEvent
    });
    this.flushDeferredResponse();
    return true;
  }

  attachRemoteAudio(peer) {
    peer.addEventListener("track", (event) => {
      this.attachRemoteStream(event.streams && event.streams[0]);
    });
  }

  attachRemoteStream(stream) {
    if (!stream) {
      this.receipt("audio.remote-failed", { reason: "missing-stream" });
      return;
    }
    this.audioElement.srcObject = stream;
    const playback = typeof this.audioElement.play === "function" ? this.audioElement.play() : null;
    if (playback && typeof playback.catch === "function") {
      playback.catch((error) => this.receipt("audio.playback-failed", { message: error.message }));
    }
    this.receipt("audio.remote-attached");
  }

  async handleRealtimeEvent(rawEvent) {
    const event = typeof rawEvent === "string" ? JSON.parse(rawEvent) : rawEvent;
    if (!event || typeof event.type !== "string") return null;

    if (event.type === "response.function_call_arguments.done" && event.name === "route_nexus_command") {
      const args = JSON.parse(event.arguments || "{}");
      return this.handleCommand(args.command, event.call_id);
    }
    if (event.type === "conversation.item.input_audio_transcription.completed") {
      const transcript = event.transcript || "";
      this.receipt("transcript.final", { transcript });
      const wakePhrase = detectWakePhrase(transcript);
      if (wakePhrase) this.receipt("conversation.wake-phrase", { phrase: wakePhrase });
      const resolution = routeCommand(transcript, this.foundation.machine.snapshot().state, this.conversationContext);
      if (resolution.accepted || this.interceptCommand) {
        this.handleCommand(transcript).catch((error) => {
          this.receipt("workspace.route-failed", {
            name: error.name,
            message: error.message,
            command: transcript
          });
        });
      }
    }
    if (event.type === "input_audio_buffer.speech_started") {
      this.clearResponseFallback();
      this.cancelActiveResponse("barge-in");
      this.receipt("conversation.barge-in");
    }
    if (event.type === "input_audio_buffer.speech_stopped") {
      this.receipt("conversation.processing");
      this.clearResponseFallback();
      this.responseFallbackTimer = setTimeout(() => {
        this.responseFallbackTimer = null;
        try {
          this.requestResponse({}, "vad-fallback");
        } catch (error) {
          this.receipt("runtime.event-failed", { name: error.name, message: error.message });
        }
      }, NEXUS_VOICE_LATENCY_PROFILE.responseFallbackMs);
    }
    if (event.type === "response.created") {
      this.clearResponseFallback();
      const responseId = event.response && event.response.id || event.response_id || null;
      if (this.responseActive && responseId !== this.activeResponseId) {
        this.receipt("audio.exclusive-owner-violation", {
          owner: "realtime",
          activeResponseId: this.activeResponseId,
          overlappingResponseId: responseId
        });
        this.realtime.send({
          type: "response.cancel",
          ...(responseId ? { response_id: responseId } : {})
        });
        return null;
      }
      this.responseRequestPending = false;
      this.responseActive = true;
      this.activeResponseId = responseId;
      this.receipt("conversation.response-started", { responseId });
    }
    if (event.type === "response.output_audio.delta" || event.type === "response.audio.delta") {
      this.receipt("conversation.speaking");
    }
    if (
      event.type === "response.output_audio.done"
      || event.type === "response.audio.done"
      || event.type === "response.done"
    ) {
      this.completeResponse(event, event.type);
    }
    if (event.type === "response.cancelled") {
      this.activeResponseId = null;
      this.responseActive = false;
      this.responseRequestPending = false;
      this.receipt("audio.owner-released", { owner: "realtime", completionEvent: event.type });
      this.flushDeferredResponse();
    }
    if (event.type === "error") {
      this.clearResponseFallback();
      const detail = event.error || {};
      if (detail.code === "response_cancel_not_active" || detail.code === "conversation_already_has_active_response") {
        this.activeResponseId = null;
        this.responseActive = false;
        this.responseRequestPending = false;
      }
      const errorCode = String(detail.code || detail.type || "unknown").toLowerCase();
      if (TRANSIENT_REALTIME_ERROR_CODES.has(errorCode) && this.lastResponseRequest && this.responseRetryCount < this.realtimeRetryLimit) {
        this.activeResponseId = null;
        this.responseActive = false;
        this.responseRequestPending = false;
        this.responseRetryCount += 1;
        const retry = this.lastResponseRequest;
        this.receipt("realtime.response-retry-scheduled", {
          code: errorCode,
          attempt: this.responseRetryCount,
          limit: this.realtimeRetryLimit,
          reason: retry.reason
        });
        this.clearResponseRetry();
        this.responseRetryTimer = this.schedule(() => {
          this.responseRetryTimer = null;
          if (!this.started || this.responseActive || this.responseRequestPending) return;
          this.responseRequestPending = true;
          this.realtime.send({ type: "response.create", ...retry.event });
          this.receipt("realtime.response-retried", {
            code: errorCode,
            attempt: this.responseRetryCount,
            reason: retry.reason
          });
        }, this.realtimeRetryDelayMs * this.responseRetryCount);
      }
      this.receipt("realtime.error", {
        code: errorCode,
        message: detail.message || "Realtime voice request failed."
      });
    }
    return null;
  }

  commandKey(command) {
    return String(command || "")
      .toLocaleLowerCase()
      .replace(/^(?:hey\s+|hello\s+)?nexus\b[\s,;:.-]*/i, "")
      .replace(/[?.!]+$/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  async handleCommand(command, callId = null) {
    const key = this.commandKey(command);
    let interception = key && this.commandInterceptions.get(key);
    if (!interception) {
      interception = Promise.resolve(this.interceptCommand?.(command, {
        requestId: callId || undefined
      })).then((result) => result || { handled: false });
      if (key) {
        this.commandInterceptions.set(key, interception);
        setTimeout(() => {
          if (this.commandInterceptions.get(key) === interception) this.commandInterceptions.delete(key);
        }, 15000);
      }
    }
    const owned = await interception;
    if (!owned.handled) return this.route(command, callId);
    this.receipt("command.consumed-by-guided-entry", {
      command,
      action: owned.action || null,
      requestId: owned.requestId || null
    });
    if (callId) {
      this.realtime.send({
        type: "conversation.item.create",
        item: {
          type: "function_call_output",
          call_id: callId,
          output: JSON.stringify(owned)
        }
      });
      this.requestResponse({}, "guided-entry-result", { defer: true });
    }
    return owned;
  }

  async route(command, callId = null) {
    const state = this.foundation.machine.snapshot().state;
    const resolution = routeCommand(command, state, this.conversationContext);
    let result = resolution;
    if (resolution.accepted) {
      const routeKey = this.commandKey(resolution.command);
      let visualRoute = this.visualRoutes.get(routeKey);
      if (!visualRoute) {
        visualRoute = this.requestTransaction.run(resolution).then((routed) => {
          const acknowledgement = routed.acknowledgement;
          if (routed.outcome?.verified === true && !this.visibleWorkspaceTransactions.has(routed.transactionId)) {
            this.visibleWorkspaceTransactions.add(routed.transactionId);
            if (this.visibleWorkspaceTransactions.size > 64) {
              this.visibleWorkspaceTransactions.delete(this.visibleWorkspaceTransactions.values().next().value);
            }
            this.receipt("workspace.visible", {
              workspace: routed.workspace,
              transactionId: routed.transactionId,
              acknowledgementId: acknowledgement.id || null,
              outcomeKind: acknowledgement.outcomeKind || null,
              outcomeVerified: true,
              evidenceReceiptId: acknowledgement.evidenceReceiptId || null,
              evidenceStatus: acknowledgement.evidenceStatus || null,
              evidenceSourceCount: acknowledgement.evidenceSourceCount || 0,
              evidenceLinksVisible: acknowledgement.evidenceLinksVisible === true
            });
          }
          this.conversationContext = rememberCompletedTurn(this.conversationContext, routed);
          this.receipt("conversation.context-advanced", {
            workspace: routed.workspace,
            transactionId: routed.transactionId,
            turn: this.conversationContext.turn,
            contextual: routed.contextual === true,
            visualFollowUp: routed.visualFollowUp === true,
            visualSurfaceId: this.conversationContext.visual && this.conversationContext.visual.surfaceId || null,
            previousTransactionId: routed.previousTransactionId || null
          });
          return routed;
        }).finally(() => {
          setTimeout(() => {
            if (this.visualRoutes.get(routeKey) === visualRoute) {
              this.visualRoutes.delete(routeKey);
            }
          }, 15000);
        });
        this.visualRoutes.set(routeKey, visualRoute);
      }
      result = await visualRoute;
    }
    if (callId) {
      this.realtime.send({
        type: "conversation.item.create",
        item: {
          type: "function_call_output",
          call_id: callId,
          output: JSON.stringify(result)
        }
      });
      this.requestResponse({}, "tool-result", { defer: true });
    }
    return result;
  }

  clearResponseFallback() {
    if (this.responseFallbackTimer) clearTimeout(this.responseFallbackTimer);
    this.responseFallbackTimer = null;
  }

  clearResponseRetry() {
    if (this.responseRetryTimer) clearTimeout(this.responseRetryTimer);
    this.responseRetryTimer = null;
  }

  stop(reason = "user-stop") {
    this.clearResponseFallback();
    this.clearResponseRetry();
    this.foundation.stop(reason);
    if (this.unsubscribe) this.unsubscribe();
    this.unsubscribe = null;
    this.audioElement.srcObject = null;
    this.sessionToken = null;
    this.started = false;
    this.activeResponseId = null;
    this.responseActive = false;
    this.responseRequestPending = false;
    this.deferredResponse = null;
    this.lastResponseRequest = null;
    this.responseRetryCount = 0;
    this.completedResponseKeys.clear();
    this.visualRoutes.clear();
    this.visibleWorkspaceTransactions.clear();
    this.commandInterceptions.clear();
    this.conversationContext = clearConversationContext();
    this.receipt("runtime.closed", { reason });
  }

  receipt(type, detail = {}) {
    this.onReceipt(Object.freeze({
      schema: "nexus.runtime.receipt.v1",
      type,
      detail: Object.freeze({ ...detail }),
      at: new Date().toISOString()
    }));
  }
}

module.exports = { NexusBrowserRuntime, DEFAULT_INSTRUCTIONS };
