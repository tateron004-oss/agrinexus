"use strict";

const assert = require("node:assert/strict");
const { NexusSessionAuthority } = require("../nexus-core/session-authority");
const { NexusConnectionMachine } = require("../nexus-core/connection-machine");
const { NexusMicrophoneController } = require("../nexus-core/microphone-controller");
const { NexusRealtimeConnector } = require("../nexus-core/realtime-connector");
const { NexusVoiceFoundation } = require("../nexus-core/voice-foundation");

class EventTargetFake {
  constructor() {
    this.listeners = {};
  }
  addEventListener(type, callback) {
    this.listeners[type] = callback;
  }
}

class DataChannelFake extends EventTargetFake {
  constructor() {
    super();
    this.readyState = "open";
    this.sent = [];
  }
  send(value) {
    this.sent.push(value);
  }
  close() {
    this.readyState = "closed";
  }
}

class PeerFake extends EventTargetFake {
  constructor() {
    super();
    this.connectionState = "new";
    this.channel = new DataChannelFake();
    this.tracks = [];
  }
  createDataChannel() {
    return this.channel;
  }
  addTrack(track, stream) {
    this.tracks.push({ track, stream });
  }
  async createOffer() {
    return { type: "offer", sdp: "clean-offer" };
  }
  async setLocalDescription(value) {
    this.localDescription = value;
  }
  async setRemoteDescription(value) {
    this.remoteDescription = value;
    this.connectionState = "connected";
    this.listeners.connectionstatechange();
  }
  close() {
    this.connectionState = "closed";
  }
}

function liveAudio() {
  const track = {
    id: "physical-track-1",
    readyState: "live",
    enabled: true,
    stop() {
      this.readyState = "ended";
    }
  };
  return {
    track,
    stream: {
      getAudioTracks: () => [track],
      getTracks: () => [track]
    }
  };
}

async function main() {
  let now = Date.UTC(2026, 6, 28, 1, 0, 0);
  const authority = new NexusSessionAuthority({
    secret: "nexus-clean-foundation-test-secret-00000001",
    now: () => now
  });
  const issued = authority.issue({ userId: "ron", roles: ["standard-user"] });
  assert.equal(authority.verify(issued.token).userId, "ron");
  assert.throws(() => authority.verify(`${issued.token}x`), /signature/);

  const audio = liveAudio();
  let mediaRequests = 0;
  const receipts = [];
  const microphone = new NexusMicrophoneController({
    mediaDevices: {
      async getUserMedia() {
        mediaRequests += 1;
        return audio.stream;
      }
    },
    onReceipt: (receipt) => receipts.push(receipt)
  });
  await assert.rejects(() => microphone.acquire(), /user gesture/);

  const peers = [];
  const realtimeEvents = [];
  const realtime = new NexusRealtimeConnector({
    createPeerConnection: () => {
      const peer = new PeerFake();
      peers.push(peer);
      return peer;
    },
    fetchSession: async ({ sessionToken }) => {
      assert.equal(authority.verify(sessionToken).userId, "ron");
      return { clientSecret: "ek_test_redacted", sessionId: "realtime-clean-1" };
    },
    exchangeSdp: async ({ clientSecret, offerSdp }) => {
      assert.equal(clientSecret, "ek_test_redacted");
      assert.equal(offerSdp, "clean-offer");
      return "clean-answer";
    },
    onEvent: (event) => realtimeEvents.push(event)
  });

  const machine = new NexusConnectionMachine();
  const foundation = new NexusVoiceFoundation({
    sessionAuthority: authority,
    machine,
    microphone,
    realtime
  });
  const started = await foundation.start({ sessionToken: issued.token, userGesture: true });
  assert.equal(started.state.state, "connected");
  assert.equal(started.connection.sessionId, "realtime-clean-1");
  assert.equal(mediaRequests, 1);
  const peer = peers[0];
  assert.equal(peer.tracks[0].track.id, "physical-track-1");
  assert.equal(peer.remoteDescription.sdp, "clean-answer");
  assert.ok(receipts.some((receipt) => receipt.type === "microphone.acquired"));
  assert.ok(realtimeEvents.some((event) => event.type === "realtime.answer-applied"));
  assert.ok(realtimeEvents.some((event) => event.type === "realtime.connection-state" && event.detail.state === "connected"));
  assert.ok(realtimeEvents.some((event) => event.type === "realtime.ready"));

  realtime.send({ type: "response.create" });
  assert.deepEqual(JSON.parse(peer.channel.sent[0]), { type: "response.create" });

  const recovered = await foundation.recover({
    sessionToken: issued.token,
    reason: "test-interruption"
  });
  assert.equal(recovered.state.state, "connected");
  assert.equal(mediaRequests, 1);
  assert.equal(audio.track.readyState, "live");
  assert.equal(peers.length, 2);
  assert.ok(recovered.state.receipts.some((receipt) => receipt.to === "recovering"));

  foundation.stop();
  assert.equal(machine.snapshot().state, "closed");
  assert.equal(audio.track.readyState, "ended");

  now += 9 * 60 * 60 * 1000;
  assert.throws(() => authority.verify(issued.token), /expired/);

  console.log("Nexus clean voice foundation: PASS");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
