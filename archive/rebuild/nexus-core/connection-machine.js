"use strict";

const { assertTransition, createReceipt } = require("./contracts");

class NexusConnectionMachine {
  constructor({ onReceipt = () => {} } = {}) {
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
}

module.exports = { NexusConnectionMachine };
