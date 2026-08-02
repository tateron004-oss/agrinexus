"use strict";

const assert = require("node:assert/strict");
const { NexusBrowserRuntime } = require("../nexus-core/browser-runtime");

async function main() {
  const receipts = [];
  const sent = [];
  const opened = [];
  const intercepted = [];
  const foundation = {
    machine: { snapshot: () => ({ state: "connected" }) },
    start: async () => ({ connection: { sessionId: "ownership-test" } }),
    stop() {}
  };
  const runtime = new NexusBrowserRuntime({
    foundation,
    realtime: { send: (event) => sent.push(event) },
    audioElement: {},
    openWorkspace: async (request) => {
      opened.push(request);
      return { visible: true, populated: true, outcomeVerified: true };
    },
    interceptCommand: async (command, options) => {
      intercepted.push({ command, options });
      if (!/^set location to /i.test(command)) return { handled: false };
      return {
        handled: true,
        action: "update",
        field: "location",
        requestId: options.requestId || "transcript-location-edit"
      };
    },
    onReceipt: (receipt) => receipts.push(receipt)
  });

  const command = "set location to Nakuru, Kenya";
  await Promise.all([
    runtime.handleRealtimeEvent({
      type: "conversation.item.input_audio_transcription.completed",
      transcript: command
    }),
    runtime.handleRealtimeEvent({
      type: "response.function_call_arguments.done",
      name: "route_nexus_command",
      call_id: "location-edit-call",
      arguments: JSON.stringify({ command })
    })
  ]);

  assert.equal(intercepted.length, 1, "Transcript and tool call must share one Guided Entry owner.");
  assert.equal(opened.length, 0, "A consumed field edit must never fall through to Maps or another workspace.");
  assert.equal(
    receipts.filter((receipt) => receipt.type === "command.consumed-by-guided-entry").length,
    2,
    "Both Realtime paths must observe the same consumed transaction."
  );
  const output = sent.find((event) => (
    event.type === "conversation.item.create"
    && event.item.call_id === "location-edit-call"
  ));
  assert.ok(output, "Realtime must receive a tool result for a consumed function call.");
  assert.equal(JSON.parse(output.item.output).field, "location");

  const musicReceipts = [];
  const musicRoutes = [];
  const musicRuntime = new NexusBrowserRuntime({
    foundation,
    realtime: { send() {} },
    audioElement: {},
    openWorkspace: async (request) => {
      musicRoutes.push(request);
      return { visible: true, populated: true, outcomeVerified: true, outcomeKind: "music" };
    },
    onReceipt: (receipt) => musicReceipts.push(receipt)
  });
  await Promise.all([
    musicRuntime.handleCommand("play Stevie Wonder", "music-tool-call"),
    musicRuntime.handleCommand("Nexus, play Stevie Wonder.")
  ]);
  assert.equal(musicRoutes.length, 1, "Tool-call and punctuated final-transcript routes must share one visual transaction.");
  assert.equal(
    musicReceipts.filter((receipt) => receipt.type === "workspace.visible").length,
    1,
    "One spoken Music request must produce exactly one verified visible workspace."
  );

  console.log("Nexus Guided Entry and punctuated visual route ownership: PASS");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
