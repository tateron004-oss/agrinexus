"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { OBJECTIVES, evaluate, waitForReleaseConvergence } = require("../../scripts/nexus-21-objective-production-acceptance.js");

test("acceptance contract contains every one of the 21 objectives exactly once", () => {
  assert.equal(OBJECTIVES.length, 21);
  assert.equal(new Set(OBJECTIVES).size, 21);
  const result = evaluate({ expectedSha: "sha", runtime: { ok: false, body: {} }, health: { ok: false, body: {} }, integrations: { ok: false, body: {} }, providers: { ok: false, body: {} }, acceptance: { ok: false, body: {} } });
  assert.deepEqual(result.objectives.map(x => x.id), OBJECTIVES);
  assert.equal(result.passed, false);
});

test("no construction-only response can pass production acceptance", () => {
  const response = { releaseSha: "sha", singleRuntime: true, legacyWritePaths: 0, simulatedProductionProviders: 0, inMemoryProductionFallbacks: 0,
    components: Object.fromEntries(["taskEngine","database","semanticMemory","worker","tools","voice","documents","objectStorage","identity","consentAudit","offlineSync","security","healthcare","predictive","observability","delivery","testing","operations"].map(key => [key, { ready: true }])),
    workspaces: Array.from({ length: 16 }, (_, index) => ({ workspaceId: `w${index}`, state: "authoritative", releaseSha: "sha", proofsComplete: true })) };
  const result = evaluate({ expectedSha: "sha", runtime: { ok: true, body: { ok: true, releaseSha: "sha", pgvector: true, migrationsCurrent: true } }, health: { ok: true, body: { ok: true, strictLiveMode: true } }, integrations: { ok: true, body: { ok: true, liveGaps: [] } }, providers: { ok: true, body: { ok: true } }, acceptance: { ok: true, body: response } });
  assert.equal(result.passed, false);
  assert.ok(result.objectives.filter(x => !x.passed).length > 10);
});

test("every pass remains bound to one exact production SHA", () => {
  const result = evaluate({ expectedSha: "expected", runtime: { ok: true, body: { ok: true, releaseSha: "other", pgvector: true, migrationsCurrent: true } }, health: { ok: true, body: {} }, integrations: { ok: true, body: { liveGaps: [] } }, providers: { ok: true, body: { ok: true } }, acceptance: { ok: true, body: { releaseSha: "other", components: {}, workspaces: [] } } });
  assert.equal(result.objectives.find(x => x.id === "consolidated_brain").passed, false);
  assert.equal(result.objectives.find(x => x.id === "managed_delivery").passed, false);
});

test("acceptance waits through Render cutover until runtime and authorization agree on the exact SHA", async () => {
  const originalFetch = global.fetch;
  let round = 0;
  global.fetch = async url => {
    const currentRound = Math.floor(round++ / 5);
    const isAcceptance = String(url).includes("production-acceptance");
    const body = currentRound === 0
      ? (isAcceptance ? { error: "unauthorized" } : { ok: true, releaseSha: "old" })
      : { ok: true, releaseSha: "expected" };
    return { ok: currentRound > 0 || !isAcceptance, status: currentRound === 0 && isAcceptance ? 401 : 200, text: async () => JSON.stringify(body) };
  };
  try {
    const evidence = await waitForReleaseConvergence({ base: "https://nexus.example", providerBase: "https://provider.example", expectedSha: "expected", headers: { authorization: "Bearer test" }, timeoutMs: 100, pollMs: 0 });
    assert.equal(evidence.runtime.body.releaseSha, "expected");
    assert.equal(evidence.acceptance.status, 200);
    assert.equal(evidence.acceptance.body.releaseSha, "expected");
  } finally {
    global.fetch = originalFetch;
  }
});
