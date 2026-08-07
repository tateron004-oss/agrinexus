"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");

const workflow = fs.readFileSync(".github/workflows/nexus-release-certification-v2.yml", "utf8");

assert.match(workflow, /deploy-exact-release:/, "release workflow must deploy before certification");
assert.match(workflow, /group: nexus-deterministic-release-certification\s+cancel-in-progress: true/, "new releases must cancel stale queued deployments");
assert.match(workflow, /runs-on: \[self-hosted, Windows, X64\]/, "secure deploy hook must stay on the Windows control plane");
assert.match(workflow, /GetEnvironmentVariable\("NEXUS_RENDER_DEPLOY_HOOK_URL", "User"\)/, "deploy bridge must load the stored user-level hook");
assert.match(workflow, /exactRef = "ref=\$\(\[System\.Uri\]::EscapeDataString\('\$\{\{ github\.sha \}\}'\)\)"/, "deploy bridge must request the immutable workflow SHA");
assert.match(workflow, /release-identity:\s+name: Exact deployed release identity\s+needs: deploy-exact-release/, "identity verification must wait for deployment");
assert.doesNotMatch(workflow, /Write-Host.*\$hook/, "workflow must never print the secret deploy hook");

console.log("Nexus exact-release deploy bridge contract: PASS");
