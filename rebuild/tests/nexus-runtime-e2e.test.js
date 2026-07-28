"use strict";

const assert = require("node:assert/strict");
const { NexusSessionAuthority } = require("../nexus-core/session-authority");
const { NexusVoiceSessionService } = require("../nexus-core/voice-session-service");
const { NexusBrowserRuntime } = require("../nexus-core/browser-runtime");
const { ROUTES } = require("../nexus-core/router");

async function main() {
  const authority = new NexusSessionAuthority({
    secret: "nexus-clean-runtime-e2e-secret-000000001"
  });
  const issued = authority.issue({ userId: "ron", roles: ["standard-user"] });
  const service = new NexusVoiceSessionService({
    sessionAuthority: authority,
    createRealtimeSession: async ({ model, userId }) => ({
      value: "ek_clean_test",
      expires_at: 9999999999,
      session: { id: `rt-${userId}` },
      model
    })
  });
  await assert.rejects(() => service.issue({}), /Bearer/);
  const ephemeral = await service.issue({ authorization: `Bearer ${issued.token}` });
  assert.equal(ephemeral.sessionId, "rt-ron");
  assert.equal(ephemeral.clientSecret, "ek_clean_test");

  const sent = [];
  const peerListeners = {};
  const foundation = {
    machine: { snapshot: () => ({ state: "connected" }) },
    async start() {
      return {
        connection: {
          sessionId: "rt-ron",
          peer: { addEventListener: (type, callback) => { peerListeners[type] = callback; } }
        }
      };
    },
    recoverCalls: 0,
    async recover() {
      this.recoverCalls += 1;
      return {
        connection: {
          sessionId: "rt-ron-recovered",
          peer: { addEventListener: (type, callback) => { peerListeners[type] = callback; } }
        }
      };
    },
    stopReason: null,
    stop(reason) { this.stopReason = reason; }
  };
  let eventSubscriber = null;
  const realtime = {
    send: (event) => sent.push(event),
    subscribe(callback) {
      eventSubscriber = callback;
      return () => { eventSubscriber = null; };
    }
  };
  const audioElement = {
    srcObject: null,
    plays: 0,
    play() { this.plays += 1; return Promise.resolve(); }
  };
  const receipts = [];
  const opened = [];
  const runtime = new NexusBrowserRuntime({
    foundation,
    realtime,
    audioElement,
    openWorkspace: async (request) => {
      opened.push(request);
      return { visible: true, id: `ack-${request.workspace}` };
    },
    onReceipt: (receipt) => receipts.push(receipt)
  });

  await runtime.start({ sessionToken: issued.token, userGesture: true });
  assert.equal(sent[0].type, "session.update");
  assert.deepEqual(sent[0].session.output_modalities, ["audio"]);
  assert.equal(sent[0].session.audio.input.turn_detection.interrupt_response, true);
  assert.equal(sent[0].session.tools[0].name, "route_nexus_command");

  const remoteStream = { id: "remote-audio-1" };
  eventSubscriber({
    type: "realtime.remote-track",
    detail: { stream: remoteStream }
  });
  assert.equal(audioElement.srcObject, remoteStream);
  assert.equal(audioElement.plays, 1);

  const commands = [
    ["agriculture", "Help me diagnose my maize crop"],
    ["health", "Record my blood pressure"],
    ["telehealth", "Start a telehealth intake"],
    ["mobile-clinic", "Find a mobile clinic visit"],
    ["pharmacy", "Open pharmacy support"],
    ["learning", "Find a literacy course"],
    ["workforce", "Search farming jobs in Kenya"],
    ["marketplace", "Sell 50 bags of maize"],
    ["maps", "Plan a route from Nairobi to Nakuru"],
    ["music", "Play Kenyan music"],
    ["reminders", "Remind me to take my medicine"],
    ["offline", "Show my offline queue"],
    ["live-knowledge", "Search the internet for today's Kenya weather"]
  ];
  assert.equal(commands.length, ROUTES.length);
  for (const [workspace, command] of commands) {
    const result = await runtime.route(command);
    assert.equal(result.workspace, workspace);
    assert.equal(result.acknowledgement.visible, true);
  }
  assert.equal(opened.length, 13);

  eventSubscriber({
    type: "realtime.data-message",
    detail: { data: JSON.stringify({
    type: "response.function_call_arguments.done",
    name: "route_nexus_command",
    call_id: "call-map-1",
    arguments: JSON.stringify({ command: "Open the map of Kenya" })
    }) }
  });
  await new Promise((resolve) => setImmediate(resolve));
  assert.ok(sent.some((event) => event.type === "conversation.item.create" && event.item.call_id === "call-map-1"));
  assert.ok(sent.some((event) => event.type === "response.create"));

  await runtime.handleRealtimeEvent({ type: "input_audio_buffer.speech_started" });
  await runtime.handleRealtimeEvent({ type: "input_audio_buffer.speech_stopped" });
  await new Promise((resolve) => setTimeout(resolve, 1250));
  assert.ok(sent.some((event) => event.type === "response.create"));
  await runtime.handleRealtimeEvent({ type: "response.created" });
  await runtime.handleRealtimeEvent({ type: "response.output_audio.delta" });
  await runtime.handleRealtimeEvent({ type: "response.output_audio.done" });
  await runtime.handleRealtimeEvent({ type: "error", error: { code: "voice_test", message: "test error" } });
  assert.ok(receipts.some((receipt) => receipt.type === "conversation.barge-in"));
  assert.ok(receipts.some((receipt) => receipt.type === "conversation.processing"));
  assert.ok(receipts.some((receipt) => receipt.type === "conversation.response-requested"));
  assert.ok(receipts.some((receipt) => receipt.type === "conversation.speaking"));
  assert.ok(receipts.some((receipt) => receipt.type === "conversation.return-to-listening"));
  assert.ok(receipts.some((receipt) => receipt.type === "realtime.error"));
  assert.equal(receipts.filter((receipt) => receipt.type === "workspace.visible").length, 14);

  eventSubscriber({
    type: "realtime.connection-state",
    detail: { state: "disconnected" }
  });
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(foundation.recoverCalls, 1);
  assert.ok(receipts.some((receipt) => receipt.type === "runtime.recovered"));

  runtime.stop("test-complete");
  assert.equal(foundation.stopReason, "test-complete");
  assert.equal(audioElement.srcObject, null);
  assert.equal(eventSubscriber, null);

  console.log("Nexus clean runtime end-to-end commands: PASS");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
