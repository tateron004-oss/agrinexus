"use strict";

const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
// rebuild/ was archived (nothing in the live app loads it); the identity contract it defines is still what this controller speaks.
const {
  CERTIFICATION_CONTRACT_VERSION
} = require("../archive/rebuild/nexus-core/certification-identity");
const { servedTextBytes, TEXT_EXTENSIONS, APP_RELEASE_STAMPS } = require("../server/static-delivery");

const { requireCanonicalProductionUrl, productionUrlFromEnv } = require("./nexus-canonical-production-target");

const outputDir = path.resolve("output/nexus-release-certification");
const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

const RELEASE_PLACEHOLDER = "__NEXUS_RELEASE_SHA__";

// The hash a deployed bundle must have: the sha-256 of the bytes the server SERVES for this file, not of the repository file. The server fills in the
// release id and, for public/app.js, swaps the two release lines for the code that reads the id from the page (server/static-delivery.js). This uses the
// server's own transform function, so the expected hash proves the exact served build: one changed byte in the file, or a different release id where
// one is still written into the file, is a different hash.
function expectedServedBundleSha256(bundlePath, expectedSha) {
  const raw = fs.readFileSync(bundlePath);
  const extension = path.extname(bundlePath).toLowerCase();
  const served = TEXT_EXTENSIONS.has(extension)
    ? servedTextBytes(raw, {
      stamps: path.basename(bundlePath) === "app.js" ? APP_RELEASE_STAMPS : undefined,
      placeholder: RELEASE_PLACEHOLDER,
      fillRelease: text => text.replaceAll(RELEASE_PLACEHOLDER, normalizeSha(expectedSha))
    })
    : raw;
  return crypto.createHash("sha256").update(served).digest("hex");
}

function normalizeSha(value) {
  return String(value || "").trim().toLowerCase();
}

function sameCommit(expected, actual) {
  expected = normalizeSha(expected);
  actual = normalizeSha(actual);
  return /^[a-f0-9]{40}$/.test(expected) && /^[a-f0-9]{40}$/.test(actual) && expected === actual;
}

async function fetchIdentity(baseUrl, acceptanceToken, publicAssetPath = "/app.js") {
  const headers = { "cache-control": "no-cache" };
  const base = requireCanonicalProductionUrl(baseUrl, "certification target");
  if (acceptanceToken) {
    headers.authorization = `Bearer ${acceptanceToken}`;
    const response = await fetch(`${base}/api/certification/identity`, { headers, redirect: "error", signal: AbortSignal.timeout(20000) });
    if (!response.ok) throw new Error(`identity endpoint returned HTTP ${response.status}`);
    return response.json();
  }
  const [runtimeResponse, bundleResponse] = await Promise.all([
    fetch(`${base}/api/nexus/runtime/status`, { headers, redirect: "error", signal: AbortSignal.timeout(20000) }),
    fetch(`${base}/${String(publicAssetPath).replace(/^\/+/, "")}`, { headers, redirect: "error", signal: AbortSignal.timeout(20000) })
  ]);
  if (!runtimeResponse.ok) throw new Error(`runtime status returned HTTP ${runtimeResponse.status}`);
  if (!bundleResponse.ok) throw new Error(`browser bundle returned HTTP ${bundleResponse.status}`);
  const runtime = await runtimeResponse.json();
  const bundle = Buffer.from(await bundleResponse.arrayBuffer());
  return {
    schema: "nexus.certification.identity.v1",
    contractVersion: CERTIFICATION_CONTRACT_VERSION,
    releaseSha: runtime.releaseSha,
    bundleSha256: crypto.createHash("sha256").update(bundle).digest("hex"),
    source: "public-runtime-and-bundle"
  };
}

