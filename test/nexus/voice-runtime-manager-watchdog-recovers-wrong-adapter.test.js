"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createNexusVoiceRuntimeManager } = require("../../public/nexus-genesis-voice-runtime-manager.js");

// Found live: watchdogCheck()'s final fallback branch (reached whenever automaticRollback is false,
// which is how app.js/server.js actually wire the realtime runtime in production) always called
// adapters.legacy.recover(...) instead of the real active adapter's own recover(). Since app.js also
// passes legacyAdapter: null, adapters.legacy is a behaviorless stub whose recover() no-ops and
// resolves {ok: true, state: "listening"} unconditionally. The real broken adapter (e.g. "realtime")
// was never touched and stayed unhealthy forever, while the watchdog reported false success every
// tick (5s default) and mislabeled activeRuntime as "legacy" even though the manager's real active
// runtime was never switched -- a permanently stuck voice session whose only self-healing path was a
// silent no-op.
test("watchdogCheck recovers the real active (unhealthy) adapter, not an untouched legacy stub", async () => {
  let realtimeRecoverCalls = 0;
  let legacyRecoverCalls = 0;
  const manager = createNexusVoiceRuntimeManager({
    activeRuntime: "realtime",
    automaticRollback: false,
    legacyAdapter: null,
    realtimeAdapter: {
      name: "realtime",
      owner: "voice-runtime:realtime",
      getState() { return { state: "failed" }; },
      isHealthy() { return false; },
      ownsMicrophone() { return true; },
      ownsAudioOutput() { return true; },
      async recover() { realtimeRecoverCalls += 1; return { ok: true, state: "listening" }; }
    }
  });
  // Patch adapters.legacy.recover indirectly: the manager's own adapter("legacy") accessor is used
  // as the buggy fallback target, so wrap the default stub to detect any call to it.
  const legacyAdapter = manager.adapter("legacy");
  const originalLegacyRecover = legacyAdapter.recover.bind(legacyAdapter);
  legacyAdapter.recover = async (...args) => { legacyRecoverCalls += 1; return originalLegacyRecover(...args); };

  const result = await manager.watchdogCheck();

  assert.equal(realtimeRecoverCalls, 1, "the real unhealthy 'realtime' adapter must be the one recovered");
  assert.equal(legacyRecoverCalls, 0, "the untouched 'legacy' stub must not be recovered instead of the real active adapter");
  assert.equal(result.activeRuntime, "realtime", "activeRuntime must reflect the manager's real active runtime, not a mislabeled 'legacy'");
  assert.equal(result.ok, true, "recovery outcome should still be reported");
});
