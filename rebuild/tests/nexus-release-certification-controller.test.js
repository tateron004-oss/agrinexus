"use strict";

const assert = require("node:assert/strict");
const { CERTIFICATION_CONTRACT_VERSION } = require("../nexus-core/certification-identity");
const { compareIdentity, fetchIdentity, sameCommit } = require("../../scripts/nexus-release-certification-controller");

assert.equal(sameCommit("1e328c28abcdef", "1e328c2"), true);
assert.equal(sameCommit("1e328c28", "deadbee"), false);

const expected = {
  schema: "nexus.certification.identity.v1",
  contractVersion: CERTIFICATION_CONTRACT_VERSION,
  releaseSha: "1e328c28",
  bundleSha256: "a".repeat(64)
};
assert.deepEqual(compareIdentity({
  identity: expected,
  expectedSha: "1e328c28",
  expectedBundle: "a".repeat(64)
}), []);
assert.deepEqual(compareIdentity({
  identity: { ...expected, contractVersion: "old", releaseSha: "deadbee", bundleSha256: "b".repeat(64) },
  expectedSha: "1e328c28",
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
    await fetchIdentity("https://nexus.example/", "acceptance-secret");
  } finally {
    global.fetch = originalFetch;
  }
  assert.equal(request.url, "https://nexus.example/api/certification/identity");
  assert.equal(request.options.headers.authorization, "Bearer acceptance-secret");
  assert.equal(request.options.headers["cache-control"], "no-cache");
  assert.doesNotMatch(request.url, /acceptance-secret/);
}

verifyAuthenticatedIdentityRequest()
  .then(() => console.log("Nexus release certification controller: PASS"))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
