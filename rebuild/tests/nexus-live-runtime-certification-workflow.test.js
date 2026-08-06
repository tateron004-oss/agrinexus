"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");

const workflow = fs.readFileSync(".github/workflows/nexus-integrated-certification.yml", "utf8");
assert.match(workflow, /NEXUS_CLEAN_BASE_URL: https:\/\/nexus-genesis-certified\.onrender\.com/);
assert.doesNotMatch(workflow, /agrinexus-platform\.onrender\.com/);

assert.match(workflow, /workflow_dispatch:/);
assert.match(workflow, /group: nexus-integrated-physical-certification\s+cancel-in-progress: true/);
assert.match(workflow, /NEXUS_CANONICAL_PRODUCTION_URL: https:\/\/nexus-genesis-certified\.onrender\.com/);
assert.match(workflow, /shell: cmd/);
assert.match(workflow, /git log -1 --format\^=%%H -- rebuild\/browser\/nexus-clean\.bundle\.js/);
assert.match(workflow, /set "DEPLOYMENT_SHA=%GITHUB_SHA%"/);
assert.match(workflow, /NEXUS_EXPECTED_RELEASE_SHA=%DEPLOYMENT_SHA%/);
assert.match(workflow, /NEXUS_EXPECTED_DEPLOYMENT_SHA=%DEPLOYMENT_SHA%/);
assert.match(workflow, /NEXUS_EXPECTED_RUNTIME_SOURCE_SHA=%RUNTIME_SHA%/);
assert.doesNotMatch(workflow, /git log -1 --format\^=%%H -- server\.js rebuild\/production-certification-adapter\.js rebuild\/production-capability-bridge-server\.js rebuild\/browser rebuild\/nexus-core/);
assert.match(workflow, /nexus-production-certification-preflight\.js/);
assert.match(workflow, /nexus-release-certification-controller\.js verify-deployment/);
assert.match(workflow, /nexus-windows-physical-certification\.spec\.js/);
assert.match(workflow, /nexus-production-transaction-windows\.spec\.js/);
assert.match(workflow, /nexus-windows-voice-form-entry\.spec\.js/);
assert.match(workflow, /nexus-windows-stability-certification\.ps1/);
assert.match(workflow, /deploy-exact-release:/);
assert.match(workflow, /needs: deploy-exact-release/);
assert.match(workflow, /RENDER_DEPLOY_HOOK_URL: \$\{\{ secrets\.RENDER_DEPLOY_HOOK_URL \}\}/);
assert.match(workflow, /node scripts\/nexus-render-deploy\.js/);
assert.match(workflow, /runs-on: ubuntu-latest/);
assert.match(workflow, /node scripts\/nexus-integrated-freeze-gate\.js/);
assert.match(workflow, /npm install --no-save --no-package-lock playwright@1\.61\.1/);
assert.match(workflow, /npx playwright install --with-deps chromium/);
assert.match(workflow, /npx playwright install --with-deps chromium/);
assert.match(workflow, /nexus-browser-playwright-smoke\.js/);
assert.match(workflow, /nexus-content-population-browser\.test\.js/);
assert.ok(workflow.indexOf("nexus-content-population-browser.test.js") < workflow.indexOf("node scripts/nexus-render-deploy.js"), "preproduction browser proof must precede deployment");
assert.match(workflow, /^\s{2}push:/m, "integrated certification must dispatch only from its isolated branch");
assert.match(workflow, /rebuild\/nexus-integrated-certification-2026-08-05/);

console.log("Nexus live-runtime certification workflow: PASS");
