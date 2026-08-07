"use strict";

const assert = require("node:assert/strict");
const { CERTIFICATION_CONTRACT_VERSION } = require("../nexus-core/certification-identity");
const { compareIdentity, sameCommit } = require("../../scripts/nexus-release-certification-controller");

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

console.log("Nexus release certification controller: PASS");
