"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const { CERTIFICATION_CONTRACT_VERSION } = require("../nexus-core/certification-identity");
const { compareIdentity, sameCommit } = require("../../scripts/nexus-release-certification-controller");
const { CANONICAL_PRODUCTION_URL, requireCanonicalProductionUrl } = require("../../scripts/nexus-canonical-production-target");

assert.equal(sameCommit("1e328c28abcdef", "1e328c2"), true);
assert.equal(sameCommit("1e328c28", "deadbee"), false);
assert.equal(requireCanonicalProductionUrl(CANONICAL_PRODUCTION_URL), CANONICAL_PRODUCTION_URL);
assert.throws(() => requireCanonicalProductionUrl("https://agrinexus-platform.onrender.com"), /CANONICAL_HOST_MISMATCH/);
assert.throws(() => requireCanonicalProductionUrl(`${CANONICAL_PRODUCTION_URL}/certification`), /CANONICAL_HOST_MISMATCH/);

const controllerSource = fs.readFileSync("scripts/nexus-release-certification-controller.js", "utf8");
const preflightSource = fs.readFileSync("scripts/nexus-production-certification-preflight.js", "utf8");
for (const source of [controllerSource, preflightSource]) {
  assert.match(source, /\/certification\/api\/certification\/identity/);
  assert.doesNotMatch(source, /replace\(\/\\\/\+\$\/[^\n]*\)\/api\/certification\/identity/);
}

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
