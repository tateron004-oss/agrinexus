"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };

  // rebuild/nexus-core/contracts.js
  var require_contracts = __commonJS({
    "rebuild/nexus-core/contracts.js"(exports, module) {
      "use strict";
      var CONNECTION_STATES = Object.freeze([
        "idle",
        "requesting-microphone",
        "microphone-ready",
        "requesting-session",
        "connecting",
        "connected",
        "recovering",
        "closed",
        "failed"
      ]);
      var ALLOWED_TRANSITIONS = Object.freeze({
        idle: ["requesting-microphone", "closed"],
        "requesting-microphone": ["microphone-ready", "failed", "closed"],
        "microphone-ready": ["requesting-session", "failed", "closed"],
        "requesting-session": ["connecting", "failed", "closed"],
        connecting: ["connected", "recovering", "failed", "closed"],
        connected: ["recovering", "failed", "closed"],
        recovering: ["requesting-session", "failed", "closed"],
        failed: ["requesting-microphone", "closed"],
        closed: ["requesting-microphone"]
      });
      function assertTransition(from, to) {
        if (!CONNECTION_STATES.includes(from) || !CONNECTION_STATES.includes(to)) {
          throw new Error(`Unknown Nexus connection state: ${from} -> ${to}`);
        }
        if (!ALLOWED_TRANSITIONS[from].includes(to)) {
          throw new Error(`Invalid Nexus connection transition: ${from} -> ${to}`);
        }
      }
      function createReceipt({ sequence, from, to, reason, detail = {}, at = (/* @__PURE__ */ new Date()).toISOString() }) {
        return Object.freeze({
          schema: "nexus.connection.receipt.v1",
          sequence,
          from,
          to,
          reason,
          detail: Object.freeze({ ...detail }),
          at
        });
      }
      module.exports = {
        CONNECTION_STATES,
        ALLOWED_TRANSITIONS,
        assertTransition,
        createReceipt
      };
    }
  });

  // rebuild/nexus-core/connection-machine.js
  var require_connection_machine = __commonJS({
    "rebuild/nexus-core/connection-machine.js"(exports, module) {
      "use strict";
      var { assertTransition, createReceipt } = require_contracts();
      var NexusConnectionMachine = class {
        constructor({ onReceipt = () => {
        } } = {}) {
          this.state = "idle";
          this.sequence = 0;
          this.receipts = [];
          this.onReceipt = onReceipt;
          this.microphoneOwner = null;
          this.sessionId = null;
        }
        transition(to, reason, detail = {}) {
          assertTransition(this.state, to);
          const from = this.state;
          this.state = to;
          const receipt = createReceipt({
            sequence: ++this.sequence,
            from,
            to,
            reason,
            detail
          });
          this.receipts.push(receipt);
          this.onReceipt(receipt);
          return receipt;
        }
        beginMicrophone(ownerId) {
          if (!ownerId) throw new Error("A microphone owner is required.");
          if (this.microphoneOwner && this.microphoneOwner !== ownerId) {
            throw new Error(`Microphone already owned by ${this.microphoneOwner}.`);
          }
          this.microphoneOwner = ownerId;
          return this.transition("requesting-microphone", "user-gesture", { ownerId });
        }
        microphoneReady(ownerId, trackId) {
          this.assertOwner(ownerId);
          if (!trackId) throw new Error("A live microphone track is required.");
          return this.transition("microphone-ready", "live-track-acquired", { ownerId, trackId });
        }
        requestSession(ownerId) {
          this.assertOwner(ownerId);
          return this.transition("requesting-session", "ephemeral-session-requested", { ownerId });
        }
        connecting(ownerId, sessionId) {
          this.assertOwner(ownerId);
          if (!sessionId) throw new Error("A Realtime session id is required.");
          this.sessionId = sessionId;
          return this.transition("connecting", "webrtc-negotiation-started", { ownerId, sessionId });
        }
        connected(ownerId) {
          this.assertOwner(ownerId);
          return this.transition("connected", "webrtc-connected", {
            ownerId,
            sessionId: this.sessionId
          });
        }
        beginRecovery(ownerId, reason = "connection-interrupted") {
          this.assertOwner(ownerId);
          return this.transition("recovering", reason, {
            ownerId,
            sessionId: this.sessionId
          });
        }
        fail(code, message) {
          const receipt = this.transition("failed", code || "connection-failed", {
            message: message || "Unknown connection failure",
            ownerId: this.microphoneOwner,
            sessionId: this.sessionId
          });
          this.release();
          return receipt;
        }
        close(reason = "user-stop") {
          const receipt = this.transition("closed", reason, {
            ownerId: this.microphoneOwner,
            sessionId: this.sessionId
          });
          this.release();
          return receipt;
        }
        release() {
          this.microphoneOwner = null;
          this.sessionId = null;
        }
        assertOwner(ownerId) {
          if (!ownerId || this.microphoneOwner !== ownerId) {
            throw new Error(`Microphone ownership mismatch: expected ${this.microphoneOwner || "none"}, received ${ownerId || "none"}.`);
          }
        }
        snapshot() {
          return Object.freeze({
            state: this.state,
            sequence: this.sequence,
            microphoneOwner: this.microphoneOwner,
            sessionId: this.sessionId,
            receipts: Object.freeze([...this.receipts])
          });
        }
      };
      module.exports = { NexusConnectionMachine };
    }
  });

  // rebuild/nexus-core/microphone-controller.js
  var require_microphone_controller = __commonJS({
    "rebuild/nexus-core/microphone-controller.js"(exports, module) {
      "use strict";
      var NexusMicrophoneController = class {
        constructor({ mediaDevices, ownerId = "nexus-primary", onReceipt = () => {
        } } = {}) {
          if (!mediaDevices || typeof mediaDevices.getUserMedia !== "function") {
            throw new Error("A browser mediaDevices implementation is required.");
          }
          this.mediaDevices = mediaDevices;
          this.ownerId = ownerId;
          this.onReceipt = onReceipt;
          this.stream = null;
          this.pending = null;
        }
        async acquire({ userGesture = false } = {}) {
          if (!userGesture) throw new Error("Microphone acquisition requires a real user gesture.");
          const existing = this.liveTrack();
          if (existing) return Object.freeze({ ownerId: this.ownerId, stream: this.stream, track: existing, reused: true });
          if (this.pending) return this.pending;
          this.receipt("microphone.requested");
          this.pending = this.mediaDevices.getUserMedia({
            audio: {
              echoCancellation: true,
              noiseSuppression: true,
              autoGainControl: true,
              channelCount: 1
            },
            video: false
          }).then((stream) => {
            const tracks = stream && typeof stream.getAudioTracks === "function" ? stream.getAudioTracks() : [];
            const track = tracks.find((candidate) => candidate.readyState === "live" && candidate.enabled !== false);
            if (!track) {
              stopStream(stream);
              throw new Error("Browser returned no live microphone track.");
            }
            this.stream = stream;
            this.receipt("microphone.acquired", { trackId: track.id, readyState: track.readyState });
            return Object.freeze({ ownerId: this.ownerId, stream, track, reused: false });
          }).catch((error) => {
            this.receipt("microphone.failed", { name: error.name || "Error", message: error.message });
            throw error;
          }).finally(() => {
            this.pending = null;
          });
          return this.pending;
        }
        liveTrack() {
          if (!this.stream || typeof this.stream.getAudioTracks !== "function") return null;
          return this.stream.getAudioTracks().find((track) => track.readyState === "live" && track.enabled !== false) || null;
        }
        release(reason = "user-stop") {
          stopStream(this.stream);
          this.stream = null;
          this.receipt("microphone.released", { reason });
        }
        receipt(type, detail = {}) {
          this.onReceipt(Object.freeze({
            schema: "nexus.microphone.receipt.v1",
            type,
            ownerId: this.ownerId,
            detail: Object.freeze({ ...detail }),
            at: (/* @__PURE__ */ new Date()).toISOString()
          }));
        }
      };
      function stopStream(stream) {
        if (!stream || typeof stream.getTracks !== "function") return;
        for (const track of stream.getTracks()) track.stop();
      }
      module.exports = { NexusMicrophoneController };
    }
  });

  // rebuild/nexus-core/realtime-connector.js
  var require_realtime_connector = __commonJS({
    "rebuild/nexus-core/realtime-connector.js"(exports, module) {
      "use strict";
      var NexusRealtimeConnector = class {
        constructor({
          createPeerConnection,
          fetchSession,
          exchangeSdp,
          readyTimeoutMs = 15e3,
          onEvent = () => {
          }
        } = {}) {
          if (typeof createPeerConnection !== "function") throw new Error("createPeerConnection is required.");
          if (typeof fetchSession !== "function") throw new Error("fetchSession is required.");
          if (typeof exchangeSdp !== "function") throw new Error("exchangeSdp is required.");
          this.createPeerConnection = createPeerConnection;
          this.fetchSession = fetchSession;
          this.exchangeSdp = exchangeSdp;
          this.readyTimeoutMs = readyTimeoutMs;
          this.onEvent = onEvent;
          this.subscribers = /* @__PURE__ */ new Set();
          this.peer = null;
          this.channel = null;
        }
        subscribe(callback) {
          if (typeof callback !== "function") throw new Error("A Realtime event subscriber must be a function.");
          this.subscribers.add(callback);
          return () => this.subscribers.delete(callback);
        }
        async connect({ stream, track, sessionToken, onSessionIssued = () => {
        } }) {
          if (!track || track.readyState !== "live") throw new Error("Realtime requires a live microphone track.");
          if (!sessionToken) throw new Error("An authenticated Nexus session token is required.");
          this.peer = this.createPeerConnection();
          this.channel = this.peer.createDataChannel("oai-events");
          this.bindEvents();
          this.peer.addTrack(track, stream);
          this.event("realtime.track-attached", { trackId: track.id });
          const offer = await this.peer.createOffer();
          await this.peer.setLocalDescription(offer);
          this.event("realtime.offer-created");
          const ephemeral = await this.fetchSession({ sessionToken });
          if (!ephemeral || !ephemeral.clientSecret || !ephemeral.sessionId) {
            throw new Error("Realtime session service returned an invalid ephemeral credential.");
          }
          this.event("realtime.session-issued", { sessionId: ephemeral.sessionId });
          onSessionIssued(ephemeral.sessionId);
          const answerSdp = await this.exchangeSdp({
            clientSecret: ephemeral.clientSecret,
            offerSdp: offer.sdp
          });
          if (!answerSdp) throw new Error("Realtime SDP exchange returned no answer.");
          await this.peer.setRemoteDescription({ type: "answer", sdp: answerSdp });
          this.event("realtime.answer-applied", { sessionId: ephemeral.sessionId });
          await this.waitUntilReady();
          this.event("realtime.ready", { sessionId: ephemeral.sessionId });
          return Object.freeze({
            sessionId: ephemeral.sessionId,
            peer: this.peer,
            channel: this.channel
          });
        }
        waitUntilReady() {
          if (this.peer.connectionState === "connected" && this.channel.readyState === "open") {
            return Promise.resolve();
          }
          return new Promise((resolve, reject) => {
            let settled = false;
            const finish = () => {
              if (settled) return;
              if (this.peer.connectionState === "failed" || this.peer.connectionState === "closed") {
                settled = true;
                clearTimeout(timer);
                reject(new Error(`Realtime peer entered ${this.peer.connectionState} before becoming ready.`));
                return;
              }
              if (this.peer.connectionState === "connected" && this.channel.readyState === "open") {
                settled = true;
                clearTimeout(timer);
                resolve();
              }
            };
            const timer = setTimeout(() => {
              if (settled) return;
              settled = true;
              reject(new Error("Realtime connection timed out before peer and data channel were ready."));
            }, this.readyTimeoutMs);
            this.peer.addEventListener("connectionstatechange", finish);
            this.channel.addEventListener("open", finish);
            this.channel.addEventListener("close", finish);
            finish();
          });
        }
        bindEvents() {
          this.peer.addEventListener("connectionstatechange", () => {
            this.event("realtime.connection-state", { state: this.peer.connectionState });
          });
          this.channel.addEventListener("open", () => this.event("realtime.data-open"));
          this.channel.addEventListener("message", (event) => this.event("realtime.data-message", { data: event.data }));
          this.channel.addEventListener("close", () => this.event("realtime.data-closed"));
          this.peer.addEventListener("track", (event) => {
            this.event("realtime.remote-track", {
              stream: event.streams && event.streams[0] ? event.streams[0] : null
            });
          });
        }
        send(event) {
          if (!this.channel || this.channel.readyState !== "open") {
            throw new Error("Realtime data channel is not open.");
          }
          this.channel.send(JSON.stringify(event));
        }
        close(reason = "user-stop") {
          if (this.channel && typeof this.channel.close === "function") this.channel.close();
          if (this.peer && typeof this.peer.close === "function") this.peer.close();
          this.channel = null;
          this.peer = null;
          this.event("realtime.closed", { reason });
        }
        event(type, detail = {}) {
          const receipt = Object.freeze({
            schema: "nexus.realtime.receipt.v1",
            type,
            detail: Object.freeze({ ...detail }),
            at: (/* @__PURE__ */ new Date()).toISOString()
          });
          this.onEvent(receipt);
          for (const subscriber of this.subscribers) subscriber(receipt);
        }
      };
      module.exports = { NexusRealtimeConnector };
    }
  });

  // rebuild/nexus-core/voice-foundation.js
  var require_voice_foundation = __commonJS({
    "rebuild/nexus-core/voice-foundation.js"(exports, module) {
      "use strict";
      var NexusVoiceFoundation = class {
        constructor({ sessionAuthority, machine, microphone, realtime, ownerId = "nexus-primary" } = {}) {
          this.sessionAuthority = sessionAuthority;
          this.machine = machine;
          this.microphone = microphone;
          this.realtime = realtime;
          this.ownerId = ownerId;
        }
        async start({ sessionToken, userGesture = false } = {}) {
          const session = this.sessionAuthority.verify(sessionToken);
          this.machine.beginMicrophone(this.ownerId);
          try {
            const acquired = await this.microphone.acquire({ userGesture });
            this.machine.microphoneReady(this.ownerId, acquired.track.id);
            this.machine.requestSession(this.ownerId);
            const connection = await this.realtime.connect({
              stream: acquired.stream,
              track: acquired.track,
              sessionToken,
              onSessionIssued: (sessionId) => this.machine.connecting(this.ownerId, sessionId)
            });
            this.machine.connected(this.ownerId);
            return Object.freeze({ session, connection, state: this.machine.snapshot() });
          } catch (error) {
            this.machine.fail(error.name || "voice-start-failed", error.message);
            this.microphone.release("startup-failed");
            this.realtime.close("startup-failed");
            throw error;
          }
        }
        async recover({ sessionToken, reason = "connection-interrupted" } = {}) {
          this.sessionAuthority.verify(sessionToken);
          const track = this.microphone.liveTrack();
          if (!track || !this.microphone.stream) {
            throw new Error("Voice recovery requires the existing live Nexus microphone track.");
          }
          this.machine.beginRecovery(this.ownerId, reason);
          this.realtime.close(reason);
          try {
            this.machine.requestSession(this.ownerId);
            const connection = await this.realtime.connect({
              stream: this.microphone.stream,
              track,
              sessionToken,
              onSessionIssued: (sessionId) => this.machine.connecting(this.ownerId, sessionId)
            });
            this.machine.connected(this.ownerId);
            return Object.freeze({ connection, state: this.machine.snapshot() });
          } catch (error) {
            this.machine.fail(error.name || "voice-recovery-failed", error.message);
            this.microphone.release("recovery-failed");
            this.realtime.close("recovery-failed");
            throw error;
          }
        }
        stop(reason = "user-stop") {
          this.realtime.close(reason);
          this.microphone.release(reason);
          if (!["idle", "closed"].includes(this.machine.state)) this.machine.close(reason);
        }
      };
      module.exports = { NexusVoiceFoundation };
    }
  });

  // rebuild/nexus-core/router.js
  var require_router = __commonJS({
    "rebuild/nexus-core/router.js"(exports, module) {
      "use strict";
      var ROUTES = Object.freeze([
        ["maps", /\b(map|maps|route|directions|navigate|location)\b/i],
        ["reminders", /\b(remind|reminder)\b/i],
        ["telehealth", /\b(telehealth|doctor|clinician|video visit)\b/i],
        ["mobile-clinic", /\b(mobile clinic|clinic visit)\b/i],
        ["pharmacy", /\b(pharmacy|pharmacist|prescription)\b/i],
        ["workforce", /\b(job|jobs|work|career|employment|resume)\b/i],
        ["marketplace", /\b(sell|buy|buyer|market|marketplace|trade)\b/i],
        ["health", /\b(health|blood pressure|diabetes|hypertension|weight|medicine)\b/i],
        ["agriculture", /\b(farm|farmer|crop|maize|soil|weather for my field)\b/i],
        ["learning", /\b(learn|lesson|course|literacy|training)\b/i],
        ["music", /\b(play|music|song|songs)\b/i],
        ["offline", /\b(offline|sync|queue)\b/i],
        ["live-knowledge", /\b(search the (web|internet)|look up|latest|current news|live knowledge)\b/i]
      ]);
      function routeCommand(command, connectionState) {
        if (connectionState !== "connected") {
          return Object.freeze({
            accepted: false,
            code: "realtime-not-connected",
            workspace: null
          });
        }
        const normalized = String(command || "").trim();
        const match = ROUTES.find(([, pattern]) => pattern.test(normalized));
        return Object.freeze({
          accepted: Boolean(match),
          code: match ? "workspace-route-resolved" : "conversation",
          workspace: match ? match[0] : null,
          command: normalized
        });
      }
      module.exports = { ROUTES, routeCommand };
    }
  });

  // rebuild/nexus-core/browser-runtime.js
  var require_browser_runtime = __commonJS({
    "rebuild/nexus-core/browser-runtime.js"(exports, module) {
      "use strict";
      var { routeCommand } = require_router();
      var DEFAULT_INSTRUCTIONS = [
        "You are Nexus Genesis, a warm, capable voice-first assistant.",
        "Greet the signed-in user naturally and respond concisely.",
        "Use the configured function route_nexus_command for application requests.",
        "Never claim that an external action completed without a verified receipt.",
        "Health guidance must preserve consent, safety, and emergency escalation."
      ].join(" ");
      var NexusBrowserRuntime = class {
        constructor({
          foundation,
          realtime,
          audioElement,
          openWorkspace,
          onReceipt = () => {
          },
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
          this.started = false;
          this.unsubscribe = null;
          this.sessionToken = null;
          this.recovery = null;
        }
        async start({ sessionToken, userGesture = false } = {}) {
          if (typeof this.realtime.subscribe === "function" && !this.unsubscribe) {
            this.unsubscribe = this.realtime.subscribe((receipt) => {
              if (receipt.type === "realtime.connection-state" && ["disconnected", "failed"].includes(receipt.detail.state)) {
                this.recover(receipt.detail.state).catch(() => {
                });
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
              instructions: this.instructions,
              audio: {
                input: {
                  turn_detection: {
                    type: "server_vad",
                    create_response: true,
                    interrupt_response: true
                  }
                },
                output: { voice: "marin" }
              },
              tools: [{
                type: "function",
                name: "route_nexus_command",
                description: "Open and populate the correct Nexus application for the user's command.",
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
            this.receipt("transcript.final", { transcript: event.transcript || "" });
          }
          if (event.type === "input_audio_buffer.speech_started") {
            this.receipt("conversation.barge-in");
          }
          if (event.type === "response.output_audio.done" || event.type === "response.audio.done") {
            this.receipt("conversation.return-to-listening");
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
              acknowledgementId: acknowledgement.id || null
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
        stop(reason = "user-stop") {
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
            at: (/* @__PURE__ */ new Date()).toISOString()
          }));
        }
      };
      module.exports = { NexusBrowserRuntime, DEFAULT_INSTRUCTIONS };
    }
  });

  // rebuild/browser/nexus-clean-entry.js
  var require_nexus_clean_entry = __commonJS({
    "rebuild/browser/nexus-clean-entry.js"(exports, module) {
      var { NexusConnectionMachine } = require_connection_machine();
      var { NexusMicrophoneController } = require_microphone_controller();
      var { NexusRealtimeConnector } = require_realtime_connector();
      var { NexusVoiceFoundation } = require_voice_foundation();
      var { NexusBrowserRuntime } = require_browser_runtime();
      function createWorkspaceAdapter({ windowObject = window, timeoutMs = 8e3 } = {}) {
        return ({ workspace, command }) => new Promise((resolve, reject) => {
          const requestId = crypto.randomUUID();
          const timer = setTimeout(() => {
            windowObject.removeEventListener("nexus.clean.workspace.acknowledged", onAcknowledged);
            reject(new Error(`Workspace ${workspace} did not become visible within ${timeoutMs}ms.`));
          }, timeoutMs);
          function onAcknowledged(event) {
            if (!event.detail || event.detail.requestId !== requestId) return;
            clearTimeout(timer);
            windowObject.removeEventListener("nexus.clean.workspace.acknowledged", onAcknowledged);
            resolve({
              visible: event.detail.visible === true,
              id: event.detail.acknowledgementId || requestId
            });
          }
          windowObject.addEventListener("nexus.clean.workspace.acknowledged", onAcknowledged);
          windowObject.dispatchEvent(new CustomEvent("nexus.clean.workspace.open", {
            detail: Object.freeze({ requestId, workspace, command })
          }));
        });
      }
      function statusFromReceipt(receipt) {
        const labels = {
          "microphone.requested": "Connecting microphone\u2026",
          "microphone.acquired": "Listening",
          "runtime.ready": "Listening",
          "runtime.recovering": "Reconnecting\u2026",
          "runtime.recovered": "Listening",
          "conversation.barge-in": "Listening",
          "conversation.return-to-listening": "Listening",
          "workspace.visible": "Listening",
          "runtime.recovery-failed": "Voice connection unavailable"
        };
        return labels[receipt.type] || null;
      }
      function boot() {
        const orb = document.getElementById("nexus-orb");
        const status = document.getElementById("nexus-status");
        const audio = document.getElementById("nexus-audio");
        const config = window.NEXUS_CLEAN_CONFIG || {};
        const sessionToken = config.sessionToken || sessionStorage.getItem("nexus.clean.session");
        if (!sessionToken) {
          status.textContent = "Sign in to speak with Nexus";
          orb.disabled = true;
          return;
        }
        window.addEventListener("nexus.clean.workspace.open", (event) => {
          const detail = event.detail || {};
          const workspace = document.getElementById("nexus-workspace");
          const title = document.getElementById("nexus-workspace-title");
          const command = document.getElementById("nexus-workspace-command");
          if (!workspace || !title || !command || !detail.requestId || !detail.workspace) return;
          title.textContent = detail.workspace.replace(/(^|-)([a-z])/g, (_, separator, letter) => `${separator ? " " : ""}${letter.toUpperCase()}`);
          command.textContent = detail.command || "";
          workspace.dataset.workspace = detail.workspace;
          workspace.hidden = false;
          requestAnimationFrame(() => {
            window.dispatchEvent(new CustomEvent("nexus.clean.workspace.acknowledged", {
              detail: Object.freeze({
                requestId: detail.requestId,
                acknowledgementId: `visible-${detail.requestId}`,
                workspace: detail.workspace,
                visible: !workspace.hidden
              })
            }));
          });
        });
        const receipts = [];
        const onReceipt = (receipt) => {
          receipts.push(receipt);
          const label = statusFromReceipt(receipt);
          if (label) status.textContent = label;
          window.dispatchEvent(new CustomEvent("nexus.clean.receipt", { detail: receipt }));
        };
        const machine = new NexusConnectionMachine({ onReceipt });
        const microphone = new NexusMicrophoneController({
          mediaDevices: navigator.mediaDevices,
          onReceipt
        });
        const realtime = new NexusRealtimeConnector({
          createPeerConnection: () => new RTCPeerConnection(),
          fetchSession: async ({ sessionToken: token }) => {
            const response = await fetch("/api/voice/session", {
              method: "POST",
              headers: { authorization: `Bearer ${token}` }
            });
            if (!response.ok) throw new Error(`Nexus session request failed (${response.status}).`);
            return response.json();
          },
          exchangeSdp: async ({ clientSecret, offerSdp }) => {
            const response = await fetch("https://api.openai.com/v1/realtime/calls", {
              method: "POST",
              headers: {
                authorization: `Bearer ${clientSecret}`,
                "content-type": "application/sdp"
              },
              body: offerSdp
            });
            if (!response.ok) {
              const detail = String(await response.text()).slice(0, 500);
              throw new Error(`Realtime SDP exchange failed (${response.status}): ${detail || "no response detail"}`);
            }
            return response.text();
          },
          onEvent: onReceipt
        });
        const opaqueSession = {
          verify(token) {
            if (!token) throw new Error("A signed-in Nexus session is required.");
            return Object.freeze({ authenticated: true });
          }
        };
        const foundation = new NexusVoiceFoundation({
          sessionAuthority: opaqueSession,
          machine,
          microphone,
          realtime
        });
        const runtime = new NexusBrowserRuntime({
          foundation,
          realtime,
          audioElement: audio,
          openWorkspace: createWorkspaceAdapter(),
          onReceipt
        });
        orb.addEventListener("click", async () => {
          if (runtime.started) {
            runtime.stop("user-stop");
            orb.setAttribute("aria-pressed", "false");
            status.textContent = "Speak";
            return;
          }
          orb.disabled = true;
          try {
            await runtime.start({ sessionToken, userGesture: true });
            orb.setAttribute("aria-pressed", "true");
          } catch (error) {
            status.textContent = "Voice connection unavailable";
            onReceipt({
              schema: "nexus.runtime.receipt.v1",
              type: "runtime.start-failed",
              detail: { name: error.name, message: error.message },
              at: (/* @__PURE__ */ new Date()).toISOString()
            });
          } finally {
            orb.disabled = false;
          }
        });
        window.NexusCleanRuntime = Object.freeze({
          start: () => runtime.start({ sessionToken, userGesture: true }),
          stop: (reason) => runtime.stop(reason),
          route: (command) => runtime.route(command),
          snapshot: () => Object.freeze({ state: machine.snapshot(), receipts: [...receipts] })
        });
      }
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", boot, { once: true });
      } else {
        boot();
      }
      module.exports = { createWorkspaceAdapter, statusFromReceipt };
    }
  });
  require_nexus_clean_entry();
})();
