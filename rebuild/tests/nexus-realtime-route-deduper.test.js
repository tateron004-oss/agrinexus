"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { routeCommand } = require("../nexus-core/router");
const { install, isDirectApplicationCommand, isDirectResumeCommand, normalizeAgriculturalTranscript, normalizeApplicationReopenTranscript, normalizeFieldEditTranscript, normalizeMarketplaceTranscript, normalizeRecipeTranscript, normalizeRealtimeMessageData, normalizeWakeTranscript } = require("../browser/nexus-realtime-route-deduper");

const indexSource = fs.readFileSync(path.resolve(__dirname, "../browser/index.html"), "utf8");
assert.ok(indexSource.indexOf("nexus-realtime-route-deduper.js") < indexSource.indexOf("nexus-clean.bundle.js"));

assert.equal(isDirectResumeCommand("Nexus, help me create a résumé."), true);
assert.equal(isDirectResumeCommand("Nexus, help me create a resume."), true);
assert.equal(isDirectResumeCommand("Nexus, set résumé full name to Ron Tate."), false);
assert.equal(isDirectResumeCommand("Nexus, sell 50 bags of maize."), false);
assert.equal(isDirectApplicationCommand("Nexus, record my blood pressure 140 over 90."), true);
assert.equal(isDirectApplicationCommand("Nexus, show my offline queue."), true);
assert.equal(isDirectApplicationCommand("Nexus, set queued request to find maize treatment guidance."), false);
assert.equal(isDirectApplicationCommand("Nexus, show an apple pie recipe with ingredients, steps, and sources."), false);
assert.equal(isDirectApplicationCommand("Nexus, show sources for an apple pie recipe with ingredients and steps."), true);
assert.equal(isDirectApplicationCommand("Nexus sell fifty bags of maize."), false);
assert.equal(isDirectApplicationCommand("Nexus sell 50 bags of maize."), true);
assert.equal(isDirectApplicationCommand("How are you today?"), false);
assert.equal(normalizeAgriculturalTranscript("Nexus, show pictures of possible Mays diseases."), "Nexus, show pictures of possible maize diseases.");
assert.equal(normalizeAgriculturalTranscript("Nexus, show me pictures of possible meas diseases."), "Nexus, show me pictures of possible maize diseases.");
assert.equal(normalizeAgriculturalTranscript("Nexus, show me pictures of possible measles diseases."), "Nexus, show me pictures of possible maize diseases.");
assert.equal(normalizeAgriculturalTranscript("Nexus, show me pictures of possible mazed diseases."), "Nexus, show me pictures of possible maize diseases.");
assert.equal(normalizeAgriculturalTranscript("Nexus, find Mays' treatment guidance."), "Nexus, find maize treatment guidance.");
assert.equal(normalizeAgriculturalTranscript("Nexus, find Maze's treatment guidance."), "Nexus, find maize treatment guidance.");
assert.equal(normalizeAgriculturalTranscript("Nexus, reset the map to Mays Landing."), "Nexus, reset the map to Mays Landing.");
assert.equal(normalizeMarketplaceTranscript("Nexus sell fifty bags of maize."), "Nexus sell 50 bags of maize.");
assert.equal(normalizeMarketplaceTranscript("Nexus shall fifty bags of maize."), "Nexus sell 50 bags of maize.");
assert.equal(normalizeMarketplaceTranscript("Nexus shall we review fifty bags of maize?"), "Nexus shall we review fifty bags of maize?");
assert.equal(normalizeMarketplaceTranscript("Nexus, sell twenty-five crates of maize."), "Nexus, sell 25 crates of maize.");
assert.equal(normalizeMarketplaceTranscript("Nexus, change quantity to twenty bags."), "Nexus, change quantity to twenty bags.");
assert.equal(normalizeFieldEditTranscript("Nexus, changed date and time to tonight at 7:30 p.m."), "Nexus, change date and time to tonight at 7:30 p.m.");
assert.equal(normalizeFieldEditTranscript("Nexus, had supervised a team of eight employees to experience."), "Nexus, add supervised a team of eight employees to experience.");
assert.equal(normalizeFieldEditTranscript("Nexus, I had supervised a team before."), "Nexus, I had supervised a team before.");
assert.equal(normalizeFieldEditTranscript("Nexus, set symptoms or notes to notes."), "Nexus, set symptoms or notes to no symptoms.");
assert.equal(normalizeFieldEditTranscript("Nexus, set symptoms or notes to mild dizziness."), "Nexus, set symptoms or notes to mild dizziness.");
assert.equal(normalizeFieldEditTranscript("Nexus, set resumeFullName to Rauntate."), "Nexus, set resumeFullName to Ron Tate.");
assert.equal(normalizeFieldEditTranscript("Nexus, set resumeFullName to Rontate."), "Nexus, set resumeFullName to Ron Tate.");
assert.equal(normalizeFieldEditTranscript("Nexus, set resumeFullName to Jane Tate."), "Nexus, set resumeFullName to Jane Tate.");
assert.equal(normalizeFieldEditTranscript("The date and time changed to tonight."), "The date and time changed to tonight.");
assert.equal(normalizeApplicationReopenTranscript("Nexus: reopen agriculture help and keep the visible work space synchronized."), "Nexus: reopen agriculture help.");
assert.equal(normalizeApplicationReopenTranscript("Nexus, reopen this resume draft."), "Nexus, reopen this resume draft.");
assert.equal(normalizeWakeTranscript("Nextest, open the pilot evidence dashboard."), "Nexus, open the pilot evidence dashboard.");
assert.equal(normalizeWakeTranscript("Next, open the pilot evidence dashboard."), "Nexus, open the pilot evidence dashboard.");
assert.equal(normalizeWakeTranscript("Nexust, open pharmacy support."), "Nexus, open pharmacy support.");
assert.equal(normalizeWakeTranscript("Nextest, open my private notes."), "Nextest, open my private notes.");
assert.equal(normalizeWakeTranscript("Next, open my private notes."), "Next, open my private notes.");
assert.equal(normalizeRecipeTranscript("Nexus, show an apple pie recipe with ingredients, steps, and sources."), "Nexus, show sources for an apple pie recipe with ingredients and steps.");
assert.equal(normalizeRecipeTranscript("Next, show an apple pie recipe with ingredients, steps, and sources."), "Nexus, show sources for an apple pie recipe with ingredients and steps.");
assert.equal(routeCommand(normalizeRecipeTranscript("Nexus, show an apple pie recipe with ingredients, steps, and sources."), "connected").workspace, "live-knowledge");
assert.equal(routeCommand(normalizeRecipeTranscript("Next, show an apple pie recipe with ingredients, steps, and sources."), "connected").workspace, "live-knowledge");
assert.equal(JSON.parse(normalizeRealtimeMessageData(JSON.stringify({
  type: "conversation.item.input_audio_transcription.completed", item_id: "input-ag", transcript: "Nexus, show pictures of possible Mase diseases."
}))).transcript, "Nexus, show pictures of possible maize diseases.");
assert.equal(JSON.parse(normalizeRealtimeMessageData(JSON.stringify({
  type: "conversation.item.input_audio_transcription.completed", item_id: "input-ag-meas", transcript: "Nexus, show me pictures of possible meas diseases."
}))).transcript, "Nexus, show me pictures of possible maize diseases.");
assert.equal(JSON.parse(normalizeRealtimeMessageData(JSON.stringify({
  type: "conversation.item.input_audio_transcription.completed", item_id: "input-ag-measles", transcript: "Nexus, show me pictures of possible measles diseases."
}))).transcript, "Nexus, show me pictures of possible maize diseases.");
assert.equal(JSON.parse(normalizeRealtimeMessageData(JSON.stringify({
  type: "conversation.item.input_audio_transcription.completed", item_id: "input-ag-mazed", transcript: "Nexus, show me pictures of possible mazed diseases."
}))).transcript, "Nexus, show me pictures of possible maize diseases.");
assert.equal(JSON.parse(normalizeRealtimeMessageData(JSON.stringify({
  type: "conversation.item.input_audio_transcription.completed", item_id: "input-edit", transcript: "Nexus, set queued request to find Mays' treatment guidance."
}))).transcript, "Nexus, set queued request to find Mays' treatment guidance.");
assert.equal(JSON.parse(normalizeRealtimeMessageData(JSON.stringify({
  type: "conversation.item.input_audio_transcription.completed", item_id: "input-reminder-edit", transcript: "Nexus, changed date and time to tonight at 7:30 p.m."
}))).transcript, "Nexus, change date and time to tonight at 7:30 p.m.");
assert.equal(JSON.parse(normalizeRealtimeMessageData(JSON.stringify({
  type: "conversation.item.input_audio_transcription.completed", item_id: "input-resume-experience-drift", transcript: "Nexus, had supervised a team of eight employees to experience."
}))).transcript, "Nexus, add supervised a team of eight employees to experience.");
assert.equal(JSON.parse(normalizeRealtimeMessageData(JSON.stringify({
  type: "conversation.item.input_audio_transcription.completed", item_id: "input-symptoms-edit", transcript: "Nexus, set symptoms or notes to notes."
}))).transcript, "Nexus, set symptoms or notes to no symptoms.");
assert.equal(JSON.parse(normalizeRealtimeMessageData(JSON.stringify({
  type: "conversation.item.input_audio_transcription.completed", item_id: "input-resume-name", transcript: "Nexus, set resumeFullName to Rauntate."
}))).transcript, "Nexus, set resumeFullName to Ron Tate.");
assert.equal(JSON.parse(normalizeRealtimeMessageData(JSON.stringify({
  type: "conversation.item.input_audio_transcription.completed", item_id: "input-resume-name-collapsed", transcript: "Nexus, set resumeFullName to Rontate."
}))).transcript, "Nexus, set resumeFullName to Ron Tate.");
assert.equal(JSON.parse(normalizeRealtimeMessageData(JSON.stringify({
  type: "conversation.item.input_audio_transcription.completed", item_id: "input-agriculture-reopen", transcript: "Nexus: reopen agriculture help and keep the visible work space synchronized."
}))).transcript, "Nexus: reopen agriculture help.");
assert.equal(JSON.parse(normalizeRealtimeMessageData(JSON.stringify({
  type: "conversation.item.input_audio_transcription.completed", item_id: "input-pilot-wake", transcript: "Nextest, open the pilot evidence dashboard."
}))).transcript, "Nexus, open the pilot evidence dashboard.");
assert.equal(JSON.parse(normalizeRealtimeMessageData(JSON.stringify({
  type: "conversation.item.input_audio_transcription.completed", item_id: "input-pilot-next", transcript: "Next, open the pilot evidence dashboard."
}))).transcript, "Nexus, open the pilot evidence dashboard.");
assert.equal(JSON.parse(normalizeRealtimeMessageData(JSON.stringify({
  type: "conversation.item.input_audio_transcription.completed", item_id: "input-near-wake", transcript: "Nexust, open pharmacy support."
}))).transcript, "Nexus, open pharmacy support.");
assert.equal(JSON.parse(normalizeRealtimeMessageData(JSON.stringify({
  type: "conversation.item.input_audio_transcription.completed", item_id: "input-market", transcript: "Nexus sell fifty bags of maize."
}))).transcript, "Nexus sell 50 bags of maize.");
assert.equal(JSON.parse(normalizeRealtimeMessageData(JSON.stringify({
  type: "conversation.item.input_audio_transcription.completed", item_id: "input-market-drift", transcript: "Nexus shall fifty bags of maize."
}))).transcript, "Nexus sell 50 bags of maize.");
assert.equal(JSON.parse(normalizeRealtimeMessageData(JSON.stringify({
  type: "conversation.item.input_audio_transcription.completed", item_id: "input-recipe", transcript: "Nexus, show an apple pie recipe with ingredients, steps, and sources."
}))).transcript, "Nexus, show sources for an apple pie recipe with ingredients and steps.");
assert.equal(JSON.parse(normalizeRealtimeMessageData(JSON.stringify({
  type: "conversation.item.input_audio_transcription.completed", item_id: "input-recipe-next", transcript: "Next, show an apple pie recipe with ingredients, steps, and sources."
}))).transcript, "Nexus, show sources for an apple pie recipe with ingredients and steps.");

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
receive({ type: "conversation.item.input_audio_transcription.completed", item_id: "input-market-drift", transcript: "Nexus shall fifty bags of maize." });
receive({
  type: "response.function_call_arguments.done",
  response_id: "response-market-drift",
  call_id: "call-market-drift",
  name: "route_nexus_command",
  arguments: "{ \"command\": \"help with maize\" }"
});
assert.equal(sent[0].type, "conversation.item.create");
assert.equal(JSON.parse(sent[0].item.output).code, "duplicate-route-coalesced");
assert.equal(dispatched.at(-1).detail.command, "Nexus sell 50 bags of maize.");

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
