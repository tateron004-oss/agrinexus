"use strict";

const assert = require("node:assert/strict");
const { CERTIFICATION_CONTRACT_VERSION } = require("../nexus-core/certification-identity");
const { compareIdentity, fetchIdentity, sameCommit } = require("../../scripts/nexus-release-certification-controller");

const fullSha = "1e328c28" + "a".repeat(32);
assert.equal(sameCommit(fullSha, fullSha), true);
assert.equal(sameCommit(fullSha, fullSha.slice(0, 12)), false);
assert.equal(sameCommit(fullSha, "deadbee"), false);

const expected = {
  schema: "nexus.certification.identity.v1",
  contractVersion: CERTIFICATION_CONTRACT_VERSION,
  releaseSha: fullSha,
  bundleSha256: "a".repeat(64)
};
assert.deepEqual(compareIdentity({
  identity: expected,
  expectedSha: fullSha,
  expectedBundle: "a".repeat(64)
}), []);
assert.deepEqual(compareIdentity({
  identity: { ...expected, contractVersion: "old", releaseSha: "deadbee", bundleSha256: "b".repeat(64) },
  expectedSha: fullSha,
  expectedBundle: "a".repeat(64)
}), ["driver-contract", "release-sha", "bundle-sha256"]);

async function verifyAuthenticatedIdentityRequest() {
  const originalFetch = global.fetch;
  let request;
  global.fetch = async (url, options) => {
    request = { url, options };
    return { ok: true, json: async () => ({ schema: "nexus.certification.identity.v1" }) };
  };
  try {
    await fetchIdentity("https://nexus-genesis-certified.onrender.com/", "acceptance-secret");
  } finally {
    global.fetch = originalFetch;
  }
  assert.equal(request.url, "https://nexus-genesis-certified.onrender.com/api/certification/identity");
  assert.equal(request.options.headers.authorization, "Bearer acceptance-secret");
  assert.equal(request.options.headers["cache-control"], "no-cache");
  assert.doesNotMatch(request.url, /acceptance-secret/);
  assert.equal(request.options.redirect, "error");
  assert.ok(request.options.signal);
}

async function verifyPublicIdentityRequest() {
  const originalFetch = global.fetch;
  const requests = [];
  global.fetch = async (url, options) => {
    requests.push({ url, options });
    if (url.endsWith("/api/nexus/runtime/status")) return { ok: true, json: async () => ({ releaseSha: fullSha }) };
    return { ok: true, arrayBuffer: async () => Buffer.from("deployed-bundle") };
  };
  try {
    const identity = await fetchIdentity("https://nexus-genesis-certified.onrender.com/", null, "/app.js");
    assert.equal(identity.releaseSha, fullSha);
    assert.match(identity.bundleSha256, /^[0-9a-f]{64}$/);
    assert.equal(identity.source, "public-runtime-and-bundle");
  } finally {
    global.fetch = originalFetch;
  }
  assert.deepEqual(requests.map(item => item.url), [
    "https://nexus-genesis-certified.onrender.com/api/nexus/runtime/status",
    "https://nexus-genesis-certified.onrender.com/app.js"
  ]);
  assert.equal(requests.every(item => !item.options.headers.authorization), true);
}

verifyAuthenticatedIdentityRequest()
  .then(verifyPublicIdentityRequest)
  .then(() => console.log("Nexus release certification controller: PASS"))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

const { requireCanonicalProductionUrl } = require('../../scripts/nexus-canonical-production-target');
assert.throws(()=>requireCanonicalProductionUrl('https://example.com'),/CANONICAL_HOST_MISMATCH/);
assert.throws(()=>requireCanonicalProductionUrl('https://nexus-genesis-certified.onrender.com/certification'),/CANONICAL_HOST_MISMATCH/);
assert.equal(sameCommit('z'.repeat(40),'z'.repeat(40)),false);
