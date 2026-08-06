"use strict";

const { spawnSync } = require("node:child_process");

const tests = Object.freeze([
  "rebuild/tests/nexus-core.test.js",
  "rebuild/tests/nexus-voice-foundation.test.js",
  "rebuild/tests/nexus-runtime-e2e.test.js",
  "rebuild/tests/nexus-http-e2e.test.js",
  "rebuild/tests/nexus-browser-shell.test.js",
  "rebuild/tests/nexus-generalized-intent-parameters.test.js",
  "rebuild/tests/nexus-request-transaction.test.js",
  "rebuild/tests/nexus-visible-map-route.test.js",
  "rebuild/tests/nexus-complete-voice-visual-actions.test.js",
  "rebuild/tests/nexus-approved-source-evidence.test.js",
  "rebuild/tests/nexus-production-capability-registry.test.js",
  "rebuild/tests/nexus-production-lifecycle-routing.test.js",
  "rebuild/tests/nexus-capability-transaction-contract.test.js",
  "rebuild/tests/nexus-provider-fetch.test.js",
  "rebuild/tests/nexus-application-reliability-matrix.test.js",
  "rebuild/tests/nexus-complete-failure-injection-contract.test.js",
  "rebuild/tests/nexus-response-timeout-consistency.test.js",
  "rebuild/tests/nexus-multiturn-context.test.js",
  "rebuild/tests/nexus-content-population-extension.test.js",
  "rebuild/tests/nexus-production-experience-repair.test.js",
  "rebuild/tests/nexus-realtime-route-deduper.test.js",
  "rebuild/tests/nexus-production-certification-adapter.test.js",
  "rebuild/tests/nexus-canonical-production-target.test.js",
  "rebuild/tests/nexus-release-certification-controller.test.js",
  "rebuild/tests/nexus-render-deployment-orchestration.test.js",
  "rebuild/tests/nexus-live-runtime-certification-workflow.test.js",
  "rebuild/tests/nexus-windows-certification-orchestration.test.js",
  "rebuild/tests/nexus-full-production-certification-contract.test.js",
  "scripts/nexus-protected-foundation-guard.js"
]);

for (let pass = 1; pass <= 3; pass += 1) {
  process.stdout.write(`\nNEXUS INTEGRATED FREEZE PASS ${pass}/3\n`);
  for (const file of tests) {
    const result = spawnSync(process.execPath, [file], { stdio: "inherit", env: { ...process.env, NEXUS_PROMPT_ROTATION_SEED: String(pass) } });
    if (result.status !== 0) process.exit(result.status || 1);
  }
}

console.log("NEXUS INTEGRATED FREEZE GATE: PASS (3/3, protected 29/29 each pass)");
