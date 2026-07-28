"use strict";

const assert = require("node:assert/strict");
const {
  DEFAULT_EXPERIENCE_PREFERENCES,
  SUPPORTED_LANGUAGES,
  WAKE_PHRASES,
  createPresenceInstructions,
  detectWakePhrase,
  normalizeExperiencePreferences
} = require("../nexus-core/experience-profile");
const { NexusBrowserRuntime } = require("../nexus-core/browser-runtime");
const { createRemoteAudioUnlock, renderWorkspace } = require("../browser/nexus-clean-entry");

assert.deepEqual(SUPPORTED_LANGUAGES, ["en", "es", "fr", "sw", "ar", "pt"]);
assert.deepEqual(WAKE_PHRASES, ["nexus", "hello nexus", "hey nexus"]);
assert.equal(detectWakePhrase("Hello Nexus!"), "hello nexus");
assert.equal(detectWakePhrase("Hey Nexus open Maps"), "hey nexus");
assert.equal(detectWakePhrase("Please open Maps"), null);

const preferences = normalizeExperiencePreferences({
  pace: "slow",
  volume: 2,
  captions: false,
  language: "sw"
});
assert.equal(preferences.pace, "slow");
assert.equal(preferences.volume, 1);
assert.equal(preferences.captions, false);
assert.equal(preferences.language, "sw");

const instructions = createPresenceInstructions(preferences);
assert.match(instructions, /natural British woman/);
assert.match(instructions, /Hello Ron, how can I help\?/);
assert.match(instructions, /English, Spanish, French, Swahili, Arabic, or Portuguese|language code sw/);
assert.match(instructions, /Never claim/);
assert.match(instructions, /clickable web links/);
assert.match(instructions, /never say that you cannot display links or websites/);

const sent = [];
const receipts = [];
const runtime = new NexusBrowserRuntime({
  foundation: {
    start() {},
    stop() {},
    machine: { snapshot: () => ({ state: "ready" }) }
  },
  realtime: { send: (event) => sent.push(event) },
  audioElement: {},
  openWorkspace: async () => ({ visible: true }),
  onReceipt: (receipt) => receipts.push(receipt)
});
runtime.updateExperiencePreferences({ pace: "slow", volume: 0.4, language: "fr" });
assert.equal(runtime.preferences.voiceIdentity, "british-female");
assert.match(runtime.instructions, /language code fr/);
assert.equal(receipts.at(-1).type, "experience.preferences-updated");

runtime.started = true;
runtime.replayLastResponse();
assert.equal(sent.at(-1).type, "response.create");
assert.equal(receipts.at(-1).type, "conversation.replay-requested");

runtime.handleRealtimeEvent({
  type: "conversation.item.input_audio_transcription.completed",
  transcript: "Nexus, open Maps"
});
assert.equal(receipts.at(-1).type, "conversation.wake-phrase");
assert.equal(receipts.at(-1).detail.phrase, "nexus");

assert.equal(DEFAULT_EXPERIENCE_PREFERENCES.voice, "marin");

const gain = { gain: { value: 1 }, connect() {} };
const context = {
  state: "running",
  destination: {},
  createGain: () => gain,
  createMediaStreamSource: () => ({ connect(target) { this.target = target; }, disconnect() {} }),
  close: async () => {}
};
const audioElement = { setAttribute() {}, muted: false, volume: 1 };
const remoteAudio = createRemoteAudioUnlock({
  windowObject: { AudioContext: function AudioContext() { return context; } },
  audioElement
});
remoteAudio.unlock();
remoteAudio.setVolume(0.35);
assert.equal(gain.gain.value, 0.35);
assert.equal(audioElement.volume, 0.35);
assert.equal(remoteAudio.attach({ id: "remote-stream" }), true);

const element = () => ({ dataset: {}, hidden: true, textContent: "", src: "", href: "" });
const mapElements = {
  "nexus-workspace": element(),
  "nexus-workspace-title": element(),
  "nexus-workspace-command": element(),
  "nexus-map-surface": element(),
  "nexus-map-canvas": element(),
  "nexus-map-link": element(),
  "nexus-app-surface": { ...element(), innerHTML: "" },
  "nexus-evidence-surface": { ...element(), innerHTML: "" },
  "nexus-music-surface": element(),
  "nexus-music-frame": element(),
  "nexus-music-link": element()
};
assert.equal(renderWorkspace({
  workspace: "maps",
  command: "Nexus, show me a map of Kenya",
  documentObject: { getElementById: (id) => mapElements[id] || null }
}), true);
assert.equal(mapElements["nexus-workspace"].hidden, false);
assert.equal(mapElements["nexus-workspace"].dataset.workspace, "maps");
assert.equal(mapElements["nexus-workspace-title"].textContent, "Maps / Field Visit");
assert.equal(mapElements["nexus-map-surface"].hidden, false);
assert.equal(mapElements["nexus-map-canvas"].hidden, true);

const commands = [
  ["agriculture", "Help me diagnose my maize crop"],
  ["health", "Record my blood pressure"],
  ["telehealth", "Start a telehealth intake"],
  ["mobile-clinic", "Find a mobile clinic visit"],
  ["pharmacy", "Open pharmacy support"],
  ["learning", "Find a literacy course"],
  ["workforce", "Search farming jobs in Kenya"],
  ["marketplace", "Sell 50 bags of maize"],
  ["reminders", "Remind me to take my medicine"],
  ["offline", "Show my offline queue"],
  ["live-knowledge", "Search the internet for today's Kenya weather"]
];
for (const [workspace, command] of commands) {
  assert.equal(renderWorkspace({
    workspace,
    command,
    documentObject: { getElementById: (id) => mapElements[id] || null }
  }), true);
  assert.equal(mapElements["nexus-workspace"].dataset.workspace, workspace);
  assert.equal(mapElements["nexus-workspace"].dataset.populated, "true");
  const visibleCommand = command.replace(/'/g, "&#39;");
  if (workspace !== "live-knowledge") {
    assert.match(mapElements["nexus-app-surface"].innerHTML, new RegExp(visibleCommand.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(mapElements["nexus-app-surface"].innerHTML, /<input/);
    assert.match(mapElements["nexus-app-surface"].innerHTML, /<button/);
  } else {
    assert.equal(mapElements["nexus-evidence-surface"].hidden, true);
  }
}
assert.equal(renderWorkspace({
  workspace: "music",
  command: "Play Kenyan soul music",
  documentObject: { getElementById: (id) => mapElements[id] || null }
}), true);
assert.equal(mapElements["nexus-workspace"].dataset.workspace, "music");
assert.equal(mapElements["nexus-workspace"].dataset.populated, "true");
assert.equal(mapElements["nexus-music-surface"].hidden, false);
assert.match(mapElements["nexus-music-frame"].src, /youtube-nocookie\.com\/embed/);
assert.match(mapElements["nexus-music-frame"].src, /autoplay=1/);
assert.doesNotMatch(mapElements["nexus-music-frame"].src, /listType=search/);
assert.match(mapElements["nexus-music-link"].href, /youtube\.com\/results/);
console.log("Nexus protected experience phase one: PASS");
