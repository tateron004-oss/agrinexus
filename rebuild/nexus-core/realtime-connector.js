"use strict";

class NexusRealtimeConnector {
  constructor({
    createPeerConnection,
    fetchSession,
    exchangeSdp,
    readyTimeoutMs = 15000,
    onEvent = () => {}
  } = {}) {
    if (typeof createPeerConnection !== "function") throw new Error("createPeerConnection is required.");
    if (typeof fetchSession !== "function") throw new Error("fetchSession is required.");
    if (typeof exchangeSdp !== "function") throw new Error("exchangeSdp is required.");
    this.createPeerConnection = createPeerConnection;
    this.fetchSession = fetchSession;
    this.exchangeSdp = exchangeSdp;
    this.readyTimeoutMs = readyTimeoutMs;
    this.onEvent = onEvent;
    this.subscribers = new Set();
    this.peer = null;
    this.channel = null;
  }

  subscribe(callback) {
    if (typeof callback !== "function") throw new Error("A Realtime event subscriber must be a function.");
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }

  async connect({ stream, track, sessionToken, onSessionIssued = () => {} }) {
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
      at: new Date().toISOString()
    });
    this.onEvent(receipt);
    for (const subscriber of this.subscribers) subscriber(receipt);
  }
}

module.exports = { NexusRealtimeConnector };
