"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");

const appliance = fs.readFileSync("scripts/nexus-windows-certification-appliance.ps1", "utf8");
const watchdog = fs.readFileSync("scripts/install-nexus-certification-appliance-watchdog.ps1", "utf8");
const watchdogRuntime = fs.readFileSync("scripts/nexus-certification-appliance-watchdog.ps1", "utf8");
const state = fs.readFileSync("scripts/nexus-certification-appliance-state.js", "utf8");

for (const required of [
  'https://nexus-genesis-certified.onrender.com',
  'SessionId -eq 0',
  'git status --porcelain',
  'git ls-remote origin',
  'NEXUS_RENDER_DEPLOY_HOOK_URL',
  'nexus-protected-foundation-guard.js',
  'nexus-windows-real-device-preflight.ps1',
  'nexus-release-certification-controller.js verify-deployment',
  'nexus-windows-physical-certification.spec.js',
  'nexus-windows-voice-form-entry.spec.js',
  'RequiredPasses -ne 3',
  'CERTIFICATION_LOCKED',
  'InfrastructureRetries',
  'NEXUS 100% CERTIFIED'
]) assert(appliance.includes(required), `appliance must include ${required}`);

assert.match(appliance, /FileMode\]::CreateNew/, "exclusive certification ownership must be atomic");
assert.match(appliance, /FileShare\]::None/, "active lock must not be shareable");
assert.match(appliance, /Remove-Item -Force \$lockPath/, "stale and released locks must be recoverable");
assert.match(appliance, /exactReleaseQuery = "ref=\$\(\[System\.Uri\]::EscapeDataString\(\$ReleaseSha\)\)"/, "Render deployment must request the exact frozen release SHA");
assert.match(appliance, /\[System\.UriBuilder\]::new/, "deploy-hook query handling must preserve the secret hook URL safely");
assert.match(appliance, /while \(-not \$ledger\.certified\)/, "controller must continue until its durable ledger certifies");
assert.match(appliance, /classification -eq "nexus"/, "a genuine Nexus failure must reject the release");
assert.match(state, /classification === "nexus"\) ledger\.consecutivePasses = 0/, "only a Nexus failure resets physical progress");
assert.match(watchdog, /New-ScheduledTaskTrigger -AtLogOn/, "watchdog must resume in an interactive desktop session");
assert.match(watchdog, /-RestartCount 100/, "watchdog must recover controller crashes");
assert.match(watchdog, /nexus-certification-appliance-watchdog\.ps1/, "scheduled task must use the diagnostic watchdog runtime");
assert.match(watchdogRuntime, /GetEnvironmentVariable\("NEXUS_RENDER_DEPLOY_HOOK_URL", "User"\)/, "watchdog must explicitly load the user-level deploy hook");
assert.match(watchdogRuntime, /Start-Transcript/, "watchdog must preserve startup diagnostics");
assert.match(watchdogRuntime, /status\.json/, "watchdog must expose durable startup status");
assert.match(watchdogRuntime, /state = \$State/, "watchdog status must identify its lifecycle state");
assert(!appliance.includes("ubuntu-latest"), "hosted GitHub runners must not control the appliance");
assert(!appliance.includes("workflow_dispatch"), "GitHub workflow dispatch must not control the appliance");

console.log("Nexus Windows certification appliance contract: PASS");
