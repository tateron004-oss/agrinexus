"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const shellSource = fs.readFileSync(path.join(__dirname, "..", "..", "public", "nexus-voice-demo-shell.js"), "utf8");

function tick() {
  return new Promise(resolve => setImmediate(resolve));
}

function loadVoiceDemoShell() {
  const spokenUtterances = [];
  const sandbox = {};
  sandbox.window = sandbox;
  sandbox.document = {
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener: () => {},
    readyState: "complete",
    documentElement: {}
  };
  sandbox.navigator = { language: "en-US" };
  sandbox.speechSynthesis = {
    cancel: () => {},
    getVoices: () => [],
    speak: utterance => {
      spokenUtterances.push(utterance.text);
      if (typeof utterance.onstart === "function") utterance.onstart();
      if (typeof utterance.onend === "function") utterance.onend();
    }
  };
  sandbox.SpeechSynthesisUtterance = function SpeechSynthesisUtterance(text) { this.text = text; };
  vm.createContext(sandbox);
  vm.runInContext(shellSource, sandbox, { filename: "nexus-voice-demo-shell.js" });
  return { shell: sandbox.NexusVoiceDemoShell, setBridge: bridge => { sandbox.NexusVoiceDemoShellBridge = bridge; }, spokenUtterances };
}

// Found live (same bug shape as PR #808's conversational-voice-runtime.js processTranscript() race):
// routeTranscript() is called fire-and-forget from recognition.onresult with no in-flight guard, and
// its bridge.submitSafeTranscript() call can take arbitrarily long. If a second push-to-talk turn
// starts and its own bridge call resolves BEFORE this older, slower call's promise settles, the older
// call's stale response would land (and speak() would CANCEL the newer turn's already-playing speech)
// after the newer, still-active turn -- in a health-access demo, that can silently replace a fresh
// response with a stale, unrelated one.
test("a stale, slower routeTranscript() response is not spoken after a faster, later turn's response", async () => {
  const { shell, setBridge, spokenUtterances } = loadVoiceDemoShell();
  let resolveSlow;
  setBridge({
    submitSafeTranscript: async transcript => {
      if (transcript === "slow question") return new Promise(resolve => { resolveSlow = () => resolve({ response: "stale answer to the slow question" }); });
      return { response: `fast answer to ${transcript}` };
    },
    showResponse: () => {}
  });

  const slow = shell.routeTranscript("slow question");
  await tick(); // let the slow call reach its in-flight bridge await
  await shell.routeTranscript("fast question");
  assert.deepEqual(spokenUtterances, ["fast answer to fast question"], "the faster, later turn's response must be spoken");

  resolveSlow();
  await slow;

  assert.deepEqual(spokenUtterances, ["fast answer to fast question"], "the slow call resolving afterward must not speak its stale response over the newer turn");
});
