"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createServerRuntimeAdapter } = require("../../nexus/compat/server-runtime-adapter.js");

async function probe({ previousSha, previousHistory, currentSha }) {
  const objects = new Map();
  if (previousSha) objects.set("nexus/production-acceptance/object-storage/redeploy-marker.json", Buffer.from(JSON.stringify({ releaseSha: previousSha })));
  if (previousHistory) objects.set("nexus/production-acceptance/object-storage/redeploy-marker.json", Buffer.from(JSON.stringify({
    schema: "nexus.object-storage-release-history.v1", releases: previousHistory.map(releaseSha => ({ releaseSha }))
  })));
  const objectStorage = { async get(key) { if (!objects.has(key)) { const error = new Error("missing"); error.name = "NoSuchKey"; throw error; } return { body: objects.get(key) }; },
    async put({ key, body }) { objects.set(key, body); return { sizeBytes: body.length }; } };
  const adapter = createServerRuntimeAdapter({ env: { NEXUS_ACCEPTANCE_TOKEN: "secret", RENDER_GIT_COMMIT: currentSha },
    resolveUser: async () => null, readJson: async () => ({ releaseSha: currentSha }), createRuntimeFn: () => ({ ready: Promise.resolve(), objectStorage }) });
  let status; let body;
  await adapter.handle({ method: "POST", headers: { authorization: "Bearer secret" } }, {},
    new URL("https://production/api/nexus/runtime/production-acceptance/probes/object-storage"),
    (_res, code, value) => { status = code; body = value; });
  return { status, body };
}

test("object-storage probe seeds without claiming persistence on the first release", async () => {
  const result = await probe({ currentSha: "a".repeat(40) });
  assert.equal(result.status, 202); assert.equal(result.body.currentWriteVerified, true); assert.equal(result.body.redeployPersistent, false);
});

test("object-storage probe proves a marker survived from a different deployed release", async () => {
  const result = await probe({ previousSha: "a".repeat(40), currentSha: "b".repeat(40) });
  assert.equal(result.status, 200); assert.equal(result.body.redeployPersistent, true);
  assert.equal(result.body.priorReleaseObserved, true); assert.equal(result.body.priorReleaseDifferent, true);
});

test("object-storage proof remains valid when the same release is probed again", async () => {
  const oldSha = "a".repeat(40); const currentSha = "b".repeat(40);
  const result = await probe({ previousHistory: [oldSha, currentSha], currentSha });
  assert.equal(result.status, 200); assert.equal(result.body.redeployPersistent, true);
  assert.equal(result.body.priorReleaseDifferent, true);
});
