"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const { triggerDeploy, validatedDeployHook } = require("../../scripts/nexus-render-deploy");

const workflow = fs.readFileSync(".github/workflows/nexus-render-deploy.yml", "utf8");

assert.match(workflow, /workflow_dispatch:/);
assert.match(workflow, /^\s{2}push:\s*$[\s\S]*?rebuild\/nexus-genesis-clean-foundation/m);
assert.match(workflow, /group: nexus-render-production-deployment\s+cancel-in-progress: false/);
assert.match(workflow, /RENDER_DEPLOY_HOOK_URL: \$\{\{ secrets\.RENDER_DEPLOY_HOOK_URL \}\}/);
assert.match(workflow, /nexus-release-certification-controller\.js verify-deployment/);
assert.doesNotMatch(workflow, /https:\/\/api\.render\.com\/deploy\/[A-Za-z0-9_-]+/);

assert.throws(() => validatedDeployHook(""), /not configured/);
assert.throws(() => validatedDeployHook("http://api.render.com/deploy/test"), /official/);
assert.throws(() => validatedDeployHook("https://example.com/deploy/test"), /official/);

(async () => {
  let request;
  const result = await triggerDeploy({
    hookUrl: "https://api.render.com/deploy/example-secret",
    fetchImpl: async (url, options) => {
      request = { url: String(url), options };
      return { ok: true, status: 201 };
    }
  });
  assert.deepEqual(result, { accepted: true, status: 201 });
  assert.equal(request.options.method, "POST");
  assert.equal(request.options.redirect, "error");
  console.log("Nexus Render deployment orchestration: PASS");
})().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
