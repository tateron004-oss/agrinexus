"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");

const workflow = fs.readFileSync(".github/workflows/nexus-live-runtime-certification.yml", "utf8");

assert.match(workflow, /workflow_dispatch:/);
assert.match(workflow, /group: nexus-windows-physical-certification\s+cancel-in-progress: false/);
assert.match(workflow, /shell: cmd/);
assert.match(workflow, /git log -1 --format\^=%%H -- rebuild\/browser\/nexus-clean\.bundle\.js/);
assert.match(workflow, /NEXUS_EXPECTED_RELEASE_SHA=%RUNTIME_SHA%/);
assert.match(workflow, /NEXUS_EXPECTED_DEPLOYMENT_SHA=%GITHUB_SHA%/);
assert.match(workflow, /nexus-production-certification-preflight\.js/);
assert.match(workflow, /nexus-release-certification-controller\.js verify-deployment/);
assert.match(workflow, /nexus-windows-physical-certification\.spec\.js/);
assert.match(workflow, /nexus-windows-voice-form-entry\.spec\.js/);
assert.match(workflow, /nexus-windows-stability-certification\.ps1/);
assert.doesNotMatch(workflow, /RENDER_DEPLOY_HOOK_URL/);
for (const requiredPath of ["server.js", "rebuild/production-certification-adapter.js", "rebuild/browser/**"]) {
  assert.ok(workflow.includes(`- \"${requiredPath}\"`), `canonical trigger must include ${requiredPath}`);
}

console.log("Nexus live-runtime certification workflow: PASS");
