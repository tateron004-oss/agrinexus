"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");

const workflow = fs.readFileSync(".github/workflows/nexus-release-certification-v2.yml", "utf8");

assert.match(workflow, /deploy-exact-release:/, "release workflow must deploy before certification");
assert.match(workflow, /pull_request:\s+branches:\s+- rebuild\/nexus-genesis-clean-foundation/, "pull requests must expose deterministic certification runs to the connected control plane");
assert.match(workflow, /NEXUS_EXPECTED_RELEASE_SHA: \$\{\{ github\.event\.pull_request\.head\.sha \|\| github\.sha \}\}/, "pull request certification must target the immutable head SHA, not the synthetic merge SHA");
assert.match(workflow, /group: nexus-deterministic-release-certification\s+cancel-in-progress: true/, "new releases must cancel stale queued deployments");
assert.match(workflow, /runs-on: \[self-hosted, Windows, X64\]/, "secure deploy hook must stay on the Windows control plane");
assert.match(workflow, /GetEnvironmentVariable\("NEXUS_RENDER_DEPLOY_HOOK_URL", "User"\)/, "deploy bridge must load the stored user-level hook");
assert.match(workflow, /exactRef = "ref=\$\(\[System\.Uri\]::EscapeDataString\(\$env:NEXUS_EXPECTED_RELEASE_SHA\)\)"/, "deploy bridge must request the immutable expected release SHA");
assert.match(workflow, /release-identity:\s+name: Exact deployed release identity\s+needs: deploy-exact-release/, "identity verification must wait for deployment");
assert.doesNotMatch(workflow, /Write-Host.*\$hook/, "workflow must never print the secret deploy hook");

console.log("Nexus exact-release deploy bridge contract: PASS");
