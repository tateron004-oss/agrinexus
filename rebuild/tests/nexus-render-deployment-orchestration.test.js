"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const { triggerDeploy, validatedDeployHook, validatedReleaseSha } = require("../../scripts/nexus-render-deploy");

const workflow = fs.readFileSync(".github/workflows/nexus-live-runtime-certification.yml", "utf8");

assert.match(workflow, /workflow_dispatch:/);
assert.doesNotMatch(workflow, /^\s{2}push:/m);
assert.match(workflow, /group: nexus-integrated-physical-certification\s+cancel-in-progress: true/);
assert.match(workflow, /RENDER_DEPLOY_HOOK_URL: \$\{\{ secrets\.RENDER_DEPLOY_HOOK_URL \}\}/);
assert.match(workflow, /nexus-release-certification-controller\.js verify-deployment/);
assert.doesNotMatch(workflow, /https:\/\/api\.render\.com\/deploy\/[A-Za-z0-9_-]+/);

assert.throws(() => validatedDeployHook(""), /not configured/);
assert.throws(() => validatedDeployHook("http://api.render.com/deploy/test"), /official/);
assert.throws(() => validatedDeployHook("https://example.com/deploy/test"), /official/);
assert.throws(() => validatedReleaseSha("latest"), /Git commit SHA/);
assert.equal(validatedReleaseSha("919309BEFD2AC49B0F16D7E85D32C629AD5F8801"), "919309befd2ac49b0f16d7e85d32c629ad5f8801");

(async () => {
  let request;
  const result = await triggerDeploy({
    hookUrl: "https://api.render.com/deploy/example-secret",
    releaseSha: "919309befd2ac49b0f16d7e85d32c629ad5f8801",
    fetchImpl: async (url, options) => {
      request = { url: String(url), options };
      return { ok: true, status: 201 };
    }
  });
  assert.deepEqual(result, { accepted: true, status: 201 });
  assert.equal(request.options.method, "POST");
  assert.equal(request.options.redirect, "error");
  assert.equal(new URL(request.url).searchParams.get("ref"), "919309befd2ac49b0f16d7e85d32c629ad5f8801");
  console.log("Nexus Render deployment orchestration: PASS");
})().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
