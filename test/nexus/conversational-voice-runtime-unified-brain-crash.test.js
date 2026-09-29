"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");

// Found live: processTranscript()'s Unified-Brain-Runtime branch called renderResponse(...), a
// function never defined anywhere in this file (only renderDialogueResult/renderStatus/
// renderTranscript exist). Every command the Unified Brain Runtime intercepts -- a broad, realistic
// set (plain commands like "Find me a job in construction") -- hit this ReferenceError.
// processTranscript() is always invoked as `void processTranscript(...)` by its own click/keydown
// listeners, so the rejection was silently swallowed: the UI stayed stuck on "Nexus is preparing your
// plan" forever, nothing was ever rendered or spoken, and setState("idle", ...) was never reached.
test("a command the Unified Brain Runtime intercepts is rendered and completes, instead of throwing and leaving the UI stuck", async () => {
  const previousRuntime = globalThis.NexusUnifiedBrainRuntime;
  globalThis.NexusUnifiedBrainRuntime = {
    shouldHandleBeforeLegacy: () => true,
    process: async () => ({ conversationalResponse: "Nexus prepared your job search plan." }),
    mount: () => {},
    render: () => {}
  };
  delete require.cache[require.resolve("../../public/nexus-conversational-voice-runtime.js")];
  const runtime = require("../../public/nexus-conversational-voice-runtime.js");
  try {
    const result = await runtime.processTranscript("Find me a job in construction");
    assert.equal(result.conversationalResponse, "Nexus prepared your job search plan.", "the real Unified Brain result must be returned, not lost to a thrown error");
    assert.equal(runtime.getState(), "idle", "the voice state must reach idle, not stay stuck on 'reasoning'");
    assert.equal(runtime.getLastResult().answer, "Nexus prepared your job search plan.", "the result must actually be handed to the real renderer (renderDialogueResult), not a nonexistent function");
  } finally {
    globalThis.NexusUnifiedBrainRuntime = previousRuntime;
    delete require.cache[require.resolve("../../public/nexus-conversational-voice-runtime.js")];
  }
});