function compareIdentity({ identity, expectedSha, expectedBundle }) {
  const failures = [];
  if (identity?.schema !== "nexus.certification.identity.v1") failures.push("identity-schema");
  if (identity?.contractVersion !== CERTIFICATION_CONTRACT_VERSION) failures.push("driver-contract");
  if (!sameCommit(expectedSha, identity?.releaseSha)) failures.push("release-sha");
  if (normalizeSha(identity?.bundleSha256) !== normalizeSha(expectedBundle)) failures.push("bundle-sha256");
  return failures;
}

async function verifyDeployment({
  baseUrl,
  expectedSha,
  bundlePath,
  acceptanceToken,
  timeoutMs = 12 * 60 * 1000,
  intervalMs = 15000
}) {
  baseUrl = requireCanonicalProductionUrl(baseUrl, "certification target");
  if (!/^[a-f0-9]{40}$/.test(normalizeSha(expectedSha))) throw new Error("INVALID_EXPECTED_RELEASE_SHA: exact 40-character Git SHA required");
  fs.mkdirSync(outputDir, { recursive: true });
  const expectedBundle = expectedServedBundleSha256(bundlePath, expectedSha);
  const startedAt = new Date().toISOString();
  const deadline = Date.now() + timeoutMs;
  const attempts = [];
  let lastIdentity = null;
  let lastError = null;

  while (Date.now() < deadline) {
    try {
      const publicAssetPath = `/${path.basename(bundlePath)}`;
      lastIdentity = await fetchIdentity(baseUrl, acceptanceToken, publicAssetPath);
      const failures = compareIdentity({ identity: lastIdentity, expectedSha, expectedBundle });
      attempts.push({ at: new Date().toISOString(), identity: lastIdentity, failures });
      if (failures.length === 0) {
        const evidence = {
          passed: true,
          startedAt,
          finishedAt: new Date().toISOString(),
          expected: { releaseSha: expectedSha, bundleSha256: expectedBundle, contractVersion: CERTIFICATION_CONTRACT_VERSION },
          observed: lastIdentity,
          attempts
        };
        fs.writeFileSync(path.join(outputDir, "deployment-identity.json"), `${JSON.stringify(evidence, null, 2)}\n`);
        return evidence;
      }
    } catch (error) {
      lastError = error;
      attempts.push({ at: new Date().toISOString(), error: error.message });
    }
    await sleep(intervalMs);
  }

  const evidence = {
    passed: false,
    classification: "deployment-not-ready",
    startedAt,
    finishedAt: new Date().toISOString(),
    expected: { releaseSha: expectedSha, bundleSha256: expectedBundle, contractVersion: CERTIFICATION_CONTRACT_VERSION },
    observed: lastIdentity,
    lastError: lastError?.message || null,
    attempts
  };
  fs.writeFileSync(path.join(outputDir, "deployment-identity.json"), `${JSON.stringify(evidence, null, 2)}\n`);
  throw new Error(`DEPLOYMENT_NOT_READY: production identity did not match after ${attempts.length} checks`);
}

async function main() {
  const [command] = process.argv.slice(2);
  if (command !== "verify-deployment") {
    throw new Error("Usage: node scripts/nexus-release-certification-controller.js verify-deployment");
  }
  await verifyDeployment({
    baseUrl: productionUrlFromEnv(),
    expectedSha: process.env.NEXUS_EXPECTED_RELEASE_SHA,
    bundlePath: process.env.NEXUS_EXPECTED_BUNDLE || "rebuild/browser/nexus-clean.bundle.js",
    acceptanceToken: process.env.NEXUS_ACCEPTANCE_TOKEN,
    timeoutMs: Number(process.env.NEXUS_DEPLOYMENT_TIMEOUT_MS || 12 * 60 * 1000),
    intervalMs: Number(process.env.NEXUS_DEPLOYMENT_POLL_MS || 15000)
  });
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error.stack || error.message);
    process.exitCode = 1;
  });
}

module.exports = { compareIdentity, expectedServedBundleSha256, fetchIdentity, sameCommit, verifyDeployment };
