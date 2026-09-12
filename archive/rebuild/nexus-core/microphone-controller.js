"use strict";

class NexusMicrophoneController {
  constructor({ mediaDevices, ownerId = "nexus-primary", onReceipt = () => {} } = {}) {
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
      at: new Date().toISOString()
    }));
  }
}

function stopStream(stream) {
  if (!stream || typeof stream.getTracks !== "function") return;
  for (const track of stream.getTracks()) track.stop();
}

module.exports = { NexusMicrophoneController };
