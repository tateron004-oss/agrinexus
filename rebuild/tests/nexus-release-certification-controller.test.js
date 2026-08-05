"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const { CERTIFICATION_CONTRACT_VERSION } = require("../nexus-core/certification-identity");
const { compareIdentity, sameCommit, verifyDeployment } = require("../../scripts/nexus-release-certification-controller");
const { CANONICAL_PRODUCTION_URL, requireCanonicalProductionUrl } = require("../../scripts/nexus-canonical-production-target");

const fullSha = "1e328c28abcdef00112233445566778899aabbcc";
assert.equal(sameCommit(fullSha, fullSha), true);
assert.equal(sameCommit(fullSha, fullSha.slice(0, 12)), false);
assert.equal(sameCommit(fullSha, "deadbee"), false);
assert.equal(requireCanonicalProductionUrl(CANONICAL_PRODUCTION_URL), CANONICAL_PRODUCTION_URL);
assert.equal(CANONICAL_PRODUCTION_URL, "https://nexus-genesis-certified.onrender.com");
assert.throws(() => requireCanonicalProductionUrl("https://agrinexus-platform.onrender.com"), /CANONICAL_HOST_MISMATCH/);
assert.throws(() => requireCanonicalProductionUrl("https://example.com"), /CANONICAL_HOST_MISMATCH/);
assert.throws(() => requireCanonicalProductionUrl(`${CANONICAL_PRODUCTION_URL}/certification`), /CANONICAL_HOST_MISMATCH/);

const controllerSource = fs.readFileSync("scripts/nexus-release-certification-controller.js", "utf8");
const preflightSource = fs.readFileSync("scripts/nexus-production-certification-preflight.js", "utf8");
for (const source of [controllerSource, preflightSource]) {
  assert.match(source, /\/api\/certification\/identity/);
  assert.doesNotMatch(source, /\/certification\/api\/certification\/identity/);
}

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

assert.rejects(() => verifyDeployment({
  baseUrl: CANONICAL_PRODUCTION_URL,
  expectedSha: "1e328c28",
  bundlePath: "rebuild/browser/nexus-clean.bundle.js",
  timeoutMs: 1,
  intervalMs: 1
}), /INVALID_EXPECTED_RELEASE_SHA/);

console.log("Nexus release certification controller: PASS");
