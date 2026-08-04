"use strict";

const {
  CANONICAL_PRODUCTION_ORIGIN,
  productionUrlFromEnv,
  requireCanonicalProductionUrl
} = require("./nexus-canonical-production-target");

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
  const observedDeploymentSha = identity?.deployedReleaseSha || identity?.releaseSha;
  if (!sameCommit(deployedReleaseSha, observedDeploymentSha)) failures.push("deployed-release-sha");
  if (identity?.runtimeSourceSha) {
    if (!sameCommit(runtimeSourceSha, identity.runtimeSourceSha)) failures.push("runtime-source-sha");
  } else if (!identity?.bundleSha256) {
    failures.push("runtime-source-sha");
  }
  return failures;
}

async function verifyProductionIdentity({ baseUrl, deployedReleaseSha, runtimeSourceSha, timeoutMs = 12 * 60 * 1000, intervalMs = 15000 }) {
  baseUrl = requireCanonicalProductionUrl(baseUrl, "production preflight target");
  const deadline = Date.now() + timeoutMs;
  let lastFailure = "identity-unavailable";
  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${String(baseUrl).replace(/\/+$/, "")}/api/certification/identity`, {
        headers: { "cache-control": "no-cache" }
      });
      if (new URL(response.url).origin !== CANONICAL_PRODUCTION_ORIGIN) {
        throw new Error(`CANONICAL_HOST_MISMATCH: production response resolved to ${response.url}`);
      }
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
    baseUrl: productionUrlFromEnv(),
    deployedReleaseSha: process.env.NEXUS_EXPECTED_DEPLOYMENT_SHA || process.env.NEXUS_EXPECTED_RELEASE_SHA,
    runtimeSourceSha: process.env.NEXUS_EXPECTED_RUNTIME_SOURCE_SHA || process.env.NEXUS_EXPECTED_RELEASE_SHA,
    timeoutMs: Number(process.env.NEXUS_DEPLOYMENT_TIMEOUT_MS || 12 * 60 * 1000),
    intervalMs: Number(process.env.NEXUS_DEPLOYMENT_POLL_MS || 15000)
  });
  console.log(`Production ${identity.deployedReleaseSha || identity.releaseSha} serves ${identity.runtimeSourceSha ? `runtime ${identity.runtimeSourceSha}` : "the verified certification bundle"}.`);
}

if (require.main === module) {
  main().catch(error => { console.error(error.stack || error.message); process.exitCode = 1; });
}

module.exports = { compareProductionIdentity, sameCommit, verifyProductionIdentity };
