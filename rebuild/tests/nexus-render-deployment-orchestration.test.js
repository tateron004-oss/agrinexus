"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const { deployCanonicalService, validatedReleaseSha } = require("../../scripts/nexus-render-deploy");

for (const path of [
  ".github/workflows/nexus-render-deploy.yml",
  ".github/workflows/nexus-live-runtime-certification.yml",
  ".github/workflows/nexus-canonical-completion-bridge.yml"
]) {
  const workflow = fs.readFileSync(path, "utf8");
  assert.match(workflow, /RENDER_API_KEY: \$\{\{ secrets\.RENDER_API_KEY \}\}/);
  assert.match(workflow, /RENDER_AGRINEXUS_PLATFORM_SERVICE_ID: \$\{\{ secrets\.RENDER_AGRINEXUS_PLATFORM_SERVICE_ID \}\}/);
  assert.doesNotMatch(workflow, /RENDER_DEPLOY_HOOK_URL/);
}

assert.throws(() => validatedReleaseSha("latest"), /Git commit SHA/);
assert.equal(validatedReleaseSha("919309BEFD2AC49B0F16D7E85D32C629AD5F8801"), "919309befd2ac49b0f16d7e85d32c629ad5f8801");

(async () => {
  const requests = [];
  const result = await deployCanonicalService({
    apiKey: "test-api-key",
    serviceId: "srv-agrinexus",
    releaseSha: "919309befd2ac49b0f16d7e85d32c629ad5f8801",
    fetchImpl: async (url, options) => {
      requests.push({ url: String(url), options });
      if (options.method === "GET") {
        return { ok: true, json: async () => ({ id: "srv-agrinexus", name: "agrinexus-platform", serviceDetails: { url: "https://agrinexus-platform.onrender.com" } }) };
      }
      return { ok: true, json: async () => ({ id: "dep-exact-release" }) };
    }
  });
  assert.equal(result.deploymentId, "dep-exact-release");
  assert.equal(requests.length, 2);
  assert.match(requests[0].url, /\/v1\/services\/srv-agrinexus$/);
  assert.equal(requests[1].options.method, "POST");
  assert.deepEqual(JSON.parse(requests[1].options.body), {
    clearCache: "do_not_clear",
    commitId: "919309befd2ac49b0f16d7e85d32c629ad5f8801"
  });

  await assert.rejects(() => deployCanonicalService({
    apiKey: "test-api-key",
    serviceId: "srv-wrong",
    releaseSha: "919309befd2ac49b0f16d7e85d32c629ad5f8801",
    fetchImpl: async () => ({ ok: true, json: async () => ({ id: "srv-wrong", name: "nexus-genesis-certified", serviceDetails: { url: "https://nexus-genesis-certified.onrender.com" } }) })
  }), /RENDER_CANONICAL_SERVICE_MISMATCH/);

  console.log("Nexus Render deployment orchestration: PASS");
})().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
