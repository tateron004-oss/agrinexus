"use strict";

const { routeCommand } = require("./router");
const {
  DEFAULT_EXPERIENCE_PREFERENCES,
  createPresenceInstructions,
  detectWakePhrase,
  normalizeExperiencePreferences
} = require("./experience-profile");
const { NEXUS_VOICE_LATENCY_PROFILE } = require("./latency-profile");

const DEFAULT_INSTRUCTIONS = createPresenceInstructions(DEFAULT_EXPERIENCE_PREFERENCES);

class NexusBrowserRuntime {
  constructor({
    foundation,
    realtime,
    audioElement,
    openWorkspace,
    onReceipt = () => {},
    instructions = DEFAULT_INSTRUCTIONS
  } = {}) {
    if (!foundation || typeof foundation.start !== "function") throw new Error("A voice foundation is required.");
    if (!realtime || typeof realtime.send !== "function") throw new Error("A Realtime connector is required.");
    if (!audioElement) throw new Error("A remote audio element is required.");
    if (typeof openWorkspace !== "function") throw new Error("A workspace adapter is required.");
    this.foundation = foundation;
    this.realtime = realtime;
    this.audioElement = audioElement;
    this.openWorkspace = openWorkspace;
    this.onReceipt = onReceipt;
    this.instructions = instructions;
    this.preferences = DEFAULT_EXPERIENCE_PREFERENCES;
    this.started = false;
    this.unsubscribe = null;
    this.sessionToken = null;
    this.recovery = null;
    this.responseFallbackTimer = null;
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
    this.realtime.send({
      type: "response.create",
      response: {
        output_modalities: ["audio"],
        instructions: "Repeat your immediately previous answer once, without adding new information."
      }
    });
    this.receipt("conversation.replay-requested");
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
      return this.route(args.command, event.call_id);
    }
    if (event.type === "conversation.item.input_audio_transcription.completed") {
      const transcript = event.transcript || "";
      this.receipt("transcript.final", { transcript });
      const wakePhrase = detectWakePhrase(transcript);
      if (wakePhrase) this.receipt("conversation.wake-phrase", { phrase: wakePhrase });
    }
    if (event.type === "input_audio_buffer.speech_started") {
      this.clearResponseFallback();
      this.receipt("conversation.barge-in");
    }
    if (event.type === "input_audio_buffer.speech_stopped") {
      this.receipt("conversation.processing");
      this.clearResponseFallback();
      this.responseFallbackTimer = setTimeout(() => {
        this.responseFallbackTimer = null;
        try {
          this.realtime.send({ type: "response.create" });
          this.receipt("conversation.response-requested", { reason: "vad-fallback" });
        } catch (error) {
          this.receipt("runtime.event-failed", { name: error.name, message: error.message });
        }
      }, NEXUS_VOICE_LATENCY_PROFILE.responseFallbackMs);
    }
    if (event.type === "response.created") {
      this.clearResponseFallback();
      this.receipt("conversation.response-started");
    }
    if (event.type === "response.output_audio.delta" || event.type === "response.audio.delta") {
      this.receipt("conversation.speaking");
    }
    if (event.type === "response.output_audio.done" || event.type === "response.audio.done") {
      this.clearResponseFallback();
      this.receipt("conversation.return-to-listening");
    }
    if (event.type === "error") {
      this.clearResponseFallback();
      const detail = event.error || {};
      this.receipt("realtime.error", {
        code: detail.code || "unknown",
        message: detail.message || "Realtime voice request failed."
      });
    }
    return null;
  }

  async route(command, callId = null) {
    const state = this.foundation.machine.snapshot().state;
    const resolution = routeCommand(command, state);
    let result = resolution;
    if (resolution.accepted) {
      const acknowledgement = await this.openWorkspace({
        workspace: resolution.workspace,
        command: resolution.command
      });
      if (!acknowledgement || acknowledgement.visible !== true) {
        throw new Error(`Workspace ${resolution.workspace} did not provide visible acknowledgement.`);
      }
      result = Object.freeze({ ...resolution, acknowledgement });
      this.receipt("workspace.visible", {
        workspace: resolution.workspace,
        acknowledgementId: acknowledgement.id || null,
        evidenceReceiptId: acknowledgement.evidenceReceiptId || null,
        evidenceStatus: acknowledgement.evidenceStatus || null
      });
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
      this.realtime.send({ type: "response.create" });
    }
    return result;
  }

  clearResponseFallback() {
    if (this.responseFallbackTimer) clearTimeout(this.responseFallbackTimer);
    this.responseFallbackTimer = null;
  }

  stop(reason = "user-stop") {
    this.clearResponseFallback();
    this.foundation.stop(reason);
    if (this.unsubscribe) this.unsubscribe();
    this.unsubscribe = null;
    this.audioElement.srcObject = null;
    this.sessionToken = null;
    this.started = false;
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
