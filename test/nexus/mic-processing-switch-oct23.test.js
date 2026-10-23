"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// 23 October 2026: the owner hears the music through Kyro sound distorted, and not on its own on the same computer. The browser's echo cancelling, noise suppression and automatic volume (on by default) can change how everything else the
// computer plays sounds while the microphone is open. ?kyroMic=raw turns all three off (remembered), ?kyroMic=default turns them back on, so that the cause can be found by listening, not guessing. The default does not change.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const start = app.indexOf("function kyroMicrophoneProcessing() {");
const end = app.indexOf("async function acquireNexusMicrophoneStreamForVoice(", start);
function run(search, saved) {
  const store = new Map(saved ? [["kyro-mic-mode", saved]] : []);
  const context = { window: { location: { search }, localStorage: { getItem: key => store.get(key) ?? null, setItem: (key, value) => store.set(key, value) } }, URLSearchParams };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.read = kyroMicrophoneProcessing;`, context);
  return { value: context.read(), store };
}

test("by default all three browser processing features are on, as before", () => {
  const { value } = run("");
  assert.deepEqual({ ...value }, { mode: "default", echoCancellation: true, noiseSuppression: true, autoGainControl: true });
});

test("?kyroMic=raw turns all three off and is remembered; ?kyroMic=default turns them back on", () => {
  const raw = run("?kyroMic=raw");
  assert.deepEqual({ ...raw.value }, { mode: "raw", echoCancellation: false, noiseSuppression: false, autoGainControl: false });
  assert.equal(raw.store.get("kyro-mic-mode"), "raw");
  assert.equal(run("", "raw").value.echoCancellation, false, "remembered on the next visit");
  const back = run("?kyroMic=default", "raw");
  assert.equal(back.value.echoCancellation, true); assert.equal(back.store.get("kyro-mic-mode"), "default");
  assert.equal(run("?kyroMic=anything").value.mode, "default", "anything but raw is the default");
});

test("both ways the page asks for the microphone use it", () => {
  assert.match(app, /const processing = kyroMicrophoneProcessing\(\);\s+nexusGenesisVoiceDebugLog\("microphone-processing"/);
  assert.match(app, /echoCancellation: processing\.echoCancellation,\s+noiseSuppression: processing\.noiseSuppression,\s+autoGainControl: processing\.autoGainControl/);
  assert.match(app, /const processing = kyroMicrophoneProcessing\(\); stream = await navigator\.mediaDevices\.getUserMedia\(\{ audio: \{ echoCancellation: processing\.echoCancellation/);
});
