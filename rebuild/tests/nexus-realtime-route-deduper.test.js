"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { install, isDirectApplicationCommand, isDirectResumeCommand, normalizeAgriculturalTranscript, normalizeRealtimeMessageData } = require("../browser/nexus-realtime-route-deduper");

const indexSource = fs.readFileSync(path.resolve(__dirname, "../browser/index.html"), "utf8");
assert.ok(indexSource.indexOf("nexus-realtime-route-deduper.js") < indexSource.indexOf("nexus-clean.bundle.js"));

assert.equal(isDirectResumeCommand("Nexus, help me create a résumé."), true);
assert.equal(isDirectResumeCommand("Nexus, help me create a resume."), true);
assert.equal(isDirectResumeCommand("Nexus, set résumé full name to Ron Tate."), false);
assert.equal(isDirectResumeCommand("Nexus, sell 50 bags of maize."), false);
assert.equal(isDirectApplicationCommand("Nexus, record my blood pressure 140 over 90."), true);
assert.equal(isDirectApplicationCommand("Nexus, show my offline queue."), true);
assert.equal(isDirectApplicationCommand("Nexus, set queued request to find maize treatment guidance."), false);
assert.equal(isDirectApplicationCommand("Nexus sell fifty bags of maize."), false);
assert.equal(isDirectApplicationCommand("Nexus sell 50 bags of maize."), true);
assert.equal(isDirectApplicationCommand("How are you today?"), false);
assert.equal(normalizeAgriculturalTranscript("Nexus, show pictures of possible Mays diseases."), "Nexus, show pictures of possible maize diseases.");
assert.equal(normalizeAgriculturalTranscript("Nexus, find Mays' treatment guidance."), "Nexus, find maize treatment guidance.");
assert.equal(normalizeAgriculturalTranscript("Nexus, find Maze's treatment guidance."), "Nexus, find maize treatment guidance.");
assert.equal(normalizeAgriculturalTranscript("Nexus, reset the map to Mays Landing."), "Nexus, reset the map to Mays Landing.");
assert.equal(JSON.parse(normalizeRealtimeMessageData(JSON.stringify({
  type: "conversation.item.input_audio_transcription.completed", item_id: "input-ag", transcript: "Nexus, show pictures of possible Mase diseases."
}))).transcript, "Nexus, show pictures of possible maize diseases.");
assert.equal(JSON.parse(normalizeRealtimeMessageData(JSON.stringify({
  type: "conversation.item.input_audio_transcription.completed", item_id: "input-edit", transcript: "Nexus, set queued request to find Mays' treatment guidance."
}))).transcript, "Nexus, set queued request to find Mays' treatment guidance.");

const sent = [];
const listeners = new Map();
const channel = {
  readyState: "open",
  addEventListener(type, listener) {
    const entries = listeners.get(type) || [];
    entries.push(listener);
    listeners.set(type, entries);
  },
  send(payload) { sent.push(JSON.parse(payload)); }
};
function PeerConnection() {}
PeerConnection.prototype.createDataChannel = function createDataChannel() { return channel; };
const dispatched = [];
class CustomEvent {
  constructor(type, options) { this.type = type; this.detail = options.detail; }
}
const windowObject = {
  RTCPeerConnection: PeerConnection,
  CustomEvent,
  dispatchEvent(event) { dispatched.push(event); }
};

assert.equal(install(windowObject), true);
new PeerConnection().createDataChannel("oai-events");
let coreData = "";
let coreMessageCount = 0;
channel.addEventListener("message", (event) => { coreData = event.data; coreMessageCount += 1; });
const receive = (message) => {
  const event = { data: JSON.stringify(message) };
  for (const listener of listeners.get("message") || []) listener(event);
};
for (const [itemId, delta] of [["input-1", "Nexus, help"], ["input-1", " me create a resume."]]) {
  receive({ type: "conversation.item.input_audio_transcription.delta", item_id: itemId, delta });
}
receive({
  type: "response.output_item.added",
  response_id: "response-1",
  item: { type: "function_call", name: "route_nexus_command", call_id: "call-1" }
});
assert.deepEqual(sent, []);
receive({
  type: "response.function_call_arguments.done",
  response_id: "response-1",
  call_id: "call-1",
  name: "route_nexus_command",
  arguments: "{ \"command\": \"help me create a resume\" }"
});
assert.equal(sent[0].type, "conversation.item.create");
assert.equal(sent[0].item.call_id, "call-1");
assert.equal(JSON.parse(sent[0].item.output).code, "duplicate-route-coalesced");
assert.equal(dispatched[0].type, "nexus.realtime.route-deduplicated");

receive({ type: "conversation.item.input_audio_transcription.completed", item_id: "input-ag", transcript: "Nexus, show possible Mays diseases." });
assert.equal(JSON.parse(coreData).transcript, "Nexus, show possible maize diseases.");

sent.length = 0;
receive({ type: "conversation.item.input_audio_transcription.completed", item_id: "input-2", transcript: "Nexus, set resume full name to Ron Tate." });
receive({
  type: "response.output_item.added",
  response_id: "response-2",
  item: { type: "function_call", name: "route_nexus_command", call_id: "call-2" }
});
assert.deepEqual(sent, []);

for (const [itemId, delta] of [["input-3", "Nexus, record"], ["input-3", " my blood pressure 140 over 90."]]) {
  receive({ type: "conversation.item.input_audio_transcription.delta", item_id: itemId, delta });
}
receive({
  type: "response.output_item.added",
  response_id: "response-3",
  item: { type: "function_call", name: "route_nexus_command", call_id: "call-3" }
});
assert.deepEqual(sent, []);
const beforeCancelledCompletion = coreMessageCount;
receive({
  type: "response.function_call_arguments.done",
  response_id: "response-3",
  call_id: "call-3",
  name: "route_nexus_command",
  arguments: "{ \"command\":"
});
assert.equal(sent[0].type, "conversation.item.create");
assert.equal(coreMessageCount, beforeCancelledCompletion);

sent.length = 0;
receive({ type: "conversation.item.input_audio_transcription.delta", item_id: "input-4", delta: "Nexus," });
receive({
  type: "response.output_item.added",
  response_id: "response-4",
  item: { type: "function_call", name: "route_nexus_command", call_id: "call-4" }
});
receive({ type: "conversation.item.input_audio_transcription.delta", item_id: "input-4", delta: " record my blood pressure one hundred and forty over ninety." });
const beforeLateOwnership = coreMessageCount;
receive({
  type: "response.function_call_arguments.done",
  response_id: "response-4",
  call_id: "call-4",
  name: "route_nexus_command",
  arguments: "{ \"command\": \"record my blood pressure 140 over 90\" }"
});
assert.equal(sent[0].type, "conversation.item.create");
assert.equal(coreMessageCount, beforeLateOwnership);

console.log("Nexus realtime route deduper: PASS");
