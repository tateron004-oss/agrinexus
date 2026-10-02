"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { LegacyBrowserVoiceAdapter, createGenesisConversationSupervisor } = require("../../public/nexus-genesis-voice-runtime-manager.js");

function tick() {
  return new Promise(resolve => setImmediate(resolve));
}

// Found live: adapter.start()/adapter.stop() both guard against a stale,
// late-settling call overwriting a newer session (see
// voice-runtime-adapter-start-stale-generation-race.test.js), but
// adapter.callTool() had no such guard at all. If stop() tore down the
// session (generation bumped, state -> "closed") while a callTool() call
// issued BEFORE the stop was still awaiting its provider response,
// callTool()'s completion ran unconditionally -- resurrecting the adapter
// out of "closed" back into "agent-speaking"/"listening" once the stale
// provider response finally arrived. Reachable whenever a user stops
// listening (or a restart happens) while a tool call is still in flight.
test("a stale callTool() response does not resurrect a session that was already stopped", async () => {
  let resolveCallTool;
  const adapter = LegacyBrowserVoiceAdapter({
    startSession: async () => ({ ok: true }),
    stopSession: async () => ({ ok: true }),
    callTool: async () => new Promise(resolve => { resolveCallTool = resolve; })
  });

  await adapter.start();
  assert.equal(adapter.getState().state, "listening");

  const callToolPromise = adapter.callTool("nexus_capability_router", { command: "what's the weather" });
  await tick(); // let callTool() reach its in-flight provider await

  await adapter.stop("user-stop-listening");
  assert.equal(adapter.getState().state, "closed", "stop() must close the session");

  // The stale provider response for the abandoned tool call finally arrives,
  // well after the session was closed.
  resolveCallTool({ ok: true, response: "it's sunny" });
  const staleResult = await callToolPromise;

  assert.equal(staleResult.stale, true, "the stale callTool() call must identify itself as stale");
  assert.equal(adapter.getState().state, "closed", "a stale callTool() completion must not resurrect a closed session");
  assert.equal(adapter.getState().sessionOpen, false);
});

// Found live: supervisor.processTurn() correctly re-checks its captured
// turnGeneration after its await and bails out if a newer turn has
// superseded it -- but supervisor.recover() bumped `generation` before its
// own await and never re-checked it afterward. So a slower, earlier
// recover() call resolving AFTER a newer, overlapping recover() call had
// already run to completion (here: failed and deactivated the session)
// would still run its own success path, silently flipping the session back
// to "listening" and erasing the fact that the authoritative, newer
// recovery attempt had just failed.
test("a stale recover() completion does not overwrite a newer recover() call's outcome", async () => {
  let resolveFirstRecover;
  const calls = [];
  const fakeAdapter = {
    async recover(reason) {
      calls.push(reason);
      if (reason === "first-reason") return new Promise(resolve => { resolveFirstRecover = resolve; });
      return { ok: false, error: { category: "recovery-failure" } };
    },
    async callTool() { return { ok: true, response: "ok" }; },
    async interrupt() { return { ok: true }; },
    getState() { return { state: "listening" }; }
  };
  const runtimeManager = {
    async startSession() { return { ok: true }; },
    async stopSession() { return { ok: true }; },
    adapter() { return fakeAdapter; },
    getState() { return {}; }
  };

  const supervisor = createGenesisConversationSupervisor({ runtimeManager });
  await supervisor.start();
  assert.equal(supervisor.getState().state, "listening");

  const firstRecoverPromise = supervisor.recover("first-reason");
  await tick(); // let the first recover() call reach its in-flight adapter.recover() await

  const secondResult = await supervisor.recover("second-reason");
  assert.equal(secondResult.ok, false, "the newer recover() call fails in this scenario");
  assert.equal(supervisor.getState().active, false, "the newer recover() call must deactivate the session on failure");
  assert.equal(supervisor.getState().state, "recovering");

  // The stale first recover() call's underlying adapter.recover() finally
  // resolves successfully, well after the newer attempt already failed.
  resolveFirstRecover({ ok: true });
  const firstResult = await firstRecoverPromise;

  assert.equal(firstResult.stale, true, "the stale recover() call must identify itself as stale");
  assert.equal(supervisor.getState().state, "recovering", "a stale recover() success must not resurrect the session to 'listening'");
  assert.equal(supervisor.getState().active, false, "a stale recover() success must not override the newer attempt's failure");
  assert.deepEqual(calls, ["first-reason", "second-reason"]);
});
