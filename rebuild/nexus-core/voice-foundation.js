"use strict";

class NexusVoiceFoundation {
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
}

module.exports = { NexusVoiceFoundation };
