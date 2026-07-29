"use strict";

const assert = require("node:assert/strict");
const { NexusBrowserRuntime } = require("../nexus-core/browser-runtime");

const sent = [];
const receipts = [];
const opened = [];
const subscribers = [];
const machine = {
  snapshot: () => ({ state: "connected" })
};
const foundation = {
  machine,
  start: async () => ({ connection: { sessionId: "session-1" } }),
  stop() {}
};
const realtime = {
  send(event) {
    sent.push(event);
  },
  subscribe(callback) {
    subscribers.push(callback);
    return () => {};
  }
};
const runtime = new NexusBrowserRuntime({
  foundation,
  realtime,
  audioElement: { play: () => Promise.resolve(), srcObject: null },
  openWorkspace: async ({ workspace, command }) => {
    opened.push({ workspace, command });
    return { visible: true, id: `visible-${workspace}` };
  },
  onReceipt: receipt => receipts.push(receipt)
});

runtime.started = true;

async function verifySpokenFallback(command, workspace) {
  await runtime.handleRealtimeEvent({
    type: "conversation.item.input_audio_transcription.completed",
    transcript: command
  });
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(opened.at(-1).workspace, workspace);
  assert.equal(opened.at(-1).command, command);
}

(async () => {
  await verifySpokenFallback("Nexus, show today's weather in Nairobi.", "live-knowledge");
  await verifySpokenFallback("Nexus, reset the map and show Mombasa.", "maps");
  await verifySpokenFallback("Nexus, open Agriculture Help.", "agriculture");
  await verifySpokenFallback("Nexus, show pictures of possible maize diseases.", "agriculture");
  await verifySpokenFallback("Nexus, help me create a resume.", "workforce");
  await verifySpokenFallback("Nexus, show me the websites and sources.", "live-knowledge");

  const beforeDuplicate = opened.length;
  const duplicateCommand = "Nexus, open Agriculture Help.";
  await runtime.handleRealtimeEvent({
    type: "conversation.item.input_audio_transcription.completed",
    transcript: duplicateCommand
  });
  await runtime.route(duplicateCommand, "call-1");
  assert.equal(opened.length, beforeDuplicate);
  assert(sent.some(event => event.type === "conversation.item.create" && event.item.call_id === "call-1"));
  assert(sent.some(event => event.type === "response.create"));
  assert(receipts.some(receipt => receipt.type === "workspace.visible"));

  console.log("Nexus voice visual fallback: PASS");
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
