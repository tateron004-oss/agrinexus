"use strict";

function normalizeSha(value) {
  return String(value || "").trim().toLowerCase();
}

function sameCommit(expected, actual) {
  expected = normalizeSha(expected);
  actual = normalizeSha(actual);
  return expected.length >= 7 && actual.length >= 7 &&
    (expected === actual || expected.startsWith(actual) || actual.startsWith(expected));
}

function compareProductionIdentity(identity, { deployedReleaseSha, runtimeSourceSha }) {
  const failures = [];
  if (!sameCommit(deployedReleaseSha, identity?.deployedReleaseSha)) failures.push("deployed-release-sha");
  if (!sameCommit(runtimeSourceSha, identity?.runtimeSourceSha)) failures.push("runtime-source-sha");
  return failures;
}

async function verifyProductionIdentity({ baseUrl, deployedReleaseSha, runtimeSourceSha, timeoutMs = 12 * 60 * 1000, intervalMs = 15000 }) {
  const deadline = Date.now() + timeoutMs;
  let lastFailure = "identity-unavailable";
  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${String(baseUrl).replace(/\/+$/, "")}/api/certification/identity`, {
        headers: { "cache-control": "no-cache" }
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const identity = await response.json();
      const failures = compareProductionIdentity(identity, { deployedReleaseSha, runtimeSourceSha });
      if (!failures.length) return identity;
      lastFailure = failures.join(",");
    } catch (error) {
      lastFailure = error.message;
    }
    await new Promise(resolve => setTimeout(resolve, intervalMs));
  }
  throw new Error(`PRODUCTION_IDENTITY_NOT_READY: ${lastFailure}`);
}

async function main() {
  const identity = await verifyProductionIdentity({
    baseUrl: process.env.NEXUS_CLEAN_BASE_URL,
    deployedReleaseSha: process.env.NEXUS_EXPECTED_DEPLOYMENT_SHA,
    runtimeSourceSha: process.env.NEXUS_EXPECTED_RELEASE_SHA,
    timeoutMs: Number(process.env.NEXUS_DEPLOYMENT_TIMEOUT_MS || 12 * 60 * 1000),
    intervalMs: Number(process.env.NEXUS_DEPLOYMENT_POLL_MS || 15000)
  });
  console.log(`Production ${identity.deployedReleaseSha} serves runtime ${identity.runtimeSourceSha}.`);
}

if (require.main === module) {
  main().catch(error => { console.error(error.stack || error.message); process.exitCode = 1; });
}

module.exports = { compareProductionIdentity, sameCommit, verifyProductionIdentity };
