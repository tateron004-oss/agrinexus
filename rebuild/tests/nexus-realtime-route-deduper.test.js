"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { install, isDirectResumeCommand, normalizeAgriculturalTranscript, normalizeRealtimeMessageData } = require("../browser/nexus-realtime-route-deduper");

const indexSource = fs.readFileSync(path.resolve(__dirname, "../browser/index.html"), "utf8");
assert.ok(indexSource.indexOf("nexus-realtime-route-deduper.js") < indexSource.indexOf("nexus-clean.bundle.js"));

assert.equal(isDirectResumeCommand("Nexus, help me create a résumé."), true);
assert.equal(isDirectResumeCommand("Nexus, help me create a resume."), true);
assert.equal(isDirectResumeCommand("Nexus, set résumé full name to Ron Tate."), false);
assert.equal(isDirectResumeCommand("Nexus, sell 50 bags of maize."), false);
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
channel.addEventListener("message", (event) => { coreData = event.data; });
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
assert.deepEqual(sent, [{ type: "response.cancel", response_id: "response-1" }]);
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

console.log("Nexus realtime route deduper: PASS");
