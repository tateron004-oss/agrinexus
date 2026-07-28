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
const { createRemoteAudioUnlock } = require("../browser/nexus-clean-entry");

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
console.log("Nexus protected experience phase one: PASS");
