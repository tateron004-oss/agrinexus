"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { RealtimeVoiceAdapter } = require("../../public/nexus-genesis-voice-runtime-manager.js");

// Found live: the success path of createAdapter().start() correctly bails
// out with {stale:true} when `generation` moved on while this call's
// invoke("startSession", ...) was still in flight -- but the catch block had
// no such guard. So if a NEWER overlapping start() call already succeeded
// and put the adapter in a real "listening" state before this OLDER,
// now-rejecting call's promise settled, the catch tore down
// ownership/state unconditionally -- silently killing the healthy newer
// session (mic/audio-output locks released, state forced to "failed")
// because of an unrelated, stale start attempt finishing late. Reachable
// whenever a restart is retried while a prior attempt is still in flight.
test("a stale, late-rejecting start() call does not tear down a newer session that already succeeded", async () => {
  let startSessionCalls = 0;
  let firstCallDeferredReject;
  const adapter = RealtimeVoiceAdapter({
    startSession: async () => {
      startSessionCalls += 1;
      if (startSessionCalls === 1) {
        // The first (older) call's underlying start never resolves on its
        // own -- we control exactly when it rejects, to land AFTER the
        // second call has already succeeded.
        return new Promise((_resolve, reject) => { firstCallDeferredReject = reject; });
      }
      // The second (newer) call's underlying start succeeds immediately.
      return { ok: true };
    }
  });

  const staleResultPromise = adapter.start({ source: "auto-recovery" });
  // The second, newer call is issued (and resolves) before the first one's
  // deferred promise settles -- generation moves on to 2.
  const freshResult = await adapter.start({ source: "manual-retry" });
  assert.equal(freshResult.ok, true, "the newer start() call must succeed");
  assert.equal(adapter.getState().state, "listening", "the adapter must be in a real listening state after the newer call succeeds");
  assert.equal(adapter.ownsMicrophone(), true);
  assert.equal(adapter.ownsAudioOutput(), true);

  // Now the OLDER call's underlying invoke finally rejects, well after the
  // newer session is already healthy.
  firstCallDeferredReject(new Error("stale network timeout"));
  const staleResult = await staleResultPromise;

  assert.equal(staleResult.stale, true, "the stale call must identify itself as stale, not report a startup failure");
  assert.equal(adapter.getState().state, "listening", "the healthy newer session's state must be untouched by the stale call's late rejection");
  assert.equal(adapter.ownsMicrophone(), true, "microphone ownership must not be released by the stale call");
  assert.equal(adapter.ownsAudioOutput(), true, "audio-output ownership must not be released by the stale call");
});
