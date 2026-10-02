"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");

const MODULE_PATH = require.resolve("../../public/nexus-conversational-voice-runtime.js");
function freshRuntime() {
  delete require.cache[MODULE_PATH];
  return require(MODULE_PATH);
}

// Found live (fresh-module frontend audit): processTranscript() is called from three independent entry
// points (a voice result, typed "send", a follow-up prompt click) with no in-flight guard -- whichever call
// resolves LAST overwrote lastResponse/lastResult and spoke/rendered, regardless of which was actually
// issued last. A person asking a slow question, then a quick follow-up before the first resolves, could see
// and hear the answer to their abandoned first question land after the second.
test("a slower, earlier processTranscript() call does not overwrite a faster, later one's result", async () => {
  let resolveSlow;
  const previousDialogue = globalThis.NexusOpenDialogueRuntime;
  globalThis.NexusOpenDialogueRuntime = {
    respondAsync: async (text) => {
      if (text === "slow question") return new Promise(resolve => { resolveSlow = () => resolve({ answer: "stale answer to the slow question", spokenSummary: "stale" }); });
      return { answer: `fast answer to ${text}`, spokenSummary: `fast: ${text}` };
    }
  };
  try {
    const runtime = freshRuntime();
    const slow = runtime.processTranscript("slow question", { source: "typed" });
    await new Promise(resolve => setImmediate(resolve)); // let the slow call actually reach respondAsync and start awaiting
    const fast = await runtime.processTranscript("fast question", { source: "typed" });
    assert.equal(fast.answer, "fast answer to fast question");
    assert.equal(runtime.getLastResult().answer, "fast answer to fast question", "the faster, later call must own the UI");
    resolveSlow();
    await slow;
    assert.equal(runtime.getLastResult().answer, "fast answer to fast question", "the slow call resolving afterward must not overwrite the newer result");
  } finally {
    globalThis.NexusOpenDialogueRuntime = previousDialogue;
    delete require.cache[MODULE_PATH];
  }
});

// Found live (fresh-module frontend audit): onend/onerror checked the shared module-level `state` and
// unconditionally nulled the shared `recognition` variable, with nothing tying either check to the specific
// recognition instance they belonged to. If the browser's already-queued "end" event for an old instance
// fires after a fresh startListening() call has replaced it, the stale onend saw state === "listening" (now
// true for the NEW session) and flipped the fresh session back to idle, discarding the still-active instance.
function fakeSpeechRecognitionConstructor(instances) {
  return function FakeSpeechRecognition() {
    instances.push(this);
    this.start = () => { if (this.onstart) this.onstart(); };
    this.stop = () => {};
  };
}

test("a stale onend from an already-replaced recognition instance cannot flip a fresh session back to idle", () => {
  const instances = [];
  const previousCtor = globalThis.SpeechRecognition;
  globalThis.SpeechRecognition = fakeSpeechRecognitionConstructor(instances);
  try {
    const runtime = freshRuntime();
    runtime.startListening();
    assert.equal(instances.length, 1);
    const first = instances[0];
    runtime.startListening(); // a fresh session starts before the first instance's onend has fired
    assert.equal(instances.length, 2);
    assert.equal(runtime.getState(), "listening", "the new session must be listening");
    first.onend(); // the browser's stale "end" event for the OLD, already-replaced instance fires late
    assert.equal(runtime.getState(), "listening", "a stale onend from the old instance must not flip the new, still-active session back to idle");
  } finally {
    globalThis.SpeechRecognition = previousCtor;
    delete require.cache[MODULE_PATH];
  }
});
