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

  // rebuild/nexus-core/intent-parameter-extractor.js
  var require_intent_parameter_extractor = __commonJS({
    "rebuild/nexus-core/intent-parameter-extractor.js"(exports, module) {
      "use strict";
      var WORKFLOW_RULES = Object.freeze([
        ["maps", /\b(map|maps|route|directions|navigate|location|take me(?: back)? to|go(?: back)? to|zoom (?:in|out) to)\b/i],
        ["reminders", /\b(remind|reminder)\b/i],
        ["health", /\b(health|blood pressure|diabetes|hypertension|weight|medicine)\b/i],
        ["telehealth", /\b(telehealth|doctor|clinician|video visit)\b/i],
        ["mobile-clinic", /\b(mobile clinic|clinic visit)\b/i],
        ["pharmacy", /\b(pharmacy|pharmacist|prescription|medication support)\b/i],
        ["offline", /\b(offline|sync|queue)\b/i],
        ["workforce", /(?:\b(job|jobs|work|career|employment|resume|cv)\b|résumé)/i],
        ["marketplace", /\b(sell|buy|buyer|market|marketplace|trade)\b/i],
        ["learning", /\b(learn|learning|lesson|course|literacy|training)\b/i],
        ["agriculture", /\b(agriculture|agricultural|farm|farmer|crop|maize|soil|weather for my field)\b/i],
        ["music", /\b(play|music|song|songs)\b/i],
        ["live-knowledge", /\b(search the (web|internet)|look up|latest|current news|live knowledge|approved source|weather|forecast|pilot evidence|evidence dashboard|implementation report|learning brief|scale-up options|(show|display) (me )?(the )?(approved )?(source|sources|reference|references|evidence|link|links|website|websites|resource|resources)|open (the )?(source|reference|link|website)|cite|citation)\b/i]
      ]);
      function cleanText(value) {
        return String(value || "").replace(/\s+/g, " ").replace(/^[\s,;:.-]+|[\s,;:?.!-]+$/g, "").trim();
      }
      function stripConversationFrame(value) {
        let text = cleanText(value).replace(/^(?:hey\s+|hello\s+|good\s+(?:morning|afternoon|evening)[\s,]+)?nexus\b[\s,;:.-]*/i, "").replace(/^(?:(?:please|kindly)[\s,]+|(?:could|can|would|will)\s+you\s+)/i, "").replace(/^(?:i(?:'d|\s+would)?\s+like\s+(?:you\s+)?to|i\s+want\s+(?:you\s+)?to|help\s+me\s+to?)\s+/i, "");
        return cleanText(text.replace(/\s+(?:please|for me)$/i, ""));
      }
      function providerCardRequest(text) {
        return /\b(card|summary)\b.*\b(doctor|physician|provider|pharmacist)\b/i.test(text) || /\b(doctor|physician|provider|pharmacist)\b.*\b(card|summary)\b/i.test(text);
      }
      function detectWorkflow(text) {
        if (providerCardRequest(text)) return "health";
        if (/\bweather for my field\b/i.test(text)) return "agriculture";
        const liveKnowledgeRule = WORKFLOW_RULES.find(([workflow]) => workflow === "live-knowledge");
        if (liveKnowledgeRule[1].test(text)) return "live-knowledge";
        const match = WORKFLOW_RULES.find(([, pattern]) => pattern.test(text));
        return match ? match[0] : null;
      }
      function locationAfterPreposition(text) {
        const match = /\b(?:in|near|around|for|at)\s+([a-z][a-z .'-]*(?:,\s*[a-z][a-z .'-]*)?)$/i.exec(text);
        return cleanText(match && match[1]);
      }
      function extractBloodPressure(text) {
        const match = /\b(\d{2,3})\s*(?:over|\/)\s*(\d{2,3})\b/i.exec(text);
        return match ? Object.freeze({ systolic: Number(match[1]), diastolic: Number(match[2]) }) : null;
      }
      function extractMarketplace(text) {
        const action = /\b(sell|buy)\b/i.exec(text);
        const quantity = /\b(\d+(?:\.\d+)?)\s+(bags?|sacks?|kg|kilograms?|tons?|crates?|units?)\s+of\s+([a-z][a-z -]*?)(?=\s+(?:in|near|at)\b|$)/i.exec(text);
        return {
          action: action ? action[1].toLowerCase() : "open",
          quantity: quantity ? Number(quantity[1]) : null,
          unit: quantity ? quantity[2].toLowerCase() : null,
          product: quantity ? cleanText(quantity[3]) : null,
          location: locationAfterPreposition(text) || null
        };
      }
      function extractReminder(text) {
        const timing = /\b(today|tonight|tomorrow(?:\s+(?:morning|afternoon|evening))?|(?:on\s+)?(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)|at\s+\d{1,2}(?::\d{2})?\s*(?:am|pm)?)\b/i.exec(text);
        const task = cleanText(text.replace(/^(?:set|create|add)?\s*(?:a\s+)?reminder\s+(?:for\s+me\s+)?(?:to\s+)?/i, "").replace(/^remind\s+me\s+/i, "").replace(/\b(today|tonight|tomorrow(?:\s+(?:morning|afternoon|evening))?|(?:on\s+)?(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)|at\s+\d{1,2}(?::\d{2})?\s*(?:am|pm)?)\b/ig, ""));
        return { action: "create", task: task || null, timing: timing ? cleanText(timing[1]) : null };
      }
      function extractMusicQuery(text) {
        return cleanText(text.replace(/^(?:play|open|start|put\s+on)\s+/i, "").replace(/\b(?:music|media|songs?)\b/ig, " ")) || "Kenyan";
      }
      var MAP_ACTION_PATTERN = [
        "show",
        "display",
        "open(?:\\s+up)?",
        "view",
        "see",
        "find",
        "locate",
        "pull\\s+up",
        "bring\\s+up",
        "take\\s+me\\s+(?:back\\s+)?to",
        "go\\s+(?:back\\s+)?to",
        "move\\s+to",
        "zoom\\s+(?:(?:in|out)\\s+)?to"
      ].join("|");
      function extractMapParameters(text) {
        const route = /\b(?:route|directions|navigate|travel)\b.*?\bfrom\s+(.+?)\s+\bto\s+(.+?)(?:[?.!]|$)/i.exec(text) || /\bfrom\s+(.+?)\s+\bto\s+(.+?)(?:[?.!]|$)/i.exec(text);
        if (route) {
          return {
            action: "route",
            origin: cleanText(route[1]),
            destination: cleanText(route[2])
          };
        }
        let place = cleanText(text).replace(/^(?:reset|refresh|clear)\s+(?:the\s+)?maps?(?:\s+and\s+|\s+to\s+)?/i, "");
        const actionPrefix = new RegExp(
          `^(?:${MAP_ACTION_PATTERN})\\s+(?:me\\s+)?(?:(?:a|the)\\s+)?(?:city\\s+of\\s+)?(?:maps?\\s+(?:of|for|to)\\s+)?`,
          "i"
        );
        place = cleanText(place.replace(actionPrefix, "").replace(new RegExp(
          `^(?:to\\s+)?(?:${MAP_ACTION_PATTERN})\\s+(?:me\\s+)?(?:all|the\\s+whole|whole)?\\s*(?:of\\s+)?`,
          "i"
        ), "").replace(/^(?:to\s+)?(?:see|view|show|display)\s+(?:me\s+)?(?:all|the\s+whole|whole)\s+(?:of\s+)?/i, "").replace(/^(?:all|the\s+whole|whole)\s+(?:of\s+)?/i, "").replace(/^(?:me\s+)?(?:a|the)\s+maps?\s+(?:of|for|to)\s+/i, "").replace(/\s+(?:on|in)\s+(?:the\s+)?maps?$/i, "").replace(/\s+(?:map|maps)$/i, ""));
        return { action: "show-place", place: place || null };
      }
      function extractParameters(workflow, text) {
        const location = locationAfterPreposition(text) || null;
        if (workflow === "health") {
          return { action: providerCardRequest(text) ? "provider-card" : /\brecord\b/i.test(text) ? "record-reading" : "open", bloodPressure: extractBloodPressure(text) };
        }
        if (workflow === "marketplace") return extractMarketplace(text);
        if (workflow === "reminders") return extractReminder(text);
        if (workflow === "music") return { action: "play", query: extractMusicQuery(text) };
        if (workflow === "workforce") {
          return { action: /(?:\b(resume|cv)\b|résumé)/i.test(text) ? "resume" : "search-jobs", query: /\b(farming|agricultural|technology|healthcare)\b/i.exec(text)?.[1] || null, location };
        }
        if (workflow === "live-knowledge") {
          return { action: /\b(weather|forecast)\b/i.test(text) ? "weather" : /\b(pilot evidence|evidence dashboard)\b/i.test(text) ? "pilot-dashboard" : /\b(websites?|sources?|references?|links?|resources?)\b/i.test(text) ? "source-directory" : "research", location, topic: cleanText(text) };
        }
        if (workflow === "agriculture") {
          return { action: /\b(picture|pictures|image|images|photo|photos)\b/i.test(text) ? "images" : "support", crop: /\b(maize|corn|wheat|rice|coffee|tea)\b/i.exec(text)?.[1]?.toLowerCase() || null, location };
        }
        if (workflow === "maps") return extractMapParameters(text);
        return { action: "open", location };
      }
      function extractIntentAndParameters(command) {
        const original = String(command || "").trim();
        const utterance = stripConversationFrame(original);
        const workflow = detectWorkflow(utterance);
        return Object.freeze({
          original,
          utterance,
          workflow,
          parameters: Object.freeze(workflow ? extractParameters(workflow, utterance) : {})
        });
      }
      module.exports = {
        WORKFLOW_RULES,
        cleanText,
        stripConversationFrame,
        extractParameters,
        extractMapParameters,
        extractIntentAndParameters
      };
    }
  });

  // rebuild/nexus-core/conversation-context.js
  var require_conversation_context = __commonJS({
    "rebuild/nexus-core/conversation-context.js"(exports, module) {
      "use strict";
      var CONTEXTUAL_CUES = /\b(?:again|also|instead|next|previous|same|that|those|them|there|it|all of|whole of|go back|take me back|zoom|change|update|replace|make it|show me|open it|use that|use the|what about|how about|and then|now|tell me more|continue)\b/i;
      var REFERENTIAL_CUES = /\b(?:again|instead|previous|same|that|those|them|there|it|what about|how about|use that|use the same)\b/i;
      function cloneParameters(value = {}) {
        return Object.freeze({ ...value });
      }
      function createConversationContext() {
        return Object.freeze({
          activeWorkspace: null,
          parameters: Object.freeze({}),
          visual: null,
          utterance: null,
          transactionId: null,
          turn: 0
        });
      }
      function isContextualFollowUp(utterance, context) {
        if (!context || !context.activeWorkspace) return false;
        const text = String(utterance || "").trim();
        if (!text) return false;
        if (CONTEXTUAL_CUES.test(text)) return true;
        if (/^(?:why|when|where|who|which|how|what)\b/i.test(text)) return true;
        if (context.activeWorkspace === "maps") {
          return /^(?:to\s+)?(?:see|view|show|display|find|locate|move|zoom)\b/i.test(text);
        }
        return false;
      }
      function hasReferentialCue(utterance) {
        return REFERENTIAL_CUES.test(String(utterance || ""));
      }
      function normalizeContextualUtterance(utterance) {
        return String(utterance || "").trim().replace(/^(?:and\s+then|and|then|now|next)\b[\s,;:.-]*/i, "").replace(/^(?:what|how)\s+about\b[\s,;:.-]*/i, "").replace(/^(?:change|update|replace|make)\s+(?:it|that)\s+(?:to|with|as)?\s*/i, "").replace(/^use\s+(?:that|this|the\s+same)\s*(?:but|with|for)?\s*/i, "").trim();
      }
      function mergeContextParameters(previous = {}, current = {}) {
        const merged = { ...previous };
        for (const [key, value] of Object.entries(current)) {
          if (key === "action" && ["open", "research", "support", "search-jobs"].includes(value) && previous.action && previous.action !== value) continue;
          if (value !== null && value !== void 0 && value !== "") merged[key] = value;
        }
        return Object.freeze(merged);
      }
      function rememberCompletedTurn(context, resolution) {
        return Object.freeze({
          activeWorkspace: resolution.workspace,
          parameters: cloneParameters(resolution.parameters),
          visual: resolution.acknowledgement && resolution.acknowledgement.visualContext || null,
          utterance: resolution.utterance,
          transactionId: resolution.transactionId || null,
          turn: Number(context && context.turn || 0) + 1
        });
      }
      function clearConversationContext() {
        return createConversationContext();
      }
      module.exports = {
        clearConversationContext,
        createConversationContext,
        hasReferentialCue,
        isContextualFollowUp,
        mergeContextParameters,
        normalizeContextualUtterance,
        rememberCompletedTurn
      };
    }
  });

  // rebuild/nexus-core/visual-context.js
  var require_visual_context = __commonJS({
    "rebuild/nexus-core/visual-context.js"(exports, module) {
      "use strict";
      var VISUAL_REFERENCE_CUES = /\b(?:this|that|these|those|it|one|ones|item|result|card|list|map|marker|route|image|picture|link|source|website|screen|page|view|chart|reading|document|section|course|job|listing|reminder|queue|track|first|second|third|fourth|fifth|last|previous|next)\b/i;
      var VISUAL_QUESTION_CUES = /^(?:what|why|where|which|who|how|can|could|would|does|do|is|are)\b/i;
      var VISUAL_ACTION_CUES = /\b(?:show|tell|open|close|expand|collapse|zoom|move|pan|return|back|next|previous|compare|explain|read|select|choose|use|change|update|replace|remove|print|share|save|play|pause)\b/i;
      function compactText(value, limit = 180) {
        return String(value || "").replace(/\s+/g, " ").trim().slice(0, limit);
      }
      function freezeArray(values = []) {
        return Object.freeze(values.filter(Boolean).map((value) => compactText(value)).filter(Boolean).slice(0, 12));
      }
      function createVisualContext({
        workspace = null,
        outcomeKind = null,
        surfaceId = null,
        summary = null,
        items = [],
        selectedItem = null,
        viewport = null,
        sourceIds = [],
        availableActions = []
      } = {}) {
        return Object.freeze({
          workspace,
          outcomeKind,
          surfaceId,
          summary: compactText(summary) || null,
          items: freezeArray(items),
          selectedItem: compactText(selectedItem) || null,
          viewport: viewport && typeof viewport === "object" ? Object.freeze({ ...viewport }) : null,
          sourceIds: freezeArray(sourceIds),
          availableActions: freezeArray(availableActions)
        });
      }
      function isVisualFollowUp(utterance, context) {
        if (!context || !context.visual || !context.visual.surfaceId) return false;
        const text = compactText(utterance);
        if (!text) return false;
        return VISUAL_REFERENCE_CUES.test(text) && (VISUAL_QUESTION_CUES.test(text) || VISUAL_ACTION_CUES.test(text));
      }
      function describeVisualReference(utterance, visual) {
        if (!visual) return null;
        const text = compactText(utterance);
        const ordinal = /\b(first|second|third|fourth|fifth|last|previous)\b/i.exec(text)?.[1]?.toLowerCase() || null;
        const action = VISUAL_ACTION_CUES.exec(text)?.[1]?.toLowerCase() || (VISUAL_QUESTION_CUES.test(text) ? "explain" : "inspect");
        return Object.freeze({
          action,
          ordinal,
          surfaceId: visual.surfaceId,
          outcomeKind: visual.outcomeKind,
          selectedItem: visual.selectedItem,
          visibleItems: visual.items
        });
      }
      module.exports = {
        createVisualContext,
        describeVisualReference,
        isVisualFollowUp
      };
    }
  });

  // rebuild/nexus-core/router.js
  var require_router = __commonJS({
    "rebuild/nexus-core/router.js"(exports, module) {
      "use strict";
      var {
        WORKFLOW_RULES: ROUTES,
        extractIntentAndParameters,
        extractParameters
      } = require_intent_parameter_extractor();
      var {
        hasReferentialCue,
        isContextualFollowUp,
        mergeContextParameters,
        normalizeContextualUtterance
      } = require_conversation_context();
      var {
        describeVisualReference,
        isVisualFollowUp
      } = require_visual_context();
      function routeCommand(command, connectionState, context = null) {
        if (connectionState !== "connected") {
          return Object.freeze({
            accepted: false,
            code: "realtime-not-connected",
            workspace: null
          });
        }
        const resolution = extractIntentAndParameters(command);
        const visualFollowUp = isVisualFollowUp(resolution.utterance, context);
        const contextual = (visualFollowUp || isContextualFollowUp(resolution.utterance, context)) && (!resolution.workflow || resolution.workflow === context.activeWorkspace || hasReferentialCue(resolution.utterance));
        const match = contextual ? context.activeWorkspace : resolution.workflow || (isInternetAnswerQuestion(resolution.utterance) ? "live-knowledge" : null);
        const contextualUtterance = contextual ? normalizeContextualUtterance(resolution.utterance) : resolution.utterance;
        const extracted = contextual ? extractParameters(match, contextualUtterance) : resolution.parameters;
        const parameters = contextual ? mergeContextParameters(context.parameters, extracted) : resolution.parameters;
        return Object.freeze({
          accepted: Boolean(match),
          code: match ? "workspace-route-resolved" : "conversation",
          workspace: match,
          command: resolution.original,
          utterance: resolution.utterance,
          parameters,
          contextual,
          visualFollowUp,
          visualContext: contextual ? context.visual || null : null,
          visualReference: visualFollowUp ? describeVisualReference(resolution.utterance, context.visual) : null,
          previousTransactionId: contextual ? context.transactionId || null : null
        });
      }
      function isInternetAnswerQuestion(command) {
        const text = String(command || "").trim();
        if (!text || /^(?:hello|hi|hey|good (?:morning|afternoon|evening)|thanks?|thank you)\b/i.test(text)) {
          return false;
        }
        return /^(?:how|what|why|when|where|who|which)\b/i.test(text) || /^(?:tell me about|explain|show me how|teach me how|walk me through)\b/i.test(text);
      }
      module.exports = { ROUTES, isInternetAnswerQuestion, routeCommand };
    }
  });

  // rebuild/nexus-core/experience-profile.js
  var require_experience_profile = __commonJS({
    "rebuild/nexus-core/experience-profile.js"(exports, module) {
      "use strict";
      var SUPPORTED_LANGUAGES = Object.freeze(["en", "es", "fr", "sw", "ar", "pt"]);
      var WAKE_PHRASES = Object.freeze(["nexus", "hello nexus", "hey nexus"]);
      var DEFAULT_EXPERIENCE_PREFERENCES = Object.freeze({
        voice: "marin",
        voiceIdentity: "british-female",
        pace: "natural",
        volume: 1,
        captions: true,
        language: "auto"
      });
      function normalizeExperiencePreferences(value = {}) {
        const pace = value.pace === "slow" ? "slow" : "natural";
        const language = value.language === "auto" || SUPPORTED_LANGUAGES.includes(value.language) ? value.language : "auto";
        const volume = Number.isFinite(Number(value.volume)) ? Math.min(1, Math.max(0, Number(value.volume))) : DEFAULT_EXPERIENCE_PREFERENCES.volume;
        return Object.freeze({
          ...DEFAULT_EXPERIENCE_PREFERENCES,
          pace,
          volume,
          captions: value.captions !== false,
          language
        });
      }
      function createPresenceInstructions(preferences = DEFAULT_EXPERIENCE_PREFERENCES) {
        const resolved = normalizeExperiencePreferences(preferences);
        const pace = resolved.pace === "slow" ? "Speak deliberately and about fifteen percent slower than normal." : "Speak at a calm, natural pace.";
        const language = resolved.language === "auto" ? "Automatically answer in the user's current language: English, Spanish, French, Swahili, Arabic, or Portuguese, while preserving the active task." : `Answer in the user's selected language code ${resolved.language} while preserving the active task.`;
        return [
          "You are Nexus Genesis, a warm, capable voice-first assistant.",
          "Your voice identity is a natural British woman: warm, calm, professional, and consistent.",
          pace,
          language,
          "Recognize Nexus, Hello Nexus, and Hey Nexus as direct wake phrases and respond naturally.",
          "Greet the signed-in user with exactly: Hello Ron, how can I help?",
          "For every Nexus application request, call route_nexus_command exactly once with the user's complete command.",
          "Application requests include asking to help, open, start, record, find, search, plan, play, sell, show, or remind through a Nexus capability.",
          "When a Nexus form is visible, follow-up requests to add, change, correct, read, review, save, reopen, restore, submit, or confirm are handled by the visible form controller from the final transcript; do not call route_nexus_command for those form follow-ups.",
          "Do not answer an application request conversationally before calling route_nexus_command.",
          "You can display real maps, approved-source evidence, clickable web links, and resource websites inside the Nexus visual workspace.",
          "When the user asks to show a source, reference, link, website, resource, proof, or other visual result, call route_nexus_command with the complete request; never say that you cannot display links or websites.",
          "For a follow-up such as show me the link, show the reference, or open the source, use the active visible research receipt instead of starting an unrelated search.",
          "After a visible workspace receipt, speak a brief truthful confirmation.",
          "Never claim that an external action completed without a verified receipt.",
          "Health guidance must preserve consent, safety, and emergency escalation."
        ].join(" ");
      }
      function detectWakePhrase(transcript) {
        const normalized = String(transcript || "").trim().toLowerCase();
        return WAKE_PHRASES.find((phrase) => normalized === phrase || new RegExp(`^${phrase.replace(" ", "\\s+")}(?:[\\s,.!?;:]|$)`).test(normalized)) || null;
      }
      module.exports = {
        DEFAULT_EXPERIENCE_PREFERENCES,
        SUPPORTED_LANGUAGES,
        WAKE_PHRASES,
        normalizeExperiencePreferences,
        createPresenceInstructions,
        detectWakePhrase
      };
    }
  });

  // rebuild/nexus-core/latency-profile.js
  var require_latency_profile = __commonJS({
    "rebuild/nexus-core/latency-profile.js"(exports, module) {
      "use strict";
      var NEXUS_VOICE_LATENCY_PROFILE = Object.freeze({
        turnDetection: Object.freeze({
          type: "server_vad",
          threshold: 0.5,
          prefix_padding_ms: 300,
          silence_duration_ms: 350,
          create_response: true,
          interrupt_response: true
        }),
        responseFallbackMs: 650
      });
      module.exports = { NEXUS_VOICE_LATENCY_PROFILE };
    }
  });

  // rebuild/nexus-core/request-transaction.js
  var require_request_transaction = __commonJS({
    "rebuild/nexus-core/request-transaction.js"(exports, module) {
      "use strict";
      var WORKFLOW_CONTRACTS = Object.freeze({
        maps: Object.freeze({
          required(parameters) {
            return parameters.action === "route" ? ["origin", "destination"] : ["place"];
          },
          outcomes: ["map", "map-fallback"]
        }),
        reminders: Object.freeze({ required: () => ["task"], outcomes: ["application"] }),
        marketplace: Object.freeze({
          required: (parameters) => ["sell", "buy"].includes(parameters.action) ? ["quantity", "unit", "product"] : [],
          outcomes: ["application"]
        }),
        health: Object.freeze({
          required: () => [],
          outcomes: ["application", "provider-card"]
        }),
        "live-knowledge": Object.freeze({
          required: (parameters) => parameters.action === "weather" ? ["location"] : [],
          outcomes: ["evidence", "weather", "pilot-dashboard", "source-directory"]
        }),
        agriculture: Object.freeze({ required: () => [], outcomes: ["application", "agriculture-images"] }),
        workforce: Object.freeze({ required: () => [], outcomes: ["application", "resume"] }),
        music: Object.freeze({ required: () => ["query"], outcomes: ["music"] }),
        telehealth: Object.freeze({ required: () => [], outcomes: ["application"] }),
        "mobile-clinic": Object.freeze({ required: () => [], outcomes: ["application"] }),
        pharmacy: Object.freeze({ required: () => [], outcomes: ["application"] }),
        learning: Object.freeze({ required: () => [], outcomes: ["application"] }),
        offline: Object.freeze({ required: () => [], outcomes: ["application"] })
      });
      function present(value) {
        if (value === null || value === void 0 || value === "") return false;
        if (typeof value === "object") return Object.keys(value).length > 0;
        return true;
      }
      function validateResolution(resolution) {
        const contract = WORKFLOW_CONTRACTS[resolution.workspace];
        if (!contract) return Object.freeze({ valid: false, code: "unknown-workflow", missing: [] });
        const parameters = resolution.parameters || {};
        const missing = contract.required(parameters).filter((key) => !present(parameters[key]));
        return Object.freeze({
          valid: missing.length === 0,
          code: missing.length ? "missing-required-parameters" : "validated",
          missing
        });
      }
      function verifyAcknowledgement(resolution, acknowledgement) {
        const contract = WORKFLOW_CONTRACTS[resolution.workspace];
        const outcomeKind = String(acknowledgement && acknowledgement.outcomeKind || "");
        const validOutcome = Boolean(contract && contract.outcomes.includes(outcomeKind));
        const verified = Boolean(
          acknowledgement && acknowledgement.visible === true && acknowledgement.populated === true && acknowledgement.outcomeVerified === true && validOutcome
        );
        return Object.freeze({
          verified,
          code: verified ? "visible-outcome-verified" : "visible-outcome-unverified",
          outcomeKind: outcomeKind || null,
          recovery: acknowledgement && acknowledgement.recovery || null
        });
      }
      var NexusRequestTransaction = class {
        constructor({ execute, onStage = () => {
        } } = {}) {
          if (typeof execute !== "function") throw new Error("A workflow executor is required.");
          this.execute = execute;
          this.onStage = onStage;
        }
        async run(resolution) {
          const transactionId = `nexus-${Date.now()}-${Math.random().toString(16).slice(2)}`;
          const validation = validateResolution(resolution);
          this.onStage("request.validated", { transactionId, workspace: resolution.workspace, ...validation });
          if (!validation.valid) {
            const error = new Error(`Nexus needs ${validation.missing.join(" and ")} before opening ${resolution.workspace}.`);
            error.code = validation.code;
            error.transactionId = transactionId;
            throw error;
          }
          this.onStage("request.executing", { transactionId, workspace: resolution.workspace });
          const acknowledgement = await this.execute({ ...resolution, transactionId });
          const outcome = verifyAcknowledgement(resolution, acknowledgement);
          this.onStage("request.outcome", { transactionId, workspace: resolution.workspace, ...outcome });
          if (!outcome.verified) {
            const error = new Error(`Nexus could not verify the requested ${resolution.workspace} result.`);
            error.code = outcome.code;
            error.transactionId = transactionId;
            error.recovery = outcome.recovery;
            throw error;
          }
          return Object.freeze({ ...resolution, transactionId, acknowledgement, outcome });
        }
      };
      module.exports = {
        WORKFLOW_CONTRACTS,
        validateResolution,
        verifyAcknowledgement,
        NexusRequestTransaction
      };
    }
  });

  // rebuild/nexus-core/browser-runtime.js
  var require_browser_runtime = __commonJS({
    "rebuild/nexus-core/browser-runtime.js"(exports, module) {
      "use strict";
      var { routeCommand } = require_router();
      var {
        DEFAULT_EXPERIENCE_PREFERENCES,
        createPresenceInstructions,
        detectWakePhrase,
        normalizeExperiencePreferences
      } = require_experience_profile();
      var { NEXUS_VOICE_LATENCY_PROFILE } = require_latency_profile();
      var { NexusRequestTransaction } = require_request_transaction();
      var {
        clearConversationContext,
        createConversationContext,
        rememberCompletedTurn
      } = require_conversation_context();
      var DEFAULT_INSTRUCTIONS = createPresenceInstructions(DEFAULT_EXPERIENCE_PREFERENCES);
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
          this.completedResponseKeys = /* @__PURE__ */ new Set();
          this.visualRoutes = /* @__PURE__ */ new Map();
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
              instructions: `Read the following visible Nexus content once, faithfully and clearly. Do not add information:

${content}`
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
            return this.route(args.command, event.call_id);
          }
          if (event.type === "conversation.item.input_audio_transcription.completed") {
            const transcript = event.transcript || "";
            this.receipt("transcript.final", { transcript });
            const wakePhrase = detectWakePhrase(transcript);
            if (wakePhrase) this.receipt("conversation.wake-phrase", { phrase: wakePhrase });
            const resolution = routeCommand(
              transcript,
              this.foundation.machine.snapshot().state,
              this.conversationContext
            );
            if (resolution.accepted) {
              this.route(transcript).catch((error) => {
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
                ...responseId ? { response_id: responseId } : {}
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
          if (event.type === "response.output_audio.done" || event.type === "response.audio.done" || event.type === "response.done") {
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
            this.receipt("realtime.error", {
              code: detail.code || "unknown",
              message: detail.message || "Realtime voice request failed."
            });
          }
          return null;
        }
        async route(command, callId = null) {
          const state = this.foundation.machine.snapshot().state;
          const resolution = routeCommand(command, state, this.conversationContext);
          let result = resolution;
          if (resolution.accepted) {
            const routeKey = resolution.command.toLocaleLowerCase().replace(/\s+/g, " ").trim();
            let visualRoute = this.visualRoutes.get(routeKey);
            if (!visualRoute) {
              visualRoute = this.requestTransaction.run(resolution).then((routed) => {
                const acknowledgement = routed.acknowledgement;
                this.receipt("workspace.visible", {
                  workspace: resolution.workspace,
                  transactionId: routed.transactionId,
                  acknowledgementId: acknowledgement.id || null,
                  outcomeKind: acknowledgement.outcomeKind || null,
                  outcomeVerified: acknowledgement.outcomeVerified === true,
                  evidenceReceiptId: acknowledgement.evidenceReceiptId || null,
                  evidenceStatus: acknowledgement.evidenceStatus || null,
                  evidenceSourceCount: acknowledgement.evidenceSourceCount || 0,
                  evidenceLinksVisible: acknowledgement.evidenceLinksVisible === true
                });
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
                }, 15e3);
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
        stop(reason = "user-stop") {
          this.clearResponseFallback();
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
          this.completedResponseKeys.clear();
          this.visualRoutes.clear();
          this.conversationContext = clearConversationContext();
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

  // rebuild/nexus-core/guided-entry-schemas.js
  var require_guided_entry_schemas = __commonJS({
    "rebuild/nexus-core/guided-entry-schemas.js"(exports, module) {
      "use strict";
      var SCHEMA_VERSION = 1;
      function schema(processId, options) {
        return Object.freeze({
          processId,
          version: SCHEMA_VERSION,
          sensitivity: "standard",
          confirmationRequired: true,
          ...options,
          fields: Object.freeze((options.fields || []).map((field) => Object.freeze(field)))
        });
      }
      var PROCESS_SCHEMAS = Object.freeze({
        agriculture: schema("agriculture", {
          fields: [
            { key: "subject", aliases: ["crop", "livestock", "product"] },
            { key: "location", aliases: ["location", "city", "region"] },
            { key: "observation", aliases: ["observation", "what are you seeing", "symptoms", "notes"] }
          ]
        }),
        health: schema("health", {
          sensitivity: "health",
          fields: [
            { key: "reading", aliases: ["blood pressure", "reading", "glucose", "weight"] },
            { key: "measuredAt", aliases: ["when measured", "date", "time"] },
            { key: "symptoms", aliases: ["symptom", "symptoms", "notes", "comments"] }
          ]
        }),
        telehealth: schema("telehealth", {
          sensitivity: "health",
          fields: [
            { key: "reason", aliases: ["reason for visit", "reason", "care needed"] },
            { key: "preferredDate", aliases: ["preferred date", "date", "appointment date"] },
            { key: "provider", aliases: ["provider", "care provider", "doctor"] }
          ]
        }),
        "mobile-clinic": schema("mobile-clinic", {
          sensitivity: "health",
          fields: [
            { key: "location", aliases: ["location", "city", "region"] },
            { key: "careNeeded", aliases: ["care needed", "reason", "service"] },
            { key: "travelDistance", aliases: ["travel distance", "distance"] }
          ]
        }),
        pharmacy: schema("pharmacy", {
          sensitivity: "health",
          fields: [
            { key: "medication", aliases: ["medication", "medicine", "drug"] },
            { key: "requestType", aliases: ["request type", "request", "question"] },
            { key: "pharmacy", aliases: ["pharmacy", "location"] }
          ]
        }),
        learning: schema("learning", {
          fields: [
            { key: "topic", aliases: ["topic", "skill", "question", "lesson"] },
            { key: "level", aliases: ["learning level", "level"] },
            { key: "language", aliases: ["language"] }
          ]
        }),
        workforce: schema("workforce", {
          fields: [
            { key: "name", aliases: ["name", "full name"] },
            { key: "role", aliases: ["role", "target role", "job"] },
            { key: "experience", aliases: ["experience", "work experience", "employment history"] },
            { key: "skills", aliases: ["skill", "skills"] },
            { key: "location", aliases: ["location", "city", "region"] },
            { key: "preference", aliases: ["work preference", "preference"] }
          ]
        }),
        marketplace: schema("marketplace", {
          fields: [
            { key: "product", aliases: ["product", "crop", "item"] },
            { key: "quantity", aliases: ["quantity", "amount"] },
            { key: "location", aliases: ["location", "city", "region"] }
          ]
        }),
        reminders: schema("reminders", {
          fields: [
            { key: "reminder", aliases: ["reminder", "task"] },
            { key: "time", aliases: ["time", "date", "when"] },
            { key: "repeat", aliases: ["repeat", "schedule"] }
          ]
        })
      });
      function normalizeProcessId(value) {
        const normalized = String(value || "current-form").trim().toLowerCase();
        if (normalized.includes(":")) return normalized.split(":")[0];
        return normalized;
      }
      function getProcessSchema(processId, visibleFields = []) {
        const normalized = normalizeProcessId(processId);
        const registered = PROCESS_SCHEMAS[normalized];
        if (registered) return registered;
        return schema(normalized, {
          fields: visibleFields.map((field) => ({
            key: field.key,
            aliases: [field.label || field.key]
          }))
        });
      }
      module.exports = {
        PROCESS_SCHEMAS,
        SCHEMA_VERSION,
        getProcessSchema,
        normalizeProcessId
      };
    }
  });

  // rebuild/nexus-core/guided-entry-transcript-normalizer.js
  var require_guided_entry_transcript_normalizer = __commonJS({
    "rebuild/nexus-core/guided-entry-transcript-normalizer.js"(exports, module) {
      "use strict";
      function clean(value) {
        return String(value || "").normalize("NFKC").replace(/[“”]/g, '"').replace(/[’]/g, "'").replace(/\s+/g, " ").trim();
      }
      function escapeExpression(value) {
        return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function fieldAliases(fields, schema) {
        const aliases = [];
        for (const field of fields || []) {
          const definition = (schema?.fields || []).find((item) => item.key === field.key) || (schema?.fields || []).find((item) => clean(field.label).toLowerCase().includes(clean(item.key).toLowerCase()));
          for (const alias of [field.key, field.label, ...definition?.aliases || []]) {
            const normalized = clean(alias).toLowerCase();
            if (normalized && !aliases.includes(normalized)) aliases.push(normalized);
          }
        }
        return aliases.sort((left, right) => right.length - left.length);
      }
      function namesKnownField(command, aliases) {
        return aliases.some((alias) => new RegExp(`(?:^|\\b)${escapeExpression(alias)}(?:\\b|$)`, "i").test(command));
      }
      function normalizeGuidedEntryTranscript(command, { fields = [], schema = null } = {}) {
        const original = clean(command);
        if (!original) return Object.freeze({ original, normalized: "", changed: false, rules: Object.freeze([]) });
        const aliases = fieldAliases(fields, schema);
        const wake = original.match(
          /^(?:(hey|hello)\s*[,;:!?.-]*\s*)?(nexus|next(?:\s+(?:us|is))?)\b[\s,;:!?.-]*/i
        );
        if (!wake) return Object.freeze({ original, normalized: original, changed: false, rules: Object.freeze([]) });
        let remainder = clean(original.slice(wake[0].length));
        const rules = [];
        const recognizedWake = /^nexus$/i.test(wake[2]);
        if (/^ed\b/i.test(remainder) && namesKnownField(remainder, aliases)) {
          remainder = remainder.replace(/^ed\b/i, "add");
          rules.push("leading-action-ed-to-add");
        }
        const beginsGuidedAction = /^(?:add|append|enter|record|put|set|change|replace|correct|undo|revert|read|review|repeat|save|store|keep|reopen|restore|load|continue|submit|send|share|apply|publish|confirm|approve|cancel)\b/i.test(remainder);
        if (!recognizedWake && (!beginsGuidedAction || !namesKnownField(remainder, aliases))) {
          return Object.freeze({ original, normalized: original, changed: false, rules: Object.freeze([]) });
        }
        if (!recognizedWake) rules.unshift("wake-alias-to-nexus");
        if (wake[0] !== "Nexus ") rules.push("wake-boundary-canonicalized");
        const normalized = clean(`Nexus ${remainder}`);
        return Object.freeze({
          original,
          normalized,
          changed: normalized !== original,
          rules: Object.freeze(rules)
        });
      }
      module.exports = {
        normalizeGuidedEntryTranscript
      };
    }
  });

  // rebuild/nexus-core/universal-guided-entry-engine.js
  var require_universal_guided_entry_engine = __commonJS({
    "rebuild/nexus-core/universal-guided-entry-engine.js"(exports, module) {
      "use strict";
      var { getProcessSchema, normalizeProcessId } = require_guided_entry_schemas();
      var { normalizeGuidedEntryTranscript } = require_guided_entry_transcript_normalizer();
      var STORE_KEY = "nexus.guided-entry.drafts.v1";
      var LEGACY_STORE_KEY = "nexus.clean.voice-form-drafts.v1";
      function clean(value) {
        return String(value || "").replace(/[“”]/g, '"').replace(/[’]/g, "'").replace(/\s+/g, " ").trim();
      }
      function safeId(value, fallback) {
        return clean(value || fallback).toLowerCase().replace(/[^a-z0-9._:-]+/g, "-").replace(/^-|-$/g, "");
      }
      function deepClone(value) {
        return JSON.parse(JSON.stringify(value));
      }
      var GuidedEntryStore = class {
        constructor(storage) {
          this.storage = storage;
        }
        readAll() {
          try {
            return JSON.parse(this.storage.getItem(STORE_KEY) || "{}");
          } catch {
            return {};
          }
        }
        writeAll(records) {
          this.storage.setItem(STORE_KEY, JSON.stringify(records));
        }
        read(identity) {
          return this.readAll()[identity.key] || this.readLegacy(identity);
        }
        readLegacy(identity) {
          try {
            const legacy = JSON.parse(this.storage.getItem(LEGACY_STORE_KEY) || "{}")[identity.processId];
            if (!legacy) return null;
            return {
              identity,
              values: legacy.values || {},
              version: 1,
              history: [],
              savedAt: legacy.savedAt || (/* @__PURE__ */ new Date()).toISOString(),
              migratedFrom: LEGACY_STORE_KEY
            };
          } catch {
            return null;
          }
        }
        save(identity, values, transaction) {
          const records = this.readAll();
          const previous = records[identity.key];
          const version = Number(previous?.version || 0) + 1;
          const history = [...previous?.history || []];
          if (previous) history.push({ version: previous.version, values: previous.values, savedAt: previous.savedAt });
          records[identity.key] = {
            identity,
            values: deepClone(values),
            version,
            history: history.slice(-20),
            transactionId: transaction?.id || null,
            savedAt: (/* @__PURE__ */ new Date()).toISOString()
          };
          this.writeAll(records);
          return records[identity.key];
        }
      };
      var NexusUniversalGuidedEntryEngine = class {
        constructor({
          fields,
          storage,
          context,
          onReceipt = () => {
          },
          now = () => (/* @__PURE__ */ new Date()).toISOString(),
          idFactory = () => `entry-${Date.now()}-${Math.random().toString(16).slice(2)}`
        } = {}) {
          this.fields = fields || (() => []);
          this.storage = new GuidedEntryStore(storage);
          this.context = context || (() => ({ processId: "current-form" }));
          this.onReceipt = onReceipt;
          this.now = now;
          this.idFactory = idFactory;
          this.pendingConfirmation = null;
          this.undoStack = [];
          this.activeIdentityKey = null;
          this.activeTransactions = /* @__PURE__ */ new Map();
          this.completedRequestIds = /* @__PURE__ */ new Set();
        }
        resolveContext() {
          const supplied = this.context() || {};
          const processId = normalizeProcessId(supplied.processId || supplied.scope);
          const schema = getProcessSchema(processId, this.fields());
          const identity = Object.freeze({
            userId: safeId(supplied.userId, "signed-in-user"),
            processId,
            documentId: safeId(supplied.documentId, "active-document"),
            schemaVersion: Number(supplied.schemaVersion || schema.version)
          });
          return Object.freeze({ ...identity, key: `${identity.userId}::${identity.processId}::${identity.documentId}::v${identity.schemaVersion}`, schema });
        }
        receipt(type, identity, detail = {}) {
          const receipt = Object.freeze({
            schema: "nexus.guided-entry.receipt.v1",
            type,
            detail: Object.freeze({
              userId: identity.userId,
              processId: identity.processId,
              documentId: identity.documentId,
              schemaVersion: identity.schemaVersion,
              scope: identity.processId,
              ...detail
            }),
            at: this.now()
          });
          this.onReceipt(receipt);
          return receipt;
        }
        activate(identity) {
          if (this.activeIdentityKey && this.activeIdentityKey !== identity.key) {
            this.pendingConfirmation = null;
            this.undoStack = [];
            this.receipt("guided-entry.context-switched", identity, { previousIdentityKey: this.activeIdentityKey });
          }
          this.activeIdentityKey = identity.key;
        }
        claimTransaction(identity, command, options = {}) {
          const requestId = safeId(options.requestId, this.idFactory());
          const sequence = Number(options.transactionSequence || 0);
          const active = this.activeTransactions.get(identity.key);
          if (this.completedRequestIds.has(requestId) || active && sequence && sequence <= active.sequence) {
            this.receipt("guided-entry.transaction-rejected", identity, {
              requestId,
              transactionSequence: sequence,
              reason: this.completedRequestIds.has(requestId) ? "duplicate-request" : "stale-request",
              activeRequestId: active?.requestId || null
            });
            return null;
          }
          const transaction = Object.freeze({
            requestId,
            sequence,
            command: clean(command),
            identityKey: identity.key,
            documentId: identity.documentId,
            startedAt: this.now()
          });
          this.activeTransactions.set(identity.key, transaction);
          return transaction;
        }
        completeTransaction(transaction) {
          if (!transaction) return;
          this.completedRequestIds.add(transaction.requestId);
          if (this.completedRequestIds.size > 200) {
            this.completedRequestIds.delete(this.completedRequestIds.values().next().value);
          }
        }
        matchField(spokenName, fields, schema) {
          const wanted = clean(spokenName).toLowerCase().replace(/[?.!]+$/g, "");
          const candidates = fields.map((field) => {
            const definition = schema.fields.find((item) => item.key === field.key) || schema.fields.find((item) => clean(field.label).toLowerCase().includes(clean(item.key).toLowerCase()));
            const aliases = [field.key, field.label, ...definition?.aliases || []].map((item) => clean(item).toLowerCase());
            const score = Math.max(...aliases.map((alias) => {
              if (!alias) return 0;
              if (wanted === alias) return 100;
              if (wanted.includes(alias) || alias.includes(wanted)) return Math.min(alias.length, wanted.length);
              return 0;
            }));
            return { field, score };
          }).filter((candidate) => candidate.score > 0).sort((a, b) => b.score - a.score);
          if (!candidates.length || candidates[1] && candidates[0].score === candidates[1].score) return null;
          return candidates[0].field;
        }
        parseFieldProposal(spoken, fields, schema) {
          const normalized = clean(spoken).replace(/^(?:hey\s+|hello\s+)?nexus\b[\s,;:.-]*/i, "").replace(/^(?:please|kindly)\s+/i, "");
          const aliases = [];
          for (const field of fields) {
            const definition = schema.fields.find((item) => item.key === field.key) || schema.fields.find((item) => clean(field.label).toLowerCase().includes(clean(item.key).toLowerCase()));
            for (const alias of [field.key, field.label, ...definition?.aliases || []]) {
              const value = clean(alias);
              if (value) aliases.push({ field, alias: value });
            }
          }
          aliases.sort((left, right) => right.alias.length - left.alias.length);
          for (const candidate of aliases) {
            const escaped = candidate.alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            const patterns = [
              {
                expression: new RegExp(`^(?:add|append)\\s+(.+?)\\s+(?:to|under|in)\\s+(?:my\\s+)?${escaped}[.!?]*$`, "i"),
                valueIndex: 1,
                append: true
              },
              {
                expression: new RegExp(`^(?:change|replace|correct|set|enter|record|put)\\s+(?:my\\s+)?${escaped}\\s+(?:to|with|as|is|are|:)\\s*(.+)$`, "i"),
                valueIndex: 1,
                append: false
              },
              {
                expression: new RegExp(`^(?:my\\s+)?${escaped}\\s+(?:is|are|:)\\s*(.+)$`, "i"),
                valueIndex: 1,
                append: false
              }
            ];
            for (const pattern of patterns) {
              const match = normalized.match(pattern.expression);
              if (!match || !clean(match[pattern.valueIndex])) continue;
              return {
                field: candidate.field,
                value: clean(match[pattern.valueIndex]),
                append: pattern.append,
                action: /^(?:change|replace|correct)\b/i.test(normalized) ? "correct" : "update"
              };
            }
          }
          return null;
        }
        snapshot(fields) {
          return Object.fromEntries(fields.map((field) => [field.key, clean(field.get())]));
        }
        updateField(identity, field, value, append, action) {
          const previousValue = clean(field.get());
          const transaction = Object.freeze({
            id: this.idFactory(),
            identityKey: identity.key,
            field: field.key,
            previousValue,
            proposedValue: clean(value),
            action,
            at: this.now()
          });
          field.set(transaction.proposedValue, append);
          const committedValue = clean(field.get());
          this.undoStack.push({ ...transaction, committedValue });
          this.receipt(action === "correct" ? "voice-form.corrected" : "voice-form.updated", identity, {
            transactionId: transaction.id,
            field: field.key,
            label: field.label,
            previousValue,
            value: committedValue,
            visiblySynchronized: true
          });
          return { handled: true, action, field: field.key, transactionId: transaction.id };
        }
        handle(command, options = {}) {
          const originalSpoken = clean(command);
          const fields = this.fields();
          if (!originalSpoken || !fields.length) return { handled: false };
          const identity = this.resolveContext();
          const normalizedTranscript = normalizeGuidedEntryTranscript(originalSpoken, {
            fields,
            schema: identity.schema
          });
          const spoken = normalizedTranscript.normalized;
          const lower = spoken.toLowerCase();
          this.activate(identity);
          const owner = this.claimTransaction(identity, spoken, options);
          if (!owner) {
            return { handled: true, action: "rejected", rejected: true, requestId: safeId(options.requestId, "") };
          }
          const finish = (result) => {
            if (normalizedTranscript.changed) {
              this.receipt("guided-entry.transcript-normalized", identity, {
                originalTranscript: normalizedTranscript.original,
                normalizedTranscript: normalizedTranscript.normalized,
                rules: normalizedTranscript.rules
              });
            }
            this.completeTransaction(owner);
            return { ...result, requestId: owner.requestId };
          };
          if (/\b(undo|revert)\b(?:\s+the)?(?:\s+last)?(?:\s+change)?\b/.test(lower)) {
            const transaction = [...this.undoStack].reverse().find((item) => item.identityKey === identity.key);
            if (!transaction) return { handled: false };
            const field = fields.find((item) => item.key === transaction.field);
            if (!field) return { handled: false };
            field.set(transaction.previousValue, false);
            this.undoStack.splice(this.undoStack.lastIndexOf(transaction), 1);
            this.receipt("guided-entry.undone", identity, { transactionId: transaction.id, field: field.key, value: transaction.previousValue });
            return finish({ handled: true, action: "undo", field: field.key });
          }
          if (/\b(read|review|repeat)\b.*\b(form|information|details|resume|résumé|intake|entries|listing|lesson|assessment|back)\b/.test(lower)) {
            const populated = fields.filter((field) => clean(field.get()));
            const readback = populated.length ? populated.map((field) => `${field.label}: ${clean(field.get())}`).join(". ") : "The current process does not contain any entered information.";
            this.receipt("voice-form.readback", identity, { readback, fieldCount: populated.length });
            return finish({ handled: true, action: "readback", readback });
          }
          if (/\b(save|store|keep)\b.*\b(draft|form|resume|résumé|intake|changes|information|listing|lesson|assessment)\b/.test(lower)) {
            const transaction = { id: this.idFactory() };
            const record = this.storage.save(identity, this.snapshot(fields), transaction);
            this.receipt("voice-form.saved", identity, { transactionId: transaction.id, fieldCount: fields.length, draftVersion: record.version });
            return finish({ handled: true, action: "save", fieldCount: fields.length, draftVersion: record.version });
          }
          if (/\b(reopen|restore|load|continue)\b.*\b(draft|form|resume|résumé|intake|listing|lesson|assessment|process)\b/.test(lower)) {
            const draft = this.storage.read(identity);
            if (!draft || draft.identity && draft.identity.key && draft.identity.key !== identity.key) {
              this.completeTransaction(owner);
              return { handled: false, requestId: owner.requestId };
            }
            let restored = 0;
            const verifiedRestoredFields = [];
            fields.forEach((field) => {
              if (!Object.prototype.hasOwnProperty.call(draft.values || {}, field.key)) return;
              field.set(draft.values[field.key], false);
              const expectedValue = clean(draft.values[field.key]);
              const visibleValue = clean(field.get());
              if (visibleValue !== expectedValue) return;
              restored += 1;
              verifiedRestoredFields.push(Object.freeze({
                field: field.key,
                value: visibleValue
              }));
            });
            const expectedFields = Object.keys(draft.values || {}).filter((key) => fields.some((field) => field.key === key));
            if (restored !== expectedFields.length) {
              this.receipt("voice-form.reopen-verification-failed", identity, {
                requestId: owner.requestId,
                committedFormVersion: draft.version,
                expectedFields,
                verifiedRestoredFields
              });
              return finish({
                handled: true,
                action: "reopen-verification-failed",
                verified: false,
                fieldCount: restored,
                draftVersion: draft.version
              });
            }
            this.receipt("voice-form.reopened", identity, {
              requestId: owner.requestId,
              fieldCount: restored,
              draftVersion: draft.version,
              committedFormVersion: draft.version,
              verifiedRestoredFields,
              visibleValuesVerified: true,
              recovered: true
            });
            return finish({
              handled: true,
              action: "reopen",
              fieldCount: restored,
              draftVersion: draft.version,
              committedFormVersion: draft.version,
              verifiedRestoredFields,
              visibleValuesVerified: true
            });
          }
          if (/\b(cancel|do not submit|don't submit|do not send|don't send)\b/.test(lower) && this.pendingConfirmation?.identityKey === identity.key) {
            this.pendingConfirmation = null;
            this.receipt("voice-form.cancelled", identity, { externalExecution: false });
            return finish({ handled: true, action: "cancel" });
          }
          if (/\b(yes|confirm|approve|go ahead)\b/.test(lower) && this.pendingConfirmation?.identityKey === identity.key) {
            const requestedAction = this.pendingConfirmation.command;
            this.pendingConfirmation = null;
            this.receipt("voice-form.confirmed", identity, { requestedAction, externalExecution: false, providerReceiptRequired: true });
            return finish({ handled: true, action: "confirm", externalExecution: false });
          }
          if (/\b(submit|send|share|apply|publish)\b/.test(lower)) {
            const missingFields = fields.filter((field) => !clean(field.get())).map((field) => field.key);
            this.pendingConfirmation = { identityKey: identity.key, command: spoken };
            this.receipt("voice-form.confirmation-required", identity, {
              requestedAction: spoken,
              requiresConfirmation: true,
              missingFields,
              sensitivity: identity.schema.sensitivity
            });
            return finish({ handled: true, action: "confirmation-required", requiresConfirmation: true, missingFields });
          }
          const proposal = this.parseFieldProposal(spoken, fields, identity.schema);
          if (proposal) {
            return finish(this.updateField(
              identity,
              proposal.field,
              proposal.value,
              proposal.append,
              proposal.action
            ));
          }
          const correction = spoken.match(/\b(?:change|replace|correct)\s+(.+?)\s+(?:to|with)\s+(.+)$/i);
          if (correction) {
            const field = this.matchField(correction[1], fields, identity.schema);
            if (!field) return { handled: false, clarificationRequired: true };
            return finish(this.updateField(identity, field, correction[2], false, "correct"));
          }
          const addition = spoken.match(/\b(?:add|enter|record|put|set|my answer is)\s+(?:(?:a|the|this)\s+)?(.+?)(?:\s+(?:to|under|in|as|is|:)\s+)(.+)$/i);
          if (addition) {
            const first = this.matchField(addition[1], fields, identity.schema);
            const second = this.matchField(addition[2], fields, identity.schema);
            const field = first || second;
            if (!field || first && second && first.key !== second.key) {
              this.receipt("guided-entry.clarification-required", identity, { command: spoken, reason: "field-ambiguous" });
              return { handled: false, clarificationRequired: true };
            }
            return finish(this.updateField(identity, field, first ? addition[2] : addition[1], /\badd\b/i.test(spoken), "update"));
          }
          this.completeTransaction(owner);
          return { handled: false };
        }
      };
      module.exports = {
        GuidedEntryStore,
        NexusUniversalGuidedEntryEngine,
        STORE_KEY,
        LEGACY_STORE_KEY
      };
    }
  });

  // rebuild/nexus-core/guided-entry-transaction-controller.js
  var require_guided_entry_transaction_controller = __commonJS({
    "rebuild/nexus-core/guided-entry-transaction-controller.js"(exports, module) {
      "use strict";
      var { NexusUniversalGuidedEntryEngine } = require_universal_guided_entry_engine();
      function clean(value) {
        return String(value || "").replace(/\s+/g, " ").trim();
      }
      function requestId(value, idFactory) {
        return clean(value || idFactory()).replace(/[^a-zA-Z0-9._:-]+/g, "-");
      }
      function freezeEnvelope(value) {
        return Object.freeze({ ...value });
      }
      var NexusGuidedEntryTransactionController = class {
        constructor({
          fields,
          storage,
          context,
          ensureAuthoritativeDocument = async () => true,
          mountGeneration = null,
          visibleGeneration = null,
          settleVisibleDocument = async () => {
          },
          onReceipt = () => {
          },
          now = () => (/* @__PURE__ */ new Date()).toISOString(),
          idFactory = () => `guided-entry-${Date.now()}-${Math.random().toString(16).slice(2)}`
        } = {}) {
          this.fields = fields || (() => []);
          this.context = context || (() => ({}));
          this.ensureAuthoritativeDocument = ensureAuthoritativeDocument;
          this.mountedGeneration = null;
          this.mountGeneration = typeof mountGeneration === "function" ? mountGeneration : (envelope) => {
            this.mountedGeneration = envelope.generationId;
          };
          this.visibleGeneration = typeof visibleGeneration === "function" ? visibleGeneration : () => this.mountedGeneration;
          this.settleVisibleDocument = settleVisibleDocument;
          this.onReceipt = onReceipt;
          this.now = now;
          this.idFactory = idFactory;
          this.sequence = 0;
          this.active = null;
          this.screenOwner = null;
          this.mountedGeneration = null;
          this.requests = /* @__PURE__ */ new Map();
          this.bufferedReceipts = /* @__PURE__ */ new Map();
          this.engine = new NexusUniversalGuidedEntryEngine({
            fields: this.fields,
            storage,
            context: this.context,
            now,
            idFactory,
            onReceipt: (receipt) => {
              const owner = this.active;
              if (!owner) return;
              const receipts = this.bufferedReceipts.get(owner.requestId) || [];
              receipts.push(receipt);
              this.bufferedReceipts.set(owner.requestId, receipts);
            }
          });
        }
        begin(command, options = {}) {
          const id = requestId(options.requestId, this.idFactory);
          const existing = this.requests.get(id);
          if (existing) return freezeEnvelope({ ...existing, accepted: false, reason: "duplicate-request" });
          const envelope = freezeEnvelope({
            requestId: id,
            sequence: ++this.sequence,
            generationId: `${id}:generation`,
            command: clean(command),
            documentId: clean(options.documentId || this.context()?.documentId || "active-document"),
            processId: clean(options.processId || this.context()?.processId || "current-form"),
            state: "received",
            accepted: true,
            at: this.now()
          });
          this.requests.set(id, envelope);
          this.screenOwner = envelope;
          return envelope;
        }
        isCurrent(envelope) {
          return Boolean(
            envelope && this.active?.requestId === envelope.requestId && this.screenOwner?.generationId === envelope.generationId
          );
        }
        ownsScreen(envelope) {
          return Boolean(envelope && this.screenOwner?.generationId === envelope.generationId);
        }
        emit(type, envelope, detail = {}) {
          const receipt = Object.freeze({
            schema: "nexus.guided-entry.transaction-receipt.v2",
            type,
            detail: Object.freeze({
              requestId: envelope.requestId,
              transactionSequence: envelope.sequence,
              generationId: envelope.generationId,
              processId: envelope.processId,
              documentId: envelope.documentId,
              ...detail
            }),
            at: this.now()
          });
          this.onReceipt(receipt);
          return receipt;
        }
        reject(envelope, reason) {
          this.emit("guided-entry.transaction-rejected", envelope, { reason });
          return { handled: true, action: "rejected", rejected: true, reason, requestId: envelope.requestId };
        }
        visibleSnapshot() {
          return Object.fromEntries(this.fields().map((field) => [field.key, clean(field.get())]));
        }
        async execute(command, options = {}) {
          const envelope = this.begin(command, options);
          if (!envelope.accepted) return this.reject(envelope, envelope.reason);
          return this.commit(envelope);
        }
        async commit(envelope) {
          if (!envelope?.accepted) return this.reject(envelope, envelope?.reason || "invalid-envelope");
          if (!this.ownsScreen(envelope)) return this.reject(envelope, "screen-lease-superseded");
          if (this.active && this.active.sequence > envelope.sequence) return this.reject(envelope, "stale-request");
          this.active = envelope;
          this.bufferedReceipts.set(envelope.requestId, []);
          this.emit("guided-entry.transaction-started", envelope, { state: "received" });
          const rendered = await this.ensureAuthoritativeDocument(envelope);
          if (!this.isCurrent(envelope)) return this.reject(envelope, "superseded-during-render");
          if (!rendered || !this.fields().length) return this.reject(envelope, "authoritative-document-unavailable");
          this.mountGeneration(envelope);
          if (this.visibleGeneration() !== envelope.generationId) {
            return this.reject(envelope, "generation-mount-failed");
          }
          this.emit("guided-entry.document-authoritative", envelope, { state: "rendered" });
          const result = this.engine.handle(envelope.command, {
            requestId: envelope.requestId,
            transactionSequence: envelope.sequence
          });
          if (!result.handled) {
            this.bufferedReceipts.delete(envelope.requestId);
            return { ...result, requestId: envelope.requestId };
          }
          await this.settleVisibleDocument(envelope);
          if (!this.isCurrent(envelope)) return this.reject(envelope, "superseded-before-verification");
          if (this.visibleGeneration() !== envelope.generationId) {
            return this.reject(envelope, "visible-generation-replaced");
          }
          const visibleValues = this.visibleSnapshot();
          const buffered = this.bufferedReceipts.get(envelope.requestId) || [];
          const reopened = [...buffered].reverse().find((receipt) => receipt.type === "voice-form.reopened");
          if (result.action === "reopen") {
            const expected = Object.fromEntries(
              (reopened?.detail?.verifiedRestoredFields || []).map((item) => [item.field, clean(item.value)])
            );
            const verifiedFields = Object.keys(expected);
            const visibleValuesVerified = verifiedFields.length > 0 && verifiedFields.every((key) => visibleValues[key] === expected[key]);
            if (!visibleValuesVerified) {
              this.bufferedReceipts.delete(envelope.requestId);
              this.emit("voice-form.reopen-verification-failed", envelope, {
                state: "verification-failed",
                committedFormVersion: result.committedFormVersion || null,
                expectedValues: expected,
                visibleValues
              });
              return {
                handled: true,
                action: "reopen-verification-failed",
                requestId: envelope.requestId,
                visibleValuesVerified: false
              };
            }
            for (const receipt of buffered.filter((item) => item.type !== "voice-form.reopened")) {
              this.onReceipt(receipt);
            }
            this.bufferedReceipts.delete(envelope.requestId);
            this.emit("voice-form.reopened", envelope, {
              state: "completed",
              fieldCount: reopened.detail.verifiedRestoredFields.length,
              draftVersion: result.committedFormVersion,
              committedFormVersion: result.committedFormVersion,
              verifiedRestoredFields: reopened.detail.verifiedRestoredFields,
              visibleValues,
              visibleValuesVerified: true
            });
            return {
              ...result,
              requestId: envelope.requestId,
              visibleValues,
              visibleValuesVerified: true
            };
          }
          for (const receipt of buffered) this.onReceipt(receipt);
          this.bufferedReceipts.delete(envelope.requestId);
          this.emit("guided-entry.transaction-completed", envelope, {
            state: "completed",
            action: result.action,
            visibleValues
          });
          return { ...result, requestId: envelope.requestId, visibleValues };
        }
        cancelAll(reason = "controller-teardown") {
          const active = this.active;
          this.active = null;
          this.screenOwner = null;
          this.bufferedReceipts.clear();
          if (active) this.emit("guided-entry.transaction-cancelled", active, { reason });
        }
      };
      module.exports = { NexusGuidedEntryTransactionController };
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
      var { extractIntentAndParameters } = require_intent_parameter_extractor();
      var {
        DEFAULT_EXPERIENCE_PREFERENCES,
        normalizeExperiencePreferences
      } = require_experience_profile();
      var { createVisualContext } = require_visual_context();
      var { NexusGuidedEntryTransactionController } = require_guided_entry_transaction_controller();
      function createWorkspaceAdapter({ windowObject = window, timeoutMs = 8e3 } = {}) {
        return ({ workspace, command, utterance, parameters, visualContext, visualReference, transactionId }) => new Promise((resolve, reject) => {
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
              populated: event.detail.populated === true,
              outcomeVerified: event.detail.outcomeVerified === true,
              outcomeKind: event.detail.outcomeKind || null,
              recovery: event.detail.recovery || null,
              id: event.detail.acknowledgementId || requestId,
              evidenceReceiptId: event.detail.evidenceReceiptId || null,
              evidenceStatus: event.detail.evidenceStatus || null,
              evidenceSummary: event.detail.evidenceSummary || null,
              evidenceClaims: event.detail.evidenceClaims || [],
              evidenceSourceCount: event.detail.evidenceSourceCount || 0,
              evidenceLinksVisible: event.detail.evidenceLinksVisible === true,
              visualContext: event.detail.visualContext || null
            });
          }
          windowObject.addEventListener("nexus.clean.workspace.acknowledged", onAcknowledged);
          windowObject.dispatchEvent(new CustomEvent("nexus.clean.workspace.open", {
            detail: Object.freeze({
              requestId,
              workspace,
              command,
              utterance,
              parameters,
              visualContext,
              visualReference,
              transactionId
            })
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
          "conversation.processing": "Thinking\u2026",
          "conversation.response-started": "Thinking\u2026",
          "conversation.speaking": "Speaking\u2026",
          "conversation.return-to-listening": "Listening",
          "realtime.error": "Voice response failed \u2014 tap to reconnect",
          "workspace.visible": "Listening",
          "runtime.recovery-failed": "Voice connection unavailable"
        };
        return labels[receipt.type] || null;
      }
      function visibleFormFields() {
        const workspace = document.getElementById("nexus-workspace");
        if (!workspace || workspace.hidden) return [];
        return [...workspace.querySelectorAll("input:not([disabled]), textarea:not([disabled]), select:not([disabled])")].filter((field) => !field.readOnly && field.type !== "hidden").map((field, index) => {
          const label = field.getAttribute("aria-label") || field.labels?.[0]?.textContent || field.closest("label")?.textContent || field.placeholder || `Field ${index + 1}`;
          const key = field.name || field.id || field.getAttribute("aria-label") || `field-${index + 1}`;
          return {
            key,
            label: String(label).replace(/\s+/g, " ").trim(),
            node: field,
            get: () => field.value,
            set: (value, append) => {
              field.value = append && field.value.trim() ? `${field.value.trim()} ${String(value).trim()}` : String(value).trim();
              field.dispatchEvent(new Event("input", { bubbles: true }));
              field.dispatchEvent(new Event("change", { bubbles: true }));
              field.focus();
            }
          };
        });
      }
      function showVoiceFormReceipt(receipt) {
        const surface = document.getElementById("nexus-app-surface");
        if (!surface) return;
        const labels = {
          "voice-form.updated": `${receipt.detail.label} updated: ${receipt.detail.value}`,
          "voice-form.corrected": `${receipt.detail.label} corrected: ${receipt.detail.value}`,
          "voice-form.readback": receipt.detail.readback,
          "voice-form.saved": `Draft saved locally with ${receipt.detail.fieldCount} fields.`,
          "voice-form.reopened": `Draft reopened with ${receipt.detail.fieldCount} restored fields.`,
          "voice-form.confirmation-required": "Confirmation required before Nexus submits, sends, shares, or applies. Say \u201CNexus, confirm\u201D to approve.",
          "voice-form.confirmed": "Approval recorded. No outside provider completion is claimed without a verified execution receipt.",
          "voice-form.cancelled": "Submission cancelled. The draft was not sent or shared."
        };
        const label = labels[receipt.type];
        if (!label) return;
        let proof = surface.querySelector("[data-nexus-voice-form-proof]");
        if (!proof) {
          proof = document.createElement("section");
          proof.dataset.nexusVoiceFormProof = "true";
          proof.className = "app-request";
          proof.setAttribute("role", "status");
          proof.setAttribute("aria-live", "polite");
          surface.prepend(proof);
        }
        proof.textContent = label;
        proof.dataset.receiptType = receipt.type;
      }
      var WORKSPACE_VIEWS = Object.freeze({
        agriculture: {
          title: "Agriculture Help",
          icon: "\u{1F331}",
          status: "Crop support ready",
          fields: ["Crop or livestock", "Location", "What are you seeing?"],
          fieldKeys: ["subject", "location", "observation"],
          actions: ["Analyze concern", "Save field note"]
        },
        health: {
          title: "Health & Chronic Care",
          icon: "\u{1FA7A}",
          status: "Private health workspace ready",
          fields: ["Blood pressure or reading", "When measured", "Symptoms or notes"],
          fieldKeys: ["reading", "measuredAt", "symptoms"],
          actions: ["Record reading", "Prepare care summary"]
        },
        telehealth: {
          title: "Telehealth Intake",
          icon: "\u{1F9D1}\u{1F3FE}\u200D\u2695\uFE0F",
          status: "Intake preparation ready",
          fields: ["Reason for visit", "Preferred date", "Care provider"],
          fieldKeys: ["reason", "preferredDate", "provider"],
          actions: ["Begin intake", "Review consent"]
        },
        "mobile-clinic": {
          title: "Mobile Clinic",
          icon: "\u{1F690}",
          status: "Clinic access search ready",
          fields: ["Location", "Care needed", "Travel distance"],
          fieldKeys: ["location", "careNeeded", "travelDistance"],
          actions: ["Find clinic options", "Prepare visit"]
        },
        pharmacy: {
          title: "Pharmacy Support",
          icon: "\u{1F48A}",
          status: "Medication support ready",
          fields: ["Medication", "Request type", "Pharmacy or location"],
          fieldKeys: ["medication", "requestType", "pharmacy"],
          actions: ["Review request", "Prepare pharmacy contact"]
        },
        learning: {
          title: "Learning & Literacy",
          icon: "\u{1F393}",
          status: "Learning search ready",
          fields: ["Topic or skill", "Learning level", "Language"],
          fieldKeys: ["topic", "level", "language"],
          actions: ["Find learning options", "Start a lesson"]
        },
        workforce: {
          title: "Jobs & Workforce",
          icon: "\u{1F4BC}",
          status: "Job search ready",
          fields: ["Job or skill", "Location", "Work preference"],
          fieldKeys: ["role", "location", "preference"],
          actions: ["Search opportunities", "Prepare application"]
        },
        marketplace: {
          title: "AgriTrade Marketplace",
          icon: "\u{1F6D2}",
          status: "Marketplace workspace ready",
          fields: ["Product", "Quantity", "Location"],
          fieldKeys: ["product", "quantity", "location"],
          actions: ["Prepare listing", "Review marketplace options"]
        },
        reminders: {
          title: "Reminders",
          icon: "\u{1F514}",
          status: "Reminder setup ready",
          fields: ["Reminder", "Date and time", "Repeat"],
          fieldKeys: ["reminder", "time", "repeat"],
          actions: ["Create reminder", "View reminders"]
        },
        offline: {
          title: "Offline Queue",
          icon: "\u{1F4F6}",
          status: "Offline recovery ready",
          fields: ["Queued request", "Connection status", "Sync priority"],
          actions: ["Sync available work", "Review queue"]
        },
        "live-knowledge": {
          title: "Live Knowledge / Internet",
          icon: "\u{1F310}",
          status: "Current-information search ready",
          fields: ["Question", "Location or topic", "Source preference"],
          actions: ["Search current sources", "Review citations"]
        }
      });
      function escapeMarkup(value) {
        return String(value || "").replace(/[&<>"']/g, (character) => ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        })[character]);
      }
      function safeExternalUrl(value) {
        try {
          const url = new URL(String(value || ""));
          return ["http:", "https:"].includes(url.protocol) ? url.href : "";
        } catch {
          return "";
        }
      }
      function isEvidenceDisplayFollowUp(command) {
        return /\b(show (me )?(the )?(source|sources|reference|references|link|links|website|websites|resource|resources)|open (the )?(source|reference|link|website)|where did (you|that) (get|come) from)\b/i.test(String(command || ""));
      }
      function musicSearchFromCommand(command) {
        const resolution = extractIntentAndParameters(command);
        return resolution.parameters.query || "Kenyan";
      }
      function musicPlaybackUrl(command) {
        if (/\b(soul|r&b|rnb)\b/i.test(command || "")) {
          return "https://www.youtube-nocookie.com/embed/LtKUrFy6G8g?autoplay=1&playsinline=1";
        }
        return "https://www.youtube-nocookie.com/embed/videoseries?list=PLPSRLBd93oYDPspJRjwRbsz0BC0dn9Mhc&autoplay=1&playsinline=1";
      }
      function renderAppSurface({ workspace, command, appSurface }) {
        const view = WORKSPACE_VIEWS[workspace];
        if (!view || !appSurface) return false;
        const safeCommand = escapeMarkup(command);
        appSurface.innerHTML = `
    <div class="app-heading"><span class="app-icon" aria-hidden="true">${view.icon}</span>
      <div><strong>${view.title}</strong><span>${view.status}</span></div>
    </div>
    <div class="app-request"><span>Voice request</span><strong>${safeCommand}</strong></div>
    <div class="app-fields">${view.fields.map(
          (field, index) => `<label>${field}<input type="text" name="${escapeMarkup(view.fieldKeys?.[index] || `field-${index + 1}`)}" value="${index === 0 ? safeCommand : ""}" aria-label="${field}"></label>`
        ).join("")}</div>
    <div class="app-actions">${view.actions.map(
          (action) => `<button type="button">${action}</button>`
        ).join("")}</div>`;
        appSurface.hidden = false;
        return true;
      }
      function visualIntent(command) {
        const resolution = extractIntentAndParameters(command);
        const action = resolution.parameters.action;
        if (resolution.workflow === "live-knowledge" && action === "weather") return "weather";
        if (resolution.workflow === "agriculture" && action === "images") return "agriculture-images";
        if (resolution.workflow === "workforce" && action === "resume") return "resume";
        if (resolution.workflow === "health" && action === "provider-card") return "provider-card";
        if (resolution.workflow === "live-knowledge" && action === "pilot-dashboard") return "pilot-dashboard";
        if (resolution.workflow === "live-knowledge" && action === "source-directory") return "source-directory";
        return null;
      }
      function isDraftReopenCommand(command) {
        return /\b(reopen|restore|load)\b.*\b(draft|form|resume|résumé|intake)\b/i.test(String(command || ""));
      }
      function guidedEntryProcessForDocument(documentId, fallbackProcess) {
        const documentProcess = {
          resume: "workforce",
          "provider-card": "health"
        }[String(documentId || "").toLowerCase()];
        return documentProcess || fallbackProcess || "current-form";
      }
      function isGuidedEntryFollowUp(command) {
        return /\b(add|enter|record|put|set|change|replace|correct|undo|revert|read|review|repeat|save|store|keep|reopen|restore|load|continue|submit|send|share|apply|publish|confirm|approve|cancel)\b/i.test(String(command || ""));
      }
      function shouldPreserveGuidedDocument({
        activeWorkspace,
        activeDocument,
        requestedWorkspace,
        command,
        editableFieldCount
      } = {}) {
        return Boolean(
          activeWorkspace && activeWorkspace === requestedWorkspace && activeDocument && activeDocument !== activeWorkspace && Number(editableFieldCount) > 0 && isGuidedEntryFollowUp(command)
        );
      }
      function weatherDescription(code) {
        const value = Number(code);
        if (value === 0) return "Clear sky";
        if ([1, 2, 3].includes(value)) return "Partly cloudy";
        if ([45, 48].includes(value)) return "Fog";
        if ([51, 53, 55, 56, 57].includes(value)) return "Drizzle";
        if ([61, 63, 65, 66, 67, 80, 81, 82].includes(value)) return "Rain";
        if ([71, 73, 75, 77, 85, 86].includes(value)) return "Snow";
        if ([95, 96, 99].includes(value)) return "Thunderstorm";
        return "Current conditions";
      }
      async function fetchVisualData({ kind, command, sessionToken, fetchImpl = fetch }) {
        const response = await fetchImpl(`/api/visual/${kind}`, {
          method: "POST",
          headers: { authorization: `Bearer ${sessionToken}`, "content-type": "application/json" },
          body: JSON.stringify({ command })
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.message || "Nexus could not load the requested visual information.");
        return result;
      }
      async function renderSpecializedVisual({ workspace, command, sessionToken, appSurface }) {
        const intent = visualIntent(command);
        if (!intent || !appSurface) return { handled: false, visible: true };
        appSurface.hidden = false;
        if (intent === "weather") {
          appSurface.innerHTML = `<div class="app-request" role="status">Loading live weather and source\u2026</div>`;
          const weather = await fetchVisualData({ kind: "weather", command, sessionToken });
          const sourceUrl = safeExternalUrl(weather.sourceUrl);
          appSurface.innerHTML = `
      <article class="visual-card weather-card" data-nexus-visual="weather">
        <div class="app-heading"><span class="app-icon" aria-hidden="true">\u{1F326}\uFE0F</span>
          <div><strong>${escapeMarkup(weather.location)}</strong><span>${escapeMarkup(weatherDescription(weather.weatherCode))}</span></div>
        </div>
        <div class="visual-metrics">
          <span><b>${escapeMarkup(weather.temperatureC)}\xB0C</b><small>Temperature</small></span>
          <span><b>${escapeMarkup(weather.highC)}\xB0 / ${escapeMarkup(weather.lowC)}\xB0</b><small>High / low</small></span>
          <span><b>${escapeMarkup(weather.rainChance)}%</b><small>Rain chance</small></span>
          <span><b>${escapeMarkup(weather.windKph)} km/h</b><small>Wind</small></span>
        </div>
        <p>Observed ${escapeMarkup(weather.observedAt || "now")} \xB7 ${escapeMarkup(weather.timezone)}</p>
        ${sourceUrl ? `<a class="evidence-source-link" href="${escapeMarkup(sourceUrl)}" target="_blank" rel="noopener noreferrer">Open exact Open-Meteo weather data</a>` : ""}
      </article>`;
          return { handled: true, visible: Boolean(sourceUrl), status: weather.status };
        }
        if (intent === "agriculture-images") {
          appSurface.innerHTML = `<div class="app-request" role="status">Loading source-labeled agriculture pictures\u2026</div>`;
          const result = await fetchVisualData({ kind: "images", command, sessionToken });
          appSurface.innerHTML = `
      <section data-nexus-visual="agriculture-images">
        <div class="app-heading"><span class="app-icon" aria-hidden="true">\u{1F33D}</span>
          <div><strong>Possible maize concerns</strong><span>Reference images\u2014not a diagnosis</span></div>
        </div>
        <div class="visual-image-grid">${result.items.map((item) => `
          <figure><img src="${escapeMarkup(safeExternalUrl(item.imageUrl))}" alt="${escapeMarkup(item.title)}" loading="lazy">
            <figcaption><strong>${escapeMarkup(item.title)}</strong><span>${escapeMarkup(item.license)}</span>
              <a href="${escapeMarkup(safeExternalUrl(item.sourceUrl))}" target="_blank" rel="noopener noreferrer">Open Wikimedia Commons source</a>
            </figcaption>
          </figure>`).join("")}</div>
        <p>Compare patterns carefully and consult a local agricultural extension professional before treatment.</p>
      </section>`;
          return { handled: true, visible: result.items.length > 0, status: result.status };
        }
        if (intent === "resume") {
          appSurface.innerHTML = `
      <form class="resume-builder" data-nexus-visual="resume">
        <div class="app-heading"><span class="app-icon" aria-hidden="true">\u{1F4C4}</span>
          <div><strong>R\xE9sum\xE9 Builder</strong><span>Edit, print, or save as PDF</span></div>
        </div>
        <label>Full name<input name="name" aria-label="R\xE9sum\xE9 full name" placeholder="Your full name"></label>
        <label>Target role<input name="role" aria-label="R\xE9sum\xE9 target role" value="Agriculture / farming role"></label>
        <label>Skills<textarea name="skills" aria-label="R\xE9sum\xE9 skills" rows="3" placeholder="Crop production, equipment, teamwork, languages"></textarea></label>
        <label>Experience<textarea name="experience" aria-label="R\xE9sum\xE9 experience" rows="5" placeholder="Employer, work performed, dates, results"></textarea></label>
        <div class="app-actions"><button type="button" data-resume-action="print">Print / Save PDF</button><button type="button" data-resume-action="download">Download text</button></div>
      </form>`;
          return { handled: true, visible: true, status: "resume-builder-ready" };
        }
        if (intent === "source-directory") {
          const sources = [
            ["FAO", "Food and Agriculture Organization", "https://www.fao.org/"],
            ["KALRO", "Kenya Agricultural and Livestock Research Organization", "https://www.kalro.org/"],
            ["Kenya Agriculture Ministry", "Ministry of Agriculture and Livestock Development", "https://kilimo.go.ke/"],
            ["WHO", "World Health Organization", "https://www.who.int/"],
            ["ILO", "International Labour Organization", "https://www.ilo.org/"],
            ["UNESCO", "United Nations Educational, Scientific and Cultural Organization", "https://www.unesco.org/"],
            ["World Bank", "World Bank public development resources", "https://www.worldbank.org/"]
          ];
          appSurface.innerHTML = `
      <section class="source-directory" data-nexus-visual="source-directory">
        <div class="app-heading"><span class="app-icon" aria-hidden="true">\u{1F517}</span>
          <div><strong>Approved Websites & Sources</strong><span>Direct links to official organizations</span></div>
        </div>
        <div class="evidence-sources">${sources.map(([name, description, url]) => `
          <article class="evidence-source"><strong>${escapeMarkup(name)}</strong>
            <span>${escapeMarkup(description)}</span>
            <a class="evidence-source-link" href="${escapeMarkup(url)}" target="_blank" rel="noopener noreferrer">
              <span>Open official website</span><small>${escapeMarkup(url)}</small>
            </a>
          </article>`).join("")}</div>
        <p>Use these official resources as starting points. Nexus will identify the exact source used when answering a specific research question.</p>
      </section>`;
          return { handled: true, visible: true, status: "approved-source-directory-ready" };
        }
        if (intent === "provider-card") {
          const pressure = /\b(\d{2,3})\s*(?:over|\/)\s*(\d{2,3})\b/i.exec(command || "");
          appSurface.innerHTML = `
      <article class="provider-card" data-nexus-visual="provider-card">
        <div class="app-heading"><span class="app-icon" aria-hidden="true">\u{1FA7A}</span>
          <div><strong>Provider Communication Card</strong><span>Show or read this to a healthcare professional</span></div>
        </div>
        <dl><dt>Blood pressure</dt><dd>${pressure ? `${escapeMarkup(pressure[1])}/${escapeMarkup(pressure[2])}` : "Not provided"}</dd>
          <dt>User report</dt><dd>${escapeMarkup(command)}</dd>
          <dt>Safety</dt><dd>This card supports communication and does not diagnose or replace urgent medical care.</dd></dl>
        <div class="app-actions"><button type="button" data-provider-card-action="read">Read aloud</button><button type="button" data-provider-card-action="print">Print / Save PDF</button></div>
      </article>`;
          return { handled: true, visible: true, status: "provider-card-ready" };
        }
        appSurface.innerHTML = `
    <section class="pilot-dashboard" data-nexus-visual="pilot-dashboard">
      <div class="app-heading"><span class="app-icon" aria-hidden="true">\u{1F4CA}</span>
        <div><strong>Pilot Evidence Dashboard</strong><span>Evidence, failures, recovery, feedback, and scale-up planning</span></div>
      </div>
      <div class="visual-metrics"><span><b>Awaiting pilot data</b><small>Session completion</small></span>
        <span><b>0 fabricated</b><small>Only recorded failures shown</small></span>
        <span><b>Source register</b><small>Approval status required</small></span></div>
      <div class="app-actions"><button type="button">Session completion</button><button type="button">Technical failures</button><button type="button">Recovered sessions</button><button type="button">Participant feedback</button><button type="button">Source register</button><button type="button">Implementation report</button><button type="button">Learning brief</button><button type="button">Scale-up options</button></div>
    </section>`;
        return { handled: true, visible: true, status: "pilot-dashboard-ready" };
      }
      function renderEvidenceWorkspace({ receipt, surface }) {
        if (!surface || !receipt) return false;
        const verified = receipt.verified === true;
        const claims = Array.isArray(receipt.claims) ? receipt.claims : [];
        const sources = Array.isArray(receipt.sources) ? receipt.sources : [];
        surface.innerHTML = `
    <div class="evidence-status">
      <strong class="${verified ? "evidence-verified" : "evidence-limited"}">${verified ? "Verified across approved sources" : "Evidence not fully cross-checked"}</strong>
      <span>${escapeMarkup(receipt.domainLabel || receipt.domain)}</span>
    </div>
    <div class="evidence-summary"><strong>Nexus synthesis</strong><p>${escapeMarkup(receipt.summary)}</p></div>
    <div class="evidence-grid">
      <section class="evidence-claims" aria-label="Evidence findings">
        <h2>Findings</h2>
        ${claims.length ? claims.map((claim) => `<article class="evidence-claim">
          <span class="evidence-citations">${escapeMarkup((claim.citations || []).map((id) => `[${id}]`).join(" "))}</span>
          <p>${escapeMarkup(claim.text)}</p>
        </article>`).join("") : "<p>No approved-source claim was available.</p>"}
      </section>
      <aside class="evidence-sources" aria-label="Approved sources">
        <h2>Approved sources</h2>
        ${sources.map((source) => {
          const sourceUrl = safeExternalUrl(source.url);
          return `<article class="evidence-source">
          <strong>[${escapeMarkup(source.id)}] ${escapeMarkup(source.title)}</strong>
          <span>${escapeMarkup(source.organization)}</span>
          ${sourceUrl ? `<a class="evidence-source-link" href="${escapeMarkup(sourceUrl)}" target="_blank" rel="noopener noreferrer">
                <span>Open website</span><small>${escapeMarkup(sourceUrl)}</small>
              </a>` : '<span class="evidence-limited">Verified website address unavailable</span>'}
          <small>Published: ${escapeMarkup(source.publishedAt || "date not provided")} \xB7 Retrieved: ${escapeMarkup(source.retrievedAt)}</small>
        </article>`;
        }).join("")}
      </aside>
    </div>
    <form class="evidence-follow-up">
      <input name="question" aria-label="Ask a follow-up evidence question" placeholder="Ask a follow-up about this evidence">
      <button type="submit">Research follow-up</button>
    </form>
    <p class="evidence-receipt">Research receipt: ${escapeMarkup(receipt.id)}</p>`;
        surface.hidden = false;
        surface.dataset.receiptId = receipt.id || "";
        return true;
      }
      async function researchEvidence({ question, sessionToken, surface, parentReceiptId = null, fetchImpl = fetch }) {
        surface.hidden = false;
        surface.innerHTML = `<div class="evidence-summary" role="status">Nexus is searching approved sources and cross-checking the findings\u2026</div>`;
        const response = await fetchImpl("/api/evidence/research", {
          method: "POST",
          headers: {
            authorization: `Bearer ${sessionToken}`,
            "content-type": "application/json"
          },
          body: JSON.stringify({ question, parentReceiptId })
        });
        const result = await response.json();
        if (!response.ok) {
          surface.innerHTML = `<div class="evidence-summary evidence-limited">${escapeMarkup(result.message || "Approved evidence retrieval is unavailable.")}</div>`;
          return result;
        }
        renderEvidenceWorkspace({ receipt: result, surface });
        const form = surface.querySelector(".evidence-follow-up");
        if (form) {
          form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const input = form.elements.question;
            const followUp = String(input && input.value || "").trim();
            if (!followUp) return;
            await researchEvidence({
              question: followUp,
              sessionToken,
              surface,
              parentReceiptId: result.id,
              fetchImpl
            });
          }, { once: true });
        }
        return result;
      }
      var nexusLeafletMap = null;
      var nexusLeafletLayers = [];
      var nexusMapRequestGeneration = 0;
      function stabilizeVisibleMapLayout(map, globalObject = typeof window !== "undefined" ? window : null) {
        const invalidate = () => map?.invalidateSize?.({ pan: false, animate: false });
        invalidate();
        if (typeof globalObject?.requestAnimationFrame === "function") {
          globalObject.requestAnimationFrame(invalidate);
        }
        if (typeof globalObject?.setTimeout === "function") {
          globalObject.setTimeout(invalidate, 250);
        } else {
          setTimeout(invalidate, 250);
        }
      }
      function resetVisibleMapStateForTest() {
        nexusLeafletMap = null;
        nexusLeafletLayers = [];
        nexusMapRequestGeneration = 0;
      }
      async function resolveVisibleMap({ command, parameters, sessionToken, documentObject = document, fetchImpl = fetch, leaflet = window.L }) {
        const requestGeneration = ++nexusMapRequestGeneration;
        const canvas = documentObject.getElementById("nexus-map-canvas");
        const summary = documentObject.getElementById("nexus-map-summary");
        const link = documentObject.getElementById("nexus-map-link");
        if (!canvas || !summary || !link || !leaflet) throw new Error("The interactive map renderer is unavailable.");
        if (nexusLeafletMap) {
          nexusLeafletLayers.forEach((layer) => nexusLeafletMap.removeLayer(layer));
          nexusLeafletLayers = [];
        }
        link.removeAttribute?.("href");
        summary.textContent = "Nexus is locating the requested place and preparing the visible map\u2026";
        const response = await fetchImpl("/api/maps/resolve", {
          method: "POST",
          headers: { authorization: `Bearer ${sessionToken}`, "content-type": "application/json" },
          body: JSON.stringify({ command, parameters })
        });
        const result = await response.json();
        if (requestGeneration !== nexusMapRequestGeneration) {
          const error = new Error("A newer map request replaced this lookup.");
          error.code = "NEXUS_MAP_REQUEST_SUPERSEDED";
          throw error;
        }
        if (!response.ok) throw new Error(result.message || "Nexus could not display the requested map.");
        if (!nexusLeafletMap) {
          nexusLeafletMap = leaflet.map(canvas).setView([0, 20], 3);
          leaflet.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors",
            maxZoom: 19
          }).addTo(nexusLeafletMap);
        }
        stabilizeVisibleMapLayout(nexusLeafletMap, documentObject.defaultView);
        if (result.type === "route") {
          const latLngs = result.geometry.coordinates.map(([lon, lat]) => [lat, lon]);
          const line = leaflet.polyline(latLngs, { color: "#39d7ff", weight: 6, opacity: 0.9 }).addTo(nexusLeafletMap);
          const start = leaflet.marker([result.origin.lat, result.origin.lon]).bindPopup(result.origin.label).addTo(nexusLeafletMap);
          const end = leaflet.marker([result.destination.lat, result.destination.lon]).bindPopup(result.destination.label).addTo(nexusLeafletMap);
          nexusLeafletLayers.push(line, start, end);
          nexusLeafletMap.fitBounds(line.getBounds(), { padding: [36, 36] });
          const distanceKm = Math.round(Number(result.distanceMeters || 0) / 1e3).toLocaleString();
          const hours = (Number(result.durationSeconds || 0) / 3600).toFixed(1);
          summary.textContent = `Visible driving route: ${result.origin.label} \u2192 ${result.destination.label} \xB7 ${distanceKm} km \xB7 about ${hours} hours`;
          link.href = `https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=${result.origin.lat}%2C${result.origin.lon}%3B${result.destination.lat}%2C${result.destination.lon}`;
        } else {
          const location = result.location;
          let marker = null;
          if (!location.administrative) {
            marker = leaflet.marker([location.lat, location.lon]).bindPopup(location.label).addTo(nexusLeafletMap);
            nexusLeafletLayers.push(marker);
          }
          if (location.boundingBox.length === 4) {
            nexusLeafletMap.fitBounds([
              [location.boundingBox[0], location.boundingBox[2]],
              [location.boundingBox[1], location.boundingBox[3]]
            ], { padding: [28, 28], maxZoom: location.administrative ? 12 : 16 });
          } else {
            nexusLeafletMap.setView([location.lat, location.lon], location.administrative ? 11 : 15);
          }
          if (marker) marker.openPopup();
          summary.textContent = location.administrative ? `Visible city-area map of ${location.label}` : `Visible map centered on ${location.label}`;
          link.href = `https://www.openstreetmap.org/#map=${location.administrative ? 11 : 15}/${location.lat}/${location.lon}`;
        }
        stabilizeVisibleMapLayout(nexusLeafletMap, documentObject.defaultView);
        return result;
      }
      function renderWorkspace({ workspace, command, documentObject = document }) {
        const host = documentObject.getElementById("nexus-workspace");
        const title = documentObject.getElementById("nexus-workspace-title");
        const commandText = documentObject.getElementById("nexus-workspace-command");
        const mapSurface = documentObject.getElementById("nexus-map-surface");
        const mapCanvas = documentObject.getElementById("nexus-map-canvas");
        const mapLink = documentObject.getElementById("nexus-map-link");
        const appSurface = documentObject.getElementById("nexus-app-surface");
        const evidenceSurface = documentObject.getElementById("nexus-evidence-surface");
        const musicSurface = documentObject.getElementById("nexus-music-surface");
        const musicFrame = documentObject.getElementById("nexus-music-frame");
        const musicLink = documentObject.getElementById("nexus-music-link");
        if (!host || !title || !commandText) return false;
        title.textContent = workspace === "maps" ? "Maps / Field Visit" : workspace === "music" ? "Music / Media" : WORKSPACE_VIEWS[workspace]?.title || workspace;
        commandText.textContent = command || "";
        host.dataset.workspace = workspace;
        host.dataset.document = workspace;
        host.dataset.guidedEntryProcess = workspace;
        host.hidden = false;
        if (mapSurface) mapSurface.hidden = workspace !== "maps";
        if (appSurface) {
          appSurface.hidden = true;
          appSurface.innerHTML = "";
        }
        if (evidenceSurface) {
          evidenceSurface.hidden = true;
          evidenceSurface.innerHTML = "";
        }
        if (musicSurface) musicSurface.hidden = workspace !== "music";
        if (workspace === "maps" && mapLink) mapLink.removeAttribute?.("href");
        if (workspace === "music" && musicFrame && musicLink) {
          const query = musicSearchFromCommand(command);
          const encodedQuery = encodeURIComponent(query);
          musicFrame.src = musicPlaybackUrl(command);
          musicLink.href = `https://www.youtube.com/results?search_query=${encodedQuery}`;
        }
        const rendered = workspace === "maps" ? Boolean(mapCanvas) : workspace === "music" ? Boolean(musicFrame && musicFrame.src) : workspace === "live-knowledge" ? Boolean(evidenceSurface) : renderAppSurface({ workspace, command, appSurface });
        host.dataset.populated = rendered ? "true" : "false";
        return rendered;
      }
      function createRemoteAudioUnlock({ windowObject = window, audioElement } = {}) {
        const AudioContextConstructor = windowObject.AudioContext || windowObject.webkitAudioContext;
        let context = null;
        let source = null;
        let gain = null;
        let volume = 1;
        return Object.freeze({
          unlock() {
            audioElement.autoplay = true;
            audioElement.muted = false;
            audioElement.volume = 1;
            audioElement.setAttribute("playsinline", "");
            if (!AudioContextConstructor) return null;
            if (!context) context = new AudioContextConstructor();
            if (!gain && typeof context.createGain === "function") {
              gain = context.createGain();
              gain.gain.value = volume;
              gain.connect(context.destination);
            }
            return context.state === "suspended" ? context.resume() : Promise.resolve();
          },
          attach(stream) {
            if (!stream || !context || typeof context.createMediaStreamSource !== "function") return false;
            if (source && typeof source.disconnect === "function") source.disconnect();
            source = context.createMediaStreamSource(stream);
            source.connect(gain || context.destination);
            audioElement.muted = true;
            return true;
          },
          setVolume(value) {
            volume = Math.min(1, Math.max(0, Number(value)));
            audioElement.volume = volume;
            if (gain) gain.gain.value = volume;
            return volume;
          },
          close() {
            if (source && typeof source.disconnect === "function") source.disconnect();
            source = null;
            if (context && typeof context.close === "function") context.close().catch(() => {
            });
            context = null;
            gain = null;
            audioElement.muted = false;
          }
        });
      }
      function boot() {
        const orb = document.getElementById("nexus-orb");
        const status = document.getElementById("nexus-status");
        const audio = document.getElementById("nexus-audio");
        const caption = document.getElementById("nexus-caption");
        const captionsControl = document.getElementById("nexus-captions");
        const slowSpeechControl = document.getElementById("nexus-slow-speech");
        const volumeControl = document.getElementById("nexus-volume");
        const replayControl = document.getElementById("nexus-replay");
        const workspaceClose = document.getElementById("nexus-workspace-close");
        const workspaceVoiceStatus = document.getElementById("nexus-workspace-voice-status");
        const config = window.NEXUS_CLEAN_CONFIG || {};
        const sessionToken = config.sessionToken || sessionStorage.getItem("nexus.clean.session");
        let activeEvidenceReceipt = null;
        let activeWorkspaceRequest = null;
        if (!sessionToken) {
          status.textContent = "Sign in to speak with Nexus";
          orb.disabled = true;
          return;
        }
        window.addEventListener("nexus.clean.workspace.open", async (event) => {
          const detail = event.detail || {};
          const workspace = document.getElementById("nexus-workspace");
          if (!workspace || !detail.requestId || !detail.workspace) return;
          const previousRequest = activeWorkspaceRequest;
          activeWorkspaceRequest = Object.freeze({
            requestId: detail.requestId,
            transactionId: detail.transactionId || null,
            workspace: detail.workspace
          });
          if (previousRequest && previousRequest.requestId !== detail.requestId) {
            window.dispatchEvent(new CustomEvent("nexus.clean.workspace.acknowledged", {
              detail: Object.freeze({
                requestId: previousRequest.requestId,
                acknowledgementId: `superseded-${previousRequest.requestId}`,
                workspace: previousRequest.workspace,
                visible: false,
                populated: false,
                outcomeVerified: false,
                outcomeKind: null,
                recovery: Object.freeze({
                  state: "request-superseded",
                  message: "A newer Nexus request owns the visible workspace.",
                  retryable: false
                })
              })
            }));
          }
          const ownsWorkspace = () => activeWorkspaceRequest?.requestId === detail.requestId;
          const preserveGuidedDocument = shouldPreserveGuidedDocument({
            activeWorkspace: workspace.dataset.workspace,
            activeDocument: workspace.dataset.document,
            requestedWorkspace: detail.workspace,
            command: detail.command,
            editableFieldCount: visibleFormFields().length
          });
          const guidedEnvelope = isDraftReopenCommand(detail.command) ? guidedEntryController?.begin(detail.command, {
            requestId: detail.requestId,
            processId: workspace.dataset.guidedEntryProcess,
            documentId: workspace.dataset.document
          }) : null;
          if (!preserveGuidedDocument) {
            if (!renderWorkspace({ workspace: detail.workspace, command: detail.command })) return;
          } else {
            const commandText = document.getElementById("nexus-workspace-command");
            if (commandText) commandText.textContent = detail.command || "";
            workspace.dataset.populated = "true";
            workspace.hidden = false;
          }
          document.body.classList.add("nexus-workspace-open");
          let evidence = null;
          let mapResult = null;
          let visualSuccess = true;
          const appSurface = document.getElementById("nexus-app-surface");
          const specializedIntent = visualIntent(detail.command);
          if (detail.workspace === "maps") {
            try {
              mapResult = await resolveVisibleMap({
                command: detail.command,
                parameters: detail.parameters,
                sessionToken
              });
              if (!ownsWorkspace()) return;
            } catch (error) {
              visualSuccess = false;
              if (error.code !== "NEXUS_MAP_REQUEST_SUPERSEDED") {
                const summary = document.getElementById("nexus-map-summary");
                if (summary) summary.textContent = error.message;
              }
            }
          }
          if (detail.workspace === "live-knowledge" && !["weather", "pilot-dashboard", "source-directory"].includes(specializedIntent)) {
            const evidenceSurface = document.getElementById("nexus-evidence-surface");
            const stagedEvidenceSurface = document.createElement("div");
            try {
              if (activeEvidenceReceipt && isEvidenceDisplayFollowUp(detail.command)) {
                renderEvidenceWorkspace({ receipt: activeEvidenceReceipt, surface: stagedEvidenceSurface });
                evidence = activeEvidenceReceipt;
              } else {
                evidence = await researchEvidence({
                  question: detail.command,
                  sessionToken,
                  surface: stagedEvidenceSurface
                });
                if (!ownsWorkspace()) return;
                if (evidence && evidence.id && Array.isArray(evidence.sources) && evidence.sources.length > 0) {
                  activeEvidenceReceipt = evidence;
                }
              }
              if (!ownsWorkspace()) return;
              if (evidenceSurface) {
                evidenceSurface.replaceChildren(...stagedEvidenceSurface.childNodes);
                evidenceSurface.hidden = false;
              }
            } catch (error) {
              if (evidenceSurface) {
                evidenceSurface.hidden = false;
                evidenceSurface.innerHTML = `<div class="evidence-summary evidence-limited">${escapeMarkup(error.message)}</div>`;
              }
              evidence = { status: "provider-error", summary: "Approved evidence retrieval failed.", claims: [] };
            }
            visualSuccess = Boolean(evidence && evidence.id && Array.isArray(evidence.sources) && evidence.sources.length > 0);
          }
          if (specializedIntent && !preserveGuidedDocument) {
            try {
              const stagedAppSurface = document.createElement("div");
              const specialized = await renderSpecializedVisual({
                workspace: detail.workspace,
                command: detail.command,
                sessionToken,
                appSurface: stagedAppSurface
              });
              if (!ownsWorkspace()) return;
              if (specialized.handled) {
                appSurface.replaceChildren(...stagedAppSurface.childNodes);
                appSurface.hidden = false;
                visualSuccess = specialized.visible === true;
                workspace.dataset.populated = visualSuccess ? "true" : "false";
                workspace.dataset.document = specializedIntent || detail.workspace;
                workspace.dataset.guidedEntryProcess = guidedEntryProcessForDocument(
                  specializedIntent,
                  detail.workspace
                );
                if (detail.workspace === "live-knowledge") {
                  const evidenceSurface = document.getElementById("nexus-evidence-surface");
                  if (evidenceSurface) evidenceSurface.hidden = true;
                }
              }
            } catch (error) {
              if (!ownsWorkspace()) return;
              visualSuccess = false;
              if (appSurface) {
                appSurface.hidden = false;
                appSurface.innerHTML = `<div class="evidence-summary evidence-limited">${escapeMarkup(error.message)}</div>`;
              }
            }
          }
          if (guidedEnvelope && visibleFormFields().length > 0) {
            await guidedEntryController?.commit(guidedEnvelope);
          }
          const specializedKind = specializedIntent || null;
          if (!ownsWorkspace()) return;
          const outcomeKind = detail.workspace === "maps" ? mapResult ? "map" : "map-fallback" : detail.workspace === "music" ? "music" : specializedKind || (detail.workspace === "live-knowledge" ? "evidence" : "application");
          const outcomeVerified = Boolean(
            visualSuccess && !workspace.hidden && workspace.dataset.populated === "true" && (detail.workspace !== "maps" || mapResult && /^visible-(?:map|route)-ready$/.test(mapResult.status))
          );
          const visibleItems = appSurface ? Array.from(appSurface.querySelectorAll("a, button, li, article, [data-nexus-item]")).filter((node) => !node.hidden && node.getAttribute("aria-hidden") !== "true").map((node) => node.textContent) : [];
          const visualContext = createVisualContext({
            workspace: detail.workspace,
            outcomeKind,
            surfaceId: `visible-${detail.requestId}`,
            summary: appSurface && appSurface.textContent || workspace.textContent,
            items: visibleItems,
            selectedItem: detail.visualReference && detail.visualReference.selectedItem || null,
            viewport: detail.workspace === "maps" ? { place: detail.parameters && detail.parameters.place || null, route: detail.parameters && detail.parameters.action === "route" } : null,
            sourceIds: evidence && Array.isArray(evidence.sources) ? evidence.sources.map((source) => source.id || source.url) : [],
            availableActions: ["inspect", "explain", "refine", "compare", "select", "previous-view"]
          });
          requestAnimationFrame(() => {
            if (!ownsWorkspace()) return;
            window.dispatchEvent(new CustomEvent("nexus.clean.workspace.acknowledged", {
              detail: Object.freeze({
                requestId: detail.requestId,
                acknowledgementId: `visible-${detail.requestId}`,
                workspace: detail.workspace,
                visible: visualSuccess && !workspace.hidden && workspace.dataset.populated === "true",
                populated: visualSuccess && workspace.dataset.populated === "true",
                outcomeVerified,
                outcomeKind,
                visualContext,
                recovery: outcomeVerified ? null : {
                  state: "visible-failure",
                  message: `Nexus could not verify the requested ${detail.workspace} result.`,
                  retryable: true
                },
                mapStatus: mapResult && mapResult.status || null,
                evidenceReceiptId: evidence && evidence.id || null,
                evidenceStatus: evidence && evidence.status || null,
                evidenceSummary: evidence && evidence.summary || null,
                evidenceClaims: evidence && evidence.claims || [],
                evidenceSourceCount: evidence && Array.isArray(evidence.sources) ? evidence.sources.length : 0,
                evidenceLinksVisible: Boolean(
                  evidence && Array.isArray(evidence.sources) && evidence.sources.some((source) => Boolean(safeExternalUrl(source.url)))
                )
              })
            }));
          });
        });
        if (workspaceClose) {
          workspaceClose.addEventListener("click", () => {
            const workspace = document.getElementById("nexus-workspace");
            if (workspace) workspace.hidden = true;
            document.body.classList.remove("nexus-workspace-open");
            orb.focus();
          });
        }
        document.addEventListener("click", (event) => {
          const button = event.target && event.target.closest && event.target.closest("button");
          if (!button) return;
          if (button.dataset.resumeAction === "print" || button.dataset.providerCardAction === "print") {
            window.print();
            return;
          }
          if (button.dataset.resumeAction === "download") {
            const form = button.closest("form");
            const fields = form ? [...form.querySelectorAll("input, textarea")].map(
              (field) => `${field.getAttribute("aria-label") || "Field"}: ${field.value || ""}`
            ) : [];
            const blob = new Blob([fields.join("\n\n")], { type: "text/plain;charset=utf-8" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "nexus-resume.txt";
            link.click();
            URL.revokeObjectURL(link.href);
            return;
          }
          if (button.dataset.providerCardAction === "read") {
            const card = button.closest("[data-nexus-visual='provider-card']");
            const text = card && card.innerText || "";
            if (text) runtime.speakText(text, "provider-card-read");
          }
        });
        const receipts = [];
        let preferences = DEFAULT_EXPERIENCE_PREFERENCES;
        try {
          preferences = normalizeExperiencePreferences(JSON.parse(
            localStorage.getItem("nexus.genesis.preferences") || "{}"
          ));
        } catch {
          preferences = DEFAULT_EXPERIENCE_PREFERENCES;
        }
        captionsControl.checked = preferences.captions;
        slowSpeechControl.checked = preferences.pace === "slow";
        volumeControl.value = String(Math.round(preferences.volume * 100));
        const remoteAudio = createRemoteAudioUnlock({ audioElement: audio });
        remoteAudio.setVolume(preferences.volume);
        caption.hidden = !preferences.captions;
        let guidedEntryController = null;
        const onReceipt = (receipt) => {
          receipts.push(receipt);
          const workspaceStatusLabels = {
            "conversation.listening": "Nexus is listening in the background",
            "conversation.response-started": "Nexus is thinking\u2026",
            "conversation.audio-started": "Nexus is speaking\u2026",
            "conversation.response-finished": "Nexus is listening in the background",
            "workspace.visible": "Nexus is listening in the background",
            "realtime.error": "Nexus voice needs attention"
          };
          if (workspaceVoiceStatus && workspaceStatusLabels[receipt.type]) {
            workspaceVoiceStatus.textContent = workspaceStatusLabels[receipt.type];
          }
          if (receipt.type === "realtime.remote-track") {
            const attached = remoteAudio.attach(receipt.detail && receipt.detail.stream);
            if (attached) {
              receipts.push(Object.freeze({
                schema: "nexus.runtime.receipt.v1",
                type: "audio.web-audio-attached",
                detail: Object.freeze({}),
                at: (/* @__PURE__ */ new Date()).toISOString()
              }));
            }
          }
          const label = statusFromReceipt(receipt);
          if (label) {
            status.textContent = label;
            status.dataset.state = label.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");
          }
          if (receipt.type === "transcript.final") {
            caption.textContent = receipt.detail.transcript || "";
            caption.hidden = !preferences.captions;
            const transcript = receipt.detail.transcript || "";
            if (!isDraftReopenCommand(transcript) && visibleFormFields().length > 0) {
              guidedEntryController?.execute(transcript, {
                requestId: receipt.detail.requestId || receipt.detail.itemId || crypto.randomUUID()
              }).then((formResult) => {
                if (formResult?.handled && formResult.action === "readback" && formResult.readback) {
                  runtime.speakText(formResult.readback, "voice-form-readback");
                }
              });
            }
          }
          if (receipt.type === "conversation.return-to-listening") replayControl.disabled = false;
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
            if (!response.ok) throw new Error(`Realtime SDP exchange failed (${response.status}).`);
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
        guidedEntryController = new NexusGuidedEntryTransactionController({
          fields: visibleFormFields,
          storage: localStorage,
          context: () => {
            const workspace = document.getElementById("nexus-workspace");
            let userId = config.userId || sessionStorage.getItem("nexus.guided-entry.user");
            if (!userId) {
              userId = `session-${crypto.randomUUID()}`;
              sessionStorage.setItem("nexus.guided-entry.user", userId);
            }
            return {
              userId,
              processId: workspace?.dataset?.guidedEntryProcess || workspace?.dataset?.workspace || "current-form",
              documentId: workspace?.dataset?.document || "active-document"
            };
          },
          ensureAuthoritativeDocument: async () => visibleFormFields().length > 0,
          mountGeneration: (envelope) => {
            const form = visibleFormFields()[0]?.node?.closest?.("form");
            if (form) form.dataset.guidedEntryGeneration = envelope.generationId;
          },
          visibleGeneration: () => {
            const form = visibleFormFields()[0]?.node?.closest?.("form");
            return form?.dataset?.guidedEntryGeneration || null;
          },
          settleVisibleDocument: () => new Promise(
            (resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))
          ),
          onReceipt: (receipt) => {
            showVoiceFormReceipt(receipt);
            window.dispatchEvent(new CustomEvent("nexus.clean.receipt", { detail: receipt }));
          }
        });
        const guidedEntryForm = document.getElementById("nexus-guided-entry");
        if (guidedEntryForm) {
          guidedEntryForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            const input = guidedEntryForm.elements.command;
            const command = String(input?.value || "").trim();
            if (!command) return;
            const result = await guidedEntryController.execute(command);
            if (!result.handled) {
              if (result.clarificationRequired) {
                status.textContent = "Please name the field you want Nexus to update.";
              } else {
                await runtime.route(command);
              }
            }
            input.value = "";
          });
        }
        runtime.updateExperiencePreferences(preferences);
        function savePreferences(change) {
          preferences = runtime.updateExperiencePreferences({ ...preferences, ...change });
          localStorage.setItem("nexus.genesis.preferences", JSON.stringify(preferences));
        }
        captionsControl.addEventListener("change", () => {
          savePreferences({ captions: captionsControl.checked });
          caption.hidden = !captionsControl.checked;
        });
        slowSpeechControl.addEventListener("change", () => {
          savePreferences({ pace: slowSpeechControl.checked ? "slow" : "natural" });
        });
        volumeControl.addEventListener("input", () => {
          const volume = Number(volumeControl.value) / 100;
          remoteAudio.setVolume(volume);
          savePreferences({ volume });
        });
        replayControl.addEventListener("click", () => {
          try {
            runtime.replayLastResponse();
          } catch (error) {
            status.textContent = error.message;
          }
        });
        orb.addEventListener("click", async () => {
          if (runtime.started) {
            runtime.stop("user-stop");
            remoteAudio.close();
            orb.setAttribute("aria-pressed", "false");
            status.textContent = "Speak";
            return;
          }
          orb.disabled = true;
          try {
            await remoteAudio.unlock();
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
          stop: (reason) => {
            guidedEntryController?.cancelAll(reason || "runtime-stop");
            remoteAudio.close();
            return runtime.stop(reason);
          },
          route: (command) => runtime.route(command),
          certificationAudio: config.certification ? Object.freeze({
            begin() {
              const track = microphone.stream?.getAudioTracks?.()[0];
              if (!track || track.readyState !== "live") throw new Error("Physical microphone is not live.");
              track.enabled = false;
              realtime.send({
                type: "session.update",
                session: {
                  type: "realtime",
                  audio: { input: { turn_detection: null } }
                }
              });
            },
            send(chunks) {
              runtime.cancelActiveResponse("certification-next-command");
              realtime.send({ type: "input_audio_buffer.clear" });
              for (const audio2 of chunks) {
                realtime.send({ type: "input_audio_buffer.append", audio: audio2 });
              }
              realtime.send({ type: "input_audio_buffer.commit" });
              runtime.requestResponse({}, "certification-command");
            },
            end() {
              const track = microphone.stream?.getAudioTracks?.()[0];
              if (track && track.readyState === "live") track.enabled = true;
              runtime.configureSession();
            }
          }) : null,
          snapshot: () => Object.freeze({ state: machine.snapshot(), receipts: [...receipts] })
        });
      }
      if (typeof document !== "undefined") {
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", boot, { once: true });
        } else {
          boot();
        }
      }
      module.exports = {
        createWorkspaceAdapter,
        createRemoteAudioUnlock,
        renderWorkspace,
        renderSpecializedVisual,
        visualIntent,
        isDraftReopenCommand,
        guidedEntryProcessForDocument,
        isGuidedEntryFollowUp,
        shouldPreserveGuidedDocument,
        weatherDescription,
        fetchVisualData,
        renderEvidenceWorkspace,
        researchEvidence,
        resolveVisibleMap,
        resetVisibleMapStateForTest,
        stabilizeVisibleMapLayout,
        safeExternalUrl,
        isEvidenceDisplayFollowUp,
        musicSearchFromCommand,
        statusFromReceipt
      };
    }
  });
  require_nexus_clean_entry();
})();
